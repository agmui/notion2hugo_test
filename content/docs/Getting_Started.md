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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E42UXX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGADmyTPnTJpQEb6GqEA90MGX2suCu9ZuNw0r9Fe3rmIAiAn3YVWBB62SFSPcUV%2FPgwjLmbkk2RJxkdM%2F1G7saoceSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BZu0OfQ%2FXpGMNCLKtwDLONj9v5Kf%2BPQFfgOs7ZxPGKcd8fczg%2BK9ifVv1TObxKKr4nd5crWYStihwbv%2FiM4rpx%2FSj4yUzQTolnhEh0WxUjygtUEXM0VJYTp7nLZHFkErVJ%2BG3YgmT6lmXDPYUWzPc3hepJPkP5KjNlm%2FwkKtpx1oX8qEU68eHrbxF%2FZi1PtzftujkyAtDk6s5tqfikBJpAt6xqJER1gQCsOYCHJ5BFmzE6MsfgwJo%2BSsIoxKZFqfU2JyRztHTZGJCyU%2FCajSCqixJAbSXmZaJ0ZcB3Cyh81x37UuSUdr%2FMsRb7HYkIrgHbVgd7iL1UnypJ4JwXltmGWgkSN2h1xCF7tO54DKLcT%2BiORWTTA59gIB4JHvVRgz1Nq6x4SG3cJED9yPNThn2XPVRexi9AR3Pc8AcBBQZr25niq16anGP%2Fyu53g3gMHsn4gZFttro43bVIiTyyV6LSVF5dVTy5JmX20GTfJYDAI4OQTH7IoGzOuIMiQk5g0lmNwnZYywc6qwskUBBwPeZvPAqxoeqGbKKXQt48UdcAKPgiFKuN8v9PMC1oPzouFEwYXN5I6HNDoTfPkLf6s9MJTKbR071v34ue9a%2B%2Bb%2Fj%2FRPKIIaJlXkb9Ex8vseq5F67WDWDKQA9NkFoMw2p38vAY6pgFhx%2F4KGaYoT%2Fjnm6zUgKwwczI0UHMg%2FPq8drX45u%2FvWFZRY0UUecv19eVon3VFCXNF7ZRHoQrhWL0VkE1k4PhZHbPZam0regTO9EssXTuW34tt0aGZO0QalGKq%2FfyagLi2Wfs%2Fx5bNXyVYs8Cr3G35g8BXE7dPcsvF%2BxSq2rdQZ9aycVw2J9h%2F0vmPz1aeIpi5kwf0KeJyCBzMqyGqbHz%2Faj1Oqa%2Fg&X-Amz-Signature=fcc2141cb67aaf55f220212ada270da399458009f15123854185f72c146e13f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E42UXX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGADmyTPnTJpQEb6GqEA90MGX2suCu9ZuNw0r9Fe3rmIAiAn3YVWBB62SFSPcUV%2FPgwjLmbkk2RJxkdM%2F1G7saoceSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BZu0OfQ%2FXpGMNCLKtwDLONj9v5Kf%2BPQFfgOs7ZxPGKcd8fczg%2BK9ifVv1TObxKKr4nd5crWYStihwbv%2FiM4rpx%2FSj4yUzQTolnhEh0WxUjygtUEXM0VJYTp7nLZHFkErVJ%2BG3YgmT6lmXDPYUWzPc3hepJPkP5KjNlm%2FwkKtpx1oX8qEU68eHrbxF%2FZi1PtzftujkyAtDk6s5tqfikBJpAt6xqJER1gQCsOYCHJ5BFmzE6MsfgwJo%2BSsIoxKZFqfU2JyRztHTZGJCyU%2FCajSCqixJAbSXmZaJ0ZcB3Cyh81x37UuSUdr%2FMsRb7HYkIrgHbVgd7iL1UnypJ4JwXltmGWgkSN2h1xCF7tO54DKLcT%2BiORWTTA59gIB4JHvVRgz1Nq6x4SG3cJED9yPNThn2XPVRexi9AR3Pc8AcBBQZr25niq16anGP%2Fyu53g3gMHsn4gZFttro43bVIiTyyV6LSVF5dVTy5JmX20GTfJYDAI4OQTH7IoGzOuIMiQk5g0lmNwnZYywc6qwskUBBwPeZvPAqxoeqGbKKXQt48UdcAKPgiFKuN8v9PMC1oPzouFEwYXN5I6HNDoTfPkLf6s9MJTKbR071v34ue9a%2B%2Bb%2Fj%2FRPKIIaJlXkb9Ex8vseq5F67WDWDKQA9NkFoMw2p38vAY6pgFhx%2F4KGaYoT%2Fjnm6zUgKwwczI0UHMg%2FPq8drX45u%2FvWFZRY0UUecv19eVon3VFCXNF7ZRHoQrhWL0VkE1k4PhZHbPZam0regTO9EssXTuW34tt0aGZO0QalGKq%2FfyagLi2Wfs%2Fx5bNXyVYs8Cr3G35g8BXE7dPcsvF%2BxSq2rdQZ9aycVw2J9h%2F0vmPz1aeIpi5kwf0KeJyCBzMqyGqbHz%2Faj1Oqa%2Fg&X-Amz-Signature=a5b41e63d17f2a32d5be7332b0ede769a8865b76129fb5f38b10381aa2fd15d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLCVSSY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvcZGu5R6XLjrQ3sg6wrlOchPv1aUd5SVOClEac9DpxAIhANsPTSQwoaFE9Ff0%2FWN4XOKHKCf3ha8D6%2BrfHOuk8s8IKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLtSnARmiS8plVmvsq3AMFbVCiVng%2BfU%2BGWkQMC2UV6Ag6crghnBPY%2B01gyX3PSCLvkh1PwFs%2BNw1VmRND4oH2VdRG7WBc%2FYekt7ayouWtHuVTi2VNT9SAWo6nmT8AFQ6DAISMYO3TFpxCNbRQVUORoSZp%2FLTViwjP658dFG4Wq3OTYhpJIcctf7mEOCb7C2LiJ2vz3CI0daPzH7BbWXqVRQlRePzC6HOJ%2F%2BjyRM6kubjfbxXOpvXTz6YJ8Mcj361il3xnCBJBHeAp%2BK7li3V343LVtRSwcdeJO5HQcMBZrwbrwP8Y9IXR0%2FVU4g5cFnXj0FOfuWFzW1w1kQw0HH0xoInWcdNUCRHqwpm%2BqauWE3J2quLcIZEW9JcD9st6Tvjo1FAAc6Cs9b0qTNwCMnTjNjVVuESu6J1Ck7GZWby3tI32r9JGvI4%2F7DmCs%2FSs1IhTd1LTEFviGAOb8rnXzQhdcuAoMUxTH0qDy7RzYRX4YiqiDIA7Q2SeviyzaKWkK%2FOJjPN3XSB6VijDRFzRWhiEb3aBfL4P5T6JPIvfk2DeHXmFILZXW6J0L6OzXje6aRAaEcVUrx0rbGQTO6kD8dGmAWx1mFZDRDfn79t%2FSjIqS9wZWafGkEA3ZKYSCu992NKkFhuLzn2eRaU2eDDdnfy8BjqkAWZn89ivjceM%2FaynsARPXHt4a6fJ4sjbkxIylVcFjjhxxMtiXnGkYGS%2BYp04OCQ9Td0Zb2%2FNvh30auTpvTz%2BQznApYLwdHIJHhutKDS1zyZz9vNNlcvY7pe0b3fKTlPqldqyw8fpxnysQ0vYhG3lB94onkXsNUTzHeVHdjx%2BdaDC1MtRSfNkERvwOj4%2B%2BOQ2v29KPBy2yqX0H2MS22Hqb6D7pApL&X-Amz-Signature=34d942ef6ad5f386e5f27d89b0d50373fafe69d9dec4c6bf63fc74a1eba4af6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJ2DO6K%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9AS46eCcddONxwLqFnkrUKQvtCdz1KLs9MA8tQVoBwAiEAk9amcIphF%2BXlw7%2F46XvExzg9J3O3w650ug7xxwoxoe4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJryHBHSLbi%2FejkbFCrcA2zITxg1BadBx4apVnOag6DtdTj7iZsDEh7CRP4x0L6WuRlCar7Bz4zSD9eZwD4DTNBRb86cdR3D7DJEXwUYVx1Ak%2FHWZrTw62Ze3aeh5zv%2B0wuesLU4C3g9wZkGPbk8UNWYZTcm5%2FUv9lz5rny3D73HV5ngxu7KQtprVvSH%2FrxpGNa3K02vNAblVE1Aha4lZyUCSB4WeWHmbvggklzKIoXKtoW6oK%2BuFqUjDgRSwZvMPJUb%2BnBGSqKpfI%2BPgqhzfaWgrGGUy3vh%2FEHyjDjUceR4m0RX6YRjIlToHtD3xfh8EZcGb7NSLyJt%2BxfP2exeeVupN04pMX6%2FeuuDKo8Y2mSu2Ll%2BX15%2F2PP2kU%2BPQ%2FEkKJhqLDeJSlvVmiSCJZmsr%2F%2Ba2dVc8bnFYdxP7aQR%2F%2BTqbxWHE3ssEItPIjXFE7OVz1KOIqelUVhThlA%2BYaXCZAwfwit2pnlJxQGcW41BC%2BDqH0YRQajeOmRxaVgjLDzlF1jAPXy7TWG7nuWgDwP18jPqAcVq8tbGNmHOc9x8rO6b8VmzO38iCrX6%2FkcNeb2PKe0dex2LRbR94GQ5yd7fYWbYKUStswc4rI2m5ee%2BnRh79rbiWzYMSILzFNKVB0d%2Fo57MX4esI8L8Q%2FAvMPyc%2FLwGOqUBcdvuq1jgGOJONc3fzQdwUqid6yEFS4oZZxwdHBo4Z1gh2iXIq9J55E7iKApdoBQfHLiZ1xLV%2BIR3FhVcqG1NA%2FcJSoSTqON3iyCq8%2FZhmiZPWBs9XjrpBzrI4jIE%2FeNNdJCXuZVlrtnes1Uaqu4XSn1WisUedoQvdD%2ByuSBXMBbT12NXQsG6NEdHn07FyPTzusxQJE2%2FMvKa6%2Bs%2Fo%2Fh%2BprLIYoW8&X-Amz-Signature=9ffffcfb8d0d23c4a3e9505d10bfdcc1f61e01f65035200f24f59760f2d7f291&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3E42UXX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGADmyTPnTJpQEb6GqEA90MGX2suCu9ZuNw0r9Fe3rmIAiAn3YVWBB62SFSPcUV%2FPgwjLmbkk2RJxkdM%2F1G7saoceSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BZu0OfQ%2FXpGMNCLKtwDLONj9v5Kf%2BPQFfgOs7ZxPGKcd8fczg%2BK9ifVv1TObxKKr4nd5crWYStihwbv%2FiM4rpx%2FSj4yUzQTolnhEh0WxUjygtUEXM0VJYTp7nLZHFkErVJ%2BG3YgmT6lmXDPYUWzPc3hepJPkP5KjNlm%2FwkKtpx1oX8qEU68eHrbxF%2FZi1PtzftujkyAtDk6s5tqfikBJpAt6xqJER1gQCsOYCHJ5BFmzE6MsfgwJo%2BSsIoxKZFqfU2JyRztHTZGJCyU%2FCajSCqixJAbSXmZaJ0ZcB3Cyh81x37UuSUdr%2FMsRb7HYkIrgHbVgd7iL1UnypJ4JwXltmGWgkSN2h1xCF7tO54DKLcT%2BiORWTTA59gIB4JHvVRgz1Nq6x4SG3cJED9yPNThn2XPVRexi9AR3Pc8AcBBQZr25niq16anGP%2Fyu53g3gMHsn4gZFttro43bVIiTyyV6LSVF5dVTy5JmX20GTfJYDAI4OQTH7IoGzOuIMiQk5g0lmNwnZYywc6qwskUBBwPeZvPAqxoeqGbKKXQt48UdcAKPgiFKuN8v9PMC1oPzouFEwYXN5I6HNDoTfPkLf6s9MJTKbR071v34ue9a%2B%2Bb%2Fj%2FRPKIIaJlXkb9Ex8vseq5F67WDWDKQA9NkFoMw2p38vAY6pgFhx%2F4KGaYoT%2Fjnm6zUgKwwczI0UHMg%2FPq8drX45u%2FvWFZRY0UUecv19eVon3VFCXNF7ZRHoQrhWL0VkE1k4PhZHbPZam0regTO9EssXTuW34tt0aGZO0QalGKq%2FfyagLi2Wfs%2Fx5bNXyVYs8Cr3G35g8BXE7dPcsvF%2BxSq2rdQZ9aycVw2J9h%2F0vmPz1aeIpi5kwf0KeJyCBzMqyGqbHz%2Faj1Oqa%2Fg&X-Amz-Signature=88d851ded473d73eefc46f20cb3fa13af04c330676c1e11d2cd3a86b4a21c10a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
