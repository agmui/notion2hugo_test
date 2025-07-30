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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTVD7QS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASxTRN9yodZywqci9MTp8Hk%2B62YfRw%2BoWcc8t%2Fg1Oa4AiEA90yGNrXXPJ5Psr7OR%2FAEEapeAu3IkfJPnHbWeubbGSsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5g3zFNQsXXyrHy9ircA32%2FTwtoSh4Mc%2Bu7WRb9%2BJBCVSOFB46QQShn2xnG6Uv1dWDeXdN1387tnqi2gPLqs8XgyjnuD40k809Mi7uYmRinlmVJkceLwLubokC0kLwCh1zMgeiulpcHehhpjJxlRPQOVT5q%2BRalpnGwvgetARwHXL5vGanf5MHmTFDIBKQNbYJBNQnhXjS2TRP88lawZW%2Bpcx%2FKyglHGbW6zd9N0nv9nvxWnuLYBZZU4J90AibKKZTqksmGf1sXrtJIUcQfl73DZmv4uGVSLAPAysjZM5B71qooapCIg5WGJlA%2BYHZvT2T6NkrrJ98eBtdxHYnw6JJAeyo1tuufbKi9D7dRp9BGe%2FeF7eJnntddRMMBW7Z5JVA4C1tv0EVAwVwxvhm9bLbXkj84%2FGBeFAanX4Ps5bYUXNY30t%2FIoQhXJw7iYPdmzBC4rdRgGHPsI%2FLo0smvZrcM2ATOwo0sWw%2BPkmJsGPQ6qdA26g8GqRai8ykEa3zzKkEQvcXyI19a7bI%2B1MYiQlXk%2Fua3m2Y2bd4Ef%2Bk2%2BdM73L3CyKJc8cnm1d6j%2FEl1n7Lp5Vddsp%2FlzB%2BV2KfeC3fV%2BgXYNaeb5Ia11uA%2Fcj%2FDu5ZircofTGAsJ77k9lHwx2a70ZxMQWuDgaU%2FMKTwp8QGOqUBui9W0BV%2FqruLPWfadITrBdyHwp9kAKAQBQ53B6Dafg9TFJvc8ETDqPOFcTuyr6qu1pmMyEQapyELiLCNqTTRwjVCc1KF%2BXEkhvZE3JPW2G%2BR%2BCXSHzdsN5xyCqFLIolVz26Iyg8C4poJdAwL5vdIanRUUY2tDxVe6ezbW%2BOXFeM%2BO%2FRgTe9KMSBheyJ0U9R3UE1Y4Pluor%2Bds%2BE2fUCwGdxYEcfa&X-Amz-Signature=880607b933733634ce97dd26eb44688b5c0a38b83cb138bc0e1800f818436963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTVD7QS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASxTRN9yodZywqci9MTp8Hk%2B62YfRw%2BoWcc8t%2Fg1Oa4AiEA90yGNrXXPJ5Psr7OR%2FAEEapeAu3IkfJPnHbWeubbGSsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5g3zFNQsXXyrHy9ircA32%2FTwtoSh4Mc%2Bu7WRb9%2BJBCVSOFB46QQShn2xnG6Uv1dWDeXdN1387tnqi2gPLqs8XgyjnuD40k809Mi7uYmRinlmVJkceLwLubokC0kLwCh1zMgeiulpcHehhpjJxlRPQOVT5q%2BRalpnGwvgetARwHXL5vGanf5MHmTFDIBKQNbYJBNQnhXjS2TRP88lawZW%2Bpcx%2FKyglHGbW6zd9N0nv9nvxWnuLYBZZU4J90AibKKZTqksmGf1sXrtJIUcQfl73DZmv4uGVSLAPAysjZM5B71qooapCIg5WGJlA%2BYHZvT2T6NkrrJ98eBtdxHYnw6JJAeyo1tuufbKi9D7dRp9BGe%2FeF7eJnntddRMMBW7Z5JVA4C1tv0EVAwVwxvhm9bLbXkj84%2FGBeFAanX4Ps5bYUXNY30t%2FIoQhXJw7iYPdmzBC4rdRgGHPsI%2FLo0smvZrcM2ATOwo0sWw%2BPkmJsGPQ6qdA26g8GqRai8ykEa3zzKkEQvcXyI19a7bI%2B1MYiQlXk%2Fua3m2Y2bd4Ef%2Bk2%2BdM73L3CyKJc8cnm1d6j%2FEl1n7Lp5Vddsp%2FlzB%2BV2KfeC3fV%2BgXYNaeb5Ia11uA%2Fcj%2FDu5ZircofTGAsJ77k9lHwx2a70ZxMQWuDgaU%2FMKTwp8QGOqUBui9W0BV%2FqruLPWfadITrBdyHwp9kAKAQBQ53B6Dafg9TFJvc8ETDqPOFcTuyr6qu1pmMyEQapyELiLCNqTTRwjVCc1KF%2BXEkhvZE3JPW2G%2BR%2BCXSHzdsN5xyCqFLIolVz26Iyg8C4poJdAwL5vdIanRUUY2tDxVe6ezbW%2BOXFeM%2BO%2FRgTe9KMSBheyJ0U9R3UE1Y4Pluor%2Bds%2BE2fUCwGdxYEcfa&X-Amz-Signature=b3707482ab6a20b6fbf068a661391f507b1d65bfadc8e720b51b45605e756fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
