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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OL5NB5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjyvvWqB1r0486E0UyrHSMY5l89NcInNfT2QlSNU5SQAiBbjb2W5IIaK9nPHylNeGS%2FXvc%2FDSqE0gGvpVbzgsf%2F3ir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMvPl4aW3ou3uYqdtUKtwDWVt90tQua0gHeYHjYu3vsnd3xpJtu1KBZKGvTVEO%2Fw4H6dLygX7EvHbv4yNRRckKxM9uBamY4kpCf3qG%2Be1MeYNLkBin9Dt2RSQvNVmPh%2FRoyPgm7407VehS0RXx5z21jrmZaQd7dJaw7SZ1WjVc67AoBdBr38lYrJQJGbj0s%2FC5iMETioLZPhsrzyUC4lyrUXb1M353gsmEOKKmhaiHLsoqNVQHPW%2FAfKgEqwMEoE9YHIeX9M%2BNdymPcjhZKmvrXgGBykPFJD9oHTZFLwKUldisgFtRW8KcV9pgFaQgzkF8UvbAYH4m8hnRV9a3qOxMLAoHY1wZyM2auPm2%2BhjCH3Dlq3U1GYWQ9KtYMpnMavSaBsIdIYDDimJRsUo%2Bjc072n0of0Ng0AmGTnCAbrtTFZgU%2FdEFwvaAJlJdt7CI2BAwDrd8jU3vPssDr47LCAWOwuuH23Y47Gxq8jud2iV8It5OIl%2BFfHEvG5UD56R%2Bl8cVaqRnBYqhs9yEHCJTnbcYOHqbsny0uhD%2ByD1AcBxUV7FX6UVkjveLdeVTNad0WgPKAVNhCmMeCmuIqTMGEhnsD5QrkN5kR8KorFgmP4e3wF3IH3OBJYIFaB7mihx6HEhwBpEdRCCDD9m1qMYwpMDIvwY6pgE9tYRqXWzlkS4cgoIkZjRnY0LIlk8egwDlj9sQYMNoRi04u9SQDfKUFAF6rT%2FqSdUbdBu07xaaX5L%2B7Vr3dJGhf7kz8OmCRfQbAcQZ7%2FKn%2BLro726VlUM2U%2FQ3kX9OXgAkD0H%2FwY5fqGnEkS8DfVEdmDvOvXgnkhpMw5jBXM6FmlZWMCcHh7fB6BgkdS5YKNQeh198K9%2B80rPigSmpkzFR%2B8BOKHzi&X-Amz-Signature=ba57836d72fa32f5e8dfee179a2f419c49e4b9143b7a3a592b5e5eb480e05cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OL5NB5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjyvvWqB1r0486E0UyrHSMY5l89NcInNfT2QlSNU5SQAiBbjb2W5IIaK9nPHylNeGS%2FXvc%2FDSqE0gGvpVbzgsf%2F3ir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMvPl4aW3ou3uYqdtUKtwDWVt90tQua0gHeYHjYu3vsnd3xpJtu1KBZKGvTVEO%2Fw4H6dLygX7EvHbv4yNRRckKxM9uBamY4kpCf3qG%2Be1MeYNLkBin9Dt2RSQvNVmPh%2FRoyPgm7407VehS0RXx5z21jrmZaQd7dJaw7SZ1WjVc67AoBdBr38lYrJQJGbj0s%2FC5iMETioLZPhsrzyUC4lyrUXb1M353gsmEOKKmhaiHLsoqNVQHPW%2FAfKgEqwMEoE9YHIeX9M%2BNdymPcjhZKmvrXgGBykPFJD9oHTZFLwKUldisgFtRW8KcV9pgFaQgzkF8UvbAYH4m8hnRV9a3qOxMLAoHY1wZyM2auPm2%2BhjCH3Dlq3U1GYWQ9KtYMpnMavSaBsIdIYDDimJRsUo%2Bjc072n0of0Ng0AmGTnCAbrtTFZgU%2FdEFwvaAJlJdt7CI2BAwDrd8jU3vPssDr47LCAWOwuuH23Y47Gxq8jud2iV8It5OIl%2BFfHEvG5UD56R%2Bl8cVaqRnBYqhs9yEHCJTnbcYOHqbsny0uhD%2ByD1AcBxUV7FX6UVkjveLdeVTNad0WgPKAVNhCmMeCmuIqTMGEhnsD5QrkN5kR8KorFgmP4e3wF3IH3OBJYIFaB7mihx6HEhwBpEdRCCDD9m1qMYwpMDIvwY6pgE9tYRqXWzlkS4cgoIkZjRnY0LIlk8egwDlj9sQYMNoRi04u9SQDfKUFAF6rT%2FqSdUbdBu07xaaX5L%2B7Vr3dJGhf7kz8OmCRfQbAcQZ7%2FKn%2BLro726VlUM2U%2FQ3kX9OXgAkD0H%2FwY5fqGnEkS8DfVEdmDvOvXgnkhpMw5jBXM6FmlZWMCcHh7fB6BgkdS5YKNQeh198K9%2B80rPigSmpkzFR%2B8BOKHzi&X-Amz-Signature=7778396ae2473816addd08ae9d1d29aa08a81a276a24b3fb67cbf3d44aa2fbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
