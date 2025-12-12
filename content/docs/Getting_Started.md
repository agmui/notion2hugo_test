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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGMS4VQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICEo%2FeTmwoOs2guCgHiCcoaroi7TUVEZdQ5fGurNrGpYAiEAhlnjhv%2BwEupwU05ntbfho2vawVNUrlR4fI6eyAwCot8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Ys86gkFEvoIikVCrcA6dMNDHXW1FVuqnYSNumBxs8HIehUjOLxNwx%2FjozoTHDIqp%2BX%2Fz8nee5sy8Wv7lhPuaJ%2Fl%2BkPVXkMlmMzAMfaQ0i6KP7I7EWqNQpy4WWXT6FS8IcBpLntyaKZHj%2B8%2FQVg3sagLDiVOnpmPZzMrsp6uem%2F1PxZBbuQDX%2B2gvBkFqJxRwGWk8tEcjjjFLInGhlQO%2B5BouPnIrmvswimT90bROLXS0xFikVK1TOabjkGPHb7bWfVLel4ou%2BIjwV9%2BQEHKB%2Fpm0k4%2F1wtbyU7gj9XJmZZcQjIBiTvONxKKfz8hj7eMyVTXnYAkX%2F9zXTGtzSrDE7ym%2FysYLMmVIlEjxtX1U0maHsY63XLmjgRA3PJQApjjkUMVNTI7pUZHTBwxBO8egoot0rt2wh%2BX9FwrhRi11g%2FjXmkSOVNktCD9lfsV4bpcV0M1jB9Rk4uK0YCvpHnwUKM5HpSq3LBk48%2BOeQb%2FY%2FW6cE4y9ol9BnVitSc0Zm5%2BLb2p77ll1a7AziThk%2FHiee91QVLz6LQjqxt36%2FGboSORQJgVZHtI8hkf1llzlQ2YmjvWgJ7W3teu3xGU8DreHjkV0e9G3xRVbu3SPjRKy914QUH%2BJXHYnXtoF0Yh%2FWBwElp%2BlPAobroMlUMMXU7ckGOqUBB0J6KnN9ZbghSdVX8WlkIHarGcUGwlV%2BE7bv7bhJqE1QCMUh0rCjOVOGqom8DZ90KC3mOLlor%2BDVv%2FiWA3%2BDIGvO0x9JDvwgbRLPdRhP%2F16YbT10wlxUj1VtipDqdvHJwzF54EOMVwl9NutJXybw%2FH9nTKN2p9Ed6VAprE1DDEvpTle1M6Zgwow8FriDM9RWUz0gMA3G3nCCw6LZGgHNV4rvzYVY&X-Amz-Signature=c562199079db38ae940d7b17eb30d791e4e7fc5d1ba06e3a474149fd7727a8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGMS4VQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICEo%2FeTmwoOs2guCgHiCcoaroi7TUVEZdQ5fGurNrGpYAiEAhlnjhv%2BwEupwU05ntbfho2vawVNUrlR4fI6eyAwCot8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Ys86gkFEvoIikVCrcA6dMNDHXW1FVuqnYSNumBxs8HIehUjOLxNwx%2FjozoTHDIqp%2BX%2Fz8nee5sy8Wv7lhPuaJ%2Fl%2BkPVXkMlmMzAMfaQ0i6KP7I7EWqNQpy4WWXT6FS8IcBpLntyaKZHj%2B8%2FQVg3sagLDiVOnpmPZzMrsp6uem%2F1PxZBbuQDX%2B2gvBkFqJxRwGWk8tEcjjjFLInGhlQO%2B5BouPnIrmvswimT90bROLXS0xFikVK1TOabjkGPHb7bWfVLel4ou%2BIjwV9%2BQEHKB%2Fpm0k4%2F1wtbyU7gj9XJmZZcQjIBiTvONxKKfz8hj7eMyVTXnYAkX%2F9zXTGtzSrDE7ym%2FysYLMmVIlEjxtX1U0maHsY63XLmjgRA3PJQApjjkUMVNTI7pUZHTBwxBO8egoot0rt2wh%2BX9FwrhRi11g%2FjXmkSOVNktCD9lfsV4bpcV0M1jB9Rk4uK0YCvpHnwUKM5HpSq3LBk48%2BOeQb%2FY%2FW6cE4y9ol9BnVitSc0Zm5%2BLb2p77ll1a7AziThk%2FHiee91QVLz6LQjqxt36%2FGboSORQJgVZHtI8hkf1llzlQ2YmjvWgJ7W3teu3xGU8DreHjkV0e9G3xRVbu3SPjRKy914QUH%2BJXHYnXtoF0Yh%2FWBwElp%2BlPAobroMlUMMXU7ckGOqUBB0J6KnN9ZbghSdVX8WlkIHarGcUGwlV%2BE7bv7bhJqE1QCMUh0rCjOVOGqom8DZ90KC3mOLlor%2BDVv%2FiWA3%2BDIGvO0x9JDvwgbRLPdRhP%2F16YbT10wlxUj1VtipDqdvHJwzF54EOMVwl9NutJXybw%2FH9nTKN2p9Ed6VAprE1DDEvpTle1M6Zgwow8FriDM9RWUz0gMA3G3nCCw6LZGgHNV4rvzYVY&X-Amz-Signature=f8bca2568e3787890ce5e3929734a0762f7f7324f81f93cae448cd27bcc5a852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGMS4VQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICEo%2FeTmwoOs2guCgHiCcoaroi7TUVEZdQ5fGurNrGpYAiEAhlnjhv%2BwEupwU05ntbfho2vawVNUrlR4fI6eyAwCot8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Ys86gkFEvoIikVCrcA6dMNDHXW1FVuqnYSNumBxs8HIehUjOLxNwx%2FjozoTHDIqp%2BX%2Fz8nee5sy8Wv7lhPuaJ%2Fl%2BkPVXkMlmMzAMfaQ0i6KP7I7EWqNQpy4WWXT6FS8IcBpLntyaKZHj%2B8%2FQVg3sagLDiVOnpmPZzMrsp6uem%2F1PxZBbuQDX%2B2gvBkFqJxRwGWk8tEcjjjFLInGhlQO%2B5BouPnIrmvswimT90bROLXS0xFikVK1TOabjkGPHb7bWfVLel4ou%2BIjwV9%2BQEHKB%2Fpm0k4%2F1wtbyU7gj9XJmZZcQjIBiTvONxKKfz8hj7eMyVTXnYAkX%2F9zXTGtzSrDE7ym%2FysYLMmVIlEjxtX1U0maHsY63XLmjgRA3PJQApjjkUMVNTI7pUZHTBwxBO8egoot0rt2wh%2BX9FwrhRi11g%2FjXmkSOVNktCD9lfsV4bpcV0M1jB9Rk4uK0YCvpHnwUKM5HpSq3LBk48%2BOeQb%2FY%2FW6cE4y9ol9BnVitSc0Zm5%2BLb2p77ll1a7AziThk%2FHiee91QVLz6LQjqxt36%2FGboSORQJgVZHtI8hkf1llzlQ2YmjvWgJ7W3teu3xGU8DreHjkV0e9G3xRVbu3SPjRKy914QUH%2BJXHYnXtoF0Yh%2FWBwElp%2BlPAobroMlUMMXU7ckGOqUBB0J6KnN9ZbghSdVX8WlkIHarGcUGwlV%2BE7bv7bhJqE1QCMUh0rCjOVOGqom8DZ90KC3mOLlor%2BDVv%2FiWA3%2BDIGvO0x9JDvwgbRLPdRhP%2F16YbT10wlxUj1VtipDqdvHJwzF54EOMVwl9NutJXybw%2FH9nTKN2p9Ed6VAprE1DDEvpTle1M6Zgwow8FriDM9RWUz0gMA3G3nCCw6LZGgHNV4rvzYVY&X-Amz-Signature=7d68e658d6074be29ff213d5483a3f804d9d1d023e33178c73c24fedd9e439bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPC2H2B%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHRrctIpfkBpaACkdOPtuqsXdHPQva0gyMZjx4YYNDikAiEAkh%2BS6OrYi5ZQ6Lw4Ru3MHlADD9654LQtLkGqg4yAdY8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAujhd9tGvR3WjiEiSrcA5kd%2BnnBSZ6j8tp8OaGWJClJDEQzUSM%2FlyiN1%2BynIylV398akbbR0ZxrNf8d%2F984ENjn4jb5x5duvLEeAFS%2BMTLokztO2sb0m0XPLP8gEmzJSWiS8Uqx0SowXDbmJaOpeD5YHhpWCU%2F2CQj6Kxmu4ZGDNbXc9Unnx6744%2F3LUpnmBPicSYVhycKM70%2F%2BwbAX%2BCJeHl8tCzCaWlPqDridD6Ikc3BDiD2xs3X195HH2QNBp7Km8zKyCPWd8MgWdk4GL8r40xynnamFeVePb5g4Em7QVaiqTxl%2FX5HnGPXtIqLRY4LcA89p4bMkdTtavdmQTaEy6dd4Wi4K2asW1tOShch0zn6wGvhwSXtweC%2F907dj%2BrQMA0YU7PPzTDpoP4jJ15uixMBemGl8zOBHE%2FqXuzvlcqmnOVGohbLPLqk%2BdCKbO%2FU8%2FIDqP2Vt9O5W4yhlTFn1TH%2FIZBiWzHnXajhw%2FJUNPIoV4PTWZa8msZztfDSIMa16NHc8CicmDqf4Bm18ZKfXT3yiuJgxPM3Hii669tMmYG%2B%2B7vypDilKcj%2BUz4Alk7a4kA%2BdU4A%2BoOEY%2BRjOsEU4GRwTF9FdEdSHEBG9EDyjWQjPNU746pDhVZ3sW1gXIAqolA9O%2FnESUWDXMMvU7ckGOqUB4k%2BvnQ%2Ffb6S3bFvD%2BxIlUOplRWlsFmdOEUI9hcW2KF%2FGDQVKl%2F2mG%2BT%2FY33qTtx%2FPRIenzDSmYdog%2FjEecn2doB4%2FCYoFII2LLf3BJcfj32o8%2FjnIFfEJsyW5xJMlTNR69KZM5NyhPd4oPv6aTL9XGvnBin1fr1dbsZewkhaOZvPSHcTxJdaHd3EnDYbltvtN8Vfe%2FtqN83B%2Fxx89IJdOxFpgEjf&X-Amz-Signature=4efa7360ebbcbf89e7ad4a880b3ead1d60fde87c04bc210148e45218b2ac90f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KEC6RDF%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDwcbLBs4jh5JRwuhdLITc6e4oAZggRriPIcuWuRvdzmAiBTNF0tmB%2BwKV8gIZv1%2BrwLbdqsnEg0nsjSxsn3dPCk0SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2Be3bfh1wC9vuIQ7KtwDrfKaN8K%2FY7boFJgkSjj6jl%2F7y5exET14QD1Yy0pNflUMy1CfQ7XCtHj9BRCTNjnsAMDbPxhFEwmqKQ5PgDNuPR9m%2FP60dbJEy7I%2BtrEB6MOuzCrwFzSsZI6NyERz7OkfYsHFXw1SmJ26veEMJQzu1RReJ50onemte%2Fm8VfAjK6jpJTU8MCZ3PyuYjdh0Y8BXL8lN5RZDPjplWK5d6xMFBARoYJxAD7nrKZrADhFiMrv9IGQPsdU5YdAhmcpq9VRkf3k8XSOLmMtbX0ISCWG9InQnByv9adrMkH1lLk2w7GM9Iz4OFYKSL0ZxeWzPnziTFR%2FJ%2Ff9e4xeSsP6aPwGr3OybrO12N0HpzKTkThLwewpe7LcDXoBgiVY7k4SULYKlgTIeUvNO93aCa8YiibbHht2yiun4Zs7QsF9ZhzKlwfE0Je%2BsWAHK5GO8gmMmy%2B17oKkCNf3iFJhYWyfQFKyql76mXFmd3Cean1w0qUkMUN5HXuEfJaFPaKuK6S%2F5JpwJEK0q0w3Iw2Jm%2BltjqZafUDJHs0%2BgepELO%2BaHtwajadvPDK8%2FeWGiPeH4YpyhCKK0H03uy06%2FIemxIpiW1JfRS11NouTzGtEs%2FYm9HlgI98%2FL92yt4XwAR1fApBsw79TtyQY6pgFKOezUyqghrOGws935vuIgZotO3A3mO%2FtU13tcTKWtSIN9Vyi5Gmf4J7ULjzIsTQ%2BsIfu6ijO2mrj%2BlFIjb7n9i92FbxJ16A8ReMwxvUD%2FAfiJOYi4XgMJo7KOL%2BTU6NJhPGjtmoZIyQmTZtrNoRTswVEQ3jUaysOSC2T69nIDbiTKbLggjFcdswynnrBnmGq8DFvUTU5sPCn3sANDP4PvEkDwAvdP&X-Amz-Signature=5c92689b56108d7fe39abedca44bc34942633363ac417f0d731226b36a0f46f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGMS4VQ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICEo%2FeTmwoOs2guCgHiCcoaroi7TUVEZdQ5fGurNrGpYAiEAhlnjhv%2BwEupwU05ntbfho2vawVNUrlR4fI6eyAwCot8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0Ys86gkFEvoIikVCrcA6dMNDHXW1FVuqnYSNumBxs8HIehUjOLxNwx%2FjozoTHDIqp%2BX%2Fz8nee5sy8Wv7lhPuaJ%2Fl%2BkPVXkMlmMzAMfaQ0i6KP7I7EWqNQpy4WWXT6FS8IcBpLntyaKZHj%2B8%2FQVg3sagLDiVOnpmPZzMrsp6uem%2F1PxZBbuQDX%2B2gvBkFqJxRwGWk8tEcjjjFLInGhlQO%2B5BouPnIrmvswimT90bROLXS0xFikVK1TOabjkGPHb7bWfVLel4ou%2BIjwV9%2BQEHKB%2Fpm0k4%2F1wtbyU7gj9XJmZZcQjIBiTvONxKKfz8hj7eMyVTXnYAkX%2F9zXTGtzSrDE7ym%2FysYLMmVIlEjxtX1U0maHsY63XLmjgRA3PJQApjjkUMVNTI7pUZHTBwxBO8egoot0rt2wh%2BX9FwrhRi11g%2FjXmkSOVNktCD9lfsV4bpcV0M1jB9Rk4uK0YCvpHnwUKM5HpSq3LBk48%2BOeQb%2FY%2FW6cE4y9ol9BnVitSc0Zm5%2BLb2p77ll1a7AziThk%2FHiee91QVLz6LQjqxt36%2FGboSORQJgVZHtI8hkf1llzlQ2YmjvWgJ7W3teu3xGU8DreHjkV0e9G3xRVbu3SPjRKy914QUH%2BJXHYnXtoF0Yh%2FWBwElp%2BlPAobroMlUMMXU7ckGOqUBB0J6KnN9ZbghSdVX8WlkIHarGcUGwlV%2BE7bv7bhJqE1QCMUh0rCjOVOGqom8DZ90KC3mOLlor%2BDVv%2FiWA3%2BDIGvO0x9JDvwgbRLPdRhP%2F16YbT10wlxUj1VtipDqdvHJwzF54EOMVwl9NutJXybw%2FH9nTKN2p9Ed6VAprE1DDEvpTle1M6Zgwow8FriDM9RWUz0gMA3G3nCCw6LZGgHNV4rvzYVY&X-Amz-Signature=38ac4624e5404b24ae3e4bc988984725b5136941d761294d4d71f01d931ecc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
