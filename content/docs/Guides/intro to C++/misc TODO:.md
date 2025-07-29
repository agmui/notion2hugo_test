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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHDSTJW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDHgvFJnf41zqELtH7HPBhlKJzz%2BedknZn3r2SP9mb%2BHwIhALYecwqz7ixAQfU3%2B1s2M%2BQh3fUA0AZ9OIgPeA%2FWhZZUKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhVn0q4uW%2BvQ3kVjoq3AMOvpDQ%2BaehiuxvCUP7oywnXUVA%2BgArbzTnAgBNqv74494QGQzbgE2UoSdlRdglwOMVrUzxd8tgF2Kom1l0NINUzrYGXcYlDSwPJXzbTWOivkpBtcNj7S07k%2FEc0i5AxtlGaJmDIFz1EoZ3f%2BmmtQQIdCe%2Bxpqx3JQI57AyQgGr%2BZTZa2vxV3NW%2Bm4CsZpPM2elc1VNGr60ob%2BAe0O6QRFUYn6xmfBLRDkwu6A9OBFsYuAL0CsdGdJDulTYAfrPao2LIjkRuW9exp%2Fh3MkiJ0vaJW7x%2FZgbbBqgLfelxXurWDUILm2lqd4lVHLow%2F2xNSJW1IliWqKnqrnSn0%2FDZwHcxChD02YduBzuHOibbxlWjXvDwd542HDA%2FwA5ZOa%2B700RHIoopMy5Z4YCKq2EoGbwjGo9ztaKBmiaEwEcvX1x%2F8%2BXHG6TOZXQ8926nOby2ENb%2F%2BndXDU43KFF7tXuBMgj%2BmyO7peqB1y22GiEd15ONVocG%2BX9r5rEoJDjiRMRRFXHjQHIJAp6%2FDjuFwHK%2Be72S%2BO3zna0qPpJ1nYlM%2Bj5PDS5pJCQ0CJLpaViBRayQxcEbJ3rWh9IeWl%2Ff8iad6MAhcKtgENRhXRTzuBYt1aphKl7U2sNehfqY3FXHTCimKPEBjqkAYhusZyPsbfEbRW8nUrC5VuqMBcNF%2BtANFibQg4JOKp5%2Fc0KZsBne9lEF7OziZVYl64qY%2FeUcnsQjA8Wyrt2EV9dBOExlTrQRLIIb8rRNSUyuUgXzhRzzwdaaP1wOANMZhcGx1q%2BW365Npx9FN%2BYLZgSqX8lW2ulONiqwP1r8VV4cCCMvhaTKVfmncrEo9kiyHc2vXYLNguvSkSv7NgPM6VMQwYp&X-Amz-Signature=b72273db0d09e7b8b8d5ceeb1c81e01920b8fab634dac64a574eb9bedd6deda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHDSTJW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDHgvFJnf41zqELtH7HPBhlKJzz%2BedknZn3r2SP9mb%2BHwIhALYecwqz7ixAQfU3%2B1s2M%2BQh3fUA0AZ9OIgPeA%2FWhZZUKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhVn0q4uW%2BvQ3kVjoq3AMOvpDQ%2BaehiuxvCUP7oywnXUVA%2BgArbzTnAgBNqv74494QGQzbgE2UoSdlRdglwOMVrUzxd8tgF2Kom1l0NINUzrYGXcYlDSwPJXzbTWOivkpBtcNj7S07k%2FEc0i5AxtlGaJmDIFz1EoZ3f%2BmmtQQIdCe%2Bxpqx3JQI57AyQgGr%2BZTZa2vxV3NW%2Bm4CsZpPM2elc1VNGr60ob%2BAe0O6QRFUYn6xmfBLRDkwu6A9OBFsYuAL0CsdGdJDulTYAfrPao2LIjkRuW9exp%2Fh3MkiJ0vaJW7x%2FZgbbBqgLfelxXurWDUILm2lqd4lVHLow%2F2xNSJW1IliWqKnqrnSn0%2FDZwHcxChD02YduBzuHOibbxlWjXvDwd542HDA%2FwA5ZOa%2B700RHIoopMy5Z4YCKq2EoGbwjGo9ztaKBmiaEwEcvX1x%2F8%2BXHG6TOZXQ8926nOby2ENb%2F%2BndXDU43KFF7tXuBMgj%2BmyO7peqB1y22GiEd15ONVocG%2BX9r5rEoJDjiRMRRFXHjQHIJAp6%2FDjuFwHK%2Be72S%2BO3zna0qPpJ1nYlM%2Bj5PDS5pJCQ0CJLpaViBRayQxcEbJ3rWh9IeWl%2Ff8iad6MAhcKtgENRhXRTzuBYt1aphKl7U2sNehfqY3FXHTCimKPEBjqkAYhusZyPsbfEbRW8nUrC5VuqMBcNF%2BtANFibQg4JOKp5%2Fc0KZsBne9lEF7OziZVYl64qY%2FeUcnsQjA8Wyrt2EV9dBOExlTrQRLIIb8rRNSUyuUgXzhRzzwdaaP1wOANMZhcGx1q%2BW365Npx9FN%2BYLZgSqX8lW2ulONiqwP1r8VV4cCCMvhaTKVfmncrEo9kiyHc2vXYLNguvSkSv7NgPM6VMQwYp&X-Amz-Signature=6e4e34a0d3e277a1ee6f321b9a7f72943514699927896f494e2e9a5e70821f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
