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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6WELFY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDKDbDzrG34w6McCLHNw4eqUR06vw%2F8dcCc4XFkRmyzSAiADQ0aCs7vbo2AZqt%2BUHGQWocGuKQ2g3TLAz6L5NyxZUiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl3kM2lyH6SjQ6cZKtwD3m%2FNFfcQ5JIpBpvAakw7Ds8KqgGRfnYexJ0fWc7QOu2bJ67eoB6RFuCbmjKzHHQKHW8sXtgUze7J5dk3A8zMt1sxBaB01KqJ%2FHaQQhqyESQ9gW4Bz%2BNUoFq9Vp8LBC4%2BhTlP%2FJlBaqMYPOh1Ks5vqGcAkegH0acumQV%2F8USgw3HWTrGlkBHeMH0aCSv0YRS%2BvJeN3%2BM339uOHG0fTSFKAlhZF770HUaaHcCemDa%2BOetHIzGuEzIKK%2BtFgPNEVrImvvxVu%2FsTziU%2Bkd9mdJAGeAF0orsKbVt28OODAJJnvD6%2BN11HnItveB1O1555WZ28jCtMdtrcsNUmYDbk9FvKss60IhbFKk9d8IQTBrrMvoi5eZKWSJqLBSXb4pkXewok2J4jXQtNlzN1wBWW7o6GkPDTTXDnRA5VjNbL%2BvgastECmmNu1vlCWVykGjtktvR1s46Ukr4EHD6ujHcBhc6BLl%2FmXfU%2FfAqedp6bXlmVe5vpjvoVwpu6%2FZsIPdUutJK5rOX%2Bl5wM4VkHF6hyXa7pVCUuJCU14wJ3kEe47QJmNuagei%2FNof4X%2FeXEguFScfiQ7mrG5JFlrAqFtvoAxd7dnhRfx67oeB12HBds7Mqtbr24kCQjYnnxz9LvS6Yw7NeXwAY6pgFIDL%2FwwGHuFSZzFm3Z55SzAtyynpcFDaqr5TpyI5tzIz%2FeOxMnAmOYfWAjVkCOFu%2FIighPqZcGdbhToBWrEx81%2B687yaJLOgf%2FlnoMhUj52bUif9NDvfXw5bazrj%2Fo2NtRC1RoNVlVqJEmJ1Y7eYC7%2BJETb57fePGKjF1gyX2V5s7PSIUs6HMdGnDVcvgQXi9M2z2egYJ8N2XFYgigPyq1PK2o4OGU&X-Amz-Signature=a56d21b5d528ab1b86a7b7d8e02047c045aa6022cea32a9107cb14fb62733bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6WELFY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDKDbDzrG34w6McCLHNw4eqUR06vw%2F8dcCc4XFkRmyzSAiADQ0aCs7vbo2AZqt%2BUHGQWocGuKQ2g3TLAz6L5NyxZUiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvl3kM2lyH6SjQ6cZKtwD3m%2FNFfcQ5JIpBpvAakw7Ds8KqgGRfnYexJ0fWc7QOu2bJ67eoB6RFuCbmjKzHHQKHW8sXtgUze7J5dk3A8zMt1sxBaB01KqJ%2FHaQQhqyESQ9gW4Bz%2BNUoFq9Vp8LBC4%2BhTlP%2FJlBaqMYPOh1Ks5vqGcAkegH0acumQV%2F8USgw3HWTrGlkBHeMH0aCSv0YRS%2BvJeN3%2BM339uOHG0fTSFKAlhZF770HUaaHcCemDa%2BOetHIzGuEzIKK%2BtFgPNEVrImvvxVu%2FsTziU%2Bkd9mdJAGeAF0orsKbVt28OODAJJnvD6%2BN11HnItveB1O1555WZ28jCtMdtrcsNUmYDbk9FvKss60IhbFKk9d8IQTBrrMvoi5eZKWSJqLBSXb4pkXewok2J4jXQtNlzN1wBWW7o6GkPDTTXDnRA5VjNbL%2BvgastECmmNu1vlCWVykGjtktvR1s46Ukr4EHD6ujHcBhc6BLl%2FmXfU%2FfAqedp6bXlmVe5vpjvoVwpu6%2FZsIPdUutJK5rOX%2Bl5wM4VkHF6hyXa7pVCUuJCU14wJ3kEe47QJmNuagei%2FNof4X%2FeXEguFScfiQ7mrG5JFlrAqFtvoAxd7dnhRfx67oeB12HBds7Mqtbr24kCQjYnnxz9LvS6Yw7NeXwAY6pgFIDL%2FwwGHuFSZzFm3Z55SzAtyynpcFDaqr5TpyI5tzIz%2FeOxMnAmOYfWAjVkCOFu%2FIighPqZcGdbhToBWrEx81%2B687yaJLOgf%2FlnoMhUj52bUif9NDvfXw5bazrj%2Fo2NtRC1RoNVlVqJEmJ1Y7eYC7%2BJETb57fePGKjF1gyX2V5s7PSIUs6HMdGnDVcvgQXi9M2z2egYJ8N2XFYgigPyq1PK2o4OGU&X-Amz-Signature=a4a9454d1c54b6444f9848e9ce9f5ded5818a31117974af442cadb7c969aaeb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
