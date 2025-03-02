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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPAL23Q%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEERgH%2Fk1hhlKcYFk79nbDraPzU5no%2F5nrJZ8HKGiHgIgEerI1BFeiF%2F7plL6jg2cWsBZHt7LsKjQQzAF4GcuzqcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt6BY06SeOEOAQuvircAwtHGGfVYMO%2FCjr1%2BYU%2FR6FqDjkb3aGuAHzJjfmt9tAs8YXtUL06VoZMg5bHibPUerp%2BuVMI0ZEDsvhZXXhaKoeUNe1K3zknvmK3wOl5loDDj3fYMVF3BYufdM9eU%2FSPeIwv7qduRhppoUNth%2B%2BUZc14OhcudK%2FnNq05UeygWRz7qPeX0XIa3trLSBPLRgEb5JedHGcA8yxA4hPKfhQN5yOSq7decKX56oJPtOQS8tEleiCIa2h6DuYEjRJzYN5X5o%2FnaXSgdaX0a389Z0Rh2vGPbfv4h3BAum263ctFDRm%2B7ZzF%2FGSzTDZ2JxDOX8QEIFi%2B8CcW6o1gLOycmghZJnm8oc8ssQTWDr3kkoxKCDayUTIvP9iHfz98FgiGyWLd%2FjAap0T8e9VdMVCZfGqH%2B%2FY6PmjcTnMnXkHVINtoHH0Dfyb5n5UhBlbEJ7jbczvfZ%2FSa7fibnVNqCrxcZRugclreozG83xlWmipadbog7nbIu1IbJ1H6ft4%2BFxw9N4fckAYhnxTAzF5UD7wPOBhUVSieFPkjSOLW%2BKro2CQ9OIuvZrhaPc%2Bc46mAGQT1lnbs3YdhJ6Va7ZI6QHUvxzWrsoCCqNXEgloh4TfkhTMFQteAgKr8tjqn8HZVLAZZMO73kL4GOqUBjbblZAUE7g7kMe0D0gAJJ8mD6SLJvUxKrM6v%2BuRHq7d%2BYQGnWQjIeAu3H6D7J9HBJU2fVtAr38UhFU61Or9aQ1U9FK2tWkVaCqQfzfSCTSulbrgeC4wcbaUwW4G9w5wv11se75g7HTGaTPZk%2FMfluxf7weKV0aJrLoDQNd7a%2BggOj%2FqGwV5ezeJZ6%2FDDDkpOlf7ZSZ136hAfUawAKAXeihTdoykw&X-Amz-Signature=d7e780b3c940601e51d64071c18c62d0223f9e097f7025184d98bd9c7f562694&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPAL23Q%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTEERgH%2Fk1hhlKcYFk79nbDraPzU5no%2F5nrJZ8HKGiHgIgEerI1BFeiF%2F7plL6jg2cWsBZHt7LsKjQQzAF4GcuzqcqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt6BY06SeOEOAQuvircAwtHGGfVYMO%2FCjr1%2BYU%2FR6FqDjkb3aGuAHzJjfmt9tAs8YXtUL06VoZMg5bHibPUerp%2BuVMI0ZEDsvhZXXhaKoeUNe1K3zknvmK3wOl5loDDj3fYMVF3BYufdM9eU%2FSPeIwv7qduRhppoUNth%2B%2BUZc14OhcudK%2FnNq05UeygWRz7qPeX0XIa3trLSBPLRgEb5JedHGcA8yxA4hPKfhQN5yOSq7decKX56oJPtOQS8tEleiCIa2h6DuYEjRJzYN5X5o%2FnaXSgdaX0a389Z0Rh2vGPbfv4h3BAum263ctFDRm%2B7ZzF%2FGSzTDZ2JxDOX8QEIFi%2B8CcW6o1gLOycmghZJnm8oc8ssQTWDr3kkoxKCDayUTIvP9iHfz98FgiGyWLd%2FjAap0T8e9VdMVCZfGqH%2B%2FY6PmjcTnMnXkHVINtoHH0Dfyb5n5UhBlbEJ7jbczvfZ%2FSa7fibnVNqCrxcZRugclreozG83xlWmipadbog7nbIu1IbJ1H6ft4%2BFxw9N4fckAYhnxTAzF5UD7wPOBhUVSieFPkjSOLW%2BKro2CQ9OIuvZrhaPc%2Bc46mAGQT1lnbs3YdhJ6Va7ZI6QHUvxzWrsoCCqNXEgloh4TfkhTMFQteAgKr8tjqn8HZVLAZZMO73kL4GOqUBjbblZAUE7g7kMe0D0gAJJ8mD6SLJvUxKrM6v%2BuRHq7d%2BYQGnWQjIeAu3H6D7J9HBJU2fVtAr38UhFU61Or9aQ1U9FK2tWkVaCqQfzfSCTSulbrgeC4wcbaUwW4G9w5wv11se75g7HTGaTPZk%2FMfluxf7weKV0aJrLoDQNd7a%2BggOj%2FqGwV5ezeJZ6%2FDDDkpOlf7ZSZ136hAfUawAKAXeihTdoykw&X-Amz-Signature=92b42e85b4a0ef472366b880420657e090f20ec33b3c6edc90c4626112203434&X-Amz-SignedHeaders=host&x-id=GetObject)

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
