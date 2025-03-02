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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVZVSBK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfTUbX1Lq5wSMLS6sgaBlg3hpW0h3UHEnc9i%2BC%2Ft4vnwIgYepbKmH0rLI%2FpDz%2F0yYcxM7WXa9tMVdMuaxHUkxETEcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBQ%2FQkW8cFnFJ%2Bo7ircA5fNUNoNaT2SScIIHt4fPuUxfvwz3L1EHGTMs9wfdVwFeMMG89w6gCZmk0hHGMLhCnvKqbnzExTODlJxoWO8mydGjwKOqgz52Hfy8%2B30v6NfAbIzTBgW1Nnf3r3V8uC4BQplQBPni7Xrs%2FRjyyk%2F6JI7%2F9k5VtyZoDhYDzpQjxdpeTbVALxoVyMyK%2FDdSxzhz06HQkUEHwDrrcjxDBZePkbXlrAullF0Ru4Zy0%2BpxtGiSSeaEmKftWjCJMhB6T6cqQ9jFlNZu7BTi%2BIP7KUKeg9SEZeUIsTQGsGYl2DH20nDsd%2F6JGiCWCaYI6Wh%2B%2FJvxzGcjky3RfHj8n%2FZPssn84nTZ%2BHnya0x7Tt2e0NkoafJv2mrBs54%2BFpulgsrwDtaltd8sdO73fdeyj1VfWsgO2E8qQE%2BETkjdsqroejFQg8nEnsEvQzyqAsf6r87R0FP6q5vX9%2B2vRekQEGVV%2FGqMAyhHkrjoEgW0%2Fs9wkZd9cDBokTDv1CCDTFQ4tThy1zPzTRV7p%2BdXno8x4mIxXo8UPTIJSKzjimpxUPQ%2F%2B0Z0ctadsiGpWY5DUjqOUNyc%2Br5LcjwrHcgLsOuXrHroOVxRY55CaLTPJ7ikBOHgcBgHixQo6ofQ38I05cLFhDcMM77kL4GOqUB0EL9Tor%2FQcDGcp%2FaWLZ%2FY7LG9Y1Ugvf2L%2FtW43o27qZmlRZ0cc15RqiOLszLkAJKXw9Hatd9gmDG3jRwsVCqoP%2F9Ufj95%2Brb38y7SQY7ix6OTrZW7kl1EshcOA%2FSzooqlcu5Gm6g8jh7ljrsplFvKLuYAoZ%2FHp6RnISDsQPorkFHqfjAVJw3eJLjtRgHdhH%2BHkynNz8ZDpf89afBKEzg5GrjVs6k&X-Amz-Signature=df609da37efc8cf5789d9c23ca476970b64e3f410ccdea30958aa2682bd0eca6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVZVSBK%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfTUbX1Lq5wSMLS6sgaBlg3hpW0h3UHEnc9i%2BC%2Ft4vnwIgYepbKmH0rLI%2FpDz%2F0yYcxM7WXa9tMVdMuaxHUkxETEcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBQ%2FQkW8cFnFJ%2Bo7ircA5fNUNoNaT2SScIIHt4fPuUxfvwz3L1EHGTMs9wfdVwFeMMG89w6gCZmk0hHGMLhCnvKqbnzExTODlJxoWO8mydGjwKOqgz52Hfy8%2B30v6NfAbIzTBgW1Nnf3r3V8uC4BQplQBPni7Xrs%2FRjyyk%2F6JI7%2F9k5VtyZoDhYDzpQjxdpeTbVALxoVyMyK%2FDdSxzhz06HQkUEHwDrrcjxDBZePkbXlrAullF0Ru4Zy0%2BpxtGiSSeaEmKftWjCJMhB6T6cqQ9jFlNZu7BTi%2BIP7KUKeg9SEZeUIsTQGsGYl2DH20nDsd%2F6JGiCWCaYI6Wh%2B%2FJvxzGcjky3RfHj8n%2FZPssn84nTZ%2BHnya0x7Tt2e0NkoafJv2mrBs54%2BFpulgsrwDtaltd8sdO73fdeyj1VfWsgO2E8qQE%2BETkjdsqroejFQg8nEnsEvQzyqAsf6r87R0FP6q5vX9%2B2vRekQEGVV%2FGqMAyhHkrjoEgW0%2Fs9wkZd9cDBokTDv1CCDTFQ4tThy1zPzTRV7p%2BdXno8x4mIxXo8UPTIJSKzjimpxUPQ%2F%2B0Z0ctadsiGpWY5DUjqOUNyc%2Br5LcjwrHcgLsOuXrHroOVxRY55CaLTPJ7ikBOHgcBgHixQo6ofQ38I05cLFhDcMM77kL4GOqUB0EL9Tor%2FQcDGcp%2FaWLZ%2FY7LG9Y1Ugvf2L%2FtW43o27qZmlRZ0cc15RqiOLszLkAJKXw9Hatd9gmDG3jRwsVCqoP%2F9Ufj95%2Brb38y7SQY7ix6OTrZW7kl1EshcOA%2FSzooqlcu5Gm6g8jh7ljrsplFvKLuYAoZ%2FHp6RnISDsQPorkFHqfjAVJw3eJLjtRgHdhH%2BHkynNz8ZDpf89afBKEzg5GrjVs6k&X-Amz-Signature=f9df4788f4fe2c3e53b932a508198c3d8a97112caa6ca7fb511063db63d048ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
