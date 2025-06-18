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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6XDCHH%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU%2F3fYQ9XaGtLdZ6qgPd%2BGIEW%2FcfpBykAAg1NpVevRiAiBbH7qdGI1T4MbwKA0ufbpZT%2FfGOf%2F2NSN3ugCHNh9ScSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjvHvNvjxKD669r1KtwDP4qDgqPYPrGggyxVVfIVZAHV11xan%2FxmhH%2FoWXivaKatRoWT9jyW1gMxg2RccFZtyYtFd8dbrQAp8ErFoonJV0ZmwIf2b4BHgdhVY%2Fpdm4wnZuzXF6UmPyRHhSzg38%2FEMAGVszBUraar92M8y8fffsJibVxyhS9hV9WBdLFcCVpepgHRmp1i5GGDmGqekoKZ%2F6Psg9rosTlpPNH8mFcbzyAVBFszqzCgNFXkPAZuAl15DA3ZplYDToz5ghUp4ezDalIX1sCzLU0Tpu8u1um2oqGL5K5tXUVmTKmQa665XLoDmKBBi6v64FBTIwdsBoadteViTkkENZGHHjh6dG6MjyrOs2qEAhV76k71xz3S3u9I8znboCwejLDR7CP8BNke34jv%2FXIDYR5rKpofiOENyyMNmG%2F%2Fa5E2SLTwNdK6aEKJV%2BgknP667SttO7V5TbU82WvRmqACtEFps2y%2FXX7tfdT5Aeqssv0Xm2CvNemW5RwJSqlsiFkgGXKFYSbWJmz4X%2FEu4KZvh7ymSELmZ0anu9umJNb2sdBf2zeP6i5ONN%2F9Zl3hAQr%2BUIhP2rj9vgvH7VDkrmhFhDiTrrHsoVqNuWkSgma08wWwaw7JdaXX9sNjXgU0KuiOGbPLIJ0wxqDIwgY6pgElKnGh4UuOUk%2FQYd0BkZ165T2hAhT%2FBC8cyEIa%2B4yWekrgLHLFsT%2B7lYjO7tT5X7bWRuG54f09IpJvII6AWDJn2CzHeH8bMQprr8OuZUCoIZyfSLYWd%2FMU0WMyKgTH26EE3T2Pv4Dz69rEFBwtZ8sEnmjTCPa9iXHLZMSMPLqq%2BceHuHT%2Fjc0mIXWeIFol1tNVoIWNY4davy%2Fz%2BoRFmOhrRgeJqVSd&X-Amz-Signature=83aa85a7bac2f13400c92d944239ee268264c64119e9c2908f47296287eb0fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6XDCHH%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU%2F3fYQ9XaGtLdZ6qgPd%2BGIEW%2FcfpBykAAg1NpVevRiAiBbH7qdGI1T4MbwKA0ufbpZT%2FfGOf%2F2NSN3ugCHNh9ScSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUjvHvNvjxKD669r1KtwDP4qDgqPYPrGggyxVVfIVZAHV11xan%2FxmhH%2FoWXivaKatRoWT9jyW1gMxg2RccFZtyYtFd8dbrQAp8ErFoonJV0ZmwIf2b4BHgdhVY%2Fpdm4wnZuzXF6UmPyRHhSzg38%2FEMAGVszBUraar92M8y8fffsJibVxyhS9hV9WBdLFcCVpepgHRmp1i5GGDmGqekoKZ%2F6Psg9rosTlpPNH8mFcbzyAVBFszqzCgNFXkPAZuAl15DA3ZplYDToz5ghUp4ezDalIX1sCzLU0Tpu8u1um2oqGL5K5tXUVmTKmQa665XLoDmKBBi6v64FBTIwdsBoadteViTkkENZGHHjh6dG6MjyrOs2qEAhV76k71xz3S3u9I8znboCwejLDR7CP8BNke34jv%2FXIDYR5rKpofiOENyyMNmG%2F%2Fa5E2SLTwNdK6aEKJV%2BgknP667SttO7V5TbU82WvRmqACtEFps2y%2FXX7tfdT5Aeqssv0Xm2CvNemW5RwJSqlsiFkgGXKFYSbWJmz4X%2FEu4KZvh7ymSELmZ0anu9umJNb2sdBf2zeP6i5ONN%2F9Zl3hAQr%2BUIhP2rj9vgvH7VDkrmhFhDiTrrHsoVqNuWkSgma08wWwaw7JdaXX9sNjXgU0KuiOGbPLIJ0wxqDIwgY6pgElKnGh4UuOUk%2FQYd0BkZ165T2hAhT%2FBC8cyEIa%2B4yWekrgLHLFsT%2B7lYjO7tT5X7bWRuG54f09IpJvII6AWDJn2CzHeH8bMQprr8OuZUCoIZyfSLYWd%2FMU0WMyKgTH26EE3T2Pv4Dz69rEFBwtZ8sEnmjTCPa9iXHLZMSMPLqq%2BceHuHT%2Fjc0mIXWeIFol1tNVoIWNY4davy%2Fz%2BoRFmOhrRgeJqVSd&X-Amz-Signature=ef23f5d6610cb712850fd0fe60b1f961c28b7fad8b4847dcbfdd0f635a72d44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
