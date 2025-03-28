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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKWE67M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiXFQ43idarnKxO8HhUsG6NO4Fbbg7fJzN01RoU8sX3gIhAINTBtKJNPGg0F1PX%2F1Ko1%2BrWNmS%2BkWNvvEeVFvbMsUCKv8DCFoQABoMNjM3NDIzMTgzODA1IgxFrbaGz4Ivuhdb7qsq3APEOeBALgiRDz3SpSWt%2FLPM6SHa2ueCjuhfJfHhuUybl%2BE%2BHBrbyyzhjLiuHuMPej95BgutCvP3AfSTdYAJmRZBGLuJP7sdA2n513wE3VoMQzy%2FIYHARCo40uiaeytG72SlcZzwClwT7dkrYQsN%2FVL4t5FfduN%2FJFTQzfFano6uKaVXaxOqU7zk6A%2FYrwwQmq2vEEcmMUDLNxhUdk3NDSHgZbyxC8gYpmNI0ATPlYJYaMUcDFodaofLRRbUmTd8LMGH9%2FIQ2YjEmEN1c5RTCvYOU7USOWEz%2FjEhKS1OF3PuLJ6ehq5jx5KfnvLpriHsiMI2KRNzGpI%2BL0hJO8BW6YeB1a%2BegTu622QzhuRasfT7mmD%2F9%2FHtpjalnogT%2BqO7BRzD475lOQ5A3UWC7%2F2cntm%2FG2HbWTb82u2PYekzwGLydQx31asPBT03yBVBwQoFBuPw6qzerbKrt0FEwFXl11802MA852xytetx%2BHshTCi5Jh0mh1gS1LIRzwGrKnsfBMSSF%2FlRh0lr%2BTNNeKksGu6pphpTxhEfG2%2FSDjdCr03vry9Gk4mB5QgDrfwbJ%2FPof%2BzV4Oe7NoCMNLsC%2BzW%2Bpg6CqP%2F3yzF%2FI6HxIS3khlJZdAtX8rwstZBFyZTKlzDUv5m%2FBjqkAfxtl15UN8SrW7T08gtu2ilB%2BOV6SA7FHGjscqwEn6ISIwajVy3Zk6ZMDc%2FdPTfoOvhWE0XJ5mOOSlk1ijTyZcrADoTVBPorSRgplgxiGKOymcKA2cGPDCywRBQGctVo8VZbG3Gh90a02jmNhmxPbDws6IuotmUA%2FZxmYXys0oTqukcsPYezJWrxZHHySet8KEZPOvz2kKAMBRkuQbRFBTLB%2BGAd&X-Amz-Signature=0fa1c7d8a9c6467639ab17863a8b52766fc8033edea47e57fec251e0bdce5df6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKWE67M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiXFQ43idarnKxO8HhUsG6NO4Fbbg7fJzN01RoU8sX3gIhAINTBtKJNPGg0F1PX%2F1Ko1%2BrWNmS%2BkWNvvEeVFvbMsUCKv8DCFoQABoMNjM3NDIzMTgzODA1IgxFrbaGz4Ivuhdb7qsq3APEOeBALgiRDz3SpSWt%2FLPM6SHa2ueCjuhfJfHhuUybl%2BE%2BHBrbyyzhjLiuHuMPej95BgutCvP3AfSTdYAJmRZBGLuJP7sdA2n513wE3VoMQzy%2FIYHARCo40uiaeytG72SlcZzwClwT7dkrYQsN%2FVL4t5FfduN%2FJFTQzfFano6uKaVXaxOqU7zk6A%2FYrwwQmq2vEEcmMUDLNxhUdk3NDSHgZbyxC8gYpmNI0ATPlYJYaMUcDFodaofLRRbUmTd8LMGH9%2FIQ2YjEmEN1c5RTCvYOU7USOWEz%2FjEhKS1OF3PuLJ6ehq5jx5KfnvLpriHsiMI2KRNzGpI%2BL0hJO8BW6YeB1a%2BegTu622QzhuRasfT7mmD%2F9%2FHtpjalnogT%2BqO7BRzD475lOQ5A3UWC7%2F2cntm%2FG2HbWTb82u2PYekzwGLydQx31asPBT03yBVBwQoFBuPw6qzerbKrt0FEwFXl11802MA852xytetx%2BHshTCi5Jh0mh1gS1LIRzwGrKnsfBMSSF%2FlRh0lr%2BTNNeKksGu6pphpTxhEfG2%2FSDjdCr03vry9Gk4mB5QgDrfwbJ%2FPof%2BzV4Oe7NoCMNLsC%2BzW%2Bpg6CqP%2F3yzF%2FI6HxIS3khlJZdAtX8rwstZBFyZTKlzDUv5m%2FBjqkAfxtl15UN8SrW7T08gtu2ilB%2BOV6SA7FHGjscqwEn6ISIwajVy3Zk6ZMDc%2FdPTfoOvhWE0XJ5mOOSlk1ijTyZcrADoTVBPorSRgplgxiGKOymcKA2cGPDCywRBQGctVo8VZbG3Gh90a02jmNhmxPbDws6IuotmUA%2FZxmYXys0oTqukcsPYezJWrxZHHySet8KEZPOvz2kKAMBRkuQbRFBTLB%2BGAd&X-Amz-Signature=45d960702002089d250da1927ebdb98db84ac134957240fe391962fe18e9c7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C2KQA2E%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsKPPr%2FS4%2FNAWe4Tylu8gRSq7djVefTDA%2Bmz9XdUliGQIhAJkEjE3iDUXwbpmxe8LI5YzWG59b%2BLxk4JbGSNoNA8cNKv8DCFoQABoMNjM3NDIzMTgzODA1IgymCDnHKrafvCXfcqcq3AN4PDj%2BIC1p8q%2BMwJGQGytwVmwsqLKlaPiHRrjD4cCgUSmpXlbAoMk5n15YpJkaEpFL6RQVfmJReAvSHsvda9NbYbAn0xiSR1K3mztvT8eNW7Ex7FhqXHG7n2RWybb3LMydbkDSGa1VkFMyiB5kLM5233kmgju4kV0e0M6WYeNjprrT4tO22fR7XOkh00HqmiNO%2Bt1FdbiM1ALlbHZ37a211CduqaV3O95O6cfg8GRZ%2BLqJV8ziuVWAvNLVE%2BDgbK9NByb9RAxpl7UlJGZu95u642%2FU6oFc9TUQN5MVVK9yUJzdqL8WnE8%2Bb3uraE1PA7GLJaKtYnyon1JthwcZKLaUc%2FzD9eaMrfa1UIFqbOdQReM2rOpfOz7Gnu4AL4KK2KqKPzuYY6BoDUO7ieXA13Hfl1fvJF1dtoRYEy6dLloVT23uoRpjLJ4iaDdzcKIwE1R1bgI771EKaNrtix8SD6fJjqlw0RwWT8%2BlDE5gsj4CVYaL8hm4liC6b86FCjbVMRWEJlS%2FS1lkJ%2F%2FqgrZlGGjWwZZYYNAwthdVkhKHY9IwJwi99laMM%2FfV1l19ouCE1NnjF61mON7XKHhjnw249C%2BEUBbAAtQq5KvnKMMvnzNNS0aa%2Bun9Zw5EU%2Bgk%2BTDYwJm%2FBjqkAReFkwLP8UzkW6ldz%2F3vL7nlo1miaAxAiDqDj8gGhAttHNTCxWTBGZwY14ohZM4amrBLNhegs4nDDitlOz28%2FcZbBy9b9paE9KVEd%2FldTxn5yKAJW3Z1t7WqN7OOfb7iVfB4vRNb9rrH0fUkxT5l9jP2uTTADLZJZyXBRTcsqmqpkidfcYoiC3zoO6rFghoBKqD8zy2z%2FN9hNot%2B14MXKmZL1ezF&X-Amz-Signature=c63e8d9c8df2c3121aa10606ba098bddeff753419502fc3ab6b1cd930f571e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674W6P5CO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpMJi0TM0sIBVjlPbog8SSvauCsX2smXqAWxwhHXIiyAIhAKbbtQRKLhbYhL1fM5cBcydSNAfq2NZogDnAhaT8oufsKv8DCFoQABoMNjM3NDIzMTgzODA1Igyn3BOTrGt49%2BKBTPYq3AO5MzQOcOeNSb4eksehBpbTtVi93CljQ2g5YBho9C2sPzN0QUkj6so0DKHKBsPHjuHNS0ySntT3J2yCXuv384dS32f3KoCXF8pTauCQVmPJ4HnbMDwzHenwBNGRiu3lkjPze1J5GMHRApx74714U9rTn%2BmwfatWaP6IIT4ehOj0AwBHCRszM5OI4g%2BfgTvd1d0ojef5bIDYsqdu1jg4gEO9ovhQNomw%2F%2BAdibSy2C4NH7FQ8iD07ztwMfRLCpHG4oyVQPxOTPzPW5aoG8VnYolWBE6uU%2FDbgjotIw5Nm8f5cbvEG6j0Hd65lqwFvTS8uBAIHLh17VfuWr4oRmcR5nE4fKwvsJ%2BDBCXLJ8XcGzrCtVP9CQKJvq28lhVON%2FLzFBE0x%2Fa6ww08JoZV5jU4XQD1B9nCYMQX36SdwXsfCnmZApLebYYITS9Av2lon816tmhaf3Rc%2BNTG8tnME93x8DMACr41cUTuarFnflcVrTBNIMAi4c7mkhpA19%2FmW1FY5xv7Uv6HyurrSQWTXESplH2zdoj2bL%2FBVQwXqw11%2Fq7X3ZPRomzi3ZfPBtNcd1vhv60mWMP9CcCzBXlCmMw9bIxFX1QPhLh%2B7uclQNcKZ2tbocPxM0AM5hOUrg9cbzDVv5m%2FBjqkAdruxzEDKbPL0AmQnqwux7gp9PIyN2quPLjIjeZ1nIZ6wo4p5r62kLVpMZmaCDOb2ERJ0Is2YytpgwYqe3O90w2KIbwD9kgkJkj6dDDYr495YzXQkBV9zKH1jz6ht7g10fRfNbHmcwQ2PUuxqeSv6ptUNW%2F4mPrhytBG1bhuaSwx0kPnNne9Ho8amJel4BHJpM76O3NSq3tBXHtP7kfOICi0d0D8&X-Amz-Signature=9ebc36df70e1e34fc511ef4a7e48cd4056fa28f846414cbd8c097362c4837875&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKWE67M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiXFQ43idarnKxO8HhUsG6NO4Fbbg7fJzN01RoU8sX3gIhAINTBtKJNPGg0F1PX%2F1Ko1%2BrWNmS%2BkWNvvEeVFvbMsUCKv8DCFoQABoMNjM3NDIzMTgzODA1IgxFrbaGz4Ivuhdb7qsq3APEOeBALgiRDz3SpSWt%2FLPM6SHa2ueCjuhfJfHhuUybl%2BE%2BHBrbyyzhjLiuHuMPej95BgutCvP3AfSTdYAJmRZBGLuJP7sdA2n513wE3VoMQzy%2FIYHARCo40uiaeytG72SlcZzwClwT7dkrYQsN%2FVL4t5FfduN%2FJFTQzfFano6uKaVXaxOqU7zk6A%2FYrwwQmq2vEEcmMUDLNxhUdk3NDSHgZbyxC8gYpmNI0ATPlYJYaMUcDFodaofLRRbUmTd8LMGH9%2FIQ2YjEmEN1c5RTCvYOU7USOWEz%2FjEhKS1OF3PuLJ6ehq5jx5KfnvLpriHsiMI2KRNzGpI%2BL0hJO8BW6YeB1a%2BegTu622QzhuRasfT7mmD%2F9%2FHtpjalnogT%2BqO7BRzD475lOQ5A3UWC7%2F2cntm%2FG2HbWTb82u2PYekzwGLydQx31asPBT03yBVBwQoFBuPw6qzerbKrt0FEwFXl11802MA852xytetx%2BHshTCi5Jh0mh1gS1LIRzwGrKnsfBMSSF%2FlRh0lr%2BTNNeKksGu6pphpTxhEfG2%2FSDjdCr03vry9Gk4mB5QgDrfwbJ%2FPof%2BzV4Oe7NoCMNLsC%2BzW%2Bpg6CqP%2F3yzF%2FI6HxIS3khlJZdAtX8rwstZBFyZTKlzDUv5m%2FBjqkAfxtl15UN8SrW7T08gtu2ilB%2BOV6SA7FHGjscqwEn6ISIwajVy3Zk6ZMDc%2FdPTfoOvhWE0XJ5mOOSlk1ijTyZcrADoTVBPorSRgplgxiGKOymcKA2cGPDCywRBQGctVo8VZbG3Gh90a02jmNhmxPbDws6IuotmUA%2FZxmYXys0oTqukcsPYezJWrxZHHySet8KEZPOvz2kKAMBRkuQbRFBTLB%2BGAd&X-Amz-Signature=ca0b4dc4199feefec81a1ce85f006d70bcefa8306f90ec5f49f6cb3b2ef44970&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
