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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXD3JZH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYZj%2B9mkSD5JGHUuL6%2BkBvXMNx9InBNhQyuevilbO27AiBMDf5VqfGzp8251VTcbnV5uI8xVQg8vmEvTJmc1bvgVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM5Nf4j2devgK8nR6jKtwDfHRm5zm4cprQvSiKZeOca1TLk3gBYwGFLgwWS28jyXPL5iybUpQAIWthrku6%2FwR31EFmM1WKINHtKVU9%2FNWJG9OrCXmJCpembTAxNGnFbRLmC7KWZn77RIWQs%2FeX6aGq5U7jDuJoCUOeI%2F17IgBkTMm303hoehEdpDFowkb%2BEdCqMl%2Fv0ApfZ%2FuFTPLZ2uqTQL9pkPhm%2B8uipXARJe5x644XcFMKL0jchl%2FL8i8TYsBk8JA0Q9ikWVJGWpcjpipsq%2F8RaDiJC3%2B99ycD4k7QlMX46fbFxokRFQ70JOwM5CVtntZRMa2aGepoE58yN5ZH5Gw0pQTr0P2iLNBcLli%2Fx4Fz%2B%2Bvioz%2B04GV8wIG%2BcSjyL9i8898IeWrM4kPDkn%2BDLVNCkN2yK0oG4KLiXfnR4UxjniFQFeAw4ZK2nsqvLMS%2FljUvH7rWkAt5EV37d2w5kWmyi788X%2Fnl1t8sfrHzFTNFGJCDNiI%2FjiOY7YeNrwq8kK7bThzxoPuqNbUT9VAFjcUyItXnQWVITW1R4PXr1lMeNK%2BUwv6FjfGKMXHD0pCsZZgHnupDFKMtbLxwnv5VfIbyODFZD5nz5p8OB0e2yhZEdZEy1N4LdI9ixWI347whPVyIx9LxyodGLC8wjb7cvgY6pgEEwHOqUZQVIvXoA3pOfL3EouHu%2Bt89vjRe5GeRN0db%2B0DrDi8Grs3uAKyDjHP4%2Fpmdq%2FlYXUk99xD8Q%2BYGL6IOYc0lhUCbmD%2Fjp0QOyna9WxvXrVjR3ZfQHs55Sot8orXuC806GJPXKKxBQp0fZhLV%2FP0%2BtDCJyL5yF%2FFKodC5MXjXeCGTz4srgmmwCcpEhNc%2BVOE2t8qFgVaiScBzx%2BJ%2B8JhFFEjX&X-Amz-Signature=c1d325a9f0762713e40988bac502af1310849786b54fa5dcc617a45d482b7f10&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXD3JZH3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYZj%2B9mkSD5JGHUuL6%2BkBvXMNx9InBNhQyuevilbO27AiBMDf5VqfGzp8251VTcbnV5uI8xVQg8vmEvTJmc1bvgVyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM5Nf4j2devgK8nR6jKtwDfHRm5zm4cprQvSiKZeOca1TLk3gBYwGFLgwWS28jyXPL5iybUpQAIWthrku6%2FwR31EFmM1WKINHtKVU9%2FNWJG9OrCXmJCpembTAxNGnFbRLmC7KWZn77RIWQs%2FeX6aGq5U7jDuJoCUOeI%2F17IgBkTMm303hoehEdpDFowkb%2BEdCqMl%2Fv0ApfZ%2FuFTPLZ2uqTQL9pkPhm%2B8uipXARJe5x644XcFMKL0jchl%2FL8i8TYsBk8JA0Q9ikWVJGWpcjpipsq%2F8RaDiJC3%2B99ycD4k7QlMX46fbFxokRFQ70JOwM5CVtntZRMa2aGepoE58yN5ZH5Gw0pQTr0P2iLNBcLli%2Fx4Fz%2B%2Bvioz%2B04GV8wIG%2BcSjyL9i8898IeWrM4kPDkn%2BDLVNCkN2yK0oG4KLiXfnR4UxjniFQFeAw4ZK2nsqvLMS%2FljUvH7rWkAt5EV37d2w5kWmyi788X%2Fnl1t8sfrHzFTNFGJCDNiI%2FjiOY7YeNrwq8kK7bThzxoPuqNbUT9VAFjcUyItXnQWVITW1R4PXr1lMeNK%2BUwv6FjfGKMXHD0pCsZZgHnupDFKMtbLxwnv5VfIbyODFZD5nz5p8OB0e2yhZEdZEy1N4LdI9ixWI347whPVyIx9LxyodGLC8wjb7cvgY6pgEEwHOqUZQVIvXoA3pOfL3EouHu%2Bt89vjRe5GeRN0db%2B0DrDi8Grs3uAKyDjHP4%2Fpmdq%2FlYXUk99xD8Q%2BYGL6IOYc0lhUCbmD%2Fjp0QOyna9WxvXrVjR3ZfQHs55Sot8orXuC806GJPXKKxBQp0fZhLV%2FP0%2BtDCJyL5yF%2FFKodC5MXjXeCGTz4srgmmwCcpEhNc%2BVOE2t8qFgVaiScBzx%2BJ%2B8JhFFEjX&X-Amz-Signature=897b4e1b93d96bac13ca102a83686b7242e03952a6dd467768d41d7647510ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
