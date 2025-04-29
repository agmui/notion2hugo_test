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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLRXWMY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpfMS7ES5bCYJ1lN3%2FJgszd3ODtb0R6pATfG5uYYGVoAiEAw9V5nMDK0bvQljkbCRJvU3kdD0DJikgLNKZS1jkElhIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYmlHXA4QzysxmRHircA9fpsxBq2gnHF%2BTBU0IBpFe32Sxw87jWCcKbtHu0c7ASmM1iQgEdhrk02AY8VXnVWLMSKH1bl4%2B9MIBJRjSDOWVhd%2FfUaVlPV6Hb12ZYZavwlul2C%2FWJQR3SSaUwgIOukdIEOknb09sSOYK4Okg5YvGwMEfyAFX2r%2BbuI7NDDkM7%2BmsBxKWCL1lxjx3LWv%2Bgz7y4UtrUQARKGLCQ9eI0C7s%2B%2F4f3P0rs8lqWCOZpFoQc27dkoMm8SuolWhaPnIVWBCRZg2S0t%2BRI1r3oOzgm9HJm%2BfobY%2BNJQpJ0DcjZiygN1hx9tCAQ1HPncXbyqW0MLgIYVaxvWNDokawlXy%2BOSd37LjVon%2FlHmBCCkZJUwC6cWLWHWuqdGiZxGcUoUTfuZXGP27wBfUiyZ%2BIyXEXyUxjw0dpHT5XP1kjC5CCIxU3M133yK61%2FwlZ%2BZTSOcigu35%2Fr2Mej%2F6%2B4PsdjSehTlNmGdDM%2BcMXgtyYAgeLaN4lBcjJxtVrCWqJ%2FO4UElhCjcQF8wH6lrY%2Fw0gxVguTNSeF45aJutLA8F3mdxl5QQyMJjvDXFxYxV2iUBi6Z64Uov8dsyYqYIrwq5hPiPRXCTD%2BsVWhwhdogmw%2BWmuhvvHc3bkiQybAJC21Mwp0qMMzuwcAGOqUBmJFOiG6bfHUPOJdrXx4SFVTbkEXm2mjeA4tJeTPmkR4%2BLtTl%2BGEa30oku7c%2FCcN85Hx12uOu7TUR6XkRVuNClB1QhwXAusnU8M7XHrXvDkuHnxoDumDjMTCKkmW%2FaHaGrgNM3Ot0tqnowgpKYNNwMnrW7FYVin6VPeu8M09jyUm7evJCfMEZbgDbClmvsC2wt0DYdLOilvucAswHov5ivHQXSEON&X-Amz-Signature=b09cbb1bd3b45519819fb027da149f0e89e5867cc9fdd01c85bc2d2a93c28fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLRXWMY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpfMS7ES5bCYJ1lN3%2FJgszd3ODtb0R6pATfG5uYYGVoAiEAw9V5nMDK0bvQljkbCRJvU3kdD0DJikgLNKZS1jkElhIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYmlHXA4QzysxmRHircA9fpsxBq2gnHF%2BTBU0IBpFe32Sxw87jWCcKbtHu0c7ASmM1iQgEdhrk02AY8VXnVWLMSKH1bl4%2B9MIBJRjSDOWVhd%2FfUaVlPV6Hb12ZYZavwlul2C%2FWJQR3SSaUwgIOukdIEOknb09sSOYK4Okg5YvGwMEfyAFX2r%2BbuI7NDDkM7%2BmsBxKWCL1lxjx3LWv%2Bgz7y4UtrUQARKGLCQ9eI0C7s%2B%2F4f3P0rs8lqWCOZpFoQc27dkoMm8SuolWhaPnIVWBCRZg2S0t%2BRI1r3oOzgm9HJm%2BfobY%2BNJQpJ0DcjZiygN1hx9tCAQ1HPncXbyqW0MLgIYVaxvWNDokawlXy%2BOSd37LjVon%2FlHmBCCkZJUwC6cWLWHWuqdGiZxGcUoUTfuZXGP27wBfUiyZ%2BIyXEXyUxjw0dpHT5XP1kjC5CCIxU3M133yK61%2FwlZ%2BZTSOcigu35%2Fr2Mej%2F6%2B4PsdjSehTlNmGdDM%2BcMXgtyYAgeLaN4lBcjJxtVrCWqJ%2FO4UElhCjcQF8wH6lrY%2Fw0gxVguTNSeF45aJutLA8F3mdxl5QQyMJjvDXFxYxV2iUBi6Z64Uov8dsyYqYIrwq5hPiPRXCTD%2BsVWhwhdogmw%2BWmuhvvHc3bkiQybAJC21Mwp0qMMzuwcAGOqUBmJFOiG6bfHUPOJdrXx4SFVTbkEXm2mjeA4tJeTPmkR4%2BLtTl%2BGEa30oku7c%2FCcN85Hx12uOu7TUR6XkRVuNClB1QhwXAusnU8M7XHrXvDkuHnxoDumDjMTCKkmW%2FaHaGrgNM3Ot0tqnowgpKYNNwMnrW7FYVin6VPeu8M09jyUm7evJCfMEZbgDbClmvsC2wt0DYdLOilvucAswHov5ivHQXSEON&X-Amz-Signature=cac0d05bb320fd78ed4d47d9a9f246252ae767628c97b289ab93092f295b2e69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Y2G5KI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaJBIKBbd9nSXEM6Oj9mLWWMqQK02fUMUQXuKsFpdkbwIhAPIoo6gv7JcXHY4Zup7GgApcwd8cu2HAzYI9X%2BAU5ELkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqTOe%2Ffux6YC7cuyMq3AO7BsyWTN5C9ibqjpsj5ZftHopTURNh6Wxz%2F3wNOPcLkgJxa8QztOjGXrXPRC8sdJfoi4L9wm0wnPkCMY1%2BJzVXEtyKvl5Xt0Lw9C8JFblVqZ1mu7Ym3x8gZ3oIYPpoMAI%2FMd7%2Fxp2Zn0kX%2FdiGIij0w9apSel2AQL2DO6RbgNo0g01TWnOiuk0gGGC0IXGHQfl7nKUAVt42hs48z6eb9jqs0uWbocHIBJl0aanEAGm8Qa7rqxGbNVs3OBva9XEg9u%2BoGS8%2BQY62AXI7XqXQnkw99yUoQib78NN80i5gDjIEMdNb%2B24HmLLG5M0DWcLlnGgpZbop%2Bc6cbOAMwm%2B7D1NpVYWEseIPuuWaXeEfjzYPRUhR5W4yoDF48YSVoEcVomL0TlkkT2lwiL%2BGICe4Vzh20akKYzmOAb3bwpS%2BtMUYNUfH6dxFp9tFu1ujaPdp3CdVCZ9CkREqOOnJDG1ERhPIoCidjTCd4KgGQLB9I551fzU268b9W2S49RTVjPcrt%2BsKHnhj%2FmFkllE%2FeteL8PF%2F80fM%2BfPf%2FfTjIzxnaX6lfoLtTnQGPqWP1pjNwC3mx2b28qV1qFjToyBdoHMtTRUAhaGsePFmqOEnkUErzRl8XehzVCG9qB4xNTE3DD97sHABjqkAQPgTE%2FF5GovivCBlRfAbfKjHpWPXugmsdaZ6wJJtCpaNNaro0m2pC2dlikYPJSwCGgUM9S1kYpzmBtZFComLDHbufU8JiaLc%2F0c8ofdxnsZv1PwLCGBZp8PBRV0xh%2FWCtBZcX2qLY9ItHfz4Kgkv2%2FKAw%2Ff%2Bdty8qT6SBbG0%2BQdoc28bHU3b%2B3LaI%2BTLeNRne63BOrxFhzVFG8dPv7m89EBv1UQ&X-Amz-Signature=7318b4520af0ad25ed72fed4b32fd9e2a74ea7e655a38b3a1cf7b52f02bb1f99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4YZXVJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTujwZpn4uyo8TM5ifQGqjPlZz3vHDm%2FIU98OVuHpsPQIhAOJm5CwveS94hqtUsKGLIj4%2F7R6x27WbFDsU9KAcEOTAKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr7j6W87%2FFCGB%2BKHUq3APigVj%2FUzIwofH0H4uJsVXh44DBb3hpwim1Svi5u7VAVoC3zFsizvH5Bi8EzSk58d3BNYernoGLNmW6lcQGZoztIL800vszMjfLUC9zTSSJfmdXl4vpvrfY9JGovU%2FbyS%2FfZezAOAUGyyaTbWujAvP7TvIm2ZlHPcbuY0AGQJbChZ6fByxecDStc6V0%2Bf8oJnG1tN8JbmKqcOjmCEIYOyQMS853OrnxSFLI1vzD%2BpvPgyWu6h2ptXj5NFiyiY7pqXOipbYaSOZLaZXu%2FF2OoZA78XNDR%2Fte8P4s8K0YEvVbzJK3cX4D3oM7Yhy5SU%2B5X3T8nYp0FBXiQSN231zgnzR8%2Bpe%2FMKMJG%2FAbMpd0ETW1QUekftR0LmDaBBBPiRjnW2TWfkDs5%2F0yyCRblND041cHBqXB5uxyWjd8BSTvCtvrN%2BeNhAUl0mohzsAft1Dodq7dNM8%2Bt9PIVqufFQ%2Bt1t7KhcG9PsoGCjiZ84H%2F7Q12gOSd3zkZZgF0XrED%2FPdpZw04yGnDzHdnesytRlVAswykhC892CCQ%2Bjq5reAIjjT5CS4GaHNtpoDugAsHIZZKx4lpkxbzzvD8LfG7LW5Wj%2Bm%2B3QlUP4Ktg2whR9OMUnpm0XBGmBA0AyHCaf3RsTD37cHABjqkAYnBnGmDUp1IFWPgOz3Eo%2B1go9Swmoh5P3u0UsP%2BdFHIBBi0C5pI%2Bx5ynMcMvc3JPxmLWpcY5eqLtWxVuB%2F6vNB1viVEYfdcAQksAa4VKG60wcyKhYnZCRXD8zdBrW32svfKSubrP%2Bc5MK9ygJilQqYqi%2Bo%2BL5FFS9de54QC7BPPGd2cQKnSIicLxm9fUZ5Hhrq33m7GGaYVPfQZ7nrm2vlEIY2G&X-Amz-Signature=7d35907a0f2f4c53e37fa43a9dda5be7ce39da2bb2ed804a542abdde31bb6ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLRXWMY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpfMS7ES5bCYJ1lN3%2FJgszd3ODtb0R6pATfG5uYYGVoAiEAw9V5nMDK0bvQljkbCRJvU3kdD0DJikgLNKZS1jkElhIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYmlHXA4QzysxmRHircA9fpsxBq2gnHF%2BTBU0IBpFe32Sxw87jWCcKbtHu0c7ASmM1iQgEdhrk02AY8VXnVWLMSKH1bl4%2B9MIBJRjSDOWVhd%2FfUaVlPV6Hb12ZYZavwlul2C%2FWJQR3SSaUwgIOukdIEOknb09sSOYK4Okg5YvGwMEfyAFX2r%2BbuI7NDDkM7%2BmsBxKWCL1lxjx3LWv%2Bgz7y4UtrUQARKGLCQ9eI0C7s%2B%2F4f3P0rs8lqWCOZpFoQc27dkoMm8SuolWhaPnIVWBCRZg2S0t%2BRI1r3oOzgm9HJm%2BfobY%2BNJQpJ0DcjZiygN1hx9tCAQ1HPncXbyqW0MLgIYVaxvWNDokawlXy%2BOSd37LjVon%2FlHmBCCkZJUwC6cWLWHWuqdGiZxGcUoUTfuZXGP27wBfUiyZ%2BIyXEXyUxjw0dpHT5XP1kjC5CCIxU3M133yK61%2FwlZ%2BZTSOcigu35%2Fr2Mej%2F6%2B4PsdjSehTlNmGdDM%2BcMXgtyYAgeLaN4lBcjJxtVrCWqJ%2FO4UElhCjcQF8wH6lrY%2Fw0gxVguTNSeF45aJutLA8F3mdxl5QQyMJjvDXFxYxV2iUBi6Z64Uov8dsyYqYIrwq5hPiPRXCTD%2BsVWhwhdogmw%2BWmuhvvHc3bkiQybAJC21Mwp0qMMzuwcAGOqUBmJFOiG6bfHUPOJdrXx4SFVTbkEXm2mjeA4tJeTPmkR4%2BLtTl%2BGEa30oku7c%2FCcN85Hx12uOu7TUR6XkRVuNClB1QhwXAusnU8M7XHrXvDkuHnxoDumDjMTCKkmW%2FaHaGrgNM3Ot0tqnowgpKYNNwMnrW7FYVin6VPeu8M09jyUm7evJCfMEZbgDbClmvsC2wt0DYdLOilvucAswHov5ivHQXSEON&X-Amz-Signature=acf3e4e8befa5a9d0f9d8e399c835826183e33fb957af78394090dc8fe1475a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
