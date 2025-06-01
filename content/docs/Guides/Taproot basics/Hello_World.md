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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDFDP3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3t66GbBaa47GCv5pXHG62Vnm5kQ1s%2FkglE53yPONDNAiB%2FGna2yUkneE6OWHMEAO%2FjLb1kduQQONWkrmVGvFP1QyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSS0x5UTM0I1j6PMcKtwDfOG8pR6Cq14tyXbNkldvp8XXifOevWdUnaPyLDwH5iXf6WZjpXRIY5nyK5S5zgIADo5n5XteMMgzZZaqWzNUVjt0MeAlcSGmFVlTL70oP3flhEfHNqjTKEZgwSm0rRO98%2BaUOSKGUIjMjfNWlGIWYqu%2BgZNh0F9cuEl5ciR7ZMEgPiPXNBIvLoW62gWLD7EyP1Y7B3gkVe7wtn3khMmYGmKoM9W2yS70e421Ii3AKGgIoZvgocUSWsRLcLMoJlgcDac%2BTdj5628l7R5DuUlf3RW0M6Ok8tpyD1NTZOLljFkhm7BX%2BY6H7Srbo%2BKSUJm13FpH1oY12qUg%2Fd2T%2BOnUtnUbh4k3lhyeQR5RbXfInz%2BFiqnusdR1MS4yRUXqVQ8bs02l38Lg%2FWnVUN62m9BaUxrnVassKBycrg73OZh%2FUn68yDqwFlU1cp32o7wAXFbVTeV0C%2B6aQlwt7hxaPOVG%2BU1B2AVMC5zxhfbTuGPF8jgtkq1tovVP%2B%2BW9pZIPU6GEbXDxlEqdbJ5jaBAcoW7hMYQLXigqbdWNBnmlUUuyIDcX78Cl9WWcayGrXXatzFUeGhWCbiUQRc9Lb%2BWJyPn5ZRAO6TUa%2F2h8DAqM5KSeToyZ8MoIkUzIXIidFoIw6r%2FtwQY6pgHh5OYw2%2F36Fi0w9KLC9RKb4rzKHRiTdD9pa2KQPCtyguY1hseXRl7pfQJluF%2Bj9rHtuTYnNLpLGFKKlFSgK2RUHXDQhI%2F%2FL39Voz331zNKtd7BC3vrcxfyh848W53zEWUp6xGd0ewwumX%2B7B01R8jvLYR4gxbT1N1wCC372Jf5O%2FP5x6rUF5pp8arkV3ql%2BLDorsvXgZVAsZ%2FAK%2Fsh24SAf3CfPrQm&X-Amz-Signature=cd6cfca1b3cae3229650244bbe0aa23b281ddce6e34fe79a90233af419d298ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDFDP3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3t66GbBaa47GCv5pXHG62Vnm5kQ1s%2FkglE53yPONDNAiB%2FGna2yUkneE6OWHMEAO%2FjLb1kduQQONWkrmVGvFP1QyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSS0x5UTM0I1j6PMcKtwDfOG8pR6Cq14tyXbNkldvp8XXifOevWdUnaPyLDwH5iXf6WZjpXRIY5nyK5S5zgIADo5n5XteMMgzZZaqWzNUVjt0MeAlcSGmFVlTL70oP3flhEfHNqjTKEZgwSm0rRO98%2BaUOSKGUIjMjfNWlGIWYqu%2BgZNh0F9cuEl5ciR7ZMEgPiPXNBIvLoW62gWLD7EyP1Y7B3gkVe7wtn3khMmYGmKoM9W2yS70e421Ii3AKGgIoZvgocUSWsRLcLMoJlgcDac%2BTdj5628l7R5DuUlf3RW0M6Ok8tpyD1NTZOLljFkhm7BX%2BY6H7Srbo%2BKSUJm13FpH1oY12qUg%2Fd2T%2BOnUtnUbh4k3lhyeQR5RbXfInz%2BFiqnusdR1MS4yRUXqVQ8bs02l38Lg%2FWnVUN62m9BaUxrnVassKBycrg73OZh%2FUn68yDqwFlU1cp32o7wAXFbVTeV0C%2B6aQlwt7hxaPOVG%2BU1B2AVMC5zxhfbTuGPF8jgtkq1tovVP%2B%2BW9pZIPU6GEbXDxlEqdbJ5jaBAcoW7hMYQLXigqbdWNBnmlUUuyIDcX78Cl9WWcayGrXXatzFUeGhWCbiUQRc9Lb%2BWJyPn5ZRAO6TUa%2F2h8DAqM5KSeToyZ8MoIkUzIXIidFoIw6r%2FtwQY6pgHh5OYw2%2F36Fi0w9KLC9RKb4rzKHRiTdD9pa2KQPCtyguY1hseXRl7pfQJluF%2Bj9rHtuTYnNLpLGFKKlFSgK2RUHXDQhI%2F%2FL39Voz331zNKtd7BC3vrcxfyh848W53zEWUp6xGd0ewwumX%2B7B01R8jvLYR4gxbT1N1wCC372Jf5O%2FP5x6rUF5pp8arkV3ql%2BLDorsvXgZVAsZ%2FAK%2Fsh24SAf3CfPrQm&X-Amz-Signature=a8ace927958f75057bd7551a7fe3b7759cf94bd3fadaf01bcce848823042bd72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
