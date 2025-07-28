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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN2QUBJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCr1WM5W3gfAS6XfuMlKr23jenQa7VRBAZ6%2BllafYvLGAIgO%2BYqkF4%2FC6b5lJkEQvGJE8a7kcbaB%2BZaX90synjDpcUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiTgSFsrmr%2B7tQ9CSrcA3kah2rtBdVmgEzIgwNFQXjXomfOEmhoHihhCtZjhvhgkNZoXqrrnYdOw7SKwESEaOi2yBwwdWOdKsLh2Lp8ioRuH5bf2z9qhDgmpmqQV3Vt4ZtRH72AtvYtxgefs%2FmsNC393bW9salDJu729dXZTxnhHWIKdlmU8fhGBVPh6zUy%2F9Wc%2BEWooR5y90RK6YGYJE199Qzspcy%2Bm0bK%2FjypA90dnGlYpP8zIZPwMRyguQPMS5B%2BCe9CpuyVj6iS1AbP7kzC%2BDpRSZYy5ClroshVI1PW7nOLZD3aCBl7xpRomPmMnEIrFeRZdke8O0%2FNrasusUK%2BFzHOz7I9ttqydS3zqoemGoNw8tzI9jxI8K5tEI65alF7G5zXYF3SV5uHsJTW9nm1ee728jy0f0Db47FScWsxKW1Ohew%2BQXtnpXzQ7pCOcZvYJqwDC%2FimKsJwkRoHN%2FbDBaQlX1Mo%2BcAfo%2FxgiI2uV%2BPZExNBFzUShZrBfc1Jtyv5rZ03AO%2BD1sBuwEUt6K%2BF5UzRk536JAatzCGao7hjXLxitxxeh95PyTnwL3mTF8RBsYWnu20OxrXCTOQ%2BRToWTDpewr5ollswj6rWtk6YZlgyWPfcRKJjTB4TDZw9EzAB0ch3O0%2FjFQyvMIX7ncQGOqUBH62SknPACENEssorJt4KxvXSGWHFBLIZLCuWBAUI874FefCIP0%2Bg7bbCivuvR6a8H6EjRF5Eg5Bmf5eGcl%2BmfaL0zqlb3FStBENjfOo94S9dpmL7gjKUx2K%2FImJca8pb5GCkhdtzOffhwF1gNM9Frkp4Dv5mMZA%2BGnGtI6b%2BnxhJxFpfoweYhH6a9yXIblKDr3l%2BcPVw1CrF9auHRRMCE94ikbEE&X-Amz-Signature=99b6f19c4ddeeaa0bc8b3b1060683f95e3759b7ff9d93df9549f6116d0c25942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN2QUBJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCr1WM5W3gfAS6XfuMlKr23jenQa7VRBAZ6%2BllafYvLGAIgO%2BYqkF4%2FC6b5lJkEQvGJE8a7kcbaB%2BZaX90synjDpcUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiTgSFsrmr%2B7tQ9CSrcA3kah2rtBdVmgEzIgwNFQXjXomfOEmhoHihhCtZjhvhgkNZoXqrrnYdOw7SKwESEaOi2yBwwdWOdKsLh2Lp8ioRuH5bf2z9qhDgmpmqQV3Vt4ZtRH72AtvYtxgefs%2FmsNC393bW9salDJu729dXZTxnhHWIKdlmU8fhGBVPh6zUy%2F9Wc%2BEWooR5y90RK6YGYJE199Qzspcy%2Bm0bK%2FjypA90dnGlYpP8zIZPwMRyguQPMS5B%2BCe9CpuyVj6iS1AbP7kzC%2BDpRSZYy5ClroshVI1PW7nOLZD3aCBl7xpRomPmMnEIrFeRZdke8O0%2FNrasusUK%2BFzHOz7I9ttqydS3zqoemGoNw8tzI9jxI8K5tEI65alF7G5zXYF3SV5uHsJTW9nm1ee728jy0f0Db47FScWsxKW1Ohew%2BQXtnpXzQ7pCOcZvYJqwDC%2FimKsJwkRoHN%2FbDBaQlX1Mo%2BcAfo%2FxgiI2uV%2BPZExNBFzUShZrBfc1Jtyv5rZ03AO%2BD1sBuwEUt6K%2BF5UzRk536JAatzCGao7hjXLxitxxeh95PyTnwL3mTF8RBsYWnu20OxrXCTOQ%2BRToWTDpewr5ollswj6rWtk6YZlgyWPfcRKJjTB4TDZw9EzAB0ch3O0%2FjFQyvMIX7ncQGOqUBH62SknPACENEssorJt4KxvXSGWHFBLIZLCuWBAUI874FefCIP0%2Bg7bbCivuvR6a8H6EjRF5Eg5Bmf5eGcl%2BmfaL0zqlb3FStBENjfOo94S9dpmL7gjKUx2K%2FImJca8pb5GCkhdtzOffhwF1gNM9Frkp4Dv5mMZA%2BGnGtI6b%2BnxhJxFpfoweYhH6a9yXIblKDr3l%2BcPVw1CrF9auHRRMCE94ikbEE&X-Amz-Signature=1fd66f9694f8250a559847d6bf647a173efc61bbb7611c9baffe286a8e85d0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
