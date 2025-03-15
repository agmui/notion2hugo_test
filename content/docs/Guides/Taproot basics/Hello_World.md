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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVLQ7QX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWc3jP6QSYqdZ0C8lZPviWz0wAvJKAUOlqHeXlYghapQIgGDaPnMHk8oA%2F%2FwRtt%2Flq0LkvJVBxWZrNno4wjQ56tkAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLua50kWTPjC2zfJHCrcA%2BjMpUkBcjiEB54LvpZk7HaLnEGkjoaEkByp9ZahY0oA8XU8PTWjanRBq38W9ipwwYtF1%2FX0Vxn8YNz851NrryfNRU%2BSv6uEA6GSsfjMTPS%2FUdL4iWdHoSZEV%2FpxbS0yV7RhPNw6JaHnYrGKR5AL38wLmsdtKg9Su4f7YsoUT35adihj%2BmgMaNf2zAYMn1s5p2WfeTC0Hd4%2BQvWoS7fMx9j5K4hbEf6hPFuGYGPZg1Gb6YFZK7NfkCqw3CFyhmXbrhVDrgKK3%2B2fzIrcZNUIPpmJtutEVpIhHo3lUS5FmtYV5z3lHJuLRvV%2F9leqkD0D3NUPnrZzlcBEC7Y0XCa95MYzRKpz40LW5jy7uhDPBgnlL6od3ihfu9kT1O4W9hArayY%2FUbkhJUTz765iPMC%2BriABrP6JrDX%2BtlvvSEXuaINAVC4oTdU5fy6oRtCHtgH7i%2Bl9Nt0K6%2FZELMXsB53KRBSWfKY%2Fk6wfyPKVaLhEMxaGcd3dOt2RBrKQcytrrJnPkAkbzHzEeJot6KG6vsk67QzW5buBjX7aSEC28x2VYHBLK4UIO7TEpJktBnLtZ2TEmATO8IOlWwlgQ2IFA9zkumWp8yADzBo3AaU3RjUzQucsz8qZ%2BKMo71bucv%2BpMO7u1b4GOqUB5I7FveGj2s16GG2ILnWqR5eMveChAyVRNQcaQEa2ybcyCHsDlm9a55Ho2xNnBvuWpwPE3EbuFAa%2FiXRrsnwDl02ngc4Gb%2F%2FeBzjnrDhgnN6iTgF9okWV%2FHAKYpaqT9%2B%2BWUYEUFSPzcAVue9i5Fw%2B9e9Ar%2BVbmDLms4GKW8unB92mE2StUAlDQYnpDO9fFnWPhIgj%2BTXk9f9SYLdZZfNzxOrj9K1W&X-Amz-Signature=9c82c0cd7187c85e747fbd9d1d0dfee0195b4ddcf0890696a197019f1dbdaf18&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVLQ7QX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWc3jP6QSYqdZ0C8lZPviWz0wAvJKAUOlqHeXlYghapQIgGDaPnMHk8oA%2F%2FwRtt%2Flq0LkvJVBxWZrNno4wjQ56tkAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLua50kWTPjC2zfJHCrcA%2BjMpUkBcjiEB54LvpZk7HaLnEGkjoaEkByp9ZahY0oA8XU8PTWjanRBq38W9ipwwYtF1%2FX0Vxn8YNz851NrryfNRU%2BSv6uEA6GSsfjMTPS%2FUdL4iWdHoSZEV%2FpxbS0yV7RhPNw6JaHnYrGKR5AL38wLmsdtKg9Su4f7YsoUT35adihj%2BmgMaNf2zAYMn1s5p2WfeTC0Hd4%2BQvWoS7fMx9j5K4hbEf6hPFuGYGPZg1Gb6YFZK7NfkCqw3CFyhmXbrhVDrgKK3%2B2fzIrcZNUIPpmJtutEVpIhHo3lUS5FmtYV5z3lHJuLRvV%2F9leqkD0D3NUPnrZzlcBEC7Y0XCa95MYzRKpz40LW5jy7uhDPBgnlL6od3ihfu9kT1O4W9hArayY%2FUbkhJUTz765iPMC%2BriABrP6JrDX%2BtlvvSEXuaINAVC4oTdU5fy6oRtCHtgH7i%2Bl9Nt0K6%2FZELMXsB53KRBSWfKY%2Fk6wfyPKVaLhEMxaGcd3dOt2RBrKQcytrrJnPkAkbzHzEeJot6KG6vsk67QzW5buBjX7aSEC28x2VYHBLK4UIO7TEpJktBnLtZ2TEmATO8IOlWwlgQ2IFA9zkumWp8yADzBo3AaU3RjUzQucsz8qZ%2BKMo71bucv%2BpMO7u1b4GOqUB5I7FveGj2s16GG2ILnWqR5eMveChAyVRNQcaQEa2ybcyCHsDlm9a55Ho2xNnBvuWpwPE3EbuFAa%2FiXRrsnwDl02ngc4Gb%2F%2FeBzjnrDhgnN6iTgF9okWV%2FHAKYpaqT9%2B%2BWUYEUFSPzcAVue9i5Fw%2B9e9Ar%2BVbmDLms4GKW8unB92mE2StUAlDQYnpDO9fFnWPhIgj%2BTXk9f9SYLdZZfNzxOrj9K1W&X-Amz-Signature=e1c14170fb4a6ba5828f2bec40c56b7af09fc443b3d165ceb381933105d1b37d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
