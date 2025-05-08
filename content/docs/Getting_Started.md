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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BOCLXH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf0hUf2t%2BaC1PSpiEym8mlNVWeoIG0j2xOCuxBVnyikAiASv5hMVlgnuUpEeHQvAf7wDUFr%2FMmkM%2FIWxT89xcmLair%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM8kYiph%2BHK3DiB8cRKtwDatjWsehwKbNaAvDlDjnV7zkiv%2Fk4tGuYx9URliEDMPugXWFGRHqwPzGJikZVs5F9z2piiSWbMqcTeQgF9jIz%2FEgv%2BZjbQoucwBDY%2B7laoQ2iVItbhPEqHqFwQaENv2Aw7GWKwO2Ua7hk3oDKA5F1crjjlOF6aPy3avYfyvPlO9jPpxwAcZZ%2BEf7MyditaAzXo%2FKDdTySXrhHU0jw2qUmd1EsUqsXitl7f3qtAGoirky2OIg10nJivASZWaGut3oM9yU47vO7otGZ%2FdByO4jitOl2b5BRpcWbzk%2FpaqQI5E3wh4gmYCw0xx4Pabh2xCJYKks4%2F2%2FM7V4Bxh2jQp9gR9KZfrR7cM8QzIxC%2FiAzizcN5V9HWftmV4To64lFtlIdhtXo5tI9TaRwo1n4X3KsRiZjVChbX6U%2B3DMCXv7vi%2BjGUwmssvF1KRNBihZqI7O0SAuNs8MhBRfZq1EQaJvIP%2BEBg%2BYoYJwO5kf%2B3n6M7XWCigY8h9DuZStqVXsROUVdVuacz4rnz0j2F7aWSiAdgVhQnPQXuHNdQpgp0Ky2VBCnY%2Fiuc5xNdTe9zbZtfnn4klCnkiap6yuPK%2B8KcJ3bAdDUVDUwqCmQIG6Xhx7QWzAZxWjSq7xwIA9882kwhLL0wAY6pgEOO5fg%2F2lqD%2BKDZHMY7w8Q1khGOh14K5nsbGYzzicUNOrbkh6m2tgsIpqHBfteAYF88qL9Wub9nFG8bdF9DOAPp0B3DDgnF3dH5YmpcDt3xKQXtUC16CoVXOhbNJzXFJWH2p88r%2BJyyYatrI%2B8%2FtXynuy4h%2FlpHLprBjtGDsDrRcoofx%2F0zt1GwWDJGJUu2rwT2jBBrVaKPJpA87PMer%2F9JSxwcnw4&X-Amz-Signature=5a5479b24ee06bf78d6f7edd16505ec3aba3e44e0d2956057334b61de520fe44&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BOCLXH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf0hUf2t%2BaC1PSpiEym8mlNVWeoIG0j2xOCuxBVnyikAiASv5hMVlgnuUpEeHQvAf7wDUFr%2FMmkM%2FIWxT89xcmLair%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM8kYiph%2BHK3DiB8cRKtwDatjWsehwKbNaAvDlDjnV7zkiv%2Fk4tGuYx9URliEDMPugXWFGRHqwPzGJikZVs5F9z2piiSWbMqcTeQgF9jIz%2FEgv%2BZjbQoucwBDY%2B7laoQ2iVItbhPEqHqFwQaENv2Aw7GWKwO2Ua7hk3oDKA5F1crjjlOF6aPy3avYfyvPlO9jPpxwAcZZ%2BEf7MyditaAzXo%2FKDdTySXrhHU0jw2qUmd1EsUqsXitl7f3qtAGoirky2OIg10nJivASZWaGut3oM9yU47vO7otGZ%2FdByO4jitOl2b5BRpcWbzk%2FpaqQI5E3wh4gmYCw0xx4Pabh2xCJYKks4%2F2%2FM7V4Bxh2jQp9gR9KZfrR7cM8QzIxC%2FiAzizcN5V9HWftmV4To64lFtlIdhtXo5tI9TaRwo1n4X3KsRiZjVChbX6U%2B3DMCXv7vi%2BjGUwmssvF1KRNBihZqI7O0SAuNs8MhBRfZq1EQaJvIP%2BEBg%2BYoYJwO5kf%2B3n6M7XWCigY8h9DuZStqVXsROUVdVuacz4rnz0j2F7aWSiAdgVhQnPQXuHNdQpgp0Ky2VBCnY%2Fiuc5xNdTe9zbZtfnn4klCnkiap6yuPK%2B8KcJ3bAdDUVDUwqCmQIG6Xhx7QWzAZxWjSq7xwIA9882kwhLL0wAY6pgEOO5fg%2F2lqD%2BKDZHMY7w8Q1khGOh14K5nsbGYzzicUNOrbkh6m2tgsIpqHBfteAYF88qL9Wub9nFG8bdF9DOAPp0B3DDgnF3dH5YmpcDt3xKQXtUC16CoVXOhbNJzXFJWH2p88r%2BJyyYatrI%2B8%2FtXynuy4h%2FlpHLprBjtGDsDrRcoofx%2F0zt1GwWDJGJUu2rwT2jBBrVaKPJpA87PMer%2F9JSxwcnw4&X-Amz-Signature=de82a4bebb01d4512f1f4cf73e5c02ab822dff038774e8e465deedf8915e81a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BOCLXH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf0hUf2t%2BaC1PSpiEym8mlNVWeoIG0j2xOCuxBVnyikAiASv5hMVlgnuUpEeHQvAf7wDUFr%2FMmkM%2FIWxT89xcmLair%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM8kYiph%2BHK3DiB8cRKtwDatjWsehwKbNaAvDlDjnV7zkiv%2Fk4tGuYx9URliEDMPugXWFGRHqwPzGJikZVs5F9z2piiSWbMqcTeQgF9jIz%2FEgv%2BZjbQoucwBDY%2B7laoQ2iVItbhPEqHqFwQaENv2Aw7GWKwO2Ua7hk3oDKA5F1crjjlOF6aPy3avYfyvPlO9jPpxwAcZZ%2BEf7MyditaAzXo%2FKDdTySXrhHU0jw2qUmd1EsUqsXitl7f3qtAGoirky2OIg10nJivASZWaGut3oM9yU47vO7otGZ%2FdByO4jitOl2b5BRpcWbzk%2FpaqQI5E3wh4gmYCw0xx4Pabh2xCJYKks4%2F2%2FM7V4Bxh2jQp9gR9KZfrR7cM8QzIxC%2FiAzizcN5V9HWftmV4To64lFtlIdhtXo5tI9TaRwo1n4X3KsRiZjVChbX6U%2B3DMCXv7vi%2BjGUwmssvF1KRNBihZqI7O0SAuNs8MhBRfZq1EQaJvIP%2BEBg%2BYoYJwO5kf%2B3n6M7XWCigY8h9DuZStqVXsROUVdVuacz4rnz0j2F7aWSiAdgVhQnPQXuHNdQpgp0Ky2VBCnY%2Fiuc5xNdTe9zbZtfnn4klCnkiap6yuPK%2B8KcJ3bAdDUVDUwqCmQIG6Xhx7QWzAZxWjSq7xwIA9882kwhLL0wAY6pgEOO5fg%2F2lqD%2BKDZHMY7w8Q1khGOh14K5nsbGYzzicUNOrbkh6m2tgsIpqHBfteAYF88qL9Wub9nFG8bdF9DOAPp0B3DDgnF3dH5YmpcDt3xKQXtUC16CoVXOhbNJzXFJWH2p88r%2BJyyYatrI%2B8%2FtXynuy4h%2FlpHLprBjtGDsDrRcoofx%2F0zt1GwWDJGJUu2rwT2jBBrVaKPJpA87PMer%2F9JSxwcnw4&X-Amz-Signature=92d19dc8bea9f4903138568a39ed2e6519ddd173a28c6b16ca2d5afcee62eeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7K72FOR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FPH9QNLHbFWZc3HZujEA0nwn%2B1jy8OhXtkD4Mm8l6LgIhAOuZtsqtpL41rgss35wwVPecgLZnzcN%2BNjfo%2FaZV1%2FvcKv8DCH4QABoMNjM3NDIzMTgzODA1Igy2w9rUt0DUZgpFD6Yq3APQSf5wJn18ho8zGcovfUBFPqYAzb%2BuSii2JfVWlpOvoxyMHLCP6I0cgJmR7deV%2BxHhuXgtM6JKHHyLiy%2FNLr%2BKHeNO7Fik6tuJ1qc1vdJAnUD%2F%2FCbiC4VyLM%2FlVb%2FR0fYy2QRHsgM869uTifL4lT5B8OIKBcX6T9uPtEWvr6W1sYsRwnfo9G3zTakuyI46yrj7uY3Zx6JJmR1XQUdu278Dy2lF6r7KXJCz1rROjXmA6eeKCsgkOb4QWo0iVLSGQewdV9SOrK8GlJBIs8fv7QbMAaFICmT0GGPm7xjLZshBm6VzZwnZ2SF%2FSie4XjmuQL21qBRJlZQYMxUxZP%2FacYSeiNnVBlH%2Fi7uEbXGEEg4leU8Ci0VVni%2FDDCBIYn7feOj8KQV7V%2BEzdos%2FlXxXlDqAUkELpNzKzLzVPsJBXaWmEk%2FfleZh%2Be5xogFUL%2F3DyZ2mSh%2BK7xK%2FdPUXiyHXE1nJ2Z9v4X0HlwcpbrbQpqAq2RHkuKS7V2B5jRqHtA8ITcuFOhhoifcGBzRvrhNR3JDGdsIwHSW3HIoT5sg6EAt087u6spAmKFUAAZHQvZOEz1DkIJeB4o7nrj4USKxeNP1GfOkJDsKxLUCrZFHn1cHT7MIid9bOTOhsrvFNFTDqsfTABjqkAeLLhiU7lWmCFKTklZ4cbb34kfX90OfziRSjdOrq592BtJqTZG4Kf7gymhNDfC2u66Iu%2B5b6kr%2BrMAjhR3aZ2KBJ1%2FZ5CtGTuuAc%2BopTVLw40XRKb5RcWQUbs%2Bo8EhP%2BOADCqfXwl1O9LotUALW3Fs6BqGZIApk%2Fs3PKwNWK3nLpozvTbN6EIKaGYZrTI4IUB4iuW4RLsGh18D9E90XBrFH862NS&X-Amz-Signature=68ced80bb2aadebfcda85f54d04d806186be7769b51984d40944594b0b656538&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQKP7DON%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CJ8UotkoQn5x333TGPlkbB7PFU3nXpKheIP9pW6%2FuQIhAMa0M6Q8ihYSKbsglnHvPkP%2FuXxh9yRPZw6ZfoIrCKOVKv8DCH4QABoMNjM3NDIzMTgzODA1Igztx6n1LeVpwOZZkUQq3AMxJUzXd8H8%2Btz0ZXJNsgwR%2F6dLeH3p4Ja0kzvmbAEJWp6trbSHWkQDzNR%2FF%2Fgx1iNrPh14SeVONC1PQMVwszJU3d4GoJqI3USvYSC7nxKxSreXquZVPeysd0Nvaj5AeT7mZOx3tfZdUTUXgH4q%2FbXklhVajpCnKyOACS6cZ8cHYI3zTMGhBodcTEPBQddL76XqCxfVXHgNFUVZLu3vbRBr4uGLComNgW9rMiOv2WvHjalkPGYaN%2BDEV1gpi3ADSMhOtXgHunov3IyH80AjrMFe9qBv56MzB5YJZzicEnchsRl1gIDHcgNfblV2LktXz%2FXzhdakxAQ6nC0gP3unoDLxB0Dk5ywl0KsnJpV%2FtdfJIeobNjrumlNaPBIFHFhu3nKZRQ%2B1diMxLcjjk4C0eCERDN8DerMC3YQKz%2BI%2B2LCdoXDjk9KnRuPF4tNQOEGlHg4wBJXWQB0lYDEjzRhgaw5XMHzqvbJwpZRsktUtS16gR5Qr8Sfe%2BmwhknMqaHYjfN%2F8WD%2BJO0BR%2BHL72KkMr90AYQpKw8GWz5Z5TevvrqsrjNRm4tzppDIRm46oENflUAAsGkw%2F2ZfeTF7keBlVyzl4I6v1BoViEgBti4AC9gY9kMycznLtotJJDcJNNjD8sfTABjqkAd72oEzIKnZ6kh3UWu2VypoC2ujqJO0nvPovjm9NRP%2F8HAo%2FnqQ6BdKZAyZ0rq9NmnMUVJG4mGyrHheoSqZvvVAhUArgVZ3UnPv6%2BldLFOMufG8n42uXOiL6tdUt8G7pKa54QxPfH95oxwrx%2B6Fk88xygGAV2Rm5Y%2BcrRsylTFBr%2FhtUOO2BHIu%2FAofC%2FzRg1ZNyEq%2Brpm4jm4Q%2BvnIocsI4YR%2FI&X-Amz-Signature=bcd02c4d8742d2efe6feea0e68c0dca2fe208c7990a732ede6be0ed3c1b2b0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654BOCLXH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf0hUf2t%2BaC1PSpiEym8mlNVWeoIG0j2xOCuxBVnyikAiASv5hMVlgnuUpEeHQvAf7wDUFr%2FMmkM%2FIWxT89xcmLair%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM8kYiph%2BHK3DiB8cRKtwDatjWsehwKbNaAvDlDjnV7zkiv%2Fk4tGuYx9URliEDMPugXWFGRHqwPzGJikZVs5F9z2piiSWbMqcTeQgF9jIz%2FEgv%2BZjbQoucwBDY%2B7laoQ2iVItbhPEqHqFwQaENv2Aw7GWKwO2Ua7hk3oDKA5F1crjjlOF6aPy3avYfyvPlO9jPpxwAcZZ%2BEf7MyditaAzXo%2FKDdTySXrhHU0jw2qUmd1EsUqsXitl7f3qtAGoirky2OIg10nJivASZWaGut3oM9yU47vO7otGZ%2FdByO4jitOl2b5BRpcWbzk%2FpaqQI5E3wh4gmYCw0xx4Pabh2xCJYKks4%2F2%2FM7V4Bxh2jQp9gR9KZfrR7cM8QzIxC%2FiAzizcN5V9HWftmV4To64lFtlIdhtXo5tI9TaRwo1n4X3KsRiZjVChbX6U%2B3DMCXv7vi%2BjGUwmssvF1KRNBihZqI7O0SAuNs8MhBRfZq1EQaJvIP%2BEBg%2BYoYJwO5kf%2B3n6M7XWCigY8h9DuZStqVXsROUVdVuacz4rnz0j2F7aWSiAdgVhQnPQXuHNdQpgp0Ky2VBCnY%2Fiuc5xNdTe9zbZtfnn4klCnkiap6yuPK%2B8KcJ3bAdDUVDUwqCmQIG6Xhx7QWzAZxWjSq7xwIA9882kwhLL0wAY6pgEOO5fg%2F2lqD%2BKDZHMY7w8Q1khGOh14K5nsbGYzzicUNOrbkh6m2tgsIpqHBfteAYF88qL9Wub9nFG8bdF9DOAPp0B3DDgnF3dH5YmpcDt3xKQXtUC16CoVXOhbNJzXFJWH2p88r%2BJyyYatrI%2B8%2FtXynuy4h%2FlpHLprBjtGDsDrRcoofx%2F0zt1GwWDJGJUu2rwT2jBBrVaKPJpA87PMer%2F9JSxwcnw4&X-Amz-Signature=b228b6e882ccaa3d1c02b3d9e54e2213ebf44a57fe52fc6f208b63f23cb05935&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
