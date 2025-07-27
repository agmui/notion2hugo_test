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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5SQ7GJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDNqwPb%2FnKpYnUcworl2u9R9h4kdJodsdsfBeje7rlyYAIgGTzmFk%2BJXaHKN8QDZm9XLii0tgBwD%2BvtExNFlYN51AEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBg69sR0aPRuj3JKWyrcAy7McNlTmsWvoqkqdbSDdZ2tvHPa2FVIMsTNZOWxv%2B6oC%2BE417iE13PjQQUNtlnr2kTdwsgkYLWPsf%2FxRdyMGQneLYjsl54krsxuakQG9uic7Ag9rZl%2Br1QzXdta%2BiZ8JvweI%2Fr9avmQPcGGwxGidVOwT1bWOEnTowXYjYdAytRRGuBnhBQFmuwIVFEfX7f%2FZhj6WwK7KRYxeUV6ymDnz1XWoUx5fKoRkF%2FBl7%2BBImzzvEqmG35D9WX1OX%2F1ttK12U0aeaMMIUPsoizujXcrWcxYQUdHeb2R3%2BRTk2FhotVy5IalEO7TbYd762VXEmGmFM%2F6L7q6%2F4ssQACGAX%2BA5%2FEOR6VXWoDezEirk0NJOgm9e12W44BcNZuGL5dJiPxlaT0qjepXG%2Fh2aiK3cZAy4Y%2F%2FZvDJOUNyDXSCpLQaGH1iQoqRI7oAtp0Er2c8tXFkp5n07A%2B4WC89elN2Yhf2V6S%2FrX%2B2OIv6Ynahgnb4xdruC0FQJ%2FN7qKZBo4SZ68%2BvkgTJ03UOl%2F2qGiBOcZfFlM86aWAjf93DClwxGt0RQvO1rmQyMDvE5JecRRlg9yNTc1dhndccEnqe6ZxwNJaUXwMBAMw23HtMHotln4BBJschp6QzYzswfB9qXs17MOa6lsQGOqUBtCElZzeoTmLRPrWc%2Fua3hLDjrxccfEQUsH3f4%2FGg1aoRpOhS0UoMT7prYk6%2BDyQC5eQ5jU70xQXaPIXHmpxigU6xeGf1DJpFD0gnLUfb0%2FQt9VlPTXqkqZgz3KPndyFi73ETBga28ZS89bhq%2FhpiQ65cvdx9HaHG6CIyFQ6%2FulQno06Y3F09aChOBJh7MLQ4gdJRepemS8QKhh9LLLTRPfIBJTSd&X-Amz-Signature=4b69a2d748cc4afd85a4db30a58518f304edb0d7b7ad4b72702a6dabe7f7640f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5SQ7GJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDNqwPb%2FnKpYnUcworl2u9R9h4kdJodsdsfBeje7rlyYAIgGTzmFk%2BJXaHKN8QDZm9XLii0tgBwD%2BvtExNFlYN51AEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBg69sR0aPRuj3JKWyrcAy7McNlTmsWvoqkqdbSDdZ2tvHPa2FVIMsTNZOWxv%2B6oC%2BE417iE13PjQQUNtlnr2kTdwsgkYLWPsf%2FxRdyMGQneLYjsl54krsxuakQG9uic7Ag9rZl%2Br1QzXdta%2BiZ8JvweI%2Fr9avmQPcGGwxGidVOwT1bWOEnTowXYjYdAytRRGuBnhBQFmuwIVFEfX7f%2FZhj6WwK7KRYxeUV6ymDnz1XWoUx5fKoRkF%2FBl7%2BBImzzvEqmG35D9WX1OX%2F1ttK12U0aeaMMIUPsoizujXcrWcxYQUdHeb2R3%2BRTk2FhotVy5IalEO7TbYd762VXEmGmFM%2F6L7q6%2F4ssQACGAX%2BA5%2FEOR6VXWoDezEirk0NJOgm9e12W44BcNZuGL5dJiPxlaT0qjepXG%2Fh2aiK3cZAy4Y%2F%2FZvDJOUNyDXSCpLQaGH1iQoqRI7oAtp0Er2c8tXFkp5n07A%2B4WC89elN2Yhf2V6S%2FrX%2B2OIv6Ynahgnb4xdruC0FQJ%2FN7qKZBo4SZ68%2BvkgTJ03UOl%2F2qGiBOcZfFlM86aWAjf93DClwxGt0RQvO1rmQyMDvE5JecRRlg9yNTc1dhndccEnqe6ZxwNJaUXwMBAMw23HtMHotln4BBJschp6QzYzswfB9qXs17MOa6lsQGOqUBtCElZzeoTmLRPrWc%2Fua3hLDjrxccfEQUsH3f4%2FGg1aoRpOhS0UoMT7prYk6%2BDyQC5eQ5jU70xQXaPIXHmpxigU6xeGf1DJpFD0gnLUfb0%2FQt9VlPTXqkqZgz3KPndyFi73ETBga28ZS89bhq%2FhpiQ65cvdx9HaHG6CIyFQ6%2FulQno06Y3F09aChOBJh7MLQ4gdJRepemS8QKhh9LLLTRPfIBJTSd&X-Amz-Signature=fc01728334271ab32daf2de7c52daa94225032622744f5d018614cb6092f4e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5SQ7GJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDNqwPb%2FnKpYnUcworl2u9R9h4kdJodsdsfBeje7rlyYAIgGTzmFk%2BJXaHKN8QDZm9XLii0tgBwD%2BvtExNFlYN51AEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBg69sR0aPRuj3JKWyrcAy7McNlTmsWvoqkqdbSDdZ2tvHPa2FVIMsTNZOWxv%2B6oC%2BE417iE13PjQQUNtlnr2kTdwsgkYLWPsf%2FxRdyMGQneLYjsl54krsxuakQG9uic7Ag9rZl%2Br1QzXdta%2BiZ8JvweI%2Fr9avmQPcGGwxGidVOwT1bWOEnTowXYjYdAytRRGuBnhBQFmuwIVFEfX7f%2FZhj6WwK7KRYxeUV6ymDnz1XWoUx5fKoRkF%2FBl7%2BBImzzvEqmG35D9WX1OX%2F1ttK12U0aeaMMIUPsoizujXcrWcxYQUdHeb2R3%2BRTk2FhotVy5IalEO7TbYd762VXEmGmFM%2F6L7q6%2F4ssQACGAX%2BA5%2FEOR6VXWoDezEirk0NJOgm9e12W44BcNZuGL5dJiPxlaT0qjepXG%2Fh2aiK3cZAy4Y%2F%2FZvDJOUNyDXSCpLQaGH1iQoqRI7oAtp0Er2c8tXFkp5n07A%2B4WC89elN2Yhf2V6S%2FrX%2B2OIv6Ynahgnb4xdruC0FQJ%2FN7qKZBo4SZ68%2BvkgTJ03UOl%2F2qGiBOcZfFlM86aWAjf93DClwxGt0RQvO1rmQyMDvE5JecRRlg9yNTc1dhndccEnqe6ZxwNJaUXwMBAMw23HtMHotln4BBJschp6QzYzswfB9qXs17MOa6lsQGOqUBtCElZzeoTmLRPrWc%2Fua3hLDjrxccfEQUsH3f4%2FGg1aoRpOhS0UoMT7prYk6%2BDyQC5eQ5jU70xQXaPIXHmpxigU6xeGf1DJpFD0gnLUfb0%2FQt9VlPTXqkqZgz3KPndyFi73ETBga28ZS89bhq%2FhpiQ65cvdx9HaHG6CIyFQ6%2FulQno06Y3F09aChOBJh7MLQ4gdJRepemS8QKhh9LLLTRPfIBJTSd&X-Amz-Signature=2bc5dccb67816fc5175ea0214c575509d8cc0b4d5f38fa157d3b902903949a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQK2PPSV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDJyVrHQlQgn4afgQYep5e7q5%2BnnPcDtzmVrmYDmc9dIwIgPwYc6FduLE0RvFK%2FB0%2Fg5u9tGkTcs6iwHULvaacwXIcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMI8C44VxfPYkSDg%2BSrcA6b%2BQvBmIh7ADFq%2BohHZUVOFWAj1Qi%2BwRSxT8g4ZU%2F2Vh0WUiuo1cbmzna4%2F718980aZVAlkeTSg0d2%2FddyUbMS3%2Fqp55aSUMpEbfEMkdcci9IzlroTdEQDDt%2FhiDD3aTE92hpvCC3M18B%2FpkP3ZsVPD3O9%2FkTLvemjpa1kAPLdxz9ecsIaWlzkTiFbGqUiTsvjVztWP0NechO3HPLeHtvcgRGEz5LIp72rGnOZvAOwrLQdzIGEU0LaTEO3iOfChsTOP9dLl%2F7bgx5WKFlvxYVlgEa4nJWWxJGTGyhxt44vEtF85uk0%2FViSq7OuMsw4WYzmNFzmGvBdBQdWo8mTn1Ienm4JZ5TaHM5jixDmnmCAnkoD6nwx1v9rN2aDQTFATbL6gUD%2FWjpscN%2F0IN1Slno4uB1lhUS%2BbK5DcRwQ8h%2Bd6OAB1MNztY%2BQoMn8lFVEvMj93bzsIoLe883TNR3st5pgRWnUqkGObrT%2B5gjXGe0WsAs3d9VEC0fT3fVUab6j2RD1iWKx8y%2B8uQEw7IysoNuqE5eBnA8UNOLkZE8%2FRIbnXA%2FK%2F68YwuGLKpBOS7ro%2Bk%2BuN9CCoYzr7yo1miTm932w3ghMd32I%2BXD5H%2FsJTTF2kgvcNzBRHS1mNlUJGMIa7lsQGOqUBA41T9qXbtzdeROPqKhXQUDCV1%2F%2BxF9NvmM2F2B37lwbeHtCvzaEf%2BMP6qIsHyCiH6NoEb3O2O6CAcFpqsKucJNubJ9XSbNlfKC5fMJiWWULdbqr06V9u20fNgVp%2FaETfLRNZW8bsRQQmEPLMylVaxvJRmGCn8I%2B8RRdq67UeS45mktWZ5N6vYjt4q6gLN03xKToVsyLI7RYDRGCm3vtNSL07Gdpx&X-Amz-Signature=23d747135e7812d4de1c2235ec2cf09635e7d2cba7f6ca9d316ef25409daf4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEWDUDA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHka8xSZSgEmKbZAxyb%2BwdIxN%2FprhIgubSKCWSPzCFb%2FAiAQiMKzT%2F0Tlm3vk6DqwYBZTJtm6S1VxGid9qz7oZ2I%2BSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9gnHsP%2FH2C84t9iGKtwDQJtytDe2ZGZUsrXnxJWWWwlxo7HVVj9Aopqju%2BZnQUc%2BD9sTRWeoUxr4gJVNQysqCl5fDPU%2BdcOcO8brqTWbPakI1bNZFXW345t2d6cn9PIWGXP73xYEg0b%2B1Hk1QzbTf%2F9hkPBnnBg0gX4PwJ1ZIXzlFpjPaP5V5m3hCdp9AoJtzPuytBFyAaKp%2FpHUoJc%2BrvZoTcNKXi7S2ka7XMgaZk8dCDPsVsiLXo%2BG075RaiNf6gBOBAWwHAzcdMrw35u0VcNDrOejiSK9avwcZRedSb3R6TNdyjdtlyG%2B%2Bt%2FeairMesHFrMJbQcqQlLe%2BUZDs%2BgLehgKh%2B795YTq3672uCroG7i7gQqLLc%2FAURSShiLOoieUh48Wv0bnQax4hldLRciOaSozlpoa48IshRB%2FghnDtu1Y816U99ihnAivBNu6IuE%2Fg1lWtoyhC23Za3dE8EzQ4Jmpg0PAOHShgflK%2Fvk%2FnfoTDqg%2BUKpM7R3jz%2BwcWC3R02thTp7b9H3KtolFAwGluAeoQxv6giULTp7DdvYxlTRfzHK69bhtcjI6k6ZIDx%2BrQcMbOl8in7KVNfIQ8x1oWWGDFtnDJ8J6F0jADPvnFxldfdpnRosxErQvhrRI3fl12yBrgARaBlhUw37qWxAY6pgF4w4%2BhwvxAcdiRgUxLgJEtfknsSLSJ0PxjcNrn5G3Ds%2F3Tst8WMyJJ9UHI60qMPyAgoX%2FPnvIhIAjtPCo3tP16M8rtjQrgUXj2iu0twsceu1pnllXHKPs%2BbR4LoK2WTQ1D%2B2H9ruuuoE17QqqFrl5BDuYZMyinpw1ec4p5UO06T68viWCd8EHoYhMENY451uhZBdIQ9piaDPXFdjqg4aQc%2Bn9ii04X&X-Amz-Signature=df3064e950c7578f6eeaf84fbdbb6594acad6cf67f21b0bf76f0cabc96a4ac75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC5SQ7GJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDNqwPb%2FnKpYnUcworl2u9R9h4kdJodsdsfBeje7rlyYAIgGTzmFk%2BJXaHKN8QDZm9XLii0tgBwD%2BvtExNFlYN51AEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBg69sR0aPRuj3JKWyrcAy7McNlTmsWvoqkqdbSDdZ2tvHPa2FVIMsTNZOWxv%2B6oC%2BE417iE13PjQQUNtlnr2kTdwsgkYLWPsf%2FxRdyMGQneLYjsl54krsxuakQG9uic7Ag9rZl%2Br1QzXdta%2BiZ8JvweI%2Fr9avmQPcGGwxGidVOwT1bWOEnTowXYjYdAytRRGuBnhBQFmuwIVFEfX7f%2FZhj6WwK7KRYxeUV6ymDnz1XWoUx5fKoRkF%2FBl7%2BBImzzvEqmG35D9WX1OX%2F1ttK12U0aeaMMIUPsoizujXcrWcxYQUdHeb2R3%2BRTk2FhotVy5IalEO7TbYd762VXEmGmFM%2F6L7q6%2F4ssQACGAX%2BA5%2FEOR6VXWoDezEirk0NJOgm9e12W44BcNZuGL5dJiPxlaT0qjepXG%2Fh2aiK3cZAy4Y%2F%2FZvDJOUNyDXSCpLQaGH1iQoqRI7oAtp0Er2c8tXFkp5n07A%2B4WC89elN2Yhf2V6S%2FrX%2B2OIv6Ynahgnb4xdruC0FQJ%2FN7qKZBo4SZ68%2BvkgTJ03UOl%2F2qGiBOcZfFlM86aWAjf93DClwxGt0RQvO1rmQyMDvE5JecRRlg9yNTc1dhndccEnqe6ZxwNJaUXwMBAMw23HtMHotln4BBJschp6QzYzswfB9qXs17MOa6lsQGOqUBtCElZzeoTmLRPrWc%2Fua3hLDjrxccfEQUsH3f4%2FGg1aoRpOhS0UoMT7prYk6%2BDyQC5eQ5jU70xQXaPIXHmpxigU6xeGf1DJpFD0gnLUfb0%2FQt9VlPTXqkqZgz3KPndyFi73ETBga28ZS89bhq%2FhpiQ65cvdx9HaHG6CIyFQ6%2FulQno06Y3F09aChOBJh7MLQ4gdJRepemS8QKhh9LLLTRPfIBJTSd&X-Amz-Signature=bc1f84548d9266d1c659ad5d61254ab46bb2126dffe9b5bf994a0f985642dab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
