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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QNPLJA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrH0V9sZxu1mUUrlM0tdEpkjZGqFF%2FDdp2oVij5eK6HwIhAPLrS1qzWVbyWFlZfWrZefJj5wHc4hKOmvHOM7qzslt9KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY%2FpYJ7NjAeRsQp9wq3APex67sTyHVzmdailkCAbEI6hYbug%2BOJPeaIQUM0vuK8aBcv7UfSH3TUskY4K2VouIWcjw%2BWEnNureZTF8asVTue%2BnlOJXXP%2B4ZOXWL%2B4WglESKq2PLPQyAs6w4Tow7YH1h0l1u%2Flp2wnzQwpeKHqyUQB80nrdkylPn1Q8cMEs88PdFgeVpKfbRTHhTM2dVNpgqr03CiO0jEzcUD2SkHcY0MRlrLAwjdc%2BnPEEr6VsFF%2FjgGI1adHPDKKStTps4cji7G7rWZvbAA8HyhfAxUjKPcdecx7LlCk5fE4GDAh%2Fm8hg0gH1CXoddTTQP7Li8bN%2FXnXtw%2FQWo5aJojh9E03dmT9MP553KeicP33LZJa6eZXoNFDs9NmX3k7MfHhaXStrVhO36iJ67LDez3GlCJ7GGctamDYgQsTm9PbqC8Is0M00uvImbdQpze3bA0i159OSIoTscRTkrk907Pe5sRCXmKH0dmQJihU8AO9naR%2FFn4bNhpincrlSBtT59D%2BnELTQv0bhdOlRO2lOrkEHzB8PeGpm7yT6jssIkHA7oaIOh5ykgdcGFoThk1JWP%2F3B1ndG9hL4dmKojUERGxR6ZLxjFwyxtq%2B9Oka2pEkxT9IPy1DR8XbMkR96YeWEnxjDgnfy8BjqkAdpkzhQ8CfiB4QHpkgYFn4pbNQfIsk3MANM4eHfgRHmzBWYsP6WvnXbFllm1xovBtfeRrrFOJjAAfqhHWJpXTD7oDZ63ByKChv%2FnDsUInfLX64%2F%2BoH8hOBaTRIcmVN52TwT50CI0YJzxk2H4SM5pm29K9O0mAD%2B68dIuP1NKa%2FaxL4zl6P0wB6yOydqG8%2F8nam%2FcT9zQr%2F4tJrpVfoLFdNkzmeSB&X-Amz-Signature=ba98e94c1607615ce4d1485db0dec7ff5ba485eeb9e508acdfc5181cd3926a20&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635QNPLJA%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrH0V9sZxu1mUUrlM0tdEpkjZGqFF%2FDdp2oVij5eK6HwIhAPLrS1qzWVbyWFlZfWrZefJj5wHc4hKOmvHOM7qzslt9KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY%2FpYJ7NjAeRsQp9wq3APex67sTyHVzmdailkCAbEI6hYbug%2BOJPeaIQUM0vuK8aBcv7UfSH3TUskY4K2VouIWcjw%2BWEnNureZTF8asVTue%2BnlOJXXP%2B4ZOXWL%2B4WglESKq2PLPQyAs6w4Tow7YH1h0l1u%2Flp2wnzQwpeKHqyUQB80nrdkylPn1Q8cMEs88PdFgeVpKfbRTHhTM2dVNpgqr03CiO0jEzcUD2SkHcY0MRlrLAwjdc%2BnPEEr6VsFF%2FjgGI1adHPDKKStTps4cji7G7rWZvbAA8HyhfAxUjKPcdecx7LlCk5fE4GDAh%2Fm8hg0gH1CXoddTTQP7Li8bN%2FXnXtw%2FQWo5aJojh9E03dmT9MP553KeicP33LZJa6eZXoNFDs9NmX3k7MfHhaXStrVhO36iJ67LDez3GlCJ7GGctamDYgQsTm9PbqC8Is0M00uvImbdQpze3bA0i159OSIoTscRTkrk907Pe5sRCXmKH0dmQJihU8AO9naR%2FFn4bNhpincrlSBtT59D%2BnELTQv0bhdOlRO2lOrkEHzB8PeGpm7yT6jssIkHA7oaIOh5ykgdcGFoThk1JWP%2F3B1ndG9hL4dmKojUERGxR6ZLxjFwyxtq%2B9Oka2pEkxT9IPy1DR8XbMkR96YeWEnxjDgnfy8BjqkAdpkzhQ8CfiB4QHpkgYFn4pbNQfIsk3MANM4eHfgRHmzBWYsP6WvnXbFllm1xovBtfeRrrFOJjAAfqhHWJpXTD7oDZ63ByKChv%2FnDsUInfLX64%2F%2BoH8hOBaTRIcmVN52TwT50CI0YJzxk2H4SM5pm29K9O0mAD%2B68dIuP1NKa%2FaxL4zl6P0wB6yOydqG8%2F8nam%2FcT9zQr%2F4tJrpVfoLFdNkzmeSB&X-Amz-Signature=a6a4122114062d10894dc37938b6d3bf054e049e3a430944008266498ee2ce15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
