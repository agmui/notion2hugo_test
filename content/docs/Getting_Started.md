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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGFYDRX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDtjClb3SolNOThKVyi1WuINGNVD0Mzk4Oxt0jYVRn86wIhAMIeIMGEo52cOsk5bRxTNLAK9%2BcbMPcvZ3ypjUSaSTm%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgzkRIQTCBaF51sZf4gq3AMz1O9SazsfvA4Ye31Ic1L8TrrkjtQb8GbhDg58OXVL1MFU42L0eaLeRPdE9fJMAiyy8q17HQKCCXwVWx%2BOCiAyXbCKBCx0R8FvrI%2BOrL1HR2gAnXx6CH9lucdrG92Xkrb4QKXY0RaAZ7o33YjtWPz6IB0vQFkV2iR0idMGhrLtojfYgKSDVb3sLCGLHq1feFZGlE7i9HcjiezDtjwDD6u9GHbo7bd6RkKm%2FjDT869C%2BzDO1TM9drnKKsW%2BzpGAIf7s4AUJGZi1Ei5v%2FUq4paBXqdSDsQr4TbEbkc%2BnM%2FwwC2izRFwDUfR5DYAcKmL%2FA7Tel2Rq83LwMMc91LZZo%2Fvet1YBDTNtjRwK8%2BdRA6TiUJ1PDAOW9%2BeEu3t7vZxIPGuLyz36%2FHBk9yOHu4oV8rerAOiA%2FdQc22qyp7pnE7jRIH%2Fp0l4eNKi8x1sE%2FCxFzGbwnkxhov5suQ4qkeefLhhOwXAJfrUwSh6do8Hh6s3v3AJSFGBvxlBXkAZUZrrIPvY4gSDgptFhteuXbPOgMcgqv0QZ1C5SyVGOmDB0Q7V5gkAMOb%2FCxTDsTAXAPhscbGlqD%2BI%2BAGiHUn%2B%2B%2FId2PH9GIuLaikGlmtFJTTG6odlZgdQ7EPZkcGnOss3GTzDghoa9BjqkAYQilfstrAYj%2B%2BYz4grIprOC2mFP61C%2FFktZzPoPhxeHkxCdrogSKJPLdDBTWio7Ew89sIKFE3KNFsyxLd9fbqgxnz36GJ%2FtNuE7HE%2BM6QhMi0hGvCqQDkYpX7r%2BUc1K8eLhIxNN%2B4c4QGD8zn6LqsrrU%2F81KMFgDyb3ivFCvk5EVHLJUMPjjjCXZOKaYrodbPyQVPJVGSdDaUQhh6XQyyAkyMdW&X-Amz-Signature=c5c18421814b4d97e27f11512520e1cb4a1a36ad6da3ccf0e1184413a3191b81&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGFYDRX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDtjClb3SolNOThKVyi1WuINGNVD0Mzk4Oxt0jYVRn86wIhAMIeIMGEo52cOsk5bRxTNLAK9%2BcbMPcvZ3ypjUSaSTm%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgzkRIQTCBaF51sZf4gq3AMz1O9SazsfvA4Ye31Ic1L8TrrkjtQb8GbhDg58OXVL1MFU42L0eaLeRPdE9fJMAiyy8q17HQKCCXwVWx%2BOCiAyXbCKBCx0R8FvrI%2BOrL1HR2gAnXx6CH9lucdrG92Xkrb4QKXY0RaAZ7o33YjtWPz6IB0vQFkV2iR0idMGhrLtojfYgKSDVb3sLCGLHq1feFZGlE7i9HcjiezDtjwDD6u9GHbo7bd6RkKm%2FjDT869C%2BzDO1TM9drnKKsW%2BzpGAIf7s4AUJGZi1Ei5v%2FUq4paBXqdSDsQr4TbEbkc%2BnM%2FwwC2izRFwDUfR5DYAcKmL%2FA7Tel2Rq83LwMMc91LZZo%2Fvet1YBDTNtjRwK8%2BdRA6TiUJ1PDAOW9%2BeEu3t7vZxIPGuLyz36%2FHBk9yOHu4oV8rerAOiA%2FdQc22qyp7pnE7jRIH%2Fp0l4eNKi8x1sE%2FCxFzGbwnkxhov5suQ4qkeefLhhOwXAJfrUwSh6do8Hh6s3v3AJSFGBvxlBXkAZUZrrIPvY4gSDgptFhteuXbPOgMcgqv0QZ1C5SyVGOmDB0Q7V5gkAMOb%2FCxTDsTAXAPhscbGlqD%2BI%2BAGiHUn%2B%2B%2FId2PH9GIuLaikGlmtFJTTG6odlZgdQ7EPZkcGnOss3GTzDghoa9BjqkAYQilfstrAYj%2B%2BYz4grIprOC2mFP61C%2FFktZzPoPhxeHkxCdrogSKJPLdDBTWio7Ew89sIKFE3KNFsyxLd9fbqgxnz36GJ%2FtNuE7HE%2BM6QhMi0hGvCqQDkYpX7r%2BUc1K8eLhIxNN%2B4c4QGD8zn6LqsrrU%2F81KMFgDyb3ivFCvk5EVHLJUMPjjjCXZOKaYrodbPyQVPJVGSdDaUQhh6XQyyAkyMdW&X-Amz-Signature=9fd8ce83973d95ab421377db5b72f3a3b6857e4b949b4ee3a5c7aa4c6b049d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2HZ4G5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGMUOMn0zR%2B6gFk62yMoYntPiD5orideS7gzvM63xSaaAiA2jYNngVqAc1s%2FZevm7uylF9bzHGiQNuRaO2F%2BLIj40Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpPpRts0x%2FJ9RJSV9KtwDKw2HiuZjD%2F%2Bhxz47yg6Vk7h7JDyztn1DTMU5QDDCi5lg7vO0bBPzL4QueMYy6eALyBKq2VKzm1bOaiUvGa2yvTWLh2o6drppGUpJEzgKb19hfa7ep%2F7NeudKiGOVFey5gzGh0KbgGbfYVF8s6a6t%2BAY%2BNrDXimHgyPGvIl1Gc3m7d2379tXgBG5cEOuN7GI0rORmMsiKCWvykk2Kx7ieNpRw8Em8zY3QWnW%2Biaj8PpzWn6yb3VnJ2G%2FOWF3Z2%2FxmTpiezTgzbARCCBYc0cbuy4IKpU5jz1ZpigYGYQDhafkp7MNOFpIgs57CPuRT7RO%2BGVAJm1SEfFRPXiaYLrBy9Mu1j1wDi6PFFOMDOcDleMBN1j2SIizeQlTyiMjYi%2FzgYUgdnK7PnspJqUwUNJ6XEARntE8NGUFQz1DZyR2ZnsUUJzSfcZoYixRgpxZmNLjPCOjurGpjlOPFoVpXVqhIKg7hiUx1IuxYYRZZ1wJIpYaX0C5xYr2DZpIWf%2FULtrkiJjuGks44ZDvTld5XgVw2HF7XIjJIneu99XsTkVl%2Fy5RjWm7%2FhGNbTUffotTa3c9Uuk38OyygKQZVXOdVKC%2F2afuCqv3PAWY0%2BV%2FOzYEsbnnwyRtDw5Rm89Sagn8w8YaGvQY6pgGDZDNInbePg2mSzpENz1q5i0Q%2FSNHI%2BCZ0UKFjjEBllgrPg3rgksviza8Jpu3ypegyt40pUmJh4XJNGWsSVF2RRaBYyRIPuNTIDTlnDGUH%2Bt6vfYTD2B4%2B%2FRlTYnb6vcaMgRNGQcCDjMqopMguFoSnevSXaeuLAHBo8qQDFqon9rE6arCbVcW4v0cg%2Bkl3XXhrXCbn8%2FZaQMMARFLJlGXzngNppwSu&X-Amz-Signature=dbd1438d1465e90704ba47585a31d7c8b402e50d5250a4d595baa4bffed0fb9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GAGHGN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFxca3r9WbkYrkBLL2tyV0UzC5sYU194TDlY2CFpvbFNAiBybIiu8opBVFIBUijjot%2FFgyN46oNINir1tgFbLbdpjyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIME%2Fcp234AKTjUo%2FU%2BKtwDcQr9t3xPyavjRDl2ZT2rXVYc9W9bsJGXeite0m4FB5ppJOCBTz4WgWwd9TK%2Bev2sz6khlf6YjiqO9nNcq3ZA%2B3IL3RllHbqcpVyys7QRhzs5oDvVNzpATQHVPKJhcnEGRXgkgpi9lkLdcxxIruslSxcsdqi8qPaBFgE%2Bi%2F8uHFcivtjELJWmqyFKJmRzdHnR1PutQt%2Bowxddo7I4aWVTqCBBnPDBI37oLBw11euraOg2QZerXyPvFJRcMzgZjn9inT4xg4IkI3uKDZBhaqx4HhRu2xZgVkFyA82%2FLn657o1vQdrEbgKEoLutvbf3ijxwsdCcy%2B4qBXvU3Z4EFoX8Ohayivtq99ebsQc5RvwbPRZ4TbLmKoiOHLNaeUhO8n%2BY6VgHpYe8LAWXbJrVH8soACeSRO%2FMORtI%2BU4wloJuOgJpN%2F5d0UYAUFe2W%2BAxHBn6dUddcvkG8rrou%2FBQOIYepug8pWtDLnnL3tiHINe5621ETgrCdhMWZMwaSrCD5eoFBYFqRYAZ4uHrzfGE56EZ3xt4W2JXqMNC%2F6ujVK%2BRjQMn3Piln5IezSxBzqua22HEq%2FPXUo1YqfOWXl0oXLaVwVfK9d8MviOuB5KRb0XPUcMayn9ECsrtzKHeHPkw64aGvQY6pgEufSL7N6RP2DM4bB982wMrNOZlwnz8Rnv5NFzxpEjHQ4k4dHIeTj7BVFF1KH1VdmeWMdnOqpeXlT9UVpb4exwniXkn7yea1QQMATyLf8%2B0uXMuW21n2kduCAdZhVTkq8tFkXWeHIgNLmP%2BgbNa1fjw7tM0Bd1tK8L2Ah9b4Zt36fc5j1qtqpZRClNaqbCTEqrXyXQ%2F92eXhV7AHDFHUX7D2sZWjMD4&X-Amz-Signature=9d87d67565ac612b83660eb8147a2f6e842723d5ee936f028f88edf33d147ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGFYDRX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDtjClb3SolNOThKVyi1WuINGNVD0Mzk4Oxt0jYVRn86wIhAMIeIMGEo52cOsk5bRxTNLAK9%2BcbMPcvZ3ypjUSaSTm%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgzkRIQTCBaF51sZf4gq3AMz1O9SazsfvA4Ye31Ic1L8TrrkjtQb8GbhDg58OXVL1MFU42L0eaLeRPdE9fJMAiyy8q17HQKCCXwVWx%2BOCiAyXbCKBCx0R8FvrI%2BOrL1HR2gAnXx6CH9lucdrG92Xkrb4QKXY0RaAZ7o33YjtWPz6IB0vQFkV2iR0idMGhrLtojfYgKSDVb3sLCGLHq1feFZGlE7i9HcjiezDtjwDD6u9GHbo7bd6RkKm%2FjDT869C%2BzDO1TM9drnKKsW%2BzpGAIf7s4AUJGZi1Ei5v%2FUq4paBXqdSDsQr4TbEbkc%2BnM%2FwwC2izRFwDUfR5DYAcKmL%2FA7Tel2Rq83LwMMc91LZZo%2Fvet1YBDTNtjRwK8%2BdRA6TiUJ1PDAOW9%2BeEu3t7vZxIPGuLyz36%2FHBk9yOHu4oV8rerAOiA%2FdQc22qyp7pnE7jRIH%2Fp0l4eNKi8x1sE%2FCxFzGbwnkxhov5suQ4qkeefLhhOwXAJfrUwSh6do8Hh6s3v3AJSFGBvxlBXkAZUZrrIPvY4gSDgptFhteuXbPOgMcgqv0QZ1C5SyVGOmDB0Q7V5gkAMOb%2FCxTDsTAXAPhscbGlqD%2BI%2BAGiHUn%2B%2B%2FId2PH9GIuLaikGlmtFJTTG6odlZgdQ7EPZkcGnOss3GTzDghoa9BjqkAYQilfstrAYj%2B%2BYz4grIprOC2mFP61C%2FFktZzPoPhxeHkxCdrogSKJPLdDBTWio7Ew89sIKFE3KNFsyxLd9fbqgxnz36GJ%2FtNuE7HE%2BM6QhMi0hGvCqQDkYpX7r%2BUc1K8eLhIxNN%2B4c4QGD8zn6LqsrrU%2F81KMFgDyb3ivFCvk5EVHLJUMPjjjCXZOKaYrodbPyQVPJVGSdDaUQhh6XQyyAkyMdW&X-Amz-Signature=f264ac75394bb9f86f3bd45f51f27cc7ab19074021693d66e5c0f191bc40d80f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
