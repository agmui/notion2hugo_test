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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMGIANN%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnI7Sdtk%2FVtTmD0T%2BxRxmuPXmSjzifasZzoRiYMPLi0wIhAMAPxZ7FXaA70iOzB4PFfbrXU4YtWr8dHfVAAGP3RlU3Kv8DCHkQABoMNjM3NDIzMTgzODA1Igz6dP6ctYg%2BdGlCSioq3AOILbkKBn9JAOJmOr7y7Sw02SkhOvwdBOolelWQiNiJ76sjWTj4CJwF07ODF1OkWJHTHBKOgaqtzYr29SEZSsd4maBTbcZi0tj0IVt7OGIhJnCX67eEV5ShmftD3MeEOq1poNhKRwCv0%2FIEEYuPaiEltQGN5AeHH2lhw65rsDnwTpbD5Y76csoOEYCVzSmc5o3zJAB6teUXAcLkItTVxl%2B95%2FyboXl5ho9%2BnJDSkeD93jGjkL9lB6ADz5k0zsFp7KIsuD5lWAwl7HjVu60sMfnh%2BIiOIhGftqXJCDcdSd68XEnH5LQ096SnzgOfwzbGdG2js5WtTh%2BjN52FuEaozUgiEXYJ%2F27Mtwt5lQTBW1wgDHlR6yYjnMMyV1FjiizsD23p7DE7IbowlnrE1JlF4RTGXUbl3pdg0B16rDzdviFEFgKHOBi2YBxIHSXllfCS%2FfQy6diPtT%2BPZp4aoYmoVWUk9ysL5HrIYSQgBOdJUZVDSagSz%2B6qno0H9fCkRlcInSOckt7UIt3QXFBb8EJvpoKLJcw5AZh%2F8vKKN8y5D1HCtN8%2FMoThPEKEauDNhjeD5%2FMxF%2B2O7os7fCwadGdFGB6Cvzg3C7djvX4OjjugbVag6CB1inmkAO6WN1iapjDE58HKBjqkAcI8d3i6ivm3dQPQCCDjwc5wGYEFrrOvjPZFHmhpfoaa0BSWoETO0W8Or%2B9kSttFTKiLyfIJ4EdSM5Hzh580eW12fSnSZe97XPwh%2BJIhxQWk9lJvGisNHniPFtpKb49B5oL2uRRmQ11BcGT1R74YBnS2KMdbl9cP%2BdkW72jHHkKGEiJ7PzbU2c%2FnZUuzkDDxwURISJlsY2x5SrPSXA3yAa91iLYV&X-Amz-Signature=6b1dd8ecbb22cb80eb8a0cd65428167bda8524fedfa12bdd52b9a3983a6f73b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
