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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIEWEOW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICnR8J%2F7T2EOOVg6TEpZPHJaYoZjAJr40ryijtcuFqNpAiEA5xZiezcNjBwV4HMeq6GfbPZVR9azJqptbZ13CaTsxvEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCairlF8m7DKlK3FSrcA32IfHGfuGWFH%2B7l2wVlPcg8MrroYdctDZGRodP98FBb03BlgHLPzjCy3MZJ9tYM9XmgtJSVahXNkR2e3b0JKiDmZI1EXl81pmvGgNuSXt9WaZfqwyDloRS%2Fu72%2BSBODAPGlS7zqMijWrXWsWkhUPzlDkYx%2BfpQX%2FtBLmbWGF9VCi%2BxiuotGYarI2AahWS4Qx17UtRaOVEmKcqmx9%2F972i1W0WcP8sPkDuLYY2ysIixDAhtDed1xTFx1LuoNfe%2FycBsownXUMzqMh2A2X2EZgVSWciKXu3pp36B4JXGcqp2M%2FdmRNc1pJz1wz1DqMhNinhe%2FTYEl1uKtk9z%2F1u%2BHa1%2BjvRxFctrR3RDZOHZt0xCeDy2doubi7DWyne55gj9fn8i6Xi28dvZ29wTLXWMz7Eh1CTCpz9dsaUh1b9YEGHKla6lus9v6ba7iy3ZrIDVmshtbwvaBN8Kl2WFYVFCsJ%2Fj3ADFbXORcOs9eOeAbaefqThTLpicIi0A2ltZ4DrlcIygBwiESyfuX%2BB0pZbodh4j2n9BLjtzjXawaapAWiabFp6LG%2BqjY%2BPgxzZ%2FrusKJF2pzGSgC1%2BklqygJxMfqoQ92AKl%2Bl%2BvlF%2Bqe45ilNg%2Fq%2BST4leDWFfIPKwqtMPym88EGOqUBSKW4IlF8Uc0Idz6LaiSxtjhrg3WyV5rTHkkA4bAG0rCi0wk8ZHCe78nda2rb5%2BKzMX6kA9820mYpOp53GO%2Bfel0hkVSs28nW3xTaKAB6apwoPTsuWlQuxSmNkUR2X382UA20YA%2Fw9Oozk9%2F3Vzkr0V9dJrImXqfll2J2cHtWkaQOplu6FrwArO%2FY7cAp5%2FSfLIR7xhlVWbpKp0kQ7gvJwnCgefXS&X-Amz-Signature=507003e8c4046160727e06068dea3993731dd580beb54c48e2a03d6b92a712d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIEWEOW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICnR8J%2F7T2EOOVg6TEpZPHJaYoZjAJr40ryijtcuFqNpAiEA5xZiezcNjBwV4HMeq6GfbPZVR9azJqptbZ13CaTsxvEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCairlF8m7DKlK3FSrcA32IfHGfuGWFH%2B7l2wVlPcg8MrroYdctDZGRodP98FBb03BlgHLPzjCy3MZJ9tYM9XmgtJSVahXNkR2e3b0JKiDmZI1EXl81pmvGgNuSXt9WaZfqwyDloRS%2Fu72%2BSBODAPGlS7zqMijWrXWsWkhUPzlDkYx%2BfpQX%2FtBLmbWGF9VCi%2BxiuotGYarI2AahWS4Qx17UtRaOVEmKcqmx9%2F972i1W0WcP8sPkDuLYY2ysIixDAhtDed1xTFx1LuoNfe%2FycBsownXUMzqMh2A2X2EZgVSWciKXu3pp36B4JXGcqp2M%2FdmRNc1pJz1wz1DqMhNinhe%2FTYEl1uKtk9z%2F1u%2BHa1%2BjvRxFctrR3RDZOHZt0xCeDy2doubi7DWyne55gj9fn8i6Xi28dvZ29wTLXWMz7Eh1CTCpz9dsaUh1b9YEGHKla6lus9v6ba7iy3ZrIDVmshtbwvaBN8Kl2WFYVFCsJ%2Fj3ADFbXORcOs9eOeAbaefqThTLpicIi0A2ltZ4DrlcIygBwiESyfuX%2BB0pZbodh4j2n9BLjtzjXawaapAWiabFp6LG%2BqjY%2BPgxzZ%2FrusKJF2pzGSgC1%2BklqygJxMfqoQ92AKl%2Bl%2BvlF%2Bqe45ilNg%2Fq%2BST4leDWFfIPKwqtMPym88EGOqUBSKW4IlF8Uc0Idz6LaiSxtjhrg3WyV5rTHkkA4bAG0rCi0wk8ZHCe78nda2rb5%2BKzMX6kA9820mYpOp53GO%2Bfel0hkVSs28nW3xTaKAB6apwoPTsuWlQuxSmNkUR2X382UA20YA%2Fw9Oozk9%2F3Vzkr0V9dJrImXqfll2J2cHtWkaQOplu6FrwArO%2FY7cAp5%2FSfLIR7xhlVWbpKp0kQ7gvJwnCgefXS&X-Amz-Signature=de456f91d55654eb7ecb5b4b9f68a33b42b277d4c0ada4769624ab7f26a21288&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIEWEOW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICnR8J%2F7T2EOOVg6TEpZPHJaYoZjAJr40ryijtcuFqNpAiEA5xZiezcNjBwV4HMeq6GfbPZVR9azJqptbZ13CaTsxvEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCairlF8m7DKlK3FSrcA32IfHGfuGWFH%2B7l2wVlPcg8MrroYdctDZGRodP98FBb03BlgHLPzjCy3MZJ9tYM9XmgtJSVahXNkR2e3b0JKiDmZI1EXl81pmvGgNuSXt9WaZfqwyDloRS%2Fu72%2BSBODAPGlS7zqMijWrXWsWkhUPzlDkYx%2BfpQX%2FtBLmbWGF9VCi%2BxiuotGYarI2AahWS4Qx17UtRaOVEmKcqmx9%2F972i1W0WcP8sPkDuLYY2ysIixDAhtDed1xTFx1LuoNfe%2FycBsownXUMzqMh2A2X2EZgVSWciKXu3pp36B4JXGcqp2M%2FdmRNc1pJz1wz1DqMhNinhe%2FTYEl1uKtk9z%2F1u%2BHa1%2BjvRxFctrR3RDZOHZt0xCeDy2doubi7DWyne55gj9fn8i6Xi28dvZ29wTLXWMz7Eh1CTCpz9dsaUh1b9YEGHKla6lus9v6ba7iy3ZrIDVmshtbwvaBN8Kl2WFYVFCsJ%2Fj3ADFbXORcOs9eOeAbaefqThTLpicIi0A2ltZ4DrlcIygBwiESyfuX%2BB0pZbodh4j2n9BLjtzjXawaapAWiabFp6LG%2BqjY%2BPgxzZ%2FrusKJF2pzGSgC1%2BklqygJxMfqoQ92AKl%2Bl%2BvlF%2Bqe45ilNg%2Fq%2BST4leDWFfIPKwqtMPym88EGOqUBSKW4IlF8Uc0Idz6LaiSxtjhrg3WyV5rTHkkA4bAG0rCi0wk8ZHCe78nda2rb5%2BKzMX6kA9820mYpOp53GO%2Bfel0hkVSs28nW3xTaKAB6apwoPTsuWlQuxSmNkUR2X382UA20YA%2Fw9Oozk9%2F3Vzkr0V9dJrImXqfll2J2cHtWkaQOplu6FrwArO%2FY7cAp5%2FSfLIR7xhlVWbpKp0kQ7gvJwnCgefXS&X-Amz-Signature=102fc6e0ca9317ce569ce5cc47fc4b805c44546c7578a5560b8230243815f3d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P25AJHY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHPOmnNLomIpyV97e8wox3inO37wJTH67%2BsoD%2FwRLzhmAiBrGGUqvhT4HIES4BoZOf1%2BwZ45QULO3cjEAeCDI3IVliqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMlSa%2FhoD6TpaIfoTKtwDDlSR%2BUWuygXSxFVnyCrflbwww1o0Bt1nU6pSFsZlNVOKfIsqVvQHfDj26vcBc7LcihHfA96pWMjMkA7OXZdYYS%2BB4zAelsjhh1KsjSF9yNeo1BJ02OT%2BqRU8u6fGT4W%2FLSUWQCEPRHlQhOgkGTdVsm2zuWDbxwID9XaQNq7fq6wl15LNoMEZRbD8Nk0vhfOmAXtIfGDF9ay4%2BllAFvk8vXtmWkgxg025XGio49SQwO5GeD%2BM8hx81sENn7ViQcfcVQnbr05HGYepO7k2yDlQ37CuAmqkQ%2BxOWWoFULkoMn4PIPSdAN9vjFin4rLDBQDF7WXIbodyqGwsbE2Az3gq%2FvJSw%2FPaYGtRYCvH2jvVVrJSp9CriJ9Ish6Z0jyQr2UypHacXSq1QdNJpR%2BO1sJesHG0sRB6f9AbATOCKqYRcTTTHvgmooByIF%2BcOzms0TQ6CxWfPBhfgVIGa8rI1b3x%2FaL0uAIk6LlMzwJLQNXhNs6b%2B4HuuIrMxSz3u8pUm4%2FbC5tCGDG5ZUlzkAC8KRDRr113SVB8kWqRXVpNDIRnzz7JlaVpsx%2BeehLOt7D6GFk%2BkKOtlkVojGKEsWOGJNZFcN804sN7NobcmcR379AN4y0iJRJhDs7jsV2TPgwww6fzwQY6pgGwDT4PB%2BlLMysAnhFz2%2BSMLByCsfl4WnEIrJ6%2FbO9USXFmqNjpGusQz79O0nBPRpyZ6EgG42NKAFwoErJngVMeYBlLT0%2FcgwHM0gVFnjlRiB7AiV5vRMKOK2sqosuAYW4fwqGscrnPR4k1FgsgNc51DWL%2BZVIKNiOe0lN4tbG%2FLJZVy%2BKb3QdZVeWBq%2FTTccGedEFsBnIBBBDPSvyox1icGm0t%2BeRc&X-Amz-Signature=9cf64bf13e1dd0df11e28b405cc8364f14bfe81c06a1f79058d706fecc804d98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXTGM5LC%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICUPEe4juUT7YuIU%2B5ITcaMkxsvPQUK0YLH4nX715o%2FbAiBSNAHR9ZpjtQAAOUBXpIbOzIXrSxhR%2FBbr0I1nki8s8yqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkO9INq4DpujmxAQyKtwDrpVd0V%2B%2BmGXh6DRPwwgYiseesc0EColwRZxHJiWCWOVayTO1TI7FoFFCOCE12V13lIqwa87ADC%2FWW2QxQ65TaEvh8d5qvpfjIRkKsJ7mCD4k1JlB%2FKniqrvJtJjLHGxy0WAunTJB9J%2BlJvMTwymgYeg7vlOwXTArEo7Kqf9AZq9qYVNUKTdgR5YXBT%2BEFBQ%2Bp%2FDDq4JUMN9HkzUKSYK4BvGRqDVObj3A9p59p%2FMn%2B%2BF1ubflhu4KElsW34L4ve6zSJjpqwsEecEkq8g2AoptYlauzjeRcKXJ96SECjrE6kGk6zcCGhPzpETwHD76rJHsFKf%2BPJez9pAOUZQkZA9NFblLbBo9siihHMfUcp33xS4gaAcUqEtFHyO0TsW3nwtIK0WMyaR2OrNVkiVFNkfp4PSagD5L2ENPG88X9%2Bh%2B6IgpTFG1EBaxky%2FKbGavYXCDeXVtI07NZG9QDTHqeA%2B6lRIK9nrf%2FQe7k9qKpJdXFkN6zR05CnbUvcPq8FpGETanYL4kt7MMXv%2B9v%2FHAGnbAVjs6yoM147yJKACpUlizzUbUSnUFjph62Sqc0pmIwWQPq9sO0i0nXAhly3qlwKy8alJJJU0i%2B2jeqOEE72QSkAE3IPADtMyf7%2F608B0wh6fzwQY6pgEtRgJAGLlCqbRMNOx%2FG3wwDYznpjC%2B0zja8XTpTk7CHYE0iEJ25PFp%2BXBdpSF29EZ7YZRgZK16f%2FnSEcNSgwcVf2KRASqF4N1yXGd%2BiU6uqXd%2BtmF8wZ3Pe92ilGqqPsftGoJxgXB0Cq77Gh3sBZIvAw42FwYkCbwGgRoR9LJo6F6dZ8wDcukbHIdnsqRnD%2FQd8VrOvxZFpSp%2FXv4n8VhJhqjN8jge&X-Amz-Signature=fbe0478daf3f33bbaf365d20f70c619dc4d9a1ae923e66a58f442f86c033c61c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIEWEOW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICnR8J%2F7T2EOOVg6TEpZPHJaYoZjAJr40ryijtcuFqNpAiEA5xZiezcNjBwV4HMeq6GfbPZVR9azJqptbZ13CaTsxvEqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCairlF8m7DKlK3FSrcA32IfHGfuGWFH%2B7l2wVlPcg8MrroYdctDZGRodP98FBb03BlgHLPzjCy3MZJ9tYM9XmgtJSVahXNkR2e3b0JKiDmZI1EXl81pmvGgNuSXt9WaZfqwyDloRS%2Fu72%2BSBODAPGlS7zqMijWrXWsWkhUPzlDkYx%2BfpQX%2FtBLmbWGF9VCi%2BxiuotGYarI2AahWS4Qx17UtRaOVEmKcqmx9%2F972i1W0WcP8sPkDuLYY2ysIixDAhtDed1xTFx1LuoNfe%2FycBsownXUMzqMh2A2X2EZgVSWciKXu3pp36B4JXGcqp2M%2FdmRNc1pJz1wz1DqMhNinhe%2FTYEl1uKtk9z%2F1u%2BHa1%2BjvRxFctrR3RDZOHZt0xCeDy2doubi7DWyne55gj9fn8i6Xi28dvZ29wTLXWMz7Eh1CTCpz9dsaUh1b9YEGHKla6lus9v6ba7iy3ZrIDVmshtbwvaBN8Kl2WFYVFCsJ%2Fj3ADFbXORcOs9eOeAbaefqThTLpicIi0A2ltZ4DrlcIygBwiESyfuX%2BB0pZbodh4j2n9BLjtzjXawaapAWiabFp6LG%2BqjY%2BPgxzZ%2FrusKJF2pzGSgC1%2BklqygJxMfqoQ92AKl%2Bl%2BvlF%2Bqe45ilNg%2Fq%2BST4leDWFfIPKwqtMPym88EGOqUBSKW4IlF8Uc0Idz6LaiSxtjhrg3WyV5rTHkkA4bAG0rCi0wk8ZHCe78nda2rb5%2BKzMX6kA9820mYpOp53GO%2Bfel0hkVSs28nW3xTaKAB6apwoPTsuWlQuxSmNkUR2X382UA20YA%2Fw9Oozk9%2F3Vzkr0V9dJrImXqfll2J2cHtWkaQOplu6FrwArO%2FY7cAp5%2FSfLIR7xhlVWbpKp0kQ7gvJwnCgefXS&X-Amz-Signature=14d4896734217dbfb34ee3a8fb467e5a515fc9a2b55a631be94a1f04b2790f59&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
