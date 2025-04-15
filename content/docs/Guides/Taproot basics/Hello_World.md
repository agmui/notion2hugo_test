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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=3980d49e727a5f856956cbda5e8d6d00f31e8b49508584f3a0fc9d92b535247d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=c310849efafe32a2a368830142452cbf731b08f31dbbcdaea4531e988dabd854&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
