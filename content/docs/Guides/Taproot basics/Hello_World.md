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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4M5YFJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwcwm%2FAC%2BE1H7%2FNaoVO2Szq1LcfM4sRN50dB2PUyrppAiAqn14lfg9do14TzWTwI%2FSKXEFcAcFuUGGV7AKEvQn0RSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMu8g1l4Gzv4r8xZ4LKtwDqR6PCxIxSwZAAU377L6BV8tw%2FLkN2uoGTVq%2B7OwGX175PNuxmvlVu0S6qB3P6%2BlvlhrDJ5aXDmXow87vi8OZXmR6Q5%2BJvAQOCqtzBF0GH9vVY1%2BWejIFGirdVcp8PS2gPBjTLCeFNUlOdSU%2FeoHHQP85K34IfbeMRfzdy%2Fcoz3QFhnCxEWeMC5ifrKEWrcVLVq9NDpCT9uDka8%2B97hKXqvzLFGY7UnUrCSYz5iP5ZVnBCRD%2FgsDxX12JXLQ1lMbXSjTJFDZsoDOtuq5WoUPOnVI8mrwlU4boPN%2FzoDIkgl1gOKYeykk3YAUPmTOspkDGj9N5XkgQYbVQuqXA%2FCZ194SEFf9UdBGXrRtugELnjg%2FUcM%2B6DSnk77lNlzUVAKkc64nn8je5RGnjP3m%2B1l5ko4tcBp1icjn0cB56qCCBKcBEtvOjh2AFlv00CgO2rQ%2Bz9CcvlF4VabOoXYYRwUR%2BnXXEaO9lVUIPP0L8zcTEZz4Y49yHJktD045IhZCz%2Fl2lB23BNQas5Nyqfupx3a85jbmd6nX0AxpO6eJnMJBAiIVRK2AkhYpSmCScklAu4H5PMEZYwSioc82ufElUWbNN9MaM3ewAlhdA1xA9QYfLRVNn9WHUIPaJWjPlZ5gwnPnDxAY6pgGlpz%2FVTP21QPiHMyw%2FB0PZ3BZXjQKsIIaT7Zg%2Bga4B6lnS9vjqrK6jsOwiTf9V5jp9q6u1j8jLLkgB6hR3%2F5rVEZPq0z%2FQdfZ6bI0%2FS15hLLjVy7SS5gHoUo0zg0vMssvU%2FfhUqo3n5MsLxxrIUugOX%2BD1gZOzSDd27%2FmRMZeGrt4ma9aYhVXa8gHTL6JvMvrbqShNIxqNul%2B3vsHD1vSq8DtlQFZr&X-Amz-Signature=632bdc7fe1036794e6228f1c06610b1fb618ab37537ae16d9fdddd12f36d88aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD4M5YFJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEwcwm%2FAC%2BE1H7%2FNaoVO2Szq1LcfM4sRN50dB2PUyrppAiAqn14lfg9do14TzWTwI%2FSKXEFcAcFuUGGV7AKEvQn0RSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMu8g1l4Gzv4r8xZ4LKtwDqR6PCxIxSwZAAU377L6BV8tw%2FLkN2uoGTVq%2B7OwGX175PNuxmvlVu0S6qB3P6%2BlvlhrDJ5aXDmXow87vi8OZXmR6Q5%2BJvAQOCqtzBF0GH9vVY1%2BWejIFGirdVcp8PS2gPBjTLCeFNUlOdSU%2FeoHHQP85K34IfbeMRfzdy%2Fcoz3QFhnCxEWeMC5ifrKEWrcVLVq9NDpCT9uDka8%2B97hKXqvzLFGY7UnUrCSYz5iP5ZVnBCRD%2FgsDxX12JXLQ1lMbXSjTJFDZsoDOtuq5WoUPOnVI8mrwlU4boPN%2FzoDIkgl1gOKYeykk3YAUPmTOspkDGj9N5XkgQYbVQuqXA%2FCZ194SEFf9UdBGXrRtugELnjg%2FUcM%2B6DSnk77lNlzUVAKkc64nn8je5RGnjP3m%2B1l5ko4tcBp1icjn0cB56qCCBKcBEtvOjh2AFlv00CgO2rQ%2Bz9CcvlF4VabOoXYYRwUR%2BnXXEaO9lVUIPP0L8zcTEZz4Y49yHJktD045IhZCz%2Fl2lB23BNQas5Nyqfupx3a85jbmd6nX0AxpO6eJnMJBAiIVRK2AkhYpSmCScklAu4H5PMEZYwSioc82ufElUWbNN9MaM3ewAlhdA1xA9QYfLRVNn9WHUIPaJWjPlZ5gwnPnDxAY6pgGlpz%2FVTP21QPiHMyw%2FB0PZ3BZXjQKsIIaT7Zg%2Bga4B6lnS9vjqrK6jsOwiTf9V5jp9q6u1j8jLLkgB6hR3%2F5rVEZPq0z%2FQdfZ6bI0%2FS15hLLjVy7SS5gHoUo0zg0vMssvU%2FfhUqo3n5MsLxxrIUugOX%2BD1gZOzSDd27%2FmRMZeGrt4ma9aYhVXa8gHTL6JvMvrbqShNIxqNul%2B3vsHD1vSq8DtlQFZr&X-Amz-Signature=8972865850675693f300c6b35d611969f2dbc67f4c96ba6365b57a1c8d0ad185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
