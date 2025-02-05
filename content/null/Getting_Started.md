---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWVRUV6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC6AUz28T8HSK4mXNKTnk6eolGV%2FuEQJZ%2BlEDf4umYFswIhAIhKv7YqL5Qw9Gn3LCtF5LxMtEBhPzY79IS8JgetLKoLKv8DCDkQABoMNjM3NDIzMTgzODA1Igx4qmqSuP8GEXD23KMq3AOr0qTkMtuUWYxx937tBKoj9L9BD%2FYEBgSX51JqEeEwP4w5lLxEWtoqDN7kcXYdSs9mmK9m02uKaNiJOW0thPQ4opTbCt6p%2F%2FU0YkVd7eu5Bb2TQt2YwkAbePuik9Qd5WqjhzARA7K893e8uOk%2FLDmSZUKaguaM82tYxqUNUhnJncufszlEa9RNS34tllN6mLcCETDMtOCR6WCGPOLTft8%2BFLvAokCGLZUcrqyRnE5XmWFcIirco0vigauh8baw6c2vQ11UhZHzDxdOzetmk9tQOKxuaamAeANMTf%2BugeMj%2FQwa%2F02lORvLWCkxX4lG6K3L4kWV4CoYn4bNbrb9Pkjuxc8JsMZKhNDH%2BeHnKKJgOtPD87CsmBvcSmAQJu8gsmhbuhJkw%2FLeAl317YtVkqXGfW71PIlkcl5NEt46D%2B9ZoCpd0gVGeBAkHLVFdjYHa%2FMmdMkJLK5u5g5fO3CggMbW4un7ru9bJUsYirHqtM2V%2FX8FMtzD%2F7sdHcD3oJ%2BEqboDqXhCpOnHV%2BVKvf2PmHbJjhjE009HNyET%2FCmrOO1yI3nJYrXl3G%2F0H8zwXr5vpX%2Bibem8UotsCZsx2InCvvR%2BwlbSm5lwmUdxFQKjEsceJoArxspMINMo%2BdpiOjC1z4q9BjqkAcd0GvcM9dMvbHV5iqaKFlWAPO2%2FyXCiyjU07XD%2BdnQh8mtUkEKYeCZD8Hbp%2B97ZiZCGR08dC%2BmKfYMfE2N9%2FwUdN5vUPWTKsdQmsXa2MoBAObRQWTiApU286pAx35AKcvWS51GYjNiyVrvjjEQe0zO%2FtTsbfoB9JNsdjw%2FZEP8QpUhEulUn73zmJVGpKyjUJAwLBmOC1qyTtwPJchYWmjy8f9uO&X-Amz-Signature=ec1be9f6f71fd7eb950fc5f25d5c9df8688f92670cd6868e09f810bfa4ca7ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWVRUV6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC6AUz28T8HSK4mXNKTnk6eolGV%2FuEQJZ%2BlEDf4umYFswIhAIhKv7YqL5Qw9Gn3LCtF5LxMtEBhPzY79IS8JgetLKoLKv8DCDkQABoMNjM3NDIzMTgzODA1Igx4qmqSuP8GEXD23KMq3AOr0qTkMtuUWYxx937tBKoj9L9BD%2FYEBgSX51JqEeEwP4w5lLxEWtoqDN7kcXYdSs9mmK9m02uKaNiJOW0thPQ4opTbCt6p%2F%2FU0YkVd7eu5Bb2TQt2YwkAbePuik9Qd5WqjhzARA7K893e8uOk%2FLDmSZUKaguaM82tYxqUNUhnJncufszlEa9RNS34tllN6mLcCETDMtOCR6WCGPOLTft8%2BFLvAokCGLZUcrqyRnE5XmWFcIirco0vigauh8baw6c2vQ11UhZHzDxdOzetmk9tQOKxuaamAeANMTf%2BugeMj%2FQwa%2F02lORvLWCkxX4lG6K3L4kWV4CoYn4bNbrb9Pkjuxc8JsMZKhNDH%2BeHnKKJgOtPD87CsmBvcSmAQJu8gsmhbuhJkw%2FLeAl317YtVkqXGfW71PIlkcl5NEt46D%2B9ZoCpd0gVGeBAkHLVFdjYHa%2FMmdMkJLK5u5g5fO3CggMbW4un7ru9bJUsYirHqtM2V%2FX8FMtzD%2F7sdHcD3oJ%2BEqboDqXhCpOnHV%2BVKvf2PmHbJjhjE009HNyET%2FCmrOO1yI3nJYrXl3G%2F0H8zwXr5vpX%2Bibem8UotsCZsx2InCvvR%2BwlbSm5lwmUdxFQKjEsceJoArxspMINMo%2BdpiOjC1z4q9BjqkAcd0GvcM9dMvbHV5iqaKFlWAPO2%2FyXCiyjU07XD%2BdnQh8mtUkEKYeCZD8Hbp%2B97ZiZCGR08dC%2BmKfYMfE2N9%2FwUdN5vUPWTKsdQmsXa2MoBAObRQWTiApU286pAx35AKcvWS51GYjNiyVrvjjEQe0zO%2FtTsbfoB9JNsdjw%2FZEP8QpUhEulUn73zmJVGpKyjUJAwLBmOC1qyTtwPJchYWmjy8f9uO&X-Amz-Signature=75befc628d91fe6f093c42ccb6f1766cfb74caff172bb823314b6223df816309&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG37RLQE%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCGGXi1%2BPE8%2FKlhajxa3BXS8iU8tf7h%2FpRFhCyXMUAz2gIhAKSjVnI8Yo65g8pD8skyelkX6KnQe6KXmDUfaQdCACSIKv8DCDkQABoMNjM3NDIzMTgzODA1IgyCDoBldlxyq5AVlEAq3AMDZq5GbzfeQdRs0nUHqo%2BicU%2Ff0osDN3GXgmB7rQgwYcDknvyZeLdxeG3D1r6V0QeSiMx12IShQyjT%2FWKn%2BtVs4ayPFBWGTSVWjGl2%2BkaQvH%2BCchWkdsymYFODr7pxTqtazUjRvFwnYENo3u2qYdlAqiZ%2BS7uc1lDN8ELMH%2BNOsrh5xtyWz5CuckHPbcOZmovYekGk3IUNrzXrHIdO30ltjnJG%2BUqz7TZ0K0%2Fcc5LeJZO5vyxIPsFarfmFZ4z39mI5%2FEFKh8FMiIV2XsC9ThXRPKTw8Mycuv8yPC1LomtE3zEpepl3DvtvTYAAMBnmBml4XIPYdFD6kO0ea%2BFOiInvUjurFH4qQLqP9yPMwLTMcafatdng4MSw%2FNSF9cbiwXf7rLUD7%2Bh%2F2QM%2BQrkG%2F2QlSiqcb8z7Ind6t8buOdT5CecQInLHbsm9070xxcnuuCNVBsqmwOaeJjQv8c8DKAYhfjNlCiqskMmBdw793N1I%2Fx6p3viAhpu81KL7ZWY1T4FlyuBMDykdruFt3aGf7S%2BLlkuBpK0xeB9UUP1soPqbA0oP9IT1HaXGrAzkhGHHT16pigTRtq0vGUAO0A9TVuUI2UR%2BRQLzTiAEVqUYgvbtVC69BvjXFasrADitizC%2Bz4q9BjqkAZeqlgjCQaef1hNtBaq3kNy7tJY%2BszlfznIiXb7oOqkWUHkq63BwD8gNA%2FuTA1%2BBhj4J8Mvt5jC%2BGrIZENh0zN74UySKk12rSum2QI%2BMWfX1dXxfMYUkjzc5LYqZUU4ZOL9S9UwjRowH7azMzBKZ9UOaVPCvQOcHFbrMvL8aKNIzjv4qSLMPqJHMdWWk3RQh3Ag9Gk0eV%2BLAT5plEcv6cLkOq%2FD%2F&X-Amz-Signature=776e4538ab9b29f906d13b1eaa9ffe1c1e99b73be58a2a5a47f00340704914a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYT7EF3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCvyQv0V977yPr6lNC412Yem%2FQSrDFLsSoygOKTb8fHfgIhAJ0HYFxAcup0K4NrHpVJt0gvPOY%2B9J24XplB89bWIzuDKv8DCDkQABoMNjM3NDIzMTgzODA1Igz7b2ywXlJj9rlInuIq3AM0Kjtj6yctrVzgJGFXly91GEBwun9mfzaBuB3FBWfguPCue9b2SSsdyMn9UAAO2qtwS3U%2B3FcD2yZ7u6W7GHU1cqFBc4fQpwIpRE3Ys5sayouPmiqSuzhPiXx6uVvCuxmnPHefSmdM4tXs37Sqv2FD1KGHu68KAYVRhmCuVvphww4UnvdYm5DN1J3pQNwOsQRHeE0qZrC7OhMs9IL45GSYreTd5ZUMAE88c4vQZIZkQjTKJg7wIg4TdDqcD%2BGVN7%2Fa%2FtdXSrV6peZmf%2BTPmeKdgaRzuinBThUnSUcYQT2b3EH9NDh9JLIz4yIgK3P4hXJjsWSh7Vr7RKKV7nzEpfzoiud8AWv7iTwgBwPPk9F5ijeNvy6bRSY6vxb09IBgkmZIGAAKSVnhskvcidgZUtjAClu076D7zwH3lTO4i9M3Cs5i8e8YS6IemOGBrIbIhpKbrVNkbkcXqEeJfmspSTx4ojs8y1yAdMtqMY6TI%2F7qdxjLJism%2F%2FiARjEVaw%2BP6QWM6om2iJZSxdimbLVHBnaUuHPbDQ1vsDpkVOFtmOP69kMyaIlZdHfijcJRh0ucXP8mo%2FeeP%2B7FIneqW8PNBrvutzGRiaMJhXXHzOWEFCyop3zEzeNanbtju0VMUjCPz4q9BjqkAYV8HoC%2FtY1vpzdMkNhNdh5kG1TcjkGHEZviZIXY2tkyG5itQlu3c%2FfCilgJtzYyODl0dI6FX9LA%2BEg6kH%2FVAztJiwjVCoryyZwdLpX%2Bfb1TbJCLEHaN1eNBZY7oTHWCWiHPkJ2jUQZAbbqhlE%2FPGT1s%2FjZ1mYSqu2fZbRKpurFFuVa5zyCr83VJLEGWEtV%2BU2NLZbKF8zp%2BXDx%2FR9%2BOZD6%2Bho4W&X-Amz-Signature=0d17722278386face363a79b48607ba1ffd43b71e0d3cde9d274a011eaa9282a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWVRUV6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC6AUz28T8HSK4mXNKTnk6eolGV%2FuEQJZ%2BlEDf4umYFswIhAIhKv7YqL5Qw9Gn3LCtF5LxMtEBhPzY79IS8JgetLKoLKv8DCDkQABoMNjM3NDIzMTgzODA1Igx4qmqSuP8GEXD23KMq3AOr0qTkMtuUWYxx937tBKoj9L9BD%2FYEBgSX51JqEeEwP4w5lLxEWtoqDN7kcXYdSs9mmK9m02uKaNiJOW0thPQ4opTbCt6p%2F%2FU0YkVd7eu5Bb2TQt2YwkAbePuik9Qd5WqjhzARA7K893e8uOk%2FLDmSZUKaguaM82tYxqUNUhnJncufszlEa9RNS34tllN6mLcCETDMtOCR6WCGPOLTft8%2BFLvAokCGLZUcrqyRnE5XmWFcIirco0vigauh8baw6c2vQ11UhZHzDxdOzetmk9tQOKxuaamAeANMTf%2BugeMj%2FQwa%2F02lORvLWCkxX4lG6K3L4kWV4CoYn4bNbrb9Pkjuxc8JsMZKhNDH%2BeHnKKJgOtPD87CsmBvcSmAQJu8gsmhbuhJkw%2FLeAl317YtVkqXGfW71PIlkcl5NEt46D%2B9ZoCpd0gVGeBAkHLVFdjYHa%2FMmdMkJLK5u5g5fO3CggMbW4un7ru9bJUsYirHqtM2V%2FX8FMtzD%2F7sdHcD3oJ%2BEqboDqXhCpOnHV%2BVKvf2PmHbJjhjE009HNyET%2FCmrOO1yI3nJYrXl3G%2F0H8zwXr5vpX%2Bibem8UotsCZsx2InCvvR%2BwlbSm5lwmUdxFQKjEsceJoArxspMINMo%2BdpiOjC1z4q9BjqkAcd0GvcM9dMvbHV5iqaKFlWAPO2%2FyXCiyjU07XD%2BdnQh8mtUkEKYeCZD8Hbp%2B97ZiZCGR08dC%2BmKfYMfE2N9%2FwUdN5vUPWTKsdQmsXa2MoBAObRQWTiApU286pAx35AKcvWS51GYjNiyVrvjjEQe0zO%2FtTsbfoB9JNsdjw%2FZEP8QpUhEulUn73zmJVGpKyjUJAwLBmOC1qyTtwPJchYWmjy8f9uO&X-Amz-Signature=eede0116064b9f77cc4145187c110abec2b450a093ff78e94a5cd3a4ef1e9659&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
