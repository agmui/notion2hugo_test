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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AXXCVM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxEMKemOSoRvuv0qEzlhWi33fyhYW3z%2FcG9sK40MuIgIgSjZ9DkiPsuMA2%2BB1Q86LpFcEb6tRkNnbl5gtGpO3cmQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5NcuBGpZh2LB0hjyrcA2fHiwcD0SoX31C0DQYapvL7OEa1b1vwMSCbVSlBv6JKtpRUPzGhSrqRyJuLy2bt%2BMHzMXVOL64PNNXvryMyGFveoZiR2MG37y20iL1mORfE%2FljN60u33Gs%2BFuoYe5HC3NeGvPhEtYMW9XxVO6UB9fBq4OVqHlEahBmMMM%2FSKcQjG%2FIxXekig%2BA2CdEXEcD1yQtq9JEUullV3ohQk%2F9VJchWXBE3jCNEGtrkg%2BfnbxUHPchDKOrWvzG0oeSuEAG62ELN6UTsxJT6lnF8nvXylDzsVD1FNVApTzDiN%2FP8x4lYGwhgt4FBNNyr1whMU2CpG1udugXvvqhiUP3qyUiLB9kFjD3wksE%2FZDe8vxfAUEtiCqv1cxl0mBoERamrGbbQdiYsiNpCtGpdrvRblMm5XPJD5WrpHXqNgBNUmhl8yDU5tWLEqG%2B3Ivp%2FZCUIyHb7tUDppds93PHSezgf1VajUdNgoYGz99uEw6wuJ7iPpjkcLRmuv4rZdA5OdI2hyi2pkc0Y2h6jYGY%2FiC36ULy71glKWeAyPM%2BtBVJglFjrACc6xQtR3vZHrBVWW5XfLBkE2JdRfcoJ0cBLiK8jqZSIdZ7Wt9TYALify6pz0Y8I2Z9f1erW%2BGIw%2Bdvj1YYrMIrdqsEGOqUBfDGCOycqYydZF%2BwVwsAKhn3yC%2FyVd7fXoESwgjmmKvMsBOntXbixQJQukiBy2ShHJ9hpymKUCTjzBLCOKdg%2BNTI15RTNijeGX9XX9H4Oimseb%2BAIXfhiHj45xCOblDUSpxsO8wdSdaurAeUym4606IeWKbhvDRoWmMO90Trvu9TF1KBBfEN153MAtfIlLjTDCgR4gzbrmNxcrz%2FXeK%2BrzUHwjTCx&X-Amz-Signature=ead055763e485c80c3f0bb4f01e1e4cd1a06c327e5c3928e8b7a1ec7e965e9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AXXCVM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWxEMKemOSoRvuv0qEzlhWi33fyhYW3z%2FcG9sK40MuIgIgSjZ9DkiPsuMA2%2BB1Q86LpFcEb6tRkNnbl5gtGpO3cmQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5NcuBGpZh2LB0hjyrcA2fHiwcD0SoX31C0DQYapvL7OEa1b1vwMSCbVSlBv6JKtpRUPzGhSrqRyJuLy2bt%2BMHzMXVOL64PNNXvryMyGFveoZiR2MG37y20iL1mORfE%2FljN60u33Gs%2BFuoYe5HC3NeGvPhEtYMW9XxVO6UB9fBq4OVqHlEahBmMMM%2FSKcQjG%2FIxXekig%2BA2CdEXEcD1yQtq9JEUullV3ohQk%2F9VJchWXBE3jCNEGtrkg%2BfnbxUHPchDKOrWvzG0oeSuEAG62ELN6UTsxJT6lnF8nvXylDzsVD1FNVApTzDiN%2FP8x4lYGwhgt4FBNNyr1whMU2CpG1udugXvvqhiUP3qyUiLB9kFjD3wksE%2FZDe8vxfAUEtiCqv1cxl0mBoERamrGbbQdiYsiNpCtGpdrvRblMm5XPJD5WrpHXqNgBNUmhl8yDU5tWLEqG%2B3Ivp%2FZCUIyHb7tUDppds93PHSezgf1VajUdNgoYGz99uEw6wuJ7iPpjkcLRmuv4rZdA5OdI2hyi2pkc0Y2h6jYGY%2FiC36ULy71glKWeAyPM%2BtBVJglFjrACc6xQtR3vZHrBVWW5XfLBkE2JdRfcoJ0cBLiK8jqZSIdZ7Wt9TYALify6pz0Y8I2Z9f1erW%2BGIw%2Bdvj1YYrMIrdqsEGOqUBfDGCOycqYydZF%2BwVwsAKhn3yC%2FyVd7fXoESwgjmmKvMsBOntXbixQJQukiBy2ShHJ9hpymKUCTjzBLCOKdg%2BNTI15RTNijeGX9XX9H4Oimseb%2BAIXfhiHj45xCOblDUSpxsO8wdSdaurAeUym4606IeWKbhvDRoWmMO90Trvu9TF1KBBfEN153MAtfIlLjTDCgR4gzbrmNxcrz%2FXeK%2BrzUHwjTCx&X-Amz-Signature=ce16606c9618d158942a3f50d6c4adece79b4b486686a8b74fe3668617396637&X-Amz-SignedHeaders=host&x-id=GetObject)

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
