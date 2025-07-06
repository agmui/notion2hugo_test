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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JATVLMM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDZ4hV2zsf19RMGPs9rwQDhsLtzhyxJsrSPsLxa0d%2BOyAiAQKkMWtXlWV6KzW3nayb0Sf%2F9b3m%2FsyhMR9g2ZgWYu4Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMdIbgDtA831OeOvwbKtwDAF8z2SwmmRNH8XvQWAuKSf6eeNCdzb6S%2FJrKOVJDsBiwjIvo66WkvcMuIe0naL6WncEUsSYJk1hXPOZCdaCZMlJfOcrdMgycjsyCSA%2FnyLuogtdwlYwyWRh1%2BFaXW0p7MaOXNWKEDxhnZalTp%2FVD7t9PopaaJgpCYJj57B2nDEiZLaQ27TDzcIm9dHjXHrFr%2Fd2JELQRakKj7xiUpOviS8Snqqu5rsOCfEknarMb4YUGQPZos2kvLG4yvV7hGDEpWOqBkZyUePvQWfQmylZl6DsBAnOzgtfwQ%2Bj7hHLxxpyCc%2ByT7I75LwElz3bkRCdt%2BpvTItw3ci%2BQbonixDAkzQ55Ho4AgkEmU7Mt92Zk%2BJS24iigVd%2BabtXsDrT7UG4gkCxhfDXZ7qx7IUv2pNUooYNByBOM3TNJZkyZHn5OdWWwCRkHxbvZHacKuB2fpB0oeh5dSzN2Od8vNVJekd%2BbLlFy74AWNXq2gL0g0QAuRT1zLY3SfClWvEjtRh4oMubeIlEX1uTNiPmHmZTUMvcEfDimfNZf9lkGjn7ZNYrX4qnNTKSZTgiMySfHA7bxpoWwx5FJHuvya1BJz9Pln%2BVGjwD8FftLD6KgwzT596SCY5L4dwMiF%2F4aWhyXI%2B4wy42nwwY6pgFUXOj%2BzefZH4EeO4FJqHwV3O76Da9ik1FC1pLXSrkXUFzGlPAdTm9EXfRcOl%2FTxpeeIk9ZFT0llpPdO43SErvlypKiuRqUbmJ3TBR3ANiUZGvZdIdl1ioOg2Lz1nDlZtuxjfm7omKTt%2F%2B2WXJ%2BaO0dXaJ%2BeVLYa1fTrEZKrqHxLl3wf%2Bl7%2BYWaySYbtzbtvWz3HOOIqhnl5v7KxWbdplkCO43tQjUC&X-Amz-Signature=106ce036a636ba8b7f7a02b924d1ebc2801a096da62b2d4155375eca0839a533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JATVLMM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDZ4hV2zsf19RMGPs9rwQDhsLtzhyxJsrSPsLxa0d%2BOyAiAQKkMWtXlWV6KzW3nayb0Sf%2F9b3m%2FsyhMR9g2ZgWYu4Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMdIbgDtA831OeOvwbKtwDAF8z2SwmmRNH8XvQWAuKSf6eeNCdzb6S%2FJrKOVJDsBiwjIvo66WkvcMuIe0naL6WncEUsSYJk1hXPOZCdaCZMlJfOcrdMgycjsyCSA%2FnyLuogtdwlYwyWRh1%2BFaXW0p7MaOXNWKEDxhnZalTp%2FVD7t9PopaaJgpCYJj57B2nDEiZLaQ27TDzcIm9dHjXHrFr%2Fd2JELQRakKj7xiUpOviS8Snqqu5rsOCfEknarMb4YUGQPZos2kvLG4yvV7hGDEpWOqBkZyUePvQWfQmylZl6DsBAnOzgtfwQ%2Bj7hHLxxpyCc%2ByT7I75LwElz3bkRCdt%2BpvTItw3ci%2BQbonixDAkzQ55Ho4AgkEmU7Mt92Zk%2BJS24iigVd%2BabtXsDrT7UG4gkCxhfDXZ7qx7IUv2pNUooYNByBOM3TNJZkyZHn5OdWWwCRkHxbvZHacKuB2fpB0oeh5dSzN2Od8vNVJekd%2BbLlFy74AWNXq2gL0g0QAuRT1zLY3SfClWvEjtRh4oMubeIlEX1uTNiPmHmZTUMvcEfDimfNZf9lkGjn7ZNYrX4qnNTKSZTgiMySfHA7bxpoWwx5FJHuvya1BJz9Pln%2BVGjwD8FftLD6KgwzT596SCY5L4dwMiF%2F4aWhyXI%2B4wy42nwwY6pgFUXOj%2BzefZH4EeO4FJqHwV3O76Da9ik1FC1pLXSrkXUFzGlPAdTm9EXfRcOl%2FTxpeeIk9ZFT0llpPdO43SErvlypKiuRqUbmJ3TBR3ANiUZGvZdIdl1ioOg2Lz1nDlZtuxjfm7omKTt%2F%2B2WXJ%2BaO0dXaJ%2BeVLYa1fTrEZKrqHxLl3wf%2Bl7%2BYWaySYbtzbtvWz3HOOIqhnl5v7KxWbdplkCO43tQjUC&X-Amz-Signature=d647253422c36d3770c972df5bb3a80fc66c63a843e9114db9cb773720c19ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
