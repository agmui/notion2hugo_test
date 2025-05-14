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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WW4QGCX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpYl19ZU9uR8ncBqC12%2FPnIbOlT4XW26Eeca5yRDwuXAiEAzefG3Urg5ZUunBTNQ%2BVy6swo8UJu7t%2BBBO32YHoHl%2BAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHamQX5BCSOq12qw5CrcA7u6Stlia%2FVVtn50gIu8Ln9U%2BZb%2BhOxW%2Bxge7DSEkxf1EqCJsvItK9pdefn95xj9tD04oqYO4Gso64He6LFDsznbexJ%2BCcWjXjO2%2F4apunTPHyLDzWXWEwBjVJDQdbGAmc0tJGDMl5AsgpNF%2BCcnwRLU4SYLr3gYLWFAW5Ojd8TwR3qtxOT1cztv7Dk2F5tKMO1ICaw2YVb0jhIVEOoSGqST7HBnXCQVF46cWtrR%2FRiuyqjtTrLQCigbLwm7%2B%2FfCCmUThWEXyrh3bLuLHQSoi4bCg4bEx7GlpXPIOl941JJYPvokJYp1F97zdSdaeaJVGKHzRmFXrPVhrcGTPTxafw0O91KW6isSOmIxEay%2Bj7oppMXG0pUnb8euCeLyBRYmJtWYqU0CarYUXkBUuzT2hfq1%2Fb3bwHn8DY%2FCPRQ3JA1T%2FK6Uw6bXzzgFwW0jGfevigW7NapZ2MOuwDdUkKEq1jK3XVlNMQg8iOH%2FjjSWvbXFYEIv7HaJa4LdC4L9Q9%2B7r3kZntE1quYrqKbcggpLrdBwMPKvY0SUj9W%2FKmo5iMBnDsGR5FM0y%2FH8%2F%2Bsuh5dQvFjHAouUZZrS9kwkJgF9%2BaUnJrz5%2BZvs0yhvJ1PGS8btcZsj499NducX6kgRMK%2Fwj8EGOqUBu4%2B%2BKEiroYCpq%2BJCHUAHRdCQUyKctHkwc8TmsOKxoiH9RODzUyTppwJ%2F5XYXfSWbXaOWco6DOvpTqv70Esrg3WMISpV5cC5zB55LG5Ey%2BH0h5HdNxc6k6vJgXYrGF8ZrPkwuKWA7bsEG0RM%2FyfiYdFy8KYjVQl80CmBvuuxMkVmeSsQ5A8%2BMl4gzbumRQXcyufWSeQeZAW%2BM13p1sbocEEA3Be2J&X-Amz-Signature=3a68efbc65db84e897482acb4894c73852a37d9c5cf5cf775baae8e395e9c61e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WW4QGCX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICpYl19ZU9uR8ncBqC12%2FPnIbOlT4XW26Eeca5yRDwuXAiEAzefG3Urg5ZUunBTNQ%2BVy6swo8UJu7t%2BBBO32YHoHl%2BAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHamQX5BCSOq12qw5CrcA7u6Stlia%2FVVtn50gIu8Ln9U%2BZb%2BhOxW%2Bxge7DSEkxf1EqCJsvItK9pdefn95xj9tD04oqYO4Gso64He6LFDsznbexJ%2BCcWjXjO2%2F4apunTPHyLDzWXWEwBjVJDQdbGAmc0tJGDMl5AsgpNF%2BCcnwRLU4SYLr3gYLWFAW5Ojd8TwR3qtxOT1cztv7Dk2F5tKMO1ICaw2YVb0jhIVEOoSGqST7HBnXCQVF46cWtrR%2FRiuyqjtTrLQCigbLwm7%2B%2FfCCmUThWEXyrh3bLuLHQSoi4bCg4bEx7GlpXPIOl941JJYPvokJYp1F97zdSdaeaJVGKHzRmFXrPVhrcGTPTxafw0O91KW6isSOmIxEay%2Bj7oppMXG0pUnb8euCeLyBRYmJtWYqU0CarYUXkBUuzT2hfq1%2Fb3bwHn8DY%2FCPRQ3JA1T%2FK6Uw6bXzzgFwW0jGfevigW7NapZ2MOuwDdUkKEq1jK3XVlNMQg8iOH%2FjjSWvbXFYEIv7HaJa4LdC4L9Q9%2B7r3kZntE1quYrqKbcggpLrdBwMPKvY0SUj9W%2FKmo5iMBnDsGR5FM0y%2FH8%2F%2Bsuh5dQvFjHAouUZZrS9kwkJgF9%2BaUnJrz5%2BZvs0yhvJ1PGS8btcZsj499NducX6kgRMK%2Fwj8EGOqUBu4%2B%2BKEiroYCpq%2BJCHUAHRdCQUyKctHkwc8TmsOKxoiH9RODzUyTppwJ%2F5XYXfSWbXaOWco6DOvpTqv70Esrg3WMISpV5cC5zB55LG5Ey%2BH0h5HdNxc6k6vJgXYrGF8ZrPkwuKWA7bsEG0RM%2FyfiYdFy8KYjVQl80CmBvuuxMkVmeSsQ5A8%2BMl4gzbumRQXcyufWSeQeZAW%2BM13p1sbocEEA3Be2J&X-Amz-Signature=d55334443209209d8b4b07a1c54271921bb50b7658fd7f75afcc4cf567c4b649&X-Amz-SignedHeaders=host&x-id=GetObject)

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
