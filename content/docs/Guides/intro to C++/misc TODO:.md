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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYLFRVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCKl%2FeNLGrODMHmoGucPpS4mLGiifW8u2Ue2E%2FkiHz7BAIgBDRJdGVZUhg7kMbBuQUh0u9AnQzqQdzth8PzG6zoScAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDByBQ9BcTeh8sMnIBCrcAxnUVZNutnbebWIqpqSpAvuW5Q3TsR4Xq5RNr9alA2QPNjDogJhMaAISQfNCspnf6loR12xfk%2BUsCTWt3R%2F3LA4GWLAkrzzc20QohEeLGCj6VfIDYSZ7FSTdI6GsG26ib0y%2F7gX77%2FVdrXYYgXrPc3y2gEfx8lOX%2Fz%2BOFZYIWMohLU8cEpeUFqMkYKV%2BIyb0nFEN3xKjgEty5TNgLqesGFtaq0xUOEt7OA%2B88wuJjBep2oFZGmEX4ftBqT%2Bwaafxaoe3kpjIuNTupHGQi6WF3JdftCXskw9wWWp%2ByXqZr7lE3qI7RqSgyA10y7i8h03x7FVprFhReqBDLBEHKlDC8ybp3YKCHxmdbxldHxjDOomfhBar8uWxQHkSrad6o5tkQKjLsXnix8Y5suWn%2Bb9rWzVi1Jo0N%2F8D0Hdp19A7rwGKoM2Sn%2BdB1AkR%2B0l8ODti43iAslPU1dv4JZ%2BpKgudvij7%2BKHtcmVh3ny3%2BJcDl4ZRh%2FIYIH%2BqOBbrq8lHvWNqWh2JTc%2B4anOKT4%2Bo3LrGsNAJQovtMbLi%2BaneDbytqtRxBbVMJK5amv7uoYahmlKOWiLEWXHb%2FZWf7ynJQihV0DJrI1KzRzPDskjuK99wUF%2BrQGfyyf3WF0ix%2FeNOMLq%2Fr8IGOqUBycZ7oMCZrV2793KhImufRbTdqbEf%2BDlF9TLeq4Y2XVGvJC%2BNmGAHuTPEBT2Pj9f2cqzjy%2BG3Xtmg3yYxjMEyFD0zxd%2BIC1Zow9m6p8lBHg4JbmkAHqDtHAP90XFVL%2FeuL%2FGhuRqOVKM6fGRfg4yzXDNkMCihLICur5aHeGiSbG%2B5l0oxmURHwEv1LjczVeOVrPUVsylpjf2Z%2FyVt9HVmZM7rkhTk&X-Amz-Signature=f7ffcfb7241af89ca86379e251ea1ebe1c4967654fe00f582e3c87cb60f073f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYLFRVJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCKl%2FeNLGrODMHmoGucPpS4mLGiifW8u2Ue2E%2FkiHz7BAIgBDRJdGVZUhg7kMbBuQUh0u9AnQzqQdzth8PzG6zoScAq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDByBQ9BcTeh8sMnIBCrcAxnUVZNutnbebWIqpqSpAvuW5Q3TsR4Xq5RNr9alA2QPNjDogJhMaAISQfNCspnf6loR12xfk%2BUsCTWt3R%2F3LA4GWLAkrzzc20QohEeLGCj6VfIDYSZ7FSTdI6GsG26ib0y%2F7gX77%2FVdrXYYgXrPc3y2gEfx8lOX%2Fz%2BOFZYIWMohLU8cEpeUFqMkYKV%2BIyb0nFEN3xKjgEty5TNgLqesGFtaq0xUOEt7OA%2B88wuJjBep2oFZGmEX4ftBqT%2Bwaafxaoe3kpjIuNTupHGQi6WF3JdftCXskw9wWWp%2ByXqZr7lE3qI7RqSgyA10y7i8h03x7FVprFhReqBDLBEHKlDC8ybp3YKCHxmdbxldHxjDOomfhBar8uWxQHkSrad6o5tkQKjLsXnix8Y5suWn%2Bb9rWzVi1Jo0N%2F8D0Hdp19A7rwGKoM2Sn%2BdB1AkR%2B0l8ODti43iAslPU1dv4JZ%2BpKgudvij7%2BKHtcmVh3ny3%2BJcDl4ZRh%2FIYIH%2BqOBbrq8lHvWNqWh2JTc%2B4anOKT4%2Bo3LrGsNAJQovtMbLi%2BaneDbytqtRxBbVMJK5amv7uoYahmlKOWiLEWXHb%2FZWf7ynJQihV0DJrI1KzRzPDskjuK99wUF%2BrQGfyyf3WF0ix%2FeNOMLq%2Fr8IGOqUBycZ7oMCZrV2793KhImufRbTdqbEf%2BDlF9TLeq4Y2XVGvJC%2BNmGAHuTPEBT2Pj9f2cqzjy%2BG3Xtmg3yYxjMEyFD0zxd%2BIC1Zow9m6p8lBHg4JbmkAHqDtHAP90XFVL%2FeuL%2FGhuRqOVKM6fGRfg4yzXDNkMCihLICur5aHeGiSbG%2B5l0oxmURHwEv1LjczVeOVrPUVsylpjf2Z%2FyVt9HVmZM7rkhTk&X-Amz-Signature=52bd964ba520ebdb5f8cbae6b8634996a902614d7d003f2bdc0b2ea1c7a9fa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
