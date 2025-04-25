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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENNRH4V%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7KesyF3mz0RPvipq4%2F9%2BaioUF%2B6pYxIvGtCN8%2BiqOGAIgDAd8WmXgIA5qA3cmKSTKelpFs0cLglz3vZCNk12JYbYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAHM%2BmKRD2k59iZjcCrcA%2FZNA%2Fzm5EHasj94C%2BTraB0G7eKgLbt2r3g%2BpdI8bLgQI62ZW6W8K3Khjm9rYfeU1nQMti7dq%2B0SgCi3m6svUjY4r3UiGqA29H0RTFK5C9MnqQqYqq8bqGbk%2BoOktIAab1pxRt%2FffGB0SkTvDnC%2FvDfkHeLGwtjAPY%2BH6kjSdcE0gXPdenc4M%2BwGsZw%2BThQC1ZS0YgVpR9XaZcpNtW7GcxgPOuyLnoHDo5NnmqiTzwm%2FCe%2Fy1q4ZFJy36wwKZY9gEJs%2FQ3LF3Zzpq5oLBZMzMmwFaxI2kSopF51ktlzEj6BzK9R6Y8xyBBFZnS1rhroADzc1gllL71Teq8xj6ZHYoSTfm0DzKFLeRCMW52YbcSA2YXisZz7mw0m6uDwynGhc7S6oVyzAG69bOcHGM9H%2FEhtqF7FOu0X4MsirwDDZgDC7bqKGJBFKL51uV0wAdCKAGcOc3afYDr5XQFgO%2BoslgP9iuziWCoahEbffpxYiJJb61xxBvxJYKDQLvFw5uT07LmOEDb50ybXH40xaPz83eGFKBSbdSuAqz2wOPcLiXc%2BJvBdVi4HbxDtjs1hFToBtPcgXlT%2B%2Fwgv1MHsGSDigzJ%2FT9Sa%2FTE7MN3hHQih421dZ%2BDuqH66oD9rwFLqvMOevrcAGOqUBp7GEbtc5Uz%2BO1mwhCii6e93SM2c177C%2Ffgb8EzlV%2FVjxhk8fCDLpLFg2%2Fj0qw9XQAo9AX6CFQH2w%2B%2FsjuuGAf7nU1IH4VMURFIiUTSw3z6SlJRE4g%2FdkbTJPmgrno2DgDu1c9c77w72bxkDGHujZqQCnIWdwAkvlCc6i1w%2FHQ0kH5x5o2miTa%2FNTExszLan9SQ45JIavB%2FG480%2BXh%2FBi7AfhFXkD&X-Amz-Signature=b543a591434ba2c91655655082a6d7db9f4c9e2f43078a1b15ac3552b971840b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENNRH4V%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7KesyF3mz0RPvipq4%2F9%2BaioUF%2B6pYxIvGtCN8%2BiqOGAIgDAd8WmXgIA5qA3cmKSTKelpFs0cLglz3vZCNk12JYbYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAHM%2BmKRD2k59iZjcCrcA%2FZNA%2Fzm5EHasj94C%2BTraB0G7eKgLbt2r3g%2BpdI8bLgQI62ZW6W8K3Khjm9rYfeU1nQMti7dq%2B0SgCi3m6svUjY4r3UiGqA29H0RTFK5C9MnqQqYqq8bqGbk%2BoOktIAab1pxRt%2FffGB0SkTvDnC%2FvDfkHeLGwtjAPY%2BH6kjSdcE0gXPdenc4M%2BwGsZw%2BThQC1ZS0YgVpR9XaZcpNtW7GcxgPOuyLnoHDo5NnmqiTzwm%2FCe%2Fy1q4ZFJy36wwKZY9gEJs%2FQ3LF3Zzpq5oLBZMzMmwFaxI2kSopF51ktlzEj6BzK9R6Y8xyBBFZnS1rhroADzc1gllL71Teq8xj6ZHYoSTfm0DzKFLeRCMW52YbcSA2YXisZz7mw0m6uDwynGhc7S6oVyzAG69bOcHGM9H%2FEhtqF7FOu0X4MsirwDDZgDC7bqKGJBFKL51uV0wAdCKAGcOc3afYDr5XQFgO%2BoslgP9iuziWCoahEbffpxYiJJb61xxBvxJYKDQLvFw5uT07LmOEDb50ybXH40xaPz83eGFKBSbdSuAqz2wOPcLiXc%2BJvBdVi4HbxDtjs1hFToBtPcgXlT%2B%2Fwgv1MHsGSDigzJ%2FT9Sa%2FTE7MN3hHQih421dZ%2BDuqH66oD9rwFLqvMOevrcAGOqUBp7GEbtc5Uz%2BO1mwhCii6e93SM2c177C%2Ffgb8EzlV%2FVjxhk8fCDLpLFg2%2Fj0qw9XQAo9AX6CFQH2w%2B%2FsjuuGAf7nU1IH4VMURFIiUTSw3z6SlJRE4g%2FdkbTJPmgrno2DgDu1c9c77w72bxkDGHujZqQCnIWdwAkvlCc6i1w%2FHQ0kH5x5o2miTa%2FNTExszLan9SQ45JIavB%2FG480%2BXh%2FBi7AfhFXkD&X-Amz-Signature=882190683993873c115feb3891c14375bc6322963de65adc7d2eff713c6f2839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UCSJVPG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVma3zJ7%2B2dzEec5Zs9lZPhwNytik9jpU%2BfLgUQuh1UgIgbNxwpjFEYLA2mXcZ5plEh6p6dVEQYz2OFzZvMeHMwYYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAFZvKT4PzZXFEkx%2BCrcA4sZQHF3GIkixPXoeVuaTcR52ZIi%2FGnmoW0rtUUdayZN0v0NYYAQ87Oq%2FrFeJ8wHUu5grdtc7D3LdBMfcd6a3n4Ss%2FIEmgnvypRm4BTGxluY6F0XrMtNhNY2KD7In65g0WRtUIhqVRC0ieQCJHSXKIB4OXqAVN2TjMP90i1wzMBc7VtvxkJi%2F%2FN0I00lklXMFWdODt2qKwwxYnO99STmsE1qOKyfc6I3xZre7v4tTAjqTxHc3Gzr%2Bgc4BGI5AhoCC54iEPuLTaoDNRkxCLxYwS7CbWnnrcLPOYozt%2BKEKxXYG2Qn7IxDbTYIc%2Fm5uUe2tkRIFMBHMfMn7n0IoPsCDCbqOVmNDK6qjV9L9eUmCtpdlEl33%2BmrykMig%2FP3gw0dq713%2Be07dvlA%2Fqoq022WY2WgZcVsz6C2kjj3v1ZDXso9kgsWymbAMXQjvNJCNxIzE8jyviIk3KYjE3LnDv3jZOglJ0uPnmNscOHTEus7RFIoUm5TMgDnPVenz3bog1XCTeJ%2FxRrkzw1syAz5gT6x%2BIQbBTtXtVqsbVR7D2RZwcskXJ47sqGIBOBuaO5pYQ%2Fx21EHV0jPWK%2FUqnbk1Zx4Ib1QEkb8UBRGz4dAQe6623bnU8lhGYYUfIl%2B9NLSMNebrcAGOqUBMQSFi4kpJf3TUMwEV31R8PfYhRFXrYmAP7iPXUBkDviGc3El1i7drWGfZAJwUEt0L6WPurOxQgeVHogNtsB2dzX2PyX%2BXZ2vvDsojOYuXRTkM3Saf4F%2B2m%2FDyi7qHn4INatCphpkPH9QD8TYv66wY9NATbdHfOZG5nm4rn1TJutR5UsxG5giC0xY2TDEAs8oOlkA0b73uIwLV9A9UJUwWBkDZFsF&X-Amz-Signature=13fbb716ad708298910d64d9de0d00a7e0b8e548e591de93b9728028bc2f7688&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQ7C6L2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkyCnMDkyh9lMqTzwsCzHybdWbPkpJIPU3dQYjmGxirQIgTfdhER%2F6mSE19B1Dg0SdXmG7Jq7lEVvJ7EUVM5Rt468q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCNxA9xMO5ThcxqfFyrcA4Drl56bso2TBWdR31nU%2FF9hNutCrA0hqaVRU8En2YbghTcayN2Q4euTV5pUQRPEgsprqcMDkXSvIIVFto39L%2B0aIEmVJDn%2BHVMnhjZR8YZe%2Fbyziz17RvoZ%2F6z61CSmrPMyln6xS8mVwznlZcei56ymGxIYVUkgnEWIJvYXdbkYUNVrvKyGOtGuSC02APLefP8vb3ThzYw7eeVufuoVEVMBIGq0ZcP%2B5mkOYm%2BWyZsSh9VlKqOssznuuIoTrhceGzPFDZybf3mto20d8osSi7eWlPfQ32ZI8hBr%2FNFsLzvH1OiK0g%2B4fx2bsnXx%2F%2FYnaFW1h2C5%2Bq%2BxWSVOgqhsSXJzoSeuwOZcwUQtWZuTKTeHu5DKPywKbCwmMS3fX9%2FmZx2RWDbdisZnAohz43jduENkGtUCNQfZuNhukvRHMrsOpiSpvkezdken4qt1QE2Y43V8UjbegE%2FQNIpxkACjRM2KXXTyruS17OQOKRGH3xx%2Bi9ZXW0HfDKWwR%2BxKtGonCw%2BIA3kW2RdWORlvCmecszdypwYZCICphSk%2FE4N6N%2BJArZRpb8nDgu4HxnMmeV0iT%2B0ymNzCYVY9J7qfBh1rc2W50sCoXtdjmd%2FT3kUnNrREXlKYlA%2F5gAaVsKf3MN2brcAGOqUBQSiMOBvOgNj3nxeYeBMpuKFG%2FCSpDg8sqCl5xqEqN59x5h9YoJm0u4Ryn4Jiqdlb%2B0UdMGQ%2FfeEYDnSM7dynnH8yY5F6oP5PLLEJviCNwadS5CuH%2BqnirD6cIsD8Bbl0Xe9OMI2m4eagi%2FWGXct9Fy0gHfge3ReJdQvFkjaqaEP7ksJJHJjuDYpRNfdcO4PJfyzzs7EDImuwcZ1XH8PccdEPF0Z%2B&X-Amz-Signature=aff384c3a1e3ec570e51ecd17d67a57f35b4c3bf108eab498e4684e0c29b0db7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENNRH4V%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7KesyF3mz0RPvipq4%2F9%2BaioUF%2B6pYxIvGtCN8%2BiqOGAIgDAd8WmXgIA5qA3cmKSTKelpFs0cLglz3vZCNk12JYbYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAHM%2BmKRD2k59iZjcCrcA%2FZNA%2Fzm5EHasj94C%2BTraB0G7eKgLbt2r3g%2BpdI8bLgQI62ZW6W8K3Khjm9rYfeU1nQMti7dq%2B0SgCi3m6svUjY4r3UiGqA29H0RTFK5C9MnqQqYqq8bqGbk%2BoOktIAab1pxRt%2FffGB0SkTvDnC%2FvDfkHeLGwtjAPY%2BH6kjSdcE0gXPdenc4M%2BwGsZw%2BThQC1ZS0YgVpR9XaZcpNtW7GcxgPOuyLnoHDo5NnmqiTzwm%2FCe%2Fy1q4ZFJy36wwKZY9gEJs%2FQ3LF3Zzpq5oLBZMzMmwFaxI2kSopF51ktlzEj6BzK9R6Y8xyBBFZnS1rhroADzc1gllL71Teq8xj6ZHYoSTfm0DzKFLeRCMW52YbcSA2YXisZz7mw0m6uDwynGhc7S6oVyzAG69bOcHGM9H%2FEhtqF7FOu0X4MsirwDDZgDC7bqKGJBFKL51uV0wAdCKAGcOc3afYDr5XQFgO%2BoslgP9iuziWCoahEbffpxYiJJb61xxBvxJYKDQLvFw5uT07LmOEDb50ybXH40xaPz83eGFKBSbdSuAqz2wOPcLiXc%2BJvBdVi4HbxDtjs1hFToBtPcgXlT%2B%2Fwgv1MHsGSDigzJ%2FT9Sa%2FTE7MN3hHQih421dZ%2BDuqH66oD9rwFLqvMOevrcAGOqUBp7GEbtc5Uz%2BO1mwhCii6e93SM2c177C%2Ffgb8EzlV%2FVjxhk8fCDLpLFg2%2Fj0qw9XQAo9AX6CFQH2w%2B%2FsjuuGAf7nU1IH4VMURFIiUTSw3z6SlJRE4g%2FdkbTJPmgrno2DgDu1c9c77w72bxkDGHujZqQCnIWdwAkvlCc6i1w%2FHQ0kH5x5o2miTa%2FNTExszLan9SQ45JIavB%2FG480%2BXh%2FBi7AfhFXkD&X-Amz-Signature=c19879a42ad56f0e4b58eb0d81274216889847bdb796f3ba8fb15b4b4cdfde80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
