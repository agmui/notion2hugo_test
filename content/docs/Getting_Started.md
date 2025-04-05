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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYDT3ET%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8cC240qjjxeOGbyuuaxCHOp6c0tx8Xo7sIzeu7Sr1HAiBA1PK8XB6cNJ6MVorDI0iYBh2RYBKB8wIugXZquZjvLCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMfDyKG2jAlrrRKsG%2FKtwDW0b2Kbh30e%2FXuGj3NxuhuLimgKATBVBGBOMtcMseqaE0JQ61hc4eeI7qxyeL3zdf2c0FGZK1UF%2B7I61RvSjEskxpZVX0Ip8vxKP%2BkEDBK2aE%2BZ8YBDEevPsBnVCSbpldnGyMRlJunNERCCZyExjXisMVLXTgoFqWsfZXfirhayWUJ0PK1CC31ouZJ6igWzA7JOVF3eZJFzvNDMQ6sCo2S1vjXRjBDZ2%2Ffk59gqLNmsUmmkI9Mz74fC7VsQ8uffNLkPX1iPzj7a43brpmyozYyZUv9gE8CTTk2qIuyVB99uADR%2BMldwaRhsE3CRAkWz4EQjChhSd%2FPwttVHVYAxFU6Z7OfATadfs1uPar5%2F4CBHcps2nfTUGoFYFrpq9KOP0tYAZl7AdBJExP2nForYwKCWx3HPw4VTpmb58sByDsQJIKFAlUkCBifHR%2FAlYX0l%2ByVoDuh409aey1wdANHUQi5UaWTFvs1BtuwXes1Frw6qyhE1Na0lmay34gboXRAP6ZhdOTTHEgOcPujjwIrXbl2Y1JyHYRUsGYeBrOHqjEwaz%2BKCDpxys5nAwv0AIwz%2Bz%2BpxXUoMcjwkQa%2Bi1ZLW9jOUYm%2FNdGusjOn63fb0HiQ6XeWNnMIQkyqBpDohAwxLzDvwY6pgF8UAh5B%2Bz85mj6V%2Bnm18TeSopjnR32KbzwA9g7y5pzxCjbvqRneJ17NiITj4fLAU78SgA7TjVQp8F6VrDtOoKzYAgLTwia3vUAKEf%2B7ERmKv38GdL5lg5ybtXV7hOJ29DxLww8%2B%2Bq9VUyxvxjkCWHbGYKoA5uqAxiH7SqzgsVFcHCVeDtbPhCA5zfetPmrND3QItunBn%2F1mk8c6Q3XFz4cMjfw31jl&X-Amz-Signature=80d471a4db0331514b843b4650e8ddbcb158d0bd54f1966efe59c6577e92e235&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYDT3ET%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8cC240qjjxeOGbyuuaxCHOp6c0tx8Xo7sIzeu7Sr1HAiBA1PK8XB6cNJ6MVorDI0iYBh2RYBKB8wIugXZquZjvLCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMfDyKG2jAlrrRKsG%2FKtwDW0b2Kbh30e%2FXuGj3NxuhuLimgKATBVBGBOMtcMseqaE0JQ61hc4eeI7qxyeL3zdf2c0FGZK1UF%2B7I61RvSjEskxpZVX0Ip8vxKP%2BkEDBK2aE%2BZ8YBDEevPsBnVCSbpldnGyMRlJunNERCCZyExjXisMVLXTgoFqWsfZXfirhayWUJ0PK1CC31ouZJ6igWzA7JOVF3eZJFzvNDMQ6sCo2S1vjXRjBDZ2%2Ffk59gqLNmsUmmkI9Mz74fC7VsQ8uffNLkPX1iPzj7a43brpmyozYyZUv9gE8CTTk2qIuyVB99uADR%2BMldwaRhsE3CRAkWz4EQjChhSd%2FPwttVHVYAxFU6Z7OfATadfs1uPar5%2F4CBHcps2nfTUGoFYFrpq9KOP0tYAZl7AdBJExP2nForYwKCWx3HPw4VTpmb58sByDsQJIKFAlUkCBifHR%2FAlYX0l%2ByVoDuh409aey1wdANHUQi5UaWTFvs1BtuwXes1Frw6qyhE1Na0lmay34gboXRAP6ZhdOTTHEgOcPujjwIrXbl2Y1JyHYRUsGYeBrOHqjEwaz%2BKCDpxys5nAwv0AIwz%2Bz%2BpxXUoMcjwkQa%2Bi1ZLW9jOUYm%2FNdGusjOn63fb0HiQ6XeWNnMIQkyqBpDohAwxLzDvwY6pgF8UAh5B%2Bz85mj6V%2Bnm18TeSopjnR32KbzwA9g7y5pzxCjbvqRneJ17NiITj4fLAU78SgA7TjVQp8F6VrDtOoKzYAgLTwia3vUAKEf%2B7ERmKv38GdL5lg5ybtXV7hOJ29DxLww8%2B%2Bq9VUyxvxjkCWHbGYKoA5uqAxiH7SqzgsVFcHCVeDtbPhCA5zfetPmrND3QItunBn%2F1mk8c6Q3XFz4cMjfw31jl&X-Amz-Signature=272384a9ad9888bc240d5d86c5e52f2640438968ba595448392406ed3ef346a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSNLNNZU%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRMLShdpGw4xRd5Mvv2Y%2FJxRvUw3jLK2azmFVeu2TqUQIhAOpHfIGUJWBWm6otd1i41qK4MYR3NX5wY9c22y19vneGKv8DCCkQABoMNjM3NDIzMTgzODA1IgzUqbHcEbXsjkAXpNcq3AOUhgDhHgtxRUwonaO1akQevDa1GdzRrDbAc0ZolUi869dPs2p5pavuyH0pR00yWNqPYTtC2eab1RlafF4uu5k17qRn862C26vqUQWH04uT7xKfSSwTNtb1B%2BOrw152Br017n7YC5qU0AvaHp6dHSz8C1TaoeblELEtun99rEn74uERRNSWZ6y4ezhMdH2NcWd4HcdGXCPlROCDEIlnpGBIAPPysfofHXYO46PI4usO4UV%2FDrz0MkePI5WcP4wvSO4%2FiWBSIAxCwZmT9FwNfHImfao3GdT%2BBV8djzno5Yg1pWIc89ess4lGHssrVojYPVFn7qGX7f%2F2F8k0h12C3fDzWixDQsJXzArWvgliEBXH9qy3VsmOxX%2BW7FRA2zKngfvAsq%2Fcwlqhotkk5brLaHJJxAdZBSYFMvt5cCUvjQ7y1ubJXG8hOThrjNi39QQZVwvF3fWbP7C3DdIeRnFOcEzbumBH3msJHELFT9tqNYwG%2Bw1iyXPTI%2FaRUnmInQLQ578HQxjoXFwDDf0rOYxzFxOeJgc3ryCqj3GLMtoVfzM8HrEZo3KzvzEzdjMKySSTgcCifw0BNikJiF5x9MgtxpcKAOuaeirnylZ3ZYet5s1MkCeT4o3oPMH%2B%2Fo4ySjCuvMO%2FBjqkAYm0tb0Ky9ZhWct5YHeA8OU18%2BarxffUHqxacslzaatvTHU9ryl5p%2Fk1nKMtk%2BzF7bQREyJxaCMkGamfqLZrKDW4H1GnJxx%2FXxfj4I1zfi35%2BzRQFbk%2FfLN39aaFFE%2B6TCgtaOnL63EpYf76uHkAdwaFimz3En9hfNv60VxPfbUvoAxnUfEDnTItd7XU3YJootsciiMeTuvYvWs3eHbOY5qAQx0L&X-Amz-Signature=8316f38e9a50fb429f6e53c37ca5797593d2f352c405a0cf1f5665998407a812&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ITEG55R%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG9YfkZBvZXQKBC%2BDIPQ1htev8xx4%2FQkoTmTFNJsRdfAiBWeqIJ%2Fwm3wxLSleC2652o7BqDkRlVMV%2FTEeKpdmRmEir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM8oz2KzzJvvNKo54%2BKtwDgblUF7yZFkqRzCwDLYVP4RI0Qf5p7IszzyGOlpjp2K5jNCtYQn07%2BglWCQATimMYBB%2F3hriZvWuN9x2k2ulFS60Uy1Ez68x0jPQ%2BySaR4B5LrMff0BHEW7CRNiCtaa2b7Q6k0QoAnOdya058iMOCNH6AfouvdtnGFVFoz%2Fj%2FMdMigr7DiIAVY2fz%2Fi6IfkyOcA0o8NGWdNDWttNNx3lFSyViA6nM6Fsmdvny96a3AE%2FeOjpp6ydRocs8Jx2xL0FOSuXwlcpQggDn%2FUhpPhuxPhnZRGs3jry8bOYXiXR1k2R3tLsIIEzV11vqLC4BQ5y%2ByEfRl%2Fwx8AOVPqL6wgOJge4MP%2Fk7%2FGkppAlvnCFWMnHaMWhUWz3brilwDD7QA7SOdGs06lY8PG00wmo0O8OzOndrnhGOiKQij%2FcN2ZB%2BJMNIL%2FtHOiNql8FyZrreSHIdp93AnZuhphkzFlevKJ1Zj79exN%2FrP1FmdoHywRxaHwKMsZ8gwXWIXqxs6i2OyL8wYODBq4fHyq5ooQVdEQNJb%2BL%2FAw%2FZBjAATRCdPYaFHekkACdSfCg0mJVJt%2BSAO%2B3I0A5y7FP9b0D3vyFp5jaOmfMQwEfsTEgfz6e4N6EAYcXucm0Q28qgpQOsmDowlrzDvwY6pgHM%2Bf9Fgx93QpKLOsYJivjcM1PAsXsmW2Bm2NSHiToTVVITLgbpDj59RypSS84%2B9jrStaeTv1asAFUzh3SKZ2Mtmw9m6W8p%2Bu00RgxAfy3yc8bX3yS%2BuJdPpEZP3lVXJJFpgqmvylMTwMpvJF1GrBApvuleu0liIv6Lx51msVGmIfLpQ23ZG6NFEf2FNrzQVlA8yXdEmsLWkMRWuyjsdTlCFgbrLF5X&X-Amz-Signature=df1a2b87fcf4b957195140d466e66e959e797ae16b17041203758d117b827058&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYDT3ET%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8cC240qjjxeOGbyuuaxCHOp6c0tx8Xo7sIzeu7Sr1HAiBA1PK8XB6cNJ6MVorDI0iYBh2RYBKB8wIugXZquZjvLCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMfDyKG2jAlrrRKsG%2FKtwDW0b2Kbh30e%2FXuGj3NxuhuLimgKATBVBGBOMtcMseqaE0JQ61hc4eeI7qxyeL3zdf2c0FGZK1UF%2B7I61RvSjEskxpZVX0Ip8vxKP%2BkEDBK2aE%2BZ8YBDEevPsBnVCSbpldnGyMRlJunNERCCZyExjXisMVLXTgoFqWsfZXfirhayWUJ0PK1CC31ouZJ6igWzA7JOVF3eZJFzvNDMQ6sCo2S1vjXRjBDZ2%2Ffk59gqLNmsUmmkI9Mz74fC7VsQ8uffNLkPX1iPzj7a43brpmyozYyZUv9gE8CTTk2qIuyVB99uADR%2BMldwaRhsE3CRAkWz4EQjChhSd%2FPwttVHVYAxFU6Z7OfATadfs1uPar5%2F4CBHcps2nfTUGoFYFrpq9KOP0tYAZl7AdBJExP2nForYwKCWx3HPw4VTpmb58sByDsQJIKFAlUkCBifHR%2FAlYX0l%2ByVoDuh409aey1wdANHUQi5UaWTFvs1BtuwXes1Frw6qyhE1Na0lmay34gboXRAP6ZhdOTTHEgOcPujjwIrXbl2Y1JyHYRUsGYeBrOHqjEwaz%2BKCDpxys5nAwv0AIwz%2Bz%2BpxXUoMcjwkQa%2Bi1ZLW9jOUYm%2FNdGusjOn63fb0HiQ6XeWNnMIQkyqBpDohAwxLzDvwY6pgF8UAh5B%2Bz85mj6V%2Bnm18TeSopjnR32KbzwA9g7y5pzxCjbvqRneJ17NiITj4fLAU78SgA7TjVQp8F6VrDtOoKzYAgLTwia3vUAKEf%2B7ERmKv38GdL5lg5ybtXV7hOJ29DxLww8%2B%2Bq9VUyxvxjkCWHbGYKoA5uqAxiH7SqzgsVFcHCVeDtbPhCA5zfetPmrND3QItunBn%2F1mk8c6Q3XFz4cMjfw31jl&X-Amz-Signature=f0fcdee510bbbc6398e57e1cbf0bf23103cb006fb06141ccab243c921461433a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
