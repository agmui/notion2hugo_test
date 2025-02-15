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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573WYOW5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCA%2BZpifMPI9mg4M79LkfqAHItxVtHUTGvjZrOAhXBfMgIhAI2GAR7QC4jJhAs33iS7zwNxN3UjPbb%2BROWhLRFEWhFjKv8DCEoQABoMNjM3NDIzMTgzODA1Igw06x10ZSuLKBdNpT0q3ANYoAM%2FpJBI2D6C7uEAmv0MiKuQz81RblqwPKN8BjXNnlE3libMcM0ry6sUxb2Aj5zJcHV%2FRpl%2FYPcsyyyMYiSMEV1U8lBXxatNHvqybyEj8otd9Mo96D0t7JktWH5xX1rYZv%2BqlCTHPIYF%2BxRNnmbnNRcPbQZSEZXlHO%2FIr0XFbW2UlswXzcUFS3i%2FOug7YwDQimQmnAeOgCdBTFz3indumU2Y%2B7DQfpuIynVW0zTPKJdbt4OK2vutv1rYNTfWxzEcbK7yVwLXmR10x1VCUzA77o4YiusDvF8eZYy1oANltoq%2B0ClG4S9mNhruWoMwfzuHfjmD1qLyY7OkLMDIGOY543%2FOA1pBZfJRKM8M%2BJTsIpZzjAXS1U8nVBPMiyEO59klN2d9Z8VBPIpn3qlxuuYI9oW95bs%2F%2FzruujkARNURuE1nyhmORi3vcnLVApIoJyBez6QY6oueuzjAkb01CzxIfl3f%2B33iSkqjHw2wpOd4aUEnW2FRaG7LHyOngSkDRJCgvsBF49vQmnntYp7Dn6ngOPaI8R%2BXC646T8ZLDou4vAMKyA1Qn2U7b%2FEhH6dDSNKsZ8QxgfYqNt06RnM7N4VjoRUnMVmthiTLz%2BpwbWp4tu6DeJfqEPyH%2FwlWpDCRnMO9BjqkASxsgGAhS0neCkLoFYw%2Fl%2B18CfZUaOnvtWJMtWuhwChdgbso2eIwto9QEc4ABGFbAhVh8HX27LTfRhEdC4YwE8d273CUH%2By0Xr%2BYoYnXu2suwGvHqDibFHgkLbnIGWPE%2FFbOvwugLD8otfDpAVOiuyDjIUg%2B6R5lKMJDmS9MpwaPkniFwO6mH3yx%2F7Ek1RmtNirzarmQvMm9t9C%2FZpIsJ7x%2F%2F9ME&X-Amz-Signature=16cfaebed63adb62b60d4367ce7cd0b215e9fbeee956b53db52313ef75b754aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573WYOW5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCA%2BZpifMPI9mg4M79LkfqAHItxVtHUTGvjZrOAhXBfMgIhAI2GAR7QC4jJhAs33iS7zwNxN3UjPbb%2BROWhLRFEWhFjKv8DCEoQABoMNjM3NDIzMTgzODA1Igw06x10ZSuLKBdNpT0q3ANYoAM%2FpJBI2D6C7uEAmv0MiKuQz81RblqwPKN8BjXNnlE3libMcM0ry6sUxb2Aj5zJcHV%2FRpl%2FYPcsyyyMYiSMEV1U8lBXxatNHvqybyEj8otd9Mo96D0t7JktWH5xX1rYZv%2BqlCTHPIYF%2BxRNnmbnNRcPbQZSEZXlHO%2FIr0XFbW2UlswXzcUFS3i%2FOug7YwDQimQmnAeOgCdBTFz3indumU2Y%2B7DQfpuIynVW0zTPKJdbt4OK2vutv1rYNTfWxzEcbK7yVwLXmR10x1VCUzA77o4YiusDvF8eZYy1oANltoq%2B0ClG4S9mNhruWoMwfzuHfjmD1qLyY7OkLMDIGOY543%2FOA1pBZfJRKM8M%2BJTsIpZzjAXS1U8nVBPMiyEO59klN2d9Z8VBPIpn3qlxuuYI9oW95bs%2F%2FzruujkARNURuE1nyhmORi3vcnLVApIoJyBez6QY6oueuzjAkb01CzxIfl3f%2B33iSkqjHw2wpOd4aUEnW2FRaG7LHyOngSkDRJCgvsBF49vQmnntYp7Dn6ngOPaI8R%2BXC646T8ZLDou4vAMKyA1Qn2U7b%2FEhH6dDSNKsZ8QxgfYqNt06RnM7N4VjoRUnMVmthiTLz%2BpwbWp4tu6DeJfqEPyH%2FwlWpDCRnMO9BjqkASxsgGAhS0neCkLoFYw%2Fl%2B18CfZUaOnvtWJMtWuhwChdgbso2eIwto9QEc4ABGFbAhVh8HX27LTfRhEdC4YwE8d273CUH%2By0Xr%2BYoYnXu2suwGvHqDibFHgkLbnIGWPE%2FFbOvwugLD8otfDpAVOiuyDjIUg%2B6R5lKMJDmS9MpwaPkniFwO6mH3yx%2F7Ek1RmtNirzarmQvMm9t9C%2FZpIsJ7x%2F%2F9ME&X-Amz-Signature=1a05a2f7a0e2edf8d928ca786663622b4f66289c8094427da293db69a982c70f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
