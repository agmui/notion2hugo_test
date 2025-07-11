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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4WO5A3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ5UHcZUiBw9D4St80ttOEp2XZlyetFIrtrRa6jaxL%2BAiAiYZ20LS7rOXEjoHgZ1DzxyJylkVn4eEQ0BkYPgf6mgCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFIQJZc8N1GkUNWwVKtwDHgCxhprMoELeR2E%2BJzlnsLWTCk%2FQCZ92nyIhY2WEWvvvJ%2FiKy2Z%2FZTqOMdyWetvzaLN6pH72woNCprjQ9Gqjzd2XvtC2hbTGeII%2BuMIHzWEUDBRv3L3BdG%2Bvqe666Kor2IPtHv2gJoSZfc0s9d1pYZ7WcQ4pyBtbHNZDnGGhuTM9hDbr7sT%2BVaR%2FGBPd%2Bxt6Bf34k7LdPVbAsiG%2BT21DL3C2jwKELyvZlbE7nujjHGXBrNYxUBJ4g85ik15PdEk7zzYk4lpYazIySaXl4aQlBOdkJGqi25X775%2B%2Fc%2FNzNF5FAFfxFc5MYvdTxAV7XVVDol3aCn5xRWluhKu2Uc1WvLXwtMP67Sf7ThcZEZMsjTIS8%2FozG6BsrhWeK%2BwPGLM7eQpiIczUt2ppuMKe3jiVw5Wig8Gn33xo%2BkxI2OWscjOhH%2B7T6jft7DF3wW7ufj%2FMoOpudhNXeXPRNIotJM9P9nTkWNvtDvuwMhpgr4ukack3UJNCtzp5%2BP%2Frc0cXsE4fF9di82eVa2I4a2%2FwaC02x8eEYprg8%2B5IF1qxLthY9dvu7jsAvAcwE1lykSvuP6l9I5nsXaywW61MRdQKQvru2FNtcT22VwVI0dBUdLPfrhCX3nojqwtM8%2FQrX7ww8oPGwwY6pgH%2FsDsIy5EGIrN9kPjAMDthEhTdhq%2BeBpBUJS%2B0r%2FxO6WYjgJXFyb86raOh9NtPx1gOafRQNcy2yPix9yVpSXfoa3HrNeVKIYg7qIMyNhtGXXfCFNUfaHg5Xd4qkYx9Oi0gROPx4o030bP8gtU%2FMw%2F%2F1bOIsdxAsSWsqoCE9i2fgkZ%2F%2FxFAx1moqQoBBXdRAylHMAmw3s6yi%2BVuHuW8KvcStQ1EUNY3&X-Amz-Signature=62cea26a9d7b84e78a6afcd9b7c3b7f4e46d674da2a3f262b9c88a369a3f24fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4WO5A3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ5UHcZUiBw9D4St80ttOEp2XZlyetFIrtrRa6jaxL%2BAiAiYZ20LS7rOXEjoHgZ1DzxyJylkVn4eEQ0BkYPgf6mgCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFIQJZc8N1GkUNWwVKtwDHgCxhprMoELeR2E%2BJzlnsLWTCk%2FQCZ92nyIhY2WEWvvvJ%2FiKy2Z%2FZTqOMdyWetvzaLN6pH72woNCprjQ9Gqjzd2XvtC2hbTGeII%2BuMIHzWEUDBRv3L3BdG%2Bvqe666Kor2IPtHv2gJoSZfc0s9d1pYZ7WcQ4pyBtbHNZDnGGhuTM9hDbr7sT%2BVaR%2FGBPd%2Bxt6Bf34k7LdPVbAsiG%2BT21DL3C2jwKELyvZlbE7nujjHGXBrNYxUBJ4g85ik15PdEk7zzYk4lpYazIySaXl4aQlBOdkJGqi25X775%2B%2Fc%2FNzNF5FAFfxFc5MYvdTxAV7XVVDol3aCn5xRWluhKu2Uc1WvLXwtMP67Sf7ThcZEZMsjTIS8%2FozG6BsrhWeK%2BwPGLM7eQpiIczUt2ppuMKe3jiVw5Wig8Gn33xo%2BkxI2OWscjOhH%2B7T6jft7DF3wW7ufj%2FMoOpudhNXeXPRNIotJM9P9nTkWNvtDvuwMhpgr4ukack3UJNCtzp5%2BP%2Frc0cXsE4fF9di82eVa2I4a2%2FwaC02x8eEYprg8%2B5IF1qxLthY9dvu7jsAvAcwE1lykSvuP6l9I5nsXaywW61MRdQKQvru2FNtcT22VwVI0dBUdLPfrhCX3nojqwtM8%2FQrX7ww8oPGwwY6pgH%2FsDsIy5EGIrN9kPjAMDthEhTdhq%2BeBpBUJS%2B0r%2FxO6WYjgJXFyb86raOh9NtPx1gOafRQNcy2yPix9yVpSXfoa3HrNeVKIYg7qIMyNhtGXXfCFNUfaHg5Xd4qkYx9Oi0gROPx4o030bP8gtU%2FMw%2F%2F1bOIsdxAsSWsqoCE9i2fgkZ%2F%2FxFAx1moqQoBBXdRAylHMAmw3s6yi%2BVuHuW8KvcStQ1EUNY3&X-Amz-Signature=a6fe35b63a1f6fc0ab452213c261bdf3ebde5ac3650578b737073ceee5a66758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
