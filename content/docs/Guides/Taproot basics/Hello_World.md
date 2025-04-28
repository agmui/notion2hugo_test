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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666773QXBH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXkLI9P4%2F9LAKTBWeviQXIJ553oOrFESqQR3pM%2FcGNvgIhANY0PhJyyxgfXFxkkzYPedm3KBCvQs0Zm8z62mR0rtXNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwdFUselfnhpXfLm68q3AOORY77uKb85%2BPqE2ngnVvifZ8MvKP0L0PQ2%2FxAXK3f5xhYN7tV8LEut%2B0xRU1qhtUVLXcch%2BIbwVcOfP%2F8U9URhnQF6pDpmS4h8FgEA46uTZMPUnMHzl3Z1l%2BxzN%2FWOUhXTkkYD0H0KzPrdi2FG1LWLkutL74OcwzsTogq3lh2oF8comFS%2B7h1qfbxpapKXBVOfrevyKeGpPlYU8%2Fr%2F9tJoE%2F7R48hg6JdEcCfR8Aq3fURj4aexC%2FAjOsQRlmXWi4JNPVygxuIQTR1G4expRT0kBosklsjGWY963sjJVzFHqVa3kA%2BttOtikLl%2FN%2BIivXnOc0ctLZuvA2EGivbJicgF2iLDNbF%2BH2CI7gvO%2BeraRf9dnQwdy1EuvZE3yUnTkP9lIQAaPrGbWLJNaH9xYfEAVXYvF2Ea67DKTerc1E0fslGS0GlLuGe%2FqMG7fp6PUfQ8bEs8ytS7c3vL7YkB%2BwN7sVUKgLg80viE5gNkw9EZvLzXTOBkUgHqFVmKYdF5m7l3bNfxtpDpe2zQazhluSrxbBytn3YaY4H4qsPd7J4FJuPLcaUrKlhwIBQxTyMmtNO0jSwO4WZb6fp41k8gQf2P6bplLRE4hruDBsS9yiYfJuynU0LR8ICSGqNkTD8vLzABjqkAdnxAt47t4nnqI8wBdc0fqFdkC5qdXRZSQ6y7eaLEoPlSxwKbFeTzfylPZAg82a27YXMT6EZS6cLR12wGTUJmVDgYkU2ntT0IV%2FDMWshS8Cg94w8srQvcSh%2FRn3Xx%2FeCtvcZ4km1ln29HPTmwQcejqH1UfJAx7P2nbtvvbWMsuJp2k67V%2FAANXSh%2FqrRw127Nyb6FcsL%2BQgS3grM95%2BUjTUFF%2Bge&X-Amz-Signature=de06bf920f71047ea690d128d2ae1baf1415a3d94bd7ab38e018d02047cffe90&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666773QXBH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXkLI9P4%2F9LAKTBWeviQXIJ553oOrFESqQR3pM%2FcGNvgIhANY0PhJyyxgfXFxkkzYPedm3KBCvQs0Zm8z62mR0rtXNKv8DCG8QABoMNjM3NDIzMTgzODA1IgwdFUselfnhpXfLm68q3AOORY77uKb85%2BPqE2ngnVvifZ8MvKP0L0PQ2%2FxAXK3f5xhYN7tV8LEut%2B0xRU1qhtUVLXcch%2BIbwVcOfP%2F8U9URhnQF6pDpmS4h8FgEA46uTZMPUnMHzl3Z1l%2BxzN%2FWOUhXTkkYD0H0KzPrdi2FG1LWLkutL74OcwzsTogq3lh2oF8comFS%2B7h1qfbxpapKXBVOfrevyKeGpPlYU8%2Fr%2F9tJoE%2F7R48hg6JdEcCfR8Aq3fURj4aexC%2FAjOsQRlmXWi4JNPVygxuIQTR1G4expRT0kBosklsjGWY963sjJVzFHqVa3kA%2BttOtikLl%2FN%2BIivXnOc0ctLZuvA2EGivbJicgF2iLDNbF%2BH2CI7gvO%2BeraRf9dnQwdy1EuvZE3yUnTkP9lIQAaPrGbWLJNaH9xYfEAVXYvF2Ea67DKTerc1E0fslGS0GlLuGe%2FqMG7fp6PUfQ8bEs8ytS7c3vL7YkB%2BwN7sVUKgLg80viE5gNkw9EZvLzXTOBkUgHqFVmKYdF5m7l3bNfxtpDpe2zQazhluSrxbBytn3YaY4H4qsPd7J4FJuPLcaUrKlhwIBQxTyMmtNO0jSwO4WZb6fp41k8gQf2P6bplLRE4hruDBsS9yiYfJuynU0LR8ICSGqNkTD8vLzABjqkAdnxAt47t4nnqI8wBdc0fqFdkC5qdXRZSQ6y7eaLEoPlSxwKbFeTzfylPZAg82a27YXMT6EZS6cLR12wGTUJmVDgYkU2ntT0IV%2FDMWshS8Cg94w8srQvcSh%2FRn3Xx%2FeCtvcZ4km1ln29HPTmwQcejqH1UfJAx7P2nbtvvbWMsuJp2k67V%2FAANXSh%2FqrRw127Nyb6FcsL%2BQgS3grM95%2BUjTUFF%2Bge&X-Amz-Signature=1399cae340fc950b4c4d343a200ca8040f63bbdde38c9cf6037c5a57c71d7172&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
