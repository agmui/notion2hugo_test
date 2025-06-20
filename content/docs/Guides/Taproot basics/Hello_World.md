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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXGEPCB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY%2BQ7v7cLaFoz%2BMezzxFpdNiSug1aHDiGKeb5ZrGukDAIhAJJ0JPrdlwtdaHtQN22XkVU0%2BoEkdR72zvQMPj0qNwszKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOPEGWnrNwr7pbvzYq3AM7Ms1putYZMAaLcEhBqUJPJHKO3j5kPTFnv%2BKNXnyWPITKqgShLZP0xek7M%2BF9F%2B7MiEd3sPhL0c8AO7g5FGRUnyVVHkwuivFfMZwXPKB2mKRcFBUspi%2BXBFZ1fZto1Zp51W3Yg7rkjDdVBX0BQzZ0kpHpyXxura3MKOZ88j53rF2hnNAVggFxt1dr5LhjeJ51dwLYReigfvTx7AQgLkBcFg4VsjsmA9EFzVhccjUcOLJU5Owr1o0bngtT8ZPWmwEpNNpNsokz%2BHOqZ1NEpamKThjZMGD8a3xNuqmEDTZvup4eg06viYX9291jZ7NpGQEVXhVxbwbFzbpNlgX8SSFvNSPeJ31aijKcvwMUNXnuOJnT6iA6h69vWpwtbFqmL2WW%2Bj4GXOXw1qbGhiCyfY1sF73H3M0qxi2UK24QPPTpnNujmz3MO2WoaNqiyVjM6aQSzd4lSS13txwiWeIqBU1nW1AXylMsqjUAfN59CFh7xAzmqFUMxW9bX5IKUPtzksp70OMBGYpMnBeOSzTOIXK%2F3bwl7xAnl0KA1zNvKkUD6LAl3cDlKhfqYvw3VbtVc6zU97ENVziVLNJogY4677LjvpiayD7GLye%2BTEZbBPckFOx8GT5ThRWwWAog4zCopNXCBjqkAYFsUoyK04HHjNgsBut%2B6%2F6pJJyi9PqI%2FEUvMDo4xVlvEprprloYE%2FEjSjYE3M1Fogwv3gNJJAUS6HXBEwkJkGTECWQl%2BOQ%2BQ6RpTQwkh1phDTOSwBS6dvOPtLkIZU3oebe1f43TbY9O7iC%2B3au11vl49slo4jbjWCih0AkA0zNlpZgNtjVHc%2Bd0ZG6%2FJ1MzNCyeD0YhvtmBO%2B0lyLt5PkN71%2Bj9&X-Amz-Signature=6753863b7f9cc2983bdd48a7d1003eaf1b3a1597bbe793cdb2ca67753ba20087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXGEPCB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY%2BQ7v7cLaFoz%2BMezzxFpdNiSug1aHDiGKeb5ZrGukDAIhAJJ0JPrdlwtdaHtQN22XkVU0%2BoEkdR72zvQMPj0qNwszKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOPEGWnrNwr7pbvzYq3AM7Ms1putYZMAaLcEhBqUJPJHKO3j5kPTFnv%2BKNXnyWPITKqgShLZP0xek7M%2BF9F%2B7MiEd3sPhL0c8AO7g5FGRUnyVVHkwuivFfMZwXPKB2mKRcFBUspi%2BXBFZ1fZto1Zp51W3Yg7rkjDdVBX0BQzZ0kpHpyXxura3MKOZ88j53rF2hnNAVggFxt1dr5LhjeJ51dwLYReigfvTx7AQgLkBcFg4VsjsmA9EFzVhccjUcOLJU5Owr1o0bngtT8ZPWmwEpNNpNsokz%2BHOqZ1NEpamKThjZMGD8a3xNuqmEDTZvup4eg06viYX9291jZ7NpGQEVXhVxbwbFzbpNlgX8SSFvNSPeJ31aijKcvwMUNXnuOJnT6iA6h69vWpwtbFqmL2WW%2Bj4GXOXw1qbGhiCyfY1sF73H3M0qxi2UK24QPPTpnNujmz3MO2WoaNqiyVjM6aQSzd4lSS13txwiWeIqBU1nW1AXylMsqjUAfN59CFh7xAzmqFUMxW9bX5IKUPtzksp70OMBGYpMnBeOSzTOIXK%2F3bwl7xAnl0KA1zNvKkUD6LAl3cDlKhfqYvw3VbtVc6zU97ENVziVLNJogY4677LjvpiayD7GLye%2BTEZbBPckFOx8GT5ThRWwWAog4zCopNXCBjqkAYFsUoyK04HHjNgsBut%2B6%2F6pJJyi9PqI%2FEUvMDo4xVlvEprprloYE%2FEjSjYE3M1Fogwv3gNJJAUS6HXBEwkJkGTECWQl%2BOQ%2BQ6RpTQwkh1phDTOSwBS6dvOPtLkIZU3oebe1f43TbY9O7iC%2B3au11vl49slo4jbjWCih0AkA0zNlpZgNtjVHc%2Bd0ZG6%2FJ1MzNCyeD0YhvtmBO%2B0lyLt5PkN71%2Bj9&X-Amz-Signature=a02c8dd57fdaa0fb134f1eb61390afcd36a8a70e606f15f2044b22916d5834c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
