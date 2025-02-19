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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOO7M6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDSe7pIrLvuvRRqve6W%2BqML4CZlXxuv4A3BZNTT8NT8BAiBbBrzCgO9oKMavbhCSr%2FHbjbmdjbVE9DKvdMk9RjC9SiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvud0xDfUHlJ%2B%2BpLKtwDvNPVEdqLbDXRZot055x%2BQQN8yYMcgalBobOFW6o2rVNCSPHVFj%2FUIHj4VL0qPExgX75N8XUQbv4O%2Fl4HqpHZZZvrlaUzV%2F0f0oO30CJ77irB1X2D5BscqGBuWVkPSq2%2BJ5DJvyCjy9SU8uO2TEIlBH0EIB0%2BM58NXSsXW1tL89W6WwdujCosPebRmHICorBg2oshey%2BlgfM153cRHzACjeImd9hiGoTFE4ShD6wUm3IpPqCKSQzZ4pzYsKxZlx7xeaCRGMP053BC%2FXaC%2FGhZUVAIrtw9fldO7s71wCjp1%2FrzwtzQaUA%2BCTtIj9mwQ8F%2BYItYgmfxC6u8dWXAnQOzyM8uj0CL8pshwmeYTqfre%2Budj2N9RlhDDBFTe0aKSLdnv%2BYQBTaajN8hgh7ZxAm%2B08%2FsrVvsi3AqXwEYyljYWAWonG7kD7z61HZIM19%2Fp3%2Fb7aQOzT%2FdFzHnlHrwM%2FPv14NdSfkZ6OV9fNFh7Vd9OO4c0gzoFqzy7Ck7AQlwPJsvLmBhcUxvBPDbH2UdC4%2FqbF0evjH8utCSvVg7pdY3DqgSI1fn5ag5NTxzuq7TBNb5QiMpg9ecFYTnbT4e84l1aUmTfi6uhf8lLSLXkLoCI9H1cL%2FZObSucgbuU0Mwm%2FvWvQY6pgGBXyqvf0CpajHQCLFa76cA9HjEHTD0ORbOBgu9QcdZhAC9o3u7dbOsVqfv4wjwOYZt%2FeCfaA0xrwr5gcfUEUjClMauNKw1dZEp9qQzN3uw%2FEpfeqyeClXB34u7HlgRTAFsj%2FVTLqRfpjlR0U5c6MCVK42%2Fq6vbRaC2vPY5%2BiWnnxMi%2BD8bJENVvPFcf7QHC%2Fx2OoFKDdHXUDvv%2FO5RjjhrxvcsM8R6&X-Amz-Signature=49cea663d097283dc3cd80d54341d4a5863915a9f2a9eeba21e620715ede1c24&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOO7M6V%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDSe7pIrLvuvRRqve6W%2BqML4CZlXxuv4A3BZNTT8NT8BAiBbBrzCgO9oKMavbhCSr%2FHbjbmdjbVE9DKvdMk9RjC9SiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvud0xDfUHlJ%2B%2BpLKtwDvNPVEdqLbDXRZot055x%2BQQN8yYMcgalBobOFW6o2rVNCSPHVFj%2FUIHj4VL0qPExgX75N8XUQbv4O%2Fl4HqpHZZZvrlaUzV%2F0f0oO30CJ77irB1X2D5BscqGBuWVkPSq2%2BJ5DJvyCjy9SU8uO2TEIlBH0EIB0%2BM58NXSsXW1tL89W6WwdujCosPebRmHICorBg2oshey%2BlgfM153cRHzACjeImd9hiGoTFE4ShD6wUm3IpPqCKSQzZ4pzYsKxZlx7xeaCRGMP053BC%2FXaC%2FGhZUVAIrtw9fldO7s71wCjp1%2FrzwtzQaUA%2BCTtIj9mwQ8F%2BYItYgmfxC6u8dWXAnQOzyM8uj0CL8pshwmeYTqfre%2Budj2N9RlhDDBFTe0aKSLdnv%2BYQBTaajN8hgh7ZxAm%2B08%2FsrVvsi3AqXwEYyljYWAWonG7kD7z61HZIM19%2Fp3%2Fb7aQOzT%2FdFzHnlHrwM%2FPv14NdSfkZ6OV9fNFh7Vd9OO4c0gzoFqzy7Ck7AQlwPJsvLmBhcUxvBPDbH2UdC4%2FqbF0evjH8utCSvVg7pdY3DqgSI1fn5ag5NTxzuq7TBNb5QiMpg9ecFYTnbT4e84l1aUmTfi6uhf8lLSLXkLoCI9H1cL%2FZObSucgbuU0Mwm%2FvWvQY6pgGBXyqvf0CpajHQCLFa76cA9HjEHTD0ORbOBgu9QcdZhAC9o3u7dbOsVqfv4wjwOYZt%2FeCfaA0xrwr5gcfUEUjClMauNKw1dZEp9qQzN3uw%2FEpfeqyeClXB34u7HlgRTAFsj%2FVTLqRfpjlR0U5c6MCVK42%2Fq6vbRaC2vPY5%2BiWnnxMi%2BD8bJENVvPFcf7QHC%2Fx2OoFKDdHXUDvv%2FO5RjjhrxvcsM8R6&X-Amz-Signature=68235c7e1dfec3ce4f4ac6e59432676ab5e36ee8b25011fdea3c988a6392ca57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
