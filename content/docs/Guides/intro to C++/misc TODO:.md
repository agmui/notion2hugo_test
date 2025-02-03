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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSZY4RV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQh%2FvJ%2BoRVEpaKXp6Fb%2FIgE4ON8PXcTY4q1%2BO1hVW6wIgcXPyeZbrEC2VnQoBlx67q24kuN6s0OBuml3Q6qC0Ti0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjop6CE4FTOmb5iGyrcA%2Bs%2FF4IN2xsZe3vqnIdNM3IoAFSNZim%2BUnSZXqxsOLCEgwhjdpXlsA8qKPd1TD03HSOxed0cxA7dCmeeVT6lBFZY9jmknJCBjlTGDGTJtXq3N5S9p3WEajPM0XYkkROfVjrSa%2FpXtPK3CKfI9brnIH3KwLh4BbRy0md%2Bm%2BxMBadXuOpTUVg7CO%2FnxUXG7SOlIDk7FPpBpWtpi8bP%2B7jsHsJtfAHuT%2FWjmGQM2zeUmv9GEMOcJ0gOlTguo564qE4qM3MQNK121PuVWpRLG1WkJ9ZjDYki%2FiqXQUSFjD0QGj6M1ql5B4cQ24aNEOAnWdogvCXcfuVNa1NK4pm7tnqyDKmA1dtYQolO2vcc%2F7oXsb6dsbSPurKQLXYOpKrtSBYsNxgxQyDZ8dJY9PHIb06%2FRAxsoe0TwxnN1j25Xp8oMuke2FgdesvhyaF7P8vY691yt8hM8UM2V%2FpaKxsgI1yVXqKi4weiLocnrM67Xo04y9ZEvDkF0w17TNgPNn9fvget7opOoTqo0id5JugCrXPGafDSkieJTcOXaY9TqvgUROrry9RwSgHWXWDM7u1hqwQsb06VzvNWfGBZWGhu6iJDxurrhPTRrPg5ZbtKZBiqPJzWk%2FjQ8F1269iGn9LrMKX0gb0GOqUBWTod1QiHEZ3g9rE%2BWeBZtrGPueEgJUpWnK%2FjgAT39nQ7fBOIgY%2FJ8Pu6Swnz3EgCQOrtBeVGjQ0xLCgEA98zttV21IduIf7BgBGfwyFD2y%2BQycYwiJXZH7uPKS71vhvGXdsGvsw7nH%2BYl5tX4zw0l5SB4vLMqP5hQHTnl9BBUsRoeVc47%2F6%2FI1p7g31wY6Ftq58qSUeBnIbkzhCuPv7p6a1Em%2Bs7&X-Amz-Signature=2997535a507cdb58de2c857fc0ad8433c07071b58abd439b0eef3b08809fc8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSZY4RV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuQh%2FvJ%2BoRVEpaKXp6Fb%2FIgE4ON8PXcTY4q1%2BO1hVW6wIgcXPyeZbrEC2VnQoBlx67q24kuN6s0OBuml3Q6qC0Ti0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBjop6CE4FTOmb5iGyrcA%2Bs%2FF4IN2xsZe3vqnIdNM3IoAFSNZim%2BUnSZXqxsOLCEgwhjdpXlsA8qKPd1TD03HSOxed0cxA7dCmeeVT6lBFZY9jmknJCBjlTGDGTJtXq3N5S9p3WEajPM0XYkkROfVjrSa%2FpXtPK3CKfI9brnIH3KwLh4BbRy0md%2Bm%2BxMBadXuOpTUVg7CO%2FnxUXG7SOlIDk7FPpBpWtpi8bP%2B7jsHsJtfAHuT%2FWjmGQM2zeUmv9GEMOcJ0gOlTguo564qE4qM3MQNK121PuVWpRLG1WkJ9ZjDYki%2FiqXQUSFjD0QGj6M1ql5B4cQ24aNEOAnWdogvCXcfuVNa1NK4pm7tnqyDKmA1dtYQolO2vcc%2F7oXsb6dsbSPurKQLXYOpKrtSBYsNxgxQyDZ8dJY9PHIb06%2FRAxsoe0TwxnN1j25Xp8oMuke2FgdesvhyaF7P8vY691yt8hM8UM2V%2FpaKxsgI1yVXqKi4weiLocnrM67Xo04y9ZEvDkF0w17TNgPNn9fvget7opOoTqo0id5JugCrXPGafDSkieJTcOXaY9TqvgUROrry9RwSgHWXWDM7u1hqwQsb06VzvNWfGBZWGhu6iJDxurrhPTRrPg5ZbtKZBiqPJzWk%2FjQ8F1269iGn9LrMKX0gb0GOqUBWTod1QiHEZ3g9rE%2BWeBZtrGPueEgJUpWnK%2FjgAT39nQ7fBOIgY%2FJ8Pu6Swnz3EgCQOrtBeVGjQ0xLCgEA98zttV21IduIf7BgBGfwyFD2y%2BQycYwiJXZH7uPKS71vhvGXdsGvsw7nH%2BYl5tX4zw0l5SB4vLMqP5hQHTnl9BBUsRoeVc47%2F6%2FI1p7g31wY6Ftq58qSUeBnIbkzhCuPv7p6a1Em%2Bs7&X-Amz-Signature=5e16f0daaa862d51f61e8d73d2da20b14be5e10b997c3da1996650d653d32c91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
