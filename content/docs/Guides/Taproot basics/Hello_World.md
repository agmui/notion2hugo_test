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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXJZDEJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe9FJJy%2B4UUhw%2BgiL57BZ9lMvqNHJvKI31cUC1HTBffAiEA3dnJEKQby6YVi%2BJSOhyOHnKh7K4VRXqJ2xmGkk8y1rQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxyQRzCssRbJQyoqCrcAw7GplQ4oPPNLT%2BXdnEZdYrCyHDSiY%2BmMos5mdQnVMWI0%2Bt7ZBOSV2%2BxEUVO1rA9hw803Z%2BA0882eqNdWfeZHPr0A89XlEPnkhwbWIagShulMKUa4EPe9DAjwnfIqfn2u%2FBC7q3VJWRwQef%2FQSyc%2FvT%2BwimQIYrBiCJ0UNKgQ7%2Buj5tA%2FEre9LEIxZKA2e61GN%2FosIu51LUEtamMS0M9tvAt4D4cjdArYyzbGQwJAxTSuybd5FkkiP8BDGkoiNFDHFa%2BtOowwGmcTBDxYOY34UE0mzjLrIyrcX7TaZIJX0UZRkg%2FmZHVEKKGhSlKG4A5wb4EqsakD%2FpSBhdsINzEabY04k3BmXWdzyv0uSy%2FQTUtQXnfPbFXoxgJLFp0e%2FDCvX8HFdPDDToO4%2Bv8lzsdAsGRJXDFzJWZclIi73VNXxxbQApdMZcxXm2SaGurEYu0LcNbNDuMRVa00FHIoQ5I55AbzDxp1vheKgFBgXTmtCwpmKwkniiNhHTkGikRgmma95tu9Ev%2F%2BrYVln0aMhPMkAzwc9%2FuTMwXNpZXAEWamGtF926sHJoBhnUBei5iUOgKhAC04LvkCixK9GvmpQaaH0sFgLuvcy7OpfwvFVjQ3LBkEhWW7KfkxnbIYODcMIXttsAGOqUBibgyruWTiqNyIznH%2FvcH9XtQg66u0%2FtPwis3hRiS7qPj7cDEaiCa%2FN4u248VyUasgAICjZ51mHPVoR3KPCLQaWkvZ%2Bs76EaTThkDJIiu3%2BGg%2FRqD0d7zUO4T0%2ByBSDX%2BN2fZDqFWeBd7YNZjDMi9IxKbA4w70lL293pCPmIhquGOFh1DixlPHRczb%2B%2BT%2Fwndn7%2B0%2B4BM4%2BpGpmlthNv1YilDEWWa&X-Amz-Signature=2e832e5b17b721e82b2c443a2c86ce8e92b8b3aa7c4b02e1bcd1fe14a2481005&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXJZDEJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe9FJJy%2B4UUhw%2BgiL57BZ9lMvqNHJvKI31cUC1HTBffAiEA3dnJEKQby6YVi%2BJSOhyOHnKh7K4VRXqJ2xmGkk8y1rQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxyQRzCssRbJQyoqCrcAw7GplQ4oPPNLT%2BXdnEZdYrCyHDSiY%2BmMos5mdQnVMWI0%2Bt7ZBOSV2%2BxEUVO1rA9hw803Z%2BA0882eqNdWfeZHPr0A89XlEPnkhwbWIagShulMKUa4EPe9DAjwnfIqfn2u%2FBC7q3VJWRwQef%2FQSyc%2FvT%2BwimQIYrBiCJ0UNKgQ7%2Buj5tA%2FEre9LEIxZKA2e61GN%2FosIu51LUEtamMS0M9tvAt4D4cjdArYyzbGQwJAxTSuybd5FkkiP8BDGkoiNFDHFa%2BtOowwGmcTBDxYOY34UE0mzjLrIyrcX7TaZIJX0UZRkg%2FmZHVEKKGhSlKG4A5wb4EqsakD%2FpSBhdsINzEabY04k3BmXWdzyv0uSy%2FQTUtQXnfPbFXoxgJLFp0e%2FDCvX8HFdPDDToO4%2Bv8lzsdAsGRJXDFzJWZclIi73VNXxxbQApdMZcxXm2SaGurEYu0LcNbNDuMRVa00FHIoQ5I55AbzDxp1vheKgFBgXTmtCwpmKwkniiNhHTkGikRgmma95tu9Ev%2F%2BrYVln0aMhPMkAzwc9%2FuTMwXNpZXAEWamGtF926sHJoBhnUBei5iUOgKhAC04LvkCixK9GvmpQaaH0sFgLuvcy7OpfwvFVjQ3LBkEhWW7KfkxnbIYODcMIXttsAGOqUBibgyruWTiqNyIznH%2FvcH9XtQg66u0%2FtPwis3hRiS7qPj7cDEaiCa%2FN4u248VyUasgAICjZ51mHPVoR3KPCLQaWkvZ%2Bs76EaTThkDJIiu3%2BGg%2FRqD0d7zUO4T0%2ByBSDX%2BN2fZDqFWeBd7YNZjDMi9IxKbA4w70lL293pCPmIhquGOFh1DixlPHRczb%2B%2BT%2Fwndn7%2B0%2B4BM4%2BpGpmlthNv1YilDEWWa&X-Amz-Signature=ec9fce876cddac5c4769e563b354fa3868cd99626836a5cbd8f0f8a851821156&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
