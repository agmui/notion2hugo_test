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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW6ZP5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBWpY3y%2Fb%2BJOfPg60g9COtZ5BimEdRoMdraciTWKNTEPAiBZ23iFfIlSxtWVdSxDqEYt5YqU41pqKGHUYKuJQP3rJCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilICXHUemo4gBxuXKtwD8dr39UkpRKQx%2BXjS9xfkJKjU7oJyVcwks8%2Fg1JcD8zsPF%2F9NxHs3fzpaYVDQcftusw9CjX91Q4SBF3PlI%2FVzvJ67ljlgJBOXG%2B0v7IGavTiBF9OHCvhtwCGvtg2IpdbRB1SW7PyTV1P%2FPhsh4atkxesV%2B2zyZL2xtT2V4y74lsMh8F1RB9Wk7SryNN6egPBrX4QmOquSvEVRncrFFh57Q%2BdIfBMGEynampSKV14YHRasVYYdha6utmyrQjHEe0UI%2FoHRmJNjOMuj0pZkZeoP9lPh3s%2FdECPH9qv7IR3n6krABdlBANORcCPq9LwzcgIAlpPSPfoS0lJQbsUfbxNAjDFw5hzrg0pxofmaKGtvvq22J1xqy8ZXSAfPoaXQ5%2BExUz61N7JOPqDpNl3kGm55dMBNOW7NE0RPKB8nIuKfo5BYmDELLhDgktl3eh42SNBUM4muEhIZwECdJ3hOwPNUZZUmx3pou64wwIZFRh5QkqxuirVTCF6Xa7mCetrsik10OCZNCPomCotyWfuaMCruJ8y0EI0V7jUs2IQwc7yUIhk08YRnLoa0mLuR4lJUh1BJqhxPkXPyoZ22Onud9F7tkF5kEUyZXr1nIFihqdDLZP1sqzdhe7D8q0WJlnEwy7iyvwY6pgFIJrRXrem9IHPjchb7orZnTjd1Kmw2ZOWw0cJ2NNiATCpcRP65fsITtuyKnaNNAJSg45RddyfTTD0N2vWOW%2B8wgZiHkQ2bpDX0MIp7uz5pSXotJFMWh6s%2B%2BAeP7NlgenogNKitgnplMv%2FI83Gg7EpRfYkW0IBsmq4q8SYTei3ldgJHsMq82WcsuRKI61Io6yM4MvKQt8ChztnhNClrXYrQwxA7IBui&X-Amz-Signature=843bfc2ad523f79bc21dc0b210099e0774da9a5025c99db789d86b3ab07f52dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW6ZP5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBWpY3y%2Fb%2BJOfPg60g9COtZ5BimEdRoMdraciTWKNTEPAiBZ23iFfIlSxtWVdSxDqEYt5YqU41pqKGHUYKuJQP3rJCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilICXHUemo4gBxuXKtwD8dr39UkpRKQx%2BXjS9xfkJKjU7oJyVcwks8%2Fg1JcD8zsPF%2F9NxHs3fzpaYVDQcftusw9CjX91Q4SBF3PlI%2FVzvJ67ljlgJBOXG%2B0v7IGavTiBF9OHCvhtwCGvtg2IpdbRB1SW7PyTV1P%2FPhsh4atkxesV%2B2zyZL2xtT2V4y74lsMh8F1RB9Wk7SryNN6egPBrX4QmOquSvEVRncrFFh57Q%2BdIfBMGEynampSKV14YHRasVYYdha6utmyrQjHEe0UI%2FoHRmJNjOMuj0pZkZeoP9lPh3s%2FdECPH9qv7IR3n6krABdlBANORcCPq9LwzcgIAlpPSPfoS0lJQbsUfbxNAjDFw5hzrg0pxofmaKGtvvq22J1xqy8ZXSAfPoaXQ5%2BExUz61N7JOPqDpNl3kGm55dMBNOW7NE0RPKB8nIuKfo5BYmDELLhDgktl3eh42SNBUM4muEhIZwECdJ3hOwPNUZZUmx3pou64wwIZFRh5QkqxuirVTCF6Xa7mCetrsik10OCZNCPomCotyWfuaMCruJ8y0EI0V7jUs2IQwc7yUIhk08YRnLoa0mLuR4lJUh1BJqhxPkXPyoZ22Onud9F7tkF5kEUyZXr1nIFihqdDLZP1sqzdhe7D8q0WJlnEwy7iyvwY6pgFIJrRXrem9IHPjchb7orZnTjd1Kmw2ZOWw0cJ2NNiATCpcRP65fsITtuyKnaNNAJSg45RddyfTTD0N2vWOW%2B8wgZiHkQ2bpDX0MIp7uz5pSXotJFMWh6s%2B%2BAeP7NlgenogNKitgnplMv%2FI83Gg7EpRfYkW0IBsmq4q8SYTei3ldgJHsMq82WcsuRKI61Io6yM4MvKQt8ChztnhNClrXYrQwxA7IBui&X-Amz-Signature=f4fe12d05e4f9949cb7f1a085da3923ed06af1dad619b66c717fc91e1d860f41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTS4HBUM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCEtqf5k8AVMaMHYRn%2FHC2%2FFrDDfcCxAx9ga23oH8LnCgIhAJAJdcdLKs1AMsDvfF4VZgzhXBfVCm4e2UgmhnumGsj%2BKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0goreQkCpv2lm9O4q3AN7bKpCFRJazc52XETh0qIaI6n56vBv5vl0WFUDkh1oLkUPVmgaQ5Tvvgil%2BdR0%2Fg%2F9iJAEE%2FeL9xWh9ACH7Dlm5DmTmDn3EU3AhGxXKOZDH%2BWGRI%2FDq1LyO2oNDHB0lzWcfkkI%2FbpjEw0MP7V10A6eMBNYytemweeGtOSZQR7G5ZvtXFUnIGOqs1B%2FhIcNPdDHBkLy7S9UUTnjCM900sTYQAel6KELfJZJZQvOTLwW6vulMGbTFYymSieiUegoRH68vSccVxfY%2BQyKTecMMrSNK7mcz5ZS%2BOVElSd8PCybCTrox5d9fnzhtp51%2Fm3mgjnDgIO0kv5EVJVBgYa68zrciniu1uChtHdELh%2FV7yFzmNV4SsTc%2BePStXH%2FlCyGhssiM3j7FrykgShWY7VboAzqazzLtVlDUnOZ0LzoPnLpv4Cd4PuXJrrn%2FuNYi%2FwgUPS0gUNXt5KoiF54yHbwKKfNihAIgGfNlE%2FnZ5%2BlMBT3AV96njd5HcaVnH9QDHI%2FLniYGMSHAW0Fm1ciAAsbAoue0PyUu0cjQhnvJY0N5WodntRiCGWmr%2FUlNznBCmQEeMEH8xpBaBDm3xk%2FDqUmVjexSiPMQ7h7zrKZC%2BOlQRTzSFnmulPMWTL0O%2FbUlDCpuLK%2FBjqkAaCNciRZMnCpI%2FC0cHsJiN%2BhktXldToAFhQen5%2FV9pVOZBh4kU3a50GVorAcRKVknUL20iS1ZDrtUX8BvoYeI6mRSfqPhoqpTjkw7JcSfiNpDb5nUasUMx2et3MfOKcN09VILd9pgCnZRuwroLV0iSJPDG2%2B2dKRYXllFSGgWFs1o3t3jY%2FxmNGntlr2Tvt%2B4t8coAa1dgNN7XHb9FvL57bhSRQ5&X-Amz-Signature=d076f8c9a7581a0b4bb397109ffcc19d12c77df8e644350d414df8a104ec51e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTMG3IK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDnA724dB0zIuBFZgN%2FHB1e2Q8syNjm%2F4LrjkehXZ%2FDGwIgCPtDOHIREiHZiYc2Yg8fLrt%2FzzrM25IGyhx%2FMy29TJUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRRRHj7jqApOFswgCrcAyMIxbjOjLxew%2F42EhDx%2BATwSVv4an4ObCtLCS5RMZrgqS5VAZ8NtInRz0Gk5lb7tdEdwDbGd3DmiRL7715WA9ye%2F9cGHwwgQ267ItG9CcRx58BMoyYYpuoSLU1UZxEZtYC2SvSHBnzoluYuWJF8sDFKHfW0dF4jhu7eT2oVh4bXogX9Q3OFxDmgOQER9HnBVawBdZ290oBH1ssy8kJS1I42%2FfOeZT%2FGVowQ2MfH6UvqhbHCiUvbAA2j2PNl4CXpGi3KMTSoI8RGu6cga8RndUknk7gazvROe55GTtw%2F50Rb2g3v6xqCN4bXlh5fJKQu6mNFZSPeqY855wLFLaxugzFNWUyBklnGSRxJLjXLlzCh5Y4S5NSul2QN6DEGD%2FYLOwaCQ7eR3c7Cr6XODXdzTE7Haa6lR0I48i6tI%2FrVryiszhlqM37iBcor7YbWtGi9tRQqnFZmrAYT%2FRPOYCJQCiMMkETQu8xsbtinoagWVsmUp%2B7%2F24U5n7Weh8NoFjPsrTZ7cbmWbCbZAduceZfYam6OYpTnMAswfWDgklP1ctpJYAig7ghxEseQebxcAo2oKSJX0IvUHW%2BtKOBtMtc3tNwj4XKvnaNVNIePZMF%2BlPt7DeDUKMswAqhSeKsLMLK4sr8GOqUB8ldqHqJbjp870otCxFME3BcUD5Z9lzF3%2BsnvE5D6ri%2F0FpmU4DmdlpoL6ML0%2BIu9WWyt6Ltb32D25W37eHfjLj6a6VgdYpEH7VMHUlbR9EzD5rpaZQzc2nS0q4Ykrp2FVJ2sSeYzfU%2BX130FjUo2ovOLgaI7cukh1XCsRSsWnNKgZvjiu1oesg8U3L%2BaBsFZu6ObwpRlK%2F4JZcPEUccM8KsKyUcT&X-Amz-Signature=d24bbf04ca312d2c7f1d8bfe320adefaf1fd789d6656d0e81fb03da5f9d60ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVW6ZP5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T021952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBWpY3y%2Fb%2BJOfPg60g9COtZ5BimEdRoMdraciTWKNTEPAiBZ23iFfIlSxtWVdSxDqEYt5YqU41pqKGHUYKuJQP3rJCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMilICXHUemo4gBxuXKtwD8dr39UkpRKQx%2BXjS9xfkJKjU7oJyVcwks8%2Fg1JcD8zsPF%2F9NxHs3fzpaYVDQcftusw9CjX91Q4SBF3PlI%2FVzvJ67ljlgJBOXG%2B0v7IGavTiBF9OHCvhtwCGvtg2IpdbRB1SW7PyTV1P%2FPhsh4atkxesV%2B2zyZL2xtT2V4y74lsMh8F1RB9Wk7SryNN6egPBrX4QmOquSvEVRncrFFh57Q%2BdIfBMGEynampSKV14YHRasVYYdha6utmyrQjHEe0UI%2FoHRmJNjOMuj0pZkZeoP9lPh3s%2FdECPH9qv7IR3n6krABdlBANORcCPq9LwzcgIAlpPSPfoS0lJQbsUfbxNAjDFw5hzrg0pxofmaKGtvvq22J1xqy8ZXSAfPoaXQ5%2BExUz61N7JOPqDpNl3kGm55dMBNOW7NE0RPKB8nIuKfo5BYmDELLhDgktl3eh42SNBUM4muEhIZwECdJ3hOwPNUZZUmx3pou64wwIZFRh5QkqxuirVTCF6Xa7mCetrsik10OCZNCPomCotyWfuaMCruJ8y0EI0V7jUs2IQwc7yUIhk08YRnLoa0mLuR4lJUh1BJqhxPkXPyoZ22Onud9F7tkF5kEUyZXr1nIFihqdDLZP1sqzdhe7D8q0WJlnEwy7iyvwY6pgFIJrRXrem9IHPjchb7orZnTjd1Kmw2ZOWw0cJ2NNiATCpcRP65fsITtuyKnaNNAJSg45RddyfTTD0N2vWOW%2B8wgZiHkQ2bpDX0MIp7uz5pSXotJFMWh6s%2B%2BAeP7NlgenogNKitgnplMv%2FI83Gg7EpRfYkW0IBsmq4q8SYTei3ldgJHsMq82WcsuRKI61Io6yM4MvKQt8ChztnhNClrXYrQwxA7IBui&X-Amz-Signature=03b6e657ac4cdba5ff321ed79caf68c8a52a00c8f1762e14a657871b335ea52e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
