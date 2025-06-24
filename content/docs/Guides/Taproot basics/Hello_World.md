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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNNBQNE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIG8Vi8n2vMP9S%2BetPwAmtR1Bq8gPPtwrJ1Slj8Vf2AhUAiEAh5eb9KAMPqXFKHci2dgMcigF7pHkGGo%2FS9VX%2BYWjxM8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD9akzLpodOk6IXHHyrcA2lCP%2FnqBByQY6rOsL52rL9ddrTfs%2Fqf%2BnInZ%2FnCvdi1dEV5%2FgGv0BZO8X%2FfgAHntFjXRnfJtqpRFBDXSwnzAMsIyvfV19pMdEm6ZzCYmZRSk6D7wU88UYAVHDHg85m2ogJioE9gMgRhwgR1pKIUOoajvxVsVOeBhUJXgn2qIo9GsC2hARXptzdzqT7O4iLkT4Qr3%2FlFH9qrUmIrpFPtnDrCRpnFSF4GnFrF2JpGjTsGJIAYkrtKXft73IZu7YotgocoTwx9IWLaUAPnwkvSVJC%2B%2FSCJ9MqwOAAi0wVM0a%2FMjlngt%2FPuaQIV1k63o1s%2FXKYtd%2BnPN72HupnFBDgE1dqHd%2F1aJZ6T5v1o%2Bfr9EP8GT18BN0Bsb00dGNppmuPGVt%2B%2FHGYwt2JFty5oVMLfskCoCX3mf%2BPYKdMQA9NG%2FCpHNbXKq0KJw1jjQN0s7fPJZONkUrtusXgCqTERoCdbs4kYtZ%2FGLDiSZyLkc%2BXC0CpopxkdepkAw%2FaPsLNRsv23%2BtgCE6xd19FlwWB%2BnXwqXZgHKqGMaUN%2F0iL9jVigAEixUSuoWmiaVIRZBs3rrCIPuuA7mNSRF%2BGZWWUpBR%2FYYznJolp1gCc2YBqg48RoMvAqWd2KHDv2P6HQTSUkMMm%2B7MIGOqUBCH5bpLJzoLKtkcMcYcz7HnWwwqio3aVmob4wr39LlBKoJbeJjTdrGEuvGFOVArRr3%2B7a7vv48pajhQ5MWQxtR6Y5l3uyFH46GTdzU7LtSLGHI0qqJgLWTQY7KVg0%2F3%2BApYE695T0qaDDgHX2psJ0s1qe2%2Fv8NKJhNO6IF%2FERzZN%2BTNvafj0cHIhzsY7ilVp2MYYOZtJap7Xhl16KmRN4HI%2FGMg%2BW&X-Amz-Signature=994609a93d63c17d182523bf2c9c3f209b5f9f1b86eb5c456ae11390daf79609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNNBQNE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIG8Vi8n2vMP9S%2BetPwAmtR1Bq8gPPtwrJ1Slj8Vf2AhUAiEAh5eb9KAMPqXFKHci2dgMcigF7pHkGGo%2FS9VX%2BYWjxM8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD9akzLpodOk6IXHHyrcA2lCP%2FnqBByQY6rOsL52rL9ddrTfs%2Fqf%2BnInZ%2FnCvdi1dEV5%2FgGv0BZO8X%2FfgAHntFjXRnfJtqpRFBDXSwnzAMsIyvfV19pMdEm6ZzCYmZRSk6D7wU88UYAVHDHg85m2ogJioE9gMgRhwgR1pKIUOoajvxVsVOeBhUJXgn2qIo9GsC2hARXptzdzqT7O4iLkT4Qr3%2FlFH9qrUmIrpFPtnDrCRpnFSF4GnFrF2JpGjTsGJIAYkrtKXft73IZu7YotgocoTwx9IWLaUAPnwkvSVJC%2B%2FSCJ9MqwOAAi0wVM0a%2FMjlngt%2FPuaQIV1k63o1s%2FXKYtd%2BnPN72HupnFBDgE1dqHd%2F1aJZ6T5v1o%2Bfr9EP8GT18BN0Bsb00dGNppmuPGVt%2B%2FHGYwt2JFty5oVMLfskCoCX3mf%2BPYKdMQA9NG%2FCpHNbXKq0KJw1jjQN0s7fPJZONkUrtusXgCqTERoCdbs4kYtZ%2FGLDiSZyLkc%2BXC0CpopxkdepkAw%2FaPsLNRsv23%2BtgCE6xd19FlwWB%2BnXwqXZgHKqGMaUN%2F0iL9jVigAEixUSuoWmiaVIRZBs3rrCIPuuA7mNSRF%2BGZWWUpBR%2FYYznJolp1gCc2YBqg48RoMvAqWd2KHDv2P6HQTSUkMMm%2B7MIGOqUBCH5bpLJzoLKtkcMcYcz7HnWwwqio3aVmob4wr39LlBKoJbeJjTdrGEuvGFOVArRr3%2B7a7vv48pajhQ5MWQxtR6Y5l3uyFH46GTdzU7LtSLGHI0qqJgLWTQY7KVg0%2F3%2BApYE695T0qaDDgHX2psJ0s1qe2%2Fv8NKJhNO6IF%2FERzZN%2BTNvafj0cHIhzsY7ilVp2MYYOZtJap7Xhl16KmRN4HI%2FGMg%2BW&X-Amz-Signature=1e6053cf4691af0245e0ec052a94dd1abd50ca182a07cd867fc537968bca47d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
