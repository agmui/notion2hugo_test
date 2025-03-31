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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFEPHB6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC7%2FCHVJuv%2BMBxSt2LNXW%2BLxmtBr8nhYq62nsG%2FB1ZwfwIhALWrZw5PVDtjulH2ga4%2BKg9BuFSVr8FDJBDhn5%2BbyJEmKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy95crXinftk0xRkToq3AN43WF8HIGJfXZ7D571Wzr5yFGEt5ji34YjB5Afk8PnZR%2BHRqj9TM5aNMbZV5w8yT9E%2BqaXNuzJpUujo%2BvbHGIPs8EvWpBARAc%2FfWBQTwf7j4X7KGJyLrUfvht4gydaCl%2BByDo4c7HuT0omzFZlZopDBOwJL3cHe3WonxHd%2BC879rSNB4x17T%2B5KGCWVhUUUwPc2SY3TrQkYmfkwfIvPsDFRQjGvCB9LlFlzCSE5BqB4b9PIf7d3pWHJt5aOGkl7hr4xuINmVWKHS5Anz343jHxMrdbdNfNSnzgNOuKr0YSu56sW39ZZ15SGMDi5hDkPGoVUIQcXiJieFBP5gx9zzyAu%2BYB7TLaLHwxLFfwpPz7lEWGEJ9%2FP60IJL%2FKN0Hrfa8FOFCoONg99kX7GO1%2FJB1LaWpFdhI%2FKiDqPvOB23vVw4LHVZGWtOe25qH2eyMseSiCAhe0vV0n2EumNKlew9L1yhhyM3%2BUh3XhhY87bkFL4%2Bss8ErQa1%2BXuVMdEiAb67kauzspyR0gd6zFVK8ITZ9L5TPVcwrtAdgYhP%2F%2F%2BVHP9TZZ6ImYvIA%2Bg2mGg%2FlguDVPJDwBLBo7wjnlUsOHHU5ErQWRi9bhS9OkwY6jWm5fPXAbLt47SyRkj8En7DDDlKi%2FBjqkAYuCf6r%2Bvk8u%2BmhS6Rqtda%2BvCQ8apKq4JdpaYUr3EeSglTaVVs%2BB7CxDR1ZJOrJBhBJCmYMjonJzvm7j6CCvwcUndhmHISL7thXNg9sdh5mShn9Kl4hRqWutDChh5B%2FJf7aYx1%2BO%2F0tI%2FHmjMpYTbjKcc67vxHOJ8mavDHZ9V5NFRaZOFrdPdvePnhnsdkuVDX%2B34VOUyon87iblAumVNkKE7sEN&X-Amz-Signature=55662b399f4487d1401e9d7efd346d250f5ec63de1060f04a8703fd6bbff301e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFEPHB6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC7%2FCHVJuv%2BMBxSt2LNXW%2BLxmtBr8nhYq62nsG%2FB1ZwfwIhALWrZw5PVDtjulH2ga4%2BKg9BuFSVr8FDJBDhn5%2BbyJEmKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy95crXinftk0xRkToq3AN43WF8HIGJfXZ7D571Wzr5yFGEt5ji34YjB5Afk8PnZR%2BHRqj9TM5aNMbZV5w8yT9E%2BqaXNuzJpUujo%2BvbHGIPs8EvWpBARAc%2FfWBQTwf7j4X7KGJyLrUfvht4gydaCl%2BByDo4c7HuT0omzFZlZopDBOwJL3cHe3WonxHd%2BC879rSNB4x17T%2B5KGCWVhUUUwPc2SY3TrQkYmfkwfIvPsDFRQjGvCB9LlFlzCSE5BqB4b9PIf7d3pWHJt5aOGkl7hr4xuINmVWKHS5Anz343jHxMrdbdNfNSnzgNOuKr0YSu56sW39ZZ15SGMDi5hDkPGoVUIQcXiJieFBP5gx9zzyAu%2BYB7TLaLHwxLFfwpPz7lEWGEJ9%2FP60IJL%2FKN0Hrfa8FOFCoONg99kX7GO1%2FJB1LaWpFdhI%2FKiDqPvOB23vVw4LHVZGWtOe25qH2eyMseSiCAhe0vV0n2EumNKlew9L1yhhyM3%2BUh3XhhY87bkFL4%2Bss8ErQa1%2BXuVMdEiAb67kauzspyR0gd6zFVK8ITZ9L5TPVcwrtAdgYhP%2F%2F%2BVHP9TZZ6ImYvIA%2Bg2mGg%2FlguDVPJDwBLBo7wjnlUsOHHU5ErQWRi9bhS9OkwY6jWm5fPXAbLt47SyRkj8En7DDDlKi%2FBjqkAYuCf6r%2Bvk8u%2BmhS6Rqtda%2BvCQ8apKq4JdpaYUr3EeSglTaVVs%2BB7CxDR1ZJOrJBhBJCmYMjonJzvm7j6CCvwcUndhmHISL7thXNg9sdh5mShn9Kl4hRqWutDChh5B%2FJf7aYx1%2BO%2F0tI%2FHmjMpYTbjKcc67vxHOJ8mavDHZ9V5NFRaZOFrdPdvePnhnsdkuVDX%2B34VOUyon87iblAumVNkKE7sEN&X-Amz-Signature=ebdbc91e06d4c8ba6dfb8a8e62a06638e6e71db982b3546128ac11a2843d7beb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6APIU2F%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHrmpX%2FcqFjTMk90TTSqaGHksDt1F0v6pz7WAMCRqwIDAiB%2FH2GgfykgQAysK4pbOr6o8U18GYqH%2BH178Yu%2BUCpReiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtPbC%2BcJR2I7jOBzUKtwDoADAYJxQQEjafkrc%2B5rbA9FMKlouQmK4cW4GCW2CheR38ps67KRK2QvUHOpKJ4ift4CdO6Y9MPczT5GSUi5L5FABvzQ1cYu4Ro9av3vp7bFmXRB2BD3nT6glqkj5VQrvFKmBAJroH0Ximyy2pmgc9eSy%2FkgAtPHkCkLO2crotTl9i1EY4z6Y5BHrpa%2B5DUrSptrs%2FBHRbyAc1EfwlkxbLJsKpVfTiVFm2410ZCvvo1ezchqWS4emcWUNtW7WitL01qcR4VgiWGjQuJ6x6rkHtBAydR2cH%2FzCFRm7DGiv1rEQ%2BO4F7%2Fv8Nz8CGi5x7GzywIUrVMtuJMbhayfRC6V8Ta6aVP%2BpQIKDrzZGJa6K9fYNjMJ5OeRGHO%2FOq4kKDRYq8M7rGVwzo3ZYtIbLFrSfRfwpwedHmDG06Xc9D8rkzZeCSoz34ar0mTdTMXjaDjDawGFq5NsvhUvVCl8thUZpgEkd04AfqTlHr0Zi1Nv4TWtOZUu6%2BA1IwcPvHhiBJ%2FfODFCUMMlhve2%2BzDg%2BCiIPS7ETaa7iQehiwz6BOcJb4gyf6l0MmwK594z50npuTZJzCoZX5CFwnI8VivYi6YAeCgJTgozGuWhO9Omz0QUVdZDlXy6T%2BBelNpnBU2owiJWovwY6pgGhH8JC5hgCM6CWiKez73R1TWoNO8HREEocgdUg%2FzEZY6hx7mL3zZRZeUed8lzk99IPTBRP4RxHZv00ISdruKpM7b%2BlwbMCnjvQaKFMSj6khglrFz65Jkn576T24XmCU4BwrUeHuQ5TRQUAJEc6qt5EwGVOOaK7cywdTxzdhSIlrQehj3WPnf08GytGaRlSqyMEPjLmY1WMiGIPhN5X95EOFHaTKv5q&X-Amz-Signature=94a504532c35c9a18466cfbe3ebdece6e15919e8b21fd9b6b0c9236a887df118&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDRGUY66%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBC28BrhXbRdAi2CbHDCmrB3yr1r37cbL91ehRcS9RWTAiBRmM1cZx2o6equ2qiJjN8LFNuIMd%2B6OaPhniOveaP4uiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKsUg2XnPfWRchhI6KtwDVYdE9H%2B%2BEwg%2BK4D%2F%2FDwFPk53aXCr6k5vS9FTQsK1IMglXZi3Sb%2FHOu3K2XgMXYxJQ3ashbdFpKNS10l9POGj03yQzvN2p1MsnkpEyW4HCC0rIRNMt4jH6JIeCOPZTc6ZonA1IXQ66KZob9r4Durz8M%2B1zfa49ek0EbLp28k0TShdYjvNBYbDLZE2YR5rkvp4U4%2FWPwsqHsPRKaz3Roxdm%2FQLS9s%2Frv8RG2KKX1XwXeETlzjNVp5wXVTXmHdwMjDhlCn5igSurCO0MgggQZmtAb3wP%2FCh94wdkGt%2BxkmzrNDzxhSS%2Fze2hjcAPfNS2etJ8jfuhUpALJdcgoWUy%2FhUrSdR%2FLaKU6o4g1ZDByUn%2FGfyPIbEv6bHXDMlCRMaqfPlRhVUOLBELDhSy5R2izprpPx3DLMn63LZQYQEtLxSTkQG0sZyUJ21mTIJph%2B3rAarWThF9SlipTQku1QEY86oMXKr1OI2j9N2EdDwmJAyZHsJhpPm0zW2DOWdWms8%2BaDg4krVJhcy5xa%2B%2Bbzh7WJVM0ir27RgGDvjVlVdRrxb9ITyjPwatnssPlzQ%2B4FUojQL5VEIW9JUlcBlWNWrcRaig2MTfOVRuJ%2FXNiHn6KH3wZphboxaL%2FVBzsDd5uUw8ZWovwY6pgEml7Vjj7zHdoVj0mYG5eAtB%2FJ3XXRY6ZorpjgsXiFPi6%2BZZ6QCrcaRTZowcw%2BasQ%2F1us381Iu9eCxjaYrKzTky93uXSPktLVh8jGpxyeQE2JQmRJTjYReQTDH3mvf8Pu7J4Mec7zkjTzz8JW%2Feyaj0287vlOULUQKZ25nVMsV4RPu15tZq8v%2Bg%2FutVAsAy6UsuomV0sdjKtE0pPnammeOYBDBsHpev&X-Amz-Signature=c4a56fcbcbe2d70a1578b9a98ff80859ac1f46a78a8d92a77e193c7188a1dc9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AFEPHB6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC7%2FCHVJuv%2BMBxSt2LNXW%2BLxmtBr8nhYq62nsG%2FB1ZwfwIhALWrZw5PVDtjulH2ga4%2BKg9BuFSVr8FDJBDhn5%2BbyJEmKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy95crXinftk0xRkToq3AN43WF8HIGJfXZ7D571Wzr5yFGEt5ji34YjB5Afk8PnZR%2BHRqj9TM5aNMbZV5w8yT9E%2BqaXNuzJpUujo%2BvbHGIPs8EvWpBARAc%2FfWBQTwf7j4X7KGJyLrUfvht4gydaCl%2BByDo4c7HuT0omzFZlZopDBOwJL3cHe3WonxHd%2BC879rSNB4x17T%2B5KGCWVhUUUwPc2SY3TrQkYmfkwfIvPsDFRQjGvCB9LlFlzCSE5BqB4b9PIf7d3pWHJt5aOGkl7hr4xuINmVWKHS5Anz343jHxMrdbdNfNSnzgNOuKr0YSu56sW39ZZ15SGMDi5hDkPGoVUIQcXiJieFBP5gx9zzyAu%2BYB7TLaLHwxLFfwpPz7lEWGEJ9%2FP60IJL%2FKN0Hrfa8FOFCoONg99kX7GO1%2FJB1LaWpFdhI%2FKiDqPvOB23vVw4LHVZGWtOe25qH2eyMseSiCAhe0vV0n2EumNKlew9L1yhhyM3%2BUh3XhhY87bkFL4%2Bss8ErQa1%2BXuVMdEiAb67kauzspyR0gd6zFVK8ITZ9L5TPVcwrtAdgYhP%2F%2F%2BVHP9TZZ6ImYvIA%2Bg2mGg%2FlguDVPJDwBLBo7wjnlUsOHHU5ErQWRi9bhS9OkwY6jWm5fPXAbLt47SyRkj8En7DDDlKi%2FBjqkAYuCf6r%2Bvk8u%2BmhS6Rqtda%2BvCQ8apKq4JdpaYUr3EeSglTaVVs%2BB7CxDR1ZJOrJBhBJCmYMjonJzvm7j6CCvwcUndhmHISL7thXNg9sdh5mShn9Kl4hRqWutDChh5B%2FJf7aYx1%2BO%2F0tI%2FHmjMpYTbjKcc67vxHOJ8mavDHZ9V5NFRaZOFrdPdvePnhnsdkuVDX%2B34VOUyon87iblAumVNkKE7sEN&X-Amz-Signature=b83f8af9d8a889c71cc650e11ec123a33188b4cfd1b171a705085ffa78842124&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
