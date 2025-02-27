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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XFAFMS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCyKF2DTkg4PkT3qBwHthMBPvQL8jhrYF2dJjBBhNFqsgIhAPUFTshC%2BdJx%2BkmpFnwSxWqzsvAE%2BxNqPuiQ9E1hiGPBKv8DCHwQABoMNjM3NDIzMTgzODA1IgyVsVVM9A1ccIJsa60q3APCKXzxG%2Fsl4C5pw4d9yUS%2BabC9wHp7zh%2F1cCesK%2FaA5776o2H1hatBCndHvU3Ip3wGXMCxRPdMf5txhji3BzLnRqYEIzJvsE8NL%2FsLPDx99rhwYN7JMJAt5VyZ14lzAk0ZB6vwkzC2PjO6sm2TbQ7tBQc3%2BZlbtv6OglPSz3Rum4pl5yYfvmY99gfM%2BfeAEQwbjLVYn%2BGv893hflS75OZnnvyVV9fLZ4%2F99KuvcBM1nvW59mtU7NeBq8xvDnLT9KIIDrVxfD6tqiEX8OXjs1Bs3OFpwXTI71aYYPFsEaPycOtORJKX1mcIM6scGgd5wICsoUGXCXE%2FPH9RJ5mPDc3qc939gGDPQwasf6HxI5mun67U0RQgFq1NkS%2FqNfJdkOCVxM0QjYar7tdQlerpaNdilO9bcmRdTJ%2BBjMb1gzm4xKFHoAjBjHqNBWa%2FMMXu4FAVKUcS%2BdqyYlpW%2BkhzoDIMcCJ67YRbKy87wZc5ETeYOSg1%2BGyDM0u%2BVmM%2FAiuxi%2BWPF6%2BLBC8biH158PuWGxUA50gJ7f3uq30OsEos7YUjPs3sFveA89cvT3IFZVVcw88mxadjzuvItxd735L9FSr1fvLeWvOt08S6uAuzEHxuaZHTVWYvysBRMfKv5DDP8IK%2BBjqkAYZ%2FvhiWVTJTK5uiylY3NxAm8QKqu26uxS2roJa7YblwJMZCrcwqs6ORic9mdF4riFDVZI3CkjE13lYIunrIPCcaW8bIhCDd5SBLHEA9lB%2BLTczH9sxoroKYphSolhYEkk%2FrALKYoi7t2sfq89%2Bdd%2BgbiciTtaypi07akBsVj8aoRVBiAsTUH9VFbPL1I5LlIp0sgfjqisQeKiYpDX%2BfokmC3mgY&X-Amz-Signature=b3cf5eac9cf3069f42b20413017cdc5f024ce1f67a80842b7f1408d8ffb12f08&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XFAFMS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCyKF2DTkg4PkT3qBwHthMBPvQL8jhrYF2dJjBBhNFqsgIhAPUFTshC%2BdJx%2BkmpFnwSxWqzsvAE%2BxNqPuiQ9E1hiGPBKv8DCHwQABoMNjM3NDIzMTgzODA1IgyVsVVM9A1ccIJsa60q3APCKXzxG%2Fsl4C5pw4d9yUS%2BabC9wHp7zh%2F1cCesK%2FaA5776o2H1hatBCndHvU3Ip3wGXMCxRPdMf5txhji3BzLnRqYEIzJvsE8NL%2FsLPDx99rhwYN7JMJAt5VyZ14lzAk0ZB6vwkzC2PjO6sm2TbQ7tBQc3%2BZlbtv6OglPSz3Rum4pl5yYfvmY99gfM%2BfeAEQwbjLVYn%2BGv893hflS75OZnnvyVV9fLZ4%2F99KuvcBM1nvW59mtU7NeBq8xvDnLT9KIIDrVxfD6tqiEX8OXjs1Bs3OFpwXTI71aYYPFsEaPycOtORJKX1mcIM6scGgd5wICsoUGXCXE%2FPH9RJ5mPDc3qc939gGDPQwasf6HxI5mun67U0RQgFq1NkS%2FqNfJdkOCVxM0QjYar7tdQlerpaNdilO9bcmRdTJ%2BBjMb1gzm4xKFHoAjBjHqNBWa%2FMMXu4FAVKUcS%2BdqyYlpW%2BkhzoDIMcCJ67YRbKy87wZc5ETeYOSg1%2BGyDM0u%2BVmM%2FAiuxi%2BWPF6%2BLBC8biH158PuWGxUA50gJ7f3uq30OsEos7YUjPs3sFveA89cvT3IFZVVcw88mxadjzuvItxd735L9FSr1fvLeWvOt08S6uAuzEHxuaZHTVWYvysBRMfKv5DDP8IK%2BBjqkAYZ%2FvhiWVTJTK5uiylY3NxAm8QKqu26uxS2roJa7YblwJMZCrcwqs6ORic9mdF4riFDVZI3CkjE13lYIunrIPCcaW8bIhCDd5SBLHEA9lB%2BLTczH9sxoroKYphSolhYEkk%2FrALKYoi7t2sfq89%2Bdd%2BgbiciTtaypi07akBsVj8aoRVBiAsTUH9VFbPL1I5LlIp0sgfjqisQeKiYpDX%2BfokmC3mgY&X-Amz-Signature=538ffcbb7e69a052bd142bd3f91d60ff0aedc6eaa51e5386aeeb87c68266555d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
