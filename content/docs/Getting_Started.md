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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPWWX5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDtQegJz8cnnQ29yK5p7z0%2FoESzuUeLgYuSDV0s%2F%2FzSPAIgR32cpcoHYhRmPc3QOoZA8KjeK1tf1ynu%2FAMhttBuw0cq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBB1SKNQnCHeFsfF0ircA7wipD88ED3OUIrhRoIux94NfnT9s%2B3CIehMwWIR%2BIXWDXXODcsrQbp9sxL%2FzAZSnoBt4QuWtd5qUg0crsQChcj%2BqXyIdmOgZJKtNJFX0dsUG2gP4uppRDzH26dH0RS0FkOMWKmYUqk2dUQ7Zy1%2Bd6XVZK6FDPMfnOgN3%2Fmzh0w2gpxyfgn41ooGbZ5yC4ntvabZN4UAtXGkd5tDmXcZyIV2zRZn8fbW%2BlhZh5Ngla83aO2aat5PjL%2FJQ%2BDz4My3ru0paEftP8Apn4BmMzwLoDhGMrc8YBBREFXTyu1VZ4oUWuYDhPG9xZLApNn8LB2xQpBR%2F%2FUigdL%2BQ6pQR9MW4cSmwk4LlQtluAnQIGra0dVQ15G0S8QlbIgwXFP4laspyuoAy5Kb27SffB%2B7Unr09cbt58Aex%2F%2BHw2t8bbwO7LxonzV2pRNtvL4%2BIrKp9vWnOGb%2Fphmw4PPvZcThWQb%2B4axybb%2B8u7cJ3ke7YmncIegw54iWqllqub025YF94H7vRf9qKEif2rIPVFfwSVEVXOB7bOGQxym%2F3lDtrS1kJhhqov0OTE%2FDSZNXz0aK0R3uB3J1yH5Kj9aiQiF8jZE69prXzRaKtmi22dK9WH6V%2FWFrWirjSYXDwrhSF8BxMObsj70GOqUBVrSrfOghX17lLJ3HhMC5yq43ghHgCSmujkTxjTQXbuKkVXCrU8RGkG7RrFnc%2FoyYUEdxJIKRRwUVJERZueSwLC1a6ddOqhFmPRGigqSTcuQOnfrzBdLH2uopmSobq9Vk2gsoZLdCFUHGY%2BJMMwKdnDZZrF1Nw3OBoUNqPNxlAGuUeIctUzrgm%2BUT8H%2BU1sTwL9Yx3WCueLxnsT7fDXqQiJ8JhP1M&X-Amz-Signature=1fc0c5ac291d0e617f4476c35dea4adcd7f9a79ee0d9726df0cc68543573a78e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPWWX5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDtQegJz8cnnQ29yK5p7z0%2FoESzuUeLgYuSDV0s%2F%2FzSPAIgR32cpcoHYhRmPc3QOoZA8KjeK1tf1ynu%2FAMhttBuw0cq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBB1SKNQnCHeFsfF0ircA7wipD88ED3OUIrhRoIux94NfnT9s%2B3CIehMwWIR%2BIXWDXXODcsrQbp9sxL%2FzAZSnoBt4QuWtd5qUg0crsQChcj%2BqXyIdmOgZJKtNJFX0dsUG2gP4uppRDzH26dH0RS0FkOMWKmYUqk2dUQ7Zy1%2Bd6XVZK6FDPMfnOgN3%2Fmzh0w2gpxyfgn41ooGbZ5yC4ntvabZN4UAtXGkd5tDmXcZyIV2zRZn8fbW%2BlhZh5Ngla83aO2aat5PjL%2FJQ%2BDz4My3ru0paEftP8Apn4BmMzwLoDhGMrc8YBBREFXTyu1VZ4oUWuYDhPG9xZLApNn8LB2xQpBR%2F%2FUigdL%2BQ6pQR9MW4cSmwk4LlQtluAnQIGra0dVQ15G0S8QlbIgwXFP4laspyuoAy5Kb27SffB%2B7Unr09cbt58Aex%2F%2BHw2t8bbwO7LxonzV2pRNtvL4%2BIrKp9vWnOGb%2Fphmw4PPvZcThWQb%2B4axybb%2B8u7cJ3ke7YmncIegw54iWqllqub025YF94H7vRf9qKEif2rIPVFfwSVEVXOB7bOGQxym%2F3lDtrS1kJhhqov0OTE%2FDSZNXz0aK0R3uB3J1yH5Kj9aiQiF8jZE69prXzRaKtmi22dK9WH6V%2FWFrWirjSYXDwrhSF8BxMObsj70GOqUBVrSrfOghX17lLJ3HhMC5yq43ghHgCSmujkTxjTQXbuKkVXCrU8RGkG7RrFnc%2FoyYUEdxJIKRRwUVJERZueSwLC1a6ddOqhFmPRGigqSTcuQOnfrzBdLH2uopmSobq9Vk2gsoZLdCFUHGY%2BJMMwKdnDZZrF1Nw3OBoUNqPNxlAGuUeIctUzrgm%2BUT8H%2BU1sTwL9Yx3WCueLxnsT7fDXqQiJ8JhP1M&X-Amz-Signature=168e668381446b1743bb763b58f89e50e2788a2ba48f7e27021a1f3a4d104541&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMLNIML%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIH8CS2WdDx42J2D1wrr%2B80aSBCl%2BPT9KTWte73h8%2F4ZvAiEAz1XaDRyaqKuhXSjRw41%2BSxvDjSmC%2BLde2DNn%2FDvvepkq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH7OHTwXistfhTiHnircA1GR6uqOPsmSZQtrQq6J2PxjdGCF8f1qkZuFlAeWfZmdCraqph5iOFDGJLdGk%2B09VznYd%2BjKCAJdk1r1UNMHhdDFsWgXeaqUlZB896xukSvA3VPGbIwdc09zAT0w5liokQMo7d%2BWQZ3Cb44yVS3WH3EAQ8DFPLci2C0yslSSGR0tquVzCZVbDmxgNWU1IeC1PLyf2rmPYnpfDf%2BqI%2Bka8bspctbv8WY3ZhdFSpfbYP1MoIbR0wAJ0bhYOE6G0Hb4SMjtZfzy7pMF%2BY2uvwCMElI8cA92mnknMs8MtVwFOQ0bBVMzhq9s9iI1JzUK8z9VhO7cacXZMQiWzEGw1S2RGUHrgNCAukCw5HypxIvKrdG2fpmANUuKt4Lq7DBTiqfCZQizkgz0T9g1fs7lEQdtEZKmv109SPDQ7foKoGh7SJ1mM8%2FKfSRoKYnI5s%2Bq%2BCgBwk2p4sYQAEuAGhokSTM9fyuak2xrmVsoNE8EGMy6PAVJl4Ymm42c%2BVzL3gxq17U8jBmOL6rRA4lbpux3k%2B%2FGALszhKD5MqerNdDLiqpJXe6n03eUjVziRefFa4sNVEPokAHQFS8G0XXQ5EZH7wneWcl7lqzN%2FUEwP9b7OKlo43kpZAR9eUhppiOlCnvaMLLsj70GOqUBNy9wf%2Badaqbm6%2B75b%2BYvX661FzDXPUZuXPQ4XrRHZzhKpZkeHq7piZmZ1dwWeZCwjRyVsVd5uq%2FKxq7SfIg2jA4ESYCKo2PeK5m%2FQpTPaAyGCGe2bF4xkqWTwKSKt3wahybovYvv3OuCgnefP0XrrBGRNI5xRCD0U0Z3xga6aIeDlxiobH4t80%2BCb10ySL%2Fj4YVK%2F32FySRPvvHFIFKn9nqds3b0&X-Amz-Signature=7c688a7b609320be540f16d641240a574ec47cb6585d68a7e2537a6e78d31f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKNRK5V%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIAPwljBAlqXksAzO4n5UrrBiRfHW%2FZKGvjZNeZHxC%2FeIAiBkM72MxrAnS6xiiOcFPR9MIJ1DKUMaYcEt1N7EeuiRQCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMsEpe8EKfNtfz6jbDKtwD375TSbdES4Guj2bpAeokQldj2a%2FZ8vGoHu7gvuXfkf4qs%2FBjnvdN8zdkBT7NYcc285bmya%2FYCTbGwansdmT8HmYA%2BcbuCZIP7pC5HJMXQtFsqQzPqA7ezYnYyCqE1EteK5BM9m5oblSr%2FwxHF9cC%2BD1KBH6axkqjemGDRDImt%2BBGUVv4r16j0CZtomgFeGxX8F08Io%2FPbl7HabYTuoGEGOb1GXijX5UOkocC2cN7mq20IHC3%2FWf1YnwbvNyGATPsbZeJJ6BlRJpdQ9PQuiNYn4t6Bdj5RHM01E45JOMQsa0cRKjPt91AO9JhrQxvvL4IjwDqYv%2FbKKmT7P3XX2IppzbAYDPYicOU3Bao10E20fncdd6lPZbb1YeGcAUnDdp99UiMT8MkJXetlyupdDfwmpTsZnXDMWLDyPCBeNN6u%2BRFM790g2Y8DDrppcDwgvoZWABWOl3lOkHxzGguS38xJMyqSd8tfxlsWO6LNeriQIhcaMwJwSd%2BqRm0129lfWvCypUI1y%2FTZnnkXip2ftCACiIFtdeNyxCYdiSlkF7WLsWLCTZ1TrBSjblT7s1TmXRGp2ttI8%2BdgGxzQx%2BYNLHMm0MyKU69yB0stpS7aSauV%2Fdj7aUIHoe8QrVoIkswyOyPvQY6pgGbh%2B%2F1uhNtSBvNZVJIn%2BFUWme5Ttn4NjjH1avAtOHnrJ%2FDKVW2%2FVGV3A0YhnhbeCaUcpj9yfMt2ejCrUalalSz6DQ1fiRcMH91Nw3Gmkj7hWzjguQUIFOUuFAG37Z94AQEsFo0cfW9mWvympsWlLGzOzNl7Djc2hkxj358KBwcABt92V7ZowWgQ%2FXsSi%2BDu36xpmNfAa5jCy3ofzLBqz9g2jFhPUTd&X-Amz-Signature=7ad33fd04f6ae4bf9d383ab0f44d0577a5575ba8b54f3654209b381bd50f5d40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPWWX5B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDtQegJz8cnnQ29yK5p7z0%2FoESzuUeLgYuSDV0s%2F%2FzSPAIgR32cpcoHYhRmPc3QOoZA8KjeK1tf1ynu%2FAMhttBuw0cq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBB1SKNQnCHeFsfF0ircA7wipD88ED3OUIrhRoIux94NfnT9s%2B3CIehMwWIR%2BIXWDXXODcsrQbp9sxL%2FzAZSnoBt4QuWtd5qUg0crsQChcj%2BqXyIdmOgZJKtNJFX0dsUG2gP4uppRDzH26dH0RS0FkOMWKmYUqk2dUQ7Zy1%2Bd6XVZK6FDPMfnOgN3%2Fmzh0w2gpxyfgn41ooGbZ5yC4ntvabZN4UAtXGkd5tDmXcZyIV2zRZn8fbW%2BlhZh5Ngla83aO2aat5PjL%2FJQ%2BDz4My3ru0paEftP8Apn4BmMzwLoDhGMrc8YBBREFXTyu1VZ4oUWuYDhPG9xZLApNn8LB2xQpBR%2F%2FUigdL%2BQ6pQR9MW4cSmwk4LlQtluAnQIGra0dVQ15G0S8QlbIgwXFP4laspyuoAy5Kb27SffB%2B7Unr09cbt58Aex%2F%2BHw2t8bbwO7LxonzV2pRNtvL4%2BIrKp9vWnOGb%2Fphmw4PPvZcThWQb%2B4axybb%2B8u7cJ3ke7YmncIegw54iWqllqub025YF94H7vRf9qKEif2rIPVFfwSVEVXOB7bOGQxym%2F3lDtrS1kJhhqov0OTE%2FDSZNXz0aK0R3uB3J1yH5Kj9aiQiF8jZE69prXzRaKtmi22dK9WH6V%2FWFrWirjSYXDwrhSF8BxMObsj70GOqUBVrSrfOghX17lLJ3HhMC5yq43ghHgCSmujkTxjTQXbuKkVXCrU8RGkG7RrFnc%2FoyYUEdxJIKRRwUVJERZueSwLC1a6ddOqhFmPRGigqSTcuQOnfrzBdLH2uopmSobq9Vk2gsoZLdCFUHGY%2BJMMwKdnDZZrF1Nw3OBoUNqPNxlAGuUeIctUzrgm%2BUT8H%2BU1sTwL9Yx3WCueLxnsT7fDXqQiJ8JhP1M&X-Amz-Signature=4ad909222eda1f11428e840fd5c0d8a53bd9b1813308630dd99ea5f6922ce7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
