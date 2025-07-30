---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWLHNWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfnvOUNroaHMdpVxE%2Bub%2FxL9rwmV2VID1%2BfZ4JZ8RWcAiEAryM9oXWmckacJbC%2BoLlmbLjWj6lgr1F%2FBFEuz%2Bxo4HAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaZgys0QjGdr2U1%2ByrcA%2FzPcmwmNVuGtXZDxLEw2AC1osgtS%2FTqWq%2F8o5SFn6OQog%2BWlNQofaz95MBLUlY7TXK9ojcK%2BC95rUVu0hWX2FFpp3L7xut66XRXKawhsoSKo1zKncr%2Bc7l%2Fe%2FJwvJZ03H%2By%2F6BP3ag7ZHN3BvYMkxugwVsLLAUNezJQ2wFQnb873z2jeRsXIIbocUwmUETjz2m7%2F4iFwHqlqHccl1SK7Piw1sxRlrNYTMV%2BTgqY5hPPVyhNiu3X8WoM%2BlaNpSNvSbbKV%2BQPMjfexGoVTnkx0%2FAvsi0BkMDSeoOWthf7hK6sagTWUQ7VG56aOLAKbHakLyh6fW4Gdg7PM6D6mKGaORUv96bJ5Wo9i55ulQpZFrURtpVPqqPvkYwdvu16iE40sHrMK7PDSv%2BNu97NC%2BG3myBaAwVNF9zIAaTkWBCOZnNy3MymMyNpX8z48VHPRK0hY80HK2Gt4tig8Y1sOpbeUsaHhXJ8wtk%2BlqwA6ykpAU7bUul%2F3GX3nHKzo3uByHe8Km8rfp8QwAF9iJlFVxvYKcspvl6YuZW1%2BpztbB9rMQOgjTEEUCqquEakTjNx9%2FeHe4UbrzHW7s%2ByzBM7djCRoj37QfiiPz4y00ez04CtqxC38lm7k6bmYqNhC8AKMM2PqsQGOqUB6n2odRQknbBKDSR2SaykW7b7hq2VAmIOcgK%2FeVTQR7Pjjd26DTv2IjywPYBX6OIWyNcjjrP9NB4h9wYhv%2FRc6d3NYeYK98Q7Z%2BrmDhbktqdfDyrYTByurxJjwhLSzDGaBjXxR03uRuFVfaUqq9BPJDlfTeFJXh4GWaZofa1FMKPTPGn8DGylkXBo4Fg09yvRAKm9L8QRnLJm7DiXkOpJ3Z%2F5mJBj&X-Amz-Signature=c9d3ce4c26b4ea2e67416928af678cc361b0297cf4ca64f5107de79129706316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWLHNWX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfnvOUNroaHMdpVxE%2Bub%2FxL9rwmV2VID1%2BfZ4JZ8RWcAiEAryM9oXWmckacJbC%2BoLlmbLjWj6lgr1F%2FBFEuz%2Bxo4HAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaZgys0QjGdr2U1%2ByrcA%2FzPcmwmNVuGtXZDxLEw2AC1osgtS%2FTqWq%2F8o5SFn6OQog%2BWlNQofaz95MBLUlY7TXK9ojcK%2BC95rUVu0hWX2FFpp3L7xut66XRXKawhsoSKo1zKncr%2Bc7l%2Fe%2FJwvJZ03H%2By%2F6BP3ag7ZHN3BvYMkxugwVsLLAUNezJQ2wFQnb873z2jeRsXIIbocUwmUETjz2m7%2F4iFwHqlqHccl1SK7Piw1sxRlrNYTMV%2BTgqY5hPPVyhNiu3X8WoM%2BlaNpSNvSbbKV%2BQPMjfexGoVTnkx0%2FAvsi0BkMDSeoOWthf7hK6sagTWUQ7VG56aOLAKbHakLyh6fW4Gdg7PM6D6mKGaORUv96bJ5Wo9i55ulQpZFrURtpVPqqPvkYwdvu16iE40sHrMK7PDSv%2BNu97NC%2BG3myBaAwVNF9zIAaTkWBCOZnNy3MymMyNpX8z48VHPRK0hY80HK2Gt4tig8Y1sOpbeUsaHhXJ8wtk%2BlqwA6ykpAU7bUul%2F3GX3nHKzo3uByHe8Km8rfp8QwAF9iJlFVxvYKcspvl6YuZW1%2BpztbB9rMQOgjTEEUCqquEakTjNx9%2FeHe4UbrzHW7s%2ByzBM7djCRoj37QfiiPz4y00ez04CtqxC38lm7k6bmYqNhC8AKMM2PqsQGOqUB6n2odRQknbBKDSR2SaykW7b7hq2VAmIOcgK%2FeVTQR7Pjjd26DTv2IjywPYBX6OIWyNcjjrP9NB4h9wYhv%2FRc6d3NYeYK98Q7Z%2BrmDhbktqdfDyrYTByurxJjwhLSzDGaBjXxR03uRuFVfaUqq9BPJDlfTeFJXh4GWaZofa1FMKPTPGn8DGylkXBo4Fg09yvRAKm9L8QRnLJm7DiXkOpJ3Z%2F5mJBj&X-Amz-Signature=750b9597ddb4d4cd9f0655b6bbb0ac5fa790e44002e6733552d71af01168aa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
