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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJWHEV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD9xsq8zMn7aOu1n7YueNz5j2E3prrRQQrLEhqaB9wBtwIhAPZO1KnetoSPZL%2FwZIQnsaT4ADgGkbPvYI0ymGA0kDCuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK9vJayQgMsVpWnQq3AM0aOvZnltyrkMCAbXrUDBA5xWgtKiBaSR3oPDfBQaIeP8nkrtjBglyneDQAnvVKSdCFXhMEZOH1sLw%2Fv6QadaMpxXU9kGgsm9g2lOv0Xz%2FS5jV22jDYAoyU4t1fQTB1iTwZeDE2x4RlnQQPRl9TVre%2F94IdasEUO0lP6bqV6Ok1XTXhW%2BV%2BLRmH29SQn2%2BM%2FrZ%2BaPELtHTTndYlwnu8nWyNcnfmCIBYaJK1mi9nUcBNmyL%2BmW%2FMRJm4xxnIRdxLFNJ%2FoGQw6pZL03a3jo3VQSv2Ogb74MB8OO7SqubFubWQ6eZUmkSeqqzhG%2FGTzEdGtG9HSrfwxro%2B84d%2F8abTVwKfEyS%2Bx7Hy9ycAkAbN0adi8BfvAbhtiVX6iL7g3RU5LsIf2QpIDKX8uKtFSMwV3%2BDJwsiOuC%2Fewz9m3PSDjTNxTbAdRUJnQwxsXLFnp17rcbGL4WikjRgSWJxE%2Fgu%2FSG3J2T3OIxsd1EqJe6iSXkaz4A45HsyVRFUGu2Wv%2BPpQlC3V3eEzkJMOx2rUgO9edJUIm9BinPuaXvZgBdsC7k0O12Q5GxN%2B3gmtNw%2FiiBG6dwa%2BTjhgEZsV%2BhCYWUgUko3vwLvXQtAZqhuyxe%2F6h%2FAkcPvbvtj8Mx83mzKSjCNloTBBjqkAUVoW5dGgnbPXWv%2FcU04chs6lH%2FvxNone4eF2uWdKQqLrORostqvoTsVIAaQM5ZQ4Ufwaxk9LDfZnTPWBtGvmSdAaUQCCKIOpFtM%2B4LdQwc2%2Bn1h98MeTjf3uz5jJdtiOFrPWpU%2FvrBK53U4h2YQ8Wqld4xpiAdoQtuI6jFbdgNmvZRaOGFNLXOSLJGqr6nGYYHskOJZkjHwnai%2Fperbe%2BXR9jzh&X-Amz-Signature=b7ccd70376db29652e63994df55480cb30a62f4c21c7bd90476e53247382773c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJWHEV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD9xsq8zMn7aOu1n7YueNz5j2E3prrRQQrLEhqaB9wBtwIhAPZO1KnetoSPZL%2FwZIQnsaT4ADgGkbPvYI0ymGA0kDCuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK9vJayQgMsVpWnQq3AM0aOvZnltyrkMCAbXrUDBA5xWgtKiBaSR3oPDfBQaIeP8nkrtjBglyneDQAnvVKSdCFXhMEZOH1sLw%2Fv6QadaMpxXU9kGgsm9g2lOv0Xz%2FS5jV22jDYAoyU4t1fQTB1iTwZeDE2x4RlnQQPRl9TVre%2F94IdasEUO0lP6bqV6Ok1XTXhW%2BV%2BLRmH29SQn2%2BM%2FrZ%2BaPELtHTTndYlwnu8nWyNcnfmCIBYaJK1mi9nUcBNmyL%2BmW%2FMRJm4xxnIRdxLFNJ%2FoGQw6pZL03a3jo3VQSv2Ogb74MB8OO7SqubFubWQ6eZUmkSeqqzhG%2FGTzEdGtG9HSrfwxro%2B84d%2F8abTVwKfEyS%2Bx7Hy9ycAkAbN0adi8BfvAbhtiVX6iL7g3RU5LsIf2QpIDKX8uKtFSMwV3%2BDJwsiOuC%2Fewz9m3PSDjTNxTbAdRUJnQwxsXLFnp17rcbGL4WikjRgSWJxE%2Fgu%2FSG3J2T3OIxsd1EqJe6iSXkaz4A45HsyVRFUGu2Wv%2BPpQlC3V3eEzkJMOx2rUgO9edJUIm9BinPuaXvZgBdsC7k0O12Q5GxN%2B3gmtNw%2FiiBG6dwa%2BTjhgEZsV%2BhCYWUgUko3vwLvXQtAZqhuyxe%2F6h%2FAkcPvbvtj8Mx83mzKSjCNloTBBjqkAUVoW5dGgnbPXWv%2FcU04chs6lH%2FvxNone4eF2uWdKQqLrORostqvoTsVIAaQM5ZQ4Ufwaxk9LDfZnTPWBtGvmSdAaUQCCKIOpFtM%2B4LdQwc2%2Bn1h98MeTjf3uz5jJdtiOFrPWpU%2FvrBK53U4h2YQ8Wqld4xpiAdoQtuI6jFbdgNmvZRaOGFNLXOSLJGqr6nGYYHskOJZkjHwnai%2Fperbe%2BXR9jzh&X-Amz-Signature=0d7b3da7803cfb9fd10e130e98cf2ebd1f584755615ee9f8e28345297774e69f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJWHEV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD9xsq8zMn7aOu1n7YueNz5j2E3prrRQQrLEhqaB9wBtwIhAPZO1KnetoSPZL%2FwZIQnsaT4ADgGkbPvYI0ymGA0kDCuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK9vJayQgMsVpWnQq3AM0aOvZnltyrkMCAbXrUDBA5xWgtKiBaSR3oPDfBQaIeP8nkrtjBglyneDQAnvVKSdCFXhMEZOH1sLw%2Fv6QadaMpxXU9kGgsm9g2lOv0Xz%2FS5jV22jDYAoyU4t1fQTB1iTwZeDE2x4RlnQQPRl9TVre%2F94IdasEUO0lP6bqV6Ok1XTXhW%2BV%2BLRmH29SQn2%2BM%2FrZ%2BaPELtHTTndYlwnu8nWyNcnfmCIBYaJK1mi9nUcBNmyL%2BmW%2FMRJm4xxnIRdxLFNJ%2FoGQw6pZL03a3jo3VQSv2Ogb74MB8OO7SqubFubWQ6eZUmkSeqqzhG%2FGTzEdGtG9HSrfwxro%2B84d%2F8abTVwKfEyS%2Bx7Hy9ycAkAbN0adi8BfvAbhtiVX6iL7g3RU5LsIf2QpIDKX8uKtFSMwV3%2BDJwsiOuC%2Fewz9m3PSDjTNxTbAdRUJnQwxsXLFnp17rcbGL4WikjRgSWJxE%2Fgu%2FSG3J2T3OIxsd1EqJe6iSXkaz4A45HsyVRFUGu2Wv%2BPpQlC3V3eEzkJMOx2rUgO9edJUIm9BinPuaXvZgBdsC7k0O12Q5GxN%2B3gmtNw%2FiiBG6dwa%2BTjhgEZsV%2BhCYWUgUko3vwLvXQtAZqhuyxe%2F6h%2FAkcPvbvtj8Mx83mzKSjCNloTBBjqkAUVoW5dGgnbPXWv%2FcU04chs6lH%2FvxNone4eF2uWdKQqLrORostqvoTsVIAaQM5ZQ4Ufwaxk9LDfZnTPWBtGvmSdAaUQCCKIOpFtM%2B4LdQwc2%2Bn1h98MeTjf3uz5jJdtiOFrPWpU%2FvrBK53U4h2YQ8Wqld4xpiAdoQtuI6jFbdgNmvZRaOGFNLXOSLJGqr6nGYYHskOJZkjHwnai%2Fperbe%2BXR9jzh&X-Amz-Signature=fb9fab53d7615e625f5239b94fe437f6371c33837ed9db4591bd9b650b841335&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHEAVY5V%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZxYfunZzDOdM8W6eiQ%2FRL4foYkld%2FjmLarJfF4EoZwgIhANHiJ5pTqKHfWmhLykxIpnXVtXeY9Aj5ke7fZYRySPqAKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKgXXoUsD48ZZtZpUq3APmRytvveQgrD27GcVgFoBpYYSN6S14wDOrSAsSHDvTSnVol1O91TQ5nP7XgJtbTSkSwP7h7tZYj4FbT92nrg114wtfI1ygIKZNJ9dLD6%2BKLNwJdclSwMmKsfTsTqfTEzT6Bly91WXHu7pC02od%2FFZSGR3AJ1GnfmhVBYh5kQsBRhVfyyV3xmCLtrBjd%2FRf4kO9ze7849dDwKTSq1HMRcaWOd5B2ZYXquc72xMzo8kZFn5K1D3VLRgYDHBhdGlxacpHjHYgTXUma%2BNdMnQRONjYW6%2F%2BzTU5s688SN9FbyWiyVmAJSXLoctg2akL5GRKzHGyTzM8EJnnqsmnLvYzScU3%2BbvL%2Fp9C64rmvQ4bjTa38CvzZGJvSvrnZW6g0ZCwV0l2%2BL70S4dyaZt9woQ%2ByEyUY68cXWFGhV65dCV0GiiYDibwsuEX5S6Ls3qV7BOukhb0nugFbq3IZO3dPTYL8EYYFwoyK45RJarDJ%2BqqYYrLnDf%2FiPa0YcVBePJv%2FEmRO%2Bgdh02ANZyfIl1RgaFyiSE6c3OEVrX%2FtJVC5WNLgHfe%2BlZveYvAtoYXIHmraG2Log6l%2FS7mvD6RiRxEkn1SA2sJS6LSj9e2aQyvq3YWhsUVdDajeVP8Omn5K5eFKzCGl4TBBjqkAZUbg8uDlyuF3VuzsvWM91Brg9gzukGA3XFzMBYetfHnehRposlqb3qx3XKOU1VPlsK24a5aTL4kTzMKyrp6Z6c0kxCoHDCQsq6gRKkvxebcEZ3x9PV3A6sOr%2FAPZe1kREh7krIuT7wxu4vUneZprwG7hcJdGHIcDKekk65s6vwbQn8UEGws4myN5XbR7SiONg1k9ys1phlfGWjbyDKOTV0X2W0m&X-Amz-Signature=5cc8d6613fd37e74058abc77442c6b86483833ccd830b6738557711a4740639c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V52C43H%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCYihLtReEe24lvm2jgRRRAVEC9IcsZTdZtRrJQju7vcgIhALtS4KbAEM%2Bi2QVkDnTbmCH5cFOGa3InqAN%2BH7eTOntXKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjF2BrsSdgRht1aooq3ANAo%2Boj7JOuRnSg733ATx2DROd4CmtVBO8A2iNh52MBHaFiKgQgC6I%2BdP8nOpu1BSEEHKWCIhlqGY3m5Sj9vXZIHedGykD%2B%2FNw%2Fh3ETkcCRGJlo8dgiNF%2BuaOpbEM9N1i%2F%2FQKJ6hl18a5tzaLwXSS2wYDY1F1MyVz30GaSr4K%2F1hbnI7F8FcLvY02pIc8F224VjxyIcdBlfy3I8ymJooNmCV99xcJfYvwsYWzcbIy3afWvH1KubTqm858rmDAlxfUjuKAJuWWd6U0rctoB0H75DUzekK8JH6whnHp%2BgMzqWzBukOyBe%2Bdi6YhPyFODKBuDG5LqZzlDLJDie50P5epg2NXMqS8s7fcfIdc1Yi3nqs3JxAWAnnK2k89YZqb%2BnsgjUTnxGvqcX6TMImehWLaEidGAb07zGXnpWRLlsbY3d%2FZPVuY8VZPQO11B4hXA70zmGiwIAPb%2Fhv3T4ynRiP0%2F4bM%2BI3t99tLq2%2BnBr1npVATRsBKmJW2R5xMkg%2Fb5kFwwqvirx2c6yI86GfV7OiXLCOQ8%2BqGSuFYECj%2BGo9%2FgLWvOE4%2FL3dX1WLg8CylKSIgzaBxpXJffCKhdcu%2FXIhBMyosB%2Bprd%2FVxUvl47lEPgG2Wbklv3uQCfd6GaZKzDKloTBBjqkAYPdjNGUpyN5oscGfWxswEqsZ0nqziCI6JTc4SpHg2OMFkkHCgE5cFV%2Fwt%2FRRVPA5KRJ0BlMKL8lM3i8cqRCLSqqdYQO9lzWtooVKoFPF2wuazuNhPfXXTTIIx2jj2Zx1nUgfeeVvcX3UKuix9hF7SNXVW4KH5mDXM7aecr1KkKQRE%2Fu%2B5NmnNChqEMcM2iU8XAqQnMimR%2B0PyUxxXStCK%2Fwx%2BTg&X-Amz-Signature=9fd75d7d3bf225cbc9ab6c6d5680f21e82158f88996209101fc46827cb857f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7BJWHEV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD9xsq8zMn7aOu1n7YueNz5j2E3prrRQQrLEhqaB9wBtwIhAPZO1KnetoSPZL%2FwZIQnsaT4ADgGkbPvYI0ymGA0kDCuKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdK9vJayQgMsVpWnQq3AM0aOvZnltyrkMCAbXrUDBA5xWgtKiBaSR3oPDfBQaIeP8nkrtjBglyneDQAnvVKSdCFXhMEZOH1sLw%2Fv6QadaMpxXU9kGgsm9g2lOv0Xz%2FS5jV22jDYAoyU4t1fQTB1iTwZeDE2x4RlnQQPRl9TVre%2F94IdasEUO0lP6bqV6Ok1XTXhW%2BV%2BLRmH29SQn2%2BM%2FrZ%2BaPELtHTTndYlwnu8nWyNcnfmCIBYaJK1mi9nUcBNmyL%2BmW%2FMRJm4xxnIRdxLFNJ%2FoGQw6pZL03a3jo3VQSv2Ogb74MB8OO7SqubFubWQ6eZUmkSeqqzhG%2FGTzEdGtG9HSrfwxro%2B84d%2F8abTVwKfEyS%2Bx7Hy9ycAkAbN0adi8BfvAbhtiVX6iL7g3RU5LsIf2QpIDKX8uKtFSMwV3%2BDJwsiOuC%2Fewz9m3PSDjTNxTbAdRUJnQwxsXLFnp17rcbGL4WikjRgSWJxE%2Fgu%2FSG3J2T3OIxsd1EqJe6iSXkaz4A45HsyVRFUGu2Wv%2BPpQlC3V3eEzkJMOx2rUgO9edJUIm9BinPuaXvZgBdsC7k0O12Q5GxN%2B3gmtNw%2FiiBG6dwa%2BTjhgEZsV%2BhCYWUgUko3vwLvXQtAZqhuyxe%2F6h%2FAkcPvbvtj8Mx83mzKSjCNloTBBjqkAUVoW5dGgnbPXWv%2FcU04chs6lH%2FvxNone4eF2uWdKQqLrORostqvoTsVIAaQM5ZQ4Ufwaxk9LDfZnTPWBtGvmSdAaUQCCKIOpFtM%2B4LdQwc2%2Bn1h98MeTjf3uz5jJdtiOFrPWpU%2FvrBK53U4h2YQ8Wqld4xpiAdoQtuI6jFbdgNmvZRaOGFNLXOSLJGqr6nGYYHskOJZkjHwnai%2Fperbe%2BXR9jzh&X-Amz-Signature=3e7981ad7708d07f44bfd9c797652b2ce548fa3b5e72760e1d190238791ee2da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
