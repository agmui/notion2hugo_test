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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQ7EKRL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3b3tqcZc4nVq9%2FLZBRP8WLX3%2FiD1cGvHt3CnGXppBIQIgI94dtHp1X8sf4u1N0%2BMaadnwsPgwIreqjWwd2n%2BBiq0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOMmHjXlvdyBKDUgCrcA2INFkYabJJjCx%2BhhR1cMXpHBnCqK5QRkgsAF2324qr7g%2Bcsp6x7LErpdtgIDs3LQ2%2Fly525XEEO2Ph9c%2BVwNYxHnmpnQHnVDp6jKPJ20p0gT0gkFOURbE2O2W7sDRCXAe43X%2BBbTb9H4NzE5DzBoKXEw%2BLwHkqFaBa%2FojgoAm9pUFbHAf1GvEBOIWisVQRsSUzLsq4KxwIUwXpBVjOJuPqtkayRpWtOdH1boG%2BBEgyXoN8QRA7ObEMH4%2BPEEkrKe7ywprPgjC%2BgPuxXZVTtpLG%2BGnOIZenK8U1T9P6fcpHoQTmDjtX4WOucPM9b5P0HOw6HeUFsidXcMmEndlROtETGeh34zse2xUAm02%2BXmG3sKV6ZJamJqgPI5Ikd9x3ERHyABti20efLVZ38rXKJ5lPtfLe8LWpyFnfoosS01BEX5oPbBz1WepSdmWVUU8BtOHGJYvKXs5K8lDcWrV3x8PBVvYDJTtin5HzVFGEFYKOR%2F36gfdANxCIt1Z%2BRqeVpj2P37QppGnCJgnT5Mjs4GbLub4%2FScuTQfk8mkindWlDNpXpN8iHtN2tOjUShn6HGKrYzDzzVyFYhT1CproKWVgwPPqQ6Yth%2FXHCbmquAIppdDnzQqHukKNrcH4RYMLzTjcMGOqUBzc8jsebLrNUa2zWnmdfY3WNZudt5IrD9k0xPtBv27e3TEtg%2FuB2MhzJA47eBuKT0MwkSMDFMHgv5wZYS8AZmfwvBo8qqjfsOtPXnYocdkFnalX3vwi8pH9EB0k3AthWfiOU5o28UjY3V0deROkGZVib4CH2xatT%2FPyws%2By81HmStmn5ApMRZIbBEyuTB%2FPpvcrZlfqNBNnkumJKf3WvXNSKRfw2I&X-Amz-Signature=69276342330eb12dd91756cf7db756b3b004dedb40ecb53f88d49460d8ac78bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQ7EKRL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3b3tqcZc4nVq9%2FLZBRP8WLX3%2FiD1cGvHt3CnGXppBIQIgI94dtHp1X8sf4u1N0%2BMaadnwsPgwIreqjWwd2n%2BBiq0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOMmHjXlvdyBKDUgCrcA2INFkYabJJjCx%2BhhR1cMXpHBnCqK5QRkgsAF2324qr7g%2Bcsp6x7LErpdtgIDs3LQ2%2Fly525XEEO2Ph9c%2BVwNYxHnmpnQHnVDp6jKPJ20p0gT0gkFOURbE2O2W7sDRCXAe43X%2BBbTb9H4NzE5DzBoKXEw%2BLwHkqFaBa%2FojgoAm9pUFbHAf1GvEBOIWisVQRsSUzLsq4KxwIUwXpBVjOJuPqtkayRpWtOdH1boG%2BBEgyXoN8QRA7ObEMH4%2BPEEkrKe7ywprPgjC%2BgPuxXZVTtpLG%2BGnOIZenK8U1T9P6fcpHoQTmDjtX4WOucPM9b5P0HOw6HeUFsidXcMmEndlROtETGeh34zse2xUAm02%2BXmG3sKV6ZJamJqgPI5Ikd9x3ERHyABti20efLVZ38rXKJ5lPtfLe8LWpyFnfoosS01BEX5oPbBz1WepSdmWVUU8BtOHGJYvKXs5K8lDcWrV3x8PBVvYDJTtin5HzVFGEFYKOR%2F36gfdANxCIt1Z%2BRqeVpj2P37QppGnCJgnT5Mjs4GbLub4%2FScuTQfk8mkindWlDNpXpN8iHtN2tOjUShn6HGKrYzDzzVyFYhT1CproKWVgwPPqQ6Yth%2FXHCbmquAIppdDnzQqHukKNrcH4RYMLzTjcMGOqUBzc8jsebLrNUa2zWnmdfY3WNZudt5IrD9k0xPtBv27e3TEtg%2FuB2MhzJA47eBuKT0MwkSMDFMHgv5wZYS8AZmfwvBo8qqjfsOtPXnYocdkFnalX3vwi8pH9EB0k3AthWfiOU5o28UjY3V0deROkGZVib4CH2xatT%2FPyws%2By81HmStmn5ApMRZIbBEyuTB%2FPpvcrZlfqNBNnkumJKf3WvXNSKRfw2I&X-Amz-Signature=452648f274ff70d4923552faf314f801b67c9a9dd5e5b7c075d55e0b3bb708d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
