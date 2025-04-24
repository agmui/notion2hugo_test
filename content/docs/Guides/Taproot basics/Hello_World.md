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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DDTIPJF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQChlQ8%2BNmuPuBDtxQm6utSajQG5OvQWrPbrXCop36A%2BPQIgfuPnX1sagvcCq7wnDkr22dLNZJ0qZQ8Ed8VUdWrLI5Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDoYrkz0leR13Xd7CircA8PGM6CIvL9iycEBdYviASzAVVnFZizB9BrYpSv2HpijUupVc3tdWvys2lvbmvGhmRVNyRL7Ur9zIQNJAwYZ9gADL37hUDyi9yuY6W%2Fvy0COzeq6t7QgoMA1c8Ipkbp2ksDZyoIg5OaxhWZ3TopFbDLtmyvi%2FsvZ3ul2ezZj4Rj5ATHb7JqTiS3rnytYFDSymj0SSuEqXm1MyQJ4NsoiIJtyHXh2Z%2BYjG4oKB3SfT2qRdlrTQj%2FxuMhmvTXbfkqrZGWNXFzilUxzuwFO4VOMtthSNxrVzcwla3aFionB12aBNugBXEcKNv%2F4vWr9QbcnQoBM2wZKCO%2FyQ0rxPYEscB%2BmIR0pjuvl4wtsMRCah0TepcBEClnh8MK975oO726qCNpgR9UuABbwbsARaX4TzL7%2Byi7Zu2TZlIXs8cosmtcnEvHIcKF7L3S%2BobMg8ECmdZEEdtIqhGJ8WeanGN3cqako584ftZ9rVdD2caOVGShGr7x%2F3rAQW%2FV4IXCCbtJD5TULBf%2FU24svz7O2QjrrgO1EKsBSjFFHQawla2IvOhuVAElR179MJesqKaEVJIhiBtt8eMu9cFSAoebn4u69Ncn3q5uf53fqeBYx%2Fz3qM1RwFlTUjIWGaifhghw%2BML3Op8AGOqUBnZK403oX0ipVTnpFVfxavzeMd%2BPoszjxpUIaHusyjE9agi%2BcCW%2F01lcwIs6qrQ8RyxDeGwGnyQp9%2FH%2FkR%2FdXT%2F8F7gb1tFpkdoWMt0sUVl%2BS685nzWiW%2BbwFgaeqsynqXxCdeqxMNt524eKAz1Wwzsyi85oTpwl3VtT8Oj4YzvN%2F%2BItH0pnR6S3pXe3gv5JgMw32CLjD2lKh8mlZJmLM3hX8OnEZ&X-Amz-Signature=d27e3532752b454c1137492af30722ed7092a2cd71f3de6f7a3abb7c6599e967&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DDTIPJF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQChlQ8%2BNmuPuBDtxQm6utSajQG5OvQWrPbrXCop36A%2BPQIgfuPnX1sagvcCq7wnDkr22dLNZJ0qZQ8Ed8VUdWrLI5Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDoYrkz0leR13Xd7CircA8PGM6CIvL9iycEBdYviASzAVVnFZizB9BrYpSv2HpijUupVc3tdWvys2lvbmvGhmRVNyRL7Ur9zIQNJAwYZ9gADL37hUDyi9yuY6W%2Fvy0COzeq6t7QgoMA1c8Ipkbp2ksDZyoIg5OaxhWZ3TopFbDLtmyvi%2FsvZ3ul2ezZj4Rj5ATHb7JqTiS3rnytYFDSymj0SSuEqXm1MyQJ4NsoiIJtyHXh2Z%2BYjG4oKB3SfT2qRdlrTQj%2FxuMhmvTXbfkqrZGWNXFzilUxzuwFO4VOMtthSNxrVzcwla3aFionB12aBNugBXEcKNv%2F4vWr9QbcnQoBM2wZKCO%2FyQ0rxPYEscB%2BmIR0pjuvl4wtsMRCah0TepcBEClnh8MK975oO726qCNpgR9UuABbwbsARaX4TzL7%2Byi7Zu2TZlIXs8cosmtcnEvHIcKF7L3S%2BobMg8ECmdZEEdtIqhGJ8WeanGN3cqako584ftZ9rVdD2caOVGShGr7x%2F3rAQW%2FV4IXCCbtJD5TULBf%2FU24svz7O2QjrrgO1EKsBSjFFHQawla2IvOhuVAElR179MJesqKaEVJIhiBtt8eMu9cFSAoebn4u69Ncn3q5uf53fqeBYx%2Fz3qM1RwFlTUjIWGaifhghw%2BML3Op8AGOqUBnZK403oX0ipVTnpFVfxavzeMd%2BPoszjxpUIaHusyjE9agi%2BcCW%2F01lcwIs6qrQ8RyxDeGwGnyQp9%2FH%2FkR%2FdXT%2F8F7gb1tFpkdoWMt0sUVl%2BS685nzWiW%2BbwFgaeqsynqXxCdeqxMNt524eKAz1Wwzsyi85oTpwl3VtT8Oj4YzvN%2F%2BItH0pnR6S3pXe3gv5JgMw32CLjD2lKh8mlZJmLM3hX8OnEZ&X-Amz-Signature=bba83806c536072c65d5c420d68759f4225e2451e262d4d7a5e32378a91a055e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
