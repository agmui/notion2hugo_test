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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGV35AHQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2hYznkdCM1st5Y0h4OuuctoTahV3629kJgo%2B0%2FqJR0AiEA3Zw9SAI4dchMrZqrGkk67o8zxQGfAoAbivt4gOMQRhwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJJ0BGPBDA7SFAgGqircA4QTI%2FIRIFnhM55OtX2c2SrKVm8wleQR6RBqd1E6o2WGqnRpQwhBeQZ05n2m%2FpKUaoo8TUI%2FoxrGePghU0HmcJvBhxq31YgJ5q69YnAEbWlkdikg9Zs35tJj5h7oQClJ5dvPjoUvqvi17runvRjbply0kH3sFN%2BhSYYHHIUvYTfAIWTG0J29MneUQY6OaWErNhgYg3%2FC5SsvriG1JY1ryE3%2Bt1WH8%2FOgxMFDomu7%2Bst45ul3nIF3652rPuIx93n6spjLO4nuwX5g%2BFbUV3ZMwPC8bcWBP53q0Lc29yaarmtBmY1TwrGyN9SYeCSdjmsIkwrDvp74hkB5cpMwmYMTqf4PF1J%2FGM0KJBi9rg1m%2Bk9modFvecdr365SS8eEVJ6A2ikRIl8UixPWOlHQrS6I3of5tI%2BR0zHuy4RSSTvzv7bcgl4p%2FyLPkgt7szJqm3dRBipKfwQYGWtoqbXNt4FGI5d6he2BimX0nFPDy9CXse387aElWoOygRI4BFzJIrLsWpHlV38qQja1RPmtef%2B1H3RwLKSr8kmhKap%2Fkp3jJCOKswqo%2BPrCDJ1JrkHtscq86kZ79y5gcNXhKOir1StLw6LOGjRcpE7wmmo3vlCT4Xo151VOzNxkKXZcm7YCMPmimb8GOqUBY4PVRQrKiyXOLmCI0%2B5ofZ4Ek6mt8Nqg9d%2FlSW2bQUTtyJKM3QGKZd5nYF%2FxVnQVKJjn%2FEDSDnnHnWma21Pyzw82itCJtKn5UxzdPoqogjOsl7s%2B8Ye5q72oGpMroUq4j8WIkcKJwIxhhD%2Bi6tMV0MJ%2FBncFOZEjrJq3v4VsLMJ%2BsuRhTmdQ99NIyJ0RUH0%2BGTtK67%2F69XpKl%2FFBWCEfX3ZlxjtL&X-Amz-Signature=3005af31c66b792f3c5d125b34e5bdf3e738636a561174758ae862738c945c49&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGV35AHQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2hYznkdCM1st5Y0h4OuuctoTahV3629kJgo%2B0%2FqJR0AiEA3Zw9SAI4dchMrZqrGkk67o8zxQGfAoAbivt4gOMQRhwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJJ0BGPBDA7SFAgGqircA4QTI%2FIRIFnhM55OtX2c2SrKVm8wleQR6RBqd1E6o2WGqnRpQwhBeQZ05n2m%2FpKUaoo8TUI%2FoxrGePghU0HmcJvBhxq31YgJ5q69YnAEbWlkdikg9Zs35tJj5h7oQClJ5dvPjoUvqvi17runvRjbply0kH3sFN%2BhSYYHHIUvYTfAIWTG0J29MneUQY6OaWErNhgYg3%2FC5SsvriG1JY1ryE3%2Bt1WH8%2FOgxMFDomu7%2Bst45ul3nIF3652rPuIx93n6spjLO4nuwX5g%2BFbUV3ZMwPC8bcWBP53q0Lc29yaarmtBmY1TwrGyN9SYeCSdjmsIkwrDvp74hkB5cpMwmYMTqf4PF1J%2FGM0KJBi9rg1m%2Bk9modFvecdr365SS8eEVJ6A2ikRIl8UixPWOlHQrS6I3of5tI%2BR0zHuy4RSSTvzv7bcgl4p%2FyLPkgt7szJqm3dRBipKfwQYGWtoqbXNt4FGI5d6he2BimX0nFPDy9CXse387aElWoOygRI4BFzJIrLsWpHlV38qQja1RPmtef%2B1H3RwLKSr8kmhKap%2Fkp3jJCOKswqo%2BPrCDJ1JrkHtscq86kZ79y5gcNXhKOir1StLw6LOGjRcpE7wmmo3vlCT4Xo151VOzNxkKXZcm7YCMPmimb8GOqUBY4PVRQrKiyXOLmCI0%2B5ofZ4Ek6mt8Nqg9d%2FlSW2bQUTtyJKM3QGKZd5nYF%2FxVnQVKJjn%2FEDSDnnHnWma21Pyzw82itCJtKn5UxzdPoqogjOsl7s%2B8Ye5q72oGpMroUq4j8WIkcKJwIxhhD%2Bi6tMV0MJ%2FBncFOZEjrJq3v4VsLMJ%2BsuRhTmdQ99NIyJ0RUH0%2BGTtK67%2F69XpKl%2FFBWCEfX3ZlxjtL&X-Amz-Signature=eae9a26b5301ebea7a995fdca67cdf5e2e91d0b2676a80ed42e8431ce3187ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
