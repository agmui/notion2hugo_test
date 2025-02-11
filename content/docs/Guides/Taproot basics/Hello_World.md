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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TU5SG7G%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzu50%2BLyfOLe%2FeYTED4sQfWMfL2svNt%2BtUlT9MIaO3qwIhAPw%2FKYaDUgwqV4HzzFE0rKBK2CZzaBHp%2BtanP5XsaI30KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrOYYkXr9rXmjnykq3AOrjurSJdzEIkL6IbQULwLuBhoio%2Bjdhw1pL%2FXb9WaTavxbW7CkBeko3o8gTfWeRThGoHNX3C%2BWAEsryaAn49U5KoSVhQmAsrFAQhd84tf0RvDFZDRDreKxLXwNfV3bDmGB8hfmNeDIC4ntSApyme%2F1bNZtC3pLWXgihoklazMuGtJHzHXqUZLRSnUFnRDOsfw%2FtwCeIc0wxwYLdgZlx4h4LTjOYqSjbS0yDEMUBm5AtKpSS2EESju4RfGjFw41nbxGfpELpEsjnE1CAm4uE0xbCrtnQV5np%2BhAOLNbCa%2FFJgWwU22zdC4DRsMr3n543TUPvZlM9e0etFARR%2By794JXFe4i4oU9PGWR6Fvh5ek0Rae%2BZTQIFlOhK3G6r5ZJl5o6SSDHItyd%2BQQ5YwPXLAHL5qMA2OB%2BNCGB3spP7HB%2FavETjOMlw1fVgI2NYGMFuF2ydHEiWn79keM%2FtUK8%2FcslfwLcu1SsZft4cZEyv%2FuvNRSigVqL5%2FkisYs07yF9EQnKcONE3NQNewgQ1kDysyIrp1eP8datiJRZQ2t%2FYleFElgynmnJC7UJgcAn6i9H2AoFNBk%2FFiUkmtAwKfJ5xqPRgxMhgmjK6xm9W3xrdYoHtRWrg%2FED3qklT2hIyDDHyK69BjqkAafrnAAhxDvq575Zd1ByGjHc2eMQv6VlaiNeh0%2BNfpjKiFgSXhrB3uM%2FxZXLsPN2eFkrQBpFxp6tDvS7LfGtPDe68gFuVEqw6GjPRGp0I8WTmfrJjA3swrCCLI0FWfulqYpoQl%2BAB13jQjoinnBgvUZEX8kjLkwbVjObbMQHTeiZ8Ui8Gqh7TljpC3WK3%2FHscdZmyBsTykFSR60%2B7ShwZTNapWE%2B&X-Amz-Signature=360a22eacdec7b193553fe55d83f1695b8af510ac1141de753e8ca4bd3ba1bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TU5SG7G%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzu50%2BLyfOLe%2FeYTED4sQfWMfL2svNt%2BtUlT9MIaO3qwIhAPw%2FKYaDUgwqV4HzzFE0rKBK2CZzaBHp%2BtanP5XsaI30KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzrOYYkXr9rXmjnykq3AOrjurSJdzEIkL6IbQULwLuBhoio%2Bjdhw1pL%2FXb9WaTavxbW7CkBeko3o8gTfWeRThGoHNX3C%2BWAEsryaAn49U5KoSVhQmAsrFAQhd84tf0RvDFZDRDreKxLXwNfV3bDmGB8hfmNeDIC4ntSApyme%2F1bNZtC3pLWXgihoklazMuGtJHzHXqUZLRSnUFnRDOsfw%2FtwCeIc0wxwYLdgZlx4h4LTjOYqSjbS0yDEMUBm5AtKpSS2EESju4RfGjFw41nbxGfpELpEsjnE1CAm4uE0xbCrtnQV5np%2BhAOLNbCa%2FFJgWwU22zdC4DRsMr3n543TUPvZlM9e0etFARR%2By794JXFe4i4oU9PGWR6Fvh5ek0Rae%2BZTQIFlOhK3G6r5ZJl5o6SSDHItyd%2BQQ5YwPXLAHL5qMA2OB%2BNCGB3spP7HB%2FavETjOMlw1fVgI2NYGMFuF2ydHEiWn79keM%2FtUK8%2FcslfwLcu1SsZft4cZEyv%2FuvNRSigVqL5%2FkisYs07yF9EQnKcONE3NQNewgQ1kDysyIrp1eP8datiJRZQ2t%2FYleFElgynmnJC7UJgcAn6i9H2AoFNBk%2FFiUkmtAwKfJ5xqPRgxMhgmjK6xm9W3xrdYoHtRWrg%2FED3qklT2hIyDDHyK69BjqkAafrnAAhxDvq575Zd1ByGjHc2eMQv6VlaiNeh0%2BNfpjKiFgSXhrB3uM%2FxZXLsPN2eFkrQBpFxp6tDvS7LfGtPDe68gFuVEqw6GjPRGp0I8WTmfrJjA3swrCCLI0FWfulqYpoQl%2BAB13jQjoinnBgvUZEX8kjLkwbVjObbMQHTeiZ8Ui8Gqh7TljpC3WK3%2FHscdZmyBsTykFSR60%2B7ShwZTNapWE%2B&X-Amz-Signature=0b7c7d23ca139c2cb649e43bac9e41aca0364bc6254fc5c3b344b9887d69f151&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
