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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFDB4YB%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFL9mudmISFqCeEVSsrZ8quUBFssIiClGdcvR3l9QkugIgWQkKNRafybgsgb2psIHttnb8EnwHytsBdzO%2BmzdnakIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi%2FZuk4BCFQti0jkSrcA07AxUOQ8Nkdd%2Br1KdSxvKNoa%2B6cUuzKWd9cFtjyXAwU4h1p%2BNGQYzRsB1pIlPkNb1NyTr7%2FrDpZxtgI7j0CZgwt9kB61c9yrdlnYkEzgRncsoWIK89FKstFTKS9XM696%2BqoHXYwSw6zSJJnrVRxgURrOX5YeztRul9QmJW6EOuW0zyAQ%2FTx5Cgp2AKLne6xkzhvVu8rBakaEH%2B63cgyNBiRXE7otJe%2By5xUJal9jlOCK4AZ7zFiGgTiagjaQxXD1LgkrYNV1jnxNCP8xLg1f4tVsUWpHa8KQksZdh2dafZ0cPm3xUuxNhP1pQFwJeFzbg0Gk5Lz1kg6GArqyxIEHc2CLHSX3YFsZ3jPbOyjNB1Kt1CZMxVBShpiMoVQvATMd04m7D7YE8Bswaoxjo4KMZ%2BUgGYsDOQsm2NfaOcRCKF3TauJKgkO4WtgfdMFgF5Djetq0eGmQseSPQGDjMrkRzlVv8Zu9KU7Tp3TL6db7UNNjF4Vnv6krHXlhC1LFXYtbv%2FKdVJ16%2Fhgqcj8Pbcejm9Y7eBAz3Hgnk5EB7OT3Swot6VqJFIa4v9pzjd0B0V493LGdu4cdrCHKNfUt10RjaVHlkoCJ0N%2FfjZjV6g9FasUmH%2BPEtYe313Y4HtZMPP4p8kGOqUBD1q82sR9kk2RAqixA6DpvpOgkb17t1ojbsv9oF67yW7B89fSsrFGKhXZJOxTfgodhKBoAj9ZT4%2FU%2FU3EX45lxmYAsKa1UXXnSEft0NiBUZv86P59Qy2nKc0gVuW9dl%2B80ECUudUXLL0MUR90lnU02%2B88zf0ObN%2FW0cajhJXdOm%2Foo7GddZ3JZjbeGID9RE%2FqF7iZ%2B%2BBxM2bNCKP3D2rgcrf0Qa%2Bz&X-Amz-Signature=83e3efaefefacac0fcae906f0cd359739db7cd0bda8deb730e4d01e2de9d0991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
