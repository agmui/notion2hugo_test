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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBF7B7X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCwYyy1zxb3c4JzyIg0iebrblv2VeC8w1WAXH6l7eR5MAIgAj3z6a9HvoLDW6ajKzY0O%2BD%2FofLovulTG23U5u28v3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrfj%2FY%2Fzn%2FLzp6%2BaircAz4AKzJSdgqSd1J3dhdy%2FkyLBEYYFEby7pkRg1PFHQexpf5KWNGrvQK7ND0kWjhS7U5Yt6PUP%2B7K%2BSNAek78Q%2FlscBLUCMQtD94P2cRgWT4eHO0tm5Pem7uqJAJSfD6evhZICPxQ%2FyqZt4Jg9IlulIBHX2phIOGbgtG777sD0F63gPqHmJhc1skz87s7Z3%2B8qsA%2Fm7CmbNZsXchsKJLBReZGlau%2FqaNogVBQLyhGEQoKm%2BMCovPVU8WvYbNl0LAejdp5ZlTBy6BDqdVuSVmbCKxggux1gJuf0Tem7tlP4DVNOa0eT9jTXxoT8rCrApGeOeaMz2K9HuyEFsxDP8DhARU5P43fh1ed2Yhf4ShiNizTna30lByU2UnE9n8a82WGz2pU0%2B8US9MRaavPCvF3kocjdQXREWl6wzXyad1mpzpOzSsG5rUSQXBL8PZ8vEneMluVN%2F8N%2FW5TYXYGgQagnUp%2BIA2WtjYOXZ%2BjUzijfahj3cBqkXrekA2OX6T8eU9dVxjDEtioq%2F%2BfEd2YzyB7Qbkcx6h8VZNeHR9HdANzWFQl%2BTgn%2FxfpMtP0EucQtLuutT%2BmxbbH3SMXa%2Bw1OV2TyqcQkwzAsjNx9iYolMVQjfWP%2F9vyZZCS2gJubmsmMI322sQGOqUBvqm141dmIXNGhia5fzaWtQhXAuPC9OoyoGz4%2BlAoeikti3cZc9HE83EEj4%2FnAwlkRvuFDP807tuTCzuwpG75G%2FKcfqkPHxPnByZ0Nu9SeiiqoI3PD%2B9VD9XMkuO6LrkWKIRmZjlPF77%2FzbMuEbCL6DKNIfe1xDqKeK1RRJoGFBnVghV66RdsckCQEacmyn8N2hTtUucW%2Fg8IXUBEM3Uxpp75y3Qm&X-Amz-Signature=2e7f928b43de47d9fee04aaba8166d76a61b42516d45dd7da457b46d2e4a22ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBF7B7X%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCwYyy1zxb3c4JzyIg0iebrblv2VeC8w1WAXH6l7eR5MAIgAj3z6a9HvoLDW6ajKzY0O%2BD%2FofLovulTG23U5u28v3MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrfj%2FY%2Fzn%2FLzp6%2BaircAz4AKzJSdgqSd1J3dhdy%2FkyLBEYYFEby7pkRg1PFHQexpf5KWNGrvQK7ND0kWjhS7U5Yt6PUP%2B7K%2BSNAek78Q%2FlscBLUCMQtD94P2cRgWT4eHO0tm5Pem7uqJAJSfD6evhZICPxQ%2FyqZt4Jg9IlulIBHX2phIOGbgtG777sD0F63gPqHmJhc1skz87s7Z3%2B8qsA%2Fm7CmbNZsXchsKJLBReZGlau%2FqaNogVBQLyhGEQoKm%2BMCovPVU8WvYbNl0LAejdp5ZlTBy6BDqdVuSVmbCKxggux1gJuf0Tem7tlP4DVNOa0eT9jTXxoT8rCrApGeOeaMz2K9HuyEFsxDP8DhARU5P43fh1ed2Yhf4ShiNizTna30lByU2UnE9n8a82WGz2pU0%2B8US9MRaavPCvF3kocjdQXREWl6wzXyad1mpzpOzSsG5rUSQXBL8PZ8vEneMluVN%2F8N%2FW5TYXYGgQagnUp%2BIA2WtjYOXZ%2BjUzijfahj3cBqkXrekA2OX6T8eU9dVxjDEtioq%2F%2BfEd2YzyB7Qbkcx6h8VZNeHR9HdANzWFQl%2BTgn%2FxfpMtP0EucQtLuutT%2BmxbbH3SMXa%2Bw1OV2TyqcQkwzAsjNx9iYolMVQjfWP%2F9vyZZCS2gJubmsmMI322sQGOqUBvqm141dmIXNGhia5fzaWtQhXAuPC9OoyoGz4%2BlAoeikti3cZc9HE83EEj4%2FnAwlkRvuFDP807tuTCzuwpG75G%2FKcfqkPHxPnByZ0Nu9SeiiqoI3PD%2B9VD9XMkuO6LrkWKIRmZjlPF77%2FzbMuEbCL6DKNIfe1xDqKeK1RRJoGFBnVghV66RdsckCQEacmyn8N2hTtUucW%2Fg8IXUBEM3Uxpp75y3Qm&X-Amz-Signature=ab6298a880d82727941cd277d23c10bf15a1c01228bc8357be2baee117f92016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
