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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFSMGTL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDtQjMbwxHahf7gME04%2BmZxeanoFOA5FT5T5kN2s%2FJaAIgZBaduUgR%2FLppHOytlUpOTNTKlEM4VLgcVN6YmhSD6%2B4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDM0qsATRI%2BD3i5bvaSrcA%2FZtY4IeEPZe89fZEzJ5i28Ca1u2Cc3qJZTTyxlzQ%2BOz3GpJQ1JH453MaC%2FrLEMvMbaPv4GPGj5rMuc2vfpbMxwDqDuUkOV%2FM4aHAlSeg7VEB8YIsE01dQRpmvoXdK%2BUaVI4%2BM0cHn2LHvloZb1z46FamnR%2BAh2Z7AmF2sHx9ODbWTC%2FAlM8Tz9%2B%2BZk3S%2FcelgLsR8LMJqnW9P4YhsL4vH1KwOeF2OqlXFpMd%2B07G%2Bv3GZe9XPPZru541mFg7HYEDZ5HHsFTKWFxpPTcLqT37MtCIKaAFmiKHWzY14HXHL2QAhsIc70NuXN4puk5GpUv6R8ExmEVPwzuyLZAKZbn5JeB%2BYmUkY4J472BHgEmiotU7SC2MJyyq%2BtQ3BJzmxvV6jR7PY6tTgZpewSCuys8VYRTLyN8GaRZbOcDZvnd9nWiQ741iXlhVOOSS377y2w75FNmB%2FPdklRJyA9naMvRCNJOpu4E1dtSpwq1ht7tB7stonBq%2B%2BS6pFzWlfcDNl3p%2Fbt8n98lpg%2FarkeEwxyO%2Bys9yZow0KsqwhS8SaQp5z4aGSsq542ZNqGD1TVGUxgRo%2FIeeJ9FtW2g3fswpRR2T1itBL0hDoDf7QpFAoIrZlMwUPCvxJDVUFK1jPyZMNbh1L4GOqUBfSsnTgdKKZU7lxfU36nT%2FeNZLlcXad6jVKxCaF7qNFfEcmErLZhvMyZfcmz8ya5ZJ4dK3n9oIQY6ty3gZwfG7Dckqmqu%2FdQiJCzNkjwI9Bm7H1it0Zp%2FutvO2vOPS2huogF1QW%2BV5EZUwVV4G7u3gtnrQiW9Y7yd5hI%2BtGG6j5q0wbkk4E%2F9a8McrzmRUcC%2BhHuz%2FqwD5wu5%2BWBaVw1HvwNeuI7j&X-Amz-Signature=89d7463208ddeec9f38beadbc9df84f72b4ed7902405119c67b2e07565743823&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFSMGTL%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDtQjMbwxHahf7gME04%2BmZxeanoFOA5FT5T5kN2s%2FJaAIgZBaduUgR%2FLppHOytlUpOTNTKlEM4VLgcVN6YmhSD6%2B4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDM0qsATRI%2BD3i5bvaSrcA%2FZtY4IeEPZe89fZEzJ5i28Ca1u2Cc3qJZTTyxlzQ%2BOz3GpJQ1JH453MaC%2FrLEMvMbaPv4GPGj5rMuc2vfpbMxwDqDuUkOV%2FM4aHAlSeg7VEB8YIsE01dQRpmvoXdK%2BUaVI4%2BM0cHn2LHvloZb1z46FamnR%2BAh2Z7AmF2sHx9ODbWTC%2FAlM8Tz9%2B%2BZk3S%2FcelgLsR8LMJqnW9P4YhsL4vH1KwOeF2OqlXFpMd%2B07G%2Bv3GZe9XPPZru541mFg7HYEDZ5HHsFTKWFxpPTcLqT37MtCIKaAFmiKHWzY14HXHL2QAhsIc70NuXN4puk5GpUv6R8ExmEVPwzuyLZAKZbn5JeB%2BYmUkY4J472BHgEmiotU7SC2MJyyq%2BtQ3BJzmxvV6jR7PY6tTgZpewSCuys8VYRTLyN8GaRZbOcDZvnd9nWiQ741iXlhVOOSS377y2w75FNmB%2FPdklRJyA9naMvRCNJOpu4E1dtSpwq1ht7tB7stonBq%2B%2BS6pFzWlfcDNl3p%2Fbt8n98lpg%2FarkeEwxyO%2Bys9yZow0KsqwhS8SaQp5z4aGSsq542ZNqGD1TVGUxgRo%2FIeeJ9FtW2g3fswpRR2T1itBL0hDoDf7QpFAoIrZlMwUPCvxJDVUFK1jPyZMNbh1L4GOqUBfSsnTgdKKZU7lxfU36nT%2FeNZLlcXad6jVKxCaF7qNFfEcmErLZhvMyZfcmz8ya5ZJ4dK3n9oIQY6ty3gZwfG7Dckqmqu%2FdQiJCzNkjwI9Bm7H1it0Zp%2FutvO2vOPS2huogF1QW%2BV5EZUwVV4G7u3gtnrQiW9Y7yd5hI%2BtGG6j5q0wbkk4E%2F9a8McrzmRUcC%2BhHuz%2FqwD5wu5%2BWBaVw1HvwNeuI7j&X-Amz-Signature=70fd29ccc5c100090dece216b24f34acd87afe39ba8e132384161aacd04d6912&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
