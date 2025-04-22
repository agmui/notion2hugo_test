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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCM3P2OB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAopQfE%2Fra4KOOtvrOG%2FSFiWmJDEDJinD%2FWBvEK6ybPuAiEA%2B0Gipg6JcSmB4dfRnevcClg0q4o85uBHISKYvVxN4TQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe9zt0v8JiL0cRK2ircAzVWSMluyJl6bsoOJSrtGOMYBMTFcIavarbN%2BQruZHa0GEynMC46%2BidaTAKZS7dYH0WpaeUvB1Egi0Qj6aipYUjS6NkpkcdiPJoNVLUz0boooQCqtjiY2kMeY356lbQvW2j%2Fr8a317kNWH9hoOKx43Ruv6e5z%2FBHUXp81QWewt3sW0TLPhXZ4st22Bl5P5JbOQcNOlT0UrGDRH%2BhMwiCMRgVCGBEF9IhBWgwWyvkB62BwKfKIlfRpFvm60gloB1msYfiGIb4WRbtG1lujYeOoWtXPBCOy5vk6%2Fn1ENvzNSTvm%2Fx3oFXY6pBzr1ruAEINuk5MRJy0lfTRG62UWwtI1VkHpwctSMDlvCg9OymuSyvxrgbfLEGc6iin565mAX72ZFA8ugad5Z0EQYU1Qdann95ftjylYrxPax%2BC1qBq%2BC52lHfFledHcpGf0k%2BCGaDIWpCrBgjyrBrWoZz5opujtB9jfoDRk4wNhaETW7ZBfflqE7hmA9KF4n%2BTfU%2FGywzNDCQ%2FtMaOOgD8GkZTNY8dmdBTakr2IdnyO3ON0IPJ6GJcyBU32zWu%2FsNEIAcp%2FQmT5ocouS%2FUVAM4haqHiNz1wXBnZzjcznB2CgW7tC13najWb%2F9k6z9fBOwtffgvMMnwm8AGOqUBKjgF5IQe1kEGWZDkb9kYmZB%2FsgC0j0U2qXS%2F3nRs5%2BBQSMHbxFC3CH%2F0SrGgybUJ57W%2BbGi753cl9U83npLXoteZD60x0Yj3K0ea0rK6Z7deszHIvUdvMf3XEaJ%2BnMCYpobMvoyTI9xgKm0v%2BWtcJ90A5F83TDq7WRMkfAyYNDl93z52cCD%2B5rMOvAGdkGoZOQza%2FYCEeMr%2Bxo61nBJO%2FMcPGmli&X-Amz-Signature=6bc1e0b88dbc510e50e1dc1bec91ebe37178649efe07934def2494a4176e4acf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCM3P2OB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIAopQfE%2Fra4KOOtvrOG%2FSFiWmJDEDJinD%2FWBvEK6ybPuAiEA%2B0Gipg6JcSmB4dfRnevcClg0q4o85uBHISKYvVxN4TQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe9zt0v8JiL0cRK2ircAzVWSMluyJl6bsoOJSrtGOMYBMTFcIavarbN%2BQruZHa0GEynMC46%2BidaTAKZS7dYH0WpaeUvB1Egi0Qj6aipYUjS6NkpkcdiPJoNVLUz0boooQCqtjiY2kMeY356lbQvW2j%2Fr8a317kNWH9hoOKx43Ruv6e5z%2FBHUXp81QWewt3sW0TLPhXZ4st22Bl5P5JbOQcNOlT0UrGDRH%2BhMwiCMRgVCGBEF9IhBWgwWyvkB62BwKfKIlfRpFvm60gloB1msYfiGIb4WRbtG1lujYeOoWtXPBCOy5vk6%2Fn1ENvzNSTvm%2Fx3oFXY6pBzr1ruAEINuk5MRJy0lfTRG62UWwtI1VkHpwctSMDlvCg9OymuSyvxrgbfLEGc6iin565mAX72ZFA8ugad5Z0EQYU1Qdann95ftjylYrxPax%2BC1qBq%2BC52lHfFledHcpGf0k%2BCGaDIWpCrBgjyrBrWoZz5opujtB9jfoDRk4wNhaETW7ZBfflqE7hmA9KF4n%2BTfU%2FGywzNDCQ%2FtMaOOgD8GkZTNY8dmdBTakr2IdnyO3ON0IPJ6GJcyBU32zWu%2FsNEIAcp%2FQmT5ocouS%2FUVAM4haqHiNz1wXBnZzjcznB2CgW7tC13najWb%2F9k6z9fBOwtffgvMMnwm8AGOqUBKjgF5IQe1kEGWZDkb9kYmZB%2FsgC0j0U2qXS%2F3nRs5%2BBQSMHbxFC3CH%2F0SrGgybUJ57W%2BbGi753cl9U83npLXoteZD60x0Yj3K0ea0rK6Z7deszHIvUdvMf3XEaJ%2BnMCYpobMvoyTI9xgKm0v%2BWtcJ90A5F83TDq7WRMkfAyYNDl93z52cCD%2B5rMOvAGdkGoZOQza%2FYCEeMr%2Bxo61nBJO%2FMcPGmli&X-Amz-Signature=3295dd8c3d37ec193e7358f0348ac7c8ca893d604059c4ae5b229c241e626337&X-Amz-SignedHeaders=host&x-id=GetObject)

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
