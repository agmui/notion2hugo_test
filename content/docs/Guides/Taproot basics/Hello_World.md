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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUTQ35D%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUMJbqyjd1q%2FTN8zqKX1PhMKlNw7vKkppDrE78qyYZJAiB6xm4mL%2BikaSRJXjmzgoqNSY51pNJ1OGUi7%2BtmOv6aHyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu03qGICIDLzf52a2KtwDkBwl1O32oHzNZYye4It7SnR2YF%2F0TpGg%2BzM33b6WrVU1XcNAyKVs50E8yKvfrqoGz0sej86JcfO2W4JNUX3bTFB4EIDvu9ixBqmABl5g5YgeFJBxvJM9z1brfAWF8S8W%2FbcjYWubL%2BrhHIz%2FJO29M7nxmaJYT2kbG3xh1GT3w2fc98TfYoDLCS7wAxFvvxek8qUkJ9T%2BAd3AvA5m3kPdVOgQIbo4TLMSPNNJLUaWKrVIFUfDQIn0%2BFRKe1muClzT1tPD9eonx19QHHKeIhutuVKoJI2rgor0N7bwex%2B4ox4l5kNaXISHaocfRU621KAGv3Msbre5fZJTl5xQTopLMHWgix3HgFtOZ8sDXXlV4iYhPGbH%2FqOZIk8R0aMF763o9wxGswBlBHMFJai%2B4IfGwTbrvsHqK65MGYAqmQIX%2FoFfgWZxz6h8NOxvVkci9GlZcWz2Z2hZfhlRzRSLty5nBDmwS30sF1wDVn%2BxPakhsoCiu9SsIvzBLPRyS6xsKAMYaotCOEKJRplDPFI5%2BZZPf6Zgcvqm4C47zMMvDZnKZjg%2BNtnvAotMzZx6UNtQ7sP9%2B6xxPxVI3cpyvOmue4JcPXNVD92%2B7usqduJGE%2FVJl61mCz%2BmOg%2BotPU7XcUwjP6FvwY6pgG8VB6c%2FK1as1AHZ0pm2xuBj5v9Dx3S%2FVkmVYQoEEJoP38mS2yG9EdkHtp%2FEoKJshaMddyH80km2zCcjZkkdu%2FlNNqrPde5wLYKPzFAjO7SUh4uqLOU511Df3ovVUr5tYHB197gz%2BKRKZJ%2B7SilnTvQbEf6OwaxaJdM2qqqpDMluLr4rEFjnk%2Fi%2BFIMiiAlJVmcwGCwkiEszaCxlARg%2BZ6AnEqalpCc&X-Amz-Signature=66f91b24e18abff000a25bb4c8b0679e065ec846d0051635b6344e78773a88d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZUTQ35D%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUMJbqyjd1q%2FTN8zqKX1PhMKlNw7vKkppDrE78qyYZJAiB6xm4mL%2BikaSRJXjmzgoqNSY51pNJ1OGUi7%2BtmOv6aHyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu03qGICIDLzf52a2KtwDkBwl1O32oHzNZYye4It7SnR2YF%2F0TpGg%2BzM33b6WrVU1XcNAyKVs50E8yKvfrqoGz0sej86JcfO2W4JNUX3bTFB4EIDvu9ixBqmABl5g5YgeFJBxvJM9z1brfAWF8S8W%2FbcjYWubL%2BrhHIz%2FJO29M7nxmaJYT2kbG3xh1GT3w2fc98TfYoDLCS7wAxFvvxek8qUkJ9T%2BAd3AvA5m3kPdVOgQIbo4TLMSPNNJLUaWKrVIFUfDQIn0%2BFRKe1muClzT1tPD9eonx19QHHKeIhutuVKoJI2rgor0N7bwex%2B4ox4l5kNaXISHaocfRU621KAGv3Msbre5fZJTl5xQTopLMHWgix3HgFtOZ8sDXXlV4iYhPGbH%2FqOZIk8R0aMF763o9wxGswBlBHMFJai%2B4IfGwTbrvsHqK65MGYAqmQIX%2FoFfgWZxz6h8NOxvVkci9GlZcWz2Z2hZfhlRzRSLty5nBDmwS30sF1wDVn%2BxPakhsoCiu9SsIvzBLPRyS6xsKAMYaotCOEKJRplDPFI5%2BZZPf6Zgcvqm4C47zMMvDZnKZjg%2BNtnvAotMzZx6UNtQ7sP9%2B6xxPxVI3cpyvOmue4JcPXNVD92%2B7usqduJGE%2FVJl61mCz%2BmOg%2BotPU7XcUwjP6FvwY6pgG8VB6c%2FK1as1AHZ0pm2xuBj5v9Dx3S%2FVkmVYQoEEJoP38mS2yG9EdkHtp%2FEoKJshaMddyH80km2zCcjZkkdu%2FlNNqrPde5wLYKPzFAjO7SUh4uqLOU511Df3ovVUr5tYHB197gz%2BKRKZJ%2B7SilnTvQbEf6OwaxaJdM2qqqpDMluLr4rEFjnk%2Fi%2BFIMiiAlJVmcwGCwkiEszaCxlARg%2BZ6AnEqalpCc&X-Amz-Signature=1e2498d1c90b32d2123ca6534126fdf9ae954b74bc93d51478e1a7736e4b8ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
