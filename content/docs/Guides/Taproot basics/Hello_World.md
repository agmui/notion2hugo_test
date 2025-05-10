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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSVWLHG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH6vrpjf%2FdHgV89FSVfbeFdDVHqpMfbvgwZznwdYIskoAiEAuy5sAlCPsbZtg4C%2F7u%2BWcumjZRwcF6OZ0uSN2DT5ycUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINziq%2Bkycb4ASkjNCrcA0ZfBVb5%2BSqSMJWIhG819zzYwQkIA9ITnIf1hG1ExZacP0usmjwtC9yP2QRKLOdE8YdrCMqlnONue%2Fm7PWYNhjG%2B6Gt4nOXU4v1tea4o3anvrHsP9POmHdywD3kkDvImjEDq14phNLgzva6RGCZWjNaXQZEywulveIPKyl7tZ4%2F9duDbfsCUXTStqdUIaevfmwIB1yfEzCx3F8%2BtndsEuAtv7fkZB9TkAN%2FVm%2FOwcMPED4LDbLJzKX5CAUC4YH7pSCzN8n7GtcSOpLbvqjSZCeCMU6pg6wVEH6pG4u5mXESXFuW3wnRj6yBzSaIXv4TUORGhZdmGwCaD1xsEx0242FFGSAS9yhnO3U3QpC1%2BTNp7APPOjvwGUXRtBu6y168b6GpTjSdtJLER5kk%2FDc%2BbeFEm%2F1jEHjViZ2FLVJ67GsnwgaIn6jx%2Fp15ulePxGVSW0wOupqQ9X4xJ1B2awFF6U0%2BwvCLfs3dABPGOeUUkReDXxoZPuzGn%2FL%2B3TN7z2gJJOQB3lb7Foav5405p8%2B4YZj3lxdPSU%2B0fQw09LT54L8kwVKRQzqHaDnUb4O39wQ8sveBzLiHl9OPdVeOafr3lfen1kjRV%2FZtjfTL3lQod3wCXlDp9Ra4FawrV3d2XMI6h%2FsAGOqUBGcy5e1g5IILm9ey8ks4AvSdSMJK%2B29rUVS%2BfUW5yrgjIOQfRabjLLLLevc2rEgsjV1TLD0w5DwkSYvUwiy7QdUF7%2ByEURsBGLiNAgHY5C7V5fEvycZxUzg4JdbLlTfOl2%2BlTfpFpy1MILuR9bmoUSfJLHiU%2BtDiEAiRHJ%2BK2zM6uNiZk0mhkR0uBxD6QAoYWuJ74lemDlNeDPHmUDzuVWiCJbVdd&X-Amz-Signature=e13ab0ad2cb7de6c8cc6462eed3dce1bf10f14aeeb845a8148cbc68a3ae2f2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSVWLHG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH6vrpjf%2FdHgV89FSVfbeFdDVHqpMfbvgwZznwdYIskoAiEAuy5sAlCPsbZtg4C%2F7u%2BWcumjZRwcF6OZ0uSN2DT5ycUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINziq%2Bkycb4ASkjNCrcA0ZfBVb5%2BSqSMJWIhG819zzYwQkIA9ITnIf1hG1ExZacP0usmjwtC9yP2QRKLOdE8YdrCMqlnONue%2Fm7PWYNhjG%2B6Gt4nOXU4v1tea4o3anvrHsP9POmHdywD3kkDvImjEDq14phNLgzva6RGCZWjNaXQZEywulveIPKyl7tZ4%2F9duDbfsCUXTStqdUIaevfmwIB1yfEzCx3F8%2BtndsEuAtv7fkZB9TkAN%2FVm%2FOwcMPED4LDbLJzKX5CAUC4YH7pSCzN8n7GtcSOpLbvqjSZCeCMU6pg6wVEH6pG4u5mXESXFuW3wnRj6yBzSaIXv4TUORGhZdmGwCaD1xsEx0242FFGSAS9yhnO3U3QpC1%2BTNp7APPOjvwGUXRtBu6y168b6GpTjSdtJLER5kk%2FDc%2BbeFEm%2F1jEHjViZ2FLVJ67GsnwgaIn6jx%2Fp15ulePxGVSW0wOupqQ9X4xJ1B2awFF6U0%2BwvCLfs3dABPGOeUUkReDXxoZPuzGn%2FL%2B3TN7z2gJJOQB3lb7Foav5405p8%2B4YZj3lxdPSU%2B0fQw09LT54L8kwVKRQzqHaDnUb4O39wQ8sveBzLiHl9OPdVeOafr3lfen1kjRV%2FZtjfTL3lQod3wCXlDp9Ra4FawrV3d2XMI6h%2FsAGOqUBGcy5e1g5IILm9ey8ks4AvSdSMJK%2B29rUVS%2BfUW5yrgjIOQfRabjLLLLevc2rEgsjV1TLD0w5DwkSYvUwiy7QdUF7%2ByEURsBGLiNAgHY5C7V5fEvycZxUzg4JdbLlTfOl2%2BlTfpFpy1MILuR9bmoUSfJLHiU%2BtDiEAiRHJ%2BK2zM6uNiZk0mhkR0uBxD6QAoYWuJ74lemDlNeDPHmUDzuVWiCJbVdd&X-Amz-Signature=a7fc0c619d5d7ecbcaeb797009bf26ebc19787d295166d220c1cbe1925899ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
