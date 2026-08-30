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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7OEEU6%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq9BaIVPB3yJuH%2FSzaFPWosI9yeloHvsouh63yjidSOAIgLgEa1hEbjxWZ9tYW2HnyVLDem2MavDKUu6v92bi6IQoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2BwuLFwthhUREaxMircA8FPgvnt6MYawcSTEU%2FLAOVCbBLU%2BWzaS0%2BO4uPZbj%2Bm8b3xSPssb%2BDIs3Xut7YlSkaZqXQFzsJEQD6HpK0pOAV7haSXrOd0VemhU7FssWg%2BXVOFNdnujUVU75j746AJvdncR6bluPo0cYdO8Jk2q1oCfIJngF51WMyUY%2B1g8A%2BHfU1HAj7B31FuOfq0gDIspbTWwZ8KMq%2Fgs12vIqkGI69iRaVYs5uWrxWc2YrAyhW0s%2FhY3iDG%2Fm0CGkvb0J%2FNIqh2HHS2qyF5LA%2FqdscBcx0sAh1hwhysYa19hUDLpgUj2jiPn4KSAKVRKfAk4Bdjbl6n%2Bc4zzzSmhNPfi%2B1N48mWKGhWVL2pFO5W1tGMDNNHYOIes7rGDpzpEsQMtPJVIPlwI8xknigEeQikxFmc21RbH9zTh%2F2WulkNJHlt%2Fv6ZuswY96YmWQ5lE0il7mPsYbC4kHIOtrK4vwmKgURfkqe3OEDq7QyI%2Fzt7h6puNOhTjhrkcFxwcsY0MUoXjHcljijBebRYpC%2BZ3OD9qHaKOKsl2yG%2FHtwYKCrah8e8E0wI1sz%2BQEOYcCJLvJ7sYoqx%2FgFYy81VVT1yNCZIvKxq4nRExed4W6K%2B5ldJ3XDmaDbst6C%2Fhw785zjp8Wn6MJrMztQGOqUBvmT9TDBvP0qHv4bb5OVMxS1RA%2FgP%2BNXCmxkurfoyiyOqY1nCAPiWD8U0Ujgbq%2FxoYCqYWydyHTUQfpMhgToPkDk%2FA5FhmPkLBI%2FlDUE3xmJBvVTod0zl5eFpKDRYtOzNaxPF1JP3p%2B7GER%2BOtn7VF1WIywzvVwndK11jWVhYkzMuOxjKo6%2F79Th%2BSKZrIBE1vsjAtJeekUVzhY6VFz5Sicjrjmkd&X-Amz-Signature=a7b69abf61707b569574529746b77874765f8228da275a4e3d7f8f119d52c993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
