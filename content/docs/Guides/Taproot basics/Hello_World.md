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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDTBVLP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCrmq9WeLzaT7HxTTHqDxEQa6N%2FobntbP7KWUoAXMPV5QIhAM8AMIVdBFJHBqzk4BBQuDSjyxZLHJTNFBBwdpiv1KiFKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXRkgZjAlZpftd3pYq3AMGIPzVSJzrOby0Q%2BQABMfUsJB5OLdLp7PGHz1mb%2FAFUACXafZM85QjOOZxEwvlBN6aX0JcTxOQTNHNSG2EsWGOHuQfFjGoQ2y6WHn0RAAz0WO1ymP82rmRDtGGymPx01JchaRhc0BeoRPsw2K9MvukvSHSxDZMzcJb7c%2B3mzCDSuhncCN0KY6NC%2ByYx4IISRfuOQ%2F%2FR708SVxw7QsFrHdEHa7qn4xVqDomHh5%2FEUww%2FoYI6bUI8l3lGef15%2B4impE0eiuRycA8egdkLUAgZhaYLiHCJlSQnMcOnFKr9lAbvOs6BRmnQGZfr4%2FvxWDGOMq4YRBeKAukJNjKKXcnoE5e5okRIxoq4AJ0%2Fw3mlGicFKKuyO59AF%2FHbKqBMgaLl7T3S5s%2FJdmcT7zEVGetHUqstdWR%2BA8uQNh9NGjAlcJktkZQUAryFenu63YIM8SmVRe8Jnr3whdg1Chwp5Heiub0jZKsYoDUud8k6TwLKaf%2FzCGU5mps9oFVd%2B4wa3PsL14Cd90LuNqoPHUNIdlLHVCrkbM0fFCy5PcXxNz4sgTUdh1raEQZxHyv1i3Xg0nhbuooL2L%2B1%2FBlOEjmxdjGmjOMUMwemip2fpc5097mfAICwSqR12yWpGIUf7eoBDCa8%2F6%2BBjqkAS6LgqMK27GJxvW3k%2Fv3NKO2wLxMyAc3I%2B%2FWd8kEcitCUCB6BOBG83W7gTKvYafW2JZM2Sf5b4fjUPgir5Qh19%2FcaMu%2FsgDg5ahVjWozUhA5vZxK2cRtAEeBIR3NJGxzyzREWJmvPgC9sQoEZAMp8MG4lu4uomwNCmREi5vwZ130csf3r3dvZym6OLLsY60cGTlvC5EdbVfqGEGAQm62jp5ryXbU&X-Amz-Signature=c2b204a92a6de35cc1a3c4585238571913a82016fe1ae103ad45682260f19ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDTBVLP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCrmq9WeLzaT7HxTTHqDxEQa6N%2FobntbP7KWUoAXMPV5QIhAM8AMIVdBFJHBqzk4BBQuDSjyxZLHJTNFBBwdpiv1KiFKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXRkgZjAlZpftd3pYq3AMGIPzVSJzrOby0Q%2BQABMfUsJB5OLdLp7PGHz1mb%2FAFUACXafZM85QjOOZxEwvlBN6aX0JcTxOQTNHNSG2EsWGOHuQfFjGoQ2y6WHn0RAAz0WO1ymP82rmRDtGGymPx01JchaRhc0BeoRPsw2K9MvukvSHSxDZMzcJb7c%2B3mzCDSuhncCN0KY6NC%2ByYx4IISRfuOQ%2F%2FR708SVxw7QsFrHdEHa7qn4xVqDomHh5%2FEUww%2FoYI6bUI8l3lGef15%2B4impE0eiuRycA8egdkLUAgZhaYLiHCJlSQnMcOnFKr9lAbvOs6BRmnQGZfr4%2FvxWDGOMq4YRBeKAukJNjKKXcnoE5e5okRIxoq4AJ0%2Fw3mlGicFKKuyO59AF%2FHbKqBMgaLl7T3S5s%2FJdmcT7zEVGetHUqstdWR%2BA8uQNh9NGjAlcJktkZQUAryFenu63YIM8SmVRe8Jnr3whdg1Chwp5Heiub0jZKsYoDUud8k6TwLKaf%2FzCGU5mps9oFVd%2B4wa3PsL14Cd90LuNqoPHUNIdlLHVCrkbM0fFCy5PcXxNz4sgTUdh1raEQZxHyv1i3Xg0nhbuooL2L%2B1%2FBlOEjmxdjGmjOMUMwemip2fpc5097mfAICwSqR12yWpGIUf7eoBDCa8%2F6%2BBjqkAS6LgqMK27GJxvW3k%2Fv3NKO2wLxMyAc3I%2B%2FWd8kEcitCUCB6BOBG83W7gTKvYafW2JZM2Sf5b4fjUPgir5Qh19%2FcaMu%2FsgDg5ahVjWozUhA5vZxK2cRtAEeBIR3NJGxzyzREWJmvPgC9sQoEZAMp8MG4lu4uomwNCmREi5vwZ130csf3r3dvZym6OLLsY60cGTlvC5EdbVfqGEGAQm62jp5ryXbU&X-Amz-Signature=724d540d52e1fb3ce1bcae50f6ae64165735cad8ae55c1cc216d9f7dc6edfccb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
