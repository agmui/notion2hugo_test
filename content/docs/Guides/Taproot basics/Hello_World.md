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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJDS3TW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIC6ZFcgNpM%2BtC66aRTmPaRgxJQ0GsNpJOrb9wBrraVKWAiEA9eqOL76Ho3Jx0fCeDBazYneIEJSXQCB8Wjt62FaNjfwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBPTRGXaZxIGNM47yrcA0l64ugYL6FJGFN1kp344Sk9suwGdYGkzk7YD6vwWnVHMR39ihyctbzjedXV2GmBB%2FG%2FzslHxu6Xzdviiqb71wSlFHS3Pz%2Fb8CaOhuVAXnpWIYCrKlyEUxaRSpcmPOa7EgFa9ACCcDkyyLkc8BVKVoJmR2udBov599E2im7weZiAoA2WL%2B7GgiRMTe1854g6W263ClMUV%2FCzjfw0j1pFfY1IMEUT7hRkJAz60mEq2V2dNAoUR4bMPHtSWsjSs9lDDQKEgy011FcQrAJBod9pTWcbGcBThoIJq%2BQy0buoJxUwHID%2FXyTVK7OSu2dzHQR1FDRjfuqokSXCBRQASS%2F4TV%2FFMlOpin9ccM7XnjFTrEjYDmgYsXoTF5XSIc0gya1Cc6nxWPeUkvFDZAJt5DLkTYAOtv%2BvPDhC62dv%2FZHIg84t1Lt%2B0d5QJ6X5n2sA0YRBSrRh0iGCDJZc4vhGlNCFhcLEcDKdgGcjYqV%2BIsIX2Ce%2BjQdcq5S1HzblJRNEbJjtQlWNDSkhfa2C6d1F4LL%2FLdaAqNAKCkeczwh9QmSc8GsXwazwpQEJQSk8pbOn7ztvC4HvRKPEkbTBMiSjnjUMfKzlDleXZvbG%2BPrR1srn%2BpDJeklcS6jF1DNabqfgMMWpnr0GOqUBAbtVsFwuckA2w%2FjTfyRd%2BPXJUWYdkvFB9HBnrn3PrJxWkLGH0tq3uXnaFuRAZim8TRrjqh9Qqb5JR%2BZL5W3MV35tWGcuIXt3jnC9E7YI5K3eUu5ZdF8ID16nhUTnaRYr2%2FYyMMuuldLacStUKgLn%2BTZsM6B6lL0dKgmDQziyX5U7HYW6tMGJePCYccO1TdGgVYxDdbVt%2BVnpDBTvpYzEUDwqAUlJ&X-Amz-Signature=dd609c386ec6f5e872f938eeaa4c3bb60e6735b719c9160c02d8a6ec7cda0e63&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJDS3TW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIC6ZFcgNpM%2BtC66aRTmPaRgxJQ0GsNpJOrb9wBrraVKWAiEA9eqOL76Ho3Jx0fCeDBazYneIEJSXQCB8Wjt62FaNjfwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBPTRGXaZxIGNM47yrcA0l64ugYL6FJGFN1kp344Sk9suwGdYGkzk7YD6vwWnVHMR39ihyctbzjedXV2GmBB%2FG%2FzslHxu6Xzdviiqb71wSlFHS3Pz%2Fb8CaOhuVAXnpWIYCrKlyEUxaRSpcmPOa7EgFa9ACCcDkyyLkc8BVKVoJmR2udBov599E2im7weZiAoA2WL%2B7GgiRMTe1854g6W263ClMUV%2FCzjfw0j1pFfY1IMEUT7hRkJAz60mEq2V2dNAoUR4bMPHtSWsjSs9lDDQKEgy011FcQrAJBod9pTWcbGcBThoIJq%2BQy0buoJxUwHID%2FXyTVK7OSu2dzHQR1FDRjfuqokSXCBRQASS%2F4TV%2FFMlOpin9ccM7XnjFTrEjYDmgYsXoTF5XSIc0gya1Cc6nxWPeUkvFDZAJt5DLkTYAOtv%2BvPDhC62dv%2FZHIg84t1Lt%2B0d5QJ6X5n2sA0YRBSrRh0iGCDJZc4vhGlNCFhcLEcDKdgGcjYqV%2BIsIX2Ce%2BjQdcq5S1HzblJRNEbJjtQlWNDSkhfa2C6d1F4LL%2FLdaAqNAKCkeczwh9QmSc8GsXwazwpQEJQSk8pbOn7ztvC4HvRKPEkbTBMiSjnjUMfKzlDleXZvbG%2BPrR1srn%2BpDJeklcS6jF1DNabqfgMMWpnr0GOqUBAbtVsFwuckA2w%2FjTfyRd%2BPXJUWYdkvFB9HBnrn3PrJxWkLGH0tq3uXnaFuRAZim8TRrjqh9Qqb5JR%2BZL5W3MV35tWGcuIXt3jnC9E7YI5K3eUu5ZdF8ID16nhUTnaRYr2%2FYyMMuuldLacStUKgLn%2BTZsM6B6lL0dKgmDQziyX5U7HYW6tMGJePCYccO1TdGgVYxDdbVt%2BVnpDBTvpYzEUDwqAUlJ&X-Amz-Signature=a49b459e820f2597fe5c2dfb1aa32b60e4b11baef3462751129d2e2ca863622d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
