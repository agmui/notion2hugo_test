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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXVN6OE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHhaferAaVEeWFl7z5ji11EZu6X8QVwwl%2B4QWdT7LafWAiEA6B9kbQKNOEL5T9yhHsfdlM6kh6WgpvT6%2BlK49YBbj1AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA08aAGKp2gQ0NLRSrcA5APwknNorAALCF%2FcF%2BLkz%2FCjvoNQsi%2BJtS0BBaafoHu7KonvG%2FdYSKFJasOjJtAOO9aEzj9Rwl0qmvgJENiqum2c0pPvmlUR2b6N0jy0DPes%2F8ZFnJcXdmGgzBkcMvldqVheJSYolnW7WYPr7OS2%2BtTF2147bQdEy6l4ogkbG452OxAb44mIsnjCpJWoZPLwthGThQL3Mdsr3IyGwnvdpT5yKFg8W46tgeMd9CSMgeRBovAnzN3oSJltYQuYynQx1mS5hWTUWiYo4wjId56dhMVfy%2FvUa1GCDdZTHS7MwX0rnKJ2RH96W2yySyeuh%2F5DYQF0UGoPEznMJuuv1bEZ2qswXno12KPb6NwCDhbuXE%2BWSZ5Rk9bcfrZf%2FTsZlUmwEBDvm1AMUeXSL1bl1tRXTqm1ONhhNY0zZswQsxeV%2FHwiHJHBVjZCMKYhebILOKNYdM%2FaHWWdWv0zWjtaW8dno2q0nHvzyFgLBmrQsCMlpY2966e%2BYAxm1cEfLtLnnkZ5K5CRnaRaWmiaeDj1frR640uZ%2B91ILof0eZ7zPSIUkdytgfjyK8mMj2CgzNTuBH9uqBaImzEuMpCa4Ep4Vs2uykDuIi66NAcSfe%2BEjd3qFO96ST52Rixt4oPQYQJMJCNwcEGOqUBwmymzPvUSyNDBhf7qmSctaXQcPE1vQG79W1awm8TDrYwGf2dqTghiBsknN2mg2kbRcxqaJza%2F22woJSgNJZnS3dzCX3jN60sOZWzQmnRPcmI8vP6mUPor3m%2Fjcvdaz1GPLWjMw6TQlmRvgUkthc8ZdiXil2tXATz2HQnvf%2BekE19Khi6ZvRRwvMATAb0bYvsHsg4pvyt4PYOpbotmvxoxiwQMJGk&X-Amz-Signature=efe0e4e0953387ba32cbb14188a854ed8f1e50910272c3a8bec571f8575fbb86&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXVN6OE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHhaferAaVEeWFl7z5ji11EZu6X8QVwwl%2B4QWdT7LafWAiEA6B9kbQKNOEL5T9yhHsfdlM6kh6WgpvT6%2BlK49YBbj1AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA08aAGKp2gQ0NLRSrcA5APwknNorAALCF%2FcF%2BLkz%2FCjvoNQsi%2BJtS0BBaafoHu7KonvG%2FdYSKFJasOjJtAOO9aEzj9Rwl0qmvgJENiqum2c0pPvmlUR2b6N0jy0DPes%2F8ZFnJcXdmGgzBkcMvldqVheJSYolnW7WYPr7OS2%2BtTF2147bQdEy6l4ogkbG452OxAb44mIsnjCpJWoZPLwthGThQL3Mdsr3IyGwnvdpT5yKFg8W46tgeMd9CSMgeRBovAnzN3oSJltYQuYynQx1mS5hWTUWiYo4wjId56dhMVfy%2FvUa1GCDdZTHS7MwX0rnKJ2RH96W2yySyeuh%2F5DYQF0UGoPEznMJuuv1bEZ2qswXno12KPb6NwCDhbuXE%2BWSZ5Rk9bcfrZf%2FTsZlUmwEBDvm1AMUeXSL1bl1tRXTqm1ONhhNY0zZswQsxeV%2FHwiHJHBVjZCMKYhebILOKNYdM%2FaHWWdWv0zWjtaW8dno2q0nHvzyFgLBmrQsCMlpY2966e%2BYAxm1cEfLtLnnkZ5K5CRnaRaWmiaeDj1frR640uZ%2B91ILof0eZ7zPSIUkdytgfjyK8mMj2CgzNTuBH9uqBaImzEuMpCa4Ep4Vs2uykDuIi66NAcSfe%2BEjd3qFO96ST52Rixt4oPQYQJMJCNwcEGOqUBwmymzPvUSyNDBhf7qmSctaXQcPE1vQG79W1awm8TDrYwGf2dqTghiBsknN2mg2kbRcxqaJza%2F22woJSgNJZnS3dzCX3jN60sOZWzQmnRPcmI8vP6mUPor3m%2Fjcvdaz1GPLWjMw6TQlmRvgUkthc8ZdiXil2tXATz2HQnvf%2BekE19Khi6ZvRRwvMATAb0bYvsHsg4pvyt4PYOpbotmvxoxiwQMJGk&X-Amz-Signature=41c011ce08cc6b2e7f60e3ca290a9a19c9a2634df9764038b4f3ed9915a8e3df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXVN6OE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHhaferAaVEeWFl7z5ji11EZu6X8QVwwl%2B4QWdT7LafWAiEA6B9kbQKNOEL5T9yhHsfdlM6kh6WgpvT6%2BlK49YBbj1AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA08aAGKp2gQ0NLRSrcA5APwknNorAALCF%2FcF%2BLkz%2FCjvoNQsi%2BJtS0BBaafoHu7KonvG%2FdYSKFJasOjJtAOO9aEzj9Rwl0qmvgJENiqum2c0pPvmlUR2b6N0jy0DPes%2F8ZFnJcXdmGgzBkcMvldqVheJSYolnW7WYPr7OS2%2BtTF2147bQdEy6l4ogkbG452OxAb44mIsnjCpJWoZPLwthGThQL3Mdsr3IyGwnvdpT5yKFg8W46tgeMd9CSMgeRBovAnzN3oSJltYQuYynQx1mS5hWTUWiYo4wjId56dhMVfy%2FvUa1GCDdZTHS7MwX0rnKJ2RH96W2yySyeuh%2F5DYQF0UGoPEznMJuuv1bEZ2qswXno12KPb6NwCDhbuXE%2BWSZ5Rk9bcfrZf%2FTsZlUmwEBDvm1AMUeXSL1bl1tRXTqm1ONhhNY0zZswQsxeV%2FHwiHJHBVjZCMKYhebILOKNYdM%2FaHWWdWv0zWjtaW8dno2q0nHvzyFgLBmrQsCMlpY2966e%2BYAxm1cEfLtLnnkZ5K5CRnaRaWmiaeDj1frR640uZ%2B91ILof0eZ7zPSIUkdytgfjyK8mMj2CgzNTuBH9uqBaImzEuMpCa4Ep4Vs2uykDuIi66NAcSfe%2BEjd3qFO96ST52Rixt4oPQYQJMJCNwcEGOqUBwmymzPvUSyNDBhf7qmSctaXQcPE1vQG79W1awm8TDrYwGf2dqTghiBsknN2mg2kbRcxqaJza%2F22woJSgNJZnS3dzCX3jN60sOZWzQmnRPcmI8vP6mUPor3m%2Fjcvdaz1GPLWjMw6TQlmRvgUkthc8ZdiXil2tXATz2HQnvf%2BekE19Khi6ZvRRwvMATAb0bYvsHsg4pvyt4PYOpbotmvxoxiwQMJGk&X-Amz-Signature=4555c45f9f25178a4a15f0cb904106084705dc552ea0843f5b93bfdfd4bd76c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XKTHZL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCUv7zbtRAnDIWUkSaynmtqgU1f0icEEFUgsgYrlkTMJAIgKU5gNSZDwUWtHsmAuH6RD%2FjnmRV2kZvo1TrcHO61YlYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUkOCTZx6gQjvRMaCrcA%2By9sAR%2BYvgGsy1Zu7zt52lJEQ69EC2Ni1DgSbTN96aFlPwiIBkmNngth9724bVXyODA8phZ3kVPHiiXMorHBXKgaMdH65%2Foop7qPhAxmxgVjSxQamzEwhpPqWWI9HmLFwVFmPHeod4CP9O5bHX5O%2FVINe2OI58oI0CkZ0pgpJqyEef%2BTIqn07VUz2eg1RvpKI%2FlanFXPA0%2B48z077OWBvwBNW5am7pUXG%2FFTvOhagO0qDOcRdOaG7toE02iBBJpLd3k4Ejj9MqQJFMIissVRkOlJ215NM%2FRU34Ha6s%2B1PO6UQyTzzmrklu9%2FVWIGQPk%2Ff5mPqlHaSMi5hnpHdWTVGFl97UcVfEFRQzHXROuLo%2F1dV2VgCOFfEqKL6j8xZUGzCbki3Mq7LCJKuHQE%2BhpISMQnWh5jowIo8QVrw2Bdaedb4XJFkWYCPweuE5oaHgUC6JkUyRLO0EJnnH79LRaq8SgNT24aUQByDBfhmVkVE34NVm4ILAdMJsKTXmg3BOQcloC%2BEF%2BDZS7kkWSfln9MwldAp7fGa0O6ZIWyrPPKmu97M6OFiECmNh4L8XXz7xWI7lzuN72NOlqZzPmc2U8R%2FNs9ZlQQKHRpi2nCRBjlaIHxaM%2BO7gs19z3blijMPyMwcEGOqUBFBBoe0nfxXUQi1lYXK7TwiVK%2BmCxOV7SgoFbe4JimAyNwpHKgFh%2Fe1XvIz5En6wNNO0yROwXBKhkqrupmAoK4OASZrvyhsnJhlnWpHiFHg8%2B19%2Bhm90p3mUi4RGf2xeTu1gaPbTk8aavoiFitXeTpYOA14iOg2CbXQrToUMaLqwEoUrMl%2BE0zuKjcwMM5JwpeUI3v14vdUF%2FfE0sM%2FLlfhxMuehM&X-Amz-Signature=96ffa1ed02393889b1a35e50ba2bf34108813daf108083cd05076380aa01aa3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG45DMIY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCwdlFoWA6fLV9bN5z7%2B%2B3z8FjxBw8YFYn4rovwyYOuYQIhAPYyIzOrB6OlfCTU496V%2BntvDZ2T1VUXLuVJn5hxhvmjKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1VabvY%2BN%2FaLCT%2BXQq3APGp0EgJ9zBpjybaJuwkrnMS8kXa2%2B6uHdXDS3PrnMiYmwEIpQ1PHDXN%2FtMTUdt4gbexS7G3VRGZvENzHdzfFO%2FmgVTnS%2BoabiTKZadoeeHryHZ0NESp28J8BIBCzkYKSZkKPb09cnaQ8fH0y5VWHcJrRweei1gsrWqtUhhI4Kq%2FBpoaObAmlwXxSFDDvMD%2BQ9Le1JQ0XbiQ%2B%2Fm2hanj4IVGDnlrVZSHAT6mz6%2BythYTzPkeGifBJRh49%2F6C%2F0kEqy0FrYMTEt%2Fb8KUKDz3rxRrXf0fDk8QoW181TzaD1RfDwrltFePvck%2BnC1gnL%2Fvc9kxKD3Upg1uAZ0KX62QdnXNPEEaKmqALgIEBtRJtNV2mELCCRt4C53FIWhVgXDunJNHbml5Ii5rDAOl9s50M5PHEwBc38QV%2BdeIsjtOFSocwmO7WaMOFzXFucI6cAOIYZd1T%2BKPskTARpixzflKuXRRKBRqMiW8ExQ5lEYSlSRrvv7rB6W%2F62H%2B4sNjdaLzv%2Fz4DPrZIWbPkdt8kt6FjS31l0cRXaPc4J%2FRJJtD0pxdWdI3xpIIjc7JcuccFo%2FoxKTJSUAlcz2MujBrEOovVo8LTWY0MqX59cZXhBQulxrLIUnEyOv%2BtcphpldnvTC9jcHBBjqkATYvEJK%2F9uDcRL1SDS5%2FTVJi3e1VJLFqGWb2m4zF%2B%2B6rh%2BFZEm3FLhHTnj2tGnIsTiqJGgosh7bYQW15kyNjF0Kwyk8lk1kVy1J7wHlLpwH%2BzUCLvZZT%2BPs1Khl2DlR9%2FiL3K%2FLNw4T%2F0PjcVuarsgzZ1mZJ7WfYeArRMSHXARwt6Vlr5vD8Ax3ZJKT5YQAI11JnBZX5LgtfFY9E9cQzpv15ePWd&X-Amz-Signature=2825daa28b4be430e91c92916386e213902c072f432c3fef7c3e67c46ab479f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTXVN6OE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHhaferAaVEeWFl7z5ji11EZu6X8QVwwl%2B4QWdT7LafWAiEA6B9kbQKNOEL5T9yhHsfdlM6kh6WgpvT6%2BlK49YBbj1AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA08aAGKp2gQ0NLRSrcA5APwknNorAALCF%2FcF%2BLkz%2FCjvoNQsi%2BJtS0BBaafoHu7KonvG%2FdYSKFJasOjJtAOO9aEzj9Rwl0qmvgJENiqum2c0pPvmlUR2b6N0jy0DPes%2F8ZFnJcXdmGgzBkcMvldqVheJSYolnW7WYPr7OS2%2BtTF2147bQdEy6l4ogkbG452OxAb44mIsnjCpJWoZPLwthGThQL3Mdsr3IyGwnvdpT5yKFg8W46tgeMd9CSMgeRBovAnzN3oSJltYQuYynQx1mS5hWTUWiYo4wjId56dhMVfy%2FvUa1GCDdZTHS7MwX0rnKJ2RH96W2yySyeuh%2F5DYQF0UGoPEznMJuuv1bEZ2qswXno12KPb6NwCDhbuXE%2BWSZ5Rk9bcfrZf%2FTsZlUmwEBDvm1AMUeXSL1bl1tRXTqm1ONhhNY0zZswQsxeV%2FHwiHJHBVjZCMKYhebILOKNYdM%2FaHWWdWv0zWjtaW8dno2q0nHvzyFgLBmrQsCMlpY2966e%2BYAxm1cEfLtLnnkZ5K5CRnaRaWmiaeDj1frR640uZ%2B91ILof0eZ7zPSIUkdytgfjyK8mMj2CgzNTuBH9uqBaImzEuMpCa4Ep4Vs2uykDuIi66NAcSfe%2BEjd3qFO96ST52Rixt4oPQYQJMJCNwcEGOqUBwmymzPvUSyNDBhf7qmSctaXQcPE1vQG79W1awm8TDrYwGf2dqTghiBsknN2mg2kbRcxqaJza%2F22woJSgNJZnS3dzCX3jN60sOZWzQmnRPcmI8vP6mUPor3m%2Fjcvdaz1GPLWjMw6TQlmRvgUkthc8ZdiXil2tXATz2HQnvf%2BekE19Khi6ZvRRwvMATAb0bYvsHsg4pvyt4PYOpbotmvxoxiwQMJGk&X-Amz-Signature=88a7695338eeed1ba971387498e8c9fd56383ea79df074e377f26c6ad68e6fab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
