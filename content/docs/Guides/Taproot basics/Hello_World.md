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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4SC4CG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGfkFW0lEMDxFrPt5TlQB4n4DrCoJJiyPF1i1DTxrqpfAiBTybHhhwxE71E11j%2BajnHmmo0xOslXYxcpY%2FnpiOQZtyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMILzwpq6SoD5rcT0iKtwD%2B62XcAjB97DJ18aFo2dA4BlWdmKEV3N1R6Q3UAVghlpBT9GKooWrjWfIkH5yRYvLRNRjhkqbPI1EoaA8j0UgdEe4qo7ygFz4q22mZGVlvXAUMV1kzbjtgp2df3MYH6s%2FmNs%2Bycgh2EFtTXmNzBkRel0SahO%2FvVQi6oCXfiZm4P2aXEmWVj9TsoNJR%2BY7jrboQSVCWrPmKRW4YqKoCCcBeDgaTrQsETi8w5BVMnTQRYBakTxLc2QsLPEjWNRQoFZenbpsyqdUDzxBW2IA9PNh07KFrcYh5s5R%2FeIFCA7Z5uBS9v1XQrpWlYRcBdNleQHdIf8xlihdO7CsmRa5szTDxSpg4w6illNE4lCn1nzOF7uOjBrt4d6FMgnLBNTPUAEXDG0TKSVmakgBW9N4%2BCu%2FOsm7mHoPFmi9XXUmT15Hlxzik6lrEx%2FFRQHZpB4qLvLTPJigTAXaY5EnmqB4UDBjv5DT2q8U8qmcTVLdotCWo8hyCmk3rFBMS85ncqN%2Br5pauFmAbnqcQeHM26vN%2B1x8FGmq9kHT749csme3JqzrtuDDCsS9VBO9mhUSg%2FQZ96I9e1DMVQJjfPxKiWHwC9B078RNGS7uJF7sVEbh9e3%2FNnqHQZ2LpsR7QPGKwIkwkcaYvQY6pgEkw6B2xe%2By9f%2FwRboYPJqsXMnaTksNFt6zho9QULPBmtbE7FRk%2F8gqIjH23yuW0Kkc%2Bwq7HIQMLBimog9FYHE9%2FF9%2FcI0dFlp4l2diOF5w5C5OzEBSqsih6H%2Bl2m2ZeRdxyJ7KYn2XSyNwfYECSBfaERpalgdlttx9elyxg%2FIHVksTdbNZTVvE2WDB2Tyr7z9VHsYpv6qUriPXj01Q%2B2qybefQj9nS&X-Amz-Signature=57cbdc85f602ae4018c102a7c1ac0fc2b295ec3fbb29faa6bd153c005aa37b83&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4SC4CG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGfkFW0lEMDxFrPt5TlQB4n4DrCoJJiyPF1i1DTxrqpfAiBTybHhhwxE71E11j%2BajnHmmo0xOslXYxcpY%2FnpiOQZtyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMILzwpq6SoD5rcT0iKtwD%2B62XcAjB97DJ18aFo2dA4BlWdmKEV3N1R6Q3UAVghlpBT9GKooWrjWfIkH5yRYvLRNRjhkqbPI1EoaA8j0UgdEe4qo7ygFz4q22mZGVlvXAUMV1kzbjtgp2df3MYH6s%2FmNs%2Bycgh2EFtTXmNzBkRel0SahO%2FvVQi6oCXfiZm4P2aXEmWVj9TsoNJR%2BY7jrboQSVCWrPmKRW4YqKoCCcBeDgaTrQsETi8w5BVMnTQRYBakTxLc2QsLPEjWNRQoFZenbpsyqdUDzxBW2IA9PNh07KFrcYh5s5R%2FeIFCA7Z5uBS9v1XQrpWlYRcBdNleQHdIf8xlihdO7CsmRa5szTDxSpg4w6illNE4lCn1nzOF7uOjBrt4d6FMgnLBNTPUAEXDG0TKSVmakgBW9N4%2BCu%2FOsm7mHoPFmi9XXUmT15Hlxzik6lrEx%2FFRQHZpB4qLvLTPJigTAXaY5EnmqB4UDBjv5DT2q8U8qmcTVLdotCWo8hyCmk3rFBMS85ncqN%2Br5pauFmAbnqcQeHM26vN%2B1x8FGmq9kHT749csme3JqzrtuDDCsS9VBO9mhUSg%2FQZ96I9e1DMVQJjfPxKiWHwC9B078RNGS7uJF7sVEbh9e3%2FNnqHQZ2LpsR7QPGKwIkwkcaYvQY6pgEkw6B2xe%2By9f%2FwRboYPJqsXMnaTksNFt6zho9QULPBmtbE7FRk%2F8gqIjH23yuW0Kkc%2Bwq7HIQMLBimog9FYHE9%2FF9%2FcI0dFlp4l2diOF5w5C5OzEBSqsih6H%2Bl2m2ZeRdxyJ7KYn2XSyNwfYECSBfaERpalgdlttx9elyxg%2FIHVksTdbNZTVvE2WDB2Tyr7z9VHsYpv6qUriPXj01Q%2B2qybefQj9nS&X-Amz-Signature=bc0e574190ffafe806dd448388b98466777cfeba5f107bf29814a68179d7b901&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
