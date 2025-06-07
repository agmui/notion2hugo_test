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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUDLW3N%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBecD7Sunzqj5pU%2BctTPCGn5t8dOgko1Qi2Gp%2FMfAtkXAiAXMggvpYvYlLL2YcZkPU6cbXfjkboCdTJx3JqBROZDUSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0sJCICfgIw4JHoQsKtwDjyfIk1z6tOAVdaLDTTK%2B2%2BA91FKl5nCzKCyjDd%2FLii2UbRkGVpkrmomAHwOO%2FDwVDe0lCx3%2BFjctV0SaC3HnAsw8FGX60BSbDiVdwG%2Fx2mUtPeCErNBBGXkuZxcPpM%2BSk0w1KdmxA4x4ZfFxdL3jsYjbrKDo6UA%2BQuT3BIGOb%2BjoljjaqjMeCkWG3U6SCWKqCC4gB6oek64eUkkb2CZZYvUT1rFsjQJRWklVYYnzdbA6jne%2FnAsOn8ocNhR3v9wJgEzmatquqT03e5GDNun0pbIzIHV3HIWHbWCf9tDqndRnJr26DO2l9Pf9m1WEZqe56wg0tFLSuZNIHzh8hju1RYexZxHOVrx7ndbMGFTVWTdAWlmJMvLjB0rYmqx1AlbjM5%2F5%2FG3WUdN3qvNWO7xFZVhx%2Bu30caJxuLoP9viPCF%2FKzD8DNQk6n2zwhcynE7AAyW86vWRZiu6OpT9vbf%2BbVA%2B2DuUnHzPlkqAMy%2FIO8tFCE8e3MmWtiP1dmat%2F2f6GAKggyoL6WiF6FxwPxE8E%2FDW8c8Nt06ZOK1We0QgZI4dzUUYfvbznIlkA2eBXL85QYF%2BSqZ8D4fQx%2BHSOuC7NYhXj46sy4HUhcZrnMnSIWbL564njFvf9r9hGqqQw%2BcWQwgY6pgHpU4oBYKWD9uPgf5y%2FU7qKKK6dCjueXV6aHPTgXGBnJKi%2FXXbhs6Zw3RClzX6chNj4eMCPZQWvDWjbGt44X7tw5gb9Fjk7qAMi0Dz%2Fef2AC3fMvr06wZNbsO1qadliGD72jqxj1aYXFd90f5Onki9XkVKFmM9hG5Bn1DZkn0joXoma4uSojvutt1PDrpygbx%2FU%2BAvdxymAbAfuy2WozzYxGFH2D7sw&X-Amz-Signature=608ba66b9cf1f739515fd41943e6ef05ff8022d0590caf85b300f9a45624af25&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUDLW3N%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBecD7Sunzqj5pU%2BctTPCGn5t8dOgko1Qi2Gp%2FMfAtkXAiAXMggvpYvYlLL2YcZkPU6cbXfjkboCdTJx3JqBROZDUSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0sJCICfgIw4JHoQsKtwDjyfIk1z6tOAVdaLDTTK%2B2%2BA91FKl5nCzKCyjDd%2FLii2UbRkGVpkrmomAHwOO%2FDwVDe0lCx3%2BFjctV0SaC3HnAsw8FGX60BSbDiVdwG%2Fx2mUtPeCErNBBGXkuZxcPpM%2BSk0w1KdmxA4x4ZfFxdL3jsYjbrKDo6UA%2BQuT3BIGOb%2BjoljjaqjMeCkWG3U6SCWKqCC4gB6oek64eUkkb2CZZYvUT1rFsjQJRWklVYYnzdbA6jne%2FnAsOn8ocNhR3v9wJgEzmatquqT03e5GDNun0pbIzIHV3HIWHbWCf9tDqndRnJr26DO2l9Pf9m1WEZqe56wg0tFLSuZNIHzh8hju1RYexZxHOVrx7ndbMGFTVWTdAWlmJMvLjB0rYmqx1AlbjM5%2F5%2FG3WUdN3qvNWO7xFZVhx%2Bu30caJxuLoP9viPCF%2FKzD8DNQk6n2zwhcynE7AAyW86vWRZiu6OpT9vbf%2BbVA%2B2DuUnHzPlkqAMy%2FIO8tFCE8e3MmWtiP1dmat%2F2f6GAKggyoL6WiF6FxwPxE8E%2FDW8c8Nt06ZOK1We0QgZI4dzUUYfvbznIlkA2eBXL85QYF%2BSqZ8D4fQx%2BHSOuC7NYhXj46sy4HUhcZrnMnSIWbL564njFvf9r9hGqqQw%2BcWQwgY6pgHpU4oBYKWD9uPgf5y%2FU7qKKK6dCjueXV6aHPTgXGBnJKi%2FXXbhs6Zw3RClzX6chNj4eMCPZQWvDWjbGt44X7tw5gb9Fjk7qAMi0Dz%2Fef2AC3fMvr06wZNbsO1qadliGD72jqxj1aYXFd90f5Onki9XkVKFmM9hG5Bn1DZkn0joXoma4uSojvutt1PDrpygbx%2FU%2BAvdxymAbAfuy2WozzYxGFH2D7sw&X-Amz-Signature=d1c8fad035a498c2bb74f00995340e601292bfb159e7557bd7bcd36511b372e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUDLW3N%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBecD7Sunzqj5pU%2BctTPCGn5t8dOgko1Qi2Gp%2FMfAtkXAiAXMggvpYvYlLL2YcZkPU6cbXfjkboCdTJx3JqBROZDUSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0sJCICfgIw4JHoQsKtwDjyfIk1z6tOAVdaLDTTK%2B2%2BA91FKl5nCzKCyjDd%2FLii2UbRkGVpkrmomAHwOO%2FDwVDe0lCx3%2BFjctV0SaC3HnAsw8FGX60BSbDiVdwG%2Fx2mUtPeCErNBBGXkuZxcPpM%2BSk0w1KdmxA4x4ZfFxdL3jsYjbrKDo6UA%2BQuT3BIGOb%2BjoljjaqjMeCkWG3U6SCWKqCC4gB6oek64eUkkb2CZZYvUT1rFsjQJRWklVYYnzdbA6jne%2FnAsOn8ocNhR3v9wJgEzmatquqT03e5GDNun0pbIzIHV3HIWHbWCf9tDqndRnJr26DO2l9Pf9m1WEZqe56wg0tFLSuZNIHzh8hju1RYexZxHOVrx7ndbMGFTVWTdAWlmJMvLjB0rYmqx1AlbjM5%2F5%2FG3WUdN3qvNWO7xFZVhx%2Bu30caJxuLoP9viPCF%2FKzD8DNQk6n2zwhcynE7AAyW86vWRZiu6OpT9vbf%2BbVA%2B2DuUnHzPlkqAMy%2FIO8tFCE8e3MmWtiP1dmat%2F2f6GAKggyoL6WiF6FxwPxE8E%2FDW8c8Nt06ZOK1We0QgZI4dzUUYfvbznIlkA2eBXL85QYF%2BSqZ8D4fQx%2BHSOuC7NYhXj46sy4HUhcZrnMnSIWbL564njFvf9r9hGqqQw%2BcWQwgY6pgHpU4oBYKWD9uPgf5y%2FU7qKKK6dCjueXV6aHPTgXGBnJKi%2FXXbhs6Zw3RClzX6chNj4eMCPZQWvDWjbGt44X7tw5gb9Fjk7qAMi0Dz%2Fef2AC3fMvr06wZNbsO1qadliGD72jqxj1aYXFd90f5Onki9XkVKFmM9hG5Bn1DZkn0joXoma4uSojvutt1PDrpygbx%2FU%2BAvdxymAbAfuy2WozzYxGFH2D7sw&X-Amz-Signature=b3a2ddf26486ccaad18c7a61d25321af59468f3a8a1d1ad12f696f3614634ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDGOCYN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlJ9CPuuHJn%2BlyfGa7WrDIRZxjbqu%2BLTNSRc0wSna47QIgVI91khX0E6JYFqFq9lMF7anqfWH6hXTKa4slfpw%2FZwYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGy8SX65IsmGcJqBuCrcA3DWLy3Lt8w2TXGkkBJePkemyuuok8EAS6xXPm391RIiKxxAmqRZqfb6kjbr8cFMyBspv2p2QqMI51nho2iVgq9EAGWBRKyr1rqNJM4f5mtJ5%2BYbhY%2BP3Sv8WXkAaFSpZLlwpPBnokRBqC8r8JMlxTdDHf7ywVWr9UHT52asxG2sTJTqASzcJ6GTC5rbv7jlnnMIZYFWXjPrmL0j8gKk%2ByNSsX%2B%2Bv7cWJcI04yijpYSgVA1qPku0SBjtVAJ5F6a2Z6kVeZRqdb1qb86p%2Fpl8GjKFm%2B19XW0aGPzMM6p9O%2F2JBqV2bxFFNhBYHn6Yeweotxcc46uWJctsdoIL%2BaQ2Bdq1WN7E3JPZY64u%2Fm0EXu5bsJbLd14irqQXHoKS3RC%2Bh4oCo%2FjT7Wc%2BYAfsGujZ5aNFTSyLoLHUcChOgrhB%2BkCvpkGZv1oqS6UYytN187JSaa%2F2JU5mC2tgchbMJNdhhh5kfzizp2sQIYZlQVF%2B1gLMcyd9mLNXhzCq7hWoEHAXeP3NxhexZNGOhjDUjVGyUpXzPhGv2H%2BvuuEKbpS6Im%2FWV3wI%2FDVL1pT5x0InssqqqrWBpkSBEP64XUt5%2FqXGnyZMyYQlbpPh1T4cOZf%2Fgj6Lh0NnFJ22tmjBkTf2MN3DkMIGOqUBuZX1hLO5dNI2gmd0c1hJ6XcJadW6CZ7fzCUJhIUMUTQUMJz70Idaj7punh76NroZNex0KwbfIvphF7JAPyYIY2zDMLLIotbk2Ny1Qaf2fSbQP8Nuk7HOO3nONAmp%2BuuPs%2FloMu0OLjvSag%2B%2FSHV2tMUR8wZ1CMYreqfIXmhW63yc139j2AyMIu82nyf03iKGlYshBNlEShHfpBupUemBNZ1aNsKc&X-Amz-Signature=5112821df3e34da6a48e94ba8058810180030d2cfadbf4f38d1eceab25a93d62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646EQ7VXB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAuAw7j2nzrvy14O6n3SZB8UHj8Iaf%2FBRgBU%2F0rTmVsAiEAn1eoTXGDCb%2FNP4Y%2BUKWdbttpEGHHcuM1RfuBIKKjzr0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKun3zK4S6KhmUOo4yrcA185nUls9%2FNzGv%2Bj7E0BVVvfxlRBuPooRtCgPcoRKDTW0gVznPIQR2Jimnp5soLsbTLMsiLTQk1bNFruK0IBlcfVTT0xh6NTe7eykrQEZT70hh%2B9ax4pP08mHmU3ShSS%2FsqvFeHvbtChhjsolxw2gS3faGzbqliG8m97WExE5Ft3K8GL%2FqXhb%2Ff1%2FYzaFGgu6itrde5T2LC7eZggJJ8b%2FJ066bsdHdZ6Blm8sEhDqxCfsrOT%2BfG7WzA%2F7fIqsZWcdyhI5lrX9t00vk8iXaFkGznARx5Oz1WxBOasXhCSDjwSVF4S%2B2%2FPPF6WmEXeAgazv61hzuzHtUmpQwven2rsYkcO5PCpnKfwC8CG3TO4vqBm1Wf67sRRn5b%2FVVrem9UYTTQOpk6wsnsJUVCaPp1Q0kOb9BTZPJylHbyhTTgivsECzhHJ0w%2FKsJKnffQi7uv4%2B78lwqp7hX2QSvGt%2B5dCCI%2Fh2zmC8%2FHYk6cHLrOcby%2FAihLlbKrLi%2BMd%2FWm3s56XApvkkJLtHrQvN7rEPgVJ8Ge1lAwfnIa3cYmK5f1bifcBAJaINi346t8oqKfGk3YbHXmCUhmwX%2B2lciLzv3tFoStoy5JBhMDmlSymLvi9Q99N0n9ITkq%2FaG8xPRTLMNzDkMIGOqUBzc0AYqYE07eLKWYj4AjUfgjeYRyeKyAyvCJMM91mvRmmsLA1HUOup1DhBfN9ekwMWOQdoy27WmtyqUWiNNL5isz1dN1%2FF8SqvajAzuWYl6yNjVBTOCZyyctOhRPr%2FmdI%2Fvu%2FUo77TLw%2FYw8hM56HCVxUbIq6tXDMjuXbY1klEiKMBFj1RZPFoKOoxDlnJwY4GMnur1t%2FwYngXNjKq%2Bc0ELnxGd3c&X-Amz-Signature=91787448285d2c75a1f64a4ecd2b7dbe6d335246327759b11fc80f752f96cc39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUDLW3N%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBecD7Sunzqj5pU%2BctTPCGn5t8dOgko1Qi2Gp%2FMfAtkXAiAXMggvpYvYlLL2YcZkPU6cbXfjkboCdTJx3JqBROZDUSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0sJCICfgIw4JHoQsKtwDjyfIk1z6tOAVdaLDTTK%2B2%2BA91FKl5nCzKCyjDd%2FLii2UbRkGVpkrmomAHwOO%2FDwVDe0lCx3%2BFjctV0SaC3HnAsw8FGX60BSbDiVdwG%2Fx2mUtPeCErNBBGXkuZxcPpM%2BSk0w1KdmxA4x4ZfFxdL3jsYjbrKDo6UA%2BQuT3BIGOb%2BjoljjaqjMeCkWG3U6SCWKqCC4gB6oek64eUkkb2CZZYvUT1rFsjQJRWklVYYnzdbA6jne%2FnAsOn8ocNhR3v9wJgEzmatquqT03e5GDNun0pbIzIHV3HIWHbWCf9tDqndRnJr26DO2l9Pf9m1WEZqe56wg0tFLSuZNIHzh8hju1RYexZxHOVrx7ndbMGFTVWTdAWlmJMvLjB0rYmqx1AlbjM5%2F5%2FG3WUdN3qvNWO7xFZVhx%2Bu30caJxuLoP9viPCF%2FKzD8DNQk6n2zwhcynE7AAyW86vWRZiu6OpT9vbf%2BbVA%2B2DuUnHzPlkqAMy%2FIO8tFCE8e3MmWtiP1dmat%2F2f6GAKggyoL6WiF6FxwPxE8E%2FDW8c8Nt06ZOK1We0QgZI4dzUUYfvbznIlkA2eBXL85QYF%2BSqZ8D4fQx%2BHSOuC7NYhXj46sy4HUhcZrnMnSIWbL564njFvf9r9hGqqQw%2BcWQwgY6pgHpU4oBYKWD9uPgf5y%2FU7qKKK6dCjueXV6aHPTgXGBnJKi%2FXXbhs6Zw3RClzX6chNj4eMCPZQWvDWjbGt44X7tw5gb9Fjk7qAMi0Dz%2Fef2AC3fMvr06wZNbsO1qadliGD72jqxj1aYXFd90f5Onki9XkVKFmM9hG5Bn1DZkn0joXoma4uSojvutt1PDrpygbx%2FU%2BAvdxymAbAfuy2WozzYxGFH2D7sw&X-Amz-Signature=49b9c8875c34b485316f41fb06764224e52647e93163f13107737f32f2786c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
