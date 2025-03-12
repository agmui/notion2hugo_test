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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RJGCCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCXkMPn13Dx1y5SLYgkVVYVURZwtLsJgt1NoLXskBXW8wIgYf02S9kO3cIG6d3mvXCUNADT%2BJw7JbUCvE%2BxI4tW3yQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkSU%2FgNHw%2Bq%2F3Y2ircA4J3VDhOS9xOzwRrm5tn8mohirxo%2Bc3m1Z2cU5ChIyF6aTl%2BXHM1V9%2FbpB6nyn0DWIywh5gfkFNG7gHxs1CbQTMi%2B8Tm9H4DdJGR0TDZdmSCf8qIHAibaZz3j2zH7TGYTLZQ30C6KvqmiISa6ILxz%2FsHmSxY9O0Ml3x%2BzxUt5bbNenBPoBhvR0KHR1BvdLYntI%2F8zW8GA%2FRwbG3XEmMrQh%2F3xXenRMk22FmeVoOcOn3u7UEKKGGbIHgvQIoIkaCbKlFUrSvkaHlskPgl239uzKQH6QV%2B1DLKAlVE8MGTA95QoUQAEyNYKWSchtSN26q1IdsjcWSWkipxphhtPM9SArquBQ8Q838Lir7azOU6u%2B75DfjZl0mznS8tvYhOuiH9fotXd88G5B8MmDf35WvsyynwgjMadTrM%2BAnoijA23Y6koEWDKGhdhKAOC9r2vHp3yOaRvNnakywrDZ0irx5M7lhMbf04FDJQs4ok24cn9eZQfr5peqpBeeuT%2FD1FltA39zToziZHdyfRNn4k0wfam2lFnVQwlPiECaWcfMK4wpLImhzRofUmKAVKlsfxbEBd6rUAYJhnybeReNIGpQ2A6JjblSzt7mWP7Py6iQ1ldsrplTRMEISZqGKAPfanMJ%2F7w74GOqUBslELnV3aymEGxq852rEjGD3jjIhiuvuQDyA9jO9O2Nd3KVSqbSc488JnF2E2vDY2af3w0%2BB9BihzulC0zfvvx2F29%2FwB6hmpkr0fhjYPFEmZ%2FqjrYrHvO%2Bna662gnaiBieZSRRslIsi%2FkwSiy4Y9U0Wt9Bxl3Qfne0qOcviqJMaXGvEqXnU6h%2FOYug9eH3BhxMiQkflFbnVPq7vGUCxBC6RpVDQo&X-Amz-Signature=ae2310d471279488ab0b532b9c4432570de5eefc1255720390e9ea00b07f57e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RJGCCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCXkMPn13Dx1y5SLYgkVVYVURZwtLsJgt1NoLXskBXW8wIgYf02S9kO3cIG6d3mvXCUNADT%2BJw7JbUCvE%2BxI4tW3yQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkSU%2FgNHw%2Bq%2F3Y2ircA4J3VDhOS9xOzwRrm5tn8mohirxo%2Bc3m1Z2cU5ChIyF6aTl%2BXHM1V9%2FbpB6nyn0DWIywh5gfkFNG7gHxs1CbQTMi%2B8Tm9H4DdJGR0TDZdmSCf8qIHAibaZz3j2zH7TGYTLZQ30C6KvqmiISa6ILxz%2FsHmSxY9O0Ml3x%2BzxUt5bbNenBPoBhvR0KHR1BvdLYntI%2F8zW8GA%2FRwbG3XEmMrQh%2F3xXenRMk22FmeVoOcOn3u7UEKKGGbIHgvQIoIkaCbKlFUrSvkaHlskPgl239uzKQH6QV%2B1DLKAlVE8MGTA95QoUQAEyNYKWSchtSN26q1IdsjcWSWkipxphhtPM9SArquBQ8Q838Lir7azOU6u%2B75DfjZl0mznS8tvYhOuiH9fotXd88G5B8MmDf35WvsyynwgjMadTrM%2BAnoijA23Y6koEWDKGhdhKAOC9r2vHp3yOaRvNnakywrDZ0irx5M7lhMbf04FDJQs4ok24cn9eZQfr5peqpBeeuT%2FD1FltA39zToziZHdyfRNn4k0wfam2lFnVQwlPiECaWcfMK4wpLImhzRofUmKAVKlsfxbEBd6rUAYJhnybeReNIGpQ2A6JjblSzt7mWP7Py6iQ1ldsrplTRMEISZqGKAPfanMJ%2F7w74GOqUBslELnV3aymEGxq852rEjGD3jjIhiuvuQDyA9jO9O2Nd3KVSqbSc488JnF2E2vDY2af3w0%2BB9BihzulC0zfvvx2F29%2FwB6hmpkr0fhjYPFEmZ%2FqjrYrHvO%2Bna662gnaiBieZSRRslIsi%2FkwSiy4Y9U0Wt9Bxl3Qfne0qOcviqJMaXGvEqXnU6h%2FOYug9eH3BhxMiQkflFbnVPq7vGUCxBC6RpVDQo&X-Amz-Signature=0282c78112a46efb12ce9d2f8847ec897be872335fa65a898ffaa9ef9c8ba760&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EEV6AVA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCpAdKwTDNNyjulUstuAhTbC5xy2rf5LkHSnbldOq%2FdKAIhAMT0EUXi7%2Ff5k0af6v5GxB427huGhWwDYmRRUMzBE3h5KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyadtBOUE3IfPwFKDgq3ANfPKMU7OaM8gn28TZhCnMYGNSZAvThZWMgK0q5TsTlGmdqz8TISyLk0Qnt3l%2BrW291%2BUNDgees4YvsjS5HCKJBynwvbCJ1PmVVNiUPryc2dwzQaHqlPUe2BxL%2BiEm7ndKu1KWodAQdV%2Bq6eSA57MGAqKkepOKDsJxJVi1l54dpLDedtnXDBmg8BMCp9NKhmG3wWCnaIEQ9rA%2FhV60eq4esFLOjXtDRYm5JSIrrqKF%2FUeFtT2nbb35EcyDUkgDH4xKbFfa4CWV3IU943RnDaHI3tQAsNOCyl5DcipRYSXd1riZOHYwNI6P5muYmFOyHZt9MTFL6uoDl67R8qL1wI5E0iB3rEdj8G418DhGFzHh24eHWM0GfSNCkjTLnixJ0H6zaUgM5XW2Xh0mcMLvBuITvk6aMCSIdbIO8wKy7qtiE5rXiA9Csvs%2FzpCbwqJ0xJtn0RwBPOYxP9Djx2IzqqKmoJ35ZHrG19ADYVeNiNWwc1MqOaEc%2F%2FFBfh7jSbvE0RVLgDhcIqUqOkOSvKQkPLDYdDn4fgJpWyUzN4gJKnq7L%2FbSq1TlcJtYaIqOoTRC46ZDUrzCCSx%2F3InxbXhg%2Fx2rhM5XrbqRav7jaAkXkBOGbKcWsi8eQ6eETD5L87jDL%2B8O%2BBjqkAXPJs%2Bb6%2BolX%2B2ib5qMkqxAu3SuTiH0FLiVnuQE8E1J0gKGbijUPeHmWnOviR8LdsoGv67jg6ekSoIXl15mh24JL%2BJhaWEqDshXSdP1hlU653%2FTL1AnuJeitlJNSOYx2%2BqXX%2FoyB%2FP3kDwyf9j1II3FBUFMT84QBKUUfxM5R9vMS6gEkKvpWLN8fbfSKKNhPVIDsbVsXf8Wry%2FIAB1%2B6y1YjILXX&X-Amz-Signature=83262305aeefa51ba947313c77e7172653018ae49206afcf99de8b77d4b9190e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFXHUEI%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGTkkfn0pm%2BcpU0%2Box%2BcbHwtS1IKuWBQsJmoszzpQcDCAiEAlHtOImmab3kW0ZjNOkvkgt3nrWsJnWo8qU8zGWy1dHMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Li6f8O59OTtWvtyrcA7WSiTFwP8M1Si8KPkbRBYEWZmqO4TAb4C5wORcXfu7m%2B2YJ4XQ1Bgr8yCnK5UMoBNd5b%2BiaYLhWxzKPOahX6BKSzztGvHrIQN0SVj5yPFClVMNZqcyizV9LDtBiqYg5%2FJgAxyMN1CTTzKdDUCn4aYymQqC6aTX9xnfyBqvuMWMdWlReZ7j%2B99haw4q3JfleyE9fwFoDI%2Fvo8jcATVBffkWJHC072aHVlb%2FRba9mP6W7J%2FTorZNAdMFnJySmjBDUnLEvYsW7Zu%2Ff5B%2F%2Fk5LjijYFlY6yRbnnhf%2BGikvbVElAxBPywNArQdTMeliISuyZERELWACQY9rEmamMRtmCHay3jEya%2Fd70KCM11jUh%2Ff5HQ5IgVVzmTjlaRbGyYjjxWRUJXhcuDil%2BE%2F5TsFKE2A4xdoDX8oPPWb%2Fpy7PolQ5MeShj3KdQfX4DtwSJjjAYlqS3HM2P38pG5%2FEYhNGal51ywBh6CSujpZ7JmGEzLiXuNwIGoByg6DzoSCaYwjFYjfck3DUA3i0DxzFFkq%2FrgcjmgIlaNnl85zGuZK2Pnhg6wm4GOa8M0EvSABlGG2fwUDE1CmtrjGeeqlDpAlN4pUurtNXRmKjgbRvjbgNrhpSY2OzwQwQQcEVJZ48TMO76w74GOqUBY%2FO1WW0KhKvU4Bgnvi0u5eCe4jpvQIHc8RKT0%2FlT1NuLn6NckeIorrMpnS9xqOTs%2FfO2iT3eyuAJaHLHOJavRqa1OORyJiL8gxm06d3LDK7SqjlueSzcYGuKT9%2FVX7C9b%2BLNuvKQbCrTIuGEcgRdWpYOkPTvAx%2BuKC15vw2XdrogSwRH5IlnWkcOKA%2BOlp1t9%2B5e6GxljQ4E4Mz4NDNckO5EJkM5&X-Amz-Signature=c9ca5548200ab94c67720d1e2133d66b61455883de22b676b9e082325bf12500&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RJGCCO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCXkMPn13Dx1y5SLYgkVVYVURZwtLsJgt1NoLXskBXW8wIgYf02S9kO3cIG6d3mvXCUNADT%2BJw7JbUCvE%2BxI4tW3yQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjkSU%2FgNHw%2Bq%2F3Y2ircA4J3VDhOS9xOzwRrm5tn8mohirxo%2Bc3m1Z2cU5ChIyF6aTl%2BXHM1V9%2FbpB6nyn0DWIywh5gfkFNG7gHxs1CbQTMi%2B8Tm9H4DdJGR0TDZdmSCf8qIHAibaZz3j2zH7TGYTLZQ30C6KvqmiISa6ILxz%2FsHmSxY9O0Ml3x%2BzxUt5bbNenBPoBhvR0KHR1BvdLYntI%2F8zW8GA%2FRwbG3XEmMrQh%2F3xXenRMk22FmeVoOcOn3u7UEKKGGbIHgvQIoIkaCbKlFUrSvkaHlskPgl239uzKQH6QV%2B1DLKAlVE8MGTA95QoUQAEyNYKWSchtSN26q1IdsjcWSWkipxphhtPM9SArquBQ8Q838Lir7azOU6u%2B75DfjZl0mznS8tvYhOuiH9fotXd88G5B8MmDf35WvsyynwgjMadTrM%2BAnoijA23Y6koEWDKGhdhKAOC9r2vHp3yOaRvNnakywrDZ0irx5M7lhMbf04FDJQs4ok24cn9eZQfr5peqpBeeuT%2FD1FltA39zToziZHdyfRNn4k0wfam2lFnVQwlPiECaWcfMK4wpLImhzRofUmKAVKlsfxbEBd6rUAYJhnybeReNIGpQ2A6JjblSzt7mWP7Py6iQ1ldsrplTRMEISZqGKAPfanMJ%2F7w74GOqUBslELnV3aymEGxq852rEjGD3jjIhiuvuQDyA9jO9O2Nd3KVSqbSc488JnF2E2vDY2af3w0%2BB9BihzulC0zfvvx2F29%2FwB6hmpkr0fhjYPFEmZ%2FqjrYrHvO%2Bna662gnaiBieZSRRslIsi%2FkwSiy4Y9U0Wt9Bxl3Qfne0qOcviqJMaXGvEqXnU6h%2FOYug9eH3BhxMiQkflFbnVPq7vGUCxBC6RpVDQo&X-Amz-Signature=d63cee522909cbef1f74c3d63657df28559daa54466f227d6b46521c23e3be3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
