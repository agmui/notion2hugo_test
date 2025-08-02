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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HH34IS3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7bBujfqu0KIcMiH7bCB9TCl2FuQvamze%2FUBNccWLBIwIgL5HnmRqqiH%2BS9XV5OlNtSWW%2B%2FjRNEQ2YsON%2Fn2fIH1wqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKalOx9eadroIxr%2F2SrcA%2F0DrPk4Lr1UWevyRQgjqf98Jqboc%2B1sBLRDER55MreoJiExYdYg0BeMmS0BBohDWj9UMqOU0PNN8Vx33j0MkcpK9l7bktOJpabKpSh4eac3Q6oLcBv3bKljxUPjNXVZBERe%2BLhyLnUhySgg8qeE%2BcplYxpAKBdx74pWcfh1MLHbaQc0agdnj84hscP3uPqeHwzFHhIP%2Bx7kOzGf7iGXzeU2xGN3cbSR1rTZsFRi4acApVU9otf2gYZ3dd0QRxkL1ivO1iihg1gveZ8R46Xkk21UIKIVB21dbrzSIDSp99tHIvP1aTU%2FyQYysX4i1ybh%2BPWNM2FmXXd45x1O6I7u1KLumzFyjqFQT4HBR6BKhok5qUnjQh%2FPl1GTBzBoWO5ZiHRZlRtzFklcoNRhWNl%2FkTBlAuKkKRMDLgmXaxYVXa7MkE%2FuScYzffosBadL4Rh86VipvNrbqr8NvnxauJwls%2F4dYqeoMY3dbBrgYzMntYg2Q%2FgQoUTATTnFMxiE3rwLrOvKPSGRCsmleir6gqaPbBLAAJ5sPRWEAoQBSunV5FEhELdRn78hpCZnrQrxW%2BPDOqLCBSTe1khK3XAoILISmPJul1iRYA7EGzPnOGp5nbEITNC01i6QoTJQsBAOMJP3tcQGOqUBodZZlhjjIHXtZ0Fco0Mbzliy51F4VPrO9Of%2BFhAfVN9pmRUiApB8hQzbE%2FqQS%2FswkNcJ3C%2FHPFlQBsli4Eh1Sn5tonS4q1cRL%2Br9NaWk09AfV9DMlMmO%2BbOiBnYrWJGn%2Fujuo6qzoclwIqCsY2HNM7rAY98ZA07gUWwg%2B9zMX%2B7wE%2FRTlBodfPiR96etMYg%2Fz3JmexZ0nyeD1gM1O%2FykxiwSf0QJ&X-Amz-Signature=c0d8776428bce5c0e991e3ddddb1290b94c4060820caaa276dbfcbecc9056523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HH34IS3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7bBujfqu0KIcMiH7bCB9TCl2FuQvamze%2FUBNccWLBIwIgL5HnmRqqiH%2BS9XV5OlNtSWW%2B%2FjRNEQ2YsON%2Fn2fIH1wqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKalOx9eadroIxr%2F2SrcA%2F0DrPk4Lr1UWevyRQgjqf98Jqboc%2B1sBLRDER55MreoJiExYdYg0BeMmS0BBohDWj9UMqOU0PNN8Vx33j0MkcpK9l7bktOJpabKpSh4eac3Q6oLcBv3bKljxUPjNXVZBERe%2BLhyLnUhySgg8qeE%2BcplYxpAKBdx74pWcfh1MLHbaQc0agdnj84hscP3uPqeHwzFHhIP%2Bx7kOzGf7iGXzeU2xGN3cbSR1rTZsFRi4acApVU9otf2gYZ3dd0QRxkL1ivO1iihg1gveZ8R46Xkk21UIKIVB21dbrzSIDSp99tHIvP1aTU%2FyQYysX4i1ybh%2BPWNM2FmXXd45x1O6I7u1KLumzFyjqFQT4HBR6BKhok5qUnjQh%2FPl1GTBzBoWO5ZiHRZlRtzFklcoNRhWNl%2FkTBlAuKkKRMDLgmXaxYVXa7MkE%2FuScYzffosBadL4Rh86VipvNrbqr8NvnxauJwls%2F4dYqeoMY3dbBrgYzMntYg2Q%2FgQoUTATTnFMxiE3rwLrOvKPSGRCsmleir6gqaPbBLAAJ5sPRWEAoQBSunV5FEhELdRn78hpCZnrQrxW%2BPDOqLCBSTe1khK3XAoILISmPJul1iRYA7EGzPnOGp5nbEITNC01i6QoTJQsBAOMJP3tcQGOqUBodZZlhjjIHXtZ0Fco0Mbzliy51F4VPrO9Of%2BFhAfVN9pmRUiApB8hQzbE%2FqQS%2FswkNcJ3C%2FHPFlQBsli4Eh1Sn5tonS4q1cRL%2Br9NaWk09AfV9DMlMmO%2BbOiBnYrWJGn%2Fujuo6qzoclwIqCsY2HNM7rAY98ZA07gUWwg%2B9zMX%2B7wE%2FRTlBodfPiR96etMYg%2Fz3JmexZ0nyeD1gM1O%2FykxiwSf0QJ&X-Amz-Signature=849913254a8c36c215e2f9db3817c89601a916b32bca8eb07a7faf784bc70da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HH34IS3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7bBujfqu0KIcMiH7bCB9TCl2FuQvamze%2FUBNccWLBIwIgL5HnmRqqiH%2BS9XV5OlNtSWW%2B%2FjRNEQ2YsON%2Fn2fIH1wqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKalOx9eadroIxr%2F2SrcA%2F0DrPk4Lr1UWevyRQgjqf98Jqboc%2B1sBLRDER55MreoJiExYdYg0BeMmS0BBohDWj9UMqOU0PNN8Vx33j0MkcpK9l7bktOJpabKpSh4eac3Q6oLcBv3bKljxUPjNXVZBERe%2BLhyLnUhySgg8qeE%2BcplYxpAKBdx74pWcfh1MLHbaQc0agdnj84hscP3uPqeHwzFHhIP%2Bx7kOzGf7iGXzeU2xGN3cbSR1rTZsFRi4acApVU9otf2gYZ3dd0QRxkL1ivO1iihg1gveZ8R46Xkk21UIKIVB21dbrzSIDSp99tHIvP1aTU%2FyQYysX4i1ybh%2BPWNM2FmXXd45x1O6I7u1KLumzFyjqFQT4HBR6BKhok5qUnjQh%2FPl1GTBzBoWO5ZiHRZlRtzFklcoNRhWNl%2FkTBlAuKkKRMDLgmXaxYVXa7MkE%2FuScYzffosBadL4Rh86VipvNrbqr8NvnxauJwls%2F4dYqeoMY3dbBrgYzMntYg2Q%2FgQoUTATTnFMxiE3rwLrOvKPSGRCsmleir6gqaPbBLAAJ5sPRWEAoQBSunV5FEhELdRn78hpCZnrQrxW%2BPDOqLCBSTe1khK3XAoILISmPJul1iRYA7EGzPnOGp5nbEITNC01i6QoTJQsBAOMJP3tcQGOqUBodZZlhjjIHXtZ0Fco0Mbzliy51F4VPrO9Of%2BFhAfVN9pmRUiApB8hQzbE%2FqQS%2FswkNcJ3C%2FHPFlQBsli4Eh1Sn5tonS4q1cRL%2Br9NaWk09AfV9DMlMmO%2BbOiBnYrWJGn%2Fujuo6qzoclwIqCsY2HNM7rAY98ZA07gUWwg%2B9zMX%2B7wE%2FRTlBodfPiR96etMYg%2Fz3JmexZ0nyeD1gM1O%2FykxiwSf0QJ&X-Amz-Signature=8e658726f44ca0a026c9e36be28a8b1e7dbfc3fbce53e616ce0a836e3e859cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMPL7KK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtoXx0laokPrEDtNoU6BWco5NCDz5apQIl5vstbkfaBQIgWEiwBZpHCDuEH2j%2BiTul2k9SHDCG4KPYGti6Ol6liUkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzJyUV8ISFnYVGAaircA8bADo6UMpVioAR5uYBlHl%2Bz0iIJXDtCEMjVB3PVwoWK0CBmmiK5muCb2e4jrVgSjq4LnUQoyxpc8lUUQIWdEnfFozr6D8Clucp6VO6Jsx6e0ceLxmmMUoNrUqCaQEeCq4aHoz2onIrGk9sZAzWbM5IYxRax%2BlXPv7hP7bBiC%2BgbtyQiFdsVLnmFXJBi8bds1R%2FwWtv0Wu44ifbsZWcZBAMW4nONwTfJmpMyUYgQEWEsmlENm4EKR9bGWCIw2uWU2wdKX%2FflqC0VKD5LQMXDz0sibXmQ6g0D%2FFRWMvoYfTz%2F2qOnCscv7YM9s%2BXFAtB8X7HcMDS3HB5qYD5MogNFOLMDteNSqkDYrqnRowu1JXPAxBgWGKM%2BDIQwvNYroKFjBx3DPZBMOsWO0EKSScs5YdEOCYXz3oZvemrq7fOxfmtA2BGZ2PQVQQ0JXA4TQCQcYISZkAJtb2lIQqVeU4dw9tuOKJtcdJlccxgZFMcRuQ7vALtRAYo9wkV5BSvBR9kfMCV31Ss7gYs15EZuLxCC7Rdmxzli06M4N31pN17aeMGCxrzzLuvYCsPd0dvxvGZn7BD76OPD3Asf0aRDSN1Yq0umN%2BeYlQpi0t%2BRyw%2FaTgqZl819EcLnQC458dFFMIT4tcQGOqUBP68GIiDeY01xET2jroHkxwFByPozLT7tTf1lWRQAsOSTN9eq34HWH4qS%2Bsf%2BF3F8CeX0efPM%2ByYybtSWDEcqRoJjwobnnjShwCLJO3KL9OldS8xlIqibaxbbzFW2vZDX4LlXxaJo42ZdnU0SSH1J405Qlu3%2BpiiTWG2EwS%2F%2BXhzA6vNlPGUU%2Br1YZJ0HneQSrG9FjwpaW0Co1cP6da%2BKpAQAoQre&X-Amz-Signature=f088a9bbe03cfee2d901f1cc9333467db024883846d6878f62ad1d9fb3fdcbae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CTF77BG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8rnzXDPRk%2BU2LfqejqvIGFvkoy6FuORYa16KyKTl3ZgIhAJFpb%2FdQZKrxk2JmDPlhgZtS%2Fe8q6LPSR3JsXZDAtzQqKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9%2Bzq5UNe1aQtzBEq3APel6sn3GWlA%2B8B1jGCjEWORlru77yfVKwXjUu8mkX%2Bc09Vc3LKr%2BDndHwkMZDc7h%2FfzEogvetJFZfMIuVlP070AK6%2F%2FVwJ1Ea8XOOqyZ0WmZgvCS%2Bse3souELk6WoV4tFKchmMDdj7oPrjDHkZvevebz39WKVXdX97HbljysTsdSRvfXN3XgiZ%2BPY5NnQ5EgTBl%2FWJTtUr8NuxB1nKLohxv16lps1so8KPQinNPMl2qQhVRmCg1c3LhBrFxsyiEM9trAnxkn5U9NvbVgaLxlkcm0BSgD7l96EiG2hU%2BVMnqdWSGf4CZnjqtv29jPn2VNW63M3f4owy1njozVS1m7InjJ3ci1zdXE1T%2F%2Fs8AVIEqa%2FsAyegEsgQp7HNjk6cf9PFuSRI1h4P40A%2BLT8c%2BDZ8AlWBxiBM7KOABSxFOqeUTLl0YDuYR7uq1fiezbkYzeR2sH0aLuVXhaZLX7YnYnYyAelZCJxG3YWMNr2NkCbFIvBGUx6oFOHFxoGL3AG8wj3xdRtIR0OeF8qbJMSQj4GWs34nr9eq5iCZUxx%2BzGbk1gGHoh8MN1K3nrXHdoO9duVy7yPiKQJyfi%2BQWHU4%2FeR9NOwVG35VXOABun6ir1AXwvPDF5PulV5FQWOuazDz9rXEBjqkAVNdN%2F%2BA5hNFSxpzOWlWeaVtbPMZshZ1PIF1Pxl2BcW9vYZlKqBp9QgjSbUlH2RYbtBW155EDG4jkbUr3v6D7WY1GK%2BJTD1ba75KJntCz8dgeXFNHR28uwT9wfCsiwYK4SZWoDVZb%2F7jwmzGMK1aQHsHxUhPybfRd%2B5QYQOTX%2F%2BFFryoWSpVGw0w78nEg9vNWA78s1AJvyx2DYp2f1uuxmxVrM5g&X-Amz-Signature=2c011d37797cc9cf8f30f80d4d56cfd2be9f1fe26fb7bbc6494471d72053daa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HH34IS3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7bBujfqu0KIcMiH7bCB9TCl2FuQvamze%2FUBNccWLBIwIgL5HnmRqqiH%2BS9XV5OlNtSWW%2B%2FjRNEQ2YsON%2Fn2fIH1wqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKalOx9eadroIxr%2F2SrcA%2F0DrPk4Lr1UWevyRQgjqf98Jqboc%2B1sBLRDER55MreoJiExYdYg0BeMmS0BBohDWj9UMqOU0PNN8Vx33j0MkcpK9l7bktOJpabKpSh4eac3Q6oLcBv3bKljxUPjNXVZBERe%2BLhyLnUhySgg8qeE%2BcplYxpAKBdx74pWcfh1MLHbaQc0agdnj84hscP3uPqeHwzFHhIP%2Bx7kOzGf7iGXzeU2xGN3cbSR1rTZsFRi4acApVU9otf2gYZ3dd0QRxkL1ivO1iihg1gveZ8R46Xkk21UIKIVB21dbrzSIDSp99tHIvP1aTU%2FyQYysX4i1ybh%2BPWNM2FmXXd45x1O6I7u1KLumzFyjqFQT4HBR6BKhok5qUnjQh%2FPl1GTBzBoWO5ZiHRZlRtzFklcoNRhWNl%2FkTBlAuKkKRMDLgmXaxYVXa7MkE%2FuScYzffosBadL4Rh86VipvNrbqr8NvnxauJwls%2F4dYqeoMY3dbBrgYzMntYg2Q%2FgQoUTATTnFMxiE3rwLrOvKPSGRCsmleir6gqaPbBLAAJ5sPRWEAoQBSunV5FEhELdRn78hpCZnrQrxW%2BPDOqLCBSTe1khK3XAoILISmPJul1iRYA7EGzPnOGp5nbEITNC01i6QoTJQsBAOMJP3tcQGOqUBodZZlhjjIHXtZ0Fco0Mbzliy51F4VPrO9Of%2BFhAfVN9pmRUiApB8hQzbE%2FqQS%2FswkNcJ3C%2FHPFlQBsli4Eh1Sn5tonS4q1cRL%2Br9NaWk09AfV9DMlMmO%2BbOiBnYrWJGn%2Fujuo6qzoclwIqCsY2HNM7rAY98ZA07gUWwg%2B9zMX%2B7wE%2FRTlBodfPiR96etMYg%2Fz3JmexZ0nyeD1gM1O%2FykxiwSf0QJ&X-Amz-Signature=d0aecab68351cb75fde473630825c1c5028b798f4f22eb29db78a4ba28771142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
