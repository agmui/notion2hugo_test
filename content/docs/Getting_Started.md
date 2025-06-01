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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW3VSBD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDSh5aRHXokdSPZdo%2F6hPwTECNfCHyL6StxlO4yZzMJlAiB%2BOfq8PQTkbCN%2FGYTLs1qy7jlrds4r04pNEBQyioXSYiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeI%2BndIIx1cB05mrDKtwDnhYZYb4EstsVbvKX%2BeFZb3SiDC2xMHrdjLNrC8uJGX50tANGZJErJ2xFvT8c%2B50w%2FGGQ2pXnERocdXZGnrpN9EwoTWxzjRJpV1%2F74I73dDUWTlP%2FFc9FGhq8fCDUgJLUQi6bbRZ%2F%2FfTOKkaMuLaonhld6PnzAcpXyK5vMxy7zZKF3Uk598pazEFBlexMXN0le9ODWF9Zb9j4OuoN2Gun788QqX9CmUYs0r5zyO%2Bmy63BlKuPBaiIKFR7%2BC6aEI34NcOjiHANZix2ofQ28AqlZ7U8fWeuAt7qnIPgmFkuIJYDZIOC%2FHeIwMEyd3CwUjRTDsyWvdhKTOfrFwP%2B7GKVQs74aE6QQs6vh45tSmJe0fkHCIQcWsYCRdS6jf18Mbv7Nl%2BYFSyCjl4D2UDKhTeQAx2Mo6f%2FBNy2Nq3GpfUdJuYiYb8c8dN1BGUV4sFqLx7704meSSNjlCTEltcma4imUqjs1bNWmJS99BhvQXpufUWFFbP6DgPL2cKzfs7cvmAOO52PJTaOq3ysnM%2BpymTrEYf9V2UySoCshY2kZCyS1Kn78%2ByTG0hSXiGXG40GzWemWsjzE9T6Y1weQ69jhvA7RNIUMNLEvLSnYmRdOZQbCWf9lMwoTDezfUo%2FldAw4t%2FwwQY6pgGtpwl8lm9vdJpYQxyr%2BppgyLOmRvUA8peHuIA3%2FUUoFLVUQagRCwyILuDnhjBQ0a9nAvMLl1HNAnJb1BrvcTjS5JSL37vk8tO2rWlZ1UC9IHAh6H58Ky78jLyTwmPFTFHGwCrIg0nZs7Sj%2FA1%2B7O97bGs4oZtW5t4lcYZN%2B%2BjHgGHFsgF7P4UMx%2FtF6pPbogHy8xbByRQu418D1P3vUrZatEyFW3Th&X-Amz-Signature=b61cba7d4d0948b068c811718fe540dc1f1ea506be890503cb64afd6622cd828&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW3VSBD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDSh5aRHXokdSPZdo%2F6hPwTECNfCHyL6StxlO4yZzMJlAiB%2BOfq8PQTkbCN%2FGYTLs1qy7jlrds4r04pNEBQyioXSYiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeI%2BndIIx1cB05mrDKtwDnhYZYb4EstsVbvKX%2BeFZb3SiDC2xMHrdjLNrC8uJGX50tANGZJErJ2xFvT8c%2B50w%2FGGQ2pXnERocdXZGnrpN9EwoTWxzjRJpV1%2F74I73dDUWTlP%2FFc9FGhq8fCDUgJLUQi6bbRZ%2F%2FfTOKkaMuLaonhld6PnzAcpXyK5vMxy7zZKF3Uk598pazEFBlexMXN0le9ODWF9Zb9j4OuoN2Gun788QqX9CmUYs0r5zyO%2Bmy63BlKuPBaiIKFR7%2BC6aEI34NcOjiHANZix2ofQ28AqlZ7U8fWeuAt7qnIPgmFkuIJYDZIOC%2FHeIwMEyd3CwUjRTDsyWvdhKTOfrFwP%2B7GKVQs74aE6QQs6vh45tSmJe0fkHCIQcWsYCRdS6jf18Mbv7Nl%2BYFSyCjl4D2UDKhTeQAx2Mo6f%2FBNy2Nq3GpfUdJuYiYb8c8dN1BGUV4sFqLx7704meSSNjlCTEltcma4imUqjs1bNWmJS99BhvQXpufUWFFbP6DgPL2cKzfs7cvmAOO52PJTaOq3ysnM%2BpymTrEYf9V2UySoCshY2kZCyS1Kn78%2ByTG0hSXiGXG40GzWemWsjzE9T6Y1weQ69jhvA7RNIUMNLEvLSnYmRdOZQbCWf9lMwoTDezfUo%2FldAw4t%2FwwQY6pgGtpwl8lm9vdJpYQxyr%2BppgyLOmRvUA8peHuIA3%2FUUoFLVUQagRCwyILuDnhjBQ0a9nAvMLl1HNAnJb1BrvcTjS5JSL37vk8tO2rWlZ1UC9IHAh6H58Ky78jLyTwmPFTFHGwCrIg0nZs7Sj%2FA1%2B7O97bGs4oZtW5t4lcYZN%2B%2BjHgGHFsgF7P4UMx%2FtF6pPbogHy8xbByRQu418D1P3vUrZatEyFW3Th&X-Amz-Signature=846b68e00486a3c531b741aa16df5159880e057cd0caa4c20fe4e170dbaf6746&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW3VSBD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDSh5aRHXokdSPZdo%2F6hPwTECNfCHyL6StxlO4yZzMJlAiB%2BOfq8PQTkbCN%2FGYTLs1qy7jlrds4r04pNEBQyioXSYiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeI%2BndIIx1cB05mrDKtwDnhYZYb4EstsVbvKX%2BeFZb3SiDC2xMHrdjLNrC8uJGX50tANGZJErJ2xFvT8c%2B50w%2FGGQ2pXnERocdXZGnrpN9EwoTWxzjRJpV1%2F74I73dDUWTlP%2FFc9FGhq8fCDUgJLUQi6bbRZ%2F%2FfTOKkaMuLaonhld6PnzAcpXyK5vMxy7zZKF3Uk598pazEFBlexMXN0le9ODWF9Zb9j4OuoN2Gun788QqX9CmUYs0r5zyO%2Bmy63BlKuPBaiIKFR7%2BC6aEI34NcOjiHANZix2ofQ28AqlZ7U8fWeuAt7qnIPgmFkuIJYDZIOC%2FHeIwMEyd3CwUjRTDsyWvdhKTOfrFwP%2B7GKVQs74aE6QQs6vh45tSmJe0fkHCIQcWsYCRdS6jf18Mbv7Nl%2BYFSyCjl4D2UDKhTeQAx2Mo6f%2FBNy2Nq3GpfUdJuYiYb8c8dN1BGUV4sFqLx7704meSSNjlCTEltcma4imUqjs1bNWmJS99BhvQXpufUWFFbP6DgPL2cKzfs7cvmAOO52PJTaOq3ysnM%2BpymTrEYf9V2UySoCshY2kZCyS1Kn78%2ByTG0hSXiGXG40GzWemWsjzE9T6Y1weQ69jhvA7RNIUMNLEvLSnYmRdOZQbCWf9lMwoTDezfUo%2FldAw4t%2FwwQY6pgGtpwl8lm9vdJpYQxyr%2BppgyLOmRvUA8peHuIA3%2FUUoFLVUQagRCwyILuDnhjBQ0a9nAvMLl1HNAnJb1BrvcTjS5JSL37vk8tO2rWlZ1UC9IHAh6H58Ky78jLyTwmPFTFHGwCrIg0nZs7Sj%2FA1%2B7O97bGs4oZtW5t4lcYZN%2B%2BjHgGHFsgF7P4UMx%2FtF6pPbogHy8xbByRQu418D1P3vUrZatEyFW3Th&X-Amz-Signature=7307a14377994b97f7d3d45952a3959bbe680646b74b575f37267cc8c081fdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOTTFZS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCD99RWAKUPzVIl%2Fv1%2B25O4J9wVsdb9OMVVeCewOOeZpQIhAN9EGgrkDygiMyPosEIMWBP%2FB0Qb%2FXsxk50vpKCbPRl8KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyw3O3MXsUSGNlNGwq3AMoW3YbO1Hg22UMorGqGsVaJINoPYuovff8LVFirDgpOb%2BQxB%2BYoXeQl06jIpW%2Fv2qZXW0z%2FTuHhZ257tuokyWqIhfy%2B%2BkIMsI%2BAVD3XhWvw3tYDIyoaQ0hq2DV%2BU6o81nwyY9%2FbZWCi78HiGjExNGB9o2RPaetzFLM2BFr8TI6MOn%2BzPwrsoULJBbpn03zdLek25MLm89%2F5IcsP7YNZp83tWHlT3z8qndBQ2l%2Bx0BS7xZOmQf6vwxdq5lscaqHJcAJeHo7mAve5%2BKzVqpkRxgdXB4YsZ9OZdGLS0AwM881sDjm2k6eexHFcr4Iju8E2at9swXPQ4S3rxZavQO0fDX%2ByTBDZfu0YNkORrhaIuoQSoQpuAZk8xjW2wV7lrGWRVh%2F7o5uifkjilE4%2Bh8HFMzADAag%2FTQ7XuBB5pRC30c6ypziZo9hn9LEwJLCtTKHPH8JC5odpn4twc%2B8eOzqURdz1DnSx2HgGdD2IXtoL2tBJ%2B%2Bv%2Fc%2FEsiEW4RvOs3mKf2x28jPo3ZI06lSbGZcDkx0hXsXPyby6fvE5pJ2%2B%2Bi44Z2GnvRkEexkWb0cxfbKQNFJjSkWunZSRQ2VmTZN9mOpOf1PFZXorCg0%2FyKVwZLh%2FFMuQsuyd2%2BmKBxVbejCA3%2FDBBjqkAatoyLeEl9S6tL4GUi3vXWWZtXOAP2GeTXuwWvzjbM4KWIOxJxIlM%2BIixCr%2B8ppRn%2Bpu5pysgkptUseoNWj%2FuVwNiLr%2F%2BCIQYASXoSubb%2BLYydK%2Bt6r9sD4Iut2eBIrvYsji0FgHmxtKwasTV%2FHHc7tsIVFwRl80KoJUT4CGtCyiLV4yEnVuJBQOCxyS3ULY3VnJhGbCaw7EhMM53vLM9pD0Q5qn&X-Amz-Signature=06d2a5ff22d1e90bdb37fce2557cc95861051af75874496b34cf9d7da181385f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626OO75GY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBGEzt1XYRywhZWhq9UfoRNPdIhGZxa15uY2Tlrij2uzAiA789XUuAZRPV%2BGGAW5nmk2L%2F4CKnbQPE0wKdQgW%2FbqySqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM452NdLtBV2jZmXvPKtwDK2BfFHKu1czxh5XOO6rxPaTna0sDnN8HeYcvjZvvNYDVqThsK%2BKPvtBd%2FYaIobq9UXBFwd%2FpBajrZI%2FF8D%2FGUpexw3Lv9F17aK7wZyqqmDRxDLxEh15vQMat%2FS3x%2B3TYcKOAXlGsxtKyWaCDE4DurcIOsMTJSvrIx6rjw0loy0mMgUSQm33lhxLJFaKRuxlb2hyV8AACJvn5EMBhCrIoUPyTyV93oZuYs82aFLWOUQfIZTmV49lfIYAuCqkKeZ1N8Bn2iv36XvkIy3u2Jhysa%2BBeDh1wp8bLJROXLB8GkC9yyHTAjzOhnMiahaYw564h8gLe5r1OhHy91bCj%2FXNfgcGVOPpiHTSTrUlk480iFEsMmFixxw9C0uEi9NTcrcwXlf8HLlqX2BMez7jgf9pZfVZrlcvGRbSuxImRNbAXqx%2FRTRXSK%2F9Fh6rLyoLOOAfEPuedLqobl3UKR%2FFdyEZf3vMiEJ%2FvB3yhGdor5peQ7qNivmzX8VNOeBA3mmsKUg04OiqyzMgUZ7G21aSkCgKVbzkw6iAIRjxoNdYKtsELG2Xo6hV8lQfQGogwuIqrSS9x4qucwnSDBk%2F1vwb0yZBo6%2B8hgu70u9WRfBJLMXlMxd4WWThwU558%2Bn5BEycwvf%2FwwQY6pgHWTwKraJpVkCpWvtaLcIABpVarwTSfF7YKaTv0clBECusNherytC2Q3XLMTPNf72Z%2FHxg2%2BO5I%2Fp8q8xaMItoulkLKpzNW%2BoMc2OXVYetBwcc7PI%2Bfi9LJ3H5pCOz6SSTHXdUp01QL%2BkYL5KROhYjeIEWivULM67BgtUE30lDE%2BzXbgFxyDSyqP7tdnmVXjMk6zMCJJWuws9NLTxWsOX0XFXWlYaqX&X-Amz-Signature=7c0b555cd18b8be0bbd857d9b4da155e7938ac35c901619da12d99b02d9cdb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW3VSBD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDSh5aRHXokdSPZdo%2F6hPwTECNfCHyL6StxlO4yZzMJlAiB%2BOfq8PQTkbCN%2FGYTLs1qy7jlrds4r04pNEBQyioXSYiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeI%2BndIIx1cB05mrDKtwDnhYZYb4EstsVbvKX%2BeFZb3SiDC2xMHrdjLNrC8uJGX50tANGZJErJ2xFvT8c%2B50w%2FGGQ2pXnERocdXZGnrpN9EwoTWxzjRJpV1%2F74I73dDUWTlP%2FFc9FGhq8fCDUgJLUQi6bbRZ%2F%2FfTOKkaMuLaonhld6PnzAcpXyK5vMxy7zZKF3Uk598pazEFBlexMXN0le9ODWF9Zb9j4OuoN2Gun788QqX9CmUYs0r5zyO%2Bmy63BlKuPBaiIKFR7%2BC6aEI34NcOjiHANZix2ofQ28AqlZ7U8fWeuAt7qnIPgmFkuIJYDZIOC%2FHeIwMEyd3CwUjRTDsyWvdhKTOfrFwP%2B7GKVQs74aE6QQs6vh45tSmJe0fkHCIQcWsYCRdS6jf18Mbv7Nl%2BYFSyCjl4D2UDKhTeQAx2Mo6f%2FBNy2Nq3GpfUdJuYiYb8c8dN1BGUV4sFqLx7704meSSNjlCTEltcma4imUqjs1bNWmJS99BhvQXpufUWFFbP6DgPL2cKzfs7cvmAOO52PJTaOq3ysnM%2BpymTrEYf9V2UySoCshY2kZCyS1Kn78%2ByTG0hSXiGXG40GzWemWsjzE9T6Y1weQ69jhvA7RNIUMNLEvLSnYmRdOZQbCWf9lMwoTDezfUo%2FldAw4t%2FwwQY6pgGtpwl8lm9vdJpYQxyr%2BppgyLOmRvUA8peHuIA3%2FUUoFLVUQagRCwyILuDnhjBQ0a9nAvMLl1HNAnJb1BrvcTjS5JSL37vk8tO2rWlZ1UC9IHAh6H58Ky78jLyTwmPFTFHGwCrIg0nZs7Sj%2FA1%2B7O97bGs4oZtW5t4lcYZN%2B%2BjHgGHFsgF7P4UMx%2FtF6pPbogHy8xbByRQu418D1P3vUrZatEyFW3Th&X-Amz-Signature=b68ca58e5d446263368dc981d5058718f425829ad428c0927c17a9005b098edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
