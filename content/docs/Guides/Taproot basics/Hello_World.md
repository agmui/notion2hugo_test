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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IYXNWIW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEcfda%2F8rqhfyMt8ydw3VGdrVjH3wXyt8Rdnk5gTn51CAiAX7Mp5wOWLJ3mpXaKuNGLLOZ9lJ%2BdiKthWylMiPp4q5yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1sJYC7Bu0E0v%2BU%2FKtwD%2Bjr0hwHdJqpC0WXQzvounbyvik6p6mWni0bLnqTyWTaWs1Zi9XXnNdw9VJBHmyXC7XF4OuwlOGOqNQs2vS839ot2qg8gEkUXVfUXCivdb3uCaLvpp5duaHPQTAeeYa6eJrP7y4Ub2UJO2dvqVBnuSLKah2YfiyIFeWHgFqpSZZ9aM0JhHG9Z7eylV0GWlah4odmE9bgbMVJ2hb6A6azt7aMXRbw1gOIIFSynZhcgRsoT%2F9A5Dl35vKKGqoCA9LK%2F4it8T3G9O%2BBucvfXnkCQj4X17NCVsaJCBJq4Lwisc%2Bz3x0w15nEnQHjTWuqz4GZ7930Yv0f9mNMnvRipRkA3maceORurIXnCnqPI3n9llqfzCCZzQXdVV98j6UCN14wDq%2BzmNP7VGUIruz1bd8mmaV4vcAi2kefZVYGKEqQBIcvxzQLAIgw7MU2ctDJWr7nHbssQCUWS4zHTE%2BEzV%2ByxMNVu0BsEJ4J6EtvDoMni4uMwQBkJ9%2F0VS%2B9ZQBKf1g1un7Ow%2Bv8yDss4cgW%2BKgMHAUzLcdzhXaoKHKQJNraFhhJfPHO7ebNFmbIW5xzmto4IHl291THLIZBtpo0wzAvWh2tV2HhHJ%2FRQzlek3tj2VyAiuwShB7uE0pFR8x0wyc7BvgY6pgGxqO05kCl31z%2FfJwEwalnPKfdcjd1eB92iBsLOUFcFJ5lD3zQuKVrnS3bocLqSy9bmVM3118xiVRoxBnUCLSmPCr8Dema%2F0KPiTQ1vSbMC6vLy%2BnAyxfjIMrIi%2BqhoL%2BQgSfu38tSrzpPSmw32mhL7uWHv2fwTw1FfxmrL4x51OopPm%2FVlEtdTJeosv07o%2BO0%2BoLeHz9DK8xyNMlQKOVd1El3W3HpT&X-Amz-Signature=e27a2fed0be11b2c2ccb0dcad98c32c5e579fffbcf441a284a13e3d92fc12306&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IYXNWIW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEcfda%2F8rqhfyMt8ydw3VGdrVjH3wXyt8Rdnk5gTn51CAiAX7Mp5wOWLJ3mpXaKuNGLLOZ9lJ%2BdiKthWylMiPp4q5yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1sJYC7Bu0E0v%2BU%2FKtwD%2Bjr0hwHdJqpC0WXQzvounbyvik6p6mWni0bLnqTyWTaWs1Zi9XXnNdw9VJBHmyXC7XF4OuwlOGOqNQs2vS839ot2qg8gEkUXVfUXCivdb3uCaLvpp5duaHPQTAeeYa6eJrP7y4Ub2UJO2dvqVBnuSLKah2YfiyIFeWHgFqpSZZ9aM0JhHG9Z7eylV0GWlah4odmE9bgbMVJ2hb6A6azt7aMXRbw1gOIIFSynZhcgRsoT%2F9A5Dl35vKKGqoCA9LK%2F4it8T3G9O%2BBucvfXnkCQj4X17NCVsaJCBJq4Lwisc%2Bz3x0w15nEnQHjTWuqz4GZ7930Yv0f9mNMnvRipRkA3maceORurIXnCnqPI3n9llqfzCCZzQXdVV98j6UCN14wDq%2BzmNP7VGUIruz1bd8mmaV4vcAi2kefZVYGKEqQBIcvxzQLAIgw7MU2ctDJWr7nHbssQCUWS4zHTE%2BEzV%2ByxMNVu0BsEJ4J6EtvDoMni4uMwQBkJ9%2F0VS%2B9ZQBKf1g1un7Ow%2Bv8yDss4cgW%2BKgMHAUzLcdzhXaoKHKQJNraFhhJfPHO7ebNFmbIW5xzmto4IHl291THLIZBtpo0wzAvWh2tV2HhHJ%2FRQzlek3tj2VyAiuwShB7uE0pFR8x0wyc7BvgY6pgGxqO05kCl31z%2FfJwEwalnPKfdcjd1eB92iBsLOUFcFJ5lD3zQuKVrnS3bocLqSy9bmVM3118xiVRoxBnUCLSmPCr8Dema%2F0KPiTQ1vSbMC6vLy%2BnAyxfjIMrIi%2BqhoL%2BQgSfu38tSrzpPSmw32mhL7uWHv2fwTw1FfxmrL4x51OopPm%2FVlEtdTJeosv07o%2BO0%2BoLeHz9DK8xyNMlQKOVd1El3W3HpT&X-Amz-Signature=504858f80454e6a3ee1e54ee09856e347c5aac90423daa512425c447f868d453&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
