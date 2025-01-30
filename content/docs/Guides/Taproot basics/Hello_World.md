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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36WCO7Y%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcftbkQXkk9W%2FOUFY73vgC31RW3QXFWHRm6ihv9gPvNAiAjBtp8riAk4eHELTeRKHnw4ClyguwIEspLjWyRVcn94SqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1hAcBY%2Ba9%2Bam9fEKtwD0oCgJsHuQXXEHT7atp%2BYBaODda7nuf3v4XDAr9xywgwyAEVkiQsmWtgt2Ec7PDN2F%2F1Myp2TZv%2B23RbqZfwly%2FxEpz5aG4FnegjEkzbwgaks5MHIWrAKkfw4QaTvQ0LEoIdvOKq8gL%2Fv4FuN2PjN0LBEXu7z%2BXnhUqvCOdwrb7k70PD7442BP%2BbwrfK5kBPtd3Udd7R%2B5SEFRIJSefHM5873YXfjy%2FY0Oco2wP624CQ1%2B0T9iaUTFAWnxa%2BibmWerPYb5wTCEAel4jivbuKAoNVHnd1F8zcT27icYC0d6UkH%2BTBClQblPDtE0DkgJozkhyiEbI98c2C3EPXOUgsr8uM4sbRmSWYWFTPAg2EUhzkcXBKvE19L3g3PJ4fMssyf%2Fat%2FzQ3aWAVh%2BjWz%2BNGFQy4eN3W%2BYFz2zWU4FGdbWcTeerW4eApVL%2FHXtGoXB9AZj60AKhvWic%2BY7%2BKX52%2FsUIpMyIzpABvY%2Fd2YYS3WNxJXyfjAiTZGst%2FXN2c%2FPqH2jTMKktDKiHLAs9Mma5bocdVioiLT6uEjdJpLh4WP4%2FRUVJ03rmgF2W3BrLthKPmTi7j%2FT2HQjnbYM3QbOcZ%2FbKXIBbjk6C6lRhysvvLR2FsbEFDFpSk2p8mYEPIwyeDtvAY6pgHxW2fV%2BNhUEqtS49zN09qqTw3C9Pm7EmVN9Y239AYJiA5Kv1iuLHADI319zxHX1jV8gQ8BAQdt1MnmCE%2BWiK7aS8AP4RYsu7o3DQ2yje8O3nQMWoqHqyfdMczf20QIlkWvex1SVaAQI%2FIvXc9q0dfDfbbxHOViZVnVGWqB8zCGbGYOD6SKKpvvO0WOyvUwTbRjzImNEBiLPjloLrtA0ajXEcwzmsL5&X-Amz-Signature=4f44361a57bb5b6638bb93fc1f18db1e34918775aebeb08685adf0f7f2516068&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36WCO7Y%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcftbkQXkk9W%2FOUFY73vgC31RW3QXFWHRm6ihv9gPvNAiAjBtp8riAk4eHELTeRKHnw4ClyguwIEspLjWyRVcn94SqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1hAcBY%2Ba9%2Bam9fEKtwD0oCgJsHuQXXEHT7atp%2BYBaODda7nuf3v4XDAr9xywgwyAEVkiQsmWtgt2Ec7PDN2F%2F1Myp2TZv%2B23RbqZfwly%2FxEpz5aG4FnegjEkzbwgaks5MHIWrAKkfw4QaTvQ0LEoIdvOKq8gL%2Fv4FuN2PjN0LBEXu7z%2BXnhUqvCOdwrb7k70PD7442BP%2BbwrfK5kBPtd3Udd7R%2B5SEFRIJSefHM5873YXfjy%2FY0Oco2wP624CQ1%2B0T9iaUTFAWnxa%2BibmWerPYb5wTCEAel4jivbuKAoNVHnd1F8zcT27icYC0d6UkH%2BTBClQblPDtE0DkgJozkhyiEbI98c2C3EPXOUgsr8uM4sbRmSWYWFTPAg2EUhzkcXBKvE19L3g3PJ4fMssyf%2Fat%2FzQ3aWAVh%2BjWz%2BNGFQy4eN3W%2BYFz2zWU4FGdbWcTeerW4eApVL%2FHXtGoXB9AZj60AKhvWic%2BY7%2BKX52%2FsUIpMyIzpABvY%2Fd2YYS3WNxJXyfjAiTZGst%2FXN2c%2FPqH2jTMKktDKiHLAs9Mma5bocdVioiLT6uEjdJpLh4WP4%2FRUVJ03rmgF2W3BrLthKPmTi7j%2FT2HQjnbYM3QbOcZ%2FbKXIBbjk6C6lRhysvvLR2FsbEFDFpSk2p8mYEPIwyeDtvAY6pgHxW2fV%2BNhUEqtS49zN09qqTw3C9Pm7EmVN9Y239AYJiA5Kv1iuLHADI319zxHX1jV8gQ8BAQdt1MnmCE%2BWiK7aS8AP4RYsu7o3DQ2yje8O3nQMWoqHqyfdMczf20QIlkWvex1SVaAQI%2FIvXc9q0dfDfbbxHOViZVnVGWqB8zCGbGYOD6SKKpvvO0WOyvUwTbRjzImNEBiLPjloLrtA0ajXEcwzmsL5&X-Amz-Signature=02a9d7ece3c3b5a61a9c77d1c8f0cf533824335308e74a9b29f3c5af88f26be4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
