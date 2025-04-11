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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXMN2AJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDLepnZpf2PRXhasAP2m5MzNpYCHyVEDDiu5EUyFSkYvAiEAzkoytXyevz7Ym6fb3%2ByRMynnHaaVxDAUm%2BWwUFyxRacqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbqXp7URgJgZWf7LyrcA94s0auLH9tqANoslVCS8kjoOOkFxweowThgzvma6amR3QkNsSRGqy4YqRJdW%2Fu6R6C7JU5B2Z0UHMMrGECiVRSqmZydwS5Hf%2BOuH5iGEPHkmW%2F50URIr%2Fk1p7Ah5zGY2pr3f8JnykKkZaoRcfvnVhEJd6V9kkOqbhSFFISnztOim4g2ucBGCVH%2FkfERzcxSFQ%2FvMLMYkU2f%2BrnX8mqwGJAJT%2FMP4KNZRqYpKiJ2ysEEEMUr0SbjJabrstZcOR%2BX6H9zk%2FBv0IQc6qpIou7wazm1goI%2B99dQlnsfMGzfSPMPf7T8dT70M%2BFMWUdgOUKOo0PzzQVkLPPsonjQUqkM2%2FntzyDJTmZwGM3HF20Drg%2BflHvFsmz9D9DTZ%2BxG1EYor65iehzhRGQbk5yOp%2FcwYzI4cWz0OLf4tHKucaHGzZGBCpuhVUOmYQAoQbfNUtjnBbMz7Jc131QFYgqaWdiDet8eFVwmyU8F5pM1NxsT7u%2BmIWbuRBSdh%2BsIt2j3Khj53nF90YLCjYBIMglL5PWxj%2BpaAufDkZtfjZMVKEN2YhyT3X0WjEnJZNsrNHc94l3z1277fxcxgI3WzbO7fxQWG8GQ%2FZa%2Bnk0WRb%2BB7aQesvD5AbM3602buBO3NtMyMJbE4r8GOqUBxGPk3LaHPHRbfNZCTe7M26N1V2tJ5lX8B4ubFgsVVaGYdOoBuR5WNJ4CA8Fn6MlY%2BDMKGXRI6n0gjrJmOU6eYkceEi9jcyxNFzNUpYbI1BZiRq8gXnuZXEwGh5ddcFpRtO4%2BLuQW9zR%2Bd8QNgRflLB8HH%2BIAT448C6C4eQ5kh0BOpdB5Wi63tzwSwHKmFebe2DDm2a6FPDXLrxE6gjRGNzV9pr%2Fn&X-Amz-Signature=d2b23034734fa34ec36ded0219974d5fc97a8b16a4357bb8904ed4d5d8ba37fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXMN2AJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDLepnZpf2PRXhasAP2m5MzNpYCHyVEDDiu5EUyFSkYvAiEAzkoytXyevz7Ym6fb3%2ByRMynnHaaVxDAUm%2BWwUFyxRacqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbqXp7URgJgZWf7LyrcA94s0auLH9tqANoslVCS8kjoOOkFxweowThgzvma6amR3QkNsSRGqy4YqRJdW%2Fu6R6C7JU5B2Z0UHMMrGECiVRSqmZydwS5Hf%2BOuH5iGEPHkmW%2F50URIr%2Fk1p7Ah5zGY2pr3f8JnykKkZaoRcfvnVhEJd6V9kkOqbhSFFISnztOim4g2ucBGCVH%2FkfERzcxSFQ%2FvMLMYkU2f%2BrnX8mqwGJAJT%2FMP4KNZRqYpKiJ2ysEEEMUr0SbjJabrstZcOR%2BX6H9zk%2FBv0IQc6qpIou7wazm1goI%2B99dQlnsfMGzfSPMPf7T8dT70M%2BFMWUdgOUKOo0PzzQVkLPPsonjQUqkM2%2FntzyDJTmZwGM3HF20Drg%2BflHvFsmz9D9DTZ%2BxG1EYor65iehzhRGQbk5yOp%2FcwYzI4cWz0OLf4tHKucaHGzZGBCpuhVUOmYQAoQbfNUtjnBbMz7Jc131QFYgqaWdiDet8eFVwmyU8F5pM1NxsT7u%2BmIWbuRBSdh%2BsIt2j3Khj53nF90YLCjYBIMglL5PWxj%2BpaAufDkZtfjZMVKEN2YhyT3X0WjEnJZNsrNHc94l3z1277fxcxgI3WzbO7fxQWG8GQ%2FZa%2Bnk0WRb%2BB7aQesvD5AbM3602buBO3NtMyMJbE4r8GOqUBxGPk3LaHPHRbfNZCTe7M26N1V2tJ5lX8B4ubFgsVVaGYdOoBuR5WNJ4CA8Fn6MlY%2BDMKGXRI6n0gjrJmOU6eYkceEi9jcyxNFzNUpYbI1BZiRq8gXnuZXEwGh5ddcFpRtO4%2BLuQW9zR%2Bd8QNgRflLB8HH%2BIAT448C6C4eQ5kh0BOpdB5Wi63tzwSwHKmFebe2DDm2a6FPDXLrxE6gjRGNzV9pr%2Fn&X-Amz-Signature=4de1cb4bc89ad92b8778ee85c10fb762cd1b138495de9d9a458f66b95147cddc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
