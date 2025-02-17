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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNUZS2T%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCPAmxwdbJ4dR0hu%2BFrrtIfDsGpFD0IBW%2F0ENZQvlYobAIhAN%2BS30zg9xR6kJZ%2BZjJhTTNfh14wSRd3q0cITlCCDMnaKv8DCH4QABoMNjM3NDIzMTgzODA1IgwklPJQ1sMa1nk8DI4q3APKh9q6ZhTXMwR18dDa%2B3Ac5m5Lr0FlK8ai9AYDTCnRVs24mb9x5dk44DI%2FtL4GbhUwQzPQEZyn6UX93BoK%2FVcsDrZXg85%2FNQGp6zgBJ0JDugYf57G%2B9x8mj0Rm2gVx0ZH44JG8ckkxPfSs3mvymPpf0bD34In%2BubhsIg19KNBnlR96ESbheNDV6qkJrc9RBAebJYR126nVrqEtbikgnYh5TrZZSz32o3LY8DSCoCVS3gPrcnCkMXPl04CedEy20gINF9EBq3wxjhs%2F0QRNs74u0ketbWZbpGriEjMQ5Vb4o4YWgkJub2U7zYFDPSx7MNV5weTtBGzj86Oxqud5CV4Svm5W86N9uYQg%2FJ5tL49%2FMOyfj4FoxHHX3jupvFhqIZX%2BCACokE2wko42WcmNlHHfDJ057yFykMCFJrEc7JjvPcvFp8mRXyNUK7SwEGoQRnDybIIqar0w514c6UVst4026kFd9MAtUV%2BP2fdQrPHu3sNhQbmKfzxgXz4FpAwPPkxz1QhfPSz9kOq1VZJAyGoc1XPrlBGG95YDyjBmwOcMlipeqfXxIpJdyWXKPfnEVbCexVc2SbhVNdiqlRued2IiL2%2BMiEEeuO%2FLMbOxQgWhizzr32lIDLQ9igsxsTDWy869BjqkAWopjyMXzPhhWUC%2FwZTp3wFfuIrO4LkUzlGT8TDPayOfSismIiG6lA1SNFOhTGGe5xuL2CGgPDDT2rzM6ujcImZR%2FEhxyLNowZtVjTrWMlj5xA9N0v4yNzgW%2FLA%2Fh4VBeUTv9w3R1vTmp4H6znGS3edMJkJyco2eqrTvpKWSO6UPFvteEYu%2FmG0xoMbVZ3OipArfkB4m41a18arkgUpHcnUJL0Vh&X-Amz-Signature=9c09a91e92d8eef793b0dbca4ca8ccc4ebdb287438151f8e26062b7a3c889951&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNUZS2T%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCPAmxwdbJ4dR0hu%2BFrrtIfDsGpFD0IBW%2F0ENZQvlYobAIhAN%2BS30zg9xR6kJZ%2BZjJhTTNfh14wSRd3q0cITlCCDMnaKv8DCH4QABoMNjM3NDIzMTgzODA1IgwklPJQ1sMa1nk8DI4q3APKh9q6ZhTXMwR18dDa%2B3Ac5m5Lr0FlK8ai9AYDTCnRVs24mb9x5dk44DI%2FtL4GbhUwQzPQEZyn6UX93BoK%2FVcsDrZXg85%2FNQGp6zgBJ0JDugYf57G%2B9x8mj0Rm2gVx0ZH44JG8ckkxPfSs3mvymPpf0bD34In%2BubhsIg19KNBnlR96ESbheNDV6qkJrc9RBAebJYR126nVrqEtbikgnYh5TrZZSz32o3LY8DSCoCVS3gPrcnCkMXPl04CedEy20gINF9EBq3wxjhs%2F0QRNs74u0ketbWZbpGriEjMQ5Vb4o4YWgkJub2U7zYFDPSx7MNV5weTtBGzj86Oxqud5CV4Svm5W86N9uYQg%2FJ5tL49%2FMOyfj4FoxHHX3jupvFhqIZX%2BCACokE2wko42WcmNlHHfDJ057yFykMCFJrEc7JjvPcvFp8mRXyNUK7SwEGoQRnDybIIqar0w514c6UVst4026kFd9MAtUV%2BP2fdQrPHu3sNhQbmKfzxgXz4FpAwPPkxz1QhfPSz9kOq1VZJAyGoc1XPrlBGG95YDyjBmwOcMlipeqfXxIpJdyWXKPfnEVbCexVc2SbhVNdiqlRued2IiL2%2BMiEEeuO%2FLMbOxQgWhizzr32lIDLQ9igsxsTDWy869BjqkAWopjyMXzPhhWUC%2FwZTp3wFfuIrO4LkUzlGT8TDPayOfSismIiG6lA1SNFOhTGGe5xuL2CGgPDDT2rzM6ujcImZR%2FEhxyLNowZtVjTrWMlj5xA9N0v4yNzgW%2FLA%2Fh4VBeUTv9w3R1vTmp4H6znGS3edMJkJyco2eqrTvpKWSO6UPFvteEYu%2FmG0xoMbVZ3OipArfkB4m41a18arkgUpHcnUJL0Vh&X-Amz-Signature=919be625cd23562de5a41f3a3ce7c8396b45d08b415951c105e03bfcf2923f08&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
