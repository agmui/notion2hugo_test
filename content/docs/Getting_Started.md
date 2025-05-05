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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSHHNIO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuB519JP31gUxdBpxv7mSR3Oo3QHBB%2F6aU5oD9q5XrPAiEAlRvWNgu%2Fx0zXISG1xlkrvG4PY3OOCrggPeTlxoYmhM8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIZAosRBahseDzE%2ByCrcA1v43TVSA3pJ2gMlc5Q0GeQLi0aiLO%2FxTtXrbYy8K3XwJ8poJimj9zIbhkgM1J93bF8oGUB7A3Uj232fLVxSb0u5CIWOLbPwX1cY%2B%2FtEvrZWjKiwlvDYOVxEMRKqmY%2BfCXQx5msPUNB9S6blAlIFxrMTCGzPJlri%2F2U1yLxNCNz%2BaeFV1hOUhcz0asmV7acC7INWljQpBZVihmNCWIFGIfUUEYEaISrbcDrfxEQsHEvPNwxPSCgirzCCEUwT%2FkRFRBUXVUXnqf7gJSd5qKN9kqLRYxK0M59ekz%2BD64TKy5qmsjuP44naf02WvLEpdfbBi38%2BbYweOnzHmgiThXOdMHhxVBSuCAIovbXKS90Kyo555q0hs%2BZUW8%2Bt99UMveLpkt6YlN6LbPkHKboMpSg8aSXMmkXwQHAVA2vrnT4e9d7JMRlMO34SgaLnNofvDkuBPE%2FZ2%2BU9jh7cEtuEjyYGYIdULh92PFP4JFwgANam%2B%2B%2Blt%2B2xkauALgpr54VsjYq8MNIEa0kgLKIy8ox7p67pGCacOisbXATWlbh20yoZThSItLSK2RrEQpaR7wHY5mP2pegAGJudwNi6w2i3fMhyvrKuu%2FR6XOlHXySP8O7EpEFQkhyi0HZ9kc%2Bw%2FrPgMIH748AGOqUBPhVn8tlyLlJD%2FdjmxqWC7mZeoDRn3OxRYGRfri4nNJDpZnuGCaRqOkfOPq2IrvmMu6nilOd6tBQUGDmuBXpL7wC8YIiBK%2B%2Ba%2Bh1Sl5dYFesjLTRtt8JOki6wvREe%2BC0Kg2%2FBbbrNQNz2HXf10Z%2FfqDrEcxilNgdmO4bABy7vPovb%2FFXbCPM97mFCKudJ%2FUDryxyf06XwMATbNXDAv7n7nBvkv%2Fn8&X-Amz-Signature=646fb764ab4a3761aeb23728a385621b3c5db88056757a813008fa458f9d6d13&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSHHNIO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuB519JP31gUxdBpxv7mSR3Oo3QHBB%2F6aU5oD9q5XrPAiEAlRvWNgu%2Fx0zXISG1xlkrvG4PY3OOCrggPeTlxoYmhM8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIZAosRBahseDzE%2ByCrcA1v43TVSA3pJ2gMlc5Q0GeQLi0aiLO%2FxTtXrbYy8K3XwJ8poJimj9zIbhkgM1J93bF8oGUB7A3Uj232fLVxSb0u5CIWOLbPwX1cY%2B%2FtEvrZWjKiwlvDYOVxEMRKqmY%2BfCXQx5msPUNB9S6blAlIFxrMTCGzPJlri%2F2U1yLxNCNz%2BaeFV1hOUhcz0asmV7acC7INWljQpBZVihmNCWIFGIfUUEYEaISrbcDrfxEQsHEvPNwxPSCgirzCCEUwT%2FkRFRBUXVUXnqf7gJSd5qKN9kqLRYxK0M59ekz%2BD64TKy5qmsjuP44naf02WvLEpdfbBi38%2BbYweOnzHmgiThXOdMHhxVBSuCAIovbXKS90Kyo555q0hs%2BZUW8%2Bt99UMveLpkt6YlN6LbPkHKboMpSg8aSXMmkXwQHAVA2vrnT4e9d7JMRlMO34SgaLnNofvDkuBPE%2FZ2%2BU9jh7cEtuEjyYGYIdULh92PFP4JFwgANam%2B%2B%2Blt%2B2xkauALgpr54VsjYq8MNIEa0kgLKIy8ox7p67pGCacOisbXATWlbh20yoZThSItLSK2RrEQpaR7wHY5mP2pegAGJudwNi6w2i3fMhyvrKuu%2FR6XOlHXySP8O7EpEFQkhyi0HZ9kc%2Bw%2FrPgMIH748AGOqUBPhVn8tlyLlJD%2FdjmxqWC7mZeoDRn3OxRYGRfri4nNJDpZnuGCaRqOkfOPq2IrvmMu6nilOd6tBQUGDmuBXpL7wC8YIiBK%2B%2Ba%2Bh1Sl5dYFesjLTRtt8JOki6wvREe%2BC0Kg2%2FBbbrNQNz2HXf10Z%2FfqDrEcxilNgdmO4bABy7vPovb%2FFXbCPM97mFCKudJ%2FUDryxyf06XwMATbNXDAv7n7nBvkv%2Fn8&X-Amz-Signature=c05aeae2688a5a40b669d8fe2faf66363bc9bdd262c165a7672ceea100d0c522&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSHHNIO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuB519JP31gUxdBpxv7mSR3Oo3QHBB%2F6aU5oD9q5XrPAiEAlRvWNgu%2Fx0zXISG1xlkrvG4PY3OOCrggPeTlxoYmhM8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIZAosRBahseDzE%2ByCrcA1v43TVSA3pJ2gMlc5Q0GeQLi0aiLO%2FxTtXrbYy8K3XwJ8poJimj9zIbhkgM1J93bF8oGUB7A3Uj232fLVxSb0u5CIWOLbPwX1cY%2B%2FtEvrZWjKiwlvDYOVxEMRKqmY%2BfCXQx5msPUNB9S6blAlIFxrMTCGzPJlri%2F2U1yLxNCNz%2BaeFV1hOUhcz0asmV7acC7INWljQpBZVihmNCWIFGIfUUEYEaISrbcDrfxEQsHEvPNwxPSCgirzCCEUwT%2FkRFRBUXVUXnqf7gJSd5qKN9kqLRYxK0M59ekz%2BD64TKy5qmsjuP44naf02WvLEpdfbBi38%2BbYweOnzHmgiThXOdMHhxVBSuCAIovbXKS90Kyo555q0hs%2BZUW8%2Bt99UMveLpkt6YlN6LbPkHKboMpSg8aSXMmkXwQHAVA2vrnT4e9d7JMRlMO34SgaLnNofvDkuBPE%2FZ2%2BU9jh7cEtuEjyYGYIdULh92PFP4JFwgANam%2B%2B%2Blt%2B2xkauALgpr54VsjYq8MNIEa0kgLKIy8ox7p67pGCacOisbXATWlbh20yoZThSItLSK2RrEQpaR7wHY5mP2pegAGJudwNi6w2i3fMhyvrKuu%2FR6XOlHXySP8O7EpEFQkhyi0HZ9kc%2Bw%2FrPgMIH748AGOqUBPhVn8tlyLlJD%2FdjmxqWC7mZeoDRn3OxRYGRfri4nNJDpZnuGCaRqOkfOPq2IrvmMu6nilOd6tBQUGDmuBXpL7wC8YIiBK%2B%2Ba%2Bh1Sl5dYFesjLTRtt8JOki6wvREe%2BC0Kg2%2FBbbrNQNz2HXf10Z%2FfqDrEcxilNgdmO4bABy7vPovb%2FFXbCPM97mFCKudJ%2FUDryxyf06XwMATbNXDAv7n7nBvkv%2Fn8&X-Amz-Signature=b23e5e7dfc3355b8f8a1f78b3519c722e09ee04e44e1515ddb34bce0c2082971&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU6FEQMX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuAobiUlclReEPHi7kPXVTFXa4UJetfp4dvIdnOHyL9AiArXkhll8HIdVwM8t5bOw2QzXbm4VezMx%2Bt%2Biqihijyuyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMsDR%2B%2FgUQ4OXowG%2BmKtwD2VMGKrUEXd7fiUpQYLCih%2Fpq768vtsQuPjtdzHztKRrHEiQBcocYOQJw6fBeULWQpDRRPICFR4rBEu2nk2zrjMSs%2BpuvuJ8CEOraPve%2B0%2BUjsvoGdARuWf1Ocof6ZOhYBb5d6q6UibeogODtq7lvB2x4f71kRLqnKfHX%2BeW4wXa2RoROd0bXJWiTAFACJv8wb1ZSRLD8zl4OoPDFEnPb3IQvd0x8i55Qfy2jblFdeU0rRnbocigXkFXmfZ6eB4Yx%2FFwj4kyIJ%2BRCXKLbK8Oi6AUOHZsQX9fybSic05W3%2BFkCHXtaNFetbRaAjcAq1KfoQul2dgc5v%2FwpzoKmieKQJG20FjvS0Bokg5smbpiHuZ4fXwmS6GzbpisLjzwfmbO5A7y4JQORTDFIoTr0s1Voo7QE5ThIIpInZJCE7fNbGA2nZDyn%2BRvOfHIb0kDLQOYL6ouTrtzZUuRsfQNiLVBXQn9NxTjJjlRJ7SwwFNdtH%2FoU76FpehRBweWKvledOv%2FrRwZfdVdR1CDBmqDqyshYBCzTqn2fjboSt%2F1t%2BZL0mMw4wa7dVs7rRNy3qbH9n2kZJfN3rDcflLHXEaz%2BcOI7VyhZB6BqgFSdg6AG2LN4V6JZ269R%2BEW3T3wnVYUwkPvjwAY6pgFUv7BidMOUWbXjnBUjYDq86bwu4m1TADQuHhlHKp3LNsZFZG0J15e8G%2FrFSrMDHf9rsSZkUJg1tuW693FsxTrynyva2FpRYuDjW3xlhM98yYjFDscMW%2FnImJGIJ9f9oY1UASvWRO%2BPYA%2B5uHejfYBpX9zTMtVV1BGYZp%2Bl0EKbheSoE5Mj614wcZtVUZITlHD4%2B%2FQCdmnPjl9%2BabXvMPK385SAvIL%2B&X-Amz-Signature=d10701577356afaa96df69cd7b39a42a6cd55484c67b68615c408bd1f2dbc122&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YXNOPTU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCNKmy7pizMWIQ6sWuHUL0jk%2BWvI9eIrQLYbdNk0NsnAiEA%2BRGladMdVooV77RblyUuaMeMhvciIxA%2B1FjlIXz4YsAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLvhrCBhB5Mer4yEqSrcA1z0UGwrxouhdC1kj7Pg6lPIlCFnVE8gyY7JprrgUEccIH%2Bw%2F6EjM%2FBSNhzRacSlmqSC1J6aZgQvhvc3H0IbM9MXxCDX8F0qQFgjD%2FcwjqeqrKrk9A27s%2Bb9ZFmiQA4%2FySLCh%2B%2BZsDRtnTIklbXrSOn86opnOiibgeUGfD9KRn6n7eewaQGf3ulrrgFO1pHyqVWgTH%2Bc1%2BjhvUlAohhV9c%2Fn15%2BEYGuTGbpN6Afvxd3mS7YnSvC4PfI4DmZzKScQCMPqMTfHXzK95Ht0J8dlgQGPJV3TO%2FBv4g379GN2%2B50U8yJAvzNBHhiW3QB%2BO9fyGmXid4KalgsC8Mvk0Xe9z4ZzpqY28om3SVA50e1oaRIctbPzCjFuTaAKAdTDfqLbqEyoAx4IRMEklwnzt9P7U688GlLr4etjMypmonov3KpzB3o%2FOJXgHOFV0tjkKv8heettXTdaGRxUhLFj1YM9qz6somcJs3pxDISzdzc00QAE1jl6nuimhmJ0fWvjnHY4Xc7Uzn9efMtPLCZjMRoiQruMc5Yqt1f%2B1z4wpOxwyEkm8LcaNBrc47u%2FGNyKgIvwPPM%2BwpihiuRE89nVivYzdDYzL0VH3OiTs%2FdMgsx5wjmkICSOguFzL%2FvxINEWMIT748AGOqUBCuy7n0VKAHCz8rFWsIdykOTk94stH2GHFGMKHaGxUUjfjLStaRsnwySpQxtC8ib1vd4p9Y9TwEq0KRHwAmAysay4ko5%2Fvg2scnVDK5akYtrEM8NzmkU0%2BGnOUfJOWTpC2gCX92uPFmZCOfy1RNSy34b2EnyOlpJL3m601EfHRJPdXoxJ2tGzQ5wpo49ICD%2FImsKhckySUdiR%2BJZ5cs0R%2BIsJ5TMw&X-Amz-Signature=9d8df60fcc0c6c94c27f2f20d34b6d69b6f385aad49c4dd286ae98c331b91c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZSHHNIO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuB519JP31gUxdBpxv7mSR3Oo3QHBB%2F6aU5oD9q5XrPAiEAlRvWNgu%2Fx0zXISG1xlkrvG4PY3OOCrggPeTlxoYmhM8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIZAosRBahseDzE%2ByCrcA1v43TVSA3pJ2gMlc5Q0GeQLi0aiLO%2FxTtXrbYy8K3XwJ8poJimj9zIbhkgM1J93bF8oGUB7A3Uj232fLVxSb0u5CIWOLbPwX1cY%2B%2FtEvrZWjKiwlvDYOVxEMRKqmY%2BfCXQx5msPUNB9S6blAlIFxrMTCGzPJlri%2F2U1yLxNCNz%2BaeFV1hOUhcz0asmV7acC7INWljQpBZVihmNCWIFGIfUUEYEaISrbcDrfxEQsHEvPNwxPSCgirzCCEUwT%2FkRFRBUXVUXnqf7gJSd5qKN9kqLRYxK0M59ekz%2BD64TKy5qmsjuP44naf02WvLEpdfbBi38%2BbYweOnzHmgiThXOdMHhxVBSuCAIovbXKS90Kyo555q0hs%2BZUW8%2Bt99UMveLpkt6YlN6LbPkHKboMpSg8aSXMmkXwQHAVA2vrnT4e9d7JMRlMO34SgaLnNofvDkuBPE%2FZ2%2BU9jh7cEtuEjyYGYIdULh92PFP4JFwgANam%2B%2B%2Blt%2B2xkauALgpr54VsjYq8MNIEa0kgLKIy8ox7p67pGCacOisbXATWlbh20yoZThSItLSK2RrEQpaR7wHY5mP2pegAGJudwNi6w2i3fMhyvrKuu%2FR6XOlHXySP8O7EpEFQkhyi0HZ9kc%2Bw%2FrPgMIH748AGOqUBPhVn8tlyLlJD%2FdjmxqWC7mZeoDRn3OxRYGRfri4nNJDpZnuGCaRqOkfOPq2IrvmMu6nilOd6tBQUGDmuBXpL7wC8YIiBK%2B%2Ba%2Bh1Sl5dYFesjLTRtt8JOki6wvREe%2BC0Kg2%2FBbbrNQNz2HXf10Z%2FfqDrEcxilNgdmO4bABy7vPovb%2FFXbCPM97mFCKudJ%2FUDryxyf06XwMATbNXDAv7n7nBvkv%2Fn8&X-Amz-Signature=80d6e9be1cc0181db0c21842507fd05be67fe85c6e5b04c56066bc95d0918592&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
