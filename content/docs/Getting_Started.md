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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNYV74Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOFHFcQgFzF5KEaJtiXig7l%2Bb0lTKzYWRFeWXnxRixNAiEAmN8Veb4NK7OGhNjOi%2BUlZYOBb52SOlx%2B5A2PeFNUFKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBNwMqP07n7KX9qMAyrcA0EfBwF3HLMUcqNxeg9scz3ETMm5IsHv8PzdhEVzlGQoQijhJmrD4v06GIUDmy1kk3m9A10QCLfYi1sKmx4WB5g88TcgsSBlziHSgHwuEILs3TL%2Fw1VEBbn8yb7GdPiCFPsj34OuIm5xyMInXpvgv4TTwfO0OUsohPCFuaO81NMpKEpGvC4rAhcoxj5He2Jw9n0Yd3TfB1lyPgacx0Wh1IhpjLbXRkVpUPhhlTlEn%2BxvsUtiinXHyzKNQ4kZW4eDFzr6PPNzVKTkYvefDgFqMqmLryIDi5wFtz2KbKcCW1J55dDOUppUg6s2HKNk28uf5JxN55zVxh%2F3TG3TNY3kQYBsOEJtZhXXtQ%2F6F73it7EPukZDqxJQ1wHDUWSO%2BoUvomYev%2F5e%2BZq44jKiPPgwhINC5kQ6A5f9SdQ1lo6xlUr2PAAUk%2Fr06CTccLN1Hf70dfwI6w%2BybAgEeIa0ImhFq97CtwAH%2FzCOxtxsVoXd8coof6cZuWp0gqqIHLtbXRPx0o2%2BbrSZv%2BgCuk0VyxYL6WtG8yiv8xqkXSkIQsoyT9O2XaWISTjCmzV%2BMUBYeBT2BhTQp1YMT2mGuhyaMjcrrL5ELLryH7pgQkXNGgK%2Bbt8vFQvAKLWf7vLWnTLMMNmAusQGOqUB34YGm%2BcrY0d4bNwUjxDBgKgYTX7BP%2FLGHydcaj0a%2F60mZO0RA3%2BY%2B5lNGR2%2BM1G1fliI9lIvxJkvshu4OIYoBrnZiFhVpkEyBno5I%2BOqKwcw0TyzhFLhX0AKFc1P0eIPk2qEHangyP%2FVvrSJAET2rpJ%2Fhv%2By1G7WC%2Be9ApsBqYlQ6XNdf8Kw%2BfLdX8uklGY4KuOYgxqkKsVDo2vMMwnrV4JXGVSQ&X-Amz-Signature=d99f50a6ad873a41bf2a55988fbca57732deef29ac893b27b1850e4a9c60b98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNYV74Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOFHFcQgFzF5KEaJtiXig7l%2Bb0lTKzYWRFeWXnxRixNAiEAmN8Veb4NK7OGhNjOi%2BUlZYOBb52SOlx%2B5A2PeFNUFKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBNwMqP07n7KX9qMAyrcA0EfBwF3HLMUcqNxeg9scz3ETMm5IsHv8PzdhEVzlGQoQijhJmrD4v06GIUDmy1kk3m9A10QCLfYi1sKmx4WB5g88TcgsSBlziHSgHwuEILs3TL%2Fw1VEBbn8yb7GdPiCFPsj34OuIm5xyMInXpvgv4TTwfO0OUsohPCFuaO81NMpKEpGvC4rAhcoxj5He2Jw9n0Yd3TfB1lyPgacx0Wh1IhpjLbXRkVpUPhhlTlEn%2BxvsUtiinXHyzKNQ4kZW4eDFzr6PPNzVKTkYvefDgFqMqmLryIDi5wFtz2KbKcCW1J55dDOUppUg6s2HKNk28uf5JxN55zVxh%2F3TG3TNY3kQYBsOEJtZhXXtQ%2F6F73it7EPukZDqxJQ1wHDUWSO%2BoUvomYev%2F5e%2BZq44jKiPPgwhINC5kQ6A5f9SdQ1lo6xlUr2PAAUk%2Fr06CTccLN1Hf70dfwI6w%2BybAgEeIa0ImhFq97CtwAH%2FzCOxtxsVoXd8coof6cZuWp0gqqIHLtbXRPx0o2%2BbrSZv%2BgCuk0VyxYL6WtG8yiv8xqkXSkIQsoyT9O2XaWISTjCmzV%2BMUBYeBT2BhTQp1YMT2mGuhyaMjcrrL5ELLryH7pgQkXNGgK%2Bbt8vFQvAKLWf7vLWnTLMMNmAusQGOqUB34YGm%2BcrY0d4bNwUjxDBgKgYTX7BP%2FLGHydcaj0a%2F60mZO0RA3%2BY%2B5lNGR2%2BM1G1fliI9lIvxJkvshu4OIYoBrnZiFhVpkEyBno5I%2BOqKwcw0TyzhFLhX0AKFc1P0eIPk2qEHangyP%2FVvrSJAET2rpJ%2Fhv%2By1G7WC%2Be9ApsBqYlQ6XNdf8Kw%2BfLdX8uklGY4KuOYgxqkKsVDo2vMMwnrV4JXGVSQ&X-Amz-Signature=0bd80e21fb0ff8a9a07adfdc7d86cb0e6b6652071dc04d79e984011cebe41706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNYV74Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOFHFcQgFzF5KEaJtiXig7l%2Bb0lTKzYWRFeWXnxRixNAiEAmN8Veb4NK7OGhNjOi%2BUlZYOBb52SOlx%2B5A2PeFNUFKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBNwMqP07n7KX9qMAyrcA0EfBwF3HLMUcqNxeg9scz3ETMm5IsHv8PzdhEVzlGQoQijhJmrD4v06GIUDmy1kk3m9A10QCLfYi1sKmx4WB5g88TcgsSBlziHSgHwuEILs3TL%2Fw1VEBbn8yb7GdPiCFPsj34OuIm5xyMInXpvgv4TTwfO0OUsohPCFuaO81NMpKEpGvC4rAhcoxj5He2Jw9n0Yd3TfB1lyPgacx0Wh1IhpjLbXRkVpUPhhlTlEn%2BxvsUtiinXHyzKNQ4kZW4eDFzr6PPNzVKTkYvefDgFqMqmLryIDi5wFtz2KbKcCW1J55dDOUppUg6s2HKNk28uf5JxN55zVxh%2F3TG3TNY3kQYBsOEJtZhXXtQ%2F6F73it7EPukZDqxJQ1wHDUWSO%2BoUvomYev%2F5e%2BZq44jKiPPgwhINC5kQ6A5f9SdQ1lo6xlUr2PAAUk%2Fr06CTccLN1Hf70dfwI6w%2BybAgEeIa0ImhFq97CtwAH%2FzCOxtxsVoXd8coof6cZuWp0gqqIHLtbXRPx0o2%2BbrSZv%2BgCuk0VyxYL6WtG8yiv8xqkXSkIQsoyT9O2XaWISTjCmzV%2BMUBYeBT2BhTQp1YMT2mGuhyaMjcrrL5ELLryH7pgQkXNGgK%2Bbt8vFQvAKLWf7vLWnTLMMNmAusQGOqUB34YGm%2BcrY0d4bNwUjxDBgKgYTX7BP%2FLGHydcaj0a%2F60mZO0RA3%2BY%2B5lNGR2%2BM1G1fliI9lIvxJkvshu4OIYoBrnZiFhVpkEyBno5I%2BOqKwcw0TyzhFLhX0AKFc1P0eIPk2qEHangyP%2FVvrSJAET2rpJ%2Fhv%2By1G7WC%2Be9ApsBqYlQ6XNdf8Kw%2BfLdX8uklGY4KuOYgxqkKsVDo2vMMwnrV4JXGVSQ&X-Amz-Signature=d90df78115520e99ec8e7bda85115e2292acf729e881d2eb912d651763450bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR5XBQV4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKAUtK1%2B5qx82yN%2Fu20%2Fzx84bYNebg5UkckqaLEytsXgIgcTuO5h6E3zFy9H8pmQez7B2rwgQRNFPv7162LJ7E1PIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGys30eXI1lZuYwuiircA0P%2F1txEeAQsYJ601BkRLYRo5Etit8IGZeHlEhp5Ly8oxebsUsvl5NgxlTKZTbrGOwJymsRf39QpGHW5Y8BAArSgXgu0m1olngDvSrFjf0OBlDQg015seWixj28I6zAJxxCct2vH3HH2lyA%2F6Ix%2Fw%2BGQqEg8HEicIW%2Fcq6yQKCCT0t2jQFIjW%2FkqKQnTatcdGsYlmI6gnXQuFeUCV2KJNe6ckb4hWMOeoJRsegpgPdwbkigaiQaFNkdJruE%2B1dZL0HoSiYeWBF7d%2FS6Mw7tH9K1p7DT14Fq8Gx%2FoW85h2KvxYkAQtdywJyJnHlLX4GOJ7v%2B4r7Ty6CjUp9UI8W%2BzfD8TNPCVBNo9r3OuqD86ZCcF%2FyIGaTEg3pXuihGQztG54eP4j5UVWmELSOnqQRZ6az1H%2BFhVXfYlejvRlR28CXQeDH3%2BDiWmAeq9u82gqYViJUCMn6Y3UMoHxD4SBR8bR37qeShX7gQevt8bNbQ1P8YS9P85beR1NFoAmC6%2BqTvNTNGAp3sA3QoQxQTEKrKqnjK53jQcnYSfU5dYVN11msW66f6AWbjf%2FQmQ87vqOPVZzMH3qao6Vz8yv%2Fh%2FBU%2F9LYRbDWqVGc0%2BnW3OpHh30ZSNCvCuooHDyOMB0u5yMPSAusQGOqUBD8Ux2o4JAERJFP2MlfWkt4Ar5JzRosTQYQBur5E3TiKKmujZmk43U%2BppQcc0IyL1LYoeyvdKtobyQgJIWzWe2Rd5Mz8DSp7q2UJk36sNieC5FrQx73McfqZ5g67qohTUlm9qoLODp5rv8VZ4jI2DDvWUUCcYVuLNKRZTCoOK%2FJs7ww0aTbb13BuoX0oSytm52%2B9mAkUU%2FHubNOoI3cElE4FPkOLh&X-Amz-Signature=44c28503c8101df6c97277d58353ea2784d108ddacf82091d6b864efcc6551f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZC3SYPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZukeyvfvuCif6rLv90%2FN52BY3O%2B4MKX7JZUMik%2BbdbAiEAnl6fHH6Ps97ms%2BJJA7NMKUYV1oQNvdIraT6f9uHkNiYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCzAWdc8YrApWgv%2BbircA%2Fm%2BSH592Rj7P134TZcv1XMreUPKpalwKVhC3GJhHAltEYQvH8hXqnvRTG2kAnJF2CGV2eLnMdKzpK0Y2F14AQEylGNXSifBL0jeQt%2Bo58uWtV4WpqbGNF7WMvYaBQKjdLxFo4OQA%2FEas17vbx6E3lfFHf7fhl5qtGj7Un2M9I5REamruAWbWHbkIXkOjnAAw0HpyGuBqkDyNebscKzor4NUI7ahg0AQA%2B61TTR6r8L7VHiVZ9S15a8bvfwQ3DdBAtHx7Pj6saiYFhsdG%2F2KvpT%2FkwvMnQMg66D2Y9Byyo7E8D%2BxLGESjtPtk0tKBEf7hXZYBgURCK3WoLmh7D7%2Blmp5BkMNgr8xALUldCESYGHkZm12SO%2Bj1G%2FrAd6qYBLPrCNg9kMzs3aSHi1utWfR0t8CEBwvnFIQR%2F8%2BPNvAaZsqpXhpQsWZHYmDSDNCwJ4ivae7Zfw4n%2FCMVd%2F3w4lq2RbPwAFTskTg518VlBhZ1%2FQdBRX5HbSyt0rDhNAovzh%2BI2Kx6LwaACNJOrQtZny3u3%2F0z6jFXaycWuQ4eDjC876A5qtZLlSABuaCoGBg4sOpdzsMjVCjA9EREzVXR37CPlllffn0YoFm4qio6MuRiE5%2FwCjh%2BXN9HxJbkGHzMNKAusQGOqUBCFSxw5NOac6M772LC7DB0LUToUjOcpmLnh7n19h5QpQT9gr9gNU%2BqouHr42ffir%2FAZOKo9xgPn8D1ekMX3NnzHzr7czAW55woaHs5gZUp1gh1d4gab2VTyzzqQudWqGLoRxDZV%2FjbAFrplzHHSda43Uwc8I861SEGPSLm5FH7z1OuKVoCAbKey9ay87GjSQdFmHe2%2FD7DBhujH1WxPv94Ui0fIpe&X-Amz-Signature=de4a05ab917c1cf64b3e0383d2ed1ba2e3aa72476a65078ae16aabe6c1cb56cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNYV74Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOFHFcQgFzF5KEaJtiXig7l%2Bb0lTKzYWRFeWXnxRixNAiEAmN8Veb4NK7OGhNjOi%2BUlZYOBb52SOlx%2B5A2PeFNUFKwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBNwMqP07n7KX9qMAyrcA0EfBwF3HLMUcqNxeg9scz3ETMm5IsHv8PzdhEVzlGQoQijhJmrD4v06GIUDmy1kk3m9A10QCLfYi1sKmx4WB5g88TcgsSBlziHSgHwuEILs3TL%2Fw1VEBbn8yb7GdPiCFPsj34OuIm5xyMInXpvgv4TTwfO0OUsohPCFuaO81NMpKEpGvC4rAhcoxj5He2Jw9n0Yd3TfB1lyPgacx0Wh1IhpjLbXRkVpUPhhlTlEn%2BxvsUtiinXHyzKNQ4kZW4eDFzr6PPNzVKTkYvefDgFqMqmLryIDi5wFtz2KbKcCW1J55dDOUppUg6s2HKNk28uf5JxN55zVxh%2F3TG3TNY3kQYBsOEJtZhXXtQ%2F6F73it7EPukZDqxJQ1wHDUWSO%2BoUvomYev%2F5e%2BZq44jKiPPgwhINC5kQ6A5f9SdQ1lo6xlUr2PAAUk%2Fr06CTccLN1Hf70dfwI6w%2BybAgEeIa0ImhFq97CtwAH%2FzCOxtxsVoXd8coof6cZuWp0gqqIHLtbXRPx0o2%2BbrSZv%2BgCuk0VyxYL6WtG8yiv8xqkXSkIQsoyT9O2XaWISTjCmzV%2BMUBYeBT2BhTQp1YMT2mGuhyaMjcrrL5ELLryH7pgQkXNGgK%2Bbt8vFQvAKLWf7vLWnTLMMNmAusQGOqUB34YGm%2BcrY0d4bNwUjxDBgKgYTX7BP%2FLGHydcaj0a%2F60mZO0RA3%2BY%2B5lNGR2%2BM1G1fliI9lIvxJkvshu4OIYoBrnZiFhVpkEyBno5I%2BOqKwcw0TyzhFLhX0AKFc1P0eIPk2qEHangyP%2FVvrSJAET2rpJ%2Fhv%2By1G7WC%2Be9ApsBqYlQ6XNdf8Kw%2BfLdX8uklGY4KuOYgxqkKsVDo2vMMwnrV4JXGVSQ&X-Amz-Signature=cdc1bf0981bf174caa4f1844e1eace446cced5337bdbac541c39e054262c55e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
