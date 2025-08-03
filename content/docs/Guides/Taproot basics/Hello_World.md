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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=08448111ea15d43a1acec256db4c4491ece30bb95e32fae1983d01f534df166b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=ed0469a3d85e05f11e06f1fe52f7bda70c1efc7e2c624deef2a4ba0135fbba61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
