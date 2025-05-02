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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6476WPL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAwi5w70F%2BsEABvtm9Ffyfesje6ZJbVahTPcHAiyLn0aAiEAq2qmP126ZfpiPd3FB3bQjptgPFuZzVq9ojGb7MLWrBkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdFIX5h6joHw4f3yrcA7KgdbROmgPaiaxChf7brXiTCUtpPL6%2FSFrM7%2FoEdWeMq6uvMApqHqp6ws9MtAWyR4hPkqI%2F%2BqFowTreVJJttOw2nEfvmkUZY9Kup4hj74uGxSrdqqj3kMvIejdSDNeRug%2FlPEjj6FXXfhDc7CXlccSstHMezLxwC%2FmxJrSxF2GEL%2F%2FmigcAIvqT0VGJI96DgEqT2rtOJS8WURIvoOY6SUHex9wKTpj1AET9B2U9S6oZe0AvGpbbOrGi%2B5rPtYK6oJFyXPw7pjgxirJYgmOzYavqKA%2BPGv2aKkC8by%2FTgdqDiiWZDhBi65EXuw9hzlleUPQp85VEg2JcfVRHjT5Uu00GIAwojNkG7%2Fs1TV8wd8Rvm7JpqoaYDCmG2wyl8ru648VP%2F5%2BNYWEv%2B4iUJqeVqBUI8sp4FsQt5HiXJxDSHAJ27QrLtV1K9zguWnEzyC1pnwY5V9Pf0xrf%2FzKs%2BuNrBr%2BHIQTvtu1OZb7u8AtfL7jxEG%2BnS9Z3QctTVDLKNLgL121hP9eXaLmKT%2F%2F2rTuwuVvrnstRtz0DvyVuH4hELIUarAP%2F%2BgAGipjKlRZdjXdzE6yYSwUJUdMrUC77qZhOrISp%2FZ9Akoe%2BSTWCs76sMyP7jdIMboNXdvLCuvbdMKfX0sAGOqUBJTtY4vZ78EzNmdrYDsDJM4byAy6eBLYDGnYKAle4AGOJMahCwp4bXLj9ugS01lPLXsMyc1TY9iCh58jYJ8ocY38MobROFU6uuV6Q%2BeXoOmAW2FYg%2BYKo7LfE2cULtMnLNlZ5Xi4wwhaatT9VTOtPLDhJRmlDI1lhMu4v5P639lNQKlMrcuPWho1LzQ5IWiGdfqkFnQoyliL06gGQngrXgZEGqvX%2B&X-Amz-Signature=cef025b9bddfd32b59efd872c3b7601a77243d5d59bd9e9a3fbc5d11ad387794&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6476WPL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAwi5w70F%2BsEABvtm9Ffyfesje6ZJbVahTPcHAiyLn0aAiEAq2qmP126ZfpiPd3FB3bQjptgPFuZzVq9ojGb7MLWrBkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdFIX5h6joHw4f3yrcA7KgdbROmgPaiaxChf7brXiTCUtpPL6%2FSFrM7%2FoEdWeMq6uvMApqHqp6ws9MtAWyR4hPkqI%2F%2BqFowTreVJJttOw2nEfvmkUZY9Kup4hj74uGxSrdqqj3kMvIejdSDNeRug%2FlPEjj6FXXfhDc7CXlccSstHMezLxwC%2FmxJrSxF2GEL%2F%2FmigcAIvqT0VGJI96DgEqT2rtOJS8WURIvoOY6SUHex9wKTpj1AET9B2U9S6oZe0AvGpbbOrGi%2B5rPtYK6oJFyXPw7pjgxirJYgmOzYavqKA%2BPGv2aKkC8by%2FTgdqDiiWZDhBi65EXuw9hzlleUPQp85VEg2JcfVRHjT5Uu00GIAwojNkG7%2Fs1TV8wd8Rvm7JpqoaYDCmG2wyl8ru648VP%2F5%2BNYWEv%2B4iUJqeVqBUI8sp4FsQt5HiXJxDSHAJ27QrLtV1K9zguWnEzyC1pnwY5V9Pf0xrf%2FzKs%2BuNrBr%2BHIQTvtu1OZb7u8AtfL7jxEG%2BnS9Z3QctTVDLKNLgL121hP9eXaLmKT%2F%2F2rTuwuVvrnstRtz0DvyVuH4hELIUarAP%2F%2BgAGipjKlRZdjXdzE6yYSwUJUdMrUC77qZhOrISp%2FZ9Akoe%2BSTWCs76sMyP7jdIMboNXdvLCuvbdMKfX0sAGOqUBJTtY4vZ78EzNmdrYDsDJM4byAy6eBLYDGnYKAle4AGOJMahCwp4bXLj9ugS01lPLXsMyc1TY9iCh58jYJ8ocY38MobROFU6uuV6Q%2BeXoOmAW2FYg%2BYKo7LfE2cULtMnLNlZ5Xi4wwhaatT9VTOtPLDhJRmlDI1lhMu4v5P639lNQKlMrcuPWho1LzQ5IWiGdfqkFnQoyliL06gGQngrXgZEGqvX%2B&X-Amz-Signature=b8528b7a8c42029c3d6310c5bbdbc6b56a9e852eb7acdb80bc3345b629e85966&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6476WPL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAwi5w70F%2BsEABvtm9Ffyfesje6ZJbVahTPcHAiyLn0aAiEAq2qmP126ZfpiPd3FB3bQjptgPFuZzVq9ojGb7MLWrBkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdFIX5h6joHw4f3yrcA7KgdbROmgPaiaxChf7brXiTCUtpPL6%2FSFrM7%2FoEdWeMq6uvMApqHqp6ws9MtAWyR4hPkqI%2F%2BqFowTreVJJttOw2nEfvmkUZY9Kup4hj74uGxSrdqqj3kMvIejdSDNeRug%2FlPEjj6FXXfhDc7CXlccSstHMezLxwC%2FmxJrSxF2GEL%2F%2FmigcAIvqT0VGJI96DgEqT2rtOJS8WURIvoOY6SUHex9wKTpj1AET9B2U9S6oZe0AvGpbbOrGi%2B5rPtYK6oJFyXPw7pjgxirJYgmOzYavqKA%2BPGv2aKkC8by%2FTgdqDiiWZDhBi65EXuw9hzlleUPQp85VEg2JcfVRHjT5Uu00GIAwojNkG7%2Fs1TV8wd8Rvm7JpqoaYDCmG2wyl8ru648VP%2F5%2BNYWEv%2B4iUJqeVqBUI8sp4FsQt5HiXJxDSHAJ27QrLtV1K9zguWnEzyC1pnwY5V9Pf0xrf%2FzKs%2BuNrBr%2BHIQTvtu1OZb7u8AtfL7jxEG%2BnS9Z3QctTVDLKNLgL121hP9eXaLmKT%2F%2F2rTuwuVvrnstRtz0DvyVuH4hELIUarAP%2F%2BgAGipjKlRZdjXdzE6yYSwUJUdMrUC77qZhOrISp%2FZ9Akoe%2BSTWCs76sMyP7jdIMboNXdvLCuvbdMKfX0sAGOqUBJTtY4vZ78EzNmdrYDsDJM4byAy6eBLYDGnYKAle4AGOJMahCwp4bXLj9ugS01lPLXsMyc1TY9iCh58jYJ8ocY38MobROFU6uuV6Q%2BeXoOmAW2FYg%2BYKo7LfE2cULtMnLNlZ5Xi4wwhaatT9VTOtPLDhJRmlDI1lhMu4v5P639lNQKlMrcuPWho1LzQ5IWiGdfqkFnQoyliL06gGQngrXgZEGqvX%2B&X-Amz-Signature=b691164caa46cc8420aeb9b1450b06a69215e736223299a8c1667f1480c5df27&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YRMKJR%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEmq%2F%2B3C3yvyokF0gLdec%2BHnBBb7RgbUcVJvaUHkCFMaAiEAp1o2ihYT%2BlwOLJccU6fbZ9NlF%2B0tK%2Blbert%2BpfjETk8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWyijFO4kmyi19jdCrcA21jHqp%2BvFq29XBe9YxaGCR4R8s90zGaXavAfozl1d%2BDCID1iDAJ0kydqhwQ9RlkWe8iD4l0v1AI%2Bc83WedU0nA%2Fd%2FS9FJn1Du54tuQPH4XpGojt460dOB1pFAiBOXJ%2BRTUIa%2FfwDHyduXIOMCKbrOTDmU9gQLl%2FuNvAndDnP5SbbM5GPE%2BUh0fj7Dafbpu7LhMYmD3GVAJrGlsdpcWYQlcD2GPBJy5X%2F2o7w2jLTXgEqmo30lPe49CVcl1e9MZkI5YOzNu3qQWv%2BrCpsi8UNixQAI0KHPT9YbokX8xSKmyYbBbPe0jqZRPaEISLN%2BFXgnBK5NicnHk9Vhq1zhlXozu5Sh3fDvHXfyXQqLkx2Zo%2Fp4HQ1f9VTug9W7hQ7jYILh8qTcRdSiJqiBW29QsjwaHHki8kkHq8uF2fCGQO2S5cdwEhn2lRO6nUuMXgRnsZgYSQvPNGDVNHM4ckAnrPtbn8mCh9CmTZ3v%2FiJMPR4eo4Sc54%2B0ooeYQqdisTe7Sf0iPFYe%2BvtEMWjwA0GEf%2F%2BaxMJ0D3r%2FbA%2B5k6%2F3EyeJD19qeAWY6r14X8PjP9UYrBCnH%2BeaexAYpjRRpyRJw0p7Wda50Vv0xNxzulnS7Z%2FLLmG4qE2Fzg0vcnmrHAMNfW0sAGOqUB%2FjAEsEMNtN7AYCBSbhI%2B3JaaQfu1JRQy4TMu1tViWU1YCmNBZIW1jGwTiRippDd%2BB%2FMT%2BvbE2QhZIt2O2%2Fi%2B9y61zWx%2FwCKivhIEBuhzBI3O8WXSs%2BvpU6Rvq1k9YIEkjS0kieQtCW0CrUdE1Bu1qVQD%2FCOCh0sN9vYRnXD%2B3IDKV32DjlYYYROnRaifr0t1SbMcKPXYbtcYbQ8seYNTLwt%2FlW6K&X-Amz-Signature=e2bb54c1ac92331b60d61eb4dff0f0f110991bcabd47b1dccc8b6864789baf02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRJWDCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFhC0GcFTxZSeRlpQ%2FozU0ksowrwJ9sch9ks6DDFXdVBAiAGCM4pUypJBdpPyBFastjRnmyn7%2Bu1XfFJJVPL1%2B2HbyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML%2F7slggUEdyqMkX7KtwD9Nl0WEuB5btX8jqlelYla%2BGgjbWuyqtxwmZ8Uvk3D%2F2CVXvTd3KP7ncsSJbKMfKo1HKqrDakS9vRtvsSgzqtmJsdw1qCa%2B0IqpBeAeIRcvaJ1DIknSZN%2BhTNsPOYJo%2FRZ66m9uMLeiRnD%2B%2BfqNJpKo5oUW1koVG3FtmfU4t8ydD3N0181J2IFKIofqeX2JTouVx3kks%2Bu51GKHuN%2F65i7HWqPnwNFsS%2FnjoB2Ws3q98C2RG%2BUHhyf%2B9TBzFziedXC8mXy%2BMJ9xd3%2Fr7g0xm%2FlQko86eNEKiHgXz77IhsIAzY%2BMK%2BKlE2grKa0duabzKxjs2YEDHEvUfSuicX7%2B6uIjzdMTB5MK7z43Q9Ij1DJhFZc017dxcMAOYzCrWwz65qQvW59yxBdkz7A32KEBfTZtDGS79WrcnzAxkDDjC47Xq39D4uEL8NVLbqzV1IWSsEt5127GEACunN%2BLbzG1UoX9h2UD06JqbesZ%2BcvwNBw2eV0oxEf9JmOCicJxIl9aQ6lITa9xJiZZL2%2FCjKspiA6v6ZFdl69EGywhLN18vf%2F%2FKkY%2B0lbvtuC4T%2FmVgExJk0Ev9gtH%2BiiQ%2B7OxT6cQ6sHGeEPrAN7hg6hlCeQ5jzcRGEBDagXtTcSi7gwTgw9tbSwAY6pgHygTErPNlp%2BWhSDdqg%2FU1a9WoC2tHbgDdY7L55QThoDfgFLamDU4XdMY3rwMmHyUs%2BEZ8b2Syd93zhTliZxx0icsyOmyTrydOJ66eKMNOEB0fRmn25b5JNEYY9DVdJi2KKLO8JDitJP4169%2FMpug83kCPELhsXk43999Gt8PkoItwjBROR9VQGxNXuM%2BDmy0tZpPpa%2Ba5OBzGLyAmm4nbIetG5oVdY&X-Amz-Signature=888be4a2cf2d52fe6482f648b4da320f717fee823dddcd300209fc5870c558de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6476WPL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIAwi5w70F%2BsEABvtm9Ffyfesje6ZJbVahTPcHAiyLn0aAiEAq2qmP126ZfpiPd3FB3bQjptgPFuZzVq9ojGb7MLWrBkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfdFIX5h6joHw4f3yrcA7KgdbROmgPaiaxChf7brXiTCUtpPL6%2FSFrM7%2FoEdWeMq6uvMApqHqp6ws9MtAWyR4hPkqI%2F%2BqFowTreVJJttOw2nEfvmkUZY9Kup4hj74uGxSrdqqj3kMvIejdSDNeRug%2FlPEjj6FXXfhDc7CXlccSstHMezLxwC%2FmxJrSxF2GEL%2F%2FmigcAIvqT0VGJI96DgEqT2rtOJS8WURIvoOY6SUHex9wKTpj1AET9B2U9S6oZe0AvGpbbOrGi%2B5rPtYK6oJFyXPw7pjgxirJYgmOzYavqKA%2BPGv2aKkC8by%2FTgdqDiiWZDhBi65EXuw9hzlleUPQp85VEg2JcfVRHjT5Uu00GIAwojNkG7%2Fs1TV8wd8Rvm7JpqoaYDCmG2wyl8ru648VP%2F5%2BNYWEv%2B4iUJqeVqBUI8sp4FsQt5HiXJxDSHAJ27QrLtV1K9zguWnEzyC1pnwY5V9Pf0xrf%2FzKs%2BuNrBr%2BHIQTvtu1OZb7u8AtfL7jxEG%2BnS9Z3QctTVDLKNLgL121hP9eXaLmKT%2F%2F2rTuwuVvrnstRtz0DvyVuH4hELIUarAP%2F%2BgAGipjKlRZdjXdzE6yYSwUJUdMrUC77qZhOrISp%2FZ9Akoe%2BSTWCs76sMyP7jdIMboNXdvLCuvbdMKfX0sAGOqUBJTtY4vZ78EzNmdrYDsDJM4byAy6eBLYDGnYKAle4AGOJMahCwp4bXLj9ugS01lPLXsMyc1TY9iCh58jYJ8ocY38MobROFU6uuV6Q%2BeXoOmAW2FYg%2BYKo7LfE2cULtMnLNlZ5Xi4wwhaatT9VTOtPLDhJRmlDI1lhMu4v5P639lNQKlMrcuPWho1LzQ5IWiGdfqkFnQoyliL06gGQngrXgZEGqvX%2B&X-Amz-Signature=6f55e2ec4147e9bb2c091dd522f47c730c09cbcdf7571e9c860765b059c8eacd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
