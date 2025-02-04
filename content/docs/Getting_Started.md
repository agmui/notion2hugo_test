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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMOGLXNB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCkxAMarPWJaHV5jcgoqvoqjGOdbhG4%2BM%2FRSk0oP2OIeQIgOchgn4zqxuxCGcR4DzWTVaLBtKqpWVkS1zoqrWDRDl0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDP5p%2BAdj3%2Fv1NXAIVSrcA%2F0Uj918vrBHPn5jbXPlHoA3hIukAHga8gmM14EV6F31%2BuOQYm90Xe6gjkfaG%2F4XrJ5gqJSsu49m5IvYT4j0OZS2WHFl8AyOPUb1jqpjmQt%2BuV2QGntuF%2BlfuXN7j7w8j6FbfWFlAhm3oGER8EjzuYiU8CzYjm4Hy8riXN0lOPCPgoyUYzhtHXwRUeRRghQqSKPxyw1UQYRZXRe41ysighgSopMwCrKAKEx9WRtRrxN1WPcju464dsGZDw5rG5pjnVh9loVGIL0WIMfNwa%2BoOgUDeUrmn9lksTiQpLDMJszkyL9vqzEmhn2h36fXZ%2F8zNW5RTVTMB8ENeVI7kj86%2BToZypbGuPirACeWqeSvd2JlL10qTx5R%2F2qdVCftlpd3eofqU3JqOWOPx0NNE4AZkzJaOoODbJgz0SoOCZ5kNB1owQlNsbxpHk4Dz1e9L3yHiRnwCmuBeh2xl9SzY%2BfM%2FtW3sKjoYrduCuonvxBdCovRZAVJuQLHifuUvF7StsaWxc%2B4%2BFJ9hOUGvCs9JXc%2F6hdCU42EG%2F7KzgxNMsOQFVKPHeTXijDQ7e8d%2F%2BaaUA4PPP0Y2XGWrnm3A3iEYz8m2FsXSGWwih1ke3tkTIWoxAv%2B9h39yZkKkYX80R0dMJDqhb0GOqUBRgFYGvsUf5CJ6a10lItpP3oP4Gs45XHTmxDk7TJiiK96i1QlvyLFg6BU5Ae1yRXtAytQVr61P9fQ8hUpeX2snHoOwGgJPQjm2eOYp39iBBFfoGljHq%2Fi%2F69g42PwfioBI%2B9m2lGcVn8D4DVZ%2FsYly9WYsJ%2Bn8AMm%2FJO93TVd9PlEC9CnxDn5ATSyaufeqxOIsM1SR204qC%2FQ0O7KxEqyOSWpQBz9&X-Amz-Signature=b70f9e3218c4c0b6c2b2489a983d69eb258e1940bd5d7b249ed9c286ec3e5531&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMOGLXNB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCkxAMarPWJaHV5jcgoqvoqjGOdbhG4%2BM%2FRSk0oP2OIeQIgOchgn4zqxuxCGcR4DzWTVaLBtKqpWVkS1zoqrWDRDl0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDP5p%2BAdj3%2Fv1NXAIVSrcA%2F0Uj918vrBHPn5jbXPlHoA3hIukAHga8gmM14EV6F31%2BuOQYm90Xe6gjkfaG%2F4XrJ5gqJSsu49m5IvYT4j0OZS2WHFl8AyOPUb1jqpjmQt%2BuV2QGntuF%2BlfuXN7j7w8j6FbfWFlAhm3oGER8EjzuYiU8CzYjm4Hy8riXN0lOPCPgoyUYzhtHXwRUeRRghQqSKPxyw1UQYRZXRe41ysighgSopMwCrKAKEx9WRtRrxN1WPcju464dsGZDw5rG5pjnVh9loVGIL0WIMfNwa%2BoOgUDeUrmn9lksTiQpLDMJszkyL9vqzEmhn2h36fXZ%2F8zNW5RTVTMB8ENeVI7kj86%2BToZypbGuPirACeWqeSvd2JlL10qTx5R%2F2qdVCftlpd3eofqU3JqOWOPx0NNE4AZkzJaOoODbJgz0SoOCZ5kNB1owQlNsbxpHk4Dz1e9L3yHiRnwCmuBeh2xl9SzY%2BfM%2FtW3sKjoYrduCuonvxBdCovRZAVJuQLHifuUvF7StsaWxc%2B4%2BFJ9hOUGvCs9JXc%2F6hdCU42EG%2F7KzgxNMsOQFVKPHeTXijDQ7e8d%2F%2BaaUA4PPP0Y2XGWrnm3A3iEYz8m2FsXSGWwih1ke3tkTIWoxAv%2B9h39yZkKkYX80R0dMJDqhb0GOqUBRgFYGvsUf5CJ6a10lItpP3oP4Gs45XHTmxDk7TJiiK96i1QlvyLFg6BU5Ae1yRXtAytQVr61P9fQ8hUpeX2snHoOwGgJPQjm2eOYp39iBBFfoGljHq%2Fi%2F69g42PwfioBI%2B9m2lGcVn8D4DVZ%2FsYly9WYsJ%2Bn8AMm%2FJO93TVd9PlEC9CnxDn5ATSyaufeqxOIsM1SR204qC%2FQ0O7KxEqyOSWpQBz9&X-Amz-Signature=a144eca75c39eddf77f5b6fe553e8cc9f847062d58cb03f59bc49c6c32c98624&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634USEEX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDjrFGucVKemrXTtmG4kSJE%2BnSiuXxko8jnConIXrCo8gIhAKvGigAI2MBdqKB98e3u5%2Fj3TNo3VNYlptagwbcnQVAQKv8DCCMQABoMNjM3NDIzMTgzODA1IgzYDNz%2FiyRbDGXXkhYq3APZHwAx1NfRBJzKfsWG%2FeGbzmr%2Bfq2%2BbZXQQcuYy1YXPws1QTbSQdLTAVDZXN5a%2Bh%2F61tzABXWrXPMfZnH6%2FEDmHyCHEhRpxHGnpo00Xsvu9MNIapTjzmcXR%2B7AtakNX1Yf9a7nVEKkEXzgAS%2BItoY5mzk8uvaavWKU5nYnK1cFOV3G3QYea0R88IzAzR2lr9gxHsb%2Fo4PUeZeXzwg8BLM%2BXEHreC63QjEa7lN6lpTnFBp1WpJG3QfF48%2BTQR9fjAbLmuw4PPtBZH9ZnYMzFU29jHJYfHnfjHOx3sVeL%2FcuV2LLNNFU4S1zbscVRcS9pS%2F7otoMZepxlS0bNzq4VpLywrdMNvf4913KrEGSckN8aPNSxJCBvAoym%2FomlKzUlyQwLbw72aj1mGHMqrAeSBL63Efd8mZe9MNgxizLCpT6TGt0lKXZEmzXjJhk5sypay2YN1AcrINhJ7N4X0JYT1D3cYcOonRMPE8eJltCpqkVImxSWP1HcyCriYoazNkPETpGTm2e4WoDmd2kvQQwjSN6oYxp5W3IE30Hx7759aBF1X9kN%2FbRA4m6Y7jRuor6MnKGOPz%2FhTjewPR%2BW%2BGu%2Bd0qj%2B%2BNTzu%2BdjM6fTTDd6UG5BTuPLedenKQ5sFkkjDB6oW9BjqkAV%2BX1AsEs5o0Knsv0nyzOjyRc76n%2BHpDnlXNXXQ7evs4ZN2L3sP78BdVEk7Pg%2BvuoiEyaN8mhZuxaFw0i%2FS%2BAsj8h%2B0rHoHpaWWdIC0pwboCG9O7rdlKooQOtOVTkqQYeRz7jsBSEbNCAQ1eFNa4kVI6PRuwcSCdoJOk9LsJlk4ZwJrYvciouxDRY3EnKla2M3wtFoGqvRtzC9viBqzBrB%2BVfsGE&X-Amz-Signature=48e52098b18a019c19f55277b8a822b781018c33ecd1602e64c0c7f2159a18de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWT743PH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICAR2q1ysQlUwyRlM5PMwa%2BeoUlM6wAk4%2BQcg4WrzrnkAiA%2B3s%2BZR5qQOGoEqhmfhecHB3xEIPuvx8JtzrQpIdETxCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMg9fqWNDcD3MJJqmGKtwDlxJVhHkzwCcD4kpJpY%2BfJfB9UUrLUbSTyS6GnRV21jK%2BnQfy1FhHV37etGWUXX3bVU2Q2amWQd%2FaUFEERR2MzQvV8N7Bt0CDlhnlmg2EMjkIiQfFRFTxmroQysWZWwpvZ35u0AEryFXu8ftwYx7JRZYalQGNu7uUEXPgSWVN6uWuj2Jl6JqIPSETLfmKwdnlSEUJ9Ka%2BvHyr%2Fauk8u0WUWNgIKCR1qsZXVU8HpPcPmlD4AgjEtqh%2FdAyKAWWbEVKiI9RSCGQnBN0IXn2oQ7Ja9ZpvUq1Tlz8JG8J52U%2Br9YZ34ORsd5QqiaOL5lxzL%2B%2BWHOjxKMSrNcKfvawY4Rzgkf68Jw%2FWaYvopT0dvUTo%2Bcs7eToKAYOvLz9C5zjIVJpW3d65XSZ3HUJD%2Flc99vW1pQAvyX%2FBDIbrO9MCInskiivEjdTnFZZwBqQrc5mp2Imu%2BQtbNxBYm%2BB%2BTaUpytqLXDPByB7MwksBstJpMHCluDfzzOuqpCFNNBuN4Y8dCHiBukc5Mp0G7lKbGLUAu63tChtpy0duZV%2FlnV%2F9XcqXqfCsPjBULBFLKiggzaLDjpdha8pbW2quoNej7b0W9pBwPCHZ%2BgfOhoCCIU1ouU9g7n1dEWgAaX7l1KeopEwxeqFvQY6pgGRtBJVtjczPLCfmFo9FsgGT7yDcxZKpfAZWdbufCAP%2Brs3lGGTFiuplEd12AsBeFG15bh4UXpP3winX2g1V4YaO4s0NnEvKy1V4aPCQ1VbjNxk%2BZD3Od3Z%2FlCl%2F1lXKLNlTQEzeQ6hfbW17fRh3WMEXq15EoGO7Di4u2qb2EDVL4IB9Prg4xiRg5oCI1yH1IUpYtmyhgsOcIM10WkbvsOBcwbeT%2FB8&X-Amz-Signature=b3221389d9b12d13d6d9fa18e738dd47c3bb8fa1b4f1c5f2ba64ccbf01b90d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMOGLXNB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCkxAMarPWJaHV5jcgoqvoqjGOdbhG4%2BM%2FRSk0oP2OIeQIgOchgn4zqxuxCGcR4DzWTVaLBtKqpWVkS1zoqrWDRDl0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDP5p%2BAdj3%2Fv1NXAIVSrcA%2F0Uj918vrBHPn5jbXPlHoA3hIukAHga8gmM14EV6F31%2BuOQYm90Xe6gjkfaG%2F4XrJ5gqJSsu49m5IvYT4j0OZS2WHFl8AyOPUb1jqpjmQt%2BuV2QGntuF%2BlfuXN7j7w8j6FbfWFlAhm3oGER8EjzuYiU8CzYjm4Hy8riXN0lOPCPgoyUYzhtHXwRUeRRghQqSKPxyw1UQYRZXRe41ysighgSopMwCrKAKEx9WRtRrxN1WPcju464dsGZDw5rG5pjnVh9loVGIL0WIMfNwa%2BoOgUDeUrmn9lksTiQpLDMJszkyL9vqzEmhn2h36fXZ%2F8zNW5RTVTMB8ENeVI7kj86%2BToZypbGuPirACeWqeSvd2JlL10qTx5R%2F2qdVCftlpd3eofqU3JqOWOPx0NNE4AZkzJaOoODbJgz0SoOCZ5kNB1owQlNsbxpHk4Dz1e9L3yHiRnwCmuBeh2xl9SzY%2BfM%2FtW3sKjoYrduCuonvxBdCovRZAVJuQLHifuUvF7StsaWxc%2B4%2BFJ9hOUGvCs9JXc%2F6hdCU42EG%2F7KzgxNMsOQFVKPHeTXijDQ7e8d%2F%2BaaUA4PPP0Y2XGWrnm3A3iEYz8m2FsXSGWwih1ke3tkTIWoxAv%2B9h39yZkKkYX80R0dMJDqhb0GOqUBRgFYGvsUf5CJ6a10lItpP3oP4Gs45XHTmxDk7TJiiK96i1QlvyLFg6BU5Ae1yRXtAytQVr61P9fQ8hUpeX2snHoOwGgJPQjm2eOYp39iBBFfoGljHq%2Fi%2F69g42PwfioBI%2B9m2lGcVn8D4DVZ%2FsYly9WYsJ%2Bn8AMm%2FJO93TVd9PlEC9CnxDn5ATSyaufeqxOIsM1SR204qC%2FQ0O7KxEqyOSWpQBz9&X-Amz-Signature=b26608599deaeeddb669c859f069b206c4389e6b23168e6261cf200704be0933&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
