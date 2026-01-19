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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMOACQL%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDUXXYCgWIgaBvb43NJf8%2BseDqAHd8EdTi3zN6YZE8BAIgUvwYd%2FB0VmJsjF5IEnYzgsd0%2BuxFD3oAM89493rcxh0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3gVSrVSaLfBbPhhSrcA5XBCSifHrr9zjGI0LR3UbuYQVbOPSUSD0Ta%2F3XLXoipZPGFPTQ1nIk9%2BvdNSX06Z2AUD0jnkpEct5NPClzH6GVmywbNOtC1mxXvaDi%2B%2F50yJi23fO2SWV%2Fq5rf71QaNHf7Jgrte3zUPAxD8bN7YAbuYh0XbBLu3nApNMhYDYWsB7wj4JuEfa22Q8ntHTUzaAxYawgriUp1wjhIxEuUkfjPeFC4kC779whm3%2Floks6hEX5tJnPLJQTN39Q09ORy8SM3jl62waT1w6u0HASD%2FQ%2F%2FuCrM1%2F9EkC6G2xAha8GDFcuTtn1h8jIGfA8jQ05DUTzTohD0RxBPCI59Rz8VnrgXxx52%2FBmE8%2FdUIc4FhjlqE8%2BPw5B8KvrDGxaDDDGJlJ%2B4hGpRQfVwQ%2B0CUu2IcKlzIxVztb7y57LC%2FbgD706FQsJZ7pDkb7rjZmeMOZiDZNfhke0yjC5l8ejbX65wppQm6PVtdJo%2Fj4T%2Bpu%2Fk1kTquImu8SP%2FN1L2DFr6qCtK0UXFyAQY6%2FHkN1LSHJG7mOb3bUnUG1RmEvDiSCbl6S5EtO8XQ38ZCVnWVE9yjP%2B8d4Pr3%2FL5RygS%2Bwkv2y4dyyQ8%2FZackJDVpLIm6y99lkXRjWmibz12qK5EGXMJ%2FMMfdtcsGOqUBZnD76HWYT427JEz%2FfFzGz%2BRQOu3M6tdHfrZ2P0FbKBsSbKw03JU%2FYqkdW5lzFnSVWw4VMLTpGPDUzCJGdSlefkQ9aLBYgFvU%2F69vQx%2FVJK0hXjSwtrD3HbGmj90o39XLHlWl%2F%2BoiVqEet6vgioz1m%2BBjqDaVj7kKILPNdCUmrvlQhXYUiPaF5TYStIa1bRAszbc0O%2BSYzvZib%2FrlA%2Bm6DBGv1pzE&X-Amz-Signature=d641962a9338f5afca7488d4e8a258b37683cf4464938cb5e6bcbd9bacb880d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
