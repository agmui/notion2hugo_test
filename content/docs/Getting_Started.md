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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJWSKZE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTUD8eDv5hciTjyUrs8ioJkke9HuXueAKLWB3niQZXgIhAJp2lQ2T3w7FnZuBxADXNwkZeHGrka01t4y0Hq4l1UFpKv8DCH0QABoMNjM3NDIzMTgzODA1IgxmqjMFlGr8ixoxwyAq3AOPIL1IqBurwZLy3PKFXsGtMxUvn3dbuaDCOhiPSpD8PnO2wbShdnvAh1Wpn6dX4S35NBwHHIX7oyFxjQVvslnDdXa%2BnpRnpqv1XHp4H0hfkAd5dl2ahuIuXkz5Mr4m23ZvULhlcAfs%2BtmecXDiinDs0aeB3%2FS5S%2FM%2FAU0lJ7zBfBk4Id%2BmdgLe%2FsXYZ87MM%2B6%2Bf7EKmo9rzEYn3LebyrKArWR3dNrBJuKoQbUTGMFD5Hiv90M5EC7wSzAhp%2F7RJgeHaSFtM9UnNn4dqNrVwo%2FMhQ3%2Btj3luzogWCBokqqPoiT1x4%2Bzi53vHgYsVpI%2BD1V%2Bi01EvePUKbwiHsp5fbuA5ZH6zLsRgu8j4HZ6GKFlsRKgI%2BkQttCM%2FzWkpVlTDrTUd8ul5GYMvuIAtCGe2%2FTD0byak%2FMp09UdKlbrBuasPU5Dxj6Y3mQa7Vu%2FXXWBG8BLv%2FOu%2BzyGX8pkBYRODOHdQysg%2F0sNS85ri8L1lWdt8Bnv5NZ1SP%2BNQ%2BTuB9eK3wUkhWqRl0vb0NJIxu2urd0FA51y1zBBdn1VgE%2FyO%2FmcOIpfP4Egx2hUrupEC%2FGbMLGaac8g2%2B2gFl4NPwdt9MdW3pWVw%2BAZjuVTIlpLVlovzctKD6GrjhH720Lk4zCf56jBBjqkAbpiHDMED2cXRa4aeRdSKKk7ZidBtwM0OP9saePnOKemxsEBsHmYzRU3yw4f3QgsKk8Yyw5Q1zsViwZRymewPwo54wwvA%2BDu3K1Dptm%2F80Fg%2BiZ6YERZ%2Bz7bGfp5z0e5YdJ%2F26p7ShV%2Finkg9%2FTIMcpYs2sKTqUnooKY1WspQhHUxiv%2FE2UGNQNeKBDJIwTpVuO2PTml3Af9kTUqyX1K8IOMSbEr&X-Amz-Signature=794d82424becc679aa5f32f616cb66af6e089158c3e71c39a2ffaf7ce45126dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJWSKZE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTUD8eDv5hciTjyUrs8ioJkke9HuXueAKLWB3niQZXgIhAJp2lQ2T3w7FnZuBxADXNwkZeHGrka01t4y0Hq4l1UFpKv8DCH0QABoMNjM3NDIzMTgzODA1IgxmqjMFlGr8ixoxwyAq3AOPIL1IqBurwZLy3PKFXsGtMxUvn3dbuaDCOhiPSpD8PnO2wbShdnvAh1Wpn6dX4S35NBwHHIX7oyFxjQVvslnDdXa%2BnpRnpqv1XHp4H0hfkAd5dl2ahuIuXkz5Mr4m23ZvULhlcAfs%2BtmecXDiinDs0aeB3%2FS5S%2FM%2FAU0lJ7zBfBk4Id%2BmdgLe%2FsXYZ87MM%2B6%2Bf7EKmo9rzEYn3LebyrKArWR3dNrBJuKoQbUTGMFD5Hiv90M5EC7wSzAhp%2F7RJgeHaSFtM9UnNn4dqNrVwo%2FMhQ3%2Btj3luzogWCBokqqPoiT1x4%2Bzi53vHgYsVpI%2BD1V%2Bi01EvePUKbwiHsp5fbuA5ZH6zLsRgu8j4HZ6GKFlsRKgI%2BkQttCM%2FzWkpVlTDrTUd8ul5GYMvuIAtCGe2%2FTD0byak%2FMp09UdKlbrBuasPU5Dxj6Y3mQa7Vu%2FXXWBG8BLv%2FOu%2BzyGX8pkBYRODOHdQysg%2F0sNS85ri8L1lWdt8Bnv5NZ1SP%2BNQ%2BTuB9eK3wUkhWqRl0vb0NJIxu2urd0FA51y1zBBdn1VgE%2FyO%2FmcOIpfP4Egx2hUrupEC%2FGbMLGaac8g2%2B2gFl4NPwdt9MdW3pWVw%2BAZjuVTIlpLVlovzctKD6GrjhH720Lk4zCf56jBBjqkAbpiHDMED2cXRa4aeRdSKKk7ZidBtwM0OP9saePnOKemxsEBsHmYzRU3yw4f3QgsKk8Yyw5Q1zsViwZRymewPwo54wwvA%2BDu3K1Dptm%2F80Fg%2BiZ6YERZ%2Bz7bGfp5z0e5YdJ%2F26p7ShV%2Finkg9%2FTIMcpYs2sKTqUnooKY1WspQhHUxiv%2FE2UGNQNeKBDJIwTpVuO2PTml3Af9kTUqyX1K8IOMSbEr&X-Amz-Signature=72255218c304696b515b4c4c950f73c3140139a13dfb2b86f0587a5a55bcf8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJWSKZE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTUD8eDv5hciTjyUrs8ioJkke9HuXueAKLWB3niQZXgIhAJp2lQ2T3w7FnZuBxADXNwkZeHGrka01t4y0Hq4l1UFpKv8DCH0QABoMNjM3NDIzMTgzODA1IgxmqjMFlGr8ixoxwyAq3AOPIL1IqBurwZLy3PKFXsGtMxUvn3dbuaDCOhiPSpD8PnO2wbShdnvAh1Wpn6dX4S35NBwHHIX7oyFxjQVvslnDdXa%2BnpRnpqv1XHp4H0hfkAd5dl2ahuIuXkz5Mr4m23ZvULhlcAfs%2BtmecXDiinDs0aeB3%2FS5S%2FM%2FAU0lJ7zBfBk4Id%2BmdgLe%2FsXYZ87MM%2B6%2Bf7EKmo9rzEYn3LebyrKArWR3dNrBJuKoQbUTGMFD5Hiv90M5EC7wSzAhp%2F7RJgeHaSFtM9UnNn4dqNrVwo%2FMhQ3%2Btj3luzogWCBokqqPoiT1x4%2Bzi53vHgYsVpI%2BD1V%2Bi01EvePUKbwiHsp5fbuA5ZH6zLsRgu8j4HZ6GKFlsRKgI%2BkQttCM%2FzWkpVlTDrTUd8ul5GYMvuIAtCGe2%2FTD0byak%2FMp09UdKlbrBuasPU5Dxj6Y3mQa7Vu%2FXXWBG8BLv%2FOu%2BzyGX8pkBYRODOHdQysg%2F0sNS85ri8L1lWdt8Bnv5NZ1SP%2BNQ%2BTuB9eK3wUkhWqRl0vb0NJIxu2urd0FA51y1zBBdn1VgE%2FyO%2FmcOIpfP4Egx2hUrupEC%2FGbMLGaac8g2%2B2gFl4NPwdt9MdW3pWVw%2BAZjuVTIlpLVlovzctKD6GrjhH720Lk4zCf56jBBjqkAbpiHDMED2cXRa4aeRdSKKk7ZidBtwM0OP9saePnOKemxsEBsHmYzRU3yw4f3QgsKk8Yyw5Q1zsViwZRymewPwo54wwvA%2BDu3K1Dptm%2F80Fg%2BiZ6YERZ%2Bz7bGfp5z0e5YdJ%2F26p7ShV%2Finkg9%2FTIMcpYs2sKTqUnooKY1WspQhHUxiv%2FE2UGNQNeKBDJIwTpVuO2PTml3Af9kTUqyX1K8IOMSbEr&X-Amz-Signature=8822809f931317a61b0a028593b972556d5b92799b6d281617c673808b448882&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LJ2MLO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVjIu4j%2BjSWZ1%2Bi49oa6VuerRVV%2FWkyxGShu%2FHhpKaWQIhAJZgFaG%2Fb4NnVfhQ4qN4rwRdUeVc2EbSrEGD6GYV1Ag2Kv8DCHwQABoMNjM3NDIzMTgzODA1IgxneliNQvyaIrePpnQq3AOYUV%2BZM4qa2Igm5bjptqA5oucqHS7VdgkY6RrrqPe53oDF3sIJBGjQYtaVP%2FJ9bJDf0eoxtAOgelBhiptkhdVHKnDLadWiQNYPWdem1SwzXczkLbJc5sl4oT082INv9vHXZ%2BHgzLTbtm7GASz%2B3vbGaq1NyPyXvY1pbFyIVGnsr8uY%2BIEwAjovvI1U5pVy8Jb2UZAOelxtY1F%2BTiyhN4JmXAWUxeXFfbzq4qGEicd4WhFwWt%2B3c7cGyASPNrJTtzT0MzWuOCipeUtIyDJX%2FVye8MetFEbtanTbH5G3RlxNcQ4%2Fjv2GVvEi04zFnhvxx624LBPcUFnOA8FbaRwSg1Jovjm%2FcLZI5G3eNssBx%2BNlLQFU8WXEkEHhh8utVsHwvQ34cls9hpq%2FjKAHZmAurXg3wOmSHqiv2eOxWgSHIG2IbX0I6L23X1yQv%2F7hw7S85grpMGofpuJNuIfA3eI7%2B9%2B5h69CYb%2B8HLY2yD5yf7Xnj7ferMX4jbyI5N2ak6zYRoPEkzy%2FGXwC%2BWMhxy5gAiGlEIlQdJDpeiUXQbKffmv9%2F1p8sxmV6%2BkQbp%2FsfIlk8dEmapi%2FKX2jrd54iX0YwqMJO%2BEp8D%2Bu5IdtA%2BBWg%2BZae6kcjZJS133AGlNy3TD25qjBBjqkAd%2BkJ%2BrS9kYhMpES%2Bs5tGsSgUeRzGWJuInqov7w92GExvXTIIZKpYDCXl4fwQFwAvXRgy%2FKfnxlYjkB4LxeJ%2BseE3lns8Jnc6DqMCqG1HxPWOmPDIeP7FkPDRWv%2F5G6e1uax27MM6vZZWM64Wb%2FAYS8ahuYgX7w%2Bn1TKA05nE1NN7WrWLOWxnFOuVgLguzRCDO5opJYVmKu8JPKDfwR6%2FeOi0lqy&X-Amz-Signature=956231da44fc1b512b7e7ad42cf15c2bead9a5c6c6b4c73163d59f7664162fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X326HIDN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnbgjElPZZr8AL3Mc7pUrFKPuMsO7Vlcw8ZcuuzbZ9OQIhALcvPYsjUdsncyn%2B2OUt7tcKgAiK5GI4NlfvfmppqfF7Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzXLtCOWnfi5kZwynAq3ANy1MR6XsymDhG5KsmrKLErrKvUoDWkOOL3s4b7DfBulBDbrK0UX3kmLSPrl02Lr4GEjvDrcJHoh1PCTivX%2FyNz%2ByaYTlC52XLOzPZE7YUflctw08QyWy0QSfIlsjuEpwLXXhCwjKPZQeFwhBUcjjQphDCXMZdf9rUYD2JN6TNx8rIYMWlU8QsDBakWsw8bb5ueKQ2x8TWFtdNMeXLj%2F6zBchRL2HUhtpXh6j%2FtgrB2pYBrc3%2BqGuL3il5fzobs0eaTRb51jHLNA5yEVyoukIhKbe0hgDWCy4pWuqPMx7M6f4nQrZuOtbnR6Cw55MIW0vigvlhbWEdfVPADErZtlsFgd5%2BxiOfMvXsddEYUqhxSAbp%2FuqHXVzxz6qc8R7k6%2FyiUY9xDvob20pIhYuG7UPhr7w7DuL9TeSskfNA%2FqVix8ZNeXFSOZSwukelA7PfMsEygvXPJptTZv9UQ2Evdhgk1tBagYb8vIchErz3aaI1Uw3iMOgcxVuWK56TnEApjyNnVEzZhwh3sgxSd21zZPZtr9KEqzukdPE5jdb%2FiJGJo87Wwy711sBt%2Bx7odedK%2BWvNtGNUJizS9HioFiTjEeJSNFjwmutJt3tkbsCCjzJVpdSaixLdKSqU%2FSm6R4DD%2B8KjBBjqkAQALLGGSvxZVQDXVVmrT%2FE19%2B6fIE3AD9PYFXWtbz7%2BnqcM3JMaf696q%2B8qzbuliR2N6fZtaS0%2FLmwRp2FzV35kOomUmhyQN1buVzeXRJC%2B4EHauzkN43y%2FYUHugvibyKjOHZdD7OtxREXPu1q5QW3Z5LYt91y%2BbssXdjrOGto70nCjNT5lAQxj6fUBzXpgr18lWFyYTUmyj61E7iiKzbrJFtd1I&X-Amz-Signature=062b52fdf1e99c9978181ca12e0dc2b62507cb11000befd80ac2402eef4a7b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJWSKZE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHTUD8eDv5hciTjyUrs8ioJkke9HuXueAKLWB3niQZXgIhAJp2lQ2T3w7FnZuBxADXNwkZeHGrka01t4y0Hq4l1UFpKv8DCH0QABoMNjM3NDIzMTgzODA1IgxmqjMFlGr8ixoxwyAq3AOPIL1IqBurwZLy3PKFXsGtMxUvn3dbuaDCOhiPSpD8PnO2wbShdnvAh1Wpn6dX4S35NBwHHIX7oyFxjQVvslnDdXa%2BnpRnpqv1XHp4H0hfkAd5dl2ahuIuXkz5Mr4m23ZvULhlcAfs%2BtmecXDiinDs0aeB3%2FS5S%2FM%2FAU0lJ7zBfBk4Id%2BmdgLe%2FsXYZ87MM%2B6%2Bf7EKmo9rzEYn3LebyrKArWR3dNrBJuKoQbUTGMFD5Hiv90M5EC7wSzAhp%2F7RJgeHaSFtM9UnNn4dqNrVwo%2FMhQ3%2Btj3luzogWCBokqqPoiT1x4%2Bzi53vHgYsVpI%2BD1V%2Bi01EvePUKbwiHsp5fbuA5ZH6zLsRgu8j4HZ6GKFlsRKgI%2BkQttCM%2FzWkpVlTDrTUd8ul5GYMvuIAtCGe2%2FTD0byak%2FMp09UdKlbrBuasPU5Dxj6Y3mQa7Vu%2FXXWBG8BLv%2FOu%2BzyGX8pkBYRODOHdQysg%2F0sNS85ri8L1lWdt8Bnv5NZ1SP%2BNQ%2BTuB9eK3wUkhWqRl0vb0NJIxu2urd0FA51y1zBBdn1VgE%2FyO%2FmcOIpfP4Egx2hUrupEC%2FGbMLGaac8g2%2B2gFl4NPwdt9MdW3pWVw%2BAZjuVTIlpLVlovzctKD6GrjhH720Lk4zCf56jBBjqkAbpiHDMED2cXRa4aeRdSKKk7ZidBtwM0OP9saePnOKemxsEBsHmYzRU3yw4f3QgsKk8Yyw5Q1zsViwZRymewPwo54wwvA%2BDu3K1Dptm%2F80Fg%2BiZ6YERZ%2Bz7bGfp5z0e5YdJ%2F26p7ShV%2Finkg9%2FTIMcpYs2sKTqUnooKY1WspQhHUxiv%2FE2UGNQNeKBDJIwTpVuO2PTml3Af9kTUqyX1K8IOMSbEr&X-Amz-Signature=bbd87659c1d0953c132f2cb7adcd27d63034e73b8253e9321072e158161231ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
