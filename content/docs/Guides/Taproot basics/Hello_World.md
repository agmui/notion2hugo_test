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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBPRRAA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDE1rA1HqcwPh%2F8t71cwIbJ3v9sZAfcqP%2BWTztqYyrQsAIgMME%2FKM28%2FW73L0Sv1SIMF08RmWS%2Fz1tvEUi0OsQVWccqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvaBx9BDjOcRR%2F8CSrcA6%2BcEJ2fqlTpNKcRAYDvgjF826FoWQT5Cp3h3YdLih6OL5e6GGIAUxxtNPcxgX6L1jJ6tvxpF%2Bml%2BNov5%2Bk4HA7H%2FcdbqtD6UZGe4zbTIe0LH9qRj1OCLuCNpfQ1ywSdQved6MCNu37UdIbNt%2BCEQKSUoaijHtI%2BaExC4dppDks7QZJVayk5tyVbBJaNsEdAZ1M%2FK3sHCRkY6%2BJAf4aK7XFXKd7xbKLTFjL3JjGfB79R4Td0HCmoxeF5eKlFpHskX0EA4AlV60fjFKmt%2BNVG3DiWSLPpc5hhn%2Fqtb7vbKPDKnbh3RBMjn5jh6tfnZN3qjO8%2Bz%2Fl2z747PdXLWG8Ty9kte5FNJis36rvp%2Byt4Kw8ytJ26n8o0OM%2BbjLvnaBkiiHNwF2PFiPk0ozvHJwW6JEuN4PEn8CeBLMjVMXIBx1qsbJaNB1x6VddVGUuQBP78erzMoTA5Artm37V6cRkVK48s3O3O9JXU0T54WhqyVp1bSPqFG1izvnUmn3ZkKU0VrQTKOAba61Jfhb3E60r7iKrC4ff9fm7HxWT%2BdBdqXp8ZH1IAU0FQTL0ALyQvOBAEcxGl05T6Vv%2BkKh22DxC3xuhxu1LHqCmLE715nYjeh2zxbVwQAlUgp5q9xt4TMMaZ%2BL4GOqUB1X9e5KAsH8Ex6QvdD6035T3uLNAht5r%2F6y7aDqcbJp%2B4ChVlBkqghlg8%2FjjirkoBezvMbL7ThlJuw4oC5fbMK%2BFPApKryZLozx%2FDcppJKSUN1P2o8rj6JRyE6gaiVpE%2BGsHloekLuSNcl%2FIcrGst%2BZ0PDrtfXqQF0F37liDiHDdflxoAaWyEFGJUHNaIniOXGKybJMBIzwskvHQ1GqwsZO4XQVaq&X-Amz-Signature=dc4e87fa98457430a363cfa20793e5a6f5dfe985eb12874a464b8c2ccce70f20&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBPRRAA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDE1rA1HqcwPh%2F8t71cwIbJ3v9sZAfcqP%2BWTztqYyrQsAIgMME%2FKM28%2FW73L0Sv1SIMF08RmWS%2Fz1tvEUi0OsQVWccqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvaBx9BDjOcRR%2F8CSrcA6%2BcEJ2fqlTpNKcRAYDvgjF826FoWQT5Cp3h3YdLih6OL5e6GGIAUxxtNPcxgX6L1jJ6tvxpF%2Bml%2BNov5%2Bk4HA7H%2FcdbqtD6UZGe4zbTIe0LH9qRj1OCLuCNpfQ1ywSdQved6MCNu37UdIbNt%2BCEQKSUoaijHtI%2BaExC4dppDks7QZJVayk5tyVbBJaNsEdAZ1M%2FK3sHCRkY6%2BJAf4aK7XFXKd7xbKLTFjL3JjGfB79R4Td0HCmoxeF5eKlFpHskX0EA4AlV60fjFKmt%2BNVG3DiWSLPpc5hhn%2Fqtb7vbKPDKnbh3RBMjn5jh6tfnZN3qjO8%2Bz%2Fl2z747PdXLWG8Ty9kte5FNJis36rvp%2Byt4Kw8ytJ26n8o0OM%2BbjLvnaBkiiHNwF2PFiPk0ozvHJwW6JEuN4PEn8CeBLMjVMXIBx1qsbJaNB1x6VddVGUuQBP78erzMoTA5Artm37V6cRkVK48s3O3O9JXU0T54WhqyVp1bSPqFG1izvnUmn3ZkKU0VrQTKOAba61Jfhb3E60r7iKrC4ff9fm7HxWT%2BdBdqXp8ZH1IAU0FQTL0ALyQvOBAEcxGl05T6Vv%2BkKh22DxC3xuhxu1LHqCmLE715nYjeh2zxbVwQAlUgp5q9xt4TMMaZ%2BL4GOqUB1X9e5KAsH8Ex6QvdD6035T3uLNAht5r%2F6y7aDqcbJp%2B4ChVlBkqghlg8%2FjjirkoBezvMbL7ThlJuw4oC5fbMK%2BFPApKryZLozx%2FDcppJKSUN1P2o8rj6JRyE6gaiVpE%2BGsHloekLuSNcl%2FIcrGst%2BZ0PDrtfXqQF0F37liDiHDdflxoAaWyEFGJUHNaIniOXGKybJMBIzwskvHQ1GqwsZO4XQVaq&X-Amz-Signature=a637a85374c1eda59fec88a2a18171ee8b7810cae29819085ee7d97ecbe703ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
