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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSQFDBJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe13wFD49OQGSSzoivc7Mlp0rbOG7mo7y8W%2B0S5EZ%2FaAiB1mghL8Ikh9sEiWZ4gIzEVu%2F7qe2A8heLkc%2Fe4XgKwvyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FIh6ebrPBgrIELsKtwDYUiqFtoNqo2XbwqvbbPxRgXRYAL6ViaR6kyDKAekWlOGZQkMfQue20veCbgg8l2rN%2BB21n0Zf2LWM0vu2HCgdmJOyI4lT3Z76lyn1eguHKvtA5D7zGuJyNHBtKs4%2FnkpWto0OoIh6DkfJ8Fz%2BglD0BQdiHGblT%2B%2FPO5fKeQzhwxZ8slTTrBtwiRLrOodF%2FHjSgeQgktPP7m2gjyUV7qba0NprlsC7XszLSCdhXUgTaDF6NNofC%2BChA5UM1Y0Uz2FqO08EoKA1RivABX4K7zKww0BNiI4eeVwMCspdWZUFrF3p%2F6lrWNDdas6UA8s0snhYocmP2vA8UhESurB56Z%2BSiqJtV%2FXe3Wo1K3X1ezrQldxlcWhRTt4Q%2BNdxYx7AIhEg4M4J%2BH45Qs%2B56ODb%2BTKiAa7X%2BGSlm0Ku2YpAmdgxZ71ARZWNDhQP2IUsBM0XG9PefaYpbHOieQj6N7P7OcoiuANKBwZODzZgCEbdE77LhDo8um5g7zzpuccIpZlBIEEoV0m3AoPzjdGnWdprdPxyn4XGkvk51OLgUmwiIenzKjS2YJ%2B56ojU0UR88%2FFMmC1Tv4qkRsANbAOohZ3fCVkrR%2FkRXNav5dTI2jpNgWgAwvPVnjYNN3DSNvq%2B%2BMwgKbowQY6pgGbr6h7fb7wY7KHURSovBgZNS577zMdRoa26rVStqlHmpKFo1Il2YLQZmQkzn7KXBIlGSb85AI57E2i4sAcP6vj6Y793Eb25BNYxhH6alkg4RA%2F7bmugKxuDwWrZtMR9cgDDZLGBp%2BBwXzO6iIj9he3h%2Frm%2FxXlBcTcr7BahvCySw7QIk8YZAR0DNzfh25oNdqAf2prIDYTd5kpqY8rCVQkyMhadIV5&X-Amz-Signature=28bd09710edff89aad046bacad399465c56dcb74369db524a3e14aaf3aae56bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSQFDBJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe13wFD49OQGSSzoivc7Mlp0rbOG7mo7y8W%2B0S5EZ%2FaAiB1mghL8Ikh9sEiWZ4gIzEVu%2F7qe2A8heLkc%2Fe4XgKwvyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FIh6ebrPBgrIELsKtwDYUiqFtoNqo2XbwqvbbPxRgXRYAL6ViaR6kyDKAekWlOGZQkMfQue20veCbgg8l2rN%2BB21n0Zf2LWM0vu2HCgdmJOyI4lT3Z76lyn1eguHKvtA5D7zGuJyNHBtKs4%2FnkpWto0OoIh6DkfJ8Fz%2BglD0BQdiHGblT%2B%2FPO5fKeQzhwxZ8slTTrBtwiRLrOodF%2FHjSgeQgktPP7m2gjyUV7qba0NprlsC7XszLSCdhXUgTaDF6NNofC%2BChA5UM1Y0Uz2FqO08EoKA1RivABX4K7zKww0BNiI4eeVwMCspdWZUFrF3p%2F6lrWNDdas6UA8s0snhYocmP2vA8UhESurB56Z%2BSiqJtV%2FXe3Wo1K3X1ezrQldxlcWhRTt4Q%2BNdxYx7AIhEg4M4J%2BH45Qs%2B56ODb%2BTKiAa7X%2BGSlm0Ku2YpAmdgxZ71ARZWNDhQP2IUsBM0XG9PefaYpbHOieQj6N7P7OcoiuANKBwZODzZgCEbdE77LhDo8um5g7zzpuccIpZlBIEEoV0m3AoPzjdGnWdprdPxyn4XGkvk51OLgUmwiIenzKjS2YJ%2B56ojU0UR88%2FFMmC1Tv4qkRsANbAOohZ3fCVkrR%2FkRXNav5dTI2jpNgWgAwvPVnjYNN3DSNvq%2B%2BMwgKbowQY6pgGbr6h7fb7wY7KHURSovBgZNS577zMdRoa26rVStqlHmpKFo1Il2YLQZmQkzn7KXBIlGSb85AI57E2i4sAcP6vj6Y793Eb25BNYxhH6alkg4RA%2F7bmugKxuDwWrZtMR9cgDDZLGBp%2BBwXzO6iIj9he3h%2Frm%2FxXlBcTcr7BahvCySw7QIk8YZAR0DNzfh25oNdqAf2prIDYTd5kpqY8rCVQkyMhadIV5&X-Amz-Signature=b3add0d2b9b501ec7c87a2a98cfcaf2fdb21c2df1e9fd9646ded73db82f2829f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
