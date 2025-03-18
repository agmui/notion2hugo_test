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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA7LXDS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKOt5oz7d2rOhUcUghy3PamF0fyxTCvQ02YZY%2FWKqUHAiEA7u5a8jIWhk4IhaaMNLzIz1rXjBkj0GjcJP03pd6sz2gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNn2n5sZ3XhTbbeqhyrcAwvZiXX9IvxmAngB60Bf1KslEG47uqqDny1lHnVmgbW4ctB81KCFo2MgsYfc%2BnsKD7rgikdEbV%2FTO7FYBY1x9m80PwH21HUrMJ924gtinhcMdvvnzalkgDRMzzPXivZwxVbx%2FWEQs0kyfr6ToNP7wNYp3dg74gFOrEaWDLvwSUpm%2BvRnSomctiAd5JUKJyXan%2Fxo7zz39HxkCGXxRlhkLCtf6Yxf%2FdBKR1DelAxHuJI62JRXxTQGqVxa6Zjj%2FZwFTvN0BmYrj5hW20%2BmXUEKt8zI4QPjsHfdlAFLN1X%2B%2FbNfOEZ1dORa4yau%2FLBSFD06nPG2poqeMOau2qeD33459i2ji71YUW0o9gvUmVw2lrvRWGIgQ1HTyuzw%2B3Zy833YpFlavmTHEDNkZFEtKO26P2%2FKoSdmji8tEOy0XFSA%2FJsq%2FdBFm0%2BjYOC8ge7PcCf5Zefvu3hshBHN9Siy%2FhYalDV%2Fq4MKVCLKaOpOUyTYDvDBHVekFzh8X592mMkh0sQ0YqU6%2Bi3Ozy49DLDk2uNFuTs5E%2FGq8L5OP15XsZcAUUcVGB7iWZ3Jg8S8Pnxe18e%2B2fv7I5ljagpUbo3WFIEM1HaHr7vtLInzg9clZAmmJzp61JyHNok17DNQeJH9MKzJ474GOqUBHUwYCuXaQjfXdRh9rugM7C1ywD6o1GDAYvzsPrEFIIsC06XCXwt9XSTO4IIOpWCDMQyJIaCI1Yf0kwp%2BWh2HsCsvvi5ZBgiVkFA3PaWyCmssokqozqQEKMnqOW8RRoNeLPChidNXMVARH34JLY3%2BSFbE74vpuBwa6fJciMsKn0ThclYgUi9Pvfqglk7h4ceCYi%2FjsTVEjFX7mC89CAyeBm72YmVC&X-Amz-Signature=73b463275e715ba3c711e1bf7fe880a060738ee35b9890449d5423aa7bcd12e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA7LXDS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKOt5oz7d2rOhUcUghy3PamF0fyxTCvQ02YZY%2FWKqUHAiEA7u5a8jIWhk4IhaaMNLzIz1rXjBkj0GjcJP03pd6sz2gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNn2n5sZ3XhTbbeqhyrcAwvZiXX9IvxmAngB60Bf1KslEG47uqqDny1lHnVmgbW4ctB81KCFo2MgsYfc%2BnsKD7rgikdEbV%2FTO7FYBY1x9m80PwH21HUrMJ924gtinhcMdvvnzalkgDRMzzPXivZwxVbx%2FWEQs0kyfr6ToNP7wNYp3dg74gFOrEaWDLvwSUpm%2BvRnSomctiAd5JUKJyXan%2Fxo7zz39HxkCGXxRlhkLCtf6Yxf%2FdBKR1DelAxHuJI62JRXxTQGqVxa6Zjj%2FZwFTvN0BmYrj5hW20%2BmXUEKt8zI4QPjsHfdlAFLN1X%2B%2FbNfOEZ1dORa4yau%2FLBSFD06nPG2poqeMOau2qeD33459i2ji71YUW0o9gvUmVw2lrvRWGIgQ1HTyuzw%2B3Zy833YpFlavmTHEDNkZFEtKO26P2%2FKoSdmji8tEOy0XFSA%2FJsq%2FdBFm0%2BjYOC8ge7PcCf5Zefvu3hshBHN9Siy%2FhYalDV%2Fq4MKVCLKaOpOUyTYDvDBHVekFzh8X592mMkh0sQ0YqU6%2Bi3Ozy49DLDk2uNFuTs5E%2FGq8L5OP15XsZcAUUcVGB7iWZ3Jg8S8Pnxe18e%2B2fv7I5ljagpUbo3WFIEM1HaHr7vtLInzg9clZAmmJzp61JyHNok17DNQeJH9MKzJ474GOqUBHUwYCuXaQjfXdRh9rugM7C1ywD6o1GDAYvzsPrEFIIsC06XCXwt9XSTO4IIOpWCDMQyJIaCI1Yf0kwp%2BWh2HsCsvvi5ZBgiVkFA3PaWyCmssokqozqQEKMnqOW8RRoNeLPChidNXMVARH34JLY3%2BSFbE74vpuBwa6fJciMsKn0ThclYgUi9Pvfqglk7h4ceCYi%2FjsTVEjFX7mC89CAyeBm72YmVC&X-Amz-Signature=df2554dd135839587c99231d05aaf2d5ac36997dbd321f7bac5882efef802e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPPC2FD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjLJZMAPwwKZouP5Ugw5rBh5ow4w7l1WiZzYqNB2bSawIgZMxWnmc%2BouebP%2FRvhL%2Fuiqd3Wb62Iry1iz1frNSAku0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAEaY0LesrBmY6QWwCrcA5KMC9yCpoMsllxgj301Z6ZxxQLdWIf%2BDBhVX3qxmwypqU7wZ97LEC4WGNjEnijQNr%2BF2w0NqwX4hIbNm1cy1DqAKTHQLU0F9dmuDIvlBY16jOmFjRxPlYBpJfrJ6ZjT%2FHQIxV33T4jx%2FpDiZY23o14kagg11drE7%2BVZxzzb8E1CUk4FrH9vqpwL1iFmjCgfeWTtWygxz7AU5OPF2qGqsCkoqq65IvvHufVo80yes5bx6TjG5b1ZUCizDsLPW6RawWM5nEreHKwzegYRbxahNztfMnxZz9%2FCmNxQkjCfpo%2FoxHtI5AECmt4tmMF4ftvbbKXjpPgXlxvUgLiKzLTQrJRe9dO40QTv3bpPXB0zgA3TwML%2BzUhGlW9r4Hiuwm5vFFFj9VKaTztiKh2fBM8KfL1sA%2Fnn%2FUScKoItywirbU7Sj6ZBhD86xBFW7h4aQtUJshhyHE403FAjD3FuagVrfyS3s2wiV4wusszvpEgPrx0f0%2B8tMRIL8rys6tMbl%2BpIEpvIn576c2%2Fuh7asYtSRksxWbfeaVZ4xA8dbVbUOqiE371%2BtWQGrQDyjz8B56TLU21FqjCF7umH3FVO%2FqVgUU%2Flwn0%2BQBQ%2BOSf%2BP6Jw3Xjc3ob66rFTJG4LIRk8sMJfK474GOqUBFS2RzJNamHEQpRtGq0YWP44iZdVtj4w7gspoHKykPdIbUwOTE5YJsLtoD%2B67up3GlNSMnAWyfkbZVsR4wJlw%2F8fLy8A24QkPCzVXbmsh%2FdYVZhPU%2FmKH1HepVlo%2FdUrD%2F3aE%2FlREoJfqbOTkp1PIiWz81vbsp4FcJeJRHjHB7UnftA4J7Jsl%2F0dbTbxpN8axCBbkDE3Htd7omdDJpBIiuzI%2FI50L&X-Amz-Signature=5f146d0f3cfdcc390e27f6418c4e93e1801fd9c422cac6b80f4fb97c21962b66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZM5LC2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgKmSAC2q2JmBpKkilTon3Rx3iuFwrFQMxoGkUlNidhgIgR%2BCKiIPaGCoNoCbgSjqPKX0gx5E9rXKsJf65QAi2kAMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDINPcVm3wIIykFFqOCrcA87AyN5ZOk6jtJhKLPlBAvL87mEnWQEVJESs641c%2BxvARO2BcJ1GGWdw41QniKm33k%2FtkX%2FgzfVwhY5znVtG2jCtTa8MCH8Ik0TRbyuR4Kz4LAw5alKaIj7tbpKU8g9BMGnIhXHcDmqdjE3uGjVnBPCAL6v0N2UxlXgi%2FMg4p9k%2FvI6v5EpU5VkDZjbHaOfyTDJcbQbMWoIi9DPPQRhc6L2y6GpLqMFm8eGgU%2Fo3LnbJUC4eMbKU7QalQ%2FeMsNC41nhyy3EumObnw84jkQ9h2qFn4ZpoJ%2BpwUVhmIB1p%2FmTeZiqNU118q2Vh2N4xA%2F8OnM7aj%2FeHIAvUn6HAaOjjHVAApcdamushXwDdxxPCpNcxi2E3i5qzS22xYKXT6y7%2FbpKfKyCRK5dz7oNg4irXOPI7c6eozZw7kWoTBf1IYyLaOOMWvi3Z8ISjEXFmgzeLfj%2BAW7X2UOuBHky2xWSQkFK%2BxYPwhB%2Bc90AGlA8o1ePyd8izvcSyqpl8UIuW3kSt5SqgD5UT4DoJPgV2333AEPkyerqRJ45LhjeyPLAmcnKvd9PSh3XrVKxAPqAz72%2F5XSVO%2BSulvzeYi3JngBsCzeIDohrLL3VgrxYvkI8sfC7kVqz9SjbO6XpZ2qJOMKXK474GOqUBZtEY2FFKAUiShaQI375PyF2XrBM5e%2BndbCJzm9e4midgC7etQNVh9xsD7TlL0cuZhaPQG0rozgIpBby1dY51ASkCSszfQf35V5CQN1meSlQxt1mySFab4jLF%2FQjx1ZNj2H8FcHq9OWzzOQv51ALGAhDokndzJtQNwiTxprKReUnBxN%2Fs3tnv0q8cWTB0eRoQCc%2BaZ0N8WBJrigijAZbxCLaQWITV&X-Amz-Signature=40922128cd17a700f4ecb94d88ac5b99ccb98d37df6fb543b0462764d0acddd9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA7LXDS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKOt5oz7d2rOhUcUghy3PamF0fyxTCvQ02YZY%2FWKqUHAiEA7u5a8jIWhk4IhaaMNLzIz1rXjBkj0GjcJP03pd6sz2gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNn2n5sZ3XhTbbeqhyrcAwvZiXX9IvxmAngB60Bf1KslEG47uqqDny1lHnVmgbW4ctB81KCFo2MgsYfc%2BnsKD7rgikdEbV%2FTO7FYBY1x9m80PwH21HUrMJ924gtinhcMdvvnzalkgDRMzzPXivZwxVbx%2FWEQs0kyfr6ToNP7wNYp3dg74gFOrEaWDLvwSUpm%2BvRnSomctiAd5JUKJyXan%2Fxo7zz39HxkCGXxRlhkLCtf6Yxf%2FdBKR1DelAxHuJI62JRXxTQGqVxa6Zjj%2FZwFTvN0BmYrj5hW20%2BmXUEKt8zI4QPjsHfdlAFLN1X%2B%2FbNfOEZ1dORa4yau%2FLBSFD06nPG2poqeMOau2qeD33459i2ji71YUW0o9gvUmVw2lrvRWGIgQ1HTyuzw%2B3Zy833YpFlavmTHEDNkZFEtKO26P2%2FKoSdmji8tEOy0XFSA%2FJsq%2FdBFm0%2BjYOC8ge7PcCf5Zefvu3hshBHN9Siy%2FhYalDV%2Fq4MKVCLKaOpOUyTYDvDBHVekFzh8X592mMkh0sQ0YqU6%2Bi3Ozy49DLDk2uNFuTs5E%2FGq8L5OP15XsZcAUUcVGB7iWZ3Jg8S8Pnxe18e%2B2fv7I5ljagpUbo3WFIEM1HaHr7vtLInzg9clZAmmJzp61JyHNok17DNQeJH9MKzJ474GOqUBHUwYCuXaQjfXdRh9rugM7C1ywD6o1GDAYvzsPrEFIIsC06XCXwt9XSTO4IIOpWCDMQyJIaCI1Yf0kwp%2BWh2HsCsvvi5ZBgiVkFA3PaWyCmssokqozqQEKMnqOW8RRoNeLPChidNXMVARH34JLY3%2BSFbE74vpuBwa6fJciMsKn0ThclYgUi9Pvfqglk7h4ceCYi%2FjsTVEjFX7mC89CAyeBm72YmVC&X-Amz-Signature=735097f3f8d9480fa1424d370a472322a1602cfe86625472a383b4502117f37d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
