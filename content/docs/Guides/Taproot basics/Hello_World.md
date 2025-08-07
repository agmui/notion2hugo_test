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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7DIBA6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAaA1IU3HeF9IQ%2BW%2FuDNYWzjXBcHvyclvW7X9fhYVn7JAiEAis8RL5ZNB%2FlUtt5tkqJLFnRUeh%2B0K5gmtxd6CcQcFaUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF4W3B6BqZtr6KHGCrcA7bFNCeZsE88fxjjdM3Gmx%2BER31p7iEH1LS58D1FDMYR7WMYopGRato3T3KDusMn1iQcBO31AYQ047uW7%2Bo22Aoy8Dt2WkSckxEVwZaPEDyXolIGYRp5o73hnzDrGulh%2FkfUg9l6tYKn8QMItrBRQn2WVAdqRrYfiA%2FQgbmQSwssQK%2BtxcPT%2BdKOs0QgxNwSG98DQESrNVaf9UPJv7IO7sIVV1xWu9nFGh22REKVC5FkwWorg6g1Ok%2BriFkmZ0YgE8ZLdSFWG2V696%2F0%2FwHDKsBPq%2Fnw3Bmidt2kryqhG57Z8NEJaxm%2FgUkKHQ7CXU4TeUoRf0ESrdW9PmbG%2FTyEK9KHOOzCcV%2FxnEPO3XV437XaMx3lO47p63wHpbJOgkKDPxJ2IW2S1NXIFlEN%2BewfKuFG6ksv%2FzsL634d1ry%2Fg0IXeLW2zaQhq5yyKybBApaS4P0fRAMn3VjorAWvsmhCPIPBfUvQxLRJYfsiGZgotvsWras6yyJjrlYV6AcdJw2N0Ae2V%2BHYLR0gwuIDPBwqgUoH%2Br8bKZ7VPFyL%2FPd2e1FSSMsLYWZkEJc6yps8Zo%2FB7IFmSZQW5UuoeTS%2FGHomht75FZaOdvtdf7r60Kwxjj1KRYLMAEmxzoOuraN5MNOI0sQGOqUBSG97nZqXffENZ3%2BoH3mu7ARlvrTez0qlEajUxdjFUz9TFIACs%2FFTLImxwBufpSQaROnbNtTbFAehN%2FSfj8kTbRosY%2BcvgYiwj4f%2BVZ3g3UCmA%2F2xPo8sgQqaVGNiQMy6FH0ehhwvF0WQHZ7RaznPBSIy3nvjR0RxPscmrNdIb2JNxDrhG0opQZJI6NZXCrUcow%2BnN05uIwX6lg5Fwdb3lDdlbV7%2B&X-Amz-Signature=8823b49b6527c9d8fa918c7b4cf538f7d73fc96650582e2ce8b097feb82a100c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A7DIBA6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAaA1IU3HeF9IQ%2BW%2FuDNYWzjXBcHvyclvW7X9fhYVn7JAiEAis8RL5ZNB%2FlUtt5tkqJLFnRUeh%2B0K5gmtxd6CcQcFaUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF4W3B6BqZtr6KHGCrcA7bFNCeZsE88fxjjdM3Gmx%2BER31p7iEH1LS58D1FDMYR7WMYopGRato3T3KDusMn1iQcBO31AYQ047uW7%2Bo22Aoy8Dt2WkSckxEVwZaPEDyXolIGYRp5o73hnzDrGulh%2FkfUg9l6tYKn8QMItrBRQn2WVAdqRrYfiA%2FQgbmQSwssQK%2BtxcPT%2BdKOs0QgxNwSG98DQESrNVaf9UPJv7IO7sIVV1xWu9nFGh22REKVC5FkwWorg6g1Ok%2BriFkmZ0YgE8ZLdSFWG2V696%2F0%2FwHDKsBPq%2Fnw3Bmidt2kryqhG57Z8NEJaxm%2FgUkKHQ7CXU4TeUoRf0ESrdW9PmbG%2FTyEK9KHOOzCcV%2FxnEPO3XV437XaMx3lO47p63wHpbJOgkKDPxJ2IW2S1NXIFlEN%2BewfKuFG6ksv%2FzsL634d1ry%2Fg0IXeLW2zaQhq5yyKybBApaS4P0fRAMn3VjorAWvsmhCPIPBfUvQxLRJYfsiGZgotvsWras6yyJjrlYV6AcdJw2N0Ae2V%2BHYLR0gwuIDPBwqgUoH%2Br8bKZ7VPFyL%2FPd2e1FSSMsLYWZkEJc6yps8Zo%2FB7IFmSZQW5UuoeTS%2FGHomht75FZaOdvtdf7r60Kwxjj1KRYLMAEmxzoOuraN5MNOI0sQGOqUBSG97nZqXffENZ3%2BoH3mu7ARlvrTez0qlEajUxdjFUz9TFIACs%2FFTLImxwBufpSQaROnbNtTbFAehN%2FSfj8kTbRosY%2BcvgYiwj4f%2BVZ3g3UCmA%2F2xPo8sgQqaVGNiQMy6FH0ehhwvF0WQHZ7RaznPBSIy3nvjR0RxPscmrNdIb2JNxDrhG0opQZJI6NZXCrUcow%2BnN05uIwX6lg5Fwdb3lDdlbV7%2B&X-Amz-Signature=df0b7b7e27b5ad1cb1b78840171866c109eab37f4e5f18362d72079e89254190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
