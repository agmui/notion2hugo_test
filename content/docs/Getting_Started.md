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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCZJ6BF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDCliAi%2BifVobCeVkLy3xCIKiH8kRrrr9gstLJ2hjHgCAiEAx%2Bh3QUs7xKFUyARMmBzvKCMpva0Xcpy6i6PfMA%2Fs09oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAAm%2BuYJWCTM30%2FvrSrcA9m8zWKvi290cv2BGQ9ZcU3qVvEVRNzcWluKPgNpIfABkbzOdHmT8Rvk5R3eRi5VgOeyhDqsTg3W43ChsUAEFDs5QEl8DPsVram3ZnBzj7m2bBkLK%2BFI%2BETBKeAFFfTUZWifXjNI%2FEPPi9fzbBhPuF4LdBxVQaLmhiklhg5w7cLT3lAgI7OsfTaR7nKdcLtWW5j76rdQq5qKdrMPYrAP71tYQVCe8zCHbZ%2BX6hqm2Q5Tqp8mw1CNEcUR%2FYS%2BHCE73bF3pQhfRLv9myht%2Bmp7xctfF3Dq7dszs6PuBabOdd%2FNm65%2FoXAaiqEAvhd8UFGw7r8DdlJcmu2US2ou%2F6L24zARICJuynlEbsPqBxH%2FxYTBzOLHk5cuXhV0DxysEwzCEyV4qE6zeKpUJi6jbTa6PtdQJ58qv9yo8ckXDUgB5gBJiPPAUuWWpeLq9M0B5SQRCVE9N5Sb8dwt665FyipbkdI9OWrO7Ea%2FcM41CeljTY%2FB5JaBtFuZUOgPGKSfLq5VALBV4xT5UKFwtOI1LYStELWCWCVkwrRaqWqcqQiLz3kTXlrlaMd2SLaAUFe4ihpFGjtKjwzH32WuV%2F8uAojLuMBjkoYmO76c%2B5NgZJquWcj%2FObHNCP639Zbyi5JdMLurksQGOqUBMFx6K2hccXurSw%2BzOOMB3pp06ekR5y1FFLxJ1R9oiYPDgAKKLZ4ZoI19%2FDgvrJgzKI1z7tVr4rRryup96eeI460Uf6zBwJ3AG9P0cIEJkfYGz1BzWh2%2FQ4Ajqwjwi%2B3rTx1pmTvruWzSch1rm2M0%2B2YOFvdqIIo01O0YwRooYw6Z22pFRwexjI0CpUBLtkY3Z02ZwdYAeiOAQYTKJz73pXs0YIuX&X-Amz-Signature=a2f2fe9d375fe759590956ce8e35fac53153b38f10986d520b75083705db7255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCZJ6BF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDCliAi%2BifVobCeVkLy3xCIKiH8kRrrr9gstLJ2hjHgCAiEAx%2Bh3QUs7xKFUyARMmBzvKCMpva0Xcpy6i6PfMA%2Fs09oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAAm%2BuYJWCTM30%2FvrSrcA9m8zWKvi290cv2BGQ9ZcU3qVvEVRNzcWluKPgNpIfABkbzOdHmT8Rvk5R3eRi5VgOeyhDqsTg3W43ChsUAEFDs5QEl8DPsVram3ZnBzj7m2bBkLK%2BFI%2BETBKeAFFfTUZWifXjNI%2FEPPi9fzbBhPuF4LdBxVQaLmhiklhg5w7cLT3lAgI7OsfTaR7nKdcLtWW5j76rdQq5qKdrMPYrAP71tYQVCe8zCHbZ%2BX6hqm2Q5Tqp8mw1CNEcUR%2FYS%2BHCE73bF3pQhfRLv9myht%2Bmp7xctfF3Dq7dszs6PuBabOdd%2FNm65%2FoXAaiqEAvhd8UFGw7r8DdlJcmu2US2ou%2F6L24zARICJuynlEbsPqBxH%2FxYTBzOLHk5cuXhV0DxysEwzCEyV4qE6zeKpUJi6jbTa6PtdQJ58qv9yo8ckXDUgB5gBJiPPAUuWWpeLq9M0B5SQRCVE9N5Sb8dwt665FyipbkdI9OWrO7Ea%2FcM41CeljTY%2FB5JaBtFuZUOgPGKSfLq5VALBV4xT5UKFwtOI1LYStELWCWCVkwrRaqWqcqQiLz3kTXlrlaMd2SLaAUFe4ihpFGjtKjwzH32WuV%2F8uAojLuMBjkoYmO76c%2B5NgZJquWcj%2FObHNCP639Zbyi5JdMLurksQGOqUBMFx6K2hccXurSw%2BzOOMB3pp06ekR5y1FFLxJ1R9oiYPDgAKKLZ4ZoI19%2FDgvrJgzKI1z7tVr4rRryup96eeI460Uf6zBwJ3AG9P0cIEJkfYGz1BzWh2%2FQ4Ajqwjwi%2B3rTx1pmTvruWzSch1rm2M0%2B2YOFvdqIIo01O0YwRooYw6Z22pFRwexjI0CpUBLtkY3Z02ZwdYAeiOAQYTKJz73pXs0YIuX&X-Amz-Signature=dad1b1d6a82f9a287e22c8a59d91d988c50000cbd70537c663f050335993904e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCZJ6BF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDCliAi%2BifVobCeVkLy3xCIKiH8kRrrr9gstLJ2hjHgCAiEAx%2Bh3QUs7xKFUyARMmBzvKCMpva0Xcpy6i6PfMA%2Fs09oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAAm%2BuYJWCTM30%2FvrSrcA9m8zWKvi290cv2BGQ9ZcU3qVvEVRNzcWluKPgNpIfABkbzOdHmT8Rvk5R3eRi5VgOeyhDqsTg3W43ChsUAEFDs5QEl8DPsVram3ZnBzj7m2bBkLK%2BFI%2BETBKeAFFfTUZWifXjNI%2FEPPi9fzbBhPuF4LdBxVQaLmhiklhg5w7cLT3lAgI7OsfTaR7nKdcLtWW5j76rdQq5qKdrMPYrAP71tYQVCe8zCHbZ%2BX6hqm2Q5Tqp8mw1CNEcUR%2FYS%2BHCE73bF3pQhfRLv9myht%2Bmp7xctfF3Dq7dszs6PuBabOdd%2FNm65%2FoXAaiqEAvhd8UFGw7r8DdlJcmu2US2ou%2F6L24zARICJuynlEbsPqBxH%2FxYTBzOLHk5cuXhV0DxysEwzCEyV4qE6zeKpUJi6jbTa6PtdQJ58qv9yo8ckXDUgB5gBJiPPAUuWWpeLq9M0B5SQRCVE9N5Sb8dwt665FyipbkdI9OWrO7Ea%2FcM41CeljTY%2FB5JaBtFuZUOgPGKSfLq5VALBV4xT5UKFwtOI1LYStELWCWCVkwrRaqWqcqQiLz3kTXlrlaMd2SLaAUFe4ihpFGjtKjwzH32WuV%2F8uAojLuMBjkoYmO76c%2B5NgZJquWcj%2FObHNCP639Zbyi5JdMLurksQGOqUBMFx6K2hccXurSw%2BzOOMB3pp06ekR5y1FFLxJ1R9oiYPDgAKKLZ4ZoI19%2FDgvrJgzKI1z7tVr4rRryup96eeI460Uf6zBwJ3AG9P0cIEJkfYGz1BzWh2%2FQ4Ajqwjwi%2B3rTx1pmTvruWzSch1rm2M0%2B2YOFvdqIIo01O0YwRooYw6Z22pFRwexjI0CpUBLtkY3Z02ZwdYAeiOAQYTKJz73pXs0YIuX&X-Amz-Signature=a686e45ed18a32c6d1a5cec35eeb967b0394440ce81268398e3899cfde03a27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLK2PGJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIB7q28QD5IdtJDPSmSXRdGoGM5%2BsBG6KLJxftuO2%2BELJAiEA6MM10j22R8xXhMdJbR%2BDHkYIFhG7UYT%2BfehLbw%2BRkQMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH2FCR%2FxVYclQ0SaRCrcA%2F9bX%2FsZjGebYTX3yrLHYm6hjWyk4FuDLZDrhL05EFm%2B9YHXkZucPAVHJi5UH%2BcHIRmghwtRAy58jIp5v0Z9KC1YNuHCkm%2B04pNKOtvpFy%2FsR6lTo%2BIb4fIaSpI3qxtlvfCDumGxk6zTQwQTSNQYAp4FR7JDbb%2BqVlsnShJoV0ryALDYBEJ8I%2FnXfPmXvL%2FduNDRt5S0m3SE8ptykM6iunaxKxk6hQ9Wxt32LIS358zg2197FFMEqvgPPchxftykEhdOjSDwj1io2j8vbECujFDs2g%2BefY8XoAsdPh%2Bq5t2Y4SIaKm%2BfHfLj9NAf5hkQZmMizGcOXLcHToaHvxwnCwaAcP%2FLoFe%2BUm8gdnYKoqfnbE5yxHwclRlXtBIia1z7OIdok%2F%2F68B49aLDsKM5SnDeYufgYhoQj4%2BR7B8wLu8mfz4%2F684CIPnC3UtSOAAosBT94DO%2B7ybXMTHpdqJy2wrlA89LT3bCaLQRS28yfIbsR8Xrnn%2FgjVVGTx2xDOTspvVBCr6kX%2BqELzqUSaTcIadLYs%2BEEQodmGgs0FBAmgHHlsiwiW56PwNlJgz8RWjont%2FslDjOc3YY3aNEnXEJ97irvXsTIrwTrPJW5m2oWD04duRLbBBWhveFM%2BL9bMJqrksQGOqUBRXd2Y3u4mOlePWyRwG25b35q%2FnfGWX0L4IjjylVGFk3WZKqAEqikR2%2FqlhVyRL1e4qvJMkGmhVXVT6IZhLVB%2FU9a7o6YgTil6J6K9sF7aNdSJiBVJ%2BG4nh3dxvnIfdzRAoKSbeuGfPDl8CdM6DN9u5t8cMrCmt%2BAOuhLqmxwj%2BpbmZXYLTVD0o9XEShTrTtbz8CXzYQC1kkpKjW3G0zWHggokY7g&X-Amz-Signature=60650406520cf9ade0886004a7bd7350c7d25f7c932ba8cd74323721eb0afe18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZ3ZHNY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDyE5sxiFzCFU7nt5yhO8TGR556XdNG%2BVnbbnpQW%2BKOlwIhAPCO9Ox6ytrM7ZsjXdAt0YS3eopNJdSRjoxF9JYw7rTcKv8DCFoQABoMNjM3NDIzMTgzODA1IgzjQl1WCk8bVDdtjLwq3AMsLpD8JP43WM8g6kjfttdPaRbhJctO%2BXuF%2FSeRTUOZem8LTf%2Bj5SJFpZs6W96nCBOlz%2BVJBqkRPXVnBFoWOjVwiQQdlp6qjrN%2FhdJP%2BKIWWZh9KFi3gsk8GTVBHDZmo0v6qfLGKE251EVWJW3o48xRenfwQ4CNJT5tXMt8Gs20X0u00hsJ3tH5Ykwl3xOv3gMTpIa%2FOYsskHPgZqeyf65M7dQ3mWFtf%2Bk1F99MFAK5BbQJx0O44dLFprKAusypKwOQHzUYWaccsvGb0xzIs7z2ClEazXq27fSNpb2oQFWph6SofCU8pfZ1X42NtgBemeW92%2BMmJLSRUimJWoxA0jwAWa%2BmfWQiuqNKL%2Bumuel10fSwE%2BwSBcbDfii6o5iVqz7sDjiXYAI5wjrhCQsdVHwg1pjb%2BnYNF76FgEsEhVEXSiIfJ1pXO8Y4XckKg44pwvVVUDLjJbakSa1EZrRVEE4lcHShTgkxKChB%2BGm05COADDNZa20wfBOHBWm8jn6U9g3jJxxzNlqYJfIrEw%2B1Vr6JyBwa%2F6BkactKxwU6UW3XC81gCCajUMDsamUEGfBtMo3sGow0exx92Rd74Gtg0EYuZBeXZWktuAqoFuVAZV7x4ArmsD9K59taqRlt2TD%2Fq5LEBjqkAeYdYvB%2B2EvHrSjgtahNq2f3V2kzOQZknhQIPmvjDNWnJ83KGqovahznTENbF1o51Y68mBGaZJ21iKWMVTiA7ER14IDno93TzyLKajH9B6NIp9fqfkmSwNrbdboVIt6nZtM0Fd1SzdJuxwfu74b2ouT7o2ZQc3tv9t3oSApbQRXMYeApDaAReTcxIOCkquIVeNJIkLq5%2Foan7W63RRYHXUqQsoP6&X-Amz-Signature=e2b15bb5f437848285a4d1509b3a68907cb079c3c9f203b86a841dc1b74ba660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCZJ6BF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDCliAi%2BifVobCeVkLy3xCIKiH8kRrrr9gstLJ2hjHgCAiEAx%2Bh3QUs7xKFUyARMmBzvKCMpva0Xcpy6i6PfMA%2Fs09oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAAm%2BuYJWCTM30%2FvrSrcA9m8zWKvi290cv2BGQ9ZcU3qVvEVRNzcWluKPgNpIfABkbzOdHmT8Rvk5R3eRi5VgOeyhDqsTg3W43ChsUAEFDs5QEl8DPsVram3ZnBzj7m2bBkLK%2BFI%2BETBKeAFFfTUZWifXjNI%2FEPPi9fzbBhPuF4LdBxVQaLmhiklhg5w7cLT3lAgI7OsfTaR7nKdcLtWW5j76rdQq5qKdrMPYrAP71tYQVCe8zCHbZ%2BX6hqm2Q5Tqp8mw1CNEcUR%2FYS%2BHCE73bF3pQhfRLv9myht%2Bmp7xctfF3Dq7dszs6PuBabOdd%2FNm65%2FoXAaiqEAvhd8UFGw7r8DdlJcmu2US2ou%2F6L24zARICJuynlEbsPqBxH%2FxYTBzOLHk5cuXhV0DxysEwzCEyV4qE6zeKpUJi6jbTa6PtdQJ58qv9yo8ckXDUgB5gBJiPPAUuWWpeLq9M0B5SQRCVE9N5Sb8dwt665FyipbkdI9OWrO7Ea%2FcM41CeljTY%2FB5JaBtFuZUOgPGKSfLq5VALBV4xT5UKFwtOI1LYStELWCWCVkwrRaqWqcqQiLz3kTXlrlaMd2SLaAUFe4ihpFGjtKjwzH32WuV%2F8uAojLuMBjkoYmO76c%2B5NgZJquWcj%2FObHNCP639Zbyi5JdMLurksQGOqUBMFx6K2hccXurSw%2BzOOMB3pp06ekR5y1FFLxJ1R9oiYPDgAKKLZ4ZoI19%2FDgvrJgzKI1z7tVr4rRryup96eeI460Uf6zBwJ3AG9P0cIEJkfYGz1BzWh2%2FQ4Ajqwjwi%2B3rTx1pmTvruWzSch1rm2M0%2B2YOFvdqIIo01O0YwRooYw6Z22pFRwexjI0CpUBLtkY3Z02ZwdYAeiOAQYTKJz73pXs0YIuX&X-Amz-Signature=de1417cd629c5e9be18edd768bc6e5de02f015b395e5c2f0ca423fd2097dd309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
