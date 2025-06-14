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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKYEYDP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDzgGlPT0NMKlLmqlWrbWs6uyXRvibYiVrFq0SuX0aR8gIgD6y6S%2FA4O53StEA87XOETeOhZLAube3EWkvDQUZknM4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOP4uy%2Fta%2BqW9HB6IyrcA0Du6iiQAGrkyXE%2FRMfKq9lC6EJ70IdXsgqjkHuvMuWgJJsCUQhVL4IuGr%2B3j1P5iDy8HEDmFjwrizFN910lHGcuNlreXHZupDofKa%2B4aFfyPyupzDy4CwbZMWk4MvcDWuu6yreA8YU88Lm3yoZUtGUsWjDVNZcDtD4HiFBcKJZvkuXZrZy5wy5iDmSWlwhkNctC2TVSgeo6D8x%2B2wTj4obFRm7Ejd8OX6H%2FF78JfNed3StAhHo1AjecguxeRVfatLG0ayspmFVIApRegBO0FjtkH0BBtuzej0VoS7ae%2B4LXPSqCUROPj6OPuLyL2WlFathCQiwzL64CTAHdaHViqtg%2FCPkBq5bbpIfg13bb3EvjI7HLJYthrLZVMsxFtcHkBTOpLpNQSL1UAvZhycBnMGhPV0o89BOKhGJpW8JYlFF4ePRWfCmWL835wjKdDjb6MCAYuuiIO2d1poMMK5Enj67k0A14fTOgWx6AS4WChblAMks34RSYO0Jh8bL9mMlNmy2N3ULvA1Nm4IksCWJaZwQ8HpN1S5BplVixxBKGPNQpmB9mkqhgtVjkVgnhFQIrBKxCzKZih8KotHRjEXZ2Z1hS1tWYfOqPzpVSu3K%2BronqR8pW9aNpDv90y1I2MOa8tMIGOqUBm%2Bgx0nHLh3LFtcKInAOLSe5QZ0rrqKz6OdTlbfpsO78K4RwtBZQYwmAsqiGLk7etMa0EQ91Nipm59g8MYTZhsoMz%2FFf346HKu46JYOCsSu1e8kfjNUN6D0vDX6IWPy7Vyzc4XCAHXPHYSVYToIiGhrR1LsDtdo%2BdxO4NsLoWkZvGjNhlCxa%2FzmMeHAw2ht3QloKWgPGv8HZydsYyE9UO1j6STp6i&X-Amz-Signature=08c37e9a8e5e36b889f57af9b3508300f2fdeec547443c355008ab0fa8fad890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKYEYDP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDzgGlPT0NMKlLmqlWrbWs6uyXRvibYiVrFq0SuX0aR8gIgD6y6S%2FA4O53StEA87XOETeOhZLAube3EWkvDQUZknM4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOP4uy%2Fta%2BqW9HB6IyrcA0Du6iiQAGrkyXE%2FRMfKq9lC6EJ70IdXsgqjkHuvMuWgJJsCUQhVL4IuGr%2B3j1P5iDy8HEDmFjwrizFN910lHGcuNlreXHZupDofKa%2B4aFfyPyupzDy4CwbZMWk4MvcDWuu6yreA8YU88Lm3yoZUtGUsWjDVNZcDtD4HiFBcKJZvkuXZrZy5wy5iDmSWlwhkNctC2TVSgeo6D8x%2B2wTj4obFRm7Ejd8OX6H%2FF78JfNed3StAhHo1AjecguxeRVfatLG0ayspmFVIApRegBO0FjtkH0BBtuzej0VoS7ae%2B4LXPSqCUROPj6OPuLyL2WlFathCQiwzL64CTAHdaHViqtg%2FCPkBq5bbpIfg13bb3EvjI7HLJYthrLZVMsxFtcHkBTOpLpNQSL1UAvZhycBnMGhPV0o89BOKhGJpW8JYlFF4ePRWfCmWL835wjKdDjb6MCAYuuiIO2d1poMMK5Enj67k0A14fTOgWx6AS4WChblAMks34RSYO0Jh8bL9mMlNmy2N3ULvA1Nm4IksCWJaZwQ8HpN1S5BplVixxBKGPNQpmB9mkqhgtVjkVgnhFQIrBKxCzKZih8KotHRjEXZ2Z1hS1tWYfOqPzpVSu3K%2BronqR8pW9aNpDv90y1I2MOa8tMIGOqUBm%2Bgx0nHLh3LFtcKInAOLSe5QZ0rrqKz6OdTlbfpsO78K4RwtBZQYwmAsqiGLk7etMa0EQ91Nipm59g8MYTZhsoMz%2FFf346HKu46JYOCsSu1e8kfjNUN6D0vDX6IWPy7Vyzc4XCAHXPHYSVYToIiGhrR1LsDtdo%2BdxO4NsLoWkZvGjNhlCxa%2FzmMeHAw2ht3QloKWgPGv8HZydsYyE9UO1j6STp6i&X-Amz-Signature=ba8891039e24db19deb186cae144dad8e17f1b1def13ff65f34009261020c6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
