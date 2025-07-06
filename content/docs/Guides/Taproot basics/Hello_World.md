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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IX75RSQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICNotdaUw54xgoIx0qaqRkRpYcQ4yk7FTAx%2B0%2FxAYYh1AiEApI%2B7pEsfnLFic012Qhcg4Z0LkFgTiak%2FZlt9T5tVh%2Fsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDOZ3c1Qb%2BpgnmHhyCrcA72hk9QCgpJJk2K%2Fur%2F%2F7w%2F2upOyoyJGCjHJTBWS22puerN8Q1YKm%2BBJH1wgho1TZnKYCGMuz2Sb%2FnbZaOLgfXxO8OWwVu1ICc6A7oLrKoF5HzMAzS2Zrl8HrFaqvYmFoIM46zwCI4YfLnMbKVcXLf4jisUmsB9ulXrPT6wGbAAwaZfJ%2BXkmE1x4486NNTkE4dyqO4ETgrLuR1Vc6eilwJfLVG00x82hq1USiwjoXcCXHcfn5DOYPNfhCYacSfFEz6TIA2kZmME87ETVgITGoKV0RYvew7xIAVvYR26PuXEiWY%2FDVjbhvX4Zyo6Fv7yuaIGlFtlPilavB8eD5jEfvBUAaE0yXv0PHq0d8r84%2BYiUWBH5knlYcD%2F18dqhS335JiM90E07V2XuD%2BXXvptivMD9qZYUp3fMNiwqK%2B195vqC4F2FLIrZSLjQqJUryjPADDMwqroOWWRZah3qRkDacQSrn%2ByLNjJFbqdx%2B4VF1Sm2QEmLmxTP1e7wdKz9Y9g1RtlDawsi1YDTwJ2RjDRdRKnnhuW7ZrCNJo3MgiFOyEGHq5wzI2gmfKtX93kbP4mBFcXidUHNkkMTjqQcMDZckr1OPmJPatW6CLNLvcYbt%2Fq5PcRnRRTzqqKoqRQJMOzMqcMGOqUBN9WozeVfusbFn58B%2BCbZ4lNdc5quT6DJifhv5jcsppo9OwfxoFJSKMzBBWi6BQ6THWydRsR83wOLYd7QI5y7DnfbAc4yltHZpHcfAeiKDvTd9o4ES1hVkVlnzbyPuplZC80%2FZr1xkJqHj5QeeJRKU56sTRPv28%2BDLTwylq8Ppd5MtrKQuvRxXrF3oLEOrY1hCToIL8%2BfrejYqpPRhwIWqSsvCWMd&X-Amz-Signature=40b8b2551565a381d55c57877fd8af6c69f21660976c3c44cc0a5619295c496f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IX75RSQ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICNotdaUw54xgoIx0qaqRkRpYcQ4yk7FTAx%2B0%2FxAYYh1AiEApI%2B7pEsfnLFic012Qhcg4Z0LkFgTiak%2FZlt9T5tVh%2Fsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDOZ3c1Qb%2BpgnmHhyCrcA72hk9QCgpJJk2K%2Fur%2F%2F7w%2F2upOyoyJGCjHJTBWS22puerN8Q1YKm%2BBJH1wgho1TZnKYCGMuz2Sb%2FnbZaOLgfXxO8OWwVu1ICc6A7oLrKoF5HzMAzS2Zrl8HrFaqvYmFoIM46zwCI4YfLnMbKVcXLf4jisUmsB9ulXrPT6wGbAAwaZfJ%2BXkmE1x4486NNTkE4dyqO4ETgrLuR1Vc6eilwJfLVG00x82hq1USiwjoXcCXHcfn5DOYPNfhCYacSfFEz6TIA2kZmME87ETVgITGoKV0RYvew7xIAVvYR26PuXEiWY%2FDVjbhvX4Zyo6Fv7yuaIGlFtlPilavB8eD5jEfvBUAaE0yXv0PHq0d8r84%2BYiUWBH5knlYcD%2F18dqhS335JiM90E07V2XuD%2BXXvptivMD9qZYUp3fMNiwqK%2B195vqC4F2FLIrZSLjQqJUryjPADDMwqroOWWRZah3qRkDacQSrn%2ByLNjJFbqdx%2B4VF1Sm2QEmLmxTP1e7wdKz9Y9g1RtlDawsi1YDTwJ2RjDRdRKnnhuW7ZrCNJo3MgiFOyEGHq5wzI2gmfKtX93kbP4mBFcXidUHNkkMTjqQcMDZckr1OPmJPatW6CLNLvcYbt%2Fq5PcRnRRTzqqKoqRQJMOzMqcMGOqUBN9WozeVfusbFn58B%2BCbZ4lNdc5quT6DJifhv5jcsppo9OwfxoFJSKMzBBWi6BQ6THWydRsR83wOLYd7QI5y7DnfbAc4yltHZpHcfAeiKDvTd9o4ES1hVkVlnzbyPuplZC80%2FZr1xkJqHj5QeeJRKU56sTRPv28%2BDLTwylq8Ppd5MtrKQuvRxXrF3oLEOrY1hCToIL8%2BfrejYqpPRhwIWqSsvCWMd&X-Amz-Signature=8999ad0d59991da3c3b728bb9a9f910452b9a29fb79dc7d7b960f64c52cd5bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
