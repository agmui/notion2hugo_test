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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I23NPP7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCupNiHuTqssL%2FfAYYCNpb1timXbp6VGT2DeRg5nElnvwIgQj5rfLbqIsMmLCYZLg1AfXeLtTBLitunRvd%2BAZEXRuwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQPlQbPEDvpvXPbIyrcA0uws%2BQ8o%2Fvw7Yd55uN0EhzmAk69bjEErCbnvrVlS9p6owdjkM7YvfBwhCH4E4vvNc6Js0gOZz4b8QCaUrwLt1apimjusptPyI1OdurhK1pVL8%2FqnLg1k99XbCeDf67S57rU6Zb65%2BmZmv9OPONVj88RKZowIsxwcNZfdxLOEo4gZJvcgQ9R5aHBOnvDrY7QQJCOGzczNVdPh%2FU6aQS5EOuWr98F6z0nRXTa3TTmxWc%2FBenQR3ZXaMiH45gczO%2Bvzg%2FenwBx5b8BB8zMf%2FkIFLX1k3etWR4Bdz6LSB87dOMpK88roe2vVqFUdHKkse6MyDsqHLWLcuo81BXkV7k7pY8oLtumqbj8LdX%2BuIHQocEqMRx5%2F9D230YC0SiLXnTedaWFjRtjm75YbaJ8Rz0sXrlv0Ww5AQfNbT9zOv6w%2B10hFAQVUyyL2bU6itSR8MLDHdKxeIE%2FY%2F%2BBUIVZeqjJ36GmktLv2Dg9kV0mi4xJ%2FwZ7qUpLU9x5ikZDdrb0lxJ7eECtbvKrPv0UsbKjHLghFAh%2FlOHigmPrvX5XQVaTojejH7yBcIe6P666jbBngqlRfg1o7rQBglF6PUXFgxUc0adGJPVEYgBnRQ2EHNFA7qx7WSOWa1ewnFPoCPzWML38jMAGOqUBeC8mQNbrSycs56OL%2Bt7BJcVzm37ld6BWJDsmPa0AEhwA%2FlPmpPt3kkvsQ5X7VxhMP6I0amlwJ%2BE%2B0dcxu5FXIox3FIae0CS9qLPkESJnR9QJDyWWKagAnRktrRPYVg%2B5lHgaT48GYy8P829H9F%2FCZqf6Bnd1yN8nHiyySq5l%2FfzbFFQD%2FW%2F33O6zj0tly5Iww1PQnBItT5vycmE5pkGJJ9zPP8gK&X-Amz-Signature=f2e8b94b0623342e691485dc74ce06134c09f311a31787db93b19ebd6e2f0291&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I23NPP7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCupNiHuTqssL%2FfAYYCNpb1timXbp6VGT2DeRg5nElnvwIgQj5rfLbqIsMmLCYZLg1AfXeLtTBLitunRvd%2BAZEXRuwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQPlQbPEDvpvXPbIyrcA0uws%2BQ8o%2Fvw7Yd55uN0EhzmAk69bjEErCbnvrVlS9p6owdjkM7YvfBwhCH4E4vvNc6Js0gOZz4b8QCaUrwLt1apimjusptPyI1OdurhK1pVL8%2FqnLg1k99XbCeDf67S57rU6Zb65%2BmZmv9OPONVj88RKZowIsxwcNZfdxLOEo4gZJvcgQ9R5aHBOnvDrY7QQJCOGzczNVdPh%2FU6aQS5EOuWr98F6z0nRXTa3TTmxWc%2FBenQR3ZXaMiH45gczO%2Bvzg%2FenwBx5b8BB8zMf%2FkIFLX1k3etWR4Bdz6LSB87dOMpK88roe2vVqFUdHKkse6MyDsqHLWLcuo81BXkV7k7pY8oLtumqbj8LdX%2BuIHQocEqMRx5%2F9D230YC0SiLXnTedaWFjRtjm75YbaJ8Rz0sXrlv0Ww5AQfNbT9zOv6w%2B10hFAQVUyyL2bU6itSR8MLDHdKxeIE%2FY%2F%2BBUIVZeqjJ36GmktLv2Dg9kV0mi4xJ%2FwZ7qUpLU9x5ikZDdrb0lxJ7eECtbvKrPv0UsbKjHLghFAh%2FlOHigmPrvX5XQVaTojejH7yBcIe6P666jbBngqlRfg1o7rQBglF6PUXFgxUc0adGJPVEYgBnRQ2EHNFA7qx7WSOWa1ewnFPoCPzWML38jMAGOqUBeC8mQNbrSycs56OL%2Bt7BJcVzm37ld6BWJDsmPa0AEhwA%2FlPmpPt3kkvsQ5X7VxhMP6I0amlwJ%2BE%2B0dcxu5FXIox3FIae0CS9qLPkESJnR9QJDyWWKagAnRktrRPYVg%2B5lHgaT48GYy8P829H9F%2FCZqf6Bnd1yN8nHiyySq5l%2FfzbFFQD%2FW%2F33O6zj0tly5Iww1PQnBItT5vycmE5pkGJJ9zPP8gK&X-Amz-Signature=7cf8d54273c016210b5e564e8d2744601510cd1e6ee739bbb72e944a5054f2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
