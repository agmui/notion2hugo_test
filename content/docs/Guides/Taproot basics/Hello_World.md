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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJ2SE5R%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCihvTYiT8hZzMe%2FuMK%2FGwe20%2FqXgsUiigcY5TmpnadtwIhAN5Luusmg28lV2VGzpugXMXFl%2FmDKtvg2ZqFPYXylVUjKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMbqgEOGaAk2Bwamkq3AO3O5OVm%2Fp2GZ0zA0cswQ9OROODQUMT4am1lTFVHGJaBW4QbzBgcXL18PP81sxc%2FNBMEd%2BoqYjauN80kSZ52Fvv5n3mYv56Q4NQhbR%2Bj1I8sFvwWKBSVKROJ5W3nGO1QbLzswTDX06wfqZOYRohZ4LQukvSdJcYPhVzdpiEl7ntoPFLXnd928nJ6mFhrpnKHEI%2BxbdF6fXABBAX3wYLxMKZMhypXqedof2dKkNVTAzxLj7L8wplbP4ZoFOvWkqj%2BcE696OGK3SgvoRjci6Ki%2FpRtOHUJGtTdhnjoXgdWP%2F2je2AoezDP3a2ujn0NGxO27fEEbe%2FgyXHo5He8zMLcssXKX5HL37csAEMSA6Y%2B0wHCtfuTrReq%2FKwwKAqk8zE0rk6e12YkjbPyjAth9Z1j4YxrU7HtI%2B2fYXc4maf1h1l5oGFAahvs7X%2Bzx3Lgy5Tc61gvTyH8e2xqkzpUCvuI5m4tjBTDGZaEFLGVksK7Z5e%2BmX%2F5DmS%2B56KlDsTIJEzy4Cr0o48PLkymRVGW%2BDZeEpKUhziQxNFRcwOlX2CuX3Dz1J%2BYD%2BAejDFIA%2B0SGh26zmYazOvMYYW5sG%2Fwah7bFtffq8myv8KF4EqGav8hl8aRjZznW7bIIQjuHkjBDDjgMnABjqkAWTsV%2BIw42Sq6Az8o4jwAZ6cFggvMUIP5TkrZZ5830IVSiIr5N4TZUk0zDRhz13A9VLHpH0UGi6%2FkVM4vtzckEJ7IPnxb8VZa7tye35v1lOb7jZRAoR8Fs3vX2iMeZGGcBAKje17qoL4STkzgtEFXNhuzJ0IN9OcWQr%2FDf74UqT%2Bh0DDNYWt%2BJWCO%2F6A2bWhySIE5pEusxuptjdIe72BbgDB9qUo&X-Amz-Signature=062820bde320c52a13340b1589c8828c0940832218e622621e7b2cc4a548a9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJ2SE5R%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCihvTYiT8hZzMe%2FuMK%2FGwe20%2FqXgsUiigcY5TmpnadtwIhAN5Luusmg28lV2VGzpugXMXFl%2FmDKtvg2ZqFPYXylVUjKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMbqgEOGaAk2Bwamkq3AO3O5OVm%2Fp2GZ0zA0cswQ9OROODQUMT4am1lTFVHGJaBW4QbzBgcXL18PP81sxc%2FNBMEd%2BoqYjauN80kSZ52Fvv5n3mYv56Q4NQhbR%2Bj1I8sFvwWKBSVKROJ5W3nGO1QbLzswTDX06wfqZOYRohZ4LQukvSdJcYPhVzdpiEl7ntoPFLXnd928nJ6mFhrpnKHEI%2BxbdF6fXABBAX3wYLxMKZMhypXqedof2dKkNVTAzxLj7L8wplbP4ZoFOvWkqj%2BcE696OGK3SgvoRjci6Ki%2FpRtOHUJGtTdhnjoXgdWP%2F2je2AoezDP3a2ujn0NGxO27fEEbe%2FgyXHo5He8zMLcssXKX5HL37csAEMSA6Y%2B0wHCtfuTrReq%2FKwwKAqk8zE0rk6e12YkjbPyjAth9Z1j4YxrU7HtI%2B2fYXc4maf1h1l5oGFAahvs7X%2Bzx3Lgy5Tc61gvTyH8e2xqkzpUCvuI5m4tjBTDGZaEFLGVksK7Z5e%2BmX%2F5DmS%2B56KlDsTIJEzy4Cr0o48PLkymRVGW%2BDZeEpKUhziQxNFRcwOlX2CuX3Dz1J%2BYD%2BAejDFIA%2B0SGh26zmYazOvMYYW5sG%2Fwah7bFtffq8myv8KF4EqGav8hl8aRjZznW7bIIQjuHkjBDDjgMnABjqkAWTsV%2BIw42Sq6Az8o4jwAZ6cFggvMUIP5TkrZZ5830IVSiIr5N4TZUk0zDRhz13A9VLHpH0UGi6%2FkVM4vtzckEJ7IPnxb8VZa7tye35v1lOb7jZRAoR8Fs3vX2iMeZGGcBAKje17qoL4STkzgtEFXNhuzJ0IN9OcWQr%2FDf74UqT%2Bh0DDNYWt%2BJWCO%2F6A2bWhySIE5pEusxuptjdIe72BbgDB9qUo&X-Amz-Signature=1408818304f5191cd1aa11ec2d434d1d1a198b93809c6e7eeefa835341bdf4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
