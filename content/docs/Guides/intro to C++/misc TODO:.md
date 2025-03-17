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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRKZTOM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9f74xfcz8suwjWoY03qfwoRZQGG7d4TiFhHmzzSfoBQIgNfcMAZS1no3Jtnhmkg%2FD8kUdk1Q9SN22MVraqmUQI4cq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLoTW5a5hAxIAWMQTSrcAzFJslCN%2B0lUZvZp0xZEdpF9oBX7eUWSxu%2FyZJ2P5AYJdmJYlLhmqImlNr4ltFqmeWwRKBE5QD1EBJ9j5vrng9CYXyk%2Bz7yFlrF4IzXqptVuRD50895juFyIm%2BCkXxhvMFaF5neS056s5ucCXnIPaUwvhnUEOGmpT0dlmXe49U4cNjkp1iAA%2Ft%2BD0kZf1q6uUWni1Mss6JsPh5zGbXeffcPZ7RgRf9105oxSBn8CY%2FmlSBemeLGqy7QFPZ9OyLdkkzkTCDD%2FyoNUBJuODLZWo37ZMriPBYjmzALcg2UX78QlYgY%2B09iHP7NbT3RJfkRDB%2BBeNbwXX1cGosPzYV9NlNBtBafQ2K91SeMep2JojAV3lzhd25%2FaRo7zATmxBTQgW2n8hlvG3vowk2yXjJ4l55e%2FhthAuLUxItcmTX8J9aqmHuaBWvs3NC2Vq1cGID0FZsbVzpjQz59%2F9KLfpSaL0Ma1qZmZ1Xv564TjUxxHeHmSVJeKComIOH8p6154egH9X5V%2BwHskYDn1HHlG%2Bfjp4yk%2BvaaZaya9u6N6Dg6COSd3kgRxbHB2L71FCrKcgU8KPU22vCOS%2BFGr88nPqmfD%2BX5fcc%2BSa7wmNEDLjZSyORUmlUKZpCyizlHd%2Fkf6MMSL4L4GOqUBOA6H0S2tmCvd8Cot%2FSeHLG3v1Bvyt7nlc%2FEHKrtmr9EKiqfn8st7xxy2mWF%2BhbicdfLlgGhk8X8UAjdetqNRDY7ekIWyizbhmObGk19RJFsENLDd0b3MgMxWJqg0FndBjiEk29BI%2FxtoeaZ%2FF7TvqUyz9JxXORhExQFSWI39X%2BoiVC3k2tvLu%2BLDHEiwjVw6RKCAecf66NHpiXTq2CIUC6yi3HJF&X-Amz-Signature=48f3ece6021ec1434c53decd5b1d2c0cbef7fc33ee19425a793f1d3038040793&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FRKZTOM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9f74xfcz8suwjWoY03qfwoRZQGG7d4TiFhHmzzSfoBQIgNfcMAZS1no3Jtnhmkg%2FD8kUdk1Q9SN22MVraqmUQI4cq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLoTW5a5hAxIAWMQTSrcAzFJslCN%2B0lUZvZp0xZEdpF9oBX7eUWSxu%2FyZJ2P5AYJdmJYlLhmqImlNr4ltFqmeWwRKBE5QD1EBJ9j5vrng9CYXyk%2Bz7yFlrF4IzXqptVuRD50895juFyIm%2BCkXxhvMFaF5neS056s5ucCXnIPaUwvhnUEOGmpT0dlmXe49U4cNjkp1iAA%2Ft%2BD0kZf1q6uUWni1Mss6JsPh5zGbXeffcPZ7RgRf9105oxSBn8CY%2FmlSBemeLGqy7QFPZ9OyLdkkzkTCDD%2FyoNUBJuODLZWo37ZMriPBYjmzALcg2UX78QlYgY%2B09iHP7NbT3RJfkRDB%2BBeNbwXX1cGosPzYV9NlNBtBafQ2K91SeMep2JojAV3lzhd25%2FaRo7zATmxBTQgW2n8hlvG3vowk2yXjJ4l55e%2FhthAuLUxItcmTX8J9aqmHuaBWvs3NC2Vq1cGID0FZsbVzpjQz59%2F9KLfpSaL0Ma1qZmZ1Xv564TjUxxHeHmSVJeKComIOH8p6154egH9X5V%2BwHskYDn1HHlG%2Bfjp4yk%2BvaaZaya9u6N6Dg6COSd3kgRxbHB2L71FCrKcgU8KPU22vCOS%2BFGr88nPqmfD%2BX5fcc%2BSa7wmNEDLjZSyORUmlUKZpCyizlHd%2Fkf6MMSL4L4GOqUBOA6H0S2tmCvd8Cot%2FSeHLG3v1Bvyt7nlc%2FEHKrtmr9EKiqfn8st7xxy2mWF%2BhbicdfLlgGhk8X8UAjdetqNRDY7ekIWyizbhmObGk19RJFsENLDd0b3MgMxWJqg0FndBjiEk29BI%2FxtoeaZ%2FF7TvqUyz9JxXORhExQFSWI39X%2BoiVC3k2tvLu%2BLDHEiwjVw6RKCAecf66NHpiXTq2CIUC6yi3HJF&X-Amz-Signature=cfbbc394c8d28881d2d13a1b3bf771fdcddbd47792db1d5727e56c8583632b43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
