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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637POQGIJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hbXP4sfbI1eBYo0Ax6od3C%2BZ6q8vKieJrXAICPsJPgIgOVh35cn6XG6fITpYdqZNTkmceMQ51cx2VwGUs1f7mXsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0hQ0fLc%2F5goq8ufyrcA3rd%2BrR49ORxRGgAZKRh1WmdigqJrkxquQ%2FWuBF%2BGKVLTUTAJk52WXBNanOV4fwjEvnCITOSYmBmJOQuUbIdTWcfYNBmoTIyEIj5AASftrAZsunAYoxrVqKqg7UkApiLFdiTNcnHLkKkGp4sEzOEUKmPsiphumKVne7H9PTafzSvOS%2FGeuTnPE3E6oCYxpABfV3b9ijV97CLYSTv9a4mzJyAjb3xrFaZurtQDWUmhZADWMNwR2XHs2Kw3cGscp9lZpVl%2B6dxzwlexmWrwo94cxz82noHizEMIl2%2B9sF9e23EBQL8Tt0kN7qZAYnwS8KAHV4X9C0H82P9cFDOk4Ns1wtiX3bfyMtAzSEHv1C4g73i%2FY%2BSu8kcD3yFiKXzeMK3mx4cbJjRd9zghIaZ1eI7Fm42d9ginWcId8G8luWT8iWizZYTt2fXqVOC1%2BlCh2oDZ%2Ftqr2%2Bby%2F%2FdELPTbJ43wwKTNZAbwi27BHE0TRZUAtKfrRBM%2FIQbGT%2F%2B3u1E7jbu8MpC8AUPjq7rCeWMD3GaACy%2FNpOHeVThAYfofbwKiVPnQz8lHkGfu9ncin7UHVbIkws%2BrNHZJx1xzx11FgK3%2FxoAJo1zLhrM2c5xASW6Wa9zo3oexs40pbqjH7AeMNay38QGOqUBh80X6g4NXMkgUSjsL7W%2B0MScUTTEQyhyP8Oo%2BjIfxY8vaQjIrPMn7ao9Q%2BoQnfY8WP5Hgudw%2Fr56nCqf4IH4SLFE1wEsIwoy6WETL4dWzyW4Z%2B6ipSPV6viCuUgwx833yFyW%2Fkscme1pCPvZlWK7dr1ZVu2Y7iiQmNQ%2FB7K7QlWgyRHRAaXJJ%2FlpJeq43KW2D341L088Ytx%2FD5jsNbdEp4X224jB&X-Amz-Signature=74af61f27056c04ed3b71c5921884ee4d8930cb53d05af26f10e62fcab9c6857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637POQGIJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hbXP4sfbI1eBYo0Ax6od3C%2BZ6q8vKieJrXAICPsJPgIgOVh35cn6XG6fITpYdqZNTkmceMQ51cx2VwGUs1f7mXsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0hQ0fLc%2F5goq8ufyrcA3rd%2BrR49ORxRGgAZKRh1WmdigqJrkxquQ%2FWuBF%2BGKVLTUTAJk52WXBNanOV4fwjEvnCITOSYmBmJOQuUbIdTWcfYNBmoTIyEIj5AASftrAZsunAYoxrVqKqg7UkApiLFdiTNcnHLkKkGp4sEzOEUKmPsiphumKVne7H9PTafzSvOS%2FGeuTnPE3E6oCYxpABfV3b9ijV97CLYSTv9a4mzJyAjb3xrFaZurtQDWUmhZADWMNwR2XHs2Kw3cGscp9lZpVl%2B6dxzwlexmWrwo94cxz82noHizEMIl2%2B9sF9e23EBQL8Tt0kN7qZAYnwS8KAHV4X9C0H82P9cFDOk4Ns1wtiX3bfyMtAzSEHv1C4g73i%2FY%2BSu8kcD3yFiKXzeMK3mx4cbJjRd9zghIaZ1eI7Fm42d9ginWcId8G8luWT8iWizZYTt2fXqVOC1%2BlCh2oDZ%2Ftqr2%2Bby%2F%2FdELPTbJ43wwKTNZAbwi27BHE0TRZUAtKfrRBM%2FIQbGT%2F%2B3u1E7jbu8MpC8AUPjq7rCeWMD3GaACy%2FNpOHeVThAYfofbwKiVPnQz8lHkGfu9ncin7UHVbIkws%2BrNHZJx1xzx11FgK3%2FxoAJo1zLhrM2c5xASW6Wa9zo3oexs40pbqjH7AeMNay38QGOqUBh80X6g4NXMkgUSjsL7W%2B0MScUTTEQyhyP8Oo%2BjIfxY8vaQjIrPMn7ao9Q%2BoQnfY8WP5Hgudw%2Fr56nCqf4IH4SLFE1wEsIwoy6WETL4dWzyW4Z%2B6ipSPV6viCuUgwx833yFyW%2Fkscme1pCPvZlWK7dr1ZVu2Y7iiQmNQ%2FB7K7QlWgyRHRAaXJJ%2FlpJeq43KW2D341L088Ytx%2FD5jsNbdEp4X224jB&X-Amz-Signature=0a990822635b12c1469a49e77b11c76fc56f737c0a918086f1c6486ef746d2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
