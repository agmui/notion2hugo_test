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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENNKYT2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPOo5J9L9DhnXe6tlrgW1bDFYmCgkDRAdkLguOyzN8pAiEAj%2FClEfyz7cHbHg3R9XwgXrDBChCJeAkuaxgIoECJYSEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEgCPsPmwl7EsQS8PSrcA1wi4HVD2c1yknnZjdnLqBADYqynjL2M8uAUXmmu33Ud1U97Rx4YjfBxB%2FIFmNOixh3NSZlvnxH6Rr8ROAVPOz4gQNYiKTh%2BZ05FKWjX7XhxpdigWZ5LEv1PIU4ORIufrhtHpwE5GCJCyvW%2Bnrs%2FpIVQWf%2B5ncCcvbJZ8hBwkugFsqUfdEEjYDe%2BeGElRvCJPRPYt0zWU7i1WwLTL3Z%2B7n9G6YI6Z44Fmnz6qH4uwIaFsUK3PcA00OydaaNV6q0TwOWJ6QX%2FzyR7%2BJcbFIn6TTWs3vEKFToR8FqYD0OGDU%2F8g4ZeJ3eAAJttCiRvuk%2B9lEjxWcj08QdENJvQQgbD472QWf%2F2Y7g2ZB6L%2F2JO7dgDXUEY6qJ6EFFSnDEj9N6X8Qd4J8H0IfldyGN105Fx2lx0KzMx6%2B4MM%2F04HYPpIvIiDM7Ck5esfbUpu8%2FLjfrfw4MEW8%2F9YXAKjGF6skpjfd5wQZj8cM6jfJo45uWUlM%2FdeCPpYuefMwRMk9OqImv8toSNb563v2taO1Vg0JsI3QUI7%2BzpaS2r3wu9k8UmUp9%2Bq8ByXsXMnEtX2GN8NQXWADYzVSpZI0gxfLTYH%2BQ3wcIvP98ahvBy0xnQvQGarlzw4FxCYf18KzjF%2B38IMJuUvMAGOqUB83%2FBxmay9fHY3wgukMUQ2HShevyY5UvicJK1lNC00a5T5zqi63K46lKDvu1FcXJ5damLdt%2BvIj0x%2BF0Ohkx5MteOzXrK%2B5JkUiMDyD9ubzUoPnKBbLNPgIfIP3W6n1j1aoaRB9WgteHOUbsGeV7Bl5aB09ko2Q5j4pQOVRlPOX2Oi%2FTqmnl%2F8DIw3yS1PjmDPy%2FRI8LSq%2FM%2BP2RppXvn1vZPj30G&X-Amz-Signature=65c59db0639eba30d57fb11ab2fec087edf9e4dc19504f9f2c3298e3e07c0cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENNKYT2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPOo5J9L9DhnXe6tlrgW1bDFYmCgkDRAdkLguOyzN8pAiEAj%2FClEfyz7cHbHg3R9XwgXrDBChCJeAkuaxgIoECJYSEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEgCPsPmwl7EsQS8PSrcA1wi4HVD2c1yknnZjdnLqBADYqynjL2M8uAUXmmu33Ud1U97Rx4YjfBxB%2FIFmNOixh3NSZlvnxH6Rr8ROAVPOz4gQNYiKTh%2BZ05FKWjX7XhxpdigWZ5LEv1PIU4ORIufrhtHpwE5GCJCyvW%2Bnrs%2FpIVQWf%2B5ncCcvbJZ8hBwkugFsqUfdEEjYDe%2BeGElRvCJPRPYt0zWU7i1WwLTL3Z%2B7n9G6YI6Z44Fmnz6qH4uwIaFsUK3PcA00OydaaNV6q0TwOWJ6QX%2FzyR7%2BJcbFIn6TTWs3vEKFToR8FqYD0OGDU%2F8g4ZeJ3eAAJttCiRvuk%2B9lEjxWcj08QdENJvQQgbD472QWf%2F2Y7g2ZB6L%2F2JO7dgDXUEY6qJ6EFFSnDEj9N6X8Qd4J8H0IfldyGN105Fx2lx0KzMx6%2B4MM%2F04HYPpIvIiDM7Ck5esfbUpu8%2FLjfrfw4MEW8%2F9YXAKjGF6skpjfd5wQZj8cM6jfJo45uWUlM%2FdeCPpYuefMwRMk9OqImv8toSNb563v2taO1Vg0JsI3QUI7%2BzpaS2r3wu9k8UmUp9%2Bq8ByXsXMnEtX2GN8NQXWADYzVSpZI0gxfLTYH%2BQ3wcIvP98ahvBy0xnQvQGarlzw4FxCYf18KzjF%2B38IMJuUvMAGOqUB83%2FBxmay9fHY3wgukMUQ2HShevyY5UvicJK1lNC00a5T5zqi63K46lKDvu1FcXJ5damLdt%2BvIj0x%2BF0Ohkx5MteOzXrK%2B5JkUiMDyD9ubzUoPnKBbLNPgIfIP3W6n1j1aoaRB9WgteHOUbsGeV7Bl5aB09ko2Q5j4pQOVRlPOX2Oi%2FTqmnl%2F8DIw3yS1PjmDPy%2FRI8LSq%2FM%2BP2RppXvn1vZPj30G&X-Amz-Signature=5cc943874a53257e5d12f331b3ce8bfb432698a64c31a5867f96024ff2d78d66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
