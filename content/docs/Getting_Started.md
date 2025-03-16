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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX3WAAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGivfeFKbnAXA%2FJuG%2B%2F%2BfW4SLGOTBjiCMgqKSXmTBLUTAiEA8nH%2BPh%2FCdA0UKsPdkOZGdEwci7zCdEDB6RePsle7X5oq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMwcJ9uafp9PKmWQXyrcA9gXY08go3DNYYzF%2BbfKuDei6KiHtlbWJuvJHAqma2NHzh5qvsweh%2FYctkXTl%2FAh4Q7ewFS8U6lJXB7SS3ceywBdoKZUu9U8K8fSWI5tMfizX%2BX7sgA3AuIJui9zuDr%2F0HK0i%2BHp81xs%2F0M36RJ%2BiUtPEnCNScrktwBKW%2BkqjleoGCJmE%2FEZdseByJvLztnOiDK8U2XTcYvKxjC5GTcoXkWzW4n5Ys9A%2BthKuWoOjOnpKkJitO%2BhNgi2bEPig4fl54aJ9jpV09HPpLzozQKSorFhocIa%2FLKfc3LoUNRKhFu4yUU0VvWra2VhUZBQ%2Bj%2BzrNuZnJPGhgKMLOFBDx0EkiPnm19f%2BtAROk%2Fkw1Ajme0gaUI3IbW9%2FteKWsvtl8C%2F6cJtWDTStRlCM0CFem6EvNyD8120AOygV41A0Dkp%2BEByQt7nq49PWUO%2F4SqqV%2BZ5MA2X7pWjclxT4b7IwaGFIXxsDcbu6W18rTyZ2X2D8KwCWZfXCJjvbge5WQdA5JZDpZHOdFdnkI5g4xSwlS8xBpRAl253OTUlJ%2FEZ9mGB0dd6GtrekJnbl5fh9QBtJ26O8%2FY7nGe8ddS%2FiFuYol6RjOaVuegGipt7Hz0cYhbia2zY%2B3o7dg8KNBhtq4fMMJ3Y2r4GOqUBK53qwyHePjZnV2oJBInPzJDUZjQ0lPec3OKb7y9cF2%2FZWXMQ%2BsL7bF5X1MMP4TQA3uW%2BYHXtPsKkpF99520dam18WsW1fufKrr%2BwMQhj3TG1kllR658YXm16hFk3VB%2BUhJwza2QaMy7Sm%2BydwsX5W3gkYqNBAwjpGYcJ8NqlG2sUQuFqDhhSeXtfR7LIlcFw%2B1ENUbsztyQuJFd37LVvmW2e%2BrZm&X-Amz-Signature=3fc63d795763be6b7982f4fd86b9b3fab5aa26a697d76013a77f2c4ef99d511b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX3WAAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGivfeFKbnAXA%2FJuG%2B%2F%2BfW4SLGOTBjiCMgqKSXmTBLUTAiEA8nH%2BPh%2FCdA0UKsPdkOZGdEwci7zCdEDB6RePsle7X5oq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMwcJ9uafp9PKmWQXyrcA9gXY08go3DNYYzF%2BbfKuDei6KiHtlbWJuvJHAqma2NHzh5qvsweh%2FYctkXTl%2FAh4Q7ewFS8U6lJXB7SS3ceywBdoKZUu9U8K8fSWI5tMfizX%2BX7sgA3AuIJui9zuDr%2F0HK0i%2BHp81xs%2F0M36RJ%2BiUtPEnCNScrktwBKW%2BkqjleoGCJmE%2FEZdseByJvLztnOiDK8U2XTcYvKxjC5GTcoXkWzW4n5Ys9A%2BthKuWoOjOnpKkJitO%2BhNgi2bEPig4fl54aJ9jpV09HPpLzozQKSorFhocIa%2FLKfc3LoUNRKhFu4yUU0VvWra2VhUZBQ%2Bj%2BzrNuZnJPGhgKMLOFBDx0EkiPnm19f%2BtAROk%2Fkw1Ajme0gaUI3IbW9%2FteKWsvtl8C%2F6cJtWDTStRlCM0CFem6EvNyD8120AOygV41A0Dkp%2BEByQt7nq49PWUO%2F4SqqV%2BZ5MA2X7pWjclxT4b7IwaGFIXxsDcbu6W18rTyZ2X2D8KwCWZfXCJjvbge5WQdA5JZDpZHOdFdnkI5g4xSwlS8xBpRAl253OTUlJ%2FEZ9mGB0dd6GtrekJnbl5fh9QBtJ26O8%2FY7nGe8ddS%2FiFuYol6RjOaVuegGipt7Hz0cYhbia2zY%2B3o7dg8KNBhtq4fMMJ3Y2r4GOqUBK53qwyHePjZnV2oJBInPzJDUZjQ0lPec3OKb7y9cF2%2FZWXMQ%2BsL7bF5X1MMP4TQA3uW%2BYHXtPsKkpF99520dam18WsW1fufKrr%2BwMQhj3TG1kllR658YXm16hFk3VB%2BUhJwza2QaMy7Sm%2BydwsX5W3gkYqNBAwjpGYcJ8NqlG2sUQuFqDhhSeXtfR7LIlcFw%2B1ENUbsztyQuJFd37LVvmW2e%2BrZm&X-Amz-Signature=3457b28031d57c5d985bb5c7aaab80c5a1d85d40cd865de28d7d9c2413dd3ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665532W6TW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPfWwl5KUoyce0MgHv%2F0NpbT6AM6U3eW0NylSNP0%2FBnAIhAJnDClud30cbmsnZ6QPWcG%2BYCnU1lC6E1FLMSBXNfgXXKv8DCCwQABoMNjM3NDIzMTgzODA1Igy6AG2H%2Bvj71b2WIdQq3AOCE8YvoJ7Qx%2BMhg0G0DQxRQnLIqB%2BU7wgbVjP13kqjGGyDSQ%2BH4hjfGh%2BOHSZZtY77uThHaHsqJBRDlnkjDtF2uKYpgh3YbDP7OgqARy8np3B3nVzH%2Fwl1ScvSSovwey7%2BnFJ9HcwESVXUGIHpkd7McOYDJBZIto7cRq3KBnEoKRUml%2FsL63Al6c5BQoEAq2bEgLFh2iFmtkUu7VVCU5ACrgdjiEfLdLbVbwYK7cxW7rNam1RRw5ZbAyN%2F8Hflqyy0XCX99Pm3BpCd0kHuzzaR9usAPZYegQe7aEkGPwMqlnnh45%2F%2F6%2Bqn5Elkjp7q5UwMcajveVEW69pWey3KmipLEAkrSV158Iz7F3BGgWmVRWE%2BTy9uLPhzvQdra61AUSZNIE5NqkI1Bafi8cKQJaMM1eodNzs1hfs7GpAZZdBWyXi%2BhXjHvKkR7%2FNcQ22FxS8FgyvEL42cjr3t%2F4otQUbobkcREI%2B7GoEUl%2BynRzZoaVL6jtoSZSlAXpxVTvHm1CPGef1c%2FrnbwCyxunX3SBTLBxz7hwRDemIFLlQ%2F%2Bsc%2B%2BGkNdVTOJu6juyPd3zCSvOa42%2FHU%2BF2%2B%2FFpWItRODJ7X8rO1lmYHekPp2shhw4UsoOHggxGVaXQvnxYXDjDm2Nq%2BBjqkAW69zpMS00%2FG4tTxHOgEWIjUr4YVp6kuBv6rLcyk5DIozGEvUiYPt9wUiR7XOucj5xbv1K3D3BV%2B6%2Bt1hPXYcZJ9erANHji40zb6i3uG0kq9nwDDU5Xop9H0ORnF%2BXOILCkHDO%2BB7c4J0evR4xOfUv9bnWgmnXHEy5pUpFM%2FaL8puHwVii7%2F6POVUpmdQn3rcW7nKf3eNMD1yowb%2F2zXQlHbabFn&X-Amz-Signature=4e43ac065098be131e4654c135a54cccc4ec4adda829c29c55cd3c0080e8f460&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFJXK3R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDstzwyINYJ8uoyTajC%2F%2Fgwiac%2FL8fYgt9%2FDVDH4D%2BJVAiBDR082tzfduRyBDvPR0Jou0T%2FJsTV%2F3xnUiPTsmqtQHir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM9eaFEml%2FkeOxHVpMKtwDORzumMPaOSbqVIPigZ%2BOdCP5CLXUcCQR2%2BFnOnoznL%2F99sebzvXLX6bUu1RACDbYOKaBNlS2jDx7g%2FfgrLA%2BdP77VWfz9m30jE9%2FbR1QR9KxGKmUUWlh4PkqLYGqJxFq8I5GmHgdf%2FDqQh4URBTON3y6gSfhmvMPuxoMOHZIcJ20T557xn5Is29dOn0OdfN7IgxRY7Ejy3%2FLpw2ZqOtnAJSbxr4MPrIPRCfhoyopc13iyGoZkG5Zb6A%2F8KauUGfJcqV6%2B8RtgHpnuYXaz%2FhSkOtXZwfy5Ak2nGhX9NMcNQKdQgOUCcZPZ8yGhiAdQN%2FcI5w0RYllNyCd%2BItV7%2FR%2FkGFRVctsaaYN7U%2FGmwoMUVRrw51kZ1ywkj2s51wn641f5pf%2Fod11fzeU6%2BBToo2X%2B6AvW5cm2vItr0VGr2t4x0iBOnzILPsHnHkfzGHbhGP%2FmQ21PF4T2pGyVmJJZAzmEn3J5wj2bCstJWHTwyw04229SREU2xJW%2Fcz%2FpTev3Nq5bDR76pABk%2B5b63apaHwTb86P6g%2FdNADPy%2F5SkrZpmG8iiy1eOlnE%2B8qaL8gEeXJ4kgLa6reUQPZx7Rlk5o3pnYuepwX4cuQr4L%2FxX6KCfbSAF7v6%2BVw5EfqowuMwy9javgY6pgG7MuuDk30VI5d17OCs91feEDI4TvEytBuA2HEcqdzM3LpCjxRoB5D%2FPcrFi%2Frn3yPbPMFCQzl1pBFvzxf2exaezeF073LEmZtNat2u5H44WoCFenP2uXoETGMp8l12RZwk5SszgIAU5Cjyrxaj0k1mBT3l97O%2Fy%2BmJNS2clWBEF6%2BTL%2BYH7wHANBGbR%2FQOOx54WEqcyMZQMjQEseRKSVWMaJYIs7Hg&X-Amz-Signature=378ad448a62976ae6ef4714f638aa7097e5f920fcd57cbd1a31e6fd8bb31f895&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IX3WAAQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGivfeFKbnAXA%2FJuG%2B%2F%2BfW4SLGOTBjiCMgqKSXmTBLUTAiEA8nH%2BPh%2FCdA0UKsPdkOZGdEwci7zCdEDB6RePsle7X5oq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMwcJ9uafp9PKmWQXyrcA9gXY08go3DNYYzF%2BbfKuDei6KiHtlbWJuvJHAqma2NHzh5qvsweh%2FYctkXTl%2FAh4Q7ewFS8U6lJXB7SS3ceywBdoKZUu9U8K8fSWI5tMfizX%2BX7sgA3AuIJui9zuDr%2F0HK0i%2BHp81xs%2F0M36RJ%2BiUtPEnCNScrktwBKW%2BkqjleoGCJmE%2FEZdseByJvLztnOiDK8U2XTcYvKxjC5GTcoXkWzW4n5Ys9A%2BthKuWoOjOnpKkJitO%2BhNgi2bEPig4fl54aJ9jpV09HPpLzozQKSorFhocIa%2FLKfc3LoUNRKhFu4yUU0VvWra2VhUZBQ%2Bj%2BzrNuZnJPGhgKMLOFBDx0EkiPnm19f%2BtAROk%2Fkw1Ajme0gaUI3IbW9%2FteKWsvtl8C%2F6cJtWDTStRlCM0CFem6EvNyD8120AOygV41A0Dkp%2BEByQt7nq49PWUO%2F4SqqV%2BZ5MA2X7pWjclxT4b7IwaGFIXxsDcbu6W18rTyZ2X2D8KwCWZfXCJjvbge5WQdA5JZDpZHOdFdnkI5g4xSwlS8xBpRAl253OTUlJ%2FEZ9mGB0dd6GtrekJnbl5fh9QBtJ26O8%2FY7nGe8ddS%2FiFuYol6RjOaVuegGipt7Hz0cYhbia2zY%2B3o7dg8KNBhtq4fMMJ3Y2r4GOqUBK53qwyHePjZnV2oJBInPzJDUZjQ0lPec3OKb7y9cF2%2FZWXMQ%2BsL7bF5X1MMP4TQA3uW%2BYHXtPsKkpF99520dam18WsW1fufKrr%2BwMQhj3TG1kllR658YXm16hFk3VB%2BUhJwza2QaMy7Sm%2BydwsX5W3gkYqNBAwjpGYcJ8NqlG2sUQuFqDhhSeXtfR7LIlcFw%2B1ENUbsztyQuJFd37LVvmW2e%2BrZm&X-Amz-Signature=c8e3149ba4dc4502b3a434c604e7e2fcfe3975ae82c74ab21549371a269e285e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
