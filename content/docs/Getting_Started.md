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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBLCEL4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2BZXXPJmetaOsZ9nMPqcP900FSS70oM1M1mYq5dmEU8gIhAI9TuJEbCocGuecUC5CD%2FDvnqrBvr4nNK8tI1AokdH0AKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0kA1cUoj3N08e%2BUq3ANWboljhL8JQvSB9OLWSVKQwqw6SRgzGFx09hg6wQA%2F79mtjPnV11HToWV5Isosj20fRquE%2Bb3%2FSZZ0MZ5zy6Qf%2BCCwIBoI0gpUT2OsyydLbPWKw8ooo%2FYKfw3iERw80wwE5WYI3qz0K8OvF1qjryC4YucW6tGhK6M3wQYyqahqRbuj5Wj2C6c5dyafYI9fhidpyvgRZtsPX%2FUozK1MwCFJ%2F12oHTJUxwarG04OChPUuFqcpGwOHl6gfuEg9u6EWCrTHNZoR1wf0Viu%2FdtEXOLx9gUGEb7d%2Bcmdagh%2Fjk7rkb1RYY8ao2VwZYqDg8BrToW3k%2Fs9ECdx5PRGDKhsFqnyhIpz9USK%2FpLDjOqdIdKKCmcnhSY%2FI6qpGBgCOpwRHqLIdxIuw8jR2pOuYYvMKR7QOvxv35n0RjUnuoSmkuDNsJsPUOv5dg1HxOLmLts7WAlj3fmPk%2F2AjD60BAvW%2FCOgOLKl52ue%2Fi6uU9pN0LnfVGswZfpYRxaKkCZsEdZI1i8bZbPW53BHizL3%2BgiIbtqAJugVuWQGW6EiOJaIBTglJ%2F8FQ7a665VE%2Fp5oUTkj92gvGSn9UmNir8sR1uDe7vTqbRAciLY0tV%2BEIQASIr0gvc75h2%2BWmIUdKRf6XjDln9bEBjqkAVUKOLOXR1%2FRLIvxITYO9ZR9iUD11wekOTk6La1uDjSaNHd0KURTgirqlicJQEU55UrxXOu7bFOG0DrzJWmyrf532xcaBt3tQLUDUGzv1sJ6c67nr5%2B2DUrSYeW7HJ1%2BZylSytckBbf2jvo6ACmM1yRAD4G32IHMBTmAWGhrdIqTC6HhIZev1Ksl%2FZhvJS6hvoLsJhNrv8xeaRik3v857gwp43OE&X-Amz-Signature=a634b82abfdef63ae8433b06cb26a592501ff8d1b5f2aa47b860b39fc6954898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBLCEL4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2BZXXPJmetaOsZ9nMPqcP900FSS70oM1M1mYq5dmEU8gIhAI9TuJEbCocGuecUC5CD%2FDvnqrBvr4nNK8tI1AokdH0AKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0kA1cUoj3N08e%2BUq3ANWboljhL8JQvSB9OLWSVKQwqw6SRgzGFx09hg6wQA%2F79mtjPnV11HToWV5Isosj20fRquE%2Bb3%2FSZZ0MZ5zy6Qf%2BCCwIBoI0gpUT2OsyydLbPWKw8ooo%2FYKfw3iERw80wwE5WYI3qz0K8OvF1qjryC4YucW6tGhK6M3wQYyqahqRbuj5Wj2C6c5dyafYI9fhidpyvgRZtsPX%2FUozK1MwCFJ%2F12oHTJUxwarG04OChPUuFqcpGwOHl6gfuEg9u6EWCrTHNZoR1wf0Viu%2FdtEXOLx9gUGEb7d%2Bcmdagh%2Fjk7rkb1RYY8ao2VwZYqDg8BrToW3k%2Fs9ECdx5PRGDKhsFqnyhIpz9USK%2FpLDjOqdIdKKCmcnhSY%2FI6qpGBgCOpwRHqLIdxIuw8jR2pOuYYvMKR7QOvxv35n0RjUnuoSmkuDNsJsPUOv5dg1HxOLmLts7WAlj3fmPk%2F2AjD60BAvW%2FCOgOLKl52ue%2Fi6uU9pN0LnfVGswZfpYRxaKkCZsEdZI1i8bZbPW53BHizL3%2BgiIbtqAJugVuWQGW6EiOJaIBTglJ%2F8FQ7a665VE%2Fp5oUTkj92gvGSn9UmNir8sR1uDe7vTqbRAciLY0tV%2BEIQASIr0gvc75h2%2BWmIUdKRf6XjDln9bEBjqkAVUKOLOXR1%2FRLIvxITYO9ZR9iUD11wekOTk6La1uDjSaNHd0KURTgirqlicJQEU55UrxXOu7bFOG0DrzJWmyrf532xcaBt3tQLUDUGzv1sJ6c67nr5%2B2DUrSYeW7HJ1%2BZylSytckBbf2jvo6ACmM1yRAD4G32IHMBTmAWGhrdIqTC6HhIZev1Ksl%2FZhvJS6hvoLsJhNrv8xeaRik3v857gwp43OE&X-Amz-Signature=1fe7ad99977a3c0ff5a571668091f436103e4b69aad80f88b3de2f5cb301c40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBLCEL4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2BZXXPJmetaOsZ9nMPqcP900FSS70oM1M1mYq5dmEU8gIhAI9TuJEbCocGuecUC5CD%2FDvnqrBvr4nNK8tI1AokdH0AKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0kA1cUoj3N08e%2BUq3ANWboljhL8JQvSB9OLWSVKQwqw6SRgzGFx09hg6wQA%2F79mtjPnV11HToWV5Isosj20fRquE%2Bb3%2FSZZ0MZ5zy6Qf%2BCCwIBoI0gpUT2OsyydLbPWKw8ooo%2FYKfw3iERw80wwE5WYI3qz0K8OvF1qjryC4YucW6tGhK6M3wQYyqahqRbuj5Wj2C6c5dyafYI9fhidpyvgRZtsPX%2FUozK1MwCFJ%2F12oHTJUxwarG04OChPUuFqcpGwOHl6gfuEg9u6EWCrTHNZoR1wf0Viu%2FdtEXOLx9gUGEb7d%2Bcmdagh%2Fjk7rkb1RYY8ao2VwZYqDg8BrToW3k%2Fs9ECdx5PRGDKhsFqnyhIpz9USK%2FpLDjOqdIdKKCmcnhSY%2FI6qpGBgCOpwRHqLIdxIuw8jR2pOuYYvMKR7QOvxv35n0RjUnuoSmkuDNsJsPUOv5dg1HxOLmLts7WAlj3fmPk%2F2AjD60BAvW%2FCOgOLKl52ue%2Fi6uU9pN0LnfVGswZfpYRxaKkCZsEdZI1i8bZbPW53BHizL3%2BgiIbtqAJugVuWQGW6EiOJaIBTglJ%2F8FQ7a665VE%2Fp5oUTkj92gvGSn9UmNir8sR1uDe7vTqbRAciLY0tV%2BEIQASIr0gvc75h2%2BWmIUdKRf6XjDln9bEBjqkAVUKOLOXR1%2FRLIvxITYO9ZR9iUD11wekOTk6La1uDjSaNHd0KURTgirqlicJQEU55UrxXOu7bFOG0DrzJWmyrf532xcaBt3tQLUDUGzv1sJ6c67nr5%2B2DUrSYeW7HJ1%2BZylSytckBbf2jvo6ACmM1yRAD4G32IHMBTmAWGhrdIqTC6HhIZev1Ksl%2FZhvJS6hvoLsJhNrv8xeaRik3v857gwp43OE&X-Amz-Signature=26cc4714770d30bf002a384ade6164f06ad5a1b6c30a34de7748e71cbd536712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SMTBRUA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCjYqZ2KnSv%2BKdU4Na%2FFfpTZE5HY5x2GHhcWzUJ9faNzQIgAUGQ5TVZ%2BWrkVB57PyYTMiGzBIhS72fIc7WJb5l9OlEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG8NJg5ULlvzoNf2ircA7uWWKr4SsISft5BMqxEMg5wpWeJl4Tek8FThsZM%2BQQs6KukbDsy%2BX10OjhTc3qaFBDrZjOjpj3VYNLMiKdWRTDweWys%2B58XjmadwKMIAx6yKEWxU6Xmuhtz1alTgGYu3iOQBlZpN7Vd7gMv1O2mW6sDUpdR9G90jpL6%2BuoKQ1N0xujL1K0CL9gKv%2BhlzeSU3l71Yu0%2Fe5vfkYe7bnch17R12fhj6Lt%2BnAKvMcl%2BbAW9%2B4geJ41eLgHMcL0IpU5xQev0RGoXhb8oVLyBRI%2BbOyBSgWZpx6TKbOMclRAEkN6mX6WMuxUhcFs6HhgWtqp%2FlCGS2p9fFwh5p7ETveN6bg75GIcctNSqjcIT2NsZD%2BW712nBS43magL0bPGZI7ou8Ck47UFpc5p5bzBokAusUrPSELBvSrdSF4r%2FJDBRYDekU0nV03DRMGzbhM4jdE3umXnolbTVkZxYfq%2BQxo2DcDClYrta0LE%2FrHPTA0K%2B3z7LuVWuzGhzjywjONX2e4l%2FQbkWKqVf3BqrcgAcepLPR1pbwEOMvPtBFRF4IVJo5CxFzjwCMFwC4XalX%2Bw%2BNj91TT4J0m6NovnMjaln2b3rKESra0u6eyLISJdOixgD4L1RDFrbEIDBk%2BClMdxmMIqg1sQGOqUBs5g5PBdUuiFpLPkQCcobDdoQ2suG5MrSgmORSgxNT1sqwM%2Fhw6JMycjVz%2BsUdVPdqJ0phWacf0xclE7IX%2B0rbO88V%2Fld06%2BGSaZJObr9nfRa2Xkl3SrsL3bAD3riiD6dnjh%2F%2FkQh5Jf1GmUh0NdgDUpAIs%2BqevNYMmxpblqHV14EbTZ3np3ItzWv%2FMx0nyd37CaEvf4B70EKIZvcffPzGYVmqYxH&X-Amz-Signature=b0e074cd14b9fee4d320d987fe60bf745c32d756db5a6cc1373210982526833c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJTJA73%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC7CkyqjhS3JxD%2Fzis%2B43%2B2mYYGVKUaRiiejOKUpGE3EQIhAMoOF4fNSVkjOSO0MZmvvrCzHdXevM%2BkTqRw5dl5zo5LKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV3t4LJ8hclDJysVMq3AOjNxDKLnNtMp6DwKnRg%2FQqHvCG8xPTDwiX1Pb0EanpTfZ%2B8808WnacotV4HkNRNDLqAZG30URDXF%2B7AfynYIvE05OcI5esZ4lrN%2BLzho4UFQnVflbuWfVg2sqKk8Mk69eMqebC6GrbOz8%2FhIAywnVB0on%2BA2%2Fn3qj%2FyeQpng0mAEnSd1gMNynSTveWHzTvI%2BS8I18FFCoSS31l3HP0FSZQtaafXIG0GmEE3OLUHAPSMgHSpeKqgOgBmNxGNJ0gjg4XDJVLY%2Fw8NXYv9mXu52Aoz9oSwBpNiN4Yg2HIIUAijCfu5sjYoa5fGF1w%2FU2ZlMqYl0BHrm7TbV1N0xphxLr%2BG8tYsja%2ByArbxphLt82cimywfxo8WUbIgmbo0bl8SktY1whYTALYna59LeH%2Bl8gBNKM1%2Bn4GtRqWTC8RPgWPHdrxhNKmvDNMA1JBNwbCpud%2B0l4maTH%2F%2BfjEHoR7O3%2B4Rzl3YX29KmAm8SwhSCKNwxvB8hBnJBqxXRVSrVSUr6VhthGeQ0s225TLpylyFooaDuOdegAwcHxGYbKwbjgkh6K%2FA2fax037C5aQT1mZj7Gg%2FQ6zFz8Odt1L0gRF7eYeSx1OdlFkWJBZyNqoFCZVmDqSd%2Bd%2FcBnH7iYpYDCCoNbEBjqkAaXA0dtZfhCal5Wz2Gm0z07LaGmhko3GWqK1qmmj%2ByK43OqqO71iu9zQOLU4v85A7hp6CWusj3yY3iQ34t1C3O41M02e7LrjxcteAFKXdmsgYNMST6KLf1rkmkzgqzU%2BBKYXIbfRxaNxPpxIl89hro6q7zaKEUUgygIG44jWdOHZGucEC0Qp9eVg14obDEr5MeBV%2Fb1MSZUfSWu97gGWgbhLa4Ns&X-Amz-Signature=7d907b1755f26e6bc5b33d3071bb8c97eabe917c33d22810c6c7f070eb683193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBLCEL4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2BZXXPJmetaOsZ9nMPqcP900FSS70oM1M1mYq5dmEU8gIhAI9TuJEbCocGuecUC5CD%2FDvnqrBvr4nNK8tI1AokdH0AKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0kA1cUoj3N08e%2BUq3ANWboljhL8JQvSB9OLWSVKQwqw6SRgzGFx09hg6wQA%2F79mtjPnV11HToWV5Isosj20fRquE%2Bb3%2FSZZ0MZ5zy6Qf%2BCCwIBoI0gpUT2OsyydLbPWKw8ooo%2FYKfw3iERw80wwE5WYI3qz0K8OvF1qjryC4YucW6tGhK6M3wQYyqahqRbuj5Wj2C6c5dyafYI9fhidpyvgRZtsPX%2FUozK1MwCFJ%2F12oHTJUxwarG04OChPUuFqcpGwOHl6gfuEg9u6EWCrTHNZoR1wf0Viu%2FdtEXOLx9gUGEb7d%2Bcmdagh%2Fjk7rkb1RYY8ao2VwZYqDg8BrToW3k%2Fs9ECdx5PRGDKhsFqnyhIpz9USK%2FpLDjOqdIdKKCmcnhSY%2FI6qpGBgCOpwRHqLIdxIuw8jR2pOuYYvMKR7QOvxv35n0RjUnuoSmkuDNsJsPUOv5dg1HxOLmLts7WAlj3fmPk%2F2AjD60BAvW%2FCOgOLKl52ue%2Fi6uU9pN0LnfVGswZfpYRxaKkCZsEdZI1i8bZbPW53BHizL3%2BgiIbtqAJugVuWQGW6EiOJaIBTglJ%2F8FQ7a665VE%2Fp5oUTkj92gvGSn9UmNir8sR1uDe7vTqbRAciLY0tV%2BEIQASIr0gvc75h2%2BWmIUdKRf6XjDln9bEBjqkAVUKOLOXR1%2FRLIvxITYO9ZR9iUD11wekOTk6La1uDjSaNHd0KURTgirqlicJQEU55UrxXOu7bFOG0DrzJWmyrf532xcaBt3tQLUDUGzv1sJ6c67nr5%2B2DUrSYeW7HJ1%2BZylSytckBbf2jvo6ACmM1yRAD4G32IHMBTmAWGhrdIqTC6HhIZev1Ksl%2FZhvJS6hvoLsJhNrv8xeaRik3v857gwp43OE&X-Amz-Signature=16b34e27f7a4ef5978f7e8b1aa1e3a0c2405b2f9e190cdad159738c583fe0e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
