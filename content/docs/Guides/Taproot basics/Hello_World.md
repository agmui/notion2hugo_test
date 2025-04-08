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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITMKXD6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDw%2BdTfYa8B85jcpFP%2FMtQq7Kpfpfz%2FeqfTmw283m%2B3vQIgRhhYals6vEqV7j9PoAkkBjmRLbuNnhvPvKqH6hSeiXoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCrdChOYINmhLNoClircA022pestoNtcjZyeXg3uG0NxtxrP9hLhlDrDmGMIt%2BoLv3t2l3CCRaARxJDa8c9%2BF8N%2FU08tLmjEH8NUACPKhl0bQoj5HhwL6dtO6ExBdHjy9Mk10s7%2Boc0S%2FVWttJHrYRgXZJT4C3twDAxHS6rHKWoIq%2FAGUvXBQwnAbrF31lYGa31XJAldrnsE6jzL6rdc5dvw%2Fut2NjGwFcR%2F%2Bo9OFXMBaQoB6NbAl08irdo%2BEal65xVh7yr0ynIODoksRrmqUQC6V6T669mHVZeVq9BzcRIFEmq08EsYo6ewYzmSAZkcP7hwPNv1IKzs6PJRrKEPhjxuxk%2B8cBL33FaZsuKSOPD4bgfy8K7mimAYgsRt0lwgvKnd%2BQ6QgmejBhnFRuLww7fEHkw6O6TCJ5S3ZTNaEKoV0JJmhk06AYj1dpicUU%2BmalOG39w8Gid3d17qvWaIpYegWEXw%2BftwO%2F24dwZL0NAR0ui%2F5DU7bRA63UXkE5L5Fkc9zBOk8ijNXB5GvCCVHd4AlfvkGdhfDz43%2FmZ5leuJfbs8Q9LOfQfN0OtaG8eq3Vs4yu1bvoyefGcqAX8CCexn8R1vTWe4T24W%2BrQl3hO00HyXglcfEjo9k1feDRcokOhHsRB5fm1iCAiJMMrB1r8GOqUBgX%2F8F7QRIw3GeoI3ezh0tvGhrUSFmysnblC2pX5oJMj3hrZEcI8fo6g1leE42W7eGRoXFiQqcPSTmmnjJy9XdG0OzSylcKIPj7lFCepQUv3cP0mZmHig4r3gblD3Aq1O3MgQ6QnIJq6fWxd1GOKJsephpTfs1R2P7wqD%2BRwCrape6TfUZmRuzXQ3nlxw5ExObZQ90byvw3kwm7eRirOMfMjTM4Oy&X-Amz-Signature=7a3a5a52559b5a7f1caee2f840cf4928e6c3b455ce2125e810b422122004fe7d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITMKXD6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDw%2BdTfYa8B85jcpFP%2FMtQq7Kpfpfz%2FeqfTmw283m%2B3vQIgRhhYals6vEqV7j9PoAkkBjmRLbuNnhvPvKqH6hSeiXoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCrdChOYINmhLNoClircA022pestoNtcjZyeXg3uG0NxtxrP9hLhlDrDmGMIt%2BoLv3t2l3CCRaARxJDa8c9%2BF8N%2FU08tLmjEH8NUACPKhl0bQoj5HhwL6dtO6ExBdHjy9Mk10s7%2Boc0S%2FVWttJHrYRgXZJT4C3twDAxHS6rHKWoIq%2FAGUvXBQwnAbrF31lYGa31XJAldrnsE6jzL6rdc5dvw%2Fut2NjGwFcR%2F%2Bo9OFXMBaQoB6NbAl08irdo%2BEal65xVh7yr0ynIODoksRrmqUQC6V6T669mHVZeVq9BzcRIFEmq08EsYo6ewYzmSAZkcP7hwPNv1IKzs6PJRrKEPhjxuxk%2B8cBL33FaZsuKSOPD4bgfy8K7mimAYgsRt0lwgvKnd%2BQ6QgmejBhnFRuLww7fEHkw6O6TCJ5S3ZTNaEKoV0JJmhk06AYj1dpicUU%2BmalOG39w8Gid3d17qvWaIpYegWEXw%2BftwO%2F24dwZL0NAR0ui%2F5DU7bRA63UXkE5L5Fkc9zBOk8ijNXB5GvCCVHd4AlfvkGdhfDz43%2FmZ5leuJfbs8Q9LOfQfN0OtaG8eq3Vs4yu1bvoyefGcqAX8CCexn8R1vTWe4T24W%2BrQl3hO00HyXglcfEjo9k1feDRcokOhHsRB5fm1iCAiJMMrB1r8GOqUBgX%2F8F7QRIw3GeoI3ezh0tvGhrUSFmysnblC2pX5oJMj3hrZEcI8fo6g1leE42W7eGRoXFiQqcPSTmmnjJy9XdG0OzSylcKIPj7lFCepQUv3cP0mZmHig4r3gblD3Aq1O3MgQ6QnIJq6fWxd1GOKJsephpTfs1R2P7wqD%2BRwCrape6TfUZmRuzXQ3nlxw5ExObZQ90byvw3kwm7eRirOMfMjTM4Oy&X-Amz-Signature=4772f5854e9834f2641bdf8905a4e68a93bf51f80c4e246350fbbc1928dbe358&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
