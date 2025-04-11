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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNKMXNZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC3%2BhkgO1A1HPlxYC54YiXJw8npI7jSrxRHcAh1A%2BLgTgIgXUiRCKxWzlC44lt8%2F4m3e4FS3TEB5%2BmTgdrjTssm%2FdsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUqqWSBF80XLNsuECrcA%2BprhgXheUotsnbgKKiFQrQAc9jLlcgASzohZM3mbODiNW7PuQ8xrSJA8uUyDb1TRylewtsh6nvUax96SQ24uLHw6JhPKoK10PPNLL2BHwDUC%2B12T74QIIDAacLA5CFd1hmeHCkLDVcFUgYQ3s4JvEOyjk8t6dHM0JrdfEVjoSNsHgr1t%2BHYlG8YU1RvWc5ypWo3KHrkB0wARMipGjG%2FoRRQV1GuTa3gOGsemIZ4jTW85BCQphaVPF%2F3UYnx%2BaBS3rnY8gbQF%2FgqPPM6UxLbUvrasQNduDQfQB45uBjVadA49nWWlnceHxdRTZ3qgeb02Ne5N%2BsI7CLVD%2FvUDrJcau9nFySTUMhS6hP9JhFN%2FbaY8E%2FGnqig0vFBoehHXlgg%2Ffy4I8LCLLh7cLKMIIpSt7CvqpeXqxnYO7eJ3Hb6K6JlG2GdQ0X%2BG1l4evltBI%2F%2BGptsvtBfIFtKhsnZbQlKzJwdlC79g7R%2BEsNwRxRgdSbzwtZYNv6il2Ph8g96WwM1qYpVKnYRAzTdmpqx5Dv59uVcZYnIXc0Bg0jlFRyAnLWYthzrTg0twn5TuvpRPuC6lZOKZumwJ1vuYVT067URJU2sOW37eEhggjUUEHR6IuiwiKmpBc5X8uJxr70%2BMNKM5b8GOqUBidAxZzDzRsx34BvlsM%2FDRV%2BlAkq0dYrWBRVq%2FpKjdjDTqX65%2BfbVxqcbbgXso4w9NoOc87xwO7D9P2bdAMP0VCu0WyBGzqEeR4EVPzj06TdffiCbUS5jTPWz%2FdRpUwIy4jIigdcEUJ9HgoocDjU0Yqd3MI%2Bj9hI%2F8CKUg5t38p2dGkn7a2zIn3Gtp9GhY6FOEz0rmdGvNGgXeMozTxrjNVJJjmW6&X-Amz-Signature=6f1f12c47669237dc180817348da6f180075e417917cea6894a4a522f4ec8e95&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNKMXNZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC3%2BhkgO1A1HPlxYC54YiXJw8npI7jSrxRHcAh1A%2BLgTgIgXUiRCKxWzlC44lt8%2F4m3e4FS3TEB5%2BmTgdrjTssm%2FdsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUqqWSBF80XLNsuECrcA%2BprhgXheUotsnbgKKiFQrQAc9jLlcgASzohZM3mbODiNW7PuQ8xrSJA8uUyDb1TRylewtsh6nvUax96SQ24uLHw6JhPKoK10PPNLL2BHwDUC%2B12T74QIIDAacLA5CFd1hmeHCkLDVcFUgYQ3s4JvEOyjk8t6dHM0JrdfEVjoSNsHgr1t%2BHYlG8YU1RvWc5ypWo3KHrkB0wARMipGjG%2FoRRQV1GuTa3gOGsemIZ4jTW85BCQphaVPF%2F3UYnx%2BaBS3rnY8gbQF%2FgqPPM6UxLbUvrasQNduDQfQB45uBjVadA49nWWlnceHxdRTZ3qgeb02Ne5N%2BsI7CLVD%2FvUDrJcau9nFySTUMhS6hP9JhFN%2FbaY8E%2FGnqig0vFBoehHXlgg%2Ffy4I8LCLLh7cLKMIIpSt7CvqpeXqxnYO7eJ3Hb6K6JlG2GdQ0X%2BG1l4evltBI%2F%2BGptsvtBfIFtKhsnZbQlKzJwdlC79g7R%2BEsNwRxRgdSbzwtZYNv6il2Ph8g96WwM1qYpVKnYRAzTdmpqx5Dv59uVcZYnIXc0Bg0jlFRyAnLWYthzrTg0twn5TuvpRPuC6lZOKZumwJ1vuYVT067URJU2sOW37eEhggjUUEHR6IuiwiKmpBc5X8uJxr70%2BMNKM5b8GOqUBidAxZzDzRsx34BvlsM%2FDRV%2BlAkq0dYrWBRVq%2FpKjdjDTqX65%2BfbVxqcbbgXso4w9NoOc87xwO7D9P2bdAMP0VCu0WyBGzqEeR4EVPzj06TdffiCbUS5jTPWz%2FdRpUwIy4jIigdcEUJ9HgoocDjU0Yqd3MI%2Bj9hI%2F8CKUg5t38p2dGkn7a2zIn3Gtp9GhY6FOEz0rmdGvNGgXeMozTxrjNVJJjmW6&X-Amz-Signature=d3554e7a72457e3037e7e709a5a54617edd30c69e59cb3c7f26e5f0399fc219c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZDDHCL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDnBMpdoJXZkTqp70oPtL8VIspnh3X7E4hk4GzEUmsjWAiBVKo5XUTvJiBDSqKAiBNd02WkwAWryzuGY7ALbLKeuZyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCUzR5WXNkDpTDKw5KtwDOUdQyjZY%2Fdj%2BGLEQjBPjNFcHSQRMrQHAqJY5GcrLuqbL3kjMYW%2Fo89cN9OGHYpq3NPWFMprghbmOhMqtdrrZOSbHpw12JF71CTED3MfmQkLEb%2BX8GwEa6Li1fpPuBgDiZ27PyLsiK3PLGN5fmGXdLIZT%2BmlbyNKkJK8u6ljgMAfSLBcGsV1RVnUUrrhr3pFf3CFjex2wA6EPuFaa1%2FGbe8F5wYIojdZ%2FwDc2svBwsUKsxKWDUNaj5HRyMDmA92A3ZeYp03N1q0NUQ7Z1ciXWWvmnYY2o65He5xlpGyTO7Rr8jzO%2BeHGT7UetuECCbWJsBZrZnfuBMIqjqIthirss7m2etaEYQy7sKYfv9A%2B%2FlLszdX6uvFwIolxbBoYK%2B7za0B1anvNjEEis8m0L%2BQ0%2FZwXF9L%2F7l75sTMKUUPSjSFxvs3rROZ9PTsIkHaode1%2FBYsZgYDjBdeSKT3mQXcumdwjNtgRJjKevAvg243NUIRybpaJL5LgkGGDwctO5i34FMjM2pDVqPiM69lcy4ER%2BkJYD1pgn2viNY76gCN06Zz94DndC2UOtfhpt5F7bI5LN4qRANcZv%2BdLFOrQAg5xK3DbS2TGnsR1DcguJujHsfrvr78j3%2BXBDJ86lb%2Fow0YzlvwY6pgFcO67lA24U4aGT1jXmFUjZVwhHW0xM8idKBhxII5fss13My%2F%2FIOxdqGum%2FwkUEeo7iviPu3obJ6greS821ruXJJFqVDQHlrYXnpUwxBYDuVrNEv%2Bh4WxpZHZRW6VEb2%2BP%2F%2BlR7RldI3nkdBpwHq21mqo6yPhci6bLopmsqiM%2F1CrCNhI9RNSuxpyzuDe%2FyGtXHPya5hb0Y0yQFWNw8SXI28DgY4gzk&X-Amz-Signature=61c345d95dba5a59a71ae56a2dbc3b20cebe46756d1961a88d721f00f987e12e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB4BTZU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDPLVfREPkEJJWsIsgqFLBIW868bVIkj5Dr%2FGaB3BO7YQIgFMQMDw1Bcm8u%2BL1dMyL%2FcRcIF4aHciFkLUhaXdf%2BMGEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8trDZNC7C6uHmQryrcAz9M1%2BJOwesbbqBtgZ8Z3dHN%2BNGVTwFrKqkwmZVPQL7mKcRNfhIm%2BePoO%2ByptdU6Sr8A%2FyeClPFKdbZFkx3H53q%2B9T56E%2FWfCwaKpFpvHQZhM85z4B1KuC644z%2BWxJ0YonMbHafMSHibMwP%2BiMcbCut4kxtgAm6yeCtyy2UFUND8ggFNc9grChRhYnURyqNE7t7WzZhpA8OODYNFg5PF2IAEdTAq2r6x981pCrohdq%2FQivNjKgBAX7vYCru6pNrB1v7Af9UAvok8wIKrWk5POBGnJbTtrpJFxwx7w8Gap3UghgYYdr0ifi%2F8zuRIvIoFrB71nkdExE2ZSzin3fwF1HQiGXEvsbJGJzytQ%2FNR1qRIjbN9QyWicQnYTFfAOWN%2FgvHQLD8b8mSIn%2FwfZrEjr4ArllEqI8VJTE4uXLvS%2FAgre8hI9k8VJXniiP3lGpd1EAw7hNjAK%2FgMVI%2F57gzBt9DAdN5Pdc9M%2BNL%2FtIoxKnMqQf93kfI%2BgrtJZdxZ03q7hiKOdBpuEMCwtF6U5e1mZyJhrSl%2Fdht0aM4Sv1F7xesslO2Y4yuSCCwP2lJgIfe1d0v8prpjcWJh5LNUZN5yAR5dbd3o%2B3sdt5I4lLQ3vx5FEyKOTLp6esHYSv%2B3MJCM5b8GOqUByvOdDsaQ6S91brpXbWIY7GPv%2F3KwNnwzWEkz05rnwfRh7W9LVeaYSjuCamikvsMGxj%2BvGU8YUY6W7dvBP7WjIKD46bOvge5%2B8xh3xAtVG%2FhbY4JtnqiXf%2FElC3%2BQIIUKn7RoTBQqpPHOz4yvgw3%2BZO6JFz7eSWC3fuS021z7peOKJVcySVm%2FX%2BkLrhunEjTLjVcbyXC69ecFIzOdQOnjdvBC5SC2&X-Amz-Signature=a333b9e64b30db4925b1e225a9f0cc75b9c728b6fea5a8d8b8eefabb9c9fe9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNKMXNZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC3%2BhkgO1A1HPlxYC54YiXJw8npI7jSrxRHcAh1A%2BLgTgIgXUiRCKxWzlC44lt8%2F4m3e4FS3TEB5%2BmTgdrjTssm%2FdsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUqqWSBF80XLNsuECrcA%2BprhgXheUotsnbgKKiFQrQAc9jLlcgASzohZM3mbODiNW7PuQ8xrSJA8uUyDb1TRylewtsh6nvUax96SQ24uLHw6JhPKoK10PPNLL2BHwDUC%2B12T74QIIDAacLA5CFd1hmeHCkLDVcFUgYQ3s4JvEOyjk8t6dHM0JrdfEVjoSNsHgr1t%2BHYlG8YU1RvWc5ypWo3KHrkB0wARMipGjG%2FoRRQV1GuTa3gOGsemIZ4jTW85BCQphaVPF%2F3UYnx%2BaBS3rnY8gbQF%2FgqPPM6UxLbUvrasQNduDQfQB45uBjVadA49nWWlnceHxdRTZ3qgeb02Ne5N%2BsI7CLVD%2FvUDrJcau9nFySTUMhS6hP9JhFN%2FbaY8E%2FGnqig0vFBoehHXlgg%2Ffy4I8LCLLh7cLKMIIpSt7CvqpeXqxnYO7eJ3Hb6K6JlG2GdQ0X%2BG1l4evltBI%2F%2BGptsvtBfIFtKhsnZbQlKzJwdlC79g7R%2BEsNwRxRgdSbzwtZYNv6il2Ph8g96WwM1qYpVKnYRAzTdmpqx5Dv59uVcZYnIXc0Bg0jlFRyAnLWYthzrTg0twn5TuvpRPuC6lZOKZumwJ1vuYVT067URJU2sOW37eEhggjUUEHR6IuiwiKmpBc5X8uJxr70%2BMNKM5b8GOqUBidAxZzDzRsx34BvlsM%2FDRV%2BlAkq0dYrWBRVq%2FpKjdjDTqX65%2BfbVxqcbbgXso4w9NoOc87xwO7D9P2bdAMP0VCu0WyBGzqEeR4EVPzj06TdffiCbUS5jTPWz%2FdRpUwIy4jIigdcEUJ9HgoocDjU0Yqd3MI%2Bj9hI%2F8CKUg5t38p2dGkn7a2zIn3Gtp9GhY6FOEz0rmdGvNGgXeMozTxrjNVJJjmW6&X-Amz-Signature=a7ed186102d0435a7e7eef89329397c9b0670279dc69198d62d805d5fdf131bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
