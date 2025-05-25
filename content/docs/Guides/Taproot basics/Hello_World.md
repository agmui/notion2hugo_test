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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUWZJCL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCZrh2gNg9AeyWXbv2k2bpVtUCS3EhyVUKYsk4mioUUFAIhAKrzxUmx2bhEgmcPoa8JZCyfeO0H0JNK1ZEbCttqRo3JKv8DCCYQABoMNjM3NDIzMTgzODA1IgyW7NxlydU73S83Dscq3ANcLorcTyIFZLfur8S0fHkBJHB8D3HGswTXn4mSbh7Fa5kenmNDHAOUCqM9Xlhy33mzcWFlmaXigMw7AHpMdI0jaiMTMh23lYXMCL24yBy%2BF7LrMLEyhKIiH9gOs1ZXp3im0NgFvKWMhyKpnq6NWmJkfCBLAr25KMcR6ktXYFNuisjXnV3kmQgKnLt%2BvCExHk4V48VcdYl4kkG6Fgp9rLACnGSi1UzOsdu7eIvuBDJRzrwpX7MV%2B6JA3R%2BmoetQe3drSgvEO8mERXXNqBHE6pKYcgIzgJRrSrbBLQIuEAEmLEaG%2BoYglO3WDhNP7NENowIM1QiGmFzu%2FzLGyToIx2g%2FdhV%2FmfLXLZcmaZKIAlNW3CnY0G5qgchBLcRPNgcX3O%2BrmdONMMmZFiULFPENF78cQ8WePHwfciJynkrGZvO0vcqVgGIcfdpClIRcOey6n5017UuuOMXhrw5%2FY5gHzr47VoyYQDqlInp15mpQnc8cLkQTCURyBE6xFxPijdyZDlR%2FqhTNjUETO8GiVfdPCLDiLdM7kg5NAMzBzCV4%2FaKM6vsbsMgKjAgJ%2FIS35%2BKZBsvuFv86G14A1OsQ4taiivEbM%2FcWJIMdbkX8ylUHjaoMycGPqg6porsM4V6jpTCGucrBBjqkAUdo4DNEi620T4Un4LhdnNPiDEY5kh7ylPhEXImi2iqw%2BRfMPJIFhmkKhd0O4%2FYadeaxc2yTBV89bHtYI2%2Bewwl3D9fQrQsQ%2FY9z0wZBs9xEJAQYOkL7DV2kE3%2F%2By5pZ%2B2rrZpLDG4DfCnfmJilG3nZcxHxk2nU2tT8l8hqQptJDqRQLaOcf43dD6YV18ekt2U5GkfVwALD2ZcECICDuIq%2B1lOVQ&X-Amz-Signature=0aa6308d565eeaa1322f366d8462bcbca3aae3652c5e692727a4e12414275a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUWZJCL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCZrh2gNg9AeyWXbv2k2bpVtUCS3EhyVUKYsk4mioUUFAIhAKrzxUmx2bhEgmcPoa8JZCyfeO0H0JNK1ZEbCttqRo3JKv8DCCYQABoMNjM3NDIzMTgzODA1IgyW7NxlydU73S83Dscq3ANcLorcTyIFZLfur8S0fHkBJHB8D3HGswTXn4mSbh7Fa5kenmNDHAOUCqM9Xlhy33mzcWFlmaXigMw7AHpMdI0jaiMTMh23lYXMCL24yBy%2BF7LrMLEyhKIiH9gOs1ZXp3im0NgFvKWMhyKpnq6NWmJkfCBLAr25KMcR6ktXYFNuisjXnV3kmQgKnLt%2BvCExHk4V48VcdYl4kkG6Fgp9rLACnGSi1UzOsdu7eIvuBDJRzrwpX7MV%2B6JA3R%2BmoetQe3drSgvEO8mERXXNqBHE6pKYcgIzgJRrSrbBLQIuEAEmLEaG%2BoYglO3WDhNP7NENowIM1QiGmFzu%2FzLGyToIx2g%2FdhV%2FmfLXLZcmaZKIAlNW3CnY0G5qgchBLcRPNgcX3O%2BrmdONMMmZFiULFPENF78cQ8WePHwfciJynkrGZvO0vcqVgGIcfdpClIRcOey6n5017UuuOMXhrw5%2FY5gHzr47VoyYQDqlInp15mpQnc8cLkQTCURyBE6xFxPijdyZDlR%2FqhTNjUETO8GiVfdPCLDiLdM7kg5NAMzBzCV4%2FaKM6vsbsMgKjAgJ%2FIS35%2BKZBsvuFv86G14A1OsQ4taiivEbM%2FcWJIMdbkX8ylUHjaoMycGPqg6porsM4V6jpTCGucrBBjqkAUdo4DNEi620T4Un4LhdnNPiDEY5kh7ylPhEXImi2iqw%2BRfMPJIFhmkKhd0O4%2FYadeaxc2yTBV89bHtYI2%2Bewwl3D9fQrQsQ%2FY9z0wZBs9xEJAQYOkL7DV2kE3%2F%2By5pZ%2B2rrZpLDG4DfCnfmJilG3nZcxHxk2nU2tT8l8hqQptJDqRQLaOcf43dD6YV18ekt2U5GkfVwALD2ZcECICDuIq%2B1lOVQ&X-Amz-Signature=2bf369a3d8d323abf9e0f52c9035538940ebfa6d494d99cdd017e91e9851bd51&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
