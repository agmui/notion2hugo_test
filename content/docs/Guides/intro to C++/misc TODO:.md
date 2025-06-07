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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EDB6KU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDZhl1laEt7FG0z0wNeOk5We0V989M1vy0UOnB9uTcVAIgILfrD9lce6kC0gBND4oeOsgIa6YtkS7hGlsb%2FPt%2FfNoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHsiJ5%2BBvy9YJJoC1yrcAxRMYAKSzCbSd%2ByYDkk5QkWSYCkn0EsU9VVzRHcIt8kv25K8R6hgSQ3IS%2BpwNxvKHEKCR%2BbdECm2pbd5Lgbv%2BWxrFYT%2FbpkglCk3dh42s4Tj8SZKD38nITZLCxYsavQI59UcpIbXPoTm4YNlOqF1E7eoieKZBk5XTsTyM7yAoyWrd3tYFCmnqJRt1OBoraewMxizQbq0or25orGfBG74JlhrT41U2KV8Zgaydd1jegm8pjwEzmd4b1%2BvQBsMjiPdwbB26avoppVwqVq8XPWJaG%2Fj7RjxmDvJ0fmTCfI2yYUiCFBD6Typ2KGS5qNaWJRYECgHI6xijoe%2FTXYRgWz9au0nJ9tio6odoOS1MXE8A%2FDNv%2B2GG0ELscTzb2y5q8MvlxhkIBlKtuwODQMTbUp4rZXLeSatqTlPhszBCxgaoaMfShbhKI5Vqk72vOpGo4jjAH9yoIG4fDySTv3keF2FzY1oEXwalT21BZaGfTDVXIsHyzmIrrQYrenyrYJYHz6MWPs6VDiHq9ygvIjDiijKrfb1p2ZAt0qDu5RHGdtjtiSpdDkoZJJ1Q2ckjjj3NuYs6EU16ADej%2BKfxad%2BrGfVbiCeeQpdaLaWo0Qdd9q9XDSF9FUN1WucJohLP6UlMPqAkcIGOqUByEl%2BIsMphosb7v%2BcrgxLwVJoewP8lyw1V5Le08VdLCQoE3dnt7liBhenTwp6WGFv6QNG%2BiBZHjiQhvS9s46i%2F8kf6K2UDvSJKc5DJzvHpUiVMFflYc%2FkCt7EXsq9e2VJtbvxyaO8%2BwPuD7zSBxtatFICJAZXo%2Bho0PZh6SXm3TN%2Fgrl740IDhgYL3mpYV5Z2leH%2FRvp9vvLnqxnmOIcoodvlwPst&X-Amz-Signature=82b0246b82143cdbdc5a8c2619a03eb0c2a5fa60014035e368ea46c1f010b63f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EDB6KU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDZhl1laEt7FG0z0wNeOk5We0V989M1vy0UOnB9uTcVAIgILfrD9lce6kC0gBND4oeOsgIa6YtkS7hGlsb%2FPt%2FfNoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHsiJ5%2BBvy9YJJoC1yrcAxRMYAKSzCbSd%2ByYDkk5QkWSYCkn0EsU9VVzRHcIt8kv25K8R6hgSQ3IS%2BpwNxvKHEKCR%2BbdECm2pbd5Lgbv%2BWxrFYT%2FbpkglCk3dh42s4Tj8SZKD38nITZLCxYsavQI59UcpIbXPoTm4YNlOqF1E7eoieKZBk5XTsTyM7yAoyWrd3tYFCmnqJRt1OBoraewMxizQbq0or25orGfBG74JlhrT41U2KV8Zgaydd1jegm8pjwEzmd4b1%2BvQBsMjiPdwbB26avoppVwqVq8XPWJaG%2Fj7RjxmDvJ0fmTCfI2yYUiCFBD6Typ2KGS5qNaWJRYECgHI6xijoe%2FTXYRgWz9au0nJ9tio6odoOS1MXE8A%2FDNv%2B2GG0ELscTzb2y5q8MvlxhkIBlKtuwODQMTbUp4rZXLeSatqTlPhszBCxgaoaMfShbhKI5Vqk72vOpGo4jjAH9yoIG4fDySTv3keF2FzY1oEXwalT21BZaGfTDVXIsHyzmIrrQYrenyrYJYHz6MWPs6VDiHq9ygvIjDiijKrfb1p2ZAt0qDu5RHGdtjtiSpdDkoZJJ1Q2ckjjj3NuYs6EU16ADej%2BKfxad%2BrGfVbiCeeQpdaLaWo0Qdd9q9XDSF9FUN1WucJohLP6UlMPqAkcIGOqUByEl%2BIsMphosb7v%2BcrgxLwVJoewP8lyw1V5Le08VdLCQoE3dnt7liBhenTwp6WGFv6QNG%2BiBZHjiQhvS9s46i%2F8kf6K2UDvSJKc5DJzvHpUiVMFflYc%2FkCt7EXsq9e2VJtbvxyaO8%2BwPuD7zSBxtatFICJAZXo%2Bho0PZh6SXm3TN%2Fgrl740IDhgYL3mpYV5Z2leH%2FRvp9vvLnqxnmOIcoodvlwPst&X-Amz-Signature=b6d19123b7953a8202e82fe2ead400c8fd541ff6b1eaec82df4ff9cac084c067&X-Amz-SignedHeaders=host&x-id=GetObject)

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
