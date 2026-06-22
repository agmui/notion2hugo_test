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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSIPI6D%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDso3PCrQKSpZYvYgCzR1Yk35Wyw8SLx9BxMs%2FmOD6egAiAF1FOTzJxJAdxmaSltrQtqOUktMbopy8oTbYO4sQ756SqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAQ26sZUXht7PJLdcKtwDRuWmVb3%2Flrtyfl0YHYoFJ5HTqyUol36yIra7o3ypEIbBsq8JN%2FN8eYOxE2Dl91We1JQXXTRFlpcIifBTPzkD%2BePjn7HUQaY3NSpwDTiw2WOJVkq7R3D3%2FVEYm7C89IGtrnQP8AflVSpnswIvHQFM6JqsXbd09vyB8Wj5zuP8UL4nJcNTu%2B04UIBFFMSf2mU2mcw5B2ZYRO0RGjDf67XtmE6cGrpbGZO0uLHraMPotie2T1jGkrTbciO7NQpgJzBB4UyA0v2B1NsA9J%2BDjyr2mkzZQDrFn8ILNc78zz1sBdhTarFHu7PXqcNX6nhw7Uwdbp4fYWQtE0Tu1Bx2Em%2BHG1afIiPKbxPcxbEAFYCzC2C1rbG2LbWewbpPQ1bvKzvrBaUWvFJk518gl0pqb2gXwZfj9IdibCIwHKF7AryPK0qyh%2F4PEv2wMP2ZuurrTnKIHGPCEsri8Mv8hx9cstE78vPlQsfbG18RioOIA%2BD%2BiicZJyIPlDs5HFH6osjXX%2FJcoSRrF58wlFPLdWX6TxqhL2S5NCkBhSrjBBmKxXqy7KNRhcfn4VneIaqGsVCq2uCHjbvzG9bYMew3oBhaRTMUvJUqoVDuNpWyInxpMazKOAeXW9%2Bxf6PJu7wdLmswm9ri0QY6pgGnQ%2BzERchTMzN5iyMtG%2FuTKWDqyvcZhgX6wD968%2BLFipU6cQ1Dg1J5JcZu7RNDRz7nPBM9ARV%2BwIdQpQAglsdekIyAI9l5YVSZ9ddLanA9qjHirqXO4LbFDu7esnbxvDHdnImzMm%2FAHUGdmdc%2B7hcwzDscbqL90%2F00v9daYPBXSKRiLM%2FPmSetupxKmIueLLOIpPAR03GOij6ROqPW95Fg8Qv3dBqr&X-Amz-Signature=58dbb648ed1eb8dabc05c0efa8c4330c11d76ab01bbafb59a18b8d0906f16eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
