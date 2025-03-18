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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBV2NF5D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCJ4FWAbMurtVnXZgfGp3DxoTvxtNcU6sCagfUOkbpJhAIhAM4yNQweptO4mhSFs1h5%2FMolq0ePa6jLjQtVfj4zqLEyKv8DCGIQABoMNjM3NDIzMTgzODA1Igymayn%2FgNyikAp06vwq3AP14PI0OwmbAQc%2FnATuzInnhhEImSNscE%2FYvLQJzkhYJ2G39Jj3wrlK9AswV%2FerPwe8%2BzdB4%2B7zcaYzFqTr2eEaQudC1z8Bk4%2F7yyR4PYRLV4O756xODGC90INAAu5DRyp2oVDp3EjGye0TUJpwk4eZzgPieHj7GkZPm4ClPzx8WezX7%2FxjgmhlhYjldmExYbKt9DyNvnVWcQDo9xunMlgoulWpKYN1afOU0ATTQzmHMrSOGGUsIyAp8JCdDLl34BaqiuizbGTiiWVUMIfOfpi2B%2Fhbt1DBVgTPjL4COBQ04bBQwacqalKXwBNm0kBrImQy2N21gpIFpCwsVnTR430aJNW6HNee5S%2BgMN1GvxWykku7sWAM4%2BZeXUvoRJo9rZxpAgpIHj3jAszZHpRmnnwpL5bN8OQn0jcyEXljIaGHFJDcjmOk8hbUWyG%2BxNfDWQiEVsTvsdhNLn1DYfppb9FFfbH2cDtAu%2BtZ8PxR9RyYYWFoxxA8gmm8A%2F4llNgsXrVLTTniAE83o6Yb9UtsL4trhB0cW05V6JmJ2iWI4fQnLcqXacAADrhMQ%2BolfyZ0MnuRVHBielqEvmL%2FrZ%2BRnbqu76pteIk76PhLiJuesvkjG%2F1TxHvz6f4QwIWnGzC21Oa%2BBjqkASStQDxCDwzJVVjhXk6ZyMLSFbgN3NHHE%2BW4u7X2wmoKtvrIqBmlzmkD0QY6gd%2Fh1oY472GE3nVLrXy%2F3nosLy0LRIxxgdDFXxlnzaQBK1cT4g4Bce%2FYJwSM%2BVcT52doaQTDQpd9t3FF5%2BoripEzIS%2FZ1p342%2Bt5ONK%2FaN0mhuK2FweCP5%2F3bEiHqsw3mDdYbAtKL%2FwL4DaKumiF3lFEdA0AXVrI&X-Amz-Signature=9bc0cbe79f8b5ad0771ed549a864bd2daced42f05ef71dcec40be7731b00011d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBV2NF5D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCJ4FWAbMurtVnXZgfGp3DxoTvxtNcU6sCagfUOkbpJhAIhAM4yNQweptO4mhSFs1h5%2FMolq0ePa6jLjQtVfj4zqLEyKv8DCGIQABoMNjM3NDIzMTgzODA1Igymayn%2FgNyikAp06vwq3AP14PI0OwmbAQc%2FnATuzInnhhEImSNscE%2FYvLQJzkhYJ2G39Jj3wrlK9AswV%2FerPwe8%2BzdB4%2B7zcaYzFqTr2eEaQudC1z8Bk4%2F7yyR4PYRLV4O756xODGC90INAAu5DRyp2oVDp3EjGye0TUJpwk4eZzgPieHj7GkZPm4ClPzx8WezX7%2FxjgmhlhYjldmExYbKt9DyNvnVWcQDo9xunMlgoulWpKYN1afOU0ATTQzmHMrSOGGUsIyAp8JCdDLl34BaqiuizbGTiiWVUMIfOfpi2B%2Fhbt1DBVgTPjL4COBQ04bBQwacqalKXwBNm0kBrImQy2N21gpIFpCwsVnTR430aJNW6HNee5S%2BgMN1GvxWykku7sWAM4%2BZeXUvoRJo9rZxpAgpIHj3jAszZHpRmnnwpL5bN8OQn0jcyEXljIaGHFJDcjmOk8hbUWyG%2BxNfDWQiEVsTvsdhNLn1DYfppb9FFfbH2cDtAu%2BtZ8PxR9RyYYWFoxxA8gmm8A%2F4llNgsXrVLTTniAE83o6Yb9UtsL4trhB0cW05V6JmJ2iWI4fQnLcqXacAADrhMQ%2BolfyZ0MnuRVHBielqEvmL%2FrZ%2BRnbqu76pteIk76PhLiJuesvkjG%2F1TxHvz6f4QwIWnGzC21Oa%2BBjqkASStQDxCDwzJVVjhXk6ZyMLSFbgN3NHHE%2BW4u7X2wmoKtvrIqBmlzmkD0QY6gd%2Fh1oY472GE3nVLrXy%2F3nosLy0LRIxxgdDFXxlnzaQBK1cT4g4Bce%2FYJwSM%2BVcT52doaQTDQpd9t3FF5%2BoripEzIS%2FZ1p342%2Bt5ONK%2FaN0mhuK2FweCP5%2F3bEiHqsw3mDdYbAtKL%2FwL4DaKumiF3lFEdA0AXVrI&X-Amz-Signature=5a574f2e55ce8c5d955733b922a052449cbf14d60ba4b3d7d74cb1ce23705d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFVISAO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIIBa9AEo4cYB%2Bl4DEOWdpTA3orRTHiUrGnbCm0bG7NQIhAKxELs6VXkxV%2BagxSrpCdQCqyujzSBoaEf%2F2%2ByJisFMlKv8DCGIQABoMNjM3NDIzMTgzODA1Igzkg7F6uo5Hpw3bVcQq3AO%2FeUNMUVizsJhKtf9qQu8ymvMa8OpIBvls9ctMNd9EoeqeVP5SSnHfNIGVX5ioDmA5x3TyOq7cPUQZnWBpY6LzheTDzcDuUWnBr%2FpBT4RfP5bsNs293EJ4CiLbcF4PPXYQ75F9tJoYlyCgAfPjSQ74vChE4q3L1dLw5UcBY2mk0E7tlOeZMv8DPdBGxYfGxp7TYTAwq0QmGTXvVK%2FIOiDjf3M0kVVi%2BG82XkoX%2BA3Yo1HJhq6K6w4eKhNALmI6kQpkUKdSZRPsh8l1ErCqZUCTG4hCqsGVz48FKVGWxli16emZdNJtf2wkyXAQdPfbvXUjymiFiAnDWBJOu91f%2FlOP3eWHkn9dSJ8P%2F3jrlv8Fe4cX0ca5d0Ze%2FzVDnnXxZPcrEyebTeTVs6gJEp8VxT80Zj9MHpTeubSKVp6AV7B7RgOxIOenhmbH%2FIpTZaGZVyXf38dk8Ck19Sm9Uh%2FlrSfrfymzePlKpY5l3iWDESERusxVQnlvpP3OPFYRFq5wvfSjLRxb9HvlxmxQC75i%2BhA%2BwUwP6i0cRXp4lZvE1UqPW6dLT4rVUOXaoY1%2F7tdTLu60Y%2FxCEBB3ip%2FeudGD8XKyNp8huQvHzzFyaXOanIHs%2BzftQZVlQ%2F%2F6GqZddDCL1ea%2BBjqkAT4LmwOHEjNTnmbzufbWb0cuKHe6yrEhiPseEnQF8SVORIVjH1heBWmGZKWwBb8bNfeH%2Fa%2BGEK%2BjCgYTgz3kUi81vWox9GJJlVHbGaFgGNTAzaJeqDdq3Hqa7X6lJUPjpL1sAeYE1w5bJJk4hD%2BWjDPHWMivuilFzCxQQY0QQ3YB10D%2BS%2FrGuP2%2Be4RN0cAwWjWpWkVoFg33EKC0cWEEJJ2aNVmr&X-Amz-Signature=1f342518a5e88e01efebee8c9e06702fdea71ab7a0dd201a776d8f2691ae729b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XINCHWP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAD0DsDjPZePIPMGofCfCmd4BE27m6BjmHQnNzwXLoAhAiBVSeNFTnJietmRjGUYJhfNTSGVUW3caoqQZSOC9NVocSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMoFbP276J0zwidJ2wKtwDBGU6vPII%2BJ1mVvwe82eGOnAE0UavKkRK1gm2%2Bv55NmOcBqJuYDdbBpy2iEGzsZvhGulcDx%2F%2FLiaFYEG8ccaz2jxM66tuHmgMWQewNarpPWdbg5Zr4yGYjK1jqLU6tHIWzWiOmURSWVcAT7HRoMDhJN9DOH5JM0xGvb14fxrUNLYHG7q1NWEr4RqMZljxvWCFec19UIwzwO1q%2Fso7fqIH%2BJi89mmNDxxYasg8cF9vBNRdSNXEXxpzU4jFQAZIEyxYk72OgusbpQwGZImDiAspyuk3%2FIzsu8dKrXY%2BjAslF9OjC60wIYL9%2FBrf%2Fpv%2FozLr9A197oSYf9MytzGrIdXouP96cg5DSNy1jYU87VDwePVSNfcb8X%2BoVHSttOo2HgekFAP%2FW%2B6gCDArgRPPFDv7cMtIdkI8RU1sJuhyFTpcx2lvYD5j6XALPrz659EjRJmU3GyLvEkKUP2TLYenLYcn0%2FnN%2FqI1fJxWsoCv6uune7j99WIG9D9H%2FXECQrduSu9iVHolcbFczwx5VwUbQxxGBz8z8rN5VoKJv%2FjQA6nFw5LPqdM%2Bppcqyws9On%2FqNOk0lVdCSzjDCCl8pg11nSfaouvlJG7jLtASgzBONVQTSp6n9swgdI4ssq1L%2Fy4w7tTmvgY6pgGFAaayUB04xQgx%2Brs5cMlxbOuZnd001MKnP6Rl0vAKsd%2BL9b%2FwO7I9LAo7gQ0JMWkPJUSgubg%2BNCxK0Zj1d%2BkFiPf7P8%2BJ70DsGEYvy2YGqwHYKqD7ooLqlAvLulmn0unIsw4aGGrgXD1QyazxJFb8Fh8YBcqiOcXrYsdBmrByWpvrn7A9pJGII1SS4V9I1vCbfBu9IygZJ6YpqTDCkORIGFoEts4C&X-Amz-Signature=196402fc8b1a31a7448593532259876b939404bbffbda423dcd4bc9224649f75&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBV2NF5D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCJ4FWAbMurtVnXZgfGp3DxoTvxtNcU6sCagfUOkbpJhAIhAM4yNQweptO4mhSFs1h5%2FMolq0ePa6jLjQtVfj4zqLEyKv8DCGIQABoMNjM3NDIzMTgzODA1Igymayn%2FgNyikAp06vwq3AP14PI0OwmbAQc%2FnATuzInnhhEImSNscE%2FYvLQJzkhYJ2G39Jj3wrlK9AswV%2FerPwe8%2BzdB4%2B7zcaYzFqTr2eEaQudC1z8Bk4%2F7yyR4PYRLV4O756xODGC90INAAu5DRyp2oVDp3EjGye0TUJpwk4eZzgPieHj7GkZPm4ClPzx8WezX7%2FxjgmhlhYjldmExYbKt9DyNvnVWcQDo9xunMlgoulWpKYN1afOU0ATTQzmHMrSOGGUsIyAp8JCdDLl34BaqiuizbGTiiWVUMIfOfpi2B%2Fhbt1DBVgTPjL4COBQ04bBQwacqalKXwBNm0kBrImQy2N21gpIFpCwsVnTR430aJNW6HNee5S%2BgMN1GvxWykku7sWAM4%2BZeXUvoRJo9rZxpAgpIHj3jAszZHpRmnnwpL5bN8OQn0jcyEXljIaGHFJDcjmOk8hbUWyG%2BxNfDWQiEVsTvsdhNLn1DYfppb9FFfbH2cDtAu%2BtZ8PxR9RyYYWFoxxA8gmm8A%2F4llNgsXrVLTTniAE83o6Yb9UtsL4trhB0cW05V6JmJ2iWI4fQnLcqXacAADrhMQ%2BolfyZ0MnuRVHBielqEvmL%2FrZ%2BRnbqu76pteIk76PhLiJuesvkjG%2F1TxHvz6f4QwIWnGzC21Oa%2BBjqkASStQDxCDwzJVVjhXk6ZyMLSFbgN3NHHE%2BW4u7X2wmoKtvrIqBmlzmkD0QY6gd%2Fh1oY472GE3nVLrXy%2F3nosLy0LRIxxgdDFXxlnzaQBK1cT4g4Bce%2FYJwSM%2BVcT52doaQTDQpd9t3FF5%2BoripEzIS%2FZ1p342%2Bt5ONK%2FaN0mhuK2FweCP5%2F3bEiHqsw3mDdYbAtKL%2FwL4DaKumiF3lFEdA0AXVrI&X-Amz-Signature=654b2c73d7d8e1e049ee77a7c44734a88e279f2be526fd002b4d4400949902fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
