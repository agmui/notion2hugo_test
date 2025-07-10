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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDGB43K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbbmSAJHE6urt%2FZ4SqpJBfFwbBVMhr%2Fc3oY8%2FPcEj9sQIgfFeoSdnrDFwH%2FWBy9wZ3Rs%2Fn%2BW5W23y2YfPBlp3sH%2BUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A7XKWO4%2FBOQvyOircA7noqvXzqd3ZXbRadIBhB4OmLxJt%2BlZcPwNnPTKz2JItSlLYc%2BQ0ldBd5x76yc5JRawR3Ptu3tOxnOYC8vLjWP56vkkA9iZTkVOTgsQHhaYvlcZShMW1P29pZ0MA4r9jfYhYyd4J1wB1KeL8j%2FPU9CTCkFON58JOHCT14ejFUWXUf9trwlLAcoVn2LUn4th7ehKrBBtkzTpikNEpUckxAHTY0mvkR1XuaqvlynI3e4wfT%2FwyuvgMacTcsSYWKomG3hHM2ZK%2BNJKqwLFXjQvtptGn4Nat73gqhznFwljk5WaeO822byHzkGWlcMgugw7QyW1Uenzq13KNWvoRF6Co7MqU8IpzGEi%2FJ10TYLe0QvD0q%2FHG6xRQWfaCwahJEdL496mqvMGuDe3OCGICSujw52T6m%2FyLAd%2BjRf%2Bh3Wknu6%2FWZAY0qfDef27ma6ZRDt%2BCM02nvYs27ycBlZ1qkMGILVYQyD1LRgY4cqze9BrJ%2BJa%2B2pB2N8JzSMiFbe%2F5kmyzyEgZ3RwSgAxX4wQmEuil4nh47%2F503RmU5V5%2F%2FU1DBLJwp5ffQe2kVrSKHWCMIF7%2FUkQDuARVC%2Bqsro9pb8PYwe76g8N2ARPnDLmaQT8V7n%2FitYumyWEM59%2FfkaA1MPXQv8MGOqUB1T01%2BKMpu6pVcuH5kXDC%2BZgbmVPzwnGTlpSPaOyWEp9%2Foc%2BVkuXlYrwzTQRhV6rI0aCzI5sHngirlpppaKMIoKNf7lSp4DqpC7ZNpgGJUwC5VAP%2Felo%2FOj5JFKWKSoqJIyzntxhmcvACMpltILt3bqRWDNcrx7Z3rngKFwUbwZHhGdnTPz7PZPUjfkLbHo6rQOAaI%2B7YrSsw9GBYtpT8Cjcc%2FPoA&X-Amz-Signature=4360dc9a4f3d6b1ba49ded0d65fa14326abb4b83e23fd12b5323bc5ca024d561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDGB43K%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbbmSAJHE6urt%2FZ4SqpJBfFwbBVMhr%2Fc3oY8%2FPcEj9sQIgfFeoSdnrDFwH%2FWBy9wZ3Rs%2Fn%2BW5W23y2YfPBlp3sH%2BUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2A7XKWO4%2FBOQvyOircA7noqvXzqd3ZXbRadIBhB4OmLxJt%2BlZcPwNnPTKz2JItSlLYc%2BQ0ldBd5x76yc5JRawR3Ptu3tOxnOYC8vLjWP56vkkA9iZTkVOTgsQHhaYvlcZShMW1P29pZ0MA4r9jfYhYyd4J1wB1KeL8j%2FPU9CTCkFON58JOHCT14ejFUWXUf9trwlLAcoVn2LUn4th7ehKrBBtkzTpikNEpUckxAHTY0mvkR1XuaqvlynI3e4wfT%2FwyuvgMacTcsSYWKomG3hHM2ZK%2BNJKqwLFXjQvtptGn4Nat73gqhznFwljk5WaeO822byHzkGWlcMgugw7QyW1Uenzq13KNWvoRF6Co7MqU8IpzGEi%2FJ10TYLe0QvD0q%2FHG6xRQWfaCwahJEdL496mqvMGuDe3OCGICSujw52T6m%2FyLAd%2BjRf%2Bh3Wknu6%2FWZAY0qfDef27ma6ZRDt%2BCM02nvYs27ycBlZ1qkMGILVYQyD1LRgY4cqze9BrJ%2BJa%2B2pB2N8JzSMiFbe%2F5kmyzyEgZ3RwSgAxX4wQmEuil4nh47%2F503RmU5V5%2F%2FU1DBLJwp5ffQe2kVrSKHWCMIF7%2FUkQDuARVC%2Bqsro9pb8PYwe76g8N2ARPnDLmaQT8V7n%2FitYumyWEM59%2FfkaA1MPXQv8MGOqUB1T01%2BKMpu6pVcuH5kXDC%2BZgbmVPzwnGTlpSPaOyWEp9%2Foc%2BVkuXlYrwzTQRhV6rI0aCzI5sHngirlpppaKMIoKNf7lSp4DqpC7ZNpgGJUwC5VAP%2Felo%2FOj5JFKWKSoqJIyzntxhmcvACMpltILt3bqRWDNcrx7Z3rngKFwUbwZHhGdnTPz7PZPUjfkLbHo6rQOAaI%2B7YrSsw9GBYtpT8Cjcc%2FPoA&X-Amz-Signature=9605932d5f764ba1473735db207b146c640e09a4393e58c454a7abee6859899d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
