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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKDMR26%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT1zh%2BRY5oB0b7PhCkPkLL4KPHEAcLP%2Fc6B88RjEAXjAIgUitp3XoTU2%2Bmr13Vq3vp0F4Ic1RfaHIHbrDHPzkgz%2FkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTFzI%2BFmKMfSF4YhircA8aMmKULfKAxtfHcGBn3XXiSmQIGpz6zosv0HiOxDFYdHSVkZZ9Icj7K%2B%2Fxco1KCctReI0NpDCNZq0oWujoUa1eFG8yeg%2FdATIXf1OOL5SPE8jtd9D89toLtTafLLJiQnfGUBiDwV6Q3oo9OrcUEjjl2Hp3tPsDvVCemWVpm3MeV3uLGQwbsT6TK%2BTcFh1WcEkkKFNCgUPnGDaDIoWKZ%2ByNb9VzampnAVVTt4invYEfVmPpx5IjO6d2FiN4kWiw4QHo3Ro4l7n63RtUELfNdWiIHa5X%2BiYA5S%2FAkbDkUg0TEOt1W%2FEyT7B06NhJwoeazqGQuR%2Fg72htoFQzkoeDa0Az5%2FKKpe3j5jmBmaJk8Rrnca467HZcc%2BWQltflEPLSOScjSym75kcYKmpoJVU%2FH4NxdBGUIqNCREGMWjnK%2Bf1jJoFuZjLq5gGn7MkUANFSq2PvCQ0nysU%2BItlJD3yKIjP8UMaa0qIUfEShLZ1wMJGgJBNoZFf2sHaLLa16T8l0EQ6JTxue9i8GxcFPX6WFg%2Bq9Wxz%2BUuH7f7SJsQjOZcAcfTm2N9BhmE2qDlI1E7m3vTl4ePfV%2FiAE%2FugpeQIjPuvpFBnZIUamJ%2BtXV3gFnd%2F%2BFnzQoXAO2P6asphcyMIv4tcQGOqUB8aIN9zby3PmjAifd%2FQQwrhIzDEH2PTvNhLFiOEq5ljaBWcnO8RtvhPuGEfP3VnJNU%2F9FG7vtWqu00xI3cyLhYmVu9IzYjx6axkczusFFgCS9dvdg5OYj2dEjZ85uMZ9u%2Feg1hxFpOufR3%2F5R%2FhaUvTX%2FanNsOcVOvZcZ6QEY%2BfBw7QhpWdfCr3fur%2FB40LaKYPucYcmEoyUmYbVDdJtACAKtc8ot&X-Amz-Signature=c8b41ea32118911cffd48ca62b27fd1d88b875609f3dda4eb5a8d30aa252f51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKDMR26%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT1zh%2BRY5oB0b7PhCkPkLL4KPHEAcLP%2Fc6B88RjEAXjAIgUitp3XoTU2%2Bmr13Vq3vp0F4Ic1RfaHIHbrDHPzkgz%2FkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTFzI%2BFmKMfSF4YhircA8aMmKULfKAxtfHcGBn3XXiSmQIGpz6zosv0HiOxDFYdHSVkZZ9Icj7K%2B%2Fxco1KCctReI0NpDCNZq0oWujoUa1eFG8yeg%2FdATIXf1OOL5SPE8jtd9D89toLtTafLLJiQnfGUBiDwV6Q3oo9OrcUEjjl2Hp3tPsDvVCemWVpm3MeV3uLGQwbsT6TK%2BTcFh1WcEkkKFNCgUPnGDaDIoWKZ%2ByNb9VzampnAVVTt4invYEfVmPpx5IjO6d2FiN4kWiw4QHo3Ro4l7n63RtUELfNdWiIHa5X%2BiYA5S%2FAkbDkUg0TEOt1W%2FEyT7B06NhJwoeazqGQuR%2Fg72htoFQzkoeDa0Az5%2FKKpe3j5jmBmaJk8Rrnca467HZcc%2BWQltflEPLSOScjSym75kcYKmpoJVU%2FH4NxdBGUIqNCREGMWjnK%2Bf1jJoFuZjLq5gGn7MkUANFSq2PvCQ0nysU%2BItlJD3yKIjP8UMaa0qIUfEShLZ1wMJGgJBNoZFf2sHaLLa16T8l0EQ6JTxue9i8GxcFPX6WFg%2Bq9Wxz%2BUuH7f7SJsQjOZcAcfTm2N9BhmE2qDlI1E7m3vTl4ePfV%2FiAE%2FugpeQIjPuvpFBnZIUamJ%2BtXV3gFnd%2F%2BFnzQoXAO2P6asphcyMIv4tcQGOqUB8aIN9zby3PmjAifd%2FQQwrhIzDEH2PTvNhLFiOEq5ljaBWcnO8RtvhPuGEfP3VnJNU%2F9FG7vtWqu00xI3cyLhYmVu9IzYjx6axkczusFFgCS9dvdg5OYj2dEjZ85uMZ9u%2Feg1hxFpOufR3%2F5R%2FhaUvTX%2FanNsOcVOvZcZ6QEY%2BfBw7QhpWdfCr3fur%2FB40LaKYPucYcmEoyUmYbVDdJtACAKtc8ot&X-Amz-Signature=594261fff32e118325c007cc54caa4d461d77739842518cfa5409399bbe349bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
