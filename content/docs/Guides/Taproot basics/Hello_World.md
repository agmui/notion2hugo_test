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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZ5BAE4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDND5ap7FTxZWum14Q8oPljIBpXnezsdEwZptjAgXV5DgIgUeOkY2lahhusdOHQuqDCKD%2BqI4%2FzDSSiHZueGvfl6LQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOjwW4u3TZczFTj4ircA2ZenXhfsJwFWUW6%2FcUt8NFPPmW397f%2Bvan3MhASabrhuwzCM3zcTer91i%2FWm1YBsEcHDOPFmRLSiKewlwiaXpSatSf77SYfKAAMWdgCGXNJ6jSzSX01gYqeQW57FaZaxWA5ML88HZxwyM0vpKw9bigaD0NOUa4E8mDSEcqewixH2NAWkLUXG1Xn%2FO9ZG53ezSAQZCoVYViPsx2lSWoTcQpzjBPnUcwUI4mw%2B4TigYFlsKIBGT%2FFwfkWfIQjPD3E%2F4SLtU%2FgEm3FEDUlLKp7o7K7HX9TBG%2FQMagEkzJo0d5AETVup2pt4gP3YkPRxkAJ17473VaYGznRS%2FkCB4xu%2F1sk04nY4XxQlQ36%2FDe5wG5gyJi3JjRe2hu7Comppmj%2BVbjhrpugaRRxEAfXcuDPiwP3FuMrpRGfrSaJnEnssAFH0nG2zx5bkb%2Bx1A6jDqG5apJ1bb2ZR1d0No7dYOOCEtAJ8%2FLmkCYisJNE4ZagJ4XUYJ09cq5UrfUPG%2BbbZcIGU0mLPdQ7ak0Nb8lEysJdm%2BgMMFrb2GL%2Bb9NaSEoTk%2FqP9DmK9r2JVTXGDYFofuXBwYH9PtOTllf2JMJF7XwQ6SBihTbXRcuOa6UT8sMy3xjgkXshTunh%2Faup79yXMK7x2sIGOqUB0fOKGdQwqO1kudGtb8WdivrhZFU4AVbyQqjnz4fCvNYT9Of10v8E0LtmT47PYIsYgTuewXKp6%2FUkBm8%2FAJdE3FBsAtNgF77QcSPQiA3Azle5qj03EpC%2Bf3qvodEM93QmupAWUaf4pu1IGcOdux4TckAOohYygSN0e8%2FoMdql1Mx14rXul7Nf9qLlGIzPhcU4uig8hFMYiZ9Y%2FtRe95oYSlg3t%2BTo&X-Amz-Signature=87469162f568630d3cdf77806a40da22063547fff85730bbf46674017eeafb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZ5BAE4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDND5ap7FTxZWum14Q8oPljIBpXnezsdEwZptjAgXV5DgIgUeOkY2lahhusdOHQuqDCKD%2BqI4%2FzDSSiHZueGvfl6LQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOjwW4u3TZczFTj4ircA2ZenXhfsJwFWUW6%2FcUt8NFPPmW397f%2Bvan3MhASabrhuwzCM3zcTer91i%2FWm1YBsEcHDOPFmRLSiKewlwiaXpSatSf77SYfKAAMWdgCGXNJ6jSzSX01gYqeQW57FaZaxWA5ML88HZxwyM0vpKw9bigaD0NOUa4E8mDSEcqewixH2NAWkLUXG1Xn%2FO9ZG53ezSAQZCoVYViPsx2lSWoTcQpzjBPnUcwUI4mw%2B4TigYFlsKIBGT%2FFwfkWfIQjPD3E%2F4SLtU%2FgEm3FEDUlLKp7o7K7HX9TBG%2FQMagEkzJo0d5AETVup2pt4gP3YkPRxkAJ17473VaYGznRS%2FkCB4xu%2F1sk04nY4XxQlQ36%2FDe5wG5gyJi3JjRe2hu7Comppmj%2BVbjhrpugaRRxEAfXcuDPiwP3FuMrpRGfrSaJnEnssAFH0nG2zx5bkb%2Bx1A6jDqG5apJ1bb2ZR1d0No7dYOOCEtAJ8%2FLmkCYisJNE4ZagJ4XUYJ09cq5UrfUPG%2BbbZcIGU0mLPdQ7ak0Nb8lEysJdm%2BgMMFrb2GL%2Bb9NaSEoTk%2FqP9DmK9r2JVTXGDYFofuXBwYH9PtOTllf2JMJF7XwQ6SBihTbXRcuOa6UT8sMy3xjgkXshTunh%2Faup79yXMK7x2sIGOqUB0fOKGdQwqO1kudGtb8WdivrhZFU4AVbyQqjnz4fCvNYT9Of10v8E0LtmT47PYIsYgTuewXKp6%2FUkBm8%2FAJdE3FBsAtNgF77QcSPQiA3Azle5qj03EpC%2Bf3qvodEM93QmupAWUaf4pu1IGcOdux4TckAOohYygSN0e8%2FoMdql1Mx14rXul7Nf9qLlGIzPhcU4uig8hFMYiZ9Y%2FtRe95oYSlg3t%2BTo&X-Amz-Signature=e41f5c809fb832d4c0e8819bb04fa6e9877297020bf85e4df330038134f94170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
