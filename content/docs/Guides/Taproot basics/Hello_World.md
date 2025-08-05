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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BXFSX5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEZLXiY2qUHlXXVumLrzPAUkgNO%2Fm5jxBLUdHOZG61u%2FAiEA8vIQbzQR%2BNJeaDGXmTbC7B3aVXobMi9JswFaxXTMQwsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDE1BLV1km5AmUx72qSrcA6aBYxB%2F2WLLJIzEclxGI%2BwvQ4x1W1sIopdYRJu4KYtzzHxRoCRmQrtzBlZVBrd3tcMk5Y1OZFx7tlVPx%2F4RhTckfeNFFXXu2AZSpPtmthTY7u8kizmseqyB%2FBizvra3w5FFzCGc6LBIWxnUnUsii%2BkKqsfT2aJfIrdGYZWDvpl3SGq5fymlKloRavRrzHT3wOotrNFWvcS42Ylssd04b9%2F9ZT3EKbg7K2zX8dvkyKvibKrPVB3m0m1dRyTmadDVsaBi9FFlHT0%2BRJ7Z%2BF%2BiEQ94MpPKcs9cq62YvduQGOQ5bX8B4ItqgN68TsbFSFJC9TOVT1ha68R26KcGhmfpf%2B2iOA22b9SZj30nbDSG%2F63jf8AUmwo6WosYLFpJ3D20gC6G9wRhaiV2jBPHIDjEYw8fuApA8j9fez%2F4ZyIQZfB9AiRoGIgZxtJrz0UkwxZU5ZsDbCkhX6T3SuCTumB4ZA5ng7%2F%2Bnksak4yQBmWivo%2B5VLrZ3AUn5ROMhcjTag4%2F1J8RuHNCxGVBgUOjcbpKnBXEhrbDRJ7I%2FPCkYnGcBDiIekeRMrGBOa2G8NYLJI5jXzK%2F7W6jv59wq2Bk1No3vTrXidgxAcBQwgsxhhLJJFf6%2FO3WUmGngOfH8oduMOTzxMQGOqUBsJDwEIw7pUupC3tpgyQGoMLc5iW55Vnh9WUGX9ySaWsHUaKmM3XMQiOH3VZPPX7zjzgopyRXJ1Jf6JaykHx9PQrqt8n7K9slhuMwiVx4%2F35OAnKhIsLBIrXuPAulXt3h%2B3leOQocZoxCAGGhCp8sC9n8M3GOoOdTo3qq9WY2MRMLyGdEgIEXmQ6j2MzFmL%2BNmeCjbaUCKEPCx49Ka1vlTPZv%2BSOO&X-Amz-Signature=f87266ba38b43d69bc3906ce175820e76cedde9e116ddff95d184fb7e878b144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BXFSX5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEZLXiY2qUHlXXVumLrzPAUkgNO%2Fm5jxBLUdHOZG61u%2FAiEA8vIQbzQR%2BNJeaDGXmTbC7B3aVXobMi9JswFaxXTMQwsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDE1BLV1km5AmUx72qSrcA6aBYxB%2F2WLLJIzEclxGI%2BwvQ4x1W1sIopdYRJu4KYtzzHxRoCRmQrtzBlZVBrd3tcMk5Y1OZFx7tlVPx%2F4RhTckfeNFFXXu2AZSpPtmthTY7u8kizmseqyB%2FBizvra3w5FFzCGc6LBIWxnUnUsii%2BkKqsfT2aJfIrdGYZWDvpl3SGq5fymlKloRavRrzHT3wOotrNFWvcS42Ylssd04b9%2F9ZT3EKbg7K2zX8dvkyKvibKrPVB3m0m1dRyTmadDVsaBi9FFlHT0%2BRJ7Z%2BF%2BiEQ94MpPKcs9cq62YvduQGOQ5bX8B4ItqgN68TsbFSFJC9TOVT1ha68R26KcGhmfpf%2B2iOA22b9SZj30nbDSG%2F63jf8AUmwo6WosYLFpJ3D20gC6G9wRhaiV2jBPHIDjEYw8fuApA8j9fez%2F4ZyIQZfB9AiRoGIgZxtJrz0UkwxZU5ZsDbCkhX6T3SuCTumB4ZA5ng7%2F%2Bnksak4yQBmWivo%2B5VLrZ3AUn5ROMhcjTag4%2F1J8RuHNCxGVBgUOjcbpKnBXEhrbDRJ7I%2FPCkYnGcBDiIekeRMrGBOa2G8NYLJI5jXzK%2F7W6jv59wq2Bk1No3vTrXidgxAcBQwgsxhhLJJFf6%2FO3WUmGngOfH8oduMOTzxMQGOqUBsJDwEIw7pUupC3tpgyQGoMLc5iW55Vnh9WUGX9ySaWsHUaKmM3XMQiOH3VZPPX7zjzgopyRXJ1Jf6JaykHx9PQrqt8n7K9slhuMwiVx4%2F35OAnKhIsLBIrXuPAulXt3h%2B3leOQocZoxCAGGhCp8sC9n8M3GOoOdTo3qq9WY2MRMLyGdEgIEXmQ6j2MzFmL%2BNmeCjbaUCKEPCx49Ka1vlTPZv%2BSOO&X-Amz-Signature=12241d20e6d2d5d3fc09a0fd043d1db9fd54498c2d7720e962d0791772c17f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
