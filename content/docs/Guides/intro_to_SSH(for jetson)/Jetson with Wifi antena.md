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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SFFQAK%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHmHY4F680KLblAO%2BmLzKdRj5I3zGdzjwSPMxVO8mLRmAiEA4F4a70bcHPBq4YJ74xdcGq%2B6UfvS7fBIK7KpytEDWEMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDaqCUfrxX8te%2BZHjCrcA30z2aD8MxJ5GnyBdt0t8UvK4W6%2FoqcgR1pyxR1d85JMMR2G1Cw65uFg8FebUz5ElKikrUSs9TkSBTxyBQct6FQVqp%2FVTbyn%2FOR8MV9lq%2BB7FdEIj4J%2F3bH9i6CxD7e5VbyJt7GjYCUuYGaR%2Bu3gA1QmDGtgynu6QLNd65Dtzx7QiW24u14G8Cpyw1vt8zTpQo%2FAjRQSN8yjjDtAv1WxpeVlejp3QseAm4y4JBorhz5CBk96CsXk7YeX2wt5uF3OVlVULMvLLUBi9cJWKCpiNTZ6eExQ67agFfeEoq59Z16hFOKTmtN7hjr7MB1GANe5BenCm9WyNbXNbJNX7yk02ETc%2BreawGYWDB5NE%2B5U2eTVNS22gi55M07LpA22Ozw5hblvIug6pG5KbVyTJxKmlpS76E%2Bd3eAPgkwW5yEreSH5SrHcaBhMZWg1RNMeemCmyU7zZ%2BgePPjSFFx2UfllnaJom1G0iX3WrlPU5Aw2NGnRWEF2YJO3MRMDqFuL0xcYnV8KRHkuQlh3ER0in%2BKE99HGcKodrl2GEAfYCTCzjwPaR6XT5JnWXRrXku6ODBSb6qE4hgWe5PHluhHnvMp%2F3vsPH4zmJLDwiVWu1q%2FVGx%2Fv0W7bVrTy7OUlJtNlMPml89AGOqUBGrlv4zfnIKjKgspWvgfzLRReahBP21758A%2FBHslxCA9OTIH4byKWAnPg5XyQXqF1jrDvwS%2B9V9X72b5%2BBdfs4Zj0EEgTo6AogBBtRhU9iJ%2FNctU3nbNhu47ID10zLm0Aq5LVXupxv1JxFEbm9SwrP5L%2BeA2YOiqgV1nXs3noa4yNxjdr4rCT6iu4Gy5K%2FmeflmpIvP578E%2Fr%2FrJhCMrD7%2FXODhbD&X-Amz-Signature=e5798f211dd25b5657dd07bdb10308b946800955d6d26f329ccaf5fa514a06c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
