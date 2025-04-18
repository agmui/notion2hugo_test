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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MQZUAV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAp9mIpJ1HiBzyLstEyypEVb1ipjvk4GxOqwl7%2FqUKoAIgYeuiFU%2F6ut15vfZmYTETzh4uTDGaUc2%2BCs%2FR3G4XNKUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOLQVadVf1udlLOzRSrcAyx5o%2B0yQS3Nteus%2BJg0jChYM0L2HpmlqILhO4YeOlaKBudWuguCsEg0pdMd1sbHiQf%2Fn85ShS9vF6psN0jOgqGbZt%2B6PFp0dfyZpdLnJsUBQTuWIPkakkK9MgO0FgjBuyLtFMhlkv0Ca8%2FL1l%2BMTqq2Hqg3jZRm9v5ZhctC1RW8yPRPSPoTBjACHfihRZ4YnML4HGA2Ldo2luZnUywh%2BHLKv5eouhfg30%2Bv9ws3WjdiNwRLvv7YHdhLbLCeKaaaveDlomsEAbUfc0HXo9kwR6wTnyCPmtCtOtQYyJA09cs5jX7Q5422YGoD9KSZQ7oCOje4YBVCuDvvHCmUpFxEi5PgUJelgsI%2BHaTW4bU5m63%2BpPJR3i4lRpj7yqr43ky1XGbPI9myjMnzY94aSvtZlDqA%2B27OUdgtKxjD7t22ECjdQaDopAWCuRKQ6kYPTTx7Gl7a83mmTjmZtEvLVEqAojCkBSqpLVhUsp4FfF8L53wPscnFor2SBXQUZ%2Fq2x%2FSmTnKN3C5Ny%2F1cuZOiUX6UnwIPsHep8hpW2XmrKUReWVGxNVTZzzBxpYKgRY96QHSzovC0S5hFs90oBrPMro2wr4I6lMQtZJlEYuUwjOlSgJrn8ZlRWfAkF6rvWfxyMIawisAGOqUBu9DJfAZzs%2BxTVjwGz7Bretr%2Fjiefqq795v3pxQf9UnMcQsOt4Bffnx7uZ6xFmGHuRBNr401IrbXDQ6xQPoFhvK%2BOP%2FIb8DdrCv6L8B0fm9K6R1dq2Cic7FjllIo1D0Bwr%2B7omxt02n%2BkpzXINd2A%2FaKaDElXLyj0NSw9cFeBZUHq032EM2fZgZTP2m9vTOUdEruR8jX8zmmstY%2FvwuXJ%2Bpw1cwOQ&X-Amz-Signature=b269d971c7e06f78bbbe83d924b0929b718f00232a989b81354e32fbc9bf4321&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MQZUAV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAp9mIpJ1HiBzyLstEyypEVb1ipjvk4GxOqwl7%2FqUKoAIgYeuiFU%2F6ut15vfZmYTETzh4uTDGaUc2%2BCs%2FR3G4XNKUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOLQVadVf1udlLOzRSrcAyx5o%2B0yQS3Nteus%2BJg0jChYM0L2HpmlqILhO4YeOlaKBudWuguCsEg0pdMd1sbHiQf%2Fn85ShS9vF6psN0jOgqGbZt%2B6PFp0dfyZpdLnJsUBQTuWIPkakkK9MgO0FgjBuyLtFMhlkv0Ca8%2FL1l%2BMTqq2Hqg3jZRm9v5ZhctC1RW8yPRPSPoTBjACHfihRZ4YnML4HGA2Ldo2luZnUywh%2BHLKv5eouhfg30%2Bv9ws3WjdiNwRLvv7YHdhLbLCeKaaaveDlomsEAbUfc0HXo9kwR6wTnyCPmtCtOtQYyJA09cs5jX7Q5422YGoD9KSZQ7oCOje4YBVCuDvvHCmUpFxEi5PgUJelgsI%2BHaTW4bU5m63%2BpPJR3i4lRpj7yqr43ky1XGbPI9myjMnzY94aSvtZlDqA%2B27OUdgtKxjD7t22ECjdQaDopAWCuRKQ6kYPTTx7Gl7a83mmTjmZtEvLVEqAojCkBSqpLVhUsp4FfF8L53wPscnFor2SBXQUZ%2Fq2x%2FSmTnKN3C5Ny%2F1cuZOiUX6UnwIPsHep8hpW2XmrKUReWVGxNVTZzzBxpYKgRY96QHSzovC0S5hFs90oBrPMro2wr4I6lMQtZJlEYuUwjOlSgJrn8ZlRWfAkF6rvWfxyMIawisAGOqUBu9DJfAZzs%2BxTVjwGz7Bretr%2Fjiefqq795v3pxQf9UnMcQsOt4Bffnx7uZ6xFmGHuRBNr401IrbXDQ6xQPoFhvK%2BOP%2FIb8DdrCv6L8B0fm9K6R1dq2Cic7FjllIo1D0Bwr%2B7omxt02n%2BkpzXINd2A%2FaKaDElXLyj0NSw9cFeBZUHq032EM2fZgZTP2m9vTOUdEruR8jX8zmmstY%2FvwuXJ%2Bpw1cwOQ&X-Amz-Signature=9a82034af04f638a5322ec5f38cc08013986ab6d7ae8000dd962939a9b550d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
