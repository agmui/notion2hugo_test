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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADRRUEJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHTFhXmjzNRhqUnZE7VwAtYr2E2Ej3HDwqxhCfqMrQQxAiEAjzSPQHSae1NkRwMHMlB%2FC5S4Q0GTVJvQnSvo7LbSf%2FMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAilfrTh7AxegbhFPCrcA5jRbiIPOJToyr6%2FRLMOKUk4Y1QrETT%2FAXqY9MeAjbJD8I4ThoQF6cEzFFCq6Elk1uzgk4BJGw62%2FMITGimKaUfCMN6MyYjZaWamw%2BA3MDD3wJVfhftqGHxeo94yOwqlvg7p4Cg8KdtvFTkHM8wKgLkCzX8OzRb79GdBCRwvxkAfnGOhUGlId7UwSiHbvCPa3a2iO8H2QMVl7wZgGF3hNEY1%2FSWGcZXqBy34BOfTbJqD0%2Bcl5BvouMmYvWgKqsUq6rFal0OoDwQqCGUv9OfGrlTeRO%2F2joul6dxud0OK5xMibF%2B328ID%2BuW7TOcQ1UTOnn0fZ3Wy2gxFatYCt5nmmqYiLMu%2BGclMKc22p3NzoVkLDFykPeywfdSRPxiPUqz4%2BUIZKjrwmLqFShbSRqYv3YUDtp1HRffcq9KBwzCRqEWO05%2BgPqj7ivUHeSq0efpwpUW8Mys8%2BrRRVsUPxHDKxZeBmXSEkEBagWk%2B%2BIrFNBAQfjpw%2Bm330Ic9gDWpWXnVjP08oKBs%2B7RO6%2B69PjnqzMMJ2DRmOjlQzOzG6PF67NcoOORzxCT40h3SRnZCnaxafeXYJ48K827o7WaYmA0ug1MgGsyrsTBinPqnA3PN%2B9h1x7mNG3H9URQd2%2BNdMMfjv8IGOqUBU5RDd9TvcSPeIs4Hmeyzbh2eVsCtp2jpQowAFDxoXpXXifCk0MsVXu064YQGPq%2F7ceA6e7RuvqAsPOZeZY7COdKYYjgR%2FkFsoBSTWLPVT0jqui0OAZMdU%2BpDcetqF6z217cR2OZG3jImsO0iKzObe2cYsET8bwFaM38T5NHMop2dNa8EaHX98ePnPq2M8EBoeETqwIjmFVj%2FSLBKVNfc4hhA8QuG&X-Amz-Signature=1bd04c179c9989ae9bf2c6089b7c72b7bdbccf04628a647c5ac504a8aab1ef50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADRRUEJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHTFhXmjzNRhqUnZE7VwAtYr2E2Ej3HDwqxhCfqMrQQxAiEAjzSPQHSae1NkRwMHMlB%2FC5S4Q0GTVJvQnSvo7LbSf%2FMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAilfrTh7AxegbhFPCrcA5jRbiIPOJToyr6%2FRLMOKUk4Y1QrETT%2FAXqY9MeAjbJD8I4ThoQF6cEzFFCq6Elk1uzgk4BJGw62%2FMITGimKaUfCMN6MyYjZaWamw%2BA3MDD3wJVfhftqGHxeo94yOwqlvg7p4Cg8KdtvFTkHM8wKgLkCzX8OzRb79GdBCRwvxkAfnGOhUGlId7UwSiHbvCPa3a2iO8H2QMVl7wZgGF3hNEY1%2FSWGcZXqBy34BOfTbJqD0%2Bcl5BvouMmYvWgKqsUq6rFal0OoDwQqCGUv9OfGrlTeRO%2F2joul6dxud0OK5xMibF%2B328ID%2BuW7TOcQ1UTOnn0fZ3Wy2gxFatYCt5nmmqYiLMu%2BGclMKc22p3NzoVkLDFykPeywfdSRPxiPUqz4%2BUIZKjrwmLqFShbSRqYv3YUDtp1HRffcq9KBwzCRqEWO05%2BgPqj7ivUHeSq0efpwpUW8Mys8%2BrRRVsUPxHDKxZeBmXSEkEBagWk%2B%2BIrFNBAQfjpw%2Bm330Ic9gDWpWXnVjP08oKBs%2B7RO6%2B69PjnqzMMJ2DRmOjlQzOzG6PF67NcoOORzxCT40h3SRnZCnaxafeXYJ48K827o7WaYmA0ug1MgGsyrsTBinPqnA3PN%2B9h1x7mNG3H9URQd2%2BNdMMfjv8IGOqUBU5RDd9TvcSPeIs4Hmeyzbh2eVsCtp2jpQowAFDxoXpXXifCk0MsVXu064YQGPq%2F7ceA6e7RuvqAsPOZeZY7COdKYYjgR%2FkFsoBSTWLPVT0jqui0OAZMdU%2BpDcetqF6z217cR2OZG3jImsO0iKzObe2cYsET8bwFaM38T5NHMop2dNa8EaHX98ePnPq2M8EBoeETqwIjmFVj%2FSLBKVNfc4hhA8QuG&X-Amz-Signature=3d1bbc991d33d129f2a98875bc063971818a7a6cb9c928040fa7668b8b6e5271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
