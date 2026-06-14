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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBGLDXG%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQbQNWbbZKEdCjZUlTPB4wziSz9uFUXBbw19H%2F%2FE%2BrhgIgAkg5um7iyFsHVZmMhaErd6qpO9QqLgTmE7HX%2FdbeEqsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDG0QlNMo4efKcrxmhircA2xxAuopITMxXFpAbmGOuB1LYhzooR67FZtaUX%2FR6TjClPcc9tSa19gesOhKOJEUv7x4jACGZSbN1QiqyAKq9vpbV7tfu74XZ1J6ZrdrrBo%2FE5UKl0pTqRxhQa8hLEm0dge40%2B2BowRZfY6GxXYLh57CAuTLIRMjnYeI%2FEudncxLS3iou0zqU0%2FSJ0nq%2FUrrtgoLad1d6gYVHV%2B0cak4izb69MNP15XXb93mIo52aa8jEfbc9kzFlI0FZx5TloJfx%2F3HyUNT%2BKnEdLTrhrwWzVTT8rOHDXXFPo9GVa2r1UH3aJOWIbsEadQIxTHJPemtMP%2FWtCPyxqIgKGwPNZjGp1pQJWS3wmXbuTXqfF3aN5D4FqcWUJtkZCsOFvczc7ieIaLsasgCSVzUMJkIaWSFypLgOA5OD5z41Iqhzn6%2Bcz9GPnSXaREDbH%2BLuwr6L3eObYQO2zVtLaE03IjKoop55bjpF%2Fj0yA9cgOhtOlHaMRO8dJF7%2BWhzYPOy2zawst7VsdfLSjHh%2Bit9jadseI5sfzZwTBtthhZqDQ%2BZyq50XfxdsDKqy0c%2Fn7nXcOaQxGBsPGNe8Enk7ubl5jF0LisgvLfvl9c6Vs2fH7N8VhgyNzxo1ahsWUveBDBcBNp2MNycuNEGOqUBeCviMy%2BSClI5AUcn%2BlJMBZRhg3nCcZ%2FU9LjC%2Bb63N93Jy5lWXgHC0WCbWBgKYHU4rgqjiKvey7jOiarr4m2M%2FD5FyRys0YgJ82P7LSLcbK0gdTEloWxc00wRB70BzLYsGzipXSpt6ZdnvcykAVoy%2Fmjbk3FU%2B6qHfTUFyn9eFfog79cuRBDZORwCMOIqROVyYqPAh598FjC1jhklqF02V4g7vmyQ&X-Amz-Signature=519c5d79915fa4548b893fca9855ad3d24882ca310463c2642afad4712f99546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
