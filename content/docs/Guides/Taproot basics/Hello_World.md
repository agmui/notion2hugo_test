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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KXAR7G%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCHyHT2pXdUG%2FL%2FoIk%2F7EV0SwEARGeGbcYphDlTEEQwhsCIQCNvE0Rz%2FXmvhSOgficdCA65o0sEbIK5xJFD%2B8XpiBm1Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMSYKDr99O0dE6dp2iKtwD%2Ftbpe3j3OgeXHikxvdVqCfKTcz9qMn26YKOJz3pdg1f8H%2FVyMiwWwUMWGvELhpToOsDn3f0%2B2tmESbbqayPmO7ItXM6lzm7QmKvbVCxF%2F3RNCD2%2BFAyIHVYIJWe%2Bru%2F4%2F5VkXkDktwqEAf0cL4ZnG8k7M0%2FgGvQxN866U8BnO4agEYd%2FuzlORWALRnlt03nJ9Laylpo6tqXy9Ug%2B3grs533eX4mYPTI8yAsHBxDxwcu0gIXch6oRkRiaUDRd3jXxnDxXt93hlIWblsFvGCRnT8WFbhHJZLNY%2BjqzRLRlY0AhxkVQIVOMT6z%2FDNdzcvOXSepsL0KBJso7unTSGduYZkGVI2foPlmlFnTutEp70weQVuIJhWYG%2FJzp82VJkKTzKqctuKeDWwVBd9nt%2FVrFERtohECfOdY8whYP0FE%2FWB38%2B6mIPG9ToImGOU3%2BFfeigcOetVR0O5eTgnVT9PpFeAQmNG2myB%2FloJNRarQvGL7kdPHTyBSlutau2VmSluKuXO3bfA%2FQv4N5%2BRaqZsgj7pHjSIOgDaM5KzmW7OSLAuAexVr5bJjgAtDwWxg5%2FOmp8mpee3dNXPhz%2FROTxPji2M3WMR1E0oJtaAcLpygPoigY5AUL9sc837aZJb0w0rWtwwY6pgFAYoQ5tY0OdyLViLjYrLRvY6rMveNE6F6AK5DKfc622CvHba7R4jEs%2FV7RxHwR5%2BZrBxFSMDjeH7ix1PHMfGRA8GcopTYZEGNbIHQrcobMj%2Fp7jpm4Qcr3WhGrBlyvvFVt5ribECPf478A8qCoodxZNmdQR59h3QniHC3QwWFkvz8nDjkQDBbn0%2FT4doRe3gV7JgdnJQHhdK36%2BoWxmXxfCV3pz1aF&X-Amz-Signature=2bd941c1402f519fa5097729ebd3a5048d814235c18843602c6ff5050fbfde40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KXAR7G%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCHyHT2pXdUG%2FL%2FoIk%2F7EV0SwEARGeGbcYphDlTEEQwhsCIQCNvE0Rz%2FXmvhSOgficdCA65o0sEbIK5xJFD%2B8XpiBm1Sr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMSYKDr99O0dE6dp2iKtwD%2Ftbpe3j3OgeXHikxvdVqCfKTcz9qMn26YKOJz3pdg1f8H%2FVyMiwWwUMWGvELhpToOsDn3f0%2B2tmESbbqayPmO7ItXM6lzm7QmKvbVCxF%2F3RNCD2%2BFAyIHVYIJWe%2Bru%2F4%2F5VkXkDktwqEAf0cL4ZnG8k7M0%2FgGvQxN866U8BnO4agEYd%2FuzlORWALRnlt03nJ9Laylpo6tqXy9Ug%2B3grs533eX4mYPTI8yAsHBxDxwcu0gIXch6oRkRiaUDRd3jXxnDxXt93hlIWblsFvGCRnT8WFbhHJZLNY%2BjqzRLRlY0AhxkVQIVOMT6z%2FDNdzcvOXSepsL0KBJso7unTSGduYZkGVI2foPlmlFnTutEp70weQVuIJhWYG%2FJzp82VJkKTzKqctuKeDWwVBd9nt%2FVrFERtohECfOdY8whYP0FE%2FWB38%2B6mIPG9ToImGOU3%2BFfeigcOetVR0O5eTgnVT9PpFeAQmNG2myB%2FloJNRarQvGL7kdPHTyBSlutau2VmSluKuXO3bfA%2FQv4N5%2BRaqZsgj7pHjSIOgDaM5KzmW7OSLAuAexVr5bJjgAtDwWxg5%2FOmp8mpee3dNXPhz%2FROTxPji2M3WMR1E0oJtaAcLpygPoigY5AUL9sc837aZJb0w0rWtwwY6pgFAYoQ5tY0OdyLViLjYrLRvY6rMveNE6F6AK5DKfc622CvHba7R4jEs%2FV7RxHwR5%2BZrBxFSMDjeH7ix1PHMfGRA8GcopTYZEGNbIHQrcobMj%2Fp7jpm4Qcr3WhGrBlyvvFVt5ribECPf478A8qCoodxZNmdQR59h3QniHC3QwWFkvz8nDjkQDBbn0%2FT4doRe3gV7JgdnJQHhdK36%2BoWxmXxfCV3pz1aF&X-Amz-Signature=04449dc0c4ec3ca1a91e5b7da449df533ff3824d76887fefe7035cc53fe6cc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
