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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UDF3FA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJRbpJpMiQnokMY%2Bbiq2GISFsgfea%2BbVEz%2BtJ0QUUHgAIgbcfyqbcGnugOKGPEoEtrU3KPuSwWgFNWnHjuHSeBmUYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJ8GvspC2i5QGHHORircA3g4VNSHvowfGH%2FtD7x5e2UisJ0xUHVRPE8RbPV0UXtaxbUIEqYhlxL0KZE7dATDVkJ632LcD5AdAtDG9xKQaENk8W9an4k2rRpuILzuEkGPVHMBfjEl7%2FTA85mv2fBhjyuTD1Y0ePhYLa%2BcBaNb2qSs5EzyGxWvebVIWPbfZQLk67vpBthfwXVDQxsgqIKdfma4OjhSmh9tsC8O5ZhU1LpOoaRSRlRmPVz7egNINsYZTZdbllo5cK5kPK%2BDPqWlNpSWjInfsFXlIusVBV1F03rSliHiP92RKxJZm3jC0F2Wmn2ghCj3Lkh%2FDnH2L%2BH1Mn8JOepm9i%2F0TqIYcyIzM56bIR9m63j6xGisWEzhF1rrBR6aZ%2BhRJj46E2V79Z41Bs9Ywzrzbr3BEv7B0hbir6sfX2A24n2%2BrApLc8bsKNbs6CbGQ99x%2FvQohEHfFL67HLxuZSGzurZuZ73fsi9GYU2L71nB7Qi0fY%2FAWIixk0OJZo4t2HEor9IDnMrzZjSTjMXFpnBzfunqrREiIgGgHeORZ57V41meEtm9%2FHGTfchleopZrTG%2BVlkEAR6%2Fuzkmo9xzURe%2B7issEZGbafAvFsqIvYQdDYfr9VexFjyfAx9VbNFQCQDNJbuZ9ZlYMOPY2r4GOqUBXqdYfN245Jw0GSnPv5my%2Bs8h1au97k%2FNvlN2v3%2Fq4okOE%2BbhUeSgm43Ap44DdPB%2FrZbiWQWJ4Xo19xAfv3lPJtLjT8f1u0hnCyp5DBaEwtLZDYnsEkoDCPp1fCVvoRVyM1PO4CDrbLxLlLZaMhmQL3myQNeHA%2BQpEOwGVdMd7v6aIMlYu9xTErpR58w0NSs2Cwi0NbUT47%2BgqwAHMQ1UFPshDCnB&X-Amz-Signature=41eb1931b91cf53b14fb58c9f6a3378514e01a441eedf8b5806ee9d92ebe2ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UDF3FA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJRbpJpMiQnokMY%2Bbiq2GISFsgfea%2BbVEz%2BtJ0QUUHgAIgbcfyqbcGnugOKGPEoEtrU3KPuSwWgFNWnHjuHSeBmUYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJ8GvspC2i5QGHHORircA3g4VNSHvowfGH%2FtD7x5e2UisJ0xUHVRPE8RbPV0UXtaxbUIEqYhlxL0KZE7dATDVkJ632LcD5AdAtDG9xKQaENk8W9an4k2rRpuILzuEkGPVHMBfjEl7%2FTA85mv2fBhjyuTD1Y0ePhYLa%2BcBaNb2qSs5EzyGxWvebVIWPbfZQLk67vpBthfwXVDQxsgqIKdfma4OjhSmh9tsC8O5ZhU1LpOoaRSRlRmPVz7egNINsYZTZdbllo5cK5kPK%2BDPqWlNpSWjInfsFXlIusVBV1F03rSliHiP92RKxJZm3jC0F2Wmn2ghCj3Lkh%2FDnH2L%2BH1Mn8JOepm9i%2F0TqIYcyIzM56bIR9m63j6xGisWEzhF1rrBR6aZ%2BhRJj46E2V79Z41Bs9Ywzrzbr3BEv7B0hbir6sfX2A24n2%2BrApLc8bsKNbs6CbGQ99x%2FvQohEHfFL67HLxuZSGzurZuZ73fsi9GYU2L71nB7Qi0fY%2FAWIixk0OJZo4t2HEor9IDnMrzZjSTjMXFpnBzfunqrREiIgGgHeORZ57V41meEtm9%2FHGTfchleopZrTG%2BVlkEAR6%2Fuzkmo9xzURe%2B7issEZGbafAvFsqIvYQdDYfr9VexFjyfAx9VbNFQCQDNJbuZ9ZlYMOPY2r4GOqUBXqdYfN245Jw0GSnPv5my%2Bs8h1au97k%2FNvlN2v3%2Fq4okOE%2BbhUeSgm43Ap44DdPB%2FrZbiWQWJ4Xo19xAfv3lPJtLjT8f1u0hnCyp5DBaEwtLZDYnsEkoDCPp1fCVvoRVyM1PO4CDrbLxLlLZaMhmQL3myQNeHA%2BQpEOwGVdMd7v6aIMlYu9xTErpR58w0NSs2Cwi0NbUT47%2BgqwAHMQ1UFPshDCnB&X-Amz-Signature=ccd5ad9b7f66dba5386b747ecf06e03bb43c083022d61e50c5a3d48596500f65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MRFM3G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID59RvJuQwutajpmDDYhN2LdHOWKraUS0%2BIEHFj1YcgYAiEA8wqQWPvNSkxVCFfIIpfCzZnKt%2Byq9rCibLT0Ugt2gZ8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMWt69WOQa3mKSzW8ircA1yKUKLkwvS9fhg2U%2Bd596Zlus%2BZHa4KbD0B9R1XC8UPrnbbZdmKcf1tRH1DEMQ0%2FLUfF102QKuNnqTWLi8i4FktJS9%2FHAooJ8oTCcDOaq9O5lJkt0I9SE3iHeQrE7Vxw68OT4NFAwmjX6kMBukzsdHBPMvftdY%2F%2Bfox1ibRWRFQpbb38adpyJnGGuSdBGW%2FLwChbHQEM64LB3%2F1UE8B7gBR6VFoG6Clr3HkJj7n%2F4nXFviDvco1R%2BZbBRLPhPIEqWGu4E%2BUlG1aqwmVzYFGe4aQuiaEsR2UbbJthoI2rTPCOiMh8wDJFRNLeaKefkDH2tp8%2F7NA7dtPtcd0sVNND0VFrx0XzmYg%2BHs7nR0FtqxRpGdBc2nwstJyUFUl%2BGXgdxRJsSS3IuxD1fV9UHP6klPU58JdMmeuTZnNRTiYpcurVrJso4AECy9xm4tc%2B%2B1EEGGjmeaaSN%2B%2Bl%2FGaSB%2Bzt08GvhUJwlFW6B6PfpVSuTlUyHUggGHyc0g80ZfwhXRABcNE0hTsj3vQUtaCpr1heUH7aK8L%2FByF%2FK521Ca7zW1%2FVZxXQWFoZBDg45QTdDmVF%2B8uAweQvJ9foYnzKEmDHrDAdW%2BmWT01VzP1oEPjLfcGaYQ0hzA%2BtzY0EAajMLjY2r4GOqUBlGjtjssGQn%2Bgmd65LZtE1lmFftMHHdzaNSEbvcKxBhtO9gacjOMOEfSrHSARELRP2gICsE7Q7v8SPeKbJ1i%2FUo%2BjasBMf3N82aQsbo093JQs3Jz8gs1HKr%2F4dMJUAbO6o3GSbokBokd6%2B8IuStjVmnRPlURFQrlpMwoJxoh2ZtBOvSrPsY%2BEMmow8BvFieDCgABhOBa%2BcceIp%2BhW2DD6Jjl1OXlk&X-Amz-Signature=29e9bdd56e560b85d5a04aa4b0745e3abcbe9d0dedb9270644dd9ed431bb7388&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IBBNPQ2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl2KFjp0pOy0%2BVue11t1kgABQxgBPsBHE2QHPWNzt9agIhAN6ve%2F3gu%2FFa0ONQ%2BQ%2F5q2xG%2BihLcR8PJXVZv5JvXAGGKv8DCCwQABoMNjM3NDIzMTgzODA1IgwtQ4AFpILwqf57w8Qq3ANxufQPKPQXa7fe6eROYw7vIwfStsKg9JQss3dW1odWliFBWDfmsuJoWqiL0BxnrJ%2BpGMAbpYsBRx%2BW9KCOCocWtjrZt2VSzGN3NH62WIC9wT66EXHtEJ5MISl7uIGBlNXGXA%2FGGaCrJLTRRVLXFoMS8iqIKXy64nynnTg1%2FQN3H98SMw7Dyymc0sqghtT2uhbFKRdaon%2BK%2Foug6JAQYHbiBG4PUQSGxOOE%2B6YP0aCIF0xLnd2mLg7Okb48WEHmJvaXKHHozBN5E7J7RnohxSxA5fQ72l%2BJNMxo6UhNtGKnkQ2UPmLpFD%2BETmwsKakTlk3qRINGiwZgiTvdnkOgVMI8luH4qVnM4ptQWvv4m3v7FEpTwr8wIAC411yeoxUjgZgMw2lK7m5Q9t6hf0taHWGCCpTsEs8syEa2dYdoj7jWbuX0FlKz1gqDb7Tcdi9Cjn5AUep%2FO9kiko4Vq64i9q0Y%2FQV6aTI6z9Kw2GiXBrXS0NXsiKkvVfIvmc%2B8mqF%2FMV5YSzD7gDxgtHHqPZrYK4qMET5wfBYoIwigYx7V8%2FjEpwHthFQZ%2F2H4cZ%2BgkbPfUc0UJ2PskCSaHVBsYs5C1Ex6%2FDoeXDu2G242HpxK3os7zL7VlLoEnHeY29KPijCd2Nq%2BBjqkAYYm1wRujy1M9w7B3IYiG8%2BWUugAM%2B2RmlqPY3bKxmwwQg%2Fx708uWzaD9bYDvWJlaLQshPdv7nZTxe4iCKsSSFFaZKL6Y7EkEjIl%2FU%2Fh6cV1Xt67zitq%2FpOehsNi2TyF%2BFaFTBeykFagNdRxlsPuct0Ic1jZGHYQ0BAyDvagN1%2B7Rh8HIe%2BIb2shKopokYj03TMtTiazLKxlQG35022%2F%2B387fJA1&X-Amz-Signature=eea46f1c5fc1b3b907e5ad3b04e0c5480704d2aad143cce68d70d206d402a3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UDF3FA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJRbpJpMiQnokMY%2Bbiq2GISFsgfea%2BbVEz%2BtJ0QUUHgAIgbcfyqbcGnugOKGPEoEtrU3KPuSwWgFNWnHjuHSeBmUYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJ8GvspC2i5QGHHORircA3g4VNSHvowfGH%2FtD7x5e2UisJ0xUHVRPE8RbPV0UXtaxbUIEqYhlxL0KZE7dATDVkJ632LcD5AdAtDG9xKQaENk8W9an4k2rRpuILzuEkGPVHMBfjEl7%2FTA85mv2fBhjyuTD1Y0ePhYLa%2BcBaNb2qSs5EzyGxWvebVIWPbfZQLk67vpBthfwXVDQxsgqIKdfma4OjhSmh9tsC8O5ZhU1LpOoaRSRlRmPVz7egNINsYZTZdbllo5cK5kPK%2BDPqWlNpSWjInfsFXlIusVBV1F03rSliHiP92RKxJZm3jC0F2Wmn2ghCj3Lkh%2FDnH2L%2BH1Mn8JOepm9i%2F0TqIYcyIzM56bIR9m63j6xGisWEzhF1rrBR6aZ%2BhRJj46E2V79Z41Bs9Ywzrzbr3BEv7B0hbir6sfX2A24n2%2BrApLc8bsKNbs6CbGQ99x%2FvQohEHfFL67HLxuZSGzurZuZ73fsi9GYU2L71nB7Qi0fY%2FAWIixk0OJZo4t2HEor9IDnMrzZjSTjMXFpnBzfunqrREiIgGgHeORZ57V41meEtm9%2FHGTfchleopZrTG%2BVlkEAR6%2Fuzkmo9xzURe%2B7issEZGbafAvFsqIvYQdDYfr9VexFjyfAx9VbNFQCQDNJbuZ9ZlYMOPY2r4GOqUBXqdYfN245Jw0GSnPv5my%2Bs8h1au97k%2FNvlN2v3%2Fq4okOE%2BbhUeSgm43Ap44DdPB%2FrZbiWQWJ4Xo19xAfv3lPJtLjT8f1u0hnCyp5DBaEwtLZDYnsEkoDCPp1fCVvoRVyM1PO4CDrbLxLlLZaMhmQL3myQNeHA%2BQpEOwGVdMd7v6aIMlYu9xTErpR58w0NSs2Cwi0NbUT47%2BgqwAHMQ1UFPshDCnB&X-Amz-Signature=d554e4697e22aecb37b540fee73c0695397a91d8964abc050eed4c1d6494ee58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
