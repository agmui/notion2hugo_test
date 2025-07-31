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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPULHOB5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEJdBzCg8k8v0ai2R32qgZ5BLudM1JxDzUwht0tg4lRwIhAMny3Kce1gPh3ueSBoy4xK61pVCKUkzx%2BbOyRPrZYR9eKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5k2w7xYzJcDHhIUq3ANeZzEgc648OGed9PPxTxfV%2Bf4irA3wFSvSecBGT3HcgjUNIEW1%2B8StWgObIZOjIpY5AJ19f%2BLoGk5M73PO68MMopk4Be2IgPGW9Gn57vx838ITxnDUJzUiLJ7L9lS95APQAUVhUL4PxYeL1NWhVm4woRalA4hOwxEla0lCQLOViAeN6rLsW5rtxu5RGUyUyfLTOO38eDLM4Vih1N19j2YFaqxGARU3CQY828eF5omP0G%2FHVmhgXzmjt9u6k6PmWB%2Bdzf3GbqlL1I0SlCCS029bj4Tzq0XTjV0oSvMr%2BQfmYpSG9E%2FA%2B9y%2BNwyhEi3LEYKxVNZZhYBC3uJ8nwAIkv6I83uLryAvnZSKywV5eVBVTZoYiWLXbIdWgsUu76KcM%2F2zIqnmg1yGdC65dz31MM6%2F3hIY6Pp7w9bF7a%2FSIue3VuujTsMBuRzGNvldJHlQ6e6l6mKN6A%2FqVRvQiky3ox%2FHod%2FNsQPsrN4d5iTvXmpLB7wbkVP%2FhrkgRMGhdn%2FtTydyiOqYyIcVRgrnreEET642QLLaGRjbLFSgh66JQgK6vnCM8hrCohR0AWNGUXSA%2F%2F%2BfZYIMjEeSjWL8lfu46Wps535SFRLM7NhocLoEEOvtDiLKBphkuylo8P2CyjCx6a3EBjqkAdfwERLT7w%2BjDdOF20OvCQ7UbUMpJI1fQBT%2BUqql4H5tS1RGvQCzWwHbAKzjUdSxrg6TcH%2Fwy%2BLUBF65ocvq43n3hWexL7Hv7VWt1Ic%2FAzgH9xOkvd%2FESyjBMa6J4RDths%2FpSEhiJPsneQVAo174fmXDV0WDRE8kIFqgDQ4wj5Bh5%2FTU8nF3mxoJqhlBJ4fn4jZvsqo3DD3wbrXFIGaT8odk9PXk&X-Amz-Signature=0fca62d1e2a8d5d7c105ed84742f283bdb3da3a25f7dd4f991f5e7bb902fdd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPULHOB5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEJdBzCg8k8v0ai2R32qgZ5BLudM1JxDzUwht0tg4lRwIhAMny3Kce1gPh3ueSBoy4xK61pVCKUkzx%2BbOyRPrZYR9eKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV5k2w7xYzJcDHhIUq3ANeZzEgc648OGed9PPxTxfV%2Bf4irA3wFSvSecBGT3HcgjUNIEW1%2B8StWgObIZOjIpY5AJ19f%2BLoGk5M73PO68MMopk4Be2IgPGW9Gn57vx838ITxnDUJzUiLJ7L9lS95APQAUVhUL4PxYeL1NWhVm4woRalA4hOwxEla0lCQLOViAeN6rLsW5rtxu5RGUyUyfLTOO38eDLM4Vih1N19j2YFaqxGARU3CQY828eF5omP0G%2FHVmhgXzmjt9u6k6PmWB%2Bdzf3GbqlL1I0SlCCS029bj4Tzq0XTjV0oSvMr%2BQfmYpSG9E%2FA%2B9y%2BNwyhEi3LEYKxVNZZhYBC3uJ8nwAIkv6I83uLryAvnZSKywV5eVBVTZoYiWLXbIdWgsUu76KcM%2F2zIqnmg1yGdC65dz31MM6%2F3hIY6Pp7w9bF7a%2FSIue3VuujTsMBuRzGNvldJHlQ6e6l6mKN6A%2FqVRvQiky3ox%2FHod%2FNsQPsrN4d5iTvXmpLB7wbkVP%2FhrkgRMGhdn%2FtTydyiOqYyIcVRgrnreEET642QLLaGRjbLFSgh66JQgK6vnCM8hrCohR0AWNGUXSA%2F%2F%2BfZYIMjEeSjWL8lfu46Wps535SFRLM7NhocLoEEOvtDiLKBphkuylo8P2CyjCx6a3EBjqkAdfwERLT7w%2BjDdOF20OvCQ7UbUMpJI1fQBT%2BUqql4H5tS1RGvQCzWwHbAKzjUdSxrg6TcH%2Fwy%2BLUBF65ocvq43n3hWexL7Hv7VWt1Ic%2FAzgH9xOkvd%2FESyjBMa6J4RDths%2FpSEhiJPsneQVAo174fmXDV0WDRE8kIFqgDQ4wj5Bh5%2FTU8nF3mxoJqhlBJ4fn4jZvsqo3DD3wbrXFIGaT8odk9PXk&X-Amz-Signature=8f5cd875dd8702a13b9d25bdd58563074f8232b18db0b0a9f9919ad88d70b33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
