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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC24NMD5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmHrrNz3hzMi05zN0Q3REiRK%2FOeheKjvD1BOvCs%2Ff3HAIgffUxeso9r%2FfhGq6zHsvsrWduypJBbDZJLLFvMHOf6Koq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEdjRkanzorie3C6gCrcA3Of2lE3%2BrXjy%2BX0AFSxSNSA3Fk1ATQhhqEA8On1XoXi%2BEsp97Qt89V4akXyS5De5RLz6WrCK77lqNP%2B4MjIR%2Fkg%2FtOr8BxosfLbelkW3VwKNUZOqR98cvjnl8ufR24EHdnfGydsjFCWS9tPJBZqxNt4W5K%2FrA3ur1P5ZTLNUIeLV2jddR95YRHmOPa%2Fd6U5%2B%2BSycTnqtFS6%2FyVi4FGFXa3cSNv55SP%2FUA1D0gHpPRx4LcbCscHCS7%2Fbq71OyTQ25Miqxm8ItaH%2BHKtD4EMKRA0lWxGgvErGE7yz95L8piZYgm9jrO%2FRmlOgmOhAvPv8rQwiMYZgo3EC7lyPSwfIlau8lT1qFFvU3TmTdmgfi7x5R9pViEsFyAHX5KMmgLMeLkxXu%2F9skzYSnMTMDr2qro%2Fu9YEB64nxNjuf%2BisMowtxvJi5xue9okG0mzemfUy8ctzH%2B%2BsuUdegcwVT0Fc7PX79PlU%2FHc%2FzJDR%2FTpBRu0i%2Bl4WZugtf1zqqLCgB2zLS1o1FLhgpCOk9urCOkrRfnxMuDwikvk6vEjD3ra7Oqbo6f8TPQYSRg3CVJur%2BItigUpAydTVnwtSC3UJNW7Ra0fqCeu%2FRZUr%2FaQfvbigFoGFuqdnbQCGOvecrP2xJMJObncEGOqUBe4Sgt5kUkX20It9bkCXMO68UPznZwDx4raMA2AgIObp5RdB1DcNDMhYWit8R7kXEgB9KOB3rua2m2MYx3OxUhakyFqoaDbNnIqOcQ7NZRLZTg1gsfWhdMIF7GV5G3ZlnrE0AwFzmomCa8m05jVOW8tX8ugl%2BPzTeQjm3yyFyGA6CCGodN9TMlQApfNPPkkPTTHbxY9gF9ipJQbxE2Ni2UbulZu2q&X-Amz-Signature=b7a0b10cb52506de194327a6c1cd5c37f90628a615b692f3847b3852a94707a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC24NMD5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmHrrNz3hzMi05zN0Q3REiRK%2FOeheKjvD1BOvCs%2Ff3HAIgffUxeso9r%2FfhGq6zHsvsrWduypJBbDZJLLFvMHOf6Koq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEdjRkanzorie3C6gCrcA3Of2lE3%2BrXjy%2BX0AFSxSNSA3Fk1ATQhhqEA8On1XoXi%2BEsp97Qt89V4akXyS5De5RLz6WrCK77lqNP%2B4MjIR%2Fkg%2FtOr8BxosfLbelkW3VwKNUZOqR98cvjnl8ufR24EHdnfGydsjFCWS9tPJBZqxNt4W5K%2FrA3ur1P5ZTLNUIeLV2jddR95YRHmOPa%2Fd6U5%2B%2BSycTnqtFS6%2FyVi4FGFXa3cSNv55SP%2FUA1D0gHpPRx4LcbCscHCS7%2Fbq71OyTQ25Miqxm8ItaH%2BHKtD4EMKRA0lWxGgvErGE7yz95L8piZYgm9jrO%2FRmlOgmOhAvPv8rQwiMYZgo3EC7lyPSwfIlau8lT1qFFvU3TmTdmgfi7x5R9pViEsFyAHX5KMmgLMeLkxXu%2F9skzYSnMTMDr2qro%2Fu9YEB64nxNjuf%2BisMowtxvJi5xue9okG0mzemfUy8ctzH%2B%2BsuUdegcwVT0Fc7PX79PlU%2FHc%2FzJDR%2FTpBRu0i%2Bl4WZugtf1zqqLCgB2zLS1o1FLhgpCOk9urCOkrRfnxMuDwikvk6vEjD3ra7Oqbo6f8TPQYSRg3CVJur%2BItigUpAydTVnwtSC3UJNW7Ra0fqCeu%2FRZUr%2FaQfvbigFoGFuqdnbQCGOvecrP2xJMJObncEGOqUBe4Sgt5kUkX20It9bkCXMO68UPznZwDx4raMA2AgIObp5RdB1DcNDMhYWit8R7kXEgB9KOB3rua2m2MYx3OxUhakyFqoaDbNnIqOcQ7NZRLZTg1gsfWhdMIF7GV5G3ZlnrE0AwFzmomCa8m05jVOW8tX8ugl%2BPzTeQjm3yyFyGA6CCGodN9TMlQApfNPPkkPTTHbxY9gF9ipJQbxE2Ni2UbulZu2q&X-Amz-Signature=7179b1332e018ae082134b050e35138f526e585aae51cdbe2ed4473f3f31f63e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
