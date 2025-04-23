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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AHEMRH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFxYxWe3Ih%2F34oNOmDTcTK7RwhXJYkGWEtGg%2FMsCzJKuAiAV0EV0TS2B8vquCAxT1jFEvOkjAaPmxqX2kE8tfv%2FpxCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkPyOp5znrod%2BTftVKtwDxb%2BdT8s4McMsrINE8dMQhT2h6QUsEvsgQxQLjcNmXx5bkR%2FHQD42zhLzZN8eE4N159eNMTBEJ4U9kChyB%2FTeo7mDBjWt17N5Qkz8iyLUmE8swavQU2vHYl%2BuRW1N%2BMNZq8lzJu9tVwA%2FLWDj7AMk3Rjs9vAN9r1ncL25x%2B8NGPAxXe2nrQ%2FDuoNo%2FcyFw3BOv8uxJk3NkLfx%2Bo45Ptas%2F%2Fec3OtWs23ZAeLA68jHsv5XH%2F3bmLF%2FjRoH99MhUzGaPU0giWZkf5Kc17b%2BWCJPl5rPON1fThS9Zzoe7ixYQw9KkjFKtYB9kBwIETttvgwfu%2B%2BffUEsPkq3L1wCS7o0HmAqRnjmcD3%2F%2FIWDH3mr7BcbOflwkPtETaszxMAxESteP22VdTgZZ%2BMJvwXiozwisZQyA0h5fvJsNMgWuZGs83HqyA54HEMUvdw6c7qH5%2B%2BGUTMasSFrObsj%2FBwiyOtW1cAupzghWmei47FVgBkhiSXiba0bXhoSBRkWRnzl%2BSSbhttJLMQFb%2BfSSmtqxcxQAP1rarPbW63AqWy92WhMC%2F99cChcBmgh0eHf1Hy%2B%2BFDXvmLKPdjzOFP7BjoFSYLdByHQo0ElUm7Q2onaV6BUbHO%2F8Ary8655hpcFe7UwsqGkwAY6pgHiWcb%2B0N77zsUz5UJIQzbFnNSFFXQN0ziuiZvOKYgOCjmARiZiGuc8ei8rzzNiFVmhR61V%2F0VZaFjp%2B2OArAKlvY3uft9caBpM2qIIZQJjpoIQUXUW%2FK69V4a%2BR762kzcptUr9S0DejdeYM%2B03N9pK7yQB1h2r%2BbiEyjyyTU%2BbGj2fvEC2jRJtIbvcXbBVoaWwZPtqHPdKscgPrO%2BbWwLKzmWXpgmI&X-Amz-Signature=167a394704377ac8687659bf9f4ddf36ce06d3fec5cdf7c55f7edd947c946ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AHEMRH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFxYxWe3Ih%2F34oNOmDTcTK7RwhXJYkGWEtGg%2FMsCzJKuAiAV0EV0TS2B8vquCAxT1jFEvOkjAaPmxqX2kE8tfv%2FpxCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkPyOp5znrod%2BTftVKtwDxb%2BdT8s4McMsrINE8dMQhT2h6QUsEvsgQxQLjcNmXx5bkR%2FHQD42zhLzZN8eE4N159eNMTBEJ4U9kChyB%2FTeo7mDBjWt17N5Qkz8iyLUmE8swavQU2vHYl%2BuRW1N%2BMNZq8lzJu9tVwA%2FLWDj7AMk3Rjs9vAN9r1ncL25x%2B8NGPAxXe2nrQ%2FDuoNo%2FcyFw3BOv8uxJk3NkLfx%2Bo45Ptas%2F%2Fec3OtWs23ZAeLA68jHsv5XH%2F3bmLF%2FjRoH99MhUzGaPU0giWZkf5Kc17b%2BWCJPl5rPON1fThS9Zzoe7ixYQw9KkjFKtYB9kBwIETttvgwfu%2B%2BffUEsPkq3L1wCS7o0HmAqRnjmcD3%2F%2FIWDH3mr7BcbOflwkPtETaszxMAxESteP22VdTgZZ%2BMJvwXiozwisZQyA0h5fvJsNMgWuZGs83HqyA54HEMUvdw6c7qH5%2B%2BGUTMasSFrObsj%2FBwiyOtW1cAupzghWmei47FVgBkhiSXiba0bXhoSBRkWRnzl%2BSSbhttJLMQFb%2BfSSmtqxcxQAP1rarPbW63AqWy92WhMC%2F99cChcBmgh0eHf1Hy%2B%2BFDXvmLKPdjzOFP7BjoFSYLdByHQo0ElUm7Q2onaV6BUbHO%2F8Ary8655hpcFe7UwsqGkwAY6pgHiWcb%2B0N77zsUz5UJIQzbFnNSFFXQN0ziuiZvOKYgOCjmARiZiGuc8ei8rzzNiFVmhR61V%2F0VZaFjp%2B2OArAKlvY3uft9caBpM2qIIZQJjpoIQUXUW%2FK69V4a%2BR762kzcptUr9S0DejdeYM%2B03N9pK7yQB1h2r%2BbiEyjyyTU%2BbGj2fvEC2jRJtIbvcXbBVoaWwZPtqHPdKscgPrO%2BbWwLKzmWXpgmI&X-Amz-Signature=f24dc99f77b54fe70153dd9fbebbf660188afab77f4a8cd5f721e8d1b0a8bb12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
