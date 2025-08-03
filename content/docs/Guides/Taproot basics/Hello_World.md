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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDCXOMU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFKXFm%2BpCsAT%2BuBfHyEcOWupNmuzJaafkqzZbixBTA8wIgfFXOWUiha2YYE6oCNXvqxHkPpBOJphefY3Jaxw3vGB0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAdn8Qc6kKzov6Md8yrcA6Xr8M67DC412xhdXCwu1n7sXjIGrzMkZiL4cHRGu%2BO4KkmpIiMC3fSgqPYpwXDEo86ANY9gsKmCwxzzDaiGB5IN8bZNjTQvm49173emlJy3Ls4im5lhFJy38EELLVexlZmZEcHiRyTe1eTtLmLvG1sAtJzBOxYPaEyGrBC%2FbARqduYhbWtLrZ7KM1rQYrBs3Ckh3ZkXgpvwmGlpZjUt7C%2FowkGkuyDleuBVny43HgCe4GhfXLfTG8rPtuiBnrvTuyB6EHjr25oqJhpaewQCTy9RVLGDAWCHnBl7GTL0SYKfeO%2B7KMNpd6mLC2r6lOyHK%2Fo6KHrpHonczzb2zZVdI2sa5LRT8U%2FzfVn5niuRATj8yG%2FJ6xSl%2FXmShUvnF87Dj1jqoYQzDqXljjmGNSy4NG7P3MQ5qeQPGhojec0lt5G6bvG6364xG2TQsOgc%2BZl4Bh%2B0fJ6L29O2PKn5U6flpKqRscwHVWJw2Wr%2BZLDgwGmcT7toc64ZTvRoE2QS1RtzuJQD%2Ff7OEJZNk86zTHfLIX504hZweoK8UGWZlgqIDRBspbBWeafH%2Bhyq1smJn3muH%2Bejswo9obPSSLL1aeCDv%2Bqoedg%2FHC6vFv89Daz%2BcmUFtAXknqaaQz%2FXlQW6ML2AusQGOqUBhfX10jDApyew0KBEw9%2BYznACn4dIdW%2BYY0fmWJGQ8XxgqrDc4chZCjkJIb2ZGbc%2Bl9wxPANcj4t9yo119s8GK9U4Idb898xjkcc%2F6aGgC3xVQbF%2BrQ997nNqcNJ3iVd37qIOBIFbQbdtdc6cHAm3AN2Ea0xBK8l6W6azALQF4P06rT2togtnmHFPfY0CNFKUNh4JMg8mS9Gj7XKPI80%2BRe1PACe%2F&X-Amz-Signature=fe2ac7fb5d16efbf45cdb5b2c2b299a8ed865c02591a7113600656ee07a079df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDCXOMU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFKXFm%2BpCsAT%2BuBfHyEcOWupNmuzJaafkqzZbixBTA8wIgfFXOWUiha2YYE6oCNXvqxHkPpBOJphefY3Jaxw3vGB0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAdn8Qc6kKzov6Md8yrcA6Xr8M67DC412xhdXCwu1n7sXjIGrzMkZiL4cHRGu%2BO4KkmpIiMC3fSgqPYpwXDEo86ANY9gsKmCwxzzDaiGB5IN8bZNjTQvm49173emlJy3Ls4im5lhFJy38EELLVexlZmZEcHiRyTe1eTtLmLvG1sAtJzBOxYPaEyGrBC%2FbARqduYhbWtLrZ7KM1rQYrBs3Ckh3ZkXgpvwmGlpZjUt7C%2FowkGkuyDleuBVny43HgCe4GhfXLfTG8rPtuiBnrvTuyB6EHjr25oqJhpaewQCTy9RVLGDAWCHnBl7GTL0SYKfeO%2B7KMNpd6mLC2r6lOyHK%2Fo6KHrpHonczzb2zZVdI2sa5LRT8U%2FzfVn5niuRATj8yG%2FJ6xSl%2FXmShUvnF87Dj1jqoYQzDqXljjmGNSy4NG7P3MQ5qeQPGhojec0lt5G6bvG6364xG2TQsOgc%2BZl4Bh%2B0fJ6L29O2PKn5U6flpKqRscwHVWJw2Wr%2BZLDgwGmcT7toc64ZTvRoE2QS1RtzuJQD%2Ff7OEJZNk86zTHfLIX504hZweoK8UGWZlgqIDRBspbBWeafH%2Bhyq1smJn3muH%2Bejswo9obPSSLL1aeCDv%2Bqoedg%2FHC6vFv89Daz%2BcmUFtAXknqaaQz%2FXlQW6ML2AusQGOqUBhfX10jDApyew0KBEw9%2BYznACn4dIdW%2BYY0fmWJGQ8XxgqrDc4chZCjkJIb2ZGbc%2Bl9wxPANcj4t9yo119s8GK9U4Idb898xjkcc%2F6aGgC3xVQbF%2BrQ997nNqcNJ3iVd37qIOBIFbQbdtdc6cHAm3AN2Ea0xBK8l6W6azALQF4P06rT2togtnmHFPfY0CNFKUNh4JMg8mS9Gj7XKPI80%2BRe1PACe%2F&X-Amz-Signature=3395545b9e6a30ea9db72ed64057f870433ced98bddc660e7489cc9090b22e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
