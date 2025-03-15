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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNZA3V3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNcwwG3i%2BNorhn3uH1volP6c5W2CK6vfYsm49JbP27ZAiA5NEBrlAjEQiLHMv7l4CQSnNxQISo6r9i9VUppWediTyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMeMM%2BTb5Wsp6QwzqsKtwDVSBSxGvR90xRvDiGuDYlRT1nBpW59HMnM6HgEVGM%2BXiE%2FLSXjxmkBzKbzuDXPOPceOlAmpCtEyEbRZlmyjdFAYU%2FXqU6Q90qsKICFkTdMhHSyQlhNHbxTCyx%2FcUbcES85u5RJRsUoQjMOkeD68OVEwvN9xJyJM75o0SwN%2FCBL%2Bb15vhX6c%2F5IIhmOS%2FWVK6ylOLPjyoMZN%2B%2BoD4vN%2FiVd%2F06EIz7WASFWaMooFTFl3A7nkKxUNJAEF9aPjgGRiKBjDKSuCWd1u9AkdTb6g1inirwwivPdyoz8VUHRMIsYwCGFRgzTt6aMxSs7ky5Q%2BkUIiQuSHPK0cPwpRSErXVXjb6WsTajHdR0%2FBN75CsZD8dTnx916iK29k5mW1xL6do%2FXXcCsOpadN0jQlJFvnhjCtuB1yWxNgc5GYe4PLjQSUba%2BWDfbuB0etHJS69MK6GUXAYGqI2DjBQlSKtVj662gQfD85Xjw15jBnDRHMR9TFbyY6f%2F7RgHy%2B2O7HcH2KJz3px4q3PgHZleRTz0Dik4bCU%2B%2FlLvuiKSykqfV8bu8kfu0MZ6cwSLFunxnPH2f0d55EOqqk7c1lFvkmYNPSDkhO6gRKza68cN52zrj%2FSLH4BY5lV%2FxudpmxT7hYMwwe%2FVvgY6pgHlduxUeNV0q8Y8ovKLFthQ7HoXvu3v9u3BxldPJT%2BLJ8TgmasccP17FF%2Bo%2FXYh%2F2X4zfRLBXu4njFE2HvWEm2ZkMxNvrqO8qicj%2Bcj7Dgf%2BC7jkGyazwEzaUZ4tcfTuBOjkXoO91uzZvmSOwO%2BmP5LcQUQlVzVXhFSZJhxAWnxnbV1Ee1%2BJ2wQKU6%2FJmQaRQn%2FXWC3jBCzc9dq7qH88sI8fHZOxUDM&X-Amz-Signature=743d75bbd3f120606a4aba8e1ab2fcab370b25afb316545f22ee93c78c92818d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNZA3V3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNcwwG3i%2BNorhn3uH1volP6c5W2CK6vfYsm49JbP27ZAiA5NEBrlAjEQiLHMv7l4CQSnNxQISo6r9i9VUppWediTyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMeMM%2BTb5Wsp6QwzqsKtwDVSBSxGvR90xRvDiGuDYlRT1nBpW59HMnM6HgEVGM%2BXiE%2FLSXjxmkBzKbzuDXPOPceOlAmpCtEyEbRZlmyjdFAYU%2FXqU6Q90qsKICFkTdMhHSyQlhNHbxTCyx%2FcUbcES85u5RJRsUoQjMOkeD68OVEwvN9xJyJM75o0SwN%2FCBL%2Bb15vhX6c%2F5IIhmOS%2FWVK6ylOLPjyoMZN%2B%2BoD4vN%2FiVd%2F06EIz7WASFWaMooFTFl3A7nkKxUNJAEF9aPjgGRiKBjDKSuCWd1u9AkdTb6g1inirwwivPdyoz8VUHRMIsYwCGFRgzTt6aMxSs7ky5Q%2BkUIiQuSHPK0cPwpRSErXVXjb6WsTajHdR0%2FBN75CsZD8dTnx916iK29k5mW1xL6do%2FXXcCsOpadN0jQlJFvnhjCtuB1yWxNgc5GYe4PLjQSUba%2BWDfbuB0etHJS69MK6GUXAYGqI2DjBQlSKtVj662gQfD85Xjw15jBnDRHMR9TFbyY6f%2F7RgHy%2B2O7HcH2KJz3px4q3PgHZleRTz0Dik4bCU%2B%2FlLvuiKSykqfV8bu8kfu0MZ6cwSLFunxnPH2f0d55EOqqk7c1lFvkmYNPSDkhO6gRKza68cN52zrj%2FSLH4BY5lV%2FxudpmxT7hYMwwe%2FVvgY6pgHlduxUeNV0q8Y8ovKLFthQ7HoXvu3v9u3BxldPJT%2BLJ8TgmasccP17FF%2Bo%2FXYh%2F2X4zfRLBXu4njFE2HvWEm2ZkMxNvrqO8qicj%2Bcj7Dgf%2BC7jkGyazwEzaUZ4tcfTuBOjkXoO91uzZvmSOwO%2BmP5LcQUQlVzVXhFSZJhxAWnxnbV1Ee1%2BJ2wQKU6%2FJmQaRQn%2FXWC3jBCzc9dq7qH88sI8fHZOxUDM&X-Amz-Signature=3379402e1856a222234108f4777d71b2b7f616b9382f3c00945f07e9ea2e71dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
