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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKBP3A%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftVtd1LW5zyjFRwI7kyP1rmaYCHriPF7muTSujcS9tAiB0oly0RtcMY3Dw19HTudYyAuDNI4RVmiQAvq29WvyNQCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMowCelSKskA23Z379KtwDQycfAc6DtcVkLOWPr%2BwPuCW9bbkwFUhbRb5qV564l6iCt0T6J2%2B8uUVpoc5ZH2bTc%2BkFmJK60xvRav%2B5ugOTnUPyBGg8vw2L6plO%2F6dkr4qYb13QSNDNwJqG6roUVfRUKdPy%2B6xeypsoUfO1Nc99H13rlqQoujmJ3MXPUwuwYzroKtMpDN3%2BR1RLvJMt40zrao%2Fi0Upn26ecuAmBMhRqkSjP4%2B%2Bust%2BoqCTtj3Ee1ksdd28h6rCPfDa%2BACHdBJur9YHRXJRg83PdfiTF29wkByA8FKVjGNThor%2B08ap6KD9glG16NCRcVMwk5ovGFAWYdzOspqQfaS4wDw4mN9XSquAWXfRh929xQJvNrcRirSvgVQZWr%2FxhPsga5GgVA2XkV%2BAt7dcmIaBTXnsOjCpCoQ3d3XW1vq3w9jnEPMnJXjRIfMWqeUoL0bnfqv73aSIVIVbT27ws5OKp0TuzbIymXURJMwPBuFKYxG9mDjIhfV%2FLA900JjlRLOX74m%2BQNIw6QwjYiMSfp9qs1vv3Vl%2FxBcj%2F3UFtAOgLDZK7hsdJNg1XJx%2Fdg9TJF3QX8wfhDEqJkFeZn2U9rZiVdAPBxEnxI0v05DVWXmFPXkUSi3fjmmy4WiyHOWNdQ0jHFk8w6au5vQY6pgFdIZe8ScbwNBbXYAM7Wil9v9le252F6YmFv1HiX24xDQCOwRPUCyYxS4Qh5frYUXEQHBOmNIl%2BM5ojq5%2Fyxxxi99uNJ9d%2FYc2TT22JU6gqUy0dpB4YQjwoFoXeK5afBTkwtcRXODDovk%2B%2FkHeO9wtsO5Vpt2ecjY1s3IMJxQNz15Ih8iT0Z0saMm%2FuBmV3ex1TGJ4HxiX4xFnNn57ATtekGs%2F%2B2bwY&X-Amz-Signature=44127b002331463e897cf55bf2907b1f7cb56ddaac4fa33b8defec1a0ff20da0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKBP3A%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftVtd1LW5zyjFRwI7kyP1rmaYCHriPF7muTSujcS9tAiB0oly0RtcMY3Dw19HTudYyAuDNI4RVmiQAvq29WvyNQCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMowCelSKskA23Z379KtwDQycfAc6DtcVkLOWPr%2BwPuCW9bbkwFUhbRb5qV564l6iCt0T6J2%2B8uUVpoc5ZH2bTc%2BkFmJK60xvRav%2B5ugOTnUPyBGg8vw2L6plO%2F6dkr4qYb13QSNDNwJqG6roUVfRUKdPy%2B6xeypsoUfO1Nc99H13rlqQoujmJ3MXPUwuwYzroKtMpDN3%2BR1RLvJMt40zrao%2Fi0Upn26ecuAmBMhRqkSjP4%2B%2Bust%2BoqCTtj3Ee1ksdd28h6rCPfDa%2BACHdBJur9YHRXJRg83PdfiTF29wkByA8FKVjGNThor%2B08ap6KD9glG16NCRcVMwk5ovGFAWYdzOspqQfaS4wDw4mN9XSquAWXfRh929xQJvNrcRirSvgVQZWr%2FxhPsga5GgVA2XkV%2BAt7dcmIaBTXnsOjCpCoQ3d3XW1vq3w9jnEPMnJXjRIfMWqeUoL0bnfqv73aSIVIVbT27ws5OKp0TuzbIymXURJMwPBuFKYxG9mDjIhfV%2FLA900JjlRLOX74m%2BQNIw6QwjYiMSfp9qs1vv3Vl%2FxBcj%2F3UFtAOgLDZK7hsdJNg1XJx%2Fdg9TJF3QX8wfhDEqJkFeZn2U9rZiVdAPBxEnxI0v05DVWXmFPXkUSi3fjmmy4WiyHOWNdQ0jHFk8w6au5vQY6pgFdIZe8ScbwNBbXYAM7Wil9v9le252F6YmFv1HiX24xDQCOwRPUCyYxS4Qh5frYUXEQHBOmNIl%2BM5ojq5%2Fyxxxi99uNJ9d%2FYc2TT22JU6gqUy0dpB4YQjwoFoXeK5afBTkwtcRXODDovk%2B%2FkHeO9wtsO5Vpt2ecjY1s3IMJxQNz15Ih8iT0Z0saMm%2FuBmV3ex1TGJ4HxiX4xFnNn57ATtekGs%2F%2B2bwY&X-Amz-Signature=c9428d7dd50d8f29be98e8bd54e9843814e57f78fe492ec4e60758c5cbc44f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPEV2MJJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDauRgt3%2FwOudGAKUiCzhkyFCnnFna%2FjHU7spSmQ2HC8gIhAL79JPt254hNEkrNr7LXgiISN1vohKUxlvX4CO%2BJwOVdKv8DCB4QABoMNjM3NDIzMTgzODA1Igxd%2Bzq7ImCDrZa1wXQq3APs3Jj%2FYV%2FVLzDKjR0dtrWUpFYrXf3yUOK5cRWXs7tgGCMoRDG3ZYAaL%2F%2FhM2%2F%2B4hOIkswmZ162Zr%2FcVD5CWM2b3OLLLIZuTjaxqEJ7eJE1Bo%2BmiLDqZgZFHcXGuLqxc5vdxoRbBBOt0UK2Gsyv4KQjZ%2FIhT%2FcSJW5RwlChH%2F7R2vTCwqxbaB%2FgFST%2FAlUHZ%2Bozhxctx6T8BUlaIQcC20S7SgmcMFJW%2FzjXScOBnarMA98FHB3pM1eMRVY5i5SDuTTyffw6HmdlUrkgqbU06orzSLfTS6ZUhbXHjcSz7lopwY1R3JpSQLXuK%2BPqrafOEYFQ649y4rHNhrxxDRUiFd8%2BEW9wS%2Fo3bE50yYXWG4S4ZaM3wfTl8F8qnMCK5mE1fnMw%2Fg9EQqm0c6Vsts1cxg1K7f4dmqQ4q7hkgdILnZ9ADMm0m9Y8cEOEw9Q6%2BGAmsEVFQOADqFME5YHJiRGB3n%2BXHIdDvDrAwlDVaeMUhZ%2Beaoma9%2BTT68INvc0VA%2F8Y%2B%2Bo9GmlIkTqLcorKtP4unqI9wdsdwum3wUCC4vAiWG17gVyIDbgj%2BrsWfaIm690a2O51cEsbAlV7LmHyk0%2BxZ60mdOfDcFCLqkkJis23qU2yEq%2FpnJnh%2BaiLQVgbHDC0rLm9BjqkAUJ61r8iaW1rW4QdQyIpDHOzk33L%2B25c8F%2FNHf7N7aADqBgxamVT0FWg8W7b2W6GXMqB7Adl7w1jmZNLxU1sCEIZV7AYP7AROpatvp6BA%2FuycEAsBBld6k4rxP9REivi16%2BYPTs7Tzrjx1t0fS8eMyLWPUvL7Y73GLLFQD8roxy9AA83eMNJl3IUPc793DNF5JwRrvau7omo5qcInWAoAXCOr2JE&X-Amz-Signature=822843f90ab390211eda73286ea26d1a47dc52e6247704d2542456b39ea7ffca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HSZBHXR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPI35ddBBDzXWAuVB1fQNHtNoeoB%2Fb%2FYF2FFtvFwSyhAiEAwTCuidxwoTDECkz%2Fc8lxx58Nm6xDO2rEB8tZ9vkaF0kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFjbfw%2BFUsC%2BIOUjQircA2TO1rDENZwMaQgIi8GhFOCmr5dUIx%2Fc5xBkZeoG2FANASNSWa3vstNXFCrgurJhP19KB2kqPlEW3CB9Y7AI5QbZ431JF0f3Z3e94N2DEbyw3Ec2T1tv0XYj3Nih1Gqed8fReZEpFdFpWw7JMb4EWm8P9VDvfNfG5H3ZYAlrkeK76kSt7a6ca8BxtO0HGlMPvtnwyL8MkH4SKfnzZEysnsxnlageZ3%2FR4i0B2qUklDNcuiOupEGzXHMma3xYLc4G%2BieyEmTInFIR%2B%2BBBNXXOH4k%2FjCYMtQHusOYfo4t4i%2BNu90iDLYvQxUNNU8l2CcV9drcg3kBk90bmAeeee%2BkHnxArUnvVzPGcSnp5%2FZZh75v32K%2FxgYxwoEA%2BUJJeWuLGWaGXzIeGHE3yAV41rzvMKLjKtUdMue6KOMn%2B0K2CyK0bdA2%2FQrwqJiEjEpfDL62xjCe4hjNS7wzH5tn7THH%2FJYE3xH6ULPXr%2FUd%2FOuh55%2BUEOdo%2Biw%2F0uod4dpCWWNKfZKRfhg0s%2F6QZcqPP82nxCwUjMh7TZPNF3wkUbRKH5XIxmGiTbj1rfeDy0VYqNkt24TkRRzeS4t0sqaoVo17CQv0rH1XAcs5w36UAT9pB4gW4MCr0GQzGlR4wCuEsMKmsub0GOqUBI2vnFbF4L6PVj%2BCjP09iHveREMuQeY26SjTkU18Yi%2B%2FeeWK2dW0cUyhmY4Fwz9n%2FPID8zdXNOKRha5%2BYQgFBa41Bnl4xg1avrxUQvuHzHin6GvvJz0YPhMGzjxIEuz5joDj5sPcRkXuPTHNOImedYdqNJTtgtkucjSO%2FeMSUbtpxTEAVysn8Ci0%2FvCIv2MTk%2F%2FjZaVVqt6fncqnhbe%2BnWHjgsXbp&X-Amz-Signature=55890dbe97116d108a94eb2400cc309af76f946c2739d3eefea609f817c2c920&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIKBP3A%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftVtd1LW5zyjFRwI7kyP1rmaYCHriPF7muTSujcS9tAiB0oly0RtcMY3Dw19HTudYyAuDNI4RVmiQAvq29WvyNQCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMowCelSKskA23Z379KtwDQycfAc6DtcVkLOWPr%2BwPuCW9bbkwFUhbRb5qV564l6iCt0T6J2%2B8uUVpoc5ZH2bTc%2BkFmJK60xvRav%2B5ugOTnUPyBGg8vw2L6plO%2F6dkr4qYb13QSNDNwJqG6roUVfRUKdPy%2B6xeypsoUfO1Nc99H13rlqQoujmJ3MXPUwuwYzroKtMpDN3%2BR1RLvJMt40zrao%2Fi0Upn26ecuAmBMhRqkSjP4%2B%2Bust%2BoqCTtj3Ee1ksdd28h6rCPfDa%2BACHdBJur9YHRXJRg83PdfiTF29wkByA8FKVjGNThor%2B08ap6KD9glG16NCRcVMwk5ovGFAWYdzOspqQfaS4wDw4mN9XSquAWXfRh929xQJvNrcRirSvgVQZWr%2FxhPsga5GgVA2XkV%2BAt7dcmIaBTXnsOjCpCoQ3d3XW1vq3w9jnEPMnJXjRIfMWqeUoL0bnfqv73aSIVIVbT27ws5OKp0TuzbIymXURJMwPBuFKYxG9mDjIhfV%2FLA900JjlRLOX74m%2BQNIw6QwjYiMSfp9qs1vv3Vl%2FxBcj%2F3UFtAOgLDZK7hsdJNg1XJx%2Fdg9TJF3QX8wfhDEqJkFeZn2U9rZiVdAPBxEnxI0v05DVWXmFPXkUSi3fjmmy4WiyHOWNdQ0jHFk8w6au5vQY6pgFdIZe8ScbwNBbXYAM7Wil9v9le252F6YmFv1HiX24xDQCOwRPUCyYxS4Qh5frYUXEQHBOmNIl%2BM5ojq5%2Fyxxxi99uNJ9d%2FYc2TT22JU6gqUy0dpB4YQjwoFoXeK5afBTkwtcRXODDovk%2B%2FkHeO9wtsO5Vpt2ecjY1s3IMJxQNz15Ih8iT0Z0saMm%2FuBmV3ex1TGJ4HxiX4xFnNn57ATtekGs%2F%2B2bwY&X-Amz-Signature=c34a420764f9bb87fe3e3b7925a78571c6037ef900fdd3117c1afb5106287843&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
