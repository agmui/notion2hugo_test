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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ENNBQT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDIk%2Fc8WeSMwQiUocGjY2qKVnAf3BtSeIit2aIBj3oIOQIgDSwKlQHMhGwF2qkUezRnBwA65jNmMIiVSChznTWxK38qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINjUCMRju2HdmNTzSrcA88Y5H%2BGKts5VdmRJWBADRf704rvoHouLEpcy%2B6PNzs3z1Yd5mer8tTHgHaUi%2F69dSJG%2Feoldrp0uO4iccJYI25GR8vcH9i2Y8on0fbw1nlg1ZkRlZdQIZ6%2FMHTtMVQHbyaKGY4QLzLbACbaHQf2q7YY433dvNvvQqKiknnkS4qwOeHR9dk%2BdovaJMUSo1CGgBdIjMIZM6JIhl07ygS1ln7DIV5BboiGB69XxxsjjFnusSMgeGGv%2Bk%2FBcUVDcS4AesZl5%2F%2B%2FQlmB13q4LcF01G16%2FM92hh0wRZj2xe3plZ6gQoARd7PFQkwdUknUpjFIgwIhE9eYcSjw89p4fW7tan5jvCfZAem2MwUt89sjV3SLwvl2dhC%2FvXL1%2B89vt%2Brar83WqATnBjPwc3Qfdodcc17Ybl8GEESqo5KAe59ehf%2BvZ%2FvQ%2BkBpQvkcikXK1tzqNBiDAHXl5szSWA01NbKJJaZd7cGqmWnSq08rz7cbczekhCfeR1j%2F43dnnBklD17IW6Ws9aDyg5FgtfihMQpFeuiXsurDQUcvXXMQjlFANqEJ5JWCYYhZ2hMk%2B9pQVwplYb4eDgwXuYGAj8GG2iKx763mCYmWau2ew1OiAQPa%2FWxo1bXpjUQSueCj6CljMK7e18AGOqUBlyltCSIiJ5ZRe5qAuXL8Vx74hgfmkVXNRdwSw22p0Z%2BKXRloBvF8ZBRM8TVmccLxWzyzxJz%2B5frHTp5ptvy3eF9Arg7Az%2FzG36xC3TbHJq3uHgXpSx7EaYkXbzTHK2XuN4YcX4fG1uC7gV89sotwliGzySrqyvkfoEviaOa4iXOPJXpzxLyfq11TxXsllPQNUNspcUjoMejvPjCk2LJM5VlK1Db9&X-Amz-Signature=025f10f96b4f246f445c1533acac9d92a4c14e516479b42f97819bd766d85d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ENNBQT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDIk%2Fc8WeSMwQiUocGjY2qKVnAf3BtSeIit2aIBj3oIOQIgDSwKlQHMhGwF2qkUezRnBwA65jNmMIiVSChznTWxK38qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINjUCMRju2HdmNTzSrcA88Y5H%2BGKts5VdmRJWBADRf704rvoHouLEpcy%2B6PNzs3z1Yd5mer8tTHgHaUi%2F69dSJG%2Feoldrp0uO4iccJYI25GR8vcH9i2Y8on0fbw1nlg1ZkRlZdQIZ6%2FMHTtMVQHbyaKGY4QLzLbACbaHQf2q7YY433dvNvvQqKiknnkS4qwOeHR9dk%2BdovaJMUSo1CGgBdIjMIZM6JIhl07ygS1ln7DIV5BboiGB69XxxsjjFnusSMgeGGv%2Bk%2FBcUVDcS4AesZl5%2F%2B%2FQlmB13q4LcF01G16%2FM92hh0wRZj2xe3plZ6gQoARd7PFQkwdUknUpjFIgwIhE9eYcSjw89p4fW7tan5jvCfZAem2MwUt89sjV3SLwvl2dhC%2FvXL1%2B89vt%2Brar83WqATnBjPwc3Qfdodcc17Ybl8GEESqo5KAe59ehf%2BvZ%2FvQ%2BkBpQvkcikXK1tzqNBiDAHXl5szSWA01NbKJJaZd7cGqmWnSq08rz7cbczekhCfeR1j%2F43dnnBklD17IW6Ws9aDyg5FgtfihMQpFeuiXsurDQUcvXXMQjlFANqEJ5JWCYYhZ2hMk%2B9pQVwplYb4eDgwXuYGAj8GG2iKx763mCYmWau2ew1OiAQPa%2FWxo1bXpjUQSueCj6CljMK7e18AGOqUBlyltCSIiJ5ZRe5qAuXL8Vx74hgfmkVXNRdwSw22p0Z%2BKXRloBvF8ZBRM8TVmccLxWzyzxJz%2B5frHTp5ptvy3eF9Arg7Az%2FzG36xC3TbHJq3uHgXpSx7EaYkXbzTHK2XuN4YcX4fG1uC7gV89sotwliGzySrqyvkfoEviaOa4iXOPJXpzxLyfq11TxXsllPQNUNspcUjoMejvPjCk2LJM5VlK1Db9&X-Amz-Signature=e996f07d293f33c4f47f8178eaeadb0f1584a8fe8f733a5adb0f0ea682a0b12b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ENNBQT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDIk%2Fc8WeSMwQiUocGjY2qKVnAf3BtSeIit2aIBj3oIOQIgDSwKlQHMhGwF2qkUezRnBwA65jNmMIiVSChznTWxK38qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINjUCMRju2HdmNTzSrcA88Y5H%2BGKts5VdmRJWBADRf704rvoHouLEpcy%2B6PNzs3z1Yd5mer8tTHgHaUi%2F69dSJG%2Feoldrp0uO4iccJYI25GR8vcH9i2Y8on0fbw1nlg1ZkRlZdQIZ6%2FMHTtMVQHbyaKGY4QLzLbACbaHQf2q7YY433dvNvvQqKiknnkS4qwOeHR9dk%2BdovaJMUSo1CGgBdIjMIZM6JIhl07ygS1ln7DIV5BboiGB69XxxsjjFnusSMgeGGv%2Bk%2FBcUVDcS4AesZl5%2F%2B%2FQlmB13q4LcF01G16%2FM92hh0wRZj2xe3plZ6gQoARd7PFQkwdUknUpjFIgwIhE9eYcSjw89p4fW7tan5jvCfZAem2MwUt89sjV3SLwvl2dhC%2FvXL1%2B89vt%2Brar83WqATnBjPwc3Qfdodcc17Ybl8GEESqo5KAe59ehf%2BvZ%2FvQ%2BkBpQvkcikXK1tzqNBiDAHXl5szSWA01NbKJJaZd7cGqmWnSq08rz7cbczekhCfeR1j%2F43dnnBklD17IW6Ws9aDyg5FgtfihMQpFeuiXsurDQUcvXXMQjlFANqEJ5JWCYYhZ2hMk%2B9pQVwplYb4eDgwXuYGAj8GG2iKx763mCYmWau2ew1OiAQPa%2FWxo1bXpjUQSueCj6CljMK7e18AGOqUBlyltCSIiJ5ZRe5qAuXL8Vx74hgfmkVXNRdwSw22p0Z%2BKXRloBvF8ZBRM8TVmccLxWzyzxJz%2B5frHTp5ptvy3eF9Arg7Az%2FzG36xC3TbHJq3uHgXpSx7EaYkXbzTHK2XuN4YcX4fG1uC7gV89sotwliGzySrqyvkfoEviaOa4iXOPJXpzxLyfq11TxXsllPQNUNspcUjoMejvPjCk2LJM5VlK1Db9&X-Amz-Signature=b41b0c584daebeb94b795551262f26cbe1b1391b7b8db7ae8c6947c0ecbc3025&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEECHIBZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCdK%2BpJeSnPcbJ3B2G91m43C%2FSTBR8ohAmN3x1rpU%2FjmwIgUsEfEa8wBXT3iAyRT%2BIDWk4Q%2Bqgc8IAWonNE%2BDG9WzwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzkBO0QdaiE%2BRze%2FCrcA3uZW44K%2FXzrDK2P8r1a7KQyRCsKRiSCQxb4mGTKk85hgjcyPvJD%2BJrA3keHjjMDAaUta42B4C2yRF27fj0tPqk6edzDnVVWB11xsV5sn4I7cZkhVKLyJH%2BWxgMrb9Fl2UennOalc%2FPYeDsUe%2BRNNDPSOK0bHP8zZLeUbDtUEJpCCHwYyBbgixG%2F%2BvBJq64iq0u7hI40Ra6ESrGNwYR%2Bg1zP17N1nZ%2Fsh1iw8x8Ev7ibl8lkYFKjBKDEQ1TGAv582c73fHNI5TWhxrOQoNx6uaKh4K%2F9JoJQ%2BVTE%2BSwFiJZQDeeOe6Rzc52%2BA2usoO%2FLK%2BT7Me9Cke%2FWQTfjdUQkoqIcBCPnoG41i5EXl4gP386%2FgEoMBntM0oSo7dfBUjpJ22wizJV07AZcr1zcCt4sc5udhPPAlthg7%2FZmmZqRQty03hrn6RW6IDtUg8UAKie6%2BC9V3Fzde%2B%2FacLKPfJO3Y3eIS6ZoeTtzNHmkiX%2Fgz0N9n2YEoD%2Bcog45MWjkysWOVh2XeQ8TvpsCo5Oe8rEFVAHq5VM9Os7yvYxgppbrBwLRvtgSpoSl7YOWx0U19mvegxf2Ix1ELkVH3LuG9jo0p6j5Q37%2BHXSLvQHyiax8W4rk%2FywAjuLXMYVixUezMPPe18AGOqUB%2FhTy63ZSzhcAA57FGgp%2BaXoiC6zGomno4TMqkTlmxWoPNGorU3qqBTFiIELPYPyRxx3HQqfap9KwFPQ3%2FAyJVZVMPWvpy8tnx1QY1aa8L6S4m%2B4b4ZzWv2c1idwxJL8vnMmm8v%2FrEeaKO5jyIgqEandQhE7Zw88xVyL88eT0mon6ye9rvZbEjttnRZC9e0z1CHACdaOjSwbbbuTy%2F%2F8nGJPePcBz&X-Amz-Signature=80b7e64fc6701bb95b7426223d9c466f7f8f479aa611615818d6fed4453f0038&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIYZSEV%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYJBpnIkLTFossGaUEvVHgflC6otC6JRaNt8r9K1VrnAIhAM%2Bq2vGcfLNWSca4sak6kS5BnEik2EllbTV9hHLHoHquKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysoE%2B8X8Bo%2F1L%2BdvIq3APDqsk1hGiG2VTI9q5uIU4kdKJxL%2BTSQmY5goiQz0H3uGl6qyfe2zCDeFsXZFhLZJ2yBZi1SMehCythykXpnyRDaP1FnUBPo6gSDI6Bs8CRRkuAKTVwIBvcKQ1YFL5aAgFSgfva6Ox3eSFGvFngUWD0JDI8E0zbmIlKELmKNE2LS%2B4F7TembVxT%2BPGH4OMsnBlVkP3eUN%2FewQIFIhZOIv%2BMEP%2Fh%2FtIkqgQn3Ah6Al%2B1AcdAVmUi66rTiubICwjdT8uDQGw%2F3CUtpHxWU8Uv3q4KOiA73%2FEzqWvzyNZrXwcsHlc2Dau3Wmw2oOpt1BdjPs5zyTgdapPyDZKiwA7hPukcKi%2FkamuPSaV9%2BDT8fwQ2F4Gv9LVyoXToD0Y19q4GhgmjOXMjEuZXEVeH4OzgYF4t9SnDEtFXozs0NA6C82XSs7voi5gHqBArG96ntir%2BCIfipF4fKD6N97AcmYvYY2itLwZ6j6WZbIL4Q9jc2wLJKxg27SQLYkIUP%2Fx8SqnV8et%2BUdg%2FQSfYydyJhDnVynE4o0%2Bbp7rxWchEvUnv6B7PkIpc0%2FPoyz209FmlWV9pnpExx7RLKS1jHy4gmqvZ9h9E2FNHXcfEpDDD%2BEEM17i0C9F0Rhejy197T6w8PjDe3tfABjqkARHQ9ulvGUPBe91SwTvmNz6DsYfKvNKNJQBcItJ%2BkhGhupKsqth%2Fq60Lyas%2BKRwwgPOTwg71RbmzUtQUNjv49dRLw9k9fDxLkvd1wiJsFgFBhCajpQnCbmORRjROiPuaAkn7yW7Cd%2FiS8T3cIZuvEhSWEor6WizuSXPRFsvolT8iRXtLkbwVag7dTUvw08iqJT6%2Bg5TnhBHAM2h%2FI%2F%2Bp68BZIPuX&X-Amz-Signature=50696260af346571fe71c2f00a2385b457ebb23173d1958e17d8a6b545952da9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ENNBQT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDIk%2Fc8WeSMwQiUocGjY2qKVnAf3BtSeIit2aIBj3oIOQIgDSwKlQHMhGwF2qkUezRnBwA65jNmMIiVSChznTWxK38qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINjUCMRju2HdmNTzSrcA88Y5H%2BGKts5VdmRJWBADRf704rvoHouLEpcy%2B6PNzs3z1Yd5mer8tTHgHaUi%2F69dSJG%2Feoldrp0uO4iccJYI25GR8vcH9i2Y8on0fbw1nlg1ZkRlZdQIZ6%2FMHTtMVQHbyaKGY4QLzLbACbaHQf2q7YY433dvNvvQqKiknnkS4qwOeHR9dk%2BdovaJMUSo1CGgBdIjMIZM6JIhl07ygS1ln7DIV5BboiGB69XxxsjjFnusSMgeGGv%2Bk%2FBcUVDcS4AesZl5%2F%2B%2FQlmB13q4LcF01G16%2FM92hh0wRZj2xe3plZ6gQoARd7PFQkwdUknUpjFIgwIhE9eYcSjw89p4fW7tan5jvCfZAem2MwUt89sjV3SLwvl2dhC%2FvXL1%2B89vt%2Brar83WqATnBjPwc3Qfdodcc17Ybl8GEESqo5KAe59ehf%2BvZ%2FvQ%2BkBpQvkcikXK1tzqNBiDAHXl5szSWA01NbKJJaZd7cGqmWnSq08rz7cbczekhCfeR1j%2F43dnnBklD17IW6Ws9aDyg5FgtfihMQpFeuiXsurDQUcvXXMQjlFANqEJ5JWCYYhZ2hMk%2B9pQVwplYb4eDgwXuYGAj8GG2iKx763mCYmWau2ew1OiAQPa%2FWxo1bXpjUQSueCj6CljMK7e18AGOqUBlyltCSIiJ5ZRe5qAuXL8Vx74hgfmkVXNRdwSw22p0Z%2BKXRloBvF8ZBRM8TVmccLxWzyzxJz%2B5frHTp5ptvy3eF9Arg7Az%2FzG36xC3TbHJq3uHgXpSx7EaYkXbzTHK2XuN4YcX4fG1uC7gV89sotwliGzySrqyvkfoEviaOa4iXOPJXpzxLyfq11TxXsllPQNUNspcUjoMejvPjCk2LJM5VlK1Db9&X-Amz-Signature=493fd58ae58d840f4716d57fdb56f62d4740b336e159ca2a4723b5b5b93da72a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
