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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRAYEYL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3HMwanXVq9r99aSLMhQN9uQMLjaLh0Fp9HKHLamZzmwIgMO2mJ2S7Kfg4HVZHk%2Bkl5cq2FC%2F7rkmp%2FGgJKMLBQMIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNx56m1tnTxgtIMHYyrcAyiaa5%2BkE0TwLCiTPaqwvFx%2B3ROl9IlPIZ3TywV9qTiYcixaCLXGfsJcOHMmOrunI9xeJZ0f6ZmsfrxcAuh9US%2BNdiAV8470FdI9%2F%2B3cQYfbqqZFycm%2BkH5J%2Br2Yq7DCm%2Bj9QcseOfIeRRi3l3WfbP6quOLZVVUOFdbtKvayLSexr2pOuIuyvJAEEdFY%2Fjl1%2B19AxqNY4z15IHcPWFAf74FFwckCIot8iQs2ANlw9FysLnknmnZGgj85phGm0LyZxaCmMl5IvjDwEi98nMkUq0uKqNXscxDHTBlMTU0lFUuabe%2B4wUVH6zkGPHYAw%2BPx5SYe%2BSg5mU9NkBGpKk6DP9RKvKaQUDzmZP0bIOVEZDTSe1uMmijvA0D%2FW5a%2FMsmL0JDyxz9QgCzd9lXOYLP6aK5%2FVdQcKIJUyNYixGxP1BKKbbbdWaW0iiY0HJwTY05g4j1oXlndWBWXlY%2FOZtiryXroXRSHVo963NWcb%2F2TjVoDhEEZ2c2Lng%2B8%2FmpKbBAUK5loWFtqwTKhsdEcPzSJoBpwnw7TtfBqWnQ%2BRNcacCZrly5ptWJI98lOPTzOShB1c1cxDIRWY2bbv6%2FeqjXbHP%2FPG8kiyiSMH88JFSVNQv9C2X7LiELXhhQ%2BHtVNMOOM8b0GOqUBr%2BpRzR7C7DGYJJJkscwNMhfgitp836b7RQ3ndpM3Vw68Vw2yoNsNsbvNW%2FctNqEXjga6BjvAFH4dGe2RYuP7HA%2FsxZw0qt8HqnkFsv4r%2BiuxMyagmgx6fSOEyZ%2FCwM2y4MMNW2fuW2VrzHQ%2BxXgjfMA2m2oSYmSyi3%2BlPYx7%2B9%2FrqpLtwfBEw6mwm4BmzQEo4ArY68wd05m0V%2BvrkN62E7buLh8M&X-Amz-Signature=140944b64decf78fb68527d867e09cc802e77949a32fc1da196990c49108f12b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRAYEYL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3HMwanXVq9r99aSLMhQN9uQMLjaLh0Fp9HKHLamZzmwIgMO2mJ2S7Kfg4HVZHk%2Bkl5cq2FC%2F7rkmp%2FGgJKMLBQMIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNx56m1tnTxgtIMHYyrcAyiaa5%2BkE0TwLCiTPaqwvFx%2B3ROl9IlPIZ3TywV9qTiYcixaCLXGfsJcOHMmOrunI9xeJZ0f6ZmsfrxcAuh9US%2BNdiAV8470FdI9%2F%2B3cQYfbqqZFycm%2BkH5J%2Br2Yq7DCm%2Bj9QcseOfIeRRi3l3WfbP6quOLZVVUOFdbtKvayLSexr2pOuIuyvJAEEdFY%2Fjl1%2B19AxqNY4z15IHcPWFAf74FFwckCIot8iQs2ANlw9FysLnknmnZGgj85phGm0LyZxaCmMl5IvjDwEi98nMkUq0uKqNXscxDHTBlMTU0lFUuabe%2B4wUVH6zkGPHYAw%2BPx5SYe%2BSg5mU9NkBGpKk6DP9RKvKaQUDzmZP0bIOVEZDTSe1uMmijvA0D%2FW5a%2FMsmL0JDyxz9QgCzd9lXOYLP6aK5%2FVdQcKIJUyNYixGxP1BKKbbbdWaW0iiY0HJwTY05g4j1oXlndWBWXlY%2FOZtiryXroXRSHVo963NWcb%2F2TjVoDhEEZ2c2Lng%2B8%2FmpKbBAUK5loWFtqwTKhsdEcPzSJoBpwnw7TtfBqWnQ%2BRNcacCZrly5ptWJI98lOPTzOShB1c1cxDIRWY2bbv6%2FeqjXbHP%2FPG8kiyiSMH88JFSVNQv9C2X7LiELXhhQ%2BHtVNMOOM8b0GOqUBr%2BpRzR7C7DGYJJJkscwNMhfgitp836b7RQ3ndpM3Vw68Vw2yoNsNsbvNW%2FctNqEXjga6BjvAFH4dGe2RYuP7HA%2FsxZw0qt8HqnkFsv4r%2BiuxMyagmgx6fSOEyZ%2FCwM2y4MMNW2fuW2VrzHQ%2BxXgjfMA2m2oSYmSyi3%2BlPYx7%2B9%2FrqpLtwfBEw6mwm4BmzQEo4ArY68wd05m0V%2BvrkN62E7buLh8M&X-Amz-Signature=3650cf8e4a46f6e2506a4d2ac771522753521b05ccefc8bbc9a2408fedf4e191&X-Amz-SignedHeaders=host&x-id=GetObject)

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
