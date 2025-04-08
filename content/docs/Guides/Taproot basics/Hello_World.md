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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU25A3OB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE75C0t53Hc%2FhickQ%2F%2BZgCBX0XdSW7oWKe9FMqrCTKyNAiAla3u3iI0iL9xHRlXtCqEFNiUZsSetsnX8NUEx4WmjfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMy5Yq%2FLjnko2meuehKtwDIlifgKom%2FksJBptmZF9knDSaMIiJZL6k9fizORPIVXlS9QU3A4fgGNgzh808Ri7DmFAxtTWc7Z17%2BIzqoLHwJR6JgYhUedXw%2FBYwwLXyPDYkdhExOjdrrG7r5k2KzxtdZRXuu6OQCxFbVmkasuwYsc7Pc3qHgR81akFX0M16i%2BxQx%2Fc998porNMFNGqSg85tt0w%2B3hg6bkcLqanEypt0BnF3KvvW7AnHouRw6cB0%2BJ1wsFj4v3%2BBlZkATq9L5L24KX75%2BS1dRzbTyW%2B05HRC54H7n%2F6o89u6Rcp64%2B5GmBtuParmp%2Bc1HnnBLSu2jCyK4GJuhvRiACklr6RaQKNx%2F356at57SY%2Bot5eGKQiMMHaorDpi%2BMR9u2xTzdg%2BGUAUYBXMED7aq49rDnr2vp05kaTUpEuBsNZe0BgvzDmZiyqSlsn1ffsmFk9QGoNJgEpywgHq1BBgn%2B%2BH5agyIqDYc1CuJW7mJXWwOoJcVCZWkgUUUfSc9HUjushwszXxrXDJn2ghEWTLVjFJfiiexzuqY32bKoHar%2FrsiCIutAnpiiYQHH1tk%2Bm6%2FNO08F6yz3a7ZsurB64Vpijw225M55MkD32Dknkmif971lKzlx2Crg3dlubduWV1ssgmiUYw36nWvwY6pgHnMmnpFBvc4S5KvYOJfdNoU7SH0JOaK5s1HDIHdsWe%2BiB%2B1h%2BCP%2BBOw30GQxaqWkx%2FCOfDC3q22XOV01FEz9HhgXjj7%2FI9UuRl2Qq7ZLLj1jQ2bfuACog8HRRSHGqm1BOPo5js7iksUTjBroL0dUVZoV2rfEA6%2FIQZZaPuSFowBt7JtzRhvYPeoqplKBBxLHcmDwKtQCanAlDdVFEURqRNLMO%2BGd41&X-Amz-Signature=b6d2d8ee6b536dbc8a30c2df29c798e2c15f577e4515dd64b20b690bc38fb8de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU25A3OB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE75C0t53Hc%2FhickQ%2F%2BZgCBX0XdSW7oWKe9FMqrCTKyNAiAla3u3iI0iL9xHRlXtCqEFNiUZsSetsnX8NUEx4WmjfCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMy5Yq%2FLjnko2meuehKtwDIlifgKom%2FksJBptmZF9knDSaMIiJZL6k9fizORPIVXlS9QU3A4fgGNgzh808Ri7DmFAxtTWc7Z17%2BIzqoLHwJR6JgYhUedXw%2FBYwwLXyPDYkdhExOjdrrG7r5k2KzxtdZRXuu6OQCxFbVmkasuwYsc7Pc3qHgR81akFX0M16i%2BxQx%2Fc998porNMFNGqSg85tt0w%2B3hg6bkcLqanEypt0BnF3KvvW7AnHouRw6cB0%2BJ1wsFj4v3%2BBlZkATq9L5L24KX75%2BS1dRzbTyW%2B05HRC54H7n%2F6o89u6Rcp64%2B5GmBtuParmp%2Bc1HnnBLSu2jCyK4GJuhvRiACklr6RaQKNx%2F356at57SY%2Bot5eGKQiMMHaorDpi%2BMR9u2xTzdg%2BGUAUYBXMED7aq49rDnr2vp05kaTUpEuBsNZe0BgvzDmZiyqSlsn1ffsmFk9QGoNJgEpywgHq1BBgn%2B%2BH5agyIqDYc1CuJW7mJXWwOoJcVCZWkgUUUfSc9HUjushwszXxrXDJn2ghEWTLVjFJfiiexzuqY32bKoHar%2FrsiCIutAnpiiYQHH1tk%2Bm6%2FNO08F6yz3a7ZsurB64Vpijw225M55MkD32Dknkmif971lKzlx2Crg3dlubduWV1ssgmiUYw36nWvwY6pgHnMmnpFBvc4S5KvYOJfdNoU7SH0JOaK5s1HDIHdsWe%2BiB%2B1h%2BCP%2BBOw30GQxaqWkx%2FCOfDC3q22XOV01FEz9HhgXjj7%2FI9UuRl2Qq7ZLLj1jQ2bfuACog8HRRSHGqm1BOPo5js7iksUTjBroL0dUVZoV2rfEA6%2FIQZZaPuSFowBt7JtzRhvYPeoqplKBBxLHcmDwKtQCanAlDdVFEURqRNLMO%2BGd41&X-Amz-Signature=3cd1aad54a4e8d648a80dee7610217d3e2cd7fc68135e45135f13cd8c080f270&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
