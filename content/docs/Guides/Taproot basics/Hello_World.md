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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=7a264175e829cd60d6984bdeca945cd61d3597dcdd9b3f3c678b235de863b482&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=efe3d825a0466c8e0845986ed8ab5cd271d404db1c180414374f99c866d62f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
