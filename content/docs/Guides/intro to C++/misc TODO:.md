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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNLY2VO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjjNqZssFA7ruxwh0wBLnebRWlmjG%2F6yb1mmECeX%2FtVAiEAkXK4OaDN5Hs7%2FsjEMCAwc6Qt7P75i2y9lB9hHUCUfd8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2F1Xeqz2SN1Y9SSircA9tH7VmhexZqIF8bmOcc9VJX9KAccNIm%2B5cIZGX7H3lzEeOFKr9OpcDbFcewB9%2FibHakmN7NJDcpNK21lCqne8wykD2qRIPS2RXl8RCm7jtxC9IZfjaKRm5Gg%2BVMrEi8Y%2F6DYGIvrHVmV0g8SdIixyRHRXsWlZ6e5JSU9QTHqMHiUeCzblbi8k2SJ4xQEQTxjmDCzAlmTRbHipVJlHK2%2FAc2JZIRrEgbwelyvnmLmgiEVJ1ZX9iWuFl%2FJK22wJFx15Jy6nmgS4UN%2BbaGdCLlVfbRwWIwmSGpvn1suZQIY2jbCdIAnsKJEwdI%2BboQ7bhDzK0hz1wbhr8H9y%2FHDn8g%2FCLbDuw3nNC2WEnCkD8WoNHvkMGjiVOa7AlWbGFj1qpS3IpKlNeX2drIqLN0oKroNeetqTjze7JVYPnPd9AAiGu3BZNTwOhHDiG%2FFTucisECu4%2FRDGah1vbLO3%2FKQI4rS0qfRrq4Dbea8eIAWVLsXqYTo03L4yQL%2FeilIYWhtHlVS8jgOXgEI1gzwcAl59Sj%2BzwRFDr300lSXCtc3wmJ1HqVEDVC7ak9v7tFtKkoiOE9TbFKxKp%2F%2FNWYB3b9jU4twWy%2B0FP%2FE0LlQQz5WvLWQ7BxB8dRlfGxwDH3W3xFMOW%2BmsIGOqUBMMpyp%2FsCpq8rtV1jrtFA6jXq6J3a4IGoi6WCBC5vTLnC5kuHTeRTKyfuvZwvp2r053TVIxCpFGSGtVHFTGoBMdHjaNtFtMkVURGnZemI4A4is0UmxMUrtRP4O1sRYCsCmxGguI4gr6MxnXS20UCdNVv%2BOqYk5Vn%2FOBzgqWLs5j6fDj1XyaqUvOldubR0rLwATZH%2Bh2YF20kaY8F7bw7Uw94WkqoO&X-Amz-Signature=67396f02fd9eaa82497ef7ccb2bec6067f8c88c1df306a42d23889d75192dcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNLY2VO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjjNqZssFA7ruxwh0wBLnebRWlmjG%2F6yb1mmECeX%2FtVAiEAkXK4OaDN5Hs7%2FsjEMCAwc6Qt7P75i2y9lB9hHUCUfd8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ%2F1Xeqz2SN1Y9SSircA9tH7VmhexZqIF8bmOcc9VJX9KAccNIm%2B5cIZGX7H3lzEeOFKr9OpcDbFcewB9%2FibHakmN7NJDcpNK21lCqne8wykD2qRIPS2RXl8RCm7jtxC9IZfjaKRm5Gg%2BVMrEi8Y%2F6DYGIvrHVmV0g8SdIixyRHRXsWlZ6e5JSU9QTHqMHiUeCzblbi8k2SJ4xQEQTxjmDCzAlmTRbHipVJlHK2%2FAc2JZIRrEgbwelyvnmLmgiEVJ1ZX9iWuFl%2FJK22wJFx15Jy6nmgS4UN%2BbaGdCLlVfbRwWIwmSGpvn1suZQIY2jbCdIAnsKJEwdI%2BboQ7bhDzK0hz1wbhr8H9y%2FHDn8g%2FCLbDuw3nNC2WEnCkD8WoNHvkMGjiVOa7AlWbGFj1qpS3IpKlNeX2drIqLN0oKroNeetqTjze7JVYPnPd9AAiGu3BZNTwOhHDiG%2FFTucisECu4%2FRDGah1vbLO3%2FKQI4rS0qfRrq4Dbea8eIAWVLsXqYTo03L4yQL%2FeilIYWhtHlVS8jgOXgEI1gzwcAl59Sj%2BzwRFDr300lSXCtc3wmJ1HqVEDVC7ak9v7tFtKkoiOE9TbFKxKp%2F%2FNWYB3b9jU4twWy%2B0FP%2FE0LlQQz5WvLWQ7BxB8dRlfGxwDH3W3xFMOW%2BmsIGOqUBMMpyp%2FsCpq8rtV1jrtFA6jXq6J3a4IGoi6WCBC5vTLnC5kuHTeRTKyfuvZwvp2r053TVIxCpFGSGtVHFTGoBMdHjaNtFtMkVURGnZemI4A4is0UmxMUrtRP4O1sRYCsCmxGguI4gr6MxnXS20UCdNVv%2BOqYk5Vn%2FOBzgqWLs5j6fDj1XyaqUvOldubR0rLwATZH%2Bh2YF20kaY8F7bw7Uw94WkqoO&X-Amz-Signature=620ecdad10355769c7aa3b60afc10e9b1cad70375264238247a9865be9560658&X-Amz-SignedHeaders=host&x-id=GetObject)

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
