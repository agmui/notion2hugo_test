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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVFGEZU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCEZ0QDIrTeB9vSAYHxJNcDoII9dONASxtVR5wQgcBxwIgJTfy9sXfMA6PzSTkCXvnB1jT9MJ%2FW4V%2BF%2BLozeGNL%2BEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf6y65Psw3FalGYWircA%2Bt3JEPJrKx7R1uG273I0qHIAnhSs%2F726RrmozJzZ2YJqDp0mMdLlKmGgPt9Ra87DFq1z6qiXNgGntzNE%2BOB5xCEOW1BzcUF6ixQekg4B%2FiKNnFalOymDQ3s4tqsPASXNYBSDalPUT1OuLHNu4vCNeYCcv4xMIs%2BxibjRPEXH%2FMNm7mH3Wr2RLq%2FCXdfDgGerTNjvL5O5O9HcXEFTGd0Lq6Aon7fV36BtSMnEWzzRm8Xt1aCN2Ver18qYiiqLLq5m%2FWhaeoBb1%2FHj7GngaqEf%2B2v6DoENTxzuU7%2FPo%2B25Fn5FQWz1%2BYcob5o2N61W5azf9crIBlgbjxlbNubEKfIZRYiuklnqqXggKUu3wZIC1fxxebWhpjIM50n1Vfz%2FZg8d9xVKrWwQB4Db6zBMp%2BuroYqJA2wHuaJakuOJUbe37tlktNTegbxBZCkzCvUFWWY%2Fo7cZ95h%2B2GJxa7lmgLiiaYHjDofcFD%2FCzNXAQcpkW4vFVd%2Fvak%2BZtXMG9vVnKiEDf0u6C6HqMZl1WGnDcOkyhhXXP4fzelpl%2BGi%2BjdzZMNx1PmZD8N83SzI0nmGJMhI8KdWt44cabqcZhgErd%2BIWlmaYD02RnAcw4f49z81AQUQabO6lCy3kdDcHBwbMOj%2Fnb4GOqUB9Vyk0on4Veqtu9fNzk9b7PS1jI5SluJYfR6Z932ztxbtAHdeBZsNOCInddrjMTgGm7E8JNsx%2FaAaXymo3ULeuglnTb9V%2Bt8o0Pq%2FDhFEzGCePRSoQ4bSXzsn3LjL4vkZS3vKzG9v%2Fqd%2BPpWhEwnTSKQiM%2FU95ZlaPCb0d4y1Va%2FHbhUS6fzImPs9%2FRT10sQoN8jVugUDPAjQji7haIrMzQqBzcss&X-Amz-Signature=dd1ab9b439b510ae3b9d72dbc7e9e79d966a87cf8f66b727e5e45334afadda92&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVFGEZU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCEZ0QDIrTeB9vSAYHxJNcDoII9dONASxtVR5wQgcBxwIgJTfy9sXfMA6PzSTkCXvnB1jT9MJ%2FW4V%2BF%2BLozeGNL%2BEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf6y65Psw3FalGYWircA%2Bt3JEPJrKx7R1uG273I0qHIAnhSs%2F726RrmozJzZ2YJqDp0mMdLlKmGgPt9Ra87DFq1z6qiXNgGntzNE%2BOB5xCEOW1BzcUF6ixQekg4B%2FiKNnFalOymDQ3s4tqsPASXNYBSDalPUT1OuLHNu4vCNeYCcv4xMIs%2BxibjRPEXH%2FMNm7mH3Wr2RLq%2FCXdfDgGerTNjvL5O5O9HcXEFTGd0Lq6Aon7fV36BtSMnEWzzRm8Xt1aCN2Ver18qYiiqLLq5m%2FWhaeoBb1%2FHj7GngaqEf%2B2v6DoENTxzuU7%2FPo%2B25Fn5FQWz1%2BYcob5o2N61W5azf9crIBlgbjxlbNubEKfIZRYiuklnqqXggKUu3wZIC1fxxebWhpjIM50n1Vfz%2FZg8d9xVKrWwQB4Db6zBMp%2BuroYqJA2wHuaJakuOJUbe37tlktNTegbxBZCkzCvUFWWY%2Fo7cZ95h%2B2GJxa7lmgLiiaYHjDofcFD%2FCzNXAQcpkW4vFVd%2Fvak%2BZtXMG9vVnKiEDf0u6C6HqMZl1WGnDcOkyhhXXP4fzelpl%2BGi%2BjdzZMNx1PmZD8N83SzI0nmGJMhI8KdWt44cabqcZhgErd%2BIWlmaYD02RnAcw4f49z81AQUQabO6lCy3kdDcHBwbMOj%2Fnb4GOqUB9Vyk0on4Veqtu9fNzk9b7PS1jI5SluJYfR6Z932ztxbtAHdeBZsNOCInddrjMTgGm7E8JNsx%2FaAaXymo3ULeuglnTb9V%2Bt8o0Pq%2FDhFEzGCePRSoQ4bSXzsn3LjL4vkZS3vKzG9v%2Fqd%2BPpWhEwnTSKQiM%2FU95ZlaPCb0d4y1Va%2FHbhUS6fzImPs9%2FRT10sQoN8jVugUDPAjQji7haIrMzQqBzcss&X-Amz-Signature=d5eaa5fe9c50c55222db7e9f2187184be3bb17c26d68da9c2118806a54361345&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5G3LJD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTa%2B3f%2F3BBcUzpw2RjkbkSrl8HIv4tum6Q0mIJyUSBXAiEAt0yUVmOsfLIUIC3Zu1KQOEE9s%2BZFBogPI0Cnfs0yAPkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZtFSTBoFjcSxe9SyrcA7IbssFntpRY%2BXBoI8NSihbYJw7mOYyC1xPLZTwgjxzmPv5fFlpLHpVQv9oWsmVHjoOvTSvEQXLcvW3tAa1CiJN%2FQHZ3v6PbmBpxV230sHXQfQI23gSTC2%2B%2Fdzh9nJQzaya88TUf3KulU8j0eO88IhBNZuO%2Bw%2FrA9fNV9xnQGgWW46R3BZmqjHe0h7ol8NLjrSLKNJRJjnQWp%2Bj8FpFjqbX1LCT8Svb0CnSXYkDcEINC5PQTHIATnfCT162nZjl1YekjFKpNPuZqAJMCYzfzcakJnD%2BcHHdWzyOLfUDvbyIFJf9tjDWpT%2FvC178DVX%2BJfrkg3U6sfxWuMLOc24wZOL%2BZs2iXOUwqOM%2FfJApVYW52jwT94TXdAYshUpuquKT8SFJ9BnNHjTFLmUA%2BS3zpZlgAYob64FY6LJvoFltvPMetA1DWWRktjL6vCJDIpJrj5wuIQ6Jq5Hfh8J9RZnPKnSOwkMsmiL4jkkIJUmjIgcMrxbH9ChLt%2BWWtKktuHW%2Bsz0aXZQpPhRyZ%2B4sft3NMpz5yLtw2AxPyKlNZQSO%2FoErKOsiuNLDk4taSDpkJ41wqAeo1zJsQRWc3XbJ7H1uT9POhf0hDixkzYcw0CuFiz5SxBMlDjq7jL7SwPtQeMPH%2Fnb4GOqUB4C2Q3fUq0yadZi1oXrO%2BGabiKE5k0YnAQ5qIEjsLyicPLT3ihGGjoNat3Iqu3cib0YPSM8k8O%2F4V4CX05R%2FQ5uuvMLFQKysTNMtdrGN%2BD8ZjYdxI9DctkYlqC1HfIg705dOUrx4IVqPfSq0fkMq7wKng36K0OQCWSNdOxlfi5gVr7iRZjr%2FbPPUqi%2B4xBPY3%2F9IfkjTGfEvfOzbWQx%2F2RtUCtMrk&X-Amz-Signature=a198c593bab8a9fa70f061e42a3d56e0b0f6a9037ca4f3b99bf1d96602e16335&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZC2JGL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJVPgn4cQtAwi9SgLEkO9TLQ2Hsl9BP9kJu6OVaR%2F1KAiEA3zlS8ddd%2FBQeCyz%2BKHc1Adfd%2F1lZooLxJMMs1jaAeg0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPc1lztXpCEMuNt1zircA6wUqPQMDrQbdCioLG3PLaXrv0gqaCrvlW9slGaU50H10be5ARonsBX7d%2FP9nkLkJ1GUc%2BeoM%2B0SXtQqLDHw8Hj6wLr2pkIUVqTwSMCqfazoAx0BRzLAPbPpQcEvWBssu5zFV%2Brp8rQH4rJ2eWC9A3YbDW6hjBat32bp%2B8%2BW6mJ1VIbaLyKp2Xl25KbKuaFEIPv4zOlYiEdpYhwC02k2FK66uMMEK20PRbC7Vkj2d15RWssM3ZXWxSlv8u%2B6tfuFc%2FLlN1mhJjzo%2F9J61PIKn4%2FoDIRq0CsRIPR%2FlBSapQkkc7JcNdo7IfW%2B17KdJ%2F5sVduE3bBIfaFD6XwGMgGYeNfPKwkBEfvqIUzO9Q%2BH1K2J5bheVdMgsJRbjVGIhWbWUs5BKvO%2FYZ7yHj3Rwr7RwoZHwTq1YpQEEC9Vn2Oz3ZtsIR6yM9DATw1g0y0nbXJLx4J78UVwC%2B79xubbCYE3OcrssNQWUll8lgENBtczt1zCq1hBYIp%2FxYoZWICCMTuLjgKVkWt695t%2F3fyqbkrlLzvjnDV8Ryia8Wh349VJDwF7tLwu%2FzLvTdVZ7SGqcpxYKl%2F3PYUhBIP%2FcaOVLOHn9LeUNMgZ8pvVEEgLGuWxpqH9Ypg%2B2KCpaBbFupYuMI7%2Fnb4GOqUBBhq7AE%2BEWzCdOmDWGUmbItJcMHg%2BZedbeH25kgYiI4aRFKp7D1BEljV1fjHzLMfSNoVNloKIHV1pf%2FlU7quX%2Bkv5HEjDpe83VGIkMrc9%2FT3HZYnDmkOMFiQjtuIr09W9opkY1I8xfi0B%2B%2B51woPncnXoe2o3KPuRDO9iifij%2Fk3D0iAzJ3aHGpFIDk6Ptd8tO%2BlJowxE05%2B2n%2Bcl6OJePpGb5MXh&X-Amz-Signature=2eabf30db25bc8a3fe16d831978791c508186858f1a0c7ecb159817a6de6b956&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVFGEZU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCEZ0QDIrTeB9vSAYHxJNcDoII9dONASxtVR5wQgcBxwIgJTfy9sXfMA6PzSTkCXvnB1jT9MJ%2FW4V%2BF%2BLozeGNL%2BEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf6y65Psw3FalGYWircA%2Bt3JEPJrKx7R1uG273I0qHIAnhSs%2F726RrmozJzZ2YJqDp0mMdLlKmGgPt9Ra87DFq1z6qiXNgGntzNE%2BOB5xCEOW1BzcUF6ixQekg4B%2FiKNnFalOymDQ3s4tqsPASXNYBSDalPUT1OuLHNu4vCNeYCcv4xMIs%2BxibjRPEXH%2FMNm7mH3Wr2RLq%2FCXdfDgGerTNjvL5O5O9HcXEFTGd0Lq6Aon7fV36BtSMnEWzzRm8Xt1aCN2Ver18qYiiqLLq5m%2FWhaeoBb1%2FHj7GngaqEf%2B2v6DoENTxzuU7%2FPo%2B25Fn5FQWz1%2BYcob5o2N61W5azf9crIBlgbjxlbNubEKfIZRYiuklnqqXggKUu3wZIC1fxxebWhpjIM50n1Vfz%2FZg8d9xVKrWwQB4Db6zBMp%2BuroYqJA2wHuaJakuOJUbe37tlktNTegbxBZCkzCvUFWWY%2Fo7cZ95h%2B2GJxa7lmgLiiaYHjDofcFD%2FCzNXAQcpkW4vFVd%2Fvak%2BZtXMG9vVnKiEDf0u6C6HqMZl1WGnDcOkyhhXXP4fzelpl%2BGi%2BjdzZMNx1PmZD8N83SzI0nmGJMhI8KdWt44cabqcZhgErd%2BIWlmaYD02RnAcw4f49z81AQUQabO6lCy3kdDcHBwbMOj%2Fnb4GOqUB9Vyk0on4Veqtu9fNzk9b7PS1jI5SluJYfR6Z932ztxbtAHdeBZsNOCInddrjMTgGm7E8JNsx%2FaAaXymo3ULeuglnTb9V%2Bt8o0Pq%2FDhFEzGCePRSoQ4bSXzsn3LjL4vkZS3vKzG9v%2Fqd%2BPpWhEwnTSKQiM%2FU95ZlaPCb0d4y1Va%2FHbhUS6fzImPs9%2FRT10sQoN8jVugUDPAjQji7haIrMzQqBzcss&X-Amz-Signature=35620d8551aea920ea5a21382458488e3a9868ebc0fd694b8baea545fd418aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
