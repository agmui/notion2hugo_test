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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK274LIM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIEAqygXJOlLVM%2BCqYP2JUfz2wQs%2BHr2GpcwQ6EHR3B34AiEAsOgP1%2FLn8xyOFrn7XoHrkWQnPOBO3Dyrp3HD3t5LzoMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCWlu2qLuKjlfH84DyrcAxSZPD8HHhWkP71Hi5WWAyOG6cWbEIumdOOhVAiKyjltvJ51OM0ZKsgHTkHdNdGEnbAkTPh%2B3ztcRtL%2F%2Fsqrw21E8aYocywW7el%2FAtLMRfN%2FAlFdP2jIyiVXrvQBzF0%2F25iuS6dO3SPZVDugAEwc4FqpRe3mPc0TUw3tq0Fz53KbaxuA1%2Bqm%2FjaDnNKM1ePtZJI0%2FiYFox0%2B5vnoZv3NFhbWvV9uaas%2Fgtw82Nu8I%2BOBp4%2FkT2r8zq%2B4Iev%2FYhwlKg0dOKaZqGquGd9nK3YUn4UugXL3J2xU5feE6QdwepqHGBgYaQ32vzSWJMBuOY8V0Mt5KDRJCjv7eIbed09YgErPJjF8uFNdVGgckMc2nkeXlVShHMH6eUfY93C5GAoNLDYeCAiUhxIssXvBW3oECYgQAKvl0QfKsJDNEJxtm7isu3TNYZ0uQcVNknPs8du66wybGna7Wo6n%2FWXRbsqLnIkcg1nPBYgJHAk%2ByCLUjgr7LGA3UMAP5n%2B6wHlAXN1vE68MOTVQxq6C%2BdLLKw%2BkoUHx8bmn7My63VNgZ8Qhu3JRwkCk68J6LdjqnXo65TGOiQP%2BZbJywfkfDrfKN7%2FwbNek2D04B4h%2BMRnQ6fTdu7Uezt%2FvYV%2FcvIFGMcypMOqI88IGOqUBNaVeZjz0FA%2FrezbSolU68D23AO8%2B25EEKojTieXF3yoXBvFPglK%2FX1%2Bg%2Fr%2Bzbf0%2FaBr8cWEwbvmpOihDn%2B%2BKLcB6JTeY69no5JeVKImnC1nJUGzy9%2B9iEafX0koRqUZJ5qiegXqN6CkEMA2EujJad3iSPfg3QgMndDJs3hh4RHdozzjbjhzzUsYCBqVS%2B3yH%2FqZBeoJIXctnjQ%2FEhgJHGEubByvY&X-Amz-Signature=60d709a403dddabe3c176223c4280e5d808e8059f9c3d6ba615f84c22f47d7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK274LIM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIEAqygXJOlLVM%2BCqYP2JUfz2wQs%2BHr2GpcwQ6EHR3B34AiEAsOgP1%2FLn8xyOFrn7XoHrkWQnPOBO3Dyrp3HD3t5LzoMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCWlu2qLuKjlfH84DyrcAxSZPD8HHhWkP71Hi5WWAyOG6cWbEIumdOOhVAiKyjltvJ51OM0ZKsgHTkHdNdGEnbAkTPh%2B3ztcRtL%2F%2Fsqrw21E8aYocywW7el%2FAtLMRfN%2FAlFdP2jIyiVXrvQBzF0%2F25iuS6dO3SPZVDugAEwc4FqpRe3mPc0TUw3tq0Fz53KbaxuA1%2Bqm%2FjaDnNKM1ePtZJI0%2FiYFox0%2B5vnoZv3NFhbWvV9uaas%2Fgtw82Nu8I%2BOBp4%2FkT2r8zq%2B4Iev%2FYhwlKg0dOKaZqGquGd9nK3YUn4UugXL3J2xU5feE6QdwepqHGBgYaQ32vzSWJMBuOY8V0Mt5KDRJCjv7eIbed09YgErPJjF8uFNdVGgckMc2nkeXlVShHMH6eUfY93C5GAoNLDYeCAiUhxIssXvBW3oECYgQAKvl0QfKsJDNEJxtm7isu3TNYZ0uQcVNknPs8du66wybGna7Wo6n%2FWXRbsqLnIkcg1nPBYgJHAk%2ByCLUjgr7LGA3UMAP5n%2B6wHlAXN1vE68MOTVQxq6C%2BdLLKw%2BkoUHx8bmn7My63VNgZ8Qhu3JRwkCk68J6LdjqnXo65TGOiQP%2BZbJywfkfDrfKN7%2FwbNek2D04B4h%2BMRnQ6fTdu7Uezt%2FvYV%2FcvIFGMcypMOqI88IGOqUBNaVeZjz0FA%2FrezbSolU68D23AO8%2B25EEKojTieXF3yoXBvFPglK%2FX1%2Bg%2Fr%2Bzbf0%2FaBr8cWEwbvmpOihDn%2B%2BKLcB6JTeY69no5JeVKImnC1nJUGzy9%2B9iEafX0koRqUZJ5qiegXqN6CkEMA2EujJad3iSPfg3QgMndDJs3hh4RHdozzjbjhzzUsYCBqVS%2B3yH%2FqZBeoJIXctnjQ%2FEhgJHGEubByvY&X-Amz-Signature=dd501f31329e68db6e5fa541914c6bcf3d88c7ee2c2fae7ab2d14a945fa75c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
