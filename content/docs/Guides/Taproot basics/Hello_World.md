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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5RXY5T%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2WVRszweJhAKz21FPr%2BYHKZWQQ0xCUF1Q3OoREzNNJAiAwQV95RghCuQdDFfg24yRHUvJeFydSyk34uVhBnW4OQCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLsK%2Fmen%2F6W00hwsKtwD0eudbIU3v1qVrw0PXLJHS2wIq4Q%2FhDGWvLdH1uYpQ28hmTWcqCGZyWo0SN6HPsyD2ZmbIofvredM97B1YbPSnKFAmx772JVouQ1qrOIQU8h7%2FdMP%2FjRf%2FfvwnL2hbpmjv2%2BCJ6ubsJ7s0VjS2yBpMFJa5XrDAr4THQwWBEJD%2B89Tv2Eq%2FaYfBoyxGpB9QhiMgPAiIjOngMsPwkp12lc5GjllTg9ErowXChrQkjE09hmU%2Ff8GrUGMRhTaxp%2BPmIo30Ta%2F8rQoRlVktQYc49gyzJpV0qTZpG4326koTOSnHe%2F9SYcPZ%2FZ8KXH8mTE02CJopae6PGq87rq%2BMHsaj05yolipyByutKWeFRRldNavGryK7f6B4qKSXEPJe7DHrzdjO5EvT4m7FnN%2BP5jOx%2BXxYP9PXKiZkS1BGwD9sfpF9PPwxuFPdnQF0ZnIdYQ9xSGWQWFsQ0CfU3WMUcNxdR%2FXD9N41OephDxQ2TW3OlwV0qojuNkx1VSqzKFXo8XIeZtVppoHYp%2BnwfqXRXSvyKB%2Fajl4szAQsxi33u6jSRIywyhdprEUUBvI3q9YUoW6ThJiuTeewC4yh5no73idi2pMs4xrbUomwd3ObWHJuuJCNRdw15zMVGYYB9DwLWow%2Fv%2F8wgY6pgG2o280RoAjO6qs04Ht4iaW%2FzPAMWskd%2F%2BgmQeko9cbhpIhsqRtR0fWID87LgQArd8hOmxUt9MAIOQxZ78HPrRj8wNxIhU7mnYhcKplPXp%2FYnsWr8EBhbnPg4Sj6PkjL1naACQUDXHkNqhgIMvTMAf6oQ8SF0syZBGsa82Ytdw4Hsd4OIhhP28Biv8EVpf4Mp14d3TLDIdN17MmLkTD1M0h6OY%2B4N%2BP&X-Amz-Signature=6cbaeb3dcf96a3f5d8bdef8d4ae5ee01a2d2a5637010209dd89b251c08056608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5RXY5T%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2WVRszweJhAKz21FPr%2BYHKZWQQ0xCUF1Q3OoREzNNJAiAwQV95RghCuQdDFfg24yRHUvJeFydSyk34uVhBnW4OQCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLLsK%2Fmen%2F6W00hwsKtwD0eudbIU3v1qVrw0PXLJHS2wIq4Q%2FhDGWvLdH1uYpQ28hmTWcqCGZyWo0SN6HPsyD2ZmbIofvredM97B1YbPSnKFAmx772JVouQ1qrOIQU8h7%2FdMP%2FjRf%2FfvwnL2hbpmjv2%2BCJ6ubsJ7s0VjS2yBpMFJa5XrDAr4THQwWBEJD%2B89Tv2Eq%2FaYfBoyxGpB9QhiMgPAiIjOngMsPwkp12lc5GjllTg9ErowXChrQkjE09hmU%2Ff8GrUGMRhTaxp%2BPmIo30Ta%2F8rQoRlVktQYc49gyzJpV0qTZpG4326koTOSnHe%2F9SYcPZ%2FZ8KXH8mTE02CJopae6PGq87rq%2BMHsaj05yolipyByutKWeFRRldNavGryK7f6B4qKSXEPJe7DHrzdjO5EvT4m7FnN%2BP5jOx%2BXxYP9PXKiZkS1BGwD9sfpF9PPwxuFPdnQF0ZnIdYQ9xSGWQWFsQ0CfU3WMUcNxdR%2FXD9N41OephDxQ2TW3OlwV0qojuNkx1VSqzKFXo8XIeZtVppoHYp%2BnwfqXRXSvyKB%2Fajl4szAQsxi33u6jSRIywyhdprEUUBvI3q9YUoW6ThJiuTeewC4yh5no73idi2pMs4xrbUomwd3ObWHJuuJCNRdw15zMVGYYB9DwLWow%2Fv%2F8wgY6pgG2o280RoAjO6qs04Ht4iaW%2FzPAMWskd%2F%2BgmQeko9cbhpIhsqRtR0fWID87LgQArd8hOmxUt9MAIOQxZ78HPrRj8wNxIhU7mnYhcKplPXp%2FYnsWr8EBhbnPg4Sj6PkjL1naACQUDXHkNqhgIMvTMAf6oQ8SF0syZBGsa82Ytdw4Hsd4OIhhP28Biv8EVpf4Mp14d3TLDIdN17MmLkTD1M0h6OY%2B4N%2BP&X-Amz-Signature=280275f313c18b78638b14a531c17492b6213387b6587bb805bd1be084b39faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
