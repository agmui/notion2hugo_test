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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRYJBLK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgbglWznJfpgLHOCwJKxFqHGAyjUyixZ7JV5ti%2BV9NSAiEAvjqrptHRdI%2FYE%2B9Nov95mrrXY5VwsBpw1cui4az0prsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODPajkvCKGU%2BPN9hircA8XU1E2tHaa9kuabVamF93KnWOVUmJB2z5N1IKq7T%2F7Lv1lArLZ65G8g44KChW%2BXhIi3xPG3uRIfj5TX8YjR8EmG1%2B7OGSCVzgB0QWvJih9weAVKOKq%2BSqF4swv6vnWUbo1sD%2FauIxu5XLOSq%2BP%2B9GEfvCP%2BqdPpvqemHmkAmR9eQxr4efLPQmlRYKYRmxLYmIH9%2FQunaJLzDbaXYr3jvsZbwZhnwjC0dm6M5QWGU2PMoCzYtjoBBSQ9biy1pQD3ssA4ATGt9ndR%2FGc5zvdbTv8EbUg%2B2I52Z8bxdesyb9KzONjvOD%2FJZGQYIgGBxl8tpW8XrUul7DI08ap64cFNassQg3z9uHtEOwDxYW5DceWM%2BvUo9uJb24omXWmg4xjuDY563jFD%2FYeTJ8NWwAaNsJZ9wHDFCsqUTM99Z7bkty9tv7pWt2VgVo8nqQu1LJlXSHT12FOkHTl5BkL87ADeRyd9w15URqv4PlqI0RnUSRihq3RV9Y5S0Fa8GhEXyONppi2mQZL%2BOQHH9xPBUtEJDNGfxyjD9pv3cN8OjPq2gtbQhxGFhrl7SumTNQDRWE%2FmArUfHdAV6O%2FOOiKCZXOn8BTxlVqWzQmb7X2p0NGJ0usiZXQS%2BZ1pgkepOfEuMOXskr8GOqUBggujGoYFE5pROWWWkvolZ4%2BZYFAnw%2BICUwrQNg7tjo42O4q9QUzX7tKwoR%2FoVSumdBeeDnOYeCFsSbzdrBa04hFwgzgNtzVU7j5HAn0rrf691%2BNeKn7r1GR%2Fq6rcfalkzNtwuRRRkiVzw5KTFKqv22apv%2B%2BpJymL10v02PK3QUyG2T0sNZ2AAnihwizUNY2RtMEL9Jfqm8YgAO2670udToOv%2BUNX&X-Amz-Signature=5e388683c8c0b5004eef8149f2066f02a2fa2e56d054b8d66f3d397ba8ba7414&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRYJBLK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T032330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgbglWznJfpgLHOCwJKxFqHGAyjUyixZ7JV5ti%2BV9NSAiEAvjqrptHRdI%2FYE%2B9Nov95mrrXY5VwsBpw1cui4az0prsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDODPajkvCKGU%2BPN9hircA8XU1E2tHaa9kuabVamF93KnWOVUmJB2z5N1IKq7T%2F7Lv1lArLZ65G8g44KChW%2BXhIi3xPG3uRIfj5TX8YjR8EmG1%2B7OGSCVzgB0QWvJih9weAVKOKq%2BSqF4swv6vnWUbo1sD%2FauIxu5XLOSq%2BP%2B9GEfvCP%2BqdPpvqemHmkAmR9eQxr4efLPQmlRYKYRmxLYmIH9%2FQunaJLzDbaXYr3jvsZbwZhnwjC0dm6M5QWGU2PMoCzYtjoBBSQ9biy1pQD3ssA4ATGt9ndR%2FGc5zvdbTv8EbUg%2B2I52Z8bxdesyb9KzONjvOD%2FJZGQYIgGBxl8tpW8XrUul7DI08ap64cFNassQg3z9uHtEOwDxYW5DceWM%2BvUo9uJb24omXWmg4xjuDY563jFD%2FYeTJ8NWwAaNsJZ9wHDFCsqUTM99Z7bkty9tv7pWt2VgVo8nqQu1LJlXSHT12FOkHTl5BkL87ADeRyd9w15URqv4PlqI0RnUSRihq3RV9Y5S0Fa8GhEXyONppi2mQZL%2BOQHH9xPBUtEJDNGfxyjD9pv3cN8OjPq2gtbQhxGFhrl7SumTNQDRWE%2FmArUfHdAV6O%2FOOiKCZXOn8BTxlVqWzQmb7X2p0NGJ0usiZXQS%2BZ1pgkepOfEuMOXskr8GOqUBggujGoYFE5pROWWWkvolZ4%2BZYFAnw%2BICUwrQNg7tjo42O4q9QUzX7tKwoR%2FoVSumdBeeDnOYeCFsSbzdrBa04hFwgzgNtzVU7j5HAn0rrf691%2BNeKn7r1GR%2Fq6rcfalkzNtwuRRRkiVzw5KTFKqv22apv%2B%2BpJymL10v02PK3QUyG2T0sNZ2AAnihwizUNY2RtMEL9Jfqm8YgAO2670udToOv%2BUNX&X-Amz-Signature=a295199d7f7f25870cd80f43823ef53cf21884bde9c64b24b2d6a57174b79178&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
