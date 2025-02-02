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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654LEUZXN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9WNtTufsG7qnbsWxQLV5geCkGo9jT6RMIjRItF8mwpgIgVxGDdndShizh0%2BgmsO7FriSW3OpxcnhE4lsMW4vAbRMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbOxjLSW5swFrsDVCrcAyehwTxzqi8DhdwGrTlmuMHyT4v4jsrcac%2BTc21a%2F%2FTG9wvnS%2BldvDtGTi2Vc08P4%2FCY4T%2BnhWPntXZy1AQ6DOlMIsDafvN9qU7LufBjpX6mARQMTOvuN0n%2Bu9ZaBA6u4WSg9P9zwcVU2Sj3Ra2xHXrGWxeF%2FiNGZMZvHJUL5XaS92fnsiboef57PqrD17qQ0w09ANqf9zV%2B3tOo0c4IpiIGeVXjMA%2Fmjo1NhfbxUYg%2FmRHxYqcGkrYI8Z1WfcQe2x%2BFiOkQFnld5Yt4UnVOhMlgQ7zy%2BTxljIZsHttsuw9cjkmJUfV9fE7IwUeQhUFHQt8Jith5CENtEA%2FR9%2B90JQjN8pJz9YH0zqZ3MF72bOqQnWGSgo2mGXrDz%2FhQV3Blt76ilTLUf%2Bf8QVrIWw31s4vjOWamvmqkgnh%2FUSkZrS%2FuR7rNvQoLFVcHNMNSpZF1Mh2cLogbu30N44JgwmuBi%2BKYvdUjbXhoxwuNmZDrdnC3lVgXqkpAsF4ewMWoNOC%2BNUe9M71lb926FK9PSujrRi06f0nY2UwhxCxBdS2WcJyHBvKVQYjWpHqsKcNxIsxe3rqrN%2BuyW4JURatjodH0ocmlaKLVF6QoiippiL6DHZTSQvZauhJ5xDOpg1GSMIjj%2B7wGOqUB42fTylkdHr6U6aBz5ZSgQ%2BOLYck1jwyi%2BgG8ZzplP6SSLsh9Rv9Z6YbhXx8ZGKfxJTnsXC7TmUGUtQmDdAq3qhKfWYMFTwfp2HirsdWpdsddK%2FKJJPEa54r9XNEqYpogmdSrRSb2rXPfJwZsLANjc%2B8yNa%2BqLQ%2Ban4K%2FTetf7sP58bkZTQxAWO%2B8rO%2Bdd2jUJY%2BIwNsoyDHoQk4%2F28kFfaAFy5Mn&X-Amz-Signature=2ee7717a0ad8714412d978a38254f2b5ef982127b8b3db75bc5b778512b28f93&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654LEUZXN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9WNtTufsG7qnbsWxQLV5geCkGo9jT6RMIjRItF8mwpgIgVxGDdndShizh0%2BgmsO7FriSW3OpxcnhE4lsMW4vAbRMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbOxjLSW5swFrsDVCrcAyehwTxzqi8DhdwGrTlmuMHyT4v4jsrcac%2BTc21a%2F%2FTG9wvnS%2BldvDtGTi2Vc08P4%2FCY4T%2BnhWPntXZy1AQ6DOlMIsDafvN9qU7LufBjpX6mARQMTOvuN0n%2Bu9ZaBA6u4WSg9P9zwcVU2Sj3Ra2xHXrGWxeF%2FiNGZMZvHJUL5XaS92fnsiboef57PqrD17qQ0w09ANqf9zV%2B3tOo0c4IpiIGeVXjMA%2Fmjo1NhfbxUYg%2FmRHxYqcGkrYI8Z1WfcQe2x%2BFiOkQFnld5Yt4UnVOhMlgQ7zy%2BTxljIZsHttsuw9cjkmJUfV9fE7IwUeQhUFHQt8Jith5CENtEA%2FR9%2B90JQjN8pJz9YH0zqZ3MF72bOqQnWGSgo2mGXrDz%2FhQV3Blt76ilTLUf%2Bf8QVrIWw31s4vjOWamvmqkgnh%2FUSkZrS%2FuR7rNvQoLFVcHNMNSpZF1Mh2cLogbu30N44JgwmuBi%2BKYvdUjbXhoxwuNmZDrdnC3lVgXqkpAsF4ewMWoNOC%2BNUe9M71lb926FK9PSujrRi06f0nY2UwhxCxBdS2WcJyHBvKVQYjWpHqsKcNxIsxe3rqrN%2BuyW4JURatjodH0ocmlaKLVF6QoiippiL6DHZTSQvZauhJ5xDOpg1GSMIjj%2B7wGOqUB42fTylkdHr6U6aBz5ZSgQ%2BOLYck1jwyi%2BgG8ZzplP6SSLsh9Rv9Z6YbhXx8ZGKfxJTnsXC7TmUGUtQmDdAq3qhKfWYMFTwfp2HirsdWpdsddK%2FKJJPEa54r9XNEqYpogmdSrRSb2rXPfJwZsLANjc%2B8yNa%2BqLQ%2Ban4K%2FTetf7sP58bkZTQxAWO%2B8rO%2Bdd2jUJY%2BIwNsoyDHoQk4%2F28kFfaAFy5Mn&X-Amz-Signature=c159e341286bff864ab239f78e6df884c398b4583f1f96ad9940aca86147b48a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JH5TA6K%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHybfKgvuqqUHaTCJtFfq3JMlZDmvgZ%2FKxn14gLi5L2eAiB4pk3yw0LNSuMIg7R8HUI3S1Ne5R%2FjLUJZ4tsNECSYayqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEvaHpKjchl%2B88U%2BKtwDQgSXWO2UulTV1UIp%2BfL3LNR3wsd8g95Y6TrHOgpH%2BU%2BnMhmmY%2FnUnOXG1pUYheWdyJKurjgAzAgKeFxFsLXHPGz9ZU3ve9gueuSgYRUHsW%2FqNU971W%2BgAW0hJtLCwJtpO6mpKIXoRkBFhB6FLJgbq%2BdredW1mO0z8ndUEXU1LOAsseXaY%2BYON211EScm3g6RVs4Pom2eLMVDaPAi6MrxZGY%2BfrTJXnUL%2FETwpadENQEmbxmGAkYT6MwPwxYmHJNl2F8%2BFxl6RYW7TRIh1%2FqV053A5Kft4s1rpA5TiLHZBzsfr6CS4VF4yZq15O3aAiN2QBlERj1B4r%2BP3lPKZwYptY2s9MUj0O2DTX49%2Fahh8bB9o2YXnOcxEOVAvJM8%2BJh2GFXTbDbWjvxT2%2BJrYPluncl4kZOrbIpmiyWqv1jqAnkQD0X862RB4xDdkWp1TuRrlKKNYALP7IplXecvcPb5Nm9WBPzlnaTXxxxefsBGxB4UOpde8Rna7XQhAXA1a8exgBF%2FT3thYBbmWmt0Vw6fqGoCIAmfVMnSlO2VFZWBi00Hioxyd93RDTVGy2ahh5%2BKSKQaR%2F%2FJgAQHymF8DHRL5SHrhpPBtRtcBcZT8ZGHD5iBxu4pHitwdqUXcq8wkeP7vAY6pgFNECRSQdcj9CzZOkL6uC3PmVQtUFFJSo6erqdP51WXmcD0WqZBOCO4rek9dhXsvffqzTlIiS53n%2Bt5H0BipMk%2BnmFBb03pzZqunElvHpiyaWjxZbnJ4dVuDbRoRyDoLsAYJNNtFyodVoS%2BI%2Be2WO4xmdjqrYczF6W3DN%2BiXv0Yhi1RU%2BI%2FFJMtSzqlY1wijHYkgG1Rz95l4BqDMVRlOYiOcufqSEgU&X-Amz-Signature=c8fa41a06c43301401698f9895d767e3d0bb1fb1b3eb077cd459c191d8f168ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSD6BKV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQi7%2BsZy8AF5A3OVtSL2pA5s2TLC4QFNfrFbKGUEw9dAiAWAqCwlPFZMge6EqTHtB8YEPo2%2F85QZY3UxE1T8dhYcSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6NVOtH9hmrNR1%2BKZKtwDdD%2FY7dv8NOtonIdV3GnnCz3ix5SbTCqd5YI3aEdc4aPzEburO96%2BcelVI9CcDVN5volw9pDrWQYSwJ%2F9LktBsI6ibBpYdzg9i9p%2FvTa1P6bYrbaM%2Fm8nMVv9DhpfLLpMf810Ji%2F4X1JuV9IBAICi6tfx6EweIupRhF5PeoBxNpqFYQTQGqmlaEYlYdNX07Jc4I1DoOTS6uXoAOhnQrdJBc1wnSqUMfB7sHqzYeRAt4jvc0lVQmCvm8g4Q7aB95agda4I8FpUJscV4%2BZ%2BbhIfyJVQCsKTmFf%2F1XOKYCvVzFr6VVkHXMMVEEvWDxQokCphDBILO9c%2FW0cyQcfpIDtLBEfHHGcjrBZcr37ekEACqTvK%2FWVFAmImFM8oVlyrVVcTFhxiiW3d%2BbxQ3EkQJYRjR8ztU8GADtC1sYRwBc53mfDf2uftmdkTAsMRqVJ%2FoFeCbSpEiJzIderi1zcdoiU6rk8Qj8hzERNsHCcgwdIMqnixq9qB%2F%2BnkX8c1tY5SjWzAlsQ7lNU4oKSkowqDkvnhd%2FVgHcHB%2BSSLeFuY9bBezVI%2FBJT8DIQmADJdbnwZT9tli0vwyAMHTeNmexMFsVApdITLw0Q2RGkTe%2F7CI1tlVtCuEcJ6s6U730aLk0Mw9uL7vAY6pgFWWo6reog3Rh218VCVpjuBfMfwZOqTCwg2n%2FH%2BDlUygs6ZSBWZIQZS0d1ijvJbDG9vpxIx16Ru7yMAeOknCjMR9Gxs%2ByukC52ID%2FH8ynfOxKMPmh2tx4GETlLgqSRxtr7%2FGS3BqbD1A%2FDN7EIAL474bhU%2FvWCUQqEEWWE2abYC%2BfcLPSDwHk8MXUZer2WY8fTu4SxIT4u71j06%2B3ViNZJt5EbuzCiO&X-Amz-Signature=b35d7563ad5438e0a7fa3731f4f6ea2e6369ad76e63c015bd9653237f6a302d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654LEUZXN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9WNtTufsG7qnbsWxQLV5geCkGo9jT6RMIjRItF8mwpgIgVxGDdndShizh0%2BgmsO7FriSW3OpxcnhE4lsMW4vAbRMqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbOxjLSW5swFrsDVCrcAyehwTxzqi8DhdwGrTlmuMHyT4v4jsrcac%2BTc21a%2F%2FTG9wvnS%2BldvDtGTi2Vc08P4%2FCY4T%2BnhWPntXZy1AQ6DOlMIsDafvN9qU7LufBjpX6mARQMTOvuN0n%2Bu9ZaBA6u4WSg9P9zwcVU2Sj3Ra2xHXrGWxeF%2FiNGZMZvHJUL5XaS92fnsiboef57PqrD17qQ0w09ANqf9zV%2B3tOo0c4IpiIGeVXjMA%2Fmjo1NhfbxUYg%2FmRHxYqcGkrYI8Z1WfcQe2x%2BFiOkQFnld5Yt4UnVOhMlgQ7zy%2BTxljIZsHttsuw9cjkmJUfV9fE7IwUeQhUFHQt8Jith5CENtEA%2FR9%2B90JQjN8pJz9YH0zqZ3MF72bOqQnWGSgo2mGXrDz%2FhQV3Blt76ilTLUf%2Bf8QVrIWw31s4vjOWamvmqkgnh%2FUSkZrS%2FuR7rNvQoLFVcHNMNSpZF1Mh2cLogbu30N44JgwmuBi%2BKYvdUjbXhoxwuNmZDrdnC3lVgXqkpAsF4ewMWoNOC%2BNUe9M71lb926FK9PSujrRi06f0nY2UwhxCxBdS2WcJyHBvKVQYjWpHqsKcNxIsxe3rqrN%2BuyW4JURatjodH0ocmlaKLVF6QoiippiL6DHZTSQvZauhJ5xDOpg1GSMIjj%2B7wGOqUB42fTylkdHr6U6aBz5ZSgQ%2BOLYck1jwyi%2BgG8ZzplP6SSLsh9Rv9Z6YbhXx8ZGKfxJTnsXC7TmUGUtQmDdAq3qhKfWYMFTwfp2HirsdWpdsddK%2FKJJPEa54r9XNEqYpogmdSrRSb2rXPfJwZsLANjc%2B8yNa%2BqLQ%2Ban4K%2FTetf7sP58bkZTQxAWO%2B8rO%2Bdd2jUJY%2BIwNsoyDHoQk4%2F28kFfaAFy5Mn&X-Amz-Signature=8ad79d2ec0446f4476cb427300e1a28d7188bb631b1e9ef13b1800bc02f1a0cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
