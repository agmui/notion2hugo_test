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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZOVOELI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC2Mm0%2FQvvegEB8wobDSwU8dMi66heS001w20qeKnEYbwIgOQu2Fo1Vwm8TuW%2F453ErZZ%2BpYKK9sRpQWb1XtO3g3Y0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl8eNXo9xomc9KY8CrcA8wuo%2B5ME%2FR6c%2F2fK1n5F1yWU69suOp0%2B6sCjpzFfDqWEBqeyMu5fsDku4lXEvfN2t2r3Jo%2FGC%2FVbaFsTihRXbgc6r0Lvm6jORp%2FA%2BcKhafUWapEl9VtZweKzz%2FejLseYA7fBr1OvGfSPC%2FseZc6Ozc7TsFBCNYHPFfzH9wmd2IJisjQ86hr4CmDPVoolLbBPugbU7Fll4jhHExO53XdRIZe8R%2BjFtc5pS%2FwGYpjbcrkIABHcFT9YVlJAGZOfdCEIIYkvncXjclx23Xkrzsq%2FOEy96CLD2%2FnOSvxoo1pv3dEDKOXePq46W21eHGJi4WUnP2drCk6hlU9g%2BoHiJA%2BxlshchtuZXsBRaS1S%2FNt3zMvzTkGihEmXcDXQO5xsa0VmTZ1l2X9BhOLjBp5a7KUzlTeSeTHYVBSMBCw0oxodj7wQgW2gMMIXWJ%2BQXERsgkYoZba32rJdvZo6%2BeC5u61qLDXpQM8LhTGLrmgETv7J7ihVKwrk275PqJ80DLMw%2FWGxk9JeOjG69Bv%2FaaZ7YEI%2F3YtkgF6HqkrB%2FQ0AJOWRALec5mpMrzS7Yz5hYDE89PBcKf80%2FHm8Cqyqo1LkA0qEWRYJIDNPQkUKMBJr9u%2FYE68c279GC%2FfiBsxOHb8MILVib4GOqUBsFbB5VaO%2BQTZ%2Bq75SFNJKTt0ulgMSRwaqyzNu9TwmHexvsaS81MHl4fYfGdqJpE5LrmsuGhh%2Bci%2B4WbhIscv%2BUy5BO8R%2FA1iEhfRVxG4uiFzd8556Wb4T70kTj1L5JrLmkas3Bh8BiPqhQ5YRpKPcX3fZpwmH4kpM3lA3RkNnFNLktNzOe%2BSYju7%2Bn1CzAJd7iLT1xAoPbfjZH5tCy8VtN8YZZIn&X-Amz-Signature=e5257b1f09181d542913910f39ddd14d355fddffb1897d66d051f7d4c2762e76&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZOVOELI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC2Mm0%2FQvvegEB8wobDSwU8dMi66heS001w20qeKnEYbwIgOQu2Fo1Vwm8TuW%2F453ErZZ%2BpYKK9sRpQWb1XtO3g3Y0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl8eNXo9xomc9KY8CrcA8wuo%2B5ME%2FR6c%2F2fK1n5F1yWU69suOp0%2B6sCjpzFfDqWEBqeyMu5fsDku4lXEvfN2t2r3Jo%2FGC%2FVbaFsTihRXbgc6r0Lvm6jORp%2FA%2BcKhafUWapEl9VtZweKzz%2FejLseYA7fBr1OvGfSPC%2FseZc6Ozc7TsFBCNYHPFfzH9wmd2IJisjQ86hr4CmDPVoolLbBPugbU7Fll4jhHExO53XdRIZe8R%2BjFtc5pS%2FwGYpjbcrkIABHcFT9YVlJAGZOfdCEIIYkvncXjclx23Xkrzsq%2FOEy96CLD2%2FnOSvxoo1pv3dEDKOXePq46W21eHGJi4WUnP2drCk6hlU9g%2BoHiJA%2BxlshchtuZXsBRaS1S%2FNt3zMvzTkGihEmXcDXQO5xsa0VmTZ1l2X9BhOLjBp5a7KUzlTeSeTHYVBSMBCw0oxodj7wQgW2gMMIXWJ%2BQXERsgkYoZba32rJdvZo6%2BeC5u61qLDXpQM8LhTGLrmgETv7J7ihVKwrk275PqJ80DLMw%2FWGxk9JeOjG69Bv%2FaaZ7YEI%2F3YtkgF6HqkrB%2FQ0AJOWRALec5mpMrzS7Yz5hYDE89PBcKf80%2FHm8Cqyqo1LkA0qEWRYJIDNPQkUKMBJr9u%2FYE68c279GC%2FfiBsxOHb8MILVib4GOqUBsFbB5VaO%2BQTZ%2Bq75SFNJKTt0ulgMSRwaqyzNu9TwmHexvsaS81MHl4fYfGdqJpE5LrmsuGhh%2Bci%2B4WbhIscv%2BUy5BO8R%2FA1iEhfRVxG4uiFzd8556Wb4T70kTj1L5JrLmkas3Bh8BiPqhQ5YRpKPcX3fZpwmH4kpM3lA3RkNnFNLktNzOe%2BSYju7%2Bn1CzAJd7iLT1xAoPbfjZH5tCy8VtN8YZZIn&X-Amz-Signature=5236c8f1b2dbf10aba09843bb413e8ade88c7c7055fa1ed26acaba90075c7944&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC65KVVX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDgftqerxYma3aeyEtwSkZTFjB6DAHF2lyOy4XawFHU9AIgW8XVnkIrmpA4efJYFhLsj2baUQBY7iWzK5hQKwjFQG0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1cSozExkT3dOsjayrcAzSxch%2BU%2FyILcXpYPnLGGH3y3ksShYl2ryQ6TymzqeflReA7VAnIVT9ON4a5keobzR5WbzYg%2BKkZp%2F48Sstzjh6HIHpdy%2B%2FcOwVvNUCf0ZHe%2Btuee3q8qe9G%2F%2BNcm8MAJVjCB2K5wzgh5UDPW5G0K04dGP59DgKKYdxquu6O7oSmCwQsgPS2Cd5ICTF8KqtGJPJWTELgxNvxYpUfJUzs%2BVfP3NswhvUkiKqYnPvvETtf1gQH5MAt2XjK%2F%2FknW6pX4gnkYSx04KBjcbOmcjUQYhAEjRG0fkEWSx22DwBiVUDGFwCD1BGaa%2BZUjqZziLtQ9vZv8EgZXX1qGL%2FB2sLq8C%2BeXnwqiRW6oAsv9bP6ID%2BgPXOe42NICX2tqtIlYuAUksXtDdw3A%2Faou%2BohROcn4vyUQBd2%2B0dZiPwCiVGAFW7TH67k2nqSclUQ3YlRNtA1j1CZilapPd%2Bq1duSncq8lbxhi%2FQ8afk4lvALjKE11%2FzgwXsVjXIZse2wiWrt9DHUGezPkUqXaiwzUSh66X1OqJE2D5WtU%2FWeytKEoWrY6Hod1HYFeg%2B0s8Z0fBsaFtZYTT7mkPRlKa3f62pPilhLOTNI0JMZImyWcvN%2FfbPeKTn2M4YCJAwqawiR2OoPMIzVib4GOqUBB5Sj7jUeZ6cpls6xdxHlFBKZ2AInUDK6k0ZC9nYMwDxB1j5VCIEeAi5%2FpBjdnlUql1jZHXp5I5ZwySaqwfyw6FFYhVvFmQzHYwhoO5c4%2BO0BKYkHwqSpL1l7jT3R8ewGZOw6Db%2Bb5HRhfJ8dboEWO%2Fkq6Hm7KE8bxNdCechgkdJE6t9yYZBnWdC2%2BcN17q8pZrBw5cBey%2BAIkvVIahiLvrm6DNjQ&X-Amz-Signature=e7aa1bc3802586a99effb0efacafa8d03d3231be65b5709a20ad1c4b7192f352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5RQ74E%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCiKUT7OaQrg%2Bk7%2BHxTmwoCAEi8Z3ORB%2B6Fc%2B3DKaOO2AIhAMV2h9tAOiy2Ob5HBECoUH3UGpAtNvsevKZZDEHexKxvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTjTx5kyBHSqpzN68q3APc%2BerH63ednlvC3n3ZHvCNfRtGXGNHUCos07%2B79x8ejWsALHNO0xop7N52N%2B%2BUJMWvPHLqlYSbKBfelh4cNPd6oJQI9GzORyj5v%2B7UVC4BDv3O9x%2B2Q5wNKR2WFfpv7DJC005HoEIyBO%2BiU45qlhNe56KrI%2B%2BgQ%2FsDN233avISD4t45x3dhdkQBlM8GL21s1orfXi9dHxaTUYRGQYLAaZDgRgf0Uuh3laE2O6cc8vksVlgLmBFmgr1vCL6HL93OMDe1XDqNYiCbPavmI0eSnso1CAbXUPAYSTKiHSu%2FyQrUigWs5tuJY0nDP7OLeqUuaVLo0HBndUm8NeDiFMgIS8oTEoW9vLyuHRP7mEkFiq5VIkN5PtXk1zK2bI5QdGceao8Ah%2B3jq8skVGuU5dVv1y2jA0KuucjxG9IXl%2FXNvWS1FbJd3TG812O%2FWmzYkA9JQOs3VxEoICbFFg%2FvZjlSZQfnwu6rfl4xv5%2BYpu59LYPxE9qgHJG7o4Z62WrV8OWo4JqMfGrF%2B18zApzMoQhRVPjX%2BKs%2Bdv4miWJkVNAbILna8c5ZAXRP8x36PQEzHIj8ve%2FHJEqXADyGLSChbXRpUXjvIGTUkNynb1%2B%2FrA1SHxTJeceHlT8OTKy1q3a0zD21Im%2BBjqkAZpFskpsW00tH9jhmEJBoOfnw%2FqUIZ4D5221J9ob32j8D1okHfBzdyyzPGZfxYk%2B6%2Fu1zSzbaMgH15J9dkzpFdBV3UfN37yb6ZcUvEeXUqCXbxVOOOpNXBYZAR8XhG2DeNtOgIm07qe36J8FhaKx87WQPAewWK9XZ8nj7S1C2qZVG3ugON5wOW5xPycBR%2BkRN3H2pYTvspn8ajalTVDTSF1A5mN%2B&X-Amz-Signature=7daa9a895257dc1aef61a5e303f87a82e90b027bfbd252696fe069a5d9eec243&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZOVOELI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC2Mm0%2FQvvegEB8wobDSwU8dMi66heS001w20qeKnEYbwIgOQu2Fo1Vwm8TuW%2F453ErZZ%2BpYKK9sRpQWb1XtO3g3Y0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl8eNXo9xomc9KY8CrcA8wuo%2B5ME%2FR6c%2F2fK1n5F1yWU69suOp0%2B6sCjpzFfDqWEBqeyMu5fsDku4lXEvfN2t2r3Jo%2FGC%2FVbaFsTihRXbgc6r0Lvm6jORp%2FA%2BcKhafUWapEl9VtZweKzz%2FejLseYA7fBr1OvGfSPC%2FseZc6Ozc7TsFBCNYHPFfzH9wmd2IJisjQ86hr4CmDPVoolLbBPugbU7Fll4jhHExO53XdRIZe8R%2BjFtc5pS%2FwGYpjbcrkIABHcFT9YVlJAGZOfdCEIIYkvncXjclx23Xkrzsq%2FOEy96CLD2%2FnOSvxoo1pv3dEDKOXePq46W21eHGJi4WUnP2drCk6hlU9g%2BoHiJA%2BxlshchtuZXsBRaS1S%2FNt3zMvzTkGihEmXcDXQO5xsa0VmTZ1l2X9BhOLjBp5a7KUzlTeSeTHYVBSMBCw0oxodj7wQgW2gMMIXWJ%2BQXERsgkYoZba32rJdvZo6%2BeC5u61qLDXpQM8LhTGLrmgETv7J7ihVKwrk275PqJ80DLMw%2FWGxk9JeOjG69Bv%2FaaZ7YEI%2F3YtkgF6HqkrB%2FQ0AJOWRALec5mpMrzS7Yz5hYDE89PBcKf80%2FHm8Cqyqo1LkA0qEWRYJIDNPQkUKMBJr9u%2FYE68c279GC%2FfiBsxOHb8MILVib4GOqUBsFbB5VaO%2BQTZ%2Bq75SFNJKTt0ulgMSRwaqyzNu9TwmHexvsaS81MHl4fYfGdqJpE5LrmsuGhh%2Bci%2B4WbhIscv%2BUy5BO8R%2FA1iEhfRVxG4uiFzd8556Wb4T70kTj1L5JrLmkas3Bh8BiPqhQ5YRpKPcX3fZpwmH4kpM3lA3RkNnFNLktNzOe%2BSYju7%2Bn1CzAJd7iLT1xAoPbfjZH5tCy8VtN8YZZIn&X-Amz-Signature=0f284703135392d462d2c7830759e0f293e11e44e982a2005bdcc755ec074d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
