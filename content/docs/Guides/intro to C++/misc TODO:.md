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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOXCQHJ4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEmJxi6FFqOSnmBGUPObfc1ydTA%2BtXVRDP4qVGLBsiuwIgTRXCHPwRh%2FcIg3qhEUuKA54w3%2Fb2yIAHQeVxJrzuMIMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx5FnQ8tupJ3pXFYSrcA%2FTo7nsIRE9Rpi1HMcS%2B0G4OmPimrBkjc0PSdwVvyJ3AHovtXp4OenrX8x%2BJ7YfPoSbHoQ3p0x5hHlMFYpj9ZJ8aT2brOUB9RIzXsCw7dNYiwKWXFvTA4x4x1hG3maz%2F630GwT3hhCzXPeW6xofL3DSMuci2VsWMrQ%2B2L0ySw4x8oKYSEoLftWXT6iuk6nw7u2rTaaOgp6SKqR6aoy4FygLtX9HHPUkF5WYvHOEsU8%2FFhNE6FMHJ6zz5u8eBfgpR6pXu15KYEbjxiHuFNuCSLpCn1r%2FBH33hlF8yTxcdwvXOxZsLCuhcyWAkEazBGKgP%2F%2F1ZNLv7TJoqhr%2B388ZA%2FAUezPixRLXPrmfXkNaR5Q0W1qBp%2FkLUtkL%2BOjCBtOHjuaYRV4DCliSP9EDtyO%2FKNMBpcdw8XVqrHkkKcl1mWqVfN%2FBctoUsceYD6HUgIytCqSg%2BITaBMuBWhJePg8XtX1yiC%2F1F1GgodtiqHjSebZ3WG5BopkQmwjZ7TW3Z2B%2BuPP9WluPz45z6AqxWQSF%2BxZEsLxZYAYGKZ9t9%2BOBFAJUEc%2FT6U9OohWax1Y35sulOxHQIdM7NAGlsR4pIxTzWgoaa9%2FXNOepTw7eV0VTR%2FRld1m0uhVMbG4s1CX4MMNK1xsMGOqUBRoRrp%2BdrtvU00jeMIJ4JpYoC9hU1e8uJZt2hgnBSR0mI%2FveC02b7Sqws4Q4%2BIiqmsSGIdM%2BKdYIqT4UtJFrFrg5wm08%2Fr1PBjp7LDBwrY6PwiqYAezyLB8fYB6E8NEfI3cOxFLuquiqrIrWC3iW0E6LYndfbfOVB5F83EElBVRLSeNKUMEI2JCjx6sS41eRSP0zkCCQmAFB05Jk3mah1v87n3nzk&X-Amz-Signature=ab5a21bf99c9cbecf24cb9284b57a4ec8c84cee310f50188744ac3a622ceb4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOXCQHJ4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEmJxi6FFqOSnmBGUPObfc1ydTA%2BtXVRDP4qVGLBsiuwIgTRXCHPwRh%2FcIg3qhEUuKA54w3%2Fb2yIAHQeVxJrzuMIMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJx5FnQ8tupJ3pXFYSrcA%2FTo7nsIRE9Rpi1HMcS%2B0G4OmPimrBkjc0PSdwVvyJ3AHovtXp4OenrX8x%2BJ7YfPoSbHoQ3p0x5hHlMFYpj9ZJ8aT2brOUB9RIzXsCw7dNYiwKWXFvTA4x4x1hG3maz%2F630GwT3hhCzXPeW6xofL3DSMuci2VsWMrQ%2B2L0ySw4x8oKYSEoLftWXT6iuk6nw7u2rTaaOgp6SKqR6aoy4FygLtX9HHPUkF5WYvHOEsU8%2FFhNE6FMHJ6zz5u8eBfgpR6pXu15KYEbjxiHuFNuCSLpCn1r%2FBH33hlF8yTxcdwvXOxZsLCuhcyWAkEazBGKgP%2F%2F1ZNLv7TJoqhr%2B388ZA%2FAUezPixRLXPrmfXkNaR5Q0W1qBp%2FkLUtkL%2BOjCBtOHjuaYRV4DCliSP9EDtyO%2FKNMBpcdw8XVqrHkkKcl1mWqVfN%2FBctoUsceYD6HUgIytCqSg%2BITaBMuBWhJePg8XtX1yiC%2F1F1GgodtiqHjSebZ3WG5BopkQmwjZ7TW3Z2B%2BuPP9WluPz45z6AqxWQSF%2BxZEsLxZYAYGKZ9t9%2BOBFAJUEc%2FT6U9OohWax1Y35sulOxHQIdM7NAGlsR4pIxTzWgoaa9%2FXNOepTw7eV0VTR%2FRld1m0uhVMbG4s1CX4MMNK1xsMGOqUBRoRrp%2BdrtvU00jeMIJ4JpYoC9hU1e8uJZt2hgnBSR0mI%2FveC02b7Sqws4Q4%2BIiqmsSGIdM%2BKdYIqT4UtJFrFrg5wm08%2Fr1PBjp7LDBwrY6PwiqYAezyLB8fYB6E8NEfI3cOxFLuquiqrIrWC3iW0E6LYndfbfOVB5F83EElBVRLSeNKUMEI2JCjx6sS41eRSP0zkCCQmAFB05Jk3mah1v87n3nzk&X-Amz-Signature=9e8d0df5f1173a9ad0dbfa1a1b078f83537dd05737cc112c6c351a25be29ed55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
