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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGCDXVP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFWkZrzStVKgdIHAkwEBeeB5m9HTuPtMx4%2BNJM%2BEC6UAiAZmbOTtxcipLbSf0J%2B%2Bxiuytpc4tPAzXRhkhnM%2FXQygCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMflBNkDwCzcpIV%2B1wKtwDNaIKPFpxPwKK2kD8Wc%2F970%2FS4S%2Bw3qIaa13hEwNLeVGERGnE4WkKWT3l%2Br73b8ky%2FDrJLQDbsmRcitukMfJBmIs%2Bk%2FPnxgcqUP23F7B5x1QOp6TnO2ZTPCzL8bAK38nF37iPTcgVXCi4HvZ4VScsI3Er8ZGImthFpKVMT3vE2GAIXFKUR9ad4uAoqnZKMBcakjNVEWn7boEMyfwUPabOwUtwzgfa83zSguinjZEOauMa6ua4x79H8094HSRbOmezsU4OuxXjyZGN2NcVmf0PxPC0JqLP%2BEBGZdVTuAqGtZplCZjWoUTcB875PE3vHYhbhjofXxU90JSEmBj30vxkKPo0GrSlpryKLAsqD0TsW8TH%2BRatdDhRqacM1ZZg%2FcIaawPIZ1IEYK3lrg4wzyOi2po%2BtPTyspoRa7nBEUZmCd5Gs%2Bj6I5XioiuLdD%2F6gI5IJvytiRlKhwUOidYMZFBfaBhL%2FOvw1MxOihE7N1HwDynu3B4FuZL3x7WYS%2FBadmbxUbIFt8ZYKw6WPCPwVVv%2FRap2c8rkFp4oL5C9ZyA6%2FmNEwhEta%2Fip1QvPee0s1cICS%2FuoxtBPq0lC%2F%2BPvGOGPBYsKpV7i1WVHlfk8hRXrPuCutNjQEWx6hPK5nPMwlYGRwgY6pgFS%2Fzj%2FJc%2F%2FE03%2FZhzA1IbcGka74sDSs7y13iihqByLQ2DkehW20DMK4VOoiFkXpR0m8lnUXufjCW178XlWZPsiIJ5OHTQVHcVsZHvLsQ3LRHi8B3zs7Tf1BUTWgwb4%2FuKlEZ1ucHM%2FSS20Q7Or9VBHEQfaVbl%2B95TWvvhc3f93FdAEyWqVdYAmwU7bNTxtfNe7sUcJnDOfmD4Qc5bmEi9imiv0FNnu&X-Amz-Signature=2a8b6e55dd41ea09783ff163a663efea0cc312d8492aae2d602d88bb6013a580&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGCDXVP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFWkZrzStVKgdIHAkwEBeeB5m9HTuPtMx4%2BNJM%2BEC6UAiAZmbOTtxcipLbSf0J%2B%2Bxiuytpc4tPAzXRhkhnM%2FXQygCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMflBNkDwCzcpIV%2B1wKtwDNaIKPFpxPwKK2kD8Wc%2F970%2FS4S%2Bw3qIaa13hEwNLeVGERGnE4WkKWT3l%2Br73b8ky%2FDrJLQDbsmRcitukMfJBmIs%2Bk%2FPnxgcqUP23F7B5x1QOp6TnO2ZTPCzL8bAK38nF37iPTcgVXCi4HvZ4VScsI3Er8ZGImthFpKVMT3vE2GAIXFKUR9ad4uAoqnZKMBcakjNVEWn7boEMyfwUPabOwUtwzgfa83zSguinjZEOauMa6ua4x79H8094HSRbOmezsU4OuxXjyZGN2NcVmf0PxPC0JqLP%2BEBGZdVTuAqGtZplCZjWoUTcB875PE3vHYhbhjofXxU90JSEmBj30vxkKPo0GrSlpryKLAsqD0TsW8TH%2BRatdDhRqacM1ZZg%2FcIaawPIZ1IEYK3lrg4wzyOi2po%2BtPTyspoRa7nBEUZmCd5Gs%2Bj6I5XioiuLdD%2F6gI5IJvytiRlKhwUOidYMZFBfaBhL%2FOvw1MxOihE7N1HwDynu3B4FuZL3x7WYS%2FBadmbxUbIFt8ZYKw6WPCPwVVv%2FRap2c8rkFp4oL5C9ZyA6%2FmNEwhEta%2Fip1QvPee0s1cICS%2FuoxtBPq0lC%2F%2BPvGOGPBYsKpV7i1WVHlfk8hRXrPuCutNjQEWx6hPK5nPMwlYGRwgY6pgFS%2Fzj%2FJc%2F%2FE03%2FZhzA1IbcGka74sDSs7y13iihqByLQ2DkehW20DMK4VOoiFkXpR0m8lnUXufjCW178XlWZPsiIJ5OHTQVHcVsZHvLsQ3LRHi8B3zs7Tf1BUTWgwb4%2FuKlEZ1ucHM%2FSS20Q7Or9VBHEQfaVbl%2B95TWvvhc3f93FdAEyWqVdYAmwU7bNTxtfNe7sUcJnDOfmD4Qc5bmEi9imiv0FNnu&X-Amz-Signature=229b874567d5a562442978b68f672ac378352fd8ce5e5b3b6a3fc7d38d48400c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGCDXVP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFWkZrzStVKgdIHAkwEBeeB5m9HTuPtMx4%2BNJM%2BEC6UAiAZmbOTtxcipLbSf0J%2B%2Bxiuytpc4tPAzXRhkhnM%2FXQygCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMflBNkDwCzcpIV%2B1wKtwDNaIKPFpxPwKK2kD8Wc%2F970%2FS4S%2Bw3qIaa13hEwNLeVGERGnE4WkKWT3l%2Br73b8ky%2FDrJLQDbsmRcitukMfJBmIs%2Bk%2FPnxgcqUP23F7B5x1QOp6TnO2ZTPCzL8bAK38nF37iPTcgVXCi4HvZ4VScsI3Er8ZGImthFpKVMT3vE2GAIXFKUR9ad4uAoqnZKMBcakjNVEWn7boEMyfwUPabOwUtwzgfa83zSguinjZEOauMa6ua4x79H8094HSRbOmezsU4OuxXjyZGN2NcVmf0PxPC0JqLP%2BEBGZdVTuAqGtZplCZjWoUTcB875PE3vHYhbhjofXxU90JSEmBj30vxkKPo0GrSlpryKLAsqD0TsW8TH%2BRatdDhRqacM1ZZg%2FcIaawPIZ1IEYK3lrg4wzyOi2po%2BtPTyspoRa7nBEUZmCd5Gs%2Bj6I5XioiuLdD%2F6gI5IJvytiRlKhwUOidYMZFBfaBhL%2FOvw1MxOihE7N1HwDynu3B4FuZL3x7WYS%2FBadmbxUbIFt8ZYKw6WPCPwVVv%2FRap2c8rkFp4oL5C9ZyA6%2FmNEwhEta%2Fip1QvPee0s1cICS%2FuoxtBPq0lC%2F%2BPvGOGPBYsKpV7i1WVHlfk8hRXrPuCutNjQEWx6hPK5nPMwlYGRwgY6pgFS%2Fzj%2FJc%2F%2FE03%2FZhzA1IbcGka74sDSs7y13iihqByLQ2DkehW20DMK4VOoiFkXpR0m8lnUXufjCW178XlWZPsiIJ5OHTQVHcVsZHvLsQ3LRHi8B3zs7Tf1BUTWgwb4%2FuKlEZ1ucHM%2FSS20Q7Or9VBHEQfaVbl%2B95TWvvhc3f93FdAEyWqVdYAmwU7bNTxtfNe7sUcJnDOfmD4Qc5bmEi9imiv0FNnu&X-Amz-Signature=f120aac494e54228f70f5527d825173f8dc1cf10c414b9a551ad4715ad12d269&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QW3HTJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpW1o8IdKIGRXpJUsxl8jrUHRF7idjhrd1EceO%2BMTKgIgMlevsbJFjKyty6cowGFNvmB%2BSlfGvyMq3jMC0QxBeL8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLUS6AdrCONtbTT7ryrcA2l06RbDuZ6uqPv1opNALYFOkJvLNhsAKHKqjqSLZdavM77ocVv2c3d36WYvI8zdUtb%2B%2FQNCEtSweSjf0wZUN90MF61U3MZlqYM9XEgCHelw%2BSF2RvNt%2FEerBDm%2BVz3Hiv7zpNpMQ0iquacqX4yymPNN1nCvNJZfBkE28XOtJIQTjASBmXFzqzJCmc7MMTBV8r2BlwFMWnGd8ihEQ%2FoyyGXnVJ%2BC8FtsxVdOAx0eNvfQNyLwAzUvra8fdKeBLWuJkZ6mHcp0R1b4hhhJIqZilQJOVLw0mZqy3CZykrtX8k8931Rhu17s%2Bgc85ePxWmSypQbIJkOF8bfWy1H6RFjke0%2FtX4rlc9GYz%2BXlUck6WR4JvKs97f2zWL4hlZYuOubPgUHIbTPZ2sW0jmDdBkcMm%2FzO6gqGhlbDjDlcbMUcYtc7U8h8oBmQ2l71doTOsfRnTP49jy2ZkNtn5onhM6xYqy07WCALZ3zMEw92AQPrPGrdHPyBZpjVnp5cVEBGY90ed2sdfmP01bqNRCAXh3EDGKo%2FHzgepPoqHjPQcdV42dVNDqNeye99hmCmvTbJS7kDm%2FCXuFK0wfn7enLlt%2F2HNQ7cx8yazcH%2FkFTC1w%2BVhdiN1MMWIYHn4F56UdwzMPOAkcIGOqUBnQxWlrlADUksD21lQC9K7mSoEiO6CzcoyToe3K9L6RTMIcYFzFXAqlUpUAsHB6wTWrEGRXclfUqbFmz5Z5a9XefU%2B63d38uFr3LTWTc1EH2AwWNTMuC0L8q49y6AMSVCwhjZaBn30ih%2BWIL5G%2BA4UMESsXNgBUI%2FIuCAbYxPCplP%2B6FZ%2BDQGT5WwXeXS%2Fb7DpmSg%2FWaCWfmBUmQj3Lkc1YjI%2B34Y&X-Amz-Signature=b5bbfe4bec25de0baf6a3ba9b251cf62da88f7c0a631278520685e1b547d3deb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626MWOIYD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfHxhxBq3pZMvoKYNBeqOG5obTPK4fjAqPeEWcusjzQAIhAJ86xpBgVv7XM5ZTuMXf3huZg%2BC8YhvI3wUdVKneXRzUKv8DCHcQABoMNjM3NDIzMTgzODA1IgyLo%2BMy%2FytPzXl1h%2Bkq3AMNLA9kIcR5KUkF6T%2BUpZzUApcakDkFtXGFSQfMHQi2gc89QtqV5sDzJMPCt8wgFH98wylHKAwG%2F6p5GdnsSi6v6t%2FoSAk1%2F8tD9v4XAvTBPsuJp5Lak0FjgBBZ3iJTT3aUn%2FSZ%2BiLWQXt8SEcPfuWdmcmTPmeIgDaoQXobs5CjB2IONGRM8Pb68WcX%2BnHPevIhKkggggzTwKvTuqTl5uAhJXk%2BCTPpVc%2F7381C7l741syCVI2Ff1GWIscvowHXscXUV6o5IqcAvF1oTMPub9nK1MDzMzhiqJe33TSzGHUde%2BocExammpHogIzHIzfoI30iRDJx%2Fs%2FiRPPRMQd1oKtXfjRtBDLl7tsa9rfJAED1HNDu6CyJNICVfCBoQCv2Ow14FOdLvkOVEHipbUM24SvPGa5F2IzsgORSKgl6L19GltNbVBN%2F98awuEjBeAZgm%2BPzAyTisLwbsRiIsi13%2FGCKu6KWevg5qj3gfHAjTYGNnBZPG4OEvB%2FYPpSCA2HquuaOUTGWvz%2FheIaiHLKhtsaHyCRA8sFiUCar6F7cG9JM5drTkvvfjk0By73w%2FnFvSJ8lwKlpQ6NZo3qzZ5zcjFE8JeR3psdJ%2FwXyyot3rcrn0p9qBhYIeBlCz4PczzCjg5HCBjqkAZmMXpZkZuBm303Nr%2BBVGNWRKQbxjhaB3ku8ilksyzG5Z8FIhMIF130hbncOgd2SUEBvfsZAyUdu4wGIwHDO5oeY%2BFDrTHzVg2qsIZNG1IHL7DOQPmKRCswDAzTKXM6Nfuqp%2B1ZESeLKZ%2FJ8rQv8PsqlBcj7dajzUnguubYA9gQGSFZr5LxqzuF6EWBqCcu74xvkYMNn2JgBMOBid%2F7l2paFseET&X-Amz-Signature=7242e35aaadcd198a0a8f68f4675ceb14a195ab2f942fec4adb2ae1733f0bcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGCDXVP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFWkZrzStVKgdIHAkwEBeeB5m9HTuPtMx4%2BNJM%2BEC6UAiAZmbOTtxcipLbSf0J%2B%2Bxiuytpc4tPAzXRhkhnM%2FXQygCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMflBNkDwCzcpIV%2B1wKtwDNaIKPFpxPwKK2kD8Wc%2F970%2FS4S%2Bw3qIaa13hEwNLeVGERGnE4WkKWT3l%2Br73b8ky%2FDrJLQDbsmRcitukMfJBmIs%2Bk%2FPnxgcqUP23F7B5x1QOp6TnO2ZTPCzL8bAK38nF37iPTcgVXCi4HvZ4VScsI3Er8ZGImthFpKVMT3vE2GAIXFKUR9ad4uAoqnZKMBcakjNVEWn7boEMyfwUPabOwUtwzgfa83zSguinjZEOauMa6ua4x79H8094HSRbOmezsU4OuxXjyZGN2NcVmf0PxPC0JqLP%2BEBGZdVTuAqGtZplCZjWoUTcB875PE3vHYhbhjofXxU90JSEmBj30vxkKPo0GrSlpryKLAsqD0TsW8TH%2BRatdDhRqacM1ZZg%2FcIaawPIZ1IEYK3lrg4wzyOi2po%2BtPTyspoRa7nBEUZmCd5Gs%2Bj6I5XioiuLdD%2F6gI5IJvytiRlKhwUOidYMZFBfaBhL%2FOvw1MxOihE7N1HwDynu3B4FuZL3x7WYS%2FBadmbxUbIFt8ZYKw6WPCPwVVv%2FRap2c8rkFp4oL5C9ZyA6%2FmNEwhEta%2Fip1QvPee0s1cICS%2FuoxtBPq0lC%2F%2BPvGOGPBYsKpV7i1WVHlfk8hRXrPuCutNjQEWx6hPK5nPMwlYGRwgY6pgFS%2Fzj%2FJc%2F%2FE03%2FZhzA1IbcGka74sDSs7y13iihqByLQ2DkehW20DMK4VOoiFkXpR0m8lnUXufjCW178XlWZPsiIJ5OHTQVHcVsZHvLsQ3LRHi8B3zs7Tf1BUTWgwb4%2FuKlEZ1ucHM%2FSS20Q7Or9VBHEQfaVbl%2B95TWvvhc3f93FdAEyWqVdYAmwU7bNTxtfNe7sUcJnDOfmD4Qc5bmEi9imiv0FNnu&X-Amz-Signature=da47934e2b335cbcb95d603020972408f33bfb65b321a65ac3842ebf1244136a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
