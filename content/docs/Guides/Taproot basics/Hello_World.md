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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPEGQBM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR1jzkfUhtr7kY3JTT5SQMLNvmQrlf24f3tFqvYe%2BPeAiEA5m%2BOegRSQXJRsFTbypEKrXILktSllk5FaOgIJHm9wjYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdG0PX%2BX%2B9MqkC%2FCircAyrmM8Fudwy6FDcJeHKZEaf2JVeX5vojQ7pZDZo3DVOFyznajwkYehuyfwvRjHKVy2mWevqF%2FyqPLp81WzC0RdKCCB4tRY0WceTCz8FW9jbzfHvwXhFoja3sH4EHZUvok8%2BMPWqB75KckqwzX6EfDnzAJSZlkmrtT7I30yHShIWoV5Kb9jOzEBd0SE4f5Kv7Y13GS3rb12ih1NzWjs%2Bu4N7kmDXNj9LBQHAI%2FhutDknRIakgzhZ9QgLJi8RjcX2RXFdjo2npOMSLv0svIWT8N5wEfaMoBPXRKKpKLwTc%2BgHw9Hg2qnEx0HNfVtgq%2F3nzMo0nvrbIUkKSZLOZTDyTOD5%2FerVvR79ayJA69%2F9AQ7loJyQH5Ht%2BRtt0FORdNoMZpHYBxNkRPxl%2Bj2xBMlWaPuqCwrVyTAbFiKRFlSO33bZogEjM18eV6SXtf6vEjHXXuMb29uss24acCmbOkfBKF1SQGxLNEYZV06Doa6K7aFq%2BKmxsyMW1axuneoEb1SGkVX5YphyS6AD0ZqRb5kwsbHsaw%2FBpiGvSt2b%2Bhoa5mgmqSnKJm3OK1%2FVP8epF%2B9HEoLshXU6VQSB%2BHsc9dqSG8piBuOu65HrxODpGeFiI5l7OOMVTDuoMGi5bqF%2BzMPWj1cIGOqUBy%2BF8IZk9D94ZUF0h%2FEUrxSZCj%2BbGGsj2MyMAz3A3bPEaWUMFvOHnzD1G8qNbmiTfRV2Fko3h0rMgKN5wM%2B7ahnr6SLNRy1H8SUAa4YczTG8Slv7yRCtabfTVOFQRxv3s5s%2BopIrV%2B6Oh1GROXqxxwi%2F6SOsTf7lOO2zt%2FtIZuyPu6FbFKmnSc27VYvU9hJW7fFaQgWMxpqYQCXQb4Bp44PlplrZL&X-Amz-Signature=df2208c44eac13ec0ec024f11f7db0d7a8ca6b826bffae67f5ed5b13b72b4623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPEGQBM%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBR1jzkfUhtr7kY3JTT5SQMLNvmQrlf24f3tFqvYe%2BPeAiEA5m%2BOegRSQXJRsFTbypEKrXILktSllk5FaOgIJHm9wjYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdG0PX%2BX%2B9MqkC%2FCircAyrmM8Fudwy6FDcJeHKZEaf2JVeX5vojQ7pZDZo3DVOFyznajwkYehuyfwvRjHKVy2mWevqF%2FyqPLp81WzC0RdKCCB4tRY0WceTCz8FW9jbzfHvwXhFoja3sH4EHZUvok8%2BMPWqB75KckqwzX6EfDnzAJSZlkmrtT7I30yHShIWoV5Kb9jOzEBd0SE4f5Kv7Y13GS3rb12ih1NzWjs%2Bu4N7kmDXNj9LBQHAI%2FhutDknRIakgzhZ9QgLJi8RjcX2RXFdjo2npOMSLv0svIWT8N5wEfaMoBPXRKKpKLwTc%2BgHw9Hg2qnEx0HNfVtgq%2F3nzMo0nvrbIUkKSZLOZTDyTOD5%2FerVvR79ayJA69%2F9AQ7loJyQH5Ht%2BRtt0FORdNoMZpHYBxNkRPxl%2Bj2xBMlWaPuqCwrVyTAbFiKRFlSO33bZogEjM18eV6SXtf6vEjHXXuMb29uss24acCmbOkfBKF1SQGxLNEYZV06Doa6K7aFq%2BKmxsyMW1axuneoEb1SGkVX5YphyS6AD0ZqRb5kwsbHsaw%2FBpiGvSt2b%2Bhoa5mgmqSnKJm3OK1%2FVP8epF%2B9HEoLshXU6VQSB%2BHsc9dqSG8piBuOu65HrxODpGeFiI5l7OOMVTDuoMGi5bqF%2BzMPWj1cIGOqUBy%2BF8IZk9D94ZUF0h%2FEUrxSZCj%2BbGGsj2MyMAz3A3bPEaWUMFvOHnzD1G8qNbmiTfRV2Fko3h0rMgKN5wM%2B7ahnr6SLNRy1H8SUAa4YczTG8Slv7yRCtabfTVOFQRxv3s5s%2BopIrV%2B6Oh1GROXqxxwi%2F6SOsTf7lOO2zt%2FtIZuyPu6FbFKmnSc27VYvU9hJW7fFaQgWMxpqYQCXQb4Bp44PlplrZL&X-Amz-Signature=b7d39760bbe763951f1a2f45bd82aeaa4ce1e5196dca639716e633168a8b912f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
