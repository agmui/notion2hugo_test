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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPDNLJX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FjswbsMuSFqS%2FslKRDj6IQuz1rI8U215uDMD6OBMeQIgJjPL53Lqx2fgDxwJAN5eRaCsp1oEG5Z%2BmOa2MCUnGPUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGcPWWaB%2BaKvpDiXpircA5HQ1kuXa%2BWOwD7viQhLfaQ1kvkOLjmMQx9%2BJUgxynjVlZEFhAAVLXEf%2F4zTlC3oTdemG2Wvsv%2F%2FRn%2BhpUqSXM7jaf62cMD0wHJfXAGuTPJViSHfpdgYNY9hiwaoBIgmWt0RgF0O%2FFfy0nVpdlRuEPZyoaQpCDvpmb0Xd8SW1mWs9vyYoBrCXj09GFuy02DIjjdG%2FZ3XHm2dd2nCiy6YZvZbZf%2Bl1Nvzi%2B3E9aYDsrvmZpH5NDawyxLH63%2FsuVmvVEMI%2Fcn9YhHl%2Bk%2FuxwMCNxXwQu6X5bjbPsMB8m%2FqnSIyEuN8Z9gtIZ4NwqxftMCByksLZncFqHa5P2HzO9ydzBK81qz76Ihu5EP0%2FiweDHmXbfkmaQ1TQYNcGGo4cZDxZAOuKGz8ouhJxh%2BTw4%2BgAtxA11XIZ3oEfc43qyHWSoqi7osAAtRvhdwzQPFVesoPUHxrG6JHVtieuF4YWthk5NOWpVwak2268zEkDTslVHfVvnPdRXvLk7Vsf6iGtl%2BMJMBzW7tdCFPOq2tucoF%2B11WhuNMzCaaR501rpW89bGJ%2BmZ%2F7Bsrt%2Bm4NtKNSN3oikKt%2BUcWUxhbPK%2BAJWQTTUa5O5ByesQjRnQdrXCeAyOGw%2BdB0LSxcx%2FQRXfRfMLLCxr8GOqUBVKXQQyBI1%2BJhLQO9SWIh0BnF8fzEmNT%2BKsGq%2FX0B1Opc%2FrVvbtxA8oArlM7wt9DwKJzR0yevumpygmGn%2FmtHvoJROy7kETkymQfx5h4An2%2B9hYSFYhosi6Uxl0oeRRaDiDUXGC7Et8ENxKz%2FxlObfESQkbxEmhcFktsvGCNAKKgzgY9rsy88KawYO9XG9Bj9c19n7nYXuisSlKB8%2BG3c01OW9a5A&X-Amz-Signature=2131d2f55558c16a9a4c1a1a0d02f9f648acefb0614b405645ea32ad05e62ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPDNLJX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FjswbsMuSFqS%2FslKRDj6IQuz1rI8U215uDMD6OBMeQIgJjPL53Lqx2fgDxwJAN5eRaCsp1oEG5Z%2BmOa2MCUnGPUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGcPWWaB%2BaKvpDiXpircA5HQ1kuXa%2BWOwD7viQhLfaQ1kvkOLjmMQx9%2BJUgxynjVlZEFhAAVLXEf%2F4zTlC3oTdemG2Wvsv%2F%2FRn%2BhpUqSXM7jaf62cMD0wHJfXAGuTPJViSHfpdgYNY9hiwaoBIgmWt0RgF0O%2FFfy0nVpdlRuEPZyoaQpCDvpmb0Xd8SW1mWs9vyYoBrCXj09GFuy02DIjjdG%2FZ3XHm2dd2nCiy6YZvZbZf%2Bl1Nvzi%2B3E9aYDsrvmZpH5NDawyxLH63%2FsuVmvVEMI%2Fcn9YhHl%2Bk%2FuxwMCNxXwQu6X5bjbPsMB8m%2FqnSIyEuN8Z9gtIZ4NwqxftMCByksLZncFqHa5P2HzO9ydzBK81qz76Ihu5EP0%2FiweDHmXbfkmaQ1TQYNcGGo4cZDxZAOuKGz8ouhJxh%2BTw4%2BgAtxA11XIZ3oEfc43qyHWSoqi7osAAtRvhdwzQPFVesoPUHxrG6JHVtieuF4YWthk5NOWpVwak2268zEkDTslVHfVvnPdRXvLk7Vsf6iGtl%2BMJMBzW7tdCFPOq2tucoF%2B11WhuNMzCaaR501rpW89bGJ%2BmZ%2F7Bsrt%2Bm4NtKNSN3oikKt%2BUcWUxhbPK%2BAJWQTTUa5O5ByesQjRnQdrXCeAyOGw%2BdB0LSxcx%2FQRXfRfMLLCxr8GOqUBVKXQQyBI1%2BJhLQO9SWIh0BnF8fzEmNT%2BKsGq%2FX0B1Opc%2FrVvbtxA8oArlM7wt9DwKJzR0yevumpygmGn%2FmtHvoJROy7kETkymQfx5h4An2%2B9hYSFYhosi6Uxl0oeRRaDiDUXGC7Et8ENxKz%2FxlObfESQkbxEmhcFktsvGCNAKKgzgY9rsy88KawYO9XG9Bj9c19n7nYXuisSlKB8%2BG3c01OW9a5A&X-Amz-Signature=503253795d728d0a17ef8c8c76ecd93ee1680008fbd7eded4bfdc7f5416111f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
