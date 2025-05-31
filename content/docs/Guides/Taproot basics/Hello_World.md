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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUT257LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4z2kZhAqCi5%2BLWIQXD%2BEBAtDq3oJR2CwZCk3m%2BdJHJAiBzz0wVK4D4dV6fnDsXy35qFXWlL8fYkcor5A2jUr%2FsAyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Q3YZMyPfvwlYpUyKtwDvsg65ZyO7F9R%2FnHLfOhIRIkofGRTUtE3r5hWFaoL7NpaCcPZINAkzej9EXtDBf31%2BUak4b%2B%2ByHUoJsWOZ%2B0BdkLndpgJ0KZudD4oKMGwA3uaGx95OxqD8mH4DbYCXbe4TnVk8oeuyElX7qCDIxHqOfaEBhAWAk1lIZFhvo4PUiEYL0FBzM0s%2FOsnBiOwmqZue5yS9ts095qbzIHe6kspWRXR%2BL4gWCiNbdd0mfdVmVg3NPgDWjRyKvcSWLFCbpn6RAf7B8StD%2B%2BZwpd%2Bhr2DKRKsJ1W6OLVnFO4nbPluQaecRFxhDU3monsntMb7JSjOZuZC5BwZY1TNr2TCmlMtN0oVzespGDu91GfD4ipT%2FThgi8uk%2BUzF%2B78KIuZcJXALWeRT36XhRWZndKywUHIiGu%2BxjF%2B8HyryiuZJsxc5zsCSGImmQQ%2B1LQ%2Fnyw92ubL%2B2shXshyn1wXQATUd0QfYA43np5HOq%2BXtLGcGB5yFYPzwSnLq9PWNth0Nl%2FNx9JmQGQDem6rPAV5FzmYzQbviSh1Yzzc6tCJo6sVp54Nyf3bgxnqvWoOY0nmx4k1l%2FIr17HutMNsW%2FSLEtKKFlIeL6SmkGV%2FP1KBtwGpKv1POxXD28%2FrBBLLJOMpDEMMwmuXpwQY6pgEXejsvlrPqp9Doh7Oga9ivHRfdgxZ1%2BczOs50qLytY4axN9kMV94W7ICm68x7TpfrgS%2BCyhwcM6BRqURbZAvOh063uB%2FkuuDS1FVdyx2SxkqQBbnkfe8PR9Nw5hVAbGMrkkbte6%2BuT4FY1%2BuFC5Gwr66WM0NY%2BYCI88RU3x3HSEkkEwP0CcY6x2j%2BRnygh5koD8Fu%2BR49NJFJvHygjuXs8OC0SwWyG&X-Amz-Signature=f5b1c3965108476febbe81a98d139a940046d459b651e83a0da632749902b6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUT257LY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4z2kZhAqCi5%2BLWIQXD%2BEBAtDq3oJR2CwZCk3m%2BdJHJAiBzz0wVK4D4dV6fnDsXy35qFXWlL8fYkcor5A2jUr%2FsAyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Q3YZMyPfvwlYpUyKtwDvsg65ZyO7F9R%2FnHLfOhIRIkofGRTUtE3r5hWFaoL7NpaCcPZINAkzej9EXtDBf31%2BUak4b%2B%2ByHUoJsWOZ%2B0BdkLndpgJ0KZudD4oKMGwA3uaGx95OxqD8mH4DbYCXbe4TnVk8oeuyElX7qCDIxHqOfaEBhAWAk1lIZFhvo4PUiEYL0FBzM0s%2FOsnBiOwmqZue5yS9ts095qbzIHe6kspWRXR%2BL4gWCiNbdd0mfdVmVg3NPgDWjRyKvcSWLFCbpn6RAf7B8StD%2B%2BZwpd%2Bhr2DKRKsJ1W6OLVnFO4nbPluQaecRFxhDU3monsntMb7JSjOZuZC5BwZY1TNr2TCmlMtN0oVzespGDu91GfD4ipT%2FThgi8uk%2BUzF%2B78KIuZcJXALWeRT36XhRWZndKywUHIiGu%2BxjF%2B8HyryiuZJsxc5zsCSGImmQQ%2B1LQ%2Fnyw92ubL%2B2shXshyn1wXQATUd0QfYA43np5HOq%2BXtLGcGB5yFYPzwSnLq9PWNth0Nl%2FNx9JmQGQDem6rPAV5FzmYzQbviSh1Yzzc6tCJo6sVp54Nyf3bgxnqvWoOY0nmx4k1l%2FIr17HutMNsW%2FSLEtKKFlIeL6SmkGV%2FP1KBtwGpKv1POxXD28%2FrBBLLJOMpDEMMwmuXpwQY6pgEXejsvlrPqp9Doh7Oga9ivHRfdgxZ1%2BczOs50qLytY4axN9kMV94W7ICm68x7TpfrgS%2BCyhwcM6BRqURbZAvOh063uB%2FkuuDS1FVdyx2SxkqQBbnkfe8PR9Nw5hVAbGMrkkbte6%2BuT4FY1%2BuFC5Gwr66WM0NY%2BYCI88RU3x3HSEkkEwP0CcY6x2j%2BRnygh5koD8Fu%2BR49NJFJvHygjuXs8OC0SwWyG&X-Amz-Signature=a048f89f53cd64fd351e071d239023a388000b95e547c7468ef971ba229ee59e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
