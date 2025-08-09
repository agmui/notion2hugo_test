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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPP27FEP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEm61H7M4krz2iHBKvHSgG2dgo13OMb3e8ke0d2AtzwhAiEAgmnYBUJWaHIo6WNvfxGyYnrrhpxyw3PkSPN1x7ROatkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjYdwxfIEkHPdoEtCrcA35C6XkRmWoZ5zTEFPT2hpyHdNUZ%2FbBhXWSlEz0Iwm3Wws93Dr5tEEBx3QYOazjuKTPQtpGV%2BGpZcVU5yX74KuPlD%2BWk1PL6X98ZKBsroQuqVVlWCuQsgNezXeG46bMC3xWeNeruOrle2mdvArzLjXdTTa2m8WsMcxdmYuSWHUBLRaFZi5lpuKFoyI8hep7lByakO1mUh3rRlYeadlt5NJOp1jK7qGdxn0IX20aJBEUeVgSqjG4OcmVDnqRDhku3r7QtzXJ90ZzbdKJnWAdY4fG9v4Wl4qNxomhLEzur5r1dC9x9qECmguV2fXOMI3gtyrJxrZye6huOuijJxT97ShergsrpDrBKgs%2Bhl7RHpO03hiv3Hq7JBX74MBOWwJTrOxcJSWeWezCLd8OBm%2FU59p2Mj1ZjC7taXdpXHLxHnbE5FWWdDxrDlm7J7d%2FPPdxcERCMZy%2BFl2uUsm08ILNjyoAUuUwNHOdKHH5QlTgPrq%2BjYHOZQyh5wZA5j4HelKbat339FU5cIRT51aXOclg2W9bi6CbmgyaZ3plXLw9dAHMEy1Uyz11SNQ11mtXEKWq%2F3LEwblttEwrqRTeGnRpo%2B65%2FgD5jx8aNPEoIpHpuR0LE82kKXaaoKdiyt%2BvlML3R2sQGOqUBxePCbJc4tqJCvdDw4CKvPGrr2IdeFCrPZ4f3fobNYkHwWgCxAbM2Xu6xkI7d6zwjFZI2PQL4KnLd4k%2Bb4ofob47FpvaHmAyR4LUY2t6kX9AK2DLD79TqZqkkMIGq7Ja1i9Ny9nzTae4xkQn2jYBknzpxEstmSN%2FuNLbNfAqmCzVJKEy7Gd4fkhxXaS4FVXA6TdaD0cA8CoKPYdkzYDHm5ns6r5dD&X-Amz-Signature=8d144ccfa6bcd9bf5077e4f580669ae4109d1dc8923e4dadf0275bcab544d8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPP27FEP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEm61H7M4krz2iHBKvHSgG2dgo13OMb3e8ke0d2AtzwhAiEAgmnYBUJWaHIo6WNvfxGyYnrrhpxyw3PkSPN1x7ROatkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjYdwxfIEkHPdoEtCrcA35C6XkRmWoZ5zTEFPT2hpyHdNUZ%2FbBhXWSlEz0Iwm3Wws93Dr5tEEBx3QYOazjuKTPQtpGV%2BGpZcVU5yX74KuPlD%2BWk1PL6X98ZKBsroQuqVVlWCuQsgNezXeG46bMC3xWeNeruOrle2mdvArzLjXdTTa2m8WsMcxdmYuSWHUBLRaFZi5lpuKFoyI8hep7lByakO1mUh3rRlYeadlt5NJOp1jK7qGdxn0IX20aJBEUeVgSqjG4OcmVDnqRDhku3r7QtzXJ90ZzbdKJnWAdY4fG9v4Wl4qNxomhLEzur5r1dC9x9qECmguV2fXOMI3gtyrJxrZye6huOuijJxT97ShergsrpDrBKgs%2Bhl7RHpO03hiv3Hq7JBX74MBOWwJTrOxcJSWeWezCLd8OBm%2FU59p2Mj1ZjC7taXdpXHLxHnbE5FWWdDxrDlm7J7d%2FPPdxcERCMZy%2BFl2uUsm08ILNjyoAUuUwNHOdKHH5QlTgPrq%2BjYHOZQyh5wZA5j4HelKbat339FU5cIRT51aXOclg2W9bi6CbmgyaZ3plXLw9dAHMEy1Uyz11SNQ11mtXEKWq%2F3LEwblttEwrqRTeGnRpo%2B65%2FgD5jx8aNPEoIpHpuR0LE82kKXaaoKdiyt%2BvlML3R2sQGOqUBxePCbJc4tqJCvdDw4CKvPGrr2IdeFCrPZ4f3fobNYkHwWgCxAbM2Xu6xkI7d6zwjFZI2PQL4KnLd4k%2Bb4ofob47FpvaHmAyR4LUY2t6kX9AK2DLD79TqZqkkMIGq7Ja1i9Ny9nzTae4xkQn2jYBknzpxEstmSN%2FuNLbNfAqmCzVJKEy7Gd4fkhxXaS4FVXA6TdaD0cA8CoKPYdkzYDHm5ns6r5dD&X-Amz-Signature=70f7d75600820978fcd10ab659b284a208ae16dac64bd74604083d0e409bfe56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
