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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXBMOLT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F07J3aWJTDtfs%2BIY0vuDfdhCvjBbMul2N3fdD4lBPvwIhAJOPi1vrDYTQaMoqx1EtBmdqCayEiYWuNWNg9lbP0bb2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrJjE8qrjVpODD3p0q3ANVwQ5wLQZUBG0Gk8kQZ3z%2Bct%2BCwurjuYDXUQeqbc35Pmc3WHIJplNjYmrXjEm%2F%2BMJOHHUjgDAoepWB1j2%2BYEtxF7g%2F%2BXrn1hUYgumEvPadvsBbxxIFUwnjnVBhOtz5yKWSkysWrRwuucLP1ifS2QrFwu5jBlgimaaDr1XcGCNdVv38DCu%2F9YjkIBdmF3ZlQRMylf8Ml80vfniKWRhevxVOI32J1RtEsFUPCNljqFV5oc8qRJkQX73xXjvolIngBSoFJh56T8%2BAlM29xHwn8ksqkjv3jGJ31lIeXdde0XTuTdrRukFcqQxVOHYr3aXOyshtQj69GaWWMd3eRDzr51hXq9RxWGAeRHSGw4cDg4WFPMH%2BcO71miT%2B0ea5jnyZrQ1530hofjz32HEafJZAFY%2FKfhVpBvgC0%2BwTStqDl%2Ftl2tlcrFgIWz3Vj6HKu6cDRomcqjaLEht4XchSQbFUKDUfQ1C1bPKjXhkQx%2F52UF%2BPC%2FBrJcBs1%2BZVSYjhj%2FLEglTvBu4Q7BtESTlsdSHre%2FT3SHs0Cf4077VYPLi%2B9BRKu5Ho8hV8Bec8GH636uQFSK0nEjqg9zY%2FC9wYAbW%2FHMiMweWyUnNZDRrT%2FUIriLlwDJCm9kMryl5fqBU4mzCV8KfEBjqkAZSuwAHuiwd6IVkhZ4MZaf3tGPt9y8k9diKjJZ%2BAIM3Seax4Vr8F2kWt%2Bnpt%2FzwA8b%2B6mQVv6ag4s1QKjfNqhcv7PFbfTMnU96nlDlCtg633LGWjklv6Y9MnU%2BxINHG6ZRO8KrJUXJk26NFHRYZ7A6HmPvF6PhXxHcrlPdEAa0TiCqevQMkjy5toAC8LEWuPVM4ytgUNHuVyq0pk8Hezf4VMc8sW&X-Amz-Signature=27057eb1c9b13314eed01dbbcba94f42cd92c301346669df17a3f167c9fe257d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXBMOLT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F07J3aWJTDtfs%2BIY0vuDfdhCvjBbMul2N3fdD4lBPvwIhAJOPi1vrDYTQaMoqx1EtBmdqCayEiYWuNWNg9lbP0bb2KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrJjE8qrjVpODD3p0q3ANVwQ5wLQZUBG0Gk8kQZ3z%2Bct%2BCwurjuYDXUQeqbc35Pmc3WHIJplNjYmrXjEm%2F%2BMJOHHUjgDAoepWB1j2%2BYEtxF7g%2F%2BXrn1hUYgumEvPadvsBbxxIFUwnjnVBhOtz5yKWSkysWrRwuucLP1ifS2QrFwu5jBlgimaaDr1XcGCNdVv38DCu%2F9YjkIBdmF3ZlQRMylf8Ml80vfniKWRhevxVOI32J1RtEsFUPCNljqFV5oc8qRJkQX73xXjvolIngBSoFJh56T8%2BAlM29xHwn8ksqkjv3jGJ31lIeXdde0XTuTdrRukFcqQxVOHYr3aXOyshtQj69GaWWMd3eRDzr51hXq9RxWGAeRHSGw4cDg4WFPMH%2BcO71miT%2B0ea5jnyZrQ1530hofjz32HEafJZAFY%2FKfhVpBvgC0%2BwTStqDl%2Ftl2tlcrFgIWz3Vj6HKu6cDRomcqjaLEht4XchSQbFUKDUfQ1C1bPKjXhkQx%2F52UF%2BPC%2FBrJcBs1%2BZVSYjhj%2FLEglTvBu4Q7BtESTlsdSHre%2FT3SHs0Cf4077VYPLi%2B9BRKu5Ho8hV8Bec8GH636uQFSK0nEjqg9zY%2FC9wYAbW%2FHMiMweWyUnNZDRrT%2FUIriLlwDJCm9kMryl5fqBU4mzCV8KfEBjqkAZSuwAHuiwd6IVkhZ4MZaf3tGPt9y8k9diKjJZ%2BAIM3Seax4Vr8F2kWt%2Bnpt%2FzwA8b%2B6mQVv6ag4s1QKjfNqhcv7PFbfTMnU96nlDlCtg633LGWjklv6Y9MnU%2BxINHG6ZRO8KrJUXJk26NFHRYZ7A6HmPvF6PhXxHcrlPdEAa0TiCqevQMkjy5toAC8LEWuPVM4ytgUNHuVyq0pk8Hezf4VMc8sW&X-Amz-Signature=d52616c12c82806ebc421e386aad24908e0b173463058c5ce120e14a702a2cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
