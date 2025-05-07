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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BP3FQMU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUFCVJc6BioDeNH4%2B3%2FzzTpEbfmOCEwuZaxApC8w9%2F1AIhAO1KUDdsy6Eix1tO5Ky6jxqv%2F4oVVhDx8h9i33X%2FF00IKv8DCFQQABoMNjM3NDIzMTgzODA1IgxEfuigmmgtrqhAlHAq3AOip4oBd3l5biDjWaSc286A5K60oXoRD%2F3v82qxFimZVPrTXs3BUizmvCrbMm5ocv%2FCt7hafUBUMgpYifxioQZ8MgcyLzR7Q4vvJ%2BRhSkFfZg7E%2Fp07EqQXI3BYpAPj7D674SBMhKb5diwnPxuxbcOBjfCOIbZBJvkG%2BLRMZY85nFPa%2B6jpe0hTr3qgzBjVsbXBIgWPnXuGrKSL9TtID0gu%2FjGZKZsWwMz8pM8bsOg3FJjFnPpHJ1wWiwq6ttFoOVvnnV7KdFqV0qr3IZTNEjN%2BZP%2BpBzUvFH1b0%2BYOuc5l0CTTcX6NpruDtAGIoQM%2FhRmBJmPht7YsG34l5Nq78jkn52zXHT5aTJbtVedt2%2FwBOBXIjX9DokozCnn6bXw7jy0dS8S%2BCrA%2Ff4%2FID1cyiCmMFAZSDX1292DS2JAsC6KxQzqm1ybdrpu6PBR%2FG0FlvGhyPPyrIGs0scwQJuZpD7WJeeGB6FSH0o4PE%2BbUy76kzUmBcSFMb8HJMntuscwmRUpkIhHZZieDk0opo4l0xxTJFEdWYKR%2Bk0yX96vrAF%2BlnsBoocL1OXs2NwepVAl%2FqACTmR0kvL%2F3XKdZWeeAerzgLpP6xHKNow38UGaxUiQSItMtR6t9IsybmfDvMDD2kevABjqkAQrm%2F8%2Fl%2BoYCqDelNGSN9oQdFOAUl4DV7Ff19aOePanJcQ0iDA83vkvuEKRsAYYa64almMfxcfiEDLOBQOeTYMZ%2F13Klm%2BYzq9JKIeFr%2BXP9azre6YB3uOjm%2B0BD7TkFM66pMWblsmboC9t36g%2FAN4FAuwSHVA5thiwddCvvexH6BBjGS5R7eYNrJjCoVxjJIW8ztv3Cg3Z2vV5Lb3JOSALHkj9P&X-Amz-Signature=66b0d6f6bcfa194fa756014d96d16f364fe5cc54651157ab5b21f514eed56588&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BP3FQMU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUFCVJc6BioDeNH4%2B3%2FzzTpEbfmOCEwuZaxApC8w9%2F1AIhAO1KUDdsy6Eix1tO5Ky6jxqv%2F4oVVhDx8h9i33X%2FF00IKv8DCFQQABoMNjM3NDIzMTgzODA1IgxEfuigmmgtrqhAlHAq3AOip4oBd3l5biDjWaSc286A5K60oXoRD%2F3v82qxFimZVPrTXs3BUizmvCrbMm5ocv%2FCt7hafUBUMgpYifxioQZ8MgcyLzR7Q4vvJ%2BRhSkFfZg7E%2Fp07EqQXI3BYpAPj7D674SBMhKb5diwnPxuxbcOBjfCOIbZBJvkG%2BLRMZY85nFPa%2B6jpe0hTr3qgzBjVsbXBIgWPnXuGrKSL9TtID0gu%2FjGZKZsWwMz8pM8bsOg3FJjFnPpHJ1wWiwq6ttFoOVvnnV7KdFqV0qr3IZTNEjN%2BZP%2BpBzUvFH1b0%2BYOuc5l0CTTcX6NpruDtAGIoQM%2FhRmBJmPht7YsG34l5Nq78jkn52zXHT5aTJbtVedt2%2FwBOBXIjX9DokozCnn6bXw7jy0dS8S%2BCrA%2Ff4%2FID1cyiCmMFAZSDX1292DS2JAsC6KxQzqm1ybdrpu6PBR%2FG0FlvGhyPPyrIGs0scwQJuZpD7WJeeGB6FSH0o4PE%2BbUy76kzUmBcSFMb8HJMntuscwmRUpkIhHZZieDk0opo4l0xxTJFEdWYKR%2Bk0yX96vrAF%2BlnsBoocL1OXs2NwepVAl%2FqACTmR0kvL%2F3XKdZWeeAerzgLpP6xHKNow38UGaxUiQSItMtR6t9IsybmfDvMDD2kevABjqkAQrm%2F8%2Fl%2BoYCqDelNGSN9oQdFOAUl4DV7Ff19aOePanJcQ0iDA83vkvuEKRsAYYa64almMfxcfiEDLOBQOeTYMZ%2F13Klm%2BYzq9JKIeFr%2BXP9azre6YB3uOjm%2B0BD7TkFM66pMWblsmboC9t36g%2FAN4FAuwSHVA5thiwddCvvexH6BBjGS5R7eYNrJjCoVxjJIW8ztv3Cg3Z2vV5Lb3JOSALHkj9P&X-Amz-Signature=4ee99c2ecc2d2a6f6b90f3fad0b86273f790b3d09c8e383d8ecafd7cd032d5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BP3FQMU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUFCVJc6BioDeNH4%2B3%2FzzTpEbfmOCEwuZaxApC8w9%2F1AIhAO1KUDdsy6Eix1tO5Ky6jxqv%2F4oVVhDx8h9i33X%2FF00IKv8DCFQQABoMNjM3NDIzMTgzODA1IgxEfuigmmgtrqhAlHAq3AOip4oBd3l5biDjWaSc286A5K60oXoRD%2F3v82qxFimZVPrTXs3BUizmvCrbMm5ocv%2FCt7hafUBUMgpYifxioQZ8MgcyLzR7Q4vvJ%2BRhSkFfZg7E%2Fp07EqQXI3BYpAPj7D674SBMhKb5diwnPxuxbcOBjfCOIbZBJvkG%2BLRMZY85nFPa%2B6jpe0hTr3qgzBjVsbXBIgWPnXuGrKSL9TtID0gu%2FjGZKZsWwMz8pM8bsOg3FJjFnPpHJ1wWiwq6ttFoOVvnnV7KdFqV0qr3IZTNEjN%2BZP%2BpBzUvFH1b0%2BYOuc5l0CTTcX6NpruDtAGIoQM%2FhRmBJmPht7YsG34l5Nq78jkn52zXHT5aTJbtVedt2%2FwBOBXIjX9DokozCnn6bXw7jy0dS8S%2BCrA%2Ff4%2FID1cyiCmMFAZSDX1292DS2JAsC6KxQzqm1ybdrpu6PBR%2FG0FlvGhyPPyrIGs0scwQJuZpD7WJeeGB6FSH0o4PE%2BbUy76kzUmBcSFMb8HJMntuscwmRUpkIhHZZieDk0opo4l0xxTJFEdWYKR%2Bk0yX96vrAF%2BlnsBoocL1OXs2NwepVAl%2FqACTmR0kvL%2F3XKdZWeeAerzgLpP6xHKNow38UGaxUiQSItMtR6t9IsybmfDvMDD2kevABjqkAQrm%2F8%2Fl%2BoYCqDelNGSN9oQdFOAUl4DV7Ff19aOePanJcQ0iDA83vkvuEKRsAYYa64almMfxcfiEDLOBQOeTYMZ%2F13Klm%2BYzq9JKIeFr%2BXP9azre6YB3uOjm%2B0BD7TkFM66pMWblsmboC9t36g%2FAN4FAuwSHVA5thiwddCvvexH6BBjGS5R7eYNrJjCoVxjJIW8ztv3Cg3Z2vV5Lb3JOSALHkj9P&X-Amz-Signature=5b4c8016f7c13bd7fe21233d1f4ae345dfa5dd4396b3e503eb699b0dbf9ec532&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEMWDZ5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRSxxM5Rr6XzCFnYCmofNxm3ZiUyD7fz50H7F94y%2B36AiEAtjcJ9ujlI2j6g2j48Ca01uFCMLWCXOGI3IHBYCsx0%2F4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCbRPR14LPkDPP60QyrcA4Ie1ORDyK5yPJwkC%2BAxoqvUDOLo54Lj4yuY8%2Bpg%2B41ttiyUEDX3sThASIriLVf58U%2BofhV2xnZDvAxR1QKv%2FGb8EDJ73xqP19xMxrxMd0Mt5ehn2lOToYezlGnxnYqeSVYHc1hOnl38U4ppP6IZ35lsoSR3aQA%2FOp8%2BmS47AbcJixSVRnYPxLNQa%2BSoEu%2Fq0aL2EK0OybaIfOC9R4rIww%2BEWOtbjHGbwDnf7yeMM5xDctb%2B9OoamVwjuQdLnHvXPHrw%2Fl50xOKTKT0wbusQsqyfyeMakTHIJoK8egMFJCLh0yMfxZRaUT8trZBFI%2B5pAyF%2BKRUIk6nha0w0SA%2Fb6fnJEhpfv1l4DkNDPBXa8bKidLz3FqgJAEb5ExIntBUZht98t%2FG9MYDUVQBLMZR4s5A%2BXieryFWrhUhq7fVqECJu0k%2BG3NluMZetS5tYfkhXz2UQThrtPClu2ihDP%2BwcggyhG3CG4TRpxxzV8OgzJPpEDQu9f9anZ%2F%2FIXXLeBJNJnBsPaKZAzwxHX0DiG%2FXcINSKF29nW1wnLqjEQGtgk9JdmR%2BG%2FPA5tD3W5wbGVCiQ7%2BxeK63%2BhWUQ4KZIsu7UVOL3I5wP3INVFW%2B1%2F2pQ5Xzw5GQXD%2B8guAgBB5EnMImS68AGOqUBjVy236uqEHsyPBW5r%2FxsSc3YjZVzu9jgVf%2Fqyazuo4XT5L%2FXMloS46HAKKmFe3KUrEZFz7DTqS3fVagZEbMWJ%2F4gipugDhkCVH3nborj9hwKwlvkKsDQDuqPWY32zzYEPb%2FaGnV0G9CO3LVECZupKCxj7JtL%2B6YJjm8eKap%2BMswOFKp%2BmUesGsz6acSQXJFrHi0BWZq9jL56yVVS0QctfhKj1fdC&X-Amz-Signature=2814057359ddccfdd54d37ac4cefc678804b28335237882f5b55a72a39980573&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDAGKBB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJ8Mth6b7fsgSWTCiODzW6xyMpRZUkLrkytU3MeTWpIAiAih4VWg9sEgWHqXymOx9C3sAbP218DfehJ8KWWIvKngSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMhSJdCAp3D82L81qFKtwDZiTid42q0ISnaDc3D5ig70jsn3j6nHFjVD4t0wxNkGZUwd0iASl61WZLDLTvwMqupT2rbChHdtkafUDnAcRAl3P4JJ%2Btd%2B%2B6yXNi5iT56l6MHliIGJNCaZpWv2vHo8R%2BDQamAu02GsSd9CEAh903ZZVCyGvAXsRn5RV1l0eqE6Kpanlj3RID%2BuoszaRUEi6h%2F%2Bt05LbcnAfmwOEYqhwcvcdFdeQYimXA1huORxEv1iFnMS7SgaclPm3k3k156u9st%2FrxDcn28zQ4j5dDQQdJhs2R8qgoT8bWwwnXzs7iYBgAz7Y1lto%2BVh4IpBVPxWe2jexGoZq6ppX0SzFW%2B2WPOh2XXFuYIv%2BLDh59GUm04Fe7FJK5oAUCSJAO2HRvVsbNkvxan026mRBXCE6FGAHZYoS0W2ZlhoVAXCbFYLsrkvFoNQQJjEAYErbxxn7XJsjKKQpp8aEbvo1gVv53CXEGKbtpe4yW92HO5bOP4aw4hluc8eH0%2Bu3wlUXoeX8f7xQLk%2FzbjZhkm9tXOLvQI6eiPg0QY4p2caE1nbIZViTax%2BgHbDLlbvrBvVwF85qXH8ZrajSQbFSIaFSZseVVQlK7XIAaF4Ju%2FNdd%2FVPHRlo5QtBNalNoltsWqmAgSyww9pHrwAY6pgF%2BsJkydqw3VAvibf%2BR3laTZ8Hz%2Fy3JSv9IQnflpgR%2FKwUShwHRSVjKV1J03EyULJ3SKRSa1J3SGqvT%2BahsIAjmHUQoMvolDXe7bDTlxboFH1dvvESNC2DQ%2FvPPfv7yn317rcRZDrG3IBMgOSTP3y5TBkM1dOwVHuPduEKnVKl51JkwTG5UwpMUCb1KE5TMJAoofh%2FIf0Lfetg8HYsaK5KC6JEAwCck&X-Amz-Signature=874186143bffebac53ff6c3846016f59f8399f99902209d78cbde1d1221ccf18&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BP3FQMU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUFCVJc6BioDeNH4%2B3%2FzzTpEbfmOCEwuZaxApC8w9%2F1AIhAO1KUDdsy6Eix1tO5Ky6jxqv%2F4oVVhDx8h9i33X%2FF00IKv8DCFQQABoMNjM3NDIzMTgzODA1IgxEfuigmmgtrqhAlHAq3AOip4oBd3l5biDjWaSc286A5K60oXoRD%2F3v82qxFimZVPrTXs3BUizmvCrbMm5ocv%2FCt7hafUBUMgpYifxioQZ8MgcyLzR7Q4vvJ%2BRhSkFfZg7E%2Fp07EqQXI3BYpAPj7D674SBMhKb5diwnPxuxbcOBjfCOIbZBJvkG%2BLRMZY85nFPa%2B6jpe0hTr3qgzBjVsbXBIgWPnXuGrKSL9TtID0gu%2FjGZKZsWwMz8pM8bsOg3FJjFnPpHJ1wWiwq6ttFoOVvnnV7KdFqV0qr3IZTNEjN%2BZP%2BpBzUvFH1b0%2BYOuc5l0CTTcX6NpruDtAGIoQM%2FhRmBJmPht7YsG34l5Nq78jkn52zXHT5aTJbtVedt2%2FwBOBXIjX9DokozCnn6bXw7jy0dS8S%2BCrA%2Ff4%2FID1cyiCmMFAZSDX1292DS2JAsC6KxQzqm1ybdrpu6PBR%2FG0FlvGhyPPyrIGs0scwQJuZpD7WJeeGB6FSH0o4PE%2BbUy76kzUmBcSFMb8HJMntuscwmRUpkIhHZZieDk0opo4l0xxTJFEdWYKR%2Bk0yX96vrAF%2BlnsBoocL1OXs2NwepVAl%2FqACTmR0kvL%2F3XKdZWeeAerzgLpP6xHKNow38UGaxUiQSItMtR6t9IsybmfDvMDD2kevABjqkAQrm%2F8%2Fl%2BoYCqDelNGSN9oQdFOAUl4DV7Ff19aOePanJcQ0iDA83vkvuEKRsAYYa64almMfxcfiEDLOBQOeTYMZ%2F13Klm%2BYzq9JKIeFr%2BXP9azre6YB3uOjm%2B0BD7TkFM66pMWblsmboC9t36g%2FAN4FAuwSHVA5thiwddCvvexH6BBjGS5R7eYNrJjCoVxjJIW8ztv3Cg3Z2vV5Lb3JOSALHkj9P&X-Amz-Signature=c381717c202777719410103e90e878edc4d263ea4e5e738ec2fadc0cbed460fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
