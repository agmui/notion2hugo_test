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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5I2DCOS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAe3jjYSVVbn4AShyg1r%2F0%2FjpATGnfUMauvCtAsB%2FSUXAiASLvTaazR8e6ycpvvDnEk616qdwdH3UI0kgzC%2Bn9tgSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEAHY68bFb6o0Rls9KtwDxsz56LNPHBMyO04RF5Y4UAcesBgg2FEtWctm%2BHSC3Lz5Umjr4QknCIcKqK%2BeTnwNkamkNRw3hC2xbLHQcMwXeMEwxSjv5l2DKws75tNEjn1FkYAJQsB3B06NLlvQ6NUiw6Ybo4ZonuAJpAQ4yRJlXiyIsXv39RIZxFFMUM0z3chAUKnoIOQyGI0GvYIsNgK0cyTjHmQ2ApR4Cx%2FkSSUuEFcHIJI1QmtDezziWXoEKV7Y6U2%2B%2BVj4PYaoirS0TpKtYzTLaC06%2FxYCgNWsvOutusguvxEREqABBl%2Ffm%2Blt6vHr3px20SfHTQRtyvNoCesna%2F%2FYwndeVrzVOHMaGJ5EiOZvQW6eyYbgkmyWw29J6EzZKii%2F7l82ai2dOMyVTMYxJDmZHHkpmsdFxn2ZW4McWoL6D0gx5oeaHvl%2BXONlVkoQ7r2sgugg3zfu5oHoWN6wjtUIuIGB9cpBhpbB7JoPKEks3fLQ3ZQBrU1HR3WPlwHGA%2Fr2gD9f08sXH8biywQ9iKe73UVb495xpZ9Qa%2FWwNv0f1JXOo2aOIMaWpoIs7e8hzCxFjpZR9XeViSRD7lSPmXiWq%2FW5mT%2Fi2GIt6UBrb98M9JlWaE1SeFI%2B2OAalknlONypogDLpxR5%2B1gwop6AwQY6pgH5UPl62KfutYMj5HLucAHTR2MwtJSspxYY1sEtAf2aklBx%2BVG7skmoCzlr0DmkKMLpLo%2FYlcEr0pN0fTpHJJLNHRXXaeVMwS4%2BU83fxQLMebszY2PmqxZu47XC%2F9Wz2ACj8dNRt9e%2BU4QYdmodVJqQgDfiAmHtkq70jhjAt%2Fu5SCtX2FdwFHmG%2FJU0SW9Z%2FMRN%2BBU87mmiycNTWPZ%2FRV1v4o0xmk3K&X-Amz-Signature=7448727f87da5916e92ecf1893898b3fdd341664f106f5d4752f18d8b46b391b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5I2DCOS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAe3jjYSVVbn4AShyg1r%2F0%2FjpATGnfUMauvCtAsB%2FSUXAiASLvTaazR8e6ycpvvDnEk616qdwdH3UI0kgzC%2Bn9tgSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEAHY68bFb6o0Rls9KtwDxsz56LNPHBMyO04RF5Y4UAcesBgg2FEtWctm%2BHSC3Lz5Umjr4QknCIcKqK%2BeTnwNkamkNRw3hC2xbLHQcMwXeMEwxSjv5l2DKws75tNEjn1FkYAJQsB3B06NLlvQ6NUiw6Ybo4ZonuAJpAQ4yRJlXiyIsXv39RIZxFFMUM0z3chAUKnoIOQyGI0GvYIsNgK0cyTjHmQ2ApR4Cx%2FkSSUuEFcHIJI1QmtDezziWXoEKV7Y6U2%2B%2BVj4PYaoirS0TpKtYzTLaC06%2FxYCgNWsvOutusguvxEREqABBl%2Ffm%2Blt6vHr3px20SfHTQRtyvNoCesna%2F%2FYwndeVrzVOHMaGJ5EiOZvQW6eyYbgkmyWw29J6EzZKii%2F7l82ai2dOMyVTMYxJDmZHHkpmsdFxn2ZW4McWoL6D0gx5oeaHvl%2BXONlVkoQ7r2sgugg3zfu5oHoWN6wjtUIuIGB9cpBhpbB7JoPKEks3fLQ3ZQBrU1HR3WPlwHGA%2Fr2gD9f08sXH8biywQ9iKe73UVb495xpZ9Qa%2FWwNv0f1JXOo2aOIMaWpoIs7e8hzCxFjpZR9XeViSRD7lSPmXiWq%2FW5mT%2Fi2GIt6UBrb98M9JlWaE1SeFI%2B2OAalknlONypogDLpxR5%2B1gwop6AwQY6pgH5UPl62KfutYMj5HLucAHTR2MwtJSspxYY1sEtAf2aklBx%2BVG7skmoCzlr0DmkKMLpLo%2FYlcEr0pN0fTpHJJLNHRXXaeVMwS4%2BU83fxQLMebszY2PmqxZu47XC%2F9Wz2ACj8dNRt9e%2BU4QYdmodVJqQgDfiAmHtkq70jhjAt%2Fu5SCtX2FdwFHmG%2FJU0SW9Z%2FMRN%2BBU87mmiycNTWPZ%2FRV1v4o0xmk3K&X-Amz-Signature=bf93f12344300dc8ecf4abfb7ccae62355619917521647bac63c49cff8872da1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5I2DCOS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAe3jjYSVVbn4AShyg1r%2F0%2FjpATGnfUMauvCtAsB%2FSUXAiASLvTaazR8e6ycpvvDnEk616qdwdH3UI0kgzC%2Bn9tgSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEAHY68bFb6o0Rls9KtwDxsz56LNPHBMyO04RF5Y4UAcesBgg2FEtWctm%2BHSC3Lz5Umjr4QknCIcKqK%2BeTnwNkamkNRw3hC2xbLHQcMwXeMEwxSjv5l2DKws75tNEjn1FkYAJQsB3B06NLlvQ6NUiw6Ybo4ZonuAJpAQ4yRJlXiyIsXv39RIZxFFMUM0z3chAUKnoIOQyGI0GvYIsNgK0cyTjHmQ2ApR4Cx%2FkSSUuEFcHIJI1QmtDezziWXoEKV7Y6U2%2B%2BVj4PYaoirS0TpKtYzTLaC06%2FxYCgNWsvOutusguvxEREqABBl%2Ffm%2Blt6vHr3px20SfHTQRtyvNoCesna%2F%2FYwndeVrzVOHMaGJ5EiOZvQW6eyYbgkmyWw29J6EzZKii%2F7l82ai2dOMyVTMYxJDmZHHkpmsdFxn2ZW4McWoL6D0gx5oeaHvl%2BXONlVkoQ7r2sgugg3zfu5oHoWN6wjtUIuIGB9cpBhpbB7JoPKEks3fLQ3ZQBrU1HR3WPlwHGA%2Fr2gD9f08sXH8biywQ9iKe73UVb495xpZ9Qa%2FWwNv0f1JXOo2aOIMaWpoIs7e8hzCxFjpZR9XeViSRD7lSPmXiWq%2FW5mT%2Fi2GIt6UBrb98M9JlWaE1SeFI%2B2OAalknlONypogDLpxR5%2B1gwop6AwQY6pgH5UPl62KfutYMj5HLucAHTR2MwtJSspxYY1sEtAf2aklBx%2BVG7skmoCzlr0DmkKMLpLo%2FYlcEr0pN0fTpHJJLNHRXXaeVMwS4%2BU83fxQLMebszY2PmqxZu47XC%2F9Wz2ACj8dNRt9e%2BU4QYdmodVJqQgDfiAmHtkq70jhjAt%2Fu5SCtX2FdwFHmG%2FJU0SW9Z%2FMRN%2BBU87mmiycNTWPZ%2FRV1v4o0xmk3K&X-Amz-Signature=37b08da8c2a7e67e294ff1b822c74e090a2b0281765c3048f2e9dd89ce255369&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4J5QKN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBURjanNXDsfGQd9JZ9UCwP3y8RtbqNBV0cYYmNaOaaWAiEAovc%2Fnk2KEAibgb%2FoW1xjix3G%2BcHhdItLTVu66v7rpFAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEHDUJh%2FYAWZvgSqCrcA%2FUALJoXKHGjjTQQTqbpIOEobt0wHT%2B%2FeNNtxIWfvqmAUQtOZIoDtPDKGrA3nWF1JXEKKdFz1JFW85am%2Bkc1f9QHMSml3MzUh2JFxOtoEYgMY7O%2FdfUrcLmj5Hzd9P38Hgr%2FfpYoJ0wGbbKKmtfhQe1ufJSmA6K9uIv4oarzA%2BPXBsad3lnwr9MgdHVltSqmT0lcIAcVGsLhdaLPI3TjY47Sx0Pn7W8O3igIVFuA%2FFs0T5kWLun7lG5G0yYSqUDcMoBT3y1iCQOO0xSFZa47Loda3W%2BbMOiFeosp03VO1imo3yXQesnR73EMBzd%2BtOcWoLpFTT%2FCNxUfYBQJnyDqEo69KcdFB0gzXM7%2FuGDPMlsMaKGdPCaEjc8I23uPK7m5lfkfh4KbXKXN1KrbRlZ6QjqrXIpxhIGrfQLBI02NNilpX2wpoQ%2FGH2TQSL%2FB9McAqjJEMyoUZQ3RdRsKC%2BaHaYg1GdJctrjMyv7QZs0oq1fv30OimIMVt78xKdVgV4XKRY4OhlehTAJ6ysbdsDhuL4V6gW8pCwML7PQSJioQeV27XGQl9DrxbgWXmzUtAij6yomjnk5OsE8GtrRi8BwZwiMm8F2TfffAqn6hTXscnOfCBu3PSZC%2Fr1oVq4gMMOyegMEGOqUB9ANAQfITE1hII6G6rXP03HxobCXMiH9ELS3clLvO8CzJY1LUPpCa8EDo8%2BA1v%2FMd23hecdDfvBNZAy0m9DT9KGyB7ofp8CxHbV8RCBXfDyF8YmWXiFJj%2BZSvvAw1avhFehVyRsXTXjygLISmYgOu88tKJbyBPsbafK782wvFnTix4aTx0T5a5MPeFyqo2IMnW26v%2BT2166T8M8BxuGQqFj4dCwTI&X-Amz-Signature=f3740d14b21e9b630d6b47f6f902bc1300e4f1490b53e2dd12a7a5da52686c16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JJSJ26%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDxrpkIPV1dBxgpdu3jH%2F4anOQmKp25gjVK%2FW%2BR4o%2BpqgIhAIKrhMkq2jcvmhxjWJ8eEERkWJMu6V2%2F8q1BEBifoZb%2BKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsjz6Nha8PGeZd2NYq3AOJgMtvQV%2BMLyGnUY6BenpDIYdV2j83DpiLK4dNFLKTs0TwvzwJLHEK818NML9c9JTNyVVv828e7e1Qi1Q5EjQwd7OLd8GtxfpPS5yraV%2BEU0vR2IDy2yFeChjOTKD%2B8Rvbf8kczX8ZJMt2Wf4V7nekqHLw1x4mkM3732Jvm3PKsh%2FxUz7sQ%2BGKE%2Fgyos1AbrCcj5LQnWfUU7E2ynsAXiUn3R9764UhiD0S9ZJ6foBmK6GqBdzxr40verngoTwE%2BktO%2FMqg2VBtWTPK%2BA6VfvozdbALYLnVrRuKJqLshstzdEmsbrRTHbYzNUxreH6WXBJUCV4QTjeSSZfyEWuPCqWUqzlrGAMqfVE0%2FRHF3Plt4OJPDAmhavgR3e883BJd%2FNGIrIBa97VEkRZhfbZhsQ%2FUwwya6t%2FaEMjLQxdsBfMiDZPVBu2NYRcTxeajBYSZT8tBwl84mZCgY4gwkFX%2B2NwX2blgLMYymm1ypDjxEtkVvbd39tuBg2cjXWGLy1QJ2SfojG%2BKuDoEakYvtBEGtkSYWvns1aBdLdot5pfodoLJ9OhXhDbyfv1kZ6YWuLD0rVlCV3bIaL8R9C8IZs6OIilcChbgTX7HWfR2D1gYRnaaViEB5QqnJjZWM2IZKzDBnoDBBjqkAc1YMMN9GK5Chj8%2FPVTV1ZEzA3PDGmjBF0s1ChxSG5w6F6I6Yf3ZZ19xZLf0XxTP%2BvGgDpVxw%2BD6iWfBjhIq0%2BhMdW%2FmnYAx2hu%2FzCqCR1h2w%2Fl8XKmWBJnu6Kx8azmYVg6AfF9LW35L9oINAsdGNsqKsigpRM4e%2Bo06JcR%2Fc8gmiART%2F0Ppifavi9YmE85laUnUgRo%2BAgIIpoheutQxY3uI0A5w&X-Amz-Signature=65e9bd6a4d835b59a8555b70109b2bafc3a81e4eb7ef00dc8d66b8c82d23cd91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5I2DCOS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAe3jjYSVVbn4AShyg1r%2F0%2FjpATGnfUMauvCtAsB%2FSUXAiASLvTaazR8e6ycpvvDnEk616qdwdH3UI0kgzC%2Bn9tgSyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEAHY68bFb6o0Rls9KtwDxsz56LNPHBMyO04RF5Y4UAcesBgg2FEtWctm%2BHSC3Lz5Umjr4QknCIcKqK%2BeTnwNkamkNRw3hC2xbLHQcMwXeMEwxSjv5l2DKws75tNEjn1FkYAJQsB3B06NLlvQ6NUiw6Ybo4ZonuAJpAQ4yRJlXiyIsXv39RIZxFFMUM0z3chAUKnoIOQyGI0GvYIsNgK0cyTjHmQ2ApR4Cx%2FkSSUuEFcHIJI1QmtDezziWXoEKV7Y6U2%2B%2BVj4PYaoirS0TpKtYzTLaC06%2FxYCgNWsvOutusguvxEREqABBl%2Ffm%2Blt6vHr3px20SfHTQRtyvNoCesna%2F%2FYwndeVrzVOHMaGJ5EiOZvQW6eyYbgkmyWw29J6EzZKii%2F7l82ai2dOMyVTMYxJDmZHHkpmsdFxn2ZW4McWoL6D0gx5oeaHvl%2BXONlVkoQ7r2sgugg3zfu5oHoWN6wjtUIuIGB9cpBhpbB7JoPKEks3fLQ3ZQBrU1HR3WPlwHGA%2Fr2gD9f08sXH8biywQ9iKe73UVb495xpZ9Qa%2FWwNv0f1JXOo2aOIMaWpoIs7e8hzCxFjpZR9XeViSRD7lSPmXiWq%2FW5mT%2Fi2GIt6UBrb98M9JlWaE1SeFI%2B2OAalknlONypogDLpxR5%2B1gwop6AwQY6pgH5UPl62KfutYMj5HLucAHTR2MwtJSspxYY1sEtAf2aklBx%2BVG7skmoCzlr0DmkKMLpLo%2FYlcEr0pN0fTpHJJLNHRXXaeVMwS4%2BU83fxQLMebszY2PmqxZu47XC%2F9Wz2ACj8dNRt9e%2BU4QYdmodVJqQgDfiAmHtkq70jhjAt%2Fu5SCtX2FdwFHmG%2FJU0SW9Z%2FMRN%2BBU87mmiycNTWPZ%2FRV1v4o0xmk3K&X-Amz-Signature=ca49bf4d2c8371eec63b3de0196d7431cac598d625541d09bb8d672cdecf2325&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
