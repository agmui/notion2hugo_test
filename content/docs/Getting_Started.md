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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULU7X2J%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2w%2F9n3FRJXOyK%2FN7qNObPxYRwIWR2cT4%2FV6GTb%2FFFsgIhAJVwLOaQ8GsyqJLGM7JSiSEsmpUDF6ZsBH4KjHcgwYZiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydMzXJm%2F22X8Vnahwq3AM5lLLX0RzolSETr%2F4lyYmY%2FU0AWY%2FCg4F2ofuZPnZz8nRTha6jQKLkAsmrAXiHniA60UARdi6wbazThLRszVIjNniXpd98DYnC2q%2BIYigsBZNlCdmrDSqjuXQ3m1KaV2CEsjlOiQ725QDQZc9EmHaBhNF%2BboDMZS05SvKooAiJIaCZam0CaDiG%2FmpTWT7K99IXXV0Xv1SSETD%2B2GRPC0H5lEZJlbXmXZ0dNWX6Z3bLQYEuWrqsc5xdpo62WnxRLmODqiubLleK4MIMnERgzTSrQ3Z0SNZ9Q2FOOk2dJl7h0cNpX49%2BfjKqT%2BYCg4cp7ffzUdkqf%2BfBN8nO833z%2Bf%2Bk5tFfQgsfZtmg%2FiWe%2BpWINynIAnva5i409vNpCE7Cn2kxuc1sHnSTMUyKfRPXaltzjBrSSSi0lAQy6Wfz52rnDZeH4mujLiRq4HlgwzZlFQzUEGx%2FNKvyHBrgG5n1yqQIOnMgANV2ciFfQqg7uuyaRh5eTmji6WZHxWwezNfCG%2BCE6NgMPUIM9w%2FXynJSI%2BRD1StnXPmqXBhXcjdvEM3yHpQJGdEGJuThC3qehKJAMz1nKED6t4diJL3RZzqddZMHhnfJUXa6R1zxLlmPyf1LuO1zd9%2BkZoatL4DgLjDiyqPEBjqkAcnnUca2BQyuAqK7athzD9119Y6iOV2NZZxAqmS6NSXP7qEVDSn6qEGCkG52jrTBBgKN8917sTLrYsU9%2BO7UgAC%2B%2BlovVDqmBWz%2Fdy9fpzoiE5fNWjW2kkme9c9dpYxAnaKTy6SpaMTVAP6%2BvWz2rjGIgGcVof4l0tW4A8EBQECBihaFNU3lDNqXrd3f56znsbCl6ORGHEY42RZ7kxNjnfNXJt4l&X-Amz-Signature=c76b0ec00b1cb883a97e10bfdd2cedccc0102c49426f69a2a564c25f380d80cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULU7X2J%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2w%2F9n3FRJXOyK%2FN7qNObPxYRwIWR2cT4%2FV6GTb%2FFFsgIhAJVwLOaQ8GsyqJLGM7JSiSEsmpUDF6ZsBH4KjHcgwYZiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydMzXJm%2F22X8Vnahwq3AM5lLLX0RzolSETr%2F4lyYmY%2FU0AWY%2FCg4F2ofuZPnZz8nRTha6jQKLkAsmrAXiHniA60UARdi6wbazThLRszVIjNniXpd98DYnC2q%2BIYigsBZNlCdmrDSqjuXQ3m1KaV2CEsjlOiQ725QDQZc9EmHaBhNF%2BboDMZS05SvKooAiJIaCZam0CaDiG%2FmpTWT7K99IXXV0Xv1SSETD%2B2GRPC0H5lEZJlbXmXZ0dNWX6Z3bLQYEuWrqsc5xdpo62WnxRLmODqiubLleK4MIMnERgzTSrQ3Z0SNZ9Q2FOOk2dJl7h0cNpX49%2BfjKqT%2BYCg4cp7ffzUdkqf%2BfBN8nO833z%2Bf%2Bk5tFfQgsfZtmg%2FiWe%2BpWINynIAnva5i409vNpCE7Cn2kxuc1sHnSTMUyKfRPXaltzjBrSSSi0lAQy6Wfz52rnDZeH4mujLiRq4HlgwzZlFQzUEGx%2FNKvyHBrgG5n1yqQIOnMgANV2ciFfQqg7uuyaRh5eTmji6WZHxWwezNfCG%2BCE6NgMPUIM9w%2FXynJSI%2BRD1StnXPmqXBhXcjdvEM3yHpQJGdEGJuThC3qehKJAMz1nKED6t4diJL3RZzqddZMHhnfJUXa6R1zxLlmPyf1LuO1zd9%2BkZoatL4DgLjDiyqPEBjqkAcnnUca2BQyuAqK7athzD9119Y6iOV2NZZxAqmS6NSXP7qEVDSn6qEGCkG52jrTBBgKN8917sTLrYsU9%2BO7UgAC%2B%2BlovVDqmBWz%2Fdy9fpzoiE5fNWjW2kkme9c9dpYxAnaKTy6SpaMTVAP6%2BvWz2rjGIgGcVof4l0tW4A8EBQECBihaFNU3lDNqXrd3f56znsbCl6ORGHEY42RZ7kxNjnfNXJt4l&X-Amz-Signature=2662df7d3e90133f0a9db2abd17f660b15e2cd0bd5b82bf720dc86a0df01e4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULU7X2J%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2w%2F9n3FRJXOyK%2FN7qNObPxYRwIWR2cT4%2FV6GTb%2FFFsgIhAJVwLOaQ8GsyqJLGM7JSiSEsmpUDF6ZsBH4KjHcgwYZiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydMzXJm%2F22X8Vnahwq3AM5lLLX0RzolSETr%2F4lyYmY%2FU0AWY%2FCg4F2ofuZPnZz8nRTha6jQKLkAsmrAXiHniA60UARdi6wbazThLRszVIjNniXpd98DYnC2q%2BIYigsBZNlCdmrDSqjuXQ3m1KaV2CEsjlOiQ725QDQZc9EmHaBhNF%2BboDMZS05SvKooAiJIaCZam0CaDiG%2FmpTWT7K99IXXV0Xv1SSETD%2B2GRPC0H5lEZJlbXmXZ0dNWX6Z3bLQYEuWrqsc5xdpo62WnxRLmODqiubLleK4MIMnERgzTSrQ3Z0SNZ9Q2FOOk2dJl7h0cNpX49%2BfjKqT%2BYCg4cp7ffzUdkqf%2BfBN8nO833z%2Bf%2Bk5tFfQgsfZtmg%2FiWe%2BpWINynIAnva5i409vNpCE7Cn2kxuc1sHnSTMUyKfRPXaltzjBrSSSi0lAQy6Wfz52rnDZeH4mujLiRq4HlgwzZlFQzUEGx%2FNKvyHBrgG5n1yqQIOnMgANV2ciFfQqg7uuyaRh5eTmji6WZHxWwezNfCG%2BCE6NgMPUIM9w%2FXynJSI%2BRD1StnXPmqXBhXcjdvEM3yHpQJGdEGJuThC3qehKJAMz1nKED6t4diJL3RZzqddZMHhnfJUXa6R1zxLlmPyf1LuO1zd9%2BkZoatL4DgLjDiyqPEBjqkAcnnUca2BQyuAqK7athzD9119Y6iOV2NZZxAqmS6NSXP7qEVDSn6qEGCkG52jrTBBgKN8917sTLrYsU9%2BO7UgAC%2B%2BlovVDqmBWz%2Fdy9fpzoiE5fNWjW2kkme9c9dpYxAnaKTy6SpaMTVAP6%2BvWz2rjGIgGcVof4l0tW4A8EBQECBihaFNU3lDNqXrd3f56znsbCl6ORGHEY42RZ7kxNjnfNXJt4l&X-Amz-Signature=c52c6a6597f3b7d63e5865dae9b8bd8732394d098f930006784c0e515e819bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKUFESQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FwqRZlskGRVWQXivouVaBk490oVMO3lbhXZrXuXhs1AiBH4YFBgDSfuRct5bCkrfNOZwxgugMuNEKJ3ocZ%2BNa5%2BCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd2kpzDV%2BfEdXs%2BAwKtwDQ5kKg2glZV1e37gmX4NGptiFw1XhMb%2BXPUtczAKIPZSlOBqXIqKufzHo0wWw1F1Qy2o2T8s1Nbq%2Bj3Gw57SVEMCFZlgKvi9T8wwXocQlUhvk7LRtpTsfrFD0RnPYU5Ne7YV%2B9ElONZHmcSj4d1FZYO%2Fo%2BYE8HfQIxNoFfuVSHkB%2Fz6Ij6fBpJWFhCp7n2sJUHlcRlS7Hw3FSxUjulM03KnyVg5xDqPDEbj3qoQTvTY4CjimeG%2BbXKlV7g%2FI431TXwSBxg8HFvZh7%2Fqpw4JBAkJIZzfXL0HOohxXJRdlRU741XfWc3JVFhdPRbA17DwP17wjiAuRncKF7ISYIaj2tW1AdVO5f2mRUeJLLqqjsqbqa59UgmnfEWma%2ByqdnLYwq%2FWshYuNRHLxzZxZqLbAmvK6pE64Fa%2BTYPRvOIkmUcQ6BlGbRvcfRCI9htBpiyVqYV%2FRwv73EeN4kMRozpYlgZIVFiRCwdopEoubPK%2BlM55Zz6FBvT38%2Fg5aWgXovQEvhHCSHDHKFMXaSDCobcZvI2u%2ByqTfA2t4PwmJdDicLE43klbN1nUYLjzIMcRNxEn%2FfpSkX9XootNcs84L0cM%2FvHr3jl9eghODEOybl2vzMH9O6j8F0RREJdmY4lOswvcyjxAY6pgEstjkCuTRWRK8Lsn0HjJT3Ouw439flrtScbDd0MQDVwcwF%2BdVRxp5LZFk5ePMHWXlUV2HQ9I81MQJrb9NSy0YSlRL3hGO275A2bjHhD2GNMCm2GR6VLnpQYXIY9po7aaYCk%2BVwV%2FyJM53rmg%2FIRhg7ZdrDvklu5VS1YtKn%2FYngDLMOydb7ibk8g2GC2HObrrh0kJHxy64ZUd4rY7mCMzgub7Kd6kcf&X-Amz-Signature=717b8eb65714dac2c9650c124eab41777f826d5f6205ea265f1d625b8ea29d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCRNB2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxGHOsCeO8lP3VCQW8QaTwt9o0npkYU9Uq%2FRmqo3eObQIhAL2Q3pc4ji7X67KiURtM8wXIBsP0%2BhT4Rf1I%2BNZdLyGjKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJZXVlZNQPLHrw7wq3APjRUMhqlHCxJi4bNlMNse64R1%2B7QIQUvlgnbJVc7sK86oHSesotJEfslRAzR0G1D9Nnrc%2F3R2BZuiEc40FCQOoTMRR0rAzMCOmGVsaSB5wgBMVl1QVeZc0CSebimwmK7XJSctIcIAx7imbD4p2ANUt%2BHbkTqf8Zio5bQVGzF6aOOXupYZo1%2Fgr9vQqlwUQzbsB7X2CCg8mNcMhrOqvGduKf98lDS0lItbnMl78i5dzUVxr2xwy2TUlRML6vM4dIdEKFd1jKhKCYXgnqvzlEVslwBRFYDPaLzPOx45%2BODdmhijGoI6QsdLuD1JNANoat7NA0Oe6%2FvzMGwsh3NpKSi3Lk%2FZi4Rf0eouHDRP%2Fii82P%2BxPu%2BuA0drQE1142DgCEbY37TcI78zncAdGeZmbCeBJw1Q6On53aXNjCPN0Yb8F7D4gPGUvmA3vm6juikKpkEBxZnmlf8UA2gkUCCisj%2FOaFSYDRP2iKmGzSNAMqZ%2FkTNV2c1Q03eAZvM2ZVMewpFF4yH2qf7QaxoeDMO%2BX%2FTpzzpr3q%2FBb%2B%2BCAu%2BWGEl%2BBksWRLIFq6nj3gNgGKO932uhTfZ0%2BQJjYlpmLZu0VxI0sWArYVhwm0z2WBxswdPbvoP8UOYrQYWCLjxCJADD9yqPEBjqkAauCA2wCXk7FlIe2QbPnlLkCUVmd8tUD1eDIOJl9Q2UhY9LhvP%2BQY4AgCjvc6cnmxM8LO3gX0qkmwfj0EEcgwbzgfEOmNj9iwjVm9%2FO2MvcTDzdlGRgI7pUxvM1SCBaSoOfFB45%2B6L2S3xly4t%2BDntG6n30oNdwq14bnw6qkLbQw%2F2J4RBk%2B8cQWna0Az07v1hLcRutjXct82NnKzUiDSS2m6HS%2B&X-Amz-Signature=7299527eccd70e8570d4224c56217a3c8e6e60bdf34df7a5a8d779cb55b6dd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WULU7X2J%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2w%2F9n3FRJXOyK%2FN7qNObPxYRwIWR2cT4%2FV6GTb%2FFFsgIhAJVwLOaQ8GsyqJLGM7JSiSEsmpUDF6ZsBH4KjHcgwYZiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydMzXJm%2F22X8Vnahwq3AM5lLLX0RzolSETr%2F4lyYmY%2FU0AWY%2FCg4F2ofuZPnZz8nRTha6jQKLkAsmrAXiHniA60UARdi6wbazThLRszVIjNniXpd98DYnC2q%2BIYigsBZNlCdmrDSqjuXQ3m1KaV2CEsjlOiQ725QDQZc9EmHaBhNF%2BboDMZS05SvKooAiJIaCZam0CaDiG%2FmpTWT7K99IXXV0Xv1SSETD%2B2GRPC0H5lEZJlbXmXZ0dNWX6Z3bLQYEuWrqsc5xdpo62WnxRLmODqiubLleK4MIMnERgzTSrQ3Z0SNZ9Q2FOOk2dJl7h0cNpX49%2BfjKqT%2BYCg4cp7ffzUdkqf%2BfBN8nO833z%2Bf%2Bk5tFfQgsfZtmg%2FiWe%2BpWINynIAnva5i409vNpCE7Cn2kxuc1sHnSTMUyKfRPXaltzjBrSSSi0lAQy6Wfz52rnDZeH4mujLiRq4HlgwzZlFQzUEGx%2FNKvyHBrgG5n1yqQIOnMgANV2ciFfQqg7uuyaRh5eTmji6WZHxWwezNfCG%2BCE6NgMPUIM9w%2FXynJSI%2BRD1StnXPmqXBhXcjdvEM3yHpQJGdEGJuThC3qehKJAMz1nKED6t4diJL3RZzqddZMHhnfJUXa6R1zxLlmPyf1LuO1zd9%2BkZoatL4DgLjDiyqPEBjqkAcnnUca2BQyuAqK7athzD9119Y6iOV2NZZxAqmS6NSXP7qEVDSn6qEGCkG52jrTBBgKN8917sTLrYsU9%2BO7UgAC%2B%2BlovVDqmBWz%2Fdy9fpzoiE5fNWjW2kkme9c9dpYxAnaKTy6SpaMTVAP6%2BvWz2rjGIgGcVof4l0tW4A8EBQECBihaFNU3lDNqXrd3f56znsbCl6ORGHEY42RZ7kxNjnfNXJt4l&X-Amz-Signature=63e7106d9b5f34c6a80467cfac6cf616d1a83295561c2a7f6553db63a6104abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
