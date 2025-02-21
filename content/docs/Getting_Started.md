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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CZT6DA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSyn%2BTVIdvRQRrXuSa%2BPm9QYPHJj61EIgeLOCXh94MBgIgCcRpxRkvtFaigEBw%2BMnU0wswlhnRvFF5P8rbjdTPnZMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnXO%2FJ%2FdyBGjTfD1CrcA6vrXxRCsfpEyjX1OWBg7%2BL3%2BHP8cwAMJF%2FUapHwea%2BX0pi%2FLyOWPalaZXllyrj70Av1PPokccSm6qu2uuyUk%2BKV8DlKKLIT6Cm9TwOC3xGFBQ6G1Yhl1Q4iuPwjqwAasn%2BLmKOfiKI8nM5dujKsPUiQuaUb5V8RKW%2B2P30S%2BuMR2SQaH2lzaFgfOZxU2uXImR9Nvnf1X2PU93Bw0ZoF6AJ2FGa%2F8QLJSqqJF7WbT%2BEYfe6OBsN03pj%2BCqwJGhF2nBSIUS5FpnhmEMektzGlnBYqFjmMRVKPK%2BHTa3eFFjcqhOkRsJilD4wQyoRVUiRyeNfjCpSxCEuZnYgkLDDne2A9MhcMkhhFj2HXTyWlX4BpktiCLuLgHbnEHEnKzQheKIYrlPPWYL6M0n%2F8nyDRFFVg08XOcWGytnt3EyW2UYttnu2EDwsA7P4hjlWlEdVG%2Bn423MTHdw0JmvYzA2f51IIaib8ydJ3rYP3737fYh1YkDm%2FoZVt%2Fxod%2B%2Ff4Et6G1FiGdK%2BWBJtQ7xJL%2FeHhJnetihCxS2bUZQGXNluRB3glD1A%2B8ZUuC3CO7z0O78vIUkQMwjz6BmF5XyKnpQInXCkE974hDeNjsfi9mnf%2B7sWPmImxmKlOJIjwRU75vMM7J4b0GOqUBXKyJORXVDrcMGBYxUvCa%2BmV%2Bu3WzJjfTVe2g2yQUg%2BisRNnW7eNeeDNPv9Yp3n1BPqeHmG3zgh23LxPjR9sUEam4TxZ6RwH79vlZccHhsbNYBPuizfVgBUx2oiMV%2FXv0mMV1vyIFpt2zdVGqspTXLPWLZmOmvv%2B12750CoXgAgCfLjLtgHwRjrbJj7JHYyuNuCbwDY4G7H2thOrHBOQzdtFsSUCE&X-Amz-Signature=56408cf7aafb99cf71ee7ce960f4fd6fc74e1c5b7e256f85db12fbda712ad7de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CZT6DA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSyn%2BTVIdvRQRrXuSa%2BPm9QYPHJj61EIgeLOCXh94MBgIgCcRpxRkvtFaigEBw%2BMnU0wswlhnRvFF5P8rbjdTPnZMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnXO%2FJ%2FdyBGjTfD1CrcA6vrXxRCsfpEyjX1OWBg7%2BL3%2BHP8cwAMJF%2FUapHwea%2BX0pi%2FLyOWPalaZXllyrj70Av1PPokccSm6qu2uuyUk%2BKV8DlKKLIT6Cm9TwOC3xGFBQ6G1Yhl1Q4iuPwjqwAasn%2BLmKOfiKI8nM5dujKsPUiQuaUb5V8RKW%2B2P30S%2BuMR2SQaH2lzaFgfOZxU2uXImR9Nvnf1X2PU93Bw0ZoF6AJ2FGa%2F8QLJSqqJF7WbT%2BEYfe6OBsN03pj%2BCqwJGhF2nBSIUS5FpnhmEMektzGlnBYqFjmMRVKPK%2BHTa3eFFjcqhOkRsJilD4wQyoRVUiRyeNfjCpSxCEuZnYgkLDDne2A9MhcMkhhFj2HXTyWlX4BpktiCLuLgHbnEHEnKzQheKIYrlPPWYL6M0n%2F8nyDRFFVg08XOcWGytnt3EyW2UYttnu2EDwsA7P4hjlWlEdVG%2Bn423MTHdw0JmvYzA2f51IIaib8ydJ3rYP3737fYh1YkDm%2FoZVt%2Fxod%2B%2Ff4Et6G1FiGdK%2BWBJtQ7xJL%2FeHhJnetihCxS2bUZQGXNluRB3glD1A%2B8ZUuC3CO7z0O78vIUkQMwjz6BmF5XyKnpQInXCkE974hDeNjsfi9mnf%2B7sWPmImxmKlOJIjwRU75vMM7J4b0GOqUBXKyJORXVDrcMGBYxUvCa%2BmV%2Bu3WzJjfTVe2g2yQUg%2BisRNnW7eNeeDNPv9Yp3n1BPqeHmG3zgh23LxPjR9sUEam4TxZ6RwH79vlZccHhsbNYBPuizfVgBUx2oiMV%2FXv0mMV1vyIFpt2zdVGqspTXLPWLZmOmvv%2B12750CoXgAgCfLjLtgHwRjrbJj7JHYyuNuCbwDY4G7H2thOrHBOQzdtFsSUCE&X-Amz-Signature=4d3d2746fa6f0f1cf52df5492301dab5cf2470fc7b7139a4221834d90be745de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLV7RGTM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTxT5XgVA2CB007LNa4kbyE8zLh8XSTjw1%2Fchid2exDAiEA9rlx9vkxa6UddLY%2FoD4QJqCgQYS2slItKtLXA7YAXx8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8q3ZX70lgs%2BM06ZSrcA0tHIT2jNoDUgfQ5Isk7aXTBUo3J3RE1elEUM5Z1mK8bxBUzfmiuAKJXKIPTtD0KB%2BRUvO75XCGc2fuFI%2B7pXmb%2B%2FsUUDhf0VjR6YRYPSe71%2BihHc4jZpbFNyW0VQMKgX34Y9r8AsxdPH7CguRpyVUHdwUNlV96ZThoVkM8XkOdLO6PeXx7j8EQRFwgPD%2FgJBq0Igq8romCC1GS7xVnZ4tENC7H0sAoxoEHPj%2FNNSF79cbIUdEIHMGg1BT5D%2BtQsy8k1r5le6CpC6%2F3Xh00G9CGteJYJWlyJvXHzqttKkTarLvkmEsXR3xlPIv1abEOkSW%2BzHPjp%2BCO86G73l1cMyflQsldXE8FniA%2FHTjlbXJv%2FB8nEyDkCZyAZkXwdxM1CsXwmlBVi5CbalOFwmVozM5gUMsJTAP8DWEn2355EmBbdXVCfMnIVKv8bOI4F8aiHimAtXPEc6iTvbZNusfeK%2BzrmVMW3L6%2BpBn6P1dvrbddF%2BB4Q6xBNIdU0CcnUTYx%2FSo5vUT0b4suP0qrU%2F9arNkydUJQ%2BseT7tDwpEpPPNwqe77MR%2F2LqksXtpYNiLgeIlxg6s4HUitObBii74XJWvZxW1Fzlli%2BgXudtw8CDViJercfBGV%2BJsyBOLMK7MMzJ4b0GOqUBsqeO71O7pSxzRtPVtjN3DDFtiPMUutFpXkBxs89OX01znEkrEB5aM8rCRj8%2BWCdzvc7sXZG0LMdBA62e9ZyMEkHUFWmt3E6f2NdY5IZSwZNRYycKqp%2BqxqphCye1hYmR2r5ordBWJ20FTKV6gBYENSv6ROsB6CcWhHMy99l4azrk%2FzX4b%2FB6%2B%2FrEPI9pkkAsAtPnXNYH1pMzcwDRVW5AD0bpTPm3&X-Amz-Signature=ab469e7b4856c36fccd11999a969252ab18f5219edd8df9f8094024630cbe0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MRQHRH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDocurxuNvYVTXXw5u%2BjKLX9s2nuCBNfGaUVvbNml59VAIhAMnYpqHJ3WMXKiTZtpPEmHC4HMsBUWxmsNuuYtpoQ2a%2BKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsEmBtFc8Fd2gHysMq3AOmVB2K8ZrDtUjj%2Fkb1qtmic2TTJ78zVwD9M3RmOhR92yySdWkvdcdqIwyYtvDneqP9cbt2J5uiwjBP0lDeXGVlJIohuoaNeXOwDxv%2Bf1vzX6f7w%2Bf1oyhJUD41brsZzK5odWLBxOBcrCZmKFVdGsTQDpZRnovVnUrQdRJcA8SZxECc1491%2BrXoBa0xYdXdAF3Wcqpl6SuQqx49IvcQOFdM9bqRqu3KqeT4MnyLImD1LGGfd8MIT4j2%2FVfEAS33TQTCGbl7872UykQ5M90JiohU4oWGXHSaVwZl%2B%2B%2FripgHcV4%2Bz1gkfUjYprdbmFQucyqOOdlxMYebFbg2nIwIly56vxktAf1OxjZ8YwiFF66IHnbGt9b67FvzK4fPqCoFY8vmDbfa%2BdbPJXDs9Zn%2B9oQCrKtalJGkgbatJwHEqhOYY%2FAqKFLfFJYojW5N5kzLGAMHSRy%2BfVWXHclRi07xkRfG1YPfcv9br%2FbM5Y8soPyByvOd1uRtTVBvrd9dI7DdYTMhoWja7bwalN11RNSLDuKPp096jDvLhThywa5RLGj9M%2FFFLjAQY4pOfCtvQw2dexYMfwJOhNKZuTqE0khMABdhNw3uwhfv8QCJQTzPjfq4dZx6kIIvE05SA7SAxTChyeG9BjqkAUTm6TfUBdHMEoN96hhxmTn%2Ft7pFLVWjIML4BnJuzcxpek3Et0mAhzjpMR8g1kC39IoTkbCJ0ezmedgZFlfnSyroxUvadCly3At%2BMUbVXHxcx9s2V%2F%2FtcYDcRUd1zVBFd2UErSVniiERjfHlDJ02GG9oD5DtXUkaOiuB%2BRSoW36RM3JaiO4JyDJlEIoJA4RdcY18UAwP2upnUCPdw7gQjnGP%2Fa20&X-Amz-Signature=b6f0dfe631c368f601e33c589d3b2480a36b81ca64deb5ea20326e1743aafd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CZT6DA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSyn%2BTVIdvRQRrXuSa%2BPm9QYPHJj61EIgeLOCXh94MBgIgCcRpxRkvtFaigEBw%2BMnU0wswlhnRvFF5P8rbjdTPnZMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnXO%2FJ%2FdyBGjTfD1CrcA6vrXxRCsfpEyjX1OWBg7%2BL3%2BHP8cwAMJF%2FUapHwea%2BX0pi%2FLyOWPalaZXllyrj70Av1PPokccSm6qu2uuyUk%2BKV8DlKKLIT6Cm9TwOC3xGFBQ6G1Yhl1Q4iuPwjqwAasn%2BLmKOfiKI8nM5dujKsPUiQuaUb5V8RKW%2B2P30S%2BuMR2SQaH2lzaFgfOZxU2uXImR9Nvnf1X2PU93Bw0ZoF6AJ2FGa%2F8QLJSqqJF7WbT%2BEYfe6OBsN03pj%2BCqwJGhF2nBSIUS5FpnhmEMektzGlnBYqFjmMRVKPK%2BHTa3eFFjcqhOkRsJilD4wQyoRVUiRyeNfjCpSxCEuZnYgkLDDne2A9MhcMkhhFj2HXTyWlX4BpktiCLuLgHbnEHEnKzQheKIYrlPPWYL6M0n%2F8nyDRFFVg08XOcWGytnt3EyW2UYttnu2EDwsA7P4hjlWlEdVG%2Bn423MTHdw0JmvYzA2f51IIaib8ydJ3rYP3737fYh1YkDm%2FoZVt%2Fxod%2B%2Ff4Et6G1FiGdK%2BWBJtQ7xJL%2FeHhJnetihCxS2bUZQGXNluRB3glD1A%2B8ZUuC3CO7z0O78vIUkQMwjz6BmF5XyKnpQInXCkE974hDeNjsfi9mnf%2B7sWPmImxmKlOJIjwRU75vMM7J4b0GOqUBXKyJORXVDrcMGBYxUvCa%2BmV%2Bu3WzJjfTVe2g2yQUg%2BisRNnW7eNeeDNPv9Yp3n1BPqeHmG3zgh23LxPjR9sUEam4TxZ6RwH79vlZccHhsbNYBPuizfVgBUx2oiMV%2FXv0mMV1vyIFpt2zdVGqspTXLPWLZmOmvv%2B12750CoXgAgCfLjLtgHwRjrbJj7JHYyuNuCbwDY4G7H2thOrHBOQzdtFsSUCE&X-Amz-Signature=7c867da71f4d4f20dc20a0f4b86b9681645227a38bc0538ea4715653f809ae39&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
