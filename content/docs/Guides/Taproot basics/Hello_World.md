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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPMMSWZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHQ0kNhnNNKkt%2FIfjZCYleGlfvXN7y%2Bo3pTVZUytUYF%2FAiEAzIA6bTK7WkiIlfC6OssMDZcozipj4PcIPkOM8RXtReoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAchGYneEvhTtrybRircA%2BYg2LFD4ZiCCb3NBXg5jE0exfTwSLylEpcM8ksZooOcqgJPS9e%2BLX9on2eNKCF3e2Xplj49%2FZTtWsf9FX6D%2F9MlWcfyO2qAtvahgOGSK1Ye7HjU%2B2iNDsZ4yDsu8wBW4TdsqJi8HixNiX81Gj%2F3ZGVrRQUhQR%2Bc2awlLnCGrvDKakL1Unft3nrGZYfSfWyoIK1j8Ub0XKYqVY%2BgmJVD7ye6H5as0VcWa6ygBmJnuzHlfkdgbLH%2FnRwwAJINi9EUI2xqPzIgg12csBLvlAtGLWd3uLfGESW098pVp4IbF8fmY0im27bD%2BEGlhqv2QEHqABLJ79RB32%2ByGhQgqfwTBVzAK7Vrv9hCFEvHDWntxZBKRfyTz68KobEUe4Y3I8HbzVGvZxFI8CTOxneW9pDevVKLjUbDevbuF9wWu8id5%2FS3XUL%2FfXc%2FhtuhPg8sqRk9E%2F7C7TcYibz8OL41u1SswfOdOFUDPn1shZA5iFoDDSMtvE9zElRmnqiPW4jmRxJDtXYz8cewRYPbQfPovlVCW9ejtqcCfOn96s3E0JJrZoI4P8%2BdIbnSmVuJXCNxmMveI7JWSl6mpI%2FKsQI%2FJHpbwZ5UAQSyk24YHj8fhdFUtLNW%2FRKt5vDmrFczz2D2MJqHmMMGOqUBd6yV0tKSp9TBsh3HYbTxlvTFnvG8maS4EerdBQ8O%2BslTqNSWBDNvjVjSNssFpLHXeZVOdDev6WTWyGkoHCiL8kec5%2Fcl%2FaS%2FX0eoNo6SN%2BZgWa%2FL%2F0xE4zIQ3jG3ycycnv2WQCKepSOLB79cBGknaMM9zGp05HbgmQ0gEjbTqbXvK0qQIOolFPPXwRfzkxiDCiK3MtrIuMRAEnd%2FGmmC4z2JOaaO&X-Amz-Signature=e59dddfd3f8c951f51736132efa76fdac1111a2171c0f8e18b03c324d247d7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPMMSWZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHQ0kNhnNNKkt%2FIfjZCYleGlfvXN7y%2Bo3pTVZUytUYF%2FAiEAzIA6bTK7WkiIlfC6OssMDZcozipj4PcIPkOM8RXtReoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAchGYneEvhTtrybRircA%2BYg2LFD4ZiCCb3NBXg5jE0exfTwSLylEpcM8ksZooOcqgJPS9e%2BLX9on2eNKCF3e2Xplj49%2FZTtWsf9FX6D%2F9MlWcfyO2qAtvahgOGSK1Ye7HjU%2B2iNDsZ4yDsu8wBW4TdsqJi8HixNiX81Gj%2F3ZGVrRQUhQR%2Bc2awlLnCGrvDKakL1Unft3nrGZYfSfWyoIK1j8Ub0XKYqVY%2BgmJVD7ye6H5as0VcWa6ygBmJnuzHlfkdgbLH%2FnRwwAJINi9EUI2xqPzIgg12csBLvlAtGLWd3uLfGESW098pVp4IbF8fmY0im27bD%2BEGlhqv2QEHqABLJ79RB32%2ByGhQgqfwTBVzAK7Vrv9hCFEvHDWntxZBKRfyTz68KobEUe4Y3I8HbzVGvZxFI8CTOxneW9pDevVKLjUbDevbuF9wWu8id5%2FS3XUL%2FfXc%2FhtuhPg8sqRk9E%2F7C7TcYibz8OL41u1SswfOdOFUDPn1shZA5iFoDDSMtvE9zElRmnqiPW4jmRxJDtXYz8cewRYPbQfPovlVCW9ejtqcCfOn96s3E0JJrZoI4P8%2BdIbnSmVuJXCNxmMveI7JWSl6mpI%2FKsQI%2FJHpbwZ5UAQSyk24YHj8fhdFUtLNW%2FRKt5vDmrFczz2D2MJqHmMMGOqUBd6yV0tKSp9TBsh3HYbTxlvTFnvG8maS4EerdBQ8O%2BslTqNSWBDNvjVjSNssFpLHXeZVOdDev6WTWyGkoHCiL8kec5%2Fcl%2FaS%2FX0eoNo6SN%2BZgWa%2FL%2F0xE4zIQ3jG3ycycnv2WQCKepSOLB79cBGknaMM9zGp05HbgmQ0gEjbTqbXvK0qQIOolFPPXwRfzkxiDCiK3MtrIuMRAEnd%2FGmmC4z2JOaaO&X-Amz-Signature=170fadbcdb52850e3330a1da3258d1ed380a364cf0493d25971bfd75da1ec9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
