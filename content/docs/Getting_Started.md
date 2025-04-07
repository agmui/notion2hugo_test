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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWR5WLI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6NA2HHouH5eIQ2G6hjs%2Bhx7pgft3V9alKiw%2FJJjxtVgIgegAk97c7ErlY7lIAzvKaZQMdl3PH2mPrVOX8Vv4YYNoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGQ1bFiMf69qPOyQ%2FyrcAwMOyWXuIMKhArOEh2VfhbObdj6r%2Bb12NxRlq7zooXJ8GkXzHEpbRROSM7jsrzu0rN%2FyJBELanWpYCxCUU2r%2FrugF12%2BI8mOrhNPWeoa95zF%2BAMfyrNzgXaFZFMiMY8hxlfSj2HiTPloyYvz1lf5cvbkzF4AZBWbwAlS9w0O7CvmLAQZimkMYm6KGc87W6G%2BnYWaOt23T72eKRFgiJYVNQZyWDYwQDvoZraeyjYQTANE8Ljb8tyJNTsg8ImM0A91Yt4DvXWOQMRebtyFjyXh5QF4OREmrvSvLSLARAK8ge0ro3aIOoVQ4vS7rNRUvkaajVy0CdVdIAByoPMV23o0VwEtfa3ptk1LWPbPufRZQYdJiCOgrdelwfRvK24foeOlYCbCketkdFxBkG5bYIbDFwE7i4SuzmqItsKlkRx5mwqwa7gbJ%2FxRmkxsqAYWHKOZAlQZz160tN0%2FtRfPioUG%2FgKyGhAFEuNXGOcruRsw84ovVnGWLhpJzt2%2FRZA6MSmi%2BGbHkhLLPhWknWCplwk2qrdZjDJkZ2JfvucUNl2B%2B209blILosAJFO7OnOu0N3v7bk97Km%2BSqm6aweWWf4l3RapBS3AHb0k0Zkf0M5eZs%2B7TFL77PoJRlgMt40CKMMfRz78GOqUBpkL1uKM%2FdhN0TtZlHLLvCZm4eVNZgz8ecIjnkExk0KLaOZwjxQaoArvbFWK8VKlGlZN9wApwhm%2F0veLraBHzOAUNzqzkV5Ext%2FIYToq5chOg0VBUENV%2BEiRXdg53jd3X0WcDY9mlNciJk54h7xhrYCZ%2Fw0wQQn50KUh5Dp2oElDbfeSmnJSTbQH24oKP2E0QIyWN10zPYCccO4FQGHb5nBYr%2FKNG&X-Amz-Signature=e0bd93c535be438c5b346a63925cd264525d7edffd4328c520772afc1e963f80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWR5WLI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6NA2HHouH5eIQ2G6hjs%2Bhx7pgft3V9alKiw%2FJJjxtVgIgegAk97c7ErlY7lIAzvKaZQMdl3PH2mPrVOX8Vv4YYNoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGQ1bFiMf69qPOyQ%2FyrcAwMOyWXuIMKhArOEh2VfhbObdj6r%2Bb12NxRlq7zooXJ8GkXzHEpbRROSM7jsrzu0rN%2FyJBELanWpYCxCUU2r%2FrugF12%2BI8mOrhNPWeoa95zF%2BAMfyrNzgXaFZFMiMY8hxlfSj2HiTPloyYvz1lf5cvbkzF4AZBWbwAlS9w0O7CvmLAQZimkMYm6KGc87W6G%2BnYWaOt23T72eKRFgiJYVNQZyWDYwQDvoZraeyjYQTANE8Ljb8tyJNTsg8ImM0A91Yt4DvXWOQMRebtyFjyXh5QF4OREmrvSvLSLARAK8ge0ro3aIOoVQ4vS7rNRUvkaajVy0CdVdIAByoPMV23o0VwEtfa3ptk1LWPbPufRZQYdJiCOgrdelwfRvK24foeOlYCbCketkdFxBkG5bYIbDFwE7i4SuzmqItsKlkRx5mwqwa7gbJ%2FxRmkxsqAYWHKOZAlQZz160tN0%2FtRfPioUG%2FgKyGhAFEuNXGOcruRsw84ovVnGWLhpJzt2%2FRZA6MSmi%2BGbHkhLLPhWknWCplwk2qrdZjDJkZ2JfvucUNl2B%2B209blILosAJFO7OnOu0N3v7bk97Km%2BSqm6aweWWf4l3RapBS3AHb0k0Zkf0M5eZs%2B7TFL77PoJRlgMt40CKMMfRz78GOqUBpkL1uKM%2FdhN0TtZlHLLvCZm4eVNZgz8ecIjnkExk0KLaOZwjxQaoArvbFWK8VKlGlZN9wApwhm%2F0veLraBHzOAUNzqzkV5Ext%2FIYToq5chOg0VBUENV%2BEiRXdg53jd3X0WcDY9mlNciJk54h7xhrYCZ%2Fw0wQQn50KUh5Dp2oElDbfeSmnJSTbQH24oKP2E0QIyWN10zPYCccO4FQGHb5nBYr%2FKNG&X-Amz-Signature=a406b419da7c3dc37d7446114ed6ac6b8892ef059ce2377c5dc04ec8095c0588&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7HD4JKV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGT7qk8XAner%2FGX7VQunvnXJTsxK%2BLoEneFXT8Dk0R6QIgHKP%2FVTpmURwUUru7cJR5KCUPuFD81Qwxx36WtuM4Cf8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEfsiAIdz9t6YVx00yrcA3n%2FQzAey%2BeAqXZbB5IDDZx%2BXuBvT8eH61ZP7Y233QKG0mQAUvuOSocpg2YlafQd1DSHnop57SDorWsQOdMShWWbQbz4WT7nAlt4UiWLcIGkn92zQPMojeG7onK0AlF%2BFj%2Bbd0rz9gCe3YDsIEl9GRneIZdkyA7GEt17alJ3HKinFGOwD2UiCmyHq9INvJlQz2uQ9EZ5cYqpTCTfmrygO6X3EVmeZFBJEt14nHP9wiIFvlwXofwfoPl1%2BFxHsN41XGLfkZgau59Xqs5IvBXbi%2FUlEGPD5sFLVwT4un37SG%2FJOKmEhwT4I4niufOrYL1D7Bh1AAWLUwuNnMqdnBXR%2BL2TR6ivRVgpwG8bCvv%2FGYqxYqgt1YiSO1rorHmgGcMLMriel7Zl2kCbUsiRW7iQcYvn9gkgf%2B9tVaMVUq5LvQ7iEb2C%2F%2BN56UmdEiLdYimrL7wFtA1HuqWIl2%2B1%2Fv2xkYGQue96Q4SWLBiUaljWo1PmIRIKmOS8BPYXJ5vmS8BPKPr7leXCGBpKzjsCcctAGibegbU87aoibMbda5zY4hGDb8YdSKZnfI%2FkfdBl%2F7oZWBCdnfTWbQ462DDbegAWC%2FMq0dISQnaz3fw%2Fjd5NZePSIdahaOdKCfXla2S6MOzRz78GOqUBAZPHfdWDgSvNoqwH0Iw6HY1Rs%2BVEXRGhpfbIoigmAmi0WTDM3QSczHW89SuIP%2F8sh1NuepaZzGMWB55tkAxN95mdc%2FXadg4w5fjxYAmFTdUDhGT4dqPbn%2FPb4bKRj0B%2FYRaVlJV%2BHVFsrr%2F7vUZgzU0a1blqTpkfkWLpPE6f75DyX5%2BagDdGU8jDHfSpsbYu2tlOOywJ3fxJ5CA%2BqaMDIK4NjVJD&X-Amz-Signature=9682d1317304f8371211c420089bd3b2829bca591c190bff8e640619dc062c01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZLIQK7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbps%2F51%2F9afQs1feJY3URY%2BKKNTWifbrxO3tj1BVXd%2FwIgcwrepJwOU3FWgUnfuzpMldIs99y2JbHcvjfvPKVsDzgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMH8qiL3mmq7TDtwgircA%2F2fxnb7tS1HPgP4SJXMfT1uFfVhCvuginLXrcPTbG%2BEqazWOqEXYps0vXAcl67tbBHvUqu%2FyC%2BTed%2FjjBnljdAxotFSHkS%2Br5uA6VtCSNECBruEoTOt3pw%2BXCv6gfw7%2FPHW59UDRirXq5%2BRDJOYVEYJde39BnRn29LUFDrjQFqvuUIrqjABY3Qyxjd0kVzHEGZ9tZ23sGuMx4ojoFQpM%2B0oVrci7x7ZY5u3XdHQpna3MEdlafZ9%2BgXoP40y%2BCAyPmVuFuwmksRH3c9Jh2TEIi7QQXlQhvKHWMjd8FiP4pwya7XHbtW9k4LJbwFG4qyBLub6Und8L2St%2B6XPOWN0jF6HputuGDhKqjW9tkU%2FR0zM65ZhrnHpnK1eG7x0WkCLhsdt1hV83ZnaXYT0wv5L%2BhHsmuP7F%2FMmOB3lp93zbQGKUqSibLcEp7X8Q9RuHnFfW%2Fi3ZbyQxGkbWYWjWWU10dol7B%2FErzEefxfXpy4RKr5XPdgkSirXWjpGEmzrIWTYBmDc4q9c9FLTlUUJ5YAGOvFYdpbxxXdd8CiVyrPxIuVz7q33mJLFoEPMlIiOn%2BW4a5GSyy62AvKHJy0t2YkXTuX0e12hInaJw65aoIiudzEFiRTnfqN4rFAo%2BQIlMIXSz78GOqUBf1xpaK%2FGovcPGnz20hVKKMvhRzJSZ%2FFIolCaawO7gn5X2u3AssG%2Bq%2BWgPs5MoT%2B9I66jAoYpJZkxeisyYRSx9yV5cyq%2FEccPkBd9%2FzWoO9L9l%2BsiPlWKCbWJeftXzc%2BEDgZQ1GO1W0sTzAFo5yYVOCaraUiZ3UlWqbiFqwYEyqhOYwsQQSdKoRkpobOqTk%2FuQ4X7fCvkFga%2Fgc4%2BcRg8jcyr4cxH&X-Amz-Signature=d87852c3720669f4eee9c3c56758b1190fa370e797d707166cc566a8529ec24e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWR5WLI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6NA2HHouH5eIQ2G6hjs%2Bhx7pgft3V9alKiw%2FJJjxtVgIgegAk97c7ErlY7lIAzvKaZQMdl3PH2mPrVOX8Vv4YYNoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGQ1bFiMf69qPOyQ%2FyrcAwMOyWXuIMKhArOEh2VfhbObdj6r%2Bb12NxRlq7zooXJ8GkXzHEpbRROSM7jsrzu0rN%2FyJBELanWpYCxCUU2r%2FrugF12%2BI8mOrhNPWeoa95zF%2BAMfyrNzgXaFZFMiMY8hxlfSj2HiTPloyYvz1lf5cvbkzF4AZBWbwAlS9w0O7CvmLAQZimkMYm6KGc87W6G%2BnYWaOt23T72eKRFgiJYVNQZyWDYwQDvoZraeyjYQTANE8Ljb8tyJNTsg8ImM0A91Yt4DvXWOQMRebtyFjyXh5QF4OREmrvSvLSLARAK8ge0ro3aIOoVQ4vS7rNRUvkaajVy0CdVdIAByoPMV23o0VwEtfa3ptk1LWPbPufRZQYdJiCOgrdelwfRvK24foeOlYCbCketkdFxBkG5bYIbDFwE7i4SuzmqItsKlkRx5mwqwa7gbJ%2FxRmkxsqAYWHKOZAlQZz160tN0%2FtRfPioUG%2FgKyGhAFEuNXGOcruRsw84ovVnGWLhpJzt2%2FRZA6MSmi%2BGbHkhLLPhWknWCplwk2qrdZjDJkZ2JfvucUNl2B%2B209blILosAJFO7OnOu0N3v7bk97Km%2BSqm6aweWWf4l3RapBS3AHb0k0Zkf0M5eZs%2B7TFL77PoJRlgMt40CKMMfRz78GOqUBpkL1uKM%2FdhN0TtZlHLLvCZm4eVNZgz8ecIjnkExk0KLaOZwjxQaoArvbFWK8VKlGlZN9wApwhm%2F0veLraBHzOAUNzqzkV5Ext%2FIYToq5chOg0VBUENV%2BEiRXdg53jd3X0WcDY9mlNciJk54h7xhrYCZ%2Fw0wQQn50KUh5Dp2oElDbfeSmnJSTbQH24oKP2E0QIyWN10zPYCccO4FQGHb5nBYr%2FKNG&X-Amz-Signature=ff164d3472fcf8b22ec3f4494482dc364c4f445ba52d80e62ac2192be4937385&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
