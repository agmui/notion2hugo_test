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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZXG2QX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC9Fy7Mh5fTzzgg1lCr4t3FQAmUmmoPa%2F07Z4g4a04DJwIgKqEqTtpBCpU3J%2FLdbpBFTu5U5outExlgYtxvub5V%2BmAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHtWLtd64lBiPMkvircA8RfV6pKbBvm6sYk%2FYYyhFvfQ9bBRfLftvV7trqF0jCb5ymBikeDOEohXUgwdvkCaJeJDODhmzCilGPSd5oXyZ51SmeZ1F0%2B%2BnunhbaBeG6r4XN4%2BZhcOMuMDuyJB3deOx8nsBwf3CdHCj0RJeUTOWapl%2Bv2RT%2BF0IRrx3iGnooev%2Fd25pdndAKO07DJ7N3qYFIPr5a8mTwz7Uk%2FkOVWAHKEoAH8BXX5KL%2BUoANnZ0HyGJ%2BEsGfLjTiQaS6oVK5TeM9a%2B%2BzLNxxxpco0za9uJ480fwWyxq04OkWcgLwbhP4ZBzloZXbDHMja7YLiBFQYyBnJr0SECNVMu0FFHRZ7SNsKtpR12mIrqq0HurO2nqg9GDN9sYnZhTXRl6SyMRX2do2xUKGoVZ5pbFC6jAYdX9%2FaNeUG0ae3hRBVUnObEdhpfYUWseG%2Fr2kkkofhQFpneRZfk77FpA6Ps4H7ahqTuQo%2F4eLMSROhzeSg3KO4leh57%2B2f8Dp0MYWSyS%2F%2BWczxGXJ05gb03cFZjKAL070320FzDB%2B98pGFo%2B9UrUVXsgJ7KGehUDw4yhQcWgvaK3g8kUYMdsCXCEfH6wJQoISlUQBvSaDgXFOKg1npZcQsGsbn%2F7XZsyPTpMUkZ%2FG6MPGBkcAGOqUBIK4%2FRzXmDhdBQKuODs5NTslIX1wyzstFptxs4wWRmfxPsfJNhdr9hlO0FUM4rGliv9%2FAhWLNQr2MWj3bMDs7UwOJGPa%2FA0xyEN%2FxSHTKzhwdWY64cv2mSnE1D4x8tAu0Bkf9vLKeHoNUcuRVwSCo7tKn7L70vacv6PLH08PS62axwU7THR3UZx2rTet%2F1XkU%2FnZSYquBWxm2pmEsVDmsBLWjJwQ7&X-Amz-Signature=e1936f54afddf379165a8d480514dd44c939fa9452fbbd241aa12c1a080e0add&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZXG2QX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC9Fy7Mh5fTzzgg1lCr4t3FQAmUmmoPa%2F07Z4g4a04DJwIgKqEqTtpBCpU3J%2FLdbpBFTu5U5outExlgYtxvub5V%2BmAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHtWLtd64lBiPMkvircA8RfV6pKbBvm6sYk%2FYYyhFvfQ9bBRfLftvV7trqF0jCb5ymBikeDOEohXUgwdvkCaJeJDODhmzCilGPSd5oXyZ51SmeZ1F0%2B%2BnunhbaBeG6r4XN4%2BZhcOMuMDuyJB3deOx8nsBwf3CdHCj0RJeUTOWapl%2Bv2RT%2BF0IRrx3iGnooev%2Fd25pdndAKO07DJ7N3qYFIPr5a8mTwz7Uk%2FkOVWAHKEoAH8BXX5KL%2BUoANnZ0HyGJ%2BEsGfLjTiQaS6oVK5TeM9a%2B%2BzLNxxxpco0za9uJ480fwWyxq04OkWcgLwbhP4ZBzloZXbDHMja7YLiBFQYyBnJr0SECNVMu0FFHRZ7SNsKtpR12mIrqq0HurO2nqg9GDN9sYnZhTXRl6SyMRX2do2xUKGoVZ5pbFC6jAYdX9%2FaNeUG0ae3hRBVUnObEdhpfYUWseG%2Fr2kkkofhQFpneRZfk77FpA6Ps4H7ahqTuQo%2F4eLMSROhzeSg3KO4leh57%2B2f8Dp0MYWSyS%2F%2BWczxGXJ05gb03cFZjKAL070320FzDB%2B98pGFo%2B9UrUVXsgJ7KGehUDw4yhQcWgvaK3g8kUYMdsCXCEfH6wJQoISlUQBvSaDgXFOKg1npZcQsGsbn%2F7XZsyPTpMUkZ%2FG6MPGBkcAGOqUBIK4%2FRzXmDhdBQKuODs5NTslIX1wyzstFptxs4wWRmfxPsfJNhdr9hlO0FUM4rGliv9%2FAhWLNQr2MWj3bMDs7UwOJGPa%2FA0xyEN%2FxSHTKzhwdWY64cv2mSnE1D4x8tAu0Bkf9vLKeHoNUcuRVwSCo7tKn7L70vacv6PLH08PS62axwU7THR3UZx2rTet%2F1XkU%2FnZSYquBWxm2pmEsVDmsBLWjJwQ7&X-Amz-Signature=aa1e6da20dd20710f7de6b50a73d292d8b5c5b2e0601da55130d70516c4b9995&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
