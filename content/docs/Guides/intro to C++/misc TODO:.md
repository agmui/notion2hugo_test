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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGHWVQS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpBDKzHLhDCPWpBf9jVETMTuDsFf5RE%2F%2FwB65WBxu%2BkAiEA6dLsgrIW16HbID%2B1vnZ0zjl55Y550q27VBs8HcaNFZUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGtxKS%2Bt3dn6ObNRyrcA%2BUhf5IEbbIXnTPMq9G4nUb3YajGgIP1NY0o1%2BtTnXw61NNJF1ClCqEE%2FnQBYxWwEbCCZIcI8lDiEFtlnYVTvzYkdlNXpZR7ydL37jXXSjBxKwK8t1W0BFd0LwMWWN6BZX5oH%2BG9ivIuupJbljP8K2UVDLrnAEUna7zMUq1LqxgpJhnBHaowKPn84PYPTFS%2Bf3FA97wRV3QVU0lFNTNTEz7w7hJRdvZoFargHGn92cJYdJk78kZl68T8Zef0e47izCqE8cT3X2jaSDgyremDv%2B3yboOOTdG7329S36%2FUj9%2BD7%2Be6I5I5nDeewEpWXEin9iYBmS9VIxO77k4A4476d7UEPs8Q3ZzeGOzys8ZaRmhagcllZRScLduThFvGEfM3p0Fgk5Xyh2GuBj28QfWYvlZ%2F5NgJGurp5TYpNQFrZ3IOOFa15mEgzyUpfb%2F1H9bZ2cK4P%2Ft5EFy7acp3miRoxoMNABaiDC%2B3xnuhS%2BsJA0w%2Bl7r7K3roDVR5HaXXrPO%2BvGZQ06moeyOQpoaD0ILW8cBJMKTkFCqD4zVeqB4Gg4HyZv7p8yu2KD7VK7mh%2BR8oyxELG3h6Rg0pLdYoyDGCzD1%2FO57gpKynkcpCjAo7lN7GAi%2B380RKnb7wynYOMOK%2Fmr4GOqUBxTh6gY42qJjaVdtB%2F%2Bue3UKH7lh%2Fl6YQ8jvDe4d24DD5hoVt2lw%2BExuO%2FVz6EN5%2FMYYBXbER5E%2FoJB%2B9x2%2Bl%2B9cmiZXdQsUtdiTvP9Zo8goWJMhMKGI%2BVf%2F0Z3CJKJ4Kgdco%2BJKAfDIsRYK23hAZ%2B%2BFO4Tt5bhJJcxK%2BKdGPzMbgvrbufq7Z6Y8VAF6XtwGLB6I3iA%2FJhCxh8T1KlQNuz80r4sYO&X-Amz-Signature=a04981321aadbadb06689518f4ced09015004d812ad1d9e7f322d04c2697ae7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGHWVQS%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpBDKzHLhDCPWpBf9jVETMTuDsFf5RE%2F%2FwB65WBxu%2BkAiEA6dLsgrIW16HbID%2B1vnZ0zjl55Y550q27VBs8HcaNFZUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGtxKS%2Bt3dn6ObNRyrcA%2BUhf5IEbbIXnTPMq9G4nUb3YajGgIP1NY0o1%2BtTnXw61NNJF1ClCqEE%2FnQBYxWwEbCCZIcI8lDiEFtlnYVTvzYkdlNXpZR7ydL37jXXSjBxKwK8t1W0BFd0LwMWWN6BZX5oH%2BG9ivIuupJbljP8K2UVDLrnAEUna7zMUq1LqxgpJhnBHaowKPn84PYPTFS%2Bf3FA97wRV3QVU0lFNTNTEz7w7hJRdvZoFargHGn92cJYdJk78kZl68T8Zef0e47izCqE8cT3X2jaSDgyremDv%2B3yboOOTdG7329S36%2FUj9%2BD7%2Be6I5I5nDeewEpWXEin9iYBmS9VIxO77k4A4476d7UEPs8Q3ZzeGOzys8ZaRmhagcllZRScLduThFvGEfM3p0Fgk5Xyh2GuBj28QfWYvlZ%2F5NgJGurp5TYpNQFrZ3IOOFa15mEgzyUpfb%2F1H9bZ2cK4P%2Ft5EFy7acp3miRoxoMNABaiDC%2B3xnuhS%2BsJA0w%2Bl7r7K3roDVR5HaXXrPO%2BvGZQ06moeyOQpoaD0ILW8cBJMKTkFCqD4zVeqB4Gg4HyZv7p8yu2KD7VK7mh%2BR8oyxELG3h6Rg0pLdYoyDGCzD1%2FO57gpKynkcpCjAo7lN7GAi%2B380RKnb7wynYOMOK%2Fmr4GOqUBxTh6gY42qJjaVdtB%2F%2Bue3UKH7lh%2Fl6YQ8jvDe4d24DD5hoVt2lw%2BExuO%2FVz6EN5%2FMYYBXbER5E%2FoJB%2B9x2%2Bl%2B9cmiZXdQsUtdiTvP9Zo8goWJMhMKGI%2BVf%2F0Z3CJKJ4Kgdco%2BJKAfDIsRYK23hAZ%2B%2BFO4Tt5bhJJcxK%2BKdGPzMbgvrbufq7Z6Y8VAF6XtwGLB6I3iA%2FJhCxh8T1KlQNuz80r4sYO&X-Amz-Signature=9d8deb0102648cdb047047c662a2d28c8e0246c7f64f146cd0d3471e6c294dee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
