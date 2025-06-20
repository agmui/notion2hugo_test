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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUZKOFX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW0cc4q8Qh4TWGxybXvuhqHf6fuEluKw6JvZfeyfI0pQIgKrP4mOszemiozg0TfWwYMYKaF777bPgkDT9eKdoV7H0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoifQ7mXdVE5%2B9ehircAx6oRK0qxlsJenn6RjuYmLQ2sfF1CyN6lMSct5d3r30lBviywQ8mulwWM1sHdRTATz7kFCxPobv8gtD6HW9t%2B1y56mR1%2FL3B0Ud3Xv6b%2FfvBid%2FHBfVmDyI9%2FugFdJjueI12%2FY06pC%2BsFr5hF2Z23rfRGSc9Ya0BltVGw%2FDOQCs63vz7xy3bGnPEqx8zmKYa%2FNFkyN8oJaTYkRSAWoJ%2BgJBAQFfYYmoG03eEHx%2BzPeG8tPEZ%2BIyQKoqWAaLs9INnGqSpIcWS%2B%2F60Pdvlb9gHJUFl4VJXCESCsOxQZLYd17NQFRKJoM2PZ4584G1VMGaIEf%2Fan9xWdtrDen4wYYAA3IWp5FEj0ZNYDa7rUZ3chYt6CUQbd6v1EK7aPOhvrKO8t3rWfYEGY1cD3fynTUaCke5hzZ6qFxq2NKhvSAkQk2x%2FmG3ishFyp%2BoDjBuCZmP4oryJ6xwni2CMykYb3PQ8HjFIlGI%2B7UlINGt0kzSF8RKsGS9C67q%2BZQMEKTb49AfOU%2FNkvqhELoydRSCiuXDrQhaUpMw0Dci0BhUUqDHn2oYaTH849bIDJzKQkVKeXc4KRGDNxQUfkPy%2B5zfCYDT%2B21rHlr1QbxPvZVrIZp4ePb9BQkagvZn6r6dljaUVMJaz1sIGOqUBThmvGtJ2YOIZUzq%2B3nyuADm%2FvH7NyKreQ73zDO4gb0nSWD0k3zNzNFSmJiGpDNDgbheFHUJpujSBberGBYN%2BnOYqb4FD2B4MwQRwobmCHnb8FD8Vi0CI16mIHTYtjhl5S95z2IgWu1s6NaJ8YlOYQ339uQN9%2BwkYBcxjJplMxnJp7GNvUYjQDt9O4nyKJ1C4%2FHiMxSgwznAP1izq%2BOJhxzkO1aaB&X-Amz-Signature=5f9d2c5010d5636dfa35b3bbbb87f7314dd2a25f30e6293e978ee5c7358b83af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUZKOFX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW0cc4q8Qh4TWGxybXvuhqHf6fuEluKw6JvZfeyfI0pQIgKrP4mOszemiozg0TfWwYMYKaF777bPgkDT9eKdoV7H0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoifQ7mXdVE5%2B9ehircAx6oRK0qxlsJenn6RjuYmLQ2sfF1CyN6lMSct5d3r30lBviywQ8mulwWM1sHdRTATz7kFCxPobv8gtD6HW9t%2B1y56mR1%2FL3B0Ud3Xv6b%2FfvBid%2FHBfVmDyI9%2FugFdJjueI12%2FY06pC%2BsFr5hF2Z23rfRGSc9Ya0BltVGw%2FDOQCs63vz7xy3bGnPEqx8zmKYa%2FNFkyN8oJaTYkRSAWoJ%2BgJBAQFfYYmoG03eEHx%2BzPeG8tPEZ%2BIyQKoqWAaLs9INnGqSpIcWS%2B%2F60Pdvlb9gHJUFl4VJXCESCsOxQZLYd17NQFRKJoM2PZ4584G1VMGaIEf%2Fan9xWdtrDen4wYYAA3IWp5FEj0ZNYDa7rUZ3chYt6CUQbd6v1EK7aPOhvrKO8t3rWfYEGY1cD3fynTUaCke5hzZ6qFxq2NKhvSAkQk2x%2FmG3ishFyp%2BoDjBuCZmP4oryJ6xwni2CMykYb3PQ8HjFIlGI%2B7UlINGt0kzSF8RKsGS9C67q%2BZQMEKTb49AfOU%2FNkvqhELoydRSCiuXDrQhaUpMw0Dci0BhUUqDHn2oYaTH849bIDJzKQkVKeXc4KRGDNxQUfkPy%2B5zfCYDT%2B21rHlr1QbxPvZVrIZp4ePb9BQkagvZn6r6dljaUVMJaz1sIGOqUBThmvGtJ2YOIZUzq%2B3nyuADm%2FvH7NyKreQ73zDO4gb0nSWD0k3zNzNFSmJiGpDNDgbheFHUJpujSBberGBYN%2BnOYqb4FD2B4MwQRwobmCHnb8FD8Vi0CI16mIHTYtjhl5S95z2IgWu1s6NaJ8YlOYQ339uQN9%2BwkYBcxjJplMxnJp7GNvUYjQDt9O4nyKJ1C4%2FHiMxSgwznAP1izq%2BOJhxzkO1aaB&X-Amz-Signature=b868f37b74cc33e6f7337d0647f05c2f9b1ee8c9a9209dec4bf2d1f1c3101777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
