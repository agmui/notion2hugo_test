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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2IPK76%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO%2FXv0qQErPMv6q9Rih7TvRAMV2%2FQ%2FRkTYLtENUBjWSAiEAhfj%2Bs3h3wRyDROTxlLIiXoc%2FkRMlpIp%2FIaFYC7RTfc8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIpXBSKeUigzhgFYZyrcA7jHvN%2F%2FuJRtg8Ubwf3y9y39lItn9h05PK68vWCaJOZfs%2BlZDK8vStgFMg1rNI4XwsLppZWk31J8yjO3YEkj75EaViCNyCI%2BVKiQl5QtnYKwMDS0P4CjFIxWYAxJwEoW%2Bn3ZPSzXos9PP2fKgZGD18u5mT6xGYIV200dXL%2FDVt5MtTYndqRfRSHEnMFY1xw04cGWpTIV%2BMmhxrOvpORS%2FzyHSVm2aNKpFx7J9LKa1mLqGnfayphszYfjzgVQT6MjBML74oi%2FgPZIG61FDxkNEW4n7HIRn%2Fk9EkTEiEksDIHELLmvKxyX30WMtP1lnF5msc6BwVsRU17f5NcwxwwKzzJhFlAFalZbZavTMOEhN0iNWzQ1S2%2BMkLWWHC2YrDljSMcDJ3ItnEAD2jxuJbjxVC7M6Q%2B%2Bo4vAh7aYfHYGSEkHigPOf779lTaUBosbf%2BdsH2HkK6JsyAJSUnoxdXcD9TmQBBu5tfJm5Wi9Hqxv8xgfCbs%2Fa%2B63mdIzAqnkafg37vQS3REfL%2FD%2Fe5UmROoZzMwYvJQBgcoUd8fd%2BHYRfgWyzh6jkBM%2FaPdqL0plE2W7%2Bmct6sTIYpqsGkqjbAEEEg1USknbJ866zgMG2B%2FraxfkIg3b5naEDx0Ft8ujMKKcwL8GOqUBuY7Rcyd%2F3gw2724yoZseekNgd7J2YbrzLfvO%2BWpDizZcx%2BSOlxl9HU%2Bm4LFa91ujY0lhA4DHNtSimiYWaxmdeB0hXpr3lPARc6vJHn8qcPfXiP1H159BpydD3xPOnWPU1SI2vmEErGJArYDm%2BlzMVZHmpFlKf4dHNtscGUwwMd5Jg2RhJc9gTStjmEbSrVXoczTKlPAJypDGPCCAiLekPmVU%2FHkN&X-Amz-Signature=e6e4038e11c77d17f3df4fbc4c5a76d45a80d475b7e94d8e332fe8511e3c5595&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2IPK76%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO%2FXv0qQErPMv6q9Rih7TvRAMV2%2FQ%2FRkTYLtENUBjWSAiEAhfj%2Bs3h3wRyDROTxlLIiXoc%2FkRMlpIp%2FIaFYC7RTfc8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIpXBSKeUigzhgFYZyrcA7jHvN%2F%2FuJRtg8Ubwf3y9y39lItn9h05PK68vWCaJOZfs%2BlZDK8vStgFMg1rNI4XwsLppZWk31J8yjO3YEkj75EaViCNyCI%2BVKiQl5QtnYKwMDS0P4CjFIxWYAxJwEoW%2Bn3ZPSzXos9PP2fKgZGD18u5mT6xGYIV200dXL%2FDVt5MtTYndqRfRSHEnMFY1xw04cGWpTIV%2BMmhxrOvpORS%2FzyHSVm2aNKpFx7J9LKa1mLqGnfayphszYfjzgVQT6MjBML74oi%2FgPZIG61FDxkNEW4n7HIRn%2Fk9EkTEiEksDIHELLmvKxyX30WMtP1lnF5msc6BwVsRU17f5NcwxwwKzzJhFlAFalZbZavTMOEhN0iNWzQ1S2%2BMkLWWHC2YrDljSMcDJ3ItnEAD2jxuJbjxVC7M6Q%2B%2Bo4vAh7aYfHYGSEkHigPOf779lTaUBosbf%2BdsH2HkK6JsyAJSUnoxdXcD9TmQBBu5tfJm5Wi9Hqxv8xgfCbs%2Fa%2B63mdIzAqnkafg37vQS3REfL%2FD%2Fe5UmROoZzMwYvJQBgcoUd8fd%2BHYRfgWyzh6jkBM%2FaPdqL0plE2W7%2Bmct6sTIYpqsGkqjbAEEEg1USknbJ866zgMG2B%2FraxfkIg3b5naEDx0Ft8ujMKKcwL8GOqUBuY7Rcyd%2F3gw2724yoZseekNgd7J2YbrzLfvO%2BWpDizZcx%2BSOlxl9HU%2Bm4LFa91ujY0lhA4DHNtSimiYWaxmdeB0hXpr3lPARc6vJHn8qcPfXiP1H159BpydD3xPOnWPU1SI2vmEErGJArYDm%2BlzMVZHmpFlKf4dHNtscGUwwMd5Jg2RhJc9gTStjmEbSrVXoczTKlPAJypDGPCCAiLekPmVU%2FHkN&X-Amz-Signature=4019b0ea4a744271b70e0a6eca12f7cd20ddee714f300ff925403885d3ffaa51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
