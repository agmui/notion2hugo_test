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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYFSTOU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRvc5e5n%2BHhVcuhZIqXV4IhZirdcmUKY%2B%2Fg91%2Bx0Rv0AiBHlB2FPbO0O8Mpg3sqW2W95YRlVZALMEdH2uCqJvQFbCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMR743Pfqa4p5l9m96KtwDFY3L6PiTL29QAJ4ncV2mSA%2FU1JVWeR%2FMQwOLezlSQvc4XAsA4n7Vuzl%2FD9psmm54mNwjpX%2FTFnjeCsSrJqbSZs5em8ZhPMA5Lp%2FHmu4dogBmPU9WMpjzQdoEUR7T1g87xK4H7r6sU6jewqTkVhARXQ732n8UoMogYY0ph6X2C57SWdpczK9F3erUTcLoBZgJ8lCMaZkD%2FF1%2BIYxpTXhpzFC5od91vrAzZZDj804xmdBcETg1QHZ9ijU1gj%2Bk%2FzuI0i5RXIyARZHT%2FmZDHiW%2FbKgfUasHgtGmtKlMHBGjWFhJe6iCeX6LpzGEdzYoFBzNM0zRQj1rDjCjZVhcUG4EkDKkFQrjxTt0NMJy1nlrm1iubBuL9J7lN7AlpSTe5gP0oLhN7tzYC%2BjMaorurfLPJaGwZlX9xebKjQqUJpAN9eUYtCySFZOB5%2FxQbGjv1ZGNy390NzLvReou10kJtZ1Z%2FcjMekTnv5RArT8KPFBrdPBsBlz%2FFy9O4Zg7LDjcL%2BKsEl89uz4q3xgUNJsQrpxDIQmnFi%2FqtrrQ3Z%2B5TL5ulDJ6zGHQJjwDzU0KOGfoRWK5MCjWDi6oKKKkxdqnB0UafcGqW3XvaK%2Fpc8h6cLkV9ZsaII27dc3%2F%2BnGf4w8w0KCfwQY6pgF06KeRWIAE4q5Fnf50%2B%2F8ExcO0Cns6cKbnoIYzYrqry7ZWHk8s4DP%2F46Ay6qT95bAT7QlkdeMUFjG1Fa6%2BzagQ02c7oKkWE68B6rP8cgI8doVFkA2NAwQGNyrJXpcMbsDD9%2BAflYECfdHQbGCUTvTzeSTLakD9ip3Vlr8U%2BhCbcmfB7vKPDLugKwSe5baDiPIxEcNdy0wMslWfVcneHIu5czlx4fRD&X-Amz-Signature=9153ba27847dabf6f884e3039a53bc5fc96cf9ddc2fce693569fb57777940f86&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBYFSTOU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRvc5e5n%2BHhVcuhZIqXV4IhZirdcmUKY%2B%2Fg91%2Bx0Rv0AiBHlB2FPbO0O8Mpg3sqW2W95YRlVZALMEdH2uCqJvQFbCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMR743Pfqa4p5l9m96KtwDFY3L6PiTL29QAJ4ncV2mSA%2FU1JVWeR%2FMQwOLezlSQvc4XAsA4n7Vuzl%2FD9psmm54mNwjpX%2FTFnjeCsSrJqbSZs5em8ZhPMA5Lp%2FHmu4dogBmPU9WMpjzQdoEUR7T1g87xK4H7r6sU6jewqTkVhARXQ732n8UoMogYY0ph6X2C57SWdpczK9F3erUTcLoBZgJ8lCMaZkD%2FF1%2BIYxpTXhpzFC5od91vrAzZZDj804xmdBcETg1QHZ9ijU1gj%2Bk%2FzuI0i5RXIyARZHT%2FmZDHiW%2FbKgfUasHgtGmtKlMHBGjWFhJe6iCeX6LpzGEdzYoFBzNM0zRQj1rDjCjZVhcUG4EkDKkFQrjxTt0NMJy1nlrm1iubBuL9J7lN7AlpSTe5gP0oLhN7tzYC%2BjMaorurfLPJaGwZlX9xebKjQqUJpAN9eUYtCySFZOB5%2FxQbGjv1ZGNy390NzLvReou10kJtZ1Z%2FcjMekTnv5RArT8KPFBrdPBsBlz%2FFy9O4Zg7LDjcL%2BKsEl89uz4q3xgUNJsQrpxDIQmnFi%2FqtrrQ3Z%2B5TL5ulDJ6zGHQJjwDzU0KOGfoRWK5MCjWDi6oKKKkxdqnB0UafcGqW3XvaK%2Fpc8h6cLkV9ZsaII27dc3%2F%2BnGf4w8w0KCfwQY6pgF06KeRWIAE4q5Fnf50%2B%2F8ExcO0Cns6cKbnoIYzYrqry7ZWHk8s4DP%2F46Ay6qT95bAT7QlkdeMUFjG1Fa6%2BzagQ02c7oKkWE68B6rP8cgI8doVFkA2NAwQGNyrJXpcMbsDD9%2BAflYECfdHQbGCUTvTzeSTLakD9ip3Vlr8U%2BhCbcmfB7vKPDLugKwSe5baDiPIxEcNdy0wMslWfVcneHIu5czlx4fRD&X-Amz-Signature=0e505583acd6636466a7b833b66140eb0dfa6b6d93e4d313092035181185d586&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
