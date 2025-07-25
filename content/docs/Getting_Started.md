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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRK5LOK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC5eG8MssyWbgbHACLf5wXn5LX%2B%2B%2B7XVvxXSHBXp%2Fis1QIhAKEwu%2FmixWJs6HDAl3bAYhaRTfpoDP7EYbFgJIlv9u56Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwLd2yUJQbn9GCbRUIq3ANf0n7bCvVu1q4QTURjtY7u7HO498qsTPVLIgkk0c9%2F8qNwy%2Bhk36VyDtOBmNzQTLMfe7H2IETNW%2Bgz6S7HbF71Pj1%2Be2k9V8OXdq8MvjZmup0cIpN1s6s3kIxxjM7UDcEGwYttNmscVc77bGM%2B84%2FokoQLj%2FlW%2BDRjb%2B9Ca2Lcag0%2BfinM0cSTKQvA0TiJ%2BJHoLAnFx8dMbcaQtWEOugzqvZWQ2ftpwyKDS%2FEBQMe1SmFUufCWyscq8g%2BgwdRsdrpC88jknyi65%2Ff2jzDxidgcQfqFvBwzejoa4U46UYR3PbTHmEd39COWMzIcj8S8JJgGw18yQZNBoa0ZozdRPphwB3aOUAhJgQ1miwzP77ey6AZduOpi51gdAxlVhVBur2Uq9WIAu9vdLKE1IjzpzGimoetaGVoiwQzLWDef6UGaEwP6cLjGWRkq%2Fvj2XDw55gYub2DLZLV1S3dYsmkxTrRmU5TNhL6fn32s8JSBhu4DecII3auoXwHsSOdo4iLhKlrUOGVE8Orv5oI5D9zvvNf5JIY9feI%2BGqFvNtYmsLHg5JnS3HHbfvUcT7D0Tlf5mrhht2LNlTrj5kPzzMD6JVH5c5kDIUSItsEPdsPAnZ14%2BfKimTbnv%2Bjxz7EfzTDYho7EBjqkAf%2FL6XcFRiEq9xH8Y1dHSNnhzL65MHFHnR1iM%2FryvdQJHlCuAsOPbW0xXmynaiApkdfXSZr3cG34cTgA3UKHtt7Y%2F7pdISCTn5%2Fg3kJTLgCIo4b628l1bmx6cQrVznFbC8LmbHs7Adu6f4a7lYRe32UfawhrjyU9j1B3cw9z0zRc2wnmTQGVB4RQYSUJiKItdTJXb9mCcgELtix6NvJK%2BTr8Mkl2&X-Amz-Signature=bd16f935cf953732982e75bdff2d2a5c7a037fdd64da1c688906efdf4a30202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRK5LOK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC5eG8MssyWbgbHACLf5wXn5LX%2B%2B%2B7XVvxXSHBXp%2Fis1QIhAKEwu%2FmixWJs6HDAl3bAYhaRTfpoDP7EYbFgJIlv9u56Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwLd2yUJQbn9GCbRUIq3ANf0n7bCvVu1q4QTURjtY7u7HO498qsTPVLIgkk0c9%2F8qNwy%2Bhk36VyDtOBmNzQTLMfe7H2IETNW%2Bgz6S7HbF71Pj1%2Be2k9V8OXdq8MvjZmup0cIpN1s6s3kIxxjM7UDcEGwYttNmscVc77bGM%2B84%2FokoQLj%2FlW%2BDRjb%2B9Ca2Lcag0%2BfinM0cSTKQvA0TiJ%2BJHoLAnFx8dMbcaQtWEOugzqvZWQ2ftpwyKDS%2FEBQMe1SmFUufCWyscq8g%2BgwdRsdrpC88jknyi65%2Ff2jzDxidgcQfqFvBwzejoa4U46UYR3PbTHmEd39COWMzIcj8S8JJgGw18yQZNBoa0ZozdRPphwB3aOUAhJgQ1miwzP77ey6AZduOpi51gdAxlVhVBur2Uq9WIAu9vdLKE1IjzpzGimoetaGVoiwQzLWDef6UGaEwP6cLjGWRkq%2Fvj2XDw55gYub2DLZLV1S3dYsmkxTrRmU5TNhL6fn32s8JSBhu4DecII3auoXwHsSOdo4iLhKlrUOGVE8Orv5oI5D9zvvNf5JIY9feI%2BGqFvNtYmsLHg5JnS3HHbfvUcT7D0Tlf5mrhht2LNlTrj5kPzzMD6JVH5c5kDIUSItsEPdsPAnZ14%2BfKimTbnv%2Bjxz7EfzTDYho7EBjqkAf%2FL6XcFRiEq9xH8Y1dHSNnhzL65MHFHnR1iM%2FryvdQJHlCuAsOPbW0xXmynaiApkdfXSZr3cG34cTgA3UKHtt7Y%2F7pdISCTn5%2Fg3kJTLgCIo4b628l1bmx6cQrVznFbC8LmbHs7Adu6f4a7lYRe32UfawhrjyU9j1B3cw9z0zRc2wnmTQGVB4RQYSUJiKItdTJXb9mCcgELtix6NvJK%2BTr8Mkl2&X-Amz-Signature=52992518eb75d7e1872908035ee06f1cda810c7ececd18ee3b171b1e5e4bcb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRK5LOK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC5eG8MssyWbgbHACLf5wXn5LX%2B%2B%2B7XVvxXSHBXp%2Fis1QIhAKEwu%2FmixWJs6HDAl3bAYhaRTfpoDP7EYbFgJIlv9u56Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwLd2yUJQbn9GCbRUIq3ANf0n7bCvVu1q4QTURjtY7u7HO498qsTPVLIgkk0c9%2F8qNwy%2Bhk36VyDtOBmNzQTLMfe7H2IETNW%2Bgz6S7HbF71Pj1%2Be2k9V8OXdq8MvjZmup0cIpN1s6s3kIxxjM7UDcEGwYttNmscVc77bGM%2B84%2FokoQLj%2FlW%2BDRjb%2B9Ca2Lcag0%2BfinM0cSTKQvA0TiJ%2BJHoLAnFx8dMbcaQtWEOugzqvZWQ2ftpwyKDS%2FEBQMe1SmFUufCWyscq8g%2BgwdRsdrpC88jknyi65%2Ff2jzDxidgcQfqFvBwzejoa4U46UYR3PbTHmEd39COWMzIcj8S8JJgGw18yQZNBoa0ZozdRPphwB3aOUAhJgQ1miwzP77ey6AZduOpi51gdAxlVhVBur2Uq9WIAu9vdLKE1IjzpzGimoetaGVoiwQzLWDef6UGaEwP6cLjGWRkq%2Fvj2XDw55gYub2DLZLV1S3dYsmkxTrRmU5TNhL6fn32s8JSBhu4DecII3auoXwHsSOdo4iLhKlrUOGVE8Orv5oI5D9zvvNf5JIY9feI%2BGqFvNtYmsLHg5JnS3HHbfvUcT7D0Tlf5mrhht2LNlTrj5kPzzMD6JVH5c5kDIUSItsEPdsPAnZ14%2BfKimTbnv%2Bjxz7EfzTDYho7EBjqkAf%2FL6XcFRiEq9xH8Y1dHSNnhzL65MHFHnR1iM%2FryvdQJHlCuAsOPbW0xXmynaiApkdfXSZr3cG34cTgA3UKHtt7Y%2F7pdISCTn5%2Fg3kJTLgCIo4b628l1bmx6cQrVznFbC8LmbHs7Adu6f4a7lYRe32UfawhrjyU9j1B3cw9z0zRc2wnmTQGVB4RQYSUJiKItdTJXb9mCcgELtix6NvJK%2BTr8Mkl2&X-Amz-Signature=10795cbe66db72c8c641cad824d6db81d310abbe3640b7761f64f342259781c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY4SZZMF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAE3mYTxxPw5llsOTzd0wek%2FUBkKZKk3GW8sQOcmFyCBAiEA58BhT%2BXa4sxgd703LzEjDylQCIeKrlDe40P97bFvCeUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDI%2BCMi7J7YUTtjzZLircA2K9WvAS%2Fu1GO21RfCC0iaviXjp7VZWd195klV8zyIDVxDkTak5Dn0ntxYkLcU19iYb2F47GRbyVaLKACtfO546iOzC7ehp9dfZtqOS4KVMNJf5%2FWB9VZunQcxuf5dPE4rU1Oe4RUZ6QIj0uFEFkZcCB5%2FP13vrsYm59PYS3pSPtevHcpg9gWQ9%2FmUlrv%2BTBRIiCNlzLqjPltq7p%2BOaWt0psj0Yvj38qAHy1SV4tR%2FTvditDDRsqggSo2E%2FqquXBfjtr1aleUMYUg%2BL6RRQ0awThT8UFcFBJP0GJnWE74QmkA6o4LdBMdPf6YDqTYjU1%2F%2Bmu31QsZmhEHF9jBQCs0mOuCpEOKsGWV8hfPw7u9sUqK4Hqr4gPFDKWMxrNECGWzfSmsMUq1pQLcsMy7MCTUxbolzqqJQ376j02ChV5Eq8oedowtGqL3ubja802AjxLrTb6p3uxyXnJpFoHekA56Zh2TUloeKuk1UbKSz7zcftO%2F1glnVQj0UiLldU%2Fhh8uza3Us9lWByafCyJzp9uIQ4fEH0Q5kSPXCNCxdE1aVqA%2B2e0d4xHwEioQbEABYzvoQx8Ccr7rHaiQRlakAyaSs%2BQaqAD5f%2Ff%2F%2Bo2cmZ%2Fn3NoyEhB4LLfkBB%2B4AwnrMPKFjsQGOqUBpWmiTwcGvN5fEuuJppGcJflp1%2BGJ9%2BdwOTDHYbRNDFQ6M42fEGIMSHxd3baeoXQJkqccqwzTuxRfpovLLXwjyoh0POdAJPOf%2F1yIfLck7ixRCwDHJOK2A2HY4whC0RtY6NlhqWWVSaFpcWKJNnr2gJO2VhR8dHN3LFelXrMdPTBdFm2QlJI2LUWckgbVWnw0ob3lu8pmEAmkW1Mi0ISdi3z3sL56&X-Amz-Signature=085197cca5ec95fbd5d64a75d0f4ab3a1bd755def864bb80b8d607209890a92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EQHSHK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDchDuERcX5slbHRE9LXUt%2Fq5rBajUagD6dNRN8sFrbQAiEAq%2BVWUC9hGG1GXLvN6YJ82PfCdV2I66k8Rn2V6667aGgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOs1jdgq84AU1KA4mSrcAzzxtEVnHTd1Fbcxs1dBZ0sazSOvTvnsL3C2a80wYpb836zXicVMgpicPtuCqP8LZq%2FMEie0Fk1jzG0f%2BPzJ3K50R5DLdFiXmiVcm3bfvXMue7tG6m3fIl66MN5yGO8GL0aBF0jsseKgfVq39bACQAl3GLJljmmllKRIv6jaTMMsrs8H%2BvESdPvRv1s9xukTK%2BPRsNyj4t7qYsALETHNijsV4QkTsCpZR5gGhYRbushdZgbtPjFZQiCouj46mRIXkTd5VsFunfkD5b9EiQG97I%2F0tsUQm4aSQpigoR3kGQ6r9X1RzqLTKl6DPl3Dc9Gej6z72hVRc0uql97aErIB%2FhJbG4W%2B7hlON82ht2pBIjJktVq024XuuT6wr%2F3zXFmR%2FEpKEw4scfZLFIlgGKwVnJKpEdTy2T7WM%2BXlqV7LolysBVRjEWibtLtAJ7YeSpyvvLLRXtQ3VT8YztHUCCtry6N2d9HDYXRNAr6%2BJZNQxmvi0lR0Ob%2FBGwlbgDeE0yRJ2cP3b0V4mMRnnyPEhRk3%2BiY30ujonSHVeSpRN5deNikkEOBhWyUjCL7Xwny61eJHVJi8cnkyXagzLR7sTXeirzoGh0EYkuosNqCTSkq6w2xCRi51aA7SpgdKi4IbMNGGjsQGOqUBxrStkLbXVFIWhf3Ghs99S7TTSOkU9uVMSU65ffa3EbVmjoGiMeJorjf0ep%2FZBB9vZpub9%2BiyWI8HdGXg3bVcUshbZKYmWloidwVDzu6O%2FZsLUFYyspEH6WaF1FN9xVXFSt7vbB1VgCbG%2FuAbFZuJ6yCjAzy%2BL7jhXHWUQ8psWcR3IUNWbgGCqyjiCzy%2BklRbpVK9UqsThMyFKhXEGr9Y7yi5nlnq&X-Amz-Signature=ec4d01a6df7a137d998dfcfc908f6b676293f291e603019e85994fc44e77aab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRK5LOK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC5eG8MssyWbgbHACLf5wXn5LX%2B%2B%2B7XVvxXSHBXp%2Fis1QIhAKEwu%2FmixWJs6HDAl3bAYhaRTfpoDP7EYbFgJIlv9u56Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwLd2yUJQbn9GCbRUIq3ANf0n7bCvVu1q4QTURjtY7u7HO498qsTPVLIgkk0c9%2F8qNwy%2Bhk36VyDtOBmNzQTLMfe7H2IETNW%2Bgz6S7HbF71Pj1%2Be2k9V8OXdq8MvjZmup0cIpN1s6s3kIxxjM7UDcEGwYttNmscVc77bGM%2B84%2FokoQLj%2FlW%2BDRjb%2B9Ca2Lcag0%2BfinM0cSTKQvA0TiJ%2BJHoLAnFx8dMbcaQtWEOugzqvZWQ2ftpwyKDS%2FEBQMe1SmFUufCWyscq8g%2BgwdRsdrpC88jknyi65%2Ff2jzDxidgcQfqFvBwzejoa4U46UYR3PbTHmEd39COWMzIcj8S8JJgGw18yQZNBoa0ZozdRPphwB3aOUAhJgQ1miwzP77ey6AZduOpi51gdAxlVhVBur2Uq9WIAu9vdLKE1IjzpzGimoetaGVoiwQzLWDef6UGaEwP6cLjGWRkq%2Fvj2XDw55gYub2DLZLV1S3dYsmkxTrRmU5TNhL6fn32s8JSBhu4DecII3auoXwHsSOdo4iLhKlrUOGVE8Orv5oI5D9zvvNf5JIY9feI%2BGqFvNtYmsLHg5JnS3HHbfvUcT7D0Tlf5mrhht2LNlTrj5kPzzMD6JVH5c5kDIUSItsEPdsPAnZ14%2BfKimTbnv%2Bjxz7EfzTDYho7EBjqkAf%2FL6XcFRiEq9xH8Y1dHSNnhzL65MHFHnR1iM%2FryvdQJHlCuAsOPbW0xXmynaiApkdfXSZr3cG34cTgA3UKHtt7Y%2F7pdISCTn5%2Fg3kJTLgCIo4b628l1bmx6cQrVznFbC8LmbHs7Adu6f4a7lYRe32UfawhrjyU9j1B3cw9z0zRc2wnmTQGVB4RQYSUJiKItdTJXb9mCcgELtix6NvJK%2BTr8Mkl2&X-Amz-Signature=fdcfc1fe9a427f5a046a192890c4c2c2fa1e62694ec00e8c8463a548aae0e04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
