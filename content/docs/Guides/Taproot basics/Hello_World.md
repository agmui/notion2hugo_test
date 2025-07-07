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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRHQAE5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaKVlqNu%2BM0wgSf0zsSPOYiFwymTrYu91OV1hfUOKigAIhAOcuhO2PznXVRlwEDol0UccE%2BI9mU8sW7ncQqfavuiSxKv8DCGkQABoMNjM3NDIzMTgzODA1IgxLms9w3J5n1z%2FMU0Yq3AON71god75M%2FQZT6vkLZ1jjJPtGgBNAIf8vfIBX3XxGIvFz1OV1vZI4ykivqmpFtOIQRHFK515b%2F0rJkJWcHlJPUtxE6D%2FCLCz0UlGW8zO04nNVL1yhE%2F9jQl9kUfMxdFK5pyRHa2pT6zjFHbkK0A5J%2FxNTbO8RYYhDKJoApKoPr1CpyLO8uRn35fdjq0RKkTLu08BsPqcciH91TbuHEwtO3Ip1Wm4EsBRLhGv9H0tXQnhd3Ax7Yi1zXHA%2FLiOEhtEWUD9qOcZesi2WY%2Fkzf6%2Fi%2BD46lEZDLA%2BSEiiQq7K3yix1e4IVJ%2B1rQNBejvhDOg8ZpsJnS6delc3eeYIKoG8TnnyYwj6BN6rcD7WkvJaiZVRUwu1fgxfZ9h2XQfvLOlcpWqUFDspYNB99Gr7bCJThbHDgeDywyproAuC%2FyEYyFvf%2BsdRwYBDWInFdQ%2F3RT4Pej7i0TsdAXInkU4l9BJTiL3aziEk%2FJAhC4cRFJohyacrRoYr2oIJ01eilvGThGDbXtpgF4jgSCOlsWdFFMw%2FHilDgt0cyu%2B4a5L2fx4dyP3j5frpVhG9PzPFl9tiYEOYYVEj5UfUNDw74WrDOnfmhPS8awEuES5ETWeq%2Bn%2BR7Zd3LSE1iprK6dAMmZTDMlKzDBjqkAaJ5O6bmvQFWpJmhvQ2zHsOwqMpjYL%2FieI8N%2FplmZfJieDAY9aaXygCtIORooYLcO0K1%2BPLOwETb3D1rFOirRIULFj6l9c43Rh0mvmLBWjreXTnDblWssg3hBmsADiI0pQjRGWDxNbI304H3nJNmxboFeeoTdDRHud4zYqRUiYWYc8%2FLZpMXae1RCCKJ8oCpgBj8FCrHvZTC79DzF5%2BjTcSKKAZ6&X-Amz-Signature=1ec9cb92f95d433fe3f4d25afab290a0e4105fd1b20a8ca77378d5457583e79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRHQAE5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCaKVlqNu%2BM0wgSf0zsSPOYiFwymTrYu91OV1hfUOKigAIhAOcuhO2PznXVRlwEDol0UccE%2BI9mU8sW7ncQqfavuiSxKv8DCGkQABoMNjM3NDIzMTgzODA1IgxLms9w3J5n1z%2FMU0Yq3AON71god75M%2FQZT6vkLZ1jjJPtGgBNAIf8vfIBX3XxGIvFz1OV1vZI4ykivqmpFtOIQRHFK515b%2F0rJkJWcHlJPUtxE6D%2FCLCz0UlGW8zO04nNVL1yhE%2F9jQl9kUfMxdFK5pyRHa2pT6zjFHbkK0A5J%2FxNTbO8RYYhDKJoApKoPr1CpyLO8uRn35fdjq0RKkTLu08BsPqcciH91TbuHEwtO3Ip1Wm4EsBRLhGv9H0tXQnhd3Ax7Yi1zXHA%2FLiOEhtEWUD9qOcZesi2WY%2Fkzf6%2Fi%2BD46lEZDLA%2BSEiiQq7K3yix1e4IVJ%2B1rQNBejvhDOg8ZpsJnS6delc3eeYIKoG8TnnyYwj6BN6rcD7WkvJaiZVRUwu1fgxfZ9h2XQfvLOlcpWqUFDspYNB99Gr7bCJThbHDgeDywyproAuC%2FyEYyFvf%2BsdRwYBDWInFdQ%2F3RT4Pej7i0TsdAXInkU4l9BJTiL3aziEk%2FJAhC4cRFJohyacrRoYr2oIJ01eilvGThGDbXtpgF4jgSCOlsWdFFMw%2FHilDgt0cyu%2B4a5L2fx4dyP3j5frpVhG9PzPFl9tiYEOYYVEj5UfUNDw74WrDOnfmhPS8awEuES5ETWeq%2Bn%2BR7Zd3LSE1iprK6dAMmZTDMlKzDBjqkAaJ5O6bmvQFWpJmhvQ2zHsOwqMpjYL%2FieI8N%2FplmZfJieDAY9aaXygCtIORooYLcO0K1%2BPLOwETb3D1rFOirRIULFj6l9c43Rh0mvmLBWjreXTnDblWssg3hBmsADiI0pQjRGWDxNbI304H3nJNmxboFeeoTdDRHud4zYqRUiYWYc8%2FLZpMXae1RCCKJ8oCpgBj8FCrHvZTC79DzF5%2BjTcSKKAZ6&X-Amz-Signature=e8c63b0369c2b2de3b4368e01c1b941a01f309801feed0d22137fce00c00bf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
