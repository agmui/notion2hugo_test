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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6FS6J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIE4HzqADFhhc8SwzsqQpuB8siWxT%2Flh0iXRh5A2V5Mv8AiEA0dHDeqGeBYczhgdIx4wwqcZuLFNQcd2PTwqmGaZUVV4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFEl3vV4NYa67dyWCrcA6Gu%2B1K8A342t6E1DI7a%2BMx9%2BVc2rrHaGbNod2S6KQkXXrnKMSiixO0QxArX%2BF6l%2BYz4Ki01%2Fte%2B1xeFuDVvVbPDdzZpPqY4a5zaKeUwZ%2FmP3JLbBfx54mOtSeUf1KpYtHjtE1ipFGyG%2B1T5rNvlc%2ButtQcGhr3iAbeiuq8lVLaObbUIsjIYHA9ONv31ZGzp8CxrFsfrgzDBMxFruXlAvk02h7fvusoD185qPZymLwM0DMF5snlQcBa5I72RPM5vLRRHviAT%2FOQ73ESDi%2Bh06UATYINWwWlfruKPZBrp6tUgXn0%2BsF9QJ4M1jJqZDkcwTaboWIePgtmU3P5z2AN46NcJekZw1ihR2CFTMe79oAuiPT6nYUPuDdeRUoQD5KBwcQcjJYb5MQUmt82Cyc%2B2XtBIBzvoM%2BtJ2uv3zO5Ud3SEPiv6yXhEfnKODEtDSWDXKS28l2bHYw7HBsecLP8K5K3E2p2zYdzns1cVbqWsD9wacqbd7skqDm5%2FtHeVqvjcTJ26U%2FLr5PYK1jYUJSYVMFcp3VMgZIJ3pHIlGBs0tssyWizI%2FDFpGEf3NC8GQFU9YrXShFIXsCjeby1LQG7K6%2FpktKDadnNvMW9SsgwnGggXvVG0N17MRg6XXVeVMN6x4L8GOqUBqDQwZO0qiRLSdVEYR5lFR804jtCnSAbzeUpVNsPBy%2BiW0gG3ZU1eMF3s4sAcX2UQxLg6nQCnweGE3ITuXw0UxysLlDhXorhK%2FuNzNrmq3qkK206k%2FqaFckeeAMsAD7e%2Foa71qrkthsDgFVhCrdp4LHfnNb2AhqtaRi13WbL8XeFAm1SfjouDikcL1gXQP8a1784PrvdvxkVp9mz%2FhFNxXJZ5js7x&X-Amz-Signature=73b168034d8868620a77f5d0bb21ba04cfc68f5919cb2e1c552af9618b48b210&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6FS6J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIE4HzqADFhhc8SwzsqQpuB8siWxT%2Flh0iXRh5A2V5Mv8AiEA0dHDeqGeBYczhgdIx4wwqcZuLFNQcd2PTwqmGaZUVV4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFEl3vV4NYa67dyWCrcA6Gu%2B1K8A342t6E1DI7a%2BMx9%2BVc2rrHaGbNod2S6KQkXXrnKMSiixO0QxArX%2BF6l%2BYz4Ki01%2Fte%2B1xeFuDVvVbPDdzZpPqY4a5zaKeUwZ%2FmP3JLbBfx54mOtSeUf1KpYtHjtE1ipFGyG%2B1T5rNvlc%2ButtQcGhr3iAbeiuq8lVLaObbUIsjIYHA9ONv31ZGzp8CxrFsfrgzDBMxFruXlAvk02h7fvusoD185qPZymLwM0DMF5snlQcBa5I72RPM5vLRRHviAT%2FOQ73ESDi%2Bh06UATYINWwWlfruKPZBrp6tUgXn0%2BsF9QJ4M1jJqZDkcwTaboWIePgtmU3P5z2AN46NcJekZw1ihR2CFTMe79oAuiPT6nYUPuDdeRUoQD5KBwcQcjJYb5MQUmt82Cyc%2B2XtBIBzvoM%2BtJ2uv3zO5Ud3SEPiv6yXhEfnKODEtDSWDXKS28l2bHYw7HBsecLP8K5K3E2p2zYdzns1cVbqWsD9wacqbd7skqDm5%2FtHeVqvjcTJ26U%2FLr5PYK1jYUJSYVMFcp3VMgZIJ3pHIlGBs0tssyWizI%2FDFpGEf3NC8GQFU9YrXShFIXsCjeby1LQG7K6%2FpktKDadnNvMW9SsgwnGggXvVG0N17MRg6XXVeVMN6x4L8GOqUBqDQwZO0qiRLSdVEYR5lFR804jtCnSAbzeUpVNsPBy%2BiW0gG3ZU1eMF3s4sAcX2UQxLg6nQCnweGE3ITuXw0UxysLlDhXorhK%2FuNzNrmq3qkK206k%2FqaFckeeAMsAD7e%2Foa71qrkthsDgFVhCrdp4LHfnNb2AhqtaRi13WbL8XeFAm1SfjouDikcL1gXQP8a1784PrvdvxkVp9mz%2FhFNxXJZ5js7x&X-Amz-Signature=dee5036c2104aeacf0435b1b43c16c719ea639e9575ba3a4c9733af81ed3c9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLT755OS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCsgiqqmmbwgnvPoIKmUrP2pB3%2BdDwrVvkZMLg7P4ueAwIgQp0ic7hpckoOLzOJaGNyuArOB8q2jJid7lpUQBjAh9kqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc13nOQnUaagS9O2SrcA8Qgnw7%2FlnRwbieCFtMBiRDYTxtZ%2F1%2FD%2FPZ0KeECOThq4HbGqrsq90S%2Bqn%2Bd0d0KE7qpxn%2FeC5ZbuLAbFtHyRDgRNfhWGDvm15MEPegNuKjeZ8j3y0mmlBudYcftzS8Bb7M68Ck%2FOgynlge%2FBUNn5Inb0DdjBOf%2B8bgEBF1kRO%2FpYLSCDbNJ6b7yIxmYffV%2Fi4ABg5Ehn7zGpB2qMUeALRzww6v5dCWD1TdUIhTHJucTE9N11E%2FrHA7WvFtNDBbVOdSGt4pw5lluxpaqzD47hEhXpIDsyAWy9JHcmzl3PA5Ktl7WeAcDUgGozwvc6lCvj5Q2ccvNoJp7Hq9cRJTVa67ru8f3DppB3daWoVWQ8sf3Q9yMX6H6lfROJ8csYz9qMbA8vC9SfM2ch%2BmfT%2FKM4%2FUN%2FLn9Hx8uJQQeGijYcfeXnRJQQsJl6o27bjazGHm7eN3Lb%2BmT7b4d7zchrz2OGGuDyBenWiV9wv4qukpCj7GdSyRjdUyaDSJLHMBtNoIDmzvxmG9whUnxvPUGqn2mf7NL9UDf4LAyTn%2BzbMIQh3Bcetpc9kiDlFzuYc9plLclnHJpZ5jmH%2BeKVf1mIEypzTKAl6AFwDjjHg6rMMwj38KHk4%2FiI5Zdy7%2Bt3jKIMLGy4L8GOqUBhXSJwVanklWy8PA6RD%2BwsFMjjP14z%2FQNYVP0SBvS1osHkreE83Bxn7LpMp6%2FtWB%2FwzabFu3EwLdzJfFCh4betFdqstI1bGA7RDwXIa1P0Dtt7eCJjvT2elwcDccyf6RYlMqdTNCQ2uEz7zFGNzrwA%2FQEXC3O9951JNqWup3ukUfyOQMu9wRi%2BHynDRRGWIpRmbZoQcwSMOP5RymZ2XUxCAIdJMm1&X-Amz-Signature=67d10703c2622d6312a46c655cf2278abe1139e0bb132ce38c5ae3c6d670b24d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFPANC7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIC8fDHvpZDSP3IsYJGr1p%2FreW3utS923Xa%2Bj6C5xikTGAiA1lq7Bh0lq1mPoPj8DL2jJ5lNlVYONeu11y%2BILUdqU0iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FM%2B5ZlwZVnS7DSvbKtwDyaJjUpt1Q%2F0i1aSOVrLTO98de%2BKmSNkqukTF05jNodDRhqM5Okc1ypjoBD%2FWcvMp%2FhgznCK30lCnfIYEUp791XwYsscHBM%2F97xNxjdTwRJQZRXfoVuwRDj50hw7BRTCuUyi1y0B13yzW9jPK0%2FCPUXWrn3LEELWIGAtOAjProj2EoGzJfsneyq9uG2H0eVPYQDE1SwBI1zIp%2FZv9m5bXJ4lZeGePfUkHK9f4K%2FN6QaJKnKLaCGlPvr8GUMVJVO90dFnWTwuajFE5opLrPIJ4G6CHDHx0VintsiwivXDnE6fCjWzISnjS8BhewHVjkyWOZcKFV2ClWRZMOQ8%2BDPAh0tWRbTiuXueoraDyp6eN2ldyawFuGDT16ReVJY8tqDC3HrDLhQxXkNxCuHYQemto4ZdbnAWzcPn7eIScujVgE5f52dudmDKMxRFqgi2S03ZJwP%2FuU9TFPOLSxzYkMg0hal2hvcaxatmYlounVdl9R5fqnmpotJ2CAlu0SFugtCyZGb%2BDgJWDJ5LJ72RPET8uAG7Z7KrJrUOvbg0wDD5PZ%2B0eLU4YCyhh%2BAglsUfPTJ2G8mk8r63XY5KhczBiA2PJXUznxlc4Ro36gkwTBdYkmXcGQOtukWGv006JwRAwn7LgvwY6pgE%2BN%2F9PlFXq9TmTLgJk8LtiygizkKGnBlxL8%2BcPg4eFZ%2FAd9CFu9CjyvplC0BLZ8ewuhFW8oeBB6tx7GId8eTH7y70ujGGN2IM9SLdode1o34cm%2BrRc69uzZ1cxg3de4yJOnO6cS%2BFbXl892K%2BPwzbCaBAH%2B77tcbUs1tJRMK8zggjRNq6WYmXIH5N7iOcp0cwktJPZK2NYgC5CE4lVBYE4WX%2FEaRm6&X-Amz-Signature=b5136a47e0892e06262f3f40746e311f255b440aee34f3edb509d1a4fcde3506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUS6FS6J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIE4HzqADFhhc8SwzsqQpuB8siWxT%2Flh0iXRh5A2V5Mv8AiEA0dHDeqGeBYczhgdIx4wwqcZuLFNQcd2PTwqmGaZUVV4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFEl3vV4NYa67dyWCrcA6Gu%2B1K8A342t6E1DI7a%2BMx9%2BVc2rrHaGbNod2S6KQkXXrnKMSiixO0QxArX%2BF6l%2BYz4Ki01%2Fte%2B1xeFuDVvVbPDdzZpPqY4a5zaKeUwZ%2FmP3JLbBfx54mOtSeUf1KpYtHjtE1ipFGyG%2B1T5rNvlc%2ButtQcGhr3iAbeiuq8lVLaObbUIsjIYHA9ONv31ZGzp8CxrFsfrgzDBMxFruXlAvk02h7fvusoD185qPZymLwM0DMF5snlQcBa5I72RPM5vLRRHviAT%2FOQ73ESDi%2Bh06UATYINWwWlfruKPZBrp6tUgXn0%2BsF9QJ4M1jJqZDkcwTaboWIePgtmU3P5z2AN46NcJekZw1ihR2CFTMe79oAuiPT6nYUPuDdeRUoQD5KBwcQcjJYb5MQUmt82Cyc%2B2XtBIBzvoM%2BtJ2uv3zO5Ud3SEPiv6yXhEfnKODEtDSWDXKS28l2bHYw7HBsecLP8K5K3E2p2zYdzns1cVbqWsD9wacqbd7skqDm5%2FtHeVqvjcTJ26U%2FLr5PYK1jYUJSYVMFcp3VMgZIJ3pHIlGBs0tssyWizI%2FDFpGEf3NC8GQFU9YrXShFIXsCjeby1LQG7K6%2FpktKDadnNvMW9SsgwnGggXvVG0N17MRg6XXVeVMN6x4L8GOqUBqDQwZO0qiRLSdVEYR5lFR804jtCnSAbzeUpVNsPBy%2BiW0gG3ZU1eMF3s4sAcX2UQxLg6nQCnweGE3ITuXw0UxysLlDhXorhK%2FuNzNrmq3qkK206k%2FqaFckeeAMsAD7e%2Foa71qrkthsDgFVhCrdp4LHfnNb2AhqtaRi13WbL8XeFAm1SfjouDikcL1gXQP8a1784PrvdvxkVp9mz%2FhFNxXJZ5js7x&X-Amz-Signature=e6a579aa689102207c2f66d31f3deb600c2e0063eeedbaf415438485cc65afcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
