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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSMJUJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDm5k%2BjmClsELUlBSas8iD%2FuDNiAUtXqkFA4gzdSugCBQIgRn6%2BclPnd2xR%2FdxfA4Vl5sdls53YvP%2BWOt1TB726OAoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGtONLTi1AOFw%2B8uPCrcA%2FjEObXZjv%2FYpXXbCgURSYALTGPzZnDqrTrMb1DldYxjmXrw%2BWLJI1FOO2TUVtfqJ%2B5SYnR%2Fuvnr8K%2FbqRFh0BoiZlzxwns%2B0VMKrOkOOoaFWIzD5HhvGPDc5RNgBb1dfxrq0iDgcBfFfq%2Biyc2m%2FdI9xqLqV0uJ6Wdl1Hn%2BGyGZr4fyj2Ipfre%2B0vByKeH6kwTy9bKT%2FEY2H0xiClsgKQ3wXn7WE0GAbU5wThPTFSUffNwDWG7lUrAwNZdQU5nJera92%2F51V%2BxT9g0U%2FHMXReZQgRHv2Bqoj6jQ2r2eFZl1U9Gq9%2BNGrgkMBO56Zl2JgtyhKw9ZVtbGB%2BsbSkD3%2FcXCp13QZgcKCbkl9LZM0NGCZbq4wbKapJZIea7yyPam9V%2BzCfvtLepvjjHSGKLx%2FMjD6ac2RAEv67NxwGEZMFVOk3CoedQWtCqNQkmemQrQsVSvZUNUXTU5Tqb3HrPewZwPC74h4p%2FYWwm%2F%2FHnvejUUGJUFNlh4Nvye8%2Ba0evBmE3vJLltkNG5VEFeSy54O%2FYmS6nMb%2Bw2%2FeXizdvizUVa4vB2JzzAtgIOaqAVW1zJwS9Gli8J4p%2FboPpeg5vgewbAPcHa3dFsMOqgmvTbnDpFeyviqe7w%2BdTeE4WmaMP%2BVzb0GOqUBUIPWxM0qu7iBRVEht39FXHoQk%2B8bboKMGRuqaa9aMLfJcNh3ch8jVP5d%2BJKBNkhfClwfy%2BJ5ORT9%2Bm1PjpzHwc%2F1BPj4PLzelHl%2FWlVQHHX8S6GBshLCCoaCL1aaLQOysitj8Hc09wgOIHb43mAFDQYCc2GKCQTBl30CpMM1sOcOTs6B1366nfpj0ncuQq65YEdx8bU6ybG6Oqkl2AYKxpyXMKG2&X-Amz-Signature=87cf9af3de4073ab447c7b8daad9d2d94a8eadee42ea35bdd87b056bc4fdc566&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSMJUJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDm5k%2BjmClsELUlBSas8iD%2FuDNiAUtXqkFA4gzdSugCBQIgRn6%2BclPnd2xR%2FdxfA4Vl5sdls53YvP%2BWOt1TB726OAoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGtONLTi1AOFw%2B8uPCrcA%2FjEObXZjv%2FYpXXbCgURSYALTGPzZnDqrTrMb1DldYxjmXrw%2BWLJI1FOO2TUVtfqJ%2B5SYnR%2Fuvnr8K%2FbqRFh0BoiZlzxwns%2B0VMKrOkOOoaFWIzD5HhvGPDc5RNgBb1dfxrq0iDgcBfFfq%2Biyc2m%2FdI9xqLqV0uJ6Wdl1Hn%2BGyGZr4fyj2Ipfre%2B0vByKeH6kwTy9bKT%2FEY2H0xiClsgKQ3wXn7WE0GAbU5wThPTFSUffNwDWG7lUrAwNZdQU5nJera92%2F51V%2BxT9g0U%2FHMXReZQgRHv2Bqoj6jQ2r2eFZl1U9Gq9%2BNGrgkMBO56Zl2JgtyhKw9ZVtbGB%2BsbSkD3%2FcXCp13QZgcKCbkl9LZM0NGCZbq4wbKapJZIea7yyPam9V%2BzCfvtLepvjjHSGKLx%2FMjD6ac2RAEv67NxwGEZMFVOk3CoedQWtCqNQkmemQrQsVSvZUNUXTU5Tqb3HrPewZwPC74h4p%2FYWwm%2F%2FHnvejUUGJUFNlh4Nvye8%2Ba0evBmE3vJLltkNG5VEFeSy54O%2FYmS6nMb%2Bw2%2FeXizdvizUVa4vB2JzzAtgIOaqAVW1zJwS9Gli8J4p%2FboPpeg5vgewbAPcHa3dFsMOqgmvTbnDpFeyviqe7w%2BdTeE4WmaMP%2BVzb0GOqUBUIPWxM0qu7iBRVEht39FXHoQk%2B8bboKMGRuqaa9aMLfJcNh3ch8jVP5d%2BJKBNkhfClwfy%2BJ5ORT9%2Bm1PjpzHwc%2F1BPj4PLzelHl%2FWlVQHHX8S6GBshLCCoaCL1aaLQOysitj8Hc09wgOIHb43mAFDQYCc2GKCQTBl30CpMM1sOcOTs6B1366nfpj0ncuQq65YEdx8bU6ybG6Oqkl2AYKxpyXMKG2&X-Amz-Signature=fe705ce0026a5cc453ee8e047f06105ea1de488adf9e82b955295472b7fee077&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2Q6OD5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCn%2FuyxFlNSHN6NuvzRyyfUEEFtHZ7Dn4oI9hEWH1f3LAIhAMOy8wBjLY1mq%2FNcc7opEJBb8C10dvACvq38OWWWUbhvKv8DCHgQABoMNjM3NDIzMTgzODA1Igyu%2FibBEzTlUyvzDWwq3APgWtLD8z4sindxqOwkC1ueD9dzFyB3eBvdEZV1P5Qx3%2BXfBGHhcqkTOhYf9KrfkMkfJuOnc87OScxajIF5rfjQ2fz8HDmlv788mLnxA66vsjmGe93uRiVkcF4tW8OjnvOLKZ7UXkdcI5vAgsvktr0370AzkSDDKzYOOCHBaK%2Fg8p9MjLqwGf%2B2WS1PlDJcqcbzidUINGe0GCqtjzmB%2FO4IyfJBBUNsQr3wGbHUUYI08HIVOXVOzU6W68AcoxG%2B4NjP%2B5xxkwlmDKsQplgZS%2FRTE0I%2BPBXBELSiy%2FLdvmlPX0WFjzrcqvq0HWlyfJ923KwARnr9xv7nL%2B9LjLQEi6zbYrE0Vw8reqeAbtp5UY6qcGgWWDzApNyFqdqw%2FPwNOUk2slOUy64P5Y3cBkzsJEjV5%2Fc%2FPJ85iwJUDNW%2FWMjeIGIyjpd1Pvha37tqckMyYAWcN7CsiKbJrF6jI%2Bd9Le%2FBJDUct29f6flaLiWdKE94ERzeC6Q4qI2uMIA77pKKm8T6MTFbX1gDRcWEO8dK9cZuKn69N%2F%2Br82fQLR3Ij5fOKbjh1roIn1SP6kKstkrk2C%2B8IQ8P%2BHhOB8QEz2NyPhkMI%2BryfDlssW5gjav%2Bw6ljrn0VWUs1iLhRN65jOzCyls29BjqkAf%2BHN8qYRP6CcfyGuNaSw7MziK5quFhgoz8dCL79pvn89DhqCCC0tkDC43B2srE8f%2Bt1nsWne%2FcMRWOM%2Bw5%2F5kW6mBESBL15EI48XstvtJjmRE6zmNaBROPUhAk49sIV7x7Yr2d6r8RUBS1U0IWbF%2B4TjivCpX%2BQJ8UVOYeHwcA5j76LG2zaHMc9XmozdH7aPbkqkPLRY7xqpfqdM9%2FHKES98awx&X-Amz-Signature=d4569bfdcf73232ce87689fa470dfcd14549baf320be8ac31c8d01c52ac6ef10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHZD544%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIFuKsVicxjcFh6acAF%2Bx9%2Bt4EqQycQ9Gkp85n%2Bt21lCZAiEA4HMQY3QVEdN9ik%2B7DwkLG3UCjIjpFFFbJPY7Wrl6xyoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPJkAf8lxnEHXDFu3yrcAzMsCOuA7uWMiSjEt4fPmRgwiHTtY1P431kOJXY1bUNo5wJiNchum8SMG%2Fdrtm%2BpEq4b7JWJChYGO1gaz0bknkdVgbDa13FAprDPpJzPgqcrpd72Rw93p6aXRb1umLUYWFVzv8WeRIRPz9euDzSiIhoD0Nkud29byc%2B0y3BE%2Fo1%2Bj2d3rszsKc9VFp6d6dvdmEpbObDSYGFx%2FJZnH2355Z0gL8YSUD5EscTV8nfu5Ewuj8DagbAWG84R2Jz2DebytwsTsm3X%2BuZ3soWGFnIH3BohwfQF42%2BRH8WctSCh2B0%2BMnXY%2F40RCBlSKLXszHSrHVa52xAK2bHnP27fHXVI1EKWgMmfaDcp6iCDT7zdKLRnskqq2an3xdKs7vanH4nC7w7K7LH3Jk5F5PVnEJBuxXyEWvwfoHXVbACbWEQHFPu0A4zHE6vgBujO5nvz%2BWDMvaFuCSoFQeOF2jaeigb3bxQA5DkZIhh94jTIVjy56CyQJ2JEALGMG%2Fuht3xLRZJpYF6UtTk6rp04ycwY3Hpj%2F8o65FZgvZHWIypV5ff6oxnPKKZUOKBc9BjoNiTh6ADnno8nvZnWDore7lQjel%2BT%2B0OKyejP1TNqfyZNUFnhDqRUcv7twtQMZ0gPSttMMMuWzb0GOqUBGLWhjiOENsBZ1OEFAtT3RhJ2qElCE6YHVqjZ0MeYmhZRYF1GVwEIh2uKYsKsBQCcjtcalyVCteodgltzFxZCD5pem0pZtV6JLzPMfR7bw%2BAXYc9UU2lFucYGGCRpf5SYYXhssqoSvO8x86iHEwS8O3ZbKvp5YGxH%2FhrSDipoS%2FiPjS7hiK29X1Q60AHbUijc5z67KFZzfkS7isS0Vf38%2FoEP%2FqCF&X-Amz-Signature=e7a32b26ede90a44abb1d98b10b36339fc69cb69be5246b90e544389d9b427ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSMJUJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDm5k%2BjmClsELUlBSas8iD%2FuDNiAUtXqkFA4gzdSugCBQIgRn6%2BclPnd2xR%2FdxfA4Vl5sdls53YvP%2BWOt1TB726OAoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGtONLTi1AOFw%2B8uPCrcA%2FjEObXZjv%2FYpXXbCgURSYALTGPzZnDqrTrMb1DldYxjmXrw%2BWLJI1FOO2TUVtfqJ%2B5SYnR%2Fuvnr8K%2FbqRFh0BoiZlzxwns%2B0VMKrOkOOoaFWIzD5HhvGPDc5RNgBb1dfxrq0iDgcBfFfq%2Biyc2m%2FdI9xqLqV0uJ6Wdl1Hn%2BGyGZr4fyj2Ipfre%2B0vByKeH6kwTy9bKT%2FEY2H0xiClsgKQ3wXn7WE0GAbU5wThPTFSUffNwDWG7lUrAwNZdQU5nJera92%2F51V%2BxT9g0U%2FHMXReZQgRHv2Bqoj6jQ2r2eFZl1U9Gq9%2BNGrgkMBO56Zl2JgtyhKw9ZVtbGB%2BsbSkD3%2FcXCp13QZgcKCbkl9LZM0NGCZbq4wbKapJZIea7yyPam9V%2BzCfvtLepvjjHSGKLx%2FMjD6ac2RAEv67NxwGEZMFVOk3CoedQWtCqNQkmemQrQsVSvZUNUXTU5Tqb3HrPewZwPC74h4p%2FYWwm%2F%2FHnvejUUGJUFNlh4Nvye8%2Ba0evBmE3vJLltkNG5VEFeSy54O%2FYmS6nMb%2Bw2%2FeXizdvizUVa4vB2JzzAtgIOaqAVW1zJwS9Gli8J4p%2FboPpeg5vgewbAPcHa3dFsMOqgmvTbnDpFeyviqe7w%2BdTeE4WmaMP%2BVzb0GOqUBUIPWxM0qu7iBRVEht39FXHoQk%2B8bboKMGRuqaa9aMLfJcNh3ch8jVP5d%2BJKBNkhfClwfy%2BJ5ORT9%2Bm1PjpzHwc%2F1BPj4PLzelHl%2FWlVQHHX8S6GBshLCCoaCL1aaLQOysitj8Hc09wgOIHb43mAFDQYCc2GKCQTBl30CpMM1sOcOTs6B1366nfpj0ncuQq65YEdx8bU6ybG6Oqkl2AYKxpyXMKG2&X-Amz-Signature=74a33842664e246b05ed381e630155106f6b5a52108a818f95a764b8a0f97c66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
