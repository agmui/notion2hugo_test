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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDUPU4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIT9TcpiWXCrRe%2B%2BrQrP78UK5hBhvnnf%2FNSay4gNCQ2wIgM4qKO7IrCDmCxPinp55BCL9Mgyn0dOUEBOkWrjaNASAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNEMAqtWGgihBrPxCrcA6YP7B07LbujefMhRhMTJxOIocWNIT4Ul0zDPLvn2KSOdkB3oL%2ByUJiwqHXS21jGOrJ5wkwO8b2P2Ye5OFDd2WzWtP7LqJ0PkXuo2wW9iZ7t%2BjN8rKE%2BjKgexO3pyvpwu3wlr2UFL%2B2vrD1S031a1Gx%2Bzpq%2BvgzsD6XcnzpvQHV2GD%2BNx7gJmepLlsoNodkYnC7UZ2BFdCWCUYm3pYRPD1JhkHSY14JLnTmLSf5rV5hY3ldd%2F2vxQpR9pR6kLYq7YABWd%2FX5oZvqNen4BO8XAcYaBiR9X3U8lLfEMnk%2BUzOwRCnLPjObTsNawVVZzT6pPJbN%2Fs66eGU9K7bxVQ%2FpR6zkgml3A3cGkzcT7P7kRxU13eNHX7PtWCjoHoW%2F%2Bjt4O%2B8TU4cuuyfArfkkJiKiVSt013svoRtLj0BrwH8ShpeisnrZW7NuaRYqa0SqGkN00ZaDSqhq%2BY6bNKUmdJzjtyYfif7%2BRCTTtOVx6joaUZerVc%2BhY%2FvQOWkEdiaotefasaLdf5t%2BnZxHo0K6CWkKSVB5iU8n7OXQcadOckqOPuK%2FQqgugKY1KNFn8ZLXtR25MUEre8oDYPyjTtGQIOT2NZ0SEmr2uuNNrAHsLcrOfqgPOyawAVbS%2FSMdjJrSMNTi77wGOqUBB1v6t0H3j76qJRMYwznNfg44ysHDMgOojG8Mdt0j%2F5f4bIXe3KOmzYLwdXfk8u23KE45UOsuJJREPpQdcSfQ5Ffb%2BktnZeQ2hiNW35C4wzDfT%2B6pwKYXGHmnWAor9O675HtHEGoYVV0ZqqilSsDkUIvQcE0G39LYEPpAYnn0uFX%2B31IN2K1U%2B6O4zzJdjm%2FGaah36zYkqw2eK3iZ6Gsmq3nSOPAZ&X-Amz-Signature=9468160bbba8dfde9b2d80d4cf81a8a389db46bde4a17aba3fde8fc05f0dbfc7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDUPU4U%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIT9TcpiWXCrRe%2B%2BrQrP78UK5hBhvnnf%2FNSay4gNCQ2wIgM4qKO7IrCDmCxPinp55BCL9Mgyn0dOUEBOkWrjaNASAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNEMAqtWGgihBrPxCrcA6YP7B07LbujefMhRhMTJxOIocWNIT4Ul0zDPLvn2KSOdkB3oL%2ByUJiwqHXS21jGOrJ5wkwO8b2P2Ye5OFDd2WzWtP7LqJ0PkXuo2wW9iZ7t%2BjN8rKE%2BjKgexO3pyvpwu3wlr2UFL%2B2vrD1S031a1Gx%2Bzpq%2BvgzsD6XcnzpvQHV2GD%2BNx7gJmepLlsoNodkYnC7UZ2BFdCWCUYm3pYRPD1JhkHSY14JLnTmLSf5rV5hY3ldd%2F2vxQpR9pR6kLYq7YABWd%2FX5oZvqNen4BO8XAcYaBiR9X3U8lLfEMnk%2BUzOwRCnLPjObTsNawVVZzT6pPJbN%2Fs66eGU9K7bxVQ%2FpR6zkgml3A3cGkzcT7P7kRxU13eNHX7PtWCjoHoW%2F%2Bjt4O%2B8TU4cuuyfArfkkJiKiVSt013svoRtLj0BrwH8ShpeisnrZW7NuaRYqa0SqGkN00ZaDSqhq%2BY6bNKUmdJzjtyYfif7%2BRCTTtOVx6joaUZerVc%2BhY%2FvQOWkEdiaotefasaLdf5t%2BnZxHo0K6CWkKSVB5iU8n7OXQcadOckqOPuK%2FQqgugKY1KNFn8ZLXtR25MUEre8oDYPyjTtGQIOT2NZ0SEmr2uuNNrAHsLcrOfqgPOyawAVbS%2FSMdjJrSMNTi77wGOqUBB1v6t0H3j76qJRMYwznNfg44ysHDMgOojG8Mdt0j%2F5f4bIXe3KOmzYLwdXfk8u23KE45UOsuJJREPpQdcSfQ5Ffb%2BktnZeQ2hiNW35C4wzDfT%2B6pwKYXGHmnWAor9O675HtHEGoYVV0ZqqilSsDkUIvQcE0G39LYEPpAYnn0uFX%2B31IN2K1U%2B6O4zzJdjm%2FGaah36zYkqw2eK3iZ6Gsmq3nSOPAZ&X-Amz-Signature=a44ca320c3cb6e9659f8547fd24cd6294d119f36cbd631ab3709d38adbb51b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
