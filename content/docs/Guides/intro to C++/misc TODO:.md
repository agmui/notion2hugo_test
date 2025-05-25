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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAXGRVU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDuDGM9AxUFbxMmuDGm7tiBtH%2FIH%2BdcgkUqw6%2FQ8%2B8%2B5AiEAia6YqMLZ%2FLWS2cAMElJ9%2F2sRzhdxEWUKSVd8RcjyL%2B8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBw4g%2FQpfh8fRhviSSrcAzuR%2Fe6ACq%2B1E8p%2BJF2HTZ33SLnKJvbNE7hYxQi9zNjYL3yjQzk6p575HBT10NIBIawPCu3Zlx2Rtn%2BGJZk3n1w3EpDRit1DhiUyLGcjnhNEtl2ZSRxIgS%2FZDtBpnMbk%2FXyX9ZVOKSp%2BKFsbbpCLYuOv%2FiK7K3eSxQVIgrQvIh9QONCPjyEKniJ3tOzBOp%2F9FYJUwtG5%2FIsYEJr0E3xRtwN7TDATcIaSUm%2FBGBQUrmeedGK5oqh%2Bx4CE6lmqGih%2FrTdYjLa%2BGq%2FVztE0aIGiUaIaHNFnR103U0s4x3802iA5QwE3CSL%2FkNKfR15K7mPqbtnxHFkK3QyJZ0GMuiIxutRQCA8fYfdlapli3AEIedwoFrSbV97hDRWMviKXe8yYfDRKsW5hkJNZIPE3PuCxwV8GFJNiCZfN9iUxC9vUbBgLYKMhH3artMP1IJgnLUAwcRxb8tRg3eU6gNq0AZAgrjzD4nAkObsVHnf%2BtXzQloHp0JIHlSIcVMGxCp9PvjPrsK%2FaadhLZ49WdyOtT9Cfe%2Fp7LEswuZ5q8BhfCRVUnA88fNDR%2ByA8mA6KEU%2FH1B%2BDo9mmQa1VpglFEdNLWP%2FmCYfDoNrPQ8FadqlI6LYO5iLadBVVJDKDNMu9QIYKMJP%2FzMEGOqUBFF1fs4YtwDY0lrG%2Fu%2FwuyBp8wME6n35h0kYyeQjqu%2Bylpe%2BBnks6qYEcIatKJBQpRpje7eMUrRoFumaXphQN2ag5qdXMc0RafGLHU7nNMIw5I9n88huIppLLpFaAIvHLrpRTrYlpw7%2FJAvvbN9niql%2F2Xr6tnnN7yE8u3ul7wXLaYPJJqviieY%2BuuyFYAQDzK2NSxYK6UsZ1ln7Z0RzVF3kE7QaA&X-Amz-Signature=26077dc95d60750b29b2e5be7cdb10890446b71202bfa6ae62476d664f23be93&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAXGRVU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDuDGM9AxUFbxMmuDGm7tiBtH%2FIH%2BdcgkUqw6%2FQ8%2B8%2B5AiEAia6YqMLZ%2FLWS2cAMElJ9%2F2sRzhdxEWUKSVd8RcjyL%2B8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBw4g%2FQpfh8fRhviSSrcAzuR%2Fe6ACq%2B1E8p%2BJF2HTZ33SLnKJvbNE7hYxQi9zNjYL3yjQzk6p575HBT10NIBIawPCu3Zlx2Rtn%2BGJZk3n1w3EpDRit1DhiUyLGcjnhNEtl2ZSRxIgS%2FZDtBpnMbk%2FXyX9ZVOKSp%2BKFsbbpCLYuOv%2FiK7K3eSxQVIgrQvIh9QONCPjyEKniJ3tOzBOp%2F9FYJUwtG5%2FIsYEJr0E3xRtwN7TDATcIaSUm%2FBGBQUrmeedGK5oqh%2Bx4CE6lmqGih%2FrTdYjLa%2BGq%2FVztE0aIGiUaIaHNFnR103U0s4x3802iA5QwE3CSL%2FkNKfR15K7mPqbtnxHFkK3QyJZ0GMuiIxutRQCA8fYfdlapli3AEIedwoFrSbV97hDRWMviKXe8yYfDRKsW5hkJNZIPE3PuCxwV8GFJNiCZfN9iUxC9vUbBgLYKMhH3artMP1IJgnLUAwcRxb8tRg3eU6gNq0AZAgrjzD4nAkObsVHnf%2BtXzQloHp0JIHlSIcVMGxCp9PvjPrsK%2FaadhLZ49WdyOtT9Cfe%2Fp7LEswuZ5q8BhfCRVUnA88fNDR%2ByA8mA6KEU%2FH1B%2BDo9mmQa1VpglFEdNLWP%2FmCYfDoNrPQ8FadqlI6LYO5iLadBVVJDKDNMu9QIYKMJP%2FzMEGOqUBFF1fs4YtwDY0lrG%2Fu%2FwuyBp8wME6n35h0kYyeQjqu%2Bylpe%2BBnks6qYEcIatKJBQpRpje7eMUrRoFumaXphQN2ag5qdXMc0RafGLHU7nNMIw5I9n88huIppLLpFaAIvHLrpRTrYlpw7%2FJAvvbN9niql%2F2Xr6tnnN7yE8u3ul7wXLaYPJJqviieY%2BuuyFYAQDzK2NSxYK6UsZ1ln7Z0RzVF3kE7QaA&X-Amz-Signature=8ecfb9abdf9f051edffc928e918c4235da9a44bffc4c0b953544631c2fd38aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
