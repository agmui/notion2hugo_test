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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTF2J4DJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FU7AoD8gEDFZuQHjZGVmzVbU7Jqu7yGZvrm1NGQmudAiEAkHratGNYJ1oTlEnLyA53X%2Bl9smIAIHd0bP%2BldtLFPesqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjby5kDoAloA%2BPQryrcA257AhZa2yHoeotYyrFwsgT%2FB%2F%2FCUS%2FPhVgX%2BbGPb54d%2FxBomPHw5CybcBOnKW6xEYPEDTIHfcJ5of5UaTp3UawnF2SDZfbCRqeRBmuxJGQ2FqUqdQFCD2oZfBhZ9yLS793vlxRy75S1yxV3l8srDH5Fzy%2BBSt3FAldG7n%2FgBA9a07FDLYFimteCDDTm%2F8e%2F7xPl5nOnfiIoGcxSy%2FiC%2F%2BuGSOnJdeZmpAquKDy6WMhYAmhMxFsBsRzPkbLYdH4kEU6%2BOa8V5ZTOS%2B7WxkgPykojvuHv6anSbXQt%2Fn4MYFbXxUL3LUQh%2FXESkXkURsdiWWCMBbJ2dGORP%2BChFME6rKQxdSuA%2BCsOGjPG7kJOBu7hPtOxjsaHbt00Tv0FYhVaH%2F%2Ff3CZ11wIMMmZiokr0EhYxOAAOOfzZRViXJEXIjMO4%2BmFX2Miq3AccXq8z3Qi%2BIjP9YbH4ElkodmyCUlUzZ1zli6zD2qm0TDxiEL11fWbzZmn3ATnc4xl63CNrfcQW3aDboTyi%2F9OKv%2FngJtphk5cQyYAvDVWSpnLK553V5Ux0a1%2BRrexYJ6DFGzBKscBZjdH22LDBQPNPbnMn5ila%2BT9HdKZ2YpadsEhnSCNtHyXuc3yKQ%2F3%2BchfkZ0LgMLX4kL4GOqUBOWPsob7HRbKo13wF66UMq15nAPGHb9NWF6b4LVm7Bo5BJXXN4QCc9aaFC%2BLDtbjEUtE4ECHQTA5cg1qa%2BxYNiCiIhifplB3htI86ByyFf9BU8tvKHX7UuvqQYbOkZg7LgDNIMPPZ%2BeBhyH8oQAJacGpuZGJeqIQamRBcyxSvNLojci%2BrFLhq80TfICPlsdWOBS2WpO3ZSuFXruryoALxH2v8A2GP&X-Amz-Signature=94a46bb011162fdc753fd51afa0477ed34680140427f7561c1d92b6bd8262f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTF2J4DJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FU7AoD8gEDFZuQHjZGVmzVbU7Jqu7yGZvrm1NGQmudAiEAkHratGNYJ1oTlEnLyA53X%2Bl9smIAIHd0bP%2BldtLFPesqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjby5kDoAloA%2BPQryrcA257AhZa2yHoeotYyrFwsgT%2FB%2F%2FCUS%2FPhVgX%2BbGPb54d%2FxBomPHw5CybcBOnKW6xEYPEDTIHfcJ5of5UaTp3UawnF2SDZfbCRqeRBmuxJGQ2FqUqdQFCD2oZfBhZ9yLS793vlxRy75S1yxV3l8srDH5Fzy%2BBSt3FAldG7n%2FgBA9a07FDLYFimteCDDTm%2F8e%2F7xPl5nOnfiIoGcxSy%2FiC%2F%2BuGSOnJdeZmpAquKDy6WMhYAmhMxFsBsRzPkbLYdH4kEU6%2BOa8V5ZTOS%2B7WxkgPykojvuHv6anSbXQt%2Fn4MYFbXxUL3LUQh%2FXESkXkURsdiWWCMBbJ2dGORP%2BChFME6rKQxdSuA%2BCsOGjPG7kJOBu7hPtOxjsaHbt00Tv0FYhVaH%2F%2Ff3CZ11wIMMmZiokr0EhYxOAAOOfzZRViXJEXIjMO4%2BmFX2Miq3AccXq8z3Qi%2BIjP9YbH4ElkodmyCUlUzZ1zli6zD2qm0TDxiEL11fWbzZmn3ATnc4xl63CNrfcQW3aDboTyi%2F9OKv%2FngJtphk5cQyYAvDVWSpnLK553V5Ux0a1%2BRrexYJ6DFGzBKscBZjdH22LDBQPNPbnMn5ila%2BT9HdKZ2YpadsEhnSCNtHyXuc3yKQ%2F3%2BchfkZ0LgMLX4kL4GOqUBOWPsob7HRbKo13wF66UMq15nAPGHb9NWF6b4LVm7Bo5BJXXN4QCc9aaFC%2BLDtbjEUtE4ECHQTA5cg1qa%2BxYNiCiIhifplB3htI86ByyFf9BU8tvKHX7UuvqQYbOkZg7LgDNIMPPZ%2BeBhyH8oQAJacGpuZGJeqIQamRBcyxSvNLojci%2BrFLhq80TfICPlsdWOBS2WpO3ZSuFXruryoALxH2v8A2GP&X-Amz-Signature=0e5b5349d573031f01cd5915ccbe2732026efab58fae1f8d539067f11cab2b25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
