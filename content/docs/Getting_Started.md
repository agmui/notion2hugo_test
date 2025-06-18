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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFWYJV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsK3vVAMABp8YnzxeBz%2F9%2FWSkrmwTxfOESmnN8zFalyAIhAJXeQQ83NnlRQlZxQKluOolB95GiUbicUuc83ZLYRTuYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWA0iKUWD43qYe1oq3APqwaW69Dshgz%2FZ%2BGBJ4X5UFUJ9aWOQDkoD93zsncF3ExO2ZQ%2Bk8UKHro22Y6ivUCzc0t%2FJYkG%2BVifGZSqe4V%2FUjJfbh4U2P5VwsHdN4xVSCpvpXT4zW6uwtaL7yIxVuvjdXqHmJJhJVv6OKTFr6335A6u8FNhStugyXqShVGpRS8Ds42A8fMuuFGlLTX5yag1UwnAvW5Zq65N9hGtMINUfZcPVxdX9M72FftOMyE9oUGo2z76LgGB0VgUOIs2sLPFZMj8TukYcIyQHi5WEcTDsn%2FvK46ZJ%2FK11th05bkUxkQ%2FwIdiN9CWjXvNthj2kS20nJGQ9XOeWuA5%2FZNf7eaU7tzQW9cupYfmG0Bt3rx2W1pmbnReuH3dE7BcTbRJe41nC4lm6ugijpsFXrr%2BsjeulJIKiOjudd9aVucYcJDoGJpmTnEoUlKiz%2FY2D%2BocFDJfkl56Bmorsbe1qxN6bxZ9%2FKTXmOXzgoNUqWnCH5USmZb%2BjwzSeeh3T2DtmUcDKh%2FKUW0jeOLytHg2iTbiMGrJ7fMfZ0zkG1ckQEKMOtf%2B8BdgXiWWrYEgpCAFaD%2BdfW5a8CZtN9mBKhl0KjG7E7wIgvF8B7eXLyxlJwJh8o8JMLWWcHWAPBFTH3SWlGDDy1cnCBjqkAQDZzlDAHbum6lZujPVw%2B9s5ie9mO2InVSR%2B3hQFocLRf4G4J8kcVa%2FSyTRA%2FQNdbuyuWcmOXjqeYxNxc4bTTfAM3xRvNkk7%2BG3NPcTjvVB%2BlOA4k4y9VEimXrYkJWcwSAWt1epzO6I4tEe8Oul5fnTIrlSQbQO5HhbPrE%2BAM3XM%2F2osEBMd8P8jGXTnO3QUNTOXIm6d8AVNVO9uxuYFaPP0ajra&X-Amz-Signature=99181c76f4bbcca9008b51adfb85a7291b53ccfa39842c67ae55b507b20ba52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFWYJV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsK3vVAMABp8YnzxeBz%2F9%2FWSkrmwTxfOESmnN8zFalyAIhAJXeQQ83NnlRQlZxQKluOolB95GiUbicUuc83ZLYRTuYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWA0iKUWD43qYe1oq3APqwaW69Dshgz%2FZ%2BGBJ4X5UFUJ9aWOQDkoD93zsncF3ExO2ZQ%2Bk8UKHro22Y6ivUCzc0t%2FJYkG%2BVifGZSqe4V%2FUjJfbh4U2P5VwsHdN4xVSCpvpXT4zW6uwtaL7yIxVuvjdXqHmJJhJVv6OKTFr6335A6u8FNhStugyXqShVGpRS8Ds42A8fMuuFGlLTX5yag1UwnAvW5Zq65N9hGtMINUfZcPVxdX9M72FftOMyE9oUGo2z76LgGB0VgUOIs2sLPFZMj8TukYcIyQHi5WEcTDsn%2FvK46ZJ%2FK11th05bkUxkQ%2FwIdiN9CWjXvNthj2kS20nJGQ9XOeWuA5%2FZNf7eaU7tzQW9cupYfmG0Bt3rx2W1pmbnReuH3dE7BcTbRJe41nC4lm6ugijpsFXrr%2BsjeulJIKiOjudd9aVucYcJDoGJpmTnEoUlKiz%2FY2D%2BocFDJfkl56Bmorsbe1qxN6bxZ9%2FKTXmOXzgoNUqWnCH5USmZb%2BjwzSeeh3T2DtmUcDKh%2FKUW0jeOLytHg2iTbiMGrJ7fMfZ0zkG1ckQEKMOtf%2B8BdgXiWWrYEgpCAFaD%2BdfW5a8CZtN9mBKhl0KjG7E7wIgvF8B7eXLyxlJwJh8o8JMLWWcHWAPBFTH3SWlGDDy1cnCBjqkAQDZzlDAHbum6lZujPVw%2B9s5ie9mO2InVSR%2B3hQFocLRf4G4J8kcVa%2FSyTRA%2FQNdbuyuWcmOXjqeYxNxc4bTTfAM3xRvNkk7%2BG3NPcTjvVB%2BlOA4k4y9VEimXrYkJWcwSAWt1epzO6I4tEe8Oul5fnTIrlSQbQO5HhbPrE%2BAM3XM%2F2osEBMd8P8jGXTnO3QUNTOXIm6d8AVNVO9uxuYFaPP0ajra&X-Amz-Signature=f9e8f589f43ab04e63230b95b06de7e2ac822daebce45b2c89c4fe41f591460d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFWYJV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsK3vVAMABp8YnzxeBz%2F9%2FWSkrmwTxfOESmnN8zFalyAIhAJXeQQ83NnlRQlZxQKluOolB95GiUbicUuc83ZLYRTuYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWA0iKUWD43qYe1oq3APqwaW69Dshgz%2FZ%2BGBJ4X5UFUJ9aWOQDkoD93zsncF3ExO2ZQ%2Bk8UKHro22Y6ivUCzc0t%2FJYkG%2BVifGZSqe4V%2FUjJfbh4U2P5VwsHdN4xVSCpvpXT4zW6uwtaL7yIxVuvjdXqHmJJhJVv6OKTFr6335A6u8FNhStugyXqShVGpRS8Ds42A8fMuuFGlLTX5yag1UwnAvW5Zq65N9hGtMINUfZcPVxdX9M72FftOMyE9oUGo2z76LgGB0VgUOIs2sLPFZMj8TukYcIyQHi5WEcTDsn%2FvK46ZJ%2FK11th05bkUxkQ%2FwIdiN9CWjXvNthj2kS20nJGQ9XOeWuA5%2FZNf7eaU7tzQW9cupYfmG0Bt3rx2W1pmbnReuH3dE7BcTbRJe41nC4lm6ugijpsFXrr%2BsjeulJIKiOjudd9aVucYcJDoGJpmTnEoUlKiz%2FY2D%2BocFDJfkl56Bmorsbe1qxN6bxZ9%2FKTXmOXzgoNUqWnCH5USmZb%2BjwzSeeh3T2DtmUcDKh%2FKUW0jeOLytHg2iTbiMGrJ7fMfZ0zkG1ckQEKMOtf%2B8BdgXiWWrYEgpCAFaD%2BdfW5a8CZtN9mBKhl0KjG7E7wIgvF8B7eXLyxlJwJh8o8JMLWWcHWAPBFTH3SWlGDDy1cnCBjqkAQDZzlDAHbum6lZujPVw%2B9s5ie9mO2InVSR%2B3hQFocLRf4G4J8kcVa%2FSyTRA%2FQNdbuyuWcmOXjqeYxNxc4bTTfAM3xRvNkk7%2BG3NPcTjvVB%2BlOA4k4y9VEimXrYkJWcwSAWt1epzO6I4tEe8Oul5fnTIrlSQbQO5HhbPrE%2BAM3XM%2F2osEBMd8P8jGXTnO3QUNTOXIm6d8AVNVO9uxuYFaPP0ajra&X-Amz-Signature=219ec1307ba5acffecbca1801280605d62cbe9ff4385117a101eb5b3a7d8f484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ2R5CRS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCInOP19MviVul%2FSLVFrp9xUdkY9glwVu0yAP1%2BWvtfwIgQ5uc%2FHNbc%2B3EbEilvmEsTuJzJmmnrWoCkfa%2F14EdLm4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuprIGMS1UUnc%2F%2B5yrcA0%2BM95WDQPl2Fiuwlk08oapeRSMRSGeqC6ZXuQYsO1%2BWnxr95bgJxyKZuBp%2FyBRFSKleb9VgxAFmLB%2F0v%2FoberuLAZ0oviuyFK35amZX%2BfCsWRY326LUqL8rsv1JXVt86BVOBLCjweKNV%2BplUS8jBxboj9aH%2FV%2F6nSsPrnucpB88CekfI%2FMDN2bZy957dVccn89yRLr2gSmz01k2QnEVCV1M4GyAmHspGDEAfcEGT8gsdIEqwVspia2MPKuzgIHHDcOnrLIKWVyGEE6mgmWSd2npZwkfmtKV54O9c9%2F%2B36YBBDodabBlpyIKI3Jfi4btOgK1%2FOblSSO6QIFcQmcDqpMY25o7QOFBFSBQqiUOyvhMAC8WHl0klp5YoIPLfG0aX3mQoL1QGb8SAtV3z5iUFHd%2BmHWaOZhTsvBSIofghvzxycq2zlzywNQSXF8kYE01Kxu4IYc556O66%2F5qpOaTh9yXc5dU4lsNdSB2dbp%2BLQgsUWnFfndsxhVFmv6Afr2qBAI5QHFN3a%2BAwb0ovRrba50Ttd2%2BGNEg8OdUCrdGjoQYjq2LpqtYXhrzQwRuKBfXNJ42iqYceEHPxcX3rB9R86jVMoF7ytVJW6cQ42gfFHmnaqERoNh2YS7TFqI7MIrVycIGOqUB9%2B6UFaRQlPH8u8RgXrudMf%2B07cb9m%2FOu7AG%2B3IrwmU%2Faqvem6buNSK2rQJq%2FmSixpXQ%2FH8Ug19uDggVVqqJy48Lq6Om%2BeHV49LLcy7ii4evewQt5BqDAMGwSjupm2jQqVGtoMbsH6P5iDftUABDkSpLDeEMc9MD66gGOU5tv7QXSZ3xwztOj1NnDx8WK18fiiq35LlckJgzpC9jKpL6Amja2%2Be04&X-Amz-Signature=323510539df95e0c432d01f8b08d7ae85578df515cb54557d68bbe348fbe926b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQVFKKK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIWNTa10sTQAxkl%2Blr40DwmZyNpEEUO%2B4oBUv6WONu8AiBG3NxWKKJ0v3C0fpxZnrDFmrXyEI5xSA73k3SXMhWL3CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fs4G86Ctjp33NxXKtwDOoIlSOqjRPsuouQ1nyfLfE6WfXG%2BRdUnSGjfTXj9szyVnK81YofCXcYJ3Joti6kLdrDDxggAEM5X%2FGizy4TRZuzccWyP%2F%2Bw1PKbybWSQ%2FMJVghm%2FDGT93riiNtwzsp5JYTUsBKGMYoT7YXgM0QHBy2QQmpiNau%2BScZNLlfD2QHadQSJqiKMdqf1ze1W3eARZiOqNxsiXv9q9xpyNPifMAvzaLJnl0lDxbGPAUogj29jllk49%2BpjO4bUdB%2BK4XN2R%2Fr%2FlPKCt9RZISpazTZv7bo7FKtBLQ2SK0dcPUOP0KxOHZ48kyEGEC1c8A%2FiWNZBayC66zgXCjUVr9%2BP%2FCDHxw6Ez1Qv%2FUbqeC1Yo7PaDJ%2B7Jf3y6M3uCyQroV0AKY9bYGY47TvGv8rSOzHbNyB1%2FNNMxRK%2BAaEmML7A6c%2FM6wIGlnoJoNNZbx5DgHhOV1E5tTdhpYvq6QqfNBnxxFrswlVDyHxVYQMDvrGCRXJphw%2B6Ge1m01dBcoVPu6%2BrBxXkdi0m4q4QAOElK5kaDBoH0uf%2Fim%2F1TjNfAsZ8wHp1vaV0sjPmGq44xFv5BS72sBS%2BafWQBLv7b6tpsGMGu6jDj12T4kjNjiRwBltxHIBVkIAeqE8b7vQR%2F7q5uZ6ow8dXJwgY6pgGafOeRQOZo4T63Aay7W3BeWek77VWRnJKg13WnV%2B1jwSlrLcCj7LJu4%2Fvu5u0YPYXYzOS57QH4SAHpvUei%2F%2Bpc0Qpa5yJf2GG1AJj6J%2FvgdqoK7cQeyKlZo6sMQ86nuqEOGLVDGTHPrravMO0kIgebDisyyFKO7JUhGc8V24pG9hAkr0ycW92%2FnhPNugVtHABvm1zS5L6GD40YzBQdrEpeMAT2hRSu&X-Amz-Signature=8a7bb9f87e0242e451792b062c03a61b09aec9bbd3d6c19270aa336acb51a168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFWYJV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsK3vVAMABp8YnzxeBz%2F9%2FWSkrmwTxfOESmnN8zFalyAIhAJXeQQ83NnlRQlZxQKluOolB95GiUbicUuc83ZLYRTuYKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsWA0iKUWD43qYe1oq3APqwaW69Dshgz%2FZ%2BGBJ4X5UFUJ9aWOQDkoD93zsncF3ExO2ZQ%2Bk8UKHro22Y6ivUCzc0t%2FJYkG%2BVifGZSqe4V%2FUjJfbh4U2P5VwsHdN4xVSCpvpXT4zW6uwtaL7yIxVuvjdXqHmJJhJVv6OKTFr6335A6u8FNhStugyXqShVGpRS8Ds42A8fMuuFGlLTX5yag1UwnAvW5Zq65N9hGtMINUfZcPVxdX9M72FftOMyE9oUGo2z76LgGB0VgUOIs2sLPFZMj8TukYcIyQHi5WEcTDsn%2FvK46ZJ%2FK11th05bkUxkQ%2FwIdiN9CWjXvNthj2kS20nJGQ9XOeWuA5%2FZNf7eaU7tzQW9cupYfmG0Bt3rx2W1pmbnReuH3dE7BcTbRJe41nC4lm6ugijpsFXrr%2BsjeulJIKiOjudd9aVucYcJDoGJpmTnEoUlKiz%2FY2D%2BocFDJfkl56Bmorsbe1qxN6bxZ9%2FKTXmOXzgoNUqWnCH5USmZb%2BjwzSeeh3T2DtmUcDKh%2FKUW0jeOLytHg2iTbiMGrJ7fMfZ0zkG1ckQEKMOtf%2B8BdgXiWWrYEgpCAFaD%2BdfW5a8CZtN9mBKhl0KjG7E7wIgvF8B7eXLyxlJwJh8o8JMLWWcHWAPBFTH3SWlGDDy1cnCBjqkAQDZzlDAHbum6lZujPVw%2B9s5ie9mO2InVSR%2B3hQFocLRf4G4J8kcVa%2FSyTRA%2FQNdbuyuWcmOXjqeYxNxc4bTTfAM3xRvNkk7%2BG3NPcTjvVB%2BlOA4k4y9VEimXrYkJWcwSAWt1epzO6I4tEe8Oul5fnTIrlSQbQO5HhbPrE%2BAM3XM%2F2osEBMd8P8jGXTnO3QUNTOXIm6d8AVNVO9uxuYFaPP0ajra&X-Amz-Signature=4d128adcacf33888dd8438b594df17487076c502a9a3961f0f553e25238b4ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
