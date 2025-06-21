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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IZ3IDF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqX7Y%2BCnzlhpc7FGCpmufa2drIlRsc53%2FmmxnrW9IoyAiEAvdqmvcjHLytXEZZEfZ0nYE7%2BsdqQUOgyWd68Nc0Q%2Ft8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBE3%2FiBQ6fty6mrLAircA3nGdGHp4sOSAnLI1LKLnL6F3W663RSl%2FIfIGqHQDdwJsjyMXRf9t%2B9cnPD1Tov5%2FUehd%2B5Ygpjocs2ZaFOvgd%2BG5DmHbAyUiReK%2FAEpXEkk6dJj3ymxPJo4doJI5UJERglih1o6b1k8nPFPfBIXv2QaROYCW3h3X0Kt542%2BJylneoW2I35WUKkZv1T8xKxbu0wyTo3kmqoeH2BW7aa%2Bz226XCAEjNZ2JAsVIuwq8BAcqd5RjBzFNOwJLu658ikdExKm1vLyRmJTUNK%2BX0HaXeFHnGVNTlyqr4fzyKXDapCj4xn6lUeiINDuGeV5E4TkH5Qk%2B71B0FCvTytUW%2Fuckn2Kpol788Fn%2Bm4NJlVUmBkfmNECzYxA9bamO5r0rVgo25OlwFAADcBw6Ix5HE89bPCwNbc1HiXDSrrS6z2sz6RTcSg27YClZbveFIN2rjfm8NEoL0SLhMSKs3YcbIt7MV5mZtAkuzhiTQCtqDe%2Foe4TxIH91EpCozBNA4mRuB0j5LbPOpEHM8Mc6yMAd3t6J7gzimB132E%2B8dq%2B2DWeyJbdm1bc%2FLUurHS1fofmsThscvwFHLiDDirdNI7KU8VXl%2BeB%2Fh%2BeyG8Ex3mW8vSXSAjii%2BBlOT5%2FLq6El%2Bu0MPbO2cIGOqUBX9Dsmpvi7nu7Y5%2FVBh%2BvVs4DUHksE4HnQBXc4S6yDTcyPnLH8CImt%2Ffv1Dzn7MhbHVxcxtWm9eYyH%2BzgqNyHRUzQPsK1pespnnwNkAy0tYyb%2BRR27VwvYd374%2FVlqKFJ%2F%2FWpw1yfoqXc8sKQcfON4UBrh25Rvl9yT1AQiOiDm0oq%2BxHizbzae7HQHopUm4G%2B3FmffZDsP9ji7YLlI%2B82FlsEwnIz&X-Amz-Signature=af8880c07727254b1d1d6808b8258266b7242c18efa1086d72f6377c3c68bc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IZ3IDF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqX7Y%2BCnzlhpc7FGCpmufa2drIlRsc53%2FmmxnrW9IoyAiEAvdqmvcjHLytXEZZEfZ0nYE7%2BsdqQUOgyWd68Nc0Q%2Ft8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBE3%2FiBQ6fty6mrLAircA3nGdGHp4sOSAnLI1LKLnL6F3W663RSl%2FIfIGqHQDdwJsjyMXRf9t%2B9cnPD1Tov5%2FUehd%2B5Ygpjocs2ZaFOvgd%2BG5DmHbAyUiReK%2FAEpXEkk6dJj3ymxPJo4doJI5UJERglih1o6b1k8nPFPfBIXv2QaROYCW3h3X0Kt542%2BJylneoW2I35WUKkZv1T8xKxbu0wyTo3kmqoeH2BW7aa%2Bz226XCAEjNZ2JAsVIuwq8BAcqd5RjBzFNOwJLu658ikdExKm1vLyRmJTUNK%2BX0HaXeFHnGVNTlyqr4fzyKXDapCj4xn6lUeiINDuGeV5E4TkH5Qk%2B71B0FCvTytUW%2Fuckn2Kpol788Fn%2Bm4NJlVUmBkfmNECzYxA9bamO5r0rVgo25OlwFAADcBw6Ix5HE89bPCwNbc1HiXDSrrS6z2sz6RTcSg27YClZbveFIN2rjfm8NEoL0SLhMSKs3YcbIt7MV5mZtAkuzhiTQCtqDe%2Foe4TxIH91EpCozBNA4mRuB0j5LbPOpEHM8Mc6yMAd3t6J7gzimB132E%2B8dq%2B2DWeyJbdm1bc%2FLUurHS1fofmsThscvwFHLiDDirdNI7KU8VXl%2BeB%2Fh%2BeyG8Ex3mW8vSXSAjii%2BBlOT5%2FLq6El%2Bu0MPbO2cIGOqUBX9Dsmpvi7nu7Y5%2FVBh%2BvVs4DUHksE4HnQBXc4S6yDTcyPnLH8CImt%2Ffv1Dzn7MhbHVxcxtWm9eYyH%2BzgqNyHRUzQPsK1pespnnwNkAy0tYyb%2BRR27VwvYd374%2FVlqKFJ%2F%2FWpw1yfoqXc8sKQcfON4UBrh25Rvl9yT1AQiOiDm0oq%2BxHizbzae7HQHopUm4G%2B3FmffZDsP9ji7YLlI%2B82FlsEwnIz&X-Amz-Signature=02d53ad2f540ae1bdb43112ae650a11b23fd5be4101376bb5bff6e70548f2c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
