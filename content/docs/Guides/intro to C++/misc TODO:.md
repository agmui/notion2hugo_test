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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJ5PCOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTuLkqT4J67jgW5UIUYjVrBU4YixN5dLtKfZKWNwVJAIgHeKEQat8q1Sg0J%2Bq2wRyOJCGyFc15JeongVI2PYl27UqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbSDY2ot9%2BtDecIvircA%2BX5PdFMdan%2FPjIrXdP8wIL3fwoHMeQuEAxNXyAnBlOyNu%2BZ2rS%2BFyZMp73wwuZ3RiB2sZrKgvkbA2fhudUt7nXvLlcsn1%2BoUzAfjZJxLA%2FWvfrq%2BwS7IxT43YkzIKSRL1DRJc2ZT9b7QXSP4OfCynFcrr%2BUNML37egn50aS1MazAxmqBdrFImGJDBRf3%2FGWiCBZHKZzixXn9vhPmATne8tX5tFEy21r%2BVEj8E9dlrebCJ3D8bjvWd1Hlk37HTtl8i5%2F7KQT1uITa6HDBib4cR%2BGOVXC5farRULcF1W5PaiGe7WFyjLkD%2B6Q5mtY1eMtu879oSbRQ6kAN9hj4djaMga6pjqPTrh5IKX15uifogRnmanbAlIpowFQvrlY9hOzVINpRoXeCbIT2rXpjvhxZzWcTeGrV4Tds93BU%2BnModailag6spntN4XzPP1bQO2rPMgriur440E927m8gGfugia772gOjIHLn2%2FPEOYJ2gWX2%2FggLtcUkwmxWu2gPyP%2BoDwIsJb3zssaWBLm2dbmuD%2FKJ3NU9BQDkn1Qf9ka00160dni9Bbydb9dkhALMM8U0g7%2BW03wFjM3b3hSwGYUwgJFCQj306YOFnKxVtA6PSk6VwzKtp1HLSDmeAH8MIWKs8QGOqUBMLxamvitBlyeAMvhev3UYUs93X1TwB1pCnMcxxN6WSwthDWijz1Zv5Fq%2Fd3IqfkJjWTNBBRyjNl1v44PwbnGlg7TX7PFGtZ2kGRXzIwYvJM2sZq2yNS%2Fqx2MlDJTBRzCfJkldjmhDPs%2Blizia7tGtajnAqPpb%2FbIoKz0Zb0phDyI3wyejMHTV4GyqnpCfDkINnEQVa%2FmEYFBV1bU10DyIXm531wg&X-Amz-Signature=0fd767eea0d2e0688c6153b359ff131d0eaee5c1d4944f1dd38f55889fe1dabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJ5PCOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTuLkqT4J67jgW5UIUYjVrBU4YixN5dLtKfZKWNwVJAIgHeKEQat8q1Sg0J%2Bq2wRyOJCGyFc15JeongVI2PYl27UqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbSDY2ot9%2BtDecIvircA%2BX5PdFMdan%2FPjIrXdP8wIL3fwoHMeQuEAxNXyAnBlOyNu%2BZ2rS%2BFyZMp73wwuZ3RiB2sZrKgvkbA2fhudUt7nXvLlcsn1%2BoUzAfjZJxLA%2FWvfrq%2BwS7IxT43YkzIKSRL1DRJc2ZT9b7QXSP4OfCynFcrr%2BUNML37egn50aS1MazAxmqBdrFImGJDBRf3%2FGWiCBZHKZzixXn9vhPmATne8tX5tFEy21r%2BVEj8E9dlrebCJ3D8bjvWd1Hlk37HTtl8i5%2F7KQT1uITa6HDBib4cR%2BGOVXC5farRULcF1W5PaiGe7WFyjLkD%2B6Q5mtY1eMtu879oSbRQ6kAN9hj4djaMga6pjqPTrh5IKX15uifogRnmanbAlIpowFQvrlY9hOzVINpRoXeCbIT2rXpjvhxZzWcTeGrV4Tds93BU%2BnModailag6spntN4XzPP1bQO2rPMgriur440E927m8gGfugia772gOjIHLn2%2FPEOYJ2gWX2%2FggLtcUkwmxWu2gPyP%2BoDwIsJb3zssaWBLm2dbmuD%2FKJ3NU9BQDkn1Qf9ka00160dni9Bbydb9dkhALMM8U0g7%2BW03wFjM3b3hSwGYUwgJFCQj306YOFnKxVtA6PSk6VwzKtp1HLSDmeAH8MIWKs8QGOqUBMLxamvitBlyeAMvhev3UYUs93X1TwB1pCnMcxxN6WSwthDWijz1Zv5Fq%2Fd3IqfkJjWTNBBRyjNl1v44PwbnGlg7TX7PFGtZ2kGRXzIwYvJM2sZq2yNS%2Fqx2MlDJTBRzCfJkldjmhDPs%2Blizia7tGtajnAqPpb%2FbIoKz0Zb0phDyI3wyejMHTV4GyqnpCfDkINnEQVa%2FmEYFBV1bU10DyIXm531wg&X-Amz-Signature=38f42cebab4327ad187499d50dba438730d2c51cee01685f9514ab1bd5d63e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
