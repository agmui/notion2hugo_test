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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAGL657%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICXWUdxhTXW2Wmy0z4PoGAJCPjEYg%2FMDlT8gVA1XMffNAiB%2F3vJR8w2miB7v7qFxSBFr7LfLY9veqsnJQz02O4PH9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4oKucudqCUewofuKtwDb0Jf692M4VojepDZXh84bA7LjBWI025fB9rVHPNUsGRzX0O9wjKqJmXLrABdPwrPAd3zqva9%2FJ1qmsiFM6q1V6wZAwxzlK7J8Yfg9dUpOUCzIohRmf2ZZUgVqDodZQ2TMaVoZLspTNPKhKw7Z4dS5o0KoZ69STo9gv6aMj8ffsncTOEA1P3CNNEYB153KKe2msabXrUTk6rg4ziutgC6mlIhYYOaCnT7BBOwuitdnlkYYW39NIe0ntmMrcb6dwXvMY%2Fj6olnU0MrmnMdUEtNDnNdCk%2BTSqS8ej5IlfB1DqsE7CPiEVr7S10qIFrdnud9jgqNMTpO4ov1y30nOcuHrGaJCC0W9gQHIpNdpIkRMkM5aX11RPLC2X7sHmDeVFTVCF4m6ZQzmQd3SqE6znAyYKhHvxH%2FtxTZXpVO%2F6U4Df9YB47zVzU2Jjdj%2B2lBe%2BklFeeMRHUnWnUEkeYf%2BWDplRk84Lgyzb48EP8PJlCsGuOwAMFLbcVKmg%2F9tgaXoYLohjckQaGH%2BlZUJb4x5YoP5c9aNSmn3dJ0hlvmeuAmhAJ9fxE9oIbZO%2FUc2nIMrdrSUw45Wz5UNXTNYHfKBJBkgMs1VIyWeGT7y1TqWxChPdrkbxVP9%2F6N11RKEJkw1OimwgY6pgGtwAfxRvT3wxLKWbV0nw63C3Fc2KCoKrqsy8yR9Ho%2BkvxfVXiI1Y8896TOcjjhVzKvh0seBDtKLUuTFTArJcBrbbDdMV%2FKyfTbc3HkpsFG90niiA4yLEcOxVtkl%2B%2Fk4QQ%2B3I4K01FPxxbZw15M%2BqItOQ9%2BKwHqnYOchyniJJyZaBwCyQJbzGI9RkCDHx4CYjvQ%2Ft5s5mGngm6iFHJmWJRD5fIiFjdo&X-Amz-Signature=eba6827fd77c9911e5b4139fb55a3320ca921c7a76318ba9117854047ce0bea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAGL657%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICXWUdxhTXW2Wmy0z4PoGAJCPjEYg%2FMDlT8gVA1XMffNAiB%2F3vJR8w2miB7v7qFxSBFr7LfLY9veqsnJQz02O4PH9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4oKucudqCUewofuKtwDb0Jf692M4VojepDZXh84bA7LjBWI025fB9rVHPNUsGRzX0O9wjKqJmXLrABdPwrPAd3zqva9%2FJ1qmsiFM6q1V6wZAwxzlK7J8Yfg9dUpOUCzIohRmf2ZZUgVqDodZQ2TMaVoZLspTNPKhKw7Z4dS5o0KoZ69STo9gv6aMj8ffsncTOEA1P3CNNEYB153KKe2msabXrUTk6rg4ziutgC6mlIhYYOaCnT7BBOwuitdnlkYYW39NIe0ntmMrcb6dwXvMY%2Fj6olnU0MrmnMdUEtNDnNdCk%2BTSqS8ej5IlfB1DqsE7CPiEVr7S10qIFrdnud9jgqNMTpO4ov1y30nOcuHrGaJCC0W9gQHIpNdpIkRMkM5aX11RPLC2X7sHmDeVFTVCF4m6ZQzmQd3SqE6znAyYKhHvxH%2FtxTZXpVO%2F6U4Df9YB47zVzU2Jjdj%2B2lBe%2BklFeeMRHUnWnUEkeYf%2BWDplRk84Lgyzb48EP8PJlCsGuOwAMFLbcVKmg%2F9tgaXoYLohjckQaGH%2BlZUJb4x5YoP5c9aNSmn3dJ0hlvmeuAmhAJ9fxE9oIbZO%2FUc2nIMrdrSUw45Wz5UNXTNYHfKBJBkgMs1VIyWeGT7y1TqWxChPdrkbxVP9%2F6N11RKEJkw1OimwgY6pgGtwAfxRvT3wxLKWbV0nw63C3Fc2KCoKrqsy8yR9Ho%2BkvxfVXiI1Y8896TOcjjhVzKvh0seBDtKLUuTFTArJcBrbbDdMV%2FKyfTbc3HkpsFG90niiA4yLEcOxVtkl%2B%2Fk4QQ%2B3I4K01FPxxbZw15M%2BqItOQ9%2BKwHqnYOchyniJJyZaBwCyQJbzGI9RkCDHx4CYjvQ%2Ft5s5mGngm6iFHJmWJRD5fIiFjdo&X-Amz-Signature=7c9765f11150d5b3623b75ba4b4a2e00f327544921b10124d8457bd317ea0815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
