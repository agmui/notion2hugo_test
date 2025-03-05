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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWLETKR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3kz9VuLnI0CBe6pbnk3BN3tXD%2Bjei71btUjlkfSWjMgIhAPWojsNOXRHjT9j1PLAuY%2FNW%2FQjLo2%2B44lGhmUkGFwgcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztDke%2Bi33iYAF%2B5y0q3AP3Bn9Hq4aut2l9nIM0eMXk0I9ht1miUrswgqKdgeKPYdI8Ba70gZRZH9i6GE%2FQd7Qrl4Bpger%2FmdDuPOCm%2FOYl%2BRzq3XQdrTIN%2FByZvJbVb%2B5WsSAujsJVj3DYGxGhVhjXjP3JNAd7ZxdkWTAseOd0EesswMLWpDQCrZiRgBweNrJ1Bz3D9t7XL7qEtROy0iSfyRZ%2F5HYfcj2bNSKwoSaUYlwKHx3VKzm2CsbioaAOm%2BKLNvDJo1AD%2FRD%2BeFD81qJwin23ZDxEwZhDTvkvC979ZWqeM9ffM2Vib%2B3siHBE%2FvTdmJBcDWkCGzNdCPqq4%2F%2BOIQWSaZwbX1qLN41ZMPt5%2FChE1P0CDDseq7grlAzYrlkrsRHOeY2MgKce8KW4o%2BFHlckMhesPWN9Y%2FdpQBEFOEkTEIKaxq0e2V2HiLdk%2FHp93CQ1jpc765M2q%2FJGR7cnHDCg7%2BD4%2BGo7tZe5qFYHrCLh3AP4BAountFcOtpsCwYiygSjZhEvAwcqqrkX%2FbrsH3cWLKK4ZIASuZosE%2FxhvkjpLIGYDufik4VzsUPHSkJ5jHku5arP8onuTah9nX2YtFGySdon95QmpmEz4CfBwiqsWi6R3boHWKY3QFawDWuYaqiMKUceP%2FcnUMTC%2ByZ%2B%2BBjqkAXbNBnqOP8abyRQSPpK22inbfzcbMmpuYG5F0AD078SfIh8hnRgnQMr8HcyB8sd%2Fp0Y66dWJXPM3YAeUcQwHAbDeCMl5SmqfjCKT4noU8K4L657QARGfqgrIngTLcRQvf7G9o%2FCD1ZkDFc%2F6m7h%2Fc%2Fh28qy9smm25fa6QhQ1FUapXjdhKJFsRLvbrQB4kj%2FftnDBLKn7bP%2BRDTIW%2B4BlcS%2BuMJVZ&X-Amz-Signature=bf2ec8c97e3c81ea37f4fe794f585dde992675acca7e98d067d246709319bc42&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWLETKR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3kz9VuLnI0CBe6pbnk3BN3tXD%2Bjei71btUjlkfSWjMgIhAPWojsNOXRHjT9j1PLAuY%2FNW%2FQjLo2%2B44lGhmUkGFwgcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztDke%2Bi33iYAF%2B5y0q3AP3Bn9Hq4aut2l9nIM0eMXk0I9ht1miUrswgqKdgeKPYdI8Ba70gZRZH9i6GE%2FQd7Qrl4Bpger%2FmdDuPOCm%2FOYl%2BRzq3XQdrTIN%2FByZvJbVb%2B5WsSAujsJVj3DYGxGhVhjXjP3JNAd7ZxdkWTAseOd0EesswMLWpDQCrZiRgBweNrJ1Bz3D9t7XL7qEtROy0iSfyRZ%2F5HYfcj2bNSKwoSaUYlwKHx3VKzm2CsbioaAOm%2BKLNvDJo1AD%2FRD%2BeFD81qJwin23ZDxEwZhDTvkvC979ZWqeM9ffM2Vib%2B3siHBE%2FvTdmJBcDWkCGzNdCPqq4%2F%2BOIQWSaZwbX1qLN41ZMPt5%2FChE1P0CDDseq7grlAzYrlkrsRHOeY2MgKce8KW4o%2BFHlckMhesPWN9Y%2FdpQBEFOEkTEIKaxq0e2V2HiLdk%2FHp93CQ1jpc765M2q%2FJGR7cnHDCg7%2BD4%2BGo7tZe5qFYHrCLh3AP4BAountFcOtpsCwYiygSjZhEvAwcqqrkX%2FbrsH3cWLKK4ZIASuZosE%2FxhvkjpLIGYDufik4VzsUPHSkJ5jHku5arP8onuTah9nX2YtFGySdon95QmpmEz4CfBwiqsWi6R3boHWKY3QFawDWuYaqiMKUceP%2FcnUMTC%2ByZ%2B%2BBjqkAXbNBnqOP8abyRQSPpK22inbfzcbMmpuYG5F0AD078SfIh8hnRgnQMr8HcyB8sd%2Fp0Y66dWJXPM3YAeUcQwHAbDeCMl5SmqfjCKT4noU8K4L657QARGfqgrIngTLcRQvf7G9o%2FCD1ZkDFc%2F6m7h%2Fc%2Fh28qy9smm25fa6QhQ1FUapXjdhKJFsRLvbrQB4kj%2FftnDBLKn7bP%2BRDTIW%2B4BlcS%2BuMJVZ&X-Amz-Signature=883c7c1b982acdf959c8992c17e665c81e50e7607304f5d67405c878990badc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPNBOVR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0VmnJzGZ%2B%2FRsGGz053EaIsiXyscehkH2AVxn7pmXUeAiA5qU%2B1mx7B4ehiAg71YVYJpQhBhdLTJyH0DkVyuejkvCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEaarGru32y5Skcz8KtwD4NPNIN2dc63gRco%2BKD3ZSkTUmzT2xRe5SQuCwN5h3hcLs2PD0uqFYFk7CMwv%2Ban%2FrVJrwqwK3sDAkZONRviE3PGr6%2BnKzdsL3t4d8e7gePYWF3uuRZ9hPSeqSSjbckm9yCQTtGhGfKA1f0j2H%2BtobWtYNpS2drVMGe9PyArRsfwhYsYTdRkgidbF56FSFS06xvHgMBkAb2ACEa%2Bhv8Lr8ZjZruCi%2F4Dd6%2BbE130Opd%2FUS2v70X4s0ppFbm4rmiAU0KJCcwRHZ3YBsYUD5HD84KWzyp34mJ9xGTIBQ%2FfJLUHMqEQLriGMPcBVD4May5CAL8%2B8uZKrzzYEwqmENPPw07SJ3QAdn1kgZ4C8JHyNX%2Bne2OMA2POuknmkHz0RSllURj2gJKMsoArYUby3IztsJkjMx0XGLj0NFrk7%2FnioqgV4ovshJWZXV%2FdHFdRUZQjeMqkz0dh1h%2BjWEXkL1RlQV1l2clOA1smvkGLFGcEegapHF%2B6VYZV6uoeyOgQC%2F0pt%2BexKguN6KQypjFz1VS1FXY25vJHnKRydWgaUI5QxL0ygwpvMKvkEdQ0ouCPk5ZW8kceuUFy65h1rUjyHvApOT1EkgzcGzFT1tw%2FV09HUrTA9M7oOCwFU9hIyn4kwyMmfvgY6pgFJW3z8E4J3Em9md%2BOdnKRyBqiawtbzH1Kmfk3n41U1o%2BFwCSgpBtMmqJAYDlQB%2BTSneHG0iAtrYAtRDqPegIWKVzmN%2BPKMnM636xIO7e3NmHUp%2BQnRspckallCDFG0AvJ2wj7LW5F%2B%2FjxgKIQKZpkpE64kKeyLUJnR4SiG22mlow2xCpGsPZEg9lLfGv%2B%2BoGWzrQdhapvLdKFsysX8lAx4FYsDTqKU&X-Amz-Signature=a58ccd8948d5a155eb39989641c717c8fd2bb25e111c9bf4ac8f2bf898c55d08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKH7NAVB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfmxCSuxDv95zOspUXuT0cgC5cAape5XTK%2Fo%2F2e%2FPEYAiBrX90dbtKbYAsUx7J7xzrcjbMrxpcXdJ%2BWdaRnBSYFgCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH1nbaMZC1Y2%2B%2FRqXKtwDeERg23WaEjvCTpxajReJizXu1KYbveXlBzsHTvS5vLAbTbpT8%2BijSi8XJM8mTZnPKdKlHekMeK9aocdNrzkVr4h465jzk5UyhsrS4nQmk8ssb7dLxyYPJeiaCPeNulHF8xjFzdTaUDDbiKzo8Ycqn1bKWk1d68jwNNg2Lv3gGc2voUZHqL%2BK4rrJa0jmH7pgDpTquuTNTxjHMrnHOP6t2dmnRAoQc6U6XPMJVsWxXTivZGf6ZILNIWRjG3fPRj4zcm%2BwRwAclYDM%2BGyso%2By%2B8ieZ8rlW6XItoV34k5yTPNRANCqyfG7KGPuNp7pCAYTKZsZqQWv2IUvtslbFq5E%2F07WjLdgCrvfy0AjyRHdteuI6Llw4jtd%2FJTykIMbdQMwTZrO6Jr3KPypUzmYPAD0DXnf7dxkuLg7cD%2BHTdGo%2FGCGIK%2F9U8ok3Jyfj7mEC7JdNRz75fsho47em3HF8LGrKEdl3pwbzZMgjeg78w2iQmsT7BJr5YItsKn%2BKt%2BuXmHvss8Ocr%2FX4iZnqdrMu3FBEq2zXwEA5FV4NdMqTpDHvM0r1lD0e5qJCJOksq3qk%2BVBmHtCJkRdxW9faEKSQMWfWlwMa8IBDb4USGc9ZtE0t6bIQ4K6T4iKaUGo3QXowrMqfvgY6pgGkYCYH8Svzxq7vV4A1NKRLl%2B9f%2BW4e%2FB5b%2B9TkEdDLyMTQuYDtSaHo%2B179KA93PzgvpMhWRMpWgcrHRKN4%2FX5U8PhvobfCqq890NVofyaHF5PS3V17sswP%2FDqJ5uZ39ivjrSjTBvTIqbJekB7S5rF17bJ1UKH%2BVmLht89CsGAXJEWF3Oj%2BETKeca1oNex0jZVY393diviQZ5EYU%2Fx8S1CTJf67aebr&X-Amz-Signature=8eea140748d10a3e6aa02db5efc2d01d9e87c7be59dcc12bef72d05a87c012f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWLETKR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3kz9VuLnI0CBe6pbnk3BN3tXD%2Bjei71btUjlkfSWjMgIhAPWojsNOXRHjT9j1PLAuY%2FNW%2FQjLo2%2B44lGhmUkGFwgcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztDke%2Bi33iYAF%2B5y0q3AP3Bn9Hq4aut2l9nIM0eMXk0I9ht1miUrswgqKdgeKPYdI8Ba70gZRZH9i6GE%2FQd7Qrl4Bpger%2FmdDuPOCm%2FOYl%2BRzq3XQdrTIN%2FByZvJbVb%2B5WsSAujsJVj3DYGxGhVhjXjP3JNAd7ZxdkWTAseOd0EesswMLWpDQCrZiRgBweNrJ1Bz3D9t7XL7qEtROy0iSfyRZ%2F5HYfcj2bNSKwoSaUYlwKHx3VKzm2CsbioaAOm%2BKLNvDJo1AD%2FRD%2BeFD81qJwin23ZDxEwZhDTvkvC979ZWqeM9ffM2Vib%2B3siHBE%2FvTdmJBcDWkCGzNdCPqq4%2F%2BOIQWSaZwbX1qLN41ZMPt5%2FChE1P0CDDseq7grlAzYrlkrsRHOeY2MgKce8KW4o%2BFHlckMhesPWN9Y%2FdpQBEFOEkTEIKaxq0e2V2HiLdk%2FHp93CQ1jpc765M2q%2FJGR7cnHDCg7%2BD4%2BGo7tZe5qFYHrCLh3AP4BAountFcOtpsCwYiygSjZhEvAwcqqrkX%2FbrsH3cWLKK4ZIASuZosE%2FxhvkjpLIGYDufik4VzsUPHSkJ5jHku5arP8onuTah9nX2YtFGySdon95QmpmEz4CfBwiqsWi6R3boHWKY3QFawDWuYaqiMKUceP%2FcnUMTC%2ByZ%2B%2BBjqkAXbNBnqOP8abyRQSPpK22inbfzcbMmpuYG5F0AD078SfIh8hnRgnQMr8HcyB8sd%2Fp0Y66dWJXPM3YAeUcQwHAbDeCMl5SmqfjCKT4noU8K4L657QARGfqgrIngTLcRQvf7G9o%2FCD1ZkDFc%2F6m7h%2Fc%2Fh28qy9smm25fa6QhQ1FUapXjdhKJFsRLvbrQB4kj%2FftnDBLKn7bP%2BRDTIW%2B4BlcS%2BuMJVZ&X-Amz-Signature=e693de4f3774199079a94af5203271e2eea3ab69c3959978741690861d1ead3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
