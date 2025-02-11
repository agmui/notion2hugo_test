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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTKVTUM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUcgaeYEy34QDvHhhLS1tRljdvVLoIk%2B0s8BxKV6ahUAiBI8DyGPyIVMecnydA%2BVeOdNtUGCEy9Qs3CTbogXxlPYCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNTzxELTILE8kGuDYKtwDdyGLgmKKHc8Jy%2FDFqa7nIuuePXV9rWr4qP9vp1ONejg%2FJZ4tgb6208rhVhsuGArUUUG%2F1bodCoJKBpLsSiaaQOxp8wWDlbO4PnYRaqFC9MDYrICM6Y78DBH1ia5kgI9mIJdFzvXr6CR9JGfQ%2FSX9QdwEyjSUWXpN%2FDXCYhu6q2SNhQZecY%2FtZ5GtMS6uVVJsHCfhSH7w%2FkvpMLGkw2quZG6qAfrj8s3Foa8RrMmxj9319TpQYScjHVO0PKdvbsFwhq0yYnmxQDFWRZUyU76ye%2BcNInn4qKU0tMRVfO5jeqdxtj3zarHIzks%2FL0hNizi%2FsR%2F0jU4rXTLm5W9iWGUUE5N9YPXyBC9bwrlK4q1S2aC6b64xR4HYUmn3ygd0uwIpXVaCNRVaGIoUhrU1EmzFb%2BnsBdJ8eJN5t16SaPrEpRQesnRaCvBXMmrf%2BFP%2BkljdM%2BpEdApwF%2BwpyxNNc17a4eAmwGtwI8Ml6JLspmYuIC4Ry2Z2S2a8oDhFXWLlQCkO8a880h9rW11OtmAxyhwpvfZJi9l665Yt4feLzXkburArg1n2m0x1ZKocaBOMGfO%2BW1wZ2Qy12vlGyYc9VKsh%2FCEzpTyPnX5VhV1u3bHTwlTVo2mqln0Fqh%2BaMdgw2qyrvQY6pgHKWO5RV4fXTFkGeR7IO2r9T71BeBXa%2B49nTOPGUSp88rXetaVPP1rsxtWnLGDxELzrXoYAejaR4Zq4YgNKzKsUbs4sbouwJPb76aBDGm5OTq4yymFdLPFqr2BxymOnFTh0zlPrDdvPW3ZJrSOW5n6hPhG4xqDD0J3Ospa9rCpTr9YK3otiLVFeQEfeMtKq6NkPPq5h4Ls%2FzyjX70fuR6yvASM%2F7hxV&X-Amz-Signature=415ea0fcff990dc54a870a88877f2c6db6a9f86ab6d2e4d143e936a6681f7e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTKVTUM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUcgaeYEy34QDvHhhLS1tRljdvVLoIk%2B0s8BxKV6ahUAiBI8DyGPyIVMecnydA%2BVeOdNtUGCEy9Qs3CTbogXxlPYCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNTzxELTILE8kGuDYKtwDdyGLgmKKHc8Jy%2FDFqa7nIuuePXV9rWr4qP9vp1ONejg%2FJZ4tgb6208rhVhsuGArUUUG%2F1bodCoJKBpLsSiaaQOxp8wWDlbO4PnYRaqFC9MDYrICM6Y78DBH1ia5kgI9mIJdFzvXr6CR9JGfQ%2FSX9QdwEyjSUWXpN%2FDXCYhu6q2SNhQZecY%2FtZ5GtMS6uVVJsHCfhSH7w%2FkvpMLGkw2quZG6qAfrj8s3Foa8RrMmxj9319TpQYScjHVO0PKdvbsFwhq0yYnmxQDFWRZUyU76ye%2BcNInn4qKU0tMRVfO5jeqdxtj3zarHIzks%2FL0hNizi%2FsR%2F0jU4rXTLm5W9iWGUUE5N9YPXyBC9bwrlK4q1S2aC6b64xR4HYUmn3ygd0uwIpXVaCNRVaGIoUhrU1EmzFb%2BnsBdJ8eJN5t16SaPrEpRQesnRaCvBXMmrf%2BFP%2BkljdM%2BpEdApwF%2BwpyxNNc17a4eAmwGtwI8Ml6JLspmYuIC4Ry2Z2S2a8oDhFXWLlQCkO8a880h9rW11OtmAxyhwpvfZJi9l665Yt4feLzXkburArg1n2m0x1ZKocaBOMGfO%2BW1wZ2Qy12vlGyYc9VKsh%2FCEzpTyPnX5VhV1u3bHTwlTVo2mqln0Fqh%2BaMdgw2qyrvQY6pgHKWO5RV4fXTFkGeR7IO2r9T71BeBXa%2B49nTOPGUSp88rXetaVPP1rsxtWnLGDxELzrXoYAejaR4Zq4YgNKzKsUbs4sbouwJPb76aBDGm5OTq4yymFdLPFqr2BxymOnFTh0zlPrDdvPW3ZJrSOW5n6hPhG4xqDD0J3Ospa9rCpTr9YK3otiLVFeQEfeMtKq6NkPPq5h4Ls%2FzyjX70fuR6yvASM%2F7hxV&X-Amz-Signature=78314dd8124d36fe17e9c29ecc7f229d236f3ba7e58946b93784e14a71f91302&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
