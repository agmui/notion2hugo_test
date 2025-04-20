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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF64MUAP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB2rowkaob1zQIqYoFP0fo%2FQTZCGXtfn0nr6%2B7fZZ4VEAiANDHBWAA7ltdFfEhFMbE2yq0zVWdCb890SCCwK9hm3%2FSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ6rOwZfPTFwXy9d4KtwDMJRaxGrNuN2Jp9QEUZE%2BnMGt2SSIwxBIW%2F5J8Too4x%2FW9omhuQ%2B%2BV5yVLgBh%2F2oHQmyP1C0cvUwvHuPapymmQ1%2FEwPrVRNWcXTmJxkvVf%2BGMSuYy7swA7rn7SbBTTO0nMjfjxX05dnU24Mkfzw3a4vQgYYQZYv5t7R3na5byQQIug7AYsHCDbf%2Fs%2FuC2OF5i7EH1duG2kXxfseRWtp03mZAZsaBUtOq567sKC7FcLOTBhQknn5%2BoO1EchDT4RfJqN56ctsqtXj6qNslQdFnGni1Rb46fe7wfsR3tm7zbKhea30k9Ve%2B%2FcrnEjEG2iz%2FiGNG9Vixhu9jdgBmH8ql3%2BcNwWkI4arPiwjdBYj19Rfh1SSrhNFq4L0V4EBz11%2BBqSkiF9UCorOHFHM7808Rw2mz%2BGyFRohkvm1mDVg%2FHlR6c4nGxa3mwk0ZnFhOSvgFUJqQZj4qBDuGQ9c4b%2FWg%2BELJ6j%2FsbLq771xdDVgSFwoAj87oNKWqy3QPsLvrlIz3GsnAGmvhHtY9%2B2lZrCRgS2fTIGXnbKN9rcWob%2BN7wzUMlHR%2F2xkGCU%2Fyc4wdYVBvw0bN%2BME0QguHly51hda4rUdedmPm82g3tioXW1eQ6T%2BAif7ATZEtsLrWa60ww1u6UwAY6pgFdWGxuoRQRJwWZ0DwIXoiwHWQgtRV4ZHiUtGbsB9o2AZOXEsJEbZdknQI6nTHEryHbSEcMwLv%2B3xVnNgJmw9v%2BNGjNaqVRV5HUGqAz5ZbMgI%2FaaGXDqFeOrQVnOlGMr7dcXHNljm9VUgDqYxGOiAqL8HdcLjGS%2Fkdlm1dkd5Dm9oYsqoe2Y1EdR%2FCxHyCeFW%2FypyMlhPnFKTKpu5PIlZl%2ByqxxQ2r%2B&X-Amz-Signature=dee1998a960f10b0e772fb55b760bbb015522d32bf65487635c42ca6fa1087fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF64MUAP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB2rowkaob1zQIqYoFP0fo%2FQTZCGXtfn0nr6%2B7fZZ4VEAiANDHBWAA7ltdFfEhFMbE2yq0zVWdCb890SCCwK9hm3%2FSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ6rOwZfPTFwXy9d4KtwDMJRaxGrNuN2Jp9QEUZE%2BnMGt2SSIwxBIW%2F5J8Too4x%2FW9omhuQ%2B%2BV5yVLgBh%2F2oHQmyP1C0cvUwvHuPapymmQ1%2FEwPrVRNWcXTmJxkvVf%2BGMSuYy7swA7rn7SbBTTO0nMjfjxX05dnU24Mkfzw3a4vQgYYQZYv5t7R3na5byQQIug7AYsHCDbf%2Fs%2FuC2OF5i7EH1duG2kXxfseRWtp03mZAZsaBUtOq567sKC7FcLOTBhQknn5%2BoO1EchDT4RfJqN56ctsqtXj6qNslQdFnGni1Rb46fe7wfsR3tm7zbKhea30k9Ve%2B%2FcrnEjEG2iz%2FiGNG9Vixhu9jdgBmH8ql3%2BcNwWkI4arPiwjdBYj19Rfh1SSrhNFq4L0V4EBz11%2BBqSkiF9UCorOHFHM7808Rw2mz%2BGyFRohkvm1mDVg%2FHlR6c4nGxa3mwk0ZnFhOSvgFUJqQZj4qBDuGQ9c4b%2FWg%2BELJ6j%2FsbLq771xdDVgSFwoAj87oNKWqy3QPsLvrlIz3GsnAGmvhHtY9%2B2lZrCRgS2fTIGXnbKN9rcWob%2BN7wzUMlHR%2F2xkGCU%2Fyc4wdYVBvw0bN%2BME0QguHly51hda4rUdedmPm82g3tioXW1eQ6T%2BAif7ATZEtsLrWa60ww1u6UwAY6pgFdWGxuoRQRJwWZ0DwIXoiwHWQgtRV4ZHiUtGbsB9o2AZOXEsJEbZdknQI6nTHEryHbSEcMwLv%2B3xVnNgJmw9v%2BNGjNaqVRV5HUGqAz5ZbMgI%2FaaGXDqFeOrQVnOlGMr7dcXHNljm9VUgDqYxGOiAqL8HdcLjGS%2Fkdlm1dkd5Dm9oYsqoe2Y1EdR%2FCxHyCeFW%2FypyMlhPnFKTKpu5PIlZl%2ByqxxQ2r%2B&X-Amz-Signature=fa382d2637d4e0a63ef7ce5e209828b054388edc2a07043e92d06a2b09631e10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
