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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367OW5VQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGB3IrnJgBCPE6fVO%2B06kCCViJU7do79dMAWy5UGEVWkAiEA5xvr7lZX8jlTb6t8vfyxDVC5%2B9WY14eR2nktoYN5ZXEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJrjzhsyugAcw5rYUyrcAyP99w30%2FzrZ%2FpN6yx9Qb8KkfkNSO4iI7%2BgNrI1MgOls5EGcMVtQBmi2UVmnQOVZsE50yFH8IgPJJMrBBesZbnaPqgSZLRU12Ja8C4pptG2skohQFFfY64wg%2FFy4vtRmgpKfyOcE3%2BmGi%2Bf8DY4Tx%2F%2FfufTJ%2BD5GIqQ2RyFTRarylAbS%2BseKRTgq0Q0yqb0BCxjfXpQvtxZEyQlDUwoN5nysv89LFwfFaVh8j5XmQla%2BRNCEmNlsfZTv2MdX1kBLpKLlrVEG9kVT8N%2FrkOdqNtAzwph7kRMBb8hG2Ye0bOUXLxHxgtTReGr7DZwfAoylBXUThygxBTTiKr302yrsmgUsHpruacpHFVvafDREEdjwIMEerGf3v3YpaTzF7RVSK6toMU6yQs78AGQSfAc83ejorrkdcHh2vd01skWpFHB1oKYT7NINq%2Bpy4Cj1XgZEO0ODNCxBEn9BGTV6138F%2BWQandPI2H%2Fb0RTTvHUg%2BVyYXDas6dHHYmBJRf6qwDIgSc6dILh8vd9y19fi38P1Ussq%2FdpzC2AVtwhrbEWGrAxpJB4%2B69C7EiEy%2BXkJEa5rZUPsZuhFw7L%2BAlflWx3bzrEbBDWirEhB0SgKahYXOKYKYw0zCRxAJQeARVY2MMPL0cMGOqUBm56Zo%2BzzP%2F7enESDjLD%2BNzmZ7QVnA1gVusMtd%2FrPN0MDpt1%2B%2BFZuv7T2IMKoDpmCzG92omFVZ0TY5wT99bqDOwed93rHwTH5F63T2M%2FKUAPTt4ED%2F8cMk281kN%2FOH877AAtUgf8rkgY06CYAVOajrwG%2BE5akhxevV8t%2BERS%2BkwipZ3W72DI4DjSxIJG8KATitis3ScfkvJHZkpylsP4%2FMkIHmxXt&X-Amz-Signature=a51addf7d5ec673466f983a1f238e504afa00fa07777899117ab69a92334f748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367OW5VQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGB3IrnJgBCPE6fVO%2B06kCCViJU7do79dMAWy5UGEVWkAiEA5xvr7lZX8jlTb6t8vfyxDVC5%2B9WY14eR2nktoYN5ZXEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJrjzhsyugAcw5rYUyrcAyP99w30%2FzrZ%2FpN6yx9Qb8KkfkNSO4iI7%2BgNrI1MgOls5EGcMVtQBmi2UVmnQOVZsE50yFH8IgPJJMrBBesZbnaPqgSZLRU12Ja8C4pptG2skohQFFfY64wg%2FFy4vtRmgpKfyOcE3%2BmGi%2Bf8DY4Tx%2F%2FfufTJ%2BD5GIqQ2RyFTRarylAbS%2BseKRTgq0Q0yqb0BCxjfXpQvtxZEyQlDUwoN5nysv89LFwfFaVh8j5XmQla%2BRNCEmNlsfZTv2MdX1kBLpKLlrVEG9kVT8N%2FrkOdqNtAzwph7kRMBb8hG2Ye0bOUXLxHxgtTReGr7DZwfAoylBXUThygxBTTiKr302yrsmgUsHpruacpHFVvafDREEdjwIMEerGf3v3YpaTzF7RVSK6toMU6yQs78AGQSfAc83ejorrkdcHh2vd01skWpFHB1oKYT7NINq%2Bpy4Cj1XgZEO0ODNCxBEn9BGTV6138F%2BWQandPI2H%2Fb0RTTvHUg%2BVyYXDas6dHHYmBJRf6qwDIgSc6dILh8vd9y19fi38P1Ussq%2FdpzC2AVtwhrbEWGrAxpJB4%2B69C7EiEy%2BXkJEa5rZUPsZuhFw7L%2BAlflWx3bzrEbBDWirEhB0SgKahYXOKYKYw0zCRxAJQeARVY2MMPL0cMGOqUBm56Zo%2BzzP%2F7enESDjLD%2BNzmZ7QVnA1gVusMtd%2FrPN0MDpt1%2B%2BFZuv7T2IMKoDpmCzG92omFVZ0TY5wT99bqDOwed93rHwTH5F63T2M%2FKUAPTt4ED%2F8cMk281kN%2FOH877AAtUgf8rkgY06CYAVOajrwG%2BE5akhxevV8t%2BERS%2BkwipZ3W72DI4DjSxIJG8KATitis3ScfkvJHZkpylsP4%2FMkIHmxXt&X-Amz-Signature=31002f0b5d65496503b2217523c5a8791c5e0fed87dcf4b4c8840cf30fe953b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367OW5VQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGB3IrnJgBCPE6fVO%2B06kCCViJU7do79dMAWy5UGEVWkAiEA5xvr7lZX8jlTb6t8vfyxDVC5%2B9WY14eR2nktoYN5ZXEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJrjzhsyugAcw5rYUyrcAyP99w30%2FzrZ%2FpN6yx9Qb8KkfkNSO4iI7%2BgNrI1MgOls5EGcMVtQBmi2UVmnQOVZsE50yFH8IgPJJMrBBesZbnaPqgSZLRU12Ja8C4pptG2skohQFFfY64wg%2FFy4vtRmgpKfyOcE3%2BmGi%2Bf8DY4Tx%2F%2FfufTJ%2BD5GIqQ2RyFTRarylAbS%2BseKRTgq0Q0yqb0BCxjfXpQvtxZEyQlDUwoN5nysv89LFwfFaVh8j5XmQla%2BRNCEmNlsfZTv2MdX1kBLpKLlrVEG9kVT8N%2FrkOdqNtAzwph7kRMBb8hG2Ye0bOUXLxHxgtTReGr7DZwfAoylBXUThygxBTTiKr302yrsmgUsHpruacpHFVvafDREEdjwIMEerGf3v3YpaTzF7RVSK6toMU6yQs78AGQSfAc83ejorrkdcHh2vd01skWpFHB1oKYT7NINq%2Bpy4Cj1XgZEO0ODNCxBEn9BGTV6138F%2BWQandPI2H%2Fb0RTTvHUg%2BVyYXDas6dHHYmBJRf6qwDIgSc6dILh8vd9y19fi38P1Ussq%2FdpzC2AVtwhrbEWGrAxpJB4%2B69C7EiEy%2BXkJEa5rZUPsZuhFw7L%2BAlflWx3bzrEbBDWirEhB0SgKahYXOKYKYw0zCRxAJQeARVY2MMPL0cMGOqUBm56Zo%2BzzP%2F7enESDjLD%2BNzmZ7QVnA1gVusMtd%2FrPN0MDpt1%2B%2BFZuv7T2IMKoDpmCzG92omFVZ0TY5wT99bqDOwed93rHwTH5F63T2M%2FKUAPTt4ED%2F8cMk281kN%2FOH877AAtUgf8rkgY06CYAVOajrwG%2BE5akhxevV8t%2BERS%2BkwipZ3W72DI4DjSxIJG8KATitis3ScfkvJHZkpylsP4%2FMkIHmxXt&X-Amz-Signature=b7287872a54f61a04fec0a2930339b478b13dcd36771225c0fb0062c69fa6638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQVH7U%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIByblziBhKHkeyBwfeM3KPi5NqvrYt0vVou6TJPoSe7gAiEAvq5Dy8DhnJA%2BXbGnbkAugBUDeppz4sEHw3jEsyIYApkq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBmiYISzGdgWJM2tJircA5%2BIon1RtLVGbhoSBNvoP272q2%2Bgq7C%2Be%2FzDyJToRzaIDGzUGtLOw3d7yr1AI13yN%2FHi1FtKOapbzxU%2BLO%2F9O6GJqRoYDrBHbBXiezbq2BrKJKdLRd8XqgoElQeRO7Wssv17dDprWTZ37B7mgAJgo1GK2QweZSPGf3QJoZ4S0ByokPfrTgGSFo5SZSPTedpnj5GkHiraMP9ka%2BvRBLGp1O4zooMeNzHR3E9PCeNse6YW0I9%2BJI8SyEml66JWcoAjS6zaSpMugQVHYGPzfIBHJKUrWnLmmGgpy2%2FSKzzvcP4uHgVSZ7RvtX3LGlB6bRWxo%2FK3ojfwU%2Bw0CWboseuMcpkMi5TZp0Q%2BDMZ%2FrUWb8EAOrv1nQ58zXDevpJqdBatG8ShYL2cCOvWm4finkcjNEsjBNuzwsA8X1Yn5LA7gzL%2FCDk1G16DANsO4IpgMMEZGYFyKcNIUhJKXoZiZdInPrnJmxVNMZZ6OyknJR8ZCYcpjN6nGZh3Dqhu70DzuUbwhaNTHS0zW5sP6XD8di6jGbN3lNBKkqv%2BDoQYAxBwk%2B3oibzhgOB%2FbrCItodkCN2KO9%2BTag0TjpHn5lOCt3Klwrql9dr5khJGzu7PasFQ7vTrCtgtQHsEUq1oUQ3URMJDM0cMGOqUB3OdUL4jsI92mLO7EBda3lLXyjWqq63zF3I%2BdlySPXrIWxYcXQ0tBq09Pp%2F6vOpcAqVT8hkfr6%2BBPcx0Cs0VHCS2GlSQ88s6tdDg%2B12Kect6ZyP8kKw2Qrec8RNkWzGmj8gScAEpjSJWsAhlA8E%2FlVybKDDu%2BSdr4JnVg8larQool76rZsFTi%2FApkItS2vUZ%2B5R54wzqXlz0lpW9Nf2uC1vTdtx3m&X-Amz-Signature=be2c6ee9b55faea64f8b5c345f03203e987832d49ce5d4895afa9d592c47eac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3RZW3TK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHeaV8dauLUJEoKp2rbFEtG%2FpASwlS5NAN%2BucYeoenWhAiEA0XldXNwFTVRc4uoabkDnwufV8qOsbH5tvG884sOZl%2BQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEdB0ZPUiHQsxcHpRircAyCYM62kbP5ciD7UYJCKgcTZ9UUVFwInEZqzmfi3FRQ%2BXaxm3VOi%2FuFUvnbYl0NqX2xzv4ufDsE%2BTx4OxeTKkhtzg%2B2JA7nHQgsH63rBeLBv1QxK6fPzKP5Y20uSpmncQxQ%2Bksn462bgSX%2F2oRprgzY65qeLxbuFglgp1ZULE1aeOVV88vHSRvhurYQo0dtpcMMWYWPk5OV0NjMW%2FH6bPyaHV3MaS%2BKftiWNOFYMNFPnAdU9qGdzjWratzKdd74K6XWEZtcCIbiBwnHbTUmqrFr512DHZvUW8UlSinO3WKf5SGS1WTuanDjdJNvriNNLdMpcFgen4rLlG3Lf%2FGE6NUER0g%2B6inC83jfBWuSqBCRhslX9R%2Ba7NaVOcoF7n7PyePQn5nJ08VfiZGkO6tQlcxxbJx23tYM5JLeKm9G6pXn%2BOznzBZdHpG6RfWWem%2B12BlYex8NkcXgSU7u3z4FfrRk%2BEHt4raHE%2BPILtJlon1hRaVmQn0CKJ2e%2BNxD%2BwC9GSsBdp9k%2BRqwlQrm9jtk6s5S3JLA%2Ba%2BL3UroCn2rFllYzeEmTZ%2FKZTMXpvX91jZM97a022%2BGYSzHZ4vYdfBJ0r6n5xo03gUXBgabTnDhpi1R8cU8UnGFZdYVFIuBnMITN0cMGOqUBLqalRagnKfdg35gIniptXoLuEowEB1Q5ckVf9NJZ53%2FquOqjEvdkEMBTobhRudMzyBBINuf0PK9dc%2Bq%2BRNO2SkMXkujmft7JPX30CMFtDEfCIrmk5CCWp9ilMV7vfqo%2FfPXsWzdBQGLJbpo93OY9HJ4WzRAze7qyia376PFsSNtjXqnJw5kyEECVmL2VIVUWZbxGaT2kQdV1vBOlYpKeidtrGom2&X-Amz-Signature=4d314eb8080f06a7e19b85ed9c3e162cf1592122c2ebfdbdf3a7ce89ab1adc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367OW5VQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGB3IrnJgBCPE6fVO%2B06kCCViJU7do79dMAWy5UGEVWkAiEA5xvr7lZX8jlTb6t8vfyxDVC5%2B9WY14eR2nktoYN5ZXEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJrjzhsyugAcw5rYUyrcAyP99w30%2FzrZ%2FpN6yx9Qb8KkfkNSO4iI7%2BgNrI1MgOls5EGcMVtQBmi2UVmnQOVZsE50yFH8IgPJJMrBBesZbnaPqgSZLRU12Ja8C4pptG2skohQFFfY64wg%2FFy4vtRmgpKfyOcE3%2BmGi%2Bf8DY4Tx%2F%2FfufTJ%2BD5GIqQ2RyFTRarylAbS%2BseKRTgq0Q0yqb0BCxjfXpQvtxZEyQlDUwoN5nysv89LFwfFaVh8j5XmQla%2BRNCEmNlsfZTv2MdX1kBLpKLlrVEG9kVT8N%2FrkOdqNtAzwph7kRMBb8hG2Ye0bOUXLxHxgtTReGr7DZwfAoylBXUThygxBTTiKr302yrsmgUsHpruacpHFVvafDREEdjwIMEerGf3v3YpaTzF7RVSK6toMU6yQs78AGQSfAc83ejorrkdcHh2vd01skWpFHB1oKYT7NINq%2Bpy4Cj1XgZEO0ODNCxBEn9BGTV6138F%2BWQandPI2H%2Fb0RTTvHUg%2BVyYXDas6dHHYmBJRf6qwDIgSc6dILh8vd9y19fi38P1Ussq%2FdpzC2AVtwhrbEWGrAxpJB4%2B69C7EiEy%2BXkJEa5rZUPsZuhFw7L%2BAlflWx3bzrEbBDWirEhB0SgKahYXOKYKYw0zCRxAJQeARVY2MMPL0cMGOqUBm56Zo%2BzzP%2F7enESDjLD%2BNzmZ7QVnA1gVusMtd%2FrPN0MDpt1%2B%2BFZuv7T2IMKoDpmCzG92omFVZ0TY5wT99bqDOwed93rHwTH5F63T2M%2FKUAPTt4ED%2F8cMk281kN%2FOH877AAtUgf8rkgY06CYAVOajrwG%2BE5akhxevV8t%2BERS%2BkwipZ3W72DI4DjSxIJG8KATitis3ScfkvJHZkpylsP4%2FMkIHmxXt&X-Amz-Signature=e7431fd59eca9f90fb0703f2115056bcbe68fd4b182b34d6d800259379e4606b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
