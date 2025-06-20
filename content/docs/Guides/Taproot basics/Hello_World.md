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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRVBD55%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWzMa9esLCxVsiMKgXP1%2F3WAIftPCbac90ojCuJNlW1AiEAl%2FKDLcpQoHm0JLdfUo1jIiRuWSNcjEL6moWgtvNCtroqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEKptO96g3An5OZJircA%2FHG3zeAcwnK33BN1W%2BQ7s%2FygtUPhMxiyhX%2BhYHdFks7Y%2BTUcMas1RH1DiTnHPwt3nsa2ARYodvSbkxd0lGELktxeWA3dyEb2SwzphP39tK7NCTzdiQrnPO9SyPOepV2Ajq153Qabv470eMJ6wgy33OUVFet5mkz%2Ftyu4C%2BpEZPwxh9NqDhs%2Fns5D7iV5VwOpULmbjDFWbYEZCpPVpsm5%2FN%2BTvQ1giI3debs%2BdXa%2BIZ8ucc887GRA6NEeFJii%2FVRWd1z3CtXbHOfqJe9soLVs54ZV2DFBAdGXg8jPcpB90lSqNjbS3DTpBGePGPRwNEgWKkIx4xvroQwzVR2%2FwH%2BqqmggOp9%2FprRXql0GR%2F2K9sVs7Gy73qcQ%2Bs2W2Tlwhh0Q5Vg3Nd6AlpsCv%2FhWD9RjgdrCEeBPGfbe%2FLyNZHeQwUEUcxvFaqDlHusv595iYWjfeRRGoGTYpR0Qha53nr6HqH6S3No90N7DzxZswHD%2BPgm4yYFWgquwbrHtG26MukbX71G812ZQ4Vq41UEbQnuDkwtcgLdbifdurj5bw7BflxpGpBUyDQGZ%2BwvL2FrU07XjLwo05YEBoRQZCoS5uDa%2BSjngwLQaUcxAInWGZ61F9xzUZadeT01jyZ546CYMJrA1MIGOqUBouZX28aqmE%2FUWjjJUlP0lMn%2B2vUf2ebYQQdQLsiQl5VvdT5wlUZ1h6UmibhMGksCYmo63NE8rD27%2B0B2Np5KiPi8N889hJpYBjGFIIMz%2FJTWRVOTzS80Zhen8jkVSJLv%2BR6KrSp9d1HkfLxhzfPip785QhZQaxlnnrJ5YEkWCOiIIXJ267nBo7AgvWzFmkrguo%2FIOcu7cJT3XZFfN%2BVZoWR17pqg&X-Amz-Signature=6d99a8f26bd1740b6bb1e31facc7a7228bf95ff885b399434a88ccec94717671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWRVBD55%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWzMa9esLCxVsiMKgXP1%2F3WAIftPCbac90ojCuJNlW1AiEAl%2FKDLcpQoHm0JLdfUo1jIiRuWSNcjEL6moWgtvNCtroqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEKptO96g3An5OZJircA%2FHG3zeAcwnK33BN1W%2BQ7s%2FygtUPhMxiyhX%2BhYHdFks7Y%2BTUcMas1RH1DiTnHPwt3nsa2ARYodvSbkxd0lGELktxeWA3dyEb2SwzphP39tK7NCTzdiQrnPO9SyPOepV2Ajq153Qabv470eMJ6wgy33OUVFet5mkz%2Ftyu4C%2BpEZPwxh9NqDhs%2Fns5D7iV5VwOpULmbjDFWbYEZCpPVpsm5%2FN%2BTvQ1giI3debs%2BdXa%2BIZ8ucc887GRA6NEeFJii%2FVRWd1z3CtXbHOfqJe9soLVs54ZV2DFBAdGXg8jPcpB90lSqNjbS3DTpBGePGPRwNEgWKkIx4xvroQwzVR2%2FwH%2BqqmggOp9%2FprRXql0GR%2F2K9sVs7Gy73qcQ%2Bs2W2Tlwhh0Q5Vg3Nd6AlpsCv%2FhWD9RjgdrCEeBPGfbe%2FLyNZHeQwUEUcxvFaqDlHusv595iYWjfeRRGoGTYpR0Qha53nr6HqH6S3No90N7DzxZswHD%2BPgm4yYFWgquwbrHtG26MukbX71G812ZQ4Vq41UEbQnuDkwtcgLdbifdurj5bw7BflxpGpBUyDQGZ%2BwvL2FrU07XjLwo05YEBoRQZCoS5uDa%2BSjngwLQaUcxAInWGZ61F9xzUZadeT01jyZ546CYMJrA1MIGOqUBouZX28aqmE%2FUWjjJUlP0lMn%2B2vUf2ebYQQdQLsiQl5VvdT5wlUZ1h6UmibhMGksCYmo63NE8rD27%2B0B2Np5KiPi8N889hJpYBjGFIIMz%2FJTWRVOTzS80Zhen8jkVSJLv%2BR6KrSp9d1HkfLxhzfPip785QhZQaxlnnrJ5YEkWCOiIIXJ267nBo7AgvWzFmkrguo%2FIOcu7cJT3XZFfN%2BVZoWR17pqg&X-Amz-Signature=75f547a756396da78d010ce765575831a6c3843030c85b6835ab8d8f4831888c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
