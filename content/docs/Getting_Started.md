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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3U6S5MZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdn8imjoPsIzsKRh0VZI9dRyVmNpE1C%2Fln1LeSdLfy2QIhAIYabDZBCYZAkyTXqlAQ1FbqGzCG6bNCI7xv3TH%2FrQmlKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzpCURKIKTxvaIG4q3AMwzZ6sIGR9s%2BkVi7f6RVqUetkIFGQzPLmj9EHnPeLS68pATSssnFY3Pfn5miKaLn6WOJ4NzrUTllQKxX%2Bs2D%2BwZFdRN%2FEDw2PfIVBkNWqPu3zXDVa37A2DeHZvy2q4yYfgJmhjPOrM4F%2BIyDpD6qRit%2Bq%2FcSceLDuGeHsl6rvkHC7JUSnSGf9N%2FmGvTBhnqBq9vuUYZlqpcQbJu%2BbKwHfXVEORVAiE%2FDLhDUvctLeHka2OGzOANFqaHP%2FrSopJgb3mUzALU1OGZgyOc7l5IHxS7Cln2oxxSDxKv9%2BkRuAD8M4wi%2FnPk3LWz46QlU8nx%2BpnoQtHT6c7kJ5%2FAIExec8SxUC8vF7f0cUTWcRgljtU%2F7qY2S7QdmGh2PclcAdy6N6o05AxiA5RP%2BOSkCZ4tE3T4gE7jLd4Aj4TYzClDh7qGdxulTnWTxQnoc7E6PPPIeeVxl%2Br7Q%2FtSKEhH4XVn2rFX2dPyZXiwa4mC2dbXDVqzDstZK8GoAMghxXjaFNMKCAPElAXkKfmqGcHrSdcabwoE%2FhGX9TAp5KUQMsjCsrgmpPg50XWpN%2F%2FVvpiY03YzbkDlYOMTG0DSxCBgcJ6uhD8%2FkzK1dkdcHgqVFI6tQEtfcAtCEhBwmOZImB6LTDQsP3ABjqkAa1%2B3sp11V6XBNsM1Xpuor4BpZj1jm3Gp%2B5%2FnKtYgFI0rcTgzkKiTV0ReSy5YPJDO%2B3qmlrVEsqikFlaJWN31OYCS3w%2FZBXQsKwjTBz1AdYgZM4UK%2FJG8c0xsse%2BwO5munPWPZ1zH57QVQjpGINvM%2B7u2CcPMmhNp%2Bw0DO7zT36j1NYOQRr0ZMzh07EngS0wCYicOYQV2NoLIJgTeemXVGUT5Ahv&X-Amz-Signature=f232d5429165a088f7cce3a59d2f544d9251807bce7572243981f4ea59a7d730&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3U6S5MZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdn8imjoPsIzsKRh0VZI9dRyVmNpE1C%2Fln1LeSdLfy2QIhAIYabDZBCYZAkyTXqlAQ1FbqGzCG6bNCI7xv3TH%2FrQmlKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzpCURKIKTxvaIG4q3AMwzZ6sIGR9s%2BkVi7f6RVqUetkIFGQzPLmj9EHnPeLS68pATSssnFY3Pfn5miKaLn6WOJ4NzrUTllQKxX%2Bs2D%2BwZFdRN%2FEDw2PfIVBkNWqPu3zXDVa37A2DeHZvy2q4yYfgJmhjPOrM4F%2BIyDpD6qRit%2Bq%2FcSceLDuGeHsl6rvkHC7JUSnSGf9N%2FmGvTBhnqBq9vuUYZlqpcQbJu%2BbKwHfXVEORVAiE%2FDLhDUvctLeHka2OGzOANFqaHP%2FrSopJgb3mUzALU1OGZgyOc7l5IHxS7Cln2oxxSDxKv9%2BkRuAD8M4wi%2FnPk3LWz46QlU8nx%2BpnoQtHT6c7kJ5%2FAIExec8SxUC8vF7f0cUTWcRgljtU%2F7qY2S7QdmGh2PclcAdy6N6o05AxiA5RP%2BOSkCZ4tE3T4gE7jLd4Aj4TYzClDh7qGdxulTnWTxQnoc7E6PPPIeeVxl%2Br7Q%2FtSKEhH4XVn2rFX2dPyZXiwa4mC2dbXDVqzDstZK8GoAMghxXjaFNMKCAPElAXkKfmqGcHrSdcabwoE%2FhGX9TAp5KUQMsjCsrgmpPg50XWpN%2F%2FVvpiY03YzbkDlYOMTG0DSxCBgcJ6uhD8%2FkzK1dkdcHgqVFI6tQEtfcAtCEhBwmOZImB6LTDQsP3ABjqkAa1%2B3sp11V6XBNsM1Xpuor4BpZj1jm3Gp%2B5%2FnKtYgFI0rcTgzkKiTV0ReSy5YPJDO%2B3qmlrVEsqikFlaJWN31OYCS3w%2FZBXQsKwjTBz1AdYgZM4UK%2FJG8c0xsse%2BwO5munPWPZ1zH57QVQjpGINvM%2B7u2CcPMmhNp%2Bw0DO7zT36j1NYOQRr0ZMzh07EngS0wCYicOYQV2NoLIJgTeemXVGUT5Ahv&X-Amz-Signature=f03d613c53e15fcefa2632c5682ee2337307338e449c495e0e420ac45bc763e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3U6S5MZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdn8imjoPsIzsKRh0VZI9dRyVmNpE1C%2Fln1LeSdLfy2QIhAIYabDZBCYZAkyTXqlAQ1FbqGzCG6bNCI7xv3TH%2FrQmlKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzpCURKIKTxvaIG4q3AMwzZ6sIGR9s%2BkVi7f6RVqUetkIFGQzPLmj9EHnPeLS68pATSssnFY3Pfn5miKaLn6WOJ4NzrUTllQKxX%2Bs2D%2BwZFdRN%2FEDw2PfIVBkNWqPu3zXDVa37A2DeHZvy2q4yYfgJmhjPOrM4F%2BIyDpD6qRit%2Bq%2FcSceLDuGeHsl6rvkHC7JUSnSGf9N%2FmGvTBhnqBq9vuUYZlqpcQbJu%2BbKwHfXVEORVAiE%2FDLhDUvctLeHka2OGzOANFqaHP%2FrSopJgb3mUzALU1OGZgyOc7l5IHxS7Cln2oxxSDxKv9%2BkRuAD8M4wi%2FnPk3LWz46QlU8nx%2BpnoQtHT6c7kJ5%2FAIExec8SxUC8vF7f0cUTWcRgljtU%2F7qY2S7QdmGh2PclcAdy6N6o05AxiA5RP%2BOSkCZ4tE3T4gE7jLd4Aj4TYzClDh7qGdxulTnWTxQnoc7E6PPPIeeVxl%2Br7Q%2FtSKEhH4XVn2rFX2dPyZXiwa4mC2dbXDVqzDstZK8GoAMghxXjaFNMKCAPElAXkKfmqGcHrSdcabwoE%2FhGX9TAp5KUQMsjCsrgmpPg50XWpN%2F%2FVvpiY03YzbkDlYOMTG0DSxCBgcJ6uhD8%2FkzK1dkdcHgqVFI6tQEtfcAtCEhBwmOZImB6LTDQsP3ABjqkAa1%2B3sp11V6XBNsM1Xpuor4BpZj1jm3Gp%2B5%2FnKtYgFI0rcTgzkKiTV0ReSy5YPJDO%2B3qmlrVEsqikFlaJWN31OYCS3w%2FZBXQsKwjTBz1AdYgZM4UK%2FJG8c0xsse%2BwO5munPWPZ1zH57QVQjpGINvM%2B7u2CcPMmhNp%2Bw0DO7zT36j1NYOQRr0ZMzh07EngS0wCYicOYQV2NoLIJgTeemXVGUT5Ahv&X-Amz-Signature=44e9e830f4a1413fe070eff5b0bdc02fa55de4af78712319dd6d40a1bc27b6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3CGERX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaA4AFjHAX0Ptb9Rcuh5LZrMvg2l4%2BS1D0DnTp8vsQ0gIhAJv3TpjRL0EIVl%2FYh%2FN45wWKqb%2BHUmrDrpw9AwtTtRIAKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2FifI8apRfR97n14q3AOd5w%2B8em7T7%2FhLh6ZK8k%2BbuzcSW1i7ZPYHlTcT8KDtZHzacs8cDB0jusGLgs32sZFrT2Os9doiaGfEHDXGGLeN9G%2FWw1ZhEQpfeNUqI48Csl%2FFtDwOq4vp3xkTssRq4qC4YhmdEJoomXMvfn0kv59OSvlvE9Em7%2BKdw7jyZW80XwlRU0OlfM3hZk%2FNX4BH80ez2WWjmlJW2sa7IoQcihwJ8AJjN1%2BclOrgZIs3OK%2FDiAnbIlaInhsgvsns73KU6B%2FpWsi%2BXsp%2BUrkt0h4%2BtyVeCV5PvYiJeq5NuoosyuUBljuABAgtzMqRRoOYz0caQhR0TPT2RD6cMWz5L3LuesoWBbgGcbyP6Jq6zJzCHUeDbJzld92Bri88Ub3YwrDnOO%2F5kOpaYRR9AlN5WLrCEWnswTwjxiHaJIYB1uPXLs15aDZ1dUjQxVCwVt%2BunkfMcG5v62B23AdUD6%2FKKd6afGZWF%2FP%2BG40z6gE6%2BBFjQMS33T0Lth47Qzp%2FcNol2s5CG76cKVVd7at7pCNN%2FhzNKGa7iJuTUyYgua84gNAqR0IJuJTr3MKkaIpCD1bUQedt84jV6yWAx5SJ4J5c0ud6IXkpjmkQHJ%2Bnq%2ByGstOsqokDX7QuetluS18OXzE1OjCSof3ABjqkAXwwavBJcNhaHI%2FpgmIjxN04To4UFFLGQ7CUM8GQobbaUqR7S56tjO2sUg%2BxuSaR1gkW5likODurwklG1c5kIVaPRqqM68%2BPFiGFG5E2g6maPnpEoiheninhlkm6idlcOzk7TGSMkiLc1YmnAz4KqfSnW3n%2Fghf1rtPTYLOueuonlSfgA1U9%2BqK5qJNADatsRHXZapjVuZUXiWiUt%2FhnYJxW4pTh&X-Amz-Signature=25bd730d7332426bc45bfa13a60153c5cecd66396f22cb2e77426c333eeae464&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFYVMGYF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu3NkoL80FsJQbAS85Dtp8CmuJXKG1PqEj0yt9WosdhAiEA388i80x%2F%2BzWDV8X64zkagSDAyI%2B5OiVzFoE2hXZPXlYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FKmFwgREG0s3G11CrcA8qQkgpEbJm3oKqmdzhluvegLNT6CH2Pm%2Fqypx0jBM4qGI%2FVB9G6zs5O4X%2B6msHSP13Ny9Icul86RJOWL2jk3ixhpV51LIDwwPk4k5Rhq6JCrqUXO5KB0fozhv7N7lI%2BxqvMtuVMGtUtZeEmmIZbINNNmtbNwXp920BF0y%2B9WFI7nnDd%2BH%2BwtWWZMvv4kth7ZMquur7xgBBf8smqJfSZdsEo9F0lhIEFH8ETDrgp%2BY0OFfMlIB%2FfPfAKnKx8VbXgIjRkBH%2FNaRSTX%2FZukiQsNMbykQMr2XvN2axjZOWLmtzHSk%2Boazt1eGIgScNdgNVVPdJQIVf6zUZ9JtHTK4%2FeI7zchUYWSFMmSe2zTqW4CORSAKehhEQaNeJPIWO0uFQBreU%2F6L%2B9%2Fnufe0Xaw1EUt0BkbSDZtvAfyx3e2GZpgcV7mO0Twnpjk50AJtWRg%2F%2B%2FEL3QlI6oMOCigysTkplbDyxYCN%2BvxmY2rcKpEM51EjjPOWQ3oetgRMsn5nIe2LlExi2I0GaEuutK%2BxZM39QYKPIvcXyU%2B76ej90X792rgKrG9yCMfeA8SrPNYS3ciYrwR1u55g2Q3am3D2VMZNtoUjUIhN7TqvioJd%2BI2P8K26idBj2UbXDYPhRO3jL8MLWv%2FcAGOqUBOHgkssSr4cYQL%2BySqm07JJpwhPMju2QqcBGvdxcxpscUN74HUwtmV371NbYgeijXpfYLww4nMB2H15BzCE8aINLtyKtaACxNMytuteXKJ9n2zmQpZwoC1q7IGyloCvrE2Qq%2FsKSQsGprLtj%2Fceza1sMZCldeQKNlFb3%2B%2Bcp0orRvTq4qN1cp7PBQYFTw6o7qZBuRyz5Z7dd8%2B8Q6%2FDArj%2F4Axvwl&X-Amz-Signature=62ea6b19ca120e2f939a942c769bedcb2559f4ccb4af2a1e4d70cf40e3f64e58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3U6S5MZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdn8imjoPsIzsKRh0VZI9dRyVmNpE1C%2Fln1LeSdLfy2QIhAIYabDZBCYZAkyTXqlAQ1FbqGzCG6bNCI7xv3TH%2FrQmlKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzpCURKIKTxvaIG4q3AMwzZ6sIGR9s%2BkVi7f6RVqUetkIFGQzPLmj9EHnPeLS68pATSssnFY3Pfn5miKaLn6WOJ4NzrUTllQKxX%2Bs2D%2BwZFdRN%2FEDw2PfIVBkNWqPu3zXDVa37A2DeHZvy2q4yYfgJmhjPOrM4F%2BIyDpD6qRit%2Bq%2FcSceLDuGeHsl6rvkHC7JUSnSGf9N%2FmGvTBhnqBq9vuUYZlqpcQbJu%2BbKwHfXVEORVAiE%2FDLhDUvctLeHka2OGzOANFqaHP%2FrSopJgb3mUzALU1OGZgyOc7l5IHxS7Cln2oxxSDxKv9%2BkRuAD8M4wi%2FnPk3LWz46QlU8nx%2BpnoQtHT6c7kJ5%2FAIExec8SxUC8vF7f0cUTWcRgljtU%2F7qY2S7QdmGh2PclcAdy6N6o05AxiA5RP%2BOSkCZ4tE3T4gE7jLd4Aj4TYzClDh7qGdxulTnWTxQnoc7E6PPPIeeVxl%2Br7Q%2FtSKEhH4XVn2rFX2dPyZXiwa4mC2dbXDVqzDstZK8GoAMghxXjaFNMKCAPElAXkKfmqGcHrSdcabwoE%2FhGX9TAp5KUQMsjCsrgmpPg50XWpN%2F%2FVvpiY03YzbkDlYOMTG0DSxCBgcJ6uhD8%2FkzK1dkdcHgqVFI6tQEtfcAtCEhBwmOZImB6LTDQsP3ABjqkAa1%2B3sp11V6XBNsM1Xpuor4BpZj1jm3Gp%2B5%2FnKtYgFI0rcTgzkKiTV0ReSy5YPJDO%2B3qmlrVEsqikFlaJWN31OYCS3w%2FZBXQsKwjTBz1AdYgZM4UK%2FJG8c0xsse%2BwO5munPWPZ1zH57QVQjpGINvM%2B7u2CcPMmhNp%2Bw0DO7zT36j1NYOQRr0ZMzh07EngS0wCYicOYQV2NoLIJgTeemXVGUT5Ahv&X-Amz-Signature=96c3a053b074be586dc7b6d6769daf01233fa452aa3adee805fe97fc937c8379&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
