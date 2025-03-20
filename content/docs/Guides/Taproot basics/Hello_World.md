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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJYGQ5O%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCUoU3CGzzIo9mLAhcjOrEmO5t7ipI8AOuR1IY91BnwfQIhAIqRlDucQv1E78Au%2FwnhfCc%2B9yRgNttEK5Jfi5eTvTU1KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyagLYJ%2FiuigQeS5Wcq3APE95027GtHivUJQgK%2BYXo6c7t8xj2O78iF%2FiFHrIZ2BWHGyj6AFPV3J9pkHvd%2FhEvKoNgz2GT8lElLYQFyD%2Fig7pmhin%2F9lj7tuGf5QVoQe7JvkwxwVgvyXnXRZ6gVUiRiSRiLt4PGF3cyTh1%2FwJImX%2BaHksGFh6c4s6PCF5E%2FJe%2FaZU6J%2Bk8MrPzX0Q9zeiqQk1ZtFecq6WWt3HY77E9zq2Cc6YMrhus1%2BHFeES4OvgDff%2BP9LYBJ3szTJp7OXdFZIOmKQEFux88%2FTR4Whgs%2FUXy67gqcc2BmezjTOzin3swWs37OHSO5bhM5mno%2BMqwxrYIzSVgjIEROLN9FgFBPW5lQDtwMYrbxkRvFe8PmLilEQkX%2B%2Fwe3ApeKDx8J8Aaj48%2BBBI18JrfBZIXZw14SNf7A5n7F2V67wh%2BYg6%2BDFMSZZIBcGEVrLODD4ZgSikFLuF1P67BoG2JpL%2FgScc2HU9klWIEzWu9wb4NDmjHfyuqGkp4L2OYGJOJaMW90lkOx8e81wUwrFAUv7OxcE7TLPKBS6DeVSAtN%2FbOIAn199Uw5O7klPMRS8TRJhQhftRtaKBnFEnKQnPyR36Umd7NrzniaKJOv4I%2Bb8jsfD3zLQCt7fyPSYYqNbfWWxTCXpu%2B%2BBjqkASLCItibECfHafvEq5yIEk421mkX238NzFSwh8aXhPXCsJpZwLqS8hzAgCsSsVT1sbksgVh%2FUfx%2F9Zg3I80MkiQEvSPd7Zelmfdn4NbyPMMAhwnzAIYd2mydtnndhG%2FBBJUZLW%2FjToYSev%2FbrGKiv3WCYh14%2FZkRKwKlVhB06mG2uxVBsYAK9EWfm8ZEKLXMVZ8Xw5VgWfPXTwAYok5bqiaAYSLN&X-Amz-Signature=b11c168365cecd32e021b48f812e715dab3c4217e1fcb8364fdf394e022345aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJYGQ5O%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCUoU3CGzzIo9mLAhcjOrEmO5t7ipI8AOuR1IY91BnwfQIhAIqRlDucQv1E78Au%2FwnhfCc%2B9yRgNttEK5Jfi5eTvTU1KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyagLYJ%2FiuigQeS5Wcq3APE95027GtHivUJQgK%2BYXo6c7t8xj2O78iF%2FiFHrIZ2BWHGyj6AFPV3J9pkHvd%2FhEvKoNgz2GT8lElLYQFyD%2Fig7pmhin%2F9lj7tuGf5QVoQe7JvkwxwVgvyXnXRZ6gVUiRiSRiLt4PGF3cyTh1%2FwJImX%2BaHksGFh6c4s6PCF5E%2FJe%2FaZU6J%2Bk8MrPzX0Q9zeiqQk1ZtFecq6WWt3HY77E9zq2Cc6YMrhus1%2BHFeES4OvgDff%2BP9LYBJ3szTJp7OXdFZIOmKQEFux88%2FTR4Whgs%2FUXy67gqcc2BmezjTOzin3swWs37OHSO5bhM5mno%2BMqwxrYIzSVgjIEROLN9FgFBPW5lQDtwMYrbxkRvFe8PmLilEQkX%2B%2Fwe3ApeKDx8J8Aaj48%2BBBI18JrfBZIXZw14SNf7A5n7F2V67wh%2BYg6%2BDFMSZZIBcGEVrLODD4ZgSikFLuF1P67BoG2JpL%2FgScc2HU9klWIEzWu9wb4NDmjHfyuqGkp4L2OYGJOJaMW90lkOx8e81wUwrFAUv7OxcE7TLPKBS6DeVSAtN%2FbOIAn199Uw5O7klPMRS8TRJhQhftRtaKBnFEnKQnPyR36Umd7NrzniaKJOv4I%2Bb8jsfD3zLQCt7fyPSYYqNbfWWxTCXpu%2B%2BBjqkASLCItibECfHafvEq5yIEk421mkX238NzFSwh8aXhPXCsJpZwLqS8hzAgCsSsVT1sbksgVh%2FUfx%2F9Zg3I80MkiQEvSPd7Zelmfdn4NbyPMMAhwnzAIYd2mydtnndhG%2FBBJUZLW%2FjToYSev%2FbrGKiv3WCYh14%2FZkRKwKlVhB06mG2uxVBsYAK9EWfm8ZEKLXMVZ8Xw5VgWfPXTwAYok5bqiaAYSLN&X-Amz-Signature=560ed35b353ee4ead391b763b1640bb95454605f92bed61fd448ef456c17e6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
