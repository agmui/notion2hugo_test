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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJ24UKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBQg1zrsMAGdp%2F3EB8kxhRctyvSNsvo%2BOhGvII0fBaMAIgX7Z5KCar0UTIVJNedo9kstZPuu1S6BqWthr9YdagcGgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDYi1KaxNuXAMut8nCrcA8%2FXoMB7cQgEM%2FKEHbl0EnvtYRmz83iKQarsYX2vu0%2FZE4gf1Gh7wwgadlvRkqhOvuVs3csZwymHu%2FFUsVkJTylCMqjf4cCx1Usc2VXz8iECZTzk%2BSUjhM2Pk2ffdQRtJmMNGK9HCFeXOxs8%2FavvzGt%2Fwb3eZWMxt1xBUGzSqPBu3gmxILlPyOxJxNq3vyqBZgULTJEnzHMLuaD6lHgO3uw0HJdVyp63ZFPR6Az5ormjmYOFuDiVDBzKyr7pXudUsipCG7Q56N%2F5jqLlHEzmMaKzusVCVMUGuFCi92ZIj1zemThzxmjfjAOX3CQ%2B9Wge6wlO3C5MIgB2%2BT7fsFg65mDXkg9gLSBe%2FzNdqvylSWQTI%2B7QrZYv%2FMSbWT4ze7MYBHrOAJY4VKpDbL1GMa1qm6qi1bzUoVu6G1AI9S%2FIsO%2FBWYVl%2FfPAvUkTt3q%2FO6JzkWfFW5w3uqni%2BUKqTlEX4VejAReFaC8VjQ%2FjSrRZ%2Bp9gRFBJBGtFLczc%2BW2Ny8bjPWVXWJPAd72lQ0nDLqgx41j3BKZ5P9%2BTwr7DMpCYQKY8jArAvaaXrIQbD2HTwozRVT%2FDdIiIQvBIIw50LlO0eW%2BJZA75alwpP9xgzgUd6f11JQNH7h5ejbUqo0qRMKmgn8EGOqUBamAC1RwREFvL1yfBW7WwOpiH3EXyJA%2B9yCKPpkKLfYhlHwhHp47wtghCTRrHptScWOPaYrEAdTWf34cTWkmeMDxoap9AtvD9rYLWSVoPkrCJH%2FE314SSpiY1l6K8AhPpI0cvksLrOOfVT6fWX3Ty0r%2FDdd1VfisDJRcgOXLdJRMLnDQgkO92pBqcNL0PZp7jAhDdv1eJKa6R%2Fc4JlrFUD9kONwZg&X-Amz-Signature=905c84c7b1c075c4977c6c0086aaaf150ab8ead3a483740c5816d48a46119345&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJ24UKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBQg1zrsMAGdp%2F3EB8kxhRctyvSNsvo%2BOhGvII0fBaMAIgX7Z5KCar0UTIVJNedo9kstZPuu1S6BqWthr9YdagcGgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDYi1KaxNuXAMut8nCrcA8%2FXoMB7cQgEM%2FKEHbl0EnvtYRmz83iKQarsYX2vu0%2FZE4gf1Gh7wwgadlvRkqhOvuVs3csZwymHu%2FFUsVkJTylCMqjf4cCx1Usc2VXz8iECZTzk%2BSUjhM2Pk2ffdQRtJmMNGK9HCFeXOxs8%2FavvzGt%2Fwb3eZWMxt1xBUGzSqPBu3gmxILlPyOxJxNq3vyqBZgULTJEnzHMLuaD6lHgO3uw0HJdVyp63ZFPR6Az5ormjmYOFuDiVDBzKyr7pXudUsipCG7Q56N%2F5jqLlHEzmMaKzusVCVMUGuFCi92ZIj1zemThzxmjfjAOX3CQ%2B9Wge6wlO3C5MIgB2%2BT7fsFg65mDXkg9gLSBe%2FzNdqvylSWQTI%2B7QrZYv%2FMSbWT4ze7MYBHrOAJY4VKpDbL1GMa1qm6qi1bzUoVu6G1AI9S%2FIsO%2FBWYVl%2FfPAvUkTt3q%2FO6JzkWfFW5w3uqni%2BUKqTlEX4VejAReFaC8VjQ%2FjSrRZ%2Bp9gRFBJBGtFLczc%2BW2Ny8bjPWVXWJPAd72lQ0nDLqgx41j3BKZ5P9%2BTwr7DMpCYQKY8jArAvaaXrIQbD2HTwozRVT%2FDdIiIQvBIIw50LlO0eW%2BJZA75alwpP9xgzgUd6f11JQNH7h5ejbUqo0qRMKmgn8EGOqUBamAC1RwREFvL1yfBW7WwOpiH3EXyJA%2B9yCKPpkKLfYhlHwhHp47wtghCTRrHptScWOPaYrEAdTWf34cTWkmeMDxoap9AtvD9rYLWSVoPkrCJH%2FE314SSpiY1l6K8AhPpI0cvksLrOOfVT6fWX3Ty0r%2FDdd1VfisDJRcgOXLdJRMLnDQgkO92pBqcNL0PZp7jAhDdv1eJKa6R%2Fc4JlrFUD9kONwZg&X-Amz-Signature=f49b6796c219533553a9dcaa751c47a3342c8fa31ff63f68d5ced22900360e98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJ24UKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBQg1zrsMAGdp%2F3EB8kxhRctyvSNsvo%2BOhGvII0fBaMAIgX7Z5KCar0UTIVJNedo9kstZPuu1S6BqWthr9YdagcGgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDYi1KaxNuXAMut8nCrcA8%2FXoMB7cQgEM%2FKEHbl0EnvtYRmz83iKQarsYX2vu0%2FZE4gf1Gh7wwgadlvRkqhOvuVs3csZwymHu%2FFUsVkJTylCMqjf4cCx1Usc2VXz8iECZTzk%2BSUjhM2Pk2ffdQRtJmMNGK9HCFeXOxs8%2FavvzGt%2Fwb3eZWMxt1xBUGzSqPBu3gmxILlPyOxJxNq3vyqBZgULTJEnzHMLuaD6lHgO3uw0HJdVyp63ZFPR6Az5ormjmYOFuDiVDBzKyr7pXudUsipCG7Q56N%2F5jqLlHEzmMaKzusVCVMUGuFCi92ZIj1zemThzxmjfjAOX3CQ%2B9Wge6wlO3C5MIgB2%2BT7fsFg65mDXkg9gLSBe%2FzNdqvylSWQTI%2B7QrZYv%2FMSbWT4ze7MYBHrOAJY4VKpDbL1GMa1qm6qi1bzUoVu6G1AI9S%2FIsO%2FBWYVl%2FfPAvUkTt3q%2FO6JzkWfFW5w3uqni%2BUKqTlEX4VejAReFaC8VjQ%2FjSrRZ%2Bp9gRFBJBGtFLczc%2BW2Ny8bjPWVXWJPAd72lQ0nDLqgx41j3BKZ5P9%2BTwr7DMpCYQKY8jArAvaaXrIQbD2HTwozRVT%2FDdIiIQvBIIw50LlO0eW%2BJZA75alwpP9xgzgUd6f11JQNH7h5ejbUqo0qRMKmgn8EGOqUBamAC1RwREFvL1yfBW7WwOpiH3EXyJA%2B9yCKPpkKLfYhlHwhHp47wtghCTRrHptScWOPaYrEAdTWf34cTWkmeMDxoap9AtvD9rYLWSVoPkrCJH%2FE314SSpiY1l6K8AhPpI0cvksLrOOfVT6fWX3Ty0r%2FDdd1VfisDJRcgOXLdJRMLnDQgkO92pBqcNL0PZp7jAhDdv1eJKa6R%2Fc4JlrFUD9kONwZg&X-Amz-Signature=3566dc9789a16c801c17cfce16aceda937538f9e655995c2fd9ac2f5babdda1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MDFODJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPJMG80UjtlE6WMcqywb04iN3bM8nxqK3SnLWhIB1RawIhAP4RgjgjrPDuKkh%2F2iXrcOADvDW9S2Jfnsmkq%2FvT5D6TKv8DCFEQABoMNjM3NDIzMTgzODA1IgwJi2G1NeBzw0OoCy4q3API9dM17dA323kMW1a%2Fg0JW3dm44aCULwXgkbUG%2BR7MuFrdt6VW9qoddp%2BLckOE8M2AYgke7OBqioQ2iZ%2BDWAVKhGHpewEU9DWebRE6zwr2M0XSjIauEsR2qFuVpqazJmLGQZ%2FK3z5lrgHUrRcf9IeMsgaSJAOlKEHctdjlojxmdUfT4yLeadL%2B6duumNbc8GswcBehSgfJ43KbmXtgCJHTRYwWedlOGiFaDXIOhNZGmW%2FIU%2BcR6DWzvPrzj%2BqfuHSOrcsiVCWT2CLm%2B2Pi%2FHdzNs3KSrYfzRU%2BqmMkmYc1eM7UeOt2RZfG94w5qXhjYbnl4GEvRS4z9xlqDdNsO%2BPGNdwM%2BOCqjwp8A7WE2W61V7cAqUXHQfPF9BasyHIsa5MztXUS4AlhKPNXKiK6ZIm%2F0nSWgr7wZwq8p008iQJ1g3UfhntgxVaJET3RA5b31c4unZNRlDF0L18okBbGdBtlCK2fPQSlmVQ4nDQSiMmbYHyBLxIjo0YmWM3sbqg1XIZNBgLklDZdrErBftxPnobT4JtmU9LdJQ69wiy4JqJJ3vYdzyui3m1lu8PF8NfTgYLt%2F2dQfgX%2F0SBue%2FkoyiT%2F39lDPqEnK%2Fw5U0P7JC5miuh3f50LjLHSUjG7GjC3oJ%2FBBjqkARlhCP4nr2mxt25K25tf4pJpNwWoXy25r0Bc7oywJXCiebf%2BntqXT5edyDFqwmsRG5mTE16%2BkoS0GEG0hrgZcuHviJD7M0e%2BwBfYsgl1jH7d8SDLv6mscl3WvR%2BcRqlvnPHO38wnwkRaHjQVyAd6wJ3GHtkS2G6PCez%2BScQk1ryfLO8OD0vzt4roOP3wEgFUsPjGiMFqZqP6xib7VEKLiwc8s1Vz&X-Amz-Signature=a2dca4721deb58a613f22340c92825340f826d1fdb121354718eca8b17406c61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W53AEPT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6kMrcoYOlGwMyrulv60x9AxqyvE0gu7M6ubcWyCZE4AIhALvRekwuJMh%2FUFj%2FoJSct0UN2tCiFiddl8%2Bjc47x17j%2BKv8DCFEQABoMNjM3NDIzMTgzODA1Igy9xBnlJvz%2B83AlTXUq3AOprbX0yUFfmw%2FPhMS9DluW%2F%2FZ8TeM41iAWYYqSY6xkQGCo6uHnIwoVfH8%2BH2Lom8NEsQvgxhibs1sJ5WxeKVZfUq6ZxosAwMowri1pkUknG2TaC4hnJRrhrn5pabFZMwYLHbkbPRbXMCt0NGobmr1qvA81JurzcmAFs6FrMHWh1OR2jc9gIeLqhpGURjVrfVZZLZOZexSoHHnJ7GTYPCO8wQRRTH69DRpdVwwx6OQ5MyUs78B6BKg9n25yUDrJyAOmAX9FFvEghxN35qeiQ5IC%2FgDkHt3aLbv%2F9Ract0PVRobMHIlfXE8QjZI0N40kZIjbB%2BLtj4e%2BWG2on0xvwU6PC%2F63q6ypT3oop7AdyJevbWefJa01X3ZNl2kzEZkHAiRKYTEg2GeozX8E3YdR4ycs%2F%2BCdMkMt8BR3tL6%2FLu3hSFJfg6k7UklnXQKGTVvOhD4wa9wMu%2BAmfa4QOmI7%2FRqTA%2BTbbmlvIrwsrupUaP1hyf9Te%2B0AuDSb%2BC1TriffBdJdoroHZwvzya9RBIoYTjupfMxfLDIW6jGoHENY2hJGiy1A%2F9jHJRSYtB%2FxqofG7pBy%2FvoDC69z1zsOmeO2koJo7vtGgp5o7Y3j9Qy5gTETs%2FOTl8X9hpILDIzdUjCroJ%2FBBjqkARsCKkUc80HJ%2BiddEGSpiTetW4TF4aE40BxenQkYmNBZnR0NY4dL7Cid6%2BVn56xJlC%2F%2Fy4HQCDHDzU2SEx3rIm66Uh%2FmtC3CR2dikaXWO8chOySDyNmjXJICSBJMdQaX5%2FDIVVjQw0%2FcagkfOmb2QgFObE2TUByeCeqiVk4j5C8g7WV3nQwq6As3up6wNKWayeUAPB2b23cTw4a9WfQACtfYARUD&X-Amz-Signature=4d7807606fa6b922683e3a20c7aa5ce5fdeb1b2b7ebf47aee692c4297d90ce51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJ24UKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBQg1zrsMAGdp%2F3EB8kxhRctyvSNsvo%2BOhGvII0fBaMAIgX7Z5KCar0UTIVJNedo9kstZPuu1S6BqWthr9YdagcGgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDYi1KaxNuXAMut8nCrcA8%2FXoMB7cQgEM%2FKEHbl0EnvtYRmz83iKQarsYX2vu0%2FZE4gf1Gh7wwgadlvRkqhOvuVs3csZwymHu%2FFUsVkJTylCMqjf4cCx1Usc2VXz8iECZTzk%2BSUjhM2Pk2ffdQRtJmMNGK9HCFeXOxs8%2FavvzGt%2Fwb3eZWMxt1xBUGzSqPBu3gmxILlPyOxJxNq3vyqBZgULTJEnzHMLuaD6lHgO3uw0HJdVyp63ZFPR6Az5ormjmYOFuDiVDBzKyr7pXudUsipCG7Q56N%2F5jqLlHEzmMaKzusVCVMUGuFCi92ZIj1zemThzxmjfjAOX3CQ%2B9Wge6wlO3C5MIgB2%2BT7fsFg65mDXkg9gLSBe%2FzNdqvylSWQTI%2B7QrZYv%2FMSbWT4ze7MYBHrOAJY4VKpDbL1GMa1qm6qi1bzUoVu6G1AI9S%2FIsO%2FBWYVl%2FfPAvUkTt3q%2FO6JzkWfFW5w3uqni%2BUKqTlEX4VejAReFaC8VjQ%2FjSrRZ%2Bp9gRFBJBGtFLczc%2BW2Ny8bjPWVXWJPAd72lQ0nDLqgx41j3BKZ5P9%2BTwr7DMpCYQKY8jArAvaaXrIQbD2HTwozRVT%2FDdIiIQvBIIw50LlO0eW%2BJZA75alwpP9xgzgUd6f11JQNH7h5ejbUqo0qRMKmgn8EGOqUBamAC1RwREFvL1yfBW7WwOpiH3EXyJA%2B9yCKPpkKLfYhlHwhHp47wtghCTRrHptScWOPaYrEAdTWf34cTWkmeMDxoap9AtvD9rYLWSVoPkrCJH%2FE314SSpiY1l6K8AhPpI0cvksLrOOfVT6fWX3Ty0r%2FDdd1VfisDJRcgOXLdJRMLnDQgkO92pBqcNL0PZp7jAhDdv1eJKa6R%2Fc4JlrFUD9kONwZg&X-Amz-Signature=afc69c37fe06b056080ea03a9fcd06a7d52008d0d89a22a56e8490ee63442633&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
