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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7REONT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F2MORIFiGvD%2Bxn9zwR6PAabrLHJFAhlem98I%2FRpeNeAiEA8M%2Fr3YeOY2utMxkvPIphnUKUYVpcI3CycbFccrHXYaoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw0CX4AhPo%2FLfYsQyrcA2KjnVVjlAsQYcJBh%2BPnqVOXfhknX5IonAfEcXny05LbqT%2BZa7g72VsSh7VjZHx3zn%2BtWMTaEMcwbcldjKs2pM%2BPhY%2FE9KTOiS7DhstN2Uj71OVkjqAADKAV7YYM6o4zAUC5gVYCqEePo%2Ba9jiXQ7enYVgr2YMmX6PPQrHUklIDxGvE0O2B05sumc8yNSLcW77WTdgh%2BIR%2FluLY9L%2FHEMflOt3wKDkQ5gkfuVnbFwpUKoJpKxml42JriAYH7VbVw1MMh60Kxu1ZR%2BfT0V3Bocgy4geVmQQ4%2FKFcgLj%2FqQYdNYofI7Vbiz3bsouLovrbqT9DfOZxRSghvSp7X0%2BW0O8MS%2BueYbGyFJzwlZcYIy28eWbcwy8VsgtgZ0f4I%2FcWxi6zidGQxIot%2BXwAKxVpZuaBiKlW2iI6Y%2FoaPgWrKogFIGUzTwGYBX9n6w4GG2oqEATijfH0qXwaYOjDC%2F7HX3Emj3BtdfmdnR2z9MR8sWiXJ%2BE9itsgljaryCit71BesHSW3GH8wYWcrclxxD3hMU7kHJe2uDinGapjBoFSfWYFazR2T%2B0%2FXY8UHp0bkoXPq9ntC9t9%2FMtcqQGpdQVPzjM5a2FdvLpRSMfyDvUcT5Byd5%2BfMBAcqkWeN4troMNO7yb4GOqUBMcRFpp6gsQlqZmMjVk%2FYla%2FIRDg41XWExTnPKCuzDufoEiEkqsEmhg%2F9htWCGgQa%2BV3bg4QF%2BY9AJarWRGmLzKLwlVej3a16gTm0udblhr7OGUL4DsMwwitW5FfWj%2FExVcBUU8D%2BtZivQCm21tS%2BQadBGZpXs8wMWO4KjGOh3q4tWzzBrqAphwha5WF16zVPGPds0LNqXdR%2F7JNVAhf4qXuqeR41&X-Amz-Signature=f105a002c710c097f66ee69457cea9f79d53910fb85397c8e2a051645b4ac767&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7REONT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F2MORIFiGvD%2Bxn9zwR6PAabrLHJFAhlem98I%2FRpeNeAiEA8M%2Fr3YeOY2utMxkvPIphnUKUYVpcI3CycbFccrHXYaoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw0CX4AhPo%2FLfYsQyrcA2KjnVVjlAsQYcJBh%2BPnqVOXfhknX5IonAfEcXny05LbqT%2BZa7g72VsSh7VjZHx3zn%2BtWMTaEMcwbcldjKs2pM%2BPhY%2FE9KTOiS7DhstN2Uj71OVkjqAADKAV7YYM6o4zAUC5gVYCqEePo%2Ba9jiXQ7enYVgr2YMmX6PPQrHUklIDxGvE0O2B05sumc8yNSLcW77WTdgh%2BIR%2FluLY9L%2FHEMflOt3wKDkQ5gkfuVnbFwpUKoJpKxml42JriAYH7VbVw1MMh60Kxu1ZR%2BfT0V3Bocgy4geVmQQ4%2FKFcgLj%2FqQYdNYofI7Vbiz3bsouLovrbqT9DfOZxRSghvSp7X0%2BW0O8MS%2BueYbGyFJzwlZcYIy28eWbcwy8VsgtgZ0f4I%2FcWxi6zidGQxIot%2BXwAKxVpZuaBiKlW2iI6Y%2FoaPgWrKogFIGUzTwGYBX9n6w4GG2oqEATijfH0qXwaYOjDC%2F7HX3Emj3BtdfmdnR2z9MR8sWiXJ%2BE9itsgljaryCit71BesHSW3GH8wYWcrclxxD3hMU7kHJe2uDinGapjBoFSfWYFazR2T%2B0%2FXY8UHp0bkoXPq9ntC9t9%2FMtcqQGpdQVPzjM5a2FdvLpRSMfyDvUcT5Byd5%2BfMBAcqkWeN4troMNO7yb4GOqUBMcRFpp6gsQlqZmMjVk%2FYla%2FIRDg41XWExTnPKCuzDufoEiEkqsEmhg%2F9htWCGgQa%2BV3bg4QF%2BY9AJarWRGmLzKLwlVej3a16gTm0udblhr7OGUL4DsMwwitW5FfWj%2FExVcBUU8D%2BtZivQCm21tS%2BQadBGZpXs8wMWO4KjGOh3q4tWzzBrqAphwha5WF16zVPGPds0LNqXdR%2F7JNVAhf4qXuqeR41&X-Amz-Signature=8223d490d17f9fe5ffafcdac16e5b5d959c03e2cb528af08e6f13a0201aa526b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R32HFEVT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLStyTVJVSdAlwgL27iBI3ma9zUPEe1jE6l%2FateZrZNgIgX4f%2BXLjTKas5ubEDAR6pa8qq2C6ZF9Exxb5NePcKoFoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFHTiKJlDBxtFpLWircA01SIpBVZR1QiWrVgzcBBkq2IGYFKLfg9gH7tjAMd8tX6is5ZTBSipUEabq6D4JkIqa33HTyTUKOPiEpVcI%2FfzWjuINT0OFs573Ieu3Wkywongs6NyMjfIp1Tby%2FQA1GKkjSjN5KWdb22Q8mnFPTZ0%2BP7SzU8mBv0Fxy4YVsDlyjUQ%2F2gPTZvrrhzRAtvlBNhFvKxL8NnZ0mkMWrIJEvITOimab%2FCdcgGUeCXmC0epUu9wT6yZnpecRUjPUdwXJtL8c%2F9qZL9WwKQXbezusxtKgIcAnqIlGCZezSJ%2FN6aGRn7vg0OxYyuBHkeo0qsSBnwZZDBSHuGnHTXwOnGeq7B6bk0BkDKCr2O%2B%2FGu1Nplj%2B%2FxELeewna2sHakTEZhXQt3sXXpS7tY8%2B6%2Fasl39GjyXy407hxttVsNG7rgsP8iEFrg9czqG%2FsMPETp966ZSlpx4jPxFEg5btWep4nNCeAl3nyI50tGFgzSaNPBQ2a2BqdBzKElSWWL2LtWQX5BmQdOu7iCy49%2BWANihRyL53cA1VL7jde4Yd%2BqPw2VhDSMHiH3ru7i8tPVethDrrCVp821geYCbs9nZhzrck1xa5RLdFI29O2nWzIVuT4821f426TeG2OKiS%2FEqjSXro0MLa7yb4GOqUBthG3Q7zZzOXJPyGMjKZ3hDg5zwY3mFFkXcD7H5qxHoZPNphlzmxgGY5bHqWsEEKOVTN38RPHyF05%2FqW2C7Vu517X2muTrZCoAb0kqYcUoNWIYD0j0wDCO%2FrpGEWNhv0Q7T7pD201ET3IJFC94N8wXzBlFNM3UPZp3vdVE4Mll86wUXuB5%2BvKfPnY6dz5rSzeXngvoX9KazekrcHnkb3DeAys7QTK&X-Amz-Signature=b24f1e33e86327b196f787dd87875df46ba9b4ac3ab3a31d9b6450ff955affc1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUN7W3TZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQAkJlzizPkXa7zFgLEFBGm%2F%2BjG273U4%2BqG9j0G5dWPAiBoS25KZDpXYanUc7yKYqWvaW38lxaqe3kSmFl9WZ66dSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzZVx%2FatfS6tpqMECKtwD41W42Nqc8LU8SyP%2BamRbucYub6u6YM9gYuLahQK4uHjCPeWUbTRuPa7yZ93jPO51NotQ5amWnGwBWFC%2F9GzykELPreL%2BrYR1wPTsgxrrfnjEPrWVuz%2B%2BO4FQLgVXrvghw6DcFJyI22%2BqRTNsjzsWk%2FLFIFyj%2FlzZEYjC0lvPk2YEW%2BQHxMQykxxigWlU0TIzXpcyttwHA%2BmXazheUNpG774MjonfatyKwHhxo8U2PybZsWgClnJcmH9S2C7T7ziAMj9qBzzY5%2BYDqXOPypwQQaWUA7D8iw%2Bo%2BdlNm1O%2B4K7D2t2YheGidU56xeRyc%2B77peFS%2BP9DtUkrB334%2B2PU7TQOk4CtER72sOiyOLOppJcLAlZe2HKdbWf5IOH0DH8aSM%2FeKlc%2F94TBfjNTbE4nAYjBBDFv2%2B8g8guHm5OtSMpPVXl9t2EzNF3N9BHUDrzumTUbD%2BbPRPVhVCg3i7SZrTAZDvykGvI2leQ9%2BApkQxziRRq%2BQHeKAnjmH0oqJ3toRtxnBkJUcVVirV1C8%2FIiRB10j4rhneAEnJI%2BBny3BHIBglhn2nT4eB0mF%2BZAnM%2FegRaTECdDhijXPiXuZzCTHpxuWMNXH%2FkwYwlF0vyJs15l7jqhJJTjZgaytIEwkLzJvgY6pgFtedYGzaMhlCPptXvE%2B2rR3L3axeZ1Ho0eokdyeM2Hh5yh4Gq4bNF4dWEA13wZLKeSfpyTOMPzT2pelF%2FFBNKVJBfx8PBJhWoYOohKvWGm5gtjvrSpQIK1LMGqnBrQy3voICqXya3zuKR5CHqCIB5sC%2F98NMQ7IF%2FiPMl%2BObG0STpLl8MeCGK3ZvExFAO3ebHSxILWMCBYPGLu7%2FEcRDkE7OY397Px&X-Amz-Signature=050579c49daf70f452c510f2f105647476d3f939bd07ada511822c13f0f2f3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7REONT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2F2MORIFiGvD%2Bxn9zwR6PAabrLHJFAhlem98I%2FRpeNeAiEA8M%2Fr3YeOY2utMxkvPIphnUKUYVpcI3CycbFccrHXYaoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw0CX4AhPo%2FLfYsQyrcA2KjnVVjlAsQYcJBh%2BPnqVOXfhknX5IonAfEcXny05LbqT%2BZa7g72VsSh7VjZHx3zn%2BtWMTaEMcwbcldjKs2pM%2BPhY%2FE9KTOiS7DhstN2Uj71OVkjqAADKAV7YYM6o4zAUC5gVYCqEePo%2Ba9jiXQ7enYVgr2YMmX6PPQrHUklIDxGvE0O2B05sumc8yNSLcW77WTdgh%2BIR%2FluLY9L%2FHEMflOt3wKDkQ5gkfuVnbFwpUKoJpKxml42JriAYH7VbVw1MMh60Kxu1ZR%2BfT0V3Bocgy4geVmQQ4%2FKFcgLj%2FqQYdNYofI7Vbiz3bsouLovrbqT9DfOZxRSghvSp7X0%2BW0O8MS%2BueYbGyFJzwlZcYIy28eWbcwy8VsgtgZ0f4I%2FcWxi6zidGQxIot%2BXwAKxVpZuaBiKlW2iI6Y%2FoaPgWrKogFIGUzTwGYBX9n6w4GG2oqEATijfH0qXwaYOjDC%2F7HX3Emj3BtdfmdnR2z9MR8sWiXJ%2BE9itsgljaryCit71BesHSW3GH8wYWcrclxxD3hMU7kHJe2uDinGapjBoFSfWYFazR2T%2B0%2FXY8UHp0bkoXPq9ntC9t9%2FMtcqQGpdQVPzjM5a2FdvLpRSMfyDvUcT5Byd5%2BfMBAcqkWeN4troMNO7yb4GOqUBMcRFpp6gsQlqZmMjVk%2FYla%2FIRDg41XWExTnPKCuzDufoEiEkqsEmhg%2F9htWCGgQa%2BV3bg4QF%2BY9AJarWRGmLzKLwlVej3a16gTm0udblhr7OGUL4DsMwwitW5FfWj%2FExVcBUU8D%2BtZivQCm21tS%2BQadBGZpXs8wMWO4KjGOh3q4tWzzBrqAphwha5WF16zVPGPds0LNqXdR%2F7JNVAhf4qXuqeR41&X-Amz-Signature=7e458622698fa6351d90b343b9ef7a44fd05697d5a55016fb850f0501e78c16f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
