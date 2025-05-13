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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZZDUWDG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCzUhmhYKWhbSjhxaVQYNZApXSE56t7pW9Qa6Al2cUOHwIhAMlRFn6GWxHP6O5TwLihDl%2B%2F7vbh2e3GHGG3QtBBnp5cKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwT90beoTmX%2Bo6vqAq3AOqoW42TOmv%2BU7VNSTcG%2F7i%2F%2BFZKoDjx5vZzbM%2Fcl2GFmp74cVkfNoeokLdsjxzYgeh9bjdllJ8cZydHPzxI%2Bcl09zYeMcQy9l63MgAFxlrYelPCNLufIoQOtbsWX0xua4wnT%2BxMENZU8oVFS1jZf0CzWFlb5lxtiMD1mdMGZlIUC%2Fot9r9HDzOPEdnEMOSMN1uG29Oat8uqje7n%2B3qwsZAhcdY5r%2B21YCXmpBDmUHnOjOa92j9p1nz9vsXJyiCgZFlAdNBVNxRctInAz0q%2BDkOoAGYha9ji9p2RdPZ5%2F%2Fr5WA6jJf45JCo3UXFP4ZP7ug4d3yqP0mVyOQvoKvz%2B3oR7w8Ck2H4VD2VQcyxmTYI2PrWXbIle10bni100wHSTcDzd%2BRp4mIiVwVyA1v2bY8vnYmwdCCrXPmBu%2BRuw4mvMyVB4GPdO0%2BoWUJL8H4%2Bq09GSxyKq5uCCVN8ccSGlwCrU%2BjwK3TP64gMiSFcnkWzT0MTxwxOE1hWhDKxgSPf%2F9DAhnEk3PAOF%2FRCo3iqAKNUu1BcHXVcK4%2FJppMNGzVVu2a0cjZrWw9fyLD%2B2WveefFRpO%2BFr4a7GyusTzsdOkBYBYLWQ9XMrdipC%2FxnOtcvWKaI4r9jJw6ppTLnQDD12o7BBjqkAXW0LYhP2NFWdfKqZDqUIJAYu8yENxpXhXb5ofLNl%2FgjZiM04pLFtHMEPDN9os%2FqO7Rpwzm4jXo3v%2BwXvkg9MECjWNfMoeKFPdeD8mCJZMShjDIzq5DQzCVQOIRbNrBlaVDChIPb%2FVZrLaTt31B1wh%2FbfBKWopwhafmVY%2B5sdxDI9z%2FMebZHe00mnEa2I6hE9mAmyB6BfT4NlCA693PRWv5wgiSk&X-Amz-Signature=1f9526cc018b1ec54840cf9590c01a80be6802ddea6ac3d1dc756ff358c70bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZZDUWDG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCzUhmhYKWhbSjhxaVQYNZApXSE56t7pW9Qa6Al2cUOHwIhAMlRFn6GWxHP6O5TwLihDl%2B%2F7vbh2e3GHGG3QtBBnp5cKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwT90beoTmX%2Bo6vqAq3AOqoW42TOmv%2BU7VNSTcG%2F7i%2F%2BFZKoDjx5vZzbM%2Fcl2GFmp74cVkfNoeokLdsjxzYgeh9bjdllJ8cZydHPzxI%2Bcl09zYeMcQy9l63MgAFxlrYelPCNLufIoQOtbsWX0xua4wnT%2BxMENZU8oVFS1jZf0CzWFlb5lxtiMD1mdMGZlIUC%2Fot9r9HDzOPEdnEMOSMN1uG29Oat8uqje7n%2B3qwsZAhcdY5r%2B21YCXmpBDmUHnOjOa92j9p1nz9vsXJyiCgZFlAdNBVNxRctInAz0q%2BDkOoAGYha9ji9p2RdPZ5%2F%2Fr5WA6jJf45JCo3UXFP4ZP7ug4d3yqP0mVyOQvoKvz%2B3oR7w8Ck2H4VD2VQcyxmTYI2PrWXbIle10bni100wHSTcDzd%2BRp4mIiVwVyA1v2bY8vnYmwdCCrXPmBu%2BRuw4mvMyVB4GPdO0%2BoWUJL8H4%2Bq09GSxyKq5uCCVN8ccSGlwCrU%2BjwK3TP64gMiSFcnkWzT0MTxwxOE1hWhDKxgSPf%2F9DAhnEk3PAOF%2FRCo3iqAKNUu1BcHXVcK4%2FJppMNGzVVu2a0cjZrWw9fyLD%2B2WveefFRpO%2BFr4a7GyusTzsdOkBYBYLWQ9XMrdipC%2FxnOtcvWKaI4r9jJw6ppTLnQDD12o7BBjqkAXW0LYhP2NFWdfKqZDqUIJAYu8yENxpXhXb5ofLNl%2FgjZiM04pLFtHMEPDN9os%2FqO7Rpwzm4jXo3v%2BwXvkg9MECjWNfMoeKFPdeD8mCJZMShjDIzq5DQzCVQOIRbNrBlaVDChIPb%2FVZrLaTt31B1wh%2FbfBKWopwhafmVY%2B5sdxDI9z%2FMebZHe00mnEa2I6hE9mAmyB6BfT4NlCA693PRWv5wgiSk&X-Amz-Signature=7d50f370dead7eae379d8be74e910e490c63831c6a677af14a14fb144452ecb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
