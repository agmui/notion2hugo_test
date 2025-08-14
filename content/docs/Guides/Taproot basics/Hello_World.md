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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7QIFLO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIVU2WSffLhS3jGqSibiXQ9GWCIPeFqSx8r%2F0GCF9%2BpAiBeeTyIWBJLzumpnl%2BhmRPiD5ds1Z4zYQlN8KRRbjQCCir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMoiV05BU5z%2B5mHvhqKtwD2fEH1B%2FNaoFnDbVXn5qQHyDuWBLTOEa0qXWOzXuc9f9zuhSuPb3mt%2BUXkzuf7AqzIn16g7yx9cVvNnMeptYFPCxDx0bLa7ghvxtx5fQ9X6gSunduiRAg2UpCD%2FhUhZzO13VL4XTSwRp%2FFOgovegGWje62%2B1UcOxEBKe1oBUoMPPtwvAOMNqvGBLz8lgYxwOUDRd4wz29nM%2BF4Ka2L1i33Klo9GstmpyKCntfSGHx98OsFw5TTvcoQMHjPyFTKsBRmFc2dbxFwlW0dNCnRTJ8jVGaby9wt%2B9BDnbG72HKrX1yyXepQxLQx%2Ffp2KIrk2r4tPR2K41O68nXv6wd6p%2FiY1Gz4DOiaXc25JOm4zb9z8oqygzkydk0Q78mm4QUeHGyVzquVY4nbeNd%2B%2B7My3nT9cC2I3oowRPEvluQzCaumzk7X5At04%2Fmp6%2B8p%2Fs8J5t7IUGsuGg63QxQUJ%2BKCcsA%2BC7%2FjBbGkryamC0KNGxF%2FB3F0iLTY19ADl4p%2FwfRUo1y%2Fgketg%2BQmMFjbzX1J8FfAbvDPNHT%2B%2FPUVizmZiQLS9DBOARyHyQU%2F2BGETaUzPyAPLieZfIEXn8jIDr4UwMdMiV8hLnv4ofYGLjP5UmG5TuH7OcvKHgMuttThLswyrD2xAY6pgEXAuQl0pi9xuE6mzlG5E8vusKw3OOk9vT1QS64BulbuuV8h49qhX9OFHcVxYlbg2XyYuwVJ1jooQQLt2S%2FSH5kVvDClsFri2utPmIIpRz%2FHF4Xi7JWUK9y9JkDBtIcX1VULo7KGudP7ow59lboSMQJkigVfmefSAnUMxJvZ6ocTj%2BMPA%2Fbyy7xl89HMdDy3LbXCI4uvguHol5BGSFvpqma1Rf1bJbO&X-Amz-Signature=deab66260c2660a401b5773a7ff5d883b7c0eac716ef9a7f9a9485f180ccd65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC7QIFLO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIVU2WSffLhS3jGqSibiXQ9GWCIPeFqSx8r%2F0GCF9%2BpAiBeeTyIWBJLzumpnl%2BhmRPiD5ds1Z4zYQlN8KRRbjQCCir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMoiV05BU5z%2B5mHvhqKtwD2fEH1B%2FNaoFnDbVXn5qQHyDuWBLTOEa0qXWOzXuc9f9zuhSuPb3mt%2BUXkzuf7AqzIn16g7yx9cVvNnMeptYFPCxDx0bLa7ghvxtx5fQ9X6gSunduiRAg2UpCD%2FhUhZzO13VL4XTSwRp%2FFOgovegGWje62%2B1UcOxEBKe1oBUoMPPtwvAOMNqvGBLz8lgYxwOUDRd4wz29nM%2BF4Ka2L1i33Klo9GstmpyKCntfSGHx98OsFw5TTvcoQMHjPyFTKsBRmFc2dbxFwlW0dNCnRTJ8jVGaby9wt%2B9BDnbG72HKrX1yyXepQxLQx%2Ffp2KIrk2r4tPR2K41O68nXv6wd6p%2FiY1Gz4DOiaXc25JOm4zb9z8oqygzkydk0Q78mm4QUeHGyVzquVY4nbeNd%2B%2B7My3nT9cC2I3oowRPEvluQzCaumzk7X5At04%2Fmp6%2B8p%2Fs8J5t7IUGsuGg63QxQUJ%2BKCcsA%2BC7%2FjBbGkryamC0KNGxF%2FB3F0iLTY19ADl4p%2FwfRUo1y%2Fgketg%2BQmMFjbzX1J8FfAbvDPNHT%2B%2FPUVizmZiQLS9DBOARyHyQU%2F2BGETaUzPyAPLieZfIEXn8jIDr4UwMdMiV8hLnv4ofYGLjP5UmG5TuH7OcvKHgMuttThLswyrD2xAY6pgEXAuQl0pi9xuE6mzlG5E8vusKw3OOk9vT1QS64BulbuuV8h49qhX9OFHcVxYlbg2XyYuwVJ1jooQQLt2S%2FSH5kVvDClsFri2utPmIIpRz%2FHF4Xi7JWUK9y9JkDBtIcX1VULo7KGudP7ow59lboSMQJkigVfmefSAnUMxJvZ6ocTj%2BMPA%2Fbyy7xl89HMdDy3LbXCI4uvguHol5BGSFvpqma1Rf1bJbO&X-Amz-Signature=cce8dc8e74660ddefc299652c968d7bce7b0041845a17b0af8063baa46f64b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
