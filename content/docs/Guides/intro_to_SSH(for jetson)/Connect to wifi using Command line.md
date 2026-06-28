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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GARPPZQ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWoyQfMd2Kg7r7mCXZfz0ukfZHeMzSYFG7nLjIE1xzwAiEA%2BKRv31VIflKIL1vsz4rj9jdx3GYHR%2BQbPqtBZFVpLLQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO%2BbVmSEI5oyN9heircA4hzB9y9yRIcvxLlsq8dvmOHZ5wtfcU9IBeNFz9ugz5Ca07YEBRstLEZQwNIYOBFTpeBFzjUzmzaqIZbMIH5l9ewzKjffQ7qKdXkJHYG0HyW5qDJJSO%2BEpp3ryR1is%2FrmnIgT5s03JZNSu%2F6A7Po8430GrAYlixyzdmlXAKUrNdF0TB1ZRq81Hu%2BB0YkIZg42n2bMBvrtMVYsG4b%2FWoDM4egk5VPpIuWQhJ9iA9%2FFtNjqSO5gLnRoxwRjbmIfKnanEkyq4P8QenyHVz%2FKDdwdHTFl3r5MEDSfd9hSOgbmPKxf1FncCsja5fE2nxVNM7K50xnQik2CITVDCsL7isvHZmlPPe1FoQz1OUt3ZhfPJSrFB%2F%2FjCn0qzJNl1GrlbkcLS7KieOP5HBw2NKQa4x%2BObEeSmXRcJEguMVFAcgH9y2BmOtlN0fM0J8eHdJ%2BnB7ARaAWj1E8O0COE3FtGQzJ1Mnne8g2bacOnldDn94O%2FXEcORFpKzm4Ukk4HPY3UqnElSBQMN7nBwQkwPxwJzx%2FUZJvmQ08ASe%2FAV1C%2Bt%2FsxG3o9fmq3uD65sOzVCf6AVVjJfASC%2BRBmojKVs0GFJpZW5SkH20MKlWK4hqdcMHMiT%2FPjDONbn9KPiMsew7qMPudgtIGOqUBR2eFZmL0slfDesEca5yMhxWdyBgPZ4yv6%2FD%2B26i%2FSG5yCYhyGEp8bvQ1aTHBgZLw7e55NkvdoYY88nKUgzLE%2BuCscnrbyx9O09hbLh0WzoCj5ahfmnqXOJaakzoAuR9VVlxmfBtg3thjb3bPD278Eb1bujJdSZTj%2B6M3bof5EfxGBIwkcxc90rcVNaAyXOAPY6VKsP5AdVOLeCCKCCrDyzuXyfPK&X-Amz-Signature=385a478ac7840f9955be86f30ed78c4e0c7563cac0c246ea8682c29a20ede122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
