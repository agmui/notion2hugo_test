---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGNRCBO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu8P2sQbTw03WcDcsbmxXwbVaTR0YXsEVzB5iw3UiKXAiBPdZfvGaVkd7hJexpSyZ12Yd%2BtbUQw57YGYlb4eypAiSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMoBEDR55%2BQBzqao%2B6KtwDNUG2%2BEyCe%2FwHLzi1RuW5sa2HPJ8jfVAQIOzlyP3iZjokOWzWV35ajZQRnckM0ddMiWLniGC7Eq8gC11p7LZGsiZgo2ZuwO9RUHngQnKMf%2BenxzwFgZULfZA2VigSrFUpRvMpzcoigN6%2FeNx20HbgXE6TLN%2BdqqlLzVdHE7YnoH9TNg1HDTZ9L%2FWh3HRMwZC7%2FBiPYPJvwxAHBM3QuZZ6OtYV%2FbgUyI3rAm93BLgPFwkXrDq9iB95o0CP3tLCfGcUnQ5Zs%2BAQ8Cou1S9A7Cb6HmnE%2BsZYWVz8l7kGKgLIJxgtGXZ%2BFgf3RfmyWUPZY4A7YKmEX2%2Fua1PUmXDpfkrxmeqx4EcYZscP720gJuwx75K3FQJn2Cb7kJDqkHBxXaa5E0sL127h3rh29MoqDOwtoVgG7SkBI6B%2Fu7No0QTK421EwQcpav8kDsaxfAIBNzlPlDqa9I73WiBP6RxDYgC6z2vu3s7joIjEy53znTZYNhoFoB%2F3bmhp9vmp0TyTvDWQZM130eQa9gleWQhyA6hy1GCzQbzLcNSw7pz3b54GMgCcj1KLpdFpXob5oznkyZ9d3oQ3Ln1RZ4J5g%2B94hGMx1adANW%2BebIjwdZTSFfHrS5s%2BBXHAXxROETyJJD4wjeufzAY6pgGcwuJy%2FlZ%2BeNfdA%2BwfKqwVah057q5NTcyRstm7k2p2zJq5x1I2jPT64Fwhvx70dCXtwrrhJob6aFuAcq3lXf5bKS0r2MeA7KBRsNlEloRXg0VxWzUmmlCtIcQKuOQcRpGi6tPisqlM%2FACcAmplvvA%2FGufD92TIJwd2zpidAA4%2B5wPbCDf6UrTcAsdD13OUeiaB8cWSYGtFTzC1sgPsCalNVyUUN4BU&X-Amz-Signature=214425ee3c0be2faa90a50b24c4a660b13d5675f4d28a3743d1fd4135e41905f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGNRCBO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu8P2sQbTw03WcDcsbmxXwbVaTR0YXsEVzB5iw3UiKXAiBPdZfvGaVkd7hJexpSyZ12Yd%2BtbUQw57YGYlb4eypAiSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMoBEDR55%2BQBzqao%2B6KtwDNUG2%2BEyCe%2FwHLzi1RuW5sa2HPJ8jfVAQIOzlyP3iZjokOWzWV35ajZQRnckM0ddMiWLniGC7Eq8gC11p7LZGsiZgo2ZuwO9RUHngQnKMf%2BenxzwFgZULfZA2VigSrFUpRvMpzcoigN6%2FeNx20HbgXE6TLN%2BdqqlLzVdHE7YnoH9TNg1HDTZ9L%2FWh3HRMwZC7%2FBiPYPJvwxAHBM3QuZZ6OtYV%2FbgUyI3rAm93BLgPFwkXrDq9iB95o0CP3tLCfGcUnQ5Zs%2BAQ8Cou1S9A7Cb6HmnE%2BsZYWVz8l7kGKgLIJxgtGXZ%2BFgf3RfmyWUPZY4A7YKmEX2%2Fua1PUmXDpfkrxmeqx4EcYZscP720gJuwx75K3FQJn2Cb7kJDqkHBxXaa5E0sL127h3rh29MoqDOwtoVgG7SkBI6B%2Fu7No0QTK421EwQcpav8kDsaxfAIBNzlPlDqa9I73WiBP6RxDYgC6z2vu3s7joIjEy53znTZYNhoFoB%2F3bmhp9vmp0TyTvDWQZM130eQa9gleWQhyA6hy1GCzQbzLcNSw7pz3b54GMgCcj1KLpdFpXob5oznkyZ9d3oQ3Ln1RZ4J5g%2B94hGMx1adANW%2BebIjwdZTSFfHrS5s%2BBXHAXxROETyJJD4wjeufzAY6pgGcwuJy%2FlZ%2BeNfdA%2BwfKqwVah057q5NTcyRstm7k2p2zJq5x1I2jPT64Fwhvx70dCXtwrrhJob6aFuAcq3lXf5bKS0r2MeA7KBRsNlEloRXg0VxWzUmmlCtIcQKuOQcRpGi6tPisqlM%2FACcAmplvvA%2FGufD92TIJwd2zpidAA4%2B5wPbCDf6UrTcAsdD13OUeiaB8cWSYGtFTzC1sgPsCalNVyUUN4BU&X-Amz-Signature=cf1694bade5b28a8f0a23539a9e65f759ae1ffcfad349c6072115c28191b0779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGNRCBO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu8P2sQbTw03WcDcsbmxXwbVaTR0YXsEVzB5iw3UiKXAiBPdZfvGaVkd7hJexpSyZ12Yd%2BtbUQw57YGYlb4eypAiSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMoBEDR55%2BQBzqao%2B6KtwDNUG2%2BEyCe%2FwHLzi1RuW5sa2HPJ8jfVAQIOzlyP3iZjokOWzWV35ajZQRnckM0ddMiWLniGC7Eq8gC11p7LZGsiZgo2ZuwO9RUHngQnKMf%2BenxzwFgZULfZA2VigSrFUpRvMpzcoigN6%2FeNx20HbgXE6TLN%2BdqqlLzVdHE7YnoH9TNg1HDTZ9L%2FWh3HRMwZC7%2FBiPYPJvwxAHBM3QuZZ6OtYV%2FbgUyI3rAm93BLgPFwkXrDq9iB95o0CP3tLCfGcUnQ5Zs%2BAQ8Cou1S9A7Cb6HmnE%2BsZYWVz8l7kGKgLIJxgtGXZ%2BFgf3RfmyWUPZY4A7YKmEX2%2Fua1PUmXDpfkrxmeqx4EcYZscP720gJuwx75K3FQJn2Cb7kJDqkHBxXaa5E0sL127h3rh29MoqDOwtoVgG7SkBI6B%2Fu7No0QTK421EwQcpav8kDsaxfAIBNzlPlDqa9I73WiBP6RxDYgC6z2vu3s7joIjEy53znTZYNhoFoB%2F3bmhp9vmp0TyTvDWQZM130eQa9gleWQhyA6hy1GCzQbzLcNSw7pz3b54GMgCcj1KLpdFpXob5oznkyZ9d3oQ3Ln1RZ4J5g%2B94hGMx1adANW%2BebIjwdZTSFfHrS5s%2BBXHAXxROETyJJD4wjeufzAY6pgGcwuJy%2FlZ%2BeNfdA%2BwfKqwVah057q5NTcyRstm7k2p2zJq5x1I2jPT64Fwhvx70dCXtwrrhJob6aFuAcq3lXf5bKS0r2MeA7KBRsNlEloRXg0VxWzUmmlCtIcQKuOQcRpGi6tPisqlM%2FACcAmplvvA%2FGufD92TIJwd2zpidAA4%2B5wPbCDf6UrTcAsdD13OUeiaB8cWSYGtFTzC1sgPsCalNVyUUN4BU&X-Amz-Signature=43bcf9708cb6b4e341736d2dbbd959f9238f08769f5b0499c460f0a13556bd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LL4CJAA%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmuKSOfTIJaz1OFyOuAu%2Fnv6QNO91g8MfDZKXaiRpkjgIhAJF84%2B4cUpmpJvJFtJIHrxJdnzGhVWRkBo9BPsjU3XLNKv8DCGwQABoMNjM3NDIzMTgzODA1Igzgw%2FzAFM%2BJBmJOd%2BAq3AP%2FCATHvhSeeRQWZUxXYZXtwdW2KQyz2m19TCnWy0jADCLjzM8%2FssmagYySHROztl2l8pBMWXtFsjdlmtnpZAzGCBUoA%2FXik%2Ba5wGCAi97Zr%2F%2FiMg9LJSLSl2zsDhUikEYyTwrVF4WaPy%2BUw%2BiIXLSG8S1S2KXM8qupHZ1FgwRbPisAdOFUgc8leCtBi4OgMkBS%2BC1DySCZblnPs%2F4ikUjxO0vl%2FwCPxJpQnqyzqUxdpTR3lK6ycRUP3h5wMX1vyswvLS8Hg3DGeXvU1PC4%2Begx9cBMQYVFvuH%2Flf7n5K48ra0IzvaVXuVRu%2FCO5943Fyl9xDXzcCY2GaG3%2BetXdSZ699PtCOZ0xl8fNpJbfioFYZN%2BZMU4KVHHG1wZmGWwl3dVKHsxKp42rHb%2BVMekiXv9sQFRit6XlOvfSnJbEkMoOCOAHwku1mS4IvivbMbG67Cc7Wka2H8%2FJGtcchvyv%2FMRocKAGBdQsWuOYl1aqWwemLi3vG1LfPA9%2F260C3PUCkRxnbYVGAn2SutTFseF0xGkAs19G8ZcBwSsqp8MSb%2FfcYi0yxn8pNtk8jn2xMVjU3Var%2BkPkarOWvs5fZEe79SkjJeuAwg82y9OZJKaHkqCpybqPvQJn5SLMhpE9TDD65%2FMBjqkAd73VT2FZ5aGXZBsHk3SAl7dbmC03DyPZ1gQr2rlNtOwNXHERRNGqzHXo9nOz4u9WvuvnfnP0bTcSIzRpR3qTmuDVxBBBVjJVP6mXFdJ5ViND4X8Y3SPvc68kf9YwHiiuebfO1YEzZzFrdpdB9m1lMfa2Teyc8j3qijgB1cUOPoNlDrcwPUCU4bTp2ZD5w4vZL58CLBqWHgHNYsxW0Brc9X0qwgW&X-Amz-Signature=006e2d6fd01e4564ca77f71734e529c18d8cb45acfbde9bf77785d2d6209d69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KS5VU7%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrrkJjT9aW%2FUmqQPXqq6X0wO4rc3VypK818f%2B7LvckHAiEAn8Z1OLjMJIrIJN24tLiQcIoBxYBffgdJjVWjQ4tKGdoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMMlA4eKmariOalVSrcA8bb8vX52Go8KPUbc%2F3Imw9%2BI88yu1NvII1Mpl5Q5kZjAGhwjlHUeZvHRRhTcIZbpLZKB53phpe2yGaX8myDJodITSXVF5ycOjjaqinzdG2gAeMu5A3IE2gCsHhdmoxH%2FwikzlntCLfqB0gmnm2NvRwb8O5Orwfeu3KvLRGDpugCk0edxeiYqnj%2B1ALnJCZvllVuGPfWEVLn0ef99et51hVMiTMvGbOO7%2BRO3wDrz2ODj%2Fg7ekd%2FIMnxk51k%2FxcwirrjUApoUQhPQmX820w29mOAaxRRwSMisCJePVzdJxRwh7FjXYS4%2Bpci54W4YB%2BMXWkSCSDupiKo282wD%2F9NehxxTkEPJTVxYfQ3RngRkykDGNy9%2BiWRL3LJtWc3DChJ3YOQCbvOBHxauMcVj9ZlebJTfJaDKYBUNKoAvy1DYJmsEFPZ98Kur2P6oRUB3SwmrYuNrgXuE%2Fa8LNaqTAGGOgFdvYBqbBTwkajxj5Gzk7UOsC5TLMcD2ftDkThiuTkflWDEWTqBs14Tgf24dY6CSgZKK8KoNz1uVzlzeYUftyfvvJ7JbSeleP0vW4oDE2i5Jmk6fuVo%2FKR6gpffmPZGIW9oDgA84aNX6ijYmDYmvGhK5JQ3SZP4Ruo8sg6XMKDqn8wGOqUBJ5UlezsMaF1%2F6GgS8xqIiKUZF7OSklEtAEGl1rXUPrimXt13z%2FnbL8m7r4iY32W%2Fvz%2BjVRpqB%2F8bn3iPx3Wt9EsJN3QI6w6rnfcAsSRnssBW3Yd8saSVgKqo39yjK66Kx%2BQci9OUO%2BmNW1lP4H5h0ob9ZnL8uyPC4gig5IIcyUNo7UFO%2BY25GApLPD4BdDvXae2hRWVh4djbW6VYT%2FHe7Lj%2B0qd9&X-Amz-Signature=6e6a32c349c982e4f71090bb2348dbbd6023b2b3cbd32f0f3cb4fc5cb8843dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGNRCBO%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGu8P2sQbTw03WcDcsbmxXwbVaTR0YXsEVzB5iw3UiKXAiBPdZfvGaVkd7hJexpSyZ12Yd%2BtbUQw57YGYlb4eypAiSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMoBEDR55%2BQBzqao%2B6KtwDNUG2%2BEyCe%2FwHLzi1RuW5sa2HPJ8jfVAQIOzlyP3iZjokOWzWV35ajZQRnckM0ddMiWLniGC7Eq8gC11p7LZGsiZgo2ZuwO9RUHngQnKMf%2BenxzwFgZULfZA2VigSrFUpRvMpzcoigN6%2FeNx20HbgXE6TLN%2BdqqlLzVdHE7YnoH9TNg1HDTZ9L%2FWh3HRMwZC7%2FBiPYPJvwxAHBM3QuZZ6OtYV%2FbgUyI3rAm93BLgPFwkXrDq9iB95o0CP3tLCfGcUnQ5Zs%2BAQ8Cou1S9A7Cb6HmnE%2BsZYWVz8l7kGKgLIJxgtGXZ%2BFgf3RfmyWUPZY4A7YKmEX2%2Fua1PUmXDpfkrxmeqx4EcYZscP720gJuwx75K3FQJn2Cb7kJDqkHBxXaa5E0sL127h3rh29MoqDOwtoVgG7SkBI6B%2Fu7No0QTK421EwQcpav8kDsaxfAIBNzlPlDqa9I73WiBP6RxDYgC6z2vu3s7joIjEy53znTZYNhoFoB%2F3bmhp9vmp0TyTvDWQZM130eQa9gleWQhyA6hy1GCzQbzLcNSw7pz3b54GMgCcj1KLpdFpXob5oznkyZ9d3oQ3Ln1RZ4J5g%2B94hGMx1adANW%2BebIjwdZTSFfHrS5s%2BBXHAXxROETyJJD4wjeufzAY6pgGcwuJy%2FlZ%2BeNfdA%2BwfKqwVah057q5NTcyRstm7k2p2zJq5x1I2jPT64Fwhvx70dCXtwrrhJob6aFuAcq3lXf5bKS0r2MeA7KBRsNlEloRXg0VxWzUmmlCtIcQKuOQcRpGi6tPisqlM%2FACcAmplvvA%2FGufD92TIJwd2zpidAA4%2B5wPbCDf6UrTcAsdD13OUeiaB8cWSYGtFTzC1sgPsCalNVyUUN4BU&X-Amz-Signature=cb2be14e5176a69a6f6a541391821ca4e9908c84605cd3cdd41ec146b34adf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
