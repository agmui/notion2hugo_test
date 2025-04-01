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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4BM37L3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCps478T0711C2cLhq2g1ZlDcP%2B4FPz%2BVWq4%2For1r4kmgIhAKppk2NboOKBLMr76PKNvqjErJDs7aj%2Bunf5BFGWPmwBKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCRxggKney%2BcgOVLAq3ANW1UZxZcR2kThh8u%2BfGuMD6%2BvcGWYhlScfqq%2BPpP8HOA%2F59ECf4jsfeEtr7%2FyRXGgBVCzPLIIg%2Bvo0r8VS5JTvicw68ghBrbjfCbWWNTE987lDwiAp2T8nDLBgfhkNz4QCM0nu6lWbHeWIJCBiWvkIWFVegJ7x7R9%2B1bM203PKGrjs%2FQe6bKjBw7EeTt6KxQDxnq%2FKM4KWID6oJ8bQNRWktyQanYcunjWVsxximaffssVZzPhuLqJj7pG04cjuLW1aJsAMfgoRNQHia1w2E7O3RuxH166DB4TSqDI1Z33O9uikPklxbvz8Zmr%2FZW6QCay08S6zrZb%2BWmQYtwMmelWhrMb609LwSEdFWpsXWcCSOBVsca1%2BitNNOVMzBPE7ZO%2B9J8LTED6xjKn3eC1QRKkBzlHuNjAXInF6IJfshZWFiUTjjI0tlklwXU2oMpzwfoVTQL0Wzp9TwsC5KWgg8sIl5UioguPqPMiFJfbTzNdJJOVWHNCeP%2B9BHhYYvh8YmF3XjF2xm%2BppJzH6I%2BtBpuTBCcNux%2FDyM03BeK84fLLW4TAsA1neYFCYg6Ybuv8lefbKwozpl1QWoU9e6lmZm1LOXokHBbQEKO9Jgcr93e7vCrk2sLdyZf6AJ9elyDDyoLC%2FBjqkAQKLgvZbrJkQ%2BP0izXYYqZHJJX5R9bC81KRTdgfnqjlxLlkzOg39dnuLMRFxBkhlO1L1MhLmMGashWYSn5s6HyUNi9S18NuA3%2FeLm4MWxHzeEOz8pLt8CP4wGQhkXBBHj4nhIFjFaxHwas3ChcDlCNFvICxpXk6UsfkweqUD9IX0DP%2FX%2Bz5%2BULTT3PFyiwz%2B0iiVwr9NzZ7BOeNaVATHVwSl%2Fgiw&X-Amz-Signature=b3c73ea227503ed888ccf5203e3f0bb3e5b1fd9f7dc4cf62f5036faa3a3c4e73&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4BM37L3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCps478T0711C2cLhq2g1ZlDcP%2B4FPz%2BVWq4%2For1r4kmgIhAKppk2NboOKBLMr76PKNvqjErJDs7aj%2Bunf5BFGWPmwBKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCRxggKney%2BcgOVLAq3ANW1UZxZcR2kThh8u%2BfGuMD6%2BvcGWYhlScfqq%2BPpP8HOA%2F59ECf4jsfeEtr7%2FyRXGgBVCzPLIIg%2Bvo0r8VS5JTvicw68ghBrbjfCbWWNTE987lDwiAp2T8nDLBgfhkNz4QCM0nu6lWbHeWIJCBiWvkIWFVegJ7x7R9%2B1bM203PKGrjs%2FQe6bKjBw7EeTt6KxQDxnq%2FKM4KWID6oJ8bQNRWktyQanYcunjWVsxximaffssVZzPhuLqJj7pG04cjuLW1aJsAMfgoRNQHia1w2E7O3RuxH166DB4TSqDI1Z33O9uikPklxbvz8Zmr%2FZW6QCay08S6zrZb%2BWmQYtwMmelWhrMb609LwSEdFWpsXWcCSOBVsca1%2BitNNOVMzBPE7ZO%2B9J8LTED6xjKn3eC1QRKkBzlHuNjAXInF6IJfshZWFiUTjjI0tlklwXU2oMpzwfoVTQL0Wzp9TwsC5KWgg8sIl5UioguPqPMiFJfbTzNdJJOVWHNCeP%2B9BHhYYvh8YmF3XjF2xm%2BppJzH6I%2BtBpuTBCcNux%2FDyM03BeK84fLLW4TAsA1neYFCYg6Ybuv8lefbKwozpl1QWoU9e6lmZm1LOXokHBbQEKO9Jgcr93e7vCrk2sLdyZf6AJ9elyDDyoLC%2FBjqkAQKLgvZbrJkQ%2BP0izXYYqZHJJX5R9bC81KRTdgfnqjlxLlkzOg39dnuLMRFxBkhlO1L1MhLmMGashWYSn5s6HyUNi9S18NuA3%2FeLm4MWxHzeEOz8pLt8CP4wGQhkXBBHj4nhIFjFaxHwas3ChcDlCNFvICxpXk6UsfkweqUD9IX0DP%2FX%2Bz5%2BULTT3PFyiwz%2B0iiVwr9NzZ7BOeNaVATHVwSl%2Fgiw&X-Amz-Signature=b62fd1e3eb903da6928c3fdc0dd1e57092b39baa499021bd9b2c92e5ef19b38f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
