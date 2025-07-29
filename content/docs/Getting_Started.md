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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQSE52Y%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv%2F18VHRKEhgZC3rZ37LDhyHcgWFIApq5UbX91BM0u4AiAaMjzexJdFgrLvXpFw0eym8CamkPtNfz8KBfV9r9ty9iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6rL8yo4epsf53a4KtwD9BU3Y%2FtzCtSWYqWqwYsKOnwK7wlDwkCPYcb4tfD1iy7lHC6rlQ%2Byzi5VRr%2FVmld5UjejeMz1lST8BOKyrc4wTDryVdugL6aUScTlizWQELYTvKAAzn%2F0CzG%2BCc%2BKd40Fi5jU4BuwcZEDFQ0B8bv1MiEXwmHfiDro7FoOVzHalNSUOnpZ%2FJPtLz2BO%2BXCk8SXhk300LVj%2BFUQB0pCr%2FKtrRYmRoMKpOcAfH%2FqMvdyOwXsmw2htdw1tLxDfMU1uN0KTtmgCoL7I0qFKmTKOlSCN8MOwPMri5eORLV2xul9ohXN%2FuC2TiEIwbbb0LY8ymhXfXxHIp6bq%2FKiYnesCDR7Ct5F9i2pDLFjk6VEhKlTIR%2ByXkple9u0Qd1pw41ahmgdbWjV9WL0BkFDSaJXS4E0iUoE%2BtNnaswZZvfq3Yr3Xpf1e%2FjV9PLv21aSvb1UgCdflff2TVOGRwgCYDTJbbxIyhqGYYiIySiiwvRVC%2Fw3Voz48O3aDV4twr6OCWzZ9KM%2FL6Tr5DrhtUdXf4o9cnRIloPrf24SPQPC65r4Oq6DDc94Fw%2FfmtZfOQVNY4BhDQbB6G4DrGB45M5qSUPQ44RqZQRdHeyzpYEP%2BKhMry1vwMDOTGITJw7Q8h9jbjAwmIqlxAY6pgGeUz8XNO%2BSA5vYp50of16ZQI%2Fq3ohZam3Z9I51PWsqYFRmwxcaTzlNObj3JKD0y8LslxFwBgej9R2JafUfA5jFaP%2BU4d%2Fldde8smbHyL6hE3mMIDQ7t2HN3CvW7ewnJpo4cQqDRHvj0LoJq0Wzx%2FYm8SDrx8TjUYzY%2Fdm%2FbWNhl3XHyY7CXuxM%2BmHrknSS%2Fm3CcM4bMGrbQuhv4Pl7S89UZ1IVjkrs&X-Amz-Signature=9211aea907851bd7dd9961eb2260bfb212984f873779a651d0967d03eea73a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQSE52Y%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv%2F18VHRKEhgZC3rZ37LDhyHcgWFIApq5UbX91BM0u4AiAaMjzexJdFgrLvXpFw0eym8CamkPtNfz8KBfV9r9ty9iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6rL8yo4epsf53a4KtwD9BU3Y%2FtzCtSWYqWqwYsKOnwK7wlDwkCPYcb4tfD1iy7lHC6rlQ%2Byzi5VRr%2FVmld5UjejeMz1lST8BOKyrc4wTDryVdugL6aUScTlizWQELYTvKAAzn%2F0CzG%2BCc%2BKd40Fi5jU4BuwcZEDFQ0B8bv1MiEXwmHfiDro7FoOVzHalNSUOnpZ%2FJPtLz2BO%2BXCk8SXhk300LVj%2BFUQB0pCr%2FKtrRYmRoMKpOcAfH%2FqMvdyOwXsmw2htdw1tLxDfMU1uN0KTtmgCoL7I0qFKmTKOlSCN8MOwPMri5eORLV2xul9ohXN%2FuC2TiEIwbbb0LY8ymhXfXxHIp6bq%2FKiYnesCDR7Ct5F9i2pDLFjk6VEhKlTIR%2ByXkple9u0Qd1pw41ahmgdbWjV9WL0BkFDSaJXS4E0iUoE%2BtNnaswZZvfq3Yr3Xpf1e%2FjV9PLv21aSvb1UgCdflff2TVOGRwgCYDTJbbxIyhqGYYiIySiiwvRVC%2Fw3Voz48O3aDV4twr6OCWzZ9KM%2FL6Tr5DrhtUdXf4o9cnRIloPrf24SPQPC65r4Oq6DDc94Fw%2FfmtZfOQVNY4BhDQbB6G4DrGB45M5qSUPQ44RqZQRdHeyzpYEP%2BKhMry1vwMDOTGITJw7Q8h9jbjAwmIqlxAY6pgGeUz8XNO%2BSA5vYp50of16ZQI%2Fq3ohZam3Z9I51PWsqYFRmwxcaTzlNObj3JKD0y8LslxFwBgej9R2JafUfA5jFaP%2BU4d%2Fldde8smbHyL6hE3mMIDQ7t2HN3CvW7ewnJpo4cQqDRHvj0LoJq0Wzx%2FYm8SDrx8TjUYzY%2Fdm%2FbWNhl3XHyY7CXuxM%2BmHrknSS%2Fm3CcM4bMGrbQuhv4Pl7S89UZ1IVjkrs&X-Amz-Signature=07650f629f8f0e8a37d2480ca0ddfb82c657b016c73944bfec296f81162819ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQSE52Y%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv%2F18VHRKEhgZC3rZ37LDhyHcgWFIApq5UbX91BM0u4AiAaMjzexJdFgrLvXpFw0eym8CamkPtNfz8KBfV9r9ty9iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6rL8yo4epsf53a4KtwD9BU3Y%2FtzCtSWYqWqwYsKOnwK7wlDwkCPYcb4tfD1iy7lHC6rlQ%2Byzi5VRr%2FVmld5UjejeMz1lST8BOKyrc4wTDryVdugL6aUScTlizWQELYTvKAAzn%2F0CzG%2BCc%2BKd40Fi5jU4BuwcZEDFQ0B8bv1MiEXwmHfiDro7FoOVzHalNSUOnpZ%2FJPtLz2BO%2BXCk8SXhk300LVj%2BFUQB0pCr%2FKtrRYmRoMKpOcAfH%2FqMvdyOwXsmw2htdw1tLxDfMU1uN0KTtmgCoL7I0qFKmTKOlSCN8MOwPMri5eORLV2xul9ohXN%2FuC2TiEIwbbb0LY8ymhXfXxHIp6bq%2FKiYnesCDR7Ct5F9i2pDLFjk6VEhKlTIR%2ByXkple9u0Qd1pw41ahmgdbWjV9WL0BkFDSaJXS4E0iUoE%2BtNnaswZZvfq3Yr3Xpf1e%2FjV9PLv21aSvb1UgCdflff2TVOGRwgCYDTJbbxIyhqGYYiIySiiwvRVC%2Fw3Voz48O3aDV4twr6OCWzZ9KM%2FL6Tr5DrhtUdXf4o9cnRIloPrf24SPQPC65r4Oq6DDc94Fw%2FfmtZfOQVNY4BhDQbB6G4DrGB45M5qSUPQ44RqZQRdHeyzpYEP%2BKhMry1vwMDOTGITJw7Q8h9jbjAwmIqlxAY6pgGeUz8XNO%2BSA5vYp50of16ZQI%2Fq3ohZam3Z9I51PWsqYFRmwxcaTzlNObj3JKD0y8LslxFwBgej9R2JafUfA5jFaP%2BU4d%2Fldde8smbHyL6hE3mMIDQ7t2HN3CvW7ewnJpo4cQqDRHvj0LoJq0Wzx%2FYm8SDrx8TjUYzY%2Fdm%2FbWNhl3XHyY7CXuxM%2BmHrknSS%2Fm3CcM4bMGrbQuhv4Pl7S89UZ1IVjkrs&X-Amz-Signature=0993e273b3c97b1d781d6b483b0700a2be4b26e27c3ca1e58d318450279f1b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSM6OMB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfLFpt4V3xtsh23FR6lkCX%2F14BW5FhLndh9nQTZKqSrQIhAPDtI6o1IRo25TIaVwRika86j9gDWkbUmHyjTvwd0NxdKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDJiT1vWAhrmRg4E4q3APkya5xaOaYswx3vSPbI5NTDIipO8ZlMX%2Fp1NetdEdHeAfbCXuIbEX22uEFq%2B%2BkA9h%2B5jvERAwdFsLaBfAwZhVmwKnteBVq0HIj4RoQO30d5JGnHquoVgyW3c%2FoqUntYyg7FNWwgvKd4rTXM21TfiVaCBVc2LTEidwNUdlWb55pUNOgdXMiZurWXsYGiGugHO2aNo8kynaPFJ8TuSYVnL7nb2ZIG4ZkMNfWjFbIdSM5ARGQr2xRSNcM9FF1PqP29hxETA3RDVDwj%2F28EqZcvjacITEOE5c%2BiUVovrLFGIibLGlloIQXyLIY1eEHcJxy9m%2FhmqvCFWeiqc3WWgP%2BqIqXBaBsdsZsOg8g0%2F7%2BXuRCYW89hCXX05RVRhQkSW70n3u3cMvKeF6m4Pk7BhaTv1m%2F3q4%2Fc%2FTuvwlTLG%2FjqlvSwL3Y1htM4pLcJQEaol2YQtpdQjhBvV3ziBDj6SF7hy5HYhXW7QQkw%2BnUj7yIDaaqRttj04z9IGVf31SKdyfgC1XkrSaO0iP73AYFkLHUVntyCgsQF%2FHRa6gISHfTmDOwX5zo6E4mYBLCXzmVBrm5Dttj7T883ojsQkvdOru7YzZ%2BO%2Ba35ghVR3mOrCXciI1nXS390vbH%2B6o9dYM35TDCiqXEBjqkAbXcm55X78z8BkN5WuUmdw3iK9HdbSVOPzI2r2eHLvVXhBizSM1JAIxNea8n4lc3tWB9umg%2BZ3K2l%2Fxsc7OiPqtDiyBSml%2Byq63nuC7SEE1%2Fm29TEdtX0EB9fwWrp2n10O8tYe9SaBS%2FiM5NAMgZOh%2F1v%2FqpCn1NA3%2BIXE6m5GJoMFZY4wAENJ7jZMc8oZ4sMG1OxTtcgppdE795U87yo2%2BY%2B0ZB&X-Amz-Signature=d0b87cc6ebb94c41c2c7c0ffce7779692a859490b9e15ef66597b62c9eb81218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOPD5IR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiIAZIXiwwQv30rWLlVBZh4Sn48lM0Su%2FcgQ5LgGVr7QIgR%2Fujj0K6zlL31taLfPd9zJsO%2BeRAYgymfExBAbaPvSwqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNBNpUCQ3GNYG%2BP7yrcA%2FU1B17UFUmzEqwE20meQce1wSxeIBYDQHIeKBLzdymiD8s5gdUrrQZCwP%2BQfR6diLsMVzQAcYv6Pb9Ttp2f56zYZ0yUoNtxwPrtAu8tZXpotJ4PttYJRwLJamLApNQZAQ3jPCLTY17jJiWbnIIGFGIzKwshT5PLNcNpuzpzYUxEaQT3PKmzZ%2BHQgWQd0%2B%2BtHneAc2rDm3yL5xDcQx7UjdxRggxkUCLt7O8NgPLHKB1SPZp7dviEe%2FKKzVs39xQFWtKLJ6%2BQffrOgLnbHU%2F7l4qtgZIHgKJhp3xeipa0f0vFXDxAz3T%2BbPDfkLxNxoGQhM3jjX3MSLZgEW8kSVmxBTxHRpxlcsvFllgED5J2pp9ol6AmOxfXoo51Id52f%2F9F1xS8GFAP23Xg8zGZUW7UX0CYCIWoSRW%2Bo%2FoD7rMbwTbRCdnBNsbVvVjnazwILPPmJLMKjD9pYqX1uyo8xeQV3Do5hlK7n5cO8GVBDB2XyT6cOsfThYwbfinfjBbPlVBDdGcg%2B9pfHE5VJhhna2wpCrElShZSXqzV5BAAiOVHO9XMOCn0rYRJKSyMwGM8xZ6oLRMSFaVbbENnFIo%2FJdrzT0l4vZn9xBO%2BbZXpPZPj%2BZPbwnuI2qhHXijrgIJCMNSKpcQGOqUBxAF%2BvPJgdbmqsKWVDQV%2BDp4%2FWKwPSApL4diY2Y7KBAy4P9c%2F9gL05RghQ8pDujljt5GZbSl66fOzx97pDclhoSZrFiuA7%2BRSN5yo1WiD%2FdkqVWPrvZt%2Fk6%2FMjivzuzOlgi0LZYnRX%2BoFbW%2BzriJeE3SOip8mpNoNfTNOTp6aBI9ZUHhUrU0vXwlDt6qSGwl9vK5Ml8MVboq0xxZY0Ii5H3WOihbg&X-Amz-Signature=268ed0a9d9064260d54934921d1524532265748975f8d618c45e10d7bf61fb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQSE52Y%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHv%2F18VHRKEhgZC3rZ37LDhyHcgWFIApq5UbX91BM0u4AiAaMjzexJdFgrLvXpFw0eym8CamkPtNfz8KBfV9r9ty9iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F6rL8yo4epsf53a4KtwD9BU3Y%2FtzCtSWYqWqwYsKOnwK7wlDwkCPYcb4tfD1iy7lHC6rlQ%2Byzi5VRr%2FVmld5UjejeMz1lST8BOKyrc4wTDryVdugL6aUScTlizWQELYTvKAAzn%2F0CzG%2BCc%2BKd40Fi5jU4BuwcZEDFQ0B8bv1MiEXwmHfiDro7FoOVzHalNSUOnpZ%2FJPtLz2BO%2BXCk8SXhk300LVj%2BFUQB0pCr%2FKtrRYmRoMKpOcAfH%2FqMvdyOwXsmw2htdw1tLxDfMU1uN0KTtmgCoL7I0qFKmTKOlSCN8MOwPMri5eORLV2xul9ohXN%2FuC2TiEIwbbb0LY8ymhXfXxHIp6bq%2FKiYnesCDR7Ct5F9i2pDLFjk6VEhKlTIR%2ByXkple9u0Qd1pw41ahmgdbWjV9WL0BkFDSaJXS4E0iUoE%2BtNnaswZZvfq3Yr3Xpf1e%2FjV9PLv21aSvb1UgCdflff2TVOGRwgCYDTJbbxIyhqGYYiIySiiwvRVC%2Fw3Voz48O3aDV4twr6OCWzZ9KM%2FL6Tr5DrhtUdXf4o9cnRIloPrf24SPQPC65r4Oq6DDc94Fw%2FfmtZfOQVNY4BhDQbB6G4DrGB45M5qSUPQ44RqZQRdHeyzpYEP%2BKhMry1vwMDOTGITJw7Q8h9jbjAwmIqlxAY6pgGeUz8XNO%2BSA5vYp50of16ZQI%2Fq3ohZam3Z9I51PWsqYFRmwxcaTzlNObj3JKD0y8LslxFwBgej9R2JafUfA5jFaP%2BU4d%2Fldde8smbHyL6hE3mMIDQ7t2HN3CvW7ewnJpo4cQqDRHvj0LoJq0Wzx%2FYm8SDrx8TjUYzY%2Fdm%2FbWNhl3XHyY7CXuxM%2BmHrknSS%2Fm3CcM4bMGrbQuhv4Pl7S89UZ1IVjkrs&X-Amz-Signature=f6a58b1074cbdf8cd79a01b126545304272b4c417990b13b35a6277cfce68402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
