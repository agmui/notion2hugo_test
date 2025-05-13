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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KC3FXK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGdOmn3qRPYACPMiKv71D70lxlPRR%2FE%2Fd8aVEDEXfpk7AiEA7JKK5zMS8N1FKYU0QQJcXWEMJ31X5w%2Bcc9fXOViieoMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSRcLv8faNo48GUUCrcAxLgq%2BQx4GmnXGAkEnDwUwNjTVgTYmFXYa%2Fv%2FHpatpHCz7ExhhxMxsd6e0VmljRvUIkDT%2BCsMq%2BDcJRAPr6RLbFJaZdUwdB4jjShstqg0LETodNkqXimyApoEk23qeBnrfr7n%2BgOD%2FcZjMN9ekbo6%2BMbRPB6knS%2BgbVP3%2BmHUrHoSgQj9yXu%2F1oRyGtTBCUbYqec6nzGK2cJGdpdqyEWlmq6WvuIUueteA1KVUjou3SNws4bpymdjCWueYrm%2FmHu6flfMiArIBSJn0oj23tyWaj5ROQdrEKr5c0goRtzqzfwIC2aT91vcwxuxBzMV5i69rEa3v9vMgQ2abzNmyQyGRbkmDB4JLDtbhWLZBQ86Qk5To0meLMr%2BnGiTpIDBVfDfmBzZbWoRFG%2FeUHvVHWKDkOKmFmV2mY5HNK3S3aZ%2BDjPSUWWdkuQEGosgHnkOI7pj1GVHLergYoQjCFaDlhv2chaokoweWNQjrWl2SEY%2Bi%2FkXg6QrDTOImT95JprTXT2R5nrrObX7u49mRxBQvgbA%2BNGXPjUYG8g4ou4dEqmVD7O%2FshEMNWSKYFUcEN2xfU0Ni9gzLUNEkajEBpgdl%2BmRGl1pCG8TW4S9Ax8P4LBlJ0%2B3QvGMYNGwPgH0%2BSQMNWoi8EGOqUBQPkO2rSiwoB2tCmb5D5eny41uPTlTU1wRYxHM1y%2B9VcKCKN7JZo8hu0lSy1xLN%2Blh5jmoTPdmLq9ckKKx5BGv8aSG%2Fkq%2B8%2BXUxy3mqyD6cOCZg9f6O%2FtNH%2F8T7WPC1%2FfvEd0nCyKNvRsdSdz%2FEP2gP9Nfkm%2BZrxSwsR4tBG1amtOSIkPjVR0vWuCOGuG%2B0DShQp2NifqJo8zyLdDtLmWPSCFP%2FWv&X-Amz-Signature=ec842af2ab41fcaa0dca5032468fbd794c855547538f24d0b214e2ea13d9bb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KC3FXK%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGdOmn3qRPYACPMiKv71D70lxlPRR%2FE%2Fd8aVEDEXfpk7AiEA7JKK5zMS8N1FKYU0QQJcXWEMJ31X5w%2Bcc9fXOViieoMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSRcLv8faNo48GUUCrcAxLgq%2BQx4GmnXGAkEnDwUwNjTVgTYmFXYa%2Fv%2FHpatpHCz7ExhhxMxsd6e0VmljRvUIkDT%2BCsMq%2BDcJRAPr6RLbFJaZdUwdB4jjShstqg0LETodNkqXimyApoEk23qeBnrfr7n%2BgOD%2FcZjMN9ekbo6%2BMbRPB6knS%2BgbVP3%2BmHUrHoSgQj9yXu%2F1oRyGtTBCUbYqec6nzGK2cJGdpdqyEWlmq6WvuIUueteA1KVUjou3SNws4bpymdjCWueYrm%2FmHu6flfMiArIBSJn0oj23tyWaj5ROQdrEKr5c0goRtzqzfwIC2aT91vcwxuxBzMV5i69rEa3v9vMgQ2abzNmyQyGRbkmDB4JLDtbhWLZBQ86Qk5To0meLMr%2BnGiTpIDBVfDfmBzZbWoRFG%2FeUHvVHWKDkOKmFmV2mY5HNK3S3aZ%2BDjPSUWWdkuQEGosgHnkOI7pj1GVHLergYoQjCFaDlhv2chaokoweWNQjrWl2SEY%2Bi%2FkXg6QrDTOImT95JprTXT2R5nrrObX7u49mRxBQvgbA%2BNGXPjUYG8g4ou4dEqmVD7O%2FshEMNWSKYFUcEN2xfU0Ni9gzLUNEkajEBpgdl%2BmRGl1pCG8TW4S9Ax8P4LBlJ0%2B3QvGMYNGwPgH0%2BSQMNWoi8EGOqUBQPkO2rSiwoB2tCmb5D5eny41uPTlTU1wRYxHM1y%2B9VcKCKN7JZo8hu0lSy1xLN%2Blh5jmoTPdmLq9ckKKx5BGv8aSG%2Fkq%2B8%2BXUxy3mqyD6cOCZg9f6O%2FtNH%2F8T7WPC1%2FfvEd0nCyKNvRsdSdz%2FEP2gP9Nfkm%2BZrxSwsR4tBG1amtOSIkPjVR0vWuCOGuG%2B0DShQp2NifqJo8zyLdDtLmWPSCFP%2FWv&X-Amz-Signature=bd9155c9f231e170ed8c9fc23543aeec19febca10cc333e112bf77bb0a5e2df4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
