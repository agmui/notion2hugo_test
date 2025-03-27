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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCZ634J%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYltMy3ZRzqgWIs93jw08wF2i65gl29GyjAk7ptbCMqAiB3En2pozHL3kxd2dxz7aaupRuFjhy2VwukBevSYLu28ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMo918SNRjHQmqOcbaKtwDhBsIDb0dh3lkTDSWS8cEUi2DbLcn3QHviWiYGrB61p7ngxxdZ0IruEQo1YwUoH71ph45NkYXuCzOcGM6kjpEXVWMN7faRntsCgLwrP5WPH54BrLboUt%2BM4v9cOvfoOpeR7C53T4jkujBmmk4QkThlu0HgajspR6zZPDZSWtIcAi8qXrYrCrEEuZ8WAX22HbXRPZMT5bUmzboBUuqAkK2I7QmX8iAooQ6DiEanwW%2BbKL6RMqTZZHcyFtxNza%2FCAOjbMKamL3Y4B5kbaq%2FVH83az6PmAT4Wi6S7Q0UzgS3C5ZeoZsfGcl3rsl5w%2B0hk%2FljsWPP1RlaNHRNjvd2zIRDumOfucGh5cveaRnYw4LSf8q0kwlu863%2FAe3Bs%2F9HcRWoUX94VyoCghvd7rYnEDsWLoPBmZm7Yu5jfXU%2B8JzAYzVisDZruP%2BF9jpLu1D4g3FuYR4NDn4sJsaUMNql88COAESHBpGMX65ELWHcrsQs%2FKLTza1sfs%2Bfee3n9CmZmZaLjag7uYPlpW0zw8EeBdnJYn8UivxqvIvGt2A1j0KmGvdMG34I82P%2FAsXwQwNvtQFGZtpF%2B1gfbJEmOKHz5bkxZtdqMsP2gkTCBjkb8ilnXobSIVdmoU6QqBuVtscwgaGUvwY6pgFjCdBGEYifxAWvumMJZce8azlsG0VfduuYHmMze80LEUhklQxXzgFLIsUmlS9s%2F3Jsuv%2FHrmmt6m6HiXP3TWW88zCyMM8de6L6qCyhFkblSZ23shuAGKQBHzlmeGVcEtYYC8%2FqVjLcfO3K0TonfdTEu7NVYvOvBt7FU211bFZlVW%2FxodH8DTaOGxOIP0NkurHfWw9WGWcN8kVK4b6yCTD2YX%2FY1mTN&X-Amz-Signature=6583645658de1ede830c09f26bf356d8e983ab0eff97a50b9fbdc944d5839c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCZ634J%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYltMy3ZRzqgWIs93jw08wF2i65gl29GyjAk7ptbCMqAiB3En2pozHL3kxd2dxz7aaupRuFjhy2VwukBevSYLu28ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMo918SNRjHQmqOcbaKtwDhBsIDb0dh3lkTDSWS8cEUi2DbLcn3QHviWiYGrB61p7ngxxdZ0IruEQo1YwUoH71ph45NkYXuCzOcGM6kjpEXVWMN7faRntsCgLwrP5WPH54BrLboUt%2BM4v9cOvfoOpeR7C53T4jkujBmmk4QkThlu0HgajspR6zZPDZSWtIcAi8qXrYrCrEEuZ8WAX22HbXRPZMT5bUmzboBUuqAkK2I7QmX8iAooQ6DiEanwW%2BbKL6RMqTZZHcyFtxNza%2FCAOjbMKamL3Y4B5kbaq%2FVH83az6PmAT4Wi6S7Q0UzgS3C5ZeoZsfGcl3rsl5w%2B0hk%2FljsWPP1RlaNHRNjvd2zIRDumOfucGh5cveaRnYw4LSf8q0kwlu863%2FAe3Bs%2F9HcRWoUX94VyoCghvd7rYnEDsWLoPBmZm7Yu5jfXU%2B8JzAYzVisDZruP%2BF9jpLu1D4g3FuYR4NDn4sJsaUMNql88COAESHBpGMX65ELWHcrsQs%2FKLTza1sfs%2Bfee3n9CmZmZaLjag7uYPlpW0zw8EeBdnJYn8UivxqvIvGt2A1j0KmGvdMG34I82P%2FAsXwQwNvtQFGZtpF%2B1gfbJEmOKHz5bkxZtdqMsP2gkTCBjkb8ilnXobSIVdmoU6QqBuVtscwgaGUvwY6pgFjCdBGEYifxAWvumMJZce8azlsG0VfduuYHmMze80LEUhklQxXzgFLIsUmlS9s%2F3Jsuv%2FHrmmt6m6HiXP3TWW88zCyMM8de6L6qCyhFkblSZ23shuAGKQBHzlmeGVcEtYYC8%2FqVjLcfO3K0TonfdTEu7NVYvOvBt7FU211bFZlVW%2FxodH8DTaOGxOIP0NkurHfWw9WGWcN8kVK4b6yCTD2YX%2FY1mTN&X-Amz-Signature=1999507443dd1e795b443cdb4f45247a4bec0a3cfadb79ecb7aec567aaf2a6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
