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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXLAZT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC7uZ3hrZKS51gbcrl8YQEDgQcvrCmPourZhAaNCxpFEQIhALg7MBtIAWHQouNlWJvmHEu%2FUf6Sjcw9jqm08LhLqKF8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxRiyoHZ8Q1%2Bf5hIcgq3ANjqqSDa2fGFXbU9yRK7gPgyfUTxd8jKrwHUTZbI%2F8UuF%2FZyTQCXAvUzaomc6eR7ch%2BoOcA2mm02kxqQCn5CAe19O00VnKoKhq9KFRv3uRUZgyQOQ4bGsyag7Gk66%2BT%2F36a2fZkK75yEkvFhiPAiJ7VvkKAbZDUdua5yy663CTqH38D%2Bd1OMRAq%2BwWM69u96XEztYk%2BhGkQp76fk8un4oZ7US%2BbWCG8W3XlEy%2B6nrbU0KEkoep18m0CKE2bhXzTvUGAyxBa1M8%2FA4ufD45x9cMkgBZgOE2lCyyetujigGXJwrJjMjS2gbzeSsq1bx%2F5CYrumPPO6VHTahCsOTsWbW7ZFXzYM8z5L4EJTkXLrvlq36snE1c78kdt9Ot0y8i39xSrZAkBvjbksV5MtS2PHT1RLl04CKMLlCyS6w6kvM6smp9GR%2BCcadCTk%2FUFU2kPz3OMp2GhkCCc9SVYv1DoaLo6SOFr7p3z3N3Ju69MJFxQVvBGtPeLEYnoz%2B2263aPb3fNvahk1mSSZYVCk6DJ4LABI%2BrNuvAb491QdxLYD8xYBhVfal15I2stjhfmfD15T30JQb7gcbbslJsl%2B6uJoJOqsa%2F9hSNNtxR0t%2BgiIihfMtbAedXovYFUkjds0zDqut7ABjqkAXEDEKBXFcKUmzjtE7TBAKXgnxYNrg8qakaz9V43taq%2BASfHOs1FVpI8mpj7yyjUlUGJcxQjSJG3p6lHYc18Wo5%2FPIADAgs34NYsMD%2FBtpxGZhQMZSUXHEydljZRHDqV6nm%2Fk6qIAsMgVi9YnGE82NXl%2FxWlYJxzsQA0XceTvXxtnv4VYfjF43%2BYzJhUi9bMczitbIviFcjBM9981jGFHTyuowRr&X-Amz-Signature=22e23f4bab51bf56b58a1c41437aa10887802375cda933aab15e3302fafd81de&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXXLAZT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC7uZ3hrZKS51gbcrl8YQEDgQcvrCmPourZhAaNCxpFEQIhALg7MBtIAWHQouNlWJvmHEu%2FUf6Sjcw9jqm08LhLqKF8Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxRiyoHZ8Q1%2Bf5hIcgq3ANjqqSDa2fGFXbU9yRK7gPgyfUTxd8jKrwHUTZbI%2F8UuF%2FZyTQCXAvUzaomc6eR7ch%2BoOcA2mm02kxqQCn5CAe19O00VnKoKhq9KFRv3uRUZgyQOQ4bGsyag7Gk66%2BT%2F36a2fZkK75yEkvFhiPAiJ7VvkKAbZDUdua5yy663CTqH38D%2Bd1OMRAq%2BwWM69u96XEztYk%2BhGkQp76fk8un4oZ7US%2BbWCG8W3XlEy%2B6nrbU0KEkoep18m0CKE2bhXzTvUGAyxBa1M8%2FA4ufD45x9cMkgBZgOE2lCyyetujigGXJwrJjMjS2gbzeSsq1bx%2F5CYrumPPO6VHTahCsOTsWbW7ZFXzYM8z5L4EJTkXLrvlq36snE1c78kdt9Ot0y8i39xSrZAkBvjbksV5MtS2PHT1RLl04CKMLlCyS6w6kvM6smp9GR%2BCcadCTk%2FUFU2kPz3OMp2GhkCCc9SVYv1DoaLo6SOFr7p3z3N3Ju69MJFxQVvBGtPeLEYnoz%2B2263aPb3fNvahk1mSSZYVCk6DJ4LABI%2BrNuvAb491QdxLYD8xYBhVfal15I2stjhfmfD15T30JQb7gcbbslJsl%2B6uJoJOqsa%2F9hSNNtxR0t%2BgiIihfMtbAedXovYFUkjds0zDqut7ABjqkAXEDEKBXFcKUmzjtE7TBAKXgnxYNrg8qakaz9V43taq%2BASfHOs1FVpI8mpj7yyjUlUGJcxQjSJG3p6lHYc18Wo5%2FPIADAgs34NYsMD%2FBtpxGZhQMZSUXHEydljZRHDqV6nm%2Fk6qIAsMgVi9YnGE82NXl%2FxWlYJxzsQA0XceTvXxtnv4VYfjF43%2BYzJhUi9bMczitbIviFcjBM9981jGFHTyuowRr&X-Amz-Signature=4bf1310dabe381c0207882c49bf18bfab0deba9dcbf74bc45a2d96f1add195a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
