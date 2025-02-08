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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMBTIJQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBXTTBlfHamiR2AmUQHDZqBk3hxN1cs0DzoaQ4dDKwNWAiEAzyazTuwkW5vcwznfhICYhQ9%2F6bPsmAHFKdDCt6sm2fAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQEanLAVzk9OMnlTyrcA8ZiZ4tB8GfGl2tLnm6%2B5b5aV0GSz1p0IPW6xPOojtJfKUytvKoKPtlnkAO4HGjSmPGOYAb46%2BxTUkA8Bn4%2Fe7vMN8DvfM9ECjwZEa4cw%2FYvihoQCi1hr6DuWxyVxS0GxX%2B98ZFBXtmt2B2cXWY%2Fzdcw19YtnaKjlC0ISb5xaGR6l2hg5k6g1o%2FAa%2F4PNclpWOj%2FObSGrFTPMBw2j6wAWX0gSVIXR5VgYsW7St8dpgF6XvByoe9P4dMQn8g6pKuCM6VjqILal4%2B%2FL0ZDDrIeyaOj%2BZkuvK6TnOCZWgzcAfP7YgHnCv6lh%2FzUps5PCtmROHcRlw3Hh5yVG73h6ZSzoVDbV71rRmZ2atgGzINHBclcVYlUL1iv%2BSO9nKYezWMlNUIk7%2BZP5rwOOo9sJE0HgV8Vst59smzyemNdztjIgiPIIy4vKC6Uoc5190TIos8TPdHKAX%2F2pyqnY%2FxQh6XrGaiJ0IvugrMwk7sD280X5dL5cIwxWiZnj%2B4YF0wKVcJj%2Bz81hzm2%2F8ZYOieqNKNEWBET9ELpu6jsUcN%2BO5tPhaUXMTmdmbInpsa51vNdY4eZptQpBiBkOb0jUjCfefUQRLVsS9kNuNzBRe2MJfdmcxh9pKye9T2ZxF0xs01LMPCGnb0GOqUBpeOYalvbOZNLnxwheT6%2B2P8MN2dx6lUXq4qjXqGGM18pDdWx316PpYuWiuyegccRjywSs00peU1%2Bs6fwuDsLFCH1M0N9sXIOXj141Th9rGadFCE%2FFZqN8qKPT7hQRi%2B9iCS06fOEl%2Fe4axQ%2FvHmHmtv8j6UxwmblJ68JGLZnx1YrH%2FTHvDsNVqhOneRRX%2FQjKMvVxSOjLn5zse%2FtwqSJ2Zo1pg0d&X-Amz-Signature=18f0f7caa38c817a2033f869be62c0354086751adb1cc7264f0f707c46e20fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMBTIJQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBXTTBlfHamiR2AmUQHDZqBk3hxN1cs0DzoaQ4dDKwNWAiEAzyazTuwkW5vcwznfhICYhQ9%2F6bPsmAHFKdDCt6sm2fAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQEanLAVzk9OMnlTyrcA8ZiZ4tB8GfGl2tLnm6%2B5b5aV0GSz1p0IPW6xPOojtJfKUytvKoKPtlnkAO4HGjSmPGOYAb46%2BxTUkA8Bn4%2Fe7vMN8DvfM9ECjwZEa4cw%2FYvihoQCi1hr6DuWxyVxS0GxX%2B98ZFBXtmt2B2cXWY%2Fzdcw19YtnaKjlC0ISb5xaGR6l2hg5k6g1o%2FAa%2F4PNclpWOj%2FObSGrFTPMBw2j6wAWX0gSVIXR5VgYsW7St8dpgF6XvByoe9P4dMQn8g6pKuCM6VjqILal4%2B%2FL0ZDDrIeyaOj%2BZkuvK6TnOCZWgzcAfP7YgHnCv6lh%2FzUps5PCtmROHcRlw3Hh5yVG73h6ZSzoVDbV71rRmZ2atgGzINHBclcVYlUL1iv%2BSO9nKYezWMlNUIk7%2BZP5rwOOo9sJE0HgV8Vst59smzyemNdztjIgiPIIy4vKC6Uoc5190TIos8TPdHKAX%2F2pyqnY%2FxQh6XrGaiJ0IvugrMwk7sD280X5dL5cIwxWiZnj%2B4YF0wKVcJj%2Bz81hzm2%2F8ZYOieqNKNEWBET9ELpu6jsUcN%2BO5tPhaUXMTmdmbInpsa51vNdY4eZptQpBiBkOb0jUjCfefUQRLVsS9kNuNzBRe2MJfdmcxh9pKye9T2ZxF0xs01LMPCGnb0GOqUBpeOYalvbOZNLnxwheT6%2B2P8MN2dx6lUXq4qjXqGGM18pDdWx316PpYuWiuyegccRjywSs00peU1%2Bs6fwuDsLFCH1M0N9sXIOXj141Th9rGadFCE%2FFZqN8qKPT7hQRi%2B9iCS06fOEl%2Fe4axQ%2FvHmHmtv8j6UxwmblJ68JGLZnx1YrH%2FTHvDsNVqhOneRRX%2FQjKMvVxSOjLn5zse%2FtwqSJ2Zo1pg0d&X-Amz-Signature=6b9d13dc2fa1826c0e1ef0b1d16a164763924586d5baf977a247c0aeafc5c129&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
