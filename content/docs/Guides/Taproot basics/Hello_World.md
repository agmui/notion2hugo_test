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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4AOYFO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdIZy19Tuf6iAs1R9lenx5xb7eWR98bzTWq3bcYgGc%2BAiBgLfXUGXSYG2PxJNVb6Kh5zG7j3TkAMvioAuXA%2Frb2eSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM4nskmB9k0M59DLqAKtwDruThKbdZLccc3NIUT8NqIIGYJb8yzR8WxJPbUQtWl2en3vdWyuy0oXlC4Ke7ieqdGfSCyoQO%2BoyEBX02fC%2FKubegGDb%2FiB41U%2BK5yPwimagwsGxtwYeAFnbSJ7qdbQnazMdRcHGTWQNCnKxzqdOIFe1pXsXsAS43T1IhYdmokTEajNlDGFxAOW840Y96mlWS5YqZE9nOQYwKtAwSnMg%2BNwVjVTkcg%2FbnwqFjWiI2AeknCLd%2BkCDy%2B0m5FUxhYg0d5SFlFBDk9E2rG4xsRQB4XGAz5LgLbAvrzdoxMLpytj2u5o6whUc5G3QH4PqTwyQevBGI3akRi0cLmPtVa86KYQCnnAtCOug7HWs0d1rqCbKxCBjLdVhdq7OU1sINAmc4%2FMGVWhaV1Ly15GP0%2Bwe80oQ5jn%2Bda0iTmfSA1LFxv72tNwdnh8DIeJfcAvJl8B1OeeIcoHuHtwiIlL5cAJFbiqnhLpnYCnfRKk6BmlNDLsKMgo%2BcPCwnayuf%2BiWKlpv9QJltJ5GtY0Uc9W8MeRBp6AO6zh5N50LdFDgZZM2ALrRjq4EHYpmfiW35qYHe0QwothyjGVzrN%2FqmweEqYmTF11KScYWIV4%2BeTZZt2XDO5ZpcAgxjWDVT8fJANkQwi53dvgY6pgGS0onrvjQDuX5mwIKRJwq7tjZ1ONgVgzi%2BqtBNyk9ioT6mMsD5pI2YsouGdHj5k8v5dCJNuaGkdvBUPWIadf7UGuYtqr1Mkml6%2B7JFE3mcTgSGByMd1JhKVwRUXWfPC73Ovyq68zguM1pqIlHF4Qs5s%2BBPlxeh%2F2hfbxw%2FIftnwNslotbT1XUgjp5E34V7U9DfvwJMX1%2BG4quRQcCsKBO%2FM3aO%2Fi5Z&X-Amz-Signature=3745744295ac6928201db1016e087f5b87d5daf0376c9f33bc4321efd23b33fa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4AOYFO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdIZy19Tuf6iAs1R9lenx5xb7eWR98bzTWq3bcYgGc%2BAiBgLfXUGXSYG2PxJNVb6Kh5zG7j3TkAMvioAuXA%2Frb2eSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM4nskmB9k0M59DLqAKtwDruThKbdZLccc3NIUT8NqIIGYJb8yzR8WxJPbUQtWl2en3vdWyuy0oXlC4Ke7ieqdGfSCyoQO%2BoyEBX02fC%2FKubegGDb%2FiB41U%2BK5yPwimagwsGxtwYeAFnbSJ7qdbQnazMdRcHGTWQNCnKxzqdOIFe1pXsXsAS43T1IhYdmokTEajNlDGFxAOW840Y96mlWS5YqZE9nOQYwKtAwSnMg%2BNwVjVTkcg%2FbnwqFjWiI2AeknCLd%2BkCDy%2B0m5FUxhYg0d5SFlFBDk9E2rG4xsRQB4XGAz5LgLbAvrzdoxMLpytj2u5o6whUc5G3QH4PqTwyQevBGI3akRi0cLmPtVa86KYQCnnAtCOug7HWs0d1rqCbKxCBjLdVhdq7OU1sINAmc4%2FMGVWhaV1Ly15GP0%2Bwe80oQ5jn%2Bda0iTmfSA1LFxv72tNwdnh8DIeJfcAvJl8B1OeeIcoHuHtwiIlL5cAJFbiqnhLpnYCnfRKk6BmlNDLsKMgo%2BcPCwnayuf%2BiWKlpv9QJltJ5GtY0Uc9W8MeRBp6AO6zh5N50LdFDgZZM2ALrRjq4EHYpmfiW35qYHe0QwothyjGVzrN%2FqmweEqYmTF11KScYWIV4%2BeTZZt2XDO5ZpcAgxjWDVT8fJANkQwi53dvgY6pgGS0onrvjQDuX5mwIKRJwq7tjZ1ONgVgzi%2BqtBNyk9ioT6mMsD5pI2YsouGdHj5k8v5dCJNuaGkdvBUPWIadf7UGuYtqr1Mkml6%2B7JFE3mcTgSGByMd1JhKVwRUXWfPC73Ovyq68zguM1pqIlHF4Qs5s%2BBPlxeh%2F2hfbxw%2FIftnwNslotbT1XUgjp5E34V7U9DfvwJMX1%2BG4quRQcCsKBO%2FM3aO%2Fi5Z&X-Amz-Signature=24f424f494e250594dc89eda1338d8f91f86041897db29232f3b478adfd7d67d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
