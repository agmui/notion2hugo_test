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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C66PXB7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6kg36unkCQYvRI4dSUCdCwm5Yp%2B0tvPUyM4WvpFVkXAiEA4%2FBxWFQYnoiioSl9xc5gPkk1YYyu48cwulJhrsx0LUsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNF6iYzhR7uYvrWNSrcA008nz9A5AzvT%2FRS%2F9EQNvzpwR%2BFiNzLB9OMMs17u01gd%2FPxWVBTq%2FLe9HDhMyYaLMUIxA9pgXpDfoWJFxg0xeo0kb2qiZzQkNib8sNiwZQLnPGK4pC9wsSvc407A%2FJj%2F2d1OAMrJZfy6sSawspFvYfp1M2TtPsjtGkZCZs5deZFv58kkqgQq6nLv8VKgHCZY%2B5gpckdX8p0uWiLL67fy5c%2FtOzaq2qZ1VIrs8WVdKmVh7sr2UYyWW5d%2FFLWtr5hwOAl4PXp4Lt0k3E61jriz5UMg3XglDxEOpxrO5pITKW16vyd6wwlDS57AFXUMW7cihg6bzPqN%2FYE6XQbdg1rvhcpPjYbvuyCFI8Ss1rKQkS8iNi46w%2B41it7edk4VhJRicbIK6OI0KXBnpEkQYk8aqoYpJn4rjJt%2BxTRdF3kvZRQ95oAf1KaXVIHSCjMK7L3XBZaqnldWFjGMhzpBN0xAJD0pF7cYRaBUXmB3Y5oYfc4NZEDswyL46Vh5ORyu2w5l%2FEfFHQ4ALJJRyd%2B8vxY0Rs%2FfJX4%2BVjEi5anbPUg0yz7aG2hzB3eLkDkG0OrFK1RaXS1354FRVTmMFzUnqXCqwfnkmxoiKcCVHDl2hkBmIY2QstB%2FZyhIy5xyDvMMM3NwMMGOqUBq5atK%2BtJLT07iU3lDVp0hUdqeeXW8hQyX27NStmfJnGe53ZYs6%2FDRosPqIOzsCaLZi0yZIw0q8xDqV%2FdOzik4t1GDSqmbqSx6J0U75dXu0T%2FVFVphAI0gqJasAmwmxGdrV5aAzz%2ByMIAFHdlQLqbqEXzJrPbVci9B2P37B2ASHS2RN7ez68UNkKSwpKn7gkcMoMMLa%2BdjiwvmDi7hdXRZYo1XcKh&X-Amz-Signature=944518b6e9b9e518f1cdd9cec70c85883bc8821d1f469528f906ee795fbbe8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C66PXB7%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6kg36unkCQYvRI4dSUCdCwm5Yp%2B0tvPUyM4WvpFVkXAiEA4%2FBxWFQYnoiioSl9xc5gPkk1YYyu48cwulJhrsx0LUsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNF6iYzhR7uYvrWNSrcA008nz9A5AzvT%2FRS%2F9EQNvzpwR%2BFiNzLB9OMMs17u01gd%2FPxWVBTq%2FLe9HDhMyYaLMUIxA9pgXpDfoWJFxg0xeo0kb2qiZzQkNib8sNiwZQLnPGK4pC9wsSvc407A%2FJj%2F2d1OAMrJZfy6sSawspFvYfp1M2TtPsjtGkZCZs5deZFv58kkqgQq6nLv8VKgHCZY%2B5gpckdX8p0uWiLL67fy5c%2FtOzaq2qZ1VIrs8WVdKmVh7sr2UYyWW5d%2FFLWtr5hwOAl4PXp4Lt0k3E61jriz5UMg3XglDxEOpxrO5pITKW16vyd6wwlDS57AFXUMW7cihg6bzPqN%2FYE6XQbdg1rvhcpPjYbvuyCFI8Ss1rKQkS8iNi46w%2B41it7edk4VhJRicbIK6OI0KXBnpEkQYk8aqoYpJn4rjJt%2BxTRdF3kvZRQ95oAf1KaXVIHSCjMK7L3XBZaqnldWFjGMhzpBN0xAJD0pF7cYRaBUXmB3Y5oYfc4NZEDswyL46Vh5ORyu2w5l%2FEfFHQ4ALJJRyd%2B8vxY0Rs%2FfJX4%2BVjEi5anbPUg0yz7aG2hzB3eLkDkG0OrFK1RaXS1354FRVTmMFzUnqXCqwfnkmxoiKcCVHDl2hkBmIY2QstB%2FZyhIy5xyDvMMM3NwMMGOqUBq5atK%2BtJLT07iU3lDVp0hUdqeeXW8hQyX27NStmfJnGe53ZYs6%2FDRosPqIOzsCaLZi0yZIw0q8xDqV%2FdOzik4t1GDSqmbqSx6J0U75dXu0T%2FVFVphAI0gqJasAmwmxGdrV5aAzz%2ByMIAFHdlQLqbqEXzJrPbVci9B2P37B2ASHS2RN7ez68UNkKSwpKn7gkcMoMMLa%2BdjiwvmDi7hdXRZYo1XcKh&X-Amz-Signature=f57e84aa8b2d67f52d2152d081aa14583b5f003f6679d34eb4d4fb689a50174b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
