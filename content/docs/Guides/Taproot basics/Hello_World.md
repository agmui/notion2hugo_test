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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3EZ3GR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1crGmzgNy0IhWjPdNa5VaZmLfUkgVX8U0yFIJ6x9mgIhALmz2puXXu2%2Fs%2BHMDuK%2B2%2FoLTOLkDyZlHEQrgAJ1wsdoKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaSVSnTIs5zifsLrgq3ANMYKxEoFFLWjKK2aKSsJHH4u%2BLay%2F8w5N3jff%2BXYqFXCpV2EXkfHFzV%2FZjSrmXx2rLvjpO2GG9yTLIQ6%2BdS5GSoNfguFe17dAvGqwXOk8WVDCOtKSxqWw%2BUccbMUJ%2FFKlWiL7KS6ACAhoDdu0kpSBH2eLbo%2FjY1IA8MRQHpbgR%2B1lU3dFQvtMMJQYhRq9KnqWXyjdACRbK1I5KL%2Bg4uUGM%2FP6QWZ9DqQy6Pb9SxMtiOhOvDrVNpZfbzXAcdt72rk1diD31q6j%2BSo5PTbywbK%2FrhA%2BkApkOqnKzZpnRLxvKjIzPRqsb9QNqdDmitMpnIST8uULioTzKMKm%2Fy2KKExuWiGOmYYRZZuR6%2FiL05vnirTGfn10grlzIVdAFy99E0XaBKVdpqV7OjRjgofrvmw5VZGV7JIpO1ZaefnX02TILFU5FxbhRHX8ahsFK%2FaeQ7DXXnnjD0Jcoq21U8Y5wPzGq3a6Rii7n1kWtKutjl1hCXqo7O%2BPGymLRpdIZWwownLRIYKE3aenlXlc9MnAPBXVapfCzYHeX5avGR%2FdwA70SZ%2FMtava5ynRgAzNi640i3Uj2cZS0ZLTlINfsxPn%2BD13xyZQO2PoTUBWRvVaBFVq0wJQERsDtc8L2Hd6XfTDhi%2BzBBjqkASqeKZR1inrGfSun5RlJDvDJDqOWNhuLzr7q%2BltADlXuStvcllsrd0O%2FXMGrzOi%2Bx3%2B02CV1bF9CKlcHQ7QgsLNG446eS4Z%2FLx9TfYusLCTtjATodvKtApcMqflh1jUbv3%2Br9uek%2BJW9Rk%2BR6ak3i9TIZPbXbPGb4%2FxUMvUDu6AXQxHedyjfAUnnOkcdN9l4Ww3mfzQ1B4%2FaHT6Mewl3owkexAY%2F&X-Amz-Signature=1ee38808916982a529f5c73c8d9d0bccc3ec816d43c6d82a87005af65e2dc60c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3EZ3GR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1crGmzgNy0IhWjPdNa5VaZmLfUkgVX8U0yFIJ6x9mgIhALmz2puXXu2%2Fs%2BHMDuK%2B2%2FoLTOLkDyZlHEQrgAJ1wsdoKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaSVSnTIs5zifsLrgq3ANMYKxEoFFLWjKK2aKSsJHH4u%2BLay%2F8w5N3jff%2BXYqFXCpV2EXkfHFzV%2FZjSrmXx2rLvjpO2GG9yTLIQ6%2BdS5GSoNfguFe17dAvGqwXOk8WVDCOtKSxqWw%2BUccbMUJ%2FFKlWiL7KS6ACAhoDdu0kpSBH2eLbo%2FjY1IA8MRQHpbgR%2B1lU3dFQvtMMJQYhRq9KnqWXyjdACRbK1I5KL%2Bg4uUGM%2FP6QWZ9DqQy6Pb9SxMtiOhOvDrVNpZfbzXAcdt72rk1diD31q6j%2BSo5PTbywbK%2FrhA%2BkApkOqnKzZpnRLxvKjIzPRqsb9QNqdDmitMpnIST8uULioTzKMKm%2Fy2KKExuWiGOmYYRZZuR6%2FiL05vnirTGfn10grlzIVdAFy99E0XaBKVdpqV7OjRjgofrvmw5VZGV7JIpO1ZaefnX02TILFU5FxbhRHX8ahsFK%2FaeQ7DXXnnjD0Jcoq21U8Y5wPzGq3a6Rii7n1kWtKutjl1hCXqo7O%2BPGymLRpdIZWwownLRIYKE3aenlXlc9MnAPBXVapfCzYHeX5avGR%2FdwA70SZ%2FMtava5ynRgAzNi640i3Uj2cZS0ZLTlINfsxPn%2BD13xyZQO2PoTUBWRvVaBFVq0wJQERsDtc8L2Hd6XfTDhi%2BzBBjqkASqeKZR1inrGfSun5RlJDvDJDqOWNhuLzr7q%2BltADlXuStvcllsrd0O%2FXMGrzOi%2Bx3%2B02CV1bF9CKlcHQ7QgsLNG446eS4Z%2FLx9TfYusLCTtjATodvKtApcMqflh1jUbv3%2Br9uek%2BJW9Rk%2BR6ak3i9TIZPbXbPGb4%2FxUMvUDu6AXQxHedyjfAUnnOkcdN9l4Ww3mfzQ1B4%2FaHT6Mewl3owkexAY%2F&X-Amz-Signature=10b96bba169c89af23f09da069119c01febf46d86805e8eb2be3e0e893bb8d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
