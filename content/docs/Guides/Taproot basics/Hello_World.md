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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKLSDILI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaM%2FSMtBM1BKdCJClVBMqsoyxJ%2FLYABGyW9R1Ka3kQjAiEA3H8XeatbNI8YvI5WQPGSi3D39KhN8tpRbEtYVWrqZMMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAdzVnxwRioE0lpaCrcA3MG2EDT1G2Ag%2BWL%2FHKff%2BS98caKuifppMmABVTWFNGDqPmKH9yGyvXIR3bnlrBXrWICl1vlWLXy22WaMqZUC88WXZbofinF0YnCCc6g72o%2B8Sjm1%2BtrMm40Az1PV2bWnG%2FViDxGbz6vsLw%2FuoAAjARFhupayr1CYRa4603tEFlfg1z%2FP7X%2BPBL6VLixt1BENfUOVAv4FoEpjF2Q5krqoGj4Un8TfJF4PT3WZgG%2B2V5LBxP5He8Gl6MnXmx3plyCQEBKXdwSrAiMMHW0In54N1WtYM1XOWaw4ATeQxwRa7AtMrHXJNyY475a4Q8VHC65nk5xVKrzrRpEyswO27FcVSuGn7oH1vlBI2LBTqoO8a60N%2B7EYOYDHDGFENcBcVANkJhAzO6dFPIu6YW50FXAGx6dMaf4OiUceKDlkzRmWVB8pzYrhJyvNdnL0UuiSpk4XDVfoSX0N9W%2BSfOLe65A86pQAn3ma3t28k2MyMxHH7x7qKYrCc2xhv%2BJ3%2BjE%2BcT%2FfecnSHH7CzJN5zPSeqrAtOLQeytY0hae6MuptedItRG18HPNh0IPwfDKxWFaNJhskfVKqk3xT3dY77p04TDrHxTaj6CstCSnAnzwNScrEL5%2BtDndTpYPpPr4HpLkMPrvh8MGOqUBaKyCc96ii2%2FfhaIB%2FSjbq9zu5pgt3jJpBp06baFeNfpjY1Cxjz33IP%2FoEOkTtbCB5rE4WRc2rwCl6xrLoFfsoUHuHB3vdSCgPHCf2WUYMTPWbzQGcc%2BAeGHBM7K6QvSably5OFBK0BrVezg5JStS8v0xChoCeIMW01Qlx6%2FwOeDdpTxb0jZiLDVx8J7g1m9Wx0CzZPfTN7Mwf4z%2Bz7MjyggcOzo4&X-Amz-Signature=9add04db95ea6b4ff11bb25dd8271a45571c6f0f4dc094314fdb258ccca3d9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKLSDILI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaM%2FSMtBM1BKdCJClVBMqsoyxJ%2FLYABGyW9R1Ka3kQjAiEA3H8XeatbNI8YvI5WQPGSi3D39KhN8tpRbEtYVWrqZMMqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAdzVnxwRioE0lpaCrcA3MG2EDT1G2Ag%2BWL%2FHKff%2BS98caKuifppMmABVTWFNGDqPmKH9yGyvXIR3bnlrBXrWICl1vlWLXy22WaMqZUC88WXZbofinF0YnCCc6g72o%2B8Sjm1%2BtrMm40Az1PV2bWnG%2FViDxGbz6vsLw%2FuoAAjARFhupayr1CYRa4603tEFlfg1z%2FP7X%2BPBL6VLixt1BENfUOVAv4FoEpjF2Q5krqoGj4Un8TfJF4PT3WZgG%2B2V5LBxP5He8Gl6MnXmx3plyCQEBKXdwSrAiMMHW0In54N1WtYM1XOWaw4ATeQxwRa7AtMrHXJNyY475a4Q8VHC65nk5xVKrzrRpEyswO27FcVSuGn7oH1vlBI2LBTqoO8a60N%2B7EYOYDHDGFENcBcVANkJhAzO6dFPIu6YW50FXAGx6dMaf4OiUceKDlkzRmWVB8pzYrhJyvNdnL0UuiSpk4XDVfoSX0N9W%2BSfOLe65A86pQAn3ma3t28k2MyMxHH7x7qKYrCc2xhv%2BJ3%2BjE%2BcT%2FfecnSHH7CzJN5zPSeqrAtOLQeytY0hae6MuptedItRG18HPNh0IPwfDKxWFaNJhskfVKqk3xT3dY77p04TDrHxTaj6CstCSnAnzwNScrEL5%2BtDndTpYPpPr4HpLkMPrvh8MGOqUBaKyCc96ii2%2FfhaIB%2FSjbq9zu5pgt3jJpBp06baFeNfpjY1Cxjz33IP%2FoEOkTtbCB5rE4WRc2rwCl6xrLoFfsoUHuHB3vdSCgPHCf2WUYMTPWbzQGcc%2BAeGHBM7K6QvSably5OFBK0BrVezg5JStS8v0xChoCeIMW01Qlx6%2FwOeDdpTxb0jZiLDVx8J7g1m9Wx0CzZPfTN7Mwf4z%2Bz7MjyggcOzo4&X-Amz-Signature=db5757bfd5d381f5d859a99aee064d70dcd63b57ece2df6300b6b534dac515b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
