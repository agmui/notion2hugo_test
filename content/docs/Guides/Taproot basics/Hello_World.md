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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WY54NN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BVsv2o31SngM9aDq6SasGz%2BV1%2Fs2db4VN10x1myq9KAiBlggwXkB9RTGJW8RbO54vcgWRzAxbMHma%2BbRz6Vx%2BFiSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4KOImuW%2FYh2N9vc6KtwD0AQ889fvzJn1jbngJ5BtC%2FZID%2BRKBXrFy9NdbZxNcyANUlSNaRfiVXMeMnaNVKLWMd9hZ0u1Ix5UXgcP9XGeEuJ8nWKzw3gXBYoErov8RYzDTdlH%2BhiiKhx6dP84HwMLwALeHvrXyNGMlzYWDDnREtdd8rcQjIykJjPq2ly%2B0cMmKzHFG5eP0SaGsJOTuKebTOOLLe0NqeL8u6DmX%2B0yMcUqWzMtHo15fiKRZiWnZFHOfOJfKh4Mx8b5Y9vtjd6HiiQNXTyi8yecPKBRkwIaqya6NV9jQW0M6Q1xP6Vf3K2Lcopvlth3zNbH%2FVcUU3bpEwXv2T2th7BgefzXhFdOwQstrhp3k9OgsnJPut%2BS2SZlHIoLlGjQtvWFQua1iNIGMKKiiFYQ4Z1al7GM22HALTxjS966%2Bn5cTBwcCfEBKzma%2FJm5Qb5KT8AHnZYXZC6xYwvTD5nZp5NKXbTx7v30Hs1lIF7IoKFlRkYtIQrN2JVn%2Fz8JNbJ3Hd7JaGcCK20xY2KhKs0j36Em8IznsUvzJID3yILxUpdbpGl5XjK3G2H8a1tCpyzZNewWZ4MF6RLJHm502okp%2BF5j%2FEHEVAnp055lPJweyVJsZ64VhLalxHJcvbz1gr89zI7IcwUw9LyWwwY6pgFqazl43lRnqXefA13QzXMoSeCe2oS8Xdb0okNrMMpk%2FLtIKT%2B7fr7FpdiWf8Vdtg7M8e%2Fj4f4Eq3HE7fMdQf9CiRoQtv9NevAodlFa%2Bv29MVmvQqRa3%2B1j83cr0dC0Gvc72Ds%2F5Znq7uAXNaj0c02EzJ1JmB6MksMINHiiibCUn7r%2BetBCUrHiRpFgko83J36fEEHdkibbp1aVoqJbR403Jsgibt4F&X-Amz-Signature=210f131a5df287ec7a516ab530680bd8b72a0f5f63d0cb9ac41cdbd73a5eca27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WY54NN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BVsv2o31SngM9aDq6SasGz%2BV1%2Fs2db4VN10x1myq9KAiBlggwXkB9RTGJW8RbO54vcgWRzAxbMHma%2BbRz6Vx%2BFiSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4KOImuW%2FYh2N9vc6KtwD0AQ889fvzJn1jbngJ5BtC%2FZID%2BRKBXrFy9NdbZxNcyANUlSNaRfiVXMeMnaNVKLWMd9hZ0u1Ix5UXgcP9XGeEuJ8nWKzw3gXBYoErov8RYzDTdlH%2BhiiKhx6dP84HwMLwALeHvrXyNGMlzYWDDnREtdd8rcQjIykJjPq2ly%2B0cMmKzHFG5eP0SaGsJOTuKebTOOLLe0NqeL8u6DmX%2B0yMcUqWzMtHo15fiKRZiWnZFHOfOJfKh4Mx8b5Y9vtjd6HiiQNXTyi8yecPKBRkwIaqya6NV9jQW0M6Q1xP6Vf3K2Lcopvlth3zNbH%2FVcUU3bpEwXv2T2th7BgefzXhFdOwQstrhp3k9OgsnJPut%2BS2SZlHIoLlGjQtvWFQua1iNIGMKKiiFYQ4Z1al7GM22HALTxjS966%2Bn5cTBwcCfEBKzma%2FJm5Qb5KT8AHnZYXZC6xYwvTD5nZp5NKXbTx7v30Hs1lIF7IoKFlRkYtIQrN2JVn%2Fz8JNbJ3Hd7JaGcCK20xY2KhKs0j36Em8IznsUvzJID3yILxUpdbpGl5XjK3G2H8a1tCpyzZNewWZ4MF6RLJHm502okp%2BF5j%2FEHEVAnp055lPJweyVJsZ64VhLalxHJcvbz1gr89zI7IcwUw9LyWwwY6pgFqazl43lRnqXefA13QzXMoSeCe2oS8Xdb0okNrMMpk%2FLtIKT%2B7fr7FpdiWf8Vdtg7M8e%2Fj4f4Eq3HE7fMdQf9CiRoQtv9NevAodlFa%2Bv29MVmvQqRa3%2B1j83cr0dC0Gvc72Ds%2F5Znq7uAXNaj0c02EzJ1JmB6MksMINHiiibCUn7r%2BetBCUrHiRpFgko83J36fEEHdkibbp1aVoqJbR403Jsgibt4F&X-Amz-Signature=46df91ef7ca99848b353a493f78545ffe2c7ed084a542810d5fe8a6b929dbcf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
