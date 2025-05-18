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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUGIOID%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFl1lxapK%2B64S%2BhpXYYRb41X40WWLhunHB01p%2BaJfp2wIhAI0PrM1EEJ%2BnGgOaAKjKIpvfkkG4IOoBUJwfnz8p24%2F7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwOfDx1F51mJkI%2FxuYq3AP7DUnM%2B56%2BN%2FEG78l%2FTYk3hmJg8NRNiDQU1sDe%2B0kB6WQV1K7h8WczX37qCZC9ncw2Kftl18cHtxkZIodS3YePHRnFwpYigBSc7Wlw6qllzdRc97IrB7kF9U03x1OltFgf01MG3Mbuzrdr5etLqjOlMO33VT8HCNcZAEcCnBeqjAjlBZdKJcQYeDCH6Y6U99jYqPklPugmExhcVmS%2BxK3skfjSwKs7ThMgv53jY36dfgVJnnq%2FBIozVrFL5zw3JSAW8C%2B21PDdGkRYRNDeltWFaDj9DPG3QMn0S0FATJQ0FdAQNBCtuY%2BLHGTzcRQdLvnCL%2F%2BzIfxc33rTIkC14Zy2dvbiQ0VIcfqFnf5Hu1H3bnqPnJjXfPYjJnNb3nwplwDN%2Blif5fy0vFD6yj%2FHXnTbNYhh9XigKu7syJgK0psaSm110nmQc56QHeBLGT5Q3vdalgeV0Zjeh%2FK1nPNcfrgbI1sTFhSOEbAZv2vEMgSCs2jkizlzvVM1%2BYnUzDfyZB9QtdZTyqoX%2FEpanByiTKSn%2B33TxXfbV%2BROdIiXejy9tUfs%2BqvlPD6c0Vsetk%2F%2B3UQLjeSmw4aeg0dT%2BLEQ1o55etEvF8e4hLliSE2lg76DYi%2B3WZ%2Bc%2F9c1GSHPCDD9r6bBBjqkAVq3VymwkrLYhaw8wFkiBUBvU4UbAW9r0kCufmHq2N%2BsYICGFwRQsL9J9aHR1puBJx%2FuzYWa1qflfue8%2Bw9L9mXGtA88YDiDL3QDx2wGXkL0tdJle0DOSprclbvOWENfP44hU5ExHU%2Bu2GeELyCqhua7aU%2Fq6CSDZRJDnEkMjVkY50W0k2rVgN9NJLfsuJnULhIf8pu%2FXXaCvAuhgDsf5GkbT8g3&X-Amz-Signature=2108903c5bfca09e6648531071055710c76d82611201869f19cb0f894ffc3414&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUGIOID%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFl1lxapK%2B64S%2BhpXYYRb41X40WWLhunHB01p%2BaJfp2wIhAI0PrM1EEJ%2BnGgOaAKjKIpvfkkG4IOoBUJwfnz8p24%2F7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwOfDx1F51mJkI%2FxuYq3AP7DUnM%2B56%2BN%2FEG78l%2FTYk3hmJg8NRNiDQU1sDe%2B0kB6WQV1K7h8WczX37qCZC9ncw2Kftl18cHtxkZIodS3YePHRnFwpYigBSc7Wlw6qllzdRc97IrB7kF9U03x1OltFgf01MG3Mbuzrdr5etLqjOlMO33VT8HCNcZAEcCnBeqjAjlBZdKJcQYeDCH6Y6U99jYqPklPugmExhcVmS%2BxK3skfjSwKs7ThMgv53jY36dfgVJnnq%2FBIozVrFL5zw3JSAW8C%2B21PDdGkRYRNDeltWFaDj9DPG3QMn0S0FATJQ0FdAQNBCtuY%2BLHGTzcRQdLvnCL%2F%2BzIfxc33rTIkC14Zy2dvbiQ0VIcfqFnf5Hu1H3bnqPnJjXfPYjJnNb3nwplwDN%2Blif5fy0vFD6yj%2FHXnTbNYhh9XigKu7syJgK0psaSm110nmQc56QHeBLGT5Q3vdalgeV0Zjeh%2FK1nPNcfrgbI1sTFhSOEbAZv2vEMgSCs2jkizlzvVM1%2BYnUzDfyZB9QtdZTyqoX%2FEpanByiTKSn%2B33TxXfbV%2BROdIiXejy9tUfs%2BqvlPD6c0Vsetk%2F%2B3UQLjeSmw4aeg0dT%2BLEQ1o55etEvF8e4hLliSE2lg76DYi%2B3WZ%2Bc%2F9c1GSHPCDD9r6bBBjqkAVq3VymwkrLYhaw8wFkiBUBvU4UbAW9r0kCufmHq2N%2BsYICGFwRQsL9J9aHR1puBJx%2FuzYWa1qflfue8%2Bw9L9mXGtA88YDiDL3QDx2wGXkL0tdJle0DOSprclbvOWENfP44hU5ExHU%2Bu2GeELyCqhua7aU%2Fq6CSDZRJDnEkMjVkY50W0k2rVgN9NJLfsuJnULhIf8pu%2FXXaCvAuhgDsf5GkbT8g3&X-Amz-Signature=174c57e7021a44405384acf118e68026d48c6e47d724c6254e631e01697e1b86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUGIOID%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFl1lxapK%2B64S%2BhpXYYRb41X40WWLhunHB01p%2BaJfp2wIhAI0PrM1EEJ%2BnGgOaAKjKIpvfkkG4IOoBUJwfnz8p24%2F7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwOfDx1F51mJkI%2FxuYq3AP7DUnM%2B56%2BN%2FEG78l%2FTYk3hmJg8NRNiDQU1sDe%2B0kB6WQV1K7h8WczX37qCZC9ncw2Kftl18cHtxkZIodS3YePHRnFwpYigBSc7Wlw6qllzdRc97IrB7kF9U03x1OltFgf01MG3Mbuzrdr5etLqjOlMO33VT8HCNcZAEcCnBeqjAjlBZdKJcQYeDCH6Y6U99jYqPklPugmExhcVmS%2BxK3skfjSwKs7ThMgv53jY36dfgVJnnq%2FBIozVrFL5zw3JSAW8C%2B21PDdGkRYRNDeltWFaDj9DPG3QMn0S0FATJQ0FdAQNBCtuY%2BLHGTzcRQdLvnCL%2F%2BzIfxc33rTIkC14Zy2dvbiQ0VIcfqFnf5Hu1H3bnqPnJjXfPYjJnNb3nwplwDN%2Blif5fy0vFD6yj%2FHXnTbNYhh9XigKu7syJgK0psaSm110nmQc56QHeBLGT5Q3vdalgeV0Zjeh%2FK1nPNcfrgbI1sTFhSOEbAZv2vEMgSCs2jkizlzvVM1%2BYnUzDfyZB9QtdZTyqoX%2FEpanByiTKSn%2B33TxXfbV%2BROdIiXejy9tUfs%2BqvlPD6c0Vsetk%2F%2B3UQLjeSmw4aeg0dT%2BLEQ1o55etEvF8e4hLliSE2lg76DYi%2B3WZ%2Bc%2F9c1GSHPCDD9r6bBBjqkAVq3VymwkrLYhaw8wFkiBUBvU4UbAW9r0kCufmHq2N%2BsYICGFwRQsL9J9aHR1puBJx%2FuzYWa1qflfue8%2Bw9L9mXGtA88YDiDL3QDx2wGXkL0tdJle0DOSprclbvOWENfP44hU5ExHU%2Bu2GeELyCqhua7aU%2Fq6CSDZRJDnEkMjVkY50W0k2rVgN9NJLfsuJnULhIf8pu%2FXXaCvAuhgDsf5GkbT8g3&X-Amz-Signature=0d72112037d7029c0614d1e8135d810daaf464dd2098cd0520d61656d4e37111&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM67V2NT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkyeHFJOMCJTa3hljWAQaH6Pzr2W1Ta80p7crjYzdTYQIgcD0bvzP3hSOk1rvDlLdeid4uVLb7r9Zf3Eek%2FewWVbcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKNz36vKKtBmv6wu1CrcA%2FZZvbW6xd7Q8oCCD%2FyRz7zMqIbP8nmSQFSY7W6PNktvL9EouJR61FRr2gOWhVBT0bY5LiigbRVd8GkDBpybyuHFlRUhnogn2PLyGbiq8OqEVX%2BvsV2JFDfhPpSqHqg62xJbFBLWQZtD5t9ob8LwoE20X09fqXqCwg4nmRT6E6dhKfw8O5wcLOX5d8HXbO8bKn7Ua9g17M7WNDNbLzh5xvke2rOgEcaEl30LBoEuU9QYWhVbTo1DQaa8C%2BWSGP7rniCqzZLraxz%2Fkjk%2FErjjjM7MN59kpQfCg177I0Kneo5GCfli5F1LelMMbEYJVzE5vrWV8NKbZ3mXlPvPdyj6m6mnMq1Ge7hRfWryXPdjiOO67Slsqb2jTPc04AMz2Z8BAjzBdq7OAcVxxZLz42OIS%2BdrTp4iff4n7KFe4LZkTkOsKBtHZJPN3LEVJa%2BR4z7g6PW85553MuTuglkg0WagGTjdUMm5Dhz8ilkfwRqIfwoNcUcf%2BkmijuMaAX870TGubfsTFBxFbhUVRV6Kng0AL5WFgrYTJF643eOB7Kawge9Vqv6oijnN%2BFQygsAWm%2Bk1fxvTlkW%2FhiKfUbWieClfLZ2Lgj0m5IbEsbyW%2Bo42PSpRatWmXrHIda2sVNGWMOXPpcEGOqUB5JSOtzbBuWF8Qgq%2F8kvyXlTM3KxF60JnAc%2FmVg%2Fc8ZCxWb0ySRPf8qOy9ydHscXrdr%2BHqshBTYx1S3VLMJSNCS45ue%2FYcAoAu%2FJMtevcTaTZA8rmOFX8CeqqWOXvLYHI8j%2FB1HBqTKwjrLIRPrP1YrwSVgHfERKQqtMwKSg6LgvYl11eod9Pog4S2mVdBvzusrm2r4lsGh0tPn%2BZ6VfX3AiPBeLC&X-Amz-Signature=c55c39e2b7334ff80dc63afc65039cc2b4456965e3a1a91f34f2e34060cf12bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DLJNJDH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0nG5bBTZWbKe9PVDwvzX3X35%2FDOBTJv3a6WQj69cpCgIgV6fw%2Fsn5S0CDh5dkLbWEk1l6HEMruDbq1kwZhGppMo8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBo1O%2BupWLQ53cew5CrcA%2FrMQ6UxfQUOR%2FS3r8ioGBvyfhAetthL5aj6yKaev%2FfO9GWhTwSFKkh5BCH5Uht2VsSbtRyCgsj%2B6uR9IqNRCMZYa2VIAAws6sSFBWTY5bz%2BNmmtwQYVVU6uXWUZbQoGoBkpUkdc50BPa3%2Bjd6wV4FSXJA6TXEJEZzB0BvokiSHYpwIpfZkkSgQoEf04B5wLvAEo57RV5NozXNWk150bqkzBEp39ePnX2Nt1YwIvaTaZ2rVknuxLUJH4W%2B0Zb%2FdSoCuP%2Bi0HdqjpUxUA2XbYN6mbFWbbV0mhmp4Qo1iSf%2Bz6X3HRQMJrSjT3ev8R6TMt5%2FPBzP8CRR%2BF0gYjwcXhww7exBcPtDSBVPwyQs%2Bj%2BSLEuPODCn5WRT3%2BLZfcqh2Ce7upNIc10v6BZMRcY1kbkbxpNZmcJXg4QVX98z%2BKGwftPRgHSx65dRmx9vTLG3o1j0wvJb%2FRdZYDgE%2BgWOHoV%2Bo9BhrawvIXLTaHWXkAVEJxQIluDM7%2FR1gWRz%2BJWjy7dpAg3uKL4ySyiTb%2FCzKJ0gB4zbCDcClXt%2FqHn35bQk%2FeiHKqNc4xXtiFHbTpxvq31dfLclOVa8AbNhkcEPor4kLormo2LGvKvJbf5%2FGvIR2sQF4hVr%2FYkTOtrtSOMM2LpsEGOqUBeZy1ZQVsIV6%2FmBftFUTA8gy8FqrNEC4aXTfkyiZAg01QA%2B4iqIO3MrRCAG%2Btx%2B29XtPllw30Lz4h53xNzAJY%2FydxhgRj15gF8tAwfX5yKPdNifpjjxyLlZAD%2FNlTyDYqa05GUSEY%2BhofSccrdGpzQSQxFURgImb%2Fgne8hjVR3ffztN6FOpaNROP0Top3kRcZ%2F4X5NUbHc0w1ntUvZgUTTB7quSnH&X-Amz-Signature=6de806f32f9cc8548822dc3e041749e49b0b07e85a7f0ffccf398a6af3b24503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUGIOID%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFl1lxapK%2B64S%2BhpXYYRb41X40WWLhunHB01p%2BaJfp2wIhAI0PrM1EEJ%2BnGgOaAKjKIpvfkkG4IOoBUJwfnz8p24%2F7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwOfDx1F51mJkI%2FxuYq3AP7DUnM%2B56%2BN%2FEG78l%2FTYk3hmJg8NRNiDQU1sDe%2B0kB6WQV1K7h8WczX37qCZC9ncw2Kftl18cHtxkZIodS3YePHRnFwpYigBSc7Wlw6qllzdRc97IrB7kF9U03x1OltFgf01MG3Mbuzrdr5etLqjOlMO33VT8HCNcZAEcCnBeqjAjlBZdKJcQYeDCH6Y6U99jYqPklPugmExhcVmS%2BxK3skfjSwKs7ThMgv53jY36dfgVJnnq%2FBIozVrFL5zw3JSAW8C%2B21PDdGkRYRNDeltWFaDj9DPG3QMn0S0FATJQ0FdAQNBCtuY%2BLHGTzcRQdLvnCL%2F%2BzIfxc33rTIkC14Zy2dvbiQ0VIcfqFnf5Hu1H3bnqPnJjXfPYjJnNb3nwplwDN%2Blif5fy0vFD6yj%2FHXnTbNYhh9XigKu7syJgK0psaSm110nmQc56QHeBLGT5Q3vdalgeV0Zjeh%2FK1nPNcfrgbI1sTFhSOEbAZv2vEMgSCs2jkizlzvVM1%2BYnUzDfyZB9QtdZTyqoX%2FEpanByiTKSn%2B33TxXfbV%2BROdIiXejy9tUfs%2BqvlPD6c0Vsetk%2F%2B3UQLjeSmw4aeg0dT%2BLEQ1o55etEvF8e4hLliSE2lg76DYi%2B3WZ%2Bc%2F9c1GSHPCDD9r6bBBjqkAVq3VymwkrLYhaw8wFkiBUBvU4UbAW9r0kCufmHq2N%2BsYICGFwRQsL9J9aHR1puBJx%2FuzYWa1qflfue8%2Bw9L9mXGtA88YDiDL3QDx2wGXkL0tdJle0DOSprclbvOWENfP44hU5ExHU%2Bu2GeELyCqhua7aU%2Fq6CSDZRJDnEkMjVkY50W0k2rVgN9NJLfsuJnULhIf8pu%2FXXaCvAuhgDsf5GkbT8g3&X-Amz-Signature=fdd2da65c0a30940f9d32948aefcb1ea49c8186bf3898c06d6ebd9f8cbd59d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
