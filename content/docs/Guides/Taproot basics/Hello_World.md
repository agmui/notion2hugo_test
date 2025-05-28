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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LZCGU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWijA637%2BdkK4qBkSLw0weca3tKAD1Yy4fIrLAY5ShZAiEAwXY6lC5WkMl7fu95hfVCU2UtB8Z76%2FrYJLc17hJmAq8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPbverFtZzUezMdpsCrcA8T9fcEPCztPOmtNHzRvDMe0rrSDhcwQzTGAj9DHv3mn2ip8EdHYduk9gjNJMRd1ROt3QwI1K9%2BzTwPannACahAl7oPmU%2FGxQIaEPtqmeYHvNYE%2Bj2AIHRr5SG0YrHRP3jTIq%2FxOdmYjRv3cFfQYKzRGGwFV0lUfuveKuoza8UHvo99vk92%2FRxrf98iuu9ZeUSh%2BjOYsp%2BDaoYNRbk95EturQzu8ZQKooP2nhA8C1cN0geBgAOwQuBiWqb%2BLXN3sVn91PmVc0sXd8X7l%2FF7wyE01mL%2BqGaGEIRStH9oOX%2FL%2BnwNhlkT7FKbUIbYie7UtN9ySZu36Nvwnc1Q%2BmtfommzWkdFAn0iGvNnXZC3qSARetGJwDHE1sQbA%2FDZkRWHeDmvE2zerUkPvFIhWdXhpZrKwMqJC2ZMLce7GyUb7uII57pUpfj8VChUr8A6iCS2YoOVmdmGp6ZKQUEp%2F3tJGwId62dwdUG%2B5097sn8Ng9GCFAQWs%2BoiyIC8TlMigoRmFVeSExW8%2Bmd18tDtaRes9DPsB6HiSJ9A9eSs26pgOvH5odXruNtw8U8MVxD8jU9lN0YKZAcupsCxT0LYFGRxC%2F8GWnnm%2FZwClWrYGVlwH4blRjYXQaCiMNOfMNUTqMM343MEGOqUBLlQmoWJC5Eb0B8sJoeKaPS%2FJdTpJs5FRihzkR2AwdHT9Xa3xylRYwuC8H437DDotlzmGp%2F3b4N%2B%2BXXCzCCg5WdtudwZGEFLDa6sKcTQCC%2FV9ColRUovBvvQl%2BoLiCsYtfhIxrh9woviWuRSr3eLzeyDy53bQG%2FrJ6UIeCdG%2B6yo3Hbucs6DxTiR5UQXp2hkDXR2omSS8Gpyg8Ng2sBm1zAePv9%2F9&X-Amz-Signature=d335147f097c0f519ab7604ddb3c84a720a269447da6e015878d474fac51d6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5LZCGU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWijA637%2BdkK4qBkSLw0weca3tKAD1Yy4fIrLAY5ShZAiEAwXY6lC5WkMl7fu95hfVCU2UtB8Z76%2FrYJLc17hJmAq8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPbverFtZzUezMdpsCrcA8T9fcEPCztPOmtNHzRvDMe0rrSDhcwQzTGAj9DHv3mn2ip8EdHYduk9gjNJMRd1ROt3QwI1K9%2BzTwPannACahAl7oPmU%2FGxQIaEPtqmeYHvNYE%2Bj2AIHRr5SG0YrHRP3jTIq%2FxOdmYjRv3cFfQYKzRGGwFV0lUfuveKuoza8UHvo99vk92%2FRxrf98iuu9ZeUSh%2BjOYsp%2BDaoYNRbk95EturQzu8ZQKooP2nhA8C1cN0geBgAOwQuBiWqb%2BLXN3sVn91PmVc0sXd8X7l%2FF7wyE01mL%2BqGaGEIRStH9oOX%2FL%2BnwNhlkT7FKbUIbYie7UtN9ySZu36Nvwnc1Q%2BmtfommzWkdFAn0iGvNnXZC3qSARetGJwDHE1sQbA%2FDZkRWHeDmvE2zerUkPvFIhWdXhpZrKwMqJC2ZMLce7GyUb7uII57pUpfj8VChUr8A6iCS2YoOVmdmGp6ZKQUEp%2F3tJGwId62dwdUG%2B5097sn8Ng9GCFAQWs%2BoiyIC8TlMigoRmFVeSExW8%2Bmd18tDtaRes9DPsB6HiSJ9A9eSs26pgOvH5odXruNtw8U8MVxD8jU9lN0YKZAcupsCxT0LYFGRxC%2F8GWnnm%2FZwClWrYGVlwH4blRjYXQaCiMNOfMNUTqMM343MEGOqUBLlQmoWJC5Eb0B8sJoeKaPS%2FJdTpJs5FRihzkR2AwdHT9Xa3xylRYwuC8H437DDotlzmGp%2F3b4N%2B%2BXXCzCCg5WdtudwZGEFLDa6sKcTQCC%2FV9ColRUovBvvQl%2BoLiCsYtfhIxrh9woviWuRSr3eLzeyDy53bQG%2FrJ6UIeCdG%2B6yo3Hbucs6DxTiR5UQXp2hkDXR2omSS8Gpyg8Ng2sBm1zAePv9%2F9&X-Amz-Signature=808794a398d592e5075fcf52352801d6b1e237592023b996113f3539ef7c72af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
