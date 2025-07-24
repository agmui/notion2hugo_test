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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYC4VIGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIERcpXPHCRmCwfngt%2F2MxzHmvVtsA6DoZvEnQCrSwQZMAiAqTBFHyIY6geU6GxPPmj7nl6FdPtqxRhNMybNxfzqzYyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM6Vml9qPDiSWprgRGKtwDTz2rIT5DhaBG6H%2FCKKKgtSgHJ3CjDrF2Kw5QndUB3BZbNyABoegrXn4P9xT%2F806%2BQs7wXA2vHjbLiAtgshIBphy5NbqXLItkGPmMfyXqroc1aVSDh%2FPFhakoxdk6Q%2FfEipyOglP41LMt7h6ePbMj5TnYA2vdmps6LtPZV4giTFvGX9yI3eqi8FmM58m%2FoGEEoLEfbYQfiG%2Bk9cZeopesMirG5BvWGR57VQGISxPDQVSpsGXOM6UqAxRGpwD2n1na%2Bu78Z%2FOe7kRCAhqdLiK7Pbg%2Bb9tGiMuHFXgzxZLDn%2FUjJ5Mo42YXXYXh5FZOBa6yQPEG%2B0Dhl0lSY3AIL3vlLLNlBiOtC%2Fr2HxAaNkWqfW0QR3oqOM9EU909KlKsKd4iM%2BHLVK%2FMn1w%2B4smtcO0U2ZvUWTcP4j88PrZABoi%2FLfc%2FAIpoiPLeSyVKzeN1V7HbwL7tvMzU7WVlM8AkYMeTMdLk4vVi14VDPabtuzWovK3pueIyGmZt7PzovCn7odvYZ6zC3MniM1CIQexDXqa7ldwGfBOLAgJcplULeAN353baUZ5ymB4qAvznwgpYyuRWbhzwVH07d7mQ3rTFQ8en6Xzph9pjfcUqgXZ%2FIcY4M8VS91GdsInOD5RASGkwztOJxAY6pgGFgwhqkG%2FDHbIAIxPw%2BeOZr8SnLzZQrr56y%2B8ZpEPhLQnzLcbr1xz%2Fjmu3phyVj0BpvwwsjjSLoy2VlyABqTslc37pgJOSGmUwsMgwzjgQGoYLTcK9giIGE5NnxbLYH3nG32STH1T1YEErJL68%2BBuJrgGycGm0GHc9c9e7YvwA1MISowWVFe0x917uPxFWfo82Ffda%2FNsTZ6NSPTj5OYZaqVnwqhP4&X-Amz-Signature=49584a235bc7b1f08a27f1617d9de570371312ffe1b798f976cc7c41df71337c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYC4VIGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIERcpXPHCRmCwfngt%2F2MxzHmvVtsA6DoZvEnQCrSwQZMAiAqTBFHyIY6geU6GxPPmj7nl6FdPtqxRhNMybNxfzqzYyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM6Vml9qPDiSWprgRGKtwDTz2rIT5DhaBG6H%2FCKKKgtSgHJ3CjDrF2Kw5QndUB3BZbNyABoegrXn4P9xT%2F806%2BQs7wXA2vHjbLiAtgshIBphy5NbqXLItkGPmMfyXqroc1aVSDh%2FPFhakoxdk6Q%2FfEipyOglP41LMt7h6ePbMj5TnYA2vdmps6LtPZV4giTFvGX9yI3eqi8FmM58m%2FoGEEoLEfbYQfiG%2Bk9cZeopesMirG5BvWGR57VQGISxPDQVSpsGXOM6UqAxRGpwD2n1na%2Bu78Z%2FOe7kRCAhqdLiK7Pbg%2Bb9tGiMuHFXgzxZLDn%2FUjJ5Mo42YXXYXh5FZOBa6yQPEG%2B0Dhl0lSY3AIL3vlLLNlBiOtC%2Fr2HxAaNkWqfW0QR3oqOM9EU909KlKsKd4iM%2BHLVK%2FMn1w%2B4smtcO0U2ZvUWTcP4j88PrZABoi%2FLfc%2FAIpoiPLeSyVKzeN1V7HbwL7tvMzU7WVlM8AkYMeTMdLk4vVi14VDPabtuzWovK3pueIyGmZt7PzovCn7odvYZ6zC3MniM1CIQexDXqa7ldwGfBOLAgJcplULeAN353baUZ5ymB4qAvznwgpYyuRWbhzwVH07d7mQ3rTFQ8en6Xzph9pjfcUqgXZ%2FIcY4M8VS91GdsInOD5RASGkwztOJxAY6pgGFgwhqkG%2FDHbIAIxPw%2BeOZr8SnLzZQrr56y%2B8ZpEPhLQnzLcbr1xz%2Fjmu3phyVj0BpvwwsjjSLoy2VlyABqTslc37pgJOSGmUwsMgwzjgQGoYLTcK9giIGE5NnxbLYH3nG32STH1T1YEErJL68%2BBuJrgGycGm0GHc9c9e7YvwA1MISowWVFe0x917uPxFWfo82Ffda%2FNsTZ6NSPTj5OYZaqVnwqhP4&X-Amz-Signature=f9567a37ae1f5d375afef212ffd9ed000a8ba7d5d20aad8ebbcd849bd3925dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
