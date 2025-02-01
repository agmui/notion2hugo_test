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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBWLGRI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBelzFQPygJtWqnkI%2BU%2FFk3BF65Ir5AL5c7o4Irxav8FAiEAvQfSeV9dnKG6OH29KtLrRbx9DbXSg2T5pVWtxpOyuboqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpNNDAMAgETfYKz6CrcA3wisT1La4%2BqG155uEwNFo1gI64blKCptVqg%2BHr5YuR9pmbgERgXJZjm7QsQ2BOa3JgMi%2BimqsBfN1ylCRRK%2BKuHtB6RjTSlFIc4dTlWhEMYkTrN07PoQVVigqVDI%2BYRD7mKMVU%2FOYqx4xV35YP0HelEjoTGgH1hZZE0vy800KAQY1uLemcllm%2B%2FlLSm2ZcQ3DgTTXUDwztTzJQxQLgoZ0vgrbSrOkpM868ppNR0QzTGnK169jX2Ca0%2BYyb0oQ1V1LX3vWBTfD5o0XRK%2F798xPmkQu6DYuffA87YZh%2BUOh3YXVgGCFIBFPt58kyCu75bZwzSlT9P0wgZoxoBTUyCWY7GUPxw3wBFs5OHYhIA0DN9mt4hheiq16mn2lc0SINVhHq1Z4XUcmhn7LkT4sWJ7o2Tu7L6RaBu13tKhfSdHvbQQnFkgdhLNU9YqmTMtQZ%2FkVtPDr2ciJ3JyZDUeQGb9iKo1MOI1WHAdePmDvkDRw5OcthXChotk3X1l2HeM%2FG3%2FJCKdmTBcCW6iHYgU28iRaxrReQ%2B%2FNfAFykIZ5csk1UOCGPabpiGBUPDpT31%2F9QZeRFeqyZ56DS80DZgaoInq%2FJArsAXYz84M%2BfJoU9TT%2BxPfFPOzmAmP19EicqYMNb69rwGOqUBqL1LDzltWzNPnbUOtS2XiH%2FZzx%2FZMX6oEJqH6TXQY0FP9F5DYFSB%2F%2Fg1WIWhNTLZTm8qbbtlaxWXNye%2Bi1w1LyPXRnvAKV%2BkM8yP6IUdHwlkgR4GzcXDFgLhhSWsosR8J35TzRH1kvbxqxKPkWypezwaA%2Bz3xo8NaXGoHOYJRyHo1MjnX1faKvVatlgjq1WyUFwX413CApY638aL5nAqz6cUT8ME&X-Amz-Signature=60c2d542f23c387fd7bd53058ffdf45595387fbdedee94a37bb61f6f94e84364&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBWLGRI%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBelzFQPygJtWqnkI%2BU%2FFk3BF65Ir5AL5c7o4Irxav8FAiEAvQfSeV9dnKG6OH29KtLrRbx9DbXSg2T5pVWtxpOyuboqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpNNDAMAgETfYKz6CrcA3wisT1La4%2BqG155uEwNFo1gI64blKCptVqg%2BHr5YuR9pmbgERgXJZjm7QsQ2BOa3JgMi%2BimqsBfN1ylCRRK%2BKuHtB6RjTSlFIc4dTlWhEMYkTrN07PoQVVigqVDI%2BYRD7mKMVU%2FOYqx4xV35YP0HelEjoTGgH1hZZE0vy800KAQY1uLemcllm%2B%2FlLSm2ZcQ3DgTTXUDwztTzJQxQLgoZ0vgrbSrOkpM868ppNR0QzTGnK169jX2Ca0%2BYyb0oQ1V1LX3vWBTfD5o0XRK%2F798xPmkQu6DYuffA87YZh%2BUOh3YXVgGCFIBFPt58kyCu75bZwzSlT9P0wgZoxoBTUyCWY7GUPxw3wBFs5OHYhIA0DN9mt4hheiq16mn2lc0SINVhHq1Z4XUcmhn7LkT4sWJ7o2Tu7L6RaBu13tKhfSdHvbQQnFkgdhLNU9YqmTMtQZ%2FkVtPDr2ciJ3JyZDUeQGb9iKo1MOI1WHAdePmDvkDRw5OcthXChotk3X1l2HeM%2FG3%2FJCKdmTBcCW6iHYgU28iRaxrReQ%2B%2FNfAFykIZ5csk1UOCGPabpiGBUPDpT31%2F9QZeRFeqyZ56DS80DZgaoInq%2FJArsAXYz84M%2BfJoU9TT%2BxPfFPOzmAmP19EicqYMNb69rwGOqUBqL1LDzltWzNPnbUOtS2XiH%2FZzx%2FZMX6oEJqH6TXQY0FP9F5DYFSB%2F%2Fg1WIWhNTLZTm8qbbtlaxWXNye%2Bi1w1LyPXRnvAKV%2BkM8yP6IUdHwlkgR4GzcXDFgLhhSWsosR8J35TzRH1kvbxqxKPkWypezwaA%2Bz3xo8NaXGoHOYJRyHo1MjnX1faKvVatlgjq1WyUFwX413CApY638aL5nAqz6cUT8ME&X-Amz-Signature=d3bf2ef77a389d9adab2e1ac076cc8de1595ab7f04439b9ec6d52f4f70f19f46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
