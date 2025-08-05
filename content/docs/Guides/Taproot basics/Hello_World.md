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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TA4XSPC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCLHKtKJcbpAKRzJxOpWHS0ElyAw9tOhbpTd1v5bRg0tQIgS%2FH4Ua8N09rmQtmHZaTEiAsEC7x39P7HVfqLnuf23igq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK%2B9FAQMUzOXLkvDPircA4quzMm6UDWiLGy6reObHfadC6YTCGKPre4VCxACXBX9pVqWfDqe8YzY88tgc2D9hbMdgD2zWKArUi%2BGpi2Zn%2FFknTHQRddbv1NxO2KGNCzir9HmLImWPezOaKaCrZbjePMJuVflYNysAVrIsyTT5jRSnmEAfneWKeouy0nN55LeHdzswsmq6I%2BS01U4sD1W9%2Bk%2BTSmvhQfzqadG8AQim07PIT3gJ2d4WYGPbd9Z9qhWaj6wI9nS33oHFGZkZOz4%2BJmjl14KOD2ZTNpBrsCPlHKGguHr9J4WGItE19ddKhTWN88lx0yn%2Bpm17e%2FRrK60hGSSNnOxKNq07bSqPQX2kPL4iK9jiFHOe%2BPZQpJQu%2Bx%2B0hOhaWPoGeMIUsu57MSXdKH6wCAAq%2F4rEqg5DHsxY9QQ66I52GEegW0I26BQyOXQAE8ff%2FaQKjdIDyrJAQudP%2FPHe9UZUuJxAbxZkmWi1usLRTE2aAbiHP0j57U0xivrXQf7FfrBDtk9QBqU7t6RPKu%2F2pUOq5AaO39uzwcNzjZctMEgspbGB8Xhu7y96GKIFPhQkKuTBxnlzWlavt%2B7PBEtxRq6WhkPWv15lubmtoeB2XkUL%2BKJhsvHLOlHs%2BBcN%2By4ruLJ9UJp%2F4oKMKWEyMQGOqUBY6vIdLS9yLFGWhRKA48H3yh3OpAgRkDi1fATudPOEr9t%2B1IJFdBBbnuWLC5gzraIMCeNSPubl%2Bbb%2Fw7XE%2BzdglEyPloF0De0UYpfFmi6oys6D%2Fm9KAb5%2B8aVCRi075rWuz%2BGfGWTyIdz2F2TRtr9%2BJQceMFsV6xxBxQwSjDZqQTjApNiPHMjAF1pyOu2SE8hPLRrEWey5hTRWysJn%2FJI5vGWf2NW&X-Amz-Signature=c384a1caff0dc9cfb4c68478166d5be9e3d138f956e9d8abcb36f50628a0a02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TA4XSPC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCLHKtKJcbpAKRzJxOpWHS0ElyAw9tOhbpTd1v5bRg0tQIgS%2FH4Ua8N09rmQtmHZaTEiAsEC7x39P7HVfqLnuf23igq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDK%2B9FAQMUzOXLkvDPircA4quzMm6UDWiLGy6reObHfadC6YTCGKPre4VCxACXBX9pVqWfDqe8YzY88tgc2D9hbMdgD2zWKArUi%2BGpi2Zn%2FFknTHQRddbv1NxO2KGNCzir9HmLImWPezOaKaCrZbjePMJuVflYNysAVrIsyTT5jRSnmEAfneWKeouy0nN55LeHdzswsmq6I%2BS01U4sD1W9%2Bk%2BTSmvhQfzqadG8AQim07PIT3gJ2d4WYGPbd9Z9qhWaj6wI9nS33oHFGZkZOz4%2BJmjl14KOD2ZTNpBrsCPlHKGguHr9J4WGItE19ddKhTWN88lx0yn%2Bpm17e%2FRrK60hGSSNnOxKNq07bSqPQX2kPL4iK9jiFHOe%2BPZQpJQu%2Bx%2B0hOhaWPoGeMIUsu57MSXdKH6wCAAq%2F4rEqg5DHsxY9QQ66I52GEegW0I26BQyOXQAE8ff%2FaQKjdIDyrJAQudP%2FPHe9UZUuJxAbxZkmWi1usLRTE2aAbiHP0j57U0xivrXQf7FfrBDtk9QBqU7t6RPKu%2F2pUOq5AaO39uzwcNzjZctMEgspbGB8Xhu7y96GKIFPhQkKuTBxnlzWlavt%2B7PBEtxRq6WhkPWv15lubmtoeB2XkUL%2BKJhsvHLOlHs%2BBcN%2By4ruLJ9UJp%2F4oKMKWEyMQGOqUBY6vIdLS9yLFGWhRKA48H3yh3OpAgRkDi1fATudPOEr9t%2B1IJFdBBbnuWLC5gzraIMCeNSPubl%2Bbb%2Fw7XE%2BzdglEyPloF0De0UYpfFmi6oys6D%2Fm9KAb5%2B8aVCRi075rWuz%2BGfGWTyIdz2F2TRtr9%2BJQceMFsV6xxBxQwSjDZqQTjApNiPHMjAF1pyOu2SE8hPLRrEWey5hTRWysJn%2FJI5vGWf2NW&X-Amz-Signature=2171291a6b1bf37ab0595d8fcd2445b5dfa6f4e4a5f22ff41f91ac24cca54b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
