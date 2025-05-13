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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ7XSXE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdPyxE6b7OPSeQCl0ocB8fL9epDfBkXU5PWcHsPg4g3wIgaawKKAhD4IRGv6%2Fwx0%2BTYEP00E27Wbj2iEkW7s%2FpTuUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdkUg8pPxXBH7GJ8SrcAzPAT9NIzuEcoR3V9WVsUtAjzXfURwC8vuKCYerzcz8nT67Nq7M4hLTdgxHEp0O%2BNWYSxRmZL7NNgZPt61wmRIyolee4nc98RnX6HrHn8ffwV3B5cQXeP8tmqeee%2Fb8KQL0pncSY9RlH3YfRlQTc1RORPOV9woGb7hdPAtVu%2BJvLD2nwxna26pYaQAZMSlZmopmwTwDcSXS7m72QnSvIm%2BtBKw%2BC79EGrEOTLtvo%2FDOrgAbGx43bQybH8k0SNa4s2iqqL1kTkygwuskHEfCP7tRqy7SXb0wiMhdjadbbpB7r1kGPNHH12wO7tLKi5lg7qVQ%2BtN83LmbwUuA%2FylsS4vs3PdZP9pNkOA%2Fu1mxeaSggq%2BZ2Bo50mSS8kEUnYz4l8V7HzibhyG9ngUvafD6cnGSLNYaQPgfRkaS8Q3T1DipSlO1RNMPOL%2BV6jeHXLbBYvrxzDCiqC7yqP%2FZjXzFxo%2FfGoX7ul2AEhi7efOKua1FCYncVKjdeaTnAa%2F0Jg51dwbeqHg%2FD3xtyW9nOHR3OZ4tlkrc8NdQEPfPOjGvda%2BH6dTuNNZ4rLIbp9DN9Hza%2FZyz8Zux0Nll1KhOGzCAM0PqVNrk6hu50vc6saZp45QUa9D7VdaDhEALMtFDdMNSRisEGOqUBkR%2FPQgmCU7zGeM45d7nNV5AHboKRWGD4UU%2BnmqLcXYCtlsvaF9p1Cypgr8kTbkfRFG23mIii4B8Jdhoqibg9cgBZfe8meMi%2FemP5bBDMRMJ78hlqhVThzDSCdXSyuwqTLDxHZOOVgxysxshiz5mhJnPB6YsRTU9jV%2FEidzBPpxG1PQNNMBQuwzpqV4BY8%2FJOgKWRzTqpgM8UJF1XU4NrP2v3a4QH&X-Amz-Signature=cbe638c366cab8c0954ad24b7b9eac90a5904cf7ecfc3b7cb12e9a1a6485f8ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ7XSXE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdPyxE6b7OPSeQCl0ocB8fL9epDfBkXU5PWcHsPg4g3wIgaawKKAhD4IRGv6%2Fwx0%2BTYEP00E27Wbj2iEkW7s%2FpTuUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdkUg8pPxXBH7GJ8SrcAzPAT9NIzuEcoR3V9WVsUtAjzXfURwC8vuKCYerzcz8nT67Nq7M4hLTdgxHEp0O%2BNWYSxRmZL7NNgZPt61wmRIyolee4nc98RnX6HrHn8ffwV3B5cQXeP8tmqeee%2Fb8KQL0pncSY9RlH3YfRlQTc1RORPOV9woGb7hdPAtVu%2BJvLD2nwxna26pYaQAZMSlZmopmwTwDcSXS7m72QnSvIm%2BtBKw%2BC79EGrEOTLtvo%2FDOrgAbGx43bQybH8k0SNa4s2iqqL1kTkygwuskHEfCP7tRqy7SXb0wiMhdjadbbpB7r1kGPNHH12wO7tLKi5lg7qVQ%2BtN83LmbwUuA%2FylsS4vs3PdZP9pNkOA%2Fu1mxeaSggq%2BZ2Bo50mSS8kEUnYz4l8V7HzibhyG9ngUvafD6cnGSLNYaQPgfRkaS8Q3T1DipSlO1RNMPOL%2BV6jeHXLbBYvrxzDCiqC7yqP%2FZjXzFxo%2FfGoX7ul2AEhi7efOKua1FCYncVKjdeaTnAa%2F0Jg51dwbeqHg%2FD3xtyW9nOHR3OZ4tlkrc8NdQEPfPOjGvda%2BH6dTuNNZ4rLIbp9DN9Hza%2FZyz8Zux0Nll1KhOGzCAM0PqVNrk6hu50vc6saZp45QUa9D7VdaDhEALMtFDdMNSRisEGOqUBkR%2FPQgmCU7zGeM45d7nNV5AHboKRWGD4UU%2BnmqLcXYCtlsvaF9p1Cypgr8kTbkfRFG23mIii4B8Jdhoqibg9cgBZfe8meMi%2FemP5bBDMRMJ78hlqhVThzDSCdXSyuwqTLDxHZOOVgxysxshiz5mhJnPB6YsRTU9jV%2FEidzBPpxG1PQNNMBQuwzpqV4BY8%2FJOgKWRzTqpgM8UJF1XU4NrP2v3a4QH&X-Amz-Signature=014df3883a5af43b76d48a3747e61b206233be90b77b35edf606599f3542c949&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ7XSXE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdPyxE6b7OPSeQCl0ocB8fL9epDfBkXU5PWcHsPg4g3wIgaawKKAhD4IRGv6%2Fwx0%2BTYEP00E27Wbj2iEkW7s%2FpTuUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdkUg8pPxXBH7GJ8SrcAzPAT9NIzuEcoR3V9WVsUtAjzXfURwC8vuKCYerzcz8nT67Nq7M4hLTdgxHEp0O%2BNWYSxRmZL7NNgZPt61wmRIyolee4nc98RnX6HrHn8ffwV3B5cQXeP8tmqeee%2Fb8KQL0pncSY9RlH3YfRlQTc1RORPOV9woGb7hdPAtVu%2BJvLD2nwxna26pYaQAZMSlZmopmwTwDcSXS7m72QnSvIm%2BtBKw%2BC79EGrEOTLtvo%2FDOrgAbGx43bQybH8k0SNa4s2iqqL1kTkygwuskHEfCP7tRqy7SXb0wiMhdjadbbpB7r1kGPNHH12wO7tLKi5lg7qVQ%2BtN83LmbwUuA%2FylsS4vs3PdZP9pNkOA%2Fu1mxeaSggq%2BZ2Bo50mSS8kEUnYz4l8V7HzibhyG9ngUvafD6cnGSLNYaQPgfRkaS8Q3T1DipSlO1RNMPOL%2BV6jeHXLbBYvrxzDCiqC7yqP%2FZjXzFxo%2FfGoX7ul2AEhi7efOKua1FCYncVKjdeaTnAa%2F0Jg51dwbeqHg%2FD3xtyW9nOHR3OZ4tlkrc8NdQEPfPOjGvda%2BH6dTuNNZ4rLIbp9DN9Hza%2FZyz8Zux0Nll1KhOGzCAM0PqVNrk6hu50vc6saZp45QUa9D7VdaDhEALMtFDdMNSRisEGOqUBkR%2FPQgmCU7zGeM45d7nNV5AHboKRWGD4UU%2BnmqLcXYCtlsvaF9p1Cypgr8kTbkfRFG23mIii4B8Jdhoqibg9cgBZfe8meMi%2FemP5bBDMRMJ78hlqhVThzDSCdXSyuwqTLDxHZOOVgxysxshiz5mhJnPB6YsRTU9jV%2FEidzBPpxG1PQNNMBQuwzpqV4BY8%2FJOgKWRzTqpgM8UJF1XU4NrP2v3a4QH&X-Amz-Signature=b7e30635bab22a572ee0e02788da5febd199996d38139e3148211bcabb396412&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYDPL3LG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDKDuKkAsVWz0%2FcYkiezAoqrKxeO8gpRf9JO0%2BMhSd01AIgVdE8bczclY4olat9PfmZb5M54LGlLYWaCjQypJywEkQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKk3%2FqwAaaQ7q03YSCrcAy%2BQC735jbXkL2utDJbRbXLzM9yEu02GC%2B7qrhzlQ8e6lK%2Bk%2BONbpMNZ%2FP6nOqxxFfzjWoBl%2BqUOc38T0IKSo4OGtsaa0YY8jzoFd4pBCGAj1TgpWJSEWHIb10OUebXuINAm%2B%2B0%2FJ9hVecpQsnaaxYkJx%2BlkW8GSA4myufiXNL4OcX6IVZfdIkxW1KwTMnkj5RAC7ksFqku33Hpi7Zxd85pfr6khqPZof%2FKpLiZgEffvn2HN5vEesu8pvDKgbzszhqt5VA1EbRu5DazNwKZxRo6z6Q9RO593QxPmZrkzcZVTx%2FrEZB5dOAKnNm%2FqWp1sQW%2FJEuXT5fbRxOtUwWOvJX%2Bxj5MOO0%2Fmbh3OKat4EZ1GRm1OTAviHqQgGW6NpVK%2BChkjLHqP3SxRflUXeagV6Nh3PQggou6LivWDXDkWbIci9PK6q%2BBF5112V5YSBJ%2FnUrLEyhtYoCNlSLNpcr8g8i21rYf%2BSo%2BBChote7droUezuGoJwUU8IBWCEyE9yJ%2FU6d8sfb25p3zNUyMkpWvVEmKW%2F0NPdhYeVmHAy6cF17FTNORuRH7Eo0CRATmZdsX0ZHrZalY7hl3ky0OWcqyCs6MLHXdh%2FncfT%2B%2Br5ozdOx0M6POQ6rtfYiauR1GLMOSRisEGOqUBeD6WQgOHzFn4%2BsJW%2FjCy5353Xr%2BM4YkXVoGS6yI%2BMfmeZ4JS60wjSP78iTIIctQRe4pqtaoWp7Lrp6VBZVZhp4WxLECRuNm10h%2BsEJaDLpXhqEkLGfWzvfXPjj2o3653Fe9ngEhjYzrZVFjZmoOvdRKb3f%2BjNyYY3DwL%2BKp4ntKa%2FR49XQRDxC4cEkzwplPtFkG79fFzyT48ML40cqSK9ZTvRa9u&X-Amz-Signature=6a7cb5f7e4bf88e91039a58e76cce62d93c7ed95543215359d9731b8283ceb20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTWWPIJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDRO1az2JfWibOJbvgeGY3Wsw5OyfOiWxVKx%2ByFHRS4ugIgUt5Gv9YkwRuOZ7lZhNw0Q2uc8s5SjODrhxPNhB1ucu4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQNHw0%2BAdDbzjqGOyrcAzwslTImmhp4lCk%2BCabU1dB7AulSrYsh%2FaJ0HLJHRS8OznMn8dmxoizCV%2FWBPRSKvwSGvJC79Sk3NMCCrA1XjGZ2rT7mWAGRfnA%2FHPisOFN1wh896kJyGfd4vOJuH4c7pucf5jUSFgqrW%2FeUA9KFYqM2mffQAVQlzwy7JW1mIpS4lOlaJ81aPkCgXnA25MqYfIWy%2Bvr1wXCR3MQo9KmkQ3umVQIhHaTA1MmAEbb4EoJog3%2BGGIBzQg60xdiqLzU5g2wLtaDlIG4PKCoF4P9kVm5liHCGj0s5EEWnPahyxHXZUbUknkRsIREFA3MTct3UsGcTvSExD3yGmC%2FxNe3YqfgPSlwzP7TxyYHYcxUhbqvYxVgQwf0JRFk%2F66AVKSQcyUMkDQ1OZ91j9N%2BRZ8O3gfMh4pSbvuNa2LApYsNi3XvAvppTBunr1rrR%2FlczUnmFfJai7w3IyH5ezOYgjZNA5yYwBgaLzTTw3QFdkj%2FUiaAAkruVEZa%2Fb8FBqb3Ezd6IsoHwrWyMskev3zWZ6Vd23%2B8k%2FlTKtFPgyWSYskUDbE3a3MfVf%2BEhZaPSu%2FfLY%2BIOLgEO6JbFKWF60sKygOqyS5Fs8GyXwLcORqsm0kcbFbkdMMgYKMOQEfoMnXe9MMWRisEGOqUB4bQm1jAxoeAbvtTI8Zt9pykasWZ4V1%2FIBZhBkig28x3z1hp8FORMqDqF7%2FGDYPI9JEos8Om09H7AfH7uxjLeXmgs9ir56Gga6mOWtIqaaJzktz6bmNK7%2FLP7iV%2BvLQ1kVuNNFatXavh3PV3vTSgsj58wx%2FhJ9WmOlYGaO6lm5RB4rRMtz8Ay%2F4G1NVSS0HYbYVxgPY6LYW0ukoUJO8efjjwkYeCk&X-Amz-Signature=8f9466d73c735b382f4828d232070bc4bcda71f923783947d2967dc500e67cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ7XSXE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCdPyxE6b7OPSeQCl0ocB8fL9epDfBkXU5PWcHsPg4g3wIgaawKKAhD4IRGv6%2Fwx0%2BTYEP00E27Wbj2iEkW7s%2FpTuUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdkUg8pPxXBH7GJ8SrcAzPAT9NIzuEcoR3V9WVsUtAjzXfURwC8vuKCYerzcz8nT67Nq7M4hLTdgxHEp0O%2BNWYSxRmZL7NNgZPt61wmRIyolee4nc98RnX6HrHn8ffwV3B5cQXeP8tmqeee%2Fb8KQL0pncSY9RlH3YfRlQTc1RORPOV9woGb7hdPAtVu%2BJvLD2nwxna26pYaQAZMSlZmopmwTwDcSXS7m72QnSvIm%2BtBKw%2BC79EGrEOTLtvo%2FDOrgAbGx43bQybH8k0SNa4s2iqqL1kTkygwuskHEfCP7tRqy7SXb0wiMhdjadbbpB7r1kGPNHH12wO7tLKi5lg7qVQ%2BtN83LmbwUuA%2FylsS4vs3PdZP9pNkOA%2Fu1mxeaSggq%2BZ2Bo50mSS8kEUnYz4l8V7HzibhyG9ngUvafD6cnGSLNYaQPgfRkaS8Q3T1DipSlO1RNMPOL%2BV6jeHXLbBYvrxzDCiqC7yqP%2FZjXzFxo%2FfGoX7ul2AEhi7efOKua1FCYncVKjdeaTnAa%2F0Jg51dwbeqHg%2FD3xtyW9nOHR3OZ4tlkrc8NdQEPfPOjGvda%2BH6dTuNNZ4rLIbp9DN9Hza%2FZyz8Zux0Nll1KhOGzCAM0PqVNrk6hu50vc6saZp45QUa9D7VdaDhEALMtFDdMNSRisEGOqUBkR%2FPQgmCU7zGeM45d7nNV5AHboKRWGD4UU%2BnmqLcXYCtlsvaF9p1Cypgr8kTbkfRFG23mIii4B8Jdhoqibg9cgBZfe8meMi%2FemP5bBDMRMJ78hlqhVThzDSCdXSyuwqTLDxHZOOVgxysxshiz5mhJnPB6YsRTU9jV%2FEidzBPpxG1PQNNMBQuwzpqV4BY8%2FJOgKWRzTqpgM8UJF1XU4NrP2v3a4QH&X-Amz-Signature=e8ac2f8f8b93ae5af0da68760be771b33c5731811e87b9c998799eb2039d8584&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
