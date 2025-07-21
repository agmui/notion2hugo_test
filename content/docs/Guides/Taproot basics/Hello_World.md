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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMJWBFT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnvFHC48MObbyHdYAGmzDt727st%2F0q18wxV99n1EeBAAiAMCEfLU8XDBDCXXMd91%2BrfKHEmjr8ClWzaUQ8sxrn%2FsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssK1TCy6Y%2F6CYEZ0KtwDY5DM5W8rdsxdRgVXv0wYl3E9UyKJgICvD3XUuLI1pVXyujc9L4DwXlGfAa1gGwuOBakrXd%2FiK38dyTM9G1da8iabpwZHW92QJJmTyiBSCcH2PYuf4Ky32yCB376O5TdTLPiTsCE%2B1v4eD7WCNqXtms6RCOPzE9M1ccwxE6lbqTo4w8TqQ0i%2B1tiC8%2BWCYSv51qZ4sWRXAyw4CeTsFRPu0J24HZeKfJZZTePZQyNU9ZLBXIZm6hxau1hR0OOTYWHinCLsDaRXzHwog7TJDQI6NpJdaaWQN%2BF3Q%2B9FTgz0DqleVzn8imqVqreUlJDvxyfYFSIEyq4FZY4YoHovhWnnR3ZFYM8h2DZQ%2Blh6AA3yxGg0nujkElqEjbh9u4CjOetLBkU9Bsh7scjjrjJMU%2FEwAgI0%2BD3fhGliqISpSD5YSft4sMktygPB4D0Bg7AnsopbKNwb8bmmWWQjQHsUzve15VCEbSsHgOl38NeTFA%2FXiwvNCbYsH%2BfMzgb9cPNdsXpCkRqAXy%2FSLXoAl9CRE9grt5B8knCmN7q0WIknPlMjc1NXajc%2Bmlrq3yx1sXiPhy2GfaPDunjBRhSDTybmSYEih5xmZ2Yz86HYrp8MOYtuhGwQVy355eyCgmjBlm8wzOj5wwY6pgF8gjwkElxoooEBMcbzmIxrfllYLPb1GU4XipEwFi0kaZKWLXaheeGNhCyEpqJM3Ogx%2FMLY7JxluMSuBUd%2Bv4W4G4Eyk%2FfNNEG6rQiPoNfhP9AjtIkQSArykez8SYTOYb8XiXGvFvISLRNYF3rObJcKnEIZuqX4of1w8Tk3NaAzn3HXFBmr2dhdU4KmRMv3v04PJHP5rdE8%2BBXTycET11x7RmnHbZxM&X-Amz-Signature=759ad4634514bf48fab64bfaa7ec644590ccee5b68ae974483207f1653f2a888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMJWBFT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnvFHC48MObbyHdYAGmzDt727st%2F0q18wxV99n1EeBAAiAMCEfLU8XDBDCXXMd91%2BrfKHEmjr8ClWzaUQ8sxrn%2FsCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssK1TCy6Y%2F6CYEZ0KtwDY5DM5W8rdsxdRgVXv0wYl3E9UyKJgICvD3XUuLI1pVXyujc9L4DwXlGfAa1gGwuOBakrXd%2FiK38dyTM9G1da8iabpwZHW92QJJmTyiBSCcH2PYuf4Ky32yCB376O5TdTLPiTsCE%2B1v4eD7WCNqXtms6RCOPzE9M1ccwxE6lbqTo4w8TqQ0i%2B1tiC8%2BWCYSv51qZ4sWRXAyw4CeTsFRPu0J24HZeKfJZZTePZQyNU9ZLBXIZm6hxau1hR0OOTYWHinCLsDaRXzHwog7TJDQI6NpJdaaWQN%2BF3Q%2B9FTgz0DqleVzn8imqVqreUlJDvxyfYFSIEyq4FZY4YoHovhWnnR3ZFYM8h2DZQ%2Blh6AA3yxGg0nujkElqEjbh9u4CjOetLBkU9Bsh7scjjrjJMU%2FEwAgI0%2BD3fhGliqISpSD5YSft4sMktygPB4D0Bg7AnsopbKNwb8bmmWWQjQHsUzve15VCEbSsHgOl38NeTFA%2FXiwvNCbYsH%2BfMzgb9cPNdsXpCkRqAXy%2FSLXoAl9CRE9grt5B8knCmN7q0WIknPlMjc1NXajc%2Bmlrq3yx1sXiPhy2GfaPDunjBRhSDTybmSYEih5xmZ2Yz86HYrp8MOYtuhGwQVy355eyCgmjBlm8wzOj5wwY6pgF8gjwkElxoooEBMcbzmIxrfllYLPb1GU4XipEwFi0kaZKWLXaheeGNhCyEpqJM3Ogx%2FMLY7JxluMSuBUd%2Bv4W4G4Eyk%2FfNNEG6rQiPoNfhP9AjtIkQSArykez8SYTOYb8XiXGvFvISLRNYF3rObJcKnEIZuqX4of1w8Tk3NaAzn3HXFBmr2dhdU4KmRMv3v04PJHP5rdE8%2BBXTycET11x7RmnHbZxM&X-Amz-Signature=366bf5fb25dabd17fa66cd083c70e85d657d83d54b7f6e06539e14e82fb46ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
