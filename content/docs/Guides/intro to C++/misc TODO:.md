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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIUHOWC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5QHtQwJFMM5z0Ot%2FyzQcBm12gzRQhQyEHBxaqWa9y6QIgXkbFEYu9Xtihw8y4DQ%2FjCLTLRQk0rw6BX5HK0buZyOUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMpTGnkxZ93Hs9VreCrcAxwKjFASHsOZ0En3IquyOgzGLae14JT8KqmbAcltRj4LPaD6hQYEBKfg2B2%2FRuOK9w6%2F669jXa%2Bf64fywGsoIBl2igoJYjZ2RKZsivBKmRt8jADFVFw9YLbtuNvbqftjardw%2B1T2SGzB%2FD5SVU6pHILwFK7irM29q1OIudHtF%2BaIHJqqLmGAR%2F1tjS54yQB0MI2RuE8xyl4QtUtRlfiEWmsMfft7E6xzmg2oF24aEZlN7GoCOuhHSFrIOLg6FT44xwVu%2FY2BcGqMWmhD4SH7ZMf0oiJPyaKZX5%2BmaWbc1Jdl7r%2Bp7en66Cd1%2BaET9PAesDo7%2Fti%2BdtLSCaVD25qMhtfxnmTLjkh1lxuZxQF1cQF%2FHc7sQlWlzqmU%2FZ8AJgvY%2FnLPQET4FjaYjYFGaL9reGLHktlpHVP0zkXSY%2FQ1AMmG4luSPdlvVgo0nF4aEc2MuCHggAkC0kI8ZgSAdjGiUvL4gmrzglkWFJ3GT%2BkcAdkHCJC4evNYMX2NOxwDEwjgX0x3BFAgxDmlRJwzN%2BELbxN4G3epw51ys9QzQ89H0EK4SkIVTrpLP1bH6QhjHkxcfc9ZpA5GD01NBUEP9Y3gceBz5AheURt5Kl66lQJ9L6z5kO4mIYxfdADRcP5qMJKkqsAGOqUBNCatxUy7D45sqqqJdFVZC1Ix4vz9L9iW8tWOCfJyW%2FsQBhI8oJ%2FO9sRJHgo6vyCMhcwRhhSaLpl4ug%2Fad%2BA1B0pnt%2Bz%2BMW2SeY%2FE4%2F4FbmcKs1RWh1dOLt6JjkzuTtfjbVV4eWM5abJ%2Ftnx9%2Ba6soKMxuNguceWQk%2BQyNAOTyx%2FfxwFzDFMjg2yeH2%2FFdH%2F2maCvf447FXj8rr1TJXnmwbFwXPNz&X-Amz-Signature=cf4f6e71ffab9d3dce59c1cd3986145a92b934fd4b12b2b8fb707b576d14e7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIUHOWC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5QHtQwJFMM5z0Ot%2FyzQcBm12gzRQhQyEHBxaqWa9y6QIgXkbFEYu9Xtihw8y4DQ%2FjCLTLRQk0rw6BX5HK0buZyOUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDMpTGnkxZ93Hs9VreCrcAxwKjFASHsOZ0En3IquyOgzGLae14JT8KqmbAcltRj4LPaD6hQYEBKfg2B2%2FRuOK9w6%2F669jXa%2Bf64fywGsoIBl2igoJYjZ2RKZsivBKmRt8jADFVFw9YLbtuNvbqftjardw%2B1T2SGzB%2FD5SVU6pHILwFK7irM29q1OIudHtF%2BaIHJqqLmGAR%2F1tjS54yQB0MI2RuE8xyl4QtUtRlfiEWmsMfft7E6xzmg2oF24aEZlN7GoCOuhHSFrIOLg6FT44xwVu%2FY2BcGqMWmhD4SH7ZMf0oiJPyaKZX5%2BmaWbc1Jdl7r%2Bp7en66Cd1%2BaET9PAesDo7%2Fti%2BdtLSCaVD25qMhtfxnmTLjkh1lxuZxQF1cQF%2FHc7sQlWlzqmU%2FZ8AJgvY%2FnLPQET4FjaYjYFGaL9reGLHktlpHVP0zkXSY%2FQ1AMmG4luSPdlvVgo0nF4aEc2MuCHggAkC0kI8ZgSAdjGiUvL4gmrzglkWFJ3GT%2BkcAdkHCJC4evNYMX2NOxwDEwjgX0x3BFAgxDmlRJwzN%2BELbxN4G3epw51ys9QzQ89H0EK4SkIVTrpLP1bH6QhjHkxcfc9ZpA5GD01NBUEP9Y3gceBz5AheURt5Kl66lQJ9L6z5kO4mIYxfdADRcP5qMJKkqsAGOqUBNCatxUy7D45sqqqJdFVZC1Ix4vz9L9iW8tWOCfJyW%2FsQBhI8oJ%2FO9sRJHgo6vyCMhcwRhhSaLpl4ug%2Fad%2BA1B0pnt%2Bz%2BMW2SeY%2FE4%2F4FbmcKs1RWh1dOLt6JjkzuTtfjbVV4eWM5abJ%2Ftnx9%2Ba6soKMxuNguceWQk%2BQyNAOTyx%2FfxwFzDFMjg2yeH2%2FFdH%2F2maCvf447FXj8rr1TJXnmwbFwXPNz&X-Amz-Signature=95c6e39d3145e32dfacf44f87a5e68f6c2f79c99ed5607063776312e1f2f317b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
