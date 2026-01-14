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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFYTMGQ2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBXjYun8C%2BQTgX6kIbWHEUle2vSgDbuwYAvUrVirgFyOAiB8AB8ghGm%2FP7btT9e0omZQ72SALnIgMS3iqksehz4cBir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM50ctFzpcMvB5Bzv5KtwDxTriH%2BuSxrDyd7sExvIwZydGJOO42Nm9DODljYfnS03JSqMRj12kuImmkBebFfWmgteIUK8KawV7RSBCgDKIxNjT6js%2FvYmVS360vnBUagQ8%2F9Au9Mruzpb8l2lYObOMaRLfG%2FdPnHSWmVBzdcgPAoI8xdThVzN1yilsD2qQsJz%2F2sP51ycTdnuHCcdf6Y1NQnMQ1q13pb8GIhP5UXCUhCKAfexGF7A9kgwsho3Y7kQMN3%2BhyaR1QxsfPxC7wNM4X23N1xWyr2tq0FsM1qT%2BO%2BBukxRFD7YLhgvYNekDBCgG7NFCarMqLAD9ZE7tJGM7ZUxXOVMYxXt%2BD7g79cLYL7ksRNpgWkSQSX%2BVbrVrtCo8RYmwXH3VfLmpifiYuWjOJGi1qDN45ALdKJ22V%2BOR7DfJwM1xEZxAPmVBrY1LH0pJMQPNTLxb7hRAYcLTQAQK5hDXCZbFqt6VNRR%2BsRCPkRNeq92qEBWVKzharp6eXC7INXt9Yng3xU94OlWSg3SNlYLJHDRgnlYmaGQlY4yCnFWxewvInRbtnG42KacqJxDkj%2BOaESd3vixTNnpXX2n7J4h9%2BeC9MgAWHizVo93ypdH9DQDuLor6gcHMC7BZXGC3M5d9h0fbODhB4lEwvM6bywY6pgHsiqov7%2BHFWHLHUwGA4JOBSJ2c1PDlr27eLLEMNao%2BqQYWbYqLXmcOJJ5nHHdWSQLCXBT6oyJpdTHS3HDQ4Swd8o9dHNMUUQFZ%2BxEB98rQoWwt5jJ%2BtdDLEw5Os9qN9kTKF8fdazoR9HMJmK90C%2Bpe39o%2FEkmLCyKfHwvlA06Gh6LCA8OR2Ra4qulxX%2BNg6L2QV58eOYYb0BMlZFg0JRqIhEfHTr3T&X-Amz-Signature=08a1abf941afd45eee7fa8d2809a6aefa884e03d15c062a476e02951607ac81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
