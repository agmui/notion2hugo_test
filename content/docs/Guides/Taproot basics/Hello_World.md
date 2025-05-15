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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVX7J4Q2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSTtiVICjZgnkXUio6sB7MDRDKR2f2yafce%2B0P1f6mfgIgNPBFjLO3P9ETDkIZAEBBumeDGQXewP7biFeGeKeYnCwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGSyeR853wfMs2AQFyrcA8cE7zNZebgjLXjWuKKgcmIsC3emjqKd6sE3Fa80JXe%2FklrCcDLA8pMjuQcP5MkGShrMa1G82safBqHioSV3KqrwJMDq5rVI9sca%2BBSaIRsgALm2D7f0cocV9rHTnRau7crFPGctalpdzq1qQPzXiBm9ISlB49uPKtmPSkNNlPZNmz4sWezD6twOjMJgjHrDNzTFYUOYiS1gj4ivnegp%2BP%2Bkhe3Jm0qw6WZS5N16V%2BBVBiZXKvxsRvTn6%2BE%2FC0VxI4eTMBMh9tIyHv%2Bj20iPPBTjhzb%2F1xL8ndXfDwUh69ATkrm2HAQ%2FeqCmvTrUCjgeWPZvo3vnFCT%2Butk6rMz2D97fneZ33fz%2FdyVA7LSexEU5sZZS9l%2BEDP0UgqSfXxMPnNf6lmFxaxCWNUL5sUTw374PS%2B%2FWh9r%2BVIxKokzSjZQ%2BRiTNyvgeUYr7RqgDiEStQRUAHONrWJ3RlwJY4hFaQe47sVdlRmDms1TIbW%2Bc9XsyE%2BRdKXR7olzc%2FK6qO8sNe%2FwCQNWApuu2qNL7BjbiaqMz7Rb0DzpuW0v4nkWw80Gigg0ti1orargzSd7%2BWWL8JlwepHMW%2BSAIP709THhMPicAhm2TuCdriQWAfOR0Zv773klLGXKmVBfY7QTtMJqelcEGOqUBV83NnL7s2pMrvlOxJiPM2hkGV43V8ZOCJZ6Blw3qJ6GjgiBocYpnt%2BsAJ3ObH4QAvpk859rJFpcG10BhmznZStdy4r%2F6k9PWOKUbWDX%2FumtZYWu8YpoKi6G1nFBNO3IxeZxMzxxWi1guc3yni4dcZj5jVOASRKX6RGsOequZ0EdLL8W85br5AH0RsJ7Ovz6ilKYFtTR8xWWdbjZxHgYmrYjYs2dk&X-Amz-Signature=638cd3c1097b23b47412adca46168c8de2f5cac5502bfd211eff097eb035d3be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVX7J4Q2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDSTtiVICjZgnkXUio6sB7MDRDKR2f2yafce%2B0P1f6mfgIgNPBFjLO3P9ETDkIZAEBBumeDGQXewP7biFeGeKeYnCwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGSyeR853wfMs2AQFyrcA8cE7zNZebgjLXjWuKKgcmIsC3emjqKd6sE3Fa80JXe%2FklrCcDLA8pMjuQcP5MkGShrMa1G82safBqHioSV3KqrwJMDq5rVI9sca%2BBSaIRsgALm2D7f0cocV9rHTnRau7crFPGctalpdzq1qQPzXiBm9ISlB49uPKtmPSkNNlPZNmz4sWezD6twOjMJgjHrDNzTFYUOYiS1gj4ivnegp%2BP%2Bkhe3Jm0qw6WZS5N16V%2BBVBiZXKvxsRvTn6%2BE%2FC0VxI4eTMBMh9tIyHv%2Bj20iPPBTjhzb%2F1xL8ndXfDwUh69ATkrm2HAQ%2FeqCmvTrUCjgeWPZvo3vnFCT%2Butk6rMz2D97fneZ33fz%2FdyVA7LSexEU5sZZS9l%2BEDP0UgqSfXxMPnNf6lmFxaxCWNUL5sUTw374PS%2B%2FWh9r%2BVIxKokzSjZQ%2BRiTNyvgeUYr7RqgDiEStQRUAHONrWJ3RlwJY4hFaQe47sVdlRmDms1TIbW%2Bc9XsyE%2BRdKXR7olzc%2FK6qO8sNe%2FwCQNWApuu2qNL7BjbiaqMz7Rb0DzpuW0v4nkWw80Gigg0ti1orargzSd7%2BWWL8JlwepHMW%2BSAIP709THhMPicAhm2TuCdriQWAfOR0Zv773klLGXKmVBfY7QTtMJqelcEGOqUBV83NnL7s2pMrvlOxJiPM2hkGV43V8ZOCJZ6Blw3qJ6GjgiBocYpnt%2BsAJ3ObH4QAvpk859rJFpcG10BhmznZStdy4r%2F6k9PWOKUbWDX%2FumtZYWu8YpoKi6G1nFBNO3IxeZxMzxxWi1guc3yni4dcZj5jVOASRKX6RGsOequZ0EdLL8W85br5AH0RsJ7Ovz6ilKYFtTR8xWWdbjZxHgYmrYjYs2dk&X-Amz-Signature=f4e91b710473c7592296c01ef33ed4d21aa0c3760b6c79641740ad9887c046a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
