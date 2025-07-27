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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2URFACA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEHGlySY83J8Cj3pbxOQnUGUF9y%2F%2BlfQzFosZEbceLTSAiEAjQrL6FYndjH2H%2BxjZPdejp01rOW22KsGv6WwlK0UwMMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAAb1MrQ5BsQNyFzaCrcA8degaFtuSOy7QfVfeUpaUVweKJ804TatI5zZFYrVk4%2BADEvE5%2FE6i49cOIxs0mTL4zO1Bqrxu1VmEHhTsGQmjutywBJFyXJ5gjOx8gsOX508GN7cE3e73OlME6pj3VDuVv8mdMT3yZDcRRqL8Up%2BAjsEWKaqdhqE63JK5wjnpPB1N7eWwnxh085bEaad818hgqG1jTwBepduJ7cgAMSaWQcK7CfVVCda5v3YxaI5r%2FSshC001UP3DzGdaqh3%2FAwaoRvClT16SsvM00114s2VXJbSIHalR7Af%2F1Dd%2FoyX8oXuxWIVgox7pOigqdzRNH141CjnvDS5atB7Q80%2F%2BGKJYxH6DCQb4YLswUIgcSoGWSHQVX86yGALZCdkbwA39ZN3zg43lBVdV%2FDLkrsgQBPkERE3IjDFxikjpqJBDmtck%2B78s34Hu5RbDGdLVWUYJNPW2eg74sWZnaPSLMl1bJ%2BKt5ey%2Bkr8Rl%2FDWe5Cc8L7t6Tk5qTxmPG9S8jERemclwJWT%2FoDWnN04RC2ap7BCD9j0wZ2PpqFn4K%2FRRWv2p7k6xkQhp37HZPGE9PklJt15uG1Vw7g29FGLdbAb%2BFcqiYwyCe24zVoLuibP%2BcrHcpbtMIfYRopRyjzi18EOygMNekmsQGOqUBXtm7HYICWJUdUKo2wWGYeF8Y3vvtcm3LET8k8TEkxzHUgbwdAIuD9RvEpEfMSd%2Bg%2FbkOYM7eNSBBfUbn3%2BTMRl1vZ7R%2BMWTh8y4Kwi3METd8Z0dH4pVwdEMj9cCZtF1F4qnUe%2FFFynVHsRfJ0h8ZJSzotllNtpKsEt81gzuYl7da246XMagsASFh1%2BRF71F710gkPLriPRc8RnT5NZcWO4j6yDMU&X-Amz-Signature=d05bd587b533b52f4cf4b42a1b0ebeb092ea17a1844ea09f38c6f0fc92868d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2URFACA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEHGlySY83J8Cj3pbxOQnUGUF9y%2F%2BlfQzFosZEbceLTSAiEAjQrL6FYndjH2H%2BxjZPdejp01rOW22KsGv6WwlK0UwMMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAAb1MrQ5BsQNyFzaCrcA8degaFtuSOy7QfVfeUpaUVweKJ804TatI5zZFYrVk4%2BADEvE5%2FE6i49cOIxs0mTL4zO1Bqrxu1VmEHhTsGQmjutywBJFyXJ5gjOx8gsOX508GN7cE3e73OlME6pj3VDuVv8mdMT3yZDcRRqL8Up%2BAjsEWKaqdhqE63JK5wjnpPB1N7eWwnxh085bEaad818hgqG1jTwBepduJ7cgAMSaWQcK7CfVVCda5v3YxaI5r%2FSshC001UP3DzGdaqh3%2FAwaoRvClT16SsvM00114s2VXJbSIHalR7Af%2F1Dd%2FoyX8oXuxWIVgox7pOigqdzRNH141CjnvDS5atB7Q80%2F%2BGKJYxH6DCQb4YLswUIgcSoGWSHQVX86yGALZCdkbwA39ZN3zg43lBVdV%2FDLkrsgQBPkERE3IjDFxikjpqJBDmtck%2B78s34Hu5RbDGdLVWUYJNPW2eg74sWZnaPSLMl1bJ%2BKt5ey%2Bkr8Rl%2FDWe5Cc8L7t6Tk5qTxmPG9S8jERemclwJWT%2FoDWnN04RC2ap7BCD9j0wZ2PpqFn4K%2FRRWv2p7k6xkQhp37HZPGE9PklJt15uG1Vw7g29FGLdbAb%2BFcqiYwyCe24zVoLuibP%2BcrHcpbtMIfYRopRyjzi18EOygMNekmsQGOqUBXtm7HYICWJUdUKo2wWGYeF8Y3vvtcm3LET8k8TEkxzHUgbwdAIuD9RvEpEfMSd%2Bg%2FbkOYM7eNSBBfUbn3%2BTMRl1vZ7R%2BMWTh8y4Kwi3METd8Z0dH4pVwdEMj9cCZtF1F4qnUe%2FFFynVHsRfJ0h8ZJSzotllNtpKsEt81gzuYl7da246XMagsASFh1%2BRF71F710gkPLriPRc8RnT5NZcWO4j6yDMU&X-Amz-Signature=1b671c6ee707c0414d0c96f79e925668e596e5596e7204f24e38ba6265bac539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
