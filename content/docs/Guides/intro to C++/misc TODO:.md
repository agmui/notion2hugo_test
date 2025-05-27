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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBPY4QZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnA10knz50fxLmVV6LHyoSuEp%2FMai6MDiRNNrcsZ8FugIhALCofpaF6dKN0wXFLbbSehhR47kWlUZMjuh%2FkLov%2FpRlKv8DCGYQABoMNjM3NDIzMTgzODA1IgykCe8qU4wZsq%2FJHawq3AP3IyxSTAuOUbZILmDITq8JuFdyQ%2FRjvhkLlAvesIVM%2Bj7vvAHbG1FiAofblb%2FW6zGwtpyXVzHpSi%2FNsG%2FYuAVRetbkOGmouXka9Vs0sck2rQES9iuGyPPl2cg3af%2BuSh3AzOu3dJ2RG%2FAEiZmHygJY78QQbjYUNgKi3nyTMn5pPsHrbuv4zj68%2FCTxvNrV6p5ybKgGFBlirp36LyTBJZbF4tgJ1cEc3c4lWhc6IqMDkSAl0JVOFA9YOrG68vQS5j2zGTGKaLXqrqQCOTSWNWI5K1Xlf2xU7HC%2Fpgeo5hUpMh8Ms0%2BZAsJySr3KSDWDQ04nwTymJHBKwuqRn8rhEXYHU6C3idkZLYBcSyjvAeF%2BMKWFR%2B8YYnyUg0dkN%2FMlHsD7iRF8x8sxenUKE4W4BzVTNVx4QOCP79kN23eeDO%2FqKbZCA99zwBOGmm449%2F6Swv9yd4UupRayqDf8jWPNOgM8B79KFRTyRyQzAM05SKWJFy27qRFFzLHBjy%2Fwtl3DtJNNKylKj4noM6nFx5%2FRUQx01IRoo9G0%2FOSWFi8Ar8A5B5MsWFfJui6PJhnFw%2Fjkpo1BA0D8i7HCA2UPbmw%2Bt4A%2Fiylrm8h80U9ndemkN4iGAHp20VlGfnWJWon0ezCwydjBBjqkAbQRSxmNEvi35StWmkRwqx1IEEcweALWqWchXYA%2FAOPBVB5NZhZAAoBhQP%2FyC7JXajX5zvY8WRmhVZeEBSD%2BsfWzdEugdu0cSyLJcvyfPpx3XYoqSDFVc4q9yNxckAycFG9U1pi%2BN0hhjck1a9PRDqJfbvo8h%2FNEAoL07QtOs8bxBhlnGwOjGwJBC4HnTi2l1ihuCjuyW4z2zeQTmLKGv9s7Xi6%2B&X-Amz-Signature=def8d8dc64a56f8fb0477167bb0226c58b49ae43251b5218c08666dfd7888e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBPY4QZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnA10knz50fxLmVV6LHyoSuEp%2FMai6MDiRNNrcsZ8FugIhALCofpaF6dKN0wXFLbbSehhR47kWlUZMjuh%2FkLov%2FpRlKv8DCGYQABoMNjM3NDIzMTgzODA1IgykCe8qU4wZsq%2FJHawq3AP3IyxSTAuOUbZILmDITq8JuFdyQ%2FRjvhkLlAvesIVM%2Bj7vvAHbG1FiAofblb%2FW6zGwtpyXVzHpSi%2FNsG%2FYuAVRetbkOGmouXka9Vs0sck2rQES9iuGyPPl2cg3af%2BuSh3AzOu3dJ2RG%2FAEiZmHygJY78QQbjYUNgKi3nyTMn5pPsHrbuv4zj68%2FCTxvNrV6p5ybKgGFBlirp36LyTBJZbF4tgJ1cEc3c4lWhc6IqMDkSAl0JVOFA9YOrG68vQS5j2zGTGKaLXqrqQCOTSWNWI5K1Xlf2xU7HC%2Fpgeo5hUpMh8Ms0%2BZAsJySr3KSDWDQ04nwTymJHBKwuqRn8rhEXYHU6C3idkZLYBcSyjvAeF%2BMKWFR%2B8YYnyUg0dkN%2FMlHsD7iRF8x8sxenUKE4W4BzVTNVx4QOCP79kN23eeDO%2FqKbZCA99zwBOGmm449%2F6Swv9yd4UupRayqDf8jWPNOgM8B79KFRTyRyQzAM05SKWJFy27qRFFzLHBjy%2Fwtl3DtJNNKylKj4noM6nFx5%2FRUQx01IRoo9G0%2FOSWFi8Ar8A5B5MsWFfJui6PJhnFw%2Fjkpo1BA0D8i7HCA2UPbmw%2Bt4A%2Fiylrm8h80U9ndemkN4iGAHp20VlGfnWJWon0ezCwydjBBjqkAbQRSxmNEvi35StWmkRwqx1IEEcweALWqWchXYA%2FAOPBVB5NZhZAAoBhQP%2FyC7JXajX5zvY8WRmhVZeEBSD%2BsfWzdEugdu0cSyLJcvyfPpx3XYoqSDFVc4q9yNxckAycFG9U1pi%2BN0hhjck1a9PRDqJfbvo8h%2FNEAoL07QtOs8bxBhlnGwOjGwJBC4HnTi2l1ihuCjuyW4z2zeQTmLKGv9s7Xi6%2B&X-Amz-Signature=30f375d4781296362f6f0b5f58b10b2c533923f8e7c694e526dfe1847ff5e1db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
