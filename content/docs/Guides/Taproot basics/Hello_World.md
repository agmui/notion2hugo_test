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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAKB3B7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BEkGE9ePh6AOL1bQTTyW7%2ByvPquVm9O5m0r3XyvWLuAiBjW5h3XBpK6V7NauTurmio2kHeIai9XUo15YmtmL6mpiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqv4XQgyW5OwzLstfKtwDFPwzvvwGMmb2y0yK4l9GDFpG4yrYDE8A8MKwGn1KFhihAyPNgyyitoywx4wQKJhlUqSQ9%2BxTbus8y0k%2ByVjsmh4BLZ%2FPoGGpsFkYgIlW13YIPakFVWFdofs%2FtgyEzM0TZcoWmIt87PRDt0Zfltf6YUal7D48Fca%2BhQzEi%2BPr%2FCfzbk6lnw13X%2FWB3fXhCislogHUBYpXVl4iaSc2dhxwdlQpNe%2FvK0SuulZ2U%2BtUh4z5SDzEbgZx7Q%2FSn7iUDJ4dWsLEX49PQOHLzFijNuBinPr%2BV3Hv9cwzCkq0dTiU8xfrsIAoi2CBobb%2FvTlV30ERNjlH9lh1DKg765e77el%2FjmoHeoqISBLgvh%2FJxN%2FAaKhZtyj%2F%2FM4g7MeC%2FWrAGSgGbYmkT5AdXMI%2BfJ0BAS2DiqWQ48rZsvXT9WTWKK6gAYMUupt7PdU7yc8FUeTo5X4sLRrE8332xDiaB%2FkO080uCfQcTHtLXhprGVW1Bf%2FlaPze1%2FrJvHCtuBhzE7x26%2B4rAGga1iMuHFVru5B4LX11tyXkduJzS0VG2GF9Ev8q87QGNu%2FxmvXovJY7MMffmnV%2BX6Fs5pL7creKIb6W%2BXKpypeinYW1bzyApjk5SajICSpYs%2FwfGc5z1J4EHcwwzIqlxAY6pgGyaQRq%2BoPMDSueYiSRSDRokEkPYHDE1nONq7cw4L3lxxS7cw5mdG%2BHnZJ%2BLQn%2BaTVzC29j%2FpCBHTpwOKVsvYudn9h3o17fahDQ31z80QWT63x6CYMO%2BCkMDw2KADZ7rAumPZsYJ5XhgXeB39iNjJR5Ecxzg1iR1V4M2pHnAMo6huxkxIbzuG2I9ZewKYS8iWdY1ijGbumyB2rbW6%2BzlYBnEFHoCwhR&X-Amz-Signature=42224833d1ac8a14644aaf9f46a0aaa94e5fa7741cb8f17d57cd29fdb8864fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAKB3B7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BEkGE9ePh6AOL1bQTTyW7%2ByvPquVm9O5m0r3XyvWLuAiBjW5h3XBpK6V7NauTurmio2kHeIai9XUo15YmtmL6mpiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqv4XQgyW5OwzLstfKtwDFPwzvvwGMmb2y0yK4l9GDFpG4yrYDE8A8MKwGn1KFhihAyPNgyyitoywx4wQKJhlUqSQ9%2BxTbus8y0k%2ByVjsmh4BLZ%2FPoGGpsFkYgIlW13YIPakFVWFdofs%2FtgyEzM0TZcoWmIt87PRDt0Zfltf6YUal7D48Fca%2BhQzEi%2BPr%2FCfzbk6lnw13X%2FWB3fXhCislogHUBYpXVl4iaSc2dhxwdlQpNe%2FvK0SuulZ2U%2BtUh4z5SDzEbgZx7Q%2FSn7iUDJ4dWsLEX49PQOHLzFijNuBinPr%2BV3Hv9cwzCkq0dTiU8xfrsIAoi2CBobb%2FvTlV30ERNjlH9lh1DKg765e77el%2FjmoHeoqISBLgvh%2FJxN%2FAaKhZtyj%2F%2FM4g7MeC%2FWrAGSgGbYmkT5AdXMI%2BfJ0BAS2DiqWQ48rZsvXT9WTWKK6gAYMUupt7PdU7yc8FUeTo5X4sLRrE8332xDiaB%2FkO080uCfQcTHtLXhprGVW1Bf%2FlaPze1%2FrJvHCtuBhzE7x26%2B4rAGga1iMuHFVru5B4LX11tyXkduJzS0VG2GF9Ev8q87QGNu%2FxmvXovJY7MMffmnV%2BX6Fs5pL7creKIb6W%2BXKpypeinYW1bzyApjk5SajICSpYs%2FwfGc5z1J4EHcwwzIqlxAY6pgGyaQRq%2BoPMDSueYiSRSDRokEkPYHDE1nONq7cw4L3lxxS7cw5mdG%2BHnZJ%2BLQn%2BaTVzC29j%2FpCBHTpwOKVsvYudn9h3o17fahDQ31z80QWT63x6CYMO%2BCkMDw2KADZ7rAumPZsYJ5XhgXeB39iNjJR5Ecxzg1iR1V4M2pHnAMo6huxkxIbzuG2I9ZewKYS8iWdY1ijGbumyB2rbW6%2BzlYBnEFHoCwhR&X-Amz-Signature=98af3f40c91e157471a47f802720c029251cf696fa0eba0ce8e314f5811b32f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
