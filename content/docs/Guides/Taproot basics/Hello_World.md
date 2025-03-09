---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWVIJSK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIE721YA8CFdTDIfLo8ZJKjsa9Bg5mXJpQIVJ4EhrL7XjAiBAPqFN9SBSwbd2cebvk2tKgOp%2FeyvVCNkEks9OjImZqyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM5Qnz2XodnmgKycyJKtwDtG0vmEcebyjCCCjRZ324pnZFkD2WrHwbTZRbHQCi%2BwYkisOYgmgnwInGmv2Y%2BkJV8Oty8MIAV1Shq9%2BlH%2FumiJh517bdTrLFL60x0QMEpLnpPwwJEgvqPC1s9ZnnFp2S0B%2FDduhgqe1ZKXtgXOIAvVcMqRH1jncq%2Bmn5RLpSwjs4l1rygWKWjCMhXWRoYXvMowPlqi19a%2BTXpTQQkh3F7pmwCnT34xU01VxAEvX%2Frz7C5hKHkwVY2g%2BY2UUXJaZHgKYSx25yLx89Frd4dFdnnL7GVCfjkbvoJQrLdRTM2nzGvMmmQN2O7o662XwZaOk9QuG5foGJjgWcjcst28bXzIPki73dhz6NDTSRo%2ByLak3rRcLmJlvYNOGtdC6kht7gZQ6lSE65jQLAjojbHBpC%2FzHh8MaoxWVqV9ju6Vg5WPB52iBhyO6tJf4jX8FM5VV6ebzaoqEZjDHeP%2BUdwHlj9GjZDanWdnXHRsGlv0HoaMR7KiiDkvX17nOGLOXsYUocigBhVpRyHT2D8NqIC5NNfZkw9ulP8t8VoywgeTSKXU%2Bs%2B0S1ppwgMjfogY%2FBP6yWXki2bogQv%2FLbXa0JwNWG9ITS%2BAzY97zlXP2BV7mGP2XZ%2FPkkpNXrI6S8U9Yw4eu0vgY6pgHSE5cmby12a%2Bk9J2nyeh9K9TbGayF9tjbJVZORgaXX6uv8gjntiLpsc0e8tZWA%2B4sCLAk7mSuY36MY%2B2patVJidgvafekfUbpr0JusfM6fUWbf0gkluqCBlTZ5FACrdwbgVEQYCd4F%2BT6rJUFYKND0yCA1rymUC1gU0d9%2FJztE57NQkbu%2BdIEZ4sv0dblAXHwSPYYkPDuJfeVrDVyy1xphiFSZXc7D&X-Amz-Signature=aa53693dd2b6704770db40cc182c8c4a5be75f71f63d085a6f359ce698337808&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWVIJSK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIE721YA8CFdTDIfLo8ZJKjsa9Bg5mXJpQIVJ4EhrL7XjAiBAPqFN9SBSwbd2cebvk2tKgOp%2FeyvVCNkEks9OjImZqyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM5Qnz2XodnmgKycyJKtwDtG0vmEcebyjCCCjRZ324pnZFkD2WrHwbTZRbHQCi%2BwYkisOYgmgnwInGmv2Y%2BkJV8Oty8MIAV1Shq9%2BlH%2FumiJh517bdTrLFL60x0QMEpLnpPwwJEgvqPC1s9ZnnFp2S0B%2FDduhgqe1ZKXtgXOIAvVcMqRH1jncq%2Bmn5RLpSwjs4l1rygWKWjCMhXWRoYXvMowPlqi19a%2BTXpTQQkh3F7pmwCnT34xU01VxAEvX%2Frz7C5hKHkwVY2g%2BY2UUXJaZHgKYSx25yLx89Frd4dFdnnL7GVCfjkbvoJQrLdRTM2nzGvMmmQN2O7o662XwZaOk9QuG5foGJjgWcjcst28bXzIPki73dhz6NDTSRo%2ByLak3rRcLmJlvYNOGtdC6kht7gZQ6lSE65jQLAjojbHBpC%2FzHh8MaoxWVqV9ju6Vg5WPB52iBhyO6tJf4jX8FM5VV6ebzaoqEZjDHeP%2BUdwHlj9GjZDanWdnXHRsGlv0HoaMR7KiiDkvX17nOGLOXsYUocigBhVpRyHT2D8NqIC5NNfZkw9ulP8t8VoywgeTSKXU%2Bs%2B0S1ppwgMjfogY%2FBP6yWXki2bogQv%2FLbXa0JwNWG9ITS%2BAzY97zlXP2BV7mGP2XZ%2FPkkpNXrI6S8U9Yw4eu0vgY6pgHSE5cmby12a%2Bk9J2nyeh9K9TbGayF9tjbJVZORgaXX6uv8gjntiLpsc0e8tZWA%2B4sCLAk7mSuY36MY%2B2patVJidgvafekfUbpr0JusfM6fUWbf0gkluqCBlTZ5FACrdwbgVEQYCd4F%2BT6rJUFYKND0yCA1rymUC1gU0d9%2FJztE57NQkbu%2BdIEZ4sv0dblAXHwSPYYkPDuJfeVrDVyy1xphiFSZXc7D&X-Amz-Signature=caaa213025095da93b4b7eacfb5be527fc8dd8055307c93c719cb83c56e93acd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
