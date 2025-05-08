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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7EXQHV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayZgn7jaCuOG%2B3M7eNkaxiqagb9hg8yb0Gg0MFssV3wIhANcueooqeYLQmHPk5MAcmDnZ2TKYmwLdfR9fJo1kaqR4Kv8DCGoQABoMNjM3NDIzMTgzODA1IgxeZb2YpQS102B5ic0q3ANZnjHMXwnSF%2BoFBYGxEljeWMKtRc1KZd3c2DA2%2ByGKSmTzmWW3GmCoPeCRGpYhp%2BeqIlA69YRMErKD4G0%2B2MkYA%2BEQfqEvwOgVHJ9E24UjOMmum%2FsPuO7Q9kTPEYc7GwIbjAl8%2BEtMHTrJJIT7aIG9pKo96Odt6TrWS1xynkkCCCw9ZZVSvvzehuaEUZda9OrDnZbPL04ytgG1SV3rw7FENryy6oc0MBMqbFmNZc%2FoJ1YtSUtQh0dm94%2FdT5gbVqUVvzGB1EqJ3d029ZdO3y8FuVoZzUDTpLt6yYwVCbP4GtLPoHyx16KLMu32PCNtFkBgZPk%2F04hGlkV%2Bg5Br3vk4QD40W6JjMCwz25WfkCC6ghTioFDvUHkdwnp2pDOmkBuX%2FD4oMy9NGDZOCamMHa9uGPpuXtdbmhFAhpW1NXiluQBG2K2lK%2FBL6a3TiO5meF9G8kTIF5hyHF4JY7sqp17DvY39IEOD61qfi8qunt0W068yT%2Fw2iYgh5pPW3%2BO4vRSImE7%2FWGjyzv6slrQIEnzxA8YJI9Avf%2FNtxHdFt71AWBywMaCkrEVxqrwU%2BbbK1VGKgqvT6L4hod%2FakB48axEsMNkySJfdY%2F7glbbRrAGAHQI19QJY75a1y%2FqSBDDW9%2B%2FABjqkAdUT30zSpHvcg1MT7CDCzKpyzOVG9iipHvEgxp3p8xlxgmmMa44dc2vIkjwiGJpP1S9vrb7ukvIef07fWwa1QzFrZyBGafcTNel%2F7xMwuLszTZ%2BIJ6CE0hLh2ynDczxgYbKTheB4fEeTHrbT8cu7s69XjW0LUHTI7OEtbII9dMt7T5WrOKLFX7NhViYkcwXsa97lS1DAYnBX8ohhQMwf7K%2BxV9Wn&X-Amz-Signature=50b8eaa8e2108ff5b054033b5ff65ade73696da64df007b96aab3430ea70e048&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7EXQHV%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDayZgn7jaCuOG%2B3M7eNkaxiqagb9hg8yb0Gg0MFssV3wIhANcueooqeYLQmHPk5MAcmDnZ2TKYmwLdfR9fJo1kaqR4Kv8DCGoQABoMNjM3NDIzMTgzODA1IgxeZb2YpQS102B5ic0q3ANZnjHMXwnSF%2BoFBYGxEljeWMKtRc1KZd3c2DA2%2ByGKSmTzmWW3GmCoPeCRGpYhp%2BeqIlA69YRMErKD4G0%2B2MkYA%2BEQfqEvwOgVHJ9E24UjOMmum%2FsPuO7Q9kTPEYc7GwIbjAl8%2BEtMHTrJJIT7aIG9pKo96Odt6TrWS1xynkkCCCw9ZZVSvvzehuaEUZda9OrDnZbPL04ytgG1SV3rw7FENryy6oc0MBMqbFmNZc%2FoJ1YtSUtQh0dm94%2FdT5gbVqUVvzGB1EqJ3d029ZdO3y8FuVoZzUDTpLt6yYwVCbP4GtLPoHyx16KLMu32PCNtFkBgZPk%2F04hGlkV%2Bg5Br3vk4QD40W6JjMCwz25WfkCC6ghTioFDvUHkdwnp2pDOmkBuX%2FD4oMy9NGDZOCamMHa9uGPpuXtdbmhFAhpW1NXiluQBG2K2lK%2FBL6a3TiO5meF9G8kTIF5hyHF4JY7sqp17DvY39IEOD61qfi8qunt0W068yT%2Fw2iYgh5pPW3%2BO4vRSImE7%2FWGjyzv6slrQIEnzxA8YJI9Avf%2FNtxHdFt71AWBywMaCkrEVxqrwU%2BbbK1VGKgqvT6L4hod%2FakB48axEsMNkySJfdY%2F7glbbRrAGAHQI19QJY75a1y%2FqSBDDW9%2B%2FABjqkAdUT30zSpHvcg1MT7CDCzKpyzOVG9iipHvEgxp3p8xlxgmmMa44dc2vIkjwiGJpP1S9vrb7ukvIef07fWwa1QzFrZyBGafcTNel%2F7xMwuLszTZ%2BIJ6CE0hLh2ynDczxgYbKTheB4fEeTHrbT8cu7s69XjW0LUHTI7OEtbII9dMt7T5WrOKLFX7NhViYkcwXsa97lS1DAYnBX8ohhQMwf7K%2BxV9Wn&X-Amz-Signature=ff36261c2ee41482e5cbf43c71e7be9abaabe9a3321b69d5e360920a22bd4572&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
