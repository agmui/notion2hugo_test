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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDZJYUE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCPcVCVgxtTB9JJCbC53Hc0YsSS%2Fnw9u6wY7FnJUMs%2BmAIgE0%2BkQmqzuq6GqZ1c60VpOZ81VVueC1gfHknGAv3DWc4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKngv1d1DDbdImu8TCrcA%2FZky6k90KsFwZ6yyQWNMLgsjYqgm3h5PgmjjOmws3NGEWpMYrNIHZtEG9txIoAFJVQ7R2rbMrRDspjND%2FrDy%2FWprK0ixdW%2FKMqr8%2FSj%2BVT95EnYb2pKKb%2BM8yTT%2BFnKRi6x%2B%2BCg7pRQcVQ%2B8h5oE0Rz6iX%2BqZpa7mZcwoQ9Zn8gf26UjC2FFr6aiwkiTa2XHUUNw3Sk0DMqn%2B%2FZM3gkjlrYbSbpUocgczU9QTZKEBZohiA6PnntmS0DXufAGHOMiDEpsxzdKTfixgNDruqlj%2FIG%2BqjUlAVf9i1L28z3gvRIHUfJaBKgYFaFW%2F%2F%2F0NxSI%2FQV046mRDTTPkP99s7v6ju%2FIu7fHjRPvn7WaXM8FSMRbqxxUN2woHFrflEUvvG3kSWK5Jh6S6tuQrGcmqBPrJqvo02Yl%2Bq%2FUSNQ7CA2KStXcSKceAZ4Wrbmybv7v5s8OD%2FAWCkGdrI3jQVJvpp79u5uB1xjJgjwaWtgZeXsjA4udzjyutxWAEq6r4uCRREEKaLU1iBpK4ABj5SQhJdBar23%2FXYOyUB3R9l5h2l6T2uw2FLmEOi188ZuKjr5oEYagm805cuigEIsW3ocBovmQ1o2CaJbqDw9i4XiBnxRncTuxjK%2Bv4kOtFwPjQI%2FMLKf1r0GOqUB3z41ue4%2FXqJNldelUK9iEKqexIKRSuotE4DUYMADzljq2t%2Bl3sNUgHtmhYQYgdgyGiaJIwXvLa2cj7z9G%2BDuRbga%2FKhYu1QYXxmkxrnYCjHu4DhcIrSRYShM7iHqnAfeDNlI2u4ex4cyI6xmo%2B7smfVVFxQVdH39TIRBm%2F0id7p6v4YZlYB6mBGJhQXryVyyacYtdyY%2F6Q2D9Ug%2B4fs%2BhOYFCUdY&X-Amz-Signature=fcfb82b1da4afb1e7041226f06a6dba0bb2030609b3cf9d6090a975ff724a9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDZJYUE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCPcVCVgxtTB9JJCbC53Hc0YsSS%2Fnw9u6wY7FnJUMs%2BmAIgE0%2BkQmqzuq6GqZ1c60VpOZ81VVueC1gfHknGAv3DWc4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKngv1d1DDbdImu8TCrcA%2FZky6k90KsFwZ6yyQWNMLgsjYqgm3h5PgmjjOmws3NGEWpMYrNIHZtEG9txIoAFJVQ7R2rbMrRDspjND%2FrDy%2FWprK0ixdW%2FKMqr8%2FSj%2BVT95EnYb2pKKb%2BM8yTT%2BFnKRi6x%2B%2BCg7pRQcVQ%2B8h5oE0Rz6iX%2BqZpa7mZcwoQ9Zn8gf26UjC2FFr6aiwkiTa2XHUUNw3Sk0DMqn%2B%2FZM3gkjlrYbSbpUocgczU9QTZKEBZohiA6PnntmS0DXufAGHOMiDEpsxzdKTfixgNDruqlj%2FIG%2BqjUlAVf9i1L28z3gvRIHUfJaBKgYFaFW%2F%2F%2F0NxSI%2FQV046mRDTTPkP99s7v6ju%2FIu7fHjRPvn7WaXM8FSMRbqxxUN2woHFrflEUvvG3kSWK5Jh6S6tuQrGcmqBPrJqvo02Yl%2Bq%2FUSNQ7CA2KStXcSKceAZ4Wrbmybv7v5s8OD%2FAWCkGdrI3jQVJvpp79u5uB1xjJgjwaWtgZeXsjA4udzjyutxWAEq6r4uCRREEKaLU1iBpK4ABj5SQhJdBar23%2FXYOyUB3R9l5h2l6T2uw2FLmEOi188ZuKjr5oEYagm805cuigEIsW3ocBovmQ1o2CaJbqDw9i4XiBnxRncTuxjK%2Bv4kOtFwPjQI%2FMLKf1r0GOqUB3z41ue4%2FXqJNldelUK9iEKqexIKRSuotE4DUYMADzljq2t%2Bl3sNUgHtmhYQYgdgyGiaJIwXvLa2cj7z9G%2BDuRbga%2FKhYu1QYXxmkxrnYCjHu4DhcIrSRYShM7iHqnAfeDNlI2u4ex4cyI6xmo%2B7smfVVFxQVdH39TIRBm%2F0id7p6v4YZlYB6mBGJhQXryVyyacYtdyY%2F6Q2D9Ug%2B4fs%2BhOYFCUdY&X-Amz-Signature=1ee6371581ed179db06fb440f35ed7e4a053c562a1a3e39b81c094c4f7a8bc70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3NIDJB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDRsJ68D9NRStV9V9H8q4%2B5pBZs8noOHkz2df29317TDgIhAMeIBwZueLWvY2mqLa2%2F1awuas9yDD9qLzYlxUjXSuPFKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf40zJBydU1TM%2BcJwq3ANBQ2b8%2F7iKktthf7%2FgnYElQX0lRE51aP2zheHVsh5KKKZW3WqGARL1PRxNPS81jlRNcp1sAK1bhVJvquePtrSBbMKtB%2FT1Yocq0nHbe3t0gf7kfRLJxZ5%2FquJ%2BiFSNViAJqa0cfHKYYA3HjtalKIsVzenbOK1YPhEM2GJgFYnA%2B%2Ff4b6nemRhsTK45tYZQntRAYlc7YrJ5bwEq4eCTElPbe8MEUmCTzJ0dylZunEPGxGmv2waFTlmk4uspSLMy103HQmMPiP7XPksvnjJbBFauoZhlflAO0%2FG8aAMNMDoporsJucWlrEv0nPXK3SV%2B1R%2BowCtanuZkOEngMAhfZR7MfOjEVJN0hXtFNBGsplGzSGrmrcfkQ0h9rmw3t63520EybWtggNjFdWqQr2mJL%2BdnYyjOg4DbQWEEWTEcd4jsmI2okRlychKZMlxzEYd6eJ6siXGaBLia9juqk8Fo4WQjEi3h5VKsSUahT0YqGfjEkfUdMNwi96tVWSb5jEe2xkfnE8eA0Dhmq6rtFWh1lW7MQslqujQkdabgBEc1bol3GVpNzS%2BmF09nFU5n%2BqRDfxYRXqScg%2Bxn6zcy4fx4M9OF0%2FuKT%2BbMlACPzFeasVfwxO4ZJDEzRf1W3VH5zTDwnta9BjqkAfiD1kOj8XLiU2BGGQta0r9%2FngBDFYGDQz2LOgXkjxQucoPWAxMPnR4eOzN2xQrcK5YfqdbVlS0tXTTBFO8P6VWtLvq5ow5OEDb%2F86EejhgMJzBX02NMZioN%2Fa12obKY1r%2FBaQ2nGu8dL7vAJ0cquA%2BQvGIlB%2F9uMd8Kbscjwl1pvtLlLxaBOC3jq0WCaOhUx%2FHxLniDbBXpbeVjkPXVzy2m7HhH&X-Amz-Signature=107fb32be82695cc21ba417fceacc2166c2d70c57a9bdf87637d5b289f348f86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUESOWMI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQD2YeeP6kbMRhMhuHwAx5IEy7PKNBs3nUY7klOlUwPQ9AIga7QTOpNQuRBcPRG644fln0oot4Mqvb5fteFulEbANNcqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGO%2BvoIzQN8fL6OmlyrcA6%2FpA8bVguvB548Dsr5l3viimcWSVgNJyHiI7IlNH5rF5QcRzCZaCCxhQuqabyMPaJCCLE3aLR8mwisydK2Ex9h2cA27g1r%2B7svqBJUk2XFyk8RJcM8EsmrBElf%2F9Od5RRjalISH1fHf824cJmM5%2FDv9YLgT%2Ba61v2P1SOsC%2BvnQJYx4SvIjyICLh5kJeprVWhPgeKnORKjWQ0sL7oax%2BBXRDK3YEoaaBmDXAuKI6ZBLcMIdUIdmTbkm%2B2B4VkCNlicmhWpiuZOWmxXqUqSMrVbDha4NLO3WyHpnOtTT4hMSOLrRhKrlYtydfwCHTs7alQAz0PzJfL08cT5DbhD%2F%2BJVxkn758W4fG7%2F1scMB7BsTS5qjbz7rhIRbhAnmix8ggfsH%2BKJSrv9rNXXMwUPoUzouloafJnGRz%2Bgfj7S9M9ir7EqDqo3OYykGJE%2F2QoTzg4q3U7ZmBArag2qTZhU2tFW4yQCCknJMJs0TgU4hq8NmiEzFIQ2tOULMPagddbY9DKABcP%2BvTtuA2zjWL74oBnyd1SZa0oTAc1ENwvw6ZUqLwOPMSTBrYHf%2ByCTJhfFTt819JZIDrvi%2FYbV%2FNLAQrzQlPHByywpTdbeOPqgLRRutswwEEnGa1gjTNg38MIye1r0GOqUBV%2BwiBVgJqodfSm5sdrIpgmg8p%2B%2FV2iATMLhh0Cep59NFbN4Hnsvt3dJ1X4yVLGk5SCjVSwZzOlj6uBJtGG93Wgt3UoOhVvOJIpUMFai2I0%2B38BFG7y9IEVdkizsohjNADP5f2d6mXw0%2B5r%2FXNXPj1q6s%2BpmNefgdXOrdbX2sqt04u2%2BkPdUkLmBmJUR%2BhIzfcvqrEOeHZwZuSn1Zv9pLEuaxaSfz&X-Amz-Signature=c64d6eca1edb3e797585b238db643fb5c73999236725e75c6eece8126e9b1596&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDZJYUE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCPcVCVgxtTB9JJCbC53Hc0YsSS%2Fnw9u6wY7FnJUMs%2BmAIgE0%2BkQmqzuq6GqZ1c60VpOZ81VVueC1gfHknGAv3DWc4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKngv1d1DDbdImu8TCrcA%2FZky6k90KsFwZ6yyQWNMLgsjYqgm3h5PgmjjOmws3NGEWpMYrNIHZtEG9txIoAFJVQ7R2rbMrRDspjND%2FrDy%2FWprK0ixdW%2FKMqr8%2FSj%2BVT95EnYb2pKKb%2BM8yTT%2BFnKRi6x%2B%2BCg7pRQcVQ%2B8h5oE0Rz6iX%2BqZpa7mZcwoQ9Zn8gf26UjC2FFr6aiwkiTa2XHUUNw3Sk0DMqn%2B%2FZM3gkjlrYbSbpUocgczU9QTZKEBZohiA6PnntmS0DXufAGHOMiDEpsxzdKTfixgNDruqlj%2FIG%2BqjUlAVf9i1L28z3gvRIHUfJaBKgYFaFW%2F%2F%2F0NxSI%2FQV046mRDTTPkP99s7v6ju%2FIu7fHjRPvn7WaXM8FSMRbqxxUN2woHFrflEUvvG3kSWK5Jh6S6tuQrGcmqBPrJqvo02Yl%2Bq%2FUSNQ7CA2KStXcSKceAZ4Wrbmybv7v5s8OD%2FAWCkGdrI3jQVJvpp79u5uB1xjJgjwaWtgZeXsjA4udzjyutxWAEq6r4uCRREEKaLU1iBpK4ABj5SQhJdBar23%2FXYOyUB3R9l5h2l6T2uw2FLmEOi188ZuKjr5oEYagm805cuigEIsW3ocBovmQ1o2CaJbqDw9i4XiBnxRncTuxjK%2Bv4kOtFwPjQI%2FMLKf1r0GOqUB3z41ue4%2FXqJNldelUK9iEKqexIKRSuotE4DUYMADzljq2t%2Bl3sNUgHtmhYQYgdgyGiaJIwXvLa2cj7z9G%2BDuRbga%2FKhYu1QYXxmkxrnYCjHu4DhcIrSRYShM7iHqnAfeDNlI2u4ex4cyI6xmo%2B7smfVVFxQVdH39TIRBm%2F0id7p6v4YZlYB6mBGJhQXryVyyacYtdyY%2F6Q2D9Ug%2B4fs%2BhOYFCUdY&X-Amz-Signature=2942b39caaf19d9ad5833d494f8902838c40cc640423c7c6d7005110561e9db8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
