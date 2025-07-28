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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJHFOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCRxNA%2FuvSfsgh1fyn%2Fabbr6bKkuDmm%2FMQcKfJbRKng8wIhAKG5EhYAsOTCLifNmXn%2Bylv6dycsze8ZQ9OTfc7hN2%2FTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0icQWO6KOCqF7%2B5Eq3ANQjrrZpnzTSnTt4pgObNWTrzt1UFVkqCydKf8ANT34R5tVQr6EWqTp%2BRhFDIhvF%2BNH1KESLACJW9yfY8FFypZpv4ei2IXOI%2BM4vdSHvmYIxNu6ORrtR4E%2FZd2bBzHSpBEmOx8caw2jJOKjBPIMUYpdESRIIxutEM9Sai1HQQ13JZiB0jWSHiEaczf2Qzk4uTGvUJMZecB%2BNwKItIhDLK2CYIVIG%2FjFwpmndFv9SsqN8jlPX0GPpO5a%2FCF0kEODPfHcrZ6FC93n%2BVXVZouNrVCBOaHXEkRvOUFpfQE%2BMdEKs%2B2SI%2Fr40nUgKlaRoXHa1wXYSEFXLGqewJCFnSz7ml50GiVv1YfBYn9dRW4HNx1blH2R3KrAv70uy6dgQvApJuWaTrYdSgki2EpnVquVzyYTKQ7gLzE%2BLtIv%2B5pktgxSRaWyCuEuf9auAXTj2VSM7ieUDcO2F225b9so36VMjpGsLPrXg7S3dHwiYnqBmUV5StI7oT0u08tmwsRBqbC9evMNgxFnk0YWhCFjG3zMupzobebYTbI%2BgN65dbi4uitekXfoVswGOimJDlB4sOHYTAIb6DvY4%2BaPi%2Fdvd3rBrN%2BDKbe0xJyf7PNHfnMsvrKOLvQLjj4XWF12eHugbDCP0p7EBjqkAfk3nl6lEW2jzgLyMCJHulBu89VLBXesxPvBUCjcCVYhgucJvBbnfEQxE%2FagxwSDSIo1PMUL4ntDGuPPwWypqAIjtskj5Oj2bHVrSXSGXyG0b%2BSrTaO5jRUJy6SNEei2UIW93mXtNiADs8M2xlbiQijlWazN5utLTa0qxBq9eON1Lw5fw%2BoTEM1hJPWxZVy670F5rbmnDF6f%2BHVaJIWXLIIji6Hk&X-Amz-Signature=8e324d3caad242d1718b4fae55ee8e77376a39ed02c18dbe17c6f43186386fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJHFOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCRxNA%2FuvSfsgh1fyn%2Fabbr6bKkuDmm%2FMQcKfJbRKng8wIhAKG5EhYAsOTCLifNmXn%2Bylv6dycsze8ZQ9OTfc7hN2%2FTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0icQWO6KOCqF7%2B5Eq3ANQjrrZpnzTSnTt4pgObNWTrzt1UFVkqCydKf8ANT34R5tVQr6EWqTp%2BRhFDIhvF%2BNH1KESLACJW9yfY8FFypZpv4ei2IXOI%2BM4vdSHvmYIxNu6ORrtR4E%2FZd2bBzHSpBEmOx8caw2jJOKjBPIMUYpdESRIIxutEM9Sai1HQQ13JZiB0jWSHiEaczf2Qzk4uTGvUJMZecB%2BNwKItIhDLK2CYIVIG%2FjFwpmndFv9SsqN8jlPX0GPpO5a%2FCF0kEODPfHcrZ6FC93n%2BVXVZouNrVCBOaHXEkRvOUFpfQE%2BMdEKs%2B2SI%2Fr40nUgKlaRoXHa1wXYSEFXLGqewJCFnSz7ml50GiVv1YfBYn9dRW4HNx1blH2R3KrAv70uy6dgQvApJuWaTrYdSgki2EpnVquVzyYTKQ7gLzE%2BLtIv%2B5pktgxSRaWyCuEuf9auAXTj2VSM7ieUDcO2F225b9so36VMjpGsLPrXg7S3dHwiYnqBmUV5StI7oT0u08tmwsRBqbC9evMNgxFnk0YWhCFjG3zMupzobebYTbI%2BgN65dbi4uitekXfoVswGOimJDlB4sOHYTAIb6DvY4%2BaPi%2Fdvd3rBrN%2BDKbe0xJyf7PNHfnMsvrKOLvQLjj4XWF12eHugbDCP0p7EBjqkAfk3nl6lEW2jzgLyMCJHulBu89VLBXesxPvBUCjcCVYhgucJvBbnfEQxE%2FagxwSDSIo1PMUL4ntDGuPPwWypqAIjtskj5Oj2bHVrSXSGXyG0b%2BSrTaO5jRUJy6SNEei2UIW93mXtNiADs8M2xlbiQijlWazN5utLTa0qxBq9eON1Lw5fw%2BoTEM1hJPWxZVy670F5rbmnDF6f%2BHVaJIWXLIIji6Hk&X-Amz-Signature=0a5fef0edda33322e490a185ac2d02b918d94eab4fa60f5bd7ddbb393551e73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
