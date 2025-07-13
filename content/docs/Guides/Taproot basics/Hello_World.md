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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWH3SQM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApJgq54gVtN60I2MzGFq4JxmsaS02eKo5r%2FF%2FKjlN5pAiAkTAM09rF19%2FAUPYxVt6oxWrF3m9opKWiXvVbv%2FBSUWCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhWdDr%2FOKRG8xVde5KtwDT0euAeXKk2IuPZJYaxeK8FasQRCSsqB5VhG5RsLMkYB6ArqwYJtkOtF9cNaOiW2VU%2B1BdeHh9eVXpN4EZc%2Fbpc5BUt4Vk5BLTGSNpCL94kLGgS2Ga7GmBlE9C8MS%2BJ%2BOdlw683%2F4koa%2BUEKNnt5f%2BauSjShc6QCq18yvp5yynQsygIdjt8iM%2Fw475kqodGizZeS9rfcEolYw6zfKjoopNjw3VZpD3aS%2FrrkoDsFRcKcrdlBmwgE963EavTuWYQZJhDsbNr2pDPMBWBWBqC4vje57KbUGZ4DnuhF8kPowY90WyWMjfjXm9uQDbeZtokXXYkYKimiOBOdmtaigZOsmXJMD74ON5D%2BvsQmCbGeC1mtWYJ0S56X7kZvljPmOkmERPy6jPbA8UAi1SZs229vBfQNVF9wklwb3sHY6Z%2FUCwLiBXslymMAUsW0fRTAH8A977vC1N43D%2FEs%2FyqRIBitjBzEnc77qKroZdAk0mSjU8VM%2F0Y7P2YPPZ09WSpt%2Fg6PRR%2FD1mFtTBa%2Fgzzv17xFHCfFixlsBCtW8gFtV5IBVgxH1H6omc5KG6CjZrWRwkhB%2BlpJRqguArZNF90KTFv%2BBvRGCrKMP8M4vgkNNq73ycwrQTqQwy77nKNV%2B9tIw96PNwwY6pgHUuBaIL6RNBVgBZXqaDwPtERTePiBAMz8vjpshQ4ubTyxsdJU2jYXf6JXWnbmDzPveczx7Us%2BRU2aptIasYgM%2F82j84mFp0UXCWKElXZmuFiuozyS4ZLvOYQRHLkVZJqw9hipATbsKGp7BmivwSjWu9YX9uanUJci%2BdVENKmDZhB%2FNA6ZYHF9aeXcHAgLGqez3v1aNljJuTsE39g8plWl%2FPDpsoikn&X-Amz-Signature=b5136938931d3fb6d1ad6d9643d6c42be995a7efc61cf7c85f68a39049900f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWH3SQM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApJgq54gVtN60I2MzGFq4JxmsaS02eKo5r%2FF%2FKjlN5pAiAkTAM09rF19%2FAUPYxVt6oxWrF3m9opKWiXvVbv%2FBSUWCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhWdDr%2FOKRG8xVde5KtwDT0euAeXKk2IuPZJYaxeK8FasQRCSsqB5VhG5RsLMkYB6ArqwYJtkOtF9cNaOiW2VU%2B1BdeHh9eVXpN4EZc%2Fbpc5BUt4Vk5BLTGSNpCL94kLGgS2Ga7GmBlE9C8MS%2BJ%2BOdlw683%2F4koa%2BUEKNnt5f%2BauSjShc6QCq18yvp5yynQsygIdjt8iM%2Fw475kqodGizZeS9rfcEolYw6zfKjoopNjw3VZpD3aS%2FrrkoDsFRcKcrdlBmwgE963EavTuWYQZJhDsbNr2pDPMBWBWBqC4vje57KbUGZ4DnuhF8kPowY90WyWMjfjXm9uQDbeZtokXXYkYKimiOBOdmtaigZOsmXJMD74ON5D%2BvsQmCbGeC1mtWYJ0S56X7kZvljPmOkmERPy6jPbA8UAi1SZs229vBfQNVF9wklwb3sHY6Z%2FUCwLiBXslymMAUsW0fRTAH8A977vC1N43D%2FEs%2FyqRIBitjBzEnc77qKroZdAk0mSjU8VM%2F0Y7P2YPPZ09WSpt%2Fg6PRR%2FD1mFtTBa%2Fgzzv17xFHCfFixlsBCtW8gFtV5IBVgxH1H6omc5KG6CjZrWRwkhB%2BlpJRqguArZNF90KTFv%2BBvRGCrKMP8M4vgkNNq73ycwrQTqQwy77nKNV%2B9tIw96PNwwY6pgHUuBaIL6RNBVgBZXqaDwPtERTePiBAMz8vjpshQ4ubTyxsdJU2jYXf6JXWnbmDzPveczx7Us%2BRU2aptIasYgM%2F82j84mFp0UXCWKElXZmuFiuozyS4ZLvOYQRHLkVZJqw9hipATbsKGp7BmivwSjWu9YX9uanUJci%2BdVENKmDZhB%2FNA6ZYHF9aeXcHAgLGqez3v1aNljJuTsE39g8plWl%2FPDpsoikn&X-Amz-Signature=8fe475beea1878ecdb565f71577b6113c849697829be8ba1375fd12954152058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
