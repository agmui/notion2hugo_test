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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DGHMWHT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFFmGn8DTl5vuwhT9qBT28Kfvi4Xfy5m4ezJcZARg2mPAiBmRUr1jkfuTlNE%2F25%2FEI5yewVxS%2B9MjNw3rsajoFmskSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMyoj%2B7vEEo0KoS4icKtwDIF9EKe%2F8QwYEIVa9jSJfGjRUz4bUTaxLTBAAdcJPJU%2FPlGL1HlkplFNHhSXWhiKM3szcD2u17M5Uyoc%2BJaF7dTLDrSpungqF84ct91qKR4XkB6fm9cY0lmGuO84Rcuq20uukCGEjJFRIe%2FyB0bU544i4mKruSk5bz2hU%2Bk1WYsijxsAVo%2FxrPUkVkR4wgBjWSNwFD6sMSiK26pD7yvFnumbFV90NOrC0kJxbpU6n8h5on4XnqcY54IW80te135AA%2BUtyRSGfZIUHDenknvZ2Pm4bjdHuLQbCNlihi2uw1Vu2reqe%2BzFkDGlXHwqf8mTMstZmmH1aJV7xIm%2FJGC7pj2iMsaTHUNuMiHH4QtYydQM9g61vJt6I%2BXqYSQBeagieJePzYdLdR9fNsxM6pULWF978LZXnJlQxrGn1FX7fE5th%2Fxhtk6kEva1JCeav1CaJwBcHY0ELIvjrtCXLMLRWFPFylnxXu2WpDO0CV2d4N%2F5z%2FE6ircMnHhgaT%2BjJQ4NgpgaAloS2rXTdqj0pdSNwPZlwJ0u1YoFXWHDd3pNzVkLQVDGksenzhyil6Zkgw1z45nrosJzyJdQN48wvRumf46tIG1W8DSQs8nYKvaVdwQz%2Bblold9smtl3%2FdGcw7JqCxQY6pgE8jssJG0gQeZI2jw0KdCG0Au61wLwCkNx4mP2K0u3jG6eHYC3QfqoElMRKunFSTnqdQvjoaxzIccITwEbTrOwNBJpuidWpbP0k4S80gN7KYbkjQGOshj5P9q8eeM1Ebx9ZqFaHbU7TfO5KT6IbnMMo1SIbLkuxNDJ8M%2B4dJprbYzqtrVSXRwLcntTAzDm8MXd5S5vQBEPTys8XKkEW8bZf5JTZuxX2&X-Amz-Signature=95350b88f647d5dafcdc56bdd3015e410d64fc57971c3a8bf60082377e767b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DGHMWHT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFFmGn8DTl5vuwhT9qBT28Kfvi4Xfy5m4ezJcZARg2mPAiBmRUr1jkfuTlNE%2F25%2FEI5yewVxS%2B9MjNw3rsajoFmskSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMyoj%2B7vEEo0KoS4icKtwDIF9EKe%2F8QwYEIVa9jSJfGjRUz4bUTaxLTBAAdcJPJU%2FPlGL1HlkplFNHhSXWhiKM3szcD2u17M5Uyoc%2BJaF7dTLDrSpungqF84ct91qKR4XkB6fm9cY0lmGuO84Rcuq20uukCGEjJFRIe%2FyB0bU544i4mKruSk5bz2hU%2Bk1WYsijxsAVo%2FxrPUkVkR4wgBjWSNwFD6sMSiK26pD7yvFnumbFV90NOrC0kJxbpU6n8h5on4XnqcY54IW80te135AA%2BUtyRSGfZIUHDenknvZ2Pm4bjdHuLQbCNlihi2uw1Vu2reqe%2BzFkDGlXHwqf8mTMstZmmH1aJV7xIm%2FJGC7pj2iMsaTHUNuMiHH4QtYydQM9g61vJt6I%2BXqYSQBeagieJePzYdLdR9fNsxM6pULWF978LZXnJlQxrGn1FX7fE5th%2Fxhtk6kEva1JCeav1CaJwBcHY0ELIvjrtCXLMLRWFPFylnxXu2WpDO0CV2d4N%2F5z%2FE6ircMnHhgaT%2BjJQ4NgpgaAloS2rXTdqj0pdSNwPZlwJ0u1YoFXWHDd3pNzVkLQVDGksenzhyil6Zkgw1z45nrosJzyJdQN48wvRumf46tIG1W8DSQs8nYKvaVdwQz%2Bblold9smtl3%2FdGcw7JqCxQY6pgE8jssJG0gQeZI2jw0KdCG0Au61wLwCkNx4mP2K0u3jG6eHYC3QfqoElMRKunFSTnqdQvjoaxzIccITwEbTrOwNBJpuidWpbP0k4S80gN7KYbkjQGOshj5P9q8eeM1Ebx9ZqFaHbU7TfO5KT6IbnMMo1SIbLkuxNDJ8M%2B4dJprbYzqtrVSXRwLcntTAzDm8MXd5S5vQBEPTys8XKkEW8bZf5JTZuxX2&X-Amz-Signature=49a64207d8e57b9bcd38ab12488ac07c0043a8edd95bb18eb17fea966352f0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
