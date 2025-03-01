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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PTXDWC3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGaqypZD7s8Ny1IJTcaNQ7xRF2TVX7pF0HiYK5PbtQOBAiEAknmGx%2Bcx68y29Bzg%2FhH9X3ZzIMs7m2GhUQ2ypRpvUN4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL8i3yN7aGk244vIyrcA3ADY9zH%2FPAFS%2BW11FyZfZ%2Bbrbc1czb%2FI2LNQ4v1Q5ySSoC%2Bme5Yx4hJj6f9t%2B8YrI3qtibrKHoZbGERXkXQikyuVeFrjhbtmJTkO8UsKSPHM%2FuBpHzTZHgOtN54DaJgFhm7Vl91LuhqKSk%2FbuArSStK0UAZvgrXJw9thNueFa0q%2F%2Fc1VqW0z0Df1xkMWR6dSpmlq36Q2OBjVkp6kC%2BKFHbYUAeJvjaJt63i9uZhY7a3GJo5YtWztQV2%2FeSKgUpnCWo3LMiTHczNQJOLbswiJmQh7t%2BWW5RlXm45yCWTcql9llnNpuXRK%2FkMhyop86VRc3fPV%2BvJu%2FFcOxCJxSzbxwl%2FrSvMLcn36HXmI1ciyclnnpKqcanLIasYzwIJvji6FGKugzsz704pFZulaTmLjNoDM5soswwk1mDnzOF4Utt2NUbv5dMfCQZPKoMCRqLv8vd7Peb2AGX3nOzeK7M0Nt9YKl8p3%2BGACj4nEnOe7RHeowpqYgqUZ%2F4ade%2B8L8M3bSYrJ0ejgGjkJAf8rPLZI2CU2LZQZab0AvBL%2FeGsmJKkTQszlN9Evjc%2BADuJtEFIMBjGe3Lu5DTBFPPNAuXwvwsy4uD6MX4K%2F%2FYE3qktWa5FiGRxSgD3KVz6vEm1MIWRir4GOqUBEf1bpOEN8xpipyZIj%2Fa%2FA%2FmN6jXbJ%2FPmq7tNt%2FPOr2EKvXkGc0CzRT8JfbJG6k5HE5S59dS%2BvwcaOwtwoQ9mdUvuHqF4wTgxJ%2Fev0WQ4i%2BA039aqWn8rtcXs04Iz37gFVfZGBuNkdKMYzAqGA5ACTOEIZKjap8%2FcQZD%2FAszS1NnlY5lrwAUV6hXzpRSlsYqE3uEjRTyuS935f0iSq7Aem8CQ19M4&X-Amz-Signature=2a38de4f367b7b72a07369353224c215f904f46530291844b5348f1542a15c72&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PTXDWC3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGaqypZD7s8Ny1IJTcaNQ7xRF2TVX7pF0HiYK5PbtQOBAiEAknmGx%2Bcx68y29Bzg%2FhH9X3ZzIMs7m2GhUQ2ypRpvUN4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL8i3yN7aGk244vIyrcA3ADY9zH%2FPAFS%2BW11FyZfZ%2Bbrbc1czb%2FI2LNQ4v1Q5ySSoC%2Bme5Yx4hJj6f9t%2B8YrI3qtibrKHoZbGERXkXQikyuVeFrjhbtmJTkO8UsKSPHM%2FuBpHzTZHgOtN54DaJgFhm7Vl91LuhqKSk%2FbuArSStK0UAZvgrXJw9thNueFa0q%2F%2Fc1VqW0z0Df1xkMWR6dSpmlq36Q2OBjVkp6kC%2BKFHbYUAeJvjaJt63i9uZhY7a3GJo5YtWztQV2%2FeSKgUpnCWo3LMiTHczNQJOLbswiJmQh7t%2BWW5RlXm45yCWTcql9llnNpuXRK%2FkMhyop86VRc3fPV%2BvJu%2FFcOxCJxSzbxwl%2FrSvMLcn36HXmI1ciyclnnpKqcanLIasYzwIJvji6FGKugzsz704pFZulaTmLjNoDM5soswwk1mDnzOF4Utt2NUbv5dMfCQZPKoMCRqLv8vd7Peb2AGX3nOzeK7M0Nt9YKl8p3%2BGACj4nEnOe7RHeowpqYgqUZ%2F4ade%2B8L8M3bSYrJ0ejgGjkJAf8rPLZI2CU2LZQZab0AvBL%2FeGsmJKkTQszlN9Evjc%2BADuJtEFIMBjGe3Lu5DTBFPPNAuXwvwsy4uD6MX4K%2F%2FYE3qktWa5FiGRxSgD3KVz6vEm1MIWRir4GOqUBEf1bpOEN8xpipyZIj%2Fa%2FA%2FmN6jXbJ%2FPmq7tNt%2FPOr2EKvXkGc0CzRT8JfbJG6k5HE5S59dS%2BvwcaOwtwoQ9mdUvuHqF4wTgxJ%2Fev0WQ4i%2BA039aqWn8rtcXs04Iz37gFVfZGBuNkdKMYzAqGA5ACTOEIZKjap8%2FcQZD%2FAszS1NnlY5lrwAUV6hXzpRSlsYqE3uEjRTyuS935f0iSq7Aem8CQ19M4&X-Amz-Signature=c4831d271e8273e03d24d912c372a41fbd1573c40e93cef78266225149006a71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQJE4TP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEi1wZSaLqoOonBJ9xEbolOqsrecjVytsWN0ElElOitxAiEA0iRg7TtbT6GrblcLnQzi8vPkx7eLAgOV5HsZtiYqLRIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYKq9cPK1PEbOO5QircA2cPvj8%2BpQLOOegYBqCXD2xbMQ9lQbfGaV%2BKszOMj6OJ%2F%2FCvGb19bcjLJiTVUckcOprd6st6w7Y74pzsPXR5am2jw%2F4d4QGs9crBvn%2BlLuap8rRRfceqFOsxxO9KQIUFfgiZUZVnePgpVzraUgkQYBOG7XZac22oQ6svMeuRiarMXl1%2BQITvLq%2B0msWCODMHzzf%2BpVHElVe0NZqn08CTUoEGD7WtjLZbHI7nrjZCklCDTtrhPlAo6wYxUZ%2B0IqZtnOvuD7Eo4fEOwSrOb1bds8lnRV1YfjZwXwBCKXNus7la2ygZqtYUDCQV1OU3W8H2hdTo6IuOF0l4bREbxIaKR%2Bg5jfR52%2BW0mN35N54BDiz5ignMk1eSjfUa6tqNeh%2B59Htk0AThqS3rxNHNVyVoXx7N8yLz77kgEFRAA9pm%2By2rzGhMv7UrlOtE8%2BPAtwaNrBwSVZp6%2FuqGEtaga%2FQf76B2pGrc8R8WZgf27ygj3IKXeyhdCSzQPNgUOJJqi%2BWIP%2B46%2B7oklAKuq%2FDf2Tb1MyJZgFZvFOSS5xp%2BIM46zVI78DDt1pUAamOR4SYx1zMPTyTEie9Ii06gsdIR1tEOKzxHJwwiKPgsqg9a2bSwjk%2FQdEk%2BNMBl6ZWv6cKUMJ%2BQir4GOqUBVIyVD116Bn6DjNXu7sp3jji6YKq54tK%2FZGHZWAzOn0Wh98l8s2FcVbcRgBr34ybaES9zfn0xJzaOZMwGynrrUwKNSBMDK3uiaM9B3%2BV9OL49mAMGv2X05o4%2Bm8Wd%2BjAlreNLWMVkJKmQ5ZyFDrmzZa6Yqq9t1S9InIFdZ1A49zINsnZSAzSL2dOslG6XVwo%2FI6o5alIIIfcWxpzsV4IlFp7JIvY7&X-Amz-Signature=0ddccc636f7b26750a735c459324fa517fda29c478aeb5d54a26f9a3ce9efc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEW37HEW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAoUkSNnIFY6c9m0p9vWYCJDtrtNRQoBC%2B%2FFthz2fNEsAiA9%2Fzku4r1bP7wduJqISf9Cc525AiAOWAtGYfa4y4YgFyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJOmSMUGTBzAF%2FbGEKtwDO7fnJ5DGaeE09%2BNT5KKtTRW9I1gVTryTMPv3F5NXZXADsSSSKixH5BIGD3nf60p1z2krY5lP0Hy8z%2FSkbvrg3AlvFPWa3fHA%2BNHhDYgfDwiPzrLZH%2FNJW6YQfCbBZYLBwFE0oNVNs0Yl%2B%2FpLbfbWeRExVTmEpUNDFEAcuwhKX3W5814lDo25u8A0%2B21dg%2FjjfI4jzhwv8xPJ1KxQkB0QEc3aDjZpBw8it9Xlj1cEiMw%2BwOGAXepYN0iGoGqG7m%2B2%2BCGwGMhRwp%2Bj7XntfKdXWPNzOqO8UND8U1Ad5BhCTiOvEo2Td9ELeHFcdQtpXHNdbB67LIj63gJsffgcwlD2eOd249g8QWx0kODShnbofGc500161gZYbFufPnmewx7Vy7hsBijSYVkJCVddAUMpKizDcOeB%2BUIGL0MkrKG1DxYNG1eHA36g516PoW13m7OgJnfMkqFontWFCwtbQYGbQa1C4Gbpm%2BBA2m4b%2BX67mWxLDvHFN0U6vE0wPOIaY6blJbevNGRxe5ioK%2FzpNhrVQnCQkHtsNnM%2BlEphBooAJut7eBcXYcNMC1Qg%2FdM31o7w86uH4ABrCSZTiwwxzBPOFIz7hDcgSyv%2F77r5v1t6hlLjRIlnx4Sq%2FZKP12Awv5CKvgY6pgEx76w5NkF6pxxu7iSaqVq4cKc7JGKQ7mErobrj7WqBOcylWPLUJ%2BJAXS2DK1oy%2BHva7Phzm49cFE%2BXSI%2FY6zo91uXheGMOVUlXGPtsmw2HoMDicB1gNBGqE7ShpbeSYfZhSuZuaVNaOWQiSCsfFjIIAJ73ZkiBgmdvG1QO95UbvpnAyl90QCEJ0sdSOx4bEwlaH30WlmP05hXgzaYDtmfXuTGhKDL2&X-Amz-Signature=8803d34f7129b2c791d9fd25f1fe0226364d0d4c278e2abc25d39f3c9d6a9e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PTXDWC3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGaqypZD7s8Ny1IJTcaNQ7xRF2TVX7pF0HiYK5PbtQOBAiEAknmGx%2Bcx68y29Bzg%2FhH9X3ZzIMs7m2GhUQ2ypRpvUN4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL8i3yN7aGk244vIyrcA3ADY9zH%2FPAFS%2BW11FyZfZ%2Bbrbc1czb%2FI2LNQ4v1Q5ySSoC%2Bme5Yx4hJj6f9t%2B8YrI3qtibrKHoZbGERXkXQikyuVeFrjhbtmJTkO8UsKSPHM%2FuBpHzTZHgOtN54DaJgFhm7Vl91LuhqKSk%2FbuArSStK0UAZvgrXJw9thNueFa0q%2F%2Fc1VqW0z0Df1xkMWR6dSpmlq36Q2OBjVkp6kC%2BKFHbYUAeJvjaJt63i9uZhY7a3GJo5YtWztQV2%2FeSKgUpnCWo3LMiTHczNQJOLbswiJmQh7t%2BWW5RlXm45yCWTcql9llnNpuXRK%2FkMhyop86VRc3fPV%2BvJu%2FFcOxCJxSzbxwl%2FrSvMLcn36HXmI1ciyclnnpKqcanLIasYzwIJvji6FGKugzsz704pFZulaTmLjNoDM5soswwk1mDnzOF4Utt2NUbv5dMfCQZPKoMCRqLv8vd7Peb2AGX3nOzeK7M0Nt9YKl8p3%2BGACj4nEnOe7RHeowpqYgqUZ%2F4ade%2B8L8M3bSYrJ0ejgGjkJAf8rPLZI2CU2LZQZab0AvBL%2FeGsmJKkTQszlN9Evjc%2BADuJtEFIMBjGe3Lu5DTBFPPNAuXwvwsy4uD6MX4K%2F%2FYE3qktWa5FiGRxSgD3KVz6vEm1MIWRir4GOqUBEf1bpOEN8xpipyZIj%2Fa%2FA%2FmN6jXbJ%2FPmq7tNt%2FPOr2EKvXkGc0CzRT8JfbJG6k5HE5S59dS%2BvwcaOwtwoQ9mdUvuHqF4wTgxJ%2Fev0WQ4i%2BA039aqWn8rtcXs04Iz37gFVfZGBuNkdKMYzAqGA5ACTOEIZKjap8%2FcQZD%2FAszS1NnlY5lrwAUV6hXzpRSlsYqE3uEjRTyuS935f0iSq7Aem8CQ19M4&X-Amz-Signature=f8f418920bd8c363887a800ddd4a6389d0a143f49e412eef89f1f1a25d613ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
