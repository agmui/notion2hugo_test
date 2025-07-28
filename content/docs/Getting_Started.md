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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFO2CUXC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGXr5EZCD1U4njXt7sYb0uj2S9fBfN55BcOOd40CnocoAiEA5Ak1Veq8PKVZMgEl7udjzhmFRVGb5208eQSwLth%2BiuMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlzBWHg01Qy4lPCwCrcA1E7oefzEo0QlBkNiW0EpktDQQMhIoQlVMg3UbzkZShsy8W%2FZnFJKEB%2Bm1BIqGreAf%2B6haxqzscQHnPM71egNNuUY2UCWyAUR%2F8f6vrDaRyhanE6DSFI6rCsMK0S2J2lBuWRjowtaq%2FKPUC4waXgDIgPUX9fY0e3jaOio8UlCGx7Wrn3WMEm%2FsTzahwpKV%2BDyDmea9FC287dEf0G0oaYZ8eIHxXKmtYWj95Kc1MoArKRqY4316KuL1PcxQUwPTTxVZLSoKCacW0tyKX1k9WOvQHkpkJxPzaTIBuz2%2FqyJMUVIiodldQbfwsD2G%2F691FIdEEUaAR2Y6ugLHPU%2FG9BqhTWicU1cL87A3PwxVBFAiuwSEEgGoH%2FTIkAy4awlvUKsl%2BwVceQjdPB7k8LoJ0QzwjLoNYtOtTi3lLwyXzSQBeRHexcaPNOjNbNWG4stSMe7xmVEA%2FGkA3Ry9QKmfRNZfnad0GNanPFIh%2BntzgFVCleEGZeK8rxiFNioPuLYF3IaqC%2Fwu3FhljwY4Zpb%2BOvnpQ0Zhgm%2FlB3K00zoDo8nY2xpL8Zt9ijarYrcDDKndzsu4R59505iLJmM8uZ87r4XQgSCUFKSRsCuGwPNI6vBQkXL3UZy87CJLviTn5HMI%2BknsQGOqUBndlouk2Dm1ovb8sPf44WGhIF9%2F2GAFQRV7SYjxsRx81YwgAf6d0wLqZN652FCZ6d%2FyRM%2FyYVoHF0BAW5m6Z3fqVpiRWfP5BMZR05r2YC65KKHrnigNzYp1vSGs6OLxQEE73IQNUAv%2BBfvNXwW%2FeGSDpnHa1S%2B%2B6HbbeOPn2UmaRHbLNH5fHl8p2pYPIC9Xl74cMqvBymzd2UGQi9cbY5SkPsU5SS&X-Amz-Signature=5f336b20cf70d24e86a88e4a8f16eaa10dc762878bda8a981463c858f5f3771b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFO2CUXC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGXr5EZCD1U4njXt7sYb0uj2S9fBfN55BcOOd40CnocoAiEA5Ak1Veq8PKVZMgEl7udjzhmFRVGb5208eQSwLth%2BiuMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlzBWHg01Qy4lPCwCrcA1E7oefzEo0QlBkNiW0EpktDQQMhIoQlVMg3UbzkZShsy8W%2FZnFJKEB%2Bm1BIqGreAf%2B6haxqzscQHnPM71egNNuUY2UCWyAUR%2F8f6vrDaRyhanE6DSFI6rCsMK0S2J2lBuWRjowtaq%2FKPUC4waXgDIgPUX9fY0e3jaOio8UlCGx7Wrn3WMEm%2FsTzahwpKV%2BDyDmea9FC287dEf0G0oaYZ8eIHxXKmtYWj95Kc1MoArKRqY4316KuL1PcxQUwPTTxVZLSoKCacW0tyKX1k9WOvQHkpkJxPzaTIBuz2%2FqyJMUVIiodldQbfwsD2G%2F691FIdEEUaAR2Y6ugLHPU%2FG9BqhTWicU1cL87A3PwxVBFAiuwSEEgGoH%2FTIkAy4awlvUKsl%2BwVceQjdPB7k8LoJ0QzwjLoNYtOtTi3lLwyXzSQBeRHexcaPNOjNbNWG4stSMe7xmVEA%2FGkA3Ry9QKmfRNZfnad0GNanPFIh%2BntzgFVCleEGZeK8rxiFNioPuLYF3IaqC%2Fwu3FhljwY4Zpb%2BOvnpQ0Zhgm%2FlB3K00zoDo8nY2xpL8Zt9ijarYrcDDKndzsu4R59505iLJmM8uZ87r4XQgSCUFKSRsCuGwPNI6vBQkXL3UZy87CJLviTn5HMI%2BknsQGOqUBndlouk2Dm1ovb8sPf44WGhIF9%2F2GAFQRV7SYjxsRx81YwgAf6d0wLqZN652FCZ6d%2FyRM%2FyYVoHF0BAW5m6Z3fqVpiRWfP5BMZR05r2YC65KKHrnigNzYp1vSGs6OLxQEE73IQNUAv%2BBfvNXwW%2FeGSDpnHa1S%2B%2B6HbbeOPn2UmaRHbLNH5fHl8p2pYPIC9Xl74cMqvBymzd2UGQi9cbY5SkPsU5SS&X-Amz-Signature=de48e49c3fcaa38f684c3eaf01f978f1b5c35154267292f59df9979bae117f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFO2CUXC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGXr5EZCD1U4njXt7sYb0uj2S9fBfN55BcOOd40CnocoAiEA5Ak1Veq8PKVZMgEl7udjzhmFRVGb5208eQSwLth%2BiuMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlzBWHg01Qy4lPCwCrcA1E7oefzEo0QlBkNiW0EpktDQQMhIoQlVMg3UbzkZShsy8W%2FZnFJKEB%2Bm1BIqGreAf%2B6haxqzscQHnPM71egNNuUY2UCWyAUR%2F8f6vrDaRyhanE6DSFI6rCsMK0S2J2lBuWRjowtaq%2FKPUC4waXgDIgPUX9fY0e3jaOio8UlCGx7Wrn3WMEm%2FsTzahwpKV%2BDyDmea9FC287dEf0G0oaYZ8eIHxXKmtYWj95Kc1MoArKRqY4316KuL1PcxQUwPTTxVZLSoKCacW0tyKX1k9WOvQHkpkJxPzaTIBuz2%2FqyJMUVIiodldQbfwsD2G%2F691FIdEEUaAR2Y6ugLHPU%2FG9BqhTWicU1cL87A3PwxVBFAiuwSEEgGoH%2FTIkAy4awlvUKsl%2BwVceQjdPB7k8LoJ0QzwjLoNYtOtTi3lLwyXzSQBeRHexcaPNOjNbNWG4stSMe7xmVEA%2FGkA3Ry9QKmfRNZfnad0GNanPFIh%2BntzgFVCleEGZeK8rxiFNioPuLYF3IaqC%2Fwu3FhljwY4Zpb%2BOvnpQ0Zhgm%2FlB3K00zoDo8nY2xpL8Zt9ijarYrcDDKndzsu4R59505iLJmM8uZ87r4XQgSCUFKSRsCuGwPNI6vBQkXL3UZy87CJLviTn5HMI%2BknsQGOqUBndlouk2Dm1ovb8sPf44WGhIF9%2F2GAFQRV7SYjxsRx81YwgAf6d0wLqZN652FCZ6d%2FyRM%2FyYVoHF0BAW5m6Z3fqVpiRWfP5BMZR05r2YC65KKHrnigNzYp1vSGs6OLxQEE73IQNUAv%2BBfvNXwW%2FeGSDpnHa1S%2B%2B6HbbeOPn2UmaRHbLNH5fHl8p2pYPIC9Xl74cMqvBymzd2UGQi9cbY5SkPsU5SS&X-Amz-Signature=ee41b7978a36c5943b30c84514cd04fc6028adaabb769f2d271e533079943620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ2732Y%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDt61vlxb5jQLhrJUSAB4XmNwkmMTmN9J44MbU82REuLwIgN1pawgMVFmO8vgHzuCbbkDYQB5SQ%2B384HjFFCvAI%2FPgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAinyOYNaWjhbL5PLyrcA0ksYIIDYp5YVPHSZ0twwAMpztE4W1NVN%2BHuoI8QjufIriQ5C81impcb5D8qAVlIcunJTGvHMWdMmEzC0w9FvgKQx%2B1B7lJg2tiCmY4wE3suNROkc0XHQp64NUsx9Ur1Frrc35v%2FnUHdU%2BmvE%2BQ1Jk5QbnpQN8gLiY7LIp8rG%2Fm%2FB0VfBAxj9CfoDaa%2BXwrlWsfDQ2z6FOSyB02OOF9S3zmFNotKRNt5sl%2F2c1i7hmYLoLJ3JIaZ9YvOjiRMBdDXL3P%2FH5cm61On67qY9Q6DHukGztS7COGYyUxDibw7e6MMR3OO%2FWDvR2un%2FxPcANhiHxLivQuZh8BZF7A9BvYQ5uLEHKEZKOOV3TH5mGbrSWO%2BLRXCocfQU7Zb3zDSkH0vxAIvjbC7%2F7ECfaePTDXiOPtbaBvH5v88E%2BsFZQAbBpHirpH7OFFgPy6RVISY%2FCJ8J8nPdqrSRJR7RwfA6v%2F3jInyS5aJvYp19W8Sz1pGzfbov6J8XGkKGFFiWWEA0HOw3AGQa334qjN3h3ykLyKfHyeBEX14TR5NDPzMrrr7rcLpQVyhDBlgmkgUzUcjwZrJtGBCAjbdqCvBdb7j4yTS3sAF%2FWIfCpR1R3kyLEJwAo0G%2Fid1bEZo0htpv%2BnOMMf7ncQGOqUBoZIeS0%2Bp2fH9mOxheuDxfxNMb%2FYxVyo2p2K2XFQ83GwLQ%2BFGOuPhb8MG225d8zB2vQLbGbUPU99WUvI7MhXQGcUs6V7iW3Errok9JBbBdDPhWcLyI5W3fdYNXVmTbt6UpPehnhSzpXbGR586ywMfAsiYNsSDfGRzIrzR7SIcCWZm6QeOYhsQx5%2BRT7k7oqv%2FY3%2FArDjjQTW8AuQ4UQbQz%2B4WlyXs&X-Amz-Signature=2ae69b1be1ca9984c687b195c2a87e073e980eb386c57500b94605ab06d01482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25YTK5J%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4RFkTHu0Q6xJOEGGZ3O%2F2ZdD%2F1fJ1%2FmJMLKqCeSDEKAIhAKGm8amQu6TE2N6ULrOYJIjoEGo3MNIEcMA1R%2BLk%2Bl%2BQKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkXGNakWAZaRagYicq3AOeK%2FmtKX1lT%2FWEsh5fe7GbX6pj7okca55EkdsykaqbBpcuD35wPKqMwTc7yvORvs%2FWBtrbk0K8vPZhtODieLOdir%2BZhHYMiiVf3YHwogWs6d%2FdY3hgRxvXM5lGRoLH2cwJAZiqmIkeLePlwmFsI4hOKW4lUkWep0TjVp9ZsfCC1C8gsA%2FkJjqffJ8YK01yd7TnLvEToyfSg5VOXx4UGdh%2FxEdlaNDg9qcOJEAvTv2lxSohUD8AQL7%2BFoW495EJkogfCPyDo7Q80GFW9Fr%2F6nF2HDKu7rBoqOKRFw82TtYivYyC3B2PESOz6lwN4olqNrqugarDE0kKFw7DwIwI6aY1w7eGYkhAiOQzBA5RS6uV2J7PGQGuA1ReL9QBv6NWSeW3Hok7f5YQcCCAZ9RTCWFDBX6jcyyYQzxQ96lQxrvIw25CVnzKpR1xlX7VBHCIR8lWifFYsBlJZG%2BmpRuX0clQ6NljcZ1Xc5Iymojs8QhnJsszRg3W8MHDoM7UZMyRZJe4aSfQIy8buU1gTF2McHCRtCxfSRpAXQhPen7OkYvnDIv7ngFS5UIW2OuYpB%2FuiStlmA%2BlcL%2BdZzNxiyroxK9lZqF9Gg5d5L2vSW8hk2rMQt2hkbE5rkJFIpCCIzCD%2B53EBjqkAQ8tAaQRYlNs0J5XgX8Mor4iZFNklCvvpG4M%2FPwd3E6vTO%2FQdQfYhvsze0US8Kje78Ol3%2B3M9asnL2HuutF%2BUeZRs98jwZloqEqhe0cGS6P6zavhZ8DkaJvwKVKocatYTDUox6q7zN%2BinAgsqO%2B4qLaksR8JmIDaL84sSXYmQ%2BB6yeqziSwSk4CZL0B3uplHsSEeKQSPNSbsUr%2BwGhBVRpK1ZhSU&X-Amz-Signature=18add509114a17c90e03287ce560699983c4d446fb0ad0870dbf737c230239d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFO2CUXC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGXr5EZCD1U4njXt7sYb0uj2S9fBfN55BcOOd40CnocoAiEA5Ak1Veq8PKVZMgEl7udjzhmFRVGb5208eQSwLth%2BiuMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlzBWHg01Qy4lPCwCrcA1E7oefzEo0QlBkNiW0EpktDQQMhIoQlVMg3UbzkZShsy8W%2FZnFJKEB%2Bm1BIqGreAf%2B6haxqzscQHnPM71egNNuUY2UCWyAUR%2F8f6vrDaRyhanE6DSFI6rCsMK0S2J2lBuWRjowtaq%2FKPUC4waXgDIgPUX9fY0e3jaOio8UlCGx7Wrn3WMEm%2FsTzahwpKV%2BDyDmea9FC287dEf0G0oaYZ8eIHxXKmtYWj95Kc1MoArKRqY4316KuL1PcxQUwPTTxVZLSoKCacW0tyKX1k9WOvQHkpkJxPzaTIBuz2%2FqyJMUVIiodldQbfwsD2G%2F691FIdEEUaAR2Y6ugLHPU%2FG9BqhTWicU1cL87A3PwxVBFAiuwSEEgGoH%2FTIkAy4awlvUKsl%2BwVceQjdPB7k8LoJ0QzwjLoNYtOtTi3lLwyXzSQBeRHexcaPNOjNbNWG4stSMe7xmVEA%2FGkA3Ry9QKmfRNZfnad0GNanPFIh%2BntzgFVCleEGZeK8rxiFNioPuLYF3IaqC%2Fwu3FhljwY4Zpb%2BOvnpQ0Zhgm%2FlB3K00zoDo8nY2xpL8Zt9ijarYrcDDKndzsu4R59505iLJmM8uZ87r4XQgSCUFKSRsCuGwPNI6vBQkXL3UZy87CJLviTn5HMI%2BknsQGOqUBndlouk2Dm1ovb8sPf44WGhIF9%2F2GAFQRV7SYjxsRx81YwgAf6d0wLqZN652FCZ6d%2FyRM%2FyYVoHF0BAW5m6Z3fqVpiRWfP5BMZR05r2YC65KKHrnigNzYp1vSGs6OLxQEE73IQNUAv%2BBfvNXwW%2FeGSDpnHa1S%2B%2B6HbbeOPn2UmaRHbLNH5fHl8p2pYPIC9Xl74cMqvBymzd2UGQi9cbY5SkPsU5SS&X-Amz-Signature=9fb32e483b8feb0f57105d801622d1199b605fb1e88d1628016e856ef2053923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
