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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROIJF56K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCoqyW0azHNkf%2BCuKbOMWS7nJaM40ZE%2F9iXOsbSopI7FwIgF6%2BMckpj%2BlABr8PaKzToDPOqcoOvDFtecBW8CSOeSjgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOS0fHDAltrbEBT0wircA7Xoo4fq3mIVYIqNQ0cV9VEbzR%2BnkIa%2FPBCk%2BaEMdzZcAzhglNsWHIpUHfRzVbyRBakz7UVhsksIBnwaHHoxThFzQn0OrjIYJgaPDcyOEfWcnX9gkdw8Bv%2BuPsQ3xVPWU2IkAPh3eSUSKpAPhOkAQ8D6LjS0TJ%2F5DMxMCqZ94KKI6siPJbwgkQLOa9dXJ4OT8j1A9yM%2BUay7rH7Fpcoi3cFDjkqirPjUG5hnoSpd4C7b6%2FMl4%2BNqUtWHi5kic%2BiQZmVNRvSYQGgpgdzc8alHBu0F4kRIgmUHcnLrj5vblOfqtXU1J4YeEcu0HOhL9cvNhpemko6pdG1ps0hWFFDnGstp8pcwlic5Pik45sER%2B9WrrR%2BSaS4smg7EwTn9xIJytmEGZvnfLhKe2PrGSA5xsQeU2uennXmZGiFpDG4Q1%2FHyMDXX6peMpNM07IYhrfBkKnqCzyy21tI7Npq9e9Arwf4oiOPd4iyWyFBh3v%2FOsTO8fQCrx2S4v%2BvjU%2FPZYgTv4Nc%2BxeVVoWNaeHfHhueU1ofQ1dwz5auvpV5cqVrzCS07q6%2FgVbp2T7APXoCw2qSdj1WjBFeN8QtoR6ZiQtPf5k0z%2Ft8ul%2FfLAl9JCI5eX6L9F3SovkAsesKdaOTIMJbt0MQGOqUB%2BG8p1TQodXf9pi0NxB8NDClPfoAaBn61gsXfq7%2FwgkSIh%2FRQlwkjrzoPkE0M242xmgn7OfyBB7ma0HO54ITZKjLmpG9113Pl%2FXcUYQfZcd94kEPy3P21NE4oP1DXO2tKL8FJi%2FszarfIhxyNhBoVTVkN5QXtfOJTk1C%2BvOhik8xTSz%2BzWjEY332MOXeTXBMcGLVXAr5DnpTAq16Oz3YNcgIOeA3N&X-Amz-Signature=b98ef01106761afea26000faede790d9ac9cd006db4011383d4f0a70471c7b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROIJF56K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCoqyW0azHNkf%2BCuKbOMWS7nJaM40ZE%2F9iXOsbSopI7FwIgF6%2BMckpj%2BlABr8PaKzToDPOqcoOvDFtecBW8CSOeSjgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOS0fHDAltrbEBT0wircA7Xoo4fq3mIVYIqNQ0cV9VEbzR%2BnkIa%2FPBCk%2BaEMdzZcAzhglNsWHIpUHfRzVbyRBakz7UVhsksIBnwaHHoxThFzQn0OrjIYJgaPDcyOEfWcnX9gkdw8Bv%2BuPsQ3xVPWU2IkAPh3eSUSKpAPhOkAQ8D6LjS0TJ%2F5DMxMCqZ94KKI6siPJbwgkQLOa9dXJ4OT8j1A9yM%2BUay7rH7Fpcoi3cFDjkqirPjUG5hnoSpd4C7b6%2FMl4%2BNqUtWHi5kic%2BiQZmVNRvSYQGgpgdzc8alHBu0F4kRIgmUHcnLrj5vblOfqtXU1J4YeEcu0HOhL9cvNhpemko6pdG1ps0hWFFDnGstp8pcwlic5Pik45sER%2B9WrrR%2BSaS4smg7EwTn9xIJytmEGZvnfLhKe2PrGSA5xsQeU2uennXmZGiFpDG4Q1%2FHyMDXX6peMpNM07IYhrfBkKnqCzyy21tI7Npq9e9Arwf4oiOPd4iyWyFBh3v%2FOsTO8fQCrx2S4v%2BvjU%2FPZYgTv4Nc%2BxeVVoWNaeHfHhueU1ofQ1dwz5auvpV5cqVrzCS07q6%2FgVbp2T7APXoCw2qSdj1WjBFeN8QtoR6ZiQtPf5k0z%2Ft8ul%2FfLAl9JCI5eX6L9F3SovkAsesKdaOTIMJbt0MQGOqUB%2BG8p1TQodXf9pi0NxB8NDClPfoAaBn61gsXfq7%2FwgkSIh%2FRQlwkjrzoPkE0M242xmgn7OfyBB7ma0HO54ITZKjLmpG9113Pl%2FXcUYQfZcd94kEPy3P21NE4oP1DXO2tKL8FJi%2FszarfIhxyNhBoVTVkN5QXtfOJTk1C%2BvOhik8xTSz%2BzWjEY332MOXeTXBMcGLVXAr5DnpTAq16Oz3YNcgIOeA3N&X-Amz-Signature=eec88ec9429e29bbdb04b55511d40500d48a179cad398d22a7c680366ef7889e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
