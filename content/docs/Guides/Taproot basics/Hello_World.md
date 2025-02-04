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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=17224e159c7023ce80178f803ef92a96aa9078ce5b69fb0ff6b42694c618edf0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CR6N4YQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHuSQncUuj8Xhea2SZCYjTQUO4%2FJRUeKea%2Foh8tF8ZeSAiEAzR%2FUKMHQavN8AQcxj8ZmZ12v0Js3Z5Iu9Nh68zhvt%2BEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBq9LfG%2Bd4YdrENEiircA%2F8RTP%2BShMs1SiJlSkr9PnCkGhr1cUUhfc4rBLZ7B%2F%2BsGoNMEeiHR7oDyJm%2BBC%2BLW%2FnxS9F9GBTwT7oRfdcHk9hRgCz4rWW6Ifk0h1MyfxrCTBJt3X7PUlFW7FPER3jAzJG%2BTmdKWZi%2BjNiHuIwaYgQa%2FJhk04Agq3oEri7X3%2BwT46bWBfrvtO1Enqf6QsCXYdpw55Ofp3rH3aVH%2BoOysv4kgPJgo1EIwICwXksnor%2Bds3LDQRVWLreBw96bwFeuPvSfzYvANo%2FyE6ZjiIJLjs1mwDUw3nTWqNnQbBcAqw2Ym7J%2FBQHG5YTp%2F4XquK%2BMJwCtYcG9MRWf0szUtQxN%2BN8y0ApKsYEOtxz8gSP2qrPky9iyxXJVhp71W8mfnKwn353Wuakcpzuo2qToy7sclnCaSRPckOM0LR8RqRrFJXcMCczSes0s5YWeKZFux%2FmAMzhW08TJI7BECce9vwyR4deWjEwKCOQs48e47JTXJiwnQOtr5EGHgvMbnmBhVlwZArnpcevs0PnCRmGuLksLDiqtI7b8FaFViE7hkpynVygL5A2LOq%2Fqtap0bAyPuFBHXIkWuCueqB50vfWcmNjTfOQBo6441EVuJIVowdnpY9MIkzIMbi9IiVyB56CYMKGVhb0GOqUB6U9oghiQvU4pWSe%2BHoOCcZJlH4MIt4dxWHDbC5UBAs%2FE3HII70jWPodmLoHUhCbHkqoNkZyv8FDgq29iwaPpqor%2FO3w0XWWOiy7H5n8r0%2BnVMhBduIrbT4yUhnule3w5ysRnOVOSynHelYjV6FgVhIIXkWdtWYhY%2BMOlF7wVg%2BX83oB2%2FxiUKyJhfSRG91N0rFXgnHSiHziwR7p%2BMM1r8woyeW1I&X-Amz-Signature=fb860b82ac11b8fbcecb92a70e6dff46e344a2da82e3e73373110370855e457f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
