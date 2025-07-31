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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BWU3F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh%2Bi1fI1BikHqLFVX9K05EvR5kq3I9jg8dF6ZfEB8hCAiEAhVP%2Fuk7vCE%2FHDokdKw%2F7fS0nFNmef2DrB1rPcK3h9BgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0I28c4VBxjHbQtmyrcAzI%2FusRHXyMQGSBoAqxFD2YrSURvN0pHOePZZ6Tf6lmlquoqaNhNDGpTQeY68jJyMttaw9N8laixuZGndecbdQGN5XUG1K2IFc19Af48XPSWxE5ksD5dkh%2BhydI%2BvkO0vk2aD%2FZPtNBS6Yrcltl5XIWpsWOfu3VBKLjXq9XBZF3exyWZvFK48br8%2Bi%2FK%2BDfx2Zt4sG4AshVrsL%2FJURSrpxSkt2ha56Ww2haxr%2BUOg4GNTJ2Bpb%2BzkNGM%2Bg0LJSMn6nMOUTgA1hNmoPJRAT7VV8amvKY%2FKl56tMXa%2FOwl0DLspRt2OPPXrJWd%2FRMNrcfpNNwR3D27OGrBk4IZgnKBtzyji%2FW5YAlGP1vWyBDflvOc9gW4%2F7XC%2BmGJiE07R0XKoD%2BOP8aqXMejqJ7tPTeBGylsvxgL2Vw1O1iD2cTxhe%2F1zfSSI3JP8z2Qw5qLk2qhLK1VMqmb%2Bhq0DsxkQ7qJFj043JlVo9%2BfROTv7Q9p%2FGTx0XOmeL3nthamNLw2HIBfo0UgVu2mEGk%2Fq1K6JgmXDZ75wOpRjMwH8t4gQS4JsTXtSx7Cb9B912LbCf6krjjOPMZDkfdp%2FnuDTyRikNslSz8vxpOmGa7lj9HJ9hQfftp1JhCEU1DiboDvm72%2BMNr1q8QGOqUB8ta4Nm69wzjJP834L2RpqDidKrBvDW8BGS8JYUOtu9s0w72LndVIKV96uSxNKKYETx8bBaUq85V98IxTSztjp5q25AwQfcd0l6OiTVI80zkDlZ45IwtdZaFH8r2U2cTYtZv7RVtaUpTohaDXyGi43eY4wcO3zShZekzk10Fkn6BsMfLqZHc5%2BCh6YLkrj1hNXx6AqRBpX7rDQFEBTDc5YVVwIONE&X-Amz-Signature=691aa815c1bf5733a79dfea03194357f775b32d5311059ceb085ec2429a610bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BWU3F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh%2Bi1fI1BikHqLFVX9K05EvR5kq3I9jg8dF6ZfEB8hCAiEAhVP%2Fuk7vCE%2FHDokdKw%2F7fS0nFNmef2DrB1rPcK3h9BgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0I28c4VBxjHbQtmyrcAzI%2FusRHXyMQGSBoAqxFD2YrSURvN0pHOePZZ6Tf6lmlquoqaNhNDGpTQeY68jJyMttaw9N8laixuZGndecbdQGN5XUG1K2IFc19Af48XPSWxE5ksD5dkh%2BhydI%2BvkO0vk2aD%2FZPtNBS6Yrcltl5XIWpsWOfu3VBKLjXq9XBZF3exyWZvFK48br8%2Bi%2FK%2BDfx2Zt4sG4AshVrsL%2FJURSrpxSkt2ha56Ww2haxr%2BUOg4GNTJ2Bpb%2BzkNGM%2Bg0LJSMn6nMOUTgA1hNmoPJRAT7VV8amvKY%2FKl56tMXa%2FOwl0DLspRt2OPPXrJWd%2FRMNrcfpNNwR3D27OGrBk4IZgnKBtzyji%2FW5YAlGP1vWyBDflvOc9gW4%2F7XC%2BmGJiE07R0XKoD%2BOP8aqXMejqJ7tPTeBGylsvxgL2Vw1O1iD2cTxhe%2F1zfSSI3JP8z2Qw5qLk2qhLK1VMqmb%2Bhq0DsxkQ7qJFj043JlVo9%2BfROTv7Q9p%2FGTx0XOmeL3nthamNLw2HIBfo0UgVu2mEGk%2Fq1K6JgmXDZ75wOpRjMwH8t4gQS4JsTXtSx7Cb9B912LbCf6krjjOPMZDkfdp%2FnuDTyRikNslSz8vxpOmGa7lj9HJ9hQfftp1JhCEU1DiboDvm72%2BMNr1q8QGOqUB8ta4Nm69wzjJP834L2RpqDidKrBvDW8BGS8JYUOtu9s0w72LndVIKV96uSxNKKYETx8bBaUq85V98IxTSztjp5q25AwQfcd0l6OiTVI80zkDlZ45IwtdZaFH8r2U2cTYtZv7RVtaUpTohaDXyGi43eY4wcO3zShZekzk10Fkn6BsMfLqZHc5%2BCh6YLkrj1hNXx6AqRBpX7rDQFEBTDc5YVVwIONE&X-Amz-Signature=bcad64c07bb98f16b4dbad4b98255d1fb3b94e1d5ce66503298e566068af1b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BWU3F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh%2Bi1fI1BikHqLFVX9K05EvR5kq3I9jg8dF6ZfEB8hCAiEAhVP%2Fuk7vCE%2FHDokdKw%2F7fS0nFNmef2DrB1rPcK3h9BgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0I28c4VBxjHbQtmyrcAzI%2FusRHXyMQGSBoAqxFD2YrSURvN0pHOePZZ6Tf6lmlquoqaNhNDGpTQeY68jJyMttaw9N8laixuZGndecbdQGN5XUG1K2IFc19Af48XPSWxE5ksD5dkh%2BhydI%2BvkO0vk2aD%2FZPtNBS6Yrcltl5XIWpsWOfu3VBKLjXq9XBZF3exyWZvFK48br8%2Bi%2FK%2BDfx2Zt4sG4AshVrsL%2FJURSrpxSkt2ha56Ww2haxr%2BUOg4GNTJ2Bpb%2BzkNGM%2Bg0LJSMn6nMOUTgA1hNmoPJRAT7VV8amvKY%2FKl56tMXa%2FOwl0DLspRt2OPPXrJWd%2FRMNrcfpNNwR3D27OGrBk4IZgnKBtzyji%2FW5YAlGP1vWyBDflvOc9gW4%2F7XC%2BmGJiE07R0XKoD%2BOP8aqXMejqJ7tPTeBGylsvxgL2Vw1O1iD2cTxhe%2F1zfSSI3JP8z2Qw5qLk2qhLK1VMqmb%2Bhq0DsxkQ7qJFj043JlVo9%2BfROTv7Q9p%2FGTx0XOmeL3nthamNLw2HIBfo0UgVu2mEGk%2Fq1K6JgmXDZ75wOpRjMwH8t4gQS4JsTXtSx7Cb9B912LbCf6krjjOPMZDkfdp%2FnuDTyRikNslSz8vxpOmGa7lj9HJ9hQfftp1JhCEU1DiboDvm72%2BMNr1q8QGOqUB8ta4Nm69wzjJP834L2RpqDidKrBvDW8BGS8JYUOtu9s0w72LndVIKV96uSxNKKYETx8bBaUq85V98IxTSztjp5q25AwQfcd0l6OiTVI80zkDlZ45IwtdZaFH8r2U2cTYtZv7RVtaUpTohaDXyGi43eY4wcO3zShZekzk10Fkn6BsMfLqZHc5%2BCh6YLkrj1hNXx6AqRBpX7rDQFEBTDc5YVVwIONE&X-Amz-Signature=36ef0014c44599e14a9e3b76d04a257a366ecba25820627e8237e3b03dfe1cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGMAPX4T%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwsv8K6r7JiKZtHcoyI%2BbnbF5cKjvLPZT4Ial33MTYSgIgQoya2RIEQt8y30YAI%2Fa%2FSz8NHi1PchoubifcQpaHoh4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkdLfNQgPImggLcvCrcAxu24NPeV4TTfCKnsdL1YJvXlxiNlbv8y6RehV45%2BNilRTtDARbxjZ3qi0C8%2FQwMETes7iTC0Q0gvJRo3T1RUG014p8Zk5%2Fv3RS7jzCRRBAkelCHByAVfgurJL4cJrAYIhOcRiuOWWYpcp4pfGj0L1RT3Uha5ZZsNz7Tw1kIQfJm4nHZfipaFTTMLFRw5RXkGIYxWc%2BQ3D%2Ft0aI17al2Rf3GgFx8nMQ7%2BGfl8%2F90mbgj4C3gylvkmak7EzxMcwyYjUwVEO7MR%2BDNkzQI7mjgM5t7vKXQOv%2FdxhEPbhQxpeq4u5unrIGZbv1m26x3pjYy1kRNtMAJGZ6KMcxLZXGYLANaEi4wPYWpgkjG6UFnOsILl9%2FYsZkF4zjJg%2BbMqN9CvERLHnqXKs0eXFG7ohw0%2Fh3OQDHvkUuET4wGq7lLteSrgHya4ph4C2wwBoZT80dvV19mqlka45Xu4ZFcCOR81oG1vof42YiCq%2BSBu0K968ftwZM6RZpjc67RKVz4WSuvLzjBr13p9hU6AfoON1a6kpmvG9AlgPVNg2EBSXdiJ8JruDpM6Iw2TZqEPQV96cz2HvP3Gp6OyT%2FVuJaxcmKjEz8ph3jJsb09w2J0L847ohz18kNq7%2FGanGL4Q6L9MLT1q8QGOqUBrzRFiFfAsMIu8i32mzWGfX4C302AsA0YdZeOkwjEjRNVBSRDV0p99bTi4p7B3iYYl0ORbgVlE3OOpHYp7baM%2BpcwqqPZEJGSSBcaHlwg5wE8IMQrBtnr%2B6IKmxhYbXFdDueFb4Y93lTniM9SmC0SiYGNEMo39BuUL6WKkaVLeO01DnoGdLj1ieFPZkmUlTvLDauuVzctb6upiRlNLZjg4Eo2pG2u&X-Amz-Signature=0f82150c2b45e9c7135d7d09f2b8c06b56474a3de73e6e9f1cd417e82a23eb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAGKTOBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsyKPuQl7GhPwaRUVx3sg2I7ike5WnLvQd%2BhhkKV2WKAIhANULirXlBAxeRyJltEa4BJUj0I8mW4wx8iP6IpSKgUYSKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq4Yma0z0WYMGpnA8q3AM%2FlEkl1pNwbe0iE2NeuZf4eJNZtjNJ4T4gXxO9UKDKoY%2B7ivF7ziFMrP%2BMlc6MIvF73MExaYdzjiAxYu4js4lMrGN3Di3QqlUcPkWZlqYPfbVRGEAS89KO0egZpJm2KOyPYa9BvnG3%2BeWvl0IwfNIoguKi3%2B%2BqWWOaA0eqm5xoKe7Be13OO%2BKx2z1%2Fr1ajO0hu4ZVMUliS6RhowfTGZ54L05HBoPv4kULp%2Boo%2BcwREdHBxUKoBTgb6lCTObjnROIvZlSxjx6yZ1oSE9TvjCqkofsIkHGLTSaF%2FW1WKC5E632fyyJid0srnFyOv8KhsCXabnoeVjRCOFY9Ho2PY8udLwrvz8rUxSck9lM1%2B0FLWI922BhEq8u2QWP0Vdg3OMhM7BiVKeN4JGrRUI4H7dfpUuFtmLiatzSziPLck5jW41fcdLzc6StIdOlBWMwAzzIuq1ru%2Bgtqo6SDRjPd1LGs%2Ft8dJihilVta%2F5PkoUd78JFjwmlb5%2FiizZtdoZ7SWpCWzsC0J6g75CU4pRujqIUC781ByiZFFy0XCrOeY0SAY5ZMQg0Rxu8AXvre1quR%2Fy%2BnuFg8ht%2BiJgRfVK4B0Z4m9KKXBV6Rb05f%2FZDuztZcuZS%2BxC5LqQBMeFmtc%2FzCE9qvEBjqkAWhLCHoV8hvMwzG9HnrX578mN84KRBBHXY1j55LFZ5XLbSxPH1EJIrrGjauOShAQV7WttgFFJ884aPg9l9%2F9G1I2hI1rfmPkLDFG7m4vsLU2%2FgB8W8OZIsl6t0IoAgm7mhnvF8z6mqYY4L5vO15YA4Qxrs5uqqG%2BeZu4cD4BVuJ53rLmMqZV22ebRXhyzKROaeu%2BSuYno1ycopSsM3Wyr1wmGA7%2B&X-Amz-Signature=d2eaa190a7ad5131b006e9067fa8aab699b16ba157522e5acb28dc256c864911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564BWU3F%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh%2Bi1fI1BikHqLFVX9K05EvR5kq3I9jg8dF6ZfEB8hCAiEAhVP%2Fuk7vCE%2FHDokdKw%2F7fS0nFNmef2DrB1rPcK3h9BgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0I28c4VBxjHbQtmyrcAzI%2FusRHXyMQGSBoAqxFD2YrSURvN0pHOePZZ6Tf6lmlquoqaNhNDGpTQeY68jJyMttaw9N8laixuZGndecbdQGN5XUG1K2IFc19Af48XPSWxE5ksD5dkh%2BhydI%2BvkO0vk2aD%2FZPtNBS6Yrcltl5XIWpsWOfu3VBKLjXq9XBZF3exyWZvFK48br8%2Bi%2FK%2BDfx2Zt4sG4AshVrsL%2FJURSrpxSkt2ha56Ww2haxr%2BUOg4GNTJ2Bpb%2BzkNGM%2Bg0LJSMn6nMOUTgA1hNmoPJRAT7VV8amvKY%2FKl56tMXa%2FOwl0DLspRt2OPPXrJWd%2FRMNrcfpNNwR3D27OGrBk4IZgnKBtzyji%2FW5YAlGP1vWyBDflvOc9gW4%2F7XC%2BmGJiE07R0XKoD%2BOP8aqXMejqJ7tPTeBGylsvxgL2Vw1O1iD2cTxhe%2F1zfSSI3JP8z2Qw5qLk2qhLK1VMqmb%2Bhq0DsxkQ7qJFj043JlVo9%2BfROTv7Q9p%2FGTx0XOmeL3nthamNLw2HIBfo0UgVu2mEGk%2Fq1K6JgmXDZ75wOpRjMwH8t4gQS4JsTXtSx7Cb9B912LbCf6krjjOPMZDkfdp%2FnuDTyRikNslSz8vxpOmGa7lj9HJ9hQfftp1JhCEU1DiboDvm72%2BMNr1q8QGOqUB8ta4Nm69wzjJP834L2RpqDidKrBvDW8BGS8JYUOtu9s0w72LndVIKV96uSxNKKYETx8bBaUq85V98IxTSztjp5q25AwQfcd0l6OiTVI80zkDlZ45IwtdZaFH8r2U2cTYtZv7RVtaUpTohaDXyGi43eY4wcO3zShZekzk10Fkn6BsMfLqZHc5%2BCh6YLkrj1hNXx6AqRBpX7rDQFEBTDc5YVVwIONE&X-Amz-Signature=2f832610a1687913842f60a16654942c450cf4c4e83d0351788e376ef31ba0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
