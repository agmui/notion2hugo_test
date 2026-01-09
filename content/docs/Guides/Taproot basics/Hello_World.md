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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVGNSNM%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDveMoI30K9oDuM1sNDvUcXRMvPy205dsMkkcpsWHoi9gIhAJt3Pf86OQcMNkpQoTXukJVCEXsigg5yrruMF8WCtY7dKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhy6EvvZAEXg1Zty4q3APIXGqLBa4CDp7A3Zw8mnuBMFEnrQJFyKrD%2BZga3BCaZIrKcWbMb0aLuNpH3xGIMP3yXYXbY7mU7dyUIwCCXp944QUCgbM7ZaGSiIMxwLDFdbRMoR23CrFJwiKSwjs0zjcnKpI5E8Uy7KgbMxma849dgzaXbFOMRT0qzsPQWYntuQ2%2BACELdqN66G88YVHJgv6kjjem5t1HwKV485%2FdeDKMNWRY0N0kWOAt5EkKiAPyeeYdMIveD8dxPqcqblahAFhPSytz9nwLPduw%2Fb3MNF3uWracab94umvbZGHONy2rkBCUb8VjkWfCs5rSPiow7edCAa3Tl3tteW7eGwUiojQkOnh0qpMvx%2FQw8cmSw7wY00ItV%2Fkt75pBfHLhf93QiG2KP936QjFutKwWHlCuzWnRUlW7WNPUmBWufYElSrI3Xqi5k%2Fwgl6eMePnmxKWXWCpgZkpdHDgrN%2B%2Bk%2F3Uxa1DWASWSGE7iT8PYQev3mhubgINZlGwTgx%2FPHT2Wxuoh5Fn5RrZQAICg9VYPGLh68omdrJykUqFN46zywSHPR3kWKLt1hr9MoS5x7zef6nhRVFTdTEtuVMmJ0FbRlro4y8t%2Bd3MUsOplzZsnG3GSwYjA6HttRmy%2BOGjvrdXYXzChpIHLBjqkATjY4Auu323muMZF7e8lN0L%2FpZNpK8CVMtyCqtLGcK9X6Y4DYEaax%2BVLQL911b6bKAmcVzfZcjPTQ9hbXK0g%2FkMJ%2BR1QhcFIiyBf2LSZ4Jhyh6RriyOz6TolyK%2BpdR7gliXIotOByOBG8EZR%2BAEJpB89Y03QXyaadTk2Md0GVCeHCej036Odri1t%2BdCSR46rgXVJSgYOIMv%2FJru6rzdmZB3C9Wpo&X-Amz-Signature=509b3981eb917e9569ca2f7b536b6161fa72269b92b37a21cd032af26b4dded5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVGNSNM%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDveMoI30K9oDuM1sNDvUcXRMvPy205dsMkkcpsWHoi9gIhAJt3Pf86OQcMNkpQoTXukJVCEXsigg5yrruMF8WCtY7dKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhy6EvvZAEXg1Zty4q3APIXGqLBa4CDp7A3Zw8mnuBMFEnrQJFyKrD%2BZga3BCaZIrKcWbMb0aLuNpH3xGIMP3yXYXbY7mU7dyUIwCCXp944QUCgbM7ZaGSiIMxwLDFdbRMoR23CrFJwiKSwjs0zjcnKpI5E8Uy7KgbMxma849dgzaXbFOMRT0qzsPQWYntuQ2%2BACELdqN66G88YVHJgv6kjjem5t1HwKV485%2FdeDKMNWRY0N0kWOAt5EkKiAPyeeYdMIveD8dxPqcqblahAFhPSytz9nwLPduw%2Fb3MNF3uWracab94umvbZGHONy2rkBCUb8VjkWfCs5rSPiow7edCAa3Tl3tteW7eGwUiojQkOnh0qpMvx%2FQw8cmSw7wY00ItV%2Fkt75pBfHLhf93QiG2KP936QjFutKwWHlCuzWnRUlW7WNPUmBWufYElSrI3Xqi5k%2Fwgl6eMePnmxKWXWCpgZkpdHDgrN%2B%2Bk%2F3Uxa1DWASWSGE7iT8PYQev3mhubgINZlGwTgx%2FPHT2Wxuoh5Fn5RrZQAICg9VYPGLh68omdrJykUqFN46zywSHPR3kWKLt1hr9MoS5x7zef6nhRVFTdTEtuVMmJ0FbRlro4y8t%2Bd3MUsOplzZsnG3GSwYjA6HttRmy%2BOGjvrdXYXzChpIHLBjqkATjY4Auu323muMZF7e8lN0L%2FpZNpK8CVMtyCqtLGcK9X6Y4DYEaax%2BVLQL911b6bKAmcVzfZcjPTQ9hbXK0g%2FkMJ%2BR1QhcFIiyBf2LSZ4Jhyh6RriyOz6TolyK%2BpdR7gliXIotOByOBG8EZR%2BAEJpB89Y03QXyaadTk2Md0GVCeHCej036Odri1t%2BdCSR46rgXVJSgYOIMv%2FJru6rzdmZB3C9Wpo&X-Amz-Signature=b221db31aedfbd10200e53a1ad00527da5d1396264d09f1fbc820f2f9f05373d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
