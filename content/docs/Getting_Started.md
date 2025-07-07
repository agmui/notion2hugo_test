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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T26ZXC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC1txH1gpWh505e1192fOY3fJcH1VVgZqpo7Lwrhd1SvAIgE%2B2y9uLMoKiJ6kyqbN3%2FwsrJrwjpdnK0jXlI3FaUEaUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLGIinIOcRAiQ6Q2eyrcA1a6LHT34l5UBLZuVUXIYtYCP6O051zzqaQrtpWAmkO%2BmcbvAPSF%2FpB6cKCrq3aGCwvNqVsJ0T8a0PB5cQwi0%2BiYWOgzT5Xrpx6ebvz4cA3twfZ2C2viE5xG7iNEYmpeH%2Bf0OoTInbd%2FGKCF09uYQKB9n5z0YOMALFvN5%2BokFh2pqXfcM2q2okXUPo%2FObtIRapd6XQzHqBNwfpzDzGmn%2FDpzN9lABkWpTwZdJT85yiaJVDXsrpDDUutR9x9ihwLxqMrm5pm%2BFAv7YU%2BBSyQoDgoqorLD1xm4DXvmKbJzt0r%2Bh29zti0HJosUp7Vgu35eOQdK3oxw%2BdPAZuINVIeNbCvah1fqwMRS7p8SewoMUG%2FDpMA7w2mHLiHSedtCpaWjKigJmipH3nrI9%2BxPg4DzJLYzwJJXYd1WR7jvUd7eMA%2BverpgmNvbXqNfou%2BPd7JG9qtw1fUwbTF8C3QRI5Hweundd1txSj1PYoxB2j%2FW9YBNqGelJOLFxVEl%2BqEouqNX3wHqo5GKJcs85Rk5mIj19O2H1jqY8AQu%2Bkc23edulpi70L0mibxdWctMsK9JlLB4jvGED4tpBwjWcpLcEvlrABbDJYXhao0Xiryxfy3lGBKoWvaouQOrfB%2B5sy%2FAMNWOrMMGOqUB4GWI3APv71t8d92Wd6tt0ggbaeRRSu57Oqn8Ze1SIoX18XVDKJV4n6onw4YcIE8ThMS5AQvq5HlXIT%2BZC3cq%2Fn8IYTfImHEtORmmR45VLYshQraYzkHjEbyYx%2FZVAAt%2BxRGNvfgjYFWIMHZOmqqN80Qm%2B3vQkUp%2FfbICXjoSCqsedAasit7Tr3Um0sIrC468K70pFS9Pl38hptudnQgN4sprR%2Fq7&X-Amz-Signature=481716906267e523582ef07953a90ac1d3fe8270f755b8c66fa17f01c00389b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T26ZXC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC1txH1gpWh505e1192fOY3fJcH1VVgZqpo7Lwrhd1SvAIgE%2B2y9uLMoKiJ6kyqbN3%2FwsrJrwjpdnK0jXlI3FaUEaUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLGIinIOcRAiQ6Q2eyrcA1a6LHT34l5UBLZuVUXIYtYCP6O051zzqaQrtpWAmkO%2BmcbvAPSF%2FpB6cKCrq3aGCwvNqVsJ0T8a0PB5cQwi0%2BiYWOgzT5Xrpx6ebvz4cA3twfZ2C2viE5xG7iNEYmpeH%2Bf0OoTInbd%2FGKCF09uYQKB9n5z0YOMALFvN5%2BokFh2pqXfcM2q2okXUPo%2FObtIRapd6XQzHqBNwfpzDzGmn%2FDpzN9lABkWpTwZdJT85yiaJVDXsrpDDUutR9x9ihwLxqMrm5pm%2BFAv7YU%2BBSyQoDgoqorLD1xm4DXvmKbJzt0r%2Bh29zti0HJosUp7Vgu35eOQdK3oxw%2BdPAZuINVIeNbCvah1fqwMRS7p8SewoMUG%2FDpMA7w2mHLiHSedtCpaWjKigJmipH3nrI9%2BxPg4DzJLYzwJJXYd1WR7jvUd7eMA%2BverpgmNvbXqNfou%2BPd7JG9qtw1fUwbTF8C3QRI5Hweundd1txSj1PYoxB2j%2FW9YBNqGelJOLFxVEl%2BqEouqNX3wHqo5GKJcs85Rk5mIj19O2H1jqY8AQu%2Bkc23edulpi70L0mibxdWctMsK9JlLB4jvGED4tpBwjWcpLcEvlrABbDJYXhao0Xiryxfy3lGBKoWvaouQOrfB%2B5sy%2FAMNWOrMMGOqUB4GWI3APv71t8d92Wd6tt0ggbaeRRSu57Oqn8Ze1SIoX18XVDKJV4n6onw4YcIE8ThMS5AQvq5HlXIT%2BZC3cq%2Fn8IYTfImHEtORmmR45VLYshQraYzkHjEbyYx%2FZVAAt%2BxRGNvfgjYFWIMHZOmqqN80Qm%2B3vQkUp%2FfbICXjoSCqsedAasit7Tr3Um0sIrC468K70pFS9Pl38hptudnQgN4sprR%2Fq7&X-Amz-Signature=1a44100fd296b8840d12237196d17f59bc72e7094430b7673dd1b2665a727b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T26ZXC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC1txH1gpWh505e1192fOY3fJcH1VVgZqpo7Lwrhd1SvAIgE%2B2y9uLMoKiJ6kyqbN3%2FwsrJrwjpdnK0jXlI3FaUEaUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLGIinIOcRAiQ6Q2eyrcA1a6LHT34l5UBLZuVUXIYtYCP6O051zzqaQrtpWAmkO%2BmcbvAPSF%2FpB6cKCrq3aGCwvNqVsJ0T8a0PB5cQwi0%2BiYWOgzT5Xrpx6ebvz4cA3twfZ2C2viE5xG7iNEYmpeH%2Bf0OoTInbd%2FGKCF09uYQKB9n5z0YOMALFvN5%2BokFh2pqXfcM2q2okXUPo%2FObtIRapd6XQzHqBNwfpzDzGmn%2FDpzN9lABkWpTwZdJT85yiaJVDXsrpDDUutR9x9ihwLxqMrm5pm%2BFAv7YU%2BBSyQoDgoqorLD1xm4DXvmKbJzt0r%2Bh29zti0HJosUp7Vgu35eOQdK3oxw%2BdPAZuINVIeNbCvah1fqwMRS7p8SewoMUG%2FDpMA7w2mHLiHSedtCpaWjKigJmipH3nrI9%2BxPg4DzJLYzwJJXYd1WR7jvUd7eMA%2BverpgmNvbXqNfou%2BPd7JG9qtw1fUwbTF8C3QRI5Hweundd1txSj1PYoxB2j%2FW9YBNqGelJOLFxVEl%2BqEouqNX3wHqo5GKJcs85Rk5mIj19O2H1jqY8AQu%2Bkc23edulpi70L0mibxdWctMsK9JlLB4jvGED4tpBwjWcpLcEvlrABbDJYXhao0Xiryxfy3lGBKoWvaouQOrfB%2B5sy%2FAMNWOrMMGOqUB4GWI3APv71t8d92Wd6tt0ggbaeRRSu57Oqn8Ze1SIoX18XVDKJV4n6onw4YcIE8ThMS5AQvq5HlXIT%2BZC3cq%2Fn8IYTfImHEtORmmR45VLYshQraYzkHjEbyYx%2FZVAAt%2BxRGNvfgjYFWIMHZOmqqN80Qm%2B3vQkUp%2FfbICXjoSCqsedAasit7Tr3Um0sIrC468K70pFS9Pl38hptudnQgN4sprR%2Fq7&X-Amz-Signature=ba26ff7be2ce1a12592fd9fb5cb698eead91dfa79d3f039f875b3e01007e621e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FGP4AA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEvwSGb%2FHU9ujJEUIg1V5cSQnGqLI%2F%2FoqwMUUHhjTUUeAiEA8NRqK0rdr1Nu5IDM8TkIFdkA7%2BTuI3z68wuhy0G8A4gq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIxAwkabK6oTOTcq1ircAytUwiN%2FMe6mFGki91SS1IA9AMWhX9wTEvcocFs7jiyUqQeZvFz%2F5%2BhbrZCdg6NBGlFb55BL0nrBqNX9UQMclI%2BoYkUlN%2BA8eSjGXAoFFDJPNv81JEA21oHnud60A6YN9zO4r4OC8tp3TqK6HSMYesEbSbGWzGjLH2t3VSOnqqz9QEtlfPpbXbUb7HKAGlhTLBvvm6Olo9Ua8slRFUKUYKdTUPgNgUw1CUm8EHZ1kTOMTbBe7EA9WhZ9SaLYmJuyV7Yx8gWZ2duNXdTc%2Fk3G4T2vE4ZAgqZnwfgE8TbHmipdTo37MNZ5hwcL1eqU7sSlQt7ClsGFNTXvYWYmN%2FgPBy7WNlE9UyBzIf4NeHvf%2BDOfKTxEgsH6WtflqaOVDjRUsttal2pKDplNDvZNAajtGsXay9SqSLqY4QNMVwcwkKN0E41wpUfr7EtRNlcE8FzwiUBxwOOEQVpYvzINP8wiubPVByH5U%2BBSrAGKYI4gHPW4naQvbjCPTiQqBHJZlcyTcuZq%2BiRA%2FVRnp2ZfkHnizdcMzbrjOwGLaZxVLrH5%2BnUivUxyb78kTe0Iaj%2BPRn9k4FCgAxIfgEVfxJ8wzhPrvrl28%2B7kqDbOVG4NszYgdmccMc2ybjGc0Z41QlUPMPOErMMGOqUBrM6vJIWSkVY%2B82vAto%2BLx1ZqLU7td%2F1vX1fDV7Va7pVSHKefnO%2FsmEeVL6LBURSl7CjjVDd8OeCgwai6XreVdlkB8vnnBOBupGprEInZySWpJfa6AaNTWPCRnUkCECb%2BUvobwk39%2BOT%2FDt2vX6H3TrMtNc6Y8va7sDHEzW2KzzQFtF3LB4oC5xrjUdr2lAXoWw%2BpnBDzZah%2BRXxAHgQMBhKTvNtm&X-Amz-Signature=2ef0b1da4dd256befc53f98194dd735261768215675efc44a2f9eaba0b741285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRIJIUD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCPcEEirzacaHSBbr7DYTKi0dL8VVobZnYAwUY8y62rfAIhANZvPPdrhxBYpziVgtDdmdrC%2FVI6lcOqnamDZW9Ou7kNKv8DCGkQABoMNjM3NDIzMTgzODA1IgzF6dURBiWzWcfaTowq3AOjTB1JEe6dDYhSyrcAJKp2Yoq9rluHFTgVKruKoD1V1LPkhTtTv44c9fJBLRC8fv3u7V6YgAbNXwSQvRSWne5jth3X9kVKosKMbgcglzzkopzMFCNt7PWVCwnMtUqUyLApDF3WQsM0CwPMr7YLPEFhwSC2NHX4901pXooL%2F2hpQsN0YHN5jefMnuO8TyxuE07jDuZGa4OztVodgdNCx8E15S6tsLeu5mOAoivodShPKxaJWbBB5VgtAf89o9wsR%2B%2BU99mWcbkkS5G1xSGHk3TqlZs4x4O3UIYs95Znm%2BSQvMgEywFM%2F51z6zQ2aYyok5gShnmJfzki1j8KrajtzaZY8y01x2dO0myN9DrEGkaBy8sJwCueoqMGNWjrAzLRoo3jpcpIDV0pjJTLqKhviss3t%2FmKEAv25vmjkwN%2BWZp7AgAFY8l4aJCX3FgMNVoszO%2F9f47FWb2TtBO6bPasTUPGRyI61xtf8%2FlF1erYs1yEbKEVrJ5VIdr0SDftsUhFw90uzeK9R5MmZlP%2B%2FLsH63%2FV0jsDanDQHFn5y%2BIu2h9Aqh4FjLXjwZQCI%2FGaiaPKB%2Fn6mVBswJ%2FfZN6p0N3Qr6b6zg67IzWQP1rjZ2uz2vlsdRgtXwU2MEutGToFXjC0nqzDBjqkAeItdsSyIfvgWYe1Lna0kS5EmRdQISHXrVuG8uYFpuEUOWCkQCNnEnSxQpluMzz5HX89Kak2i7JmvDYsEpjxJgXOG6v1z2Z%2FSH78QJSzbOEgh%2B0aPgZ0aWqBocck1s8NteKFl8HqujN5Om6H9dCG4iEfwqCtzUBBK0%2F%2FWmEuPln9aOjTqKTGA9%2F2iFzDyBKA5phsAauZ%2BSPAQbp7gSyp45Dwm8K5&X-Amz-Signature=00400e8be0dd9c31c77c38e6838f8623fbfe84dadbb1e21dadc237528130e125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2T26ZXC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC1txH1gpWh505e1192fOY3fJcH1VVgZqpo7Lwrhd1SvAIgE%2B2y9uLMoKiJ6kyqbN3%2FwsrJrwjpdnK0jXlI3FaUEaUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLGIinIOcRAiQ6Q2eyrcA1a6LHT34l5UBLZuVUXIYtYCP6O051zzqaQrtpWAmkO%2BmcbvAPSF%2FpB6cKCrq3aGCwvNqVsJ0T8a0PB5cQwi0%2BiYWOgzT5Xrpx6ebvz4cA3twfZ2C2viE5xG7iNEYmpeH%2Bf0OoTInbd%2FGKCF09uYQKB9n5z0YOMALFvN5%2BokFh2pqXfcM2q2okXUPo%2FObtIRapd6XQzHqBNwfpzDzGmn%2FDpzN9lABkWpTwZdJT85yiaJVDXsrpDDUutR9x9ihwLxqMrm5pm%2BFAv7YU%2BBSyQoDgoqorLD1xm4DXvmKbJzt0r%2Bh29zti0HJosUp7Vgu35eOQdK3oxw%2BdPAZuINVIeNbCvah1fqwMRS7p8SewoMUG%2FDpMA7w2mHLiHSedtCpaWjKigJmipH3nrI9%2BxPg4DzJLYzwJJXYd1WR7jvUd7eMA%2BverpgmNvbXqNfou%2BPd7JG9qtw1fUwbTF8C3QRI5Hweundd1txSj1PYoxB2j%2FW9YBNqGelJOLFxVEl%2BqEouqNX3wHqo5GKJcs85Rk5mIj19O2H1jqY8AQu%2Bkc23edulpi70L0mibxdWctMsK9JlLB4jvGED4tpBwjWcpLcEvlrABbDJYXhao0Xiryxfy3lGBKoWvaouQOrfB%2B5sy%2FAMNWOrMMGOqUB4GWI3APv71t8d92Wd6tt0ggbaeRRSu57Oqn8Ze1SIoX18XVDKJV4n6onw4YcIE8ThMS5AQvq5HlXIT%2BZC3cq%2Fn8IYTfImHEtORmmR45VLYshQraYzkHjEbyYx%2FZVAAt%2BxRGNvfgjYFWIMHZOmqqN80Qm%2B3vQkUp%2FfbICXjoSCqsedAasit7Tr3Um0sIrC468K70pFS9Pl38hptudnQgN4sprR%2Fq7&X-Amz-Signature=32743f0b3e6a0941e5339006363d01747b4e632e1a170d2d73f80498ac66586e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
