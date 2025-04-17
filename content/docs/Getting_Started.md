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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGLHAOT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGZKtdryYuT1f8uw9J%2F%2Fsog7yO7nJi8vYLC3PzdvqAYQIgCM8mrL0sSnS1qv85I7f5aGdWq76ZdKrxq3eLkjIYWQEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ0wofbc4aYL%2B3a2JSrcAx2AsNZvTQnZSgDVGzStdkTA0IovDR93LKktqRe%2FpkK94a5jfiP1NEV5NWF1zzHweDuksMoeL58ms1bJQUPY3s5Z%2F%2BauKf2cv3rw9%2FbhOxmC90Asv%2FKCNiw7RAcEVJnwnAkxMjanfCOMRlx1T5BmPxRYteesLby0lkYZM5b4W0iYHSlNoKClOPhv8uUePenY1kmR%2BnOTWkLpxM5B1kXeoXj9%2B1Ps%2FSiptYzQGh4EaLZZwJfjCf538YyjbGvK%2BvQRM4z1KFdAQ9RiS%2B%2F9cU7l0jr22XLW%2BxUGZH3jtdD0BL5bcNFC7nHNZOy%2FOAg0Fssc9c5BzpeJwd1vPgC5RqXa%2Fi3bSosu2meRAVIBenFpMSOjl4NVZiG7qHhnyOCgcGLcQKBGQnU3%2FnCta8iYMyYfiKsnrS9W2WIKQEYgHntjFReAQ4aVZFwJ%2FBEQppq45Lqdz30K8yyAshqOFfLUR7lh8hnFxy7cxdqDh%2FDt%2FtrEl2veOBM5hPCUb0XXckA6bjXXFoDWAgwzgIx0cH1BL3KtNn8OqteTJhcl9ucz7z%2BkSAxJRCq48iyPCRKKTpXTLYB4%2BLThCwodEy1r0%2F4EmAtA0TJhev%2BMnZvDjtzeb6omYaKzFwmmUwtsUhnX7DzqMKaVg8AGOqUBpbaI2aPh%2F%2F9dPoU2ymk2OwmTtcHn2Gv6lkW30Pme3rwMQBrMybkuHkqjQLU0D7yFq5Ph3fLobZLsDUcdAS2PnFDAS2Z1Di9h5J1Zwy6z6dlQXiIZHy%2Fld0%2F2wvJAOqv%2FQJIQnAMSsPCy3n2LIwXDAGEbHTNpxLOoDmM25eHOMczBQtZz0Cqb3BKOyrdal7EzfRJalAhCzTqGv%2BE%2BBhvSE1mXqgWq&X-Amz-Signature=a263b746b2f8c4c937b0edf9b378e3191e601d06bdab64c797e4cfdf97f43142&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGLHAOT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGZKtdryYuT1f8uw9J%2F%2Fsog7yO7nJi8vYLC3PzdvqAYQIgCM8mrL0sSnS1qv85I7f5aGdWq76ZdKrxq3eLkjIYWQEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ0wofbc4aYL%2B3a2JSrcAx2AsNZvTQnZSgDVGzStdkTA0IovDR93LKktqRe%2FpkK94a5jfiP1NEV5NWF1zzHweDuksMoeL58ms1bJQUPY3s5Z%2F%2BauKf2cv3rw9%2FbhOxmC90Asv%2FKCNiw7RAcEVJnwnAkxMjanfCOMRlx1T5BmPxRYteesLby0lkYZM5b4W0iYHSlNoKClOPhv8uUePenY1kmR%2BnOTWkLpxM5B1kXeoXj9%2B1Ps%2FSiptYzQGh4EaLZZwJfjCf538YyjbGvK%2BvQRM4z1KFdAQ9RiS%2B%2F9cU7l0jr22XLW%2BxUGZH3jtdD0BL5bcNFC7nHNZOy%2FOAg0Fssc9c5BzpeJwd1vPgC5RqXa%2Fi3bSosu2meRAVIBenFpMSOjl4NVZiG7qHhnyOCgcGLcQKBGQnU3%2FnCta8iYMyYfiKsnrS9W2WIKQEYgHntjFReAQ4aVZFwJ%2FBEQppq45Lqdz30K8yyAshqOFfLUR7lh8hnFxy7cxdqDh%2FDt%2FtrEl2veOBM5hPCUb0XXckA6bjXXFoDWAgwzgIx0cH1BL3KtNn8OqteTJhcl9ucz7z%2BkSAxJRCq48iyPCRKKTpXTLYB4%2BLThCwodEy1r0%2F4EmAtA0TJhev%2BMnZvDjtzeb6omYaKzFwmmUwtsUhnX7DzqMKaVg8AGOqUBpbaI2aPh%2F%2F9dPoU2ymk2OwmTtcHn2Gv6lkW30Pme3rwMQBrMybkuHkqjQLU0D7yFq5Ph3fLobZLsDUcdAS2PnFDAS2Z1Di9h5J1Zwy6z6dlQXiIZHy%2Fld0%2F2wvJAOqv%2FQJIQnAMSsPCy3n2LIwXDAGEbHTNpxLOoDmM25eHOMczBQtZz0Cqb3BKOyrdal7EzfRJalAhCzTqGv%2BE%2BBhvSE1mXqgWq&X-Amz-Signature=85c5defb4fb41b0d51248ae969399f070cf0b01c553f9742654b7b42f8aaf092&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5DKWL4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW1gnxGYXrP43dZ044O7%2BRdSEhZJQb6WWOBJMzP9XtgAiBpacZRD6fHRt837FvyfdN9NZuvt1SnlDS923NU32amBSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmBsnF1ZYkYQ3rf%2B5KtwDuZUndy8%2FKaNsNHbzctliiu4ZxFQjM2ZRqOzhOsDL83CK3aMJb%2BMyrI1Kin9yISOwzMHOx2zAm4xh0QCPpSdHI7ywke6ieyvMv4nIariJl4aTZnDjHf8%2BKtd9iPg8uNj%2F%2Fl2Wg%2Be4Q9lYqDsyb8cW1PTVs%2FgQsBx5oEOk%2BZ%2BoRuLAbTlF6E3%2Fe2Ov0hxTirBBwXVSY7bM%2BD3ORVexFI47iDfIuwpBIA8nnkCnvGsZUfyzoyC0O3G9uFPY0j%2Be%2Fs1n9vpUxhfKiIhxs03e0ImCrotas070ExYpFcaOKRuYDAWEhT1toFrTafuo17BAUYfn08G3%2F7bLHI0ChNT60ocZQkoumQnXpgpB3KvPsr%2Fi7Pw4gxE8mYp2%2FecMDlKagvPDxYkXN89D3KJbOAvp9IZeeL1AOD%2FlTiP5AGRcOcNosVyOhEEC47haK6it5NyvJz9ZUMBda4LxhWP0bvXlMvwWiMfC8ZMk54JVHL0jpdRSpjS4O5XUZEklbStuF1yyann76VZ7IUfK4oHz2d%2Fbsf%2BrDu7krOSMKSrkxebKwSVijFfwLpQEvBcAVOmrhnqFKBMj%2FwFsVKCFsECKiGer5MGwao%2Bub9M06luVW4gukF%2BSi7FGpbqxKTAAZyN7Wdswm5WDwAY6pgHTroQe4%2FLWYfW7tMUfCGPnhJE0NgUgi7OQzAeq67MUglSO7%2FDUzhko7h39HzHyGpmvdcEqEnAmEV3ApPhx5vSJo2isXZtxCT0dmWzwCmwYDKB404bSBO8SuPDP56WhVjYK1xQqZ%2FHr78E7DcfMV92%2B%2BsXdD7ZKg5K%2FBRhcLxqTSUx9w8rqFNdBMBb8CpPSpF6e0Sz7aEZ5YvnJwbQ1gMTZYFsyBWfk&X-Amz-Signature=3d0777b81a943ed8a5feca5798d0f5d7418c7dff6b2c5ee34c83dc31a865398a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4OB4XN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBB0mpNbuw3VlDkEcW6ax5AvkyOaoWmNSIp99FVuIRklAiBxIPXgzLjY5PrMx9KJ%2Bo7HpkirCzhBEhaaJdxnbhczpir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM0CZFUquTt9CwhpVmKtwDP7HCW3B2Szk7Iqz9Ar9soeSeADQqSWA6dUaq5WLQ85RKNYnsHUREl4fdfWuB18d%2FMwerkPdFOm03WMw9whpblHzDWq5a2bRiL5tW7f50W%2BSZGgfgACuV0WtpYuPEKMJ7Ba1AbzsN6Vb1n%2FApA4t1UUaySBJ%2FmnsOMWPtKWSm3ypnA1FM3h5JDXbp%2FiivNY6jgxzh7BGoxKawyTLItlsSexJPcZ0q9xXTULFHynXcmPDbzScpUMarmcPo6Q94CCjpRHVy%2BKOsWLMXxd7x3FAJ%2BVSYK4b17l4aUn1A38pM71AWUQs8Gu%2B4aT%2BVGTn3EHuZ1Pxuze6tpJyxgbWXhD5ybahWuAmRM2iAv17Tvnqfc%2BzZPsj0BfUskS53RudiCZBWh6Eq7QZB5wg0jUVZdjRxiE0Rd9z%2F3PgUZWE1PyiqRYOBEJRd5Ca5VuaDskILjLFrpQyw9HwjAkC0ESL95vh7rqQk%2BMBed%2F0YuY5oKiKJ9uaGzdaIShgpmcXOLGFcM9t%2Fdoq5m3dKA%2F83r3UYm0U%2FgfBmQfNC9z0Wgi6QxZ3zwqdqE5pDxvjfrmnJrKCDtHRBANZGh7VzE2C57qSjlnroKco8Q0T0Ubi5KHF%2Fm083BlqMm8XnhhmpXYL%2F%2Fb8w2JSDwAY6pgF7sUWJoA40IuYQW3IgrTw54B85IzMFSMtW7yzsaI3W4fmkqDPnm6BQwZmOsYSUBYTzCzsIKVJkK0IaYQcYygHT2q0HF%2Bx2hgGNzOrbJD%2FSCBy7Ehlwm4WGQyZG9twvl2dwp6bj9lD1KlDl%2B9lgv6DRgDX%2F6m%2BgGV4a0RodMCyGDouJf%2FasTAqnDMrqCpbbt89fmoi9JJwNTAkFTwOWf0uO8jsM5G%2Bx&X-Amz-Signature=d169962866eeed28bcce5bd1c58444c1cbe0f2f1c7fc3284d086e3504ac77582&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGLHAOT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGZKtdryYuT1f8uw9J%2F%2Fsog7yO7nJi8vYLC3PzdvqAYQIgCM8mrL0sSnS1qv85I7f5aGdWq76ZdKrxq3eLkjIYWQEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ0wofbc4aYL%2B3a2JSrcAx2AsNZvTQnZSgDVGzStdkTA0IovDR93LKktqRe%2FpkK94a5jfiP1NEV5NWF1zzHweDuksMoeL58ms1bJQUPY3s5Z%2F%2BauKf2cv3rw9%2FbhOxmC90Asv%2FKCNiw7RAcEVJnwnAkxMjanfCOMRlx1T5BmPxRYteesLby0lkYZM5b4W0iYHSlNoKClOPhv8uUePenY1kmR%2BnOTWkLpxM5B1kXeoXj9%2B1Ps%2FSiptYzQGh4EaLZZwJfjCf538YyjbGvK%2BvQRM4z1KFdAQ9RiS%2B%2F9cU7l0jr22XLW%2BxUGZH3jtdD0BL5bcNFC7nHNZOy%2FOAg0Fssc9c5BzpeJwd1vPgC5RqXa%2Fi3bSosu2meRAVIBenFpMSOjl4NVZiG7qHhnyOCgcGLcQKBGQnU3%2FnCta8iYMyYfiKsnrS9W2WIKQEYgHntjFReAQ4aVZFwJ%2FBEQppq45Lqdz30K8yyAshqOFfLUR7lh8hnFxy7cxdqDh%2FDt%2FtrEl2veOBM5hPCUb0XXckA6bjXXFoDWAgwzgIx0cH1BL3KtNn8OqteTJhcl9ucz7z%2BkSAxJRCq48iyPCRKKTpXTLYB4%2BLThCwodEy1r0%2F4EmAtA0TJhev%2BMnZvDjtzeb6omYaKzFwmmUwtsUhnX7DzqMKaVg8AGOqUBpbaI2aPh%2F%2F9dPoU2ymk2OwmTtcHn2Gv6lkW30Pme3rwMQBrMybkuHkqjQLU0D7yFq5Ph3fLobZLsDUcdAS2PnFDAS2Z1Di9h5J1Zwy6z6dlQXiIZHy%2Fld0%2F2wvJAOqv%2FQJIQnAMSsPCy3n2LIwXDAGEbHTNpxLOoDmM25eHOMczBQtZz0Cqb3BKOyrdal7EzfRJalAhCzTqGv%2BE%2BBhvSE1mXqgWq&X-Amz-Signature=42acebd527988a06d72cbd2548de2ecdb5f4a3a25487e2745400ed4ba6bd8062&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
