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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEL77H35%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD72nOVFMVwQFHnbklaJNzUI%2Ff%2Fo%2BJ3Uwbh7QDQHjDvTwIhAPVzr4yYaFDy5xvTPgFoH%2BPgPgL29Y%2BmFE7yxBuDPHJmKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdqWOvvwWfnfHmyYq3ANA%2BvePJRB5vgFyFXE%2BYAy8nRuE%2FDKKGlveEcLaQsiHmoe8W5E4E5K4cqUuQ7cUNM%2BRl7qoku4BXVx7i%2F8xbkxVJDWmGrqE8MnbFtNuu4uoLXcmmF8KCe6sCkfLi1Tr9jFuc64zK7RjVPfMszzCLI9IqqoDRVNzlWPDkbX2TqJmahOyzEC6pixuqeBABF0%2FJa4M82yvk7gsOJ%2FMxrd4%2FNMLn%2BU%2FEGziI2gM%2FG%2BHMbl1ClzEBomHAK5QvAoh7dWTQUtiqsPnkXnxgV62NTnGVUZD%2BebewtUfkMN2NhsUCioFKQaPJ5Ep6%2Bft9sbURQ1b2utic0Un%2FC%2FwUNRiWgbS88tZhXFhO5RaXasQLK2YdYQgktneTrVCCk52t3%2BxeIn76hpdl6nw12LnJc5z0P4NhoN46S0zGnqz%2BTrqhQYclUGl%2BF234U3%2FSNHRu2OyDRtsongYvfdT3Fqb633KYadhdE7ZB1Nnh3G8rNZZdiLz1sWAfyKYYDDqL73Ui6a%2FMOfHrTrE7dLdpzJ9PF0vWY5O4JD%2BxOkaAOFM9YV5gC4Nah2dqsltCRvqkhlXXi%2FHyEeKCC13QA2qCoJ4kQuZIxFAfbJTCL87luwLIAsBsVjCMOk8Fwhiv36kGiPne91XaDD4vsDABjqkAY3hjSSJUgUoCUMkkLLrqMwgy5rj9CSrRRgWCOL%2FZhJAUMie0BSTjrWN6tkkYd5N1XyXiUW1qKH4O2g3K2jNt4ISRE0HlnudaeITTP%2BEw8E2NZb2dv4MSEvX83rcKSaO1QVbyeNWhIca%2Bo6Scje4K7IcHgp1czmfmZdFJ6tUamfL3iiUja5yXrxVsaCJHea7PjOKOryq4sYYMf1wypEX%2FzA9%2BCNp&X-Amz-Signature=bb5945044d5b3157aadfcc74cb63a0acce4f60a891cd26ae68c2acd30c6f08d6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEL77H35%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD72nOVFMVwQFHnbklaJNzUI%2Ff%2Fo%2BJ3Uwbh7QDQHjDvTwIhAPVzr4yYaFDy5xvTPgFoH%2BPgPgL29Y%2BmFE7yxBuDPHJmKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdqWOvvwWfnfHmyYq3ANA%2BvePJRB5vgFyFXE%2BYAy8nRuE%2FDKKGlveEcLaQsiHmoe8W5E4E5K4cqUuQ7cUNM%2BRl7qoku4BXVx7i%2F8xbkxVJDWmGrqE8MnbFtNuu4uoLXcmmF8KCe6sCkfLi1Tr9jFuc64zK7RjVPfMszzCLI9IqqoDRVNzlWPDkbX2TqJmahOyzEC6pixuqeBABF0%2FJa4M82yvk7gsOJ%2FMxrd4%2FNMLn%2BU%2FEGziI2gM%2FG%2BHMbl1ClzEBomHAK5QvAoh7dWTQUtiqsPnkXnxgV62NTnGVUZD%2BebewtUfkMN2NhsUCioFKQaPJ5Ep6%2Bft9sbURQ1b2utic0Un%2FC%2FwUNRiWgbS88tZhXFhO5RaXasQLK2YdYQgktneTrVCCk52t3%2BxeIn76hpdl6nw12LnJc5z0P4NhoN46S0zGnqz%2BTrqhQYclUGl%2BF234U3%2FSNHRu2OyDRtsongYvfdT3Fqb633KYadhdE7ZB1Nnh3G8rNZZdiLz1sWAfyKYYDDqL73Ui6a%2FMOfHrTrE7dLdpzJ9PF0vWY5O4JD%2BxOkaAOFM9YV5gC4Nah2dqsltCRvqkhlXXi%2FHyEeKCC13QA2qCoJ4kQuZIxFAfbJTCL87luwLIAsBsVjCMOk8Fwhiv36kGiPne91XaDD4vsDABjqkAY3hjSSJUgUoCUMkkLLrqMwgy5rj9CSrRRgWCOL%2FZhJAUMie0BSTjrWN6tkkYd5N1XyXiUW1qKH4O2g3K2jNt4ISRE0HlnudaeITTP%2BEw8E2NZb2dv4MSEvX83rcKSaO1QVbyeNWhIca%2Bo6Scje4K7IcHgp1czmfmZdFJ6tUamfL3iiUja5yXrxVsaCJHea7PjOKOryq4sYYMf1wypEX%2FzA9%2BCNp&X-Amz-Signature=8c9063998a05e741331c1d6dfbc25b78cecfa0c7d65d63c7eb49de773cd178a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
