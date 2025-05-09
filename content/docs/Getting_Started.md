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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYCCIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnbc3tr0uwG9yf8QgiqnWEwohIK94nK7t%2B%2BweHFE0kQAiEA6PypwuXXIY5QxF1Rg%2BfMpFT0WH5bAGcx0BoEvB8FdqsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeia6DpktvtN6kjWSrcA9cEiXg%2BkGOo9CvvgCcGC3w%2FCENPQ2LjiKW%2BHaQQOGxgMflh93jOgpXugXbQQeGJ3kZiGnYvN8Tu5w2o7rZwpoBIgA0aDo3zE2VF8EPZMV9b3qqdHYfcgZbAlj3nl2lBZm0FQvGOSG3AbjKtRkqPmmha4t1rVuPupa8WXoZ7FhlQzJmsYqZWwA%2BoW2zJI2M7g5b0FPbRrxKSiAuwkTlTWpv18Nf6SQ9%2FYz9LZjw%2BmMpJc18nzWg6ffIGX3tf9u53RsU9J15FQa3TexP5yuC%2BptgFfWCvHUs5ZBPU%2BovVG1yl67UYly0uXEvEV%2BO7rSBNiq1kLHPWrhmDVpc1Tlejc7S2lswjP6cE3XJHtzMsqfQAMngQAjbHCRJB%2FgooNGOvAtMtzlEX8Y4MeDgboktZs0LO0L5Sg%2BtqAFn9lQXENoYITFVRKZWuakJv59qL%2B8pER7qLXj115JYX8jm4uhLbCJR8NYUXINZrAARN5F3be7iAhDb826p5lTZPkZG9O8yQBf1cC3D2F0nZcjDEKZPDEDxiAE0e0K5HtwVXMnuXeoO4%2FjAcevHRZ4ijb%2BSiHng7XdGI%2FiU25NG367aqSUCEo%2BFAauIbypyjI%2FrTJLOx6%2F9X0PVsyTyF4OlpiWB5MMqv9sAGOqUBtKuvQbtqKg202Ad7H3Ivrbxcn9JBW9OzYWvhbm%2Bd7rjqn43Lccwx9vhzKVpDVwe%2FMshYuJQnpajAqCcIwNPQ8jpeEjgRv%2Fb%2BNgOP4xLrD4Ob19DXDysYUp6AmgBPdoy5ZRkZornkUq5gyWJq9V%2FX9e%2Fsaib5sUE8hXWufFXnyzoumCrlOg7KrU4TI59VfDG1sgkV%2Fm8VXkWp8Yazt%2BaTrZU7XcZ%2F&X-Amz-Signature=4c7a6b8c1d7b2f46a632c6d36e31ea965ac4b7cdf928070e303638655ec12197&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYCCIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnbc3tr0uwG9yf8QgiqnWEwohIK94nK7t%2B%2BweHFE0kQAiEA6PypwuXXIY5QxF1Rg%2BfMpFT0WH5bAGcx0BoEvB8FdqsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeia6DpktvtN6kjWSrcA9cEiXg%2BkGOo9CvvgCcGC3w%2FCENPQ2LjiKW%2BHaQQOGxgMflh93jOgpXugXbQQeGJ3kZiGnYvN8Tu5w2o7rZwpoBIgA0aDo3zE2VF8EPZMV9b3qqdHYfcgZbAlj3nl2lBZm0FQvGOSG3AbjKtRkqPmmha4t1rVuPupa8WXoZ7FhlQzJmsYqZWwA%2BoW2zJI2M7g5b0FPbRrxKSiAuwkTlTWpv18Nf6SQ9%2FYz9LZjw%2BmMpJc18nzWg6ffIGX3tf9u53RsU9J15FQa3TexP5yuC%2BptgFfWCvHUs5ZBPU%2BovVG1yl67UYly0uXEvEV%2BO7rSBNiq1kLHPWrhmDVpc1Tlejc7S2lswjP6cE3XJHtzMsqfQAMngQAjbHCRJB%2FgooNGOvAtMtzlEX8Y4MeDgboktZs0LO0L5Sg%2BtqAFn9lQXENoYITFVRKZWuakJv59qL%2B8pER7qLXj115JYX8jm4uhLbCJR8NYUXINZrAARN5F3be7iAhDb826p5lTZPkZG9O8yQBf1cC3D2F0nZcjDEKZPDEDxiAE0e0K5HtwVXMnuXeoO4%2FjAcevHRZ4ijb%2BSiHng7XdGI%2FiU25NG367aqSUCEo%2BFAauIbypyjI%2FrTJLOx6%2F9X0PVsyTyF4OlpiWB5MMqv9sAGOqUBtKuvQbtqKg202Ad7H3Ivrbxcn9JBW9OzYWvhbm%2Bd7rjqn43Lccwx9vhzKVpDVwe%2FMshYuJQnpajAqCcIwNPQ8jpeEjgRv%2Fb%2BNgOP4xLrD4Ob19DXDysYUp6AmgBPdoy5ZRkZornkUq5gyWJq9V%2FX9e%2Fsaib5sUE8hXWufFXnyzoumCrlOg7KrU4TI59VfDG1sgkV%2Fm8VXkWp8Yazt%2BaTrZU7XcZ%2F&X-Amz-Signature=213f6022fb518e093d4a5dee6f6e57722302e24ef140854124a9c9353d450578&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYCCIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnbc3tr0uwG9yf8QgiqnWEwohIK94nK7t%2B%2BweHFE0kQAiEA6PypwuXXIY5QxF1Rg%2BfMpFT0WH5bAGcx0BoEvB8FdqsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeia6DpktvtN6kjWSrcA9cEiXg%2BkGOo9CvvgCcGC3w%2FCENPQ2LjiKW%2BHaQQOGxgMflh93jOgpXugXbQQeGJ3kZiGnYvN8Tu5w2o7rZwpoBIgA0aDo3zE2VF8EPZMV9b3qqdHYfcgZbAlj3nl2lBZm0FQvGOSG3AbjKtRkqPmmha4t1rVuPupa8WXoZ7FhlQzJmsYqZWwA%2BoW2zJI2M7g5b0FPbRrxKSiAuwkTlTWpv18Nf6SQ9%2FYz9LZjw%2BmMpJc18nzWg6ffIGX3tf9u53RsU9J15FQa3TexP5yuC%2BptgFfWCvHUs5ZBPU%2BovVG1yl67UYly0uXEvEV%2BO7rSBNiq1kLHPWrhmDVpc1Tlejc7S2lswjP6cE3XJHtzMsqfQAMngQAjbHCRJB%2FgooNGOvAtMtzlEX8Y4MeDgboktZs0LO0L5Sg%2BtqAFn9lQXENoYITFVRKZWuakJv59qL%2B8pER7qLXj115JYX8jm4uhLbCJR8NYUXINZrAARN5F3be7iAhDb826p5lTZPkZG9O8yQBf1cC3D2F0nZcjDEKZPDEDxiAE0e0K5HtwVXMnuXeoO4%2FjAcevHRZ4ijb%2BSiHng7XdGI%2FiU25NG367aqSUCEo%2BFAauIbypyjI%2FrTJLOx6%2F9X0PVsyTyF4OlpiWB5MMqv9sAGOqUBtKuvQbtqKg202Ad7H3Ivrbxcn9JBW9OzYWvhbm%2Bd7rjqn43Lccwx9vhzKVpDVwe%2FMshYuJQnpajAqCcIwNPQ8jpeEjgRv%2Fb%2BNgOP4xLrD4Ob19DXDysYUp6AmgBPdoy5ZRkZornkUq5gyWJq9V%2FX9e%2Fsaib5sUE8hXWufFXnyzoumCrlOg7KrU4TI59VfDG1sgkV%2Fm8VXkWp8Yazt%2BaTrZU7XcZ%2F&X-Amz-Signature=31bde71e85b6d7b20beffdf82c09f11ecbcff479cdbf8ee8f5cefbc492e96458&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CBQMDVM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHROLbAOUSZ5pT8m6rDe%2BUWLiu6%2BAXP16phwg7fWwx1AiEA0POuAxYhWFchXLMbPT1Mvr5GOb%2F2sQ7m88EqisJUo%2FgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsLcfrAG7zvTPKsDSrcA6H0qcQLGiGPSC2BS4VjKgGJJTFWa3kjNv36Hoxsb7KPY%2B1eRksQnjK00wB0ZPbsFBVU2wS0rxQ%2FzM9BeU5ddJVzjklBMRpHO4c5cY1b5Rm%2FwSeb0wJ0CR9bET%2Fs%2BrgJlOcoG2204FKu16dFj1C7vtI97Crv6VE4PWT8CmU5s%2BMXIPlXl%2Ffqu64h16s06MkOLccCUODKXDMh53MBMhWVyZLosOqH1hNzEhq%2F0CeA7uB4Y4YZ2VL554%2FF384zRWjgn48OdQ1mrEzl%2BEzb59JtylmgLEfoRcA59wgdlNDYrgIN6i86JwZYTbUI95EuVNDnYkM5o1Z1YzklbJzc0z%2FdcvETtaLoyOUqqhqFCa%2FiYdDMJBe6hr6w7wcIh4Jd3OGx4ZHBYg1F2ZYcLQ5bis%2F0US%2BtHUIXyZWLl0i9ADiWYBifKg90xgjuQJNndbP5QgImaO5TGlFewuTp1y3TZIONxDbwIV8eLiAoZh%2F5xo%2BDI5axwk9K%2FxecUfSTyTw4qXWeHtvvc4Snl4oIPBrtD3x4sMk%2BlPg8ch0PXQKWFg30i4tab1sZEZJwf6%2FpRrD5AIj5%2FmyCOVRUe1N2EiEevTB%2Bzxzw6FyLcfrFMepFxQ%2Fn7JUKjkEYZaSmszAehPfiMP2v9sAGOqUBwx3o1BgysK4qtnT2owci1XVWcFnWZRZpBzLpHd6MBBTXUdGsoaif4lUtZRnJ0BRrGY3EhyYCkaVtrWFegXlOoVZy%2BJ12Yx2mgL7xZRububVnF8Ke5b5kBslSFQl6wL00a90DdF5nj%2F2Y5a3td3r5iDX1NokbV8ORhN89v7SQd0c7oFVuql3BJQlLYxYWq6dQl3XT45Vcmc%2BUrz6sFf%2FEbISwR83G&X-Amz-Signature=86ce2ac2c83656d8865e6f6f371331feda89593d7e68c0424734cb4f6c949fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3Z54G7Z%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmNPhynXTf1h8t9jXbKQYccHYnZ%2FxtbMmgAbBE31f6hgIgTAuPcbQgiKMa201st%2BXcFa4eRE%2FTUZ1B6COBquda4mUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNkBmXr9W7MjhsUXircA%2B01k3gUnB8jbcojZ2IQpkTr0YlznyBMadCQWxROor8kaRPOVxFRvKVRzVzS9M%2FWnFy1gHfTnE%2B%2FjkOflPeMaScqQCs%2Floi5uUXrL2%2FdL2MBlc1sQVcMagJmmD30fX7T2BSlq0%2BD1u4dC1dfPT3Z0hjZcMYGVwH2alLVYxLZgG%2BYiJ92iHZAIqDI6iYLzxqVfHueHC3BICEBsrFuxZbapFw8g9AmBYh2fcC9MsQ1KUgekY62Lf82JLMFUGuAQzymjp5Fr9ug9QAoV0DdDFJbP2Zxgo6viTg55u76VeW5stp%2FYdLFNY%2BG%2FNDOFklMgjscQ14TN5G1gUqOnt3NpncI7dBq8ztC0LgAkBs3NfUGlLsUXLa8Ig2WSWMzzN9Q9QeJtNVzaV%2FxwEa4RUxf%2FoBinQwE2Y24mzFjrPWbRleOGu7%2BSUbgL%2BJEbmLihlafR%2B7WCpvS4mIq2Ws8WG73joz0jqnioaiIOAoomBPSiXLESQNcO66FK42Ru1hs4SW5t5NdAZNnABwd%2FT00jaYOgOPrni1hJs09QSUK3O8rBw8BAIL2nJ6F%2BgZkxO%2BBXqB6ZWYaphe0og2VuSotcw%2FEqOxj11hI39KkUw29RsYmq2YRWEuWvwUAw3ve9HbEasz4MLuv9sAGOqUBZABjxayqkUQj7YwYU9sPfNUI7aly4VjKdszPjVUMJARhKUusKZOxk%2B0SDOFqBVwOx5hC0tMoT71SZQHLLe0iQaQ3xUlIq4Llr3XHjZ8OEi5DC5O7bo%2BQwBAy81C%2B7hq09Q6NciQSAn6YLRg1%2F7WVyINS9byyZmVa%2BtxkqBIwCiQgJi%2BGVgB9yE21dwZM%2F7408WuzTer7NGKNU4vu1n1hc9fjUhX8&X-Amz-Signature=4de5d1172c7e7dbf010374714ea3495a62df0e2686f5fd1f9f91d9539fc4b59b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPYCCIQK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnbc3tr0uwG9yf8QgiqnWEwohIK94nK7t%2B%2BweHFE0kQAiEA6PypwuXXIY5QxF1Rg%2BfMpFT0WH5bAGcx0BoEvB8FdqsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeia6DpktvtN6kjWSrcA9cEiXg%2BkGOo9CvvgCcGC3w%2FCENPQ2LjiKW%2BHaQQOGxgMflh93jOgpXugXbQQeGJ3kZiGnYvN8Tu5w2o7rZwpoBIgA0aDo3zE2VF8EPZMV9b3qqdHYfcgZbAlj3nl2lBZm0FQvGOSG3AbjKtRkqPmmha4t1rVuPupa8WXoZ7FhlQzJmsYqZWwA%2BoW2zJI2M7g5b0FPbRrxKSiAuwkTlTWpv18Nf6SQ9%2FYz9LZjw%2BmMpJc18nzWg6ffIGX3tf9u53RsU9J15FQa3TexP5yuC%2BptgFfWCvHUs5ZBPU%2BovVG1yl67UYly0uXEvEV%2BO7rSBNiq1kLHPWrhmDVpc1Tlejc7S2lswjP6cE3XJHtzMsqfQAMngQAjbHCRJB%2FgooNGOvAtMtzlEX8Y4MeDgboktZs0LO0L5Sg%2BtqAFn9lQXENoYITFVRKZWuakJv59qL%2B8pER7qLXj115JYX8jm4uhLbCJR8NYUXINZrAARN5F3be7iAhDb826p5lTZPkZG9O8yQBf1cC3D2F0nZcjDEKZPDEDxiAE0e0K5HtwVXMnuXeoO4%2FjAcevHRZ4ijb%2BSiHng7XdGI%2FiU25NG367aqSUCEo%2BFAauIbypyjI%2FrTJLOx6%2F9X0PVsyTyF4OlpiWB5MMqv9sAGOqUBtKuvQbtqKg202Ad7H3Ivrbxcn9JBW9OzYWvhbm%2Bd7rjqn43Lccwx9vhzKVpDVwe%2FMshYuJQnpajAqCcIwNPQ8jpeEjgRv%2Fb%2BNgOP4xLrD4Ob19DXDysYUp6AmgBPdoy5ZRkZornkUq5gyWJq9V%2FX9e%2Fsaib5sUE8hXWufFXnyzoumCrlOg7KrU4TI59VfDG1sgkV%2Fm8VXkWp8Yazt%2BaTrZU7XcZ%2F&X-Amz-Signature=dd1e83440e6d717ca5bea35870f8bb120e2d5c7c5e983cafe5667d1da0222515&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
