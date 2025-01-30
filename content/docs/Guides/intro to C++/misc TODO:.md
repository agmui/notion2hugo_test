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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYV5J627%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBx2am07aOSCbZ62gXYWzzWEfTvPcvZX5OB6O6La9F2AiAhnPauYkp9uimezF6GJs8t0x2cPvmnCqzOIwJb0I19%2BCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZ8nigGsmEeRVafzKtwDqENGregNZAC0UxCt00ctW7ZzZCxZEgtLw55UxT67%2BhyKx2h5zFvd8OesVMHuLZR85VGTUIxSCpeQtgxXi%2F1bxigzgCMbd4IXtAjJHa5I2YMVAJGDR90qxqkYYdI3lKdlkePFGQO5oXc7Q9JhOQcCDIkCTmikhN%2FCt7XU0JOpW4MMk3%2Fdr1OLWkHWv%2FnV52tooKi8fDqm0Avv3XcRGxmOY2Prd1uqZv2IV28JSKNw9Pi6RNUnHaDM6GW1C0LLDNa3PJM0m%2FJZnpJYw%2FMT352NmNM%2FHX1QlVI%2FVRKSd3VIvbNJx2XjQKwHMVf7jAVcrJZVOeIWVtLjJ0R6oftwYvvuGBTysokkKRAdl23pr%2BstMu0MIR11wci34XnffQa%2FFpRbh6a8U0PtS1RR7pkAQ009MNNbBBwp29Rt1csiLlCgu6pcCV8I4WfAnTBwM%2Br2YAePegtzPKodQGLS6b0FNly45VCU1eN59W6%2Fpw6LP2qq3zmWrE8GUSQ4iTlRr6ydigaY9Hv%2FSc3chLGQek5jvBPfyc%2FcLEu0eFfjLtv3Oxx28j8q4ucMkZV9fT%2FAjF3n%2FNs43%2F9vvvOrtFaB1bNfGJYzcQT5DcYutPJQcq64Ku3PEoU1Pq6wzwiCMNRabE4wvP7vvAY6pgEWX0%2BviAXWclcwGhikLLPQcjPBGPeow9n2yAQofEDI73uF2MQxXx6bZH%2FT0x9S5cIOU2SmaKqNi7w0kzDZP3mHdFvCOuCfQC5rxE4QvQXZ1P974W%2FXy93pXR8cZk1A2JWHrMCs6a67vaUCavYYze232oa8QG1SAyZVILlgPx5Fr6azU%2BpIws8oskRSXxyzj0lPNrRNbg5DVV4DX23VkDTDdMo9LSdd&X-Amz-Signature=cc335ad11e1113187a2f630347f9ae5e83258d83976859f0c203b273f144436e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYV5J627%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBx2am07aOSCbZ62gXYWzzWEfTvPcvZX5OB6O6La9F2AiAhnPauYkp9uimezF6GJs8t0x2cPvmnCqzOIwJb0I19%2BCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZ8nigGsmEeRVafzKtwDqENGregNZAC0UxCt00ctW7ZzZCxZEgtLw55UxT67%2BhyKx2h5zFvd8OesVMHuLZR85VGTUIxSCpeQtgxXi%2F1bxigzgCMbd4IXtAjJHa5I2YMVAJGDR90qxqkYYdI3lKdlkePFGQO5oXc7Q9JhOQcCDIkCTmikhN%2FCt7XU0JOpW4MMk3%2Fdr1OLWkHWv%2FnV52tooKi8fDqm0Avv3XcRGxmOY2Prd1uqZv2IV28JSKNw9Pi6RNUnHaDM6GW1C0LLDNa3PJM0m%2FJZnpJYw%2FMT352NmNM%2FHX1QlVI%2FVRKSd3VIvbNJx2XjQKwHMVf7jAVcrJZVOeIWVtLjJ0R6oftwYvvuGBTysokkKRAdl23pr%2BstMu0MIR11wci34XnffQa%2FFpRbh6a8U0PtS1RR7pkAQ009MNNbBBwp29Rt1csiLlCgu6pcCV8I4WfAnTBwM%2Br2YAePegtzPKodQGLS6b0FNly45VCU1eN59W6%2Fpw6LP2qq3zmWrE8GUSQ4iTlRr6ydigaY9Hv%2FSc3chLGQek5jvBPfyc%2FcLEu0eFfjLtv3Oxx28j8q4ucMkZV9fT%2FAjF3n%2FNs43%2F9vvvOrtFaB1bNfGJYzcQT5DcYutPJQcq64Ku3PEoU1Pq6wzwiCMNRabE4wvP7vvAY6pgEWX0%2BviAXWclcwGhikLLPQcjPBGPeow9n2yAQofEDI73uF2MQxXx6bZH%2FT0x9S5cIOU2SmaKqNi7w0kzDZP3mHdFvCOuCfQC5rxE4QvQXZ1P974W%2FXy93pXR8cZk1A2JWHrMCs6a67vaUCavYYze232oa8QG1SAyZVILlgPx5Fr6azU%2BpIws8oskRSXxyzj0lPNrRNbg5DVV4DX23VkDTDdMo9LSdd&X-Amz-Signature=a31fffeca5f9cab3ec2734b76dee6743b02fcb0c8a3dc64ea48498d521260723&X-Amz-SignedHeaders=host&x-id=GetObject)

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
