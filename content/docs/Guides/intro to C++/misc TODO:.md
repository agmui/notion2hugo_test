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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6FJCLK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCyAV4BbsOsoootLNQFErPNb%2FRz6zK1SOqGzfNXt733JQIgLpZOOk2aRjIR1wnZNpq2WAouFNbcmGDL0r2puBfd5PoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyu8QwXcQlWFsCGCCrcA%2FDrM1KcHsjrBMvfKJRmxhSFpwibFi3TOY9x%2FBOVSCRt7%2BWxgGFR%2F72XAU65W%2F%2F9StRrN15WqIgVGBXhjpdq622tYCqSICAr5z9M1WK6aKrNhlSxuuNl5OK1l0LoF8URWOCDAkaethme%2Becn814pdAP6ruc1ZcEmpO5%2BDPz8K%2FpxUmT5aE2vnZPdPPNpVH7%2FKE2eC%2FGFfTKfeoLVZ8HlOjuiSgj6RJspvgdd8UlvXsl8OxLEXxT8ap4YGa6NzXsfH%2Bungih%2Bt1IDsOfJuFVI9RO32R1mZ2FqBzTjz0ZcU%2FqqmuufAjq9al%2FT6A5Si%2FrF%2BvmYiZRackadx%2FM4W2B%2BXr62KheZFjwQCXsgwBIDL7x7CdjUaKeRrCjbB%2BYtaRQuzQ2wlS%2BxZYUBBuOZwl0pMJ5N1XCE8ScABAvWQx2%2F3Lik8F7JVWgeIV1HMsXXvpEXaZ6pJGKrLeeqYrbJuvbPxL2ZrP41XhAmed52NrpjhiApN8FYLgz8FP7B38Ns%2BdRZe4GQqf%2Fj77n3XMFaFYx%2FNLY55Jw9yU%2Bp%2FCFJCt%2BaeTgnYUTzXWAeCrcG92lCwoZbcuxCWcI8wfZsmGg2chijbVWU75AGopXGYexCs8m91wcUS%2Bj0bPO5nl7GmFOjMMXDgMEGOqUBmtqr90PkrpH3SfJzEDqJ%2Bc%2Bi8C6D%2BNyBp5aIIc9cEeXpefnBlVLiGAXUIbvTxJx8KenjhbbFIJoFYSOIrdxChmGBz%2F56siIiTZq2lCIbJu%2B48spJgSeariPi%2FkqkIzvIZmmzRZE8quyGL5QXKHP4FXuQJUtFpphunZ52MSUZxHQ%2FhMEb1U22iC%2BpJHZ0GsRHq4e2gmrgcGJYXYxN2cnGEKZBgFBF&X-Amz-Signature=c18f9cbcab2f1771cd5204a93beff94f3538014ecb168472524052a1ac7e9829&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6FJCLK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCyAV4BbsOsoootLNQFErPNb%2FRz6zK1SOqGzfNXt733JQIgLpZOOk2aRjIR1wnZNpq2WAouFNbcmGDL0r2puBfd5PoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyu8QwXcQlWFsCGCCrcA%2FDrM1KcHsjrBMvfKJRmxhSFpwibFi3TOY9x%2FBOVSCRt7%2BWxgGFR%2F72XAU65W%2F%2F9StRrN15WqIgVGBXhjpdq622tYCqSICAr5z9M1WK6aKrNhlSxuuNl5OK1l0LoF8URWOCDAkaethme%2Becn814pdAP6ruc1ZcEmpO5%2BDPz8K%2FpxUmT5aE2vnZPdPPNpVH7%2FKE2eC%2FGFfTKfeoLVZ8HlOjuiSgj6RJspvgdd8UlvXsl8OxLEXxT8ap4YGa6NzXsfH%2Bungih%2Bt1IDsOfJuFVI9RO32R1mZ2FqBzTjz0ZcU%2FqqmuufAjq9al%2FT6A5Si%2FrF%2BvmYiZRackadx%2FM4W2B%2BXr62KheZFjwQCXsgwBIDL7x7CdjUaKeRrCjbB%2BYtaRQuzQ2wlS%2BxZYUBBuOZwl0pMJ5N1XCE8ScABAvWQx2%2F3Lik8F7JVWgeIV1HMsXXvpEXaZ6pJGKrLeeqYrbJuvbPxL2ZrP41XhAmed52NrpjhiApN8FYLgz8FP7B38Ns%2BdRZe4GQqf%2Fj77n3XMFaFYx%2FNLY55Jw9yU%2Bp%2FCFJCt%2BaeTgnYUTzXWAeCrcG92lCwoZbcuxCWcI8wfZsmGg2chijbVWU75AGopXGYexCs8m91wcUS%2Bj0bPO5nl7GmFOjMMXDgMEGOqUBmtqr90PkrpH3SfJzEDqJ%2Bc%2Bi8C6D%2BNyBp5aIIc9cEeXpefnBlVLiGAXUIbvTxJx8KenjhbbFIJoFYSOIrdxChmGBz%2F56siIiTZq2lCIbJu%2B48spJgSeariPi%2FkqkIzvIZmmzRZE8quyGL5QXKHP4FXuQJUtFpphunZ52MSUZxHQ%2FhMEb1U22iC%2BpJHZ0GsRHq4e2gmrgcGJYXYxN2cnGEKZBgFBF&X-Amz-Signature=85f49c4e6ce2c4cdb01ba3376b42f32b7a11cca133a1b99521a99dca50a6a89d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
