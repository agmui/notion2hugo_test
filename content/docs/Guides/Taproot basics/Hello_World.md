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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRW2PGL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAh01clR9or0fycc7NhGtAjAKhIQZjrau0y%2BKh2Y%2F%2FMyAiAkbnYoYIPMKTUI1Aab8wciyJ0Gy9zN6PDRmUSaYZ%2Bvtir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMvrJWpp%2Fi1r9O7%2Fe0KtwDarI7iS%2FZ5FG70MAJSHmuDmwE0IdA2kwVSyykGQLW%2FfQk7RG6RvnHTluTRRuAuG5da4k%2FX2v%2FGvgKjJt9BFNmmscNQRq%2BPPy9MjYY%2BgtUs5JXsCYMk1nEgbkxUw4mP6kJuD7g198qRLkBuiFgdRfjDj9UGrvexGz2YRbzjVQhtvDHgAPINkdoA3qNgtVElW2wOsOaldi3J4csRygoEtRO2XdjQ7b81rzr6v8F7GEN5oFkLBOBoYg5RaV0Q4RGtkjGgOUk9bvSedsF%2Fqw1bh3Bq8BaDw%2BmKungnqnL0bAFXXQB70Z658921k2jUGWvT%2BVPMUkPWjwYO7vgXFMtuAlzInsL7MswJxTtbSRA5x0LQght0vsrxHjVrjti00lQGOCrJcSpnC78vu1ygO0dtcpkJftI4eVgK51PCoZOhN6CvbBkLtUEimmiXPHKkPet73m82%2FD%2Fgy5OTh92fmlaLrMN30CgFtPaJ9P7z3bu2ESnKBK3KiIZsr7ccHXeuykyiNcWXim%2B2%2BqwtF04jfSesydnfNOYP1Nuj8jaDI8eCqqJ67PCU7i4l72BFyg1EtPWWQcwVBduyMoWC0h13iy%2FbtGDv9CA2CKHGwMgd7wn6PWsEyposRE3MKsVMXmE1pEwyeSbwwY6pgFVFCjtDZTyJzuqwLXddoYN6t%2FPq7OHY6QgYH5IcprQLXH0TCqa2xuZhlvUcSjkEafVErgHLLDa5ogktaxyICgM3DvUOH%2FT5m2mVxORTffIPbi6Cw6XKiKYs3w4iyaclNWAbr0fHBPXHY38A1WdK%2BSmc1E9PufKZlmI9mcBUyFac2SpP9yiEq47idEs8bGINOeFLRsPglmUVgo3WaYdg5nQcxDoa186&X-Amz-Signature=d512267f8a8f9c33f97037f3e1f8da01f346a5f2ddb4e81050e1be1474c01456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRW2PGL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAh01clR9or0fycc7NhGtAjAKhIQZjrau0y%2BKh2Y%2F%2FMyAiAkbnYoYIPMKTUI1Aab8wciyJ0Gy9zN6PDRmUSaYZ%2Bvtir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMvrJWpp%2Fi1r9O7%2Fe0KtwDarI7iS%2FZ5FG70MAJSHmuDmwE0IdA2kwVSyykGQLW%2FfQk7RG6RvnHTluTRRuAuG5da4k%2FX2v%2FGvgKjJt9BFNmmscNQRq%2BPPy9MjYY%2BgtUs5JXsCYMk1nEgbkxUw4mP6kJuD7g198qRLkBuiFgdRfjDj9UGrvexGz2YRbzjVQhtvDHgAPINkdoA3qNgtVElW2wOsOaldi3J4csRygoEtRO2XdjQ7b81rzr6v8F7GEN5oFkLBOBoYg5RaV0Q4RGtkjGgOUk9bvSedsF%2Fqw1bh3Bq8BaDw%2BmKungnqnL0bAFXXQB70Z658921k2jUGWvT%2BVPMUkPWjwYO7vgXFMtuAlzInsL7MswJxTtbSRA5x0LQght0vsrxHjVrjti00lQGOCrJcSpnC78vu1ygO0dtcpkJftI4eVgK51PCoZOhN6CvbBkLtUEimmiXPHKkPet73m82%2FD%2Fgy5OTh92fmlaLrMN30CgFtPaJ9P7z3bu2ESnKBK3KiIZsr7ccHXeuykyiNcWXim%2B2%2BqwtF04jfSesydnfNOYP1Nuj8jaDI8eCqqJ67PCU7i4l72BFyg1EtPWWQcwVBduyMoWC0h13iy%2FbtGDv9CA2CKHGwMgd7wn6PWsEyposRE3MKsVMXmE1pEwyeSbwwY6pgFVFCjtDZTyJzuqwLXddoYN6t%2FPq7OHY6QgYH5IcprQLXH0TCqa2xuZhlvUcSjkEafVErgHLLDa5ogktaxyICgM3DvUOH%2FT5m2mVxORTffIPbi6Cw6XKiKYs3w4iyaclNWAbr0fHBPXHY38A1WdK%2BSmc1E9PufKZlmI9mcBUyFac2SpP9yiEq47idEs8bGINOeFLRsPglmUVgo3WaYdg5nQcxDoa186&X-Amz-Signature=31667042a3676118dbd2832ede44533215c2156dad175bc30d7065b3f11f8cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
