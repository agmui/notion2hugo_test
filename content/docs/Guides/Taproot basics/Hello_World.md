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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFUZPTP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmT%2BfUrfefHLm8zRPQmteDysxcpDYIsHkGxYXedILdtAiEAkNG65b79Nd2QdbDT612aRC2xYp%2BQ4MeeJUPpUamRmvMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBHZCTEtuXKpuffGrSrcA5%2B3COruoPYiysBellWJ6hY9gquEDlVCW5Uroy1JqkLymHY1vx%2FreXVHmTBM9zRKGPsKtgta9v2XS7JapMKnJhXfyY5IpqE0lF4VkJjITwj2eqHCK8rl9irBp4CftIMM1mFAqMF3PVy1FSUE2Pntr7UTf41hQmf%2FXy7xRFv8373qKk%2BzYMjycAiFW5XjQtBxWa63c1ZGUaIWOgFSaxcM9nKtGf3L5iM9RkyvEUcultl0JXxKnfMq5XE1MR0B5begAxPgwpQSxtxJdMMMVqE4M34rt6uosn%2FRH1ZiQjVVRAadu5AxZq%2B4Hhjc%2FV4hHUdsoP%2Fm90KsVr9AXXYAoD%2B9IQ96xJ%2BWbfjHemeiecdZrcRdHseilddLHD%2BWh%2Fb7r6P2cyVFima17hdpKu83EbCtqZGMukyBtk%2Bljj0Qy7ILNw3jnAq9vqfPmEYTykOYVEWlNY5eJwcsrl3BFhD3biR1rDYeZ791ijG6jYQoWd3sp3SCGNxlJKw%2FyMbj2KO0V6OTyvi2L9R6dvKSXlMZ79YggPS0ejLpu93A9yXydpM%2BMmTgRhJvIIQXrmFOqbQx3nIRW4EWfaQabbX%2Bx%2BoUkI%2FUsy1obLlmxK4VnjXHj1Td%2BZd%2F44oXDK7BgfDIte1SMMikzcMGOqUBIvjGrGxqkEji0xWIYGI48GxcWgumWtofSIbvW%2FJN0DySVuKscjmoC0u6nQPghjbU8%2F2ytawWbobR7Oc7sYwoRVfxMRS8rHrWNMfY%2FjZ2snx10J%2B6NlZzXZl%2Bsg9F1dVhIqSksGwuWwB287Zm48i36YSXjNPTZsK5Hk0my6cb4XrOr4shkJo3ycinxsZswFf1k1Ral12UtIMItcqaZtDpaPTxwl2E&X-Amz-Signature=3cf86b506e578d2dce4084d6be2d53b3fbc1935be75ff58816954a07cfad3000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTFUZPTP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmT%2BfUrfefHLm8zRPQmteDysxcpDYIsHkGxYXedILdtAiEAkNG65b79Nd2QdbDT612aRC2xYp%2BQ4MeeJUPpUamRmvMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBHZCTEtuXKpuffGrSrcA5%2B3COruoPYiysBellWJ6hY9gquEDlVCW5Uroy1JqkLymHY1vx%2FreXVHmTBM9zRKGPsKtgta9v2XS7JapMKnJhXfyY5IpqE0lF4VkJjITwj2eqHCK8rl9irBp4CftIMM1mFAqMF3PVy1FSUE2Pntr7UTf41hQmf%2FXy7xRFv8373qKk%2BzYMjycAiFW5XjQtBxWa63c1ZGUaIWOgFSaxcM9nKtGf3L5iM9RkyvEUcultl0JXxKnfMq5XE1MR0B5begAxPgwpQSxtxJdMMMVqE4M34rt6uosn%2FRH1ZiQjVVRAadu5AxZq%2B4Hhjc%2FV4hHUdsoP%2Fm90KsVr9AXXYAoD%2B9IQ96xJ%2BWbfjHemeiecdZrcRdHseilddLHD%2BWh%2Fb7r6P2cyVFima17hdpKu83EbCtqZGMukyBtk%2Bljj0Qy7ILNw3jnAq9vqfPmEYTykOYVEWlNY5eJwcsrl3BFhD3biR1rDYeZ791ijG6jYQoWd3sp3SCGNxlJKw%2FyMbj2KO0V6OTyvi2L9R6dvKSXlMZ79YggPS0ejLpu93A9yXydpM%2BMmTgRhJvIIQXrmFOqbQx3nIRW4EWfaQabbX%2Bx%2BoUkI%2FUsy1obLlmxK4VnjXHj1Td%2BZd%2F44oXDK7BgfDIte1SMMikzcMGOqUBIvjGrGxqkEji0xWIYGI48GxcWgumWtofSIbvW%2FJN0DySVuKscjmoC0u6nQPghjbU8%2F2ytawWbobR7Oc7sYwoRVfxMRS8rHrWNMfY%2FjZ2snx10J%2B6NlZzXZl%2Bsg9F1dVhIqSksGwuWwB287Zm48i36YSXjNPTZsK5Hk0my6cb4XrOr4shkJo3ycinxsZswFf1k1Ral12UtIMItcqaZtDpaPTxwl2E&X-Amz-Signature=cb2cf2f10a8d3a390cc572aa26a01268f52d634246f2b9d2bea33a7614e88ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
