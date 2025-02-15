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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQEAPHF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC4ieSJXvmdSyWGf6Ju0eAlygdNC5CtMCAhas0Hb%2BpGjQIhAOZnHb7cOnXzjcdgKDPi2eu1vXjKM3%2BXm7VVutHP%2FCvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyrKtGAwTs1t2fSZCkq3AMkJ47tlgSD7kPEVjIkCYQccW8mxkor2s4R1tcwCyqcJzWpMzck7qAf2sH01etvRUdUimzI9juoBZT0U960TN3e6l0LEr4hQNIQ%2BOIErKcI68EMWT3juRwHFz6u6qip8hERrztlu%2FXQHnzRb2uDgTHKEvilhSPozVpkp30RFyZVFDAMALCLRrZt0Z03WfRs5JNT9NBkWiDlwJdwBSW%2BPioRCB27ZoL%2BmYbAacpuGYuUOfdY3JlXYCix5dJL25aOf8gdiwaK5wdoKiU%2FSWvTQgkklDUXfcXNw8A0ARgF7PUxIqs823Vxjz7HxXlcBZKa8GBFNHBFvbl1py97ln4%2Bb9DnnB1cXn8b0fcDmQMPuZy1hHPcsNnb7iGDhHyWW7Sj6HtdAfUZUSQOSu%2FEtpAYg1VXuO6LzB3pe%2FlQ5lK4qGVwPdsNz2Z16DX60yo2D56WywaSxk2fbsjK%2FpRMduoRVt2SR%2BZlfiq9%2BE%2F770avoD8R0vP65yDO8oFnwEBT8NF5wlB2sxQukB2VlTIMe3oTDXXYvWsT%2F90uaI5neFofwY9bvXP0WioF54NZ3Afja05DuLEF3nMgEWsm%2B%2FzGNqCGZGV56r5INMHD%2BFATu5fzj6pur9ecw1W1wNu97rRhyTDl7MG9BjqkAUmlW1UdMlgv3a76ZExPGRi7BBmXvGpmLa9tLclJVLBOCUxrmVKzBa%2B2T56mO2nxImoraUHZrFQdrBaJiNun3UfxPMQ7JE92PjnAwnIoAx0orzecJok6V85t%2FQlrAVy2Xhoj10ywvBAlTzmio%2FbtxzqEOMIhwZNvfLCzqBEgfx2Avc5MAcdSpaEAFi9M%2BGT3Cwxr01UDdzhRcwoo3LBb5rDvCDCm&X-Amz-Signature=6f75842114bafd9e4a2a48be9f0cfbf49a311cb0b5ddd8ac0f145a4afcd002a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQEAPHF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQC4ieSJXvmdSyWGf6Ju0eAlygdNC5CtMCAhas0Hb%2BpGjQIhAOZnHb7cOnXzjcdgKDPi2eu1vXjKM3%2BXm7VVutHP%2FCvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyrKtGAwTs1t2fSZCkq3AMkJ47tlgSD7kPEVjIkCYQccW8mxkor2s4R1tcwCyqcJzWpMzck7qAf2sH01etvRUdUimzI9juoBZT0U960TN3e6l0LEr4hQNIQ%2BOIErKcI68EMWT3juRwHFz6u6qip8hERrztlu%2FXQHnzRb2uDgTHKEvilhSPozVpkp30RFyZVFDAMALCLRrZt0Z03WfRs5JNT9NBkWiDlwJdwBSW%2BPioRCB27ZoL%2BmYbAacpuGYuUOfdY3JlXYCix5dJL25aOf8gdiwaK5wdoKiU%2FSWvTQgkklDUXfcXNw8A0ARgF7PUxIqs823Vxjz7HxXlcBZKa8GBFNHBFvbl1py97ln4%2Bb9DnnB1cXn8b0fcDmQMPuZy1hHPcsNnb7iGDhHyWW7Sj6HtdAfUZUSQOSu%2FEtpAYg1VXuO6LzB3pe%2FlQ5lK4qGVwPdsNz2Z16DX60yo2D56WywaSxk2fbsjK%2FpRMduoRVt2SR%2BZlfiq9%2BE%2F770avoD8R0vP65yDO8oFnwEBT8NF5wlB2sxQukB2VlTIMe3oTDXXYvWsT%2F90uaI5neFofwY9bvXP0WioF54NZ3Afja05DuLEF3nMgEWsm%2B%2FzGNqCGZGV56r5INMHD%2BFATu5fzj6pur9ecw1W1wNu97rRhyTDl7MG9BjqkAUmlW1UdMlgv3a76ZExPGRi7BBmXvGpmLa9tLclJVLBOCUxrmVKzBa%2B2T56mO2nxImoraUHZrFQdrBaJiNun3UfxPMQ7JE92PjnAwnIoAx0orzecJok6V85t%2FQlrAVy2Xhoj10ywvBAlTzmio%2FbtxzqEOMIhwZNvfLCzqBEgfx2Avc5MAcdSpaEAFi9M%2BGT3Cwxr01UDdzhRcwoo3LBb5rDvCDCm&X-Amz-Signature=837e116a83b7274d856b91f42185169406d79855362ae6b78ce0b590bc55e2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
