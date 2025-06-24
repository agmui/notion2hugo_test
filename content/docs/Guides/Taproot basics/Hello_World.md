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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4VVV7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC%2FHdIYaDDTgPAPzBi%2Bf7t2kUPTuvDheWTJCkMtF3y1KgIhAOzv5iPXvHH3LT671tLRGFuP2fMPLP55h1DfRqhQSyJ6Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyePzRDxGsE%2BOVng2kq3AP5pfAfvDcS%2BFtSo0fMnWiAsxHVXGv%2F8eDmQm1jyQTBKjdgKy4zLrf4cP5e7JejEkrbUat55CGzfSq3zRK2%2B1w1KPSdWSGuRkr%2FGyUIPmcHFDY08FXDmzP6UiBZPjMnoBSHCOWMumUrX58crzgBartpOnlYY7I10QuO44qarS7v4fTr19Unu38mzi%2B87oPNdaGHgDvQQZ2hiVpG43aEGkiGQqorwZbxse9CUClTXdZantQOgRQl6Mvak3JMBAvSKTHzGMnBKaX4CIbsJCVImV4eIQUQIR0AQPFFn3YiWW7Z7AS%2B3oBQwHAWn8euwZ7u3%2FADthIHp13NO315h5u8JwEXJc4Yl%2BTI9KIUQQw6oRsDax%2B%2BhXjPu%2FgBmwBJkzH07jzbcbtVPrPA3HvpUKD3uzhFpJcuf6nV4c4q9jxmoEb5aGGWaz4FlUsbOTKbHeRRdsvoeFrlku9c70eXBE2sWqIZQzFHhMWNTDn5N8BmNrSKxIsnaPN211wU8XU7u6SAjni1XRBqRaw37wze9fSNoo%2BLsnDhF895vCtdhfgYz1Kk%2Bh3ymazrWym%2FC8PkrAjUr6xFB0wgxm4NUr1F2i0%2FOYqoVf3kWoMTs3rgo8416CKP%2FKyi%2BY0rhMuCp6%2B3JzDouOzCBjqkAfwvw2WTQwXbKz00TX5xvCxs%2BurpfAPdYou1%2FNsUGWX4EWcAaEjPRQUyfUScm%2FuZxMJqUaTe9baclDtClHKo66RciHz73VP2pnqWxRsc4gyrXJcFqUjHVgCsaxGGK%2BdTKqbMPiKY95XDyPtS4SZ%2FIeKILARXj2jXKJzEulJ6B4oPy8Y0VMHojDsRS2Se4ttDhLxFaCJghhDnPCAZKMUisYKn5fDr&X-Amz-Signature=aaadd0df9ca117d63848adcc57bdea47b057f3674af657d7cf7e9b4d59e96fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4VVV7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQC%2FHdIYaDDTgPAPzBi%2Bf7t2kUPTuvDheWTJCkMtF3y1KgIhAOzv5iPXvHH3LT671tLRGFuP2fMPLP55h1DfRqhQSyJ6Kv8DCDcQABoMNjM3NDIzMTgzODA1IgyePzRDxGsE%2BOVng2kq3AP5pfAfvDcS%2BFtSo0fMnWiAsxHVXGv%2F8eDmQm1jyQTBKjdgKy4zLrf4cP5e7JejEkrbUat55CGzfSq3zRK2%2B1w1KPSdWSGuRkr%2FGyUIPmcHFDY08FXDmzP6UiBZPjMnoBSHCOWMumUrX58crzgBartpOnlYY7I10QuO44qarS7v4fTr19Unu38mzi%2B87oPNdaGHgDvQQZ2hiVpG43aEGkiGQqorwZbxse9CUClTXdZantQOgRQl6Mvak3JMBAvSKTHzGMnBKaX4CIbsJCVImV4eIQUQIR0AQPFFn3YiWW7Z7AS%2B3oBQwHAWn8euwZ7u3%2FADthIHp13NO315h5u8JwEXJc4Yl%2BTI9KIUQQw6oRsDax%2B%2BhXjPu%2FgBmwBJkzH07jzbcbtVPrPA3HvpUKD3uzhFpJcuf6nV4c4q9jxmoEb5aGGWaz4FlUsbOTKbHeRRdsvoeFrlku9c70eXBE2sWqIZQzFHhMWNTDn5N8BmNrSKxIsnaPN211wU8XU7u6SAjni1XRBqRaw37wze9fSNoo%2BLsnDhF895vCtdhfgYz1Kk%2Bh3ymazrWym%2FC8PkrAjUr6xFB0wgxm4NUr1F2i0%2FOYqoVf3kWoMTs3rgo8416CKP%2FKyi%2BY0rhMuCp6%2B3JzDouOzCBjqkAfwvw2WTQwXbKz00TX5xvCxs%2BurpfAPdYou1%2FNsUGWX4EWcAaEjPRQUyfUScm%2FuZxMJqUaTe9baclDtClHKo66RciHz73VP2pnqWxRsc4gyrXJcFqUjHVgCsaxGGK%2BdTKqbMPiKY95XDyPtS4SZ%2FIeKILARXj2jXKJzEulJ6B4oPy8Y0VMHojDsRS2Se4ttDhLxFaCJghhDnPCAZKMUisYKn5fDr&X-Amz-Signature=2ccf2e7971f065d608eaaee3e5abb6c4ca7477755de63c0d71661f97a59a6544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
