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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXFUMQN7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD90mRxb%2BjHOS7MZhYbX9oZFXUz4OoMxXYZKKAKR%2FgFngIgBFvQ97FGON0Lm4zME55K7REZAw4gvDUyxPt%2Bi%2FMqnQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhMrVPh0ZWDY4FeuSrcA4Tlsy8wcozabtBXcahh4uukoGWsTJkh2817kqCF3fIhuov%2FSs76VGxfA%2BkUvbTJ38wtWUEjpqPngmUSm3ycykwkowQXAGJT%2F8xPbqqj%2FsmAfLCOJV%2F7baGjr5iTUiNcfGFYFwQrWG4RJL5i%2B5ju6vYEJZD1L4JeErBOBLjyyZvqM%2B4DIGsJTOMLWH08v2q3loUfqo96GS0u3MUHhvoqNAqRnAXNGu4fGx%2FPjlIJyjGl%2F17D7%2FL%2BnMzS08EFH0jvzlh3H3qYAzBKCHmV0mdsfUavQO8ypOfERykFKYDC0AZKwVvoI6RCLm0bBZPa9rP2R3jL0oY0KFGPlbOgMgUl1gREUbrjlvPlQO7acp7f6tfEAGPXIk3oW7D%2B3nhPB0KTmps9E%2FuPhOYtVdeb7h7j4u6Qskgy%2BNp9vRW%2B47Y0i3fXR9S%2FpG7Af9DrmS%2BHD44ru2YsT4N5A%2BG8BCbVlokV8qDtiB4dW2MHoVpMugiDtPgtnbGmbyzwfzdlBldVAeediwrkwjPm1YU3QT13KrBkHkK3SArz4HYqvKzDVA8Hk1xNVlsmyglMXHxZxZHH6ElxDxy1G00g6zRtvkbtLOoGINfhBuQXgOxezf4hwBZ21JeCZWWsM0FBarMfDhccMJ7YwcEGOqUBAbKppcHwEuaNHmAr%2BDpN2eJsgo0hq4xWFQM47D6ip66tCQZYZv7LqWZ69jIG1w3J3htsG53zo3Yed3ecOPM%2FJXMdmy2pEXQglZmASUp3anOguJz3UvB%2BZE6KTkDZqxcwYMzinq729phl6UqQVDUBY7xV1qBF9nedmqusP6Qbwz%2FO9pTpvNx9dDu8y5oUo94hrJmAsCH1Cqf6MiH59qaSil6POA3l&X-Amz-Signature=a39679f940b519036648e55f25bffe711fdafe441d0ce18c5bc1c7f8688276ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXFUMQN7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD90mRxb%2BjHOS7MZhYbX9oZFXUz4OoMxXYZKKAKR%2FgFngIgBFvQ97FGON0Lm4zME55K7REZAw4gvDUyxPt%2Bi%2FMqnQgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhMrVPh0ZWDY4FeuSrcA4Tlsy8wcozabtBXcahh4uukoGWsTJkh2817kqCF3fIhuov%2FSs76VGxfA%2BkUvbTJ38wtWUEjpqPngmUSm3ycykwkowQXAGJT%2F8xPbqqj%2FsmAfLCOJV%2F7baGjr5iTUiNcfGFYFwQrWG4RJL5i%2B5ju6vYEJZD1L4JeErBOBLjyyZvqM%2B4DIGsJTOMLWH08v2q3loUfqo96GS0u3MUHhvoqNAqRnAXNGu4fGx%2FPjlIJyjGl%2F17D7%2FL%2BnMzS08EFH0jvzlh3H3qYAzBKCHmV0mdsfUavQO8ypOfERykFKYDC0AZKwVvoI6RCLm0bBZPa9rP2R3jL0oY0KFGPlbOgMgUl1gREUbrjlvPlQO7acp7f6tfEAGPXIk3oW7D%2B3nhPB0KTmps9E%2FuPhOYtVdeb7h7j4u6Qskgy%2BNp9vRW%2B47Y0i3fXR9S%2FpG7Af9DrmS%2BHD44ru2YsT4N5A%2BG8BCbVlokV8qDtiB4dW2MHoVpMugiDtPgtnbGmbyzwfzdlBldVAeediwrkwjPm1YU3QT13KrBkHkK3SArz4HYqvKzDVA8Hk1xNVlsmyglMXHxZxZHH6ElxDxy1G00g6zRtvkbtLOoGINfhBuQXgOxezf4hwBZ21JeCZWWsM0FBarMfDhccMJ7YwcEGOqUBAbKppcHwEuaNHmAr%2BDpN2eJsgo0hq4xWFQM47D6ip66tCQZYZv7LqWZ69jIG1w3J3htsG53zo3Yed3ecOPM%2FJXMdmy2pEXQglZmASUp3anOguJz3UvB%2BZE6KTkDZqxcwYMzinq729phl6UqQVDUBY7xV1qBF9nedmqusP6Qbwz%2FO9pTpvNx9dDu8y5oUo94hrJmAsCH1Cqf6MiH59qaSil6POA3l&X-Amz-Signature=c5c3234eacff21e2b9bd2d20175291582c47c3b51db763d5e0d57cb34723dbad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
