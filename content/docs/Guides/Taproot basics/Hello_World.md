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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRD3ELE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICDjoieycTQ%2FGooNezeO0JP3Xokhk2YmHgG8TL3GOL%2FiAiAKXbYeMqGgr1WXCLtJzYkMnUdJeUYSLJ%2BQxe9peBdoPCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4mHWiaPLVD81pnrXKtwDb1iXIkXbA4gIXKCSGTKfNcYWDdMPBDaIc6cTrMmNyH9YF%2FPzp%2FJXScerWmVuVFwACePpUy6wKKfO6ngZsS73JNo%2BEo%2FMe60yafhiPcW5IFmpqhvQYf5giPGSebZLHuhKRZ0HW5dDu1bG%2Fz3%2BirmnZI2rHC1Jr6ZTsrc7X4DHxw1wN4UR2dISgYcsqtfysdniTzBFFEA%2F0b5jfw04%2FBy0vydRgS2GxQbqZOm0ihfgcNREpsSHXmnpzfsdsb0z5il8hDJw7JzdGs0rx1L3f85J%2BiCg1G0lC4kq24I1Jr5ftRubSrxj0CZOMgTx6h9lwh34JGcRAURM%2F5uLMTfBc2HQ0S68uKNIcpw1%2BvyRpLxZ6bZVdTprFncgGxoLJxH62zJGLwEaugSKl2aZq%2BABXMZJgt92M3BjkIErSJ%2F3OU2s%2BwRnO0Cuyw86%2BCfbLhvRAM4q4qIWRYCr8s%2FSakL7978BXokRoZ0OIwp3pJumAus9%2B1fKBStcc%2BNCGmXbURWGkC7QFMdABnt%2BHsFzb60QJ5ihB2LyKrXrqq5AGv40A6ND5dnhzxfDArpg14jwD94nfVdqZa2IdEynAgRIv4upbmkB2e1g2naQV7Utdz8S8r3OBtJqMkDjECKkoMyeGOAwmKCPwAY6pgEX2O2H03rDNJFwGEwACwhdVuhh3HP5DxF603TJLBxzOPwUPe2%2FGluCRF65fxpOtQSWcFg8o7YdF6y9RSEleysZ1PvecfWFijOBPT0jVgM9GmfHtc9AtoDJhjHgII%2BHg1RtpUOrVKR%2FzljKyzacYJuI%2BsCqK%2B1wM85kAIDv6Lr93VEn8VCTVs34YuqNFTS%2FLNqJfady%2FmUjLo4%2Bf0ur561xjclQjwn6&X-Amz-Signature=8e1bd68c9b6afbab88db7a3390a909a5d216f6ec67b0376196cd3e71a18c78fb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRD3ELE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICDjoieycTQ%2FGooNezeO0JP3Xokhk2YmHgG8TL3GOL%2FiAiAKXbYeMqGgr1WXCLtJzYkMnUdJeUYSLJ%2BQxe9peBdoPCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4mHWiaPLVD81pnrXKtwDb1iXIkXbA4gIXKCSGTKfNcYWDdMPBDaIc6cTrMmNyH9YF%2FPzp%2FJXScerWmVuVFwACePpUy6wKKfO6ngZsS73JNo%2BEo%2FMe60yafhiPcW5IFmpqhvQYf5giPGSebZLHuhKRZ0HW5dDu1bG%2Fz3%2BirmnZI2rHC1Jr6ZTsrc7X4DHxw1wN4UR2dISgYcsqtfysdniTzBFFEA%2F0b5jfw04%2FBy0vydRgS2GxQbqZOm0ihfgcNREpsSHXmnpzfsdsb0z5il8hDJw7JzdGs0rx1L3f85J%2BiCg1G0lC4kq24I1Jr5ftRubSrxj0CZOMgTx6h9lwh34JGcRAURM%2F5uLMTfBc2HQ0S68uKNIcpw1%2BvyRpLxZ6bZVdTprFncgGxoLJxH62zJGLwEaugSKl2aZq%2BABXMZJgt92M3BjkIErSJ%2F3OU2s%2BwRnO0Cuyw86%2BCfbLhvRAM4q4qIWRYCr8s%2FSakL7978BXokRoZ0OIwp3pJumAus9%2B1fKBStcc%2BNCGmXbURWGkC7QFMdABnt%2BHsFzb60QJ5ihB2LyKrXrqq5AGv40A6ND5dnhzxfDArpg14jwD94nfVdqZa2IdEynAgRIv4upbmkB2e1g2naQV7Utdz8S8r3OBtJqMkDjECKkoMyeGOAwmKCPwAY6pgEX2O2H03rDNJFwGEwACwhdVuhh3HP5DxF603TJLBxzOPwUPe2%2FGluCRF65fxpOtQSWcFg8o7YdF6y9RSEleysZ1PvecfWFijOBPT0jVgM9GmfHtc9AtoDJhjHgII%2BHg1RtpUOrVKR%2FzljKyzacYJuI%2BsCqK%2B1wM85kAIDv6Lr93VEn8VCTVs34YuqNFTS%2FLNqJfady%2FmUjLo4%2Bf0ur561xjclQjwn6&X-Amz-Signature=0d5517633b4206755c8919e93d5acf91779de2b83ef96352ecc0b8d8729d4b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
