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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPNGRZA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEP0segDz6RfhnKnMj5cDL5FhmRGGsk%2F6HVyj5zNN9YAiAjADee5hU41P7%2Bv4YljeR0Ih%2FCBpAQH8ypAFLvBxwrCSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMmhQ%2BXkg%2F9tM%2FjsnEKtwDwgqIobHcijXUvNehlnlyJn1klPVmXKGgaz1qtakfQQgWyd4SJu3Mb44iIw6jO9ZfCmnfe8dy1CHHPaOdlNV74HVwl2947oaAMTYxuG8XxlBvOjMbQJh594pGjUNjnPVhiVphvo38ofJZRwua3OymE6WxHfFzElNNiSsMQqNCsnBZ0zCNHC05vSfu34MUfO6S1Cbuxwh2Clo%2BmS92nU4pnALIq9OWVDVglItxvNwu19xNpZjBWI0eBxuPIs2Wi%2BvFFQW1cAwVE3%2BjEIa96uTiM9%2Fba46Gw7iz265b56YSgy1FWiz10A9TyPE%2F9oBpi%2BlqxgKyjwzb5y3rlECag9SGQwwAyb76eGbYKqWNIFxuIGRuPYhfGQ1pA9lixN1LwKJuQmkLyhHlv92nKN%2Fipi1ncd%2BwyghW8ZlCNZPFH2D1TpsSMeGAF6vJxxb63QJq%2FyfdMegYGY6Ap6Jz8hpvPFIg7L7jAdcht9volvkh4iHaS1Is4w9R3%2Fdc2iBEZJC0sgM73NpbJ9gFl%2BVEwX%2FjGCgaqRYGeoQMl5KCz%2FnTceyuUqIaFAUPU1AnTyzqqm15h9YFrDpebXBFWSBVhDyGichnecIEvr3oI19Me9bEHegRLdxTIc8%2F92xJETADK%2F4ws%2B%2BawQY6pgG8Gboyj7DzyBXSOrz7eXNjn%2Bt3%2FY%2B7r%2FDOGMLA8UHoA0Wr45iQcrUFn7nxNb067uMjGeE%2B0%2B7U8ztA3D0aY1OR6vg4zqDKpucL5o08rUpfw1Fq8cjg5%2BX1ZtaDxZQRvXxRFJ%2FCJdbXyEB%2F402LsvngxT6hDUG1dfZJPppURRRcHzY0aRKUGtO4q2mSokTy6YV7iSaiaI530LEWlvUmH24dhDE%2Ban8g&X-Amz-Signature=f8b048d18f6517a4e84d6fd1c470bb6cd3ea604f4777af6080ca3f695ca2bfd4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMPNGRZA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEP0segDz6RfhnKnMj5cDL5FhmRGGsk%2F6HVyj5zNN9YAiAjADee5hU41P7%2Bv4YljeR0Ih%2FCBpAQH8ypAFLvBxwrCSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMmhQ%2BXkg%2F9tM%2FjsnEKtwDwgqIobHcijXUvNehlnlyJn1klPVmXKGgaz1qtakfQQgWyd4SJu3Mb44iIw6jO9ZfCmnfe8dy1CHHPaOdlNV74HVwl2947oaAMTYxuG8XxlBvOjMbQJh594pGjUNjnPVhiVphvo38ofJZRwua3OymE6WxHfFzElNNiSsMQqNCsnBZ0zCNHC05vSfu34MUfO6S1Cbuxwh2Clo%2BmS92nU4pnALIq9OWVDVglItxvNwu19xNpZjBWI0eBxuPIs2Wi%2BvFFQW1cAwVE3%2BjEIa96uTiM9%2Fba46Gw7iz265b56YSgy1FWiz10A9TyPE%2F9oBpi%2BlqxgKyjwzb5y3rlECag9SGQwwAyb76eGbYKqWNIFxuIGRuPYhfGQ1pA9lixN1LwKJuQmkLyhHlv92nKN%2Fipi1ncd%2BwyghW8ZlCNZPFH2D1TpsSMeGAF6vJxxb63QJq%2FyfdMegYGY6Ap6Jz8hpvPFIg7L7jAdcht9volvkh4iHaS1Is4w9R3%2Fdc2iBEZJC0sgM73NpbJ9gFl%2BVEwX%2FjGCgaqRYGeoQMl5KCz%2FnTceyuUqIaFAUPU1AnTyzqqm15h9YFrDpebXBFWSBVhDyGichnecIEvr3oI19Me9bEHegRLdxTIc8%2F92xJETADK%2F4ws%2B%2BawQY6pgG8Gboyj7DzyBXSOrz7eXNjn%2Bt3%2FY%2B7r%2FDOGMLA8UHoA0Wr45iQcrUFn7nxNb067uMjGeE%2B0%2B7U8ztA3D0aY1OR6vg4zqDKpucL5o08rUpfw1Fq8cjg5%2BX1ZtaDxZQRvXxRFJ%2FCJdbXyEB%2F402LsvngxT6hDUG1dfZJPppURRRcHzY0aRKUGtO4q2mSokTy6YV7iSaiaI530LEWlvUmH24dhDE%2Ban8g&X-Amz-Signature=3c8ad46c1b68c56ff33d54a75eade814fdc6bfe1fd022669c9425af7a479add0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
