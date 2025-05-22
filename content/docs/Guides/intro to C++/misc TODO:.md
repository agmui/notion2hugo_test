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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UFQECV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDnhRpl7VD3GR6iDNhigjGFWeEyWGxEcR3cmzHxnBaUPAIhAPJ6UbC%2F5c58SrDAFsrOjO1Hu4vM6EMs6bdXXwsBvA3YKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOl07t2FKkf%2BPlvJEq3AMuP5qR%2F%2BnjjM8q1vn8wO6uh%2FvLWKH%2B3PWA%2B2Ps9gNBJ1WcWpCxuyLHc1V8LMl8HdjdSnHEEd39qxBYQOB6yHEHMky2AdsEF%2FdYUcD3v%2BI3XgCUao1epjZE5czapCBM070SwsBbnb55cS7fT1Xh%2FUnjx379bmNCRY7qh9yvSUgSlZc%2FNKGlf%2FPD1bJpGRdzsdEQsE05I5zWx8t3LbAGpv9TuIxgr%2F4gVfwZF7wj6sW1syA9zOeIOa6yTxmdVENihTokDbcSvvPTI4D5eB0iHVxqzJJAiSpTaOF32phm7D%2BYn1ica9cW113WbvdXZIVqp1n04YdIGfIuJUxFOyAPhnnEPkZ5ar1lY330EkvkNFahm6ghQl0bu8SVB%2FX2Q5ZYcwZO8rpt%2B2rAEtRomxswklPUt86N5z%2F6D8ttN0mRppqhG6D%2BKMWpLau4fbKHoPZUcMfpBHQcb6eW3bKsqluMp2l3hTufGLItoyBZSlO%2BV2Pf1TYkSkUVpR0NGKv2%2FzkZo7Pgsym%2Bo1AX%2B3dkXU%2FX6NPHAfBNHjkScPh0VPnuSprdRQNNCd9tdQo8%2Bzmn3QOVS4GgrYsM%2FTyOzWBN71pv%2F%2B1qy5Xguj07DMtexxcpmAhI2Y678NcyxL8R2WEW7DCwx7vBBjqkAYENeIhYjb%2BKOIM%2BfRLAsXJzi6GrSu52YWtZLb22oSCqS%2BwZpSkqVtw6L2tPxW%2FgmM5vQT%2BzAiJ26hZFDqDP3oVB5m35%2FOnC8gi%2FDswKNKNQ2MmJugCGCAsMEjgh35Gjzzuztz0yzqT%2FU5pCqkxIDrbAkRwIiyLJL7oQTrtZvXMlcARwuZUSxsnjjq%2F0drwaaUMZK7qNqNqpd0bdYmyqvaIWRFgD&X-Amz-Signature=a930441128c0b3597a9732098ccad8a43d55f6cd0754e7e00d26fe1babc32d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UFQECV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDnhRpl7VD3GR6iDNhigjGFWeEyWGxEcR3cmzHxnBaUPAIhAPJ6UbC%2F5c58SrDAFsrOjO1Hu4vM6EMs6bdXXwsBvA3YKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOl07t2FKkf%2BPlvJEq3AMuP5qR%2F%2BnjjM8q1vn8wO6uh%2FvLWKH%2B3PWA%2B2Ps9gNBJ1WcWpCxuyLHc1V8LMl8HdjdSnHEEd39qxBYQOB6yHEHMky2AdsEF%2FdYUcD3v%2BI3XgCUao1epjZE5czapCBM070SwsBbnb55cS7fT1Xh%2FUnjx379bmNCRY7qh9yvSUgSlZc%2FNKGlf%2FPD1bJpGRdzsdEQsE05I5zWx8t3LbAGpv9TuIxgr%2F4gVfwZF7wj6sW1syA9zOeIOa6yTxmdVENihTokDbcSvvPTI4D5eB0iHVxqzJJAiSpTaOF32phm7D%2BYn1ica9cW113WbvdXZIVqp1n04YdIGfIuJUxFOyAPhnnEPkZ5ar1lY330EkvkNFahm6ghQl0bu8SVB%2FX2Q5ZYcwZO8rpt%2B2rAEtRomxswklPUt86N5z%2F6D8ttN0mRppqhG6D%2BKMWpLau4fbKHoPZUcMfpBHQcb6eW3bKsqluMp2l3hTufGLItoyBZSlO%2BV2Pf1TYkSkUVpR0NGKv2%2FzkZo7Pgsym%2Bo1AX%2B3dkXU%2FX6NPHAfBNHjkScPh0VPnuSprdRQNNCd9tdQo8%2Bzmn3QOVS4GgrYsM%2FTyOzWBN71pv%2F%2B1qy5Xguj07DMtexxcpmAhI2Y678NcyxL8R2WEW7DCwx7vBBjqkAYENeIhYjb%2BKOIM%2BfRLAsXJzi6GrSu52YWtZLb22oSCqS%2BwZpSkqVtw6L2tPxW%2FgmM5vQT%2BzAiJ26hZFDqDP3oVB5m35%2FOnC8gi%2FDswKNKNQ2MmJugCGCAsMEjgh35Gjzzuztz0yzqT%2FU5pCqkxIDrbAkRwIiyLJL7oQTrtZvXMlcARwuZUSxsnjjq%2F0drwaaUMZK7qNqNqpd0bdYmyqvaIWRFgD&X-Amz-Signature=8497cf897888ac32f6868fe3fc8e7d37e641f070bd2235eaee7ca4e1c3b2ce0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
