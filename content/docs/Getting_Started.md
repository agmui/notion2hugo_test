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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3ZBAZS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCMUOTIshOZ0lfxRnJUjefw8aBr%2BLUAEh7w36L4zuvP0wIhAL3H%2B4WrGRJp3lj96bLjLC6SKCXaPpLXaou%2BKQfTJ5L4Kv8DCGoQABoMNjM3NDIzMTgzODA1IgwzBRovzJALcSQxg5kq3AMqK9ySpH56EC4ImQ%2B0DpewvlbhsZRJAvz%2BYi0T%2BdA5WH9e5yzNdAaNdkGmknNGEMi%2Bt805DEuWnfNRpbsrLoAQnKglzdOzRhM82VKPLXwcB%2BKZVKUNA5fWg%2Fx34Epn2CRKyfT7Kp3L80zE6fZcqJG9L9KsmqdsniMQ%2FY8wA3ErCi88P%2BXNOWmdRHrInbddnpEvt3TY5%2BCoXuVAvmM%2BhcHVJ4y0vnzHMx%2FcZjnrIJwUsiGlJuQ4fcief5aCm5ZZXwho%2Fo7EpmWkj9hZU6gqmYBX4pYKI8Nf%2FOdrQB0dMDxHXbVkRL1fEIpYEgcMPnDksX7hlXeP8zwD08lSXRJ%2FEPQTAIye%2FFLOpdHG4HG%2BEAMijSmxnJcPjij3SVGzjADHiUoCgLeCWbu5PWQxxh82dBQ53D8y2Msxa8c8n8A0whZlU7xNzTX20%2BlABjUjAwowpUQDRKvtrJACpfbrHjdn3IJBnd5hKitOmIFJAEUuu6jX7lv3%2F7PW6zXQlh4UNaH0U2ov54Ju6CTHZXvfhzNVGaru8ngSW9d0IP1ajcV30EL6LCNp76nnhmHXnQnk7VaDDMdlaRbYYMll1jxDpAf7mojuAxsomhIQzvcUPM9dnotWya30UG3FMcLQLst6QDD5m8q9BjqkATN7TnT5uRcH290clHBWqstv4wVIVj9ETJHu4k%2FBRxZ6F5LljRZRgjezpaqpSxBp0oW%2FqTvAYOTgR%2B6LqP3Wl34jzN6fOz%2BVOh6xgHNaXTO8mFYkpl4jQZfvPrJGYlAKGnIVL7fzoQGSyYEJ92Mq5PxqkJDjAqXRnY581NX84yIzUAJRIleMhFoOXfTTuWi7fCMQxqEaK7Cm3zFl2Qmpqefql6eD&X-Amz-Signature=dd47b227968575c6e753fa3d5337edb96da3ac20c7bedc0d73fc5c3264d139ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3ZBAZS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCMUOTIshOZ0lfxRnJUjefw8aBr%2BLUAEh7w36L4zuvP0wIhAL3H%2B4WrGRJp3lj96bLjLC6SKCXaPpLXaou%2BKQfTJ5L4Kv8DCGoQABoMNjM3NDIzMTgzODA1IgwzBRovzJALcSQxg5kq3AMqK9ySpH56EC4ImQ%2B0DpewvlbhsZRJAvz%2BYi0T%2BdA5WH9e5yzNdAaNdkGmknNGEMi%2Bt805DEuWnfNRpbsrLoAQnKglzdOzRhM82VKPLXwcB%2BKZVKUNA5fWg%2Fx34Epn2CRKyfT7Kp3L80zE6fZcqJG9L9KsmqdsniMQ%2FY8wA3ErCi88P%2BXNOWmdRHrInbddnpEvt3TY5%2BCoXuVAvmM%2BhcHVJ4y0vnzHMx%2FcZjnrIJwUsiGlJuQ4fcief5aCm5ZZXwho%2Fo7EpmWkj9hZU6gqmYBX4pYKI8Nf%2FOdrQB0dMDxHXbVkRL1fEIpYEgcMPnDksX7hlXeP8zwD08lSXRJ%2FEPQTAIye%2FFLOpdHG4HG%2BEAMijSmxnJcPjij3SVGzjADHiUoCgLeCWbu5PWQxxh82dBQ53D8y2Msxa8c8n8A0whZlU7xNzTX20%2BlABjUjAwowpUQDRKvtrJACpfbrHjdn3IJBnd5hKitOmIFJAEUuu6jX7lv3%2F7PW6zXQlh4UNaH0U2ov54Ju6CTHZXvfhzNVGaru8ngSW9d0IP1ajcV30EL6LCNp76nnhmHXnQnk7VaDDMdlaRbYYMll1jxDpAf7mojuAxsomhIQzvcUPM9dnotWya30UG3FMcLQLst6QDD5m8q9BjqkATN7TnT5uRcH290clHBWqstv4wVIVj9ETJHu4k%2FBRxZ6F5LljRZRgjezpaqpSxBp0oW%2FqTvAYOTgR%2B6LqP3Wl34jzN6fOz%2BVOh6xgHNaXTO8mFYkpl4jQZfvPrJGYlAKGnIVL7fzoQGSyYEJ92Mq5PxqkJDjAqXRnY581NX84yIzUAJRIleMhFoOXfTTuWi7fCMQxqEaK7Cm3zFl2Qmpqefql6eD&X-Amz-Signature=9bf98c37929ec5d93bca83e825447d943eaa6a9e98f2a957ab943265ae45c176&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662M35VJB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQClEwkLSUo4TPgaNMSCqncXMzk9WGsEAiNOPr2dyU37tAIgMdZb6dUJJfW3UEuHXLxHs7KAlmChsMq91FwbOxauOFcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHmzuTiUy16hWMu7UyrcA9MKIRP4mLc8rgOkx1nw1xRY6dEYNlIQiIk71gXOKaOjzKlmf2OIUmCmfVVcEOQGzQti9PsqxYmMZcQNhCpvApxk2cTVxIG2Wb8LwTdQYdywWM%2F3Ndcx%2FJwoZlSloJ0blnw%2BRQhMW9qa9phQp1xnntju8pSOt8NTHAF0owBr%2FDdD1SRwPOljQl7isVzst9MMSt%2FlExpepZdmIkUdM%2BGr7rbEJAYduIjJ07XT0ALD6Zmi9GMkQVIOiC89laTeHezx5iemM0K5E77gd%2Fcg7QedwJtjrsPr93%2FtLjrro1YF6EBWE1ZxC3yF8gFjODdYEvOMPMh72m8oQSJwaGbaRriZJNQSO4N553mv%2BozdXTA3hK0UM4u50BhGRwAHDZJluOaHiJlXbKhK6wYpMXoLkkKf%2B6y3DNM8Vuap1eyfebBbjHFUa4oo9CqIs%2BAvjpa7qyALK3gIE%2BVNrPu5r4dQiq%2BjKwpfTKodDSp02Q%2BLPWBYQ%2FVnuExzTGMKZxLa87GdWeP5sZXGZoCRl83adlDjbbLf4VhZbmbKiqXhHwf7BM%2BTVwT%2BpjhjhuptZ%2B4XVJSP5ZcJ5FFey95NpjkItYsUcCljObnWXs3isjL4DfhmVDCO3d2xH4j8FhWiCgzN1GFiMKqbyr0GOqUB0fTQiFqyKXh7y6NCL4lYINfxFJx0%2FD2FhLG5V4MNGLRZ%2Byhby901SEN5Hj5Dj6NdHj3DaanZwVCxPH0A7waEoqxf2LMYGFcE9CppFgEHjA1UU1n3seQLmM65eLeswzIdsQtYHh00Y1Nqb9t05EXd00qkv%2BwPVbgn2GX7JYn3DXI0VPWb8oUoMIfDhWSeomMIsmNM2EReTKn1wiaSrlU5i7v6TNOU&X-Amz-Signature=5495dd229f6eadc60809d965ebea1a0661c982a4584dac4a9ca0eea97df4ddfa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZXW6JM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDdWDK93RTwMbyCiqZSJ5eeSPsygsSaYCsN%2FcJxbwhC%2FgIgAO1G%2FxAtAmKKU0imUMYUKTaA8bEWzZxxcqDqYTsXFr0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDL%2F29EtsdWdqFosa5SrcA0WXuuJd%2B601wwV7JfFi73lao2bqI65zSSnYXbSg3%2BL6hAMKaW%2Fk36gbftuswr5ojqjFpYiZQDB48wKEPyc%2F4GsghbQU5Urtnh5bqx7QSv%2BnccDOlYTHnkaCDa7FD7sJztvq8STMPuu2gUE2VhrtvZu%2FjcwHGHxhwjeLu9yrCtgC7mHu1Scd4g1R%2Fb1ZeClWcgJJHho9JLHAeldHzAQ%2FIqSD9BtkmjA91fvddoAXyTyIsIwZ7iDhn%2BSOvF2KutCHWxhGp%2FilevI3IqR9oeCZlWo2YUjgQrLI0cYbmDS5tYtNm5jec436TUspaD%2Fr85eOe0WywitzDdajqveUwd64WGTjXAaIu%2FkMWQztfl5B1DPFr7qPE351HNjQTzQ%2FR2A8%2BCjfY3eRq%2FkCAnVwHJ3yfwDtat4unZ9G4RTaeQEgu7v%2BSGq9diOzHMqAZxTKy%2Fy3hp44kHyN62YNFJjCBe2I5Cq5ek3xkup5yL2sTwZH4wYOCBPCqKt3NeNRwPtS9uh68iSX42Lg1uj4UZs8GctAnwSwjtZngFpXG3pg7BaI%2FaKJk2iqnqTiliCfktL1yTpRpzlhgVghprjG4ZQ65N59i9wYSsLVZVJl9crrGx%2BZ1FbA74UxxXeWXSWy5OcIMLObyr0GOqUBTi5BkoldsrQxT2U8VGXGPrdEVBBb3QuliuphrbEfpq8s6CPu2MC5oVCQH8luAujIPQsHQAdVkEKE4nwyTHVuCIHjM36Pnqp8674n1KWswhlaUOC%2FzA0Tz3lW98xIxOw1SIZ47S1mXaAcPju2gJ0s7nBW29eLbLCWxsDbPspbxm0AlQauKFNzT4QytfDbNc4i%2Bw6TbTrcAh5XdYkcyaockd%2B%2FeQ4z&X-Amz-Signature=74a6302350ced928aeb143408c8d8d47f66d237babc10bd274761004163f0828&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3ZBAZS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCMUOTIshOZ0lfxRnJUjefw8aBr%2BLUAEh7w36L4zuvP0wIhAL3H%2B4WrGRJp3lj96bLjLC6SKCXaPpLXaou%2BKQfTJ5L4Kv8DCGoQABoMNjM3NDIzMTgzODA1IgwzBRovzJALcSQxg5kq3AMqK9ySpH56EC4ImQ%2B0DpewvlbhsZRJAvz%2BYi0T%2BdA5WH9e5yzNdAaNdkGmknNGEMi%2Bt805DEuWnfNRpbsrLoAQnKglzdOzRhM82VKPLXwcB%2BKZVKUNA5fWg%2Fx34Epn2CRKyfT7Kp3L80zE6fZcqJG9L9KsmqdsniMQ%2FY8wA3ErCi88P%2BXNOWmdRHrInbddnpEvt3TY5%2BCoXuVAvmM%2BhcHVJ4y0vnzHMx%2FcZjnrIJwUsiGlJuQ4fcief5aCm5ZZXwho%2Fo7EpmWkj9hZU6gqmYBX4pYKI8Nf%2FOdrQB0dMDxHXbVkRL1fEIpYEgcMPnDksX7hlXeP8zwD08lSXRJ%2FEPQTAIye%2FFLOpdHG4HG%2BEAMijSmxnJcPjij3SVGzjADHiUoCgLeCWbu5PWQxxh82dBQ53D8y2Msxa8c8n8A0whZlU7xNzTX20%2BlABjUjAwowpUQDRKvtrJACpfbrHjdn3IJBnd5hKitOmIFJAEUuu6jX7lv3%2F7PW6zXQlh4UNaH0U2ov54Ju6CTHZXvfhzNVGaru8ngSW9d0IP1ajcV30EL6LCNp76nnhmHXnQnk7VaDDMdlaRbYYMll1jxDpAf7mojuAxsomhIQzvcUPM9dnotWya30UG3FMcLQLst6QDD5m8q9BjqkATN7TnT5uRcH290clHBWqstv4wVIVj9ETJHu4k%2FBRxZ6F5LljRZRgjezpaqpSxBp0oW%2FqTvAYOTgR%2B6LqP3Wl34jzN6fOz%2BVOh6xgHNaXTO8mFYkpl4jQZfvPrJGYlAKGnIVL7fzoQGSyYEJ92Mq5PxqkJDjAqXRnY581NX84yIzUAJRIleMhFoOXfTTuWi7fCMQxqEaK7Cm3zFl2Qmpqefql6eD&X-Amz-Signature=08755e0da309c85fa84612c543683304e0bf04289be64d0572fb25a0560bafc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
