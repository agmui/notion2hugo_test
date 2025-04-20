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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQG2TSR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH%2BN%2FTykoWRBO6GCymQDukOUjVb7fz0Ue3SS53lNkWVKAiAMDvDoqWkCFnj%2FLK60H00qKm5tFAGWfB%2BoiyBaWDLgcCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DpDD60NT8fkCjv1KtwDepnQ44fk7T47C6yi7AQT7scutrT10QqzPwDtMACAguJPNG9Ql0XOWIz%2BjR9P2JP3Dr4JccCZ8%2F5Z9Cs0YHbhEGZ5XWv%2BbyhT5AT21Hjm6C0fctI8suySpxOCB364n4eoxaqLht1mOIZSMnhAFsKvfdqbhZ0TNpP8rLgXpoQBGFRsh87PT5O3fL74qgq3zOxFUDe2LZ%2BTxiCtvYfICRekNvWp5UWmoXEKN5OuXvDOWU2zot7H%2FneLEDJTdxWZNzomBQY38C0E3TCz7U9c7qvyKn9OlFLr6yrAIMJxnm8Y2WEc2EoPnLnFXSqzkbIeea8AGG%2BhsyYkUaRz0IKnniPQzBfU0q89jfJLm80awegVuu2DNa%2BuxPIPnhubq958BwKO%2BsWbJsVr4i3DIluYGeX2%2BGAqpDrBacdYwrT2PsvrGOx1I2qr3PhIGu5t0NQkupSJsJvxIR1%2FOrG8nJ8hUnqsyCJfSgXV8CBPvbpMoJ7sul%2F6cNkL%2FO%2BD5p2fs0RPw19w1Qthe%2Fu56XgjTjKKjMO1%2Ft4THd5RMFhvHPStQ4hQDDqksKyXcAKspkOLJ8IHcjNiMDSeNNj6ejNm7CxMCU52ZSKtt1oGxIPMi%2BLGiDiEDJ3k5QtgdsZTDwq3Zi0wuqSSwAY6pgFuzyGmJcejEvwXcfZOMUeHgRixZd13iy89xuziNxuH4DzblcVMX4PrAdADY9FYSCa3a1VpBjHC46tGC19SU7gJ0Zjy4K%2Bp%2B%2FHbCWXVBNQgAhJA88b8W1Qwl6qvzLX4jNb%2FhgflcBuo0L6%2FtQS7MIeM0JBPgkUs5E3lqp9DbBFBff7pMXzceLgN%2B8E7%2FqCsW0q%2BBfCdkbRb5CntNLypvyLSd%2FDAccex&X-Amz-Signature=76825a606f7a283c16ff349140207fc752e5f830bf6d0f063f173a3999c09841&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LQG2TSR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIH%2BN%2FTykoWRBO6GCymQDukOUjVb7fz0Ue3SS53lNkWVKAiAMDvDoqWkCFnj%2FLK60H00qKm5tFAGWfB%2BoiyBaWDLgcCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7DpDD60NT8fkCjv1KtwDepnQ44fk7T47C6yi7AQT7scutrT10QqzPwDtMACAguJPNG9Ql0XOWIz%2BjR9P2JP3Dr4JccCZ8%2F5Z9Cs0YHbhEGZ5XWv%2BbyhT5AT21Hjm6C0fctI8suySpxOCB364n4eoxaqLht1mOIZSMnhAFsKvfdqbhZ0TNpP8rLgXpoQBGFRsh87PT5O3fL74qgq3zOxFUDe2LZ%2BTxiCtvYfICRekNvWp5UWmoXEKN5OuXvDOWU2zot7H%2FneLEDJTdxWZNzomBQY38C0E3TCz7U9c7qvyKn9OlFLr6yrAIMJxnm8Y2WEc2EoPnLnFXSqzkbIeea8AGG%2BhsyYkUaRz0IKnniPQzBfU0q89jfJLm80awegVuu2DNa%2BuxPIPnhubq958BwKO%2BsWbJsVr4i3DIluYGeX2%2BGAqpDrBacdYwrT2PsvrGOx1I2qr3PhIGu5t0NQkupSJsJvxIR1%2FOrG8nJ8hUnqsyCJfSgXV8CBPvbpMoJ7sul%2F6cNkL%2FO%2BD5p2fs0RPw19w1Qthe%2Fu56XgjTjKKjMO1%2Ft4THd5RMFhvHPStQ4hQDDqksKyXcAKspkOLJ8IHcjNiMDSeNNj6ejNm7CxMCU52ZSKtt1oGxIPMi%2BLGiDiEDJ3k5QtgdsZTDwq3Zi0wuqSSwAY6pgFuzyGmJcejEvwXcfZOMUeHgRixZd13iy89xuziNxuH4DzblcVMX4PrAdADY9FYSCa3a1VpBjHC46tGC19SU7gJ0Zjy4K%2Bp%2B%2FHbCWXVBNQgAhJA88b8W1Qwl6qvzLX4jNb%2FhgflcBuo0L6%2FtQS7MIeM0JBPgkUs5E3lqp9DbBFBff7pMXzceLgN%2B8E7%2FqCsW0q%2BBfCdkbRb5CntNLypvyLSd%2FDAccex&X-Amz-Signature=a7dced3fd7bc265ca257ced0f5fc31553b8f441188524e0f7d45bfc4e8d71762&X-Amz-SignedHeaders=host&x-id=GetObject)

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
