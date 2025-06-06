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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GUWANN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWkVslazdHKvpTs%2BKhxi18%2Bp83kI1pQzGgM%2BogdFQaGAiEA6Wh1ec16uQvL1V4tU6ST6k%2FwAiK0TbwJFDqfFGvQLD4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDN0FQZfp%2BG8GLIwuXyrcA0JwpUE7k2RqXBwjcyMzIVrwqXs0srJ7xL%2BSN8%2FPw3MKKnWFwywVpk3weItfBfXvgmtOWnLQF6EHBS%2Fn%2BlqzRGD0YF3thuaoTXzNqf%2BF%2BxZDVOcq20vKmpKIjjb4IcXPqPqsA934E9K9mbvMF4hcAV9n7lZaswWo0R%2FmfQjmQtk7EtwPuIoQTzxTY6eik4C5v0wJcGVUq1A5vZHMEnAOI397PDvtsiJlljyhqVNc8LyhLjKkK2iFiE%2FNDvLv1gc9LPqALT4CJcpw%2BzjuiHrDofqGBPX3x07kF8zCHsE9dydA9xCG1AB0VWaTJFjiI7bKQZexkh4iOziL5p921WLfZhF7njClnWIL0IGp6mZVxheEXAmenKj0tq7uw90CNt0JDBl9rkP%2FaIfDxrSrlfgjCL0KUerHlkHixrhtq9IQk0AZZG8ed%2BEZLahtdKL5qtWxFncYfZx1Oy9pXSef6%2F7fEXpFCVgJO9Ba61w3Mnxu%2FmCepqzXO7vDcBZmNZ91x4yJIrTUoK4L061yr70opICAODM%2BBXMLD8OtZLclqZmsWWyz2d%2F0y4z8EE0CNL6NPkjo8OO2T6adcsnFfYFjYZhWUL%2FH9yJSVwcOf8iYa%2FvNPDXytPhnLB8PCJMHeaPnMOmPi8IGOqUBhpycGGObPWpVAmLgN0zZj2u36ObCdKd7hnzDM7eBMzKsR36HlDK1zjDWSn8DFqP2jcPbCusIdSkZl3rDjlsuXKDE89iziC7DW47TdwTb82TQvR2dRWeFK7Y4q4q75ZWfJSrf3kL%2F7laqViXV7rgkrQ%2F4XdkU9Ke%2FqRSgJ%2B4AynmY2g8hfpwjaF49Cf4jqn5iSQ5TGZNOikj0jRLF%2FCr6WDPhIZjZ&X-Amz-Signature=d3cd9e2a73acac8fc3dd4bf762aad0ecb992b75ac8dfd4c288f80f2e98b94a68&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GUWANN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWkVslazdHKvpTs%2BKhxi18%2Bp83kI1pQzGgM%2BogdFQaGAiEA6Wh1ec16uQvL1V4tU6ST6k%2FwAiK0TbwJFDqfFGvQLD4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDN0FQZfp%2BG8GLIwuXyrcA0JwpUE7k2RqXBwjcyMzIVrwqXs0srJ7xL%2BSN8%2FPw3MKKnWFwywVpk3weItfBfXvgmtOWnLQF6EHBS%2Fn%2BlqzRGD0YF3thuaoTXzNqf%2BF%2BxZDVOcq20vKmpKIjjb4IcXPqPqsA934E9K9mbvMF4hcAV9n7lZaswWo0R%2FmfQjmQtk7EtwPuIoQTzxTY6eik4C5v0wJcGVUq1A5vZHMEnAOI397PDvtsiJlljyhqVNc8LyhLjKkK2iFiE%2FNDvLv1gc9LPqALT4CJcpw%2BzjuiHrDofqGBPX3x07kF8zCHsE9dydA9xCG1AB0VWaTJFjiI7bKQZexkh4iOziL5p921WLfZhF7njClnWIL0IGp6mZVxheEXAmenKj0tq7uw90CNt0JDBl9rkP%2FaIfDxrSrlfgjCL0KUerHlkHixrhtq9IQk0AZZG8ed%2BEZLahtdKL5qtWxFncYfZx1Oy9pXSef6%2F7fEXpFCVgJO9Ba61w3Mnxu%2FmCepqzXO7vDcBZmNZ91x4yJIrTUoK4L061yr70opICAODM%2BBXMLD8OtZLclqZmsWWyz2d%2F0y4z8EE0CNL6NPkjo8OO2T6adcsnFfYFjYZhWUL%2FH9yJSVwcOf8iYa%2FvNPDXytPhnLB8PCJMHeaPnMOmPi8IGOqUBhpycGGObPWpVAmLgN0zZj2u36ObCdKd7hnzDM7eBMzKsR36HlDK1zjDWSn8DFqP2jcPbCusIdSkZl3rDjlsuXKDE89iziC7DW47TdwTb82TQvR2dRWeFK7Y4q4q75ZWfJSrf3kL%2F7laqViXV7rgkrQ%2F4XdkU9Ke%2FqRSgJ%2B4AynmY2g8hfpwjaF49Cf4jqn5iSQ5TGZNOikj0jRLF%2FCr6WDPhIZjZ&X-Amz-Signature=252b20cd88765b9a522c72f9f73868d3a2da59b2e55a054d33c3b402ef170877&X-Amz-SignedHeaders=host&x-id=GetObject)

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
