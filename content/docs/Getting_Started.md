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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22OF3GV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFapt2qQkqW5LiJN6C4h2Zl537XvMV8qTXnkRStiVFrJAiAHqS9Eh%2BZad%2F%2BBOkevS9HKxBpAJs3%2BaQbBwZWBp9q%2FPyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjm2VY%2B1pFk9fG51fKtwDIR%2Buid60RTZmMRK31P4fJDtdIkWi0hdPTa6M5kZOTZP6HHjZY2Uh8zsOAYSjjLt62L%2FPRvXGow3jrSQEAX9oycVeWuQChtmpJEVT85mDVJMLPJvqDKoTgHtvetrLL2aWtu6AbpTxrDoGdEJOENC2VPbRHspuhvvXgCM1xazzIm%2BFopzt9wlNEc10rb5Qd50bsjZ7hzKrafrO9JRGJeCxLU2NzvP3eCdZVgN1moN1c0oJlmIgoCtdxIb0DPuVvvSKUYrqcD2z1SNjLnfC%2F2entvID31eAL6nYmsXeK4Qc4qK4RX1%2B%2FWZSzLGbLpcpxOeiZ8ndZlSu7BEaAIBRoeVgRqcc0ra2Rx24ipVg%2B%2Bj%2FY7ZbvylSaJn2rpu69haXmL4ni6Vqbyf6KRMP%2BbNXOC9w25u5DvLBU3%2BFNUddD6apenC5mavi1XhZ8qHi0JLBr4EDS%2FC1WQCsx5DNV8vaP7KSAJ5%2FbCPkhEop375gqe1TFj7s%2FFJLaRszQt04Pt6gpx1q44Hw4yyAWXK8WSRtFVmdtk9IwDgXVAEQ94%2BDXYP%2FemIQkQZNzC6zqseGB6Fb85b9QMFOxM2vysTE1a%2FIcL%2FjX%2ByGw7DUhXr5o0iPcFMZNLx%2BrUvxVetyD%2BUdrzQwzKKowwY6pgFEFJwjd936%2FlQtEQoKGN%2FzvWD3sPiCBG7G68fF8A6gkYK6n4QgNUe8iGEmNOljip1AOiH%2FEijpXg2MV6eESkg%2FypFr9YtxQtGebiAsBQA%2BtwFO88jVhWc5QVDAVTYb41dQozFpvq5tN3fPaLoGJBm8Yl3NVQmWoUD3uTtxgvtEml7scwRCt2vE7i%2BMDR69nVBfxYWQTk%2BGIO6VvV%2BwBA25FBqKUO2J&X-Amz-Signature=bace836ed1c15c43e57643c5763b713f01032c1f10abe2c6826ca044fe33dd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22OF3GV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFapt2qQkqW5LiJN6C4h2Zl537XvMV8qTXnkRStiVFrJAiAHqS9Eh%2BZad%2F%2BBOkevS9HKxBpAJs3%2BaQbBwZWBp9q%2FPyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjm2VY%2B1pFk9fG51fKtwDIR%2Buid60RTZmMRK31P4fJDtdIkWi0hdPTa6M5kZOTZP6HHjZY2Uh8zsOAYSjjLt62L%2FPRvXGow3jrSQEAX9oycVeWuQChtmpJEVT85mDVJMLPJvqDKoTgHtvetrLL2aWtu6AbpTxrDoGdEJOENC2VPbRHspuhvvXgCM1xazzIm%2BFopzt9wlNEc10rb5Qd50bsjZ7hzKrafrO9JRGJeCxLU2NzvP3eCdZVgN1moN1c0oJlmIgoCtdxIb0DPuVvvSKUYrqcD2z1SNjLnfC%2F2entvID31eAL6nYmsXeK4Qc4qK4RX1%2B%2FWZSzLGbLpcpxOeiZ8ndZlSu7BEaAIBRoeVgRqcc0ra2Rx24ipVg%2B%2Bj%2FY7ZbvylSaJn2rpu69haXmL4ni6Vqbyf6KRMP%2BbNXOC9w25u5DvLBU3%2BFNUddD6apenC5mavi1XhZ8qHi0JLBr4EDS%2FC1WQCsx5DNV8vaP7KSAJ5%2FbCPkhEop375gqe1TFj7s%2FFJLaRszQt04Pt6gpx1q44Hw4yyAWXK8WSRtFVmdtk9IwDgXVAEQ94%2BDXYP%2FemIQkQZNzC6zqseGB6Fb85b9QMFOxM2vysTE1a%2FIcL%2FjX%2ByGw7DUhXr5o0iPcFMZNLx%2BrUvxVetyD%2BUdrzQwzKKowwY6pgFEFJwjd936%2FlQtEQoKGN%2FzvWD3sPiCBG7G68fF8A6gkYK6n4QgNUe8iGEmNOljip1AOiH%2FEijpXg2MV6eESkg%2FypFr9YtxQtGebiAsBQA%2BtwFO88jVhWc5QVDAVTYb41dQozFpvq5tN3fPaLoGJBm8Yl3NVQmWoUD3uTtxgvtEml7scwRCt2vE7i%2BMDR69nVBfxYWQTk%2BGIO6VvV%2BwBA25FBqKUO2J&X-Amz-Signature=cc173c9b78155bd8bd07a9fffe193e3d0e6ec7badb40fdba1a3325ebf645f58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22OF3GV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFapt2qQkqW5LiJN6C4h2Zl537XvMV8qTXnkRStiVFrJAiAHqS9Eh%2BZad%2F%2BBOkevS9HKxBpAJs3%2BaQbBwZWBp9q%2FPyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjm2VY%2B1pFk9fG51fKtwDIR%2Buid60RTZmMRK31P4fJDtdIkWi0hdPTa6M5kZOTZP6HHjZY2Uh8zsOAYSjjLt62L%2FPRvXGow3jrSQEAX9oycVeWuQChtmpJEVT85mDVJMLPJvqDKoTgHtvetrLL2aWtu6AbpTxrDoGdEJOENC2VPbRHspuhvvXgCM1xazzIm%2BFopzt9wlNEc10rb5Qd50bsjZ7hzKrafrO9JRGJeCxLU2NzvP3eCdZVgN1moN1c0oJlmIgoCtdxIb0DPuVvvSKUYrqcD2z1SNjLnfC%2F2entvID31eAL6nYmsXeK4Qc4qK4RX1%2B%2FWZSzLGbLpcpxOeiZ8ndZlSu7BEaAIBRoeVgRqcc0ra2Rx24ipVg%2B%2Bj%2FY7ZbvylSaJn2rpu69haXmL4ni6Vqbyf6KRMP%2BbNXOC9w25u5DvLBU3%2BFNUddD6apenC5mavi1XhZ8qHi0JLBr4EDS%2FC1WQCsx5DNV8vaP7KSAJ5%2FbCPkhEop375gqe1TFj7s%2FFJLaRszQt04Pt6gpx1q44Hw4yyAWXK8WSRtFVmdtk9IwDgXVAEQ94%2BDXYP%2FemIQkQZNzC6zqseGB6Fb85b9QMFOxM2vysTE1a%2FIcL%2FjX%2ByGw7DUhXr5o0iPcFMZNLx%2BrUvxVetyD%2BUdrzQwzKKowwY6pgFEFJwjd936%2FlQtEQoKGN%2FzvWD3sPiCBG7G68fF8A6gkYK6n4QgNUe8iGEmNOljip1AOiH%2FEijpXg2MV6eESkg%2FypFr9YtxQtGebiAsBQA%2BtwFO88jVhWc5QVDAVTYb41dQozFpvq5tN3fPaLoGJBm8Yl3NVQmWoUD3uTtxgvtEml7scwRCt2vE7i%2BMDR69nVBfxYWQTk%2BGIO6VvV%2BwBA25FBqKUO2J&X-Amz-Signature=321e77d7c07a23214c7017f31e8b9ebc32634f8cc1e74116c678d1a502ca1539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZY2Y2HC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDuQrRyAP8iCF7Nur7ql3Mcb%2FrV%2B%2B8iOPfxOJHLVs3mEAiBLkIv52I%2B%2B%2FkzQmUJ4kMo8BoPUUi6mw%2FRocXrlo%2FkUuCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXx3u5tlgVNWDWEEQKtwDIPGQp57glnf2Flqeq%2BssYyttwb2%2FM9enRc5SWDtxhrUPofEhqB9%2FllF%2BJkk%2BEoe2sThsiC7r2hssriBEJ3kbLM6%2FqAPdd%2FvtnHX8gVNKfX%2BUzi3swdwvpRM5goMd5QdQoqDhW1ld9JAn5frbeDyWTk4s32OKikYJbOye0xTp3a9vDtVpvVaIjfi%2FwqK9KBiS5FVwoD6raDXBKF5VJpBxpEswUKNZkclyjJgSmdBnlgfTpkqY2WCnD%2BlcgfmK7pF5QLvlg7XwkZuMC5QuaXT%2FsU2wWYXFPO4VqdRsTwoV7HxbeFAh1rCl4aEmRYYZqmvQCz01V1TV8AR0wkiX%2Bc8Zcfb%2FT4dBiZ25j%2B7k0vBANU%2B5oWS%2BxUqiXbAVO178%2F1bitiMSMUEwhknfMGN4ZxGpUripC04kSEhjgyOgpapW4C61XoNfEjfslfzEVfIRWbjAWZYDS98fOePJ%2F4ZkJVkWDJz0jNDFuVL6X4xTE%2B%2BJHtEbuvMzfQ0jNwzn9DyGHC76p2qqDSw1BEeEwroSPPhcJIhRlgvNIElbHs2bxsqqqV0doUmVEM8%2FpxrmVzA7BrF%2BguhYU9Zs5wPqebp2SS9R57vQUFz%2FviNmY8KxjmaBZI0IcmnD%2FjN19eHtUjMwiLSowwY6pgHkMbjO7tUGtT9Eq%2BR7TInN%2BDi%2FlG%2BSmlsCo0RI7Jm8UyMVtTzjtHiLA4my7uq68fusdAvlFSnirtl%2F2XUbeUms1pvt4Te%2BVMBAMrvWdKFJwi5%2B6a3gSAkA2a5rsEOAnHOSmuodlTYmb1nlebIImjy5f%2FbDmHmZHA7irpCMFJE5aw2rMj1yYSSuBN2U%2B1E6pJFB8d5aNg4%2BQF0EWyGIv9FNZpjvqeCp&X-Amz-Signature=f6974668e5fbd127d31709016b493c111654fea7aba83ec8e0fc3e03f2fbc62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3NKQWO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIC%2FqWdxrPwtDu7yDiwUgr3Emca8mJUN6Lv5XiGRRlSvJAiBaRsxsc1aevGm6owD2PZZZdtnvWvA4Y19R9DT3BdIUIyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnfuHKExA6XT9dXu9KtwD0BgEIoUpk0q%2FFIEWATN%2BvebH5Y0WmX0vz3DNrIO6%2BUUEG86RujQOrUuBO4kIKNRzMorQQFfElBPpFoUA1Vjzdmw6edUZ8MupyoOv2cbiN1aKuXmmnS9tNE9YCLy8t8y7FajEiFKO3w0KaHgH1hpXfpUh1zjYVpIpDPXWPZr0U1375K7DOlnzX2NQb%2BdwtYKdyvxbynAakxoO9RlKc0mZXyrAUeRdfKyI%2BVesflxuy7RyfOlGBfREKeOXwJO57%2FWxkkVOqsbpFrjzbaBEReuugJXPbBZ%2B3KCDe2uAs1OJQsEPVZjbNX4VuQgbbYvQPxVEJbQ%2F4o1h6Z6JH05l1zenNrqoOA1TgiCoPwy0GzV7xae6QshVC%2BxyCi6PGrVRySN5NbEXlFbsEmofv85bFadPvEleiLB0ETV4Gjj6OZyOhq0zSlv8Q68uqK35qgFGO9ENM33TbbrUGYlG9g5kpTxaH6tyX0hkHgnyuwgA6Ic4UX8wPAGe7t1dj1Imb5FS4erJOuh2kytFVamKJraz5zy5Zp2683%2BJdcyJ5w21jjdc%2B8hxyJqrCdmuO2wfMJ6IkTVzZuOQJlT0HMIdy5bO%2BgV2Z2%2Fs0N77nuWN%2FbS8t5QAn%2Fn15QtfgTu7FS3bF4UwvbCowwY6pgGjGGgqd9rjIyuU7cwvPeNLQOQIRD07T3kuVSaTI1emi3Zwedcfukp3PhKoWoYrMOc4HXM2%2BxNhqiDYvIlfXcxwFShP6aH27kYrr9HF%2BcouplsbFXWY05FBW0Ic5FkmRlgrEDcg6QJbdbKWwdAAjBa6wtlfvPcoC67A0AXi%2Fl7IuVe6jDLAY0D%2BI5terqR%2BB03kZ9dl9c6b%2BHpdtdyLSbMseNQlgxHV&X-Amz-Signature=37187c7b7eb820dd0fc70f92cb634d731c889a920c60b6a1ae0975b2be45830a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22OF3GV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFapt2qQkqW5LiJN6C4h2Zl537XvMV8qTXnkRStiVFrJAiAHqS9Eh%2BZad%2F%2BBOkevS9HKxBpAJs3%2BaQbBwZWBp9q%2FPyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjm2VY%2B1pFk9fG51fKtwDIR%2Buid60RTZmMRK31P4fJDtdIkWi0hdPTa6M5kZOTZP6HHjZY2Uh8zsOAYSjjLt62L%2FPRvXGow3jrSQEAX9oycVeWuQChtmpJEVT85mDVJMLPJvqDKoTgHtvetrLL2aWtu6AbpTxrDoGdEJOENC2VPbRHspuhvvXgCM1xazzIm%2BFopzt9wlNEc10rb5Qd50bsjZ7hzKrafrO9JRGJeCxLU2NzvP3eCdZVgN1moN1c0oJlmIgoCtdxIb0DPuVvvSKUYrqcD2z1SNjLnfC%2F2entvID31eAL6nYmsXeK4Qc4qK4RX1%2B%2FWZSzLGbLpcpxOeiZ8ndZlSu7BEaAIBRoeVgRqcc0ra2Rx24ipVg%2B%2Bj%2FY7ZbvylSaJn2rpu69haXmL4ni6Vqbyf6KRMP%2BbNXOC9w25u5DvLBU3%2BFNUddD6apenC5mavi1XhZ8qHi0JLBr4EDS%2FC1WQCsx5DNV8vaP7KSAJ5%2FbCPkhEop375gqe1TFj7s%2FFJLaRszQt04Pt6gpx1q44Hw4yyAWXK8WSRtFVmdtk9IwDgXVAEQ94%2BDXYP%2FemIQkQZNzC6zqseGB6Fb85b9QMFOxM2vysTE1a%2FIcL%2FjX%2ByGw7DUhXr5o0iPcFMZNLx%2BrUvxVetyD%2BUdrzQwzKKowwY6pgFEFJwjd936%2FlQtEQoKGN%2FzvWD3sPiCBG7G68fF8A6gkYK6n4QgNUe8iGEmNOljip1AOiH%2FEijpXg2MV6eESkg%2FypFr9YtxQtGebiAsBQA%2BtwFO88jVhWc5QVDAVTYb41dQozFpvq5tN3fPaLoGJBm8Yl3NVQmWoUD3uTtxgvtEml7scwRCt2vE7i%2BMDR69nVBfxYWQTk%2BGIO6VvV%2BwBA25FBqKUO2J&X-Amz-Signature=1cf184dd56d784c7fea4fab022934cc13bf554836d93670cf58d39a488ecb790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
