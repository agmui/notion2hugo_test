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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJUWJG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE10ntyWLw90WIQTyi10VvRn%2Bt102LofSRr7o%2Fh6QLKAiAPlvSwiI8JTeqTjVuh9xSAOYaThe8eXt6gVQ1oWeaTqyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0DfibCqjw8C4QnHzKtwD3oQtU%2BaKaUZ5wCqCE%2BxW3i5ta4%2BT3b3rD8jr%2BwrPe%2BSp4qkYtcDLfjMayer56o6WKjKs6EmJlr7AYoK0EeUnag45vPgj3PIHD%2F0g4VMJXttqo0DxJbien9rDeFyv9igT1so3KqwbR6yBdc1utwUA0qJ16ngFZu68AJBZl1ybkrSRc2vKYfZL5%2FkIdVR0G77VYLgeAuFizW5qgu8NttMyygHuBnaoxGskhgtAsYdyEtehE9jAyZ6Ui%2FXbL6hri08hbED2A3wSS0EaRHHWojhV3kIJSw29dnJq0Z5Pr%2BP4ZDcGSrG50TXizQ%2FIJKF1MQTvgP8kD%2FRm9oj0l2v8NoCl%2BuCGo0HDeKCKtGLSKfnB19tOoIw3pJzsmCCt7BU%2FguZ3KO7IYbB8sLCFjwMGj0DK%2FCFa%2BGRbVpExGXAhyJKLTbtLU2oCg131wX24eUOM4N%2BVt6n3pJOYRq2a0eM9%2B7OaCcv9UXvyPlTUVlvLZtGYjOByMiWTwUmkonS%2FseCvGavKnZadXRAyCGzkKdF3BTW0qn536eEhhfdJlZlZKhgkFsoecDOo0q42CXNx0Ksbnmitc2egYpOOCRsuicBg4bfn0qjeBG2IGgn5b2p6RsdT3y4%2FnVeycTmSRkSFgC4wmZ27vwY6pgEak6wK%2F8pedGRBOJFSiQb9YDKJAQb4Zzj38YyB2cLugLN2OtppYYGljMrRki4ZKjkjinlPMH5s7YOe%2FPgu5aKXbn9wYBVRcPFJlp3r16TiXn3pK7ngvQ8ukPL8gJge9j1a1%2FNL7bmkyTp3CP6mGBKJ5tGOnBZLLYHuDcGUhSrO9idYCjmBLFXkX%2FOEGJcqgomjUBCQKjfDWkkoiWN0HtMNiDeW4%2FRK&X-Amz-Signature=397fea33ba85a249d44868a542710740428dc06b9db5408797d85eac5a926115&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJUWJG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE10ntyWLw90WIQTyi10VvRn%2Bt102LofSRr7o%2Fh6QLKAiAPlvSwiI8JTeqTjVuh9xSAOYaThe8eXt6gVQ1oWeaTqyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0DfibCqjw8C4QnHzKtwD3oQtU%2BaKaUZ5wCqCE%2BxW3i5ta4%2BT3b3rD8jr%2BwrPe%2BSp4qkYtcDLfjMayer56o6WKjKs6EmJlr7AYoK0EeUnag45vPgj3PIHD%2F0g4VMJXttqo0DxJbien9rDeFyv9igT1so3KqwbR6yBdc1utwUA0qJ16ngFZu68AJBZl1ybkrSRc2vKYfZL5%2FkIdVR0G77VYLgeAuFizW5qgu8NttMyygHuBnaoxGskhgtAsYdyEtehE9jAyZ6Ui%2FXbL6hri08hbED2A3wSS0EaRHHWojhV3kIJSw29dnJq0Z5Pr%2BP4ZDcGSrG50TXizQ%2FIJKF1MQTvgP8kD%2FRm9oj0l2v8NoCl%2BuCGo0HDeKCKtGLSKfnB19tOoIw3pJzsmCCt7BU%2FguZ3KO7IYbB8sLCFjwMGj0DK%2FCFa%2BGRbVpExGXAhyJKLTbtLU2oCg131wX24eUOM4N%2BVt6n3pJOYRq2a0eM9%2B7OaCcv9UXvyPlTUVlvLZtGYjOByMiWTwUmkonS%2FseCvGavKnZadXRAyCGzkKdF3BTW0qn536eEhhfdJlZlZKhgkFsoecDOo0q42CXNx0Ksbnmitc2egYpOOCRsuicBg4bfn0qjeBG2IGgn5b2p6RsdT3y4%2FnVeycTmSRkSFgC4wmZ27vwY6pgEak6wK%2F8pedGRBOJFSiQb9YDKJAQb4Zzj38YyB2cLugLN2OtppYYGljMrRki4ZKjkjinlPMH5s7YOe%2FPgu5aKXbn9wYBVRcPFJlp3r16TiXn3pK7ngvQ8ukPL8gJge9j1a1%2FNL7bmkyTp3CP6mGBKJ5tGOnBZLLYHuDcGUhSrO9idYCjmBLFXkX%2FOEGJcqgomjUBCQKjfDWkkoiWN0HtMNiDeW4%2FRK&X-Amz-Signature=6e73b23207f9cef15a4f714e1edc404e8582122b01f1704dcda37feb14e788ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
