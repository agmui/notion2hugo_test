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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6EN535%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Zyo1v5pgTV6qzVSLgJyzRE0o5Y01mD2Lh%2BBwWqLhUwIgEpsu8k%2F8vUlG740H1lwE9vMnmHS8nxdfBtUcaIsB540qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSVzZCHEqU3Sbe6myrcA1XGyTI3%2FKofPdC%2BaWRqD7mdn5yb1CKou78A8mTgL9Z40f1RB2GEbHvB5bFTYaC1hDa21uQSC6ODYI%2F%2B9IYKP4nKkHDWuEq40gV5sE2EiZdNX8GBV9YY35t0vt2Mflx1wXITIBtwkkvdlB%2FKMrf9UzNllZ4tXnnOYRB%2BBOhQmWSikIXW4%2Fd3p%2BarBL0BwNPnIqmpicAdm3TsS5i2JXkzJvYdTyetixPVBWDLmNPnvmQWvrGtS1x2QBZO0hQc6Z6hWvz%2FjFYqCv8kNcxydncoJ6c4ddrzhNt4km5HgbVW7gjG2yCBa%2Bony47BSFpILxUS%2FqMABN8gW9rlIW04o7YjGL3CxTcZgOeZAy9gtwCJ5wM0B7wTiYj6rn9BeTdd2GfHS9GVsm3Lj1mNmn5gxW57SVQ8oBEWWPfAW1NLonm%2BX6zPr82blRriMsN3%2B1pJqZ7HgeGe8FWSssAKww0F2fCkWI%2Boo3aMfyRo3w8Pa29eoW%2Bx4DDAecKRUtzF%2B23sACvT9eEwHi6NR2VANIUZdDGelgeMFZ7PnW6gKm2cL3RhnJfNdB85saA8I3gg%2FacC9iKHBkg7jTrCfKqH3hpi%2Fx336hVV7tGwOkIA7RXXMkRFF0bny3zHY1tif0cBqdNkMOai6b0GOqUBhYapf1YWCPpftar09cBCX1t4zSxy1Phq997mE18C2meWwBzCsC3Mzpmo1C93Jeaklc7fDVKtVEKfqXBAQJa5fRdv759B%2BPlztXLN%2BcDOvA32zlG%2BkUYsreLiZgnht8AK5URcbeNtw6rYuRGCjm8zFJCvYyFXXjMTp759Zxs2FoC1O7irkREaQZEPR0%2BSaBGAZeasZ3LPlGxHfUEUO1ZYmjlFl8F4&X-Amz-Signature=edb206978adf7f763538862ec6b483f4dde61b41a28167b02d86629c8952945c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6EN535%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Zyo1v5pgTV6qzVSLgJyzRE0o5Y01mD2Lh%2BBwWqLhUwIgEpsu8k%2F8vUlG740H1lwE9vMnmHS8nxdfBtUcaIsB540qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSVzZCHEqU3Sbe6myrcA1XGyTI3%2FKofPdC%2BaWRqD7mdn5yb1CKou78A8mTgL9Z40f1RB2GEbHvB5bFTYaC1hDa21uQSC6ODYI%2F%2B9IYKP4nKkHDWuEq40gV5sE2EiZdNX8GBV9YY35t0vt2Mflx1wXITIBtwkkvdlB%2FKMrf9UzNllZ4tXnnOYRB%2BBOhQmWSikIXW4%2Fd3p%2BarBL0BwNPnIqmpicAdm3TsS5i2JXkzJvYdTyetixPVBWDLmNPnvmQWvrGtS1x2QBZO0hQc6Z6hWvz%2FjFYqCv8kNcxydncoJ6c4ddrzhNt4km5HgbVW7gjG2yCBa%2Bony47BSFpILxUS%2FqMABN8gW9rlIW04o7YjGL3CxTcZgOeZAy9gtwCJ5wM0B7wTiYj6rn9BeTdd2GfHS9GVsm3Lj1mNmn5gxW57SVQ8oBEWWPfAW1NLonm%2BX6zPr82blRriMsN3%2B1pJqZ7HgeGe8FWSssAKww0F2fCkWI%2Boo3aMfyRo3w8Pa29eoW%2Bx4DDAecKRUtzF%2B23sACvT9eEwHi6NR2VANIUZdDGelgeMFZ7PnW6gKm2cL3RhnJfNdB85saA8I3gg%2FacC9iKHBkg7jTrCfKqH3hpi%2Fx336hVV7tGwOkIA7RXXMkRFF0bny3zHY1tif0cBqdNkMOai6b0GOqUBhYapf1YWCPpftar09cBCX1t4zSxy1Phq997mE18C2meWwBzCsC3Mzpmo1C93Jeaklc7fDVKtVEKfqXBAQJa5fRdv759B%2BPlztXLN%2BcDOvA32zlG%2BkUYsreLiZgnht8AK5URcbeNtw6rYuRGCjm8zFJCvYyFXXjMTp759Zxs2FoC1O7irkREaQZEPR0%2BSaBGAZeasZ3LPlGxHfUEUO1ZYmjlFl8F4&X-Amz-Signature=e32e78b52018fcb957bd0c22e73defa44bc8830e689b33ab3cf23f9c642dbbc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWK5ZXW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClGJQ6iFqB6O378kGN8p4dBWpc7Q9GfJiSB4w1r%2BsWggIhAOx1lpVXoFyibkJ3FEkPvfzjKGwxyFhfEBG9AEDvkAgRKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw89CSBVTTbgE9EAhAq3APwTNN6wAtpx0%2FzfoslDEWsI2uUTmAxlljHEv7j8Z4YzpUwTw0Ma24tWwa7%2FyARfrOosCLEBqwKNqFL%2Bz4DxBEsDxn%2BnGj8NWrpJ78ZbkoNPQTZlZ7NxHUDEeN6e4MbppgYmXjsCtNjpMP20ieUEZ%2BnFRp0h3Ak2q0LUJcBJ0Ekjg6dkE%2F5vr56QLDSBewGqwCP7CyAa7rbtzrg%2BRvnRIcwZyxs%2BNy1ynEgYEAe40ccpdl%2FL%2F6ehAFCzsnjwmZNiAzD45d8v2c0sAzt2SRfPaf3AvcLy4iVjYfGg5PkO7JWFEJrCw0fZ52InJQolcXiVFL0sy2FbaQvSpIRkzpsx%2BIr%2B0VmbUz7j%2F8w%2FaHqMtJtO6S4CgLVF5ojphe6uVLIH2CUcs4l2CT2nfR88qD1gDzys4x9AtQIjoW0qGmT8ZVGLicC7IHi95ffY8Gndn7R6vFBKKTl0LSz8N%2BCZhJbSqY5xsjm%2Fq1aahCGmYKRdqy0ncB9DQxMRlauKB9qftwtBDJNohmqvzfcx3E6KEpu8SBDbr1qwsOMSVcGPskVilhU%2B5rgt0vSGbJFXeh6GPfqbotReSMkRp%2F5gn8kS%2BAWp1lNTYdQ5dZEpmYmBcVyBkL2P6vzHVCgFkAgv20ELzC7q%2Bm9BjqkAWESvQ66wrZxl63qnTiuoxDTE6aT97EMbTY6v9vYp5xBtIlVG47napmWr4otRTwRholWIEGWFyPE0vGoUYIc9SCuxaZBQjZ5TT7bTstjDOUGnVK7P8H4PcBpZfcs%2FgV4zt2OagTdtGBMVfk78ml9dAyEtYRnfWP69CTtaFklJiQSzykO2cwZPRQPPvAW5WHZ8wAYGPd3tHcLh3KPb2W7TuWgku6P&X-Amz-Signature=22aaf2f59746bcb383cba1d6f82c6fa7f4622630ea5f5c27d4f9dd9a5da8d397&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37HWISW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR5A%2FbzAO%2FnzrjRzEjmHfc4gx5mI7Rl2wY5HOwHSxHKwIhAKLoFhfXqWZcGRGJRTAnUyN9tOIO1ttCkWVbyE6Wn%2FrTKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3m%2Bh12B273HHMIrUq3APxroSk84hFIPCFXnxfyTotm0PIe8gCR50eeBM%2BKxDLcP%2BGQfFsVdDd8bR1FqQ7z1P18FU%2FNb%2Fx1wnmqLK0M3wGvg8FRdRfIMVqbfStjz6FPC29pMI6RTJ5r%2FtQVOa6nb5ukZXzTdc%2BiobOyktCIsxLLWH3oPBNjHZibSKsln9BfpUgyACjzRFq%2F4ofFq2Igincn3bdy1yBdKkSl8DL2YRRlT%2FqrNIAC72YVsq56aoC8d3RslWsP7nU8uum7Uwt%2FUGH158zadDav7PkjNo8xT37XEYXHio7QeQiNfzUQ9Sg%2BkGDKxsvqUnkmbh%2FRmRn7rp7uvFUbuJA45GDaD3%2F%2BpGptcHD2V%2FHqgaBqkYfWkkha8D4NJNLnMTWU5X056%2BKV%2F1lEmLhzz4he9T9w3hQcYsim07ofF%2BmmmskS7wc04RJwAj2HhJ%2Fz64CgyiIghGC0VROcSlyR2U0xL%2F%2BYNDEuYeT3ZCRkU10JNw1J3txFq4jfZqZcOrGhozfHWNFcG6CwhOoaYjsd0jlYo81BUi4k8vYtYzIZ7qZ5WuEVz9J0doFzL%2B05muZ2Pof%2F58G%2BHJGXiskbsmPSS7tyWfKHdM7jFfwzLQyYPLdd9niWRGsf07PbvbK73QszJmA9%2FThwzDvh%2Bq9BjqkAbR8q%2B9hNfK24AoxciNeXay8fyTxszl3EkdtRaZsjFPf%2FUqbNstAZq30xuyhCWw8A15%2FihEmpSzNbVT0k3KLm%2BYr2vxtipRBqZu4KgkdrFH6bO6LL1mp%2FxMfMQnKX2dQ%2BO0hIB0f4kmFRedthhJn77D7XSKmdOnDtNYCAo16%2FxlwXqG%2F1Y8blkLPFqj5%2FcL2Fal%2BZPvVVaTiLxrM9B%2BW5csj%2F7aG&X-Amz-Signature=85f6f9224ad8d152c3f446a22a356e977119ff8b9e3f2518ac607721d57a8e80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH6EN535%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0Zyo1v5pgTV6qzVSLgJyzRE0o5Y01mD2Lh%2BBwWqLhUwIgEpsu8k%2F8vUlG740H1lwE9vMnmHS8nxdfBtUcaIsB540qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSVzZCHEqU3Sbe6myrcA1XGyTI3%2FKofPdC%2BaWRqD7mdn5yb1CKou78A8mTgL9Z40f1RB2GEbHvB5bFTYaC1hDa21uQSC6ODYI%2F%2B9IYKP4nKkHDWuEq40gV5sE2EiZdNX8GBV9YY35t0vt2Mflx1wXITIBtwkkvdlB%2FKMrf9UzNllZ4tXnnOYRB%2BBOhQmWSikIXW4%2Fd3p%2BarBL0BwNPnIqmpicAdm3TsS5i2JXkzJvYdTyetixPVBWDLmNPnvmQWvrGtS1x2QBZO0hQc6Z6hWvz%2FjFYqCv8kNcxydncoJ6c4ddrzhNt4km5HgbVW7gjG2yCBa%2Bony47BSFpILxUS%2FqMABN8gW9rlIW04o7YjGL3CxTcZgOeZAy9gtwCJ5wM0B7wTiYj6rn9BeTdd2GfHS9GVsm3Lj1mNmn5gxW57SVQ8oBEWWPfAW1NLonm%2BX6zPr82blRriMsN3%2B1pJqZ7HgeGe8FWSssAKww0F2fCkWI%2Boo3aMfyRo3w8Pa29eoW%2Bx4DDAecKRUtzF%2B23sACvT9eEwHi6NR2VANIUZdDGelgeMFZ7PnW6gKm2cL3RhnJfNdB85saA8I3gg%2FacC9iKHBkg7jTrCfKqH3hpi%2Fx336hVV7tGwOkIA7RXXMkRFF0bny3zHY1tif0cBqdNkMOai6b0GOqUBhYapf1YWCPpftar09cBCX1t4zSxy1Phq997mE18C2meWwBzCsC3Mzpmo1C93Jeaklc7fDVKtVEKfqXBAQJa5fRdv759B%2BPlztXLN%2BcDOvA32zlG%2BkUYsreLiZgnht8AK5URcbeNtw6rYuRGCjm8zFJCvYyFXXjMTp759Zxs2FoC1O7irkREaQZEPR0%2BSaBGAZeasZ3LPlGxHfUEUO1ZYmjlFl8F4&X-Amz-Signature=943af802749d3519c6b11cfb4ab656dbfcddc3f4961b9c3c41584c201024c8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
