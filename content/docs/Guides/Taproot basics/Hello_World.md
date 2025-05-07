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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLNIEEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR7rFgwLdR4dRohSYcPmqtUiUwN4rxFNZb42pqCJXkUAiAPCYuTZbMDN5eqVuGULK9%2Fq%2BfhTCnrGxmxRsGo3oXcMir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMBTHahwcDF0%2BWofewKtwDKbZQajWbNq7fEkH7JHrRHhqTlDRnMseVQXpErfpo3sp7Day5dCtvYyS6u3FFjAWA4LfcpD84P5m2rziMBu5CcjFY%2B0hGkJ6Mx9A%2BhKa6ybDRepaYDmXJOrB3Qvnf%2B0l9gLo3M7ApAs5kxSa7zU2I8wSidk%2BxzRBzIOCQK7qzUZC9uneSiiESWEuVwqYoZcioEbqA7rE45UQLkoKCDUMCOQqdJfK%2B8k2M1aMR5g0Xq%2BkMHiRJpsg0w9lF%2BkC8WKzsk4bGSnCYNwZqa74OAX6lh7kfwT7HbSc0a1RUMTuy2rudcXiQ50sK42rgLttm5dp1L9ldMD%2FzrlxNQqRUmdGSCuoMbAZCPKlvX8STrJ%2Fn2YDCoDu%2FHFllBMXTLKjtEf9gxMY1cXj%2F%2BR186Uc0o%2FW1hM%2BF1rXY%2BoZarEZ6J%2FiVciDnbCLBpy8vEDkzfOBGZ4X0rb5MA9wTShGjS6zGvP7x9G8mRZaxBjt4VwjJVK4Dh%2FV6XscASBqt1EO2eM7VP%2FfpN%2B7FgfM2xlbqBi7GcDJSPqimm1gHl4pdou2y15sz8%2FpaIAOkuEHgDJiMPSZ9mTqebOhhNGCBYOXbo047ADJR6tzNU6b2UhAJiWnLkPDYz1HMOJTMq%2BMlLebHNB0w04jswAY6pgGpy%2BFQpYPmthZZ%2BVgMAZxAM%2FUjpThzoDDqsRRsksK8RFXCoo2M6wJr4GdBJ4n0U4VpBxJM78t2Oc9g9iYfCE0AoOww%2FWRmf4d3%2FY%2F26m%2FeqITH3e5Gq5uPiIw%2FmmXcDkz9%2FZ5YqjsFUcrGsKnRzlKyg0Y4E5jxDND7dNymB%2FkqVH0TmfTvI7F97vN7%2BV5gA7%2BkTkelwTcecEuIVi3Kq47OOd1DlrWW&X-Amz-Signature=8d83ff96e22f4e17b2841934c4d38c5f5caf234195bbdb80f60fed60da4cfbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CLNIEEZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR7rFgwLdR4dRohSYcPmqtUiUwN4rxFNZb42pqCJXkUAiAPCYuTZbMDN5eqVuGULK9%2Fq%2BfhTCnrGxmxRsGo3oXcMir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMBTHahwcDF0%2BWofewKtwDKbZQajWbNq7fEkH7JHrRHhqTlDRnMseVQXpErfpo3sp7Day5dCtvYyS6u3FFjAWA4LfcpD84P5m2rziMBu5CcjFY%2B0hGkJ6Mx9A%2BhKa6ybDRepaYDmXJOrB3Qvnf%2B0l9gLo3M7ApAs5kxSa7zU2I8wSidk%2BxzRBzIOCQK7qzUZC9uneSiiESWEuVwqYoZcioEbqA7rE45UQLkoKCDUMCOQqdJfK%2B8k2M1aMR5g0Xq%2BkMHiRJpsg0w9lF%2BkC8WKzsk4bGSnCYNwZqa74OAX6lh7kfwT7HbSc0a1RUMTuy2rudcXiQ50sK42rgLttm5dp1L9ldMD%2FzrlxNQqRUmdGSCuoMbAZCPKlvX8STrJ%2Fn2YDCoDu%2FHFllBMXTLKjtEf9gxMY1cXj%2F%2BR186Uc0o%2FW1hM%2BF1rXY%2BoZarEZ6J%2FiVciDnbCLBpy8vEDkzfOBGZ4X0rb5MA9wTShGjS6zGvP7x9G8mRZaxBjt4VwjJVK4Dh%2FV6XscASBqt1EO2eM7VP%2FfpN%2B7FgfM2xlbqBi7GcDJSPqimm1gHl4pdou2y15sz8%2FpaIAOkuEHgDJiMPSZ9mTqebOhhNGCBYOXbo047ADJR6tzNU6b2UhAJiWnLkPDYz1HMOJTMq%2BMlLebHNB0w04jswAY6pgGpy%2BFQpYPmthZZ%2BVgMAZxAM%2FUjpThzoDDqsRRsksK8RFXCoo2M6wJr4GdBJ4n0U4VpBxJM78t2Oc9g9iYfCE0AoOww%2FWRmf4d3%2FY%2F26m%2FeqITH3e5Gq5uPiIw%2FmmXcDkz9%2FZ5YqjsFUcrGsKnRzlKyg0Y4E5jxDND7dNymB%2FkqVH0TmfTvI7F97vN7%2BV5gA7%2BkTkelwTcecEuIVi3Kq47OOd1DlrWW&X-Amz-Signature=126b00f327f4c8f17221c3cc9b5c0ad5579df64dc4da07bdd5c9346e6d1e6153&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
