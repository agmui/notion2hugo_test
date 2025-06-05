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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRTADTO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBWUY5BtbHdNyhw4eT5Dtr8RPaXSwkfX5sxblG1LxZTAiBBECPapIEQuGnEVtHmAjzTe5v5HU44d86yNcPYguYcGir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMxHWbZN5syaGQwipKtwDLsVLN73tpQImhMjvvbhy234jSo3%2FwRXBQHOjjqMieSdfdtwUYbXZOhBcAYuJigRZ%2BZhqe1eBVzac2SzHxkJnr7MCWD7MbCZ3XD6bNgas95kK8qCk28px0LMTxOnt6Rzu8lLvoZppLe2dvtK4RWlTMoP9RulTUC8JMms9W0EKtivY3sNAyhXrdEXjojXullG65IiC0twvs4gLBrU%2BdhgoCpkXAp7hSbKYiyjWqPUQlf%2BwJWmBpjxCEPxVkWE%2FDChjuRby5FHAWdoLgh%2BSjA%2BrCi4sHPzWwZVMitF%2F%2BJExnCd15cTfuiZyTq9dHQGqdCB9dmh8e0AVn8owUOP1DSFTcJaMRjC1bnVbRkoiqeWEvpaMxMdImP0uFXuhdi3565v3nvyrrpzO06KjX%2Bks6MTTX8xGDVIvWbHQPvJDujK9LfTVMosxvq70VRK5D7qWTZJkkwhwO1mZdugTDKrRxr8BWGzdUB8TWOOtSudj1HrrUpqFTyrwAw3uaqWZfnqySrtKCF5qGthrVBv7JGbZVc2OlOF9ntlRekGiX53EY%2FODfpQLccfe0We1vle1648IOFfIRO%2B6slvNylXp8EnHHzIzVOvQ0hVWOYdkAgDcD0YzAYdB%2FxgOQnzhonh25LMwrtiHwgY6pgGkNPJ4nmGn9Qv5mubGwYt3yuKA0MddV9c%2BfOUk7%2FK0f%2Bva%2FsN64JWZXg1pEH%2FPqli0wTB3X%2FZk%2Bmw0ph4yFs7lPayB1whvZJhK6Bz9NiDqdWAID9oReE8%2FqemGzEFr798DRGlLgbNm8PqX%2Fm%2FZcW1PkNd9oaJRNAM8Z3GrcS%2F92o8svXlgHaRv17vndYqtgGMZqkzy9XzheoexryqvrsHcfT4rzAWP&X-Amz-Signature=4a00b5b5a9372d11122028e73af7f5efc8001b732ec45487cb888a17accc9df4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRTADTO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBWUY5BtbHdNyhw4eT5Dtr8RPaXSwkfX5sxblG1LxZTAiBBECPapIEQuGnEVtHmAjzTe5v5HU44d86yNcPYguYcGir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMMxHWbZN5syaGQwipKtwDLsVLN73tpQImhMjvvbhy234jSo3%2FwRXBQHOjjqMieSdfdtwUYbXZOhBcAYuJigRZ%2BZhqe1eBVzac2SzHxkJnr7MCWD7MbCZ3XD6bNgas95kK8qCk28px0LMTxOnt6Rzu8lLvoZppLe2dvtK4RWlTMoP9RulTUC8JMms9W0EKtivY3sNAyhXrdEXjojXullG65IiC0twvs4gLBrU%2BdhgoCpkXAp7hSbKYiyjWqPUQlf%2BwJWmBpjxCEPxVkWE%2FDChjuRby5FHAWdoLgh%2BSjA%2BrCi4sHPzWwZVMitF%2F%2BJExnCd15cTfuiZyTq9dHQGqdCB9dmh8e0AVn8owUOP1DSFTcJaMRjC1bnVbRkoiqeWEvpaMxMdImP0uFXuhdi3565v3nvyrrpzO06KjX%2Bks6MTTX8xGDVIvWbHQPvJDujK9LfTVMosxvq70VRK5D7qWTZJkkwhwO1mZdugTDKrRxr8BWGzdUB8TWOOtSudj1HrrUpqFTyrwAw3uaqWZfnqySrtKCF5qGthrVBv7JGbZVc2OlOF9ntlRekGiX53EY%2FODfpQLccfe0We1vle1648IOFfIRO%2B6slvNylXp8EnHHzIzVOvQ0hVWOYdkAgDcD0YzAYdB%2FxgOQnzhonh25LMwrtiHwgY6pgGkNPJ4nmGn9Qv5mubGwYt3yuKA0MddV9c%2BfOUk7%2FK0f%2Bva%2FsN64JWZXg1pEH%2FPqli0wTB3X%2FZk%2Bmw0ph4yFs7lPayB1whvZJhK6Bz9NiDqdWAID9oReE8%2FqemGzEFr798DRGlLgbNm8PqX%2Fm%2FZcW1PkNd9oaJRNAM8Z3GrcS%2F92o8svXlgHaRv17vndYqtgGMZqkzy9XzheoexryqvrsHcfT4rzAWP&X-Amz-Signature=c7d2aa1f2400e8c71ae57aa06f3ee61125df43e4269cf56b42a9273d6f2387c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
