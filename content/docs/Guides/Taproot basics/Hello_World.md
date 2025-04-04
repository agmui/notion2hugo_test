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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUPWS3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXhLDOHui3QWyrNZR3PnJPR%2B9DqI3Geg0QsQxp%2ByaLBAIgePijjvrY7UPGQOKy8Wy9geWM0wd9SyIv1iexmw%2BgRCYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKFwqShc7Aq6%2BlBtMCrcA2tlX6YH7mqeGcS4d7Qq%2FOUN6wzLskOI6zwK9gW4gwaluS2i%2FuUqpThjfF%2BF2k0H6Xx%2FDw%2BoK4i4o4Vk8FhbnaUl7W0PMaEydFOwfcUBNMcbAqdKZv1lyBwNs%2B6UET%2B4B9nHxT3z37xF0ZlU107PBzFOI8pLvQ9PgmfEmMI%2B4ihJoVg%2FwOOU8munpvalfm97u31kaJnALCeZ%2FuXifyDixrefusxS0Xmcbi%2B35xF79B5PMKn7BsxIoo1HYK2a6By%2Fs3QVPnBK9GgvyzpzGXu3gBUts%2BdGGIf92s%2B9gzt9OTSie%2ByM1JVuKza5vPIec8FBUbTQFZky0ACL%2BYWXoY6YYpvZ6LL3Vue1s4TcJXMWUUHjv4uFnG%2F%2FQUeOicBL4hGrGQohSnLHGmo1FXN8bIGTPLRS6SQIFIE3TsVipq2m4jl7PerfUQjyg90tDFnwuKFzxLrtAeTRq%2B9BXuJQeI93w%2BlpiD6drC8y00ZwESJLPHF7%2Bh2TgWNbjQactbeTjhBzQLIoI6dMsPpZNRKShiKO1Idm27ndYRXONKKIMHoRi4dDphhpYooGpUskoneVINHwqNc9ihIRME1pMxakFVmt%2B810GtcpZDlJhUHlBODTUshb3kFihdNRVWPS0zYPMLmXv78GOqUBuAP1NfK%2B4DHkAfAHJChCDAdo%2BcbfLDBOo1hVz0MU6QQGxxlKnVa9THjWloR1P16A3rB8qj7ZPboEMGsa8zM6aMsCXliW2iS%2BNPMAHWtKUoe3CpEr4PHLP4fhXWy5eGXIxX3GTy2IbcL19ZH4mgwYWdFXq5uBOn7yjLDPpspnMFWNExIBjaiM6dHivzDfCafpvaI%2BCJSJn%2FcQCzMuKkkBmdoFeKjR&X-Amz-Signature=7c965d25597b871a60414409161e58ebff8952e8af06c319bbb4f8d6df08a275&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUPWS3I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXhLDOHui3QWyrNZR3PnJPR%2B9DqI3Geg0QsQxp%2ByaLBAIgePijjvrY7UPGQOKy8Wy9geWM0wd9SyIv1iexmw%2BgRCYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKFwqShc7Aq6%2BlBtMCrcA2tlX6YH7mqeGcS4d7Qq%2FOUN6wzLskOI6zwK9gW4gwaluS2i%2FuUqpThjfF%2BF2k0H6Xx%2FDw%2BoK4i4o4Vk8FhbnaUl7W0PMaEydFOwfcUBNMcbAqdKZv1lyBwNs%2B6UET%2B4B9nHxT3z37xF0ZlU107PBzFOI8pLvQ9PgmfEmMI%2B4ihJoVg%2FwOOU8munpvalfm97u31kaJnALCeZ%2FuXifyDixrefusxS0Xmcbi%2B35xF79B5PMKn7BsxIoo1HYK2a6By%2Fs3QVPnBK9GgvyzpzGXu3gBUts%2BdGGIf92s%2B9gzt9OTSie%2ByM1JVuKza5vPIec8FBUbTQFZky0ACL%2BYWXoY6YYpvZ6LL3Vue1s4TcJXMWUUHjv4uFnG%2F%2FQUeOicBL4hGrGQohSnLHGmo1FXN8bIGTPLRS6SQIFIE3TsVipq2m4jl7PerfUQjyg90tDFnwuKFzxLrtAeTRq%2B9BXuJQeI93w%2BlpiD6drC8y00ZwESJLPHF7%2Bh2TgWNbjQactbeTjhBzQLIoI6dMsPpZNRKShiKO1Idm27ndYRXONKKIMHoRi4dDphhpYooGpUskoneVINHwqNc9ihIRME1pMxakFVmt%2B810GtcpZDlJhUHlBODTUshb3kFihdNRVWPS0zYPMLmXv78GOqUBuAP1NfK%2B4DHkAfAHJChCDAdo%2BcbfLDBOo1hVz0MU6QQGxxlKnVa9THjWloR1P16A3rB8qj7ZPboEMGsa8zM6aMsCXliW2iS%2BNPMAHWtKUoe3CpEr4PHLP4fhXWy5eGXIxX3GTy2IbcL19ZH4mgwYWdFXq5uBOn7yjLDPpspnMFWNExIBjaiM6dHivzDfCafpvaI%2BCJSJn%2FcQCzMuKkkBmdoFeKjR&X-Amz-Signature=d7cf9eb2a8553d56af8cfc9cf62fbcbd7ff9a71bbefa3ca7edbf6579755f6aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
