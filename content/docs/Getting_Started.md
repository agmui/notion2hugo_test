---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM55JUGJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIElcCRx67TkZZ5gI8YrUZPniRb9uJA3fY7bccfUWO7lCAiEA3wg3J%2BfMVlDMgBwpB%2FlbMV%2BeA0MGcBlETf8vAHNfdrUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI25hUd0Jiw%2B6dDD3ircA38QMnWoCbKl3FGKBr85%2BqsZGQMg8yAxAhH5%2BlQl4MqYXC0LnP5IxBC6Sengeb5B9tRoZgy1uZ3Kqlfz1gssF9bpgxDNF2RkN1Fg8qo3cckqo3Q6Klkni6%2FojgF1CHALrXhgaTmK3WkiyYxmuoUVDRouNvif6jvqtNGmVOUVAgGP3g8%2BoDF6fdYgZVstYioOBK2GgW0LweVbdD0e7YlBXvg43MyW%2FAWstBRERgWjZMCX%2Fxh0d8PicBJR3Yvy4xDys%2BGVkrP7nGQ%2FZXKRoTY3x%2FF8Nz9699R0URMTO4eDwALSbmgB1e6E%2BDBEV31W0DeQhKxcUO23Uy5LFaYEtnpvTWwOA52zz5BVWqcU9eBmogcRbkqGrL2sQaSw%2BcVCWxDvAEc%2FiVpGgLX0tayBpp3qmitLLGpUSCrxNITtVpLPzrjQdSM9C%2BkFyVVxVN%2FA7RQZg%2BJwkZhDz0lGvtWcTSYiOBb7bQjLaXG7LBIwx0fX4K41JgF9nuxH6IRydhIBXBMZ7fKfj36CJ5smOGW20J2fq6IT6j0hPpgCESgXPRrBs2uM2Yi%2BAq6Z85yiciG%2BqFOhz5IbyL1E3X073WAVIem8Z%2FPwO715tog3CkUAbAuhmBJga%2BDUHl1JtQ%2FVBRJIMKXD7cIGOqUB9xt0lk8o%2FgNPD%2BPlg013Gi3SZ6Y0AqJRyAWZo2J52nkNskeMVoHSZsmh0WWBfrEO%2FQgnP7ugbAtPdsq5HLyTjY88vB8ErqwZhVozT%2FV0KaygyGJczrB4Yt%2BG7gmGnotR%2FL24ZbtNv8trUcPWTPUric%2BLO7vHL3bcLWL6k6I2X2AbVZ7NB04Qfu2GdGgqsMw3uGw3T24zNUqDpWIzODtbLZADD8yb&X-Amz-Signature=1337692b87854656da0493e3269cf8bc91cd98994913820da5b1d876ad3aebf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM55JUGJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIElcCRx67TkZZ5gI8YrUZPniRb9uJA3fY7bccfUWO7lCAiEA3wg3J%2BfMVlDMgBwpB%2FlbMV%2BeA0MGcBlETf8vAHNfdrUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI25hUd0Jiw%2B6dDD3ircA38QMnWoCbKl3FGKBr85%2BqsZGQMg8yAxAhH5%2BlQl4MqYXC0LnP5IxBC6Sengeb5B9tRoZgy1uZ3Kqlfz1gssF9bpgxDNF2RkN1Fg8qo3cckqo3Q6Klkni6%2FojgF1CHALrXhgaTmK3WkiyYxmuoUVDRouNvif6jvqtNGmVOUVAgGP3g8%2BoDF6fdYgZVstYioOBK2GgW0LweVbdD0e7YlBXvg43MyW%2FAWstBRERgWjZMCX%2Fxh0d8PicBJR3Yvy4xDys%2BGVkrP7nGQ%2FZXKRoTY3x%2FF8Nz9699R0URMTO4eDwALSbmgB1e6E%2BDBEV31W0DeQhKxcUO23Uy5LFaYEtnpvTWwOA52zz5BVWqcU9eBmogcRbkqGrL2sQaSw%2BcVCWxDvAEc%2FiVpGgLX0tayBpp3qmitLLGpUSCrxNITtVpLPzrjQdSM9C%2BkFyVVxVN%2FA7RQZg%2BJwkZhDz0lGvtWcTSYiOBb7bQjLaXG7LBIwx0fX4K41JgF9nuxH6IRydhIBXBMZ7fKfj36CJ5smOGW20J2fq6IT6j0hPpgCESgXPRrBs2uM2Yi%2BAq6Z85yiciG%2BqFOhz5IbyL1E3X073WAVIem8Z%2FPwO715tog3CkUAbAuhmBJga%2BDUHl1JtQ%2FVBRJIMKXD7cIGOqUB9xt0lk8o%2FgNPD%2BPlg013Gi3SZ6Y0AqJRyAWZo2J52nkNskeMVoHSZsmh0WWBfrEO%2FQgnP7ugbAtPdsq5HLyTjY88vB8ErqwZhVozT%2FV0KaygyGJczrB4Yt%2BG7gmGnotR%2FL24ZbtNv8trUcPWTPUric%2BLO7vHL3bcLWL6k6I2X2AbVZ7NB04Qfu2GdGgqsMw3uGw3T24zNUqDpWIzODtbLZADD8yb&X-Amz-Signature=bb2e2798641ab19d1e78e93c5b9e3390a9774939c34d82bf669f751ac02a0431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM55JUGJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIElcCRx67TkZZ5gI8YrUZPniRb9uJA3fY7bccfUWO7lCAiEA3wg3J%2BfMVlDMgBwpB%2FlbMV%2BeA0MGcBlETf8vAHNfdrUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI25hUd0Jiw%2B6dDD3ircA38QMnWoCbKl3FGKBr85%2BqsZGQMg8yAxAhH5%2BlQl4MqYXC0LnP5IxBC6Sengeb5B9tRoZgy1uZ3Kqlfz1gssF9bpgxDNF2RkN1Fg8qo3cckqo3Q6Klkni6%2FojgF1CHALrXhgaTmK3WkiyYxmuoUVDRouNvif6jvqtNGmVOUVAgGP3g8%2BoDF6fdYgZVstYioOBK2GgW0LweVbdD0e7YlBXvg43MyW%2FAWstBRERgWjZMCX%2Fxh0d8PicBJR3Yvy4xDys%2BGVkrP7nGQ%2FZXKRoTY3x%2FF8Nz9699R0URMTO4eDwALSbmgB1e6E%2BDBEV31W0DeQhKxcUO23Uy5LFaYEtnpvTWwOA52zz5BVWqcU9eBmogcRbkqGrL2sQaSw%2BcVCWxDvAEc%2FiVpGgLX0tayBpp3qmitLLGpUSCrxNITtVpLPzrjQdSM9C%2BkFyVVxVN%2FA7RQZg%2BJwkZhDz0lGvtWcTSYiOBb7bQjLaXG7LBIwx0fX4K41JgF9nuxH6IRydhIBXBMZ7fKfj36CJ5smOGW20J2fq6IT6j0hPpgCESgXPRrBs2uM2Yi%2BAq6Z85yiciG%2BqFOhz5IbyL1E3X073WAVIem8Z%2FPwO715tog3CkUAbAuhmBJga%2BDUHl1JtQ%2FVBRJIMKXD7cIGOqUB9xt0lk8o%2FgNPD%2BPlg013Gi3SZ6Y0AqJRyAWZo2J52nkNskeMVoHSZsmh0WWBfrEO%2FQgnP7ugbAtPdsq5HLyTjY88vB8ErqwZhVozT%2FV0KaygyGJczrB4Yt%2BG7gmGnotR%2FL24ZbtNv8trUcPWTPUric%2BLO7vHL3bcLWL6k6I2X2AbVZ7NB04Qfu2GdGgqsMw3uGw3T24zNUqDpWIzODtbLZADD8yb&X-Amz-Signature=65281d2bcd9c3cffad9960f8ebf78a0e0f4d15e5b35e41ad64051688dac39efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIXMZRK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2B2FZ4ywdpZaeKgnwTjNeWzn7c08ia%2BKY3lVumcaOWHAIgdrIRja0qYSxuYiFZtjEjfxAQpKDNaeNHUL7Uc%2F3Bl8wq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPkTfJNtxzWmmhO0ECrcA2jfSXrbH7MPLkDZkpob4LtOB6Mr1mbec3CD2J76pHJSOTSYQB1m0pAR5S4orLwVXtRSyPTsxlA1o5dF%2B%2BE0CCB8b8flrSFZNPauokoCg0Ljft4VSLeDLI%2BW%2F9u6QFwI8pe14h6ZhlUmKamFA%2FZtxpQx%2FOYnWSH2jUdDBVRUourRpH4lxP6ShxTHgm2iiK3IqBCIrqXB9a7pxWSxXKIM1jgIKc58HKx8gkOE0gh%2F97lPwn95S8zAAK%2BvY8poRH0TFSKFYjxQ1O3eFUiIfbG84sxLpol0zf6DcyaQ1EK4v%2BI8VKu8rTV0T%2BkcadiEea8NBQGUlXthHZfDyJGRUinyVaeQSk1SAbYh5arudFOrCyELuhsa3V96Tyt92CMx5ncqsWhzdKbPb92lsEt4iJ95NHOenkhHJc%2BTGuyFW7qadFCFa8e5WIS2vdjibYpOJc58V%2BsGEygtSELxaoaKxu32kkYjLguMA2z5Tex1ChsBavNSZOAWFYSrZxrx8JbIu%2FYJzLLZSh5ZoOby%2Bj3s43xPLt9k3EF5R0%2FVrrCKIbkvMlz3d363PT2lU%2Fzw1OB6PFpq%2BvKjcx%2FShtybVqJQx71FryAm%2F5Qk3OI5myqv5j68aS11EE3uFJ%2FBRF62nbBPMKbD7cIGOqUBsAwtZkM14N5osdad289ajfR2x3feIeqUaTlNTjcC%2FPoOjAMq3qVbd2NtSO8SWpPTiuS9jODhxEPHILRLiFirM2P9ZO21DuSvoguqATtntcUhrVR9lNdaZtCWAdGte2OhEGneE2cgIjclZ98BDhBg0wX6Ye6Ivrq9Ibt7tVPy90QYaMSC3rOMAPGAzu53YYLel4tA9zHf1w9CTbcpuNnJeSLFB2DP&X-Amz-Signature=74a63db0bd8c897558a1443c32673c3918f37002dc27427d0fe8ac6d04a77cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RH3JWHX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCxSOFH1xSlytMalwfc%2FNjJrlURhvfIHDembC%2BHRYP8qgIgE7Svv7ln9q9rYzY0odnGvBNR9KI25g7hjRkro3vI4%2Fkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMC5Tib5%2FIwPrZe65yrcA0rDn%2BFSBestDghL9OFlTST3osywuqu6FxcwnLYYjgIen2Dm9CWANAs06%2FiGPGky4dl62tpg4JCK5xJyX%2BepmTdFJVlypedlF2sNHJQOOC9bQiAQwfNDeeGBhDkOVapHGkGPQ7GfLs%2FYsY2hIdwUA5vCXJLiHmLlcw0NJ5utQkm8XpebIitIm35oyCrBkq%2BmgqqWWF1lSaFAHC%2FzPZp8Vywn7IvJC2RzkmQXg9F%2FGo6PyTDNXTitwsrmYdRGFCtBO7LEwdtRF5anX4U1fqBHMrBiVF5C61Dw2RZIy9TRvTLsxxI6beRbh6XlcgpwEwizjGBepfT4eTrXADIP2r%2BBguG8WzPeLzTQHE2G8UN2N2%2B0g3llzqr%2B5WsFgP77%2B3U49BRU%2Fe06fZ%2FRFRu9idVd%2FO1ZWmp%2BeBsgA6WeTji%2BpSKlQgQnjUpTdpQPOViKuwbMrhVBOk2JexNdUujMfz3qPJift4XSLhyJj4Pg7LWVTVpjkBJaVsvjz3tf%2BQudCj5aUdmHaimkkk5%2FQnGfPCunW8dBD6E5xjYu1fbQK4NYIVizRAjir8knoUf02xRLFxeut018kEai3vHWnJ02F9t3DFwJmCb6p6xU7jEgAqbtkOgJC22RgJrjktVK4VkWMK7C7cIGOqUB1CdCPRfhUEmgMUZ%2Bt1ezb9%2B4eBeal3FDY15P7nS0jqIc9EQgfjNpC47TYwh1F9O7ISi9FiHNLcgWc0kzVxv0UaZZTpG%2FZbqOrrs%2BT%2BiouhnHgZDCn1tUpFquhLIR0EUjjSFTt6E9Z%2Fra3t8BD%2BY%2BEzTyA6zEAFjsiKjuxk8gHWw2XzPBisi6QLtJFwZphaolzItdB41YjrSejOUeftt70v3pRyTk&X-Amz-Signature=005adc7080a4b646076669b2e6150359afddc7305d73fe63faed127a8743206f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM55JUGJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIElcCRx67TkZZ5gI8YrUZPniRb9uJA3fY7bccfUWO7lCAiEA3wg3J%2BfMVlDMgBwpB%2FlbMV%2BeA0MGcBlETf8vAHNfdrUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI25hUd0Jiw%2B6dDD3ircA38QMnWoCbKl3FGKBr85%2BqsZGQMg8yAxAhH5%2BlQl4MqYXC0LnP5IxBC6Sengeb5B9tRoZgy1uZ3Kqlfz1gssF9bpgxDNF2RkN1Fg8qo3cckqo3Q6Klkni6%2FojgF1CHALrXhgaTmK3WkiyYxmuoUVDRouNvif6jvqtNGmVOUVAgGP3g8%2BoDF6fdYgZVstYioOBK2GgW0LweVbdD0e7YlBXvg43MyW%2FAWstBRERgWjZMCX%2Fxh0d8PicBJR3Yvy4xDys%2BGVkrP7nGQ%2FZXKRoTY3x%2FF8Nz9699R0URMTO4eDwALSbmgB1e6E%2BDBEV31W0DeQhKxcUO23Uy5LFaYEtnpvTWwOA52zz5BVWqcU9eBmogcRbkqGrL2sQaSw%2BcVCWxDvAEc%2FiVpGgLX0tayBpp3qmitLLGpUSCrxNITtVpLPzrjQdSM9C%2BkFyVVxVN%2FA7RQZg%2BJwkZhDz0lGvtWcTSYiOBb7bQjLaXG7LBIwx0fX4K41JgF9nuxH6IRydhIBXBMZ7fKfj36CJ5smOGW20J2fq6IT6j0hPpgCESgXPRrBs2uM2Yi%2BAq6Z85yiciG%2BqFOhz5IbyL1E3X073WAVIem8Z%2FPwO715tog3CkUAbAuhmBJga%2BDUHl1JtQ%2FVBRJIMKXD7cIGOqUB9xt0lk8o%2FgNPD%2BPlg013Gi3SZ6Y0AqJRyAWZo2J52nkNskeMVoHSZsmh0WWBfrEO%2FQgnP7ugbAtPdsq5HLyTjY88vB8ErqwZhVozT%2FV0KaygyGJczrB4Yt%2BG7gmGnotR%2FL24ZbtNv8trUcPWTPUric%2BLO7vHL3bcLWL6k6I2X2AbVZ7NB04Qfu2GdGgqsMw3uGw3T24zNUqDpWIzODtbLZADD8yb&X-Amz-Signature=f6ee2d50f0bdb21befca47972fa0fcca52eb80987dc11c989ddb6ba7c68eb5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
