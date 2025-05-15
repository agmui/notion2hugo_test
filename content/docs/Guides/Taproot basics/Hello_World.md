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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWA3GVKN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD1ncS%2FyJ3aVVoLU2T8ryl%2FlJhweTe8V%2Fpp6TmcIIl6vgIgfIEWPdp4eE4kfckka%2BjXLcHZ55t%2BjViiNk6Qw4ezFy8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFtVRxv3%2B%2BHmoPbDtyrcA136946onPhlKe4ziEF%2BOx%2FQKfQCbP7IJmZwo2k4p2rrFoSckgwJScoXXa7c3hmbxTxkBRrZfiqOWzxkKg2VatIDM4hSgp7vnKTsZBH9z%2BK3JcDZtSprl1voaqA%2FCc0GlToaFXFTeHBhivrHb3MGscnmO6ckY6bqSssAXdqsK9fI6B%2BgaCq09krn9q2smrWcLih766odd7i5WbrfjS4zo6mKxdryOGo5LC2470GSFBvbdjbmCUBTFSfIl0GTms6KGeKfM0eBm%2Fnxp9MkLuMGQAp5tuc4EjbR%2FFKxTM70cixPfKwee3jvohImP3rfH3TRegEjjmlNjUYFgETTG8%2FC6bBkW7vYxfF9aSz8jriFVjE2iiiVMoLo2I41LhFAUWq5wvPMLS98pONWCBpPPyYZwQEbbTBzU%2FAPHeVkDSW7leAQi5WISZ%2B60W4Sk9ETDeq%2BWEvzUZa10VoKAnw4YEb%2F2oRzsZlEMJak4Vg0uU9HVNIrlu06XbLa53vdtrqJ7DClNcznvjsd19%2BVpKuYghGO39mae7eC%2F2vrR9ivM0d6vBGljeFTVpS2rzkXI2Dm9DG0xDvR4btoKNRcOH6cPynpbJ7k%2B3JtbQO%2F%2BG6udRHKxs%2B5OmFejQWTn2EKlhXUMOLfmMEGOqUBIweFeUGhGXNe8A%2FfvZbK55isW%2Fv3Hby2WHWTTLPyvZbyfBcQe%2Fuabwy4GsMIjcdLFLwrMfD1SKhwVbFUgQ8b5Zu03lmUJfbP37UXxy%2BYJ3KDnc1CycsbfHRqEWvyQvlwDv%2F89MCQM%2B9KoF7SkkR5rnqP29BbiMjCYZWO8ulQARfJlUFM1iDkXAhvm23MmqB26kEOpl9VVfVJEpwrpGNBllp%2FSYBF&X-Amz-Signature=633fc6bc8e2dc66f84daaed1d3093bda545e8ae952fc2c331d52502a8773379c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWA3GVKN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD1ncS%2FyJ3aVVoLU2T8ryl%2FlJhweTe8V%2Fpp6TmcIIl6vgIgfIEWPdp4eE4kfckka%2BjXLcHZ55t%2BjViiNk6Qw4ezFy8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFtVRxv3%2B%2BHmoPbDtyrcA136946onPhlKe4ziEF%2BOx%2FQKfQCbP7IJmZwo2k4p2rrFoSckgwJScoXXa7c3hmbxTxkBRrZfiqOWzxkKg2VatIDM4hSgp7vnKTsZBH9z%2BK3JcDZtSprl1voaqA%2FCc0GlToaFXFTeHBhivrHb3MGscnmO6ckY6bqSssAXdqsK9fI6B%2BgaCq09krn9q2smrWcLih766odd7i5WbrfjS4zo6mKxdryOGo5LC2470GSFBvbdjbmCUBTFSfIl0GTms6KGeKfM0eBm%2Fnxp9MkLuMGQAp5tuc4EjbR%2FFKxTM70cixPfKwee3jvohImP3rfH3TRegEjjmlNjUYFgETTG8%2FC6bBkW7vYxfF9aSz8jriFVjE2iiiVMoLo2I41LhFAUWq5wvPMLS98pONWCBpPPyYZwQEbbTBzU%2FAPHeVkDSW7leAQi5WISZ%2B60W4Sk9ETDeq%2BWEvzUZa10VoKAnw4YEb%2F2oRzsZlEMJak4Vg0uU9HVNIrlu06XbLa53vdtrqJ7DClNcznvjsd19%2BVpKuYghGO39mae7eC%2F2vrR9ivM0d6vBGljeFTVpS2rzkXI2Dm9DG0xDvR4btoKNRcOH6cPynpbJ7k%2B3JtbQO%2F%2BG6udRHKxs%2B5OmFejQWTn2EKlhXUMOLfmMEGOqUBIweFeUGhGXNe8A%2FfvZbK55isW%2Fv3Hby2WHWTTLPyvZbyfBcQe%2Fuabwy4GsMIjcdLFLwrMfD1SKhwVbFUgQ8b5Zu03lmUJfbP37UXxy%2BYJ3KDnc1CycsbfHRqEWvyQvlwDv%2F89MCQM%2B9KoF7SkkR5rnqP29BbiMjCYZWO8ulQARfJlUFM1iDkXAhvm23MmqB26kEOpl9VVfVJEpwrpGNBllp%2FSYBF&X-Amz-Signature=36c858808163b8e3f4cce1ef2291144a4ebb72eb32a79f07a056fa61c530fdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
