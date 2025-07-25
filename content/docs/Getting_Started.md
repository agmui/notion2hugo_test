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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGOHDUP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDDSJ9uWyKMvX0Y%2Fo3mfDE%2BZkrSXPW7LkDQj1qenT%2FYAAIgMn0BF%2FN8cozNjxnqJ6T4gTZ2CTKegPz6qlHASAXh4bYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFQR5p81bOBqGEq00yrcA9lsiE2KEIU1gfV1pb51u1UGo8k27tPWKxijwuPjkJPI7k9O80AJ0wL8lnKgVIaVQA7pVfWzg%2BbDx8GefPk%2F2HuHCsT5qikcrVGYxxpeUc%2F1KJJwOkinjeVITA0irmPhwzk9DAEk83zP4CdYZ62xvf%2BLn5hfYa4n3wQpVjKUHuCczLM%2BItIJnTXiPQKng2IgnG6nlV3o6wGBk2iJybrWk2fWhao15A%2FACovmDh1LUsqOvVHtOrQ0it4usrIwZ1ROPnTLYjZbseLQfpawnD7qnzyApyF30Qiz%2BASl%2BGnTnWcP4wbhG7azYsVH5I0f4R7dGIO15p%2FqsqT1R8uoe59oZrB3%2B%2BmEAUqJXIvlXr7EMgtTxo5xwWeymMq9paRMDOQ9pUZXS7J0aoe9QCnbzTDR1r60dKCtFatcuU%2B%2B1zhycCgLd96oEMStnySAmsVMYFJdaXLINJBZbZ4mLlqFQtmLK20LnfMA9561%2BzqfbmruBcn2x0Nqhvs27GHJgbsaktDYIRphNzqpbxFSDmOK%2FdPyBKQTffFH0AAeGk0zsKMJUnn0P%2FznN2OawWw%2FtQhczLe5Npr7P8%2FLO8de9S0loM1h3BS4AOzWdxKEWnc%2BrhuRYhgXABeQL%2B39%2BHMBitdYMMbTi8QGOqUBTYaqMyeHaOxmlfl7JeT%2BW7NelPgL28Efth89hCdWOMJ8Z%2Br7bLfhfKglH4fkJ1A9leoDkuGvJ8IKAC6rWsnGZQTIqCgZ2VTIC2jNMbcDQx5B8RwTr6ZeVkpyD%2BdkU%2F0iCa74EIFQ55Tmwzih6q6h7YIk83XlV5cmWf5%2FJEWYMxrc7gtpucmMu%2BX5xrkdFwsehHtK%2FQSXnYXVJPEz6acp%2B6ljstKQ&X-Amz-Signature=d8a203174b97a2fe63e633fa131cc4c96f3c6499c431dd6c29eebcf8ddb22364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGOHDUP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDDSJ9uWyKMvX0Y%2Fo3mfDE%2BZkrSXPW7LkDQj1qenT%2FYAAIgMn0BF%2FN8cozNjxnqJ6T4gTZ2CTKegPz6qlHASAXh4bYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFQR5p81bOBqGEq00yrcA9lsiE2KEIU1gfV1pb51u1UGo8k27tPWKxijwuPjkJPI7k9O80AJ0wL8lnKgVIaVQA7pVfWzg%2BbDx8GefPk%2F2HuHCsT5qikcrVGYxxpeUc%2F1KJJwOkinjeVITA0irmPhwzk9DAEk83zP4CdYZ62xvf%2BLn5hfYa4n3wQpVjKUHuCczLM%2BItIJnTXiPQKng2IgnG6nlV3o6wGBk2iJybrWk2fWhao15A%2FACovmDh1LUsqOvVHtOrQ0it4usrIwZ1ROPnTLYjZbseLQfpawnD7qnzyApyF30Qiz%2BASl%2BGnTnWcP4wbhG7azYsVH5I0f4R7dGIO15p%2FqsqT1R8uoe59oZrB3%2B%2BmEAUqJXIvlXr7EMgtTxo5xwWeymMq9paRMDOQ9pUZXS7J0aoe9QCnbzTDR1r60dKCtFatcuU%2B%2B1zhycCgLd96oEMStnySAmsVMYFJdaXLINJBZbZ4mLlqFQtmLK20LnfMA9561%2BzqfbmruBcn2x0Nqhvs27GHJgbsaktDYIRphNzqpbxFSDmOK%2FdPyBKQTffFH0AAeGk0zsKMJUnn0P%2FznN2OawWw%2FtQhczLe5Npr7P8%2FLO8de9S0loM1h3BS4AOzWdxKEWnc%2BrhuRYhgXABeQL%2B39%2BHMBitdYMMbTi8QGOqUBTYaqMyeHaOxmlfl7JeT%2BW7NelPgL28Efth89hCdWOMJ8Z%2Br7bLfhfKglH4fkJ1A9leoDkuGvJ8IKAC6rWsnGZQTIqCgZ2VTIC2jNMbcDQx5B8RwTr6ZeVkpyD%2BdkU%2F0iCa74EIFQ55Tmwzih6q6h7YIk83XlV5cmWf5%2FJEWYMxrc7gtpucmMu%2BX5xrkdFwsehHtK%2FQSXnYXVJPEz6acp%2B6ljstKQ&X-Amz-Signature=5f6ec3b8453260b791dae18dbbe021617cb3ee91e5fdf1e04b5ef33198bfe932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGOHDUP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDDSJ9uWyKMvX0Y%2Fo3mfDE%2BZkrSXPW7LkDQj1qenT%2FYAAIgMn0BF%2FN8cozNjxnqJ6T4gTZ2CTKegPz6qlHASAXh4bYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFQR5p81bOBqGEq00yrcA9lsiE2KEIU1gfV1pb51u1UGo8k27tPWKxijwuPjkJPI7k9O80AJ0wL8lnKgVIaVQA7pVfWzg%2BbDx8GefPk%2F2HuHCsT5qikcrVGYxxpeUc%2F1KJJwOkinjeVITA0irmPhwzk9DAEk83zP4CdYZ62xvf%2BLn5hfYa4n3wQpVjKUHuCczLM%2BItIJnTXiPQKng2IgnG6nlV3o6wGBk2iJybrWk2fWhao15A%2FACovmDh1LUsqOvVHtOrQ0it4usrIwZ1ROPnTLYjZbseLQfpawnD7qnzyApyF30Qiz%2BASl%2BGnTnWcP4wbhG7azYsVH5I0f4R7dGIO15p%2FqsqT1R8uoe59oZrB3%2B%2BmEAUqJXIvlXr7EMgtTxo5xwWeymMq9paRMDOQ9pUZXS7J0aoe9QCnbzTDR1r60dKCtFatcuU%2B%2B1zhycCgLd96oEMStnySAmsVMYFJdaXLINJBZbZ4mLlqFQtmLK20LnfMA9561%2BzqfbmruBcn2x0Nqhvs27GHJgbsaktDYIRphNzqpbxFSDmOK%2FdPyBKQTffFH0AAeGk0zsKMJUnn0P%2FznN2OawWw%2FtQhczLe5Npr7P8%2FLO8de9S0loM1h3BS4AOzWdxKEWnc%2BrhuRYhgXABeQL%2B39%2BHMBitdYMMbTi8QGOqUBTYaqMyeHaOxmlfl7JeT%2BW7NelPgL28Efth89hCdWOMJ8Z%2Br7bLfhfKglH4fkJ1A9leoDkuGvJ8IKAC6rWsnGZQTIqCgZ2VTIC2jNMbcDQx5B8RwTr6ZeVkpyD%2BdkU%2F0iCa74EIFQ55Tmwzih6q6h7YIk83XlV5cmWf5%2FJEWYMxrc7gtpucmMu%2BX5xrkdFwsehHtK%2FQSXnYXVJPEz6acp%2B6ljstKQ&X-Amz-Signature=cb13f70e928e7773bcf3b216e053ed79df6aa0fbdd4f1c20a11adb65623095d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGPYS7AC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICZP1DvA9NSszjqkFAYa2%2FuKtGuaaYitYmXVcgGNFaavAiEA7JbXj5KLB6ooa%2FnsZOXRTIgu2yABfghCX6NSiCseTD0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKR63gVoUj6P6kxCQircA5IF%2BVLjZvW7c3h9cOU68TsNGRkzrs87AvwNgcOdl17jKLTScGLorugI1SX5b1B3ikmcp1cOFWelg7kKJwWckUjtDh232%2FKvaaz9DJm%2FJIdoyZ8gtMMjCq7EHEPmouEe%2BdQj5zws2f9PCt8AubIjUPv8xrRE7c2%2BF3u3zFX1YtTpCuOLUTmw08MTox193O107m0va1ULbBg0VanSwT3uLL8vmpyyGnb2fm8txkTdQTeROmZnUdrCok8gmSdiJiQxEsj5iTYWcNyDMwBrauiPAPxJ8T7DX%2F5%2BtRD%2BnPca9jD%2F1ykiQ%2BJyApODo0HijHXZbiBDPe4E3IC8zNzLCyNJ2Gyr3wtM8EAVrQI6JAXy0Mdr74ujUMjyCCrIbGqhLJoXyASCRTB4O2Z9KUZeEvv2NA5MAiNBnV%2BjBxj%2FyoqAp7et4e5X7BMLEb4BNr%2BUH5WlD2vMvDjmgAuC5iVIxs2d0phcrM23V3uncn5GQCZNNRo%2FFS0Pb%2BHGeRFk8n8PfwzqFpgc%2F22GUr0Pmzh9PR93nqMu70qgrvTrxBI%2Fb7ZJI%2FtVcLfHN5TjlMuGd4HhzgOo0A6mEFRu68frQVmeLPtDseDjY1d1LveBNHZT1ZI%2FYVJUHPLrj263ER6h93%2FAMJ3Ti8QGOqUBikBkvp9CslwGi%2F4JjcvCnZMufNmugzizzjSExaM0Ejn2Z7SLJp8ahSXIYchdgF8K0XCqhfrLorfjvG%2B7Vi6D%2F51uRPhg2g5skA8SD3z%2Fey3Bh4f6qruZATD069D1K9rdvaP7yFKpxlgah4bcRD%2Bqoyh%2Be%2FCee5TyerrkcYfztuypagH3cxAzjBZLpbnlrUlVYpVlnBFkqwFQReYGO2wbZtM17lHc&X-Amz-Signature=fa8db85a2db779109b1163c30cfdd1f9f557b3e4490ef7b61b9e950a069b02c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQH2CND3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCZStUq96G3ctC4dQEVU9YBBSZGJCvdSlwCFT4d6PohXwIhAMIkn8pTp8NLsUFFlGixXxwPaqa3nvwPTS0DB6rJ257wKv8DCDsQABoMNjM3NDIzMTgzODA1IgxiXyiONb4rMhdvwPwq3APjrLBBOxudMHDSlSLzEXuVsszx%2B7xhr3vNCnVSMM9Ajizi1hFYyDc73Np3uprYfPPdPAa0h5mcNlXVzF8G9eptn2u1wZfzuJe17ac%2F5UWfiYPna9GHAdPR%2Bp%2Ba4DZevxJb079hbrzXW6prxKxSqjhPpZs9b7uQ8boD6K0XvDgEwms9gpxekyty6QYBBZwZRIKw8gtvls9oeSTEY9RLqulagdYmdWtuOhtY0%2FI5gp4or35Atf4ZQqu1ANBGYkXxrkh85aPCarSevwyeAC2bndy3nW8agiJVi7hTND5eIx%2FWAlQrKDIICDiMkiU6P3WFqWc8qE5kfRO88mkrlwSLmkJQPbH84e9dcW06wen6SkOn4EMq%2B3s9irXT30owu8Aob52y7GGHY%2BAiQZivGmRL8%2BVYgPskT3MEpN%2FXKJ91frRf5ojiIvVZx0A6eSRtq3BQ887WCTw9Hqcddmyo8SWravEXeF2ryA57XEa3o%2FmiKDSWY3rtM%2B4mddRLx9IU6MfOEx0YOWWrNl%2F4Pw30XUJnz5nt0UAvdn4pXN9OlvUZvg0jA4NUSawJf64v%2BakzNPJaKPVASs6aVsOQW5cr6nU7A7XQwMveFPpAjlNzoFbUGXu6EHNiMhWrBcXFpGu5ujCC04vEBjqkAfGPgK47AkfCNu5GfjP6nYpVosa8XNZ%2Ffyq%2BD3rprAHA8rknrpHioNkpD68GnK5OURNYd6NYWSw97LJBdfYWud1BdysSWeVqzdpt5u%2BWzy%2BJlV4v9BRJhqMo486RbRYRDKk%2BXOMfkhwl19W2A%2BPJ898sOaIh2Nrv84U85TOvD9fbdLVt4%2FbXPKSJyuLiD%2BpezzFUefeLW8bSVAAKsjoh5ZhmS8nb&X-Amz-Signature=50a8eea95e03683d36655e1c4d639a90c658c970dd61f4bc32b2feb873859e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGOHDUP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDDSJ9uWyKMvX0Y%2Fo3mfDE%2BZkrSXPW7LkDQj1qenT%2FYAAIgMn0BF%2FN8cozNjxnqJ6T4gTZ2CTKegPz6qlHASAXh4bYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFQR5p81bOBqGEq00yrcA9lsiE2KEIU1gfV1pb51u1UGo8k27tPWKxijwuPjkJPI7k9O80AJ0wL8lnKgVIaVQA7pVfWzg%2BbDx8GefPk%2F2HuHCsT5qikcrVGYxxpeUc%2F1KJJwOkinjeVITA0irmPhwzk9DAEk83zP4CdYZ62xvf%2BLn5hfYa4n3wQpVjKUHuCczLM%2BItIJnTXiPQKng2IgnG6nlV3o6wGBk2iJybrWk2fWhao15A%2FACovmDh1LUsqOvVHtOrQ0it4usrIwZ1ROPnTLYjZbseLQfpawnD7qnzyApyF30Qiz%2BASl%2BGnTnWcP4wbhG7azYsVH5I0f4R7dGIO15p%2FqsqT1R8uoe59oZrB3%2B%2BmEAUqJXIvlXr7EMgtTxo5xwWeymMq9paRMDOQ9pUZXS7J0aoe9QCnbzTDR1r60dKCtFatcuU%2B%2B1zhycCgLd96oEMStnySAmsVMYFJdaXLINJBZbZ4mLlqFQtmLK20LnfMA9561%2BzqfbmruBcn2x0Nqhvs27GHJgbsaktDYIRphNzqpbxFSDmOK%2FdPyBKQTffFH0AAeGk0zsKMJUnn0P%2FznN2OawWw%2FtQhczLe5Npr7P8%2FLO8de9S0loM1h3BS4AOzWdxKEWnc%2BrhuRYhgXABeQL%2B39%2BHMBitdYMMbTi8QGOqUBTYaqMyeHaOxmlfl7JeT%2BW7NelPgL28Efth89hCdWOMJ8Z%2Br7bLfhfKglH4fkJ1A9leoDkuGvJ8IKAC6rWsnGZQTIqCgZ2VTIC2jNMbcDQx5B8RwTr6ZeVkpyD%2BdkU%2F0iCa74EIFQ55Tmwzih6q6h7YIk83XlV5cmWf5%2FJEWYMxrc7gtpucmMu%2BX5xrkdFwsehHtK%2FQSXnYXVJPEz6acp%2B6ljstKQ&X-Amz-Signature=7fd9f975d3da4a407d08268edab62544435ae8b219a17071031e6a823f9e76ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
