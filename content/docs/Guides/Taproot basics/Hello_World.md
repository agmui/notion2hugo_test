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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ7P2FH%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICL6chdXCi7p8tNC%2F%2FvTIb5qpPA8VrgmxzD3YVMDCNoXAiA63q8Y9tAes224uaxBty9tw6RBzttn2bArwf8%2BxzaUCSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9F6mxsi%2FR2G4dZWkKtwD8i7HKbPnTtVt%2FD1SSr%2BIgSF9MsrhYXezU17Y2HbZfEapBmVFGUYVgHY1%2FZl%2FTBO1VW%2BPeuLXdM2V2H41JT0Pebkal94lzHLra0qqtnqZWGPpo8cD%2FUHyqmrmre4rSI%2BN8k8Xr6evaBvjjDyBxoyIP40j2VCXDLnLZKud2WxyierwYxqD5kH%2FpVkCHQEdtL2RY6JItmSMMmB9ELUVJYXJsIsaOTbiDH%2FjU52iT4ZOj31uOa8YW%2Fr59KM2wfm1zzB8ovIIR4LWbDRaeFnl3P978JElKvtIZ7tfM%2Fs4zFB79Q9kuXo0BRIIgToZqYlXPUpYmlRYZho19ocMVJrYFFg8MU2JC3u0V6PAMkXmGQR4CgbtHeCu9OvMUalaH6P5gGWv4OMqk4%2Bv5P6USSWHOwypRpx7pS3Yb4ZTUnV4LMfHqRf2D%2BNrqF%2FD%2BvQ%2B29SzjbsW1KDyPfxWgNmrK1JpmtehthRLvGPd74%2BgAQeyt%2F%2FIa0Me1wga7r5rLYQRqeJah9GPlxsqkFsv%2B19eZfUgRktzzMf%2BZMum3axBWZmP22eNFHip5gglMK7cLzfTkK%2FPAN5dY6FgTvBBROX72Zu7Q4fwc6owdfwacbnkuQztxR4OPl2dME%2BIF%2BMRmer2Lrcwid%2FkvAY6pgGvvVlsyDc0bLm3lQDH9eBHN1MbK5nUODn3SQoBEqOJ6e0sCVEpwtMelZepZTrpLownFjVlcG3mAG064FANRfN51J7bxqzfDpOt%2FtPteSxuTN5gEvSqdir0gU8sUo7OSvAf5OLsM7VAxHU%2BoAG703JxP2oNKshw0C%2FjLy2eCs3FTbIzyb785M9iyp8VJmbsMau5SJmAl5J6T9WeKVC2s4N9rnLlvFWm&X-Amz-Signature=674252ede212e7d09bc7e8492144bbd344482540618d8a23b467a1766cf1f61c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQ7P2FH%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICL6chdXCi7p8tNC%2F%2FvTIb5qpPA8VrgmxzD3YVMDCNoXAiA63q8Y9tAes224uaxBty9tw6RBzttn2bArwf8%2BxzaUCSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9F6mxsi%2FR2G4dZWkKtwD8i7HKbPnTtVt%2FD1SSr%2BIgSF9MsrhYXezU17Y2HbZfEapBmVFGUYVgHY1%2FZl%2FTBO1VW%2BPeuLXdM2V2H41JT0Pebkal94lzHLra0qqtnqZWGPpo8cD%2FUHyqmrmre4rSI%2BN8k8Xr6evaBvjjDyBxoyIP40j2VCXDLnLZKud2WxyierwYxqD5kH%2FpVkCHQEdtL2RY6JItmSMMmB9ELUVJYXJsIsaOTbiDH%2FjU52iT4ZOj31uOa8YW%2Fr59KM2wfm1zzB8ovIIR4LWbDRaeFnl3P978JElKvtIZ7tfM%2Fs4zFB79Q9kuXo0BRIIgToZqYlXPUpYmlRYZho19ocMVJrYFFg8MU2JC3u0V6PAMkXmGQR4CgbtHeCu9OvMUalaH6P5gGWv4OMqk4%2Bv5P6USSWHOwypRpx7pS3Yb4ZTUnV4LMfHqRf2D%2BNrqF%2FD%2BvQ%2B29SzjbsW1KDyPfxWgNmrK1JpmtehthRLvGPd74%2BgAQeyt%2F%2FIa0Me1wga7r5rLYQRqeJah9GPlxsqkFsv%2B19eZfUgRktzzMf%2BZMum3axBWZmP22eNFHip5gglMK7cLzfTkK%2FPAN5dY6FgTvBBROX72Zu7Q4fwc6owdfwacbnkuQztxR4OPl2dME%2BIF%2BMRmer2Lrcwid%2FkvAY6pgGvvVlsyDc0bLm3lQDH9eBHN1MbK5nUODn3SQoBEqOJ6e0sCVEpwtMelZepZTrpLownFjVlcG3mAG064FANRfN51J7bxqzfDpOt%2FtPteSxuTN5gEvSqdir0gU8sUo7OSvAf5OLsM7VAxHU%2BoAG703JxP2oNKshw0C%2FjLy2eCs3FTbIzyb785M9iyp8VJmbsMau5SJmAl5J6T9WeKVC2s4N9rnLlvFWm&X-Amz-Signature=aa6152ba85051c2a59a0d8789146a449995265db74a4748af0ddfccfa33ccce7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
