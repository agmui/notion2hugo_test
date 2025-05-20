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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QARAK5RT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxF5Ztmt26AItb4FkEVkMQ4fyhOGjpOjSl0tzU6%2Br05AIhAMwVDW71xg3E3kk95JPLGdnyU0nhF%2B2sgkWKwNeoLSLTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeVxl9XRJjOCNiON8q3AMEsCeFJWb4o7r0vqco%2FoK5wq9doPFm%2BlVCm0mInNmgal1P9wdZIvwXYKAfjiVICy8Y4cSbqswP34krUizsMKhChiJECoKDe01XeZPpawxW4mPHdG7huiCQau3BVPvSomBT5b3wDahh80joX6q0%2ByAKVYmGVaPcYmC9WjPj9V7xgkVX3T1LZlIY6Ti4N%2FYL2UsuoIMCBe3SWy%2Bm13vNniwDJOYwXtvFLCvSJT5jQf2TUyHf9Pq%2FFkY%2FlM77oMafxNl4E14E2BHsLmxq4F1gDUHemaI0lzE4F9R7YJ34ZX8vPVCaTWhTFwJ0BbH1l%2Ff3DSxGUHW4zQqkNemM5sOO%2BRQx%2BmbJExFNw6aOAbwUmYQcxy5NuzvCnmbHCHg4uAxzuXjjbWpla%2BUNQF4Sl9nU7hrusi8svc6FB6mHl23lZK3tRzuvMplWnqBTq7xJMbPL9qmI%2FxmGyALPnaKyaHBTI%2FtWMUVMmiLErVzP%2Bsip5ZfRFZwUXMiLHgy8Awr67fL6OP17sLdE04RL36Eqovsv86u16EAGEpHzaDsvA5Ches4uBEWiymyJ6yK1PghM%2Fxe3tAGqGAgC83gODXg58N5s11W81S7WBr1FtYnvnyod0TEspklmShAs84AXG9031zDgrbHBBjqkATVYb7Cs3hj%2ByOdn0Pes2UoQYHAQCeykwywzFezVyJJ3xBe5XlZLfmgYE5xWdNtlEEIWHS0RrjAAW79bZS4rRRQZXdaXL%2BMKeycD0Vi1J9UUhTJxxr4rDQaYsWNgcDiPlSiT9z5X9k9yk9y6jPw4Pi0WsTX1JYz9PFUVaiVmoKkjZlpjHq4QAmSUw3p%2BZNY6v0pfq0zdSBeaUiofX1uO%2BaUtdGF4&X-Amz-Signature=82626a92e13a0c7f469b03ed085977452702485cd9cf34b59b9b916cc67f1b65&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QARAK5RT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxF5Ztmt26AItb4FkEVkMQ4fyhOGjpOjSl0tzU6%2Br05AIhAMwVDW71xg3E3kk95JPLGdnyU0nhF%2B2sgkWKwNeoLSLTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeVxl9XRJjOCNiON8q3AMEsCeFJWb4o7r0vqco%2FoK5wq9doPFm%2BlVCm0mInNmgal1P9wdZIvwXYKAfjiVICy8Y4cSbqswP34krUizsMKhChiJECoKDe01XeZPpawxW4mPHdG7huiCQau3BVPvSomBT5b3wDahh80joX6q0%2ByAKVYmGVaPcYmC9WjPj9V7xgkVX3T1LZlIY6Ti4N%2FYL2UsuoIMCBe3SWy%2Bm13vNniwDJOYwXtvFLCvSJT5jQf2TUyHf9Pq%2FFkY%2FlM77oMafxNl4E14E2BHsLmxq4F1gDUHemaI0lzE4F9R7YJ34ZX8vPVCaTWhTFwJ0BbH1l%2Ff3DSxGUHW4zQqkNemM5sOO%2BRQx%2BmbJExFNw6aOAbwUmYQcxy5NuzvCnmbHCHg4uAxzuXjjbWpla%2BUNQF4Sl9nU7hrusi8svc6FB6mHl23lZK3tRzuvMplWnqBTq7xJMbPL9qmI%2FxmGyALPnaKyaHBTI%2FtWMUVMmiLErVzP%2Bsip5ZfRFZwUXMiLHgy8Awr67fL6OP17sLdE04RL36Eqovsv86u16EAGEpHzaDsvA5Ches4uBEWiymyJ6yK1PghM%2Fxe3tAGqGAgC83gODXg58N5s11W81S7WBr1FtYnvnyod0TEspklmShAs84AXG9031zDgrbHBBjqkATVYb7Cs3hj%2ByOdn0Pes2UoQYHAQCeykwywzFezVyJJ3xBe5XlZLfmgYE5xWdNtlEEIWHS0RrjAAW79bZS4rRRQZXdaXL%2BMKeycD0Vi1J9UUhTJxxr4rDQaYsWNgcDiPlSiT9z5X9k9yk9y6jPw4Pi0WsTX1JYz9PFUVaiVmoKkjZlpjHq4QAmSUw3p%2BZNY6v0pfq0zdSBeaUiofX1uO%2BaUtdGF4&X-Amz-Signature=ec16a1acfe8a62aa37f007ab363c4713287dafd72ac2d4771790b4f72c1eb4df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QARAK5RT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxF5Ztmt26AItb4FkEVkMQ4fyhOGjpOjSl0tzU6%2Br05AIhAMwVDW71xg3E3kk95JPLGdnyU0nhF%2B2sgkWKwNeoLSLTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeVxl9XRJjOCNiON8q3AMEsCeFJWb4o7r0vqco%2FoK5wq9doPFm%2BlVCm0mInNmgal1P9wdZIvwXYKAfjiVICy8Y4cSbqswP34krUizsMKhChiJECoKDe01XeZPpawxW4mPHdG7huiCQau3BVPvSomBT5b3wDahh80joX6q0%2ByAKVYmGVaPcYmC9WjPj9V7xgkVX3T1LZlIY6Ti4N%2FYL2UsuoIMCBe3SWy%2Bm13vNniwDJOYwXtvFLCvSJT5jQf2TUyHf9Pq%2FFkY%2FlM77oMafxNl4E14E2BHsLmxq4F1gDUHemaI0lzE4F9R7YJ34ZX8vPVCaTWhTFwJ0BbH1l%2Ff3DSxGUHW4zQqkNemM5sOO%2BRQx%2BmbJExFNw6aOAbwUmYQcxy5NuzvCnmbHCHg4uAxzuXjjbWpla%2BUNQF4Sl9nU7hrusi8svc6FB6mHl23lZK3tRzuvMplWnqBTq7xJMbPL9qmI%2FxmGyALPnaKyaHBTI%2FtWMUVMmiLErVzP%2Bsip5ZfRFZwUXMiLHgy8Awr67fL6OP17sLdE04RL36Eqovsv86u16EAGEpHzaDsvA5Ches4uBEWiymyJ6yK1PghM%2Fxe3tAGqGAgC83gODXg58N5s11W81S7WBr1FtYnvnyod0TEspklmShAs84AXG9031zDgrbHBBjqkATVYb7Cs3hj%2ByOdn0Pes2UoQYHAQCeykwywzFezVyJJ3xBe5XlZLfmgYE5xWdNtlEEIWHS0RrjAAW79bZS4rRRQZXdaXL%2BMKeycD0Vi1J9UUhTJxxr4rDQaYsWNgcDiPlSiT9z5X9k9yk9y6jPw4Pi0WsTX1JYz9PFUVaiVmoKkjZlpjHq4QAmSUw3p%2BZNY6v0pfq0zdSBeaUiofX1uO%2BaUtdGF4&X-Amz-Signature=98081e709732622b2b49287902b5b807612fe57cccab8c98bba537b0daf69f74&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRQ5GQY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7fuLmIMlEaHVMiZ2gh363drsvmXGeQ9AzbgM7Ds4HAIhAPZYgqf%2Fuqotpwb8OSzqzWvvEUl0UqODPaTqwl3%2BVnWHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuClO0pp%2FBGOyq0wQq3AMwFIYFDLhbEv1kcMxnn%2BB0TvE37UGcBb4UC%2FmffTTE4Erobi7R1j%2B3Ttj04Z79cGZcNmwQdyNriixqo16kZXa9vHQFrpNdlP5dAKPmI0MxMhKxPKBLynkpr0QY0I3hir84SSDSCcfoSx5t2ePJUI2Aa8zhjoMMc9mMeYzGdqgpW8T0A4rrx31Y7xrOjEO7vV4Fn2WebNWbbU5THgVsEBAGSznDzelfpLwLGYmC1HPpYDMItMy3FpvOI4JeJ%2FFNtcwEHS9wlCXGQVlKrtpT5AFWrmbSTak7BI8O1xk0B6299ajoQ%2B6qVibdm7nYKSseMX2mznCh76FzzGTprc3GKqGAT8e0I2x24LdOhiFeYmsEyUduPBrvOfTA%2FV25FF2EKp1I83gtD%2BB%2FyirtQqnuPpyigvcd7HpnxCgbVqsO7kpA73QgKP9T4LipOG%2FPTHJVvy7StpnhSfgXk4xs%2FXazGwo%2FLdaDP5zheUs1VsXhU3HjtOJED9acNqasrlESm%2FNsGByfDUa7iZ4FVo%2BALmnf4Zfbzf%2Frl8i%2F3RBhECQHvMR4Xkrffh0Lhrpj7dqaySwoivKtV8j3uc9FlCJ%2ByzqTaE7mC0EbK6JcL3CYIdRbRk%2Bb4luctYZJhMjdlm4JYzDYrbHBBjqkAV7KViiJ3WEmqcg%2Fi5JgXVKBFetsyD%2BDwlTLtGKp8Uc7V3atd0aNIRFa2PXCGcw5asAgv%2BctW6TRB%2BnzOlnIPTCSNivqfA9yFeRfaoRHqeQXcM7pskOhhYnDzdr%2BqdsM9kuFQipTHvAPeeyZaG1xlXhYBMeXth5hFKmrkdHx5oiULdCVk37sBBlxEOsBr8FygDQyTZ1ZEws3Em19ZYr8EeoZJpEy&X-Amz-Signature=79fac9949252e4ca1bfe7bcbd3fb2eafed66cedd5e67044f2d03db6c4732d10d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTQ2XDL%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUE8dfyROAwKx4NMuHvZvghr0CE9vk9M2L2FbB%2Bvi0AiEAy7bV%2BEs%2FbJ4N%2F6oQaWwP%2BBtJgdwdTdzJ%2BvsDCgvz2DoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRPvGJzU71jDJMKbCrcAxKvZvRwCCmElGCjEBLhy0mwKDfMLDRoAh28GiFRKe8rDPuLmbWqaKzzEbkuh9jyYdRvSXZqR%2Fp0IomgCPawCaQa77qWynk58u96caChPXCz5n9PLadAfEUkJaN8mys8MBg%2BFRvJpkxQijmFZ36YXwucJIypUkNFWw7sGgVIU9LqdZt7dbnA%2FtaIj5Orw939xMfh7rYsOmzHM5VwdXipYaheJOwBMy%2BU%2B24MUtvF%2BaSHW4g83JtWUYuhGpaVPuzKcc2YQCKkBkaI9Fmz%2BosGJg%2FLS9bisBv6WCfVg2vTfPXTt626nPZvLBisNInCZM%2B%2BndDW6VomooBQgrxYzSpnoqlZAqwJiRlY2VmFuxIBI94vBYO1Vgpq31jjHy2EoIeYVGmbHWNSREPDqS28II7pyE4tE0jftsUK0zv2qNC3dRMj6KPrLdjx7GBLaJXibMyyn7yFRbCI7H7YzGTpvWM68OeLLpPV%2FaRk6vIHDSNAVczJYT67xgaMV2S0l4pHeA0a3xLjPoJUkDOpQSlQBfAHk%2F1dZ6Gt3bDQ4SlmRjKmCwR338jw%2F%2FX6%2Ffx%2B7BFEEimM%2FKursvOy%2BIYUP%2FU%2BrXAfAsiQ%2FiLZ1VX%2FJ%2FtQm56aIv8YPJKOk4lw6jhkZ%2FyxMI3qscEGOqUBffhOOPtSuuqoGGqVieezosUzNsH%2F4cNEigwGZOBYfVadqGH5yBOjKs8wYOZ2D9vYbxCm8Lipf%2BS8w4zzsniix8b3VaxJLqV5uUxGsV5sVJbQZWgTPUzMqp0Jfjw%2FH4uEm8TuYFTWUjFIWiQLWrhtTgZLXIcywb128Xqr6Ip9pkyN%2BOIZpBKckJSERExoYWjkx4pn3qPEJecqNE43eL3wuZZ%2B6G6S&X-Amz-Signature=6c2dd6c5b71c08950b813cd6047b769073e76961cab38c8bfcb56e3c93bbda56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QARAK5RT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxF5Ztmt26AItb4FkEVkMQ4fyhOGjpOjSl0tzU6%2Br05AIhAMwVDW71xg3E3kk95JPLGdnyU0nhF%2B2sgkWKwNeoLSLTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeVxl9XRJjOCNiON8q3AMEsCeFJWb4o7r0vqco%2FoK5wq9doPFm%2BlVCm0mInNmgal1P9wdZIvwXYKAfjiVICy8Y4cSbqswP34krUizsMKhChiJECoKDe01XeZPpawxW4mPHdG7huiCQau3BVPvSomBT5b3wDahh80joX6q0%2ByAKVYmGVaPcYmC9WjPj9V7xgkVX3T1LZlIY6Ti4N%2FYL2UsuoIMCBe3SWy%2Bm13vNniwDJOYwXtvFLCvSJT5jQf2TUyHf9Pq%2FFkY%2FlM77oMafxNl4E14E2BHsLmxq4F1gDUHemaI0lzE4F9R7YJ34ZX8vPVCaTWhTFwJ0BbH1l%2Ff3DSxGUHW4zQqkNemM5sOO%2BRQx%2BmbJExFNw6aOAbwUmYQcxy5NuzvCnmbHCHg4uAxzuXjjbWpla%2BUNQF4Sl9nU7hrusi8svc6FB6mHl23lZK3tRzuvMplWnqBTq7xJMbPL9qmI%2FxmGyALPnaKyaHBTI%2FtWMUVMmiLErVzP%2Bsip5ZfRFZwUXMiLHgy8Awr67fL6OP17sLdE04RL36Eqovsv86u16EAGEpHzaDsvA5Ches4uBEWiymyJ6yK1PghM%2Fxe3tAGqGAgC83gODXg58N5s11W81S7WBr1FtYnvnyod0TEspklmShAs84AXG9031zDgrbHBBjqkATVYb7Cs3hj%2ByOdn0Pes2UoQYHAQCeykwywzFezVyJJ3xBe5XlZLfmgYE5xWdNtlEEIWHS0RrjAAW79bZS4rRRQZXdaXL%2BMKeycD0Vi1J9UUhTJxxr4rDQaYsWNgcDiPlSiT9z5X9k9yk9y6jPw4Pi0WsTX1JYz9PFUVaiVmoKkjZlpjHq4QAmSUw3p%2BZNY6v0pfq0zdSBeaUiofX1uO%2BaUtdGF4&X-Amz-Signature=3264325eeb53ca15f5c28969c7f99511f47670553d65ad597439d6a63dc6444d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
