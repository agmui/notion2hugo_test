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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHCEWEL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDBfVkHL%2B9J%2FiQXaCqDWeMpWsUN5j9ZIRfMOox2ShDPPgIhAM8ncmvDxcV3TQda5aTfjoIH88a9ncrC%2BMV7B1mIo3n9Kv8DCHEQABoMNjM3NDIzMTgzODA1Igw6EFi7ZRcz6HbpgQsq3APXO1l1oJyhjd5p6IYblG1%2FKYpNttWkiZVyo3i3%2F%2BUe9enzKGkUf65kSkxTSirw%2F946RpIq284RO9%2BbRwd%2FJw07hFHf9GOcFXIjlwKSUYs8ooZQT49EvUz2n7UAMBcx4sNp%2B3JWOW3j96mkUHr4Ob2G6uLWh21FwftYTw1bqlDmQJNGEG6buUfuKY0q7hFaPeu2B%2BWctKXf4Q9F7xbeSP8oHLxI%2BPyU8MAGwyU1VGxw%2BlJHoV8o3GYmEgwhDS8FNLb3yI8wO8oO3Ge%2Bn8mDFq52I4GjMdKAfDi97PtygBDJBGXzo79EYyv%2Fjs15EWvgwfrHs4K1tfLXYacv75iAqgTBSJwG7xSffK4QMUCkfBGVxjFTCiuyRBktNkdqrld453L8KLica42HI8pliVWjKsK4iqdNPpvuqFNVp3195S1NP0FnX0AWdxM6MxblG6gyjR20bjUiOuPfvrNGHKAqvUSvcLH5EPfrYiXU%2FHpuI%2Bf2wuf447nk8SK1my62FcQ6rx9zMvwU9bHitkzlJgpJex%2FqhnJzoMtiJGFJjB4WXhH0H6DE%2BG137MPjOVCKXfIjyYu7fuEd4CfTfpCDf8uP6x4lTUZOmpy6e7t7yZ6UMt3%2BJCpszvETqsNPnbyTZDDg94DFBjqkATD6jxCwk4ArEkEHIKwGjmHQVcaKrgBQ0acZSR7LVP%2BoOV%2F0EBHP7g9wmKsPkOMSB%2F8BxTV7nAqCocUJwdHv0j1gNrHt1GstTdKXOHv0T3EJHDu9Wxn8boVbcfqVJoUK%2FjQKpL6OS9dU%2FoUDmndfEcBFBumA9tXCLmvADkTRTzWRVbTIKJOepnpnvFhjTgNZN%2BHd9Mc%2Fw187kW0bdDds94hLrsIO&X-Amz-Signature=faddd89a41d2d881ff72dbc0005f9d47f6f332cbc29462acb52aa368ab69e8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHCEWEL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDBfVkHL%2B9J%2FiQXaCqDWeMpWsUN5j9ZIRfMOox2ShDPPgIhAM8ncmvDxcV3TQda5aTfjoIH88a9ncrC%2BMV7B1mIo3n9Kv8DCHEQABoMNjM3NDIzMTgzODA1Igw6EFi7ZRcz6HbpgQsq3APXO1l1oJyhjd5p6IYblG1%2FKYpNttWkiZVyo3i3%2F%2BUe9enzKGkUf65kSkxTSirw%2F946RpIq284RO9%2BbRwd%2FJw07hFHf9GOcFXIjlwKSUYs8ooZQT49EvUz2n7UAMBcx4sNp%2B3JWOW3j96mkUHr4Ob2G6uLWh21FwftYTw1bqlDmQJNGEG6buUfuKY0q7hFaPeu2B%2BWctKXf4Q9F7xbeSP8oHLxI%2BPyU8MAGwyU1VGxw%2BlJHoV8o3GYmEgwhDS8FNLb3yI8wO8oO3Ge%2Bn8mDFq52I4GjMdKAfDi97PtygBDJBGXzo79EYyv%2Fjs15EWvgwfrHs4K1tfLXYacv75iAqgTBSJwG7xSffK4QMUCkfBGVxjFTCiuyRBktNkdqrld453L8KLica42HI8pliVWjKsK4iqdNPpvuqFNVp3195S1NP0FnX0AWdxM6MxblG6gyjR20bjUiOuPfvrNGHKAqvUSvcLH5EPfrYiXU%2FHpuI%2Bf2wuf447nk8SK1my62FcQ6rx9zMvwU9bHitkzlJgpJex%2FqhnJzoMtiJGFJjB4WXhH0H6DE%2BG137MPjOVCKXfIjyYu7fuEd4CfTfpCDf8uP6x4lTUZOmpy6e7t7yZ6UMt3%2BJCpszvETqsNPnbyTZDDg94DFBjqkATD6jxCwk4ArEkEHIKwGjmHQVcaKrgBQ0acZSR7LVP%2BoOV%2F0EBHP7g9wmKsPkOMSB%2F8BxTV7nAqCocUJwdHv0j1gNrHt1GstTdKXOHv0T3EJHDu9Wxn8boVbcfqVJoUK%2FjQKpL6OS9dU%2FoUDmndfEcBFBumA9tXCLmvADkTRTzWRVbTIKJOepnpnvFhjTgNZN%2BHd9Mc%2Fw187kW0bdDds94hLrsIO&X-Amz-Signature=3a7d5f224e7d0811d222c3e4a188eaed923a7149d4237a41ac8b3ef0e7bd8617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
