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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCLMAGX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhJnvVJIJWbTVwIpA9piYQNoIA0nxoRWezFnFDTUkb3QIgGwAz9Nl4aOHminu%2FBjZyw3K51BQuvEPy7bb%2BKJtqJTkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqPpzcgBX%2FZaAhzWSrcA2z9sQHGQxhk9V1tzxwKUl7BgyZDZBHUSl%2BSudxapBb5ERSBvs%2FTfcSVT3gLii2Pg%2BTr41FeNpoWeu4jhJ8%2FPGM1t9OWVt%2BoM33yoUVnKIzSMchUDEJmKn5taGnsrJ1HEmWJ%2B1mNq7Gec3FqD8jDaERSr12MhIU2cO2I2WuZHOQEQrttOQSQ4fKWSbSVoxcc0mn8%2B6IT2Jdqy8eLRoxLl%2BWXp0zk4niKxZ9jn%2B%2BAY%2BFRm0ghsKC9jf15JH6v26NEu21oiBTTHQzxRGDVdP%2Bcvgbe%2FFYAIYX4OvZBxbpVIGHiGA7X7QmELjCol04r0GmQeGn9YiEOoLBLSV7lJCryz%2Fmifbjg8%2Fs1SeInw3rUYty9ixs4mEGV5gVIqe0zIwKdGeMamKuDUDI23Mabk1Oz2nt%2Bxqz2UkgAN9M%2BNDDclnRjqg5leL%2B3%2BE%2FAYSn7D37IEAEx6Pi1NcK0y5KhMBVdx2%2FrQOEZArWxs4wAZBPGpJhN1ZSHqnrdz%2BZbS3F1GMJZKcfXoVy0wyW5hqMJwJY3MrB3i7ooIo8rlKAIjxRCsVzAZGz7XHa9W%2FXl3HmNEMB%2F%2BgNENmDcqJVv7tsukwjiFVLz65UyZCcs5f4YSGG%2F9D8mF6aowW445l5sPdfPMJizosIGOqUBaw3vyLOKrHeZ6CcwWUiPkkUQcPn5XC%2FegqZWAo7GYXRHhiVGGa2LYT6%2BvQegU%2FwUxi4D1N5AJOJuEQokauasmf1oSiBw8IQsW7sbWNQpUJMtmZhtOAJf710gGjoJ7%2F01NddX5tG6iHSmPOfjQE5kjzMLiTTY%2Fa7O1FZBY1vRqblidm3v2s0QS0mpOqayUd5g2gPJnwjs1Gfm%2BlsD7p6mCbAk3hCn&X-Amz-Signature=9757fe91ea3757c9284462032be220cbbbe7297d6482cfba8ba0e470de933a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ECRS2R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIqB2zQoUNXHjkLYXGB1gTHTBdKSE2s654Ce5lXLj2xwIhAJLC2SFEuCzSaLJ5vJKyuJC7o4%2F2cw834G8id0quh%2FxNKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdcp9Lld1DC3%2BSy4Iq3AO8W71YpfZl8U5iLqaAhFa42IfKPHknRwueXj2EhAUdjcDCac77ebs3MKarhDGCGpefAXzXbttBmCpKAaHeofQ9rDI6W367bfXDW99DAkoVGLKrMlUxBLdP28m4NTx7Ru1PF%2FT5hAe6BKvywYNtV91b2SRwH6c8jbxF4v12GIe4iBIZRFLsHRNHzHjmIVQ3BBbCKXqoDoNuSbMifSH8UL6s%2BQ5wwbwa2Gj%2BiuF%2B1i%2FImiVkLZidvkFIye%2FiLxtWxpn0AsWX4zpvQJQmEk621u%2BmTW7nVPSLdTLxschgfk2VHmfXzFphecndK3R0K0IVnjeFpjpFLlBPIf0rry13SQBnowQe8kUis2086B8ZynR0bl5i2rpFsWEGPt7taV4Knu4z%2B64YPmwiAifn9Y2om6ttodPtzCbac7GQ4%2Fqlldr%2B6KB7wWIzNB9US9KSLwNz%2B44P3fMkxObiVm0WDUTc0%2BhEGGMv2w7%2F5MrgmS11L12iUdKjQfsC4pY%2F3apQXMHQfuTju78jKQXN%2F99%2BhRN59DRKC%2B6P0BopFRoc0Z2zmN5jHQ5784y9lEpkA9Vsia9DozlonNc3pddpeAJmbSoQPGZwuNOceNDWwwE9c3da5jKBtE9qdhEVzPUcYpifpTDBs6LCBjqkAVi174cRvMU0sab8Xty%2Blw%2F3NLEWBYECKeCSHkOpGW9zqZKKCNOhdhEP5nzhCyrrZx%2BSAPDPXnwAECsIyjcjyiJwSxPfYDRyf2u9DlNwgxGMaLNErzjHoVJQiB5A%2BcPTdfXP4cAfFCotMzxc8Ugrj7QVqW9HsgmZ%2BR1nmywIj084CgRaJBaTvxIMGR5Orfrg9byuUzFLDn6mSbf%2BZwD%2BD8%2BBXHsh&X-Amz-Signature=3ee35147b1115d89982b7ce4741288e551313233d1e0b76139d6461b96007806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
