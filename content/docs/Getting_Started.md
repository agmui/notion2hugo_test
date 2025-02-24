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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R77RLCH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8IVxPGWmcTW7aqRXqX11kzytpCnrqrntUP8TLflNU9AiAVI7KUYkDmXoplrMAw1jw%2BD3plthPDjtNGA7Dhjz2WeCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMwDGTVp3jeloE%2BfW%2BKtwDUcmFRwo3ZLaxqdpLYbhyWrbTrQ2c5bBHiwfvKYappGgKoSskLILMOfih0aGy0b2tWRxTqyVunh1t2OadzdfNKvBVCSLJp%2BP7TDgSKjTZTmGmhH7eOCa2tLhvxDtt9GhMiKUUUbqNm7n9c1Ax%2BugMAny5vlFhx2bpsEvRUwavNRg%2F4EAUS1GlKXmH45JE%2BRTy0ttBRS3tcAxTChGDBug2p192tTOrSUfGW7FFce%2FeEVjYAAReaX1GZkBnQnkLyxk8S9DEee%2FhpauP9HlUX0o4aqjsUCft%2B2Aj7oOTeownSjMqkHCGjfq9H5wkHuPmGienTm1bHYVleujFC%2B7DbUbs5ykxf%2BYgQhBDNOoIFnmEuS%2FVfa4yIsyqssEfvg6Xrb2d9P3gmt9NSHJrlgE5YP1NpjjgGAyUrgbeFqAh7TWegLjUAG%2BFXkFBHJxwlVXOSaB8CY06nH3tBRy7kJ99nGabU6t8DEai7bkmyaX9iN9y2r2lFxVBtZBYnTbg5saJNdb69KMhRMWAt0GtKmAthsAGgikRk2HnnolXrmsELIPHSkFOst5rm8HHRW5POtlLu8hlhK3dmFKi69zGRDfdLnOLRbfe9qj6nwCZPstPrRbLTaX2NjJttKI%2B7XTHn6YwnuLvvQY6pgH3AjuPU40xgMTVqiDmCgW0pEpjoNpeA7FsBS20LQ6HlK9hhcOdKPGNx6d426rxSgXD5YR2d2eWxLGraZ37SuwdmqyYuR9EEjhqRYtlRIXna5r1traXaL0VEygeuWvoGpnkZqpT07mQ85J7II4aWbPcul1xsyuU1Y1Wsy00%2B%2BR7mwAFqOu%2Fcy1kOz6yR97WYXL8rgobM%2Ba5s2gLs1uQZdjKCNmyQ%2B5W&X-Amz-Signature=d2113e2178e74abcaf29ada810f33986dc9b1e0e9211875ce4179bb43dc86cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R77RLCH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8IVxPGWmcTW7aqRXqX11kzytpCnrqrntUP8TLflNU9AiAVI7KUYkDmXoplrMAw1jw%2BD3plthPDjtNGA7Dhjz2WeCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMwDGTVp3jeloE%2BfW%2BKtwDUcmFRwo3ZLaxqdpLYbhyWrbTrQ2c5bBHiwfvKYappGgKoSskLILMOfih0aGy0b2tWRxTqyVunh1t2OadzdfNKvBVCSLJp%2BP7TDgSKjTZTmGmhH7eOCa2tLhvxDtt9GhMiKUUUbqNm7n9c1Ax%2BugMAny5vlFhx2bpsEvRUwavNRg%2F4EAUS1GlKXmH45JE%2BRTy0ttBRS3tcAxTChGDBug2p192tTOrSUfGW7FFce%2FeEVjYAAReaX1GZkBnQnkLyxk8S9DEee%2FhpauP9HlUX0o4aqjsUCft%2B2Aj7oOTeownSjMqkHCGjfq9H5wkHuPmGienTm1bHYVleujFC%2B7DbUbs5ykxf%2BYgQhBDNOoIFnmEuS%2FVfa4yIsyqssEfvg6Xrb2d9P3gmt9NSHJrlgE5YP1NpjjgGAyUrgbeFqAh7TWegLjUAG%2BFXkFBHJxwlVXOSaB8CY06nH3tBRy7kJ99nGabU6t8DEai7bkmyaX9iN9y2r2lFxVBtZBYnTbg5saJNdb69KMhRMWAt0GtKmAthsAGgikRk2HnnolXrmsELIPHSkFOst5rm8HHRW5POtlLu8hlhK3dmFKi69zGRDfdLnOLRbfe9qj6nwCZPstPrRbLTaX2NjJttKI%2B7XTHn6YwnuLvvQY6pgH3AjuPU40xgMTVqiDmCgW0pEpjoNpeA7FsBS20LQ6HlK9hhcOdKPGNx6d426rxSgXD5YR2d2eWxLGraZ37SuwdmqyYuR9EEjhqRYtlRIXna5r1traXaL0VEygeuWvoGpnkZqpT07mQ85J7II4aWbPcul1xsyuU1Y1Wsy00%2B%2BR7mwAFqOu%2Fcy1kOz6yR97WYXL8rgobM%2Ba5s2gLs1uQZdjKCNmyQ%2B5W&X-Amz-Signature=0129766d491e052a96ebafd89a84e76dd2a896c6fc672802dd3bf84556d3b149&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XNE7ZH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqibD7RZRdhXeFsun6Uoi3MPVXmMnkz70wO1WfqcQKAAIgaLStJvHEHDio9tND3d83hJ1OgCWG1MAPjy%2FPzbfu4b0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKLFBsHbP2KGWqRy4SrcA%2BZvfHn1cGShsXRsRbw%2B5cxS%2F%2BHKSMIndzUOKb8pKk8Iy4T1KL08ycYIWwJf8UNcULMauAO1wgb0qLls4n0DWYLvr0Fo0jw99vC4a4W%2FXIB%2B1x5JNpxW7IdyF5QdXPDklZy8FM%2FO5ExH5oAERPZrVADVgN7Y4%2Bl7TjmgIr41WCf%2FC4UoQP1dupAanxluKPqZvM4ItmYMyLMgn3QsxRMIq8wRLKSmWFe4i%2B8VGQEQztJckDw51izGU3QX8G9KAvUIvljO%2FvTeNKHCClfFw7E5ROtsAHWr%2F7%2B9lRgMVP6phNI2yWWt8RdU1m5trOZR17kMdk6%2FwkxfW6U13m9BXe02ScHpPLBjc8%2FrjS47levru6AnCR5OprB6pmpmhJe9vTEA1k3JS0JaA7L04cq0wzFiEAQNfYcCGSIjMOn2s691fsGNqJWFapXInBZGrnC3TLDYAdwYhXWVt4yAi%2BaVK0O0K6pUYKLA8SOjLEJVhZ9r7hMcmSx9nJwiSyQTjoYgner0PbeY%2FGYtmXV%2BYExYRba%2BU1U692ilxdPXRsYGEyONd4gX2DOp6T4gV5BrVnAUoZON9BfkKSmA50smcnHeDuMGfCtxskRb5vVv%2BhgZIxa1CkgJ6%2FpexR4AptniWxcKMMjh770GOqUBrzszsed9agYDGtj%2BMoW1Vv73hGseWb7hyxTWfWZu0ae3D6shstRL6xODi2yvHVQmb6lGcnDHTiK4x1Gx0VYIDSJ9ii%2F2YKEoCo56JJILupwsxeDU7rQrLh2DUU9pDqfhwholFvttT1xjSKRUkPBu2ZASy%2FtCqYiEbJpzXG4ZHPSr87A9eU3V34xy6NARgcT%2FrAIVG9IwWLtrrQp8rt%2BZ2RtwaX1M&X-Amz-Signature=31349c6d6d994706e7a52ad4f613ed8a8118dd366b53e2a03b3fb705e7717784&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF4JJQM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWH6wjG2xDLHSDZhCwfW5fYkccTHYaUjwBN1dFC4p2wAiBVE5cRE%2BWlne9tEGBV9FlQfGJHE1QyFVr3GKWIJujZ2ir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMusIjPzfwlavHeW03KtwDrtkG1W40mGNgv4BZRHPEFFr%2BUYNnwvlmGFBxYvURR1gapqfU05vmGPdmbHepcbk2GBQGgzlOSeqJgx5dgQkz%2BMU2gp1X%2F%2FM48cOmLFE43IffRMxenO3ep8kmw70CHEzYFJKFQz%2FXUdL2kUoEQJQjH3cbQM6vSbDQEJWPAxH3qPozz1pJb0bRZ9oJHL2Txtfi10vaSjGnLOnUoepHs6UGxRG5QMEdlkO7zKXDIxC4lsrXZGhaBKTPIPq4DV7e9NjNQ0WoMt%2FHrUdDaNF389MbRjbK7g9rEPRyczKb2o24xchX9LWRou6UaUpCaogngoOdux3GEWMfggIPjEXpexq0IxNfq%2F%2Bgfmu0%2B0gkpUS6tUYAX7i8oibYsAPGj%2B94Z3MlGCwDZeM0UZMq10gDjpgtubW6QAStBesk2swbPi5wSm9Ksy7%2Fcfp0FM1SpJx4cVVxzAu6rN6kNpjzFWNO7RIrg75lgNrEWTlgk3pcY0uRhDm96yIK0fJbaTKxzQBDifI9xRMdx7MCA6QdSQRF1v1ml0nGri5L%2F3d8tZekjUtHU9nRxJf87631o9vSE4QYW8UVVpjsr%2BmjWqF%2BSg%2Fbtzy4PWD7ELOP8z76tAoMT29JAUDcyf%2BMPu7egDtwGFowiOLvvQY6pgEXLYArO4PFk5cGO%2BjavabN6TmeAaUYDMpp1XTgz0OIdx2jFcvfCuwuBOqsR50c4HzTIM01ZA%2B%2BRNO4oNQ0DKPbvYv0Nfb3Z7%2FRrknchfMrUBZEgrkSdZahipiyj1T3cZGoOct6UmaSHG2NWsn%2Bvr8Yf8bFyk0DWOtkgs0B8g1BlhQ1YFE70NSBR3FKLvb39cmukJicaWpPHBWqv8kHVvXRA4ma9gZx&X-Amz-Signature=e7a968128e98f5d4326ba6e567913a238cabd93bf38d2f568bf6babb64792b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R77RLCH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8IVxPGWmcTW7aqRXqX11kzytpCnrqrntUP8TLflNU9AiAVI7KUYkDmXoplrMAw1jw%2BD3plthPDjtNGA7Dhjz2WeCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMwDGTVp3jeloE%2BfW%2BKtwDUcmFRwo3ZLaxqdpLYbhyWrbTrQ2c5bBHiwfvKYappGgKoSskLILMOfih0aGy0b2tWRxTqyVunh1t2OadzdfNKvBVCSLJp%2BP7TDgSKjTZTmGmhH7eOCa2tLhvxDtt9GhMiKUUUbqNm7n9c1Ax%2BugMAny5vlFhx2bpsEvRUwavNRg%2F4EAUS1GlKXmH45JE%2BRTy0ttBRS3tcAxTChGDBug2p192tTOrSUfGW7FFce%2FeEVjYAAReaX1GZkBnQnkLyxk8S9DEee%2FhpauP9HlUX0o4aqjsUCft%2B2Aj7oOTeownSjMqkHCGjfq9H5wkHuPmGienTm1bHYVleujFC%2B7DbUbs5ykxf%2BYgQhBDNOoIFnmEuS%2FVfa4yIsyqssEfvg6Xrb2d9P3gmt9NSHJrlgE5YP1NpjjgGAyUrgbeFqAh7TWegLjUAG%2BFXkFBHJxwlVXOSaB8CY06nH3tBRy7kJ99nGabU6t8DEai7bkmyaX9iN9y2r2lFxVBtZBYnTbg5saJNdb69KMhRMWAt0GtKmAthsAGgikRk2HnnolXrmsELIPHSkFOst5rm8HHRW5POtlLu8hlhK3dmFKi69zGRDfdLnOLRbfe9qj6nwCZPstPrRbLTaX2NjJttKI%2B7XTHn6YwnuLvvQY6pgH3AjuPU40xgMTVqiDmCgW0pEpjoNpeA7FsBS20LQ6HlK9hhcOdKPGNx6d426rxSgXD5YR2d2eWxLGraZ37SuwdmqyYuR9EEjhqRYtlRIXna5r1traXaL0VEygeuWvoGpnkZqpT07mQ85J7II4aWbPcul1xsyuU1Y1Wsy00%2B%2BR7mwAFqOu%2Fcy1kOz6yR97WYXL8rgobM%2Ba5s2gLs1uQZdjKCNmyQ%2B5W&X-Amz-Signature=d5493e11df5d3a3a70a0e8fa7c69489d1845c85bf2d42861787ccf9f8f3baa00&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
