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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GKS5MI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdN7vtuRbX5C8w%2FXT6ARPwwMWKZFRnVC%2FiqB%2Fl74OrGQIhAOv39dOZKHx6Il5Jt2UaktZrMhsxbgWs7BCZPHAa4N4%2FKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0M1UkAL%2BYRuwbF98q3APNnCKZPnQ%2B2QzIsEsMCu6E7efgk%2F0jU8wGVHnVBFL%2FJC1SkLb7Yx9wcWerg%2FN%2BNc6YfSymV4vplLSFg2Vv0phlonYF9Gah%2F24JVx4BOZdX%2Fyf%2FOalAbZuxyFMQikZSCJHfXTIPRSg0rAnRAGmR5z%2F%2F%2Ba55VmGMtm3%2Fjm3Ec%2BlB8aB1gpI141u7xyZWiotrIyX%2FI9V91WHVSnLawxDnxUR3DXhYvkULdGvSbVKtN%2Fa%2BMzaKAJLfB3KYUEFIwpPwV5b92OkodbhA5mEbS31StrJJ%2Ft7MxtA4c%2Fnj9xEW%2Fbdd2pKl35CM6Co3RpIuo5l2we%2FqkvkUg%2BjUNksWmZTLnGFt91zOwfRUMR5tt3knxUcn7UhUc4lrbYtZs7OMAOJO25XaT706X1heDG7yty9t%2Fi4Sk45Gn6zOpNYmPP733GPb5TM3%2FlbYLiYUcRQ27fBSvruSAb%2Bx3rziftmmZMTiNkAWhf9GEy%2Bh7VUfMGeUZOMg8X0GnuX9weuByvGUEo%2BZ2i3XkqPqzWmRvddHDzP5lm7ftU83eEd%2Bxtw%2BTocCJhtkNO8Uu%2BigSiQX2ZN1VeUSl6JpBnAWHUbgav7EWeOCbNkrwN%2FtlAAtkecNTRTo7QkN3HQ0Kn5a8f%2BYJui0azDY7qy9BjqkAakl5MPfvtbAP25B1%2FzDFMpt1n35M1M1AlIlpV73pMddUIeo7uaaqU5PSPs1FdpXm6gR%2BLd1uDDfCmcSwdivAm5J5qjEPBPJLT4H60PGjqFwL%2BJHD9HKvazXZq9Z0Fnjvz%2Bni4Ed4iRDTLD4vheR9kFw4wY5qdxMxYwh2vbyvay1DsaUTRH2A3y%2BAJ5kBYMTqyOnxIWlNGicv2uM%2FYjmiKvv4JBR&X-Amz-Signature=2d0d3b9d1ed7dc5bbc466e3c8bef0df0f02441eb825a07afd39b54869caa2f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653GKS5MI%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdN7vtuRbX5C8w%2FXT6ARPwwMWKZFRnVC%2FiqB%2Fl74OrGQIhAOv39dOZKHx6Il5Jt2UaktZrMhsxbgWs7BCZPHAa4N4%2FKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0M1UkAL%2BYRuwbF98q3APNnCKZPnQ%2B2QzIsEsMCu6E7efgk%2F0jU8wGVHnVBFL%2FJC1SkLb7Yx9wcWerg%2FN%2BNc6YfSymV4vplLSFg2Vv0phlonYF9Gah%2F24JVx4BOZdX%2Fyf%2FOalAbZuxyFMQikZSCJHfXTIPRSg0rAnRAGmR5z%2F%2F%2Ba55VmGMtm3%2Fjm3Ec%2BlB8aB1gpI141u7xyZWiotrIyX%2FI9V91WHVSnLawxDnxUR3DXhYvkULdGvSbVKtN%2Fa%2BMzaKAJLfB3KYUEFIwpPwV5b92OkodbhA5mEbS31StrJJ%2Ft7MxtA4c%2Fnj9xEW%2Fbdd2pKl35CM6Co3RpIuo5l2we%2FqkvkUg%2BjUNksWmZTLnGFt91zOwfRUMR5tt3knxUcn7UhUc4lrbYtZs7OMAOJO25XaT706X1heDG7yty9t%2Fi4Sk45Gn6zOpNYmPP733GPb5TM3%2FlbYLiYUcRQ27fBSvruSAb%2Bx3rziftmmZMTiNkAWhf9GEy%2Bh7VUfMGeUZOMg8X0GnuX9weuByvGUEo%2BZ2i3XkqPqzWmRvddHDzP5lm7ftU83eEd%2Bxtw%2BTocCJhtkNO8Uu%2BigSiQX2ZN1VeUSl6JpBnAWHUbgav7EWeOCbNkrwN%2FtlAAtkecNTRTo7QkN3HQ0Kn5a8f%2BYJui0azDY7qy9BjqkAakl5MPfvtbAP25B1%2FzDFMpt1n35M1M1AlIlpV73pMddUIeo7uaaqU5PSPs1FdpXm6gR%2BLd1uDDfCmcSwdivAm5J5qjEPBPJLT4H60PGjqFwL%2BJHD9HKvazXZq9Z0Fnjvz%2Bni4Ed4iRDTLD4vheR9kFw4wY5qdxMxYwh2vbyvay1DsaUTRH2A3y%2BAJ5kBYMTqyOnxIWlNGicv2uM%2FYjmiKvv4JBR&X-Amz-Signature=342c3def214ea92ba00c2b0efa0425a6325e5aaa29a3e6cc79ac79141f5f8940&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
