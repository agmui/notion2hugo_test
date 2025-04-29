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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGB5Y22Q%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPT33sNF85LzQO%2BJSp%2FAGA1g7DcFk%2FKmGtXVVzwByGWwIgU5nvaOvBWMnhn2lIyxXQVr5IUM8fRHiZKIvWttdNL4MqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImvgEpZRXer%2FG8oBSrcAxiQMkvWbdtxwEl0h47D%2BYcYw2Qzt74uQR7jFIx0UH2QTPcY4R9bq6Bz%2B94rRwbhBaqvLVuab7wr4jTUMyFAWlfVbLlEvLOaufQWQxORZCA%2FmiEYyUmlK1IGykRYvDBLE3IlGrVuYHeN9N12zzwKDj3edzyzoSfnk0VFc6nmRJgbEMs2G9pfHgujDgRj8dveOpWMqx2Tf%2FSgguXQtlT0VTX12RenkKVMI%2B1W5NRemeaM%2FbHfZgjXPYblHdhdD0AUijZl7CGtLk4drYIG4kd2cnJEk9NGnq7Anw9DlymAjD2To3Z%2FJpK9GNiWFRJR4BjnkzGR%2F6j6Ur5IjMa6foi%2FZvTL2T%2FRwIO9BeM2%2BTr%2BkhUYo%2B94jNchbgVkUi6PIcEaxsfsa2geASWLaQaq5KkRN6i72HKNf7sAZfufjc%2FP0lis6cuW8pTRW5xGVJ964wZ%2FRlx9ngFGTgGaPy%2FPQl%2BNsK5BUh9P1iWWDRwhfU8duvzHIRjhMzd%2B9IQXu4BByVon1A5scYDVMLFCBcEf%2F68KPIsyPdKUyMzsb1ZG7yCuqcG0tdn9YIo%2BDBvvzEuwEkGJ6DLqZ38rf%2F7yOeNKrq0lndEyWw42Zx1yqLzPvVrkO7ANE5QGGeL1Cc54FYhnMJLMwMAGOqUBS6fBd%2FS8a1hWFgNeeXiJ2oE09JLOnmqdmTNXw6jICoYmvXk5Dg61OyT1nGfSN0kQHNPJHDuotE%2BxS0viQcgxzet0lLBfXLJfRgjtLU7dW%2BpZA22ChiAUKhT3NG%2FDe0BoQDbX53jBpoCRGgQyU7QmXaBzuCP7mG3T7WqpEzEGIeFS6fMWVasAaDHX1YWmqh%2BjsbkZ1%2BWWmHDxbK8tj1GiRlWVFFBj&X-Amz-Signature=5ad0691906a069c26e06e92ca26ee50c657bb4f705282c69834f1ff630b25c54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGB5Y22Q%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPT33sNF85LzQO%2BJSp%2FAGA1g7DcFk%2FKmGtXVVzwByGWwIgU5nvaOvBWMnhn2lIyxXQVr5IUM8fRHiZKIvWttdNL4MqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImvgEpZRXer%2FG8oBSrcAxiQMkvWbdtxwEl0h47D%2BYcYw2Qzt74uQR7jFIx0UH2QTPcY4R9bq6Bz%2B94rRwbhBaqvLVuab7wr4jTUMyFAWlfVbLlEvLOaufQWQxORZCA%2FmiEYyUmlK1IGykRYvDBLE3IlGrVuYHeN9N12zzwKDj3edzyzoSfnk0VFc6nmRJgbEMs2G9pfHgujDgRj8dveOpWMqx2Tf%2FSgguXQtlT0VTX12RenkKVMI%2B1W5NRemeaM%2FbHfZgjXPYblHdhdD0AUijZl7CGtLk4drYIG4kd2cnJEk9NGnq7Anw9DlymAjD2To3Z%2FJpK9GNiWFRJR4BjnkzGR%2F6j6Ur5IjMa6foi%2FZvTL2T%2FRwIO9BeM2%2BTr%2BkhUYo%2B94jNchbgVkUi6PIcEaxsfsa2geASWLaQaq5KkRN6i72HKNf7sAZfufjc%2FP0lis6cuW8pTRW5xGVJ964wZ%2FRlx9ngFGTgGaPy%2FPQl%2BNsK5BUh9P1iWWDRwhfU8duvzHIRjhMzd%2B9IQXu4BByVon1A5scYDVMLFCBcEf%2F68KPIsyPdKUyMzsb1ZG7yCuqcG0tdn9YIo%2BDBvvzEuwEkGJ6DLqZ38rf%2F7yOeNKrq0lndEyWw42Zx1yqLzPvVrkO7ANE5QGGeL1Cc54FYhnMJLMwMAGOqUBS6fBd%2FS8a1hWFgNeeXiJ2oE09JLOnmqdmTNXw6jICoYmvXk5Dg61OyT1nGfSN0kQHNPJHDuotE%2BxS0viQcgxzet0lLBfXLJfRgjtLU7dW%2BpZA22ChiAUKhT3NG%2FDe0BoQDbX53jBpoCRGgQyU7QmXaBzuCP7mG3T7WqpEzEGIeFS6fMWVasAaDHX1YWmqh%2BjsbkZ1%2BWWmHDxbK8tj1GiRlWVFFBj&X-Amz-Signature=ed0131d243e2f60baa5d6971fc0531bec140a74ff681d8c41e308dcf47cca973&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
