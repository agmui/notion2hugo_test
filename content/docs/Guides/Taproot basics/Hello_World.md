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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCXH2SV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIG%2BF1aN7DvABXbYC%2BTljtA%2BoewdCfdqcT7EjlqU1thEAAiAaObGtRUyYvt2t8YScCWeqOt%2F9sEMx%2BRrkZM9iBpDiNCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlLUuNfgqxems0KQZKtwDjrmLXA2eqxXhzzhPzJAwxeV8oyDf3ppyhnWCG%2BoAYnqXJEsA0HK%2F8%2FbqWCX%2FYkXVkVMq7MJabpbkrRRI%2FL6sB47ODDow3Vo%2FEJBEGdsBXBwllN7Z%2B7N%2FHKlQ5FwLFi3H0OmJmWi0%2BOmKovrTMOuvsr8E0dV%2FLmfYnBHkGuk%2BjW%2FApDDAUo%2B2afMN%2BOXlAUDTmmjUY1%2BWSWHoU%2FOx6PK4Rnn4A62SWmMS45qEDPfO2uKMsKO5ILm7PGFsr2yPzlFe0nSePvDvAbhKR4Df3dJaVnKyBdYQ0hDTSWDqtxSeWPgE7iCKnxYgk2T86cttgDmoCNVV2tr4Hej7GxDz%2FuX5Ob%2BAcG%2FaLMSy6gjRjEhvVbbsDxghD8IL1nHkmiaNDR5JiCOLmO%2FSHmAfb3KbxbZYKVqfRU%2FJxrJipvi9JeXDHLmokq4u6wokA0K6ui%2FYSF7PJqnegxcxXvqdovqLjrj3QlWwg828AMRoKMDNOivqPs0p%2BZ23ZuE8IxdTjdvfdqd%2FXa513OmIAFNzmy6rX4gys6FCR5pOD9RVfzqiGDWzQ1GR0lyQ58ZphhYgmKeoXH9%2FK4VJ47Mhb2gUUJCgtWASL0H5u0jSsNGhEjZEwdl4N5dMoDSC8HzGPkY46Wswmru2wgY6pgE%2FFnvNuqqAHapLam1BjQDMMEJebk%2BTczZCxv42Dvp88RdQVBqJcT45DM7%2FNWZPwhhnBGHKO9RUGZznuigDlcnsI2EGOiH2Lsv23kxFDFUZ6yRPnoYRfoZaN4bKMBn4yNcNvYr51E7bG%2BQMyWWU0IhCc651CJlgOlf%2FbW5oBcJ5jFC0oDHsk5c4QssJ0PJgG%2F5TMLnm2o47US4dzER31UlKnTMyJUzX&X-Amz-Signature=52276077536685b7d74aa27b1632bd1ea0ddfec065040877eb723c9abb428e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCXH2SV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIG%2BF1aN7DvABXbYC%2BTljtA%2BoewdCfdqcT7EjlqU1thEAAiAaObGtRUyYvt2t8YScCWeqOt%2F9sEMx%2BRrkZM9iBpDiNCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlLUuNfgqxems0KQZKtwDjrmLXA2eqxXhzzhPzJAwxeV8oyDf3ppyhnWCG%2BoAYnqXJEsA0HK%2F8%2FbqWCX%2FYkXVkVMq7MJabpbkrRRI%2FL6sB47ODDow3Vo%2FEJBEGdsBXBwllN7Z%2B7N%2FHKlQ5FwLFi3H0OmJmWi0%2BOmKovrTMOuvsr8E0dV%2FLmfYnBHkGuk%2BjW%2FApDDAUo%2B2afMN%2BOXlAUDTmmjUY1%2BWSWHoU%2FOx6PK4Rnn4A62SWmMS45qEDPfO2uKMsKO5ILm7PGFsr2yPzlFe0nSePvDvAbhKR4Df3dJaVnKyBdYQ0hDTSWDqtxSeWPgE7iCKnxYgk2T86cttgDmoCNVV2tr4Hej7GxDz%2FuX5Ob%2BAcG%2FaLMSy6gjRjEhvVbbsDxghD8IL1nHkmiaNDR5JiCOLmO%2FSHmAfb3KbxbZYKVqfRU%2FJxrJipvi9JeXDHLmokq4u6wokA0K6ui%2FYSF7PJqnegxcxXvqdovqLjrj3QlWwg828AMRoKMDNOivqPs0p%2BZ23ZuE8IxdTjdvfdqd%2FXa513OmIAFNzmy6rX4gys6FCR5pOD9RVfzqiGDWzQ1GR0lyQ58ZphhYgmKeoXH9%2FK4VJ47Mhb2gUUJCgtWASL0H5u0jSsNGhEjZEwdl4N5dMoDSC8HzGPkY46Wswmru2wgY6pgE%2FFnvNuqqAHapLam1BjQDMMEJebk%2BTczZCxv42Dvp88RdQVBqJcT45DM7%2FNWZPwhhnBGHKO9RUGZznuigDlcnsI2EGOiH2Lsv23kxFDFUZ6yRPnoYRfoZaN4bKMBn4yNcNvYr51E7bG%2BQMyWWU0IhCc651CJlgOlf%2FbW5oBcJ5jFC0oDHsk5c4QssJ0PJgG%2F5TMLnm2o47US4dzER31UlKnTMyJUzX&X-Amz-Signature=1a4eb0180d6d68e227fd2de6c637e8fe15da8146a3013657f0047a3d504a56b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
