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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXWVZX4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo%2FlrBbhkwWUGWGQ9ooG%2F7GwZ7%2F6C37la6tod6nFWcfAiEAjehAxlMyARJYzEM%2F%2BVGrMdyLYJgz3LU%2BZElh8rPKWwIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVbc2VD5sh%2FZYT4CrcA0b6lBjg%2BhJLKULcbu9FnvT64LcwUfqabH6pfJ5LQMyvOkM9DDY86LgrqZtfL4YE24uqADJVUnnhNxlaz%2FiHsBC4NPChfAvbf9dL6U62oi0Ev3fbuLj2zlgdH3piYQRe0gDVwedjXZrhbd6qBlp2od81dQdc4LaynXKqPADm%2FzSD1b9Mlk%2FOA1wRfXRsjkFTWzovkJPkuWlYgqebSvnzb0gragcTrgoMdR5Bt9d8P4ICxCsbUj%2BRcXJrYsPc3GMOQK1syjxGfPGzOHnprY6V6LbGLo99y%2F7wpd5I7qIj3FOJsMLDGitQ0E2Hdkmja6%2F7BgEFocEEIl6tu7FO%2B4IH9op8b3P0bnyPltc1YXZljM%2F8NY%2FK3U7ovh5Fd9y%2FlEBy84CCPQ6jTBIfOJCCKFZYm6FZDtYMxplGfTRSpg5Rn990ucWy3v6ElMOzshk2wcVJPXAQTfcmdRyyhVwLQo3abw1dUmuwNaNcP%2B66fYlq6E%2BdY6dY4RG4H6x4qzYMRxB3SxP4yI%2F7i9PokQ8fku9vpz9LtKfinKSUmHVG3RsnUH%2FEF0HJziubiwdKg1KwoYrV1IG3ofPtGW3wu0i3kUCi3ZU0IZei6RNPk1Sj2FEC4zPbBzLBvx1XtfDs4x1xMIeH1L4GOqUBAZ5iuQtkBf78EcTMPH23TTFpDzryYLwBew6ntsykDMfWSdF%2Bw2It3bhegAuyNHoLWSkKTLUZpmQ1LXevkGk6tMScL7A5bPO%2FgUnlm7uV%2FOr9kEyFCOY0b6HzuBknav%2B%2FN7jL0y0zL5CB7WT%2FcJNbtC9%2BqqaVffb3N%2B%2BIqOtqNSU8%2BzH7Mk7uJ2rrcfzDZX%2FDPGijw12ksJ7oEu7wR5imfmwESC%2FL&X-Amz-Signature=a9687852cd4eb7fa2ebc62f00866b109c887b06871c825de761a28ac389bd8a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXWVZX4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEo%2FlrBbhkwWUGWGQ9ooG%2F7GwZ7%2F6C37la6tod6nFWcfAiEAjehAxlMyARJYzEM%2F%2BVGrMdyLYJgz3LU%2BZElh8rPKWwIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEVbc2VD5sh%2FZYT4CrcA0b6lBjg%2BhJLKULcbu9FnvT64LcwUfqabH6pfJ5LQMyvOkM9DDY86LgrqZtfL4YE24uqADJVUnnhNxlaz%2FiHsBC4NPChfAvbf9dL6U62oi0Ev3fbuLj2zlgdH3piYQRe0gDVwedjXZrhbd6qBlp2od81dQdc4LaynXKqPADm%2FzSD1b9Mlk%2FOA1wRfXRsjkFTWzovkJPkuWlYgqebSvnzb0gragcTrgoMdR5Bt9d8P4ICxCsbUj%2BRcXJrYsPc3GMOQK1syjxGfPGzOHnprY6V6LbGLo99y%2F7wpd5I7qIj3FOJsMLDGitQ0E2Hdkmja6%2F7BgEFocEEIl6tu7FO%2B4IH9op8b3P0bnyPltc1YXZljM%2F8NY%2FK3U7ovh5Fd9y%2FlEBy84CCPQ6jTBIfOJCCKFZYm6FZDtYMxplGfTRSpg5Rn990ucWy3v6ElMOzshk2wcVJPXAQTfcmdRyyhVwLQo3abw1dUmuwNaNcP%2B66fYlq6E%2BdY6dY4RG4H6x4qzYMRxB3SxP4yI%2F7i9PokQ8fku9vpz9LtKfinKSUmHVG3RsnUH%2FEF0HJziubiwdKg1KwoYrV1IG3ofPtGW3wu0i3kUCi3ZU0IZei6RNPk1Sj2FEC4zPbBzLBvx1XtfDs4x1xMIeH1L4GOqUBAZ5iuQtkBf78EcTMPH23TTFpDzryYLwBew6ntsykDMfWSdF%2Bw2It3bhegAuyNHoLWSkKTLUZpmQ1LXevkGk6tMScL7A5bPO%2FgUnlm7uV%2FOr9kEyFCOY0b6HzuBknav%2B%2FN7jL0y0zL5CB7WT%2FcJNbtC9%2BqqaVffb3N%2B%2BIqOtqNSU8%2BzH7Mk7uJ2rrcfzDZX%2FDPGijw12ksJ7oEu7wR5imfmwESC%2FL&X-Amz-Signature=de9c263a0ce8724aba4359e860b04b1cb876f1b4c3e666cfcada2963f0ecd8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
