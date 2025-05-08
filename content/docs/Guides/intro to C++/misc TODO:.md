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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRHOBHG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9gaktWhbkXX5jSh0dDRJiruwQe0SSOHVzSbMAmwm2OAiA3ifkRow7Ud2Il4%2F7tCd3ey8K6fz5JuW7EpxxY2QRqbCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpYtMR%2BhCBQcGAIbxKtwDPcq8%2Fdwm3JGJYs4OAZJ9ON2gvXJ1N0HVsgrb1IfH6F5UI9sPCWc17qEisggRoLvTc9%2BAtKi0w1cx6oyC%2F7uTJEciPL62rUWxrXUTRd9E1tcZ45WdfSdLx3qCOl9vpXyoM%2BiQ67M6M90U9lIHgh2QuVNc9NYfa6aDaO%2BGfYpONG7%2FNgTtBLPZwA2wT0hQ4YTnm07oCXXcM95rsVmEH5WTe9LJOzhDca1ZJtnPb78tiTd%2F%2F122tG5Nks5m7YO4Ue4xGtfToNHLs66AIRG5%2BqP0sZ6k2PVNVdI5nVQZEWhy3ObYZfjp5SI60Kc3KG6rfjs%2FuwY6Q6rLKwCr%2B4t55f0gy3sO%2BGkQOS3o%2FBia5TVpCjXB%2F5rEz5tyomjdWSc9KHFm1DhdIIbPTTGcc%2B8uW0KfrkIDAsba9oHnm8Goeyqh%2FpR7SbPjc%2B9nVlx6HKjJpvYCdaxvXZN%2FwIbTIrG8l%2BaHLAb5K1VDy4WkRJBl%2BhekRcr5gNSUJl6Q%2FQtlgAuBLTTUVo%2FhFE6bh8ql7VmrTPbOvKyb0jatl1dEbb2eBV0BRh01QCuQ9ai6hv%2B5VoUKctVR%2Bsl7uF4gPaca9NqqyOgkAQUx5v55brhV%2BYqvuL1iLfolejkCHvwCi047NoUw5pn0wAY6pgFK8TCvD8sYQ0M0LSsGtsSTJaC2unG%2BEL4h3f1v7%2BaIvy6%2FiIprmMnyYIPNG3sXECdY0xpf%2BtRvpvIin8BLEZpFjidxIZ8F%2FeF22TrYY5Tmgufr10Bp%2Bq2GKSw%2Fr%2FHs1PZhW79AIAmdf2IV0tB%2FFVhHvXxStBF%2F8LqxzrWUD7uOUinY7QUAUBiGuBc8cp9%2FOsIFgCX71x8aK0t7BUaiW6nyWOnu6JSs&X-Amz-Signature=51ba6c155e3b0545b9647f0cf85b9fbadeecf8e4a5ebe325718127b7f208b5dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRHOBHG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9gaktWhbkXX5jSh0dDRJiruwQe0SSOHVzSbMAmwm2OAiA3ifkRow7Ud2Il4%2F7tCd3ey8K6fz5JuW7EpxxY2QRqbCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpYtMR%2BhCBQcGAIbxKtwDPcq8%2Fdwm3JGJYs4OAZJ9ON2gvXJ1N0HVsgrb1IfH6F5UI9sPCWc17qEisggRoLvTc9%2BAtKi0w1cx6oyC%2F7uTJEciPL62rUWxrXUTRd9E1tcZ45WdfSdLx3qCOl9vpXyoM%2BiQ67M6M90U9lIHgh2QuVNc9NYfa6aDaO%2BGfYpONG7%2FNgTtBLPZwA2wT0hQ4YTnm07oCXXcM95rsVmEH5WTe9LJOzhDca1ZJtnPb78tiTd%2F%2F122tG5Nks5m7YO4Ue4xGtfToNHLs66AIRG5%2BqP0sZ6k2PVNVdI5nVQZEWhy3ObYZfjp5SI60Kc3KG6rfjs%2FuwY6Q6rLKwCr%2B4t55f0gy3sO%2BGkQOS3o%2FBia5TVpCjXB%2F5rEz5tyomjdWSc9KHFm1DhdIIbPTTGcc%2B8uW0KfrkIDAsba9oHnm8Goeyqh%2FpR7SbPjc%2B9nVlx6HKjJpvYCdaxvXZN%2FwIbTIrG8l%2BaHLAb5K1VDy4WkRJBl%2BhekRcr5gNSUJl6Q%2FQtlgAuBLTTUVo%2FhFE6bh8ql7VmrTPbOvKyb0jatl1dEbb2eBV0BRh01QCuQ9ai6hv%2B5VoUKctVR%2Bsl7uF4gPaca9NqqyOgkAQUx5v55brhV%2BYqvuL1iLfolejkCHvwCi047NoUw5pn0wAY6pgFK8TCvD8sYQ0M0LSsGtsSTJaC2unG%2BEL4h3f1v7%2BaIvy6%2FiIprmMnyYIPNG3sXECdY0xpf%2BtRvpvIin8BLEZpFjidxIZ8F%2FeF22TrYY5Tmgufr10Bp%2Bq2GKSw%2Fr%2FHs1PZhW79AIAmdf2IV0tB%2FFVhHvXxStBF%2F8LqxzrWUD7uOUinY7QUAUBiGuBc8cp9%2FOsIFgCX71x8aK0t7BUaiW6nyWOnu6JSs&X-Amz-Signature=a832ea08c8b87d56eb4b351348071b308d5507aaecef9adaac818daf7b7244b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
