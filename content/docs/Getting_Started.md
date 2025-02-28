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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWSG2RF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD%2BK8enmuFdwffhz662Yc1d7k4GwdS0NWXwFWRehhislgIhAOaTgs9vD0ns7ATna7EFeRKzubhU%2FgH1VMChpdOcHd1mKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkY3uftS%2BpAEK4W8Mq3AMxTDAE5HdjMGpo9V%2BvZkHno2%2BTggJmTOZWdab%2F69vASwSIRM8N3x%2BV4A1lFTCXRWsJa%2FCN1OIyD15UzYQ5%2FkPK8ytelnGvqFngBKXVKpRjS9hf1gYlTbK6O8wYXlV2TUKLDc988zb6DkiLPXVDS7%2B6epFe%2F57B1S5DFeAzrJnjIqBbw%2B7y1dJtJePPgB%2FKecezQhgaWRFOOc%2Bcj4MOZ9EPfzxCy4kf9iDOaIFug%2BzBfbYYHpZAYNeE7yxHihsoEZhm93h%2BCwfMygnrM9hdNaz%2FPccDWTjsRkRn6%2F4%2FgRcT7pwqaceDXt5MWzN3GTCl2ksfInrvdVu3lGtheBh2xu6MoL4QtMRq4t0ge%2BaBvtLpcp9hUsRvfwDOBd5xs6bfek5DyGVOf0fvyXR4W698%2BgEzqfjKtiV8nJm50a8yJao0ml79Vr4Vw%2B2rZQZCybuQQAxHEg4JGubg1I8OoNcQyXpiNjMzzQYVhWfmHuy2uaA%2FkOsC8iXJIxiS8Jx%2BHQ2%2BTb%2FzSJdtYZnBAJ54cvNmWWiB7duJlhC2C2bbp3NhMUI9kl8BiAf9d1X%2FM9FyLBWRZjGHS2NdrZPJ7%2FDzz5NmuYwc%2BMwj0gBhH5fuWzBgO43wZU7V%2FVvhC82O5FPyvDDAi4i%2BBjqkAVJWs7hi%2FKzdGKolnz5T%2BGitduGjpJm6lrp6WZ3QkoyiCQjpfLSQMx1hOmBTnq1gB%2F8ud5OS%2Bl725sAxgIpNIcW3X62vZUMQinrsfBDj2qlRRKH2n6pgCT14RJmd%2BWeSTzm6XVSX6fykDscNcmjvFzKF1P2pwG0kly3cLHpX0V%2F1dviT6T%2FScCcO%2F%2FP3rVOSn1uIYutskrB97wjcsKOFWgPeiKB1&X-Amz-Signature=f559e60c3e8baa217d6b4cf018422dca312744bae2cbc2fba04b29d74cb86be8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWSG2RF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD%2BK8enmuFdwffhz662Yc1d7k4GwdS0NWXwFWRehhislgIhAOaTgs9vD0ns7ATna7EFeRKzubhU%2FgH1VMChpdOcHd1mKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkY3uftS%2BpAEK4W8Mq3AMxTDAE5HdjMGpo9V%2BvZkHno2%2BTggJmTOZWdab%2F69vASwSIRM8N3x%2BV4A1lFTCXRWsJa%2FCN1OIyD15UzYQ5%2FkPK8ytelnGvqFngBKXVKpRjS9hf1gYlTbK6O8wYXlV2TUKLDc988zb6DkiLPXVDS7%2B6epFe%2F57B1S5DFeAzrJnjIqBbw%2B7y1dJtJePPgB%2FKecezQhgaWRFOOc%2Bcj4MOZ9EPfzxCy4kf9iDOaIFug%2BzBfbYYHpZAYNeE7yxHihsoEZhm93h%2BCwfMygnrM9hdNaz%2FPccDWTjsRkRn6%2F4%2FgRcT7pwqaceDXt5MWzN3GTCl2ksfInrvdVu3lGtheBh2xu6MoL4QtMRq4t0ge%2BaBvtLpcp9hUsRvfwDOBd5xs6bfek5DyGVOf0fvyXR4W698%2BgEzqfjKtiV8nJm50a8yJao0ml79Vr4Vw%2B2rZQZCybuQQAxHEg4JGubg1I8OoNcQyXpiNjMzzQYVhWfmHuy2uaA%2FkOsC8iXJIxiS8Jx%2BHQ2%2BTb%2FzSJdtYZnBAJ54cvNmWWiB7duJlhC2C2bbp3NhMUI9kl8BiAf9d1X%2FM9FyLBWRZjGHS2NdrZPJ7%2FDzz5NmuYwc%2BMwj0gBhH5fuWzBgO43wZU7V%2FVvhC82O5FPyvDDAi4i%2BBjqkAVJWs7hi%2FKzdGKolnz5T%2BGitduGjpJm6lrp6WZ3QkoyiCQjpfLSQMx1hOmBTnq1gB%2F8ud5OS%2Bl725sAxgIpNIcW3X62vZUMQinrsfBDj2qlRRKH2n6pgCT14RJmd%2BWeSTzm6XVSX6fykDscNcmjvFzKF1P2pwG0kly3cLHpX0V%2F1dviT6T%2FScCcO%2F%2FP3rVOSn1uIYutskrB97wjcsKOFWgPeiKB1&X-Amz-Signature=ae3d7f730d2a5eb5ea9f4cb8d713009fcf462d974587767947ca8f9c3cdc6eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3NUBCXP%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBo9WN52BCmn75pkzAnEDBg9JTxeIv0ytGHutGli3GsgAiEA0HQ58O%2BXB8jfkTao82csWopCvqJtiz8KAe57xHCYR3MqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9A0W5R55zX%2B2Xf4SrcA00cdE1w%2BIWkpN1qjOrwkgNKiAAJajMVLpglwy%2BYuM7sdVmZhaMCe9%2BqRk8xRnRg5doaFpWXqqYY3ylkKudqvkeXp02A%2FH7WAUGmoaakd8Za%2FdNI6JCv18wfk0z50SSiiTPK0OpFKfmW%2BtQFa2AI%2BqIFrhg6ATypnHeMCAzUVdHhjLzJxuasnyz2%2F%2B20MbzJfPIu3jWOLyTI%2BJnSevxTlXqHL%2Fh4d%2FtT%2FQKsAUv%2BO0yOFrsBbZUNQL9Hb47rFSasl2evp7Ym3tTclwiUyE0uFnk1bT8JPSZFcqJEWGMriVUN%2FGsbP2Peb3GtzTrUbGWrqgkJ%2BQLI0yYWgBjD0ZQbRmO9MGgnWQ0aF1rI2U88xdXXk59vmCfRC5waYznsgjKKHeGiBybz%2BZn%2BWSdVOZ2c86zqUeP%2FryzXeE5j7tAF%2BigJFAcdvA2Wgoh6GqRZ15DZ1IZtY897RotmIQeLA0Bw1fmGdWfD6LvW81qxISVqo3Bi2wXN0K%2FZr0or3be7Jc7mLE0ttRLFrqt7iorfGuWxSYzRddebfdVet182%2FmsIe7cJ8%2FXLYGLCaS%2F7Z3%2FJMAmRQfEWx5SNIGmOyjXbO2scVwgGpCbrUiDYVwLsw5LrOpza3X5nCRAn1vulXVSCMO2LiL4GOqUBJSjEU7nyZjARsrEEx8ODCwLbdanKcGK%2BZoji4F76d4htMGbjYXooVcQyQYuixW%2FM9Kt7yUHWZJYOVvHN%2BTsMvxeL6iaBQ1xeJpEqstgC%2FXnM0DsKMnhwJcDURgrxRgiQ5ueYBpuKEvpAC6VsPamg%2FFm0xhs4P0VmfzlHck9LT2kzmfYA56XCxx9Yfq4ZHc9c0kGZr2RmsUc0uJWs3sNcw84uxUkL&X-Amz-Signature=2ecaaccea50ffb8fe68fa9b0a61f1135a7f468918a7bc0e76d0ff32c69e5c865&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIUUTPW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCfTVIoAkI3TBHM0Qs816Bq7yGnkufebd5eRj2OCjWOlQIgKDrfPc1549rIc%2B8lmes5GglgrCvGVpXSSoaXv8dVK8oqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5LbUMTdook%2FrFxhCrcA9Y0gWxs04Pzd52ZE9tgq%2FKNKJ9FV8v9I4tM2d632UIdSKQpMr8AderBHqfgBEQ1USdQ4kJhoGip9NckKyiDRvY0UVnTqttvBhLqynDbjDXgM9dYIA%2BPL%2BL9tqhSn9J9Uq5M%2FBBorSgbkd4Kl1g%2B3TNhoV8kOdEYf3xilrRVQutFM%2BVVS72zYqP7dJw7lEgeW%2BnrdEY7YFH2nmhT7cs1Xp9e3RIQPbhT2VEricqG6cXoj2OujvDCvelcoHO6mivh7qrlQYQbl4vZ9%2FH0aGn5HKEqFx6YRpJAzCGA9XzJ4nX5cNxlarWCcY3eRfwYMHPz8LXNTkOjlKvEYVpQs%2Fjk0dlkfN%2FS5fRJYJ4ddnsbt7%2F2YlfC0gpgXFfVdUwDrSkVf4YX78968RQ8g%2Fysx44kx%2Fk%2BJHucl72VgptgnzcBUCkCElJBb1mg9oztoTuvU%2BzsXXU7oo1WQIFym3kr%2B5lXYEHxAw%2FDfL9r3uABFk1ZQGylQ%2Fj5WbcaOy2QO59YQJv6ZdSMhtGmzTLUrsuQ3ohoD1hePAj9XYrLrrK8fK8j5OylNzXRrCMB1HXS5RMdp4vkHmRuzttN%2FuMbCSslub7%2Fu5%2FU2QdsW693GNJDYHXXSJioaFk460vx36k5vkpeMNSLiL4GOqUBTDkU9hZQf6ja3pEM8pR19Eq73hq9Okzv%2BWN9lazIHzLznLg93kElJqlXDCYRkWQJlDMygunwzyj2361y%2BKF7EvFsEhXF3yZ7NjB5Siuo8z7T5FaZjqjOUecTrvwBcitpDq3DlbF2S19UJEwtmHN1bwWUz08n8yCQQjJxYfyiVWSVAOQS2ArHNL0BsZby7s6hKZ7UodaGkD79oUUUO3THlUkCRmaT&X-Amz-Signature=0596558f98aa170f6281f35114464d7214b42d90f7726b85f56c115d3adb7475&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IWSG2RF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD%2BK8enmuFdwffhz662Yc1d7k4GwdS0NWXwFWRehhislgIhAOaTgs9vD0ns7ATna7EFeRKzubhU%2FgH1VMChpdOcHd1mKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkY3uftS%2BpAEK4W8Mq3AMxTDAE5HdjMGpo9V%2BvZkHno2%2BTggJmTOZWdab%2F69vASwSIRM8N3x%2BV4A1lFTCXRWsJa%2FCN1OIyD15UzYQ5%2FkPK8ytelnGvqFngBKXVKpRjS9hf1gYlTbK6O8wYXlV2TUKLDc988zb6DkiLPXVDS7%2B6epFe%2F57B1S5DFeAzrJnjIqBbw%2B7y1dJtJePPgB%2FKecezQhgaWRFOOc%2Bcj4MOZ9EPfzxCy4kf9iDOaIFug%2BzBfbYYHpZAYNeE7yxHihsoEZhm93h%2BCwfMygnrM9hdNaz%2FPccDWTjsRkRn6%2F4%2FgRcT7pwqaceDXt5MWzN3GTCl2ksfInrvdVu3lGtheBh2xu6MoL4QtMRq4t0ge%2BaBvtLpcp9hUsRvfwDOBd5xs6bfek5DyGVOf0fvyXR4W698%2BgEzqfjKtiV8nJm50a8yJao0ml79Vr4Vw%2B2rZQZCybuQQAxHEg4JGubg1I8OoNcQyXpiNjMzzQYVhWfmHuy2uaA%2FkOsC8iXJIxiS8Jx%2BHQ2%2BTb%2FzSJdtYZnBAJ54cvNmWWiB7duJlhC2C2bbp3NhMUI9kl8BiAf9d1X%2FM9FyLBWRZjGHS2NdrZPJ7%2FDzz5NmuYwc%2BMwj0gBhH5fuWzBgO43wZU7V%2FVvhC82O5FPyvDDAi4i%2BBjqkAVJWs7hi%2FKzdGKolnz5T%2BGitduGjpJm6lrp6WZ3QkoyiCQjpfLSQMx1hOmBTnq1gB%2F8ud5OS%2Bl725sAxgIpNIcW3X62vZUMQinrsfBDj2qlRRKH2n6pgCT14RJmd%2BWeSTzm6XVSX6fykDscNcmjvFzKF1P2pwG0kly3cLHpX0V%2F1dviT6T%2FScCcO%2F%2FP3rVOSn1uIYutskrB97wjcsKOFWgPeiKB1&X-Amz-Signature=85e084f86936c416064b323b78343423b09b06507046c6781e1a3ea8ee10089e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
