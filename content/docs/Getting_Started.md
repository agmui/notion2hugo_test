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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPM2DHP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb5S%2FCkpbzsb5D%2FtNsrArO5hRVAVVYOlX73AQzXIYD7gIhAJzhJH9z5f394GBJx8yKWuJg1n57QMVFLxfvv0jmZjPuKv8DCFQQABoMNjM3NDIzMTgzODA1Igyn3wnpaB5bUrKH%2BtAq3AMMz00zMFvL0IKItr9zHAninilIny4PVi0fQ9iNEXp1SPgssJt0%2F05i5SNSObDRMVt6Bp%2Bs3MXbCzlXbrM4P6Ewm5epYyDVASIT86SMV9c%2BxZwD0Bg09P2FgF3MWn9ZJHFYI5JMBTcChFcZ9d9z%2B44TE5QzUBwrMZXJ150GitkZxNyXpVoQM8y0f2x6Nk%2FrsiEhO1bk196DGPyhgTj4OIydDDwmbABHqIpPaAKNwdhAr5dMyu2B8iu2nMmKFd2MKKOPx1shAKUe4VZiJ3TbFNk9BWcdGvexMn7j7CdK3Sy3i2BBaffhnN6N57WYJq1stJVrFssrkrhMC4s%2FDpktNtYowuOFH9LpgfHutv4P2pONP1DpPtcJ62ylNQuaLLZsYwkLsOeUksfPhwKozfQCKo6fmcwQ2Ud%2FVwIxVV40RnAfBCJ%2FVZUHbsM49iMapJIQh6R0ytTkuDq5AJl8XcHKGXI1kmo3J7hwlexXGE%2FKGcXeXyaZ5%2B8CdxPTF7DcETA20Txbh7n7L58Ru5Pcq3xvhShDzrBINKQKB70vntNfIinkf0u4g1DpRkOvp1itTP1Oq13QIPBC%2Bzf7PcE36pgcNrJn65XgjBrfPKMP0aKvop%2FlSnGxW7cR%2BjkXqcKlSDDOkevABjqkAUs0RWMqS6jz4B6wQpxvsBydT6gvk%2BaT2iTOVLasoM6suMkzm6X6IUhWvXZbQfPaE8GaV73r8yTL7TzcNKbs3APXYcc%2BD5ffp6J0wLTOH%2BSC4A2f44DFr4%2FM2A2AEAM8noDldD1q3ZA2ZEQTsO8S2yJ9p7Zu1E4LpOkHgI0dxwe26vRCdexMYlmFYgKrzi%2B3mClcMztBUlM2mEFBwauttoC6P1DK&X-Amz-Signature=2bc6e824fa5772692783ac2d3520059f3d008445228df313b2af1ac491acb658&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPM2DHP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb5S%2FCkpbzsb5D%2FtNsrArO5hRVAVVYOlX73AQzXIYD7gIhAJzhJH9z5f394GBJx8yKWuJg1n57QMVFLxfvv0jmZjPuKv8DCFQQABoMNjM3NDIzMTgzODA1Igyn3wnpaB5bUrKH%2BtAq3AMMz00zMFvL0IKItr9zHAninilIny4PVi0fQ9iNEXp1SPgssJt0%2F05i5SNSObDRMVt6Bp%2Bs3MXbCzlXbrM4P6Ewm5epYyDVASIT86SMV9c%2BxZwD0Bg09P2FgF3MWn9ZJHFYI5JMBTcChFcZ9d9z%2B44TE5QzUBwrMZXJ150GitkZxNyXpVoQM8y0f2x6Nk%2FrsiEhO1bk196DGPyhgTj4OIydDDwmbABHqIpPaAKNwdhAr5dMyu2B8iu2nMmKFd2MKKOPx1shAKUe4VZiJ3TbFNk9BWcdGvexMn7j7CdK3Sy3i2BBaffhnN6N57WYJq1stJVrFssrkrhMC4s%2FDpktNtYowuOFH9LpgfHutv4P2pONP1DpPtcJ62ylNQuaLLZsYwkLsOeUksfPhwKozfQCKo6fmcwQ2Ud%2FVwIxVV40RnAfBCJ%2FVZUHbsM49iMapJIQh6R0ytTkuDq5AJl8XcHKGXI1kmo3J7hwlexXGE%2FKGcXeXyaZ5%2B8CdxPTF7DcETA20Txbh7n7L58Ru5Pcq3xvhShDzrBINKQKB70vntNfIinkf0u4g1DpRkOvp1itTP1Oq13QIPBC%2Bzf7PcE36pgcNrJn65XgjBrfPKMP0aKvop%2FlSnGxW7cR%2BjkXqcKlSDDOkevABjqkAUs0RWMqS6jz4B6wQpxvsBydT6gvk%2BaT2iTOVLasoM6suMkzm6X6IUhWvXZbQfPaE8GaV73r8yTL7TzcNKbs3APXYcc%2BD5ffp6J0wLTOH%2BSC4A2f44DFr4%2FM2A2AEAM8noDldD1q3ZA2ZEQTsO8S2yJ9p7Zu1E4LpOkHgI0dxwe26vRCdexMYlmFYgKrzi%2B3mClcMztBUlM2mEFBwauttoC6P1DK&X-Amz-Signature=f8c6e4fc98695bd658a106cb985db459abfa5c1a37a8ff3706d334b6cce1b79c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPM2DHP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb5S%2FCkpbzsb5D%2FtNsrArO5hRVAVVYOlX73AQzXIYD7gIhAJzhJH9z5f394GBJx8yKWuJg1n57QMVFLxfvv0jmZjPuKv8DCFQQABoMNjM3NDIzMTgzODA1Igyn3wnpaB5bUrKH%2BtAq3AMMz00zMFvL0IKItr9zHAninilIny4PVi0fQ9iNEXp1SPgssJt0%2F05i5SNSObDRMVt6Bp%2Bs3MXbCzlXbrM4P6Ewm5epYyDVASIT86SMV9c%2BxZwD0Bg09P2FgF3MWn9ZJHFYI5JMBTcChFcZ9d9z%2B44TE5QzUBwrMZXJ150GitkZxNyXpVoQM8y0f2x6Nk%2FrsiEhO1bk196DGPyhgTj4OIydDDwmbABHqIpPaAKNwdhAr5dMyu2B8iu2nMmKFd2MKKOPx1shAKUe4VZiJ3TbFNk9BWcdGvexMn7j7CdK3Sy3i2BBaffhnN6N57WYJq1stJVrFssrkrhMC4s%2FDpktNtYowuOFH9LpgfHutv4P2pONP1DpPtcJ62ylNQuaLLZsYwkLsOeUksfPhwKozfQCKo6fmcwQ2Ud%2FVwIxVV40RnAfBCJ%2FVZUHbsM49iMapJIQh6R0ytTkuDq5AJl8XcHKGXI1kmo3J7hwlexXGE%2FKGcXeXyaZ5%2B8CdxPTF7DcETA20Txbh7n7L58Ru5Pcq3xvhShDzrBINKQKB70vntNfIinkf0u4g1DpRkOvp1itTP1Oq13QIPBC%2Bzf7PcE36pgcNrJn65XgjBrfPKMP0aKvop%2FlSnGxW7cR%2BjkXqcKlSDDOkevABjqkAUs0RWMqS6jz4B6wQpxvsBydT6gvk%2BaT2iTOVLasoM6suMkzm6X6IUhWvXZbQfPaE8GaV73r8yTL7TzcNKbs3APXYcc%2BD5ffp6J0wLTOH%2BSC4A2f44DFr4%2FM2A2AEAM8noDldD1q3ZA2ZEQTsO8S2yJ9p7Zu1E4LpOkHgI0dxwe26vRCdexMYlmFYgKrzi%2B3mClcMztBUlM2mEFBwauttoC6P1DK&X-Amz-Signature=8f41c504029644a8deaf4692febfcb9084684cf6b85667dd4ab75cd56c438e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X24EWQVN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr1kfRqUhKUIuUGkS3tjz499zqqUTZMHVLO1TgIQ5CLAiBsd9Cd6BkMYWRpGqnsIJDgDUjuLx0g2o%2BIQNLC%2FVqwZSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMzrU%2FSjFb0M4MwwkfKtwDSpDg0EBo0JsGn6NqgB%2FM5pK7LqxOxElxtk6d3wJQWifj4Bf%2BxumsdN6vNChClcuC98TKl1xMjRvTpDMFjOBW6IUwPapXoV%2Fo6VqCiHF2xPcBsKtLOR0%2B8GMDa8MmEiKNTr5IxZYwYUWJTTXuWEAVe2N%2Bz6iLIfSKG%2FYGvYEIRNVBHxakvu2miswOxKqG3tOSg3zNTqLMFUEClYWImjUzhAjkMCOSbkmNa9n%2BFwxqBi26uKo5ce4Yf%2FnyQJ9OF9SkJLGw%2BDk6fASlzZ5nDG%2BdCsNCf4u9lGEbNL%2BylRBYZZsM0CgLAxxbtTKXKFy2LpRBlLbWGyt1t9%2FH5zxN8VuYbhIQ1MoIl5IXFwMBAaEKEyhKLclCQYr7sfjiEJPDC5117sJ4c%2F0EyW%2F2%2F425wVaVqrYZp7H8hQpfHJLuB%2B0lVzVTm3iXSvrB9TjhcIHd1NlFB%2FtE%2BWUdaP4h9a1sjAwT%2FR1B1PVd9uL3h910pG%2FQwnRgouKKjdW3x8zEQhFLaN7huYVQ9s32OpokMYotWw1YD7%2FAgT8c3geoec4se9XfzOBASkEpbOHOpBd2nHtn2bJcInewRA8zLKHSmM28vz2oNDKZzEXu4dqknbEw26hTMOMx%2BEM316RgWSt5BdEwspHrwAY6pgFP18e5BknL2FIJXNoNxEHPspxUKXKNMVPlMmUYjOHd3C2Yj41ChNN0l94q9tQV%2BOQkuvbpaaTTeFkVLEagxBaOR9gI10cpJ%2Fy60mEmbTlukYhyasEbyWTPRyTY1OHZ59kXSnJCIXJ2%2BPjx6QqaXL7mO6lK9lc9%2Bx%2BYtKDsVaMGyIQsK79QXCxoYMBQxRf9zBvBUekaBys3FXALQ67UjWmuSEL%2FYb9b&X-Amz-Signature=e85b1ca76522b9a38983f7d0c2907959f7bd09ec1747a5f62cef3243519b312a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QS5F74D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxyQvMfiX7RHoZs0NVYJvkUG94DsQgSo9BAfuZSRxzEAiBorV2dFSEfI5%2Br1LeY6sR2y8Qj1vOKXx9kU%2B8hbzVT1Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMCD8OBAkkT%2BIQT8C5KtwDK8V32UQlOayLUVOhJiYrfkbBjtVT9yhegaLD2ontYAWU064b4iofkYwOVAgojGNzMpyhenNCh18OC5KbJluDoYYUeu1JnXP7AhUYMDsuzpcOKB3Un%2F%2F0iDi2ykUqTWyDHZU53gMg16RvGAgS4t4jIRfXAt%2BcKn3zNizez6vR8KWY2fJzo%2FeEPZQdOiR5j2gteOSU6mmklgmfEEBtCD9Bg6bz1DmeYGDqri6WVwz5gjASGjFiA3VpOq06FkJaYRyoobflNoDDVxt%2FP5DSNNud4SlMFqZadiHZYgrrXcqdcMZIy8wykOYSkU6t9WHoXzXZ1E1NKRkvMla%2Fk0CE0rOCBU5iNgpKuHyZrMv04p5EJA9snWFlgsSi%2Fj%2BuWay5x%2FAnd6TKEIG2YMAV3KYgVR%2B9vCbx%2Bc8XQSUhvHYg2bqjgPCQC7cpMqOYJfRWlSTaN%2BkpLC%2FnK02HHbbt%2BXAr0AWu%2BERAKvB5JBaazbXLiLAw0oFGiMskKT6hNx4TO5fmI94OL7FwFxh9hiQ3O%2By25JaPQElXEQHhcmPfsQAdHtWL6XVKJ22B0AmjrY71M2mTg1IEjJuRem3RBLHG8ZfmA%2Bis1hfNiVPOamCQr%2FfI5doMVCwIRZxLNPCpRSxKpP8wypHrwAY6pgELtTte%2FopzgVar94LeOZLB3jmeaKZTukmlEFcp4W2oWqJ26HJ19avbgUGU7dCQw0uFVb9yltUex%2BUbq%2BeFWft2%2BzkUlJgxM5LdQLn5hlkdv%2BzQpnY%2FYUlorzqUw4eioUNw9ML066OlgBb27JLZC7K8qR5r1ufH1%2BMxD6a1Cyu4%2FDmpZfPV0XUuxr71X2Z%2FvaT76Xq7T53wqp9aABFC7g0HTSypKpWR&X-Amz-Signature=295a2461798fcc7f2f869b0a640d91e96858e3e286374d9b10e5b5f61c2fb733&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPM2DHP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb5S%2FCkpbzsb5D%2FtNsrArO5hRVAVVYOlX73AQzXIYD7gIhAJzhJH9z5f394GBJx8yKWuJg1n57QMVFLxfvv0jmZjPuKv8DCFQQABoMNjM3NDIzMTgzODA1Igyn3wnpaB5bUrKH%2BtAq3AMMz00zMFvL0IKItr9zHAninilIny4PVi0fQ9iNEXp1SPgssJt0%2F05i5SNSObDRMVt6Bp%2Bs3MXbCzlXbrM4P6Ewm5epYyDVASIT86SMV9c%2BxZwD0Bg09P2FgF3MWn9ZJHFYI5JMBTcChFcZ9d9z%2B44TE5QzUBwrMZXJ150GitkZxNyXpVoQM8y0f2x6Nk%2FrsiEhO1bk196DGPyhgTj4OIydDDwmbABHqIpPaAKNwdhAr5dMyu2B8iu2nMmKFd2MKKOPx1shAKUe4VZiJ3TbFNk9BWcdGvexMn7j7CdK3Sy3i2BBaffhnN6N57WYJq1stJVrFssrkrhMC4s%2FDpktNtYowuOFH9LpgfHutv4P2pONP1DpPtcJ62ylNQuaLLZsYwkLsOeUksfPhwKozfQCKo6fmcwQ2Ud%2FVwIxVV40RnAfBCJ%2FVZUHbsM49iMapJIQh6R0ytTkuDq5AJl8XcHKGXI1kmo3J7hwlexXGE%2FKGcXeXyaZ5%2B8CdxPTF7DcETA20Txbh7n7L58Ru5Pcq3xvhShDzrBINKQKB70vntNfIinkf0u4g1DpRkOvp1itTP1Oq13QIPBC%2Bzf7PcE36pgcNrJn65XgjBrfPKMP0aKvop%2FlSnGxW7cR%2BjkXqcKlSDDOkevABjqkAUs0RWMqS6jz4B6wQpxvsBydT6gvk%2BaT2iTOVLasoM6suMkzm6X6IUhWvXZbQfPaE8GaV73r8yTL7TzcNKbs3APXYcc%2BD5ffp6J0wLTOH%2BSC4A2f44DFr4%2FM2A2AEAM8noDldD1q3ZA2ZEQTsO8S2yJ9p7Zu1E4LpOkHgI0dxwe26vRCdexMYlmFYgKrzi%2B3mClcMztBUlM2mEFBwauttoC6P1DK&X-Amz-Signature=532ba10ff6b43060d6065e6c9acb9699fdee16eeaf3e0fa9d234036336c19d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
