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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOG7JAC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuzWJHWZzRm8mv3Igk1uB1WJ4Ur07RbOTKW9b56zPdZgIgZQnBpc%2F7VZ2%2Fx%2FICLJRt6vVYfdTxcJk9vzyyNC1s5AgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv8r6nkbt5LWdQGqircA1Zlx0uSNoAWCjm8y3Y9CPRbUoKvCp%2BBNOr%2Bq0ymJ6tVCQztabTyD23g1PMkqX6xO8hKdnJ9JpJFPMnP0OQaQ3hvtabkInYO%2BvsLGWqoR2C7yiX3nhhVH56S%2BXK34f7ILpA3ezNwOyQDFps%2F4l6nMSVs2tMn5z%2FAB8wcrytT0h6nWM2iRJ4Ii6y3l%2B2B4K8drsgarxdAp75avZJPvSqmqYUa4SzEgLKV9fUCb37KvQE3MFvhWUvTiOSuPl2%2BHHHeEpbwokircenFfU0s8O2y2dT41MHN%2BPvIgGk1M4J04m4vAWABLvTzztfd4Z5jMDqmYXX8eQKyHG8d7D8PaM0rsvNs4Pvi0NPTzSfspyhJ%2F3%2FVX7bLTzC1ChlKBSUHWEoZxzaWSisLLymk2%2BtFqf7pxqkJ378WItm5Yhz9q%2BLZ8lzjFrTwbam29bqUPKOs1oi078ou9kYBYFatB5YcBIwkjcZEsEJdaoHDB3ryT2i%2BYrBuwoh5p8Sk%2BbhMzM%2F0MbMTnU4%2BTZuP%2BUVwomj6i5sa5e8TFJK%2BGfwGvBH4WmS1vdSPgxRCjdlSTj8%2B6wq%2F9UJVD9%2FNjpAq027NVXtEKnr22f%2Febm%2F2rpE4ZY5DjvoNmqui0demAfDRw0Q%2F%2Fzr0MM%2B50L4GOqUB6mgSrXkAtdc6L%2B08Zhl3XzpS6%2BT%2FjPpcYCVhZBf4vca%2BO%2Fl9Krjhm7NDtEUoVdMkIdEzQWKl4LHXuAujkZXAgm5mvonxsqWv4CqB23TSn%2FTKdIiM6%2Fyf9k5dnZUSZUTAnn4Nq6Bg4JiNZvXFWuMsO6bBw%2BFxiDzLuTgc0yRra%2FBKQF8WUE8B2uLgYED%2BLfw5E6GCNYdqf9YF9KUYWCvF2srlCldn&X-Amz-Signature=2f9be37741f42e187a7ebc3d296ffca5aea17e6856a1b210bd13f9bc2f4acb80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOG7JAC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuzWJHWZzRm8mv3Igk1uB1WJ4Ur07RbOTKW9b56zPdZgIgZQnBpc%2F7VZ2%2Fx%2FICLJRt6vVYfdTxcJk9vzyyNC1s5AgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv8r6nkbt5LWdQGqircA1Zlx0uSNoAWCjm8y3Y9CPRbUoKvCp%2BBNOr%2Bq0ymJ6tVCQztabTyD23g1PMkqX6xO8hKdnJ9JpJFPMnP0OQaQ3hvtabkInYO%2BvsLGWqoR2C7yiX3nhhVH56S%2BXK34f7ILpA3ezNwOyQDFps%2F4l6nMSVs2tMn5z%2FAB8wcrytT0h6nWM2iRJ4Ii6y3l%2B2B4K8drsgarxdAp75avZJPvSqmqYUa4SzEgLKV9fUCb37KvQE3MFvhWUvTiOSuPl2%2BHHHeEpbwokircenFfU0s8O2y2dT41MHN%2BPvIgGk1M4J04m4vAWABLvTzztfd4Z5jMDqmYXX8eQKyHG8d7D8PaM0rsvNs4Pvi0NPTzSfspyhJ%2F3%2FVX7bLTzC1ChlKBSUHWEoZxzaWSisLLymk2%2BtFqf7pxqkJ378WItm5Yhz9q%2BLZ8lzjFrTwbam29bqUPKOs1oi078ou9kYBYFatB5YcBIwkjcZEsEJdaoHDB3ryT2i%2BYrBuwoh5p8Sk%2BbhMzM%2F0MbMTnU4%2BTZuP%2BUVwomj6i5sa5e8TFJK%2BGfwGvBH4WmS1vdSPgxRCjdlSTj8%2B6wq%2F9UJVD9%2FNjpAq027NVXtEKnr22f%2Febm%2F2rpE4ZY5DjvoNmqui0demAfDRw0Q%2F%2Fzr0MM%2B50L4GOqUB6mgSrXkAtdc6L%2B08Zhl3XzpS6%2BT%2FjPpcYCVhZBf4vca%2BO%2Fl9Krjhm7NDtEUoVdMkIdEzQWKl4LHXuAujkZXAgm5mvonxsqWv4CqB23TSn%2FTKdIiM6%2Fyf9k5dnZUSZUTAnn4Nq6Bg4JiNZvXFWuMsO6bBw%2BFxiDzLuTgc0yRra%2FBKQF8WUE8B2uLgYED%2BLfw5E6GCNYdqf9YF9KUYWCvF2srlCldn&X-Amz-Signature=087dd07d1dd2fc634d52d712f6db537bc5b436416d48fa66498a57e77f69d1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG3MXFBE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5f5tjUuVki9pFpL10AhR0QDskuR7sBa0lJeujsWeMRwIhAJ1phYKG%2Bthdr12%2BlEEVH5Ci%2BrqMTTTSlpIEqrliqHZ3KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk%2FUssJeG1vm6j1bYq3AO7UcMjcdsHBFVlZ2IyDZdye6V9wpZUM6BYyl04P5mCt%2FjV4gto61SfFeaHfrADcvIEI6GOOaS9ICvZtWVcOJ6UKc6AoA1Po9tDq2V05hzOdUf1NjS37RTBx%2B%2FMf0a19YBYSHdFfIiyB6sseVxPgMND7miOUS53YTP5JUMSpGluDgsgHPNZQB1ID6puQV9ByWc5A6RSXisOd7hHv6n78vQPRLAvTpaOAKVeW5Q%2BdoCo%2F8Kv1AWv0yJ9oLetWytRW3aA2i0tE90hF3tCubUAVdLjtpVs1FltQ1uYrsnAy2v1VlKMyHoT7DBvSzJG6XG9MNBzEI7ltDkcWW1NWHO4tmXj3dT%2FT0K6UyfhysXyE3Q%2F%2BaGcpA4pFzO4pqM7es8iv0CQgf7X6lluh6NcXWQYMCoVeoj5M6Ap%2FNKBIPsQa8WbtolAUsTphFuUKThAkVW2pTTs8UJJhKzc%2FKUeZ7cUUvOILiwOIJjdqwDdv65ThbFRPkTP1i6%2BFlNR0Ta5UqzE%2FTppERPgEP5My%2FCZ5LbsJ2pgiz3FUODGGKzaUgE99m5cSdqdyMg1r%2FjCHJhI7bhNj%2BvLuPyInLANaGc1lJZVlxnlohxjgZdQqC1LPs8rH5c4%2Bg8ZCo61wS529fVd%2BTCfudC%2BBjqkAVfRSGsgfYjnMKrWHZnu%2Br8y49Ult9k9JrsQhHJnVZDC9OJ9ZkTtJffyCc3lAYbgZmmYD0drYTcuXDd2rOqPhtGSHD5CWFxKk6LoIqi5syWPEDlwhJyz1WjBBv2iln9cZE3dplt%2FhBhuQM3dkoHC8RblUGYT37VFGiwFt8RGfIWxhtByAVUd%2BAS5f8XccjRoDcVLH8BsvslODc%2Fwk%2B0WcMplZZdG&X-Amz-Signature=0969aaf751f67cf3042f38bed92ba7d50ba71e3d49952624ce8175fcf07cf714&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRSJC5U%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa4K8rN8YP3aYEyDOxpX4sWjQVXBmxTbPZi8SNByz%2FnAIgHdJyDlbhy8%2FkIQp6StPc6vgXJNc1SldjGPIewJTBFG8qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHivIvMaIsDuh8pCrcA1hbLrtiyOKhfJW06w0WLH7zbkpck3SM7gkje7xPb9qdN4cEWR37vRnL9j1oBIArljTzqB1L%2BOflcpwZS7KEdI00Wq3XD8rg%2BDWtY3l4p5y0x7L%2F%2F4GKCOzlYcbsu3V8V5QlKhKIuy3WTue%2F0uQi43A6AXtQzlENprnHZip2HdmzhYPim09lMFw7Wb7AbTUB6DJitg9abVWSEJWRPNoflg8cLZUOX0ExxX14lARx709txB3z7pOH%2Bu9%2B%2BntJXU6tRRQWyImWiT6MR199GWvjbS5QBNB2LYsJCJp8jcKJ%2FY%2B%2F06lcXrB6pKncNrBnl57hclV4QBe5Ed%2BzF57B7NAaXCR20TShVyLzgorhECU%2FMv%2FZ1YjgpPC0cxYMm4nxYq5HpL6Icm52Vk7o%2BQM1j%2B%2FiB2WG0Sj4FHeBhR%2FS1OcPK8b00Yk2ZqGEKQxWUpCEMIsbiHS304bGM1LMkU16jqfRW1uoMpexZGu2EbziJqRZbRrlNbsgOpDxiIF9nuu4S9WleTvkJp%2FN7hDnualnvXAo%2BZ36MRX8hFy1Xby8ehj%2Bl6oFVIBQFmApaAHHtow12Nk8e2uKK51LvJrityWys%2BGkGSuq9zHDwZWPXiGmTKDC4NPh4wnvsPptuezGg%2BLzMNq50L4GOqUBjSIK3LK5h3KyGNei0ZLesZx%2FdLxEdIxOsfGg0nW0d8iFZYgqqeV6DUh3Ve5rpKnWML%2BgIwz5vIyTSVNAE82TCBK9eeB9Vnc%2FoN%2FHLpL8VAtnG%2FkUiih4ojYf7Cb50vEV5eVNFlc3VoAk7cwwfpfmxfEiVbKrl8uQ6XF3PvIBofNSqdE%2Bhmi36xNQIDYO%2FuRkxovucHjYfOrizmW%2FA36Ls0OtQHCZ&X-Amz-Signature=7ace59fee6ce56fd18a9b8fc9cf664b2dc16b95f214c6e63471b89cb3d349bac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOG7JAC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuzWJHWZzRm8mv3Igk1uB1WJ4Ur07RbOTKW9b56zPdZgIgZQnBpc%2F7VZ2%2Fx%2FICLJRt6vVYfdTxcJk9vzyyNC1s5AgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv8r6nkbt5LWdQGqircA1Zlx0uSNoAWCjm8y3Y9CPRbUoKvCp%2BBNOr%2Bq0ymJ6tVCQztabTyD23g1PMkqX6xO8hKdnJ9JpJFPMnP0OQaQ3hvtabkInYO%2BvsLGWqoR2C7yiX3nhhVH56S%2BXK34f7ILpA3ezNwOyQDFps%2F4l6nMSVs2tMn5z%2FAB8wcrytT0h6nWM2iRJ4Ii6y3l%2B2B4K8drsgarxdAp75avZJPvSqmqYUa4SzEgLKV9fUCb37KvQE3MFvhWUvTiOSuPl2%2BHHHeEpbwokircenFfU0s8O2y2dT41MHN%2BPvIgGk1M4J04m4vAWABLvTzztfd4Z5jMDqmYXX8eQKyHG8d7D8PaM0rsvNs4Pvi0NPTzSfspyhJ%2F3%2FVX7bLTzC1ChlKBSUHWEoZxzaWSisLLymk2%2BtFqf7pxqkJ378WItm5Yhz9q%2BLZ8lzjFrTwbam29bqUPKOs1oi078ou9kYBYFatB5YcBIwkjcZEsEJdaoHDB3ryT2i%2BYrBuwoh5p8Sk%2BbhMzM%2F0MbMTnU4%2BTZuP%2BUVwomj6i5sa5e8TFJK%2BGfwGvBH4WmS1vdSPgxRCjdlSTj8%2B6wq%2F9UJVD9%2FNjpAq027NVXtEKnr22f%2Febm%2F2rpE4ZY5DjvoNmqui0demAfDRw0Q%2F%2Fzr0MM%2B50L4GOqUB6mgSrXkAtdc6L%2B08Zhl3XzpS6%2BT%2FjPpcYCVhZBf4vca%2BO%2Fl9Krjhm7NDtEUoVdMkIdEzQWKl4LHXuAujkZXAgm5mvonxsqWv4CqB23TSn%2FTKdIiM6%2Fyf9k5dnZUSZUTAnn4Nq6Bg4JiNZvXFWuMsO6bBw%2BFxiDzLuTgc0yRra%2FBKQF8WUE8B2uLgYED%2BLfw5E6GCNYdqf9YF9KUYWCvF2srlCldn&X-Amz-Signature=35c2b06182a5d0184caec42e654f937c2cab2a2437a56d07590d7f729cdb172f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
