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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MX7GMM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3agJbBpmIuC7eo%2FrqAiNXdJiFIemt5NtvjIyRj0bwDAiBU22RG9uQwIvLJs%2BIMQ4Jenf7jWYMTJsZ%2BybRqMyV%2BHir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMaMB5pknwKyAWG30gKtwDMcOi8z%2F0gQyGlmW1sI07gun9Ha%2BiA6DAhcau6wns0NLrR7w5RdjcChzz8QTGlOf%2BcPcB8SSL%2FABuBS1AShfCSy40OotDGD6hBoE9tngEsO8g8awwCnrg6zWr2Oa8DKf1Bogp3%2FSoMLgNf7OLxcXar%2FzE4aCilnZ34v7dnOVB%2Fqy%2FRF5tJUDYMAzSWRAM61aEh14p%2FLOqMvtboaaNJaGJ2seq1n7s4xCRRGwXpYjJ%2BfvbVezX6uPxU877ABfT6KIgblug5PnEHWQGT%2BpcY2BI0ti0YgmwldL3Ueh4YB%2BI6h%2F9qDKBAz4WtA16N7mxMpF3UXLelSFLKZDCyU0uxXU1SOVfJ3pUc02tCVFZ9W60y8Fj29U7zyqbmLcXTYZi2u1jKgTxUMvJsjHcADfEllSfRBiYRIuB1zc%2FDYmbJMuDkchGZPR55P5FfnFN1%2BeI06FPy0n3WFeQ2dA%2B0mUt4yzxWZHCY9yHXQg3JBVF85xJFlXulVJ%2B2nbuq2Jx6ViH5%2F7htYz%2BOfvzLR5e0VHu%2FBzwCQ4mCTkOlRipjWRBoW0%2B1cS7%2FLOs3ogumidZbGDRFGVcO3Dg6npDirXUcKb8yJAII5MvrGKdnxg0%2B%2BbMopUy5k%2FRgfut7LLOLE%2FG1Y8w1ILuwAY6pgFQb7Y3LfjndXjM8vHR0D0JNeACa9Nwczhhp0%2FRHZ4YccrseUHqZSv8JeaJJknwOxD18dcdpjIYliQzNIig9CMHEV5Ext9rr58A2UDdqMd74MnSTckJ3Ngd15Dj3IgO0Y%2BcSt2IPtubKGos0z%2FeVXIs0Nx6FIbIsJ1lN8znVe80xULA9wPCdYKUqWoxaqN650tCCG8gbrAabTiHcblDlDgakc%2FlQMBA&X-Amz-Signature=a38b1d0cdd8928fbd2f7567788119d17c7eb8db6a6e6ff9ed0fccd7380ed4e68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MX7GMM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3agJbBpmIuC7eo%2FrqAiNXdJiFIemt5NtvjIyRj0bwDAiBU22RG9uQwIvLJs%2BIMQ4Jenf7jWYMTJsZ%2BybRqMyV%2BHir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMaMB5pknwKyAWG30gKtwDMcOi8z%2F0gQyGlmW1sI07gun9Ha%2BiA6DAhcau6wns0NLrR7w5RdjcChzz8QTGlOf%2BcPcB8SSL%2FABuBS1AShfCSy40OotDGD6hBoE9tngEsO8g8awwCnrg6zWr2Oa8DKf1Bogp3%2FSoMLgNf7OLxcXar%2FzE4aCilnZ34v7dnOVB%2Fqy%2FRF5tJUDYMAzSWRAM61aEh14p%2FLOqMvtboaaNJaGJ2seq1n7s4xCRRGwXpYjJ%2BfvbVezX6uPxU877ABfT6KIgblug5PnEHWQGT%2BpcY2BI0ti0YgmwldL3Ueh4YB%2BI6h%2F9qDKBAz4WtA16N7mxMpF3UXLelSFLKZDCyU0uxXU1SOVfJ3pUc02tCVFZ9W60y8Fj29U7zyqbmLcXTYZi2u1jKgTxUMvJsjHcADfEllSfRBiYRIuB1zc%2FDYmbJMuDkchGZPR55P5FfnFN1%2BeI06FPy0n3WFeQ2dA%2B0mUt4yzxWZHCY9yHXQg3JBVF85xJFlXulVJ%2B2nbuq2Jx6ViH5%2F7htYz%2BOfvzLR5e0VHu%2FBzwCQ4mCTkOlRipjWRBoW0%2B1cS7%2FLOs3ogumidZbGDRFGVcO3Dg6npDirXUcKb8yJAII5MvrGKdnxg0%2B%2BbMopUy5k%2FRgfut7LLOLE%2FG1Y8w1ILuwAY6pgFQb7Y3LfjndXjM8vHR0D0JNeACa9Nwczhhp0%2FRHZ4YccrseUHqZSv8JeaJJknwOxD18dcdpjIYliQzNIig9CMHEV5Ext9rr58A2UDdqMd74MnSTckJ3Ngd15Dj3IgO0Y%2BcSt2IPtubKGos0z%2FeVXIs0Nx6FIbIsJ1lN8znVe80xULA9wPCdYKUqWoxaqN650tCCG8gbrAabTiHcblDlDgakc%2FlQMBA&X-Amz-Signature=dab141776f9522a0c6e97385c391896c6282164618f1f8d3e196c558b38f785e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
