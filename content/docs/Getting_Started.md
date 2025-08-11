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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5WWELF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaqO9Jvlh9GiJ0Q55QEReGSvvyPybjFZRPPrNIkieNTAiEA4kRVrCM1aVFQlis3mDiefekBla6wzEGw6i6jogTqC3kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcNreFvMFwk8VjLzCrcA%2FpJ8o84%2FaU11IRO4qXKE02H05qlRYco%2BZiTawPAz4UNC4Z3YnrtV%2FZCZI5rnWppsHsW7SMBXsFG5YLpN2s5uEussihQMFXDMKlN9bzh4zf4DmAIcsy9Pto36r7TKc2HzvC9uOvZZ9HR6m6%2FV%2F%2BeDe8x%2BEAd%2BBRgjp15ZDjEuu9xCoEGW0aK20nis5IJ6kOSH%2F1Gxn1f%2FobMdWjYd3olAQuz08d60OwYA029T49KydtmqzcXKvGYVWWOGctI%2Fue%2B5iq3iO6PHifGjFAaYE2%2BwviLjgwJvaxZkC73zLlUmv4tf2LitHMzPC18A0E7CWwpQQYhl%2BviAwuXlnRKMal12bCyWc656ortVAMwe%2FTEWcNQB6AafP7rD9Wi%2FdG7HCzsDNgFB0TrxT0SaSCHm771bmlhY5rTML%2BZglZcuo8TO4wWah2Ro%2FU%2FPCHmHxcdXPl4jojwcMxjfSyhV6NtYIvVgt9uPrvyNBN5p827m7zNOEqeVU8KvhjgpB02%2FubOafgLCswElP%2FYrRGUwgMDoBsfPXCz7TgZUy%2B%2BoiaWV%2BchjtHoV04j2gctsU9vFodb3qMRURriowcKWiGPNF4%2FQbHndXUOrNDv8GbTFl6OlDfE1w6OOCo1jUfHal%2FxJi2NMO%2Bs5sQGOqUBqx43Q02fFLhUHgqrE%2FFkw6YowVXrgrIGFLuoJ%2BVn0jvwdbiBLiMOPnDUbnUpAraxAEjr48k8AwiRtnGVMyd0hWrkHrBZumH%2Fsfk9zYtjK3JCTO1M9P%2BJ5cv9ceAnZGygDho0Wm0M95p%2Fu5nXSWz0tP70fAXKC7fGAitP8PZGsojEMpNxpHM2kIAGutoijBh1xfPzErd5CGzTwAh2bS6J7a5sH%2BqA&X-Amz-Signature=d4f83ac5723ac83f1de4f5ae9da29b11aa5c72aed6713881a9380a7e34415e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5WWELF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaqO9Jvlh9GiJ0Q55QEReGSvvyPybjFZRPPrNIkieNTAiEA4kRVrCM1aVFQlis3mDiefekBla6wzEGw6i6jogTqC3kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcNreFvMFwk8VjLzCrcA%2FpJ8o84%2FaU11IRO4qXKE02H05qlRYco%2BZiTawPAz4UNC4Z3YnrtV%2FZCZI5rnWppsHsW7SMBXsFG5YLpN2s5uEussihQMFXDMKlN9bzh4zf4DmAIcsy9Pto36r7TKc2HzvC9uOvZZ9HR6m6%2FV%2F%2BeDe8x%2BEAd%2BBRgjp15ZDjEuu9xCoEGW0aK20nis5IJ6kOSH%2F1Gxn1f%2FobMdWjYd3olAQuz08d60OwYA029T49KydtmqzcXKvGYVWWOGctI%2Fue%2B5iq3iO6PHifGjFAaYE2%2BwviLjgwJvaxZkC73zLlUmv4tf2LitHMzPC18A0E7CWwpQQYhl%2BviAwuXlnRKMal12bCyWc656ortVAMwe%2FTEWcNQB6AafP7rD9Wi%2FdG7HCzsDNgFB0TrxT0SaSCHm771bmlhY5rTML%2BZglZcuo8TO4wWah2Ro%2FU%2FPCHmHxcdXPl4jojwcMxjfSyhV6NtYIvVgt9uPrvyNBN5p827m7zNOEqeVU8KvhjgpB02%2FubOafgLCswElP%2FYrRGUwgMDoBsfPXCz7TgZUy%2B%2BoiaWV%2BchjtHoV04j2gctsU9vFodb3qMRURriowcKWiGPNF4%2FQbHndXUOrNDv8GbTFl6OlDfE1w6OOCo1jUfHal%2FxJi2NMO%2Bs5sQGOqUBqx43Q02fFLhUHgqrE%2FFkw6YowVXrgrIGFLuoJ%2BVn0jvwdbiBLiMOPnDUbnUpAraxAEjr48k8AwiRtnGVMyd0hWrkHrBZumH%2Fsfk9zYtjK3JCTO1M9P%2BJ5cv9ceAnZGygDho0Wm0M95p%2Fu5nXSWz0tP70fAXKC7fGAitP8PZGsojEMpNxpHM2kIAGutoijBh1xfPzErd5CGzTwAh2bS6J7a5sH%2BqA&X-Amz-Signature=9d703a673899b11bb9af5b533ded25d6dc63310283d98d39b8edf2102f38f59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5WWELF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaqO9Jvlh9GiJ0Q55QEReGSvvyPybjFZRPPrNIkieNTAiEA4kRVrCM1aVFQlis3mDiefekBla6wzEGw6i6jogTqC3kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcNreFvMFwk8VjLzCrcA%2FpJ8o84%2FaU11IRO4qXKE02H05qlRYco%2BZiTawPAz4UNC4Z3YnrtV%2FZCZI5rnWppsHsW7SMBXsFG5YLpN2s5uEussihQMFXDMKlN9bzh4zf4DmAIcsy9Pto36r7TKc2HzvC9uOvZZ9HR6m6%2FV%2F%2BeDe8x%2BEAd%2BBRgjp15ZDjEuu9xCoEGW0aK20nis5IJ6kOSH%2F1Gxn1f%2FobMdWjYd3olAQuz08d60OwYA029T49KydtmqzcXKvGYVWWOGctI%2Fue%2B5iq3iO6PHifGjFAaYE2%2BwviLjgwJvaxZkC73zLlUmv4tf2LitHMzPC18A0E7CWwpQQYhl%2BviAwuXlnRKMal12bCyWc656ortVAMwe%2FTEWcNQB6AafP7rD9Wi%2FdG7HCzsDNgFB0TrxT0SaSCHm771bmlhY5rTML%2BZglZcuo8TO4wWah2Ro%2FU%2FPCHmHxcdXPl4jojwcMxjfSyhV6NtYIvVgt9uPrvyNBN5p827m7zNOEqeVU8KvhjgpB02%2FubOafgLCswElP%2FYrRGUwgMDoBsfPXCz7TgZUy%2B%2BoiaWV%2BchjtHoV04j2gctsU9vFodb3qMRURriowcKWiGPNF4%2FQbHndXUOrNDv8GbTFl6OlDfE1w6OOCo1jUfHal%2FxJi2NMO%2Bs5sQGOqUBqx43Q02fFLhUHgqrE%2FFkw6YowVXrgrIGFLuoJ%2BVn0jvwdbiBLiMOPnDUbnUpAraxAEjr48k8AwiRtnGVMyd0hWrkHrBZumH%2Fsfk9zYtjK3JCTO1M9P%2BJ5cv9ceAnZGygDho0Wm0M95p%2Fu5nXSWz0tP70fAXKC7fGAitP8PZGsojEMpNxpHM2kIAGutoijBh1xfPzErd5CGzTwAh2bS6J7a5sH%2BqA&X-Amz-Signature=c22821d410a059754730795c5619dc4e896df324115079999853425906b9fc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667G6RF5L%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOXuhIaN4meoEz15%2FZ5PmPRGZvqGJMq%2BmsoTAwmFkxSwIhAJ%2B3BK3DuAMFk%2B125RUGyalRqtjEue1CKQUKuBNNqdCkKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYwarxIyvFHEP9DAMq3AP6SlqZbxeTyZswaWpihDEw3OtBq8jtnKDV6SHjZZv2w7yh03gS8INYrBnSfsol5sAlCwovDW5H3ZBQ5HZR%2BCMFoYBuX1CIfLoXR1CZC5rNt1kwLXIFExkNS4U0u%2FswI1TNRxoONVbogI271MwKrZikDDhElztkgGLDMGlGrRx4f7N%2FWLQgQLov7wT3pJ0FNtY1MWqn9N07wVcVIu%2BOxMudd3i6Zs42ab7Y7vBlZTkIdwnMD1dl28sobrXzeQksJl4orYj4bgYyf5qj00mlOtFyWI7%2BLU6Yvgim1hQ6T9KAHYapEKiwTCcEoy0LRR8EDh5eY3IRLgKRy23pTmgAwjtt6Castp7zR1uRG%2FCLirmg4YqhJo%2FkCRltedPjevp6s7a9gX4weV6j3fc7El0ZjSIILOV1UqvBCN8IOIgcULRVdIv84FwBK%2FOa8YkuYfN3%2B4VMuRluR3QQAcf%2BelvntiYzDkVxofTcfghTPZVP%2BoFNtipkPkT7p%2FrkaqRLgFhfvaN6XFNAiTO8KCTFFxyN%2BGap0HB78jaIiNc5CQafVkXgrEpS9AGYe7NDYZJhYEuEmE09nuDl7AjbJP5fB0sjFvz0DFrASTZQbAsHKcWyjzSfKYqtLWj7qzqmYOIznTDyrObEBjqkAcTycnfJkpEJ7tQe1WTZc9pQuHIYxGOhsFsbU5IHK3DCPzu9Nxh%2FS3u3bG5KP2PUMPS13kvC9wPUYu6EAQGhWN1cImeVh3K9hBtPy06PaZVQ7wLzVwHf5WKtl5Ts%2BsAZeqilpbVd0T1NlBafWvjjPxy1IFsL1QYo4NvUYbLtC7W04BfcXD7STNa4DhV39zSHXNzHD0vq7mg%2BlwxAfBmnIS8b4W3k&X-Amz-Signature=ef7695c6b09cd5d58d9bd147e71fd0a77ba407a1902e629dce2511b331c0d695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XREO6HHL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa9Tvs%2FCLiRziaYAQRxWXluMM0cyyj6bogC4vrVaGWlQIgTU2jWan3IAwj6%2BxP1BadLNywIaqMPYXU0a0MG%2FYDDncqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdxAUg5V8XqR1ekayrcA3khO4J2yLKZxubYBkqFgKsaiQfKiZ4i%2BLmlQu2WU9iks9BwnqZ7XIg0OgNM4IzVjgweL51pYPbDJrNlmblwRpUwfpVkwzwieBMeI58g2bRmPKSSsTP2N93g1uSbS4ZL42u69%2F6ekCblLdtGTSdO%2Fx%2BgDKCf6UjtbWdopXbP%2Fl6omWgclHz5uJZ%2BlcWWPSlDwWIDBOZkdQyN7QzSgpZoXw4ofb74jPIVpogAlcEAvF%2BfRF4QPDH%2Fyk8mhdzPUCv7%2FnXSkCIBbbVhdTn8ggJPW92kIFWBPTHWN6VAPTOZTq5TUQ%2FopU8pg1A%2BvrazfjPTeMCBAxzehZZcPAWAzsjXKa%2BVvv5%2F0ROCnKHfXlsvtUDsIPVrHrZJthcWm1dB1ajk%2FVqPFcqwUZWGonDeBdlQbhz%2Fk2KM%2BmMrpepEGftdGrVYXDTUMY8LJmbSP4X1bMvXwnp%2FnGsCRasQPeg5BFQ7RSlPoF1q5Gxh7kZpcz9%2Fkptax9quHHtjQvkvzqm3ktXtENYdgim3syxsPJaiEorDajdiT9NldHxSWd1Vbmc404Hdy5GhuGNoTQvurgb4DfDvMiI%2FUnu2rc0LmfARRmYqfkMvLoof1P5oFKQYonQxiwzKRHMeGtez9ZrUusUBMKCr5sQGOqUBn9p%2BR30uK8jqLqkzIxlxdKsnybWk4Wz6cSFuSz0RG4cJ40pHdZIq%2FeW9tJkYIt0iNPF6f3aUebythJ0TVL6ISFGIObg5xyI7kYYpnXOeo1u06AZSmsQZWY7CVsgYe5Mvd7ufjact0hzsuRCST7g9YFkqa7aDm8JkU5A0J8X8DyJARWsz01fgVyPwz9OlN%2BEeo27BiRBHFhsToUlRt2%2B2bkrvvFpF&X-Amz-Signature=ac24902168d0710bd20221b225655cb431a49b93e8b8fa233170dea0e191008e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG5WWELF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaqO9Jvlh9GiJ0Q55QEReGSvvyPybjFZRPPrNIkieNTAiEA4kRVrCM1aVFQlis3mDiefekBla6wzEGw6i6jogTqC3kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcNreFvMFwk8VjLzCrcA%2FpJ8o84%2FaU11IRO4qXKE02H05qlRYco%2BZiTawPAz4UNC4Z3YnrtV%2FZCZI5rnWppsHsW7SMBXsFG5YLpN2s5uEussihQMFXDMKlN9bzh4zf4DmAIcsy9Pto36r7TKc2HzvC9uOvZZ9HR6m6%2FV%2F%2BeDe8x%2BEAd%2BBRgjp15ZDjEuu9xCoEGW0aK20nis5IJ6kOSH%2F1Gxn1f%2FobMdWjYd3olAQuz08d60OwYA029T49KydtmqzcXKvGYVWWOGctI%2Fue%2B5iq3iO6PHifGjFAaYE2%2BwviLjgwJvaxZkC73zLlUmv4tf2LitHMzPC18A0E7CWwpQQYhl%2BviAwuXlnRKMal12bCyWc656ortVAMwe%2FTEWcNQB6AafP7rD9Wi%2FdG7HCzsDNgFB0TrxT0SaSCHm771bmlhY5rTML%2BZglZcuo8TO4wWah2Ro%2FU%2FPCHmHxcdXPl4jojwcMxjfSyhV6NtYIvVgt9uPrvyNBN5p827m7zNOEqeVU8KvhjgpB02%2FubOafgLCswElP%2FYrRGUwgMDoBsfPXCz7TgZUy%2B%2BoiaWV%2BchjtHoV04j2gctsU9vFodb3qMRURriowcKWiGPNF4%2FQbHndXUOrNDv8GbTFl6OlDfE1w6OOCo1jUfHal%2FxJi2NMO%2Bs5sQGOqUBqx43Q02fFLhUHgqrE%2FFkw6YowVXrgrIGFLuoJ%2BVn0jvwdbiBLiMOPnDUbnUpAraxAEjr48k8AwiRtnGVMyd0hWrkHrBZumH%2Fsfk9zYtjK3JCTO1M9P%2BJ5cv9ceAnZGygDho0Wm0M95p%2Fu5nXSWz0tP70fAXKC7fGAitP8PZGsojEMpNxpHM2kIAGutoijBh1xfPzErd5CGzTwAh2bS6J7a5sH%2BqA&X-Amz-Signature=d4ffc24182589baaf681fc54e82e2cc083e33960f4a036ad79e28c0b0e0494fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
