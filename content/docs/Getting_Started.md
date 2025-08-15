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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRNP3ZZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDy39fRbgEzucWD7GUCL0%2Bpx%2BkyNdKpXI6ZpbSx%2BdicsgIgG9oAj4Fb3HlojEFPwWOShxqucejlwX3YpQRxO7o4HiQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKFDeBcWBj%2F%2BJm1skSrcA60xznYBFNJIwK1YuNFrc6F1Ph4nbCce306PAhNH9qPgiS4PcjsH7jusx5rDuw4kdcso9VWVuKufobMeZY999b0uAfdDQSG8TG2xO%2FF0s6knL9nKr6B0U%2F9mUfyET1PDEjwNeMUAnmgkrf62%2FWmsv%2BWZU9th10FyGnZ0Fj66uOhuOTFH5BzLtQpPa1xjrcAZccTBakTSB4d6YeA2mf%2BUP3uj1MQni%2FDtHiJjrc7R7NHAlepjAIB3FDD4U1zcLEIA7Vze92YRzdG4kYiUB8w8ornpIPjbca4VbAc84oKL%2BjlgBGUzmHVAGzT9Ca0hYDkwthxwYWKMoFkaFbme38TPqCx9bti%2Bt7kwMx4pKkIREOXNWbHG9RfROVe%2F%2BA4fFWRm3OCoLhngF8zr0iZ5I%2BbqtyNHh9DA6i1rWpqYFX5a8IgArXsrmUByJvAr%2BgNeVKKKdJh%2BrzWM4xwZHluLqCFMOEfWsqGDAvc0e8bcNezwFrKGWXfULTeUqeidPOlVno7oyiQD4ht5fKAiIXuFAOreJZXhn4R78EMf0m3NA%2BliPhKFUPjeoZEGn6qWiFacfVdH8cN8NzUbrKsqZr%2B%2FwVf5jFOBbr6Nawo1PfgYxdLziBj5XYsiODQzGY%2F1Vb%2BlMMWi%2B8QGOqUB8XUslx%2F5ZJTNsvuAp0Y%2FaS%2FujrqGpzUEYcZpzGwIJ8vTI9hBNEbNPjXSxqth88OE%2For08LizDmw0eD9%2FzgcY0iyIjtyTSIYF2ZCJinl%2FqW1LxMO%2B9YSCINYeqnMRQ79qTQOMBwwbaSYGdxP%2Fr1M4t0IgSAQ38vvWgGmQa%2FiKfBTWgBAHjUMImRn0c2eNfj3JbE1m3Ahf7rLxAFJ50atRUiJJRR5A&X-Amz-Signature=e90c799281860be6a5c60255c889b7073a78a4bda7ba8d936f4d96d7dbd6a562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRNP3ZZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDy39fRbgEzucWD7GUCL0%2Bpx%2BkyNdKpXI6ZpbSx%2BdicsgIgG9oAj4Fb3HlojEFPwWOShxqucejlwX3YpQRxO7o4HiQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKFDeBcWBj%2F%2BJm1skSrcA60xznYBFNJIwK1YuNFrc6F1Ph4nbCce306PAhNH9qPgiS4PcjsH7jusx5rDuw4kdcso9VWVuKufobMeZY999b0uAfdDQSG8TG2xO%2FF0s6knL9nKr6B0U%2F9mUfyET1PDEjwNeMUAnmgkrf62%2FWmsv%2BWZU9th10FyGnZ0Fj66uOhuOTFH5BzLtQpPa1xjrcAZccTBakTSB4d6YeA2mf%2BUP3uj1MQni%2FDtHiJjrc7R7NHAlepjAIB3FDD4U1zcLEIA7Vze92YRzdG4kYiUB8w8ornpIPjbca4VbAc84oKL%2BjlgBGUzmHVAGzT9Ca0hYDkwthxwYWKMoFkaFbme38TPqCx9bti%2Bt7kwMx4pKkIREOXNWbHG9RfROVe%2F%2BA4fFWRm3OCoLhngF8zr0iZ5I%2BbqtyNHh9DA6i1rWpqYFX5a8IgArXsrmUByJvAr%2BgNeVKKKdJh%2BrzWM4xwZHluLqCFMOEfWsqGDAvc0e8bcNezwFrKGWXfULTeUqeidPOlVno7oyiQD4ht5fKAiIXuFAOreJZXhn4R78EMf0m3NA%2BliPhKFUPjeoZEGn6qWiFacfVdH8cN8NzUbrKsqZr%2B%2FwVf5jFOBbr6Nawo1PfgYxdLziBj5XYsiODQzGY%2F1Vb%2BlMMWi%2B8QGOqUB8XUslx%2F5ZJTNsvuAp0Y%2FaS%2FujrqGpzUEYcZpzGwIJ8vTI9hBNEbNPjXSxqth88OE%2For08LizDmw0eD9%2FzgcY0iyIjtyTSIYF2ZCJinl%2FqW1LxMO%2B9YSCINYeqnMRQ79qTQOMBwwbaSYGdxP%2Fr1M4t0IgSAQ38vvWgGmQa%2FiKfBTWgBAHjUMImRn0c2eNfj3JbE1m3Ahf7rLxAFJ50atRUiJJRR5A&X-Amz-Signature=b8bf1cf93257b61464901480824424640eb38e0b5f9dc69d2d6c47991eda0588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRNP3ZZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDy39fRbgEzucWD7GUCL0%2Bpx%2BkyNdKpXI6ZpbSx%2BdicsgIgG9oAj4Fb3HlojEFPwWOShxqucejlwX3YpQRxO7o4HiQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKFDeBcWBj%2F%2BJm1skSrcA60xznYBFNJIwK1YuNFrc6F1Ph4nbCce306PAhNH9qPgiS4PcjsH7jusx5rDuw4kdcso9VWVuKufobMeZY999b0uAfdDQSG8TG2xO%2FF0s6knL9nKr6B0U%2F9mUfyET1PDEjwNeMUAnmgkrf62%2FWmsv%2BWZU9th10FyGnZ0Fj66uOhuOTFH5BzLtQpPa1xjrcAZccTBakTSB4d6YeA2mf%2BUP3uj1MQni%2FDtHiJjrc7R7NHAlepjAIB3FDD4U1zcLEIA7Vze92YRzdG4kYiUB8w8ornpIPjbca4VbAc84oKL%2BjlgBGUzmHVAGzT9Ca0hYDkwthxwYWKMoFkaFbme38TPqCx9bti%2Bt7kwMx4pKkIREOXNWbHG9RfROVe%2F%2BA4fFWRm3OCoLhngF8zr0iZ5I%2BbqtyNHh9DA6i1rWpqYFX5a8IgArXsrmUByJvAr%2BgNeVKKKdJh%2BrzWM4xwZHluLqCFMOEfWsqGDAvc0e8bcNezwFrKGWXfULTeUqeidPOlVno7oyiQD4ht5fKAiIXuFAOreJZXhn4R78EMf0m3NA%2BliPhKFUPjeoZEGn6qWiFacfVdH8cN8NzUbrKsqZr%2B%2FwVf5jFOBbr6Nawo1PfgYxdLziBj5XYsiODQzGY%2F1Vb%2BlMMWi%2B8QGOqUB8XUslx%2F5ZJTNsvuAp0Y%2FaS%2FujrqGpzUEYcZpzGwIJ8vTI9hBNEbNPjXSxqth88OE%2For08LizDmw0eD9%2FzgcY0iyIjtyTSIYF2ZCJinl%2FqW1LxMO%2B9YSCINYeqnMRQ79qTQOMBwwbaSYGdxP%2Fr1M4t0IgSAQ38vvWgGmQa%2FiKfBTWgBAHjUMImRn0c2eNfj3JbE1m3Ahf7rLxAFJ50atRUiJJRR5A&X-Amz-Signature=8f59b12568383cc4680d03d593900c579feb78fac18cc205db2bd6357ac56eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6SG6HN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIATzAHw%2FQw0JOtVE7V12XJyjscO4s3weoWZoZJzUZaj4AiBap%2BQpjxeRQUKiVovtjSZSgHdYRteM7NseyJBdEu%2Fnnir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMWB2Ym9YKg6IlwFg4KtwDyTLfaC4lLy6WLE3SjYqU0UBmeVCKQ17XSEs%2Bemg2zOpn%2BupRowCLjPrXku7lzYJ6HgRK0ts5EIF2YbUUDhs1CN1qE2qiU9SoovzMVa8h1nPsJQ%2F53plwGJxf4LroDlB9hxtpwZp0hUQMY3RZmlkL7z7HmPOSjIMQ%2B2%2FTQsqPzDORDQmRUjRTjrrweBzczSqAe5n8NbFiYAylrJ4mQQCrnQJ6zDCT4aw%2B7CBrMaiDbKU69dfOE9JekNwwmlqHKrA%2F7q04YkVB80jC3oKQwp9ahtXYAs5z186%2FmlON3yKgjAaUGLf26358xTPt%2BShezjb0KHtcE6cU%2BXlkKU20yeYjVGtx3FAr76rv7SO1WrPcr0t979c6t6mA0%2FngSPs%2BPRvTWOpd9jKw8R%2BwRAPALEL%2F8sruijBkIJ2LJw6t4ew2tMoVfdTG%2FDK0G79KWjyHgxElMS%2FjhlRXbRG%2FfBR2sPMTtYIgcz50MabjQ7e3xmu51trtJHSV%2BQoc5Jj9kDbV1N%2BL4YxmyqLzZrAc%2FugMQMWlqZ3pq8wChMW4h2uKzR%2BDQDCl3wjRniRik8NROljIHII%2BCSA9pNr%2FNSmAq2DGQk3P7vJ3nyOaGuDaifF5aH95CRtfOp4XweYdGR1jKIMw9KL7xAY6pgGAPCSMnA8RVF4P9ufw4fhVOHtDm5zFdD0EZnZV5Tbnq%2B8UAtekyVK2RDSGLHfw9d740rW3ojPayWTvei8RXCTjXEiz4XTZ8z2o5sfqpmioVF9WkxERaEzq8kTZ4dA9E6Vn5sUSGGYCpvN1ds9G7MLOgGbENNMW6kdAAxq0cWCNjBxOuih28Z2v7eWZMvqYt1rb%2FmNjA6bIRq42EkgRYpp5S6v0jMqs&X-Amz-Signature=87db17f65e035538a9ec683f59fd163cc306f75163689b19142dba7bbd3d5a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HDIXEX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUI1hhYbNASjSHzV6PYeNisuu7ieNOilbvXkIN0H9pJAIhAKdr1evorRNOVyL3Lo43hZLbYkXmftUel4veaAUsk4gjKv8DCFcQABoMNjM3NDIzMTgzODA1IgyKrX%2BQCyLTzC3J9FEq3AOonEb7mHJUwF0XBhTREzHQ9sebh0NgoA1f57CUt7oHyz9rloXu8bf6a%2BQJ4MXp7DQbzGvkkDWyftO0sqA7WHSL3h2AdGEuehntF036lFYzVIgq0PTfvdz1mS7%2FcjY7A%2F2Cm9aJVwkPU8QWckzmYujN%2BTp9QOLQm%2B1JuVrxHCK2500mehmysi1obmtAB1iVL4gaF5CDU0d%2B5jbBPtBk0pcc1Elh3oPehUgEFfN5enk5BrOoU9hWjTGrHLCmpDqOrpKGdCWyoeIeMt5Kqxi7e2eLBXG2IsUrExufQIPAmATgBOTnAylFsMG9alukU71tOX7Kq5ff2amo0d7n0xJRnhv%2BsjY%2B6ieQRWE0EKIUXan%2FUl67Orr5zQur8XweWGx%2FtlE48mnTKA2XV65%2BQGqzUBUYmrOEm3Nk2i7z4eRDxIBVAto%2FvBLkq8y5rpjQrR7YZfpieflZKSBm8yHTpXq5FaRnQ25PRTLnOrAaTWcRIEKXzGmpNRjrFip8SaVP5QXpJAeg0FrQqit2aarIFHsQgMHuxE1JBlUQrKcFVzVXRVfgL9SlNUxojPgxR4BRAUA3qCMmYf%2B6YQMyBapSDPKowNDuF0c0PhOmQdo2T3MSlap8dEx7I3bJABBsUy05XTD0ovvEBjqkAc1sBsoW9A5uDZM9meUwz2XD7H%2B3G2CloBLop8KbrLyK3QuKAUTCMZYdGPF1iLOBomo%2BGgfYGRmSew%2FqDSFwt%2Bpe2FEfXQbYFHwwfcg5C01uw92MOaNoRmPje8PrFl2AGE37WA7x0flmnPM96IUiQljDU%2Bit0fZ1XNNcHbdR7If5iEaUA%2FaXJ0C2wtMWhcv1uqgmaO6WLhNExEVO7ynM8Rq12wBW&X-Amz-Signature=d8caa7c0a5dab75b2b71501406b9927a7ae5ce79aea21b94b247e5f1afcf8423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PRNP3ZZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDy39fRbgEzucWD7GUCL0%2Bpx%2BkyNdKpXI6ZpbSx%2BdicsgIgG9oAj4Fb3HlojEFPwWOShxqucejlwX3YpQRxO7o4HiQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKFDeBcWBj%2F%2BJm1skSrcA60xznYBFNJIwK1YuNFrc6F1Ph4nbCce306PAhNH9qPgiS4PcjsH7jusx5rDuw4kdcso9VWVuKufobMeZY999b0uAfdDQSG8TG2xO%2FF0s6knL9nKr6B0U%2F9mUfyET1PDEjwNeMUAnmgkrf62%2FWmsv%2BWZU9th10FyGnZ0Fj66uOhuOTFH5BzLtQpPa1xjrcAZccTBakTSB4d6YeA2mf%2BUP3uj1MQni%2FDtHiJjrc7R7NHAlepjAIB3FDD4U1zcLEIA7Vze92YRzdG4kYiUB8w8ornpIPjbca4VbAc84oKL%2BjlgBGUzmHVAGzT9Ca0hYDkwthxwYWKMoFkaFbme38TPqCx9bti%2Bt7kwMx4pKkIREOXNWbHG9RfROVe%2F%2BA4fFWRm3OCoLhngF8zr0iZ5I%2BbqtyNHh9DA6i1rWpqYFX5a8IgArXsrmUByJvAr%2BgNeVKKKdJh%2BrzWM4xwZHluLqCFMOEfWsqGDAvc0e8bcNezwFrKGWXfULTeUqeidPOlVno7oyiQD4ht5fKAiIXuFAOreJZXhn4R78EMf0m3NA%2BliPhKFUPjeoZEGn6qWiFacfVdH8cN8NzUbrKsqZr%2B%2FwVf5jFOBbr6Nawo1PfgYxdLziBj5XYsiODQzGY%2F1Vb%2BlMMWi%2B8QGOqUB8XUslx%2F5ZJTNsvuAp0Y%2FaS%2FujrqGpzUEYcZpzGwIJ8vTI9hBNEbNPjXSxqth88OE%2For08LizDmw0eD9%2FzgcY0iyIjtyTSIYF2ZCJinl%2FqW1LxMO%2B9YSCINYeqnMRQ79qTQOMBwwbaSYGdxP%2Fr1M4t0IgSAQ38vvWgGmQa%2FiKfBTWgBAHjUMImRn0c2eNfj3JbE1m3Ahf7rLxAFJ50atRUiJJRR5A&X-Amz-Signature=ccee03a329c07bbf13bc2899c600d24b979527ac0efcccb6390c01c7422caa00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
