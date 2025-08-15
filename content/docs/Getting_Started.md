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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=019afe0854b4a909049f1de02f086de2671696a852085b83ed256367e2c36579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=fc0c2432b09b8ab978419aa7a3f8c586a798dd01f72bcfad12c39ebec7e5d4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=4df9e69ce515390a59dc889762dd918610d9d0365d04ca71eb8274519ee4302f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7SBKZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDhd5gKAULABEEI7BzO5UbJdy6KUhTaDthIJyZz1o8Z5wIhAKuxsHv9G7OO1DYA5wvGLeofNlxXYuQ7G6ZfAyFFT9OTKv8DCGcQABoMNjM3NDIzMTgzODA1IgxSKZkCSbXSku6b2kAq3ANocuMBIphImYlLYVZr9KT1xeEHHc7mTcMxCFA3d4JmqnwHFN1pfwrHHlmA56AU%2BgwqojErQc4WSc7Z27xO8J11yyNTNCd9ZlIHoU2fiye4vlWnKwgFO0fsN9jGt4nl8xpmsmQB8tPiY1trNAd%2FwpzWFfxFPt3lCdbnhh%2F5kjk29oPRBc8%2Fh%2FMy4GRNBOdWFdeqSTOIvsjrkOkmA265%2F03kpDM5WplDI4COtxVPziDeVuIObxTq4NybFWvAy1ANaKK0nPii3zXNjlTd2k49beWw2eLZ%2Bukg95CFn0aZjUFBLa%2FV8WAEtE2rzJxl3kagYq95aXLeiUX0C4q2Mfvp52NDfkkdlV55i4Jd%2FtHQHyk7JFnoW6APU6wrxKSlXiRX0Poi8yAZe5uBgItpxw8Pmtf1Hdlic%2BM50bruWwkMGyrlPr5xV4vC%2FCzcn%2BiBYlQW064hmpWgzeA0%2BbEhKVRDiQXL76F45Emz%2BRH8y6N6voSPHNbjL%2BAOwDvz6dFX%2BPMUAPQNu1s7HIv4G3SItN3A%2F11ffG2SgO4qaWOOn%2FKJfYLOYw%2Fx4dA%2BEPTXA6Dy42%2FqFcUMSKGkIF6F418T3s4gE1%2FNgHDPzwbgPxJ9RRd9M1q9xkkcCwoMVerzdlv9OzDh2P7EBjqkATI%2FBTn2tuQeTUxiRxBXbgV6YZqUZoMylOKNe%2FPP4c2zIgTc1sMYuknq7SpEOyotthLc0NQe4fD80gN9n6X2wEVTENDsLTUi4E%2FWQjaEcnC%2BPp3rJsJLigqdMyM4aP0AbfLt%2FgtufqqlBS6WLtvS%2B8fPL0cN8aaeD%2Bd8YxfmArIU9nYxEvkglHMbZeZmbxKfeh1btSq0qXkCU80eFZeryAR7E7Ww&X-Amz-Signature=c13a854d0bd99329dfabcd675a5f793f4d2ed05f4dc34d328b864a0b212a9382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALN7HKK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzog0lLAC47NKxxWN%2BHuos0Fyj%2BrsX3AQinzAVdhIuegIhAIFTLA1RyFCgp%2ByQ6goJkqTzLKsY7833kCwpffi6RASrKv8DCGcQABoMNjM3NDIzMTgzODA1Igyt3HXW3d6K5VTaRIMq3APNafsN%2BRRi9CW6r%2BeqIaULmII82Nu4mNb4x6m36hxiQNGlWp1SVjbjGOwcS7RguSHfOZotNQZbyjkZBApnqQB4nB51gYkOjSPoXqJdD%2F6VdngqlWkL3WdUVP0PsstO0nhPiMX92LM9qTbwBoufAAVk%2B9j%2FMhJK9up9gb5pnYnHfd1h0XARZV8Y2BQOisyub57rleIa3sG8spjQyK%2FmpSHa7%2F3rgmxxUPobwcyQlrmRfPdpR3HoP3iqVe%2F9oaxdPiU9W8R15nCjV7iyXsjw2yyO4gk9KpMzQbUSnDfxig%2BlB4JEl4g2O3vo8321904C2pXs0cw7AQNSQw43SZcGSAQoDXSwkqz4pzqPsR0UIdRmEuKMjOoubqyf21BtLHYQ3rqOzoukwfXdUobzE%2BZS4g%2BsXdjBQBv3qDsne5fj4QJQYJYY%2BRgGFgVd%2F0UFILpUeh1i8sNL5OkuCCSQsHEKNMhk5Fh6yCv3YtWu7h2zswo2PrQqDHxC7LRpX0d4Y0UtVJuOqlyXDt4NPxAIcq%2FInXNTxdRFaWfojvl7bJXmPKJ%2F3Qi5BU4Rc4dPQs63AKUOnkLZK1cm%2FAPdKHNsa5uPa5RI9YJzpJwfboC%2B9FmVCL52cKZvB2BrlE8cXFGMEDDn1%2F7EBjqkAaQnVS4tPE%2FwWCicN6wzUesDJ9Dt%2BOTOxDvUbG0cwfxB%2Box9G5CSv3km4pcCUBaEgaTaFZfe44588q9TKKkIoojGIRQVOWPenI6qmFrq3vyS%2B9%2Fav0pVKd5otZFUoRLrVRRltLm9HRO0rJdXDMxJlzJx2v7ZsUToIF16jW9S85aC%2BTsIE2bF94y0CNFHkbYnUfHj4Oq4GwYwmIoUDiiM0StSt8%2B2&X-Amz-Signature=5a413af6cac935783d1ef2fe8c03090105bc5a0e3cfeb97556e6ab924b82058d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62PXQ4K%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCTAX30uIzPoj4g28iTYXb6nUyG9tjbC0hVUrf%2FrEfemgIhALerCTfpG1ZVlYgvOiPHXaA0dqeLtqTgdh2uaoODzvEDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxoKH3NhFiXqUUY4rcq3AOzP5%2FmXzCWIuAFD49NC0UxtY8rPCJ4ci%2BnYJCGJFo0XznNaHSQulLOs3nJmG1y8hcm1X1EwYy1SKMshBdmfYvwzcdu2Q6MOlPPk4UqqVjaKVvkpXuWgCLiyTMsaZJeOMmyrWqG45%2FKtNGJPRrFk6p8HdAfDgVr2MPZ9YnW5wHn%2BpBfRx02tzLEEWNj7vWxl4Z0rzNOSFDiKrgJQh3MURMdjAt5SIMHsCqSThxOf5lHKFXrhs0Af59lel8bse80VcEsLcXyPmNeCV3CkZF5Oc2p1z%2FUuumGNW1ewieTsIWT0BRErBmWi3Pa11teBN5YizKNBgnVxh24RO1DjoD9e3GFK7oRVnzC%2F2vinrQ94mJdQ9la92k7He356HpKewg5hmsQp0mvixIndW53orShs4o1%2F0qGzKmuRPNrI8VOfiYO2WocYVYyWbKhBBa2Eh7LdZQeaw3vUsCYQ%2BW9H8TOkxvRDuV3eVj4D5BrVaOlkfXR0beOQzLRPY2KqfYFUbxcumt3JlTcNvtjCTG1N6Mo%2FFq8a2XjiLy%2F3zP5R8IVCcE60T77w7aNKSSxAZClQkuK3E3EVLmFoKhI9BaaKArfx20pQLjFTFdTMF%2FCjPuOaIrlo%2FWL0neYbOKr5H8x6TDX2P7EBjqkAX0puApCTS7VX96lImycUPeQ%2FrlJ%2B8I6kczTfrAajo%2FCdMYyMuL8P9YpHj6BmX7zUAZbrAxU5aVFo9R6GvmJS%2F8QPtkAXwDYEEFeX6EF2Z9nCgLIpcuYRE%2BUNaAXj2XlfFZUE%2F3wzLL6XKXAzjhvqqzgHYV8gyOxoKYXRilNmTQ4aTtBpF%2FTZ2L26YkZrWzeb%2FuB55QdaUjZuofBVL%2BLw4AQ0sDI&X-Amz-Signature=5e34373035eae8d97aaa4031d8246e4203a09bbc76940915f3c9f8bc139fd252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
