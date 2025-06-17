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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJQ2JMU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOKqKXj8u%2BblIiwuWsDHVaQoFddPoYhkotV8rkXLTqnAiEAq2wEXNmaZpkxcE7ZWlvJtGF7piLTgW1DLTZRjKrfBwAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN10%2FknXLuhCjLbwcyrcA5VhexoQUWPoHTn2V4I%2FkfK7tqjc2exs6%2BR2HftoJRaXI8DYQCOU2jo63wPH9r8uC4cVVY4PqPDhkgOrwPfY%2F3zHLBRd%2F7laDhuKzl4czHrDa%2F2qp1UYge8nxl9EOkqsg27OJR6RGEdm6LlXmLx3mALebAKOB6123aW0sAzEgDxKZybX7zAGp2gGHxKRiGOPz%2FZwR7j7zHJsT1ASuOCnabuk6ccO%2FSN9Q40tF1tCJme0sAmJ803DfItCHIzlVC9CEbUzSY31SdNTB1L6WENYpkjJMkJMU5U7qnmkrjkAv%2BF5Pe6lUOfH6OucgLvvtPEGP3B7Lxf%2FEKzyvJU%2BlKVFtMHjExqh39t1LU%2BCFtKmfKZEVt%2FrXAvVhhkNDztc6n2dyHANjwlR6KdizyRf2eAywn5uGNVHVYl63kTeL5xTCeWhqAFWebBOOgdqh%2F8eXjcv%2F9d9jFfPHEWksBqo549HomWRzNdXPHttp8pg6fQKdLVe1%2BVyqYyVj4Z2hGDkF4YOZtIwC6gG%2BHTHv9Hoi%2FwyzUHZuEPH76xoQpHOKAJVHYPRbfkUALUoxg7VV0HRJzDo5SLvZ15XeFsE%2FMrWxzcST45m7XbEzcL1NFbCWlUEV4B2xV99SFBtWlOMLZbAMPSIx8IGOqUBEEvO5u2WyfXhp2byPzpLSODk4v9%2B9%2FmpdFtZlFjN%2FHdr5JFaxn8QlosyJN3o55jr1HQOWA8oKIHccaIoVnDDQZ74w8wSEoPTPpIQLen66uYA7vBkImC2jeNNtRGmz%2FwYmr4TG9nK%2B%2BJTH4%2FC20Rh%2BmdH6bmNUN9xBSYkSfHf5XEpOMObqMG6ryOXuZ778X%2F4%2FaVMSe%2Bwqztkq86Rt%2FZWKJUF07Sc&X-Amz-Signature=9da31b9b7cc77b0299d013b626f149da3f9bc3af0d0ef514990edf771a5e243c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJQ2JMU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOKqKXj8u%2BblIiwuWsDHVaQoFddPoYhkotV8rkXLTqnAiEAq2wEXNmaZpkxcE7ZWlvJtGF7piLTgW1DLTZRjKrfBwAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDN10%2FknXLuhCjLbwcyrcA5VhexoQUWPoHTn2V4I%2FkfK7tqjc2exs6%2BR2HftoJRaXI8DYQCOU2jo63wPH9r8uC4cVVY4PqPDhkgOrwPfY%2F3zHLBRd%2F7laDhuKzl4czHrDa%2F2qp1UYge8nxl9EOkqsg27OJR6RGEdm6LlXmLx3mALebAKOB6123aW0sAzEgDxKZybX7zAGp2gGHxKRiGOPz%2FZwR7j7zHJsT1ASuOCnabuk6ccO%2FSN9Q40tF1tCJme0sAmJ803DfItCHIzlVC9CEbUzSY31SdNTB1L6WENYpkjJMkJMU5U7qnmkrjkAv%2BF5Pe6lUOfH6OucgLvvtPEGP3B7Lxf%2FEKzyvJU%2BlKVFtMHjExqh39t1LU%2BCFtKmfKZEVt%2FrXAvVhhkNDztc6n2dyHANjwlR6KdizyRf2eAywn5uGNVHVYl63kTeL5xTCeWhqAFWebBOOgdqh%2F8eXjcv%2F9d9jFfPHEWksBqo549HomWRzNdXPHttp8pg6fQKdLVe1%2BVyqYyVj4Z2hGDkF4YOZtIwC6gG%2BHTHv9Hoi%2FwyzUHZuEPH76xoQpHOKAJVHYPRbfkUALUoxg7VV0HRJzDo5SLvZ15XeFsE%2FMrWxzcST45m7XbEzcL1NFbCWlUEV4B2xV99SFBtWlOMLZbAMPSIx8IGOqUBEEvO5u2WyfXhp2byPzpLSODk4v9%2B9%2FmpdFtZlFjN%2FHdr5JFaxn8QlosyJN3o55jr1HQOWA8oKIHccaIoVnDDQZ74w8wSEoPTPpIQLen66uYA7vBkImC2jeNNtRGmz%2FwYmr4TG9nK%2B%2BJTH4%2FC20Rh%2BmdH6bmNUN9xBSYkSfHf5XEpOMObqMG6ryOXuZ778X%2F4%2FaVMSe%2Bwqztkq86Rt%2FZWKJUF07Sc&X-Amz-Signature=01d163858e8888e6c724be5ff554f1fb0e351f534074732d05c073f81432f447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
