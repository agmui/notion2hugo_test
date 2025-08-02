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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZZ3NQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH00G9s%2Bw0%2Br%2Fwc5DvwaWISeYnb7R%2BZqC%2F8yasuPsXOuAiANajh8GNLM1lQF1h6U17xxs6wHsxlBvtKzrPgKhedDeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMkvZrFwOQg7mkqUxtKtwDbEI9N0KqOGFd5XBAApcGEC0UskAlsFLPYg%2FaKSVArG%2FPfkct2tcDegsfxDHO3dcylpDdrhqrkeeKZxRR%2BJsvNkPxXCDyJAzUSwtWaM2m2dpsAzmvzmix83ocd7TxcY9LjeZNL1ViaDQVUl0Nh2BR4E2u9cBBfF%2FdboWUs9TyEQgU0s053ToOTGX8Choy8SxcKBEpvkKtulJzw7mmMWe1nn55NrR9XaBfi2NKqzMub6O8qIhWvqPXXF5sqZO0bzX8hQlOWdGiwRGGGRlzs3pnQ%2FWMq%2Fz%2FRnr2t62u%2FadOwKu2Wj9yjp4t3lao111X0X6zasf7mXtyc65K6mpVtxuGhbxml7gzLz68ItLw3GgF8hw09wNtmiRAkDmuXL%2FVKpK5afgzGMuMgafPfoUcMDY8t4%2BzB7wbTVdxDT05gy70DBndTuBDvBjcuwYdETGqZz7P%2FeMSNIhSyHVpuWY4UyneZ6zY7LPRTIL3DlmcNzJBFBtwxmnFncV6l0nmuY1jYp5gWyUi7c88YMm88k9ZO%2FqFNY4zSlCCoXxJDuSEFYS7mwj5mgpHVFzz9fjQ7BRQXKPiP6HhX4xM1LpvkEAiWXp4eBsCQW%2F8iYAazUGITNeCuRfFtHmENtiMH1dDgnUwuvC2xAY6pgHS%2FwTCl3ImTzPrUrGzTiiclr7Pp0C8he7ohThPLOTswIu1iGXupjJFh2YVa7Y1p9jlzoPT70WHTPYkhaLv%2BiNbwgc%2FiEYNiU21rHIf8APwbOvp4o0Kuv1qY7wpLnsV63Dh%2F7J2hT4n9INVuDVi4nDhCNgGraZ3sRLhg6WKkKjwZnYLcubSmchjOvXbKdYhjbwQwMUBgB8Fr2VpeCDK4FR8csnLDKWB&X-Amz-Signature=5240da357541f7cbad55fe6a7ce6221b449c62a27649d650524d63f2cb55cd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZZ3NQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH00G9s%2Bw0%2Br%2Fwc5DvwaWISeYnb7R%2BZqC%2F8yasuPsXOuAiANajh8GNLM1lQF1h6U17xxs6wHsxlBvtKzrPgKhedDeyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMkvZrFwOQg7mkqUxtKtwDbEI9N0KqOGFd5XBAApcGEC0UskAlsFLPYg%2FaKSVArG%2FPfkct2tcDegsfxDHO3dcylpDdrhqrkeeKZxRR%2BJsvNkPxXCDyJAzUSwtWaM2m2dpsAzmvzmix83ocd7TxcY9LjeZNL1ViaDQVUl0Nh2BR4E2u9cBBfF%2FdboWUs9TyEQgU0s053ToOTGX8Choy8SxcKBEpvkKtulJzw7mmMWe1nn55NrR9XaBfi2NKqzMub6O8qIhWvqPXXF5sqZO0bzX8hQlOWdGiwRGGGRlzs3pnQ%2FWMq%2Fz%2FRnr2t62u%2FadOwKu2Wj9yjp4t3lao111X0X6zasf7mXtyc65K6mpVtxuGhbxml7gzLz68ItLw3GgF8hw09wNtmiRAkDmuXL%2FVKpK5afgzGMuMgafPfoUcMDY8t4%2BzB7wbTVdxDT05gy70DBndTuBDvBjcuwYdETGqZz7P%2FeMSNIhSyHVpuWY4UyneZ6zY7LPRTIL3DlmcNzJBFBtwxmnFncV6l0nmuY1jYp5gWyUi7c88YMm88k9ZO%2FqFNY4zSlCCoXxJDuSEFYS7mwj5mgpHVFzz9fjQ7BRQXKPiP6HhX4xM1LpvkEAiWXp4eBsCQW%2F8iYAazUGITNeCuRfFtHmENtiMH1dDgnUwuvC2xAY6pgHS%2FwTCl3ImTzPrUrGzTiiclr7Pp0C8he7ohThPLOTswIu1iGXupjJFh2YVa7Y1p9jlzoPT70WHTPYkhaLv%2BiNbwgc%2FiEYNiU21rHIf8APwbOvp4o0Kuv1qY7wpLnsV63Dh%2F7J2hT4n9INVuDVi4nDhCNgGraZ3sRLhg6WKkKjwZnYLcubSmchjOvXbKdYhjbwQwMUBgB8Fr2VpeCDK4FR8csnLDKWB&X-Amz-Signature=bafa4c7f53bc9357cca72e03ceee04fb9d90f3085b896f3eef1293dc87082a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
