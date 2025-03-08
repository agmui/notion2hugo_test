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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWCMNGO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIG0q73qamD%2Fz9L3rl%2F3yyPrWaG1O0K9ezKEJkazD7MydAiAn%2FYwLN1woCdxt62uqZA8e7SD65n7t%2BufoGky9ePDQACr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMfSQXAcnAOiz8DfrwKtwD2oEm5N0fEcm5Wjiu5CTCR9pIrbLbDRKMdUsE1Y%2Fe%2FX2Zyr%2Fxyk7jhGq3Imro%2F7lSsUa3wegs2suewHQkfSutDu1avOmGAhE0fprxkRWJhpWvXrBUxMYywckb9Wk%2BHNsrBCzc5ssAcC6VPO6uqX6gyf%2FnVSaK22Z6ATmpIGalOUiN1lnP3nvoCjU0Cx5oc0%2Fv69V31Fpge0b%2BZsKiFixiuCvHi5tiAZwelAATkHOAYWqpclS9D8ilRvv6gR%2Fc%2FFY8IcnneajpGu1x3E%2BpVrX%2FWqjMCDvVAXVrxvATZl4ZyqSVKADGNBhb2mee4razpfR6NB7ZFeq84MmqlojC5mLnXERl9v9MnvqQYK383muuJ1CPUCYOD7PbAc3ESEOiob2zR0tYdpfj1tosp1Y1ADtDD8dPPWNZ76xOXVa81LM53HW%2BVX9s9AhpcUX8IWDm8OtUgmsJEbHDHSQyQX%2B321CxLBLibF91b4aQ5k1Zk5vqca5beIOZlsIv6X%2Fvz8dlN%2FLzmWzM60gvjo7VrYNfaPFTgYL6k%2FsN9N9B9eiJFrFbI6bEh0x66L4f4pL8TP107Q%2BxfnlzUp8oMnfSdabjnLtsSrM3LJVXXmGMe%2BrxUnKNjKr6QH2gcAIrHrsu6GUwh72vvgY6pgHkdDBNrfHTa5aSR70LX0pwKw%2FYkEPE5QpLnJ9Wnlt75SdJCuScqeKU01B3ECpcqqGow4HciVpObVBNd5hAsh0lEqlDhKbL9U6mCodzRkz2HgY5h0EJbBxMhMhVMAAly%2BO8kCnLuBnMdZz6svMeRBS7MQuxaxAZ2LsMLCG4fs8urj2nCBT3PUtxJso7FnZr5wd3CyI0SgG1EXARNCgyBEg7NJnG1HJG&X-Amz-Signature=4338940f92b8812c0348384e8dcf0e493fd17341901d40a2b6f7e9468f0fd76e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWCMNGO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIG0q73qamD%2Fz9L3rl%2F3yyPrWaG1O0K9ezKEJkazD7MydAiAn%2FYwLN1woCdxt62uqZA8e7SD65n7t%2BufoGky9ePDQACr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMfSQXAcnAOiz8DfrwKtwD2oEm5N0fEcm5Wjiu5CTCR9pIrbLbDRKMdUsE1Y%2Fe%2FX2Zyr%2Fxyk7jhGq3Imro%2F7lSsUa3wegs2suewHQkfSutDu1avOmGAhE0fprxkRWJhpWvXrBUxMYywckb9Wk%2BHNsrBCzc5ssAcC6VPO6uqX6gyf%2FnVSaK22Z6ATmpIGalOUiN1lnP3nvoCjU0Cx5oc0%2Fv69V31Fpge0b%2BZsKiFixiuCvHi5tiAZwelAATkHOAYWqpclS9D8ilRvv6gR%2Fc%2FFY8IcnneajpGu1x3E%2BpVrX%2FWqjMCDvVAXVrxvATZl4ZyqSVKADGNBhb2mee4razpfR6NB7ZFeq84MmqlojC5mLnXERl9v9MnvqQYK383muuJ1CPUCYOD7PbAc3ESEOiob2zR0tYdpfj1tosp1Y1ADtDD8dPPWNZ76xOXVa81LM53HW%2BVX9s9AhpcUX8IWDm8OtUgmsJEbHDHSQyQX%2B321CxLBLibF91b4aQ5k1Zk5vqca5beIOZlsIv6X%2Fvz8dlN%2FLzmWzM60gvjo7VrYNfaPFTgYL6k%2FsN9N9B9eiJFrFbI6bEh0x66L4f4pL8TP107Q%2BxfnlzUp8oMnfSdabjnLtsSrM3LJVXXmGMe%2BrxUnKNjKr6QH2gcAIrHrsu6GUwh72vvgY6pgHkdDBNrfHTa5aSR70LX0pwKw%2FYkEPE5QpLnJ9Wnlt75SdJCuScqeKU01B3ECpcqqGow4HciVpObVBNd5hAsh0lEqlDhKbL9U6mCodzRkz2HgY5h0EJbBxMhMhVMAAly%2BO8kCnLuBnMdZz6svMeRBS7MQuxaxAZ2LsMLCG4fs8urj2nCBT3PUtxJso7FnZr5wd3CyI0SgG1EXARNCgyBEg7NJnG1HJG&X-Amz-Signature=eff791d5722720b70252e5f7296b0ac29745a4837ccf98f83fb7cb8548cdbe7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
