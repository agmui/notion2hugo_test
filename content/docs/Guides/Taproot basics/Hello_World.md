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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMGHYFR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFKODQPW%2FX%2FSCvCzw614B0Z5Uj%2F%2Baod7KdekYzHNs8CKAiA%2B2seiPmyNNOo%2Fzk2LnFWeLBC%2BUM65lwMSlnGgeMVloiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHK82k%2Bp69pPDZKqQKtwDX%2Fc5yromPI1vp6gVlOpyfFkBfYxXzUAn5VyaXDTuFU2hRDYVtqsGd8NWRR%2F273iHab1ujyJ2dxT15uZkdCy3GG%2FSOIsx3bgOyY2vp5KfivYBdmzSgVCLVeXzee5U6V5r65v0Bife3BmfaP5ZtRca03RAyREdP3FGZ8bUktvu1oGAk4mv1TuZRZBMOFhqnRWAoF9SUHFoY%2BOHjsrVncTskGjtSZeZxOkd%2FHpaIxU42%2BLuJdO5Wzw0h1he6Cty3pXmoR%2FOwxy4%2FyHFWi6qZFo4H1QDkcGsiVRs9vlpHY98PI3hG4DQCxAKznZ06Y1uLae2iaclws87RnzdjE5AQeWdh%2Br0PzRKZGh3xIle4ayRf09y7XGN%2BTClrlbS%2FL6kgxAZORCAlA898p5zi9N%2BmkrQk7UtiVzF5oRaBvMyGb0YobxApwcCjrhKgWSOuxLHXcnxy874%2FcRPhx0Pf1sKDvl5VU0HqzdXceUUFVgfd%2FGIXXE2Du%2BKWsI2X%2FHyDy5IV7%2BTKQLjDJXF4UO7mwjyg9AeSrJkpgesOGOKLS3MCLUrqdyIn6CPa5VLBniew7K%2BxigbKlD%2FI4r%2BmfwMkJwed6yVPmEBTZu7SBMjxe234Yk9zKWiRh39O4U9sSvfmn4wt6LIvgY6pgGzw4JmXJ5bDDCTBH8vNlePdk8blkb7mtqMlismthoolmvEyNExoghXQxALASSMjjujK1j9oyroOEBoEH1Y9o3LT3LTVJpaJzO0h1MnMtLFXLGjrUW0wRMvUMY5Gq%2F6vLlLAlFlcVTETlxSp1n7oJ5oXTzV94Im%2FRwG8%2Bg504JAwMZFszvYAkLC%2Beo5s15Fyd823S%2FnNlYcxO2i%2B7%2Fg%2Bb%2FEYC5m6tf7&X-Amz-Signature=7012661c0e41af043f2e58bbccfa151e1d184aca7edf9b8f770b11b537f2c1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMGHYFR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIFKODQPW%2FX%2FSCvCzw614B0Z5Uj%2F%2Baod7KdekYzHNs8CKAiA%2B2seiPmyNNOo%2Fzk2LnFWeLBC%2BUM65lwMSlnGgeMVloiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHK82k%2Bp69pPDZKqQKtwDX%2Fc5yromPI1vp6gVlOpyfFkBfYxXzUAn5VyaXDTuFU2hRDYVtqsGd8NWRR%2F273iHab1ujyJ2dxT15uZkdCy3GG%2FSOIsx3bgOyY2vp5KfivYBdmzSgVCLVeXzee5U6V5r65v0Bife3BmfaP5ZtRca03RAyREdP3FGZ8bUktvu1oGAk4mv1TuZRZBMOFhqnRWAoF9SUHFoY%2BOHjsrVncTskGjtSZeZxOkd%2FHpaIxU42%2BLuJdO5Wzw0h1he6Cty3pXmoR%2FOwxy4%2FyHFWi6qZFo4H1QDkcGsiVRs9vlpHY98PI3hG4DQCxAKznZ06Y1uLae2iaclws87RnzdjE5AQeWdh%2Br0PzRKZGh3xIle4ayRf09y7XGN%2BTClrlbS%2FL6kgxAZORCAlA898p5zi9N%2BmkrQk7UtiVzF5oRaBvMyGb0YobxApwcCjrhKgWSOuxLHXcnxy874%2FcRPhx0Pf1sKDvl5VU0HqzdXceUUFVgfd%2FGIXXE2Du%2BKWsI2X%2FHyDy5IV7%2BTKQLjDJXF4UO7mwjyg9AeSrJkpgesOGOKLS3MCLUrqdyIn6CPa5VLBniew7K%2BxigbKlD%2FI4r%2BmfwMkJwed6yVPmEBTZu7SBMjxe234Yk9zKWiRh39O4U9sSvfmn4wt6LIvgY6pgGzw4JmXJ5bDDCTBH8vNlePdk8blkb7mtqMlismthoolmvEyNExoghXQxALASSMjjujK1j9oyroOEBoEH1Y9o3LT3LTVJpaJzO0h1MnMtLFXLGjrUW0wRMvUMY5Gq%2F6vLlLAlFlcVTETlxSp1n7oJ5oXTzV94Im%2FRwG8%2Bg504JAwMZFszvYAkLC%2Beo5s15Fyd823S%2FnNlYcxO2i%2B7%2Fg%2Bb%2FEYC5m6tf7&X-Amz-Signature=f58378499bf46c81229d3f63c6eb9400d036c72d92c374db8b77355bcef77d67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
