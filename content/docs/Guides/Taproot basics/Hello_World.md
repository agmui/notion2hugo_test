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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRNQSNK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVitc8Lh1qfAw1eY1als%2Bos%2B%2Bl5OclyeFExexo%2BKjLMAiAIKfTIGnbj6yfemlInmpfASARA2c0dkNHtWoBKpkE%2BhCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyzGbxpdFYSLw2rE0KtwDmX2x8Xrih94HH4G4W9jYx4J7Za6c94zc6ak1qo5%2B0ENb0pIjemJaaHEbSNxWgGmTAhj3MUlU6wLw8UDhaFtn8h%2FNIwMWhxEWt%2FsYrtYnuemvB%2FJjoJ3gpHsRqZ%2FyuTUAR7zujyYwciKg6zMb8PmXnhxP%2BV0Io4LxG5MT7XyyMyL4Q4I%2Bi1W7GQkJbqiv%2BWZsU%2FRA022Uilabmen%2FciwTIlF7MeUopsRoZHdg1c5hZ9Q%2BMxia%2BQYKjAakO%2FYgNtQfXVLQynSTyvPaEmfQ0VdezRfwMMG80HIgEwDICjCA0NYUbI6jl0%2BiFWli9spSyOuPKVy8dhfyNnRWwd3FZdflu9Fj0InvL1GA4%2FeM%2BEB2gKSBRvrTfx2ggTzCLbXMi2%2BwNIhGwiURarVYC%2FNTdgYi9rcH2oyQC0VnNAYmGx%2FyPX4Pt9uIZ5LkjiznTTkCokx8YAli%2FIPtoIbysPfKJ12rUZoaSxRxqdeI%2F6LfqMhl9EvRuxxRze3S19%2FFiyB%2FNBX4oGe%2BSlHn7ZFtTcmvtKoTHFlVy%2BYLvyhoZTdY0Y3lxBZwos%2BR4q2Hrg33lGoVNA%2BrzukX56ZmnJ%2Fnb09NoFCY9qivU16XNRM3sE9lUrfvCbq%2BkzZlUffABWrQZogwwfKlxAY6pgEYJQDhv6CfzE5lOFU1R6Pmx%2F43%2FjV7UrzHaNLFcPWWPpQ7FHClLjdKw2avtgrAzFvD1RqeED5iVDj03rsUeB%2BeItPrevBNb8BDF7QOlbqjV0kTArQfOjxKMIhncvM5oePG1mIa%2BLaq5xIOesewOc6YRc53ZFEdjPnSfgzNwPJ4PvW%2Fal%2BWt6iyiutqEtpiZEpJdUQlxDClTxVmbkMrNQ1kHkr%2Fc1IW&X-Amz-Signature=db5fbd6d4243649e0d4521dd7e16ca9540c8482e83452ddeac78748ce7bbd992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRNQSNK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVitc8Lh1qfAw1eY1als%2Bos%2B%2Bl5OclyeFExexo%2BKjLMAiAIKfTIGnbj6yfemlInmpfASARA2c0dkNHtWoBKpkE%2BhCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyzGbxpdFYSLw2rE0KtwDmX2x8Xrih94HH4G4W9jYx4J7Za6c94zc6ak1qo5%2B0ENb0pIjemJaaHEbSNxWgGmTAhj3MUlU6wLw8UDhaFtn8h%2FNIwMWhxEWt%2FsYrtYnuemvB%2FJjoJ3gpHsRqZ%2FyuTUAR7zujyYwciKg6zMb8PmXnhxP%2BV0Io4LxG5MT7XyyMyL4Q4I%2Bi1W7GQkJbqiv%2BWZsU%2FRA022Uilabmen%2FciwTIlF7MeUopsRoZHdg1c5hZ9Q%2BMxia%2BQYKjAakO%2FYgNtQfXVLQynSTyvPaEmfQ0VdezRfwMMG80HIgEwDICjCA0NYUbI6jl0%2BiFWli9spSyOuPKVy8dhfyNnRWwd3FZdflu9Fj0InvL1GA4%2FeM%2BEB2gKSBRvrTfx2ggTzCLbXMi2%2BwNIhGwiURarVYC%2FNTdgYi9rcH2oyQC0VnNAYmGx%2FyPX4Pt9uIZ5LkjiznTTkCokx8YAli%2FIPtoIbysPfKJ12rUZoaSxRxqdeI%2F6LfqMhl9EvRuxxRze3S19%2FFiyB%2FNBX4oGe%2BSlHn7ZFtTcmvtKoTHFlVy%2BYLvyhoZTdY0Y3lxBZwos%2BR4q2Hrg33lGoVNA%2BrzukX56ZmnJ%2Fnb09NoFCY9qivU16XNRM3sE9lUrfvCbq%2BkzZlUffABWrQZogwwfKlxAY6pgEYJQDhv6CfzE5lOFU1R6Pmx%2F43%2FjV7UrzHaNLFcPWWPpQ7FHClLjdKw2avtgrAzFvD1RqeED5iVDj03rsUeB%2BeItPrevBNb8BDF7QOlbqjV0kTArQfOjxKMIhncvM5oePG1mIa%2BLaq5xIOesewOc6YRc53ZFEdjPnSfgzNwPJ4PvW%2Fal%2BWt6iyiutqEtpiZEpJdUQlxDClTxVmbkMrNQ1kHkr%2Fc1IW&X-Amz-Signature=a4039f6602eb7bac860622f44bf09c9c529788c781c2ea7b61018f765d94c4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
