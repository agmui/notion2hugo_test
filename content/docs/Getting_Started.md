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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXR4FHH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FnEFh25S%2FYAC48h8eUEaMLv3Myg1lz8bscOw%2Bqe%2Fe8AiBa9bpilwPjrG6wlVZn8rZl7XdkGhegrOMVHtvjP4YLoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrjV6M%2FFpPutk9jMbKtwD3zyuHXg6hY552%2BT5gDoBYRvrYNXx6xOuqTGVQfxXv91d%2F1iJ6AfU7NDBT1VDnaoMNt5Xuk%2F4LA%2Bqb7RVB8ceA2JwiJ4KwsAG%2FRhCWvIKljw4yXUOFemMu0ZsaiyTCLSC3Qw8NaUxsFyAW3Qa87MiJN14MCE7v9uuJsDN0FvALu%2BqKYlVLd8t2wH6Gijb4fiqZAOobn6Iz7N3yxwvd6QTIQiGhWC1qbH4lCDIpK2nbEwJc2rlKumXdbi3F%2Bp5gYc1wLT%2FRjUPwlLRoD%2FizEVZBP4FBtxklapH%2BiMvTGHiOrFfoyUBZvIHIn0%2BDP12iC%2FUCzg193YZGPSji6NDaLIoRvL%2BkcLvBsSdRSZUN%2FDDm7e3rSQeICAm4X0QWdMlaBi5p6xukH0cR4d3N87FqriNUG1KICDjczRbys1yR2G9vUN9yeGCKVx4%2FwJhPNljb1gkFQ%2F%2BH2WW%2FxdAXISbAdBqdyKVIEMDZc0OfJdho9U1ZGspHnLTHbcw57mWQ%2BdOPTk6dKHrrPzXvkoiqINLlVw3ZUvFbmEwd6yvw%2BigkjevzYb43lRsAoqhRPVmqrwk3WEdZ%2Fu71gevic%2FniqGeWDcwU0mI90XkPvGarNglsyo3Zz%2BQeWi9yvGIyoAcJGUws9%2B4vQY6pgEmAOSnprmbxO7v07pgNChxSmXZ2YaMi5TgFYw7WKoGqNgkCtd4Dp1r%2F7OXtHoZyKRfAjtRjiGNk%2FZCk%2FN%2BcU%2FGGQSwPpj8%2BMNXuk%2F67bW2bFsoTXK8JIQ2mzdXXzJbHNJ3Ra8aVfhL%2BiVpiPDhldWqmVnt8kGyIDAW7xMZy35sdm%2FTibJnA54rS3K2hzwHnRxODyisS16P%2BjmRJWDTSSFIne5J3MFa&X-Amz-Signature=9c898b14c64f3c93a540ab57c563efa01e452e5f8665333fa24c40d47e411778&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXR4FHH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FnEFh25S%2FYAC48h8eUEaMLv3Myg1lz8bscOw%2Bqe%2Fe8AiBa9bpilwPjrG6wlVZn8rZl7XdkGhegrOMVHtvjP4YLoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrjV6M%2FFpPutk9jMbKtwD3zyuHXg6hY552%2BT5gDoBYRvrYNXx6xOuqTGVQfxXv91d%2F1iJ6AfU7NDBT1VDnaoMNt5Xuk%2F4LA%2Bqb7RVB8ceA2JwiJ4KwsAG%2FRhCWvIKljw4yXUOFemMu0ZsaiyTCLSC3Qw8NaUxsFyAW3Qa87MiJN14MCE7v9uuJsDN0FvALu%2BqKYlVLd8t2wH6Gijb4fiqZAOobn6Iz7N3yxwvd6QTIQiGhWC1qbH4lCDIpK2nbEwJc2rlKumXdbi3F%2Bp5gYc1wLT%2FRjUPwlLRoD%2FizEVZBP4FBtxklapH%2BiMvTGHiOrFfoyUBZvIHIn0%2BDP12iC%2FUCzg193YZGPSji6NDaLIoRvL%2BkcLvBsSdRSZUN%2FDDm7e3rSQeICAm4X0QWdMlaBi5p6xukH0cR4d3N87FqriNUG1KICDjczRbys1yR2G9vUN9yeGCKVx4%2FwJhPNljb1gkFQ%2F%2BH2WW%2FxdAXISbAdBqdyKVIEMDZc0OfJdho9U1ZGspHnLTHbcw57mWQ%2BdOPTk6dKHrrPzXvkoiqINLlVw3ZUvFbmEwd6yvw%2BigkjevzYb43lRsAoqhRPVmqrwk3WEdZ%2Fu71gevic%2FniqGeWDcwU0mI90XkPvGarNglsyo3Zz%2BQeWi9yvGIyoAcJGUws9%2B4vQY6pgEmAOSnprmbxO7v07pgNChxSmXZ2YaMi5TgFYw7WKoGqNgkCtd4Dp1r%2F7OXtHoZyKRfAjtRjiGNk%2FZCk%2FN%2BcU%2FGGQSwPpj8%2BMNXuk%2F67bW2bFsoTXK8JIQ2mzdXXzJbHNJ3Ra8aVfhL%2BiVpiPDhldWqmVnt8kGyIDAW7xMZy35sdm%2FTibJnA54rS3K2hzwHnRxODyisS16P%2BjmRJWDTSSFIne5J3MFa&X-Amz-Signature=e7f4b2d43c274099ebd349c91e1bc953815517b3427cecb564ff510aaebcab44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YEOSLHX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDje7uQAysSB%2Fm%2B3a1Pyc%2FFVfnQB%2FTJJDWEbAo4RNFCwQIgV6k76pVm%2B%2Bj3CWnGhdA5l%2BudoV%2FE%2B%2BHogT6%2FaMlVaQUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCHXYDMT18Hmt%2BCxwyrcAzHtW5lb33Samefn5QC%2FOSvS3Md3Oia4dvW3v4LGSgL0qh4m9pX6HnzdKdpDj4hUR89j5WKZh85cMJzb0ozsuvGE0qEP6eHpF9r%2F%2BoFlfYoYvpi6CbG08Teflvhd6YUaCg8aL2j8H1C%2FMiQnbg%2BTExlkuFHbuymJxg4zmmNfLDOyEFhc5U7nWQLQcSlzmtFQhaZ8ZiAg1JI2Cttby%2Ff1oJ0vleIECceRgsUwKnZ8I0r8DDmb5EFhdj%2BbCYrn7e1do7cj8F75Rc%2F6CHYLMaJU7BBwJ9ae9ooVyISfGxvv3M0mOVHNFhvZplLdbQYGcRanicL1Aw6uMeF%2FiSTWHZK1Vko6ePhmSnJsoSEF1FtdjG6gKykiWCkD0%2BCk9unbLPfJXeQl8gUsQ%2B8kpJ%2FixkgsB%2BCKJCg2qAk3%2B7ghf1KwYj19k00kYkGZqnakHVYI3XCixf8ac5%2BLqWHngZKmVOKYnxGJRe5Mss%2Bh1erRlsb3jA1PSTtn4nMXnxxANKbTPsTQOIPPuLNlrXnCWwIpX58h6sv9oMrwh7anuRIxU%2F4bUv38qzEn6E8wXO9kkPJC2CwaOWLq1lGHfOOhLusFjW6FTHLQbv1FrF7SyhRu4oUnaDDZxqeEuD9wUbjo9sInMILguL0GOqUBeXB5iyHQQu7LqGgYQejwq61aeOOB1%2BxquiQpFrZUuhFr1z23UncEgbWae44fCrHA3iBlTh0fMleCjRSmEXz7hU2V%2BQWpdhCsQ%2FhLQQEfJ8kdbdFCM9diPSpg80N4bpZy1rbrnnf3fT7%2F%2Fc0ukepBulPbA%2BIu7JHtl5rXupJNmIubYUTtYoveMN6phT4b0qmOYw%2B0Zsnb33CrIZVik2wcisJgCyiK&X-Amz-Signature=4b9c1f5e4e4a371abeee58f6f8f5c2724743c7cebfdb68a2e37c8e15c500c002&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5Z4PS3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfi2azUMV6nSM2HLUCiW48d%2FWPZL0bA3Diz6SidIqH9gIhALRjT0gM61ObSkYa4%2BpJLq%2BhADrwvcBfOmWwQgtv%2BH8lKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2BQeJIoVYNYBmkzwAq3ANyrq2nWxerneSgQjFU3RjxYySJZgXx5EVSJHiLkm8%2BtLihclZcSYFjep4Cj6E%2BHtrvHt2ChRuZbt7yJ2uPkLKL9WcKmHTHr9OB8PHL%2BhK6Hj%2Fom%2FW5%2FJOP6F2HwuMU5WwKbOaOK1zoNWXiC4C6o%2BAMXGg0KfsVI%2FrTcT8HOO%2Fhgilaz6asQoESb727%2Bee55BfAkrs%2F%2FSuolQ57969we7tUmKf3Hw5qFeXCZeuz3fp6Wdr2gJ2eoXOxPHUiEqcGgSko8YfeA9JoGOygeoVwclGfoZrRhcXk6%2BrN5MhYUvkT%2FZB2EZaW24ta8RrRNCV4ch%2BhJ0ZxEC2q7Dc6XozH94KrbAJbJ9XoSmX3wRU04qVJvssjHHbU9KPFp0xPoqTpc8iPsjEFeIlftFMq3%2FBpkbLzY5n3yBgNem1Fvdi2KBNe1zeg7FAMH%2B%2BOy0iRs3Usp%2FOd7fynR5FHbhiZBj4Ck2eiMiCDKfueyiRSAob2XO9Nn4Y%2BoqWI15hSpE5rktkJ2fGCnSqOjtlhLsRodHtrY2pEVTiSRo8TibsBVb4F6Ne3kW7rYvSXZmdCUZtqkY9btWDY9bzjZJgrwZfFfnaHLgcqd2NVAiI7GnCwSFx7gtKkcZpbB7IqKb0JWvo0fDCA37i9BjqkAQCdNSkWC8U%2BrhpOZYYPPZvqcTsWyTP0VUE42Lgwv3FHHqkzyAfO5m0KqA4GAKkQJVIULsegGTIYfCpfqnOMEXrb4iGAmY7oQkpBzkkQeEoj6bWs%2FvKm%2FQwGN2vkPM9%2F203vdh1SCc6E%2FlkUrlI4eAb2XCLgwbYHYsNqoz%2F7iJn52zuXXfdmigzoeesiKlE6fe3CNAMc6Mv%2F9w1KorX4qSUpNJgn&X-Amz-Signature=a660bfd37f2c0ddbf526e8810cda574a0ee98fc45d15548412e59c56ce82fb79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXR4FHH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FnEFh25S%2FYAC48h8eUEaMLv3Myg1lz8bscOw%2Bqe%2Fe8AiBa9bpilwPjrG6wlVZn8rZl7XdkGhegrOMVHtvjP4YLoSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrjV6M%2FFpPutk9jMbKtwD3zyuHXg6hY552%2BT5gDoBYRvrYNXx6xOuqTGVQfxXv91d%2F1iJ6AfU7NDBT1VDnaoMNt5Xuk%2F4LA%2Bqb7RVB8ceA2JwiJ4KwsAG%2FRhCWvIKljw4yXUOFemMu0ZsaiyTCLSC3Qw8NaUxsFyAW3Qa87MiJN14MCE7v9uuJsDN0FvALu%2BqKYlVLd8t2wH6Gijb4fiqZAOobn6Iz7N3yxwvd6QTIQiGhWC1qbH4lCDIpK2nbEwJc2rlKumXdbi3F%2Bp5gYc1wLT%2FRjUPwlLRoD%2FizEVZBP4FBtxklapH%2BiMvTGHiOrFfoyUBZvIHIn0%2BDP12iC%2FUCzg193YZGPSji6NDaLIoRvL%2BkcLvBsSdRSZUN%2FDDm7e3rSQeICAm4X0QWdMlaBi5p6xukH0cR4d3N87FqriNUG1KICDjczRbys1yR2G9vUN9yeGCKVx4%2FwJhPNljb1gkFQ%2F%2BH2WW%2FxdAXISbAdBqdyKVIEMDZc0OfJdho9U1ZGspHnLTHbcw57mWQ%2BdOPTk6dKHrrPzXvkoiqINLlVw3ZUvFbmEwd6yvw%2BigkjevzYb43lRsAoqhRPVmqrwk3WEdZ%2Fu71gevic%2FniqGeWDcwU0mI90XkPvGarNglsyo3Zz%2BQeWi9yvGIyoAcJGUws9%2B4vQY6pgEmAOSnprmbxO7v07pgNChxSmXZ2YaMi5TgFYw7WKoGqNgkCtd4Dp1r%2F7OXtHoZyKRfAjtRjiGNk%2FZCk%2FN%2BcU%2FGGQSwPpj8%2BMNXuk%2F67bW2bFsoTXK8JIQ2mzdXXzJbHNJ3Ra8aVfhL%2BiVpiPDhldWqmVnt8kGyIDAW7xMZy35sdm%2FTibJnA54rS3K2hzwHnRxODyisS16P%2BjmRJWDTSSFIne5J3MFa&X-Amz-Signature=c562759482c9460e4fb29369e81cbcc1f779514f9c9fc53ff50f6d1b24bbd9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
