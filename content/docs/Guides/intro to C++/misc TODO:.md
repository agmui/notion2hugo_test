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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXMAVBM2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFxMg7I7%2BuS9BFlefIAdsljXzcNlwn%2FQ5hue6Mr%2B7EtXAiAwlC23D5x0wYVHFJ4u4%2FY6w7a5B%2FW0q8sbthz%2FS%2FL3JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEDboQxOuli5Om80QKtwDanrRmVBTE6J4lO9G5vIJofhctpVRiREjpZQu6pebyuxpnLHO6HMLbk9RZBW7YPVsZ6%2FNGFGuLCq1pXOYBhtEALYmngBvWe99s95Qa83o7DnIekkELb5dpCL0pOfuxiEM5VaHN33RxzO01liDdBIgQjNuHkPSDZdAPy7%2BeAGkxCxBS5lrgy7KNOOVNHwDWQ51VOnUYqcgQk0EM3SR5zRaqeDeqDfdl9a2brdRab%2FcrM8u1KJDg%2FCpGbY0Gw9BVSObzsa%2B5mCfhwHCO9PQq4pYD4csSxkRO%2B7p7Rv8yBAr9sb%2FcvjQ%2Bwh5Ba9tY%2B1Ac%2F5ljmXbHRd7YZtPPgk7b6m77aEA%2BAfdDSU3ZXWrxn4p3G8wDkV1w7QP1YA1BFwygFWlMWznj9%2BkWgK9b7PJS71M6MQ6dk6H2ak8x5AweaNAZrl2uYchQqp8VkoEoFpC6%2BgmTibsgsYtdOJLmVNnyQKTjIUkDc8Cvn8xAOj6p5omX0GJGphN9SeD2y4tWsSzJfFU%2FSVFO8bWDaACQT4p7ckd4NK3ERg1NrfEPVXi2ewfu9nu9yERNGkmLD41AIAvcdWOR8of4gDjPuJDp09An1QX7igdwBkH%2BZ3rW5F87yLbcfkYBPPOeg9rNXCBPRgwxbuOvQY6pgHqSl27YlSYNjyfqmaMNKRkQqgylQuVH4tYJ2ikU6%2B3jB9%2Fhngi5JR%2FbG7jCvr4b0VKkY6Fqmg3H1K%2BLczHCQODgtyzK%2B0BnESTe03O0GXrVUjBrlCHKWLD2x3jpAkDJy1VGFAMwgc5hYshrRSH7VRfxDbpLLr4PNYfsHVjT8sk1xYCpE87BSysKN%2FOJ6OiBiky0jpf1HYT3qD1Wa7fm7horbA1kpHd&X-Amz-Signature=7878826da98cebeb1ab02cada4e46a27cddb4905f0158cd21edd1f34f03505e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXMAVBM2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFxMg7I7%2BuS9BFlefIAdsljXzcNlwn%2FQ5hue6Mr%2B7EtXAiAwlC23D5x0wYVHFJ4u4%2FY6w7a5B%2FW0q8sbthz%2FS%2FL3JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEDboQxOuli5Om80QKtwDanrRmVBTE6J4lO9G5vIJofhctpVRiREjpZQu6pebyuxpnLHO6HMLbk9RZBW7YPVsZ6%2FNGFGuLCq1pXOYBhtEALYmngBvWe99s95Qa83o7DnIekkELb5dpCL0pOfuxiEM5VaHN33RxzO01liDdBIgQjNuHkPSDZdAPy7%2BeAGkxCxBS5lrgy7KNOOVNHwDWQ51VOnUYqcgQk0EM3SR5zRaqeDeqDfdl9a2brdRab%2FcrM8u1KJDg%2FCpGbY0Gw9BVSObzsa%2B5mCfhwHCO9PQq4pYD4csSxkRO%2B7p7Rv8yBAr9sb%2FcvjQ%2Bwh5Ba9tY%2B1Ac%2F5ljmXbHRd7YZtPPgk7b6m77aEA%2BAfdDSU3ZXWrxn4p3G8wDkV1w7QP1YA1BFwygFWlMWznj9%2BkWgK9b7PJS71M6MQ6dk6H2ak8x5AweaNAZrl2uYchQqp8VkoEoFpC6%2BgmTibsgsYtdOJLmVNnyQKTjIUkDc8Cvn8xAOj6p5omX0GJGphN9SeD2y4tWsSzJfFU%2FSVFO8bWDaACQT4p7ckd4NK3ERg1NrfEPVXi2ewfu9nu9yERNGkmLD41AIAvcdWOR8of4gDjPuJDp09An1QX7igdwBkH%2BZ3rW5F87yLbcfkYBPPOeg9rNXCBPRgwxbuOvQY6pgHqSl27YlSYNjyfqmaMNKRkQqgylQuVH4tYJ2ikU6%2B3jB9%2Fhngi5JR%2FbG7jCvr4b0VKkY6Fqmg3H1K%2BLczHCQODgtyzK%2B0BnESTe03O0GXrVUjBrlCHKWLD2x3jpAkDJy1VGFAMwgc5hYshrRSH7VRfxDbpLLr4PNYfsHVjT8sk1xYCpE87BSysKN%2FOJ6OiBiky0jpf1HYT3qD1Wa7fm7horbA1kpHd&X-Amz-Signature=8c51ce5639ecb939d91a361afb325b4a751211e9f1cc1625c9b8f3d117c5600f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
