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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXO3PH4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDkoRml6qa0dxSPIfp5qrQgL9n7gRbgkvilDBQXtRbDGAIhAMRuVBWpwj5VLSKKUPO3gSYm1T3Bz6X9gNKTjYdy8o%2FBKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLVfU%2FZBP9qCHqJUsq3ANKxbDb4rIkNNBJ62FCfdd%2BtGSc1CLTLBnadjAapDq7t0IzMCv8ezZmgVV6HVitYv8Eo6SskiNQO3cdTNg%2BXYXdVmBK%2FBZwGSrwma3GisHkiwu1PJ%2FcS8jSKwHKO%2FxrznDaO8fbSKDunv0FhQ7%2FtVKp5URGCdE1QiEqYpHAflkc0l%2BwUFWHjRL4MAbVHKtFr0hhVoQut8uCp3B4VjozNkaAxUHFp1ZtXF6UlCNRDp0HM9qbe5NIkaLK0ecBIBApChpskYdP%2BIFm5%2FimrCmaqJRLDfbA%2BUClcAV7Z9ozMFUCeGfuDJeZzB8MPSUNpy5zRxI663ODfminjO0Tk9jYN4izgZjeXzLmAg5Xhkkvlwp%2BBvts%2FehCU8eS2dfM2qsUzIAxrjQj4gyHjhLnJakwY1AMbf2dXXuoN%2BMeZPu9Nk0ASVdG0TKdrrcXcRh5hQo2xmNG7GxYR%2FG86ui8HMxV44D1F6Mxngyv9iBQfsSozYbF%2BBeWQvjfVqKyvXnIkP9oDzqagvhasHrJdQ0jz4XUngYU%2FpPBPZCCQAMWO2R0sMRtwfptqBSGKZvQY9XMBS%2FgA2Fs5hHIFCK7Qv%2BVO5qJsFmQha91xbl3fk9fxi9P%2FKPNX7Z%2FpQXOJEQ07n7a%2BjCr79W%2FBjqkARbOauhuzs4jFHlTNDg5V498kBfOKoDm7jS5tONdNd59foDelZbg042gBRlrr4vnY4%2B1DcK%2BQYrspS1Q7wUs4tqjFwUFtYXUp%2BdNGnLRirp9y51vP7NgYwkvxIWEhVwg3fYh%2BM1OeBZUWKb0wbFgHtNCTJS80ii7TzG9pstisw1OlMHxEs53iuraQ2pMQgu%2F0P4oG7P6W7RlwBRBlJ%2FZO76iKhiC&X-Amz-Signature=1114a9de680ce2b8cf3882059355909c0552b613d6b34a24a0283c7a7da2950d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXO3PH4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDkoRml6qa0dxSPIfp5qrQgL9n7gRbgkvilDBQXtRbDGAIhAMRuVBWpwj5VLSKKUPO3gSYm1T3Bz6X9gNKTjYdy8o%2FBKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLVfU%2FZBP9qCHqJUsq3ANKxbDb4rIkNNBJ62FCfdd%2BtGSc1CLTLBnadjAapDq7t0IzMCv8ezZmgVV6HVitYv8Eo6SskiNQO3cdTNg%2BXYXdVmBK%2FBZwGSrwma3GisHkiwu1PJ%2FcS8jSKwHKO%2FxrznDaO8fbSKDunv0FhQ7%2FtVKp5URGCdE1QiEqYpHAflkc0l%2BwUFWHjRL4MAbVHKtFr0hhVoQut8uCp3B4VjozNkaAxUHFp1ZtXF6UlCNRDp0HM9qbe5NIkaLK0ecBIBApChpskYdP%2BIFm5%2FimrCmaqJRLDfbA%2BUClcAV7Z9ozMFUCeGfuDJeZzB8MPSUNpy5zRxI663ODfminjO0Tk9jYN4izgZjeXzLmAg5Xhkkvlwp%2BBvts%2FehCU8eS2dfM2qsUzIAxrjQj4gyHjhLnJakwY1AMbf2dXXuoN%2BMeZPu9Nk0ASVdG0TKdrrcXcRh5hQo2xmNG7GxYR%2FG86ui8HMxV44D1F6Mxngyv9iBQfsSozYbF%2BBeWQvjfVqKyvXnIkP9oDzqagvhasHrJdQ0jz4XUngYU%2FpPBPZCCQAMWO2R0sMRtwfptqBSGKZvQY9XMBS%2FgA2Fs5hHIFCK7Qv%2BVO5qJsFmQha91xbl3fk9fxi9P%2FKPNX7Z%2FpQXOJEQ07n7a%2BjCr79W%2FBjqkARbOauhuzs4jFHlTNDg5V498kBfOKoDm7jS5tONdNd59foDelZbg042gBRlrr4vnY4%2B1DcK%2BQYrspS1Q7wUs4tqjFwUFtYXUp%2BdNGnLRirp9y51vP7NgYwkvxIWEhVwg3fYh%2BM1OeBZUWKb0wbFgHtNCTJS80ii7TzG9pstisw1OlMHxEs53iuraQ2pMQgu%2F0P4oG7P6W7RlwBRBlJ%2FZO76iKhiC&X-Amz-Signature=8375153afa015cc7a18628dfa7108f585eb11238ea5d0b02fd6bca681869aeca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
