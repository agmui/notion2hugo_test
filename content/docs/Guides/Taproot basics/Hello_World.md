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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=50113d0a80086a0735df2f829e4df3c1836ef15a7970afe668e704421009fe64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEL437OY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6nEP6RMWt5Ss2jZX%2Fy%2FuX9%2FKWTE5j5%2FLEap6gx1eUYAiAScKzsEUmqT9SmR0aPcAa85%2BsO9LtYJ16OzU8btw5vliqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTEtTjshfexv%2F5d7KtwDdXxQIV8CglpyLC1oSEfc9akgcKZiZ3TzaOORCkkgLJFokShebOuE58kAs1RZK5YsVqQv88fqtHioxtWXNkgSWPZKwufQ2rllU0%2FS8X%2Fsfs9CgFeMTWu5GFp8%2Fu8rTMzM09jbH6%2Fbdz5RJM2cTkU5iLaT0k0RE6nkPLYR7ycu9DhN%2Fe5IxFxI0RIoepnMG9QvSpCn4ERP2ul2dZ2x1ofsnzgsSmHBqURfsGOgNA3KRJbntWZf2FpcxwQwQieZp0OSYKjNnAeShmBuXdFtpuO1IpwtOke1nBFDgvd8vYg7f5GPi7v0vcfpVIGX6H4t1WtaRd7pT2B3yaEWeDWcKy2flyi5%2BMb5YaxpvFwDNIE55Z%2Ft1XxFbGBjMwHoAlfhCSQ1wglcu6Hv8akx7jiyniIIVYd1jqTxIg6TgZwo%2BCB%2Bq8%2F7l1yHxQfDiZK4I3pNjgN4xAMGgBzJ%2BPIc9QTKUtUORC2qd2cOiENZLfq%2FdaF5FBOV1LUdBI5i03jodvOXdQdw3PE6QGLmHSE3W1NsMYo2rdh8Xq%2BcW%2Bz%2BsZc2r0mzxtmkVkWbDcu1%2B0gcDWQ2Vq8TUIuwondcGSt8p%2Bva6f9QFfekyq2VSxp7DpKtZ%2BbGoUZY8j4QopimJYlY%2B5wwsPXgxAY6pgHfyIR4yZ%2BGhPBIHxLzTsPD8duAj9qEQ%2FIw3wdLGlxTUjirLn89OXf31PUqzU5FFwLe9KkfgHvd5E9aJ4ks5k%2FdDoo52Afb630E3QGrq8%2BJgWXa9TRLWdGxfka%2Ff23joNfNIPuY498JYI%2B9ShcA5uzx7%2FYZTihnaN7NoVvs4t8U%2F1by%2B2rMMi7vjzA8B2g08Zpav%2BA5v5lbWR2L4tup6n6n8N5Exu7o&X-Amz-Signature=aba43c1972aca9920679de1d243d71dbcfc37c158672c41310309585d2bd7e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
