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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YJNVXJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIqRxNc%2BNtEkAY%2FbsgcDCXkO4%2FRjrN1rrJCetZtyrieQIhAMb1kQbVdtHZ4Hh4lgnD2wNCsZCit9hfrD9v3SNG3eNlKv8DCDEQABoMNjM3NDIzMTgzODA1Igxycm4vi85Ah%2FkAmv0q3APUedGo8FIXMYnZbzKyv3wfVUOXnyEdX30ukaa99whhEUgpl%2B9hehAHhX6suPPe1SjVidPgPkj5k5rfA7v6On8OXSaPLbD8kNUHgid9IqZAy8NSQKRvMsu33uM5lCmQ2drwA7vM7a4uTt3y5VD%2BF9URiFKt1wEB39xBLEBSyvchdkXKwSwX9eigF0DF0BuCAF1nzEoLZhY6hr6aUgu3dyn1%2FkZbinKAFg%2F0SmBF%2BQN6m8uOu7rzS7vzpU9tZ%2B4oI9B04W17MBJ1u2cucjlQzlHlcijcIz1arMl81RsGR8UGiZvd5n8PFeTxCs3UvzFAwKnSqpDMg4J3a1eEJ7jD%2FmgIXb8qXx8NAay0fF0mRErpexuKByehvMFDltyK3RjVZ2ZJS0PLmhr%2Blyy%2BBAN1rQFFNeKXjegf9G%2FLNj2Px9lxqK0fq4cgLMbnbFxlpcsUsb8K0g7axmTAUYOBWkEnnn0aYOpbqE%2FsCxItbEFKpFYsVar4NPrsXStz22fSpKRiM9FqL6H7cXiRcqHBvZPAlHEh07TljPFUaTI1zsZxJETSmiTvcjWVZ3kDYKHvIshl4eFtdfZ07B7VAPO9xdUQiwEiOrp%2B6YzUeOcWEAPku4X%2FuBYfmhQpDJ7X9hLnmDDG3tu%2BBjqkAVq8IwkzzsHxq2Rcd2OF%2B5ZfMFAp2ao5jwYDgrVtIOZerj5sR1I2YdRO4iKhv%2B4drFLCn3FthlPb8VeeeC5z50pQaJL70OZpmtFQPzTQy72QbfiphA%2FDXsssTPlB4zGVwVv64fjqM14dIZfobGi2RgCCxDXSYbz2LCr7AuyX4fnhj4pYjDlpibGC%2BCiKQu17T0EhcyZS2JvpL5Hl8aOB2YgxLWS3&X-Amz-Signature=c76cb3806fe3d045315ac6b06380a7e911b9bdc4421b694c23ee5518fe32876c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YJNVXJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIqRxNc%2BNtEkAY%2FbsgcDCXkO4%2FRjrN1rrJCetZtyrieQIhAMb1kQbVdtHZ4Hh4lgnD2wNCsZCit9hfrD9v3SNG3eNlKv8DCDEQABoMNjM3NDIzMTgzODA1Igxycm4vi85Ah%2FkAmv0q3APUedGo8FIXMYnZbzKyv3wfVUOXnyEdX30ukaa99whhEUgpl%2B9hehAHhX6suPPe1SjVidPgPkj5k5rfA7v6On8OXSaPLbD8kNUHgid9IqZAy8NSQKRvMsu33uM5lCmQ2drwA7vM7a4uTt3y5VD%2BF9URiFKt1wEB39xBLEBSyvchdkXKwSwX9eigF0DF0BuCAF1nzEoLZhY6hr6aUgu3dyn1%2FkZbinKAFg%2F0SmBF%2BQN6m8uOu7rzS7vzpU9tZ%2B4oI9B04W17MBJ1u2cucjlQzlHlcijcIz1arMl81RsGR8UGiZvd5n8PFeTxCs3UvzFAwKnSqpDMg4J3a1eEJ7jD%2FmgIXb8qXx8NAay0fF0mRErpexuKByehvMFDltyK3RjVZ2ZJS0PLmhr%2Blyy%2BBAN1rQFFNeKXjegf9G%2FLNj2Px9lxqK0fq4cgLMbnbFxlpcsUsb8K0g7axmTAUYOBWkEnnn0aYOpbqE%2FsCxItbEFKpFYsVar4NPrsXStz22fSpKRiM9FqL6H7cXiRcqHBvZPAlHEh07TljPFUaTI1zsZxJETSmiTvcjWVZ3kDYKHvIshl4eFtdfZ07B7VAPO9xdUQiwEiOrp%2B6YzUeOcWEAPku4X%2FuBYfmhQpDJ7X9hLnmDDG3tu%2BBjqkAVq8IwkzzsHxq2Rcd2OF%2B5ZfMFAp2ao5jwYDgrVtIOZerj5sR1I2YdRO4iKhv%2B4drFLCn3FthlPb8VeeeC5z50pQaJL70OZpmtFQPzTQy72QbfiphA%2FDXsssTPlB4zGVwVv64fjqM14dIZfobGi2RgCCxDXSYbz2LCr7AuyX4fnhj4pYjDlpibGC%2BCiKQu17T0EhcyZS2JvpL5Hl8aOB2YgxLWS3&X-Amz-Signature=ab5646253aa7a6a35df7779e6d62a6f46a989c8413fc4a53701e750fcdbd79a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4HJE33%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqBtMp5N%2FFyMDZl2MWZYOaYWu1z5Kmv03ijaTkvEz1qAiEAkDzlii09Amgd5OSkbUwDsfJSccy8qjwha0oAQR2LExYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDH5Air6pfeTONzuBRyrcA%2FuYc%2Fg35tXwGgWqs1Iw7Ft4GAuuR7HgcsEhXh%2Fl1dmveEiqow%2FCsEOy%2Fl56HkQLB1C2fc8YLhZm9CjOQKrs2v1bXlHzHmspR7Vm1e7AraJB4rvrDR%2By0%2BgvsLqCRPQKYaxy%2By%2Fd%2BiMAxwFBeJ39H88NOWAth8jvYUtDA89T%2BjNMBbzMy0mDTiH%2FR7GT4nRdSrHOwoR%2F8csVZ56aoEyw9qJvBhWToaV4U6tbpcmKh908%2F1QovszdK%2F564r2BDbHTs1jDUdTzRjiEkLS4lbcffBwuUI5cT0UvRK8TbBeiWKRrJQRQYtGVsFac7t4XPQP1D74gTG18ybsDyuisI7n8XDfxNagH26wMmUV7yx6DFZmYxr4DAJvhQdpdU0cLHobDY%2Fp0fu0ohVNz0qPx4hlTvUWViLHjQw%2FwXUQl6vCD5AvyQ0Q27IXsUXDkgSdS2EX3ML6Y6wVYbFtyam9cVcvr8YErwXJEW0WrWq1Kid8RD3Miis1OIm5IVsWDj9cfuXv3JTQzvxkj%2FhBOjB7HjBlq4oExy8QM6YbtkUKuXaL8SEkteAS4nRs8SFxNjpkcDygVD9386Gz4jItUHQ3cpoRGHxNw5cFzjC3oY2DNaZqORtCNC2bajEre%2FQx6Qu7pMOre274GOqUBWMhjW3Rw33l2d%2Bs5xOAjdsi4F91nnTnYRR2OKY51WBrMZ94C3Mr39MeOOncEzj2j0q5aILLidRMF%2BJ9fKwnMcz5oCJFzYsWNTNkNnTvwrQ6GISSm9p1UKBOknX09bGX5qWdAgtLszKGH%2BHTa6Puj00q35ejZQzmyW98hJ0bPK86V8tIoGhJ4topjkqbM4Ggbn1w80I0yjqPxB4hKzXwG%2BZ9aDCSM&X-Amz-Signature=198d9b9186c7b67523afdf03d7b8fedfd84f7d32f36e05573dd01da00b9a4eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMETJJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyxtqaopTz5W0t1KHmqTSAe5vDPlMo1j4IZY0t7HPpRAiEArYfzFwgBWLWE%2BqNUf7jTTWRBJI463oBdVEG6FCRs%2F%2BIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPcou2FXWpkmuJL43SrcA6TIxz4Kt4By4VFkLZTR%2F8h4cbDZ%2Fc6%2Bp2qWXY0j40pyQyNhWNY9Ym0MbnJgO8Ds%2BieT7VcZfZs8n1faaih8sF1kBqhLvYEURJquC3Qb9rL7VThDab5vis3wX3fkwlAOVSimFwMt%2FeyDXTHLNuyYj%2F5w%2FgK9h7ZxEY33io7oC%2BdDNqgwYdJKPYY9x%2F9ZSox1BsntPQGM51prfqeutetXzDkw9KbjfbqpXMq7yQ5c6Zi8Aob8U1lDooDhSEspyWl5wSdL7smfn3XW5gy8T3iTgxf9Dhnu%2FZiFkXnNc3Y96VFsMLtq%2BEAKSuzWpiUSrC9bVYIDDZDbSvSPmTnAacX4tk4PcdegH00VgHfS77lcLMpgrphGKANe%2Ff6MWxMzjiz2x7I73e7uw7eGo2Ues7X4q9beC8kUhe%2Bzs8RTAg5bu%2BAInPwh6AKLKea6mO4sUmz8FLooc5Buy0GWnBy6WUzndcGSvFXTLfCXiyp%2BLrIPXgVC1oawGV4nPZbHKvg%2BwqNVDN81SlcVEPQk0LG7E6Q9IiTol8jrWbAu3Yeb6qxGAzxbbSZFyaXyBoQR10hv8d0eDBdYT5XZ2zXswnP6vNVTwG3P%2FipU4u504Gs8WN7h7omi0CYKyPlVoPMIWBuHMMfe274GOqUBkY6xCrjLk39lqHVireUAcswBRU%2FRAvQl7ZaNyoKpIN9%2FvvAnrsgOxQxxD7jZJQCbV6HUWwIAsWsNJtZL69476Q9tuTlX0nqlLnb%2FPwIKpY5fJveaWe65mLwQ2WV9Sa7LXbDdd8ptRUM95wWB1DT8BkWQDbRej3QwuQDV96fEH%2FcPNE4YE9wXwlE3L79hQUXSPmmS4zd5qNOtrlSJpvb6qvSCKtOJ&X-Amz-Signature=138cba826a527e70f747b08c2d92b13213563c9e3f768bc8135e9c68ab88117e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YJNVXJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIqRxNc%2BNtEkAY%2FbsgcDCXkO4%2FRjrN1rrJCetZtyrieQIhAMb1kQbVdtHZ4Hh4lgnD2wNCsZCit9hfrD9v3SNG3eNlKv8DCDEQABoMNjM3NDIzMTgzODA1Igxycm4vi85Ah%2FkAmv0q3APUedGo8FIXMYnZbzKyv3wfVUOXnyEdX30ukaa99whhEUgpl%2B9hehAHhX6suPPe1SjVidPgPkj5k5rfA7v6On8OXSaPLbD8kNUHgid9IqZAy8NSQKRvMsu33uM5lCmQ2drwA7vM7a4uTt3y5VD%2BF9URiFKt1wEB39xBLEBSyvchdkXKwSwX9eigF0DF0BuCAF1nzEoLZhY6hr6aUgu3dyn1%2FkZbinKAFg%2F0SmBF%2BQN6m8uOu7rzS7vzpU9tZ%2B4oI9B04W17MBJ1u2cucjlQzlHlcijcIz1arMl81RsGR8UGiZvd5n8PFeTxCs3UvzFAwKnSqpDMg4J3a1eEJ7jD%2FmgIXb8qXx8NAay0fF0mRErpexuKByehvMFDltyK3RjVZ2ZJS0PLmhr%2Blyy%2BBAN1rQFFNeKXjegf9G%2FLNj2Px9lxqK0fq4cgLMbnbFxlpcsUsb8K0g7axmTAUYOBWkEnnn0aYOpbqE%2FsCxItbEFKpFYsVar4NPrsXStz22fSpKRiM9FqL6H7cXiRcqHBvZPAlHEh07TljPFUaTI1zsZxJETSmiTvcjWVZ3kDYKHvIshl4eFtdfZ07B7VAPO9xdUQiwEiOrp%2B6YzUeOcWEAPku4X%2FuBYfmhQpDJ7X9hLnmDDG3tu%2BBjqkAVq8IwkzzsHxq2Rcd2OF%2B5ZfMFAp2ao5jwYDgrVtIOZerj5sR1I2YdRO4iKhv%2B4drFLCn3FthlPb8VeeeC5z50pQaJL70OZpmtFQPzTQy72QbfiphA%2FDXsssTPlB4zGVwVv64fjqM14dIZfobGi2RgCCxDXSYbz2LCr7AuyX4fnhj4pYjDlpibGC%2BCiKQu17T0EhcyZS2JvpL5Hl8aOB2YgxLWS3&X-Amz-Signature=47600082fc4d522116a99fbfa028768747994fe93e5cdc5f5997c3e481d9efe7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
