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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPBOLXK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPjCc9Rz5fRR63VeZeV4jXRtyez5%2B6PsGVyflVMrLugIgFUVh%2BzdbXEmE2JQ19eJFXYtkLpCO5lA49IkOVYs6WYEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAB66xZxjMApk9ouyrcAwAxnj3UdOZQPyCieX7%2FflgZDy6iLzqdcEByG2MS4HhqvbpltMi8PMhoc4tAnkgIb4bOZj0GaqKl7S6JpFSz2V9UtLQPOc0yIyaTwPqLdgTPWGbDlHbYzs3fcx%2FzmdPDWHY25dPjqX3t1UOzeeohHZth0IxG8YU4NX17PLdhWigwFoRfPx3yY5gFR%2BPtvu2AoGH9bkULo5DfL1ymX50TuWglA0X9HM4fZbm4qvfCu3gRwH9gDG7mOgaODnB1sLByti8BfAMw4niU3qWMjBl%2FWQxfmXHqN3MdcnqlySVYB%2Bu6ZeXf3bkDm%2FCukIWbblQfCUqCakWH5haXuufgjLSZv57Clhn69D747OlGbQWZI8euzQ3KHGVATcZCedENoW8WuXlkxx8xc4x5GkNxMCJNp%2BBJbfC1%2F8Us4zzb1WGIyEd5n3fwqSyDdXWDu9sUD33utficSzOWQ8oDGvs6rZUwW3uFXelO%2FktuGR5UeOrAsk3y5Qv08uWV4WOvOddY10OY%2FI5Fef%2FAuB2i0IyCq2yP40TS50wTnqHkNsEJnRH4LciTm1slk3PoMkwBRDbiNmeLVyWy%2FdF%2FbF4ficwLPjoPbzGU2mFPQ9dMMaAc1YocXW5K8gNuXIHSd2SfiO0KMIfg9sAGOqUBVanliMRPSQ9%2FroSNGmojBWltMwfWovtMO0INdu%2FeoB0bo7l%2BxzdVc7HSWnz52UWnv30ZeYJSk4TNOFYq4L3jm8addIaEgAYbNNPnTvo%2BRU88ETXVYe3W%2FIRuMWXtbmF1qOnLgOexf461tKODQ0Tq%2B8Gix%2FTftDfWP2Dhj9Um%2BmjzhazGKa6JtC6tB%2BMHUrSVZsuEWVWcIAgMOHvPQpaEfjpJYZA7&X-Amz-Signature=8a25f47afc01107044b082888c608b3dbf622632c87dc325e904ba094fe2a47b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPBOLXK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPjCc9Rz5fRR63VeZeV4jXRtyez5%2B6PsGVyflVMrLugIgFUVh%2BzdbXEmE2JQ19eJFXYtkLpCO5lA49IkOVYs6WYEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAB66xZxjMApk9ouyrcAwAxnj3UdOZQPyCieX7%2FflgZDy6iLzqdcEByG2MS4HhqvbpltMi8PMhoc4tAnkgIb4bOZj0GaqKl7S6JpFSz2V9UtLQPOc0yIyaTwPqLdgTPWGbDlHbYzs3fcx%2FzmdPDWHY25dPjqX3t1UOzeeohHZth0IxG8YU4NX17PLdhWigwFoRfPx3yY5gFR%2BPtvu2AoGH9bkULo5DfL1ymX50TuWglA0X9HM4fZbm4qvfCu3gRwH9gDG7mOgaODnB1sLByti8BfAMw4niU3qWMjBl%2FWQxfmXHqN3MdcnqlySVYB%2Bu6ZeXf3bkDm%2FCukIWbblQfCUqCakWH5haXuufgjLSZv57Clhn69D747OlGbQWZI8euzQ3KHGVATcZCedENoW8WuXlkxx8xc4x5GkNxMCJNp%2BBJbfC1%2F8Us4zzb1WGIyEd5n3fwqSyDdXWDu9sUD33utficSzOWQ8oDGvs6rZUwW3uFXelO%2FktuGR5UeOrAsk3y5Qv08uWV4WOvOddY10OY%2FI5Fef%2FAuB2i0IyCq2yP40TS50wTnqHkNsEJnRH4LciTm1slk3PoMkwBRDbiNmeLVyWy%2FdF%2FbF4ficwLPjoPbzGU2mFPQ9dMMaAc1YocXW5K8gNuXIHSd2SfiO0KMIfg9sAGOqUBVanliMRPSQ9%2FroSNGmojBWltMwfWovtMO0INdu%2FeoB0bo7l%2BxzdVc7HSWnz52UWnv30ZeYJSk4TNOFYq4L3jm8addIaEgAYbNNPnTvo%2BRU88ETXVYe3W%2FIRuMWXtbmF1qOnLgOexf461tKODQ0Tq%2B8Gix%2FTftDfWP2Dhj9Um%2BmjzhazGKa6JtC6tB%2BMHUrSVZsuEWVWcIAgMOHvPQpaEfjpJYZA7&X-Amz-Signature=6e73eb8f5a9178dcc71a310d060c7658cc63f7400105c9a9ab02df73b850b78c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
