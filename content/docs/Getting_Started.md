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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=4453b52634392c0fa2f7559f513fdff3a356580f500d68cc9e33980cc8734778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=c6cf19df296ee75453b1aeb65b0a64f06adcf114698a675bf405e8748fa61baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=4d32714ae80c2ab2a3bf4f443489558da36851a1cbe6111a6b847aef8d181c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZF5HJH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCDO%2FniMJnnjNx1svs%2BDfBUEySfLwC9fKbvy2kZsNL2SwIgfSGzD2Fb9LFdYj351%2BeTYsyyyugfo41L9K1hiZekg5Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBYMoQzV0uHUab%2ByHyrcAxiZOU8MG2rIZFlkSbQ3bHAYIql8zuzDRNelaG539vgX%2BTsEu7Udtq8tJ53nnG7hSoteFL%2FbMFf7K3V6QIZsBL8kJwsz5fR4KTfvXRhKz55yTHYN1k6o6LqJ5%2FltbiM4EhPerwZP3HpUeECF4y8ft02a%2F%2FhA%2FG44nHEEq558v1O8IWRZV%2BYyCjkkJTESzG3Z9HeaWjL%2F%2FsdyioEV2TswABhYfoEp4yp3MtFbT1pom4P7RTY%2BGoPq0UYdC2EHwJh9IUXmnjCaE5M0TZAwtU%2BvgSgrj0MZM8ePFUVtkzTx%2FwUuTep7vQbBGgplJdSfvDXHk73ZP7iM6vlNeUM%2FSfigla2yO7RCOcQ9Hj86GFx1JTW1ONs4TQDAN8h1bsdpw%2B3YZENhbpJQ1qfMh09hEtr0nvyVc0G0s%2FT6qpp0Wc7CH4qKd45cz5VLWqI26xsItGiwGxa2TkZtcNqOcDpUU4E7%2F20G2kY%2BApj7jeamyNtdoGpK%2BNIVZq5RnUWheImCzpaNYh7NtnOBZtDVyjmuVMdbAG%2Fs6u1nh%2BULqGSu6NEbDH5XFd1vjkTDc2kYozomnQUQ64NA3MFs6iLUAzPUtihOLMuk8WHOMim4aMVhlzyAtkx9CbTNnPBZeLwBxAUjMNyl%2BsIGOqUBf2Ya3Ec6qP%2FZSUU4k%2FGyuCpAr2RH1Y%2F6Tt4SBJKvxnutk13DVlkeRmr%2FLOZJHOOvLYI5XVuZNxP0D%2BpJ1LyK2Cld%2Bkz%2F4Oaxp%2FZBq4CcrpFSTQ4qvhYn3p3frZ62IDZA14y68Dt%2BbvVLOxPEm3C3VCUWGu%2BaiCQxEi6EcNbS4cB6H9ajD3oHgpQkOIQaClKMx%2F1dP8XHYsHamt4N4OMSIn%2Bvnho0&X-Amz-Signature=54dc4dc65c13b1f3192bd7529e9e86232ea0f5783d73fc615aeeffb884d66f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPLTXQ5%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDA4XNBW8UuuO7qSn76EM%2Bn07ZmHMbo5Fk8bY%2FUSKohAgIhAN5yNnQs1oo29poLT0ptZtuqG5K4Lv6fq6ABAtxqeai5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxlDh7mn3F%2BciOQxCgq3AMZccjY%2BaZt2zKk%2BnZokYhaegkbwOIBoRGxNrDR61oOAmHuscHZPDwIGN1HGtcKDefxL4F5Ry9QfhvP57LX2I90jwensOI%2BxV5SA0wHRTIENEyZuoR10DFMG5Gwb0kDzGqJ5Ikmx4RJ1bWY58pj%2Bbue9M%2B5jnFz0ofB5ySV7Qzlb2Logy8MaIfFhjHsLj0T0JRC6tlOrr97PLkCFSnXAg%2FDY3TStz2gIzLmD8FUahIhzowP35iXJMuWhg93pxmS1PWK33mGi0akw0etZa5Vwp2w01S09R0pgBT1htdKdVdEtZCCy282i6OYlqwUz7ZcVWS8fiSSAPBVmXQCSFI3MlS6vhvzWu%2B%2B7hzBzZxNiS3IomVtPS8kCsUAn07Kfojjwvk9cJ47twGE38W3v4XGSA%2BkY26cVw%2BdGEnMLi3QMLlltgxO6EAMwDn3AvqgkTw6bzpmFjoCGtixFqLhp81OQqFbgi9jTl6frWjxzbuOnz6xY7Z0kyNjiQOCipynw766%2Fbd%2B77DkuVkP%2FaGIF5QkxRGh8cEsqOrgppR7mwDHeGg1VXdNFBpFAs6s60oXsdr3WhPpq2x4OuwJGyeWjfeFSQ1PtmXsVWoSacnIhrnTL1XloCoymg%2FxVT%2B8iT48OjCYp%2FrCBjqkAUuFvgexRlYYqbhz3tOf7xGz8nfr8iwbzgGAAyvMs%2F6NPU%2BizkPS%2FWGMIm4ZnKylzlvmiKr3xqJ1U7Y12VEPhRluCJLX8OM7Z1OoPqden%2FCw%2F%2Bu8q99mskQoEQdGs4qzv9dfjzabFnfV2YVFG%2FgluwUKS0Js1AXugodcV01P0u1zOZYcmVPLtAUAWhhICZRoC3Ue9gv8Vbx9QI6gyMJHg5CgoUdW&X-Amz-Signature=4752b97ba40bd8dafdcf91bb18598525de2915f74f237ff61d0eabb8e3332f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBV2AD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVtHSAYG%2BSsa%2Fs16vL%2BOYQuqw%2BgcW1kVb8IU32BwI%2BLAiBUTZxVU9hBc0ixS5On2FmuIy0BOISR6IHBjIu9KgcAKyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfNUUSC2Hpnmb8Q6tKtwDyeUPHWWR9iwYNPf2ATfZcA74wImp%2Bzce4YrUntBmOfrwfzWU2KbSlNLOcAWItsKIQe7UGj10mHfp%2FG5Yz2pqr9MS9JLEqsQD19lLlLnEYVW%2BW3zijuV2ApnxU4FeGZQfE1TNpH6qrwJejtgvaTfNij%2BXoPh5%2BGBHGxSm%2FxbaNCXlk4qu0U95VDwKUGhW5nb3kIG5KpKp5S%2F7ia1BvXWgWYy2dpiXFZFdnnx37SSpPSTs1ePgIcumnu4JzK3WL4J8q9J06xxFRwf9O4iZff5xo6oIqzzftpkj8XVkf5n1%2FINOlg8QWlSpnMNHQtLqWytlTP960yNcQRrqYd39%2BhRKusTrvSLCG%2FZothxrkVQAiYjDytxlUDNR%2BHGCS95lCOogjOagTBYhQm1jz2GD2p9LSfZFjMUp%2BovN2%2FhgqdIhSgBHlvB9LL0b3gJCI8dB5aqNuHVnC4pTmVTc2oBsSjNjkADET%2B4XxLokJwZo8ETXuKgPIPG%2FFYJM0zLh0JhT1diPDlxwyDRlsAjf1E78bH6e%2BZ0vUzeRSBGGPvXqiQefGRRqaASgBqV%2F3I8X5hMVnIT1ap6dUNygC2LgvRw%2BCqHXiV1eQrL5NFXD85YxH52jJUgjYyF0mGA3Dz21Fpcw3aX6wgY6pgGyrIVm76Rxaenoqs6PfJHt1LzLDQ4WRC6AhH%2FvEnwPIwvh7al%2FdyeNqGKUZpZqxWpfV6vOWEiYEsIWN3R0N%2B6jw1yzn0q%2BNSf%2FwshLTmEDOWZ8OIQbLWwJmx%2BCok77fP7lUU4vjQWa9ZsklBtNi0eVVG6I3ItsrhT77cnC9o8JqCVnOPOeJ7sawVfrYLRQRGofARYTDo7WuJo8BnpM3sCg1E3FhbGr&X-Amz-Signature=26d2e83521a437b4f861eee831fb4b6b48c96d374a19c68265e69c1e93af364a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
