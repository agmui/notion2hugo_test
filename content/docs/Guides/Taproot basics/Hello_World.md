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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UFFFZS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjX2vWsmY0oKLvpEeYvEbzUnd7mRwbcX6faSL%2F4%2FDjkgIhAKSwOxBB%2F0fKHlohBOOfiih0ITpEb0ilUJVpBBDJDGEpKv8DCBAQABoMNjM3NDIzMTgzODA1Igw370O4aJM6vXAGaGgq3APCaQ9CI1eZHmDFUU31wvEVn2yEGLpr7BgcvK9PE1ZFF5kyX6rWgJaZgzHh06Xj8lW%2B7mqtQSU0bv3ao9GD409X6uUgrxQnx5wIUVT%2BOcK28jbUyo8gdBKnN2ejWF7Dn114PmYakH85kXM%2FDEx7jKo%2F1ZeXzee3P5QHiJzlfsrNlUaXJBnvlT4DtoJUZXCOULENsvh7rRBP8cLwnFmt%2FZTx3s8LS2VmUeZayz29%2Be4czUwrfZeNkiCBE7G0%2BDRJ2ok%2BmVpRbPNvsEaWhhAnLMtKwQqs6l0YDCsWNu6N47zjn38zv0Jx0a%2Bot0d1C2zDbwNOjFH4dFNLyrlSs%2FYXyPGfy8sx%2F7d9JZIa3yHfslNI6NnV7jSXopq6W3PMSDbVx2%2BsF3TnYIM2Y%2F6j%2FJORIUMmknMtNwJz3A0WDKUYPfUXBwJfEXk7QNf6v15XhEQgfrUrXFdf9gisK7s1DC8lNucUqfgBDsuIvVPwbiIeF9lkI7oQP%2FxgG9AHKR0SfRI8yFwjBZ2jtgV%2FHxAa2S8t52C%2BNq5kQN1L9wik1CBRMrx1%2BduSjiFkvM6n1a9hDcHtb5JNrrh6MCjA2SaJ2lwkGTXeDG7GgeNaazFY2HvqE5Qg2U%2BxTUWDuq0JuSkN0jDf77bEBjqkATSDVCoCMXE%2F0jCyRqGtlDUSA7x%2F65DR%2BvgJb3%2B%2Fg4UbxXhjx%2B4nF8rqutqzCDYnyIMZ2D%2FUpDsvHDvgG9lDXPIVp7C68lGgB36%2BKEYuX41HSSYjVv%2BJjAuXQZbjcZ0CrJVQQNYj3%2BL6vnVjnlXz%2B7yoxGPoQp%2BtH7Iz7%2BSsxxK4cs8rQrCITV4aenXH6oowJUVqX3slfdDlar39JwYxT4w7FgFh&X-Amz-Signature=0e3856158b68210e9666116c8c393fcfde6a780de45d030ddb5fe5d8e14d8d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UFFFZS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjX2vWsmY0oKLvpEeYvEbzUnd7mRwbcX6faSL%2F4%2FDjkgIhAKSwOxBB%2F0fKHlohBOOfiih0ITpEb0ilUJVpBBDJDGEpKv8DCBAQABoMNjM3NDIzMTgzODA1Igw370O4aJM6vXAGaGgq3APCaQ9CI1eZHmDFUU31wvEVn2yEGLpr7BgcvK9PE1ZFF5kyX6rWgJaZgzHh06Xj8lW%2B7mqtQSU0bv3ao9GD409X6uUgrxQnx5wIUVT%2BOcK28jbUyo8gdBKnN2ejWF7Dn114PmYakH85kXM%2FDEx7jKo%2F1ZeXzee3P5QHiJzlfsrNlUaXJBnvlT4DtoJUZXCOULENsvh7rRBP8cLwnFmt%2FZTx3s8LS2VmUeZayz29%2Be4czUwrfZeNkiCBE7G0%2BDRJ2ok%2BmVpRbPNvsEaWhhAnLMtKwQqs6l0YDCsWNu6N47zjn38zv0Jx0a%2Bot0d1C2zDbwNOjFH4dFNLyrlSs%2FYXyPGfy8sx%2F7d9JZIa3yHfslNI6NnV7jSXopq6W3PMSDbVx2%2BsF3TnYIM2Y%2F6j%2FJORIUMmknMtNwJz3A0WDKUYPfUXBwJfEXk7QNf6v15XhEQgfrUrXFdf9gisK7s1DC8lNucUqfgBDsuIvVPwbiIeF9lkI7oQP%2FxgG9AHKR0SfRI8yFwjBZ2jtgV%2FHxAa2S8t52C%2BNq5kQN1L9wik1CBRMrx1%2BduSjiFkvM6n1a9hDcHtb5JNrrh6MCjA2SaJ2lwkGTXeDG7GgeNaazFY2HvqE5Qg2U%2BxTUWDuq0JuSkN0jDf77bEBjqkATSDVCoCMXE%2F0jCyRqGtlDUSA7x%2F65DR%2BvgJb3%2B%2Fg4UbxXhjx%2B4nF8rqutqzCDYnyIMZ2D%2FUpDsvHDvgG9lDXPIVp7C68lGgB36%2BKEYuX41HSSYjVv%2BJjAuXQZbjcZ0CrJVQQNYj3%2BL6vnVjnlXz%2B7yoxGPoQp%2BtH7Iz7%2BSsxxK4cs8rQrCITV4aenXH6oowJUVqX3slfdDlar39JwYxT4w7FgFh&X-Amz-Signature=763ea67014565177d13b90f0330f897fb992331ee330909b9d9fad9ea81c127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
