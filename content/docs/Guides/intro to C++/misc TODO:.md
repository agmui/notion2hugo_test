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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXT6T5RF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBNy65402U9Q0nj1nJIIJL15ihmL2AWxDt18jLE5EYSXAiEAsAShdIAzaH4lZsJCZpJYSlKKlNuHMykW0BIoFtdmnlgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2HRdhqgKf7TlHCeCrcA4tY%2BgFkfI%2FGN0Etiv0sxQkwi8XKBTx33MjZJvhqBjSnBGKQqazj%2F7DZ3EkebB%2F7mGix48XAhkxcF33YiAZU42N0KPLu4OrFK9iLanX6wcokhygH8Slonwg%2FXKvA9XZbFiWSh0XsvjdhAYSsReqLNMdxy%2B95ifkJ8ysvo2JEKFqMIg%2BQK0aq7kh%2Bzq3F850g2vh72f4zadkySmNYttp%2BqRXWMCVWrCH%2B0du97%2FbzRxdHUvTq7BGYPq%2BKBkpAnZJANAuQ2sVrOk0sC9Vh44hS6muo8WTU0jR0basyCmaWvO6Fjnqp19dcjRNKA0yxE%2FszjVGiohATG%2B7qeJ9C4j3eaBWPgy9xKF6Q5XyO4yobhRu1J7H7ok6ba%2BgrgcLdyEb6Ln3Fg9yCLKfJ8O9VKAsexMmUAZy8kFf2hGnmTnxPTSLwxlf0pmnn2uzt%2FpfzwrV9Lq7SfmR%2BX0UzpD91C%2BgxwKMdup5uHliM%2Fo9hBaoIcjqzdDUisMxMLaIe6sdg16zLzUMrwEUMcbFTMNyeBP41ZeMcAphCgdZMDTjDleq%2Bt%2FC91gGU%2B9qOOS%2BYmJBNRkThg664jBeVjzBJAfbd87VHADYQa6a3oQ1W%2BNuUJ%2FlY8rFAf0XKeYkbKX9naTHqMPb0ycAGOqUBarpYY6q7sf5bvZCklL7YXGBJoJSd7dqjKYrr1Z2H%2FEjM3J9uveR%2Bn%2BIz0a9cAdYipvTjEHRgIOcMaOtB3P4qxe%2BL84Og2oZqv5So3lxpq8EjHManUGoPv3dxlX3HiNHlAmXteIAM76j2RgqSNk5riNQ9YFK2gvzdKHNbATXxeNsA%2FXU%2BMqpsNC2pVxwNibV%2FajjO0ceoW5Jdw%2FIFiVxz5LE3mlao&X-Amz-Signature=3299d6d821b2d768e3ded2d86bd51e3af5f4bd02e2d183e4082a12d96b071271&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXT6T5RF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIBNy65402U9Q0nj1nJIIJL15ihmL2AWxDt18jLE5EYSXAiEAsAShdIAzaH4lZsJCZpJYSlKKlNuHMykW0BIoFtdmnlgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2HRdhqgKf7TlHCeCrcA4tY%2BgFkfI%2FGN0Etiv0sxQkwi8XKBTx33MjZJvhqBjSnBGKQqazj%2F7DZ3EkebB%2F7mGix48XAhkxcF33YiAZU42N0KPLu4OrFK9iLanX6wcokhygH8Slonwg%2FXKvA9XZbFiWSh0XsvjdhAYSsReqLNMdxy%2B95ifkJ8ysvo2JEKFqMIg%2BQK0aq7kh%2Bzq3F850g2vh72f4zadkySmNYttp%2BqRXWMCVWrCH%2B0du97%2FbzRxdHUvTq7BGYPq%2BKBkpAnZJANAuQ2sVrOk0sC9Vh44hS6muo8WTU0jR0basyCmaWvO6Fjnqp19dcjRNKA0yxE%2FszjVGiohATG%2B7qeJ9C4j3eaBWPgy9xKF6Q5XyO4yobhRu1J7H7ok6ba%2BgrgcLdyEb6Ln3Fg9yCLKfJ8O9VKAsexMmUAZy8kFf2hGnmTnxPTSLwxlf0pmnn2uzt%2FpfzwrV9Lq7SfmR%2BX0UzpD91C%2BgxwKMdup5uHliM%2Fo9hBaoIcjqzdDUisMxMLaIe6sdg16zLzUMrwEUMcbFTMNyeBP41ZeMcAphCgdZMDTjDleq%2Bt%2FC91gGU%2B9qOOS%2BYmJBNRkThg664jBeVjzBJAfbd87VHADYQa6a3oQ1W%2BNuUJ%2FlY8rFAf0XKeYkbKX9naTHqMPb0ycAGOqUBarpYY6q7sf5bvZCklL7YXGBJoJSd7dqjKYrr1Z2H%2FEjM3J9uveR%2Bn%2BIz0a9cAdYipvTjEHRgIOcMaOtB3P4qxe%2BL84Og2oZqv5So3lxpq8EjHManUGoPv3dxlX3HiNHlAmXteIAM76j2RgqSNk5riNQ9YFK2gvzdKHNbATXxeNsA%2FXU%2BMqpsNC2pVxwNibV%2FajjO0ceoW5Jdw%2FIFiVxz5LE3mlao&X-Amz-Signature=6dab9a6b8ae810a7b8768540b1155d61962d7b134f5f9f4b83ab06f6b2efc9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
