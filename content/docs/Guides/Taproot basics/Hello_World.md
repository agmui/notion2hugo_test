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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5DVRX2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCH7HELnsenWgh04Ev6JV%2F%2BdUvQ7vmE5pnoT7KZL8aAUAIhAJovTGeLPgDtO%2FWH%2FwuxDivjgwTHBYl2X3U3KsZXWFgPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzMlnftcjbvnNKt7tcq3AMTwnB5edIF6mkGD%2FbLNlGMFakmbT%2B0sqFtz356IG41CiCW91Hl%2Bx9VGxOK5hIInIPkemESsLDnOhIG5iYsx1MUnC%2F%2BL8AwbExHcFx1IIwxS6%2FI6YV1uBhGviwpl8Dp3ftCLM2W3tT7WiuOXN3PGg5a2i6zNDpgFW98fgoKBcGJBFrIbaEPAyyn1Ok63fW1tGofGAP%2Bt84ic8dJ0q50nPXJOnej1lt%2B2ERekuHOHdVlxslNPtwWjkiG8YhJ5Lmg0P1hCT7KNlL9zWS3uiwOB7H7Iiit1Hk9w1pO6DuGlOmRlSqEVTdQ%2BlpygZ4mQReSSpAKr7LoGZlylCDZjAGN%2F81FRO6rUUcUGdG2A52nYoCJkzryJmXPcgY7Z%2Bb%2FrabzWxxiGRQAF%2Bob%2FLcSF9gFHu%2BncdBtVfoOtw1jal3zaON3uw7Cf0kwHoWx3QCsNjZp%2FqCrw93Qv5lkU1RYwEP0xo0dNI6W5c4Sovn3PxAnGXSVo9hH37QvsJAvd3JcApURZtuV1UFbl3aoe4cvEck0nbL%2B1w4PPSO3ZvNb%2FyRemIKgTnu%2F65N3q7JlXztIjv%2Bxb0gQzX7utLAVB8b8%2Fy3w8LAPuCDs%2F28wy5l22KE1V1Y8EjlvbYNtH2lQFCs70jDVvI7EBjqkAUNm3syxIrO2m4Dqmj2q8dctt7sqKK9PO9x4ULEXTwOfL%2BkWUphjgJGbKPhbWD5ZnCEPwK9vJ9yGsVezNcBbcdPE34WdUTcfwLdqDkD54yxBCmIX2MNb0hmGCKe0BZ8J1GGdUhAmQKlkVHUoKWacUdISVZIBuaY4070BAh7lPV7ndjw3TmvLxyY1jEt6ZJo2sC10rlRm5J1jiSmaM0xpifih4tiV&X-Amz-Signature=b0313b69d49e971dddf8d35d0e80e7eb996f3613591b32b3cd0de69076975894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5DVRX2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCH7HELnsenWgh04Ev6JV%2F%2BdUvQ7vmE5pnoT7KZL8aAUAIhAJovTGeLPgDtO%2FWH%2FwuxDivjgwTHBYl2X3U3KsZXWFgPKv8DCEgQABoMNjM3NDIzMTgzODA1IgzMlnftcjbvnNKt7tcq3AMTwnB5edIF6mkGD%2FbLNlGMFakmbT%2B0sqFtz356IG41CiCW91Hl%2Bx9VGxOK5hIInIPkemESsLDnOhIG5iYsx1MUnC%2F%2BL8AwbExHcFx1IIwxS6%2FI6YV1uBhGviwpl8Dp3ftCLM2W3tT7WiuOXN3PGg5a2i6zNDpgFW98fgoKBcGJBFrIbaEPAyyn1Ok63fW1tGofGAP%2Bt84ic8dJ0q50nPXJOnej1lt%2B2ERekuHOHdVlxslNPtwWjkiG8YhJ5Lmg0P1hCT7KNlL9zWS3uiwOB7H7Iiit1Hk9w1pO6DuGlOmRlSqEVTdQ%2BlpygZ4mQReSSpAKr7LoGZlylCDZjAGN%2F81FRO6rUUcUGdG2A52nYoCJkzryJmXPcgY7Z%2Bb%2FrabzWxxiGRQAF%2Bob%2FLcSF9gFHu%2BncdBtVfoOtw1jal3zaON3uw7Cf0kwHoWx3QCsNjZp%2FqCrw93Qv5lkU1RYwEP0xo0dNI6W5c4Sovn3PxAnGXSVo9hH37QvsJAvd3JcApURZtuV1UFbl3aoe4cvEck0nbL%2B1w4PPSO3ZvNb%2FyRemIKgTnu%2F65N3q7JlXztIjv%2Bxb0gQzX7utLAVB8b8%2Fy3w8LAPuCDs%2F28wy5l22KE1V1Y8EjlvbYNtH2lQFCs70jDVvI7EBjqkAUNm3syxIrO2m4Dqmj2q8dctt7sqKK9PO9x4ULEXTwOfL%2BkWUphjgJGbKPhbWD5ZnCEPwK9vJ9yGsVezNcBbcdPE34WdUTcfwLdqDkD54yxBCmIX2MNb0hmGCKe0BZ8J1GGdUhAmQKlkVHUoKWacUdISVZIBuaY4070BAh7lPV7ndjw3TmvLxyY1jEt6ZJo2sC10rlRm5J1jiSmaM0xpifih4tiV&X-Amz-Signature=064a5c8204b39f577eeebb9ef889d9a995d550898e80db74d68c4b0e515628cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
