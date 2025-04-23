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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZORHT3B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGLfXC07PU7esUfH9G%2FQ5GZ7v4w6Z9HqVfCq2fPloJYJAiB%2BvO9PFPhQbIiPtfQSE9u9oRqdqNN1cTsgwQmf6Csi0SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk0RRPzxdiZUTCpWSKtwDyIlyCoy%2FGsF9cw46ak8NFsmJTlEfF%2FOU4b641vBQ81j98byU5YlwfPjCvr7zFE%2FX5Wd4PeHNx%2FyHXZsdckwuI79j6USgAtJX9fBxwvs6jVNvf5FRdlcjNtDpYEsO8KqxdFrQphbR%2B2BnIOlCLmGBXMzeBDMj00kK5LqgxwfdUtD8Bp4wfdWWYR1xdpGPQ9TqnmHWfZxECXKLsHepxPsV%2BoSgJxD4I7F2sl6ytFWZrOIv0S8VfumP1l%2FhgCPY2s7ZOXyiKhoWs56GP1TMVCBG76jrFFRUflbcLf06ilY1HzOnQCBaiBIr3y261yspgvWMj3HhuqUzTXkl6W10LBmxvald61caz1o7%2FDzP4a4pg3fOMeFcRcpJ%2BLrhTBjC8LFrfAKKrQtynCQNxH1vKdfVIh0zeDWeSwNN3pnPRf1DfWQPrQsYZIeN3e2EL2ZFh%2BhkjHdrbde4e%2F%2F3oJPIYEupmzccbquLvxENe6xQj%2BVe8ElSiFBkyWtClEKTp8hz46Nd3VPU3uB3N%2BXR81XzYqo4gaayxS%2BSLq%2FOBFgkbTY2Uad07decPGAMpx6uxRFiY%2FemJ%2F32TpxgSbAOIyp3gW2u1Jt3XYmj%2FA80dWQSJxNtRcdUJ8sQMsQXfcD2L6YwjYekwAY6pgFj8kzOS%2B8GyWhLGF%2B2mf7nAUoONs7BUnEPl6jU%2FkXCdtHjqkc6lqsH1y8jAEhcN3VSIbF%2BJUUz1viPCwQXg%2B1PgxW%2FLcRE73L7lS1tWHyXn6Jcrc6cTW%2FYozVgLms5cia9yn4zVy6Vb0%2FAQhZtRWVw7kihcp1ou29WESgJyecGB3jv6BzwNqOuZjve2OSEr2g3tcIA8dB%2F3c43R5Tl7AwcZpHPdAbZ&X-Amz-Signature=bc4a1830ca23b88b4f61b3d6a2ed97c0a9518d5a6f737ea774ca013502dde86a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZORHT3B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGLfXC07PU7esUfH9G%2FQ5GZ7v4w6Z9HqVfCq2fPloJYJAiB%2BvO9PFPhQbIiPtfQSE9u9oRqdqNN1cTsgwQmf6Csi0SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk0RRPzxdiZUTCpWSKtwDyIlyCoy%2FGsF9cw46ak8NFsmJTlEfF%2FOU4b641vBQ81j98byU5YlwfPjCvr7zFE%2FX5Wd4PeHNx%2FyHXZsdckwuI79j6USgAtJX9fBxwvs6jVNvf5FRdlcjNtDpYEsO8KqxdFrQphbR%2B2BnIOlCLmGBXMzeBDMj00kK5LqgxwfdUtD8Bp4wfdWWYR1xdpGPQ9TqnmHWfZxECXKLsHepxPsV%2BoSgJxD4I7F2sl6ytFWZrOIv0S8VfumP1l%2FhgCPY2s7ZOXyiKhoWs56GP1TMVCBG76jrFFRUflbcLf06ilY1HzOnQCBaiBIr3y261yspgvWMj3HhuqUzTXkl6W10LBmxvald61caz1o7%2FDzP4a4pg3fOMeFcRcpJ%2BLrhTBjC8LFrfAKKrQtynCQNxH1vKdfVIh0zeDWeSwNN3pnPRf1DfWQPrQsYZIeN3e2EL2ZFh%2BhkjHdrbde4e%2F%2F3oJPIYEupmzccbquLvxENe6xQj%2BVe8ElSiFBkyWtClEKTp8hz46Nd3VPU3uB3N%2BXR81XzYqo4gaayxS%2BSLq%2FOBFgkbTY2Uad07decPGAMpx6uxRFiY%2FemJ%2F32TpxgSbAOIyp3gW2u1Jt3XYmj%2FA80dWQSJxNtRcdUJ8sQMsQXfcD2L6YwjYekwAY6pgFj8kzOS%2B8GyWhLGF%2B2mf7nAUoONs7BUnEPl6jU%2FkXCdtHjqkc6lqsH1y8jAEhcN3VSIbF%2BJUUz1viPCwQXg%2B1PgxW%2FLcRE73L7lS1tWHyXn6Jcrc6cTW%2FYozVgLms5cia9yn4zVy6Vb0%2FAQhZtRWVw7kihcp1ou29WESgJyecGB3jv6BzwNqOuZjve2OSEr2g3tcIA8dB%2F3c43R5Tl7AwcZpHPdAbZ&X-Amz-Signature=78b8874eec8eacb0801272b294d6cef2d13bc776ba18f244cbfaa36c9842a93d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
