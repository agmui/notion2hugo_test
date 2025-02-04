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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL67ZPGR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDgBJ3XXrh0og%2Bcw7K0mNjkDDNl3u5uP3X5aFeiSP2PXAiEAtsfgbqkjnBz8p1B2hFF9HSKN4x66pnM7LBbjkuCSGagq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGjzjxGqAN2NRkFLXSrcA75LU0N8MxkuxzEJ9IV8z3NzBB946nnPhdUGRp7vZYDl89aUWGOFTDZsJtPjxZ4ce3pRnxWj0HteXKYo%2Bg%2Fl%2FVFoqcWIqcQXOuoemEpg%2Brm9CEcKClR6Bmze6RBlV3CCPjG7wQVaaM2dnCFqBJFaC8VjZ96XKWtyo30%2B0xhxO5IYHFxRKa%2FVxW25pR5zD6WFEaN6Z2Spg8YvnJzfU9dd2kaKlqH%2BBmWzX203r7ySIDXF9891uArmUcx%2FcYsLMSs61GxbdKiR%2BDdR5cf9ASL5Y8OMw8tEKWahIGIhKjp1dLuS1XAO3OKfed1lQ3Tu6JePkhmvZNveK3D%2BF3v7pb1pk%2FXRAijbxDHdI6YWqRcr%2BCeco96PG0Frp5PKSnYFSXiyyWKYqGfuYfSEAaqshwSASpxCOggUIf6nNu1kcOwMZvvHn0mdloVAk%2FYlzOBfpWxB20hpmW%2BuaqNQBLPz6ns2Am5aOavxU7oVEqH4WwQqNiQxuM1Slq9ckGkUo5LlhadPV01%2BbDMbWApOxITn052grvyY8L0eflmNSwk9VvsAThNTSp2Sz7S097okKcaxQQqZaOIJbkSXW4tZEjnuVAW3bVFonh8kl1Rfa43sr6m6eFZVv8ErctzaELklw4GbMNqihr0GOqUBLrRMNpQpUWu9GsBlu6Ynx1zV%2Ff22JbfG9fhzVAuvzHVc7XdZFFSAMLJq9ghCMTidE3Hg4WkBFS%2BREgOKiq9FQuYmI10StzaXsoNM%2FJD0uH7qJr9QJQSd52maLCJAiTxrByPhoxGtX84M0fDQ6JMqfB%2BOD%2BPHOZIpxcd6ZS8cXCzGCfLNkzc3he7xQ9zoLcB2iGiExc1uj%2FO6bxUeRQm7K1IMnQiS&X-Amz-Signature=e708338bfae04f9c8b6f6a4a78b5c66954a7efe30d4fff534c0eb22a9427c5ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL67ZPGR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDgBJ3XXrh0og%2Bcw7K0mNjkDDNl3u5uP3X5aFeiSP2PXAiEAtsfgbqkjnBz8p1B2hFF9HSKN4x66pnM7LBbjkuCSGagq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGjzjxGqAN2NRkFLXSrcA75LU0N8MxkuxzEJ9IV8z3NzBB946nnPhdUGRp7vZYDl89aUWGOFTDZsJtPjxZ4ce3pRnxWj0HteXKYo%2Bg%2Fl%2FVFoqcWIqcQXOuoemEpg%2Brm9CEcKClR6Bmze6RBlV3CCPjG7wQVaaM2dnCFqBJFaC8VjZ96XKWtyo30%2B0xhxO5IYHFxRKa%2FVxW25pR5zD6WFEaN6Z2Spg8YvnJzfU9dd2kaKlqH%2BBmWzX203r7ySIDXF9891uArmUcx%2FcYsLMSs61GxbdKiR%2BDdR5cf9ASL5Y8OMw8tEKWahIGIhKjp1dLuS1XAO3OKfed1lQ3Tu6JePkhmvZNveK3D%2BF3v7pb1pk%2FXRAijbxDHdI6YWqRcr%2BCeco96PG0Frp5PKSnYFSXiyyWKYqGfuYfSEAaqshwSASpxCOggUIf6nNu1kcOwMZvvHn0mdloVAk%2FYlzOBfpWxB20hpmW%2BuaqNQBLPz6ns2Am5aOavxU7oVEqH4WwQqNiQxuM1Slq9ckGkUo5LlhadPV01%2BbDMbWApOxITn052grvyY8L0eflmNSwk9VvsAThNTSp2Sz7S097okKcaxQQqZaOIJbkSXW4tZEjnuVAW3bVFonh8kl1Rfa43sr6m6eFZVv8ErctzaELklw4GbMNqihr0GOqUBLrRMNpQpUWu9GsBlu6Ynx1zV%2Ff22JbfG9fhzVAuvzHVc7XdZFFSAMLJq9ghCMTidE3Hg4WkBFS%2BREgOKiq9FQuYmI10StzaXsoNM%2FJD0uH7qJr9QJQSd52maLCJAiTxrByPhoxGtX84M0fDQ6JMqfB%2BOD%2BPHOZIpxcd6ZS8cXCzGCfLNkzc3he7xQ9zoLcB2iGiExc1uj%2FO6bxUeRQm7K1IMnQiS&X-Amz-Signature=ab1c9458ff24cfe25aae9e11e958092091cb018ed93ef9eba2a14c3287686085&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KVVK3HL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDLSLpYh9oGt5tOrlq3DfkaaRB1PE0EOcUICdK9lajXTwIga%2BkPaiMiDPJEda%2BMCvnqElZSY1gtwJMiaIACFNS0fOUq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNPL35Z%2FC6woQs67ACrcAy7fg0cgirXtdYioaKBLXgB1PRoIh6UU5B4LmW4fyhMV2FjV7UzsKwwqm6IamZERqdvWSx4vpIhA7iXbMOyxu9SJlbppk3BUF%2FnvvA3G5OPibH4bbtYyj1r3LxyLpUWN0kk4pIgzsaxIiNNFTn4ncgTbyjYYNsEkWlRyGLoEoqiOe5Psu94%2FFPQpZ5QUpZ%2FBHQka4REU3OkQFLhKAz1uNOSmH7utAtWwzbbrvBnJl5j2OOvkHsNfzEqaGPHVuO6bqAk5EaPOmkY%2BIps7ti72RFQltz5eTE2xeO7XSn6VJPW0iQ2UNwrhEecic0VtKKzRWnElgaXLvgce4N1VMaLbjKMgue%2FqKGWy7P11kQcxhVnQalCWL%2FzMtM7r%2BHFpiisNNyAXMygsGwFAJr23%2BibrLsidK5kzYZHR49gkfxXEAOb1pWXepiWq6Cj9s3LTpNiR8veFMiwZK9YvGNggCypqrcFqf%2FwHAzE6qmRdIW9o5QeUwPZAmTmUYK4myeYMnnIzQU30wZ%2BW8oFK8gw9vyg275YTQq%2BXpx8Zg1cjZgYabS8YRA8MEy%2FL4A91DPWK%2B8Xi4E2bu8xY7C6KWuS7Q34YQSThBrdfcA%2F436bIqSVozB6urBIwrFAslawbuLJdMI6jhr0GOqUBM6Yk%2Fk%2FnwjcZE%2F46WJpJvUcihYBSTbpvKkj%2BBNeoLqP6Gy1EO39Isx8KYhwa3CdpTABJvIinEWvUo2lbn6yZ6kD61BCQWpVd0mboCEc8r9Vif2D384XVjUI%2FM3cuz0vCuqG7UG9Z8h%2FALWSpN731OTFezfG6klRSjyuwQ%2F7s7uUhbsBCmLKgD4bXZMHU5eqWwUkcSdnISm9iGcNml0uz1QVl1goB&X-Amz-Signature=79d4e2ff352706930d16fbf362b8b5b4f666a4ad3b635aecc69b156950f6cc46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EBQNKP4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC5GMyEDaTk1L8wSnGfDfVTqAzAB132E7Z4sOLYaOac6QIgSymh7gslEobyDEN53kmR2D0u51y31OqXimZ7q8fZ%2F54q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBSsDU5v2ZH4Vo7iqSrcA9N6ayv%2B%2FEtdU0p%2BtQkkHClc2WC5mxBTogyr0S1FBhMvM1kbTvxuBNsGhnptud00WPUTZpaFdJ8Gw3jG9PZHSuYznO4EeCYmciHYCHvnuJDRBeMXc1MEDKHi3x5piXPyBcXD8KFXglpWvjRkmDA5PwRFs0eWGARhG74r15KJ%2F%2BcYBmjY5V8VGd7T6P2Q46cCssSOTlwNTai6deJwcAOsH%2FOz95%2Bgu%2Fd8f5PyLeJ1XETsGRhBUz24HfUNqcdkI1JliWYwdH7IL8yeMcbbwOcemeFidUfGWUrYcBsFInDubCTU4RRhg%2FN%2B0PTCPG9bkyPT40DRX5R%2BX2DeMZpolf6x4QhCLk2sLdQF%2BnXnvNFWtzFduj%2B8wJcrKp8YYCSg%2FUo4%2FJ65jjRPK04aWoeWJ1e3K%2BZmcUhaM3o5nzzHUh1wkOMpvR%2FqwOIUdz7DtrV6AsQrQME1SWNNoX%2Bx8n5RDBLbTnyZ0t5BfTSVEJSMgrRTxilSSykFaJ10yhraGHXtXe7u9RHfrFMS5DoLtn4peDeGJzPA%2F5LBqVbEzTshEOSVmZ3%2FmQJNdj9X90OSzsF1GWT2h25CmKT7qd%2Bg1nBsRkfvmFUli40qMDy7TWK00Z6jVsCdjbVuM1DEshe73DGvMKijhr0GOqUBX5OTstRMNj3Cmu%2FTyK0larz2SHkbVJdRNJFh8z3vg8pC2P8UAasrHu%2BzWlFz%2BlAReqggLP2%2FKGgaUizs4dksIe23rwqhfnh2UN69ZU%2FTmieo%2F8E4M%2B%2BB6lLlAihQ7RC2kEbl57vdJXnqWPOCUIEiQkea9l3O1XWpPmm0ceqEO9mMxjVOj5dbFBHMEgunZEEGaqx08WKgDeHmQjAzx3hO5ll1SNi%2F&X-Amz-Signature=69d9ed0ed2eeba71d46eacbae0d6820d7ae255e3302e309037800d1da0f29a10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL67ZPGR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDgBJ3XXrh0og%2Bcw7K0mNjkDDNl3u5uP3X5aFeiSP2PXAiEAtsfgbqkjnBz8p1B2hFF9HSKN4x66pnM7LBbjkuCSGagq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGjzjxGqAN2NRkFLXSrcA75LU0N8MxkuxzEJ9IV8z3NzBB946nnPhdUGRp7vZYDl89aUWGOFTDZsJtPjxZ4ce3pRnxWj0HteXKYo%2Bg%2Fl%2FVFoqcWIqcQXOuoemEpg%2Brm9CEcKClR6Bmze6RBlV3CCPjG7wQVaaM2dnCFqBJFaC8VjZ96XKWtyo30%2B0xhxO5IYHFxRKa%2FVxW25pR5zD6WFEaN6Z2Spg8YvnJzfU9dd2kaKlqH%2BBmWzX203r7ySIDXF9891uArmUcx%2FcYsLMSs61GxbdKiR%2BDdR5cf9ASL5Y8OMw8tEKWahIGIhKjp1dLuS1XAO3OKfed1lQ3Tu6JePkhmvZNveK3D%2BF3v7pb1pk%2FXRAijbxDHdI6YWqRcr%2BCeco96PG0Frp5PKSnYFSXiyyWKYqGfuYfSEAaqshwSASpxCOggUIf6nNu1kcOwMZvvHn0mdloVAk%2FYlzOBfpWxB20hpmW%2BuaqNQBLPz6ns2Am5aOavxU7oVEqH4WwQqNiQxuM1Slq9ckGkUo5LlhadPV01%2BbDMbWApOxITn052grvyY8L0eflmNSwk9VvsAThNTSp2Sz7S097okKcaxQQqZaOIJbkSXW4tZEjnuVAW3bVFonh8kl1Rfa43sr6m6eFZVv8ErctzaELklw4GbMNqihr0GOqUBLrRMNpQpUWu9GsBlu6Ynx1zV%2Ff22JbfG9fhzVAuvzHVc7XdZFFSAMLJq9ghCMTidE3Hg4WkBFS%2BREgOKiq9FQuYmI10StzaXsoNM%2FJD0uH7qJr9QJQSd52maLCJAiTxrByPhoxGtX84M0fDQ6JMqfB%2BOD%2BPHOZIpxcd6ZS8cXCzGCfLNkzc3he7xQ9zoLcB2iGiExc1uj%2FO6bxUeRQm7K1IMnQiS&X-Amz-Signature=3b8458c6ebb8f2107acb95db24c78add5a427d77b1ac13bd9971a4f548bb8752&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
