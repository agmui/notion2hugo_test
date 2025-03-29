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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH6FTGR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCdc6UFg%2F0bXYpMreA53eDgfo3UivcPouLmPlVmN6XjKwIgZ5gxgKKECLa7dt6e%2FH4zLaPTyLB79dpf31eUZNecnAMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKvGqgTwGjObWYtI9ircA22cloiC4PEr%2BZwFdDBpJardB%2BKh%2FZs1p3UN8jujNF2FWv7TNif%2FnNLNI9NC2CEoT27xr0aaC7jbYew9G%2BaqEKythpBiLyaeCGeTCzdZrTfJLq1cOmm6UBcK%2BE4PfI5r7P7DxeTCt98zQ2vqZEoxFiJr9CX5NRNjl96kWG49MXf3e2MW5I%2ByMf4YHlSHX8yNXpphZ%2FNkerZH5kU6TaQkFFIsBK2njynCOfVAgq19CDkr0V3pHVjbU%2F%2BKsXrX9LL4ndR4Rd2OTe4o%2BA6bWJshplSvIOaRzO8AhwLiMrcEUQujhHfCAiB7uFNHMzoyHYVmpKJAGUJjMvJKDTYit8cgsBunPEatr04bJqOiBFOkpXa2LkCIct98dVyHBKREeEKoKV%2FBwnQQO0CcD8AmtbzNmvzahFMx%2BeYkSQZhQzvqcHRn1%2Fge%2F%2FMghMSxKPpS%2BGnSGjKhzqLZRqWGIZVUw9gGqqPRorys%2BTRsrfEaE06ITyCkPKNpVNC3DjQq8ujho11chliFNKp9OTsOEX8jErFS8bh%2FShdPywYV2SpXctWNEedB5olPvm0aUH%2Bm01N%2F5IJsH1Q9DKmD7%2B5sydrJdePQ7IsfZWACP%2FptmM3THzTj4zUAAcYwGK2kVBXmho9CMOTcob8GOqUB9bO7LYYxOdA0HJkzLTWCDdM02U2qRr63lhCHtSvtYWR%2Fh5TZDOEUERcVEtWdbWiht1iYvc%2B0nYWZVrQj8CZsWfp74KxJwNPmaHx4Cmv%2FrxjKxHhXkP6kjpAPFbHXpDjDJzoLuveJektl8vl0%2FCEtL%2BjDlQ%2FjA4GI4I5T8JOZfpQVTs779j6D7XiZPrUI97Jmd57fK0SXk7zI5cPWXNXy4rnC1qCT&X-Amz-Signature=bb5babb2e9d17466288b6c8119666216230f6a99239e5d1667162337580d8c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH6FTGR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCdc6UFg%2F0bXYpMreA53eDgfo3UivcPouLmPlVmN6XjKwIgZ5gxgKKECLa7dt6e%2FH4zLaPTyLB79dpf31eUZNecnAMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKvGqgTwGjObWYtI9ircA22cloiC4PEr%2BZwFdDBpJardB%2BKh%2FZs1p3UN8jujNF2FWv7TNif%2FnNLNI9NC2CEoT27xr0aaC7jbYew9G%2BaqEKythpBiLyaeCGeTCzdZrTfJLq1cOmm6UBcK%2BE4PfI5r7P7DxeTCt98zQ2vqZEoxFiJr9CX5NRNjl96kWG49MXf3e2MW5I%2ByMf4YHlSHX8yNXpphZ%2FNkerZH5kU6TaQkFFIsBK2njynCOfVAgq19CDkr0V3pHVjbU%2F%2BKsXrX9LL4ndR4Rd2OTe4o%2BA6bWJshplSvIOaRzO8AhwLiMrcEUQujhHfCAiB7uFNHMzoyHYVmpKJAGUJjMvJKDTYit8cgsBunPEatr04bJqOiBFOkpXa2LkCIct98dVyHBKREeEKoKV%2FBwnQQO0CcD8AmtbzNmvzahFMx%2BeYkSQZhQzvqcHRn1%2Fge%2F%2FMghMSxKPpS%2BGnSGjKhzqLZRqWGIZVUw9gGqqPRorys%2BTRsrfEaE06ITyCkPKNpVNC3DjQq8ujho11chliFNKp9OTsOEX8jErFS8bh%2FShdPywYV2SpXctWNEedB5olPvm0aUH%2Bm01N%2F5IJsH1Q9DKmD7%2B5sydrJdePQ7IsfZWACP%2FptmM3THzTj4zUAAcYwGK2kVBXmho9CMOTcob8GOqUB9bO7LYYxOdA0HJkzLTWCDdM02U2qRr63lhCHtSvtYWR%2Fh5TZDOEUERcVEtWdbWiht1iYvc%2B0nYWZVrQj8CZsWfp74KxJwNPmaHx4Cmv%2FrxjKxHhXkP6kjpAPFbHXpDjDJzoLuveJektl8vl0%2FCEtL%2BjDlQ%2FjA4GI4I5T8JOZfpQVTs779j6D7XiZPrUI97Jmd57fK0SXk7zI5cPWXNXy4rnC1qCT&X-Amz-Signature=5ae44eeb9f0fb01e5c5afee747353c5274be7ed3fc4ca7f9e800ed980eaed5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
