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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKBCYGZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHlKthjBdqP7Q9d78Q9uJ3YopmCda9bFOk%2BpEpdfV%2BeKAiALI7ItRcAjK0cGSaEV0l8NpqNrbQhNdPu4IB54i476eCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldfRlXUwr6WilbMkKtwDWAbH3ftllJjwZMwfkn99nwg6ee%2Bdi0HAzbqXet3AT0u%2FrEARW0OFeTPfFawkOq30C%2F9PzOrZTyptRjkbwtq4cjsUEsoo6IZGtAEb%2FPe1xkNUPb4Mzwmx37UkKfn9Oy1IAfLuRAsdkfYM%2FqyVGQSp4KwtvD948yo7ZGocT525mJfdN3gWshkMTHLsnyz%2FCmE8TUlvKm1i4jNW86V2g9cYMb42EOZ3z1g963nRAQR%2FnnofMSyz2hagthDWmBCHd3wK5EVa7gLo8lUWihVJJJWXCzFPv7X%2FhmkY8RFCcXZ4zLkHCJ9Ioy%2B72jApubK2lYnksdWUTw2TEAOCkjQjHHSIHzosIbsGjjGlbXBYmJbD0NvPQskfNjhAeMg60nOy%2FEghKhgepUpSSdAQYcZ31gxplGALP7zO6vgXOh9z629idkBaEqrlmgUqv4aCCueEut7MM24ErzCkcReAKSgRCgOzaxpHhEpZshBFgVPpL8RLrQ95PY2XeDg2bw0TYwcBnH6%2BxEPdPlpdwshWwydsCyecr2SuScUbIKRbbQ34%2Bt27xhF%2F8fast%2FdIfce47X%2FxwFiDjeCHLKaqcDB9CVsM8stPxwH8ysGx%2BJ1QvOYGY4zQ0W6qUslJi1fnOdH76jAwt6CPwAY6pgH6dheYIHh9Xlp%2FUB9vAczhvIufE9S6HQ9vqIUU2rjbaC4pVLzzeI9DXQdyncUqpGHiu7%2FuoaWTdR%2Fj9i5vpDBr1Bbw1wZc7%2Bo8l93e1yoMVF%2BlzU%2F13fkIsmtJOzGECrN6Z5uCCz0ZEmjR%2B3vf2VPl3krThGbDIpFSEH63FKtdgeZ0KEkT2FU3vKT6%2FOiR7nHpsDUVPAaW5IQwYsnkyBgosY5pXM0s&X-Amz-Signature=547296e1c1f5b8b7879a120486822a669377f2ea2c1b8fac6de4f5babeffa58e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKKBCYGZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHlKthjBdqP7Q9d78Q9uJ3YopmCda9bFOk%2BpEpdfV%2BeKAiALI7ItRcAjK0cGSaEV0l8NpqNrbQhNdPu4IB54i476eCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldfRlXUwr6WilbMkKtwDWAbH3ftllJjwZMwfkn99nwg6ee%2Bdi0HAzbqXet3AT0u%2FrEARW0OFeTPfFawkOq30C%2F9PzOrZTyptRjkbwtq4cjsUEsoo6IZGtAEb%2FPe1xkNUPb4Mzwmx37UkKfn9Oy1IAfLuRAsdkfYM%2FqyVGQSp4KwtvD948yo7ZGocT525mJfdN3gWshkMTHLsnyz%2FCmE8TUlvKm1i4jNW86V2g9cYMb42EOZ3z1g963nRAQR%2FnnofMSyz2hagthDWmBCHd3wK5EVa7gLo8lUWihVJJJWXCzFPv7X%2FhmkY8RFCcXZ4zLkHCJ9Ioy%2B72jApubK2lYnksdWUTw2TEAOCkjQjHHSIHzosIbsGjjGlbXBYmJbD0NvPQskfNjhAeMg60nOy%2FEghKhgepUpSSdAQYcZ31gxplGALP7zO6vgXOh9z629idkBaEqrlmgUqv4aCCueEut7MM24ErzCkcReAKSgRCgOzaxpHhEpZshBFgVPpL8RLrQ95PY2XeDg2bw0TYwcBnH6%2BxEPdPlpdwshWwydsCyecr2SuScUbIKRbbQ34%2Bt27xhF%2F8fast%2FdIfce47X%2FxwFiDjeCHLKaqcDB9CVsM8stPxwH8ysGx%2BJ1QvOYGY4zQ0W6qUslJi1fnOdH76jAwt6CPwAY6pgH6dheYIHh9Xlp%2FUB9vAczhvIufE9S6HQ9vqIUU2rjbaC4pVLzzeI9DXQdyncUqpGHiu7%2FuoaWTdR%2Fj9i5vpDBr1Bbw1wZc7%2Bo8l93e1yoMVF%2BlzU%2F13fkIsmtJOzGECrN6Z5uCCz0ZEmjR%2B3vf2VPl3krThGbDIpFSEH63FKtdgeZ0KEkT2FU3vKT6%2FOiR7nHpsDUVPAaW5IQwYsnkyBgosY5pXM0s&X-Amz-Signature=5d4a6477345b4b01ea0af0b0e0811dd0be37481e46653abcdf39d285747da851&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
