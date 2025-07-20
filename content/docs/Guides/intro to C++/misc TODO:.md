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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKZ3HAV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ8nEfReirBYU1CPOAH9P0XsrEQfLBZ0EppUKPkwpfvQIgU3HnQ%2Fvi4eR2MvCl5EVXZEBCQ5XlU%2Fslx%2BBw%2FkZ5hmAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp%2Fv%2FKBYvbImOUinSrcA1IoRi1l%2BIUYEqbvKcHtOWOJKcmbtqjZ7Sxn%2FAVDJ0kvJ1m0U3cHIk9opfUnX75b7Z3Qc92ZUporMlJ9sCELY98DqAGdY8W%2FPgk1j88N1H3SA70JQKuZCicZSmZSwvOI%2BJMv3wm53sZk%2BSFa%2FpMRe%2Fqi69xsEZzTA7r2jeW7DDxDLKu4mx6UuWuhBfrVXfID1t5HYsh2ZVMmF00wzeoycsovnvkXeJPVORd1qupGEp1TwbPy6dHh8vv6JL2l0i1tY71yFneRjDKOT%2BIwQ6Nk633hQTJlX0%2FlRxjC2yR%2B%2BXbH0ykO0yws0oDMghzWPsyK35s4xfmgLx8GVuMqKyYgOChiadhDW7vvJvpGbi%2FJ0rAfN1L84NscvochXoUjrXeH3cBgZ1dhjXjKpvdz0wwDCQ3%2FjxLaemX8%2BeyNfX3QBrrAkyTB0YLaKoUa%2BjELkWdAHod0udqc5TwtXGBCTYqAwCMm%2Fogx6N22%2BdzKzCpG2Bd%2BTDYVUpsJBxFJSkxwyjQWlGvSlrhddeC8e1x%2BDoq2kDWJkYq2gqDvXnE4ErFtZ2dPCVnrSSHmUgyrBXXuzMAbmjxyBmmWt6uun51agEPzSh43b%2BYrFHrTmxBYc%2BQSYjMxe5ZTFwlqsmPdJIhhMOWz8sMGOqUB4Y%2B0eB6uYjRe4MXhThEP0mK3Pset2HnNVedyhVHvVkBr0PGldI7fZNc7s%2FDw%2FV%2BuRGnJKVwB5EZegFlPwONLJIpUWtYaQpICKUSFULtahJMCQB70X%2B82E8no7I67%2BK%2BD3Y3HviXnIiMh85P00yGkvGXmVmxApl2uCz4m%2BxAh7fhR%2FQkLbiffOsXV%2ByTOJ%2FMk00CH78JcPPuZOe3xpWbHnNGNvOzu&X-Amz-Signature=f270b01ea44346f286a90e01af6489c90bc2ccc4dcc30a9e79f8b741e37cd8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKZ3HAV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ8nEfReirBYU1CPOAH9P0XsrEQfLBZ0EppUKPkwpfvQIgU3HnQ%2Fvi4eR2MvCl5EVXZEBCQ5XlU%2Fslx%2BBw%2FkZ5hmAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp%2Fv%2FKBYvbImOUinSrcA1IoRi1l%2BIUYEqbvKcHtOWOJKcmbtqjZ7Sxn%2FAVDJ0kvJ1m0U3cHIk9opfUnX75b7Z3Qc92ZUporMlJ9sCELY98DqAGdY8W%2FPgk1j88N1H3SA70JQKuZCicZSmZSwvOI%2BJMv3wm53sZk%2BSFa%2FpMRe%2Fqi69xsEZzTA7r2jeW7DDxDLKu4mx6UuWuhBfrVXfID1t5HYsh2ZVMmF00wzeoycsovnvkXeJPVORd1qupGEp1TwbPy6dHh8vv6JL2l0i1tY71yFneRjDKOT%2BIwQ6Nk633hQTJlX0%2FlRxjC2yR%2B%2BXbH0ykO0yws0oDMghzWPsyK35s4xfmgLx8GVuMqKyYgOChiadhDW7vvJvpGbi%2FJ0rAfN1L84NscvochXoUjrXeH3cBgZ1dhjXjKpvdz0wwDCQ3%2FjxLaemX8%2BeyNfX3QBrrAkyTB0YLaKoUa%2BjELkWdAHod0udqc5TwtXGBCTYqAwCMm%2Fogx6N22%2BdzKzCpG2Bd%2BTDYVUpsJBxFJSkxwyjQWlGvSlrhddeC8e1x%2BDoq2kDWJkYq2gqDvXnE4ErFtZ2dPCVnrSSHmUgyrBXXuzMAbmjxyBmmWt6uun51agEPzSh43b%2BYrFHrTmxBYc%2BQSYjMxe5ZTFwlqsmPdJIhhMOWz8sMGOqUB4Y%2B0eB6uYjRe4MXhThEP0mK3Pset2HnNVedyhVHvVkBr0PGldI7fZNc7s%2FDw%2FV%2BuRGnJKVwB5EZegFlPwONLJIpUWtYaQpICKUSFULtahJMCQB70X%2B82E8no7I67%2BK%2BD3Y3HviXnIiMh85P00yGkvGXmVmxApl2uCz4m%2BxAh7fhR%2FQkLbiffOsXV%2ByTOJ%2FMk00CH78JcPPuZOe3xpWbHnNGNvOzu&X-Amz-Signature=2c7e0fe04b4394f7776f08310ed8cbdec14149217ef956fdc4420c8fe04562d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
