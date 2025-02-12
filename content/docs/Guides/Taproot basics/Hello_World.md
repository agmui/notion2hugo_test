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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYKFSRY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpwdLQHdiUpFz%2Fp%2FSY7nZVitxNVxkQtMPC1ZLy%2FgIVpAiAUpo0UHxj1qpdMjcYWSAhKrNgveI4qzl2a7xE6jgbTLiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJ4fh%2B6OYTFudG4sKtwDplvxsw6FeWsBWmxS9S5NnjxZ34G%2BGFr0GfErwhiR5R4H2sKveCkEzlula0rrmhQ3fE3PGPFgLGqcrzkCnMGU2JGyo2pF4YHVEzGmaBxdYlTyHCg95g2ukV5EJkOTIVW3ezLHmsNdPNjXapVn22pNLA4m%2FJkeFQ0fDLwA6%2BdxlpUZRc3ojISjRbMY4RtHaC6umntmqQL4iUdsN1f0WPpdxyCuSN7rMWuE15HvN5NlVrZyhi9DEGBd00UlvRwqxE1xx4gV4rQZakggtj9OMSzzt6CENfhz6i1dBC5fZO6NyXDtkrJvzoe%2BQ15ZuuhRcH06jpnCZv4AZWEB1DKTwxWXK5P%2BQXE6EzYW2dCvn9tpoQBq2W5ZD9SwDkIAj%2FDWgbC6JZUCumj0CJv%2F2GwvuZ26SykgMuRGGzc5dYJGqHgeqHuAEvZW9cMdjx1%2FGfPAz9sUFONtmwIOBs2%2BoTrcCd1EiJxXZXx1p8S5pP532PLHwAf4jVH2WnktudwyEfHnAh4t74ZZsWABZUWcD1eSCm1BeB%2B4PlZ36n3LRCHCnwY90ttuBjJesdROt31zQ%2BD56NIgbGAp5a2ZngUaL2r5Pu1ASkqSP8qQULRC%2FnsqQO4VLxMY%2FRbOJA6sMDyE4Vow7Iy0vQY6pgGXXFy1evAa2RPCDoLjmLeu1b13hYCN7EEcloD%2Fh%2BdQjv%2BmSqGtv%2Bs%2BF1rw%2BNqEHtiNNh1EFcfuWG1AltWzhEcCGlsRhzrEwkE60qjExRgTEgfXUnHtdTOdPNG2ueqJnr9lXlgxu0Q55cr0na7Y9LVDfzeyXedZuK4g6aId%2BaW6danjN15hCQtzBSgFppYUgMVgjccv8KuSLJVqUWoqJkLDMOBcYL4J&X-Amz-Signature=9713344d170546af881f2f105cfcf2cf8759fdb91d2ccca9a56f30ab9b1fb56e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYKFSRY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpwdLQHdiUpFz%2Fp%2FSY7nZVitxNVxkQtMPC1ZLy%2FgIVpAiAUpo0UHxj1qpdMjcYWSAhKrNgveI4qzl2a7xE6jgbTLiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJ4fh%2B6OYTFudG4sKtwDplvxsw6FeWsBWmxS9S5NnjxZ34G%2BGFr0GfErwhiR5R4H2sKveCkEzlula0rrmhQ3fE3PGPFgLGqcrzkCnMGU2JGyo2pF4YHVEzGmaBxdYlTyHCg95g2ukV5EJkOTIVW3ezLHmsNdPNjXapVn22pNLA4m%2FJkeFQ0fDLwA6%2BdxlpUZRc3ojISjRbMY4RtHaC6umntmqQL4iUdsN1f0WPpdxyCuSN7rMWuE15HvN5NlVrZyhi9DEGBd00UlvRwqxE1xx4gV4rQZakggtj9OMSzzt6CENfhz6i1dBC5fZO6NyXDtkrJvzoe%2BQ15ZuuhRcH06jpnCZv4AZWEB1DKTwxWXK5P%2BQXE6EzYW2dCvn9tpoQBq2W5ZD9SwDkIAj%2FDWgbC6JZUCumj0CJv%2F2GwvuZ26SykgMuRGGzc5dYJGqHgeqHuAEvZW9cMdjx1%2FGfPAz9sUFONtmwIOBs2%2BoTrcCd1EiJxXZXx1p8S5pP532PLHwAf4jVH2WnktudwyEfHnAh4t74ZZsWABZUWcD1eSCm1BeB%2B4PlZ36n3LRCHCnwY90ttuBjJesdROt31zQ%2BD56NIgbGAp5a2ZngUaL2r5Pu1ASkqSP8qQULRC%2FnsqQO4VLxMY%2FRbOJA6sMDyE4Vow7Iy0vQY6pgGXXFy1evAa2RPCDoLjmLeu1b13hYCN7EEcloD%2Fh%2BdQjv%2BmSqGtv%2Bs%2BF1rw%2BNqEHtiNNh1EFcfuWG1AltWzhEcCGlsRhzrEwkE60qjExRgTEgfXUnHtdTOdPNG2ueqJnr9lXlgxu0Q55cr0na7Y9LVDfzeyXedZuK4g6aId%2BaW6danjN15hCQtzBSgFppYUgMVgjccv8KuSLJVqUWoqJkLDMOBcYL4J&X-Amz-Signature=f84b55124dda007c3332a30568a149441257e2bfe06bdc72df8507bbe8501ada&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
