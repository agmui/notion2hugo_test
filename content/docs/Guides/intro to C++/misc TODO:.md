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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKJSAG6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0hLP0XffgcgYaNkkK%2F46D7o92LPtYmleg%2FWNXOCl%2FegIhAPFvcO9%2B9Ag%2BexpGRDZb5nDiPvCUailSxHDKxHMjDZ%2BYKv8DCFYQABoMNjM3NDIzMTgzODA1IgzoUokwMd6Hiybee3kq3AOxGWnpyl6Cf1kbvVzWCe47ZRz2dA5bETToo%2BBneuNOVhdnIq3IC1blSfTGt3NgwegSJYh07iBo0y2NiQYRqsyHsHqsdsj%2FjIMG9W3sE8AaGMmXLImehwz4c18ZWw4C%2FbJpmSaA5dMOjEwgj%2FO0P%2BktFa9smnXHFaGGdhQuNczWjQOjERVVmYbHi%2FIgaw02LAP9M49blVvhskZGjO6GuA5peT44fHiNqZvmBZYjvWcODeLjf515S51ehoZPX48hr3hTlQncpFJSg6HCnBkCHXdF9e5Xh2t1eUSVOKG3HiUEGhDYBUHSPD4dDLt6E9lXMZurEQ%2BkODoS%2BnKdCiE4eACjzfvwLhzFBjJr70TuFZj6%2F9gXF32ntQ5m0Ch%2F9Qm4UapkkIAaGaigMeovtmicV2Hk358UbKgOwRPrYK7SfmtyzaMoMLqMSE3DyyVej5gvqOu9G5c1nzXeX6qylNnqqBoC2R3hTajACWr8iFV%2BEfJ%2FpNHqsgYz5b9IX4Xm4j%2F3qz00WZchyHD%2BAHOyIyjNoXYCLzhv3eCogl6lgYosddlU6wNxPppNCEmT3I8FWnlsowiotZoL9eAZKYzZasH5clsqKxt1zg9LBd1%2BY8LztNorRwZA4GwPmQ%2Fbqp1BSjCS7bbABjqkAVe8Aj%2BSSrbbaXVw7CzA6ikWfXMkbwT4HxWATMvhdP2YAUt6QEjm4kAEl4itcHR8NL1NbjmfrK79lBiVVHVNA553ASKSdOenx7XuJclue0pDNK5Gz1eZorULw4OZ5bd8RZP32U75NNqfPAhH%2BCIkW5lsndPdacM9NjXL8M7fD%2FI3HqKj6UcPySjn5sLbT7LK31Zo4gANswp2zru4sYjzF7DtjrLM&X-Amz-Signature=2b6e5674ad5b191f110a4834cfc1dc413daf24cf6d7780276f63f4df0bb25cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKJSAG6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0hLP0XffgcgYaNkkK%2F46D7o92LPtYmleg%2FWNXOCl%2FegIhAPFvcO9%2B9Ag%2BexpGRDZb5nDiPvCUailSxHDKxHMjDZ%2BYKv8DCFYQABoMNjM3NDIzMTgzODA1IgzoUokwMd6Hiybee3kq3AOxGWnpyl6Cf1kbvVzWCe47ZRz2dA5bETToo%2BBneuNOVhdnIq3IC1blSfTGt3NgwegSJYh07iBo0y2NiQYRqsyHsHqsdsj%2FjIMG9W3sE8AaGMmXLImehwz4c18ZWw4C%2FbJpmSaA5dMOjEwgj%2FO0P%2BktFa9smnXHFaGGdhQuNczWjQOjERVVmYbHi%2FIgaw02LAP9M49blVvhskZGjO6GuA5peT44fHiNqZvmBZYjvWcODeLjf515S51ehoZPX48hr3hTlQncpFJSg6HCnBkCHXdF9e5Xh2t1eUSVOKG3HiUEGhDYBUHSPD4dDLt6E9lXMZurEQ%2BkODoS%2BnKdCiE4eACjzfvwLhzFBjJr70TuFZj6%2F9gXF32ntQ5m0Ch%2F9Qm4UapkkIAaGaigMeovtmicV2Hk358UbKgOwRPrYK7SfmtyzaMoMLqMSE3DyyVej5gvqOu9G5c1nzXeX6qylNnqqBoC2R3hTajACWr8iFV%2BEfJ%2FpNHqsgYz5b9IX4Xm4j%2F3qz00WZchyHD%2BAHOyIyjNoXYCLzhv3eCogl6lgYosddlU6wNxPppNCEmT3I8FWnlsowiotZoL9eAZKYzZasH5clsqKxt1zg9LBd1%2BY8LztNorRwZA4GwPmQ%2Fbqp1BSjCS7bbABjqkAVe8Aj%2BSSrbbaXVw7CzA6ikWfXMkbwT4HxWATMvhdP2YAUt6QEjm4kAEl4itcHR8NL1NbjmfrK79lBiVVHVNA553ASKSdOenx7XuJclue0pDNK5Gz1eZorULw4OZ5bd8RZP32U75NNqfPAhH%2BCIkW5lsndPdacM9NjXL8M7fD%2FI3HqKj6UcPySjn5sLbT7LK31Zo4gANswp2zru4sYjzF7DtjrLM&X-Amz-Signature=2aed130176120105b3f5ce0cf66b8b25f7d729421b6ca13c02a518d58b339dad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
