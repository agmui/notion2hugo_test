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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VNFVMI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEZ680HO%2Fn4rXHWO9zUS40dpUYbK0rIa%2FbkY%2B658%2Bf1ZAiEAsJjaE4XCz%2FpLT%2F7N6WGRGUlYwrrFv6%2F%2FC9kpvan%2FNmwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDSjO6phvOyCBQWazSrcA9dBm9YR1t9x7hTK4ENzB9sNPMZGUIKaPbcH1644PsTFLL8ByjnMK7h6Y%2BG29RYNdiroEsIcoeaWOuzbIatP6sTTqs7eMHwj7hFeeU1LW2LiYd6T18fUR8agYoFzyZDeFUaHXUP5UzJiT5UkRet2FcbLdWoz5rPHW0Vd6ayuFV6wFHG%2FDZG00sOwYQAKKBO6YIBqoedm89t6wSNdqY3ajsUfQjTxXQNMoLVzDCgcaQzBd73Df8s3zquFmR6kWUe6mhNANnN18lnmLkqsGavYdELAgVbG3%2FsVKFg9qNdQXyDcdvLEgEfRPgfgJEE%2FV9p%2B8c4WctCL8jy%2BR0pL43EK1kbQUtYgamosfKnapING168eYv%2Fmk8gYY8Erk7vD0ZaTmaRFBTRIspwvQzPo8SXDcp7NS%2F3MkTiFY%2FBNRrfUfN%2FxJ3FOBXbylgtD41w6RtSfFrkuWDAKZ0YJhC5LwVdYFkI%2FF%2B%2FG2plygmWcEag5%2FUtehOXu45Ik1ePSIfzJRHt7Rn%2F4jPSEf3iEqgi5cYYAfkCp0lxpG%2F9hNUoXq80x%2FGHvisqIMF3BFKyS05wxnG1mnFuBN1sSICwC6MlWx4R7t3pNppVwMR%2BsCKd%2FzhH2tjO6sU01MS68HAVncXbCMP6xicQGOqUByx4swzT%2FQ78RhmBfCR3x4849Icg4cPxuvP9xOsd0bo7hYCyzuCNoRh0AxB26c%2FtVmjBfhprAvGg5q%2FQ8s2ujyuQZ6gpRGxsFxaHrmEhT5GdUiP8EpVAkQvGerrzlb4rmatgTL2aTcudwiaoZuvitRzwIkkHndaRzqXmzaE%2B2ZQte1np12n0l0RWRr4lwq8OHR6q1K0ZsTk8pRUg0QddqbbWA25nq&X-Amz-Signature=2b50b79ef9e82372973564bec9a825d0ce34e0e51f60a95eb8d522581546c328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VNFVMI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEZ680HO%2Fn4rXHWO9zUS40dpUYbK0rIa%2FbkY%2B658%2Bf1ZAiEAsJjaE4XCz%2FpLT%2F7N6WGRGUlYwrrFv6%2F%2FC9kpvan%2FNmwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDSjO6phvOyCBQWazSrcA9dBm9YR1t9x7hTK4ENzB9sNPMZGUIKaPbcH1644PsTFLL8ByjnMK7h6Y%2BG29RYNdiroEsIcoeaWOuzbIatP6sTTqs7eMHwj7hFeeU1LW2LiYd6T18fUR8agYoFzyZDeFUaHXUP5UzJiT5UkRet2FcbLdWoz5rPHW0Vd6ayuFV6wFHG%2FDZG00sOwYQAKKBO6YIBqoedm89t6wSNdqY3ajsUfQjTxXQNMoLVzDCgcaQzBd73Df8s3zquFmR6kWUe6mhNANnN18lnmLkqsGavYdELAgVbG3%2FsVKFg9qNdQXyDcdvLEgEfRPgfgJEE%2FV9p%2B8c4WctCL8jy%2BR0pL43EK1kbQUtYgamosfKnapING168eYv%2Fmk8gYY8Erk7vD0ZaTmaRFBTRIspwvQzPo8SXDcp7NS%2F3MkTiFY%2FBNRrfUfN%2FxJ3FOBXbylgtD41w6RtSfFrkuWDAKZ0YJhC5LwVdYFkI%2FF%2B%2FG2plygmWcEag5%2FUtehOXu45Ik1ePSIfzJRHt7Rn%2F4jPSEf3iEqgi5cYYAfkCp0lxpG%2F9hNUoXq80x%2FGHvisqIMF3BFKyS05wxnG1mnFuBN1sSICwC6MlWx4R7t3pNppVwMR%2BsCKd%2FzhH2tjO6sU01MS68HAVncXbCMP6xicQGOqUByx4swzT%2FQ78RhmBfCR3x4849Icg4cPxuvP9xOsd0bo7hYCyzuCNoRh0AxB26c%2FtVmjBfhprAvGg5q%2FQ8s2ujyuQZ6gpRGxsFxaHrmEhT5GdUiP8EpVAkQvGerrzlb4rmatgTL2aTcudwiaoZuvitRzwIkkHndaRzqXmzaE%2B2ZQte1np12n0l0RWRr4lwq8OHR6q1K0ZsTk8pRUg0QddqbbWA25nq&X-Amz-Signature=3384e4ee1d423bdc467a1910209c841cf6220a5699cbaa7b919d4e5e591f27b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VNFVMI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEZ680HO%2Fn4rXHWO9zUS40dpUYbK0rIa%2FbkY%2B658%2Bf1ZAiEAsJjaE4XCz%2FpLT%2F7N6WGRGUlYwrrFv6%2F%2FC9kpvan%2FNmwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDSjO6phvOyCBQWazSrcA9dBm9YR1t9x7hTK4ENzB9sNPMZGUIKaPbcH1644PsTFLL8ByjnMK7h6Y%2BG29RYNdiroEsIcoeaWOuzbIatP6sTTqs7eMHwj7hFeeU1LW2LiYd6T18fUR8agYoFzyZDeFUaHXUP5UzJiT5UkRet2FcbLdWoz5rPHW0Vd6ayuFV6wFHG%2FDZG00sOwYQAKKBO6YIBqoedm89t6wSNdqY3ajsUfQjTxXQNMoLVzDCgcaQzBd73Df8s3zquFmR6kWUe6mhNANnN18lnmLkqsGavYdELAgVbG3%2FsVKFg9qNdQXyDcdvLEgEfRPgfgJEE%2FV9p%2B8c4WctCL8jy%2BR0pL43EK1kbQUtYgamosfKnapING168eYv%2Fmk8gYY8Erk7vD0ZaTmaRFBTRIspwvQzPo8SXDcp7NS%2F3MkTiFY%2FBNRrfUfN%2FxJ3FOBXbylgtD41w6RtSfFrkuWDAKZ0YJhC5LwVdYFkI%2FF%2B%2FG2plygmWcEag5%2FUtehOXu45Ik1ePSIfzJRHt7Rn%2F4jPSEf3iEqgi5cYYAfkCp0lxpG%2F9hNUoXq80x%2FGHvisqIMF3BFKyS05wxnG1mnFuBN1sSICwC6MlWx4R7t3pNppVwMR%2BsCKd%2FzhH2tjO6sU01MS68HAVncXbCMP6xicQGOqUByx4swzT%2FQ78RhmBfCR3x4849Icg4cPxuvP9xOsd0bo7hYCyzuCNoRh0AxB26c%2FtVmjBfhprAvGg5q%2FQ8s2ujyuQZ6gpRGxsFxaHrmEhT5GdUiP8EpVAkQvGerrzlb4rmatgTL2aTcudwiaoZuvitRzwIkkHndaRzqXmzaE%2B2ZQte1np12n0l0RWRr4lwq8OHR6q1K0ZsTk8pRUg0QddqbbWA25nq&X-Amz-Signature=77b77eb4d2b973a939e743d8e446a3b786b3f38b2c1a37533a936fe295098a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7P24RET%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHYQW5%2B2%2BNbvO8Af3mbbhlnKwJqcyjGrhdFnspFRUXyaAiEAkH%2Fe8AnO20DOUh0e5%2Bz5CbMzoHFWRTGq3hlC3pv4j2kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNaoaKSKoRJPho0MCCrcA%2B9UkULFaxBouycFX8a9lNPJO%2BtX18brsiI2vpjPg0RInznv36kvYZ0bQeYdAgW%2F8UHDoj2WEDefFoD8PgvNIDrioQUlY4r3eXIRcDja%2F7xmjixNV%2Fhh5Q7V86EnyvwDnL7NlgbTrzt0S6WsV9Q2JSjGu%2BO65t7fu%2FUl3Jdb8AuhUfJszrdrZx2tBktkXqMCzLfEPs8mNwvugBuYcWF5eH5sbEMFR3SV4G7am4FgZ5vHy%2BtBYu5TXtdblTObTkt7ooDAVwHKDl%2BVYRjQYc1%2FQtjuf9bpk8iez7T8DlIbACoG500qjm6UoKQnHEDXH98Oc4JCwNZrBi1GBAX0qpTTzcwA5xFwGYRTYy2LW35kB7eCA91By74AID9k%2BpEqGbgViC%2BT7U5JOBMq1%2F7%2BeX0CO8yo45%2FG9HM%2FlR9PmnhIy1L5EAdkYSRNjbV82Nspk25cu3s0Zl93JL%2B7ALIPhSsEO8pWDmiRHDiaC2dIsahIrC0xYqN881vV8FJTzMx%2FKiO2885Uuwib45x7z4PA2DTZHNJwvLSKT%2B5MwPwhLajkhsXPLU9582jTDv1eFPCpFH9SlI%2F6Lld%2FTtCKSksmfIVXh2xVqg5CuQxDtqM3B46uBr8vqDV18Rdi20xebYP0MPCxicQGOqUBU5TwtCTYic5tQluCXcWsuZONujurwYDsAXixr6PCjcFjTedzvwVxs2cVnoFqCOhrO5hffLa4WOeICHY%2FwFs9m2XkGPadoWPXHytza1bKOGrSxuLUptzyAxnSzwGpSTob8yY%2B2PKpCNIatGn6gvE9UIXAXM%2BoUwwPzYpmFYC81H57IB435PCSskz5ljFKmOno685eaByGfBJz7edVhlQqGPutyLEY&X-Amz-Signature=1166e04b3c03a41aba1359255ec07d5169053dca2d14b4c3fe2b91def3b09d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674O5NYZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDb5%2F6hOdxOMVfJkqjTGVKISuKT%2Fik7a0HiVdJzUcY3hgIhALZ6EjVQSjJaAbEYDsuWelSSoiBG%2FtVDMR4iOo6e7VHGKv8DCDEQABoMNjM3NDIzMTgzODA1IgyhpOr1G6RCsPfcYV0q3ANQCoA%2Fl%2B%2BwzjSrZZb07izafzDpEqplPob%2BKQ5cWAIvdfz9HJJUNAFVdjkXxha8zcaufuCtXNisOH104U2eI0UJP5jvKhVK8wfsVZXyCxWcQhzodUmjIl41iFdXo5BuL4UX5pKBzbY%2F%2BWl68QExl6qPPcCz7EEs%2Br1W5eHr56EB4EXi4tRtH5R7%2Bry7ciW7WENnBL5rKIjq7qlJDcM0TFM5lHx6VXwzW7GmHQkzuywKChYS2Sfy5pVmQ0kIgxWp0IhOMZ4P0x%2BrJjP9KKeXZ2kcHHJHjl7kD0GQGm8%2BeL4TAqxSAlM4t8Am6infuDqZKmo%2BfrrvWFDpV7SnbzpR6hSYEEijU0%2FGKrX647rpP%2BvUoqEqLu5AWtuDlyZHmwSflGfkwjdXrGXHbGMC6f4HomG3X0sgkXFjZYknaraVgRvDxCDzFRBgj89Llt7NcX016RiV%2Br0jF5%2B3gbx%2BKlciEtuIjcLKJ42ozL7oLLbNK935JXoYYTr2vDYWuxAb4a0%2Bh9vSzpfRStYDk2hBY7XM0LAhmw3XGbcc%2Bls6MPB3NpIpS0veoYngU3xuy4irWejB%2FnnBThJbuDYmoYKesc34t8IktMmszQkSHL0cGxw9iBU9ZVVvoFPWYS40%2FtkExzCksYnEBjqkAXNaSlMxtzQAf1ZUzjjJRIY3uQWsPyDl2gRryATnXhg6tNr1uu1D41izMyADuhxIEYbvSkaiPHs0qQh0XgQl31%2FbCHS1HTvOjlnRr%2BjYnz2IOZ6%2FRi%2BKcUVxsZ91%2BE5OaMyWyjYW5xnyNjrhdwoy5%2BhO7rQNXcMXq1u9nKYso7dDD1mYgGkRddDumVzz1GBHgYLl6WPrga7QJHRf1AMi1q5kfWte&X-Amz-Signature=94ed11b1d3dd16aa98b5c344c6ffea541307a371d718dc74f5bba9c625440358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4VNFVMI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEZ680HO%2Fn4rXHWO9zUS40dpUYbK0rIa%2FbkY%2B658%2Bf1ZAiEAsJjaE4XCz%2FpLT%2F7N6WGRGUlYwrrFv6%2F%2FC9kpvan%2FNmwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDSjO6phvOyCBQWazSrcA9dBm9YR1t9x7hTK4ENzB9sNPMZGUIKaPbcH1644PsTFLL8ByjnMK7h6Y%2BG29RYNdiroEsIcoeaWOuzbIatP6sTTqs7eMHwj7hFeeU1LW2LiYd6T18fUR8agYoFzyZDeFUaHXUP5UzJiT5UkRet2FcbLdWoz5rPHW0Vd6ayuFV6wFHG%2FDZG00sOwYQAKKBO6YIBqoedm89t6wSNdqY3ajsUfQjTxXQNMoLVzDCgcaQzBd73Df8s3zquFmR6kWUe6mhNANnN18lnmLkqsGavYdELAgVbG3%2FsVKFg9qNdQXyDcdvLEgEfRPgfgJEE%2FV9p%2B8c4WctCL8jy%2BR0pL43EK1kbQUtYgamosfKnapING168eYv%2Fmk8gYY8Erk7vD0ZaTmaRFBTRIspwvQzPo8SXDcp7NS%2F3MkTiFY%2FBNRrfUfN%2FxJ3FOBXbylgtD41w6RtSfFrkuWDAKZ0YJhC5LwVdYFkI%2FF%2B%2FG2plygmWcEag5%2FUtehOXu45Ik1ePSIfzJRHt7Rn%2F4jPSEf3iEqgi5cYYAfkCp0lxpG%2F9hNUoXq80x%2FGHvisqIMF3BFKyS05wxnG1mnFuBN1sSICwC6MlWx4R7t3pNppVwMR%2BsCKd%2FzhH2tjO6sU01MS68HAVncXbCMP6xicQGOqUByx4swzT%2FQ78RhmBfCR3x4849Icg4cPxuvP9xOsd0bo7hYCyzuCNoRh0AxB26c%2FtVmjBfhprAvGg5q%2FQ8s2ujyuQZ6gpRGxsFxaHrmEhT5GdUiP8EpVAkQvGerrzlb4rmatgTL2aTcudwiaoZuvitRzwIkkHndaRzqXmzaE%2B2ZQte1np12n0l0RWRr4lwq8OHR6q1K0ZsTk8pRUg0QddqbbWA25nq&X-Amz-Signature=f4aa0470ac7c75b5b3f9714a10e44fc8de203b23d7b467f8a7b6d9e426458ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
