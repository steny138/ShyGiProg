# -*- coding: utf-8 -*-

import json
from unqlite import UnQLite

class Unqlite(object):

    def __init__(self, db):
        super(Unqlite, self).__init__()
        self.db = db  # UnQLite('./db/ubqlite.db')
        if self.db is None:
            raise Exception("there is no unqlite database to load.")

    def readdata(self, account):
        print "read data: %s" %(self.db[account]) 
        return self.db[account]

    def writedata(self, key, value):
        # self.db.store(key, value)
        self.db[key] = value
        print "write data success"

    def __read_prepare_stocks(self):
        with open("choose_stocks.json") as data_file:
            data = json.load(data_file)
        return data
