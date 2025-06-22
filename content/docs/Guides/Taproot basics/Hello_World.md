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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGEK2NI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9FYgZAHI%2BvO4BGsCfNSm%2FAZcs1WPSZcsA4Z%2FhFQD1GwIhALLsDz%2BmMWgHYO2NKp2nYie0CsGI1ZDZS21CqOtzMRm%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn75TSYRa5RoOmqloq3APicHCndzkDFw35C2Nm4BLAAVGeUFqWQ8yDraLDXxkO9wfw9nriG2Ryyz5EFu5UzYqLMtow4lqmA4U0VmbKbO9ql64UhuCealliuILCDRD36gZQ5BvCT9WiaXQbiasjHm60%2B1WBUC8DB5h2dNuKurrWvX0J0Fh3rkyzzZkV8UDCJk%2BxRTCfj3D7Sz5gIaT1cCD8bmdvqkGeu1bQhtvDvvwFdsjCpVnEZ%2FtyKWFK4liO9q89piDB%2FF48F9PV4vyed7vSVZ6B9BY1Y6hWKyour3LKJhEH7Mm9TMmSZIWY6ZpWOQjWBMU4rav%2F%2Br%2FpT23hbXWdWkxIlmu5wbUA%2FTmJyhlxMYT0w3prIniPlgaSeIO3CcVrgMK3d8n9NXzC1AhhDvJZxMfv2ngp4lJQgwpKmwdL6b5mYE75AAdvEr8JfuvgyXmeisOs38AnK8pdhtndriKFyqai4qSrmlGbOClQjCyGYLNlzz2v53nCpfuUQfQidcortXLSTYAzKbBbnH2ER3TXRqdWr5yWsKBcXR%2Bd%2BK1i14tPeOSd60P20n8Duyjk42adU97KuUwAbD655X4wgktygiWenjnTAJFNP0oavAqcVjLmp%2BWAKxUz5w7se%2FJBpFwTDo6xAalYrnn95jC1q97CBjqkAfGLVZFxlrnbE4UKIU0Jv64%2BoJRx%2FaPmM4AzlqZ466kXHUbOQQ0U728FrD5nzgSVef%2F3H8WIZL2kaQJkAgQRzaKDSQ9CTWSNLBiEfDjoNll5yQgSp0RpvPQjZpBp9EPl%2BFQKmHDchfCuSSK%2F8QinDBF8x3xyNhCJMKDcKrKO95LsmyGwFLH6ayardCS7McYpzzWGjAoD%2FLk%2FJQawLRwCqS82RtD%2B&X-Amz-Signature=4a149e21ec20a3a47f387c6531eca3d5f88bc4b7dd063c5851479eee25384526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGEK2NI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9FYgZAHI%2BvO4BGsCfNSm%2FAZcs1WPSZcsA4Z%2FhFQD1GwIhALLsDz%2BmMWgHYO2NKp2nYie0CsGI1ZDZS21CqOtzMRm%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn75TSYRa5RoOmqloq3APicHCndzkDFw35C2Nm4BLAAVGeUFqWQ8yDraLDXxkO9wfw9nriG2Ryyz5EFu5UzYqLMtow4lqmA4U0VmbKbO9ql64UhuCealliuILCDRD36gZQ5BvCT9WiaXQbiasjHm60%2B1WBUC8DB5h2dNuKurrWvX0J0Fh3rkyzzZkV8UDCJk%2BxRTCfj3D7Sz5gIaT1cCD8bmdvqkGeu1bQhtvDvvwFdsjCpVnEZ%2FtyKWFK4liO9q89piDB%2FF48F9PV4vyed7vSVZ6B9BY1Y6hWKyour3LKJhEH7Mm9TMmSZIWY6ZpWOQjWBMU4rav%2F%2Br%2FpT23hbXWdWkxIlmu5wbUA%2FTmJyhlxMYT0w3prIniPlgaSeIO3CcVrgMK3d8n9NXzC1AhhDvJZxMfv2ngp4lJQgwpKmwdL6b5mYE75AAdvEr8JfuvgyXmeisOs38AnK8pdhtndriKFyqai4qSrmlGbOClQjCyGYLNlzz2v53nCpfuUQfQidcortXLSTYAzKbBbnH2ER3TXRqdWr5yWsKBcXR%2Bd%2BK1i14tPeOSd60P20n8Duyjk42adU97KuUwAbD655X4wgktygiWenjnTAJFNP0oavAqcVjLmp%2BWAKxUz5w7se%2FJBpFwTDo6xAalYrnn95jC1q97CBjqkAfGLVZFxlrnbE4UKIU0Jv64%2BoJRx%2FaPmM4AzlqZ466kXHUbOQQ0U728FrD5nzgSVef%2F3H8WIZL2kaQJkAgQRzaKDSQ9CTWSNLBiEfDjoNll5yQgSp0RpvPQjZpBp9EPl%2BFQKmHDchfCuSSK%2F8QinDBF8x3xyNhCJMKDcKrKO95LsmyGwFLH6ayardCS7McYpzzWGjAoD%2FLk%2FJQawLRwCqS82RtD%2B&X-Amz-Signature=ad77b6a599262705a6b83f05a51c755d23c4ac4208da0dd8e6e03b3c03fd98e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
