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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6MSHA7M%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAsi%2BMCLCLBfQ4RiM1hzCIDnY2kc7pYwTuRK2dkGS2CGAiEAishTYVivTpf%2BprEhGIhSl5FT2Ic0JGsiI84WfylBQ8UqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2nXNaDm2B0B8CiaCrcAyiyA4s3FtNJiZWaRIeHNbVoey5uQ8SaNidARR8YEZ1uUa0snNs%2Fs1sbVfY9UHx2WVDVv6ofQJWCry%2Bndm1KU4QTTnTX4aJyPg%2FJem8zYw6LrHiKYxhT8e1jVqRVUWDzL3XQ6YJS5brky0mM9X0l7R5jhjgQj2ExS09JsOJeM20tcMrFKNBHl16rTobvMBsvyqdVvKYeMUfyBT2yQrc5U%2Bv%2FpnQvot2wGYQZYuXyUtqLd09mayDxiFmuY55qtLO5hd2b9fj0yszs4mQEJJKZTZUJaTaA43Jxl8IyPAK2vB268DNWfrbYLOA%2B6lhYR%2Fi4Rw6rXSDDezrVMcvt%2FzXWOT9dQBPjykKOjt81oy6qC%2FXjpGJgyc2oG1hbFck1bOv5vqmZFPrHDyFzeR1BjmcX1CO44Xe4h7pS%2F3EhbqU5RLnfEjLJT00hA3jeFOmw1HL8pkRJJ%2BaDl3Liy4GujViD3JQR2sNXhUupnM7vpz84M%2BTekIvCExKj879UQQImsldStfcoOibT6nOatIeVrsliZA7orgbComv5QgRiL4HZmsgYzdZNzMAoHlHJ6d2Pu1ACLtvYelrfuJvaXoZmse5AlPEHmH485cdhhKJiZVQHt1%2FfmcmWrO%2BDW2ZQFPEDMP69oMAGOqUBJ73099dtvCmqFEt9SsDTrf6Hya1yYqMhnU1pkKNWtNAVeRHtSJDMvZx7KYz%2BGKbWBEVPeQUBxEeMC9Dt7gEtLehkRmxLZqUFiVj8e8QSMZXgrfhDQ7EGfQg4PgDQPIkGkB0sAIuawu2xYFubzJDofbBjW7AM3xL4jOABI%2BC%2FCDTp%2Bobt9crKD7eNaPfA06IFM5DgWArzETjgonU8UJrdOxmRRd5R&X-Amz-Signature=e5a1455ab1da8dbdc9f8f2bef17fe232cfcd8542b6e7bb7dba45aceaac005aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6MSHA7M%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAsi%2BMCLCLBfQ4RiM1hzCIDnY2kc7pYwTuRK2dkGS2CGAiEAishTYVivTpf%2BprEhGIhSl5FT2Ic0JGsiI84WfylBQ8UqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2nXNaDm2B0B8CiaCrcAyiyA4s3FtNJiZWaRIeHNbVoey5uQ8SaNidARR8YEZ1uUa0snNs%2Fs1sbVfY9UHx2WVDVv6ofQJWCry%2Bndm1KU4QTTnTX4aJyPg%2FJem8zYw6LrHiKYxhT8e1jVqRVUWDzL3XQ6YJS5brky0mM9X0l7R5jhjgQj2ExS09JsOJeM20tcMrFKNBHl16rTobvMBsvyqdVvKYeMUfyBT2yQrc5U%2Bv%2FpnQvot2wGYQZYuXyUtqLd09mayDxiFmuY55qtLO5hd2b9fj0yszs4mQEJJKZTZUJaTaA43Jxl8IyPAK2vB268DNWfrbYLOA%2B6lhYR%2Fi4Rw6rXSDDezrVMcvt%2FzXWOT9dQBPjykKOjt81oy6qC%2FXjpGJgyc2oG1hbFck1bOv5vqmZFPrHDyFzeR1BjmcX1CO44Xe4h7pS%2F3EhbqU5RLnfEjLJT00hA3jeFOmw1HL8pkRJJ%2BaDl3Liy4GujViD3JQR2sNXhUupnM7vpz84M%2BTekIvCExKj879UQQImsldStfcoOibT6nOatIeVrsliZA7orgbComv5QgRiL4HZmsgYzdZNzMAoHlHJ6d2Pu1ACLtvYelrfuJvaXoZmse5AlPEHmH485cdhhKJiZVQHt1%2FfmcmWrO%2BDW2ZQFPEDMP69oMAGOqUBJ73099dtvCmqFEt9SsDTrf6Hya1yYqMhnU1pkKNWtNAVeRHtSJDMvZx7KYz%2BGKbWBEVPeQUBxEeMC9Dt7gEtLehkRmxLZqUFiVj8e8QSMZXgrfhDQ7EGfQg4PgDQPIkGkB0sAIuawu2xYFubzJDofbBjW7AM3xL4jOABI%2BC%2FCDTp%2Bobt9crKD7eNaPfA06IFM5DgWArzETjgonU8UJrdOxmRRd5R&X-Amz-Signature=85e025964a2abab1d5542304e1986d994c1e3f71868c7c4de335c601a23551b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLW24LF6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBmGQ9Tcn8nUoRwU6SjTHWjZsKmeyoout0KyBTPER%2BI8AiAcCDcsOODObeQeE%2FA1%2FJ%2B9rj9Nt4CPcmOrhDP4WJAzGCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5IX3ssqHbg9Rk%2BNIKtwDxM%2FAHOu0CMuyeVPMhpjCL5q6MNa1oVY9N%2Ba4NwZyZ3GYDBkMf%2Bb%2B9pIFXy4kw%2B35PqlHO1q5QoiEqsZPIvcsXfsu6n192yOP87zKrDr5TD8c%2B0O9hQqJOpWUtVAy%2FUyu8xARnGUAfeNRf67SWSFBuCp5rGqelbf5aVy%2BPa%2FvDQhkJf9qrIUtgnZUir61ueTGduU3yNF1vy8AvJb%2BJYXkFbKlAZZ2%2BLkoErPtZCAKxuQWaqMkdi%2F%2B80OsVBub7gsLZuX%2FGNX%2FNnYOG0E6%2FCX%2BG4GO7XFQ%2BfF1iOLciVWa1SqzU%2BeoYNnK5A9Kl%2FxXYdsi%2BlK%2FVg7Zz97zjB7GQ9OX%2FBWKJptvwYRkIhRrQ7vRDjyjJaQtA5lCuQWW1hoA9ZLVq2dXMnfPGER8EEz6eo0iisWJ4ANF22ufE7cXsCDyigfGawtj45xbwG0MQ%2Fshg3ZgFHza4DLy8lxJlex5NamRL%2BnEaGdCzacSsg2pIG2hpf8e72uGIMuVhPoogqNt5w2NtkBkdYvs5WoGn8%2FXV%2BoRJfyhJrxZKLq9YLLDca9%2BRZUjq3%2FIudGEXmLP6UlscFJ%2BSEiuAUwF%2B2iBp0wgFRVQ%2FTM993%2BlRebN1F5Z99ae8hkLE8Y2U9koR%2F1pXLkwnr6gwAY6pgH2ZRQSkLYaeqDAWYa9n6TjCndrfrDcKHNvYjO0rtHXLo3rSbnFU3AnyazJR5R03o3H2x%2BcppbFjMljpZZbkwufbqjOFNAa5M9L8p8jwEWQbw0EngFV05ScL7b3J%2FYWPkOlRNDZNxVK7ReJiEDnMHNZ9NtLtKHrYFC20Mj%2FcdCG1K6PZrm5VFbmWMVlnsb%2B9y72SGJYf5v2wV3HYcI8sSHa1Y%2FaFWkx&X-Amz-Signature=48db094251764f2a94939456e233872c86f53612f7d085a027a54566ea889907&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBP3DTNP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDaQrxHJDNaYbJ9tSFRGx9hz23QTuiCaZ%2FRa1S9WwDgKQIhAIFLUnBgcqOs%2BGol%2Fjhfwu1jw6AwkqDkqzTE0wG725VKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5pgxJIqszbfyK7nIq3AN1gXtisODrux6msjGYFb%2BONNW%2FgKg8e98sw4gT4sv4j%2F4K2iSUAKvQB6R7gZnxUJumpMMSfDcxeBGflaxjOKNT9JWtUZW3ZfUpL1PcU0VWoJRugcx1caJYQxExDINjkTlMnv87tysPh6zLjNayGi5wbi2ZywVz3VG%2BMyMNESF79hRRsHBLQ5wBbVfHLQDtOmCCFYWFoOqL4G67IN4fJJZQawTAh%2BS5JyMu5T53%2Bm%2BJZTnS68BoHj3VyBsC1l76ozLoZEX24qs2HeHbcqH9%2BhwLslPltWHlABrxWcvxIMHSNpEbeaMW8rzEFsstKhYSgEBoktDprsOOICAJ%2F7afUMXb6qT6P6FbGMHVXAmcM%2B4qnlgDqKXWSii4uVVw9Sf76GlDF8XSakBWKv8jw8BvZd0y9QvGPddOMbxnY0TQ9zVn0%2BFYPCR2SCLYEBnsYbOlUg2lLQTT7MxY4mX7zaNkpD5JAt%2BMRYaDzay%2F3Phcg%2Fp5g5uFq9mOYsWIG9SgZoXiQOJG4t%2Ftc2tTYoUazDdutOGDE9Q0e53GezNuz%2F95MB%2BusSQcymgSuRf5VQIqH1be8f0wPN%2BrIKp7l9Ri8DA3ZVz%2BgHMTNC1b23kIGCOJozbLxBtDwj6d6cORk%2FlMljCBvqDABjqkARCP0yGLa7rD1uk8joh327kWGuSQhPjclFqkKUxU9cWoyuLASNOAH9gSrAiOQLc8KlQn943rfwX4jYAV0w7BLcvd%2FWu2Xg2%2FymDKeXwpx9UC88gVQSt%2B3wZ7%2B%2BEJv5JhU5MqjyC1QlJ%2Fkp9KRXInznIeHujmqXyGzZx1xcAznHNnTmUzEz3mnS1RxifU%2BIMlENf9AdHO%2BidrBmre6RmZn6ELSNP3&X-Amz-Signature=4469ddf4863ecb51d091a0d73978c52fbf0618b1aa04d1934adf83221a248272&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6MSHA7M%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAsi%2BMCLCLBfQ4RiM1hzCIDnY2kc7pYwTuRK2dkGS2CGAiEAishTYVivTpf%2BprEhGIhSl5FT2Ic0JGsiI84WfylBQ8UqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2nXNaDm2B0B8CiaCrcAyiyA4s3FtNJiZWaRIeHNbVoey5uQ8SaNidARR8YEZ1uUa0snNs%2Fs1sbVfY9UHx2WVDVv6ofQJWCry%2Bndm1KU4QTTnTX4aJyPg%2FJem8zYw6LrHiKYxhT8e1jVqRVUWDzL3XQ6YJS5brky0mM9X0l7R5jhjgQj2ExS09JsOJeM20tcMrFKNBHl16rTobvMBsvyqdVvKYeMUfyBT2yQrc5U%2Bv%2FpnQvot2wGYQZYuXyUtqLd09mayDxiFmuY55qtLO5hd2b9fj0yszs4mQEJJKZTZUJaTaA43Jxl8IyPAK2vB268DNWfrbYLOA%2B6lhYR%2Fi4Rw6rXSDDezrVMcvt%2FzXWOT9dQBPjykKOjt81oy6qC%2FXjpGJgyc2oG1hbFck1bOv5vqmZFPrHDyFzeR1BjmcX1CO44Xe4h7pS%2F3EhbqU5RLnfEjLJT00hA3jeFOmw1HL8pkRJJ%2BaDl3Liy4GujViD3JQR2sNXhUupnM7vpz84M%2BTekIvCExKj879UQQImsldStfcoOibT6nOatIeVrsliZA7orgbComv5QgRiL4HZmsgYzdZNzMAoHlHJ6d2Pu1ACLtvYelrfuJvaXoZmse5AlPEHmH485cdhhKJiZVQHt1%2FfmcmWrO%2BDW2ZQFPEDMP69oMAGOqUBJ73099dtvCmqFEt9SsDTrf6Hya1yYqMhnU1pkKNWtNAVeRHtSJDMvZx7KYz%2BGKbWBEVPeQUBxEeMC9Dt7gEtLehkRmxLZqUFiVj8e8QSMZXgrfhDQ7EGfQg4PgDQPIkGkB0sAIuawu2xYFubzJDofbBjW7AM3xL4jOABI%2BC%2FCDTp%2Bobt9crKD7eNaPfA06IFM5DgWArzETjgonU8UJrdOxmRRd5R&X-Amz-Signature=4dacebbac2bbe0b05d7b40db9a3fdf28fef9eb52b92be9b988c3123d02bf93df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
