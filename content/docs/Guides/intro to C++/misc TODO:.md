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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEAG6WQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC5CBJhLnK7PLe8m09WWCN%2BKHbx9h7NmgbR5HiosaEWKAIgXIlvdyt2lYk5hSKCWE%2FOR6EwQ5S1k4Udxf3VlfAktmMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKzwmCbe40Cb6YiVyrcA82Rl0dwb1i0CYEyifRX%2F8BRVKpO95tRlHsktduM2x2GtFZWhNvLEtP2lavpK8RxsWIQq0l3v8tPnE0mzPnB%2FkX4%2Fk1vLJOHlKuSXIWx2u1%2FttzQ0vHIDKVXkXkzWKW%2BfFXvoKovYUDrDPI1Jrgim8ATzJ%2BtyBfRpYpLP2rBzcW7Kak7s1PcnXctdhnNCWPb7tU2a7kUO%2Fdf0Xp3g3%2FB8S4yBItCjLD82YE8eUofMWd%2B1BDvMkqdDKCVsOg%2FNjsyqIcEC2LVhTpNEZezppVzhUYAWDiiQy3hEfpSZY2iA3TB6c5hVC6DkpNzB1tyZ71pbeousbgS04hffo1BvC8NsOaCHpKcB7u98FY80YVRy8FHaLRBDx8S8Q%2FTuiVsvG2XpBTs%2FSSN6cTwruMg1ZPMB0cMN1K%2BG6VpYwlINipQ7atAU%2FjicqNCB8%2B7AeItLYIvmrgYU1opi8e%2FuqkUFkCQerJVqwVJnZ99l7Mo4cXn1CCRTfTDD0u6OzmDG96dKfDsRC0LueqYqyNpRYzo3GyJNc077aDGqoLKvMzYsC1a%2FT2p4y4voOiz8UcQ3CxCz%2B185xC3UKr193pCBR5wc1uPYl8W6qXUf3vSzON%2FidCxAtrA5mgFIY6ahmwyelDnMJukksAGOqUBW4ZrFZ4B%2F6pUoI1bWAx20Fx%2FkTDlGwkGEMCeQtON%2FU1LB3n32lVW5hzyR%2Bu4EgViCXNaXYr3IN%2FZ8NFDYp1P5UP9A%2FvohtiQFufn%2BF8Uo23ajOfkStrrcHko6pBGVstvElnlLG%2BgHaf33tDJ%2Fz2aWroym6bjbcQIRrZ7l4Q0X33eEcQaFwekDrGIyKh7RdzEXCeGTySnDx%2BY9hUdOIF1c69vBTg4&X-Amz-Signature=6725c602703004b554eda0bf6d092c8e734b71a898bb9cda94a803b3d61ef1a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEAG6WQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC5CBJhLnK7PLe8m09WWCN%2BKHbx9h7NmgbR5HiosaEWKAIgXIlvdyt2lYk5hSKCWE%2FOR6EwQ5S1k4Udxf3VlfAktmMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKzwmCbe40Cb6YiVyrcA82Rl0dwb1i0CYEyifRX%2F8BRVKpO95tRlHsktduM2x2GtFZWhNvLEtP2lavpK8RxsWIQq0l3v8tPnE0mzPnB%2FkX4%2Fk1vLJOHlKuSXIWx2u1%2FttzQ0vHIDKVXkXkzWKW%2BfFXvoKovYUDrDPI1Jrgim8ATzJ%2BtyBfRpYpLP2rBzcW7Kak7s1PcnXctdhnNCWPb7tU2a7kUO%2Fdf0Xp3g3%2FB8S4yBItCjLD82YE8eUofMWd%2B1BDvMkqdDKCVsOg%2FNjsyqIcEC2LVhTpNEZezppVzhUYAWDiiQy3hEfpSZY2iA3TB6c5hVC6DkpNzB1tyZ71pbeousbgS04hffo1BvC8NsOaCHpKcB7u98FY80YVRy8FHaLRBDx8S8Q%2FTuiVsvG2XpBTs%2FSSN6cTwruMg1ZPMB0cMN1K%2BG6VpYwlINipQ7atAU%2FjicqNCB8%2B7AeItLYIvmrgYU1opi8e%2FuqkUFkCQerJVqwVJnZ99l7Mo4cXn1CCRTfTDD0u6OzmDG96dKfDsRC0LueqYqyNpRYzo3GyJNc077aDGqoLKvMzYsC1a%2FT2p4y4voOiz8UcQ3CxCz%2B185xC3UKr193pCBR5wc1uPYl8W6qXUf3vSzON%2FidCxAtrA5mgFIY6ahmwyelDnMJukksAGOqUBW4ZrFZ4B%2F6pUoI1bWAx20Fx%2FkTDlGwkGEMCeQtON%2FU1LB3n32lVW5hzyR%2Bu4EgViCXNaXYr3IN%2FZ8NFDYp1P5UP9A%2FvohtiQFufn%2BF8Uo23ajOfkStrrcHko6pBGVstvElnlLG%2BgHaf33tDJ%2Fz2aWroym6bjbcQIRrZ7l4Q0X33eEcQaFwekDrGIyKh7RdzEXCeGTySnDx%2BY9hUdOIF1c69vBTg4&X-Amz-Signature=73e646ba4e4a0565b9fa152518cd6e217d3bef8812adff98f6a6e922d593ad0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
