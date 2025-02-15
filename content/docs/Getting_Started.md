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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJUG7ZK4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIGOOlLksL49kzlYqPCksHJM5QDfXfFVbEZhevZbGKqlWAiB2N%2FVOxYXnITFFabanLGqZ1wfhAhP7JRfJO%2FcbRke4cir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNXZGXvOKRHEDE6GCKtwD5m8G85JGw4fc5goly%2FzPaAxR0KXdkk%2FIUYv9LFBHpxb7x0MkgKL3NkFjSsq%2BwF4br86M9vqPVWsA%2F4EpbtUlq5kwC9mQQV1FMEjkM24mENYDx0Gsy8gCWnvipR27goorNhsjzJ0d5%2FAyz1EQROSAUDkNaZ2fDTpB89ISAs13f9B%2BPth2tK9iwAZPbgMSCL9%2Bma1Em3Btx2gIgJFSnGSjmxIVfU2Dx%2BXz5bwFmqGh%2BdC%2FX2Fxd85YZhjwMCm4AzF03jk%2FVJHh%2BzQFSvAFjeKOp0BXHub0SWw%2BOXa%2F%2BMGz6F8HbOQzDukLsocaeyMxTw3z2rCe616SQiAnW1mpw53tfBQdJv92YeE4bmgRNL%2BDIo%2FgGc5Og3nqzyf79ZaABeoMz2OQfFP8UyHifhcq7AXFAoaAEqCZAnR%2B5TupXTrGekO25QT7BYiTExDUGsCf4UV8Kz6wnP3hRQooICjVsrBL1qYIKwOAhFC4efKKid3%2B8HwM4rcJzlY7wrp2lB4GCN%2FqeJL4rHPDg3PPTH6HtN7qci594Qlp1bbFokPa%2F%2FtMpotiOmh9EOi5Vw1RBg3RkrCZCqLfjWGYL3kueeIEMX1lk2QxVGZKzRVLCg%2BuuQ9yhsHnjLaT5d0vFQVIysEwjpHEvQY6pgG1Nt%2B4O3lMa1ggN00CxWmCM19HJmNNOk7yvwyXWuYD9O9ytez2azYIyI%2BUCTtm%2FplXu4OhmOuTfVCMnJcGmTNLQYTxQI%2FNnwo68qzq4xNBMqKgOCiTvE2XeE10b1sxDJvU5IHd9nA%2BfvZGng3bMEVKjCpBv4DVAis7bBOcS7ANneH%2FX1u8nkubRW74pGjP2m%2B%2FndC4M6sDlzER5zSAszDo6mzqqXWT&X-Amz-Signature=b8179ba493b126853eae7588650ca55f377ef17464d78466b353066276ac4215&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJUG7ZK4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIGOOlLksL49kzlYqPCksHJM5QDfXfFVbEZhevZbGKqlWAiB2N%2FVOxYXnITFFabanLGqZ1wfhAhP7JRfJO%2FcbRke4cir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNXZGXvOKRHEDE6GCKtwD5m8G85JGw4fc5goly%2FzPaAxR0KXdkk%2FIUYv9LFBHpxb7x0MkgKL3NkFjSsq%2BwF4br86M9vqPVWsA%2F4EpbtUlq5kwC9mQQV1FMEjkM24mENYDx0Gsy8gCWnvipR27goorNhsjzJ0d5%2FAyz1EQROSAUDkNaZ2fDTpB89ISAs13f9B%2BPth2tK9iwAZPbgMSCL9%2Bma1Em3Btx2gIgJFSnGSjmxIVfU2Dx%2BXz5bwFmqGh%2BdC%2FX2Fxd85YZhjwMCm4AzF03jk%2FVJHh%2BzQFSvAFjeKOp0BXHub0SWw%2BOXa%2F%2BMGz6F8HbOQzDukLsocaeyMxTw3z2rCe616SQiAnW1mpw53tfBQdJv92YeE4bmgRNL%2BDIo%2FgGc5Og3nqzyf79ZaABeoMz2OQfFP8UyHifhcq7AXFAoaAEqCZAnR%2B5TupXTrGekO25QT7BYiTExDUGsCf4UV8Kz6wnP3hRQooICjVsrBL1qYIKwOAhFC4efKKid3%2B8HwM4rcJzlY7wrp2lB4GCN%2FqeJL4rHPDg3PPTH6HtN7qci594Qlp1bbFokPa%2F%2FtMpotiOmh9EOi5Vw1RBg3RkrCZCqLfjWGYL3kueeIEMX1lk2QxVGZKzRVLCg%2BuuQ9yhsHnjLaT5d0vFQVIysEwjpHEvQY6pgG1Nt%2B4O3lMa1ggN00CxWmCM19HJmNNOk7yvwyXWuYD9O9ytez2azYIyI%2BUCTtm%2FplXu4OhmOuTfVCMnJcGmTNLQYTxQI%2FNnwo68qzq4xNBMqKgOCiTvE2XeE10b1sxDJvU5IHd9nA%2BfvZGng3bMEVKjCpBv4DVAis7bBOcS7ANneH%2FX1u8nkubRW74pGjP2m%2B%2FndC4M6sDlzER5zSAszDo6mzqqXWT&X-Amz-Signature=76d186cf17337507f6f7b86a78f57fee0e457be7c0330d1a9e5aef96435eca61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBNAMEVV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGC6a85Vu3mIOJi9gwzgznCXR7fwSjck1CxsOu5BQ0h4AiEA8yEAu85XGKw0nDzVvH8jf2I8s2LlVmCPELV2xCF5178q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKi%2BJURb5Y57530%2BkSrcA3udYJR%2Fdo0MixOgFKSWbxJLTtaB0%2FjjWVgf6f6rfjNHQVN5ESE4P2gkU4xKKFf6iqR0OX3QTHzMIALKsxqxH4srlzdrrzQZ210I%2F1D4kG0e5FWOQ3KBnyPlEKwmd5BPERDlLpnS2OrYfjweomCf5n84mlGhqUfXb1PGf%2FdyqBFfH1SGi6EPEmv7HYqUlTN5hNfCqaGHueyx9pb0rwPrjE1u%2B9usGz0WcbLRF1xzBybthLQPW3aFSRpG5jx9NDYwpjuHAHJ0XUWyi2ohtospZCBbw%2FX4xPOg2xdjCCGE7OPslwtEmbCRbVtf%2Fr43O23ugyvbcf8IwevbCWOAnzmVkSoGnFoJGs6%2FXUMCKz6nAKK298zSDqRg3hEpvUrCXrYkohGWHHFiZsDoggycxwNk7puJqceLiANpw4waQ%2Fk7zU85Tt%2BdzLY5Vj0atW6sIEgK3Wkmzu6mLIYh2EiyOa6SGxRAa8TkCK5xqirq0k9mTGwx6h58braiiHN3hpeK0FeLRsTPt2Zqrcz4XejJOWXtVmYRLzdwPL91kthDWjhDpcfuYbCmgFDw6tgRVtnKoZ5XAVTOe97ecKbLR79%2BjXQ3trRp9RL9N9RNB7%2Fmp3LNxqvoRUPu08LWp9FF99FiMOmRxL0GOqUBYaqQ75w2K6M1womWIBhCR2j2TFpFqUwKqhNa7NxOVSf68DaC12eafCeMBHM8j3Faqt6XsJsdAe%2BfypwTDoO4Jb2861zV6DTvopzCuJhrkCZHUBfs0Z7Dtj23oXwByUKbUcnkqLXavjE8ZBLj3mo1mPihNeahShosCjJDXS%2FTsrpFJQ3Qxi2hVgL1c%2FNY2mOEMWMp1FnyeqKIpPPrZCS1sS0pS3ra&X-Amz-Signature=8535fe3208af5acf285d134596da55a2010b740112fdd367f063e5f856759b61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWSUVNP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFV8XzMMaVGmFVvn%2BaB%2BzdrogydusvkNpeNXwkovU4inAiAfZrkW9SdhJcosOeUoUsJgzczF6yB1JqDp73G9wXRuAyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNBrKNMRhpHdZMZBNKtwDIzn9gFwRLulWAKqIU%2FV%2FrgIxS4lYoeerSOYPfjmMqAZpy14WzNSQn1tqqbAZKx5N6x4jCLnFpaBbLtevQOQK8%2Bpj%2B9qZWtUQrC6gPKhSUBrv1VGSHnTIbMbp%2B9i7uzR4z%2Fq253zl9eun3NjayypDtwr8ukUxBAftQQsYgtSknwUCp2%2Bqkw9HC52dq%2BrpRKzylBVMh%2BghMYbsQ4ATLeHE3ZuZBLzzJe4SoUR3u%2FxmuslgpMMkAjjcCUS1b1AfNqcOMBYejqtW1mjjV6NE%2FYk%2FjRgeL%2Bc8EGy6WpqfA4J5lgX%2FWAcIA0CQKneVc%2BQkVQ%2FlkNTiKKDcxOyuP2bhslYTwcDH7jYcqwEvu4OlrvtMObFMy9nAX3fy%2BIch5dM%2BNaMMM9zl4yQy5cBsth7wuBrqT5oDqBA2h8uzYspWD%2Fu9K1ICWLGYIAhXpMkX2Osfbds6UrxwGkFciP4HENV%2B2wN7Pn%2FrH4yjbtMvlKrppTEqvFMBtn%2Bsk4BIwwZzxvenFnwzMBjaUHVf8%2F38l%2Bz%2FHfW6maR1uIB9fe01ebTCFwrsrqpXJrnRVtwY%2FWORidibHdj6caqhA33vGaide%2Fc8TG2cQ8My1TwGorBfwA8YhcoC2CyyJQ0RjEQpEWgfTTgw8JDEvQY6pgFg9y7J4sQgFxYFBdCvaPbxPpxrsRFCVc%2BY0NdRg%2FiMtgcFJxFwBvOlypYqMauH9iWKdsafAbyRRqS%2FWR2ZrdwOUnnn%2B8TFZORrodhIKCOSXYsUu8rOrC2hp84Y%2BwW6mWLCr7V28oWqpWctn6mPEHB9rK%2FGNZIW%2BNYvQzDT%2B601eGA%2Bz6rcRnJWKMuxvR8FFJlRjPIYnrZEfo%2BatBCunFYommjlvYYn&X-Amz-Signature=d2b3433926c0cdce0d8e68339d48c64209048318a8cc7e04b2b59cae9699688d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJUG7ZK4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIGOOlLksL49kzlYqPCksHJM5QDfXfFVbEZhevZbGKqlWAiB2N%2FVOxYXnITFFabanLGqZ1wfhAhP7JRfJO%2FcbRke4cir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNXZGXvOKRHEDE6GCKtwD5m8G85JGw4fc5goly%2FzPaAxR0KXdkk%2FIUYv9LFBHpxb7x0MkgKL3NkFjSsq%2BwF4br86M9vqPVWsA%2F4EpbtUlq5kwC9mQQV1FMEjkM24mENYDx0Gsy8gCWnvipR27goorNhsjzJ0d5%2FAyz1EQROSAUDkNaZ2fDTpB89ISAs13f9B%2BPth2tK9iwAZPbgMSCL9%2Bma1Em3Btx2gIgJFSnGSjmxIVfU2Dx%2BXz5bwFmqGh%2BdC%2FX2Fxd85YZhjwMCm4AzF03jk%2FVJHh%2BzQFSvAFjeKOp0BXHub0SWw%2BOXa%2F%2BMGz6F8HbOQzDukLsocaeyMxTw3z2rCe616SQiAnW1mpw53tfBQdJv92YeE4bmgRNL%2BDIo%2FgGc5Og3nqzyf79ZaABeoMz2OQfFP8UyHifhcq7AXFAoaAEqCZAnR%2B5TupXTrGekO25QT7BYiTExDUGsCf4UV8Kz6wnP3hRQooICjVsrBL1qYIKwOAhFC4efKKid3%2B8HwM4rcJzlY7wrp2lB4GCN%2FqeJL4rHPDg3PPTH6HtN7qci594Qlp1bbFokPa%2F%2FtMpotiOmh9EOi5Vw1RBg3RkrCZCqLfjWGYL3kueeIEMX1lk2QxVGZKzRVLCg%2BuuQ9yhsHnjLaT5d0vFQVIysEwjpHEvQY6pgG1Nt%2B4O3lMa1ggN00CxWmCM19HJmNNOk7yvwyXWuYD9O9ytez2azYIyI%2BUCTtm%2FplXu4OhmOuTfVCMnJcGmTNLQYTxQI%2FNnwo68qzq4xNBMqKgOCiTvE2XeE10b1sxDJvU5IHd9nA%2BfvZGng3bMEVKjCpBv4DVAis7bBOcS7ANneH%2FX1u8nkubRW74pGjP2m%2B%2FndC4M6sDlzER5zSAszDo6mzqqXWT&X-Amz-Signature=ca2bc6a10d20815e93d35c78134482dc61fb64c4751ca26e9ce880ad6f9a33bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
