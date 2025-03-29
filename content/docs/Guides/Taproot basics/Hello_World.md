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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HCANJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDgabdZEeuNTE1GjqcqRKawNLAYEkp4k%2BiKjExUDWgiBAIhANbFilsH1Ecp00q8cr%2FV3JS0jPWsGFpCXYK4po9gUct%2FKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHvyLNHl1%2FvX%2FrAEQq3AOnljh21TJIwLPax0WC686wV%2FIxUW59XanzUR60Mt0RLruDXOGyWUUjKoN9bcMU6VxTQcqnZGmsSxuHlwUUWQxqXcaJr6bxUItk201V7RAr%2BHR0uAjkROfs6mq3fk99OpV9R%2FBR2jOusTQzQB6ztb91sT0zho%2FlVfdwFQahdkXB6zphU3bkskcYdOQiyjheG9W7V1Qj0F2p4GOYgBYs%2F2jAS1sOTu9ilOKEzp9zSy11Uz6kTCDEa04N6NiDzwDmtU1ShKEhVWM2Tnu6H8k54ErTIgfVDv6WfngYA8P52Tzf%2FOFF0merEwHHSaBl7k5udgdbk4EER3wV5bYErL1FRCUPF7UOXEhm30c8jYNAtTO%2FGiP7IH69oZ7UGwpDNwrewbUBzzVHerDi5Yh%2Fg%2FhhggWyiC%2FmW%2BAB6pdT8ccjwqePDK%2FKZ5%2BcwjyTsCh7BS%2Fg%2FN7oyvPPlIVmoDiyBFUXnpD1kUcXhqF6wlmhLnvzAW1RDHNlFwU1HcJHMK1Rqeln%2BJ%2BE7mvzigew4KZr7026yvw35qWS9FII0Xaq1CMJoAp%2FuTi%2FA4y6RX8D9TnN1GL9DCD%2FNexszAP5AICEAY6yaoXsjCaeejDtdO9IpT%2FMFaA4sBGOnraN4IiIIKtTSDCSn6C%2FBjqkAR6QpoB45JKCLER2GmhoocxV40ZX4OhpRe%2FFrr8X2UpNJHJiDT09pFgsv1Z13ZUqB%2BEfWTSbndfv%2FM6EL4%2Fnfcnow0%2FfhBuogtElEOXy%2FsPNS9NjuUNZxuci1U34OAakRWlgdjt%2FmqtlovfD%2BuE8z6hUxJYax3a3F1BDjR2unYSY4k5V10GRs4kOH8yi3NJlW9vblnzCvDH2ygLB0QHw%2F2OE4uf7&X-Amz-Signature=5378f4409da673a53c1684e4ba76a66d1fbc1be29a1cbad16d1dcc668c4a18cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7HCANJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDgabdZEeuNTE1GjqcqRKawNLAYEkp4k%2BiKjExUDWgiBAIhANbFilsH1Ecp00q8cr%2FV3JS0jPWsGFpCXYK4po9gUct%2FKv8DCHgQABoMNjM3NDIzMTgzODA1IgyHvyLNHl1%2FvX%2FrAEQq3AOnljh21TJIwLPax0WC686wV%2FIxUW59XanzUR60Mt0RLruDXOGyWUUjKoN9bcMU6VxTQcqnZGmsSxuHlwUUWQxqXcaJr6bxUItk201V7RAr%2BHR0uAjkROfs6mq3fk99OpV9R%2FBR2jOusTQzQB6ztb91sT0zho%2FlVfdwFQahdkXB6zphU3bkskcYdOQiyjheG9W7V1Qj0F2p4GOYgBYs%2F2jAS1sOTu9ilOKEzp9zSy11Uz6kTCDEa04N6NiDzwDmtU1ShKEhVWM2Tnu6H8k54ErTIgfVDv6WfngYA8P52Tzf%2FOFF0merEwHHSaBl7k5udgdbk4EER3wV5bYErL1FRCUPF7UOXEhm30c8jYNAtTO%2FGiP7IH69oZ7UGwpDNwrewbUBzzVHerDi5Yh%2Fg%2FhhggWyiC%2FmW%2BAB6pdT8ccjwqePDK%2FKZ5%2BcwjyTsCh7BS%2Fg%2FN7oyvPPlIVmoDiyBFUXnpD1kUcXhqF6wlmhLnvzAW1RDHNlFwU1HcJHMK1Rqeln%2BJ%2BE7mvzigew4KZr7026yvw35qWS9FII0Xaq1CMJoAp%2FuTi%2FA4y6RX8D9TnN1GL9DCD%2FNexszAP5AICEAY6yaoXsjCaeejDtdO9IpT%2FMFaA4sBGOnraN4IiIIKtTSDCSn6C%2FBjqkAR6QpoB45JKCLER2GmhoocxV40ZX4OhpRe%2FFrr8X2UpNJHJiDT09pFgsv1Z13ZUqB%2BEfWTSbndfv%2FM6EL4%2Fnfcnow0%2FfhBuogtElEOXy%2FsPNS9NjuUNZxuci1U34OAakRWlgdjt%2FmqtlovfD%2BuE8z6hUxJYax3a3F1BDjR2unYSY4k5V10GRs4kOH8yi3NJlW9vblnzCvDH2ygLB0QHw%2F2OE4uf7&X-Amz-Signature=64d59431be7127b655e6b1b22bf879944fe39de1949a0e4c94520df13f0e926d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
