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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MD3BSAH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCna9R0%2Bzz32GZVq%2BqdFxJaS2XjPtxGtFlcIRWpq3aNLQIhAIi%2By87XMdtb%2B1SNOZZnUvLPV3Lo4H4tkgUc4KB1zeWJKv8DCGcQABoMNjM3NDIzMTgzODA1Igzf6hIFHJbTQ2MK8akq3AM6fN8iFn3iDjn0wHUmTvmpss%2FU9dVMg6NAPxHLIgf4EvK2tYLppkgxE%2Blij4Rqzl83jwhSlAAI5Q5OInELspB3TjtG32i%2Bj3JZxXtKWIY%2FJ%2B8F0BLjhg8Q8eSeTN85ux7cUh3AEUy0flXbyyEAAw1yvclmNtVTgmre11H9EQaczBziW9No%2FNMHiBHQ2reNHxVpkC%2FFv7boeuLWQaKjOH0u6Ks7EdwsXOmCR3eNgaZaezNnZnwlMdkPRdMa0xSOUgn6MtGO2BrAPfgV2dXuixKbV7W5fw9q3pAu9JLok4sr3DNA3QVg%2FgoE9gdz7VThR3uLBMiCJIKTEG9JtmO991YnL4IQd6NP7rXEh3LcIz4S3dy%2BD%2BSLNb0hnEIs%2Br8K3LAEzaxyWCeny0UjP3VLqjFs67hLqvzSUrUXzjVuNxoproNL0irrsZ5wBioYdOWhmtv4XQ2aZeGYYaQCzYaAy8SUvo%2BGv4KMTjsXFzJfDgy2OMQ8r9GPdZraLcIX%2FRFBjY8jPU%2By7462qK83LezHRwlIwNDAYLDnq1YUfO4bVT0YQr4pAhDBK8gcchw0IjWNxF4Nnl5kTOMW82gIY9irjOfJ1RypDVo8sDdft2bdvcm%2B5KtZt3rQX%2FUIJ3XhazCgn%2F69BjqkAdfdDG2mGdaJWfW4MBNakLJqeW0GJyH9CKZVaSlj8sqQG5ecLPtHVWR%2B7LRviFUqVo%2FGhvt6CHztm%2BFu7g9WehBwPaOgiHhimnfXKrb1%2FDS9CgFJPxcDLyWXfy1l2eRNRcE9Gjx9n0eVBrQfODlKEYDtli%2F1PQLVHdsu0THWNWtI4p%2FUV4MtB3bmPcCIMDyrhO9GMq3atQsb8vtP90jqXdMht2Tk&X-Amz-Signature=74e7f1bd9dcf0568fb32e945fc1c0c60d32e2523b4eb6afc86be9d02b1437b17&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MD3BSAH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCna9R0%2Bzz32GZVq%2BqdFxJaS2XjPtxGtFlcIRWpq3aNLQIhAIi%2By87XMdtb%2B1SNOZZnUvLPV3Lo4H4tkgUc4KB1zeWJKv8DCGcQABoMNjM3NDIzMTgzODA1Igzf6hIFHJbTQ2MK8akq3AM6fN8iFn3iDjn0wHUmTvmpss%2FU9dVMg6NAPxHLIgf4EvK2tYLppkgxE%2Blij4Rqzl83jwhSlAAI5Q5OInELspB3TjtG32i%2Bj3JZxXtKWIY%2FJ%2B8F0BLjhg8Q8eSeTN85ux7cUh3AEUy0flXbyyEAAw1yvclmNtVTgmre11H9EQaczBziW9No%2FNMHiBHQ2reNHxVpkC%2FFv7boeuLWQaKjOH0u6Ks7EdwsXOmCR3eNgaZaezNnZnwlMdkPRdMa0xSOUgn6MtGO2BrAPfgV2dXuixKbV7W5fw9q3pAu9JLok4sr3DNA3QVg%2FgoE9gdz7VThR3uLBMiCJIKTEG9JtmO991YnL4IQd6NP7rXEh3LcIz4S3dy%2BD%2BSLNb0hnEIs%2Br8K3LAEzaxyWCeny0UjP3VLqjFs67hLqvzSUrUXzjVuNxoproNL0irrsZ5wBioYdOWhmtv4XQ2aZeGYYaQCzYaAy8SUvo%2BGv4KMTjsXFzJfDgy2OMQ8r9GPdZraLcIX%2FRFBjY8jPU%2By7462qK83LezHRwlIwNDAYLDnq1YUfO4bVT0YQr4pAhDBK8gcchw0IjWNxF4Nnl5kTOMW82gIY9irjOfJ1RypDVo8sDdft2bdvcm%2B5KtZt3rQX%2FUIJ3XhazCgn%2F69BjqkAdfdDG2mGdaJWfW4MBNakLJqeW0GJyH9CKZVaSlj8sqQG5ecLPtHVWR%2B7LRviFUqVo%2FGhvt6CHztm%2BFu7g9WehBwPaOgiHhimnfXKrb1%2FDS9CgFJPxcDLyWXfy1l2eRNRcE9Gjx9n0eVBrQfODlKEYDtli%2F1PQLVHdsu0THWNWtI4p%2FUV4MtB3bmPcCIMDyrhO9GMq3atQsb8vtP90jqXdMht2Tk&X-Amz-Signature=69aa58907f86005811d332e3ad3f4889f8186d4ffac08ac3bd2c4f420f161764&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSHZKET%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCp0%2FsC0MWwz8gbj32xEMh%2BIwsg1urMa%2Bu6DefMW%2B%2BuCwIhALWizCm7QNyk7oL4Y0NgvSkxQjsnMFAPoUgX6VtxHpv7Kv8DCGcQABoMNjM3NDIzMTgzODA1IgykHU9jIugDVkws%2B%2FIq3APB887u%2Fyj3lA18mAjvKzD0YrlTwTeHWZAwT4AIDaEI6wkUN9eoTKy5x5a601G9KCKqAKG7AnHKytRQ4EkrJPQvqyCPmXyX%2BRNXqg1alkB6N3Urf7lxboQKY2xrQjj8b4bT7kNzB1%2BnjXUugEQidp%2BkefAhASazi3cnbhJNhWBRS5Ey23mSGaKkAGb%2B%2BBzYUFYfyqejwnGa%2BenGjduJyTknZfM57HhKDXxAJAuwdl3FB3v8hM7H4na4wlK6Vra8yPX4AgMTPykzVxi4x7qaPJFWSB4glA4nu2hYN2E5na8xS%2BwA3eoOGVSZlR8NHs8HY9WDmdVoHquk%2F%2FXfHzkCpG3vg6qgDPP9W6B8qK71dKiVHW0v3DKzp1LGxk%2F9WFX7%2FAhOpi5CdhXQ9eV%2BSOTbQbNii7UeHFNlVxPiJBJqV9VC8VcGY2KBizJ9PZDZypbaa2ec8XGPSe4E8gL%2BhBeraq8ML%2B7OplwtAK8Kzwd%2FCv703mQJo9c4GwaWoWAYXidbHcuPR%2B7Y1ezxdxM3AwcVEeN24uQX%2BkzB3ySxBgZwjUqJwKBfcO%2FtshUM%2BAuh0Fqkv3B5cc6kIM6zoCx6DC9Ou%2BeoNuDavX886Zk06uhqQTOSr3BVf04JoUNDdwwbXzChn%2F69BjqkAZarQg7hLDo7XyvbJzisdK6CMKR5LNqnCyLzPe5hl%2BGowILZbJ3ay4%2BIFTf9KTDBQHe4g2Y7VPaJxpDZokL35BuBC3eZcNKE%2BFleSjM1JqiaiA4uKQGt59UYPGRO%2BIL8nTxnM%2FjKQYFq41F5e6JVL5etm8ymqwXuLM%2BkPBMXNMHBhcHMl%2BZfHJHvTYVaiJICCgm5OvwqMgXhpQtk3eWTwTBav9MM&X-Amz-Signature=ca74d1bd582b427b7633b1b6491e2625a3ce1d78abda3d2f7d72cecb5fefff75&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQTR265%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIF4g76G5Hu%2BizMM1nsralusNrZcxs9KLmS3gYvcMGXn%2BAiAPd%2FLrKg60ScgjaDlpFSVZjsEMMunUN2enZ9nEv2pDyir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMTpMaCPlVZKFDzSCmKtwDr09Yj3EvZIjr11a1lc1blZ0AnU6hXlu0KHjRDnT0T0wMgB1Qo09JFIzPVqX1c83Uqg55PmQkfb%2BxU2CRAYtBB%2BY1VSokR7rduAXUX1HIvgYBYCGeOENCcyGWGrrIG71XARdUC0busQtpfRxkUNRVJXfUdUNSdQwt2Flb1wFymvIbkn0vd%2FKrwaed1UaYqqtEGxPb%2BZ5KT3zrEytzESZoGGO8Dw1aDUm0Dnf%2B%2FaqxyuqvL%2BiZmUV0DyI9QsRvL%2BEJYkmmVYk5zhzEk7CGq7RmX2a6QBcFnQ8%2F2eEKnaW7nx5fklZKPpcV1yzMpUIrNVlcCPz2IU9JUxjE%2F9QGeJQdsgAhYWcn5Qqdji%2FdtnR%2FcamhIhQ3UoWFjltDQQ8eVAzpZepVNKm60AE7bk3nPK00VZrHWceplRA%2BHa9MdtLvAlf4jMltI5At8jo%2BB3m4MAKNyufpoDknKVAmdxPw5PW7zgmjiBZC5asckDearkwlwHNpKcCHkv3O%2BQMqSt7QUc5kaeNBIFlB7OEQ3oAD3lFO2x1b8rnUaGovfTtDk3lgcfQiera47Ir5kolYbXE%2BEYdG4LLn%2FPWuGjx7y9qbnz0SjtsaP8Xw1UzKcUEyig33L2%2F%2F7uGYd1ii3vX0sE4wgp%2F%2BvQY6pgE2KJSC%2FRTYjbONNzJrxCHVviSvWzOu2lAA67fuFvWjQjXYguQMiMMX%2FiDffcQLw1Rtr2wjaNjzmWWTXebKc3LrGVNoZbxt%2BN8uOCBzY69HVK1sWsw1FP8l8zZuK3FbjqR%2Bn88oZ%2B%2Bw5qRZXsETef8uon%2F%2FYWqki1yVZ%2FTJstLaE3zIOssN8X8TnKXx8SSodRH2N8uYwLd7B5IehzsZj9e%2Fja9BDqYL&X-Amz-Signature=de3cef3307c50f4b6bcdbf927f6d9325ec1bd36af69910c4faf0f33700cda30f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MD3BSAH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCna9R0%2Bzz32GZVq%2BqdFxJaS2XjPtxGtFlcIRWpq3aNLQIhAIi%2By87XMdtb%2B1SNOZZnUvLPV3Lo4H4tkgUc4KB1zeWJKv8DCGcQABoMNjM3NDIzMTgzODA1Igzf6hIFHJbTQ2MK8akq3AM6fN8iFn3iDjn0wHUmTvmpss%2FU9dVMg6NAPxHLIgf4EvK2tYLppkgxE%2Blij4Rqzl83jwhSlAAI5Q5OInELspB3TjtG32i%2Bj3JZxXtKWIY%2FJ%2B8F0BLjhg8Q8eSeTN85ux7cUh3AEUy0flXbyyEAAw1yvclmNtVTgmre11H9EQaczBziW9No%2FNMHiBHQ2reNHxVpkC%2FFv7boeuLWQaKjOH0u6Ks7EdwsXOmCR3eNgaZaezNnZnwlMdkPRdMa0xSOUgn6MtGO2BrAPfgV2dXuixKbV7W5fw9q3pAu9JLok4sr3DNA3QVg%2FgoE9gdz7VThR3uLBMiCJIKTEG9JtmO991YnL4IQd6NP7rXEh3LcIz4S3dy%2BD%2BSLNb0hnEIs%2Br8K3LAEzaxyWCeny0UjP3VLqjFs67hLqvzSUrUXzjVuNxoproNL0irrsZ5wBioYdOWhmtv4XQ2aZeGYYaQCzYaAy8SUvo%2BGv4KMTjsXFzJfDgy2OMQ8r9GPdZraLcIX%2FRFBjY8jPU%2By7462qK83LezHRwlIwNDAYLDnq1YUfO4bVT0YQr4pAhDBK8gcchw0IjWNxF4Nnl5kTOMW82gIY9irjOfJ1RypDVo8sDdft2bdvcm%2B5KtZt3rQX%2FUIJ3XhazCgn%2F69BjqkAdfdDG2mGdaJWfW4MBNakLJqeW0GJyH9CKZVaSlj8sqQG5ecLPtHVWR%2B7LRviFUqVo%2FGhvt6CHztm%2BFu7g9WehBwPaOgiHhimnfXKrb1%2FDS9CgFJPxcDLyWXfy1l2eRNRcE9Gjx9n0eVBrQfODlKEYDtli%2F1PQLVHdsu0THWNWtI4p%2FUV4MtB3bmPcCIMDyrhO9GMq3atQsb8vtP90jqXdMht2Tk&X-Amz-Signature=6e825b5372aa4d9989fbf566c789ed42002f27af06d0aa25dda0ab4cf9a9b31f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
