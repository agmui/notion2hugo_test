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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5O6A7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiMpObfKsHSF5CrMY4QBqidcB6ZnJKMV6oKI3paVoEXgIhANlKoEzgT3JZwU75ucveMsWpsSQ1W7IkcyW3kZ7i%2BdPgKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhnAxpxf25oCowauoq3AMqfJtdQe9iCeQOT3%2F%2FC80uWSFrtTjkYlyISoGTVhkeC9AKEn02wksz4nRAANNebRW2CvlX0PhS6pKVfPyeKCrc%2B%2BRQMoVP3b8YczPnOGrzb4COPOpuibONj0efU%2F7PhqvE28Xk3iflxu6ozpWfSqBQZcggud%2Bptus8wNOxxbTAF3K4yJp%2Bf69vdD3HywEGCi%2BVv5tsGzkeNypLBPXdwswZcNG3DO0TvMKg5XNE6ycN%2Bp6%2FIaBgK1pKYG3%2FBGzNWkT0xDtvnVSs0apK1l%2BfDOeGT1Lm6TMtdRWsu4Pk2McPLdpYtw42wASaJOyUeyL742b4Hs05HK%2BSfIPWCB4hP531eIM6HNIPFq2exa%2B%2F9M5GS8xKeDkjmqXGG5W6E%2FnkdpsBfci%2Bm3G3SNZOpVrCA5%2BtvPWYgoJyxpNsXGE2lq5q5p3gFxBvA923vBkRafg6piBl%2BnbYZV7ON5wKlB0gVUdg29OFaEKjk7u8qohlZItp%2F%2FX43%2B5uVv%2FYb7n4xGwxEs4ykUnqJRetoBCkrL6xfq4j3NQyHj%2FEjVY5BJNdOWciJnJr%2FnvnrwSqPSY1bR1gBWq36c9wi4ToWzZ50NGvR%2FaciybzG%2FgZqg6Ng%2FiblqGSW5F9OjMo3XHnzhxdsDC%2BzOvBBjqkAUxTB7Y4zscagiSSderDASzi4xebZgNv9IITbpRSpjqeruQOApQhJeXHjB1mwsznCZFaXKSqEgKrT%2FPzrmdqpVt3XuYDnsNMxHqXrpqjydWHj0DQwlGg6c78TxvbAg5lIrM%2FFbW9TMP15F876%2FAmwiNneCgHUwU%2FYFrTK2WA0PL7ctEfR2t7zsNyo7rmjcaOoIVjbcee9bT%2Bm9kA5zj3%2FcyJOH5v&X-Amz-Signature=3b230921b463319717b7c8f8673586edc5e2aa573ba0461f8259840459ce3135&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5O6A7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiMpObfKsHSF5CrMY4QBqidcB6ZnJKMV6oKI3paVoEXgIhANlKoEzgT3JZwU75ucveMsWpsSQ1W7IkcyW3kZ7i%2BdPgKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhnAxpxf25oCowauoq3AMqfJtdQe9iCeQOT3%2F%2FC80uWSFrtTjkYlyISoGTVhkeC9AKEn02wksz4nRAANNebRW2CvlX0PhS6pKVfPyeKCrc%2B%2BRQMoVP3b8YczPnOGrzb4COPOpuibONj0efU%2F7PhqvE28Xk3iflxu6ozpWfSqBQZcggud%2Bptus8wNOxxbTAF3K4yJp%2Bf69vdD3HywEGCi%2BVv5tsGzkeNypLBPXdwswZcNG3DO0TvMKg5XNE6ycN%2Bp6%2FIaBgK1pKYG3%2FBGzNWkT0xDtvnVSs0apK1l%2BfDOeGT1Lm6TMtdRWsu4Pk2McPLdpYtw42wASaJOyUeyL742b4Hs05HK%2BSfIPWCB4hP531eIM6HNIPFq2exa%2B%2F9M5GS8xKeDkjmqXGG5W6E%2FnkdpsBfci%2Bm3G3SNZOpVrCA5%2BtvPWYgoJyxpNsXGE2lq5q5p3gFxBvA923vBkRafg6piBl%2BnbYZV7ON5wKlB0gVUdg29OFaEKjk7u8qohlZItp%2F%2FX43%2B5uVv%2FYb7n4xGwxEs4ykUnqJRetoBCkrL6xfq4j3NQyHj%2FEjVY5BJNdOWciJnJr%2FnvnrwSqPSY1bR1gBWq36c9wi4ToWzZ50NGvR%2FaciybzG%2FgZqg6Ng%2FiblqGSW5F9OjMo3XHnzhxdsDC%2BzOvBBjqkAUxTB7Y4zscagiSSderDASzi4xebZgNv9IITbpRSpjqeruQOApQhJeXHjB1mwsznCZFaXKSqEgKrT%2FPzrmdqpVt3XuYDnsNMxHqXrpqjydWHj0DQwlGg6c78TxvbAg5lIrM%2FFbW9TMP15F876%2FAmwiNneCgHUwU%2FYFrTK2WA0PL7ctEfR2t7zsNyo7rmjcaOoIVjbcee9bT%2Bm9kA5zj3%2FcyJOH5v&X-Amz-Signature=fab48b45329772a719e1f7a0740db0ef726a4ea8a73084d65cb8e9c196a4bd22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5O6A7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiMpObfKsHSF5CrMY4QBqidcB6ZnJKMV6oKI3paVoEXgIhANlKoEzgT3JZwU75ucveMsWpsSQ1W7IkcyW3kZ7i%2BdPgKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhnAxpxf25oCowauoq3AMqfJtdQe9iCeQOT3%2F%2FC80uWSFrtTjkYlyISoGTVhkeC9AKEn02wksz4nRAANNebRW2CvlX0PhS6pKVfPyeKCrc%2B%2BRQMoVP3b8YczPnOGrzb4COPOpuibONj0efU%2F7PhqvE28Xk3iflxu6ozpWfSqBQZcggud%2Bptus8wNOxxbTAF3K4yJp%2Bf69vdD3HywEGCi%2BVv5tsGzkeNypLBPXdwswZcNG3DO0TvMKg5XNE6ycN%2Bp6%2FIaBgK1pKYG3%2FBGzNWkT0xDtvnVSs0apK1l%2BfDOeGT1Lm6TMtdRWsu4Pk2McPLdpYtw42wASaJOyUeyL742b4Hs05HK%2BSfIPWCB4hP531eIM6HNIPFq2exa%2B%2F9M5GS8xKeDkjmqXGG5W6E%2FnkdpsBfci%2Bm3G3SNZOpVrCA5%2BtvPWYgoJyxpNsXGE2lq5q5p3gFxBvA923vBkRafg6piBl%2BnbYZV7ON5wKlB0gVUdg29OFaEKjk7u8qohlZItp%2F%2FX43%2B5uVv%2FYb7n4xGwxEs4ykUnqJRetoBCkrL6xfq4j3NQyHj%2FEjVY5BJNdOWciJnJr%2FnvnrwSqPSY1bR1gBWq36c9wi4ToWzZ50NGvR%2FaciybzG%2FgZqg6Ng%2FiblqGSW5F9OjMo3XHnzhxdsDC%2BzOvBBjqkAUxTB7Y4zscagiSSderDASzi4xebZgNv9IITbpRSpjqeruQOApQhJeXHjB1mwsznCZFaXKSqEgKrT%2FPzrmdqpVt3XuYDnsNMxHqXrpqjydWHj0DQwlGg6c78TxvbAg5lIrM%2FFbW9TMP15F876%2FAmwiNneCgHUwU%2FYFrTK2WA0PL7ctEfR2t7zsNyo7rmjcaOoIVjbcee9bT%2Bm9kA5zj3%2FcyJOH5v&X-Amz-Signature=d2bb705667c2efbbd8e9d4ad981d3be893d83986dcdc1029b322af277bfed354&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AFY4J2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7kdkoSDgUyA40zKOeGPm4f5HrHhWD73FfuZDl%2BbjjTAiEA4PYaBf8ZPLIGxcoKhKMRFXG%2BR%2Ftk53dxaPP7yXskQ4YqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYQBVM6b9HiStEZPyrcA0F%2F%2BfGS8JaPuHz%2B91DkfvJnt3u2chZ%2B2OYNCZ9bFeLo%2Bf7pEKcweZT3NsIKxmAXeWJfWSR5xvRzdcI2CXhHJC4KlASlbo2d8JRT%2BbEOTqQtX%2FPjO%2BEcyeIbTM9Vl5LsrZAtO11sjSCS9%2BXolc0XyhsoqMrWYFo%2F4xz3iEA2ee7TUjmorbaiNTpDd%2FTGnFR2qk4LlFUSzl8zC%2F03CY22VOuLe9%2FWxY04Noo%2FmFAbTZ542oYxH8wYmuD7%2B9U%2BgJung46oWxerVrrmXx5%2BEQGHyRDRiv3k3GjUJZv8x48eeZ9%2BDfsRY1js%2Fepo79M0ZGoaedlpvVCXMUH40XnNr1ErPwMg4hVncHq0QG1q39ESr3qG%2FHo4umt0x11Zhz8SHDYykbIIPG9mjg%2BDANB6V9iliKuiMMHsOlacpiBbD%2Fb5qcez4GG9rGdd3JjaO%2Fj1ZIdRwABTnfNKJESAhebHe9xDK%2BxElR0EtDiugFMXbZsl8bQlOCiPIQWHYjVxJnSoLsyX8MB824n5YOG41rujkPoEeTW4kUuxjxydwfBWhWVOhWUVxQfHaxtS4uxtFzn1YaFdm623lXQ0TQC2Uft1ite73jT1XehdAMlYUAZn1v6yldyNXNXfd2GmCAAsAvAaMJLh68EGOqUBmOQ7E4dfaZXh5I4b7bi%2BmDC9Bx4pGA3XtFCes7ySEYlzKBNk5Bs6NycRepCJEfEBfMoqgeCbRnL8XYSxYYtt2ykMIDOFX%2F9vOqIONOpitjJYSxRzOcJw87FIlkzlOe%2FzPI3O9UOACJ6QmhFGHP5r5UHe2XymwOjAd2WeaYx1vpXBdVGKG3%2B%2FE78layDvhvVDEwOyc3szJhBQlAVHKd3aQcM4x%2B7T&X-Amz-Signature=d0d903f95065afbf6a09aa1daa5bd5e4b784740b36a8a79e061dde52fc397948&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CZOPMB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg3MwwrbPeXn9aaW3o5R7MVF%2F3Oc%2FVbarE6wIRynESuAIhAJZU1X%2FUYpXkzaYWbg5rBVaNRPVRQrsg1q0eHvbLCi66KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwj75UErQZ2NvgnFwq3AOxGePqbFqDbQMZXhEQCfa83f6vC02Gn1356eYAeyqSWwl5kLOPVlcL1YBLCrJPA1JXqhCZVe97jdcTCIi109k6harZ%2FYGwJLeBiyVpHvhJIvTPiFEx7JPJwBiNkfeaUOtjtuovXO4d939TmAcehVMMOGI9wkJ6X%2F7rxRVUSoU0q3ULgrknCJHdc7F%2FzEHB4vEoTkZS15hZN4zqW%2FfOCF1KdoXm%2F7vKBKCVQA2O2Hg3MNRj9ol%2F8Y3wv5VIUSsZzIIb4pc7l64J8edkBW44COEjcFqvs2tdV46WKsXsmuzTj3m3yxVqY%2F47CWEg0WfpTMQBSKByvugywyp4B3Gj8dvolpyq3FXB6DMhBmu%2BTgyRRLUok%2FmrmIWKrqObaRZ3wonI29ff0cLLArbOXte0O%2BqzQ1nZU5Bavmg2BZ%2B3nIKLIFy2FL5OWnFUg3nnjciF3PgOvxCq0WTWElfkoXBjTI8rUh00LXHGnU7LyixMvLqXC9h7EMqWQLcwsyCXJC2Wm9wKeFhgEkh8%2B78O4JJAz4wMN7iZGd5PnpL5IDGgVQwPEM4PDCKL09P7HwNMWSCqNT2AFIOg2IOXnbmEDdYtzGZBpbHEaQS8fc6iSSyNVrgm2pzn5dikAVHUck03KDCiquzBBjqkATH7Ok3W56nN7v7AHcA36gVzLPze3K%2FDd2CoX8dwIUTS4J0FJTnN6c6JT6OvjNBZSoQa8k9SCdWJeQyIsO8Rbqy486cD7AZ7k68DeoODHmQ0i3JwvQTCQ7z21DElmVcSM7XBXo0m1iebN1z4l11LoKjLHazvjAi37QgTlTzyFXEU9US6J6Rin71gV5GOM2bToida%2BGQ%2BsCD4NWhnM3F462QoPmX5&X-Amz-Signature=b07e8bd408d2c08cafd5def3804671ba0b0b2c17a071488cffaee97d3155fe91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VY5O6A7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiMpObfKsHSF5CrMY4QBqidcB6ZnJKMV6oKI3paVoEXgIhANlKoEzgT3JZwU75ucveMsWpsSQ1W7IkcyW3kZ7i%2BdPgKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhnAxpxf25oCowauoq3AMqfJtdQe9iCeQOT3%2F%2FC80uWSFrtTjkYlyISoGTVhkeC9AKEn02wksz4nRAANNebRW2CvlX0PhS6pKVfPyeKCrc%2B%2BRQMoVP3b8YczPnOGrzb4COPOpuibONj0efU%2F7PhqvE28Xk3iflxu6ozpWfSqBQZcggud%2Bptus8wNOxxbTAF3K4yJp%2Bf69vdD3HywEGCi%2BVv5tsGzkeNypLBPXdwswZcNG3DO0TvMKg5XNE6ycN%2Bp6%2FIaBgK1pKYG3%2FBGzNWkT0xDtvnVSs0apK1l%2BfDOeGT1Lm6TMtdRWsu4Pk2McPLdpYtw42wASaJOyUeyL742b4Hs05HK%2BSfIPWCB4hP531eIM6HNIPFq2exa%2B%2F9M5GS8xKeDkjmqXGG5W6E%2FnkdpsBfci%2Bm3G3SNZOpVrCA5%2BtvPWYgoJyxpNsXGE2lq5q5p3gFxBvA923vBkRafg6piBl%2BnbYZV7ON5wKlB0gVUdg29OFaEKjk7u8qohlZItp%2F%2FX43%2B5uVv%2FYb7n4xGwxEs4ykUnqJRetoBCkrL6xfq4j3NQyHj%2FEjVY5BJNdOWciJnJr%2FnvnrwSqPSY1bR1gBWq36c9wi4ToWzZ50NGvR%2FaciybzG%2FgZqg6Ng%2FiblqGSW5F9OjMo3XHnzhxdsDC%2BzOvBBjqkAUxTB7Y4zscagiSSderDASzi4xebZgNv9IITbpRSpjqeruQOApQhJeXHjB1mwsznCZFaXKSqEgKrT%2FPzrmdqpVt3XuYDnsNMxHqXrpqjydWHj0DQwlGg6c78TxvbAg5lIrM%2FFbW9TMP15F876%2FAmwiNneCgHUwU%2FYFrTK2WA0PL7ctEfR2t7zsNyo7rmjcaOoIVjbcee9bT%2Bm9kA5zj3%2FcyJOH5v&X-Amz-Signature=2db46a30681551ce7945eddb90eccee8d9a3d7b22006de949a90ebaa63254c65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
