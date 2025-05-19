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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGPMO26%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr%2B6s5hpG7f9vbN5C72n%2BgenvsJTDPM8TKIa9SnDaswwIhALVV1XDaMKitjUfhlSjiT2cKyTrtol1s%2BtWPUctBRLx4KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqkq2XFYcxNNXfjQsq3ANNlrStEl2JayWotUlTCPzLnNmOr9jyzkRo3ugHI58VjTb8vM562Uqe6LSSWGh0ieRdA5QUiHVI%2BkHtGwIhj1zTSXEwMLLPnZRpBQ0mQjPdOGkkGenYgn5OuoMQ3if8OgJprv89lErOagdKg9Dyw%2FjltXtJcZpNJcd3XOxWce4U%2FYeQ9H94jHmRRnm%2F5NWYDutsixWndC2mhkKtzaUbvIDje%2FpL4%2FYdp8YtQsDLZJUtC8Dm%2BnWCN3u036u%2FJfOh8%2B2kGX2sdI8c%2FrnuZzM2e8YxvG85cFsKnUKZ7IkiuO3XDuBgf1Lla4q%2B7vKdJh2VBZtyBvVrqB7hFByOQHg%2FMTdWF5sZvl2DHYGbK5tFv6%2BH1tqHskQ291l6J5laa7G1QpNRMTTXfgnoBJX9vZwWCGwWi%2BQ4IfULWxmvzSqAvxZEFNctRSdOWUPLUSuFTKcm%2FZxoJ63k4H0m1BHFcZJdpTaSMCb8Dg7xZMlHWrrfaD05oMPZuZkqSNGA27i%2Fhr7BmAUnzXDHLPeZ7hZlbkr7BYy40kX7h%2BCqeD%2B2C3L1KZsIrnOElL%2BzJPuhpEpBA37EJJzWAvpEwrT1glokR3wK63QYUvQ2CyDN8a6PU8m1DCynFcZ3DpqJSNI5ML3FZDD6x6rBBjqkATKFf4Snpab%2FZgCR26KGZZITVHxYgU%2F%2FEfqjTDLT3Ip%2FwUTaV9GFW652wyO82KtD1Ey34jgzAADys8ZiVNYi57FdbVbTnw8rMKhiT3R2OxH7zbdSdOh4VOpLqkbzsmGmJpnas2ehJwCgQ%2BdmfjOuLtoEDyvxx3YrViOLc3PfUT5oTQR5akg7e%2FeRAVt9OxjKyOmlF7%2F%2BWlcqCbvBtlViBEwBsRNn&X-Amz-Signature=f3662a6d9b14440b3cd9af11a170176923f0b31997cdb76cd93b4a016300b5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGPMO26%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr%2B6s5hpG7f9vbN5C72n%2BgenvsJTDPM8TKIa9SnDaswwIhALVV1XDaMKitjUfhlSjiT2cKyTrtol1s%2BtWPUctBRLx4KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqkq2XFYcxNNXfjQsq3ANNlrStEl2JayWotUlTCPzLnNmOr9jyzkRo3ugHI58VjTb8vM562Uqe6LSSWGh0ieRdA5QUiHVI%2BkHtGwIhj1zTSXEwMLLPnZRpBQ0mQjPdOGkkGenYgn5OuoMQ3if8OgJprv89lErOagdKg9Dyw%2FjltXtJcZpNJcd3XOxWce4U%2FYeQ9H94jHmRRnm%2F5NWYDutsixWndC2mhkKtzaUbvIDje%2FpL4%2FYdp8YtQsDLZJUtC8Dm%2BnWCN3u036u%2FJfOh8%2B2kGX2sdI8c%2FrnuZzM2e8YxvG85cFsKnUKZ7IkiuO3XDuBgf1Lla4q%2B7vKdJh2VBZtyBvVrqB7hFByOQHg%2FMTdWF5sZvl2DHYGbK5tFv6%2BH1tqHskQ291l6J5laa7G1QpNRMTTXfgnoBJX9vZwWCGwWi%2BQ4IfULWxmvzSqAvxZEFNctRSdOWUPLUSuFTKcm%2FZxoJ63k4H0m1BHFcZJdpTaSMCb8Dg7xZMlHWrrfaD05oMPZuZkqSNGA27i%2Fhr7BmAUnzXDHLPeZ7hZlbkr7BYy40kX7h%2BCqeD%2B2C3L1KZsIrnOElL%2BzJPuhpEpBA37EJJzWAvpEwrT1glokR3wK63QYUvQ2CyDN8a6PU8m1DCynFcZ3DpqJSNI5ML3FZDD6x6rBBjqkATKFf4Snpab%2FZgCR26KGZZITVHxYgU%2F%2FEfqjTDLT3Ip%2FwUTaV9GFW652wyO82KtD1Ey34jgzAADys8ZiVNYi57FdbVbTnw8rMKhiT3R2OxH7zbdSdOh4VOpLqkbzsmGmJpnas2ehJwCgQ%2BdmfjOuLtoEDyvxx3YrViOLc3PfUT5oTQR5akg7e%2FeRAVt9OxjKyOmlF7%2F%2BWlcqCbvBtlViBEwBsRNn&X-Amz-Signature=9978b3ed050dfb25361439ee62eb210558f9dfc8bc08f4bc8db88202219b422e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
