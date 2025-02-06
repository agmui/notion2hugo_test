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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMVBRDX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFd5ixJN6HOXkwFLHbp8eoRWpbrjnRT4A%2BnO47yO5zSsAiEAge2OPZXIz3hP6HDY8Ru7TvP%2BbwjRd%2BA17zCK4%2FQtLMoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGVbI6NISR9hazgUcircA3RK9jJkNBOEHW6ZXwXSynoUUM2ZVRe5hz1r5vIzngisVU1F%2Fkqf53R3rotN3ubxrlQzRKRkQMO%2FSM7Y%2B76KdZOkahlAmWgsTs6iWGj0s7oe1vr1Si16fnOe417NNZ4U3FXwiAFdKsfoqQqNIB24%2Fr%2FJ%2BxOcOJAnGD3hCPNgTgwnS6x22A0KNgrtBCaob2BhN50SXBaCP9mSz1jjfpbTvOelcGVLhPz0GjzoUA2ZXKkGndoGLcsLiPcXad3GHDVxq6z2NqBFAhP2PE3Fx%2BlNFfX61OvmynfiESS%2BP3uk9mhtvRUInXmHPKqlvO8MkgcTzT1aTYs5kRNpzLRFXwJLzJKumPH%2FNw0oL1HjFfQVHAfuVlV%2FP9ba%2Fpv%2FHKmvA8%2BeLV3ePatSNe%2BMlyDWsTtTQ32QFP0clw%2F8LZ3qeb%2FBBaKA9YwwTk2jkDkb1%2FolI7mSgd6yn4Bj7Tcrvq3ELm6TOqlXRa8wpnJ%2BwcNkg13KTFL1aD6y7tyij5xmGEZjAtBNrlFHUfwW9wzXVFHZsIr%2FI8bg9mqTZyhsRSpKy0TPV9nQMUkJPJlWU5tEGcditCFOxw%2Bb1UFKklSFO1jSvLGjPm2Wd7QfYXv%2BGBF7jkOeChpa%2FHQC0z0I7JbgvG0BMLO5lL0GOqUBKR8c%2Bm6%2BCxnMKE9xAlDkUgJXbzm%2FbuEg%2BosI%2BYVf%2Bw%2FqnuPoEG%2BkQHEYWMWJv0VqCH2doIYlXtFInmlDSPEVzp%2BPst0RUbzTr0sR8ZRtZYqvLWRk3NndMcqWyQi6euhZfv1lpQ7Hd6lx7q7mg2ekewGGjHjWTYK5jI%2Bl7erCOuJFAY1447EFJMFVWMTL7z%2BlU5jrbIArfDqS0EcOUQWBboFHrati&X-Amz-Signature=91f65abb7301b81713d12b7b15a6f1476107d29f90f1e4c5ea9014e79cca6f26&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMVBRDX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFd5ixJN6HOXkwFLHbp8eoRWpbrjnRT4A%2BnO47yO5zSsAiEAge2OPZXIz3hP6HDY8Ru7TvP%2BbwjRd%2BA17zCK4%2FQtLMoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGVbI6NISR9hazgUcircA3RK9jJkNBOEHW6ZXwXSynoUUM2ZVRe5hz1r5vIzngisVU1F%2Fkqf53R3rotN3ubxrlQzRKRkQMO%2FSM7Y%2B76KdZOkahlAmWgsTs6iWGj0s7oe1vr1Si16fnOe417NNZ4U3FXwiAFdKsfoqQqNIB24%2Fr%2FJ%2BxOcOJAnGD3hCPNgTgwnS6x22A0KNgrtBCaob2BhN50SXBaCP9mSz1jjfpbTvOelcGVLhPz0GjzoUA2ZXKkGndoGLcsLiPcXad3GHDVxq6z2NqBFAhP2PE3Fx%2BlNFfX61OvmynfiESS%2BP3uk9mhtvRUInXmHPKqlvO8MkgcTzT1aTYs5kRNpzLRFXwJLzJKumPH%2FNw0oL1HjFfQVHAfuVlV%2FP9ba%2Fpv%2FHKmvA8%2BeLV3ePatSNe%2BMlyDWsTtTQ32QFP0clw%2F8LZ3qeb%2FBBaKA9YwwTk2jkDkb1%2FolI7mSgd6yn4Bj7Tcrvq3ELm6TOqlXRa8wpnJ%2BwcNkg13KTFL1aD6y7tyij5xmGEZjAtBNrlFHUfwW9wzXVFHZsIr%2FI8bg9mqTZyhsRSpKy0TPV9nQMUkJPJlWU5tEGcditCFOxw%2Bb1UFKklSFO1jSvLGjPm2Wd7QfYXv%2BGBF7jkOeChpa%2FHQC0z0I7JbgvG0BMLO5lL0GOqUBKR8c%2Bm6%2BCxnMKE9xAlDkUgJXbzm%2FbuEg%2BosI%2BYVf%2Bw%2FqnuPoEG%2BkQHEYWMWJv0VqCH2doIYlXtFInmlDSPEVzp%2BPst0RUbzTr0sR8ZRtZYqvLWRk3NndMcqWyQi6euhZfv1lpQ7Hd6lx7q7mg2ekewGGjHjWTYK5jI%2Bl7erCOuJFAY1447EFJMFVWMTL7z%2BlU5jrbIArfDqS0EcOUQWBboFHrati&X-Amz-Signature=05605f64719484eb186f01705ac3fab5400de46b86202069eaf4e333f9841d20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
