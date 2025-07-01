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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3TNRXI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAS9dqC%2F%2FOyslLwDtQK1sDR%2BWOD0AhULCxSRg7x3mLCOAiBZc2GaR2Yusfhbhpe%2BNe18NLGfIxyFtcGQr5vKdsjr9iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRvMWbhINWHM2VACMKtwD2VcfP0km1uIFmF3LrRjujlyEzeY7%2FqsvOCGsKtY%2BZ7imGcl4fMqwjV0kUa6dBeoHEJpiMUHBaQL%2FD70h9yamYHbYjKcUEXQnRRqisKxxN94uRtVPFOxCRiMgrBk9WrDsLPqnMjPZ8f3RaA3uptPdfea3%2FZyUqBWAJUG7C7ik0hDQnmBfcmg7bXmam5A4cFsJtJN2ZGhTuLOAiK51Rx2fFrr7PCQNSQnDUcsW1LPw3a1ao3Q43i0GCcMxI7vjMdF7mCFgNGYQo084Hmgr34AzHhxl1deZdFH8p9ZtIooUmR6K%2Bwd073NtVfKSc5l%2FVpzfDytoDxOp03kSYURb%2FJ6sKEniiLGmRdU7BTmwe9nULkjD82DlHeX4%2BLut4hZ5MK4dNndLSrIneFt%2BVKLyXpzHaOcTd3Oa6KoWkqYSAZ22VEWRd3p8pPbHtDmJ9oe0nhMZSvdpDS2JDwQMm0Aw6gilPghPjspHYF7Cqjf4PLLdkortTbXAnZuLROzMp6o40rSMrDXPlf6ePzuqSjW91Aq2lKeVtNsyp16m1806GO5uOXkfHGYBtAUIw3%2FtnqloX6WYqi%2BoJF7Sem4HWKDO0g4MXfRnH%2F%2B2166YXnA2z7sge9QkXgefwUsvJTp0F6Iw%2B8OQwwY6pgHm381wpF8Qlrirf%2FkySNSRXl6yw9DrVW1SyD5WIS3bFRaJzRJs%2Blu5a7xfVJEjGwo7NHwcqa2LzCorXb1bN0A1BeTsxtZNaQT4CAI9zpt0%2F1aWARgIMcovsleoTb1k7J0LU88KYyZfYSXlC1qp9Ur0Mr87ZEyYxueNwhbxT13b8TOHhCwRk5MUtp8ykH5BaC5FpADQ2%2B6fkLgJmjVJ79SmG74gBxZs&X-Amz-Signature=2061132343009476d7cb3d20283d9c8b2b8423f8cde9bd0c6d43b45843874d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3TNRXI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAS9dqC%2F%2FOyslLwDtQK1sDR%2BWOD0AhULCxSRg7x3mLCOAiBZc2GaR2Yusfhbhpe%2BNe18NLGfIxyFtcGQr5vKdsjr9iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRvMWbhINWHM2VACMKtwD2VcfP0km1uIFmF3LrRjujlyEzeY7%2FqsvOCGsKtY%2BZ7imGcl4fMqwjV0kUa6dBeoHEJpiMUHBaQL%2FD70h9yamYHbYjKcUEXQnRRqisKxxN94uRtVPFOxCRiMgrBk9WrDsLPqnMjPZ8f3RaA3uptPdfea3%2FZyUqBWAJUG7C7ik0hDQnmBfcmg7bXmam5A4cFsJtJN2ZGhTuLOAiK51Rx2fFrr7PCQNSQnDUcsW1LPw3a1ao3Q43i0GCcMxI7vjMdF7mCFgNGYQo084Hmgr34AzHhxl1deZdFH8p9ZtIooUmR6K%2Bwd073NtVfKSc5l%2FVpzfDytoDxOp03kSYURb%2FJ6sKEniiLGmRdU7BTmwe9nULkjD82DlHeX4%2BLut4hZ5MK4dNndLSrIneFt%2BVKLyXpzHaOcTd3Oa6KoWkqYSAZ22VEWRd3p8pPbHtDmJ9oe0nhMZSvdpDS2JDwQMm0Aw6gilPghPjspHYF7Cqjf4PLLdkortTbXAnZuLROzMp6o40rSMrDXPlf6ePzuqSjW91Aq2lKeVtNsyp16m1806GO5uOXkfHGYBtAUIw3%2FtnqloX6WYqi%2BoJF7Sem4HWKDO0g4MXfRnH%2F%2B2166YXnA2z7sge9QkXgefwUsvJTp0F6Iw%2B8OQwwY6pgHm381wpF8Qlrirf%2FkySNSRXl6yw9DrVW1SyD5WIS3bFRaJzRJs%2Blu5a7xfVJEjGwo7NHwcqa2LzCorXb1bN0A1BeTsxtZNaQT4CAI9zpt0%2F1aWARgIMcovsleoTb1k7J0LU88KYyZfYSXlC1qp9Ur0Mr87ZEyYxueNwhbxT13b8TOHhCwRk5MUtp8ykH5BaC5FpADQ2%2B6fkLgJmjVJ79SmG74gBxZs&X-Amz-Signature=87d2383fca5616b2de2287981a4ca3f50a13d0d1a8288619d020a843a29199d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
