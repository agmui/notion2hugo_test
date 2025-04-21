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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6X5UZW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHOoNA7aA%2BFlZ2Fi9h6sDgYqq4dMwk9L9tvacjpPPxL9AiEAxOfCK7mwaXXh6kgiqtrTi4Lp1AaeqdxaY%2FA3C4SCx2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMSG%2FZM4fiqIzCjtSrcA4cP6MIfz7rV89aBpEWppmosqqw1NawtkDnjFxmdHjxWQKlo8Bh1kNM8CHFhBEymTbGNNCaODeA6x2LKOcpZmfczAoTjhRbONukPHBL6yYsQK8qyZYV3Bc6mTWWkUXz%2BJ5mRUi01lxEFhAqCqiXs2obFdQYJ2dzibkX2CR6fsqsh2fv1JvZBVOBimVZT5tV4rqjjta3wXwp6RyhBZvTdqBaiRMpvdZz%2FqAfHswrsPcEYSku9lSnteBQQGdvNt%2FM%2FDsHmbNZLdaDFGbQLx5DDc5IlYG4kk5tSWQlLwyakrPIdhhx%2F6l0QIiFNla8GCIlVJe3Xyi1BNNcKTEBOO0tFBnUecas2rUSh24uBuvfC9ANZK%2BbWKgkYzvzWmIld06H1L9Ujr5mXpOPKvm8JMHXhrVl9HhB%2BtXI%2FsoAL6z2FpFb%2B48Nc%2BFMP2aOBxvWiXSGOMvJXFlN49uPIQygqDhYOYp3B4iGow%2B8y2aKFGWP1HFx5fnv%2B2Azp0L50CncAD6bNAYbZcJ6K%2F5t98KeFh7DNGNtOVNGtQTX0KfG2bEGN08mh63%2B2DlFldobTEm0%2FBSQcCiUQr%2FRwhGKRIFbhby6X49zrDMcjscyzcrPFemLpbIYuTbEIm3jgfMq3PPJHMITzmcAGOqUB8WT0InDuHKGgSGJbLLAgVfCP1Uchy1T8zWLb2o7xfB5%2BssMrycEkFXWmsxGqHfnvaFIpID8k75v7C1tzejM4dQ7Ms0f5wgPe%2F%2FcRtcgxdu0LJVHsZRkHY637g72htcaQaiXmbPTya4QcjUod3ZiS9Zj26iw8ohqLLq0%2F6u%2Fzd%2BUBpQBGKqT7tIX6PzkxyktuFMvxnW2vYdQXL5d3%2FQshvVdLP0uy&X-Amz-Signature=8261fff77bc2a4ddabd190113881e0afbe6716aeda19fb4c9d7ce46ec4874335&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6X5UZW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHOoNA7aA%2BFlZ2Fi9h6sDgYqq4dMwk9L9tvacjpPPxL9AiEAxOfCK7mwaXXh6kgiqtrTi4Lp1AaeqdxaY%2FA3C4SCx2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMSG%2FZM4fiqIzCjtSrcA4cP6MIfz7rV89aBpEWppmosqqw1NawtkDnjFxmdHjxWQKlo8Bh1kNM8CHFhBEymTbGNNCaODeA6x2LKOcpZmfczAoTjhRbONukPHBL6yYsQK8qyZYV3Bc6mTWWkUXz%2BJ5mRUi01lxEFhAqCqiXs2obFdQYJ2dzibkX2CR6fsqsh2fv1JvZBVOBimVZT5tV4rqjjta3wXwp6RyhBZvTdqBaiRMpvdZz%2FqAfHswrsPcEYSku9lSnteBQQGdvNt%2FM%2FDsHmbNZLdaDFGbQLx5DDc5IlYG4kk5tSWQlLwyakrPIdhhx%2F6l0QIiFNla8GCIlVJe3Xyi1BNNcKTEBOO0tFBnUecas2rUSh24uBuvfC9ANZK%2BbWKgkYzvzWmIld06H1L9Ujr5mXpOPKvm8JMHXhrVl9HhB%2BtXI%2FsoAL6z2FpFb%2B48Nc%2BFMP2aOBxvWiXSGOMvJXFlN49uPIQygqDhYOYp3B4iGow%2B8y2aKFGWP1HFx5fnv%2B2Azp0L50CncAD6bNAYbZcJ6K%2F5t98KeFh7DNGNtOVNGtQTX0KfG2bEGN08mh63%2B2DlFldobTEm0%2FBSQcCiUQr%2FRwhGKRIFbhby6X49zrDMcjscyzcrPFemLpbIYuTbEIm3jgfMq3PPJHMITzmcAGOqUB8WT0InDuHKGgSGJbLLAgVfCP1Uchy1T8zWLb2o7xfB5%2BssMrycEkFXWmsxGqHfnvaFIpID8k75v7C1tzejM4dQ7Ms0f5wgPe%2F%2FcRtcgxdu0LJVHsZRkHY637g72htcaQaiXmbPTya4QcjUod3ZiS9Zj26iw8ohqLLq0%2F6u%2Fzd%2BUBpQBGKqT7tIX6PzkxyktuFMvxnW2vYdQXL5d3%2FQshvVdLP0uy&X-Amz-Signature=fb36a29576d7625ece9c022a8c98ada85662c075b5524203c81ee94b1630c1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
