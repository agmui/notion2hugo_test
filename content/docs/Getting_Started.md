---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBMDVUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQKUdXLcdxbmSq7I0rI7G0cR8hveIASdoqkZVmP2s2oAiA1rFt5y9bC1S2y0VuWwDG5F4K1Q25H3aN0qFYx7HL5%2BCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMXgbuZUj9UMdh%2FnWDKtwDPh9dy9QpdoU4A5NDjaY9yalL%2F6ENemln0AhQIqVaHmeUmXxSaus5HwQNJFJ8Jfp95UGt4zpRVIs7cYsSXWxTBdAJ89mcWZiqeAY%2B6DGPtVdyNR7kpDgXQ8INvBqMV4BijqRGDhyNL%2B%2BIp1UpIoHJhzk%2BBTcR74tW%2BeVUT0SE6E0y23SU54PaWAnX2vjx%2FRPc%2BpWdPLXD%2FPfWQxp1evn7x8CMsgm3iniGs3DPs1H3YYwGmoNyq4CFfyWZVCOuyJlvYbp7PIfwpEejAfq%2BGLim8vJb3Vls1TvsK16UeAUTgyUqNtJhdkJjJhq83bTnEYq%2FTaDgefWjaaGvHD453wirwVBYhNyIRo%2B92FVGDeDruyRloriNwmWCaIFBTQSao%2BRQrTUPpd1cKJDg7SeLjyDePD87zYtuj0Qw8nm4qdeKY2pTVwkvOpkGbambTsDHEJx64PX%2BWaPxlthIzYVdtlrIH1%2BMe0D1DsnI2vaz9ecifRv7hI1hlof0WVtHk7D6Aa46mFoCgtC3FY623VqR7hY%2Fnm5UZKshyryqxqULsDrk6aJo9sseYbIK%2BBsLxFkI5P1n%2BSEGg4%2BhV8NqjgxPApve9QoLxXqhGX3YUptGWmUUnZIM18QJIye7CFuF4BYwhb3CvwY6pgEeteKQ1m0Q37RdToYx9xlQtAzBXxKVvHVkei34s8YeAeu%2FTnCKsmgLv9zYoPnUnm%2FWcuYbkOqYkR2fEKSo2wKBkNIqVAxGz6gxbftMIxntniSsPcNKsp0cNxGXPyDRGCAlvxAE%2Bdfv2F7wvyzHAFPTLkSlKPRb5t2vviB1TZidQ8cvsglx%2F7ZQFa5o6pq3d0exbGsEF4Vu0FJ7Q7dIGpKWVbXPOnWt&X-Amz-Signature=e9913a720f669f27a6e15726be7cbc27d199a1ef67430503f86da014cedac14d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBMDVUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQKUdXLcdxbmSq7I0rI7G0cR8hveIASdoqkZVmP2s2oAiA1rFt5y9bC1S2y0VuWwDG5F4K1Q25H3aN0qFYx7HL5%2BCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMXgbuZUj9UMdh%2FnWDKtwDPh9dy9QpdoU4A5NDjaY9yalL%2F6ENemln0AhQIqVaHmeUmXxSaus5HwQNJFJ8Jfp95UGt4zpRVIs7cYsSXWxTBdAJ89mcWZiqeAY%2B6DGPtVdyNR7kpDgXQ8INvBqMV4BijqRGDhyNL%2B%2BIp1UpIoHJhzk%2BBTcR74tW%2BeVUT0SE6E0y23SU54PaWAnX2vjx%2FRPc%2BpWdPLXD%2FPfWQxp1evn7x8CMsgm3iniGs3DPs1H3YYwGmoNyq4CFfyWZVCOuyJlvYbp7PIfwpEejAfq%2BGLim8vJb3Vls1TvsK16UeAUTgyUqNtJhdkJjJhq83bTnEYq%2FTaDgefWjaaGvHD453wirwVBYhNyIRo%2B92FVGDeDruyRloriNwmWCaIFBTQSao%2BRQrTUPpd1cKJDg7SeLjyDePD87zYtuj0Qw8nm4qdeKY2pTVwkvOpkGbambTsDHEJx64PX%2BWaPxlthIzYVdtlrIH1%2BMe0D1DsnI2vaz9ecifRv7hI1hlof0WVtHk7D6Aa46mFoCgtC3FY623VqR7hY%2Fnm5UZKshyryqxqULsDrk6aJo9sseYbIK%2BBsLxFkI5P1n%2BSEGg4%2BhV8NqjgxPApve9QoLxXqhGX3YUptGWmUUnZIM18QJIye7CFuF4BYwhb3CvwY6pgEeteKQ1m0Q37RdToYx9xlQtAzBXxKVvHVkei34s8YeAeu%2FTnCKsmgLv9zYoPnUnm%2FWcuYbkOqYkR2fEKSo2wKBkNIqVAxGz6gxbftMIxntniSsPcNKsp0cNxGXPyDRGCAlvxAE%2Bdfv2F7wvyzHAFPTLkSlKPRb5t2vviB1TZidQ8cvsglx%2F7ZQFa5o6pq3d0exbGsEF4Vu0FJ7Q7dIGpKWVbXPOnWt&X-Amz-Signature=6071f3ed249b2b84353050a571e39ed6bd976a2a8ce92cc5d33e2c3a4e7bb975&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUG6CCT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBKzot8YKY%2BSpITUPAwwHpzTjWiDs6pvTJHxtcEaaHGgIgES%2Bek6lnHA6vl5YqjIZmG2GwQwelt1s2ES%2B%2FiYCGupQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAmRixdNV78dh0ePxircA1fKWKrvd6PEpb2JIvzfCAUeEu0ODa205cbHzAkobDzx%2BcKQpGF8VxiPDgqO7rFY%2BC4sprsdMb9kiNZ2zS5e3IbwhbmNAB3lO9%2FH8HxRx9hYV9i0sRPNiJTt7QVBC05Ai7wT44N%2FHjLm4Xg2pI%2BmwI%2Buyy1gijslrp0E6XnN5xZcU0%2F8WRw6THFkn11Yf%2B%2Bk9ftHa693uFMGIQ3mZ9TOj1UynrD2F1JGnn9JDfF7XyNOdTGsiTcUZHGwBmx%2BsvTx3JEF4CnOwz5NzrYyq%2FrRs4lhk9zBHiRoKeMR7poCNXU2YFdzQeYsUkJxIVvaP6LPJyW4N%2BbEIuPAjtMYrwQYKHfcYuAVqjeXPZfzbebgaBcUZEnBv%2Bfl2I3ckEaK%2FDmOt9KHxJWQEcvaB3BpY5YPHADMLi%2Fmw3uziICE%2FslRrn673oyLsJhkl%2F8urpLC4HQ3n2hW4RnPxnmVe4YxyugAsGvfHvLZJsjVAmqIj0X0bjGB7ebceLZgY2RyY9E4n6IM9nPMgejB8bVAOClnRLeC5Dj98QgX1ltcWhaewNxlFz7xtll4vJSGiwSFJWIVt%2BdfHxKl8NPxLTLhiEt6KwG6%2B71qc3MbLXPYYKQnZeOL0locIq386n1OnTyOWIg8MMu8wr8GOqUBZkjkva%2BQlbfaTtI4fYTHWBMhnEHf%2BBi6ctwx9YJ6rHNRfxbyovE80DF5WElczTEkN%2BqhRGT9N47MjW8YIu67KXEgO6qBXWVKFE8c99%2Fchg%2Bwke6AvJf9LaWTjvrns4nXcutnjzDJ7zULB0tYvzXrOtc91waPusFf39gxCrOO7L2C7Aqx1h13%2BS1qwwv3%2BRvGU5hFthiQSrnzQklzP36LvtKqPawq&X-Amz-Signature=313dd1d835f3fcd86cbbe3f50ba452cfd22207450db281c64727ac1d2e806e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFQCKK5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBBYNYLNIyNaLN98H4xl07cf7w5DB7l2KaW9v%2B57rfoAiEAnA0FCLmpj1uSpYMOdrEJjp4YJitguU4lLmAw52OHq5Mq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA4iD%2B1tJmnpD2W9XCrcAxEph4aGohL1%2Fr1dLBYZV6p1Sxec3%2Bcf2vF2E7tIQH8Gr5EQ2oEIO5JtD%2F4MG3obj5HenmfiOYVe9UUxKBbfwDiSn5BMJ%2BK5r%2FNOAs6exd6dkdB2hK%2FDR8VNbMk1t4ug5sat8%2BC%2BsK8b1y%2BYSlqWNptSKFNwoQawjTuDXEhcbc8F9bianzXKGjZxC4%2B2M%2FoldI761AfzfMcOEU7TuDKXhKCMGqD28ZLTJvvUCnuXaWi16Pp1JHYjStpAlxK%2FnOAQzv91NZmPwh4Fobrzd0cG5%2BQTgKcAjJL9%2BwJbwEVm8YcMMAzw%2BuU8w8hQbVJ9vcWK6AOpQp6xYpIhNMG45Zc3RpTbdYDeFFYzx%2BwNpBA3HnBspINhJww%2BHhfNx1tzsTbR6zsDzGTMAL9fSBloIanYtOLc5o4nRCJ6EjywnMLSoFvqnoASz83nqwT5E%2Fp58as9wK9vgA8dxP2i0%2FeL1P3UYduZ%2FVrYBfz3%2BCIXE1VOPE8tvJvh7YqMRbReDn2EXei4g7VvzpozL5T9P9CHmemE5YHW0ZoIszFZsB%2FHaXZENHF%2FYUe2pVXaOcanfpFBgm6WDthf5QYTzFWocskhMK3F4eeshQVl6CDsLrNOlnC7CHnG4OHDYICrctaoQkB7MM28wr8GOqUB2wzq3Rfse5ApSLXU8%2FNK8%2Bsj%2B29%2BqsY%2F89geFzTXm%2B27fj6R8Uhsq3vA%2BlM9xcq6Qhd2qCKM9sacfQeZAeblDwUURuHK59fpD8%2B5CBOz5CyCuzN%2Bc13KYzVVU2JbJZMdqfyGp356v%2BzBsZxcvhmN6%2BD536%2F9woOm0cycL18n8D%2FdwwwD6BlomiygozG8OUAFYI2plOkP5fsUSChLHkXOsre5M1G%2F&X-Amz-Signature=eaaa4476a792d6ee6a1f79fe8d24dfccd924859c23c67d16d35b8eb25b088287&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBMDVUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQKUdXLcdxbmSq7I0rI7G0cR8hveIASdoqkZVmP2s2oAiA1rFt5y9bC1S2y0VuWwDG5F4K1Q25H3aN0qFYx7HL5%2BCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMXgbuZUj9UMdh%2FnWDKtwDPh9dy9QpdoU4A5NDjaY9yalL%2F6ENemln0AhQIqVaHmeUmXxSaus5HwQNJFJ8Jfp95UGt4zpRVIs7cYsSXWxTBdAJ89mcWZiqeAY%2B6DGPtVdyNR7kpDgXQ8INvBqMV4BijqRGDhyNL%2B%2BIp1UpIoHJhzk%2BBTcR74tW%2BeVUT0SE6E0y23SU54PaWAnX2vjx%2FRPc%2BpWdPLXD%2FPfWQxp1evn7x8CMsgm3iniGs3DPs1H3YYwGmoNyq4CFfyWZVCOuyJlvYbp7PIfwpEejAfq%2BGLim8vJb3Vls1TvsK16UeAUTgyUqNtJhdkJjJhq83bTnEYq%2FTaDgefWjaaGvHD453wirwVBYhNyIRo%2B92FVGDeDruyRloriNwmWCaIFBTQSao%2BRQrTUPpd1cKJDg7SeLjyDePD87zYtuj0Qw8nm4qdeKY2pTVwkvOpkGbambTsDHEJx64PX%2BWaPxlthIzYVdtlrIH1%2BMe0D1DsnI2vaz9ecifRv7hI1hlof0WVtHk7D6Aa46mFoCgtC3FY623VqR7hY%2Fnm5UZKshyryqxqULsDrk6aJo9sseYbIK%2BBsLxFkI5P1n%2BSEGg4%2BhV8NqjgxPApve9QoLxXqhGX3YUptGWmUUnZIM18QJIye7CFuF4BYwhb3CvwY6pgEeteKQ1m0Q37RdToYx9xlQtAzBXxKVvHVkei34s8YeAeu%2FTnCKsmgLv9zYoPnUnm%2FWcuYbkOqYkR2fEKSo2wKBkNIqVAxGz6gxbftMIxntniSsPcNKsp0cNxGXPyDRGCAlvxAE%2Bdfv2F7wvyzHAFPTLkSlKPRb5t2vviB1TZidQ8cvsglx%2F7ZQFa5o6pq3d0exbGsEF4Vu0FJ7Q7dIGpKWVbXPOnWt&X-Amz-Signature=51dd821a0f2a4c0195a433a58efc4687ac294af5fd5e8f5f077ab4f7d1f4a798&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
