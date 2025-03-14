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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVYNQL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUWkjf7RyIS8Ngytshzs9j1%2Bk4TPC6o2eNf%2BiW%2Fr2XEgIgH725x8sWoxdxOGy55yGYsuZfwPLK8ogcxQj26pmkD%2BsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9aZ9e%2BCPSW62tFzyrcA8Cf1PjpaqHRSD%2Fv5JsLTGqy693SMgMOKYZLf8ZHmZ822kpJ3Z9fr7lOFmFVIYX3uPpddVRMjD8rWwRB58wlZpRnEfz%2BaCB%2Bb128%2B%2FEJvvRvaydiVT7kU8iKrdhcGlwQ58Jy1ePm2RJyJbZEuaulPgBme2pW%2FxLVmF7L53HkS8iPMbkkyhKSXHsMkaisOtp6HeWqjvukcU9bKtCKVBlg7FxChWJO916tA83aUXbzy8Qyy6v%2BvbQQE%2BWCwUae3TT2SlLzvi50ym3LDE1VPiwwye7jGLaqot6AG1kLdoT8f639d3%2B3dIwRCY30uj4nqjU5e5PGQyGQ7v3u7aqojuWo7lSi3aHXfBhc0%2FZjOGBfXAtbV5kv7FvHRRAWP%2FGwfFkeyKfgVv4eHCyNMUCqzoPUM1N%2BVVaWJ21eX45fWugnaBdlxPUyqHshbn7sAIJLDSKBRmoB0FTb0gfEdxxOzm%2FhDxR%2BCb51P1aOMwwgafqNQcyFmlzOj9eoYirzjysJUm5JryuL%2BLR4wY9CIR8wRRqw8RSaTV4BNSXl9Iayszcn4VFMdpSh1B40JbqRBaQ34mSnUMSMSZBwCmmJF3UsbZaIbecZxKYF9Xe8z9M2EwnucCqZ370Fy8YsaTcCUOYBMM7Gz74GOqUB0KkX1PNbn%2FBFZKFiF9qhBKub5Jjhx%2Fi5ZSD3cwr2WjN9h%2FaZyXGv6OXiHl0BkD%2FB378od2gwyLfQwsB6w120aWM%2FFQZBgubGv6QUCM%2Bhcr%2B3sVJxadcs8cqrx2QcQcGR05wAQrCU0rSXZmATirj%2F7Fo0Vou0duNY8YXyDn%2Fr%2Ff6g%2BHOCYgOSyPvmKQKFunfRaShFLZ%2Bu2iIA37z85AR9%2BD3zIO77&X-Amz-Signature=145bad5d35520160e147f96c59c778b5a573422d9438f2823895e35731c84ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVYNQL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUWkjf7RyIS8Ngytshzs9j1%2Bk4TPC6o2eNf%2BiW%2Fr2XEgIgH725x8sWoxdxOGy55yGYsuZfwPLK8ogcxQj26pmkD%2BsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9aZ9e%2BCPSW62tFzyrcA8Cf1PjpaqHRSD%2Fv5JsLTGqy693SMgMOKYZLf8ZHmZ822kpJ3Z9fr7lOFmFVIYX3uPpddVRMjD8rWwRB58wlZpRnEfz%2BaCB%2Bb128%2B%2FEJvvRvaydiVT7kU8iKrdhcGlwQ58Jy1ePm2RJyJbZEuaulPgBme2pW%2FxLVmF7L53HkS8iPMbkkyhKSXHsMkaisOtp6HeWqjvukcU9bKtCKVBlg7FxChWJO916tA83aUXbzy8Qyy6v%2BvbQQE%2BWCwUae3TT2SlLzvi50ym3LDE1VPiwwye7jGLaqot6AG1kLdoT8f639d3%2B3dIwRCY30uj4nqjU5e5PGQyGQ7v3u7aqojuWo7lSi3aHXfBhc0%2FZjOGBfXAtbV5kv7FvHRRAWP%2FGwfFkeyKfgVv4eHCyNMUCqzoPUM1N%2BVVaWJ21eX45fWugnaBdlxPUyqHshbn7sAIJLDSKBRmoB0FTb0gfEdxxOzm%2FhDxR%2BCb51P1aOMwwgafqNQcyFmlzOj9eoYirzjysJUm5JryuL%2BLR4wY9CIR8wRRqw8RSaTV4BNSXl9Iayszcn4VFMdpSh1B40JbqRBaQ34mSnUMSMSZBwCmmJF3UsbZaIbecZxKYF9Xe8z9M2EwnucCqZ370Fy8YsaTcCUOYBMM7Gz74GOqUB0KkX1PNbn%2FBFZKFiF9qhBKub5Jjhx%2Fi5ZSD3cwr2WjN9h%2FaZyXGv6OXiHl0BkD%2FB378od2gwyLfQwsB6w120aWM%2FFQZBgubGv6QUCM%2Bhcr%2B3sVJxadcs8cqrx2QcQcGR05wAQrCU0rSXZmATirj%2F7Fo0Vou0duNY8YXyDn%2Fr%2Ff6g%2BHOCYgOSyPvmKQKFunfRaShFLZ%2Bu2iIA37z85AR9%2BD3zIO77&X-Amz-Signature=3a6b3de1068c32d011492628ee6154f73ee1bbc2d7f047fa9bdbfe08aec4c1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AJ3ZDVW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhhxv27mBMHjkt7GNM9EIVd71rCyYq3od5ay9MJq9fVAiA%2F%2Fwa8n%2BgBCQ5zTwqnLg2%2By2FQjRh95cvKAvKTz2FrXSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnV18aw0Hl18De7JPKtwDqLNjFelDgkbk5SDOj39%2FHoZHT6n45t7MCZL1sMImsM0eT%2Bx8QSXTB4GSWzoc%2Fkl7uJUmZby7SHAZpeem4tuxPkozZjN0%2Bg6tPJy1EFNRXg0owZxprFC9UPAu95BqeONZhl9wlVEXmIEapXC7LdDLvQxj36qeaJGH8Kl3%2BGpzkLLHMDcoq5C05CtzaoXJLiQOnJXnhkOHIKicKJdlCiWCBzFLv5o8mh%2FSdZoMFWRMhD02m%2FlM3NWMFgtUuGSgwGqyPApS%2FILPEDn%2Bv%2FppIoI59vgRwtWtltEMMHxv5URKQlENA%2FdSngKXc6%2BSXg4%2FOYh6yLpiCMFiCii9uBwk0ZkEE0ezsC3h1jxIAML43wr0a3I4efX%2B%2F10ynZZ3id2%2Fxj9NnaKdwxOtKMDj6ofirnDlp%2FT3876gME8z95v2OEz7qdBXd08G2psBqxSE9vGISNvWy51VcLZWegEGJPlzA%2FiMXBitEJDcvIzmD5vi9yCGdVV8unY4uOeuJ2njva9Q%2FSMG353T%2BZWVJb7RlGHMqtFpE8LYBOyBJQDjuvtGW%2FXf7VETH1gV34oDrYLHcY%2Bd26wAqiFs1lbk%2FwJqHZ3%2BCJJi6Dos4GvtZ%2BULJF7Pa99gusZdaglRfGQlrW0vb6gwwMXPvgY6pgEDaRX9fw6XwP3nrsfGV0uV21cScpyBtnCRwFLEkRaSsceggmEW%2BiGSX2KZ1nuQD%2FVx3EjQrXjeFKQJ6MvqoQOGQ0xad4oXV%2FjcKDVfvb%2FnkBwzhsMyWgpbjgJWt6w84BHAgIwmn6vQ2XD%2FT0sOmlX1ZOzmh%2BlpDbnywLXswdc3YjmISvv7yUrjVVOtOzKLQysPa2XqJqc3wEVliULbXFntKxUa37K5&X-Amz-Signature=f6a172b0cd35a91a1d0c1a1266e975e1b76bd8ddbce0390a5b371997f9864e78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7VZN2M%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKLCxTP7I4XcC3lCyQCDqj4sTsfJ9O94uLt32oZII8tAIgO4NV7ETpWoXEZ7YPALWg6fH3803mkpSpuwBMvHX%2FlwYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFhePJ3px1wzV5GOCrcAzBN%2BkMpuppgdXsIHDMcKsn6eDMuP1k5jhbZw%2FXoIbVR6V3XTryanKVLKlFszEEp%2F67LxGUBPvOQim7oZMn8ss1DheKuEGgb02Wwo0Qgsc0Wn86qJjPTF9GLg%2Bi%2BJSjwn77LK6Pm%2FNNAidrFhbks1uPStpcHTm7yuyuj0ZwGHgTUdmBE8Kfwi4ozdxf0Imy6sYVDwKAszD1wLq6mmxpyfmuIel7bHm0%2B9ATclOwX5zv7MBvMZj25Ipz8dhZWQpXkWgUg%2Fx4HOqpYimJKgDPSfbxKosPwkkvqTdkSe2fEClATTolFs0uTc6%2FLZ9qLByn%2FZgL5ovzDsqeUIIzjlYigPyrKcNUTDbZjKFNz%2F%2BgwYrX1SOYrXokiEv%2Bna%2BDHHg%2FbRAP%2FIBlzRnTKkSrdZlgxqi2vLsA9zQv2ZuphO4i0CgB4r6M20a%2F09CnYs8DbzudtfwdSJsnwDzjKxVjOIzGX%2B94bjnR%2Fy6NA3Iun%2BPx3US8i9KMIqYRVsB11NSIGXMXjB58BneGD3BYQaOUZNRnCICY6DCGpzHEgHKkWcy%2BjQegTXORrGPlUtG6Axhh6mAiMba%2FLel3WfUdz6wWRIUlPhA%2B9i7Oj5lp5PSZ8Heg8exxMJV8AA1GDGIEn2EBaMIbPz74GOqUBMHy%2BYyE8vfTxPHgqGfpYpIC5YvPgKpszv9hGtvjgiOCxb9AfvDunutgHQzmIPEc7x1Q9jtdgpi1k%2BFdtEE5FWL9JRwo5hWyjBWKIxBvSZZr%2BNQ9Wg1r0lqqwL%2FyJG%2B8%2B7onabDLl3W0KYL52vonaiUacb74JxkQ4W52NWNPfH80vklRyfzZnqltmdQVo%2BY6nu3Rbun0mn89zMI6kB%2F1wzI5757En&X-Amz-Signature=be57027357c60d49e9c066402d506287d7dec7a8265e4efa6e71709a19efe4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVYNQL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUWkjf7RyIS8Ngytshzs9j1%2Bk4TPC6o2eNf%2BiW%2Fr2XEgIgH725x8sWoxdxOGy55yGYsuZfwPLK8ogcxQj26pmkD%2BsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9aZ9e%2BCPSW62tFzyrcA8Cf1PjpaqHRSD%2Fv5JsLTGqy693SMgMOKYZLf8ZHmZ822kpJ3Z9fr7lOFmFVIYX3uPpddVRMjD8rWwRB58wlZpRnEfz%2BaCB%2Bb128%2B%2FEJvvRvaydiVT7kU8iKrdhcGlwQ58Jy1ePm2RJyJbZEuaulPgBme2pW%2FxLVmF7L53HkS8iPMbkkyhKSXHsMkaisOtp6HeWqjvukcU9bKtCKVBlg7FxChWJO916tA83aUXbzy8Qyy6v%2BvbQQE%2BWCwUae3TT2SlLzvi50ym3LDE1VPiwwye7jGLaqot6AG1kLdoT8f639d3%2B3dIwRCY30uj4nqjU5e5PGQyGQ7v3u7aqojuWo7lSi3aHXfBhc0%2FZjOGBfXAtbV5kv7FvHRRAWP%2FGwfFkeyKfgVv4eHCyNMUCqzoPUM1N%2BVVaWJ21eX45fWugnaBdlxPUyqHshbn7sAIJLDSKBRmoB0FTb0gfEdxxOzm%2FhDxR%2BCb51P1aOMwwgafqNQcyFmlzOj9eoYirzjysJUm5JryuL%2BLR4wY9CIR8wRRqw8RSaTV4BNSXl9Iayszcn4VFMdpSh1B40JbqRBaQ34mSnUMSMSZBwCmmJF3UsbZaIbecZxKYF9Xe8z9M2EwnucCqZ370Fy8YsaTcCUOYBMM7Gz74GOqUB0KkX1PNbn%2FBFZKFiF9qhBKub5Jjhx%2Fi5ZSD3cwr2WjN9h%2FaZyXGv6OXiHl0BkD%2FB378od2gwyLfQwsB6w120aWM%2FFQZBgubGv6QUCM%2Bhcr%2B3sVJxadcs8cqrx2QcQcGR05wAQrCU0rSXZmATirj%2F7Fo0Vou0duNY8YXyDn%2Fr%2Ff6g%2BHOCYgOSyPvmKQKFunfRaShFLZ%2Bu2iIA37z85AR9%2BD3zIO77&X-Amz-Signature=bf5cb739e351d7c6dcb1d5a335ae23fe7279a4a9ad482cc8e85b0a14cad01c77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
