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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCBZTDX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTHVMSjYPe0veiHGoX7O0FFeyAi0cAnG%2FrOrTf8vTuKAiB0YDYp3q6DvOr8ncoAmH257UihxGYOtkLZQ5s3RifZjSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMt1WgsFIOiyNHhg4NKtwDPLA9mrqVxWdaswgy7CPCtnE5JqRv8Cbw51%2FXyunhzXUwryIgZAEfKQwT6oLXMdl3sE6%2FXYB5P56uy8R7Lm%2BTngHM%2FspiLKWodNRG6yPoFDKUPpPHgRe%2BlsCvDgLInNyqM%2F8mK3fPtcWZtMMDbJpafVbZiIWU26%2FNOkHJquXT7UgkLldktTlby9HZ%2B8QfvMM00xzdkQNAyWrjx%2BF9uS7NHBUsTZvC5oynSo%2FU29OC7SSFapGQzT%2BRzMdRqpDjrvIR7UFUBt128gI6NTfwhNpmsMnLawJFtsFbGrfHTf4aYdysc67exBqZQSQZYwxx77CK8oM%2F5urPqI5BwN%2FqMgMB%2Bz%2FMG09E4q7WkpLBGznidE3WzgHjn%2BCJrJP0j3yURM3F9%2BIEWOHumJMwjwB0PF1PJrxe10YewQqpyTXOGcje4fDLmrr2eJK%2FLQ9u6J6v6Eug4ddmf3deT9c2p9pED4eqRw8GW5Owvoqpsb0X3d%2FlqAWtoYt2lxU7WwIjO2hzr3jqkJp0U1vg2c2pUM%2BORzZSRYD%2BTS0HJRXnHmiBltWiV6kg3y2rLrGNJiHNaAk6FzKs65Eq%2BYZIl8NA6ulG%2Fxzc7Aj5ixM573DtfaIhwT5z3Qnkuw1UgvCuxHmlbGYwkKTKvwY6pgHOAx%2ByZqKsSVcaJa60bTxpd%2FNAQHkS0dvGrb3D8bsUvrNGQRaJhbaekK%2FmhKmtgOHYWkwQ6cIhRmbo5ry%2FZDbBnDKiAgJrIy%2Bc5NkK0FyGWJ3y%2B8wpVabhxRoNQc8NcU2rXKQYF5ADmwX%2FZI3vbp85LFueWvfCS5A%2FaZhq3A0TNF9fxjwd8YNBgauuAxa%2BStcCHrjeztfaJm%2FVZmsfCadmUeq1ZlP6&X-Amz-Signature=86c0665b2e50471bc9eecca1a210736bde9576cc482497302d400b575d096092&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCBZTDX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTHVMSjYPe0veiHGoX7O0FFeyAi0cAnG%2FrOrTf8vTuKAiB0YDYp3q6DvOr8ncoAmH257UihxGYOtkLZQ5s3RifZjSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMt1WgsFIOiyNHhg4NKtwDPLA9mrqVxWdaswgy7CPCtnE5JqRv8Cbw51%2FXyunhzXUwryIgZAEfKQwT6oLXMdl3sE6%2FXYB5P56uy8R7Lm%2BTngHM%2FspiLKWodNRG6yPoFDKUPpPHgRe%2BlsCvDgLInNyqM%2F8mK3fPtcWZtMMDbJpafVbZiIWU26%2FNOkHJquXT7UgkLldktTlby9HZ%2B8QfvMM00xzdkQNAyWrjx%2BF9uS7NHBUsTZvC5oynSo%2FU29OC7SSFapGQzT%2BRzMdRqpDjrvIR7UFUBt128gI6NTfwhNpmsMnLawJFtsFbGrfHTf4aYdysc67exBqZQSQZYwxx77CK8oM%2F5urPqI5BwN%2FqMgMB%2Bz%2FMG09E4q7WkpLBGznidE3WzgHjn%2BCJrJP0j3yURM3F9%2BIEWOHumJMwjwB0PF1PJrxe10YewQqpyTXOGcje4fDLmrr2eJK%2FLQ9u6J6v6Eug4ddmf3deT9c2p9pED4eqRw8GW5Owvoqpsb0X3d%2FlqAWtoYt2lxU7WwIjO2hzr3jqkJp0U1vg2c2pUM%2BORzZSRYD%2BTS0HJRXnHmiBltWiV6kg3y2rLrGNJiHNaAk6FzKs65Eq%2BYZIl8NA6ulG%2Fxzc7Aj5ixM573DtfaIhwT5z3Qnkuw1UgvCuxHmlbGYwkKTKvwY6pgHOAx%2ByZqKsSVcaJa60bTxpd%2FNAQHkS0dvGrb3D8bsUvrNGQRaJhbaekK%2FmhKmtgOHYWkwQ6cIhRmbo5ry%2FZDbBnDKiAgJrIy%2Bc5NkK0FyGWJ3y%2B8wpVabhxRoNQc8NcU2rXKQYF5ADmwX%2FZI3vbp85LFueWvfCS5A%2FaZhq3A0TNF9fxjwd8YNBgauuAxa%2BStcCHrjeztfaJm%2FVZmsfCadmUeq1ZlP6&X-Amz-Signature=79dfb3e6b66b3ec26b685e3766a08f834fb38cc757b54ed986a3f8d9fc362f50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RONWIOSN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BPc%2BPKkHVuPnSBbxDiK6%2BO0yfR5MB5OoF%2FW8zRMSIYAiAJ0hVtVZ3BEkJFG%2BNaRUykjX%2FSxl%2BflpJ8rksqq75xhir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2FB7B%2BseAyGHOulOcKtwDJBm3pZAiNpjmIU%2Bx1RugFguXXeiyryl1z1AFUakSEDCucI0dRmXl66U7GTilH6Km%2BAnaoFwL5MBWp4w%2Fsf8a3N9Q9X%2F4VVH6HqJ%2BuNAuW3kc4DSUE%2BCGDz6ML2qwoEz1FjShS9DDDtXy2XE2QroDdDAyOxT0nSaqYzwzmvz%2Boq8b4cR659lBAfj9XxSapK4%2FWVfOcp54K27wKzPEVTKt%2BIbLIycQ%2F0gi0D0z86gvOR9X%2FOK%2BhnZi4lI3%2Bbv%2FOTUEmW7wKR2UPvKgnyi578j73zJgugq1GAmSBIfTq7MmM11j5SDPf7fZ2Z4KYJRtSgdej45IxjdiX4lHb3DZnxdtqihPJaG1AbIjncbdd5MRzh26068QVS9kIWCCsQKFIu8CofgW0JO6VJMIlBCPDzINNqxQvqHYKh0NBHIwmIUVuGSRk2v%2BVyiTokEIMoXRwxmzibzU7QexEu24RFXvk1h1tDdbBendcaq0z6luWJEWDA%2BlKrmvkfDW0A5sM9y1HrTjBrRiPzH3eXpJ3CL0E5%2FFGmO0q6ecD67bwnUWhgZICKNA%2FB2HCwOIVk%2BQ81jMCWcrM2WAxKfQJ7XHtVlBylRSP27T0qNF7puYjqOsYrL7trwEXLxVNaXjAG3Z8PkwiJ3LvwY6pgGmS3DromKgZt%2BYHv7x55Vs8iwqEkmZWSg%2FZ8WNXXACQ4Xhw84GknynEWdCEkp0EWhnO3UEHb3Ki4hsq6XcnM2U3wA3%2F4o%2FBCipc92r7kG6aUKw7d8lyyCp3%2Bsv09AtWUbuRMvT38BZwmYmIWCM2RNBRWuEwdWQeeZLAUoJwCuqZwwKylTK%2Bfq5gXta1vzU59DpsuZyGy965D3D32HVfv5t9lfkSKVt&X-Amz-Signature=421af8e017642422d21704cbfcda090164554c9146d013ed9f1c850eff9e6587&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECGPWBS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF3OT%2Fk%2BggUaEqE9dahtbcS%2FswIUM%2BrSuMHbOy8icnTwIhAOEbiacObdVCw9h87vOOYMhBvvbjwv0AgWjtm1%2FDEL9mKv8DCEwQABoMNjM3NDIzMTgzODA1IgwNvccah8dNAIz4b8kq3ANImm%2BK28IrbaUyY7A83P%2FSifwpsgtt151M%2BZX5RCB15MGKnJYEhPdhWmca7Ks9zJDIRbq%2FbZSrEJRBJbbOO0u89STS5Sy6%2FnHOUrEirsFnRdhyI%2Fcq0%2FUAyMxVTiTvFTbUNEmBTbOFFmy59lYTI735wr11X7O6jhvUA7hOcw65Wm0IGJdOdNEY%2BMCL7oxPX81aAiNaEPiRujU26gPy09VRj6vk7TDClrcQCviAw6OQHqa9zGK%2FnCdt85RN3DEJDhWg96xU%2FHukzLIp2AUenwqGpMS%2B7rDH4o8u8yRL%2BXRFSNTaZR8dPtTNhk%2FZYxbX6dMEs6C5Gx67uPJiCx5yYtOW%2F3aXAsdasj8TB2pBhzBUocqjaVt1kiPGQub1PE1NPe4pSUhGR5gmRY7SP%2FS%2BVtbE7STIlOTK5mBui7nnF5p68706mSe6F%2B0q7tNAKyPJ4yKDhpgY0paXn%2F%2F36T0RAK8qTrJKoooieEMWy%2FZjoAoOQC5w4rqfl1bIHRoPMY5Y9xprqJiDDDoz0lc%2FPPjRM17REVsv2zo3fY8NLC%2BprttBgjwZZQu5OLFkSUci2CxrsFJ9UyY%2FuUyf3sBdDEo0klilsa1Kqaur4iwyJv6%2Fr0MmlFZuVxA6Q0oBPcLlkjDwncu%2FBjqkAR%2BWZEjcrGf7K73wtLRIsi1QH4YM0L0hxU4%2BjZgjhudNQyrrXPIntCUSgThlJm3KhR7%2FdsHVqko3ufWn01vldq9ug60iEigXUtO%2FEedqolsv8e4OfGN6gMUL%2BqhbbAHBoeJ94LYsK6KiYzGeHDbiYirumNqYQcclLsyZ5QXuyoZRNkwKwJX8j4tD4CUgek2MkfGtF7qjV2GsCK0tNOyI%2BbkmUIiX&X-Amz-Signature=e434026f05ce88407c88bdc48e6e7973aa3f6b9cc5a5c7a220d2e6116eb20398&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCBZTDX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTHVMSjYPe0veiHGoX7O0FFeyAi0cAnG%2FrOrTf8vTuKAiB0YDYp3q6DvOr8ncoAmH257UihxGYOtkLZQ5s3RifZjSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMt1WgsFIOiyNHhg4NKtwDPLA9mrqVxWdaswgy7CPCtnE5JqRv8Cbw51%2FXyunhzXUwryIgZAEfKQwT6oLXMdl3sE6%2FXYB5P56uy8R7Lm%2BTngHM%2FspiLKWodNRG6yPoFDKUPpPHgRe%2BlsCvDgLInNyqM%2F8mK3fPtcWZtMMDbJpafVbZiIWU26%2FNOkHJquXT7UgkLldktTlby9HZ%2B8QfvMM00xzdkQNAyWrjx%2BF9uS7NHBUsTZvC5oynSo%2FU29OC7SSFapGQzT%2BRzMdRqpDjrvIR7UFUBt128gI6NTfwhNpmsMnLawJFtsFbGrfHTf4aYdysc67exBqZQSQZYwxx77CK8oM%2F5urPqI5BwN%2FqMgMB%2Bz%2FMG09E4q7WkpLBGznidE3WzgHjn%2BCJrJP0j3yURM3F9%2BIEWOHumJMwjwB0PF1PJrxe10YewQqpyTXOGcje4fDLmrr2eJK%2FLQ9u6J6v6Eug4ddmf3deT9c2p9pED4eqRw8GW5Owvoqpsb0X3d%2FlqAWtoYt2lxU7WwIjO2hzr3jqkJp0U1vg2c2pUM%2BORzZSRYD%2BTS0HJRXnHmiBltWiV6kg3y2rLrGNJiHNaAk6FzKs65Eq%2BYZIl8NA6ulG%2Fxzc7Aj5ixM573DtfaIhwT5z3Qnkuw1UgvCuxHmlbGYwkKTKvwY6pgHOAx%2ByZqKsSVcaJa60bTxpd%2FNAQHkS0dvGrb3D8bsUvrNGQRaJhbaekK%2FmhKmtgOHYWkwQ6cIhRmbo5ry%2FZDbBnDKiAgJrIy%2Bc5NkK0FyGWJ3y%2B8wpVabhxRoNQc8NcU2rXKQYF5ADmwX%2FZI3vbp85LFueWvfCS5A%2FaZhq3A0TNF9fxjwd8YNBgauuAxa%2BStcCHrjeztfaJm%2FVZmsfCadmUeq1ZlP6&X-Amz-Signature=6046e8d5f065eaa8ef86983c2f86155deba098e64453686c4e82a9b41ea96671&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
