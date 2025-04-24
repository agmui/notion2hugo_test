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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMU3QQE6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICySAk4yCDOyQl6ff%2BWbFSs4PEZAQo6gArrOsrZNkdAJAiEAvwPCprc5xc8YBctimOYtNQSz2mQaogTLsXgUnP7EMAsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDAEXLVcdzlkZud4ESrcA9r3ju1w4OCs40ItbKMn%2FK%2B9PxdF2%2BkFlYF4CD0KgRRGRO%2FPj%2BM3iWBtIWcZnr2KWBZ%2Fkd0KzGKL%2B%2B2jE3AcDLaC%2BFNfkcba5v8XuFeeh%2FDGEmmw86cgBDVAG%2F2pHuEoJ%2Frsgzl3FKOjQTkRP%2FoWVNY5NgI1dxfhyAl6NQViNq6KKTq66pADJtIAU2TKMy2sVeb65nyB3lW9ZaXYPy8S7bhXpJ%2Br1tCcLduGi9NfECvg%2F0k1pwlv9GCIN1z0OyN%2FsSILMsAH6dFLFJVSpLjvRaqJaNSeHLZxMdhCX7i%2B4lVtYCssr%2B0bnMtCApbhSNJ%2FtHe0m0Kp9dV0UcwNOWHHT5mIc00TOHOAOicYonTfFr%2FVcFWHqJHL0IOav9BCInDCdELb2%2BbY7a9v3GKwuvbIxpE9uov7FO1tKUqHE%2FPs%2BkuyVv1PnPVLrIhsjcuQFHvY8pWqftXKDGJTBL1WyBtL2f3C9ERBMfaNhObl1iUqV6LRGPwLwQTKG04CceH2pmDdt%2FCXMVUPH4VGA66zw3y6RPzYffWy2nTPcuyfbtEgIvS7ddcBa%2Fb3Ig5TBPWNIiS%2FUR2RsVYzLgfBxRM9pez%2BLA5wlw2NqyRmnkYwf5vpEM8el%2BJea%2F7hkXQk%2Bb8%2FMJOkqsAGOqUBEpgfRdwOMva5jzuoFqEP0Y%2Band7cGtysLZws4%2BH%2B9M%2BoO4fnQMYKaVVU95z%2BxyRqSc%2BqjLTsv94oyc3Z7Np0lRpIxwdZQp6L0QOCjrT6d80tbh%2FjF0uhJgCUNogkzf8k15%2Fh2vaVWxsU32IfndvRRK1WjCpl5Ed4rFNCXx4UQDabc2%2FQYn%2Fs3TFRavWorTgDDifW%2Bw8E8UjkZ0DzH%2BEA9hRNh7eA&X-Amz-Signature=8ffa248e0aae9ddb079ee63fe03a8dd020321c0fbb55e8c654fc4193d5889091&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMU3QQE6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICySAk4yCDOyQl6ff%2BWbFSs4PEZAQo6gArrOsrZNkdAJAiEAvwPCprc5xc8YBctimOYtNQSz2mQaogTLsXgUnP7EMAsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDAEXLVcdzlkZud4ESrcA9r3ju1w4OCs40ItbKMn%2FK%2B9PxdF2%2BkFlYF4CD0KgRRGRO%2FPj%2BM3iWBtIWcZnr2KWBZ%2Fkd0KzGKL%2B%2B2jE3AcDLaC%2BFNfkcba5v8XuFeeh%2FDGEmmw86cgBDVAG%2F2pHuEoJ%2Frsgzl3FKOjQTkRP%2FoWVNY5NgI1dxfhyAl6NQViNq6KKTq66pADJtIAU2TKMy2sVeb65nyB3lW9ZaXYPy8S7bhXpJ%2Br1tCcLduGi9NfECvg%2F0k1pwlv9GCIN1z0OyN%2FsSILMsAH6dFLFJVSpLjvRaqJaNSeHLZxMdhCX7i%2B4lVtYCssr%2B0bnMtCApbhSNJ%2FtHe0m0Kp9dV0UcwNOWHHT5mIc00TOHOAOicYonTfFr%2FVcFWHqJHL0IOav9BCInDCdELb2%2BbY7a9v3GKwuvbIxpE9uov7FO1tKUqHE%2FPs%2BkuyVv1PnPVLrIhsjcuQFHvY8pWqftXKDGJTBL1WyBtL2f3C9ERBMfaNhObl1iUqV6LRGPwLwQTKG04CceH2pmDdt%2FCXMVUPH4VGA66zw3y6RPzYffWy2nTPcuyfbtEgIvS7ddcBa%2Fb3Ig5TBPWNIiS%2FUR2RsVYzLgfBxRM9pez%2BLA5wlw2NqyRmnkYwf5vpEM8el%2BJea%2F7hkXQk%2Bb8%2FMJOkqsAGOqUBEpgfRdwOMva5jzuoFqEP0Y%2Band7cGtysLZws4%2BH%2B9M%2BoO4fnQMYKaVVU95z%2BxyRqSc%2BqjLTsv94oyc3Z7Np0lRpIxwdZQp6L0QOCjrT6d80tbh%2FjF0uhJgCUNogkzf8k15%2Fh2vaVWxsU32IfndvRRK1WjCpl5Ed4rFNCXx4UQDabc2%2FQYn%2Fs3TFRavWorTgDDifW%2Bw8E8UjkZ0DzH%2BEA9hRNh7eA&X-Amz-Signature=5404c83cca74e25460a61066a18b56626077cfa8a831defe5fca018a32de98f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
