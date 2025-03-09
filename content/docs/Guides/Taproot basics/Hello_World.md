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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7QLEJV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDlQWIw0A5B6F%2BaThiiKGJsEYEq50Y2KxUqnHmZXBOjZgIgPUaEsfgMgSeYUFtXPgiztAqZBKro%2BUMV5EusKPerDUwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDO3PEOGcBWZ4x%2F6k7CrcAyeG6hv3yxXqZK38TU0HEFtxTsGTYcSmrE93frpVFhzizBGACNlsODYY8ZkKdTUgtK1sSEVDodjmsg38G8uC4o8Zwm%2FnW707q5GlMqKbTOZPvR2e%2BhnXbjTEDUHVfoYH2sw7nzwVv%2BC0HING3nS3dBGS9liL9tPLe%2FoUu8KVyV0Q8haXOSNA0SQ1swBuI%2FXERaWg409pWv2fCdbvn%2B5my10D617y2YcprSxKWX6As7iVaqZ%2BDFHSYHw%2BXeX%2BuBF0R6FKER477lBzU%2Bt74VNqb6SfcD3scDMGJs1lTABZc8PSHJLs6Bz5GHb7shplQ4fl1%2FAkvbqGP1agKx6Cvk%2FhnaTDsvNccYHlmPFtKR3m3DffbuAzVhWx6PNP0IfJ%2B1xzefzhniHzocyVBza5r6%2Fsa1bnZCaGwBEMkd0%2Fag%2BQMXDO56MxU3X7Czz40HcLCKCgGg9UL8Jt03lTjZnXt5SU406g64GXXkTEABAIILEJCpKqDIo6rRGPiIMVlhDFk1jsItnCyGoNPluefR0dLQ1l1ARDUdEnxCAsdx5lrbqeyemlBmTZiuBWRySsapZnI%2FMQpEAd%2FxOzxeRev%2BuAk%2FcWiIAGkWCsc%2FyY3eKittsPOCnEy5J8SbyfOPWRiIPRMJyxt74GOqUB%2FQyDFIzUcmuaZlOrWQIAR%2FZEE%2BjE%2F7Iugetp52qdM9ku2Km3oOU5TVxAodLM9T45%2F8CPlCrclpNe4A8%2BeRs3qI6ZvPHzP9wik%2BSrVLyTaav%2FDMjf0nxAMqAG2yoU0tOJUc2JJpzw4AhcsjoJm7rkzPVSMHkN9sWc8zeDS%2FDTcFTt%2FPmTokTgw9wL2AdsrnYK1TIlLRNRE%2F3u8qezV9OZuJSsJxUV&X-Amz-Signature=b2c5edd34e9f83dc01de902e7cd4836b6471b43bb301105e7172a6dd4ea83050&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7QLEJV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDlQWIw0A5B6F%2BaThiiKGJsEYEq50Y2KxUqnHmZXBOjZgIgPUaEsfgMgSeYUFtXPgiztAqZBKro%2BUMV5EusKPerDUwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDO3PEOGcBWZ4x%2F6k7CrcAyeG6hv3yxXqZK38TU0HEFtxTsGTYcSmrE93frpVFhzizBGACNlsODYY8ZkKdTUgtK1sSEVDodjmsg38G8uC4o8Zwm%2FnW707q5GlMqKbTOZPvR2e%2BhnXbjTEDUHVfoYH2sw7nzwVv%2BC0HING3nS3dBGS9liL9tPLe%2FoUu8KVyV0Q8haXOSNA0SQ1swBuI%2FXERaWg409pWv2fCdbvn%2B5my10D617y2YcprSxKWX6As7iVaqZ%2BDFHSYHw%2BXeX%2BuBF0R6FKER477lBzU%2Bt74VNqb6SfcD3scDMGJs1lTABZc8PSHJLs6Bz5GHb7shplQ4fl1%2FAkvbqGP1agKx6Cvk%2FhnaTDsvNccYHlmPFtKR3m3DffbuAzVhWx6PNP0IfJ%2B1xzefzhniHzocyVBza5r6%2Fsa1bnZCaGwBEMkd0%2Fag%2BQMXDO56MxU3X7Czz40HcLCKCgGg9UL8Jt03lTjZnXt5SU406g64GXXkTEABAIILEJCpKqDIo6rRGPiIMVlhDFk1jsItnCyGoNPluefR0dLQ1l1ARDUdEnxCAsdx5lrbqeyemlBmTZiuBWRySsapZnI%2FMQpEAd%2FxOzxeRev%2BuAk%2FcWiIAGkWCsc%2FyY3eKittsPOCnEy5J8SbyfOPWRiIPRMJyxt74GOqUB%2FQyDFIzUcmuaZlOrWQIAR%2FZEE%2BjE%2F7Iugetp52qdM9ku2Km3oOU5TVxAodLM9T45%2F8CPlCrclpNe4A8%2BeRs3qI6ZvPHzP9wik%2BSrVLyTaav%2FDMjf0nxAMqAG2yoU0tOJUc2JJpzw4AhcsjoJm7rkzPVSMHkN9sWc8zeDS%2FDTcFTt%2FPmTokTgw9wL2AdsrnYK1TIlLRNRE%2F3u8qezV9OZuJSsJxUV&X-Amz-Signature=d0ea031b9e4df1f6f07f973d782dc5f7f8c1dadd609ad28bcdc01e4c4793c91a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
