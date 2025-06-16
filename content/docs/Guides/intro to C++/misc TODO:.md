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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6L5OLQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCqqvb%2BFVJYlS7pb44OSydRbhpMKbi7pkKt%2FPQoBJ1sCQIgYeaepklUrkrsM6bF5USR9G8bpwEVxHRTnhR38iFsY9Eq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF5qyRgfHZwAHfLUkircA6yID%2FtO%2BYGrUTNTMvNQv9rHCVmP6tewXjytcIJxcF5ni%2BSMpnjvwd18H58G%2BPkoBDGBFmN2IObB2CSjfR%2FeHDU42GiEg0i44JaT3OzED9bc9WABpZ2RzveuSZhxm8aX4%2FLiXzefJ%2Fp0u55scvn%2BDuqLefLmu%2BajheWQSj5MBI75dTSmmuCbzBmmzCv%2FlEbkOmKW%2FKbiIzUw39AXz84NKgJHGmZHQqvlh2oV9fArCAfjduNy9VhEQjLS8tzg3%2F3cdatjBr6DNg54NfVvmLnAqySs%2B9kWdY2qoGtzenrxbBYHGWLd6v0Gw%2BfaOpUq9OtJ3q0b%2FIWnsl9hjSoTx37ur8kaS26ble0L857ji6DL1iktmATvXa0mflmE6SaBjjuHX%2Fq6PNIqsYA9jZ6tKGQXKK0g44mrLdcL4HZHpnK%2FACPcn842NNtNx%2BK7b2TOo9cymVR3zyh4yq1m2ybx46hXOEshEXSwpWvFzz8aijEv4TWnbeQeAJl7eQlFfWnLnBxHTme%2BYNQW%2FfBfzCeziImFI7szzxzaaG0MaSO0X0mns4LSQg0IHxZOZ7KeCKt7gzoV7og662YzJrIzsJ84M0xdeZyxB27yG%2BlkUatDmdZMrYswf9wrCKjHPi3WXgcrMNGvwcIGOqUBD1wim6u0%2B242iES9lqTxY09d4Skeqw0KUiAVm8KbzbPTfYAQV6t%2FgeDKWFuCyw%2B%2FQ2xAGbQhvv49k876yPwTwMcr9w%2BE4poaFy5nkRCbhKnKmnEFEfWMZLvgwMpfKUzKzca52l4lKWI%2F0iznHoiy8rP1mhMBWXPflSV7iCWwpNKR7iIvzqLdUaMFMDDdEgag6olPjml7kDQmtY0Wg89g9txrDc3a&X-Amz-Signature=05f85c841aca15e7e9c5df7f35381793fdb996088ab6289fdbcc86aaf2043713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6L5OLQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCqqvb%2BFVJYlS7pb44OSydRbhpMKbi7pkKt%2FPQoBJ1sCQIgYeaepklUrkrsM6bF5USR9G8bpwEVxHRTnhR38iFsY9Eq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF5qyRgfHZwAHfLUkircA6yID%2FtO%2BYGrUTNTMvNQv9rHCVmP6tewXjytcIJxcF5ni%2BSMpnjvwd18H58G%2BPkoBDGBFmN2IObB2CSjfR%2FeHDU42GiEg0i44JaT3OzED9bc9WABpZ2RzveuSZhxm8aX4%2FLiXzefJ%2Fp0u55scvn%2BDuqLefLmu%2BajheWQSj5MBI75dTSmmuCbzBmmzCv%2FlEbkOmKW%2FKbiIzUw39AXz84NKgJHGmZHQqvlh2oV9fArCAfjduNy9VhEQjLS8tzg3%2F3cdatjBr6DNg54NfVvmLnAqySs%2B9kWdY2qoGtzenrxbBYHGWLd6v0Gw%2BfaOpUq9OtJ3q0b%2FIWnsl9hjSoTx37ur8kaS26ble0L857ji6DL1iktmATvXa0mflmE6SaBjjuHX%2Fq6PNIqsYA9jZ6tKGQXKK0g44mrLdcL4HZHpnK%2FACPcn842NNtNx%2BK7b2TOo9cymVR3zyh4yq1m2ybx46hXOEshEXSwpWvFzz8aijEv4TWnbeQeAJl7eQlFfWnLnBxHTme%2BYNQW%2FfBfzCeziImFI7szzxzaaG0MaSO0X0mns4LSQg0IHxZOZ7KeCKt7gzoV7og662YzJrIzsJ84M0xdeZyxB27yG%2BlkUatDmdZMrYswf9wrCKjHPi3WXgcrMNGvwcIGOqUBD1wim6u0%2B242iES9lqTxY09d4Skeqw0KUiAVm8KbzbPTfYAQV6t%2FgeDKWFuCyw%2B%2FQ2xAGbQhvv49k876yPwTwMcr9w%2BE4poaFy5nkRCbhKnKmnEFEfWMZLvgwMpfKUzKzca52l4lKWI%2F0iznHoiy8rP1mhMBWXPflSV7iCWwpNKR7iIvzqLdUaMFMDDdEgag6olPjml7kDQmtY0Wg89g9txrDc3a&X-Amz-Signature=c145fdf5425644acce75f0d58334d7073cace13f8fb139ecee19ebc47b57ddaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
