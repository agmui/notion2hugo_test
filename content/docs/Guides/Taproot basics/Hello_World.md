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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLS2OLR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7rejUXD54DrwChaVupk%2BTZzp2pk%2BV56%2BrEVT3g4sNtQIhALSozKwSkyIlwN8HJBohztKgjMXZiUrEpSMm9zCoi6HXKv8DCDAQABoMNjM3NDIzMTgzODA1IgxXXk8JkGI0xLaSEjsq3AOT%2FhFVR%2Fqu2%2BqGt0hOwd2z2iza4O%2F64ZlurFzjTb77EGywGFf2jn05FlILmgg9X9kDIjQwawI7is3BLe9TXAcOplWrn%2FTO9EUT8KCSaYfsnIX1h6JlgawO8K3CMx6KS3eQ66xsVWa2KV5qokZYT6sO0SGXFTdSBoV0UCvE%2Byb7H9SBo%2FIM0q7rjSGuQKqdLs0iC2JD91npbxrqKmsii%2BdRt7iEz%2FfFJDSQ33yWEUzAvB2aqNZRhjsGTxW2CHScajl2ke7ycn8826hT3oYDChJcIBYAJOzsIk%2FFdva1oQV1zQK2YR5WCTHEZWnXcTaLcbXIcP%2FjCTX%2FZZV3WygWhf7p2CDgWlcXEAzfI8TZkQxECQHFtqBGrOIvQCAL7folR%2BNqIPdueG%2BqMYZzbjQC5TBd1%2FShjcNwL9AmbnZNPEOgrjphoHtC8a%2FT2jY%2BMpB9BG%2FZHnxSEJA%2Bf%2B99BvW9zwdhqgJMjmHfeXxcLINZPbxYmF4GeKnhZ1abRLsdJ8GERPc%2BiP8C0RDBQ9MeuKQ0t9cjrPsjCxH7gusr04qFu7nk0j2X%2FvWlWqsoKszGd%2Bw8T4i9sbqp%2FTUlIXVjCCn1RbCQZ0NReWa0CjAcmk3hZKyQ%2B%2Bzh71IJmOoJuF%2FPojCwnfK9BjqkAaRFUIGIgpzNZ5wUhWGka1rrrPswWgeZL01mviQ%2FWLV79EU4eVqmLLTKgxfNNHm9GUZCUn%2BiVgpxDEAz%2Bv3jNHR42oozcHC7WytR44IIyo1ULXVpnCW97sveYnBkaIzgjyzUpHBOD9aFpIebLrd%2BlRjvALmC5owDm5YtnXF6EPPETZXyBleKvuQXvtLuSxiN9lMPw2CLaVj49k6zotPDl8ckXun%2B&X-Amz-Signature=fd9da8665c1759c8d13e2fc9a0e2147e1db0b8f887f8d7283bd6b99b0d301d09&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLS2OLR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7rejUXD54DrwChaVupk%2BTZzp2pk%2BV56%2BrEVT3g4sNtQIhALSozKwSkyIlwN8HJBohztKgjMXZiUrEpSMm9zCoi6HXKv8DCDAQABoMNjM3NDIzMTgzODA1IgxXXk8JkGI0xLaSEjsq3AOT%2FhFVR%2Fqu2%2BqGt0hOwd2z2iza4O%2F64ZlurFzjTb77EGywGFf2jn05FlILmgg9X9kDIjQwawI7is3BLe9TXAcOplWrn%2FTO9EUT8KCSaYfsnIX1h6JlgawO8K3CMx6KS3eQ66xsVWa2KV5qokZYT6sO0SGXFTdSBoV0UCvE%2Byb7H9SBo%2FIM0q7rjSGuQKqdLs0iC2JD91npbxrqKmsii%2BdRt7iEz%2FfFJDSQ33yWEUzAvB2aqNZRhjsGTxW2CHScajl2ke7ycn8826hT3oYDChJcIBYAJOzsIk%2FFdva1oQV1zQK2YR5WCTHEZWnXcTaLcbXIcP%2FjCTX%2FZZV3WygWhf7p2CDgWlcXEAzfI8TZkQxECQHFtqBGrOIvQCAL7folR%2BNqIPdueG%2BqMYZzbjQC5TBd1%2FShjcNwL9AmbnZNPEOgrjphoHtC8a%2FT2jY%2BMpB9BG%2FZHnxSEJA%2Bf%2B99BvW9zwdhqgJMjmHfeXxcLINZPbxYmF4GeKnhZ1abRLsdJ8GERPc%2BiP8C0RDBQ9MeuKQ0t9cjrPsjCxH7gusr04qFu7nk0j2X%2FvWlWqsoKszGd%2Bw8T4i9sbqp%2FTUlIXVjCCn1RbCQZ0NReWa0CjAcmk3hZKyQ%2B%2Bzh71IJmOoJuF%2FPojCwnfK9BjqkAaRFUIGIgpzNZ5wUhWGka1rrrPswWgeZL01mviQ%2FWLV79EU4eVqmLLTKgxfNNHm9GUZCUn%2BiVgpxDEAz%2Bv3jNHR42oozcHC7WytR44IIyo1ULXVpnCW97sveYnBkaIzgjyzUpHBOD9aFpIebLrd%2BlRjvALmC5owDm5YtnXF6EPPETZXyBleKvuQXvtLuSxiN9lMPw2CLaVj49k6zotPDl8ckXun%2B&X-Amz-Signature=b17989c90be2600c0826ffb88bd0c9e12e15f4c3bee0b722feb248554a9601fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
