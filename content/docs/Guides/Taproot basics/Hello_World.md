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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGDJK7I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1M1h0EidnR4To3aw8sLIpaPkXrXE0krxRtNJvCLb4nQIgeIX%2FTJhvw4zJ9wCHxAQWjaoIyx3nPNm1Oj4mslZ77LsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEswXeCTcEDP6yw0DCrcA4aN2JARUuq%2BZFPMUDvbz6C%2Flc2wDGppxUvRREYg8FxPK55x3bz8vF9%2B7zNsBhHf8C4cpoz8vV%2BbpP0ycvluBNRi5n3s30yuHKTsV5a%2FBD8jHwCgFr45XLvhI5sOD4S5pV7dSQ7r6WL7ZZ49Ny%2FWpFsn4gDJ7gmNYuJj7s8qtZPfeIcRwrj8qAeY7rK2PUzGPvoUD9O1RIO%2BtqWUteXxS4j05tgocMC0vNomFa%2BfPBGT4bEYYGEd%2Fk5fymAiXt%2FwjQHTcNDZ2tZe7XlO%2FfWjYVa213n3D%2Fhjy8Th07Pqgr9nElfMNJQl3jYYOX3hvcHozJ%2BtOgPcziRLNAo%2F3oatOk80SblkFw4Q1V6o8xyqzZYlha2cJXZxheq5doUNp5bRXYnMPu9cABSGK%2FPKzkqIVzMj1Wpl%2Fi30H5Qgg%2F6CETOVcEcL0wb%2Bdvzc77sRw267G%2Bcru4ZCfj0yWgiBPTu%2FmGb7dkTKvlfNY5n%2F%2BC8fLB5q%2FFoy9ZH2BpQqkRglyxqz6wulRbuhYyNDkTTbs%2F4X2rJBCK1DFygdxW5M%2B%2FAQUak04suE0fhSnbLpEmav3CBIeduJksIwrt7TcnKxKgMB3lplGScfRQlzclSrMaZG8uITiqJY5z7luK3I9mlwMIDF7bwGOqUBGPHHTCS6hK5AG8N1lxV9RUZdl0LweJi0pAd0N%2Fsa%2FckkJz%2Fzk9z7ENNshDASA%2BKKYfuEL9PR%2FGKcDEohtE2xVG2CiYEYV5k2bYviWY9IaFB%2Br5bYC3i%2FiwNpv3ccx3Nfa6tQ5kYYVjG0eR2QKV4%2BseGMyY8Qh41czES2C24S8QOgXtbw74sSVb3f85%2FqHxV9mSILjMUakus3a6QaT5MGH0EAPcM0&X-Amz-Signature=8b6cdca24d968a147a742c27a4f0e17dbdbf1e83fd23447a5b14c6c35b570b47&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGDJK7I%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1M1h0EidnR4To3aw8sLIpaPkXrXE0krxRtNJvCLb4nQIgeIX%2FTJhvw4zJ9wCHxAQWjaoIyx3nPNm1Oj4mslZ77LsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEswXeCTcEDP6yw0DCrcA4aN2JARUuq%2BZFPMUDvbz6C%2Flc2wDGppxUvRREYg8FxPK55x3bz8vF9%2B7zNsBhHf8C4cpoz8vV%2BbpP0ycvluBNRi5n3s30yuHKTsV5a%2FBD8jHwCgFr45XLvhI5sOD4S5pV7dSQ7r6WL7ZZ49Ny%2FWpFsn4gDJ7gmNYuJj7s8qtZPfeIcRwrj8qAeY7rK2PUzGPvoUD9O1RIO%2BtqWUteXxS4j05tgocMC0vNomFa%2BfPBGT4bEYYGEd%2Fk5fymAiXt%2FwjQHTcNDZ2tZe7XlO%2FfWjYVa213n3D%2Fhjy8Th07Pqgr9nElfMNJQl3jYYOX3hvcHozJ%2BtOgPcziRLNAo%2F3oatOk80SblkFw4Q1V6o8xyqzZYlha2cJXZxheq5doUNp5bRXYnMPu9cABSGK%2FPKzkqIVzMj1Wpl%2Fi30H5Qgg%2F6CETOVcEcL0wb%2Bdvzc77sRw267G%2Bcru4ZCfj0yWgiBPTu%2FmGb7dkTKvlfNY5n%2F%2BC8fLB5q%2FFoy9ZH2BpQqkRglyxqz6wulRbuhYyNDkTTbs%2F4X2rJBCK1DFygdxW5M%2B%2FAQUak04suE0fhSnbLpEmav3CBIeduJksIwrt7TcnKxKgMB3lplGScfRQlzclSrMaZG8uITiqJY5z7luK3I9mlwMIDF7bwGOqUBGPHHTCS6hK5AG8N1lxV9RUZdl0LweJi0pAd0N%2Fsa%2FckkJz%2Fzk9z7ENNshDASA%2BKKYfuEL9PR%2FGKcDEohtE2xVG2CiYEYV5k2bYviWY9IaFB%2Br5bYC3i%2FiwNpv3ccx3Nfa6tQ5kYYVjG0eR2QKV4%2BseGMyY8Qh41czES2C24S8QOgXtbw74sSVb3f85%2FqHxV9mSILjMUakus3a6QaT5MGH0EAPcM0&X-Amz-Signature=c9d52267bd4e50952c05a51091d77a6f0c3dc5df37fad876471bc4cf78dd1109&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
