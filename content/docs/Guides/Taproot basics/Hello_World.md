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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDOZVKH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvqr5I3OQv4Knr%2FOjD0%2Fwjcdrj16sieVJ6BxVI18BEYAiANX%2F%2FElTAJ%2FxtXnZf5q2LFt8qAp7W5bFx4QwuMVEFQFSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8C61wFBhlp5H1I9KtwDxk%2BSQeNjK%2B%2B2qp8fk8QV%2FNhhRgxqjGrfNKkwbudhomyEm4bvzZJRSudEab%2BEViUZfkcNY%2F9N1Qd%2FMF0VJjxaWaSe6NEhB%2FNQ1v0hGTpa2zmuBwdKAzCzXOADhKmNwW5lLfJoO%2BRdxyvCWenNEpZP5i9%2BQyKuLtvH2SWEut7gaOYiZn1OUF6Wfq1ZjQ66jQO8W%2BugDj%2BzXazkGa%2F1e1n3OET1hmOl0IkNhvyF4ZsrX2U7%2F4ZXFQjn6e6%2FMLsQPpBPYXd2fRI2LlcfGPNIkqtOslD1gmJ0%2BJ%2F8NIA3MCLejlRgwjMxqCR1wuLdlAgSNcjGSUaZmBwQMY%2FBKqRNQC77ejE8GCB0rN%2FvqOeFcONefC5vK%2Bim%2BXa2gX3XSpZ5pV4HHXjljM2DD9fO8Y8%2FCQI3xY3OG5IT%2FFx5wWrUJeKZhoWsJ15QUsnPJbhrBXdG5wi9jkTyENwO68BTIVOFHdt5H7l6nBPe5RaP2j9V6%2BPaQX%2BRNrijdK%2F4vczA%2FnPLdmTQEISZAoBVqQs3GT5pCZ%2BmTp%2Fstzdp0Nv1XJ24f1Xi3dwpWQ%2B30n9ygpOmv6ox9JtadKOfECTYdF6XmypGOaMqSrlGK%2Fsd6AfnRM3baGKQwwL45pbbo23LXzrcmCgwpNKrwQY6pgFpeMLbdX2zb5sd%2BUrKsZJZJIR6Hqr3jclq3G%2FM1vcOiKyi2jnQ2S0gZBaswvux5V%2BL%2BrY8bpSzpU5EsIkENPw3sLAKHkOiJCwXMhm3mTU23v%2BXpVHnfyoJJNuC01M32e6XZW6H%2B%2FZE2bQ5MJAiTwCiYoz86%2FEw7efycqYmMP5kISxVdNxpux2iwePLVdrJET1zrLqxo1qgDYrajREjOzTbGNQavSCp&X-Amz-Signature=2aa416fa4cdd47f299eb7dc22d1d0087c860dafb428434ec223bd45bcb434f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDOZVKH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvqr5I3OQv4Knr%2FOjD0%2Fwjcdrj16sieVJ6BxVI18BEYAiANX%2F%2FElTAJ%2FxtXnZf5q2LFt8qAp7W5bFx4QwuMVEFQFSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8C61wFBhlp5H1I9KtwDxk%2BSQeNjK%2B%2B2qp8fk8QV%2FNhhRgxqjGrfNKkwbudhomyEm4bvzZJRSudEab%2BEViUZfkcNY%2F9N1Qd%2FMF0VJjxaWaSe6NEhB%2FNQ1v0hGTpa2zmuBwdKAzCzXOADhKmNwW5lLfJoO%2BRdxyvCWenNEpZP5i9%2BQyKuLtvH2SWEut7gaOYiZn1OUF6Wfq1ZjQ66jQO8W%2BugDj%2BzXazkGa%2F1e1n3OET1hmOl0IkNhvyF4ZsrX2U7%2F4ZXFQjn6e6%2FMLsQPpBPYXd2fRI2LlcfGPNIkqtOslD1gmJ0%2BJ%2F8NIA3MCLejlRgwjMxqCR1wuLdlAgSNcjGSUaZmBwQMY%2FBKqRNQC77ejE8GCB0rN%2FvqOeFcONefC5vK%2Bim%2BXa2gX3XSpZ5pV4HHXjljM2DD9fO8Y8%2FCQI3xY3OG5IT%2FFx5wWrUJeKZhoWsJ15QUsnPJbhrBXdG5wi9jkTyENwO68BTIVOFHdt5H7l6nBPe5RaP2j9V6%2BPaQX%2BRNrijdK%2F4vczA%2FnPLdmTQEISZAoBVqQs3GT5pCZ%2BmTp%2Fstzdp0Nv1XJ24f1Xi3dwpWQ%2B30n9ygpOmv6ox9JtadKOfECTYdF6XmypGOaMqSrlGK%2Fsd6AfnRM3baGKQwwL45pbbo23LXzrcmCgwpNKrwQY6pgFpeMLbdX2zb5sd%2BUrKsZJZJIR6Hqr3jclq3G%2FM1vcOiKyi2jnQ2S0gZBaswvux5V%2BL%2BrY8bpSzpU5EsIkENPw3sLAKHkOiJCwXMhm3mTU23v%2BXpVHnfyoJJNuC01M32e6XZW6H%2B%2FZE2bQ5MJAiTwCiYoz86%2FEw7efycqYmMP5kISxVdNxpux2iwePLVdrJET1zrLqxo1qgDYrajREjOzTbGNQavSCp&X-Amz-Signature=1cdb7ca1dc752262bae5d35734609e87b8b09951e1227880907bd9a77cfb0416&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
