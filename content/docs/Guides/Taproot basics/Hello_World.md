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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDSP3P7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BEquMzqbO6BB%2FpJh%2F4009a6SdO7vA2XugiH%2FQOL%2B1sQIhAIKhz2qvw3xG1paWarVmq6mMy06axwKyL%2B7RQCt7skmIKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU%2FdGrEKG8%2B9XKxfEq3AMGDuI8MiRC5B9uLj0imI6kAL5vYV%2B41R7RAwLx6q3SN0DVO0A1kQDYgjxyg%2BbfmZiIeP3QZpJtpQ5FtVujQnXePalbwPHLXVp%2B5woZHRlEr5MfpdBh4O%2BICt5lPxRrY39rMGzteysaUc5cUzdNQgAIYHqnpiHzSmQMpCFaHAN5sd7mQA%2BWUWMOl8tPfJVU2rU7SrqhBVxGXNm74xGqzQWKPgm3VqmLwq%2F8gNilySrLDT6hqgVaIqItKbzpX2XWW9O5HRerL07I2755XeaNL7s2qhrPsZnVhrZLFvDz8HBls5l32YEz8OAdlqP1bJLTMNgKefUvRI0Ev32yHgHiLGLS1VoYPGy%2BhAW%2BadxJkviuy8NlOdDfhg4XUrbN5imUoFq7UYKz0J1c8%2FRBVAg84KUTndI9AbEejhuGlhHrV4OfbufkPswQ7S%2BgyTc5oC6Omk5op6Ivgqf6Yun%2FyOEd5BEEqUr6GmhU2uEIKR8UffMIQsv6J9aZJ2BzkYMpCHgNtLbKMoShTeuDBpOlbHDeTLdUIjRMJF%2Blln%2BfNPQwTJAmsCG0YRT5Ci5%2Bv9SvdlP4AvcfOc0KcqkD7%2BwekOHjpU8NmmFfSg2bRMlx8NEAvJ%2B9NQDKI8EDEa9TTOKRnjCGqOLCBjqkAfZ24G0D4Ba%2F5EFG6AqI4M1QG93TbNq8LVO0j2Co2JZUmF3Y8q3Ay36wVvkBIbzWeakt8fpp9BIO86JDv9wCG26FuB7v6zhzTAlWCEv%2F%2BIT6glpj5goo6eUSszuEnC7X1HbUdcjuj4K6RmgA%2FedjHtPd5Cfqzq3P0oCqG4Xt%2FaEzZ%2B3xtz45L9E5jeianXIPVOa393%2FXDQm6DXXwXjf5%2FkQZC%2B4k&X-Amz-Signature=ec4823ebc487b1e9496fee1b8238cd558e528ef725466028b55ef9b104c97a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDSP3P7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC%2BEquMzqbO6BB%2FpJh%2F4009a6SdO7vA2XugiH%2FQOL%2B1sQIhAIKhz2qvw3xG1paWarVmq6mMy06axwKyL%2B7RQCt7skmIKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU%2FdGrEKG8%2B9XKxfEq3AMGDuI8MiRC5B9uLj0imI6kAL5vYV%2B41R7RAwLx6q3SN0DVO0A1kQDYgjxyg%2BbfmZiIeP3QZpJtpQ5FtVujQnXePalbwPHLXVp%2B5woZHRlEr5MfpdBh4O%2BICt5lPxRrY39rMGzteysaUc5cUzdNQgAIYHqnpiHzSmQMpCFaHAN5sd7mQA%2BWUWMOl8tPfJVU2rU7SrqhBVxGXNm74xGqzQWKPgm3VqmLwq%2F8gNilySrLDT6hqgVaIqItKbzpX2XWW9O5HRerL07I2755XeaNL7s2qhrPsZnVhrZLFvDz8HBls5l32YEz8OAdlqP1bJLTMNgKefUvRI0Ev32yHgHiLGLS1VoYPGy%2BhAW%2BadxJkviuy8NlOdDfhg4XUrbN5imUoFq7UYKz0J1c8%2FRBVAg84KUTndI9AbEejhuGlhHrV4OfbufkPswQ7S%2BgyTc5oC6Omk5op6Ivgqf6Yun%2FyOEd5BEEqUr6GmhU2uEIKR8UffMIQsv6J9aZJ2BzkYMpCHgNtLbKMoShTeuDBpOlbHDeTLdUIjRMJF%2Blln%2BfNPQwTJAmsCG0YRT5Ci5%2Bv9SvdlP4AvcfOc0KcqkD7%2BwekOHjpU8NmmFfSg2bRMlx8NEAvJ%2B9NQDKI8EDEa9TTOKRnjCGqOLCBjqkAfZ24G0D4Ba%2F5EFG6AqI4M1QG93TbNq8LVO0j2Co2JZUmF3Y8q3Ay36wVvkBIbzWeakt8fpp9BIO86JDv9wCG26FuB7v6zhzTAlWCEv%2F%2BIT6glpj5goo6eUSszuEnC7X1HbUdcjuj4K6RmgA%2FedjHtPd5Cfqzq3P0oCqG4Xt%2FaEzZ%2B3xtz45L9E5jeianXIPVOa393%2FXDQm6DXXwXjf5%2FkQZC%2B4k&X-Amz-Signature=7818e10593882e674bedcab2d10040c0ee99f4e44d04024389c1b60971ed2136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
