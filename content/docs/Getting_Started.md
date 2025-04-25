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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGF7WJ2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDQUi%2BrjIgUvWIyLLqdHYIUnNm4sa1TAhOfuWURzcJDAiAYSTsifWpzfJL39xw2FHwzK6ZSWlK8%2FI9LZYUGha7lUyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwGWwUHSKCoE9QjsBKtwDnaUcpDPbCyuDXwqhpE5cDdgF1bx6R%2BKr9nUCaGVT90VegTEHCdEpBC3uODrhK6ZNKfrFAfenf3se%2BZ67KT75gsAN9qDnf2VGC0ISJo2gqH9QFvUyk%2F1hwmSUsakA8H4BHgHeBWDoQYjITuP4TD3ZQJhQwJgvrkULmoZ7cFM6xPo3CR2QJB0UMHFBUUNQdYB3OCqETp%2FOyJzjy2qYKA4n8ieLggma2OuB%2FJQ2lLXqG2WmK0%2F%2BtgVwIU%2B7Z%2FwFw3FlpFK3fCSCvc7To8v6zlCOHSv3Ld28MsLpQLYIImXOSv0HQwOUoLXKrCqKUmLZVJD%2BL8eoCLn3iC5dUNxX0C%2FItmlVzB0KVaEqqdoXFVgy90f0MklvR82olTmjbASrBcGeD2G4KjDofBhdBF2abVk3QNd1okmXeGg%2ByTvbt7jOs%2FRzSiiUEIEtIVuVhSrhhdsPECWBFq7p3w%2FyuBWUwIytVCCiXECT4VvH3EUiDzWl2hyMRQO9cnPgJbFXlOvctau4ziOvYmGLCnCiRjDSfqlu4hG1O6bSxQ1Mx7AaxYBvRBh3kojN4Ycm5xyCr0ccpCQtKOnWbQ6ixLWER9UNVdkuAOLZA8PlNsJZyIKYi1oSoSemLJG7wA6Tdn38cAMwu4KtwAY6pgHVhcx9Rr6BtHZq0ObBJSJfc0NtYzJaMg32kQlb4mdeKjclqNTYhN%2FY1Q0Z0bswGNnblsdiFOiBrNF22KTSIbU4tFTI3W4A0DbawYq0r8B8XJ0toX8CEHZWs3MPGPdE7%2BlHhWthdH5AmdH5bD0SYCRfwcCT%2BF3JjVKR1j9eRlEr%2FnyI1hOf80z9LOhnrSFWskNn%2BMLKeiWb6SFQg%2BqeYPHXgaZorXMM&X-Amz-Signature=2a6a5963ee57d37abd31142571c5b7d7a2734fe801c98e848a0c9e2fabcfd6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGF7WJ2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDQUi%2BrjIgUvWIyLLqdHYIUnNm4sa1TAhOfuWURzcJDAiAYSTsifWpzfJL39xw2FHwzK6ZSWlK8%2FI9LZYUGha7lUyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwGWwUHSKCoE9QjsBKtwDnaUcpDPbCyuDXwqhpE5cDdgF1bx6R%2BKr9nUCaGVT90VegTEHCdEpBC3uODrhK6ZNKfrFAfenf3se%2BZ67KT75gsAN9qDnf2VGC0ISJo2gqH9QFvUyk%2F1hwmSUsakA8H4BHgHeBWDoQYjITuP4TD3ZQJhQwJgvrkULmoZ7cFM6xPo3CR2QJB0UMHFBUUNQdYB3OCqETp%2FOyJzjy2qYKA4n8ieLggma2OuB%2FJQ2lLXqG2WmK0%2F%2BtgVwIU%2B7Z%2FwFw3FlpFK3fCSCvc7To8v6zlCOHSv3Ld28MsLpQLYIImXOSv0HQwOUoLXKrCqKUmLZVJD%2BL8eoCLn3iC5dUNxX0C%2FItmlVzB0KVaEqqdoXFVgy90f0MklvR82olTmjbASrBcGeD2G4KjDofBhdBF2abVk3QNd1okmXeGg%2ByTvbt7jOs%2FRzSiiUEIEtIVuVhSrhhdsPECWBFq7p3w%2FyuBWUwIytVCCiXECT4VvH3EUiDzWl2hyMRQO9cnPgJbFXlOvctau4ziOvYmGLCnCiRjDSfqlu4hG1O6bSxQ1Mx7AaxYBvRBh3kojN4Ycm5xyCr0ccpCQtKOnWbQ6ixLWER9UNVdkuAOLZA8PlNsJZyIKYi1oSoSemLJG7wA6Tdn38cAMwu4KtwAY6pgHVhcx9Rr6BtHZq0ObBJSJfc0NtYzJaMg32kQlb4mdeKjclqNTYhN%2FY1Q0Z0bswGNnblsdiFOiBrNF22KTSIbU4tFTI3W4A0DbawYq0r8B8XJ0toX8CEHZWs3MPGPdE7%2BlHhWthdH5AmdH5bD0SYCRfwcCT%2BF3JjVKR1j9eRlEr%2FnyI1hOf80z9LOhnrSFWskNn%2BMLKeiWb6SFQg%2BqeYPHXgaZorXMM&X-Amz-Signature=5d46402a3d3d823aed492f67e40be993a3b4f70f0f9232dd92bfb3dff401e10b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7UAYOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1ikZXAk%2FCD6XtX7chP%2FWqnqX1c8lsIZ%2F3GKBEzreuLAiBPczDzU%2BJ8igKECdXZA66NU4OJc5JX5AeyekzThCo4XSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMH2TNXW61mKkfr%2FX4KtwDyA8D%2FPdD%2FlrsT0xPrb0io31G1lJ3sQ3Zj6A8R9dIyOPC3Vk%2B2gkUNqALCZc1rULlFfM2c3lHhZItPMJBJZb4h8sliHyn6lUxN1mBHF%2BCu8%2F5bkp35jn%2FV2MnYdri%2FfZTupzU8qSowNN2uUtVaBhZ3ccAZ3276nrHXDj4syG0yZl7r13W47H0XT4HiCBlcYhk7WQctcaQ1NnW36ZCDR5XQpAhMkqEoYHh3I7dn9jCPg%2B1Slq1nTVjIyE%2BItT23aKolGQ0g%2B84pIjrSSNRYGlJrd8gmvkQpuYOWEIiUsuFXuBb4tUAKfWHkxJ6hC77P5us2PvRC7f%2F%2F4UUObR0DNWxOiabHFhPl8oCkpmwQtONUhw%2F5gxWGaYTuxzLqX7B82BsYS1xhvvJJi3Sfz68Nk9q70os6DUPZdSRo4iS5DOLmdeSN8Y2fjw74aEkbEgBNXsnEqb75U17IJVpeJ0mNgLANU6UvFsBXakn7Su6a%2BWiXBk82qsnPpBd0BkgdqvF4H8%2BmSbCKNd8fXjlaepZ1aE5LY1BXwgUhCffXPn4KI4i85Ngeh6qa1%2B1fO30SiBIdj4vcaDfoAclnJ2X0j%2F0ea67zjAP52Nl6j2EP5v8PjzWLVuSVnT2V9XD9ZgWEiUwn4KtwAY6pgG4uWp%2B1CWXcs2pB2TZxAIUJbhPjim16QWP4ZPx3QjoxgyEMU7LpoCNEG3v7deQhTPCPYz945KCAnGTuQ9VDcSyvnBSzjrkYkv4q3HJ01osnw%2ByAx3q7m0FUHaSOlk%2FATVRrlvA%2FA69v1FDL2GrvbVGirIvhBdZ8w84Ql64vaw2jqDuGHU58Cp7Jb5BTL5DUr3IgThWIHTx%2FpkfKdBAHSFVHXHcLspe&X-Amz-Signature=9ab9ead55490a489236bb54930156a0cfe2c8484e73e6ee74018ddc90454d085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QI4H4E3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKULBrkxLR8qiQpeCp1tieFKIQxQlwZQkvwaoo8Vb7nAiAzoOy2SjJQzdiqqIeANAjrXaoQ2HU%2FuPaEvi64ZYC9BSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMv8%2F8bZvDtFRIWLvyKtwDZcSZHwZU0%2FPI9uijLG92grmUd66jz4zPEYgcMlnTu2SbvK%2Bf8dLH1VwickrImAz1tgloq8aHZJ1u%2BQIOn%2BhK6WgjviOuq72Pl4wEvwcTWet3ZNCm7NORxJOmZMUXI9RPgHhiUw86y%2F4CF0qYj7uslI8Pha1RXwasauYB%2Fgq%2BlYKA8eSpfZPBHN9pabyGO4m4HIcjRFuDRlm0ctBsphiBK0R4jzGwSJH8MNZKCe7qw39hH1NICzVuRKLOD0UZ%2FuWEX%2BU8R9MH4NilevoLgnye3xWw5G4183q%2FDo1899OpXn3%2BpWMu%2BBTk%2Ftb45IDB5qWuPvZ6KTmBqyJ3KKySJoA5bRaICN6NPehVdQfE39uW%2F2WaBu57iTePRjx6y0eb14KC4GQTnasEkgTXJiYw4IrEc%2FWhTcIgDinXpNP%2FEIZ%2Bc73YW0gSbMi%2F5Rs%2FbSdq5eTuE%2FzWTHWmfntHPf2Wpr2merclLASsZaFiQUH8Dr11SX4VPnFH3cdJNA02UDGo%2BUZ%2BXETrADO6yxCqAMeGVRE7nOnK3Asqj47cfYzSeR1JeZj68cswffW4i%2BsVj8YzuejgaL%2BEXHxVAeok2wkVNDPDTtgD0XxFUn2SrMae06oTix%2B%2FLZpo%2FVJvI3Nd1MIwm4KtwAY6pgHrEiJLIPXGPZM%2B9cFTY8jT4GRBUWP9S9D6lmvF9ya06Z0NL1sBIwsko4aGCdCS7lraRiyoWx%2B5eWnAiHvC2kiY3Dl35%2BhOH%2BH2MyJVuegAk8mlNddtpRZCii1B9K0zdSEI2ycSwJGaltre%2FAI%2BV4q9SqFaRxRwHtYipxCkhNVgmdfyQoTj0JJOb0WSFeRoJtr%2BmxyX76nBw0CYelfYr3NYrKx6oeA%2F&X-Amz-Signature=58a6fcf2c2c370d72e9978a3bddd2d1328225735241a03a3fa41c0a29e2f4ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGF7WJ2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDQUi%2BrjIgUvWIyLLqdHYIUnNm4sa1TAhOfuWURzcJDAiAYSTsifWpzfJL39xw2FHwzK6ZSWlK8%2FI9LZYUGha7lUyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMwGWwUHSKCoE9QjsBKtwDnaUcpDPbCyuDXwqhpE5cDdgF1bx6R%2BKr9nUCaGVT90VegTEHCdEpBC3uODrhK6ZNKfrFAfenf3se%2BZ67KT75gsAN9qDnf2VGC0ISJo2gqH9QFvUyk%2F1hwmSUsakA8H4BHgHeBWDoQYjITuP4TD3ZQJhQwJgvrkULmoZ7cFM6xPo3CR2QJB0UMHFBUUNQdYB3OCqETp%2FOyJzjy2qYKA4n8ieLggma2OuB%2FJQ2lLXqG2WmK0%2F%2BtgVwIU%2B7Z%2FwFw3FlpFK3fCSCvc7To8v6zlCOHSv3Ld28MsLpQLYIImXOSv0HQwOUoLXKrCqKUmLZVJD%2BL8eoCLn3iC5dUNxX0C%2FItmlVzB0KVaEqqdoXFVgy90f0MklvR82olTmjbASrBcGeD2G4KjDofBhdBF2abVk3QNd1okmXeGg%2ByTvbt7jOs%2FRzSiiUEIEtIVuVhSrhhdsPECWBFq7p3w%2FyuBWUwIytVCCiXECT4VvH3EUiDzWl2hyMRQO9cnPgJbFXlOvctau4ziOvYmGLCnCiRjDSfqlu4hG1O6bSxQ1Mx7AaxYBvRBh3kojN4Ycm5xyCr0ccpCQtKOnWbQ6ixLWER9UNVdkuAOLZA8PlNsJZyIKYi1oSoSemLJG7wA6Tdn38cAMwu4KtwAY6pgHVhcx9Rr6BtHZq0ObBJSJfc0NtYzJaMg32kQlb4mdeKjclqNTYhN%2FY1Q0Z0bswGNnblsdiFOiBrNF22KTSIbU4tFTI3W4A0DbawYq0r8B8XJ0toX8CEHZWs3MPGPdE7%2BlHhWthdH5AmdH5bD0SYCRfwcCT%2BF3JjVKR1j9eRlEr%2FnyI1hOf80z9LOhnrSFWskNn%2BMLKeiWb6SFQg%2BqeYPHXgaZorXMM&X-Amz-Signature=d27d343c5cb24c23c6d57ee7593732c8e3a031f2f91432adbf42e61a382e5419&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
