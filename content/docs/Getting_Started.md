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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXBIG5P%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6paST1XEUEp7WkDpZlnLRm1F4kpLmyavovQnMkSH0AIgNGga9TsKN%2BJa9ZA6J7U%2F5pVUpjy4%2By2e40WdHWOEr%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAAOh0E63rioqF6rpCrcA1PF6cxOlLSaqJegF1PQ4Wi2BfhMYtuLmFkhAn1OgIziew8%2B9JMlxACU2xFI777UtdOP3gx3lpkot5NSHz16N01scTw%2BnY%2F9uhsHczPg0GBRkS%2BTt4JUhPdkeFUwAaAElvie83qQJXoCb4tw0rSRmpVxor%2BU1ILGN3QyttVpeFiQ%2ByzJkDbqEz97sF8dGm%2F%2FlTdZx92Al0xVJNlJZQ3Rwki25ZblkVXN5AOftnqdY50rqzqomLDcKJlzommUqPoyr%2FJy0ZWS6TuneepNxUJuktNFn3y%2F4DKgvtXM0Gmtxm4hf%2Ff2H0vs7fsXwcy56o47YVXpv6cCnkyNusXFI5ORvowWj4xvAscCHCorrBVMBkTG7pKTEtvFn0IorvsmaV5Gz1aWNLt0PEjfQ7R3OV8QsrZ5RQCrgw0cZH4R2M6SsBWSIAMuYNSxB54EQyQV1ABKK%2B1pz05%2FgsgzHPh0EY2BeJjny9IupoTBcoiJXIiN8v2qXQJg7pHA0hMiE37lphWjsnMvXEqvWCdaYBP%2FI%2B3mK5YgLrBm7MhCUic3kcoKWhEQb99%2F9OWkCbjKq89XqXCJae2l6FQPoa5stqbg51q9ke2LM1df4gvQWRjpphUbTLimmKz74L%2Bx2ZHpLzVHMO%2Bmyb8GOqUBPjWnMbjTCc%2BBdfazfmUwMS2EHPf7byLKKpKVEJZbB%2Bz04cvaoF%2FgFkGY6GpwZeObYUCXfHp4IMnEbGRECYeeeiFmQaMpYyaY%2Bl1GdczCAOnWiOSxA%2F9EVkeG5e5roZ2ZpYWfgF%2B%2FDNj8xZILdKUK3Ac97oEJE2wlzBFkX7XZdMoxAjtsI%2Fxb7JdK6q4moBniplgIHdOo77aKLkCfnTuClnA2nyjJ&X-Amz-Signature=420698a60cbca7d4ac1966d993b9ce69854b5cb936fe800511159b377b8ac8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXBIG5P%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6paST1XEUEp7WkDpZlnLRm1F4kpLmyavovQnMkSH0AIgNGga9TsKN%2BJa9ZA6J7U%2F5pVUpjy4%2By2e40WdHWOEr%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAAOh0E63rioqF6rpCrcA1PF6cxOlLSaqJegF1PQ4Wi2BfhMYtuLmFkhAn1OgIziew8%2B9JMlxACU2xFI777UtdOP3gx3lpkot5NSHz16N01scTw%2BnY%2F9uhsHczPg0GBRkS%2BTt4JUhPdkeFUwAaAElvie83qQJXoCb4tw0rSRmpVxor%2BU1ILGN3QyttVpeFiQ%2ByzJkDbqEz97sF8dGm%2F%2FlTdZx92Al0xVJNlJZQ3Rwki25ZblkVXN5AOftnqdY50rqzqomLDcKJlzommUqPoyr%2FJy0ZWS6TuneepNxUJuktNFn3y%2F4DKgvtXM0Gmtxm4hf%2Ff2H0vs7fsXwcy56o47YVXpv6cCnkyNusXFI5ORvowWj4xvAscCHCorrBVMBkTG7pKTEtvFn0IorvsmaV5Gz1aWNLt0PEjfQ7R3OV8QsrZ5RQCrgw0cZH4R2M6SsBWSIAMuYNSxB54EQyQV1ABKK%2B1pz05%2FgsgzHPh0EY2BeJjny9IupoTBcoiJXIiN8v2qXQJg7pHA0hMiE37lphWjsnMvXEqvWCdaYBP%2FI%2B3mK5YgLrBm7MhCUic3kcoKWhEQb99%2F9OWkCbjKq89XqXCJae2l6FQPoa5stqbg51q9ke2LM1df4gvQWRjpphUbTLimmKz74L%2Bx2ZHpLzVHMO%2Bmyb8GOqUBPjWnMbjTCc%2BBdfazfmUwMS2EHPf7byLKKpKVEJZbB%2Bz04cvaoF%2FgFkGY6GpwZeObYUCXfHp4IMnEbGRECYeeeiFmQaMpYyaY%2Bl1GdczCAOnWiOSxA%2F9EVkeG5e5roZ2ZpYWfgF%2B%2FDNj8xZILdKUK3Ac97oEJE2wlzBFkX7XZdMoxAjtsI%2Fxb7JdK6q4moBniplgIHdOo77aKLkCfnTuClnA2nyjJ&X-Amz-Signature=602a9659f631abb07855580bd404291819a3e083b45e387c346cffb5ba4cf7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMLPNCJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkXnFK4nPLsQjLW42fJ%2BmmXIZeG%2Bc0q5i5xqsbljUWAgIhAMG17ORyjwjN%2B66cFGd31Nto1gii7D%2FlMg1oOMPqlErjKv8DCEIQABoMNjM3NDIzMTgzODA1IgwAkQSb5C02KfTUc%2F8q3AO6YdsMTJuqIxpeYE03m36CP%2FzHlTS5PR1vhE3FnZp%2FtQutVDqLsiR5Hwf9t%2B7L4Em4ORZewsL2w9ZAz4GTap41URAVSpjV2ZaVq8ZNK3GTciVWay2OQpedtS7oiEs%2FCfCkDcaHLLHLSauM%2B65KvCiYuTabucLzxrYuyTLk4hnRw4KRb%2FjompxOyCoxY8GnsBHgH90dOb0Lrvfd8QT%2BLVu7mHISmpW3nG6EnRjpXNWkpwIo3uBbSSDLyrcjuK%2BC%2B%2FB7dJVA4ia05CuaiBBrcjYJtPylPZFdSK%2BxLSf9dNNJuLXliptceN6Kg1Vbx5AH4bIDpi6RRdLMj28MH798g%2FYIE7Vt%2FwViQOqkHZLFnpDCMbBy6n63Rr%2Fx58VnFQ1t5CvMyyJa22fqII%2FdGHO5cA87M7qqOE1rjHbrJTnwopO7eVOzAZ6DRBlvT6WxocpHYP2XC%2FW%2FC9BTEqiHZTQZ4CvLw82RX8dpud4E8ELhFdZWPaZwRnYzP67VGlmvTqINnaZp4K4qvyChTRfAiZDdonnAaZrQyzP2RkajkycitndiiAWf5IvfmT%2F6Cxshyjg7E8Kp1BBZk6LjCjq3TMATB7Xon%2BQAaE%2BJdIB%2BTrOgPSNXuz3Al4mYt44OKr2DHjCo%2F8i%2FBjqkAecEbfXD62dJYWLkuQs3BuPNJhNSVnTTe1i6xC9xSrLoj2SEb4wcPtb0%2BnRoq5oJ6O2v%2FUJMpUj8e8fQgsC%2FOWvru5S4NRCZ4yoXirQhgnFwoYsi72PPUhtK0OiDXkJBQqKPtCYDYC99%2FQdPCLLi%2Bm4jKwrO4n46z7PQeZ8uMrG1k3tful5HkGQ6RTNV0CH50eGV%2BQ%2BCblkaRLAXECMQkgjtyF0g&X-Amz-Signature=4b7e7ed002369717304c89a55b8fd1575bb7c4fe82b1905a61b6678555be88b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6YS5MJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BSX%2FVYECVOgCnemqIzqlzdWpjPUS7knlCO%2BgeFt2zgIgQi7zq82mSHhekLwvL1op%2BGOHTkQJURAUIhosXirlPIwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKl34vLiMmVwb5pIbircAyl2deiKb4vCj1sF21PsdUtBR6lan%2FQNUccaVlcP7z3SAJHVSOvjaa8htq6bVjfr4eZZ40ytaZc62ASNolFY45gCZXxkIcZmmOwK7cosq0Nme3zpzmq7Ob0uOrV9ETKWTdCegmi7WjX%2B6LeB5mXl2MszM3pM%2BaYv8Ek3esYcN8dhHVf5etyj1OtbDmoHPyxLI%2Fnh%2F60mNSWjdPuprauXXrB3X3kF0iaGlPhXjuhBNQmUKcsH%2FmhvRB0FR58n6ACVA%2BUA3PHaepjFb2i5WFgUuogp83J1sL0YoMPjBCEIbDwyOKXu6102SiwHS3L%2FcbnCbR7N%2FYPkvusxyYeiFku%2FZxdZMOngh9HjRAPoi3j8GCwUThK3iKU894hPVmCtDGADVLlIhl3lxlUYovqA1wEbCa4l%2BV6Vxa9wqgidooUUue2No8781xo%2Bmu2DFH21GEErLWKPWAl5L4MGROBKgqQDn9sgROAoVB6Sk10ROR65fh%2FZJ7OSYw7eQrov0NC2N%2F8PvsEOKy3pL9CucQtWwKt0c8U6ahlIOtDkiWlmoQv2T6vB6FAt%2FYVTMPBYv1Oa4wwP%2FhJLarrnejBoReFFWuCNFb9C6BEt8k8urMy30Rp3KVP2CcDeoRUIwBAqhwlRMLX%2ByL8GOqUBPsnG3ZtbGW%2Bz7ZHw1CSp5Sp0eQ26Ai4zvw%2FS2vHFSaVhwhPq52knr74dIIOCGO7Tp3NWuE%2BYqFaaR02DN0Ob%2BQ%2Fz8X2mgh6eQwXDqGUdkTNWPteeb%2FNmnN2CT%2FpxbTgIInw%2B4zqHMjtwUdv2huaAFloAWIX63jMyWN4AOHXLYkenb3BLAxHwx54QSs4hlM4E8aqE7t%2BcWW57tzZXdjBhwn67SIpg&X-Amz-Signature=c8751b8fc10b166fd245a482ea912160f5923675fb3618adc7e2375e34bc7e72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXBIG5P%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw6paST1XEUEp7WkDpZlnLRm1F4kpLmyavovQnMkSH0AIgNGga9TsKN%2BJa9ZA6J7U%2F5pVUpjy4%2By2e40WdHWOEr%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAAOh0E63rioqF6rpCrcA1PF6cxOlLSaqJegF1PQ4Wi2BfhMYtuLmFkhAn1OgIziew8%2B9JMlxACU2xFI777UtdOP3gx3lpkot5NSHz16N01scTw%2BnY%2F9uhsHczPg0GBRkS%2BTt4JUhPdkeFUwAaAElvie83qQJXoCb4tw0rSRmpVxor%2BU1ILGN3QyttVpeFiQ%2ByzJkDbqEz97sF8dGm%2F%2FlTdZx92Al0xVJNlJZQ3Rwki25ZblkVXN5AOftnqdY50rqzqomLDcKJlzommUqPoyr%2FJy0ZWS6TuneepNxUJuktNFn3y%2F4DKgvtXM0Gmtxm4hf%2Ff2H0vs7fsXwcy56o47YVXpv6cCnkyNusXFI5ORvowWj4xvAscCHCorrBVMBkTG7pKTEtvFn0IorvsmaV5Gz1aWNLt0PEjfQ7R3OV8QsrZ5RQCrgw0cZH4R2M6SsBWSIAMuYNSxB54EQyQV1ABKK%2B1pz05%2FgsgzHPh0EY2BeJjny9IupoTBcoiJXIiN8v2qXQJg7pHA0hMiE37lphWjsnMvXEqvWCdaYBP%2FI%2B3mK5YgLrBm7MhCUic3kcoKWhEQb99%2F9OWkCbjKq89XqXCJae2l6FQPoa5stqbg51q9ke2LM1df4gvQWRjpphUbTLimmKz74L%2Bx2ZHpLzVHMO%2Bmyb8GOqUBPjWnMbjTCc%2BBdfazfmUwMS2EHPf7byLKKpKVEJZbB%2Bz04cvaoF%2FgFkGY6GpwZeObYUCXfHp4IMnEbGRECYeeeiFmQaMpYyaY%2Bl1GdczCAOnWiOSxA%2F9EVkeG5e5roZ2ZpYWfgF%2B%2FDNj8xZILdKUK3Ac97oEJE2wlzBFkX7XZdMoxAjtsI%2Fxb7JdK6q4moBniplgIHdOo77aKLkCfnTuClnA2nyjJ&X-Amz-Signature=f7a107f2342b02ede707d2dc56ad0a00a80803cdcd27bf25982779fc865f3d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
