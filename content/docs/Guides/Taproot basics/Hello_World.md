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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EN2ZKW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5048OpCdiTVX3u%2Fm5eVsVlni6bav9k2yxZXKB%2F2C5JAiEA8mdi18aUcOx8symM9BH%2B5iCcBHUjFYYk%2FxFww8wMszIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOYMHQ8pBz3AZWKuLircA67Tu6%2FLxDhHBvd4nkhz5Wlc%2FRztrdXwLVgcd0i2YI2JMkEueQehv%2FE17yjf91wOuAKHyn4PtUd9oxNYLJp0AXJ8z0qiQWOIqadpXuWzqxGQAAOuATNsjj0YW0YOJiu0BgEvnSgor21Ah%2FhLNqWKdHXp3w%2B0VIhWcsLcf8PfYeJfsbL4xTtE3p%2FV2pNTMDmtkNr5aMUFT%2FiXR4l4%2Fwsb6MmnH9JgDWn9JDUnVhf3lGfRG3ErbhFEevBJpU6jcl3EYQxW44SLANAhv2c9VyfxBx7CIFwsAoyLMb3LHxGAvpu5qzI8lLV4abQXV7mpxFZkjuFujzAGUjipvr%2FEAvEuY%2BVcigmswG%2FX4vQCABnxqAMG4QvNDRKadhKhsA2FPbmWL4nJ4UTAWSXo6Xllxwh7Ntl6BY1oZBTxtQ9ajthciT5yMBQiYkpxSr8oOnjgGYcUEVWitkJBgx7rCCSIY4Dj2UjHC%2FYcnvcLruCh55I2WODGLiusNIAqBaVFQDNbWLFjHQWodi9cQ3mfSkVEybCyFlg4mX%2FE8kuGYWZuKB4IalefACPFhiYvlRfUQUwip9CFmRIS8ZwmY5UCMODjmOcXjipuTTruSJSe66T2lwjwpWimI9s55ofNFQ1v%2BOTuMNz%2F5MAGOqUBpOEfASUwoWGld8W1H%2BjQtXM2g66e1G%2FDvbq3XbvU7%2BKil4OUsm2KhAxH8fPmfNardRFVdaU8iP79%2FNMoSP1QIcKpv9t5%2BUYRIXP07IAVBqNto5eejcDcQKrPzsr%2F8pAVqYsDokvpsYTut4Wd7fB%2F2Ehb2dllrWnVX6YYhW9vDfPfMhNkE22ng9v66YcarAmZSYcu1V7p%2B3iWJgLYV2ArB7NohK97&X-Amz-Signature=5176e922f15f4691103f76b63cae6665449548342db5b7cce6127a33939c1ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EN2ZKW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5048OpCdiTVX3u%2Fm5eVsVlni6bav9k2yxZXKB%2F2C5JAiEA8mdi18aUcOx8symM9BH%2B5iCcBHUjFYYk%2FxFww8wMszIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOYMHQ8pBz3AZWKuLircA67Tu6%2FLxDhHBvd4nkhz5Wlc%2FRztrdXwLVgcd0i2YI2JMkEueQehv%2FE17yjf91wOuAKHyn4PtUd9oxNYLJp0AXJ8z0qiQWOIqadpXuWzqxGQAAOuATNsjj0YW0YOJiu0BgEvnSgor21Ah%2FhLNqWKdHXp3w%2B0VIhWcsLcf8PfYeJfsbL4xTtE3p%2FV2pNTMDmtkNr5aMUFT%2FiXR4l4%2Fwsb6MmnH9JgDWn9JDUnVhf3lGfRG3ErbhFEevBJpU6jcl3EYQxW44SLANAhv2c9VyfxBx7CIFwsAoyLMb3LHxGAvpu5qzI8lLV4abQXV7mpxFZkjuFujzAGUjipvr%2FEAvEuY%2BVcigmswG%2FX4vQCABnxqAMG4QvNDRKadhKhsA2FPbmWL4nJ4UTAWSXo6Xllxwh7Ntl6BY1oZBTxtQ9ajthciT5yMBQiYkpxSr8oOnjgGYcUEVWitkJBgx7rCCSIY4Dj2UjHC%2FYcnvcLruCh55I2WODGLiusNIAqBaVFQDNbWLFjHQWodi9cQ3mfSkVEybCyFlg4mX%2FE8kuGYWZuKB4IalefACPFhiYvlRfUQUwip9CFmRIS8ZwmY5UCMODjmOcXjipuTTruSJSe66T2lwjwpWimI9s55ofNFQ1v%2BOTuMNz%2F5MAGOqUBpOEfASUwoWGld8W1H%2BjQtXM2g66e1G%2FDvbq3XbvU7%2BKil4OUsm2KhAxH8fPmfNardRFVdaU8iP79%2FNMoSP1QIcKpv9t5%2BUYRIXP07IAVBqNto5eejcDcQKrPzsr%2F8pAVqYsDokvpsYTut4Wd7fB%2F2Ehb2dllrWnVX6YYhW9vDfPfMhNkE22ng9v66YcarAmZSYcu1V7p%2B3iWJgLYV2ArB7NohK97&X-Amz-Signature=914aca4c92aeef1b0731974881a60f25e5a0f713fb2e0cc1b85bfbc4295443f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
