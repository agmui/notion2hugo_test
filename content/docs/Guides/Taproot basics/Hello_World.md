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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMEOYJT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGi2Ijy9%2Fc%2FhhxVnkz7AR3hljJlaBcnj1vsQXvttW8ZPAiAiOzkNS40Vu%2FAkDeqOYR4zW%2FZ04ul7TZZCrT5mh0fLRCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJ9je%2Fdw4%2FaKWAkTKtwD7lYXm8GM9INKRU6qJnLEcQYvKGCSss71%2FHr0s%2BY67KJZO%2BXhUNBJTeNaWmyaukfdvu8BmY3UBpWs1wZ4Z%2BnQpRDLYQapfvh%2FNS1VQY%2F%2F8WN2pd5WWFqhv9FghPb5cimczVYwNh%2BkLpYnVUTb2i2589maaWW8%2B5s7EAHGzwE%2BLEn6ZHrR81pVtkqbrbJPDHhAMRV9%2FveflfpuHXtqvaJVKITfkg2gog%2FQRtBGBGWSZSOQriIzagH6FeWOqeNdVLnF6j4VdWOa5eVMfOFrWZiAPuSpLVgUgZ8igyH0TTlG4fN5YcxxaXSj6gOI36tNdnd7RrodyrzLOe6lB0JYNrCBkdxJW2ev7q9EjLIDH7TBXhiFYAx6CP3kjRk7oKvHHCV3hFOEskhSDtwmkL%2FRvR6m80BUq9y1nFzCOFLfCHPyHEpMy8EIVSHzFhfFOmdJO1YelN63wwOnAFEobhR7D96MYmlZjyy7VjZqHj3dHIHJKpAUQdZIWLS0I0rgpXliA5UFMyNq5u6xQIHx0ZP4EkgqUduSk%2Fwd%2Fvvz2%2BdLdmiOkanJwrgUP9SHdiPVfuDpPevZkf4FWocUxYxl%2FQ8BxyloPrWJA0HlTMRxACguzrdxS8vB3GgUslHN7JH3waAw6I6%2FvgY6pgHzGzn59er8E0inxWQ07mpOYaYUpUL7Aycaq0z4hpzNyHGYWnq%2BEnmHQ5agyK9mbRBeTwFvmV296NYIHEqOt4b%2BrdMkr7r4afTYtVp8pFTcmQOBo7uczPKW8At7TPUi4DGkxQ4iuo%2BmoCkk%2BOYvqbfujF8tdEPrHWzbFQE25d4u3oApVMitVWLSt3TKVaJjc5MlYgQmCAdxODMZCzpS%2B1wr4e2sSV%2F2&X-Amz-Signature=1293a769d40bea261ea31fec831993749eff799e04b2d5d0d132cc8f0347d190&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMEOYJT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGi2Ijy9%2Fc%2FhhxVnkz7AR3hljJlaBcnj1vsQXvttW8ZPAiAiOzkNS40Vu%2FAkDeqOYR4zW%2FZ04ul7TZZCrT5mh0fLRCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwJ9je%2Fdw4%2FaKWAkTKtwD7lYXm8GM9INKRU6qJnLEcQYvKGCSss71%2FHr0s%2BY67KJZO%2BXhUNBJTeNaWmyaukfdvu8BmY3UBpWs1wZ4Z%2BnQpRDLYQapfvh%2FNS1VQY%2F%2F8WN2pd5WWFqhv9FghPb5cimczVYwNh%2BkLpYnVUTb2i2589maaWW8%2B5s7EAHGzwE%2BLEn6ZHrR81pVtkqbrbJPDHhAMRV9%2FveflfpuHXtqvaJVKITfkg2gog%2FQRtBGBGWSZSOQriIzagH6FeWOqeNdVLnF6j4VdWOa5eVMfOFrWZiAPuSpLVgUgZ8igyH0TTlG4fN5YcxxaXSj6gOI36tNdnd7RrodyrzLOe6lB0JYNrCBkdxJW2ev7q9EjLIDH7TBXhiFYAx6CP3kjRk7oKvHHCV3hFOEskhSDtwmkL%2FRvR6m80BUq9y1nFzCOFLfCHPyHEpMy8EIVSHzFhfFOmdJO1YelN63wwOnAFEobhR7D96MYmlZjyy7VjZqHj3dHIHJKpAUQdZIWLS0I0rgpXliA5UFMyNq5u6xQIHx0ZP4EkgqUduSk%2Fwd%2Fvvz2%2BdLdmiOkanJwrgUP9SHdiPVfuDpPevZkf4FWocUxYxl%2FQ8BxyloPrWJA0HlTMRxACguzrdxS8vB3GgUslHN7JH3waAw6I6%2FvgY6pgHzGzn59er8E0inxWQ07mpOYaYUpUL7Aycaq0z4hpzNyHGYWnq%2BEnmHQ5agyK9mbRBeTwFvmV296NYIHEqOt4b%2BrdMkr7r4afTYtVp8pFTcmQOBo7uczPKW8At7TPUi4DGkxQ4iuo%2BmoCkk%2BOYvqbfujF8tdEPrHWzbFQE25d4u3oApVMitVWLSt3TKVaJjc5MlYgQmCAdxODMZCzpS%2B1wr4e2sSV%2F2&X-Amz-Signature=153d1be24ac7ba212536e0e181e4cb42adf82c38082ef91a752e640f131f3737&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
