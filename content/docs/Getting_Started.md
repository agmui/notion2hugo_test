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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQOUVPD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjDtuW8Fz6sPZaXiMzUmdAi8z%2BmaYz7sUUhkScyMHY%2FAIhAKhO8kuTPazrNZYL7gSPqfRg%2FXJZBwnKtz2aXrqTsK23Kv8DCEgQABoMNjM3NDIzMTgzODA1Igxr5plkcNGLEGiS9wcq3ANtHHXRNWCCpsIrv4HIuDntDDLKHjnLscJCyVPPBSCTbpSgjE1gFBbpEMASdpK3pWUoNQmPIS%2FO1R79UD%2FHu6u4zG7eqZyz7Nit2AC7%2Bj4mSACw8UFGfnZ2JXSP3%2FI%2F6j1qufWKXx3bUUqZcKcMqL93uZTOGletvTk1qgbhWbW36a5lZgCFpJiJyJe3vX7BgRj03FsBnDTkmDEKOSAw4m%2BYLUxWteLRYk98lgAsh%2BpYnqwSok57c8tqcpb1j6ZY276wPo6DjJA8J%2FCildTL1wUATtK%2Be1k%2Fj5dNIqROLPCkv4nf9zBGvwJSRSEaFe%2BCgjkzPdvixMy%2FHKYFPYwtKFoCGKy2Ogd43BnQ%2B9vJdrVPNRzXPM49kKlRUuPFt7r983p%2FIurYO%2FA5VTmay4WTJ2frrcvGYbofjBnLR0%2FeSS03KVoQpCYbiT70IqsfEbBRUsAM43T2Y1yfFLaxn1zLYRsuqkYrAqgInHkHkTdeHQAZVZ%2FikTn5kE3Y9Q5FKgWBiS8WwZdiPS8%2BwDuzLCYE9SjHAN19%2F34OlV5DKqgQY2Metn75CplXKz5yuVEm%2FOjksbjbRL3A0zcAK0cbg6LWI9Xrzu53T0zCjuA8k5BVhTgBMcF7F0kjCWl22ytODjDys%2Fe9BjqkAWhaHM1Nppc2aKUBcAqU9KNB1aQ34UWtU1LfcagCyt2SAUS8lzvrUu8WfyqfI80gfkHdx3wU5cq441V2p1lng7XdjehZHSxBvfzbbJmoBDZwQfEZJ0mRwt3jHMmHQ3RwRtnY0JLpg74iX%2BFF%2B5e0nUTMfQnIihlhjIgZxSwsmgcSDtclI5YjLdvIxnvoCc%2FQqPJN%2F0F%2BS2owFTbCjWszXxLQUu4g&X-Amz-Signature=93c58919204cc5bfc3747b4d9898126ccb02a14e84960ee41a2422f0810dfdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQOUVPD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjDtuW8Fz6sPZaXiMzUmdAi8z%2BmaYz7sUUhkScyMHY%2FAIhAKhO8kuTPazrNZYL7gSPqfRg%2FXJZBwnKtz2aXrqTsK23Kv8DCEgQABoMNjM3NDIzMTgzODA1Igxr5plkcNGLEGiS9wcq3ANtHHXRNWCCpsIrv4HIuDntDDLKHjnLscJCyVPPBSCTbpSgjE1gFBbpEMASdpK3pWUoNQmPIS%2FO1R79UD%2FHu6u4zG7eqZyz7Nit2AC7%2Bj4mSACw8UFGfnZ2JXSP3%2FI%2F6j1qufWKXx3bUUqZcKcMqL93uZTOGletvTk1qgbhWbW36a5lZgCFpJiJyJe3vX7BgRj03FsBnDTkmDEKOSAw4m%2BYLUxWteLRYk98lgAsh%2BpYnqwSok57c8tqcpb1j6ZY276wPo6DjJA8J%2FCildTL1wUATtK%2Be1k%2Fj5dNIqROLPCkv4nf9zBGvwJSRSEaFe%2BCgjkzPdvixMy%2FHKYFPYwtKFoCGKy2Ogd43BnQ%2B9vJdrVPNRzXPM49kKlRUuPFt7r983p%2FIurYO%2FA5VTmay4WTJ2frrcvGYbofjBnLR0%2FeSS03KVoQpCYbiT70IqsfEbBRUsAM43T2Y1yfFLaxn1zLYRsuqkYrAqgInHkHkTdeHQAZVZ%2FikTn5kE3Y9Q5FKgWBiS8WwZdiPS8%2BwDuzLCYE9SjHAN19%2F34OlV5DKqgQY2Metn75CplXKz5yuVEm%2FOjksbjbRL3A0zcAK0cbg6LWI9Xrzu53T0zCjuA8k5BVhTgBMcF7F0kjCWl22ytODjDys%2Fe9BjqkAWhaHM1Nppc2aKUBcAqU9KNB1aQ34UWtU1LfcagCyt2SAUS8lzvrUu8WfyqfI80gfkHdx3wU5cq441V2p1lng7XdjehZHSxBvfzbbJmoBDZwQfEZJ0mRwt3jHMmHQ3RwRtnY0JLpg74iX%2BFF%2B5e0nUTMfQnIihlhjIgZxSwsmgcSDtclI5YjLdvIxnvoCc%2FQqPJN%2F0F%2BS2owFTbCjWszXxLQUu4g&X-Amz-Signature=22ac36fd4d5d5548be45c9936d07c9e795612d91550881e653fb76b24e521b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F2YWBJD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIBunyv3KWsNn1QTl0EQZzjFcTUYOozcEZUF0fO1NqCiOAiATEiLmuL%2F6yur6tOkTn3Jj2mdCKAej3dMy9BEMFmMzKir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM8NU17QgsBfFpgLZOKtwD60IeEtde9iKEXL0fnqXPgYHVvaggCG%2F9dIOV0hySY34Y3jUVwEhzkpQw9%2F2huncXDAoXxUyRXWk%2BP%2BVRvihsV0ODTQYSYew%2B9fbrRHf4bKt%2FwJh%2BML%2BdTLoqRBe8zI%2FOPGtMfhbYF3f%2BM0elwO1Kqld35XtKB82Nl%2B93TyKUQX21f3RIneKLkgAWUGnP%2B7b6uEaI9BDDk9JmDYq8OrarhCa7eLvywWAm9wuOD4p99Ll1hY%2FrDSaOQkXZgKDWb%2FlcxZ9gckkLaGAaa%2BOAtQMfV1ZjZT%2BMleyGCjMRKBqzrVfkmkrF2ruPp5d%2BmW%2Fqi80nidmUKMthtf1p0VDbhf4UGS8OjQsxhlQo7u3tWGKjfvHDaIowlYmUGhnh8dLMpfEQkxgVDqDtV9wzxMzM75lLsBNWp2Bn%2FoDat5Yb4v%2F6HYJWNjmrF4m3yN2vv41VdjLXoBCZ12jPU3lNOsF7DMCzKxtC%2FAri7Dcjwh3l7PuU3n34U%2Fk4OJENO5jfCe9wrjDfCNEHVz1FF3ISj5jDGvBPc7dVSsGYiHmFB0AHNKUjJDtXMfhXv5e8TvomdCCX9hqcNerGXFAc7q8WtgpqI7wBThNiK8ho%2FutuXwL%2Bkv4sAZpGeNdsOSQpk%2BiBIyMwgLX3vQY6pgFTUNRQm%2BCHLhOvqxCtKu9CcsLFM6K2oJdhlkUCLKfdk%2BnCfxhtJkSqTONiKYj%2BQ5tDUcLxn7Mk0qmJvJ3CajYEAYLOc%2F6b6LsoT4SlQTGEjGMwP5cyIebWmFs4e%2FyGzJW8tdlMrXqdbc9ShBWbN9Yi7lu7N70qqcS7%2BqkCCknz0f84JjlCYC6ONXqdp9Scs5UXXhUohafP%2B0QLW%2B%2FlFuHfKUrcy1cH&X-Amz-Signature=291e40c617b42ae885683b7369e95d86794f421636b4caf5d02ac361c082eefa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRHQ63U%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCL85zkEkF%2ByBlNabiXuu7d8nfYIafxymWUl%2FeWZMod6gIhAJS594kk9jnrdhn5N%2FsDISgI%2BkTx%2BF%2BsTxEdWSRdDd4EKv8DCEgQABoMNjM3NDIzMTgzODA1IgxbIPYmX%2B82tAt13XEq3ANB3m6%2BWNP3xJrunBxgK%2FZ0jHmAQ6KkFTOsvBDn5LV1lqQsW1VHI5SlzMjgVJp6yWzHdsDGkRJvbiJIGoxgloaAKNDqzHMkt4AX%2BkYK7ZujNcQCWU1bUqd%2BwS137k7zejQBvCpTEtnbF26GHBbNod8EiSWShhXrBO0Sw2a%2Fim8jn%2F70dVkskz1mBkHdRKvivVP6a1WKcEeuT8VDuWP5jmx%2Bn2Q3amIFmjysHeYsKhFWTSyP6x4RadqWHCQ%2Bx8SQViC0bCAjvIsudcDiChwBJkgbFH61uIxAvHkAYZ%2BBGfC4tcV1r2goRaGGEUTovFHAEQtX1UgNRhY4QtE5nKODVGXfI5F3cx14Z4w1FH9%2F20wGWkPbQPfQljHK6Nstw21N7I7qgj%2BTepReEO6buagzGY4wArCe0XJ%2BMwzVsuTHUUwFUOkuBzTBTXcVWC%2BXKorOKLjQ5vfiLUNhIQELU46k3UaGVduY5SfWcXOB1fvaalKVDuiMwr7tEixWPClT2J4aXumNLniA0LYCIoCkV6j5OS9DFnEoEOY8534CZb6HsQZ7ObyQDzFS55TjC0m5Q4TXKIaYNNpy%2Bt4I3GJ9wBl%2FwD9egyymllCd0eQjuVzDPjDWmkJjDb7s6EKcrI3nADChtPe9BjqkAUCYhHlgxOn5t3SwldVQgxTZJphiKeV77AyPJamMhHDj%2BUbnIkpgkfay%2FSxR8%2B8HfC6PN29lbZ%2FAH1i9mZ81mqUGbt81XTjroD30sW%2FZ%2F3V4b%2FodjypELvTC5Yk1dDw6pNwbs9kwjDYe47UTNULy52NSKndiFUOAgOHQDwtmRJgsVr5KmwoRpRjpHNUsyXJE7vLnAoOolnt0%2BUZUozpzGrFw7st9&X-Amz-Signature=cb1d84f6e3d6ecb768098ad3e86570c9521178c5d94c2fe08b5cfa29ee4e70df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQOUVPD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDjDtuW8Fz6sPZaXiMzUmdAi8z%2BmaYz7sUUhkScyMHY%2FAIhAKhO8kuTPazrNZYL7gSPqfRg%2FXJZBwnKtz2aXrqTsK23Kv8DCEgQABoMNjM3NDIzMTgzODA1Igxr5plkcNGLEGiS9wcq3ANtHHXRNWCCpsIrv4HIuDntDDLKHjnLscJCyVPPBSCTbpSgjE1gFBbpEMASdpK3pWUoNQmPIS%2FO1R79UD%2FHu6u4zG7eqZyz7Nit2AC7%2Bj4mSACw8UFGfnZ2JXSP3%2FI%2F6j1qufWKXx3bUUqZcKcMqL93uZTOGletvTk1qgbhWbW36a5lZgCFpJiJyJe3vX7BgRj03FsBnDTkmDEKOSAw4m%2BYLUxWteLRYk98lgAsh%2BpYnqwSok57c8tqcpb1j6ZY276wPo6DjJA8J%2FCildTL1wUATtK%2Be1k%2Fj5dNIqROLPCkv4nf9zBGvwJSRSEaFe%2BCgjkzPdvixMy%2FHKYFPYwtKFoCGKy2Ogd43BnQ%2B9vJdrVPNRzXPM49kKlRUuPFt7r983p%2FIurYO%2FA5VTmay4WTJ2frrcvGYbofjBnLR0%2FeSS03KVoQpCYbiT70IqsfEbBRUsAM43T2Y1yfFLaxn1zLYRsuqkYrAqgInHkHkTdeHQAZVZ%2FikTn5kE3Y9Q5FKgWBiS8WwZdiPS8%2BwDuzLCYE9SjHAN19%2F34OlV5DKqgQY2Metn75CplXKz5yuVEm%2FOjksbjbRL3A0zcAK0cbg6LWI9Xrzu53T0zCjuA8k5BVhTgBMcF7F0kjCWl22ytODjDys%2Fe9BjqkAWhaHM1Nppc2aKUBcAqU9KNB1aQ34UWtU1LfcagCyt2SAUS8lzvrUu8WfyqfI80gfkHdx3wU5cq441V2p1lng7XdjehZHSxBvfzbbJmoBDZwQfEZJ0mRwt3jHMmHQ3RwRtnY0JLpg74iX%2BFF%2B5e0nUTMfQnIihlhjIgZxSwsmgcSDtclI5YjLdvIxnvoCc%2FQqPJN%2F0F%2BS2owFTbCjWszXxLQUu4g&X-Amz-Signature=4c4f414a8927780599ce7f1f8984b839883b49a9427b5d87196d51b3a5c42366&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
