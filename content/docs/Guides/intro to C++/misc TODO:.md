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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOSKCL6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC41RL%2Fl0DpRDXlat857mVqVrimVPesrF8hueMtmQ88aQIhAPwdtZMoumYeCurPUJd8PbaYmAGGIwca7re%2B5CimlKJQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6SepZAXcYnyJgVKQq3AMhSmiaLo1YLtHFzAW7Xp%2BOsb30sAVn8%2F73hrcYd1UaLODHcVFR6DOY3PpDT9XViSPUzms8rC0LcbJILJS5o%2F9b5A27HMsYm2BTjUj1k6aNW%2FrljdrM3y7kRx5x4qbiErO7jGioiWGp2oyKOQVUHVIfdaqfO2BYHcA9PeBme8xtLDwcxpFzOqoLGfYrqvUSdGxBPSg7jRa%2BT%2B5ZxHDLib9JBohi6VSyxfr7ehuJmYxr%2Fio8gGMe9KbtIFsjuPfviMJnAaZx9baKxdtUbFq9gCML1HILozTIkgiCqpb0kNLf%2Bq6y4FX9fKZsQ2wBQ3%2F7KEyK2g6VIJRkgwA2Jbj13XYuRneqZU3qr%2BduLhow02JEcojfOo26TtOo3rLqH8q8FtqTwfkXa0c41YCFrImN13gCfkpDmA7f4RhQ8JXxYKXApY2n0RWd3kTIfwBp5wB0PXNSHnypB%2FtsPlGcfK4Y1VFHUkt2YbzDD8BnyP2jzRo2bgzgDHDZ6wkdnlvPvXFOeymUigIeqH%2FU2L4lqjORSwCDoa19oLN6qJmgbkMtrC85hsCWXS7wmsSYtlEL8Byc9EZXGSwLZzDqGuFwdB7nKG19p2Hmz7SCcK2eepi13gFsug5NYQOL0kWWQtezojCQianEBjqkAfQFUmJweqNXnsHn1Iy1gM3L9bm43HAPN0kErRkGWjwyiYLvclPKSq5RdHXXgUY9nrVPuZu9uYKbCzPuKPkzm2MLukUPXj3aymByKJ222%2FMuXtcopgc5heyb%2Fq0NVAtenbnPjPqx9uhtyac0ZyqYyjIGdWG4UY0EYRQ0XGnHmgvEjiCkhRIDQfdlfpfFvvj59KS7tXcIKey5a9j3edq2zhQCLRrv&X-Amz-Signature=2be74cace57430311ad1085f7aed0f74834c23970c550d6c5a991ba1154caed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOSKCL6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC41RL%2Fl0DpRDXlat857mVqVrimVPesrF8hueMtmQ88aQIhAPwdtZMoumYeCurPUJd8PbaYmAGGIwca7re%2B5CimlKJQKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6SepZAXcYnyJgVKQq3AMhSmiaLo1YLtHFzAW7Xp%2BOsb30sAVn8%2F73hrcYd1UaLODHcVFR6DOY3PpDT9XViSPUzms8rC0LcbJILJS5o%2F9b5A27HMsYm2BTjUj1k6aNW%2FrljdrM3y7kRx5x4qbiErO7jGioiWGp2oyKOQVUHVIfdaqfO2BYHcA9PeBme8xtLDwcxpFzOqoLGfYrqvUSdGxBPSg7jRa%2BT%2B5ZxHDLib9JBohi6VSyxfr7ehuJmYxr%2Fio8gGMe9KbtIFsjuPfviMJnAaZx9baKxdtUbFq9gCML1HILozTIkgiCqpb0kNLf%2Bq6y4FX9fKZsQ2wBQ3%2F7KEyK2g6VIJRkgwA2Jbj13XYuRneqZU3qr%2BduLhow02JEcojfOo26TtOo3rLqH8q8FtqTwfkXa0c41YCFrImN13gCfkpDmA7f4RhQ8JXxYKXApY2n0RWd3kTIfwBp5wB0PXNSHnypB%2FtsPlGcfK4Y1VFHUkt2YbzDD8BnyP2jzRo2bgzgDHDZ6wkdnlvPvXFOeymUigIeqH%2FU2L4lqjORSwCDoa19oLN6qJmgbkMtrC85hsCWXS7wmsSYtlEL8Byc9EZXGSwLZzDqGuFwdB7nKG19p2Hmz7SCcK2eepi13gFsug5NYQOL0kWWQtezojCQianEBjqkAfQFUmJweqNXnsHn1Iy1gM3L9bm43HAPN0kErRkGWjwyiYLvclPKSq5RdHXXgUY9nrVPuZu9uYKbCzPuKPkzm2MLukUPXj3aymByKJ222%2FMuXtcopgc5heyb%2Fq0NVAtenbnPjPqx9uhtyac0ZyqYyjIGdWG4UY0EYRQ0XGnHmgvEjiCkhRIDQfdlfpfFvvj59KS7tXcIKey5a9j3edq2zhQCLRrv&X-Amz-Signature=e9c604aedcdfd9ef2a38a4791e988a68234ea1a27042e111a1f6be67146f4414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
