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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JT4KTJG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICh3OFpwwqznZaIrqfbO%2BzP8dsto8V%2BY1SmvsXlKZFlhAiEAlIQFkJn7oaGcUMpR%2BIKQY04no0%2FOORXgLs3zYuc5qjEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2ixZ0Ok1hosXGByrcA%2FuzIjM4Dq%2BLInbKtzwRYj5MvwDmBWsvb8fq0Nyv84nK3pcKZRK%2BXBLDZUUQ6CFTIF9HjrQFPAoHl%2BnQR4qXNvLjZ5xLIs4EqdQzcUEGShE%2F%2BoQpsyBsjvIfuF4YdJtPJO63zfGcbabDVFGwHdFqDF6xb70QLTx%2Fh%2F0qVNlBeWTfBRv08zd2095ukG07%2FXDQ%2FktN0i2IssXrKISWISd4cE%2BC9H%2BTk0Zn%2Fef0WGuSnjHotNpJPZgZO68v68QqhAdmPg0wvi0tv5hJBPou7i3htxnNQLGNX1aAKd2zSXuGzosywAENMPomCyKuL%2Blu3wN6awe0zHoV9%2Bz2JM6oMaSew3hVZtBh%2BIRHcgJnBkgLt8IqCGianfdiVoC2eAnvUF%2F4at%2F97Fci1%2FXT0i7ZTtCdUZF%2Fegcy%2BzrTK3l3uqe%2Fu62nvnxnGHBPpvf6v5MsRA3rTJGruyGnEQDHvvsBdCXYonR1oS8OH3Rhzxwf67mCgSuU07c8om2U6TygN0LGst43JvGk5UTXBYKI%2FS3WSwyVD8RjEOcPDsPpbJChHdZAl2n%2FBLSB4gplNMB9HYe3Hs0R2EwN3warpZkG8ioD9CXzMMys17raIYzbHriX9Li7PtkHnzHapcYuQqw88PhEMK7Q5L8GOqUBxMwcOXWZ8384QRgiWsWt9N%2FkvPMc0iJck%2FfNOMgsYzm3uEMJan4gk6zLpRuypZ6XzSZyfVv%2FFIpSo6mPn1DsBuvbKM5jhScTIVpxGamKP9GQbrLDKe43vlEREKlRS4HEhF%2B9P3j9fg5he9zmZQf4A%2BVAPCFm6ZJapMTpm6PXa7wXJzBgbpwtwq2YcsIjEjTs0l%2B64uTgZcgAs8NT51KsxaA1gHNZ&X-Amz-Signature=889a5d26f5378edcc629c23dbb3b1b437bfb71b0e3ff92c4f32dbea94f186fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JT4KTJG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICh3OFpwwqznZaIrqfbO%2BzP8dsto8V%2BY1SmvsXlKZFlhAiEAlIQFkJn7oaGcUMpR%2BIKQY04no0%2FOORXgLs3zYuc5qjEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2ixZ0Ok1hosXGByrcA%2FuzIjM4Dq%2BLInbKtzwRYj5MvwDmBWsvb8fq0Nyv84nK3pcKZRK%2BXBLDZUUQ6CFTIF9HjrQFPAoHl%2BnQR4qXNvLjZ5xLIs4EqdQzcUEGShE%2F%2BoQpsyBsjvIfuF4YdJtPJO63zfGcbabDVFGwHdFqDF6xb70QLTx%2Fh%2F0qVNlBeWTfBRv08zd2095ukG07%2FXDQ%2FktN0i2IssXrKISWISd4cE%2BC9H%2BTk0Zn%2Fef0WGuSnjHotNpJPZgZO68v68QqhAdmPg0wvi0tv5hJBPou7i3htxnNQLGNX1aAKd2zSXuGzosywAENMPomCyKuL%2Blu3wN6awe0zHoV9%2Bz2JM6oMaSew3hVZtBh%2BIRHcgJnBkgLt8IqCGianfdiVoC2eAnvUF%2F4at%2F97Fci1%2FXT0i7ZTtCdUZF%2Fegcy%2BzrTK3l3uqe%2Fu62nvnxnGHBPpvf6v5MsRA3rTJGruyGnEQDHvvsBdCXYonR1oS8OH3Rhzxwf67mCgSuU07c8om2U6TygN0LGst43JvGk5UTXBYKI%2FS3WSwyVD8RjEOcPDsPpbJChHdZAl2n%2FBLSB4gplNMB9HYe3Hs0R2EwN3warpZkG8ioD9CXzMMys17raIYzbHriX9Li7PtkHnzHapcYuQqw88PhEMK7Q5L8GOqUBxMwcOXWZ8384QRgiWsWt9N%2FkvPMc0iJck%2FfNOMgsYzm3uEMJan4gk6zLpRuypZ6XzSZyfVv%2FFIpSo6mPn1DsBuvbKM5jhScTIVpxGamKP9GQbrLDKe43vlEREKlRS4HEhF%2B9P3j9fg5he9zmZQf4A%2BVAPCFm6ZJapMTpm6PXa7wXJzBgbpwtwq2YcsIjEjTs0l%2B64uTgZcgAs8NT51KsxaA1gHNZ&X-Amz-Signature=54df7616de54ac948092d1bbef61d8656864ff8113a1d8324ab27949a071e254&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLOWNQG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCjJ2RuvMjE7VyiLmyk%2FYovEh0cCiotGyamX9UtX8PTFQIhAKxFDZGuRpkAD6bIFYO700V3fcx%2B3KF%2FzKGm34YahPeLKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydgMX1SUHdGjL1kJcq3AOMIzob%2BtpWtxF6OaU4KpxMjp2PYyGKqJVAhvk9TZ3LWYgJ2n0Tm1TCy5OYi7J6nCGLYQGRUpcwGVSODhDz9RJDi4JBZbH4DcoprD5%2F72XPTsTRlVac9BMdOC4Gw8iNs4JwztFvZZYQ3pCVyG6njyJexecRpzStvxhi66PGmyTEmgzfTCXypsyYtInGPBedgxO6CAhuRqK8DVgFhEwDy05w88%2BclpfFTrIrL7wVV4dYgYQTIY0xk98ZiCTOL%2BaTw4mhA2msibCv2e%2BqOF53OzMZ7lFXESWexTa7UDChx5AvpbaxOO6%2FiTKVbOVxCawt6tnhlzBYz8owYZRi8TMo5Posw5jkfWdsCShiQ68%2FUpjAlQSuBeQuLNs6UeJGtm%2BZ4NEqpUtxNpHJdpGsgMLMNUQ%2FZtuvlnsWf27TH0yQQxToeRN5kJIFsbhTWyneY0h1mmB7TXFSr1yiXwbTVz%2FU71aKp1UeddULKXsItxNAqb%2BCElaDtz3rW3JqPC2SBT2G3IyN2mMDpQJc7yjpEJ7btmP%2BilLYI6pJSZZ%2FjmyLe7NMaNORZyJR2AebxOBoiL%2Fm%2FQnt%2BtsVl2aXZ%2BU2Bszj%2Fw6J8mLAH%2FoTu6Vp7utlWjy9NglQSDbKltuHupzLUTDvz%2BS%2FBjqkAUChcjLx8NpdGlm2HNvrOuEstk4lfO7rbzsVUe%2Fh2%2FNfgwOgIw2Una%2Fb38yHlrjLZof3pbfeJHadj56dyggKGsMhtI3olS1%2BfHV9VswBjauhbJw%2BivjgnLYOhokuqPFOm0ifpotnnLXw%2F%2FHQj46JS94Eq8A2wMQGiXbbE%2BudCg5%2BFAM2Esv6brj2IwR0KDKdhMClwgfeTXxWN4Bf66ecQH4Eosp9&X-Amz-Signature=1286dcaee625e899f4fa77f9c30a992dcaf87e0b73e3f2377a18426f58631406&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XRO5FV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCICKM%2Fu7499U5M2PiKbeztkY5W7fRjLqlUho1Z376KgUMAiALj7GvY5YvyfIvkjoLxD2igJRyFX01%2FCgMsjyvIOf4cSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVhh8KFmsYd7SD7AAKtwD2WMe0cQtQ3d5itwOtGk27YAQebpctf46v1G5oEnClXVe42P1YBkrCAGDl4k7qO4mMnR9YOsT%2F9QDp7MjPD%2B4OVvpzCrLPEaCbfYczw4r0HrFRl1ir6LeeKj8vT248KIn8HkQew3eAeGS0VH2uEcu9OuEnA4hUBoxF0awfoMLPpoa%2F2yG1D2KpgpTcdOTVqI%2BqkavMB9SGL9F9eZtJ%2F6a7IFlMh0vc9O4EU0Ks4Cw0pAFMtBx56phSgJZZctCSz3AdMpQzv1SQLpOH8HUIdt1PjMxOH3z06z28LWtGQUwtRmU6p5TEOEWz711UN%2BOduW4b2gLX3FbKXv02DfuOqE28%2B6gExmKIU6E%2BLV9rh25dt%2B1zkPw0WCLb3VzCvZxSCrxjsgUD38leIY0o0GlHuFkOItJkwjyBXBDfAin2FyRJzXQ6audtAstvGg1fx%2FCX3q0O7TrPHBz%2BVowNGX%2FTe2oSFCYv7uUD8x2frcFvTVC7fBQKOFRMYPC02XDIVNGcqhOoqAYf17vAI42yruxsqqN2v0byHkN4fsAHR2qH75Tp49UzX%2BcJbxi29hToQaJbBf5W1KeQs13tYZDt%2F3DrTXXovcXOQtTcuYUDZh1hQnn6EZ5UIrMP41fCBfTzwEwv8%2FkvwY6pgEQ6urL2xmxkxIewcwcPmX2RtOVX9lcQtdsIxNDARaho3WpUJtxxexe8oJwLRA7ty5%2FVymcxv7kHVYTEG64rMEOe%2FLgV%2BSak3df%2BghG0K76lneOAW%2F7%2Bt1Vn%2FC31F8Cl5u3VZ4f8sZDaU9XPbWR9stEDrERDKxysLZ521yhAsb9hjFfop0XL7tbQJ%2B1Zz56WdfIcosebaamVgMdLDdDLAeBUUxugHEz&X-Amz-Signature=fd9be837487022d597103f9905bd08c0f805d1f29da9a3436e333fc0b0932739&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JT4KTJG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICh3OFpwwqznZaIrqfbO%2BzP8dsto8V%2BY1SmvsXlKZFlhAiEAlIQFkJn7oaGcUMpR%2BIKQY04no0%2FOORXgLs3zYuc5qjEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW2ixZ0Ok1hosXGByrcA%2FuzIjM4Dq%2BLInbKtzwRYj5MvwDmBWsvb8fq0Nyv84nK3pcKZRK%2BXBLDZUUQ6CFTIF9HjrQFPAoHl%2BnQR4qXNvLjZ5xLIs4EqdQzcUEGShE%2F%2BoQpsyBsjvIfuF4YdJtPJO63zfGcbabDVFGwHdFqDF6xb70QLTx%2Fh%2F0qVNlBeWTfBRv08zd2095ukG07%2FXDQ%2FktN0i2IssXrKISWISd4cE%2BC9H%2BTk0Zn%2Fef0WGuSnjHotNpJPZgZO68v68QqhAdmPg0wvi0tv5hJBPou7i3htxnNQLGNX1aAKd2zSXuGzosywAENMPomCyKuL%2Blu3wN6awe0zHoV9%2Bz2JM6oMaSew3hVZtBh%2BIRHcgJnBkgLt8IqCGianfdiVoC2eAnvUF%2F4at%2F97Fci1%2FXT0i7ZTtCdUZF%2Fegcy%2BzrTK3l3uqe%2Fu62nvnxnGHBPpvf6v5MsRA3rTJGruyGnEQDHvvsBdCXYonR1oS8OH3Rhzxwf67mCgSuU07c8om2U6TygN0LGst43JvGk5UTXBYKI%2FS3WSwyVD8RjEOcPDsPpbJChHdZAl2n%2FBLSB4gplNMB9HYe3Hs0R2EwN3warpZkG8ioD9CXzMMys17raIYzbHriX9Li7PtkHnzHapcYuQqw88PhEMK7Q5L8GOqUBxMwcOXWZ8384QRgiWsWt9N%2FkvPMc0iJck%2FfNOMgsYzm3uEMJan4gk6zLpRuypZ6XzSZyfVv%2FFIpSo6mPn1DsBuvbKM5jhScTIVpxGamKP9GQbrLDKe43vlEREKlRS4HEhF%2B9P3j9fg5he9zmZQf4A%2BVAPCFm6ZJapMTpm6PXa7wXJzBgbpwtwq2YcsIjEjTs0l%2B64uTgZcgAs8NT51KsxaA1gHNZ&X-Amz-Signature=979b628b475830a5f13a976a79ce0492d39f7bae05f3c09242db34f0decec851&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
