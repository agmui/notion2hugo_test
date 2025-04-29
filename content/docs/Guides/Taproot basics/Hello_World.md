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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643AUZA6C%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6%2BLKn9r0eIjLOmKfTRvLOLK92TyKIEzS1UDMlQhauugIgZocP%2BKawPstBwgiGF0mxIwsouB6cuZCtCnKueqL2UGgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjSLdfbODdxkoi0TSrcAwlJ6qpmPFoS%2FRIZ6Dp2%2FzUhhUXumYyJQr%2FqXpXoLE%2BQmU9w0M5UWfqYvNKMsmRJ8WTF8VBnanEJW62Mz7Lly7z8b8EOSQrv4z93Y%2BGUy0BSyiYpJsdWxKIJC7LIOvkbh%2BB9D50a4bOcxDMHkIkxkkuvex6K0kOdVQJDny4LWD%2FdTv%2FsS%2BhM%2FH%2B5cyqFj5iBpjBdWN32BEWH61B2fz3EHQ8mNUIDF15FQrGyU1gAt0SlueTuwSRNBc%2FHkiokXSjixEgPz3dk%2F45FvsyEB9DV%2F4q0gb473FLN2i5Iko%2BE9MVL7Bcdctmvz0S8Lb2Hdx5T5JjvwAgFXtir4T7e8dEpf2v33uTu4H05PJyY86YJb15AXOjKD4cTBHXh8AFWnToTN1pLc95pYf1%2BI2RgIg73D7kS2k0X7Q1divkjpzBqr0dNjPWGXVYqYASOGphYBFBmhz32%2Bq5CG%2FTyApMAndS5sm7NrwFwgE8WOnm9WyTZXXVXFnk8m6jYOhFd86YkHqzMG%2Bu%2FKXApOCRX%2FNgNGwzXsGYxVd5flO5H1lvA%2BafWZvMlcqbm82P8%2FJDZw4E7Y5pzQSp65F55hijMlMLHra4XuF6GwL7Uyikqfrgs314KRR5plRTfV2d%2F2y5w18aCMID8wsAGOqUBtUxUsRi4vYG4IOJkLTuzNHIn9oJ8EL6Ddp6SbI8UCnOK8XJCz9gn5ZSck0iLqILvxHo3S3ezWts7q%2BGf4RgXLlpMUr%2BYPnkHZxi3DSsdUh%2FFuHqYi1ShNa27Xho4cH9IEh34S51c0OMktkyfB8tytLoAAxuR4R8CgvWKu7L7U6bSjuRpkiIC0PmGMF9PZ5Cq2G5AUZjVx%2FOpnbQ%2BO0OFR6xuLrHU&X-Amz-Signature=2ceabe2fa79626209ac4814c84363913defbb1695d34f1ba82711151571567e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643AUZA6C%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6%2BLKn9r0eIjLOmKfTRvLOLK92TyKIEzS1UDMlQhauugIgZocP%2BKawPstBwgiGF0mxIwsouB6cuZCtCnKueqL2UGgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjSLdfbODdxkoi0TSrcAwlJ6qpmPFoS%2FRIZ6Dp2%2FzUhhUXumYyJQr%2FqXpXoLE%2BQmU9w0M5UWfqYvNKMsmRJ8WTF8VBnanEJW62Mz7Lly7z8b8EOSQrv4z93Y%2BGUy0BSyiYpJsdWxKIJC7LIOvkbh%2BB9D50a4bOcxDMHkIkxkkuvex6K0kOdVQJDny4LWD%2FdTv%2FsS%2BhM%2FH%2B5cyqFj5iBpjBdWN32BEWH61B2fz3EHQ8mNUIDF15FQrGyU1gAt0SlueTuwSRNBc%2FHkiokXSjixEgPz3dk%2F45FvsyEB9DV%2F4q0gb473FLN2i5Iko%2BE9MVL7Bcdctmvz0S8Lb2Hdx5T5JjvwAgFXtir4T7e8dEpf2v33uTu4H05PJyY86YJb15AXOjKD4cTBHXh8AFWnToTN1pLc95pYf1%2BI2RgIg73D7kS2k0X7Q1divkjpzBqr0dNjPWGXVYqYASOGphYBFBmhz32%2Bq5CG%2FTyApMAndS5sm7NrwFwgE8WOnm9WyTZXXVXFnk8m6jYOhFd86YkHqzMG%2Bu%2FKXApOCRX%2FNgNGwzXsGYxVd5flO5H1lvA%2BafWZvMlcqbm82P8%2FJDZw4E7Y5pzQSp65F55hijMlMLHra4XuF6GwL7Uyikqfrgs314KRR5plRTfV2d%2F2y5w18aCMID8wsAGOqUBtUxUsRi4vYG4IOJkLTuzNHIn9oJ8EL6Ddp6SbI8UCnOK8XJCz9gn5ZSck0iLqILvxHo3S3ezWts7q%2BGf4RgXLlpMUr%2BYPnkHZxi3DSsdUh%2FFuHqYi1ShNa27Xho4cH9IEh34S51c0OMktkyfB8tytLoAAxuR4R8CgvWKu7L7U6bSjuRpkiIC0PmGMF9PZ5Cq2G5AUZjVx%2FOpnbQ%2BO0OFR6xuLrHU&X-Amz-Signature=847038a26b26e68e384ca5698a9014e0a75d460d5629775d5c8946ec0f7a1f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
