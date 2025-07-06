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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=d2c787c9e39f522ba6e4a6e5880217006c42f2d6d3c7e1ec7634c176aefc582c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T024958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=f47125a41cea22a248161ad31b147c8b8087bd797b1068d374007361f72282a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
