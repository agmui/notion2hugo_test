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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UW4UTJS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3QOW39OhhRzJ%2FzHiOiOuSM6uPJFSVHUmt1k9Tu4e1NAiEA4J2pysPr63Ac3NZTjFYGKyzrtwlcJeJbQnEl2hich9cqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5WnwSklNEswafJ%2FCrcAwz2xbnI14LEbrsMBswMZQLUW00oe7P1yN0coLQ8ShoT9atpxamCn0SlK4qZEn%2BRFqUed0gWY8BtQ7lUVZCzPbrkGzTBEsu6D58z79XcyR26ehfmZLEEs36RxbzMs6uzdKjK%2F70ducsoksuHlmCcaGVS6Q4eRGc5CZ9ew6ivyVQM1Asu1XDzva5RJdpsH2digvgxfEUbVtXSPzx87c1SgKEA3h7DqjAo5%2BdtVl9wD4H9AfGIqNie%2B61KZCE0wTc%2BqfrYW3GBbO0fiFPsiUthiT658oq0muM3NhK8fE%2BZvz6jNvNwy%2Fk1NoIWwEeOqqHXKf0J8V0AAx86hkBQCuGDEfJ3GeUyyw%2Fv4uaSusQXx5V7M5OsEXkd%2FE0EyZHhlnyonfS74h9t%2BybFwjEdQDizDQnQ5vodkimQrVH0wb3u%2BrpHhOWc4JAAuSTGg%2FxdZTS0I%2FtfsxBPI7A%2FlW8%2FLT6nzpQFU2jd9tYbp5%2B2T%2F996ZjIg7%2F37rvQ1hny1fc1iSqxDmgC8YWE9sO2bx4kpkuwKeNi7muACGsOuFs%2FWCKZnA0AIIStcxHU%2B76s5ZIePZfLF3zTfrjLFiVCtCVxKrTVdXABEKOCzwdyFcjJ1iJ7KyrTHBobO2xh6uREdFy6MJutj8MGOqUBln9NFUIXTQeDI%2FFoSCCXiU17WZ%2BA%2BTgcW1ftkRKLp9oqmvss2OilqoMgWOeIBbdJK5woRxpthfhW6%2FEjRBEct4wi2airhGOKjWTyJmc5ApBXoulBeJWFY53DVNyRNXFduOUZmjn6OtsnxSHcaFOSZ0tlebyeFeH9uEzwZGpCi1BP1VhgOjQiwBYmEi5r58rSefZf%2F9FSUtbtJpbnyBP3qMh81D8%2F&X-Amz-Signature=39be39b58aeea1f69921a7ce3fc2742f3d36b8893fb15c02d42386fb434d41d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3NADUVV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAkE31zcyDCDMRYnOhbiJOXINwko7Di8bKLxneBeP1tRAiEA2am2N%2FvUX3B3pCT545F%2BiWu3hgrZUsXGTngokCsD9jAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcjpFevvyoz15i7lSrcA6BfcGDzYZdfQyAkCnqtv80bfAJdqV%2FUymD%2BeB7a7TlkpigtLplfGYFgUkShw%2BspgKqCwisnafc%2FDN2MbLijCPb5nqZJ1XD33s5hSRQCPmABUYe7BvzL4FZFjFw9x3mNVnTDp5cL5MI5gyntO%2B%2FHhWRI8aF2D3CMEZztA32u%2FExRKppzQPGwPK9P%2BQ3noT6xR8bGJmHmvW3snYZCTus2ts4O%2B34VyNlTuDJJkhK6hvCF3EpvsQSP1VOq74snzbb1wJhs3tQngT8mxPmDZ1ab1KfAvrY12ZN%2FOXRwKlVwwz86W2a1Fp5NZmenOYWsvyXGy28h9gdmd%2FRwABv15prcCJ0qbIAMWifpRbobfpazWUFPtTI%2BoKMyMmYvm8uAuRK7ek4biOwMlguRHDSUT5o7upiy5DzR4mx5%2FbG1sZTbH0ovpU2bhDOGfTzPj6Bb81MMXLI%2BH%2FUXeiv2M2i8RP5g1LTnGxPim8ML0WvjbyevBdF8vWtIGU6D%2Bk177tcLHoShbv4K%2BdKcVfcOkeKDzydDEn4q3%2BDfRBBekjiQR8yoR33X6mM168GmVtY%2FURFppU5z3ojZ5LmB5gxRfrda%2FBVhqP%2FKBaN%2FQuBHM8wokgWZAf6vtYJx2EIvnv4YcijFMPSlj8MGOqUBKXIVhB7jaT8FeLmJwtqgPQVIJ31qRME%2FhVbygduF7Uc4LftC0EqkLeDNduXm1uE5TijtCB2zl%2BO2e48m1AeXzwQnI1vlua4u25QFxMyaIZp1GOMFPF%2BPuflAtvdXBK%2BEKtZsd5yuNmS9dyk9NkAhNIQqDeNgRpkiX%2FJNW5Jwl8rLYHWrybyDWwD%2F1wRQIbFbNLhK5JVLKXfrYyGtkBFFKYdqyq%2F6&X-Amz-Signature=45089c91fb34e0efeace88676beab43fb295d75ec3ea0fca043631c46319858e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
