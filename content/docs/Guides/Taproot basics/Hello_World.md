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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OXIYOI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZoIxK6pPp4SV6Uf4ytvoJHvNSdJ4W2RE2tY%2BgV3%2B4uAIgKISDUaaPu1DYap0GOEFzyVKMlLgGaiNWnIGC1pK6u2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMjSNHkp%2Br%2BFR5VjXircA2P3nxDrmD9D39W1vA%2BfvsAKevp9pSQkyXwAlUSXTPR%2FsiwUfmzdJ8PxYEGsMTPvJRl2sOo%2F9ZL91SpPkb%2BycUXXLjDBjwW8%2B8odWkRp26u7zGRHx%2FnBQL4F25ndBzQt9mBwNeySrLhppg6S0QkXDLRe1SWI%2BLtMTVuYmRgrRaXKVjQiqkiKmt0yiOuYtpUvT0S%2BHwVbDfzzMvQbG8LHF0%2FqUJQ8An6nHdtzKmdsxcKhqch3hTtDrdg4DO8f8vJTDGzc%2BL3xzgaau6LTETpJbY2nEhYy3c3vqkqkWGj9iz%2F9EL%2Fp27tgNjd1KtwxNE7wvisrebYSyTGSzwnGY1FGy%2FYzhbLMifYNXCiHSmCbutc18GahDk1F5%2F%2F6ZaL1DMgZ9HuFqgSKyceMycu1wTRCsswVhuDHoCQeEpko8szztzG0WCqTkSst1PJE2kQqeRFAZ5v%2F32KWnoimC5fIAT4XVG%2FGs%2Fn88LK4o54kx%2BKiv%2BjAhjo4Wv%2BTbPyfXEuCZ4C6alxTC5BREQsCU8RsjkdKDz40r3YE4o6QcZQL2ygJgMHD8DbJ1Ifca3O7FveVYQOdA88bLVU2s7rmd1N2TN7TnvOlYVqIBLOBfzVV0lveM%2Fb5dMKKbjU74rfphF4%2FMJDqn74GOqUBhZ3d2LX1b6IvNMRq53eMVelNElA85UIe5NJJZrw6NRTNme9p56Rf9f%2BBMJaVGPrYPVbqJcCOQ5nax4dZCmoCwfDxuFfeH%2FzPfSVwRqyI2CqFNn4sMjNC86P4GlHfrKvU9vaMv%2FpWqqobOD9t5m7u00uD7a56XiwSNNEYNXGV1AH%2FTTILXd8OAGRaTEcpanyicBEUCwHcZp%2FFHtU7PWY%2BI%2BuPDaUC&X-Amz-Signature=13a273041cece0ac3824b7a5123f7a3228a8864669e54bb3c167a9d690e5feba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OXIYOI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZoIxK6pPp4SV6Uf4ytvoJHvNSdJ4W2RE2tY%2BgV3%2B4uAIgKISDUaaPu1DYap0GOEFzyVKMlLgGaiNWnIGC1pK6u2Aq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMjSNHkp%2Br%2BFR5VjXircA2P3nxDrmD9D39W1vA%2BfvsAKevp9pSQkyXwAlUSXTPR%2FsiwUfmzdJ8PxYEGsMTPvJRl2sOo%2F9ZL91SpPkb%2BycUXXLjDBjwW8%2B8odWkRp26u7zGRHx%2FnBQL4F25ndBzQt9mBwNeySrLhppg6S0QkXDLRe1SWI%2BLtMTVuYmRgrRaXKVjQiqkiKmt0yiOuYtpUvT0S%2BHwVbDfzzMvQbG8LHF0%2FqUJQ8An6nHdtzKmdsxcKhqch3hTtDrdg4DO8f8vJTDGzc%2BL3xzgaau6LTETpJbY2nEhYy3c3vqkqkWGj9iz%2F9EL%2Fp27tgNjd1KtwxNE7wvisrebYSyTGSzwnGY1FGy%2FYzhbLMifYNXCiHSmCbutc18GahDk1F5%2F%2F6ZaL1DMgZ9HuFqgSKyceMycu1wTRCsswVhuDHoCQeEpko8szztzG0WCqTkSst1PJE2kQqeRFAZ5v%2F32KWnoimC5fIAT4XVG%2FGs%2Fn88LK4o54kx%2BKiv%2BjAhjo4Wv%2BTbPyfXEuCZ4C6alxTC5BREQsCU8RsjkdKDz40r3YE4o6QcZQL2ygJgMHD8DbJ1Ifca3O7FveVYQOdA88bLVU2s7rmd1N2TN7TnvOlYVqIBLOBfzVV0lveM%2Fb5dMKKbjU74rfphF4%2FMJDqn74GOqUBhZ3d2LX1b6IvNMRq53eMVelNElA85UIe5NJJZrw6NRTNme9p56Rf9f%2BBMJaVGPrYPVbqJcCOQ5nax4dZCmoCwfDxuFfeH%2FzPfSVwRqyI2CqFNn4sMjNC86P4GlHfrKvU9vaMv%2FpWqqobOD9t5m7u00uD7a56XiwSNNEYNXGV1AH%2FTTILXd8OAGRaTEcpanyicBEUCwHcZp%2FFHtU7PWY%2BI%2BuPDaUC&X-Amz-Signature=0b3f2b8e2ad5e33ecb628da4c0a33ab1584290558ec33b4c67f04746336f0fba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
