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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3W565LB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk6rQGJPqz25G4dq%2FKdeczMhk4bsREBhnw9AHLXGf0SgIgB0Y2HUze41LpaJsZ8Pxt4PvfXsCwjz3HBEnGuzlr2TEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFI2mBgDPCdaEn6gHyrcA%2FZaf7cluzo8M8gCXIPy%2FPpQEc0kqq4PgjSRKz%2FzaKwzxIyTgJoWpFR805FRT8ZDUl25WCL7%2BsZt7wqOUcTNhqXJrbnc9wbSFmDKr0fbuGLOwRb5z5bsW6982AD595zylCkftD9GeHK8Vhl8LMERIqis66cMNY0NSJuI%2B4hPnwFOHoxGRFUI%2BHDr8IldJyQw4%2BEjFCl%2FCfvbL0NQzcX0AplZ1JhWwlgP5qmlaNescTCtmJe2VcWGwzFeJgKYwwZuKNGrO9cFpBQdv99L48n2dFq9HbClITX%2BN1jCRQKM%2BJ%2B7gvRw2YYjzSMns%2FdJbpTEwn9PmbZWjgbWGfF8sS5YzD5%2FHsI4hQAun69YZLPbzLSOWlS%2BZrPOthfOPaf7uUykfO02MC4BGpNzINim21%2FO4Wr%2BqqjlqIl%2Bn3w8U2sZC3IEoUTnEIQFkmeq5QyzijmBHV9vVG3jdrGd%2FJcj2t56Lu0aRfUopVUeOrG%2B%2FNSahymxy8ivvx1eY%2BoZl7fPPmRCx9oJrWAve504DwPIb9lREtBtLn%2FfExq0cHS7w3mA4q1Z%2Bce7PfZOqeqNcHTP7tyZ4Gk6q7BQseJSQImeOqYe4LpG6jvJwJ%2FIcKGMah6obHUx8VjTAsILi69rXNviMMOY2sEGOqUBwvVfVGo5Jh4719%2BKHkDVZJeS58IuTttBJJo7d9R3UKUDqr6Zmur0HwFHX43htiGpH3WS9fVOeg7kLU8GFvpKNWueMc%2FCf9IRU4Zk1ZoZ%2Fz%2FfQecS%2Bpqdt4DDsaz8O64zOnhlWFPGLOS4JdDv8GvPo%2BQsirhUUOY%2Fj9CQMikM4PV6sYqcH%2BU018hDQLuy%2BPF57a0NXorFxwzXpAwRfs6czeXInVDL&X-Amz-Signature=0569162125aa609dbe8c434577509d8020b5e41382572e0858096e90352780c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3W565LB%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk6rQGJPqz25G4dq%2FKdeczMhk4bsREBhnw9AHLXGf0SgIgB0Y2HUze41LpaJsZ8Pxt4PvfXsCwjz3HBEnGuzlr2TEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFI2mBgDPCdaEn6gHyrcA%2FZaf7cluzo8M8gCXIPy%2FPpQEc0kqq4PgjSRKz%2FzaKwzxIyTgJoWpFR805FRT8ZDUl25WCL7%2BsZt7wqOUcTNhqXJrbnc9wbSFmDKr0fbuGLOwRb5z5bsW6982AD595zylCkftD9GeHK8Vhl8LMERIqis66cMNY0NSJuI%2B4hPnwFOHoxGRFUI%2BHDr8IldJyQw4%2BEjFCl%2FCfvbL0NQzcX0AplZ1JhWwlgP5qmlaNescTCtmJe2VcWGwzFeJgKYwwZuKNGrO9cFpBQdv99L48n2dFq9HbClITX%2BN1jCRQKM%2BJ%2B7gvRw2YYjzSMns%2FdJbpTEwn9PmbZWjgbWGfF8sS5YzD5%2FHsI4hQAun69YZLPbzLSOWlS%2BZrPOthfOPaf7uUykfO02MC4BGpNzINim21%2FO4Wr%2BqqjlqIl%2Bn3w8U2sZC3IEoUTnEIQFkmeq5QyzijmBHV9vVG3jdrGd%2FJcj2t56Lu0aRfUopVUeOrG%2B%2FNSahymxy8ivvx1eY%2BoZl7fPPmRCx9oJrWAve504DwPIb9lREtBtLn%2FfExq0cHS7w3mA4q1Z%2Bce7PfZOqeqNcHTP7tyZ4Gk6q7BQseJSQImeOqYe4LpG6jvJwJ%2FIcKGMah6obHUx8VjTAsILi69rXNviMMOY2sEGOqUBwvVfVGo5Jh4719%2BKHkDVZJeS58IuTttBJJo7d9R3UKUDqr6Zmur0HwFHX43htiGpH3WS9fVOeg7kLU8GFvpKNWueMc%2FCf9IRU4Zk1ZoZ%2Fz%2FfQecS%2Bpqdt4DDsaz8O64zOnhlWFPGLOS4JdDv8GvPo%2BQsirhUUOY%2Fj9CQMikM4PV6sYqcH%2BU018hDQLuy%2BPF57a0NXorFxwzXpAwRfs6czeXInVDL&X-Amz-Signature=dabf3558ab513141e7cc7dd21776915baaa1eade3185572747af717f81a682ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
