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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3RNRY5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDuiTHLHHyyb0n5iOfyjrGGYCc7x4boOvMYXHMXO3rHtwIhAOh2tWcI%2B%2Ft8EnmvoKx4I%2F4fDiXkz1sYVFnBOFxQA0p6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWmGYuSAbDCR2%2BLvEq3ANioNvYVGXrA971vFxxfsQkVRKXPVyZsUIEshEzbvbZs3TQdM3cNNBRbJH%2FFJIB3XZwXEh4Hic5GGoaFijaZnTHGzYbjK%2BfXeH9%2FhIiUfEcRDbwntnIQ7D59n9oVGTKIizXbFbH12%2FSEu1sDKApNlQPkizEEpJzrqZD1yLoTV%2BiDz6IdC880UJNkvWU14Kz35PM82sEcvzMmYDkHrPjp%2BXkFW8RPRSPt98zKQgcE7dgMpPbIfvMT5f9jBslprnjEmLQS%2BBNvaa8gR7p4TVBVff4oH%2FH1nL4omXSfmjyBDF7dOPkjRHBxwLtCtboKOLxOXfemIBC%2Ff%2F3cohyGFMiAnR6p7VD5bBGare6IbGjG9i9ANgav%2F3KS74zn5cFaOvUu%2FUR3Itxy2yRyTErTEsuPwaP%2Fc6iJZq9QYG2jb3S6tWB2SBcba0CSZ5KrA6Tck7Bee19BTLDJuiSCKGhNbVaVk9CnARErF8ED%2FXP3yWQ0mDAA%2BZ4%2Bs64srOAsm04FLeMzsGTKsfWDkGmgg6j03dxmGo1nq1Bc8pmrm1dKU6YW3iImzH1ylszrjhL1G7uSxoU0PEoEiUBLJsxYBVdWt6RdgD8b3UvUGumdloc4QjnMo5jOqPyWx%2B9XZTI%2FReknzCBldu%2FBjqkAfw6uhSm%2FzjOvic%2B8tf5YKyD%2FG0uIN4ZCiIGDo%2Bg4ptrufEPEVbtadHlDdD03V5TW678urnh30JHh%2FXGd3pTdpsNViIPdLGfJmhND3IimWt2xXKqeuqvDYgARvAjUvvAT7O4k295O%2FjVoVJaA1tQ2CV658pLf%2FcNI4DMIg%2B14dXw9VDc2iJe4YA07lf96FwZVo7QLSD7q1przwbY3K2ws5eL0R8h&X-Amz-Signature=582275aac7ff7febec749ed105e0e6bbf71679f399617d397f7a3dc2415819c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH3RNRY5%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDuiTHLHHyyb0n5iOfyjrGGYCc7x4boOvMYXHMXO3rHtwIhAOh2tWcI%2B%2Ft8EnmvoKx4I%2F4fDiXkz1sYVFnBOFxQA0p6KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWmGYuSAbDCR2%2BLvEq3ANioNvYVGXrA971vFxxfsQkVRKXPVyZsUIEshEzbvbZs3TQdM3cNNBRbJH%2FFJIB3XZwXEh4Hic5GGoaFijaZnTHGzYbjK%2BfXeH9%2FhIiUfEcRDbwntnIQ7D59n9oVGTKIizXbFbH12%2FSEu1sDKApNlQPkizEEpJzrqZD1yLoTV%2BiDz6IdC880UJNkvWU14Kz35PM82sEcvzMmYDkHrPjp%2BXkFW8RPRSPt98zKQgcE7dgMpPbIfvMT5f9jBslprnjEmLQS%2BBNvaa8gR7p4TVBVff4oH%2FH1nL4omXSfmjyBDF7dOPkjRHBxwLtCtboKOLxOXfemIBC%2Ff%2F3cohyGFMiAnR6p7VD5bBGare6IbGjG9i9ANgav%2F3KS74zn5cFaOvUu%2FUR3Itxy2yRyTErTEsuPwaP%2Fc6iJZq9QYG2jb3S6tWB2SBcba0CSZ5KrA6Tck7Bee19BTLDJuiSCKGhNbVaVk9CnARErF8ED%2FXP3yWQ0mDAA%2BZ4%2Bs64srOAsm04FLeMzsGTKsfWDkGmgg6j03dxmGo1nq1Bc8pmrm1dKU6YW3iImzH1ylszrjhL1G7uSxoU0PEoEiUBLJsxYBVdWt6RdgD8b3UvUGumdloc4QjnMo5jOqPyWx%2B9XZTI%2FReknzCBldu%2FBjqkAfw6uhSm%2FzjOvic%2B8tf5YKyD%2FG0uIN4ZCiIGDo%2Bg4ptrufEPEVbtadHlDdD03V5TW678urnh30JHh%2FXGd3pTdpsNViIPdLGfJmhND3IimWt2xXKqeuqvDYgARvAjUvvAT7O4k295O%2FjVoVJaA1tQ2CV658pLf%2FcNI4DMIg%2B14dXw9VDc2iJe4YA07lf96FwZVo7QLSD7q1przwbY3K2ws5eL0R8h&X-Amz-Signature=ab456e76a9b9bdee42320bbd76f01291a2e9bbf17dff830432012d3deda222e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
