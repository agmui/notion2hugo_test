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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQH7PEE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETeOz6dSza8gO6iMPcHOw3cyINSQomXciSbxQ5jU3XPAiAMCi0xmcBmeLoXpLYe9Xu129e2cfTOxSSEIg%2B%2BN%2B7Jfir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMgHaDyRUzGq3s9T9tKtwDziW7pFZIFK8vJ5%2FC5Dv6rApoqu%2FImfHrcteEJ8rJAaFY20UQ64L1Cg%2BDEwyrXV9Y569T%2FdueyEvmrzZWZ2S3ydB09RPrNqqgmSrcvNPhtbJdSbNTdbvOa%2FRqMQRvwuzKSzA%2FNrrdqIgvGNgMXoBQ9qby2AajTjVR6iaEt0PoCe5pTwQFyHz1duwCW3ZZfW8ltyYQ%2Bi4Zq4k1oaYeBW2MyvpO8gxVh42EO160wO9JhtTIe2B43qjb0bXA7%2BIH%2FK6sLx%2BYoP%2FZ7qxyK4MtB0r%2F1Kl3N%2Bh9mSDfbM9Zk8VC8bqteFJ%2FCayXTzBJcuVii2rHJk%2FF5zrdz%2FCP80GAH8syhqxciaIuKur1jjn82nYtiiuHm0pBMzCbBFmfgvZToLxEygbTVNnZ1k2kCSXd31h5gA9cOAjcXRJxFT6tJ0R1lulodC6V9v8vkab0GCkj9Iv8gaCgQQ4pVMMeIcbtbL7lMWSm8P5mVQt263DW60QRQi43CEud1mbo6UlWbuW2eLKfI6GkknnBWYbaIapjRRwv%2FphV3xWwwy4YH9zZGUPuKcK%2BnYgeZPaNX%2BB5zqQ4QWcGO3TQ8neDZsmo8ueEbZySgcyclS3SIlwp6RDX2GCgnx0QiiEaQB3ijUV4ybMwzurZvgY6pgE6ObctgJi5vAgetpxjAzEcgg5ZZFm43NJVoWffkanOWVwcMIRJGYDuXIUNHeRfmSoMxdZXkWGNNbzA66xSQq0PTaDOKtOw3N6nVcKLthWkGy79X3xewMoAFxYDvIA7u1kZkhtGVureluUx5HVeySuBH1mVSWrpA1cf7DGdTRIB4arufvZwtfAJwSwk9PktH4G2CF2CtQyc5c71HSyMi1Os5uCn60hK&X-Amz-Signature=f8d83be817e6edd74f24d164af5f646f726c36272572f13bd781f779d41071f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQH7PEE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETeOz6dSza8gO6iMPcHOw3cyINSQomXciSbxQ5jU3XPAiAMCi0xmcBmeLoXpLYe9Xu129e2cfTOxSSEIg%2B%2BN%2B7Jfir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMgHaDyRUzGq3s9T9tKtwDziW7pFZIFK8vJ5%2FC5Dv6rApoqu%2FImfHrcteEJ8rJAaFY20UQ64L1Cg%2BDEwyrXV9Y569T%2FdueyEvmrzZWZ2S3ydB09RPrNqqgmSrcvNPhtbJdSbNTdbvOa%2FRqMQRvwuzKSzA%2FNrrdqIgvGNgMXoBQ9qby2AajTjVR6iaEt0PoCe5pTwQFyHz1duwCW3ZZfW8ltyYQ%2Bi4Zq4k1oaYeBW2MyvpO8gxVh42EO160wO9JhtTIe2B43qjb0bXA7%2BIH%2FK6sLx%2BYoP%2FZ7qxyK4MtB0r%2F1Kl3N%2Bh9mSDfbM9Zk8VC8bqteFJ%2FCayXTzBJcuVii2rHJk%2FF5zrdz%2FCP80GAH8syhqxciaIuKur1jjn82nYtiiuHm0pBMzCbBFmfgvZToLxEygbTVNnZ1k2kCSXd31h5gA9cOAjcXRJxFT6tJ0R1lulodC6V9v8vkab0GCkj9Iv8gaCgQQ4pVMMeIcbtbL7lMWSm8P5mVQt263DW60QRQi43CEud1mbo6UlWbuW2eLKfI6GkknnBWYbaIapjRRwv%2FphV3xWwwy4YH9zZGUPuKcK%2BnYgeZPaNX%2BB5zqQ4QWcGO3TQ8neDZsmo8ueEbZySgcyclS3SIlwp6RDX2GCgnx0QiiEaQB3ijUV4ybMwzurZvgY6pgE6ObctgJi5vAgetpxjAzEcgg5ZZFm43NJVoWffkanOWVwcMIRJGYDuXIUNHeRfmSoMxdZXkWGNNbzA66xSQq0PTaDOKtOw3N6nVcKLthWkGy79X3xewMoAFxYDvIA7u1kZkhtGVureluUx5HVeySuBH1mVSWrpA1cf7DGdTRIB4arufvZwtfAJwSwk9PktH4G2CF2CtQyc5c71HSyMi1Os5uCn60hK&X-Amz-Signature=b8436a00fb50c9c517411195468c6d6e876e8d4019ef31c18a3719c55bd4e852&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
