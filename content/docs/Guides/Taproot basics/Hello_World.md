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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3KD7FD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BV9BgeMf745Tpkh9kq1cRO18q2IczAo3Msk3QSECkHAIhAIQ3spWN4CAoFHgEDL5Kv4gbKGn2h578Gopp6yReoBAKKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWqnTJntEYlKbwPsYq3AN2ERbdkSQCdEKJogDzJxlA5EJllAoTG0boHNcXksRtEzne%2Bh9d24uToz3omG1SpvtnemfqzV36M9QDrnjcCdltvmyC8lqge0%2FaZVrAzLXzKsEyI%2B4mIJH%2B59DOD7TeSaprdBFGzD8%2FPQGUD2lZKvZo4FPNRHoIAyvmK6g52Z6G56dFIoV%2Fim9WDmYOIbezaRsqp9zCf57ReKzafdI9WqoKmvU5CrufUjxWyWAL7nu%2FJ2TXy2nLKCHNlnwLAdR8Fpm%2BqzjZr1vAfKjmuuT6NMF%2FEeL%2BDxGDHhdmQrMKwIN5ZLk5Q3wDYS8yXswALUp1FxPTYoKjm5svRdAVKxGxFhVtXOj8TaPmE7hBRRCP5EBuwt%2FpGf9vF2PPawerOP%2FKzViTgX%2BPcLsgmjsUGYYrGFpkeNpMSiGsl1yi6V%2BKOL5v1xWzLBrbPu12EIk%2Bl90nH4rv2eXGiwduvpDf4UWiu8qyUGFpH4jcIraEATlaiBGR%2FfKbTzpXvo4HfPx7oUTcSvB1dHHT8L9CCZC5F2R2iwLU%2FsR1BrbKh9hgvNaDz9vbPoFLvnnUB4InH%2FlAqPppm1fHPaZnxo%2FNblooO%2FYn0C%2BCHrpLodHTjo1LII7U788XCyjXaMr0jJEIyZROjjCW%2BqW9BjqkASefVKzJNHMAXJiAAbnIKRjsfR9S62ew0ZmWY1dCfSA%2BcPvkgqZsrOC5uO7o92ULowkt1Xz%2B4LedivmWuyZI31XnZgZKWWiJaZy8JBsls59zjKX075Ig0g0nOyoA2Xcp3kXN4OCdwloAuUt%2BfW9J91R7p7%2FkElMg0JrbbiXQ54U0FcJ57A77kR3BeZ6rfPOl1rSfNRX1jZL1k5UuvCUStKIc1guQ&X-Amz-Signature=2ffc04392c085f71b7d2f7518f6e66b667b8816742e748f878850b2dff61f644&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3KD7FD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BV9BgeMf745Tpkh9kq1cRO18q2IczAo3Msk3QSECkHAIhAIQ3spWN4CAoFHgEDL5Kv4gbKGn2h578Gopp6yReoBAKKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWqnTJntEYlKbwPsYq3AN2ERbdkSQCdEKJogDzJxlA5EJllAoTG0boHNcXksRtEzne%2Bh9d24uToz3omG1SpvtnemfqzV36M9QDrnjcCdltvmyC8lqge0%2FaZVrAzLXzKsEyI%2B4mIJH%2B59DOD7TeSaprdBFGzD8%2FPQGUD2lZKvZo4FPNRHoIAyvmK6g52Z6G56dFIoV%2Fim9WDmYOIbezaRsqp9zCf57ReKzafdI9WqoKmvU5CrufUjxWyWAL7nu%2FJ2TXy2nLKCHNlnwLAdR8Fpm%2BqzjZr1vAfKjmuuT6NMF%2FEeL%2BDxGDHhdmQrMKwIN5ZLk5Q3wDYS8yXswALUp1FxPTYoKjm5svRdAVKxGxFhVtXOj8TaPmE7hBRRCP5EBuwt%2FpGf9vF2PPawerOP%2FKzViTgX%2BPcLsgmjsUGYYrGFpkeNpMSiGsl1yi6V%2BKOL5v1xWzLBrbPu12EIk%2Bl90nH4rv2eXGiwduvpDf4UWiu8qyUGFpH4jcIraEATlaiBGR%2FfKbTzpXvo4HfPx7oUTcSvB1dHHT8L9CCZC5F2R2iwLU%2FsR1BrbKh9hgvNaDz9vbPoFLvnnUB4InH%2FlAqPppm1fHPaZnxo%2FNblooO%2FYn0C%2BCHrpLodHTjo1LII7U788XCyjXaMr0jJEIyZROjjCW%2BqW9BjqkASefVKzJNHMAXJiAAbnIKRjsfR9S62ew0ZmWY1dCfSA%2BcPvkgqZsrOC5uO7o92ULowkt1Xz%2B4LedivmWuyZI31XnZgZKWWiJaZy8JBsls59zjKX075Ig0g0nOyoA2Xcp3kXN4OCdwloAuUt%2BfW9J91R7p7%2FkElMg0JrbbiXQ54U0FcJ57A77kR3BeZ6rfPOl1rSfNRX1jZL1k5UuvCUStKIc1guQ&X-Amz-Signature=30552660c9810780bd725223ccb8858fc4f72fbb9fb62712c3340e700e906067&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
