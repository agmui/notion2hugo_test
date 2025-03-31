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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDIUUDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDp8I4ea9hqNsuNwRwMaXFIUK4AQsv8hlCJgYv%2FJRjClwIhANuMEq%2FGKu8maQ8fITWzMzQSIiiDFNfOQyd6zFb3UrSCKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BjKrJlWTh6Eqhhscq3ANUVXMJRB2JjqqF9YsdCPUZZ45NAn3i%2BB0Rp%2BjqevYcXbfunhaTYjcYKAd6YzAjpC5WwXIjZb5Me1OcMBYARy9T8txQ9PCFWxMCNYPF4dVeaL08ERFLxbosWycGDUuUPW5W8DDUz%2BWa9vds2wC2CHdFW823tprPCaNYhfC%2Buy6opsCPCBN8um5yxIYHM2am81XcolvDk6LU6UIJ7LeubR0kriyr2WrLkiC8rEf5Bn2Vdf%2BXBbGLw%2Fwk5WhT9SJkL%2BFH%2FNjai2nLZ6l769eO79NYhpA7s9%2B%2FSd%2F5stR%2F30%2BFRYpaGWxB5fPPHUh%2FLFXo%2Bi5OudGs2dFTsFjlCDNMQRBSYK3Hb1MNUQYOQVrd9oXbfRNScJ%2FC1OTtJARbj0DMM2O3jUKJTWTclNLaoEg91fTc%2BFj08OHZWqfrAeu3TjenmnMlGNjKshmz4Ptk5b5i41f5%2FcQZHXv4NeH72GigW9UTapsANVz%2FEkYA9xo4hhSWn1FtzfkqJmjnK1qXOQULDiqs%2Fn4tCMwgcvFNOZFynDtrorujmwkfHDtYvvFiN9CLjO7MzGtChOy08nW7UitVL1FMKvuqsbln3mEO4M%2BESPlvjIxTho0EGR%2BiU0PjKFgGry9uzxCfhDpO%2B1qXPzDDgqu%2FBjqkAXerzJd8K7PK81whDHvroAA6OOu6GFGjbSs9VyCTpGiWBiw3UFAlmLToO0PN7c5ZLCqru5AvyVeVTmKde6fgBk8OKkEi8Ubmp19BQ4FgTdE%2FG8%2BQ3GrYTGmKJ4wkkL7n8hl2z6ruUirqb%2Fd1p7zDkDXnuIDB%2FcBvAdy9%2F%2FJXAomiYmndt5dEJErDGR5vwewe%2FThe%2F79zyk%2B%2FmNUOMgUORktTGbbn&X-Amz-Signature=fcb961b4a879100f3778103d013d060ccf5f5e8f362ae3b0e838c89427db567d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDIUUDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDp8I4ea9hqNsuNwRwMaXFIUK4AQsv8hlCJgYv%2FJRjClwIhANuMEq%2FGKu8maQ8fITWzMzQSIiiDFNfOQyd6zFb3UrSCKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BjKrJlWTh6Eqhhscq3ANUVXMJRB2JjqqF9YsdCPUZZ45NAn3i%2BB0Rp%2BjqevYcXbfunhaTYjcYKAd6YzAjpC5WwXIjZb5Me1OcMBYARy9T8txQ9PCFWxMCNYPF4dVeaL08ERFLxbosWycGDUuUPW5W8DDUz%2BWa9vds2wC2CHdFW823tprPCaNYhfC%2Buy6opsCPCBN8um5yxIYHM2am81XcolvDk6LU6UIJ7LeubR0kriyr2WrLkiC8rEf5Bn2Vdf%2BXBbGLw%2Fwk5WhT9SJkL%2BFH%2FNjai2nLZ6l769eO79NYhpA7s9%2B%2FSd%2F5stR%2F30%2BFRYpaGWxB5fPPHUh%2FLFXo%2Bi5OudGs2dFTsFjlCDNMQRBSYK3Hb1MNUQYOQVrd9oXbfRNScJ%2FC1OTtJARbj0DMM2O3jUKJTWTclNLaoEg91fTc%2BFj08OHZWqfrAeu3TjenmnMlGNjKshmz4Ptk5b5i41f5%2FcQZHXv4NeH72GigW9UTapsANVz%2FEkYA9xo4hhSWn1FtzfkqJmjnK1qXOQULDiqs%2Fn4tCMwgcvFNOZFynDtrorujmwkfHDtYvvFiN9CLjO7MzGtChOy08nW7UitVL1FMKvuqsbln3mEO4M%2BESPlvjIxTho0EGR%2BiU0PjKFgGry9uzxCfhDpO%2B1qXPzDDgqu%2FBjqkAXerzJd8K7PK81whDHvroAA6OOu6GFGjbSs9VyCTpGiWBiw3UFAlmLToO0PN7c5ZLCqru5AvyVeVTmKde6fgBk8OKkEi8Ubmp19BQ4FgTdE%2FG8%2BQ3GrYTGmKJ4wkkL7n8hl2z6ruUirqb%2Fd1p7zDkDXnuIDB%2FcBvAdy9%2F%2FJXAomiYmndt5dEJErDGR5vwewe%2FThe%2F79zyk%2B%2FmNUOMgUORktTGbbn&X-Amz-Signature=ce98716cbb739dbe942b197abf2f079c9886c15f48fee6adf08b31b36cae99a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IDZM4F%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAT7UbepPxYsxAoMshZVxe%2B49Ya4kLnE%2FTocs1p1QEAUAiB8S3SsxoYEjwbsS51JoYMrfwmoQm3HR6kdlF7VB6CcSCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWREmq31TltobTvtQKtwD3DccuW5jSu3rtMRsiOINXWdFdircb2wakzOYDNoXq%2BuHplymwpjYJ5gif2uVfaifIVj1VG1fjOCKnL%2FIKPif1VKPEsBDm%2FVZp12N9pIR9CM1ogiLcBZJqgtQ3SIEwmTyuG1%2FfVfMa9FLyi%2BnVjotHeyd6Loi5plt9RYx13X4WQsS26FBBj2pTO9m7hMBZ%2FNf2hJXFCYfyb06PKmX93w8ZcH%2BPADRIbt4U9JL4TcatE0nXaCymMeHCXTDySqbcT3lGTZbDknF2jE%2FHPncRCnocYQFqhDYFjGI6QiwlW2VY6YnzfD%2FadY2lTTt0IjN8DZR2iW6vWP9cDK4YeYW7V%2BvMTrPnsf7iuMKP8v2d6o7g5ak5fgOdp3oT%2FiIihMFGrTc2JeSlJsvjU8WXG5r6nlK%2B1uJaZTJu1ob8P7MfPITs9LBUvHRif7o%2FW8VINinhSvsUvwpVgobbQQwzdcAHYORa9P4v%2FaycZL7JLJ8pMzSkEYd4tbaIUBmvNF8pcyNZtYJTndR9d%2FfnWk9LldBhUd7tWAnWUbGF21p50CDuIiLgUuYJ6U6W1bEGt%2BBXS5BilBQubNuewdkfJi5xubPl0H7OpNFwSHBODDawq0L5XIYoCx3XTylxg%2BPVLJzOwcw2oGrvwY6pgH0kZbyjxkQn0ncH6agjPkOIPA7gFh2YRncgHKYG8jm4PYKKiff%2FybXV%2FcoKmLC5pdDkC%2Bp0IesBLWlEdyBTQjgF%2FeJlXzB9VQkZTbe8IU%2BTlMaCPT30DFNztEZVsIGuHSIW2XzSoYVeZpfD6MyS%2BewTqIh5GM86vsoOqovN4rw6EYrb26%2BVBqjDRh6%2F%2FtNuY%2FWTm13VJB%2BxH%2BueminO1lmPBOvXobm&X-Amz-Signature=6d13818662dd50c14e7555b75c0e272e28acebe000233b4a98c1ee869f32c504&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM2LNFD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGK6KMh0acL5XOo6BI5AmeElD27tEb9TBbWndIkzcdexAiBG5QEUawl%2FuBpdd8RlRS1LXHqi2GN3eXc5lZWEx7jZhiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDvT0IgCziNMqYsZCKtwDlzsD1lSLaVZ5udDAat0sE8KpYlsRf5AJ5wMXu1So3aNaBhcPr2ba2LrPose%2FixoxfR1ek5TZQD07ZNMHwmpqfCGDm17L05CotdkzEYB8F5ElcK2rVpxCuLyG5w5Iezo3WwNM%2FzhUiiH5vdqyAwPh7OcfWxxW9eszPsng2UbhD17WCs2OLCYAwyafVw3gIs1coQ6KWZNE3jf4Nr0jt8UDOCdiPQyRVeDuzHrXXi3v4tBgoI1oKuxz96lHwUPAb1q8pwVKcr2Tm8jnf8RcwP9M8piKnDnQIvGKdy9OU72s8ho8RPMU0gwvNSVQnk1sYUMH4Q8jIJDso0j2SMDWakk1byhF7F%2BrdQMHCKsyaAYxTWCog4RlaWws9KusoI88Eo6FcMGEg7coQ01BdqjnbjTOaocKRnsSp0plbhjNnsBp2oWyGkzZzX1ZgIYLvRh3rEIuZSYwPNiW7FDyyRj9ud9VH3n8Ktuui7QdGatBTGKrdI8QvawAV79qiwBwFCUx9tdsHncOxr7l8lMhLIZQJ2OpYJ7FLa%2F8PkAkgiX%2BJv%2FwHWnfOwRkaUSclpaJ1GdPCdYSOrq9JmXzKhtHxqWTdtSHXtKZ585qOncQ5Nv%2FbBS5YDEm4JbV3DueKUQ4Vcow0YKrvwY6pgEMML%2BIHirMMPGeu1AqpdB5nniwXAee037VEja5ZLJqC5MepwoVyxMfg4PkT5hGihFNEdv8YFkXn0E3BeNYfXt2bKptl%2Be%2B%2Fa3wT7XlBM9hxg1PH6MrqFoooY8IBztyyj5rF%2FQeqnJsJgiZXF7xUFOUGpD5jnKvofE7VsCnZvZy2yhJSQjm0Jgl9NPbvQLI%2BgrP2pkea75a%2BRn9zpOZHABGpCPRrixm&X-Amz-Signature=8c0760c36144a75b23c8b88ba887a4515f136cac249c4e4be12f7dbc8f34affb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDIUUDC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDp8I4ea9hqNsuNwRwMaXFIUK4AQsv8hlCJgYv%2FJRjClwIhANuMEq%2FGKu8maQ8fITWzMzQSIiiDFNfOQyd6zFb3UrSCKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BjKrJlWTh6Eqhhscq3ANUVXMJRB2JjqqF9YsdCPUZZ45NAn3i%2BB0Rp%2BjqevYcXbfunhaTYjcYKAd6YzAjpC5WwXIjZb5Me1OcMBYARy9T8txQ9PCFWxMCNYPF4dVeaL08ERFLxbosWycGDUuUPW5W8DDUz%2BWa9vds2wC2CHdFW823tprPCaNYhfC%2Buy6opsCPCBN8um5yxIYHM2am81XcolvDk6LU6UIJ7LeubR0kriyr2WrLkiC8rEf5Bn2Vdf%2BXBbGLw%2Fwk5WhT9SJkL%2BFH%2FNjai2nLZ6l769eO79NYhpA7s9%2B%2FSd%2F5stR%2F30%2BFRYpaGWxB5fPPHUh%2FLFXo%2Bi5OudGs2dFTsFjlCDNMQRBSYK3Hb1MNUQYOQVrd9oXbfRNScJ%2FC1OTtJARbj0DMM2O3jUKJTWTclNLaoEg91fTc%2BFj08OHZWqfrAeu3TjenmnMlGNjKshmz4Ptk5b5i41f5%2FcQZHXv4NeH72GigW9UTapsANVz%2FEkYA9xo4hhSWn1FtzfkqJmjnK1qXOQULDiqs%2Fn4tCMwgcvFNOZFynDtrorujmwkfHDtYvvFiN9CLjO7MzGtChOy08nW7UitVL1FMKvuqsbln3mEO4M%2BESPlvjIxTho0EGR%2BiU0PjKFgGry9uzxCfhDpO%2B1qXPzDDgqu%2FBjqkAXerzJd8K7PK81whDHvroAA6OOu6GFGjbSs9VyCTpGiWBiw3UFAlmLToO0PN7c5ZLCqru5AvyVeVTmKde6fgBk8OKkEi8Ubmp19BQ4FgTdE%2FG8%2BQ3GrYTGmKJ4wkkL7n8hl2z6ruUirqb%2Fd1p7zDkDXnuIDB%2FcBvAdy9%2F%2FJXAomiYmndt5dEJErDGR5vwewe%2FThe%2F79zyk%2B%2FmNUOMgUORktTGbbn&X-Amz-Signature=20de60fbd332fcf0ac11c4578625d71ddccf75a1e3fae2dca2f0f3ad42e34538&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
