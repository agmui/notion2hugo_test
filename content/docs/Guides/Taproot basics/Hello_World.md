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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDA4GCH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRdzsKXzg3h%2FNLPxbkRrSjDr3nTmF9Dd4rVcWTUFCweAiEA5Jp9BNK%2FXW9w5iOq8cazvhcNa%2FLVO9xMbmt9%2BMmiY5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNuQ%2BZp98afjBs4CircA6E9H2BCw0GdC7UJccQ3jaRNOeZB2KzRdIH0Yh72Gr44TqpjEH1tyVeVuFeQrVTe3%2FcJ0mDzJLQqyKVIDUp8s3LhD4LgvZ0x%2FSlSs3kPry%2B08T5O8NPfAw7%2BZn0gZ%2BW1ey9wv5q6Ccv1HQ1GL7fqWdEODcOxbkNaGeH8A3h03wxLRV%2FPlZqVHAGxHOLKkNUlCQX0i4Zs0DYG66gdLaGiKkYqjuSJmPoa%2B9qXIf68uj2DEHlE8n8eYYcYF5BEXQh2jW28fqmTWFQYcCJTzdmJ1Y%2BAJOpJ%2FyBIKAjZ1o7TQa0PPy2nPwr2KRv%2F87Gv3KmSZiphJdP1caeguXQBzW%2FW2FOrl9Y4513ynrlIRZtRYwt112Wcf%2Fuik359lPgFz6bwVxg5992HZkBacMSgKPZfE%2BbcqlB%2Bv24B0AGDrl1FBqClOWWwV6FmcP0Tbo%2BBtc9qPF08piI6S5TXOmrR%2Bcr%2FU00ZwBiwhFXF84cjMo8qkP2DJvWvi7EK2thf0rLhW%2FAiNSqiJ7GdPrue8qXkzVEyBa%2FxvlFcuO13MIPQWljM7NEuZE0iTzTfBvtFwZIfnKVxFTxEvUmUv7KBX6pAhbt0pYOQHqJydo2r2qok%2B9be%2FMyumL9b9hceadjkyu7lMOmx%2FcAGOqUBhjl%2BNpW9%2BqIDaf%2B%2BHSCoK28x7LmEw1rtzoCFG67cOF59sqfQNOTff77MP%2BGh3aTX46%2FUKFpIc5FfX51Am0cTRSZmQmokPqLEch2FwgTiLYtdlPQatNcwjNuzEta4QmAji0c2OigbNGAu%2FuR6tSmEjaeOPmuGyi4c6iWNou6ZSZ4Fbx5ylcesheNKhC0BO0p7Y5sYkPokHeYCRrhMByTlXSALe54m&X-Amz-Signature=ff42f5f4575e31c006f34bd7ad8b0a036fbab872c2e7ff5afc51b8acb8073a54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDA4GCH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRdzsKXzg3h%2FNLPxbkRrSjDr3nTmF9Dd4rVcWTUFCweAiEA5Jp9BNK%2FXW9w5iOq8cazvhcNa%2FLVO9xMbmt9%2BMmiY5UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNuQ%2BZp98afjBs4CircA6E9H2BCw0GdC7UJccQ3jaRNOeZB2KzRdIH0Yh72Gr44TqpjEH1tyVeVuFeQrVTe3%2FcJ0mDzJLQqyKVIDUp8s3LhD4LgvZ0x%2FSlSs3kPry%2B08T5O8NPfAw7%2BZn0gZ%2BW1ey9wv5q6Ccv1HQ1GL7fqWdEODcOxbkNaGeH8A3h03wxLRV%2FPlZqVHAGxHOLKkNUlCQX0i4Zs0DYG66gdLaGiKkYqjuSJmPoa%2B9qXIf68uj2DEHlE8n8eYYcYF5BEXQh2jW28fqmTWFQYcCJTzdmJ1Y%2BAJOpJ%2FyBIKAjZ1o7TQa0PPy2nPwr2KRv%2F87Gv3KmSZiphJdP1caeguXQBzW%2FW2FOrl9Y4513ynrlIRZtRYwt112Wcf%2Fuik359lPgFz6bwVxg5992HZkBacMSgKPZfE%2BbcqlB%2Bv24B0AGDrl1FBqClOWWwV6FmcP0Tbo%2BBtc9qPF08piI6S5TXOmrR%2Bcr%2FU00ZwBiwhFXF84cjMo8qkP2DJvWvi7EK2thf0rLhW%2FAiNSqiJ7GdPrue8qXkzVEyBa%2FxvlFcuO13MIPQWljM7NEuZE0iTzTfBvtFwZIfnKVxFTxEvUmUv7KBX6pAhbt0pYOQHqJydo2r2qok%2B9be%2FMyumL9b9hceadjkyu7lMOmx%2FcAGOqUBhjl%2BNpW9%2BqIDaf%2B%2BHSCoK28x7LmEw1rtzoCFG67cOF59sqfQNOTff77MP%2BGh3aTX46%2FUKFpIc5FfX51Am0cTRSZmQmokPqLEch2FwgTiLYtdlPQatNcwjNuzEta4QmAji0c2OigbNGAu%2FuR6tSmEjaeOPmuGyi4c6iWNou6ZSZ4Fbx5ylcesheNKhC0BO0p7Y5sYkPokHeYCRrhMByTlXSALe54m&X-Amz-Signature=fede81671e49a85fd43741fca81fe5d3cd0c7d90f17e9f2a1d334cdb2045cf08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
