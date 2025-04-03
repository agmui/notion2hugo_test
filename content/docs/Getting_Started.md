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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWUNOD5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDifvwe5B515nZT8V65r%2BhqGyzZgMPGMeJwN%2FmFAfUtQIhAJZD1GKTzXI3wV4wDFr%2BSBcW7Zeoxx00gOrB5Mh8oAzNKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKPHOvnRc0s0oJ2wAq3APW19dSZMLjbjiqXoRT6jFsAl1W%2BLMfm2drOnDzfkPAmAZcPALnOI0xteS%2BnZmLhF2ojDS%2Fz3mZ060mC52Ha6MoIiwGJ1WN%2Fk49CH7ZjiXVsafAoPRgVmyJqhCIL%2Bv62uF0YR9lWRVmLr%2Bus03BdZG0fXu3y%2Bz2WopZQtEqYIjIJrWsJ2ZXKCjIZG1%2Bp2W5DxrtMaioYdjAFTcZhv0z8fbP%2F7xx5kZNb31o0KtXrjxi3WdDWn7h%2BGKKYrHUYaDyJFqQTtBGmvzr5TfBExzgIKzPsYspUjzGvVoe%2F5bvFLB8PoXZSckXYdP2DvOHokFGT4ArWCrYGavfLTnlSX4kK5d15HNsnFNDdMg2KSwFtcvYe8hG%2BwmRf7adONvVZRAEbED1IyePM7sskwlh0esQT7GRPfpJs2YBO3nIVBWBP5sKGlt8e8H5eW0qcxLBWcTn9uWpO2lh1Wrut9B2MCu%2BSOtYJHoZwIu9YM9Y%2ByPYF%2Fxi5Ojj7M9oQLDgmNx2Ecp0DqFwzG3FGl5rlKj0RMXZKYDF2Y2BaG9Pgo1%2Bgi35PaK%2B%2FslTosNiqWEj2xnUqTUMVMBUDE5dVM0vjNd%2Bv35kKebrHVjFRwaKSOhHL8NORm3QfK0%2BVV15PFMi0Tjb7DCD67u%2FBjqkAcVrMSNJNBP5kcGzyzpfW8SOnGj%2FtGtS2pF4cwPoA2kPqYo62vup7SpjXFC1UUa7VLTWtciph0BcZVvm7duy2LYlOjaPY08ysKSrd%2BEokmitoNJpPEVVEdVYPGnOn8fPTUFHKIuL17Qr%2BrMD%2B%2FkSq5pfFB8e6an1G5PBTQc%2FvU%2F%2BixZ2r%2B7PUxdgARbL5K%2FM4hb5GglrrrCGqC1LfDOP%2BbbxWkNu&X-Amz-Signature=81f3c396ef37977d54060140efe1776e131e0d3aa2aa1f769072989eea9373b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWUNOD5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDifvwe5B515nZT8V65r%2BhqGyzZgMPGMeJwN%2FmFAfUtQIhAJZD1GKTzXI3wV4wDFr%2BSBcW7Zeoxx00gOrB5Mh8oAzNKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKPHOvnRc0s0oJ2wAq3APW19dSZMLjbjiqXoRT6jFsAl1W%2BLMfm2drOnDzfkPAmAZcPALnOI0xteS%2BnZmLhF2ojDS%2Fz3mZ060mC52Ha6MoIiwGJ1WN%2Fk49CH7ZjiXVsafAoPRgVmyJqhCIL%2Bv62uF0YR9lWRVmLr%2Bus03BdZG0fXu3y%2Bz2WopZQtEqYIjIJrWsJ2ZXKCjIZG1%2Bp2W5DxrtMaioYdjAFTcZhv0z8fbP%2F7xx5kZNb31o0KtXrjxi3WdDWn7h%2BGKKYrHUYaDyJFqQTtBGmvzr5TfBExzgIKzPsYspUjzGvVoe%2F5bvFLB8PoXZSckXYdP2DvOHokFGT4ArWCrYGavfLTnlSX4kK5d15HNsnFNDdMg2KSwFtcvYe8hG%2BwmRf7adONvVZRAEbED1IyePM7sskwlh0esQT7GRPfpJs2YBO3nIVBWBP5sKGlt8e8H5eW0qcxLBWcTn9uWpO2lh1Wrut9B2MCu%2BSOtYJHoZwIu9YM9Y%2ByPYF%2Fxi5Ojj7M9oQLDgmNx2Ecp0DqFwzG3FGl5rlKj0RMXZKYDF2Y2BaG9Pgo1%2Bgi35PaK%2B%2FslTosNiqWEj2xnUqTUMVMBUDE5dVM0vjNd%2Bv35kKebrHVjFRwaKSOhHL8NORm3QfK0%2BVV15PFMi0Tjb7DCD67u%2FBjqkAcVrMSNJNBP5kcGzyzpfW8SOnGj%2FtGtS2pF4cwPoA2kPqYo62vup7SpjXFC1UUa7VLTWtciph0BcZVvm7duy2LYlOjaPY08ysKSrd%2BEokmitoNJpPEVVEdVYPGnOn8fPTUFHKIuL17Qr%2BrMD%2B%2FkSq5pfFB8e6an1G5PBTQc%2FvU%2F%2BixZ2r%2B7PUxdgARbL5K%2FM4hb5GglrrrCGqC1LfDOP%2BbbxWkNu&X-Amz-Signature=83e9ca877bfebcb727b2fb349b5667c4743d934b2ba364c86b4ba24fae19a68e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URF4FZED%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb5PP4fj1c3goYuS0zb3Do5Ura400tMrra%2FnPJQsk%2FCAiEAkC%2Fp8ih9pTHoPKga0aUyvpGeE90%2Bpe6xYaN57HTHrJ0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmthhU77gi7ZAYTMSrcA4gYCb%2BhkYuQHLcrn64gEwFRDL9maxWSxGieoy0Att2mpRm6uvYh3ICQ0NfpkTrxbJMs9Fi3hEQ5Z7%2FmjLjm%2Fx8%2BCYSCLj1m2wQg%2BDNUdzHpZa2SRGOZ0ph3hvAl9sziNCgM6iaUDiJLb59otDvcGdZe%2FB1dCAhnnfh79ajFW8ZczvBJpKjgfeRLEG4bmIlAlRvCdULs7L6%2BBy9QSNEK9srLqWZm3W01X%2By1zF5cZPId9u9jWlUHtIZgyuOPPmqKpgSR8bDmpdnYr%2BgS9iagtTtB0SG8jieY4ljtSYZcEd8eJuQ9GIde6ycXTtJujXVO%2FqtLYDiiAWtyTcntUsCvXCJ7lxUYd1NhxJgxiTZmzcoWevTlQYmHDk6tWzvdjuDPBvU9XZt%2BppRcpeEOG57NpfgjtnvaFrEgK3JhaRisgUm9xa%2Fvp74JVv7FHnhtnYGt8O16y8Hn7ZZs3JpZ%2Bvgkmm80jE8evaSni5vW8YsdOIwxF7Y2fb%2BocjIBzSYba%2BgSIl2bXpxEluimsV2JRRi9FC6YOpExzT9KOdRs4BM8O75i7BY6xqsNm0RwNtToVbdFvhuoUtqMkmALvmyGvDEnmG5EE3%2BloVLoTJYxlfWKzUeUR4XAGJaphspesw2FMKDqu78GOqUB9C1B6kvLMt9xzG7C%2Bk3h0Tsrb7JHTGolksjYEJHeFBDuTl%2BVR1nFb0%2BUIxVY%2F1%2Fe7mL4rIhuOtVNYo%2FWeS0b9z7kIdUMyCPtwF%2F%2Bw%2FBRYR9A48lzeqWvDt6xz4H%2B9g27oZQBjZCS6F5%2BaCqQQpK69zg7gbHLm1IiwxgaesFliyXIWrbtisjcvG0Ya7tFh9iZZlToW3zy4iL%2FWBAbX9nLsM%2FhlZD4&X-Amz-Signature=e68ad38a8b6963b2fbc7f88458ead7014ded0c73c463781fde4acd080121e336&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGPLP5J%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfHhrFG%2BkG9nQgTrI10r0JrrFRJ6u9Uhdfs13KLpKFTAiBjfliWr3IhZVBiRnbNgx0tPfb8UxoYesg3hndtQHk3myqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh3578tAiy0tv5tTRKtwDPiZiTXxgL6PiKsFRqEEQ06Y7DnR2BmM9r2cvyqTu8TliE%2BcvU3YzQEZ9aJ3csLMpdl0mtM%2Fh5zKgTy2IXqdO3ZrW%2B2IVMi2vaokO3TDpTRB7GDeeKN0Q62%2BETBG2DN5qI43GOgH%2FZuhMdbsNFJsUDKf%2FlxdvsGMb512TpdrZtFF1iCRThbyWryCJPKgi8l2YdJZUFkIxj1Or259O5XBtvcBAHBxOowjl2YzIW04dab7%2BFAxxfBnjwfaui2C0k3rstcTn0co1RyV0qoMgLmAcLBzEo9wGPnZbmeBTTf8xLyKSeWo0%2Fv%2B0nbX7C2EyhKLOaTjDLkCM%2FV9zYm1s0fFwCFvivK5OrlClv3UCjTM8iqLlW944WfMJ8ZP4zNByw4npwK7iNIPSpUA%2B2yvkPSjEW8HZnc7urF2yjtKfKwhMK0wgTa3vKSmZtup%2FJRVuZ1hf%2B2KOUg8ub%2BLN3qcEcmkXZgHZW%2BFAzK6a3HcMBppzPrE%2F%2B0zukk8ZMNrGbTb4lxfXhc7QZEIvwpNY6OP13SH0p7jZWE25E98p4lSiHgTlYfuKBDBniREeaWXwJ%2B8W0VGuSl4xhqs5y1KEOrRZawPC0mI3aKTUJdGLpRBxqDTOH7%2BlEQ7cz%2Bct5QmqZLcwo%2Bu7vwY6pgFZHW5MO5Ol36wh7M%2FJ3yG11APSvpa5MZt9ZHoiNCgSE8U06fThJbWm9LSlhhDVCCbQx4QnRyz%2BvjSuy59fAwOCBuDzQcRWYt5AoFFaW%2FxVhPZ29SI6Ll5rsqJU0LVa4PjMCygZdF0JWkjShm%2BsuqYAcxOElhLFvm7gx2currTN0dDE4UtYCqiRBLGo6o11gSYvtfujBLu9Ipb%2BdUBfgMQnJVK%2B3Lam&X-Amz-Signature=da1b6b0357f83761451b3c2b0e2ef8ecf4117787f2f29d3e35ce131d298fc642&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWUNOD5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDifvwe5B515nZT8V65r%2BhqGyzZgMPGMeJwN%2FmFAfUtQIhAJZD1GKTzXI3wV4wDFr%2BSBcW7Zeoxx00gOrB5Mh8oAzNKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKPHOvnRc0s0oJ2wAq3APW19dSZMLjbjiqXoRT6jFsAl1W%2BLMfm2drOnDzfkPAmAZcPALnOI0xteS%2BnZmLhF2ojDS%2Fz3mZ060mC52Ha6MoIiwGJ1WN%2Fk49CH7ZjiXVsafAoPRgVmyJqhCIL%2Bv62uF0YR9lWRVmLr%2Bus03BdZG0fXu3y%2Bz2WopZQtEqYIjIJrWsJ2ZXKCjIZG1%2Bp2W5DxrtMaioYdjAFTcZhv0z8fbP%2F7xx5kZNb31o0KtXrjxi3WdDWn7h%2BGKKYrHUYaDyJFqQTtBGmvzr5TfBExzgIKzPsYspUjzGvVoe%2F5bvFLB8PoXZSckXYdP2DvOHokFGT4ArWCrYGavfLTnlSX4kK5d15HNsnFNDdMg2KSwFtcvYe8hG%2BwmRf7adONvVZRAEbED1IyePM7sskwlh0esQT7GRPfpJs2YBO3nIVBWBP5sKGlt8e8H5eW0qcxLBWcTn9uWpO2lh1Wrut9B2MCu%2BSOtYJHoZwIu9YM9Y%2ByPYF%2Fxi5Ojj7M9oQLDgmNx2Ecp0DqFwzG3FGl5rlKj0RMXZKYDF2Y2BaG9Pgo1%2Bgi35PaK%2B%2FslTosNiqWEj2xnUqTUMVMBUDE5dVM0vjNd%2Bv35kKebrHVjFRwaKSOhHL8NORm3QfK0%2BVV15PFMi0Tjb7DCD67u%2FBjqkAcVrMSNJNBP5kcGzyzpfW8SOnGj%2FtGtS2pF4cwPoA2kPqYo62vup7SpjXFC1UUa7VLTWtciph0BcZVvm7duy2LYlOjaPY08ysKSrd%2BEokmitoNJpPEVVEdVYPGnOn8fPTUFHKIuL17Qr%2BrMD%2B%2FkSq5pfFB8e6an1G5PBTQc%2FvU%2F%2BixZ2r%2B7PUxdgARbL5K%2FM4hb5GglrrrCGqC1LfDOP%2BbbxWkNu&X-Amz-Signature=fc283ebad0060ce629c4998a72d7b43fd568feb7368f3b7b0b05b40d2a66fe2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
