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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PR232SP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDoSSBgxsPJ%2FTX3GXhlPS1qC%2B6xfiZ8l0JPkMgmAuRCAiEAp56NTvkZh7dj6BhRN0G5LzGz25%2FjSEBGEUfwBQOFwvoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJPzcxxa2PzxujOY6yrcA8WjCh%2FFFkv%2F1ru5fWZFGWLP3%2Bdhd3wm5h8iCG%2BRJhyboKp9NSSbqq7YSM6g%2Bit0MizpFTMuhiVDm1f2rCGrmEbVKtKx7jodKprkzjoOJOMY6jdkA3tejGnMJ%2BT4zrH0FqRBHuSi0suLUSVGQkodTRpHq%2B9qZcfPeZlP0UC6683gA2MtnjKinqBtojThi67c81XIHNrqLJ4FOOebyAAWwzIZfcSFI2wEUJqib1FEzjGsJlmBRGzquS87uxLdWpH5T3cvPZtd8fMGDOPIlzjhzC6TDgSxQHY6tdiyrR%2FBEjdrozIinOw1uuk9PXYp%2BxP%2BSZ3YriTfkvuay0rJZ70SBg1fsQUPS0uGJD1TdYj97DvDAldSYea2t8TXS9t2nt8%2Bun7W1B7hSWU7Pmpb%2BGHPBKBnOsCAhLHVBaU14swSISzRpSw3K3V89Y%2Bbo2PyXOghEHy8%2BimL4Am2jpBPtGd5LEz21qGKUeX%2F33VlGhOtHXpGT8IFPEAhZqUQjKu%2BeGx%2BQM03nsB9%2BBBDykrrGIkVLRXIaXmH44l94FnvQj2BUXEmEgWcHoVSqDZHf7JWQ74ytScW7bYlAeNBfO5rRAFVxIZMlq4kfrivrvvgkIdM1ALC%2FlftINkTEtyXmfXsMMnRur0GOqUBOERWO%2BDeeNib5PAyr3jkMx6fhgqR3Jn8SadiooHbwTIuWinWTi8NFI7sTx82n%2BBgqqYbsqlwn373455whpe%2Blwzf8XpY9En%2F%2Fx%2FmSYixP8NhlsDxLJ6fhlLa2iveG1h7VmoX0P3%2FEG36kGpL%2BFkzy1fQPQH0BtvZqI40FMZLgiy1vlFYgdRPAuBAWozMY77ivxIHwpIrn03RzZu6mFQM6emREoyM&X-Amz-Signature=2537968c2dcacf8a372a9b2ff5d8a15431ce11fc2c40a00ba6a1d32604134f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PR232SP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDoSSBgxsPJ%2FTX3GXhlPS1qC%2B6xfiZ8l0JPkMgmAuRCAiEAp56NTvkZh7dj6BhRN0G5LzGz25%2FjSEBGEUfwBQOFwvoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJPzcxxa2PzxujOY6yrcA8WjCh%2FFFkv%2F1ru5fWZFGWLP3%2Bdhd3wm5h8iCG%2BRJhyboKp9NSSbqq7YSM6g%2Bit0MizpFTMuhiVDm1f2rCGrmEbVKtKx7jodKprkzjoOJOMY6jdkA3tejGnMJ%2BT4zrH0FqRBHuSi0suLUSVGQkodTRpHq%2B9qZcfPeZlP0UC6683gA2MtnjKinqBtojThi67c81XIHNrqLJ4FOOebyAAWwzIZfcSFI2wEUJqib1FEzjGsJlmBRGzquS87uxLdWpH5T3cvPZtd8fMGDOPIlzjhzC6TDgSxQHY6tdiyrR%2FBEjdrozIinOw1uuk9PXYp%2BxP%2BSZ3YriTfkvuay0rJZ70SBg1fsQUPS0uGJD1TdYj97DvDAldSYea2t8TXS9t2nt8%2Bun7W1B7hSWU7Pmpb%2BGHPBKBnOsCAhLHVBaU14swSISzRpSw3K3V89Y%2Bbo2PyXOghEHy8%2BimL4Am2jpBPtGd5LEz21qGKUeX%2F33VlGhOtHXpGT8IFPEAhZqUQjKu%2BeGx%2BQM03nsB9%2BBBDykrrGIkVLRXIaXmH44l94FnvQj2BUXEmEgWcHoVSqDZHf7JWQ74ytScW7bYlAeNBfO5rRAFVxIZMlq4kfrivrvvgkIdM1ALC%2FlftINkTEtyXmfXsMMnRur0GOqUBOERWO%2BDeeNib5PAyr3jkMx6fhgqR3Jn8SadiooHbwTIuWinWTi8NFI7sTx82n%2BBgqqYbsqlwn373455whpe%2Blwzf8XpY9En%2F%2Fx%2FmSYixP8NhlsDxLJ6fhlLa2iveG1h7VmoX0P3%2FEG36kGpL%2BFkzy1fQPQH0BtvZqI40FMZLgiy1vlFYgdRPAuBAWozMY77ivxIHwpIrn03RzZu6mFQM6emREoyM&X-Amz-Signature=b4cc010390c96749dec730eb6313739de566f1ea479ac0300d73601464ccbddf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
