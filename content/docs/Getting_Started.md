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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N24FTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICvYuqYviqt7RTTsIkknWs0XsnwWzytpDQmaLr%2FeT%2FKkAiEApxlRdbOBaKkWSKzeWUezlkiub7%2BdBpQ3vfTZMg0%2BZtoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKTBXmjKW8Vt1b98ircA7A5pekU8YjdUzsF%2FOriN%2BfuWfPYSgp5LeRzhSg6MeIhL0DwXH%2FvtYpKidUql%2FeQQ8LMEq22R1%2BWy3BQn1aQAcmpkhPTVWEzRdZvEY%2BzGpg2YCAa9gJajjMM3KeK%2F5YXO%2Bjioqb3q0wBR4zVA1OkKUUDW%2BcGHKEvGggnjuQyenJipGaNP3lowskkGmVtazPfOiHypYEyUw25eegbuDhmhDjoVpH1scbmFFKVfFPmYVw30YXOWFXCjqxrsOQHCNA26CQsiR%2FC2mvG2TRND1H9pq31ERLGAdbLiFR%2Bweue%2FjhWbFclYo2fMz0Uf03U8EGh9i2m0yF5ReYU15fRX1dtEPO1oxaS8mr%2BvVZtNRYkm5Byl62J27qisrZDVX%2B77T1gAh2bPbrXEDheOy1L8pHzsP05YW%2FbVjU7CWwSkHRDDCWiv0ykvpzLG29FwYrZ2IGsz7pW%2FXD%2BWNxKY%2FW6ts49vowbfAWXnQKO5GSNhu6JBnYa80w9BGlLkN3wexWwtXworMBQtqye32L3hFXxznTTQp93jkX2xPIKJAtGVaXchVEjcPiz1BBbuhywpOxRJEaN3VJvPANTDANfBzIoRSCUAd5nqQoMCDxYZ8%2FWre%2BcAUlV3AsvEn88bifuyxlkMOuPrMIGOqUBLNuYIu2cJxmmkDZuAfsXW9e5yZbzhe57y8vyxkYw2IcJiov%2B7J0l%2B9YGzhkEn3lW441SpBR5TIgZoqAD7Uqlmh%2FCWQ%2F%2FkON2Um48feo%2BBEOg5srQ3r1rztUM3%2BjMVU%2F4ZNZX77Jekfoq2EpnUg2xoOD17m5FKX41lZJ2%2FYkaQIwlbszAq7l2xPf%2B2%2B1smrzYAutGujpq43pinyWjPW7Y%2FhcS4OAE&X-Amz-Signature=94a14536d78b2524ae37a75d927d2530f49131591f6d37f5f15b3c55319518c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N24FTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICvYuqYviqt7RTTsIkknWs0XsnwWzytpDQmaLr%2FeT%2FKkAiEApxlRdbOBaKkWSKzeWUezlkiub7%2BdBpQ3vfTZMg0%2BZtoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKTBXmjKW8Vt1b98ircA7A5pekU8YjdUzsF%2FOriN%2BfuWfPYSgp5LeRzhSg6MeIhL0DwXH%2FvtYpKidUql%2FeQQ8LMEq22R1%2BWy3BQn1aQAcmpkhPTVWEzRdZvEY%2BzGpg2YCAa9gJajjMM3KeK%2F5YXO%2Bjioqb3q0wBR4zVA1OkKUUDW%2BcGHKEvGggnjuQyenJipGaNP3lowskkGmVtazPfOiHypYEyUw25eegbuDhmhDjoVpH1scbmFFKVfFPmYVw30YXOWFXCjqxrsOQHCNA26CQsiR%2FC2mvG2TRND1H9pq31ERLGAdbLiFR%2Bweue%2FjhWbFclYo2fMz0Uf03U8EGh9i2m0yF5ReYU15fRX1dtEPO1oxaS8mr%2BvVZtNRYkm5Byl62J27qisrZDVX%2B77T1gAh2bPbrXEDheOy1L8pHzsP05YW%2FbVjU7CWwSkHRDDCWiv0ykvpzLG29FwYrZ2IGsz7pW%2FXD%2BWNxKY%2FW6ts49vowbfAWXnQKO5GSNhu6JBnYa80w9BGlLkN3wexWwtXworMBQtqye32L3hFXxznTTQp93jkX2xPIKJAtGVaXchVEjcPiz1BBbuhywpOxRJEaN3VJvPANTDANfBzIoRSCUAd5nqQoMCDxYZ8%2FWre%2BcAUlV3AsvEn88bifuyxlkMOuPrMIGOqUBLNuYIu2cJxmmkDZuAfsXW9e5yZbzhe57y8vyxkYw2IcJiov%2B7J0l%2B9YGzhkEn3lW441SpBR5TIgZoqAD7Uqlmh%2FCWQ%2F%2FkON2Um48feo%2BBEOg5srQ3r1rztUM3%2BjMVU%2F4ZNZX77Jekfoq2EpnUg2xoOD17m5FKX41lZJ2%2FYkaQIwlbszAq7l2xPf%2B2%2B1smrzYAutGujpq43pinyWjPW7Y%2FhcS4OAE&X-Amz-Signature=32e7c4ea7cba9846cdb5a564052790ab377bcb23e0d8242a0acd68606bbfefcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N24FTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICvYuqYviqt7RTTsIkknWs0XsnwWzytpDQmaLr%2FeT%2FKkAiEApxlRdbOBaKkWSKzeWUezlkiub7%2BdBpQ3vfTZMg0%2BZtoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKTBXmjKW8Vt1b98ircA7A5pekU8YjdUzsF%2FOriN%2BfuWfPYSgp5LeRzhSg6MeIhL0DwXH%2FvtYpKidUql%2FeQQ8LMEq22R1%2BWy3BQn1aQAcmpkhPTVWEzRdZvEY%2BzGpg2YCAa9gJajjMM3KeK%2F5YXO%2Bjioqb3q0wBR4zVA1OkKUUDW%2BcGHKEvGggnjuQyenJipGaNP3lowskkGmVtazPfOiHypYEyUw25eegbuDhmhDjoVpH1scbmFFKVfFPmYVw30YXOWFXCjqxrsOQHCNA26CQsiR%2FC2mvG2TRND1H9pq31ERLGAdbLiFR%2Bweue%2FjhWbFclYo2fMz0Uf03U8EGh9i2m0yF5ReYU15fRX1dtEPO1oxaS8mr%2BvVZtNRYkm5Byl62J27qisrZDVX%2B77T1gAh2bPbrXEDheOy1L8pHzsP05YW%2FbVjU7CWwSkHRDDCWiv0ykvpzLG29FwYrZ2IGsz7pW%2FXD%2BWNxKY%2FW6ts49vowbfAWXnQKO5GSNhu6JBnYa80w9BGlLkN3wexWwtXworMBQtqye32L3hFXxznTTQp93jkX2xPIKJAtGVaXchVEjcPiz1BBbuhywpOxRJEaN3VJvPANTDANfBzIoRSCUAd5nqQoMCDxYZ8%2FWre%2BcAUlV3AsvEn88bifuyxlkMOuPrMIGOqUBLNuYIu2cJxmmkDZuAfsXW9e5yZbzhe57y8vyxkYw2IcJiov%2B7J0l%2B9YGzhkEn3lW441SpBR5TIgZoqAD7Uqlmh%2FCWQ%2F%2FkON2Um48feo%2BBEOg5srQ3r1rztUM3%2BjMVU%2F4ZNZX77Jekfoq2EpnUg2xoOD17m5FKX41lZJ2%2FYkaQIwlbszAq7l2xPf%2B2%2B1smrzYAutGujpq43pinyWjPW7Y%2FhcS4OAE&X-Amz-Signature=89262e974a62202a5ca65e48860d566dc9a0d0579e9ae409d1c64e8b87c6a24f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7RTOYP%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGV27LbfcHIk1tMKXO4Dz4aYtYtOqIDW5WhfINk12g22AiEA5%2F7HI%2Fl5Rz%2FlB1sxomFiZPIXfq9E9Duv1lGeseZ5K18qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU8jH%2BUK45RzNs4eircAwMUQJ%2B%2BmP119c23Q6Y6tjYwEGAD7H32WAQG4owEszwUvjOdNM2ShWw9pMj0bPO6an9X1nnnOOs2gHgKXRofIGzm9nDAuKQDq%2Bp7I93EclbAuluOw0vl9sjxuqCCiKKwE2%2F3IKsK4IOkxMJqRlM8RMA4trX2FosZ0dIB2rMLMDzblSzmoPSMHMlVuf3JczYsj8O3D2Aaku9f8kR81%2BC9UB5PPEdXJlPyYBouPeyiplyK8pyYBvKIVfdE5eIFCf6RammRiFDoXdU4%2BcAXAOcFUPFWnOCYh4sCebgAoW2xzxcJwWHRJ8AkgQXIMkY2ydTFEKvc2hJdf0xj%2BtPbtMmk0DrCrpyoZolbt8Tnnb8S6Y0Dcz7HEvpDwS279KdxHmvWxAwzJ3iSC3F52Jq9a4jGIlhr9w3WdQFFTT6ebppiYRnzahbk%2BVzm%2FH1JGu23nKD3K96S5DWYQk2N604qSM3S8KfmBtiOjA5tsnb%2Fe1fqpslTH7y7JkeJFR%2BgP%2FWGXgH%2BGp1xOMq2BQUMXRnTYSvZS%2FL8DTAsEmxDoj9zEBZ9XbneAT0VMX1fPF9%2FxmE1iJt7BgT3Zq4cAxNmCXwMlpXLQcHhM5fy1SbWBsX3nHC7uFGtnwtcgQTd7Ffl7VawMKuQrMIGOqUBMxc9NblZAfGO%2Fzj%2FN5JBayn0uQCwX5n4U%2FprxHOlQTjZeXqIHW59wLSl5GfmxKR1Znjo5ug1xc2%2B64fV%2BsSpDqK0wcQ4R1NFYMEeUd4VSyQ2nmsoK%2ByH1s2ZXjCIjUnX2t6vEeI1XoSSxT752GYhFm0m2rEFs6M45WVh9NSYidLre9I879RcWRnuQpKlXUkU8ESBw65gu7vyTNeModTYB%2F9P3TZz&X-Amz-Signature=d9ab96e7342ed5107a84da227979e3cfba36a4ef513574a5df8d4aad1c92d6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZUQUKW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFjoybuop9k0Dc2fJQGC%2BFOAkiryPBtb1Q7DXaK23beJAiA%2BfwWRyfnPuREvz21DEsUM7Duo5gVkyo2K42zC4ywMPyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESjC102InIyyzhrFKtwDc6WjvDLpdPech2kn449j3RN8kzuLqwjrjovkFnz7rDdEcaVyLhSxIID8rebqMNCbW0OGdcJS4zSlc8hnvk%2BmNpv%2FbOXanbvgbV2RYl97VEt0AP0OJtTzcAdR%2BvJmAUaE0oKftrV0bx%2Bc%2FII2QjN62om0swKwPbQ7yH7gps3PuREBrtxGNYd8dklUvus7BTBIkAEoR7AW9P%2BkxE%2BqoQ9OJNs%2BRqe%2Fi8ziDg3pUuVilg9l8EOfUXBrKchy4oSNfrBCLSkSD9a3zkEl0HG3ESoNt6smIhh3%2FbmmTdoKGAJ0CUYYMg7TTUNLNEIRm02DKTvmCciRMCUhN21rxVjglVH%2By4%2FUqtkWjRATMG21X0lIoEi86oYowfqMPF4B95k6sa3bts9dCzw3Ubka4QxrjN0%2FaeKk64XTQ%2BPxdFSDzoqg9W7GcQAv1ZkN3xf6wM3VbX%2B8%2FkQs3JsVg12tUwysyWlz3X8CgU1NNC1a8K7O%2BXCOEVb88xRKxTkm76kEMJe0JcTv7SfGOxAsEA%2FrgA0h%2BxP3grUNWGvAoG8JqPNCJAFCoP3nvdIvdM2SLfIXvlH30v33RQi9aOZIHaA3E5ibCxETBVtVenoQW1v3gKdI%2B4I2zOfDK%2BMOUq6gTW28QFsw7I%2BswgY6pgGP5k2S1MTzEh5wrwX5LvIG%2FclWio7AUQO0lvTVfxIwgRoCvnLWQ8ptvV7Iavs4YFNiQYuEsLwXcJRNAihvP8hJbas691wbgNXAPQJuWFjqahtQVHq9EloZMHNfVfNYJ5hAxgKKqF%2FagVfJ%2Bx2T0Qff17r8b%2BmY6iMvEziOgf1RPAom6%2BFd8LtMx1AbotfmtdupoQoe1jumaAUikmoFVT9j9%2FKnsC1H&X-Amz-Signature=9a3b9d20943f87d8010f1213abeafe1b55f4461352b33bacc29d7a7f9043c7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7N24FTH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICvYuqYviqt7RTTsIkknWs0XsnwWzytpDQmaLr%2FeT%2FKkAiEApxlRdbOBaKkWSKzeWUezlkiub7%2BdBpQ3vfTZMg0%2BZtoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKTBXmjKW8Vt1b98ircA7A5pekU8YjdUzsF%2FOriN%2BfuWfPYSgp5LeRzhSg6MeIhL0DwXH%2FvtYpKidUql%2FeQQ8LMEq22R1%2BWy3BQn1aQAcmpkhPTVWEzRdZvEY%2BzGpg2YCAa9gJajjMM3KeK%2F5YXO%2Bjioqb3q0wBR4zVA1OkKUUDW%2BcGHKEvGggnjuQyenJipGaNP3lowskkGmVtazPfOiHypYEyUw25eegbuDhmhDjoVpH1scbmFFKVfFPmYVw30YXOWFXCjqxrsOQHCNA26CQsiR%2FC2mvG2TRND1H9pq31ERLGAdbLiFR%2Bweue%2FjhWbFclYo2fMz0Uf03U8EGh9i2m0yF5ReYU15fRX1dtEPO1oxaS8mr%2BvVZtNRYkm5Byl62J27qisrZDVX%2B77T1gAh2bPbrXEDheOy1L8pHzsP05YW%2FbVjU7CWwSkHRDDCWiv0ykvpzLG29FwYrZ2IGsz7pW%2FXD%2BWNxKY%2FW6ts49vowbfAWXnQKO5GSNhu6JBnYa80w9BGlLkN3wexWwtXworMBQtqye32L3hFXxznTTQp93jkX2xPIKJAtGVaXchVEjcPiz1BBbuhywpOxRJEaN3VJvPANTDANfBzIoRSCUAd5nqQoMCDxYZ8%2FWre%2BcAUlV3AsvEn88bifuyxlkMOuPrMIGOqUBLNuYIu2cJxmmkDZuAfsXW9e5yZbzhe57y8vyxkYw2IcJiov%2B7J0l%2B9YGzhkEn3lW441SpBR5TIgZoqAD7Uqlmh%2FCWQ%2F%2FkON2Um48feo%2BBEOg5srQ3r1rztUM3%2BjMVU%2F4ZNZX77Jekfoq2EpnUg2xoOD17m5FKX41lZJ2%2FYkaQIwlbszAq7l2xPf%2B2%2B1smrzYAutGujpq43pinyWjPW7Y%2FhcS4OAE&X-Amz-Signature=61665c422973f37e541eb23d480ffe2ea7314fdf53483b2cbead23324a169c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
