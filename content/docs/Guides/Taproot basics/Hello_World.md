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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZS4J66F%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFSC%2B5q5NaubxvNQ5lIxE5WG78sDNs%2B3SxZ4%2FksrpwI4AiADwNT%2B3QgS7DxamGrn1ZZ1MSd%2BNPuYCe68UWx1eukMWyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMFz4R7x5XoAbdA%2BaFKtwDoN953CogYLd7nvz92v3qcvsmSoNESB5ACmrMsUEbmwHZ23AlOwWw88Ox80FaQJMKasOnIVssgWb39oR2a%2BmNYqg0LDjZGHBazMqoQRYHn5hpGaWV6grqO%2Bc7L4mR1OP%2B6GQWqZoYDYRZDvfOJ5vvnJ5rsDKoqs5364KlY%2B3JWN9HNkc02E7blayC%2B5oHcmSgfj824LMbNWmenAekAAzybJ7I1fAG7NOthKdOxAo3X1THSNSl8l1OiD77TfVZctc5rqurz6jRUfHNatxO%2F2VV5jt4pFZrGU3djnCrj4Tso28FWLDQmDzaA4NYDjmaXrcPFz0j4bTuZ9Ag1bliolcccFumkQT9k3YUJxqlqEGQl9I3qxXc%2BHw0f6w68B0htBwyVfUR%2FmT5SbL4s%2BLw0rYC%2BhVMpL%2FOpEuBP%2Fi9sJmyAO0aTzBSx%2FdlXz8rl8RHRTWZISIwd%2B2ooUYMg%2FAOsFYWVl%2FqI9O0R%2Bo5x1nwK3vgZTFFUdoaUtfaKtQk5hTB2RN3q5E%2Bx%2FhiNtuF7okeDAOW2g10pxRhWs7eoHzQntTRw%2FMzruBT9SoWHcNEV5W7UmuB9jXGr%2BLtZx6stzBoC22Vx8nv9NKAzKSGmEjX%2BCgR4nQVV6Xt%2FdyzXAkNaDQwmoyYvQY6pgHlKjDbQ6lP%2BzokNRxXU5I9dCRg%2FEK3gLm9KCjxQFWfqyYg4g30pEsGdkQF4HSEwfaLPwLLIWo21YHX3NBQhhFmBQpIVXpEbchGb1%2B8Rv1nmRvt7EfeT8eNTm7D0UqebzIIMfayRLF5V1TysaUNy9YXMq47sEOC7fEXfyDXkUbpvxbqpF6724sUrZBpreXBgqaKA0awfHl%2BVEwJR18gv7kPOBZ6%2FwfU&X-Amz-Signature=36edf69143e606c0ec8c0121d3325cd2fc6d2c506b78232f860b56539e6ef475&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZS4J66F%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFSC%2B5q5NaubxvNQ5lIxE5WG78sDNs%2B3SxZ4%2FksrpwI4AiADwNT%2B3QgS7DxamGrn1ZZ1MSd%2BNPuYCe68UWx1eukMWyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMFz4R7x5XoAbdA%2BaFKtwDoN953CogYLd7nvz92v3qcvsmSoNESB5ACmrMsUEbmwHZ23AlOwWw88Ox80FaQJMKasOnIVssgWb39oR2a%2BmNYqg0LDjZGHBazMqoQRYHn5hpGaWV6grqO%2Bc7L4mR1OP%2B6GQWqZoYDYRZDvfOJ5vvnJ5rsDKoqs5364KlY%2B3JWN9HNkc02E7blayC%2B5oHcmSgfj824LMbNWmenAekAAzybJ7I1fAG7NOthKdOxAo3X1THSNSl8l1OiD77TfVZctc5rqurz6jRUfHNatxO%2F2VV5jt4pFZrGU3djnCrj4Tso28FWLDQmDzaA4NYDjmaXrcPFz0j4bTuZ9Ag1bliolcccFumkQT9k3YUJxqlqEGQl9I3qxXc%2BHw0f6w68B0htBwyVfUR%2FmT5SbL4s%2BLw0rYC%2BhVMpL%2FOpEuBP%2Fi9sJmyAO0aTzBSx%2FdlXz8rl8RHRTWZISIwd%2B2ooUYMg%2FAOsFYWVl%2FqI9O0R%2Bo5x1nwK3vgZTFFUdoaUtfaKtQk5hTB2RN3q5E%2Bx%2FhiNtuF7okeDAOW2g10pxRhWs7eoHzQntTRw%2FMzruBT9SoWHcNEV5W7UmuB9jXGr%2BLtZx6stzBoC22Vx8nv9NKAzKSGmEjX%2BCgR4nQVV6Xt%2FdyzXAkNaDQwmoyYvQY6pgHlKjDbQ6lP%2BzokNRxXU5I9dCRg%2FEK3gLm9KCjxQFWfqyYg4g30pEsGdkQF4HSEwfaLPwLLIWo21YHX3NBQhhFmBQpIVXpEbchGb1%2B8Rv1nmRvt7EfeT8eNTm7D0UqebzIIMfayRLF5V1TysaUNy9YXMq47sEOC7fEXfyDXkUbpvxbqpF6724sUrZBpreXBgqaKA0awfHl%2BVEwJR18gv7kPOBZ6%2FwfU&X-Amz-Signature=205e0d7de0a2f073a10ac9b38bf68de8a326f79ff54b50fce51671434f818d37&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
