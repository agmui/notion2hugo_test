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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLP2Y54%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEpoCIvFQ89UXWJ3vnaQKwEa9c0RAjm208MIrjOOshM0AiEAt2W%2B75%2FHluErbra6lbZinaPDWhBeGSXq%2FkqVgSEFhG8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiUFz5scCYc8RaqHircAwtIwHLZ5psitKTUvaHF48kPllRs2GRyorvQlZ%2FFyEtfvwTQ0ieMhGvQANTewlP5wv5bRX7zEGvV4b5ahjkH2Fg34oIp6rMwHepvvGvZUHqaBCYEMjsFNsAWLa0fyppOMGyjNFgqFu7TQZEWY2s%2BTHZytkHk8M7zIPlstpH60Rpc3r57a966bx31opDfX%2BJZeMoD59TWXj4jOdjjvMOF6OCWARvBg7%2Bse9IWyZ14yj8beV5EGQyLeKR4ydjzzM5hgKJ5hvcvW5HzLs3qvJD7beM7XzZ0fVEQvE4hbfkTTsnTnAQa0EXPqBRTBuJYXRma%2Fi89jMzi%2BWk1%2F69%2FMqRqzBzNjqg1uAooJTlIshHdDQnEOJM%2Bs8N0WQGgEQmVZWuiMQRd85mMxQ8bzx1rrelnb%2BhpwdXfhyf8M7PZc8aO%2F4VFotfWVuEFqDverWv%2FGHTGep9Q%2BAeAFY5RpmuFGn5xosoii%2Fy4oCyc11GpTZgKAyk7Uj1qVZ3t%2FxpiB3jLODG3L%2Fwcf6ueZ3uvEOChm%2BSRihPqGbAWx6VbNqr9gnRLID%2FXH3aMvwXCoK7aSkiE%2BVJgOYlh%2F5miKtYMzGpdooIhlvtyi9TCSMhl99uV3djS%2BgmQFEwAbmzWFX1extoNMLSVjL4GOqUBA4kL2PIHqe7DJMexk1SXTYr2382UHIDB4RJMDd33NbCpK4CLNYaaztesmEMYr2j2BVwfKCF6n4uwA8ZQ2AuNp1JGDW1yzkmfybXa5Ga%2Bm4mHGcY85%2B5%2BTBu0iMc78rAhhgSizcMeOE2CU7LhQboO1sd7gEZqOgZ8AuiQO7t1Xhmp17zY%2FOGCkobaoPYkhBk8Ub%2FMchLmW%2FXivDYfgYH%2BT3E4GH3V&X-Amz-Signature=d1ba84497dcc49338159883604861862c743a4372fd75089f0b5701b38f0a996&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLP2Y54%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEpoCIvFQ89UXWJ3vnaQKwEa9c0RAjm208MIrjOOshM0AiEAt2W%2B75%2FHluErbra6lbZinaPDWhBeGSXq%2FkqVgSEFhG8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiUFz5scCYc8RaqHircAwtIwHLZ5psitKTUvaHF48kPllRs2GRyorvQlZ%2FFyEtfvwTQ0ieMhGvQANTewlP5wv5bRX7zEGvV4b5ahjkH2Fg34oIp6rMwHepvvGvZUHqaBCYEMjsFNsAWLa0fyppOMGyjNFgqFu7TQZEWY2s%2BTHZytkHk8M7zIPlstpH60Rpc3r57a966bx31opDfX%2BJZeMoD59TWXj4jOdjjvMOF6OCWARvBg7%2Bse9IWyZ14yj8beV5EGQyLeKR4ydjzzM5hgKJ5hvcvW5HzLs3qvJD7beM7XzZ0fVEQvE4hbfkTTsnTnAQa0EXPqBRTBuJYXRma%2Fi89jMzi%2BWk1%2F69%2FMqRqzBzNjqg1uAooJTlIshHdDQnEOJM%2Bs8N0WQGgEQmVZWuiMQRd85mMxQ8bzx1rrelnb%2BhpwdXfhyf8M7PZc8aO%2F4VFotfWVuEFqDverWv%2FGHTGep9Q%2BAeAFY5RpmuFGn5xosoii%2Fy4oCyc11GpTZgKAyk7Uj1qVZ3t%2FxpiB3jLODG3L%2Fwcf6ueZ3uvEOChm%2BSRihPqGbAWx6VbNqr9gnRLID%2FXH3aMvwXCoK7aSkiE%2BVJgOYlh%2F5miKtYMzGpdooIhlvtyi9TCSMhl99uV3djS%2BgmQFEwAbmzWFX1extoNMLSVjL4GOqUBA4kL2PIHqe7DJMexk1SXTYr2382UHIDB4RJMDd33NbCpK4CLNYaaztesmEMYr2j2BVwfKCF6n4uwA8ZQ2AuNp1JGDW1yzkmfybXa5Ga%2Bm4mHGcY85%2B5%2BTBu0iMc78rAhhgSizcMeOE2CU7LhQboO1sd7gEZqOgZ8AuiQO7t1Xhmp17zY%2FOGCkobaoPYkhBk8Ub%2FMchLmW%2FXivDYfgYH%2BT3E4GH3V&X-Amz-Signature=f8c5e33d0abcb05bae082a433cc77a56b4afb8c42027388acb75f4c1306035cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
