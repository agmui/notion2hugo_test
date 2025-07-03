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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HSDAJH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoaTQy81UQLKodKwE0q31rF7GKyAEjBCRbQWTvHLRNiwIgLvAJlnXiAjy1e9DTwg18lFqNStf8nQrNvlV614qWPHgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGJPh7Ev1x5TyCWKLircA%2FYTX5b6dG2giVdgLAFfSwxboal1W%2FmOI8fAODPXC1USKhydWP3hEy6k63UWPuU4Qdy42rc35g%2Bws%2Be0LrPoYJzPVSQ8rjbkYdTGF8SAUih613OEFxIprpvO%2BB4FIVw6UKxllpXT3%2B%2F1%2BkETJcQ1ZGS0ty91whznxUUsv7t4E7zq3NsfkzDdGG2PFU5JVRijnRpxEGhsERJa31GmMlPB8%2FD01dXuvetL%2FLdSiYjrHaUxh06yh8zPh0u7rpfc%2Bh1nAbRHdlYsFO1dupdXb6TpsgJAYqNTWqUROFxTIPEMdl%2F3F037qk7XYATlpnL4zrLB6hCwaKgb6YaqQ%2BSqjv2F1oS%2Fqb2iTolds%2BXf3BoiW9QR1SrqnwvK3EYu1nICZVTvDnWGfZoMNksUaKZm8yUzHB33fGeBPZmYU6OLEy5QAurj6gsp1MGFHm4PPIJpSyAx1PHkJOdhHHBmC%2FcHV34L6yenfNvrhu%2FMWSVAzCl2A0bD804Ie5ChAUT8%2FTCGX0aRhg13XL%2BK75AQnc1iCIykC0ZGLekG6r9WO9prBSmVUI8QCngdCUEAJp0h3WQmjH1Y0TAaZubOE6FqVJ1%2FqMf42oR%2Bdd5DJJkBd5E2mdjkRS7quYJLduF%2B1jM2mAmwMO7hmcMGOqUBK9fenhIgBnzc7cu9lMX%2Bd1KkYsdWx3%2Bxo008h7wyq0Qp3uEEEo2U97foPLBSrCHISoNX6S6p3ujIQnmuVgKzNR9Hrq3MAuB92pYRia5hypE6LVzADE%2Fa2WhgZy9SGlsgBpv1mMxAX20TNh%2BMXAOdFHfoZBoLsR3p0dXLTIArtVGtEn2wUoWs87%2BR9JQQfnvnc%2Ffg9cdRgakqXRCyAu7H1L1vNSo9&X-Amz-Signature=45cb1731f738688f45e1e8a49e87d971a791c78ed7d2109870b22df886a93e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HSDAJH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCoaTQy81UQLKodKwE0q31rF7GKyAEjBCRbQWTvHLRNiwIgLvAJlnXiAjy1e9DTwg18lFqNStf8nQrNvlV614qWPHgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGJPh7Ev1x5TyCWKLircA%2FYTX5b6dG2giVdgLAFfSwxboal1W%2FmOI8fAODPXC1USKhydWP3hEy6k63UWPuU4Qdy42rc35g%2Bws%2Be0LrPoYJzPVSQ8rjbkYdTGF8SAUih613OEFxIprpvO%2BB4FIVw6UKxllpXT3%2B%2F1%2BkETJcQ1ZGS0ty91whznxUUsv7t4E7zq3NsfkzDdGG2PFU5JVRijnRpxEGhsERJa31GmMlPB8%2FD01dXuvetL%2FLdSiYjrHaUxh06yh8zPh0u7rpfc%2Bh1nAbRHdlYsFO1dupdXb6TpsgJAYqNTWqUROFxTIPEMdl%2F3F037qk7XYATlpnL4zrLB6hCwaKgb6YaqQ%2BSqjv2F1oS%2Fqb2iTolds%2BXf3BoiW9QR1SrqnwvK3EYu1nICZVTvDnWGfZoMNksUaKZm8yUzHB33fGeBPZmYU6OLEy5QAurj6gsp1MGFHm4PPIJpSyAx1PHkJOdhHHBmC%2FcHV34L6yenfNvrhu%2FMWSVAzCl2A0bD804Ie5ChAUT8%2FTCGX0aRhg13XL%2BK75AQnc1iCIykC0ZGLekG6r9WO9prBSmVUI8QCngdCUEAJp0h3WQmjH1Y0TAaZubOE6FqVJ1%2FqMf42oR%2Bdd5DJJkBd5E2mdjkRS7quYJLduF%2B1jM2mAmwMO7hmcMGOqUBK9fenhIgBnzc7cu9lMX%2Bd1KkYsdWx3%2Bxo008h7wyq0Qp3uEEEo2U97foPLBSrCHISoNX6S6p3ujIQnmuVgKzNR9Hrq3MAuB92pYRia5hypE6LVzADE%2Fa2WhgZy9SGlsgBpv1mMxAX20TNh%2BMXAOdFHfoZBoLsR3p0dXLTIArtVGtEn2wUoWs87%2BR9JQQfnvnc%2Ffg9cdRgakqXRCyAu7H1L1vNSo9&X-Amz-Signature=d3c88b6445f974602e164130e8c6d633fe085ffee7d865d8e68d6eacda1335fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
