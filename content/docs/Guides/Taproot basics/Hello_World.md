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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETUKONW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLtzHS4D%2BJzAXGu9aItmeceKnCcOapT7%2BBxgBJ8PJccgIhAMI%2FMD%2BikOgTQ2z%2BI4PRV9FP34X3q1pnZt89927Bg%2FmQKv8DCBUQABoMNjM3NDIzMTgzODA1Igy2CKNV0AjBW%2BwriWgq3AOfT2yEuIBMlFr0p9azRXXXGRvE7iXK9G3TNLuOSmQW%2B6ZqywyZi8ywzho7Wbe1ESs2PU1Ky5oHeEEJ56GT3hR%2BkVFtfmslRnPZTlGVOrjONCpTSiUZrxj9fvxCb%2BePvq10jqv%2FoO14mAkaJirTmE4wwsZyZBzhbU3roFBpdjhgOY9TkBm6C9v90GSvyJpXzZtVavV6uhOim%2F6DZLeXKbf0kPosjzbbpCU7AyZrGol0JWIQief7tDjyNIUG3YXILbiM0Kalbkh335niKdTiq5bK7XaH%2BG0Qz6%2FVSLVIUrPEwtyCgl9E0wNFGOIeVG3zDEkye1g3fIv4OpmO%2BhHUd7VE6uN1KNDzrkXGincUAm6EP4cLC%2FqufVuBucaWXjwXJMq6E3VF6UW2xbUt0vEcrmlgNFdlDxc7KN9JZFbB2UFhAOtGln7wNJ2JijyV7oAEgdMKX1QSrf0%2BzMJeS6s6cQIqZlVPtacVRsZW7w57gJ9T0EIFIho5jCaxh332SiLHQLJnHWYCrc1Ki4myTTYvWFlLTDMzgPnubgVIicId4BCoLLqqZRM%2BAV30cMl%2F%2F%2FomHXo21X%2FXEKPTzQfVnbzmG%2FUJ4rzhnDej0RlULJWo653drtoXr6oywt9fp6hS4DCC1YK9BjqkAQa5hhsaQ9yTjtlJaCpfRTG4YFtHrLyyaNGxViMgqe5jB%2Bs%2BR7BMDV4lmK6F2MHs7ioHR0H3dx2XsP355LALkfV4eexwevgKK2QSfCChoOn7g0d7W4%2FLqTcWDP8ouGvCprDZa0qrz81nAD6uIw9c1%2B5sq8t99Sg68hRsqsAdGVVKZRzxWKQcUmFiAzXD1qLB1V4ddm%2FVDIl1ysKPzhqe13eF2N6z&X-Amz-Signature=818c1f29b75cb82dd163cfc34b895af643343c5b99db0ab405428e30cf1cceea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETUKONW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLtzHS4D%2BJzAXGu9aItmeceKnCcOapT7%2BBxgBJ8PJccgIhAMI%2FMD%2BikOgTQ2z%2BI4PRV9FP34X3q1pnZt89927Bg%2FmQKv8DCBUQABoMNjM3NDIzMTgzODA1Igy2CKNV0AjBW%2BwriWgq3AOfT2yEuIBMlFr0p9azRXXXGRvE7iXK9G3TNLuOSmQW%2B6ZqywyZi8ywzho7Wbe1ESs2PU1Ky5oHeEEJ56GT3hR%2BkVFtfmslRnPZTlGVOrjONCpTSiUZrxj9fvxCb%2BePvq10jqv%2FoO14mAkaJirTmE4wwsZyZBzhbU3roFBpdjhgOY9TkBm6C9v90GSvyJpXzZtVavV6uhOim%2F6DZLeXKbf0kPosjzbbpCU7AyZrGol0JWIQief7tDjyNIUG3YXILbiM0Kalbkh335niKdTiq5bK7XaH%2BG0Qz6%2FVSLVIUrPEwtyCgl9E0wNFGOIeVG3zDEkye1g3fIv4OpmO%2BhHUd7VE6uN1KNDzrkXGincUAm6EP4cLC%2FqufVuBucaWXjwXJMq6E3VF6UW2xbUt0vEcrmlgNFdlDxc7KN9JZFbB2UFhAOtGln7wNJ2JijyV7oAEgdMKX1QSrf0%2BzMJeS6s6cQIqZlVPtacVRsZW7w57gJ9T0EIFIho5jCaxh332SiLHQLJnHWYCrc1Ki4myTTYvWFlLTDMzgPnubgVIicId4BCoLLqqZRM%2BAV30cMl%2F%2F%2FomHXo21X%2FXEKPTzQfVnbzmG%2FUJ4rzhnDej0RlULJWo653drtoXr6oywt9fp6hS4DCC1YK9BjqkAQa5hhsaQ9yTjtlJaCpfRTG4YFtHrLyyaNGxViMgqe5jB%2Bs%2BR7BMDV4lmK6F2MHs7ioHR0H3dx2XsP355LALkfV4eexwevgKK2QSfCChoOn7g0d7W4%2FLqTcWDP8ouGvCprDZa0qrz81nAD6uIw9c1%2B5sq8t99Sg68hRsqsAdGVVKZRzxWKQcUmFiAzXD1qLB1V4ddm%2FVDIl1ysKPzhqe13eF2N6z&X-Amz-Signature=3b7350b54c0eae7925f8afa2d50acd46aab07ad98a05d26cca6aa26c33dc86c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
