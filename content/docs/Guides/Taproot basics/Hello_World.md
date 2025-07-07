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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2UQLOH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD1ido1AeIOB6T7nLFE7bfkearonASi8IB3T1MUAlFi3QIgWZT4J70XUBWQaJKeJ3be70nU2OSe3SDZ1Fbx8s2eY9Aq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDdb8y7vUMMwpqKmSircA1ANEHDUDa8q7oR%2FTRRKbLK%2FAh%2FdaxTduJNYJBmLs%2BcHB4Vro0bAVDn62RzqCyhTWQAnulO%2BC6O9OuRsk3SExNzP4QjlH%2FhIkIbsHB9aTeDuDoT8I5HHvplg1LeYvOSA5tj%2BSvLbn7irD6ZZz6WRTpVWUUARwi2Dag2NR7CO2DfI3F4hiV1uCi6q03fXWOhmLfGiNdrwforziUotaYMzGCL2CZRJCWLUcHCg1twvygRa7%2FWlmPhqswbMCAG%2FhSiGZkd7iL2uR1tqph9uqXJgn1mKJCNAf7zsnsCC%2BFY8kKix6ST7ix4t4YhvcIeSur7gGHItwA445986zvnqKlEdpI%2FdRgdR%2B4%2Fzv2Z6P0Q6yL%2FAJfn8XU04AT4QUdbP%2B9JzDLnBDX4rt%2FS6NbVkblS0f07pKH%2FmtMzcTEsL0%2FjNaYMO%2BCxGSYQSA76OcAENn4iKdTisy91Nk9Axb2bdcT8rdOrkpI1byTofSzpzxra1pEVceQhCtJkJysbUL5a9I2n%2FA8X%2F6wx67nuwZL77XgXVlvVey%2FSvDNYNRn8ud70TOLsHXSro%2ByTiX67s1AFI%2FEQpK0FbKFJeO0HilwGg9lzJqmMVjGla7HgM0Z1ba6Q7WTM%2FiJKAKvZEaKdSyN8KMJKMr8MGOqUBMSuRr4khzB6t89LHmHPOZo%2FGW%2Br1acxjC5rJrhpaUVI2nQTFjmI%2BRcYUvLWbNWAPH3Iao4t3OItVdwiZe3NpSfVFF5l3F%2FZyR%2Fko90SWJpsIibLAcbJEhc%2Fbd7sH2BSZSNfP5grqHBFjbcJavGHZRc%2F6pUyGbgu4%2FjiXcOGxFlJ7bn3lPHSREPG%2BnhRqUTiA%2BM9tWdIrsaZ4pcmV5HE%2FzwCM2uIU&X-Amz-Signature=777ea22da59ffeb0dcab5e1318827fc1cd1e08547f994f3580af3d1bdc242d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2UQLOH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD1ido1AeIOB6T7nLFE7bfkearonASi8IB3T1MUAlFi3QIgWZT4J70XUBWQaJKeJ3be70nU2OSe3SDZ1Fbx8s2eY9Aq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDdb8y7vUMMwpqKmSircA1ANEHDUDa8q7oR%2FTRRKbLK%2FAh%2FdaxTduJNYJBmLs%2BcHB4Vro0bAVDn62RzqCyhTWQAnulO%2BC6O9OuRsk3SExNzP4QjlH%2FhIkIbsHB9aTeDuDoT8I5HHvplg1LeYvOSA5tj%2BSvLbn7irD6ZZz6WRTpVWUUARwi2Dag2NR7CO2DfI3F4hiV1uCi6q03fXWOhmLfGiNdrwforziUotaYMzGCL2CZRJCWLUcHCg1twvygRa7%2FWlmPhqswbMCAG%2FhSiGZkd7iL2uR1tqph9uqXJgn1mKJCNAf7zsnsCC%2BFY8kKix6ST7ix4t4YhvcIeSur7gGHItwA445986zvnqKlEdpI%2FdRgdR%2B4%2Fzv2Z6P0Q6yL%2FAJfn8XU04AT4QUdbP%2B9JzDLnBDX4rt%2FS6NbVkblS0f07pKH%2FmtMzcTEsL0%2FjNaYMO%2BCxGSYQSA76OcAENn4iKdTisy91Nk9Axb2bdcT8rdOrkpI1byTofSzpzxra1pEVceQhCtJkJysbUL5a9I2n%2FA8X%2F6wx67nuwZL77XgXVlvVey%2FSvDNYNRn8ud70TOLsHXSro%2ByTiX67s1AFI%2FEQpK0FbKFJeO0HilwGg9lzJqmMVjGla7HgM0Z1ba6Q7WTM%2FiJKAKvZEaKdSyN8KMJKMr8MGOqUBMSuRr4khzB6t89LHmHPOZo%2FGW%2Br1acxjC5rJrhpaUVI2nQTFjmI%2BRcYUvLWbNWAPH3Iao4t3OItVdwiZe3NpSfVFF5l3F%2FZyR%2Fko90SWJpsIibLAcbJEhc%2Fbd7sH2BSZSNfP5grqHBFjbcJavGHZRc%2F6pUyGbgu4%2FjiXcOGxFlJ7bn3lPHSREPG%2BnhRqUTiA%2BM9tWdIrsaZ4pcmV5HE%2FzwCM2uIU&X-Amz-Signature=c1e2cdcba9be2387b1461464f9ef9170ca841e93284f3de3efe93dc7fbed3d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
