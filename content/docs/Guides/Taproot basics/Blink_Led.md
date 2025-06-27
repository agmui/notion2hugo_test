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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZ2PETJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BcxKgvn1v5ibKvyIo3cea4g5HkORjiIXfj7TwzcqV7AiEAqgrIeb7c%2FRsusV9zxwqH7lMS3FcZlp53ZYcHSgKSo2Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEm1icMPXUUsoRVimSrcA8q55UYwZa9qHEMR%2FaCjKR8qSSgj%2FkWUEBxhO6cUZwBJAe7KVxzVTXLV5iny5W5F9q0VgqCGw8YSrDU%2Bkh2f9oCJYVy5dkK1E%2B5%2BSXI2LuEGWe481lHhMndp7xXMgBj0kh69IXFl9PEWwVmWqUH3L009cZmdqwcCdJWZS6Aag5gn0fnY4QyFB9pwKhASUoPq1FUMssBtWsQjkQbp85FkpY3zhMr0pAi2qLXlOShi4Co5hcytCjNhgLY3ZPYrr%2BonY2Y5B%2BCC%2BEOU%2FQC42gl474Kk%2FdOjzhQTh5AGUS8dzzZWqDHuxsnOcSsxT1%2BVySYLlSCOEaIt5%2B3SiXbhh7%2Bx68cHrbtUt4XYroQSQS8nt0dXTLPHE1L%2Fs2PGOTcpow62NOD%2FZ8%2BqWNVlrc7VTTS8WU%2FE44QmYwSJ0Qpyr%2B8OrkPUrvzZ89%2FtV25ieHf5nbguT8YLrDu0ZHdUO8gECfSKktrHB3Fq0wA5%2FPHIj4rdthF6d2XPq51OK2No7DLrhhMyTEokqLMV3ENeqpXYPRnXk6nkeiB9xftPg7IEyq2gbTUcfPe0FqCeSkpQfUdefJ0AcfWFyOgXyp5gkGzBFCoo%2B6i5VWzk8ywJ%2FUAmkB4Ze6FTXTN31QfkEhT2NfR0MNCk%2B8IGOqUBZbo%2BYH9k%2FI%2FBpxjQcBv3TucQEBiKqAd9n2g4LO%2FXU%2FgfjrEOE2mETv%2BIjX918wKS0Z%2BRhZV6qH2Mt9el00nI3LHNSIvUHpjOjogHjvyMII4WR8tH3xpdNhoGELiHpiZFrEFcpEKmuO9SI%2BfD%2FS1kTxpq08Iq%2BLAL4swsPZ1cLkdC%2F7rHqFwx5mOslijtjD9q%2F0%2BhOzZkbNdFINMIsTRECWasosiV&X-Amz-Signature=0d6e051e1e64a4b5416e71222fd77324d5ba340d558503999703a98010e5a01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYP75SSX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEVL12mRSXofiAZrICjLTehmQzmE4DgqQ9gEusQk6UpAiEAgvnjQUgl%2FT%2FDRqNZnQGunpOZ8FPXNQXE%2Bn0Lz%2BrHHzwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGU2bgXaArba5QspwCrcA%2BYhjUazeCyOfz87IdBOHMXjHcYJDG0qRWUdTiOlNQwBCsNGADQvLe9N2lCh%2FIryPPmtKvUUEE5kxb%2FarZ%2FN7bb9kBOGchX3yF8NhIAI56HL7HLi66VCgUu45aaFW2NRJCz85U66Vl6HItzqNCUY3jmrllY6JO%2FAyPFDOcLEzSru%2BJwRulSRZCbZ7k5%2FlZRnIlrJtJlnZQytpOHeHEctszSYrt2FtfP2IAUY0BtEUBGLCSt8P2x81N5JJNEAdBQwLFNp3wCl7gUYbOKusZjAiIb39V9tzTOwQ8sBgXmQdPSQi7a93vADScucSPvH9%2FjbkNPJxrJSZTRlNduJ%2Fg%2F4od4FmsNqytg5sXkgmtHCui2zPWNhgv1Lco3ski2juuutFMgMcE1GAoq%2F72qPvI8RFBDUVB2nhVVorX9yz6LdOLJ12WeS2DuWvnMuDhFq2Urab1pW2uGN1lDdLZcqQVqDG0XDvdwwKP0V2sPgBj8hR8hbFnjLsZsZsMuPDx%2BwcUSulDRQZj3u3aFEHxNu3NkXkfByPbU0fxzEmdFZCgWC10wkJAvstEh39K88f7jGMNlvOuRXnifZ2iY1zFVzNGqYtV3N7JDcuLdL6UyFYga1Hx2lJ6LzvkTGyaThBfAMMJuk%2B8IGOqUBQq4oM0OluDAd3H4WyobAKmfWT%2B%2Bpn4OsKUqD4SI1XjH5b74DQ5jnBkl17mK8IakflYL1xM2nEf0UNL76BYvnywXwPdbRtDKBYfAobHiF%2ByBl%2BbZpZPmjRMMC46OPaBpwO4xP4rgfI2LrcaggEFSttRmvWlGCaiIV9izeHnuOX%2BKUp%2B%2FgejxlgpY9eAyOZnZE5hNcNIhfGCBX93lMBsiSqM0QWqpA&X-Amz-Signature=207e4ce9670c5dcb37b8a3eed511772fa7032a62e0a5cc758d8f57cd7190f65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
