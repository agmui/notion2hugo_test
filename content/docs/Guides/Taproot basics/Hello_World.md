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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HC4P2F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGoEg7HokmMhUoceOA9T4FBc4Om3%2BUHovMqCfWTb83x6AiEApdL1DIjMLdRCqfQ%2B6A4j2habdY5yYgd3%2BvQbRYDOCXoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7YEthhfzf8bavb8yrcA4l7B%2Fpz%2FtoVZ5YD77UXOOJYfEQAZ%2FnJsUE0tqOLi%2Bl405ShTrrqQ0nInWOb0o1f4EOBLFXYu8sTY%2FE1OtaGxg4U9%2F3jG0zCyCIStPgem1UKSaor4rNUTK0QYjgIEPsE%2ByfAhrOcUGvaiqiCta5uwGy6J17YyolMmDyNUNUf4v17ydGSGq30y9xmj6PWALEL1gGTo%2FWbutl1B0MktguFTADZAsax2RBExArZ5K5d3TWEZyE2wAisZfVm8t%2FJROXA%2Bvb1c6D4Ch0Y1ezQ4V2SiecZTnGebPWWCrnbqKL0Cezey%2Bdw6axXLH%2FSh%2F7TGH%2FsujUXBNpQJI%2B3cDwXDdcZqmqMF%2BN%2B9mGf8gP5RWpVYoItKmDwT%2BhHMxaUcv6jtxGZHKN5OQsUnlE0z2qofY3OgWhbvEgQAKWiEEuMi850NKhR1eSdTAk03ZU2iMhwYlJiDxBOvnA7%2BIUt78NPONjr%2B1yMZCVJSHuFBKmQzUJjx6bywSxd1uhwm8ucTNW5Qde06%2Frj%2F%2B7LLdgemLKEpxrjR431LwYAqtQUB0kWkzbRIo11epgxrpzT0Oc5irJlOFAIFRYWIRdvaNldCQ3%2B7gmPlTAQoQt8zi9TfG4OBECzdyu463NAEwJ%2FSgfFdwiEMMfNub4GOqUBX%2FZg8wKSvRoaUll8hUra3l3WNLOVy1Rnf6kO8fpICAxHxCvUBhwRvrLPqeTZzIx%2B1pAgibitwQvyxr3plLqF9Lnk5pkC6cFvQ7QLhGlmF8j54lHxNEdHyyj%2BnrYKcdRvUoU20hFHAfu%2FvJGZlWJMwHy82Cr6OekGl4U4chR9Jbfgz5YQPzGO59OZpxvH9693Zh%2FgV1gpRYHam1zh5flaAPmdSTPH&X-Amz-Signature=c92b9238dd3392180f2e718a6e220f7425422ef8ecfde3ef12154ef0de2ae21f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HC4P2F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGoEg7HokmMhUoceOA9T4FBc4Om3%2BUHovMqCfWTb83x6AiEApdL1DIjMLdRCqfQ%2B6A4j2habdY5yYgd3%2BvQbRYDOCXoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7YEthhfzf8bavb8yrcA4l7B%2Fpz%2FtoVZ5YD77UXOOJYfEQAZ%2FnJsUE0tqOLi%2Bl405ShTrrqQ0nInWOb0o1f4EOBLFXYu8sTY%2FE1OtaGxg4U9%2F3jG0zCyCIStPgem1UKSaor4rNUTK0QYjgIEPsE%2ByfAhrOcUGvaiqiCta5uwGy6J17YyolMmDyNUNUf4v17ydGSGq30y9xmj6PWALEL1gGTo%2FWbutl1B0MktguFTADZAsax2RBExArZ5K5d3TWEZyE2wAisZfVm8t%2FJROXA%2Bvb1c6D4Ch0Y1ezQ4V2SiecZTnGebPWWCrnbqKL0Cezey%2Bdw6axXLH%2FSh%2F7TGH%2FsujUXBNpQJI%2B3cDwXDdcZqmqMF%2BN%2B9mGf8gP5RWpVYoItKmDwT%2BhHMxaUcv6jtxGZHKN5OQsUnlE0z2qofY3OgWhbvEgQAKWiEEuMi850NKhR1eSdTAk03ZU2iMhwYlJiDxBOvnA7%2BIUt78NPONjr%2B1yMZCVJSHuFBKmQzUJjx6bywSxd1uhwm8ucTNW5Qde06%2Frj%2F%2B7LLdgemLKEpxrjR431LwYAqtQUB0kWkzbRIo11epgxrpzT0Oc5irJlOFAIFRYWIRdvaNldCQ3%2B7gmPlTAQoQt8zi9TfG4OBECzdyu463NAEwJ%2FSgfFdwiEMMfNub4GOqUBX%2FZg8wKSvRoaUll8hUra3l3WNLOVy1Rnf6kO8fpICAxHxCvUBhwRvrLPqeTZzIx%2B1pAgibitwQvyxr3plLqF9Lnk5pkC6cFvQ7QLhGlmF8j54lHxNEdHyyj%2BnrYKcdRvUoU20hFHAfu%2FvJGZlWJMwHy82Cr6OekGl4U4chR9Jbfgz5YQPzGO59OZpxvH9693Zh%2FgV1gpRYHam1zh5flaAPmdSTPH&X-Amz-Signature=7b604a8244780e04c0a49d39a8757a82ffead793d8c81297d7fd84c46ce6d13d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
