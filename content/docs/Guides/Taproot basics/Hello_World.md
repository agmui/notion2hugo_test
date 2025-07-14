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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RIUE2I%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD1ZmuBuiizEVQI%2Fx5S%2FFlbiXHW2gme2kk5Uc9ZdZeZMwIhAMsIuJk85S3Ktm%2FeCBo65ScmC70Gkjpyi3JB6f58OV14Kv8DCCoQABoMNjM3NDIzMTgzODA1Igz7AKhawxgfmDq4OhQq3AOPPdlJu9uQdOVS4%2B3xUUAZXznw8rzjW2VRo9cnD8GtTh3BuT%2BAaVGACTyTdqTLOGf64aKSKsEng01qNFm9AUkzI9Xh2JIyXg6RgJ7BXYA%2FrSFt4G%2FsYUsUYc1dqtaHLmXe06TTds9%2F7UeSOr6XCvydRYk6YLCrwI6HTLUpBcrpWAP2pODXjoLNEZBF8n%2BDWMPDYu0CiNfNSmt%2BOJbA6btW%2Fbv%2Bi%2BGwgKZlXFQVxA2mO9t3ij09E5GjVz5%2F4Kvnufurm%2BeTnuJdxt1dg1xNHJWbnpvg%2BOickzh1hQiNY6OpZRY07OdkwtRAb6ZX23ufWy1enKMFKsqmhT8A1JW55td5Y0k2t4Huv0qp0vhuTbnyZFxrfLP83DsX7Hy4YZqYojNEpoRhbhCoVCeaiBRJlG6cvzCpnwNC5UYGiiKpdVVUWtNtZX5Ed1tKKbqN%2FA2AkT6qNG0%2FtmjkAoJGenrQTXz0T5iQXliPG6DS6%2BJ%2BD2WzgNZ5r32GTfgqr%2FCl9L1TY2sg4y2lpFppohZh%2F6Pwctk9QH3RuigmNjkcEwMlZGuTvZAF9xLX8B5QvG03uXe3ZjQJ9rsG7nc4dR0oI03SS3TBU0%2BBM1kNkHyTzfme%2BC9mYXuCph1VHLv%2BZIulQTCjiNPDBjqkAUAWG%2B36fWJz%2F3ZJlfdWVXl%2BuZKngmkuYgrUcyDQI3Ea9OLOvnv5NKrpoGUByfOhxb%2BuYJEjzU0bwz4BeXssteCx2EVd4b2%2FYu8D4KxCIlZt1iBDLeqQ3s6ktjgBkPFJ4wJ9tkTQC52J28gmlgVKLYNKpiE%2FhGv6rUs54kDh9KavW1exwvX8lCMPDBeFl4jIcG%2FWzuyvYQX49clKPWYUBpdkclWL&X-Amz-Signature=c2469ec9b25ccd571e8d0f6e49172f1dd077f0636d047e37b53a50696b0acb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RIUE2I%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD1ZmuBuiizEVQI%2Fx5S%2FFlbiXHW2gme2kk5Uc9ZdZeZMwIhAMsIuJk85S3Ktm%2FeCBo65ScmC70Gkjpyi3JB6f58OV14Kv8DCCoQABoMNjM3NDIzMTgzODA1Igz7AKhawxgfmDq4OhQq3AOPPdlJu9uQdOVS4%2B3xUUAZXznw8rzjW2VRo9cnD8GtTh3BuT%2BAaVGACTyTdqTLOGf64aKSKsEng01qNFm9AUkzI9Xh2JIyXg6RgJ7BXYA%2FrSFt4G%2FsYUsUYc1dqtaHLmXe06TTds9%2F7UeSOr6XCvydRYk6YLCrwI6HTLUpBcrpWAP2pODXjoLNEZBF8n%2BDWMPDYu0CiNfNSmt%2BOJbA6btW%2Fbv%2Bi%2BGwgKZlXFQVxA2mO9t3ij09E5GjVz5%2F4Kvnufurm%2BeTnuJdxt1dg1xNHJWbnpvg%2BOickzh1hQiNY6OpZRY07OdkwtRAb6ZX23ufWy1enKMFKsqmhT8A1JW55td5Y0k2t4Huv0qp0vhuTbnyZFxrfLP83DsX7Hy4YZqYojNEpoRhbhCoVCeaiBRJlG6cvzCpnwNC5UYGiiKpdVVUWtNtZX5Ed1tKKbqN%2FA2AkT6qNG0%2FtmjkAoJGenrQTXz0T5iQXliPG6DS6%2BJ%2BD2WzgNZ5r32GTfgqr%2FCl9L1TY2sg4y2lpFppohZh%2F6Pwctk9QH3RuigmNjkcEwMlZGuTvZAF9xLX8B5QvG03uXe3ZjQJ9rsG7nc4dR0oI03SS3TBU0%2BBM1kNkHyTzfme%2BC9mYXuCph1VHLv%2BZIulQTCjiNPDBjqkAUAWG%2B36fWJz%2F3ZJlfdWVXl%2BuZKngmkuYgrUcyDQI3Ea9OLOvnv5NKrpoGUByfOhxb%2BuYJEjzU0bwz4BeXssteCx2EVd4b2%2FYu8D4KxCIlZt1iBDLeqQ3s6ktjgBkPFJ4wJ9tkTQC52J28gmlgVKLYNKpiE%2FhGv6rUs54kDh9KavW1exwvX8lCMPDBeFl4jIcG%2FWzuyvYQX49clKPWYUBpdkclWL&X-Amz-Signature=5759183a18897b7b698e244f271152ea8b4088d788c93eaa881306b19c378618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
