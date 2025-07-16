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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGF6LPVX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIB5%2B3cSHH0bPknzOHR%2F4i6qZ91FswC3OwB99WzsasvbEAiEA4IWYuHS30ug2YEiZmuP7uU9PAT6vYP3H9lnGW8DPUOQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKTaaoCxhZOu41xamyrcA7rxvAmKMPOcxllAItToujhcIYi5unWwyPt6InmEUTHuQ%2BahDOg4xwCRdTw2Mkh%2FfwRJUbg0lhX8s2qjv2oPBh7BIpSErxAV2KkTRlxWb7d3MiK56XBNZcjOwfuQBMXUu78uVqx5scqC%2F12bGmzz9aoR%2BR6eSqGudqCeBXo9SRrAy15M31cJSenxSnId51%2FwxwmY5sIhK6xFrzOO%2FfwKZS%2FnhZ%2Bf%2FaGAqxuBFA6r9h8K2AG%2BE8YjGneDtT3riz55UQjJbVyDGmUXnrpGBbGP7Rmh6QHP8y5HEZZCe7F2PSEV5x%2Bj5LMHxQ4IJNiBbMfSoKwCBuBjIWU5C6zSFBZOIqByBuZqbw%2FLUCn293ir1W83Nb49BiWfKXh1WUw8r4YnoRCveSXaCCSX6a8NEHm6w9Wg%2B6JZmi5TBOMkH%2FEOSt3KzA7u%2FFXwMUkEj7Ju%2FBEnd6hdiRxZdH55CWubCgKQxGqTWPH5Mu2FHWTGU2MABjc1EjLwHPwj6slsdl0lzLdLnuSoKlm52NtHtXIU%2B%2BJfevlzGdbXo7ktGjBUaoUBlViQdJ93S3fMmGPNVDbK4NrCOuRBwNi7xHY77hwSEGLgWMkFrPsBddDkIVaVOOnzLrKxJGOn3mvqtF0BaJs%2FMPWu3MMGOqUBL3UgnaUMpmvm1M3PpgKzpQ5GQItnoaaMlxs8KiHdIcFVKnM2al2Hn9E8%2F73SJo%2F2Pfk%2F9sFa6dQJaBzH84ske38croZqYMFYirR94ebSEZfXH6nOC6E57SFO3bu46nd%2F79ztZSMMZRpT7INPeFSWJ1hehNgZQN3MNC%2FdXLs6TubMxtfs1sLVz9%2BZpJE4R57NUg9PXcTXeEM7oxlFNoaH9YUtk%2Fhw&X-Amz-Signature=6e62f081c807b45763ed87b745c2ae70dabef0bae2531b6ebfba2351f610a160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGF6LPVX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIB5%2B3cSHH0bPknzOHR%2F4i6qZ91FswC3OwB99WzsasvbEAiEA4IWYuHS30ug2YEiZmuP7uU9PAT6vYP3H9lnGW8DPUOQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKTaaoCxhZOu41xamyrcA7rxvAmKMPOcxllAItToujhcIYi5unWwyPt6InmEUTHuQ%2BahDOg4xwCRdTw2Mkh%2FfwRJUbg0lhX8s2qjv2oPBh7BIpSErxAV2KkTRlxWb7d3MiK56XBNZcjOwfuQBMXUu78uVqx5scqC%2F12bGmzz9aoR%2BR6eSqGudqCeBXo9SRrAy15M31cJSenxSnId51%2FwxwmY5sIhK6xFrzOO%2FfwKZS%2FnhZ%2Bf%2FaGAqxuBFA6r9h8K2AG%2BE8YjGneDtT3riz55UQjJbVyDGmUXnrpGBbGP7Rmh6QHP8y5HEZZCe7F2PSEV5x%2Bj5LMHxQ4IJNiBbMfSoKwCBuBjIWU5C6zSFBZOIqByBuZqbw%2FLUCn293ir1W83Nb49BiWfKXh1WUw8r4YnoRCveSXaCCSX6a8NEHm6w9Wg%2B6JZmi5TBOMkH%2FEOSt3KzA7u%2FFXwMUkEj7Ju%2FBEnd6hdiRxZdH55CWubCgKQxGqTWPH5Mu2FHWTGU2MABjc1EjLwHPwj6slsdl0lzLdLnuSoKlm52NtHtXIU%2B%2BJfevlzGdbXo7ktGjBUaoUBlViQdJ93S3fMmGPNVDbK4NrCOuRBwNi7xHY77hwSEGLgWMkFrPsBddDkIVaVOOnzLrKxJGOn3mvqtF0BaJs%2FMPWu3MMGOqUBL3UgnaUMpmvm1M3PpgKzpQ5GQItnoaaMlxs8KiHdIcFVKnM2al2Hn9E8%2F73SJo%2F2Pfk%2F9sFa6dQJaBzH84ske38croZqYMFYirR94ebSEZfXH6nOC6E57SFO3bu46nd%2F79ztZSMMZRpT7INPeFSWJ1hehNgZQN3MNC%2FdXLs6TubMxtfs1sLVz9%2BZpJE4R57NUg9PXcTXeEM7oxlFNoaH9YUtk%2Fhw&X-Amz-Signature=96d1c337e0296b1c7d7db458c8326990354aca800c35baf8ccb79bae63118c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
