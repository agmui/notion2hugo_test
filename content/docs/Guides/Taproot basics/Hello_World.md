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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDNDTML%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCHQxLlx2UA5rAm8i8ZWSPKIWXnj5RACHxNw1CKiYMtEAIhAKY0rASeo%2F%2F56jg8vGwp1v1gwGCibRC7ZsNn3GOm5mKeKv8DCCgQABoMNjM3NDIzMTgzODA1Igwa7Y%2FxZZyMw%2BldpQsq3AP38l5bX9vUFzXJTmoXvqg7NsPl6fZ1d3KjBJJkxN2biy%2FwgZL2vBLLBYr19JVV%2FGoC6YrzHF5n7%2FjHAvfo1pnhSLdlHHRk6qnPddMINuiXtK9r6Zpbo0u%2FuqYyEAsIn784eX3PViudPCJu3OHdkeQflmT31k2NBc7UpAcNNz13ASrT6t9a59vgNk9c1kEosk81zbsnppsyKwbt94HbQW4Zc9bJvbKj9K9GBRnp6ZGBejOAzidjJtQMWpl9b%2Bh3utGU52o6TlHEb5sJtseX%2Bbm%2F%2FIbogMqwIjoEbM1UOKtXHzcWEyPvKC0LhAywyY%2B8pXHSu2lI%2FX7i9GoR7wsrBvpT37SL4jEteiTH1rnyeqOE%2BMx9%2BVTE6YB3uO9Cc94BPV0hzHt%2FTE75pKMqD%2F1uEp1rnMYh3U34dEQ97%2FIbiyyIb2M6%2FfILlmXLeDMcYQhXFOl%2Bx3zzrLbUY5aub8CLGwMWNwnFtOBCfr%2FAbZsGpFwWBkiSOZQQmUzLOaiy80yaRzTiGeDBnvneh3ErYC%2F1rwUwHL03ETYvLK2n4F5Axvs8ltEzVJSlg%2BERGP%2F8Ba3%2F3s6zcrkrAHc1eN%2FJZ6lpUP0GByRiMxb8PgpO9Ey9M1r%2BakQTsYmUWuqBlGmiWTDV5f%2FBBjqkAQb8CUn52W1adkff3ywc5oFEUIrWsOY%2FNdNDjCgniNnUcASw66r9M1gWJqoTnWUYHf9N3xX3xTAOKz0w4J3L2QOEo2Jm5UPKnnDSbvKluiGRgU%2FALgFWQmgTqr%2F%2B01U67zIOpnlJqpWoq0yu9XkZE1lbnAsRj68RJjc%2BOlqn%2FxPOJrB4ygA61RMAmR73EyPCNkgUYEYmsvsDPPCLlCku4jUrHrO2&X-Amz-Signature=0efe3d9fe4fc754fb90fbe5699edba73c680dbd404a78fdae30ecd3f67e7888b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDNDTML%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCHQxLlx2UA5rAm8i8ZWSPKIWXnj5RACHxNw1CKiYMtEAIhAKY0rASeo%2F%2F56jg8vGwp1v1gwGCibRC7ZsNn3GOm5mKeKv8DCCgQABoMNjM3NDIzMTgzODA1Igwa7Y%2FxZZyMw%2BldpQsq3AP38l5bX9vUFzXJTmoXvqg7NsPl6fZ1d3KjBJJkxN2biy%2FwgZL2vBLLBYr19JVV%2FGoC6YrzHF5n7%2FjHAvfo1pnhSLdlHHRk6qnPddMINuiXtK9r6Zpbo0u%2FuqYyEAsIn784eX3PViudPCJu3OHdkeQflmT31k2NBc7UpAcNNz13ASrT6t9a59vgNk9c1kEosk81zbsnppsyKwbt94HbQW4Zc9bJvbKj9K9GBRnp6ZGBejOAzidjJtQMWpl9b%2Bh3utGU52o6TlHEb5sJtseX%2Bbm%2F%2FIbogMqwIjoEbM1UOKtXHzcWEyPvKC0LhAywyY%2B8pXHSu2lI%2FX7i9GoR7wsrBvpT37SL4jEteiTH1rnyeqOE%2BMx9%2BVTE6YB3uO9Cc94BPV0hzHt%2FTE75pKMqD%2F1uEp1rnMYh3U34dEQ97%2FIbiyyIb2M6%2FfILlmXLeDMcYQhXFOl%2Bx3zzrLbUY5aub8CLGwMWNwnFtOBCfr%2FAbZsGpFwWBkiSOZQQmUzLOaiy80yaRzTiGeDBnvneh3ErYC%2F1rwUwHL03ETYvLK2n4F5Axvs8ltEzVJSlg%2BERGP%2F8Ba3%2F3s6zcrkrAHc1eN%2FJZ6lpUP0GByRiMxb8PgpO9Ey9M1r%2BakQTsYmUWuqBlGmiWTDV5f%2FBBjqkAQb8CUn52W1adkff3ywc5oFEUIrWsOY%2FNdNDjCgniNnUcASw66r9M1gWJqoTnWUYHf9N3xX3xTAOKz0w4J3L2QOEo2Jm5UPKnnDSbvKluiGRgU%2FALgFWQmgTqr%2F%2B01U67zIOpnlJqpWoq0yu9XkZE1lbnAsRj68RJjc%2BOlqn%2FxPOJrB4ygA61RMAmR73EyPCNkgUYEYmsvsDPPCLlCku4jUrHrO2&X-Amz-Signature=f87ab455a8634ee36ac0a329008908a5a1e545f1499f37de393f24332dd41c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
