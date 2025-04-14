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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4UGRMB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiwySeLZs3d3v3F%2BokxrccqsxmwZYXnDSNViA3niMdEgIhAMJ3ng5Fcxrbp13LtlSZoINhIg%2F3jkwuCDTt%2FSOiCUBjKv8DCBYQABoMNjM3NDIzMTgzODA1IgyCoT4rqvHZoghH1OQq3AObUJt70qxWL8Fxw7W8cKt%2Bg7tE6heLtXV6rUf0HxP0qDL%2F44Jebg6OhXNIGn4nSZGdVDDR%2BOFYo6Z8ACdQ500LEG1lMlMk3BF11Y5wilkya3N9DoWqL5cAram5f289XbI3sTWJ1xylJSPulo%2Fhpri2iS3rtV3OYi%2Fe0nqKJIUA3I7zIHKgn20Ce3CL3SkTaTX%2FZfGmwzC7hLF95wq0G7iCoHz7ZH8%2BvAWauuZchnDmEjzoy5lafkNw0miZOmTd4rF%2BzrZ7VHfoe7JuvmVj6xd1jMlPqcAHZCzORf1VY7kfqHKrd2cFqE%2F6wlOP8vWrsYqFTVKx%2BPB0ONvm2AvKNrLlU0QccK7VOmFvI5R4Wwub0hxByCg%2BDR0rBg%2BPKCc3ol%2B%2FfERhexBtEdfl%2FVQilz5eRxooldhDoTwCXPvrSbk7oWR3QLkzXbOViQtURTJwur8VBbe2otKHBGM5LG1jiymiDhUlb1HYdSu39YmgITvYf87y1npaWRE2H%2F1lTTPD5QpryJ80E2IXxh7YxalqkhG4dE%2Bhu%2FwEta6PF2%2ByxZsOOXdouHnZ9CmQUXxi55uDqWiN0yreDDK4tMD0R%2B9S0faWfIQ3EVSl00ML2Ql1B6RKea%2Bixu%2BAE%2BF7cADOTDC2jvS%2FBjqkAf61FmebL8anSt8IzBJCikeQbKDsLQMLFyGbx%2Fvox65cQYI21RUZwxvu8dLAzRv0iFLBWeMIDFE%2FNi08hNXv0KsIuVDipuBoc%2FWpd19T4vb14Ah6WX%2BNIbWROTKfqtMwR7KGZWdRy3JBOoGV6mBefod%2Fk7p8PrUFMIDJnjf%2FWey1jNHEVVbXylJgpc%2FyrvcLkYdyfNH8wxhQtCfqHrrekZHUFczO&X-Amz-Signature=4054bba0307dda4998c23d74c49c3fc971cb5d92a3870aae17eefb80985a2aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4UGRMB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiwySeLZs3d3v3F%2BokxrccqsxmwZYXnDSNViA3niMdEgIhAMJ3ng5Fcxrbp13LtlSZoINhIg%2F3jkwuCDTt%2FSOiCUBjKv8DCBYQABoMNjM3NDIzMTgzODA1IgyCoT4rqvHZoghH1OQq3AObUJt70qxWL8Fxw7W8cKt%2Bg7tE6heLtXV6rUf0HxP0qDL%2F44Jebg6OhXNIGn4nSZGdVDDR%2BOFYo6Z8ACdQ500LEG1lMlMk3BF11Y5wilkya3N9DoWqL5cAram5f289XbI3sTWJ1xylJSPulo%2Fhpri2iS3rtV3OYi%2Fe0nqKJIUA3I7zIHKgn20Ce3CL3SkTaTX%2FZfGmwzC7hLF95wq0G7iCoHz7ZH8%2BvAWauuZchnDmEjzoy5lafkNw0miZOmTd4rF%2BzrZ7VHfoe7JuvmVj6xd1jMlPqcAHZCzORf1VY7kfqHKrd2cFqE%2F6wlOP8vWrsYqFTVKx%2BPB0ONvm2AvKNrLlU0QccK7VOmFvI5R4Wwub0hxByCg%2BDR0rBg%2BPKCc3ol%2B%2FfERhexBtEdfl%2FVQilz5eRxooldhDoTwCXPvrSbk7oWR3QLkzXbOViQtURTJwur8VBbe2otKHBGM5LG1jiymiDhUlb1HYdSu39YmgITvYf87y1npaWRE2H%2F1lTTPD5QpryJ80E2IXxh7YxalqkhG4dE%2Bhu%2FwEta6PF2%2ByxZsOOXdouHnZ9CmQUXxi55uDqWiN0yreDDK4tMD0R%2B9S0faWfIQ3EVSl00ML2Ql1B6RKea%2Bixu%2BAE%2BF7cADOTDC2jvS%2FBjqkAf61FmebL8anSt8IzBJCikeQbKDsLQMLFyGbx%2Fvox65cQYI21RUZwxvu8dLAzRv0iFLBWeMIDFE%2FNi08hNXv0KsIuVDipuBoc%2FWpd19T4vb14Ah6WX%2BNIbWROTKfqtMwR7KGZWdRy3JBOoGV6mBefod%2Fk7p8PrUFMIDJnjf%2FWey1jNHEVVbXylJgpc%2FyrvcLkYdyfNH8wxhQtCfqHrrekZHUFczO&X-Amz-Signature=58e4806c172a3a7923987bda7c2dfbad2080fc96577f98cea62f5bd0196b047d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5VSUARB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyEw1S76wyvfM1kz5viHN8KH0%2BZaUEOnVq8rSMknyIDAiBPCGJe3QBAiUnxnio1Bg8Q0r4MlnsZDGjXgeUsnwidoSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM5ROHm0YhhHgsXiZ%2FKtwDuwiEkGMdtwjaf%2FOUrECdsD5%2Fvo4Uza9dwqWCjfG0lVdjh9ZcZ2NpJyfe6P2Mf%2FUm0lJc6e6ZVxaQoWK1Z36q9n0tXDT1xgJB9fkhUMa6Sj8tTF3T1Bs4eqTBwKDSKaZcUAg2OuPr%2F7FYIGSuY7jrpEoZBwzC0xvqlR8CgDH8qz3oUDwT4WgTaOlil%2F%2FAo8pcheJIki7TY8ali1Z%2BLW6KDA6B%2Frhd4VvZkOVLRW1wsXPH%2BxMjUsg0zUgULSWGqQpn5tzo6kedeNfkE2dBYPsDKPQxVInrTRSdY5ADvylN1phPEeXgRSVOHY1tFGHlP2zYJSQCZB4KgBmfMLkV%2FGLeDmMlyH97XloL6MVN356kigZA6UDmTbMd2bxQB4rq75F9MyZbB5UYiKpZ6hpnie8P4iDjDcVyfx3wIcdmH3%2Fkglxw4GJSAIzCyY2TZvqZab2QFNqaYWlhfs5S%2FpGKej4GKl846Anu4XE9AS%2BYylE8m%2BKi2VUE6aPcaldeLoI8hsMAhR4YznWmdxOOuI0gcaHMddyjI6C01lhgHylBesBXccdJKAlDqwW5KlomoVwxukri%2FzuMl2pMrMWDIqNuglGW8PpRVe2Wp4SlfJqU2qktDty4Fldg5KOh9MCipbQw7Y70vwY6pgGPYRZH2rwSQCjs25jUVv7FAVYVCzYHsZ0cJwB4ReS1n9FnlEbtw83fdaBZ6nytU72uWrVpv0dsBx%2BB7sRohRjo65RBev%2Bc73n52x2RYnj%2BYx1J%2BRnqOdpJJrI6Cr7cis5j44nX7%2ForkOnPFem3pTcnOu2U8XZs5ymN5%2FvOowbQDmrOQ1euRPCR2s07Natdkt7xrqxTVcTI%2BQUfayeg%2Bq0vI7ZNlZOs&X-Amz-Signature=b88ae5dff2b7c82ddcd3ee03a8a586a044dba733e07ee0ede5254bf891e0abf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHSX2H7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUhXigLd4ZwboY5VTX0b1YpWr0PthEpsysmmyPCbX7%2BAiEAgn2QqJKWwtj282p6SYX1sPl5qE5zkq0ZDCUtDVpy6SAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDL7dvL16bYvXypGKMyrcA38SzjDFu6PiZjHGxQjIprcRS5XiAU48lN%2Baszi3KPhXaZBEJo%2FI4AX7V0TMLwR%2BjoPfL9NFnxwgf1%2F6B%2FVPJtvjbL%2BXRGkWE%2B9j79l%2BSCO0e6Ngh2hrGjyiqLrlw%2Fa33OcmpkPOS3oInr8rNV%2FmtaTjfxDwwdubH7JTxrxkFoxGJNWDnESIusNL92i3Y%2Fb44McSzgV7i3qXTRUQGkepv3TeHSzBUKv5DsPjAtioIaHERBgFMoBl6KVuz28kUeb2JV%2FlJVu12r0SdrwIQgNEaXoRsMKeLajI%2FxOxJbCr4XaTuKdaG7s1TkPaV15lRL7HgmLHA%2F22jaG5uDMVp%2BYneHq4K5XNtBjfCWX6buBRLae9dzMI9aFyf5U%2B%2BmWP61nYb%2B2eqBql6SzXRj9n578UsVaIRkJo%2B%2Bmp0CisiukHTHYZNP63ThRbI2KuHAB6XucgDTXI%2FTW1NoMz%2BdqTvgmXDWiYG9Kf98DZ1%2Blu0KknhsWOHX5fquvYG2ALlKO%2B0yMITWFo%2By9igARKbcYyJ07tmgI6cPuu0V4rqr0iryCXyuu7%2FqU4xMWP9XL6Ccj5peSk0655o2lAiY7WCfFsZpsU%2FP2HiKeRP9KJ4jppVTmEN44wxJUG5KgH3fZfx%2BrDMLOO9L8GOqUBhe1uPp37nBkmXhTA9kT8KzJESssgJKqZCivcHsxgBByi%2B%2FezxmYJdEZqexvCF0kSspeMheIaOyObeN59douK6U5GinMhZUJ2GnjnlWkEQcWJLe3meXym6SvXwihwoD%2BLYqi1Im7hg45JTwdWtk7vfiTD6nc%2BtC0yFu1zJ73EARdLOjYGnWJb8St5CryiT0iZMfO7%2FWuC%2BUgkUVR0c07PFTryDsB0&X-Amz-Signature=f771107d0cf5d6eba6b14eb659f1669036d80259407c14b4fd89e2fc7393c536&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4UGRMB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiwySeLZs3d3v3F%2BokxrccqsxmwZYXnDSNViA3niMdEgIhAMJ3ng5Fcxrbp13LtlSZoINhIg%2F3jkwuCDTt%2FSOiCUBjKv8DCBYQABoMNjM3NDIzMTgzODA1IgyCoT4rqvHZoghH1OQq3AObUJt70qxWL8Fxw7W8cKt%2Bg7tE6heLtXV6rUf0HxP0qDL%2F44Jebg6OhXNIGn4nSZGdVDDR%2BOFYo6Z8ACdQ500LEG1lMlMk3BF11Y5wilkya3N9DoWqL5cAram5f289XbI3sTWJ1xylJSPulo%2Fhpri2iS3rtV3OYi%2Fe0nqKJIUA3I7zIHKgn20Ce3CL3SkTaTX%2FZfGmwzC7hLF95wq0G7iCoHz7ZH8%2BvAWauuZchnDmEjzoy5lafkNw0miZOmTd4rF%2BzrZ7VHfoe7JuvmVj6xd1jMlPqcAHZCzORf1VY7kfqHKrd2cFqE%2F6wlOP8vWrsYqFTVKx%2BPB0ONvm2AvKNrLlU0QccK7VOmFvI5R4Wwub0hxByCg%2BDR0rBg%2BPKCc3ol%2B%2FfERhexBtEdfl%2FVQilz5eRxooldhDoTwCXPvrSbk7oWR3QLkzXbOViQtURTJwur8VBbe2otKHBGM5LG1jiymiDhUlb1HYdSu39YmgITvYf87y1npaWRE2H%2F1lTTPD5QpryJ80E2IXxh7YxalqkhG4dE%2Bhu%2FwEta6PF2%2ByxZsOOXdouHnZ9CmQUXxi55uDqWiN0yreDDK4tMD0R%2B9S0faWfIQ3EVSl00ML2Ql1B6RKea%2Bixu%2BAE%2BF7cADOTDC2jvS%2FBjqkAf61FmebL8anSt8IzBJCikeQbKDsLQMLFyGbx%2Fvox65cQYI21RUZwxvu8dLAzRv0iFLBWeMIDFE%2FNi08hNXv0KsIuVDipuBoc%2FWpd19T4vb14Ah6WX%2BNIbWROTKfqtMwR7KGZWdRy3JBOoGV6mBefod%2Fk7p8PrUFMIDJnjf%2FWey1jNHEVVbXylJgpc%2FyrvcLkYdyfNH8wxhQtCfqHrrekZHUFczO&X-Amz-Signature=1be72f2ec6a07031f52267d7a405ed84d8daa4f523695a3ef4bf31a682980832&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
