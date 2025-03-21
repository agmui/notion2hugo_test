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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IKDMPD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBth0rV9zmp%2Fq8qmTEwS2Ak7uBHoziC1jDfTGc%2FHf1PhAiAg03V5LoNGwdxMYRpDa2vhETMTIU6lBo%2B6C1OaCAASzyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMURfzm3OWpSqXyV4mKtwDfgMQ76zhDJGN6CqGOuiG3JWIY9RzWFht8u4yV2kEavz1mPRv9U2ykxVnbESpt%2BPxZL8xeV274vuUXgA6Mvus0kZq2i3lEZDFbZCKFHzV5t5FB9KsCMhQs8HhBZ2iHoSyz848etM%2FLF%2F90WbR7El2FwdsVk9nf1D%2FG5CSNegCQDb4GS0S56BbPllT%2F6YRF%2BPN5kKVHWlj3eCiyTQmn44x%2BWn%2F1I08eNVGR%2FDO6rEe1gz809ihy%2Fdk5BP6bi86RoyBkBGrLDu2y%2FJTmHUnPXacPnO047I3fbzvR%2Bm%2FJMqnKA4UtEe%2FosrMT%2BqrySuCp28%2FJu9ryMr9NQpJfl3fsbo%2FCcUa7g8gg%2BWsHUCDRrMstUHOrozfCzBcibnfltfZMqsaoXWMKq7xfleKaZJE%2F23SAIU%2BhjE0ws8Y%2FmeFZVE26n2L%2F3G43bqHQQ1hyrDe%2BDmxZWjK4d%2BvmAucTVwH2mJ3sU%2FPIKMT5qcJ2yDMjetu%2FUg5bnB6gVuoc9sf54ajzbX1YAac3i7tDRWEUC1878ED7rmQXuBTgP18jd3X5RUz6enn4FDCh1XnTA566wREqZZ5RVDZbj6MiMY8uPKHve5zltM4Q7ucDbAnu2TH6uKfqAev8G9kvw6PWhFbjSUwhJj0vgY6pgGv8vNhqC2B8tj3Yhg92%2BtTrDkTP8FEIw7VbAnezNIt%2BI6JxKkzjLn309sz1eazaQ%2BAMm%2BrI4kWgatw4u%2Bi2G0d5Yuq5CYp1vi%2FgOSHTssUnEp8zN%2FYR9hKDpQj1AKPkmOD9%2FoobpIq%2F46zH2rmgoWEn90xqK67yf5UQ7g%2BY3LbZWqY8mBqBY6phIrGxR0XAF%2FfvBozItFeUuG4T1zR2qLREOdlk6im&X-Amz-Signature=f7d34fc6264be36cf80d492cf63066d339b3a3ec7b5b28e2951b09be6dc7d56c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IKDMPD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBth0rV9zmp%2Fq8qmTEwS2Ak7uBHoziC1jDfTGc%2FHf1PhAiAg03V5LoNGwdxMYRpDa2vhETMTIU6lBo%2B6C1OaCAASzyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMURfzm3OWpSqXyV4mKtwDfgMQ76zhDJGN6CqGOuiG3JWIY9RzWFht8u4yV2kEavz1mPRv9U2ykxVnbESpt%2BPxZL8xeV274vuUXgA6Mvus0kZq2i3lEZDFbZCKFHzV5t5FB9KsCMhQs8HhBZ2iHoSyz848etM%2FLF%2F90WbR7El2FwdsVk9nf1D%2FG5CSNegCQDb4GS0S56BbPllT%2F6YRF%2BPN5kKVHWlj3eCiyTQmn44x%2BWn%2F1I08eNVGR%2FDO6rEe1gz809ihy%2Fdk5BP6bi86RoyBkBGrLDu2y%2FJTmHUnPXacPnO047I3fbzvR%2Bm%2FJMqnKA4UtEe%2FosrMT%2BqrySuCp28%2FJu9ryMr9NQpJfl3fsbo%2FCcUa7g8gg%2BWsHUCDRrMstUHOrozfCzBcibnfltfZMqsaoXWMKq7xfleKaZJE%2F23SAIU%2BhjE0ws8Y%2FmeFZVE26n2L%2F3G43bqHQQ1hyrDe%2BDmxZWjK4d%2BvmAucTVwH2mJ3sU%2FPIKMT5qcJ2yDMjetu%2FUg5bnB6gVuoc9sf54ajzbX1YAac3i7tDRWEUC1878ED7rmQXuBTgP18jd3X5RUz6enn4FDCh1XnTA566wREqZZ5RVDZbj6MiMY8uPKHve5zltM4Q7ucDbAnu2TH6uKfqAev8G9kvw6PWhFbjSUwhJj0vgY6pgGv8vNhqC2B8tj3Yhg92%2BtTrDkTP8FEIw7VbAnezNIt%2BI6JxKkzjLn309sz1eazaQ%2BAMm%2BrI4kWgatw4u%2Bi2G0d5Yuq5CYp1vi%2FgOSHTssUnEp8zN%2FYR9hKDpQj1AKPkmOD9%2FoobpIq%2F46zH2rmgoWEn90xqK67yf5UQ7g%2BY3LbZWqY8mBqBY6phIrGxR0XAF%2FfvBozItFeUuG4T1zR2qLREOdlk6im&X-Amz-Signature=0e7318adc0f705256de6498cdd895ffaa37229b4489116aa760737b092723569&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUG7UP4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBKXk6slJNWdZCAzezU%2BfenhD4ghKmyOZk69LFeul1RJAiEA6BrqlHfJwkfXBfUBRpiE4NJBB3aht%2BTQvAYsyH6kccsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFmlxRqaN%2BpffpA5CrcA6XGxdkp%2BHP8LJcKPuWyQxZ3hDt4Xi5TiyUkVr9sZHSfPpsgSoFlC%2BgiQcuQ4Z0Az60eNNR1gPYQ0ktSPrQ2xNH2MTitP5bPcbWaDmdiFqvOOhBANL0EewcycbvAS6JzgGq5%2B1enU0qzlK775Inmf4tmxpd2r0Lc7bdiXk0daD4y%2BhW8nUA9fsBSD9VbCj9jPUyMxf2G0DALDyTxTUkBin6xfWYBswmGwH5cbLUcWfedKPnEEZ0A8vn4nKL73T%2BHuXaguJqq5%2F1LII4Tc%2BsU10WTEsY61DN63ei1rIiv3nedoQnkCZ0FOQFMQQVsMgmQH8z3Q7u8Kf0R8ezKUdrQD1IXJayB9k%2BWTz8Tw1wMMaG8%2FZ5K%2BmsAt1C67LK7%2F1zUJXHCKFUiX7gA7biUNiwN%2BQBG6fR2RcPvwykHufwuBaxEvqOkmhvvG3fqzT3ExzmdXGrez7DYX6ALMx24cFYdhFHTx45dg3rwyTknCB7m3oC0m50tC4ioIm658h7ZRvWAZOKz8nSBj2VOB%2BeyFR2SkhaVHJGyqr57aAqZ49BBrd%2FAYyAqn04ehAdWoUOS89Rezx2OFkt3Bf5%2BuCHV%2FnJ%2BcO7VqpR6Q98K1fmmi2shjxib3vM168YXcSfmbFvyMPGX9L4GOqUB0sefV7%2BHStf78XDNdt%2Bd9%2BuY7wtkcnfCto4dIPgmjqriIcVCHDj1rx%2FsoAvgpnVpy0w1uOC3ulAIU5QOvgguWTgQpWwpu0RV4g0n9q%2FqTZXvCPsgL6wqK7WWVpR4X4GhRr6xsNjFuArNe7F89M3ZCwc6Cqw49IEhO%2B5rnpE%2FOXDzBgu%2Bw29RXP5MECRM5yakLQwQcNpwd58ZVdZ6lLZj1bq0MtCU&X-Amz-Signature=e3fc5d97b51f4960a5b65a48cf0a9ef3cd27a69a37758138373cbdc2825572bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPJJ7OYS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHpjXwQI0inwEMA77gMo84DnbfHOTFTS1P7DPGCND6LaAiApRpkVxnHQo%2FuCAi20i3OWCBp6mCHk8YOP0mz1ahFISSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ5tzSuI%2FqbTRmaS5KtwDr3PYVS8PUpdqZZVC%2BKUTdXlCH4subU1X2QYfMFGT3jYt3U9h5W238WPhBwHROquggTOqTIJcaVi6cNeHsOxGe0uJ1F60PmWbFiljogtdNzzDrwVmnPcoG9TltXQb%2BdbUa2iScKSz3xPujhy5lQEi74fSH%2BNDEWNUCOeiEiO7imIs78YbtvS1P3%2FTYJr8n5mYwB4VHxbd%2BwJNsQH69HoSFsXNEqfbS1dKkYg1g0jvOx8GeVrMO8ZMqjJgEd0N3VJQwYLAtNRIpn%2FOkgGXjFNIdkdIKG0scd2bhyxJfyIv14a8D1AkBq8vs1hsiChZzzmaOgNKDnUTubofeHKX3GrHF20Gx6qNdByC8Yg8jt0BKxg4b1c2rREJ4%2FTxikjw0ouu8ST09f%2B7CjME8NTcPeznh%2Bos559C0rqfB3bKFh4qpUTA4dYSxY6gQyBxAeJDoKis18UXhZ66LFMExlVDe0%2Bi3RoUTjp59g5FxqYN6smvmGYFmuO5SZml608bphDoSX6suo4hTZOkR44rl1GxBJ6DxRMLX3fjIruRat31yzmx8N1ls8FMS0gqgF41kSIPX4UsnVws%2FLKeP4KfQFosLDWn1C6he4eI0KQ9nn5wLQqb6%2FfPhB0wrTGy0ftNzSAwwJf0vgY6pgFZBjt5domY1HiBRJ0yQlwlrNXp7vYmvNXlsqFk1CxJie%2FLlZoOo5WkHnmuoUXuWhEGJwidYm%2FvCfkmWmKRWBqCu25zNyFAbMxqKn8%2BgFkRWTirbKXFNdp6E1v%2Bq2mxd0a6lFkMBQ99MqXNeCEbQVOn7AXNvVL8A60dpwM2qYhpUHd8cc3X2tT%2FPCleSL92yLH0ZV4dsKBid6YFDoVenW4s0sSkO8Ep&X-Amz-Signature=3dfc119857b7cac1bf09b906296959e4887df709193bac143dff06b2cd8b8460&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IKDMPD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBth0rV9zmp%2Fq8qmTEwS2Ak7uBHoziC1jDfTGc%2FHf1PhAiAg03V5LoNGwdxMYRpDa2vhETMTIU6lBo%2B6C1OaCAASzyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMURfzm3OWpSqXyV4mKtwDfgMQ76zhDJGN6CqGOuiG3JWIY9RzWFht8u4yV2kEavz1mPRv9U2ykxVnbESpt%2BPxZL8xeV274vuUXgA6Mvus0kZq2i3lEZDFbZCKFHzV5t5FB9KsCMhQs8HhBZ2iHoSyz848etM%2FLF%2F90WbR7El2FwdsVk9nf1D%2FG5CSNegCQDb4GS0S56BbPllT%2F6YRF%2BPN5kKVHWlj3eCiyTQmn44x%2BWn%2F1I08eNVGR%2FDO6rEe1gz809ihy%2Fdk5BP6bi86RoyBkBGrLDu2y%2FJTmHUnPXacPnO047I3fbzvR%2Bm%2FJMqnKA4UtEe%2FosrMT%2BqrySuCp28%2FJu9ryMr9NQpJfl3fsbo%2FCcUa7g8gg%2BWsHUCDRrMstUHOrozfCzBcibnfltfZMqsaoXWMKq7xfleKaZJE%2F23SAIU%2BhjE0ws8Y%2FmeFZVE26n2L%2F3G43bqHQQ1hyrDe%2BDmxZWjK4d%2BvmAucTVwH2mJ3sU%2FPIKMT5qcJ2yDMjetu%2FUg5bnB6gVuoc9sf54ajzbX1YAac3i7tDRWEUC1878ED7rmQXuBTgP18jd3X5RUz6enn4FDCh1XnTA566wREqZZ5RVDZbj6MiMY8uPKHve5zltM4Q7ucDbAnu2TH6uKfqAev8G9kvw6PWhFbjSUwhJj0vgY6pgGv8vNhqC2B8tj3Yhg92%2BtTrDkTP8FEIw7VbAnezNIt%2BI6JxKkzjLn309sz1eazaQ%2BAMm%2BrI4kWgatw4u%2Bi2G0d5Yuq5CYp1vi%2FgOSHTssUnEp8zN%2FYR9hKDpQj1AKPkmOD9%2FoobpIq%2F46zH2rmgoWEn90xqK67yf5UQ7g%2BY3LbZWqY8mBqBY6phIrGxR0XAF%2FfvBozItFeUuG4T1zR2qLREOdlk6im&X-Amz-Signature=7ca28cfcafbc2ffc4bdcbf8c0f9bd96e494eefeac7cbbd56367de2baf0959fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
