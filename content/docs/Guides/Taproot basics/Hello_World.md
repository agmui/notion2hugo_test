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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQU4Y74%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCkciks7DHa5x1%2B8UqIamyyv7o74KIgCq15trgHrC122AIhAIAYm4KM%2Bmm7L%2Bdw3V3ZeA%2Ff8DkUsgt7Lu9GaWPTi%2BRRKv8DCGMQABoMNjM3NDIzMTgzODA1IgzylkyahIq2sqMqk%2Fcq3APpLMuq3Lk8lkP01UgwOLAM7DNzOwq8XCke%2BTWSREfvMILN1uTF6PVYH0u7tQiscQHJ%2BmV5ZaKgJJ67DXZMDugi%2F7xBZIjplhEX06eqhlG93duZb3%2Brw7m1XTpdGEdsBax16RyqsFfaO%2BgieYl3%2BnAmnyZjH0ACR9U7qQ6tB7VluOG9IE%2BaFig%2FHK%2BNTQ8B4ZjCSkHTSmp12Ikr76N%2B4WI5gl0PFBkNNIiUtldWEAe0HeQNhSabo4jQn%2F2wXHnEAJvhEg4fsP5b%2FsoE%2ByDWiNIX4enME6mwfQ055p8mwv5X25Nx6v8XfP2%2BGA7CO%2BO1Xy52xp%2FFd%2BgJEwgS7aOOfjmuL5yhlD5FGklwvs65L%2FdwAnykfrBK1qzacslyfB1DJo90TDD5SYM%2B0RXBjope3epe%2Bs2qIVam4Hp3W%2FoPSTG28Cyu5gBVblCtZFyWq3tmKdEmTv7YAz3weepaBZvq8uLe62bX2wW9ifdC%2BczhOJMebUDhf0si0kp0fV8KZz78jWIOFZRoC5TzWt2mHZ%2BRzx48xctGaZ%2BuMHzjv8CTlRodySpO1zv8A85OlFLZ9FohAt2fp%2Fen4M8QFWuNGa%2F8Q4Qvb5WyB1Ze%2FEZCi6wBznWT0knxzonVN6zFmb6TSzC7r8HCBjqkAWyp0lnqYjD040E0PRXxS5nNf9SqMB5xjNyWqSEVOteOrs7AJuttOm6j4tr%2BO896ZVwDvyZdBv3H1BV3UVAIbV9BBA8Xw0oTnM6Mh7wRV6NJcqUKm4fbIRpY7fsOAmmaGPHnXVToHuDty6d4mFnVFnHY8MVMlS9djh%2BcBWH%2FJ3BvvzwC%2BdHmMJMvHS3OqdxtwUAdLxDe3GXiVL%2FjrBwP9PdQgYTv&X-Amz-Signature=98bcb6c152e5bf44be0c6515bab896ee5d5aba99e53b349a6c4fb98fd67923fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQU4Y74%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCkciks7DHa5x1%2B8UqIamyyv7o74KIgCq15trgHrC122AIhAIAYm4KM%2Bmm7L%2Bdw3V3ZeA%2Ff8DkUsgt7Lu9GaWPTi%2BRRKv8DCGMQABoMNjM3NDIzMTgzODA1IgzylkyahIq2sqMqk%2Fcq3APpLMuq3Lk8lkP01UgwOLAM7DNzOwq8XCke%2BTWSREfvMILN1uTF6PVYH0u7tQiscQHJ%2BmV5ZaKgJJ67DXZMDugi%2F7xBZIjplhEX06eqhlG93duZb3%2Brw7m1XTpdGEdsBax16RyqsFfaO%2BgieYl3%2BnAmnyZjH0ACR9U7qQ6tB7VluOG9IE%2BaFig%2FHK%2BNTQ8B4ZjCSkHTSmp12Ikr76N%2B4WI5gl0PFBkNNIiUtldWEAe0HeQNhSabo4jQn%2F2wXHnEAJvhEg4fsP5b%2FsoE%2ByDWiNIX4enME6mwfQ055p8mwv5X25Nx6v8XfP2%2BGA7CO%2BO1Xy52xp%2FFd%2BgJEwgS7aOOfjmuL5yhlD5FGklwvs65L%2FdwAnykfrBK1qzacslyfB1DJo90TDD5SYM%2B0RXBjope3epe%2Bs2qIVam4Hp3W%2FoPSTG28Cyu5gBVblCtZFyWq3tmKdEmTv7YAz3weepaBZvq8uLe62bX2wW9ifdC%2BczhOJMebUDhf0si0kp0fV8KZz78jWIOFZRoC5TzWt2mHZ%2BRzx48xctGaZ%2BuMHzjv8CTlRodySpO1zv8A85OlFLZ9FohAt2fp%2Fen4M8QFWuNGa%2F8Q4Qvb5WyB1Ze%2FEZCi6wBznWT0knxzonVN6zFmb6TSzC7r8HCBjqkAWyp0lnqYjD040E0PRXxS5nNf9SqMB5xjNyWqSEVOteOrs7AJuttOm6j4tr%2BO896ZVwDvyZdBv3H1BV3UVAIbV9BBA8Xw0oTnM6Mh7wRV6NJcqUKm4fbIRpY7fsOAmmaGPHnXVToHuDty6d4mFnVFnHY8MVMlS9djh%2BcBWH%2FJ3BvvzwC%2BdHmMJMvHS3OqdxtwUAdLxDe3GXiVL%2FjrBwP9PdQgYTv&X-Amz-Signature=d54078fe5f7a637c042acdb99e88b1b2b7ba44ae4373d3d76a6eb00a32b5d79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
