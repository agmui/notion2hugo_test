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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEEZOLQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWAmpqR%2BGzHLJ8Xu%2BQrjHCUHwCxtU%2FGeTYbB4eWLGbsAiEAlMGVYltCrkNJBaW4aNykPmmT0N0OqFBaajV7itcr%2B88q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLXzKlTWwy6oGjw%2FGCrcAxAX%2FA3JROWUsm7LhZhfboFmx0aCrdfWFcBSGAOQ9kLzZVbuPX3dPc5NWTYZPyFubP50WJjkB8nHGwcOge%2F8wE52E%2BJWr%2BJzGPxZFDyFGFdGK9kSQ1KQs2vUiaDXoAchrCqj07kESMCsfr2lhOJftQDlhd4J6Gne%2FxAm5uWtzvQOLZ02YIlEN%2BSFIoB0E4MZonrgUzE537xoyeb2%2Bl4SXOtjRwz%2BHEC1iEPPHF5ZmPaVOON5kJnoYDY%2Bf6VJsypMCROCAs0iZcUwwuk1Kd%2BAggj%2FfrAfHh%2B5lqzhA4AwVRozziMc2KxfFKc1al%2FWPie01wVQnukgjpNXT3G11zQltbWndbUJXd%2BCi7hNVHtpnytrgaij7V3ghm0o0hNjEYHOnUF1SnjRk%2FUyQOcyC%2F5ilSMBX5xNgTJtxD6HzIkf5LJ4Lh66keP8mtgH4x4Fw1KDVuN16NcKJp5zCagzl%2B1CRlk5SwyMNXcY42LfHOhopzdMV9v49sgvboy1k7xDReVJC4SCU8mZosrCUqhlSiF5yldIqqFPxIM%2F4uXQjxP%2BF7FLLW1iGozIZNyA4USd2%2F0O0E5Kov9oyLdKsibi91xOzHatueY86e5De8J5zg1ccX4DkuPFQL5zhD67kyNMMNyJk78GOqUBguNVlAqV5DMYCJoOvGaro87pTiTqNJyZewbBYT956rLm%2FW99kZwWOU0LesyiEJV8xDinVu5djygbQU136sXTkM51zeBas1Til3ILUMLqJ4jL6gvSASsfpKuxwQkx%2BiqENRbZR3%2BPv%2FRkJ%2FFkT5lv2hYlp9rrsEYoT1SLMGRVG3xo%2BOzk0LytqKMDctZW%2B%2F%2BjzW6ezoCy0%2B7LjMjx5AzQOLXmbUP0&X-Amz-Signature=745a8e51a7be62826ba0b2b1d75237d43d6ea63b1128107274370787d29e4439&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEEZOLQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWAmpqR%2BGzHLJ8Xu%2BQrjHCUHwCxtU%2FGeTYbB4eWLGbsAiEAlMGVYltCrkNJBaW4aNykPmmT0N0OqFBaajV7itcr%2B88q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLXzKlTWwy6oGjw%2FGCrcAxAX%2FA3JROWUsm7LhZhfboFmx0aCrdfWFcBSGAOQ9kLzZVbuPX3dPc5NWTYZPyFubP50WJjkB8nHGwcOge%2F8wE52E%2BJWr%2BJzGPxZFDyFGFdGK9kSQ1KQs2vUiaDXoAchrCqj07kESMCsfr2lhOJftQDlhd4J6Gne%2FxAm5uWtzvQOLZ02YIlEN%2BSFIoB0E4MZonrgUzE537xoyeb2%2Bl4SXOtjRwz%2BHEC1iEPPHF5ZmPaVOON5kJnoYDY%2Bf6VJsypMCROCAs0iZcUwwuk1Kd%2BAggj%2FfrAfHh%2B5lqzhA4AwVRozziMc2KxfFKc1al%2FWPie01wVQnukgjpNXT3G11zQltbWndbUJXd%2BCi7hNVHtpnytrgaij7V3ghm0o0hNjEYHOnUF1SnjRk%2FUyQOcyC%2F5ilSMBX5xNgTJtxD6HzIkf5LJ4Lh66keP8mtgH4x4Fw1KDVuN16NcKJp5zCagzl%2B1CRlk5SwyMNXcY42LfHOhopzdMV9v49sgvboy1k7xDReVJC4SCU8mZosrCUqhlSiF5yldIqqFPxIM%2F4uXQjxP%2BF7FLLW1iGozIZNyA4USd2%2F0O0E5Kov9oyLdKsibi91xOzHatueY86e5De8J5zg1ccX4DkuPFQL5zhD67kyNMMNyJk78GOqUBguNVlAqV5DMYCJoOvGaro87pTiTqNJyZewbBYT956rLm%2FW99kZwWOU0LesyiEJV8xDinVu5djygbQU136sXTkM51zeBas1Til3ILUMLqJ4jL6gvSASsfpKuxwQkx%2BiqENRbZR3%2BPv%2FRkJ%2FFkT5lv2hYlp9rrsEYoT1SLMGRVG3xo%2BOzk0LytqKMDctZW%2B%2F%2BjzW6ezoCy0%2B7LjMjx5AzQOLXmbUP0&X-Amz-Signature=19a3d24f0e6dd8b59f3437c86a3219b844cfe1123be260757188004f1ac4da5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM7OXVX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyDxnq8QGhnaQdCVA3ya%2FaUaFAxttbOW5O4k7XXwkW0AiEA2U4FtdNeSmMAbBl%2FH4rdvuLAGJDoJYWqI8CJbzFWJYsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKNtMLilBJ8F3U%2FHJyrcA0ox3rzv6bAb77V5LJrngow6f2EJXk5D5XSZxWn42pJLgYIJ856ZHOy2eqv7Ay9M29wCicI5X2to%2FCmbmwRZJ9Lt8lGHZ9UazT%2FExNtAhobc9bvACVY69M5SoSIXBLrNws9GyBgMTJn2%2FCZdufpSsC2HV50YKp1VII0dM0nHrKFMhdjCKo3qb%2BQkb7SIi3dwOd1Jl9uNrfaJDhZCrsuhxNXhvKSny0lfEfNa1GS853UVl%2FkpQ%2BrcrGJrNN2dQ37mSG3aG1dk1SzPsfw4GiVOwffkcsNotIVYIhgJwDz0OjgT%2BcFsNaP8p75aZZCRBf52ewnG1IG6KeVtGuWH86qAvUvDYoz9Hf5pRDdAf6%2Blqu%2FKaDjug4e15Apdiii%2B2n%2BqBZTBt8qvxB7W7mmzltyAIERUkFRdn9bRmVFUCkr8nyLVh2Thwt6NW98F3lisKipqGbImpuTsa0EzEe3rU0KsGmwPPSE1kYThntH5E9iYSOEfZUzh0dPGDlIIijRryvA5WIcgUNqo0UqspahXzrjcQBF4ISvqbIKCmzgzv6yHmijWm4V5YXe102oZXWiDFfzgyLjGmCF%2Fq5Mft4%2B%2FGqY7f2k8LUaAkfqSsgvIQZC8cqg8IU%2BkLVT9bUIQqjXFMPqJk78GOqUB%2BcY9k17o5f73QHLtPGwH3jdD2CJuqHVnjReNIo7%2BRAYW6xnF32ZElRm0XIn10IGacrRMJPgr67iC8qTBbh%2FLYmi7xEW8h1cQ7XW4eNTfRfsjaOqqhpoG7kHYvcIUAR9MTrcwgZ2Bt%2FsFzt4LYr9q4OM80rZ5SHxmlfiAZnr7JFACJftskzvQ5s1FT515wbyqjOxYShYoOAOIk9mRGAbMALVB8Qsv&X-Amz-Signature=b37ba9cb580ee829f6f288ed9b17b4e85b3b30de985d89b7f765d8aea90c47b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVI7FFA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPqFfF5Np0k4wq4Ysr2N94w9R44UdWS7rkU%2B68xhl9rQIhAJjdaMAAkFa3ejOlqurpjEpU8FG8gTSV75rSWGYIo5P7Kv8DCDwQABoMNjM3NDIzMTgzODA1IgyKNXyh5u2gGdwro1Eq3ANzer5Ny4tZzOu4wE3PdStP2hIVedvhV3PEJ0yUpwRXnafsSdxE9%2BBcd2NNSN3kdnO2%2FCdbNQLrhDazM541QqGidTsrQhq1m9%2FfYAZJyElsizMb982SIkxEvOkZSq2ZXCHQyepgcvcsBEn%2B7WVJ2wNRKmNL6bk%2Be%2BjVNWfhJ3tgU%2BbRMvybHDkPZnkc%2BaS3d4X26%2F%2BZ5ofLSbvZJcBgWQrEpw27gT%2BzLn9CwGz894nN7RcTWuczrzcVdsWNl5BztLb7sit6u2%2Fdrs7FMDGFfII8YHy6Wf%2FWZwLePLOlqQF9ns22scJtBDh2pnhGxN5KUDGtPAUXFD0kCJ896TvwYyJY%2BKWCfU%2Fl57wUZbf8nFgSWyiWH40CYvvjKSQsqHVLo6MktB2cYIkIJeGzk2fOCcXGCSOT%2FWZrFs9U0YXe7RP4XSUOgEYLMRG9BDSeE1E8Vv03yO7eoefoT0zSy5imQxGcbAoTE9f02Af8vh0VyaSlBBFsOVRmwuj8L98af%2FC%2BD3813IV0%2FXR2ZlXvx02Ni6U%2FFkr1yv8koc%2Fq3X8YK1UI9qVo4HQOjrGYM4sulhVWhavTVozB2l%2Bc8R50UlDwEZIPgyRNu%2B%2Fewf2t%2BWfUiKZi2fNGxmw9khtmsg5H%2FzCDipO%2FBjqkAavRQ8qb5WPbC7pDJT%2Fx4QiM99BE8wa%2Fd0grRB424xxEKvXqMYo9HThnyDTd5hensEqG3IGRfxxwq8O%2F1C2ufSrLm5WfVRa5%2B%2Fv%2B4U9QzoUzBRsEOIBNKGeRFCKVPYbhZYb7bOgvvjujcb6FLWcgwNjDUaED5EaYUUh38HOtpBUUh7oDN1Vvw1ozwvVEmA4ZM8kuYt2ccODjAuwQflZ4Jcpi7ZSL&X-Amz-Signature=187455c9c51f02cb586915d5cf26754635a4f6ceaca8d47f241b368e277410b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEEZOLQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWAmpqR%2BGzHLJ8Xu%2BQrjHCUHwCxtU%2FGeTYbB4eWLGbsAiEAlMGVYltCrkNJBaW4aNykPmmT0N0OqFBaajV7itcr%2B88q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLXzKlTWwy6oGjw%2FGCrcAxAX%2FA3JROWUsm7LhZhfboFmx0aCrdfWFcBSGAOQ9kLzZVbuPX3dPc5NWTYZPyFubP50WJjkB8nHGwcOge%2F8wE52E%2BJWr%2BJzGPxZFDyFGFdGK9kSQ1KQs2vUiaDXoAchrCqj07kESMCsfr2lhOJftQDlhd4J6Gne%2FxAm5uWtzvQOLZ02YIlEN%2BSFIoB0E4MZonrgUzE537xoyeb2%2Bl4SXOtjRwz%2BHEC1iEPPHF5ZmPaVOON5kJnoYDY%2Bf6VJsypMCROCAs0iZcUwwuk1Kd%2BAggj%2FfrAfHh%2B5lqzhA4AwVRozziMc2KxfFKc1al%2FWPie01wVQnukgjpNXT3G11zQltbWndbUJXd%2BCi7hNVHtpnytrgaij7V3ghm0o0hNjEYHOnUF1SnjRk%2FUyQOcyC%2F5ilSMBX5xNgTJtxD6HzIkf5LJ4Lh66keP8mtgH4x4Fw1KDVuN16NcKJp5zCagzl%2B1CRlk5SwyMNXcY42LfHOhopzdMV9v49sgvboy1k7xDReVJC4SCU8mZosrCUqhlSiF5yldIqqFPxIM%2F4uXQjxP%2BF7FLLW1iGozIZNyA4USd2%2F0O0E5Kov9oyLdKsibi91xOzHatueY86e5De8J5zg1ccX4DkuPFQL5zhD67kyNMMNyJk78GOqUBguNVlAqV5DMYCJoOvGaro87pTiTqNJyZewbBYT956rLm%2FW99kZwWOU0LesyiEJV8xDinVu5djygbQU136sXTkM51zeBas1Til3ILUMLqJ4jL6gvSASsfpKuxwQkx%2BiqENRbZR3%2BPv%2FRkJ%2FFkT5lv2hYlp9rrsEYoT1SLMGRVG3xo%2BOzk0LytqKMDctZW%2B%2F%2BjzW6ezoCy0%2B7LjMjx5AzQOLXmbUP0&X-Amz-Signature=a9b47b2e60ea7ab9601cbef12d80ebe3d526c3149fa4ab61aaa261fd304abe69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
