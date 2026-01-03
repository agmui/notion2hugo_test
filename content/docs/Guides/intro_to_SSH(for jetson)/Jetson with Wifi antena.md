---
sys:
  pageId: "253da3bc-6297-8011-841f-f88fbe0b7d30"
  createdTime: "2025-08-18T10:37:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Jetson with Wifi antena.md"
title: "Jetson with Wifi antena"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 196
toc: false
icon: ""
---

## Jetson with tp-link AC600 antena

If your jetson does not come with a wifi card then you are able to buy a usb wifi antenna

> In Robomasters it is not allowed to have any WiFi antenna on the field so most teams buy something small that is easily removable right before we head to inspection.

[TP-Link AC600 USB WiFi Adapter](https://www.amazon.com/wireless-USB-WiFi-Adapter-PC/dp/B07P5PRK7J?crid=2A6KL18KI5SF3&dib=eyJ2IjoiMSJ9.Cpk9qEaP8FCv_AaXO1Xwmdj1GYqoa_EkhJ_amXLEabU7PLZMP8AzZEneLC-Q_nogRud0oO5wwc5VQh2Kqoq3H1Hdn97Su2NZg-V3jVWFKL5XL0lN7kGrMrWCY37kt6mFuCclHRHH5Rp3UA9D9gQYdBOUaSa3tI9rAB_biVS9DtI4c1LuYY-yQwoMmGm6ZVzHJPqlysQMd8U0TXJzxeWErZM9QvsEkeqeSMLB-9PStd8.ioFKhTTYaaA_uoO79flxMMDpEKAsdkgsyHzxQBjnf-o&dib_tag=se&keywords=tp%2Blink%2BAC%2B600&qid=1749570822&sprefix=tp%2Blink%2Bac%2B600%2Caps%2C119&sr=8-1&th=1):

Here are the [drivers for TP-Link AC600](https://github.com/lwfinger/rtw88#installation-using-dkms-)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SL2CENI%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD3MrJsGVAM%2Fzp6yqJAb8bpkO1i6FdRenyCrmETmNIu4wIgAO4ZEiZkjil1VP0ZckhvaiOAursw45dDf%2Brbk2H7rCUq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDBqZwV2sRTWbQAtlESrcA9DybXQC78zrb3u%2B9%2BZtQmyPbcu%2F%2Bg6MZcYUnPd7blyV5m16cmIdIAtbn7mI5rX1ILcg%2BC%2FZtYkMc2Nc2BBFl5kxhZoi1UACTtwxKNSg1tZDNygNQiAHf2WZPxCMRanVzlovJx791HTPuK6fvPqLdl6VjyVLhOpL9fUJvxCJRoMfeCD7hpq8ggEisGTex3abS%2BBmFeJFa35Rt5AOSGumzWE2oLUTikF9p5O53WpC84Zen9iYNskzHipqKW8jfWkM23NP%2Fe%2BK7jd7Td%2B6n0iVaFF5jMQk7QgbhU%2BBUkGaUKmVmoQSLv86vEP87zoHRPtQeQf%2BzvevE9XH8gJx3wV8tZTOvNNpdwzFS%2BHGogCQlEaQxgJeqXUMN76EPbAxrHzODuF6ovFKSYbgq%2BKS8OSwxOXk%2FBGXOtgrJljmU0rxPB%2FORDhD1JJJU5GOSTwdL1BsuFAd%2FIXG%2FJaoYVswdJagUAKfcZE3XgTiKpjRt3oA7oVGSJm5WDSvfpY4D66DvhykQBFyPZQfiC64TwEiqszlJxPIaAlVES%2FsRoeFJSPvHD7pDS7yJozlhyllhdr3E8tPdB92C4LCJenXedBPiBucOLbAPuSyQXuB0dwp07B5RJt%2BBVQwXWHEafQ2KkauMIuZ4coGOqUBE0kuKMLZV2zg6TBaDj7qVD6UvK257QdYyjt01xNeNtjiYM6DgkG%2BuK7CT3au8pJ%2BZu2E1yWWc8jeu8pYwo9EZNT78t2l%2BZGoTIr59MGyxwXzac%2F%2FvmsSfgvQ5ELxANCnS6eUBxHlVEHQoByEIsTmHE%2FW8F2%2Br4DuA%2BxXftM79byQAf5tdrsWm0fKBfTiorI7wapoGFFX6TBloOyqZgnXBA7Bj9Ku&X-Amz-Signature=674c3b11043364638e7159a38b7fee6a1965889d7fcf94f36c78a1e2672d74d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
