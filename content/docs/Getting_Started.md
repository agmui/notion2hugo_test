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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPY6CPZW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLYeKQtjC8%2BlhDFkMeyiPZNojAPXmdcPWBuR8XupUUQIgeRcbvLzVYRy5LDq7W56mgxOxHoXhMaZl4g4iqsDs46MqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlAIoeKQcjuD8qFBSrcA5a%2FQbOUjO1%2FW4znZswWCobk9Ci6HfTm%2Bma0s5rKkEYMuYO68qqUumoQi6vTnhmlcT9jIz4Zsz52HkJvzTg7gPRE6UwXLxwUpAWO7KNvempFYTWbYaQAKUye5ENnX%2BudgnXoQ4Y1hAreWXAA8WILncrSCj6lF77YswnE4eL1UuKIgKgnLIW4b1XGjKukbu9e2%2FgE6jL7wuPOtkjL9jA3u8YD0DcrHMJkDW0zQEgecGGdQhSZK76hMbf%2BLcq6BIPVhC8oMRR2AGzWldagx5Y%2F1%2By6HFGuGjG%2Bfm%2BNeNdbAEvH%2B5unSukHs276qFJC1d2bRociHA8TyRKgFBj%2BBqpwE498J%2BW8IVfYN6tMmf4fwya91AHhxlR5wOGoK6MZwTPwq4aXjX7fKrfVfTOmrk1sifJtmfaLCYPmDs2rYlFoD15Xih6nvzZihm8JF95wxSMZQjbaAjl9RNDOdJGsUbzjRRsY6wcmJuoKFU2XvPymHD%2F8UEEuZvD7IRdMGiwWejkhJC5Z9PdzZbNETnVUPnPwsXpSn2Ge1rwa3Vdus7R44D7AN%2FJKsVlDoeA1mjkHy3YiBVkPi2HUCoMlqpuhSP1AY6FRlFMkT0dQ0%2BJIOxLEKYRY5cGqdEWDgzgoFCh5MLqX2cIGOqUBiJ40B1d2ZJq8EoyvDUJVbSL8m1ek5j3Safh%2BKP3h8iC94vt1x7STAiQT3FzBoW41iyhgMO6LbczaRwFcFrczpM2v%2BkjOKGZ9HZGfnmHiSn0VrRddQ8fxVIlTaupFRyao58U6wSSw6nhNgjCyGLKfhMTJ4%2FerPVEebriutujfqPB4yjW5Q6QkyxgXiQwiKsgQhN6KCQBmhcgyQi3fB2545HsVWzAr&X-Amz-Signature=4c241f9493868e4fe0ebbe06a92631fd1a81d1573a49033034ccdd0fef454ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPY6CPZW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLYeKQtjC8%2BlhDFkMeyiPZNojAPXmdcPWBuR8XupUUQIgeRcbvLzVYRy5LDq7W56mgxOxHoXhMaZl4g4iqsDs46MqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlAIoeKQcjuD8qFBSrcA5a%2FQbOUjO1%2FW4znZswWCobk9Ci6HfTm%2Bma0s5rKkEYMuYO68qqUumoQi6vTnhmlcT9jIz4Zsz52HkJvzTg7gPRE6UwXLxwUpAWO7KNvempFYTWbYaQAKUye5ENnX%2BudgnXoQ4Y1hAreWXAA8WILncrSCj6lF77YswnE4eL1UuKIgKgnLIW4b1XGjKukbu9e2%2FgE6jL7wuPOtkjL9jA3u8YD0DcrHMJkDW0zQEgecGGdQhSZK76hMbf%2BLcq6BIPVhC8oMRR2AGzWldagx5Y%2F1%2By6HFGuGjG%2Bfm%2BNeNdbAEvH%2B5unSukHs276qFJC1d2bRociHA8TyRKgFBj%2BBqpwE498J%2BW8IVfYN6tMmf4fwya91AHhxlR5wOGoK6MZwTPwq4aXjX7fKrfVfTOmrk1sifJtmfaLCYPmDs2rYlFoD15Xih6nvzZihm8JF95wxSMZQjbaAjl9RNDOdJGsUbzjRRsY6wcmJuoKFU2XvPymHD%2F8UEEuZvD7IRdMGiwWejkhJC5Z9PdzZbNETnVUPnPwsXpSn2Ge1rwa3Vdus7R44D7AN%2FJKsVlDoeA1mjkHy3YiBVkPi2HUCoMlqpuhSP1AY6FRlFMkT0dQ0%2BJIOxLEKYRY5cGqdEWDgzgoFCh5MLqX2cIGOqUBiJ40B1d2ZJq8EoyvDUJVbSL8m1ek5j3Safh%2BKP3h8iC94vt1x7STAiQT3FzBoW41iyhgMO6LbczaRwFcFrczpM2v%2BkjOKGZ9HZGfnmHiSn0VrRddQ8fxVIlTaupFRyao58U6wSSw6nhNgjCyGLKfhMTJ4%2FerPVEebriutujfqPB4yjW5Q6QkyxgXiQwiKsgQhN6KCQBmhcgyQi3fB2545HsVWzAr&X-Amz-Signature=fb0ffea573e188cc24f068d639f4356588eb240a5c63732ed5a7a5345ae8b828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPY6CPZW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLYeKQtjC8%2BlhDFkMeyiPZNojAPXmdcPWBuR8XupUUQIgeRcbvLzVYRy5LDq7W56mgxOxHoXhMaZl4g4iqsDs46MqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlAIoeKQcjuD8qFBSrcA5a%2FQbOUjO1%2FW4znZswWCobk9Ci6HfTm%2Bma0s5rKkEYMuYO68qqUumoQi6vTnhmlcT9jIz4Zsz52HkJvzTg7gPRE6UwXLxwUpAWO7KNvempFYTWbYaQAKUye5ENnX%2BudgnXoQ4Y1hAreWXAA8WILncrSCj6lF77YswnE4eL1UuKIgKgnLIW4b1XGjKukbu9e2%2FgE6jL7wuPOtkjL9jA3u8YD0DcrHMJkDW0zQEgecGGdQhSZK76hMbf%2BLcq6BIPVhC8oMRR2AGzWldagx5Y%2F1%2By6HFGuGjG%2Bfm%2BNeNdbAEvH%2B5unSukHs276qFJC1d2bRociHA8TyRKgFBj%2BBqpwE498J%2BW8IVfYN6tMmf4fwya91AHhxlR5wOGoK6MZwTPwq4aXjX7fKrfVfTOmrk1sifJtmfaLCYPmDs2rYlFoD15Xih6nvzZihm8JF95wxSMZQjbaAjl9RNDOdJGsUbzjRRsY6wcmJuoKFU2XvPymHD%2F8UEEuZvD7IRdMGiwWejkhJC5Z9PdzZbNETnVUPnPwsXpSn2Ge1rwa3Vdus7R44D7AN%2FJKsVlDoeA1mjkHy3YiBVkPi2HUCoMlqpuhSP1AY6FRlFMkT0dQ0%2BJIOxLEKYRY5cGqdEWDgzgoFCh5MLqX2cIGOqUBiJ40B1d2ZJq8EoyvDUJVbSL8m1ek5j3Safh%2BKP3h8iC94vt1x7STAiQT3FzBoW41iyhgMO6LbczaRwFcFrczpM2v%2BkjOKGZ9HZGfnmHiSn0VrRddQ8fxVIlTaupFRyao58U6wSSw6nhNgjCyGLKfhMTJ4%2FerPVEebriutujfqPB4yjW5Q6QkyxgXiQwiKsgQhN6KCQBmhcgyQi3fB2545HsVWzAr&X-Amz-Signature=2e02b9f46104d477b6d5f487ac3877375d05e1681e8613d9a2085aaf85b4bfb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXKVFC2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc0V6Omkt65UaF34vVqsoyfiBuOa3KsOdI3CxE1ZpiPgIgPG5ESy7nngZKWVnXpSOKA0g0OGk9xHtbYpzC4QcS8WoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHOvlG9qfQDp1b1aircA46JMqQxWicNXi5eBmo3KZQcs5Bo%2BmWpLLur3Ddzye9byUHLpQJOOpd09x6XcS4msw%2FhuHksfePxE%2BM5CLf9lAgj6qQg6Rv6DR1Av8%2Fj31K3aFksLfy%2FaWvTroxRLvbyVXlf1iBySXYaOKIW7yQPmPNIF0mj9Lc9XQfwZHfu6iamgm2zRKvn0hDBbI9ai5IZVeNkDiCLYaVVgoJO3FAWx0QrZqM01FGmHso2T18KZzlgxb4OuZVL1rqCHc1RDh%2FcCqAlEuZg6oyJM2l3Wg%2BV6Sqy0zynoZgMelKnacJNpWUBvgxzJgE1FYk3NeCBb7dIo9dGSOMn5Mmsg27Soq0RakomDpMsgaBnFhmobSdiLf5GNnklh0ix7%2FImQY4W1Qoyn7ZKKzCn63zzCY2T0eKsF%2FAMCag3lzqVOa0A0fWTVIybYEzfE6MGWYGV65S02CnyVZ9ekRf0aDy1ckIo7G9hvuki8iyOFkKH0oTUW%2FN%2BHUgNvAC1%2FZXODHRrrIghrMWl7eLK%2BygxN6o2GJIb%2FKmH6YJg190nq9o5p%2Bzy3dL9YdwTOU6sAoI0uubFV9blbN4PkNzBQpASEtYZvc8pYSCUVvwR7CDy%2FvihI%2FL3U16BJx2r6zNnWxo5EOJfJhS7MJev2MIGOqUByCyXaeh4JXWfACn%2FMnzW7d%2FIdB2GmESm2eO%2F5X7QkRFLlixKCztkwqsbQKfQw7ePzeY2Ko6SwmpOgLnw%2FxnDqlrNqLUDMLb%2FlVQQpvqINOf7%2BS0RBxRYHh%2FNBnYhtqSBFO41BPe70Ulhe0mh8chP774FCBRx5QWzl1tJfbEVQcHkgQpvalQaJwSqj8MQSikY0BAqn%2BFGUtEWmu4tvOsCESGgIUm8&X-Amz-Signature=c6d33c8a1f31085104fdafe1bc372fe3c70430618e820de4add34ed7c6af945b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3POHIJN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjuIBJEIq6XVGoHe%2Bpg%2F30xRrIYemd0YDhmHe7Z2QinAIhAIvYvWv1M6RLzstx5oi8iSKYJgpE6SPdYFYZ%2Fb%2B%2BL55JKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfELR6aZt5UbeIshcq3AORkqqYMeb0p2nL6RogFoLb2BwP%2Ff4BweFbKXLyMtX6MKCwY5BQd5wu%2BbodVpw%2Bbw1V2G8BkEBM%2Fr7M7KnBoEf%2FmH13lccmEWqjENxnaJe38ODuCnYo256JsRHDK71uJjnPBpR26GGYe62fjDijQ4VJbz7bXpHvueAR5vJxscLExMLDszhYkUHGtkDxv9Gtgm5gMOMyRi5k4%2FUvvzts8XPQiqlixebgTXCysDbFbaq9ntGrzIP9vviOnFkGlNqAA1WTnAEh%2Fmt%2BSoOcmb1q0zSrPT5i7U293vKNSVHLGcyU%2BkSXqta5CDKIZXRzY1zHVuUiYcW2QwfaJOuTYtvIjMiBR5TGPzzPLj03Q4%2Fe7QXrQvrEPTIUsmCe69neKd6AQ7%2BftXO2O9xIkStKVzJEW757eK6Uf22QZUh8fCAtciIsTbZN%2BBUNPXk9wrT2yKkEfR6CCyPlT%2FYtWWizOvHj%2BLjjWdFXLWFn%2BkdyunmFhzqRpI1h2ppbKk7ee6OGn%2BsMmaDyOSu4gVRUZ%2FDiu%2BfCOFSYQ10oAWuMD9VosiVWnUjywiKrVASETkJGkRY2Pdjxl3FNpVfpFsEUDRK9G%2FOznUibcph9E%2BlxVOIgoCdAWA9aSt7oJJgmyAbCL1%2FvwzCasNjCBjqkAXvOQ%2FKnhOdO4pYNLU7w7EzIdJ205M5VgrdOKrJ3KMxk%2BxjbdRWvULmXnGatzDbdbMvytZpLPnDFPLPh%2FlPt%2BMBJ6Chz9XEJ6jw5GbI7xCIyC1nfcC8zKI5FhrxJ1NjE8fboegWcQii7ZH1E8ufMgrt9fzo7nAT6bNxVRdEOspMTwTWgOxEqwcH8GGCO9YscwmdzNdFQVz5fMeQg0fK4UvnEPdZh&X-Amz-Signature=b110e8c02ffb547843e9ea4e8aae9b07242400f5e9e7e114ca128b2063cf1ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPY6CPZW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNLYeKQtjC8%2BlhDFkMeyiPZNojAPXmdcPWBuR8XupUUQIgeRcbvLzVYRy5LDq7W56mgxOxHoXhMaZl4g4iqsDs46MqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlAIoeKQcjuD8qFBSrcA5a%2FQbOUjO1%2FW4znZswWCobk9Ci6HfTm%2Bma0s5rKkEYMuYO68qqUumoQi6vTnhmlcT9jIz4Zsz52HkJvzTg7gPRE6UwXLxwUpAWO7KNvempFYTWbYaQAKUye5ENnX%2BudgnXoQ4Y1hAreWXAA8WILncrSCj6lF77YswnE4eL1UuKIgKgnLIW4b1XGjKukbu9e2%2FgE6jL7wuPOtkjL9jA3u8YD0DcrHMJkDW0zQEgecGGdQhSZK76hMbf%2BLcq6BIPVhC8oMRR2AGzWldagx5Y%2F1%2By6HFGuGjG%2Bfm%2BNeNdbAEvH%2B5unSukHs276qFJC1d2bRociHA8TyRKgFBj%2BBqpwE498J%2BW8IVfYN6tMmf4fwya91AHhxlR5wOGoK6MZwTPwq4aXjX7fKrfVfTOmrk1sifJtmfaLCYPmDs2rYlFoD15Xih6nvzZihm8JF95wxSMZQjbaAjl9RNDOdJGsUbzjRRsY6wcmJuoKFU2XvPymHD%2F8UEEuZvD7IRdMGiwWejkhJC5Z9PdzZbNETnVUPnPwsXpSn2Ge1rwa3Vdus7R44D7AN%2FJKsVlDoeA1mjkHy3YiBVkPi2HUCoMlqpuhSP1AY6FRlFMkT0dQ0%2BJIOxLEKYRY5cGqdEWDgzgoFCh5MLqX2cIGOqUBiJ40B1d2ZJq8EoyvDUJVbSL8m1ek5j3Safh%2BKP3h8iC94vt1x7STAiQT3FzBoW41iyhgMO6LbczaRwFcFrczpM2v%2BkjOKGZ9HZGfnmHiSn0VrRddQ8fxVIlTaupFRyao58U6wSSw6nhNgjCyGLKfhMTJ4%2FerPVEebriutujfqPB4yjW5Q6QkyxgXiQwiKsgQhN6KCQBmhcgyQi3fB2545HsVWzAr&X-Amz-Signature=bde4867c32961dbdb24d848c5c15d39c98263e6bc60acf8dd635e371aa7042a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
