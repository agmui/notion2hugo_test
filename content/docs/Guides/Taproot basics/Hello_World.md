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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNNL2YJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIECjVxyX%2Fz0yO3v2Pr1lIjIJUdFHux766vf%2BqKKJlIZsAiEA2HmEJ2LzAKVmAS9ABitfXzbsXv6iX3ao5vctjeUUGWoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9bECK%2F580H2ihcSrcAzO%2BPO%2BGw%2B3va2Ak8n7vaPV%2F8qErz8B3I97BZ9JpKFzN4ztHLsX0IkO7oD2sHcatkdtEWlWswItvskNqhaWGHuzy3z%2BW6%2BpTf1G7d7E0IZUAJgrvesA7TQV6vs9DCT0ZQgXCo%2BdecMKD0kqe8yfQja1jNlC6cZ16eGOxrfR6fbdZ%2F5niMG24mywaO7wEN5UMxOGB0A9eNDaj4Y44CbY3X4X8rFIZh4mhApjPMRXl9cWr%2FtC98fMcxrBB0D%2BPdKQjjPQWWwYGnSagtb%2B5MDT%2F4HEtl4VBwo8TFiWeAkuUkR%2FA7dsOArP7i99R4X%2BwRPwk2ksdjuht%2Fx1wHgDHzaZ%2F8lQomXxXvde5z%2BJh3x4Cm3C5uoFZ5YZLJi%2BdkI1Zr9bwEC4c2cwYPUSsxr72IBTl9xXCVB26kq6OsmjTKKkPvJwa4DVZslRQH8mpnI0yP%2BHHh5WfqotfV%2BtHo5%2F5TlAqCH258H4eDKWkgtKjrusxe5MXwOCv662oscta4OeLWpG4xUlkt%2Fdnv26lbOR9sPO%2F%2BrepSXzxkNuajmnySbe%2FsbZ6EYM9BXj%2Fq9cSShIRvIz3CwJ1Xitcr4y33T8b8YVGJdgULUinwAha%2B5fw5hFDxyXy%2BE4HqV1So9JoprnGMNmy2L8GOqUBiYYwSAUNchu7YB4kTol8ilHfTbbmesmK492WHZLqpIQow%2BuFvkicNPaQnbawzQD03e9MRgLzHSWJjObT8VgwaDeNfuSpHre6PfNYWhSfMfLmpazCIX5GO0HrPZRt1QBttrLPup9GggLRNmwi4j63Wx9WUwWyGpt4PBZNvOrjkpfUaSuURujv7n1qGGxMt%2BnLnS6IIul6EB8zbVhX7ASBlyDng%2BK%2F&X-Amz-Signature=8f1014510e56d5d85b1aa60e8e08686933e8f713fdb534839932d8e8762af9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNNL2YJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIECjVxyX%2Fz0yO3v2Pr1lIjIJUdFHux766vf%2BqKKJlIZsAiEA2HmEJ2LzAKVmAS9ABitfXzbsXv6iX3ao5vctjeUUGWoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc9bECK%2F580H2ihcSrcAzO%2BPO%2BGw%2B3va2Ak8n7vaPV%2F8qErz8B3I97BZ9JpKFzN4ztHLsX0IkO7oD2sHcatkdtEWlWswItvskNqhaWGHuzy3z%2BW6%2BpTf1G7d7E0IZUAJgrvesA7TQV6vs9DCT0ZQgXCo%2BdecMKD0kqe8yfQja1jNlC6cZ16eGOxrfR6fbdZ%2F5niMG24mywaO7wEN5UMxOGB0A9eNDaj4Y44CbY3X4X8rFIZh4mhApjPMRXl9cWr%2FtC98fMcxrBB0D%2BPdKQjjPQWWwYGnSagtb%2B5MDT%2F4HEtl4VBwo8TFiWeAkuUkR%2FA7dsOArP7i99R4X%2BwRPwk2ksdjuht%2Fx1wHgDHzaZ%2F8lQomXxXvde5z%2BJh3x4Cm3C5uoFZ5YZLJi%2BdkI1Zr9bwEC4c2cwYPUSsxr72IBTl9xXCVB26kq6OsmjTKKkPvJwa4DVZslRQH8mpnI0yP%2BHHh5WfqotfV%2BtHo5%2F5TlAqCH258H4eDKWkgtKjrusxe5MXwOCv662oscta4OeLWpG4xUlkt%2Fdnv26lbOR9sPO%2F%2BrepSXzxkNuajmnySbe%2FsbZ6EYM9BXj%2Fq9cSShIRvIz3CwJ1Xitcr4y33T8b8YVGJdgULUinwAha%2B5fw5hFDxyXy%2BE4HqV1So9JoprnGMNmy2L8GOqUBiYYwSAUNchu7YB4kTol8ilHfTbbmesmK492WHZLqpIQow%2BuFvkicNPaQnbawzQD03e9MRgLzHSWJjObT8VgwaDeNfuSpHre6PfNYWhSfMfLmpazCIX5GO0HrPZRt1QBttrLPup9GggLRNmwi4j63Wx9WUwWyGpt4PBZNvOrjkpfUaSuURujv7n1qGGxMt%2BnLnS6IIul6EB8zbVhX7ASBlyDng%2BK%2F&X-Amz-Signature=11112e62b5c6935257e5bfee1619669c48e711a2757797b38b12d7f121997016&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
