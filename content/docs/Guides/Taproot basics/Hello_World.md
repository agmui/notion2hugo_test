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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5EUOYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEE9t9t9ANa3Pi%2FYQFAwQ4VUdu%2B%2BDSECFtTXGqh%2Fc3ZwAiEAlHrfvZJNLksxGEVnZiY%2BNcLZXemOiJysE%2BYwPqu8oI4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHmR3JXnsK3ajQ868CrcA%2Fx52wfJZQxsqVaAgiOPhDchy00DEGNSy1NlGseQYLikRUpFGkx7XRfM%2F7O0LPPU5LsSflsxe2xlaJpVEjFF%2F8pJyy4DjlfuIW4vwsllDcN%2BkGr4rKTqsgm2AsR7AVCooutVIh52naCMm9JclnSvcYoI1oqdUc%2BPT%2BdL3PFO%2FIbQzrC3NpM0y0JP0csyNE5J4S43OSJIbV4qWiKFmDi8XRc0qIGoBqiJ3jpiJmHbepFLUzyOI2UIzVl1bByCFBSfJlleQAAtuIGBMyfq3JiBuG53ZYk5uN1T4KSsxgsIuEjnSh2fF9mlCzb2jxGGDv0dXlYCbvG2LBS77eb5xw8AkrVFsUJk3UScLBghmW%2BTEEB9UuAKhmrerRLCfRVOryH28Zyg6vJoCRSDbsOm2eGBGwYeB440MTterUYHA16LWEm5gTJXgVQ4HxdMAM9V99qzgeMvms%2BwdswESpm1cdOXfGqwgJ8rwF4a%2BJthY1eRfEzBSWXkXhGsNOX%2BncALHIxWZGoX5jZRXtMaK6vtCq3kOku7iYHn1IP02IAR7Y9c4qQDl3gM3s2qNUx0vu33fUK9Ja4o%2Ffs1hR6DkHkZqjsCyrIRY74J%2BqATkdpmr4Lb7be2oyKc8KfT2MQACiNmMJSfiL0GOqUBBnpoaE%2FKui2dXUdQwE52XdMghNKDc2%2BAkgQvPU6ZZ2Tld7rxIqsot1uAgpGsL6C4prilzwlLDRiI6hF5vnVqKHZFpuZFK7M%2B0M4YhpNRLg0JIr4tZDaWtXCGC%2FSg2Ff956WSGtz2XRYbMrtwFOa6xeCx6qg4NBYqxZ%2FRwB0xBjMiF4uno%2B%2Bchfc%2Bw5EwBDuabtoOwfksSvsri%2FW8RlM7C47FpeB4&X-Amz-Signature=9c5e0262ff912ecb13924e711845393c9613cd50b771ad21923b5fcaa8a7a9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5EUOYK%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIEE9t9t9ANa3Pi%2FYQFAwQ4VUdu%2B%2BDSECFtTXGqh%2Fc3ZwAiEAlHrfvZJNLksxGEVnZiY%2BNcLZXemOiJysE%2BYwPqu8oI4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHmR3JXnsK3ajQ868CrcA%2Fx52wfJZQxsqVaAgiOPhDchy00DEGNSy1NlGseQYLikRUpFGkx7XRfM%2F7O0LPPU5LsSflsxe2xlaJpVEjFF%2F8pJyy4DjlfuIW4vwsllDcN%2BkGr4rKTqsgm2AsR7AVCooutVIh52naCMm9JclnSvcYoI1oqdUc%2BPT%2BdL3PFO%2FIbQzrC3NpM0y0JP0csyNE5J4S43OSJIbV4qWiKFmDi8XRc0qIGoBqiJ3jpiJmHbepFLUzyOI2UIzVl1bByCFBSfJlleQAAtuIGBMyfq3JiBuG53ZYk5uN1T4KSsxgsIuEjnSh2fF9mlCzb2jxGGDv0dXlYCbvG2LBS77eb5xw8AkrVFsUJk3UScLBghmW%2BTEEB9UuAKhmrerRLCfRVOryH28Zyg6vJoCRSDbsOm2eGBGwYeB440MTterUYHA16LWEm5gTJXgVQ4HxdMAM9V99qzgeMvms%2BwdswESpm1cdOXfGqwgJ8rwF4a%2BJthY1eRfEzBSWXkXhGsNOX%2BncALHIxWZGoX5jZRXtMaK6vtCq3kOku7iYHn1IP02IAR7Y9c4qQDl3gM3s2qNUx0vu33fUK9Ja4o%2Ffs1hR6DkHkZqjsCyrIRY74J%2BqATkdpmr4Lb7be2oyKc8KfT2MQACiNmMJSfiL0GOqUBBnpoaE%2FKui2dXUdQwE52XdMghNKDc2%2BAkgQvPU6ZZ2Tld7rxIqsot1uAgpGsL6C4prilzwlLDRiI6hF5vnVqKHZFpuZFK7M%2B0M4YhpNRLg0JIr4tZDaWtXCGC%2FSg2Ff956WSGtz2XRYbMrtwFOa6xeCx6qg4NBYqxZ%2FRwB0xBjMiF4uno%2B%2Bchfc%2Bw5EwBDuabtoOwfksSvsri%2FW8RlM7C47FpeB4&X-Amz-Signature=2e605ecf0e00a2a0a89c3195f56129d6dc278334d574b242c47dc38f5e2fc834&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
