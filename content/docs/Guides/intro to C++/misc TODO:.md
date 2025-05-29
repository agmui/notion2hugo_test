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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235VHU7S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFu7Pzjt5LSbutMS3kSxCSoRgXLSy7mp7MbNW7WbUp6wIhAOIIxkC10Irv5DMz3rAhEbI6uQIf1d5dnFbTzIkWiDb1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqr0avTv%2B2%2BgmJBZsq3AMn5Jn9RmPNKeY%2F7aZTz%2FVDMBzYL9gUDYeCS%2FUOWyYAZCWlGGQW39GW%2BEvHgW06psBjVHQBoA2WuLuUg1zVte8S2i8lQOljxnwTi94VX2%2Bdt5JNoAyx2MvLHeIKeEcee2ljzJl%2F5Amp2ddfzfnOyfYs%2FgoEgGHaR8mf%2BDPhpYtbxHC4WblMEuTHmVRnFFMSRTOI18eAcLMrdypr5z4QNIU0T4nARjudqdwp%2Bgm9J4e%2Bs183ciJGQyBMm3Atd02J%2BVud5h5h7DCOeY6MqF1koekEF%2F4UP6Vi%2BOXJALVzbf03dLJcY13EidKC3p8Oklc2r6%2FKq7eS7bF1bKseSoMyBsoI%2B2IZP13I6Rztd4JG%2Bosxyy1BSBMtuY9GZQaO%2B9BmwtQOe7Y2VDDELDocjv9iioIMFPU43EV3nZ15HU%2BtYecPw5P4vNPSJowcSqZvgjqRYUyrKWOYuIPlQERaPEPHzCchZQhS6MdZGequU8SHPS4OXJb%2B%2Fk%2Bvp6wSdgxOz2%2B2dKDvxLs0oVTPLWyxk2IoXIu%2FhZx9nOE5nbf514Gpx7wsve6%2FnR739qK9X4x1WL%2BSMCoajjx7UWBlU2sesoulx85txasQaiNuTwCK7U%2FWo6hnT1kZl8VC4MWhVieAODCGs%2BLBBjqkAR%2BGvXW9FOGXefJJqJ8BtWCKSMJrbba2S5t%2BLCZAwXoHx5QyCi6NcO1nUxKfYINSQYEj1Suww0ypOwMvMAaeagp7oquwFauoo%2FY2VnvmlK%2FkImMCCrElsk6IxySa%2BLAusZfbj4sQ14Y68Dq%2FfZwc5Oj55av4NAnNiJX9i%2Fug91Kp21gVjUAF53AJ2H%2FrKnr1SWnbw1TUtSvcVqcLt7vv6ASYlkro&X-Amz-Signature=0e13b3e09c8d69feaffa0bb3d0babdbbebe8660d8a4053ff0b03392ba9cbe4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235VHU7S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFu7Pzjt5LSbutMS3kSxCSoRgXLSy7mp7MbNW7WbUp6wIhAOIIxkC10Irv5DMz3rAhEbI6uQIf1d5dnFbTzIkWiDb1KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqr0avTv%2B2%2BgmJBZsq3AMn5Jn9RmPNKeY%2F7aZTz%2FVDMBzYL9gUDYeCS%2FUOWyYAZCWlGGQW39GW%2BEvHgW06psBjVHQBoA2WuLuUg1zVte8S2i8lQOljxnwTi94VX2%2Bdt5JNoAyx2MvLHeIKeEcee2ljzJl%2F5Amp2ddfzfnOyfYs%2FgoEgGHaR8mf%2BDPhpYtbxHC4WblMEuTHmVRnFFMSRTOI18eAcLMrdypr5z4QNIU0T4nARjudqdwp%2Bgm9J4e%2Bs183ciJGQyBMm3Atd02J%2BVud5h5h7DCOeY6MqF1koekEF%2F4UP6Vi%2BOXJALVzbf03dLJcY13EidKC3p8Oklc2r6%2FKq7eS7bF1bKseSoMyBsoI%2B2IZP13I6Rztd4JG%2Bosxyy1BSBMtuY9GZQaO%2B9BmwtQOe7Y2VDDELDocjv9iioIMFPU43EV3nZ15HU%2BtYecPw5P4vNPSJowcSqZvgjqRYUyrKWOYuIPlQERaPEPHzCchZQhS6MdZGequU8SHPS4OXJb%2B%2Fk%2Bvp6wSdgxOz2%2B2dKDvxLs0oVTPLWyxk2IoXIu%2FhZx9nOE5nbf514Gpx7wsve6%2FnR739qK9X4x1WL%2BSMCoajjx7UWBlU2sesoulx85txasQaiNuTwCK7U%2FWo6hnT1kZl8VC4MWhVieAODCGs%2BLBBjqkAR%2BGvXW9FOGXefJJqJ8BtWCKSMJrbba2S5t%2BLCZAwXoHx5QyCi6NcO1nUxKfYINSQYEj1Suww0ypOwMvMAaeagp7oquwFauoo%2FY2VnvmlK%2FkImMCCrElsk6IxySa%2BLAusZfbj4sQ14Y68Dq%2FfZwc5Oj55av4NAnNiJX9i%2Fug91Kp21gVjUAF53AJ2H%2FrKnr1SWnbw1TUtSvcVqcLt7vv6ASYlkro&X-Amz-Signature=73a83f35318b3575fe6a857901feaacc7d1535f1de215bb58e230dfe0541f96d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
