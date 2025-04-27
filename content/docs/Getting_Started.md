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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HQ72Y5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDupLU29Sx66giNFP9J4m6KqmmC0%2Bm1Oz8%2Bj3ciEDBFBgIgVKNl6wckjc7a7Q4O%2FDSzq5LSKqeKHc6xDXBr%2FURBOx8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKGNIZeh%2FDBTcFbntircAxKYJq6uty0t%2FjGgPQV5B3TNdeYZQR4WNqEP0N0cCuEjqNBOIucM5a8QuA7rezYE2EzskXkanb9KlHOANDAXQapTQCQJyrzJ5%2F%2BtxXwJ%2FEd%2FFhIeW6UBN3Bb3C7a5xGwIXyQgRjnXd3mWw0JFwi%2F36eIH%2FmfS8qFNtBMnAoi7tJ%2BPXIhPTFw9nhv8dw5THmQJuByRxv9R0gJWCcN8G7eqSNmOZlsBZYOpF3NDGCgspDu9jKLH46mvJs1RPx1et47A0QFBrST8QuT%2ByrJmz947CziWnTN1XyonOXbXpNANanFfcgmidsrEODbpdYT%2Bd%2FM8arp8ZOXFO1UbD5REHV4m1Sgidv315MQfzgdiqlhsINTYqvJIDmw4ps3k2pZEKUHcXK4%2FGPQFX8iHQe0OAEpkfcY2XII%2FDF6FqWR8aQoGChnriVLvVMH21WcK2H9XOMCBMQ%2FIJB9IQLNVyP8gRfd67ALidy3wDUU2EZbzeK6R02q8a5Z%2F8aOHUQ70xf1ThZXFKOHq9iF2GujpD8kDLNB2Htx4jU4suq3VhUWsKAvoZ5v%2Fq%2Fm9JdoZNrtfL85ijmYzJYg44zhiU1x4CkZ%2F1EWu7sjuYsiikToMo3w0Ls8pTsQTjhFZ8A6trYDTV%2BKMLzxucAGOqUB8ZM63HcOURB30MwT3sAw3Ma0DE5%2BOPf0K3Zh4sYwMxyNFy%2F%2FoY%2Bo%2BCdrlYLNNm%2FzIJ5zBpgYJO0j4Cgq2fkTMMAe4WgybxcV4slScKz90trwdqUr8SNUrqrnbPz40VnBgIRTcD9Ag1Xp9q9hQ8SiTs4OoUSAPTxeC2vwncJi7LObGqmjevA5F08VpRcn9ds1Ze%2FLAwM5w1sTkxizzjNT49pJHmb2&X-Amz-Signature=24ec83fb7919a506e75227da0a65afa564e6f518ddf8117982217805ed631288&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HQ72Y5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDupLU29Sx66giNFP9J4m6KqmmC0%2Bm1Oz8%2Bj3ciEDBFBgIgVKNl6wckjc7a7Q4O%2FDSzq5LSKqeKHc6xDXBr%2FURBOx8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKGNIZeh%2FDBTcFbntircAxKYJq6uty0t%2FjGgPQV5B3TNdeYZQR4WNqEP0N0cCuEjqNBOIucM5a8QuA7rezYE2EzskXkanb9KlHOANDAXQapTQCQJyrzJ5%2F%2BtxXwJ%2FEd%2FFhIeW6UBN3Bb3C7a5xGwIXyQgRjnXd3mWw0JFwi%2F36eIH%2FmfS8qFNtBMnAoi7tJ%2BPXIhPTFw9nhv8dw5THmQJuByRxv9R0gJWCcN8G7eqSNmOZlsBZYOpF3NDGCgspDu9jKLH46mvJs1RPx1et47A0QFBrST8QuT%2ByrJmz947CziWnTN1XyonOXbXpNANanFfcgmidsrEODbpdYT%2Bd%2FM8arp8ZOXFO1UbD5REHV4m1Sgidv315MQfzgdiqlhsINTYqvJIDmw4ps3k2pZEKUHcXK4%2FGPQFX8iHQe0OAEpkfcY2XII%2FDF6FqWR8aQoGChnriVLvVMH21WcK2H9XOMCBMQ%2FIJB9IQLNVyP8gRfd67ALidy3wDUU2EZbzeK6R02q8a5Z%2F8aOHUQ70xf1ThZXFKOHq9iF2GujpD8kDLNB2Htx4jU4suq3VhUWsKAvoZ5v%2Fq%2Fm9JdoZNrtfL85ijmYzJYg44zhiU1x4CkZ%2F1EWu7sjuYsiikToMo3w0Ls8pTsQTjhFZ8A6trYDTV%2BKMLzxucAGOqUB8ZM63HcOURB30MwT3sAw3Ma0DE5%2BOPf0K3Zh4sYwMxyNFy%2F%2FoY%2Bo%2BCdrlYLNNm%2FzIJ5zBpgYJO0j4Cgq2fkTMMAe4WgybxcV4slScKz90trwdqUr8SNUrqrnbPz40VnBgIRTcD9Ag1Xp9q9hQ8SiTs4OoUSAPTxeC2vwncJi7LObGqmjevA5F08VpRcn9ds1Ze%2FLAwM5w1sTkxizzjNT49pJHmb2&X-Amz-Signature=b0c308d8e26900475850a97a245e08e1cabe0439350cdc73a0d1a80cc1b59014&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZEPVAG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgU6AkXwxsXz2c5pxikluCgT084HYQ5PHvR3hSanQzrgIgJLQ7f13%2BoXM0yvs7K%2FMfiRGj8HSbjal%2FPZVZeU1Lnv4q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDIYAUdTz1kz0HThCyCrcA01hxS0mRy4lZpvUcaFOHsIZ8XHpTIfaLnTf35ndcFTPR9AFhLWQif86P6F5XuKNjqgkcD%2F5PcJfGAWQNtetiu5PEHk0KCq0Z1ub41D9LWPLK6%2BYiFvhN%2BiTWHeKqB3vOwLUEeHYu3%2BDRA3LPKphTpNcreeCRj1KkL4F4OjPjiZX%2BJdh9xZfQd1PwsmJHIRQgFFjkhMscQ0ptTED97FhWfL0GE1y0rH9fm7dv83mHg8Q1rpDJ%2FglQqxSCJDPXx%2BDgrOMa6xyIKvhyfbFkAjd6%2FQmV6XFWhjHIjhL8UXy6LF%2Blogd3746le9z7Rzshu0WocKcz7fPYI6jkEwSYc6YgOBCeoi%2Bz7jbHUGiC1IJbwG3jYFMevwoiBoehUMhqqMW12m2meh9ZQXHUHtFW5E52B95Onv0d4D5vVZmsTK3TgF9WkmwuMEJJYiaevX7hXq2Jas8AJ40goFXuIlvnJozZPDlbWmOEsUcS6irfD5MAR25ecaKUCaVQZf32kukMSDv0kV4hWo5H64wcp%2BSsbj1MvPKFQtl0Sy2fIMnCwW5XvW4isgRiA3xkg2qtB85pTCDsnwOiadvyKiExiP1IAt4lT3OY2ztMeEVVLPWmgTbzpUGv3OBWRS5TgZhJa7YMLPxucAGOqUBJENK0QC6WAxYKXT9pYYh1To9ab3Dd94T8HmkFO1mpFJJM8ZEFLUsMy5QWynlpbPLaSfoeGybcEf52aJENV8WY4vPvj2NRL4DOSEBQ3ALcucHdX5Rs%2BSlxBGFqOO8CXfPJyF3Nm5ontBgZngSeJ%2FYFTPYzTya6PsJwcchWPNpijMGeKQSbIstTzKFLBaSMGi0UwC67n6%2FEeKh5of%2FpLwg63MUAEFi&X-Amz-Signature=baab4d5976cf11208a3e76c8b89923b24ba8daaafa567602525cc6f70d2acb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R2NIHOI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiCG2DQBAbgHkQswatBgpLVJojCBh3mSPYbaKH5%2FwMqQIgAYq4aRqHYWBNhHiF1xW53e%2Fk2kyzX48qGuSmhWCogIsq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDL6lGYLepnvcgZXe8yrcAz66HeLEANKGDeCyp6Iq2okHG2T1lpTolJCe74CDmDZ%2F5Q%2B7jGVml5fm9H6EXxxkcEllhElryAbx3LSug1HkUj9x5RA2Us5R82yY8k2UsiG8ylIAAe70MY27YNxDIC4eHEofrU85EaG8QNsgZ0jPZ3%2FY%2FLctCHbOZ%2BPNXPXd1qlrQy%2FmxiRPSt2hsQcY90tqFUfDELkjZS3ciQEpGTUkr2ySqJgBvVajakXBvLMUp%2FIy4gIKN60HeTNs70TLJ4FWeVVoWWdzDBTr7qI5mcdItDaHOqcC%2BOU%2FK2hZEL%2FS2HN5imr2BVtPUVKFbvy5BMnqcvOuuSrrgdwBMtd4CJBUM6RMH87Yiv6X5mYgG%2F7QjXpQWBDIIb%2BbUwahCoc4tY5ntnSPW0a2iDAzMB9LsEhbs8c1ubJBLzG9n1Bb%2BTpm6fXykrjxvAMTwvDjpvl%2ByaM5%2BXIP1tT9e1fxjl6cFFN8PjmpwvdLpaJtY2wGurrHAgnJav5zuXi4ka3q3xvgsL3J6oYaqBeHIzCHm7j5Km6nLlpX4TRn2tg6wvbhNCHFo70%2BbQqreK6L1beXleW%2Bpo%2BrDAbkgc19nGxP4bxi6QOtuKTvP9BO30T%2Bi1l%2FQdBAbAMDrMqQyUWyf7S1hGcdMJTxucAGOqUBTsyCr1m4RuCYrfYuyeZc6pQvTUV7rmZcR9vQHbapw6%2FXn00SPNwlSi7b1TD%2FOw9ppEellCZqEciXFcXpGSI7LSWJVEScMexNzW8K2hKmC9shwNXI7riSAnbmo2W%2FmlTEmPDm3P%2B%2FwRSJ6tdocgPykeHCizIwpKrbWCu152JcUtd7ujyehAeHLfA3Q8%2FTSUaZNw40OKCIO6bOJKXxuLAPYL9J14Mp&X-Amz-Signature=ecbab81feed708821ec81c2fe8158034165da3cf5c1dbdf303ae64d1104d9467&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6HQ72Y5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDupLU29Sx66giNFP9J4m6KqmmC0%2Bm1Oz8%2Bj3ciEDBFBgIgVKNl6wckjc7a7Q4O%2FDSzq5LSKqeKHc6xDXBr%2FURBOx8q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKGNIZeh%2FDBTcFbntircAxKYJq6uty0t%2FjGgPQV5B3TNdeYZQR4WNqEP0N0cCuEjqNBOIucM5a8QuA7rezYE2EzskXkanb9KlHOANDAXQapTQCQJyrzJ5%2F%2BtxXwJ%2FEd%2FFhIeW6UBN3Bb3C7a5xGwIXyQgRjnXd3mWw0JFwi%2F36eIH%2FmfS8qFNtBMnAoi7tJ%2BPXIhPTFw9nhv8dw5THmQJuByRxv9R0gJWCcN8G7eqSNmOZlsBZYOpF3NDGCgspDu9jKLH46mvJs1RPx1et47A0QFBrST8QuT%2ByrJmz947CziWnTN1XyonOXbXpNANanFfcgmidsrEODbpdYT%2Bd%2FM8arp8ZOXFO1UbD5REHV4m1Sgidv315MQfzgdiqlhsINTYqvJIDmw4ps3k2pZEKUHcXK4%2FGPQFX8iHQe0OAEpkfcY2XII%2FDF6FqWR8aQoGChnriVLvVMH21WcK2H9XOMCBMQ%2FIJB9IQLNVyP8gRfd67ALidy3wDUU2EZbzeK6R02q8a5Z%2F8aOHUQ70xf1ThZXFKOHq9iF2GujpD8kDLNB2Htx4jU4suq3VhUWsKAvoZ5v%2Fq%2Fm9JdoZNrtfL85ijmYzJYg44zhiU1x4CkZ%2F1EWu7sjuYsiikToMo3w0Ls8pTsQTjhFZ8A6trYDTV%2BKMLzxucAGOqUB8ZM63HcOURB30MwT3sAw3Ma0DE5%2BOPf0K3Zh4sYwMxyNFy%2F%2FoY%2Bo%2BCdrlYLNNm%2FzIJ5zBpgYJO0j4Cgq2fkTMMAe4WgybxcV4slScKz90trwdqUr8SNUrqrnbPz40VnBgIRTcD9Ag1Xp9q9hQ8SiTs4OoUSAPTxeC2vwncJi7LObGqmjevA5F08VpRcn9ds1Ze%2FLAwM5w1sTkxizzjNT49pJHmb2&X-Amz-Signature=47894ff67b1e41921e0327ffb2d16eff6897e0b57328042dbbadf29ec6007226&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
