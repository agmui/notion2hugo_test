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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44QFXIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDyETdqfg6ovNd%2FuHbu1mOnchcR9evkwaF8WlXiF4iYgIgfC%2BobYM%2BFX7MrDfkJiZHxzUzqNei9MgLumhOtX4GBWIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtWarRvMpyqbGFWbircA%2Fg9DyZL%2FPG%2BtNCcKOY1cpyjMffhANfYzO5toD5jmizvDhmr3kA9y7c8iin21PdYPm4Hdoiq6mF%2FNGv7wYcR7O2qKUW6pFVUkbfYMLAcT%2B%2BXO5alX1Glj%2B%2BmgWz8fDReLsi6KxOMXH3lbzDO5LIQ18%2FGRYPpPCDSAvUt3mgUY%2F34PJOJlV6b1cPwA1YX1zpquP98WYOugzEgP4YMWMFEUEl9iH53RGDPQIpH%2FfJx9gty2G1Acy7ctj9ity2AdrkgSwPKNZZTygSGD5gUnmp%2BKpAiL6YzJztYSq7OT%2FYu2SrWKTCoIYHu%2FsxL7eQ%2FCcr37%2B0zUuuKIJELm9ygg2RvYCMqIqjEOPjRlvaISiB4z%2BKXDS7aIclj72Q8WAlMcNzgmJmM53K%2BWiTMX1sUH1GDnJ8CTUXVYrCUg5IsMOlFCSBzGKsNKsdqrMeKUh4AeRh%2F51v29MFirM2APT%2FLnWQ%2FZbKGHBjaqFKobVX49UPVyWI6iXxjya7QxQ17SU4zmugPreoOTN5vV5L5heCvP1qC37hEzX7ElHzlpVhMlg8%2FjUV5LxqD%2F3%2FhgpA4bdJjw1p8t4tctMzbabxh4vnRxYC3V1UdS3Eh0coEPLS6ieexuN3Z3nYj4R9AaCIZOWmhMLufqL0GOqUBcSDWmlIu6hppdkX%2FiGbrtCupTdqM1c3fg4R9ov4Hl1ufWO%2BDLX2b9juyve6D6c5xNHP3i5u9vNSXgJhWs9XsylSEsCzh7pE%2F6%2B9QQgQPRukyqHK1kl1YFSMazd1yiCj7F%2FWcrPjeQMjsGoWO5q%2BUN%2Bq%2Fu%2F%2BSsDpW0%2FxVy0SabT7L1k0pirwuR8tC2swTQ8ch5%2F9Oh53uh%2BApDTAifVZSrlFYFp6K&X-Amz-Signature=34284a05bb9b97592745a45a218511cf822c729f2686e87c62eb86d6c65fd056&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44QFXIN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDyETdqfg6ovNd%2FuHbu1mOnchcR9evkwaF8WlXiF4iYgIgfC%2BobYM%2BFX7MrDfkJiZHxzUzqNei9MgLumhOtX4GBWIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtWarRvMpyqbGFWbircA%2Fg9DyZL%2FPG%2BtNCcKOY1cpyjMffhANfYzO5toD5jmizvDhmr3kA9y7c8iin21PdYPm4Hdoiq6mF%2FNGv7wYcR7O2qKUW6pFVUkbfYMLAcT%2B%2BXO5alX1Glj%2B%2BmgWz8fDReLsi6KxOMXH3lbzDO5LIQ18%2FGRYPpPCDSAvUt3mgUY%2F34PJOJlV6b1cPwA1YX1zpquP98WYOugzEgP4YMWMFEUEl9iH53RGDPQIpH%2FfJx9gty2G1Acy7ctj9ity2AdrkgSwPKNZZTygSGD5gUnmp%2BKpAiL6YzJztYSq7OT%2FYu2SrWKTCoIYHu%2FsxL7eQ%2FCcr37%2B0zUuuKIJELm9ygg2RvYCMqIqjEOPjRlvaISiB4z%2BKXDS7aIclj72Q8WAlMcNzgmJmM53K%2BWiTMX1sUH1GDnJ8CTUXVYrCUg5IsMOlFCSBzGKsNKsdqrMeKUh4AeRh%2F51v29MFirM2APT%2FLnWQ%2FZbKGHBjaqFKobVX49UPVyWI6iXxjya7QxQ17SU4zmugPreoOTN5vV5L5heCvP1qC37hEzX7ElHzlpVhMlg8%2FjUV5LxqD%2F3%2FhgpA4bdJjw1p8t4tctMzbabxh4vnRxYC3V1UdS3Eh0coEPLS6ieexuN3Z3nYj4R9AaCIZOWmhMLufqL0GOqUBcSDWmlIu6hppdkX%2FiGbrtCupTdqM1c3fg4R9ov4Hl1ufWO%2BDLX2b9juyve6D6c5xNHP3i5u9vNSXgJhWs9XsylSEsCzh7pE%2F6%2B9QQgQPRukyqHK1kl1YFSMazd1yiCj7F%2FWcrPjeQMjsGoWO5q%2BUN%2Bq%2Fu%2F%2BSsDpW0%2FxVy0SabT7L1k0pirwuR8tC2swTQ8ch5%2F9Oh53uh%2BApDTAifVZSrlFYFp6K&X-Amz-Signature=3c6662383b9764ca74987fbaccc3a3e3586622ed70db76b2f01a646b0ad422bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
