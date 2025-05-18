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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24VZ2PE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw0DaipLbn1GilqNvVNUCrqeqwGfvzaDarKGlgrI4pBgIgDTT7vWvJDSiL%2BvDY5hi9okYPJjhuHwHQ3SPKT7%2FrGpsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPkHXgHAoFMbC5C%2BcCrcA638Q8JV7jEL1VNDtQNFBUw51eW2dWn06X1h2PeRDI8oYU2mBSOauX6qtjLtFUQWeNbyd9cxxStyOsiTmH%2FM8MHQYd4QN3w6Jcuv7Tgt0paFsbP38IS%2FTq%2FjkkJqjCCik9EYdpIzrpSP%2F9SYsuClsQVEvGodFYmSUEVXcsodTSnhNpdemvEs9DhTpL%2BF1uoLtzka98j8jsOAaToy7aMipkqCKvSXNzhbOJbXOn%2Bm%2FOqKl9xxtmSkkdVqSCYJ%2FvfL0f5FH5FUg0ZvO4g2cpLnZtt3DeHUos1wQTRpqfqLauGGyLfG6HP7oakjohad5n%2FUNOROx4kiDDR4GQg4aKQUUeJf%2B8VK%2BJOn0shOjNdwpBF%2FE1khgt1vgXlwplbkiYNjFuZFp%2BXajorVn7dsQOFebcoE0NHGG1wBSXRlXDeX5TUnySi8C3lynBXfjY0jgFzZ0KLE1CWnLZ5Y2qRXHXKd2Xz71UFXRjQlwDjG2XNsMfRju14aqb2bOEMyinPwy%2BwR4jYCmR9rA9kooxXjvK5Um7VnPZa4OviIQFKjnwf4gBc%2BVYMF8jH%2FF6XIVCC6C8a5i26HD5xdXfJ%2FwArBlYwjXEScLX5eAkmjHJafBpbnChfVBdepPsX%2F1e7joz3dMIeGpcEGOqUBoL8DgFXxuUChIm1XjBtGOQbtrj4Jq7gGJj9SAK5aReu3NaP5rKkKb5a07ZN3HxxpggOWr0WGVVb8kNjTtcOVgHvWdLhOZ9qUK4j445nXJNoTBrB3Ldo%2BZ6N7lOLSLIyteCNPGFy4ZfQgVqFKgbgXGYw%2F556zFGqVth6y6K1zNq9E3b0UX3PquKtBp044%2FbaEh6nug6YNcv3ssKSsSuwitEIn9vyw&X-Amz-Signature=fccc2f918f364c3882781ecf691f156cc611ca1ee6b7d8dc28f395fa0c96fc71&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24VZ2PE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw0DaipLbn1GilqNvVNUCrqeqwGfvzaDarKGlgrI4pBgIgDTT7vWvJDSiL%2BvDY5hi9okYPJjhuHwHQ3SPKT7%2FrGpsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPkHXgHAoFMbC5C%2BcCrcA638Q8JV7jEL1VNDtQNFBUw51eW2dWn06X1h2PeRDI8oYU2mBSOauX6qtjLtFUQWeNbyd9cxxStyOsiTmH%2FM8MHQYd4QN3w6Jcuv7Tgt0paFsbP38IS%2FTq%2FjkkJqjCCik9EYdpIzrpSP%2F9SYsuClsQVEvGodFYmSUEVXcsodTSnhNpdemvEs9DhTpL%2BF1uoLtzka98j8jsOAaToy7aMipkqCKvSXNzhbOJbXOn%2Bm%2FOqKl9xxtmSkkdVqSCYJ%2FvfL0f5FH5FUg0ZvO4g2cpLnZtt3DeHUos1wQTRpqfqLauGGyLfG6HP7oakjohad5n%2FUNOROx4kiDDR4GQg4aKQUUeJf%2B8VK%2BJOn0shOjNdwpBF%2FE1khgt1vgXlwplbkiYNjFuZFp%2BXajorVn7dsQOFebcoE0NHGG1wBSXRlXDeX5TUnySi8C3lynBXfjY0jgFzZ0KLE1CWnLZ5Y2qRXHXKd2Xz71UFXRjQlwDjG2XNsMfRju14aqb2bOEMyinPwy%2BwR4jYCmR9rA9kooxXjvK5Um7VnPZa4OviIQFKjnwf4gBc%2BVYMF8jH%2FF6XIVCC6C8a5i26HD5xdXfJ%2FwArBlYwjXEScLX5eAkmjHJafBpbnChfVBdepPsX%2F1e7joz3dMIeGpcEGOqUBoL8DgFXxuUChIm1XjBtGOQbtrj4Jq7gGJj9SAK5aReu3NaP5rKkKb5a07ZN3HxxpggOWr0WGVVb8kNjTtcOVgHvWdLhOZ9qUK4j445nXJNoTBrB3Ldo%2BZ6N7lOLSLIyteCNPGFy4ZfQgVqFKgbgXGYw%2F556zFGqVth6y6K1zNq9E3b0UX3PquKtBp044%2FbaEh6nug6YNcv3ssKSsSuwitEIn9vyw&X-Amz-Signature=bf86f7deb9bdc6774d29f2025e389f7c9dc441ef7fab628dba96c90f40b3be4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24VZ2PE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw0DaipLbn1GilqNvVNUCrqeqwGfvzaDarKGlgrI4pBgIgDTT7vWvJDSiL%2BvDY5hi9okYPJjhuHwHQ3SPKT7%2FrGpsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPkHXgHAoFMbC5C%2BcCrcA638Q8JV7jEL1VNDtQNFBUw51eW2dWn06X1h2PeRDI8oYU2mBSOauX6qtjLtFUQWeNbyd9cxxStyOsiTmH%2FM8MHQYd4QN3w6Jcuv7Tgt0paFsbP38IS%2FTq%2FjkkJqjCCik9EYdpIzrpSP%2F9SYsuClsQVEvGodFYmSUEVXcsodTSnhNpdemvEs9DhTpL%2BF1uoLtzka98j8jsOAaToy7aMipkqCKvSXNzhbOJbXOn%2Bm%2FOqKl9xxtmSkkdVqSCYJ%2FvfL0f5FH5FUg0ZvO4g2cpLnZtt3DeHUos1wQTRpqfqLauGGyLfG6HP7oakjohad5n%2FUNOROx4kiDDR4GQg4aKQUUeJf%2B8VK%2BJOn0shOjNdwpBF%2FE1khgt1vgXlwplbkiYNjFuZFp%2BXajorVn7dsQOFebcoE0NHGG1wBSXRlXDeX5TUnySi8C3lynBXfjY0jgFzZ0KLE1CWnLZ5Y2qRXHXKd2Xz71UFXRjQlwDjG2XNsMfRju14aqb2bOEMyinPwy%2BwR4jYCmR9rA9kooxXjvK5Um7VnPZa4OviIQFKjnwf4gBc%2BVYMF8jH%2FF6XIVCC6C8a5i26HD5xdXfJ%2FwArBlYwjXEScLX5eAkmjHJafBpbnChfVBdepPsX%2F1e7joz3dMIeGpcEGOqUBoL8DgFXxuUChIm1XjBtGOQbtrj4Jq7gGJj9SAK5aReu3NaP5rKkKb5a07ZN3HxxpggOWr0WGVVb8kNjTtcOVgHvWdLhOZ9qUK4j445nXJNoTBrB3Ldo%2BZ6N7lOLSLIyteCNPGFy4ZfQgVqFKgbgXGYw%2F556zFGqVth6y6K1zNq9E3b0UX3PquKtBp044%2FbaEh6nug6YNcv3ssKSsSuwitEIn9vyw&X-Amz-Signature=71263aed06a333c0929d818faf6f635f20dbaf8f834d727632fef4d7fe95fa36&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H6W5SRE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0VZ4HytI0BqKnRyRGY1PAvIGCZ9gtiqNfW2woRhZuwwIgT2BaqXbiod1x0BVmArB0JlyZFyFugBIqVn92QlwEfeIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNFfBcDcYXefvVSlKircAzY15v%2FL2lQjGww9noadUij74GFs1nD21PN%2F3iDKE9bOMqTXwdtz3mTIrLYezgBtUFi%2FVM49U%2BSyGqhThbOfSvjI1%2F%2BAGqvIjW9yYZJCBaMEUes0AW8g3vRQCm0OI828uAgK%2FU50OfWuvT6iq3ukun6oWVPyXlAe8fqnSbWzqSsHyVqX8wFg%2FVnbCWoef4ZSIS5dnBGQsEN0M8tjrMd7E6BGbbezSKYRTqVy3UAdUoRn%2FnL100G2kD90BRuD59XkYLB8XMqCQmvrIzMbNPu62zFWw2s1vHjSZTDSqb%2BTj%2BelE6hpctXbNhpqh84e2Or0sXyPu27C3bb8BNC%2FF1WImly%2FQwbqQocIopWHZQzW6jbFtB38LpOhroZDD%2F6gGgobW1SOPSqyJq5bdOhgTvbO0qi5iA6vFshoyplh4QO%2F1B8wzFi%2FE7n7yqlEXeTt%2BSxv1Uhkf5H6rIdWAftV1Bazi%2BbFzzysjx504FWwLVfe%2FJP%2FlH1momA0Pe71cM8eVjH4JhmK4oyWJ47xiRGo1Gvj2JAQfxacis%2FcKQ3Kl%2Btrzm6Wmf86WbXNmaeJsmjNMUCdhY96kem3%2B03%2FBCGPxfNNWwgRQwqYrA7ulmf%2BNc4g4c0Xiah5el4Npim75gT8MIH6pcEGOqUBNud%2FkA0FakhMgnhWPcOZnK3b%2FeJafTowOq19wZ0jIPyYtIwtz%2BeHCE3zejclSCTdCxWxen50qdRUqNQSieVqr7flA23QETIjfZN4Vcaw%2BGybcegHypw8RTytOjumJ7xv0JFCk4x4R4atzN1%2BasrbxnZ5weCuQA%2FjQ04XOaV4PLhJ%2BMuAU3fsVIvyarY8KMyvU7lcIKOuKaN%2FKuFfsO6QFqKwVWe%2F&X-Amz-Signature=ddeb5e3b03c9fe6ac583c90790c63cc7b2b5f7badc9ff51fec1eac401c305330&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3PM3MN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FrJ6vlbyXdSaZerf49YobO8hTA9CiAgnOV3Br9RNOEAIhANOkU6oHUOUd0vjqMexVmldeADZtrR04np1hp2CXP8aXKv8DCG8QABoMNjM3NDIzMTgzODA1IgzrfSDp3MYhlBfB9zEq3AOl3zHOlBa%2Fgvr4XcUM%2BKel2wGVYasPL4vGPZhnajhnBHZErWg3EM9hpel4r7r9WBp6BC9QG7kt0Dt01d00UzE%2Fkd%2Flrpa4bCL1ddmxuCUhLUFbP%2FOaD%2B6kVxLTSxDj3%2BLUK6Fuq%2FlzU7x5uwxauNaoABKLute6gV4GnQ%2FGfGcAu31BCN%2BQzx4s1UY9YPo0xDjsBh5FGCzxSitP57W%2FLxp49L3fGJWMJJ4o%2B6QN9h98975Sth3zYUgjb53hG%2FsEaTCxrzEMMsiX%2FqqdAi%2BkNEB1CjEGGi7yOh8yo%2BMUVUUYKRVbAhs2ao0su4Zd0BHX6eEqtyBt1X4LOyMmAJNopbEahgaqEfQkQY%2BkoqyCdguenWzIJobHkk2PikQlx1cZeLtMx3e5QL4a%2Bd62flSwKQiXYTcoH3zCrtQgtGAwQF8xmuZscBhUbKl%2BO33EQxzEjJZAh8JtsvAOUAAKAV%2Fsh2WW5PSDP%2F%2B5yXfUo6hxeZBa0KH1pOiocT7f071UMkjwztHyLJ0AqznqkLYcJ0PzFRYYuvULGSBJqTh9sds%2FVMWaLntZV6SYHaeSzDRREryJF0SpctQ32lZE2dR%2FqkrM6ZAsqS56%2BKOVgPJn4W0xiwTrkHkpsAx9h7mZLfdT6zDN8aXBBjqkAZ9aKwmROyuA%2FxFEA4p5oL5Gew46DBzqjcC%2BK1%2FEi4%2FfbpsFyQUZ%2F9LWFdoL%2BnQJyPNyiSX8yoJ2SnQyh0KNJUAL4ly9T1hrVrHc44S65SaIz%2FZQOyz8kHAhI5miDXD2FGKqGUvJmKyzz8ZE%2B7llMcqUYtjqU2Geo5y2EwxSzy%2BYu91nywsVrnFuzhNKa4kCZ%2BXlkdR5hD7ywlv2BmLBs1rLM5N8&X-Amz-Signature=70d91f0a2741af9338d86d517fcb4cc9de6faa14648c54aca31dc1948964bafa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24VZ2PE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw0DaipLbn1GilqNvVNUCrqeqwGfvzaDarKGlgrI4pBgIgDTT7vWvJDSiL%2BvDY5hi9okYPJjhuHwHQ3SPKT7%2FrGpsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPkHXgHAoFMbC5C%2BcCrcA638Q8JV7jEL1VNDtQNFBUw51eW2dWn06X1h2PeRDI8oYU2mBSOauX6qtjLtFUQWeNbyd9cxxStyOsiTmH%2FM8MHQYd4QN3w6Jcuv7Tgt0paFsbP38IS%2FTq%2FjkkJqjCCik9EYdpIzrpSP%2F9SYsuClsQVEvGodFYmSUEVXcsodTSnhNpdemvEs9DhTpL%2BF1uoLtzka98j8jsOAaToy7aMipkqCKvSXNzhbOJbXOn%2Bm%2FOqKl9xxtmSkkdVqSCYJ%2FvfL0f5FH5FUg0ZvO4g2cpLnZtt3DeHUos1wQTRpqfqLauGGyLfG6HP7oakjohad5n%2FUNOROx4kiDDR4GQg4aKQUUeJf%2B8VK%2BJOn0shOjNdwpBF%2FE1khgt1vgXlwplbkiYNjFuZFp%2BXajorVn7dsQOFebcoE0NHGG1wBSXRlXDeX5TUnySi8C3lynBXfjY0jgFzZ0KLE1CWnLZ5Y2qRXHXKd2Xz71UFXRjQlwDjG2XNsMfRju14aqb2bOEMyinPwy%2BwR4jYCmR9rA9kooxXjvK5Um7VnPZa4OviIQFKjnwf4gBc%2BVYMF8jH%2FF6XIVCC6C8a5i26HD5xdXfJ%2FwArBlYwjXEScLX5eAkmjHJafBpbnChfVBdepPsX%2F1e7joz3dMIeGpcEGOqUBoL8DgFXxuUChIm1XjBtGOQbtrj4Jq7gGJj9SAK5aReu3NaP5rKkKb5a07ZN3HxxpggOWr0WGVVb8kNjTtcOVgHvWdLhOZ9qUK4j445nXJNoTBrB3Ldo%2BZ6N7lOLSLIyteCNPGFy4ZfQgVqFKgbgXGYw%2F556zFGqVth6y6K1zNq9E3b0UX3PquKtBp044%2FbaEh6nug6YNcv3ssKSsSuwitEIn9vyw&X-Amz-Signature=e8956e954590e2fe403b6cc9dad5c658b3e2da40246de659ace3064314ddfe35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
