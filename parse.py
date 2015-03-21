#! /usr/bin/env python
# -*- coding: utf-8 -*-
import json
import os
import urllib2
import time
from bs4 import BeautifulSoup
base_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(base_dir)

def read_json(file_name):
    with open(file_name, 'r') as input_file:
        return json.load(input_file)

def write_json(file_name, content):
    with open(file_name, 'w') as output_file:
        json.dump(content, output_file, indent=4)

data = {}
pages = read_json('urls.json')
for page, url in pages.iteritems():
    html_doc = urllib2.urlopen(url).read()
    soup = BeautifulSoup(html_doc)
    print soup.title
    td = soup.select(".DataTable3 tr td")[4]
    percentage = td.string[:-1]
    data[page] = percentage
    
data['date'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
write_json('data/data.json', data)
