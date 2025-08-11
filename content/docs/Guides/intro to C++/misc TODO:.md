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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JLLMVO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx32ay6S9oWzVCInNlqaDyjYHKwnmghJxZCl9ocdIMqwIgWbvM%2BEVxjNv6FPCI2VeRbBIVth3tYH6zBOT61ExuOI0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLKs9p4%2Ba2cH831RircA73%2FS%2Bke8jWNdqsEh14jJm7icU1q76RbjjWcD4i0f7ST8XTgpOgEk4xVoV5APTDMglgZPYLM9dSUCkT%2FZg4pgOvHRGQeU3S%2BJ0%2FtiVuEWQLY2BnvAQQmsnGhJ0ZVHxUFOCfvybCG2br4lsEHfAg1LwmYCO3BH8FKRPOvtmYP3pfZNY1VxeeukiqFnhnE3MVOFf1hEfEAwEZOSs6Qn%2BwW0YHRl9tiwKx9wjg02uTMHJno3RfG1Isa8ovjTzu78xDz7zVC7EpsOX50hOcDlHM0YIXZexVFWMHOkMRpP8eUrgtHcs4Vzp1lSb4%2BxVwYLgpSpDh2QjM%2FGxFz6R28SPV3DStLyhKVp7qCug9Zi6PGSlrnU5wUBlRHKevSrPAL7X0gdhGCrmfPnpZ0tcZec0ByifiNAO6xx6hf8u0lxN40Vl%2B0sz7mOmcMvnTRUTv5VLEYQYsw8W82Ozr04mygofeKSqswMGZcw%2BPtwAq99PkrJGu6vSy63CO63YnW46Vm7As7a3yvKVFbZg9wB54zhNICWpP6ZytYVtwPLPFP0puvMVrcx0sU1qhB%2BRZbm46PiGRG0jxdZ9GB1fuj%2FSR6D42jL7w505N8IcDroTUAd8RFo5m8o1Hy5QKuiJiezLDrMJie5cQGOqUB3GZolwKTt4rRO1yEtuUoC13NE8bXmvxSJoRvLdEP2EpLvOHjOrFY2nNl%2B0Tqs3rh3HyHsrxOSyzrIMZDvYpCiBY7J8BUd7JrH9dVt56IHjozHceY9lKaUMtCLZVGMsRvWjLShHdVc0C%2FZIJkQfm7fBJLfy9sCGrGdM78sbsNIIZqtrhOCsedR0PT5dum2dczyLIt8W7%2BSS%2Bo5xhxIzylJC8F%2BtB8&X-Amz-Signature=bea8ff97131f3f8356c2923419796d4ee025a72e658758cbe16cda649f616740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JLLMVO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx32ay6S9oWzVCInNlqaDyjYHKwnmghJxZCl9ocdIMqwIgWbvM%2BEVxjNv6FPCI2VeRbBIVth3tYH6zBOT61ExuOI0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLKs9p4%2Ba2cH831RircA73%2FS%2Bke8jWNdqsEh14jJm7icU1q76RbjjWcD4i0f7ST8XTgpOgEk4xVoV5APTDMglgZPYLM9dSUCkT%2FZg4pgOvHRGQeU3S%2BJ0%2FtiVuEWQLY2BnvAQQmsnGhJ0ZVHxUFOCfvybCG2br4lsEHfAg1LwmYCO3BH8FKRPOvtmYP3pfZNY1VxeeukiqFnhnE3MVOFf1hEfEAwEZOSs6Qn%2BwW0YHRl9tiwKx9wjg02uTMHJno3RfG1Isa8ovjTzu78xDz7zVC7EpsOX50hOcDlHM0YIXZexVFWMHOkMRpP8eUrgtHcs4Vzp1lSb4%2BxVwYLgpSpDh2QjM%2FGxFz6R28SPV3DStLyhKVp7qCug9Zi6PGSlrnU5wUBlRHKevSrPAL7X0gdhGCrmfPnpZ0tcZec0ByifiNAO6xx6hf8u0lxN40Vl%2B0sz7mOmcMvnTRUTv5VLEYQYsw8W82Ozr04mygofeKSqswMGZcw%2BPtwAq99PkrJGu6vSy63CO63YnW46Vm7As7a3yvKVFbZg9wB54zhNICWpP6ZytYVtwPLPFP0puvMVrcx0sU1qhB%2BRZbm46PiGRG0jxdZ9GB1fuj%2FSR6D42jL7w505N8IcDroTUAd8RFo5m8o1Hy5QKuiJiezLDrMJie5cQGOqUB3GZolwKTt4rRO1yEtuUoC13NE8bXmvxSJoRvLdEP2EpLvOHjOrFY2nNl%2B0Tqs3rh3HyHsrxOSyzrIMZDvYpCiBY7J8BUd7JrH9dVt56IHjozHceY9lKaUMtCLZVGMsRvWjLShHdVc0C%2FZIJkQfm7fBJLfy9sCGrGdM78sbsNIIZqtrhOCsedR0PT5dum2dczyLIt8W7%2BSS%2Bo5xhxIzylJC8F%2BtB8&X-Amz-Signature=cc45460b63bb6961ce5a01c7a6e67088e8ec85bd55b4ac87724fb841313c820f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
