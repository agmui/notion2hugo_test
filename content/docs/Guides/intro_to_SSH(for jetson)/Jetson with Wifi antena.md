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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJNNJD5B%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeZntRiARXiTVZpw%2Fd1tfYjH0sHchu97V%2FaZ2pDTDOdAiEA2ZNPEu%2FIscdZSQGJp%2Bqz4ZWBmX4QD6AGREndFwOACokq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDG2skmBv1qFikXS7yCrcA7xgVHd90V%2FII7D2auIZvu%2BrQKM8J4fPohh9%2BPDYxjO69FKeBCd0Oyfp4iFJdwH0%2Bl%2BhsC5VlZMXwAMgjtiBFnsUH%2BJGIThJb7YiqB6GzXO2a1%2BF2FNEsbhqaM4QUN7i3jB2RDUVXyNL%2BUrGa8RqYdgCTF3AV6rTU%2BVaxVnt68f%2FnAbjvNIggIaAs8hheHDJGG7P9kinoPFCoX1AN3YMxrZLFlUaAA1ott6rV7NR%2FBZzYNA%2FP0RKi1%2BWSXXc5C7pZYQ8de7gZ2e4NhHAvOEEv5hNrSq%2FCrnUTRNLhOvBlnx%2F03EX71W%2F0bPR6VM2vBM2WGewdeR2Cg%2Bz8kjEHa8I6g4qhceQ1QWZOcsGysu22F3drsopu9iRVrPvtgkfIt8hPEWTwjxU33N810DBJgm%2FII3iLLtVliQDFEx4KkqYv16t1FnoTkIL1DhXr%2FFbZH20GAKru8TcC4wTPBK5%2BOEDTZdCgu%2BGqlNPWqqcVWf4T6uR8h6v5yNYqU3w%2BcAxxd40y4oNnBPSRNFWYjPHho0bWZe82J3lEWvgEO7GaONhksvc8%2B1akTaJz9uTqccmDyva%2FHJ%2F7mHtZel5GFJOGgVugzsTZLSEG4vWXbRSzaDzwCdl4Y3zHDoqYzJuNXXcMKCOpMUGOqUBgHUeMP5Ozzo3U9JaHLGpsAu23vDsdlMlxWnnfULMigcstvjjCURKecU8x6xEOJEmOPokhyT49fcvdGmRsjv%2BEunHmEr7JHRhdTBo5KgYnJ%2FEJ%2FHxSbA1P63dEDvcybpezMyDOzCX4HhUHLeFLK5Aq14nT8O4Zx8TY3MVMoO36AJKKAcDzKsqiec8td%2BQznFBLlDRAw3Wk5lmTSVRUamDTsYoPurh&X-Amz-Signature=30db3926ba5db67a33f6cbab3e37bab4b72aa6f754aa0c72b9367cb5122f1efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
