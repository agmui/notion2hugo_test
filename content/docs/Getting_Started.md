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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OD3DSO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC15RiqSLW8%2BKHOiVpAyo7PHAhnIfzIGVZBCis5Es08VQIhAPz4Mo%2FWFFKg1WpNSFAhadgQ1Y%2FXbDHIe%2FMLAl%2Flu2MZKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx62B3vuPg2fpLE2Tcq3AOBxHpI7r5n6H%2BeF328uOiq8gERzLujqE3%2BVbelPomV0oC4fHinHvSKDUGNhkz%2B77lrR9CfPu2blQruA3XOa1Ywqmh9jc0Bhpd%2Fx%2BSjA%2FEjPw0Dh1TdShfrqaXovdowqE0YzPeFqjF0eyOFKYB2gBRmDQxlis55mya3pt%2FEKBd8oUnw%2FkNSY1pf9lEF1dNlFZokQ%2FhZ5ZI7IDxDT3hPB5TBjfQZJ9SOpxRzPnunjyujoYnFWfeLHkkCiDlm6d0HegnKNnHIgz11mYAyaSOtmRmILd0jS1NWvewguMf%2BX45rWSIpaNUmFcgh5MrsMMAurrxH7TWuxekBgbifwUD%2FEzGNgm00Yl3p0bgpSYgd16C0ZwrB4vsWmNEm49lDMGAlSPxMiiUdnOZTOlU3zSgf6%2Fj5SGgav4GKUL4Pv4Fy5yjuPcR5fnLNoQHJtZ8qQPp6Q7XeE8hFMSb8TBi3aoK2mMEQXjp3gThyVpZethfvynFpJmesm%2ByqZEwMq39ANUiHh%2BxNJ8NqOk2jrluvsDT4dtDeflG%2FnjyEkQfIy6ZEbULmIXklv1EO8ZwEuYALNFryVhoC2sEj5yT3vg%2BC99DG4zLg%2BNw0OegV05dy8WseDP6BBhaL%2Bu5BcU5ghcQe7DDUsvfBBjqkAUH2fdvgUvCVeLESieE8NgRxr6JUMY70wFIHyd%2FmEA2D6S9Pt7sqIWl0TGAjLOgUoRYyjQ3HfPdtGj%2FH2NTP1Ht9%2FbjLhEa4qWSS8jxDTZ5nCip%2F4%2FmTy6vYXJtz9C1Gx3KJ9uwGnQa4Xbqt%2F40zXKePvgW3sIUcKzHJNw2GSlGQJ2LHlJss5BjR2c8Fwy3zazHC%2BoyZ0t4NDOQnHH4bbP5QvLs9&X-Amz-Signature=078fcc9351fac4c8c6dfa14fd37d12e75ab3e0ae611a8e33c2ea9d09d0d92d73&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OD3DSO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC15RiqSLW8%2BKHOiVpAyo7PHAhnIfzIGVZBCis5Es08VQIhAPz4Mo%2FWFFKg1WpNSFAhadgQ1Y%2FXbDHIe%2FMLAl%2Flu2MZKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx62B3vuPg2fpLE2Tcq3AOBxHpI7r5n6H%2BeF328uOiq8gERzLujqE3%2BVbelPomV0oC4fHinHvSKDUGNhkz%2B77lrR9CfPu2blQruA3XOa1Ywqmh9jc0Bhpd%2Fx%2BSjA%2FEjPw0Dh1TdShfrqaXovdowqE0YzPeFqjF0eyOFKYB2gBRmDQxlis55mya3pt%2FEKBd8oUnw%2FkNSY1pf9lEF1dNlFZokQ%2FhZ5ZI7IDxDT3hPB5TBjfQZJ9SOpxRzPnunjyujoYnFWfeLHkkCiDlm6d0HegnKNnHIgz11mYAyaSOtmRmILd0jS1NWvewguMf%2BX45rWSIpaNUmFcgh5MrsMMAurrxH7TWuxekBgbifwUD%2FEzGNgm00Yl3p0bgpSYgd16C0ZwrB4vsWmNEm49lDMGAlSPxMiiUdnOZTOlU3zSgf6%2Fj5SGgav4GKUL4Pv4Fy5yjuPcR5fnLNoQHJtZ8qQPp6Q7XeE8hFMSb8TBi3aoK2mMEQXjp3gThyVpZethfvynFpJmesm%2ByqZEwMq39ANUiHh%2BxNJ8NqOk2jrluvsDT4dtDeflG%2FnjyEkQfIy6ZEbULmIXklv1EO8ZwEuYALNFryVhoC2sEj5yT3vg%2BC99DG4zLg%2BNw0OegV05dy8WseDP6BBhaL%2Bu5BcU5ghcQe7DDUsvfBBjqkAUH2fdvgUvCVeLESieE8NgRxr6JUMY70wFIHyd%2FmEA2D6S9Pt7sqIWl0TGAjLOgUoRYyjQ3HfPdtGj%2FH2NTP1Ht9%2FbjLhEa4qWSS8jxDTZ5nCip%2F4%2FmTy6vYXJtz9C1Gx3KJ9uwGnQa4Xbqt%2F40zXKePvgW3sIUcKzHJNw2GSlGQJ2LHlJss5BjR2c8Fwy3zazHC%2BoyZ0t4NDOQnHH4bbP5QvLs9&X-Amz-Signature=dcc24a96c5c3aa5e91ba0f6a05f5f6da79ae70377ab1edbecbfd747f2bfc1784&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OD3DSO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC15RiqSLW8%2BKHOiVpAyo7PHAhnIfzIGVZBCis5Es08VQIhAPz4Mo%2FWFFKg1WpNSFAhadgQ1Y%2FXbDHIe%2FMLAl%2Flu2MZKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx62B3vuPg2fpLE2Tcq3AOBxHpI7r5n6H%2BeF328uOiq8gERzLujqE3%2BVbelPomV0oC4fHinHvSKDUGNhkz%2B77lrR9CfPu2blQruA3XOa1Ywqmh9jc0Bhpd%2Fx%2BSjA%2FEjPw0Dh1TdShfrqaXovdowqE0YzPeFqjF0eyOFKYB2gBRmDQxlis55mya3pt%2FEKBd8oUnw%2FkNSY1pf9lEF1dNlFZokQ%2FhZ5ZI7IDxDT3hPB5TBjfQZJ9SOpxRzPnunjyujoYnFWfeLHkkCiDlm6d0HegnKNnHIgz11mYAyaSOtmRmILd0jS1NWvewguMf%2BX45rWSIpaNUmFcgh5MrsMMAurrxH7TWuxekBgbifwUD%2FEzGNgm00Yl3p0bgpSYgd16C0ZwrB4vsWmNEm49lDMGAlSPxMiiUdnOZTOlU3zSgf6%2Fj5SGgav4GKUL4Pv4Fy5yjuPcR5fnLNoQHJtZ8qQPp6Q7XeE8hFMSb8TBi3aoK2mMEQXjp3gThyVpZethfvynFpJmesm%2ByqZEwMq39ANUiHh%2BxNJ8NqOk2jrluvsDT4dtDeflG%2FnjyEkQfIy6ZEbULmIXklv1EO8ZwEuYALNFryVhoC2sEj5yT3vg%2BC99DG4zLg%2BNw0OegV05dy8WseDP6BBhaL%2Bu5BcU5ghcQe7DDUsvfBBjqkAUH2fdvgUvCVeLESieE8NgRxr6JUMY70wFIHyd%2FmEA2D6S9Pt7sqIWl0TGAjLOgUoRYyjQ3HfPdtGj%2FH2NTP1Ht9%2FbjLhEa4qWSS8jxDTZ5nCip%2F4%2FmTy6vYXJtz9C1Gx3KJ9uwGnQa4Xbqt%2F40zXKePvgW3sIUcKzHJNw2GSlGQJ2LHlJss5BjR2c8Fwy3zazHC%2BoyZ0t4NDOQnHH4bbP5QvLs9&X-Amz-Signature=4a114bdb41a0cc4c1393248c4feb98501ced10ebc0948a315512ed778cc4219e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJXF3DOL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDzG%2F5qM3hi3VAlJzPmQTo0pMKacwGwpLqA3RwXfWz6jQIhAL5ANDAgXF1eVnj8EcLbZK9dKWeoEJ8PUurjCUJLs%2FFbKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUS%2BDlDxg8rE2tWP0q3AMU5a2bOE%2F5l%2Bx%2BpASXIYLVlMWH8FyERdrcOzlMtsvfcRBx1IEYubOrZKtE5qnd5imo52PtvS0SsSGRzwSduyROOgFRM9uIrs2KmzRRI7r2XwmIwWJ1C8TNMTCoVkv36dI6%2BnSQEKJub0rkNIhwBbnaPQWSPeIGVR%2BMLVOoQjo73m7DsmQsY0tyx6fsTZuNDIDk%2FO%2FUwq8KO4tIXWc3Xb4nEkF2V6wf3bXNMGPyhSVekgHv46z1vxP5ZXd%2BYJtlef7EorKc9S3yPLKIcepRT0Abq2zEjcUHLw%2Buzb0QMtQwDeKdAAaaQYL2NgttMhnKdBgZr5ixXFBEuRN6TFnAaZOVaIECxyGoNw6svFMQkeAaE1IWLQOnu0aISOBIeIPd%2F%2BmuAVe41ZIS3I69vs2LkL5vUkQJuCFFSxOWCwdYR8JzbQaJBwKUmLEHk3KZjLWO2jf2nzFmAWpXhHDgYZVSTAq%2B%2BXB8fmeTRSeT%2FlqxVDibQBZqTIR%2BfGScl3pmKnEkasu4TT08mLHaeoa2tus0u8kkZ2RUuTnTOJV4OhXFFW%2BKGF7otweP0RbwA%2BhkNk7Wnnlh1ETJb5Kg0ozwrztY9ecwy6fYLfeqkj%2Bbm8ahgGri7BTfPZoeNv68JtILKDD8svfBBjqkAfVUDlnnfJ5PD6doTUaEFmW9L93d59StsSAzZeRpGRJ3qBUIp7VDxmJkopcdvaETCoR4Bhx9W596ZVP%2Bh7mkazLk%2FJCeRfpXO%2Fqo665DULdtIoTW8qSHve3Sb6eaCfJVXFaEHB7WOrLF%2FUFoUV7CH2gx2fsiImThZjyYbotjuhiHLtkPo8Ziw0qc9us53K0ZisStLYUX%2Bzc6kEKRiAkaMD3mRoIq&X-Amz-Signature=287ed6d9a5b735e2ea098fd31817ea6308e9e1d038db401c15dfbee2f3890480&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELXCUVP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEFWKkFOtYjMQx%2BKMEp61nX452lUTGfZTYHkRlbSRp72AiB7tlMKzyxUUj9PXBp%2BZwwkRb17PxXpHh%2FaMxT1PXC8zSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkJ1RTigkUAx%2BYiAKtwDsfSC255RcN%2Bsr7LdKlMzZK6dk47I0BHWsA5CPbxo8G8iwP83otync2cA8lT0SaLVQj5STvK4PsDHx7xDcTfp1EShxOSqw3r46ILVoKpMENNdvoLPyPKG4cPJtLQqsN83JPDQS3jJ8AYNCH0%2BJlCMa3R7f7pIau7xG3H8DWLpCwXIz2rv2lBvZ815Yukiuo1pZziXq9rMF6yaK5g25FKaoe%2BOBXfLKRExk8zstFjZhnZnAlVKnrNLVniIR626wDo8JHHG5sICfqk6t66WTNnTK9iuZunpRhanOZfF6Meb%2BHC%2Fj%2Bpm6nH5iOhcFUV5rK9m0HojPgio%2Ba5cAnWUNvfghqU8g7hycvdiYuNqpXIo3tOQ0qWxskgTOUj3pnZh3f7peS3XyHTNmepZ%2BQx7i4A0FGLzeqTNj6BHuNs44AAK4h54GQgfp7iwYn7%2F6qS%2Bre0%2BLEJNfW8gCTnVRKTONEVG9ifCXBS9uKos%2BAh37TpHxcO5GQ8Af%2BtGmudp2tQY%2F4J6WNOufQ%2FCMrV5vHp6c7nPyo8A8AG8MAIxLegPA%2FSsfmr3HrE15kJZt2OVStN1VL6IqA4k4Rn0BMyjZ9UjDqw7hMZ3sUse14S6BPB14vS%2B0fCZ8ocNvq7pNwr6e2Mw5rL3wQY6pgHx0jqBXGM%2BDGSX0XjL5FQ0H4lxYRy0O6B4Q2Le27pMf55vwgqBKm7xccQR83B9c5RrzLIhK6%2FM7vROoPr6TFo2YFQxBe%2Bji6V7pDx9x5NTg6ka%2F9bIpNnpJ79OgTNIQCP%2BZfKGIyx6F%2FsYfEkp%2Bk4nNDkVNSrRhxUMV1eRIPFnPKA6Es7qhbnLDoZk2sy00UgzmyhmswhjaMKfPNysNB9rpuW7OczV&X-Amz-Signature=49827a78861fed54cdc071f491d5f6a87f894ea743b31e2f60d196b2915b53e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4OD3DSO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC15RiqSLW8%2BKHOiVpAyo7PHAhnIfzIGVZBCis5Es08VQIhAPz4Mo%2FWFFKg1WpNSFAhadgQ1Y%2FXbDHIe%2FMLAl%2Flu2MZKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx62B3vuPg2fpLE2Tcq3AOBxHpI7r5n6H%2BeF328uOiq8gERzLujqE3%2BVbelPomV0oC4fHinHvSKDUGNhkz%2B77lrR9CfPu2blQruA3XOa1Ywqmh9jc0Bhpd%2Fx%2BSjA%2FEjPw0Dh1TdShfrqaXovdowqE0YzPeFqjF0eyOFKYB2gBRmDQxlis55mya3pt%2FEKBd8oUnw%2FkNSY1pf9lEF1dNlFZokQ%2FhZ5ZI7IDxDT3hPB5TBjfQZJ9SOpxRzPnunjyujoYnFWfeLHkkCiDlm6d0HegnKNnHIgz11mYAyaSOtmRmILd0jS1NWvewguMf%2BX45rWSIpaNUmFcgh5MrsMMAurrxH7TWuxekBgbifwUD%2FEzGNgm00Yl3p0bgpSYgd16C0ZwrB4vsWmNEm49lDMGAlSPxMiiUdnOZTOlU3zSgf6%2Fj5SGgav4GKUL4Pv4Fy5yjuPcR5fnLNoQHJtZ8qQPp6Q7XeE8hFMSb8TBi3aoK2mMEQXjp3gThyVpZethfvynFpJmesm%2ByqZEwMq39ANUiHh%2BxNJ8NqOk2jrluvsDT4dtDeflG%2FnjyEkQfIy6ZEbULmIXklv1EO8ZwEuYALNFryVhoC2sEj5yT3vg%2BC99DG4zLg%2BNw0OegV05dy8WseDP6BBhaL%2Bu5BcU5ghcQe7DDUsvfBBjqkAUH2fdvgUvCVeLESieE8NgRxr6JUMY70wFIHyd%2FmEA2D6S9Pt7sqIWl0TGAjLOgUoRYyjQ3HfPdtGj%2FH2NTP1Ht9%2FbjLhEa4qWSS8jxDTZ5nCip%2F4%2FmTy6vYXJtz9C1Gx3KJ9uwGnQa4Xbqt%2F40zXKePvgW3sIUcKzHJNw2GSlGQJ2LHlJss5BjR2c8Fwy3zazHC%2BoyZ0t4NDOQnHH4bbP5QvLs9&X-Amz-Signature=a5b871373d9b375a8a94fc01bbc2eb5423a89b9eb818dcb6a651a3e59d536fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
