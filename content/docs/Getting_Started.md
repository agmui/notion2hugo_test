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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXXJVE3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWdpuVy07pUGMxtEF%2FM%2B5UjCzDfGwu1bWCh34f8CXKAIhALu1Opwg01jwyvRz0UsmNcE193vVpLDh7BXSBTKQ4II%2FKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBqxvjuYvyYwDI2BQq3ANtSng%2B2BfP6aFFdkklxMv1F7Y4g3647FbzYSI8KFh4fPxwUMOMKsKs6UlYZTG0HjHPndxc2BNd7HXUQBMDZOBFqwz8XB0N9d35xB%2FqWizxFHsLhLIlMnDzPl7MU%2FyW0J77MB7uo6KR1JpP1PScQvjE5TmVWeAOxR26IlRaii%2Bcpcmp9bOfXpu9iQvXWbr2bSFbz%2FuXs2OM43dse33nAvU%2BB7h1SD805HhHuP%2Ft%2BURhVqb6YTxVaYQyT4rUWBfOdGoc98UKUXbXqetSk42iwfKGc%2F%2BMYcHAOT2ENxMXsxBOeb4vFUZU%2BH%2FAaSq3oKAMfJqk8bxUeJuLy4tJK0aGL5N90xBaN2gPvP7pdFIR0M76LKsFtpaRUnIrdVgIzHKSxpUpXyoS9gpUEWrcHuvQDNEXnLwAAM7AHiQGREQ6uao34MS4%2FtVKQNDB%2BS07fB3AcMv0bmI5ETjZLv8day4UqDRf%2FYd%2FfEU2rIGOy8FcMdmYhqboTsXQ10p69E53S3G2dAZLCouTkpuR7XHsgAd%2BGO5SyWhyZSntzjGtpPMRn5Oc7hEB4g1sNSVFu1zOg7wPypZzlb5J7eM6foXz9Xnn5T1MjpSYLrA2GebEwxNKgf1M5rCHkjAv3C22ocuzQDDpvai9BjqkAUq28x6%2FRC4uwerMxtJUaWN5ga0g3IXT5MoOxME7eQjiTdZPCjr%2Bx2Qt21D4WaNHChOQ9is6qjHel4i6OdjDnJVkii9vt2VD%2FXdhqGg%2Ferrp6KJFqtbFnt2Ahj70lf6OdD%2Bqs9IeVBYa%2B7Mo3VwgtVgdvB%2BfNmmGcPds%2BQ6Hw0zjPmxrNbkawc3XQOLdJ3uoft4NM2t6Ggl4bajmTfQ3%2B%2BneYI6o&X-Amz-Signature=b6ee8e093e4aac775c2b7c25cb73504bb2f4f66583a78c23a8f4bd3ff4145de5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXXJVE3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWdpuVy07pUGMxtEF%2FM%2B5UjCzDfGwu1bWCh34f8CXKAIhALu1Opwg01jwyvRz0UsmNcE193vVpLDh7BXSBTKQ4II%2FKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBqxvjuYvyYwDI2BQq3ANtSng%2B2BfP6aFFdkklxMv1F7Y4g3647FbzYSI8KFh4fPxwUMOMKsKs6UlYZTG0HjHPndxc2BNd7HXUQBMDZOBFqwz8XB0N9d35xB%2FqWizxFHsLhLIlMnDzPl7MU%2FyW0J77MB7uo6KR1JpP1PScQvjE5TmVWeAOxR26IlRaii%2Bcpcmp9bOfXpu9iQvXWbr2bSFbz%2FuXs2OM43dse33nAvU%2BB7h1SD805HhHuP%2Ft%2BURhVqb6YTxVaYQyT4rUWBfOdGoc98UKUXbXqetSk42iwfKGc%2F%2BMYcHAOT2ENxMXsxBOeb4vFUZU%2BH%2FAaSq3oKAMfJqk8bxUeJuLy4tJK0aGL5N90xBaN2gPvP7pdFIR0M76LKsFtpaRUnIrdVgIzHKSxpUpXyoS9gpUEWrcHuvQDNEXnLwAAM7AHiQGREQ6uao34MS4%2FtVKQNDB%2BS07fB3AcMv0bmI5ETjZLv8day4UqDRf%2FYd%2FfEU2rIGOy8FcMdmYhqboTsXQ10p69E53S3G2dAZLCouTkpuR7XHsgAd%2BGO5SyWhyZSntzjGtpPMRn5Oc7hEB4g1sNSVFu1zOg7wPypZzlb5J7eM6foXz9Xnn5T1MjpSYLrA2GebEwxNKgf1M5rCHkjAv3C22ocuzQDDpvai9BjqkAUq28x6%2FRC4uwerMxtJUaWN5ga0g3IXT5MoOxME7eQjiTdZPCjr%2Bx2Qt21D4WaNHChOQ9is6qjHel4i6OdjDnJVkii9vt2VD%2FXdhqGg%2Ferrp6KJFqtbFnt2Ahj70lf6OdD%2Bqs9IeVBYa%2B7Mo3VwgtVgdvB%2BfNmmGcPds%2BQ6Hw0zjPmxrNbkawc3XQOLdJ3uoft4NM2t6Ggl4bajmTfQ3%2B%2BneYI6o&X-Amz-Signature=232a804f272d66868270cfac5dc2205c9663eda9676ef17fa59e5eb56bd3bd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDVXTFEU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnR4eBknYPSz29kuat5mHC2vQvGOJP2SCjHkJ031cn%2BgIhAPJDaBSjEQPLYe%2BkiZg6a2jc4wLEqzo3nt23Bkurlu26KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdMy%2FTJO%2BXUNBMlLwq3AM4iL4jNZ3%2BIwzM%2B4JEJl%2Fo%2F6ycipXYF1SIyqfqt2pMmNlvGPQdXqfxkwL1JE%2B4zlB1njjVNo7i8YrzAFUYRGKKrfexkYxgzCP%2Bg0Xwd8t7ATiak4cQw9cG4FsgCAPLMa5BjN2aXe10xzR2RxWCM09PD70m5YLb%2FynjofNns9zToIi2nfxCvFYcaylVcpyrnhwpH71T%2BRKRvEqboq5GQ6Gd0Hw0X0TKzeBGfrVOmGctuLGW7i4bImIj8fetAo8STI0wdksfZ1EbDYp%2FZyqetKOFSUJmZ3dZKyyvoSHzG8kXVZRhvK1cNY8ERx82KUrT%2FQS24Sp0sQF%2Fd%2BafjH1js5JHOGbN%2FfiKOlyY2jLeLI6n6w0fzc6oG2mUH%2B89iL%2FS1xIKYx4yZTiGG8dvthu0y6NBWnz5Au8Q2lPumwsaKQtuhwwafhZ5cLQxn6NavkuETyWgLj3%2F9VUMfMWlYaNNY9PH5NiMn4C8Ng7O37YO2R0mTs29VKGn4CLrL%2F%2BO0%2F%2FmbakrHlv5GFD4MXyZvZhny%2BelAsO40J2XiUWz1enm1kPTs6kqBaOdS6hraKUjr1%2Bz0XqYoQr7hzwriUcT5yFjAxozlPMxJigoTDgBny%2FmHW5md0foXXlgxYqWqT5jUjCmvKi9BjqkAc3xMpnTpURNAEvb94wuRjKGDkI3AZ6GV4hzuKtmXreQAeXcyrT7xzT3YKRyXWnpwRJciu2vbl%2B%2BDOPUk5xMaPuhvgWNNifvfRINdx8Cw2iXNSxA0j2qeKUSPA3Z66JtMngsYr2VznKsgkp4gPPVciTG7ZEcj6fPuq9nTqD1C0i%2FyTccOtPex3FuP%2BdQNKhluFviY%2BBtoDEJulU%2FtNTfZ6QUd%2FrZ&X-Amz-Signature=223bd07545d131a717e9ea346375c0445eb885b2f112faf7424f56a1d4e9b4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQNBFLZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9VWclEHph8WtDlB3px3%2FTTNCEot5WuzDD1RVWnOZ6%2FAiBvzMbPq8%2Bf7TIxnSOfRfUq2oDY%2BcOx3Fq1xuzGhyOwbiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0Eoiwfm5KvhGE9FKtwD%2Bq5TUEXY0%2B7iC5MyXzg%2BO54lPbLYKVtRTeaKsIFdvVjHWBhleqGePJXBOESgRDnYBR6LIV9WsDCBr%2FYRcN1mINBM8SGUK4%2Bx3y%2Fs7NvTITyTiwK2gdZeE67aNN%2BnPN8xYim61Hb2aXoeiLtWJMQW%2Fqr4xQnKEyTf56lZBGUPhu8I9S2hLKwhJlxjf7izwVxnJfUxc46BG7ia7IahqBRFDJKKPd37gTie3zRP9QJRuiqmEqNJeh7FT6Qp%2BztwTwV843IqIaOJyH2E7uYMFw2AYSbdQZTnl0Sfy64j40jhIODiHvqZ1u%2FBGjscIAbCQRdDWl69OxjoAAS5nw93zOXMqoXhjboXyPPjk8Pbx3tRiYId7MFIbQwmOjeMXAjZeBCNRaPl7%2FvY5qVg9Us7zBhPWX4O1HKVtsb82Nxz0%2FUCTP6F1rHYTIaSsr3IsULSWQvmu%2B20zR%2FuiN%2FWGPs3Zpkl978TwctRZfRI5rNeQkNmvJUVL%2FMFy3Dvz8S6Wdk1gBnmuZ%2F2SJMDo8apvNDccUk2pXbTWzTyTkrD%2FclvcAwkQzykEs3vHWvpUFpAhrlAPjPS6%2Bem2pkX85c4ITatsB7DiW5YByGz6qvmdJZrkokTed4Nojf4Pv%2Bg3olBO0Ywzr2ovQY6pgGZse%2BzUSxjl5h5IT6AIlDKD0910RV2z0GTZlLKQQaYimIa9u5ecmL0BHx39IyXG402hWgHCARQy7s8MST5h%2BEJ%2BYMeh17NlXmB4Nw1AtzXofQhNsh%2FTOQqGmOuEEWWq%2FWv32q%2Fs3TefbhL1bNHL%2BKqJWiHp3%2BJIRn9kZs7OI4xjuxVgAXupDZn6r97SlNMpdUOWuO6PF%2FPN0Mzr9YvCS17MNOBJHCE&X-Amz-Signature=7d2e5dfde05ca4b65418bcef7acde0ec95b78ca68fc42d45fde4713fcec5be3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXXJVE3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZWdpuVy07pUGMxtEF%2FM%2B5UjCzDfGwu1bWCh34f8CXKAIhALu1Opwg01jwyvRz0UsmNcE193vVpLDh7BXSBTKQ4II%2FKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBqxvjuYvyYwDI2BQq3ANtSng%2B2BfP6aFFdkklxMv1F7Y4g3647FbzYSI8KFh4fPxwUMOMKsKs6UlYZTG0HjHPndxc2BNd7HXUQBMDZOBFqwz8XB0N9d35xB%2FqWizxFHsLhLIlMnDzPl7MU%2FyW0J77MB7uo6KR1JpP1PScQvjE5TmVWeAOxR26IlRaii%2Bcpcmp9bOfXpu9iQvXWbr2bSFbz%2FuXs2OM43dse33nAvU%2BB7h1SD805HhHuP%2Ft%2BURhVqb6YTxVaYQyT4rUWBfOdGoc98UKUXbXqetSk42iwfKGc%2F%2BMYcHAOT2ENxMXsxBOeb4vFUZU%2BH%2FAaSq3oKAMfJqk8bxUeJuLy4tJK0aGL5N90xBaN2gPvP7pdFIR0M76LKsFtpaRUnIrdVgIzHKSxpUpXyoS9gpUEWrcHuvQDNEXnLwAAM7AHiQGREQ6uao34MS4%2FtVKQNDB%2BS07fB3AcMv0bmI5ETjZLv8day4UqDRf%2FYd%2FfEU2rIGOy8FcMdmYhqboTsXQ10p69E53S3G2dAZLCouTkpuR7XHsgAd%2BGO5SyWhyZSntzjGtpPMRn5Oc7hEB4g1sNSVFu1zOg7wPypZzlb5J7eM6foXz9Xnn5T1MjpSYLrA2GebEwxNKgf1M5rCHkjAv3C22ocuzQDDpvai9BjqkAUq28x6%2FRC4uwerMxtJUaWN5ga0g3IXT5MoOxME7eQjiTdZPCjr%2Bx2Qt21D4WaNHChOQ9is6qjHel4i6OdjDnJVkii9vt2VD%2FXdhqGg%2Ferrp6KJFqtbFnt2Ahj70lf6OdD%2Bqs9IeVBYa%2B7Mo3VwgtVgdvB%2BfNmmGcPds%2BQ6Hw0zjPmxrNbkawc3XQOLdJ3uoft4NM2t6Ggl4bajmTfQ3%2B%2BneYI6o&X-Amz-Signature=ef6871322e13b0a1992d3753cc6769ff581dd9209c52c96a47c47be2aac95c29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
