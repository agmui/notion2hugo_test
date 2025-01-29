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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMASCC2Z%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd7R0SrsDhIMyYi2jmp%2BIhaf2ewADr9MCsX73FThMRvAiEAuiOADgxcwQePYVRF2qlcYXN4BZhaGuKDkol5V9qEsWQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBp6mXtnbi90T1D5aircA%2BmJLHdZTVe5a88%2Ft4BaJombvf4LglJTnGJvtNjlzqjC7nxH228DIFIrWXqC%2BMi%2BerV9d%2FKf9VYvAUAxEQ7jDi%2BC%2FD7whnPJgLPIE3FhFPsqtDAYb8SJSLJ8aU6T9PfPZ1eiCprQ30Ele%2BluWlUpguMaarAjkmPTr8pXT%2BnHSAxfMi1tkgrwtROlXaL11bgshDG%2BeE5XqodYGRePV0Tfzs79kCOmBvS%2B127gOhgOfY4yPG7GCST1of7zQjoen4ZVmG8ySOw3aPv2skC2Wcwu2b6zYdRJ5%2BmooxppkVBqDfTMiTrtBy8HFVMfm872XoTGPMV%2Fr5I1wsvdw9pxZKeQY%2FnX%2B4Pl5fQPQh%2BLqMpvMEFPLRQo0TD6lyD7TrWYnYtLfOQO77CtAofFm1kvrjaMzfMJWOe%2BVmeqxCj930ywS%2F2rXEqiWG78BR4KSdZlu0t0IGo8AMRm6u8KrPwQgDKjUHMPXtTbZROWL%2BW%2BzObTTtVwV72D2h%2FZ5wNOfg2vAA1OjwiWk1J47RRKarusUP6tiAMbYXkHJtcW0OhpusC0T%2FJspiGdVBT38Whv%2FND7%2Fp73ZymccjzrcJiJk6TApPCWWMzoNOfDpZobYxHhb5zsjqewIoJdU1d%2FOpsXh7TvMNPJ57wGOqUBcukU5j32f5JPglHa08UP4%2BOWYgQudakSfvqrBGjIDPnbEyjVxe4JlGDQJjeK2BVvftUJLp63MsBYaDSbcOB3qen4gFVIX01fxGQMCLEYnedD9htoikZ252SPCqpm8esmqK1%2FexzZPd%2FwESgBQv1t7jp8CKxKL7Mzhhq8gjTX9VOn9WSSYY2PvONd15EpzVXRlrqLtbp8WI18KX7RHbQwMXlsMILy&X-Amz-Signature=9b69f05a57f950c2cd633754eab937ad46355b0235054a92ce7822a96015bc23&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMASCC2Z%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd7R0SrsDhIMyYi2jmp%2BIhaf2ewADr9MCsX73FThMRvAiEAuiOADgxcwQePYVRF2qlcYXN4BZhaGuKDkol5V9qEsWQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBp6mXtnbi90T1D5aircA%2BmJLHdZTVe5a88%2Ft4BaJombvf4LglJTnGJvtNjlzqjC7nxH228DIFIrWXqC%2BMi%2BerV9d%2FKf9VYvAUAxEQ7jDi%2BC%2FD7whnPJgLPIE3FhFPsqtDAYb8SJSLJ8aU6T9PfPZ1eiCprQ30Ele%2BluWlUpguMaarAjkmPTr8pXT%2BnHSAxfMi1tkgrwtROlXaL11bgshDG%2BeE5XqodYGRePV0Tfzs79kCOmBvS%2B127gOhgOfY4yPG7GCST1of7zQjoen4ZVmG8ySOw3aPv2skC2Wcwu2b6zYdRJ5%2BmooxppkVBqDfTMiTrtBy8HFVMfm872XoTGPMV%2Fr5I1wsvdw9pxZKeQY%2FnX%2B4Pl5fQPQh%2BLqMpvMEFPLRQo0TD6lyD7TrWYnYtLfOQO77CtAofFm1kvrjaMzfMJWOe%2BVmeqxCj930ywS%2F2rXEqiWG78BR4KSdZlu0t0IGo8AMRm6u8KrPwQgDKjUHMPXtTbZROWL%2BW%2BzObTTtVwV72D2h%2FZ5wNOfg2vAA1OjwiWk1J47RRKarusUP6tiAMbYXkHJtcW0OhpusC0T%2FJspiGdVBT38Whv%2FND7%2Fp73ZymccjzrcJiJk6TApPCWWMzoNOfDpZobYxHhb5zsjqewIoJdU1d%2FOpsXh7TvMNPJ57wGOqUBcukU5j32f5JPglHa08UP4%2BOWYgQudakSfvqrBGjIDPnbEyjVxe4JlGDQJjeK2BVvftUJLp63MsBYaDSbcOB3qen4gFVIX01fxGQMCLEYnedD9htoikZ252SPCqpm8esmqK1%2FexzZPd%2FwESgBQv1t7jp8CKxKL7Mzhhq8gjTX9VOn9WSSYY2PvONd15EpzVXRlrqLtbp8WI18KX7RHbQwMXlsMILy&X-Amz-Signature=149039788feacda8004e429c1d1b87082cb49fc35240c34d17867861acd913d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
