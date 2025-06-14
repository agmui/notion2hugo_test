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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67QPKRC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC%2F1dAwsrKqFT%2Fur9Bmqh2b2u3cTbJwpCKfArZVNOqglAiA9fCTNZCuJ0r9NbI0Dw7bBBHaAABz262fA%2Bo8k6zyigir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1tFhMtlDXT3SegpBKtwDBbZ89CigGxcNuqnrqDL8ZltIjDWCQWnx9MgiG4WNLM8LqzDyJNtLhq5irKyvfxdenkHzfJauLVQEtsQroF7B18AwRVpSWzRS%2BMkVJv4sNDEdCQTIB6mICphLYxguEDJYCsK1xIXKcsXDxOY%2BMDyqCjMVQFVMZIMvyqrg4zEDLUbaLOwJBvLRT17hlAO%2Bqm8oAJam%2BCEoANWF%2BOQv6DkRtm%2FcE52ixIVWxC7oFDOK%2F98A7JVkodJh489b9m98gfpdQpx1BBway43an6iXZYI0oInNIzPJiVYDDTd9GMmFmGT0oMZc1NTuoKaetFOWDvYVzK5goQ%2F5F7bLbLTnSN3XJfkrkPEVoWY3R3ChEdVr6ay74FBVOm4oADX%2F2gRom0VRtR4vMRCSuih3IXSuaUEs4Z2nWcJEsHGeW1PBXaOT4inVMmh66YG2OGVPmpGm3xtURvvd16EDqdZb%2FBHUpKH%2BZchCG4S18B3ykon09E4PV8awV7SSyCowdoxfOIskAkwatxcUywYn4kX92aJR2mEwNJmJAmNnD%2FKZ%2B%2BaV5vmAi1yIgQCXt%2FkVo5nsNsE48EobjEaycIICNlturXCGC1qZeh%2FLqvLLyjB54ZLaWueEUSkjxrAlatgWylLeyNwwleyzwgY6pgHB2YmM9rCVFTj4fIDIDVkXtiDvq4O2B0ds2ZW0F8X3QlwJHWC7Y4usH0nxm8m1ZIBZqR0kpAs0fpwBdbhHK2rTHk0eH73%2BnDOEekfxe959NWm6lharmi8MqkJnvxvi3tr1kEubLFY1hXiO8fzqldnyGalWXj%2FjnGMtw7sAywNcsX69rkFBa2pM7TvxOn2WWzGC7n98ZYNHumRZSvt4suX1nYXzxdVS&X-Amz-Signature=bcebb20c25d2d3e0db548227d1ea90ec746c8653734cf8a52ec093b48ee1066c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67QPKRC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC%2F1dAwsrKqFT%2Fur9Bmqh2b2u3cTbJwpCKfArZVNOqglAiA9fCTNZCuJ0r9NbI0Dw7bBBHaAABz262fA%2Bo8k6zyigir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1tFhMtlDXT3SegpBKtwDBbZ89CigGxcNuqnrqDL8ZltIjDWCQWnx9MgiG4WNLM8LqzDyJNtLhq5irKyvfxdenkHzfJauLVQEtsQroF7B18AwRVpSWzRS%2BMkVJv4sNDEdCQTIB6mICphLYxguEDJYCsK1xIXKcsXDxOY%2BMDyqCjMVQFVMZIMvyqrg4zEDLUbaLOwJBvLRT17hlAO%2Bqm8oAJam%2BCEoANWF%2BOQv6DkRtm%2FcE52ixIVWxC7oFDOK%2F98A7JVkodJh489b9m98gfpdQpx1BBway43an6iXZYI0oInNIzPJiVYDDTd9GMmFmGT0oMZc1NTuoKaetFOWDvYVzK5goQ%2F5F7bLbLTnSN3XJfkrkPEVoWY3R3ChEdVr6ay74FBVOm4oADX%2F2gRom0VRtR4vMRCSuih3IXSuaUEs4Z2nWcJEsHGeW1PBXaOT4inVMmh66YG2OGVPmpGm3xtURvvd16EDqdZb%2FBHUpKH%2BZchCG4S18B3ykon09E4PV8awV7SSyCowdoxfOIskAkwatxcUywYn4kX92aJR2mEwNJmJAmNnD%2FKZ%2B%2BaV5vmAi1yIgQCXt%2FkVo5nsNsE48EobjEaycIICNlturXCGC1qZeh%2FLqvLLyjB54ZLaWueEUSkjxrAlatgWylLeyNwwleyzwgY6pgHB2YmM9rCVFTj4fIDIDVkXtiDvq4O2B0ds2ZW0F8X3QlwJHWC7Y4usH0nxm8m1ZIBZqR0kpAs0fpwBdbhHK2rTHk0eH73%2BnDOEekfxe959NWm6lharmi8MqkJnvxvi3tr1kEubLFY1hXiO8fzqldnyGalWXj%2FjnGMtw7sAywNcsX69rkFBa2pM7TvxOn2WWzGC7n98ZYNHumRZSvt4suX1nYXzxdVS&X-Amz-Signature=4745a68b7b9b56955c99a7a52da5f10dcf4801493be616d6581b72c0df6cb230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67QPKRC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC%2F1dAwsrKqFT%2Fur9Bmqh2b2u3cTbJwpCKfArZVNOqglAiA9fCTNZCuJ0r9NbI0Dw7bBBHaAABz262fA%2Bo8k6zyigir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1tFhMtlDXT3SegpBKtwDBbZ89CigGxcNuqnrqDL8ZltIjDWCQWnx9MgiG4WNLM8LqzDyJNtLhq5irKyvfxdenkHzfJauLVQEtsQroF7B18AwRVpSWzRS%2BMkVJv4sNDEdCQTIB6mICphLYxguEDJYCsK1xIXKcsXDxOY%2BMDyqCjMVQFVMZIMvyqrg4zEDLUbaLOwJBvLRT17hlAO%2Bqm8oAJam%2BCEoANWF%2BOQv6DkRtm%2FcE52ixIVWxC7oFDOK%2F98A7JVkodJh489b9m98gfpdQpx1BBway43an6iXZYI0oInNIzPJiVYDDTd9GMmFmGT0oMZc1NTuoKaetFOWDvYVzK5goQ%2F5F7bLbLTnSN3XJfkrkPEVoWY3R3ChEdVr6ay74FBVOm4oADX%2F2gRom0VRtR4vMRCSuih3IXSuaUEs4Z2nWcJEsHGeW1PBXaOT4inVMmh66YG2OGVPmpGm3xtURvvd16EDqdZb%2FBHUpKH%2BZchCG4S18B3ykon09E4PV8awV7SSyCowdoxfOIskAkwatxcUywYn4kX92aJR2mEwNJmJAmNnD%2FKZ%2B%2BaV5vmAi1yIgQCXt%2FkVo5nsNsE48EobjEaycIICNlturXCGC1qZeh%2FLqvLLyjB54ZLaWueEUSkjxrAlatgWylLeyNwwleyzwgY6pgHB2YmM9rCVFTj4fIDIDVkXtiDvq4O2B0ds2ZW0F8X3QlwJHWC7Y4usH0nxm8m1ZIBZqR0kpAs0fpwBdbhHK2rTHk0eH73%2BnDOEekfxe959NWm6lharmi8MqkJnvxvi3tr1kEubLFY1hXiO8fzqldnyGalWXj%2FjnGMtw7sAywNcsX69rkFBa2pM7TvxOn2WWzGC7n98ZYNHumRZSvt4suX1nYXzxdVS&X-Amz-Signature=392aabe102c65b0934557de3732424dc0e0de4129789c5550d30e5a7d874b4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFCSZVD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCOgvpYl7PqOiVzXExsRti%2BK9MHJ9XN4H8hlyiz5nWhnQIgIkpuALslNa8KF1i6D%2BYLOQx1bBQE7pKRQuPtNv%2FQVFEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE%2BphmWCTJBhylwfzircA8pycqyIVby6y0mMmtv4BqlhmwnrTPFikWyoG3NK8AZ2hdKBjF17rwE2DINQM78wHfPtumwAG5aU9Rw0iEU8TrIzRYSj2ARt1vEmb%2FdIU3NuNnyrr5l5Qlv9bgIg%2BwxeGe2w4dTJIPKpiLdEahd43MQwACTXDOOcnCCS4ae61lCME%2BGelS15SKmOY%2B%2Fj%2FYZupVV6%2FttWkRD%2BvLF%2F44lEg8CrJChRaJSr3nyWnMAaADwE9r3Drl2X5s231Lc0egRAnBE8kD1YUK5rCnDBYsZfKHFJa2yx0aQtrOeEqzDrw%2BaPUO1a2Nub1oxbXCwYwAGKVGsEOzZTVv0VcSMiwWL%2Brp1G9cgV%2BAsZteVBWt5XJmA0gdRX4ZRfzqV4jvbq7jCO0rH35moq%2Fwn%2B2leWYF8ZxFCmJ0Xp2bZaD17VdftQB3wSwPe1lo7F1i3ZfHwa8GdpsBoVPlciQmktsTmD%2Fh%2FcObEbIKNxdlF9qOtyf6njstdxo%2FpJ%2Fk%2FCMVS2SISyGHFpvZ0xPTDVkzW1bMa%2BGOUr3C36gWT1besCu%2F7uqR89bvHJ6hqnfPWUsu4t9gv7iiZ1zqd4vcCpRShnXo%2Bb5wMgqnfh5564rD01vRO%2FUbO0CkrMS38HA9fCC7K1z6qMMODss8IGOqUBCQyLMG1bWktxbNqsknKPsWqwuA%2Frl0V%2BZ1SE7FxC2IIJL8PYtW8EFKiviYsk%2FNWw82OjA%2FPWXBINPt81Pb7aRGDBoVPGz71VbZgxFK86yWBT8cENd2uNFWTYslMqcFPDk5CsW%2B9hWafiyxgJROpYodP0OOKB5GSUnOuCN6KgyR1iN0nyNsfHI1qVrbmpWa0Axttn43WkoXtU4BklnWOIDJw7J32L&X-Amz-Signature=fecb7df6979c6541491492789e65af0ce8c1836d528734661591409933870fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEUUAK4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAo3bDUXGk4NBxx8VNfp0i09YcQza4y1R8rFJOomGdQMAiAFHJ4%2FFNnQQZ4QAtiAXRiI2iHcOG6Mf8DqiBe09jBgUir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMGRKMmaDfHi2GBudvKtwDtuS0XqWaI0jFRG7iSMk9M2ORui7nZK%2BrWRUqZWpSuYERT2xCa0ukXmfBRN84Sir30S%2FIZU0g8leyga5OFIa7YdywsbYmDjGpP6oIbF9bjNuQpRxT3fw8AvlKrMT%2BqXciizDxdM4PewmVAs%2BbxnX3mSfVqynfA0LeRhuPjF2O8U01fRORVBLfRQ%2B%2FYcNJUC6Fjo1EuyS8BO6iB43BSr5DylfuQw8M82CJA0EC%2B0se1R%2FOBCCHFJ%2FwyhnsR6aV4XLeX4nH7XxFMp4hTkwKcCWUy9Awbl4g9u82t87XS4KOVJb6iUxsVFOZfF7ug6T7VHJM%2FergBzI%2BGAeP7A0vemxi4nN4KpdWYKXB2UYpqo6ch%2BZHmIzg46hnF545muIcrHTg%2F0J1J0YH9H6JOFhbVKfazvR%2FStgR9l3eTL3lmztqlkzXluHkaF3aWossTLRj1Pv9LYtq3298WChVB%2BQyYB%2FADXCb8AaZburwR0NZep5J%2BuQFU8FwJUqNJUkAw%2FMm6WgapKaVfsH68RJcrTnJ92b98ZcWlBR3SNq1eR32jnphFtpJsCennNSM0xTrVHkMBCGg0Jn407dCGztsUH%2BWO68slLhDG%2Buhd%2FjKP5tnPieJrD%2Bb%2FlosioRCmfflQ6Qw1eyzwgY6pgGPl1w4H7rZAWvjKvnA9miPu0cZKERM5SbQ9Xt1WRgF37g88hBb0qeyBP1gW4q18UsWu%2BAVYzh4Ad2o573v1e2KYXeA7%2BqT8s76bSAbaC2FzZsDw4xvyE%2B5ElUchCBZskQax7ejKcdL8zeCXJMNwtbrTcFtUUo2Ka015baMRGUgMn39ViMWP5GaGpTfTxdyGlOAErHXAdCI7Myas7A8xoeXQ0rWL4Jh&X-Amz-Signature=a833b6c2ce7952c5c6ba8d713325a4ea52a617ae7be9761ce684349081f4cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67QPKRC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC%2F1dAwsrKqFT%2Fur9Bmqh2b2u3cTbJwpCKfArZVNOqglAiA9fCTNZCuJ0r9NbI0Dw7bBBHaAABz262fA%2Bo8k6zyigir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM1tFhMtlDXT3SegpBKtwDBbZ89CigGxcNuqnrqDL8ZltIjDWCQWnx9MgiG4WNLM8LqzDyJNtLhq5irKyvfxdenkHzfJauLVQEtsQroF7B18AwRVpSWzRS%2BMkVJv4sNDEdCQTIB6mICphLYxguEDJYCsK1xIXKcsXDxOY%2BMDyqCjMVQFVMZIMvyqrg4zEDLUbaLOwJBvLRT17hlAO%2Bqm8oAJam%2BCEoANWF%2BOQv6DkRtm%2FcE52ixIVWxC7oFDOK%2F98A7JVkodJh489b9m98gfpdQpx1BBway43an6iXZYI0oInNIzPJiVYDDTd9GMmFmGT0oMZc1NTuoKaetFOWDvYVzK5goQ%2F5F7bLbLTnSN3XJfkrkPEVoWY3R3ChEdVr6ay74FBVOm4oADX%2F2gRom0VRtR4vMRCSuih3IXSuaUEs4Z2nWcJEsHGeW1PBXaOT4inVMmh66YG2OGVPmpGm3xtURvvd16EDqdZb%2FBHUpKH%2BZchCG4S18B3ykon09E4PV8awV7SSyCowdoxfOIskAkwatxcUywYn4kX92aJR2mEwNJmJAmNnD%2FKZ%2B%2BaV5vmAi1yIgQCXt%2FkVo5nsNsE48EobjEaycIICNlturXCGC1qZeh%2FLqvLLyjB54ZLaWueEUSkjxrAlatgWylLeyNwwleyzwgY6pgHB2YmM9rCVFTj4fIDIDVkXtiDvq4O2B0ds2ZW0F8X3QlwJHWC7Y4usH0nxm8m1ZIBZqR0kpAs0fpwBdbhHK2rTHk0eH73%2BnDOEekfxe959NWm6lharmi8MqkJnvxvi3tr1kEubLFY1hXiO8fzqldnyGalWXj%2FjnGMtw7sAywNcsX69rkFBa2pM7TvxOn2WWzGC7n98ZYNHumRZSvt4suX1nYXzxdVS&X-Amz-Signature=c9b546e9e6a4c4d8ec0bad68474825336d11f9f5f3a54658ea4f8581786d6207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
