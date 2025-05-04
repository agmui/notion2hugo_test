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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGHB32Y3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCPcI%2BpUG79v9RPd77QhQPvXpnzI8W75hmwcZtB75gLrQIhAOCBqRNO7sdI4MgBFCFK7Ycop5nSRBuIJV5z4GjLgeyOKv8DCBgQABoMNjM3NDIzMTgzODA1IgyLFwE9kTKgOVs%2Fsu4q3AMEV6v34g25G81GiDua%2BE27dAc84Vac1PrmFDTUhzgzkm5Ma1bSW1D5cvOTBQ%2BbByFMmjM6Kl3GXaZ5QcsfY2vayQLHrJse7Y%2FPHYMx9uQwczeayFpsT3wJ3iYu9NCeRFcrMqxfgZRS57F%2FoBp3sTBIYA5ABj4S3XVh%2FWoxRVP5ip7E63o0OfV9dBtnfnhiEif5alXqYaCguAFoDf0MIExEujWXbmotlLYnQ%2BS8RL3qZq%2F9sj5cTfRZAwq08xWnCibQFzeRc3to%2BYzAoqG5Cn20wek1RxmeRwjvJ0vB%2BfKr09Uh7S2%2FHjioH7o91eoU4xH2oTpQSaNYRRpPUcBM%2BcE%2Bw1qRyDRYwpQy4yf0eSHObtCmfC%2F2tZ3dwAsZ4Ur%2BLy7X5qzN3iWSpQ3PO%2B4hAFzbtO99sH1YGURibStAKi9ojzOd8JNm%2BRWCcCbdV32w5uPKbMWZ6tmvvoTdD51YDd8rWcb8WXs6mPHLwpIA2sN4g0ZlUwgjKa8ibtvUR8BarSrZHpQuRqFl72OlQUKBgfmASU62AvCMkeiceEdyeQaP8qpLLcsMoFay%2BS0gZ%2Fz1cafUvNn6bwgkxWz7VIyVZ0d5dWiB27N4uIkMr8mJDiPgBkM3ilf6j7OY52kF%2FzDqiN7ABjqkARZYJcIrS4Gsq7fwV2fBlmwDS533VboPIZlAGt7uBtotWaU3Vrl3nd72StymdXJ%2B9eDTMiOwwf4pdGoxmKo0UyYytxW9kfeKMKfj%2BLwH1c6lRI%2BonU5ayzrBFredqPVSiriM5zt0kcRn4F186cme5QgatawXwFbW3zGht%2F7aTLfmNxEfo70qTxMIC5Bl8RqMAo9yi8tVA49XoO9v7huKr7AQJYiI&X-Amz-Signature=5b7a878215b08b4a187f38f0692990326a4d005ebdac0c39ff7f887857569dae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGHB32Y3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCPcI%2BpUG79v9RPd77QhQPvXpnzI8W75hmwcZtB75gLrQIhAOCBqRNO7sdI4MgBFCFK7Ycop5nSRBuIJV5z4GjLgeyOKv8DCBgQABoMNjM3NDIzMTgzODA1IgyLFwE9kTKgOVs%2Fsu4q3AMEV6v34g25G81GiDua%2BE27dAc84Vac1PrmFDTUhzgzkm5Ma1bSW1D5cvOTBQ%2BbByFMmjM6Kl3GXaZ5QcsfY2vayQLHrJse7Y%2FPHYMx9uQwczeayFpsT3wJ3iYu9NCeRFcrMqxfgZRS57F%2FoBp3sTBIYA5ABj4S3XVh%2FWoxRVP5ip7E63o0OfV9dBtnfnhiEif5alXqYaCguAFoDf0MIExEujWXbmotlLYnQ%2BS8RL3qZq%2F9sj5cTfRZAwq08xWnCibQFzeRc3to%2BYzAoqG5Cn20wek1RxmeRwjvJ0vB%2BfKr09Uh7S2%2FHjioH7o91eoU4xH2oTpQSaNYRRpPUcBM%2BcE%2Bw1qRyDRYwpQy4yf0eSHObtCmfC%2F2tZ3dwAsZ4Ur%2BLy7X5qzN3iWSpQ3PO%2B4hAFzbtO99sH1YGURibStAKi9ojzOd8JNm%2BRWCcCbdV32w5uPKbMWZ6tmvvoTdD51YDd8rWcb8WXs6mPHLwpIA2sN4g0ZlUwgjKa8ibtvUR8BarSrZHpQuRqFl72OlQUKBgfmASU62AvCMkeiceEdyeQaP8qpLLcsMoFay%2BS0gZ%2Fz1cafUvNn6bwgkxWz7VIyVZ0d5dWiB27N4uIkMr8mJDiPgBkM3ilf6j7OY52kF%2FzDqiN7ABjqkARZYJcIrS4Gsq7fwV2fBlmwDS533VboPIZlAGt7uBtotWaU3Vrl3nd72StymdXJ%2B9eDTMiOwwf4pdGoxmKo0UyYytxW9kfeKMKfj%2BLwH1c6lRI%2BonU5ayzrBFredqPVSiriM5zt0kcRn4F186cme5QgatawXwFbW3zGht%2F7aTLfmNxEfo70qTxMIC5Bl8RqMAo9yi8tVA49XoO9v7huKr7AQJYiI&X-Amz-Signature=6a7e8747eb52f011d5b851f41b1f489bfeeed311dafffe1b3ad8598a07b24dea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
