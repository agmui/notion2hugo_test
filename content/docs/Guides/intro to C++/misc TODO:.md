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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244B4BJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDoAEy46cnGGsW8pCn%2F%2BQ7BGXLROmXrHzMT4WSFXjEVugIgBaAnBLQnOZchMal9JAw%2FIao3WkEJqySkuwLkqQSfFggq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLGqR%2FmDcxw9gBQDXCrcA9LQKV0tYSlWYlq4fI4MmjpmUpdto7V3W40uoPSw7yMEGVpT1Bc4Hp%2BNZGR2NkcoQoaxQdFsg%2B%2FhUi4tsHS5M3KRdwGqIlFiKy5eJnzrbqDXwFE7XjGiDgbEu5gamBJ%2B%2B5QnY%2BTsyRE0KIpA2e34%2BryxMqCFrRsH55BNDd9lFtADXZOzuS24vq%2FxMsi1SPyRTNHcSy4QQm%2FXiu6FmtruoaxHVlylpW8CJUowVDV8Bda1PGvDAA63ZZAjRChUPtXp%2BgkLRi1U1olIgg0ntHJNaqkoye0c5229p118XJ2Tq2zwJxJeCUd2T8ctFF0xBGuMv6TGgWmIy7BQXCcanieWJWSSV3DQsSi%2F9KJRu8SKsXQneOYQR%2B5FoSw%2BAhpVgj2yJnXJ2sicHf9l4lqjVg4tx7xCWA5Y5d3lXdNjreZU6D2KW%2FF4hIcSdJJxEx8d1KCCxqMdr0qPNgqZU40Lb5wMO2jgm2oFi9BNtBp%2FD4KZZI2E8QW%2FN3ItP8GoU96VvEoH5mtiPAq4NMqbagNlYte%2By%2FjQqXibNoKcd3JXSbGacPsoeGn4INH0mhVhsKVxDmSGQLNIELFyo6QWm5sO4%2FZosp%2FeNXAKFvD55UL8qxuG5fvO%2FqKMTBsN8YAPzFbjMO%2FYw70GOqUB89J0aRUOSmxGvum6ch19i0OeMpU8tdt86we8HtGm1oGZ4NRxOlHyaIIp0ee9X0CA9eBSPTYTFHG%2F51oAnwD%2F8eN30jJch1mxzcyh3cdhBUOgXDo4G3QDlEPQNvW%2Bs%2BntTndU0zVSnqfG3srV7ConwUGohGDE8tGzQg8mQO4ZreTHVmyPxx2Ux8rg2Rl5aR4pu%2FsiP5W0plQMYdKCheD9Bnyoebx4&X-Amz-Signature=a3bef2638fec800b5a5cd1a26cbee8545254ce5cc085622eafdd1ac45c2a09e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244B4BJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDoAEy46cnGGsW8pCn%2F%2BQ7BGXLROmXrHzMT4WSFXjEVugIgBaAnBLQnOZchMal9JAw%2FIao3WkEJqySkuwLkqQSfFggq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLGqR%2FmDcxw9gBQDXCrcA9LQKV0tYSlWYlq4fI4MmjpmUpdto7V3W40uoPSw7yMEGVpT1Bc4Hp%2BNZGR2NkcoQoaxQdFsg%2B%2FhUi4tsHS5M3KRdwGqIlFiKy5eJnzrbqDXwFE7XjGiDgbEu5gamBJ%2B%2B5QnY%2BTsyRE0KIpA2e34%2BryxMqCFrRsH55BNDd9lFtADXZOzuS24vq%2FxMsi1SPyRTNHcSy4QQm%2FXiu6FmtruoaxHVlylpW8CJUowVDV8Bda1PGvDAA63ZZAjRChUPtXp%2BgkLRi1U1olIgg0ntHJNaqkoye0c5229p118XJ2Tq2zwJxJeCUd2T8ctFF0xBGuMv6TGgWmIy7BQXCcanieWJWSSV3DQsSi%2F9KJRu8SKsXQneOYQR%2B5FoSw%2BAhpVgj2yJnXJ2sicHf9l4lqjVg4tx7xCWA5Y5d3lXdNjreZU6D2KW%2FF4hIcSdJJxEx8d1KCCxqMdr0qPNgqZU40Lb5wMO2jgm2oFi9BNtBp%2FD4KZZI2E8QW%2FN3ItP8GoU96VvEoH5mtiPAq4NMqbagNlYte%2By%2FjQqXibNoKcd3JXSbGacPsoeGn4INH0mhVhsKVxDmSGQLNIELFyo6QWm5sO4%2FZosp%2FeNXAKFvD55UL8qxuG5fvO%2FqKMTBsN8YAPzFbjMO%2FYw70GOqUB89J0aRUOSmxGvum6ch19i0OeMpU8tdt86we8HtGm1oGZ4NRxOlHyaIIp0ee9X0CA9eBSPTYTFHG%2F51oAnwD%2F8eN30jJch1mxzcyh3cdhBUOgXDo4G3QDlEPQNvW%2Bs%2BntTndU0zVSnqfG3srV7ConwUGohGDE8tGzQg8mQO4ZreTHVmyPxx2Ux8rg2Rl5aR4pu%2FsiP5W0plQMYdKCheD9Bnyoebx4&X-Amz-Signature=8e769336fc7381faebcc6d22140190f50d98b78e225af62c404a398e9a1c9ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
