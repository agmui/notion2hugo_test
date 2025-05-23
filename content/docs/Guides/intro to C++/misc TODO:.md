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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYWOCXM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHUmifGtkCWRbQOGEyxsSZV9j2ED4pDEJNCmOsuVjW9gAiEAhYPYrIcy6pQzDzLNuCXFP%2BHUnfTxCM67OTT7q3QWeqAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcvO46olL1Vu87PcCrcA9%2F37s8Ze4Z1zGknHkSTiCjh5NQP8iqTxWyqjWS5h4x2kdBk0UQ6I3Ufl9RGyGvd4R6IeUmzdltM8bR88eEt8zeAAlnmECp4SI0DNU3Lh4gR5RxOgLrG0T3Q%2BUI51oa%2BtcRSYcovNGs84Zbt4yPQz4okS87Q12f9FHPwFa7kDzpoiCR8Nu3j7%2FUNcEeAIBMDyFQA44rQ7iTlVPccRusXdienjmVLNnGhetsX2NtNIu%2B0lfhGmpgu97m6bqEdg3gN3jHQbFjp5wdchCRVt5wKxNBHBvKLLVN%2BwhDSDKvd4haxtjy6mTsdHpptwIcOYzzXP1t5wFBb1i0ZuUXsZSsHS0gJ4LXlAzbCK0hEAqjxBK4PDSMRDv42YwtS9vbIS4hp4lwBsX9OP3a4%2F%2FOAjql7fDjMOiHCovlb6eW1uW2rToJMo3%2BYEzr1zTcV%2BRG7V2aVUQ%2BSHniaoPxdjmKqT0QNiTVFTd%2BenC1V6yDgWh0q7%2Bk3AiM%2Fufuwin2tfJiAW99VdDyWgEPJjozmMTrqvFgbzjwarXzEunNeYX2h55IN%2BOAl%2F5sl64wZwBZ1%2BFGWOJLh1HJoS7kRDheDyRFGH%2FOXBhyzblXWoD9lzrueUtNB16mXgMLy0R6nAYw7ByM4MI3%2FwsEGOqUBUyV9GlZaGELskcLNB%2FvVRydTxJNQHkQIRDdRozi1oiMWn1CpdBkwvt4o6SdQuHU1gWqKFQklbZLETeaIN7LrWtf2D0WSnkAQ58KuhxoIlnJXaqw5zAMUun3YxuNHQ5yWvE7rHHCur8BnpylNnWXB60jy8Vn2Ny2msFTSLm%2BtVeC7L5DmsXS69MJC81mWpC95r%2BS94AOU3SbSGJWMLW52iZl22puI&X-Amz-Signature=32e9f0aee7bf6c74fc79d06a7fc7072ee58c8f39d37255a4df35b00b3033e728&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYWOCXM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHUmifGtkCWRbQOGEyxsSZV9j2ED4pDEJNCmOsuVjW9gAiEAhYPYrIcy6pQzDzLNuCXFP%2BHUnfTxCM67OTT7q3QWeqAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcvO46olL1Vu87PcCrcA9%2F37s8Ze4Z1zGknHkSTiCjh5NQP8iqTxWyqjWS5h4x2kdBk0UQ6I3Ufl9RGyGvd4R6IeUmzdltM8bR88eEt8zeAAlnmECp4SI0DNU3Lh4gR5RxOgLrG0T3Q%2BUI51oa%2BtcRSYcovNGs84Zbt4yPQz4okS87Q12f9FHPwFa7kDzpoiCR8Nu3j7%2FUNcEeAIBMDyFQA44rQ7iTlVPccRusXdienjmVLNnGhetsX2NtNIu%2B0lfhGmpgu97m6bqEdg3gN3jHQbFjp5wdchCRVt5wKxNBHBvKLLVN%2BwhDSDKvd4haxtjy6mTsdHpptwIcOYzzXP1t5wFBb1i0ZuUXsZSsHS0gJ4LXlAzbCK0hEAqjxBK4PDSMRDv42YwtS9vbIS4hp4lwBsX9OP3a4%2F%2FOAjql7fDjMOiHCovlb6eW1uW2rToJMo3%2BYEzr1zTcV%2BRG7V2aVUQ%2BSHniaoPxdjmKqT0QNiTVFTd%2BenC1V6yDgWh0q7%2Bk3AiM%2Fufuwin2tfJiAW99VdDyWgEPJjozmMTrqvFgbzjwarXzEunNeYX2h55IN%2BOAl%2F5sl64wZwBZ1%2BFGWOJLh1HJoS7kRDheDyRFGH%2FOXBhyzblXWoD9lzrueUtNB16mXgMLy0R6nAYw7ByM4MI3%2FwsEGOqUBUyV9GlZaGELskcLNB%2FvVRydTxJNQHkQIRDdRozi1oiMWn1CpdBkwvt4o6SdQuHU1gWqKFQklbZLETeaIN7LrWtf2D0WSnkAQ58KuhxoIlnJXaqw5zAMUun3YxuNHQ5yWvE7rHHCur8BnpylNnWXB60jy8Vn2Ny2msFTSLm%2BtVeC7L5DmsXS69MJC81mWpC95r%2BS94AOU3SbSGJWMLW52iZl22puI&X-Amz-Signature=a79dacadb0d95aedf701b042778f552e5e9b0c2f1126d8f8f4fc9f36a7659f86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
