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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX6PPTK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHchVS13hVILawTjMg56mlSzIbqFHtriXPP1uKD9R6XmAiA1X1fpGM4YzIMRGrhF3Y0TKQNFq9jYuVFshkVWir%2BWECr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMRbSRmwTKpAMbtk55KtwDbQo%2FPppyTgS%2Fb2ZyB7BhixzISwfTiA6bUq4NLC0kg8uZedK4LDXcuSiAGo1FGRcHH7Vlqb4B6aFK%2BU4cGLeuFqt%2FDYOmcUmPo7uHhh%2FHucItrqzGc37f%2FgmDZFUpr0clBz%2BgeIbEbLKJXS1L2YSgQdaQR2pj0PQzeoErUjnovUn2oW3ufvXbGYTbL8ziJPJjQOQE7ALUo3VDh6iV8OMvPl6iaTUHzvG6uVd8XsOHEmk2zOgE1IBOOPfuthTVj9HDlHbbqO0zGP96QkUp8x4s8%2BdHxbhYtquVfAnZIqaQW4RJNqsOX2Yu671nziOIlCU1B%2BKovQaZOchZReRDTYak9vENsog3S1lrNWHZVLg1Eml%2FGzjYvKn2RHN6bqnHhoYp6rF%2Fra6utF46sZeI5Fv%2BOHglBTPvhGo4WSUNr7n4%2FBvtqyhfi5FbrnIEySbOvX4niKFghK2dlxFbFxeR949%2BTDOaS%2BVtNX%2FSdbt1NDHOh5FJXst1e68bKXhzF2WqLs0lvq%2FIU83s3DZjv%2F%2BHrzZeqoHXUoj%2F6QE2CAZbFd4%2BNFNS0n4Z3241ugm6mrt%2BYlmMU0tXav8lkeEkvqxeCwvgZB5w30jmdwjHEGnq825kGyM1QBy7IZyqOIC5fx4w%2BODxwAY6pgERsbmXRExlhAjZkRDie%2F8JKkn%2BKSN8fejrsdpP1KfZwQ6MEN4e4r3VWBAcysTAHSQ%2FrXILHs%2F8joYBclsZdk88aBjft%2Fa0j9p0EDXLGt8JQl0UzKX98WrezFOkIR45TogT%2FdLZ42pQsldzTc2rZAupSh4csR8WU10hZY82K8n%2BqIYrsE16YmXb%2FsidnASyS5b8XR15ndfSH%2BBUVNW8DnMsPN9TyxZ9&X-Amz-Signature=eb3b6f0244f71120de426bd1f71140285a1ffd1e0b93414264e13b5a14f6259b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX6PPTK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHchVS13hVILawTjMg56mlSzIbqFHtriXPP1uKD9R6XmAiA1X1fpGM4YzIMRGrhF3Y0TKQNFq9jYuVFshkVWir%2BWECr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMRbSRmwTKpAMbtk55KtwDbQo%2FPppyTgS%2Fb2ZyB7BhixzISwfTiA6bUq4NLC0kg8uZedK4LDXcuSiAGo1FGRcHH7Vlqb4B6aFK%2BU4cGLeuFqt%2FDYOmcUmPo7uHhh%2FHucItrqzGc37f%2FgmDZFUpr0clBz%2BgeIbEbLKJXS1L2YSgQdaQR2pj0PQzeoErUjnovUn2oW3ufvXbGYTbL8ziJPJjQOQE7ALUo3VDh6iV8OMvPl6iaTUHzvG6uVd8XsOHEmk2zOgE1IBOOPfuthTVj9HDlHbbqO0zGP96QkUp8x4s8%2BdHxbhYtquVfAnZIqaQW4RJNqsOX2Yu671nziOIlCU1B%2BKovQaZOchZReRDTYak9vENsog3S1lrNWHZVLg1Eml%2FGzjYvKn2RHN6bqnHhoYp6rF%2Fra6utF46sZeI5Fv%2BOHglBTPvhGo4WSUNr7n4%2FBvtqyhfi5FbrnIEySbOvX4niKFghK2dlxFbFxeR949%2BTDOaS%2BVtNX%2FSdbt1NDHOh5FJXst1e68bKXhzF2WqLs0lvq%2FIU83s3DZjv%2F%2BHrzZeqoHXUoj%2F6QE2CAZbFd4%2BNFNS0n4Z3241ugm6mrt%2BYlmMU0tXav8lkeEkvqxeCwvgZB5w30jmdwjHEGnq825kGyM1QBy7IZyqOIC5fx4w%2BODxwAY6pgERsbmXRExlhAjZkRDie%2F8JKkn%2BKSN8fejrsdpP1KfZwQ6MEN4e4r3VWBAcysTAHSQ%2FrXILHs%2F8joYBclsZdk88aBjft%2Fa0j9p0EDXLGt8JQl0UzKX98WrezFOkIR45TogT%2FdLZ42pQsldzTc2rZAupSh4csR8WU10hZY82K8n%2BqIYrsE16YmXb%2FsidnASyS5b8XR15ndfSH%2BBUVNW8DnMsPN9TyxZ9&X-Amz-Signature=71a1b861b1b419a1303ca433c211adbc72b95131c4bae0b501588530a290cf00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX6PPTK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHchVS13hVILawTjMg56mlSzIbqFHtriXPP1uKD9R6XmAiA1X1fpGM4YzIMRGrhF3Y0TKQNFq9jYuVFshkVWir%2BWECr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMRbSRmwTKpAMbtk55KtwDbQo%2FPppyTgS%2Fb2ZyB7BhixzISwfTiA6bUq4NLC0kg8uZedK4LDXcuSiAGo1FGRcHH7Vlqb4B6aFK%2BU4cGLeuFqt%2FDYOmcUmPo7uHhh%2FHucItrqzGc37f%2FgmDZFUpr0clBz%2BgeIbEbLKJXS1L2YSgQdaQR2pj0PQzeoErUjnovUn2oW3ufvXbGYTbL8ziJPJjQOQE7ALUo3VDh6iV8OMvPl6iaTUHzvG6uVd8XsOHEmk2zOgE1IBOOPfuthTVj9HDlHbbqO0zGP96QkUp8x4s8%2BdHxbhYtquVfAnZIqaQW4RJNqsOX2Yu671nziOIlCU1B%2BKovQaZOchZReRDTYak9vENsog3S1lrNWHZVLg1Eml%2FGzjYvKn2RHN6bqnHhoYp6rF%2Fra6utF46sZeI5Fv%2BOHglBTPvhGo4WSUNr7n4%2FBvtqyhfi5FbrnIEySbOvX4niKFghK2dlxFbFxeR949%2BTDOaS%2BVtNX%2FSdbt1NDHOh5FJXst1e68bKXhzF2WqLs0lvq%2FIU83s3DZjv%2F%2BHrzZeqoHXUoj%2F6QE2CAZbFd4%2BNFNS0n4Z3241ugm6mrt%2BYlmMU0tXav8lkeEkvqxeCwvgZB5w30jmdwjHEGnq825kGyM1QBy7IZyqOIC5fx4w%2BODxwAY6pgERsbmXRExlhAjZkRDie%2F8JKkn%2BKSN8fejrsdpP1KfZwQ6MEN4e4r3VWBAcysTAHSQ%2FrXILHs%2F8joYBclsZdk88aBjft%2Fa0j9p0EDXLGt8JQl0UzKX98WrezFOkIR45TogT%2FdLZ42pQsldzTc2rZAupSh4csR8WU10hZY82K8n%2BqIYrsE16YmXb%2FsidnASyS5b8XR15ndfSH%2BBUVNW8DnMsPN9TyxZ9&X-Amz-Signature=ebf572fbbd86f9ce9c86cd20e03f07cf092a163a3fbc5d172892e5574a2d81ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6IXD6J%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp8GohPsvKHjL2jXtwPOj%2FnuP4bruRmWRURyePOLpTIAIhAKiglzOvisBJNikEBtCFjDDYoEnvm25bv9wxl0sK5GMGKv8DCHIQABoMNjM3NDIzMTgzODA1IgxvFAjjGGv3ZOFGkScq3AMONP2sHBPz8O7zmljUu8S9tRkAPHUlUreOr9ssv42WRKhAw1lQUSk58SWiBRvJh0HoM4rDB%2B0tNZv3MizJqCgR1N1UpTVHa1B1jEMG%2FdOuTAsRPvcS6Hq6F4S0RX41VY5ve5yYwamwNaAkQVMA9R9YbspMScuTqBnjf1SgBDeH7cdr8SXsbTe2KQrCJLXtJ7PS4fpPApLc2MqmUaYgB75uTXaV4cCP0nHyqJGNGSaQwMVgKnynvxKj0n0cYrsHcpJKrTXKGXinxyArnN88DtH%2B7ExiChhLsq0Wy8qQ02kdHSfdp4rEnVQ4pbxf1t9tlb41MgsXQIxsptALapGhF0QOMqqyrJHPYacV2j97BX8523kzi9KwxzDkB7GjQZ0zbSjZnakIrQaYO49G7rXlcaDlAJgpT99bHxFnXdQZgUD2E%2BmMDLuJghKtWA0TN8LAhOYZDQOhDY8JRvO0Nj2G%2FL6GUTj78mfKCA0ppxBFh%2FOHJn3dQkRRx653yuomRp4EasKLZPwnJfgNKvTLdfYipHSKzxrmnJCa8Daul%2BzM6wQ0Z0QX7q0c1CRzJZm4DrHhKhQdts0GYMS3LIocpLPLHN%2BkHAp6J0LG49Nl5oTwxemtdtpiMqjnQW56IOJ6uzDm3%2FHABjqkAVJnwvemr3ofqqn5qtCyY5%2BNk54zFWmfO1wmz%2BYPl8QUoZIIXvVwIuZD3XDIbE7xMspzFy3ivSRsViFMThWHu6df2NbIZgTUi%2FpK08nk4a4aeH35Tk6%2BhqCeUr%2BbL8w%2B%2BPY5fXFLBLiobWY2c3BGBeg8lB2MNNYGa2lNaP5kASzhwCrzlM%2BoXlolGPN7L%2BnJJ%2FwrVgNyIaohl7M0tdBSTu8on52h&X-Amz-Signature=85909a8efedeee66ed1fb385a3310ac77ba551d81b79d68a838a5a1e48f04143&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WTSFIQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFnPYruqEoKcQzRJH%2F3KaXEltjl52Wh4vzOnrEOStZAAiAOKnhCdD8bpCU9gzuiVhphz%2FzGyxsH7Th%2FPIpR7NZ%2FGCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMUwQ6HT90AW906taoKtwDu7yBJ9YEEl%2Fkxo9WvBeyJk%2Bw%2BARZ54%2F0OfgD%2BvyVJe1TMYe0Vo4aL5NmfXvX%2FKEAs8FlDu%2FOdyYMVf0nzXRAYD%2BhB%2F28bnjo6d7rHlC29s3mAlGahrr2bRQdiVdcR95GUZIEIUiHZwQLh1P7aQP4a741BAFAHkOpuC8dUpB0XodwTNvPwJ7Ssv0ixXGjmVaVlcDNJtah9Vd9%2B6Ybl9In8BbW%2Bk0lZJglW6pyQiiJFtRy4L5Ww65plhfM2qkl1tq0wOscCzlZ0gZBjfVMmAKfzJo6Pz5LIVXLAOLEg3CGbCzNUWHgmj0XkSBw3TFF2w8Yl0iU14JxmR3KkqOqWfUd%2BYkkLHVOQFwKTnUxVA2kk%2FDP8yxE3xjwTXkPYIuZ74TlY8uim3zpFzD1Q3tSg4046aZNjgW70%2FKyy4FK3i%2Fgm5Vf95ocVnOGnBdWQn1vr9S62BIFUBuMUeLk6c7NIxDUWvAHrdKx4z19t7HIcGxPZ%2BkNCkp52%2B9mHFGu44UBr%2BgUNPz9U%2BtI%2BzQz%2B7j3Lk5tbmNNTAiKTgLLg810qt2Jlh9612H15i1xXlrRzZEJKlUTZgVtpaSFmvJxYbSPRAGWIqLJqKoND%2F4ms%2FNNPthh0pN1fQ1CikxI%2BlXh%2BXMw8t%2FxwAY6pgEI55CfDSobPQj4tFpTVsWvLiO3pdTw5onNVxC%2F429Hinzl5OLBk1n03tL84Kk35t0PW1LE5bNJYgxURfY7Il2MxBPGpqFz%2F25DejcS2dC4S9t9CwhgOKXCRGUH6tJeJ6lWEweR%2B3XWyst6bYHS4ZjgOv2FKhRCQgMIrs8k%2BETpAAuEf6iacOKmBA4%2Fm6DlEYSw2je9yn%2BDFo4BWEV7YkMWOKLwfjhm&X-Amz-Signature=b42d92f1336825d9e1b57e365c23b35dec939fccc0a93959072113a220a3e6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX6PPTK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHchVS13hVILawTjMg56mlSzIbqFHtriXPP1uKD9R6XmAiA1X1fpGM4YzIMRGrhF3Y0TKQNFq9jYuVFshkVWir%2BWECr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMRbSRmwTKpAMbtk55KtwDbQo%2FPppyTgS%2Fb2ZyB7BhixzISwfTiA6bUq4NLC0kg8uZedK4LDXcuSiAGo1FGRcHH7Vlqb4B6aFK%2BU4cGLeuFqt%2FDYOmcUmPo7uHhh%2FHucItrqzGc37f%2FgmDZFUpr0clBz%2BgeIbEbLKJXS1L2YSgQdaQR2pj0PQzeoErUjnovUn2oW3ufvXbGYTbL8ziJPJjQOQE7ALUo3VDh6iV8OMvPl6iaTUHzvG6uVd8XsOHEmk2zOgE1IBOOPfuthTVj9HDlHbbqO0zGP96QkUp8x4s8%2BdHxbhYtquVfAnZIqaQW4RJNqsOX2Yu671nziOIlCU1B%2BKovQaZOchZReRDTYak9vENsog3S1lrNWHZVLg1Eml%2FGzjYvKn2RHN6bqnHhoYp6rF%2Fra6utF46sZeI5Fv%2BOHglBTPvhGo4WSUNr7n4%2FBvtqyhfi5FbrnIEySbOvX4niKFghK2dlxFbFxeR949%2BTDOaS%2BVtNX%2FSdbt1NDHOh5FJXst1e68bKXhzF2WqLs0lvq%2FIU83s3DZjv%2F%2BHrzZeqoHXUoj%2F6QE2CAZbFd4%2BNFNS0n4Z3241ugm6mrt%2BYlmMU0tXav8lkeEkvqxeCwvgZB5w30jmdwjHEGnq825kGyM1QBy7IZyqOIC5fx4w%2BODxwAY6pgERsbmXRExlhAjZkRDie%2F8JKkn%2BKSN8fejrsdpP1KfZwQ6MEN4e4r3VWBAcysTAHSQ%2FrXILHs%2F8joYBclsZdk88aBjft%2Fa0j9p0EDXLGt8JQl0UzKX98WrezFOkIR45TogT%2FdLZ42pQsldzTc2rZAupSh4csR8WU10hZY82K8n%2BqIYrsE16YmXb%2FsidnASyS5b8XR15ndfSH%2BBUVNW8DnMsPN9TyxZ9&X-Amz-Signature=719a62877fa96dd79132302f27c36075ac17b2b0314dceeaba924f212ecc8576&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
