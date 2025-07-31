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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVT6LXSC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYIfpKWubs4fjnjBGYtKu8FHK3iIGBM2Ck4eNMkGowQAIgUofQ1uSSTx7uZeTr%2B8MrTvW7JG7sgpmOzrMt%2F8h6mhIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx6PhKLHJ9ltAeXZyrcA72ZJdPeOFw%2FqWVHUSubIsuGGrLqowmETGfy94Ov3lDMskoNY55nveCfLLrxWC8YHQZXFHn6yBK5t9G55aVUrjJ6o9qJy7UpMWLcK%2B1mA7XG1Mq%2Fy4rzUk%2FjhNEF%2BSsceiTG%2BtrvzDba1NyWU%2F%2BtvV1G1c%2F34AMQslTdEk9mKi%2FvBQYm%2FQeh6bnZdPCGPbR75%2Bm22%2Ffz2%2F154doVZS%2FN5vUvlQSxMnlhiKuwSnBDMosvh3gjGqco7Jl9N%2BVDvA2bet1plAc6hjveL6VpLHSB8%2BzdTZbxgwjIWDK7VNUwBnXqgUV4eV9kU7B2XN85y1xiXDnmWmdqy6mnCyK6h%2BG7JQjM6CShtSKdWA7ikeWeI7XSxPnuLXBPFCVJ0JkFhkIShDTa8IDR8ksJbRXqfag1sxv3qgJ3r0TJ%2FAPkqI886JJotZqbePpE2u3Q6hxJpuz%2FFpFaoL2j10yVvKZU46zC9O5QOtomPbZx7%2FiNTAjlVfJoXWmJn4s%2FwqKbg9Z49ODzI2uEkjw75pCHA1okDdyM8JbzX1SM8alGw4O0lVHESMjrU8Nnu4hJCm2LkI4fOUgseGp7y27gWGy2xyT64MQOC3UhOH5pyTYdARNXrRQPqCqE10KeS8yc7fvGgF45MNOmr8QGOqUBNQlPIMsAIKj1yCE6e7U8iVU%2B8VZHYzjWZW6yjfbtRkmY9Fbg%2FyZfgd2LcAzla0TRG9UiTfmWoWn%2BvalU6vdgcThRFNuYpKdVMtiB2n8Zewr0uRdd80FVHHkZUZAvIJZXBFCE%2B1nAubkZpv7eJsst%2Bx%2FJv0xtTDS8CABJ6NVv587SU2T9MPQT78XnqQ%2BaxfvaY86xynLKHJisMQjQjwZPjAKCHlBL&X-Amz-Signature=2684dd08105bc066aac2ccf44d24f18b72cb47c6f0d9e2a39a51febe9a997551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVT6LXSC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYIfpKWubs4fjnjBGYtKu8FHK3iIGBM2Ck4eNMkGowQAIgUofQ1uSSTx7uZeTr%2B8MrTvW7JG7sgpmOzrMt%2F8h6mhIqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx6PhKLHJ9ltAeXZyrcA72ZJdPeOFw%2FqWVHUSubIsuGGrLqowmETGfy94Ov3lDMskoNY55nveCfLLrxWC8YHQZXFHn6yBK5t9G55aVUrjJ6o9qJy7UpMWLcK%2B1mA7XG1Mq%2Fy4rzUk%2FjhNEF%2BSsceiTG%2BtrvzDba1NyWU%2F%2BtvV1G1c%2F34AMQslTdEk9mKi%2FvBQYm%2FQeh6bnZdPCGPbR75%2Bm22%2Ffz2%2F154doVZS%2FN5vUvlQSxMnlhiKuwSnBDMosvh3gjGqco7Jl9N%2BVDvA2bet1plAc6hjveL6VpLHSB8%2BzdTZbxgwjIWDK7VNUwBnXqgUV4eV9kU7B2XN85y1xiXDnmWmdqy6mnCyK6h%2BG7JQjM6CShtSKdWA7ikeWeI7XSxPnuLXBPFCVJ0JkFhkIShDTa8IDR8ksJbRXqfag1sxv3qgJ3r0TJ%2FAPkqI886JJotZqbePpE2u3Q6hxJpuz%2FFpFaoL2j10yVvKZU46zC9O5QOtomPbZx7%2FiNTAjlVfJoXWmJn4s%2FwqKbg9Z49ODzI2uEkjw75pCHA1okDdyM8JbzX1SM8alGw4O0lVHESMjrU8Nnu4hJCm2LkI4fOUgseGp7y27gWGy2xyT64MQOC3UhOH5pyTYdARNXrRQPqCqE10KeS8yc7fvGgF45MNOmr8QGOqUBNQlPIMsAIKj1yCE6e7U8iVU%2B8VZHYzjWZW6yjfbtRkmY9Fbg%2FyZfgd2LcAzla0TRG9UiTfmWoWn%2BvalU6vdgcThRFNuYpKdVMtiB2n8Zewr0uRdd80FVHHkZUZAvIJZXBFCE%2B1nAubkZpv7eJsst%2Bx%2FJv0xtTDS8CABJ6NVv587SU2T9MPQT78XnqQ%2BaxfvaY86xynLKHJisMQjQjwZPjAKCHlBL&X-Amz-Signature=35f608ff7e82e03da91aa7a89a3a9168900d10b5610ef19d84ca0b3319e0cd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
