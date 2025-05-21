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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOIJY7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDnWaxPexZkJWl67t8XsUVVOnLiuovqjGPBmPc3CFdpxgIgc9SxdJ5DWAQHWuw%2Bg9dWoDeJP4zO4EaM2ofGMsFTL4IqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRqZArLAAZU8%2Fti5SrcAwwfRq6Ov0xa2DAzR1KkieeekOSMdlCF3V4fzkDlnb2jJzVpbUIJryEh5FL%2F7%2Bs8jrxhQP6ayE1Ul2h0SmOv3cAT%2FT0w4BgInFbxCkYPpxoqSh0RYSc5RtEC4rLRlN5cmFp13kzxERXrP0iLKypiTAUHjamYmbRbU4RKq3b0iYdClKhZBEgTgZjWPg0AdwwTuYYr3gRQosl0nr8NvWvvxS9Bt1AFKdqOr14LfFHxmLJsbsLw8PpZT5h2zfE7O6dg3q%2Fc9SrFoSZUtTypcDDsbANu3hffjKgkNwQIVXh%2FgsM2ILdqN8w%2F8XsKXDrTr8dTWbcw2XtuV%2BcyjM734O9uRHrTA6883kRdSfy8twI%2B5YFFMlrfp8TBDyDX37HRLbuGRynXMtFTrtoQvrisCIOEgmsgFDXI%2FBRQZJ38Lzw03iNfnR9HC6F2StwPKBJvclrAUSVnISCpAw53gk7bYxXPtkw%2BRdXBgRp6dsxPDTGqHOisSTMVMhRp%2BmAJ4igyiF%2F%2BcWG9DPRXCoAi1OTiFgJuEQGVAuMK9PbCj8rO0s9CJM9ifCMfaOFzdjfO%2FV5zVGS34MPUmCgxMUPVouSnfKHKG6QUjda9i5vv3J9taOt%2B8JNpRb0Or%2BF2Q%2B1S1xZ6MOSGucEGOqUBj%2BrP%2FDPUA7iEKwDhm6WHIlcaUnasSOOHEUNK%2BmewlIgcaw66dCdEepMknyn68teWMY4Fyr66zaTV835rz5oS3T0UQi91Gxpve%2FsUY5oYnP%2FpZSUFJLgmQqa6dZMRPzGKk2pEmXDThzHOXJ9xHn4hd6nbTZsGyex3x9vEQLXCscMFdScjRXZIUL0apoCDGhgdHJv7xzD3IWGOzq97IsYNGb4aMG4R&X-Amz-Signature=63767506527d965f3dd25ceccaae14fa6a3d2a9ad538724f24c253d09192b6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOIJY7H%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDnWaxPexZkJWl67t8XsUVVOnLiuovqjGPBmPc3CFdpxgIgc9SxdJ5DWAQHWuw%2Bg9dWoDeJP4zO4EaM2ofGMsFTL4IqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRqZArLAAZU8%2Fti5SrcAwwfRq6Ov0xa2DAzR1KkieeekOSMdlCF3V4fzkDlnb2jJzVpbUIJryEh5FL%2F7%2Bs8jrxhQP6ayE1Ul2h0SmOv3cAT%2FT0w4BgInFbxCkYPpxoqSh0RYSc5RtEC4rLRlN5cmFp13kzxERXrP0iLKypiTAUHjamYmbRbU4RKq3b0iYdClKhZBEgTgZjWPg0AdwwTuYYr3gRQosl0nr8NvWvvxS9Bt1AFKdqOr14LfFHxmLJsbsLw8PpZT5h2zfE7O6dg3q%2Fc9SrFoSZUtTypcDDsbANu3hffjKgkNwQIVXh%2FgsM2ILdqN8w%2F8XsKXDrTr8dTWbcw2XtuV%2BcyjM734O9uRHrTA6883kRdSfy8twI%2B5YFFMlrfp8TBDyDX37HRLbuGRynXMtFTrtoQvrisCIOEgmsgFDXI%2FBRQZJ38Lzw03iNfnR9HC6F2StwPKBJvclrAUSVnISCpAw53gk7bYxXPtkw%2BRdXBgRp6dsxPDTGqHOisSTMVMhRp%2BmAJ4igyiF%2F%2BcWG9DPRXCoAi1OTiFgJuEQGVAuMK9PbCj8rO0s9CJM9ifCMfaOFzdjfO%2FV5zVGS34MPUmCgxMUPVouSnfKHKG6QUjda9i5vv3J9taOt%2B8JNpRb0Or%2BF2Q%2B1S1xZ6MOSGucEGOqUBj%2BrP%2FDPUA7iEKwDhm6WHIlcaUnasSOOHEUNK%2BmewlIgcaw66dCdEepMknyn68teWMY4Fyr66zaTV835rz5oS3T0UQi91Gxpve%2FsUY5oYnP%2FpZSUFJLgmQqa6dZMRPzGKk2pEmXDThzHOXJ9xHn4hd6nbTZsGyex3x9vEQLXCscMFdScjRXZIUL0apoCDGhgdHJv7xzD3IWGOzq97IsYNGb4aMG4R&X-Amz-Signature=7e180f0c83941b33d07182972612ca3bb6e1ab144f22151d9e28b10bd7544b15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
