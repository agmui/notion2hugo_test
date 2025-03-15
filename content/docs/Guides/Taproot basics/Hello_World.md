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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN67ZB3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvcNSJsDAeAiboiU7lqZrH3kXOfwjAO2%2FiH5%2F5eQ%2FWVgIhAOSFLV7yZxB5cy6VAqNNUIi5WL5t38L4Ncrco4oFbUVmKv8DCBAQABoMNjM3NDIzMTgzODA1Igx7OpVQPJm312nRgIwq3AMp5UImIn2NchwlEGZVsaDsTgkBOJP9mmTl3Es7Udr%2FvPGz%2BlNKtWT3ki0gEQhYBwtrbWoSY4HXpKwHs10B3GMkUYRXtKTVgYs3anK1myFzhWu8SKfoj2qo4UPdbBKKH%2Fd3x%2B0V4hFe3bN2lnbyiYrblcoY2nFbJl6l7zL60pH9rhrfuU3AU68O18webCvEvTqua61kHyZl50pLYBmvQjV%2BeLaSA0hRLrmSf1zbmOWicvVouSJV%2BkFpYW7eNI9ziA7wjL6u83Mw9kLJVwomSkksELq2zCNxt3MQp9q9jO%2FqX6XBvczWQ50MPapWaqatPFQGHkZpNnCX02Tu1vmHbTw5Ye4idBFkZ5e9z%2BUC26wCNtzgRZDBpwjLia4faWqTjrjByE2PY1t4M3S05cQlNwlvJt31Zmggr8HpXeR0ATcf9bw7GUksF6Hypkn8zwf%2BZ19Ilnzhf6x72rPJdlaPb4Pwf%2BDzACQGDhe2X70YM5CZEB87QFMu64NlseRih3rnyDVs%2FIPOWnkbrhUroXDhPqT%2FFcR1UTUjb9xzcOc%2BYniuDi46zUea7cVc%2B7FGP82gv%2F%2BFpxc%2FmxxRi8p3GfQ7suOzbrQdZ5Q3gf4oCnu8vvMPuxXwXyolQrTyB%2FYDQTDVxNS%2BBjqkAe16Aal%2FnsftBDo0iW4VqNVdRLMmlaygLyxmDalpNg%2F%2BJA6NjYFzYOIIIh7DaioROXp2uO0RmMXHiwyP%2FvQIa0AQyZW4gzFrR5JrSb%2FXnVViMYu71T8yUB8%2FQSCGfH1%2FW7I3d54EuhDTgW8wo3PtAbVPfvlzFjsOc5TiuSxO%2B%2B8J9UBUXQlUlHXXTtqrd8u71lM%2Ftbdw3e7CC7aGd50t6Ds9CePc&X-Amz-Signature=9343ab9b05700139f614d0459f74d452786e0fcb24a51f0a195be422f11c4718&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN67ZB3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvcNSJsDAeAiboiU7lqZrH3kXOfwjAO2%2FiH5%2F5eQ%2FWVgIhAOSFLV7yZxB5cy6VAqNNUIi5WL5t38L4Ncrco4oFbUVmKv8DCBAQABoMNjM3NDIzMTgzODA1Igx7OpVQPJm312nRgIwq3AMp5UImIn2NchwlEGZVsaDsTgkBOJP9mmTl3Es7Udr%2FvPGz%2BlNKtWT3ki0gEQhYBwtrbWoSY4HXpKwHs10B3GMkUYRXtKTVgYs3anK1myFzhWu8SKfoj2qo4UPdbBKKH%2Fd3x%2B0V4hFe3bN2lnbyiYrblcoY2nFbJl6l7zL60pH9rhrfuU3AU68O18webCvEvTqua61kHyZl50pLYBmvQjV%2BeLaSA0hRLrmSf1zbmOWicvVouSJV%2BkFpYW7eNI9ziA7wjL6u83Mw9kLJVwomSkksELq2zCNxt3MQp9q9jO%2FqX6XBvczWQ50MPapWaqatPFQGHkZpNnCX02Tu1vmHbTw5Ye4idBFkZ5e9z%2BUC26wCNtzgRZDBpwjLia4faWqTjrjByE2PY1t4M3S05cQlNwlvJt31Zmggr8HpXeR0ATcf9bw7GUksF6Hypkn8zwf%2BZ19Ilnzhf6x72rPJdlaPb4Pwf%2BDzACQGDhe2X70YM5CZEB87QFMu64NlseRih3rnyDVs%2FIPOWnkbrhUroXDhPqT%2FFcR1UTUjb9xzcOc%2BYniuDi46zUea7cVc%2B7FGP82gv%2F%2BFpxc%2FmxxRi8p3GfQ7suOzbrQdZ5Q3gf4oCnu8vvMPuxXwXyolQrTyB%2FYDQTDVxNS%2BBjqkAe16Aal%2FnsftBDo0iW4VqNVdRLMmlaygLyxmDalpNg%2F%2BJA6NjYFzYOIIIh7DaioROXp2uO0RmMXHiwyP%2FvQIa0AQyZW4gzFrR5JrSb%2FXnVViMYu71T8yUB8%2FQSCGfH1%2FW7I3d54EuhDTgW8wo3PtAbVPfvlzFjsOc5TiuSxO%2B%2B8J9UBUXQlUlHXXTtqrd8u71lM%2Ftbdw3e7CC7aGd50t6Ds9CePc&X-Amz-Signature=111c642e9146f8b4e1d2b0618a1908bfb802ee3cc9e5e5f2146fcdb4985f7c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
