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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEG7D54%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDWNxSH1wwi4Mf63EEU%2BeU%2FtKK%2BptNrs0l66jWl0pi3twIhAK7OGVh26XYeZi6UH7yIcKRdgIFO9eBC0Fif3GjZsrEhKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCYFMJHkbfBecTSgYq3AP%2BaGxU9u0GwzD46it3%2BPcSGROKiT6XoCrvu8FzIgqF0LP0p0Xh3c7YMFrrDz8%2FpDylIHMuCdlyQudtezEE5jl9airrWlFcZCh3e8s9BSTTjmnS3dSdombA1YbEsJCPA6Szf5bTfQ33NHC8FDd01smZyOHh5Z0eggTvnCgBa7UT2OcXP91AKvMaRUET%2F8tl1eD%2BVX7kvjn4q4XaVf0yg0vlBPRbmw5ZNzFCAuq1lrmeU%2F0AJbvu%2Be2s7DfRLxnhhGXqq6ToQQG42%2Be5DmcAi2fsh9VhHTZOE3tI4xuA4vBvmmvbhelEZzdX1FrzhpNH7aJcjSGlThr2tV9wJ%2BwRLPUD6gCXGJCJSqxCzUWXpJRokK0f6ZT%2FKJ6wSrelMHusgN6oxmnzrhBftlGUeq%2FRTtrnegQ7KiT%2FckeFh7Fee9kdAc%2FP9GhdzVF9vPpj2rskl66ILxCvcJp6OQlR08zSKKUcsNMAFuyd7hKNIbu6rImdE2soID0aWpkfXzqxgyvLqU2xSvRt9LX1uUP1DuFMngiCTUQq5EJs2%2F46hGG%2FQYzteySmDaaN0XkqNJT60nuL1oJCtpjVZ7M7U3eroxPIzu7TjFKvjl%2BIl2qy0uWXexZM2BVLtSV7fLrl2irWZzCT2I%2B%2BBjqkAVCzQl1VooT9NkoeIOqJZ5%2FxJhU6T4VGcV26J6k0Ln3OKSOePETszJKO%2BvEdjENDaX7Rm436zR%2FoOPCrJpO1nFvkGG9toN6sU1vqlsRzsMi5PckfrbG5XxsdIVjW%2FNbG1ESp9AL7bsBP7DmxTrJkPsRYwwtR2R9tL0ql7EB5ogFW9013VMOH9zP1GpIgw1Okv965opUlG5lJ0S8%2BdbZl5zoAif2E&X-Amz-Signature=0f82ecc9400d85208be84d17037a4185ac8b67ffec3be973ed85ccfea05bfa29&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEG7D54%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDWNxSH1wwi4Mf63EEU%2BeU%2FtKK%2BptNrs0l66jWl0pi3twIhAK7OGVh26XYeZi6UH7yIcKRdgIFO9eBC0Fif3GjZsrEhKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCYFMJHkbfBecTSgYq3AP%2BaGxU9u0GwzD46it3%2BPcSGROKiT6XoCrvu8FzIgqF0LP0p0Xh3c7YMFrrDz8%2FpDylIHMuCdlyQudtezEE5jl9airrWlFcZCh3e8s9BSTTjmnS3dSdombA1YbEsJCPA6Szf5bTfQ33NHC8FDd01smZyOHh5Z0eggTvnCgBa7UT2OcXP91AKvMaRUET%2F8tl1eD%2BVX7kvjn4q4XaVf0yg0vlBPRbmw5ZNzFCAuq1lrmeU%2F0AJbvu%2Be2s7DfRLxnhhGXqq6ToQQG42%2Be5DmcAi2fsh9VhHTZOE3tI4xuA4vBvmmvbhelEZzdX1FrzhpNH7aJcjSGlThr2tV9wJ%2BwRLPUD6gCXGJCJSqxCzUWXpJRokK0f6ZT%2FKJ6wSrelMHusgN6oxmnzrhBftlGUeq%2FRTtrnegQ7KiT%2FckeFh7Fee9kdAc%2FP9GhdzVF9vPpj2rskl66ILxCvcJp6OQlR08zSKKUcsNMAFuyd7hKNIbu6rImdE2soID0aWpkfXzqxgyvLqU2xSvRt9LX1uUP1DuFMngiCTUQq5EJs2%2F46hGG%2FQYzteySmDaaN0XkqNJT60nuL1oJCtpjVZ7M7U3eroxPIzu7TjFKvjl%2BIl2qy0uWXexZM2BVLtSV7fLrl2irWZzCT2I%2B%2BBjqkAVCzQl1VooT9NkoeIOqJZ5%2FxJhU6T4VGcV26J6k0Ln3OKSOePETszJKO%2BvEdjENDaX7Rm436zR%2FoOPCrJpO1nFvkGG9toN6sU1vqlsRzsMi5PckfrbG5XxsdIVjW%2FNbG1ESp9AL7bsBP7DmxTrJkPsRYwwtR2R9tL0ql7EB5ogFW9013VMOH9zP1GpIgw1Okv965opUlG5lJ0S8%2BdbZl5zoAif2E&X-Amz-Signature=6f73c7b39daba715853483fc490ff07d28c27a1b1023247f33d60a7b44d18956&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
