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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOKJYO3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn0yHpZgZF%2FpOpCE8ZiUB7xI6rxLSt60hHIjCcwKUKWQIhAKAj1OX4TqOUcNQxzEezHEe6PyvRm90YR7JTBbBskYkoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmSPJeiv5z8mWtR0Iq3AP31X%2FNKtBxOQXv1HcxYvdhgO%2FhjJuu%2FuAAZ3iu4RCbsj5qOO0dtm0eVqpRo9AGDaS1k7soC%2BnxLHeeIWl6MRTz7yGdJBheN0DlRejxCxblJoi0WJl%2FL%2FCkwfPXVFFJd4Ce5sW%2B8xbMMhc3FhcJymIrORz3XSYplhbgktSqg0Ae59oq4tH1Vx%2BjO2OKTjZe2eCCCQGSe%2BRYd0Z5ZHkCXQqh0f9QOW9CNZVzmOHxCZZ7SeuzIwf8X7Cg3RMSX%2FTMhjZ909RAcJJSC1jf9kUIaXJy0OJhjv6BS%2FAjEZdMqAkvhlLpX08wYfOi9tQl81HCoWUURsOUzfom8pnI6TIf526KVXVV7SdU5UW0WKTMHQrs7mJHXzFtHKERWcQRxxqdJDTCEWS%2FfFvrF4VLaGokuQN3Kqj1ZlSQco%2BeJgEbA8yBKqTzqylyZHTInAQplxLy%2Fty3vv88%2FWggdEzShxAFVZR2vRCPYLbSzq7Dg23C8NCo4Fa%2Fan4KSBT5sXHA3SwdqLOVyuWsVv%2FsrfgunREHCNVG8PLoLUWqjU5A17HEVhNCP1paOHM3X2V7X9sP4vH94XQU3kpX4JYkgX9Ty4fnoRCZ3P7F5M95uxGmR22ugfqcd7PRSXw2ifu12mqupTDmmLW9BjqkAS3JZUZiG1UMKOKQAU%2Fb2v2uHPfG7MhjejPfSuiK5nuOqhVRhYrnwfXBRRYulvYPoSGBkdpoPi26Z5UXWDvUjPZLPcWgrcUMWTykkboOmC3Y9EXf06UCWhWYAOaxCAxkxHvww8YIOsXrteDR1hi4210%2FWgpdq5wZ4jrJA5T6PMc5ReljuiGr3%2Fj9XWN7T44YWGAhJZE3akMV6ze6YXU0FlV2OKJY&X-Amz-Signature=88824174953840c75772bc35508aa28ef053c4c4d5b65eb95f2889d19ae3fd71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOKJYO3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn0yHpZgZF%2FpOpCE8ZiUB7xI6rxLSt60hHIjCcwKUKWQIhAKAj1OX4TqOUcNQxzEezHEe6PyvRm90YR7JTBbBskYkoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmSPJeiv5z8mWtR0Iq3AP31X%2FNKtBxOQXv1HcxYvdhgO%2FhjJuu%2FuAAZ3iu4RCbsj5qOO0dtm0eVqpRo9AGDaS1k7soC%2BnxLHeeIWl6MRTz7yGdJBheN0DlRejxCxblJoi0WJl%2FL%2FCkwfPXVFFJd4Ce5sW%2B8xbMMhc3FhcJymIrORz3XSYplhbgktSqg0Ae59oq4tH1Vx%2BjO2OKTjZe2eCCCQGSe%2BRYd0Z5ZHkCXQqh0f9QOW9CNZVzmOHxCZZ7SeuzIwf8X7Cg3RMSX%2FTMhjZ909RAcJJSC1jf9kUIaXJy0OJhjv6BS%2FAjEZdMqAkvhlLpX08wYfOi9tQl81HCoWUURsOUzfom8pnI6TIf526KVXVV7SdU5UW0WKTMHQrs7mJHXzFtHKERWcQRxxqdJDTCEWS%2FfFvrF4VLaGokuQN3Kqj1ZlSQco%2BeJgEbA8yBKqTzqylyZHTInAQplxLy%2Fty3vv88%2FWggdEzShxAFVZR2vRCPYLbSzq7Dg23C8NCo4Fa%2Fan4KSBT5sXHA3SwdqLOVyuWsVv%2FsrfgunREHCNVG8PLoLUWqjU5A17HEVhNCP1paOHM3X2V7X9sP4vH94XQU3kpX4JYkgX9Ty4fnoRCZ3P7F5M95uxGmR22ugfqcd7PRSXw2ifu12mqupTDmmLW9BjqkAS3JZUZiG1UMKOKQAU%2Fb2v2uHPfG7MhjejPfSuiK5nuOqhVRhYrnwfXBRRYulvYPoSGBkdpoPi26Z5UXWDvUjPZLPcWgrcUMWTykkboOmC3Y9EXf06UCWhWYAOaxCAxkxHvww8YIOsXrteDR1hi4210%2FWgpdq5wZ4jrJA5T6PMc5ReljuiGr3%2Fj9XWN7T44YWGAhJZE3akMV6ze6YXU0FlV2OKJY&X-Amz-Signature=4524baf168311b52a22d52df3ed8ea3c9481d199e199f66c4595aa66ef1c5882&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
