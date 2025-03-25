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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2LYE5K%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2XThs%2Fj%2F%2BXjZE2X8QmIPg3VX3%2BYRyqNqJn2gaoRk24AiEA2vei4%2B7cLkSXSi3uT5OY%2F8R32SwLDrr7%2BWmCUU81QNUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCYlHFmie8sgGnveNircA%2F3h6i2PYgpC4ofl1fH2XNq%2FuHPacLljkBdcyZHS5CgVtZt2AnNetrsI0s4fG4u%2BsZdYNN%2FSYpi4WKVf3rr8RBfFqMILeOTlUbKxWTP9MYsBS6806TbhHSUh83HzxD%2FBP52%2Bx1zPr2YiMqLLWEEGCHIBuyVzeDh%2FHKeBdNnJR358LpIYQ8OVGj9i7NMwvrjyuzzfh8ImjGy%2FStfN1Cas7SgMm3b8ekXr%2FNIZVrMQOWzWvjTBb3YoKbvsnoxr%2FW%2FLMaCYjQdcNcD6r7bDdi2YfLFPusxTrW3RDUB69YsAvBqN72lHK7rChEh7N3bWsewhwvTANsPIK7S%2BnV31WoJDOYAJi4EDDU0gFhXWhWyMZ6B01eR1lLEYPMKqTne7Z93d4xlB0cTgefdybF0cltOKfb3QZNNTqCObFocE%2F%2FV5vnXFqdhydR1amIdL5wH6i0joiSaWDEgC35Hy2EsGVqpupLH%2BTBvyAClKhD5D6fdXFSuMY4lHvoci8KGWzX0LjgESDWFJjAV5U1eaDSzQhurHVRS5rM9VDfJe18h68Yui9UHHS%2Fni3tNuGCUHXBPFHWt%2FvNuTyNc2z%2Byy5436sTnHqVCWXbWUE2ggYiOGbf21qBAO49vtytQfdJClEoDBMP3Mib8GOqUBVVFLUJeu%2FTo24xiv90BdVpqa8yQ26aVF0CUreOZMVKKBEt3af1EEhMffcNbIYWeXfTeWg%2FuRFTElxEf2PNx%2BrH4XjU403M84gp%2F8i0k9KGOqPYriqAOTMqvfiOD9b81KxZLe749N7m%2FHSvc1XbK6mC5TQlhDCSPN7RmNO7KbLTWo2n0dpLdqBqR%2BaA9gbWxGXg0IMJqCzj9RHgD%2FuQcbQ%2FkzQjL7&X-Amz-Signature=a45cd8cf7821afe02df25f840d4223ab2e83266687327c68efe5487b24eddfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2LYE5K%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2XThs%2Fj%2F%2BXjZE2X8QmIPg3VX3%2BYRyqNqJn2gaoRk24AiEA2vei4%2B7cLkSXSi3uT5OY%2F8R32SwLDrr7%2BWmCUU81QNUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCYlHFmie8sgGnveNircA%2F3h6i2PYgpC4ofl1fH2XNq%2FuHPacLljkBdcyZHS5CgVtZt2AnNetrsI0s4fG4u%2BsZdYNN%2FSYpi4WKVf3rr8RBfFqMILeOTlUbKxWTP9MYsBS6806TbhHSUh83HzxD%2FBP52%2Bx1zPr2YiMqLLWEEGCHIBuyVzeDh%2FHKeBdNnJR358LpIYQ8OVGj9i7NMwvrjyuzzfh8ImjGy%2FStfN1Cas7SgMm3b8ekXr%2FNIZVrMQOWzWvjTBb3YoKbvsnoxr%2FW%2FLMaCYjQdcNcD6r7bDdi2YfLFPusxTrW3RDUB69YsAvBqN72lHK7rChEh7N3bWsewhwvTANsPIK7S%2BnV31WoJDOYAJi4EDDU0gFhXWhWyMZ6B01eR1lLEYPMKqTne7Z93d4xlB0cTgefdybF0cltOKfb3QZNNTqCObFocE%2F%2FV5vnXFqdhydR1amIdL5wH6i0joiSaWDEgC35Hy2EsGVqpupLH%2BTBvyAClKhD5D6fdXFSuMY4lHvoci8KGWzX0LjgESDWFJjAV5U1eaDSzQhurHVRS5rM9VDfJe18h68Yui9UHHS%2Fni3tNuGCUHXBPFHWt%2FvNuTyNc2z%2Byy5436sTnHqVCWXbWUE2ggYiOGbf21qBAO49vtytQfdJClEoDBMP3Mib8GOqUBVVFLUJeu%2FTo24xiv90BdVpqa8yQ26aVF0CUreOZMVKKBEt3af1EEhMffcNbIYWeXfTeWg%2FuRFTElxEf2PNx%2BrH4XjU403M84gp%2F8i0k9KGOqPYriqAOTMqvfiOD9b81KxZLe749N7m%2FHSvc1XbK6mC5TQlhDCSPN7RmNO7KbLTWo2n0dpLdqBqR%2BaA9gbWxGXg0IMJqCzj9RHgD%2FuQcbQ%2FkzQjL7&X-Amz-Signature=cddc90bc62e40cf6ae4d5f742580a0c242d119d1185e3b421936a218133a9caf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
