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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2ZRNZ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBVcO0gDQhtrc5Q87F9sI8eVulkdl9VHVpg6dogS0ufzAiEAwV4EfEI%2FvqFsvC%2FJIFcTaZr67ok342Hg18WixpaEE5Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNkytjVzch3nZPMmAyrcA4K8xuQMOpJZ6OONRkwGsF%2F8mCMTF65U50EvK6p2Xu04heeNxqzloA%2F78ZLqKDY0zMFmQ8KxiA3cD%2B9WlqkbQwrTZ5D13znd7A08XkhkPAJU0xCclHdLCMfT6ZXmpktjzTCgOAZfC89Q44t9Eru2jIbjt%2BBAaqKw5JsJdWy15mvIAlHcEn0s%2FLQHn2Krj32R2oaDQWWgSsB%2BAAawBkOQFa8Xgo6R9tdkGlAKd3Rl76JHjJ4OurMCTU5x5wkRHT3Ef%2FCpxRnsp28Tn4PR314CNpgiJ%2FMwnxZN9WpBdnxBN9OYqcCvV3TzX3s2Sh6TBFUXdaNqMsvn3%2FeGR925ODRGfvSrXfKu%2Bwq%2BjBdZ33td725pHszAdUwwHgCGfcVGvtN%2F%2FOszmNJd1%2BdnqmEfRK4yaJ%2BcdXiIGAEFNWVWtCoUImhNzUvjf4z8uGvw71Z4j2OZsE7CVkK%2FFU9U2cXAxiuivkjGBk%2B2hWHL017SV6FXxUj6%2BrpIJ%2Bhr5maEoONjoMiQgY5Scjvd9lIrnJuSRkjtKcmIh05%2BmY2xVKK8rsB73k%2Bd0LSoS3ksH9C%2BknZf0OX8ZYnPGf2IPZezkfFNiSxNhct71T4Cxb9WyC7GJ%2BeABhlGB9tt99yLLmbep%2ByIMOTQj8QGOqUBcXfnKxhvWm6qrou61LBcTRXAD58rbOdZt3YsGJzFYJpXVgc%2FaNIUCHylv4YzrlLMz4PFL3lYuxFh7uJfhePtDIRTWOL5003Ulx2HavIZCChOTGqqG5T0Fao1Jea5y9ElXRRNVZUXmrnmKk5J4XtNiYWrkYHvR4koqJNlpRVKuGgPivTRVy2p3VRNrEw1aXHNf%2BLDZpqULvnIQxY9PQqZjxRS%2BNSa&X-Amz-Signature=1367db41555bd27c514167378d0a130532961cff6088dd03dce8558817b35c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2ZRNZ3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBVcO0gDQhtrc5Q87F9sI8eVulkdl9VHVpg6dogS0ufzAiEAwV4EfEI%2FvqFsvC%2FJIFcTaZr67ok342Hg18WixpaEE5Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNkytjVzch3nZPMmAyrcA4K8xuQMOpJZ6OONRkwGsF%2F8mCMTF65U50EvK6p2Xu04heeNxqzloA%2F78ZLqKDY0zMFmQ8KxiA3cD%2B9WlqkbQwrTZ5D13znd7A08XkhkPAJU0xCclHdLCMfT6ZXmpktjzTCgOAZfC89Q44t9Eru2jIbjt%2BBAaqKw5JsJdWy15mvIAlHcEn0s%2FLQHn2Krj32R2oaDQWWgSsB%2BAAawBkOQFa8Xgo6R9tdkGlAKd3Rl76JHjJ4OurMCTU5x5wkRHT3Ef%2FCpxRnsp28Tn4PR314CNpgiJ%2FMwnxZN9WpBdnxBN9OYqcCvV3TzX3s2Sh6TBFUXdaNqMsvn3%2FeGR925ODRGfvSrXfKu%2Bwq%2BjBdZ33td725pHszAdUwwHgCGfcVGvtN%2F%2FOszmNJd1%2BdnqmEfRK4yaJ%2BcdXiIGAEFNWVWtCoUImhNzUvjf4z8uGvw71Z4j2OZsE7CVkK%2FFU9U2cXAxiuivkjGBk%2B2hWHL017SV6FXxUj6%2BrpIJ%2Bhr5maEoONjoMiQgY5Scjvd9lIrnJuSRkjtKcmIh05%2BmY2xVKK8rsB73k%2Bd0LSoS3ksH9C%2BknZf0OX8ZYnPGf2IPZezkfFNiSxNhct71T4Cxb9WyC7GJ%2BeABhlGB9tt99yLLmbep%2ByIMOTQj8QGOqUBcXfnKxhvWm6qrou61LBcTRXAD58rbOdZt3YsGJzFYJpXVgc%2FaNIUCHylv4YzrlLMz4PFL3lYuxFh7uJfhePtDIRTWOL5003Ulx2HavIZCChOTGqqG5T0Fao1Jea5y9ElXRRNVZUXmrnmKk5J4XtNiYWrkYHvR4koqJNlpRVKuGgPivTRVy2p3VRNrEw1aXHNf%2BLDZpqULvnIQxY9PQqZjxRS%2BNSa&X-Amz-Signature=32b5f175f2a6671f40291284bbc3e2cd9d792608f42a7ea544703a4ef1afe751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
