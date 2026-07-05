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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO7H5AM7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC1bFWsFbYML2YQ7fUIVd7RimsEanon%2Ba7A0u5xs8IZWQIgJbwZfUzPK8AkwHSC6sR8uebU9YDnNZKUznPLtDS5pPkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJgP%2Fv0R%2FyKZEvXeiCrcA7MyMOc6I8lvpnE16z5ArF4k95HYgsF56hp4b8nwh4A%2FDQN3Ga2V55zQRuyHiXIw%2Bt%2FElO3i3Ke0AbdX2WZAYdBzB7XscimO21PYbkGmvZKOfetnN80330K3XhF5AnWpytzyllH9z3JVVmeX76A9%2BnqCH5%2FtbbsAPcMjU3amPe5LrHBK5R9GZVZeo1dYrFW2f6W6UZZOVcF6RWvpxJHv6Afx18YZklPr7XsUDsxkgDdXWhpFXXT72444c7E8MXMkMv8vVpYAUhUtW39aeGJ5uJVZ3qnCl36PSHOM2AiyJREdq83QBD9TF6t0quBkjq%2Bjv75GeEdj3tW4FiykHk1kASe6KGVx6b8VbJJCsb%2FBIi1VUqMaFziiWLHSrBLk6N%2FwBaar0GLtnJpbKw0NClH6AcbYivXfknJvX%2Bxk9DX9%2FRMtgk%2B4cJM9SCrPNUtqssw15ueSJQ%2FORjL%2Bn%2FvErWuao6iwhpcneLCQTMQKJcnD6gjxxqSS5FeOdHtzTtWtu2yJyQ6I10guOxVZuWZ9zy%2BsLpB%2BxBaIWJqCV8iqe5rA48SCWMStwd4jopxJLd3KUE%2BclAzk3lorj%2F47SMhP2d61%2FKo0MYw5zMISoBzHB%2FFOcLahiFhgMnxnD9iCrfz7MLDbptIGOqUBghH%2FocxdIGOBelGVCgR9Ox2RqC8jnwGswF7Z9UkxlK8co7cnOTBA9CwQxn3JBYw5A89Q1dea1sCHL6bXjS7qm1cuNm%2FqPqzNQGmQZKlNxAlj9p0Lc3ds09yBP6UYz8yWrC7h37R0CfQBmV5vgO7WqurrsAZ2HAUe8OVgWoORQimk8xgHeU7i0Ob6QvME32xPa5zoRSyid9fhb4W%2BSjzpMG%2BCh2PF&X-Amz-Signature=9785134ecb01b44ccb1d825e5b4df04b14a19bcbdc3192041710e52a95cba722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
