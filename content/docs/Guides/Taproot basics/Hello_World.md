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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXL6GXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEKXHTa6AllBxl2HuJkvqhsGZ6FTcecKo45A3gbl0EVAiBu41rE2qyzAD3AUXlHKmvfFEGAPxMdOtEZdpcunU4kkiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdybPEqNWLIxG7NylKtwDar8gSNsRH2Y9NcGoVgfQGhIq4%2FMNdi6on9jFszIk%2BPJa4xU8%2BT0HxNZqljtNUK4eKQ8oQDf31%2FtCreq2tx644IZiZPsmIUH7LROk4Bl7WIAWn6wnVw04GVtfRnCEYvgb0z3IFuDDQu2p3vfElnIoQqpc6pVLfY260ArEcJIb40zX4KbkTcqozkpolBTt70ogGb0aRt4GRABC4%2BQs9jABihT0vEl661ihtnz%2BU35Jy78F4kilsm8tV%2FGuDbc1Za0tl6XwtVWN5%2FNG73m59O%2BJbpLG%2Fe2IYW9A3HS8lVF7R%2BztUUs9R50XQbZo%2FcgFXuiK38p6Fa0XFj4U6vDEF2E5Bj14xS1QF%2BktqIAyeRHrzdhiwz8DCfGasz4eUyopgPJq6lVdH0MX1wN9tXeeseqNB%2FbICrmAOYRgtqeJmolXfiJJy6OwORE1JppuntBHKMWFIA3M8TxvWeywacOsBtd1yuJ98k9EQ1pN6Mu5eCb8i9iWpUSqX6xJ7%2FtkwF97F6%2FWDVmQr2iZrExPzryi%2B7pOOFBObPC0B8J7etJH%2FAAEhY50pr%2Fl2xcNvfx5gzWbaXBasn%2B%2BxR5sarG59qn7kUezOateKDIYYVQ61NQxzFhO100tWgUEYL2qUoT4tJ4w6vmFwwY6pgE54dqAN3r9x%2BZzqGcUmpxV8EshbQR1Pj%2FwdWlSm3BSQo6MYCi9nW2fwT7CLiU%2Bve6pEt6ybI0bqpbpMJ0DFrRC04yM4fyorEH0%2F2C0wpKArKKdxilV27BiUcuwBAU%2B7iVZGhCHuyxQZUKnx5nrcmUZxntwjaQpGDWFn9nSTjsiM%2Bp3PkaHBeSRb0oJr63ju%2Fb9LRvkIQIcyET52hvElWE%2BsKOgwBpF&X-Amz-Signature=37cfa4784ad3a86e2f2753d9c059e7fb979f5f1ef5922216c88e3ad713102bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXL6GXB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEKXHTa6AllBxl2HuJkvqhsGZ6FTcecKo45A3gbl0EVAiBu41rE2qyzAD3AUXlHKmvfFEGAPxMdOtEZdpcunU4kkiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdybPEqNWLIxG7NylKtwDar8gSNsRH2Y9NcGoVgfQGhIq4%2FMNdi6on9jFszIk%2BPJa4xU8%2BT0HxNZqljtNUK4eKQ8oQDf31%2FtCreq2tx644IZiZPsmIUH7LROk4Bl7WIAWn6wnVw04GVtfRnCEYvgb0z3IFuDDQu2p3vfElnIoQqpc6pVLfY260ArEcJIb40zX4KbkTcqozkpolBTt70ogGb0aRt4GRABC4%2BQs9jABihT0vEl661ihtnz%2BU35Jy78F4kilsm8tV%2FGuDbc1Za0tl6XwtVWN5%2FNG73m59O%2BJbpLG%2Fe2IYW9A3HS8lVF7R%2BztUUs9R50XQbZo%2FcgFXuiK38p6Fa0XFj4U6vDEF2E5Bj14xS1QF%2BktqIAyeRHrzdhiwz8DCfGasz4eUyopgPJq6lVdH0MX1wN9tXeeseqNB%2FbICrmAOYRgtqeJmolXfiJJy6OwORE1JppuntBHKMWFIA3M8TxvWeywacOsBtd1yuJ98k9EQ1pN6Mu5eCb8i9iWpUSqX6xJ7%2FtkwF97F6%2FWDVmQr2iZrExPzryi%2B7pOOFBObPC0B8J7etJH%2FAAEhY50pr%2Fl2xcNvfx5gzWbaXBasn%2B%2BxR5sarG59qn7kUezOateKDIYYVQ61NQxzFhO100tWgUEYL2qUoT4tJ4w6vmFwwY6pgE54dqAN3r9x%2BZzqGcUmpxV8EshbQR1Pj%2FwdWlSm3BSQo6MYCi9nW2fwT7CLiU%2Bve6pEt6ybI0bqpbpMJ0DFrRC04yM4fyorEH0%2F2C0wpKArKKdxilV27BiUcuwBAU%2B7iVZGhCHuyxQZUKnx5nrcmUZxntwjaQpGDWFn9nSTjsiM%2Bp3PkaHBeSRb0oJr63ju%2Fb9LRvkIQIcyET52hvElWE%2BsKOgwBpF&X-Amz-Signature=e80b762c68f95a733a708a8505cfb1f5f8317c48e7b2ac11479cad5d0c5ec0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
