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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HMXRWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEjfH0bDtOOYo8LWzHi%2FyjHHDTFg%2BeXyEj0Mho2i1jiYAiEAmRi%2Bp0SphTH8qjR8tniSDLv8hugz6g5mQjBTb%2BVkBnUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLNslYK0eUpnZL%2FfjSrcA7ZKvbwGvdZC0gQDzVgXEMHyRJGqDLrdQtjrfwyWjC8c2OEZXPQJLwscOv0k5SuRszilky%2Fy6NTPeZ2m76LYqU40C0GimMnSwQRYyEJAzlTml29tDkCrNMT5rB%2BFsvUxlv9L0FFZBt21EVLX7UpN8AKE6f%2B9XY4jV1%2FXfzKy%2BC%2BDiHjhHb5u06%2BwmAoyHbsgRggT9T%2Fn3%2BCoEdqG7Q%2FxVlb7ET%2FfqrtHCZVwBY%2FJfLJ9MqFbAazZ3OKoqbl%2Fm2KqWSjxP4Aa0PHatCa7kpip1pKqh1BV4pKeL00l%2Ffe5qAvR4Z6WihFP5G7KuhLqnNFdGV0UCK4tHeuTN%2ByBTGOyZZSD2YOgMzA9rVNhcrZ94CBdS%2B7Uy4Bp7jI7YjK2A7puuWGY8bFl9gM%2FyQ7Qk25NIMtHhanZoLDW1YXm7EwVU9VWNBhHjr0NtCGv5XJfN650jV1t%2Fg554PrHWqsh2%2FMhRj3TicyfhGK4%2FXhuuqPk8MFxojACtOlLowoAD3Fb9qfPmgjYmdySo%2BcqZfSakH6dZeW3tQAQgyR6qa2u2czHrbIqK2nBS2qs0N1ibYd3%2F1ZDgrCbUXoQLfvjvez5DA9l1y%2FTXCjjIyzkumtCgf%2BZaf8oV1EC%2BTMhe69jqEFbMI7D%2BMQGOqUBEcSmdJxOBD1PUxdp0FjZlRcL0sXAlDrpNSuIAFuboIYY%2F%2BwkglIj%2B1XNrtBIjUvmPvJHUtJhgV%2BX5l4NWGqzwxTkshi6GV%2FL4Yaent%2B9dNKMv0pDNr0%2FWyrnH2HETJoO1FwCCP%2BLepB1kdLY4QUZrGGQatiMih9eqXLdNU6Izj76%2FeoX21pnxbajo%2Fb%2Bi%2BhVu68oqmM%2B1d9Bwqwz3zTgv5vsOreM&X-Amz-Signature=beb4c4f7d1455a0e072c57a260b6d51e5b5045dc1c176cc5efa167d9d64cd9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HMXRWB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEjfH0bDtOOYo8LWzHi%2FyjHHDTFg%2BeXyEj0Mho2i1jiYAiEAmRi%2Bp0SphTH8qjR8tniSDLv8hugz6g5mQjBTb%2BVkBnUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLNslYK0eUpnZL%2FfjSrcA7ZKvbwGvdZC0gQDzVgXEMHyRJGqDLrdQtjrfwyWjC8c2OEZXPQJLwscOv0k5SuRszilky%2Fy6NTPeZ2m76LYqU40C0GimMnSwQRYyEJAzlTml29tDkCrNMT5rB%2BFsvUxlv9L0FFZBt21EVLX7UpN8AKE6f%2B9XY4jV1%2FXfzKy%2BC%2BDiHjhHb5u06%2BwmAoyHbsgRggT9T%2Fn3%2BCoEdqG7Q%2FxVlb7ET%2FfqrtHCZVwBY%2FJfLJ9MqFbAazZ3OKoqbl%2Fm2KqWSjxP4Aa0PHatCa7kpip1pKqh1BV4pKeL00l%2Ffe5qAvR4Z6WihFP5G7KuhLqnNFdGV0UCK4tHeuTN%2ByBTGOyZZSD2YOgMzA9rVNhcrZ94CBdS%2B7Uy4Bp7jI7YjK2A7puuWGY8bFl9gM%2FyQ7Qk25NIMtHhanZoLDW1YXm7EwVU9VWNBhHjr0NtCGv5XJfN650jV1t%2Fg554PrHWqsh2%2FMhRj3TicyfhGK4%2FXhuuqPk8MFxojACtOlLowoAD3Fb9qfPmgjYmdySo%2BcqZfSakH6dZeW3tQAQgyR6qa2u2czHrbIqK2nBS2qs0N1ibYd3%2F1ZDgrCbUXoQLfvjvez5DA9l1y%2FTXCjjIyzkumtCgf%2BZaf8oV1EC%2BTMhe69jqEFbMI7D%2BMQGOqUBEcSmdJxOBD1PUxdp0FjZlRcL0sXAlDrpNSuIAFuboIYY%2F%2BwkglIj%2B1XNrtBIjUvmPvJHUtJhgV%2BX5l4NWGqzwxTkshi6GV%2FL4Yaent%2B9dNKMv0pDNr0%2FWyrnH2HETJoO1FwCCP%2BLepB1kdLY4QUZrGGQatiMih9eqXLdNU6Izj76%2FeoX21pnxbajo%2Fb%2Bi%2BhVu68oqmM%2B1d9Bwqwz3zTgv5vsOreM&X-Amz-Signature=ab4b032c5890af29db00c1170deb9065af074f467f9a29805c4a5e3f8f8185f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
