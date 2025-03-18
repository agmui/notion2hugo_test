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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FNTOX5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD8w3GKoQ4Hjs7BCwX1YeTEH5wSIIxcolaAbK3DEGshgQIhAMXAM6dO4RqcGhBl%2BM6T1pOm%2Bw4YVaMlaH1UXZKRrGFUKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbemFtg5AwmD0h4msq3AMSBRWVCpkdcWnH6orIwGHM7AMdu13qT4W7P37tHDnGbdQ0rcALGsXE486SwblaITIt6tnPDGzvUGS8zjzRskFZCTZxw0cq4jtbUijYLxY8sDxPxkJA6TMtOHrkxwst1cMNmjmM1NDq89hZEEwHw1HWvPm6XAG21TXUT%2FBlUf1lmwpOE1uvitUG0uXr5Q8%2FKA0oBW%2Fex6GIlxs1x3N51sFPxng4e70yX9P2kRRsU%2B8jHwcHj9er7dqPq32oPvDU3B4P6Dj9FBLfUt2LgASTIn0%2FcE0mGeYSO6fZXBEbBAe%2B7no37ADR6UadeVazK8ufEC4C1NtoK3W76kMv5Hv2%2BqllOsTO5ivtGrhkqCc1bRFUUT3D9%2FNbFaUoZeLf7nvPCspVqVdo54tc%2BxUAyOxigIV3wfvLT3JeQoM6DTtosrOuo9ohLecX%2FmH%2BXnVhkP2igilR8aIyL5zfB2eqfT%2F9HikBA2%2BU4VDtXaCSMV8qsF%2FOOtP%2BKnhSRR%2FdrQiuO08vuwdgNtRSExuEUYonL9jfmNK9XSxF9VKSnaDN3Mm47TG7mSUhxadpzC9BFrBtIIoLtm8ZNosmoSBp1wW9cXBDmZjd6v0KIAv0tUnExJFJQOoz00z7bH0SWeVEGa1mLDDfsOe%2BBjqkAUY0Ofjc5jLTBgZcTdpWbtti5kdKfopdx4q2SrZ1ZZjGk4i1C%2F4vMmKhEhn3ghjSYAlws%2FHG3gZBbI726SQ%2FG7JxB0N9J5H2Jek6ONVwmb1ZdWDFlnLfpFnCqHIlmWtggBy6%2FnUUefrgagiVAvCe644HpJAVutmUs%2BxkFEss%2FXPLnyIOLD5KzjJ1y05%2BK55rzSIFH1jlQpBfaiznPtQc1r4hI4u%2B&X-Amz-Signature=372b6ecd10dd526fe5ab4d51dc49e489ac26492718dedebc66792f184e2f4896&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FNTOX5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD8w3GKoQ4Hjs7BCwX1YeTEH5wSIIxcolaAbK3DEGshgQIhAMXAM6dO4RqcGhBl%2BM6T1pOm%2Bw4YVaMlaH1UXZKRrGFUKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbemFtg5AwmD0h4msq3AMSBRWVCpkdcWnH6orIwGHM7AMdu13qT4W7P37tHDnGbdQ0rcALGsXE486SwblaITIt6tnPDGzvUGS8zjzRskFZCTZxw0cq4jtbUijYLxY8sDxPxkJA6TMtOHrkxwst1cMNmjmM1NDq89hZEEwHw1HWvPm6XAG21TXUT%2FBlUf1lmwpOE1uvitUG0uXr5Q8%2FKA0oBW%2Fex6GIlxs1x3N51sFPxng4e70yX9P2kRRsU%2B8jHwcHj9er7dqPq32oPvDU3B4P6Dj9FBLfUt2LgASTIn0%2FcE0mGeYSO6fZXBEbBAe%2B7no37ADR6UadeVazK8ufEC4C1NtoK3W76kMv5Hv2%2BqllOsTO5ivtGrhkqCc1bRFUUT3D9%2FNbFaUoZeLf7nvPCspVqVdo54tc%2BxUAyOxigIV3wfvLT3JeQoM6DTtosrOuo9ohLecX%2FmH%2BXnVhkP2igilR8aIyL5zfB2eqfT%2F9HikBA2%2BU4VDtXaCSMV8qsF%2FOOtP%2BKnhSRR%2FdrQiuO08vuwdgNtRSExuEUYonL9jfmNK9XSxF9VKSnaDN3Mm47TG7mSUhxadpzC9BFrBtIIoLtm8ZNosmoSBp1wW9cXBDmZjd6v0KIAv0tUnExJFJQOoz00z7bH0SWeVEGa1mLDDfsOe%2BBjqkAUY0Ofjc5jLTBgZcTdpWbtti5kdKfopdx4q2SrZ1ZZjGk4i1C%2F4vMmKhEhn3ghjSYAlws%2FHG3gZBbI726SQ%2FG7JxB0N9J5H2Jek6ONVwmb1ZdWDFlnLfpFnCqHIlmWtggBy6%2FnUUefrgagiVAvCe644HpJAVutmUs%2BxkFEss%2FXPLnyIOLD5KzjJ1y05%2BK55rzSIFH1jlQpBfaiznPtQc1r4hI4u%2B&X-Amz-Signature=f7be2dad7009f7bd496f5707cccd09c47952cfc080e8918ddd4ee8a94fd32d58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5VVJGNT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAi0xiybRjiGPOSqJVddq1tc2hsjKI8kvavBkVhzsL%2B5AiBYeKzdj0t6AXxxZ2bvNWr3QO3%2FOyWUz2kzZp5D4Qc2UCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMA3Xm%2BQ82tgl90Vr5KtwDwTaDMU6hKpzxOLFdq7i3iiOFl6Kycjgn49MeIbkq3n6an8siG9in4QNbdnth2%2BaZXHnbi70ynFk5xjf59Pl3VDgHueetjjG%2FPzzdifoKxtzKxqt9U%2FohOWAP%2BFYstrlEUqvGHk1FUYtyelIvD2UgE9tCGTSL%2F2g1FhPMNwVnyphKjTJAZ8IVSLgwNDk78pE3zTaGY3LPlYw5DV13GwuDCUAZp218mQSF0p4Ya3OuaVxA4BGkOLlGlVyLIfRrTi99b8z5Q8dwzwTShOjDrCEPPGpMpbejKfCRlP07d0GzG%2BxKf3Dyqtn91GFkaeAREPAGAy1rDugp1PyPMpv%2FN3uhew4yV1Y1lZhPZdGLZ%2FwHYh%2BaooPe6TRFd1qyyj7CpPISivCp9%2FFeEqFaq3v6lvxKG95ct65gxVtnpBe35cbfNCM%2FHqJYGEsrRui7Nx9FVwtkwJErdrFA2V8aVYIz1W46fSOLE78hyn0FkPcV3nDMh3V2BpZ9yKYimDbirLeiQPosM2QT6ycSUhikq7fGBXMYF5nHpPQpRlSDDeTai8g%2F3w0o7nqv5%2Bm5kYqHiH6y6W2ppVSOZMrvND5ZIFOMNOs6U1zDDhMQcvLGJEW7Qcrcu%2Bvi%2F2bYwTAMoUCt0hUwzrDnvgY6pgFP%2BpiugGPvajV6pKNNPoX89dWrQvqYxq8MgZ%2BAYwBJGuk%2B4mH%2BhlaWYcfBUQ1qtY%2BmQPmQ5LSBNbVqSPgNtiayW1BhaIKTkYwHFFxGBzM2p1xnNnRMXe%2BlfU%2FrhoGaHUtw2%2Fk566XoorD0qOTDv9pjv73ffwID0S9wizXRY8eYqOc2GKFiJ1NAf2fsVGcpGqNlffELAkJTQgXEeC%2FX9zkeo1Ve3ekd&X-Amz-Signature=97a7ab2c10474de32e29476b92c6cafa555bb64018ba3a59ea634eb2e64053db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQO74UJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIF7o6Hu3Bhtkd9WEuvRGvS36d%2FuB2k2sUvF%2FrIvQoqGVAiEAr77EUduzNhxlYUgeeSU1LiU6aBwzJJb7PuFs9v3SrlYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB%2FXgYGqq5FKqHeqbircA%2Bp8LVcmI1XA%2B8Tjqh79Dc4ABFRR9QCc6HbbuEA3GjPdbWis23QYGKrB%2FgsG%2F7JeiAIJHYUQ7QISoNm90VVFg0CQaMCfl0m7oL6Qpe2z2zXhPw7JzOD5jjXZDTlCz8xRn34hY3qzRYC3%2BoXwnnWuc7wEXVftz53DxQyBoSnGBvK6RKTurckaLKaswoCOMsi2rcd%2Bp5PjvQ433is7ZJfvz%2FlTAMdk5z86cGJxGYDALlyHo7fu7wAZ%2F9oG7pwNj4b03BQsjEKJw2sYJ4PIBPOzr6bIJqonWff0hmaoo5rI3grNAP7%2BQbetxzDzRxg4ASB7WYJi8uYtrRj1t%2FjrSkMLPOJFzLUsj7HM5yanRoKYeEM8VRwBi1%2FugpBdrzmxwXBuIL8RjUD6Rc6zGYCxqT080HSfoHWOvvFq3uMGuR6HEX9l39Y4t%2FPrCJQRrZpV0ly4ic1xPv9KMlXZXQnP%2BQhsIlX8bV4zGRGUDloBb7qCvuwCeqPqe7sCZsr9rgbub%2B63x5yWshFBnNd4C0J9leBJLqDQxns0Pj0w0M86zW%2FEjGHiNx4EkwTRdymmpTHWATRkkTjF1vhZaTvQ2OlElERSnBwvMStn1vr1JM7sc44KPvb0Czo%2BlZ5sVdFP3%2BnZMOiw574GOqUBZmQP5ynjfoiEmAzPYqX%2BtteLTPE%2BWp1B9PbMATg6GBwWXYa1ty0eeP6XicuA4FPeAtWnGojLxuBkokYfRMCoU9pFOPqleQOCxXwNBXMq46gh2oQEYsdapI%2B35hdnvxx6FEUufRgQnmKLEwX9Nopbo6NCHNe4M75pzWpRy8vrOqNSJuEne7eRE1JImDnQFnELSrrjyFLpAwB%2BpvMzZmevmB9L95kC&X-Amz-Signature=7c218590dafd739aa825f519d78d4039757eaad3141a413063b25b2cb76e315a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FNTOX5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD8w3GKoQ4Hjs7BCwX1YeTEH5wSIIxcolaAbK3DEGshgQIhAMXAM6dO4RqcGhBl%2BM6T1pOm%2Bw4YVaMlaH1UXZKRrGFUKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbemFtg5AwmD0h4msq3AMSBRWVCpkdcWnH6orIwGHM7AMdu13qT4W7P37tHDnGbdQ0rcALGsXE486SwblaITIt6tnPDGzvUGS8zjzRskFZCTZxw0cq4jtbUijYLxY8sDxPxkJA6TMtOHrkxwst1cMNmjmM1NDq89hZEEwHw1HWvPm6XAG21TXUT%2FBlUf1lmwpOE1uvitUG0uXr5Q8%2FKA0oBW%2Fex6GIlxs1x3N51sFPxng4e70yX9P2kRRsU%2B8jHwcHj9er7dqPq32oPvDU3B4P6Dj9FBLfUt2LgASTIn0%2FcE0mGeYSO6fZXBEbBAe%2B7no37ADR6UadeVazK8ufEC4C1NtoK3W76kMv5Hv2%2BqllOsTO5ivtGrhkqCc1bRFUUT3D9%2FNbFaUoZeLf7nvPCspVqVdo54tc%2BxUAyOxigIV3wfvLT3JeQoM6DTtosrOuo9ohLecX%2FmH%2BXnVhkP2igilR8aIyL5zfB2eqfT%2F9HikBA2%2BU4VDtXaCSMV8qsF%2FOOtP%2BKnhSRR%2FdrQiuO08vuwdgNtRSExuEUYonL9jfmNK9XSxF9VKSnaDN3Mm47TG7mSUhxadpzC9BFrBtIIoLtm8ZNosmoSBp1wW9cXBDmZjd6v0KIAv0tUnExJFJQOoz00z7bH0SWeVEGa1mLDDfsOe%2BBjqkAUY0Ofjc5jLTBgZcTdpWbtti5kdKfopdx4q2SrZ1ZZjGk4i1C%2F4vMmKhEhn3ghjSYAlws%2FHG3gZBbI726SQ%2FG7JxB0N9J5H2Jek6ONVwmb1ZdWDFlnLfpFnCqHIlmWtggBy6%2FnUUefrgagiVAvCe644HpJAVutmUs%2BxkFEss%2FXPLnyIOLD5KzjJ1y05%2BK55rzSIFH1jlQpBfaiznPtQc1r4hI4u%2B&X-Amz-Signature=5108b189a735c51edc1d1cf4ac427f8ca09ce821ee860562eedbca07399cd07e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
