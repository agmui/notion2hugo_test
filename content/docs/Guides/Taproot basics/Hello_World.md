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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOL6NU%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFpLQC6WskuSGswMzLcLhV%2Bar0GXBV4oB%2FTvaIika6BAiEA26W%2FTp7syboHnXwrsCfF1iCsoYTvyFLa491RJArMvhMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjt%2FgwK2Bb1iRm5HyrcAziMKivlgR%2FrQ3yINo8wLrlHjOKW5KtgkquxgLtcSJ15lj7uJF1f%2Fx%2Fr%2B%2FYxTMPfFRYPB2no62TxNiqkHIR%2BS1%2BQtjX3f89DOK1DJ%2BSlVkNEKQytLMuzQrjldM6oBFUZpI%2FcR93NH5hv0xsUUfH9pp%2BF%2FJtBpV%2FgjOACoOHVVOVNpk2FASasvQ8s2iFZluzm%2F2WcGYtIS%2FkG02kjLA68gIDH3YN1WwCHYXKZrsaTfSvwr3pE6SAn9bY8eSvrvnYFDPj%2BKvhe2LGe3ceUz79dELPotHupalFEW1MgVwzilMfWXboyAGmoIsLmUrcijNrJzrvYl9nhC07znv7BsyBwEEc5JSvEMQT6FRSn%2BtArYrIKA3lm8rHxpAsK22ehz548TzqPe3PsNiPKB0%2BSdAhhcBChXxBPI2LK9deOo%2F2ih5pA%2BIUEZFD%2FH3JtvQkXohbM1bxS1PSr8quiW8ajAN0IB%2FjChI%2F3kUHEl7DBUBR2VAaguBZWmikZ0haXAzXlJD7FLFAcmOL5NVaIQKSGLnviZZbNQMdBQH%2FByHphklERkTbgr021zs6V3fMA0vQmbDddsS5AKEKc3nFrLuLhWJ9OzlnM1JqtpHOO1x5cMH6ZDE4po54cqm3cb9PrbLSfMOOVjMcGOqUBtN4GVhLXSFbndde%2BaP6T%2BVejSj4gBPnfA9qIqpxGfH%2FeCHTtmypYF9I8XZCgZf6nLsJuSxZnNj1EUPjf2EAMSjqJWF9sbB92tLQ7g8KFOF%2BN2e9mLIlEspqZbx%2Fh%2FY8KCacnGtcSSt0dYmOwNRSdm2j7ytJKt9YJrvJm2mm%2F%2FX%2F92iEgrtbk3TcDeTyBu%2Bwg6kgL9sV40dF3zGEqhf2UGe7cDL9b&X-Amz-Signature=d564bd8c704cbe4b426bd7fdd1ae84905e0b8f318d65b7521434c80988a8ccfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOL6NU%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFpLQC6WskuSGswMzLcLhV%2Bar0GXBV4oB%2FTvaIika6BAiEA26W%2FTp7syboHnXwrsCfF1iCsoYTvyFLa491RJArMvhMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjt%2FgwK2Bb1iRm5HyrcAziMKivlgR%2FrQ3yINo8wLrlHjOKW5KtgkquxgLtcSJ15lj7uJF1f%2Fx%2Fr%2B%2FYxTMPfFRYPB2no62TxNiqkHIR%2BS1%2BQtjX3f89DOK1DJ%2BSlVkNEKQytLMuzQrjldM6oBFUZpI%2FcR93NH5hv0xsUUfH9pp%2BF%2FJtBpV%2FgjOACoOHVVOVNpk2FASasvQ8s2iFZluzm%2F2WcGYtIS%2FkG02kjLA68gIDH3YN1WwCHYXKZrsaTfSvwr3pE6SAn9bY8eSvrvnYFDPj%2BKvhe2LGe3ceUz79dELPotHupalFEW1MgVwzilMfWXboyAGmoIsLmUrcijNrJzrvYl9nhC07znv7BsyBwEEc5JSvEMQT6FRSn%2BtArYrIKA3lm8rHxpAsK22ehz548TzqPe3PsNiPKB0%2BSdAhhcBChXxBPI2LK9deOo%2F2ih5pA%2BIUEZFD%2FH3JtvQkXohbM1bxS1PSr8quiW8ajAN0IB%2FjChI%2F3kUHEl7DBUBR2VAaguBZWmikZ0haXAzXlJD7FLFAcmOL5NVaIQKSGLnviZZbNQMdBQH%2FByHphklERkTbgr021zs6V3fMA0vQmbDddsS5AKEKc3nFrLuLhWJ9OzlnM1JqtpHOO1x5cMH6ZDE4po54cqm3cb9PrbLSfMOOVjMcGOqUBtN4GVhLXSFbndde%2BaP6T%2BVejSj4gBPnfA9qIqpxGfH%2FeCHTtmypYF9I8XZCgZf6nLsJuSxZnNj1EUPjf2EAMSjqJWF9sbB92tLQ7g8KFOF%2BN2e9mLIlEspqZbx%2Fh%2FY8KCacnGtcSSt0dYmOwNRSdm2j7ytJKt9YJrvJm2mm%2F%2FX%2F92iEgrtbk3TcDeTyBu%2Bwg6kgL9sV40dF3zGEqhf2UGe7cDL9b&X-Amz-Signature=b5b4dbd50dc4eaf4153bb9ed1ad2e9b715feadc0e24dbc3711d9c1461bb84729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
