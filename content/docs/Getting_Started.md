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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVR2DND%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP90IX26ATc5luq%2BeEZQEKUViTly4jN5b5Pw9Hg2bmlgIhAN3UHtkQUG9MjIqGdub0FOY9c78c5MgFJO4Yt0RwbfDTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7634RCE90fE%2BPIyMq3AMD5AL1gpWAS3fiH7wdJUwvhD%2FlPwVpHFeZ5f2ehMZItK%2FVhhkFtMXJWXZv2q1smlIONGpWeVUau%2FKrVexaXlk07oiGeimTvI6JiE8iQcMcRJxRPPoKJ7lsVYEyTB%2Bg72nmGucyItntcWmkOfdtkNbJ%2BppyHC5ZhqMkX6q2PJ2XmsQblGy0Azz3wYAEftfwH23oTH%2FeoxU3Z4nRFn2NHE%2F6vgqxIZyxpGb9ETl68Vh7OCa6QqNglw7fMaUveDAfX0DO6BvZ8CYJosDBm%2BluUF%2BGBHPoKTR8HAdGi8srFkfapQ9b6YCOuz8NnF%2F3Do%2BmvMjOlG1SZQ4Pg1qFTd%2BaMBWxKyUZ%2BS2Vlpj731GWUCevR9NEJ%2FvYpyb6ACdsRbXzwVSx22umm3fMrKmSoBhAXzLrRBYRcBO0ILtfgOuSbcGb%2B4ekRCjX9OIYqCe5%2BSeL%2BDcGRqWeYObxCk%2FftFfucRB83XSQSRk6RauiWNexnnNCq4EyQ6Pk4KAAsSRaUWGNCbiv1qHA2Hwdskbjv4UFA02Jy7dES6iH46VK2kRUUOSrXvJBYS61IDoebyagjNdlQEUoLwiGLC63zWNeDbz0vqnZyP%2FkIGEB65u3Bc1HPYRgKARTsd1ivaQWLoXdrDD5mdnCBjqkARwTYBD0s2vC4JSqaJ94OMtzNnEkBm%2FpxqdSFg479orBHJea5sliYZVc9uQG6y6F4JvJvllNQ2LOwh0aW%2FJ0TindfeV7D%2FF8qUsFYlHCL3nuYKL8MnnwgXbF0Xm%2BfCQC7TUO5qNbXBK89KsXJJ9q%2BFHXAVKEUFRjTYXtDkbXTTPt8gmv8sD35vDSQWO6Y9DF%2B%2F08fespmmjCXX%2FaLOm7jZjMWO6K&X-Amz-Signature=9929be1280868118921066ee4ccaf7bac8463c7b1ea1a507658af10dd4398590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVR2DND%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP90IX26ATc5luq%2BeEZQEKUViTly4jN5b5Pw9Hg2bmlgIhAN3UHtkQUG9MjIqGdub0FOY9c78c5MgFJO4Yt0RwbfDTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7634RCE90fE%2BPIyMq3AMD5AL1gpWAS3fiH7wdJUwvhD%2FlPwVpHFeZ5f2ehMZItK%2FVhhkFtMXJWXZv2q1smlIONGpWeVUau%2FKrVexaXlk07oiGeimTvI6JiE8iQcMcRJxRPPoKJ7lsVYEyTB%2Bg72nmGucyItntcWmkOfdtkNbJ%2BppyHC5ZhqMkX6q2PJ2XmsQblGy0Azz3wYAEftfwH23oTH%2FeoxU3Z4nRFn2NHE%2F6vgqxIZyxpGb9ETl68Vh7OCa6QqNglw7fMaUveDAfX0DO6BvZ8CYJosDBm%2BluUF%2BGBHPoKTR8HAdGi8srFkfapQ9b6YCOuz8NnF%2F3Do%2BmvMjOlG1SZQ4Pg1qFTd%2BaMBWxKyUZ%2BS2Vlpj731GWUCevR9NEJ%2FvYpyb6ACdsRbXzwVSx22umm3fMrKmSoBhAXzLrRBYRcBO0ILtfgOuSbcGb%2B4ekRCjX9OIYqCe5%2BSeL%2BDcGRqWeYObxCk%2FftFfucRB83XSQSRk6RauiWNexnnNCq4EyQ6Pk4KAAsSRaUWGNCbiv1qHA2Hwdskbjv4UFA02Jy7dES6iH46VK2kRUUOSrXvJBYS61IDoebyagjNdlQEUoLwiGLC63zWNeDbz0vqnZyP%2FkIGEB65u3Bc1HPYRgKARTsd1ivaQWLoXdrDD5mdnCBjqkARwTYBD0s2vC4JSqaJ94OMtzNnEkBm%2FpxqdSFg479orBHJea5sliYZVc9uQG6y6F4JvJvllNQ2LOwh0aW%2FJ0TindfeV7D%2FF8qUsFYlHCL3nuYKL8MnnwgXbF0Xm%2BfCQC7TUO5qNbXBK89KsXJJ9q%2BFHXAVKEUFRjTYXtDkbXTTPt8gmv8sD35vDSQWO6Y9DF%2B%2F08fespmmjCXX%2FaLOm7jZjMWO6K&X-Amz-Signature=a296d6fa45442747034b97cb7954806c62752562acd356e4efde8a816eb9f95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVR2DND%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP90IX26ATc5luq%2BeEZQEKUViTly4jN5b5Pw9Hg2bmlgIhAN3UHtkQUG9MjIqGdub0FOY9c78c5MgFJO4Yt0RwbfDTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7634RCE90fE%2BPIyMq3AMD5AL1gpWAS3fiH7wdJUwvhD%2FlPwVpHFeZ5f2ehMZItK%2FVhhkFtMXJWXZv2q1smlIONGpWeVUau%2FKrVexaXlk07oiGeimTvI6JiE8iQcMcRJxRPPoKJ7lsVYEyTB%2Bg72nmGucyItntcWmkOfdtkNbJ%2BppyHC5ZhqMkX6q2PJ2XmsQblGy0Azz3wYAEftfwH23oTH%2FeoxU3Z4nRFn2NHE%2F6vgqxIZyxpGb9ETl68Vh7OCa6QqNglw7fMaUveDAfX0DO6BvZ8CYJosDBm%2BluUF%2BGBHPoKTR8HAdGi8srFkfapQ9b6YCOuz8NnF%2F3Do%2BmvMjOlG1SZQ4Pg1qFTd%2BaMBWxKyUZ%2BS2Vlpj731GWUCevR9NEJ%2FvYpyb6ACdsRbXzwVSx22umm3fMrKmSoBhAXzLrRBYRcBO0ILtfgOuSbcGb%2B4ekRCjX9OIYqCe5%2BSeL%2BDcGRqWeYObxCk%2FftFfucRB83XSQSRk6RauiWNexnnNCq4EyQ6Pk4KAAsSRaUWGNCbiv1qHA2Hwdskbjv4UFA02Jy7dES6iH46VK2kRUUOSrXvJBYS61IDoebyagjNdlQEUoLwiGLC63zWNeDbz0vqnZyP%2FkIGEB65u3Bc1HPYRgKARTsd1ivaQWLoXdrDD5mdnCBjqkARwTYBD0s2vC4JSqaJ94OMtzNnEkBm%2FpxqdSFg479orBHJea5sliYZVc9uQG6y6F4JvJvllNQ2LOwh0aW%2FJ0TindfeV7D%2FF8qUsFYlHCL3nuYKL8MnnwgXbF0Xm%2BfCQC7TUO5qNbXBK89KsXJJ9q%2BFHXAVKEUFRjTYXtDkbXTTPt8gmv8sD35vDSQWO6Y9DF%2B%2F08fespmmjCXX%2FaLOm7jZjMWO6K&X-Amz-Signature=912dfd357c8ae168f80f52b994b3ea0fc5260623e70b3c34bde5f6703e7ceee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRT3D3BP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp7xqLZwV5k%2F1ujpFDW7fZH55%2Fx6HqD0ggMme2rRUYBQIhAJv5HIiMISUHxofX7Mh9ACzqI2M6LYtXLqnG6QP2bKsFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQNgkjeUzoJbvBHSoq3ANLCost925pn%2FS8AQjRUb2H%2FPSELy7szHpdU%2FjaAyu28D9vO3sXWMjg%2F4FzyytmAb4SeI91sdYX1WwYeUQsuEjnzMOQcy6W%2Fr%2Fn%2FwREZt7P%2FO%2Be9LNPtCpVBMId14U0B3d%2BAzMRENxqbLlfcFY3Ad5TJ25TfzReflBC8HShYpVTUqL%2BvAO3fYniryvh8LJKuoYYo9RjQ7O%2FejS4Ojc7jpraTXGCR220RGbDFTWKDwxum0yyBrI%2FqXEPSAUKWJlhCzxbX4IVBdl4iGZuhXs8KT82HLx%2BajazaFjvF3TKinBJOQNtyiFVBzvqqL31VJxd%2FHGTOymT7v0QLUJuoHTTf4jb5SSU%2FuF7M2xFrTezXhT8wJcXcAC5dbAKVzYJ94KhrXXB5CtWqXxKE7tqP4H0wq4B7FIEse7EO4jdYiGbNgne4V%2BZ8u3Wl2cvT%2BACDQk8jpuLTCvKGibETQ5dpHLXiGXfw9v2XDrTe0b3K1%2Bke3WDOAV5DavPJy%2FMA7Jo%2Fqayr8hX6z%2Fslj9FgGaDQK8QGgC6pL%2Bz%2Bn4kMSrKImqC5I54o%2BR%2FlPqD2P7LjFfy9knHYS%2F9D5A14267mcSwTYiGzKcpBjBHa%2FIwCoQW4h7dhkTtc%2FzLRho3j8OSI1Jw3zCBgtrCBjqkAQ0D1E%2BpJNVN4aESxRb7q3jan6QEXT3wTQBXWyEQWa78qKEj4aF2vPMt35Ydh7EB98uyOLT5t379U0sMrhlaT1aq86eNDMfck9p8dWZ3XMyA0ox3d2GXPA104pJTrZ5mD0RR5FcIBHitlgoBNHvpLHHrxv57bMj9aXWyUPck%2BVrqolAvd50SnnWoZ2boNxYsz7QaweYEd6Uwkt%2FRYhdiFMblqSFn&X-Amz-Signature=857f5279c7d3d0f41aafcccff66c2d945a0017d82c8c240d7c4195a239927040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5PWZSEG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaCLGvHqHyDAsh%2BqZT5gDI860HFdmw0LUgKiFg%2FucRfAiARpx%2F1IxJ3nMw2wiLy4st%2B5nLjGqANolB99qiTHd%2FQ6yqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM02XoA0OrcOIUjYgNKtwDhDmjTFVOSFKKOhXdgCAC165ne1RHWFcR5XTp016vpRi0OLwyFG34VShr46OcU8DlzGwdei7FjSwbCPLMxLwDq0iCQa0WqwgWA4yrogEYwHHsi88X4%2FharmYg4OZ0N53BfKYQ47nTHDKIi4e%2FvLq9fd72a0oPedrM%2F%2FcOk%2FS5wj6O86PAVj4xF4d3bkxz4kaPOQ%2BTA0YDfZn0F4FJfA31eVrv1gcvdLUln3J12LdMSDpBcKtqsQ2dh1xqLF4sqYiym3HWj4a9OwhWxybhgmf3uWJ97nSS1ZgFYS0B259gPPH5eI17uNNDBu5Tdhe6UZ6FT3xc%2B0DlePh%2Fys3YpMmfNqBe%2F4tbJuBM8RSf8zmFOyegHxjw5xR%2FLl7h8WQenRrZsnSWVGOWwJa0hrgcCRUIMoq9V%2BW85N71bxq8UdHUqyoZlLiRypoDaWmlpadOXNXE9qHTOZb0NkcATeOAKxoKMiZ0eX0qgOhMVqe%2FMZKLwuOtgOvsP4rtA%2B2y%2F0%2BI0nzQsRkHhFRZWBo7DqhBh9JtzsR6Wa0aPEA%2Fv4OMCtDMX0DPuEigLlMRagAf8ozQnN4yKnRO5Suo4jUxIus7H9kNEDoTYbh%2Fi80Vu%2FA0GaU4VFVeZTReSeFpGYdzAI4w2NXZwgY6pgEsN4qIyXp78buRDhC%2Fx2MnY9YLN3JGAg%2FJqYtZFtTTEotPuifZ6xTmCrqaQEF8RDB%2FOCGvIoQmwQW4YKTRTQke1KFCk1orkfkQ%2BJV6BKuYGm5xOP5NuNqKNWwyiBv3ZvdxRpcTMD3bmAUmzNiacPTfrEpmgLohOMaQpwKTHE6NwpRXCGVU%2Bh8W4VKrbq2h4ROm%2BIWwiiBzvZYsuwGs89FJndK7%2BNyl&X-Amz-Signature=06e79c4bb0f1045db57535065c5d7a22a7c9a12f3e44a0b2289c8e89108e016a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKVR2DND%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP90IX26ATc5luq%2BeEZQEKUViTly4jN5b5Pw9Hg2bmlgIhAN3UHtkQUG9MjIqGdub0FOY9c78c5MgFJO4Yt0RwbfDTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7634RCE90fE%2BPIyMq3AMD5AL1gpWAS3fiH7wdJUwvhD%2FlPwVpHFeZ5f2ehMZItK%2FVhhkFtMXJWXZv2q1smlIONGpWeVUau%2FKrVexaXlk07oiGeimTvI6JiE8iQcMcRJxRPPoKJ7lsVYEyTB%2Bg72nmGucyItntcWmkOfdtkNbJ%2BppyHC5ZhqMkX6q2PJ2XmsQblGy0Azz3wYAEftfwH23oTH%2FeoxU3Z4nRFn2NHE%2F6vgqxIZyxpGb9ETl68Vh7OCa6QqNglw7fMaUveDAfX0DO6BvZ8CYJosDBm%2BluUF%2BGBHPoKTR8HAdGi8srFkfapQ9b6YCOuz8NnF%2F3Do%2BmvMjOlG1SZQ4Pg1qFTd%2BaMBWxKyUZ%2BS2Vlpj731GWUCevR9NEJ%2FvYpyb6ACdsRbXzwVSx22umm3fMrKmSoBhAXzLrRBYRcBO0ILtfgOuSbcGb%2B4ekRCjX9OIYqCe5%2BSeL%2BDcGRqWeYObxCk%2FftFfucRB83XSQSRk6RauiWNexnnNCq4EyQ6Pk4KAAsSRaUWGNCbiv1qHA2Hwdskbjv4UFA02Jy7dES6iH46VK2kRUUOSrXvJBYS61IDoebyagjNdlQEUoLwiGLC63zWNeDbz0vqnZyP%2FkIGEB65u3Bc1HPYRgKARTsd1ivaQWLoXdrDD5mdnCBjqkARwTYBD0s2vC4JSqaJ94OMtzNnEkBm%2FpxqdSFg479orBHJea5sliYZVc9uQG6y6F4JvJvllNQ2LOwh0aW%2FJ0TindfeV7D%2FF8qUsFYlHCL3nuYKL8MnnwgXbF0Xm%2BfCQC7TUO5qNbXBK89KsXJJ9q%2BFHXAVKEUFRjTYXtDkbXTTPt8gmv8sD35vDSQWO6Y9DF%2B%2F08fespmmjCXX%2FaLOm7jZjMWO6K&X-Amz-Signature=213d75ceab7ae93ac1fde745e18cd2b626ba5438b8546c2c503c7983aa9053a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
