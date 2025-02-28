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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFEGLIF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE5W4zxNPfyFfvLOB05%2FZve%2FPSNGGCR3UwTjdd22ES64AiEA471iFBnMtIdTl7AILKB%2BZlme8e2YeaND6A3WBKnBm9gqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQYvPd5b2Emt9SmJircAxbMSgbQzF4IsD7zn4qpC2biGnng6zDmMD%2FhXl0ZYpP0%2FdIYofo53x0t58FgHScXEFcLjQm4tVKN8ymPG2DLgez2O%2Bp4DCqQhKaXuYqi9l%2F0FH2rjYPznoDnpk75xyy9mdp4ni76Z9h6RIfCGqdAVZhd7E6JKiW4ucHRGJEe1GWbqwp78N%2F475%2B6xysTSMG40A%2Bo6zrngzr33YZ7aHpsxPWbz0gANg8y7przBln6FBuvCkRrVzpkXgAZDIFLU9pbPy%2FLpyPfawb0uJQzpbtKnuknKdji71tb6ZFwkScRslUViBt0H03X6N7pmC1tzpkCRpTwIsxjbSDIibNBdARKNWomwtByGKzB5N7J%2BS1rt3xJEvpuaRKbVeI64iQR%2BOjGh7ZImZPMCm4NXlI7FksxU7sho2RFEbF8DnmSu%2B64uPd%2BlbczhV4qwdWavctpA9RmnFIqUopowSmIAXGs8fZnfCiSQedWjxC5zF2m%2BEg6mdcdidOzMwAlDG8Z4HQt8aB4F32v%2BC%2FWvsYG0F6Zxc4KPgPCEBehTPgxg4O0V7V0vUUkWvdbF1LfXoTRcI6UNVSVav4S6qIGgIuenDFd2z3IS%2BCWm9Hdk4hLS6AJDvNyg%2B0Jb1rMEmBfOYZZO4F6MMuwhb4GOqUBDfCQrNRvmN9HroSXSnW%2BanyT9Q7H4JDh3D25rfgO1VtyTs4ofuLDPH4SZ74abjbOO8YXWALp%2FGyk5wTRA93KGunO9tFiNCKxKBQMlki5qU0zrWPBWESUqujCdf3LZ7gMuLWJzof2eNemwT7nzzVC2aSg9Nw42ZVHOVJt822OLXNkAriJI8JY79nByVZ26qT3xHTMF7LqoSKyUi%2B7MQADMDw9sKSB&X-Amz-Signature=22d4cdb6fa13e71c2d76c6c1319b513cdb506f3baab55839e82c57d54e6e8485&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFEGLIF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIE5W4zxNPfyFfvLOB05%2FZve%2FPSNGGCR3UwTjdd22ES64AiEA471iFBnMtIdTl7AILKB%2BZlme8e2YeaND6A3WBKnBm9gqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQYvPd5b2Emt9SmJircAxbMSgbQzF4IsD7zn4qpC2biGnng6zDmMD%2FhXl0ZYpP0%2FdIYofo53x0t58FgHScXEFcLjQm4tVKN8ymPG2DLgez2O%2Bp4DCqQhKaXuYqi9l%2F0FH2rjYPznoDnpk75xyy9mdp4ni76Z9h6RIfCGqdAVZhd7E6JKiW4ucHRGJEe1GWbqwp78N%2F475%2B6xysTSMG40A%2Bo6zrngzr33YZ7aHpsxPWbz0gANg8y7przBln6FBuvCkRrVzpkXgAZDIFLU9pbPy%2FLpyPfawb0uJQzpbtKnuknKdji71tb6ZFwkScRslUViBt0H03X6N7pmC1tzpkCRpTwIsxjbSDIibNBdARKNWomwtByGKzB5N7J%2BS1rt3xJEvpuaRKbVeI64iQR%2BOjGh7ZImZPMCm4NXlI7FksxU7sho2RFEbF8DnmSu%2B64uPd%2BlbczhV4qwdWavctpA9RmnFIqUopowSmIAXGs8fZnfCiSQedWjxC5zF2m%2BEg6mdcdidOzMwAlDG8Z4HQt8aB4F32v%2BC%2FWvsYG0F6Zxc4KPgPCEBehTPgxg4O0V7V0vUUkWvdbF1LfXoTRcI6UNVSVav4S6qIGgIuenDFd2z3IS%2BCWm9Hdk4hLS6AJDvNyg%2B0Jb1rMEmBfOYZZO4F6MMuwhb4GOqUBDfCQrNRvmN9HroSXSnW%2BanyT9Q7H4JDh3D25rfgO1VtyTs4ofuLDPH4SZ74abjbOO8YXWALp%2FGyk5wTRA93KGunO9tFiNCKxKBQMlki5qU0zrWPBWESUqujCdf3LZ7gMuLWJzof2eNemwT7nzzVC2aSg9Nw42ZVHOVJt822OLXNkAriJI8JY79nByVZ26qT3xHTMF7LqoSKyUi%2B7MQADMDw9sKSB&X-Amz-Signature=9cde71d34a80ad1298ff997f164e8caf76ea6d3b7ea6320f4e8e770a9a0198b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
