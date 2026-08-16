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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXDD6JO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDWjHmZdF5MftOI6cJJEWqfp6x23wtvnvPuSCke6M7fyAIgSpvSqlSCj90ATE4tpushdICqIiRHgZcOgU6U4NKVIzkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH9Mn7bf7gfg6Fm5RyrcA15GktRqYQmlg9ztcHx%2BIIomeLQPik5YD1Se2atG2owbmygoaQoKdare1w%2BmrQBssuzufmQnRmd8Glg40IqHc9dXp4l%2BjGRhERcn10ZtitmgOr4HySvvc%2BeMMOhE314aF7WHu38LMe72NQJgfXkVBtbyiDIAqaDwi0idEyoL2uFoNIIKbF5YE7AQG2%2FFGW4Xjg6dHBfmhz%2BQaQDODE%2BBpgm6d6alZGbVrS664%2FkNbPFnv55seLnSsdUpO8NfLXhov4GS%2FLT22i4rODvuNE3EvULl%2BVoxE0wmorRjI5uCxbgSc1Yj4hxbFUu9G7vnicY8oAB8vRIdr3HybFU9ymQO9tcSnWbFOJyrXAlAl7C9SRyZDjleO6Epfnatb%2FaoyFS9MOQ9whcKpdBRpy21nxhtu0x6Um%2Fj4IHWtfq6dciqchErfUes0NUQkdx2VXn08XnTPNddZYyfXiP8NraW2Mx%2FHlRuBLWbx0RenGwUm66kSqToVjP%2BqILWMgwJK6PJoPMKNSfqCuAIahZNq4%2FyHY7zp7U2h%2FdTIbpIUf51CSzqb6twOqTQFTL6oHPGKJgs%2Fu5dSsVzirUh8QKF%2B423riH3ncVqo6iAel%2Fhq%2FJwsG0Alw37fjuIe9u35DHeZjjAMK7sg9QGOqUB%2BrWBEA359AHAtonqJJaSRy%2FX9z9%2Fh9gc9CEDWe7AU6uyypeFYdoHsmGRfp5ZDXBLRLmgfyzgJT7h5gCMP%2FM8cV4r3%2Bjvma8oRODHe8ubCMFfY1yHuZ1EiwejfIUKHG7W5Xf%2Bj%2BbPFYAxW29jm%2BxI3bw0tPDEU5TFREDCmJnOxsG5MAfTvLxrj%2BW%2Fj2pejqaA7rYiXklK%2FLrKZO3bUMMmUkQWt%2B9v&X-Amz-Signature=039f75a40a14ee98e28821eae9faf04232ce10cdd91c9fa3c9b87a3aab338c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXDD6JO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDWjHmZdF5MftOI6cJJEWqfp6x23wtvnvPuSCke6M7fyAIgSpvSqlSCj90ATE4tpushdICqIiRHgZcOgU6U4NKVIzkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH9Mn7bf7gfg6Fm5RyrcA15GktRqYQmlg9ztcHx%2BIIomeLQPik5YD1Se2atG2owbmygoaQoKdare1w%2BmrQBssuzufmQnRmd8Glg40IqHc9dXp4l%2BjGRhERcn10ZtitmgOr4HySvvc%2BeMMOhE314aF7WHu38LMe72NQJgfXkVBtbyiDIAqaDwi0idEyoL2uFoNIIKbF5YE7AQG2%2FFGW4Xjg6dHBfmhz%2BQaQDODE%2BBpgm6d6alZGbVrS664%2FkNbPFnv55seLnSsdUpO8NfLXhov4GS%2FLT22i4rODvuNE3EvULl%2BVoxE0wmorRjI5uCxbgSc1Yj4hxbFUu9G7vnicY8oAB8vRIdr3HybFU9ymQO9tcSnWbFOJyrXAlAl7C9SRyZDjleO6Epfnatb%2FaoyFS9MOQ9whcKpdBRpy21nxhtu0x6Um%2Fj4IHWtfq6dciqchErfUes0NUQkdx2VXn08XnTPNddZYyfXiP8NraW2Mx%2FHlRuBLWbx0RenGwUm66kSqToVjP%2BqILWMgwJK6PJoPMKNSfqCuAIahZNq4%2FyHY7zp7U2h%2FdTIbpIUf51CSzqb6twOqTQFTL6oHPGKJgs%2Fu5dSsVzirUh8QKF%2B423riH3ncVqo6iAel%2Fhq%2FJwsG0Alw37fjuIe9u35DHeZjjAMK7sg9QGOqUB%2BrWBEA359AHAtonqJJaSRy%2FX9z9%2Fh9gc9CEDWe7AU6uyypeFYdoHsmGRfp5ZDXBLRLmgfyzgJT7h5gCMP%2FM8cV4r3%2Bjvma8oRODHe8ubCMFfY1yHuZ1EiwejfIUKHG7W5Xf%2Bj%2BbPFYAxW29jm%2BxI3bw0tPDEU5TFREDCmJnOxsG5MAfTvLxrj%2BW%2Fj2pejqaA7rYiXklK%2FLrKZO3bUMMmUkQWt%2B9v&X-Amz-Signature=6d7056fc94cf493c5785ca02a1173799aa67217798a3e7edbc6f5101a6ddce32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
