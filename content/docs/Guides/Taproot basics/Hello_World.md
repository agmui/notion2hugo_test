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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7SJNRU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEf3MuazGn14oh8hjeDtEzGPSlonPvktxXDseH6WyUzAiEAnvii4Xrsuf9u6V2nIjVxu4w7u40YluB1q5nHx886t6Qq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDH8QC4ATt8f8dSTPKyrcAwXN%2BPK6ckwKEyemhtT%2Fh9hanlvfljYPK1LwpQEpjlTfuXpI4DxTwkFYeX0tVSwnHYs1haKX9gTDQJYM5hHpngi3i7KhG%2BvVHzkqNYveSn5Y0fNTNmU0ZjR8bueFIR1k%2BbRNPeOxXbOFz3%2BubEaF7wbq4AeJBVRlH0bwDu61glvlfCV8MV%2BB6O3TNlZ3psZHFZPFUMbahkHbivTPXw76mGh6HfG24ttXexYLg51OLXrbqn%2F%2F1gBQww0ZvHa4xSrD4f4lJTriBI4lU0hBoO83lAzfAbMWDtvSs%2Fh%2FRS0ewAjg6v92tHxVQ6enyE3Pox%2B35%2BYkKHhNfBNoQoV6LljBDTEcNkD%2FeGQTsBxkODgby6UFYTqAyphwDjdUqv8yEg1X37Pyo2I7SHW75G2plu84KJXmmpBbBlGk8cW3HFxmva%2FokvKZF3PYy4aI3qDRUP56DkiCh6Lu3%2BHPE0gfaQ92RDyJpsiHzghegQTGU9TKbmOXor16qWSXd8dBjqjjFVjex5gTGJyooBMraK0ialnc%2BI10JBpjpcO96ucrAVz8x7PpvSCXIJbz6YYYOtvt0nTJsKufvcPd1MLM9j0MJJquefbNxIT9ZyCgRn%2FEnMuxuncDWBEwoXKrHXdseD7AMJjhoMEGOqUBaEu%2ByfL2WRd4BquJ9ai6RyZ%2FY3dPjtg35RVKS%2F40YlYe1D4u3SXMD7M7dzQd2lkMTix%2FJzBwVPlH2H0XAnTx%2FpkYzpRqGxsS72RKXExDQmSMp07hWOXLQnf4ZD2ghNNzFKRjNb%2B6Dd%2FpKrhmO25%2F2pSWKrPFIks3LXb281BAOzZSwPnNO6NHLG9jZobYFGjwcf8NDFFRloEK4sVvb4agEPGOcLw%2B&X-Amz-Signature=3a35724f0220a767bac1f743b8a98cceaaaacae7d03dc9764f9eed6ee352fd6e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7SJNRU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEf3MuazGn14oh8hjeDtEzGPSlonPvktxXDseH6WyUzAiEAnvii4Xrsuf9u6V2nIjVxu4w7u40YluB1q5nHx886t6Qq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDH8QC4ATt8f8dSTPKyrcAwXN%2BPK6ckwKEyemhtT%2Fh9hanlvfljYPK1LwpQEpjlTfuXpI4DxTwkFYeX0tVSwnHYs1haKX9gTDQJYM5hHpngi3i7KhG%2BvVHzkqNYveSn5Y0fNTNmU0ZjR8bueFIR1k%2BbRNPeOxXbOFz3%2BubEaF7wbq4AeJBVRlH0bwDu61glvlfCV8MV%2BB6O3TNlZ3psZHFZPFUMbahkHbivTPXw76mGh6HfG24ttXexYLg51OLXrbqn%2F%2F1gBQww0ZvHa4xSrD4f4lJTriBI4lU0hBoO83lAzfAbMWDtvSs%2Fh%2FRS0ewAjg6v92tHxVQ6enyE3Pox%2B35%2BYkKHhNfBNoQoV6LljBDTEcNkD%2FeGQTsBxkODgby6UFYTqAyphwDjdUqv8yEg1X37Pyo2I7SHW75G2plu84KJXmmpBbBlGk8cW3HFxmva%2FokvKZF3PYy4aI3qDRUP56DkiCh6Lu3%2BHPE0gfaQ92RDyJpsiHzghegQTGU9TKbmOXor16qWSXd8dBjqjjFVjex5gTGJyooBMraK0ialnc%2BI10JBpjpcO96ucrAVz8x7PpvSCXIJbz6YYYOtvt0nTJsKufvcPd1MLM9j0MJJquefbNxIT9ZyCgRn%2FEnMuxuncDWBEwoXKrHXdseD7AMJjhoMEGOqUBaEu%2ByfL2WRd4BquJ9ai6RyZ%2FY3dPjtg35RVKS%2F40YlYe1D4u3SXMD7M7dzQd2lkMTix%2FJzBwVPlH2H0XAnTx%2FpkYzpRqGxsS72RKXExDQmSMp07hWOXLQnf4ZD2ghNNzFKRjNb%2B6Dd%2FpKrhmO25%2F2pSWKrPFIks3LXb281BAOzZSwPnNO6NHLG9jZobYFGjwcf8NDFFRloEK4sVvb4agEPGOcLw%2B&X-Amz-Signature=e09bf03c003f847f7c28c390df69fe1ea8ceb3b218efc23e3e03f75db63bd68a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
