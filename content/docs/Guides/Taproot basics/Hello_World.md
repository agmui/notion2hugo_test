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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6XVZG3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOeLX2x9xB2z1a3fnNvhNyDc6r7RyJsR%2Fare9j4BSS%2FAiB7eTkVFTGGO2bulAGJZB9DncMR7RAZ%2BfnFKiVAh2WzByqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6fJJiom1%2BUwcMP7KtwD46w4DatGAUBZdykxVbnLzBV49Ci7tIn21%2FRY68sco%2FAue49H0sl7Lzn2W7xnDqZIITZKCo1sM2GIXxxfil%2BLmSwJt5Xnfc48il%2BdDb1wWKMkD6nF66pCWPNA0R63tQRRnzgNW2Qy3ru6XwtOL%2FrO0p3jMLBjT8uZPjIuwR6xT8E5d1YYG9sb%2BQr9ErUY%2F5UA90BedbgfH9G2L4YuCPUALue8VeASDzHYwvUbZvdugxawDFrmnW7sA9slZojaOa6Ah59F9KM%2B6eLLuxxHQHRqTKkrdCebDkkL9PKK31bWRlG6T57kXIK4QWUmGSckMa7yCUVkKDCo8c8ThYAsDNoi5N%2BbQw8cI0ZC%2BpEwBcDi0rf0xUGRcWSbPu3fegm3dXomCKOmu9JmfZCcVYmBIDm53sU8KX44K06wKVViHO5o07bftVU4qmtFKQXVFYvduB0CMqzYONs%2F5XCLd6KUR7JC6hKCluUmBMaHUJDDY7%2FadJaIgOYSnlcrKkoXReHtc42cqTBDbaro3%2BXyVtfBFxhRlPtzyC%2Bgs6ix3UvyWkVCpL7WbxUt8M5cfEjnnZV4AiZ%2F8CADw8uXBvVZto14lvd2%2FmZ3xq5PrksGaETJj5woHOqSeW4aerif9v2wx68w5NrcvQY6pgE%2F%2BeN3PHEfUP0InnMM9Lx8y%2FxZbvrB5%2BwIJuMvt5QUA1gow6D8a%2BsQ7c7Q2AhpDW4xnZqASDk0t6A43xsk1Ln2EHu1PuQ7mxamkZkK1KpWMGSkl5hfnQ5NyGZqgkb1bBT9g4uyvY2N02DT%2FZpP8gLi6s7eHY%2FZpbSFgiUMW%2Bk6WASMGik9%2BX1IDw0NXCWxt3kUPcJnsyF2COrTVKXFStRvnSfoc46m&X-Amz-Signature=03eda895c8ddf8ba1ff8e54f00c79d1b82a2cb0a17a21ac6fc13d29d6d122f95&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6XVZG3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOeLX2x9xB2z1a3fnNvhNyDc6r7RyJsR%2Fare9j4BSS%2FAiB7eTkVFTGGO2bulAGJZB9DncMR7RAZ%2BfnFKiVAh2WzByqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI6fJJiom1%2BUwcMP7KtwD46w4DatGAUBZdykxVbnLzBV49Ci7tIn21%2FRY68sco%2FAue49H0sl7Lzn2W7xnDqZIITZKCo1sM2GIXxxfil%2BLmSwJt5Xnfc48il%2BdDb1wWKMkD6nF66pCWPNA0R63tQRRnzgNW2Qy3ru6XwtOL%2FrO0p3jMLBjT8uZPjIuwR6xT8E5d1YYG9sb%2BQr9ErUY%2F5UA90BedbgfH9G2L4YuCPUALue8VeASDzHYwvUbZvdugxawDFrmnW7sA9slZojaOa6Ah59F9KM%2B6eLLuxxHQHRqTKkrdCebDkkL9PKK31bWRlG6T57kXIK4QWUmGSckMa7yCUVkKDCo8c8ThYAsDNoi5N%2BbQw8cI0ZC%2BpEwBcDi0rf0xUGRcWSbPu3fegm3dXomCKOmu9JmfZCcVYmBIDm53sU8KX44K06wKVViHO5o07bftVU4qmtFKQXVFYvduB0CMqzYONs%2F5XCLd6KUR7JC6hKCluUmBMaHUJDDY7%2FadJaIgOYSnlcrKkoXReHtc42cqTBDbaro3%2BXyVtfBFxhRlPtzyC%2Bgs6ix3UvyWkVCpL7WbxUt8M5cfEjnnZV4AiZ%2F8CADw8uXBvVZto14lvd2%2FmZ3xq5PrksGaETJj5woHOqSeW4aerif9v2wx68w5NrcvQY6pgE%2F%2BeN3PHEfUP0InnMM9Lx8y%2FxZbvrB5%2BwIJuMvt5QUA1gow6D8a%2BsQ7c7Q2AhpDW4xnZqASDk0t6A43xsk1Ln2EHu1PuQ7mxamkZkK1KpWMGSkl5hfnQ5NyGZqgkb1bBT9g4uyvY2N02DT%2FZpP8gLi6s7eHY%2FZpbSFgiUMW%2Bk6WASMGik9%2BX1IDw0NXCWxt3kUPcJnsyF2COrTVKXFStRvnSfoc46m&X-Amz-Signature=f9f06751c75b8fc67f6251d1e9dc79ddbf73c418dba14f1368195078ffc7f711&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
