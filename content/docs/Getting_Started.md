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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJADNI62%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICW1g0IzyBnOTixGqy71M2urwuBkjqcFNvqMfH4hJZXeAiABBV9HzbJSslWErsBjvJMj8faNCx6ziCY2bBQF0iOmmyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkt4mX1UDOeCr3dsCKtwDBjL9snTFPapCOYC1O4yO9n3Z83PPDly5ktWzt2fASFIDR%2BJwkQT6BFZ69QQf1OZm%2Bzgn285RqYXv55yMAiXoJT6rTNO9KNPJ1yluQH3ZPMZjGoQax8XVdo2f4Tf20%2FTwKuxfpSOsbUVMxNrrtKH6%2Fseq%2Br52jtPPGItwvKrPGuZOi7%2BkIlbZC1sStL1Deo6V89Tb5K2lznXswQ9OoQR%2B8QwFA5Lb31zh%2FQjpzBp3fpdtKwsbHKhkWdTKy%2Bx3yFvGRRf%2FXZ1axaz1GhkGlRV5UcRIlHIUir3mrgIJUWQnVTX8Ldc8QAlLN8jhG1Y0KUNj9IRU9czcHl617RDKozdtyaKiPN5XO7DB4OSntlDWS8gxgt5vkvo3foprU7ZnjIK%2Batjqpg2yFL8RkCnX4GuTOxOcR7iHDsEryB2hiFWi6cMON2MCJgChyWgHXYyVu1FrzfN0PGESFasBjDaDixgN%2Fx4YnTDb79T8l9KrQy9e0PKsXjOq919AElqjXysKj4%2Bk%2B5iG0I4d6rxb9but4BwDDcqaPxMHhzScKWDUIuf18thxnrA6DlYwPlWw%2B7OwRyJo5A17rdjnYxNCUsgIdXDB8gskAjRmZGHwIapz5utZn7F52G4038CibdHoXFUw%2Fq%2FjwgY6pgEj8148nQydjJc6vYiq5K4PqfOq1OSjHLhYHK5wcDBDB1K0NToYtXBHBQz63IJDCeGhc2nao8Uu7TWxVjMVaHYV9dLZylzXgtu9bVmpOhH5dscF4VMr0rHLcSo0LtcMYavvfz%2Bjs%2FBflKZ3Zb1O%2BKujfgDC1rDP1pE61Ly183PJqD0C5ohPFvBU2RCuLb%2FSuhAo3k%2FKCWS1PFRelhXNpJmd0yKoYQPd&X-Amz-Signature=9298f901a5cc3f55450aa1e13528edc8d8daf91510bec06ed24cdf771386a6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJADNI62%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICW1g0IzyBnOTixGqy71M2urwuBkjqcFNvqMfH4hJZXeAiABBV9HzbJSslWErsBjvJMj8faNCx6ziCY2bBQF0iOmmyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkt4mX1UDOeCr3dsCKtwDBjL9snTFPapCOYC1O4yO9n3Z83PPDly5ktWzt2fASFIDR%2BJwkQT6BFZ69QQf1OZm%2Bzgn285RqYXv55yMAiXoJT6rTNO9KNPJ1yluQH3ZPMZjGoQax8XVdo2f4Tf20%2FTwKuxfpSOsbUVMxNrrtKH6%2Fseq%2Br52jtPPGItwvKrPGuZOi7%2BkIlbZC1sStL1Deo6V89Tb5K2lznXswQ9OoQR%2B8QwFA5Lb31zh%2FQjpzBp3fpdtKwsbHKhkWdTKy%2Bx3yFvGRRf%2FXZ1axaz1GhkGlRV5UcRIlHIUir3mrgIJUWQnVTX8Ldc8QAlLN8jhG1Y0KUNj9IRU9czcHl617RDKozdtyaKiPN5XO7DB4OSntlDWS8gxgt5vkvo3foprU7ZnjIK%2Batjqpg2yFL8RkCnX4GuTOxOcR7iHDsEryB2hiFWi6cMON2MCJgChyWgHXYyVu1FrzfN0PGESFasBjDaDixgN%2Fx4YnTDb79T8l9KrQy9e0PKsXjOq919AElqjXysKj4%2Bk%2B5iG0I4d6rxb9but4BwDDcqaPxMHhzScKWDUIuf18thxnrA6DlYwPlWw%2B7OwRyJo5A17rdjnYxNCUsgIdXDB8gskAjRmZGHwIapz5utZn7F52G4038CibdHoXFUw%2Fq%2FjwgY6pgEj8148nQydjJc6vYiq5K4PqfOq1OSjHLhYHK5wcDBDB1K0NToYtXBHBQz63IJDCeGhc2nao8Uu7TWxVjMVaHYV9dLZylzXgtu9bVmpOhH5dscF4VMr0rHLcSo0LtcMYavvfz%2Bjs%2FBflKZ3Zb1O%2BKujfgDC1rDP1pE61Ly183PJqD0C5ohPFvBU2RCuLb%2FSuhAo3k%2FKCWS1PFRelhXNpJmd0yKoYQPd&X-Amz-Signature=f49881e85895da7cea6e5887241b56f14c5e44d6eee9d3437d4353c7f3e49000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJADNI62%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICW1g0IzyBnOTixGqy71M2urwuBkjqcFNvqMfH4hJZXeAiABBV9HzbJSslWErsBjvJMj8faNCx6ziCY2bBQF0iOmmyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkt4mX1UDOeCr3dsCKtwDBjL9snTFPapCOYC1O4yO9n3Z83PPDly5ktWzt2fASFIDR%2BJwkQT6BFZ69QQf1OZm%2Bzgn285RqYXv55yMAiXoJT6rTNO9KNPJ1yluQH3ZPMZjGoQax8XVdo2f4Tf20%2FTwKuxfpSOsbUVMxNrrtKH6%2Fseq%2Br52jtPPGItwvKrPGuZOi7%2BkIlbZC1sStL1Deo6V89Tb5K2lznXswQ9OoQR%2B8QwFA5Lb31zh%2FQjpzBp3fpdtKwsbHKhkWdTKy%2Bx3yFvGRRf%2FXZ1axaz1GhkGlRV5UcRIlHIUir3mrgIJUWQnVTX8Ldc8QAlLN8jhG1Y0KUNj9IRU9czcHl617RDKozdtyaKiPN5XO7DB4OSntlDWS8gxgt5vkvo3foprU7ZnjIK%2Batjqpg2yFL8RkCnX4GuTOxOcR7iHDsEryB2hiFWi6cMON2MCJgChyWgHXYyVu1FrzfN0PGESFasBjDaDixgN%2Fx4YnTDb79T8l9KrQy9e0PKsXjOq919AElqjXysKj4%2Bk%2B5iG0I4d6rxb9but4BwDDcqaPxMHhzScKWDUIuf18thxnrA6DlYwPlWw%2B7OwRyJo5A17rdjnYxNCUsgIdXDB8gskAjRmZGHwIapz5utZn7F52G4038CibdHoXFUw%2Fq%2FjwgY6pgEj8148nQydjJc6vYiq5K4PqfOq1OSjHLhYHK5wcDBDB1K0NToYtXBHBQz63IJDCeGhc2nao8Uu7TWxVjMVaHYV9dLZylzXgtu9bVmpOhH5dscF4VMr0rHLcSo0LtcMYavvfz%2Bjs%2FBflKZ3Zb1O%2BKujfgDC1rDP1pE61Ly183PJqD0C5ohPFvBU2RCuLb%2FSuhAo3k%2FKCWS1PFRelhXNpJmd0yKoYQPd&X-Amz-Signature=752f243eaeb4b3feb07eebc80da7b69a1d8c66eff6a5b8aec2cfbbac49576028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQQGOIO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGmcUg9BQc9uuxjez2HzVfunpNEo8iKzPQm1ghZf%2Bt4XAiBUYa%2FlGcLibTwSjrwAH3J3WE0VWRNe4VkwHuhUgyPr5yqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtFwla1GgIuQKoTLMKtwDai0jw9ufEuY3paA8cc24qgZenq%2F91nneDb3iqexGxhqgWzvtXniE0979c%2BY59AnbP0H4X7xoAZIcU5xHDKd%2FCF%2F3kQ3CZew06hn3DwF3DcooxaRx%2B6c%2F83q2TbZZoj3d4so6qm37GRelMezmm%2BU6I9D%2FKRpwA0l9IsQ%2B0roRLzQP6O7%2FUNGjW7XPIUVSzxPSZFjaqYKxsHnppJzRkeOC2SEzimTJCU4%2F9O21CxMo2RmY3D%2FvfaWZJM7c4pq8%2BDeCT%2B7YMfIpUvEB0VNwgh6koNeYgIQ54uXIqtYQA9hmJcc8dI5GF1tp3NPGUa09A4in61gBSE8ZCNvjMsX%2FNxVag24tXf3oKqgnGvBDGbEptayEo4eLyUesnkStvl3RcJk4skffl9F18UvKLyIgjE%2BL1Ivy7zG2NSRcY0JQQxk%2Fh2dZoxbvfXi1XrqQiCKg7IJuYDh63IGVR96sEgidOrYnRO40cBQpnLEq7Ms4CfOAav18O6zlqEOwQW2zsKl1JhIHcI30ZTimMPIgu6u%2FrPVLo9XHzqj6oouhKKm4QZ1RHd7CtEkrFDjlKd9nmk2PEu545K3Qdb1H1Tl%2FzKIyFNFosVje%2BNuNawiw5PqngQwXHFgRDZleZiQ%2BLUH7BXIw67DjwgY6pgG7FIcQ3lzckbb2%2BzPMOErL%2FUg1W62vpE7Qkn4c6dn9wxnYvgDZQJUPTXJAOsajFIWfp%2FQ6pINqWiMIPqs74aqF7da9B0tAFTXvNrnf5l%2BZqsXBF03axyER5iIqgwttWxqPJLIflX2U9uN46l6MwZ5%2BdVhZy3BtC9Aa400UoY67L2Au35nuTVfaJRvgnyZEhwfwN9AIyrjKByQ7O9buNgrTsUCebXF6&X-Amz-Signature=f36036c50d6e0938993ca9ef611136c3efd9b45b5fc0f60e7d4fb846616c1e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5UASD3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIB7E0CzCbp34S89MAMalgAdXxNeNbeSxH9YWxk7st2nQAiEAlt52wx7M1sHGXqU98UMwTJjv8GPRYr4XjOibefZVu%2FUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO222u4RlMgB5UZfWyrcA7xK3PUHYPpwyJgwxIXNBLu5%2F1VDnei%2F1fBxOXUxBOuh%2Bw92tqMJDbTqnJJVX%2BBti9%2FCzCLxQE9N90ysVtYak6VLmjKKe4dAlU6MmsJ1U5Dd2%2BQ3XUJtsFpHjBTDMx6Ho7kTPz5MaZRJX2FHP05UWqwRissa7nl1yDuAbuLW%2FODYSpauJEDW1n6DPuLSv57AzMpRo2m7aEQmR7Ep%2BjC%2BUHHJTwN0oi%2BQcLip%2BPOoTo4CdWCw7qvUq6IhAwa7mEYMUe2WefJJ%2BnVUemdMWNcQH%2Fg91UrdcOhXcSw3XpWiPwtkuMbj5AvmoCtsjsZOJBuhdr927bif4x07p99TKKjTFNfQUTEatyVs8GR%2B7t%2FQlas2nrK3g7uKSakczijDHdJMm1lbsquWGGYNr3j6HwxY%2FDM0sC9r%2BjICJzY8xxgsENcTBaVJZPDnkm%2FzNA%2BfF5T8IJ0zvUHsoO0zJcdxJGbGpEUPf1UV0vu2FyDkcGpIxDXsgGMIPXF67ft4gnO8t7vjlur9PV63TMeCTuWUhfPeDmJXiEwhRHNRMso0aFEnzkeNEL56F%2BBqc0RXM2KLFV%2B%2FdTupP6ImSA3edfcaTKfamnigqkXbvjOhRFhV%2FUkYP3eOnzPZx5%2FkcYOdKWXxMKfS48IGOqUBznM4%2BRxKyJA3lqa0phuunPoReAs9vx444FqF%2BGfFwr8aT7XYSsYGVsgfEF5XWzJSFzahDiT66eR8wTN%2Fwk7pqYh05QTfqT%2Bquk8YwZAlo8PLrsIF1dkegPVnxamf3A4fOc89sF5Uu%2FFlfOBPJDDaKmEI758aWXdADlFuHNyoT%2BMgbf0RT3Y%2BpUQxjOsnhPSGhfj18aLtM%2BTnS8KbiLrg0avup06q&X-Amz-Signature=55914bba690e3d00e24481901d106c3ca30e45be202de45d8b3ebbf9aa7c8168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJADNI62%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICW1g0IzyBnOTixGqy71M2urwuBkjqcFNvqMfH4hJZXeAiABBV9HzbJSslWErsBjvJMj8faNCx6ziCY2bBQF0iOmmyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkt4mX1UDOeCr3dsCKtwDBjL9snTFPapCOYC1O4yO9n3Z83PPDly5ktWzt2fASFIDR%2BJwkQT6BFZ69QQf1OZm%2Bzgn285RqYXv55yMAiXoJT6rTNO9KNPJ1yluQH3ZPMZjGoQax8XVdo2f4Tf20%2FTwKuxfpSOsbUVMxNrrtKH6%2Fseq%2Br52jtPPGItwvKrPGuZOi7%2BkIlbZC1sStL1Deo6V89Tb5K2lznXswQ9OoQR%2B8QwFA5Lb31zh%2FQjpzBp3fpdtKwsbHKhkWdTKy%2Bx3yFvGRRf%2FXZ1axaz1GhkGlRV5UcRIlHIUir3mrgIJUWQnVTX8Ldc8QAlLN8jhG1Y0KUNj9IRU9czcHl617RDKozdtyaKiPN5XO7DB4OSntlDWS8gxgt5vkvo3foprU7ZnjIK%2Batjqpg2yFL8RkCnX4GuTOxOcR7iHDsEryB2hiFWi6cMON2MCJgChyWgHXYyVu1FrzfN0PGESFasBjDaDixgN%2Fx4YnTDb79T8l9KrQy9e0PKsXjOq919AElqjXysKj4%2Bk%2B5iG0I4d6rxb9but4BwDDcqaPxMHhzScKWDUIuf18thxnrA6DlYwPlWw%2B7OwRyJo5A17rdjnYxNCUsgIdXDB8gskAjRmZGHwIapz5utZn7F52G4038CibdHoXFUw%2Fq%2FjwgY6pgEj8148nQydjJc6vYiq5K4PqfOq1OSjHLhYHK5wcDBDB1K0NToYtXBHBQz63IJDCeGhc2nao8Uu7TWxVjMVaHYV9dLZylzXgtu9bVmpOhH5dscF4VMr0rHLcSo0LtcMYavvfz%2Bjs%2FBflKZ3Zb1O%2BKujfgDC1rDP1pE61Ly183PJqD0C5ohPFvBU2RCuLb%2FSuhAo3k%2FKCWS1PFRelhXNpJmd0yKoYQPd&X-Amz-Signature=62f9fa50e2d0f3678284aeb1a993e6119472442cbc02dbd7802f8828ebfe1010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
