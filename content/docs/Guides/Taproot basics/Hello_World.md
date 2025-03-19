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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMYO6EO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDRmIi5%2FwlPqoYN7SFQFm2nCX4HTrC%2F34eclOpL5TC%2BbwIhAIdy%2FBRH5NR2ts3FBtArLA044%2B6Du%2FUQ%2B3y8GzrWRpalKv8DCGsQABoMNjM3NDIzMTgzODA1IgwKy3pT6gvCdEiVoBIq3ANZ1lhJzqXjxfftjeBizvktJnKqrmzQxxhmtyXecRggTF8ecBVFgbb9okE7fk7ou73NAUL88eCstjsRt%2BOvJyUMCOh9Nc8Wl2yHncZ6Ppfsl2eAAg%2BFNz%2BaFH%2BWqwkCs4d5HszincmP5uY9K6v4wzakEUp2gmVcIy7YfNpAWmDELA9IeCVJRI7yKotfCTjy6N1Rz0u%2F%2BTFQqaIwdGVq75MkRseQmH66w%2BeBvVaSTwEq853GRYS3XJfllpfMuIvI7VlmBN9UHslYzneD6CN0W%2B0KXgE%2FBlbLexSyqVOwcZoVoXhIwvVVQVTy7oK4%2FXrrD8f36bEyr9HFZ4X706ZO9i%2FG52RzMQhjiuJnDF2ADfDgjr8BXzJFrp5IfQaw6H91U9iGxQtz9%2B1cZ1YTTaeOYxvVSfS0OI0l9Gvy3f%2BC%2Fosr3gHk4%2ByeXvnnnFPzF61%2Fv9Q7z%2FxXQg28xCYcivjpI2Z7duwlrIEU6oSi9FPzuJxZ6jePcYGje0TGN4T7dn4I6QoBdSXx5Oyuz43tddU%2FxkfQCJGLllnnialynyumF2OjelkjdN7STJE8u9JoXXTJLp8XwkfDYevkNsKsGvIvAwm%2F%2BR8huAqr1eEWUKLcs78zlBcRUH3sYx5rKCW7hzDNvOi%2BBjqkAQCfA7cLVax0EN9Ev1%2FSbDer%2FLTn6m4pHLw3WPmaayoNT4U5xbVmcZcMXrvUhPjnK0I%2BnJOFwWH4a6Epa8AKPX71crUUG1a59qfwU8DEoVGgj80AG9%2FHiXNXOCP%2BGvYXREQMFufRVWr49aCqQqKVUjPAJtC4R7Azo%2F8cAupAJ0B5p2P8iZG20FCeHn%2BgiAQs58%2FNpXJJ3S%2BzwQdbj1AJ4S8bNBgD&X-Amz-Signature=8a2ccdd58ec966ae26d4bf5dbe87a2b6d94b5e22f68c0860b6d0fb177dc0bd52&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSMYO6EO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDRmIi5%2FwlPqoYN7SFQFm2nCX4HTrC%2F34eclOpL5TC%2BbwIhAIdy%2FBRH5NR2ts3FBtArLA044%2B6Du%2FUQ%2B3y8GzrWRpalKv8DCGsQABoMNjM3NDIzMTgzODA1IgwKy3pT6gvCdEiVoBIq3ANZ1lhJzqXjxfftjeBizvktJnKqrmzQxxhmtyXecRggTF8ecBVFgbb9okE7fk7ou73NAUL88eCstjsRt%2BOvJyUMCOh9Nc8Wl2yHncZ6Ppfsl2eAAg%2BFNz%2BaFH%2BWqwkCs4d5HszincmP5uY9K6v4wzakEUp2gmVcIy7YfNpAWmDELA9IeCVJRI7yKotfCTjy6N1Rz0u%2F%2BTFQqaIwdGVq75MkRseQmH66w%2BeBvVaSTwEq853GRYS3XJfllpfMuIvI7VlmBN9UHslYzneD6CN0W%2B0KXgE%2FBlbLexSyqVOwcZoVoXhIwvVVQVTy7oK4%2FXrrD8f36bEyr9HFZ4X706ZO9i%2FG52RzMQhjiuJnDF2ADfDgjr8BXzJFrp5IfQaw6H91U9iGxQtz9%2B1cZ1YTTaeOYxvVSfS0OI0l9Gvy3f%2BC%2Fosr3gHk4%2ByeXvnnnFPzF61%2Fv9Q7z%2FxXQg28xCYcivjpI2Z7duwlrIEU6oSi9FPzuJxZ6jePcYGje0TGN4T7dn4I6QoBdSXx5Oyuz43tddU%2FxkfQCJGLllnnialynyumF2OjelkjdN7STJE8u9JoXXTJLp8XwkfDYevkNsKsGvIvAwm%2F%2BR8huAqr1eEWUKLcs78zlBcRUH3sYx5rKCW7hzDNvOi%2BBjqkAQCfA7cLVax0EN9Ev1%2FSbDer%2FLTn6m4pHLw3WPmaayoNT4U5xbVmcZcMXrvUhPjnK0I%2BnJOFwWH4a6Epa8AKPX71crUUG1a59qfwU8DEoVGgj80AG9%2FHiXNXOCP%2BGvYXREQMFufRVWr49aCqQqKVUjPAJtC4R7Azo%2F8cAupAJ0B5p2P8iZG20FCeHn%2BgiAQs58%2FNpXJJ3S%2BzwQdbj1AJ4S8bNBgD&X-Amz-Signature=b301e320073f4ab43c746c4cbc059e3cbf7a156c382e2ea3e468019cffe740bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
