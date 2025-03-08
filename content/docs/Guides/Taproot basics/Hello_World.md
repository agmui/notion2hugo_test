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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNSVDMI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDUu%2BSTFVz%2B%2Fw7Ayf3chksliVb8GzA57cNFH%2BvSXtKGoAIhAOghiYaNwlDWD18mJnAwpmE%2Fg%2FTktjFI7m1TRLTv3gPeKv8DCGAQABoMNjM3NDIzMTgzODA1Igyu0Xp6OJMHJbAohhIq3APQK0i4z0VRlpI5zkbhGSUWWpKDOR73S%2Fc5auvuzYk0JCk%2FPGMlGEq5Ov%2BwA7R0JKZ1TGqc0ZE68S2qOKNWqXRlZkukBgz3%2FoQoudfNd6xruwuRrqaVJMmznv%2BPXihSSUPnSZ0gA7VtWhLWdLZEOGKah5vwJZGRhVz8ya3Sh%2FCpOZlXix44Jkd9HLgKnV%2FwWUxBVmJh12IhkOZN5U8exIEliePB3FhZpCPTPj7J93%2FhLYlD0rfoX2g7UcmnmqW0ILfmrnAvBlKdyPZDsRMk1Uvzi%2Bu9jEXCbuQTEp%2FoaQhS%2FV7fhH1CHot2Zrgu8ivGf9jMjsZIxQS%2FgJuJ7DUddTVMmCAQ4%2Foz4%2FqJ3wachs7PN33F5RTm3geilpyz0FdJY3AMKrcbloLQhdqAD2tACQcxo2E91i%2BJ9vQDElpsJAKe3x2JfLQ%2B1JsGa3YdXpkC01UPFvVHrhNkmdlxbZDQ71dJlMdLHVpy4GLsI8XpU8QXLuTT7EHh%2FcikL7g1hWUcn56%2Fyc54i7came0FB1eOR8nO3aN02cvvoHAn9iOnYXJ1AFfQx6pKKWb45Tr203cgqkxsATAkPhJnjtDEtqVqfAOfh1V8ynHRDGgRvhiP37pF5kuk6v14gfCbftd%2BfDCSs7G%2BBjqkAdFLCAQSm3DpYfO%2Bhn%2B7i%2BlCsLKKDaEKVicv%2BX3GkZ0M4KL%2FlOTt5DdHa7e2AdHmRYZxiaBCWGwRw%2B4lJlsJN17EZaMoOzmOMPbEXoEZ1mNkBVKAlR%2BaE%2F4ZiqLWw%2Fs9ZL0b1uQWNhpqmc8qCPEY8zHJs76XOxbns9pzvTEXz0ZNdd5JIn4F%2FgLiR9IjM28SvnSeM8elHDH5V7KgS%2FF%2FNFUmRk6Q&X-Amz-Signature=e30787bfefa78663a256c220c8a835482d2ca90ce6993d214521dc311e66bcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNSVDMI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDUu%2BSTFVz%2B%2Fw7Ayf3chksliVb8GzA57cNFH%2BvSXtKGoAIhAOghiYaNwlDWD18mJnAwpmE%2Fg%2FTktjFI7m1TRLTv3gPeKv8DCGAQABoMNjM3NDIzMTgzODA1Igyu0Xp6OJMHJbAohhIq3APQK0i4z0VRlpI5zkbhGSUWWpKDOR73S%2Fc5auvuzYk0JCk%2FPGMlGEq5Ov%2BwA7R0JKZ1TGqc0ZE68S2qOKNWqXRlZkukBgz3%2FoQoudfNd6xruwuRrqaVJMmznv%2BPXihSSUPnSZ0gA7VtWhLWdLZEOGKah5vwJZGRhVz8ya3Sh%2FCpOZlXix44Jkd9HLgKnV%2FwWUxBVmJh12IhkOZN5U8exIEliePB3FhZpCPTPj7J93%2FhLYlD0rfoX2g7UcmnmqW0ILfmrnAvBlKdyPZDsRMk1Uvzi%2Bu9jEXCbuQTEp%2FoaQhS%2FV7fhH1CHot2Zrgu8ivGf9jMjsZIxQS%2FgJuJ7DUddTVMmCAQ4%2Foz4%2FqJ3wachs7PN33F5RTm3geilpyz0FdJY3AMKrcbloLQhdqAD2tACQcxo2E91i%2BJ9vQDElpsJAKe3x2JfLQ%2B1JsGa3YdXpkC01UPFvVHrhNkmdlxbZDQ71dJlMdLHVpy4GLsI8XpU8QXLuTT7EHh%2FcikL7g1hWUcn56%2Fyc54i7came0FB1eOR8nO3aN02cvvoHAn9iOnYXJ1AFfQx6pKKWb45Tr203cgqkxsATAkPhJnjtDEtqVqfAOfh1V8ynHRDGgRvhiP37pF5kuk6v14gfCbftd%2BfDCSs7G%2BBjqkAdFLCAQSm3DpYfO%2Bhn%2B7i%2BlCsLKKDaEKVicv%2BX3GkZ0M4KL%2FlOTt5DdHa7e2AdHmRYZxiaBCWGwRw%2B4lJlsJN17EZaMoOzmOMPbEXoEZ1mNkBVKAlR%2BaE%2F4ZiqLWw%2Fs9ZL0b1uQWNhpqmc8qCPEY8zHJs76XOxbns9pzvTEXz0ZNdd5JIn4F%2FgLiR9IjM28SvnSeM8elHDH5V7KgS%2FF%2FNFUmRk6Q&X-Amz-Signature=b9a182653c0780c97d856c514888ba16f3a7850a0b63e3583d9432b8f1844f79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
