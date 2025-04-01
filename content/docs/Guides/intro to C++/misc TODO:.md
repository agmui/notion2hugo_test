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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNVLT4I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCT16hYNiCVp0iFKkDwdyIKwWcAYHkNCMcB0wSAUReKqgIgQjuygLn%2F4R927Q4Oq6CZEJAQhFWJ8KoyJndCmmkmVnkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHye0JsXc%2Fyml1K1WCrcA90qAvPataSG8bvWE7vbcaqsDmXSb6rbhwFF1JzCVJWT3WZLkRAO%2FIlorTirBkuur3ofKHXDueptSuWyHvOtHGTkhpW6UC6NxjMyzzkrZqdza%2ByFY2s2OzkF5rNRTi49DJzOvCSgnyDxIka8B9nE4FUZmQFW8zxOpViWpMEXnsnmsQ%2BUhngnZhv%2FIrnoukFIXBZoO8kNqTJ%2Fi8hcSsLLFXqq88vSc1gWKxcCnYe0%2BszifJFKw7crgLwZ6UtYx3wUX3LBsi0Giv0xbsXnw8MzqCDYGm5hQVmhx9HiY4RNcXk0ngTOEJZGdGVX97d0p3N2Qzby36itY8jeL%2BV7UcuCVzl7judw5NBhtBlyefcTlAiDw8fuLeBGvnmnHC3MeVNzN%2BjY3r6TpvFJWYG6jWHllmbYa1c7tb8YvcAQq7RYo2%2F1YQwFBlVidheNzNuUo%2FVI645PiwhOTpf7WjN6GFTfQFiDgGCNN4nF66NBG5OuKdz%2BfqgxkXrV6Dg4DfIy8EFQ6Tk2DPpbbVwLx3IHyDeWuLH62CWzE%2BT2uxvr6yYtGfaUW6COZ4kpTlypyRW0me1JDJR1S%2BVardy85cxYYXw8OtyQbDxAlD7zGnkp40PZXLy2cDRIC5SzNFETvxukMOPWsL8GOqUBHwewUNFCBh7b0G9vNvE9Q5D8ZYJ%2BupqxRExybBhCnz3l9MIOPJvaw9GYBXWeYdllJrASzcYuD21jbk4yupbwrDIKvTmmY6ClUkyD15zeg1uSiG%2BZWLWos%2FAutkzPWrnWYeDekxU2DQ3Xq1j7doUg%2BHvvqBjV4LlfT99SiYX3jz1UfIte8by6e6phUREpArJBztqvbneSpn0%2FxZDFP5Q86fFXPvU3&X-Amz-Signature=a19d629674ccd232c1ae6f35369aa631ef68331ee21c0b4dd9b4e4ecdcadfe4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNVLT4I%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCT16hYNiCVp0iFKkDwdyIKwWcAYHkNCMcB0wSAUReKqgIgQjuygLn%2F4R927Q4Oq6CZEJAQhFWJ8KoyJndCmmkmVnkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHye0JsXc%2Fyml1K1WCrcA90qAvPataSG8bvWE7vbcaqsDmXSb6rbhwFF1JzCVJWT3WZLkRAO%2FIlorTirBkuur3ofKHXDueptSuWyHvOtHGTkhpW6UC6NxjMyzzkrZqdza%2ByFY2s2OzkF5rNRTi49DJzOvCSgnyDxIka8B9nE4FUZmQFW8zxOpViWpMEXnsnmsQ%2BUhngnZhv%2FIrnoukFIXBZoO8kNqTJ%2Fi8hcSsLLFXqq88vSc1gWKxcCnYe0%2BszifJFKw7crgLwZ6UtYx3wUX3LBsi0Giv0xbsXnw8MzqCDYGm5hQVmhx9HiY4RNcXk0ngTOEJZGdGVX97d0p3N2Qzby36itY8jeL%2BV7UcuCVzl7judw5NBhtBlyefcTlAiDw8fuLeBGvnmnHC3MeVNzN%2BjY3r6TpvFJWYG6jWHllmbYa1c7tb8YvcAQq7RYo2%2F1YQwFBlVidheNzNuUo%2FVI645PiwhOTpf7WjN6GFTfQFiDgGCNN4nF66NBG5OuKdz%2BfqgxkXrV6Dg4DfIy8EFQ6Tk2DPpbbVwLx3IHyDeWuLH62CWzE%2BT2uxvr6yYtGfaUW6COZ4kpTlypyRW0me1JDJR1S%2BVardy85cxYYXw8OtyQbDxAlD7zGnkp40PZXLy2cDRIC5SzNFETvxukMOPWsL8GOqUBHwewUNFCBh7b0G9vNvE9Q5D8ZYJ%2BupqxRExybBhCnz3l9MIOPJvaw9GYBXWeYdllJrASzcYuD21jbk4yupbwrDIKvTmmY6ClUkyD15zeg1uSiG%2BZWLWos%2FAutkzPWrnWYeDekxU2DQ3Xq1j7doUg%2BHvvqBjV4LlfT99SiYX3jz1UfIte8by6e6phUREpArJBztqvbneSpn0%2FxZDFP5Q86fFXPvU3&X-Amz-Signature=b86a2e22bb21b29e6074e42b06ec253fb5987cdece2f51fe5ff0ad442858ccff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
