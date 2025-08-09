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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OCA3MVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHxAVwA9eczhAhiZ17cWWUHn6o6IfVVKkqjeXRDeEDmNAiEAw9Q%2FQfqLVvdh%2BS822j8yXjRPkO%2BpuGw%2BwfD4UeK2p5wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDyasDbjoEC8gUaASrcAx0NvwaLDaTmjZ%2F0nbE2JTgI0P8sgzpAPtGJbiH2tNzndL7VrsiMZ5%2FLTtb3riZZn04s7EYWG7BNi4XzUzNuyMsnAjSVfWHNrTdEX76FWMO%2FYBO17EHtl5y8HFviA4AnrA4wXr2FBf35V3SgKQa6mdxyFvMybEgB6bIYBrAoMMzfUHlrVvYQ5FdjiuxlQWz1DmbULY0IUizqv4D1aioxMaY3ukxUeRa8n7UMsiukIllkAcDe3bB9N7mchMKIsfPjeNPqEeBwFLiCr8odBSJLaJqlRL7c7qcMqe8cMqnxaVcGKzC%2Bm0fbitmPMaoRmCqfaJ36ysX5aDIBXqpEyeeIW%2BFBiCu2b4PLFxjTOcEI%2FF%2F3CFsuj4tM8d5sL0WKUF3ug2RwG2u9Z6xYTlZUTJC1MqLuzU24VXeWs%2FAHlA%2BzSdtNV7xKUNnutyOMKWssahQgbEOXUSvoExnleLIM5%2F%2B22aWmDhOOwXVPNF8Xb9NNR78XJRkeQOItPujfKN66UtI86hvBMwYgp7UNu6eAY81oruMVwrCR4Wxpenf%2FiAJ0ZUlPbJJwV%2BTwRY6YYL3%2BmYmNgYUmVTTRXRbK8HybpTctA8Sbwei6j87Emosi8brXdXBs4AL2VTrh54qJRew2MJSg28QGOqUBDH1rcTnHIhhJR4M8g%2FKjz6%2Fbg1v2evvSbMgLKT8cYH0gs8BiHaBkNFMgKTh%2FzCPR%2FtyQ8k8OzJs%2Be4XSb6SAnc7ygXE32dAt%2BpnhpnjFiEaxKqsO%2FOi9H%2BP84%2F6JioBz5KpRalV58mAFW4QpMQCyn6Q7%2BoUZ%2BdtY%2BsvUGxTmqxvKP4HktJOXC9auGrVr8awH2c5fCbr8a2LG6iO2kXRjdqoYBRAV&X-Amz-Signature=04bfa164c3b71e39592ab2177a73e64f731173f22d25c933c6da7169a0ca0494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OCA3MVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHxAVwA9eczhAhiZ17cWWUHn6o6IfVVKkqjeXRDeEDmNAiEAw9Q%2FQfqLVvdh%2BS822j8yXjRPkO%2BpuGw%2BwfD4UeK2p5wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDyasDbjoEC8gUaASrcAx0NvwaLDaTmjZ%2F0nbE2JTgI0P8sgzpAPtGJbiH2tNzndL7VrsiMZ5%2FLTtb3riZZn04s7EYWG7BNi4XzUzNuyMsnAjSVfWHNrTdEX76FWMO%2FYBO17EHtl5y8HFviA4AnrA4wXr2FBf35V3SgKQa6mdxyFvMybEgB6bIYBrAoMMzfUHlrVvYQ5FdjiuxlQWz1DmbULY0IUizqv4D1aioxMaY3ukxUeRa8n7UMsiukIllkAcDe3bB9N7mchMKIsfPjeNPqEeBwFLiCr8odBSJLaJqlRL7c7qcMqe8cMqnxaVcGKzC%2Bm0fbitmPMaoRmCqfaJ36ysX5aDIBXqpEyeeIW%2BFBiCu2b4PLFxjTOcEI%2FF%2F3CFsuj4tM8d5sL0WKUF3ug2RwG2u9Z6xYTlZUTJC1MqLuzU24VXeWs%2FAHlA%2BzSdtNV7xKUNnutyOMKWssahQgbEOXUSvoExnleLIM5%2F%2B22aWmDhOOwXVPNF8Xb9NNR78XJRkeQOItPujfKN66UtI86hvBMwYgp7UNu6eAY81oruMVwrCR4Wxpenf%2FiAJ0ZUlPbJJwV%2BTwRY6YYL3%2BmYmNgYUmVTTRXRbK8HybpTctA8Sbwei6j87Emosi8brXdXBs4AL2VTrh54qJRew2MJSg28QGOqUBDH1rcTnHIhhJR4M8g%2FKjz6%2Fbg1v2evvSbMgLKT8cYH0gs8BiHaBkNFMgKTh%2FzCPR%2FtyQ8k8OzJs%2Be4XSb6SAnc7ygXE32dAt%2BpnhpnjFiEaxKqsO%2FOi9H%2BP84%2F6JioBz5KpRalV58mAFW4QpMQCyn6Q7%2BoUZ%2BdtY%2BsvUGxTmqxvKP4HktJOXC9auGrVr8awH2c5fCbr8a2LG6iO2kXRjdqoYBRAV&X-Amz-Signature=3182f4b82225e5791715703b3188ceae4e5df7e21d3dc458371ed67be6e59ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OCA3MVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHxAVwA9eczhAhiZ17cWWUHn6o6IfVVKkqjeXRDeEDmNAiEAw9Q%2FQfqLVvdh%2BS822j8yXjRPkO%2BpuGw%2BwfD4UeK2p5wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDyasDbjoEC8gUaASrcAx0NvwaLDaTmjZ%2F0nbE2JTgI0P8sgzpAPtGJbiH2tNzndL7VrsiMZ5%2FLTtb3riZZn04s7EYWG7BNi4XzUzNuyMsnAjSVfWHNrTdEX76FWMO%2FYBO17EHtl5y8HFviA4AnrA4wXr2FBf35V3SgKQa6mdxyFvMybEgB6bIYBrAoMMzfUHlrVvYQ5FdjiuxlQWz1DmbULY0IUizqv4D1aioxMaY3ukxUeRa8n7UMsiukIllkAcDe3bB9N7mchMKIsfPjeNPqEeBwFLiCr8odBSJLaJqlRL7c7qcMqe8cMqnxaVcGKzC%2Bm0fbitmPMaoRmCqfaJ36ysX5aDIBXqpEyeeIW%2BFBiCu2b4PLFxjTOcEI%2FF%2F3CFsuj4tM8d5sL0WKUF3ug2RwG2u9Z6xYTlZUTJC1MqLuzU24VXeWs%2FAHlA%2BzSdtNV7xKUNnutyOMKWssahQgbEOXUSvoExnleLIM5%2F%2B22aWmDhOOwXVPNF8Xb9NNR78XJRkeQOItPujfKN66UtI86hvBMwYgp7UNu6eAY81oruMVwrCR4Wxpenf%2FiAJ0ZUlPbJJwV%2BTwRY6YYL3%2BmYmNgYUmVTTRXRbK8HybpTctA8Sbwei6j87Emosi8brXdXBs4AL2VTrh54qJRew2MJSg28QGOqUBDH1rcTnHIhhJR4M8g%2FKjz6%2Fbg1v2evvSbMgLKT8cYH0gs8BiHaBkNFMgKTh%2FzCPR%2FtyQ8k8OzJs%2Be4XSb6SAnc7ygXE32dAt%2BpnhpnjFiEaxKqsO%2FOi9H%2BP84%2F6JioBz5KpRalV58mAFW4QpMQCyn6Q7%2BoUZ%2BdtY%2BsvUGxTmqxvKP4HktJOXC9auGrVr8awH2c5fCbr8a2LG6iO2kXRjdqoYBRAV&X-Amz-Signature=6bb157a1950b2e352a554ad3d27423fbe251c8489224e5af8138d9f7eadcd7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJACD2TK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEZpdRqxMKgZiQIQ95Ulg1sPQPGe%2FffzfSECLWVBvjUCAiArnZp013TrlvVtaRX99cECy9Cqtfeg7YLHVcX%2BarylPiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvLjB8xL%2BfgVVO2oKtwD6WokMJjGvvgLSZZ1neY47lB8y5ievDB7NmCwQBGZFCo2qJaSEOffbU0keGfoN9Qg0E%2FalxUAGf3ymMVX%2FT12IkyJs6EBgNleetQVOQaZTC4W2ymY9M%2BaIqiavk2X7hoCnOJkJKL%2FMR2isJzoWpxf3REZI7DM2wVC3veLa4aOSW9G0bZMTcTHCEz2zyuhF5%2Fd3UISEOUbzqIxNntcX9iy1Bm0C%2BupUS%2Bu5Glh5hsGC%2F%2BTMdHL0o%2B4kAck4jfLbU8uCFx1ikNL5azRviq%2Fej7cNp0flhhSGypRSh9hLPLHldBRr6UCFPHyDwIhQ1CEOcjdt0MMdCFsjqGW1OiYaIY2gQho%2Be2%2Bn3KNqEuCiPais0XEKgv2%2BcnbIwzhbMeTA8%2Bymgm%2F2C6QiTV0jhCHL%2BR7DCDjINu8dYWJeOBrQwljGHA%2F5m%2F1k3JuUqQdpNm5c2rb7LCaJ3M4x2KOzbkThkzsnjYL2dbahXjhADSdwE%2FX1wld%2BrOgVUMIgDbqm5JqxxG3oO5J7UHpijMdJIaaBGpsytR%2FHu4EP%2BBqVmBl22eYBoAV56g7NPHSTtfNYpXKnlrSHtYOe23jNduV5bikvpz0rfcloGBx9vmX3AORBlVvbGHPXdP8W3YVat20n%2FkwhaDbxAY6pgHBt2LHZ4s6L7KcSV9eOwbzPJwRKRL4G0oQI8B0MK6KMJt4UpByqV1qsc2mKbRAknFBImnMCksS0RqmfgKk1SNRWBNAXV6hXUcsLNlbir1XB6eGmSToD2xb2siQ1TrPrVfTYcyGI4QFVgMjLYbxnV2V6NQP4iJgXH9y%2FAgwiX6WgVXjDNL1hRxrV8ZvGAJ9V%2BWO65V30EdKcHvAN0h8E90iA3FngoAM&X-Amz-Signature=26161b6bab359cd40d0a3083ab0a069339b5e2e04243bcc408fc10c250ff61a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653O63XPQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAwGzBEpnw0hTToKjzU%2BW2yrVZT9SKMNkYCNXsnYT9eeAiAoUFHnyW0yrsp2IEzO6vRXxrJnG86YmgV0jieX8NbBBiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfh2yWW66SGuOAvPbKtwD0wYFbzT019Ztsrdc3biyEfkXtE7rAh0%2BaGnJMI7VohQQOW8FNmfJMiXTe6v4%2Fd7DsenCQ3NSYjD5rSjTucYctacT6En%2BIDC2WWKiQVzgKEV%2FonXZQp%2FSW%2BkyZl2wP7WBl4thP53P7wDiEOr4ES37wQ5Ke97FY5VJXzz28z3UFI0gaWJfCgW9wjRBNel%2BqNC7S8Xvd187VLSOTrZklFxHD47UZhGyubzx%2BbPbSyeP6anE2Y4WOtw53Y3RYCZtUvkgb7bxbpingrn277Si6NuLJ4AGsc6yKj223qlac2X443UMbxINSEuD2t6g1EfOLmy8kkhya0WSCpyBiSpYa3RR%2FZTtGFq5p7RAV5RMeyb2nKMmQuIFb2w%2FhpUiti7NRlxE%2BHdsT7T2RKgteQsTHfRSrKwpBdnIJNEEQPf7HI6Oreq2XM5Y84lT4%2BEy%2Bfwytv0uh7cNGEbtqO20aYHAy%2BbPkxd%2B5sunCccjw%2BloZuCYqVGYFhQgbYuii7WIsE2KPRLGTaXmSVxdbQjzr%2FaTpzMc%2FO71O2A8sixT5L%2FnmJ46F2JjKzMUgoxDJqdShbvql3LJgfpBUOwwBpusXCIo%2Bz3EdR7ij%2FcFkipbtd8DyxVLeGsP3q%2FzvVp2UmFyIT8w3J%2FbxAY6pgEtyEBdxllepPNO8N7Arx6F%2FLeAeBHOfneqKyS6KVDI8Tq7Er%2BToPPMmRyEoQoyfO5hDNIoNivJ%2F2McKJ5DwAfg%2Fmk1ABgSHvTtQp4HgIfc8T8SatCE%2BUeQ0Gu1%2BS4aycI39FojtuoKt7Kpc5WEA751f0uzfklHqd%2Br8Hti42%2FPFpWcdRwcvzSsaAsAIhJRC7k3fQcQWOO3Q4GTIxJtKv69hZf%2FL9tZ&X-Amz-Signature=4af948bb027ac91c5ec832330939821543028c31a381a9bbf280365d0f475874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OCA3MVD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHxAVwA9eczhAhiZ17cWWUHn6o6IfVVKkqjeXRDeEDmNAiEAw9Q%2FQfqLVvdh%2BS822j8yXjRPkO%2BpuGw%2BwfD4UeK2p5wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDyasDbjoEC8gUaASrcAx0NvwaLDaTmjZ%2F0nbE2JTgI0P8sgzpAPtGJbiH2tNzndL7VrsiMZ5%2FLTtb3riZZn04s7EYWG7BNi4XzUzNuyMsnAjSVfWHNrTdEX76FWMO%2FYBO17EHtl5y8HFviA4AnrA4wXr2FBf35V3SgKQa6mdxyFvMybEgB6bIYBrAoMMzfUHlrVvYQ5FdjiuxlQWz1DmbULY0IUizqv4D1aioxMaY3ukxUeRa8n7UMsiukIllkAcDe3bB9N7mchMKIsfPjeNPqEeBwFLiCr8odBSJLaJqlRL7c7qcMqe8cMqnxaVcGKzC%2Bm0fbitmPMaoRmCqfaJ36ysX5aDIBXqpEyeeIW%2BFBiCu2b4PLFxjTOcEI%2FF%2F3CFsuj4tM8d5sL0WKUF3ug2RwG2u9Z6xYTlZUTJC1MqLuzU24VXeWs%2FAHlA%2BzSdtNV7xKUNnutyOMKWssahQgbEOXUSvoExnleLIM5%2F%2B22aWmDhOOwXVPNF8Xb9NNR78XJRkeQOItPujfKN66UtI86hvBMwYgp7UNu6eAY81oruMVwrCR4Wxpenf%2FiAJ0ZUlPbJJwV%2BTwRY6YYL3%2BmYmNgYUmVTTRXRbK8HybpTctA8Sbwei6j87Emosi8brXdXBs4AL2VTrh54qJRew2MJSg28QGOqUBDH1rcTnHIhhJR4M8g%2FKjz6%2Fbg1v2evvSbMgLKT8cYH0gs8BiHaBkNFMgKTh%2FzCPR%2FtyQ8k8OzJs%2Be4XSb6SAnc7ygXE32dAt%2BpnhpnjFiEaxKqsO%2FOi9H%2BP84%2F6JioBz5KpRalV58mAFW4QpMQCyn6Q7%2BoUZ%2BdtY%2BsvUGxTmqxvKP4HktJOXC9auGrVr8awH2c5fCbr8a2LG6iO2kXRjdqoYBRAV&X-Amz-Signature=cbfa9db10e5db98735568a604f8fc1d2579d9ad37d0915f24015be74594d1021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
