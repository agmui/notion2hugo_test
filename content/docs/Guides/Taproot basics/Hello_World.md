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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NQPGYL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLZdj8j1ttv%2BjR%2BeNKRPqW4JyDvzzAWodGeD5u9A2gYAiAneb0kBIptJTxQB%2BjLCltCU4yGFHHaFe%2F5D3m8%2BQ4tqyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMtW76R8XADsLF2WaIKtwDVudSI8TcOJYtXk57t2WCivxr%2FDTp%2BYzNWWyULGJbMYupB5Yf5V4XoeKktLAfEQWemQRjlXqV%2BfBmkg0sm4qvmjNelMIdgJCpKkd3ImHYCYBwwa1NFRujBoT%2BkISzLnXe%2Fh3TIstgNwIAo4PsguZ2LcQSEOAZAth9G4GfB8z6fPwZawMBvBSaqTehe%2F77O4HCKMLIfhRDEDswW1Ht%2BPM4ZaizjeX9oPg8VhU1pzqhV7hapA29bns5Etv8o1LZrDN69mROpwaqRvBUTWUo3bnSTRbtX7DhYPdSCSo6OI3FiqFD8VrRrde8%2BLtp085C%2F%2Bm%2BTgNpSfG9%2F89bqvFVb1wRasNDR2g%2FKFREv%2FOMhsjOmeaGHRVG092JWyjj0nnMjnIrbQhHaBGi1xaaUiSgD3NvVjHi7g4slmagZS37aIbjzGSVU6%2BJOE8fmC0uTOblpRvEpbPgyQb915MQc9I7K27JlsgS%2BOZvOHbtpTr3PpqMMrpdgBwk5rXzsMAP5HmBr1eBWMzIJQcVaRxUA3jWuBeHIRD%2Fs1xbFL9vXw3rg7Z5m07snDjib%2FfPGEvq0EBb%2BpY6LLnnimAYC46xNaB4TQkyd0FuQVnMzYzAn2U2kG5YRw3%2BchR0sBwi7QDd9QYwydekwQY6pgHaRjlUlN76HH%2FigxJ%2FFHw7RgvSsKzDenAR4kYzUUmRF0UT%2FDM2Yv3Rp7rgwn6FVU%2BB9%2Fvqq7CxxZMhWMcMJsVZb3rD18Hhpt%2Bey2Jou6agWFzgYb6JEF30GuwDfxu18NC5JtXzD2q1cwIWoF8drlXrEb2NJT2YAYmrrlYT107B20BbHXar7wGT2evaXldwQU7nxo%2Fz3UoTwlJqsmFvzWy%2FEix%2B%2Fs8O&X-Amz-Signature=c38cb7c45fc02e66e24dc84a1a91dbf9eaf023ed32ecb760e002d47625b3903c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NQPGYL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLZdj8j1ttv%2BjR%2BeNKRPqW4JyDvzzAWodGeD5u9A2gYAiAneb0kBIptJTxQB%2BjLCltCU4yGFHHaFe%2F5D3m8%2BQ4tqyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMtW76R8XADsLF2WaIKtwDVudSI8TcOJYtXk57t2WCivxr%2FDTp%2BYzNWWyULGJbMYupB5Yf5V4XoeKktLAfEQWemQRjlXqV%2BfBmkg0sm4qvmjNelMIdgJCpKkd3ImHYCYBwwa1NFRujBoT%2BkISzLnXe%2Fh3TIstgNwIAo4PsguZ2LcQSEOAZAth9G4GfB8z6fPwZawMBvBSaqTehe%2F77O4HCKMLIfhRDEDswW1Ht%2BPM4ZaizjeX9oPg8VhU1pzqhV7hapA29bns5Etv8o1LZrDN69mROpwaqRvBUTWUo3bnSTRbtX7DhYPdSCSo6OI3FiqFD8VrRrde8%2BLtp085C%2F%2Bm%2BTgNpSfG9%2F89bqvFVb1wRasNDR2g%2FKFREv%2FOMhsjOmeaGHRVG092JWyjj0nnMjnIrbQhHaBGi1xaaUiSgD3NvVjHi7g4slmagZS37aIbjzGSVU6%2BJOE8fmC0uTOblpRvEpbPgyQb915MQc9I7K27JlsgS%2BOZvOHbtpTr3PpqMMrpdgBwk5rXzsMAP5HmBr1eBWMzIJQcVaRxUA3jWuBeHIRD%2Fs1xbFL9vXw3rg7Z5m07snDjib%2FfPGEvq0EBb%2BpY6LLnnimAYC46xNaB4TQkyd0FuQVnMzYzAn2U2kG5YRw3%2BchR0sBwi7QDd9QYwydekwQY6pgHaRjlUlN76HH%2FigxJ%2FFHw7RgvSsKzDenAR4kYzUUmRF0UT%2FDM2Yv3Rp7rgwn6FVU%2BB9%2Fvqq7CxxZMhWMcMJsVZb3rD18Hhpt%2Bey2Jou6agWFzgYb6JEF30GuwDfxu18NC5JtXzD2q1cwIWoF8drlXrEb2NJT2YAYmrrlYT107B20BbHXar7wGT2evaXldwQU7nxo%2Fz3UoTwlJqsmFvzWy%2FEix%2B%2Fs8O&X-Amz-Signature=c87c44643e94aec3546067bac3eb30e89cfe22a0f64b1d34f69f030e20592195&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
