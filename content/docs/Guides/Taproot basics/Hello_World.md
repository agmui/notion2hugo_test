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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM3AJMM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGow1z46TLMJmGINKuhCeHjtFJVgpjkW7f6XMg1huUXnAiEA8gWCDCmwn7vYTBhseCavUwBI9cpA%2FgfIpoJLNZVY2h4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg2KuW0kKNAMr0BSrcA7xKPtnYvSWRTSjLg9h4g8GzxKSD%2BA4cqFOGGd1wuZvkBMXvTQDx5c1M7YRYVqeWrr8T2pBHBM54IO1FxMTiNKDFDmOawU7G3vBBmQH9olIqRQapdrfoZiqskRZsHcOQumz5gJUni74SpVcAftw5p8tLZBd9S5NFlYa%2Fm4uPtiWyX1gOEluh7AgqQqHBvM1uzOAK0KScAPQbrSvw5V7o%2FHsv25CFi6C9JCi%2FGJPaE2XqiLQZ8oJj1cFHNP34RylarJK%2BElIW9lKGnhqaGm2LGuZli8NaPkm6aA9io29WJkQnlid5yIW127xBugOIK532hZ1I9knAq8gE7%2BbxguljmAQnq893%2BEOGwiq5qqBQRt8hUa0U3ivLEKUICM2lX0otXkYTxL4wVXgAzuDM3D17%2FWxfv1Alxtj35o%2FXUNOqIZSQ17X%2B7NXrvNROIm7Dh4ma%2FZ2wqnWOAb9oWaYM9M5eDG7%2FOijY2d9RjRTZqfai4rjOMUg%2BBxRxLeOYu0v3diPnxlmf5Jp3CTxeIqqE7Dj1SCXVmBDHmqNlLkBlGBavLSTycPl2nt6zG1hHvWBfjf5W%2BWtri3CZ2Ir%2BTSiDgjQiW31LxbnQu6X6yEJJK7MLVTOWSbXE3QXFAB4Elu6RMIrd%2FrwGOqUB%2B6rh9GzZLOSYDJkLL%2FBEQttquJ8ziEMXwEuDvUcBuBZcayXxg7Zn6xpAFzqzzepWBV%2FgMtyP9CkzRcjvXcqrNxMSojmUDS%2Bo6YGARArHrucqkiMyGDwLK9g0PAOse0oYi8gy%2BgfONdMRDyjNpQdBgJafWtWsY3SEPGj4%2Fc3Rz3R3YWYFP3gfnI5vzCurPYdl5wTSyxcfOfnXwfnQowCGn3wfeP5U&X-Amz-Signature=4d8cad5186f5c11e2df26bcd0c6fdebd7470d57705de9a833ccb58423a107e80&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM3AJMM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGow1z46TLMJmGINKuhCeHjtFJVgpjkW7f6XMg1huUXnAiEA8gWCDCmwn7vYTBhseCavUwBI9cpA%2FgfIpoJLNZVY2h4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvg2KuW0kKNAMr0BSrcA7xKPtnYvSWRTSjLg9h4g8GzxKSD%2BA4cqFOGGd1wuZvkBMXvTQDx5c1M7YRYVqeWrr8T2pBHBM54IO1FxMTiNKDFDmOawU7G3vBBmQH9olIqRQapdrfoZiqskRZsHcOQumz5gJUni74SpVcAftw5p8tLZBd9S5NFlYa%2Fm4uPtiWyX1gOEluh7AgqQqHBvM1uzOAK0KScAPQbrSvw5V7o%2FHsv25CFi6C9JCi%2FGJPaE2XqiLQZ8oJj1cFHNP34RylarJK%2BElIW9lKGnhqaGm2LGuZli8NaPkm6aA9io29WJkQnlid5yIW127xBugOIK532hZ1I9knAq8gE7%2BbxguljmAQnq893%2BEOGwiq5qqBQRt8hUa0U3ivLEKUICM2lX0otXkYTxL4wVXgAzuDM3D17%2FWxfv1Alxtj35o%2FXUNOqIZSQ17X%2B7NXrvNROIm7Dh4ma%2FZ2wqnWOAb9oWaYM9M5eDG7%2FOijY2d9RjRTZqfai4rjOMUg%2BBxRxLeOYu0v3diPnxlmf5Jp3CTxeIqqE7Dj1SCXVmBDHmqNlLkBlGBavLSTycPl2nt6zG1hHvWBfjf5W%2BWtri3CZ2Ir%2BTSiDgjQiW31LxbnQu6X6yEJJK7MLVTOWSbXE3QXFAB4Elu6RMIrd%2FrwGOqUB%2B6rh9GzZLOSYDJkLL%2FBEQttquJ8ziEMXwEuDvUcBuBZcayXxg7Zn6xpAFzqzzepWBV%2FgMtyP9CkzRcjvXcqrNxMSojmUDS%2Bo6YGARArHrucqkiMyGDwLK9g0PAOse0oYi8gy%2BgfONdMRDyjNpQdBgJafWtWsY3SEPGj4%2Fc3Rz3R3YWYFP3gfnI5vzCurPYdl5wTSyxcfOfnXwfnQowCGn3wfeP5U&X-Amz-Signature=c89bb8c32e25feed3ddebe8a167f16a51f1038f4c841ebc0d87cab6a1765083b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
