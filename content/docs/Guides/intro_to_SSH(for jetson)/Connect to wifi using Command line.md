---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LGD56R%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA89MqpIiPGfXwAOGxulOpuBnK38fuMUsMgSi%2Br1iZtCAiEAzKCoIpWqz6J%2FMxsGV093KmEvaYxIOqgylIZAOjB3ge0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJsDZVzFJF2KqnbxvSrcA414PtloJwMf7gcY7sMqgfP%2FNiKQA1vNmpdAlUO5%2BPMIA5T7zscotw8o1rF5A%2FvgjPkmBoEoQgG96fbmirgde4yie%2B98DI3kgwb3uFfMnZocOb3nXT%2B8rBMD7kLVNy8KD8IgGuLcwkvCiq6%2Fz%2F7DcZEFrtRIFTamtn5EGT5fQo4Ch0Zx7woYhK5agaZOvVBMz22SrH%2FuzM%2FX3wOKsv43J6kY0Ie03JUvv2r%2BQHea3hvTajSgqvtibR737whyQMOJHQA%2B9O6JqNgPyFAXuoquMR6r1tmruuuVquWapjM1%2Foi2%2BOv7XQOuPepbegJ7TFvAkqm6fsAQ4Y1d9%2BOuzdt%2FhVrkAaJ9LcG%2FJFBj%2F61Sf39VGqM1dAm%2B1P522%2FeUC%2BZBH%2FNvEg7sZv4aB4g7jfKcqlQnlQhNV8fzNmayhG7emZwrFsBrcMc%2F6QzdmhOO6DhPMUtN35h6vP8Vef41faCYbxlAu8pXPYZC7BQnxMvFE4oEgbTg4W7U6D29tk2skquNQg6ogsAETRsNgOLCnNF5aZpsRnDceyHk33mMqTE7%2F79kpqsv2wbeiEUqLBtBpBKuRMaByPmIgz8fyRI44bnr6%2FMsP6z6mYOktR8FY%2FvzirU1jG%2FxZWLIpE3afoplMLT4388GOqUBhicufTlcrquUt9UFi%2FbSO4py71idB9HNRHu9dl7dgh5JhrVU3pq2lMOsRSByaiFd4LZNIreJRkq%2BThcLMJNm8eD7xtiTj2Q4SNyrfBo9I2nUveXA67lx8%2BDaqQ7YnzsrIngh1EzecVPc0DP3f6x8PbmYcMWZ8H0rfhwORjzY73lq65eflxdoCRYyxvm1BdzTprYuX6nEpgs0y6hsiPLK%2FO7KqfzK&X-Amz-Signature=80319427487984e89d8f7bfd1805db654c14bdadcd6e850f0abc0fa24657c269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
