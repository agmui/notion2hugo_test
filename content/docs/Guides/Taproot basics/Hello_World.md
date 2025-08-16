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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MDGVJN2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDk%2BO3WRtf%2FoZ2uQ%2FvgmSu8w3Y6P5V7Uo2PdRgtigx6ewIgPxLTA2fTLAciCEeHiEKA28CAOWukvz9sfz%2Fv2EqVOK8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMtamrkoYpbnKf30ayrcAzXT4jt46BiyzSDsRb2KDlAFsADiZD5n%2FHyXFahLo07SS46sWr1GEs1U9uosVg%2BrdF8wg%2FjS58GmgxKDgW9lvod2TmzOpZ6tz6ZBIqTpnmhkUtGcBUYZawWz2ar8n9PEcAwjbsvYGKqdw7lrV3NwCjotHaHT6%2BN4N4tpPhq2dyIlwNE6z69tiI8Q5XxBazQlCdv34kc3DA60L%2BZY1CCVttgNM70dlxXMFNMBfZg%2FeD%2Fqblw1K5npi7KPdjz0HeZBj34cuV3Yb%2FosnYBTTscMAPux4DFGZ3e57QtVcvs9iD8GETWgT2ouTJc%2B1jrdEVFaNdRKjbruq%2BMi2CsOaNXimz01RUCMO5lyXcIrQx5OOXXU9zvkxDvw2%2BLL43RnA%2BbPOZUw%2FzYu8H%2F3Ncnh8ZxCR%2B8glHU2yAni8y2mVMg%2FG9FY2cLoU04%2Bn4QNQelM3%2FfWU%2FeP9KW93Lg8Ws%2B7YrxqFarUITYZnW%2B1gCd4EEREF%2F5jNrciYhtPcDSERBBOc0VUwvhbgMYXQY6G4RCAh8I00Gfp7NWAt95F6nEWi3h9waL%2FeZJw7reFZtajHD43TaX5mr1Z2YWG%2BoEtJyVengJc%2Bm7SNDUDYLmEEbu3cU%2B3SAdCkrCzu67xLfiNWVJjMKrk%2F8QGOqUB8lcMt5LZBYZDzWyymKHVWxyiloYxAL4wlEdnQi5ORElKlrntT0VxCGazQrfuSFMeMt17%2Fyw89VSQQ4zJGfusHlSP4E5S2DNNsiOz0qJAByDghLBehpXeNlZkm6vvHwRFrAmWih%2FlMSq3fBUf4y3ZQW8eTiJhqKKguC99u5rM7Hq59bZHxAVhUWghPXia%2FlzSJRpdagwBtYqQL6SUHSNYpfWFDYte&X-Amz-Signature=30003fe27ff4bf859435fe5ee3a14a4dc0e7e5f038216f51c35a30f46f8fe77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MDGVJN2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDk%2BO3WRtf%2FoZ2uQ%2FvgmSu8w3Y6P5V7Uo2PdRgtigx6ewIgPxLTA2fTLAciCEeHiEKA28CAOWukvz9sfz%2Fv2EqVOK8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMtamrkoYpbnKf30ayrcAzXT4jt46BiyzSDsRb2KDlAFsADiZD5n%2FHyXFahLo07SS46sWr1GEs1U9uosVg%2BrdF8wg%2FjS58GmgxKDgW9lvod2TmzOpZ6tz6ZBIqTpnmhkUtGcBUYZawWz2ar8n9PEcAwjbsvYGKqdw7lrV3NwCjotHaHT6%2BN4N4tpPhq2dyIlwNE6z69tiI8Q5XxBazQlCdv34kc3DA60L%2BZY1CCVttgNM70dlxXMFNMBfZg%2FeD%2Fqblw1K5npi7KPdjz0HeZBj34cuV3Yb%2FosnYBTTscMAPux4DFGZ3e57QtVcvs9iD8GETWgT2ouTJc%2B1jrdEVFaNdRKjbruq%2BMi2CsOaNXimz01RUCMO5lyXcIrQx5OOXXU9zvkxDvw2%2BLL43RnA%2BbPOZUw%2FzYu8H%2F3Ncnh8ZxCR%2B8glHU2yAni8y2mVMg%2FG9FY2cLoU04%2Bn4QNQelM3%2FfWU%2FeP9KW93Lg8Ws%2B7YrxqFarUITYZnW%2B1gCd4EEREF%2F5jNrciYhtPcDSERBBOc0VUwvhbgMYXQY6G4RCAh8I00Gfp7NWAt95F6nEWi3h9waL%2FeZJw7reFZtajHD43TaX5mr1Z2YWG%2BoEtJyVengJc%2Bm7SNDUDYLmEEbu3cU%2B3SAdCkrCzu67xLfiNWVJjMKrk%2F8QGOqUB8lcMt5LZBYZDzWyymKHVWxyiloYxAL4wlEdnQi5ORElKlrntT0VxCGazQrfuSFMeMt17%2Fyw89VSQQ4zJGfusHlSP4E5S2DNNsiOz0qJAByDghLBehpXeNlZkm6vvHwRFrAmWih%2FlMSq3fBUf4y3ZQW8eTiJhqKKguC99u5rM7Hq59bZHxAVhUWghPXia%2FlzSJRpdagwBtYqQL6SUHSNYpfWFDYte&X-Amz-Signature=2d6825cc27aa7631b9bb78d2ca4f14be37c51da9ce2efa190f973b33a244c5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
