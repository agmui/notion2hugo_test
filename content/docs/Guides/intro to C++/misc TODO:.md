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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXILV6E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCID5Q5iLon%2BZNVBy54LEjU8XiETCZxNSBQTI6daA1kbxOAiEA%2F65yjV%2FHOiR6AEyAovZe9lllJ1di%2FKppy%2B3UfvDJiVYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDC8nLY30F9hJ3oAO4yrcAznZJvXn69f0c7uUhxU7UmmTI3WCtY%2BPk1kLvt1fb2APBIiCrdhHJ8LAcjeGqmwp7ribQ8nDOjxdB5P3fLYkzlvIxYPbCWmC3iJeITbzya7W0VaA0RCRzNvdV%2FEi%2FTbrg1dvvT2LqtLpDkXUP47pxgiumD5%2BoQz%2BFPQImN%2B1NpPBM0FlavRpatujEPJHBklxi1d%2BDP1vTV61aDXHI%2FX5XT9vvFDg9XXUK%2Fkz9DtDNmf1F1AwjjYSZ8MOxFO%2Fs%2BR4SKgqJtQToK0cvY%2Fj1fvJQeP%2BPKjqYMLt98mZaCrxhQIEPMeu%2Bzaa2incYH10wgPtg9x%2FDdc1hy9FwytZ8FmcoSL6bGOk8SOzpS%2F1FWnY8k5V1F5aKa56NvYwJ%2F%2Br57si38QNwEPVRBaALlx6P%2FzUMnsEYZwHML61J0a1qvXiABsv59r9VAMGi3qMmhVqjuIOTow0KfBFIkXNo7bBJFVW4PnTCJghLAgAe%2FyQFSt2XbR%2FuTmRZTuG%2BS9CY61edj%2BHg6nmuV41xsyqtW4h4FvjzGUQMzWqy45WI5NTmBXnQp3DoCo1BKYFH3rhGRnu2zvMsn%2BT7D73auJ9OJW8kPID24wVheR8QY%2FUdwBnhGNe8vC2q6N5j%2B7wp1m%2FIxGoMO%2Bs%2F8EGOqUB7IniL3XkQn%2Fwy4h1H1Nwg1VDb3Scbhxgu0qFBth2o%2FGoJfki0cGMgRAyMnJz0moLvHZ4crmtJtZBzVw%2BfYKPwmckVy2XA6qQ%2Bcjh3IE5peNjDKrCglyDiSnZqIEpUi2VRBVz%2FAlksTtn42tNx20aqAxwTUBiq7%2FCjxpyb1jjSY%2BIybaBzZ5SsL6rp58RMWjjpdiTwQZjGaD%2FbCnAfaNYU%2FfSs9P1&X-Amz-Signature=62093a92ec4bac6e31b3174cc53904c8b17c9cb3c753db7da2d0699babde6f40&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXILV6E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCID5Q5iLon%2BZNVBy54LEjU8XiETCZxNSBQTI6daA1kbxOAiEA%2F65yjV%2FHOiR6AEyAovZe9lllJ1di%2FKppy%2B3UfvDJiVYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDC8nLY30F9hJ3oAO4yrcAznZJvXn69f0c7uUhxU7UmmTI3WCtY%2BPk1kLvt1fb2APBIiCrdhHJ8LAcjeGqmwp7ribQ8nDOjxdB5P3fLYkzlvIxYPbCWmC3iJeITbzya7W0VaA0RCRzNvdV%2FEi%2FTbrg1dvvT2LqtLpDkXUP47pxgiumD5%2BoQz%2BFPQImN%2B1NpPBM0FlavRpatujEPJHBklxi1d%2BDP1vTV61aDXHI%2FX5XT9vvFDg9XXUK%2Fkz9DtDNmf1F1AwjjYSZ8MOxFO%2Fs%2BR4SKgqJtQToK0cvY%2Fj1fvJQeP%2BPKjqYMLt98mZaCrxhQIEPMeu%2Bzaa2incYH10wgPtg9x%2FDdc1hy9FwytZ8FmcoSL6bGOk8SOzpS%2F1FWnY8k5V1F5aKa56NvYwJ%2F%2Br57si38QNwEPVRBaALlx6P%2FzUMnsEYZwHML61J0a1qvXiABsv59r9VAMGi3qMmhVqjuIOTow0KfBFIkXNo7bBJFVW4PnTCJghLAgAe%2FyQFSt2XbR%2FuTmRZTuG%2BS9CY61edj%2BHg6nmuV41xsyqtW4h4FvjzGUQMzWqy45WI5NTmBXnQp3DoCo1BKYFH3rhGRnu2zvMsn%2BT7D73auJ9OJW8kPID24wVheR8QY%2FUdwBnhGNe8vC2q6N5j%2B7wp1m%2FIxGoMO%2Bs%2F8EGOqUB7IniL3XkQn%2Fwy4h1H1Nwg1VDb3Scbhxgu0qFBth2o%2FGoJfki0cGMgRAyMnJz0moLvHZ4crmtJtZBzVw%2BfYKPwmckVy2XA6qQ%2Bcjh3IE5peNjDKrCglyDiSnZqIEpUi2VRBVz%2FAlksTtn42tNx20aqAxwTUBiq7%2FCjxpyb1jjSY%2BIybaBzZ5SsL6rp58RMWjjpdiTwQZjGaD%2FbCnAfaNYU%2FfSs9P1&X-Amz-Signature=1219744ef0f7ef6a9526f821a71ff21285c5c3ba7795fb3c30e2541143215b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
