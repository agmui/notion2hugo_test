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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBF3MDW4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICV6w%2B32LULAeguGhVEAWv3odiUKGkRhybuex%2Fvo%2FrPHAiEA%2BgbhN9AgitKmcQ1araE6wiVUEWKIhDvz%2FpGLkcDUppsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJa3l9XaE4adKOzBuircA%2FtlvRk9CmH3B0BtViXnw8iq97Tf4TjQOQc%2Bvcb%2BYovYRFOVsG66HRjobeU8C5%2BAgdm%2FHCyp4PqTJU2Xr6LoVUAwA1qdjNAH30B%2FjTNb4GtyT71j4blPVNgzygfirIAvwDpdurKNzVnkNOI77RrG6cm%2FIiKHK8eGkzLSyey2pfczPuY8UiBEMQJJyjYMm7Oj5g%2BH80pPBV6wzj5Hh8E82S3YONIbnXx3Y8BFgNdQDYJAaJODSPVgcmXbLKvtxFS9ioIslhBzBYN9qnKjnqV9JBzNC0dNZW7EwDSsEvu1acuB8MaZ9055xwjOPB%2FO%2FBIePp4DOaBY8qx8oS6fdjQMaCkF2sGqo1NAq5opBUdEnmpG0xRbpZOMpi9tdwDGmyRdEzhgls05JHNTHyDrBW73Uvw%2BRa3Ly35VsUY2fqQ7FqPp%2BctSz%2BbkIXcGKyJC6tC1EhdT2kWPKXEKFt1MmGv88EhkkbA4%2BVkXKWZV3Tl4%2BNr14NxFEV3xQWD8veXNk69CuPjOKVsij04oen81YruJnDN7ttrBv2mkuuPE8e%2Bzd507Cy%2BQXDUecRW9%2FfGN%2BElri2ALL9Hp8bYvauRYlyiGEWyZQDrzIJh4c2Wzod52lakpSTGygDa2xVlx6RLiMMOf%2Fr0GOqUBAQv2jzIj3o0hkUYcBhKWPf5bczJnpygaNmdHrUs2tE5X4%2FEWsuOpQxK7Jq4nmJIy2RusINCmkvvgcTH%2BOZi%2BYadVNIA2BfAW9KMda8xYgNMAEQN06BeKMoOkBtfiumX2W3PPv7BPEo2URdb0lFiN%2F7Xu9M%2BchEdqFs2LUA3My76JeF4MHZq4tRgDG%2FYZu0s4LNCLChDt81iWdMNV%2BNGkuKerRyD6&X-Amz-Signature=894a90b03f6605474636c1ee01bb97ab11c1aa7e8ce02bf4e9dd2111813cc212&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBF3MDW4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICV6w%2B32LULAeguGhVEAWv3odiUKGkRhybuex%2Fvo%2FrPHAiEA%2BgbhN9AgitKmcQ1araE6wiVUEWKIhDvz%2FpGLkcDUppsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJa3l9XaE4adKOzBuircA%2FtlvRk9CmH3B0BtViXnw8iq97Tf4TjQOQc%2Bvcb%2BYovYRFOVsG66HRjobeU8C5%2BAgdm%2FHCyp4PqTJU2Xr6LoVUAwA1qdjNAH30B%2FjTNb4GtyT71j4blPVNgzygfirIAvwDpdurKNzVnkNOI77RrG6cm%2FIiKHK8eGkzLSyey2pfczPuY8UiBEMQJJyjYMm7Oj5g%2BH80pPBV6wzj5Hh8E82S3YONIbnXx3Y8BFgNdQDYJAaJODSPVgcmXbLKvtxFS9ioIslhBzBYN9qnKjnqV9JBzNC0dNZW7EwDSsEvu1acuB8MaZ9055xwjOPB%2FO%2FBIePp4DOaBY8qx8oS6fdjQMaCkF2sGqo1NAq5opBUdEnmpG0xRbpZOMpi9tdwDGmyRdEzhgls05JHNTHyDrBW73Uvw%2BRa3Ly35VsUY2fqQ7FqPp%2BctSz%2BbkIXcGKyJC6tC1EhdT2kWPKXEKFt1MmGv88EhkkbA4%2BVkXKWZV3Tl4%2BNr14NxFEV3xQWD8veXNk69CuPjOKVsij04oen81YruJnDN7ttrBv2mkuuPE8e%2Bzd507Cy%2BQXDUecRW9%2FfGN%2BElri2ALL9Hp8bYvauRYlyiGEWyZQDrzIJh4c2Wzod52lakpSTGygDa2xVlx6RLiMMOf%2Fr0GOqUBAQv2jzIj3o0hkUYcBhKWPf5bczJnpygaNmdHrUs2tE5X4%2FEWsuOpQxK7Jq4nmJIy2RusINCmkvvgcTH%2BOZi%2BYadVNIA2BfAW9KMda8xYgNMAEQN06BeKMoOkBtfiumX2W3PPv7BPEo2URdb0lFiN%2F7Xu9M%2BchEdqFs2LUA3My76JeF4MHZq4tRgDG%2FYZu0s4LNCLChDt81iWdMNV%2BNGkuKerRyD6&X-Amz-Signature=959edcce88c9d4068660d75330d77e3710aa1c9e1c2d1f2e390ec57db0f83001&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
