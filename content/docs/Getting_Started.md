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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3X3V6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHcyOOVOuIKiCVfUe4hiNIVDEqMkdQUkDmrtDPp7rmooAiEAu3I%2B8CCTKEvWnAZeaLBiJ7eqru8vyZTws3%2BXj5XEbKgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF91%2BpWTAb7FrRAnACrcA0c7GHffqYu52t9dNFsdLCJpLzw8qsX7DuGEd3OIpe%2BrYiRWDWrcTr3G92PwP6mYxDFulNU5xxDg2svx2Ec5Jh4q%2BvGjnSQrmw7gbcdmwyUwGOzfNs6z7l98%2FiLrTbZDnrICfPGCHoxPQ5RFr9mMZL7MtjEc7iWm5TMdL4OV7Gj37wAnG4KQ%2FxVj4SGFqKoXoy4uXOZ4UnKWa3yqzL2VbODMaqron5STbGv9c3J26qgnjlViYdNuChQFT1NFWPuJAJp4%2Fj97h3fGt4aBMNeI2Z7ZzstLtO%2BuJo6DtNEosNh4VcQef6sgSFLKFj8PjFNXggyAaZkkzNmlY9%2BuaSgarAxvBerLvMBNyGhLczWkAt8RgGjNcMFGCocKK5Kmx6NXhRr4OAP2R8NP8aqUFItoQs6p8z6wGcdkVVBWsVZ%2Fhwua32FQ3faZksOCxuWq01V%2BwKuTxf4SVYR5VGEFhvHJ4vQTtP8D%2BgOOq8D7FGKkrw32ilL9YGyRRjujBRo7K%2BElVTUSbj7ByB0C3hdCcAEaoLuK%2Fv3kStZbAMN9mfBq4FzyPqwvprkSc%2FsDT%2Fke4y%2BNLt6%2FxfJ61inQ4UurSlVItVdtVopL4MjZw%2BwAush9Qu1RnRY9a2OOeHmvNYrnMMWmzr0GOqUB44YpAjkYkCVR8T5kCgtCaB2JoK9hBYXIL%2BSLZt4doUYZOeEWL2AwVJRTIX5t51nrFo4sxzp6o5CiJxYOXJDGdcFABYo%2FNGZR3U3K%2FjLC2lIwVUtmct3pBKa%2F2qbeqUTma6YLztfTAfY4ydjYPk%2Fvd%2BqMwSbnpSyj9z7BDiMOs9MNNjbqUZJosiump%2BXLSyDvX6paZ%2FimquZiG9ZAkMUvqXvHnSTD&X-Amz-Signature=41eec2165b6c0ad1114c14864ce3d3a16dccf13039a707c714a89c75a5afc5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3X3V6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHcyOOVOuIKiCVfUe4hiNIVDEqMkdQUkDmrtDPp7rmooAiEAu3I%2B8CCTKEvWnAZeaLBiJ7eqru8vyZTws3%2BXj5XEbKgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF91%2BpWTAb7FrRAnACrcA0c7GHffqYu52t9dNFsdLCJpLzw8qsX7DuGEd3OIpe%2BrYiRWDWrcTr3G92PwP6mYxDFulNU5xxDg2svx2Ec5Jh4q%2BvGjnSQrmw7gbcdmwyUwGOzfNs6z7l98%2FiLrTbZDnrICfPGCHoxPQ5RFr9mMZL7MtjEc7iWm5TMdL4OV7Gj37wAnG4KQ%2FxVj4SGFqKoXoy4uXOZ4UnKWa3yqzL2VbODMaqron5STbGv9c3J26qgnjlViYdNuChQFT1NFWPuJAJp4%2Fj97h3fGt4aBMNeI2Z7ZzstLtO%2BuJo6DtNEosNh4VcQef6sgSFLKFj8PjFNXggyAaZkkzNmlY9%2BuaSgarAxvBerLvMBNyGhLczWkAt8RgGjNcMFGCocKK5Kmx6NXhRr4OAP2R8NP8aqUFItoQs6p8z6wGcdkVVBWsVZ%2Fhwua32FQ3faZksOCxuWq01V%2BwKuTxf4SVYR5VGEFhvHJ4vQTtP8D%2BgOOq8D7FGKkrw32ilL9YGyRRjujBRo7K%2BElVTUSbj7ByB0C3hdCcAEaoLuK%2Fv3kStZbAMN9mfBq4FzyPqwvprkSc%2FsDT%2Fke4y%2BNLt6%2FxfJ61inQ4UurSlVItVdtVopL4MjZw%2BwAush9Qu1RnRY9a2OOeHmvNYrnMMWmzr0GOqUB44YpAjkYkCVR8T5kCgtCaB2JoK9hBYXIL%2BSLZt4doUYZOeEWL2AwVJRTIX5t51nrFo4sxzp6o5CiJxYOXJDGdcFABYo%2FNGZR3U3K%2FjLC2lIwVUtmct3pBKa%2F2qbeqUTma6YLztfTAfY4ydjYPk%2Fvd%2BqMwSbnpSyj9z7BDiMOs9MNNjbqUZJosiump%2BXLSyDvX6paZ%2FimquZiG9ZAkMUvqXvHnSTD&X-Amz-Signature=b0d6c9fddb7b34d3eda2fd18cd6e6e8950ea03f0de4cf04199cb99af47e6ff55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5SAFKVT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDxd7i6Z00SmWHoF2dJO3qKKqYL%2B%2FGEGiCQ0b9vmmobwQIgTaSEw1s%2FGFiHtG44LfYTBVN%2BZLkLsKLSkPtRf4v7BC0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHfrE9tmbeFMX8aEOircA2uH7iG2n%2FHeLEan2oY9R9clba%2FYKeiulfVQFW1bojXozB3lUA5uuouCJuqp%2BqZhwtKe35veKPhNCWjnd%2BfODE%2BodEc60fsaEGwwnDWBuREcKmSYNLCmCN46ayUp848ymE3u%2FeBZ4xjxcvHwMduz0UYfzKRfWWAzJQUcieEyUV8Xi8edcSWAcrJCAhDJlzbvQnkFYbkwlOsMoMJrBd259Hs50kQ9rnn92QFjgewBZtqMXsOyAp2ofwDVR4pUI%2BDDvrFoKm%2BIM5b%2BBAAOUJbleeQ5wcPPkfHVQL5FymaJiIdLHPaoWCuVvrtFiARiU%2FWY%2FA7hlt1PdwgSjuCTNgAxLYltxoPhUktHcMBjHM05ZHDBDVD0Su7Nx7AYBUhhRl1NKqxOGHFY2wOqXU6kcVWOfIv%2FmF%2BYJ8mmp62pI9Mwed9TiFYywShsS6d2bG9sr4w16dxX7SFp%2BP3EIWtE9Z9ekL5inapOXK7x1dqKuP1YxwyzbqlEyqYJDJ%2B3trQ4gYkYDmdCi851R4n4jBm6HkEGybc4OVttcWkj2uztuFCf2BcY0ayMWU6ecMsv%2Fkh8KQREnRfXRMKga7N%2FD3OALHe7x2egHxNo4qnNXskzWur237mGjPoD4xMnZqQ%2FKwI4MM2mzr0GOqUBqf99J%2F9mBWB7y%2FO4G1kd4DyuoSkyDHhwA5xKdMtLKkEvKW9xjqLxr3Gz%2FU9A9WzvRR1aC7xNsxPsEJdfCNAkjzDUmc4kzf%2BjUUkzw49ItoNsTtUDCOWBH%2FbylI59Rhet5lQsPlrmnSLMXq2IraJsXVA9QR%2BOrBMQJjL%2BGse8u8D3cj%2Be84OBZX%2BHFpDp10Tg5IKYyfBYThfpW%2F%2FkzmVKbn0PLijY&X-Amz-Signature=0e2bde870f0a3dad84ee2a6c0bc656b73fb94b2f49472dc9ad68bf8a66d30974&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLZS5ED%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBInkUo6AbfEqcJ915ywNt8wsUsVn5lKDKDPPMQFqBWfAiEAh1cSRYDYIKY2r9KhKrRo8rh3psWFDoYERttxrRmWCyMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOp5KQxKeBkHVfsUoSrcA3yVObYY0xPMDwFgGx4xNiWycaDsMyK%2BECXnXah2lTUqyFQZFFy%2FxNNhx5gWUBf0PuzzfpoAw1ncQ8J0QgzI1cimsSMjQuuBl6zYEmCC3snp9pgViT3xmxtqQTqCj5tz6KFARyUagn3IUe4uD%2F%2BdafwspophzTwZvZ5Iqktu61mJ6mqbxgC%2FviOOFToZeJO0PqjVxhYuyRQ28Uqvdj4HxcpfNO%2FGXZtb8emHOiqsqT0aDdPLpVdxNrClNE7jJ2clqwSmr45NokWcpmPQKdmdrOFaByHxd0jDk1%2BzftDQQROTrtojJGB2wKeVZ63GDYg2nffWZHPBmtCN%2BWkQ4WDVtEgFAcoaPEbf1Ruo9SJPhqvze2q92RRPW1928A88EOnute4JMPWtn%2FtwcOyYBM7oeBizNfGRv8JH5uth542vRMKcH8JWbQStr0Hvkjf5j4ZEV%2BxgFaO%2BJkFgC35YFyd5Bt3za6EEeCJ5GcUn0IDt8KDY%2F%2FN2qiyCEHbCHeEDOwboEnkCaQ%2FdCUjXVzHUozncYii3WHgHEc8H0Xig8PydWj5AazftGqTr3%2BhuV78ieqvVyx3NTfRnPpQuoIR9SV8IM733SoMudFjOYyab%2F2a8GJ6kcPbj3dVrDuV6cSjAML2mzr0GOqUBqvu%2BNPPGX3wy5N8PRPE55BTbIDF%2FfKnUzY%2BUD74UOtHIsGXO29EbBNOKPdwp7WrM2gRGOkFZCWqwjdrB61W3YK1RHF%2B2DNKawIgmnR%2FmafFGbGo0yqYOJOcB7jnHU8iaoHwWRsz89tKS1iZJQvH5wuvfXn1qS2Y1I%2BByuU%2B8eLT8S0%2F9lWfFYrFw%2FnYwRVP%2BxwSgCPZrycsMv6AiScA21OKaX1Hj&X-Amz-Signature=9fa8a2d1e32b5a0d6ea126805b2a96b22ce6267c845605935cd05e1d03e9ef23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3X3V6V%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHcyOOVOuIKiCVfUe4hiNIVDEqMkdQUkDmrtDPp7rmooAiEAu3I%2B8CCTKEvWnAZeaLBiJ7eqru8vyZTws3%2BXj5XEbKgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDF91%2BpWTAb7FrRAnACrcA0c7GHffqYu52t9dNFsdLCJpLzw8qsX7DuGEd3OIpe%2BrYiRWDWrcTr3G92PwP6mYxDFulNU5xxDg2svx2Ec5Jh4q%2BvGjnSQrmw7gbcdmwyUwGOzfNs6z7l98%2FiLrTbZDnrICfPGCHoxPQ5RFr9mMZL7MtjEc7iWm5TMdL4OV7Gj37wAnG4KQ%2FxVj4SGFqKoXoy4uXOZ4UnKWa3yqzL2VbODMaqron5STbGv9c3J26qgnjlViYdNuChQFT1NFWPuJAJp4%2Fj97h3fGt4aBMNeI2Z7ZzstLtO%2BuJo6DtNEosNh4VcQef6sgSFLKFj8PjFNXggyAaZkkzNmlY9%2BuaSgarAxvBerLvMBNyGhLczWkAt8RgGjNcMFGCocKK5Kmx6NXhRr4OAP2R8NP8aqUFItoQs6p8z6wGcdkVVBWsVZ%2Fhwua32FQ3faZksOCxuWq01V%2BwKuTxf4SVYR5VGEFhvHJ4vQTtP8D%2BgOOq8D7FGKkrw32ilL9YGyRRjujBRo7K%2BElVTUSbj7ByB0C3hdCcAEaoLuK%2Fv3kStZbAMN9mfBq4FzyPqwvprkSc%2FsDT%2Fke4y%2BNLt6%2FxfJ61inQ4UurSlVItVdtVopL4MjZw%2BwAush9Qu1RnRY9a2OOeHmvNYrnMMWmzr0GOqUB44YpAjkYkCVR8T5kCgtCaB2JoK9hBYXIL%2BSLZt4doUYZOeEWL2AwVJRTIX5t51nrFo4sxzp6o5CiJxYOXJDGdcFABYo%2FNGZR3U3K%2FjLC2lIwVUtmct3pBKa%2F2qbeqUTma6YLztfTAfY4ydjYPk%2Fvd%2BqMwSbnpSyj9z7BDiMOs9MNNjbqUZJosiump%2BXLSyDvX6paZ%2FimquZiG9ZAkMUvqXvHnSTD&X-Amz-Signature=58558f67aaf15a9498b69466a91645012541ebc710f0c0a9564e5b87e9ed3d55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
