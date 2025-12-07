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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFHW5JB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUd2NIYRNtEey%2FYluTSpMyDCQi9d3LR%2BTmk%2F8kxLmwXAiAjZNE1KH967%2BfJumATMpSVpX6sCjMht6jGq%2BytSS6fSyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYs0XsYdjXZOvzs%2BqKtwDituPy%2Fs1WO%2BvCp0eeFC0RY%2F57INdBjPh7Pgza2aA%2BX579Ihu2EvBR92up%2FOK6Vg52BRXH6Hna7NyRhChep1BHypShURhEs9BQ8p1aVTYe%2BzZudv3EP8oXtx5%2Fvn%2FW3msh7vw2acezx0VDMI6CzWU7%2FULv%2FfHWmx2k1WlWLG0CZ0NtykZhtUiIavEdxw4H5JDSiIgRUfUfa0EGKd17aIQAnAqhchXDehkKIpY4ZTjJo5aAgSb0RF8MhjAN8vwNW%2FQftRFcNz7SIZpLu58asGCM6PyU4dWJU4HWG7XKnQ6Art32u3FRpsvTp8Q1rwiDyux%2BN63HYNvzG3DoxVQ9j8bqItrNW4SY0rMBbjccduYZpm3MvD%2FdcDS5Zd53KCZQNOLdd9EvseNHntr22IQt%2FNsQqRB%2BavHv%2B4YHvGHI1yhoEOelpQjIO8OkWBwuMLKykRvquiDft251oGuv1qnMUwKQ7gKwzn6gHFCKSMDdxGRLuLIOTqBtcOq0J8XVa6iUSDxArpwuqqTcFmdV6qX1D2kTPP02C%2BazB7bF0AvTqIMzlPSI%2F1GT1S5l2Jq2hdCRUIDTUdGnIDeqVXw%2B%2Fp%2F4LhdhxF1ehX342iF7I9NOzImyxuCty6K9TQUT9pC2s8wmf3SyQY6pgGVmvRBO6YE%2FHrEdDUIg2WuXnzQsre7BLEJ2TW0%2Bv6V9wjK4qi0ek8ANYUgI740UxIHBYivItlWU4Fv5G6Py0jLp82052D2rRNgoqyxPiyNoXTSKOJenWU3MFrQtR8nkU%2BTkkV7LWxFjkRPsz3Gf7%2B8KnOnvREcblwm8Nq1XKAs%2B3GUAD2tOv2RS4eb1h%2BLMtNrI5n6673t0htIBRVFG%2F7FpOf3LLDj&X-Amz-Signature=c185435bd469fe04729b807bcacef598ac8aea24877e86507e828c63263b9899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLFHW5JB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUd2NIYRNtEey%2FYluTSpMyDCQi9d3LR%2BTmk%2F8kxLmwXAiAjZNE1KH967%2BfJumATMpSVpX6sCjMht6jGq%2BytSS6fSyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYs0XsYdjXZOvzs%2BqKtwDituPy%2Fs1WO%2BvCp0eeFC0RY%2F57INdBjPh7Pgza2aA%2BX579Ihu2EvBR92up%2FOK6Vg52BRXH6Hna7NyRhChep1BHypShURhEs9BQ8p1aVTYe%2BzZudv3EP8oXtx5%2Fvn%2FW3msh7vw2acezx0VDMI6CzWU7%2FULv%2FfHWmx2k1WlWLG0CZ0NtykZhtUiIavEdxw4H5JDSiIgRUfUfa0EGKd17aIQAnAqhchXDehkKIpY4ZTjJo5aAgSb0RF8MhjAN8vwNW%2FQftRFcNz7SIZpLu58asGCM6PyU4dWJU4HWG7XKnQ6Art32u3FRpsvTp8Q1rwiDyux%2BN63HYNvzG3DoxVQ9j8bqItrNW4SY0rMBbjccduYZpm3MvD%2FdcDS5Zd53KCZQNOLdd9EvseNHntr22IQt%2FNsQqRB%2BavHv%2B4YHvGHI1yhoEOelpQjIO8OkWBwuMLKykRvquiDft251oGuv1qnMUwKQ7gKwzn6gHFCKSMDdxGRLuLIOTqBtcOq0J8XVa6iUSDxArpwuqqTcFmdV6qX1D2kTPP02C%2BazB7bF0AvTqIMzlPSI%2F1GT1S5l2Jq2hdCRUIDTUdGnIDeqVXw%2B%2Fp%2F4LhdhxF1ehX342iF7I9NOzImyxuCty6K9TQUT9pC2s8wmf3SyQY6pgGVmvRBO6YE%2FHrEdDUIg2WuXnzQsre7BLEJ2TW0%2Bv6V9wjK4qi0ek8ANYUgI740UxIHBYivItlWU4Fv5G6Py0jLp82052D2rRNgoqyxPiyNoXTSKOJenWU3MFrQtR8nkU%2BTkkV7LWxFjkRPsz3Gf7%2B8KnOnvREcblwm8Nq1XKAs%2B3GUAD2tOv2RS4eb1h%2BLMtNrI5n6673t0htIBRVFG%2F7FpOf3LLDj&X-Amz-Signature=ffc88c9b6c1a739447978932c42b077d1ab3168e79e6c130ad28318f0f7d4198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
