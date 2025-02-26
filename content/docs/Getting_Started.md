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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVLL4M3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCjcDZm%2Fy1X6ClgXY8tyJJzImhk%2BP0NbupqJIRmReJFcQIgenqYo9KlD49qcnNyz3aQaET%2FLYmuN%2FWjodDv73tvlXIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLdjuowUsw2e%2BUsJrCrcAz3T49RkcXJV84hcsDlZ%2BlTb2HTgdYhW25tBlXJuxyA6ZMFtajZlfJiCQ9vU%2BN9JHPJV%2FyU757WXc3cQKiJdQcaOs3d%2FMw5GPb34dr7w68MD0I86FZQ5tJLYWYn9C30F5OfnEGC4rokPDyccO0cmny33aSX%2BnLqzqKNRU3m%2F9Imkkn26CBSWfKeST%2FFqa7zWn2Azx8oxwNSsEfsOPGZs3yYopDnMrpMYKxmLl0upJyasV6sog7udzPJXeAL3BHNnduPJVMRF0Np8QEtb%2FI8td%2BkTpuJtAPlcAoc75SnkdnRFVirFa7tWxMmlqNI2n%2FM2I1LQAqXTSgnVQG%2BqVnBm8r7bS74UHy4cBCXrQTeWF3e7noDMZE00tfzTTpahSma152W5PyQ2aep%2BcaISxxvf1XzpGTKvDdLkCPafPd7qekKvHVzepKSebw4dZc7afyJtaZDE%2BsiSpONnz3CEWQM%2BUtgO%2FbNaSV4sxDyz%2B5%2BOqim96sHNFRSI5nc4iAX2qaBTL3pOmRlxhuaI%2FgGk2LqYxNVmtvygJvTkELhnbxn1EyPa5QNbrbdtsPsfLf4wT5aAMe1O1LL5q21jhQrl9uO9rjG2Mdp0ET5ybNAp0e1GWiYB%2B25SpRlARVQill71MO2r%2Fb0GOqUBJ4InBJNv%2FX8FgNNQN9%2FROHWnttQtaS84%2BNsPQnfHo6xgg3Q2MfmIyS5ojoEIrYdlB0whE9n2s7hYSQPjmGNyutF9S%2FwQRJCDtTFdOvVE%2BAtG3QX%2FHVa3mlUTpzLECC7Sn7BbrGrSFAhSgZi6He5coL55fWsjyPvIbmc69pd8B3WF1zEQnXXjimetjsrBRrTv%2B7ISTftGdGsuJB9fiOg0gXNYxUXd&X-Amz-Signature=ff99cf2422773d56f323aba3adb7149d0b02d988670f797d6791fa25736aa01c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVLL4M3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCjcDZm%2Fy1X6ClgXY8tyJJzImhk%2BP0NbupqJIRmReJFcQIgenqYo9KlD49qcnNyz3aQaET%2FLYmuN%2FWjodDv73tvlXIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLdjuowUsw2e%2BUsJrCrcAz3T49RkcXJV84hcsDlZ%2BlTb2HTgdYhW25tBlXJuxyA6ZMFtajZlfJiCQ9vU%2BN9JHPJV%2FyU757WXc3cQKiJdQcaOs3d%2FMw5GPb34dr7w68MD0I86FZQ5tJLYWYn9C30F5OfnEGC4rokPDyccO0cmny33aSX%2BnLqzqKNRU3m%2F9Imkkn26CBSWfKeST%2FFqa7zWn2Azx8oxwNSsEfsOPGZs3yYopDnMrpMYKxmLl0upJyasV6sog7udzPJXeAL3BHNnduPJVMRF0Np8QEtb%2FI8td%2BkTpuJtAPlcAoc75SnkdnRFVirFa7tWxMmlqNI2n%2FM2I1LQAqXTSgnVQG%2BqVnBm8r7bS74UHy4cBCXrQTeWF3e7noDMZE00tfzTTpahSma152W5PyQ2aep%2BcaISxxvf1XzpGTKvDdLkCPafPd7qekKvHVzepKSebw4dZc7afyJtaZDE%2BsiSpONnz3CEWQM%2BUtgO%2FbNaSV4sxDyz%2B5%2BOqim96sHNFRSI5nc4iAX2qaBTL3pOmRlxhuaI%2FgGk2LqYxNVmtvygJvTkELhnbxn1EyPa5QNbrbdtsPsfLf4wT5aAMe1O1LL5q21jhQrl9uO9rjG2Mdp0ET5ybNAp0e1GWiYB%2B25SpRlARVQill71MO2r%2Fb0GOqUBJ4InBJNv%2FX8FgNNQN9%2FROHWnttQtaS84%2BNsPQnfHo6xgg3Q2MfmIyS5ojoEIrYdlB0whE9n2s7hYSQPjmGNyutF9S%2FwQRJCDtTFdOvVE%2BAtG3QX%2FHVa3mlUTpzLECC7Sn7BbrGrSFAhSgZi6He5coL55fWsjyPvIbmc69pd8B3WF1zEQnXXjimetjsrBRrTv%2B7ISTftGdGsuJB9fiOg0gXNYxUXd&X-Amz-Signature=8cfe15c3ebb0cf7cc39e9993199746c9c34c0876a1b88bf2f6ff2c00ccaf320a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CQKHAW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDMKwK7COiKlBklJNivA7TBZUsC1TBzI64TmCklTBvBNgIgdxzPKwtLSwobK2n6TF8Nzz0%2FQZO9aecZLTfl84n8Dt4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDODUiio6aA8lFRjoOircA%2F6oykMrXkdxkPW0GuM%2FpEWiQeTOlgpEHg7dXyugzpODPTZEJYTguOaCDq%2FpxVp51q%2FV9FbVMC3tVDJ1Ic%2BztlQxFbNb7DeKdbeguhecqxBFZVBaLhesf0jaUC9w7S43id8b87q%2Ba1OI7e%2B9jYeBzo0f98EL0k%2BZ45EKTie7DFW09ImBu9CdljeiE1yksLK9dT%2Fxkdv50yKzrWmyeAaAYO52u24Tpt94c%2FwbJ99w2TaH%2BfZN6OtpGmPAvHkJKLFb8zYYl4ViVXPEofOodruInm8xEJpShnfKQiNoSqaxWKvhBxaNldHzxtfKNt3w0c6%2FgmmdxN4JaUxnndh%2BKiYDprMZJeAshG5JmdnRawzNjfmyt71jtJDkpQ9%2FHQ5AfYkY4N7KubdoliOUvpu0gQmwlgyRiE7LVI8KFFvmUE%2BrcTkA2tHL36Aku1EoSbdK%2B1N4VifJe0XyAYQYYFe9zXISf86rx4ZaenxbqMYybRNLzjJRPIyMnN6znXPvm0z0Gh0EALvVr9XNbdgncFd6V52bUcacXTLfxp52PdcfRJUEA51edZr3mqc0Hn3zadSoBSHO7XIvAiv1KQeboewNHu6IwlzjX9V5WFycW1S3ypihI7DAkFagYOQBQH7NL61GMOah%2Fb0GOqUBP3ZtDGn4cPPg80IZ1Dr6lRUAhq7iPMhhkgkRIVLqOl%2FJ2Lmkx%2FFe%2FX3Jmt84Ciiljxws24QIJUxGLpm2Lrr5dXTCF4jsVedsNlo3Y4Rc2EcoCQ33teidSMVSpMdTTB3wSpFA70IH8Gkf8LupoGWuCXdBovVrfw9g8zp%2FuenSpMB5bk1wcSZ644GSUlipnjkTuKXgV4AzSUUY5hVhGggb46B4XgU4&X-Amz-Signature=cd054e255def179649b56e94d88c502901e1c592302049baadbaf00a3cae6539&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMZZBUS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDYZkvWnb7FLabbAt2v59JAIPSaXlCsFn2c0jQBNWL5awIhAN5iDbvUhzFcCynXD3Wzo1Nbd%2FnytFGIyO3u8L6CpcofKv8DCGMQABoMNjM3NDIzMTgzODA1Igx6szUiiEX7GE561XIq3AMbnM3bhCW2Z1lx2X0Zrs0qXriQ9CfoUCaclfalzBGH6l9GdwneSKQa8zSDt9QwOgR3DGQgHzCT9quLpugtIn%2BGMluT282x5dcugZAxdNSCsAqC3bWppwIjj%2BgW6NYYKsV6TpS67s8fPv%2FDzyg2eKYkLr9bcpZ2LgCPsb0gt%2FitFWfYLvg39jy8FZNYuxFEVvjJOIFqe53dN2vrY6uJmE8LQdEwPOXQU%2FA4oRg3wJoOIDVQrD%2BTeX6BniB7TArchPvBwWBrr9Zxu3%2FocGwumhm0lD6E0e%2FrURFvWMorStoTVXO9cZyxyTluz0Gx5MnCFVNm3DoXRMif4XlzA%2Bcna6244D9CnqFkJtnrNEw13TI1mzGe920cldppCoReERRcoo6ai72bARRG00pjqfgS4%2BJoNycjGRurfnrXEtCcDMjzDmm8judQMa79njGt4DoidNYWWVloWbVNe6pyBiQx%2BCV9%2Bd6hsPPDjUZGs5IsHkqaB6S3VWnJCb%2BHns9xi2wC%2BYdcVa0C8wY96rMDFEOe7AG7t0UiQh2OhCiO5sn6JfiIMvj04Pf4PH0%2FICvw8MG%2BwOYnPxNX7fXpwS%2B4%2FFoR3uFYOePCkYJr8tZ%2FTBpAoUd0IKLHTQLDvHkb1YMmwDDVrP29BjqkAeBDDfuBoNNlDBY%2BHEpAOkEl2Z9hJarLZiZ21HKqmpmTghpEO1c5OZm%2FuJv7AkruFwpqwXxIqlQyJQT4AQkC9VJTcz6tZ5KIfU3R6oXQZTidRIG6TkSTs1l9vz73ouQQJHi6y41N5%2B4vmEYovZ18LgSXY63HnU81V1VGn3FhiumOqI1GaXnGVgtX79I4%2B7JKqMMDJsKxO4xCUMCtGAhYgQjsFgEs&X-Amz-Signature=663b03e5fc84331f467f2e1f14839608085b486b705e0b9b2f73372e5b203786&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVLL4M3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCjcDZm%2Fy1X6ClgXY8tyJJzImhk%2BP0NbupqJIRmReJFcQIgenqYo9KlD49qcnNyz3aQaET%2FLYmuN%2FWjodDv73tvlXIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLdjuowUsw2e%2BUsJrCrcAz3T49RkcXJV84hcsDlZ%2BlTb2HTgdYhW25tBlXJuxyA6ZMFtajZlfJiCQ9vU%2BN9JHPJV%2FyU757WXc3cQKiJdQcaOs3d%2FMw5GPb34dr7w68MD0I86FZQ5tJLYWYn9C30F5OfnEGC4rokPDyccO0cmny33aSX%2BnLqzqKNRU3m%2F9Imkkn26CBSWfKeST%2FFqa7zWn2Azx8oxwNSsEfsOPGZs3yYopDnMrpMYKxmLl0upJyasV6sog7udzPJXeAL3BHNnduPJVMRF0Np8QEtb%2FI8td%2BkTpuJtAPlcAoc75SnkdnRFVirFa7tWxMmlqNI2n%2FM2I1LQAqXTSgnVQG%2BqVnBm8r7bS74UHy4cBCXrQTeWF3e7noDMZE00tfzTTpahSma152W5PyQ2aep%2BcaISxxvf1XzpGTKvDdLkCPafPd7qekKvHVzepKSebw4dZc7afyJtaZDE%2BsiSpONnz3CEWQM%2BUtgO%2FbNaSV4sxDyz%2B5%2BOqim96sHNFRSI5nc4iAX2qaBTL3pOmRlxhuaI%2FgGk2LqYxNVmtvygJvTkELhnbxn1EyPa5QNbrbdtsPsfLf4wT5aAMe1O1LL5q21jhQrl9uO9rjG2Mdp0ET5ybNAp0e1GWiYB%2B25SpRlARVQill71MO2r%2Fb0GOqUBJ4InBJNv%2FX8FgNNQN9%2FROHWnttQtaS84%2BNsPQnfHo6xgg3Q2MfmIyS5ojoEIrYdlB0whE9n2s7hYSQPjmGNyutF9S%2FwQRJCDtTFdOvVE%2BAtG3QX%2FHVa3mlUTpzLECC7Sn7BbrGrSFAhSgZi6He5coL55fWsjyPvIbmc69pd8B3WF1zEQnXXjimetjsrBRrTv%2B7ISTftGdGsuJB9fiOg0gXNYxUXd&X-Amz-Signature=8237d434bf8c4bf0d4b20f1273e4e99e066ca392af439c328b70a1df4b39f064&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
