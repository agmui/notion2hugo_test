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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BRJHMT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnQwOlnpD7VpWn13130soOL8K9G7QfJWmmZvo%2BtUkIUQIhAI2%2BQFuWTLKdEM2YVcmnlWlPpzWLBMBSb2M5SgVXDYicKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmikJCbee2BNJZG8q3APHRQaGLM0%2FrpukFcC92RtSEopIFADBqq9waCc9ZYf9UYtEmffI6X5%2BJY9lbDSQXwJ3PJmbZg%2Fa4%2Bgbd6ilHqTZcDJ2%2B0NgwrIps1UVy%2FdE4zRUiN5VtrHuns3LAkkVLxGxjSY0S%2BzZ%2BuS1pWSYnOutgGqZH6rA7y3y7HM%2BF1Bo0B5FVR86v6qM4E2a1ncjPksRO%2BqhyGTJ0%2F7zwHurL0XzM3psBw1Q9ldx9j8spUd4mh0krxTEoRx8yUegzdOnwsR4Hae84Rx0u%2Fhq8QsS1skhF72zr3Aoc4FMQ4B%2B2s8CbdsAUPLH6e%2BH4pK0AyGcGMK0e4E4iQMH3J7QbyWLhvTRjqvkQhjfpUQT0fY54N3k8ucbd6jnFeaDUIR9QrqnLcRhGHZSt%2BuGL66glnLFgoTTch%2FCF1iOvPzU5IHsClLyPa%2B2%2BCGAwSC%2BY6E8aZfQCh9PjLuuNpIKW%2BDIGYLK%2FUFUAogF7O5jjtVpBckb9HW7hVktSSOQRDFuyoCnlqssIbCUYeQ8%2BShwAqvjnoLLpVzrvool1yIr1IghCJPJWXepL7rNYy5Uw2Q0n5fE%2F%2ForkUXEuxnzR%2Fr0UuakAmcYLMkyen1LHYJPYEF4rU6R19QqPgrUt6rvGov4Q7LUxTDCmfC8BjqkAWfCRQ3ZdWZWmNcgWRuY40qu0XvReMPqlsACEPedfSVAU%2FLSEQpoA5TFo2DnjGZnCFclj6ZI4uIKl50YP2mKFHxpeviE1hjC8JGtcb2dQJO3jsV%2BjQ3QlGFZMMHeqKVq4xP7N%2B79szENsP%2BcNExhzZA0W70Cwrs%2BbpAnxsiQK%2B%2BDQqkVj7GYAy2yL0RBbEOqDkVd%2Frt0fNJEzyO5B41uZ%2BdD8ZT7&X-Amz-Signature=64b935170975d5bae14e00d90c79e38b69066f4b0dffa04dda3fa0b49e81b240&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BRJHMT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnQwOlnpD7VpWn13130soOL8K9G7QfJWmmZvo%2BtUkIUQIhAI2%2BQFuWTLKdEM2YVcmnlWlPpzWLBMBSb2M5SgVXDYicKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmikJCbee2BNJZG8q3APHRQaGLM0%2FrpukFcC92RtSEopIFADBqq9waCc9ZYf9UYtEmffI6X5%2BJY9lbDSQXwJ3PJmbZg%2Fa4%2Bgbd6ilHqTZcDJ2%2B0NgwrIps1UVy%2FdE4zRUiN5VtrHuns3LAkkVLxGxjSY0S%2BzZ%2BuS1pWSYnOutgGqZH6rA7y3y7HM%2BF1Bo0B5FVR86v6qM4E2a1ncjPksRO%2BqhyGTJ0%2F7zwHurL0XzM3psBw1Q9ldx9j8spUd4mh0krxTEoRx8yUegzdOnwsR4Hae84Rx0u%2Fhq8QsS1skhF72zr3Aoc4FMQ4B%2B2s8CbdsAUPLH6e%2BH4pK0AyGcGMK0e4E4iQMH3J7QbyWLhvTRjqvkQhjfpUQT0fY54N3k8ucbd6jnFeaDUIR9QrqnLcRhGHZSt%2BuGL66glnLFgoTTch%2FCF1iOvPzU5IHsClLyPa%2B2%2BCGAwSC%2BY6E8aZfQCh9PjLuuNpIKW%2BDIGYLK%2FUFUAogF7O5jjtVpBckb9HW7hVktSSOQRDFuyoCnlqssIbCUYeQ8%2BShwAqvjnoLLpVzrvool1yIr1IghCJPJWXepL7rNYy5Uw2Q0n5fE%2F%2ForkUXEuxnzR%2Fr0UuakAmcYLMkyen1LHYJPYEF4rU6R19QqPgrUt6rvGov4Q7LUxTDCmfC8BjqkAWfCRQ3ZdWZWmNcgWRuY40qu0XvReMPqlsACEPedfSVAU%2FLSEQpoA5TFo2DnjGZnCFclj6ZI4uIKl50YP2mKFHxpeviE1hjC8JGtcb2dQJO3jsV%2BjQ3QlGFZMMHeqKVq4xP7N%2B79szENsP%2BcNExhzZA0W70Cwrs%2BbpAnxsiQK%2B%2BDQqkVj7GYAy2yL0RBbEOqDkVd%2Frt0fNJEzyO5B41uZ%2BdD8ZT7&X-Amz-Signature=6ad7eb551f37cffacc40c7efac2a8a70a85a21d25bef608d21b41135f44e1e69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
