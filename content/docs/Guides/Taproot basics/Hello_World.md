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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCGOSBK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDX7u3bmem%2FbMpruBedE%2BxAXYMlg%2FvCnQT5AQuS3yAfkwIhAO5kn8KMNG%2BS11kPWUIvNnbw5jBnJe6vfldPnpGk6hD9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FbfvB4zLmAK6gRsq3ANTZc6ihzgGq%2BcUGW%2BKDRqfwqMNJsAeD6zo7hlpY09GglNEYCeqpZL42%2Ba3aiN8IM22vqtZyzvj1sWsZlTufTl3npsRQsGTUd5FdtSZGXEh2CNfpHKZwKMIXAPN1gX6mMWPwNAKsaY0Px1C%2BHpH4YSXTQOC%2FhKZz2A9H1%2BbLnN86YPuO1rxBCm8OWUI%2BFsWt0ksvIyqlm7xPQUZ8SIj%2FV5VVUOISAwhNJpDQIpNQN%2FjBDJUxKprZsP6%2Bl4drZtol%2FlY1ZWi%2F1GMbxi1ms865%2FJyDTMQS4B9yPcws7Uqy9YvxCxWSRht7l4B0kasCT9SDhsRHwXCUuCMTpBY%2BtpfXG8GCMG9eJU8i3ocnF%2Baoh7ruxsxdlsZgHCd2RmnulF%2FrVmNcn0%2FJNQ5Es4b6hIow9b88Z5qTpS7Wua%2BjGVH3XFoNF0%2Bp%2FOpQ0PzUKpl2NMBoGNVmTp941R0kxbKwRHZw4wzagbC5nWT0TIvNB0hy8OtDOhzN06B4VtewkwgXqucLPuwiQg6fg47YN2nu69CJ5fztjeOrHucoZWHw1FFKm6F%2F%2BC4WB8Vbq6Kpb4w2DBu2yckM8bC3R3Z%2BdmsZdSez%2BerxNcewgpvvH3xq1dJylo6b%2BcLJ8u724rVH%2BaEZzDw8Ju9BjqkAdwQvOSDspYzlPXxKexL%2FRqqOF9euLow10MhkLSh9HQ9E%2B0PHEBIumrbNXP%2FfQ7MzH8SlPeAMw9UajDxYFzDOJXI7KAnnG%2FtFRoRC%2Fh9aJJOVG3ND0GwStkgIvAmJjBbdhX%2BcmWCo5MZ9aoGdnKyXD8pQoU2poQRVbRTX9rFLXVZAfDJv4pUocEEd5xkZtnz9XpSx6YLPfqjCmjKC10lHnTlsHBi&X-Amz-Signature=e9597e728346ac2e82694ee8cbe7257c14313d167712d41519a02f9a063c468b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCGOSBK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDX7u3bmem%2FbMpruBedE%2BxAXYMlg%2FvCnQT5AQuS3yAfkwIhAO5kn8KMNG%2BS11kPWUIvNnbw5jBnJe6vfldPnpGk6hD9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FbfvB4zLmAK6gRsq3ANTZc6ihzgGq%2BcUGW%2BKDRqfwqMNJsAeD6zo7hlpY09GglNEYCeqpZL42%2Ba3aiN8IM22vqtZyzvj1sWsZlTufTl3npsRQsGTUd5FdtSZGXEh2CNfpHKZwKMIXAPN1gX6mMWPwNAKsaY0Px1C%2BHpH4YSXTQOC%2FhKZz2A9H1%2BbLnN86YPuO1rxBCm8OWUI%2BFsWt0ksvIyqlm7xPQUZ8SIj%2FV5VVUOISAwhNJpDQIpNQN%2FjBDJUxKprZsP6%2Bl4drZtol%2FlY1ZWi%2F1GMbxi1ms865%2FJyDTMQS4B9yPcws7Uqy9YvxCxWSRht7l4B0kasCT9SDhsRHwXCUuCMTpBY%2BtpfXG8GCMG9eJU8i3ocnF%2Baoh7ruxsxdlsZgHCd2RmnulF%2FrVmNcn0%2FJNQ5Es4b6hIow9b88Z5qTpS7Wua%2BjGVH3XFoNF0%2Bp%2FOpQ0PzUKpl2NMBoGNVmTp941R0kxbKwRHZw4wzagbC5nWT0TIvNB0hy8OtDOhzN06B4VtewkwgXqucLPuwiQg6fg47YN2nu69CJ5fztjeOrHucoZWHw1FFKm6F%2F%2BC4WB8Vbq6Kpb4w2DBu2yckM8bC3R3Z%2BdmsZdSez%2BerxNcewgpvvH3xq1dJylo6b%2BcLJ8u724rVH%2BaEZzDw8Ju9BjqkAdwQvOSDspYzlPXxKexL%2FRqqOF9euLow10MhkLSh9HQ9E%2B0PHEBIumrbNXP%2FfQ7MzH8SlPeAMw9UajDxYFzDOJXI7KAnnG%2FtFRoRC%2Fh9aJJOVG3ND0GwStkgIvAmJjBbdhX%2BcmWCo5MZ9aoGdnKyXD8pQoU2poQRVbRTX9rFLXVZAfDJv4pUocEEd5xkZtnz9XpSx6YLPfqjCmjKC10lHnTlsHBi&X-Amz-Signature=2fc6346bb7154299c3b59d8a635d7388e5bbcc1ff76a8ad4d881c3c55f202da9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
