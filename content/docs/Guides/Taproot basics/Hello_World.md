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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYKEBTO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDM7th7PL%2BOdUf%2BYvs3Owquwp0f4Ab8%2FktXQAlESh1HEAiBg9majz3yPSXPNW8w0lja0nDR%2BzfVbXBfqOPblWe9loCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BPFmq%2F4e6dwMPwXKtwDKTlK9zRNNP1%2FhIAwb%2FgRO%2Fu0bmtIkKiORhqhJN%2BdPonhmaeBWGrByk0fYEjzhmIg7dUL05yA4yW4D1sqxZoFgPKsQywXhL19sV5%2B4WLHsfd0nJbh9VGOPxmtH2IYl0mv4rAm4m5Mw9CaQuRrrwd0gac0Ez1OjNQkxbFD8foSmSO4upDvk4SkzXZDoaWvMyqtl6tbZzqqa3Mmdi9rsaATttrJuHnpPZqW8Yzp9%2BJbrzcIBSZpfvdnxqz9bJIT52UgV3P7V5l3viPKM5kC8BVODYZQNleZYsBujsnDvTJlYTSs4nPqfMiTaDbztPnoxWOPUK75%2BflktM6lf4N%2FkdGOtkBK6ZLl7xqY9ACax%2F71yUPkFQIYtNQN1CyTV6j6ENsTRwlHom4uwnf0eyvSvIadcDSjPZ9bCjwTRJsnvlypdlcQmrGIgJ0sBBJkT8QiY2GWQG029mEhycpRSKPSrFmlGxaHazWO1zf5qXmhHWxOzoInDpnaHAPc3TFQbSVVxX%2BytOR%2Bx0YKkDhQNPgfPDB1pB31BaZKQF6kSaZ3pIwmCjsbj4N08xzv3Dh940QDgF%2BMZyMB14FApxltiOVPPgTWLBOB1iYgk0oLy6dQ%2F%2F3LKBGjX7WMjjj%2B1m9xGlgw5LHjvwY6pgGcHdL3mK2RVoDa%2FYUl2%2FT9pEWOZSyYVYJMSn3Y1fyu0vwBjcMOBQl1mbtJDjz1ytu%2BIFZ5KQFCOb7aC1a87Id661G7%2Fr55%2BsXh64jJiJjjXKWEyB%2B9L8P3vxNt8xTc8LvGbFfEvQOH24mxCGtDDL2frJ3STDaNufZyCQdoRbek94bKDv3fx2VRI7ovFZsCPmVYT9sMhrIJJaQ7EPwhJY71bmzNRzxP&X-Amz-Signature=717b6386b4245a266cbeb74772aaf32fd8bbd99ea0b33bb720f4b837e726c1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYKEBTO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDM7th7PL%2BOdUf%2BYvs3Owquwp0f4Ab8%2FktXQAlESh1HEAiBg9majz3yPSXPNW8w0lja0nDR%2BzfVbXBfqOPblWe9loCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BPFmq%2F4e6dwMPwXKtwDKTlK9zRNNP1%2FhIAwb%2FgRO%2Fu0bmtIkKiORhqhJN%2BdPonhmaeBWGrByk0fYEjzhmIg7dUL05yA4yW4D1sqxZoFgPKsQywXhL19sV5%2B4WLHsfd0nJbh9VGOPxmtH2IYl0mv4rAm4m5Mw9CaQuRrrwd0gac0Ez1OjNQkxbFD8foSmSO4upDvk4SkzXZDoaWvMyqtl6tbZzqqa3Mmdi9rsaATttrJuHnpPZqW8Yzp9%2BJbrzcIBSZpfvdnxqz9bJIT52UgV3P7V5l3viPKM5kC8BVODYZQNleZYsBujsnDvTJlYTSs4nPqfMiTaDbztPnoxWOPUK75%2BflktM6lf4N%2FkdGOtkBK6ZLl7xqY9ACax%2F71yUPkFQIYtNQN1CyTV6j6ENsTRwlHom4uwnf0eyvSvIadcDSjPZ9bCjwTRJsnvlypdlcQmrGIgJ0sBBJkT8QiY2GWQG029mEhycpRSKPSrFmlGxaHazWO1zf5qXmhHWxOzoInDpnaHAPc3TFQbSVVxX%2BytOR%2Bx0YKkDhQNPgfPDB1pB31BaZKQF6kSaZ3pIwmCjsbj4N08xzv3Dh940QDgF%2BMZyMB14FApxltiOVPPgTWLBOB1iYgk0oLy6dQ%2F%2F3LKBGjX7WMjjj%2B1m9xGlgw5LHjvwY6pgGcHdL3mK2RVoDa%2FYUl2%2FT9pEWOZSyYVYJMSn3Y1fyu0vwBjcMOBQl1mbtJDjz1ytu%2BIFZ5KQFCOb7aC1a87Id661G7%2Fr55%2BsXh64jJiJjjXKWEyB%2B9L8P3vxNt8xTc8LvGbFfEvQOH24mxCGtDDL2frJ3STDaNufZyCQdoRbek94bKDv3fx2VRI7ovFZsCPmVYT9sMhrIJJaQ7EPwhJY71bmzNRzxP&X-Amz-Signature=0a0dee3a56304c408527b7f8bd22f6448f3c149328d0d378b3476fec7ac27528&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
