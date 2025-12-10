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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSYYOFV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgArmUuSlGBUJHqkgM1nVlhIp5yZc8ZWf7gB2tj2IWogIhAKYPNkQZ3l0cfuURrNPWkUyerc%2F62ZG2u40Y6CQrCxV3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyESy2WdK2d6cuyWCUq3AOFWXdCCkTJFmPxNQhfnh7%2B70LDu1nw2schPytMxLUFw9iqt1dYNwGACRHNMlOVMC57oPWC8XqnMCNocDpldI5eCEU4xnpk83YK%2BI3fyxRgP6YA5bmjdWWYPs8SelyeOPibZiVfdGYzz9jqKAsByKz9w0KRGhRLkXxIjxI5nv41b1ira9GfkrhIr4CgbcFWFBkWHOKVNURLffAdjAmZCODM8g42J2eSoM7OqEqk0U7vjnTPzITfo%2BhHhszdse4zAlDsCxlT%2FWJYI3LfRsR3UH3p9ioo1sZtJb8MPtHibQ7A2910BsYwNH1ko8La8DTK4a8Cj1gFPVqcvGLpusrG7EHxTnqOr%2BqKVzwc6A%2F9CdbH5vtvi%2FXAB6jWVz3XxUQEpgETXlId8sEnuOJAIrLgQCowL94HF%2F49GodpZ3Db0HbP1jX6kgmAsYznsPhcASJYrkBgX20BKuVdPFxX1hz%2FSD7PtBYRcANHgxmSGzov9J%2Bu2faBxrgIBx02M7W1o46vjZ%2F3mLPdtvGwKEjFUEVoaiZZopzYvMSRlCia7JQDxpjkLJFypM81TgD3VqJmf1ykdq3khMkZWUKtxYP46z6BMu2CuLylCbw%2BDKSV367%2Brm4%2FZ3PrVkXx%2FDnQJFP%2FbzCVxOLJBjqkAVmmVfMXYQrTtntljkULch9%2BtGHj6UHCZfkuFMBpSftRBXg3c8sjwKzrB0NsRZHZXFYJMXK1gSHHKPWIYNw3rW42ogipYoPBZ%2F2daWtNsuWwPwSyg8nfzdlAw%2FhvFKe9vGDq5rLkC5lSVQT2bBRs%2FZMeCD0fKYjcRnqU0Ykidqu1wOH7tpAAd4pUVkjP%2FGjIWxPHxl95jxkw9dhdyeiHZvTN6qCE&X-Amz-Signature=eb7264496d4b2c559590fe18dc4e796ad727ea4b758231cc3cfca8774bcd5c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
