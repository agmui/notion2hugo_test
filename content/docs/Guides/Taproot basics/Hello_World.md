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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAF6CYY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIF2KbzmZx6k%2FebGUy3f%2BrFkgXVOCdTVws2GhNNJ4LGJgAiAaGdnDEcWYdMWRP7CAiMaZmqOcKGqtFjfVuG3RnoBfvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbihPIqtK3yF3AUpGKtwD6jq8mMomiP%2BrJ74Mafx7NkA9Nct9%2FGIhpABpqQ096VIKTuHjjG%2F5gdUnRa%2BlmNxj36WcgAzn6JnwYqNlDmkfJTl2mT8eAub75uimqN9FeEYW2PG7%2BGXVYrUdgYiX%2B916zSVgL1OW%2FDcD5plr1UKNIdeGNWyvNfNGzPG%2BtzgqW7An4Kc1SkWyRpzjOHJncLlznG4BVEb8o4iA4XBTCIXnCeizyBLGgcuVJm2xtQRKnvLwTsRqKB8fp0VTMGMgI9xmL224y%2BVpSd9wpSx6ulpOZ%2BsnMR%2BNXtPuN336O04YpZNIUklVeAhqVZCiereGepM%2FU4ToS4mtFOspiYALbpsQkUf7j5TNaXk1yV%2B0%2Fo8vNgUFkUEb1R3WMLK8MtH%2BubNLK9i9q0nh5KAwBAZDkizv2zUWTa53AauSjB9Go0YB%2BNUFA5iIzJ28vzc8Dkkjr%2FKFm6c8fDQ3p8glypQ%2B7zfpEHyM30tkLqRdxv4nzgozp73Yg5jyKfcqZ5Ps2RjYvCvl39dnK9%2Bd3TXGEJt%2Fq5LOd9ItxOsAuud09INIOgxcD3DenufGaSGrG7h1dWf1DxgSzb9OCtH0egHfzfO%2BaG6F1wmfY43gcdB6FnybxmvXIs9Lg4eJEEhckDdLENAw6pejxAY6pgG5AVrd2pc3rPKZ%2BnIidzQe%2BUaxrVDhpkOBJkgw7EtSwvrRtbo9sItlwvtaoi7%2FL4XmwItiB7U9xYuBbzry%2F3%2B%2FarN8aQ9ViAfAdGE4Qvzfis3%2FmqunAp0WKcNdJRba4cvmWBklk3ghqGsegX7LLLGa61vqQiNUrwzOel5gy2L7VR%2F4hxcElrki%2B2we13lDnjRk1Gh%2B1XBuWn4mmGpycluJvKa6uubo&X-Amz-Signature=4b6f9baea5b9788453e4382c58258f8c5ee25d57078dd51eebdb4a77c0c00f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XAF6CYY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIF2KbzmZx6k%2FebGUy3f%2BrFkgXVOCdTVws2GhNNJ4LGJgAiAaGdnDEcWYdMWRP7CAiMaZmqOcKGqtFjfVuG3RnoBfvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbihPIqtK3yF3AUpGKtwD6jq8mMomiP%2BrJ74Mafx7NkA9Nct9%2FGIhpABpqQ096VIKTuHjjG%2F5gdUnRa%2BlmNxj36WcgAzn6JnwYqNlDmkfJTl2mT8eAub75uimqN9FeEYW2PG7%2BGXVYrUdgYiX%2B916zSVgL1OW%2FDcD5plr1UKNIdeGNWyvNfNGzPG%2BtzgqW7An4Kc1SkWyRpzjOHJncLlznG4BVEb8o4iA4XBTCIXnCeizyBLGgcuVJm2xtQRKnvLwTsRqKB8fp0VTMGMgI9xmL224y%2BVpSd9wpSx6ulpOZ%2BsnMR%2BNXtPuN336O04YpZNIUklVeAhqVZCiereGepM%2FU4ToS4mtFOspiYALbpsQkUf7j5TNaXk1yV%2B0%2Fo8vNgUFkUEb1R3WMLK8MtH%2BubNLK9i9q0nh5KAwBAZDkizv2zUWTa53AauSjB9Go0YB%2BNUFA5iIzJ28vzc8Dkkjr%2FKFm6c8fDQ3p8glypQ%2B7zfpEHyM30tkLqRdxv4nzgozp73Yg5jyKfcqZ5Ps2RjYvCvl39dnK9%2Bd3TXGEJt%2Fq5LOd9ItxOsAuud09INIOgxcD3DenufGaSGrG7h1dWf1DxgSzb9OCtH0egHfzfO%2BaG6F1wmfY43gcdB6FnybxmvXIs9Lg4eJEEhckDdLENAw6pejxAY6pgG5AVrd2pc3rPKZ%2BnIidzQe%2BUaxrVDhpkOBJkgw7EtSwvrRtbo9sItlwvtaoi7%2FL4XmwItiB7U9xYuBbzry%2F3%2B%2FarN8aQ9ViAfAdGE4Qvzfis3%2FmqunAp0WKcNdJRba4cvmWBklk3ghqGsegX7LLLGa61vqQiNUrwzOel5gy2L7VR%2F4hxcElrki%2B2we13lDnjRk1Gh%2B1XBuWn4mmGpycluJvKa6uubo&X-Amz-Signature=68f8140e12df1546a38928620422784165191659e05993194a62b89a148b8730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
