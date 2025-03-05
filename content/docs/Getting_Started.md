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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTBHI27%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSf8wtuOym1mOjURfsbNDsiCo2KYnpm%2B5O9OoiDFWdAiA%2B5kP5QVA0CR9vsTnTV5aPs%2FtXs90nhpreL4YuXB0W8CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0ARDQhtjnM%2FkNxjKtwDOH4BzHvNLM24ySi1s8ZuGtSrHjcmCIxdCZxyBgBJbdrwaNnanfQ88HNc6elSsn4kpqF8afndmQYNdZKfpAMlxnii3SHEUCzTjOhCmWRnTtHQwZV9%2ByaWK5rFAweaDxVjCFv3w1mObeGIeVZ8yAmno3UgJN6Y7GANATvD28Rr9nHpjHyrgtYsrh0bPAaldeXYBIGRmW%2BnBc7GSrmJq6S4ePYb7au6GOsSfUAW65d49lmcsQug0aEBatCpg%2BUYArV5tbuUlKoBlF3wZBkq6vLGF49qB3MDh9V5DLwVA3kla79ns75%2FwgX8a6BK9dcj93tRsamR3AW8OPLkR04ncGdWoJfMjrs6BGxdGbOcj%2BOWVrmpjTkR8FjmAs6S0Mig6XDrieb3XNmTDOI1Xr%2FisyzT08j5jbBIgZxAsEaaVcAxl9TD5iEZu%2FVqTR%2FEi5o1UuxtNHu66xVqmFXsgYT9nnygeoLtlc3fp4qKWtWx4Yr0eSUt1Aey8EVv6PeDt8vivDyRkNCbOYkH19cQsNNKI9LxunYvrQ2PfPQ6IDQEEfCco8LWIEXAL3aVAngEOXdY7AXZNx4kPyRvhDYsuX6htWG5AOjbdoWd67NA1bc9sx0E8fb04uUUdIYr5vS3CAgwvqifvgY6pgHzwGWFKz6LBcOdK6CIIcZILLPilKqCNZIyI26rGY9QJpvjO6RHs3qWVzu50yJ3%2B7wxu%2FN8JvUx7jk%2BALw67tyoHTU0vAsPoVzr7e2fUQkfli6BhrdDEZRpDuh0%2FEIXwt%2FP6SIr2Z5libfUHU7nQ1nHwbg7dBgJFT4nYJw4mpSFwK6d1ckGsOiPRGMdAkFealke9bGk1wwSeLMmUr5reIEHeHlNFLN5&X-Amz-Signature=2b5334373161ca82236aad22b4f5d136c62a9ac601c2c022f1167829f48ff7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTBHI27%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSf8wtuOym1mOjURfsbNDsiCo2KYnpm%2B5O9OoiDFWdAiA%2B5kP5QVA0CR9vsTnTV5aPs%2FtXs90nhpreL4YuXB0W8CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0ARDQhtjnM%2FkNxjKtwDOH4BzHvNLM24ySi1s8ZuGtSrHjcmCIxdCZxyBgBJbdrwaNnanfQ88HNc6elSsn4kpqF8afndmQYNdZKfpAMlxnii3SHEUCzTjOhCmWRnTtHQwZV9%2ByaWK5rFAweaDxVjCFv3w1mObeGIeVZ8yAmno3UgJN6Y7GANATvD28Rr9nHpjHyrgtYsrh0bPAaldeXYBIGRmW%2BnBc7GSrmJq6S4ePYb7au6GOsSfUAW65d49lmcsQug0aEBatCpg%2BUYArV5tbuUlKoBlF3wZBkq6vLGF49qB3MDh9V5DLwVA3kla79ns75%2FwgX8a6BK9dcj93tRsamR3AW8OPLkR04ncGdWoJfMjrs6BGxdGbOcj%2BOWVrmpjTkR8FjmAs6S0Mig6XDrieb3XNmTDOI1Xr%2FisyzT08j5jbBIgZxAsEaaVcAxl9TD5iEZu%2FVqTR%2FEi5o1UuxtNHu66xVqmFXsgYT9nnygeoLtlc3fp4qKWtWx4Yr0eSUt1Aey8EVv6PeDt8vivDyRkNCbOYkH19cQsNNKI9LxunYvrQ2PfPQ6IDQEEfCco8LWIEXAL3aVAngEOXdY7AXZNx4kPyRvhDYsuX6htWG5AOjbdoWd67NA1bc9sx0E8fb04uUUdIYr5vS3CAgwvqifvgY6pgHzwGWFKz6LBcOdK6CIIcZILLPilKqCNZIyI26rGY9QJpvjO6RHs3qWVzu50yJ3%2B7wxu%2FN8JvUx7jk%2BALw67tyoHTU0vAsPoVzr7e2fUQkfli6BhrdDEZRpDuh0%2FEIXwt%2FP6SIr2Z5libfUHU7nQ1nHwbg7dBgJFT4nYJw4mpSFwK6d1ckGsOiPRGMdAkFealke9bGk1wwSeLMmUr5reIEHeHlNFLN5&X-Amz-Signature=6d9d20d68e499c27d9394551f2076aace9c58382424119bf28cda6e76b3df1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PU6Y4WO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzOv5euok2%2BrN3WqPyboxQQsKEX3dpsZ0XqixGtxSNBAIhAJa2WlEMUH3qvwapOIYPFBhbzT5d%2FI4p%2BKSw3qUNx%2F%2FtKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyrem5NdhV1W2ESZAq3APK%2BamXRrzhtQVXTpiofAFAqIMMJIdaxhTrKxOP4AZHCDqXyZ4V35gsy57rVqXISUzwsXZ4RjveVhw1aFnGT59PYPlWdWbQUVBt8TSmAgYnF5y9YeMaYMRZWXE%2FKLj489O1vFNrVHTYVk16JCPk2MhjgjsWrDUCRRTv3lz4PETf8c5O9ecom1AE2nhdKaFNFi6XjZ1dYAUSloNRl4K8SafUw0YLLdiaGEN7QnE%2BxAevIjGeI3eKUzljl10NDohDBZn6lrS1o%2FrfgzgFndUVbQp7qJd6HwPVmpbdCsQ0lQfJoqqkvvVXsUsObEdggiSdN9YAgJ0RstDuqItFnB17EKkEQu%2B%2Faks6lhzE51XsjDtUY4ai6fySodKNgjMcbFUSnvT9huIfpzINkBka0ON6p%2BtOj31c2w1uMp8vD3g4M5R4rOklCF%2BqKxnbvqc8yZ8rA%2FxEqaKXb%2FPT0%2BxRZWmQ4%2FRTDfdMVgbuOs3yhxv9%2BmEuz%2FnQ5bgmZVVxGObGR%2F%2F9mhbkVNtUm4lSYTtrsuo%2F8hIB0tyhTdyaGk8kX8%2B%2FaMi9ROi%2FpwExr4wCdMB3u3SfF414ekkty1ldU7UgJHAWQLuCiIWqCJrRcYW1REodgywlwjch2u%2F7UU654PvY6zC%2BqJ%2B%2BBjqkAZ3dxjLB9ilxYlk4q7G0opRs8fmgLLiHw3CIShCQrGJCkv7vC%2FaG0m9EtN2hc5MkAAVaKsUT%2B%2BZbKyiGU1ya0b%2FR%2BVyGsHnC9EME%2FlKGdc4Zd9PdegpfVMuOhG6gcl88%2BHcp2cmXb56SERGFrLuweIMdKl7V%2FueAZRjzQGtBQxVp2M7w8Lz7s1GcryHON8JfBBXkuOU1YLwutYJ4lbRk6IOLdceP&X-Amz-Signature=09441e17ae2f862f4ddc9193e19354c70299f1ce78cac009db8862125ba22745&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4KIDKO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZe41FJPxz3pzYfhHsH3zMoEpvhTPtLRbbv1H7k1X1JAiEAhAkHBEq3z3013S%2FClUdBcsuGm4Iq76WWys1njLZkTfQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSdfkAnLgV1fiBW2SrcAytDYMNUdBGt%2F61fgIgxQ5DNV%2BrHdsvY9ax2JwnWUinDfwczx9GAYcXxxOBBHq5dau2viY9Xbqn3nx0modcfT9JSUoIP6s5AHog9bXeTOMn%2F6HPzn2A%2FKtAkNsM0JDEBSnbQquXULKc7eEWh1BK0Xua%2Fo15Xr4DH%2FHGeL%2BojnIArzKRfJ6Pubx09WfB4ZltBrpQVYNN3o%2Fn4GWCvjxVR6NDmHoGvuNFVYcbVnhGVs%2Bkgu%2FkcRUx5KSt3UUwCxxt67Tky3EKDWxaiRNQFMqMueo2kU%2FYzOVscRTc9liPNAeTLhML4ytfE%2FGoJ4tv%2BfjDWCvGN0Oug2eoY56GPwjhizlGkWHEMobTDs5kacgIFM0dbTJiNefjhdLkPd%2B%2FJqcY6hWUUitepaqAdyvJSveBj2XnxCEe65OAg0QNEkzYBB5D1cLriFcNz9um7R%2F9pLFDkgVgfPucM3tAl1F%2BrqV6EVVq59b0ym26fqkpH6tCr9ls%2Bg2qBsJ6sLOs3vVtJvzHfdABj9OskxAeaWUrUOMO0d5lk3l9T9c1TVDqy3MGiTAeYLznS%2FQsz3TBIcS%2BMlWVZ%2BxMT8%2FF%2FLJlcGnSeXQdZvjQYfGmz3HABtUJShS3o5VDDNxEWVyW9cllRbMScMLWpn74GOqUBBUeRCTt4Y6tg2K0zFqocqTNfOhxzKoIZQ2EEXd%2FNUwYGANumNSsPYLgjIYAjWBA8ZUK9DQWYfXzR1AKN%2BKfYhwx%2F864gFw7kU9dvtmfebp46mHRzwbMs28exswsv9CMfb7voipoGm9DlgEv%2Fx5Ri%2BIWRP0AsXjz2CvTkqULDvWgGxLSVKEDkpcMZMTnK1GPPIS60v07Hbd8lWJ1IMbVIeNyCzthd&X-Amz-Signature=7d44660f208dd68e4213e527915b2f753d5ea43cb7abe9aeb02a7079a9de64ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHTBHI27%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKSf8wtuOym1mOjURfsbNDsiCo2KYnpm%2B5O9OoiDFWdAiA%2B5kP5QVA0CR9vsTnTV5aPs%2FtXs90nhpreL4YuXB0W8CqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0ARDQhtjnM%2FkNxjKtwDOH4BzHvNLM24ySi1s8ZuGtSrHjcmCIxdCZxyBgBJbdrwaNnanfQ88HNc6elSsn4kpqF8afndmQYNdZKfpAMlxnii3SHEUCzTjOhCmWRnTtHQwZV9%2ByaWK5rFAweaDxVjCFv3w1mObeGIeVZ8yAmno3UgJN6Y7GANATvD28Rr9nHpjHyrgtYsrh0bPAaldeXYBIGRmW%2BnBc7GSrmJq6S4ePYb7au6GOsSfUAW65d49lmcsQug0aEBatCpg%2BUYArV5tbuUlKoBlF3wZBkq6vLGF49qB3MDh9V5DLwVA3kla79ns75%2FwgX8a6BK9dcj93tRsamR3AW8OPLkR04ncGdWoJfMjrs6BGxdGbOcj%2BOWVrmpjTkR8FjmAs6S0Mig6XDrieb3XNmTDOI1Xr%2FisyzT08j5jbBIgZxAsEaaVcAxl9TD5iEZu%2FVqTR%2FEi5o1UuxtNHu66xVqmFXsgYT9nnygeoLtlc3fp4qKWtWx4Yr0eSUt1Aey8EVv6PeDt8vivDyRkNCbOYkH19cQsNNKI9LxunYvrQ2PfPQ6IDQEEfCco8LWIEXAL3aVAngEOXdY7AXZNx4kPyRvhDYsuX6htWG5AOjbdoWd67NA1bc9sx0E8fb04uUUdIYr5vS3CAgwvqifvgY6pgHzwGWFKz6LBcOdK6CIIcZILLPilKqCNZIyI26rGY9QJpvjO6RHs3qWVzu50yJ3%2B7wxu%2FN8JvUx7jk%2BALw67tyoHTU0vAsPoVzr7e2fUQkfli6BhrdDEZRpDuh0%2FEIXwt%2FP6SIr2Z5libfUHU7nQ1nHwbg7dBgJFT4nYJw4mpSFwK6d1ckGsOiPRGMdAkFealke9bGk1wwSeLMmUr5reIEHeHlNFLN5&X-Amz-Signature=9d853f2eee81b6fdf7c14f9e1dcd622544fa0377583acff2ad7ac51bec56c89e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
