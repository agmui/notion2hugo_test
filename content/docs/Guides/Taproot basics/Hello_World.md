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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRM4OGJE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Sjq2G%2BJPs3hCRDDrJDWqJ9DOFz4h%2BzR0ZXIpsxQPmAiEAuAJY%2BAkz3ZbMW2%2B%2F90YaWi9IsOmgLo9Z5%2FnQ1lB%2BlJ0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAWT9haVtCks0sVVircAwyIXlwp46M1nJFOjz%2B1j2e6fZKfB43XexMuozj7y96CqL6u7PaXC3i0oC1lLDYZn%2FaKvqaT%2FEgss7NZpuj5yV9R3PoGH7FtsYCt%2FaM6wR4W3XNX7LHEX9JVUtEOenfmt0qRnr9BnW0EvVrlKjlaaShJEmq9oZdOgHmSkvkxsUOHYBNlkOCk2UPAya0b%2BNqTBcRPh%2FB%2FyO3FZQPVSKMeRkGJYnDjFJRK65VeHHcMYfTuDBVibkbVPEpx%2FKHS6bju%2Bpj32Rp76oz1GgH5HScXLPjRYv8myiLzazpKAv67y7XAuoMoAEV1BcCkPajyb5opSqllocD1t455IBRqgGb0RD9QnXTfv%2FyopDPQUPP5aQikJ9GKXhyXRQ7bHa3grzWmRecvbuR2QyDfWYHUnjn16zXcdMF22v03IPNOTCi1Ma0DUiKNwV3ir1oSkpf4lX2Hp8zpel3mduts8vahXzoIM2aYVOvfw2J1%2B0ocHZsfKfEg5koz%2FocYTJyJo420OkWzRBNMdM1wtyd1CapDUUFKV69C5EULmS9cQZUaRNyZ31BUuy2B4e3ZityICE%2FKrFWy6Pj%2FJXxg81Ro2yZ4jAT%2FYI1eZTd4jCpVrDojfnSB%2BjW5KPktqZXPthrR%2BIRXMNeezsUGOqUBnVM%2BySL839NlsdLa6fqDTRagygr5EcS8scHthMg2UUm63LaOb%2Fq1q8M%2F6skcdOH4MoDGe68WtB9UY0v2L8EkdJnXZocXc%2BZNiJKVm1jMuaJA6ukPPErU6XPyt4mhidkm4FBT7AIH%2FltuZnWayWbGcDFrGeBu12nhAU0zSdQg7iPxeZ0fIrY%2FVrkE27iROMSRN1Fvy%2FQZcjNaqxitdjXdPO5qSXPt&X-Amz-Signature=437f7f03ce9484612c5b1e4e240bd4b31a40da0df1abb71e601a0dfe06a0c5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRM4OGJE%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6Sjq2G%2BJPs3hCRDDrJDWqJ9DOFz4h%2BzR0ZXIpsxQPmAiEAuAJY%2BAkz3ZbMW2%2B%2F90YaWi9IsOmgLo9Z5%2FnQ1lB%2BlJ0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAWT9haVtCks0sVVircAwyIXlwp46M1nJFOjz%2B1j2e6fZKfB43XexMuozj7y96CqL6u7PaXC3i0oC1lLDYZn%2FaKvqaT%2FEgss7NZpuj5yV9R3PoGH7FtsYCt%2FaM6wR4W3XNX7LHEX9JVUtEOenfmt0qRnr9BnW0EvVrlKjlaaShJEmq9oZdOgHmSkvkxsUOHYBNlkOCk2UPAya0b%2BNqTBcRPh%2FB%2FyO3FZQPVSKMeRkGJYnDjFJRK65VeHHcMYfTuDBVibkbVPEpx%2FKHS6bju%2Bpj32Rp76oz1GgH5HScXLPjRYv8myiLzazpKAv67y7XAuoMoAEV1BcCkPajyb5opSqllocD1t455IBRqgGb0RD9QnXTfv%2FyopDPQUPP5aQikJ9GKXhyXRQ7bHa3grzWmRecvbuR2QyDfWYHUnjn16zXcdMF22v03IPNOTCi1Ma0DUiKNwV3ir1oSkpf4lX2Hp8zpel3mduts8vahXzoIM2aYVOvfw2J1%2B0ocHZsfKfEg5koz%2FocYTJyJo420OkWzRBNMdM1wtyd1CapDUUFKV69C5EULmS9cQZUaRNyZ31BUuy2B4e3ZityICE%2FKrFWy6Pj%2FJXxg81Ro2yZ4jAT%2FYI1eZTd4jCpVrDojfnSB%2BjW5KPktqZXPthrR%2BIRXMNeezsUGOqUBnVM%2BySL839NlsdLa6fqDTRagygr5EcS8scHthMg2UUm63LaOb%2Fq1q8M%2F6skcdOH4MoDGe68WtB9UY0v2L8EkdJnXZocXc%2BZNiJKVm1jMuaJA6ukPPErU6XPyt4mhidkm4FBT7AIH%2FltuZnWayWbGcDFrGeBu12nhAU0zSdQg7iPxeZ0fIrY%2FVrkE27iROMSRN1Fvy%2FQZcjNaqxitdjXdPO5qSXPt&X-Amz-Signature=591d804ea0d9f8ae7200005e81c1b46a70628dcb0a0c1fde49c04526645631d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
