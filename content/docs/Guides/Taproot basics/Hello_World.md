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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOPL3ZS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOuKJHca%2FZWnRXsJmmy574yaSU2n%2FvN9ODOyesk8%2B%2BHAIhAJQq74K32hdOOqesiQRz1vYj5zdImIGC4JhEBVUr0GCEKv8DCBgQABoMNjM3NDIzMTgzODA1IgwVaQ24MFRd4c4zPCgq3AMKAHDIcpuxUjKxHc%2FKfFfMtthSPUBT%2BkY1Od9N%2FXTRmneWM%2FS4u3%2FA53qn21RDiQsNYIUsYAEvzJEUH5joKrwthaE0zEf0zQNvj6omsYgJLwGx8as5LEsUqKbVjEDEjj32hd2KMwSe1zhWinMfD34jKxTg77UxLCb%2B7vv%2FHNDLmqBFBvETAos8fuSwVdso60BFYupyJcMJiFvlDPJbpHHBasKqz%2FOUwFZ2ASRQ9dsLpEhyNPwX8FJVX15IUEex%2FXXELHIX6KkLNYzwJzay9LQwr9gB7e48XIaEV4Oop01X8BmVUq1PaQjIiDjNg2wgUTMjWytlJK77pMb8hoHwYktzSAOT6QPcDQDcBD1IewmjGLdDSJ5jAPIBz9MR7XK1Deb03yXjFHFESRMKsMBczlVGChefe4%2BDBV%2BYUiBW0GaAlj%2BH%2F0%2Ftens1tbJ7PleMT%2Brg25Ip7ESW7xd8Ts9TuAzXyeDxuNFokxm6Mf6d%2BCMA9ImJmn7ZbIfX%2FExGqtJ2%2FKoVe4qnhMdLnthaozHgvLS8AeuMKMM8fNlKtUtBVKyTgamqV2FL8yNX5fy2Rr10mjoFVNlH3i1q2SYcFRqUdV0oR4Lwf5gUTbcdF7TPC06ko2Zjxa5BOeDkUet8gzDxn6nABjqkAYLmdcIt9Ikb%2BbEUACeuSdE7i%2BesUCPFVcV%2B6%2FLQgH7noMF0UhAwDmk3CnK1pO%2F3mWig38k1YU8n9kQZHd4J0ikaCIkGp9mVwA25CgzP98tcundis%2F2gHtVLofkXk83d6Sg%2BbpAvlCIwUEJZkmC6RnODEuYbcgWKMFllRMFnWFIRzi1QP9it39SrPzGrawcw35ov8YU51%2BGSBVfO7ELGCLS7wjjz&X-Amz-Signature=b1571071ec9770580a90b9b2c8251f27e8f0971b0e88c89ba332a5cf9900f81f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOPL3ZS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDOuKJHca%2FZWnRXsJmmy574yaSU2n%2FvN9ODOyesk8%2B%2BHAIhAJQq74K32hdOOqesiQRz1vYj5zdImIGC4JhEBVUr0GCEKv8DCBgQABoMNjM3NDIzMTgzODA1IgwVaQ24MFRd4c4zPCgq3AMKAHDIcpuxUjKxHc%2FKfFfMtthSPUBT%2BkY1Od9N%2FXTRmneWM%2FS4u3%2FA53qn21RDiQsNYIUsYAEvzJEUH5joKrwthaE0zEf0zQNvj6omsYgJLwGx8as5LEsUqKbVjEDEjj32hd2KMwSe1zhWinMfD34jKxTg77UxLCb%2B7vv%2FHNDLmqBFBvETAos8fuSwVdso60BFYupyJcMJiFvlDPJbpHHBasKqz%2FOUwFZ2ASRQ9dsLpEhyNPwX8FJVX15IUEex%2FXXELHIX6KkLNYzwJzay9LQwr9gB7e48XIaEV4Oop01X8BmVUq1PaQjIiDjNg2wgUTMjWytlJK77pMb8hoHwYktzSAOT6QPcDQDcBD1IewmjGLdDSJ5jAPIBz9MR7XK1Deb03yXjFHFESRMKsMBczlVGChefe4%2BDBV%2BYUiBW0GaAlj%2BH%2F0%2Ftens1tbJ7PleMT%2Brg25Ip7ESW7xd8Ts9TuAzXyeDxuNFokxm6Mf6d%2BCMA9ImJmn7ZbIfX%2FExGqtJ2%2FKoVe4qnhMdLnthaozHgvLS8AeuMKMM8fNlKtUtBVKyTgamqV2FL8yNX5fy2Rr10mjoFVNlH3i1q2SYcFRqUdV0oR4Lwf5gUTbcdF7TPC06ko2Zjxa5BOeDkUet8gzDxn6nABjqkAYLmdcIt9Ikb%2BbEUACeuSdE7i%2BesUCPFVcV%2B6%2FLQgH7noMF0UhAwDmk3CnK1pO%2F3mWig38k1YU8n9kQZHd4J0ikaCIkGp9mVwA25CgzP98tcundis%2F2gHtVLofkXk83d6Sg%2BbpAvlCIwUEJZkmC6RnODEuYbcgWKMFllRMFnWFIRzi1QP9it39SrPzGrawcw35ov8YU51%2BGSBVfO7ELGCLS7wjjz&X-Amz-Signature=a68edca6188bfaf36003a7c576ba4f141fb67fd7333785bddceea933e2e950c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
