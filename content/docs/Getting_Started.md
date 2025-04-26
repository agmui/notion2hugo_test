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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R2TR4F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfoA12pSWP7xNmD7Vz2Xi10R3mku3Lvv2bMoWTnoGGQwIhAL21OHi5el9qvy9QOj399cCcY0Ee53GANbhRqqWEMRu%2BKv8DCEAQABoMNjM3NDIzMTgzODA1IgzMXGhhQrcXhrC5kzEq3AOCMMwQExEhlEbtRVYL2BgQe91tiN9dlYAOGaDBpfWhHbDJFtkWSpmFa2Sj3%2B6XbxGyx9mEleiU%2BAaPw6HiSxFyXlqKU%2FrvIL2GuehYXFv4po%2FXisAPfSOa5sU%2FFfza9Vy6rUjQDVaD7%2FWcdyWB85jPZKXG2VHTWqSF1QA61AGjOH3aABm6S73iD%2B0DdUj6Javeayo9BVnmGGeA1eNDVJjQo%2Fdl6EiCm2Xib2dySwAfysaVGOdhjKjB8%2FyrKb1J1CPFYjlw8ITHyNI%2BpONE3BtTtREPp7dgNqMJhQR3%2F7wpbtckrwKbzJQ%2F4HxdyF%2FDESIyQQ1FdrKX9%2FL9yKz5fPHS3yJMRa0fucx%2B%2BKOcYjldOOQLh5af%2BVqBVUuAQScQM3bDvkZRUo73jly3rTHkQ7d9gPikSa4rjQaqQhzeonxoeFesRZPv3R3%2FYvkj4HjAK7nIkXKyloVitkm%2BSLI1pqZwAaopaI78csmYLnptpc71OxxwYQWHeahhjhjqwhwBeXd0msD9464dQv6csQp2a91zrP14txajXS77RSY3HfZmZE4fLBbqfYjH%2FlgGGTt4RxVKqrx6MgEuOh8qdBoAgzJ75ucVd4di8igVBFtWzA6kHPtTDT%2FYvS84kQv3hzD2g7LABjqkAWBfnZsqXNLJcRMYtzIqSUR74YtV4rgoUu2yNh4QfuYUqvQaIVpfxUI%2B6EepWqsAVhpIOcv7uOR3Bm2XPpUZYdiANIH56r41aVpb5NTdNvF%2BXNWnFcUhWJ4oF2A3L2lSWSeyHMPDEXBln2xjrUA7V8CqSQeHvtWRrkWaOpBdiBhecJ3A1vGuISmof%2BMFmSIS%2BQHhgbobODeYha2OtkEmzicFgX71&X-Amz-Signature=92253b6eb1434f9578d95a6056dc284bedc045ece99b5c0beb2acc091ea20276&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R2TR4F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfoA12pSWP7xNmD7Vz2Xi10R3mku3Lvv2bMoWTnoGGQwIhAL21OHi5el9qvy9QOj399cCcY0Ee53GANbhRqqWEMRu%2BKv8DCEAQABoMNjM3NDIzMTgzODA1IgzMXGhhQrcXhrC5kzEq3AOCMMwQExEhlEbtRVYL2BgQe91tiN9dlYAOGaDBpfWhHbDJFtkWSpmFa2Sj3%2B6XbxGyx9mEleiU%2BAaPw6HiSxFyXlqKU%2FrvIL2GuehYXFv4po%2FXisAPfSOa5sU%2FFfza9Vy6rUjQDVaD7%2FWcdyWB85jPZKXG2VHTWqSF1QA61AGjOH3aABm6S73iD%2B0DdUj6Javeayo9BVnmGGeA1eNDVJjQo%2Fdl6EiCm2Xib2dySwAfysaVGOdhjKjB8%2FyrKb1J1CPFYjlw8ITHyNI%2BpONE3BtTtREPp7dgNqMJhQR3%2F7wpbtckrwKbzJQ%2F4HxdyF%2FDESIyQQ1FdrKX9%2FL9yKz5fPHS3yJMRa0fucx%2B%2BKOcYjldOOQLh5af%2BVqBVUuAQScQM3bDvkZRUo73jly3rTHkQ7d9gPikSa4rjQaqQhzeonxoeFesRZPv3R3%2FYvkj4HjAK7nIkXKyloVitkm%2BSLI1pqZwAaopaI78csmYLnptpc71OxxwYQWHeahhjhjqwhwBeXd0msD9464dQv6csQp2a91zrP14txajXS77RSY3HfZmZE4fLBbqfYjH%2FlgGGTt4RxVKqrx6MgEuOh8qdBoAgzJ75ucVd4di8igVBFtWzA6kHPtTDT%2FYvS84kQv3hzD2g7LABjqkAWBfnZsqXNLJcRMYtzIqSUR74YtV4rgoUu2yNh4QfuYUqvQaIVpfxUI%2B6EepWqsAVhpIOcv7uOR3Bm2XPpUZYdiANIH56r41aVpb5NTdNvF%2BXNWnFcUhWJ4oF2A3L2lSWSeyHMPDEXBln2xjrUA7V8CqSQeHvtWRrkWaOpBdiBhecJ3A1vGuISmof%2BMFmSIS%2BQHhgbobODeYha2OtkEmzicFgX71&X-Amz-Signature=54e722765782a96916d1a235873ee354dafa1f46a55575f45311cd81051570d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CNXUUF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEFkxgKopnbC5n09rSXjTElKHCu0XCECgfUxAxUAt2IwIgRcDjb57EtMqSObndhbbgYiyaLvXAcd0Q6phTnkH8%2FREq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIWIvBnYVQtfx8qGBircA9N10hfi8PSE%2BzmtJXCeaLnSydrMj83IZIe6quEi9MeBdaRFmewZ%2F5LpMuDq8kBPUher7oMa5Igga%2FUlmjhKy1rl39H28w8afqB8X8DVGuUAHRMRW%2F%2FR3Rw7dnBXwOoWgILx%2B%2FrDoUtvRezdecXPWz4ZRnf2W7kOLedtqHr72KxrxA6eKh34bEOt1vlGofmyHwwPi5khR5LghMsP2coPUpbhVHjYYi4zp6k1oHNsBmzGsv8Pma2wOm7Q2Sf%2FzBPM9qduLQcci86461%2BbK159jA3tKCWE3vFwYrxj88kn65CsV%2Bglz5u%2FpwijQfqMf5tbZdOvysX1irsOJ%2BjgQxxITX0C97vro8GIi5Mq8iu4XG%2BdUnBCOn7%2B5fbNd7wy%2FdjxmsBJGG%2BWF5NjNP7qg8tVF5BKuELkykYoZ2ofhzG4UujY1D8dkol0Kd%2FjrYwZ07x5inZhfr1ndZNnuMoQL2aNcHivq8YqCM5MbsbRoi5ijtHN5Vy9rXwt4T2aLgNmupAskIZ8D5wOZ7dLasPw8m2MK%2FkVqefFUS5BnpzD7onPv%2BbzTJo83Q5tti%2BJKuvxRbYDKYMtZLwSS9S72Uw7UcGCvG5weV3mb1WcHXaIDcsuZhKNelYYUCHjLQjvafJEMO%2BDssAGOqUBLj%2BzwD2Qq3gWyGrJDtoMEDbg9q1PXoReNa5cqpn5fOv7p7TvaoK3VpJk7jOFSqobwRmL9ezOqFIzCdTfZtqr8pB7QPNT3%2FzeGt5GsJnYgKMCfFhm3QjsddefW3JyjGjAGJ62bUFZQr8U44OzkNeBDzEmrB%2BDjuWOb7NNkOicL7uCxL1nq0fEhB7cAE6hzeyc%2BR%2B1xAY%2BKSnnwLCTu1CgCUQUPO%2FA&X-Amz-Signature=e884afe5a158effecc4f9856dda025e905e2a12fc342316f5e1a3467b9c9b055&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJE7VE3W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpIV5MODPrTU2qBiHS9izPTSaJ939purkVLXEtI936DAiB9HFVtdOLwTcEyiEEII72k6kJvedBawDICdUe%2Fx%2B%2Bx2Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMxncDOd6CiHp7IMbEKtwDCg%2Bt1lnm7cHsFrq4XppP18161vK%2BSXzkPSh1FVNvDn0Fcp0iDuS2ttBLJhsCaIxYCRmr3cbl3XHWAdD1v%2FCdiowsnupLgYNNzDb5P1FdbFNaQFP416j6qOqHOutYtl9smTroIFDsNjLygHc2K%2BKv8fzgurE3T3ziQJoiCgIRBerY22LoN1g2lqLfGStYU89avrWlVKmUjuZVNqm%2B3a4KAdI09XVRJfJmJKomL8hAaYoLiAUyFbFXRLUOTNhMtnuqn2rxJ46iwFLumcJe1bUAT0QAERAhPmpbwCIEgNx4xrw7rmMUYZ0RuylXyicgXixA7eY%2BH%2B9FC0BYVWMGOYE%2FpQPM%2FYl2MIUv2jjIyQSw2Ct0KexRZBBRU7xM8GcjFlvIxvotQRnmXi%2F2Cl6%2FDK4kk%2FJAdr%2BPrRehq6W%2F5hW7lnbKncY0nT2eIz5f7XHT139bk7ZOalcESdCr3ULMRpbDAAi%2F7SPmpYzv0%2FGaCM5wH6Jm7EenmxVAJ1lTdu7iy7FVRclaaV4qLdc4NZo%2BYaE%2B6lfoJE29OE0pWQCQT%2FOaf2WDBG7WIV1VVZ2i1pUPjKrb7Kkf%2FX2BEGGmySvVbsOxGVOlsNrVxKfbGkegEpOFUtfWTXbeC4qUMqJH6dIwp4SywAY6pgF6nPmU2d%2BdPfE3O%2FJUqkg5%2Fqo8DdvcR6BjQLlytJfGqU%2BYgS3634R9aPlLz5f5NAyzjnA6xLJq%2ByPSUyXHGN3s0MuQ%2FevWiL%2Bhv%2BjHEmf%2BExVt3wV9CJ1jFfAwcwP%2Bvrmtpoi639SOlp5qTOYtkFDFmpeyJ8PiId1fzV43mQwwPic7YN5wz6AlZGraEsxf6aR6uLiVkaNMcvTwXENskyPy41dSDPRb&X-Amz-Signature=6617d41443932ca6173ec447791778aefa96b8fa4dd81e65220d69af8528e000&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6R2TR4F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfoA12pSWP7xNmD7Vz2Xi10R3mku3Lvv2bMoWTnoGGQwIhAL21OHi5el9qvy9QOj399cCcY0Ee53GANbhRqqWEMRu%2BKv8DCEAQABoMNjM3NDIzMTgzODA1IgzMXGhhQrcXhrC5kzEq3AOCMMwQExEhlEbtRVYL2BgQe91tiN9dlYAOGaDBpfWhHbDJFtkWSpmFa2Sj3%2B6XbxGyx9mEleiU%2BAaPw6HiSxFyXlqKU%2FrvIL2GuehYXFv4po%2FXisAPfSOa5sU%2FFfza9Vy6rUjQDVaD7%2FWcdyWB85jPZKXG2VHTWqSF1QA61AGjOH3aABm6S73iD%2B0DdUj6Javeayo9BVnmGGeA1eNDVJjQo%2Fdl6EiCm2Xib2dySwAfysaVGOdhjKjB8%2FyrKb1J1CPFYjlw8ITHyNI%2BpONE3BtTtREPp7dgNqMJhQR3%2F7wpbtckrwKbzJQ%2F4HxdyF%2FDESIyQQ1FdrKX9%2FL9yKz5fPHS3yJMRa0fucx%2B%2BKOcYjldOOQLh5af%2BVqBVUuAQScQM3bDvkZRUo73jly3rTHkQ7d9gPikSa4rjQaqQhzeonxoeFesRZPv3R3%2FYvkj4HjAK7nIkXKyloVitkm%2BSLI1pqZwAaopaI78csmYLnptpc71OxxwYQWHeahhjhjqwhwBeXd0msD9464dQv6csQp2a91zrP14txajXS77RSY3HfZmZE4fLBbqfYjH%2FlgGGTt4RxVKqrx6MgEuOh8qdBoAgzJ75ucVd4di8igVBFtWzA6kHPtTDT%2FYvS84kQv3hzD2g7LABjqkAWBfnZsqXNLJcRMYtzIqSUR74YtV4rgoUu2yNh4QfuYUqvQaIVpfxUI%2B6EepWqsAVhpIOcv7uOR3Bm2XPpUZYdiANIH56r41aVpb5NTdNvF%2BXNWnFcUhWJ4oF2A3L2lSWSeyHMPDEXBln2xjrUA7V8CqSQeHvtWRrkWaOpBdiBhecJ3A1vGuISmof%2BMFmSIS%2BQHhgbobODeYha2OtkEmzicFgX71&X-Amz-Signature=259b64af89611169f17edd322284d3182262f120e85bff6eaefb257a8784f86c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
