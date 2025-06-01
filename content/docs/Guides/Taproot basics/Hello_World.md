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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBIPW7Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICfwA7Gjzbl96WcJPmpMl%2F7gX7p2sA304kMOyldN67tzAiEAnj%2FDz%2BU7QfPbptSwMiIJmQsILJJE%2BNXiu5SK9dncDv4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHQL8vWkHBBubiN6SrcA6fnDHCbHVBT9KzqArA6eD2Pzx7D%2ByNhk30Z8joLf7ECaQmMfyV12ZbEqCCASmRPmsTm9zdnNf3lq79Vqej2vAl2A0NQjiVZESd6gyGgGO41WNiQBG%2Ft0AnbzD7px0wsCe2tyvYfx17mq6QLazoBL%2BElygCLdcZvzliXxkUC3F2x%2BoeOHDxwbhr7q%2BhWSAuNjrNX1aZcqU%2B0mcTvykEbddOaI1gkpL0fn90N438UGM9%2FtepZtzRLRfys10SmzvTg9DXc45zVVPNF9pm0StlqJ4ZVESXQtcanTLhPxxTO5o%2B%2FziTS8qxo8MK0pBVkK2VJE206fbV3Wlhoa7XuES%2Fly09EgxDLh6uLltUzgGJlDAQllAGoPFamj9%2B1WVOAHfyomBFZ0Zzx4MXj87FkWF4JH9zzqOfS%2BmFBYNH%2BwqcuLwp4y2rAN0%2BQ6rgFbNg6vkfGTMrc7Wga9Skq9b5r1xsq4gkSFBDq25riC73lLuQEIDquSlB9BJtQdzoWiDxfTanRZOacyhzOYwebxgulAoozHIa6kH8pMtMkzIOqGGmkK7r%2BfCc9uIH%2BwNQ%2BdX3aQE5D4loGon98BqS3NkoMPV98MMS2Q0xg0PXznmO6kTAv7L9rf1phAoeyPES2GlX9MNCB8cEGOqUBQjkAXnh23AbW58%2F7n%2Bo1ZIJljSGEwpHwdfaDMQ%2F5zlprHJSfmPl%2B8FG1sCi1ipiXGkZdbfXZdYrReh6aE9kD0us45dAiqsOo26%2F9lGiU9cV9j7sJJFYKzPRnsz2xdfD4zSYCQknD%2BImHxBPEtbEOQw31b7hAo%2FvZ6oSNP%2B9g%2BfJQaA5DwmrLV%2B%2FJEgOZNTVGHGar2wMgW0RAGDLFzWiAuo6%2FEOyh&X-Amz-Signature=82e3a3a841c13b984c8ad273e8b09a8725092a83256336be1a6275fdaae71240&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSBIPW7Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICfwA7Gjzbl96WcJPmpMl%2F7gX7p2sA304kMOyldN67tzAiEAnj%2FDz%2BU7QfPbptSwMiIJmQsILJJE%2BNXiu5SK9dncDv4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHQL8vWkHBBubiN6SrcA6fnDHCbHVBT9KzqArA6eD2Pzx7D%2ByNhk30Z8joLf7ECaQmMfyV12ZbEqCCASmRPmsTm9zdnNf3lq79Vqej2vAl2A0NQjiVZESd6gyGgGO41WNiQBG%2Ft0AnbzD7px0wsCe2tyvYfx17mq6QLazoBL%2BElygCLdcZvzliXxkUC3F2x%2BoeOHDxwbhr7q%2BhWSAuNjrNX1aZcqU%2B0mcTvykEbddOaI1gkpL0fn90N438UGM9%2FtepZtzRLRfys10SmzvTg9DXc45zVVPNF9pm0StlqJ4ZVESXQtcanTLhPxxTO5o%2B%2FziTS8qxo8MK0pBVkK2VJE206fbV3Wlhoa7XuES%2Fly09EgxDLh6uLltUzgGJlDAQllAGoPFamj9%2B1WVOAHfyomBFZ0Zzx4MXj87FkWF4JH9zzqOfS%2BmFBYNH%2BwqcuLwp4y2rAN0%2BQ6rgFbNg6vkfGTMrc7Wga9Skq9b5r1xsq4gkSFBDq25riC73lLuQEIDquSlB9BJtQdzoWiDxfTanRZOacyhzOYwebxgulAoozHIa6kH8pMtMkzIOqGGmkK7r%2BfCc9uIH%2BwNQ%2BdX3aQE5D4loGon98BqS3NkoMPV98MMS2Q0xg0PXznmO6kTAv7L9rf1phAoeyPES2GlX9MNCB8cEGOqUBQjkAXnh23AbW58%2F7n%2Bo1ZIJljSGEwpHwdfaDMQ%2F5zlprHJSfmPl%2B8FG1sCi1ipiXGkZdbfXZdYrReh6aE9kD0us45dAiqsOo26%2F9lGiU9cV9j7sJJFYKzPRnsz2xdfD4zSYCQknD%2BImHxBPEtbEOQw31b7hAo%2FvZ6oSNP%2B9g%2BfJQaA5DwmrLV%2B%2FJEgOZNTVGHGar2wMgW0RAGDLFzWiAuo6%2FEOyh&X-Amz-Signature=aba2fa1f6099ad77345681d2e4f33b4cc462390f5adda2eb0d7caebf1a742954&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
