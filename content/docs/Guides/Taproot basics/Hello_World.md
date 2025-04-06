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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQMLT35%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbW55GvS0VhM4qPnYzJvij73VBFS0hVWLhwN92mFGJwgIhAOdklQSZCEoHybxjRpQn%2BeBedShcLNsQP23LxFgUJr57Kv8DCD0QABoMNjM3NDIzMTgzODA1IgyCN8hZ%2B03vVUnZJG8q3ANyvWIPvrPKhPOhGcNynotabvQn%2FBprw7tQmRSdBLh3GyKPdTLL%2F3mjjsITLqq6Nkengj2ic8l4Ys1xA6G3MfDf%2FESPvwBj98VGF189h7ve5q5gd6yCzXj%2FTtTgQsw%2BTANeFlFCxjTBOscXZ6j6%2BKZ8a3yAjnncGNRWLtKJpUBR4rzdnFZqLv3rB2Ju2FvVx0KFeiww4gFYt7cCNUxiDWQDpyqpqh5C4EiXsxysfDYhlYT2ExMUIXFFCcDE3suZcAlJ6STNnPPB6x3U8aN57qrWfpEJcIQAeKBJpOgTM71qyIFPu8abusu2Zghsl0SMtTHhSGrzQpQ%2Bygao0QtpvRCL1HXtVMprPeKYSdpelCMOImOLe6BvdNW2DHefu%2BwvpdQxyZe3PSyBHvw%2Bjv5hneuS%2F%2FlaYSC9anokIXCijuJUC1eEU71Bjtgx%2FO%2Bwet8i%2BA6xdEZZs7f9bjLFYDzfsoYKghaVQ3RAzxu0U%2FIg1Oyo1gr%2F9cM1eJlqpS6DUSEsCJEUZn%2BN2XpFSRTkdcowNcnInu3F%2Fahixn85JRJSNLwyG2FT97NheFXUaUOHaX71DDD8F%2BitEtNKo8xD%2FTUW0fPR5BGQLeyTzzZXlivH0H%2F6tlVcLsBlgE4Og93upTDd6ce%2FBjqkASJ2MkeHBJ9EsiMMoo%2Ftcs8Xvc50MwfZLfHjpjd%2BT3Lk5iW%2B%2BdeDlTzYARDMpLJGzu%2FQi4zI3ItbFqeHdScxzxmPvX3h4XSiBwpfKnbCDr32eCLlAINiUILnoXtpqavC0BaTBXmSJBZrVB5uKLxKnI%2BxPdkxiS8ilBpJ%2FRelwijEqtTdYbeS34kaHCLWh6siuxqeirbPZBrxy3m9XKmGh7bLDCL3&X-Amz-Signature=8dfb46bb4dc55bdd08980e0b305c0a297daebdec498c861705513d36b09e36c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQMLT35%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbW55GvS0VhM4qPnYzJvij73VBFS0hVWLhwN92mFGJwgIhAOdklQSZCEoHybxjRpQn%2BeBedShcLNsQP23LxFgUJr57Kv8DCD0QABoMNjM3NDIzMTgzODA1IgyCN8hZ%2B03vVUnZJG8q3ANyvWIPvrPKhPOhGcNynotabvQn%2FBprw7tQmRSdBLh3GyKPdTLL%2F3mjjsITLqq6Nkengj2ic8l4Ys1xA6G3MfDf%2FESPvwBj98VGF189h7ve5q5gd6yCzXj%2FTtTgQsw%2BTANeFlFCxjTBOscXZ6j6%2BKZ8a3yAjnncGNRWLtKJpUBR4rzdnFZqLv3rB2Ju2FvVx0KFeiww4gFYt7cCNUxiDWQDpyqpqh5C4EiXsxysfDYhlYT2ExMUIXFFCcDE3suZcAlJ6STNnPPB6x3U8aN57qrWfpEJcIQAeKBJpOgTM71qyIFPu8abusu2Zghsl0SMtTHhSGrzQpQ%2Bygao0QtpvRCL1HXtVMprPeKYSdpelCMOImOLe6BvdNW2DHefu%2BwvpdQxyZe3PSyBHvw%2Bjv5hneuS%2F%2FlaYSC9anokIXCijuJUC1eEU71Bjtgx%2FO%2Bwet8i%2BA6xdEZZs7f9bjLFYDzfsoYKghaVQ3RAzxu0U%2FIg1Oyo1gr%2F9cM1eJlqpS6DUSEsCJEUZn%2BN2XpFSRTkdcowNcnInu3F%2Fahixn85JRJSNLwyG2FT97NheFXUaUOHaX71DDD8F%2BitEtNKo8xD%2FTUW0fPR5BGQLeyTzzZXlivH0H%2F6tlVcLsBlgE4Og93upTDd6ce%2FBjqkASJ2MkeHBJ9EsiMMoo%2Ftcs8Xvc50MwfZLfHjpjd%2BT3Lk5iW%2B%2BdeDlTzYARDMpLJGzu%2FQi4zI3ItbFqeHdScxzxmPvX3h4XSiBwpfKnbCDr32eCLlAINiUILnoXtpqavC0BaTBXmSJBZrVB5uKLxKnI%2BxPdkxiS8ilBpJ%2FRelwijEqtTdYbeS34kaHCLWh6siuxqeirbPZBrxy3m9XKmGh7bLDCL3&X-Amz-Signature=c91216e1821f38adbb2373b916b1bc737278142049ab57c5fca00249e9bb0d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
