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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECKRDZ6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDM4TcEf9xAEnxIED8ae79%2BSsdEFVJITrcPWyBj%2FEtLxAIgTLppAQPptbZ3YvUddOva9xQ6KPIS71WbHVb6drOK%2B7gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNpiGkgNVrn3Xv3jvCrcA7ytr%2Ba4VuS55Sn75yS4%2FlDHN9%2Bjz9l4pduTmVySRuAvp66Rtv41OCWOayGE83yMnZ2J5zRvkjjzZJMTDoQVt2llA5BPJF6TPkkO6DgTs1SKylw%2B%2Bnnrvgh9%2F9d6vflMy9HsaKST1to2kgSKtlMfFWX98yhhIaiMu%2FAMhzm7dzUIqBnyoAHqVAabMW92WFnYGh9DmOfTIkkxwP%2BgwIhHZ9dIhXO9IjfZ7xNq6%2BEkbmBvgGZrhetHij2AC4t6a52y%2Bn%2FFRsw0RHnbx99PVirHthU%2B3M1wnIOVlIvfi1RxaZnG9h%2F4K45L6URSHxZg81cEK1iCJcIkeXutHmVI2didMw54emgxgRP2g76x2iqMmxBQPGgzodA2QVhJDYShP3fTN5p7kc0FnVmeYxNKZIALHwpBGLeTIatM9v0pH46QkdU8A8P8vayZFs6c0qfQBX5K9CH1u6vX2xS7f2LpBcEZBXix9h3VhchYFgALa3ujM9%2FSHB69qXH%2FiMJx2o801zLBdeR0hLavNtkeKs0qa%2Fu6MXUIGbeeTd2Jyltp8lAxrBZK26SWomEwFYmdYVpuySIHkDvZ%2FcMQ6zHdcmlNkatqPXctboa8bT4%2BSEcM3FsgyUyIfAWdJhVKNAhHIJTQMMTXisQGOqUBzr%2B6tyNjvqAnhXfaZem4I6uv844G01bEgpQ86wxaiPSwTjhuuqeNXL9wMtscKrAP1gfQrZkiJAkIM8l2HvEqzSqheubJqBQJoBkqkSf6qsU6rhehU7hdQBGgk%2BkToFzFZspYFJNMyjLOkj2YI0l7xCFreIZNO%2F%2FjNtOjje4zdHZgAeaTTarViwox6T9i5UDRbuUF%2FaKsEndWYJqmpyHkHlmKVBpd&X-Amz-Signature=13ecee65c71a841cf35305addecc4975183a144bcf0f7833035f158e9f3c2e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECKRDZ6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDM4TcEf9xAEnxIED8ae79%2BSsdEFVJITrcPWyBj%2FEtLxAIgTLppAQPptbZ3YvUddOva9xQ6KPIS71WbHVb6drOK%2B7gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNpiGkgNVrn3Xv3jvCrcA7ytr%2Ba4VuS55Sn75yS4%2FlDHN9%2Bjz9l4pduTmVySRuAvp66Rtv41OCWOayGE83yMnZ2J5zRvkjjzZJMTDoQVt2llA5BPJF6TPkkO6DgTs1SKylw%2B%2Bnnrvgh9%2F9d6vflMy9HsaKST1to2kgSKtlMfFWX98yhhIaiMu%2FAMhzm7dzUIqBnyoAHqVAabMW92WFnYGh9DmOfTIkkxwP%2BgwIhHZ9dIhXO9IjfZ7xNq6%2BEkbmBvgGZrhetHij2AC4t6a52y%2Bn%2FFRsw0RHnbx99PVirHthU%2B3M1wnIOVlIvfi1RxaZnG9h%2F4K45L6URSHxZg81cEK1iCJcIkeXutHmVI2didMw54emgxgRP2g76x2iqMmxBQPGgzodA2QVhJDYShP3fTN5p7kc0FnVmeYxNKZIALHwpBGLeTIatM9v0pH46QkdU8A8P8vayZFs6c0qfQBX5K9CH1u6vX2xS7f2LpBcEZBXix9h3VhchYFgALa3ujM9%2FSHB69qXH%2FiMJx2o801zLBdeR0hLavNtkeKs0qa%2Fu6MXUIGbeeTd2Jyltp8lAxrBZK26SWomEwFYmdYVpuySIHkDvZ%2FcMQ6zHdcmlNkatqPXctboa8bT4%2BSEcM3FsgyUyIfAWdJhVKNAhHIJTQMMTXisQGOqUBzr%2B6tyNjvqAnhXfaZem4I6uv844G01bEgpQ86wxaiPSwTjhuuqeNXL9wMtscKrAP1gfQrZkiJAkIM8l2HvEqzSqheubJqBQJoBkqkSf6qsU6rhehU7hdQBGgk%2BkToFzFZspYFJNMyjLOkj2YI0l7xCFreIZNO%2F%2FjNtOjje4zdHZgAeaTTarViwox6T9i5UDRbuUF%2FaKsEndWYJqmpyHkHlmKVBpd&X-Amz-Signature=aa56b96b7ab6d43f43ce1c06f1d9003f30263cfecb20a83445a5326a48538539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECKRDZ6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDM4TcEf9xAEnxIED8ae79%2BSsdEFVJITrcPWyBj%2FEtLxAIgTLppAQPptbZ3YvUddOva9xQ6KPIS71WbHVb6drOK%2B7gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNpiGkgNVrn3Xv3jvCrcA7ytr%2Ba4VuS55Sn75yS4%2FlDHN9%2Bjz9l4pduTmVySRuAvp66Rtv41OCWOayGE83yMnZ2J5zRvkjjzZJMTDoQVt2llA5BPJF6TPkkO6DgTs1SKylw%2B%2Bnnrvgh9%2F9d6vflMy9HsaKST1to2kgSKtlMfFWX98yhhIaiMu%2FAMhzm7dzUIqBnyoAHqVAabMW92WFnYGh9DmOfTIkkxwP%2BgwIhHZ9dIhXO9IjfZ7xNq6%2BEkbmBvgGZrhetHij2AC4t6a52y%2Bn%2FFRsw0RHnbx99PVirHthU%2B3M1wnIOVlIvfi1RxaZnG9h%2F4K45L6URSHxZg81cEK1iCJcIkeXutHmVI2didMw54emgxgRP2g76x2iqMmxBQPGgzodA2QVhJDYShP3fTN5p7kc0FnVmeYxNKZIALHwpBGLeTIatM9v0pH46QkdU8A8P8vayZFs6c0qfQBX5K9CH1u6vX2xS7f2LpBcEZBXix9h3VhchYFgALa3ujM9%2FSHB69qXH%2FiMJx2o801zLBdeR0hLavNtkeKs0qa%2Fu6MXUIGbeeTd2Jyltp8lAxrBZK26SWomEwFYmdYVpuySIHkDvZ%2FcMQ6zHdcmlNkatqPXctboa8bT4%2BSEcM3FsgyUyIfAWdJhVKNAhHIJTQMMTXisQGOqUBzr%2B6tyNjvqAnhXfaZem4I6uv844G01bEgpQ86wxaiPSwTjhuuqeNXL9wMtscKrAP1gfQrZkiJAkIM8l2HvEqzSqheubJqBQJoBkqkSf6qsU6rhehU7hdQBGgk%2BkToFzFZspYFJNMyjLOkj2YI0l7xCFreIZNO%2F%2FjNtOjje4zdHZgAeaTTarViwox6T9i5UDRbuUF%2FaKsEndWYJqmpyHkHlmKVBpd&X-Amz-Signature=72e42f28c3bc5030581c16d5c0985fc43f39ab4f838133913e8ef114ca84c082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUATZJVR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICBNZpR54tOKl1qCRSjti49I0%2FxvE58g4bJEIm0mMS6SAiEA5k8H7VCYa05KVN2bhRhYS5uHr3lAuW2Bo%2FGZOpoA6uIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMCFBDbf9%2B2lwnQ%2B9yrcA1E2O3JLJEjbXFOhEAWp3LBNjtdEspL5MFBdSlCgJ1Nwsss5GyRHg2Twv%2BLH9NEDtFc3mvTh9Vp%2FUI4Exi%2FieFrxodXetRRji8r8ei2o7twBMZbzW3E8dSwb7Yjk4LoTlWldFw248q5gq%2BmGtym1Mu0kaTRBxMEbf9dkO2LtGxfndRWjibf1i7zsGLFD9woHBfeIKXt1E3n5FGbsBrpH0O0e51CyBfd6SqPT1uj%2BODvf0DoZM9mFGt%2FU2fwXre7ou9Gp0R8LQ%2BueHxlrzFi2c2slHiYZXoXv8je9Fru%2F0vjhB8szy8XpYZJS4McyLYU0YcqKcRZfIgMmypSgn5eTt0xpHL7lAYv2ZU6cxuD6pw5lJ3c6BtwsjXN3MWJIAaj9xP7QUG%2FX%2FK4swOgEQq%2BjcmSVk196ZntbPF1V6JCJV5oQc%2FqiqdkEE8TNZol1a4lY9DluUC5zbMiBQG2ZB8m63xJmxsv3v6KuSATQ2TM5sEBl5kvNOP6rn2HPTeKTkM33nwpd9Y3xKr8RUWt7Fw0TgL7OqFBHpEva0M3RM1muvpQuV%2Buyg22XXkiqh7uIxhph2qTtMnWZHfk3i4YH9WukQqMD1DEDW5A4l8TrmNzLCkbgitx2PDQyATK4QLI%2BMMPXisQGOqUBEK1Qwih1oSa0yiVEjTnyv7tzKaxzAZeTHastgF%2BHMsj17Ld%2FfLrY0txElF7JCw0ExmCqh%2F19TubF5Gywucjild9Xwi1p%2FqSwElYRqnuDXBvcJIxTD34P3sfooWDZXlXillttPYX%2BNYocAqDLdQlifYHvbQdCyUqmVCdDZEdfyQeajszocg5gxbc38MLXjnr4b%2FiKQOtf%2FdcoapCS1cXfZCf62Ekw&X-Amz-Signature=f0c6748532e6290909e326af6003944be5a3ad6b12641d6a5e721f29ee07062d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XIHWVKU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDvztfq0a%2FKYKb7p9rI7246lWgn0W%2FrUOOm1Osp5xvx7wIhAJPVfLX1otZpHN%2FV9HIlPrH50ap1WicqddxaAgpTlb2EKv8DCDcQABoMNjM3NDIzMTgzODA1IgyhnAq%2FeUF70trEHK8q3AMBC4k%2FC%2BDfjDhpOnBa6hmSInu40Clp2kIf0z1somNN1Mhkmh0d%2BoK%2FjSLPRxpZ%2FgZ7u9y6%2FIYA2UKZg%2B7D499eP2QJulDFgAo84xsGwLgQC%2Bt8bvHE1MkkEosZByp3Jh2WVFaAltpELFd%2F5zSi7okIl9yNdeNdis1dgsEgfVraxzRs3ImCjKML6Pv%2FkSSX3RFx2ul6Uo%2FAndZ1L0RGEniBLDUjyH2qQk%2BoYLnL9GaR8udYnrah%2Fos8%2BaJ3QjM1Az%2FY1ek%2F4UxvQlw%2Fab6yrNSUtIou%2BnX11g2VRwabcuOj29T5GqJxuIZkqTYmg27NHt%2BVxNbMXFyaF2URweT5lCEeQta1xGPAaOZEWUkfXQj9EQeIBJEXSkovLxgGIiNyjhayJTy6KebjEJb0f9l8ko0rEbMHOAerAjDoiLWUD4As%2Bl8gheZekh4NQjDlk%2FjW6NSOHdpCObQYRnOr%2FBK2iCqU1kr%2BjZmzJzS50BzLEkdeWLqz2dpN6djvk2Zm39aOvQnyMfDgZEHI%2F674qbYR7bUvkSyU7rg%2ByywBHFEYqAhiI%2F6U65z22XHbXbxjF24YFov63L2V9tT8Vb844lEn9gX4H2px6fqYimcooiMxRfXscICdbpGvrSfhmJIX8DDd14rEBjqkAfDWu5vPs%2BKz96erwVYBnQv%2FtFZXRx3n90wbrDhIYlSgMM7u5ArsyB%2FhSA0c7ukoqxxUBdpqllgmLO50QmbqGPQYmk%2B8Yy4y5jv0z359EwS3uCeVsm2vaDXsAFaHA1fLZb%2FIH2k2JMBflFcU84mFycj59AU6d1ZwTI%2BPNSOVIUYw%2Ftwim9XmdEkZObcLUrMmBl6pMwBVdB1NfJR4CeXPZKO3CLCg&X-Amz-Signature=b9ea9e1964e82fb4957a79e6406c30079537f9bff0f9132305ef957d7712462f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECKRDZ6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDM4TcEf9xAEnxIED8ae79%2BSsdEFVJITrcPWyBj%2FEtLxAIgTLppAQPptbZ3YvUddOva9xQ6KPIS71WbHVb6drOK%2B7gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNpiGkgNVrn3Xv3jvCrcA7ytr%2Ba4VuS55Sn75yS4%2FlDHN9%2Bjz9l4pduTmVySRuAvp66Rtv41OCWOayGE83yMnZ2J5zRvkjjzZJMTDoQVt2llA5BPJF6TPkkO6DgTs1SKylw%2B%2Bnnrvgh9%2F9d6vflMy9HsaKST1to2kgSKtlMfFWX98yhhIaiMu%2FAMhzm7dzUIqBnyoAHqVAabMW92WFnYGh9DmOfTIkkxwP%2BgwIhHZ9dIhXO9IjfZ7xNq6%2BEkbmBvgGZrhetHij2AC4t6a52y%2Bn%2FFRsw0RHnbx99PVirHthU%2B3M1wnIOVlIvfi1RxaZnG9h%2F4K45L6URSHxZg81cEK1iCJcIkeXutHmVI2didMw54emgxgRP2g76x2iqMmxBQPGgzodA2QVhJDYShP3fTN5p7kc0FnVmeYxNKZIALHwpBGLeTIatM9v0pH46QkdU8A8P8vayZFs6c0qfQBX5K9CH1u6vX2xS7f2LpBcEZBXix9h3VhchYFgALa3ujM9%2FSHB69qXH%2FiMJx2o801zLBdeR0hLavNtkeKs0qa%2Fu6MXUIGbeeTd2Jyltp8lAxrBZK26SWomEwFYmdYVpuySIHkDvZ%2FcMQ6zHdcmlNkatqPXctboa8bT4%2BSEcM3FsgyUyIfAWdJhVKNAhHIJTQMMTXisQGOqUBzr%2B6tyNjvqAnhXfaZem4I6uv844G01bEgpQ86wxaiPSwTjhuuqeNXL9wMtscKrAP1gfQrZkiJAkIM8l2HvEqzSqheubJqBQJoBkqkSf6qsU6rhehU7hdQBGgk%2BkToFzFZspYFJNMyjLOkj2YI0l7xCFreIZNO%2F%2FjNtOjje4zdHZgAeaTTarViwox6T9i5UDRbuUF%2FaKsEndWYJqmpyHkHlmKVBpd&X-Amz-Signature=0e2434c8c59e40a4c58b35e27722c438727a41a641eea0b35ea1768cca3ef76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
