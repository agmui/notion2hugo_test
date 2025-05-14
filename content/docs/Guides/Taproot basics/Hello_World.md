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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJYHNYW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIA3ZJ%2BhqyxD5WR8SceoyATp%2FpXnZi6ZkdI6VufTzEKYCAiEA2LVJiS7FvN0CvpbUcB1Sbsy53amYN6jRhL7unYFCulEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBEqOsCvcw8DTJXIyrcA9q1kBq%2BvQYtl%2BO4CiFycmX6Jzb7WegHZKVsqALkvUHTClH6WbDU06c9leeboj3ywuyQSiLmSDhGVinxhoBGisN%2BeW5fuQaFKagKxnvn7UYVvtd3jlxgYR93CDBy2YqvJqAXhKRmIvk%2B0LO1BlG%2FuWP9KvPIY9qf%2Fi4saSVwsjSggdJrP5SyOV3d97vDL9vn0Irgmm4Tko%2FWhjgEAdCv26cKMuG10NqDtIQw0xgAplZ7yZWpRKlMkQjQJR69bttkHiFzy29GXB9asRBooMHQputN%2Fj1sQH52YK%2FgN60zhFBhxpOdq%2BoocZn46vVh%2F5W1LpmA66VBbnLX6JBMgBqRgOBotYa3ECSf622BdHr7du%2Bp8FtrXEmf1ryylRPN8jzMNTAWMSZpy1VFvz7rdZoNFMv66uVOWhTNdCD6Ign7abt70rJ2ULmxo5%2B1JAmW99dewm9CXhTQI0NppvIS2gD5sItAwZG1BvXT6ue%2FSwsT2wXDkXvrIEvKwQLxMs5u0%2BppZKIbcacLNWHXfTX1Bwy8g8kDQHG8tP2qNo%2BNkqFNxsoc%2FItvd46vIvklQU0zKYmd%2BDCr9O%2BXKW4BPqeOABrrjQCEGJJk2xXW9zs2MLLskjrpyBIrng84F1OfubnPMLPwj8EGOqUBvYMp4a5PZpk5kiD%2FEhMJfeOVTjTKaGSkMsxH7E0r2Azb8%2FdcrS7E72iLzSXIWbU0DL8VJGOhCJRSUTv9%2B%2F28uz3GAZEdgdglz0KjfIVGEEy0eL1zVLiqUe4BmgNK4VTRB0WqT4ujPPdAKQEPhaPsAnW1kLXXExj5Beghucuhw8G%2FqtpfqoifyLjLD7fKB4v7R3CegkeRPARB8Nm9yY9ku1ZwAhzU&X-Amz-Signature=5aea8bcd687d4170d53fe80e39d7f96285d484ea55e04ae877935001ea96b6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLJYHNYW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIA3ZJ%2BhqyxD5WR8SceoyATp%2FpXnZi6ZkdI6VufTzEKYCAiEA2LVJiS7FvN0CvpbUcB1Sbsy53amYN6jRhL7unYFCulEqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBEqOsCvcw8DTJXIyrcA9q1kBq%2BvQYtl%2BO4CiFycmX6Jzb7WegHZKVsqALkvUHTClH6WbDU06c9leeboj3ywuyQSiLmSDhGVinxhoBGisN%2BeW5fuQaFKagKxnvn7UYVvtd3jlxgYR93CDBy2YqvJqAXhKRmIvk%2B0LO1BlG%2FuWP9KvPIY9qf%2Fi4saSVwsjSggdJrP5SyOV3d97vDL9vn0Irgmm4Tko%2FWhjgEAdCv26cKMuG10NqDtIQw0xgAplZ7yZWpRKlMkQjQJR69bttkHiFzy29GXB9asRBooMHQputN%2Fj1sQH52YK%2FgN60zhFBhxpOdq%2BoocZn46vVh%2F5W1LpmA66VBbnLX6JBMgBqRgOBotYa3ECSf622BdHr7du%2Bp8FtrXEmf1ryylRPN8jzMNTAWMSZpy1VFvz7rdZoNFMv66uVOWhTNdCD6Ign7abt70rJ2ULmxo5%2B1JAmW99dewm9CXhTQI0NppvIS2gD5sItAwZG1BvXT6ue%2FSwsT2wXDkXvrIEvKwQLxMs5u0%2BppZKIbcacLNWHXfTX1Bwy8g8kDQHG8tP2qNo%2BNkqFNxsoc%2FItvd46vIvklQU0zKYmd%2BDCr9O%2BXKW4BPqeOABrrjQCEGJJk2xXW9zs2MLLskjrpyBIrng84F1OfubnPMLPwj8EGOqUBvYMp4a5PZpk5kiD%2FEhMJfeOVTjTKaGSkMsxH7E0r2Azb8%2FdcrS7E72iLzSXIWbU0DL8VJGOhCJRSUTv9%2B%2F28uz3GAZEdgdglz0KjfIVGEEy0eL1zVLiqUe4BmgNK4VTRB0WqT4ujPPdAKQEPhaPsAnW1kLXXExj5Beghucuhw8G%2FqtpfqoifyLjLD7fKB4v7R3CegkeRPARB8Nm9yY9ku1ZwAhzU&X-Amz-Signature=4f6dafce891a17bcbf270f23e423a9c523bcdc3fe75620fcf72bab8a82c7fa86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
