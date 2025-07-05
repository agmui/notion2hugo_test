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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKZVUV6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCEaAbyoNk%2BWOTQ3oiE54SWpD2yH6uTjTOKBmjyRngeDwIgaRTXytI3I3GkRIo8HTV44xlQwRZJlh%2F7XmY6MLNlcKkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBQxtx6VtjmVDO4fOircA7mO6%2FtOf8y5ekzJ5g2jhSNoJnfmiHcFy608fyt5TTCNgtjKiP2LmTQ5MAwqXIIc55AUuaKeufTz51b%2BHSsG7RezvCGE93L3K7dFxJyQbnh7EqWXtaZfznbMKCtgsPTOgv0RuObzpSyfkSWqzIBk14GRZ43icGXVyzn44VQLXl7yI25zZJuNnzRW36LnD5v5xa0dZbl%2FF2FYVrFvYbQRQRiqBGy2iROp0YuxLRXdgiOViK0uLeLwLghPr9dccxXjpeeIAQof8GlvmmQpXlHCtYjcSXkVs4lO3CW5D7AgfXZqrjL4HTwg8%2Buznx5fBHwCIqzZvmwlIvRGo6uY3tcIko0hbsfJE1yEGctnHOXhUsEtZnLVQHds7vU72fNWLWl7JthwisN33Y4PJP15Qe%2FmQgyfVULGGnIInNhZMY1GOOdO1g6Tsk2uKUC93F8nHmzjI8%2Bv0yVoy7FtqLERyy4yB7NZAE8dHd7QhBRH%2Bfx%2BoF63t%2FrhpKsU%2BtkLRRCI%2BdUy%2BNUA90Ms86uqkOVX8hLuiKFzhTSGbFiap%2FjQCDldLJti2ut2pdizCCuzI7f9Z4kr0We9C3Vv0cl7XgGFmMEX7mWyZsSIybUz0ZYf7VxAS8jRabtbCjmGNQvWJzU5MPiGosMGOqUBmHtCjAG6O5eT4NvMMqErEa5uwXZeyK54WqhfubiOolbcHCCW%2BYq6v2qOFdjmjp8pBZRTIcw8hn8PWb56pgL4hrEwPPiWjaGmtvZkQKdIv2r5zuz3%2FpKORhC8tmiMPuAnBCs2FpCM%2FT6UiX1STizhTT1RpFXu5QpxZmb6AIY9gkooDj1rsngo9ErTqvLyYUO6AXohsBSqMLv4A%2BjVuPjQUdSSVFM8&X-Amz-Signature=dc5e8912b71257cae8a3c915fe2342bd9f838d0f8447418be9eaa3d4078d6103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKZVUV6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCEaAbyoNk%2BWOTQ3oiE54SWpD2yH6uTjTOKBmjyRngeDwIgaRTXytI3I3GkRIo8HTV44xlQwRZJlh%2F7XmY6MLNlcKkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBQxtx6VtjmVDO4fOircA7mO6%2FtOf8y5ekzJ5g2jhSNoJnfmiHcFy608fyt5TTCNgtjKiP2LmTQ5MAwqXIIc55AUuaKeufTz51b%2BHSsG7RezvCGE93L3K7dFxJyQbnh7EqWXtaZfznbMKCtgsPTOgv0RuObzpSyfkSWqzIBk14GRZ43icGXVyzn44VQLXl7yI25zZJuNnzRW36LnD5v5xa0dZbl%2FF2FYVrFvYbQRQRiqBGy2iROp0YuxLRXdgiOViK0uLeLwLghPr9dccxXjpeeIAQof8GlvmmQpXlHCtYjcSXkVs4lO3CW5D7AgfXZqrjL4HTwg8%2Buznx5fBHwCIqzZvmwlIvRGo6uY3tcIko0hbsfJE1yEGctnHOXhUsEtZnLVQHds7vU72fNWLWl7JthwisN33Y4PJP15Qe%2FmQgyfVULGGnIInNhZMY1GOOdO1g6Tsk2uKUC93F8nHmzjI8%2Bv0yVoy7FtqLERyy4yB7NZAE8dHd7QhBRH%2Bfx%2BoF63t%2FrhpKsU%2BtkLRRCI%2BdUy%2BNUA90Ms86uqkOVX8hLuiKFzhTSGbFiap%2FjQCDldLJti2ut2pdizCCuzI7f9Z4kr0We9C3Vv0cl7XgGFmMEX7mWyZsSIybUz0ZYf7VxAS8jRabtbCjmGNQvWJzU5MPiGosMGOqUBmHtCjAG6O5eT4NvMMqErEa5uwXZeyK54WqhfubiOolbcHCCW%2BYq6v2qOFdjmjp8pBZRTIcw8hn8PWb56pgL4hrEwPPiWjaGmtvZkQKdIv2r5zuz3%2FpKORhC8tmiMPuAnBCs2FpCM%2FT6UiX1STizhTT1RpFXu5QpxZmb6AIY9gkooDj1rsngo9ErTqvLyYUO6AXohsBSqMLv4A%2BjVuPjQUdSSVFM8&X-Amz-Signature=3bd1df25977bc01210bbe0747b911439e52887c60d0325d9a443f77858842a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
