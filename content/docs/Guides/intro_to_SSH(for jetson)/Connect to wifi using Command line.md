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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMBOGSV%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ZnpRce%2FYQTx9LVNS%2FJE8en3CQJDpF5olHFLXCrJFjAiA%2Fetca8lDS2tbIOA6Ty27E1v9SmXq%2Fu5TOqO7dRwfzfir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMbsHFkff6zPHLY5FwKtwDrqCETDlhpQA5XyscpTXCjjG7DhW4e0DE%2FuzbWAcBdm%2FwPlhILMcX0qaJlQT0Fn6WDW4le4F8nOc7ft0I9jkE5y4d1o%2FCMSLBy0gctxBWAK9szK9kIXmuwb9xw2RTvBifLuo4O1pwIEFTvqj%2FQSygWWKysFUPS6ZZyFBo5UPR3piGw3Z8mgffojFAB5mCmmgyqR%2FiY%2FyXCpbSiZlHuzLn5j9LJ6P%2B7YK97kyfZBddDAcbe2opre7wlvXZVL0IpbnWzPbJj6t6lqVoaVC2g1zBrKH6jwI0H6s1GRpWcBOfYFeLjixcOaXoAr5PCrXuIWQisSpNPRL1LFy092fs52Bwl9W2NfAPjUmeKJ2zRv%2FWsvLWuKfeK5BHVf1oXPSnJg%2FaMbrMPATBOQUFja6LfK8PJGu4yrSxT7lwkNf7pmdVmiff27xfdYF4H38AxlEFm0nGt8i8U%2Bu0sc1eOoys4b8cAAiL41iHTtpdVzlGnliU%2Fsj%2B3W1OuCf4DPfShOd%2B0au50328gROXd5lKyWJt4c9Dqv2j4sPayTCBaxm%2FNdX48XGkl1PpnuBtWdjk0QkESdy0taNhmJSiCiZ%2FoYf5Ru2B4hwcO91o5bagzPrHvycEdatvtF%2FFcNfNZYGWD5Awu66OzQY6pgEoYG6xteU5BFoU%2Bm3SbebfMZjOs5nH8Pa380bI9uXmWwPNO165nGB8gVqGRWLsLkhakEgFmJ8jQYjmk%2FXPthsbFfv9BhH1A7Oj6uXBqrVTKYmijPqwu40E0UXAR%2FH%2BLcCIFvJThjtRujOuM4jlg8wx76ifDNNMegeKHIzhHHaYQKleXbpDG9iRFJv4rB1GfQ4LIczac1tqKH7cGl%2FHtc2vOV8ODwVh&X-Amz-Signature=6812cc320aadbb783ac93d386b9798e5c972f68c5c2108c40ca261b62e2fd108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
