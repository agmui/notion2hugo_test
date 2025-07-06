---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXMC2C5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEmAcJ2gl%2Bp4ouUDErj9Lwmq1MVqFtbo2ck0LvV3yFjcAiEAuX2UfZy8B9JaZeAtGMRzrfN2SS%2BMZv40Zo76OMl1fhUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO5VHdng%2Fh9T7VSJCircAwFcqZH73nKjcNP%2FWHKoIAVjJ4JPUNmOpP2N%2FjSofCXFzyO38N1Awsotif9aIetMRDSU4pYQK%2FqK1QX9tSy1VL5YsZ%2FlGv7FhJeNVIMhXXMyFs67MsDIV95IHgW%2B%2FzFsQBtODHV0d05ldGWZOHnhsb2fSxX08sRd5MtPb54IffloywSg7Lk5jBHCuuZDT2TSYYTIe8L016LpP0UyFYCs7jkl6miG5A51FCamiiUv2NcDeP8J6LCP9kn04fd9EVPr4s7uWz1A0f1Cbu%2BgDy9fL8rEvzqdw%2BpvaYghogZa8Wviu3QFyIL7SuJrrr1c%2BofUPS9YWhSKgZFxeZmniNdw%2FH0Uh7OQrPrl7sEc2SoLB23f7tUo%2BvREPgL%2BK6lWfVv%2F%2FTmxVISbsEED5bo65C%2F2saZVVk%2Bj7XPFRoj0ZQp%2Bw1Nxiof2c7ZDu6iEyOU8POe%2FJyBfc1GTwRa2SuU4ZztchPAmOB7C0mBfQpXEDxcnsNENDF4CBmbuW5bdGHH2T4TXZWjPVNMznT%2FJz8LPZ1VRf5aQYACcVg3Ao02nSYZraM8erTNUx4rLDXG1PhJp%2Bgr7sAQ6PUYA0ux2oXbmZsba3NKJx%2BP1Adz9QF4Eb0m2TY%2Bp0PUrFTNDqx%2FFKDOAMMvKqcMGOqUBf%2BVMJKVHDgfXUoehwb%2FJTbPDLTekm2rxXBdebjbnl3eSP3qoHb1jOUFB5KIfcqNOX1NJXrdr5j285kxxlANRo3zn8L0W5iqCm1z7NNuBSx7UqaaWYGG6kaJHrJ7sKzt2lMx1emQOH%2BN51lLj1r%2FJDMyo9Xu01V0pfMPdyPBIgoV8p78m%2B3Xswr%2FjHeESlZ821bhZj6dK1EWVdEhpZU7VN%2Frfd8%2BV&X-Amz-Signature=022dcbb44522967a605fda01ccc9c7a50cd5b385b109664c1049d9fcbf51515e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTZGF4H%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDL6GKToqEFOwLbLotN%2FzNFpGZiiMlmoZIirO7wCUTb8AIgGRAnVSpiNj5KBLmoEO1RKK6Y%2F0LIZwuNonzwD7eAszsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGhOWbuATSgoBOLFGSrcA7RmITwDq8pvnwe8bItLD6ApY9t%2BRt9n2M%2BVBdcAeh1zcirH9J8NWRwaqiFV9yRx4%2FTQu9crHDHYbVBTvt%2Fv8PZ80hGvFYegKC76koMYMJGHWPluqf7NwzebaHiecj4G%2FJ%2FFv2h5hAXtZt5Z9fZ5KBXIegyGo9523ye2WIPAOxQQqc1MlJOFuYe0CXip%2FU1P4V%2BtWsZ8mHbphYcLhQ9B5Ocy%2BaYLGSAnnO%2B8kr1wWuJssm%2FAtlBC%2F%2BTfombWu9JpzJ5A5AXVAGwPBKN9a9LoXGhNY%2BnlGMoS4gIdmcN8Np3vc7lRX70CzupWPjLm0QCd46i5dLmHGCIPdPF20gNcnU%2Fuof8706QSbkXtV%2FFxFvB3%2BMot37s0HLWDDPFAdLebeWIp1AEq9YQp6ysg%2FihZSM46x6LfN4UoNETmef6WL6oQUCCJvgnh6MIpnn%2BV4yjAWLd%2F8h9%2BHA17ie6om3pAOPewHXABoIHM0jKiqoIz7rjzMkc%2Btqi7sgkOBNCvErb6i18cTnu%2Fq4JtVYXsDupJXOxxq0NcimjSB40M8fCeHwWmXa6Eh0nwbiCQRKkKeWY2wtL5p0aXSZ6j%2FQc966qBg6qZzaqdhOKi%2BEdn1CJ5YuDNvgPnSvN%2BUUOOpDxsMKjPqcMGOqUBPMXcvYPDdiSZWs5uUUxRoZD%2BL4T5wvXL8qTVmhSl8PY%2BjN3Kerx2fiun7QwZygVx3QLNd%2B39SI7twVgsO2ejUPvrfaUUz1QM%2B5d%2Fcp5ycXAyXUMBlj8FsAxHA%2BP3cMCHDYg4qrpMDLSqQWQQrlnKZ23lnnD2Wm5xB7Z30uC5TBE1Pqib%2B4KSLb2cjv2vmArIVTpdrwVSr0qB0Mnxtqpu8BxbzQQA&X-Amz-Signature=0de9a9497f4ac29b95fd632f7309c4824bec3efe1bf9db53d928cd6451b09943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
