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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5DBLXGI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENWMK8a5MnF4KKgyFICD%2BQZCGwHzRLk7FYg9FTMC3qhAiEAsf6oAuRo9f9a5pBbgynNwgsJYHIAmHtCaeJSXkySx9oqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7PiAKBsHnBCMwUDCrcA%2Bd1i7Xm5wzVm26DSJSKUEzQlGz8VdYHCOp07TM4diK%2F3H8hxRjgx2Lmhpg%2FFZJTuqinm9MDNgx5%2BOQDyk637XSi78wMqWhDvPBIh527QHSu24XENBasqRHi75MbB5L%2BbGZ%2Fg34Lvt0rkGIarhcosCezL0H9etWoBfsFZGCZqhhZ7SxW%2FR%2BmhziBjFu8ChWIpktupPQWp90XSfDcC7l53maQQcGmT88wGULa5jqvuktxdVbxz1mHPrJNl7UzTW714DAZ4cGicpZXysyd9FmlOTxw1vqdsFpor7ogduYyMD6AswemhPKrTrIw7BpMF%2Bu8O2FQRjyumg359ht573aUL4d9vHycol5Cpde6AzKTci5B6lOSs0ERl6pM0iXX3jlTSp7FCkrYf9ImQOYKDBinOJz9eveZq%2B%2BJkjdOFl8eAoJ9HjDeZmUOZGOKCs%2BN9dg8f8p7QB4sUnUz0a8m2YX6%2FMfLIuARwmnleS5mBTY9MipAKT14WpGnxts%2FBNQGPPTWn5Lb3q%2Bq%2BB3LfldXh8uwGEf1Vbs8Y6iK%2BepLlvRBQINH1LIWGqTTo8plIO97%2BJxONlDB6bZEMj2GnFWE7HtFAfNI%2F6ahifbDjnIQDvkZnDrcDw2nzFL7O6zkKQw3MLzs7cMGOqUBEalZPc43GWdt5Ky1flxrDsZghWJAxnCDejoL1ygrLJtEkh5jVstuk7BLvwyheZzAsdz%2FXouVaEKb1p3%2FB57GDbj9Ll7k61XiaOX8yyRksnaBMr5k4kEWc%2F9EDoH4ItrsfUGbDrC7EC0kQgKfKvGxvk7KO7kk%2BIxyOpDK%2BTw8Ryg1%2B8aMkTaGwGR%2FF1C53s6TmYKKBtCz6dYbcCW61n2cpwgx%2FMu2&X-Amz-Signature=4c48616cd2110199a7ff3fcfe55d81ec640c6b53f1b9891c5d30c7f5ad6da8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5DBLXGI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENWMK8a5MnF4KKgyFICD%2BQZCGwHzRLk7FYg9FTMC3qhAiEAsf6oAuRo9f9a5pBbgynNwgsJYHIAmHtCaeJSXkySx9oqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7PiAKBsHnBCMwUDCrcA%2Bd1i7Xm5wzVm26DSJSKUEzQlGz8VdYHCOp07TM4diK%2F3H8hxRjgx2Lmhpg%2FFZJTuqinm9MDNgx5%2BOQDyk637XSi78wMqWhDvPBIh527QHSu24XENBasqRHi75MbB5L%2BbGZ%2Fg34Lvt0rkGIarhcosCezL0H9etWoBfsFZGCZqhhZ7SxW%2FR%2BmhziBjFu8ChWIpktupPQWp90XSfDcC7l53maQQcGmT88wGULa5jqvuktxdVbxz1mHPrJNl7UzTW714DAZ4cGicpZXysyd9FmlOTxw1vqdsFpor7ogduYyMD6AswemhPKrTrIw7BpMF%2Bu8O2FQRjyumg359ht573aUL4d9vHycol5Cpde6AzKTci5B6lOSs0ERl6pM0iXX3jlTSp7FCkrYf9ImQOYKDBinOJz9eveZq%2B%2BJkjdOFl8eAoJ9HjDeZmUOZGOKCs%2BN9dg8f8p7QB4sUnUz0a8m2YX6%2FMfLIuARwmnleS5mBTY9MipAKT14WpGnxts%2FBNQGPPTWn5Lb3q%2Bq%2BB3LfldXh8uwGEf1Vbs8Y6iK%2BepLlvRBQINH1LIWGqTTo8plIO97%2BJxONlDB6bZEMj2GnFWE7HtFAfNI%2F6ahifbDjnIQDvkZnDrcDw2nzFL7O6zkKQw3MLzs7cMGOqUBEalZPc43GWdt5Ky1flxrDsZghWJAxnCDejoL1ygrLJtEkh5jVstuk7BLvwyheZzAsdz%2FXouVaEKb1p3%2FB57GDbj9Ll7k61XiaOX8yyRksnaBMr5k4kEWc%2F9EDoH4ItrsfUGbDrC7EC0kQgKfKvGxvk7KO7kk%2BIxyOpDK%2BTw8Ryg1%2B8aMkTaGwGR%2FF1C53s6TmYKKBtCz6dYbcCW61n2cpwgx%2FMu2&X-Amz-Signature=71158f127a823d8d6b40c7355c77b85b3022409ebc14eaf600ac053684b8837d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
