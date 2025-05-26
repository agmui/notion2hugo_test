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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJVLWE2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgwMeprz3TZN7Y4ij%2FgGr7BR1xRS%2Fvy%2BYt4zqrJlnAVAIgL9wnq5MleJmYBtFaLqx3YZ7f1CHQLlgLO9PT7QHfoZ0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL3c26blSoHalpPA8SrcA4vdOYty%2FsbCYVAEq8TE1fmTgINm6LFT4e2zcVtz%2Fj4DnpB8oTg7DZ4tkqrtFN9D169%2BbPzapJuQ1TDSnlvw3j8TxSF8oXk9erR7j8Zk7lKYP1DkNzVMRJfuCfCon4lhmrzeXZccuMXJdZoSKBh3yuN8AmYsbklZL8ZYxrJonGDbrmxNLBqoK5YSgKJHhtzM0CGr1CBGCg70IjGEBFLFO%2BWNpOFsIEHtKblhFhyBv68Kqz4JUdFKfIHYiZxIP%2BU0LzuvyaR%2BAEce%2FIoR5jxge7dKz%2F4VA4nUaEb68s1no8As2AOflEkcAohEPxCOUjCHjsE5owr1ecx6tZJ%2F0uPTXwZHKy2h3JrJb8I5dzgYU0aQNa5TA4FuJtUDPTu3%2BFXfWpG9cKYyEkuo8zN%2FPsb33CRS%2FRgVVdO96nkkvvqSvyWDJ5GRjQFIfB7K26GV8sdh%2BpXh4qk0IllF1z%2BtBsTiDIwYWtfRxiv2wavmJ5mwXXZjXLe10i7OMQWS6dhjl3N%2Bm5ofFWkzVWQvnpshYkZhZTR0ALBmYg5rSFG21SYNMIGwl%2BEY1YSVwrDVuinlvrsaFsU4z9%2BmTuMUf2gEVaJ%2FBwTeAM8K%2BJofIGcXKzbhUsZ336p7SUjowTa%2FeSgCMO%2Bq0sEGOqUB1AoG12xClcY9woLc3c1rFRKRwsqDOC6HcThAENvtUz2mKvc8W7uoPyw%2F7VEdiWN0MsjEIX4tlyQNG3Rp653BKzeG0MQN4cIewc8SNlQVMUIzWUB77p9IecAEhPFkLPayDN0K23W%2F7Yxgrb1qza%2BdB7pHPgAH9cRSuM6n%2FBSLQ3sXlj2qGWxVxqXRAJrTfqvPCNZSGCVWgqgKEFqrJdc7Z1BhWCWH&X-Amz-Signature=d8a54cd6661007f8598e81105b6bd8da417718bdce58bab4ea809a5b929b1985&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJVLWE2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgwMeprz3TZN7Y4ij%2FgGr7BR1xRS%2Fvy%2BYt4zqrJlnAVAIgL9wnq5MleJmYBtFaLqx3YZ7f1CHQLlgLO9PT7QHfoZ0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL3c26blSoHalpPA8SrcA4vdOYty%2FsbCYVAEq8TE1fmTgINm6LFT4e2zcVtz%2Fj4DnpB8oTg7DZ4tkqrtFN9D169%2BbPzapJuQ1TDSnlvw3j8TxSF8oXk9erR7j8Zk7lKYP1DkNzVMRJfuCfCon4lhmrzeXZccuMXJdZoSKBh3yuN8AmYsbklZL8ZYxrJonGDbrmxNLBqoK5YSgKJHhtzM0CGr1CBGCg70IjGEBFLFO%2BWNpOFsIEHtKblhFhyBv68Kqz4JUdFKfIHYiZxIP%2BU0LzuvyaR%2BAEce%2FIoR5jxge7dKz%2F4VA4nUaEb68s1no8As2AOflEkcAohEPxCOUjCHjsE5owr1ecx6tZJ%2F0uPTXwZHKy2h3JrJb8I5dzgYU0aQNa5TA4FuJtUDPTu3%2BFXfWpG9cKYyEkuo8zN%2FPsb33CRS%2FRgVVdO96nkkvvqSvyWDJ5GRjQFIfB7K26GV8sdh%2BpXh4qk0IllF1z%2BtBsTiDIwYWtfRxiv2wavmJ5mwXXZjXLe10i7OMQWS6dhjl3N%2Bm5ofFWkzVWQvnpshYkZhZTR0ALBmYg5rSFG21SYNMIGwl%2BEY1YSVwrDVuinlvrsaFsU4z9%2BmTuMUf2gEVaJ%2FBwTeAM8K%2BJofIGcXKzbhUsZ336p7SUjowTa%2FeSgCMO%2Bq0sEGOqUB1AoG12xClcY9woLc3c1rFRKRwsqDOC6HcThAENvtUz2mKvc8W7uoPyw%2F7VEdiWN0MsjEIX4tlyQNG3Rp653BKzeG0MQN4cIewc8SNlQVMUIzWUB77p9IecAEhPFkLPayDN0K23W%2F7Yxgrb1qza%2BdB7pHPgAH9cRSuM6n%2FBSLQ3sXlj2qGWxVxqXRAJrTfqvPCNZSGCVWgqgKEFqrJdc7Z1BhWCWH&X-Amz-Signature=0bb9fd21ea0acdc8c909288f73fd5bd3a81400ee58daf972dc086f0a3d44a551&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
