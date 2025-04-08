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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SII67A6R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDNVzdgTQo4Idw2uq%2BH9JPFFkHpgmstabH7foUGOaxJyAIgP%2BDAWFKKVoBckRhq4YRUjp6m29HO44JSXzkyfgGOxHwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPeg1PypBTEaxtaK6ircA9DlM4NbSTo9aotyPY6DkUnM4X3IMchXuVASTpTjaFqdQThI1h6tqXrPUIbL%2BPOXQuSLfsDRkyQrcc7v3kbjrbwTyF7IYdRq8M%2FKF%2BgJ2KzNq%2BGqAm8YnVUrLo%2BvWHwDiy5yQDCPACkBAH%2BkoqB5ej0e4jTnJJpMXWb%2FGdiynJva325fr2QfYCu2qivEV9gcm%2B9JtzVP7th6tym%2BngV3WfutWtC%2FVe%2B7jDYZTPL%2BHbzHa55G7DDzhH116eatn34g2sFbgNdZYxE7lZJhNFzQJQesMHog0ZXMKWD7oiRJUqZcegGeh8otVJJatcNJ9AeBuzP%2B0x50JVn%2FwEgbJtXNMlpO6vhqr0HLHw%2BoRsJT5oMiR3Y7XwuKnY2fCypxPAbJWg4t9cNFCrzC8KUSNKDBXK3B6KZTLrPqKk%2FfmHb77uEpryAKcR7WxfKRlVEJlnkHhqRWTBRFGpk6WvMVusPq8c%2BOs2s3XNm2onCnLpePsxS9Syedpv1kp8ZV%2FdBiw6A8jVzSn3lhD6Xv07rVE%2FZB0BSQeWAbIobC9BtLEpXgQ0GP3J6%2Bms4iz8ymO30MgYJ1hRxdLeAWAoK7kV%2Bry30EpZqcRAWiwHIq6e3GKF4y%2BrcbQpwGbTdGBVMSSvj1MMXA1r8GOqUBluaUOoYhTkyVv8R9u0JiZx5R7JcPl8K5Jcw%2FJQY%2B1fYjFrRXU0mxtqOQlhXyuYcJGJ8%2B9r9pQNW%2FumKrJ0FUzOYvjiEtXQvxXjjO2eEYqumIhYzDj9zuIntsDMW4H%2FkQGXiBLgUqVaVEfIihvBPgfS0JzqRsbyLXtTXTwrOspvPcGcbal4KHd4pUMVxOynAR4J3NHO%2FcCrhdXaEILbTUmvAuTxfE&X-Amz-Signature=f1bc1eaee0b4d4e41631b1d3b05382f361603063b9bc01b73ab56451d2d7b0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SII67A6R%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDNVzdgTQo4Idw2uq%2BH9JPFFkHpgmstabH7foUGOaxJyAIgP%2BDAWFKKVoBckRhq4YRUjp6m29HO44JSXzkyfgGOxHwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPeg1PypBTEaxtaK6ircA9DlM4NbSTo9aotyPY6DkUnM4X3IMchXuVASTpTjaFqdQThI1h6tqXrPUIbL%2BPOXQuSLfsDRkyQrcc7v3kbjrbwTyF7IYdRq8M%2FKF%2BgJ2KzNq%2BGqAm8YnVUrLo%2BvWHwDiy5yQDCPACkBAH%2BkoqB5ej0e4jTnJJpMXWb%2FGdiynJva325fr2QfYCu2qivEV9gcm%2B9JtzVP7th6tym%2BngV3WfutWtC%2FVe%2B7jDYZTPL%2BHbzHa55G7DDzhH116eatn34g2sFbgNdZYxE7lZJhNFzQJQesMHog0ZXMKWD7oiRJUqZcegGeh8otVJJatcNJ9AeBuzP%2B0x50JVn%2FwEgbJtXNMlpO6vhqr0HLHw%2BoRsJT5oMiR3Y7XwuKnY2fCypxPAbJWg4t9cNFCrzC8KUSNKDBXK3B6KZTLrPqKk%2FfmHb77uEpryAKcR7WxfKRlVEJlnkHhqRWTBRFGpk6WvMVusPq8c%2BOs2s3XNm2onCnLpePsxS9Syedpv1kp8ZV%2FdBiw6A8jVzSn3lhD6Xv07rVE%2FZB0BSQeWAbIobC9BtLEpXgQ0GP3J6%2Bms4iz8ymO30MgYJ1hRxdLeAWAoK7kV%2Bry30EpZqcRAWiwHIq6e3GKF4y%2BrcbQpwGbTdGBVMSSvj1MMXA1r8GOqUBluaUOoYhTkyVv8R9u0JiZx5R7JcPl8K5Jcw%2FJQY%2B1fYjFrRXU0mxtqOQlhXyuYcJGJ8%2B9r9pQNW%2FumKrJ0FUzOYvjiEtXQvxXjjO2eEYqumIhYzDj9zuIntsDMW4H%2FkQGXiBLgUqVaVEfIihvBPgfS0JzqRsbyLXtTXTwrOspvPcGcbal4KHd4pUMVxOynAR4J3NHO%2FcCrhdXaEILbTUmvAuTxfE&X-Amz-Signature=8f2d4b6d1aa7be886e394534775e008bd2021a4256025b58c55ba588bd66068e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
