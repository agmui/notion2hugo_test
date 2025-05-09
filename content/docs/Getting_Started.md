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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642KUVEWD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZNegEjv8ZNvobMyVgYFOrZrpUDNMnWIzJ3xKLokaDQAiEA0ox4NxLqIP9Oznploi1Zfff7Y%2FMPh7OItRhdm25vlQIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQoU%2B0UjzrgYnD8NyrcA0gTDGVNCnGROCoFWd9Yg4Z%2FsooqXdR%2BDPRZgG8HRV13aagz07Lp7qjjtobZ9GnryAdBWiBuWfaUX0pApGTuc1c9BgNCqX6oKXqsXtfJNZDTHaCZ0rSepUxCq0k%2ByVFZjfparCxeTzNYa41j2cTUredyZHda6Xklk8IcsVXJ8nduS06RXCgy4sitxi%2FSiWYryqaBoCOFWDLV8Cp%2BdcoBH%2BxUQ5KPlVa%2Bqys57CHsywZjlqIrCcY2sLsVeblVn0uRuTdE9U%2FK5jFJM0buxLV6m84gM95v2LSmIa7GjPeQAq3AUtN3Ct9MqJrf706Fjo7yYtyndzWsuANYt9Qg4s1bcvjendgEmKbRdFAkZkhT31E21K7zifrUSUl0pFCNu5QHgqXlhblxTTMmc09ZEmKvURp4COFrCzxilEF3f2e4DtmMZGuLuzJylAZPNmjujCQEBpcDkpYysWOQS3JcskSzNiEp0VqQjt2LFjrigwHZxEPDjYe4cNog8ruWNnK5kYv0AwoY7dWSRO31GcchPHD0DBowcQiuB%2FIshsOtzky%2B8rH7Vl2w6Ym4YlxJSPnUaR473mPSpLCYhpjkLFTjp623SLb6lzGCsebY1IgkuJf3wjRv9HK%2BWCUKCSeRkpDZMPjE%2BcAGOqUBNg1HjRziXLs8C0byGA6zm4c9Yi8CVYeyvPlLbD4yvSjOXzgMV1NPOmPK%2BmR42I%2BK0pfCnUh4Z0dr%2FvxRrn8mwlYrccIFBrFvSdvQT01%2BpClATsfMEJILYg%2BnDuQ%2FpwgO%2BJ8oKPI9XAulw1LAs%2BYgNvnyK7xdvDYbYufxcc8sSRgZNlW9FyXlCfW2CswC2e7KVAPQHL%2B8CUGUjFN6kWC5Os6P0ZMY&X-Amz-Signature=c2aa7d46f1938f26bfa47a16da2caf93c753b2da51035eb1333d46e1eead931a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642KUVEWD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZNegEjv8ZNvobMyVgYFOrZrpUDNMnWIzJ3xKLokaDQAiEA0ox4NxLqIP9Oznploi1Zfff7Y%2FMPh7OItRhdm25vlQIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQoU%2B0UjzrgYnD8NyrcA0gTDGVNCnGROCoFWd9Yg4Z%2FsooqXdR%2BDPRZgG8HRV13aagz07Lp7qjjtobZ9GnryAdBWiBuWfaUX0pApGTuc1c9BgNCqX6oKXqsXtfJNZDTHaCZ0rSepUxCq0k%2ByVFZjfparCxeTzNYa41j2cTUredyZHda6Xklk8IcsVXJ8nduS06RXCgy4sitxi%2FSiWYryqaBoCOFWDLV8Cp%2BdcoBH%2BxUQ5KPlVa%2Bqys57CHsywZjlqIrCcY2sLsVeblVn0uRuTdE9U%2FK5jFJM0buxLV6m84gM95v2LSmIa7GjPeQAq3AUtN3Ct9MqJrf706Fjo7yYtyndzWsuANYt9Qg4s1bcvjendgEmKbRdFAkZkhT31E21K7zifrUSUl0pFCNu5QHgqXlhblxTTMmc09ZEmKvURp4COFrCzxilEF3f2e4DtmMZGuLuzJylAZPNmjujCQEBpcDkpYysWOQS3JcskSzNiEp0VqQjt2LFjrigwHZxEPDjYe4cNog8ruWNnK5kYv0AwoY7dWSRO31GcchPHD0DBowcQiuB%2FIshsOtzky%2B8rH7Vl2w6Ym4YlxJSPnUaR473mPSpLCYhpjkLFTjp623SLb6lzGCsebY1IgkuJf3wjRv9HK%2BWCUKCSeRkpDZMPjE%2BcAGOqUBNg1HjRziXLs8C0byGA6zm4c9Yi8CVYeyvPlLbD4yvSjOXzgMV1NPOmPK%2BmR42I%2BK0pfCnUh4Z0dr%2FvxRrn8mwlYrccIFBrFvSdvQT01%2BpClATsfMEJILYg%2BnDuQ%2FpwgO%2BJ8oKPI9XAulw1LAs%2BYgNvnyK7xdvDYbYufxcc8sSRgZNlW9FyXlCfW2CswC2e7KVAPQHL%2B8CUGUjFN6kWC5Os6P0ZMY&X-Amz-Signature=6009bf29b2507da1931f7936a35f40281b2b6fe38782823f083351eb93e17481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642KUVEWD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZNegEjv8ZNvobMyVgYFOrZrpUDNMnWIzJ3xKLokaDQAiEA0ox4NxLqIP9Oznploi1Zfff7Y%2FMPh7OItRhdm25vlQIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQoU%2B0UjzrgYnD8NyrcA0gTDGVNCnGROCoFWd9Yg4Z%2FsooqXdR%2BDPRZgG8HRV13aagz07Lp7qjjtobZ9GnryAdBWiBuWfaUX0pApGTuc1c9BgNCqX6oKXqsXtfJNZDTHaCZ0rSepUxCq0k%2ByVFZjfparCxeTzNYa41j2cTUredyZHda6Xklk8IcsVXJ8nduS06RXCgy4sitxi%2FSiWYryqaBoCOFWDLV8Cp%2BdcoBH%2BxUQ5KPlVa%2Bqys57CHsywZjlqIrCcY2sLsVeblVn0uRuTdE9U%2FK5jFJM0buxLV6m84gM95v2LSmIa7GjPeQAq3AUtN3Ct9MqJrf706Fjo7yYtyndzWsuANYt9Qg4s1bcvjendgEmKbRdFAkZkhT31E21K7zifrUSUl0pFCNu5QHgqXlhblxTTMmc09ZEmKvURp4COFrCzxilEF3f2e4DtmMZGuLuzJylAZPNmjujCQEBpcDkpYysWOQS3JcskSzNiEp0VqQjt2LFjrigwHZxEPDjYe4cNog8ruWNnK5kYv0AwoY7dWSRO31GcchPHD0DBowcQiuB%2FIshsOtzky%2B8rH7Vl2w6Ym4YlxJSPnUaR473mPSpLCYhpjkLFTjp623SLb6lzGCsebY1IgkuJf3wjRv9HK%2BWCUKCSeRkpDZMPjE%2BcAGOqUBNg1HjRziXLs8C0byGA6zm4c9Yi8CVYeyvPlLbD4yvSjOXzgMV1NPOmPK%2BmR42I%2BK0pfCnUh4Z0dr%2FvxRrn8mwlYrccIFBrFvSdvQT01%2BpClATsfMEJILYg%2BnDuQ%2FpwgO%2BJ8oKPI9XAulw1LAs%2BYgNvnyK7xdvDYbYufxcc8sSRgZNlW9FyXlCfW2CswC2e7KVAPQHL%2B8CUGUjFN6kWC5Os6P0ZMY&X-Amz-Signature=897dd62866bebb2569e8756fe6ec4c522f5ad00bcd912592c11512227207b478&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTMWNT2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRuqtmzYnKpOo3137dqr0D0jbYxeLVtIylfH4RsjsXNQIhANaLTOEfnGwaYZqnHvhtKYTwgQWIEp6Wkkx0hM92iBWuKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlakCQJYeCCQIKMJAq3ANCnkoSH132ni6LpADX5hByyUjN9nF%2Fdzf2VHXVD%2BR2tzn%2FCDJ%2FPOYeABH2J64H2jQH3nLSAIJ6KRNLXBFBY6Fy6OJhZywmqoA1sg0xc1h%2BauCqYi4pOE1JOMzb6LiSrvxAy3LRHJwSSqhVl7zwTddAjGXrLi8kDRklM4y7MgzwvKXGGk9svI84%2FaL0QQ2E8RdMj5j2b%2Bmz9NkQIZG9%2BENr8cLuAPOF9u3PqITtRC30YF3P2cm8C%2B6JRia3ab3HJlaSTC8aVc6mqXQbiXsi6Gc4NkvXIHxvYvDEjZXeo3YxWIGSt8c%2BnBkRSfFhI8NtWv%2BuVg5koVYGhmcelqeLLmSohNx4kVk8eWkN6FY90l5C8kO%2FauB84Ji6s04qBcptOb3danfrL6fe9RTLG3XtbAlJrOOcbcIBd5WAKKChbEjQZDKX103tzJcSLYJUWj3PQsHkatm1S%2FqoIlGI%2FY2AxUxgzmxE%2BHw%2BHENxq5EdJiiHb6mwIH9wHQlnut0rvx%2FUNP%2Fl5soBnqhnUZ5N9aGRKb3VjIAbe1AdMJFGPjeC%2BhpRJcLcfRE%2B7Z9SoEtj1efhAV5pB6J2OqKLQ21TgUxszp7P6iYXgvf%2F4uXWBdKA8ZV7FKo9nyWrvdGgXXdPIzDxxPnABjqkAfVYi%2FmUznJsfzU%2BwxlzGF3Bu5K%2BjGkhtxsERODBu0xCPEm6GTSehdQDuRDU0pvqM64n%2FC0QXLk8XqNU4epzLXcHxHydE57yPVy0lLhUWpiMkgYmZzybU2DQxq9Ka2tJ47BBgLyzfc9QXoR7%2FK2izIhLi2aM2nvXGB819mtJk2rXBNtt5%2FyXOw39Fe5Af4X%2FIL7Ebunwci9ztuYM7TzjI0Z%2FxHRv&X-Amz-Signature=0795b4ec1b2950f1588444f7d67a3098c439c3b64d21093477d543ae3dfbc164&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTEG5ZW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcOOV%2FoFociV0nuun5H6S4LWfAvFgUDIoxzjkYMxdBpAiAJTVZxu0OcbVJH7R4lw8aifzEYOvBATGtHMX75zrFY3yqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNK%2BfpBILgo1Qw1rwKtwD3JPafLr5wIXcvncdGXOh%2B4tNNRFLhFR%2BMrcNkXS6XG35kdc0pPiMm0%2Bsn%2FThw10LPklDgIm3Wopg%2F45V3qbN%2FDpYTvWiCnobJhI3gF%2FqF0TGk3DyBBCZzLUuKH7J6ITnT9MUB11nduPBCXkUq%2BOk0L7Vpq2aX6hZ5NzZQ0ez7YMvklu4JXM%2FKDM2%2FgkA57ELd%2BdQHMnoxEJUYs%2BSUHCWT4j3JqrwoU7IoWtpAopO4kU63UhwF5BK%2FPxcSaIwE%2BJEdaJodlcVOx2jA7PlTiXP%2BUG4uln0E%2BClwJ%2Fr%2FtENNpoDva0W%2BXMSHficwFpSm85eO76qwyVCZOXktT6uqk49jYBlmbaG6VAfOy0Ikj%2B3TpqIIvT%2B7S30d1a8Jus92HHYnBQc8hnpxCBEipkuP7rQqaNxECMw2pF%2BLtwA6olqJ%2FpDu5CDRSM3ibkEHcs5WUe7CEeUetrP6N2ke9bEuHhTOERsp5MMMgxcnOiCyTX0DnVS6MwsBs45lRZbrzt2Dblikax%2Fa5LD8JPpqyWIUY74RNRnRVTGxTXdkQ6hoLdZNuGi0CykC0%2FT44tYiA4McmO3SbrrF9Ke2iQkeaDbPQNx0xhx5fqAcIcpjNEQC1fWVukqj3X2iME4eSRsGDcw3MT5wAY6pgH2WHtnI4KX%2FBFfC4bHw4t9FVV0gLq4qISAzlu2ni2ZqqrzY0joehRtJBNtgJ7baEMipJgRAOz3N%2Bg%2BWwuiFXkkyi%2FqZVxJS9ghX2M697Fb%2Bug%2BQXV27LIfnt8QyIc8WjVUkzdAcgaaNeASi%2B951Za0K1fZKa3ts4IW2ox92tnoU9cYY79sGzcphr%2BjCMO5ukVsNsMq5vHMKPfIZnOEsN%2FWnNSWy7hi&X-Amz-Signature=5bf18113e7b2357ebfaa5fa33dbc3f526d4c6c050865650abb32ae2eee41bb93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642KUVEWD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZNegEjv8ZNvobMyVgYFOrZrpUDNMnWIzJ3xKLokaDQAiEA0ox4NxLqIP9Oznploi1Zfff7Y%2FMPh7OItRhdm25vlQIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQoU%2B0UjzrgYnD8NyrcA0gTDGVNCnGROCoFWd9Yg4Z%2FsooqXdR%2BDPRZgG8HRV13aagz07Lp7qjjtobZ9GnryAdBWiBuWfaUX0pApGTuc1c9BgNCqX6oKXqsXtfJNZDTHaCZ0rSepUxCq0k%2ByVFZjfparCxeTzNYa41j2cTUredyZHda6Xklk8IcsVXJ8nduS06RXCgy4sitxi%2FSiWYryqaBoCOFWDLV8Cp%2BdcoBH%2BxUQ5KPlVa%2Bqys57CHsywZjlqIrCcY2sLsVeblVn0uRuTdE9U%2FK5jFJM0buxLV6m84gM95v2LSmIa7GjPeQAq3AUtN3Ct9MqJrf706Fjo7yYtyndzWsuANYt9Qg4s1bcvjendgEmKbRdFAkZkhT31E21K7zifrUSUl0pFCNu5QHgqXlhblxTTMmc09ZEmKvURp4COFrCzxilEF3f2e4DtmMZGuLuzJylAZPNmjujCQEBpcDkpYysWOQS3JcskSzNiEp0VqQjt2LFjrigwHZxEPDjYe4cNog8ruWNnK5kYv0AwoY7dWSRO31GcchPHD0DBowcQiuB%2FIshsOtzky%2B8rH7Vl2w6Ym4YlxJSPnUaR473mPSpLCYhpjkLFTjp623SLb6lzGCsebY1IgkuJf3wjRv9HK%2BWCUKCSeRkpDZMPjE%2BcAGOqUBNg1HjRziXLs8C0byGA6zm4c9Yi8CVYeyvPlLbD4yvSjOXzgMV1NPOmPK%2BmR42I%2BK0pfCnUh4Z0dr%2FvxRrn8mwlYrccIFBrFvSdvQT01%2BpClATsfMEJILYg%2BnDuQ%2FpwgO%2BJ8oKPI9XAulw1LAs%2BYgNvnyK7xdvDYbYufxcc8sSRgZNlW9FyXlCfW2CswC2e7KVAPQHL%2B8CUGUjFN6kWC5Os6P0ZMY&X-Amz-Signature=a6e0509531289cadfc668a3aa940dad7aac782df59ac92b71038c70f76342f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
