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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK676C2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDkWuN9iihgSb8PcGkFeErp8BnzBn4Y1NDMhxZqxecxswIgY1f7GA5tfmdYxFhkfWtR%2Bo03ieKUhObjOgT95Rfe2kIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7YmRx4ggRwy%2FnAByrcA76jNA1oc3PFXW0yMxGdbo1T3DA%2BxQ9j6FLVTYM1AqWgEgB0nV0gaAkFLgjJFV%2Bol7FI2k0vQaPbREQ4CUCMZvIsW9Aqu%2BAZXEWins0zXhqie9B%2BlSlBo9q4vwcVZF3bCxEgr55hP0pnZXFBQ%2FX86OrUxBZNjbKmxFNQ1rwxWAEHlc0RQcWRHcdqtCr8W5JKo8Ar3%2FKWDDxTgsJh%2F0FuFmB901dsIneKTZ1zUvBjkT8h0FmZkZE67ucnTS1u0O2%2BliyvjieckM4MFmHG6GUVH230xXcKvWBPEZvJRDqQ%2BWlbSVF6TL36hLEhQlD31gaLJ6CS5G7g0Ha7JztAAiNpwCUEh4ywRupkDoghGvjVFI1RNTINpLGfqlV7uUE3TthM0jFjJUFv4WPIxXAFIO8y5SjOofr%2F6L4BmwAYVLQqmyUYMPIq5EKpa31OR2xf1BRmCBiIxGOSgoyOexGimUaEraVtE703HuhZ677ZToLU%2BK2LucgCHBMXgYcfX%2FvOZr6ESPYWgKTJp%2FHEbqHDQEWJpubNNa%2Fet4jCsOLuiRVmZFtPvleltWW5uSivDnr4a7tRCs4NzKIEh3rrEDfilRsc%2F9RniRlgOxLLTUoC0%2FamTb0nQnshBP7FKpi723KaMKPH4cIGOqUBQuWJnWGYbh%2BP7feSw2LJ2ir5mJU94%2B3pa7x499a%2BGqGNIKZ%2FRI7eNTxclFmYpcFl5YhwtVjxX%2BPRZYjzdJhadWzJkFUAQ%2BRUAzISA1ErBTC2L7wXkkLA4s4e0yy3Tu1clsexv7BIXzOEzxHSICo9Ie4mp8fZ8r4%2B2NbpME58Di1JLVw4WgEpUq77Cnj9KcX8RxaKiOBsUizaYSDiKRywo%2Bmf05pE&X-Amz-Signature=ad6911b917b9511e6496c0b6ee967307c40d8936576f3c0f6acf33af9439f7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK676C2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDkWuN9iihgSb8PcGkFeErp8BnzBn4Y1NDMhxZqxecxswIgY1f7GA5tfmdYxFhkfWtR%2Bo03ieKUhObjOgT95Rfe2kIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7YmRx4ggRwy%2FnAByrcA76jNA1oc3PFXW0yMxGdbo1T3DA%2BxQ9j6FLVTYM1AqWgEgB0nV0gaAkFLgjJFV%2Bol7FI2k0vQaPbREQ4CUCMZvIsW9Aqu%2BAZXEWins0zXhqie9B%2BlSlBo9q4vwcVZF3bCxEgr55hP0pnZXFBQ%2FX86OrUxBZNjbKmxFNQ1rwxWAEHlc0RQcWRHcdqtCr8W5JKo8Ar3%2FKWDDxTgsJh%2F0FuFmB901dsIneKTZ1zUvBjkT8h0FmZkZE67ucnTS1u0O2%2BliyvjieckM4MFmHG6GUVH230xXcKvWBPEZvJRDqQ%2BWlbSVF6TL36hLEhQlD31gaLJ6CS5G7g0Ha7JztAAiNpwCUEh4ywRupkDoghGvjVFI1RNTINpLGfqlV7uUE3TthM0jFjJUFv4WPIxXAFIO8y5SjOofr%2F6L4BmwAYVLQqmyUYMPIq5EKpa31OR2xf1BRmCBiIxGOSgoyOexGimUaEraVtE703HuhZ677ZToLU%2BK2LucgCHBMXgYcfX%2FvOZr6ESPYWgKTJp%2FHEbqHDQEWJpubNNa%2Fet4jCsOLuiRVmZFtPvleltWW5uSivDnr4a7tRCs4NzKIEh3rrEDfilRsc%2F9RniRlgOxLLTUoC0%2FamTb0nQnshBP7FKpi723KaMKPH4cIGOqUBQuWJnWGYbh%2BP7feSw2LJ2ir5mJU94%2B3pa7x499a%2BGqGNIKZ%2FRI7eNTxclFmYpcFl5YhwtVjxX%2BPRZYjzdJhadWzJkFUAQ%2BRUAzISA1ErBTC2L7wXkkLA4s4e0yy3Tu1clsexv7BIXzOEzxHSICo9Ie4mp8fZ8r4%2B2NbpME58Di1JLVw4WgEpUq77Cnj9KcX8RxaKiOBsUizaYSDiKRywo%2Bmf05pE&X-Amz-Signature=bb356a1059cd3f7ef8045b525941025414435d8e50bbeda337509003ef6a9956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
