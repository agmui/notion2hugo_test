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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMD47QW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICMuMCF9ltq3LPq8jhTlju1kQP4ak3nVD9uHBuZR7%2BvPAiBl3diJC04xw7iMRegIufDdQBk3OzZDyobAEW9eQGIOWir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMn%2BehFp9ub3SiCf%2F6KtwDt5uiLTeGTcuOYuLGMd0mrN0GjRTP8a8iOxs9RTssYd%2BFXDRGVYr5kRYRNeYIsjh33Gki9Nja4t012WG0ilGZvWOx1IsMiv19Ai3O%2BSW5isEuvY4x%2BOLw6t45OVi0QiKAqyPaFFteJNhdauiOoR3H3mMA8KHge4IhzCfGGb1A7c9OZKvpt%2BBu63eIzzAeHE0ue5H8sQglpU%2BExKPQ7PVH8EVzDqVYyxw8XccifekrB%2BiLl1QZN%2Bz07nDwfERKR854XVP%2Bf5bnA7ohXApunIs2gpaYk7V%2BthOZ%2FzPFPWdBg3ABTqVvIkrELldDuH1W8YyL%2BocJ9BV0BPyWWYIRsBWFF4Eyb5c9oOwhefc4DQRrzVgW7KXF72tZ%2B%2FIW7wWE6d9I1asjkSWada666%2FBDu0ZgzzveQvW09Ju%2FPurVPLRAQPX9PH0uVDrGu5jBPyWSivWCLJI0Do50b4r8ZSNM2%2BcFjyTFLbIDAL%2FPWIO%2FaQzEUQTsB1%2F%2FaaLgyBtgBWgk2CvG9D%2F9nGdnRuoV%2FXhgE27bRKBVQ%2BKWFgItpjeueLJchsejGTmvRA89MS1F55R3lPCxqHoqcBkRgxq2C5yZJPLoOiRPZa8zlzWoIq3OTE1PzjhNjpgabLfQYkGFYgEwi66CwgY6pgHlbIw9l1qGTJXWlIplIHkypXDNi1jaUgdThjAvYkJ1kCiRWbw0Vv%2BGMi%2FR5%2FS524RwGVyuyk6comUkyTNvS064B%2BFbOB3u1HTmUw1D9xFJjpjoTbpZGGxfdPrWb2ywsiSMvx8O2qWdDQHrDXegzPQTGGJoo4O26vDuIWwElQkhbBPd8pEI8lbQu2UgDmxSzqUYB1P5mY%2B5a27%2BommZP3So4FZ2GftA&X-Amz-Signature=43522175e1ac383d7bc90532bf73ba97a9df3a1d9e9c32f7f64d282ea2bc2f51&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMD47QW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICMuMCF9ltq3LPq8jhTlju1kQP4ak3nVD9uHBuZR7%2BvPAiBl3diJC04xw7iMRegIufDdQBk3OzZDyobAEW9eQGIOWir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMn%2BehFp9ub3SiCf%2F6KtwDt5uiLTeGTcuOYuLGMd0mrN0GjRTP8a8iOxs9RTssYd%2BFXDRGVYr5kRYRNeYIsjh33Gki9Nja4t012WG0ilGZvWOx1IsMiv19Ai3O%2BSW5isEuvY4x%2BOLw6t45OVi0QiKAqyPaFFteJNhdauiOoR3H3mMA8KHge4IhzCfGGb1A7c9OZKvpt%2BBu63eIzzAeHE0ue5H8sQglpU%2BExKPQ7PVH8EVzDqVYyxw8XccifekrB%2BiLl1QZN%2Bz07nDwfERKR854XVP%2Bf5bnA7ohXApunIs2gpaYk7V%2BthOZ%2FzPFPWdBg3ABTqVvIkrELldDuH1W8YyL%2BocJ9BV0BPyWWYIRsBWFF4Eyb5c9oOwhefc4DQRrzVgW7KXF72tZ%2B%2FIW7wWE6d9I1asjkSWada666%2FBDu0ZgzzveQvW09Ju%2FPurVPLRAQPX9PH0uVDrGu5jBPyWSivWCLJI0Do50b4r8ZSNM2%2BcFjyTFLbIDAL%2FPWIO%2FaQzEUQTsB1%2F%2FaaLgyBtgBWgk2CvG9D%2F9nGdnRuoV%2FXhgE27bRKBVQ%2BKWFgItpjeueLJchsejGTmvRA89MS1F55R3lPCxqHoqcBkRgxq2C5yZJPLoOiRPZa8zlzWoIq3OTE1PzjhNjpgabLfQYkGFYgEwi66CwgY6pgHlbIw9l1qGTJXWlIplIHkypXDNi1jaUgdThjAvYkJ1kCiRWbw0Vv%2BGMi%2FR5%2FS524RwGVyuyk6comUkyTNvS064B%2BFbOB3u1HTmUw1D9xFJjpjoTbpZGGxfdPrWb2ywsiSMvx8O2qWdDQHrDXegzPQTGGJoo4O26vDuIWwElQkhbBPd8pEI8lbQu2UgDmxSzqUYB1P5mY%2B5a27%2BommZP3So4FZ2GftA&X-Amz-Signature=e1bce6b21892acfea776310893b55acdeadd8b1af3f15cfd72da8bc8bba326e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
