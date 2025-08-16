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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JPQHHLL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDB3g%2FwpbEwZtAqDWb3xsnY6Bvwc5rhuiwo9gWlnEmhXAiEA9SmAN4cC%2BlNyezWA%2FgtHqB49IJoV9VD1jkUwwEYScY8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHZgrglzt3H9CH64VircAx2a4kFeLXqg50Fm4bBcUd15aXWDZYFRyrpoZv8ohywUO1X7cQVgeX5MX4Jvn4Xn9kpHBemnHP%2Bq5rL0diGCZCNjCHQxyC9QCxLtD9C0D34NgCHdXInWn3ded9X43uck72zBH6VU6PGI8o%2BB8n8Vu70XY6ZaqKnyPflucylGb2uNFJoboNq0nh3YosCm3Iu3SAvnOfFBox0WVec8cKSD9D6GAdO61vppR1Rk0KLuJqRwTf47kMPB4EUpRV0QerrITs8aMDWnXarrXGNHG1oaW%2B4q11QakKG5yn9vRdeblB3HLJIeBqWEZcFoUpeRvgoXiXZHmGGI9oW2JcVkOKM63At5eLvGuInz0Oml%2Bp%2BpxRbYeSfLl7iD5R1XM%2BiExj2LcYGuc3D6E4Ed7Co2KYWg4z6%2F%2BedivRbnGOaQnpSm3gePP9W6iPcgn3GBQqehPS3qXvBmHNz1g0GSca3SXayCBxZaOCKo7x29%2F%2FXy4gGw34WU2%2Bntr1CtkOeMpq6jz7NXL6Q8fEHldnXwfX9E%2BacjUZ13rSnpzLEu%2FRVNIqHWpZpWhFWLKxX4CDKjDyxe5QlkOFBo1mWxT%2F4HnlIi3qlsKeMcEEGx8rIiTuCz9a5JAkhyRcWduw%2FqPtIFIoOyMNSUgsUGOqUBVmKkep4nCJ2x8N88vKyimF1Nu5IWWc7Pr5c17jFHNmXcN%2BUDdbWYC7scvQYuzlpKUu%2Fy3nlPm%2FnKew0mItWww4XVUiB6J7%2FzXURooW5Lr%2BbOIY0GOeZshlbpBQSe%2FRM7LsYjWaOWMgFUqhJw%2F064JIRH5NHpI2NA7DOJOWlAJ0hIcTWxIV2U0%2FGziJZowhPhPU%2BhdM7VJWQmbl2CcyjIdDj7z6OG&X-Amz-Signature=0b0baae7b9da89142ea1a3ebf11afff0f84037861c555530f21323fb4de8ce6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JPQHHLL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDB3g%2FwpbEwZtAqDWb3xsnY6Bvwc5rhuiwo9gWlnEmhXAiEA9SmAN4cC%2BlNyezWA%2FgtHqB49IJoV9VD1jkUwwEYScY8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHZgrglzt3H9CH64VircAx2a4kFeLXqg50Fm4bBcUd15aXWDZYFRyrpoZv8ohywUO1X7cQVgeX5MX4Jvn4Xn9kpHBemnHP%2Bq5rL0diGCZCNjCHQxyC9QCxLtD9C0D34NgCHdXInWn3ded9X43uck72zBH6VU6PGI8o%2BB8n8Vu70XY6ZaqKnyPflucylGb2uNFJoboNq0nh3YosCm3Iu3SAvnOfFBox0WVec8cKSD9D6GAdO61vppR1Rk0KLuJqRwTf47kMPB4EUpRV0QerrITs8aMDWnXarrXGNHG1oaW%2B4q11QakKG5yn9vRdeblB3HLJIeBqWEZcFoUpeRvgoXiXZHmGGI9oW2JcVkOKM63At5eLvGuInz0Oml%2Bp%2BpxRbYeSfLl7iD5R1XM%2BiExj2LcYGuc3D6E4Ed7Co2KYWg4z6%2F%2BedivRbnGOaQnpSm3gePP9W6iPcgn3GBQqehPS3qXvBmHNz1g0GSca3SXayCBxZaOCKo7x29%2F%2FXy4gGw34WU2%2Bntr1CtkOeMpq6jz7NXL6Q8fEHldnXwfX9E%2BacjUZ13rSnpzLEu%2FRVNIqHWpZpWhFWLKxX4CDKjDyxe5QlkOFBo1mWxT%2F4HnlIi3qlsKeMcEEGx8rIiTuCz9a5JAkhyRcWduw%2FqPtIFIoOyMNSUgsUGOqUBVmKkep4nCJ2x8N88vKyimF1Nu5IWWc7Pr5c17jFHNmXcN%2BUDdbWYC7scvQYuzlpKUu%2Fy3nlPm%2FnKew0mItWww4XVUiB6J7%2FzXURooW5Lr%2BbOIY0GOeZshlbpBQSe%2FRM7LsYjWaOWMgFUqhJw%2F064JIRH5NHpI2NA7DOJOWlAJ0hIcTWxIV2U0%2FGziJZowhPhPU%2BhdM7VJWQmbl2CcyjIdDj7z6OG&X-Amz-Signature=9a25caf4746766ef8b8a9686a50213f4c67f6d1193f1aed79f6cd15b042717a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
