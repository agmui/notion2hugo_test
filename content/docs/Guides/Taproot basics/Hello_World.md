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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZDNGXRH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAy30dq4ZyKkUHVrdIIG1AL8xm3vgQlBDsJlpO328RUgIgVNxNj%2F8QRI9NXK1x1SPjWpEQ7U6w8scz1xbwKFiMma0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDj3%2BRjb7KxvfP%2FYyrcA8yeip7zDfJCx7CenmIdR1MKlZxUoEbxQNtteUoee%2Br5YonSwsWg9okO5Zk350Qcjy%2BonEK6eoiubw4K9hpH4By0dcZCvFZoH8QckOHLVA9GAbZik9a08mgoeHxq9YkMMYWzEAMsnXc7oUoeXSl1IjvB8EYGCOB1QhjJ5tUbI6YUXM81RokDnAKfjlhBknpgW5039hU0QeejfrcGwZBBZXyqSXvlQXjDyd%2FGbcTAcwsWaffOh4Y%2FOP9BKFxf5vXvs7Zd8zDwPT7gqWSErqkTxOx6no58x8DocUbP9sgCjM8bWJIJ3Lhh5QYoSDv9z9JODOenbb75ZXizmFdx8d5V301%2BLoRe9tvuXp2sscgOSca4BCIMFJYB9z7a%2BAR3tFmfrQH7jyHRZs%2F8RPOLhUYi6wrvi8jNNq4hEQ93vbm7XamXhJHkvwBFpJt3E66CDdsbI2%2Bu6qnD%2F5bsQcsbH7lFSoiQTYo6jtRw7vLKwq%2FDaziCN1GfjctXa78DPTqVoRZe1cSyzoVIsvGZB2%2BN9u0Oo74gOaskcff42CqOi85uCEel%2BcFBvkiEK9syscF5o7dRmWiKGoo4cMM30EIgB800VrUy%2FMGWfc7t4GuTy07TeTOfT50Gy%2FwYyN13mJTKMNKV678GOqUBqO7sJ%2FHZ5NmDAsQSQQ5tHwL0r5VSRh84AB3EGqGTfWd52znx%2FIyoOPfEVJmfcmgN7kDTcri4OZ5%2Fch8HyuW7LZkrUSsZ4yJI6KQ%2FOeRToSlhDXqWUTB0bQqT9ztlXxl9RzoPfNMHiVUeGuC2x5aWyX5iz7pjs7yVRQx4W0wZFqOwwZi5b0mU7l%2BGdFUWRHRtUxdKWR7UGyDot%2FbO4brHjJHbYlbw&X-Amz-Signature=ddec35503283bf10717b1239ce42bea8523bce528adc3d2119da5290648ae60c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZDNGXRH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAy30dq4ZyKkUHVrdIIG1AL8xm3vgQlBDsJlpO328RUgIgVNxNj%2F8QRI9NXK1x1SPjWpEQ7U6w8scz1xbwKFiMma0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDj3%2BRjb7KxvfP%2FYyrcA8yeip7zDfJCx7CenmIdR1MKlZxUoEbxQNtteUoee%2Br5YonSwsWg9okO5Zk350Qcjy%2BonEK6eoiubw4K9hpH4By0dcZCvFZoH8QckOHLVA9GAbZik9a08mgoeHxq9YkMMYWzEAMsnXc7oUoeXSl1IjvB8EYGCOB1QhjJ5tUbI6YUXM81RokDnAKfjlhBknpgW5039hU0QeejfrcGwZBBZXyqSXvlQXjDyd%2FGbcTAcwsWaffOh4Y%2FOP9BKFxf5vXvs7Zd8zDwPT7gqWSErqkTxOx6no58x8DocUbP9sgCjM8bWJIJ3Lhh5QYoSDv9z9JODOenbb75ZXizmFdx8d5V301%2BLoRe9tvuXp2sscgOSca4BCIMFJYB9z7a%2BAR3tFmfrQH7jyHRZs%2F8RPOLhUYi6wrvi8jNNq4hEQ93vbm7XamXhJHkvwBFpJt3E66CDdsbI2%2Bu6qnD%2F5bsQcsbH7lFSoiQTYo6jtRw7vLKwq%2FDaziCN1GfjctXa78DPTqVoRZe1cSyzoVIsvGZB2%2BN9u0Oo74gOaskcff42CqOi85uCEel%2BcFBvkiEK9syscF5o7dRmWiKGoo4cMM30EIgB800VrUy%2FMGWfc7t4GuTy07TeTOfT50Gy%2FwYyN13mJTKMNKV678GOqUBqO7sJ%2FHZ5NmDAsQSQQ5tHwL0r5VSRh84AB3EGqGTfWd52znx%2FIyoOPfEVJmfcmgN7kDTcri4OZ5%2Fch8HyuW7LZkrUSsZ4yJI6KQ%2FOeRToSlhDXqWUTB0bQqT9ztlXxl9RzoPfNMHiVUeGuC2x5aWyX5iz7pjs7yVRQx4W0wZFqOwwZi5b0mU7l%2BGdFUWRHRtUxdKWR7UGyDot%2FbO4brHjJHbYlbw&X-Amz-Signature=b981632c80814632ffeef9208ceeb2ba8384691eba92e5370e52f99d540326f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
