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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5XQWPC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDt8b6midCSk1ueKJp8nNSQGMEpcdfNkz3gDvKEaKmVmwIgayIQ9TiBnoRumSLHxI0fyR6a6bQf88ZdzVwIzglUngkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEVlRIeVCaFpfhYtgircAxXjqxaX9xqWQnx%2B9%2FpxMBiIFQ5G1qAXMglbn5YyKmJhHCNHsGw%2BIF9R1VmwfK9pS%2BmyeWtiJHQBoDRf1B451EGV%2BjRyfQkyhXHB8ZCuaxOiMPhku670aDA11peMNGiIwh0eMB8oqr66rslzMTGRCYvmz7jvJKB3LU2%2BZX%2FDT%2FrXiJRXFHzoRvnbuFGblaUIDdL19Iua%2B49rduYPAmOq2qT0TY84XuXkKawN8jskW8Mck7DzF%2BG1M8NdvgKp0xiXYd9HHJls3MxiVei4vSFa95VKdfoHAa4mpwoNCOFRTUh4s6OeVbUvDeqnoOhfxYTYfeyuIfwoR9tZzYj9CWYtwUCd%2F%2B8jtsW7YqwCmnpLr%2BJsV%2BH9KgTgUJGRDJlonW%2FQZQc7iqAcVqeokN9vFkw%2Bxadki70P6BWF2MoIw9Hxv9xibFxTehFMLZNDUK1VohQ4lKGQc5MZJLeVwgitt9W%2B2yRMSwQwtfnZJ0LKH2YGHOz6B7JvnZiOZATmqdsdvil0nb8BN6lB0Ug8c4rlATBGGBohu8GdRnElZyrcXc62WgH3CXUNAVVzMSshtJCk%2Fh6aFF5z7VPOkowJZOJVhsDt%2BITQ6UJBJet0jaRCBi9cKtosOT1PqINvouyr5Or8MPO9nsMGOqUBzqBgc6%2B%2BM6nxwZjOUAXC%2B9bGjD1ectkBXzO50ADaIVddCBNg7T%2BYjdDM0GlEfA4pxbMvKScOhofNJfrq7WcHl1TuSMhBo0Z5GcbOteVDTdiRO8qQWsO2LjxcABFuHVUGyDY0kB34cIXI0Kj2Dc0MohQRQm31AuNYbJHxgB5jpkYxAJ0pyt3v3%2B%2FUus4a3H3J6DS%2BjGBLQai7jLdh3or6WUehJkxn&X-Amz-Signature=b912463c3fad8ae9b20b1b046afdc7e19c56e851418b22e47f1e8b2f0a84b31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5XQWPC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDt8b6midCSk1ueKJp8nNSQGMEpcdfNkz3gDvKEaKmVmwIgayIQ9TiBnoRumSLHxI0fyR6a6bQf88ZdzVwIzglUngkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEVlRIeVCaFpfhYtgircAxXjqxaX9xqWQnx%2B9%2FpxMBiIFQ5G1qAXMglbn5YyKmJhHCNHsGw%2BIF9R1VmwfK9pS%2BmyeWtiJHQBoDRf1B451EGV%2BjRyfQkyhXHB8ZCuaxOiMPhku670aDA11peMNGiIwh0eMB8oqr66rslzMTGRCYvmz7jvJKB3LU2%2BZX%2FDT%2FrXiJRXFHzoRvnbuFGblaUIDdL19Iua%2B49rduYPAmOq2qT0TY84XuXkKawN8jskW8Mck7DzF%2BG1M8NdvgKp0xiXYd9HHJls3MxiVei4vSFa95VKdfoHAa4mpwoNCOFRTUh4s6OeVbUvDeqnoOhfxYTYfeyuIfwoR9tZzYj9CWYtwUCd%2F%2B8jtsW7YqwCmnpLr%2BJsV%2BH9KgTgUJGRDJlonW%2FQZQc7iqAcVqeokN9vFkw%2Bxadki70P6BWF2MoIw9Hxv9xibFxTehFMLZNDUK1VohQ4lKGQc5MZJLeVwgitt9W%2B2yRMSwQwtfnZJ0LKH2YGHOz6B7JvnZiOZATmqdsdvil0nb8BN6lB0Ug8c4rlATBGGBohu8GdRnElZyrcXc62WgH3CXUNAVVzMSshtJCk%2Fh6aFF5z7VPOkowJZOJVhsDt%2BITQ6UJBJet0jaRCBi9cKtosOT1PqINvouyr5Or8MPO9nsMGOqUBzqBgc6%2B%2BM6nxwZjOUAXC%2B9bGjD1ectkBXzO50ADaIVddCBNg7T%2BYjdDM0GlEfA4pxbMvKScOhofNJfrq7WcHl1TuSMhBo0Z5GcbOteVDTdiRO8qQWsO2LjxcABFuHVUGyDY0kB34cIXI0Kj2Dc0MohQRQm31AuNYbJHxgB5jpkYxAJ0pyt3v3%2B%2FUus4a3H3J6DS%2BjGBLQai7jLdh3or6WUehJkxn&X-Amz-Signature=dc86c19b9db02a5e45d6182a9ef66ef24810e3473cb5dca799091df8f24196f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
