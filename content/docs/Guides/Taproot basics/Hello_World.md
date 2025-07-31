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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAPHKDB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTbYe%2Fma5gVXZEHWH7GOJhrWKcW26T%2B2CKuoPe4qBrZAiEAtPmxM1nLGM0%2FafelL1L0%2Friy5hk3MKkmoxsfQzUu9SgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBEILiWchP0N3bYeircA45ivx6y1NSstYrM5Ugqs8y87TWPx7t%2BMBzgZtsob2B%2BgmnRSsfL2YCbY5KCAym6nfrxLVqw9pa8I7OAr2pDT2e4AY42ZaSNgY9uVOMkdm9XXmlr5rHdMzQ9BoRjAAP2X5lqk97lYWZacDC5%2BUdTBrRCyyMVoo0O66JeNr8IhDxwpATmQS0z4aeXaVEKEwARChan1CZLVGRpm1VBnVGzoh8RH4aZV0HPca3NQuElMfTn%2BzNbjsD6Dd5jf%2BuM9BZzSECEaMluClL0hWLrdSTlvfJhkfBKpLrLE%2BxQ%2F%2FUc9Rl4%2FDA4o55nYPa7%2B%2B0q5nUoeKXL%2FZ0Ez6YAzfkNOEKl%2FJkkX3xsrJ88OWkcp85iuvEMIrZnaZ7jce8y6BEFD6qo3HNbLZB%2BPc1lELVp2g%2B6KSsKM3mRE%2FrahpLHDLU4e5VZBeEfXOktMnLNCrqoBiTnARjJc1ZrZLg7gyewOq08%2B5P9IEcKe2%2FAplDDM5gTIYpWOrGMXwJ%2BvgdcezyVAKGGFwTYOlm4nA5M5wLd3fLsgn4IhTcfFCJ3YrUNE7zVAigL%2BjHna12n0EkWWVXWVVvDYLRIBLuCRODgvSTvSVDh5kb7Yy18DW%2Fcus0fs4fC2TVNQBaDGg6fuOQraMlHMJiBr8QGOqUBbXvha1qiR5EQhkFpkzyEfso%2BwJR562XfFvULlDNyGbIj6pSTEif16E3BHhXz2J5%2Bn9AZKKJtR5seawD3E9BuKDHMo64yWYxdja6dgwGumf3mAJlPCPaw%2BgOINNv1P8g1Hj0PuKGmbI5%2BnzqgXyXtRkKWDap6UsA8JzB9AKxKva1nzVm6A5NmgKlN7gNKpobyv0n5%2B8ko6o%2B4TYcBE6MpzCkC2LZE&X-Amz-Signature=c0e37b2c4471203df252fb87004b403aa26b4cdac18c4fc26afd9a1f2d3edccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THAPHKDB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTbYe%2Fma5gVXZEHWH7GOJhrWKcW26T%2B2CKuoPe4qBrZAiEAtPmxM1nLGM0%2FafelL1L0%2Friy5hk3MKkmoxsfQzUu9SgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBEILiWchP0N3bYeircA45ivx6y1NSstYrM5Ugqs8y87TWPx7t%2BMBzgZtsob2B%2BgmnRSsfL2YCbY5KCAym6nfrxLVqw9pa8I7OAr2pDT2e4AY42ZaSNgY9uVOMkdm9XXmlr5rHdMzQ9BoRjAAP2X5lqk97lYWZacDC5%2BUdTBrRCyyMVoo0O66JeNr8IhDxwpATmQS0z4aeXaVEKEwARChan1CZLVGRpm1VBnVGzoh8RH4aZV0HPca3NQuElMfTn%2BzNbjsD6Dd5jf%2BuM9BZzSECEaMluClL0hWLrdSTlvfJhkfBKpLrLE%2BxQ%2F%2FUc9Rl4%2FDA4o55nYPa7%2B%2B0q5nUoeKXL%2FZ0Ez6YAzfkNOEKl%2FJkkX3xsrJ88OWkcp85iuvEMIrZnaZ7jce8y6BEFD6qo3HNbLZB%2BPc1lELVp2g%2B6KSsKM3mRE%2FrahpLHDLU4e5VZBeEfXOktMnLNCrqoBiTnARjJc1ZrZLg7gyewOq08%2B5P9IEcKe2%2FAplDDM5gTIYpWOrGMXwJ%2BvgdcezyVAKGGFwTYOlm4nA5M5wLd3fLsgn4IhTcfFCJ3YrUNE7zVAigL%2BjHna12n0EkWWVXWVVvDYLRIBLuCRODgvSTvSVDh5kb7Yy18DW%2Fcus0fs4fC2TVNQBaDGg6fuOQraMlHMJiBr8QGOqUBbXvha1qiR5EQhkFpkzyEfso%2BwJR562XfFvULlDNyGbIj6pSTEif16E3BHhXz2J5%2Bn9AZKKJtR5seawD3E9BuKDHMo64yWYxdja6dgwGumf3mAJlPCPaw%2BgOINNv1P8g1Hj0PuKGmbI5%2BnzqgXyXtRkKWDap6UsA8JzB9AKxKva1nzVm6A5NmgKlN7gNKpobyv0n5%2B8ko6o%2B4TYcBE6MpzCkC2LZE&X-Amz-Signature=7934a80d8e6f1f06d620175c0fce6b70d6027c539ca8fa9e1117f1e874f2003a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
