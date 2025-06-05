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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHCSTOO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEB4IBSAICo3uO1DGgF9ds53trObc8fmhm%2F9%2B0XFwPEoAiB5d7c%2FuNw4%2FgqbzOujPDQcFoFj%2FFURRLyTVD3ikqduDir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM%2FktZuVQbNbFcv5L5KtwDirffmzNK6kNTugc16HomRPH1tyXNgmc5dSB2zA1aYhU5Kx3YbWZCrO45FR%2FgRTGkK5oK0%2BmucKpEDkv4rYq3vMrl6Y5FDDMxBNzgAVSnij%2BSCwer3H6xxZpJbu6lcvFUtYS7H5pVALEV4Tm0sJwVwBu6w%2F2kRRhfIEHMwXuaFYxGitZWMeEB3Wl027PNjKiks0HEugpco%2F1FdalsAc4edvii0JzTReMe0AOyX4Y%2BomTy5I%2B6N6hwOSzZnd%2Fwy4XsDgoFL%2FFmqsxpiULFOiQixlkUU1RFfouP2jOgBQKRm8jbiTCXar1AGlfBoLb0Mi9hk30uiYRfsgLNHzoMA8%2F4cW%2FtRbOHbSh5W2qLioHraQ8%2BAh3A%2FAnuI72iNE1vZ%2BZijKSNS6eEzg0%2FgUlvAbmtfIfNSLb%2BvAO5GZ2pIdWc6l3VqUTKcvrnmguLcFyNwKIvFyA5u5prOQFRplGm0wbeknJaZvc5WWZGcdCNsSvUmM6Fj4OJMMDtZCTwPLyL0NnNNVl6Ne4xhV6fA%2B7OLLKqPhuM5RnCpCF1mJJrG3aoue6belRNk%2F71Hq6%2FU9n4cn9PeEKhYRRTvAEEnxXzxm7y0J9Cy6nYAt%2BOMKyujuZl1UQ4crRhTLX70lvtVDkw%2FvGFwgY6pgGI77DFHDVwqWUGrpMZ3wtDA%2BeJfxwe8JJPBlLzjIkVf2ZL3c6nUcMuFFwFKOBy73UY9tx5qCbbtUqvkugKQA2cfsho0mJj9UvqPz2TAdBjT3XDH7JYhH6vfoF2DI7da%2BYkPZJcdUwP01F%2BZz9G85Wjjook3RSbGAh3REhgLc3Vy%2B6y4gu6cDeOy2%2FnLSGSxMp2i%2FvkFIBL6DLyWgxJCUGfQkgf2W0v&X-Amz-Signature=2dbc2900092e7553386a9df7dbd20ab62fe7b99db0294a5c6cdee74f306a7b47&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHCSTOO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEB4IBSAICo3uO1DGgF9ds53trObc8fmhm%2F9%2B0XFwPEoAiB5d7c%2FuNw4%2FgqbzOujPDQcFoFj%2FFURRLyTVD3ikqduDir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM%2FktZuVQbNbFcv5L5KtwDirffmzNK6kNTugc16HomRPH1tyXNgmc5dSB2zA1aYhU5Kx3YbWZCrO45FR%2FgRTGkK5oK0%2BmucKpEDkv4rYq3vMrl6Y5FDDMxBNzgAVSnij%2BSCwer3H6xxZpJbu6lcvFUtYS7H5pVALEV4Tm0sJwVwBu6w%2F2kRRhfIEHMwXuaFYxGitZWMeEB3Wl027PNjKiks0HEugpco%2F1FdalsAc4edvii0JzTReMe0AOyX4Y%2BomTy5I%2B6N6hwOSzZnd%2Fwy4XsDgoFL%2FFmqsxpiULFOiQixlkUU1RFfouP2jOgBQKRm8jbiTCXar1AGlfBoLb0Mi9hk30uiYRfsgLNHzoMA8%2F4cW%2FtRbOHbSh5W2qLioHraQ8%2BAh3A%2FAnuI72iNE1vZ%2BZijKSNS6eEzg0%2FgUlvAbmtfIfNSLb%2BvAO5GZ2pIdWc6l3VqUTKcvrnmguLcFyNwKIvFyA5u5prOQFRplGm0wbeknJaZvc5WWZGcdCNsSvUmM6Fj4OJMMDtZCTwPLyL0NnNNVl6Ne4xhV6fA%2B7OLLKqPhuM5RnCpCF1mJJrG3aoue6belRNk%2F71Hq6%2FU9n4cn9PeEKhYRRTvAEEnxXzxm7y0J9Cy6nYAt%2BOMKyujuZl1UQ4crRhTLX70lvtVDkw%2FvGFwgY6pgGI77DFHDVwqWUGrpMZ3wtDA%2BeJfxwe8JJPBlLzjIkVf2ZL3c6nUcMuFFwFKOBy73UY9tx5qCbbtUqvkugKQA2cfsho0mJj9UvqPz2TAdBjT3XDH7JYhH6vfoF2DI7da%2BYkPZJcdUwP01F%2BZz9G85Wjjook3RSbGAh3REhgLc3Vy%2B6y4gu6cDeOy2%2FnLSGSxMp2i%2FvkFIBL6DLyWgxJCUGfQkgf2W0v&X-Amz-Signature=b37db5f70c11280e6e846840ded3479a454ee254701ef6bd6bfe7abf7c35a4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHCSTOO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEB4IBSAICo3uO1DGgF9ds53trObc8fmhm%2F9%2B0XFwPEoAiB5d7c%2FuNw4%2FgqbzOujPDQcFoFj%2FFURRLyTVD3ikqduDir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM%2FktZuVQbNbFcv5L5KtwDirffmzNK6kNTugc16HomRPH1tyXNgmc5dSB2zA1aYhU5Kx3YbWZCrO45FR%2FgRTGkK5oK0%2BmucKpEDkv4rYq3vMrl6Y5FDDMxBNzgAVSnij%2BSCwer3H6xxZpJbu6lcvFUtYS7H5pVALEV4Tm0sJwVwBu6w%2F2kRRhfIEHMwXuaFYxGitZWMeEB3Wl027PNjKiks0HEugpco%2F1FdalsAc4edvii0JzTReMe0AOyX4Y%2BomTy5I%2B6N6hwOSzZnd%2Fwy4XsDgoFL%2FFmqsxpiULFOiQixlkUU1RFfouP2jOgBQKRm8jbiTCXar1AGlfBoLb0Mi9hk30uiYRfsgLNHzoMA8%2F4cW%2FtRbOHbSh5W2qLioHraQ8%2BAh3A%2FAnuI72iNE1vZ%2BZijKSNS6eEzg0%2FgUlvAbmtfIfNSLb%2BvAO5GZ2pIdWc6l3VqUTKcvrnmguLcFyNwKIvFyA5u5prOQFRplGm0wbeknJaZvc5WWZGcdCNsSvUmM6Fj4OJMMDtZCTwPLyL0NnNNVl6Ne4xhV6fA%2B7OLLKqPhuM5RnCpCF1mJJrG3aoue6belRNk%2F71Hq6%2FU9n4cn9PeEKhYRRTvAEEnxXzxm7y0J9Cy6nYAt%2BOMKyujuZl1UQ4crRhTLX70lvtVDkw%2FvGFwgY6pgGI77DFHDVwqWUGrpMZ3wtDA%2BeJfxwe8JJPBlLzjIkVf2ZL3c6nUcMuFFwFKOBy73UY9tx5qCbbtUqvkugKQA2cfsho0mJj9UvqPz2TAdBjT3XDH7JYhH6vfoF2DI7da%2BYkPZJcdUwP01F%2BZz9G85Wjjook3RSbGAh3REhgLc3Vy%2B6y4gu6cDeOy2%2FnLSGSxMp2i%2FvkFIBL6DLyWgxJCUGfQkgf2W0v&X-Amz-Signature=d3ad2116e326fe763af5b914f0b6b1d6aa1cc5451ed237d7951c7e9003fea87d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBNILWM5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDfc8m6%2BHVs6CrcgWNF5BD47C9JG7krePscA3q%2F4u9MZwIgDYE%2Fu8zYo2VB4JZJkxs2HvsM1oVZNrRpLEoFma9i3Kcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDOwovlHmOrTyfETvCrcA%2FAWbIBwwP9Yl19Cwy8fNuczqqzs8fpQoqp9TKoJgHxWC75IysTvSGTdrmTtverNqcHArS0v1rR0Cvgg0TtK9alr5jbS4Ugmjc9fNX5Jwo62HVQd%2FiOHbDNTOd0Jou7Ol9f1Jx3Mi4iRV%2BKpTZUhz5NeekLDpDb4%2FOOZrYChXLWOaNU64tOkWzuPCKMZjqXer2Ey5ui8rY80FgKoqYyDbsGYahli5acWNvNqrguf5krs99XhqxWvX2%2Bov2nJl%2B92H1qzSQjXmupJtHldVtGsfG9ttyPOAoOtGHciRBNtFj4GVi%2BRJC8p4re7cjek8O7B3RZPdkUlFSwFk79WVLjSDCPlPohIKQFcosduFu1oe3BCehJUnyh8vCruXFjBYDaL4JaJBD2S8gBGwnF5XSH2wYYmg65IVZWfmpXTsII68UerCp2SrJtlEw04vs6TtoqVOWXVnWwYLcNyS5pJpIuZ%2FLy2zPOeEKj8SwqjBijdli%2BsSlJ5NCRXBC8aAHWNfc7jJ6uOuXzb6ifgrWdlR8iz1P7FUpmzn1Xnb6KIdxSrCt2jr6jDnjL1eHrbXBloXts%2BcZZM4pG3JOKCVcOwZAFxDF7VXqVb1K6Ntc1%2FB7W%2Bp2lv%2BGPclcMKPkcwPqmpMPXfhcIGOqUBpseDnn9W3xtT73loOGzipRUnxjmrJ%2F1jHFf4l%2FUYPo01%2BNtZZQpPAILzo3G3kZJvDoVSRUyP1PRETnkk3IlwZaxbErEESmcx0mGpodtUoL4RcyqqklThpJ7GV8auxnIv5PrbFXBKLUeZBsKJbJFRzAGlGTFFOeHObtDFeZF%2Bf%2FK6nq8269Mzj9jlpHGq8wbC0pngNHKVaFZgf4OPe7qSyLAnQwog&X-Amz-Signature=3cf3a0e003ec1b8afc44555a555b9d6b28d8553f4b66b24662cd8e22b39a48e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBOPCBE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCHf8fPvChA%2BARV6LA0L5buyYwewicROqi0%2Fi7tdMbdUgIhAP%2FOvq99MTL2ccODjeDa3l5jaInCYzZVS1Sw%2BnK0YhOdKv8DCEMQABoMNjM3NDIzMTgzODA1IgyAq%2BJZ%2FCjA8N%2BbMzYq3AOWOsE8U00AQGoaJ4aGR1Y9BWXUPqrUzyS7Ux79NSrVD5om0kf5kD19o95jTYfAtTIvBbAy8JTFS%2BcGIOwidxDrwbHad037wCjDcgCzZWyowQJ6K7vvmPaS9QokMGIgGUTtKzMV3j25uTAs7X1ziqXuH%2BqCd9%2FzCKBNKKFDRiIKcJNzBFYxoCmM8YRrEyoZzo84E%2B2gbGkxyN4hLfnlmlEbKG5MLlkRo80ZdeKWI4bVuBSxF7yU55NL%2BU0JEdPr17fupRB8VfEjIMFrXlGdRodGX86Ij%2Faa5JQvu5sCMvC7vdNK6RISn8eSW27EwJbOFLvQBYne4hv%2F9x0dw%2Bb6Ubu0J2EmwUVUKjCteyciTMuSdO6GDBOwxqD7E2T0JjpP3mlcQVXeFk3vZBVEDUYCpoxwCfdPDa6yEfeT3QVP1BQtkOQA60hbKzcW6xapOP1XHK4a6vVS7%2FchzFOciTWHn4X3QISm5EuC%2BgGsJ%2BfsElsIxfHxvcK2LUc2ih%2BJLLHwlwCZecoYfdBMggQJl8JzG3o3FlR%2B8YqBWPboD78IBjgCWuApcWKOsbZWUlc9BPXG3NDIXmFwuAmKqvo3%2Fp9G8V2KI1YgUCIHpQ2JNYR9okcBaJxSkM8teGdx9CK9nzD834XCBjqkAW7kvw5KZR0yUOTgoXESrOYmPDarLejB84vO8xNwcy9dPjtiGTRbWS6Ix7EJdP2i1JOUB0sZ3%2FVg36fDMkIHMdBoAmz1E1Y8zRfsUPYKBGJB%2FPNIDe450TZ%2FxGWI0d8t9%2BrpYRSf198n0KEk5WKg8xA9sxfGd8JlzgCaCCf04xFKQlBZce0htnrlK0ukOOMw45Mw646R5juDjjHkJc%2BALLL%2Bvz3G&X-Amz-Signature=2dc20798b5e150aca7715e42c57bec46f305460c8968834098149a9168fdd5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHCSTOO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEB4IBSAICo3uO1DGgF9ds53trObc8fmhm%2F9%2B0XFwPEoAiB5d7c%2FuNw4%2FgqbzOujPDQcFoFj%2FFURRLyTVD3ikqduDir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM%2FktZuVQbNbFcv5L5KtwDirffmzNK6kNTugc16HomRPH1tyXNgmc5dSB2zA1aYhU5Kx3YbWZCrO45FR%2FgRTGkK5oK0%2BmucKpEDkv4rYq3vMrl6Y5FDDMxBNzgAVSnij%2BSCwer3H6xxZpJbu6lcvFUtYS7H5pVALEV4Tm0sJwVwBu6w%2F2kRRhfIEHMwXuaFYxGitZWMeEB3Wl027PNjKiks0HEugpco%2F1FdalsAc4edvii0JzTReMe0AOyX4Y%2BomTy5I%2B6N6hwOSzZnd%2Fwy4XsDgoFL%2FFmqsxpiULFOiQixlkUU1RFfouP2jOgBQKRm8jbiTCXar1AGlfBoLb0Mi9hk30uiYRfsgLNHzoMA8%2F4cW%2FtRbOHbSh5W2qLioHraQ8%2BAh3A%2FAnuI72iNE1vZ%2BZijKSNS6eEzg0%2FgUlvAbmtfIfNSLb%2BvAO5GZ2pIdWc6l3VqUTKcvrnmguLcFyNwKIvFyA5u5prOQFRplGm0wbeknJaZvc5WWZGcdCNsSvUmM6Fj4OJMMDtZCTwPLyL0NnNNVl6Ne4xhV6fA%2B7OLLKqPhuM5RnCpCF1mJJrG3aoue6belRNk%2F71Hq6%2FU9n4cn9PeEKhYRRTvAEEnxXzxm7y0J9Cy6nYAt%2BOMKyujuZl1UQ4crRhTLX70lvtVDkw%2FvGFwgY6pgGI77DFHDVwqWUGrpMZ3wtDA%2BeJfxwe8JJPBlLzjIkVf2ZL3c6nUcMuFFwFKOBy73UY9tx5qCbbtUqvkugKQA2cfsho0mJj9UvqPz2TAdBjT3XDH7JYhH6vfoF2DI7da%2BYkPZJcdUwP01F%2BZz9G85Wjjook3RSbGAh3REhgLc3Vy%2B6y4gu6cDeOy2%2FnLSGSxMp2i%2FvkFIBL6DLyWgxJCUGfQkgf2W0v&X-Amz-Signature=dfa0326f3e9c8795fa5ef434708c388084bd8c78277cbc2ea7b84e308fd2b291&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
