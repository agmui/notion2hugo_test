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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XIWZPKL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFUEoBPbjIe%2BXzilqvi05Hm37X4ZwBaGXTFy9BQ%2B2cPfAiAHo31a3alRwJKyqGQpT8H4UpmORarq%2BEVvaLB4DUfxsSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMg1aLdmPP9EUNdWxnKtwDzp3a4Zq5D7f0gJnOEfeoR0DgLVj51V7ghhh6jGgBztdZiecFxRTzMWqErR5VuKRxVrLYAns9qKrzwZ8Lqy028Np2i0h1xmDyw6hiJKx0aC9AmcDH1v%2Bg6bS83g3r1KYMArwewwUwG9LIOk4YqCs5%2FYkvxIGKLkEes2FfQ3bmm3jKMWoUvRV22MvApclWxoCWtyvwiaZm9GnIoRBp8ZhDpXOjAY0OeWYRp7BpvVrQa9lA50E3Hr%2BKetqh643qotf8nT1cryTj4Qmly90xcupFFixJZ3iBdlDBFCtAZXnyLbjJNTy0XfuWwasPCoxceNQ2i2k5YZvqu9MW2aPVz%2B1%2F%2ByrlPhCQ6t%2Bvw08lj9DJscGiumZPnZVRrfqZRegs5yqlrz6DFVRB9k7e5Taej2hFac8oz2D9YLegBRTw1xx0ZoxyJUMTEo9i4aeCq2GMaenrJVLoEi350ZXeLtrIkfd0urvq3nFFWnJf5NNJKM4Fe9qg%2BrFx0wXnVdIM86Ri8wpTIs0uCdNcyfRoxvkuKBLsoMQhvO7PK2SH7OSm8li7n0OeZdvvKAdU%2F1OSr%2FDGApZZBPxy0rThGHmTOtRDLfww0fd8m8qnzbBoeGZgBEt40%2BdFPKievb3evErZ6NgwsLubwwY6pgEDO2FDtbRderB2jxS4GmtxACWx%2Fsh8KomQw%2B7Y38uWuRLVAJ5ElsXdaIupxleWQw1J0U3%2FbVwiosvG3%2FSvXgPQ3u30sV%2B8BN7pd6wtiSBMJcPU1cAUKLxrdRZ8Ue8pvvMDgQxWaO2eOTLdg5XCHoun2QS1HxjWGDf2Cudr0UhUH3UG0ZFIB8zFSogqs9v0aarkfL5FwRXLQKgUJyzkhlZZ28Ey%2FZrs&X-Amz-Signature=fbdeda77b46eac14ce618c55cc9765057f6360b907353fbf7de1e6a7004945c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XIWZPKL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFUEoBPbjIe%2BXzilqvi05Hm37X4ZwBaGXTFy9BQ%2B2cPfAiAHo31a3alRwJKyqGQpT8H4UpmORarq%2BEVvaLB4DUfxsSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMg1aLdmPP9EUNdWxnKtwDzp3a4Zq5D7f0gJnOEfeoR0DgLVj51V7ghhh6jGgBztdZiecFxRTzMWqErR5VuKRxVrLYAns9qKrzwZ8Lqy028Np2i0h1xmDyw6hiJKx0aC9AmcDH1v%2Bg6bS83g3r1KYMArwewwUwG9LIOk4YqCs5%2FYkvxIGKLkEes2FfQ3bmm3jKMWoUvRV22MvApclWxoCWtyvwiaZm9GnIoRBp8ZhDpXOjAY0OeWYRp7BpvVrQa9lA50E3Hr%2BKetqh643qotf8nT1cryTj4Qmly90xcupFFixJZ3iBdlDBFCtAZXnyLbjJNTy0XfuWwasPCoxceNQ2i2k5YZvqu9MW2aPVz%2B1%2F%2ByrlPhCQ6t%2Bvw08lj9DJscGiumZPnZVRrfqZRegs5yqlrz6DFVRB9k7e5Taej2hFac8oz2D9YLegBRTw1xx0ZoxyJUMTEo9i4aeCq2GMaenrJVLoEi350ZXeLtrIkfd0urvq3nFFWnJf5NNJKM4Fe9qg%2BrFx0wXnVdIM86Ri8wpTIs0uCdNcyfRoxvkuKBLsoMQhvO7PK2SH7OSm8li7n0OeZdvvKAdU%2F1OSr%2FDGApZZBPxy0rThGHmTOtRDLfww0fd8m8qnzbBoeGZgBEt40%2BdFPKievb3evErZ6NgwsLubwwY6pgEDO2FDtbRderB2jxS4GmtxACWx%2Fsh8KomQw%2B7Y38uWuRLVAJ5ElsXdaIupxleWQw1J0U3%2FbVwiosvG3%2FSvXgPQ3u30sV%2B8BN7pd6wtiSBMJcPU1cAUKLxrdRZ8Ue8pvvMDgQxWaO2eOTLdg5XCHoun2QS1HxjWGDf2Cudr0UhUH3UG0ZFIB8zFSogqs9v0aarkfL5FwRXLQKgUJyzkhlZZ28Ey%2FZrs&X-Amz-Signature=545f5b572d86847d287b9346bafe0da260159f9a58de0815014883b2acbc83c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
