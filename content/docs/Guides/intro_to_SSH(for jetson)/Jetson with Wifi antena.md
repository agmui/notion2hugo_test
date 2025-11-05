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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZWXXWU%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkkArLEod9InTXr42eUID9S3Bzbpfn59jtkmhrFF7xsAIgW6ksG%2BgLrU1w162zDu4k%2F5qTh1b17IVvdCJlea41xhgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDmtF14BCNEjcFkjACrcAzYSSKCxNOPZ5vTFECldPGSrByAN9djKldqNMVUOfuxuxLXOafNE9YLzoLItCvoDq8i5bdORxwwQjFqNKXN4iwJSYiwkK3R9Q6fLPJaJNMAyZEHSZzuQ9StTj%2FEuusPKGZJGOu4oR2QSuF7E7v7hQlzJtO2JW6mjdeJbTmtKVTo8kieO51mU01x8uWMTAa2v32LcV8QcMDCEDg6i6n82ESvQqA%2FudJkstrZ1Ypiu%2BP13oRfqAYS8VtyJEcXHIsAS3zc%2B%2BPY6DbRUGHnbTOhOF4ZBeB7AycxwJfuPoAli6IIVoWW%2FsYnuCZlYd3pETlzeLbVZNVv70JmjJCRlXD3gtV1CST2I05Jx6Mrstf%2Bro2wTdx1ta8HvnGFYSGmJMAhoj4zV5mGXa5yp4Gwfg8t1xS5IdC%2FFt22FSiCc1mgxdGZOAUUorr77jUR4BNRhVUPX6m09TlSKlFicjeFkryYikmqZruBKZlB1vrIE52nho6UW2q92OQS7rcYl%2Fnoe8CFnMV7zJg6paUxDQ4mVAZ9J0RREoZSC%2BRLh4w89IsQjGq8mw7xD%2F4G0RUCAOy3yUyyIyVVbpWDp5kW0uNlz%2FyOvTDUxwYnm0K0j5Gl8216xNeqJQ6lbgvHBUtRe55gzMODdqcgGOqUBSWOXGSf7qXcAvGMJjLfsMPQQvl%2BU1CJfqJXnsBFo9O6orgRQuwyhm4LnwsK%2B1lj1RX4KzrGR4yNKjBQmNr70WIXLU%2BlI95evtEkrB177GFtebzH8FTs8IF%2BYZa4krrcObLxDyrSI%2Bal6mLXoIKMxNodLKzrvSW8Q8hbSJF6LHDevWj2Mfh4%2FsMRYjRwzLQUPzE8iIJOy3%2FKGmqw2qBf9n%2B6pRLsj&X-Amz-Signature=67345880e540aff80acd801c14a4e7f6dc5b59f5ece87aae87e9c7fda879af83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
