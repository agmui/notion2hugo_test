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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMIKQWJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2vxZtgQ8fSudL1vSrpTLdU3tRYzRHeW8c0Xg4kjTCWQIhAOAJpNxWqapNCM6Obi5ol36tvYkMxXwJASOeyF55dAp5KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI4NW18%2FPcU%2BI07Zwq3APie6SyLHU57P5hiNj4Zco2ypeZ7%2FWr0JGcNLWy5UbhBs3OIe4o0pDDNBGDRS0biQBI73wWYMd%2FrB0MS0lidxUK8V9frx1OvhIkUODsojkXrnuFpIJWiZDCSMwkA%2BbMT1WYQQeuVs1FVq%2B%2F8XH%2Fj3iqS5OMd%2Fcqrge3T6m0pwuPnQEqhjQzEwDCDYWTln3k82Bre%2F9MGSTo1qndDkuGy5N%2B4Q1ulFkycPksB%2Bq6Cyv8crJGyIFpQZ4HDnxkgt4zv8hWb2Wr6ZbJrzETMopoBl15keVN5RF0NP1gNeNlUupj9SVIVqW5Tb9NhX496M%2Fgnpze9dd0zTRB9bXwx2Aawk9KQsaj2RjFJbjiL88z37wupmFfUNAfow1NqLCohoVSDWwjMPF5SAeqVT%2FTuw%2BClexbA3mdgiu60NPNn8pyDl5lvjZHVA6Asbs22blPMric%2FRUuBvZCS8Wp8hB0daxfL7Mpqx6TmQqBNJiw5CaIcO2Wfph7xKVyVcMvSfT9qY4LvjHz%2FBWReQOhmJhsinoB%2FXCLC1vrtCmS1CzWKWksIRNuM4zsT1Jz%2FHMwwadK%2BX70ZJdf2wCDcfgOUOwcSKtWN2LxqnKneFFeVE4SuEv9VlwDZnM9xpwb215FKTWp9jDel6m9BjqkAXwmqcOhOZV92L%2FdSHvljCZyY17R90PezlkEDW%2BJY94rcAtw6zW0DfZut6bd2Wx0G2Vta31mqiZTAM5xj2VW4AmH4%2BmIzTetszF83uUnSE4TWlv6%2FMCzeRGWRQn38G%2BTk44ARbJ0Bm9%2FMzWaMW4XyNJFU%2FHbqQi3Db3La%2FXAkQbeILbRb2tNV2WyIr2VKZCl1PxBHKtX0X3pNLhVZjcIYa6pummd&X-Amz-Signature=6d988e1c49bb018a779bc88dd4d7753b2348cd1f43f676e390525976f98066fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMIKQWJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2vxZtgQ8fSudL1vSrpTLdU3tRYzRHeW8c0Xg4kjTCWQIhAOAJpNxWqapNCM6Obi5ol36tvYkMxXwJASOeyF55dAp5KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI4NW18%2FPcU%2BI07Zwq3APie6SyLHU57P5hiNj4Zco2ypeZ7%2FWr0JGcNLWy5UbhBs3OIe4o0pDDNBGDRS0biQBI73wWYMd%2FrB0MS0lidxUK8V9frx1OvhIkUODsojkXrnuFpIJWiZDCSMwkA%2BbMT1WYQQeuVs1FVq%2B%2F8XH%2Fj3iqS5OMd%2Fcqrge3T6m0pwuPnQEqhjQzEwDCDYWTln3k82Bre%2F9MGSTo1qndDkuGy5N%2B4Q1ulFkycPksB%2Bq6Cyv8crJGyIFpQZ4HDnxkgt4zv8hWb2Wr6ZbJrzETMopoBl15keVN5RF0NP1gNeNlUupj9SVIVqW5Tb9NhX496M%2Fgnpze9dd0zTRB9bXwx2Aawk9KQsaj2RjFJbjiL88z37wupmFfUNAfow1NqLCohoVSDWwjMPF5SAeqVT%2FTuw%2BClexbA3mdgiu60NPNn8pyDl5lvjZHVA6Asbs22blPMric%2FRUuBvZCS8Wp8hB0daxfL7Mpqx6TmQqBNJiw5CaIcO2Wfph7xKVyVcMvSfT9qY4LvjHz%2FBWReQOhmJhsinoB%2FXCLC1vrtCmS1CzWKWksIRNuM4zsT1Jz%2FHMwwadK%2BX70ZJdf2wCDcfgOUOwcSKtWN2LxqnKneFFeVE4SuEv9VlwDZnM9xpwb215FKTWp9jDel6m9BjqkAXwmqcOhOZV92L%2FdSHvljCZyY17R90PezlkEDW%2BJY94rcAtw6zW0DfZut6bd2Wx0G2Vta31mqiZTAM5xj2VW4AmH4%2BmIzTetszF83uUnSE4TWlv6%2FMCzeRGWRQn38G%2BTk44ARbJ0Bm9%2FMzWaMW4XyNJFU%2FHbqQi3Db3La%2FXAkQbeILbRb2tNV2WyIr2VKZCl1PxBHKtX0X3pNLhVZjcIYa6pummd&X-Amz-Signature=e3fc34826edfcebb1407ee5822e64464bcb09ed298892dd2e034c5ad8e57bf71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
