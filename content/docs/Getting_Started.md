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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456O2IWB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASiYLTU9Z4bvE1c9n4Vxk88LQHZQ1x%2B9dgTUKL5ydBbAiEAsiPkVJlCVX50goYAMBA86vcbDgbpefdpaJHyE090wvgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNly26EqIiTcRwmx8CrcA3yzDHBAK9cuBeMuH8JkiUUA2zjT1RHwL%2F6eHtmBnzcaZMzJNU%2FNRv6%2FzhV%2B%2FngWuGHCy0OLqaxSvO3RC1cpEtsMHC58aBuPGb1o1ZUd6p%2FUpFGY9odf9yW1I9O5ITKGbNgnQX%2BKLSDymweUCZ8XxzZZVNvuFilti1Dc0i2DsC3pwaAO36GuNIzgrZ57wNXVm1yjGYsNHTSNJfN2iK%2BfnC%2F%2BVM8emnEulg5JBgj%2Bi%2BL7sccTr0rezEFzHwyDNL0f5xyVzZ9PwVURIjLqaa5qz9%2BUD9QWcht%2BOBrU%2Bo4pnGq6a7xpC4T%2FVJFmrEcSPPLEZLx0q3sTbDZZ3KH5sx1Z7vQ61Xx2CO6qlKLqlJSoBQ207PY7R9KbA7Ak%2Fs7KrZzjpwfewspXBhUFNcjOKsNZcI%2Bk7ckbFns7ccTHkd7vkEp4t4%2FWN46F165E2AQcAozQ4f%2BoGvq9GXCzA3No0mkNeyidvNT%2Flt0wFmLr85gbRcBTez%2F3v5XFE%2FfEp0eMRQwPEGivXx7Xr%2BXCHfsp%2Bx9YP05dBsP9LBEBVq7%2B670h4zfl9b%2FrGga1FP7wvMo693PsqboBb6jhk%2BZJYtqC6%2F0OOBqS1Qw66mlWlWjwZxXSuEn4NIzYZpFZIggtSd0XMMfr67wGOqUBQ2i7UmKmgo7yPy8bjO%2F%2BLJsi3bFygDhly5s9txa%2BjAMT4rIxJIMViKRzPYJ%2FDDYjl1cx6yPonfj2%2FgKvlknR3BhP9OmykGwOg54iYnZuiU1bnsDCjsugj6tW0evKnINWMgZi1WvOMYOoohYBvWXKd%2FiESuKkGM1qGGy7BdnAQh7BaT3V5FUlqpxSjA9q6xDgil6s1kVkQaEDsNh76zK4GMhHu6cJ&X-Amz-Signature=31d59eb2c2665bf2cc95ebda237fec2aaddc6de28959d4d57e22375a7628acea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456O2IWB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASiYLTU9Z4bvE1c9n4Vxk88LQHZQ1x%2B9dgTUKL5ydBbAiEAsiPkVJlCVX50goYAMBA86vcbDgbpefdpaJHyE090wvgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNly26EqIiTcRwmx8CrcA3yzDHBAK9cuBeMuH8JkiUUA2zjT1RHwL%2F6eHtmBnzcaZMzJNU%2FNRv6%2FzhV%2B%2FngWuGHCy0OLqaxSvO3RC1cpEtsMHC58aBuPGb1o1ZUd6p%2FUpFGY9odf9yW1I9O5ITKGbNgnQX%2BKLSDymweUCZ8XxzZZVNvuFilti1Dc0i2DsC3pwaAO36GuNIzgrZ57wNXVm1yjGYsNHTSNJfN2iK%2BfnC%2F%2BVM8emnEulg5JBgj%2Bi%2BL7sccTr0rezEFzHwyDNL0f5xyVzZ9PwVURIjLqaa5qz9%2BUD9QWcht%2BOBrU%2Bo4pnGq6a7xpC4T%2FVJFmrEcSPPLEZLx0q3sTbDZZ3KH5sx1Z7vQ61Xx2CO6qlKLqlJSoBQ207PY7R9KbA7Ak%2Fs7KrZzjpwfewspXBhUFNcjOKsNZcI%2Bk7ckbFns7ccTHkd7vkEp4t4%2FWN46F165E2AQcAozQ4f%2BoGvq9GXCzA3No0mkNeyidvNT%2Flt0wFmLr85gbRcBTez%2F3v5XFE%2FfEp0eMRQwPEGivXx7Xr%2BXCHfsp%2Bx9YP05dBsP9LBEBVq7%2B670h4zfl9b%2FrGga1FP7wvMo693PsqboBb6jhk%2BZJYtqC6%2F0OOBqS1Qw66mlWlWjwZxXSuEn4NIzYZpFZIggtSd0XMMfr67wGOqUBQ2i7UmKmgo7yPy8bjO%2F%2BLJsi3bFygDhly5s9txa%2BjAMT4rIxJIMViKRzPYJ%2FDDYjl1cx6yPonfj2%2FgKvlknR3BhP9OmykGwOg54iYnZuiU1bnsDCjsugj6tW0evKnINWMgZi1WvOMYOoohYBvWXKd%2FiESuKkGM1qGGy7BdnAQh7BaT3V5FUlqpxSjA9q6xDgil6s1kVkQaEDsNh76zK4GMhHu6cJ&X-Amz-Signature=9597c3fe5a4e6ae07de70f44070ad9ef03f11ac7f0e828fb041e4fe803c97523&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5Y24H2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHXtaAEqxEXGSfsPIZHIWXG3IhIsZi%2FPTei50Ev7bJ1AiEAgLlF%2BHPHW4sLWk8QFFEXfx52YYXnEXJAnlVdGdv5Y%2BQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BFM1Ti1Pw7kPuSZyrcA2LOU2KuW8hvOnoQ%2B%2BL0HiUoQthKlrpl7AO9de0UPr1uNe4iteTewBWguGIxWxU8fp8k8WCDt4gfgj57yqfP%2FIQssShXafXlSIlzCmkUM6tEHiwgE9SanYFicJzVLHjsoidQDmfUnQm5XleYfqngrvyU7Ny3hJUf4rsZNzfYJpQwt1nmFFdDprnJaY8G6FjzYK94TYC%2BApzRZTyP1hoSa0Nj55bnjjWcjYDeB4HZ1FhkexMdtEKS9USADKQorJvqRRwDwZxiposWid4i6ULxoUsK3unCd5bZDvCJ9tKSM%2FJkbeEk4UUvR3em1Uv87AY9Q%2BJdcBGpC9tpLVlk4JJmt3i5aD5wSZsNSCuFME1AQ9SJEe8TcNCGmJ%2FS9bRKrRF9zkJqEVJIoz%2BAVqtqnS3BqDREBJaOQ01fAZAj0mMdSkBTboybhOYW7%2BFxLQ0Ddbcdk7cPGsfkSBYLxP1Pvg4opmoBUUwIGWpZK1LmELayqiXjC1uTmR7dsdRmwmcwTT4l06S1KQnjNdtP2lm8F2JnFC4J3HLTbaS%2BIZfZ7LoXvijiuiWy8I70a7CMuX6WsKhoOSmB5Y0DMXlw3G3H3Os62q1sNUjbT7rdWNTWCmIMi6icnjUdqU%2Br0ZCVj5exMLjr67wGOqUBDAlSANdDbmq%2ByAjnC0sjcRWBSgOYiDXShmXpZobIBH1ZwG1QvMHE5IOwwWmNWrOgrWLsuVWJPw3hn0hudyjFD%2FNN8uyVSCe9oAOg8MLO3XxyPtM2hXSPLLmNFobnTZ3I06T3%2BhzbRRPs5EQhXWtGStR1P%2Fd1ZP%2Feb%2BgOkzFlGYZZRe6bWGGWGtDTT82CW7YHcIdqTaBnKPKUM9BQzD5yYPht%2FEJw&X-Amz-Signature=9d4b370cf4cbaed819cdeddea60c8f78e8bd65b0261ae7401fb09ff68b93c9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GMRQPFE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL%2BO5NQUoGe0E8%2FXlmaA54oA8PzC2RVHRUgJulw6HHBAiEAp%2Bjn6l8Os%2B0grJdpNQq1d5GyXH%2FP8PvOyH8D9Gw5WA8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEVrzL3%2BCqQvQ%2BQQCrcA%2F5QdyRagjUjhgapr3RAFq7Ucg2WGK%2FBRJGtDfLgvCcf3NJbqRNGsRQXZoPtZ1Ur09W9509OsZnRNN1hRWjLMZRWVW3hNfvmDcXUrvyEqTr41kQ6sO70QbWYjf6FjoG4NrxSullBLSwpndeibXz8zTAYWWucwlFByfuSDBeLNtbvaSxmOs47Agd5o2LRvRtWRnHzRAc3XNYlfvY5THNbPIEp1i%2FcwohZhUwoXXODKOiJRtNMt6p%2FDNLAmm1p9fsP8icm41oLsKALhWlQJ9EEldDWUBRCBnNn0IskxTp%2Fkhw2pFnRq2CpTBzZee8%2BFIcW%2BglSHgEmEDeNRX%2F20qVZoSmSEYcVmZCO6%2Bjmd4125CPfqAEY8fKf12DM5PKne4rwHQEpryzohvjQdcweSu7EjQXH%2BEVuHOFzxWy7HdLPKNisxq4EWYAt0izgaAVF47t4mwWACTbug%2FUoYW%2FY0XNWebdLD0sU4jmDkYVlv26OzjeAspy2JKWNWib9nw8a0CDCFF3aGsc8huVc6IT2Xylv71rhLPFzaaycZL2ryL7SzmbOYd6gyK1mMuOxfsWhTT4LmDdzpOA9AAy4WQcKtDAHdJTVK%2FfsEGNhfoj9aDnPbyYc10rK%2BnQtpFKefTZ0ML%2Fr67wGOqUBxsIvnDsc88m2RiibbfGtqnWNv6KgUWkcb%2BBqh4ZFDIC3gzQgCnfQinPKe4Hd1MjTU2PtdxIUlSRwNRB71nQF51PdEKnpaD%2FWyVJisdfRBH7p8L%2BkYjYEBcYwk2VVpPR4n3XcJoaz6lO56ceTivh9anmBrd8UMuZspwxCQRg4fNPVLMfBiWQeOgWOwKUTQLbN6Wixq44OGattdhmPjus57bfStjGy&X-Amz-Signature=ee984e8695697f1ead961d796b7100d0286e01e8bf81e54130ce92ac3464186d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456O2IWB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASiYLTU9Z4bvE1c9n4Vxk88LQHZQ1x%2B9dgTUKL5ydBbAiEAsiPkVJlCVX50goYAMBA86vcbDgbpefdpaJHyE090wvgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNly26EqIiTcRwmx8CrcA3yzDHBAK9cuBeMuH8JkiUUA2zjT1RHwL%2F6eHtmBnzcaZMzJNU%2FNRv6%2FzhV%2B%2FngWuGHCy0OLqaxSvO3RC1cpEtsMHC58aBuPGb1o1ZUd6p%2FUpFGY9odf9yW1I9O5ITKGbNgnQX%2BKLSDymweUCZ8XxzZZVNvuFilti1Dc0i2DsC3pwaAO36GuNIzgrZ57wNXVm1yjGYsNHTSNJfN2iK%2BfnC%2F%2BVM8emnEulg5JBgj%2Bi%2BL7sccTr0rezEFzHwyDNL0f5xyVzZ9PwVURIjLqaa5qz9%2BUD9QWcht%2BOBrU%2Bo4pnGq6a7xpC4T%2FVJFmrEcSPPLEZLx0q3sTbDZZ3KH5sx1Z7vQ61Xx2CO6qlKLqlJSoBQ207PY7R9KbA7Ak%2Fs7KrZzjpwfewspXBhUFNcjOKsNZcI%2Bk7ckbFns7ccTHkd7vkEp4t4%2FWN46F165E2AQcAozQ4f%2BoGvq9GXCzA3No0mkNeyidvNT%2Flt0wFmLr85gbRcBTez%2F3v5XFE%2FfEp0eMRQwPEGivXx7Xr%2BXCHfsp%2Bx9YP05dBsP9LBEBVq7%2B670h4zfl9b%2FrGga1FP7wvMo693PsqboBb6jhk%2BZJYtqC6%2F0OOBqS1Qw66mlWlWjwZxXSuEn4NIzYZpFZIggtSd0XMMfr67wGOqUBQ2i7UmKmgo7yPy8bjO%2F%2BLJsi3bFygDhly5s9txa%2BjAMT4rIxJIMViKRzPYJ%2FDDYjl1cx6yPonfj2%2FgKvlknR3BhP9OmykGwOg54iYnZuiU1bnsDCjsugj6tW0evKnINWMgZi1WvOMYOoohYBvWXKd%2FiESuKkGM1qGGy7BdnAQh7BaT3V5FUlqpxSjA9q6xDgil6s1kVkQaEDsNh76zK4GMhHu6cJ&X-Amz-Signature=30727bf1cc91978c0b87f0220873fa1bc4d854443266f109ebd9f55777a6cc0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
