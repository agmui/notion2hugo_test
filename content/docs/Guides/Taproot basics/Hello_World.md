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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAOXUEL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTWJVIT%2BhYrVVWNB%2FkDGRRC1zt4xlMtgZl6QgW8cmc2gIgIVHNDu0ZzBQr2p3IvZUWdBwoHrCmk81Dz0%2BDSqqLpikq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBukUsb0ma2C3kr13ircA5zsLIaIGj3OHnr37TMxY51v3bjN4bVGjHnv2xBs2ycAP%2B%2B9JS5oxzA8UPeTWFRdkWRLidjdN5lBVJFwXhaMAw2UzTZ43ganeMT49A5DH9iQC8MVtHqPm33Weqr%2FGmenAzxA%2FEAispbPxG2vV7e8V2LtmTt5n4JPy2WHBEmmhLdjbnexPRDcj9WwPBTpC8WRf8C6kiQsgjcRcXlUBXULX2emXf13jOVZjgF334zQLGs2FGDN35HleTgh%2FFn0ACewhoQ%2BxjmDGLlYYU1haYvEGs%2Bd%2BoDU%2Fnez%2B8FNl5eZXMZmtR%2BkrAgHXVYuDHkclqURfdrfmS4eiMMbv%2FPgfc34oW8ITOjErvcY%2B2LNEImibIgV%2FhO3EBIy7JQM%2B9tGg3J8FRmkI8RMzzni56ecbeOs3i%2FymPM39xiXzU2zgIAD%2F91fPn5vyIwoVluqaBVG0MuhT6dMji%2FKNfLNwwiPNW0PTpMr7Igazg3%2F%2F0Qc53fepUBWSxkdZtpANagYYBht1HuMHfQ7GiZ%2B6gRqx%2BqEIbe3%2FIK5M4QNNw%2FnNgjXWnpMDo4Uz1JFqhBdhMURPZkzqtAxhV7ZGJLd51mNBy7dwg6XvlzkfqkUwsXbekzBy%2FyTOjvybD9bILetZzQlf131MKOFub0GOqUB9h39CevAmxqKNZN8sQLYRWYkWPdjQpntahyqxpa99ZA00gI6IFd0XNuG6gtNOD0S4erMiAYENdOF0nJSdEBmWW5EFr5baimmB5ln0QDtZj81uBItXTyGW6K7rpinc5DpK2Pey9S6kcEVk6XWiuTOupL5DLaAZp6YPfIzmYWq7WtBivEQIcTLhoQNEqbZwTWfALJ0CXvoYVBGQeloDCzOp0cD5rsJ&X-Amz-Signature=a0473de0b62380f4a5b42ff68460807f6911fe6f036fc7029d6f2be8f63ab92e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLAOXUEL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTWJVIT%2BhYrVVWNB%2FkDGRRC1zt4xlMtgZl6QgW8cmc2gIgIVHNDu0ZzBQr2p3IvZUWdBwoHrCmk81Dz0%2BDSqqLpikq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBukUsb0ma2C3kr13ircA5zsLIaIGj3OHnr37TMxY51v3bjN4bVGjHnv2xBs2ycAP%2B%2B9JS5oxzA8UPeTWFRdkWRLidjdN5lBVJFwXhaMAw2UzTZ43ganeMT49A5DH9iQC8MVtHqPm33Weqr%2FGmenAzxA%2FEAispbPxG2vV7e8V2LtmTt5n4JPy2WHBEmmhLdjbnexPRDcj9WwPBTpC8WRf8C6kiQsgjcRcXlUBXULX2emXf13jOVZjgF334zQLGs2FGDN35HleTgh%2FFn0ACewhoQ%2BxjmDGLlYYU1haYvEGs%2Bd%2BoDU%2Fnez%2B8FNl5eZXMZmtR%2BkrAgHXVYuDHkclqURfdrfmS4eiMMbv%2FPgfc34oW8ITOjErvcY%2B2LNEImibIgV%2FhO3EBIy7JQM%2B9tGg3J8FRmkI8RMzzni56ecbeOs3i%2FymPM39xiXzU2zgIAD%2F91fPn5vyIwoVluqaBVG0MuhT6dMji%2FKNfLNwwiPNW0PTpMr7Igazg3%2F%2F0Qc53fepUBWSxkdZtpANagYYBht1HuMHfQ7GiZ%2B6gRqx%2BqEIbe3%2FIK5M4QNNw%2FnNgjXWnpMDo4Uz1JFqhBdhMURPZkzqtAxhV7ZGJLd51mNBy7dwg6XvlzkfqkUwsXbekzBy%2FyTOjvybD9bILetZzQlf131MKOFub0GOqUB9h39CevAmxqKNZN8sQLYRWYkWPdjQpntahyqxpa99ZA00gI6IFd0XNuG6gtNOD0S4erMiAYENdOF0nJSdEBmWW5EFr5baimmB5ln0QDtZj81uBItXTyGW6K7rpinc5DpK2Pey9S6kcEVk6XWiuTOupL5DLaAZp6YPfIzmYWq7WtBivEQIcTLhoQNEqbZwTWfALJ0CXvoYVBGQeloDCzOp0cD5rsJ&X-Amz-Signature=e33f8b33402e958fdbe6a8ee399c3d32d5e0da265e9d1d273c662e1365ef3350&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
