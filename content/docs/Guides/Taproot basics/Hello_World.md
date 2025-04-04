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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z67H6KB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1tbq56yfGMtnYorF2eELWneG%2FrlgiGJoJQInSsXsQEAIhAIBOl5gxsHTFdK%2BCAivEMluJslzcpnGmU6vtTfFAxm4yKv8DCBIQABoMNjM3NDIzMTgzODA1Igw7tapklpmVDIftDLIq3AOlS56jUUEzF3aSRw2%2BnYUuED27Gp3%2FefYh%2F3%2FPpP%2BkuqlT%2FRyh2%2BhbVJ%2FBKXXb474nTireHp8kClpcSmPuqzUqe9InyfeP4E19CLOwvspbY7Rf1n%2F5cKSwzvD6DqWGHjCLvN0P%2BIjIkz4Ybste%2FCXXs1pzTOXQxwl%2B1SEiyLoHZa579A5HPYrwHseqaRd6oCjr9L722fnI6Ayieco2%2FTUeWENsaL3lawLR4lSh9tED6xU46nD6HuQZBjR5jDhKZeRjrTknw%2BKYF206frF99fqVvJJdecszskrBOOIsh7VG6W0UxQV3g%2Bp4fP6J%2BB%2FG2mM6F0%2FD6ZfyEMabOHyUE6g6LnhS72rK4wSghS6AgaTLzkH5dExnJ72Veq94PQmEIoOq%2BR2IA4EvZQzMxQ70YxMNBCuhq3THwpSsX6rzrJ2%2Fk7VDvbDuyUitCDkP2LftbqwiZ2x1%2BrH41thHQwc%2BVah3Lo%2BXBVrg7UneHs3hwz3X7E2I8e9pRDCqLIZS9Jd%2FGhu8bpuBoAI4S6jameAr%2B8Jur2hPNYybvvZUhhXrvOHXooZ1CuxACuzvg5bHwedMes8pfeg4iNF7midOTskO7cmvcRf6uHx%2B3xG23ITZc9bo4r85ntLG2d9FsdTBIzDdsr6%2FBjqkARKTzjlIvXfxcLsAHhS357N8ZMbk8UtGgE7lKIHCnSSbqy9j6qD%2BViChdMn1EbT50LDKdg37q5qd%2BUYuqmXks8qmOZrpuv30mTNKqzPRQQRwESyXI4slRInTzQyEEwP7fhY3AWJtPO0JE86mE3Ius1EAHev%2FF6GbOiUCdRmXDfFhwmoxDQMqfacx3yS5UKu5LWyO8%2BoMuq95igekBsA4kw2gzFc%2B&X-Amz-Signature=f860c60da975ee9c2f62890fb522ddbd84d65d24870dbe4c4bdbe55f42d7e32f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z67H6KB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1tbq56yfGMtnYorF2eELWneG%2FrlgiGJoJQInSsXsQEAIhAIBOl5gxsHTFdK%2BCAivEMluJslzcpnGmU6vtTfFAxm4yKv8DCBIQABoMNjM3NDIzMTgzODA1Igw7tapklpmVDIftDLIq3AOlS56jUUEzF3aSRw2%2BnYUuED27Gp3%2FefYh%2F3%2FPpP%2BkuqlT%2FRyh2%2BhbVJ%2FBKXXb474nTireHp8kClpcSmPuqzUqe9InyfeP4E19CLOwvspbY7Rf1n%2F5cKSwzvD6DqWGHjCLvN0P%2BIjIkz4Ybste%2FCXXs1pzTOXQxwl%2B1SEiyLoHZa579A5HPYrwHseqaRd6oCjr9L722fnI6Ayieco2%2FTUeWENsaL3lawLR4lSh9tED6xU46nD6HuQZBjR5jDhKZeRjrTknw%2BKYF206frF99fqVvJJdecszskrBOOIsh7VG6W0UxQV3g%2Bp4fP6J%2BB%2FG2mM6F0%2FD6ZfyEMabOHyUE6g6LnhS72rK4wSghS6AgaTLzkH5dExnJ72Veq94PQmEIoOq%2BR2IA4EvZQzMxQ70YxMNBCuhq3THwpSsX6rzrJ2%2Fk7VDvbDuyUitCDkP2LftbqwiZ2x1%2BrH41thHQwc%2BVah3Lo%2BXBVrg7UneHs3hwz3X7E2I8e9pRDCqLIZS9Jd%2FGhu8bpuBoAI4S6jameAr%2B8Jur2hPNYybvvZUhhXrvOHXooZ1CuxACuzvg5bHwedMes8pfeg4iNF7midOTskO7cmvcRf6uHx%2B3xG23ITZc9bo4r85ntLG2d9FsdTBIzDdsr6%2FBjqkARKTzjlIvXfxcLsAHhS357N8ZMbk8UtGgE7lKIHCnSSbqy9j6qD%2BViChdMn1EbT50LDKdg37q5qd%2BUYuqmXks8qmOZrpuv30mTNKqzPRQQRwESyXI4slRInTzQyEEwP7fhY3AWJtPO0JE86mE3Ius1EAHev%2FF6GbOiUCdRmXDfFhwmoxDQMqfacx3yS5UKu5LWyO8%2BoMuq95igekBsA4kw2gzFc%2B&X-Amz-Signature=c466280f75c7b286918eda397678a70d674de5fb329f8273bb6dd67cfeac51f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
