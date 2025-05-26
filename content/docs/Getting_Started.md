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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAE7JQL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC%2Bip%2FKQUJ4%2FlhyDPBcD8iF9kMv0dQThO%2Bt8f8%2BsINHfQIhAPkFeZF2IlA%2BMK5xlhtV%2FQeT8XQvlovJY1vKiRyMhZhgKv8DCDkQABoMNjM3NDIzMTgzODA1IgyXYCylR4EzgWfzHRsq3APC6Z7FP3CCiGJ9mzmc%2B9UO2n%2FGVfIdWfH6trzQNVjyuoGLziwCvBS%2BAG6%2FTUNYXXlr5LqZtecEHbCUu8gHNqn5yKbEY%2B4h0ifznyo%2BKM4v56Lu6Q5ICZVJVSRzNd%2B7BhDV9cgc%2F5doTDyALnMLqcaCxMS5cnm1kN4G6BH9SBnAJPjQOKm5Uw8dBeEPqt3Q8T%2BHKsTVXS7TbpBfJ0jhIZh5lfOHK9oLByhnmH%2BbI0CoHqzjXOVnE6bgnP3o3pZ56cK4gXU7MyNE1HQCuIc1fAe1mbVxI%2BybYto9U04Toe4odIJqhPzDjaxw9hBUDnIK579mejeZNTSc8mND9AyftbnPlbfOsMyEDs%2BF0uaeophF6ZH%2BdC8%2FMTUdB7A9JDUSlkauRLbO7P9p5i%2Fqu8%2BWhpQhetkkOZERcFI8a%2FiRbdvlMX0I6eMuY3IFy4C2BMVqjvX2ED9cu1Rg53iBSIeBy3t2GWoZcHnDMgoY%2FAlxFOfwkclIA3u5M%2FlLFpdvD3reE%2F0uLcbPn%2Bwwc%2BTPL68v3Bc2mybi6RP%2Fz8gc5vT5QarVd%2FXF4xlP7bvKeqnCfVE6PWpk1%2BOVEAXNyN%2FuFumqiTSC8OCpH6WAsrf5VFqbx5bz1wpE%2FU7JIiwFKVqQOjDZ4c7BBjqkATCWKi%2BGyPwrmce9g0vOJu%2FI65S6dkMMKIyTQjT1uXlkRTNvpYS%2B04Ln9WgDdHl%2FEhKGpicaX27GYwQQg%2FjI65yMTf6Ye4lYfFCw1i7tZaK%2BV2cesZzkUxHsz7gxG6vHFv4rZbF%2Fj0P3lhhl%2Fsiho29jj1NnzZrf4BIhUXedI1N90oEflRK6kw355cN8Osr8us4xKlweqxJD4VMTcI6uQbOci6YL&X-Amz-Signature=b37f4ad85a7a6200c10c1c598de4f4bddb6d7ef39b45d93930eb49a7d12aac01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAE7JQL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC%2Bip%2FKQUJ4%2FlhyDPBcD8iF9kMv0dQThO%2Bt8f8%2BsINHfQIhAPkFeZF2IlA%2BMK5xlhtV%2FQeT8XQvlovJY1vKiRyMhZhgKv8DCDkQABoMNjM3NDIzMTgzODA1IgyXYCylR4EzgWfzHRsq3APC6Z7FP3CCiGJ9mzmc%2B9UO2n%2FGVfIdWfH6trzQNVjyuoGLziwCvBS%2BAG6%2FTUNYXXlr5LqZtecEHbCUu8gHNqn5yKbEY%2B4h0ifznyo%2BKM4v56Lu6Q5ICZVJVSRzNd%2B7BhDV9cgc%2F5doTDyALnMLqcaCxMS5cnm1kN4G6BH9SBnAJPjQOKm5Uw8dBeEPqt3Q8T%2BHKsTVXS7TbpBfJ0jhIZh5lfOHK9oLByhnmH%2BbI0CoHqzjXOVnE6bgnP3o3pZ56cK4gXU7MyNE1HQCuIc1fAe1mbVxI%2BybYto9U04Toe4odIJqhPzDjaxw9hBUDnIK579mejeZNTSc8mND9AyftbnPlbfOsMyEDs%2BF0uaeophF6ZH%2BdC8%2FMTUdB7A9JDUSlkauRLbO7P9p5i%2Fqu8%2BWhpQhetkkOZERcFI8a%2FiRbdvlMX0I6eMuY3IFy4C2BMVqjvX2ED9cu1Rg53iBSIeBy3t2GWoZcHnDMgoY%2FAlxFOfwkclIA3u5M%2FlLFpdvD3reE%2F0uLcbPn%2Bwwc%2BTPL68v3Bc2mybi6RP%2Fz8gc5vT5QarVd%2FXF4xlP7bvKeqnCfVE6PWpk1%2BOVEAXNyN%2FuFumqiTSC8OCpH6WAsrf5VFqbx5bz1wpE%2FU7JIiwFKVqQOjDZ4c7BBjqkATCWKi%2BGyPwrmce9g0vOJu%2FI65S6dkMMKIyTQjT1uXlkRTNvpYS%2B04Ln9WgDdHl%2FEhKGpicaX27GYwQQg%2FjI65yMTf6Ye4lYfFCw1i7tZaK%2BV2cesZzkUxHsz7gxG6vHFv4rZbF%2Fj0P3lhhl%2Fsiho29jj1NnzZrf4BIhUXedI1N90oEflRK6kw355cN8Osr8us4xKlweqxJD4VMTcI6uQbOci6YL&X-Amz-Signature=a69e9c7d77d980a11bad46fad7c5565a3745054d1bf603d412ceae6d47f36ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAE7JQL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC%2Bip%2FKQUJ4%2FlhyDPBcD8iF9kMv0dQThO%2Bt8f8%2BsINHfQIhAPkFeZF2IlA%2BMK5xlhtV%2FQeT8XQvlovJY1vKiRyMhZhgKv8DCDkQABoMNjM3NDIzMTgzODA1IgyXYCylR4EzgWfzHRsq3APC6Z7FP3CCiGJ9mzmc%2B9UO2n%2FGVfIdWfH6trzQNVjyuoGLziwCvBS%2BAG6%2FTUNYXXlr5LqZtecEHbCUu8gHNqn5yKbEY%2B4h0ifznyo%2BKM4v56Lu6Q5ICZVJVSRzNd%2B7BhDV9cgc%2F5doTDyALnMLqcaCxMS5cnm1kN4G6BH9SBnAJPjQOKm5Uw8dBeEPqt3Q8T%2BHKsTVXS7TbpBfJ0jhIZh5lfOHK9oLByhnmH%2BbI0CoHqzjXOVnE6bgnP3o3pZ56cK4gXU7MyNE1HQCuIc1fAe1mbVxI%2BybYto9U04Toe4odIJqhPzDjaxw9hBUDnIK579mejeZNTSc8mND9AyftbnPlbfOsMyEDs%2BF0uaeophF6ZH%2BdC8%2FMTUdB7A9JDUSlkauRLbO7P9p5i%2Fqu8%2BWhpQhetkkOZERcFI8a%2FiRbdvlMX0I6eMuY3IFy4C2BMVqjvX2ED9cu1Rg53iBSIeBy3t2GWoZcHnDMgoY%2FAlxFOfwkclIA3u5M%2FlLFpdvD3reE%2F0uLcbPn%2Bwwc%2BTPL68v3Bc2mybi6RP%2Fz8gc5vT5QarVd%2FXF4xlP7bvKeqnCfVE6PWpk1%2BOVEAXNyN%2FuFumqiTSC8OCpH6WAsrf5VFqbx5bz1wpE%2FU7JIiwFKVqQOjDZ4c7BBjqkATCWKi%2BGyPwrmce9g0vOJu%2FI65S6dkMMKIyTQjT1uXlkRTNvpYS%2B04Ln9WgDdHl%2FEhKGpicaX27GYwQQg%2FjI65yMTf6Ye4lYfFCw1i7tZaK%2BV2cesZzkUxHsz7gxG6vHFv4rZbF%2Fj0P3lhhl%2Fsiho29jj1NnzZrf4BIhUXedI1N90oEflRK6kw355cN8Osr8us4xKlweqxJD4VMTcI6uQbOci6YL&X-Amz-Signature=23d181139915e7b70c157e5cfdcb92e7e2bbc51b4f45d49a201339dc6ded1975&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHU2DZ4L%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC1X1u3fBZlrDjNlaisYkjbSbLr8aqh%2Bd8BwsYKYPa%2FVgIgRrCTx8RHJq9EiLP59OTf8jPJtuWzWh1M2CrTRdNPKmQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDIiin2%2FzQg8yRiK9CrcA1DeyHfr3Q93S34tbUruyX1Yy%2FL%2BVnV52TsAJL1bVb0P4qjDnrH1Gf7obywwGRqbG2zP5ttG6In0SqRLT9Acq6WfMfUXXhtciJ42WWPt%2BXvwCZRH6F7o3H%2Bt9snXeK5OspBiV1hmRcMs17VBYVdxUa4jO%2BEV%2BsNwSCdK8f2Z4QsGOdDxmv0x1mFzwl2J3cIL0RA7FOND5ujF0jfgGdMXHrwVnYdNFSI8ZXniPfLvDyyjvmRpb15M88zxz2IaWKw3ulwztbL9y0DgtEeBEzFMsV9wf1aSycCGcLvje%2Bzd5fwIW%2BztrBR4XooALsW6ho%2FE9MplAlMZs%2BmdHTeSlXP%2BC5nvD2ymMQnSfTK37i6p0N%2FfibvmiAGkqJ4mwDlgYsBnNKxKYC8r0nz3%2Bc5nEYQUn15rt91JyiF%2Bvs9vsbsaxQFH%2FZDOgbrfFbSnE8lGX%2BscodVdXXF8AIOJVDF%2BFP75C1j31F%2BC00eNBrqUs4YXyVWc6ulmlD0qizkzap33kGxtUSHKk1nA8ADdo6npyX489FBdtKzStL5nxVBdKourbafUTdHaGd%2FsgKNugfSzHzhhCNqZS8wMRrsrxPCFLih%2Bx08UMBDSuv13wbf6%2Fayv2ZqDtfihfEsi%2FwhAWbVtMPCqzsEGOqUBUo9LqxtkwznO3QcxPpQIZ5WJNPHajBoMSksr0%2FiM%2By%2F83PUv37PLCOMSuxIrthWu50Ij9nYDIwjngto5z39ELQqgWORs41Q9kIMXzDV2b%2B6ZhxujxbNEnqsPN70ODFNCIeWK%2F7Laap2znjF%2FYreMgKq1kO7jTwX88%2FsR2glB0PlHTrkkuJWx5IzUdNU%2FvpuWtf2Gvjj2cT7sBL9x8w0BRY0YEg2s&X-Amz-Signature=af4762b40dfea06f5f6b95ab1bf19f877cf2305f1ecf7534406c797b5815cbb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JL5HLNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDB4BjlaXGoYVwtSdh44VgZjZ77q5N3rzn6%2Fk8h3yMuQwIgFjJZFP%2FTCiaXgjCRdtrWtQ4y%2F%2BnEBZ4WejMjl7UHbWIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKYw313L6mvsNnXA8ircAxUaUZrzVOORhHjN%2Fd3v9doN8woi0VQg3gppVQ%2Fno%2BmyyRzPJmTMe63Zn0PvwHAEUbOxgXLBZOWtuwOurWkh%2BxLg%2FDgjsFUmAe%2FfQNyFtMESmm3qrFves0IIYgZbi9MaHB2hQc8KeoTV17uamYjDOJd8BS5su%2Ff76Mjnk601flZfFV2tlmAjmtkphD2b01bhy6pChXV80pVAVH2XUjjdrReqpSnKzWTwO5O1dZ1PoopcCzDT9UAI2REK9fFLsAh0ENtUCqvihCxUL0YqMTdV99%2FSHT6pNifAlilnuN5%2FWdBnXMvawS6no4xfY4ESVcgfTqLkNCaqvlcPDC65VRe%2FIQ5a35Le%2BlxQl%2FThGpcgyDsGHiQeUxzz2yQ%2F2XU3cfjUDDpt4vx6kDVvg4caEhmbxtMwQcDd4sxhairEPx4EiqIwB5Hc1blHFFxuYoUzz9vAJX9h3MK4JJiyTTrR%2BItgroX4l%2FKRMvtkm78BKEwBFSkb9ZL6y7o85o2f8eXEn8ONbEKDzaCXLVMAyizEj7DP8jE8kqczdiNrZQ0WufiCKrr%2FVHL0lLve6VKjy7Rf%2F1UN36D4rTnojj5HlzUza%2FNx3lrEbdmFn%2FpgzNfttGpa47viE4JQGXJSvB%2FKLEBUMKGqzsEGOqUBDqF96ZOCBkvQIhi0nueMSWHFW9L9qSiKUm1b1DzCrx875Yw0q5gHZMfabs%2BLfUcVNce3Kuia6%2ByHxHc2lQGlH6ytXZQv%2BJS%2Bb%2FsnmjvnN4kmAHEL%2FsqoEzkMD2Gd%2ByIUVwiU6z16J9tPJ23NglucokvSvQU75O67pqdyG1b9L6IepY98BJSB6oQNMQ9SG8921P1tE3TcW7aCdS0qGl%2FI5vCir2qE&X-Amz-Signature=9372770db17e4458fc1cb15aee285fd56ea569a58c362c7d1d5dba27492c3a91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAE7JQL7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC%2Bip%2FKQUJ4%2FlhyDPBcD8iF9kMv0dQThO%2Bt8f8%2BsINHfQIhAPkFeZF2IlA%2BMK5xlhtV%2FQeT8XQvlovJY1vKiRyMhZhgKv8DCDkQABoMNjM3NDIzMTgzODA1IgyXYCylR4EzgWfzHRsq3APC6Z7FP3CCiGJ9mzmc%2B9UO2n%2FGVfIdWfH6trzQNVjyuoGLziwCvBS%2BAG6%2FTUNYXXlr5LqZtecEHbCUu8gHNqn5yKbEY%2B4h0ifznyo%2BKM4v56Lu6Q5ICZVJVSRzNd%2B7BhDV9cgc%2F5doTDyALnMLqcaCxMS5cnm1kN4G6BH9SBnAJPjQOKm5Uw8dBeEPqt3Q8T%2BHKsTVXS7TbpBfJ0jhIZh5lfOHK9oLByhnmH%2BbI0CoHqzjXOVnE6bgnP3o3pZ56cK4gXU7MyNE1HQCuIc1fAe1mbVxI%2BybYto9U04Toe4odIJqhPzDjaxw9hBUDnIK579mejeZNTSc8mND9AyftbnPlbfOsMyEDs%2BF0uaeophF6ZH%2BdC8%2FMTUdB7A9JDUSlkauRLbO7P9p5i%2Fqu8%2BWhpQhetkkOZERcFI8a%2FiRbdvlMX0I6eMuY3IFy4C2BMVqjvX2ED9cu1Rg53iBSIeBy3t2GWoZcHnDMgoY%2FAlxFOfwkclIA3u5M%2FlLFpdvD3reE%2F0uLcbPn%2Bwwc%2BTPL68v3Bc2mybi6RP%2Fz8gc5vT5QarVd%2FXF4xlP7bvKeqnCfVE6PWpk1%2BOVEAXNyN%2FuFumqiTSC8OCpH6WAsrf5VFqbx5bz1wpE%2FU7JIiwFKVqQOjDZ4c7BBjqkATCWKi%2BGyPwrmce9g0vOJu%2FI65S6dkMMKIyTQjT1uXlkRTNvpYS%2B04Ln9WgDdHl%2FEhKGpicaX27GYwQQg%2FjI65yMTf6Ye4lYfFCw1i7tZaK%2BV2cesZzkUxHsz7gxG6vHFv4rZbF%2Fj0P3lhhl%2Fsiho29jj1NnzZrf4BIhUXedI1N90oEflRK6kw355cN8Osr8us4xKlweqxJD4VMTcI6uQbOci6YL&X-Amz-Signature=926817e639945ebbcf7e171dcd35be97a441e98954677fa3fd6dafb5e5ee9a32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
