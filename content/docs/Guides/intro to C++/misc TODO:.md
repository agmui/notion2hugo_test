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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TP7W3G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDafFmVgLwNmt3h%2B%2BoYuBAdZsvtVEJZVOScevJQnzSLQAIgAvBWrIi6gxPykONtWBh0sWWXlT5sx9IGrw5jB1Zw5Ioq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDM93lfpUyZvFNzNrVircA7dOuijQXOW5Uxjz1kSGC42mpiwaqwk5wUUPfd1iMui36zE%2BgcXg3B5ore%2BkbKvbqlXntVjxX%2FldaP%2FY1Yzq87Z4SoWN%2FV3EljF25YoqQzqFsbyM1%2B8HXqYG%2B7EsSk6NXOVFbtbEfXfz20WAU252ubmmHIZefsyX0SHNUfkniPwdnhn5t0LdcZs9D18fm7Vn3uGML8cmAmK1J3hdMP3NVgM1Xl9kZbDqaKBaEm91y8UVjuOuKS0HCBuGO8545VKzx5B9jT5g2VtplDKZ%2FK%2BRtOoT1owmphiPDoBv6pM1001JSMTlqSQ71UWeXyZkengTSYHYMGfGIbK%2FIP3Oev9Gc68p3SEtf0%2FcSro2Bu4J9TZLMr4FppiEPseRgrR3MFd0yVCr22u4SHPxR9Scf7g8Ljwxdz60aS2006gOb2aqwlhb6BHn5Yx%2B6BjMnm%2BV9D1bMxkhK6rYGkeG8hzvWk4l1qMP6FrMdflgsbBZavpgHjCMU1Q6ZFdm%2FzKAbx2WOPdWgWqNtP4PsYfGztu3tvATwBrmRE594Yct2AqZU2HcLWt8D9VGt3YW23JTW%2F8k%2F4cxdSflKjBmiW1gRS24MMXp1lT0wJRr94DipA9ey2cxbiguRX9PmROPWbW8Y%2FnVMPvpmL8GOqUBsrXUDxQJvI%2BUaYFhCV18jS4Gqlt95iiIjr9RE8ZPgXwEuONuDtN29hjpQZMI4OPZaRInKfmMHx7mKk%2BY%2FF38p52e9ArklOfSFPNVVW60CnIGTNwLhoxWtIzVKSlT7ipXWukOk%2BO9LeQ3TEgxWA1L0qVOz2dCt8Y0kZPUjjUvH6ewAawI0r8yvDJHXfdYufIfasbk9YH7rz0aUn7W%2F1IkXJMdq3EL&X-Amz-Signature=4dd89f05b9338b8ae75c5ba4999686aef8ca006d6efabb1ebefa63536d2de557&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TP7W3G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDafFmVgLwNmt3h%2B%2BoYuBAdZsvtVEJZVOScevJQnzSLQAIgAvBWrIi6gxPykONtWBh0sWWXlT5sx9IGrw5jB1Zw5Ioq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDM93lfpUyZvFNzNrVircA7dOuijQXOW5Uxjz1kSGC42mpiwaqwk5wUUPfd1iMui36zE%2BgcXg3B5ore%2BkbKvbqlXntVjxX%2FldaP%2FY1Yzq87Z4SoWN%2FV3EljF25YoqQzqFsbyM1%2B8HXqYG%2B7EsSk6NXOVFbtbEfXfz20WAU252ubmmHIZefsyX0SHNUfkniPwdnhn5t0LdcZs9D18fm7Vn3uGML8cmAmK1J3hdMP3NVgM1Xl9kZbDqaKBaEm91y8UVjuOuKS0HCBuGO8545VKzx5B9jT5g2VtplDKZ%2FK%2BRtOoT1owmphiPDoBv6pM1001JSMTlqSQ71UWeXyZkengTSYHYMGfGIbK%2FIP3Oev9Gc68p3SEtf0%2FcSro2Bu4J9TZLMr4FppiEPseRgrR3MFd0yVCr22u4SHPxR9Scf7g8Ljwxdz60aS2006gOb2aqwlhb6BHn5Yx%2B6BjMnm%2BV9D1bMxkhK6rYGkeG8hzvWk4l1qMP6FrMdflgsbBZavpgHjCMU1Q6ZFdm%2FzKAbx2WOPdWgWqNtP4PsYfGztu3tvATwBrmRE594Yct2AqZU2HcLWt8D9VGt3YW23JTW%2F8k%2F4cxdSflKjBmiW1gRS24MMXp1lT0wJRr94DipA9ey2cxbiguRX9PmROPWbW8Y%2FnVMPvpmL8GOqUBsrXUDxQJvI%2BUaYFhCV18jS4Gqlt95iiIjr9RE8ZPgXwEuONuDtN29hjpQZMI4OPZaRInKfmMHx7mKk%2BY%2FF38p52e9ArklOfSFPNVVW60CnIGTNwLhoxWtIzVKSlT7ipXWukOk%2BO9LeQ3TEgxWA1L0qVOz2dCt8Y0kZPUjjUvH6ewAawI0r8yvDJHXfdYufIfasbk9YH7rz0aUn7W%2F1IkXJMdq3EL&X-Amz-Signature=2cc1ea6455f062245229971820d9d2a54de84cac34996f6dbfc1ce99ca4f8679&X-Amz-SignedHeaders=host&x-id=GetObject)

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
