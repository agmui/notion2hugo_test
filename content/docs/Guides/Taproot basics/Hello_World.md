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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7S5FYG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoIRg9EalS%2FSL%2BMzOecHl3Gx4RhssqOLEYHxwN09dLrAiBIe3jLAIPo2sz08lUqd9Nuv%2FeL0QeB%2BSu7G0%2BhmEBUfyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjdbB2Jx%2B6d9McPZKtwDkPKYIbVW6AsWvnxmjEjX0q3EcHmoy0RuknPmecx1mBbQ7TGoWFUxStB%2BsjKB%2Benj7WbgCLqFj0CAKzn3x9ecrxSiYH45kHOoW0vKL5Rg06Peh6cb2vbAS6eNSrssMSsUWwJXUozh2AHbZbJ4BXMe2i8FDTh%2BOSWELXXchtPU%2FusEXXJiEymWllxAPxkQ%2F7ECi3rfCh1JQXk%2BYb96E5N2Drxrcr5mLFmhKldbZRuOjdVy5phv1fb7VLzrZIv6kVdbW8NPNjylWSjR4eTyOfYRB%2BX8LyOZFxKs02lFO%2FfA%2BNan%2F5EY5ri61u4ykWw1JwuW%2BcYW0YRGEedqvdWtr7xb5oztWrBmp0PSDTl3adlmqkjggigOoL752tc2VeS%2B9EfE7eGU2gy%2BYVmUPtYG3iakqQUahhuBvC4lE%2Bd6rcZZ2rgePJeWwzMfsowrfo%2Bxl99SSWxf4zgmhoZfkdEzrLP6g9xqJjHoES7zZ0EY5xkA%2F%2FOvxONgSmRjVheXFnvVKLgYt%2B9xVqrUmYNNHWAtdcC0qtaLvcJXH1q0Lom73STUDCHPxRTvBrUG6LYN6M4rzj27gfWlbIgBuTaeme%2BGyXSAYg2sIFH8WIVbzCVR2Wz6KxieUTSSjMhn1uYbWx8wic71vAY6pgH%2BmK6zY0ma9%2Fb0ocINFjc54DeRb8BtZRM7lZ%2B5OwI68QYieVyMKtobfcSOdRSxdK9Od7u9N8SXzry2WOzipulQ8V6NatiDGGDWUAogOgAW7ogy%2FEQlx%2BsMQpUv0MdhDJGfZpGtST55Y9Y9PnmLyNBdtYy51PJ7T7lC7OvRR8eKK9qJO3F%2FsIi1jp0Rsl7sZJQu6Rfvrnd9x5zBJLvdyI46drvIsWZt&X-Amz-Signature=4e8490717947445a797b6b4522c4747580aa2fab9801da5a97b5347da462226c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7S5FYG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoIRg9EalS%2FSL%2BMzOecHl3Gx4RhssqOLEYHxwN09dLrAiBIe3jLAIPo2sz08lUqd9Nuv%2FeL0QeB%2BSu7G0%2BhmEBUfyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjdbB2Jx%2B6d9McPZKtwDkPKYIbVW6AsWvnxmjEjX0q3EcHmoy0RuknPmecx1mBbQ7TGoWFUxStB%2BsjKB%2Benj7WbgCLqFj0CAKzn3x9ecrxSiYH45kHOoW0vKL5Rg06Peh6cb2vbAS6eNSrssMSsUWwJXUozh2AHbZbJ4BXMe2i8FDTh%2BOSWELXXchtPU%2FusEXXJiEymWllxAPxkQ%2F7ECi3rfCh1JQXk%2BYb96E5N2Drxrcr5mLFmhKldbZRuOjdVy5phv1fb7VLzrZIv6kVdbW8NPNjylWSjR4eTyOfYRB%2BX8LyOZFxKs02lFO%2FfA%2BNan%2F5EY5ri61u4ykWw1JwuW%2BcYW0YRGEedqvdWtr7xb5oztWrBmp0PSDTl3adlmqkjggigOoL752tc2VeS%2B9EfE7eGU2gy%2BYVmUPtYG3iakqQUahhuBvC4lE%2Bd6rcZZ2rgePJeWwzMfsowrfo%2Bxl99SSWxf4zgmhoZfkdEzrLP6g9xqJjHoES7zZ0EY5xkA%2F%2FOvxONgSmRjVheXFnvVKLgYt%2B9xVqrUmYNNHWAtdcC0qtaLvcJXH1q0Lom73STUDCHPxRTvBrUG6LYN6M4rzj27gfWlbIgBuTaeme%2BGyXSAYg2sIFH8WIVbzCVR2Wz6KxieUTSSjMhn1uYbWx8wic71vAY6pgH%2BmK6zY0ma9%2Fb0ocINFjc54DeRb8BtZRM7lZ%2B5OwI68QYieVyMKtobfcSOdRSxdK9Od7u9N8SXzry2WOzipulQ8V6NatiDGGDWUAogOgAW7ogy%2FEQlx%2BsMQpUv0MdhDJGfZpGtST55Y9Y9PnmLyNBdtYy51PJ7T7lC7OvRR8eKK9qJO3F%2FsIi1jp0Rsl7sZJQu6Rfvrnd9x5zBJLvdyI46drvIsWZt&X-Amz-Signature=0ed73422f0af74b839c18c2b87dd626e38646525333642a17a67fe71ac397a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
