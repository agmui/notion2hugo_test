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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYJSWAG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIG%2FePJoKbriuSXB5895EtZQ1G7V7MKTmI1oLwxqh7iS%2BAiEApsmPDsaZk27ZPqpmRSVrvhy%2Fzs44zqnhOVAvXXNzOMcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDASI1JEypXloGEGIICrcA3pFC%2By69YSiN64HhrpaPgG7%2BsC7anOsfBmFI559GqkohbFOvtbeEpkDS%2F4AQ736EiOujiI6gO9YABa6KWB5%2BSkHCSMo%2FSnptCZaNHmPINDtF1M9MQFlZ%2BKovNoC4TRs3LoqwFZDNdC6O%2BT2VnLJFeeYthEdw3SEan10bkc1pPL1hKDQDMfppbKc6prtleiXM5xHkqQ3U%2B%2Fm2tw6Xfq45Y6ikPg6YTmEe0D9hVY34nUlwfKy6v%2FkInlsJUJfOYGnDaeLeLlPMRRsPbb2LmjUbvfZXEV8sezg%2B%2BgVsdN%2BDtSE810T280VmJdQ7%2FGz%2BaXuimnhbQBsWadZHAScYdiCni3EW%2BhAm8zppFmg%2Fl8xE2WEdGMbXZs3QroO3%2F%2FUH2IPjGkuJIUTvQE%2Bou0Rf4iyryKP5JkBJEJDZQgvHaR8K4exD7DZ%2BTiBCBaJdLScYH5fUedj8DL3%2BNjnHIBnT7aQBJ8qYSgp9sT7gLXn4xa1NU5mGmhuciAVVBDDqiqpI8J4jQt2JpW3H4AUqk%2BzAoED5KrKyWIAlfFenXI0%2BYoXOmrWw07Md4MwjU%2FvX3tNTBnEF5z8z7A4LHEhEMAZQFjxeeEPqb0Id1FeIjIMICqrFgAqNnufiMtP1JqxuQaUMJi8jr0GOqUBQFqiS3rwgWZQSdvHS%2Bx4FadkzaGJdYh2PjAcLkIMVQVTid8oRE%2FVwCSycuemMjfyekywWZ5Kyv46dUFWj9jXhDunaYt3ueCQcypA2T%2BHkYzvhpvLQVytsFdFZy%2BLPr5cNSCg1AMJflk1minzRMb7G7VcMxTihSZCNH%2Bo3fXsGQ3vQTliMOd5JV059km0456A7Htcx%2FvX14YWqO5yEf8JtIihpfty&X-Amz-Signature=ae3f8fa59199e208c32ea0114cb5bd1ae22ee0e416887b409111103646f3f889&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KYJSWAG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIG%2FePJoKbriuSXB5895EtZQ1G7V7MKTmI1oLwxqh7iS%2BAiEApsmPDsaZk27ZPqpmRSVrvhy%2Fzs44zqnhOVAvXXNzOMcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDASI1JEypXloGEGIICrcA3pFC%2By69YSiN64HhrpaPgG7%2BsC7anOsfBmFI559GqkohbFOvtbeEpkDS%2F4AQ736EiOujiI6gO9YABa6KWB5%2BSkHCSMo%2FSnptCZaNHmPINDtF1M9MQFlZ%2BKovNoC4TRs3LoqwFZDNdC6O%2BT2VnLJFeeYthEdw3SEan10bkc1pPL1hKDQDMfppbKc6prtleiXM5xHkqQ3U%2B%2Fm2tw6Xfq45Y6ikPg6YTmEe0D9hVY34nUlwfKy6v%2FkInlsJUJfOYGnDaeLeLlPMRRsPbb2LmjUbvfZXEV8sezg%2B%2BgVsdN%2BDtSE810T280VmJdQ7%2FGz%2BaXuimnhbQBsWadZHAScYdiCni3EW%2BhAm8zppFmg%2Fl8xE2WEdGMbXZs3QroO3%2F%2FUH2IPjGkuJIUTvQE%2Bou0Rf4iyryKP5JkBJEJDZQgvHaR8K4exD7DZ%2BTiBCBaJdLScYH5fUedj8DL3%2BNjnHIBnT7aQBJ8qYSgp9sT7gLXn4xa1NU5mGmhuciAVVBDDqiqpI8J4jQt2JpW3H4AUqk%2BzAoED5KrKyWIAlfFenXI0%2BYoXOmrWw07Md4MwjU%2FvX3tNTBnEF5z8z7A4LHEhEMAZQFjxeeEPqb0Id1FeIjIMICqrFgAqNnufiMtP1JqxuQaUMJi8jr0GOqUBQFqiS3rwgWZQSdvHS%2Bx4FadkzaGJdYh2PjAcLkIMVQVTid8oRE%2FVwCSycuemMjfyekywWZ5Kyv46dUFWj9jXhDunaYt3ueCQcypA2T%2BHkYzvhpvLQVytsFdFZy%2BLPr5cNSCg1AMJflk1minzRMb7G7VcMxTihSZCNH%2Bo3fXsGQ3vQTliMOd5JV059km0456A7Htcx%2FvX14YWqO5yEf8JtIihpfty&X-Amz-Signature=2275dce76da4ce6904bc68a5cb785c26a6dffeff1a7efbfb2de60028399e9b20&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
