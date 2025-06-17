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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPVZ5GL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP7CrZAC%2FIY%2F8Xjalf984coVIXyy28%2FNHdoFQ%2BLqzcAIhALzNc6zy1TsVMc7CaUBn3u56R%2B936VktpwzPCQhdODH3Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyHOCfZhIA5ZW7Fgt4q3AMa8AIPIlXWxoRdCepqXSQpJpiSr5rwcX2kIGlruuQe06RxBM%2BTao77kuK83By2PvfvPZ3%2BvLkYXRd9kvKUkw5CRgJB4xRrquJN%2Fi%2BxIizjQNMyY3Dy8hRp%2FxX06vmBNhlD91FwLZqneNDBQ%2BK1G1hxxETh5mbxMsBlz2sCm%2BmPcvVu%2BPeKbZuLn2OdaWy0U798iBX9mbtte0TFL2F0ISqhLA2sKPegpCXTLP1kHLQvaJV3IaI2gKyWtnXsQa%2FnjZcjLcr2nix3q8CHOiEG%2Fg6y4xur3JYG9bUXFrPpinPFMiH5T3UfgQZFBqgvjSC%2Bsc4yeVxPRauZeX0angkUqJgviVQJRZB6vlJxAMk9Qqd14DUPU3cQ%2BsRmJqbI3N9CBrncqFEYKWX3fHc1hmTBN8%2FlXjlIIq79r4%2Foa9kuDD69ABPWiyD2UPqJz6D0RO9kqRZXYskPrl%2BvrVAmScotGvP0CbmiZmkaFbB2SwqU5WxA7JXBcxf%2FkeYLNF%2FJVepN4ZoPj53gZBXFdg41S9ol8q%2BbZC16wRdmJ%2Fb%2FuE86ztY9b4NF7NKLlloUH0sFOAKpQ6MNmK74nx%2FtWPK9SU52UxmWTPm%2FfKT4UpU1w%2FL1KJa5LA3pyJe5s7NfZ3FvrDCq7sTCBjqkAWOkpBTLZHb654639tnLPxOrVpjMB1lMbE4ZLS9gKc%2BLsrn1IqPjXdpcfN7QL7O%2B9zAWpDN%2BCRkKW5VkjanWobMSsQ%2Bzt%2BrZ2wGMw%2FHEj6Na32PN6Dvrgx3JQnjcFMA6aaO1dbId10srz69NtCQCbnohlHK5NEVuI1BobCCLsbeiDqzo1vxW1bdfVgHEeeUJhu9oYOGkxA6TkzwiKL%2BgEVTEY6bu&X-Amz-Signature=c599a0817c0f7be943610e4ace6c43a762549806266477c7f8ff7dd0143612a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPVZ5GL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP7CrZAC%2FIY%2F8Xjalf984coVIXyy28%2FNHdoFQ%2BLqzcAIhALzNc6zy1TsVMc7CaUBn3u56R%2B936VktpwzPCQhdODH3Kv8DCHMQABoMNjM3NDIzMTgzODA1IgyHOCfZhIA5ZW7Fgt4q3AMa8AIPIlXWxoRdCepqXSQpJpiSr5rwcX2kIGlruuQe06RxBM%2BTao77kuK83By2PvfvPZ3%2BvLkYXRd9kvKUkw5CRgJB4xRrquJN%2Fi%2BxIizjQNMyY3Dy8hRp%2FxX06vmBNhlD91FwLZqneNDBQ%2BK1G1hxxETh5mbxMsBlz2sCm%2BmPcvVu%2BPeKbZuLn2OdaWy0U798iBX9mbtte0TFL2F0ISqhLA2sKPegpCXTLP1kHLQvaJV3IaI2gKyWtnXsQa%2FnjZcjLcr2nix3q8CHOiEG%2Fg6y4xur3JYG9bUXFrPpinPFMiH5T3UfgQZFBqgvjSC%2Bsc4yeVxPRauZeX0angkUqJgviVQJRZB6vlJxAMk9Qqd14DUPU3cQ%2BsRmJqbI3N9CBrncqFEYKWX3fHc1hmTBN8%2FlXjlIIq79r4%2Foa9kuDD69ABPWiyD2UPqJz6D0RO9kqRZXYskPrl%2BvrVAmScotGvP0CbmiZmkaFbB2SwqU5WxA7JXBcxf%2FkeYLNF%2FJVepN4ZoPj53gZBXFdg41S9ol8q%2BbZC16wRdmJ%2Fb%2FuE86ztY9b4NF7NKLlloUH0sFOAKpQ6MNmK74nx%2FtWPK9SU52UxmWTPm%2FfKT4UpU1w%2FL1KJa5LA3pyJe5s7NfZ3FvrDCq7sTCBjqkAWOkpBTLZHb654639tnLPxOrVpjMB1lMbE4ZLS9gKc%2BLsrn1IqPjXdpcfN7QL7O%2B9zAWpDN%2BCRkKW5VkjanWobMSsQ%2Bzt%2BrZ2wGMw%2FHEj6Na32PN6Dvrgx3JQnjcFMA6aaO1dbId10srz69NtCQCbnohlHK5NEVuI1BobCCLsbeiDqzo1vxW1bdfVgHEeeUJhu9oYOGkxA6TkzwiKL%2BgEVTEY6bu&X-Amz-Signature=c2323a17a2355a41c537cc52196d3355c9237499b0b49f868d4995e5fa606465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
