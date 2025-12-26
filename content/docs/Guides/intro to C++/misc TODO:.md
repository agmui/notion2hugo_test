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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA2VQ34%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFtB1dwzSVrW88ft9Y3CDWmC3KEyQ47xgTDDBVmGmSiqAiBrhK4WZ7Qxj7jyvYXYpAI2X2AEgSqKXzRrfIakRbUsPir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMnD5fvSLwe3EoxERuKtwD4%2BHpBawKZsOcD0d68%2FMN3251T83i8lvzBlsqJfJTb7B3jnqFVEEFxD9zHMWcFU1s6vo%2BM9ra1LtNq2Z7S7JlwrXYZGwxFGsjz3WBprrKxkfPGpsFd9ul8tr%2F0uYLKAeavxdFnefg9h%2ByFvBG1M6b4xNz%2FlodlxCISlJ3PauUKok6fGVUXaEeBMXW5kp%2FBfFWMITX57Yr5e7uy9Mk76IqpleZsBcin2MpGGrKGX9STrQqNO8j5y770F3szXKLSmgqzQdKDz3FUDWWyUlISPDBy5l5DtUnTUnScs2o4T9kLkt0fjPnzmm4L43pvWt9eihs1g3F4vxOJ1wUEhmPYWHghBLofdgyoKXaH5L3GmoAmuPJMnKGKiV0%2Ft2WDd%2FxwbVybi%2FGckO2vdua4zNxh8HPFyzMZh0fW%2BfZrz17xnByGBjW%2BzYoXHAr09hJINiLQGjSrriVMXysRW0cTPos3TRdd7922BEwwx2CWvZEhJfEo%2BxCYiVB8JxsxpmRpF%2FsAV5ILQ0HI0RTIs0QdOmiTZwTRXr6%2F4sLizn4WoLg7VdP6%2BYnZptVoMzHoef4gDqqHCHeh3JC5zAWNhH0FRwvXux9jKh%2FzhIfgrp35cYKSgs7ERgwXKfBH6Y2FxrcYdwwqa62ygY6pgF0WXM%2B0n2iN5xVNZqNlKJUp12c2hwVFE2YDJIlN9vV82INycxPjECcJEOhYYiOG6Gh9n6HpiYyRRM%2BAZIOg%2FU2TiRzfLaHkeXLDmuMLyE03LdL%2BQo7YDmMbLJd7KBjEs76vBsJB4P9towONhIbUIdyAOuSJ%2F2FlQVZSRnC8vfwnR6rFJ0wwPPLJPZ4lDAQdsNQ9pYcB5dimEDQBeCOO4Ely6CVXU1i&X-Amz-Signature=1190388a04d1ca0761b06ef6d0be34576bda960e062f0462d82f2be6feca8725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGA2VQ34%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFtB1dwzSVrW88ft9Y3CDWmC3KEyQ47xgTDDBVmGmSiqAiBrhK4WZ7Qxj7jyvYXYpAI2X2AEgSqKXzRrfIakRbUsPir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMnD5fvSLwe3EoxERuKtwD4%2BHpBawKZsOcD0d68%2FMN3251T83i8lvzBlsqJfJTb7B3jnqFVEEFxD9zHMWcFU1s6vo%2BM9ra1LtNq2Z7S7JlwrXYZGwxFGsjz3WBprrKxkfPGpsFd9ul8tr%2F0uYLKAeavxdFnefg9h%2ByFvBG1M6b4xNz%2FlodlxCISlJ3PauUKok6fGVUXaEeBMXW5kp%2FBfFWMITX57Yr5e7uy9Mk76IqpleZsBcin2MpGGrKGX9STrQqNO8j5y770F3szXKLSmgqzQdKDz3FUDWWyUlISPDBy5l5DtUnTUnScs2o4T9kLkt0fjPnzmm4L43pvWt9eihs1g3F4vxOJ1wUEhmPYWHghBLofdgyoKXaH5L3GmoAmuPJMnKGKiV0%2Ft2WDd%2FxwbVybi%2FGckO2vdua4zNxh8HPFyzMZh0fW%2BfZrz17xnByGBjW%2BzYoXHAr09hJINiLQGjSrriVMXysRW0cTPos3TRdd7922BEwwx2CWvZEhJfEo%2BxCYiVB8JxsxpmRpF%2FsAV5ILQ0HI0RTIs0QdOmiTZwTRXr6%2F4sLizn4WoLg7VdP6%2BYnZptVoMzHoef4gDqqHCHeh3JC5zAWNhH0FRwvXux9jKh%2FzhIfgrp35cYKSgs7ERgwXKfBH6Y2FxrcYdwwqa62ygY6pgF0WXM%2B0n2iN5xVNZqNlKJUp12c2hwVFE2YDJIlN9vV82INycxPjECcJEOhYYiOG6Gh9n6HpiYyRRM%2BAZIOg%2FU2TiRzfLaHkeXLDmuMLyE03LdL%2BQo7YDmMbLJd7KBjEs76vBsJB4P9towONhIbUIdyAOuSJ%2F2FlQVZSRnC8vfwnR6rFJ0wwPPLJPZ4lDAQdsNQ9pYcB5dimEDQBeCOO4Ely6CVXU1i&X-Amz-Signature=fb5fe3209cb23d656cd4e7ae6e30c833839bdfadd72776cd53fe94c9fb4a12e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
