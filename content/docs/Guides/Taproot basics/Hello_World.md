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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXC3C6PE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCulDPTkH1eXHGKOnsei%2F3IcQnb8VHg4fJD9i9k0ClfQQIhAIZP2V1B6qTbbEIUkY1%2BZoSieIxnhlMPwqoCOxko3JPMKv8DCEYQABoMNjM3NDIzMTgzODA1IgyZ28JnWmmX81zAsSUq3AP1DltmlasMHWBVittztsSoAp8syjLmZycDa5QpaSVG5sjZha7OxggEpGM0ylyh6Hq1zP2%2Bs0MZyUel2N4ZmkG%2BDC5wAtlvu7zRdO3ouj6l0c4clVqECDh2Kt7oma4KCsiOMVVD%2FGDnQY%2BoKYnxOdyzjnIpY1L2KVRbDMYChKdxtn%2BTHWWfv5tUOPB3QTl8UdjoSFGShDunE0QOPI%2Bxstx4R1LZ9eZtAZL963Swa1Oi948iUyevU%2F2AsV7NYEL3urA%2FaKipzxRNYa9kCFolaa7uhjRteUsbI4HHweiJH6sRzelCSpr55jryLP%2Be1EDoGBQH0x1%2BAkqKWFNK%2Btcxa4DM6c2FeTtyG5jj7iijZ0xOZ1RwRnEgfqRjDHABzkBOyvENdhazSDaesHXIQo9owy2ezMTEQOfwcp9XEUUIobkhvLx0jH1oPtgiZhbHQYvNN13mkEzPi9R5MJ0zcWdQpA49IKgyru0OhySfWtFCojAv1mwqOWzFHouXYudcV0pkOGcu50Xbaj%2F5%2FtyTxgRXulZn5kpGAGdaHwIAAV4nOS4mWZm0ryopgj0GekYiTxVhzYr%2F5u1mcw9l8LortiLOBlcICFj8j04Y3mG6dW2zjeAHlXonN5DidyVGl9pbYjCEprPABjqkAepCksq52MjacjGQUd7IFkyO%2BateMgVK%2BsD%2BV1mJ4mW3l1sqCQr4b4Ut7ymg113fX7hFPlNGCDY9iOOXwtXLwqk7S8okGixJFAd1GmiKKrDXMEsOGgxIJ7ARCCb18CgZGyD1K%2F4CTAP6NoGXw459JZsf9Y1x0xt0RC3harPwvq7lzL9JukHsj2SiTOnZEpGcJiZuNcm8oOaio1uQf15qi5EaxRK0&X-Amz-Signature=77050ccb99bd3e93dc5c28e97722187f0f6110d46c2a3612ae22c914fe48c615&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXC3C6PE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCulDPTkH1eXHGKOnsei%2F3IcQnb8VHg4fJD9i9k0ClfQQIhAIZP2V1B6qTbbEIUkY1%2BZoSieIxnhlMPwqoCOxko3JPMKv8DCEYQABoMNjM3NDIzMTgzODA1IgyZ28JnWmmX81zAsSUq3AP1DltmlasMHWBVittztsSoAp8syjLmZycDa5QpaSVG5sjZha7OxggEpGM0ylyh6Hq1zP2%2Bs0MZyUel2N4ZmkG%2BDC5wAtlvu7zRdO3ouj6l0c4clVqECDh2Kt7oma4KCsiOMVVD%2FGDnQY%2BoKYnxOdyzjnIpY1L2KVRbDMYChKdxtn%2BTHWWfv5tUOPB3QTl8UdjoSFGShDunE0QOPI%2Bxstx4R1LZ9eZtAZL963Swa1Oi948iUyevU%2F2AsV7NYEL3urA%2FaKipzxRNYa9kCFolaa7uhjRteUsbI4HHweiJH6sRzelCSpr55jryLP%2Be1EDoGBQH0x1%2BAkqKWFNK%2Btcxa4DM6c2FeTtyG5jj7iijZ0xOZ1RwRnEgfqRjDHABzkBOyvENdhazSDaesHXIQo9owy2ezMTEQOfwcp9XEUUIobkhvLx0jH1oPtgiZhbHQYvNN13mkEzPi9R5MJ0zcWdQpA49IKgyru0OhySfWtFCojAv1mwqOWzFHouXYudcV0pkOGcu50Xbaj%2F5%2FtyTxgRXulZn5kpGAGdaHwIAAV4nOS4mWZm0ryopgj0GekYiTxVhzYr%2F5u1mcw9l8LortiLOBlcICFj8j04Y3mG6dW2zjeAHlXonN5DidyVGl9pbYjCEprPABjqkAepCksq52MjacjGQUd7IFkyO%2BateMgVK%2BsD%2BV1mJ4mW3l1sqCQr4b4Ut7ymg113fX7hFPlNGCDY9iOOXwtXLwqk7S8okGixJFAd1GmiKKrDXMEsOGgxIJ7ARCCb18CgZGyD1K%2F4CTAP6NoGXw459JZsf9Y1x0xt0RC3harPwvq7lzL9JukHsj2SiTOnZEpGcJiZuNcm8oOaio1uQf15qi5EaxRK0&X-Amz-Signature=d77aaca055fca41bf3373f58082f9c7c2ee1c2219565fb6c6ceaa524fd3e5070&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
