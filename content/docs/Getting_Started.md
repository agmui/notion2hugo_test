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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5C4DSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDJfEn8F08pD9ukXUnKIR4TYA3Mub%2FOVVzCoz6makoelAiAA1dOB2CrXoDDdoNr9lH25j0CLBmqub6MrbunAl6uFpyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXrNO6AGiN2TQQW9XKtwDIJc8qaTN0HJM%2BFZ%2BT%2FpdFnqtECZ%2B0vRjWEO145GOERjzezZhhfndJL5wnZss9Bao13Oy5VSEYi1riPjAOWKbgEu4%2BdTVW7cXu%2BwonmnthvQd24hHM5lZGgJNESNaOXYhhLg6zE9Kq%2FjO%2BiTIHO8Rl3%2BBKSDsIrqto8ttt6FVTdJAN36rSsFIbZIA%2F5yD1VdL8Y5pHBtcQXytZLjp4UdZCbwQrIZm7yf1RhjaO8W9Fu4%2Bpw7G%2BhVio4kapaNs%2Bxe2joY%2FQqGsD%2ByKizsXGpIRJop38cpI0HvHMpxjUWnh7%2BOERMiBq3bniXg2p7mSWQ5guVfl7odNbWc1KXrEwVTb%2FsmAx0bWszmGckG7tyEJxjWgjd79yo9vBQnW%2FFHJVm9Hl0YUoL64PqN5QfC%2B0VtOz059TdsVB9msA%2B28gJaXyk%2FeW4OaXp%2FVh2r3RZcQqn7a6IEaYJMYqrO0EPcewPs3xXjS268h3ZiVF4kIOakdYjRX%2BpQHxy9FQPzloN%2FOQ8kunRdyd3b4Nj70vn91OgTX2SaPHFIx7ycN1ZYi5Jq1IbbTJIIkvHX4j%2Fnyyux4x6khqS%2BOTfb5Cl0ZPkbs%2FQPZGIZ6889Yw6H8pNXxcZXpj%2FfRiO%2FC3W0ncwjxiKMwloO0vwY6pgFpi8dhAkgxAjTk888kQxsmB7NrzqetXL9MHeqnVKozaSOj2i7XrSqcg9SYiWXew6oTSDLxEWkvbd6aGOGRhX3zf3DKT9jaPKrkmxsGU7xCCC8Gf7tkaYV%2Bq1dqdFhyUGrfokgEx5cRnGlH44DXFrdYvP0is7DvdYEypthvflW1v2Q39%2F0H4fdxFEiqszWtcX3%2Fcnv2FQNVT0tJ9h4zkswLrc4Ur25R&X-Amz-Signature=eb9c9adeddc6156eacae344936de69ff5bcadfaef6d38594432f6c37b13948a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5C4DSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDJfEn8F08pD9ukXUnKIR4TYA3Mub%2FOVVzCoz6makoelAiAA1dOB2CrXoDDdoNr9lH25j0CLBmqub6MrbunAl6uFpyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXrNO6AGiN2TQQW9XKtwDIJc8qaTN0HJM%2BFZ%2BT%2FpdFnqtECZ%2B0vRjWEO145GOERjzezZhhfndJL5wnZss9Bao13Oy5VSEYi1riPjAOWKbgEu4%2BdTVW7cXu%2BwonmnthvQd24hHM5lZGgJNESNaOXYhhLg6zE9Kq%2FjO%2BiTIHO8Rl3%2BBKSDsIrqto8ttt6FVTdJAN36rSsFIbZIA%2F5yD1VdL8Y5pHBtcQXytZLjp4UdZCbwQrIZm7yf1RhjaO8W9Fu4%2Bpw7G%2BhVio4kapaNs%2Bxe2joY%2FQqGsD%2ByKizsXGpIRJop38cpI0HvHMpxjUWnh7%2BOERMiBq3bniXg2p7mSWQ5guVfl7odNbWc1KXrEwVTb%2FsmAx0bWszmGckG7tyEJxjWgjd79yo9vBQnW%2FFHJVm9Hl0YUoL64PqN5QfC%2B0VtOz059TdsVB9msA%2B28gJaXyk%2FeW4OaXp%2FVh2r3RZcQqn7a6IEaYJMYqrO0EPcewPs3xXjS268h3ZiVF4kIOakdYjRX%2BpQHxy9FQPzloN%2FOQ8kunRdyd3b4Nj70vn91OgTX2SaPHFIx7ycN1ZYi5Jq1IbbTJIIkvHX4j%2Fnyyux4x6khqS%2BOTfb5Cl0ZPkbs%2FQPZGIZ6889Yw6H8pNXxcZXpj%2FfRiO%2FC3W0ncwjxiKMwloO0vwY6pgFpi8dhAkgxAjTk888kQxsmB7NrzqetXL9MHeqnVKozaSOj2i7XrSqcg9SYiWXew6oTSDLxEWkvbd6aGOGRhX3zf3DKT9jaPKrkmxsGU7xCCC8Gf7tkaYV%2Bq1dqdFhyUGrfokgEx5cRnGlH44DXFrdYvP0is7DvdYEypthvflW1v2Q39%2F0H4fdxFEiqszWtcX3%2Fcnv2FQNVT0tJ9h4zkswLrc4Ur25R&X-Amz-Signature=a7e1f683e598f1a7e45c0c6ac8bacaf82c446b7f666bf78ceb555a049d0118d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JNXE2FZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCjp9J5chQZS81ww9vKWiFdueKCGdxSS0pfdp8PaGLiHgIhAPLV0EeZjmDfUBDKsJyUfsZODaBrJanSNB6YQTuOkyFgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0Y%2Fx8x4u9vohZOpcq3ANGNf4iJcI2W95wuByE1ZquwoC%2BFCLZ47valE2XvxXjqRsReZfdtPFW0%2Fy2kKmkVJutDfJ1YAykT10Uga6X7PYVoCyjkUYEbL2wQ04cbXGM%2FkgwnpI5D7ZumK02keygBCR27aAH8FbCQ1w2NP6XzPPiKejvDxqMoJn5EgcHVDhC%2B0IlmCJ1JXMVJhfKnQXuxij8C7Hn1uzl%2FZtcI9t3KOZWEGJspwQHhSRNZTLy6hKDwq6CZOJ2LFi9FSNh7PNMsMfeCxUqXDXSquebd3ZovVl2lnEyFt6FW23WiD22S6pwKKQAQkTGOziEF9lc92AJSbo599SJXrKD68bXGISwIY2wVEsXngIp%2Flfhj2yvfm95%2BljMKO3BW7bjIdgy4N90Lg2ZIza6%2FT3Aq6GDix90yhyzogxaSBAWf0WhXZti32UA0iaXSXQITNeMAt9QqlHIyIO51AFdmynTxGmm2IQhtYwTYxz1nlaR65xH8Y2UMqQsjeIb3vjSyVtFUbI7pxKk9apH3VxuTkC0AH6q660ViFhJaWpjErOeqXwg9VAvkvYKfpML4AAZO14e7bhmlCxWuwjK5w%2Fn4iZ9KljJ%2FXLnE6sUqvwWWZ6O41epSwOjs7E5FcxD8XvaXihVUk21KzD4grS%2FBjqkAVfnq8eEoMfkKpSC27rBcUzHGbGEvYLhLDvP7SWiVjxgUhKaiXlj6pMooRlQL9aQ7fBkE2rkW6ZWxB5R4rYrTyEm%2B5eqFwBFY103fl%2FWzmLCfSD1M94MoyViADuav0MpXTDkbBgzs4B6tWOqKWzP1R95%2Bdv0WxAfW%2B%2BpASzS44pxZ%2FJSHPx8I1K3wfFzSrg7wF%2Fovr5ynqvFa9z57iNfYkh7ZCjV&X-Amz-Signature=d6f0c2c85d6b5667b9c74112c34d2c54a455e1562931fb28dd99a4c2b90b0bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEM46SE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDZu6uKHjXCyIriJw%2BqDtei3EMviTnulRGWLDgogxIOYAIgJUG5QW67HBbopKKC8oGalAOb4iuaD6JVkUobVMLClYsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe3nWlabS0R8eYueyrcA7N8vsE50kX0r9%2BodtrmfOVeB4s73s7%2FZznhPvERvYfv9mobsRrz7rtLRBFyQ0yon5e%2FVzOxz0iQ7bwjskYwSncIzD9rZou0CmmhUlonKsabRhC0qp0gwRn%2FuLEtOLvdusxbidZDGH1QqG7Ad9ADmpYwT67rlC2lN2DimkW6vM8r%2F8FiCAQd5GmwL%2B%2BBbjH3Hf8OBju9qc1ZsfNEPk%2BaCmXJaASVUyqCArxOhn9%2FYpPlE5K4uVnIaBni7GvUuu802ughiDXlHq67agJMN7SMIvB2PqFZrFuc5kOGz1vg%2FY1RgbZsII9Qaw6N%2FXTYMVscBtIhgNRt%2B9lZjhyDUrZ%2F0tEGiErNSL%2FQYV11CJUV%2B0RM8lDjnWhgfBv2AMpjcRHRRuVg2iaInCky2WY%2FO9Ic9aP5sTmKqBP1qqG5YfwRoLKf2kSxaLNDXAriwx6ILMJQ%2Bd2OCoOsMON5W49fFBIIUsIAV7ukSj8MUikx%2FjIsqi7MLL9PEDUwQq94y%2FrfVXES7UbOi9c7JqPZuoNUS8zMguI%2B4Lu%2BkfbBDgQVQF789Q3hZq6Km%2Fw%2FFu%2FrEe8xmr3GJ2cKXaefIM4U%2B4XPH2caPh%2BwCV1%2FVMBGSYY%2FepsIYR8QAC%2FUh20NHpl2lcT%2BMNKDtL8GOqUBIxhlXD7YImYC4x97GbJth6ssdxvmn7wI%2Bi%2BUSpDOb9V9TzvkHiVZme556IJdCylU%2Fc15yM%2B29c8Y74tivkn5le5Yr9Wu5UP1mh%2BHbilgleGlLrGO9xYrJWv3aQKceksdS0xw6Vr31dD3ZXHxkj4JqmOG2uxnIf5yYrvW4M4Kncscc5hkLwqcAB85yAxFkagNFZ8oU0%2BX2%2FaXWVuEG7oEzPtpEeBM&X-Amz-Signature=a066f5a395166c17750c11a77436be493215f0feba9ebd12b1f42ef10f7e864c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5C4DSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDJfEn8F08pD9ukXUnKIR4TYA3Mub%2FOVVzCoz6makoelAiAA1dOB2CrXoDDdoNr9lH25j0CLBmqub6MrbunAl6uFpyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXrNO6AGiN2TQQW9XKtwDIJc8qaTN0HJM%2BFZ%2BT%2FpdFnqtECZ%2B0vRjWEO145GOERjzezZhhfndJL5wnZss9Bao13Oy5VSEYi1riPjAOWKbgEu4%2BdTVW7cXu%2BwonmnthvQd24hHM5lZGgJNESNaOXYhhLg6zE9Kq%2FjO%2BiTIHO8Rl3%2BBKSDsIrqto8ttt6FVTdJAN36rSsFIbZIA%2F5yD1VdL8Y5pHBtcQXytZLjp4UdZCbwQrIZm7yf1RhjaO8W9Fu4%2Bpw7G%2BhVio4kapaNs%2Bxe2joY%2FQqGsD%2ByKizsXGpIRJop38cpI0HvHMpxjUWnh7%2BOERMiBq3bniXg2p7mSWQ5guVfl7odNbWc1KXrEwVTb%2FsmAx0bWszmGckG7tyEJxjWgjd79yo9vBQnW%2FFHJVm9Hl0YUoL64PqN5QfC%2B0VtOz059TdsVB9msA%2B28gJaXyk%2FeW4OaXp%2FVh2r3RZcQqn7a6IEaYJMYqrO0EPcewPs3xXjS268h3ZiVF4kIOakdYjRX%2BpQHxy9FQPzloN%2FOQ8kunRdyd3b4Nj70vn91OgTX2SaPHFIx7ycN1ZYi5Jq1IbbTJIIkvHX4j%2Fnyyux4x6khqS%2BOTfb5Cl0ZPkbs%2FQPZGIZ6889Yw6H8pNXxcZXpj%2FfRiO%2FC3W0ncwjxiKMwloO0vwY6pgFpi8dhAkgxAjTk888kQxsmB7NrzqetXL9MHeqnVKozaSOj2i7XrSqcg9SYiWXew6oTSDLxEWkvbd6aGOGRhX3zf3DKT9jaPKrkmxsGU7xCCC8Gf7tkaYV%2Bq1dqdFhyUGrfokgEx5cRnGlH44DXFrdYvP0is7DvdYEypthvflW1v2Q39%2F0H4fdxFEiqszWtcX3%2Fcnv2FQNVT0tJ9h4zkswLrc4Ur25R&X-Amz-Signature=8a0c823fff89f64efcfbc50d1cddd8e3b3e1fd33c451b3153123b9673f41f3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
