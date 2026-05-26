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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGQ43YD%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnFiqsBn%2FUEDP5Yeac6RSja3wl3fqMYGHuMlObo9Y2kAiEA1F6OZn4s8fXSbIxOX2h2v9mSEQx4wstHxsk1l%2FReW54q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDK1oU6nVlpPzke8xuCrcA405FPrJupmYHgCtAnKPhzWJvPS1jKtYJl3yfkRk1sZ1%2FsAfVzRLdNicfzdJyMD7UCzIOEZliPjLHSTw1%2Fn65zoRnRRadj0Q3jWc0EP8JDq4YazHzj968umekMby9Zn%2BjNAdUxnbgdoD5OLpiFg%2FEBQ%2FfOvUq5mZG1zkkeUFvOxUsCfUNVKjhPXpxAX1ASTxKwqXzaDl26pAQ9mIwtUFcvH93aKFWyMpNl2O8X5uR%2FGnBT5ftrIEoWOPKgCs8xmh3pFRqz4hVx%2Fm6xJtiAwCxyXwaxpOgxTe%2BpYQ5A76wU%2FY%2FaliUiY2r31GCvRN9C4b3Ayq4%2BdKs2CZne80OtYT9NtVFB74NbRyZY9oXIr4Km%2FgcpLTExTtKezG9ppC8nK%2B%2BWqRqEIcFzFZNv8Ps4uYl2DiN1MhBRGwh6BxhESgaDZzj9FmrWoMyIU7skjPcNAc2GFP6yEgGEU%2FZfPPUBhDEdjWYtxrWFT%2BUAwNZI4eHfNL957NuRUyWZudvyQVQChaCX5u5X3utRnygp1ygVw8aVdsmbi1YHuwNouaNYAMvmR0Ig4mHp5EFOuyPXM4zSU53xttdyO2fuhhoxOCfOU7rG2c%2B4bXrYEmsFHcVVUqykkuWBzDG22SWpBsGt3nMO%2F409AGOqUB0NLrxQe4R%2BaevQpn9leYL%2B7jkhXF%2FOjqOVq9jnHff24zAIhaImnFG9GjoZqafcw8bbI%2BiFK1YuOzoqNYf8LLD0z%2BFtrgBVuFC4LoZYLQuCT3ODI7t68QzurUKijkQr8AoLAz3d%2FuTPzXoh0WiCn9flJBLyyFMHTZX%2FtAM8uIhCDux0l2QZSIusYySwT8iBgyJc0qWDbIeQGod1tMd3RW5hn%2F6H9k&X-Amz-Signature=0ed44fdde41126616a23e5ffbf70ec0df3aa5cbc19b65f8b60d6a4755bc30cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGQ43YD%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEnFiqsBn%2FUEDP5Yeac6RSja3wl3fqMYGHuMlObo9Y2kAiEA1F6OZn4s8fXSbIxOX2h2v9mSEQx4wstHxsk1l%2FReW54q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDK1oU6nVlpPzke8xuCrcA405FPrJupmYHgCtAnKPhzWJvPS1jKtYJl3yfkRk1sZ1%2FsAfVzRLdNicfzdJyMD7UCzIOEZliPjLHSTw1%2Fn65zoRnRRadj0Q3jWc0EP8JDq4YazHzj968umekMby9Zn%2BjNAdUxnbgdoD5OLpiFg%2FEBQ%2FfOvUq5mZG1zkkeUFvOxUsCfUNVKjhPXpxAX1ASTxKwqXzaDl26pAQ9mIwtUFcvH93aKFWyMpNl2O8X5uR%2FGnBT5ftrIEoWOPKgCs8xmh3pFRqz4hVx%2Fm6xJtiAwCxyXwaxpOgxTe%2BpYQ5A76wU%2FY%2FaliUiY2r31GCvRN9C4b3Ayq4%2BdKs2CZne80OtYT9NtVFB74NbRyZY9oXIr4Km%2FgcpLTExTtKezG9ppC8nK%2B%2BWqRqEIcFzFZNv8Ps4uYl2DiN1MhBRGwh6BxhESgaDZzj9FmrWoMyIU7skjPcNAc2GFP6yEgGEU%2FZfPPUBhDEdjWYtxrWFT%2BUAwNZI4eHfNL957NuRUyWZudvyQVQChaCX5u5X3utRnygp1ygVw8aVdsmbi1YHuwNouaNYAMvmR0Ig4mHp5EFOuyPXM4zSU53xttdyO2fuhhoxOCfOU7rG2c%2B4bXrYEmsFHcVVUqykkuWBzDG22SWpBsGt3nMO%2F409AGOqUB0NLrxQe4R%2BaevQpn9leYL%2B7jkhXF%2FOjqOVq9jnHff24zAIhaImnFG9GjoZqafcw8bbI%2BiFK1YuOzoqNYf8LLD0z%2BFtrgBVuFC4LoZYLQuCT3ODI7t68QzurUKijkQr8AoLAz3d%2FuTPzXoh0WiCn9flJBLyyFMHTZX%2FtAM8uIhCDux0l2QZSIusYySwT8iBgyJc0qWDbIeQGod1tMd3RW5hn%2F6H9k&X-Amz-Signature=c6c7cbe5a9c6a5148928cad3d902ad869251623b0b4e47f692a487bdaab6af53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
