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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWTN765C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BKLqdeciUcEr8vQ0EmFk5NkLtYSSCMBck9eE8rx5LYAiEA6zDGT4u10QcD2wRNVZdeKKP2JBgyIGB5xx86KaTenvIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiB4%2BorNWLT9dBHWyrcA661IRoB%2FHu6VpGu1vCN3vjjPu2At2d3ULfBCF03Q9KIt0JgOD7qZYMzCTg2CPRftSlB9HK5Bgu1EC7qiEfFL5jS3LRa1gsjYAnd5MynPhxJjm1B42hQ6i%2BeuPBS0H50Yt5HFYtmVwYVg8%2FBpun4AWlO4b%2FLZvhr2cmkwJdcpGAR1s3jMQKbh0PMcxokzcTTLkubTYxSeO9nUyrd7gwy0SagbrkZjScwZxzOYmxmF8fppVqLSee4YEpxd0n6RuVy4Xo5Iv6Nri7%2FTS00O9Qvmag0FU1xIfEifx3NdxSRDuJIQ3Ycs0HkA1jKWVj6ICdGXMTpQg3FH1%2FX8d1Tb0hexMDCC9oZHqPfH%2B83f%2BjpQywsnrV26bQjPI%2F6J8DGkDgLM4%2BVy0JtOnrayAuxkSPxqeqQxioK8q1N8YcMz5GmEcYrHv74DjOciYWyxVYnKeiY69af7x3fOEmTpSaFlhtHSOrQki5vW1ZpJOrGkIYSaJ1alXaOW97L3f8wFx4ZoJi%2Bv1DJvd9asCAmLxFWJTMI7%2FYedM%2FbowoY46U9aoGkcGDJhBZ3CVW3lyRORsKSAT35G0uF6ghoZs%2BTp7U7ncNCmP8mLiPYxGQ5wAT3qniyazc9LK9rvfi5FDOi0IggMKfmnr4GOqUBQUg2XcyqLdkJmRFhSUEavT90s3YenTaLuDHb367JUsWpucPGTb7dsmcRfMpXmydDnB12U6G%2FtIvBgRD6GIMuR%2BLWtWk6Jcs6BEd5jx4YKfIa6J5Nbr3M7APyt8lWf%2Fmy%2Fju1bzDNg%2B7V5s0n3G6U0Q7MkiG8lFlfoHeT8ilNEWP0ZJT64lWQWUr17%2BstLXi9XVaxyfMRpSWBFH2D9kyw7pERu8h5&X-Amz-Signature=9e57ded7f7ba751b70154d48e82de5ead6a253c1824d8f87ebefcdfa312067b6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWTN765C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BKLqdeciUcEr8vQ0EmFk5NkLtYSSCMBck9eE8rx5LYAiEA6zDGT4u10QcD2wRNVZdeKKP2JBgyIGB5xx86KaTenvIqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiB4%2BorNWLT9dBHWyrcA661IRoB%2FHu6VpGu1vCN3vjjPu2At2d3ULfBCF03Q9KIt0JgOD7qZYMzCTg2CPRftSlB9HK5Bgu1EC7qiEfFL5jS3LRa1gsjYAnd5MynPhxJjm1B42hQ6i%2BeuPBS0H50Yt5HFYtmVwYVg8%2FBpun4AWlO4b%2FLZvhr2cmkwJdcpGAR1s3jMQKbh0PMcxokzcTTLkubTYxSeO9nUyrd7gwy0SagbrkZjScwZxzOYmxmF8fppVqLSee4YEpxd0n6RuVy4Xo5Iv6Nri7%2FTS00O9Qvmag0FU1xIfEifx3NdxSRDuJIQ3Ycs0HkA1jKWVj6ICdGXMTpQg3FH1%2FX8d1Tb0hexMDCC9oZHqPfH%2B83f%2BjpQywsnrV26bQjPI%2F6J8DGkDgLM4%2BVy0JtOnrayAuxkSPxqeqQxioK8q1N8YcMz5GmEcYrHv74DjOciYWyxVYnKeiY69af7x3fOEmTpSaFlhtHSOrQki5vW1ZpJOrGkIYSaJ1alXaOW97L3f8wFx4ZoJi%2Bv1DJvd9asCAmLxFWJTMI7%2FYedM%2FbowoY46U9aoGkcGDJhBZ3CVW3lyRORsKSAT35G0uF6ghoZs%2BTp7U7ncNCmP8mLiPYxGQ5wAT3qniyazc9LK9rvfi5FDOi0IggMKfmnr4GOqUBQUg2XcyqLdkJmRFhSUEavT90s3YenTaLuDHb367JUsWpucPGTb7dsmcRfMpXmydDnB12U6G%2FtIvBgRD6GIMuR%2BLWtWk6Jcs6BEd5jx4YKfIa6J5Nbr3M7APyt8lWf%2Fmy%2Fju1bzDNg%2B7V5s0n3G6U0Q7MkiG8lFlfoHeT8ilNEWP0ZJT64lWQWUr17%2BstLXi9XVaxyfMRpSWBFH2D9kyw7pERu8h5&X-Amz-Signature=8cdedd15a71ed17010f5b1eecdf260dd2b354ead35ee206d84ff5e43adc02aab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
