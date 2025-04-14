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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWE3SPUI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy3MUe3%2FuGzTA6udCQwfXgQgTxRapUekZMFg%2FdcyfyhAIgK4ceaFmDaL6xvRltkVfn0IOHf2ADv6PZWkcE5vAMTksq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC2BL6pGZGjY9L4DtyrcA30gZFdY5%2Bnn8eUpEge5FvhYgtDD1pay6ITu7G0%2Fcut80N9YqXjmk2lNc09Gjnkue8CkpLYxKlDQvkpxapis%2FnRRXcuHkpws3vX1N3keRO1Mm2DlyvP8dZJ9f%2BKG80zZjyRuK0nfdP7YaUH87tiRQodm5P2exiU9%2FTfDwbgZzKGosKVu3rmP2ucCdEjoBX1JUDrGbsaRaC2tpCwdbjkpteOlqYKcZGiru%2Fw8HFJ0T5OHblKfPwidxfmvKqSo56x0X3UG7Q33scf76tDX%2Bl75ecbaIwYVK39d4FzhfaYGmz2uUMO4VGCpH%2FQWCFtl8V5jmPJAyKAd3QvnLFmq8S6sAl2shV2UzkLrCSpQX6GACmp8M8IJnaDSUeA8lYtk3c1IwntoCfWGEJCZ9eeITtu%2Fr%2BZlT1H6%2Fqa61LavJww6wM6xHP4HOVuxNGQf0kPGQw%2Fa%2B9aNUesmQDfm1RSLfuHMXs%2FGsT58nOYpPJxaktD4%2FSQUaznsQUR%2FJUhKgPnlWmGFfbRc47nnLtBom2LHC8t8XxOWhe8PlaRikNQ%2Ffrqs2ZkbXnN%2FSz0k7cq7i4Vazs2xfJTrTlHZXTzZb5W80L0o4euwhxnUdwry8DseW9q6p0T28EE%2Bp5OyH72wA15lMObi8r8GOqUBYSMZBJto7XaucMqYVH5OFJlEPZ0PtrqdHe1JikcIheuVxS85MRj58pDmr45uTZHI7ZQzWTo377mAQh8H5o7091WtdQg5gtU7L087Kc2fqEbZPOdY5jJ1PVtxtH4v93XKXfIqiMiG5lw%2B2%2BynJmvfk8lzC44ZhBRgHSu%2FQq8pNbn9dzkgX1364gcwWO8rM8oEB4PWffBepCF2GG%2FyM923zvfklLQO&X-Amz-Signature=4169d561f20a537fa135297b014a38fa9b047a4ea1d26d74adf72327cb4018b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWE3SPUI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy3MUe3%2FuGzTA6udCQwfXgQgTxRapUekZMFg%2FdcyfyhAIgK4ceaFmDaL6xvRltkVfn0IOHf2ADv6PZWkcE5vAMTksq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDC2BL6pGZGjY9L4DtyrcA30gZFdY5%2Bnn8eUpEge5FvhYgtDD1pay6ITu7G0%2Fcut80N9YqXjmk2lNc09Gjnkue8CkpLYxKlDQvkpxapis%2FnRRXcuHkpws3vX1N3keRO1Mm2DlyvP8dZJ9f%2BKG80zZjyRuK0nfdP7YaUH87tiRQodm5P2exiU9%2FTfDwbgZzKGosKVu3rmP2ucCdEjoBX1JUDrGbsaRaC2tpCwdbjkpteOlqYKcZGiru%2Fw8HFJ0T5OHblKfPwidxfmvKqSo56x0X3UG7Q33scf76tDX%2Bl75ecbaIwYVK39d4FzhfaYGmz2uUMO4VGCpH%2FQWCFtl8V5jmPJAyKAd3QvnLFmq8S6sAl2shV2UzkLrCSpQX6GACmp8M8IJnaDSUeA8lYtk3c1IwntoCfWGEJCZ9eeITtu%2Fr%2BZlT1H6%2Fqa61LavJww6wM6xHP4HOVuxNGQf0kPGQw%2Fa%2B9aNUesmQDfm1RSLfuHMXs%2FGsT58nOYpPJxaktD4%2FSQUaznsQUR%2FJUhKgPnlWmGFfbRc47nnLtBom2LHC8t8XxOWhe8PlaRikNQ%2Ffrqs2ZkbXnN%2FSz0k7cq7i4Vazs2xfJTrTlHZXTzZb5W80L0o4euwhxnUdwry8DseW9q6p0T28EE%2Bp5OyH72wA15lMObi8r8GOqUBYSMZBJto7XaucMqYVH5OFJlEPZ0PtrqdHe1JikcIheuVxS85MRj58pDmr45uTZHI7ZQzWTo377mAQh8H5o7091WtdQg5gtU7L087Kc2fqEbZPOdY5jJ1PVtxtH4v93XKXfIqiMiG5lw%2B2%2BynJmvfk8lzC44ZhBRgHSu%2FQq8pNbn9dzkgX1364gcwWO8rM8oEB4PWffBepCF2GG%2FyM923zvfklLQO&X-Amz-Signature=de385b2711e9813a03fa916403a51c1b56897207b6efdd7b5e70b855771d67cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
