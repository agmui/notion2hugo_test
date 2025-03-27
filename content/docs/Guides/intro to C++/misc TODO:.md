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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSR4WUX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjHTqgYMU57z2HS0uQBViOVWhcE6IIta9Lxpo3UxNNQIgLSajXbCpoPR8vSC0MF%2Fbd0dtLnsxoSy76hrL0GfhLbUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJwNbnqZ%2BD8qWOOfzCrcA%2FiZ1IHEYRIEoWvdUwvxJ%2BPMU6leFN2zd3tpOjtSDsCcxhO1lCtKEOIa067BehNgFnYG8HGGCxCjK9aVJ5veaj7zJnNUrXUgMeiEMU7KMFoQb1qKpaD%2BaWaafJHCWuUS0RR7tLoxvFgxrLpSy3okBTeL0Grs%2FDGSdOztCGnx%2BWh1QEYaJpqByoIHc0GIz9UQX3KJA3rjkKHTuTFyDAlPqjpKqv8AKaKpVKosOLKXlRGpuyKc3t6l8jRhD7kviypbcE8S%2Bq7%2FxofDkwhLwu8ms8C%2BoaNpUcr2wEhl3Q4MJcbC%2BtHLCrHJiRktEOpgSF0gwgx8HEIGSjZKnA9dcZ3pOXtZfSokoQndhEFGKaU0SpW0m%2B0b3QvcuT0KoC9j4v0KlpACqSU68mDNMCxnyROvieGFDus7Rs6VwUKKJNYp0hfUaVm3vf0VLLutiNtPInpjYSbEL0YQ7BSSV%2FZgoPqf6KtoWGzI6KFCg%2FpvQVLEqcTW3tBCsX8sFYVi%2BorIEgqPPptIXlLWVt8ytkOXlQnBx9oBkXnvUE4V0KZgewRY7mkg%2FOMXGbuBhJ58mkCTrZqF4L0%2BqV7NZFrM6l1mVwdtXMyWc7eqLZpTFqwc0nU%2BGEW4W%2F0fqiqUMO40iA58MOyilr8GOqUBVUDuDinLbfwQVWaAgaE9lzfUKq31DQD%2F4SMtYYnKwHzLMgGqEqJxgyKvlnn%2BU%2BRo8sJ%2Bbf7wm%2Bd71N0WK3sWcGDf%2BOMTBvdVig6y%2FtQ3fbAIHBCvmVnXeQNt1QEEhMvPqWeadETvImjuqMBlJa82sE7Ox4PzojeJUrzdJ9X8eyEBx38udbjVTq%2F%2BZ1zAHvoSo79dEckT3csN9Pxm0HFIGd3XIdLz&X-Amz-Signature=e8a3118d1c5b5ba453068d2dabaf9c35556cd6d12cfa7af706e44aae6f8efd4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSR4WUX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmjHTqgYMU57z2HS0uQBViOVWhcE6IIta9Lxpo3UxNNQIgLSajXbCpoPR8vSC0MF%2Fbd0dtLnsxoSy76hrL0GfhLbUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJwNbnqZ%2BD8qWOOfzCrcA%2FiZ1IHEYRIEoWvdUwvxJ%2BPMU6leFN2zd3tpOjtSDsCcxhO1lCtKEOIa067BehNgFnYG8HGGCxCjK9aVJ5veaj7zJnNUrXUgMeiEMU7KMFoQb1qKpaD%2BaWaafJHCWuUS0RR7tLoxvFgxrLpSy3okBTeL0Grs%2FDGSdOztCGnx%2BWh1QEYaJpqByoIHc0GIz9UQX3KJA3rjkKHTuTFyDAlPqjpKqv8AKaKpVKosOLKXlRGpuyKc3t6l8jRhD7kviypbcE8S%2Bq7%2FxofDkwhLwu8ms8C%2BoaNpUcr2wEhl3Q4MJcbC%2BtHLCrHJiRktEOpgSF0gwgx8HEIGSjZKnA9dcZ3pOXtZfSokoQndhEFGKaU0SpW0m%2B0b3QvcuT0KoC9j4v0KlpACqSU68mDNMCxnyROvieGFDus7Rs6VwUKKJNYp0hfUaVm3vf0VLLutiNtPInpjYSbEL0YQ7BSSV%2FZgoPqf6KtoWGzI6KFCg%2FpvQVLEqcTW3tBCsX8sFYVi%2BorIEgqPPptIXlLWVt8ytkOXlQnBx9oBkXnvUE4V0KZgewRY7mkg%2FOMXGbuBhJ58mkCTrZqF4L0%2BqV7NZFrM6l1mVwdtXMyWc7eqLZpTFqwc0nU%2BGEW4W%2F0fqiqUMO40iA58MOyilr8GOqUBVUDuDinLbfwQVWaAgaE9lzfUKq31DQD%2F4SMtYYnKwHzLMgGqEqJxgyKvlnn%2BU%2BRo8sJ%2Bbf7wm%2Bd71N0WK3sWcGDf%2BOMTBvdVig6y%2FtQ3fbAIHBCvmVnXeQNt1QEEhMvPqWeadETvImjuqMBlJa82sE7Ox4PzojeJUrzdJ9X8eyEBx38udbjVTq%2F%2BZ1zAHvoSo79dEckT3csN9Pxm0HFIGd3XIdLz&X-Amz-Signature=25a3827d3e1a726031eb66eb967abd7625acd8c3b8eecf2b538c72052028691c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
