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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD55NPM2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGCj6NCO5Krq2UNyKhPOKyzfbYFVt%2FOhFhhwIri2qtgmAiEAj4iJ%2BamZqx9gT7oqVqdUdruLXOQnHOvsALuNX7ZwPD0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuBMeMb%2BOzRPCJpxircA7ybMRIsfrtt0OWpTQqjaU%2FWV%2BQ8uI4ZfIY9maRr%2BBHDTUOxjWGfAGEOGtfpSMkvms4yzV%2F6RA1sHFSSFGwepcQwM5U5Sn4nwDH%2BGIUCMCQVmeB9VdE4srBzb6QvqHtqoaRKeLt1H1AUJCMqtBbcNWVpvLVJxDrnwrupWCZVW5SvQ8ZVyw7sqDHXmvYm5JfWe3qrfbaDiDcxbB602j7iI7et8QaJ14Cce5QGDpFBVAEEXoRjHSwuxP9GI6CdV6uuZrOTrVH2dbS9FoPcjxwkkL%2Bqq1QVpl4AGSBVZwRUReRPCQW1oWiZ8aSuELxRBvgh%2FDCjoKEKONmWq8Md39ZouRPOsczDV408mrozMaP1iGamIRx7wC%2BE2xJjlQlJFugQOGlkAesPtQpiv4VANI0sx5z0r3cwGXGhc5NuP9SRyPCIh1ea%2BnfR5xKPGTVGl7Ahpmcsj%2BOWsSeY%2Ff4O6syDVktrj2WoHdmc2ZYzUMRhuizS5jUMYw0O0udbTN0j8djuaFM0ypsQ2HeD4eSHygyaDKdMgdI0%2FF1azMD8Pnegl9r2eLQvuUYepEYjd8b6kKJb3Id35r2TdAkx%2BRY6gciLaG06ZkRpbrKM%2FOuSA1dRRLtPQ1DNrVclByNH1NfGMPnxn8QGOqUBwvMKuMgcQcG1TfgXhhBKeH571zyKpS%2B34J%2FVNrawLc78VBOqlWFgxfSXMRuHb0GiFyKt6wESpNc0i1tOmjF2ygLIGEAoGvq74CtRChND3kKU8tuX2sv6OfSwc0ZC3Hl%2F8k%2BIxHqnQWfnoUKLZ3hIUVUB9OmdCgqpvGfPJ%2FDY5cc5T5FYHtUQ3TRGOmbzGbdfdqWScn2MuBJBM%2BmF%2FhTB24XmY%2FQo&X-Amz-Signature=6b7872cbe3e2e0842aa52a82b480b68d02c11135ca59f76d1d02b37f40a335d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD55NPM2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGCj6NCO5Krq2UNyKhPOKyzfbYFVt%2FOhFhhwIri2qtgmAiEAj4iJ%2BamZqx9gT7oqVqdUdruLXOQnHOvsALuNX7ZwPD0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuBMeMb%2BOzRPCJpxircA7ybMRIsfrtt0OWpTQqjaU%2FWV%2BQ8uI4ZfIY9maRr%2BBHDTUOxjWGfAGEOGtfpSMkvms4yzV%2F6RA1sHFSSFGwepcQwM5U5Sn4nwDH%2BGIUCMCQVmeB9VdE4srBzb6QvqHtqoaRKeLt1H1AUJCMqtBbcNWVpvLVJxDrnwrupWCZVW5SvQ8ZVyw7sqDHXmvYm5JfWe3qrfbaDiDcxbB602j7iI7et8QaJ14Cce5QGDpFBVAEEXoRjHSwuxP9GI6CdV6uuZrOTrVH2dbS9FoPcjxwkkL%2Bqq1QVpl4AGSBVZwRUReRPCQW1oWiZ8aSuELxRBvgh%2FDCjoKEKONmWq8Md39ZouRPOsczDV408mrozMaP1iGamIRx7wC%2BE2xJjlQlJFugQOGlkAesPtQpiv4VANI0sx5z0r3cwGXGhc5NuP9SRyPCIh1ea%2BnfR5xKPGTVGl7Ahpmcsj%2BOWsSeY%2Ff4O6syDVktrj2WoHdmc2ZYzUMRhuizS5jUMYw0O0udbTN0j8djuaFM0ypsQ2HeD4eSHygyaDKdMgdI0%2FF1azMD8Pnegl9r2eLQvuUYepEYjd8b6kKJb3Id35r2TdAkx%2BRY6gciLaG06ZkRpbrKM%2FOuSA1dRRLtPQ1DNrVclByNH1NfGMPnxn8QGOqUBwvMKuMgcQcG1TfgXhhBKeH571zyKpS%2B34J%2FVNrawLc78VBOqlWFgxfSXMRuHb0GiFyKt6wESpNc0i1tOmjF2ygLIGEAoGvq74CtRChND3kKU8tuX2sv6OfSwc0ZC3Hl%2F8k%2BIxHqnQWfnoUKLZ3hIUVUB9OmdCgqpvGfPJ%2FDY5cc5T5FYHtUQ3TRGOmbzGbdfdqWScn2MuBJBM%2BmF%2FhTB24XmY%2FQo&X-Amz-Signature=9ecb9ec3efca019f8a7ef30207c0bd0ef46cce76cab7e274834126ea850056f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
