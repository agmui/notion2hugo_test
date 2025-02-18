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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NOQOZ3R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFYyCNxvjVb8B1v%2FC07u2OUGDAbjArNurbFRchOPY83PAiEAlelDera0H5SZ%2FLaxT2AcZ0%2F%2BpN8AWnmcueunBTTsPkwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0Q9Jlo2TLhjLWYMSrcA4DUjqDW0ylzjIL0BhBUTocZMWjKj1UnoQr9BUitZOPa%2FZ7xtBG%2BoiLwFWdvXnCv3ZZ7%2FtktVOSxucfcatjmi9WiHN9JvVrsku%2BzI1zhsH5435LhRN1b%2Feu2AN%2BPLEqE0Kn2wtebzBsoipL3Aqxs1awQX0y01JxlA8Uy6PT2tZE%2BXJHtjJ3sOsOof4CFDlj5ITfzmYUShTTcxq8vmZi%2BY7WXBp7o4A%2F3Wm62MqOEARLHLjcV1BP4aP2FI28mM%2BlsL28Izf6vSN6CQzqT2Hj1iQPsxLIsEHI9bBq38gZRtjia0sBmyRwJVaYfxM16XZTQy2JmA2IaOoQKIR0VBj0EP6aD4gTzj4nuk07tsjANFN8NjL0uHdfH6bqKkVTSoszSIHke5vmf8wgikVsHFZh7kRwxGu%2BYiOX2zMx86dUDsN%2Bsc2um1Zq7LJf%2Fcek98JeRKFd1Vm5g2nJPyhuQla3gJMUpzyzKeBNeM4d1eZ20vv2bGPuv%2FQk9NIlOl9JvoCinI6mBTMf%2BVJ4QgImIMoDVO%2B5FXxfeCVH5wG9Lkbbs0gk6zIk8K0%2F6mYwBsvDfLVsJSCp%2B7OkOB3BWSWoyfcon5MJxTdrWura9h%2BBGSMCEQOt49OODv1zxM1GocKHrMKz%2B0r0GOqUBxULjOKjM92%2FKGpDZWvQcmf4G5k1tqOddo5jKhpR2W2EnP5urjI9vX9MgIjJjfvtRmJQKFSnXMnBOeIY8fg48TRimTm11gtXtDdBGkdtypjZ%2FcFfSO2Vxl8ngKwssTNjgZBidwgUOmri0ctPzINSoPBIMqKdjXJ1AFi6jl6rq9zdtC25cM1MaoQ3jEqe4goXGIeZhYi1iTQe8Wxp7yMh26a4zle60&X-Amz-Signature=293bf640f4bb41ebbd762a50e81ba4666f298372c3cf76c3c7c7e20710d47b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NOQOZ3R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFYyCNxvjVb8B1v%2FC07u2OUGDAbjArNurbFRchOPY83PAiEAlelDera0H5SZ%2FLaxT2AcZ0%2F%2BpN8AWnmcueunBTTsPkwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0Q9Jlo2TLhjLWYMSrcA4DUjqDW0ylzjIL0BhBUTocZMWjKj1UnoQr9BUitZOPa%2FZ7xtBG%2BoiLwFWdvXnCv3ZZ7%2FtktVOSxucfcatjmi9WiHN9JvVrsku%2BzI1zhsH5435LhRN1b%2Feu2AN%2BPLEqE0Kn2wtebzBsoipL3Aqxs1awQX0y01JxlA8Uy6PT2tZE%2BXJHtjJ3sOsOof4CFDlj5ITfzmYUShTTcxq8vmZi%2BY7WXBp7o4A%2F3Wm62MqOEARLHLjcV1BP4aP2FI28mM%2BlsL28Izf6vSN6CQzqT2Hj1iQPsxLIsEHI9bBq38gZRtjia0sBmyRwJVaYfxM16XZTQy2JmA2IaOoQKIR0VBj0EP6aD4gTzj4nuk07tsjANFN8NjL0uHdfH6bqKkVTSoszSIHke5vmf8wgikVsHFZh7kRwxGu%2BYiOX2zMx86dUDsN%2Bsc2um1Zq7LJf%2Fcek98JeRKFd1Vm5g2nJPyhuQla3gJMUpzyzKeBNeM4d1eZ20vv2bGPuv%2FQk9NIlOl9JvoCinI6mBTMf%2BVJ4QgImIMoDVO%2B5FXxfeCVH5wG9Lkbbs0gk6zIk8K0%2F6mYwBsvDfLVsJSCp%2B7OkOB3BWSWoyfcon5MJxTdrWura9h%2BBGSMCEQOt49OODv1zxM1GocKHrMKz%2B0r0GOqUBxULjOKjM92%2FKGpDZWvQcmf4G5k1tqOddo5jKhpR2W2EnP5urjI9vX9MgIjJjfvtRmJQKFSnXMnBOeIY8fg48TRimTm11gtXtDdBGkdtypjZ%2FcFfSO2Vxl8ngKwssTNjgZBidwgUOmri0ctPzINSoPBIMqKdjXJ1AFi6jl6rq9zdtC25cM1MaoQ3jEqe4goXGIeZhYi1iTQe8Wxp7yMh26a4zle60&X-Amz-Signature=63c7308a4c162a0abff6e145725ca2ed208fc78b5455d049e017d9a92ed8fbf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
