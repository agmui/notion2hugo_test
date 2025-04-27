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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QXZREY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImZEhgEYQwDLXhvTCS979dZs6EoaSMnIsx%2B%2Fj49k4%2FwIgOZkdHT7JkPT85f2Rg2ULjXzotXQJewsQvyrLWVusV7cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGXkHfZtJsyKgu0QoSrcAxCq8PsmtvrVSaCeuPM4Ya7mX2uLX5c%2FggjBAX56hJFFQP3nUuX6FCV73Ei3ON3NwfxS1FPrJ7nhpl44M3HXrinWODj%2F2ohBtoSLIT8sLcwwjqFml165YDmW5uvnf9%2BLKDkQTFI8BlbiIN5hqswJtlyf56jXdcSdJ8AX3INgUbntySV7RFNpdlgVO50toHSZZgrZObqeg%2FO44S4JSCgdO5%2BvsoZEhN0mKtdtNpQm%2Fg8kwZmS79wDbA0yzyOXwqJFnEzURMHJiJZsNMxv4cNi2z9a4DCsoX1CuGbF93WXt3dxzS70vb8TEoN0z5ZrQ%2FhRYV3RDsj3AA5V6h3EOXP4j76NFGLZHPDU8oxl2wsUA6iVzRm%2FZwL8IqGT0l0aWMTlcbjjdve7bkk5LUn1FW0lpscb11x8SQu1gz9Y80hoQsp2cOODliGhhb1vIq6DezWWuuZBXMt%2BD4vB4Xqte58gTLAdi7YQXuUHp7D7qFwtBCoJ6KHG4YwszVAYEqz2o4v8tN1Zta3PBeZ5wSjsvbxCKegrdRt1r4KQzcirpVD5tk51sbzY0VLopcCLbRJWeTB9lw03ixdZDUjM1%2BJdNHfuIFYMQNgNRG7bBpSwX3vb9XLI4jvKMXyb0izXCUQ6MOeKusAGOqUB6flyrtocwFyTs8zzkfNE1xLtDmtKcQyYKdpqmqNyUUmHraDBU%2B8PA1yBw8DrJwFeyfImyrp1dfBfr7PCDQcSMnTK8LodEJSOl8RyjxRkqt6bOe%2Bqif0q6sbr2ys%2FUZIO7JYeAW0%2FBU6VG38rVaiaX8Db%2BsChzLshC4d1r3Zmd7xfRt8gdroQOvnFAbO%2FCo34RdNeiGLPlkupl%2FOObM6hp8IyoDkb&X-Amz-Signature=5f4b4ece2313e936c35e68d06b06ffd77b6185dc1389efae6b7ec50bbf171346&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QXZREY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImZEhgEYQwDLXhvTCS979dZs6EoaSMnIsx%2B%2Fj49k4%2FwIgOZkdHT7JkPT85f2Rg2ULjXzotXQJewsQvyrLWVusV7cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGXkHfZtJsyKgu0QoSrcAxCq8PsmtvrVSaCeuPM4Ya7mX2uLX5c%2FggjBAX56hJFFQP3nUuX6FCV73Ei3ON3NwfxS1FPrJ7nhpl44M3HXrinWODj%2F2ohBtoSLIT8sLcwwjqFml165YDmW5uvnf9%2BLKDkQTFI8BlbiIN5hqswJtlyf56jXdcSdJ8AX3INgUbntySV7RFNpdlgVO50toHSZZgrZObqeg%2FO44S4JSCgdO5%2BvsoZEhN0mKtdtNpQm%2Fg8kwZmS79wDbA0yzyOXwqJFnEzURMHJiJZsNMxv4cNi2z9a4DCsoX1CuGbF93WXt3dxzS70vb8TEoN0z5ZrQ%2FhRYV3RDsj3AA5V6h3EOXP4j76NFGLZHPDU8oxl2wsUA6iVzRm%2FZwL8IqGT0l0aWMTlcbjjdve7bkk5LUn1FW0lpscb11x8SQu1gz9Y80hoQsp2cOODliGhhb1vIq6DezWWuuZBXMt%2BD4vB4Xqte58gTLAdi7YQXuUHp7D7qFwtBCoJ6KHG4YwszVAYEqz2o4v8tN1Zta3PBeZ5wSjsvbxCKegrdRt1r4KQzcirpVD5tk51sbzY0VLopcCLbRJWeTB9lw03ixdZDUjM1%2BJdNHfuIFYMQNgNRG7bBpSwX3vb9XLI4jvKMXyb0izXCUQ6MOeKusAGOqUB6flyrtocwFyTs8zzkfNE1xLtDmtKcQyYKdpqmqNyUUmHraDBU%2B8PA1yBw8DrJwFeyfImyrp1dfBfr7PCDQcSMnTK8LodEJSOl8RyjxRkqt6bOe%2Bqif0q6sbr2ys%2FUZIO7JYeAW0%2FBU6VG38rVaiaX8Db%2BsChzLshC4d1r3Zmd7xfRt8gdroQOvnFAbO%2FCo34RdNeiGLPlkupl%2FOObM6hp8IyoDkb&X-Amz-Signature=77a1bc58caa621108ac43ad5268024da89fae7144ef3f3d384a367593f10b6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STMPLBPB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb8jMhjS1owSmUikuN%2FQKkv1TIgyiSgs4vAu2H78gM1AiAqWdZUMHEP9UPDOKGbxCrEqKdnLYi6%2BBzK%2Fu%2FZRPK7cSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMevXHfRp8%2BMbe5oxdKtwDbz30g8W3apGltG1NjeEtS6AWm2E3RcttHssFjbhKc%2B%2FokqqFscV6clhhvTsBXlzTS%2FnnRu1pZBEGMNQqZHM%2Fz4HGARmxNvrtLgJLIRojGmCYuS3kOfJ7DD0q5XApli1WjD%2BSBg0vQL8RUe50ieEN%2FGjaG%2FQlC%2F7T6dEaiCucgGRrezq4PIYcdxwee4USOS0lHBLU5n9Wg20bsDAmAk%2BuNhDqli5ewwl7TFhJ8aCz%2FEdjTkSmxqGFSItJFmE3dNQLF2oLkzAeq4Ep3Ucmjp5EygTswk5kBTXm9QZDKPH%2BUzHS4ZUgtU9zpIHOcd7kYuUVKAjfFb%2FVed2ZXZAbkotUeAfKtLd%2BphcvP28GBeM%2BD3k9VQK%2FBqhTBh0hy0YGVHdj9QPXtjG5pbn%2FEeTzpDi58ega%2BioA2tX3RGqQk0MN0xW9ETg2q4w5x%2BqcKTTjsxEWExJmbF4nywYeVkcQ6GL4nuNwrlrrragAYLvbzQhkB7vgFFKvl0086cbIZ%2FCr3hSv6G7vGyxjJvG5zp2IJi6SS%2BD6VN4Jfw6IJt26TQ40tgczueZ42uBPKamV0VdmIyNXlv4Ko%2Bc%2BuRFC7f0JA78z6Bani3Wixo0vNNsLfNj3khpz94GfNLQqZvTAlMUwu4q6wAY6pgGjUmAkqhiA6nxEEBiXSKRO0XbUCU2179tKOpGV%2BCHuWcycOZsLWe%2B01OH5Yxz7aj8R6QzzgMdeOmz1SxbsbQONJgqThd5IJcp22JdKJ143xTV4eUps46obMXRFUnTxudItECL1nFT6u%2Fa%2B7K2HLxvM%2F4v2HfRP%2B%2BaPN%2BU%2FafoYVmMR%2FT4RpTpJtCjumfzlm6sUG%2F4CJobZPu0HklOg7z%2BnWNn0g2Nb&X-Amz-Signature=3cec57c0623ec3bfbc3136eb426b70dc2820e3e639ac9b2bdf59b02dd9adb768&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCMMCB67%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkgo0aZmPMCsEm3wrZCxc7LON1mFvQKS%2B8PgXu0nTwXAIhAK%2B5BY3dNZ6GSejEFste47TfEQhAE6SIEw6wudEkpUGEKv8DCGUQABoMNjM3NDIzMTgzODA1IgyKu299fC9ia99kPWMq3AMhMaBSTkcGpcgxOABWw2n9Z%2BMFf7IghruBx0h1r9vP6cw1WXhop7oLQGezm5Df5o4jsNjN3KVX6JGURg485LTL9JlWk35KhlIhiDToSddOe4Bj%2BKx1BypL8xC7Q8eXvse%2BI7Yigzu0Fxw%2BV8Np%2Ft5rN74ACmHXqAjx5r4zds1ljJCkNkQzfn8JIlD47JR2mGrTXRhqu8u4UxUKiAXXCrK2x7B2x%2FDA2dY1MBfrTCf8vt6KTBIBZiyEcNf8KW6w%2BX%2BQ5XgDtkLfTOjhTKQ4Mes2ICu6L5fSJgRygJBNziM5IL9irLsH6Rwxh4AOZ72Mk%2FwnqG9jIaUM4bn3zKwqeANAQu2ZhLuWTpu8j1VfPDfgbo8%2FImGRJuageX2l0vnYQvAOUjUmqQZEZFhrm1nNUINqn1DWsVEAmiFcJ6%2BpDve0TNfzQ%2F6QXrcQWelRShrTSu61wTmKAZStwpz%2F91heJulDgw6HMngmeSiXivtAB5p1zwvT6%2BLCz7u4BlO0cfFpl3VsU9vJmNL9iv5xOcwJAWd0IRfC7n5ESvJzhcmj0Y39jNYizOkC73UtSfdEnbRIod7fg9R3iKyrfg8XXi%2BGn2OUmtuH%2BmB326ZPk8aIc7LmlD3kwCvCF%2FhizbLgNzCUi7rABjqkAcKzHLcutPkOTQHj5%2B8tEvEoRMuTOe4iF5BnXJj20%2FbnbXQd1uJePF6FZd5oOPSvqEEtLs5sjEwHvwEIVwluLL4O3dx%2F5rK1qFrhapliniZZTRwH%2Fc%2BKJy4Fx7lz%2BeZg%2BxsHiCGDkJHPcoK7%2F9YrTK3U94RyOXYBdtOXJZfxvw%2BJBdOlDnsCV8iyblMQYf3lrxf9K5tj9XiXfaaBYrmSISWoNnuF&X-Amz-Signature=fb5d39bad53aa2246720df026a1c4994c303ec2993348965c7f8046aa5711c74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643QXZREY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDImZEhgEYQwDLXhvTCS979dZs6EoaSMnIsx%2B%2Fj49k4%2FwIgOZkdHT7JkPT85f2Rg2ULjXzotXQJewsQvyrLWVusV7cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGXkHfZtJsyKgu0QoSrcAxCq8PsmtvrVSaCeuPM4Ya7mX2uLX5c%2FggjBAX56hJFFQP3nUuX6FCV73Ei3ON3NwfxS1FPrJ7nhpl44M3HXrinWODj%2F2ohBtoSLIT8sLcwwjqFml165YDmW5uvnf9%2BLKDkQTFI8BlbiIN5hqswJtlyf56jXdcSdJ8AX3INgUbntySV7RFNpdlgVO50toHSZZgrZObqeg%2FO44S4JSCgdO5%2BvsoZEhN0mKtdtNpQm%2Fg8kwZmS79wDbA0yzyOXwqJFnEzURMHJiJZsNMxv4cNi2z9a4DCsoX1CuGbF93WXt3dxzS70vb8TEoN0z5ZrQ%2FhRYV3RDsj3AA5V6h3EOXP4j76NFGLZHPDU8oxl2wsUA6iVzRm%2FZwL8IqGT0l0aWMTlcbjjdve7bkk5LUn1FW0lpscb11x8SQu1gz9Y80hoQsp2cOODliGhhb1vIq6DezWWuuZBXMt%2BD4vB4Xqte58gTLAdi7YQXuUHp7D7qFwtBCoJ6KHG4YwszVAYEqz2o4v8tN1Zta3PBeZ5wSjsvbxCKegrdRt1r4KQzcirpVD5tk51sbzY0VLopcCLbRJWeTB9lw03ixdZDUjM1%2BJdNHfuIFYMQNgNRG7bBpSwX3vb9XLI4jvKMXyb0izXCUQ6MOeKusAGOqUB6flyrtocwFyTs8zzkfNE1xLtDmtKcQyYKdpqmqNyUUmHraDBU%2B8PA1yBw8DrJwFeyfImyrp1dfBfr7PCDQcSMnTK8LodEJSOl8RyjxRkqt6bOe%2Bqif0q6sbr2ys%2FUZIO7JYeAW0%2FBU6VG38rVaiaX8Db%2BsChzLshC4d1r3Zmd7xfRt8gdroQOvnFAbO%2FCo34RdNeiGLPlkupl%2FOObM6hp8IyoDkb&X-Amz-Signature=77955ac1ec0be8b99fbeb9757df5b607b3f473aab40b41e2d5f07588d6c34512&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
