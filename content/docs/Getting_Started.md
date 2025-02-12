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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVSHSNO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1jxC1QVyiXTUCaA4S4e9JgpfLlMVIanYJwUiR6oMk3AiBNmjy5L%2B%2FHgfYTOG1eKRLztaAFnlYXS2%2FFzQEItqJoryqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WiY%2Fy0J6Nd%2FCVZ7KtwD8MxqP9nKp43G37p%2BggR6vEsu4QezElDL7CdScpvBIevuTEgYd28zRyc2S1hP4hkPbHfo2LByzOrkO9eHLE%2Bligbt7cz2QjrweaEJBM4NmuRTU4D%2BZS07yAu52mRyWCiB6tDZCWI7KTpjITZeGZm4rifYMbAEO%2FSOpIY3zOlHanS%2FMNoXsB%2BKIzMZOXBy7gldU9wMQr5FtgUOiwieNOYQaGRpxQPi1VP26AE%2F4nEEomEl%2B9g1O1ERr%2BT%2BBUKtozs8mC996c1zy83sj4K17iM0dXaKRZyKoWdHQBTb61Ho1qFgkezyVkk4pna7KR0iosgHAfvpVmMYCkK2GJ5u7SxuOnhN6tF0brz3L1bbya5jZ%2BNVVTOVGwJcUWTKeOMx22V2IVzGNh1dVMwB1H1I92laapzKyzEiVJXXmNJB%2FCH%2BnZslM9rLVYsiWtGfYifPynjuSy6HNU7PjukzLzntkYUyCEQUV37kuRxtYSqTyL1UsXLhqpfJyEhZFk6pvXReSLnw6A6Wq1LblmMScgFXAVqHxfK0VGA6AlP9XG3yaMx9jiGwQmiMfkFKRv9AHNSlhCUAxf3UUW9jvvwyKvynbC85fzYxV4SGjYRPjS%2BsqtcHKXuloNp6sO9Xkc7UrY8w3%2BSvvQY6pgH6PIu5H21QceVLJKkQmLrLvneq1rQ9Exrxy%2F0F%2BYNn%2FJXCUl34GQiEdWCDWC57d9mNe2gaNsfMcHPWR%2B7xH0cSTIrA6D1UVnXDe3TNsQSnUgQ2H0lMj8vQ%2BYN9G8mj1ZHWlTEe68y2GeCYalPgD6pBwfBg5jxKQ9%2BrePx%2FG0XJOyBhpdT5a7cVnY%2B86N3T%2B8FT0QQAGGh%2B%2BRez3oyvDqjeBVN66f%2FF&X-Amz-Signature=b6d4c26e3a7ce5340a66735f533c0e36ca34f3ab42fa7b5a396f01f7448f3299&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVSHSNO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1jxC1QVyiXTUCaA4S4e9JgpfLlMVIanYJwUiR6oMk3AiBNmjy5L%2B%2FHgfYTOG1eKRLztaAFnlYXS2%2FFzQEItqJoryqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WiY%2Fy0J6Nd%2FCVZ7KtwD8MxqP9nKp43G37p%2BggR6vEsu4QezElDL7CdScpvBIevuTEgYd28zRyc2S1hP4hkPbHfo2LByzOrkO9eHLE%2Bligbt7cz2QjrweaEJBM4NmuRTU4D%2BZS07yAu52mRyWCiB6tDZCWI7KTpjITZeGZm4rifYMbAEO%2FSOpIY3zOlHanS%2FMNoXsB%2BKIzMZOXBy7gldU9wMQr5FtgUOiwieNOYQaGRpxQPi1VP26AE%2F4nEEomEl%2B9g1O1ERr%2BT%2BBUKtozs8mC996c1zy83sj4K17iM0dXaKRZyKoWdHQBTb61Ho1qFgkezyVkk4pna7KR0iosgHAfvpVmMYCkK2GJ5u7SxuOnhN6tF0brz3L1bbya5jZ%2BNVVTOVGwJcUWTKeOMx22V2IVzGNh1dVMwB1H1I92laapzKyzEiVJXXmNJB%2FCH%2BnZslM9rLVYsiWtGfYifPynjuSy6HNU7PjukzLzntkYUyCEQUV37kuRxtYSqTyL1UsXLhqpfJyEhZFk6pvXReSLnw6A6Wq1LblmMScgFXAVqHxfK0VGA6AlP9XG3yaMx9jiGwQmiMfkFKRv9AHNSlhCUAxf3UUW9jvvwyKvynbC85fzYxV4SGjYRPjS%2BsqtcHKXuloNp6sO9Xkc7UrY8w3%2BSvvQY6pgH6PIu5H21QceVLJKkQmLrLvneq1rQ9Exrxy%2F0F%2BYNn%2FJXCUl34GQiEdWCDWC57d9mNe2gaNsfMcHPWR%2B7xH0cSTIrA6D1UVnXDe3TNsQSnUgQ2H0lMj8vQ%2BYN9G8mj1ZHWlTEe68y2GeCYalPgD6pBwfBg5jxKQ9%2BrePx%2FG0XJOyBhpdT5a7cVnY%2B86N3T%2B8FT0QQAGGh%2B%2BRez3oyvDqjeBVN66f%2FF&X-Amz-Signature=a45139d6da9bbd017b04fe469f73680c765cb3f8e33ec2694fdd2baefe975d24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKO2TBH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL%2BmsoILZDMwHtqZ%2F6QMXiKZFV6KpmWTlWs9hmL%2F0ufQIgFZc%2BM35dzMz6os7hUX8Dxncty5tJFbNeBhk2v%2F0gLucqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4V2xIkCmmhSBv1YCrcA%2Bl7UQ2A5r90wvTSQTrcqc66h4D54RVcfdf6ncTB34Or90pJ6ybb4Q3veOU9%2BEOMARSuoE91TDQKrNqlctJFlplWmIAjOn95kYvK3yO5k9xCpg7Ckhd1PO75fhTso8wlQwG6vToaBQtwT37%2FKgI3mfSu9kZmItvuuXDXCi56u8niCtI6KHKmGPOUlfiqnsDq%2BhDVW%2FCBHkQX8rtieEJqQ5JLbH%2F7qO1jp1%2BTlOG4qlAyLL1IFqcdd60PKRXpPUn16vwVJBJOONnu58S4FCSG%2FQyD7W5hiCdV6tt%2FFctzapt4UjCs%2FCJUkxXVfHO9oxMFYH2M8TE7wQfFv%2BXya15qyv5NrnNB5aHtOQq%2FRY2oWIANnLcQwPe6QZxHIrO3ph9%2FqV%2B4hU1Fb8g8al7DsHaAdhf2XhCoV8D1q0VYvn3YBo2ZVrsGGQUgF%2BsxdUqC6TRvecDyQ8sCDQvmIXzcYQEPtpeXiOFeepR9LIFAVhI5QgOSXDjoUfsW4AvOv01lf%2BUFqRTYsTqlOUvLoXoO87n2sk6wDCl4ygqmVa%2BM%2F8KyfGv6RTwL2mdOR8u6v1VO7VnTvF0I4qV0A0rYF2GTkyWB99sdmzFHNQf6aLGHcaFkzOWfqKlXDBGIakEpBceSMJTmr70GOqUBpcl03NtyXqAF9UqGqXaVJAZFOW4%2BsQeZxHmUzdwiYuznYxe1WkTv10FFOEvx2G9hIRuu6mHEVfgtjarz%2BxzqSMqgypK%2F%2Bf0OQdEKG0W2mtjIlrDqNgH6PU0%2FfwdzbyYJNHm6UUm27HmwyeO2Pd8HF5ormGPKzRcdjqSU9FtEmo5t2mrOYxEkFjVO7bZL9%2BRmHS2Iad8jxn6cbsUe5Re%2FvnULBteP&X-Amz-Signature=796842cfc5fb2bc963a8f39b18c7f48ac6b67cb9f0b541f270699b0437d483a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIUOAXE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Yj8dkKMsExjC%2F5MNeh9UGfB%2FnsAIhfFka0a2kyxhVAiBMdfc6wS5TYcVA6HB35Bh32%2Fx9jRrGm4F2c51CAhTNrSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmr1L1Uwp4fjqWghKtwDglg0pyIadEcH2EbsdpsDGaTU%2B5J0mEynteLwEM0ieI0NZaja1paR0tFPOlw77N52fQRT0lu31baDLRGViMQnC9%2FTEcPyoU376luq34rqlFhMNBcklOu4VWsn2HXsN4vSb037RnD3GpMWTR3R7JkSEaCt6LqZQz9%2FKUdWWD%2BCNj8hOAc8xuZExTvNMiFmVrjLGmvgYNWzEVjdl6ioTYFpzRQwfuJQwfZ2EE4Qf2cN2%2Bv8ihiyp1spGPAA6xYW0J5kyb1i%2FjQNd9FSGPgmhfdU75gS7Nw2XyqB9%2B%2BZxT%2B2X9%2Fw85dZuciCmirxuNOHtr26hnVfmIGjJyM5qLb663BWmKw3hAGE72YQ8ebRrDMC8DrB87Rmlzwir1Nfm%2Fkgzfm9qfeFWDJHGMx7dQDVEa%2FGB3bxuKZIr52drhD5bxGH319QzI8hqndWmFrw08mmv%2BWuihZ7eSaK2CvOMG8VpcOXFV60NoUSZcBgAj6BUq%2FwDh2wEFSXYvyFhwzoNK0y08Uedkvf3t%2BxeDHaVo4l73XqmUfrwSLAY5hJ4C1CzmKpfdxSAlLggAksc794WZsTGBVarvf7eaxyCqd7uyfigxARf0r4a%2Fl5tsvJRbR5UdoYPVErXDxQINFCKG4%2BePAw2%2BuvvQY6pgHR1eFGlH3A1seTWrEhMDL2nsCFjSV%2FVoFkt7qpP7eoPyhn3sGLgr2J8HAqlh%2BQcl%2F0mlfLWJrkwVJZGszOFNA0QB9tqovCLKOTMaTu6AUs1Ma7R5qNou%2BAmFQJr8thKYYBg6uma4Aet5cm2EYod6rfs8mNhUhr9MXmWniZlQgElHhKZizPDXPZSjDJUEHpF6cHlGJGFO8j0RVPT1QZSwvxQL1PCuzE&X-Amz-Signature=eb8508d500f69933410fb0052301b2e47704b8d22b6caa068c286b46c3b66310&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVSHSNO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1jxC1QVyiXTUCaA4S4e9JgpfLlMVIanYJwUiR6oMk3AiBNmjy5L%2B%2FHgfYTOG1eKRLztaAFnlYXS2%2FFzQEItqJoryqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9WiY%2Fy0J6Nd%2FCVZ7KtwD8MxqP9nKp43G37p%2BggR6vEsu4QezElDL7CdScpvBIevuTEgYd28zRyc2S1hP4hkPbHfo2LByzOrkO9eHLE%2Bligbt7cz2QjrweaEJBM4NmuRTU4D%2BZS07yAu52mRyWCiB6tDZCWI7KTpjITZeGZm4rifYMbAEO%2FSOpIY3zOlHanS%2FMNoXsB%2BKIzMZOXBy7gldU9wMQr5FtgUOiwieNOYQaGRpxQPi1VP26AE%2F4nEEomEl%2B9g1O1ERr%2BT%2BBUKtozs8mC996c1zy83sj4K17iM0dXaKRZyKoWdHQBTb61Ho1qFgkezyVkk4pna7KR0iosgHAfvpVmMYCkK2GJ5u7SxuOnhN6tF0brz3L1bbya5jZ%2BNVVTOVGwJcUWTKeOMx22V2IVzGNh1dVMwB1H1I92laapzKyzEiVJXXmNJB%2FCH%2BnZslM9rLVYsiWtGfYifPynjuSy6HNU7PjukzLzntkYUyCEQUV37kuRxtYSqTyL1UsXLhqpfJyEhZFk6pvXReSLnw6A6Wq1LblmMScgFXAVqHxfK0VGA6AlP9XG3yaMx9jiGwQmiMfkFKRv9AHNSlhCUAxf3UUW9jvvwyKvynbC85fzYxV4SGjYRPjS%2BsqtcHKXuloNp6sO9Xkc7UrY8w3%2BSvvQY6pgH6PIu5H21QceVLJKkQmLrLvneq1rQ9Exrxy%2F0F%2BYNn%2FJXCUl34GQiEdWCDWC57d9mNe2gaNsfMcHPWR%2B7xH0cSTIrA6D1UVnXDe3TNsQSnUgQ2H0lMj8vQ%2BYN9G8mj1ZHWlTEe68y2GeCYalPgD6pBwfBg5jxKQ9%2BrePx%2FG0XJOyBhpdT5a7cVnY%2B86N3T%2B8FT0QQAGGh%2B%2BRez3oyvDqjeBVN66f%2FF&X-Amz-Signature=be942997789864d53d8f70a0dd09a1c8ec6307beecfef81fbca9b89bc7f65f82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
