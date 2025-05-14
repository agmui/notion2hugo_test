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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBB4NCFB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID4ywNjdWK0sHLvf0VXombqkyD629q4RHun5wVfVnpU7AiEAvcL7MNhcbht%2BduvNV5CRzUCEFZ9g0d%2FY2raOdrCYal8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI8aHjUEoNMOVGNtUCrcA%2BvIMSO4Yxp4WM8L7YsaIpUjJSpJFlJlhaAdNgp7tDYsNXjOSpLCxBaR0XnDV2iBl%2BSrdqy64XlAl%2BB6VquOHKIICtzOenCJMIlorpG7ydmggMPBkHQGQMqRgr90crgGCJvtWKDeD3bZ8GenelLN4hkYi2jrzNqHkJwp4mCyHa%2FIJiaeZ2aZY5u8O9E3USyBAuR%2BCtcD6XeUJ%2BOpdv6jLRTRcO99JNCU4GoQZoP0E1V42cvaxNer%2FdX8xmPeLgCY%2B315a6rQp4z65WgsFIpyiTHB%2FoatGjWMAwJvne3RolwTS4iWIITHtecDD8m48%2BTxJrHDRhLAkL5rfhrWwwqz97T%2FfCJffEp6NLYrW1NiH72EvYcg4EfRlPaWr%2FiIgKemo7cXcJHgAWQYtCDGlkydlYm3kkOPMxqZzN7fizRCILa%2B5A461Xypvn8%2F8Jme8OYHR095U%2B%2BBR5T8RT7KDjCs%2Fr6gFrYMkC%2FbaRFCVFZbMgEoxWDWqB6Sv%2BUjxxxzDeq9otm3F3DwyC4GbmPlTk%2BrhCuXJppj3GXwycnpDcmGBbE8INw36YN6RnkEICpul39yrTvTDX32rgrXfV%2BcRCJHHaQouZum6cqdeebR3lYtbQU3rAQdAs%2BUyJ2fAHK%2BMNfvksEGOqUBHMeAuI3Vl50t%2BQnp0vTNmFDVSXtphJUXIyFjU%2FMedxyDhFQTdt2J%2F0FYmtJs2OXn5Jl9vSFcj4L9PqLm0i9lN1bmZrQqRFN5Vu8mpv8JnLEqlcxI0o5Y9z6BkPOl%2FT8N3OMzhaW%2BlCc3LLBW4hTOmkeapKpiTZCI6s4rWLZHZ7zsPBSBxm%2F4rd1Trk5SiVNqk0GfCbi96I9Cba0CGOR3%2Bqq%2FG5kH&X-Amz-Signature=2db55054231b0fae3a16e3ec9e3c62c1f82e799d9bdd8f0b333bb8126460cbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBB4NCFB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID4ywNjdWK0sHLvf0VXombqkyD629q4RHun5wVfVnpU7AiEAvcL7MNhcbht%2BduvNV5CRzUCEFZ9g0d%2FY2raOdrCYal8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDI8aHjUEoNMOVGNtUCrcA%2BvIMSO4Yxp4WM8L7YsaIpUjJSpJFlJlhaAdNgp7tDYsNXjOSpLCxBaR0XnDV2iBl%2BSrdqy64XlAl%2BB6VquOHKIICtzOenCJMIlorpG7ydmggMPBkHQGQMqRgr90crgGCJvtWKDeD3bZ8GenelLN4hkYi2jrzNqHkJwp4mCyHa%2FIJiaeZ2aZY5u8O9E3USyBAuR%2BCtcD6XeUJ%2BOpdv6jLRTRcO99JNCU4GoQZoP0E1V42cvaxNer%2FdX8xmPeLgCY%2B315a6rQp4z65WgsFIpyiTHB%2FoatGjWMAwJvne3RolwTS4iWIITHtecDD8m48%2BTxJrHDRhLAkL5rfhrWwwqz97T%2FfCJffEp6NLYrW1NiH72EvYcg4EfRlPaWr%2FiIgKemo7cXcJHgAWQYtCDGlkydlYm3kkOPMxqZzN7fizRCILa%2B5A461Xypvn8%2F8Jme8OYHR095U%2B%2BBR5T8RT7KDjCs%2Fr6gFrYMkC%2FbaRFCVFZbMgEoxWDWqB6Sv%2BUjxxxzDeq9otm3F3DwyC4GbmPlTk%2BrhCuXJppj3GXwycnpDcmGBbE8INw36YN6RnkEICpul39yrTvTDX32rgrXfV%2BcRCJHHaQouZum6cqdeebR3lYtbQU3rAQdAs%2BUyJ2fAHK%2BMNfvksEGOqUBHMeAuI3Vl50t%2BQnp0vTNmFDVSXtphJUXIyFjU%2FMedxyDhFQTdt2J%2F0FYmtJs2OXn5Jl9vSFcj4L9PqLm0i9lN1bmZrQqRFN5Vu8mpv8JnLEqlcxI0o5Y9z6BkPOl%2FT8N3OMzhaW%2BlCc3LLBW4hTOmkeapKpiTZCI6s4rWLZHZ7zsPBSBxm%2F4rd1Trk5SiVNqk0GfCbi96I9Cba0CGOR3%2Bqq%2FG5kH&X-Amz-Signature=7760820d54906f13ddb097975fe05ae0e8f0d3c687a35bb10c1306929b84e538&X-Amz-SignedHeaders=host&x-id=GetObject)

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
