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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXSDNU6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe2n8I8Gob5JTl8DUkr4Jvo8KjAYxNsyumWJq9LnOLZAIhAPglo88qLGTfUZzJy%2By6F1qmRlVkqVK5rWu0d1Ke33aIKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWtlHjIdgDmelaCPYq3AOt1nGvHxyDW3W0TXyx1SdpTcVyt4HiFzXwub6VWM7rPYdzHkeavbyRvINDpbuWFsnMBQ%2BOamJM%2BzB6ImcRm41RsxWKjhH9CksT4TUrM2OnivKGSbWRF1cPUsq%2BmTFJAB%2BOOmnN6dn4QGoBd%2FFKoLEnupEtF0eRg45I8s6cv4qaRxmYdBcJHh14ZjWzxMu7gMErsebhlvFim6ESxcPHwT9AEoRyl7CMb4opdGs26v%2FluYVoogFFReCKiW9FcUXFkApdVb3kgi8TWuxd7GtMtL5U6qjDxQxUBFu3bCeNV0a%2BDm8WtYyiqTNt58UH3rf2B%2Bk646ljTSkPgWIrD%2FTza54QWSZg5cmrP%2BdsqCM2eNzcooSWSgiqXtZXrGIPBBayWeYf6FKVZKjIxUepdroK0Yryt2YbbYilY03VZGibP7AOYN1Yc%2BQFLFpGkAQqpvk4EBb8BHE4MAmfSG5xUPhx0WMIUP%2Boim8QZeJHRal7rKmaU9w1E78y9i%2FiMj2BIzQRjg5nUvAC9iOsi81H%2BEIs5nLbh1HiGcfVY4%2B0DeJRXSpdJ4gVkIP83kDV2W2lbDfOa2uZvCPvtTDuitC2xWPL6TykeoJiks6xLYWmqp8oN1xpCop6onLsvT3CRfGi1jD5mq%2FBBjqkAR8TvT8OdxMIXafRdLPbEqBw2dqRUqEsWnhb7AiZfi%2Fx%2BvvGPFVKcT3uvSGsbqWRO8e8XVcZELX7sUbHvpqwfj1Pu9gzN9GKI1LTUxNcrU8D%2BlxppYOBB10mWUudFp%2F0fHcRqevSBpwVGU%2Ftu7taF9%2FpQgv6QEXHudu%2BdKztF5%2B2qOwQ%2ByIlvMAYNhnMJj259ekI8GcvmpXRE5S1LpuBhNPfB8bc&X-Amz-Signature=42b36197f7c5b091fdfcd7aff1d116f6ba764b13738810ebd95ff6dfe259cfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXSDNU6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe2n8I8Gob5JTl8DUkr4Jvo8KjAYxNsyumWJq9LnOLZAIhAPglo88qLGTfUZzJy%2By6F1qmRlVkqVK5rWu0d1Ke33aIKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWtlHjIdgDmelaCPYq3AOt1nGvHxyDW3W0TXyx1SdpTcVyt4HiFzXwub6VWM7rPYdzHkeavbyRvINDpbuWFsnMBQ%2BOamJM%2BzB6ImcRm41RsxWKjhH9CksT4TUrM2OnivKGSbWRF1cPUsq%2BmTFJAB%2BOOmnN6dn4QGoBd%2FFKoLEnupEtF0eRg45I8s6cv4qaRxmYdBcJHh14ZjWzxMu7gMErsebhlvFim6ESxcPHwT9AEoRyl7CMb4opdGs26v%2FluYVoogFFReCKiW9FcUXFkApdVb3kgi8TWuxd7GtMtL5U6qjDxQxUBFu3bCeNV0a%2BDm8WtYyiqTNt58UH3rf2B%2Bk646ljTSkPgWIrD%2FTza54QWSZg5cmrP%2BdsqCM2eNzcooSWSgiqXtZXrGIPBBayWeYf6FKVZKjIxUepdroK0Yryt2YbbYilY03VZGibP7AOYN1Yc%2BQFLFpGkAQqpvk4EBb8BHE4MAmfSG5xUPhx0WMIUP%2Boim8QZeJHRal7rKmaU9w1E78y9i%2FiMj2BIzQRjg5nUvAC9iOsi81H%2BEIs5nLbh1HiGcfVY4%2B0DeJRXSpdJ4gVkIP83kDV2W2lbDfOa2uZvCPvtTDuitC2xWPL6TykeoJiks6xLYWmqp8oN1xpCop6onLsvT3CRfGi1jD5mq%2FBBjqkAR8TvT8OdxMIXafRdLPbEqBw2dqRUqEsWnhb7AiZfi%2Fx%2BvvGPFVKcT3uvSGsbqWRO8e8XVcZELX7sUbHvpqwfj1Pu9gzN9GKI1LTUxNcrU8D%2BlxppYOBB10mWUudFp%2F0fHcRqevSBpwVGU%2Ftu7taF9%2FpQgv6QEXHudu%2BdKztF5%2B2qOwQ%2ByIlvMAYNhnMJj259ekI8GcvmpXRE5S1LpuBhNPfB8bc&X-Amz-Signature=973285e760be7856911a6703a69fb9014401d1abd289d36905f77cdfa12c087f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXSDNU6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe2n8I8Gob5JTl8DUkr4Jvo8KjAYxNsyumWJq9LnOLZAIhAPglo88qLGTfUZzJy%2By6F1qmRlVkqVK5rWu0d1Ke33aIKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWtlHjIdgDmelaCPYq3AOt1nGvHxyDW3W0TXyx1SdpTcVyt4HiFzXwub6VWM7rPYdzHkeavbyRvINDpbuWFsnMBQ%2BOamJM%2BzB6ImcRm41RsxWKjhH9CksT4TUrM2OnivKGSbWRF1cPUsq%2BmTFJAB%2BOOmnN6dn4QGoBd%2FFKoLEnupEtF0eRg45I8s6cv4qaRxmYdBcJHh14ZjWzxMu7gMErsebhlvFim6ESxcPHwT9AEoRyl7CMb4opdGs26v%2FluYVoogFFReCKiW9FcUXFkApdVb3kgi8TWuxd7GtMtL5U6qjDxQxUBFu3bCeNV0a%2BDm8WtYyiqTNt58UH3rf2B%2Bk646ljTSkPgWIrD%2FTza54QWSZg5cmrP%2BdsqCM2eNzcooSWSgiqXtZXrGIPBBayWeYf6FKVZKjIxUepdroK0Yryt2YbbYilY03VZGibP7AOYN1Yc%2BQFLFpGkAQqpvk4EBb8BHE4MAmfSG5xUPhx0WMIUP%2Boim8QZeJHRal7rKmaU9w1E78y9i%2FiMj2BIzQRjg5nUvAC9iOsi81H%2BEIs5nLbh1HiGcfVY4%2B0DeJRXSpdJ4gVkIP83kDV2W2lbDfOa2uZvCPvtTDuitC2xWPL6TykeoJiks6xLYWmqp8oN1xpCop6onLsvT3CRfGi1jD5mq%2FBBjqkAR8TvT8OdxMIXafRdLPbEqBw2dqRUqEsWnhb7AiZfi%2Fx%2BvvGPFVKcT3uvSGsbqWRO8e8XVcZELX7sUbHvpqwfj1Pu9gzN9GKI1LTUxNcrU8D%2BlxppYOBB10mWUudFp%2F0fHcRqevSBpwVGU%2Ftu7taF9%2FpQgv6QEXHudu%2BdKztF5%2B2qOwQ%2ByIlvMAYNhnMJj259ekI8GcvmpXRE5S1LpuBhNPfB8bc&X-Amz-Signature=dd2b53a9a82fe1252f75d4c5d5b592d30e6e3842cab4c76fd164d68ab3517efe&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MM3U6T%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAogHCXUv52odTKLdwacqp%2FT0vy8ZBj1mf1gOqXoTKmkAiEA%2BNsrifk%2FXu%2BR9qRYycjbnUoZm1fC5nqV4BxhDt33lHUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo0epemqcT%2FLJxSfircA4pwHk8JPAp8J9hOr8oWfhMar%2FdmzJDJeHWHc417N8zbP8sTp1Vn59wCKZE%2BsCMXXa74fnWdUmfkyRmi7SHSR78vnpgDGPIW5x2g9qP%2BlX%2F6JYGpNPtjoe5mRzIWE9iRnRhXpcJEbIl%2F1d9IlFXQy%2BdZJFoV765cYwmN9YEmzaTbS38JZYR8EGwiE%2BenE8NfMupBFhY0BeXC2y%2Fo7Bxv6SFuGB69FqPYBsKPWrmOh0EM4EUSiFrtxUj1icn34WhyveTeYV08lObyTleqFQ9KBYYOGUb9x1XN4vYNgqNljhHOLKA%2F%2BeXkFlFuRqdisc3JmZPyg4sklntsswmGr2Hf6AUezdkQ6FdtlRssvfCTb9%2BYl%2Fv%2BvwWjlqbKEdHq%2B%2FkGKO9EMn0nZi6I%2FU2S9BXiUmA86Hce5BAE7jXT7ToLHu4Id6Z5hUMCZBozlvxvFXc1ESSbqYTINL1HdKbDC6P84tavyhojYTyFcqnQTE9PnQgn1X7q1RVKNExdDixFMJUF0fzsx6OfN8B31OhE%2FzP52Zh9EPsnKCSu4%2FanIq16%2F5wIKK4Y473BbD0z1OTaK1gUpaaY2W1nfa%2Bcb2LQlHoxCGzgaHeCLscZWcvOHCIGYI2Ohx%2B6JYmAuyl%2B%2FapmMPaZr8EGOqUBnBH%2BPMES3PKzp8uCCTl1Ukh8O6kkw6CYldXewXovrqJJvCz8Yn6W5XFNYEC8mjvhMLFBxlsZehePW9QNVqnTVspZ8qNrut77VcIAIutQ7bf0pdGFJG9sBJjNMHMv7uee97xDqvhEVvb%2BqPglUpgnMOJ7Oe%2FIoGBl8QuAGk%2FrIv%2BuNXiRwVG6sGF0ohuoOgcXhzIHIHI9bOr5jdPy1CDrl4JpLHeb&X-Amz-Signature=3b7d06b223bc35917aa3fd96883f207f4278cce4efa0d9e6904f4ed748eaf6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKNAF5YS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEr3F%2F4JDaTWt8PyN76mc8R7AWfRGS6YFA%2B9YFTgzrJoAiBde6ZHyRCTPDgnCWQeDa8C3zMEVysS6C1LrI1wZxn%2BRyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgWDkR8JLI01mUr96KtwDm1dTV9NMY0S%2FtZFzxdad1Kx%2FKnNIL8n8MGev1FhxRATa5i93UgJNd%2B4YHf5p5vLxfcpV4QFPvV5KYO6p0l023S%2BGl30qP8g5JBi%2FlXRZFyQPWj1y7vDoPRyFWYwPd9gojT0HiWa7fByuVRKPhf5y1FWoaSs82EJ9RdGMuXVa4q0PhDQPycjPLNzVQ%2F1%2FUg6pBX8W2eB1aHX5274iT9491MJkK9Qt6%2FST%2Fxooc3%2F0M0X9JKDcVCs9a4DLEK00yZLOsNGlvyX6hHAPfpFggkZ9n0CQDN0OEmefjjPMcs21YZu566hZj5fyI85Fm%2FbDPYaIzZF1W85PNb4gLHfD%2BubeF4JNmLeDhZez7EARJBwg2F2ovTscdxk1vVZNDKmrkpqdc0omhpoFh4ykAwNhew%2BLbWAHCjdhrF2wmf1cx9a5AMJEjrsDfYauBJRTY3BmQ8tIw7mFXFMf4ZOfvRhv2vHit0nv4K2eMWsiKHZ70hqOOfH3A8%2Fv%2Fk38h8J%2FQhiF9Rf6uWZCMa6fcethJVOPGYHvOPoPBL1r6BDsWNYD3puXNrFh%2B%2FPIMsyiax%2BTS5cz7tld1m9olyYlmAp2oAsMHKzAOhjHlNCaDTO2LC4T65AWLYmEjkEnlLbzN2Ktz7gwvJqvwQY6pgHKHr4aq0yUjXC4dVXYc9UJFg1y50M3Az1V%2B8EXvBuFXZTVmI5kd3hiXYsHWwv1y9C6pGcJLT6Gc6JIbjzLOUhCFY6YmMd%2BZf1jcUdb5ZwHXrQbyK1FhSOp5SutP6eUNe94jcM5RlKvzvpMDPRUFnpxU%2FRydfMpte1Ke56Na26iZtXkdtM6LrC3WIAOck2955ebU%2BsQoGINV0y0Wbdw3wyeV%2Fw4C7YT&X-Amz-Signature=27d30435c40d1a9094b4ed44348fc84620f380f3bdc77b6824d78fc33e36db23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXSDNU6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe2n8I8Gob5JTl8DUkr4Jvo8KjAYxNsyumWJq9LnOLZAIhAPglo88qLGTfUZzJy%2By6F1qmRlVkqVK5rWu0d1Ke33aIKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWtlHjIdgDmelaCPYq3AOt1nGvHxyDW3W0TXyx1SdpTcVyt4HiFzXwub6VWM7rPYdzHkeavbyRvINDpbuWFsnMBQ%2BOamJM%2BzB6ImcRm41RsxWKjhH9CksT4TUrM2OnivKGSbWRF1cPUsq%2BmTFJAB%2BOOmnN6dn4QGoBd%2FFKoLEnupEtF0eRg45I8s6cv4qaRxmYdBcJHh14ZjWzxMu7gMErsebhlvFim6ESxcPHwT9AEoRyl7CMb4opdGs26v%2FluYVoogFFReCKiW9FcUXFkApdVb3kgi8TWuxd7GtMtL5U6qjDxQxUBFu3bCeNV0a%2BDm8WtYyiqTNt58UH3rf2B%2Bk646ljTSkPgWIrD%2FTza54QWSZg5cmrP%2BdsqCM2eNzcooSWSgiqXtZXrGIPBBayWeYf6FKVZKjIxUepdroK0Yryt2YbbYilY03VZGibP7AOYN1Yc%2BQFLFpGkAQqpvk4EBb8BHE4MAmfSG5xUPhx0WMIUP%2Boim8QZeJHRal7rKmaU9w1E78y9i%2FiMj2BIzQRjg5nUvAC9iOsi81H%2BEIs5nLbh1HiGcfVY4%2B0DeJRXSpdJ4gVkIP83kDV2W2lbDfOa2uZvCPvtTDuitC2xWPL6TykeoJiks6xLYWmqp8oN1xpCop6onLsvT3CRfGi1jD5mq%2FBBjqkAR8TvT8OdxMIXafRdLPbEqBw2dqRUqEsWnhb7AiZfi%2Fx%2BvvGPFVKcT3uvSGsbqWRO8e8XVcZELX7sUbHvpqwfj1Pu9gzN9GKI1LTUxNcrU8D%2BlxppYOBB10mWUudFp%2F0fHcRqevSBpwVGU%2Ftu7taF9%2FpQgv6QEXHudu%2BdKztF5%2B2qOwQ%2ByIlvMAYNhnMJj259ekI8GcvmpXRE5S1LpuBhNPfB8bc&X-Amz-Signature=c6dbf77003636f1cb4df35df6c98132080fcfe1f9f6e7677816be31c1544510c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
