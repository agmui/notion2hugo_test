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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNLOFIK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv39Bxy7ZQH7WJnSyUnStSVcbtx20MXWnkl8f%2FZr10dgIgD0tgyQ10GSwZnAMVM%2BpX%2FKsCN2PDL4CcN59jLP2mP54qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOHZw2LW7rufN6M0SrcA%2BN1XXPaeykPpZUXLVlIzHXhCyEQ0FKLwoCdj4vWPYi0p4ForOqZhB8c6pimFgGHIiJ8sX%2FohNoH51t%2B%2FQEXWUTRrBGyPzuRX4uSmoMxU7v7Xj8n8qGrQlfkp1BE2aldb%2FdpSvjkjsIc9o3jEzgJT4c%2F6VDRRVMa8OL8ubL1SfIVKtO375cZ381RG1hNUf1GwLeQqM%2B8ay8Sdyqc1Jnf54PAqJ%2FYt7HWB9i2DfGbwdt4wSL38GtlLhrK1%2B0CT7JD9yeEpR8jXFu3u0XrK4qN%2Bwn7OMwkXEgotNQmNvR7xSqjqewlQTgAlfqKA%2BBKKcCawn8%2FhKV7bg%2Bspd7fjP0bxkgTrhdEEG8hSD%2BjthmQRKnAuB70zZilsHbmUvC54gu23cypqZMpWxxntie9y%2FlXHjc8FYOPtshpyqcPg8tbZIH41t4W8sDF%2BMfkR8sxTdyZNPgIhgEsbUJGDm1I%2B2tLG3yRlkGaLB9YTz8yCAbWFWfIH%2B6Jvn3ZUOa7SO7dAWh4BIIIxRYtIJJZSo14fPST1hLvzLIig8ZzIjWNWogjh1mrvTV%2BuUJlIDRrnrHMTawarYUQitdaCHH1dWJjxPyYiFnUcnnZooK7UqDfsh1eusm4nOY3VhBDdIkH7%2B6vMOz0gMMGOqUBws%2B4HVExm9kMTgN8UYS6RZ%2BD44GwoWfrwK30Ya195AVpOei0RDYRq138obCq3%2BrR7YpM5Re7jdmH%2F93aVm8AWt6DZ5WZjr%2F2ZL33qBqnjGGD%2FdF5qe5tpqBC8IOFgR08B%2BBVkyXHQUimQzgyyrLNfGWB%2BhOIRarwZGWPB1AkYHLVQeTs%2BVOd6lEBF5kFScdjVMs0a2PmZz5YXK7drICm4SkD3WeG&X-Amz-Signature=0e2a5e2bbf2e8015ea7853ab2fae2403dfef50fab57ff1215e7826037780a8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNLOFIK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv39Bxy7ZQH7WJnSyUnStSVcbtx20MXWnkl8f%2FZr10dgIgD0tgyQ10GSwZnAMVM%2BpX%2FKsCN2PDL4CcN59jLP2mP54qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOHZw2LW7rufN6M0SrcA%2BN1XXPaeykPpZUXLVlIzHXhCyEQ0FKLwoCdj4vWPYi0p4ForOqZhB8c6pimFgGHIiJ8sX%2FohNoH51t%2B%2FQEXWUTRrBGyPzuRX4uSmoMxU7v7Xj8n8qGrQlfkp1BE2aldb%2FdpSvjkjsIc9o3jEzgJT4c%2F6VDRRVMa8OL8ubL1SfIVKtO375cZ381RG1hNUf1GwLeQqM%2B8ay8Sdyqc1Jnf54PAqJ%2FYt7HWB9i2DfGbwdt4wSL38GtlLhrK1%2B0CT7JD9yeEpR8jXFu3u0XrK4qN%2Bwn7OMwkXEgotNQmNvR7xSqjqewlQTgAlfqKA%2BBKKcCawn8%2FhKV7bg%2Bspd7fjP0bxkgTrhdEEG8hSD%2BjthmQRKnAuB70zZilsHbmUvC54gu23cypqZMpWxxntie9y%2FlXHjc8FYOPtshpyqcPg8tbZIH41t4W8sDF%2BMfkR8sxTdyZNPgIhgEsbUJGDm1I%2B2tLG3yRlkGaLB9YTz8yCAbWFWfIH%2B6Jvn3ZUOa7SO7dAWh4BIIIxRYtIJJZSo14fPST1hLvzLIig8ZzIjWNWogjh1mrvTV%2BuUJlIDRrnrHMTawarYUQitdaCHH1dWJjxPyYiFnUcnnZooK7UqDfsh1eusm4nOY3VhBDdIkH7%2B6vMOz0gMMGOqUBws%2B4HVExm9kMTgN8UYS6RZ%2BD44GwoWfrwK30Ya195AVpOei0RDYRq138obCq3%2BrR7YpM5Re7jdmH%2F93aVm8AWt6DZ5WZjr%2F2ZL33qBqnjGGD%2FdF5qe5tpqBC8IOFgR08B%2BBVkyXHQUimQzgyyrLNfGWB%2BhOIRarwZGWPB1AkYHLVQeTs%2BVOd6lEBF5kFScdjVMs0a2PmZz5YXK7drICm4SkD3WeG&X-Amz-Signature=9c94929331a28dbabdcaec56ec9ea9f4588e8f3ed7ee10d232cb6ff31bc0ae39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
