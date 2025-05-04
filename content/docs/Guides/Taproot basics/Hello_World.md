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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRE2ES5I%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDCYbATJnQBIB97Td5z0igKJJi94BL5JGjuJgYIE80oNgIgQS%2F6ZBUTJ898pq%2FYyFB5y%2FSAii2hGJhT6Bc9BRp0%2FjMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4npFAqyP%2FcoziRwSrcA0A2Z70yAWT3X9F2BbQ2xhm7ypv0r%2BFC1Xmow6Fq1OMiskMhOqxwcmpYu24igT%2BGVBDk66N%2Botv52%2FaIsTUeN1%2BYdOK2JRYj6F2s5rWyU4Qp1XqrAxpMawocTeX8KCWwLSadpa0dk4YHcAKkorA6pcdwaICJTJr8BNFkiEVIxNYdXEVYbjrLoPF8LHawW0xGEDt0TgGhZQH%2FS2ugu1J1eAfo9nuuovM2AWcPHOVlF%2FhQl4SK59nBAbONNd7nnTMdda581fAnPcHV2lrsP7KW8MDMxLhkbjGH7qz6ODyFSJwZ93Zvo1cBsrd1HcdWGd6XSkCgtvi9heJzHOwxdDeiqmvgWKJpovgkvJBOF09wNWymScQzaunxPYQFpUplP5gx34nXBpUvPfuE8pBqNDooYD1Biu8dDMmHEUXZpWBfLjCSMHvfJnjiFIfJalBV%2FzVErouzRiYYCDxMVrUkYyTsXpERVnfz%2F%2F6O%2BqYDBsPRqPdrQmcqFudAUFTBCwK3fRidrUn8qlIwpmVA%2BAWy4urIaSSv1TO3LX9jcnSsfxPjg%2FoTrka9umJhRlFGdJ0somIcmxh%2FogfPopaHNCujC7fAApI2kFEhF4%2Bbk2%2FBCEB6xLa0jeYCl6dsQXacsegHMJrr28AGOqUBJ6K4iD%2F8t32geCL2WxK3QwPwmGaHd50I2SHx%2BBr0IBsyOmZNUgrx49J75pzouyw3Xh4kShTr3dbFWOh24VUj%2Fnf1Edlmf1IEFU4ZU5Swjp0JlTkXTcfPBIkYDxcYoUZIRJqMLB7fhMlcuOw7ktKJnBt29oGj2iqONwOl6dpGtROBUxF3kvwFskDjS93tRddE6%2BurwZimbP2mAUM1zRXR3JQ9oPbY&X-Amz-Signature=7798eafa856e7a6994ae18f22fca976e0b267c0201bc0a46ef38c70a8ee14f64&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRE2ES5I%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDCYbATJnQBIB97Td5z0igKJJi94BL5JGjuJgYIE80oNgIgQS%2F6ZBUTJ898pq%2FYyFB5y%2FSAii2hGJhT6Bc9BRp0%2FjMqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4npFAqyP%2FcoziRwSrcA0A2Z70yAWT3X9F2BbQ2xhm7ypv0r%2BFC1Xmow6Fq1OMiskMhOqxwcmpYu24igT%2BGVBDk66N%2Botv52%2FaIsTUeN1%2BYdOK2JRYj6F2s5rWyU4Qp1XqrAxpMawocTeX8KCWwLSadpa0dk4YHcAKkorA6pcdwaICJTJr8BNFkiEVIxNYdXEVYbjrLoPF8LHawW0xGEDt0TgGhZQH%2FS2ugu1J1eAfo9nuuovM2AWcPHOVlF%2FhQl4SK59nBAbONNd7nnTMdda581fAnPcHV2lrsP7KW8MDMxLhkbjGH7qz6ODyFSJwZ93Zvo1cBsrd1HcdWGd6XSkCgtvi9heJzHOwxdDeiqmvgWKJpovgkvJBOF09wNWymScQzaunxPYQFpUplP5gx34nXBpUvPfuE8pBqNDooYD1Biu8dDMmHEUXZpWBfLjCSMHvfJnjiFIfJalBV%2FzVErouzRiYYCDxMVrUkYyTsXpERVnfz%2F%2F6O%2BqYDBsPRqPdrQmcqFudAUFTBCwK3fRidrUn8qlIwpmVA%2BAWy4urIaSSv1TO3LX9jcnSsfxPjg%2FoTrka9umJhRlFGdJ0somIcmxh%2FogfPopaHNCujC7fAApI2kFEhF4%2Bbk2%2FBCEB6xLa0jeYCl6dsQXacsegHMJrr28AGOqUBJ6K4iD%2F8t32geCL2WxK3QwPwmGaHd50I2SHx%2BBr0IBsyOmZNUgrx49J75pzouyw3Xh4kShTr3dbFWOh24VUj%2Fnf1Edlmf1IEFU4ZU5Swjp0JlTkXTcfPBIkYDxcYoUZIRJqMLB7fhMlcuOw7ktKJnBt29oGj2iqONwOl6dpGtROBUxF3kvwFskDjS93tRddE6%2BurwZimbP2mAUM1zRXR3JQ9oPbY&X-Amz-Signature=91aa81ab782c01209449026bd2d386dfd50125b9e8d1dc5bcc2123150608b297&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
