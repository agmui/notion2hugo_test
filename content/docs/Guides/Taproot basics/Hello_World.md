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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYBCEGK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB%2FqEPTmOSqU3EM0y6ygUFQlEJfJXnne%2F3kINffVxHCqAiEAm0jac94MwTmyGXkXULQZ5JYFuKAP3RigYosr8LGUQYMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEYGfGBRqhqhw6tnuSrcA18s9H2YrhyVO43xnkGyNdT3ZsouOJp8fneK%2Fbhwrh3KDXYhZCZqyZ19lUhVtbmG%2BKHwt%2FBFRBZuKm7i%2FJR%2BR4ePFM7wS%2Bg1e5KctKCvb48N2eNqnd3DisVNFVME9aARUoGuQtIbM8WisiRxqcTeShyYzHmNviP%2FTAGaaQ8GwGk%2BgBTO3qkTSufEmNC65ZuUUvf9oVvq9o2FJjenAUSycWt4FpEiZbxG5IsJAGuPS62H%2BiZ7p0QUjDbTMPXlk7B4TvQEpSm4nh8A2gZV2tqpY%2BoxDQcmv%2FpvuF5iKdJfh%2FWJCtYCxEZ79aTxERQQC0JGwdBUXKxogJglIrdHNQGZ6wxiyHR2Lzzp5DbIMcaWK2P5TCpxTrGTcK99cLaEj2JnC3iX0h7paYnBMtnXh9FK9wt0jCKYJ4T6Yrf4DZJfYv1gqajIJXqg2XmRQ34u0DskWPPrwu5bpE%2BUOB6XqSrdX8kbxAQuBS5jaB%2Bclpxk7h9qr%2F9AXi7wpaFlOGknwoDz67oqoIhyOJdmXctjDyvPbmMYsapB6jQWRWXGY59iS7rW8zYAZorn6lY4UDQ5wG4tAENQEAtmDByhIylmhW%2FwSkyQmsMp1s3uiqAnIb0vZjXykRQ3ljsZAr%2FRa4BUMKa8jr0GOqUB8%2BB6Uy5EV32IWcuxgx%2BilEVHea%2FbgnbloxOihw7OcQ6xCyEuVqbHOQXb%2BBUPPgGjpT6dJKLy5LBRvuS2bu177huFxHvlbF92YbthV4x5%2FCsfOFEzxwS7wgaXx4wtq8isI4jCCebT2dkdsIqIfyH%2BDcrCjckezyQ%2FJaPFsp%2B%2F%2FMZ7cmI4EJno61RB%2BmE7e17ho%2BnGPYdsvzfbUPkp5mQD%2BgcpitEC&X-Amz-Signature=d8a57a02e92f3b008da8d664c1270d0e44fb0497ebcdfa6b5aee950913c3b10e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYBCEGK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIB%2FqEPTmOSqU3EM0y6ygUFQlEJfJXnne%2F3kINffVxHCqAiEAm0jac94MwTmyGXkXULQZ5JYFuKAP3RigYosr8LGUQYMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEYGfGBRqhqhw6tnuSrcA18s9H2YrhyVO43xnkGyNdT3ZsouOJp8fneK%2Fbhwrh3KDXYhZCZqyZ19lUhVtbmG%2BKHwt%2FBFRBZuKm7i%2FJR%2BR4ePFM7wS%2Bg1e5KctKCvb48N2eNqnd3DisVNFVME9aARUoGuQtIbM8WisiRxqcTeShyYzHmNviP%2FTAGaaQ8GwGk%2BgBTO3qkTSufEmNC65ZuUUvf9oVvq9o2FJjenAUSycWt4FpEiZbxG5IsJAGuPS62H%2BiZ7p0QUjDbTMPXlk7B4TvQEpSm4nh8A2gZV2tqpY%2BoxDQcmv%2FpvuF5iKdJfh%2FWJCtYCxEZ79aTxERQQC0JGwdBUXKxogJglIrdHNQGZ6wxiyHR2Lzzp5DbIMcaWK2P5TCpxTrGTcK99cLaEj2JnC3iX0h7paYnBMtnXh9FK9wt0jCKYJ4T6Yrf4DZJfYv1gqajIJXqg2XmRQ34u0DskWPPrwu5bpE%2BUOB6XqSrdX8kbxAQuBS5jaB%2Bclpxk7h9qr%2F9AXi7wpaFlOGknwoDz67oqoIhyOJdmXctjDyvPbmMYsapB6jQWRWXGY59iS7rW8zYAZorn6lY4UDQ5wG4tAENQEAtmDByhIylmhW%2FwSkyQmsMp1s3uiqAnIb0vZjXykRQ3ljsZAr%2FRa4BUMKa8jr0GOqUB8%2BB6Uy5EV32IWcuxgx%2BilEVHea%2FbgnbloxOihw7OcQ6xCyEuVqbHOQXb%2BBUPPgGjpT6dJKLy5LBRvuS2bu177huFxHvlbF92YbthV4x5%2FCsfOFEzxwS7wgaXx4wtq8isI4jCCebT2dkdsIqIfyH%2BDcrCjckezyQ%2FJaPFsp%2B%2F%2FMZ7cmI4EJno61RB%2BmE7e17ho%2BnGPYdsvzfbUPkp5mQD%2BgcpitEC&X-Amz-Signature=71183737f1f2f6db6cc2db89219f3d3d11633979bc44359a3216cffca1186a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
