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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7I5R6C%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCPimvPZPx1%2FxBYbs2U%2BCSPLkLqdwxzu%2BnvMMVNlw6GAiBJwLLoN2UIB21xeMYEDFzma4cjZRsgdLtr8SN7I%2FMNzyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMwvzVwp2t3eUEIYC7KtwDz47ZJfpKgBg05zJLC07q24nmCeYushYlzlUvIcLMdLhyRme3iI9nj%2BCClGkUjkLLlkKE7usiqsjOogfQryEr4lq5leDMSh6FEuq2Zsak8cL19EqtRcdHNulLTmEgcJPuQy20Z9WBtNgODcdWnrljzu0p2xwaizuvYS9EhpSDMFmc21qJNj7rKeJLO5iwKA6NDUiEw%2BCAyEahsZKKB30InvbgZk3r%2FXu8Vb%2B7x4CiAfeclTJqdhhmNE5ZjrIi8USOFNObk3l6gQg6Y%2BEd2XsmsEVoD5M%2BMJiTmiXszMAYZQGL8iTpe%2F7540mmvbXXeO7DQlYJIfzNeu1N6ErvUTfpJts2camQLs4k%2BronXqYf0OQwGWAoe1SJAeG0kdO8%2F3GorJ%2FQDeBZxSLG4RlvBzNaDoNRlUXKa4%2BoBJT20D5TAqicK4Z6z4bRDkY3AtY3DZIQrKmEXr1sDGWGrBkVWTQGnPfRBh8MpT4qF3iebfcQcBTGbhUiqzl3omjbC2fdr6qvcAtKp0kKxX58dpvxGMR9uv3gxM0QStN7b8QHTwXERNKSihSesnAPsiPz5JOzSt5n2mQwq948WUZ72F4HM9uagbGfbyMB7MVahUdB%2FEH27dJANCosJG%2BlfibbWjkwgeSKvwY6pgGC6bSHeFAmRTijvTDE3K9bJxT1KsMUNoPAdNsP6yet%2Bqwri0FgLQQW5ZJ2uYlErCYjZjK3I1IIUqYDGQif3MplM9rf48shZ0AKl5gsZJuysq1ZBt%2FY0F4Rdftmq%2BCv25rlv2tb6aX%2BkccwrvUV8%2BQIaCXqlSbaPPDUsCwWbHx3IhN%2FWWc6pJJNuOad3x654c%2BaIpIZvx873p4b2Xri1hASBk7mJOVv&X-Amz-Signature=deb7d432fb2317f7d9e12b66a372674a2814e8ab8a09793a8002153bb188874c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7I5R6C%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCPimvPZPx1%2FxBYbs2U%2BCSPLkLqdwxzu%2BnvMMVNlw6GAiBJwLLoN2UIB21xeMYEDFzma4cjZRsgdLtr8SN7I%2FMNzyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMwvzVwp2t3eUEIYC7KtwDz47ZJfpKgBg05zJLC07q24nmCeYushYlzlUvIcLMdLhyRme3iI9nj%2BCClGkUjkLLlkKE7usiqsjOogfQryEr4lq5leDMSh6FEuq2Zsak8cL19EqtRcdHNulLTmEgcJPuQy20Z9WBtNgODcdWnrljzu0p2xwaizuvYS9EhpSDMFmc21qJNj7rKeJLO5iwKA6NDUiEw%2BCAyEahsZKKB30InvbgZk3r%2FXu8Vb%2B7x4CiAfeclTJqdhhmNE5ZjrIi8USOFNObk3l6gQg6Y%2BEd2XsmsEVoD5M%2BMJiTmiXszMAYZQGL8iTpe%2F7540mmvbXXeO7DQlYJIfzNeu1N6ErvUTfpJts2camQLs4k%2BronXqYf0OQwGWAoe1SJAeG0kdO8%2F3GorJ%2FQDeBZxSLG4RlvBzNaDoNRlUXKa4%2BoBJT20D5TAqicK4Z6z4bRDkY3AtY3DZIQrKmEXr1sDGWGrBkVWTQGnPfRBh8MpT4qF3iebfcQcBTGbhUiqzl3omjbC2fdr6qvcAtKp0kKxX58dpvxGMR9uv3gxM0QStN7b8QHTwXERNKSihSesnAPsiPz5JOzSt5n2mQwq948WUZ72F4HM9uagbGfbyMB7MVahUdB%2FEH27dJANCosJG%2BlfibbWjkwgeSKvwY6pgGC6bSHeFAmRTijvTDE3K9bJxT1KsMUNoPAdNsP6yet%2Bqwri0FgLQQW5ZJ2uYlErCYjZjK3I1IIUqYDGQif3MplM9rf48shZ0AKl5gsZJuysq1ZBt%2FY0F4Rdftmq%2BCv25rlv2tb6aX%2BkccwrvUV8%2BQIaCXqlSbaPPDUsCwWbHx3IhN%2FWWc6pJJNuOad3x654c%2BaIpIZvx873p4b2Xri1hASBk7mJOVv&X-Amz-Signature=b492cd97425f650fb8c76269223e5ba926ea0e2d3466492a7edec1631a04a665&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D3HJSBP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClGNHdW1G8d0CWzKxmdCBKpW6bEPiwjGAUbw3mbz5aOgIgW5nnihvMppFSa%2BC9aAJlKu7SrceS39C6q7LW4EB6xPsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDN7kV1Qq2nEoGJymtircA3XEoUD0su%2BwkNg1qC0UQBA4xBOE%2B3s3y0d4nnbK2wjgE0E8l2KTViLRvRDWRFpMgNCqGxoQxsdBUUmL0xHlZTTjJN%2BaFu5tLad965JfEM0I1lMwQqk9r95%2BIwRqZAbFqSTN%2Bnr%2FUz8QyuM27Z2%2B20vSFk9vUfr8wISlcVipk0qtgqp7ax9%2FIcECej36y1bvmrcUyJa%2B5Ns%2BPWtstmZB3ETbUcu7NDZ7403OMGPyn%2F02inRsAvgc4JbGMVNbCrosuQ3OLl8ObO%2B6eMm5COk7HGEzBgER2RtAfTZlhdLLMqSuFnoUY1vWFwQvAehhKqeZPtvsuE1zPZRdvPYUPb4RSE9e2fLoKrDkjWMl6EhFP%2BPN7tUzXD9ZEiUKaHnOh6tdSVkSpv7CjxLoGZgiXSts1DY7ALW0P478ZTvES9zwboODLMc5WtnyYrWYYEUomCzcRJnnRpVZi5GCHXhLxQCTuINhcN5cA93c0i8I9WbApNfDurpM7z73zZYRN7X7qQ%2FuCLU%2BKPahmrBf4Aqj85FhQNcULfPjXY4ZXbr%2BD0cCm9Nvxhd6qRFdMY%2BZvAkTwliJF7XzpAKnPeptb6XD8X3rOq9JUS%2BIdTl8JhdufUthbjJDB7keq4B0k5gMGw8GMIblir8GOqUBdzLhuG%2BImaq%2BLC5fp%2F4%2BHT669zDjEJLrW8NBz5G0lbsk8EvMXR9pwhB%2FHRisPeZDqIZROJDfeFpPxwtzBh69%2FIsJlqfo7zRP35nbws2NQ%2BaAOI7p6NhsPgrkxYVgg6V6hnKm0Wr3aTKG3BSo7IM54jWCbmZTD51HrPn1Go8tkaO9eaIiMKoTExWd4Xuh7SkzF1BgPPJUrihQIiwFWo0%2Fx72ud3DS&X-Amz-Signature=64ffdbe975b0a3ea77ac9240927be28dcc9f0edcf01dbafc8efac05822287414&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWKQIMO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDseJuT3WH7u%2BQ4G%2B%2FqVCXg1ajagDL1kBz6V6TajxEu8wIgflw%2FlDrAF%2FnmUvIDl%2FobOTO0mct5nD9JpgLvJCxJkCoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFh96fcWeL7Gwgak9SrcA%2FDrCl9hBjoHnGvxPJ3GyIlRYmJ29Fd8z4yO%2FvM%2BUxsij%2FbLlok97aKCuS0ATTOaKtYUxqSEWPT9kJHjywcehEs2Pti6G9h20uU1keSk0aXzQAGIM7Uc1fCcMS2gqC0QpYqJW8z2Iqzn%2F7gzUAOyTKr864gW7bKpFeFUEWJi9Xiq19BWXKn8bTT%2BzdtDMf5NtDoz8L2XkMcJfMSnqgmBbnBU8lIbf7v%2FU9i8o7GvarREUZde3YUgV9Gpr7cFel3fPAoWQfAPN8nokpg3%2FEpgxD06EiSPunNzrxnigamuP0h928bROh63qMTXyetn%2FTHuvGJ7LywkxRlw%2F1PW7AgrVKPpyKtnw193t0XNx4dZjfukWVO5sbRat%2F6lzm%2BGzWuR8DOKpwkFZ%2Fu%2B39NTnOqDFiDjIRvTZ6YfgJNO0%2BZoupsj963uzxWMu1uDnPGcBeft6OsB0pU76%2B%2BKqDmQ%2Bwk0Ngon2wjx7VQjb0ezoxBtDUEqfmzo1UpO4y0Dfhgxx7IJm4outYPUoHygTw0GmTCSm1hRkmXdEIbivNyXPHRFisdAnEtWehaqoaRshdVE4NKJWyJd4X5WQGZps1z%2Bdet6Ft0YWM513GRoHRXMvkn9TZ7BOIM1iGjTYEm3a7zdMJDlir8GOqUBfgd0HUQkRMQBZLFs%2FB1dKuA5A%2BlY%2FEAKx73Z7YwI%2F4r7Kqmtgdyi%2BYe3BrNHsDrIqwLHmCyGUWOrwHCmBeCZ1PYvKsx%2FGlU3OayTls%2FIMvB6Zj8iOhkqRG31NoxJK%2Bex8f4Gbw6iZIXxacCYD68HDcjjiTtIfFNj%2FLmhQhGxfYvK5rxELdZDZ3kTaHOLZRlCzarK5lVV6THSwiXthXRBrDZgkyHM&X-Amz-Signature=ca688f99c9e092c90177e71b1e6b5207f65caa34db391697f09952c3cd6af149&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7I5R6C%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCPimvPZPx1%2FxBYbs2U%2BCSPLkLqdwxzu%2BnvMMVNlw6GAiBJwLLoN2UIB21xeMYEDFzma4cjZRsgdLtr8SN7I%2FMNzyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMwvzVwp2t3eUEIYC7KtwDz47ZJfpKgBg05zJLC07q24nmCeYushYlzlUvIcLMdLhyRme3iI9nj%2BCClGkUjkLLlkKE7usiqsjOogfQryEr4lq5leDMSh6FEuq2Zsak8cL19EqtRcdHNulLTmEgcJPuQy20Z9WBtNgODcdWnrljzu0p2xwaizuvYS9EhpSDMFmc21qJNj7rKeJLO5iwKA6NDUiEw%2BCAyEahsZKKB30InvbgZk3r%2FXu8Vb%2B7x4CiAfeclTJqdhhmNE5ZjrIi8USOFNObk3l6gQg6Y%2BEd2XsmsEVoD5M%2BMJiTmiXszMAYZQGL8iTpe%2F7540mmvbXXeO7DQlYJIfzNeu1N6ErvUTfpJts2camQLs4k%2BronXqYf0OQwGWAoe1SJAeG0kdO8%2F3GorJ%2FQDeBZxSLG4RlvBzNaDoNRlUXKa4%2BoBJT20D5TAqicK4Z6z4bRDkY3AtY3DZIQrKmEXr1sDGWGrBkVWTQGnPfRBh8MpT4qF3iebfcQcBTGbhUiqzl3omjbC2fdr6qvcAtKp0kKxX58dpvxGMR9uv3gxM0QStN7b8QHTwXERNKSihSesnAPsiPz5JOzSt5n2mQwq948WUZ72F4HM9uagbGfbyMB7MVahUdB%2FEH27dJANCosJG%2BlfibbWjkwgeSKvwY6pgGC6bSHeFAmRTijvTDE3K9bJxT1KsMUNoPAdNsP6yet%2Bqwri0FgLQQW5ZJ2uYlErCYjZjK3I1IIUqYDGQif3MplM9rf48shZ0AKl5gsZJuysq1ZBt%2FY0F4Rdftmq%2BCv25rlv2tb6aX%2BkccwrvUV8%2BQIaCXqlSbaPPDUsCwWbHx3IhN%2FWWc6pJJNuOad3x654c%2BaIpIZvx873p4b2Xri1hASBk7mJOVv&X-Amz-Signature=c41c0b57b97b482cc6fbead5b61fef98d84e7e21b332ff5d2dd5a41a83d6ca09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
