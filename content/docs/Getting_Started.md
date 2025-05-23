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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVQLIJG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHcXOpnOOA%2FlSZiY4t9GDM3e0mwAFAqheREJNNYHs6kjAiAbQNrcAVDTgcaRU5ivLYm7MZS3Ppkwr6Qa7fOSyh4FIyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1GUguSYXK%2FYlqrZOKtwDNIrT4ghbxilTAYas32XoFVkWMrHt%2F3%2FF2aA1cHoeRH%2FCr5Za1v74%2B7PA86neDcc4DTUDYdb7t6lMhe%2Bpek%2Fj2xGd%2BzCP09l9DBO%2FuS2JFzH46G%2FsxKU2OJIjsZ1BFnDFcuRX3ihk42O1fCIEYjCmJJlssIHrLsZBYgoXvKreiPaOtv78a7d%2BOv41uguE8CzIFJ94txYPPTqblFFor2EIJ76nsrT%2B2CqvkjbRDR58I47YmFFsoLN0Q9M3gRD3SvZu2ObLK6kyloz6O20uMxX6aiqPV65vjb38%2BBVp9WJZ71pAvkPKlFOa%2FjYCl1s788iXMSRhJE2fW7eQp2nHcUUYaRiQ5HIWe0MzVsq9FbEVJwIxys10W6stitb86q%2FpKPOkExGICqpjykiJhRps9Aqp2f94ohB3sXsu61%2BH1OzX%2BbleCJdeCPBDS3EcIId97ikdLb%2FAK6K6OBi%2F6ulDez6LU%2FKiftHkLD%2Bxo1CVDoWHgGpMs4OvMx5vjFuWTTUXitrXih3aDZKuxn1K3vDA9%2BFhxps%2Fa1vEDX7dWOoqj5v2LZUmKFzG84YhVzfIWpxQNskI34QjTwX%2FHXAb5RRH5GPMSummN9F47AOsrDb9zTExK3pXts0qPQ8kc73z%2Bssw%2B8K%2FwQY6pgFQNxktBYNvv6yZxu3%2BktzIfqIeFOA%2FWTIm%2FBi2cBfLIV5rbJv3gwTK0rtyYeHNzJ3ERCcddoNeIibnGR3wVWJk%2Bps1JaN1WjBEnNZuoygfXVdt8IM%2B%2B3k82UoODFCgU0FPbdlpPYuKqMnmPLeVkh3nfyQNqofvEfinbR7f0RmKgnwC5rOaGo3TMUAGv88yAB%2BgsYRgE9H4acWI85Ygj6xHCxYpVBJQ&X-Amz-Signature=078016d170b1da80be7e8cb7ca82e78ba66d82e549a1be85263fd795d244a845&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVQLIJG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHcXOpnOOA%2FlSZiY4t9GDM3e0mwAFAqheREJNNYHs6kjAiAbQNrcAVDTgcaRU5ivLYm7MZS3Ppkwr6Qa7fOSyh4FIyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1GUguSYXK%2FYlqrZOKtwDNIrT4ghbxilTAYas32XoFVkWMrHt%2F3%2FF2aA1cHoeRH%2FCr5Za1v74%2B7PA86neDcc4DTUDYdb7t6lMhe%2Bpek%2Fj2xGd%2BzCP09l9DBO%2FuS2JFzH46G%2FsxKU2OJIjsZ1BFnDFcuRX3ihk42O1fCIEYjCmJJlssIHrLsZBYgoXvKreiPaOtv78a7d%2BOv41uguE8CzIFJ94txYPPTqblFFor2EIJ76nsrT%2B2CqvkjbRDR58I47YmFFsoLN0Q9M3gRD3SvZu2ObLK6kyloz6O20uMxX6aiqPV65vjb38%2BBVp9WJZ71pAvkPKlFOa%2FjYCl1s788iXMSRhJE2fW7eQp2nHcUUYaRiQ5HIWe0MzVsq9FbEVJwIxys10W6stitb86q%2FpKPOkExGICqpjykiJhRps9Aqp2f94ohB3sXsu61%2BH1OzX%2BbleCJdeCPBDS3EcIId97ikdLb%2FAK6K6OBi%2F6ulDez6LU%2FKiftHkLD%2Bxo1CVDoWHgGpMs4OvMx5vjFuWTTUXitrXih3aDZKuxn1K3vDA9%2BFhxps%2Fa1vEDX7dWOoqj5v2LZUmKFzG84YhVzfIWpxQNskI34QjTwX%2FHXAb5RRH5GPMSummN9F47AOsrDb9zTExK3pXts0qPQ8kc73z%2Bssw%2B8K%2FwQY6pgFQNxktBYNvv6yZxu3%2BktzIfqIeFOA%2FWTIm%2FBi2cBfLIV5rbJv3gwTK0rtyYeHNzJ3ERCcddoNeIibnGR3wVWJk%2Bps1JaN1WjBEnNZuoygfXVdt8IM%2B%2B3k82UoODFCgU0FPbdlpPYuKqMnmPLeVkh3nfyQNqofvEfinbR7f0RmKgnwC5rOaGo3TMUAGv88yAB%2BgsYRgE9H4acWI85Ygj6xHCxYpVBJQ&X-Amz-Signature=5206f3cfbfb14f757f3aa21ecad69b10a151ad2d323a8d32174e64f97a4d9605&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVQLIJG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHcXOpnOOA%2FlSZiY4t9GDM3e0mwAFAqheREJNNYHs6kjAiAbQNrcAVDTgcaRU5ivLYm7MZS3Ppkwr6Qa7fOSyh4FIyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1GUguSYXK%2FYlqrZOKtwDNIrT4ghbxilTAYas32XoFVkWMrHt%2F3%2FF2aA1cHoeRH%2FCr5Za1v74%2B7PA86neDcc4DTUDYdb7t6lMhe%2Bpek%2Fj2xGd%2BzCP09l9DBO%2FuS2JFzH46G%2FsxKU2OJIjsZ1BFnDFcuRX3ihk42O1fCIEYjCmJJlssIHrLsZBYgoXvKreiPaOtv78a7d%2BOv41uguE8CzIFJ94txYPPTqblFFor2EIJ76nsrT%2B2CqvkjbRDR58I47YmFFsoLN0Q9M3gRD3SvZu2ObLK6kyloz6O20uMxX6aiqPV65vjb38%2BBVp9WJZ71pAvkPKlFOa%2FjYCl1s788iXMSRhJE2fW7eQp2nHcUUYaRiQ5HIWe0MzVsq9FbEVJwIxys10W6stitb86q%2FpKPOkExGICqpjykiJhRps9Aqp2f94ohB3sXsu61%2BH1OzX%2BbleCJdeCPBDS3EcIId97ikdLb%2FAK6K6OBi%2F6ulDez6LU%2FKiftHkLD%2Bxo1CVDoWHgGpMs4OvMx5vjFuWTTUXitrXih3aDZKuxn1K3vDA9%2BFhxps%2Fa1vEDX7dWOoqj5v2LZUmKFzG84YhVzfIWpxQNskI34QjTwX%2FHXAb5RRH5GPMSummN9F47AOsrDb9zTExK3pXts0qPQ8kc73z%2Bssw%2B8K%2FwQY6pgFQNxktBYNvv6yZxu3%2BktzIfqIeFOA%2FWTIm%2FBi2cBfLIV5rbJv3gwTK0rtyYeHNzJ3ERCcddoNeIibnGR3wVWJk%2Bps1JaN1WjBEnNZuoygfXVdt8IM%2B%2B3k82UoODFCgU0FPbdlpPYuKqMnmPLeVkh3nfyQNqofvEfinbR7f0RmKgnwC5rOaGo3TMUAGv88yAB%2BgsYRgE9H4acWI85Ygj6xHCxYpVBJQ&X-Amz-Signature=81a8841972c10f991e8b7368bc212d06d07bc0e9b1725c09b6f00194aadc9dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672PZNKQL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGYEF1URwA1izP1pWOJ7vMNCglCt4Z5jltXIhvWi%2BHC3AiEAyVLFxitJVsQXrgCNodZ%2FsuFRheGb7Q%2FMjVf1UxlAa3AqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkZvEkd%2Be5dTQowRCrcA2YfwyKWdugbSlGUK8bHxBKRHj3MPzOy0iFOngS2DMAitecG2XRo36nIMDK4OG3f0xcY0XY87QpIMV9uEq9d9SNOqvt49CPdsQVVJbpYP9NKCgoX0c6NAVPhVz7%2FE1RQQuNYOuD6s584K8XqRAQgqCObjVRvYLPztjGlWhCOg%2B8Wl%2B%2BcYm1l99Txy7IhKgX7L1tMeKm030cE%2BUX1uap%2Ff0zZZb8VtA8CLqqsLbhbJN3N3LsyuWY9%2FbkoTCBsfaJ6I3GXntDRGDM3rYfvE6zelyyZm%2FTljzKOivyUjQuAoS8znT0aDAdf5P1NlmgZoBS%2FLz21vbbegEue71gk8Ce6gcGA9wgeCoeHvnFbQUzPPiyn73UzB%2Bys1BK9sn0h1yP4%2BcbK8S7%2BNYYSQm4mrFMELC8owsDX90uAm%2FsbG7%2BEhmcy%2B5e0RkGzfvUpdmSuZulfDIscGzOmxqm5oL22HrCEKLY0qhip3dOCBlJu3jHhr2KJT44PYzAEOx%2Bbw6a8mwWJVs62A9gNUdQRL%2FVw4wlXZmyh6CRmdh60SdMX5qfMzPRi3TsoHzb5qUgnWmyui1uLHVRsIfIqu7mns%2BuwvRvGJt0mVLJpk2aRYG6HJQ%2FUhdOZ9zLXSeemKoUTRAKoMObmv8EGOqUB2cZdamg%2Bk137ICvQJG33SwrE36sxGRf7vZ4lSiWOVBmSqwx8k%2Bykv2eVCHGnkZyc41o%2BkRqH8Ye4ltZLlyyRex3YTqpz4JkqavhtDx9cJJ9eKFS%2FYWU5ag8JuMeGL1ZTix1LR8%2FfpK0P1UVQY25ftdeUIjVk2O%2Fr1kkydXieEEpLM2LtgnWL%2BXouwxBzYruczheMOHxKlNddiyu4onpV9ImMBElR&X-Amz-Signature=bc1fe698d8297d36b25552b3593e102f25360b57a40ba40253e0638960c0fba5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPH2VCTV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICYCwejgcBDnkIxPVFrF5phe44a4aQ6A4CiohVr3fAahAiBKImMWIIG4coIgA%2FOoKPQrKQTv5VOE31ym%2FEICp3RWpSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyxFxHa8L7mA7T1vKtwD1yLpk%2BgMyffw6vU3tWm588NLt5Q0w%2BbAzqOQWUKe54PTJ9U5I4Axz0LexwxRjxTkeIGhatnCiYgU3aNFVfJU6ELkEmeu0PhWCGuWAFQKqfW7%2FTRC%2FyAU%2BSI4E1MKVafUDXFP2mOrA8VWcLatqekJAgIYYR6HcEk0MfhtKdPJolgl2S4M4yW8r2YTPlw9QRPTrHZSdKkKfiFNGFSBNr10w%2BtVnVLnYWOXKtzEA%2BOOQiI%2FktjHgWKJ44F9OWhuCycHJSDnUhWa5wdHKC2hG5kQXL%2BH5jowDivuCneiXuH%2FH%2BD%2BTSlDSL7Y6jwraeWni64LsCf0HwTR8E5SmXKOnLnHDdLYmjR2fNoL2AeLRN0RLS4PLXe5RRxclMx2qq31CHAgKinFqosDBV9KcVDE7Qybl9Y2JNilxsTvjOfKKO3MfRKHHE83L1ZfR4KY32sc3d2pqW7sF%2BH25Lq6uQ29piCPLHaFxtyBYzWYYQpzTghsDJXIoKIIlFLQrSYfZTK0yWcDCa%2FpWfNM7iWwKCOeB1sPzfSsm%2FZYEJ5M4q60U8nS6LfkF5AKk0s3vYThPwJcge2R2WkGgfZegyu8zXfatYNAfeO1%2Fctv2i4r4sNM9qsFsV403IeMoS6rXoA22%2BMwv4fAwQY6pgH%2Fgdv53Pd2cZKppz7IBviwXdWmvK1GrCr1L%2FsDso%2BTKiY5oePWR3gRJOJRmyyj3ZSAlX1jkg1cX9w4cWIbLzwZWyMZKy9UmfMKhDNNqB0x4Yn61gl7O%2BQ46%2F3G8VH3N3wSsKr5xNo6BbunXBbQNe01tbe0XEApUwWtuR55PJdnI1simQgRbBYTCcrFgpNVHgvE67ZlLbjrDFepRykKsgWcqbZv3CJ1&X-Amz-Signature=d06f281e05883c4c140377b1d0f6c3873a607c34b695048e9ba7d714eaef1209&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVQLIJG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHcXOpnOOA%2FlSZiY4t9GDM3e0mwAFAqheREJNNYHs6kjAiAbQNrcAVDTgcaRU5ivLYm7MZS3Ppkwr6Qa7fOSyh4FIyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1GUguSYXK%2FYlqrZOKtwDNIrT4ghbxilTAYas32XoFVkWMrHt%2F3%2FF2aA1cHoeRH%2FCr5Za1v74%2B7PA86neDcc4DTUDYdb7t6lMhe%2Bpek%2Fj2xGd%2BzCP09l9DBO%2FuS2JFzH46G%2FsxKU2OJIjsZ1BFnDFcuRX3ihk42O1fCIEYjCmJJlssIHrLsZBYgoXvKreiPaOtv78a7d%2BOv41uguE8CzIFJ94txYPPTqblFFor2EIJ76nsrT%2B2CqvkjbRDR58I47YmFFsoLN0Q9M3gRD3SvZu2ObLK6kyloz6O20uMxX6aiqPV65vjb38%2BBVp9WJZ71pAvkPKlFOa%2FjYCl1s788iXMSRhJE2fW7eQp2nHcUUYaRiQ5HIWe0MzVsq9FbEVJwIxys10W6stitb86q%2FpKPOkExGICqpjykiJhRps9Aqp2f94ohB3sXsu61%2BH1OzX%2BbleCJdeCPBDS3EcIId97ikdLb%2FAK6K6OBi%2F6ulDez6LU%2FKiftHkLD%2Bxo1CVDoWHgGpMs4OvMx5vjFuWTTUXitrXih3aDZKuxn1K3vDA9%2BFhxps%2Fa1vEDX7dWOoqj5v2LZUmKFzG84YhVzfIWpxQNskI34QjTwX%2FHXAb5RRH5GPMSummN9F47AOsrDb9zTExK3pXts0qPQ8kc73z%2Bssw%2B8K%2FwQY6pgFQNxktBYNvv6yZxu3%2BktzIfqIeFOA%2FWTIm%2FBi2cBfLIV5rbJv3gwTK0rtyYeHNzJ3ERCcddoNeIibnGR3wVWJk%2Bps1JaN1WjBEnNZuoygfXVdt8IM%2B%2B3k82UoODFCgU0FPbdlpPYuKqMnmPLeVkh3nfyQNqofvEfinbR7f0RmKgnwC5rOaGo3TMUAGv88yAB%2BgsYRgE9H4acWI85Ygj6xHCxYpVBJQ&X-Amz-Signature=aa3a2a0e19c05ea8bb34f0f8600e56bcde1ed338a6d9e8b0a5e134754c332464&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
