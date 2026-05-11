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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IIDX5AH%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCF%2F2%2FeeXp88xXUC4oMVYmSJROLE6ByssNz5X6RCB%2FU8QIgWawqAMjzqOzia2255eJ%2FePzel4SBXuQNZmRSgZCs9fgq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDFocHgVLWWjlqDI1fCrcA7jLYZrlhVa%2Fxy4jPk3h%2BIwCdIy5yrIUelurKnoKypGazaVpsbklX8lIjJgI8NkkhYlymuz4hprsZIdtzNxOX9EjL%2F3u6T85PJcDvCccTvtBd%2B4JOWZziI20K64jYamVrxma1vMGNfN9Kob9FTWQe%2BSHafBlEtx8rJhQE3MH0JagkrSvktRVrIH0rW24nT%2B%2Fa0MRmGey5VU1fV2THnUR1QJq%2F%2F%2BHo7Hv5ChGX3b3CkFUIha6Lw2agPng1gxS3H5G2EffKv8Y0D1R7jBJ%2Ft2KDDNF%2F0J67pCFQz0COdK5NYWvzmCnzCZKKOE%2FeECk7SjGBEkPbSOouGNiKPH%2BNI%2FhAzikwnF%2BOtp0PYe2y1AYxseTKEtQse2AMwbscb5Awkn1vmNugCJhN1DnnLDPMh%2BKm7shfyBXA9GRL07KtrBQeENBl43AQj1QcyYfohk7colMjdsDUQg6SjBGHOjvIt4IB1tm91yDepxwMtOZfe9ILU3YsKEZGbImgHYlxaxjiz%2BextEdH49AW6LigFN0gZlk%2BnBU3eUNNP6uHP1TILJgkhjJiT%2FdTm8IFTh%2F98B85v%2Bq45tgCNaT0L6GXDQxR8efi38%2FEyCFvLNGn1PgW77BukgjWPkb1OK6AiioRSOtMKuEhdAGOqUBYqvQcG11QdMg3y713xa38Fr5A92s%2FGNZ5o4kZ7g%2FPnMWOQirnlpsjWu30u3oVmrBtQIyTUDkdNFx5n2g3GwOQmrtHa1C%2Fg1nMpYjJQi8vX2uaYBTcvZp6fBwPSFt%2BWxnaOOrRs%2FjLTOGDrYTBVJCS4HrX4NJJrMUNWUMp69VUm9z3FMAhWLmNQv5H4Ybib3Fhf5lp3w3k4Nn69eQC30EyghzFyM0&X-Amz-Signature=826f58792cc55b467fc089848bf1f0c40970b06bed57e4ee82550dcfdd62b6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IIDX5AH%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCF%2F2%2FeeXp88xXUC4oMVYmSJROLE6ByssNz5X6RCB%2FU8QIgWawqAMjzqOzia2255eJ%2FePzel4SBXuQNZmRSgZCs9fgq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDFocHgVLWWjlqDI1fCrcA7jLYZrlhVa%2Fxy4jPk3h%2BIwCdIy5yrIUelurKnoKypGazaVpsbklX8lIjJgI8NkkhYlymuz4hprsZIdtzNxOX9EjL%2F3u6T85PJcDvCccTvtBd%2B4JOWZziI20K64jYamVrxma1vMGNfN9Kob9FTWQe%2BSHafBlEtx8rJhQE3MH0JagkrSvktRVrIH0rW24nT%2B%2Fa0MRmGey5VU1fV2THnUR1QJq%2F%2F%2BHo7Hv5ChGX3b3CkFUIha6Lw2agPng1gxS3H5G2EffKv8Y0D1R7jBJ%2Ft2KDDNF%2F0J67pCFQz0COdK5NYWvzmCnzCZKKOE%2FeECk7SjGBEkPbSOouGNiKPH%2BNI%2FhAzikwnF%2BOtp0PYe2y1AYxseTKEtQse2AMwbscb5Awkn1vmNugCJhN1DnnLDPMh%2BKm7shfyBXA9GRL07KtrBQeENBl43AQj1QcyYfohk7colMjdsDUQg6SjBGHOjvIt4IB1tm91yDepxwMtOZfe9ILU3YsKEZGbImgHYlxaxjiz%2BextEdH49AW6LigFN0gZlk%2BnBU3eUNNP6uHP1TILJgkhjJiT%2FdTm8IFTh%2F98B85v%2Bq45tgCNaT0L6GXDQxR8efi38%2FEyCFvLNGn1PgW77BukgjWPkb1OK6AiioRSOtMKuEhdAGOqUBYqvQcG11QdMg3y713xa38Fr5A92s%2FGNZ5o4kZ7g%2FPnMWOQirnlpsjWu30u3oVmrBtQIyTUDkdNFx5n2g3GwOQmrtHa1C%2Fg1nMpYjJQi8vX2uaYBTcvZp6fBwPSFt%2BWxnaOOrRs%2FjLTOGDrYTBVJCS4HrX4NJJrMUNWUMp69VUm9z3FMAhWLmNQv5H4Ybib3Fhf5lp3w3k4Nn69eQC30EyghzFyM0&X-Amz-Signature=65135cc2d771a0504d73ac0ec7780b253728d273b460f2a920e8ad23201106e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
