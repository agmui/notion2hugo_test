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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YIBXCPS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSikYcv44gDTooUqLyjNMWWm8%2FBz6KNHg6wnyg4xxxrwIhAJxVKM5nh%2FsOODIcwW2ni7fAh2tVjz8TKtBOtliEJvU9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZyiHuXFyvKrH0BRsq3AP%2F83mGpieKoPv5C8TV%2Ba51SJ1J1pY%2B5dxLLRBcNxUksp3evP5Na%2B%2FERxIIsIpzpeEDqZaOrpylqAhQD95E%2FIWLO5zWwYz%2FvIIU8PwOfN8tHaGuy6ajVRUjVqAAHS2EQZ1WJBJpU%2BVrkxFGlCdZz3AdE0fOjfxeKKNetoVf7p0kcK2oF3Poy5sm5Lg0ZjaC%2B%2BjlGfqzF3XeS7et1KPOMqis%2BtFRjjBBLzUx9Dx9zrwLRJFWAywve35SA0RabgLQ7aKbj2hTpbBHpH52zEyZLgQ09gXxWA4qnkRp7zsu%2F%2BH%2Fi55%2Bl4D5bd8elrGXBOFrs1RrhgXyFqJDo9Qdq5YhhlK%2BkEkoGS2gHV9thYavr%2Bg1vakhic9ozUC94B72Mp%2BJA8nyVlTNiGXZNYIN4pYNdx5yvp1qWxlodwTucjXnySQwRoEbtoAtv62Os%2FE35DckyQMXckeqieYe3pm1OCbzNfOOjJa2CbHYiob76vrJRflu6b%2BiTmSKv1KsHUgfznOxtVULQR1IvOX4nUgRqbTilqgDb4EOYp0qU3kvitadfmt6AtiAAt38gla1IHctfSZTHxalOVeddU1tfLK5HIkfhtkTafILSDZCj9rSegeUEpW3VZY9l%2FHC2v2anTzgoTCD%2FJe%2BBjqkAQq3jCBDbzA6yJzIpVvaEehnSdMvNOmNaNKC0iNj9AWihl%2Bui5QOE4pn6xyKB65nLlfg8MaMIECwnLf07P4hnVJtwj1WU6nJFsTXRr%2BBHkdHGImZhpUUKHgkZgzjcNJZa6bVjzvuOEEzOVZVjsCQBNG2CTe4tJdK9UYCNZn72annGWyryYj8C8wIlFox2chVBmXumDchP9c66mPiHL08F5DDZE3Y&X-Amz-Signature=ae877dcf70f36476f96394a99e40499338b09f3e293f29cb3021793ef005f267&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YIBXCPS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSikYcv44gDTooUqLyjNMWWm8%2FBz6KNHg6wnyg4xxxrwIhAJxVKM5nh%2FsOODIcwW2ni7fAh2tVjz8TKtBOtliEJvU9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZyiHuXFyvKrH0BRsq3AP%2F83mGpieKoPv5C8TV%2Ba51SJ1J1pY%2B5dxLLRBcNxUksp3evP5Na%2B%2FERxIIsIpzpeEDqZaOrpylqAhQD95E%2FIWLO5zWwYz%2FvIIU8PwOfN8tHaGuy6ajVRUjVqAAHS2EQZ1WJBJpU%2BVrkxFGlCdZz3AdE0fOjfxeKKNetoVf7p0kcK2oF3Poy5sm5Lg0ZjaC%2B%2BjlGfqzF3XeS7et1KPOMqis%2BtFRjjBBLzUx9Dx9zrwLRJFWAywve35SA0RabgLQ7aKbj2hTpbBHpH52zEyZLgQ09gXxWA4qnkRp7zsu%2F%2BH%2Fi55%2Bl4D5bd8elrGXBOFrs1RrhgXyFqJDo9Qdq5YhhlK%2BkEkoGS2gHV9thYavr%2Bg1vakhic9ozUC94B72Mp%2BJA8nyVlTNiGXZNYIN4pYNdx5yvp1qWxlodwTucjXnySQwRoEbtoAtv62Os%2FE35DckyQMXckeqieYe3pm1OCbzNfOOjJa2CbHYiob76vrJRflu6b%2BiTmSKv1KsHUgfznOxtVULQR1IvOX4nUgRqbTilqgDb4EOYp0qU3kvitadfmt6AtiAAt38gla1IHctfSZTHxalOVeddU1tfLK5HIkfhtkTafILSDZCj9rSegeUEpW3VZY9l%2FHC2v2anTzgoTCD%2FJe%2BBjqkAQq3jCBDbzA6yJzIpVvaEehnSdMvNOmNaNKC0iNj9AWihl%2Bui5QOE4pn6xyKB65nLlfg8MaMIECwnLf07P4hnVJtwj1WU6nJFsTXRr%2BBHkdHGImZhpUUKHgkZgzjcNJZa6bVjzvuOEEzOVZVjsCQBNG2CTe4tJdK9UYCNZn72annGWyryYj8C8wIlFox2chVBmXumDchP9c66mPiHL08F5DDZE3Y&X-Amz-Signature=45170e334ab4292f598853026ba2cc538fe783859595b85ed53689c1de8ff435&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
