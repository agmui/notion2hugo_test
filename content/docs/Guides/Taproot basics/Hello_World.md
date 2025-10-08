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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GU6F7UU%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC0kdo0JhaZ2kv2gBU3RpKBNoHBO8jxu2dSIT8F6rxE8wIgNVs6aSjr0Td1Cg4yXx%2BgSwKuBMiaeNV1pmMEHoL9oN0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGopXSTlqZLNArEzPircA7AlMN4KGEGQmZjCGyTCYtQdLHDRIMQHNjUCBjmZDHOXQ2MMUnIHl%2BnLYMLBalu9h6lxEw6WRqrIO8Y%2FaOCzJoBiPPRlfixrFED0LYFtSKy1wTMNrTKwEoLQAceEgBEvupHJcR8SSdRYfMZTFythknvToXWQB%2FznNMUd8JZoR9NjYG%2FwA72da%2BC9vGDqG08M%2BpS%2BqfVeoDCPjMjFknxPbwKZjRGCP2eOlflRV2w02qn%2Bq8TMUhbkVqyfgGrE0LT5FFnAu0vTi5HvgVBF46AU3fZv4%2FEZbfOOwt7227kVjqTAUvIOClbIOo342PKuG80A3%2F%2FzTL9IlALPhUtqExY52w9UG%2BgkddOGMMaD%2F7fZAx6NQaPmDgWxzLjWlkZ5yYk0233iyGiPzM66S5EaoF8QPmX9CEximsx9BSI%2FKQnLLtsovR%2BdBCmQMJZ6boS6fggsu2u%2FFaizddtE0PrlhNpFn4lAq1vQnIy9ZOG%2Fvu7fHBjm6QFytQ2pj9He1amhBlOPLjW%2F52VylCTrV7DtoquCyPnpuRFBE3sgnVKHNh1huTF2f%2FsAuqIKt%2FlSaNwNvwOOlw%2BNrtxBWv%2FtjcYNoWc3ZcSdGH%2FLka9i%2BTU3KZkAdrxKCQl8AnK8bY9HwbpqMKPnlscGOqUBAES%2BzjMUFzYgq0%2B2ClR04tLQTR5ZLpOdxaV0A7%2FhR8HTEaR0OhRnGa3qypURSO0TDDgc3FvyUf4Yb6MkAydsCfrwQRRW2J0fCMAxFiG66fCpHZPzFxBaNIuOxASkKjKA5oEHwedEAv7f1QLRGdJeLml%2BB%2Fn48eQnKw93%2B0VRZAkmILryyjNGvLX2iHsECXag8%2BCQJtY18fl%2B8mXePBzFP8q90qLR&X-Amz-Signature=fad7ccf503a6aee51f5c542624f11d2a4e547426235021da69a8caf9c59393c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GU6F7UU%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC0kdo0JhaZ2kv2gBU3RpKBNoHBO8jxu2dSIT8F6rxE8wIgNVs6aSjr0Td1Cg4yXx%2BgSwKuBMiaeNV1pmMEHoL9oN0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGopXSTlqZLNArEzPircA7AlMN4KGEGQmZjCGyTCYtQdLHDRIMQHNjUCBjmZDHOXQ2MMUnIHl%2BnLYMLBalu9h6lxEw6WRqrIO8Y%2FaOCzJoBiPPRlfixrFED0LYFtSKy1wTMNrTKwEoLQAceEgBEvupHJcR8SSdRYfMZTFythknvToXWQB%2FznNMUd8JZoR9NjYG%2FwA72da%2BC9vGDqG08M%2BpS%2BqfVeoDCPjMjFknxPbwKZjRGCP2eOlflRV2w02qn%2Bq8TMUhbkVqyfgGrE0LT5FFnAu0vTi5HvgVBF46AU3fZv4%2FEZbfOOwt7227kVjqTAUvIOClbIOo342PKuG80A3%2F%2FzTL9IlALPhUtqExY52w9UG%2BgkddOGMMaD%2F7fZAx6NQaPmDgWxzLjWlkZ5yYk0233iyGiPzM66S5EaoF8QPmX9CEximsx9BSI%2FKQnLLtsovR%2BdBCmQMJZ6boS6fggsu2u%2FFaizddtE0PrlhNpFn4lAq1vQnIy9ZOG%2Fvu7fHBjm6QFytQ2pj9He1amhBlOPLjW%2F52VylCTrV7DtoquCyPnpuRFBE3sgnVKHNh1huTF2f%2FsAuqIKt%2FlSaNwNvwOOlw%2BNrtxBWv%2FtjcYNoWc3ZcSdGH%2FLka9i%2BTU3KZkAdrxKCQl8AnK8bY9HwbpqMKPnlscGOqUBAES%2BzjMUFzYgq0%2B2ClR04tLQTR5ZLpOdxaV0A7%2FhR8HTEaR0OhRnGa3qypURSO0TDDgc3FvyUf4Yb6MkAydsCfrwQRRW2J0fCMAxFiG66fCpHZPzFxBaNIuOxASkKjKA5oEHwedEAv7f1QLRGdJeLml%2BB%2Fn48eQnKw93%2B0VRZAkmILryyjNGvLX2iHsECXag8%2BCQJtY18fl%2B8mXePBzFP8q90qLR&X-Amz-Signature=4e824817d307170956451b333d959038d8ccaf2b37f228f58cc1f40b8ae92eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
