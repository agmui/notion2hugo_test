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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGXTNKWE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7pZNngV289wYpzRwcMSTEffIhdBplUTLygGTJeXkX%2BAiEA8sfzyaMk8Bz4hz67uIlBCEIs8e6oPpB7RC9uwcBKsmYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDI9xZQ6HAdD5Byh%2FAircAwaIJECDtKWlOUMcvXFmrp4dH26XD1ZjGTJcgHxWJItFUZqZ70ss5gXGpF2W8SAPOBsiH1SoZYd%2B33U9GDn9QcDzIv7Ox00mtEHsNr4u2odHLa6HIi5WQExJr2JTs3YW7ZyUgzonmVnLqWTcpNJg%2BmFs4coXFvgr2xHq1VNyfYJ3gUF8fMyRVbPuvCQqOoXv5z8iMTlXh95TUr016ZcuWjjToM2vwwptjBaU58xcWPxMvqDswPnX4aeXyua5YB6suRZyX7ap%2FWIitX4PiuCkxPlYfwrk9j2sw7MLUE7jT8k1DlgowpbNfYmsuN9Zoej%2Fxil%2BMDFts4kAqb8ws0cxVvbH8B%2FSBsUwnI4rTiBJn1gjEkYJKGhdP86V%2BV0ZbJrV5szkZTmviiV6eJcq%2BTNzYko1cALpbpK1pZVmf6wwTUcRDUMMBt4gaHB8i5xKfe5q4TF37A5bGwggW%2F6%2FDml4OZXd5HLRZfPHW7osBnkBflYSLyFuLiROKED76zA%2B3z2Zd8A6tw0egpxZiQWwPLqXQi9Hg3WrZyibeVRmFcW2myp793pBb%2BGNWSFRO1gBsZpE9SFq95dFi9D8ZjPTx%2BCc4XoUaKCJweuq7dhQ4PF7TMMXTVyTyJjbbWftCNGUMN33l78GOqUBsY9CTjMAxd%2BiCfx2LGLQ85V6N4xZsvN%2BeY7nENbVWxJwxCl41U4sEi4qmxv6VhvOkHfrUNBxWCwxwtGJWT94%2F9FeIkgZxcmh%2FVXIijopFfHvg0B7wvKIhPbrLtAJxsYLh3UO1gOl6BhzpO7HV7IGVaqhW7A4v3jVJJn%2Fswu3rL2LcA3eRr9aDCJMuPFn8XmLBm2eie84jiaoYwmhy5NGvt6xOb2e&X-Amz-Signature=6014dbbc11e2a1fe1d79f0a6167e4bd650deb530ea6d19b8781deeac07a3204d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGXTNKWE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7pZNngV289wYpzRwcMSTEffIhdBplUTLygGTJeXkX%2BAiEA8sfzyaMk8Bz4hz67uIlBCEIs8e6oPpB7RC9uwcBKsmYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDI9xZQ6HAdD5Byh%2FAircAwaIJECDtKWlOUMcvXFmrp4dH26XD1ZjGTJcgHxWJItFUZqZ70ss5gXGpF2W8SAPOBsiH1SoZYd%2B33U9GDn9QcDzIv7Ox00mtEHsNr4u2odHLa6HIi5WQExJr2JTs3YW7ZyUgzonmVnLqWTcpNJg%2BmFs4coXFvgr2xHq1VNyfYJ3gUF8fMyRVbPuvCQqOoXv5z8iMTlXh95TUr016ZcuWjjToM2vwwptjBaU58xcWPxMvqDswPnX4aeXyua5YB6suRZyX7ap%2FWIitX4PiuCkxPlYfwrk9j2sw7MLUE7jT8k1DlgowpbNfYmsuN9Zoej%2Fxil%2BMDFts4kAqb8ws0cxVvbH8B%2FSBsUwnI4rTiBJn1gjEkYJKGhdP86V%2BV0ZbJrV5szkZTmviiV6eJcq%2BTNzYko1cALpbpK1pZVmf6wwTUcRDUMMBt4gaHB8i5xKfe5q4TF37A5bGwggW%2F6%2FDml4OZXd5HLRZfPHW7osBnkBflYSLyFuLiROKED76zA%2B3z2Zd8A6tw0egpxZiQWwPLqXQi9Hg3WrZyibeVRmFcW2myp793pBb%2BGNWSFRO1gBsZpE9SFq95dFi9D8ZjPTx%2BCc4XoUaKCJweuq7dhQ4PF7TMMXTVyTyJjbbWftCNGUMN33l78GOqUBsY9CTjMAxd%2BiCfx2LGLQ85V6N4xZsvN%2BeY7nENbVWxJwxCl41U4sEi4qmxv6VhvOkHfrUNBxWCwxwtGJWT94%2F9FeIkgZxcmh%2FVXIijopFfHvg0B7wvKIhPbrLtAJxsYLh3UO1gOl6BhzpO7HV7IGVaqhW7A4v3jVJJn%2Fswu3rL2LcA3eRr9aDCJMuPFn8XmLBm2eie84jiaoYwmhy5NGvt6xOb2e&X-Amz-Signature=21c3d378a43e04637f3a6a754af04dd7634481f98c383b5372ddaddd815c60c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBAE7DF%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7T3ZXcO%2B7JYgRWcIzHkCr36ipBVo%2F9rauuUUcJxXglAIhALFAVtrymjFqk5iNXvNj3Cx2dPuCK15rkR3jbBydAqupKv8DCFIQABoMNjM3NDIzMTgzODA1IgxYXvey2L89yiltiBoq3AP4K1PSrmaIiMnKGpkyyPmtCyhvNhX2w1vVAd7IGwa%2FjM8EmazshTdTXB%2FlelaV57B6OMHMESM4k5VAUd82TIZcHN7tWksyUOcWIh8qqf1FKIFQxdOvOZYfXagLo0%2FxgoxPG24qRInzMHW7lRpbcGmorM3jYHhpMHzuw24HK2pRyz2YSj%2F%2BIlOTf%2FgcrYlZBMD27O55Kf4WAU9pP25loyzAlpzV%2F0J1UM%2FTQ3YSRpO%2Fm5z5nGMEhv6tM8DQdyTopxjEopEtikqgLJnlCwB1WMC7kwCUZBHp0gsLWConnRgXqHIsk4hiUugQSqdnmBe%2FCWsNG7qCZVusuFTL40Uqi%2BzUn1yHYbtMfGUZtc2%2BGyzX%2FQYQzH6SPLfoEADCUm%2Bu5LWHfMHMiw2AvLD%2BDw1HPhmeHbbxv1KxIXfTTZsqiVOIseEuakuIRhdgziWKgnGdzZZ17WHREVhJeuMYi%2BE5vgVoWf4atNUrNXBGt34DILbWjQF5OAlScVgWwvtIkZLlDw6BiVERjjuESw%2BtpHjBjYvX4WREvXtJ0lxOS440Fah%2BBJAvYa2aJo4fcFnvr2ULBBD0%2FkB21CFhA%2FcB8%2Bg1Rbn%2BErf9XjNREVxC9fsY2JGIpFgY06UvfSNLZYuP5zDs95e%2FBjqkAT8b5X2EtG7QhXZ9I01Z5MDCuY1rEHcGjA%2FAsgrPs99zawGvCgjDf9KQb4DzaOJYhu9rWxUToDHKbAmM8IZzm8crW%2FVkNJ04duduYE%2F%2F9yLBAx9S7dqlpFkWjbBLrGXg%2B%2FHR8GeHX7987bZU83g6qXwkh5lwlVlBwWCPaQ%2BHGBhFa7DGmfNgDdsYrp8qEl0n9%2BdAapT5Wr4uD7g%2BkpK7lZwDUKor&X-Amz-Signature=d32c830f8ca911b84cfa043eb62dabd15f78bfa7d406461dfccc9a8bafcf2213&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXZERZK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaeEER5qL2AMNMOJdrzgkzmuYNkf2A2jTN8Qf1FihJqAiAa2BQMdGftA4DIuAES3zR0q0v1DQ%2BA2UjezzD9VVkWCSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMPYG3d6ivEtYwGJIxKtwDkAyc3vyPm6ybLAJ2Py8h4PLynnyFmCznqPfV7xBunvqS3eDFekUK74V3fv7tIvy7mAc8zX5bTXI7zyOFalotPW05xyglQ7vdvzHFR4wMLOLAi4uBKwvegxdpRmBhG%2FTFX6xcD48YfYSsRH4KMDepZFW760uJl%2FOGzkrF%2FEEJOwXminaeGu00%2B1wa%2Bmhnv8LIyo5XPjklvFK%2BiaMyhsZEg%2BcfJPy2T5vbJxabM%2BXy9yfanENudAv2qgcL2K%2FzYnWj0pKGRKsDAXAwNBytz0oKr02ed%2Bb60ymWP9e3RDtN7KIsBFCyJuCFY9%2FhvvaeWwvUNLZ3MZYKx1%2F6lf4tFjJDj4IlUqb9CvS5ezRpLtE%2BuRuXn9%2FeJzQkEF2LBcBFM0PjUH3Vl9nzsTgjHjcffgSZ%2F72mCv8MDS9suhtrSdOfokO0nxTW5MLkIobh2evOZ6yXIaUKEICrtBVcfv3J4QYMvvNjFN7N%2FleFuCn1682OVwKE2DyssDd5XwapJXgckZSUPoZ7NKukJZo5LyzwACwyUW83GOiYSHtlxVWVrnQyBHlE0bUKxcMJ9lHhdzWSeDAxZCoAyElxsf82nf6Ft4hwaGrcTe0NgXa0IeQFGTc9YJXoSD2fthH8Mh57yfcw1%2FaXvwY6pgFi9SgeaAfj1jkcqik2ly4Bl8lAneNyengByjt6%2Bl4mXRVDfSwhBRN%2F2dLX2xBtiOcYAh0BZEOCTsg2k0zZaBAj7liXYntMna6BoZ3cxfC3X2R50Jdppxywhm%2FyAqEjxS6yp%2FAxJqBwS8BXCcHU55MpM%2Bl%2BaDZe0oiGSgalKuJP8%2B4jfDJIqrseAX0GZ3hckCRGo22yiD0MWhE6mkHTiKWNyOT%2F3O4q&X-Amz-Signature=43268af300a2ad0aabe0d3c5488dac01defb28776789bd9c7eb44a848838fc00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGXTNKWE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7pZNngV289wYpzRwcMSTEffIhdBplUTLygGTJeXkX%2BAiEA8sfzyaMk8Bz4hz67uIlBCEIs8e6oPpB7RC9uwcBKsmYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDI9xZQ6HAdD5Byh%2FAircAwaIJECDtKWlOUMcvXFmrp4dH26XD1ZjGTJcgHxWJItFUZqZ70ss5gXGpF2W8SAPOBsiH1SoZYd%2B33U9GDn9QcDzIv7Ox00mtEHsNr4u2odHLa6HIi5WQExJr2JTs3YW7ZyUgzonmVnLqWTcpNJg%2BmFs4coXFvgr2xHq1VNyfYJ3gUF8fMyRVbPuvCQqOoXv5z8iMTlXh95TUr016ZcuWjjToM2vwwptjBaU58xcWPxMvqDswPnX4aeXyua5YB6suRZyX7ap%2FWIitX4PiuCkxPlYfwrk9j2sw7MLUE7jT8k1DlgowpbNfYmsuN9Zoej%2Fxil%2BMDFts4kAqb8ws0cxVvbH8B%2FSBsUwnI4rTiBJn1gjEkYJKGhdP86V%2BV0ZbJrV5szkZTmviiV6eJcq%2BTNzYko1cALpbpK1pZVmf6wwTUcRDUMMBt4gaHB8i5xKfe5q4TF37A5bGwggW%2F6%2FDml4OZXd5HLRZfPHW7osBnkBflYSLyFuLiROKED76zA%2B3z2Zd8A6tw0egpxZiQWwPLqXQi9Hg3WrZyibeVRmFcW2myp793pBb%2BGNWSFRO1gBsZpE9SFq95dFi9D8ZjPTx%2BCc4XoUaKCJweuq7dhQ4PF7TMMXTVyTyJjbbWftCNGUMN33l78GOqUBsY9CTjMAxd%2BiCfx2LGLQ85V6N4xZsvN%2BeY7nENbVWxJwxCl41U4sEi4qmxv6VhvOkHfrUNBxWCwxwtGJWT94%2F9FeIkgZxcmh%2FVXIijopFfHvg0B7wvKIhPbrLtAJxsYLh3UO1gOl6BhzpO7HV7IGVaqhW7A4v3jVJJn%2Fswu3rL2LcA3eRr9aDCJMuPFn8XmLBm2eie84jiaoYwmhy5NGvt6xOb2e&X-Amz-Signature=0dc15a335c5fa73dda5804fde3a572c883e63fefd2d99543b62cb9907c41066c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
