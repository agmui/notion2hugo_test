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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOTGGTY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8sz9K8MGG5QKkh7O2sQ06or3fURQS98sy0jo7sGzFcAiEA3xKhiiw4VO9e9LpV1p439x%2BMLefStFAMqVBTB6s99VUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGAhMg20iREc1RfVkSrcA6RzGCzgXDtr%2FGVYBcwgio%2BOB9qYb%2FWsrUs4X5FFXR%2Fg5OYhK3zegRSlmz%2BX1AER7%2BeE1L6d7j6ZS0VMMAolhpb0TauCbCZjt%2Biy1nw78LsgSrGUVK7INhNMRsI1x8WDIlkrsMoagk3g50BbnwtIwxotOCYFjbr0TWICGj5oHbU2E9bgq9FYQROHKt0ZrRHlW3SizsRy7Lu96iwyyukXPSDIJmD9a26BuIKJ79Ungzi1deFO688lB1tQ2mjKB051kDaglBzR%2FyGqEyi9dd8MGp9dAD0ezfMdCEcOnrWOzYbtWe82k3GYk6ioJ3pHO24ohz6SVhYcLiSeHKmU7r8cvr11vs9E%2FdC%2Bh4Nzvx%2BCWO8EskL%2BT%2BlaFtVOU2nWVouKIyPHGMWjPxVvD4OUps5AnV9Ep3F8%2Bf7V2XPmTFTg1JbVtHYGNpxU9A16JFhaAvqvip34qaL2cTY7PvHd2%2BZTkBbKe5y3RuFp2wRsYPdWtu9%2FWHkQIzRzbUPoog%2BXJ6WsPZy%2FwBjrZozZ6vVlfpi4sfStjPyYgdbgGlsX17xdVoPZuFDlyDPHIZC%2F9gx%2FPuUA4GraUIz3Za6DZAWYAM3zq5qVzXiuP7tDn%2F5wGIaxigXNav3OZ8kuCOGh1KUXMOvG3MEGOqUBM09IGh9TLiQr3koE%2BrbBG%2BvxGCXbTcgFGdrfSuevxYpkoJEqOpMb1DENnnqVsjBHlMONfKwiB3%2Bsn12o11U0xflGDEFoE%2BFseQTXQ%2BqwWj1stSekSoMUjx63jQ2A4XHbStChmBujWCbkuOBMHGNO1IfAG8g4ndVHmXlso%2FZ0KFAKxVx0GGG9YAgy%2FI5uCl7a3M4XGAjwHvRCwVrSs3vPaousdSl%2B&X-Amz-Signature=7d153403cb55f27fa0bbc55358c51c7f328531b31d5e642bcd01eb196f94c1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOTGGTY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8sz9K8MGG5QKkh7O2sQ06or3fURQS98sy0jo7sGzFcAiEA3xKhiiw4VO9e9LpV1p439x%2BMLefStFAMqVBTB6s99VUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGAhMg20iREc1RfVkSrcA6RzGCzgXDtr%2FGVYBcwgio%2BOB9qYb%2FWsrUs4X5FFXR%2Fg5OYhK3zegRSlmz%2BX1AER7%2BeE1L6d7j6ZS0VMMAolhpb0TauCbCZjt%2Biy1nw78LsgSrGUVK7INhNMRsI1x8WDIlkrsMoagk3g50BbnwtIwxotOCYFjbr0TWICGj5oHbU2E9bgq9FYQROHKt0ZrRHlW3SizsRy7Lu96iwyyukXPSDIJmD9a26BuIKJ79Ungzi1deFO688lB1tQ2mjKB051kDaglBzR%2FyGqEyi9dd8MGp9dAD0ezfMdCEcOnrWOzYbtWe82k3GYk6ioJ3pHO24ohz6SVhYcLiSeHKmU7r8cvr11vs9E%2FdC%2Bh4Nzvx%2BCWO8EskL%2BT%2BlaFtVOU2nWVouKIyPHGMWjPxVvD4OUps5AnV9Ep3F8%2Bf7V2XPmTFTg1JbVtHYGNpxU9A16JFhaAvqvip34qaL2cTY7PvHd2%2BZTkBbKe5y3RuFp2wRsYPdWtu9%2FWHkQIzRzbUPoog%2BXJ6WsPZy%2FwBjrZozZ6vVlfpi4sfStjPyYgdbgGlsX17xdVoPZuFDlyDPHIZC%2F9gx%2FPuUA4GraUIz3Za6DZAWYAM3zq5qVzXiuP7tDn%2F5wGIaxigXNav3OZ8kuCOGh1KUXMOvG3MEGOqUBM09IGh9TLiQr3koE%2BrbBG%2BvxGCXbTcgFGdrfSuevxYpkoJEqOpMb1DENnnqVsjBHlMONfKwiB3%2Bsn12o11U0xflGDEFoE%2BFseQTXQ%2BqwWj1stSekSoMUjx63jQ2A4XHbStChmBujWCbkuOBMHGNO1IfAG8g4ndVHmXlso%2FZ0KFAKxVx0GGG9YAgy%2FI5uCl7a3M4XGAjwHvRCwVrSs3vPaousdSl%2B&X-Amz-Signature=2954b76c9d3f00ae5d544dabf7dcdd0979b96385a45368d2385d23b6fe77b45f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
