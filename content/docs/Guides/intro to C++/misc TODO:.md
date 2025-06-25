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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNFWSI4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBZeCYTRhAZLXlKZ1kP0wHQXYTVrtEVPbyEvHdJeLGevAiEAghnJOTYsXelbx%2BeZyM9iMsGO9azzxn2M2lBJHqbGp2cq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPDs8dJ8dtMcvV9ujyrcA2d4g7Qi3OHXka4NSFj9aKPHKVO7jGiAIiUZu7iUB887tlaCOJNQxgCBz6zvlMLu27phm0w%2FpenTMomwnOBRKWhZLMWQbyycF58aJ7FiczRHCwAKLfjlnppr3R2%2FhnKMPHI36nWhZven3qgzkawUF8LoeQALRogr0IRiBKfjbyr7RuiMtBCS8LICrhYslK7zIAiD6cLvHRbm89ZlcyRWm3oUcmuZPC7Gaey4kpzENnYafFrIApNnhSnNCTgiyCDlGgC6OdgQOLPV42ADKVqlq1q9A7VWItdpKL7HkslvM1ESF%2Fzw226QUHZEXUYKJwX9ABo9BBOoyyc2x00R73QouaC3Qw52gFwTR5%2FFEjZoQJiXglqO0fRtIFPngdYa6Moy4ZTw7Owdl1pPjkImp6mD3e0HzeznjNCFVnCXmKv63VFOe%2BrDR84zSloEwffkWEbSuX0kV4wnIJS%2F4BY0O7RFCNsZXGY7AZEfz%2Bv0pv7B0%2F62%2B8fwZ894SsjGxmSp6CHIiZZMdla6XHl8lIr5ZukWRe67W8kmiXPOGt0Y69mY4EslL3kAinHzB41sAXa2RBrByGfTgFE6y74PocCdfMW3uexNYeltrE6lssTMaw0SDnYVP3rPe52ZH2CKyEuxMLjD7cIGOqUBS0qlNiA1z7uxQmvJ%2FF%2BYbUlqrLYLWlEtt2dQA2lV17wg8K45ozdSJKBuxjZ4w0A2Pi%2BBUJIvMAdRTbringwhIfVz%2BjBsi2gsTx2IcD8MjeptjBy6QpexJtYDwezqiRbYNnIr9CjbLZOUs53fKjLyKljbaXLUC99xfSmW7J65Z6TXtsnxtP6i4kfACILK7LxEF9aeexCHAwLgIIvVJx1uPP6gWgf6&X-Amz-Signature=b9f0af215dd60612ee76f73d04e4fdc76d70060714e0dd4f9c4d0d86e9b523c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNFWSI4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBZeCYTRhAZLXlKZ1kP0wHQXYTVrtEVPbyEvHdJeLGevAiEAghnJOTYsXelbx%2BeZyM9iMsGO9azzxn2M2lBJHqbGp2cq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPDs8dJ8dtMcvV9ujyrcA2d4g7Qi3OHXka4NSFj9aKPHKVO7jGiAIiUZu7iUB887tlaCOJNQxgCBz6zvlMLu27phm0w%2FpenTMomwnOBRKWhZLMWQbyycF58aJ7FiczRHCwAKLfjlnppr3R2%2FhnKMPHI36nWhZven3qgzkawUF8LoeQALRogr0IRiBKfjbyr7RuiMtBCS8LICrhYslK7zIAiD6cLvHRbm89ZlcyRWm3oUcmuZPC7Gaey4kpzENnYafFrIApNnhSnNCTgiyCDlGgC6OdgQOLPV42ADKVqlq1q9A7VWItdpKL7HkslvM1ESF%2Fzw226QUHZEXUYKJwX9ABo9BBOoyyc2x00R73QouaC3Qw52gFwTR5%2FFEjZoQJiXglqO0fRtIFPngdYa6Moy4ZTw7Owdl1pPjkImp6mD3e0HzeznjNCFVnCXmKv63VFOe%2BrDR84zSloEwffkWEbSuX0kV4wnIJS%2F4BY0O7RFCNsZXGY7AZEfz%2Bv0pv7B0%2F62%2B8fwZ894SsjGxmSp6CHIiZZMdla6XHl8lIr5ZukWRe67W8kmiXPOGt0Y69mY4EslL3kAinHzB41sAXa2RBrByGfTgFE6y74PocCdfMW3uexNYeltrE6lssTMaw0SDnYVP3rPe52ZH2CKyEuxMLjD7cIGOqUBS0qlNiA1z7uxQmvJ%2FF%2BYbUlqrLYLWlEtt2dQA2lV17wg8K45ozdSJKBuxjZ4w0A2Pi%2BBUJIvMAdRTbringwhIfVz%2BjBsi2gsTx2IcD8MjeptjBy6QpexJtYDwezqiRbYNnIr9CjbLZOUs53fKjLyKljbaXLUC99xfSmW7J65Z6TXtsnxtP6i4kfACILK7LxEF9aeexCHAwLgIIvVJx1uPP6gWgf6&X-Amz-Signature=29ad8de94085868428d5ee520f9125e64c17829b6e8fa4ffc6ed124377635b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
