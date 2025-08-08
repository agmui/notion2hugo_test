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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMJU7Z5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEoVjE3i3GX%2FN9W9TMiOWOJMFu5afxlBRVgINoy2MgyWAiEAwj605GaGdNn6QZe2GMSHwo4HhHl9gkf77VS3KnvpnGsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAEjq5owtHbCA%2FOircA%2BEjnsurloFSsI2o5XH6o9ebFWFSBh%2F3%2BdSqFcIIBKyJlm8KcRu884uDjEDunmzDkmx59lBmLCtXDyYEwDT7pSP2TdAIUWCjUOelwoDceD0bpeonRSsSxYuGh%2Bdg%2B9rJc%2FtNvHOsRo7Nqw%2B%2BQ7iS39fjQ26U1xJxIlj7VOniBaaCGL266yx3DLhrCJAR0I%2B8RmCRpeDbXcZXZXEm9R6RXTenxOGJYBtJL6uGeZYGfXnElo41pMfmPVj76qYg6BnT0Qoiq0rHCKVZ9KSUr3ZtqcXpCp2RSdFubMXaMbUSUs3tp4iijrdxtRGHUqySrqr%2Bk%2Fi0eXLL%2BomtyOye1BNr1IBhm%2F3IvO9LCbWYSdC9bYmAQn3geoD%2F1Fr1yJ1Og0JgnluxbRklgyljbkmI98LPh71QHg9SsOc%2FbM7euc%2FjPAwGWR%2FXxQUyrFnHSd1nVKodbzOG9OjBhKnn486W6LUMEoMqObATMT8aCxk4rP1OuSmC2i2C6r4mWb%2BPmEZZSsbqCQT4ZZGO9ubCYv2cR1E5ZujKk6xi1XcVKoBkKquOPWSsVzrZQ4MBhMgNzQZ9fvVJOgU4cy2LuSp0ebu1gJ7oCveBwQ4cP%2FcJvRtRgA6jIp4qMQ8WdzDPpHzt6YhEMKf61cQGOqUBANM5p4bKaW%2FCUkVOv7HIjIzN3M0TKOzxpC9LL8PCmjbTGqbogxiXx9rv9h0JrxmF6ce2tvvwOEI2NLVnf59ZYiIcEbMkRIJEQvISGWNp1WUtVj0K3gb1I7K0ITXVTK8UlNhELuGNVQ2mOyqqrdjvH8bOkX5CxclxD8moaMswaWZ2dubFPZRJFDl9YRSHu09L1aSLUUnntmqPiZlJ6CGQkZT0TdUj&X-Amz-Signature=a5e9a7440a263a7e116c19038948b7d26b0d304b4f60ece07d96730f45e3c3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMJU7Z5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEoVjE3i3GX%2FN9W9TMiOWOJMFu5afxlBRVgINoy2MgyWAiEAwj605GaGdNn6QZe2GMSHwo4HhHl9gkf77VS3KnvpnGsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFAEjq5owtHbCA%2FOircA%2BEjnsurloFSsI2o5XH6o9ebFWFSBh%2F3%2BdSqFcIIBKyJlm8KcRu884uDjEDunmzDkmx59lBmLCtXDyYEwDT7pSP2TdAIUWCjUOelwoDceD0bpeonRSsSxYuGh%2Bdg%2B9rJc%2FtNvHOsRo7Nqw%2B%2BQ7iS39fjQ26U1xJxIlj7VOniBaaCGL266yx3DLhrCJAR0I%2B8RmCRpeDbXcZXZXEm9R6RXTenxOGJYBtJL6uGeZYGfXnElo41pMfmPVj76qYg6BnT0Qoiq0rHCKVZ9KSUr3ZtqcXpCp2RSdFubMXaMbUSUs3tp4iijrdxtRGHUqySrqr%2Bk%2Fi0eXLL%2BomtyOye1BNr1IBhm%2F3IvO9LCbWYSdC9bYmAQn3geoD%2F1Fr1yJ1Og0JgnluxbRklgyljbkmI98LPh71QHg9SsOc%2FbM7euc%2FjPAwGWR%2FXxQUyrFnHSd1nVKodbzOG9OjBhKnn486W6LUMEoMqObATMT8aCxk4rP1OuSmC2i2C6r4mWb%2BPmEZZSsbqCQT4ZZGO9ubCYv2cR1E5ZujKk6xi1XcVKoBkKquOPWSsVzrZQ4MBhMgNzQZ9fvVJOgU4cy2LuSp0ebu1gJ7oCveBwQ4cP%2FcJvRtRgA6jIp4qMQ8WdzDPpHzt6YhEMKf61cQGOqUBANM5p4bKaW%2FCUkVOv7HIjIzN3M0TKOzxpC9LL8PCmjbTGqbogxiXx9rv9h0JrxmF6ce2tvvwOEI2NLVnf59ZYiIcEbMkRIJEQvISGWNp1WUtVj0K3gb1I7K0ITXVTK8UlNhELuGNVQ2mOyqqrdjvH8bOkX5CxclxD8moaMswaWZ2dubFPZRJFDl9YRSHu09L1aSLUUnntmqPiZlJ6CGQkZT0TdUj&X-Amz-Signature=f56a4b134dc18027afd98336480b7b9100e7584c7995052acfb3264e510a3738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
