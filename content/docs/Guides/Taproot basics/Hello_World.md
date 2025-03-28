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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEWYGMO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Gdc55iwkP6ZOCNj43szcEkC4JkX5C%2FVY4KNxBwpekAiADzYBRxYE%2FOP8Xao16Woc%2BlZJx8uJnuEaDwLsSJLv7Cyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMm%2FGRnn6bp9%2BPfrSBKtwDdxE1ez7tW5GuBC83Th2VkMpLQdHzeGUfVEJhEvWWil57GjEiJal8NjJlmGtXpcXYOrEmgu7dKO%2Fyip6SNuWo7CVlacTfdCjVAW%2By3%2BHgusxSUhtwVDJNnAZt1kjFYDtpg4y28DWI5WqIWGsoocDSF8TNbUx%2FomFQSfvJXdf0OABXnNN2ZFy%2F8wa%2BxHEwJ850MJh6T8XTBbUzNrvaegs5YCQ5T7k%2BarMd2j9REFh4ifq447EZP3h6paxi7C9zzhXAWKzwLLyDgJMUZr7rhY5BJK33bFQ0BR5HqgEkZdgpTdhzqQJLqLEWLcOMKEKHI0p0irzpt5zRzqDLuS2dfbL5QafCDAY8cM9NTIJO3q6nUdqfApg3bwWHc3ICNiFIoTkFD0mHdS31vrTxtyZqgRh6Shyy46E3hUtvtXzRc6nTxZb5U3%2B3iPltljwcK8QuDYwUOEFK0y5JuX7yzKUk9%2FKRTzqKBNHfXzvGlZnOGwBpx3JR%2FqZn8pdvGKHj2LWaJ1RVi2upEw007%2BKUmdl3MPLGTJdM8QZP86kGdSPVoK6x%2FHxL4ptXjP4AUQFHtN0kaobSz18TrgPhwE3NvBRE%2FMquT5U3WKR%2BYFxCSm8Ai35lWY7sK6TbIytpgcn4SyQwk5OYvwY6pgEgFq96n0x3vRC%2Bx%2FcGPvb2IF%2Fv9re3sGyXXAQIat6gEQs67x%2FkbFfPenRM2KSETGCbgrk5vLfCl6%2F0ofJGcS8yY7f1KmrmXWuKHLiDQxqNtFarrAG7JgCsoXwG2PnIcevMw1MeWV%2FFbQ7a6iZFnCPc52jJWojMW4fKyYd9gWu4PQbz3dmXGBVUeNvH43xRzkxISXBCv046jBQSM1IToQPgND49d84x&X-Amz-Signature=53a3f0b523658fa74d9ff3178e1b5557f190340f76715c4bfbf20e4b4e8ebb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZEWYGMO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2Gdc55iwkP6ZOCNj43szcEkC4JkX5C%2FVY4KNxBwpekAiADzYBRxYE%2FOP8Xao16Woc%2BlZJx8uJnuEaDwLsSJLv7Cyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMm%2FGRnn6bp9%2BPfrSBKtwDdxE1ez7tW5GuBC83Th2VkMpLQdHzeGUfVEJhEvWWil57GjEiJal8NjJlmGtXpcXYOrEmgu7dKO%2Fyip6SNuWo7CVlacTfdCjVAW%2By3%2BHgusxSUhtwVDJNnAZt1kjFYDtpg4y28DWI5WqIWGsoocDSF8TNbUx%2FomFQSfvJXdf0OABXnNN2ZFy%2F8wa%2BxHEwJ850MJh6T8XTBbUzNrvaegs5YCQ5T7k%2BarMd2j9REFh4ifq447EZP3h6paxi7C9zzhXAWKzwLLyDgJMUZr7rhY5BJK33bFQ0BR5HqgEkZdgpTdhzqQJLqLEWLcOMKEKHI0p0irzpt5zRzqDLuS2dfbL5QafCDAY8cM9NTIJO3q6nUdqfApg3bwWHc3ICNiFIoTkFD0mHdS31vrTxtyZqgRh6Shyy46E3hUtvtXzRc6nTxZb5U3%2B3iPltljwcK8QuDYwUOEFK0y5JuX7yzKUk9%2FKRTzqKBNHfXzvGlZnOGwBpx3JR%2FqZn8pdvGKHj2LWaJ1RVi2upEw007%2BKUmdl3MPLGTJdM8QZP86kGdSPVoK6x%2FHxL4ptXjP4AUQFHtN0kaobSz18TrgPhwE3NvBRE%2FMquT5U3WKR%2BYFxCSm8Ai35lWY7sK6TbIytpgcn4SyQwk5OYvwY6pgEgFq96n0x3vRC%2Bx%2FcGPvb2IF%2Fv9re3sGyXXAQIat6gEQs67x%2FkbFfPenRM2KSETGCbgrk5vLfCl6%2F0ofJGcS8yY7f1KmrmXWuKHLiDQxqNtFarrAG7JgCsoXwG2PnIcevMw1MeWV%2FFbQ7a6iZFnCPc52jJWojMW4fKyYd9gWu4PQbz3dmXGBVUeNvH43xRzkxISXBCv046jBQSM1IToQPgND49d84x&X-Amz-Signature=98a381ab78243231ac5ade81a74b3199aa7ba94edb53472bf911b889cd92f171&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
