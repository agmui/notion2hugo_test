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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POQKDW4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxvaMQ8up%2FWQTBvQ%2Fo1L5COb9Yw1TJ6nCLA7StMKJ6gwIgP5S4RSgQSuA%2FVOiYF7G88DkUwod7iwABfwaQ8h6gG%2Bwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFbTp4%2FnLvlOQofn5ircA0sZ8sJf19nSwE4ZDogu00fjxAgH6u2V%2FSMf%2BNWP5F8ntyOiV458gxRjcdozVMoPGhkfutlUWH5cSmOK72f7O6D5X50ln5nzCMvupYZwFZo9%2BbBvAbhfrbNFpdIR%2Fdq%2FZNk1cGGAM8nsyBWzYGbL1zkETHEG4oa72z2vrr1PgQcnWVvNq9gE40jR2tAC0K324PEMu6sytPUSKBxBq6JnWaP9cDfI5E%2FdbI9jXTFOHKSjUIaYtq1Oib4frqKVk52gESsT%2Fr840UYK7%2BpPXGm3hWxcaBi33hLWpIxMYIWk5I5eS%2FJeEQfPgVZIU4X5CsXCusd2geo9QSPjtLfC6eeVVzx%2B2EDkYnnoqnIbYLSstj9Igg8ONWHBpLlSHwemo%2BIC3i0seTQjQTAFrommSWCz1f3izj%2FFfO5fAKNdTNmLjqVclzea6JHM%2F%2F2yCDKoCmfJdL%2F5LjbFfhEzTHfNnWB45ZEAVUlGVLr9bFZgLQLQOCdunqHUv5l8WHEv7Mpk987TqiMV8IrNAv0qXkRVlDLh9XsoGd4ZUffLGzu0%2BholAGr6PYjSTODD9D6BJURyq%2F2qOoSAMe745ix7Xo2pEByy7Eh0helq29mekv7IS85y9h8HIawodGCUYZnEx2iOMNaBkcIGOqUBlheLdKG8tdZEK4jUeAcRby2SXK6aK1Z2ik6BrAg72I5N0dy4dfOrdvLFe0PdUjiSy6EAtfj11dFSWoXy7y99%2BXk2EkYcQshelvYm0OSQM6mO52n1PcUnYUkrQDja2WfDN0Li3zYgLTzsyGsML14kJqt9gAn%2BKZio0UMOLZo13xjeSQVoHNXPmiB2WJsD30I%2FOv8Z8vNjBrnIYf2%2Fv%2FaF%2BepstCBE&X-Amz-Signature=cd15fbdc21364ef8f2e7153d9adefad55c33c202c0cf125d0d4b384afffd4a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667POQKDW4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxvaMQ8up%2FWQTBvQ%2Fo1L5COb9Yw1TJ6nCLA7StMKJ6gwIgP5S4RSgQSuA%2FVOiYF7G88DkUwod7iwABfwaQ8h6gG%2Bwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFbTp4%2FnLvlOQofn5ircA0sZ8sJf19nSwE4ZDogu00fjxAgH6u2V%2FSMf%2BNWP5F8ntyOiV458gxRjcdozVMoPGhkfutlUWH5cSmOK72f7O6D5X50ln5nzCMvupYZwFZo9%2BbBvAbhfrbNFpdIR%2Fdq%2FZNk1cGGAM8nsyBWzYGbL1zkETHEG4oa72z2vrr1PgQcnWVvNq9gE40jR2tAC0K324PEMu6sytPUSKBxBq6JnWaP9cDfI5E%2FdbI9jXTFOHKSjUIaYtq1Oib4frqKVk52gESsT%2Fr840UYK7%2BpPXGm3hWxcaBi33hLWpIxMYIWk5I5eS%2FJeEQfPgVZIU4X5CsXCusd2geo9QSPjtLfC6eeVVzx%2B2EDkYnnoqnIbYLSstj9Igg8ONWHBpLlSHwemo%2BIC3i0seTQjQTAFrommSWCz1f3izj%2FFfO5fAKNdTNmLjqVclzea6JHM%2F%2F2yCDKoCmfJdL%2F5LjbFfhEzTHfNnWB45ZEAVUlGVLr9bFZgLQLQOCdunqHUv5l8WHEv7Mpk987TqiMV8IrNAv0qXkRVlDLh9XsoGd4ZUffLGzu0%2BholAGr6PYjSTODD9D6BJURyq%2F2qOoSAMe745ix7Xo2pEByy7Eh0helq29mekv7IS85y9h8HIawodGCUYZnEx2iOMNaBkcIGOqUBlheLdKG8tdZEK4jUeAcRby2SXK6aK1Z2ik6BrAg72I5N0dy4dfOrdvLFe0PdUjiSy6EAtfj11dFSWoXy7y99%2BXk2EkYcQshelvYm0OSQM6mO52n1PcUnYUkrQDja2WfDN0Li3zYgLTzsyGsML14kJqt9gAn%2BKZio0UMOLZo13xjeSQVoHNXPmiB2WJsD30I%2FOv8Z8vNjBrnIYf2%2Fv%2FaF%2BepstCBE&X-Amz-Signature=ed6857b600294d9e661bbba4d6384d5fd1ce2f09cca436a28d18a0cc12083553&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
