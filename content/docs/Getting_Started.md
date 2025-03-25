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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF2JNGMT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ0jZ6q6dmsRUo%2F6Q3Z19v8PtH7%2FRpR7l18thNOHb8OAIgD60MdyrCOxGUMPaO72zYIdlwcgz5NaH9%2Ffv%2BLY3BReIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCq1HQlh9FzDbmjQECrcA7iSw5gYuxE99Bv1uIfxBSpkavpyCcXNy7Viccx8AqsPz5VycikUYdrNE%2FNF2CLPJaTEBwSlNhWz1TmDs5X7QXlSuMAp65nqBkZpPIVxfj5ofBLDoAtCPSobtQQ%2F2X4MquM3lfsfDYB9TKwbEGXaMHTkcD%2FuQrduqe3W4dxlVPQzBJuixJuIXRzgl1zBBkJuB7wZ6DRHNLXbv%2FCTP%2BELcnVbyOEiYoISnCcDrWVPjlMc5wsR1no8iEVt1T8J7X3TpZzA6KBRRiu4tWAITUuE8WvjzTnnEHQVr%2BX3dvQ5wt%2FPsVIfCl4z8%2Fo0UOaFxkxRn3J%2FRiKNYSm8bBF1xq2wzrohlM5UXMVc1hVOdi5fiR%2FamQgzmLTdW46WTE%2BWkZwEjGfbc1cSoV7l7EacyRyCArmmsOhuZRb%2BWeJtyi9%2BjflKZgxRKGODxdZ1hKAtkt4NH%2B3r97uxeMGFIanRLNdmSmykw%2Fx6iSP%2BP%2FPOvRvsu7AagrmvePbiuK5exso%2FwSY5TewR6IvUHT4mUadXcEc7K6XWRdNOwpc2VV9XNFRbakHODWCTwcZmNdjPqy%2FsA3HwjM6dVHinfKvU27ALGXv3Aw1hIDpKFsEJbDunGuQai8w%2F3zJ3N8xLyhxcFiqmMK6vib8GOqUBEP8tbNQgy%2ByvQCl1%2B9rXiC8Zc2P0pILqdlo5hAOriiCNv6nQwWf1YWaLi15WloXGo628tdz0NcqCcY3u2pQds0zMcjRDIZu0aTmFw76PlyyMnWikh%2BUctfKDYsaVoCsOYmpKv%2ByUkZ%2FCj%2FMKtxUyhKgMUN0Qti9QaBtS6h7Z8kaRI%2Fo%2BW6VaPtpYEbE%2F3N9HToOShCNJpW5P4KDQImxcNhZFqi95&X-Amz-Signature=a59be4cb0f3820cd7da173b1454009a78288bdc73ec4621010fb12bfd04197d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF2JNGMT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ0jZ6q6dmsRUo%2F6Q3Z19v8PtH7%2FRpR7l18thNOHb8OAIgD60MdyrCOxGUMPaO72zYIdlwcgz5NaH9%2Ffv%2BLY3BReIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCq1HQlh9FzDbmjQECrcA7iSw5gYuxE99Bv1uIfxBSpkavpyCcXNy7Viccx8AqsPz5VycikUYdrNE%2FNF2CLPJaTEBwSlNhWz1TmDs5X7QXlSuMAp65nqBkZpPIVxfj5ofBLDoAtCPSobtQQ%2F2X4MquM3lfsfDYB9TKwbEGXaMHTkcD%2FuQrduqe3W4dxlVPQzBJuixJuIXRzgl1zBBkJuB7wZ6DRHNLXbv%2FCTP%2BELcnVbyOEiYoISnCcDrWVPjlMc5wsR1no8iEVt1T8J7X3TpZzA6KBRRiu4tWAITUuE8WvjzTnnEHQVr%2BX3dvQ5wt%2FPsVIfCl4z8%2Fo0UOaFxkxRn3J%2FRiKNYSm8bBF1xq2wzrohlM5UXMVc1hVOdi5fiR%2FamQgzmLTdW46WTE%2BWkZwEjGfbc1cSoV7l7EacyRyCArmmsOhuZRb%2BWeJtyi9%2BjflKZgxRKGODxdZ1hKAtkt4NH%2B3r97uxeMGFIanRLNdmSmykw%2Fx6iSP%2BP%2FPOvRvsu7AagrmvePbiuK5exso%2FwSY5TewR6IvUHT4mUadXcEc7K6XWRdNOwpc2VV9XNFRbakHODWCTwcZmNdjPqy%2FsA3HwjM6dVHinfKvU27ALGXv3Aw1hIDpKFsEJbDunGuQai8w%2F3zJ3N8xLyhxcFiqmMK6vib8GOqUBEP8tbNQgy%2ByvQCl1%2B9rXiC8Zc2P0pILqdlo5hAOriiCNv6nQwWf1YWaLi15WloXGo628tdz0NcqCcY3u2pQds0zMcjRDIZu0aTmFw76PlyyMnWikh%2BUctfKDYsaVoCsOYmpKv%2ByUkZ%2FCj%2FMKtxUyhKgMUN0Qti9QaBtS6h7Z8kaRI%2Fo%2BW6VaPtpYEbE%2F3N9HToOShCNJpW5P4KDQImxcNhZFqi95&X-Amz-Signature=7b3870c30844562fdf79b2c51c8a54aa033cda5cfaea8f3dd73e17fc86614894&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUIUJW3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7U2O5noCCNMhCA38w%2BbKtXAoZHlQmTpoH3epKRcainwIgFf%2F8WoxK6YKOHOZEbhmmB%2FFSKOFK%2FrxocefOncM0iuoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPHcBJEdFdfKyiEYByrcA50wcWprS46xK1oPUibZxKkqeiFt6w8fX3QhZgAXTsxWnHekqdRe4OJKajklSM4%2F5VRsTz3kVoIim%2BPhO1S4czFyLryaiA%2BmfPBlmD1MM1n1d%2FDLb4hujknnWQmcnJD4lHkMEeTJB6JtJLrlqy2Z9q0tdLjPu311BloWKq55a1emkqjJrxGUoeFN6XDXg7uVIb7KP3rrbv23W%2B6fPNs4MDkC0qnaoP9TFJjTxHjrORNtWcV6LhXkSBJMX5qdSX5NlDIgTcI6oWlAGfTt6%2FlkXnsKgH1bFRE8%2B3UfkBI4BK1EYXz5mMJbWDRCBRNc2JglqqAYuwBTl98bf21zbimSuI%2B1Sx6my1gNgTK3wA%2FxVIt0wEa1%2BHKCyUdwW2%2B5nBqY5IlqY0PgybYBZiKgQkWesnoZwv8BPanLx3GyJCrxYhPqXIJkEswVgp3%2Ftmbl1f4FAC%2Fmehitgnhp9RfveycjR5aNVcV1AqxAur1zmtkGYTuoQw4nY%2FBBs2yUX1VRTBbuzDhNvSr%2FMFM1Wcske1K%2FTTCPJe57Ulg13TdxLduT%2BDJlaQF84yh38fQGXxtoBBaApn7GuH%2FxTBMG0m0AUXlCxx0WtadQ5Ojo79dnDwj9movwe689UmvCOluMkKbxMKeuib8GOqUBjKnFFHkY1gL2HdRWXECVhs%2BKSFnkiedm53fWkLEZP8Kcg9naesIQkRNQHlOk94q9H8nSnB3rkepPcu%2BCdkPDA%2BX1xM95sNVD0M1LHGi1QQD3Qcj45p%2FDlB9OVrWhEoDEslpHfjvPk3XaY8YTPYZbrWBSobjs%2Bx%2F8ThhuD5C%2Fzy00T1SdpFcpkeWXvQLWzlrTCUaZmhELbs4%2BtaRKl%2FHl4e%2FONggP&X-Amz-Signature=843517f74ef514cded25cee32326246d265bee5ffd2787705ef1216454c4c399&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWMFPBN%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2AAbt9658jnMlfruwCTLeb6bOHVjO1yrFgzJrJ8I%2FwgIhAIOzMl9ByyX3%2Bqgx90mHgX9HNkP2%2BVSxMnBpZ2TGCmcrKv8DCBAQABoMNjM3NDIzMTgzODA1IgwUXozeroftX6XZ1mEq3ANShRoYkr6vjBGJmlbf32Z9AQyEpUr%2BR9Ri3bzCuusnTmEyZGjOvaOtmte7KQ4SnU76Hy8v9Ru8a5eZhFk5vb705%2BMsg9mWKs9lnOQ4TRQ6xh%2FN5G4ZJYNOBsasCJFWJStxV8z75OTAT7JoSD41V%2B%2F7il7bXyQNGgsZwprPI6qYiLOk1nzeyT%2FVBleyS1sh8ohtSNhWbG%2F60YBSBO5T3sFcan%2BA1F9ckk69G2Bnv0a3KLb7Il%2FFT%2F5CzI4NfB7NdfAmigNYJc4rq6ZV4f06ftBCxHi%2BZsrIgLKS0KGlWB5ROaJTLZFzdMZOoQ0w4TdFhEyzl%2BOqCQZkkV0crnO9I71tdGIXsL1JPvu8%2FNV3WPX3bfevYXNGiIcib0ElNfRw%2FNmGszelvM1k2yTi%2Fm%2BHfQg%2FMErviOie1DirrCbXRMS4riuy4Paz6i6lO24SrxvcDxYlRQ1%2Byyw2tYmXeBKvq2kPkYspm3Y59d5IyHeGSDj%2Fj14BR8ZJV6OYcUky0xg%2Fvi%2Bodaq%2F%2FPnwGSjkkDcmEQcpOZWwlbu30fgfFMazralfEVjBdlrEaUTOqPv5HwQ7sfI9TtVGBBAsy6BjaGyu0TvH%2FVUjZyWg2tMueLQrOvCDkrHLrwxu8fJe%2Fsds6jCVr4m%2FBjqkAdJCMFAv4muUoN47AndQ%2F%2BhjwO6ls9WirhPS11j%2BwJF9Q5%2FvnZR5ifm2bWTC9LyyN%2FPOpQSps%2F9LYwH8DyhoCfnpoh67Fe3zZHQPA1cH5fQVSMl0RCv5%2F7%2BUbcMG917puZqi%2B3pmKrJCdJtwZulmL58NLICcg9M8xFb0MoTGJPnjwOsevbx99QDqsNNw%2BS0VFnQmra1zdFkF%2FzLg6BibrpzBdXnp&X-Amz-Signature=7ae43fe29325b8ee4b3c19fed1420ae01327bfbccb5a53966090cf8b9475c1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF2JNGMT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ0jZ6q6dmsRUo%2F6Q3Z19v8PtH7%2FRpR7l18thNOHb8OAIgD60MdyrCOxGUMPaO72zYIdlwcgz5NaH9%2Ffv%2BLY3BReIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCq1HQlh9FzDbmjQECrcA7iSw5gYuxE99Bv1uIfxBSpkavpyCcXNy7Viccx8AqsPz5VycikUYdrNE%2FNF2CLPJaTEBwSlNhWz1TmDs5X7QXlSuMAp65nqBkZpPIVxfj5ofBLDoAtCPSobtQQ%2F2X4MquM3lfsfDYB9TKwbEGXaMHTkcD%2FuQrduqe3W4dxlVPQzBJuixJuIXRzgl1zBBkJuB7wZ6DRHNLXbv%2FCTP%2BELcnVbyOEiYoISnCcDrWVPjlMc5wsR1no8iEVt1T8J7X3TpZzA6KBRRiu4tWAITUuE8WvjzTnnEHQVr%2BX3dvQ5wt%2FPsVIfCl4z8%2Fo0UOaFxkxRn3J%2FRiKNYSm8bBF1xq2wzrohlM5UXMVc1hVOdi5fiR%2FamQgzmLTdW46WTE%2BWkZwEjGfbc1cSoV7l7EacyRyCArmmsOhuZRb%2BWeJtyi9%2BjflKZgxRKGODxdZ1hKAtkt4NH%2B3r97uxeMGFIanRLNdmSmykw%2Fx6iSP%2BP%2FPOvRvsu7AagrmvePbiuK5exso%2FwSY5TewR6IvUHT4mUadXcEc7K6XWRdNOwpc2VV9XNFRbakHODWCTwcZmNdjPqy%2FsA3HwjM6dVHinfKvU27ALGXv3Aw1hIDpKFsEJbDunGuQai8w%2F3zJ3N8xLyhxcFiqmMK6vib8GOqUBEP8tbNQgy%2ByvQCl1%2B9rXiC8Zc2P0pILqdlo5hAOriiCNv6nQwWf1YWaLi15WloXGo628tdz0NcqCcY3u2pQds0zMcjRDIZu0aTmFw76PlyyMnWikh%2BUctfKDYsaVoCsOYmpKv%2ByUkZ%2FCj%2FMKtxUyhKgMUN0Qti9QaBtS6h7Z8kaRI%2Fo%2BW6VaPtpYEbE%2F3N9HToOShCNJpW5P4KDQImxcNhZFqi95&X-Amz-Signature=a59b9500b6bbe861ae9982af037585b71625f0e6584aa2a4585ecac5946fbad0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
