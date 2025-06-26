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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TG2PETQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCj1NFZztZctSYKQzZ8WkI44OZ%2FQ%2BYRZDNPVNOSsCK%2F6gIgTCG8GnJrzUx8tMwC0NTyNc2ROIetnUWKIE4tUBEr%2BPYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKFMyvTo1%2F4eP%2BqBdyrcAwFd%2BduQk9GbFXxM5QSZ7eGHb0KUoo8A0ovMyl5MY5TxQkcpR7fZ81FCJ0W6D9JEjQVHOKC%2BWJqvErovfJjT4KKh9p%2BkcOKUqJql%2FvukSH2glfWoke3ZDLyEADSZnhB%2FJ%2B9rFSX9QbUN%2Bd8uQ7vGUOB9C8BSx4u7oaWy%2FsgCpFdAS2VrnMFAv8CY%2Fh6n5TPaDRmMcEsq%2FZ8kCPxweht%2FuwbhC6y4Pu44CJZn8hpq46LTzds7TzdSOCaul%2BsSV2kd%2BpiM6%2FS%2B%2Bxy1fHivLJc2Io0AIYskmQy3DEKYwQ5b%2FzQi5lti4WH5IJoKK%2B0acLpRkQ5akdfnCtfO627tuDEImPVlNjl65Q1jZ%2FR9m3tVNUYmzmVcxqnAS3o6J440AQR%2FSm54yUqVxVwD6eJae8loj5RDlsP5zrFMcs7q9e8aSmgmvpL4Hyedo8GPqVYab8P8kZrvtvMSroztzqTAjXt%2B%2FgMTOBFgd99ZCu5zDiNo3nJ%2F1Q638cXN5hnoSYbTAEX5RPgGOR3%2BKL3CMb6JpX12sloQEzv6DpMxRQADZeviHBf7JhhBuZv00ZfKSBaACFo7uPwQsQHddEuxK1zlv5emD38PFU%2Bll2uHDmtZyWW7CmOJXSEklxv24KoxlX6EMMqb9cIGOqUBZo5XuWKM3I8LsHM2BvinuZ%2ByZNf8iDoUwMBQ3LXogDkbADSKmMpzJb9Ro5HUEOQsDxlzxWeks1nuJ501QOTPdeyOvOIngUzoZdY8tP5MLPcIgZvs4rz39lGmxTjCOS%2FaFCAYKIATZB7079dTq5DD6Om%2FNfpp06WbmuySBs%2BxDaDNTB509gG0ofk8qCQxV3p%2Fny4qkQidlehUZp5HReX8ha%2F5rJZZ&X-Amz-Signature=80c300adf484086b902a67374aa87af703960961d4be90a0f233704e81ce7a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TG2PETQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCj1NFZztZctSYKQzZ8WkI44OZ%2FQ%2BYRZDNPVNOSsCK%2F6gIgTCG8GnJrzUx8tMwC0NTyNc2ROIetnUWKIE4tUBEr%2BPYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKFMyvTo1%2F4eP%2BqBdyrcAwFd%2BduQk9GbFXxM5QSZ7eGHb0KUoo8A0ovMyl5MY5TxQkcpR7fZ81FCJ0W6D9JEjQVHOKC%2BWJqvErovfJjT4KKh9p%2BkcOKUqJql%2FvukSH2glfWoke3ZDLyEADSZnhB%2FJ%2B9rFSX9QbUN%2Bd8uQ7vGUOB9C8BSx4u7oaWy%2FsgCpFdAS2VrnMFAv8CY%2Fh6n5TPaDRmMcEsq%2FZ8kCPxweht%2FuwbhC6y4Pu44CJZn8hpq46LTzds7TzdSOCaul%2BsSV2kd%2BpiM6%2FS%2B%2Bxy1fHivLJc2Io0AIYskmQy3DEKYwQ5b%2FzQi5lti4WH5IJoKK%2B0acLpRkQ5akdfnCtfO627tuDEImPVlNjl65Q1jZ%2FR9m3tVNUYmzmVcxqnAS3o6J440AQR%2FSm54yUqVxVwD6eJae8loj5RDlsP5zrFMcs7q9e8aSmgmvpL4Hyedo8GPqVYab8P8kZrvtvMSroztzqTAjXt%2B%2FgMTOBFgd99ZCu5zDiNo3nJ%2F1Q638cXN5hnoSYbTAEX5RPgGOR3%2BKL3CMb6JpX12sloQEzv6DpMxRQADZeviHBf7JhhBuZv00ZfKSBaACFo7uPwQsQHddEuxK1zlv5emD38PFU%2Bll2uHDmtZyWW7CmOJXSEklxv24KoxlX6EMMqb9cIGOqUBZo5XuWKM3I8LsHM2BvinuZ%2ByZNf8iDoUwMBQ3LXogDkbADSKmMpzJb9Ro5HUEOQsDxlzxWeks1nuJ501QOTPdeyOvOIngUzoZdY8tP5MLPcIgZvs4rz39lGmxTjCOS%2FaFCAYKIATZB7079dTq5DD6Om%2FNfpp06WbmuySBs%2BxDaDNTB509gG0ofk8qCQxV3p%2Fny4qkQidlehUZp5HReX8ha%2F5rJZZ&X-Amz-Signature=5255ed030d63f5104bab0653e746ee0dd62716d1f02fedb3e5d60eab5ae517d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
