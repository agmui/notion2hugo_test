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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGC34VU%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuVgqiz5lQD6stSaWL4LGHQ382j7fF4C3rfUwHmy7plAIhAPJj%2BxJWT6k9V84h3KSgh5SfGS%2FD0PXcvJYdiyuPTsMyKv8DCGEQABoMNjM3NDIzMTgzODA1Igw8EvffOWjKkECJ8C0q3AO2WXhMTzKXU7R0p0PTlaIIkbtbPqkJ1DKT9WyadP4Mi2xIrYk3%2BTv9OYUBhx8K3KwLHctf5pfpIjm1mk%2B3%2FMJnmDQC9wJrMFuhQjhRup%2BgD2ofjEXxk80FKsGuoXgJxR4tw3Zm9Prlyj97pWX8b%2Br0SjEnn%2FkbBu5ypIBS7IYtXvmDH2duBb7WNsKCDLwNkwoL%2BhQDUJSNANeNJ9%2FXxymF60%2BxR%2FuZc77dH6ypCEVOp7i9dVpjBCK%2FSZ8Su1tq8ewqvoHRHaLVoZjlV1sdXjpw9%2F4ZUdcUBW7TjF5wUlifYieXEM%2FTn99h6JxF9pIDb6P3KkObVQCpmBx7%2FKc52UnVsJVH5QZcwGoB%2BpBXE1QTe29EvNjfF5VCyzoPvsilQHvRkDmuznEj1FPPCheAnJtvCSReJjlBI0KakuKZ2ZPBSXpB3eU1Uane6jLh4W%2FoZ9n1mNGdiFn1%2Fhiw0agDj2nW2B45BNVC5XqTD5HVoZ8CYwJGboRMYD4x%2F6h1sm1Myjtfyra2KP5IHrhQ8%2Fgw8y7%2F65%2BKvOe4KOJIN8vvAb6vBsCS5Xz3BXvnarcB6OkwexDCv93qzMoz1EmRRt5JRd0rb6AznvcApVJRTT3C0iIMFHtw8NVfVr4AS62KbjCo8NnTBjqkAURMngVfkGEZ83GMDPao6kg9UtpyQ5eT2V%2F3ghadMnm6%2Bkb9HuwTXUQTWhVhxCJ1adfTupUdrJG2OBDhKooSO2PRVSAFcoQ935TE1LDnYF7PJ6owmabeikV1h1Drwg3bu9WjS6JkWIB7YztDXFwxrKRlbXkTTVpuBKEKu5h68lCSlqd3veLhyXw6CARkR4wWyvPKLaZW3LHn2GQ9xJwGBarlsNlT&X-Amz-Signature=70458bc620d9f4089707c39aad76d4942e0018a12c7747d8dfe07c4594261467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGC34VU%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuVgqiz5lQD6stSaWL4LGHQ382j7fF4C3rfUwHmy7plAIhAPJj%2BxJWT6k9V84h3KSgh5SfGS%2FD0PXcvJYdiyuPTsMyKv8DCGEQABoMNjM3NDIzMTgzODA1Igw8EvffOWjKkECJ8C0q3AO2WXhMTzKXU7R0p0PTlaIIkbtbPqkJ1DKT9WyadP4Mi2xIrYk3%2BTv9OYUBhx8K3KwLHctf5pfpIjm1mk%2B3%2FMJnmDQC9wJrMFuhQjhRup%2BgD2ofjEXxk80FKsGuoXgJxR4tw3Zm9Prlyj97pWX8b%2Br0SjEnn%2FkbBu5ypIBS7IYtXvmDH2duBb7WNsKCDLwNkwoL%2BhQDUJSNANeNJ9%2FXxymF60%2BxR%2FuZc77dH6ypCEVOp7i9dVpjBCK%2FSZ8Su1tq8ewqvoHRHaLVoZjlV1sdXjpw9%2F4ZUdcUBW7TjF5wUlifYieXEM%2FTn99h6JxF9pIDb6P3KkObVQCpmBx7%2FKc52UnVsJVH5QZcwGoB%2BpBXE1QTe29EvNjfF5VCyzoPvsilQHvRkDmuznEj1FPPCheAnJtvCSReJjlBI0KakuKZ2ZPBSXpB3eU1Uane6jLh4W%2FoZ9n1mNGdiFn1%2Fhiw0agDj2nW2B45BNVC5XqTD5HVoZ8CYwJGboRMYD4x%2F6h1sm1Myjtfyra2KP5IHrhQ8%2Fgw8y7%2F65%2BKvOe4KOJIN8vvAb6vBsCS5Xz3BXvnarcB6OkwexDCv93qzMoz1EmRRt5JRd0rb6AznvcApVJRTT3C0iIMFHtw8NVfVr4AS62KbjCo8NnTBjqkAURMngVfkGEZ83GMDPao6kg9UtpyQ5eT2V%2F3ghadMnm6%2Bkb9HuwTXUQTWhVhxCJ1adfTupUdrJG2OBDhKooSO2PRVSAFcoQ935TE1LDnYF7PJ6owmabeikV1h1Drwg3bu9WjS6JkWIB7YztDXFwxrKRlbXkTTVpuBKEKu5h68lCSlqd3veLhyXw6CARkR4wWyvPKLaZW3LHn2GQ9xJwGBarlsNlT&X-Amz-Signature=550a77071ea0b3d1109e62d72a5d350790bd76e8c64bed187c1e64a9e33a1759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
