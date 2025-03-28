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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2AI5YZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMdtjuqL8VbEFi%2FnAsNRsvR3evodbuo7xna1JSf1qAuAiAWaXp2x1K%2BHMUHOMEm6qOEEsfxsiLajns9HI2shivgZCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRsnWdYxb1Ce%2BUhkBKtwDg9oYr2AG6xmLwN6gXaY1QSxvLnKwt4e9tIEhm2RaIW1EfT2NvEgMJzrTYm9%2Bv%2FfoRJkoXg%2FWRz6ClmxAh4Avynyyp3UZtPUS2onbn6iFCU9DKiTZrAf7%2B8LPxc9aGT2fyK3UZDEugI9qXGTltJCOXd4NNsCLt6QZpitP54v90Rj5P%2BRXOP6yTiMFoKO7IDM%2FLHzqkNEDZU%2FSXMrXLhjls7fX8geMQhAJjnicpmL05LvNRIejnXk8fzmQtChyoZvlFl2pxykd1AZtFJga0HwHtv5Z3390YHSNERAEByCJjkDoG%2BbbgKYX3XiCM%2FxSwlS8Vz96BG8PJF06RvZ9JeUx6u0Z9Ny1TDewYPxRkNBulhfcxkg3VE3dhxJy%2FnZCq7%2FBH%2F%2BVzQpwnpKOEe%2FOUUK86HhsoSsC7nP6S52x6ElkO%2Fk6xfeiHbJeyicTKr%2Fh15leNfUfdMHVLo2T1Dr%2FOjL%2FyHFK94GilTVfaQZ56C28ckvDdkZUKLUesgYgV20glwOBTU4cyTD0UMsoAKqaHKNooHF%2Bb0Qu1qamSm7i8%2B5yDlNtJR3hsQUfp2vX25OsuxUlGh0nYZzPYIE3Z9Qm23wNICjTSkLK3jy4JmIx9E8NF4zTcvT%2BzozJ7M8NzlwwtY6cvwY6pgGN7wEjTCAJLiASpx7cQBh4ZdisAistYE1%2BY0upWmzqMk3K2qHMCx1LM1k55fWk7i3YAeIbo8JcENvZQ%2BrNmuN%2Bl%2FOfrVJydWsEhq1UeqvS1lkgsGDWJYS0YuAgyVfA7Vv%2FkaS5%2FRi3Zl8Uci9wAPf1dq8YZ%2FDn%2BkYYKuyqga65sJFinGVtmLmtK6L5%2Fxzvs1YIShdv5dDg4911F9XVZ8uSp%2BD6eVPU&X-Amz-Signature=706a32c7db84c3d8a33119f4e91ff1f31eb86e58e33ad22a412e0b9e05e7765d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2AI5YZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMdtjuqL8VbEFi%2FnAsNRsvR3evodbuo7xna1JSf1qAuAiAWaXp2x1K%2BHMUHOMEm6qOEEsfxsiLajns9HI2shivgZCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRsnWdYxb1Ce%2BUhkBKtwDg9oYr2AG6xmLwN6gXaY1QSxvLnKwt4e9tIEhm2RaIW1EfT2NvEgMJzrTYm9%2Bv%2FfoRJkoXg%2FWRz6ClmxAh4Avynyyp3UZtPUS2onbn6iFCU9DKiTZrAf7%2B8LPxc9aGT2fyK3UZDEugI9qXGTltJCOXd4NNsCLt6QZpitP54v90Rj5P%2BRXOP6yTiMFoKO7IDM%2FLHzqkNEDZU%2FSXMrXLhjls7fX8geMQhAJjnicpmL05LvNRIejnXk8fzmQtChyoZvlFl2pxykd1AZtFJga0HwHtv5Z3390YHSNERAEByCJjkDoG%2BbbgKYX3XiCM%2FxSwlS8Vz96BG8PJF06RvZ9JeUx6u0Z9Ny1TDewYPxRkNBulhfcxkg3VE3dhxJy%2FnZCq7%2FBH%2F%2BVzQpwnpKOEe%2FOUUK86HhsoSsC7nP6S52x6ElkO%2Fk6xfeiHbJeyicTKr%2Fh15leNfUfdMHVLo2T1Dr%2FOjL%2FyHFK94GilTVfaQZ56C28ckvDdkZUKLUesgYgV20glwOBTU4cyTD0UMsoAKqaHKNooHF%2Bb0Qu1qamSm7i8%2B5yDlNtJR3hsQUfp2vX25OsuxUlGh0nYZzPYIE3Z9Qm23wNICjTSkLK3jy4JmIx9E8NF4zTcvT%2BzozJ7M8NzlwwtY6cvwY6pgGN7wEjTCAJLiASpx7cQBh4ZdisAistYE1%2BY0upWmzqMk3K2qHMCx1LM1k55fWk7i3YAeIbo8JcENvZQ%2BrNmuN%2Bl%2FOfrVJydWsEhq1UeqvS1lkgsGDWJYS0YuAgyVfA7Vv%2FkaS5%2FRi3Zl8Uci9wAPf1dq8YZ%2FDn%2BkYYKuyqga65sJFinGVtmLmtK6L5%2Fxzvs1YIShdv5dDg4911F9XVZ8uSp%2BD6eVPU&X-Amz-Signature=178e41c168d242f8825bb5cd6dc289660295a763f201500e946a47300a86fcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
