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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCSJTLM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFOdwCZy%2B%2B9xKn5p5DiZdIeGq01QRei%2B1n25u766Bh%2BHAiAVkfUfmuNUSsGS22P2%2BkIlxh370HmK%2BF%2BmIcdolR5wOSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa16gZi9gvsfKVppnKtwDt8gjNaQ%2FyOSJxD%2FEyuAGWt8h%2FH5U%2FJtsn3RnIBLNKz%2Bwv7L9ERfBbEVz3hxyqlW1cIeIO7dvixSCYCuROIdMKdrJY7tXvq9cUMeUcFvbEVMCKvs9cACYOnXPJS14qm5Fbal%2FqMBOVNObI5uS683Z%2FcmrOHARrOFZgcYbh%2Bbs6R4hOlnROZDhOrICy8SpE%2FQTPCmkDvfla5IBVIvWzlLbrUblwXNAur5pVpEO0%2BdyE%2Fu0wH1P1G95ab7KRulAvsska%2BNxAt6w3QWaAs3L1m0CnnbK1ed%2FJ0aGbbMhimuAwSOP%2BhOaKHtm9isP5iwpCEz2Ws7OQNxEAc47zTjB869MDUsO0h9Lx0lDC2W1%2F1rNWNYcp3lJqcS531CwpyX9bMjzsTEGTQna3qDMBnY4Pb2IO4spx3KkiI99fzI%2FBuJ5KLzPdxA7QgOGNazVn8rGEMbAZdiDQUggIg4L0GTelW7YMqqtmVSDPZrJ1wPmnsIgCopo%2B7Q1hhrl2uf9NHJe2peeeCyUFI6RY9w9jerkZdFrYGRCKVDKCY%2BbxdtcnydTf4otD%2FYHL6UmImaKSc%2BgCwPCDmdhq2dGACRGzoeRjLWCJaDrQQiZBtQaPhWHyZ06xr3k9PYfVqkOZSSHh10wodigwAY6pgHpD7imPzdyBjS%2FzMoPewC7t5S89g8biSq6855zSwb9plt43Nu16SDPelI2UPt4TY6%2FC%2FXI91z56Kwa%2F6lqIuh%2B9mt88PhSZT2Z4LVrjd9ZEAn8WauYmtHJWxaedlUiRscCLU1ZAklnNcRaf%2BKy%2F9ncHfgxKdKGkeHD1uEFCGqVPcXgUbekSAsstgsu0C1XxmFy%2BwMHApbs8suLt9bxXD0dn%2FUxcQsk&X-Amz-Signature=88103397c0826be9047566f84b8f95e0027d0a031193274fdef2e798f2882a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCSJTLM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T003951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFOdwCZy%2B%2B9xKn5p5DiZdIeGq01QRei%2B1n25u766Bh%2BHAiAVkfUfmuNUSsGS22P2%2BkIlxh370HmK%2BF%2BmIcdolR5wOSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa16gZi9gvsfKVppnKtwDt8gjNaQ%2FyOSJxD%2FEyuAGWt8h%2FH5U%2FJtsn3RnIBLNKz%2Bwv7L9ERfBbEVz3hxyqlW1cIeIO7dvixSCYCuROIdMKdrJY7tXvq9cUMeUcFvbEVMCKvs9cACYOnXPJS14qm5Fbal%2FqMBOVNObI5uS683Z%2FcmrOHARrOFZgcYbh%2Bbs6R4hOlnROZDhOrICy8SpE%2FQTPCmkDvfla5IBVIvWzlLbrUblwXNAur5pVpEO0%2BdyE%2Fu0wH1P1G95ab7KRulAvsska%2BNxAt6w3QWaAs3L1m0CnnbK1ed%2FJ0aGbbMhimuAwSOP%2BhOaKHtm9isP5iwpCEz2Ws7OQNxEAc47zTjB869MDUsO0h9Lx0lDC2W1%2F1rNWNYcp3lJqcS531CwpyX9bMjzsTEGTQna3qDMBnY4Pb2IO4spx3KkiI99fzI%2FBuJ5KLzPdxA7QgOGNazVn8rGEMbAZdiDQUggIg4L0GTelW7YMqqtmVSDPZrJ1wPmnsIgCopo%2B7Q1hhrl2uf9NHJe2peeeCyUFI6RY9w9jerkZdFrYGRCKVDKCY%2BbxdtcnydTf4otD%2FYHL6UmImaKSc%2BgCwPCDmdhq2dGACRGzoeRjLWCJaDrQQiZBtQaPhWHyZ06xr3k9PYfVqkOZSSHh10wodigwAY6pgHpD7imPzdyBjS%2FzMoPewC7t5S89g8biSq6855zSwb9plt43Nu16SDPelI2UPt4TY6%2FC%2FXI91z56Kwa%2F6lqIuh%2B9mt88PhSZT2Z4LVrjd9ZEAn8WauYmtHJWxaedlUiRscCLU1ZAklnNcRaf%2BKy%2F9ncHfgxKdKGkeHD1uEFCGqVPcXgUbekSAsstgsu0C1XxmFy%2BwMHApbs8suLt9bxXD0dn%2FUxcQsk&X-Amz-Signature=1e95a62f2afb8ae61c85f62fc58f6f509f086a7d04ae1ca472aabf760f757f57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
