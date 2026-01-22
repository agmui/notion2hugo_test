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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GA4YCXW%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCRoVMk%2BQkVtkgMvgjpu92Ukw2TQo3YnF9dcvsppLfWJwIhALiRobeiEi9Woyi9x0QiUMukDrtNXO%2Fgi0XDPL1F2IiXKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtot8L0u8jVM4wRioq3AN0H%2Bs%2FkinTNq8V04%2B8d1uM79%2BcvikotwXY5GKo1kY3aj8ypdEOMzqwidOLnGTfwa%2FGtHzIRRAatQwpwUHVVMiLPVhA%2FQE3PW%2Fv4u45kVWmPCDdZ9Nxc%2FWlILrd%2Fr3k1eP6Yy0K7xSCo4FHDmTn1BdLt3g0ljnr1KqYPvsGY2tDtvq9jE3Xsz%2Fh2BWohKLiyK3JLgJK8ldMjOwruwP9ZtPl4e0fXGm1z%2Bud8fSjNJ8VdBbuwgO5lbmLoB72YUbQZ5NhmXlVxasO3xdsZvAzqBF6hMpOVrAEuXdtooKSre9XY2zpSHK%2FeOZiSNtShNutCTk2fZ0aWxiSZd8N9Ek%2BxEvR3pCxYoBtxryoILn9W%2Bx7%2B4o7lQmxHX7cqpqHI4xfKXqRoj65yVVBYABtA1%2BUTsJCe1Jzf4XRCyAwdPM1CfAujWljCcyFTcqOOLpJ8u6qdEhyXFkHmgakxq7A3trj9j4GjY5P4zMBIXJcbvxujUhN%2B%2F%2F7%2BAQDSHWOW79btToSDfkNZ5ViT5t5pCoj6ZGWEGtWH2chS4G%2BfsYcRhD8Z%2FE0kfz5S3QW5Mxppdem57ainbo%2FSnWps%2FwxB3EIIGGqOWsW%2Bnv8SklOFVR8mQyHdp9BEVntxRRrxKyax5L4fTCV18XLBjqkAWKI4WL6CZkn31LAZhBNjkKmINdNFnMVFX9NRyoo9H8YZO63DcWvAKkBv2qmL6n99I%2BS4PCfn%2BG9Wp1hQsn7urs%2Fuos3q3FmdKcCqfGx0G62RYMoV%2F1ESZhEw3PZClW%2F8xEGvMOCCj8bhooG1b5MtXo%2BaWFQ09qqusKxZXVl3MifdA2w1ggmewyr0DQj7TWN5OBznbwO6Hl8VGxRQ3AdGfaH%2FC5L&X-Amz-Signature=dadcef3b12491b5114c312235b9b94df91f7f5e1e0ce971a82091742db12751d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
