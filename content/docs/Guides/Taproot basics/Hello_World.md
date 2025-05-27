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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRS6ZD2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE68E7DYXMxsLL9eQQPqgI4yRGciKMHpkCzU5zAAJxWoAiEAsyjpsAqxWm3EJHP%2FvXFiUwa3j1qXUNDpzFXUePehOo8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKpMtbv3OeUXUlOh4ircAz17DrM5TR9JDEUaoJCQXQnRXn6fUytaIcQ5q8pySLiFC3crP7qyOHKhS8AW%2FGrGl7lx1KBpMVRJ3lO8wXFizRSGjU5RACy871C2TMW1AKYwtfOdwXzdD2Hpz03vi1J3HaWYB3VryEXfhC2rGyuiXIvGO9tNO%2FzIHbr6t%2BI%2Bwz8qEoYgbhFkjmhIxO5WUpewKRQi2LmFGAtSoBpZvhc9ae63B%2F0%2FAgmVjMuYXtkYQCivzasMCh3JsImfXJCOCe8teY7akHWQvfNFKOmDtad6wy%2FnM%2FmKCVqO1Uq8ZSiZ7D7QyY67L5SO3fOFe5JvFAVftV56q1pAdsCuLx5zlh8EQVD5m4H6%2BpAB9z5Po9%2BVYjCagjB369CFk3IuUqA7OXrhvswQ6ltUzPDBigGwGEk1dld5Ls%2FzoYw%2BldEejjYsyNnQSTxoIr9vzZDNs6%2FZgjbKbMh%2By8lOvSon3Q0r6Q%2BZI%2BCIphGFkRQOX2XQgzkED3cM2q5AvivTdeLdEJCyDYFb4XgGBsGIQDkH1Apyt9l4PkkOm3lvpKZk8Q98VAGVzp9A8C32hWeAxIz7MdmVlAwS%2BBEm3KbSAKij%2BGE%2BMgIsCtx%2BHePY9ykxLEit%2FE80eOdld1esUnIhytXAsnHYMOD81sEGOqUBDXRcb%2FztJBZNS%2Bb5XH%2Bnwce%2B3Bu22GvxomYP6mtvk3YOOmVK4HdhfxKx36jRghnmIEx588UmQOQNjNLThXLujNxCKQomeb6VyfEYVxxUNZYVWIQZYAgJlK%2F64%2Bga7Sa29xmNiP7tbCj1m09hDnpHiPGq%2FYgnIM8zlom2UCBxHfausS9BgZ7xHu2p7I71A5%2BPJKOeMlxzuIX99ZRMuMaoKi8tibA%2B&X-Amz-Signature=b8fe49fd353b49127b96307489950d34fdeb8bd409cf13be717bcd0a5906a10a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRS6ZD2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE68E7DYXMxsLL9eQQPqgI4yRGciKMHpkCzU5zAAJxWoAiEAsyjpsAqxWm3EJHP%2FvXFiUwa3j1qXUNDpzFXUePehOo8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKpMtbv3OeUXUlOh4ircAz17DrM5TR9JDEUaoJCQXQnRXn6fUytaIcQ5q8pySLiFC3crP7qyOHKhS8AW%2FGrGl7lx1KBpMVRJ3lO8wXFizRSGjU5RACy871C2TMW1AKYwtfOdwXzdD2Hpz03vi1J3HaWYB3VryEXfhC2rGyuiXIvGO9tNO%2FzIHbr6t%2BI%2Bwz8qEoYgbhFkjmhIxO5WUpewKRQi2LmFGAtSoBpZvhc9ae63B%2F0%2FAgmVjMuYXtkYQCivzasMCh3JsImfXJCOCe8teY7akHWQvfNFKOmDtad6wy%2FnM%2FmKCVqO1Uq8ZSiZ7D7QyY67L5SO3fOFe5JvFAVftV56q1pAdsCuLx5zlh8EQVD5m4H6%2BpAB9z5Po9%2BVYjCagjB369CFk3IuUqA7OXrhvswQ6ltUzPDBigGwGEk1dld5Ls%2FzoYw%2BldEejjYsyNnQSTxoIr9vzZDNs6%2FZgjbKbMh%2By8lOvSon3Q0r6Q%2BZI%2BCIphGFkRQOX2XQgzkED3cM2q5AvivTdeLdEJCyDYFb4XgGBsGIQDkH1Apyt9l4PkkOm3lvpKZk8Q98VAGVzp9A8C32hWeAxIz7MdmVlAwS%2BBEm3KbSAKij%2BGE%2BMgIsCtx%2BHePY9ykxLEit%2FE80eOdld1esUnIhytXAsnHYMOD81sEGOqUBDXRcb%2FztJBZNS%2Bb5XH%2Bnwce%2B3Bu22GvxomYP6mtvk3YOOmVK4HdhfxKx36jRghnmIEx588UmQOQNjNLThXLujNxCKQomeb6VyfEYVxxUNZYVWIQZYAgJlK%2F64%2Bga7Sa29xmNiP7tbCj1m09hDnpHiPGq%2FYgnIM8zlom2UCBxHfausS9BgZ7xHu2p7I71A5%2BPJKOeMlxzuIX99ZRMuMaoKi8tibA%2B&X-Amz-Signature=1ffc05b9f00b6d39030aa0834a1b76864a80ea56ed6ba0de4bec90e129675d63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
