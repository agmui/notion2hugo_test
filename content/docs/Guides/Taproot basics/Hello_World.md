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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGOZ7XD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqu6KK5z8m50q%2B%2BY3BOnMbhqIs%2BH%2B08z0c2tu1spQEIAiA75cW8KMBQ%2FQ1BP%2FXY7ZAK3wnULlNAQC%2BcjjKQBt2tkir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMSitTXCgQSlP3U2%2FxKtwDojG144Pr1gmyFK5zFbiTWiPb6Ii15LrZVBUdkf1v8CU%2BR%2FOTTzMl9MZ6wYuPShC4QUn6gRdhRJW8FPYr%2BBbtIL7mLi%2Fa8GlI3UUzMI4a00ccYNxEvtt4ytGwecBHsjWEzGksOb%2F5WaQwHVl%2FxTyoWJytIG%2FPCo6eI5S3Wg5SYhcx%2F12UFsEddVSVSNGb%2BcykmzbLcBCLxrvDKeFP8XSjb6WnUQhRc%2BHpUm%2F%2B2Xau3mGbPPpSio0qemRjFzgOdK1W9JWrXB%2B%2FWvi48V1iMR8ing275IO%2FAmrqlwsOc6aZmFuNqSN3v3r4v%2BFtgNfPJ%2B35R7D%2BArsZv%2FWHJpcb%2FxCzJXXCKHM3lfazuKdhgzGWQvX%2F0MxLkMkkSXNgGmOFpLLlk718dD4kuJqGpVRPNXXEU8%2Fc5W8r5OaFScHMxfZBasyf7CB2CTenhNhUykqtIB%2BDXZy7Ruos4V3T0MXaKCAGOi8g8JwOnCKzw8a6qQokDKNKmS%2BKJiG55M5TpeoCk9z%2FUVfm3%2FyBxtVHoJE%2Bb%2F9VEkfYmkJCrMUu6tCj2FIEVnR1RqgFu1AeXQi5H9KutFY0YEVcJh7IB0vCBzdUxibWgvOpgDJuK9DJSvURzXBUctjr6WY3JmARKRb10dgw%2F6rjvgY6pgGWyvhEsw9YpGut9fQjUUJ29vEVWDNwQ2VRNc1xzpM9MTE6Y5dY%2Fqa9hrsAw73YNcBgDzbkXEJahcSoa4XXsk99XCNq0%2BvIW1zlhBVwwAfAgwBp7oRgP7%2FS1fykcXHwBAcKVZN7xpSh1KUOIZOU%2BU%2FrXN7GY2eGzY6HyYu%2FQEDpFlNjxwtfiOoqSwQe65aMun%2BvHuAJWpuvY%2Bmh3QYtQZJj95UQrigN&X-Amz-Signature=ad936d44f066eef182e55d68d9deb3e1092c8125e951fd42b6baef02deb520f7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GGOZ7XD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqu6KK5z8m50q%2B%2BY3BOnMbhqIs%2BH%2B08z0c2tu1spQEIAiA75cW8KMBQ%2FQ1BP%2FXY7ZAK3wnULlNAQC%2BcjjKQBt2tkir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMSitTXCgQSlP3U2%2FxKtwDojG144Pr1gmyFK5zFbiTWiPb6Ii15LrZVBUdkf1v8CU%2BR%2FOTTzMl9MZ6wYuPShC4QUn6gRdhRJW8FPYr%2BBbtIL7mLi%2Fa8GlI3UUzMI4a00ccYNxEvtt4ytGwecBHsjWEzGksOb%2F5WaQwHVl%2FxTyoWJytIG%2FPCo6eI5S3Wg5SYhcx%2F12UFsEddVSVSNGb%2BcykmzbLcBCLxrvDKeFP8XSjb6WnUQhRc%2BHpUm%2F%2B2Xau3mGbPPpSio0qemRjFzgOdK1W9JWrXB%2B%2FWvi48V1iMR8ing275IO%2FAmrqlwsOc6aZmFuNqSN3v3r4v%2BFtgNfPJ%2B35R7D%2BArsZv%2FWHJpcb%2FxCzJXXCKHM3lfazuKdhgzGWQvX%2F0MxLkMkkSXNgGmOFpLLlk718dD4kuJqGpVRPNXXEU8%2Fc5W8r5OaFScHMxfZBasyf7CB2CTenhNhUykqtIB%2BDXZy7Ruos4V3T0MXaKCAGOi8g8JwOnCKzw8a6qQokDKNKmS%2BKJiG55M5TpeoCk9z%2FUVfm3%2FyBxtVHoJE%2Bb%2F9VEkfYmkJCrMUu6tCj2FIEVnR1RqgFu1AeXQi5H9KutFY0YEVcJh7IB0vCBzdUxibWgvOpgDJuK9DJSvURzXBUctjr6WY3JmARKRb10dgw%2F6rjvgY6pgGWyvhEsw9YpGut9fQjUUJ29vEVWDNwQ2VRNc1xzpM9MTE6Y5dY%2Fqa9hrsAw73YNcBgDzbkXEJahcSoa4XXsk99XCNq0%2BvIW1zlhBVwwAfAgwBp7oRgP7%2FS1fykcXHwBAcKVZN7xpSh1KUOIZOU%2BU%2FrXN7GY2eGzY6HyYu%2FQEDpFlNjxwtfiOoqSwQe65aMun%2BvHuAJWpuvY%2Bmh3QYtQZJj95UQrigN&X-Amz-Signature=ce9d9ebf316c50fde9fe96b8ce4f8851367fc91a45e85122a1274fd49e727861&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
