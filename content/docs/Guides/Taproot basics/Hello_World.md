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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDHAORS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDzBzopTZSOYaoXhA2X07%2BYQlixKvhsuLWP3%2FTWipDFAiEAjdDlO2o%2BtMuYxJC0pR3AwohWIrCQtmaTum64IOhhbIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdrxwhd9LgaFmjQASrcAy6a2ks18pqqSZhboYd4TTFO7AeREk2BBC8isMjUPaOnKjofADWAj1LyDiGsQ7BXNVnKsPa8na3pJL%2BzMQiKrYPgiDBFKgVttietDki8b92P9KT8p%2BDeAMqbFmGqtW%2BPdZvOgoTcYVADTAvwL6cfOZ8NwJXitJ1nHcFvsVLi36jFXW8QxyeykQMYvY2I%2BaTAuEddY3swKuqT4dTy8SRsj3RVBGC1n8ejNyoh442nMc2JunsgnhQFyGaEMmnq54dWT0VmWx%2BHlFOM790ZMWEN4GjnTwpMl8zgcFv2Qr8Nb9%2FxF2cBejuDd%2B2JkgfQs61pGfeK8CLDKwxMICNkBfB9EQVtNdQWhevXKXw9K%2BytjV5R55DkyXc2FT4GOWIkSGRoHoeZw%2BZsr2ZJtGEDdDUT%2BZszZFan3AWJ6x9v0jS7s%2BdNwEVE27ECMzAsjC8tCKlgJE4CEzm9os06qnprSYl9TxgfDlS07HN5oQb5CAqy%2F8ZlLqIUQWLH9oFo3SyWdOr13nMxOablrHHHte6cGKuO%2BpD%2F2UsIius3ht66EY4rcydajPJB8O751UG%2Fer3y1S0d6CrHvm7qr%2BaAg0Y7X5OxEyB73YVRq71AwKw0fBC2PpHrIy4smelgE9ZmrbgvMLyI38EGOqUBZYPFKVtXKPfEC6OcGKSwfrvozmWOGlDiPUrUxU42%2FySBg3jVppbKP3zsENJTV%2BRgourSrZfpy156Or55XziPr5Y6%2B4cS6qc%2Fr6FO2ZnsdnryEqhn8OtKlQjqufTfWH%2BMFwym7x60G0HLUeXv3Jhxm2h4mIOIQ4D8t6wK9DT8b4SK18F%2FlNNKToTjE49xhGy7Fs6OSgJOfUvBBDvqGItf54weDDoy&X-Amz-Signature=21bf0f1963c9b5672cfcc7a03885b2c9ae8e05f52f01fac1869163a11cb36771&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDHAORS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDzBzopTZSOYaoXhA2X07%2BYQlixKvhsuLWP3%2FTWipDFAiEAjdDlO2o%2BtMuYxJC0pR3AwohWIrCQtmaTum64IOhhbIcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdrxwhd9LgaFmjQASrcAy6a2ks18pqqSZhboYd4TTFO7AeREk2BBC8isMjUPaOnKjofADWAj1LyDiGsQ7BXNVnKsPa8na3pJL%2BzMQiKrYPgiDBFKgVttietDki8b92P9KT8p%2BDeAMqbFmGqtW%2BPdZvOgoTcYVADTAvwL6cfOZ8NwJXitJ1nHcFvsVLi36jFXW8QxyeykQMYvY2I%2BaTAuEddY3swKuqT4dTy8SRsj3RVBGC1n8ejNyoh442nMc2JunsgnhQFyGaEMmnq54dWT0VmWx%2BHlFOM790ZMWEN4GjnTwpMl8zgcFv2Qr8Nb9%2FxF2cBejuDd%2B2JkgfQs61pGfeK8CLDKwxMICNkBfB9EQVtNdQWhevXKXw9K%2BytjV5R55DkyXc2FT4GOWIkSGRoHoeZw%2BZsr2ZJtGEDdDUT%2BZszZFan3AWJ6x9v0jS7s%2BdNwEVE27ECMzAsjC8tCKlgJE4CEzm9os06qnprSYl9TxgfDlS07HN5oQb5CAqy%2F8ZlLqIUQWLH9oFo3SyWdOr13nMxOablrHHHte6cGKuO%2BpD%2F2UsIius3ht66EY4rcydajPJB8O751UG%2Fer3y1S0d6CrHvm7qr%2BaAg0Y7X5OxEyB73YVRq71AwKw0fBC2PpHrIy4smelgE9ZmrbgvMLyI38EGOqUBZYPFKVtXKPfEC6OcGKSwfrvozmWOGlDiPUrUxU42%2FySBg3jVppbKP3zsENJTV%2BRgourSrZfpy156Or55XziPr5Y6%2B4cS6qc%2Fr6FO2ZnsdnryEqhn8OtKlQjqufTfWH%2BMFwym7x60G0HLUeXv3Jhxm2h4mIOIQ4D8t6wK9DT8b4SK18F%2FlNNKToTjE49xhGy7Fs6OSgJOfUvBBDvqGItf54weDDoy&X-Amz-Signature=ef263e3ca74d0eff1eda875c184aa4dfe30e5d4ee21cc2e3a6be13db1b2a4ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
