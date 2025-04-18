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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RAAX32%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO8pCMgcE4o0VBdC98rJTcu8LlajUga3dOeJVlWS%2BobAiEAr04N0Gyjanp2BjslEez3VJXTIBbc4eQdGerS8wAT8CYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNUUDgbWd3ErOGStOircA06E9nEQDtziYPYpex7oGjWfX4AwKMbLLl%2BhyZCbIIpfWHnRwB8nzoLoNEJqBLhZYMazufeKf3vy2OF1KCKUyfaMXu0UfVlGaoPmCMP7Ep7kk8dURidpjrE3X%2BBSS3A8BkPJhxYc7TSaQW43detxLhrG4yeEtLoG27l7xo7W0tQyNtx8cLUy1anJeKlh2fA68NgrhXvI3pCvYN%2BfgRB9a7t6qgw6o5cGOZ4h7mHCi3TvvNHxIduGlzkPRrd0yOaNq%2F8rvAKWpsSFRTw%2FQLENb0dSB%2FdNQEG7%2Bhe9r2YwarZGdWdxrkUh32O4DsoU0os0a5n%2FT9PcrRj7UrI8IUv7sytQMTnSXkn10fzUm9XA3OMxLPP4hxauOyI%2BXTynk6u5cVB1EyOSshgvkfVZUIMec4%2Ba7xkhoIKHr8t0lXVJV0n2jmlDfLYmMDTr80g30GoLxj65UEINOhpUb9xu6U%2Bf7%2B8ZAchM7qXZn2nyP5wVisPm2x3YerQaMiuXFpIU%2FkHp5P7sBMVbizVZL0ik2mpv0GBnjPw%2FepvAJUO5xc1%2B77nSP%2BMvvTpkgsKuB%2BcZ%2FB%2B1j1ze1HXMTyjsIB3Mf54DhflygvmQGrlxfE27vQleBYUE7mX7gjelHqmMU4uaMM6SiMAGOqUBd5QraC%2Bf7TNu4h1ujq57c1xlXW9u5Ka7GbEMAStFsBCnUi9OUBYSHsNC0e4Ko0i1XLLggQWrvqe9dFRxOi4kTySDoZCVq6MwqNA8l36pg4gzuASg3y2NPyoDh2nD35iRB%2FsAkIXeINCHnXHwpmiebnFM85XPFmY7AeqvcTUWQOGwAvrGdBOnlfPo9qntsrfOXQN9eqS9TwUGSLk%2Ba5eOn6AY50LS&X-Amz-Signature=2a35cb363034747e66dbc14b84b3a2ed7ee76e50bd9354f9a791f4b7be23dcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647RAAX32%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO8pCMgcE4o0VBdC98rJTcu8LlajUga3dOeJVlWS%2BobAiEAr04N0Gyjanp2BjslEez3VJXTIBbc4eQdGerS8wAT8CYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNUUDgbWd3ErOGStOircA06E9nEQDtziYPYpex7oGjWfX4AwKMbLLl%2BhyZCbIIpfWHnRwB8nzoLoNEJqBLhZYMazufeKf3vy2OF1KCKUyfaMXu0UfVlGaoPmCMP7Ep7kk8dURidpjrE3X%2BBSS3A8BkPJhxYc7TSaQW43detxLhrG4yeEtLoG27l7xo7W0tQyNtx8cLUy1anJeKlh2fA68NgrhXvI3pCvYN%2BfgRB9a7t6qgw6o5cGOZ4h7mHCi3TvvNHxIduGlzkPRrd0yOaNq%2F8rvAKWpsSFRTw%2FQLENb0dSB%2FdNQEG7%2Bhe9r2YwarZGdWdxrkUh32O4DsoU0os0a5n%2FT9PcrRj7UrI8IUv7sytQMTnSXkn10fzUm9XA3OMxLPP4hxauOyI%2BXTynk6u5cVB1EyOSshgvkfVZUIMec4%2Ba7xkhoIKHr8t0lXVJV0n2jmlDfLYmMDTr80g30GoLxj65UEINOhpUb9xu6U%2Bf7%2B8ZAchM7qXZn2nyP5wVisPm2x3YerQaMiuXFpIU%2FkHp5P7sBMVbizVZL0ik2mpv0GBnjPw%2FepvAJUO5xc1%2B77nSP%2BMvvTpkgsKuB%2BcZ%2FB%2B1j1ze1HXMTyjsIB3Mf54DhflygvmQGrlxfE27vQleBYUE7mX7gjelHqmMU4uaMM6SiMAGOqUBd5QraC%2Bf7TNu4h1ujq57c1xlXW9u5Ka7GbEMAStFsBCnUi9OUBYSHsNC0e4Ko0i1XLLggQWrvqe9dFRxOi4kTySDoZCVq6MwqNA8l36pg4gzuASg3y2NPyoDh2nD35iRB%2FsAkIXeINCHnXHwpmiebnFM85XPFmY7AeqvcTUWQOGwAvrGdBOnlfPo9qntsrfOXQN9eqS9TwUGSLk%2Ba5eOn6AY50LS&X-Amz-Signature=d0bee3fbd63dc8e728b0582a1ee367ee1f7f1e1c9f4d9b399d4c1d23e9414c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
