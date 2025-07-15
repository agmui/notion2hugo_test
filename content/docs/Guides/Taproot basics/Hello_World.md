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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCY3HDG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTq7qtwRJcq7Akfgm8uKWWtyG7dsG%2BOY7UEaL5A37n9gIgEKZsupMq01HRhPjwy4p2yC8Zxp6l9jw7wGFNybJL%2Fx8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCxeme6CXh8D5rxhRCrcA3f8XrU%2BRd65vT%2Bo3oBqtQdzFPuQ6Nv1HozF%2BX12ZMQFNO0b1KQK1cyQT0mRbvmyjytQRsDVmmft%2BkBdq2ZVrWCcl3SFtPWbeQHn1b9Zdmud4EnkFrJxiEkB5JunrNLgqRhDlTRk2w7CGOHxb7fIg6%2BMU1OmAWrszLJGMtY60sAlJPZ1ZLjZqJGkDPbxTbLDXy7q2kQEekBDY%2FBbFqjh1Es23vkYhjxyqG%2BnZlKLoYgdtL1QAZ3BrmeN47MLISWhsRzQkdGRokhpyixWk%2FwCb9NNI8YQCB7PQ8CamyBIocQwP10kIW1S3X1aDvjqlCAULZhfoe3y8Ij8UbvT%2FPXCziVeFxZGsOxCrirf0JbQD5KDsGDHqiu08SYnnSbRo2SjkDxFtSt5Dax9w6uPv1JWG9vms1I0Bz66Y3DNFF%2FORg3f%2FTfDkcSH9Z2IuSnyx0xIcCl6%2F9dOVKChuUEcbaE4uG5OLZCYwWii9tzKZsgaYeEFuyFpMQnXWCbf%2BanobOuYhBKO0ME2X4tROHde7kep9DLCAsLt6zh9QwN9GhP7lyrv5tYKSNm3r%2FpA7HZ7uOORX66%2FtX46f0DUslC0EnuK0J34EpbqWSTYMMZ9ySuHhj4KogctyScF0%2BTayc9FMJqG2sMGOqUB7Af0pG2oSUBqjgO%2B6uU%2Bu5NLzXbLQjBGc%2FQlUD65dN%2B7ifwTop879yFIYb8l3KJAUc11ECVv5ebNPPCTrzwnEHXNIBIOiWgv8lXzZVL3ZRrWPfa7maRkWu1TwbNCxgquCDkNdYQxxl8OnXqIqEqH%2F6q1yFWnycWHAZTuyj4SLeliifL%2BTsaBUZWLj9dFSygE%2FU47LHbO64%2Bt61INZoCCrkZWXLIn&X-Amz-Signature=710839376dce0b331355abea5b2973877c01c39a8efbeceff09b6239e12d7302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCY3HDG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTq7qtwRJcq7Akfgm8uKWWtyG7dsG%2BOY7UEaL5A37n9gIgEKZsupMq01HRhPjwy4p2yC8Zxp6l9jw7wGFNybJL%2Fx8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCxeme6CXh8D5rxhRCrcA3f8XrU%2BRd65vT%2Bo3oBqtQdzFPuQ6Nv1HozF%2BX12ZMQFNO0b1KQK1cyQT0mRbvmyjytQRsDVmmft%2BkBdq2ZVrWCcl3SFtPWbeQHn1b9Zdmud4EnkFrJxiEkB5JunrNLgqRhDlTRk2w7CGOHxb7fIg6%2BMU1OmAWrszLJGMtY60sAlJPZ1ZLjZqJGkDPbxTbLDXy7q2kQEekBDY%2FBbFqjh1Es23vkYhjxyqG%2BnZlKLoYgdtL1QAZ3BrmeN47MLISWhsRzQkdGRokhpyixWk%2FwCb9NNI8YQCB7PQ8CamyBIocQwP10kIW1S3X1aDvjqlCAULZhfoe3y8Ij8UbvT%2FPXCziVeFxZGsOxCrirf0JbQD5KDsGDHqiu08SYnnSbRo2SjkDxFtSt5Dax9w6uPv1JWG9vms1I0Bz66Y3DNFF%2FORg3f%2FTfDkcSH9Z2IuSnyx0xIcCl6%2F9dOVKChuUEcbaE4uG5OLZCYwWii9tzKZsgaYeEFuyFpMQnXWCbf%2BanobOuYhBKO0ME2X4tROHde7kep9DLCAsLt6zh9QwN9GhP7lyrv5tYKSNm3r%2FpA7HZ7uOORX66%2FtX46f0DUslC0EnuK0J34EpbqWSTYMMZ9ySuHhj4KogctyScF0%2BTayc9FMJqG2sMGOqUB7Af0pG2oSUBqjgO%2B6uU%2Bu5NLzXbLQjBGc%2FQlUD65dN%2B7ifwTop879yFIYb8l3KJAUc11ECVv5ebNPPCTrzwnEHXNIBIOiWgv8lXzZVL3ZRrWPfa7maRkWu1TwbNCxgquCDkNdYQxxl8OnXqIqEqH%2F6q1yFWnycWHAZTuyj4SLeliifL%2BTsaBUZWLj9dFSygE%2FU47LHbO64%2Bt61INZoCCrkZWXLIn&X-Amz-Signature=c92791fdebc03028c9b57ec7847edd819eed87963a742de7082579ef96a01ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
