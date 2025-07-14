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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQVYHBA3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDNwfArwHZwOmcRlLJIOJ60hODVg9fm33KYNHyLIGquCAiEA1WlsUuxfBoATrhXMUJk22jPQVzw0n6WQb%2FSsW5BRy58q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEAylMeK46HcimdpoCrcAyl3S%2BLFDpwFzdd0Ye0oA6ef8p75M7ykJvlBx3HpScwJoDwjPC74CIC3S1HKR4v5OV8voq1CaTJWYIbj8oVHSjqcpRey8UcMhQnahwJy0ftbXSUiraCFrUBm%2FTxcU1RDy3VviXll2UR1ZTbnU4nMUaQCtq%2Bkv3oqywUwLNd7DBIeYrr84gCq8nS4Yz9cYMnWcJJjgzZ1ugStOwZBqTVyM2bYnpCzxyyQdUcMl3RT23uHH4Zu7rUpwidA80cwwOdy9qoNANgvzDiy6Tk09Tyj6TtypcIjdPi9Vc%2BBu6pJLt5HB2LxmIqI8aEEniXkqsQT5HLhu1jRArw2pxQUiVAvJcNlE7HGVMZsBkj2luIxoq%2FsmxihuANWR3%2Fbcxc6ecM42EuYUn1QO6lc7yXQ2LchUiaT9yVzbpv5y7NbR%2BzBtxkEcfpu%2Ffh%2BET9HuWj3v%2FEJiejlWqTHxTeG4sRyh4Fh5ANthhUcq0SeVyRx4BWOAjrNPOA3FcWer593La0VSLVNkBqYVYksLKSHn34UOUObs8gRcJmQukK7qpe62qDL7OmTIRZAdfPu4s55eISSbZwCSIE24Slk%2BkuBzKK%2Fu9fFYrEA%2BtK6An0hKIBU%2B42C308V5S9WY%2B4dvIXJvVUkMKGF1MMGOqUB43JzckBYnv6d1ZmEuzY2MDJ9DxAm1Yb4aAcErgPS1yO7nldZb9YIBTMOivOeZzWJwf6HnFrVWmBqYI%2Fr3B%2BZSYFfJMOVB6mhGHI7Pm%2B1kSa4MNvqDXjoTl4CGhUyZ5UP6kWZZGZu9rIeQoRwuz%2BbAg327G0hvgvrDDBL5Dn5oRIgDl%2Fi7X1%2F%2BDHDuWmZ36d9Mkh2AbQOMB1IwAmAv8sW7hHGJM3s&X-Amz-Signature=5e7529dca8b0ddf8db32cc7931bdbcd2ece5b9c64a6fc4786a5dbf57aa75cc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQVYHBA3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDNwfArwHZwOmcRlLJIOJ60hODVg9fm33KYNHyLIGquCAiEA1WlsUuxfBoATrhXMUJk22jPQVzw0n6WQb%2FSsW5BRy58q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEAylMeK46HcimdpoCrcAyl3S%2BLFDpwFzdd0Ye0oA6ef8p75M7ykJvlBx3HpScwJoDwjPC74CIC3S1HKR4v5OV8voq1CaTJWYIbj8oVHSjqcpRey8UcMhQnahwJy0ftbXSUiraCFrUBm%2FTxcU1RDy3VviXll2UR1ZTbnU4nMUaQCtq%2Bkv3oqywUwLNd7DBIeYrr84gCq8nS4Yz9cYMnWcJJjgzZ1ugStOwZBqTVyM2bYnpCzxyyQdUcMl3RT23uHH4Zu7rUpwidA80cwwOdy9qoNANgvzDiy6Tk09Tyj6TtypcIjdPi9Vc%2BBu6pJLt5HB2LxmIqI8aEEniXkqsQT5HLhu1jRArw2pxQUiVAvJcNlE7HGVMZsBkj2luIxoq%2FsmxihuANWR3%2Fbcxc6ecM42EuYUn1QO6lc7yXQ2LchUiaT9yVzbpv5y7NbR%2BzBtxkEcfpu%2Ffh%2BET9HuWj3v%2FEJiejlWqTHxTeG4sRyh4Fh5ANthhUcq0SeVyRx4BWOAjrNPOA3FcWer593La0VSLVNkBqYVYksLKSHn34UOUObs8gRcJmQukK7qpe62qDL7OmTIRZAdfPu4s55eISSbZwCSIE24Slk%2BkuBzKK%2Fu9fFYrEA%2BtK6An0hKIBU%2B42C308V5S9WY%2B4dvIXJvVUkMKGF1MMGOqUB43JzckBYnv6d1ZmEuzY2MDJ9DxAm1Yb4aAcErgPS1yO7nldZb9YIBTMOivOeZzWJwf6HnFrVWmBqYI%2Fr3B%2BZSYFfJMOVB6mhGHI7Pm%2B1kSa4MNvqDXjoTl4CGhUyZ5UP6kWZZGZu9rIeQoRwuz%2BbAg327G0hvgvrDDBL5Dn5oRIgDl%2Fi7X1%2F%2BDHDuWmZ36d9Mkh2AbQOMB1IwAmAv8sW7hHGJM3s&X-Amz-Signature=0f9c80a77c8cf2d268dca0e998e56ffbbde18ff5ee4021cf74ab7f8a7bb6820a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQVYHBA3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDNwfArwHZwOmcRlLJIOJ60hODVg9fm33KYNHyLIGquCAiEA1WlsUuxfBoATrhXMUJk22jPQVzw0n6WQb%2FSsW5BRy58q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEAylMeK46HcimdpoCrcAyl3S%2BLFDpwFzdd0Ye0oA6ef8p75M7ykJvlBx3HpScwJoDwjPC74CIC3S1HKR4v5OV8voq1CaTJWYIbj8oVHSjqcpRey8UcMhQnahwJy0ftbXSUiraCFrUBm%2FTxcU1RDy3VviXll2UR1ZTbnU4nMUaQCtq%2Bkv3oqywUwLNd7DBIeYrr84gCq8nS4Yz9cYMnWcJJjgzZ1ugStOwZBqTVyM2bYnpCzxyyQdUcMl3RT23uHH4Zu7rUpwidA80cwwOdy9qoNANgvzDiy6Tk09Tyj6TtypcIjdPi9Vc%2BBu6pJLt5HB2LxmIqI8aEEniXkqsQT5HLhu1jRArw2pxQUiVAvJcNlE7HGVMZsBkj2luIxoq%2FsmxihuANWR3%2Fbcxc6ecM42EuYUn1QO6lc7yXQ2LchUiaT9yVzbpv5y7NbR%2BzBtxkEcfpu%2Ffh%2BET9HuWj3v%2FEJiejlWqTHxTeG4sRyh4Fh5ANthhUcq0SeVyRx4BWOAjrNPOA3FcWer593La0VSLVNkBqYVYksLKSHn34UOUObs8gRcJmQukK7qpe62qDL7OmTIRZAdfPu4s55eISSbZwCSIE24Slk%2BkuBzKK%2Fu9fFYrEA%2BtK6An0hKIBU%2B42C308V5S9WY%2B4dvIXJvVUkMKGF1MMGOqUB43JzckBYnv6d1ZmEuzY2MDJ9DxAm1Yb4aAcErgPS1yO7nldZb9YIBTMOivOeZzWJwf6HnFrVWmBqYI%2Fr3B%2BZSYFfJMOVB6mhGHI7Pm%2B1kSa4MNvqDXjoTl4CGhUyZ5UP6kWZZGZu9rIeQoRwuz%2BbAg327G0hvgvrDDBL5Dn5oRIgDl%2Fi7X1%2F%2BDHDuWmZ36d9Mkh2AbQOMB1IwAmAv8sW7hHGJM3s&X-Amz-Signature=d31155c84226e8f7c3a0562a12145815e95d216ff3c254706e6a9ae27e348c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ETKFJBY%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC4dYRhXtcnZdb%2BRQyu1L4NBQ8qtXO%2Fqi%2FoLw3kCHvnJgIgHHIeVdcOUAgy37IQCQuGZr1z2WakqYbLvR5zFV6CTSQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIJQU9nz80A8mWL5eyrcAy%2FYKdKfRUQsw4NKv0pSeLIGebJZlCDQFJMGhNdLE9sefXIXKTL4T%2FK0fxqOuqbKm%2FmDMflHBRKuzI3ah%2BZnvR0dUruaUYSvybgmmePxLrQDF3ORek%2Bj77X7x2p0DY7RKqZOgE3uLJuF0bM%2Bf5pRPlnGIdNFiAZlZLor5JcBOnABg0rLRXXgrDjlZcOlX4lwcTE8eUk%2F2EDfkc3J%2FxcHdHTcG%2B0Ub%2F1FxfW1WeO40qZaAZok9YNE1JlzjvLLvpmPezammtVqMujYGOZVxi580WYz4JyiTV3LzyzAP9ZNfT2VgZ6By39TECqnDCT%2BkLmGd9LfByRZGQ90zaepLnQwmaydDbgdOzyGodH5Xt2K9HUQgem4Gp25SINzafhGAnDbpxL94K1DS%2BsDl9QyMPjydh5HbWUBHACHOaAFMMExl%2Buwn0jnCjYQ02VohEh071j6pRV9ZlMj6pbZAEG0KXyaa3dZOKEaZb85IlAn4Il5WBna57hSBuDFavBXovucnOBtx%2FkyTbTs3Jj93EWqpMwx57BjtFUsR1dBw3KnY28HLlB7xbIasUC7eofDS9J7iASdITx9Di%2Bs1VZS4J%2FR5msr0Pe6s1qtTE8gO8H75miXJBkb18XBcQbe9wW9Yoe1MIWG1MMGOqUBJOJuBwKSVvaNO2J1o%2FUT4XJ%2BFEZOwwNWMfUAbWsY0QlejYuM%2BeYo8VLGa5UR1LPmExuzceYFt4J7q8fkAXi7AvCiSvC3%2B0mvYtu9K4y4dTcRM09MKgEWYiDGgq1yAgGzb3T%2BLGeWl6eJ8T7zBwfVpt3TfbL5pe4SZ5wrgT1LsyROE41dXiQDmKtAklli9H2TNuc0XMfgrTqr%2F6b%2BUUagQBDeAcYc&X-Amz-Signature=0209a1ff2164435e91bbc8d28debe67d23b4456359e2a86f9f0a3a31359c1890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TOUCJC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCzfKrxu1qafsOaIR%2F9b2HCa%2BM%2Bl0g8K5OAqRPMkOnU1QIhANIiX%2FXV3uUVgufOhvprLhtKdFHXaCkP%2F%2F70b1ct4IIWKv8DCC4QABoMNjM3NDIzMTgzODA1IgwPZqvNqXCUdayehA0q3AO4x664x2CyTdzkjjDNNnPZSN0wzT0vZS8zZxk5qnaw%2Fp%2FvUaSkdsN6t9ph%2FtNKnQjlwPgj0M%2FGhAVWEi%2BUERP5RnE1mhzC0h9OK1PECg5T%2ByUFmii%2BggvRubw5rs6DlVbsW4iE%2FCz%2FiZJXyJVSpAPDyq%2FojwuW9C4x%2BDP6xJCQfMbheaC1wxfmQSbHqn1BhAxcT1%2FkhS7lOSPOlAzedb%2FxjsVr1nEQqhmtGUZhQLMecPdhhBi1KwhjIBItq9JN8w8r2akaafsiHzow3xraRusnmGkajw8I8iV857dZ5QcsXXOUl%2BAtjI4HlHG9cq9VzFc5TWaRaNXKwHo3FoHnWywb%2FkfPN6yaOu0VsuJ%2Fv6g6BdtEIcgpEJnRwq4WR0SZ6SOsRq%2Fmogq5XJx4OL8lMKAVP2w%2Fa4feifegNfz8qQxJXkYjT8hWMJp7PVIGdAHK5qqbl5aTKqhTKjMIpVK6iAcNFXBaa3FW1W135d7x0OqhOizx8mBvTzEC6X3jMSfA5YoZMRSSYWEs2aDiD1jb%2Bl7kBJ%2BgIaHE5uEX7FzVOumT9j7m2APsg2hnX9rhBne6MfvdcJkPcGpckW1yQDegZEqhHTMTRotoj697gdM9f2aDrQPhPvO86azUmm50YTDthNTDBjqkAWutHYiv6jEDzIOvGnzVnI0M%2BIPYr18Gzli71HyfaxaSbFExrfFtPo4XpZtQaM3geSxDfhZDvsNI1J7KIM44%2BI8qpL9Ns4AjVQ9jdfUd5hFlZdydawhxLRt3iUg0gocBkjiqmbwxpjZIhU4bReCcCy9fgqIkBNxGIuFqiCsO75fD2HQmHQh2%2FnW5M8Y%2Fxs9ZyraPNZ1ILk8SsPkxkX5IzRfshzR5&X-Amz-Signature=77d12c41ebb5b5ee28396c16472d53477adc5052d0976c97c33887ea04969f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQVYHBA3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDNwfArwHZwOmcRlLJIOJ60hODVg9fm33KYNHyLIGquCAiEA1WlsUuxfBoATrhXMUJk22jPQVzw0n6WQb%2FSsW5BRy58q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEAylMeK46HcimdpoCrcAyl3S%2BLFDpwFzdd0Ye0oA6ef8p75M7ykJvlBx3HpScwJoDwjPC74CIC3S1HKR4v5OV8voq1CaTJWYIbj8oVHSjqcpRey8UcMhQnahwJy0ftbXSUiraCFrUBm%2FTxcU1RDy3VviXll2UR1ZTbnU4nMUaQCtq%2Bkv3oqywUwLNd7DBIeYrr84gCq8nS4Yz9cYMnWcJJjgzZ1ugStOwZBqTVyM2bYnpCzxyyQdUcMl3RT23uHH4Zu7rUpwidA80cwwOdy9qoNANgvzDiy6Tk09Tyj6TtypcIjdPi9Vc%2BBu6pJLt5HB2LxmIqI8aEEniXkqsQT5HLhu1jRArw2pxQUiVAvJcNlE7HGVMZsBkj2luIxoq%2FsmxihuANWR3%2Fbcxc6ecM42EuYUn1QO6lc7yXQ2LchUiaT9yVzbpv5y7NbR%2BzBtxkEcfpu%2Ffh%2BET9HuWj3v%2FEJiejlWqTHxTeG4sRyh4Fh5ANthhUcq0SeVyRx4BWOAjrNPOA3FcWer593La0VSLVNkBqYVYksLKSHn34UOUObs8gRcJmQukK7qpe62qDL7OmTIRZAdfPu4s55eISSbZwCSIE24Slk%2BkuBzKK%2Fu9fFYrEA%2BtK6An0hKIBU%2B42C308V5S9WY%2B4dvIXJvVUkMKGF1MMGOqUB43JzckBYnv6d1ZmEuzY2MDJ9DxAm1Yb4aAcErgPS1yO7nldZb9YIBTMOivOeZzWJwf6HnFrVWmBqYI%2Fr3B%2BZSYFfJMOVB6mhGHI7Pm%2B1kSa4MNvqDXjoTl4CGhUyZ5UP6kWZZGZu9rIeQoRwuz%2BbAg327G0hvgvrDDBL5Dn5oRIgDl%2Fi7X1%2F%2BDHDuWmZ36d9Mkh2AbQOMB1IwAmAv8sW7hHGJM3s&X-Amz-Signature=9e0c9523cbfa0e33897a82b3a97620649fa96dc05fbed9b84f7c8e49ba1dbe05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
