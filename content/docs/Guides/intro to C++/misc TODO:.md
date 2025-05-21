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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXMDAA4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZR84A9pzSPn6Tp1DPiIlPbuQB%2B7HPFn7Aqi5o2wiJIAIgIdlAG3PtbZE0wx7%2BkHDNhmuq8p3ZJmaO4jJTzZ7jbBIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3v2vEDXKD909dECSrcAwTVuD9WafnMmv%2BvPrnP7EUBtJADRkFwlfdJ5etuX99zKCcXKuy4IiiuQ5DhMK%2Bus%2B4v1j%2FDM5IBt0m0HV0IgM%2FkUrULk%2BVsDN82ueOo5NbHfkznU7wMztsVF5UGQOBZrrCS8CNuiNH6bSDJH9vz%2FQLzrLYmBaWh4nTuq9CcYfAszZQCClc5o%2B1nElzjiL3wX3ifTfPp8WVbr80Rrgi8%2BBG5PSPyYGK6802Ux3kDj5k9tIxxDChbeIoLJtd%2BPCWTh03BBPtvIoAvrSm7yf6y0sud8Ele1q%2F7uf8uVTnJKZtAYr7q0LPuczJMLTAMQF5rRqyOtOyWZbCBOQNRXu2vRLBhjyWWNgUYqzIB8HLASvcxaiWHXQihEPCc4jNV0Ve5XXxbw5bvIfYtt%2FWeEXURdiohFT4WDF3f%2BU6V4jmUERtA%2F6dO739%2FlmprYUQOdY5XmyMBdCODQ6C7VXyhAz4ZYNtsqfFw6jCT0jMDktOWrbjAI209BvEDpza2tvNWN4w5LHCet6RbvjpD%2F%2FTKNXjuopxVKpz8P%2FWLfvGH%2BUSkvF3U0L1y18lVZtbU6DfBYUTDWTuDJQnUdIzOCT1FYPipta8tRt%2FFmSFv4DEW7M8G8o2FxOMkuRLE%2FJZoOcMGMN%2BPtcEGOqUBtXabwklZRQgtkSFOr0z0jBmK6r1UkV%2BZiY8oZeR%2B41%2FczOS47KemZ2glMpQzRGnCgKeWK6ayRM8QD2pfDkOnMHoB7bfFGJo9Wgtjoo0a0yXzZRBZPoCDz2T%2FkbGt%2BQOILt8cCdfc2ixIdxtPkThHPcdNoAUOIjSIxsjNaWwxYc5chFAVTDc3xLrRAZIl3dD8EWsc4oG8EofFbP4pnJOq5AcdCudj&X-Amz-Signature=65de4aa0775428daeb28de4971b758add382616b2e811dc3faae229be5ddded4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXMDAA4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZR84A9pzSPn6Tp1DPiIlPbuQB%2B7HPFn7Aqi5o2wiJIAIgIdlAG3PtbZE0wx7%2BkHDNhmuq8p3ZJmaO4jJTzZ7jbBIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3v2vEDXKD909dECSrcAwTVuD9WafnMmv%2BvPrnP7EUBtJADRkFwlfdJ5etuX99zKCcXKuy4IiiuQ5DhMK%2Bus%2B4v1j%2FDM5IBt0m0HV0IgM%2FkUrULk%2BVsDN82ueOo5NbHfkznU7wMztsVF5UGQOBZrrCS8CNuiNH6bSDJH9vz%2FQLzrLYmBaWh4nTuq9CcYfAszZQCClc5o%2B1nElzjiL3wX3ifTfPp8WVbr80Rrgi8%2BBG5PSPyYGK6802Ux3kDj5k9tIxxDChbeIoLJtd%2BPCWTh03BBPtvIoAvrSm7yf6y0sud8Ele1q%2F7uf8uVTnJKZtAYr7q0LPuczJMLTAMQF5rRqyOtOyWZbCBOQNRXu2vRLBhjyWWNgUYqzIB8HLASvcxaiWHXQihEPCc4jNV0Ve5XXxbw5bvIfYtt%2FWeEXURdiohFT4WDF3f%2BU6V4jmUERtA%2F6dO739%2FlmprYUQOdY5XmyMBdCODQ6C7VXyhAz4ZYNtsqfFw6jCT0jMDktOWrbjAI209BvEDpza2tvNWN4w5LHCet6RbvjpD%2F%2FTKNXjuopxVKpz8P%2FWLfvGH%2BUSkvF3U0L1y18lVZtbU6DfBYUTDWTuDJQnUdIzOCT1FYPipta8tRt%2FFmSFv4DEW7M8G8o2FxOMkuRLE%2FJZoOcMGMN%2BPtcEGOqUBtXabwklZRQgtkSFOr0z0jBmK6r1UkV%2BZiY8oZeR%2B41%2FczOS47KemZ2glMpQzRGnCgKeWK6ayRM8QD2pfDkOnMHoB7bfFGJo9Wgtjoo0a0yXzZRBZPoCDz2T%2FkbGt%2BQOILt8cCdfc2ixIdxtPkThHPcdNoAUOIjSIxsjNaWwxYc5chFAVTDc3xLrRAZIl3dD8EWsc4oG8EofFbP4pnJOq5AcdCudj&X-Amz-Signature=b45ee141d86ae6b1900116468a18d6abbf83090092051a8b01e07915b435ee2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
