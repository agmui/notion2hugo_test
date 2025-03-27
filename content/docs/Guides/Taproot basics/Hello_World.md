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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LEKOOR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVsaVd%2BfLMThygUpvwT9I7ZxcDZ2j7tvALOPLZlhAIEAiAsrvX1EM%2BhtmgorAngF13vyyuA0w9A0w8N%2FV%2Bw56sk%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMWkt79xPGnM9s5GaKtwDRNGfnDXxyflGXkPEJTUT4dGCZkFkMJh3OgQTj4f9iyRDozjXlETfn2suSEcmozT2z8cs8sEO7fQbLXoia8srPqXHuNf7c5F4aCzsfMhGGPgBBJFKZnj4%2BknH8JA%2B8zjtaG0tSif3sQ2e0BcfDpnMwZ119ngx%2BNbD8sNwy30jtAevG5TaJcm5DmkSNtAr%2FOXFaF8x0TvsZo1hpO%2BM%2F1RDoi3pbvtr66UxZ05%2BQomoH9y8qDbDJAKbhN%2F442JYhpgdsZ%2BgJQTgXyg4Cvld2ETEdSm3mHDfAwfxx1%2BYjjfE5hRp7ITUEzJuu8ahPHsrLemnsUrM8uZAI9GkZZ1PLWJW1uiMAM9XE5j9wrkzzNcdGspLc0ZDeK4OqB6YU535cNzRDJ7SZf5b82FICr%2BgeiqqyUM82Bg%2B1WDypuWRbTAmAvDGLc%2FF4S2%2Fqpb5iC1fFAcoz2TaLJvjpL0zIzmBuwlQU2%2B2zlL0AX%2B5jeQhbrknaCrPshYmEtPCrEKIF%2FETRa27ixgergagbSPiaH1ImqbxJPFhbp6uei181R3X%2FBgaq4I%2FrqOckXuXg%2F1qUWvHzQXYzEe%2F8BH429ic69YzNzDJ%2BbvrownwnmUUbWd6ditVqDu6pa%2FknuTPd%2FvXC4ow2MyTvwY6pgEKGncGbLMDQntTH0CG33rQD0fvaOTVsgMdf7k5lEjjWkT8rIcWYHUdrGxHPMd%2B9SBjRpaSD5eo0xkvrOzINLhlCj%2B4YXjqabmdQS2fKG9TpefBvU%2FWxq%2BsH7lLbeqBZCI9AgAxHSMWBEmb%2FWCawvA5sr%2BCLfJh1K8LqyYNwKJgyvBspib6MtFbh11wiqFluPeiXnIrqTmwTy4QieCVhIBI%2BVzJQyq%2B&X-Amz-Signature=db6a320d9199e0bcb8dcc3c771b9aa53519a1c3887de267a7f79487eeceffa54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LEKOOR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVsaVd%2BfLMThygUpvwT9I7ZxcDZ2j7tvALOPLZlhAIEAiAsrvX1EM%2BhtmgorAngF13vyyuA0w9A0w8N%2FV%2Bw56sk%2FCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMWkt79xPGnM9s5GaKtwDRNGfnDXxyflGXkPEJTUT4dGCZkFkMJh3OgQTj4f9iyRDozjXlETfn2suSEcmozT2z8cs8sEO7fQbLXoia8srPqXHuNf7c5F4aCzsfMhGGPgBBJFKZnj4%2BknH8JA%2B8zjtaG0tSif3sQ2e0BcfDpnMwZ119ngx%2BNbD8sNwy30jtAevG5TaJcm5DmkSNtAr%2FOXFaF8x0TvsZo1hpO%2BM%2F1RDoi3pbvtr66UxZ05%2BQomoH9y8qDbDJAKbhN%2F442JYhpgdsZ%2BgJQTgXyg4Cvld2ETEdSm3mHDfAwfxx1%2BYjjfE5hRp7ITUEzJuu8ahPHsrLemnsUrM8uZAI9GkZZ1PLWJW1uiMAM9XE5j9wrkzzNcdGspLc0ZDeK4OqB6YU535cNzRDJ7SZf5b82FICr%2BgeiqqyUM82Bg%2B1WDypuWRbTAmAvDGLc%2FF4S2%2Fqpb5iC1fFAcoz2TaLJvjpL0zIzmBuwlQU2%2B2zlL0AX%2B5jeQhbrknaCrPshYmEtPCrEKIF%2FETRa27ixgergagbSPiaH1ImqbxJPFhbp6uei181R3X%2FBgaq4I%2FrqOckXuXg%2F1qUWvHzQXYzEe%2F8BH429ic69YzNzDJ%2BbvrownwnmUUbWd6ditVqDu6pa%2FknuTPd%2FvXC4ow2MyTvwY6pgEKGncGbLMDQntTH0CG33rQD0fvaOTVsgMdf7k5lEjjWkT8rIcWYHUdrGxHPMd%2B9SBjRpaSD5eo0xkvrOzINLhlCj%2B4YXjqabmdQS2fKG9TpefBvU%2FWxq%2BsH7lLbeqBZCI9AgAxHSMWBEmb%2FWCawvA5sr%2BCLfJh1K8LqyYNwKJgyvBspib6MtFbh11wiqFluPeiXnIrqTmwTy4QieCVhIBI%2BVzJQyq%2B&X-Amz-Signature=f4196dec3fa4d4a0ccb6a359bf76ef68bcc99d0c89febdabe4293e895e88a352&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
