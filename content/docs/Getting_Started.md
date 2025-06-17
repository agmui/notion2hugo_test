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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NX2F5M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyJFHXpbKHijLAEtx7v2v5YdEejTglkt0A8KDW9kdDAIhAIT9ox2RyKTvGOwgMGJVvJTE5xIc6Za1lA39UYYg3MznKv8DCHUQABoMNjM3NDIzMTgzODA1IgwTXykYnB%2Bd5bCdpHAq3APws3pA4U0pHOyPYajxCtwE9SvYXS%2FI3rDKsW96Dqt5U9w01zaT7RaC6OqFj4UGAAyZe0otxJY5GT07Y%2BPitV9RaqL3n0zorGoJvaAnz2TYUL7n3BLsMtoX6gCMYnEls5fW2TVcQHGjqfzB2VYdBbH6ZEOm2mX1rkc0vsEykYrmKVpvEit2w7hUBCmBv5mFLrXsbvgltutEbBCn5OwwLvU6RTQd5jNjs5lSLilSsL5kAvoYaED2Biuu%2FgA%2FBvhjJMan9e9mMesp2mJkN6aN7QjQ%2BwtfCP6OJ5C8mmZf5%2FzM%2BnO5WV%2F5Nm55LUCaVIagpaErmISKug%2FxIFWANsQNWocVaR%2Bi1AahgJAwRF%2BMY9WnadS1mYHAYNNqKDlxX8WckXZZVExaDs3azjXPNnl%2FUzSelT9OlEKeE4b3By02e2s%2F%2BYwcJbpXS6olURx6bpNpGRkd2Bz%2F53VF5P66dTxZr2WiyNGyLmEAXt7G8VD%2F3l4Dkt%2Bvzmvu4tcWQWT5%2BUDVKx%2F6UPpiHWdbGjR3nmYouYVxFTig1MiUePm5vNsQBBmTj3x7duUmCQcVMuIUv51aox4tQJHa8hmynNbCiw3szX3XwNr6Ftd%2Fjb%2FBFpKULxzQ79qtBDDOCgMkVCJIxzCgp8XCBjqkAeMfnebL5tLc9jRT9hi%2FPZixjdFkBtrbDCaFuQJw%2BwieREuuEK4XUUbYUye8XP83uZq1mAh5l0vCuOCPGq7GzHOqOCck2mEHJJlrlMTWU19fpbvs7qmzZZGcoWRoK%2FcQo%2BzI8nQG8XEq39zL8eevK8Ign4M2j%2F2DnggL1ZLq1evX5sOZM1rfP42%2Bx98vqkzGbanOJ6CyOVAptj6%2FCQIt%2F0JqWApm&X-Amz-Signature=26aec63111db903b22ec2602a7c5340ca84aac214b5b2b55b4159099f97b973b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NX2F5M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyJFHXpbKHijLAEtx7v2v5YdEejTglkt0A8KDW9kdDAIhAIT9ox2RyKTvGOwgMGJVvJTE5xIc6Za1lA39UYYg3MznKv8DCHUQABoMNjM3NDIzMTgzODA1IgwTXykYnB%2Bd5bCdpHAq3APws3pA4U0pHOyPYajxCtwE9SvYXS%2FI3rDKsW96Dqt5U9w01zaT7RaC6OqFj4UGAAyZe0otxJY5GT07Y%2BPitV9RaqL3n0zorGoJvaAnz2TYUL7n3BLsMtoX6gCMYnEls5fW2TVcQHGjqfzB2VYdBbH6ZEOm2mX1rkc0vsEykYrmKVpvEit2w7hUBCmBv5mFLrXsbvgltutEbBCn5OwwLvU6RTQd5jNjs5lSLilSsL5kAvoYaED2Biuu%2FgA%2FBvhjJMan9e9mMesp2mJkN6aN7QjQ%2BwtfCP6OJ5C8mmZf5%2FzM%2BnO5WV%2F5Nm55LUCaVIagpaErmISKug%2FxIFWANsQNWocVaR%2Bi1AahgJAwRF%2BMY9WnadS1mYHAYNNqKDlxX8WckXZZVExaDs3azjXPNnl%2FUzSelT9OlEKeE4b3By02e2s%2F%2BYwcJbpXS6olURx6bpNpGRkd2Bz%2F53VF5P66dTxZr2WiyNGyLmEAXt7G8VD%2F3l4Dkt%2Bvzmvu4tcWQWT5%2BUDVKx%2F6UPpiHWdbGjR3nmYouYVxFTig1MiUePm5vNsQBBmTj3x7duUmCQcVMuIUv51aox4tQJHa8hmynNbCiw3szX3XwNr6Ftd%2Fjb%2FBFpKULxzQ79qtBDDOCgMkVCJIxzCgp8XCBjqkAeMfnebL5tLc9jRT9hi%2FPZixjdFkBtrbDCaFuQJw%2BwieREuuEK4XUUbYUye8XP83uZq1mAh5l0vCuOCPGq7GzHOqOCck2mEHJJlrlMTWU19fpbvs7qmzZZGcoWRoK%2FcQo%2BzI8nQG8XEq39zL8eevK8Ign4M2j%2F2DnggL1ZLq1evX5sOZM1rfP42%2Bx98vqkzGbanOJ6CyOVAptj6%2FCQIt%2F0JqWApm&X-Amz-Signature=9071fbdafb4232d291ea5ad1e1c86147c6cb2afc5004d3a941e5b9d29ef4b074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NX2F5M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyJFHXpbKHijLAEtx7v2v5YdEejTglkt0A8KDW9kdDAIhAIT9ox2RyKTvGOwgMGJVvJTE5xIc6Za1lA39UYYg3MznKv8DCHUQABoMNjM3NDIzMTgzODA1IgwTXykYnB%2Bd5bCdpHAq3APws3pA4U0pHOyPYajxCtwE9SvYXS%2FI3rDKsW96Dqt5U9w01zaT7RaC6OqFj4UGAAyZe0otxJY5GT07Y%2BPitV9RaqL3n0zorGoJvaAnz2TYUL7n3BLsMtoX6gCMYnEls5fW2TVcQHGjqfzB2VYdBbH6ZEOm2mX1rkc0vsEykYrmKVpvEit2w7hUBCmBv5mFLrXsbvgltutEbBCn5OwwLvU6RTQd5jNjs5lSLilSsL5kAvoYaED2Biuu%2FgA%2FBvhjJMan9e9mMesp2mJkN6aN7QjQ%2BwtfCP6OJ5C8mmZf5%2FzM%2BnO5WV%2F5Nm55LUCaVIagpaErmISKug%2FxIFWANsQNWocVaR%2Bi1AahgJAwRF%2BMY9WnadS1mYHAYNNqKDlxX8WckXZZVExaDs3azjXPNnl%2FUzSelT9OlEKeE4b3By02e2s%2F%2BYwcJbpXS6olURx6bpNpGRkd2Bz%2F53VF5P66dTxZr2WiyNGyLmEAXt7G8VD%2F3l4Dkt%2Bvzmvu4tcWQWT5%2BUDVKx%2F6UPpiHWdbGjR3nmYouYVxFTig1MiUePm5vNsQBBmTj3x7duUmCQcVMuIUv51aox4tQJHa8hmynNbCiw3szX3XwNr6Ftd%2Fjb%2FBFpKULxzQ79qtBDDOCgMkVCJIxzCgp8XCBjqkAeMfnebL5tLc9jRT9hi%2FPZixjdFkBtrbDCaFuQJw%2BwieREuuEK4XUUbYUye8XP83uZq1mAh5l0vCuOCPGq7GzHOqOCck2mEHJJlrlMTWU19fpbvs7qmzZZGcoWRoK%2FcQo%2BzI8nQG8XEq39zL8eevK8Ign4M2j%2F2DnggL1ZLq1evX5sOZM1rfP42%2Bx98vqkzGbanOJ6CyOVAptj6%2FCQIt%2F0JqWApm&X-Amz-Signature=93475d47612dd57da442f74d7fc2f913b342e8f41b49d85269ffa294979e0243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2RH7XJX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0%2Fz7auEGQ%2FVutJtvQJjq1Zy83lR0FFIhxiWEufN%2FMtgIgfdoId8yLCZLZADRvMJpsoDqKg657ckGjp28%2B%2BjuxjpIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFx0n3SaOYT7NKYFCrcA0qiBSYgR5tZ6nf5p9NPjuSwuUuofLrO2yvLitPtZ8RkOMZvkF0Ts1mY4WAD3w2q3Q2PhT9RaIX%2FYzcK9bwuqJxHuMGAMvvVQdxx%2BZgMgCj3op6Uw7YcpV0WQGy4Z8bBYU%2FSaZRtQIkLL6JCajVjBZ2B6HHYEKii4AGH15JfGLq8E%2BR%2B7juG1iWqkOpVTzkoFIq3OHx5d11I8n1kzKUkcV398umScfcAvtPvBIt%2BNUG1EI6aTxGso1%2FnRN%2FG8r7Nq6dFGEL4s3Rb5uR7W%2FbzmHPe4NaJDo4IvXYfC0TK64%2BB5z1ZiFUf50tFMG3VRW%2Bfy4MbZcaRKfvgPNS%2BRCmtvYdmDVaI2ey7AuNC5dMkdNCBGdMS%2FBcGakahmsQEfxfs2Fyj1tK3y1ocYss9RNEocB7YM%2FSD68VfI%2BCslxbeHKWXd2%2F%2BrN7y8pvpzVjQYWigAv4lX2T1%2BuKkK%2FMMy9kg%2BldMfXMVyjfeKhCe0Tlp5ceNG%2BYttVPhk1cGR%2Biv%2BLgUTl3TNQL3jaiNNiHMzh8rmenSrP5U1gbHZqobrHty20rnn7gCT1mbgIdjeelC9SeZRAjhyuVlBXHcVpFXg5bYF%2B%2Bs3yGFrM7Yr%2FWIhcAA4YXWDq2Hi%2B953A3wYYX1MMamxcIGOqUBk8U6F9udSBqkaCRTGzEJ1vdp54MdDbs%2BwcXt4TmLIoLiW6I5cbrw38DOTphpU2A2ng%2BuGEf%2B3Mz8S7LxnB3O%2B0IifqEkvgKugUYNxjzTkSacIaN5AfjNZ6uUZbWaW6wGWm3QDksROSEgfkXsE4%2FCpI0fmhYV3ZEA9%2BEAGDLMnw6GWPLDGv1hpQUHM%2FvSCd6vi13nOSf4Jdk1xLJKSqpKuUalPnOd&X-Amz-Signature=ce3364904a2f51d4f9d7b93e635223e3b52f307b45dff3cc6f051597bd3a4b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF57RZUG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU6ixS7D%2BCWkzq60LJeECOMUGA4DGxhOIrMS34Ph3G5AiAg0CWEoZ7AM%2BAT85AuAnPGov5D4WBeB26hOXZPfa7SPSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM12wI61vTA%2Fn5eiGwKtwDFqaIUjORv6RNFGMe0A5BM7W8urhniq2EwQmm9ieDfpkoT1DAhk4yIIPEhUZW%2ByNpVXxlRF3LLzBBe7HkD3DXRpOAo7D1u6FnDr6psO%2BkqVFm3dndtxKTZh6ZoOdicRkVEWz3HXAorBv9ShneYGPhRNvInd8C2PiGool7uDrgDuJloVYLggCmEmjws8EIuMTH%2F6pNtIzz%2FD1nGNA0ItEZEkkXVIiQJB%2BhKMJ5psAkaY9urrSS1Xvausmn0ELEvQXo7LMMlBe1Fem0NLl3O7TtnuFAvRI7svFthyJWg%2FDDD7gQ7lXXHcSpiYIaZbYRGrT8v3oFF2sZXpj2NbKH5abME6HDJ2%2FvLowlDMPcMzBAW29nEX1sIcyXvxCfAFk8buen9rNTe2edyoSbWi8WSvZ4B2TLf%2BYjnCXkSzdSWUzi3z%2F5QjNRkppaG5TF3MqeRkImwsJbb%2BIrcg5dN3fvQL6gmoukT8VnKTAGvyt%2FpEN%2BCD6OdiWbgwtvwfxkkVy%2Fn6vHVxk0kia1u05%2BGDRYPGJw1EvdpRTpD2t0r82axgk%2FpdjO8522mQIiXo6gtGEu8wFc7hQd1OHoRSj%2FZC7QZP75Xyo6OPG1zQ%2B4BU5DgKi1qvAXlGTy3iZ5MUUa5qowuabFwgY6pgFTedtCiTH%2Fa9XAan44DDrKL%2B2Zhdg7assaQjbVJXY%2BVyB9wD%2Fuy52%2Bn6dA0xSWpojsW3EGoVUuH1aLf2DM92TGnyo9cpKz%2F%2BCAEwzwT5jur%2F%2B5o0hAlPH30l5imfVLAJ05imZSKxFqzZwJJBxuMKhSYtLVbezmuUqm9MIGlA%2BkLquZix5I%2BtBPMOgPsqcLPcG6M%2FEnV6A8d%2B0WcXw1%2FBacH40DwRus&X-Amz-Signature=5ee19bdf281aedf45ee1e8a9e2a8e59b398d22ae66657515bb947addaa01290e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NX2F5M%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPyJFHXpbKHijLAEtx7v2v5YdEejTglkt0A8KDW9kdDAIhAIT9ox2RyKTvGOwgMGJVvJTE5xIc6Za1lA39UYYg3MznKv8DCHUQABoMNjM3NDIzMTgzODA1IgwTXykYnB%2Bd5bCdpHAq3APws3pA4U0pHOyPYajxCtwE9SvYXS%2FI3rDKsW96Dqt5U9w01zaT7RaC6OqFj4UGAAyZe0otxJY5GT07Y%2BPitV9RaqL3n0zorGoJvaAnz2TYUL7n3BLsMtoX6gCMYnEls5fW2TVcQHGjqfzB2VYdBbH6ZEOm2mX1rkc0vsEykYrmKVpvEit2w7hUBCmBv5mFLrXsbvgltutEbBCn5OwwLvU6RTQd5jNjs5lSLilSsL5kAvoYaED2Biuu%2FgA%2FBvhjJMan9e9mMesp2mJkN6aN7QjQ%2BwtfCP6OJ5C8mmZf5%2FzM%2BnO5WV%2F5Nm55LUCaVIagpaErmISKug%2FxIFWANsQNWocVaR%2Bi1AahgJAwRF%2BMY9WnadS1mYHAYNNqKDlxX8WckXZZVExaDs3azjXPNnl%2FUzSelT9OlEKeE4b3By02e2s%2F%2BYwcJbpXS6olURx6bpNpGRkd2Bz%2F53VF5P66dTxZr2WiyNGyLmEAXt7G8VD%2F3l4Dkt%2Bvzmvu4tcWQWT5%2BUDVKx%2F6UPpiHWdbGjR3nmYouYVxFTig1MiUePm5vNsQBBmTj3x7duUmCQcVMuIUv51aox4tQJHa8hmynNbCiw3szX3XwNr6Ftd%2Fjb%2FBFpKULxzQ79qtBDDOCgMkVCJIxzCgp8XCBjqkAeMfnebL5tLc9jRT9hi%2FPZixjdFkBtrbDCaFuQJw%2BwieREuuEK4XUUbYUye8XP83uZq1mAh5l0vCuOCPGq7GzHOqOCck2mEHJJlrlMTWU19fpbvs7qmzZZGcoWRoK%2FcQo%2BzI8nQG8XEq39zL8eevK8Ign4M2j%2F2DnggL1ZLq1evX5sOZM1rfP42%2Bx98vqkzGbanOJ6CyOVAptj6%2FCQIt%2F0JqWApm&X-Amz-Signature=596e1fcb30e03417121f376af337b33d19548cf3ba3b2fadfb4797cccc9be412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
