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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUN6TI4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCryyowK2MYNzOi3AN8njHUzhGi1p3txkcrWu%2FWHx4h7gIhAOIbX691DSQLAgG51TCU3wjoD%2FAZ%2BVy7YRGWWAQSiN1CKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbEQWMs9XfXuApSgq3AN23OKodBX53pvGINjGWrKGRLBM%2BN3bl%2BtRFwFEnAHrFU50gpV2uHjggBumT8wxoFRmrOKgvPsa0HbMiuDthT5rFhTKKYuxoRfAwEejKE4dfuNg%2Bt9Clm4FUk10%2BQ28OKJxc3Agy7ZVG9wByKT%2FdlKJoxv64MOZ0nurVLvliKdLXRj7LSYaUpZxy%2FAVX8zdPv8b26FOOHG0Uvx9Bi4%2FD%2FL1LH5buEGA%2FEY6%2BcT48UJ0SrRTcpvcJBXlZ2hJAouI1AHM3SS%2FtIdor0SlI1Ik3EaFj98hinEVOLZZr198zdgCKL4XGNwqqqdpB5xi3tEqsC8VLO9xzJkazeBBTW8dxEIasuCtGYs8Ubh4TX%2BKabI%2BSxKKZ3AtVSpGWO8hb1w2Z1MtjfIJX3ndY%2FLMqEVRcCInHGoJfHiLZ7O2YORgkxKq0iGJk5efvJC1hdQ9CM11kCCPMTy%2BSZ3r6J7NuWlCcKuk40Zcv%2BwEEgQO35ql%2BZg%2B%2FB20e7wZAGaqkwxrsa%2Fuia8bg3HwxfRbV1TuGB2DHq8WfpyF0mxldrOkmJ2adMy02JlIdLjYSmwBpIdNkdaHlv4vH%2Blwrw7JAbTivZD7OVOF24IDPCkIp1XoBpMeD71WJaX9dFmPQ3hEpaZHqDDl78PBBjqkAUEl0CMN%2FFsIJgqt0sw%2BGtwt8lNbCRqZB2hb8pmDJXBDYlgVjSLj9ZuShAg8fGykm3weVrhBNTWNaUNJ81HXMA6aaznFdoXe5Z9Ym7vNGGlmWFvSD0E1wecaR8eRHZdys0dsZszl%2FCg3hQzmLNsLf7rUUd0R7fMFG6X8YE6Ar4zfpeDP8CRQmV9SmYck9E1HFZOW0cZ051Ogm2c8z0HfGjt1zqp1&X-Amz-Signature=3849af30ccba8f10ea6ee14fa980ed26231cde202623ca89c0b6c89a1f08cd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUN6TI4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCryyowK2MYNzOi3AN8njHUzhGi1p3txkcrWu%2FWHx4h7gIhAOIbX691DSQLAgG51TCU3wjoD%2FAZ%2BVy7YRGWWAQSiN1CKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbEQWMs9XfXuApSgq3AN23OKodBX53pvGINjGWrKGRLBM%2BN3bl%2BtRFwFEnAHrFU50gpV2uHjggBumT8wxoFRmrOKgvPsa0HbMiuDthT5rFhTKKYuxoRfAwEejKE4dfuNg%2Bt9Clm4FUk10%2BQ28OKJxc3Agy7ZVG9wByKT%2FdlKJoxv64MOZ0nurVLvliKdLXRj7LSYaUpZxy%2FAVX8zdPv8b26FOOHG0Uvx9Bi4%2FD%2FL1LH5buEGA%2FEY6%2BcT48UJ0SrRTcpvcJBXlZ2hJAouI1AHM3SS%2FtIdor0SlI1Ik3EaFj98hinEVOLZZr198zdgCKL4XGNwqqqdpB5xi3tEqsC8VLO9xzJkazeBBTW8dxEIasuCtGYs8Ubh4TX%2BKabI%2BSxKKZ3AtVSpGWO8hb1w2Z1MtjfIJX3ndY%2FLMqEVRcCInHGoJfHiLZ7O2YORgkxKq0iGJk5efvJC1hdQ9CM11kCCPMTy%2BSZ3r6J7NuWlCcKuk40Zcv%2BwEEgQO35ql%2BZg%2B%2FB20e7wZAGaqkwxrsa%2Fuia8bg3HwxfRbV1TuGB2DHq8WfpyF0mxldrOkmJ2adMy02JlIdLjYSmwBpIdNkdaHlv4vH%2Blwrw7JAbTivZD7OVOF24IDPCkIp1XoBpMeD71WJaX9dFmPQ3hEpaZHqDDl78PBBjqkAUEl0CMN%2FFsIJgqt0sw%2BGtwt8lNbCRqZB2hb8pmDJXBDYlgVjSLj9ZuShAg8fGykm3weVrhBNTWNaUNJ81HXMA6aaznFdoXe5Z9Ym7vNGGlmWFvSD0E1wecaR8eRHZdys0dsZszl%2FCg3hQzmLNsLf7rUUd0R7fMFG6X8YE6Ar4zfpeDP8CRQmV9SmYck9E1HFZOW0cZ051Ogm2c8z0HfGjt1zqp1&X-Amz-Signature=9d5d0ff0fbb07258cd7f7c776846b6ecdfcb55fcf8ddc0a67048bccc06617d65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUN6TI4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCryyowK2MYNzOi3AN8njHUzhGi1p3txkcrWu%2FWHx4h7gIhAOIbX691DSQLAgG51TCU3wjoD%2FAZ%2BVy7YRGWWAQSiN1CKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbEQWMs9XfXuApSgq3AN23OKodBX53pvGINjGWrKGRLBM%2BN3bl%2BtRFwFEnAHrFU50gpV2uHjggBumT8wxoFRmrOKgvPsa0HbMiuDthT5rFhTKKYuxoRfAwEejKE4dfuNg%2Bt9Clm4FUk10%2BQ28OKJxc3Agy7ZVG9wByKT%2FdlKJoxv64MOZ0nurVLvliKdLXRj7LSYaUpZxy%2FAVX8zdPv8b26FOOHG0Uvx9Bi4%2FD%2FL1LH5buEGA%2FEY6%2BcT48UJ0SrRTcpvcJBXlZ2hJAouI1AHM3SS%2FtIdor0SlI1Ik3EaFj98hinEVOLZZr198zdgCKL4XGNwqqqdpB5xi3tEqsC8VLO9xzJkazeBBTW8dxEIasuCtGYs8Ubh4TX%2BKabI%2BSxKKZ3AtVSpGWO8hb1w2Z1MtjfIJX3ndY%2FLMqEVRcCInHGoJfHiLZ7O2YORgkxKq0iGJk5efvJC1hdQ9CM11kCCPMTy%2BSZ3r6J7NuWlCcKuk40Zcv%2BwEEgQO35ql%2BZg%2B%2FB20e7wZAGaqkwxrsa%2Fuia8bg3HwxfRbV1TuGB2DHq8WfpyF0mxldrOkmJ2adMy02JlIdLjYSmwBpIdNkdaHlv4vH%2Blwrw7JAbTivZD7OVOF24IDPCkIp1XoBpMeD71WJaX9dFmPQ3hEpaZHqDDl78PBBjqkAUEl0CMN%2FFsIJgqt0sw%2BGtwt8lNbCRqZB2hb8pmDJXBDYlgVjSLj9ZuShAg8fGykm3weVrhBNTWNaUNJ81HXMA6aaznFdoXe5Z9Ym7vNGGlmWFvSD0E1wecaR8eRHZdys0dsZszl%2FCg3hQzmLNsLf7rUUd0R7fMFG6X8YE6Ar4zfpeDP8CRQmV9SmYck9E1HFZOW0cZ051Ogm2c8z0HfGjt1zqp1&X-Amz-Signature=2f1476967eb2aac71900516a619de4fcc7e1f1bb9b5b9b24d6f3eac5822b840f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDJZWRY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD7GyRjeAxyyNfw4I47shMx1Pf4E90T67DEubHFJgWGJgIgEaFy6RzOKsbLsQbT3OYHHSy6nPLAanLjOBl97xFVmHgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRih0qN6bbbQjAIaSrcA2sy8ljqnMnYxKTieZJ0e9w88r%2BeZYPcEp2pYEjjoxsuYT3WPTcRxB48zIWsqiMhg2CrITOZj0cUpC3bN6x%2Bm9fUALhqF12BHIPTacwtQKIN7J6ulK%2BiyRBMOX%2FLs7QbK8IYXgGcE3He3z5UmlLybRFs9Fuw6DgLCmjzOVTVj0fv2R6wBcBPYmAzf%2FPiD1qCBjzJcZ45wruDk8ARmwizopRMg5eqNqbz3Kpl6KVcQz%2B31HMK5HnCydBlzP4JoSnlgySfYhDUgS7ZyNoFvW%2BPXoNBHhbyXUNEu2%2BAQ%2B8te74%2FO81OF%2BOkLUijNQPxlbOHqHr%2FoW%2BMbQBmkVRdUep9aOotGCCr1qoxRQqm2l5BvI2oMcr4ZXTYYxjJ7RUqe8mouuwpW%2FOJ3ljuucEwhM3Z3zY5jaArVLBu6sYIn9idH4MU51DqkYonDVQieexCl3TSzWuiVjmkhdux2MVuUA7hP6jjShJfPjAr9ai53JkCX5%2BkoGP8VNLkzZefPs7feK1iqPZGI12Jmfvug9BoLWYW1%2FlncARXqaTUVR1GfpWwRdArXvWKWsT420S6%2Fv4gX121e0S71R2wxEvp5kxidWPZDX7DQHM3Emz27BaEMmjdd5IboE5OEKMNo%2B9qdwB%2BMNzyw8EGOqUBnZSa8g%2FgSiDNxTA35K%2FZ%2BRR5vR4dwzoBQpALXRkqwN4lV6rJoeGx7FLra9J%2Fu8%2Brm6UYa%2FWLpmLjwBEaJJ516UBR7pT25pPDbyXippVj4K8j025%2B3NtX1yZQfwuRKetNWg%2B%2FWRMtVYPMpNgMSj5oWga1mT2g8usSDr87icdSUeM%2BB4we6ayJdbVqTpUBho7xwZOOoYIsIQoabI2gREV0D70VxHsy&X-Amz-Signature=390e7b250a1ee6f538509f74cb86375f553ab1a8fb3699e318328538c345b47f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3OMB7MY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDYLTENMe2Ypj%2FTCNxgaIuklYuWjHX2zlwnRCqKQrlh9AiEA2u%2BvqpnYIAdDYCCrZ%2BHUeCferehjPJnoJByRnIPHzc8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4KepuJREKxO06DjSrcA90csgHduitD%2BGXzBvilO%2F9auNnRkMcvMchW%2ByXnbZCWzI8UfeKzGMtByFA6a6aD8bompnmlsIXjjIdOKEp9CjA19G6Pox2yTi1cgRQSZEH%2BpLzDVGAMOnh3U8KK6rztVkX3MLotFpRnj5rwm1o1jmGl%2Fg%2BCb7SHxwXeMJ2yZ%2FwSX9jcowBMZBqXal%2FqNm6odInSL4VMlF2WVpXcbAoT%2BA%2FaAgTlESrM3IiRe9VBARKuRklwD%2F%2BakhkOkiAJ792F1ETJu3GwrS6u68kYxNhlbgChIWpf5GDuEfeVUN9aubqiwKFa5r49CXh1qXF8Tf%2BWSMupdVLyBsCHUdKQlqBnKpOfg9XIk9INmE4eKV2UrhDC9SuBzemTU7s%2FqV8fDYlSEYhO7LMjlsjDA1QAOxsUMBnzFoAn8YGdKfVbaZHCKr8boX%2BOYfNmIRXg8BpXsR4oYZd0bOTgrqpJAwiTOtIf4hbOEcR6X11QE0Z33MXABzlDQ8RaUDEDpIQEoqWwMeqvBTJTphlu%2Bj9Sla6dEqyqsS0Q%2FY0TN6Y8hSXYCn%2BjvK%2Frir8czSKPTOaD6vrOiJMkhNp9NkAfkyjLtXFcoRzcaJAr9eMzd4XW0vF06gMJPjnZv0sbiRKnHq1cpsGNMLvtw8EGOqUBonfHFW%2FQusbLKJbTqUaxYsIifBdjs1nPv9OAvBeZRszxY%2BvmTINbKRCrMRyiRahnhanY%2BZHb5p63kY%2FsnTDU%2BmIkW7%2FZBOQX1cpA0CRxmg2yJutpNMD49UYAvGcgebm6VXSw4AhLe3sJC0W4TYo8CejZ0j%2BKEVIh7iqwjeBhU4fxwOZvb%2FZVfu9V%2BfB84oHCF0Rpk4cuIKUjKRWZll4lNlpAnm7P&X-Amz-Signature=5ef5a225c1d39a42ab7ce3ca5204656a5b6ad9cae0b60123a4711c28cad20f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUN6TI4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCryyowK2MYNzOi3AN8njHUzhGi1p3txkcrWu%2FWHx4h7gIhAOIbX691DSQLAgG51TCU3wjoD%2FAZ%2BVy7YRGWWAQSiN1CKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbEQWMs9XfXuApSgq3AN23OKodBX53pvGINjGWrKGRLBM%2BN3bl%2BtRFwFEnAHrFU50gpV2uHjggBumT8wxoFRmrOKgvPsa0HbMiuDthT5rFhTKKYuxoRfAwEejKE4dfuNg%2Bt9Clm4FUk10%2BQ28OKJxc3Agy7ZVG9wByKT%2FdlKJoxv64MOZ0nurVLvliKdLXRj7LSYaUpZxy%2FAVX8zdPv8b26FOOHG0Uvx9Bi4%2FD%2FL1LH5buEGA%2FEY6%2BcT48UJ0SrRTcpvcJBXlZ2hJAouI1AHM3SS%2FtIdor0SlI1Ik3EaFj98hinEVOLZZr198zdgCKL4XGNwqqqdpB5xi3tEqsC8VLO9xzJkazeBBTW8dxEIasuCtGYs8Ubh4TX%2BKabI%2BSxKKZ3AtVSpGWO8hb1w2Z1MtjfIJX3ndY%2FLMqEVRcCInHGoJfHiLZ7O2YORgkxKq0iGJk5efvJC1hdQ9CM11kCCPMTy%2BSZ3r6J7NuWlCcKuk40Zcv%2BwEEgQO35ql%2BZg%2B%2FB20e7wZAGaqkwxrsa%2Fuia8bg3HwxfRbV1TuGB2DHq8WfpyF0mxldrOkmJ2adMy02JlIdLjYSmwBpIdNkdaHlv4vH%2Blwrw7JAbTivZD7OVOF24IDPCkIp1XoBpMeD71WJaX9dFmPQ3hEpaZHqDDl78PBBjqkAUEl0CMN%2FFsIJgqt0sw%2BGtwt8lNbCRqZB2hb8pmDJXBDYlgVjSLj9ZuShAg8fGykm3weVrhBNTWNaUNJ81HXMA6aaznFdoXe5Z9Ym7vNGGlmWFvSD0E1wecaR8eRHZdys0dsZszl%2FCg3hQzmLNsLf7rUUd0R7fMFG6X8YE6Ar4zfpeDP8CRQmV9SmYck9E1HFZOW0cZ051Ogm2c8z0HfGjt1zqp1&X-Amz-Signature=6055868f8004ec94d820082139dac3b14d824320783ad08eb2342a1601adaf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
