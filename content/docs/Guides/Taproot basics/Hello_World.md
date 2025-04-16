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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2X5NNX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQyApoH90i%2BPW0E%2F3zwzMvc4kszAVgGyB%2B%2FAiw9DxLfAiEA1DDtv1qNtLz3h9OROMDyJqoBLxMVL%2FT4QSonB19JVPsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEFAi%2FZP0YokNUuEEircA4KN5W10kohPvEJV1X2a1pHUpGlkd2kgR1ziP7RM%2BRR8z0MfFLo4%2B60CpWOO7VA9kyX3fEDtyRIPxSIJQ7av0sTQKWrHUazaON9Nyq1PpnH8EeH3gz9POmofaKfEOmc%2F7CldPBV1TgKxc%2FyZ3cX7K8vzXn9js0U%2FGp3Dk5xJ1qflLEOzUYFHc3Iviu4SXUuLuQhW%2FJXwghHVOuvrwDXfJPHqiuwHDWFZNm7kePxJV8AAs%2BiqJJW3RD8xNJgoAqEABTI5PztODdp0gea8BBKtViftspVr441tA7Zk9NvwQPgsEpDHwmaSNGG2qV0sB%2FCB44NXkYcntVEXxgyOHpYzOfkDyh6l6wcyDKFYYMfyKTUkzM%2Bd2gm7a2R5g%2BIvtzoiUb66So455lzhzJAFXoSzXrJhJI6%2Foh1GyFiwlS1TJcQHoY3jm6vAqqj7JlOTefOu0MDHrNwjc7glB4oxg2jEHgyrpzLiNpqMCDN3vWcu86tym0pru3qcE6wmkXC8qfi5GFgNeK6eDMa81U2N5O72JvhNTekvbOvC00BhYLIrWVT8ZwMraNDDRzEkdan2c4elMdWzBD3qBDhA8l57PGnn7foSKLzZJBXcIhVykK6UVhiXKD2ZBNBNKRpihjOdMO70%2Fb8GOqUB7xAwy%2BShOvjHxP6nLUo2HmoHqKHWrtg2LQsL%2F3eVo9HRveQnd2nl6RMzF4gNKHAt6%2Bl0fpyaza9dIdBb%2FIiLz%2FI91HUbBrb5m2B%2BPZYWwD%2FpRZVFPa%2B83OmUCMhpF%2BTTcA69PRoMS%2FI42fF4vMqiCLuSw8OIyU54sRX2P5OeN0LiurYD6AU3%2BX6Dlz5Ji%2BDuLjjBxtyagaOqk1E4yJKbLsD%2Bry%2BO&X-Amz-Signature=a3b5031a94c39079cf0de7dd1a08c4d830a85d23380a764a71ec9baf012aeae5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2X5NNX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQyApoH90i%2BPW0E%2F3zwzMvc4kszAVgGyB%2B%2FAiw9DxLfAiEA1DDtv1qNtLz3h9OROMDyJqoBLxMVL%2FT4QSonB19JVPsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEFAi%2FZP0YokNUuEEircA4KN5W10kohPvEJV1X2a1pHUpGlkd2kgR1ziP7RM%2BRR8z0MfFLo4%2B60CpWOO7VA9kyX3fEDtyRIPxSIJQ7av0sTQKWrHUazaON9Nyq1PpnH8EeH3gz9POmofaKfEOmc%2F7CldPBV1TgKxc%2FyZ3cX7K8vzXn9js0U%2FGp3Dk5xJ1qflLEOzUYFHc3Iviu4SXUuLuQhW%2FJXwghHVOuvrwDXfJPHqiuwHDWFZNm7kePxJV8AAs%2BiqJJW3RD8xNJgoAqEABTI5PztODdp0gea8BBKtViftspVr441tA7Zk9NvwQPgsEpDHwmaSNGG2qV0sB%2FCB44NXkYcntVEXxgyOHpYzOfkDyh6l6wcyDKFYYMfyKTUkzM%2Bd2gm7a2R5g%2BIvtzoiUb66So455lzhzJAFXoSzXrJhJI6%2Foh1GyFiwlS1TJcQHoY3jm6vAqqj7JlOTefOu0MDHrNwjc7glB4oxg2jEHgyrpzLiNpqMCDN3vWcu86tym0pru3qcE6wmkXC8qfi5GFgNeK6eDMa81U2N5O72JvhNTekvbOvC00BhYLIrWVT8ZwMraNDDRzEkdan2c4elMdWzBD3qBDhA8l57PGnn7foSKLzZJBXcIhVykK6UVhiXKD2ZBNBNKRpihjOdMO70%2Fb8GOqUB7xAwy%2BShOvjHxP6nLUo2HmoHqKHWrtg2LQsL%2F3eVo9HRveQnd2nl6RMzF4gNKHAt6%2Bl0fpyaza9dIdBb%2FIiLz%2FI91HUbBrb5m2B%2BPZYWwD%2FpRZVFPa%2B83OmUCMhpF%2BTTcA69PRoMS%2FI42fF4vMqiCLuSw8OIyU54sRX2P5OeN0LiurYD6AU3%2BX6Dlz5Ji%2BDuLjjBxtyagaOqk1E4yJKbLsD%2Bry%2BO&X-Amz-Signature=4895f8280ccc7bbf53db6ec8cbd69b99791e849777907fa629e5cd438247350d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
