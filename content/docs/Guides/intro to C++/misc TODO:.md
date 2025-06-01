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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6IFZ25%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyyfaBX7IkPzQVjGbrQl%2BMZP5g7J6W%2B4cLhJBoPQfJCQIhAMfnk8o5%2BkyMMLfO5SemFPS%2FZYm%2F6IHsHdDdkke%2BPMRoKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFWmzVcgeq9QeRF84q3ANzPupjeCtahMg1LS%2Fyw5mxx4qcm8TUFvq5AxN3NHOdKgvpr48cKc5HgMrQ5DS0DjZaX2kGHPPQWfsElOfgljzxH0YlIXjYaGgxcgV8cu2mwSFNRDHP%2BFQY16jhvyPXseA0MmBYausNy6Y2Y1lAJxaGPmJbfNjcyb9jJGCLJug4EAxpWGTgS9HATWtdh3Bcpc0FD2CuZKhdrbQ3zQntrBS82WNQUFdgfhfuNsM7UbVGFYvFZmjOfsSD2BXgLvA2lK3sfD88%2FuVFQHcT2A%2Bt6w%2FOMHgr4wlYoVDP3%2BeR9RUogQhjAMdyUuzPmZcKipic28cGjmhALPjQdQlxVc4gA7NTQrkQYIx%2Bw0hjJw14x6Wtez8luctFfoYGTjAksEQ18CQ9jXAslMvJX%2BEpo7obxb93XpQT4EpB%2Br2ubX4aFfe1xQIz7A1S4H9f0hLrFqJcEVPryVQ8aR7VFf%2FQcjy%2BxfkHDrKY7Mc9na43XRU2mp78bW1Kotjy0d93oWPwgELUyYm4m4Vj87B7xa7KqW4T3%2Bih3fXGEd%2Fdm1rjlTLSMQk%2BpoRdN%2FVBBIBD7BUeh%2BxixNOmViCgi%2FyUz%2BmF%2BPpAwwM5N2FT1M5BNduZckTdZKnggD8CccCJe6inLwezrDCf5vDBBjqkATMYGwdLZ75O%2FQsAmiwuiOkVLOojJyvw5q0b0empl%2BsLPt6wZmugZhhG12eyu3JIVN8sYev%2F6EGHCLYfpBmfSbapAFtIZ6CWGL9PxAmNNI4E2sexmsaAyAgQAIzlXvskmKDpgU4h1MIj983F%2B4lXlpd7GyFFwIVfSyqFZOKaItGB8vGwvf2o84Iy%2FnQ%2F3LmikSzrk9aCh%2BseAXs5%2FMERxKQkaNbB&X-Amz-Signature=c86fc7c90f284ffea419fe5836c0cd2737d43fc732d845233a05842e4fdab4da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6IFZ25%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCyyfaBX7IkPzQVjGbrQl%2BMZP5g7J6W%2B4cLhJBoPQfJCQIhAMfnk8o5%2BkyMMLfO5SemFPS%2FZYm%2F6IHsHdDdkke%2BPMRoKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFWmzVcgeq9QeRF84q3ANzPupjeCtahMg1LS%2Fyw5mxx4qcm8TUFvq5AxN3NHOdKgvpr48cKc5HgMrQ5DS0DjZaX2kGHPPQWfsElOfgljzxH0YlIXjYaGgxcgV8cu2mwSFNRDHP%2BFQY16jhvyPXseA0MmBYausNy6Y2Y1lAJxaGPmJbfNjcyb9jJGCLJug4EAxpWGTgS9HATWtdh3Bcpc0FD2CuZKhdrbQ3zQntrBS82WNQUFdgfhfuNsM7UbVGFYvFZmjOfsSD2BXgLvA2lK3sfD88%2FuVFQHcT2A%2Bt6w%2FOMHgr4wlYoVDP3%2BeR9RUogQhjAMdyUuzPmZcKipic28cGjmhALPjQdQlxVc4gA7NTQrkQYIx%2Bw0hjJw14x6Wtez8luctFfoYGTjAksEQ18CQ9jXAslMvJX%2BEpo7obxb93XpQT4EpB%2Br2ubX4aFfe1xQIz7A1S4H9f0hLrFqJcEVPryVQ8aR7VFf%2FQcjy%2BxfkHDrKY7Mc9na43XRU2mp78bW1Kotjy0d93oWPwgELUyYm4m4Vj87B7xa7KqW4T3%2Bih3fXGEd%2Fdm1rjlTLSMQk%2BpoRdN%2FVBBIBD7BUeh%2BxixNOmViCgi%2FyUz%2BmF%2BPpAwwM5N2FT1M5BNduZckTdZKnggD8CccCJe6inLwezrDCf5vDBBjqkATMYGwdLZ75O%2FQsAmiwuiOkVLOojJyvw5q0b0empl%2BsLPt6wZmugZhhG12eyu3JIVN8sYev%2F6EGHCLYfpBmfSbapAFtIZ6CWGL9PxAmNNI4E2sexmsaAyAgQAIzlXvskmKDpgU4h1MIj983F%2B4lXlpd7GyFFwIVfSyqFZOKaItGB8vGwvf2o84Iy%2FnQ%2F3LmikSzrk9aCh%2BseAXs5%2FMERxKQkaNbB&X-Amz-Signature=9987b0f5241221a3babfd358d3f66d7a15a4ec6d13c68e45a70034d732162d18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
