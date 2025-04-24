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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNVGT6J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPO3Xdi0WzV9Rb0xiqdCzy15f%2FLBzTHT3w9qnfqPKrnAiEA0wQIuJVlxBJhBvJJnk6CaUiaPdiX9%2FGtbTBMW6787%2BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAs5DGbGDprZC%2Bl5yyrcA367oN8%2BCir9lMJhWqeaa5dNKwXdujXM81E3unytgp86S4oQtRaywsEGi5oAs0M7fko5NV7Y0vj74KF9aftFM10asSaEVNrERUWO3c3kcea1EwUQc7jUEw5lpuqL3Gqa8xVO7UIAKCo3BwYgOdhvCPK%2FypOTkQ%2F3C1o07P7wXvsvYrOWqMuVgBUDAZ7V2tbn%2FGw%2FJcOZT2RDRmcIs8iFMh7lsEy5cKQVu3ImGUFwZD7Q3OV79iletvEeZX%2BWwTTYza8eGo0PPciR%2BHFnhsyaPWwL5ycW8PIEB2q9LQUHJbAXnuJQ0UNAgKFgwNDLvW3FNywo%2B2ia1SSKx7bGZOhSoDa9GueExsFFLuNV3yDoEIuYqYojy6N9bfDefRneYLWSOZKZbTM58kB5POGrufpMEQu9HbglzMQHSts29CuSrkcGkYwxoVWmocyWMcvUapY3vK473f%2BHCaAYz2EaSScXmtnrqRM72YRvmax6yYuCV9uRaCNrsEJXOMVprp8upFc8QMgpsI0XokfmyDvt0pr%2FSRwpGxVNqvIOhp7hwAxZrzX3mENBvFiHsm89VzGHK80keg1Q4xIF0IjMLWzlsI1CnoHGPtkZUZhzLNoOksBYT2beYyj6C2aZGGkkGgxjMLrbqsAGOqUB1K%2FRl3mjHXy3PYLt6iW61WAewWVij0Ul3nb3Anun%2BUrWc9cpHRMTKYnlH4KRB9NKSK3hCV6q4mCia%2FMzVV%2F4QC6QlkAo0lE0bTAXwKz9C9PShlx3R85d9JuTPxs7NgC%2BUavH8r1%2BSYgcHEo09zsKPQTR%2F1HwWYHTQtpNjnNKiMQNlOUBLIeCGDRvnPNR4BnBI2CKFyX6vkFpVEj8UCg3KDAS3bOr&X-Amz-Signature=41292d65315c42d4985e8fc9ecd4605171ececa214e0cf3d63bd218d66d579bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNVGT6J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPO3Xdi0WzV9Rb0xiqdCzy15f%2FLBzTHT3w9qnfqPKrnAiEA0wQIuJVlxBJhBvJJnk6CaUiaPdiX9%2FGtbTBMW6787%2BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAs5DGbGDprZC%2Bl5yyrcA367oN8%2BCir9lMJhWqeaa5dNKwXdujXM81E3unytgp86S4oQtRaywsEGi5oAs0M7fko5NV7Y0vj74KF9aftFM10asSaEVNrERUWO3c3kcea1EwUQc7jUEw5lpuqL3Gqa8xVO7UIAKCo3BwYgOdhvCPK%2FypOTkQ%2F3C1o07P7wXvsvYrOWqMuVgBUDAZ7V2tbn%2FGw%2FJcOZT2RDRmcIs8iFMh7lsEy5cKQVu3ImGUFwZD7Q3OV79iletvEeZX%2BWwTTYza8eGo0PPciR%2BHFnhsyaPWwL5ycW8PIEB2q9LQUHJbAXnuJQ0UNAgKFgwNDLvW3FNywo%2B2ia1SSKx7bGZOhSoDa9GueExsFFLuNV3yDoEIuYqYojy6N9bfDefRneYLWSOZKZbTM58kB5POGrufpMEQu9HbglzMQHSts29CuSrkcGkYwxoVWmocyWMcvUapY3vK473f%2BHCaAYz2EaSScXmtnrqRM72YRvmax6yYuCV9uRaCNrsEJXOMVprp8upFc8QMgpsI0XokfmyDvt0pr%2FSRwpGxVNqvIOhp7hwAxZrzX3mENBvFiHsm89VzGHK80keg1Q4xIF0IjMLWzlsI1CnoHGPtkZUZhzLNoOksBYT2beYyj6C2aZGGkkGgxjMLrbqsAGOqUB1K%2FRl3mjHXy3PYLt6iW61WAewWVij0Ul3nb3Anun%2BUrWc9cpHRMTKYnlH4KRB9NKSK3hCV6q4mCia%2FMzVV%2F4QC6QlkAo0lE0bTAXwKz9C9PShlx3R85d9JuTPxs7NgC%2BUavH8r1%2BSYgcHEo09zsKPQTR%2F1HwWYHTQtpNjnNKiMQNlOUBLIeCGDRvnPNR4BnBI2CKFyX6vkFpVEj8UCg3KDAS3bOr&X-Amz-Signature=31557caf2d4adbc1e3ca4182be6bb52cd20831129a3b2b75d100b66e4c5d3672&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EYSIZH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLH%2BMpSvMrL3%2B9St%2FJgm1XTToX2svkwCRtlqDTLGUUDQIhAKPjLkSNmxweNHKXCk6zNNwjDnbluLJObjwwlRLAuV1aKv8DCB8QABoMNjM3NDIzMTgzODA1IgwFIT5wQnRSWCsoCTUq3APvyV3LD8Y17e0ew%2FPNaCOHomNfNyOvbm5TQXDQ%2FbcV9OVdQXkwtQ0qoRwKMNx9sZxmM2%2FvcnkJWhlp0fpxNnEMCnZ33ahVW39i%2BtYvp2EzfaFm7LAWxT3tF9EuRTVeySyQMK6G5rHbDtZP7Lp0fIG5OhSXd0%2F5ILDxEP%2Foiy1iNIAzqqHhZHhTG%2BOQ%2FEy%2FPxo5BVM9kKL0MPH75Mgo9tkjUPLvvmHhfQ4wm39zImve6aTmxdVy5PvRgDPtaoBbkEFF8GOfTSsmBEO%2BYkJZvRyz7s3T236MjbNWD4B%2Blh%2BoxzbSoD8x6ysxcsZQOLnekVMcPdmCEtBd2I8mSH2JyCsulUy0K6ynlD4uRnS7zW5%2BMzEoUt1YV1SRo8lUs%2F%2BHvaTlUuNi2AHhgWRzmBZ11nBPkJfl8Za4w9n%2BNSfUVhpMOIsearkNk%2F9NvBgsjQh51BIdXoY2gJgziQvO%2FveI6kqxugp0TgKkqHGu4YuyrPRf58hvX6VjzzpMOzRtEMSg4Xaf3n%2BdYrW2QgDoDv05vQOsv7sRKEU3G%2FJkRTKmD1bfuxI1lc9VoZ2FKog1ZHa4ipy9Fsae04QAOJ18JHog%2BN71MwQQGkDu5zKxYEN%2Bn8gOZS1UxPTEO82X3i8GVjD72qrABjqkAa0KsV1m1nnpxQQVYwx69%2FKf3nghyIConQ%2BOGPoDS%2BlVIVUvo%2Bn%2By%2F%2FBSshO52Lmn%2BqfRMRbgdUpw3h0NY6Prkq%2BgM%2FBVh4e0%2FQGlyx%2BRqJJsEfLnCmosk3WtMRZNhYVZwKP9LuDOQXBjuC6vC9TA%2BhrOAWOWyOJX%2FP6rBUVYqnTc9FDdJH2Wr%2FwIOt2DWQPv7rIhysMoYFrse9lF5w5aXsyi%2FWV&X-Amz-Signature=474100bd93a4dc5acd516a2bb48b8ce0cf6a47159242d53d97e2c21bbaba3997&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZIALV2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfqNQU%2BToubvapAwVtwiABoI0wK1SgMEu6h5mGFI%2BBmgIhAOdAIaZDPYnKP0V%2BH%2FB18xxAis%2FmuvdnxsPjQShjTAtoKv8DCB8QABoMNjM3NDIzMTgzODA1IgyV87KFpwQZgK7qrFEq3APxnG0aLRckCi2MdAunOvNle2QW3Mc1ORccOPikHqdFmun2HqaRYRFDI9Yq6W9BaSaiC3Wd1CxO8pca0hvvTm5LMpuLRaJgds%2BEcDaIv%2B5wAItiHuT2tAhrrvk3Bd7Ya1vbCLE1lXst9hYqqXT3CFVA0Yh5gkXeH3WKjQVGqUt7IWnrp0JSrV3Mr%2BCpgkhst0hFESSu5bEGlucLJ799sOHIJ0jzz0KkHIKCxA3rJjhliSHbB6ciQJnbD%2F%2BroxvT7WVgKdB9GJxGg57yuVw%2FvTV4qrrnzRAg4nPxIJD15d7y96wpDBgRfBrFisrtvR2Aqs4MQZYx7XrVodnQYkmgRbB%2FhjfiMk5G0cSpwrgdy8w7B6%2BXt5SDhHGEyRi4CKGikQYEQnlHocGQPwaprYUbYsxFwYVB%2Bz4Sm5cXX20Sp2OYIA0LGa8nYixoi%2Bn6IcWi5Z0tbEeWNgOTNKN9oMs001RWn%2B907DesDwVkekohT5Rw9nD1Ki6VV7DdvAq5QusJtjkNfR1eC1fRsu1N6uOE2ujdRb9K618X9Sw3T%2B2%2BysIk9rO%2BWDUJnHSotY0ui9th7R1kLrG5yM7QRoP5Q5XU35oBpvq0AIK8NGo0pmLlGpTL8GaDB3NDn%2FBJ3X4JuzDs2qrABjqkAXkSffX1jC04Ww6zwciWMUOXgxynA%2FbI0ABM7KaLo2JFcUJEKpL6H8dej%2Bq90PqtiLkAM3EexeSz9tciHyG6jMihdlZBrwEZGTs40TSCQHcPwigv5KXX0%2Bp6wO3KjpmiSF2jsbJ1HrYl18BM%2FnSKENfkFFE1llnCsAyncq%2BWfYzuyIlpa0XJmuYS%2ByDVNS81%2BVZpViI4b8SGVNxCxShDCk6ZHvL5&X-Amz-Signature=20bb41f205bf5405fcc8f2dd85c38d76eeb22db970d127d493d08a687adb4320&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNVGT6J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPO3Xdi0WzV9Rb0xiqdCzy15f%2FLBzTHT3w9qnfqPKrnAiEA0wQIuJVlxBJhBvJJnk6CaUiaPdiX9%2FGtbTBMW6787%2BYq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAs5DGbGDprZC%2Bl5yyrcA367oN8%2BCir9lMJhWqeaa5dNKwXdujXM81E3unytgp86S4oQtRaywsEGi5oAs0M7fko5NV7Y0vj74KF9aftFM10asSaEVNrERUWO3c3kcea1EwUQc7jUEw5lpuqL3Gqa8xVO7UIAKCo3BwYgOdhvCPK%2FypOTkQ%2F3C1o07P7wXvsvYrOWqMuVgBUDAZ7V2tbn%2FGw%2FJcOZT2RDRmcIs8iFMh7lsEy5cKQVu3ImGUFwZD7Q3OV79iletvEeZX%2BWwTTYza8eGo0PPciR%2BHFnhsyaPWwL5ycW8PIEB2q9LQUHJbAXnuJQ0UNAgKFgwNDLvW3FNywo%2B2ia1SSKx7bGZOhSoDa9GueExsFFLuNV3yDoEIuYqYojy6N9bfDefRneYLWSOZKZbTM58kB5POGrufpMEQu9HbglzMQHSts29CuSrkcGkYwxoVWmocyWMcvUapY3vK473f%2BHCaAYz2EaSScXmtnrqRM72YRvmax6yYuCV9uRaCNrsEJXOMVprp8upFc8QMgpsI0XokfmyDvt0pr%2FSRwpGxVNqvIOhp7hwAxZrzX3mENBvFiHsm89VzGHK80keg1Q4xIF0IjMLWzlsI1CnoHGPtkZUZhzLNoOksBYT2beYyj6C2aZGGkkGgxjMLrbqsAGOqUB1K%2FRl3mjHXy3PYLt6iW61WAewWVij0Ul3nb3Anun%2BUrWc9cpHRMTKYnlH4KRB9NKSK3hCV6q4mCia%2FMzVV%2F4QC6QlkAo0lE0bTAXwKz9C9PShlx3R85d9JuTPxs7NgC%2BUavH8r1%2BSYgcHEo09zsKPQTR%2F1HwWYHTQtpNjnNKiMQNlOUBLIeCGDRvnPNR4BnBI2CKFyX6vkFpVEj8UCg3KDAS3bOr&X-Amz-Signature=b8e731fa41a797036e1ec153d9ef50138ae06083c21eae7ffb79409ed0408ced&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
