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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFOQEPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCGsJqjzSLkeU55cfFpqnAcoZuTYC6JJ6Bp5sDa25l1GgIhAKPS%2FWwKB09EkzMOOCZL%2F6YEkuAjgeN2AFp7M7te4eNWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb8AY%2Fo6VWG7PihqEq3AMzFF2smfol%2Fyh4hC8606gatKEkNVWoppwUrCZakr%2BhT%2FCVMXoyf7t1vaIjYXz%2BJBQ7y%2BhcRVxS6qrDYehp%2FTgwoQoWH%2FO21G99U16i4dBy05z0RKdsdAlt4100zNLXH9hdr3KQTE3b5k83V1f7jKYvAntMJ6bX8tSbF9TO7QT9S7EGYefjwZZpWOCSOPaKohNozoFW8kAL0%2FCYHjUJc%2FwNmMZxkVE8CgDE%2BA1HnSlvXb0xVVodVV%2B96rvhsvZ5pHxNwYXCVV33G2ic4WoV8vClD5TXZsRJF%2BDQ8kKykLD41r4QfJH8aGsE1VfDWSyEbGM1C54RUynq5p2wCCen851AKW%2BMTz%2BJPYntZ8T%2BKrVQBehlyl3GVWHe3CCaAKE7GTWnfu%2BZ%2B4uAXqxEv1LurYK0r8fk0ppdflbiX%2BwN%2BY%2FP%2F3Tj8Xd2A%2BGpOJEIEFACRSuMXfgEdokuGAAAQaq3LtAniiWaBBYvy35mXc0ehStNQ8%2FQdmRz%2FSatn5TNUqEWZxMUGzvB50r%2FQn2pqR9zTtBiM501nT7NYGvGGSW00zAn6aMwTtiIT83hlSoAh7xKhSWnIa3zVkskcZREtanoPd71rD2r9nGAPD1IRGWIy%2BDXlEIFjf6x2Szzibi8jzDFqrS%2FBjqkASZca02nryYkV%2FyXxoFbksnnAaMqcoYJo3gfsrEB4GqhhFqnBdM893qpQf1w6V8L55LECsK22Adgz0JbgpMS43Y5R%2FWBlSZ%2FlmlzRWuE6MM1DAzRZ%2BPs0V2UjfjaFTOMcvohVoxof1I6Ye24M9CDubCHI0xuNup%2BAz1M6Kh9WkK%2BghMtsHLRfDKav2WVKchoero9XzJ3yvKW%2Bj9CaE54K2mzoyIl&X-Amz-Signature=4745a53b0d12df62ba3f24d6da9de09dcbd84ee37223e6a9fba38aff69af770c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFOQEPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCGsJqjzSLkeU55cfFpqnAcoZuTYC6JJ6Bp5sDa25l1GgIhAKPS%2FWwKB09EkzMOOCZL%2F6YEkuAjgeN2AFp7M7te4eNWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb8AY%2Fo6VWG7PihqEq3AMzFF2smfol%2Fyh4hC8606gatKEkNVWoppwUrCZakr%2BhT%2FCVMXoyf7t1vaIjYXz%2BJBQ7y%2BhcRVxS6qrDYehp%2FTgwoQoWH%2FO21G99U16i4dBy05z0RKdsdAlt4100zNLXH9hdr3KQTE3b5k83V1f7jKYvAntMJ6bX8tSbF9TO7QT9S7EGYefjwZZpWOCSOPaKohNozoFW8kAL0%2FCYHjUJc%2FwNmMZxkVE8CgDE%2BA1HnSlvXb0xVVodVV%2B96rvhsvZ5pHxNwYXCVV33G2ic4WoV8vClD5TXZsRJF%2BDQ8kKykLD41r4QfJH8aGsE1VfDWSyEbGM1C54RUynq5p2wCCen851AKW%2BMTz%2BJPYntZ8T%2BKrVQBehlyl3GVWHe3CCaAKE7GTWnfu%2BZ%2B4uAXqxEv1LurYK0r8fk0ppdflbiX%2BwN%2BY%2FP%2F3Tj8Xd2A%2BGpOJEIEFACRSuMXfgEdokuGAAAQaq3LtAniiWaBBYvy35mXc0ehStNQ8%2FQdmRz%2FSatn5TNUqEWZxMUGzvB50r%2FQn2pqR9zTtBiM501nT7NYGvGGSW00zAn6aMwTtiIT83hlSoAh7xKhSWnIa3zVkskcZREtanoPd71rD2r9nGAPD1IRGWIy%2BDXlEIFjf6x2Szzibi8jzDFqrS%2FBjqkASZca02nryYkV%2FyXxoFbksnnAaMqcoYJo3gfsrEB4GqhhFqnBdM893qpQf1w6V8L55LECsK22Adgz0JbgpMS43Y5R%2FWBlSZ%2FlmlzRWuE6MM1DAzRZ%2BPs0V2UjfjaFTOMcvohVoxof1I6Ye24M9CDubCHI0xuNup%2BAz1M6Kh9WkK%2BghMtsHLRfDKav2WVKchoero9XzJ3yvKW%2Bj9CaE54K2mzoyIl&X-Amz-Signature=febcdace43db46559e21282e5db61e3c51b7feea96586542a43a2a348524cf9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KIZTTK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCA9VdycvrBLpOv0zyalEEEEd3FSLIcpVhraAPEqE2%2F7AIgMtrxmWOpbhzzVEr1A0AuDq2aIyt2KeoxOnr37aPZytEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcFgmkmBz%2BwzJBr0CrcA1AM2CvDRfeQ3nv1eEPla5ry2cjAAc3otxXwyrhrzqFzksUCwjOmh4GP6bEWLdrQfamFDQ8c7ngyXPs2U%2FYewRTrg3DqeS7o5JstRWmRd8z9xjFtVySiV8mbwzOWCJBrtMpmx6KOcjDj%2BaVJcm4RZ%2BA7h3cKJE38s%2Bems3OBX8kHNNn4bY61aZGs7AyUQBqubeER8T%2BZLGyKInGyLJFQ%2Fa%2Fn%2FRXYV8xD51gbavgBMPbiZyd1zdbxRLDfZc1bKpcsZGHp%2BasrXDlMI9KtbAqj3rReoe20kYE7H6MaaXCKXh5Jo01JT4nkugvuNQXNOA2DF%2BOstpPu6WRbzbXdGXnat8cNKNf64rdo2csG%2BpwfqNiiWb0n9spi7jis0ZWwl%2FQpIhT94ER8y2NuBURaft3r%2FarGiOb3j4rR6iuI3OGCjKUugl%2Bm4yy84QOUCxMz1Q%2Fs%2F8NflE9UANcxR%2B0bMnxInq9VLQT1xC8wX8uOorC2BtF%2F7fh5g0MaYc5eELFxCwyx4yUG0IsBBEj2BqEGlLmEXwKec8aYOQ3iSM0iti09CME5PhOrwT%2BAYgns364Evac8CTUXDdzCHOa%2Ba2sN1a6FNrUsKD%2BM35nzoJRbXDj5SpbMCOWUyXhvc4WhG2LWMNmqtL8GOqUB%2BNhYMwKKeeoiYO%2FFNil%2FRyZAK%2Bmz0SvIArli7R8262kuQvGcIzZxdHPeWQ3UqlTA3FWDUHWfMIkvChLtSFQ19lTtkGy84DfY9bsTp0SAodUCdDUtshu7Zl1PuoVoBcisbZuVJBl0IMNx8x9B2jXgHg6RV6rpJouCXrEQXbneoLXOoeEKSSMVloK8xmM%2FVpv1Yjgm9OiumZIiXTzKm1alGpsM35UL&X-Amz-Signature=d15532b82c1336165f09753a1bfcab947c64291d7f7dc3ae9a2698506178a959&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ3WY2G%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD2cdT8Lq%2BBU0Hvv2Is7WrUGamHNmW70TVttBX3WzRSQAIgf5La28rmrTRVOqU4uD64NK8soIW%2B8WXBqxmZ%2FvPhMNkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFSNivQ0IbUlI3CWyrcA8MWbIjcLzDMjZeOCnS0Ehd5TmQNER6VJ8LDOHod%2FA2nP2s%2FPUsrwO4mfRRAW1qmirzW0kTi3NI%2FtdQZOpKOpiv%2BAPAC7lnZZJP6p8E%2BjBtTOAYaAJKADUqVgC2SZiLeMjqKLcD1gUJxwq42AXNzWI0f6Ll%2FFhs5ruNMHESgosG%2FLUIikc7dGqDtWU2X2b4hZ4GpaHFiM8Yu8xIifA1JIoPGlmvYGWZNwc%2FwRZ1netQpzEtgAp3KHKBAAOdE23xn8uczrY%2Fz5FPGTOnJ5qTS0XFBeLdfRyxNDpfiAQkT54WYEz74NLQHVUDe7uoyRz9vqCd7b6QkK7nTCmk%2B9e1mP667%2FdCKYy5FkDgvpQymwrgtv%2FBDXqHSLFfSQOfbBN6HaG37X2gq5hyxQe0dKvZSPq09i4RYalHS48zvWZxqfexqVa5JNSYhk5UpsYYVnkLdvcvH%2FEaDpm%2FXVpMVNktRoxbHDgRE2LsJfFcE1y23QI8z%2BRT2vApgCnhal63iMGvgSipC%2Fu0k5sFw9illI1lGUij8bsuoTOiqNs%2F1DBNZVjHrw0Fb1LTMtRVOou6fLpDf6Ix8zj3y9ABo4XAX%2BPxyAZzNA7s%2F3tCTdCfjd%2BaDlDS0ViLbp5pXIQyN1fiOMLWqtL8GOqUBzJCOhb17rkJOsvf%2F2yVR%2F9BLR2LvKtLOyBh07Fti4sMmrAzXJaud878QG%2FRWba4bseQ5GpJrfAMYMbe8XZrAEhHqjb%2BVniH62lQ7g54oqFhAQMr7edjVU90eacTHpcfm36MEmgfF2TizHO%2FyoHEziae1F3Damu0nGvduMgABG9aTHLVx5PUwNdaVb%2B%2Fpu%2FClCOPEAkp13vVWpUyAstHCb7%2FNjCzV&X-Amz-Signature=2bd244c0f52a7f470b113a4debb7d30de6d62e58e840cd6d6514c9f7bf477e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFOQEPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCGsJqjzSLkeU55cfFpqnAcoZuTYC6JJ6Bp5sDa25l1GgIhAKPS%2FWwKB09EkzMOOCZL%2F6YEkuAjgeN2AFp7M7te4eNWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb8AY%2Fo6VWG7PihqEq3AMzFF2smfol%2Fyh4hC8606gatKEkNVWoppwUrCZakr%2BhT%2FCVMXoyf7t1vaIjYXz%2BJBQ7y%2BhcRVxS6qrDYehp%2FTgwoQoWH%2FO21G99U16i4dBy05z0RKdsdAlt4100zNLXH9hdr3KQTE3b5k83V1f7jKYvAntMJ6bX8tSbF9TO7QT9S7EGYefjwZZpWOCSOPaKohNozoFW8kAL0%2FCYHjUJc%2FwNmMZxkVE8CgDE%2BA1HnSlvXb0xVVodVV%2B96rvhsvZ5pHxNwYXCVV33G2ic4WoV8vClD5TXZsRJF%2BDQ8kKykLD41r4QfJH8aGsE1VfDWSyEbGM1C54RUynq5p2wCCen851AKW%2BMTz%2BJPYntZ8T%2BKrVQBehlyl3GVWHe3CCaAKE7GTWnfu%2BZ%2B4uAXqxEv1LurYK0r8fk0ppdflbiX%2BwN%2BY%2FP%2F3Tj8Xd2A%2BGpOJEIEFACRSuMXfgEdokuGAAAQaq3LtAniiWaBBYvy35mXc0ehStNQ8%2FQdmRz%2FSatn5TNUqEWZxMUGzvB50r%2FQn2pqR9zTtBiM501nT7NYGvGGSW00zAn6aMwTtiIT83hlSoAh7xKhSWnIa3zVkskcZREtanoPd71rD2r9nGAPD1IRGWIy%2BDXlEIFjf6x2Szzibi8jzDFqrS%2FBjqkASZca02nryYkV%2FyXxoFbksnnAaMqcoYJo3gfsrEB4GqhhFqnBdM893qpQf1w6V8L55LECsK22Adgz0JbgpMS43Y5R%2FWBlSZ%2FlmlzRWuE6MM1DAzRZ%2BPs0V2UjfjaFTOMcvohVoxof1I6Ye24M9CDubCHI0xuNup%2BAz1M6Kh9WkK%2BghMtsHLRfDKav2WVKchoero9XzJ3yvKW%2Bj9CaE54K2mzoyIl&X-Amz-Signature=706e7f533cf58d1238996346018f42bda2d2ef2751e173dacf7b1aa1208c1e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
