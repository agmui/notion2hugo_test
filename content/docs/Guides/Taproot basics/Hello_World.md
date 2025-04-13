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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CF77ED%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFH4kfOk0Q44xvhnFyrI%2BHzE3bYYhXDCB00TRh8a0a2fAiEAjbNwzzy6fOPOH%2BY5xPE3Q5peG8zEaGIlNsLkvYy%2BuxMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb1kaKNIW4YLVIFqCrcA9Ch1SaELwUesPV52jKn57ztk7M9MwwUbBaM%2F4xfnPVNOzy%2BYm8QGX6DmhChC1f6HfmDBJi1qixdv%2FwdXwJ%2FfXazRNcfd8AMXyApbF0gUjMolkzl15a92oDT5tI3cj%2Bt2mMwGLguPJUVTcNZRckLf%2Bf431JWm9BrikfMmmDZZkx1fc4BK9zW%2F4YseFyIhYbfZHSIIv05UZDulFQxCxzc%2Fy3qrip%2BuSwB6uE0oaD8WHqHFrKMrMo%2BvJHk4WfuBSSMnYlEhEDX0GzmbTnlAdSARNyeOb3b4TtnJJCae9K4Jebn5Ed6fxylQvWRcSF61PkNV2PztVFRagfAq1nHbtsqy3o2kK3IDngJRP8KOZr9RAMVXLV6R%2FAO6rygpuniMQX2sBbfGgyxTQuIZ8Qz4tL8fX7vLMgV%2BSKCta%2BkOeC2Q4uQ3yQ14d5hVVcudaj24vyG%2BEV2kuaIMzcJoFjiUn1nXvMU3wl4W2ub%2BPZwMLtSxDJsnc34QMbfMJCUrwIChQ8ESmdqTR1tOiXZMmGBxygOGkTWcKMPCNoQ5Wl2MiSZDhCZ395HBXb9LhyXeV22vRquaKWzDT3mAZbMRUZkpi4sFM1lX0ycX%2FLflLQem5AZedE3G05G7kI4uEqDXT2WMO%2B97r8GOqUBI7QHbU45vqMpNvovztu3YTHLT7Kuc1qrUbCRtNkEo5az0PJY569SdfQXbhorv9FbrXm5o100dqv6aO3fJso80ABBu3bi1MyLRnXgFnh7cSbKUEsU8QGrEwV7rHQtpto8BJ3kOY%2BVwo7zTZb9a1T8ZUYC6%2BQJdPufMeF7gOjH8J7DlQkQHTcqnhG%2FyMtV06sq0u2riTQAElGfBJO72CMQow4DRCTc&X-Amz-Signature=91a93a20dcc285cc60917b11ca6c7d5a659814a88cc8f4d87be50a2b8eef8eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CF77ED%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFH4kfOk0Q44xvhnFyrI%2BHzE3bYYhXDCB00TRh8a0a2fAiEAjbNwzzy6fOPOH%2BY5xPE3Q5peG8zEaGIlNsLkvYy%2BuxMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBb1kaKNIW4YLVIFqCrcA9Ch1SaELwUesPV52jKn57ztk7M9MwwUbBaM%2F4xfnPVNOzy%2BYm8QGX6DmhChC1f6HfmDBJi1qixdv%2FwdXwJ%2FfXazRNcfd8AMXyApbF0gUjMolkzl15a92oDT5tI3cj%2Bt2mMwGLguPJUVTcNZRckLf%2Bf431JWm9BrikfMmmDZZkx1fc4BK9zW%2F4YseFyIhYbfZHSIIv05UZDulFQxCxzc%2Fy3qrip%2BuSwB6uE0oaD8WHqHFrKMrMo%2BvJHk4WfuBSSMnYlEhEDX0GzmbTnlAdSARNyeOb3b4TtnJJCae9K4Jebn5Ed6fxylQvWRcSF61PkNV2PztVFRagfAq1nHbtsqy3o2kK3IDngJRP8KOZr9RAMVXLV6R%2FAO6rygpuniMQX2sBbfGgyxTQuIZ8Qz4tL8fX7vLMgV%2BSKCta%2BkOeC2Q4uQ3yQ14d5hVVcudaj24vyG%2BEV2kuaIMzcJoFjiUn1nXvMU3wl4W2ub%2BPZwMLtSxDJsnc34QMbfMJCUrwIChQ8ESmdqTR1tOiXZMmGBxygOGkTWcKMPCNoQ5Wl2MiSZDhCZ395HBXb9LhyXeV22vRquaKWzDT3mAZbMRUZkpi4sFM1lX0ycX%2FLflLQem5AZedE3G05G7kI4uEqDXT2WMO%2B97r8GOqUBI7QHbU45vqMpNvovztu3YTHLT7Kuc1qrUbCRtNkEo5az0PJY569SdfQXbhorv9FbrXm5o100dqv6aO3fJso80ABBu3bi1MyLRnXgFnh7cSbKUEsU8QGrEwV7rHQtpto8BJ3kOY%2BVwo7zTZb9a1T8ZUYC6%2BQJdPufMeF7gOjH8J7DlQkQHTcqnhG%2FyMtV06sq0u2riTQAElGfBJO72CMQow4DRCTc&X-Amz-Signature=1f8ef60ccbd779de1e188a6bc3586ecf89082fb1a4072b41fa397a358bac3932&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
