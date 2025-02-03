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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYTMIBE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDSVyvghRlHkvRgXGPaB9Z%2Fm9P%2BmqxVJ%2BIvMO4G72076QIhAKzQKfo6gGRB%2BBWL3Yq3COT5%2BvDwaaK%2B8K5tLiERRlsGKv8DCBsQABoMNjM3NDIzMTgzODA1IgwQjbZlQz8BsgZ2vVoq3ANh%2BaRTLDJqh4rN4uBHGqb%2FYXcYe%2B2k56I%2FI79IY8vIlOROzk7%2BsZfuUVD9IMvjVFfYg9SxDylPL6%2FNrO5qy2GkWsCe52924Hp9keeDjuyA39%2B0L4cFcCxCvyPYO8i7iFWqJNRVEVmago3impLHjkdTUfLXhEgAQsMJ1I74Vfr91XUseqYwNMY5HwT2dbZDdxp2Zdnok1rQ3GFFLuzuhjjOeqYifdVUWNxcbFPlsJ5akC%2B%2BNgGgyGkk%2B9TuKcDnEQsyKmi3uPSUlXo%2Bb3%2FxLA6iPt1l4wVOXyYyWkH8pfhaRGIloaWKAzD8fSIzu%2BaqMQZ3qjbT36E23%2F3wpdZ1Nfgj%2BIO2Dc6EKiv%2Bb0aCzaQMWOwQaCVEy3tM5J%2B%2B37wbVLQ1us%2F7EnPQ%2FgtrmNYbXezA59ZtlDOI7hlE1AEjnI9A%2FrAHHeVBskp7mVp6OM82Sx4sMf3mOuzpgajttR9BS8KKrwtay%2FZF8OLg4a2PuU9vvTHUv0rv295RlGS2GXj%2FN8O07OYxlc89gW6Gchi9CH3dI6gWjSNwZZpghxRCkRd3UWYDysKt7%2Bkp%2FOsobtXJfQ57d4ENjp3ltXl0u1gDuXEIwe2e1AJJxLHzNIK0bvrCQk4S%2BoWCRP8bH6cFeDCuhYS9BjqkAYacKRJRMQtwEe2wa%2FxxNIxBiBijX4wwdb2y%2F5CqGOEjY3nRRTK8cMbyRqbPttuspfQREbxXDzxXtlsgA9rMhvEVgd8rnQ9v4Fd%2BJEbiW53DyOF8%2B0TdJouYAjhz47hCKfg8%2F2rGmncJe2Yyjaeu450GUV6ftAHyY0wsyTFLkRnDB16plLqlONSGDB34mrJETONohbqnbIfb4apquQdVMfp7VE1X&X-Amz-Signature=2285bcb7225fc88c884d1c19dc53aa4f4f23c21a5e30b52134e389c2b7cb6c52&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYTMIBE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDSVyvghRlHkvRgXGPaB9Z%2Fm9P%2BmqxVJ%2BIvMO4G72076QIhAKzQKfo6gGRB%2BBWL3Yq3COT5%2BvDwaaK%2B8K5tLiERRlsGKv8DCBsQABoMNjM3NDIzMTgzODA1IgwQjbZlQz8BsgZ2vVoq3ANh%2BaRTLDJqh4rN4uBHGqb%2FYXcYe%2B2k56I%2FI79IY8vIlOROzk7%2BsZfuUVD9IMvjVFfYg9SxDylPL6%2FNrO5qy2GkWsCe52924Hp9keeDjuyA39%2B0L4cFcCxCvyPYO8i7iFWqJNRVEVmago3impLHjkdTUfLXhEgAQsMJ1I74Vfr91XUseqYwNMY5HwT2dbZDdxp2Zdnok1rQ3GFFLuzuhjjOeqYifdVUWNxcbFPlsJ5akC%2B%2BNgGgyGkk%2B9TuKcDnEQsyKmi3uPSUlXo%2Bb3%2FxLA6iPt1l4wVOXyYyWkH8pfhaRGIloaWKAzD8fSIzu%2BaqMQZ3qjbT36E23%2F3wpdZ1Nfgj%2BIO2Dc6EKiv%2Bb0aCzaQMWOwQaCVEy3tM5J%2B%2B37wbVLQ1us%2F7EnPQ%2FgtrmNYbXezA59ZtlDOI7hlE1AEjnI9A%2FrAHHeVBskp7mVp6OM82Sx4sMf3mOuzpgajttR9BS8KKrwtay%2FZF8OLg4a2PuU9vvTHUv0rv295RlGS2GXj%2FN8O07OYxlc89gW6Gchi9CH3dI6gWjSNwZZpghxRCkRd3UWYDysKt7%2Bkp%2FOsobtXJfQ57d4ENjp3ltXl0u1gDuXEIwe2e1AJJxLHzNIK0bvrCQk4S%2BoWCRP8bH6cFeDCuhYS9BjqkAYacKRJRMQtwEe2wa%2FxxNIxBiBijX4wwdb2y%2F5CqGOEjY3nRRTK8cMbyRqbPttuspfQREbxXDzxXtlsgA9rMhvEVgd8rnQ9v4Fd%2BJEbiW53DyOF8%2B0TdJouYAjhz47hCKfg8%2F2rGmncJe2Yyjaeu450GUV6ftAHyY0wsyTFLkRnDB16plLqlONSGDB34mrJETONohbqnbIfb4apquQdVMfp7VE1X&X-Amz-Signature=f347287ef6275852a74779c29c9631e14bfe2b64d3af070f505756dde5afed21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF35ZKKP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEWrlH4yqhgFGI9VJU4zv8pMdYDy1SmUvaYKveBHzAoFAiAmSteUUNMdZK3qEUEJcwxCZo8%2FQUOXX0P2BDCuodY38yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkLQ%2BPT2lulpdY0oHKtwDk5lMZ8Vm41R8%2FcCIrPhHoEKlOW81gTSuP%2FOFWlGh19lSakuKqyeM2B%2FYQzqHSBy7HcGJ5msOAuvVWM5VZvS4bERi2iMI7lcRUIT7w1H0z8chKbb8GJba8u9FTeEyWLbOnJSPU1elYYhdomRPH9J%2BTLTmH0RPWLT5TQ6kB6JY9JbC%2BOR78GeY7r3slpVsbpb%2Bn2RC0Gvjw2MQFbrwQ5c7C%2BhuGE%2F2c44PqFA8pZd0aT8gWhDWqd3BRADb4b7Cmkl3%2FHK%2Fv6kO0SzMag%2FYLfTMu02wDVQ6%2BS3xCoCeSdWpdGKSNaae51qqYTKbEK3R%2BPRUNuqSci9%2BtYccnQJkqgfYv%2BoYQGhUfsyZkoVjhC29eTE37B2GzmrWVXN8GC6NWoijlJstfF755f6wFmdlVRQ9dfSnY7w7%2BniHDLpIb%2FDFcOQNZXcQudP6VnzIJkjj%2BuJbiZTeKHvUWlzOYq9X93xxzczRyVzWijRd%2FFOno9fTVCzdg7fWpyU2J7%2F1MSwq8zlwkGKy1KTlxrcDvkcblYc4bue1tZjhbL6y8%2FcOt1nK5LhSjKQ5dTnv3NPZWaxcCqm3XGNU908tdYkK%2B6KgzMevgUQ%2F40p%2BIilyZ7LHLAOga6iZah1mFGDfS6xGDPcw%2FoSEvQY6pgEiJEIPUtF514ZMp6BP3DpCdh8XTQIga4%2Fe8JwRSC8XgsW73tshKT6jQb1qCBzegFWcz%2BQDzR2YFPX8TCedzTYDwEAVh%2BBv3g1PlW9WI55v4bxhuYNgIi%2BpBYg398TdYSKIQ%2Fjq%2Bxx3%2F5P9gsO6pvg9VlIWtXT1QIVSu%2Fa80ti2piHwVbD1dq0bfMw3VicORGT903GL%2FRc5wWHDFP%2FHKCvp9uLVYaUb&X-Amz-Signature=4c66b2b8883ac349553a63c601e82cef8e63c506d21de2e3c0f9afe1c1fde2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMKI63KY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCVWwSdy5J5xj%2BjE2QM34gmgDRqm6P98dwuTT5bPYlOYgIhALqjaK4Ne5lBbxP26PaFFPv2fKv7vKq6JKavxM5EVMCJKv8DCBsQABoMNjM3NDIzMTgzODA1Igy5WFBl30SG5DeQD14q3APJn%2BaFn7k8VXPXZNlBxTAw36cMj1KGvrgOsM5CI%2FiT%2BP07C0YLaLA7fb32mdM4kgR2qU09KH5v0gPsBcdQfDSD5mN0g5BZsnr1ZrSyuPfGWjpx7TCZ1gH2EGnGkE1nUxNK%2B1u%2BZZ9U5gVGHNg%2Bfo8QqR69LgSsZ%2B%2B8OTqUMO57EAu5XZjZXUNX4l4FfbJn0BJ06doQX5bjvOrTbK0GBvy%2BYEDqVjUqU6nPw6wq2236kUyP6l4ax1YhuBF8ry8%2BBGI2lo0E40v4%2FeEZ4DlGry5yi1p4fVNKemcw9Snj%2B5MCrS1%2FuOUj5i1FMdoyYtSCmQ%2BYOR0%2FpMDrMgAA6z%2BBFMfhQ2Dp3mfbgv%2BZPnuNfHpY1z%2F2pRq4288o%2BN6grbw5KwZNIpFI3wgp%2FRZ4qPXGg%2FcUuWFm7cAFdTykBPDkKYf7IonyKR7mjCtXN5ofGhAqVmpczMiC%2FnpFKRTsy8IbKmedj9HdbSDN45wgy7zXY7mDTLWHulK%2BCMYAyAVzXQDfyVEiOs7%2BjQ6beEwi0urW32KYT10iOeKci0r%2Fq4s4kgc1JB8Q%2Fe5BoFHAGfMqzp8xK7WBbM%2B40DIsc9pmrzbVBo%2Bpc0kP%2BxO3cQE1nsJJVc8rwJGPS7qlg54fOl%2BUATC8hYS9BjqkAWLRvH1sN5Bwe3f0Ax0MFBlLHahfrL3410uKTaYIyl8KZhV3bxUo6I9d9M3yUYg0GvSoCEbT%2FhN5fIp2z0GoCp7aYmaqAsTb2QYraLqxAhm0TIAPDpjCpBkrNX9hrAaSFmnSczvgRAN3voSZXEGQKct7nukXeAnRVhoZhj5WLuGbldj3Opr53X6DaooXS0AKV57Mo%2FtHDZGqlcJjEgpJTiWipO5H&X-Amz-Signature=d1987f453b6cba107a8ccfa7cc41997312e3ce614b0e74ab4a24b37ded68f100&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYTMIBE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDSVyvghRlHkvRgXGPaB9Z%2Fm9P%2BmqxVJ%2BIvMO4G72076QIhAKzQKfo6gGRB%2BBWL3Yq3COT5%2BvDwaaK%2B8K5tLiERRlsGKv8DCBsQABoMNjM3NDIzMTgzODA1IgwQjbZlQz8BsgZ2vVoq3ANh%2BaRTLDJqh4rN4uBHGqb%2FYXcYe%2B2k56I%2FI79IY8vIlOROzk7%2BsZfuUVD9IMvjVFfYg9SxDylPL6%2FNrO5qy2GkWsCe52924Hp9keeDjuyA39%2B0L4cFcCxCvyPYO8i7iFWqJNRVEVmago3impLHjkdTUfLXhEgAQsMJ1I74Vfr91XUseqYwNMY5HwT2dbZDdxp2Zdnok1rQ3GFFLuzuhjjOeqYifdVUWNxcbFPlsJ5akC%2B%2BNgGgyGkk%2B9TuKcDnEQsyKmi3uPSUlXo%2Bb3%2FxLA6iPt1l4wVOXyYyWkH8pfhaRGIloaWKAzD8fSIzu%2BaqMQZ3qjbT36E23%2F3wpdZ1Nfgj%2BIO2Dc6EKiv%2Bb0aCzaQMWOwQaCVEy3tM5J%2B%2B37wbVLQ1us%2F7EnPQ%2FgtrmNYbXezA59ZtlDOI7hlE1AEjnI9A%2FrAHHeVBskp7mVp6OM82Sx4sMf3mOuzpgajttR9BS8KKrwtay%2FZF8OLg4a2PuU9vvTHUv0rv295RlGS2GXj%2FN8O07OYxlc89gW6Gchi9CH3dI6gWjSNwZZpghxRCkRd3UWYDysKt7%2Bkp%2FOsobtXJfQ57d4ENjp3ltXl0u1gDuXEIwe2e1AJJxLHzNIK0bvrCQk4S%2BoWCRP8bH6cFeDCuhYS9BjqkAYacKRJRMQtwEe2wa%2FxxNIxBiBijX4wwdb2y%2F5CqGOEjY3nRRTK8cMbyRqbPttuspfQREbxXDzxXtlsgA9rMhvEVgd8rnQ9v4Fd%2BJEbiW53DyOF8%2B0TdJouYAjhz47hCKfg8%2F2rGmncJe2Yyjaeu450GUV6ftAHyY0wsyTFLkRnDB16plLqlONSGDB34mrJETONohbqnbIfb4apquQdVMfp7VE1X&X-Amz-Signature=e8192edeac961852cfefc7fb325427b81727ac6b79c08b1ffe5decacb6fc1e67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
