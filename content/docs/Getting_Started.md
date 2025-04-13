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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZ6WEJ4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHw5e0azvV5v97AVsEKjxB%2Fscu9x1TcJSvdbXlwvubL1AiA6m2duorwJtxvXU28NZz71I8Vc%2FI4B35Z7lha18YdS3iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEqVoY3kexB2C0aBKtwD9fTTYHtq09aFMGjhKVC6J89u0lDNwOu3d6b%2FruKHH5%2FyUZUUj0a4Lynp38jrBc%2FXkz2xl5BqK9D133ce0hVxW%2BAMH8dq%2F%2BnF1IU1bvhBFIzkfKx1dn34FVY1mNYBN4kzNb%2BnKLsDu1OSKGPKyamm5%2F23Vhbwq7UPbYgTskBSMopNW0feaO%2Fmx2FjvK77nxRFn4AryZfFkxDi%2BlT%2Brsz1JSYa%2BDuwcKB9b2ZgvHoiOgpgcUullHw2bFuKwOs9LGAhmKC%2F8hhzNu8MQMpn0YaWQdgDOIP%2B4K8D7ky2UuepKUEnMn8FLX6BiE2bY3IAWicBQFSfrcEyysEBO%2BliK43kMnG2%2FSb3xkXdqP2FO%2Flbh7QkO6s2uz0lMfkosh2RttiE35d8tKTePo0b6hP7%2BOOL69TFNgKxMpCfZWpnA0QiVLNKxqdJ7JafSAS0nNnlwdo1bASiefqZcu%2BUM46q8p8oEAOS8VLMAswJXivNjb5%2BoHFOlqniZ6ZONjuxmAWLn%2BA8xmVjBDeLhur6LOexaSLYpdwTSrGvf6HJojxOxfY5cS80f2pxX%2FcNB55LwiBYr2SGA89eGIv1sUuc5BdhyqklUI275CO4TxOehd835qF%2Fx35F4fNd7dNm1UZ%2FUQEw%2Bo3tvwY6pgHAtrIHreo8%2F43rCfYuDdxx29vMNEz1pIsuY1Fl5UeJHXgX7jxQRP1MJFCKoe0UsIxCsm6FoHZUqvFiITejIlEb8JCissX0y3JU9XEZ5R1Wb6eugQ6NP9lLCXj7KNEXgyOLK3k6BihIaV8Nv%2BDPruM37eaFYU6j7jkawpylFNBGa%2FMcFTxp7M8TDqw8%2FTPLvGgLY7JnzvE%2FhRX3NBKr91f01h7fKpyQ&X-Amz-Signature=61508fe6e155e36e811a4fddafdbe6c020ba51731386cdc5ce2f71ac7b9fe2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZ6WEJ4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHw5e0azvV5v97AVsEKjxB%2Fscu9x1TcJSvdbXlwvubL1AiA6m2duorwJtxvXU28NZz71I8Vc%2FI4B35Z7lha18YdS3iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEqVoY3kexB2C0aBKtwD9fTTYHtq09aFMGjhKVC6J89u0lDNwOu3d6b%2FruKHH5%2FyUZUUj0a4Lynp38jrBc%2FXkz2xl5BqK9D133ce0hVxW%2BAMH8dq%2F%2BnF1IU1bvhBFIzkfKx1dn34FVY1mNYBN4kzNb%2BnKLsDu1OSKGPKyamm5%2F23Vhbwq7UPbYgTskBSMopNW0feaO%2Fmx2FjvK77nxRFn4AryZfFkxDi%2BlT%2Brsz1JSYa%2BDuwcKB9b2ZgvHoiOgpgcUullHw2bFuKwOs9LGAhmKC%2F8hhzNu8MQMpn0YaWQdgDOIP%2B4K8D7ky2UuepKUEnMn8FLX6BiE2bY3IAWicBQFSfrcEyysEBO%2BliK43kMnG2%2FSb3xkXdqP2FO%2Flbh7QkO6s2uz0lMfkosh2RttiE35d8tKTePo0b6hP7%2BOOL69TFNgKxMpCfZWpnA0QiVLNKxqdJ7JafSAS0nNnlwdo1bASiefqZcu%2BUM46q8p8oEAOS8VLMAswJXivNjb5%2BoHFOlqniZ6ZONjuxmAWLn%2BA8xmVjBDeLhur6LOexaSLYpdwTSrGvf6HJojxOxfY5cS80f2pxX%2FcNB55LwiBYr2SGA89eGIv1sUuc5BdhyqklUI275CO4TxOehd835qF%2Fx35F4fNd7dNm1UZ%2FUQEw%2Bo3tvwY6pgHAtrIHreo8%2F43rCfYuDdxx29vMNEz1pIsuY1Fl5UeJHXgX7jxQRP1MJFCKoe0UsIxCsm6FoHZUqvFiITejIlEb8JCissX0y3JU9XEZ5R1Wb6eugQ6NP9lLCXj7KNEXgyOLK3k6BihIaV8Nv%2BDPruM37eaFYU6j7jkawpylFNBGa%2FMcFTxp7M8TDqw8%2FTPLvGgLY7JnzvE%2FhRX3NBKr91f01h7fKpyQ&X-Amz-Signature=ed82247cf4909e3b973fc390bc88d7b8687af5109a2b3262c55380d58659a9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYW2HCL%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIH5lNprDEfBUq2FH8gS7Mp4g43jbwubRIJdEipCHBj%2BOAiEA%2B4ebrmdVRkeR0b31k%2F9r6yFLhg268p7dGPwpGq%2FIEJAqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0SHRRrpMt8RwOIwCrcA%2BPgluiBsJqLjpMBK%2BpFsPtR6Q3vgy4NdXh3tnyX8m%2FXJj2HnPzXzLJzdAkbcJppamxoIQpTs9NURkq3rtEvQt9aB3kkg2TJ3LELBrsbE4DnkITS7MyqG4ok0s7F4pkyN5t1Cu%2F%2FIXnYannXVJd3GyFTntiH210gzIuvcTZfYOQtZr%2BUsjbdaCE5upjWPuushcRIT3AHhsZqpE%2BK3gzwXS0FDqCyC8AzrZzJBgECRGMOwhtKEAeJhtteFFeCHjz7NDnStegsBlQ0%2BUKBCQU1lm8U9eIFDPdJfUIX50EMfjWtMxm7Qsa864AhXyAJEXtH%2F7Snc6JnhE3%2Ff81NufZVW3j0x59UyVeKtul5Kx1LvGDxXvyrhQ4XNRuQiZUI3VYUgF%2BAVDcPYEOiVR9yAnLD4JDc54p6o%2B4ht9kkJnype%2BWQyF8rWwcEWbo90%2FZsAwKPLYR2nR8hBbX7EdAb%2BJFeKQijpgDZ%2BKMt1vItds%2B8cfxImfuRAAptbmq9UYH8H%2Bt6I71OT029j4nulToBSCLEH5dBRvRur1V74xxEj5KVNpf9stjLoxUBou24ohIe2XD92spI7J7xds6sisP8%2FQHgSo1NjSLwR84E7ZYJYrue%2BTIl94x8Mh2IGjHFnQSXMMGO7b8GOqUB%2BD5dJhsx1v%2Bi9UpIqo%2BaHfoBc0lFKN2INeyED2WQOp%2FpCZ1setxPJOzgB3NgNyO7p0NYuLbOd0YnC5M4DK%2FGWwWfw9KKHNnaD%2BG6cdTfQVMxuL2sOm%2FZFcJVVx42ZDDXjq%2BCBOb7Nug3%2F3x8n%2F9m%2B1eb06JM06LcdDqRSJxnhWA%2F7ga6RJAP%2B%2FuQbJZE33MS9mGVHYJYkwrZ3bscpSqlb%2BL5GFM8&X-Amz-Signature=5cb6a9e55b6fd773d461f2fd5e64475b7b00304d3e17ee7c3610791fb40fae36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGO4HIU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC%2F8a3PgMZM9TYYL0pq2Xr9%2FM%2FLjmhbiZq6azMKOv%2BwiwIhAIhavpNnyv9peV9IJwzWV%2F%2B1kUGObib88kON1IRm54o%2FKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7vGovOVY1CAk7wMwq3APTTxT6RptvXiR%2BEtGbA%2B3G8Zmk0iQ53Pu3vfgw4UToucXLxRGrZWkUxZgw6zxIfYzDOXZuplhnltwLyHPMCaCKqrEREHsu8j9ZBT%2B7z3cRsh5ITy30p1C%2FSqwnhoZtTKZ%2B%2FgpU1XheGmfBAO8JtDxKTsyiec7M%2BJgLcn1PmCC5sD6cJMlGM%2Bwn39%2BVh%2BuyMekRHy0jQv2SKJddG212lx3X6LKOp2ayhyzGsoOWaL4k9KEzF3EzcesCLFhZFUkAORs59UV4gOavxlmjZwaHlFB3tH83EOMYZdaKGUmVp2V63tOW7grP2gIpTN8985zKy%2F9%2BAKZymYzdL7PvSvtbD8ROhUIeF%2B5D9K%2BvqNKXNYlcB8JKp6%2FSpZgApL3nBfA4ChbZqkIH71voV44CC1fv%2FsTaO4MK2cj97ibdKwOiQQ1JGC2SGszsGAQAZb3%2BdT89YJPeoE8HRN%2BfN6Y9kjHz6eklfZ9ZeqjuxZtzkJj1%2Bo%2FwtSmNoOqeJ0dcBw13RqqH0APCZLDdrcuMwFjvuXi75JGdCo0VqGfmdN%2BF7yDm2ONEE9vdWmFLuSibo%2BOil0dx1UaGp7%2BbQKLDILNlozj2JtThoICqbZ1Dwzr%2FH7NQDgkVa1OaMZbO2%2FlutJ0HrzCWju2%2FBjqkAQsVM7n7gA3tmwtTMPDDqQF69TLfbcolayqjJLYXOUZ0Ynne3tJv9GLocLV%2FWahNwdaiynIETjs74hW8jcwEJ9kajVUACALRAU5fJJZc14n2zww0c45iXk8rpXm2AMeJZsLUJL5hFO2tts9pveFesnRvsVUdFAC9Gb8gOG%2BSYevCdGBjMw4JpgQ%2B1ibnlIB76CPG1NakgKLgq5SSogVZdD6CGQyR&X-Amz-Signature=b049160bb776b56e9926901889524a41a4c25a4d5a3c6efb832adf68621898f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZ6WEJ4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHw5e0azvV5v97AVsEKjxB%2Fscu9x1TcJSvdbXlwvubL1AiA6m2duorwJtxvXU28NZz71I8Vc%2FI4B35Z7lha18YdS3iqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEqVoY3kexB2C0aBKtwD9fTTYHtq09aFMGjhKVC6J89u0lDNwOu3d6b%2FruKHH5%2FyUZUUj0a4Lynp38jrBc%2FXkz2xl5BqK9D133ce0hVxW%2BAMH8dq%2F%2BnF1IU1bvhBFIzkfKx1dn34FVY1mNYBN4kzNb%2BnKLsDu1OSKGPKyamm5%2F23Vhbwq7UPbYgTskBSMopNW0feaO%2Fmx2FjvK77nxRFn4AryZfFkxDi%2BlT%2Brsz1JSYa%2BDuwcKB9b2ZgvHoiOgpgcUullHw2bFuKwOs9LGAhmKC%2F8hhzNu8MQMpn0YaWQdgDOIP%2B4K8D7ky2UuepKUEnMn8FLX6BiE2bY3IAWicBQFSfrcEyysEBO%2BliK43kMnG2%2FSb3xkXdqP2FO%2Flbh7QkO6s2uz0lMfkosh2RttiE35d8tKTePo0b6hP7%2BOOL69TFNgKxMpCfZWpnA0QiVLNKxqdJ7JafSAS0nNnlwdo1bASiefqZcu%2BUM46q8p8oEAOS8VLMAswJXivNjb5%2BoHFOlqniZ6ZONjuxmAWLn%2BA8xmVjBDeLhur6LOexaSLYpdwTSrGvf6HJojxOxfY5cS80f2pxX%2FcNB55LwiBYr2SGA89eGIv1sUuc5BdhyqklUI275CO4TxOehd835qF%2Fx35F4fNd7dNm1UZ%2FUQEw%2Bo3tvwY6pgHAtrIHreo8%2F43rCfYuDdxx29vMNEz1pIsuY1Fl5UeJHXgX7jxQRP1MJFCKoe0UsIxCsm6FoHZUqvFiITejIlEb8JCissX0y3JU9XEZ5R1Wb6eugQ6NP9lLCXj7KNEXgyOLK3k6BihIaV8Nv%2BDPruM37eaFYU6j7jkawpylFNBGa%2FMcFTxp7M8TDqw8%2FTPLvGgLY7JnzvE%2FhRX3NBKr91f01h7fKpyQ&X-Amz-Signature=9e2e08f097be2dd0d363fe86aa7cd1a8d21fc817e7b8cf3d0c6815d9373c24df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
