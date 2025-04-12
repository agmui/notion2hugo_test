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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2T3ICN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAhp5mFrj81hOyipBm0A6im3mPiSpGyS7PmwyWbYgUx1AiEAimuMiJG6fejYuc6hLFdIhjQP2FwC4l0ArHTuiFGZsa0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQxz20mrrX6v5knTircA5WIS3sUI8FQdki0M19JdbEZUFgiW4A3qXL6bn98LkTkrRXXliE%2BrCMofevsBR7U0ez519176Ich7UaUgL0JljL0l%2BwcoYtm6cZUC6k%2FhycIiMSisYuumAvOdq%2F8YRxhSE9vA5Mw%2FXA02iSmznvaY1fMUgCaXSvC6Ng6CMb6r1hljnF7AsYDfzrLlntdk%2Bc4G76X%2BEtk2yxKozJBy1xUrfoxDUWqL4zBG%2BaU5xUK6qsgcmhoqDEBJiAwoM8ThC3j2l3pwC9SbJwRZpMhxDV6HRAkRc8CcpJo6TFag3IQND1S80TPIVZcTp4e4hxcrVFJc6Lp2VH4ffPMc9hi7RDw0LsNIgBMn2f2KHi8OiWHFrXsOcGGoK5MlILyCqKPR%2FdJi7e1An%2BxPqC27mrrB6RCCeFN0hRSnzjSBeI0KSF32cvxiWVVLwLTfyy43JwBEr49yk4B8zXGx3YKn9e3fNvtfr74nfoUv%2B4e5YVX0vmlAfUAwuLUE6Avv8DKLq7qj%2FfCpmu8kcWDVlCTdA60g8Gij%2FeC55pwB9nVGSEnISw6RbttDbii94AUkdhYA3BcFgHIjcYRgE2L17flE7rThzf62LQqMgkKcwjogAzRebL4tqS1ptivmbf3SQrfvqhJMI%2B3578GOqUBHdA8zdsePZucqCWBohW92IxyLbgjOpzCCGh8j2ts7FFHN%2FToueSB%2FwqX5sNS5Z1CLDB3aLTc4AX7ZeXxaqFEZYyxGNNg2nC3i8qJl1Ea353Qrnm0yWA%2FVZio38D6EcS6kw5JElzoczw9h5xGdP3HmnV78G27Yv1dYkuC7Dei9xYlVTe8ZdhPMA50vOVjgjxN5LEjcnV282OnUpH2f1oaBVjKVYGH&X-Amz-Signature=a0e8c389e5f80d9bbe2d243780e19438a5f5a10ba01040d189f6e5227be88806&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2T3ICN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAhp5mFrj81hOyipBm0A6im3mPiSpGyS7PmwyWbYgUx1AiEAimuMiJG6fejYuc6hLFdIhjQP2FwC4l0ArHTuiFGZsa0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQxz20mrrX6v5knTircA5WIS3sUI8FQdki0M19JdbEZUFgiW4A3qXL6bn98LkTkrRXXliE%2BrCMofevsBR7U0ez519176Ich7UaUgL0JljL0l%2BwcoYtm6cZUC6k%2FhycIiMSisYuumAvOdq%2F8YRxhSE9vA5Mw%2FXA02iSmznvaY1fMUgCaXSvC6Ng6CMb6r1hljnF7AsYDfzrLlntdk%2Bc4G76X%2BEtk2yxKozJBy1xUrfoxDUWqL4zBG%2BaU5xUK6qsgcmhoqDEBJiAwoM8ThC3j2l3pwC9SbJwRZpMhxDV6HRAkRc8CcpJo6TFag3IQND1S80TPIVZcTp4e4hxcrVFJc6Lp2VH4ffPMc9hi7RDw0LsNIgBMn2f2KHi8OiWHFrXsOcGGoK5MlILyCqKPR%2FdJi7e1An%2BxPqC27mrrB6RCCeFN0hRSnzjSBeI0KSF32cvxiWVVLwLTfyy43JwBEr49yk4B8zXGx3YKn9e3fNvtfr74nfoUv%2B4e5YVX0vmlAfUAwuLUE6Avv8DKLq7qj%2FfCpmu8kcWDVlCTdA60g8Gij%2FeC55pwB9nVGSEnISw6RbttDbii94AUkdhYA3BcFgHIjcYRgE2L17flE7rThzf62LQqMgkKcwjogAzRebL4tqS1ptivmbf3SQrfvqhJMI%2B3578GOqUBHdA8zdsePZucqCWBohW92IxyLbgjOpzCCGh8j2ts7FFHN%2FToueSB%2FwqX5sNS5Z1CLDB3aLTc4AX7ZeXxaqFEZYyxGNNg2nC3i8qJl1Ea353Qrnm0yWA%2FVZio38D6EcS6kw5JElzoczw9h5xGdP3HmnV78G27Yv1dYkuC7Dei9xYlVTe8ZdhPMA50vOVjgjxN5LEjcnV282OnUpH2f1oaBVjKVYGH&X-Amz-Signature=b3de3904e72b682139ae22c3fd749b142788aeeb9b108037d7bd42fcdea7eb44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVD5ELV3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCrOLaWBNg5zA%2BtXEK1YxRqFBUDq7tUgysEWKXXJfwjJAIgciAKQgiFgzy4slRJBXl9F2u9qIqoFT2hd5RtdP5rP48qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJVn5Ssg4d0UJhiPircA4xzWWNBAMLM6F9KxozsYowM5pacdtCWGZrerZjOZVBKsCLncOog4SgnMwZHF%2Borvk8ckSUErRNH7F8dwecM%2FvqeA93%2B6gHgWlWdiGo1YWLAF0cINil7lhsnqlZS92eMoMG0yyYLpvaW5P5r8TWoX8Xefeh6TE6xr8WVo7VyevdzCLYzy2t%2B2xThNL%2B65e8fR4tNcRLwDnPhA0zE2s%2BV390vcHBspQ26dmi88NwqMdZci0RfHlMNKJmL8oObLhFAmW7vsfLA6n9IRPEetYTW9dbznpHErvATJ7%2BVuxt5gqZKXk%2Ftwx85x4Rf%2BV4FRB2xI4XL4AVoFaPaRUpI5ewn8YDuHy3Z2cJ5MJrD1jVhlbzAMviyvMq6O%2BG3v6T%2FM4IPpFxllIiNSz3ixGzS4aeI%2FnDg6IsiBQ3z5P29P5G7N6c4ZTyNkYfKh6f46x%2BUvac1kGqO1c%2BpChnP53gXezfPE4GebMy6YNxMUtCdEFKkZwMvbuqlzjE6naQ0c6qJjT8%2Buavjd%2FoKlIsX0NTZds5DU1qS%2Bg%2FQT6lavVE%2FlRQvEdEtz29k78gHrCLuQEE9mJxzBs6nPLFn21r7WzIxhZKI3RhQUe7x8QWce9Gboiax0iBlynu5xnrUWO7804kMMJu3578GOqUBAvFr9f94mptlhLvaIg%2BIVjzuC1rGA%2FSO6fkX6xgPAJCrJcjiQSZ7hdhm%2BZQQIfjdyuqy%2BdwVJGtRbXtINS095qYLjVuoq290GMLhL%2BUHVvtoNYECL7nomhObsjZhp39EKWsm0OsmEMej8k3wXs%2FvVoDkY1J8VVmigeDty%2Bxrx1RdrUg8Ohu2%2BZEqfTblbrJ%2BwuEUmx4S05FEE7E6PQaReSNnqlUp&X-Amz-Signature=17f44cb1be01c687a13f8004e43cf5a9b940ad365181ced2664124fd8d7db850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM6GQIM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIBBQu6UivzcJBVNEe6ECiR2c2il53E%2FPwTIxCDuxZejaAiBHfTP5fIcwO00wr6HgFohcEOWHdYte%2FpSbTtdOxoeyGSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRt%2BzTgNr%2FNZIM5CKtwDn16sMXwQswWywaRBeHxDrddVv%2F9EoQ%2FWji9CZu4Y8mdBZQyz6I%2F4Fp6IlFMjg5%2BOdRex4eAkp2AAJdI42ELRTDeVd0XfFdKb9I3BVwY9RqKEOMQpq%2BeUNhG9DVEKiAbvnJS7lKom2IDngYDez6aGoTX9ZGZQ59GXlNvigGQhYVcIZhIFLmNKolsPiIOZuU4eMF4I53wxMUwCS7e%2FOA%2Bx%2BEWuX1msOzqVDsyrAnupW70dj1hNXxNzxp3uaCZrh%2B7e4058lb%2F4lZUoPFhe7SxqUmKiSTxVu2351GWOUZP78JRTVxR0clu0KhdOeTjrwbUsbNAtoOniglY54jE1qQOfkR%2Fv%2B0gTobr4Zp4un2ynFRjWhCu2rt2zD2NSL82OmMt4Bz89kuTTx%2FLsw8N7edqhwPZ3e4lY7Kvde6BbXvATJhsJsujqQ0hSUVC9biA%2FexaQTkQqzpx22kZYPfAX5aeXHmk3bKU5DqcmeNrDYadlVzfou5%2Fyda2Y0Hak5mobt%2FrEXtKKEeEMLzKSrQyLNQQkojLNIt19jFnRh4UW9TDGdfDBCwywMBLEPtgK4kp95Cpo8W0CjH6l%2FTc2bfdlgj%2FVUCKFMPbkAYyI1PBbHFDBPdvzMV2bm569J0%2BeTVcwlLjnvwY6pgGTrOcGZPYFvsYrK%2BueeSMS0Q6ACmVoDF3ysTNsmbY4KGzsGEJ07UaqEdhmbAHHzwEDbzcMhKKlH3zqvuU7U6zhXbRGDW4bAiCitRfxmZXrwwaHEn8nkzLZM2PIWY7c4wE0NePAxOMWPJTcXngyn8%2BD0TwewIGSW6yY%2BX0sdcfi%2BdcgWPaemahCw0JMEV2RKD6na2gY%2BIYotBa7Xjl%2BVvBsGheKtv%2F8&X-Amz-Signature=e4f80f42f3cd0662d5669b3e042d41ba7b976b2c8d5d7710239cee693c8ddf7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2T3ICN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAhp5mFrj81hOyipBm0A6im3mPiSpGyS7PmwyWbYgUx1AiEAimuMiJG6fejYuc6hLFdIhjQP2FwC4l0ArHTuiFGZsa0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQxz20mrrX6v5knTircA5WIS3sUI8FQdki0M19JdbEZUFgiW4A3qXL6bn98LkTkrRXXliE%2BrCMofevsBR7U0ez519176Ich7UaUgL0JljL0l%2BwcoYtm6cZUC6k%2FhycIiMSisYuumAvOdq%2F8YRxhSE9vA5Mw%2FXA02iSmznvaY1fMUgCaXSvC6Ng6CMb6r1hljnF7AsYDfzrLlntdk%2Bc4G76X%2BEtk2yxKozJBy1xUrfoxDUWqL4zBG%2BaU5xUK6qsgcmhoqDEBJiAwoM8ThC3j2l3pwC9SbJwRZpMhxDV6HRAkRc8CcpJo6TFag3IQND1S80TPIVZcTp4e4hxcrVFJc6Lp2VH4ffPMc9hi7RDw0LsNIgBMn2f2KHi8OiWHFrXsOcGGoK5MlILyCqKPR%2FdJi7e1An%2BxPqC27mrrB6RCCeFN0hRSnzjSBeI0KSF32cvxiWVVLwLTfyy43JwBEr49yk4B8zXGx3YKn9e3fNvtfr74nfoUv%2B4e5YVX0vmlAfUAwuLUE6Avv8DKLq7qj%2FfCpmu8kcWDVlCTdA60g8Gij%2FeC55pwB9nVGSEnISw6RbttDbii94AUkdhYA3BcFgHIjcYRgE2L17flE7rThzf62LQqMgkKcwjogAzRebL4tqS1ptivmbf3SQrfvqhJMI%2B3578GOqUBHdA8zdsePZucqCWBohW92IxyLbgjOpzCCGh8j2ts7FFHN%2FToueSB%2FwqX5sNS5Z1CLDB3aLTc4AX7ZeXxaqFEZYyxGNNg2nC3i8qJl1Ea353Qrnm0yWA%2FVZio38D6EcS6kw5JElzoczw9h5xGdP3HmnV78G27Yv1dYkuC7Dei9xYlVTe8ZdhPMA50vOVjgjxN5LEjcnV282OnUpH2f1oaBVjKVYGH&X-Amz-Signature=0150786dde3305d720fe73a33ee8ee6c47da120c87869b2fc1dae102bef033e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
