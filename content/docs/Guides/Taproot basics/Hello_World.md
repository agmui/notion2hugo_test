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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OX3NAVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBj8xcg0WOiT2Ec37bEOMvCQTygnyS%2BheWvZC9O6prkJAiAh0bhBPlZLFeZRy9Pw2wYdOdPs3paDdnlkDJcByhFSliqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5RMJ8wDiGHa%2Fq%2FXKtwDH2e9LBsWy8YASz9CI9zaTQaYJYRMYkh%2BT08zDv64ilrEmOhelebAfgK2BrpXrNJr3pnmRurtYWbIcxSopH1t5pd2J835xObxV0I3dh40XQBtddD5QrcPfOsiypTHf6xwmrbnTC4ISTqZUkpNB7z4vnkQy5VdU54Xt5GxiN4kkgLsCOo%2B2ex9GQviKxpux6VCQ4%2F%2Fh1aCqKtQUd1UDIJuOd8LQigaf%2BxD5FLDPiyiSX5aE%2F%2BcDKV0WoYTl60sPV5jrHZwhXrox%2BR7KizwbsOsrOsGBlm%2F4Mh1ppL%2F0rLHrARgwP%2BWTLmtsnM4FeSXp0k1NMHy6Tdshviex8sXSjSlnOc9zBf6yd6ExnU05xy4BsaQHE8u6AaIttT5NG1iev4g42C3GTC0TNQHmn0plC68EHmaL8PYaa289IgXLInoh%2FC%2BerOZe%2FNrFqVQWYoGfSfFH7XRbCdPMwrhuu5czVv0gl1VxNU3KR6cemFDsLHYgl%2BFsJiIFv7qAFfvbIHbckmseg1HhG%2Fg9Ce9RarLhu5OydMLDlmiOln%2FAM1w%2BJSu3Kbi5dxDLzZlScwnc0%2FEOzmx2Y38XUwcS0xHIxzpGotodMrg8TDvim8eNKHBRlZrxiM1xTomoFhGG3%2BtLUww%2B7iBwQY6pgF%2FXnAIZQuvcAG%2F%2FmfhWszmWC5nZ3NDDSDpDFuuUdjCim9cf5D7MwxqGz1VUBbnYYiz2tLZFGBVLVtXGVcYFK68UVTjmigLFUTQimFub%2Fz7NRwvuJ%2BLX7fDl%2F6GEuOnQq5YW%2FPy5wJjXBb5AXJnNGJA9h%2F1ocjlGXbtSWqNEBc93JYdDzY7RzcZt%2FgkzD9wt80NvUkS0IjRSBV6aOpyfprMVEtAEX6I&X-Amz-Signature=1cbe3024833e7d10e03a0459a6ac9b33de0a020f37d860cfca6c6472fdf22bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OX3NAVV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBj8xcg0WOiT2Ec37bEOMvCQTygnyS%2BheWvZC9O6prkJAiAh0bhBPlZLFeZRy9Pw2wYdOdPs3paDdnlkDJcByhFSliqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5RMJ8wDiGHa%2Fq%2FXKtwDH2e9LBsWy8YASz9CI9zaTQaYJYRMYkh%2BT08zDv64ilrEmOhelebAfgK2BrpXrNJr3pnmRurtYWbIcxSopH1t5pd2J835xObxV0I3dh40XQBtddD5QrcPfOsiypTHf6xwmrbnTC4ISTqZUkpNB7z4vnkQy5VdU54Xt5GxiN4kkgLsCOo%2B2ex9GQviKxpux6VCQ4%2F%2Fh1aCqKtQUd1UDIJuOd8LQigaf%2BxD5FLDPiyiSX5aE%2F%2BcDKV0WoYTl60sPV5jrHZwhXrox%2BR7KizwbsOsrOsGBlm%2F4Mh1ppL%2F0rLHrARgwP%2BWTLmtsnM4FeSXp0k1NMHy6Tdshviex8sXSjSlnOc9zBf6yd6ExnU05xy4BsaQHE8u6AaIttT5NG1iev4g42C3GTC0TNQHmn0plC68EHmaL8PYaa289IgXLInoh%2FC%2BerOZe%2FNrFqVQWYoGfSfFH7XRbCdPMwrhuu5czVv0gl1VxNU3KR6cemFDsLHYgl%2BFsJiIFv7qAFfvbIHbckmseg1HhG%2Fg9Ce9RarLhu5OydMLDlmiOln%2FAM1w%2BJSu3Kbi5dxDLzZlScwnc0%2FEOzmx2Y38XUwcS0xHIxzpGotodMrg8TDvim8eNKHBRlZrxiM1xTomoFhGG3%2BtLUww%2B7iBwQY6pgF%2FXnAIZQuvcAG%2F%2FmfhWszmWC5nZ3NDDSDpDFuuUdjCim9cf5D7MwxqGz1VUBbnYYiz2tLZFGBVLVtXGVcYFK68UVTjmigLFUTQimFub%2Fz7NRwvuJ%2BLX7fDl%2F6GEuOnQq5YW%2FPy5wJjXBb5AXJnNGJA9h%2F1ocjlGXbtSWqNEBc93JYdDzY7RzcZt%2FgkzD9wt80NvUkS0IjRSBV6aOpyfprMVEtAEX6I&X-Amz-Signature=86a8d5fac2cafca1139016153ceba5674b0609130381cd3b9aae24f09c0695cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
