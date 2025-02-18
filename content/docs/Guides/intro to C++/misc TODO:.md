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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYSFPUU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC%2BnxgM9cp4IpJA0hgK%2F4INbWzjRUxr23eyw6tqj1rU%2FAIgWdHBUX00afZ8qtxMgMp70yJ3XSBQwu08NZ1HORa%2Fbz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe7HrinDvi1neP5ZSrcA5mHQsnVdD6fJvT%2BGc6iqRjQ%2F7TQtamQRIJ5MPWzWQkhWfUtezj4fgPRt80Ld3J27nowqqNd3ARBOyd5MI%2F0B6zd0KBcogFf8KIRKBC%2B4sRLY%2FL%2B1iE57YFMWrK3vk5xWiqUnGUtto2%2F5KWqH2dv0ddtUu1zz7vB6b1ex3L%2FWroo4deUsYFt%2BIGoF%2B%2BioW6tbwSQeOfTxW0AQ%2BuLx3Z9Qyi8y1%2FPffRKoa%2FFrROm%2FYODb5PvvpGD0l%2FQ3xuY6x2D%2Fr8pFDtqDNNSHVfkZ7TzOrZlCLcKzBGFhD3agA8OJUK%2FYGcSmhv9z4nj64gkARm%2FB9XVzXAyVEAk1hhbYGR2%2BdVimchMgwn4r1Mi7aWZsesXNHBRfyU8lLirt%2BaTz8agypmc6Ry4YYAc9zSy74cMy1QI9Y4ivfxysRR95XIUHPAIKIle3tzhSyyQra1abQEFS%2BKBGDiK4CtmiRntMcPbyFsDmZsBaxUVkPpSvu23uJ61UMcMrBUCVI10gl0BTS%2Fklq%2FPrTjfyBM7wupUiGu9t3bTOvzkHUcOVDB8XOF6%2BM9FY42XzzfRlQyJ9uBWPinLMHjAaMcUrk%2FCCEXTvAlQ48xJiYDpjn29YUdfrVuGR0l7RdErRW0cygJc8yOXMIbK0b0GOqUBe%2BywTuXxeroVegRJU9L3v0CwtZ7MWRJ8SU2VhWNaf5dWaxRcFBZcl0dxKhHqSze3Wlgpss4%2FCEEhdywch5ad2ZththUHHhzDCrgVOkIVm6K%2Bp%2F0HGnWG8tkjHV0H%2FE%2BQWj%2F9UlbeXhqsxpAGU06OrJA2rVRSfy%2BT0FMI8Yk2PuxkI%2FKjS6mZMADnohMNn0ulzjtPpMIedV0lzr83YS0UsCICN1dO&X-Amz-Signature=b82a5f112e3cb6ed3c5d36e9575f25f3af59c84ea9082901ba2dc39bc231f77a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYSFPUU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC%2BnxgM9cp4IpJA0hgK%2F4INbWzjRUxr23eyw6tqj1rU%2FAIgWdHBUX00afZ8qtxMgMp70yJ3XSBQwu08NZ1HORa%2Fbz0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe7HrinDvi1neP5ZSrcA5mHQsnVdD6fJvT%2BGc6iqRjQ%2F7TQtamQRIJ5MPWzWQkhWfUtezj4fgPRt80Ld3J27nowqqNd3ARBOyd5MI%2F0B6zd0KBcogFf8KIRKBC%2B4sRLY%2FL%2B1iE57YFMWrK3vk5xWiqUnGUtto2%2F5KWqH2dv0ddtUu1zz7vB6b1ex3L%2FWroo4deUsYFt%2BIGoF%2B%2BioW6tbwSQeOfTxW0AQ%2BuLx3Z9Qyi8y1%2FPffRKoa%2FFrROm%2FYODb5PvvpGD0l%2FQ3xuY6x2D%2Fr8pFDtqDNNSHVfkZ7TzOrZlCLcKzBGFhD3agA8OJUK%2FYGcSmhv9z4nj64gkARm%2FB9XVzXAyVEAk1hhbYGR2%2BdVimchMgwn4r1Mi7aWZsesXNHBRfyU8lLirt%2BaTz8agypmc6Ry4YYAc9zSy74cMy1QI9Y4ivfxysRR95XIUHPAIKIle3tzhSyyQra1abQEFS%2BKBGDiK4CtmiRntMcPbyFsDmZsBaxUVkPpSvu23uJ61UMcMrBUCVI10gl0BTS%2Fklq%2FPrTjfyBM7wupUiGu9t3bTOvzkHUcOVDB8XOF6%2BM9FY42XzzfRlQyJ9uBWPinLMHjAaMcUrk%2FCCEXTvAlQ48xJiYDpjn29YUdfrVuGR0l7RdErRW0cygJc8yOXMIbK0b0GOqUBe%2BywTuXxeroVegRJU9L3v0CwtZ7MWRJ8SU2VhWNaf5dWaxRcFBZcl0dxKhHqSze3Wlgpss4%2FCEEhdywch5ad2ZththUHHhzDCrgVOkIVm6K%2Bp%2F0HGnWG8tkjHV0H%2FE%2BQWj%2F9UlbeXhqsxpAGU06OrJA2rVRSfy%2BT0FMI8Yk2PuxkI%2FKjS6mZMADnohMNn0ulzjtPpMIedV0lzr83YS0UsCICN1dO&X-Amz-Signature=1cc2641bf6c447137c14c122e880d25bf32d42fbca380e01d6f62b58cb1af49a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
