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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=5ad887b7895c1edaef4530b133ee467c8e017c2c61e80bb91950fc5e3f002ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=4055de6e44e3e575c26299f2813f21be6faf043f8a4f3883aebbc6c4e8cc0146&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
