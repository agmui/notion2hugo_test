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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASDYWPL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAdjT0ZgQIMhIYPUmMwBKqAMVE0QOySXbjV21f0XuWVlAiBETAwsRXN18JB9XlVeSMlB3rFYS%2FsIDOoEknyS2%2BNKqyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMVihK%2FOp%2FwnJ47BwPKtwDqLNwknooyJQmETvlsvMbjexu34oQ7VGLwHPvGN%2F9dGqNDS2ZxXRZluBuN2Eg8qe9i3J6Vc0%2FtkxQc9rIcWpVfTZQ5dpP9HOMVI1nvsW%2BzxjGmD08aB5I8FAZDEjV4jSQ7fPxqyTxE0s6UenilbWKtpi9qWZw0MOyEYqE3Z1ZURJq8TlspLbWJ%2FnvvPx0b4KGRv%2BxX2r9AlOesw6Jn7cYaDssT7MSEDr%2Be%2BvrP6eHKNuxo%2BkNNvBRMrsVBO%2BoVhzWUI%2BzxUDFkIrZCCdF73yFnUjLnS66n9Sdg1qwnhhdD9nxdpt0P9Q4J5zblzN2VccYKeHc5eA%2B7FCEmBDlQ9dfT4ozpe9VA1r%2BXYzE5gv2pW7lc5PnzQwoiEDR2mjIA%2FZft02Ry8dRG7DsiJeLFP4C%2FQ%2FicaQ3lYW5hOguyA2xJ9cz2CyFpYjQiQtKkqsMohjGb6%2BFNI1tNkJNqn054UOA%2BQviNhqQLN8D2my5zciOWkQS3CmcxMUVhDb3u%2FUHQyllw1D%2BkT0gPPQ5VJO9Rp9%2F5XOw9cgVGJKMDcm9KOlW2Knk%2B%2F29sIiy9YlGQjJBkWUmtfHhYrdA6kyMDmD8AIXhi3Sb9zCsKqBVL82r3ZoGR7Tjm9leMTV2Nws3RmIwhLX9xAY6pgGr4CG1Oe3VrhpOroC%2B%2BcKJ0ePBm3xNC5JBJa0N3ZpL5WjovzQZTdoQFcN%2BDvKq%2F3KPg1eTsK3Nbjl7YUs11R0GNUrYDkZpcqw2D%2FNyEVIxTSyq8H89KJzG6hHNnlIZNUpK9tH5sXWAHDMdz%2FLyreSYaV9E3P7cczA4yRDT6ngCP0pL10OfmA%2FT4VS7td6yRd63TlY8YNzkXpWcL2AXB12ldA404OHG&X-Amz-Signature=3ebe22e69c105a2d2e61eab8926fcea47b17540302c3baf07523079f0f70165c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASDYWPL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIAdjT0ZgQIMhIYPUmMwBKqAMVE0QOySXbjV21f0XuWVlAiBETAwsRXN18JB9XlVeSMlB3rFYS%2FsIDOoEknyS2%2BNKqyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMVihK%2FOp%2FwnJ47BwPKtwDqLNwknooyJQmETvlsvMbjexu34oQ7VGLwHPvGN%2F9dGqNDS2ZxXRZluBuN2Eg8qe9i3J6Vc0%2FtkxQc9rIcWpVfTZQ5dpP9HOMVI1nvsW%2BzxjGmD08aB5I8FAZDEjV4jSQ7fPxqyTxE0s6UenilbWKtpi9qWZw0MOyEYqE3Z1ZURJq8TlspLbWJ%2FnvvPx0b4KGRv%2BxX2r9AlOesw6Jn7cYaDssT7MSEDr%2Be%2BvrP6eHKNuxo%2BkNNvBRMrsVBO%2BoVhzWUI%2BzxUDFkIrZCCdF73yFnUjLnS66n9Sdg1qwnhhdD9nxdpt0P9Q4J5zblzN2VccYKeHc5eA%2B7FCEmBDlQ9dfT4ozpe9VA1r%2BXYzE5gv2pW7lc5PnzQwoiEDR2mjIA%2FZft02Ry8dRG7DsiJeLFP4C%2FQ%2FicaQ3lYW5hOguyA2xJ9cz2CyFpYjQiQtKkqsMohjGb6%2BFNI1tNkJNqn054UOA%2BQviNhqQLN8D2my5zciOWkQS3CmcxMUVhDb3u%2FUHQyllw1D%2BkT0gPPQ5VJO9Rp9%2F5XOw9cgVGJKMDcm9KOlW2Knk%2B%2F29sIiy9YlGQjJBkWUmtfHhYrdA6kyMDmD8AIXhi3Sb9zCsKqBVL82r3ZoGR7Tjm9leMTV2Nws3RmIwhLX9xAY6pgGr4CG1Oe3VrhpOroC%2B%2BcKJ0ePBm3xNC5JBJa0N3ZpL5WjovzQZTdoQFcN%2BDvKq%2F3KPg1eTsK3Nbjl7YUs11R0GNUrYDkZpcqw2D%2FNyEVIxTSyq8H89KJzG6hHNnlIZNUpK9tH5sXWAHDMdz%2FLyreSYaV9E3P7cczA4yRDT6ngCP0pL10OfmA%2FT4VS7td6yRd63TlY8YNzkXpWcL2AXB12ldA404OHG&X-Amz-Signature=d58da9f0742de7b55451603b5dca5763b00f29c6fb9c40ab9e7e66f38a54c934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
