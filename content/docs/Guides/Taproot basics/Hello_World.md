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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2E3ZV26%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDsglP3ADO5jpO51sU9hiy2RPWgj5RAh6JwWAlHsa0AjAIgKYx8VlIu64Pj9Gg%2FWxk%2FsHCGZ4j752RdyYZJmQSzVXUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMP3FZa%2BmgAVDns%2BpCrcAzj8oxjWSJn6T6ZQRnJ3165Ogg5uvYXVIpUppK6J0G1ZcJEuSuuLvm6koseJfNvDmsQCG0VajMB3fPWZpu9IgMxIQK%2B7vzRteqdBUclnPmxjivnfgAre3IvrfCDOEOK41YAdPG4McCR0%2B21Sw4u4LqFIEsdpkohQyQRwkaCnIY7fIC7HuKf5WOGRi3OOTtwKq%2FBM01uolVH4hXFjKrladiu4xj9UJIxewt8TVF1r5JB4s6h0hA3A8iNKa0yo63eGB1oZpy5ZqK8mu%2Fn23Qi%2FFs68x9sxnFcAuXfrOtPNLsi624p5GHgowwZZf0PyOFbFRKkd%2FEcpYUaGqKkT9IRnUmSmYROOsLkwMxvRSUo8EymhMtW7B1dQ%2FBg0xJzwo1VG4DqhDXHmgjyluDHFoQzzQrw%2BCoZjni7RiwoRxnUVVYmj%2Fvr26T87VrF72oxxvF%2FnSIxWUAB3IVlXD1ak9xcG6%2Bn6iQtnD2B%2Bn482FTtIRPaJYvhlxiB870acGMPkWm1KYQ1DxfNJuSepvLA8XhLw0qxeS9wTbQiiIA2z2O%2Fxl9HBf%2F7vTj2mtaNRgeF7STKqasvxfm7jiHzh7PyjpZ7vc9H%2Ff9OaL5NtqdVMZi9V4Oozid9YYEuVCniIIB3nMMewwL0GOqUBb1xSdP8im2gf42JMvlQrCvnS5xCZtIm%2BT2DuqvQjL4dPOBvObx%2By1ad29uaA0apyIjvcI7fnJqLWOLTqA4U6mkWfwLni35EfXrYkebufTH8%2BqE2MjU%2BUgBu%2BlarXfBb%2BLhaXPsZR%2B1yLf0Le2P6CuKYjJeBqJrlBA2GcIT5DrwcIRpbTO2sUlAbKVBS4Poa7xntew4sqPvWHZNdhR2O1LpYI7b6A&X-Amz-Signature=2a40a9deb490918f09d0a64b78a5765db71e8cfa87eb9694b27ee9fdf9b84fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2E3ZV26%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDsglP3ADO5jpO51sU9hiy2RPWgj5RAh6JwWAlHsa0AjAIgKYx8VlIu64Pj9Gg%2FWxk%2FsHCGZ4j752RdyYZJmQSzVXUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMP3FZa%2BmgAVDns%2BpCrcAzj8oxjWSJn6T6ZQRnJ3165Ogg5uvYXVIpUppK6J0G1ZcJEuSuuLvm6koseJfNvDmsQCG0VajMB3fPWZpu9IgMxIQK%2B7vzRteqdBUclnPmxjivnfgAre3IvrfCDOEOK41YAdPG4McCR0%2B21Sw4u4LqFIEsdpkohQyQRwkaCnIY7fIC7HuKf5WOGRi3OOTtwKq%2FBM01uolVH4hXFjKrladiu4xj9UJIxewt8TVF1r5JB4s6h0hA3A8iNKa0yo63eGB1oZpy5ZqK8mu%2Fn23Qi%2FFs68x9sxnFcAuXfrOtPNLsi624p5GHgowwZZf0PyOFbFRKkd%2FEcpYUaGqKkT9IRnUmSmYROOsLkwMxvRSUo8EymhMtW7B1dQ%2FBg0xJzwo1VG4DqhDXHmgjyluDHFoQzzQrw%2BCoZjni7RiwoRxnUVVYmj%2Fvr26T87VrF72oxxvF%2FnSIxWUAB3IVlXD1ak9xcG6%2Bn6iQtnD2B%2Bn482FTtIRPaJYvhlxiB870acGMPkWm1KYQ1DxfNJuSepvLA8XhLw0qxeS9wTbQiiIA2z2O%2Fxl9HBf%2F7vTj2mtaNRgeF7STKqasvxfm7jiHzh7PyjpZ7vc9H%2Ff9OaL5NtqdVMZi9V4Oozid9YYEuVCniIIB3nMMewwL0GOqUBb1xSdP8im2gf42JMvlQrCvnS5xCZtIm%2BT2DuqvQjL4dPOBvObx%2By1ad29uaA0apyIjvcI7fnJqLWOLTqA4U6mkWfwLni35EfXrYkebufTH8%2BqE2MjU%2BUgBu%2BlarXfBb%2BLhaXPsZR%2B1yLf0Le2P6CuKYjJeBqJrlBA2GcIT5DrwcIRpbTO2sUlAbKVBS4Poa7xntew4sqPvWHZNdhR2O1LpYI7b6A&X-Amz-Signature=47b5dda9a5492b0fa7aa45a4b7904a06f2ea74e4431b4173cdfc62c277cc93e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
