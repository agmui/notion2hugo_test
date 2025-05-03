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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZF6XL7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDY0kmxmkdOG2S1fg9nAd%2BHm2jhAJW9S0IF9GhaaTspVgIhAMNrRq1YCOYRkdkNtb1jtYigziYyJUKhN%2FHiOgwMxSb5KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F2p2qxzQnUPdEhUoq3AMwvae0hvxdCz4Af9Dv6ZxqqGdwXM%2F1n9Z4wSE%2FUbNmFBiocCKwF310pR56p1FCR1KmYwyu4wFmwq07iwKz34%2BBYHVUsd7c4X0EAO%2FZg2I48CiC7ceh5Arai6an43GlnAZyK5RZm6ts3aIkMt9ygApVI31RWK7hm6x99IJn715lOlmHPk7dNHfFVFWdOCL6r6iYPPWHRpwoJwVUxqk7wYnswZKsWj42ksgsY9n1eEKbF7xbJjbCZKR7MlzC%2FriK5zt7889xvGyyeBDcL7GFLxx9swPO3p5ne2kldbzYEasnMKXyM%2FfBkp0e%2FFnSsQzS%2FR3DC2O%2BtlQ7FwDiVbHD1XjhHbJzcf2ta6Kn6l31Sy%2Fczb%2FAI%2FWt8eJ6orzZMlK0DJxqC%2FxmyTPsmsy9WxcT2kSkzLwf9uYNALGV%2Bw%2BwnL2NXbVtR%2FwQxdBzCRwHf2FBZ8CERO7yin9Y1NOW%2FvkJdET2FqU7tkNKURiuTZPyu9VcB1%2BUTzRZWEoN5g9SCw4sWCSFHPLLRY%2BxmstIdOXgHjPUMhDPNRcnlRYw7GNtcZvaPjpclnBNQWSCzwBBhJYdZcLI7Krdg9jweyZ8zHr7EvvatApFKxwAx7hLaNwhm%2FR0Mi6tlbf1dLooljsV1TDug9nABjqkAWofZYTs1wiXlq%2B8fUKvp6zpXs8MCpk52V010NkjCZ91xpMlJMhmCQBFHZ03JyJQQEQ4rqTIOr9ZUsbt2SrU962RdM4EMazsbWCfx5i61usV4koKxzAYkdvnQSjrF49nN%2F8RgbHMlwrMimSFoT9ydpHQfTY7uvsTbRzHCGHIqqB6QdJ7OFNK%2FwKFT6mV2EW%2BO6kDsKjYe%2FWm2pfiUq8S%2B1yZStc5&X-Amz-Signature=8d88f9bd1e7a3db50040b2848f813cad217d0dd31e3825989691173d70fb3eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZF6XL7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDY0kmxmkdOG2S1fg9nAd%2BHm2jhAJW9S0IF9GhaaTspVgIhAMNrRq1YCOYRkdkNtb1jtYigziYyJUKhN%2FHiOgwMxSb5KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F2p2qxzQnUPdEhUoq3AMwvae0hvxdCz4Af9Dv6ZxqqGdwXM%2F1n9Z4wSE%2FUbNmFBiocCKwF310pR56p1FCR1KmYwyu4wFmwq07iwKz34%2BBYHVUsd7c4X0EAO%2FZg2I48CiC7ceh5Arai6an43GlnAZyK5RZm6ts3aIkMt9ygApVI31RWK7hm6x99IJn715lOlmHPk7dNHfFVFWdOCL6r6iYPPWHRpwoJwVUxqk7wYnswZKsWj42ksgsY9n1eEKbF7xbJjbCZKR7MlzC%2FriK5zt7889xvGyyeBDcL7GFLxx9swPO3p5ne2kldbzYEasnMKXyM%2FfBkp0e%2FFnSsQzS%2FR3DC2O%2BtlQ7FwDiVbHD1XjhHbJzcf2ta6Kn6l31Sy%2Fczb%2FAI%2FWt8eJ6orzZMlK0DJxqC%2FxmyTPsmsy9WxcT2kSkzLwf9uYNALGV%2Bw%2BwnL2NXbVtR%2FwQxdBzCRwHf2FBZ8CERO7yin9Y1NOW%2FvkJdET2FqU7tkNKURiuTZPyu9VcB1%2BUTzRZWEoN5g9SCw4sWCSFHPLLRY%2BxmstIdOXgHjPUMhDPNRcnlRYw7GNtcZvaPjpclnBNQWSCzwBBhJYdZcLI7Krdg9jweyZ8zHr7EvvatApFKxwAx7hLaNwhm%2FR0Mi6tlbf1dLooljsV1TDug9nABjqkAWofZYTs1wiXlq%2B8fUKvp6zpXs8MCpk52V010NkjCZ91xpMlJMhmCQBFHZ03JyJQQEQ4rqTIOr9ZUsbt2SrU962RdM4EMazsbWCfx5i61usV4koKxzAYkdvnQSjrF49nN%2F8RgbHMlwrMimSFoT9ydpHQfTY7uvsTbRzHCGHIqqB6QdJ7OFNK%2FwKFT6mV2EW%2BO6kDsKjYe%2FWm2pfiUq8S%2B1yZStc5&X-Amz-Signature=212095f7d31fde69e449ac61af15bb7a80347ca58c263e63bfa69c03d521c5de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZF6XL7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDY0kmxmkdOG2S1fg9nAd%2BHm2jhAJW9S0IF9GhaaTspVgIhAMNrRq1YCOYRkdkNtb1jtYigziYyJUKhN%2FHiOgwMxSb5KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F2p2qxzQnUPdEhUoq3AMwvae0hvxdCz4Af9Dv6ZxqqGdwXM%2F1n9Z4wSE%2FUbNmFBiocCKwF310pR56p1FCR1KmYwyu4wFmwq07iwKz34%2BBYHVUsd7c4X0EAO%2FZg2I48CiC7ceh5Arai6an43GlnAZyK5RZm6ts3aIkMt9ygApVI31RWK7hm6x99IJn715lOlmHPk7dNHfFVFWdOCL6r6iYPPWHRpwoJwVUxqk7wYnswZKsWj42ksgsY9n1eEKbF7xbJjbCZKR7MlzC%2FriK5zt7889xvGyyeBDcL7GFLxx9swPO3p5ne2kldbzYEasnMKXyM%2FfBkp0e%2FFnSsQzS%2FR3DC2O%2BtlQ7FwDiVbHD1XjhHbJzcf2ta6Kn6l31Sy%2Fczb%2FAI%2FWt8eJ6orzZMlK0DJxqC%2FxmyTPsmsy9WxcT2kSkzLwf9uYNALGV%2Bw%2BwnL2NXbVtR%2FwQxdBzCRwHf2FBZ8CERO7yin9Y1NOW%2FvkJdET2FqU7tkNKURiuTZPyu9VcB1%2BUTzRZWEoN5g9SCw4sWCSFHPLLRY%2BxmstIdOXgHjPUMhDPNRcnlRYw7GNtcZvaPjpclnBNQWSCzwBBhJYdZcLI7Krdg9jweyZ8zHr7EvvatApFKxwAx7hLaNwhm%2FR0Mi6tlbf1dLooljsV1TDug9nABjqkAWofZYTs1wiXlq%2B8fUKvp6zpXs8MCpk52V010NkjCZ91xpMlJMhmCQBFHZ03JyJQQEQ4rqTIOr9ZUsbt2SrU962RdM4EMazsbWCfx5i61usV4koKxzAYkdvnQSjrF49nN%2F8RgbHMlwrMimSFoT9ydpHQfTY7uvsTbRzHCGHIqqB6QdJ7OFNK%2FwKFT6mV2EW%2BO6kDsKjYe%2FWm2pfiUq8S%2B1yZStc5&X-Amz-Signature=64c9ff88fef33bdacb057e9037dedcc3a04fd96a8689fbe24782599297c78d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYYZ7SF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDow%2BrajEU%2FF6vKlRtzc8fih3izUvNNqvGcfUy5XrBQ3AIhAMB9xX3qzHX4HAVD4p%2BJ8ee%2FOVykfRwQF6%2FHI9tFEcrVKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy5VT3f1YWpMFrn7Mq3AMnA0uzKRwY%2BRv1kPE5UyWu%2FAnSqRcLvz0wJXYoYxkmzpu2QglD9JcxV%2FPok2fcxFq%2BbJjWhb0RWv5fpXkBqwapaQpogblpHkMpw5%2FARvhP0lq4u7xKoVQxWSYKvD2dDEbl1P8Ja9a8prMjqPpSEsLL2n8p%2FXwaiTqyy5d31RA4YjepcHqBp42gAPWluF4hXhP60DWlM2glmqpR8Oe6Lfyd6Z%2FIiRe84gpYJFXnEWuvT96OjZCOxP6qoO5CVfzJLjfgW8updm%2FiTj4woE%2Bov792P8XTHekJzLNnTxPv07jPDArnWrhoqRMmcNoasbdtrnqbCKbFlK%2FO4IY4U23ft0NZ1KJeF%2BKoZjbn4QnKxbTnxK8KyNaucljAnKwUpxSLjNdKuydBgOaAuWEp0jwxumSA1ngk3Zqy9e%2By588x3HHhJRkacBoHng1Jxg9N8Km6iOH%2BRHHRAQCY8FdppXTBfTtkIJmz%2FY2hgrg8Xx%2FL7KSvsS0O0mPjKqt0beaIR1VVDCSwQSmwP%2F%2BRvRyhFRcjfn0CmzcASeiHdfaiDrZFh2Sr1tRGbUSyFf2qn7nIIICPiTxU7Idh5WA5WqNOnLuSNz2Qns2MT3IIBKBSqpfpAS5OFatKuvvTbS%2F9WW9qdzDHgNnABjqkARWSwo%2BuGjGdiB2CIQbLi%2Fc%2FBRyA2m6v154kd8Ct8QiXJxpKLioYxpfna7Drqj3KnOuw2QnZdwDHQ0gj1GlLUhWNpK%2BMSCrcBg1zGEGZHkMnCLJGI5zdkGmG5%2FvZzI%2FQoZ5gN6rSK9qwkpIV%2BgnQX1iAqaA66PZtDQebA9XYfS6NpV%2BvUIDcnSjeWKLszF5tDtrm7XSVoZs0K3KwRVyilJltumfo&X-Amz-Signature=cabd6a14878a3c418b2f0e072febfba56b1022e09e7a93de4db314b995a1ae8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7GALLQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHIVTeq0plBFaVk9hPOzlMwQbxUv9uNmOkS66XY4R%2Bs8AiEAlVe6Dv1WMIGbqR3ySlX7fvVjxoq%2BbRzRESVuFUDfHukqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxPFSReI%2BnnfeSAoSrcA4KqOb7ECKdVe6uD%2Bv3agZxEsCg8WKYP%2F0gFo244I%2FarBPCLfbU4T4Srx1KPJAf6WOpwbDeJEjF%2FS4o%2B5XIirEx1Un09nNwuY3i6e1XQmQYqshme8TXUOM3csQt%2BUX7qkJoUWn7b3I8uHAiXv2NN2c1hdCMn%2B7M54%2Fwm%2Fmn2yhrdcjQx3TDZDDpARHg5Y%2B15aHN9aXCfYCiWEEejUGiAO%2B3OuP%2BzmGnCj5E65D0x7ZUuhJrRolDY6PIZYn51tvCu3V9FuhREtz%2BcVP5tlElx8zSmK8Fs6HDPoc%2BgQwaJg52srhuQ8Rfv5jOx9CDmaEY64rF1HsDiSGllCOe4GLXZtrMM6cdbzllWGSpaQDYSclo9hVV%2B9xkNnmmooZCWtXPW7Ifo0tzCvRKxn5DHfeBcV0hEl7shnromLXOzXCndUkaD7R16X%2FWb1KIsA3JJAyt%2FpIQk5w5voI7yVvFMqM%2ByAjA43eY0Ce2ZeZ61XhKOy1aQP2Yt0ZEnSN4BQSgp%2BkCfrs%2FWCNqaMl6ofh2AsLwzirO4m%2B2OAiCtTw1KR%2FiNk0984JpqqVDIRE%2Bk1eeoMF533AwoWiB6wRmu7rAti7a0U1BRQwFS3L2yXLemqg3Mes9sY1iUwx%2F%2BMVZxHtibMNv92MAGOqUBT8SD3c8oa0YwS%2FWKFsQMuvvoYeQ4ye9rRKuyN9LHaoas1eY4upVKPK4ECFWPjAcgUouhD8G7vyxzO5hHAoggFGiKAWCR6VvlewPdSwYW8gOKdZ3tCGHvjHS1k2tBY%2FxfeNiWSVNytB5rAx9GzL%2BhoCFxbMS2oRRluZOcrrdH1FHOEy9jM84M2EkrlY5C2chKff4NNPbClfoC2EBQW6%2FSlW3Lw5xn&X-Amz-Signature=267cdafec7d691578194c1bc0578d44ea93bdb7d5f20de9d6394a05dd6fc3535&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZF6XL7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDY0kmxmkdOG2S1fg9nAd%2BHm2jhAJW9S0IF9GhaaTspVgIhAMNrRq1YCOYRkdkNtb1jtYigziYyJUKhN%2FHiOgwMxSb5KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F2p2qxzQnUPdEhUoq3AMwvae0hvxdCz4Af9Dv6ZxqqGdwXM%2F1n9Z4wSE%2FUbNmFBiocCKwF310pR56p1FCR1KmYwyu4wFmwq07iwKz34%2BBYHVUsd7c4X0EAO%2FZg2I48CiC7ceh5Arai6an43GlnAZyK5RZm6ts3aIkMt9ygApVI31RWK7hm6x99IJn715lOlmHPk7dNHfFVFWdOCL6r6iYPPWHRpwoJwVUxqk7wYnswZKsWj42ksgsY9n1eEKbF7xbJjbCZKR7MlzC%2FriK5zt7889xvGyyeBDcL7GFLxx9swPO3p5ne2kldbzYEasnMKXyM%2FfBkp0e%2FFnSsQzS%2FR3DC2O%2BtlQ7FwDiVbHD1XjhHbJzcf2ta6Kn6l31Sy%2Fczb%2FAI%2FWt8eJ6orzZMlK0DJxqC%2FxmyTPsmsy9WxcT2kSkzLwf9uYNALGV%2Bw%2BwnL2NXbVtR%2FwQxdBzCRwHf2FBZ8CERO7yin9Y1NOW%2FvkJdET2FqU7tkNKURiuTZPyu9VcB1%2BUTzRZWEoN5g9SCw4sWCSFHPLLRY%2BxmstIdOXgHjPUMhDPNRcnlRYw7GNtcZvaPjpclnBNQWSCzwBBhJYdZcLI7Krdg9jweyZ8zHr7EvvatApFKxwAx7hLaNwhm%2FR0Mi6tlbf1dLooljsV1TDug9nABjqkAWofZYTs1wiXlq%2B8fUKvp6zpXs8MCpk52V010NkjCZ91xpMlJMhmCQBFHZ03JyJQQEQ4rqTIOr9ZUsbt2SrU962RdM4EMazsbWCfx5i61usV4koKxzAYkdvnQSjrF49nN%2F8RgbHMlwrMimSFoT9ydpHQfTY7uvsTbRzHCGHIqqB6QdJ7OFNK%2FwKFT6mV2EW%2BO6kDsKjYe%2FWm2pfiUq8S%2B1yZStc5&X-Amz-Signature=e6621d6c7a554d98db9309df02be5de534643aa035528e58aa0b1cabc705b293&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
