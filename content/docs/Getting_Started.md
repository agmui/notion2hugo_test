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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z3XDVZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3nqIaccOCPDCX4oxlFfWuesGFedpG8DezApH5Pki8rAiB%2BKgFvOu5wLPiRFOtkHoXzJi15A8BjlHSrcNsYX%2FbFKSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMbLS8eB050IFuY7ARKtwDOuEN4BI1rwfcZARZ3KDmJ5I7oGC3yzlHXMGmWclraU6Yy%2BnHGPp1hrPv69J2QrOT5Zdug7aamFhr3%2F4cX6s%2Fo9lRzm%2F7J8udX063gopJTYy3nJoHaJmnbd2qbwETpXdUlL6CgZqu4PgCfHu%2BM%2BSgQVnzWN2l%2BdwOcQHW5nhx5XZgPgWZnqzOfpxvwl4H5MKA7hz68jXq5MPOyOF3Osxsqn4ughI5hyMrcaQx7klTuwLuSrM0BbI9CHoADv2kKCnXwUnxgXJJUtmkvwgTsPKrfSE5iqFH5%2FGSbO0WfBVqRfEX9GuEUyNq23SIoXCJl%2BvW7OOzidzefWRt1LMBE6yR29Bc%2BiUwLKrrFPXafk6i%2BXfzYgUxvos7QtPrmkC6Pxi3Xf7qcg9SDvzuDsbej2dR4fD%2Bg7oZBpDDlPYvnvQF7pRAlQdc%2Fi3Jult6NjZ8BlVAOhkHGGA80yFNFrn8Ihp9qjU4KiTPd7yclgTMfaqN4G1UrTPBIT%2BQvi8tdDfw7v2Ov3mdF6%2B8AUaOsQgQrz%2FszNDErUXkhBwmeN3skjAZipzb0f%2BSBAHxLZVLcMLb%2FtRWSMiJICfFkrE5k6lTS328azszUvFZauuzuhpYT2Chff8%2F%2BGD9mUyJvwhfebwwlvSBvQY6pgHOTN%2FM7mG1U3zbZxzYnpFMz8Ixlz5oVT3cLCnVP6eiK5kyl02%2F76DdIu28ipX22S8obfwb73Qkj4RavsmbC3cZ%2Bt%2BpDVE6%2FGEKqr7IRqvijDoUsGHbuxpzBg6ki1Bn%2BJbIIYyu8CfvKSjlafDY7XOa7749p1%2Bdev8mlFeCNrm%2Bpr%2FDUHhAPmsKieYnHEcbiI%2F8iWYMsvsS7oi3wpNavfmGvb6K0f4y&X-Amz-Signature=1cf180b84b31ceebd952066750dfcd36ac727cbafac4dfbf15be8efb67adf7d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z3XDVZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3nqIaccOCPDCX4oxlFfWuesGFedpG8DezApH5Pki8rAiB%2BKgFvOu5wLPiRFOtkHoXzJi15A8BjlHSrcNsYX%2FbFKSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMbLS8eB050IFuY7ARKtwDOuEN4BI1rwfcZARZ3KDmJ5I7oGC3yzlHXMGmWclraU6Yy%2BnHGPp1hrPv69J2QrOT5Zdug7aamFhr3%2F4cX6s%2Fo9lRzm%2F7J8udX063gopJTYy3nJoHaJmnbd2qbwETpXdUlL6CgZqu4PgCfHu%2BM%2BSgQVnzWN2l%2BdwOcQHW5nhx5XZgPgWZnqzOfpxvwl4H5MKA7hz68jXq5MPOyOF3Osxsqn4ughI5hyMrcaQx7klTuwLuSrM0BbI9CHoADv2kKCnXwUnxgXJJUtmkvwgTsPKrfSE5iqFH5%2FGSbO0WfBVqRfEX9GuEUyNq23SIoXCJl%2BvW7OOzidzefWRt1LMBE6yR29Bc%2BiUwLKrrFPXafk6i%2BXfzYgUxvos7QtPrmkC6Pxi3Xf7qcg9SDvzuDsbej2dR4fD%2Bg7oZBpDDlPYvnvQF7pRAlQdc%2Fi3Jult6NjZ8BlVAOhkHGGA80yFNFrn8Ihp9qjU4KiTPd7yclgTMfaqN4G1UrTPBIT%2BQvi8tdDfw7v2Ov3mdF6%2B8AUaOsQgQrz%2FszNDErUXkhBwmeN3skjAZipzb0f%2BSBAHxLZVLcMLb%2FtRWSMiJICfFkrE5k6lTS328azszUvFZauuzuhpYT2Chff8%2F%2BGD9mUyJvwhfebwwlvSBvQY6pgHOTN%2FM7mG1U3zbZxzYnpFMz8Ixlz5oVT3cLCnVP6eiK5kyl02%2F76DdIu28ipX22S8obfwb73Qkj4RavsmbC3cZ%2Bt%2BpDVE6%2FGEKqr7IRqvijDoUsGHbuxpzBg6ki1Bn%2BJbIIYyu8CfvKSjlafDY7XOa7749p1%2Bdev8mlFeCNrm%2Bpr%2FDUHhAPmsKieYnHEcbiI%2F8iWYMsvsS7oi3wpNavfmGvb6K0f4y&X-Amz-Signature=aa9a52d866d6907d3c504b951a475a42b0632a49340e96fbcdbf25153082cdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5PBVDN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFntjVbURTMfuklyv3qI3JAiqbArw6TDCaBXMLPisbR1AiApQd10YvGalP8x3Ucczjna3O4npTw2pTbacYWyZt2oPCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMhA8QJKeny%2BmDcvYiKtwDa7Sg2JEfpSRVXX02S3cT2pLRhCtzJGh1hVQp5HExpaNuZDdJ5%2F4R5WigyYNEl3X0ilyiv7ELJh647HhD9mDVsmDTnYa%2FOJIQXRYGqv2SKd4WpnsyK8rElkxwJKcVsWZdqfy6%2BXVIqxCb8v%2BVNczvS71yYvtVmzz4IUXQO%2B2TcFcTtZTL52IskIMs73N7i8wwqP7E0zm2N3ASb27Yb7luuIkNRE24x%2BKkAAE0V9o1VhnVYA9K9rqfJ9SLCMPG6t9VerGKSW8jUaK4qHKmEp%2BcwZFsWL9pyIPVzE1klnHAtBDFRAme9LZyWVPuw%2Bkpg8mnlH63r9UCh7KPd11UWbh55DDSv36nOZ8rys0W16uujly80sDXD%2BlIwWoxi29ZUaa%2FZCvOGqEEpdyj6Zom4SgqD7ag7Y5%2BvFyYvmDbnzXgrQzERMBwYgbwMxaA%2BexIQvqDph4ZHOWjp8TDG%2Bc188qo4PXpUQcQbbTVtF%2F77PsvR2H4k%2FJhl1e6ivo%2F5bQH474mXFB%2Bsq0E4y204axJmgzysn0E1tZJwg4A76c1OUcxlBWRLGGGXqnxHzlQrTGKnz1YU3VVeWTUlmIHmm79fA94xoXafiij81U7IcWWmW9qwJV5xbSIsliFTEFXL1YwuPSBvQY6pgG1r8bxhD1RvAb65jUbtKT3MVU32zm2T8Qr2rBasZpwPvp%2BtNeMNUpeJVuDkjO%2BN%2BhEQ4NLai7eepb8LPkWi1wAGFy5UXX0sNCG%2BmWxg5rvngIl8HcifSR6egQr0IO1yxk%2B59OcPDwZZTNFIH1r4Qz79WkeRDRlRumrF3GYTohl6gZdukLavTcHWiICoS9z%2FYDyd8V5ME%2BSMfc2OBSz5NeAqHSLC9rs&X-Amz-Signature=128a920b1b95d2b3f72153a7c4514898fbe09a867d9e4cdc6e7ca8f8ac556318&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4R5PE3Y%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAEEqaCdUJ1TvoZi1Pq%2BkRKnrhV00QkyxxrcHJRDkZTAIhAPKS9TQr8j4c5NOzbth5oBJjPfNJ9DNhSzm35lZp%2FvLBKv8DCBEQABoMNjM3NDIzMTgzODA1Igy3undMuSPfSbgUEekq3APqA3sm2nQiP%2BcCsbaN1YHZwNbNNRmQFr8PLvgTuEiEwUxE9ebS%2F2%2BMR5iY%2BMBeWngNu8Rg%2F3z6xLi7kmZdxsLu02R90zfVZmXMvrVQRmL%2BDh%2FGqwPyNI1Wip4QPVMgg9o1puw2IV3xEYCmxOCxuDBD3RIU5YPS82XbaghO%2Fr3AOzdjxZJIrQbYfHdNbJWcn%2BjUa5zsN%2FY5gGpJmekg5Wrbxo%2FwOKC%2BOMMi76hC6See5QxAfai%2FVxqSa%2BOrHOx0YFBIjzkqioWNt%2FVycRR1xNmT41JIPl%2FqPgO3kaSY0oCNJ6H2fpCWlg6v4kti1VWadB9YsbVEQNcxdsgGxnP4cttFHqJRw4DCkfDv7N%2Bw9tjJ%2BQ0mLL4g4n%2FAronedNHmVq1fbsaa6lPNk%2BVjFLeyxIkX9XBTkwyESbJl%2BL8ZaEGmJkiFvEhu9mXNOwHtUqz0Hm%2Ft6v5xTg0J3Y%2FKkyI1nUvi08qYsVJP78y%2BhHm6sRC%2BX6N0cJgTB%2BCn8hUrEFMP7Zo4ctzeJKh1xxfbT3pm49sOxnRfiS%2FkhIXbeR1oa3VzVGg%2BUVQPPXTin7QmyZufnjugUd0tcFqxoHwNCPKTnu7brpPRE%2BzAesAP3d25CEdCbd5LJ%2B6YVrLSoJd%2FSjDB9IG9BjqkAXn8vIvemBvH0q2E7P4h264WKxlqXO3yxoAW1rPB8KtmJHpqFyxGQZHHb74HOcInFPi0wTPS27x%2FHlTONQJdcRjOQJzuyHYqLBhV2PlbtrY7DodcMwnnrYgHAPSTDiaNl9hiWdgCA05eANOuAcz2Dg4606%2FQuNkZ9xo7RFhcDVpMWqGwyJhK3uUDnTf57iIlHUsG1JUSTvm%2BXpVgdDWr9yeMcdwq&X-Amz-Signature=de615cbe416aecc744223b116ae3584c3809d596ce13dbfef926b0255d60f906&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3Z3XDVZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3nqIaccOCPDCX4oxlFfWuesGFedpG8DezApH5Pki8rAiB%2BKgFvOu5wLPiRFOtkHoXzJi15A8BjlHSrcNsYX%2FbFKSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMbLS8eB050IFuY7ARKtwDOuEN4BI1rwfcZARZ3KDmJ5I7oGC3yzlHXMGmWclraU6Yy%2BnHGPp1hrPv69J2QrOT5Zdug7aamFhr3%2F4cX6s%2Fo9lRzm%2F7J8udX063gopJTYy3nJoHaJmnbd2qbwETpXdUlL6CgZqu4PgCfHu%2BM%2BSgQVnzWN2l%2BdwOcQHW5nhx5XZgPgWZnqzOfpxvwl4H5MKA7hz68jXq5MPOyOF3Osxsqn4ughI5hyMrcaQx7klTuwLuSrM0BbI9CHoADv2kKCnXwUnxgXJJUtmkvwgTsPKrfSE5iqFH5%2FGSbO0WfBVqRfEX9GuEUyNq23SIoXCJl%2BvW7OOzidzefWRt1LMBE6yR29Bc%2BiUwLKrrFPXafk6i%2BXfzYgUxvos7QtPrmkC6Pxi3Xf7qcg9SDvzuDsbej2dR4fD%2Bg7oZBpDDlPYvnvQF7pRAlQdc%2Fi3Jult6NjZ8BlVAOhkHGGA80yFNFrn8Ihp9qjU4KiTPd7yclgTMfaqN4G1UrTPBIT%2BQvi8tdDfw7v2Ov3mdF6%2B8AUaOsQgQrz%2FszNDErUXkhBwmeN3skjAZipzb0f%2BSBAHxLZVLcMLb%2FtRWSMiJICfFkrE5k6lTS328azszUvFZauuzuhpYT2Chff8%2F%2BGD9mUyJvwhfebwwlvSBvQY6pgHOTN%2FM7mG1U3zbZxzYnpFMz8Ixlz5oVT3cLCnVP6eiK5kyl02%2F76DdIu28ipX22S8obfwb73Qkj4RavsmbC3cZ%2Bt%2BpDVE6%2FGEKqr7IRqvijDoUsGHbuxpzBg6ki1Bn%2BJbIIYyu8CfvKSjlafDY7XOa7749p1%2Bdev8mlFeCNrm%2Bpr%2FDUHhAPmsKieYnHEcbiI%2F8iWYMsvsS7oi3wpNavfmGvb6K0f4y&X-Amz-Signature=5f7aeef371427a7457ce8c0d4fc67e8d0f17cabda0ad6244d49ba1b39866b549&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
