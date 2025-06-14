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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GS25J7E%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIGY%2FYmogYj3jisFW0DwxzLMyenBRaHW6QLleZXDWSBjfAiBXEVOzWK72IYnlCbySSGkUNRIKHxsPYI8q9E3Bh%2FAp8yr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMJf3vue2LbtoMrMh2KtwD5tTNAHrg%2Bnqhhs6eFNp71ls5KmKXc3oWRQ%2F2tpDFfJghtze2G0JSuPKEiSrnEV4CijgUlmMZp%2BAzwymmGWhyqhS0J5z4KPGtocHW3bxU59l99z9XXwR7PR4pwDLCKbc8ntbodeJi5QS7Id2LYLUxFWLCUFnrcb4U%2B2mAAaOY10iz5hPhdQSDkkaUEmtGrjnvShSCFzeDTT8GUtyUYNcUCVn1%2FPzzvxZlh%2Ff13fW7QJbh2rlZt5aNL2WgSjU9iWUR5gKMg9iXsx2IXp%2BoV6NyfXHeOO2rs5DizpSlFM1CKM6zKrXfKo%2F3gXcqsBGgtRY7xcNia6oc1KN0H4A3j7PMxfT14gzcQvjrQr2RUEeNAfcybwYbxaRN5w7WfcTVWR2p1OitrrmaHrFCVZqMQAPf2%2FrI6aCVaWNMx%2FfwXfIbEGxkHzFiFqStU99NIilFv5Rr800W6hEGcr4frq1ofHKoGpVyh1k1rFXlBA2%2FitjDGzw0la10lkaKGvX0%2F9qSWGCrKHBd4vHyhq7jjtReR0x1hpzE5Q6CpDP9DnR9qJZpOoOFz5Ni25LL4YbtRlFOQU9Bx3TMB5zbCs%2FUqn0HJHTIrQ33a37ZU91LB5jHb5yVoQYENZyNyi9S%2FOdt4qgwwNuywgY6pgFncXnIA9aZzcsgXio%2F2jnmXug%2FSpshACnqqeeifYkmW6xQtWtekuEWEjKYdt3EZu0ZdnoMo9Wh639DyT8lfcjhjDcTk8v6Hk7TogCbR7EiEzz4Km8TKdx%2FwsxMb%2B0u2iwSoAGhz2COBbBA9zCSX3wYfsiXHKmU%2Fw0LYR6gFy%2BA7iJMP6ulurUbwXOmJvc74uLWx9vxE0Pdl1oR6%2FDkn9ynW971UtNz&X-Amz-Signature=c29ee0f56e03e348dde61f69e28c9e44b8fe6809c9939d4c86ecc17a6554b158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GS25J7E%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIGY%2FYmogYj3jisFW0DwxzLMyenBRaHW6QLleZXDWSBjfAiBXEVOzWK72IYnlCbySSGkUNRIKHxsPYI8q9E3Bh%2FAp8yr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMJf3vue2LbtoMrMh2KtwD5tTNAHrg%2Bnqhhs6eFNp71ls5KmKXc3oWRQ%2F2tpDFfJghtze2G0JSuPKEiSrnEV4CijgUlmMZp%2BAzwymmGWhyqhS0J5z4KPGtocHW3bxU59l99z9XXwR7PR4pwDLCKbc8ntbodeJi5QS7Id2LYLUxFWLCUFnrcb4U%2B2mAAaOY10iz5hPhdQSDkkaUEmtGrjnvShSCFzeDTT8GUtyUYNcUCVn1%2FPzzvxZlh%2Ff13fW7QJbh2rlZt5aNL2WgSjU9iWUR5gKMg9iXsx2IXp%2BoV6NyfXHeOO2rs5DizpSlFM1CKM6zKrXfKo%2F3gXcqsBGgtRY7xcNia6oc1KN0H4A3j7PMxfT14gzcQvjrQr2RUEeNAfcybwYbxaRN5w7WfcTVWR2p1OitrrmaHrFCVZqMQAPf2%2FrI6aCVaWNMx%2FfwXfIbEGxkHzFiFqStU99NIilFv5Rr800W6hEGcr4frq1ofHKoGpVyh1k1rFXlBA2%2FitjDGzw0la10lkaKGvX0%2F9qSWGCrKHBd4vHyhq7jjtReR0x1hpzE5Q6CpDP9DnR9qJZpOoOFz5Ni25LL4YbtRlFOQU9Bx3TMB5zbCs%2FUqn0HJHTIrQ33a37ZU91LB5jHb5yVoQYENZyNyi9S%2FOdt4qgwwNuywgY6pgFncXnIA9aZzcsgXio%2F2jnmXug%2FSpshACnqqeeifYkmW6xQtWtekuEWEjKYdt3EZu0ZdnoMo9Wh639DyT8lfcjhjDcTk8v6Hk7TogCbR7EiEzz4Km8TKdx%2FwsxMb%2B0u2iwSoAGhz2COBbBA9zCSX3wYfsiXHKmU%2Fw0LYR6gFy%2BA7iJMP6ulurUbwXOmJvc74uLWx9vxE0Pdl1oR6%2FDkn9ynW971UtNz&X-Amz-Signature=0bebd699cafe47f97ff3bc31e77668d94ad8edf2762883951d02ceca052e971c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
