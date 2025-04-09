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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQY4I22%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBBTVAS%2F3OzPcy9fyoBKTwWZGfyVPu9tvrdPZ2aPmcLbAiB3KsO7nnOAEHm6JWeaTHexMjf6QsqFACtvU%2B3gSJ4hhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsAPci%2Fl19Gx%2FpxWmKtwDm3Lirc3cN8zUfkjPQkiQs652pGNUiMsyCterMof15H1Ha2CBwoaqgGA60xl3b3RmJSLs4YrsHgpfR1VqlLwTjoVEJ9kHkhetDT1fShHOKe3H0UIKdbdkxPtibx3f9xGYnrDX7oAx4NPy2n60pWdGvqdkfO2PcVRdUPK8x6kydAlD%2By1D27KPmR77HBbJ06vlfjK6g%2BhXkd%2BjwSBuxZ8n%2BpukGTrsbxpJKIEhxLe%2F5O%2BpiBJu%2BI956Uz2COPNXEeTkvhcxawH%2B2f2iKimNWUJktjDTU9RTLDrFNhB1qlD%2BJHd35s257Gm%2F8ERgvfP50%2Bmcdf%2Bbj4iC8YbI9rz06X1U9Yr90LIh8Vbgn8gfsCe%2BgE%2F%2BE0sn4SXgFBwyOOzskM8xywy24PzHtqBEpLcEuNHdNsg%2FjqCItN1ULFr4n2hOGcXlo5NAoO%2BHQhla9kv1PQQLQaTXuy0qpc3TaBjn0YDaY4h0z%2F0KfuzbwG08tTmeG0AzM60sxh9MT4VLdfKKPq%2BRKBS%2Bzez21vrbD8A4Mvv1K6oboXzQQ%2FbUZkclzSyQgN2DF2gROELc%2BLY3Rz0kx0rmp3Wo8eU3VmzKMW6GrcR6bsWBOMuSulRv603voLJPrbinYRmwl8j8nD2QTkw6L%2FXvwY6pgHqVCHnKGWkkPJLyRK%2BZdA2J%2B%2Brzej2whzFCfxlZ8C1rM1MkDW9qenxGTfl4rbz3EQ3PnlZNzCqGVS90VuDLAazqleyIMD15WPmDAdzKGJtcOwSvIrY4Lb7LQg6a8RWp%2FVVXPlQyFwrybPxXLY%2Fzlc3EavAiMuJn%2F75OmhlYEOAAlBGyV3b4D5D2ZmULeS0kZdG47Tv71fRCOU%2BE9%2Fo6ahroBL8lHvQ&X-Amz-Signature=137605a7bc09736b41f26e39e440f36d4dc16e44cc6848c2b6cbe8395a95af0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQY4I22%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBBTVAS%2F3OzPcy9fyoBKTwWZGfyVPu9tvrdPZ2aPmcLbAiB3KsO7nnOAEHm6JWeaTHexMjf6QsqFACtvU%2B3gSJ4hhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsAPci%2Fl19Gx%2FpxWmKtwDm3Lirc3cN8zUfkjPQkiQs652pGNUiMsyCterMof15H1Ha2CBwoaqgGA60xl3b3RmJSLs4YrsHgpfR1VqlLwTjoVEJ9kHkhetDT1fShHOKe3H0UIKdbdkxPtibx3f9xGYnrDX7oAx4NPy2n60pWdGvqdkfO2PcVRdUPK8x6kydAlD%2By1D27KPmR77HBbJ06vlfjK6g%2BhXkd%2BjwSBuxZ8n%2BpukGTrsbxpJKIEhxLe%2F5O%2BpiBJu%2BI956Uz2COPNXEeTkvhcxawH%2B2f2iKimNWUJktjDTU9RTLDrFNhB1qlD%2BJHd35s257Gm%2F8ERgvfP50%2Bmcdf%2Bbj4iC8YbI9rz06X1U9Yr90LIh8Vbgn8gfsCe%2BgE%2F%2BE0sn4SXgFBwyOOzskM8xywy24PzHtqBEpLcEuNHdNsg%2FjqCItN1ULFr4n2hOGcXlo5NAoO%2BHQhla9kv1PQQLQaTXuy0qpc3TaBjn0YDaY4h0z%2F0KfuzbwG08tTmeG0AzM60sxh9MT4VLdfKKPq%2BRKBS%2Bzez21vrbD8A4Mvv1K6oboXzQQ%2FbUZkclzSyQgN2DF2gROELc%2BLY3Rz0kx0rmp3Wo8eU3VmzKMW6GrcR6bsWBOMuSulRv603voLJPrbinYRmwl8j8nD2QTkw6L%2FXvwY6pgHqVCHnKGWkkPJLyRK%2BZdA2J%2B%2Brzej2whzFCfxlZ8C1rM1MkDW9qenxGTfl4rbz3EQ3PnlZNzCqGVS90VuDLAazqleyIMD15WPmDAdzKGJtcOwSvIrY4Lb7LQg6a8RWp%2FVVXPlQyFwrybPxXLY%2Fzlc3EavAiMuJn%2F75OmhlYEOAAlBGyV3b4D5D2ZmULeS0kZdG47Tv71fRCOU%2BE9%2Fo6ahroBL8lHvQ&X-Amz-Signature=8e3fa30d678eee502d236f452f1762689bcd32d4b92b07eda1a2c447d7f4a7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH26UF5T%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICiHpMPz7aC7KGgEq1dVmf67qVG2hog6PaKOmtQjA6WRAiBY7JAkZF4yWsysrdY126%2BREnIFmiLVbem6cMPV0ZIZCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fw%2BcFi1QAAJb%2FBAfKtwDHB2m4nFjSXjDG6C6nMefhML31BL4bsoAMYJNTqqyNCa8RODtlmDYZalfBV9iO5dd1kVXeMpVl%2B7sURpwEWqfuJyb4Cglh5lIy49ZZdi5Tx6CnborhmzEeKHuIOUVQfllIhuUZsRmzQMw4MmNZ4rrtNFP8XO7o0CFBKiFCawyGuuYCjohUUtnZONDgjOJP1UAXFSwR%2BHFmNCQknAsPJmuZQsFL1MPaV1zA%2B9q4c%2B3X6uFo7%2BewAhzGerVv491%2FRbthClXyC%2FTiGXkvGCCWd%2FGSzF9F%2Bv0alJNzDi8jXB5rnn21PtalnMjhZiErFgWxjwxmzFJ1p46MuoNIhl6CvE6GAKekxz7wXcOm7Z4tshXANfO2sQi0y2sz5U9sqC%2BolvpFI0X6ELO%2BA%2FwH2HD6mKhl88SeKozg62t%2FB5ySbynVOHSOPiO8fpztkD3hfjLQTtY6GswbuyeDKoRwhChbrRuBjY%2FXzpOVkfPRg3%2BEEpx8rtbuhqOwWc2%2Bnjer4VT0YaSwMihNf14ReIwMVSyasRciPLzb3xqxInoi86NFb4lt2u1YQjFrBIUuy8obc%2BL7Ct2R%2BO56Bx6ttRCw%2FdRa2mYFaEbzN2vEE7nFiXlCerc%2FGeZXI7huQYbnHT10e0w%2F7%2FXvwY6pgHh2UX2zua%2BJohpCfwQokzg7qVL8vP0M81kky%2BKPDCKQiUpTMMTvR1ITpFXpE1LvOjrGrO1RP6oWH4iHri%2F0%2FwSendBtnPiGvsyGFVw7Y%2BqV8YTSazmSXltBsaPlh%2F3H%2BG4iSjYrL62IQXcgAkQ7jpeFW9%2BS7Qe702%2FrBwRS%2FrQof6wuhSQRjyXIUzTxq6Rag8laId6jH5wt%2FJsCZkUE3DYnx5Z1Vyz&X-Amz-Signature=e5ca0610ffbe997dc3bf3f498ded25da14efb857327936caed2af9f70bd3138b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTZAKYZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEFHmEmp9gWOeU9whdEfdExSEhXtKeoDxsbVJ5ZQKTFFAiEA91KNzWcYUvdVUk6bOXkQDHp7hFPe8lvPMWPSlt1CDTkqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBgQorXug31nGhAOircA4g0nPS%2FxIsu%2Fo8iYywdW%2FgonBQNCIG0laWJDaqQm%2F19YRAqVvAU6gEcuhckpjwM2e9Fnd%2BIPpq5cDTZj6kP1DhXzmyizdAYyn7Rmvbzr%2F3waPkZ6sTkKQ0TFOzx5bmeR1yAuOqiQD1bbTOLlrIkXJZ8iV5ZkFlCDFDKWw4HM4VGM%2BQ3b7%2BK4i6OZgWqLwr5qVYQ91EK1lyb4Ysv52BupRlQOJRBVuT%2F8KSbEiKhK4QyFsndqV%2BwGooo%2BHZlD2bMV6MNduZqMwXsv%2BDgKNh6DYIg%2Fel8SVHGydXwWgPdZuUYkYUAh084VoLEgWS8PLNHEO6ESIVehB6u6bqkqZOHhz5dahmzwGof%2FPnZcWaByd4Lay%2BVZdjFpWXNo4lMYbUzLeyE8cGpjelCatD6vLom3Y4Owh0XTFsNtLNTOKWN1ACdAkw1hVdhRGkzo%2B1mvz6UgOP%2BGFcK7HEF20%2FE7DjHdudaCNVkCVHs0CjNBTEzTJMLbypo1EZV%2FdOjwCJN5RLkeBGnvFYs80ICmuQyp5QnNgbVA96SFhCZ7dPXLfaBlOawbycU72crYLgJ%2B6ZQ2YsMhOVgRYo%2BBPA56jVjC0Ibh3Zw3jq7NmYNKbXsWDeEzZXuFDxolYQIfCa82BXuMNS%2F178GOqUB1jZCEqjNcFlYYl%2FunlJj85fMGI6bYKYz0v8w2XpyUulTlwKCO7GHLE0rhjdT6ZTFhVFZmNy6arO6HS51jGvkq1Gc6zPQiWMeqzSpgwtBk0aLBelnXf%2B6nxv1wU4gPqFtpcB0PTVjzweWWTBopGVd8fQqvPvIRh%2FcXmCYCM8XfBealHdNgtz0VFA2L2Txoi1kHfBPN4tMQrDw6BfhuX5q7CmfAVmp&X-Amz-Signature=a8dbc83e841e0291e411c2aaa916f70583dee742e0eaca25d1c0845399239a34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQY4I22%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T032545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBBTVAS%2F3OzPcy9fyoBKTwWZGfyVPu9tvrdPZ2aPmcLbAiB3KsO7nnOAEHm6JWeaTHexMjf6QsqFACtvU%2B3gSJ4hhSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsAPci%2Fl19Gx%2FpxWmKtwDm3Lirc3cN8zUfkjPQkiQs652pGNUiMsyCterMof15H1Ha2CBwoaqgGA60xl3b3RmJSLs4YrsHgpfR1VqlLwTjoVEJ9kHkhetDT1fShHOKe3H0UIKdbdkxPtibx3f9xGYnrDX7oAx4NPy2n60pWdGvqdkfO2PcVRdUPK8x6kydAlD%2By1D27KPmR77HBbJ06vlfjK6g%2BhXkd%2BjwSBuxZ8n%2BpukGTrsbxpJKIEhxLe%2F5O%2BpiBJu%2BI956Uz2COPNXEeTkvhcxawH%2B2f2iKimNWUJktjDTU9RTLDrFNhB1qlD%2BJHd35s257Gm%2F8ERgvfP50%2Bmcdf%2Bbj4iC8YbI9rz06X1U9Yr90LIh8Vbgn8gfsCe%2BgE%2F%2BE0sn4SXgFBwyOOzskM8xywy24PzHtqBEpLcEuNHdNsg%2FjqCItN1ULFr4n2hOGcXlo5NAoO%2BHQhla9kv1PQQLQaTXuy0qpc3TaBjn0YDaY4h0z%2F0KfuzbwG08tTmeG0AzM60sxh9MT4VLdfKKPq%2BRKBS%2Bzez21vrbD8A4Mvv1K6oboXzQQ%2FbUZkclzSyQgN2DF2gROELc%2BLY3Rz0kx0rmp3Wo8eU3VmzKMW6GrcR6bsWBOMuSulRv603voLJPrbinYRmwl8j8nD2QTkw6L%2FXvwY6pgHqVCHnKGWkkPJLyRK%2BZdA2J%2B%2Brzej2whzFCfxlZ8C1rM1MkDW9qenxGTfl4rbz3EQ3PnlZNzCqGVS90VuDLAazqleyIMD15WPmDAdzKGJtcOwSvIrY4Lb7LQg6a8RWp%2FVVXPlQyFwrybPxXLY%2Fzlc3EavAiMuJn%2F75OmhlYEOAAlBGyV3b4D5D2ZmULeS0kZdG47Tv71fRCOU%2BE9%2Fo6ahroBL8lHvQ&X-Amz-Signature=2f37526cf5c0e38601cee7199b917c98c9eeb0130d242d23750d0a3703a4f716&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
