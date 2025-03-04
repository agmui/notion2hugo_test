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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMF624K%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKaYL2YKxdnzh84qSV9VKotlF9eo9d5zPpwBe739HF8AIgCLtgXT5BqEQYD6Yd3n01ReFX2o97FNTmPmnGLAprKZsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6NztWLaSS1xebAMSrcA9faPxklo8lEGhncEyB46HIaxBJtWb9RqRIj%2Fl6yTC%2BfS%2Fx6Z2fpZMwB97LXXDGMBbn6xeago12OIq1utbngIwDp1WkdY5GFbgS29voOTozS26hs4flyaQ2aDu2mdVadBNjsQoKVz7bkhqxbgS%2FwpUgbixi8uyNmoagJk%2Bh8bJ2q9cO5U83cnvh6vcu5oVd1P%2B5S6s9HzYoqMrWUYxfAKOOb3rboUZDkwk%2BSeY0zDZHzO7aasu8qXrI99hHPXnbimQET%2BDKWGR6S6fZLjcQN50iPr0AEDMlQirq5Kio%2F8PXakd9rk8EEZ65D13vC12AqBb6tHGYbeI%2B%2BVH1AogPZ7mdOcln41meXHqDTglAUynAxPL1tVj0BhS9fX%2Fb6x7qTK0ug1dBgoq1TMWgmMhAeWwjYvADpV55icfBA4Hv5uduOCL9r5LOWj%2BkvuEXAZhlQVX%2BfclzwJTofxOF9GcGkkM3ISzFzBCSpLbAlo4U%2F2ILbp1kjWKX%2FM7W0Z0Jbr3eGH%2FKKQiFnNun4hmRCTGLA4T1y2IcEy5KQiSpgX5vBlgXkqQycm%2BI1%2BtnzBhImZAlwIQJ4tXUzdiltl%2BVveYDFPtMSKRHpX6J%2BOHN92i%2BVKuxAKp%2BD3bwkcZfDPqu2MPmdmr4GOqUBV5g%2B2oDJ%2BY%2BBemFq6oWgmiuun2ocz6txsY9VnSBibs%2FXxZYXxDgefY4rcduZDxwhXAioB8OonXOobRiUMNOnK6h21ewEC%2BRCHLqhJC5NEfv1t4lRk86gWn2kp2oV8TH2%2BpOHQGFBHli%2BEBQNKrPR0ux%2FvhVugFIePrHutwxx8bL%2Bx1rZWXKoZcGPxANkcKwTeuto3iMkbVXIPAZGvtOIoYis2blN&X-Amz-Signature=8763237f0cac0e2e4a79a06ebaaf0f90ae3c7ce07330d7e1788422a5a9addf21&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMF624K%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKaYL2YKxdnzh84qSV9VKotlF9eo9d5zPpwBe739HF8AIgCLtgXT5BqEQYD6Yd3n01ReFX2o97FNTmPmnGLAprKZsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6NztWLaSS1xebAMSrcA9faPxklo8lEGhncEyB46HIaxBJtWb9RqRIj%2Fl6yTC%2BfS%2Fx6Z2fpZMwB97LXXDGMBbn6xeago12OIq1utbngIwDp1WkdY5GFbgS29voOTozS26hs4flyaQ2aDu2mdVadBNjsQoKVz7bkhqxbgS%2FwpUgbixi8uyNmoagJk%2Bh8bJ2q9cO5U83cnvh6vcu5oVd1P%2B5S6s9HzYoqMrWUYxfAKOOb3rboUZDkwk%2BSeY0zDZHzO7aasu8qXrI99hHPXnbimQET%2BDKWGR6S6fZLjcQN50iPr0AEDMlQirq5Kio%2F8PXakd9rk8EEZ65D13vC12AqBb6tHGYbeI%2B%2BVH1AogPZ7mdOcln41meXHqDTglAUynAxPL1tVj0BhS9fX%2Fb6x7qTK0ug1dBgoq1TMWgmMhAeWwjYvADpV55icfBA4Hv5uduOCL9r5LOWj%2BkvuEXAZhlQVX%2BfclzwJTofxOF9GcGkkM3ISzFzBCSpLbAlo4U%2F2ILbp1kjWKX%2FM7W0Z0Jbr3eGH%2FKKQiFnNun4hmRCTGLA4T1y2IcEy5KQiSpgX5vBlgXkqQycm%2BI1%2BtnzBhImZAlwIQJ4tXUzdiltl%2BVveYDFPtMSKRHpX6J%2BOHN92i%2BVKuxAKp%2BD3bwkcZfDPqu2MPmdmr4GOqUBV5g%2B2oDJ%2BY%2BBemFq6oWgmiuun2ocz6txsY9VnSBibs%2FXxZYXxDgefY4rcduZDxwhXAioB8OonXOobRiUMNOnK6h21ewEC%2BRCHLqhJC5NEfv1t4lRk86gWn2kp2oV8TH2%2BpOHQGFBHli%2BEBQNKrPR0ux%2FvhVugFIePrHutwxx8bL%2Bx1rZWXKoZcGPxANkcKwTeuto3iMkbVXIPAZGvtOIoYis2blN&X-Amz-Signature=a1450d92cc4491a83cb36a301eb0f73125f5b0167aa607d0063c2907f4868752&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
