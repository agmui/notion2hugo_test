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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOTGEXL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsukfhsswagedxRQLhnOJJ0K0e8cTkW9GVRBoQV42DQIhAI%2BMnXzhL9wKyp3xQwttbJii6NvsmaT9Wy5xd9XiEx5jKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbj8LiwruNUmTYC5sq3ANLQougo%2BaWN%2F0ZbUFg%2FfjwJaR38zenPfwJ8Y9w9IwZoRF%2Bj8zSqOCxIxFXImjuq95A27PZnL6DtTh0ml7LD5R%2FmK3NiKK7aBQthIwrR%2F1nDqp1gHnz0Xf0AUEut5w%2FI4kEnO5e1TxfnVSPcvoSlwvAi2IjdoNZgOzPLPVVwUkltP0%2BGviNHAX6W1AFEMmISgxPkDSvcBBugB9k6rdXWtJniUj%2Fm8OJ%2B86gcSrIHgXxxJQ1YcmXVg8b5pE4sGWDD%2Bu9iN3dEIYJzqCGtA7RQLEwZwuHQIFpCAL29RbdTRNxW1N4lcPra0OQkxQsxWu4iD1HqondG%2FAndCSioRyh7IyHN3JyZyNuNzUWefAppnAAq1yic58VhNfs9ut%2F%2FdwHLbGYwCrTmj7yhBSbCXUGebT1KR6BedobGjDQhAMwgz1E8l3CmWju9sscWca3NHzPH7jhgNVw8DgcW8eLx7rSQOUq3eP5kDqJ2mIaolsgoycV9g%2BnuYUjSnE0Wk2ad80dGY4cB6U3mHttYRunVO3D8thVposF6wkXTNqO9TLzTUNlGIRoNB4I%2BLt9fC3xTRsovvoJCo3NAcawcVrhDw1j2KEBBZ4CT9%2FFrjIuJ%2B3NvQQ2Bj2YvvLAov8B03IOpjCwzYnDBjqkATIHuWkTvoQ3wJfgj%2FmjDH1c%2FWWJDbMv5JpMFWcBz5qhc8K6Hsu%2FyRAhboCeltaGtjhjkgeXZS9gtApW2RfzaXPRPIVBUMmtJBIuk7lN1ZY%2BlSr5lSmuSiBAbJVbMFaH3oxtQ4fYkZPiwJDod9XADL7wbja32QTf247qm1bylG3tT7kGLLlgg8ZdcI0Q09473BWNs8e%2Flmw0lUXRnOwf%2BQNyO4dt&X-Amz-Signature=ea4d02f3d36cafc17e03f09e5dfe33c7484aa8bd244754ae41c8060f2194aa62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOTGEXL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsukfhsswagedxRQLhnOJJ0K0e8cTkW9GVRBoQV42DQIhAI%2BMnXzhL9wKyp3xQwttbJii6NvsmaT9Wy5xd9XiEx5jKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbj8LiwruNUmTYC5sq3ANLQougo%2BaWN%2F0ZbUFg%2FfjwJaR38zenPfwJ8Y9w9IwZoRF%2Bj8zSqOCxIxFXImjuq95A27PZnL6DtTh0ml7LD5R%2FmK3NiKK7aBQthIwrR%2F1nDqp1gHnz0Xf0AUEut5w%2FI4kEnO5e1TxfnVSPcvoSlwvAi2IjdoNZgOzPLPVVwUkltP0%2BGviNHAX6W1AFEMmISgxPkDSvcBBugB9k6rdXWtJniUj%2Fm8OJ%2B86gcSrIHgXxxJQ1YcmXVg8b5pE4sGWDD%2Bu9iN3dEIYJzqCGtA7RQLEwZwuHQIFpCAL29RbdTRNxW1N4lcPra0OQkxQsxWu4iD1HqondG%2FAndCSioRyh7IyHN3JyZyNuNzUWefAppnAAq1yic58VhNfs9ut%2F%2FdwHLbGYwCrTmj7yhBSbCXUGebT1KR6BedobGjDQhAMwgz1E8l3CmWju9sscWca3NHzPH7jhgNVw8DgcW8eLx7rSQOUq3eP5kDqJ2mIaolsgoycV9g%2BnuYUjSnE0Wk2ad80dGY4cB6U3mHttYRunVO3D8thVposF6wkXTNqO9TLzTUNlGIRoNB4I%2BLt9fC3xTRsovvoJCo3NAcawcVrhDw1j2KEBBZ4CT9%2FFrjIuJ%2B3NvQQ2Bj2YvvLAov8B03IOpjCwzYnDBjqkATIHuWkTvoQ3wJfgj%2FmjDH1c%2FWWJDbMv5JpMFWcBz5qhc8K6Hsu%2FyRAhboCeltaGtjhjkgeXZS9gtApW2RfzaXPRPIVBUMmtJBIuk7lN1ZY%2BlSr5lSmuSiBAbJVbMFaH3oxtQ4fYkZPiwJDod9XADL7wbja32QTf247qm1bylG3tT7kGLLlgg8ZdcI0Q09473BWNs8e%2Flmw0lUXRnOwf%2BQNyO4dt&X-Amz-Signature=ef8e157aa07de1bd6cb732544245166acd7838565c7f677d85e4a375613f35f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOTGEXL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsukfhsswagedxRQLhnOJJ0K0e8cTkW9GVRBoQV42DQIhAI%2BMnXzhL9wKyp3xQwttbJii6NvsmaT9Wy5xd9XiEx5jKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbj8LiwruNUmTYC5sq3ANLQougo%2BaWN%2F0ZbUFg%2FfjwJaR38zenPfwJ8Y9w9IwZoRF%2Bj8zSqOCxIxFXImjuq95A27PZnL6DtTh0ml7LD5R%2FmK3NiKK7aBQthIwrR%2F1nDqp1gHnz0Xf0AUEut5w%2FI4kEnO5e1TxfnVSPcvoSlwvAi2IjdoNZgOzPLPVVwUkltP0%2BGviNHAX6W1AFEMmISgxPkDSvcBBugB9k6rdXWtJniUj%2Fm8OJ%2B86gcSrIHgXxxJQ1YcmXVg8b5pE4sGWDD%2Bu9iN3dEIYJzqCGtA7RQLEwZwuHQIFpCAL29RbdTRNxW1N4lcPra0OQkxQsxWu4iD1HqondG%2FAndCSioRyh7IyHN3JyZyNuNzUWefAppnAAq1yic58VhNfs9ut%2F%2FdwHLbGYwCrTmj7yhBSbCXUGebT1KR6BedobGjDQhAMwgz1E8l3CmWju9sscWca3NHzPH7jhgNVw8DgcW8eLx7rSQOUq3eP5kDqJ2mIaolsgoycV9g%2BnuYUjSnE0Wk2ad80dGY4cB6U3mHttYRunVO3D8thVposF6wkXTNqO9TLzTUNlGIRoNB4I%2BLt9fC3xTRsovvoJCo3NAcawcVrhDw1j2KEBBZ4CT9%2FFrjIuJ%2B3NvQQ2Bj2YvvLAov8B03IOpjCwzYnDBjqkATIHuWkTvoQ3wJfgj%2FmjDH1c%2FWWJDbMv5JpMFWcBz5qhc8K6Hsu%2FyRAhboCeltaGtjhjkgeXZS9gtApW2RfzaXPRPIVBUMmtJBIuk7lN1ZY%2BlSr5lSmuSiBAbJVbMFaH3oxtQ4fYkZPiwJDod9XADL7wbja32QTf247qm1bylG3tT7kGLLlgg8ZdcI0Q09473BWNs8e%2Flmw0lUXRnOwf%2BQNyO4dt&X-Amz-Signature=766bb4ffe727c4c21cce49143cc149b3f1f556b0407144bd2fa2647f6bda8892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WN5GBTH%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjIziOAaC9zKMzQffwtellSSQ%2F17iAEan%2By2HGT8TTcAIhAPt0F8EqTXET5SfP%2F2iGuLtI2G%2BnPnzuxgKIKXJRtbAXKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKtSM8N9l2AUWRTIMq3APRNUe42qyXWDeB5SpTQup93vKHRMMoG8K8PmUcah68IA3QwWhcEQ4oR7wREu4VZooxjhdjY5M52vFY0qO4Wvyb8gFVqCWAgYC%2Bh8qI0kKUGCWbBBeeMP90T%2BAsxlfAM4DDjP2oLA3qPUAnjBuvMpaoVZLEh7OMUO2gLoa6KBdNw7PnIjlYprfhd8yK8KiIpjl%2BTt6ub5DtlWvUE75tD3IbkKtd09HGtpM3dFSn2sTpKNRvmbCSisFbKRiSyEjoRd%2FlvTPOR1FO2F6OVA6R98%2BJK8XDtLbQaysVBlbsfs6sX0SD7hlDocp5DGn%2FCpjUpmrXTOiqzoPD8%2BoFrtPhgddxiLJQ28X%2BzIdo69W%2BhzRdhNffplB0%2FumeR46kX6bV120%2BEPhHE6UeuomldjoCDh4e54Zn9XuOk2DcCLK82urUFZrh%2BWCCZBO%2FnQXxd4u5TCGkwVtkwJByjtDHG3kuEJyIK2FR127G1GbuOp7DC7uZmk9V7K9OTwrht7iBvXp3gIzSuqSnNmY%2BI2%2BGnOiGJ23ztELJ5yJXKg9AP%2B2P%2B3xdmdlwV5LcvIASm8xu6LL1igeShpno7a7OJlSun1Zs9kJCbK9wWmp0qJ1rFCKXc9lAZ1oETSCh6my3328c5DC8zYnDBjqkAV1aripv3do9QVaFvn%2BE97fhRwvgDZy%2F8b4sMuLDV1Srn%2FJdjWuPNT5uF3UpOKB99CLR3zE35GSnJeb1eR7d%2FQRdoY9SxBLTE2ffE%2FQWEuXTx5whAQtrY%2FUGixghbUxbHQHUxPr47cvsNYOcNrOCbAOFTKDIcYjsqevfP%2BHSWcosc75adU31hzAz6kOd6Ni%2FMWg%2FPcsl53YsXq4Tuv2MKVWBKAVc&X-Amz-Signature=94cb85898711e9975333e657cc8d9e77ec31c778fe8bb37ff81a9da3010eeaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XKQBQB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa0eItK2myLHi85MMPu4k9%2FT7Q7nQ2C3oCMI17vKymqgIhAIYRv6cTBiGHRdA9q8oGsUmwNtVL2ZPD%2FXUdn2SKm5YsKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHMUGlSHW2YzkTQI0q3AN%2FaogwBowBTy5S%2BSV2PBhaziPAd2uQ%2BOfy7ElGTAQmhN7mdVIcwCrNsr28nMXmWQlBj4xdwCorMnEjsuQ%2BPsa8WRza02m10Cxno%2FsiRBK0TUjXWQw5rpK1J%2B9IGr57NOUm9FRDz3y89JSBsh58e8OWlRUU3QbdJKvvCavJR8dHhHDDMk4jmk9jbpKbhgGjR97Ji9orvKDTLV1lJqN8qP9biGOfcjQmJ%2F1vskPSX4z%2B1ZYIemUMwIfmJEq%2F2zdqZ%2B1N8gaGwl4ElOTrgxQJQvZ2Ftqox%2BN3L96VPLS2S%2BbU5QEO%2FWIFj8urrCBG65AN08%2FD%2B38tr6UEAATQCca%2BCxeG9md7kl24Z20KNx%2FHq41wNKq7xIgpN0w3RVBwMF5Fc4yBdnwyMoX5vstftlv5Z1aPPpIFDDI8VIaEDtEKBUlK%2F9vPYs8w6Gs5YgJ2pDMu%2BUlEGtbY91QjBedb8kbT%2F4Kqv8f8QC3aUt8bf6ffkbPDd4rGMBYnXW%2FkbCR%2FkQzVY05akYth4W%2BgZiNf8tDMmgiU6nYlTW9w%2F41HOhqxK7UJ%2BoL4O%2BU5xI7BrWX2EoVd3FjghlXa%2BbWGk9yUykbOCEwVJuHK8AenviS8I07Wdwx%2FNAKh21rTFvlKYKaTUDCazonDBjqkAcIe%2FF8sB1AcNdKE2ysfApUyyppVDxr%2FOeTeSwq%2FiYNBpxbINx6%2BwPDnclSc9LFKvTHuJusBPFi06BpULAERPuYLnIKrYj7ulOoenaT62l9sjX3yJ5ukmIKZ6u9WyYAGBDlBSiWbEN8Shz3odNE1OHpY6Ia1wAXSzNNxbryhkDCh8jH%2FyiulDeUmBJxiFFCBWgaE35Hi11drjVBhjfl%2BLn6xl%2FKy&X-Amz-Signature=c3885f10e90c58b6b338414f51144277758eac334af8b9364650eafcaf116d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOTGEXL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsukfhsswagedxRQLhnOJJ0K0e8cTkW9GVRBoQV42DQIhAI%2BMnXzhL9wKyp3xQwttbJii6NvsmaT9Wy5xd9XiEx5jKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbj8LiwruNUmTYC5sq3ANLQougo%2BaWN%2F0ZbUFg%2FfjwJaR38zenPfwJ8Y9w9IwZoRF%2Bj8zSqOCxIxFXImjuq95A27PZnL6DtTh0ml7LD5R%2FmK3NiKK7aBQthIwrR%2F1nDqp1gHnz0Xf0AUEut5w%2FI4kEnO5e1TxfnVSPcvoSlwvAi2IjdoNZgOzPLPVVwUkltP0%2BGviNHAX6W1AFEMmISgxPkDSvcBBugB9k6rdXWtJniUj%2Fm8OJ%2B86gcSrIHgXxxJQ1YcmXVg8b5pE4sGWDD%2Bu9iN3dEIYJzqCGtA7RQLEwZwuHQIFpCAL29RbdTRNxW1N4lcPra0OQkxQsxWu4iD1HqondG%2FAndCSioRyh7IyHN3JyZyNuNzUWefAppnAAq1yic58VhNfs9ut%2F%2FdwHLbGYwCrTmj7yhBSbCXUGebT1KR6BedobGjDQhAMwgz1E8l3CmWju9sscWca3NHzPH7jhgNVw8DgcW8eLx7rSQOUq3eP5kDqJ2mIaolsgoycV9g%2BnuYUjSnE0Wk2ad80dGY4cB6U3mHttYRunVO3D8thVposF6wkXTNqO9TLzTUNlGIRoNB4I%2BLt9fC3xTRsovvoJCo3NAcawcVrhDw1j2KEBBZ4CT9%2FFrjIuJ%2B3NvQQ2Bj2YvvLAov8B03IOpjCwzYnDBjqkATIHuWkTvoQ3wJfgj%2FmjDH1c%2FWWJDbMv5JpMFWcBz5qhc8K6Hsu%2FyRAhboCeltaGtjhjkgeXZS9gtApW2RfzaXPRPIVBUMmtJBIuk7lN1ZY%2BlSr5lSmuSiBAbJVbMFaH3oxtQ4fYkZPiwJDod9XADL7wbja32QTf247qm1bylG3tT7kGLLlgg8ZdcI0Q09473BWNs8e%2Flmw0lUXRnOwf%2BQNyO4dt&X-Amz-Signature=bfaa1a0faf4ec905cb385c473cf509a294a2715d72d9248372f0a5ae94247a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
