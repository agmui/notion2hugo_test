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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33UDOIU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICW4C5wBX5x6MoilMdM8SQPhTQlDnAM4lSDcEy%2BgHZXVAiB63bhidVywL0jw1grmJXz8%2FCCX6rd%2Frm1WXVwFKqG3qir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM8Vr8IZQfPPdHm%2FtFKtwDXXkrDt5nHkoXqCQL5pyOtJSX5%2FDBW9qlFjfBJe2rDKPsGLjCf6kz9XvmQpJDq%2BOOXBZtv8dqQ5nS8x0%2FtE3MS%2B42lpe0EYENXZ0MMPyW4%2FFmlwSPSyFakfUHQK7ijqNMHwZX01tQ71exr4J4nz5VCyWQpkARNJCUMgj7cWQPntiGEhp6zMmkguY7gOohYz0GjKsFycBg2JVtYmmT2PFYdy1Wb8ztgfwc7AgU3oVxEZje%2FetPw9sz6V5xZi0umS%2FjR0%2FRxOe1KrFZBkiVa2MwGQ4aYF5JZvRS6mkanxPWBWh7Szrhu%2F%2BHlKPb2HR4PKx9Chkr1gr4krlhczvI2g5Dt9RrJDDJUSku2f3xSglGkYneQLLMQ%2BtkKJUj5L3n6LWUlxd8EP4tDFTcIus9IBC0UMPGh7q%2Ba4CZ8cxt07YGqfz44edQ62EcOf%2B9ID7bcT%2BuWPQUjVvq%2FnGhnsXHHx7Xwy%2BirkPcpqwMbK7%2BYEHW2ybSmhtOZ3vOiAsROpAEQrWfiZdxwo0Dx9Iz4LmshLZFi49dRNWPYFXY2JpogB4B11mzwBKdbCNzEDHArEKptsHyNZPEkrytvKTbG7U%2Bl2P6PXfVYcuVBKeEMrIa%2BGK%2FDRMFAD3eLeU8LxvqHgkwmfmYxAY6pgEccLxRdNGRJdgEzVmMJ9c7P3NJdY87G9rTwdsJmbZREcpv4%2BMpgSQXodRNccNtLEOor0cZUnPSD4Fo7wR%2FPmqvusU2ew0Wha3NhUhKBkK0wyuemTOZu8gdvBnrAG%2Bbba95DFTBEWH%2F%2FpGGy%2B9wJ5jfhJJa5ZtwSkdoLIxo0H4T%2BhVC42gHdVlBReNqroTBBGcxgdexK172E%2FTMWFhMTFthUPprgLsW&X-Amz-Signature=94f321527dce94bb48f9b72e74ddb89e7486198b812fde383ab08cf27f16e849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33UDOIU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICW4C5wBX5x6MoilMdM8SQPhTQlDnAM4lSDcEy%2BgHZXVAiB63bhidVywL0jw1grmJXz8%2FCCX6rd%2Frm1WXVwFKqG3qir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM8Vr8IZQfPPdHm%2FtFKtwDXXkrDt5nHkoXqCQL5pyOtJSX5%2FDBW9qlFjfBJe2rDKPsGLjCf6kz9XvmQpJDq%2BOOXBZtv8dqQ5nS8x0%2FtE3MS%2B42lpe0EYENXZ0MMPyW4%2FFmlwSPSyFakfUHQK7ijqNMHwZX01tQ71exr4J4nz5VCyWQpkARNJCUMgj7cWQPntiGEhp6zMmkguY7gOohYz0GjKsFycBg2JVtYmmT2PFYdy1Wb8ztgfwc7AgU3oVxEZje%2FetPw9sz6V5xZi0umS%2FjR0%2FRxOe1KrFZBkiVa2MwGQ4aYF5JZvRS6mkanxPWBWh7Szrhu%2F%2BHlKPb2HR4PKx9Chkr1gr4krlhczvI2g5Dt9RrJDDJUSku2f3xSglGkYneQLLMQ%2BtkKJUj5L3n6LWUlxd8EP4tDFTcIus9IBC0UMPGh7q%2Ba4CZ8cxt07YGqfz44edQ62EcOf%2B9ID7bcT%2BuWPQUjVvq%2FnGhnsXHHx7Xwy%2BirkPcpqwMbK7%2BYEHW2ybSmhtOZ3vOiAsROpAEQrWfiZdxwo0Dx9Iz4LmshLZFi49dRNWPYFXY2JpogB4B11mzwBKdbCNzEDHArEKptsHyNZPEkrytvKTbG7U%2Bl2P6PXfVYcuVBKeEMrIa%2BGK%2FDRMFAD3eLeU8LxvqHgkwmfmYxAY6pgEccLxRdNGRJdgEzVmMJ9c7P3NJdY87G9rTwdsJmbZREcpv4%2BMpgSQXodRNccNtLEOor0cZUnPSD4Fo7wR%2FPmqvusU2ew0Wha3NhUhKBkK0wyuemTOZu8gdvBnrAG%2Bbba95DFTBEWH%2F%2FpGGy%2B9wJ5jfhJJa5ZtwSkdoLIxo0H4T%2BhVC42gHdVlBReNqroTBBGcxgdexK172E%2FTMWFhMTFthUPprgLsW&X-Amz-Signature=cf8c1d715c9ec04e969fda9ee692a85ba7b2d36d2e35435862d2d789206944a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
