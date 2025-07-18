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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I6FPIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDckEvHbjQ0ZJhpg%2BRRB37Sw7CGcRfUSsN0WFNsiXpfrgIhAM8pakB10PME8rEXmexW%2FiY1EKZHMA2qOeNoPXY3oqlhKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV0rHMZWNd%2BFuC%2FJMq3AM8Ewuh70Td130IBSurFj70uNJ5zlYihvexHf7PdG2J7SK4jK2X7JFLA9r8otbyM9Vj5zs29XBVNBsd5xGRuDjuKq2doqu2nn3ayPwVFUQmcj2nimI6TJn90aOSsc84e0QuBqgCb2rO6zkZU0TsszvwF6I0VgVxhOQNA7wz2134phTW4xcFbBFQLsGG6zeLmQfZBtvnyFyLmCfDBfixcaaw%2F%2BrMHEYLqm16jkpv0Q5kmInSm696Tl17VY5075yoB1V26aCI5yziM8qOum4Ta%2BrhKZ1FJWBo12wN08fq0GeiCE9kie3%2BNSGI7Yyl1F9ibIVaPM7coLKsjEuGuFrZ5YYHX6wQzAV4O%2Bd0WR1PX89kmuNTaaxK2G6EXp2%2F4Pzxrpzk0ZxREPFfgX3%2BkY%2BFj%2Fe1iyNV%2B6meoKkcAr%2BuXLB%2BknAZDSTXYjdfXkDtrWZ8NphfUBkG0XUl5%2BFYy%2BVtFD0E7Wb5IBR3uVU%2FcIYtiAcKvXoT7aOf6NazGnxoKh4w3rxp0%2B9COPPKGwRy68ehce5IrxmJGCEk4A%2FEFqtHOwgdVChwTJyd7IkhiO3gHoCAWxId2Wop%2B%2FdITO29G0gpMn3mIzI1A5WMt38eQlC6te9DV%2BWhih8zg2sGZJkdZzDVmerDBjqkAXXrqfAkl1Cj4MXIM1BFIxgn2Thl1YS1B4sX1Ymk4onJXphjEYSuuIDk7iMkBhmL4wClATJp1WGDq4AvrnB4z%2F5N7%2FToKUcvWE1z6IT4G8gAXI2IR2pcc9CzQ3ummmfEdB4NMwqGcoWQiWUPpDh6sGWV1HLPXBRCok3FhbqXltzKFqQRIspuxYZwMpqtIRfbaoz5xU2h%2FpsrwbtztLKlZqf9bsy6&X-Amz-Signature=a556e7cc9afbc08a2e6c8dc01451bf10648278ca3e2955934eec5d965bb35d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I6FPIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDckEvHbjQ0ZJhpg%2BRRB37Sw7CGcRfUSsN0WFNsiXpfrgIhAM8pakB10PME8rEXmexW%2FiY1EKZHMA2qOeNoPXY3oqlhKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV0rHMZWNd%2BFuC%2FJMq3AM8Ewuh70Td130IBSurFj70uNJ5zlYihvexHf7PdG2J7SK4jK2X7JFLA9r8otbyM9Vj5zs29XBVNBsd5xGRuDjuKq2doqu2nn3ayPwVFUQmcj2nimI6TJn90aOSsc84e0QuBqgCb2rO6zkZU0TsszvwF6I0VgVxhOQNA7wz2134phTW4xcFbBFQLsGG6zeLmQfZBtvnyFyLmCfDBfixcaaw%2F%2BrMHEYLqm16jkpv0Q5kmInSm696Tl17VY5075yoB1V26aCI5yziM8qOum4Ta%2BrhKZ1FJWBo12wN08fq0GeiCE9kie3%2BNSGI7Yyl1F9ibIVaPM7coLKsjEuGuFrZ5YYHX6wQzAV4O%2Bd0WR1PX89kmuNTaaxK2G6EXp2%2F4Pzxrpzk0ZxREPFfgX3%2BkY%2BFj%2Fe1iyNV%2B6meoKkcAr%2BuXLB%2BknAZDSTXYjdfXkDtrWZ8NphfUBkG0XUl5%2BFYy%2BVtFD0E7Wb5IBR3uVU%2FcIYtiAcKvXoT7aOf6NazGnxoKh4w3rxp0%2B9COPPKGwRy68ehce5IrxmJGCEk4A%2FEFqtHOwgdVChwTJyd7IkhiO3gHoCAWxId2Wop%2B%2FdITO29G0gpMn3mIzI1A5WMt38eQlC6te9DV%2BWhih8zg2sGZJkdZzDVmerDBjqkAXXrqfAkl1Cj4MXIM1BFIxgn2Thl1YS1B4sX1Ymk4onJXphjEYSuuIDk7iMkBhmL4wClATJp1WGDq4AvrnB4z%2F5N7%2FToKUcvWE1z6IT4G8gAXI2IR2pcc9CzQ3ummmfEdB4NMwqGcoWQiWUPpDh6sGWV1HLPXBRCok3FhbqXltzKFqQRIspuxYZwMpqtIRfbaoz5xU2h%2FpsrwbtztLKlZqf9bsy6&X-Amz-Signature=14f02004b925b98fb56825c632b8d17a3a9a7cbeac1fa116dc71b48d262d183b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I6FPIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDckEvHbjQ0ZJhpg%2BRRB37Sw7CGcRfUSsN0WFNsiXpfrgIhAM8pakB10PME8rEXmexW%2FiY1EKZHMA2qOeNoPXY3oqlhKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV0rHMZWNd%2BFuC%2FJMq3AM8Ewuh70Td130IBSurFj70uNJ5zlYihvexHf7PdG2J7SK4jK2X7JFLA9r8otbyM9Vj5zs29XBVNBsd5xGRuDjuKq2doqu2nn3ayPwVFUQmcj2nimI6TJn90aOSsc84e0QuBqgCb2rO6zkZU0TsszvwF6I0VgVxhOQNA7wz2134phTW4xcFbBFQLsGG6zeLmQfZBtvnyFyLmCfDBfixcaaw%2F%2BrMHEYLqm16jkpv0Q5kmInSm696Tl17VY5075yoB1V26aCI5yziM8qOum4Ta%2BrhKZ1FJWBo12wN08fq0GeiCE9kie3%2BNSGI7Yyl1F9ibIVaPM7coLKsjEuGuFrZ5YYHX6wQzAV4O%2Bd0WR1PX89kmuNTaaxK2G6EXp2%2F4Pzxrpzk0ZxREPFfgX3%2BkY%2BFj%2Fe1iyNV%2B6meoKkcAr%2BuXLB%2BknAZDSTXYjdfXkDtrWZ8NphfUBkG0XUl5%2BFYy%2BVtFD0E7Wb5IBR3uVU%2FcIYtiAcKvXoT7aOf6NazGnxoKh4w3rxp0%2B9COPPKGwRy68ehce5IrxmJGCEk4A%2FEFqtHOwgdVChwTJyd7IkhiO3gHoCAWxId2Wop%2B%2FdITO29G0gpMn3mIzI1A5WMt38eQlC6te9DV%2BWhih8zg2sGZJkdZzDVmerDBjqkAXXrqfAkl1Cj4MXIM1BFIxgn2Thl1YS1B4sX1Ymk4onJXphjEYSuuIDk7iMkBhmL4wClATJp1WGDq4AvrnB4z%2F5N7%2FToKUcvWE1z6IT4G8gAXI2IR2pcc9CzQ3ummmfEdB4NMwqGcoWQiWUPpDh6sGWV1HLPXBRCok3FhbqXltzKFqQRIspuxYZwMpqtIRfbaoz5xU2h%2FpsrwbtztLKlZqf9bsy6&X-Amz-Signature=9c2556e26d0098c7d91fe57031c500ca7febdd95762575acf14f3c7b18729185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQOLEVZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBv%2Bk7jxSDh8farMDmJkeQ1aTUeFlMssRLf%2F%2BEhBjnItAiA4xFbeBSSUO1lCPUhKfuTZCxY7z3i4DU%2BcgxH%2BJ84oaSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61Z7Nh3aAGwYO3vKtwDVPpAmBeKNnJq8wiiBxlkFbFjJhyG8DJ%2Fw5QkkL4X%2FTpEg303u8AT6BMc9cUIshcvJSaAqU%2B9NwYwLncQfqkfdp48k9FP8mjNYJNePbQ3xS%2BUB3A1vuXTj%2BEbSc8wJirXY9RHZ%2B%2Fr0GZ7GN1NatG4w3u1S852RsKDYWBhG0mFeMJDiOBR5hsuJ6kP4TVzDpH%2BSQqc0k3%2B%2FFmJSmeI71CUehOhJ7jsdkgu%2F2%2B5sFQEOes8v6LqBomUCilKrh9097G40bK24Gx%2FW6ncNEgalePQjkvc27G3i4lGVgPh7m0hUn3YYH%2Bih8Yc1DhCBe2jZDQVnOKHLTytz5jPdBRhUuzktNIlwkW7%2BqZcD%2BTApbdFF1fIWLKrXCbJ46ftzDn%2BAPg5ojQnH89cyVImok5C%2FuN9LN2AIfBsBdNnwKkax7yRlsx40s4jGsYlxLXPUYrDGISNnd7M9oEh9tImDErKJktFOgVVPOYVXVrPRmvlvrmrwDwszq%2BLf1kuBjlhgYxpcT%2B5OGqIFxBsIrlS6iSWNubN0SBOz0uhFWwk1Spjpi2ZJ0wXAWhvHiF%2FcJ0E%2BMbM9nX1PENbCGk26XMKI2OwP9jeWR7MtbR%2FV322aSKQThP1bTxyl6BJeSeyUmAgq4Yw9JnqwwY6pgHDyImDG4Owu97jvJvjKuzTDbwjJeqb%2FicFrgzCLdYoWkZjCuo8cDnB5GCWgfnpAaAD46phOIMKu90DK6l1wCWOfOg8ThS8sZ9dk7YVwZVS8lNLQGSCEJFlYLGusIAOXEVOF8edHtVp6uWuqnQ64DEbjl6UdLwXtMlgR%2BTrt3WqUbVLJjFDqt0gNtOOBQVclGONGAFovavKWnorybANScT%2Fm0HR2jXy&X-Amz-Signature=3fa1a6c21b16431cd1ec114c42db3af04569550eb297694886d64d21cdb9fe21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIAZVLZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAMwI561er8OFsSPJ4u7RAdikuh39GEXFljErGZppfq4AiEA3ru4lNrLJ4fW3kRFU2Q4qxGS2IUgslwaG%2F%2F4crNY5lEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHS0kVqrUG%2BwZOY9yrcA19YMGMjg%2FnIKZ3560nHXEv7fxwWZIohRkwxykuIukazuGE2zbGWnDoblMlTBE5FlBxMUA8y0cvMdmjm6YQBRrmZodeDrb0ZOYd09Z%2F4lBx8ZaUh5SXyWqVbcFeX7zwWjFUCOkbXMAXx6K0w6Po2rYXkneDE3P054UBxIBcS3lq2G15OZGNP64%2BqZBuAFqCguU8wfFILCZeCU8lkLY%2FCDw0OtsK7c76yjNZkyjgWnh78C13mh3Zp%2F8ewPcIzzrHTzugXcSotI9RQeH5ct5VT1ZB2Q6NaG2k9L0eKcZVItu%2B%2FLQAamPd5zsl8imCr2MOkBUYaIpjlEd16B%2BolvEwpXc2OkMFcUqgnwuKKuUcpuhhaWBoJ8lxsxtqYCEosdPKum5DKPX31EqzgF0wn1WCwKy5Iz0lQ1ntkbrxBR2RGKQY5cBhb1HtaQAQaW%2FWtMfRaMYDAsbGHyeaNAr01PnBimjQQNCCEqyRz49EaOuR77mhJZY%2F6DOCnCd1a9wrYvY2VGWcz8hxh6CKsF0Xj7AgqANJd04MyJ4VoA%2B1t3NHmCFrFr9ucAhxU4vUgQgxKUmD6dSr0i8cSS0qEnTDWlgjuJd4i%2B%2FXkHqWuTNTelbzDpPQuWJ6A0LxUVkEFUFSPMJOa6sMGOqUB4QEGsdPzpK0tJZ35WzZ8i7KzWVw3yZlPmqZGoEXycrCFlvDgdZaInwBtR710KepCP1ejwTdStSrcm2IjpLfqBC9jjF5prpvyf0NihR6O%2F5J5oj376NoT%2FHO%2FUy15TekPVfdgYSNsDgub4oE2g9kiRlGD3aiRRIDWF2JsawA2DJihQAJiAfTFjBk8G9C4Qbesb3WKYGJ5%2B3Xj6mlWwgFzpc6cBMQ8&X-Amz-Signature=9f23fa98988e310627a38e2e4bd0370df2db02f7fcf36830c313ca1de71f294f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I6FPIR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDckEvHbjQ0ZJhpg%2BRRB37Sw7CGcRfUSsN0WFNsiXpfrgIhAM8pakB10PME8rEXmexW%2FiY1EKZHMA2qOeNoPXY3oqlhKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV0rHMZWNd%2BFuC%2FJMq3AM8Ewuh70Td130IBSurFj70uNJ5zlYihvexHf7PdG2J7SK4jK2X7JFLA9r8otbyM9Vj5zs29XBVNBsd5xGRuDjuKq2doqu2nn3ayPwVFUQmcj2nimI6TJn90aOSsc84e0QuBqgCb2rO6zkZU0TsszvwF6I0VgVxhOQNA7wz2134phTW4xcFbBFQLsGG6zeLmQfZBtvnyFyLmCfDBfixcaaw%2F%2BrMHEYLqm16jkpv0Q5kmInSm696Tl17VY5075yoB1V26aCI5yziM8qOum4Ta%2BrhKZ1FJWBo12wN08fq0GeiCE9kie3%2BNSGI7Yyl1F9ibIVaPM7coLKsjEuGuFrZ5YYHX6wQzAV4O%2Bd0WR1PX89kmuNTaaxK2G6EXp2%2F4Pzxrpzk0ZxREPFfgX3%2BkY%2BFj%2Fe1iyNV%2B6meoKkcAr%2BuXLB%2BknAZDSTXYjdfXkDtrWZ8NphfUBkG0XUl5%2BFYy%2BVtFD0E7Wb5IBR3uVU%2FcIYtiAcKvXoT7aOf6NazGnxoKh4w3rxp0%2B9COPPKGwRy68ehce5IrxmJGCEk4A%2FEFqtHOwgdVChwTJyd7IkhiO3gHoCAWxId2Wop%2B%2FdITO29G0gpMn3mIzI1A5WMt38eQlC6te9DV%2BWhih8zg2sGZJkdZzDVmerDBjqkAXXrqfAkl1Cj4MXIM1BFIxgn2Thl1YS1B4sX1Ymk4onJXphjEYSuuIDk7iMkBhmL4wClATJp1WGDq4AvrnB4z%2F5N7%2FToKUcvWE1z6IT4G8gAXI2IR2pcc9CzQ3ummmfEdB4NMwqGcoWQiWUPpDh6sGWV1HLPXBRCok3FhbqXltzKFqQRIspuxYZwMpqtIRfbaoz5xU2h%2FpsrwbtztLKlZqf9bsy6&X-Amz-Signature=43cd307dd5b49db780b690cb83f487aab6ad756604c4d902e566adc715fe06f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
