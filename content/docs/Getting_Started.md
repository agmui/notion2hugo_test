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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCQ5MOI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGgqANRzYEPHQJoOxlUyrCXKOfXaZuIseFRtz53XQ%2BhEAiBpiE1KKG%2FwblU1yW7aGRflBVj8fpleXYoZRBjjuLL9HSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMrpsliex6ZbT4lCvRKtwDCO2Zgs2jf8UxREGEGydj1YDqSABeDvLbhDMVAz%2FGASeyQyi83ZKETIM0lDvXLxeQh1wH%2Fx6XutOLRHeGGk4oT17GQW1OlUy55YbAzFFxLcbCgl7g5xLYVtBeVsIwA%2FA5c30YjTc7TbX1FUvTGhSFLHjynq7K8%2F5iiLVGmq0%2B1UK4dn2CZ6Lei0J5XzP40rQeDwbzMVEg8pyXRFI%2F5HurMMy1YXPZ%2BlI8CCTATNcZ34VYevuGp5UqZzYDrlHjRikWenkVIbrpyvndYwNUZdgFIoB8LHr5M9LqxVh2OyYq82UqG7J6xnwdGjlw5z%2FBWwvnPKDIWnf8RCCTWTWwjpPugS3MU6z8bAD0DnPS8gqt46my7XClqyU4wnkms9Q8FozmjnK1feoAHZyX48BtuoDfWZkXE13lKMb%2Bt%2FVhSCFank%2BfZzkh75rZRDTA1ej2iAVR%2Ff%2FajAPcep0s8GDPKn7hTyS6kAAxNN3hWEyGwbQqAQFoJN15KeNR0d8VmesuQdG8GzkEKSY5PjG3jKWGcCFLjPxMDmzxzg%2F7CoKfrbl2OgDQTtcpmKgM395QeAL%2FjL4bQ9seW%2B2f1cOzU9IuLxfZgxNItA8S1WOPT7BqWxlTYbZykntLEaJDNfQV4eUw4YL0vQY6pgHpVOQd4sSkr7RygO4NObODJ8Im7zjOjduRXzaOkRs%2BxWtQjQo5%2FUKrS90sR8KRPpZemUoTXf8D9t%2F%2FOIZEWrT9%2Fl8Etlpu%2BeYKW0%2BeyE99ZTekCs7eyvjtgTCprgFFr7N6VKeH6uBpE2Ka9bb%2F1KuVBTumzJdXY3INL7%2BUL8%2FmSlNyynI9ThTqC0XmhjspMldH6R5Z0MLvxtxOWHtrJLKMCp7uKCb3&X-Amz-Signature=5ab59c7d3e5002cb2bd51a4778422a139a857e639bb2af94c4637e849be02192&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCQ5MOI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGgqANRzYEPHQJoOxlUyrCXKOfXaZuIseFRtz53XQ%2BhEAiBpiE1KKG%2FwblU1yW7aGRflBVj8fpleXYoZRBjjuLL9HSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMrpsliex6ZbT4lCvRKtwDCO2Zgs2jf8UxREGEGydj1YDqSABeDvLbhDMVAz%2FGASeyQyi83ZKETIM0lDvXLxeQh1wH%2Fx6XutOLRHeGGk4oT17GQW1OlUy55YbAzFFxLcbCgl7g5xLYVtBeVsIwA%2FA5c30YjTc7TbX1FUvTGhSFLHjynq7K8%2F5iiLVGmq0%2B1UK4dn2CZ6Lei0J5XzP40rQeDwbzMVEg8pyXRFI%2F5HurMMy1YXPZ%2BlI8CCTATNcZ34VYevuGp5UqZzYDrlHjRikWenkVIbrpyvndYwNUZdgFIoB8LHr5M9LqxVh2OyYq82UqG7J6xnwdGjlw5z%2FBWwvnPKDIWnf8RCCTWTWwjpPugS3MU6z8bAD0DnPS8gqt46my7XClqyU4wnkms9Q8FozmjnK1feoAHZyX48BtuoDfWZkXE13lKMb%2Bt%2FVhSCFank%2BfZzkh75rZRDTA1ej2iAVR%2Ff%2FajAPcep0s8GDPKn7hTyS6kAAxNN3hWEyGwbQqAQFoJN15KeNR0d8VmesuQdG8GzkEKSY5PjG3jKWGcCFLjPxMDmzxzg%2F7CoKfrbl2OgDQTtcpmKgM395QeAL%2FjL4bQ9seW%2B2f1cOzU9IuLxfZgxNItA8S1WOPT7BqWxlTYbZykntLEaJDNfQV4eUw4YL0vQY6pgHpVOQd4sSkr7RygO4NObODJ8Im7zjOjduRXzaOkRs%2BxWtQjQo5%2FUKrS90sR8KRPpZemUoTXf8D9t%2F%2FOIZEWrT9%2Fl8Etlpu%2BeYKW0%2BeyE99ZTekCs7eyvjtgTCprgFFr7N6VKeH6uBpE2Ka9bb%2F1KuVBTumzJdXY3INL7%2BUL8%2FmSlNyynI9ThTqC0XmhjspMldH6R5Z0MLvxtxOWHtrJLKMCp7uKCb3&X-Amz-Signature=dbb17987613381548e25a0ca56b15c9adb594a95421825c784bba5dec7af57dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=a99e8f4c083a352140b86386a0daa8462f528a1dc112a9d2976a49b8b8878ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXGRPAY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCFaDhQ41AOHUEfLJX%2FIFtOsvgxLXK5e8i2lFTOQ0OzoAIgHKBUO%2B0sQE29BFH8Qd1QMh5Z%2B1R70RjVoI722bdfmnYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN7usZkVvUKF8gWsZircA1fMEYiSa8u80O%2F6Bwp4raUSwrXhYawtl05FzAFdn%2BcRNPH0cUUYpK2TP8SYq%2FDUfg%2FY8TDF1kiA%2FviTZXyKjfpD0x66QE2MeAky7EUWNWcO%2BEQrmw0QbJxPrta5Ih09PlJzMv8kM4ZvpQSIe0oa5ujwFfYADAnibb5ZWeHBpp%2BqJRFMUHSLAhCjRrdzNIjawOB3Ohk0SRQgfGeBB%2FiYjP9mL62kxpn6gdgxwwFg1A1CzJDgbRVvoLEjwBTu5D6z3nwQhXTk0zHRaGY4z1vXOvgiAPF%2FOaUsRMQt3DjF11RN9%2FtvfeMin67mvKNttDNvtrWKKVBYcsMn4s460onfELs4YZhc2DlDtmV1moMqvr%2BGu%2BoO2YG0q5Y%2FA3mw14ZLOdWhNCXCLR8cFCINntfzfoACV0cLxRuFtETVUxMt5aNNOYDHWsOogtPqiL00PzFeO0Qtkp3wp%2B%2Bk1Qd4XomumPBzg8aR155dWh3yL%2BczzI5SW3Agym3F0l5jvVHocp7UTEUecbDaFOZGfQbZEkkjuOhipg7tGqjLhC9G1uLQOe4e1qUy1uq3sxSrBHFUwbRevxqkZuilU%2BtdZqSJN5CbdtMX0T%2BfvPxuMKxk4aDatoYtGwRhVRQN0AywjL44MOyC9L0GOqUB7LGGBaRfIZX5AQ%2Fl6pCVa2OwuLGvs3dtMdV7d9ga4j3CPqlybu65ghEfqU8vL%2BhxPKstlcX2lEzb4O79Y8bm%2BpNpS0lyLR6key0gXoPJaSGrXHVNyP5Lu93OjlifYoBV1MnHg0k6VOWTfJeIDEyWxM%2BFOHuyx3U8Bk8X4YyFz25fwImH4S5mfWFWZoZHWtKXZ%2BIGfCXJCJdWvy6v1tLpG6wkrO9R&X-Amz-Signature=85b490062eb57ca154afd597086c951d76e47e9478158b787b3e80ade61d1dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCQ5MOI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGgqANRzYEPHQJoOxlUyrCXKOfXaZuIseFRtz53XQ%2BhEAiBpiE1KKG%2FwblU1yW7aGRflBVj8fpleXYoZRBjjuLL9HSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMrpsliex6ZbT4lCvRKtwDCO2Zgs2jf8UxREGEGydj1YDqSABeDvLbhDMVAz%2FGASeyQyi83ZKETIM0lDvXLxeQh1wH%2Fx6XutOLRHeGGk4oT17GQW1OlUy55YbAzFFxLcbCgl7g5xLYVtBeVsIwA%2FA5c30YjTc7TbX1FUvTGhSFLHjynq7K8%2F5iiLVGmq0%2B1UK4dn2CZ6Lei0J5XzP40rQeDwbzMVEg8pyXRFI%2F5HurMMy1YXPZ%2BlI8CCTATNcZ34VYevuGp5UqZzYDrlHjRikWenkVIbrpyvndYwNUZdgFIoB8LHr5M9LqxVh2OyYq82UqG7J6xnwdGjlw5z%2FBWwvnPKDIWnf8RCCTWTWwjpPugS3MU6z8bAD0DnPS8gqt46my7XClqyU4wnkms9Q8FozmjnK1feoAHZyX48BtuoDfWZkXE13lKMb%2Bt%2FVhSCFank%2BfZzkh75rZRDTA1ej2iAVR%2Ff%2FajAPcep0s8GDPKn7hTyS6kAAxNN3hWEyGwbQqAQFoJN15KeNR0d8VmesuQdG8GzkEKSY5PjG3jKWGcCFLjPxMDmzxzg%2F7CoKfrbl2OgDQTtcpmKgM395QeAL%2FjL4bQ9seW%2B2f1cOzU9IuLxfZgxNItA8S1WOPT7BqWxlTYbZykntLEaJDNfQV4eUw4YL0vQY6pgHpVOQd4sSkr7RygO4NObODJ8Im7zjOjduRXzaOkRs%2BxWtQjQo5%2FUKrS90sR8KRPpZemUoTXf8D9t%2F%2FOIZEWrT9%2Fl8Etlpu%2BeYKW0%2BeyE99ZTekCs7eyvjtgTCprgFFr7N6VKeH6uBpE2Ka9bb%2F1KuVBTumzJdXY3INL7%2BUL8%2FmSlNyynI9ThTqC0XmhjspMldH6R5Z0MLvxtxOWHtrJLKMCp7uKCb3&X-Amz-Signature=300e3674de507c95b9bfacca681a44bcb244fa99d89fc6ab723f524f4a9d9400&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
