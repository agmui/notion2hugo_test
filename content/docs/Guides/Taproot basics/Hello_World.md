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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JU5T4X%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIENFPf%2BBXPWM4IMQRmMU0zgyDt%2BWKFiIkGUXSCZmID1YAiBWUqIF2vrJ4O%2F%2F%2Bt7dLcs7HAA4EYnkmM1LYQ42WeQd%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNCGjslECcCqkcI2KtwDiNnSzhmLK%2F81vmIc5biY91GeG7k7ZCJlSbw71vpslLF0WEHlv3gB3qjkxd9rO8QzxB3mevH%2FqHfR6jwOf7XV9WJxt%2FtWqZfzC0FgNK6AbGmkDp3PPfu7VoP9Idtgh%2B6K9nTrv0RrZvQg4nwIRINGDBQRRXUemhbVMsp5UOTzgP21A3qhIxBuFQWup9STUx%2FrU3hl%2FU08HysG90gbquy1mo2k1Z2FZV8ZaRKV6vBBI5G0aXvh%2BnPMKo1rkBBk1hEmcdXsCEMdrBsEbHxiQiji2KU0tvqfH6qD1w16vZcgoxljLIfmXpFuQdN%2FGLWJDat0aspwpahJ4qg43wkiwcfpp%2BMuds8Cw1sAG7zVqgZHsEJbMmpJ0UnDrWy50BPdymtNIKQCcTPlFXtzRYetiKTfUJ4JNU2kvsa79cAG298aWqiYofJhdZNkxKDgzz2w7TQYhKPgvnUxz%2B%2Bbkdh7TuKIcjinsuFp4PCtERPMXEYyB7nKK%2BuZblE5%2BILnsrvKx9Ybtd0u2R8jq7gp8za%2FEUlRAngNaOHaCOwNdI1aEgADnrNmMXeuYYH5Eyk0sCPJmkzLopcdMuqnFFRoy77lqJIQmTdgtuLMKjwKsSNyZ8d0G4Y3meWjMRk389bg%2B8YwnYbVvQY6pgHLJ3VedY8esw6TvgqTjFcGKXufQuERVA%2BXnU%2BQPTzLCLZMGUGK%2BYv7sI%2BVPJyVd1Waar1jsW0GH2X0wGu7i4MtrKaYy6XpgA%2FCE3NGnqSnq0tPgKsAluK4DNWTGQMaXL8%2Fp0HfQE3%2F4kXrtTT6KXoOh3Hf2LPEAxBq2OIGI%2B0oxIVs4aoyVexIBFoAci%2B0WpUf7XS20eItab2Ssga1j%2FRA1wT8j2eV&X-Amz-Signature=9eee2ddd5fc50da8ff44654b006069fb616f4348c6721eeda32a2db6718a696c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JU5T4X%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIENFPf%2BBXPWM4IMQRmMU0zgyDt%2BWKFiIkGUXSCZmID1YAiBWUqIF2vrJ4O%2F%2F%2Bt7dLcs7HAA4EYnkmM1LYQ42WeQd%2FCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNCGjslECcCqkcI2KtwDiNnSzhmLK%2F81vmIc5biY91GeG7k7ZCJlSbw71vpslLF0WEHlv3gB3qjkxd9rO8QzxB3mevH%2FqHfR6jwOf7XV9WJxt%2FtWqZfzC0FgNK6AbGmkDp3PPfu7VoP9Idtgh%2B6K9nTrv0RrZvQg4nwIRINGDBQRRXUemhbVMsp5UOTzgP21A3qhIxBuFQWup9STUx%2FrU3hl%2FU08HysG90gbquy1mo2k1Z2FZV8ZaRKV6vBBI5G0aXvh%2BnPMKo1rkBBk1hEmcdXsCEMdrBsEbHxiQiji2KU0tvqfH6qD1w16vZcgoxljLIfmXpFuQdN%2FGLWJDat0aspwpahJ4qg43wkiwcfpp%2BMuds8Cw1sAG7zVqgZHsEJbMmpJ0UnDrWy50BPdymtNIKQCcTPlFXtzRYetiKTfUJ4JNU2kvsa79cAG298aWqiYofJhdZNkxKDgzz2w7TQYhKPgvnUxz%2B%2Bbkdh7TuKIcjinsuFp4PCtERPMXEYyB7nKK%2BuZblE5%2BILnsrvKx9Ybtd0u2R8jq7gp8za%2FEUlRAngNaOHaCOwNdI1aEgADnrNmMXeuYYH5Eyk0sCPJmkzLopcdMuqnFFRoy77lqJIQmTdgtuLMKjwKsSNyZ8d0G4Y3meWjMRk389bg%2B8YwnYbVvQY6pgHLJ3VedY8esw6TvgqTjFcGKXufQuERVA%2BXnU%2BQPTzLCLZMGUGK%2BYv7sI%2BVPJyVd1Waar1jsW0GH2X0wGu7i4MtrKaYy6XpgA%2FCE3NGnqSnq0tPgKsAluK4DNWTGQMaXL8%2Fp0HfQE3%2F4kXrtTT6KXoOh3Hf2LPEAxBq2OIGI%2B0oxIVs4aoyVexIBFoAci%2B0WpUf7XS20eItab2Ssga1j%2FRA1wT8j2eV&X-Amz-Signature=386f5a9094e3faf1cc588a572470eccc1d572049c449a7862aef4c7f94fa0710&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
