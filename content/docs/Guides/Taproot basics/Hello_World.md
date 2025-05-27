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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCJMKND%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT61XYXQBLyPS%2FY0KRqi4eGLfw9TpZSA8B1XaI7kPyIAIgL8HPgBRJ1I1ccDTQBbrWDnmRrXaRFGs%2BpAAoX%2FfG6iEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBe0Z3CErgeOYfIwoCrcA29VkAmySCo0vl%2FOpLJjaOUsxc%2Fiv%2FTm8TLup8M2HR75anGZrtQnf6rLE1dEyNMJLbAzP%2F1obasNipTW%2FmFmTEapYqcdIY3gCM9s%2FRlJRIj6%2BoaHjhwAMlwJL4f%2FoleBWHDHQjvubVZ36RAlMcc6DFLTiMTs6kgMN0XRgZfmZMtImVpJSz62GLWW0LHqgX3rMnbhdO1BmM%2BHKoj%2FaclF5kG4gv5e99QeOC9ngSFGoT%2BZOtGEL6cuT%2F63zNPx8F4uSzCk0wVSPCbyQRx%2FfKUEMCj8IVGmlrgxNQFiv%2FqIquhl9sSqR2639B6h8Mm4yGVYRpber4bHkbHxL9zSuXnXvhyfshgd8Ro3%2BZ%2F4KkPU8U%2BvIk4m7WeQJ6bSUWxnd3WYaXnmaHNffgILiCbRXthd1vV35ePOxiivL7Ldpcrb%2BkHQHOQHwcRuBBGjukm94R4EjxTdCaGE7NEjmtGZ%2FnQzH6IdxOaBy2Q5YGEQMgsrY2hGVEvfFO3UUBwdillMsiJ%2F1Cdp8yAXFPAPsUQntiIfjeyzte5boQbWQZ7Bvyq%2BQE0rEmaaM%2BHuHVV%2BdDTNC4Hb%2BGXx8LDcVykZ2QMGgYqjcrgP%2BP4Ob%2FxUEI9TB90HDJDBfiX8115V7OVlj5ePMOzt1MEGOqUBpoTBuaVw9pu2Ir9Zg4K6STfGx1QeMuZ7hudKxIe0kfcwtKa7s34oP8Z%2Ft0dwGrGOhdFwo%2F6tyoPC4P7bh%2B%2BpBoszCf%2B4Ry2dk0V5s6apLdOIjcd3xy4nLlKs8Iot%2F%2Fs7ysSzSaOVuxkPeO%2FUuCJeCK%2FFLQXGmF0qbA0c7J7hm5p7blbNRxK7RUVce5vPsCzvfYwbqpR%2B%2Fh1Nw5cieTGGcqPUM3dv&X-Amz-Signature=9ead617e9e289f20db260f5d19e3a2ec3c6efb20a54bd71479784774e2be0c07&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCJMKND%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT61XYXQBLyPS%2FY0KRqi4eGLfw9TpZSA8B1XaI7kPyIAIgL8HPgBRJ1I1ccDTQBbrWDnmRrXaRFGs%2BpAAoX%2FfG6iEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBe0Z3CErgeOYfIwoCrcA29VkAmySCo0vl%2FOpLJjaOUsxc%2Fiv%2FTm8TLup8M2HR75anGZrtQnf6rLE1dEyNMJLbAzP%2F1obasNipTW%2FmFmTEapYqcdIY3gCM9s%2FRlJRIj6%2BoaHjhwAMlwJL4f%2FoleBWHDHQjvubVZ36RAlMcc6DFLTiMTs6kgMN0XRgZfmZMtImVpJSz62GLWW0LHqgX3rMnbhdO1BmM%2BHKoj%2FaclF5kG4gv5e99QeOC9ngSFGoT%2BZOtGEL6cuT%2F63zNPx8F4uSzCk0wVSPCbyQRx%2FfKUEMCj8IVGmlrgxNQFiv%2FqIquhl9sSqR2639B6h8Mm4yGVYRpber4bHkbHxL9zSuXnXvhyfshgd8Ro3%2BZ%2F4KkPU8U%2BvIk4m7WeQJ6bSUWxnd3WYaXnmaHNffgILiCbRXthd1vV35ePOxiivL7Ldpcrb%2BkHQHOQHwcRuBBGjukm94R4EjxTdCaGE7NEjmtGZ%2FnQzH6IdxOaBy2Q5YGEQMgsrY2hGVEvfFO3UUBwdillMsiJ%2F1Cdp8yAXFPAPsUQntiIfjeyzte5boQbWQZ7Bvyq%2BQE0rEmaaM%2BHuHVV%2BdDTNC4Hb%2BGXx8LDcVykZ2QMGgYqjcrgP%2BP4Ob%2FxUEI9TB90HDJDBfiX8115V7OVlj5ePMOzt1MEGOqUBpoTBuaVw9pu2Ir9Zg4K6STfGx1QeMuZ7hudKxIe0kfcwtKa7s34oP8Z%2Ft0dwGrGOhdFwo%2F6tyoPC4P7bh%2B%2BpBoszCf%2B4Ry2dk0V5s6apLdOIjcd3xy4nLlKs8Iot%2F%2Fs7ysSzSaOVuxkPeO%2FUuCJeCK%2FFLQXGmF0qbA0c7J7hm5p7blbNRxK7RUVce5vPsCzvfYwbqpR%2B%2Fh1Nw5cieTGGcqPUM3dv&X-Amz-Signature=3bad905f11d81e2920654c43a4202d96d587975dc54d8235d86ba34fa44c39da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
