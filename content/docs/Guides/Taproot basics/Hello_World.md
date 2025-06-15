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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV3DV6ZU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEh%2B0AHFUR%2BS4kL7uCw260otu3Q%2FKGDidl7kAU%2BmfkgQAiEAhhyGuqJzfOJtZhLp2xcWVitd0vSYKDpTt23o2I3uorAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBbSiYfsMSSUyfIh7ircA9Ikg6tqeReQByEd8EOWxoWmLKyb5U2gRgbV2xgYzit2ybSqoUBO0ll%2BysZDi6x52LR1z5uj7d1%2BR2Z60Jw2bSCb67Ww6Ted60qVAlolwF3YdvDcoxWD3kcTcKOPaAZ9uMUye%2FaFNQAThqcxCIJAE%2FlFJjPOrpxk%2FbSB23vrF%2FPJBRr0JOEO9BULQDyql4bpPk7ZpVVqk4TrxJKs4GuseqH8GFsqaEByrZNoRIkJV8QlD0AoB5iffbUkOlLspbiCyzbKl9nVp3OjS8LMyXtL0FObg99kUMmtxsfF%2BplWCUNpYRyJrvCM85TSwyHgvOiTCBXP%2Bn8%2B%2BKL5AYs700v7AEKBGIkCBH2FoQPaCbicHHh3jy2ng0lj2RSM0QkVGZmDcnJEfR5EJIK4DisvVBU8mB6F63LExLbVMc1MbqT65jaoXsG7B2a6gEb0oV0MGD7rdN9ynMMtrgz9xRJdjABRXdL553UrrUZTyA8PW0meNhesEJSkIc15OPHJ%2BjOjK9FB9y3yLTl5KCtRsJRA52S8aUOzMW1NA7UdjfR7wZYcXXHVbtg5CklFt5F83xGCuZjp0NoHwL35Bnd3AMwLL26oiuf6k1KRJZw4cYx64E9ozDHwn842UwN1d0Zz58noMJ6tucIGOqUBeuPb4d8hVEmmM6%2FICWP18J1HhYmXhfW3YxQEcyfMWSpVEpN%2FvZUC5FdUUcjp6N0Fwl%2B7ZrLsQ%2FL0CrpjUt0dl73Ts4UzExUP5HJzgkLbXHUtRKGLeR%2FvhX3hDLUhb66bzoAkDVXNwo0UUSujxiba8ZuuubWYcVi7rvcCbbuynVVsZ8%2FurSbCu8vt%2Bv3374gDAmaemocBwZynmVhQh%2FDBrykKM7Oe&X-Amz-Signature=013462268bacd8f9322af2f09f5930d2bef529d35a7b166a6937a3da38d64d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV3DV6ZU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEh%2B0AHFUR%2BS4kL7uCw260otu3Q%2FKGDidl7kAU%2BmfkgQAiEAhhyGuqJzfOJtZhLp2xcWVitd0vSYKDpTt23o2I3uorAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBbSiYfsMSSUyfIh7ircA9Ikg6tqeReQByEd8EOWxoWmLKyb5U2gRgbV2xgYzit2ybSqoUBO0ll%2BysZDi6x52LR1z5uj7d1%2BR2Z60Jw2bSCb67Ww6Ted60qVAlolwF3YdvDcoxWD3kcTcKOPaAZ9uMUye%2FaFNQAThqcxCIJAE%2FlFJjPOrpxk%2FbSB23vrF%2FPJBRr0JOEO9BULQDyql4bpPk7ZpVVqk4TrxJKs4GuseqH8GFsqaEByrZNoRIkJV8QlD0AoB5iffbUkOlLspbiCyzbKl9nVp3OjS8LMyXtL0FObg99kUMmtxsfF%2BplWCUNpYRyJrvCM85TSwyHgvOiTCBXP%2Bn8%2B%2BKL5AYs700v7AEKBGIkCBH2FoQPaCbicHHh3jy2ng0lj2RSM0QkVGZmDcnJEfR5EJIK4DisvVBU8mB6F63LExLbVMc1MbqT65jaoXsG7B2a6gEb0oV0MGD7rdN9ynMMtrgz9xRJdjABRXdL553UrrUZTyA8PW0meNhesEJSkIc15OPHJ%2BjOjK9FB9y3yLTl5KCtRsJRA52S8aUOzMW1NA7UdjfR7wZYcXXHVbtg5CklFt5F83xGCuZjp0NoHwL35Bnd3AMwLL26oiuf6k1KRJZw4cYx64E9ozDHwn842UwN1d0Zz58noMJ6tucIGOqUBeuPb4d8hVEmmM6%2FICWP18J1HhYmXhfW3YxQEcyfMWSpVEpN%2FvZUC5FdUUcjp6N0Fwl%2B7ZrLsQ%2FL0CrpjUt0dl73Ts4UzExUP5HJzgkLbXHUtRKGLeR%2FvhX3hDLUhb66bzoAkDVXNwo0UUSujxiba8ZuuubWYcVi7rvcCbbuynVVsZ8%2FurSbCu8vt%2Bv3374gDAmaemocBwZynmVhQh%2FDBrykKM7Oe&X-Amz-Signature=fb50c0859e4f9b75b3a41666ce5dffffca66d4ee493876b855c4af87d44fd175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
