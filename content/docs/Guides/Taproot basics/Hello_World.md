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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSAUC45%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC3GGRFOrfhOMPskryYkCOMS6nnpFZBhrdVzvtmqi%2F0ZgIgVNxMBXELfjrg34Z5EpGp5VhqD0l4ldoWuRqjsZaMmdwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzrlu9FiLveZuOHPyrcA7uFOjbtOIJDZ%2F7gFXEtYJbM5F6oxnCBiNBlfVFK0yHCb3F0VF5SqKhJ7LafkDxoZc7KK29UpljoVS1rVEcSp0g7KIUkUnXq3maynz%2BYBUNOTcy1%2FfHgQipvRPTkd8a5Iw0qhj5BxljTcx9Hb2HR3BrM%2FQ4tHWUNmHWLH9mOcaPYh8wYOzva2mTGjv7PILsG2zdp6IS19QcBkmNG1DPEC62XRw9O2dvMYwHesBlzKEA2iMpxBaXw%2BcBT3yNmUcNz29sfwbMqOVuRvU0NaWOyFbIx8nr3isiAmNc2dULAMWoUPHOFVHNbVrk9G3R%2FxWvFvlm86y8q%2BWLQ%2FsgDNJBrp4AULjFudYwB0DAAK7Wy0YtV6lLbTn3Qd2mMKj6VFhr6IE4tVFzM%2By%2Fj8AKl18c8IL7hcG%2FgR88WuerE2J%2FbyyvOM9cAT4xQROBxuVgBCyiYrfJSmpZ1OLLaavIFDY%2B43LZODfFqR%2FHmb7uJHoJ4STDaN3zDN41DK1snKUIjAI7U%2BIrX%2B25%2F1kIkkmHdzz0G1Vd451zZP%2B5qBYhl2LrRTC%2FsjW%2Fs3ueWYTmU28wfqjM9ETmQYWolpyEr7VMW73U3B%2Bzoc0uEV1mLgkbEU%2Fbvv4xHO79ohltDYZ6enF3PMLzvo78GOqUBqzxEwW8Tb8ca0TqL4xGkPT0JLdsFiUJRDcuL9kHvcUvnCbd%2BvV3qCbYo8gR58pGRDKJngJk83dWcXdKm4kQMxhP%2BBpIJrVc9LJdllgJ1HrhRNnxdW1UWEXuFLM7xZGcHyyB2F7v95egqZXLA9DyqgT9%2BzelWc7%2B%2F60saWgh3QiWTYCNBbYX0%2Bd%2BKTPI0zmfIbC64%2FZqPqDmNd%2FudDNYuajWbsu88&X-Amz-Signature=bd70bcf039d9ae9f9e18f0a1f0abac179918b88a588290dd046d5e6b7a66dee2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JSAUC45%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC3GGRFOrfhOMPskryYkCOMS6nnpFZBhrdVzvtmqi%2F0ZgIgVNxMBXELfjrg34Z5EpGp5VhqD0l4ldoWuRqjsZaMmdwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzrlu9FiLveZuOHPyrcA7uFOjbtOIJDZ%2F7gFXEtYJbM5F6oxnCBiNBlfVFK0yHCb3F0VF5SqKhJ7LafkDxoZc7KK29UpljoVS1rVEcSp0g7KIUkUnXq3maynz%2BYBUNOTcy1%2FfHgQipvRPTkd8a5Iw0qhj5BxljTcx9Hb2HR3BrM%2FQ4tHWUNmHWLH9mOcaPYh8wYOzva2mTGjv7PILsG2zdp6IS19QcBkmNG1DPEC62XRw9O2dvMYwHesBlzKEA2iMpxBaXw%2BcBT3yNmUcNz29sfwbMqOVuRvU0NaWOyFbIx8nr3isiAmNc2dULAMWoUPHOFVHNbVrk9G3R%2FxWvFvlm86y8q%2BWLQ%2FsgDNJBrp4AULjFudYwB0DAAK7Wy0YtV6lLbTn3Qd2mMKj6VFhr6IE4tVFzM%2By%2Fj8AKl18c8IL7hcG%2FgR88WuerE2J%2FbyyvOM9cAT4xQROBxuVgBCyiYrfJSmpZ1OLLaavIFDY%2B43LZODfFqR%2FHmb7uJHoJ4STDaN3zDN41DK1snKUIjAI7U%2BIrX%2B25%2F1kIkkmHdzz0G1Vd451zZP%2B5qBYhl2LrRTC%2FsjW%2Fs3ueWYTmU28wfqjM9ETmQYWolpyEr7VMW73U3B%2Bzoc0uEV1mLgkbEU%2Fbvv4xHO79ohltDYZ6enF3PMLzvo78GOqUBqzxEwW8Tb8ca0TqL4xGkPT0JLdsFiUJRDcuL9kHvcUvnCbd%2BvV3qCbYo8gR58pGRDKJngJk83dWcXdKm4kQMxhP%2BBpIJrVc9LJdllgJ1HrhRNnxdW1UWEXuFLM7xZGcHyyB2F7v95egqZXLA9DyqgT9%2BzelWc7%2B%2F60saWgh3QiWTYCNBbYX0%2Bd%2BKTPI0zmfIbC64%2FZqPqDmNd%2FudDNYuajWbsu88&X-Amz-Signature=d733bae58a2124785a0661bb84c1e58f0421bb5878541235e8a8052eada77e88&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
