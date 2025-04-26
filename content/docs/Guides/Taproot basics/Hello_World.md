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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAF6PHVI%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZeCemIyVPcH4NLxQYUJDMqhGc0%2B9S3xOTyfPwEQ%2FShAiBCv%2BPvTqm%2BBO68nhQ2JmjzUasRrbr110%2F%2Fdyualb7ESyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMRMI1eAZMoNfDdQ%2FzKtwDhQ5MAqL1JavsGKzTBSayglawjSqrsI5GpSiOfFmB4W3AYc3%2BbqMNtb%2BZUD1gn6CDbQnmAostMaNlHMX4iiegXPLH0gg8u99%2FhFc0dKgN1fVq9h6qds9xLe0wefY%2FVxi%2BJT8AkwP4ctLEnx%2BrNSRziSviqp9kAE3RVFmzj%2FQ2ta9M0rJ%2F7vhZ5sjnPi%2BIobbToYTDazF4cn9ubUPbMCibN%2B26cwV%2BpMZnAp2%2Fyeg2etTiDP0g4snDyHh3cZG06NqpEK39ENUmZnq5E%2F8IoZIzEXQTh7CDxng7RC8VjxcV5W%2FPfgQG4Fg1C5JOrZEQducQaf1ygyu%2FpmExQJbgHGAWJ3SjvFyd84sESzJ69azRI%2BcI3ghZafX%2FthAewauxXf4kuGxWm02uynilIV%2FZLyJPuRdfvo1Vp9%2FNzMTjRy%2FewqvRA2PGiFTS4OxF6Gpl4ujMXJLBACuylraVYzp7hZLTd1xKbVh%2Bo6oLVclLIyR5mWFudaaANnpl8gV74%2FqJSlniGggKxl7DwLak7pT67efXzGfO5LN4MGj9cuiX%2BpM1BwdyynGr34hk8CtMmKenL%2BkZMLhPP7HIdi4dBMAQtyrFNl6xDoAbbi368PwkbMe%2BY5jKoaV6zhZNkkSWyaYwu%2BazwAY6pgEY2YcBpkG8r0Z%2F1vYF1GdXWDBG99Gmw0wLz0NFlyA4KJKiHWd1Sco3BkAd0K7CjVeSEyD6ov1KnW1nbHvUBTqTYW03mOOEqQkEQ3%2B9Av%2BMh4vYYMQ9Iw4kODSZAaO3OOYaWUTIJ%2BZxCOEfC4NTFgCWVslM1H2jZbbRTDkpEkKiGFLlqiLRIzaI1S8nsN2jIpoJnPTHn90P7FUDxmEqAqwV7fU90U0P&X-Amz-Signature=1711ddb83640ef9b9d6d37080928b68f95e6e28e3e0f7ea407c1a55a8f3ef4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAF6PHVI%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZeCemIyVPcH4NLxQYUJDMqhGc0%2B9S3xOTyfPwEQ%2FShAiBCv%2BPvTqm%2BBO68nhQ2JmjzUasRrbr110%2F%2Fdyualb7ESyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMRMI1eAZMoNfDdQ%2FzKtwDhQ5MAqL1JavsGKzTBSayglawjSqrsI5GpSiOfFmB4W3AYc3%2BbqMNtb%2BZUD1gn6CDbQnmAostMaNlHMX4iiegXPLH0gg8u99%2FhFc0dKgN1fVq9h6qds9xLe0wefY%2FVxi%2BJT8AkwP4ctLEnx%2BrNSRziSviqp9kAE3RVFmzj%2FQ2ta9M0rJ%2F7vhZ5sjnPi%2BIobbToYTDazF4cn9ubUPbMCibN%2B26cwV%2BpMZnAp2%2Fyeg2etTiDP0g4snDyHh3cZG06NqpEK39ENUmZnq5E%2F8IoZIzEXQTh7CDxng7RC8VjxcV5W%2FPfgQG4Fg1C5JOrZEQducQaf1ygyu%2FpmExQJbgHGAWJ3SjvFyd84sESzJ69azRI%2BcI3ghZafX%2FthAewauxXf4kuGxWm02uynilIV%2FZLyJPuRdfvo1Vp9%2FNzMTjRy%2FewqvRA2PGiFTS4OxF6Gpl4ujMXJLBACuylraVYzp7hZLTd1xKbVh%2Bo6oLVclLIyR5mWFudaaANnpl8gV74%2FqJSlniGggKxl7DwLak7pT67efXzGfO5LN4MGj9cuiX%2BpM1BwdyynGr34hk8CtMmKenL%2BkZMLhPP7HIdi4dBMAQtyrFNl6xDoAbbi368PwkbMe%2BY5jKoaV6zhZNkkSWyaYwu%2BazwAY6pgEY2YcBpkG8r0Z%2F1vYF1GdXWDBG99Gmw0wLz0NFlyA4KJKiHWd1Sco3BkAd0K7CjVeSEyD6ov1KnW1nbHvUBTqTYW03mOOEqQkEQ3%2B9Av%2BMh4vYYMQ9Iw4kODSZAaO3OOYaWUTIJ%2BZxCOEfC4NTFgCWVslM1H2jZbbRTDkpEkKiGFLlqiLRIzaI1S8nsN2jIpoJnPTHn90P7FUDxmEqAqwV7fU90U0P&X-Amz-Signature=812c5ab3ca54785c2f9b03903e7097f5b9f001efd4770f969b4da98fd6343d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
