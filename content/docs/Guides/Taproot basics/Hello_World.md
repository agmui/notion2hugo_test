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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YGW434%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrRvucDDx7FXnEmiPex7vAqbMeyL9la44tlAfUxorMiwIgZ74CvTggU3yq6TxM953%2Bbgk0I1fvGy4cgwCY09eLvI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJLDpoRPJxP9TJk%2FFSrcA1AHEhgQpJstsAAdvDXjRVlXZKWThlfMQMmNpMQqza%2BjisN4NdtXJNGmgSCju5ZVy7uFSx66pFWXvxmTna%2Bpqw2Ox2Arwj5HuCh9uagY1RdH7PiOkVZV9d5BqLAA88ezvoRHV9CUfCC4SSuy4LFDyt0dwyDdvp5jMDtVoEMAYmywrwM1fFgdoqOmyEF%2FCw2%2BFPJ4GxmvjJhiR9OHe5HzwMCLWvsKxOehXxCYmJ%2Fvq5W0rpG%2B90ER6VNsbwlYM4X6AFGgQpn6AbMjgBOjrUc9JVPgmZj3W83tIupSN7ZB7B89y66T8glrN%2FzgQE%2FVraAuOpfXyl63GZNgG5XssEFNERf2WW275VTiR%2FONgyHVGTTbIVnIOHMhIwMtSJvc1hgdt1KL1C8IlLe6FPk3ygrqHrPss0xC2dtBahBbwL%2F0kqqfzTZo6Wi206c%2Bt2U1zwoxUfOBy1lkepR7g%2BXXpGlXkNk1TdV3p6M3sUvBa3y87zbAJPrL4UmKeoPZMjCdwZEL7XFikh7I0mUJYOtaZ48IlP3xDujR24NZF253y2DPPjEyiJwubT3GvIUevdAh%2BDNBh2pnfRHH6EgN%2Bt4Dd01NgMAwCnr4iQHGwivuJ%2F%2BfrhIvuuhs8nGWqn5QJ7G4MLfM8MAGOqUBZTTqLXmQsdQdbhjIDoukXIv6GGvG4g5c04W%2BVYh4iVMZSqxQqIn5o1u9lORx%2BIRfIH04lYtuteFdiCr%2Fq%2FZEXJ%2FrBeQXrTKcJYB71hV%2FD4dKbSrn585ZnNwnz7CJdTKQjNPmbxZrvOAbBVuVcqJvaB0PtCGuNieOg8zayHHxuEH3%2FMLs8bFT%2BD%2BjWdBx8Tam2QeBe8qDbGHKs37h2TXiz28vY%2Fjm&X-Amz-Signature=3af43845e396ad1a53250e62a3274653e8448994a81eeed946141ef1478fe4c7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5YGW434%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrRvucDDx7FXnEmiPex7vAqbMeyL9la44tlAfUxorMiwIgZ74CvTggU3yq6TxM953%2Bbgk0I1fvGy4cgwCY09eLvI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJLDpoRPJxP9TJk%2FFSrcA1AHEhgQpJstsAAdvDXjRVlXZKWThlfMQMmNpMQqza%2BjisN4NdtXJNGmgSCju5ZVy7uFSx66pFWXvxmTna%2Bpqw2Ox2Arwj5HuCh9uagY1RdH7PiOkVZV9d5BqLAA88ezvoRHV9CUfCC4SSuy4LFDyt0dwyDdvp5jMDtVoEMAYmywrwM1fFgdoqOmyEF%2FCw2%2BFPJ4GxmvjJhiR9OHe5HzwMCLWvsKxOehXxCYmJ%2Fvq5W0rpG%2B90ER6VNsbwlYM4X6AFGgQpn6AbMjgBOjrUc9JVPgmZj3W83tIupSN7ZB7B89y66T8glrN%2FzgQE%2FVraAuOpfXyl63GZNgG5XssEFNERf2WW275VTiR%2FONgyHVGTTbIVnIOHMhIwMtSJvc1hgdt1KL1C8IlLe6FPk3ygrqHrPss0xC2dtBahBbwL%2F0kqqfzTZo6Wi206c%2Bt2U1zwoxUfOBy1lkepR7g%2BXXpGlXkNk1TdV3p6M3sUvBa3y87zbAJPrL4UmKeoPZMjCdwZEL7XFikh7I0mUJYOtaZ48IlP3xDujR24NZF253y2DPPjEyiJwubT3GvIUevdAh%2BDNBh2pnfRHH6EgN%2Bt4Dd01NgMAwCnr4iQHGwivuJ%2F%2BfrhIvuuhs8nGWqn5QJ7G4MLfM8MAGOqUBZTTqLXmQsdQdbhjIDoukXIv6GGvG4g5c04W%2BVYh4iVMZSqxQqIn5o1u9lORx%2BIRfIH04lYtuteFdiCr%2Fq%2FZEXJ%2FrBeQXrTKcJYB71hV%2FD4dKbSrn585ZnNwnz7CJdTKQjNPmbxZrvOAbBVuVcqJvaB0PtCGuNieOg8zayHHxuEH3%2FMLs8bFT%2BD%2BjWdBx8Tam2QeBe8qDbGHKs37h2TXiz28vY%2Fjm&X-Amz-Signature=ae3faea63027a0b04a8c7b180b9166e006e197c6c591b9a57621d109c8d81c05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
