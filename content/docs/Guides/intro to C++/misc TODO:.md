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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYEQNVFA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC%2BJgmg%2BI1ITlawMGsGdJgXavDmeHELPuV8YlRN%2BondAiEAlbNDHM7RpbSQ3PBA0vvcV%2FbQn%2FvEhtcmYPdBC5yhSVkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJKXduWt6Z5PReVIrircA9A9h8gaZhroQbFHBh3UfBBzdnHxn7Rguhr8JN%2BTBG59n61ZE7Mqod188R4u2SC%2FY3QuO81edqFIt3nv4jCMvT%2FaSMQlxIAvX92S1Fyr4NJT4HL9aVqNnlzGux1Dhu%2BFzedy9hHDn11qLU18%2Bijfmw4Q%2F85F2dn%2FtZpKXLFUJJquHS0Zd5l8WjlNbbQSoTOxOtnMuMUbNZHH%2BhlGaGPvSKheT0B5jTvL%2FbuhbzWLL2NGw%2BfcLMkhjSqwvt1L4q9UnPocYm8b%2F1pt9X%2B6XWEcTk0xQDK55ZTNpvJHuAry%2FHImbC%2F2vdOQ6IZcbGiHeqrEcOWXoGEmrFZPoT7ioDLSY27FkClT4VopkHnQOz5znHkvpaB7nNhxvxgQy0uEJQUFcuniO2BQa1vJRQwVw3pqVGrsRHz2MIUeJlG8ADMDzRzdUPRJ4UKGGQ%2FoRtKWNpwXE2rRwckaAw%2BeraopHhrAszJ%2Fu5C2EIGrkttKg3VyI9UFu0I3znk7XdKxHVHDekMP%2FSef2%2BO952teyAWliHywjtZf%2FKh7BRLPR8yAtnoJs6RGAHxfnYXMpkJ4Vw9iSOISAJyxV0svM4TCFzKX8%2BBlGLpYTIKbKNm4lhKhYFxceNauNdyigAwiBFDUAiUKMP%2Bw48AGOqUB6XaiCLB9tT04MrfvyD7wuU1zKf3Hf9dABEQQmVDtgSJv7wmJRQ4j2EHlEqXJLcTzO02L8OMEx1XxCn8z1zh3bP50WaKEieOD3vnjY4l42J%2BFfOOasxCtbAnr57ZGewezPqiKHmhdQoheqdNevPvAis9v%2BRFHPVYm3p7T1V9ynrUk7MQcIyBwBONSoupFc8yIWoJP2N7kdkRlPv54lFPeB6wOQqxu&X-Amz-Signature=789ecae9de2dc97d750e50c6e75ab613572f968122454f2b9dece63a0a086a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYEQNVFA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC%2BJgmg%2BI1ITlawMGsGdJgXavDmeHELPuV8YlRN%2BondAiEAlbNDHM7RpbSQ3PBA0vvcV%2FbQn%2FvEhtcmYPdBC5yhSVkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJKXduWt6Z5PReVIrircA9A9h8gaZhroQbFHBh3UfBBzdnHxn7Rguhr8JN%2BTBG59n61ZE7Mqod188R4u2SC%2FY3QuO81edqFIt3nv4jCMvT%2FaSMQlxIAvX92S1Fyr4NJT4HL9aVqNnlzGux1Dhu%2BFzedy9hHDn11qLU18%2Bijfmw4Q%2F85F2dn%2FtZpKXLFUJJquHS0Zd5l8WjlNbbQSoTOxOtnMuMUbNZHH%2BhlGaGPvSKheT0B5jTvL%2FbuhbzWLL2NGw%2BfcLMkhjSqwvt1L4q9UnPocYm8b%2F1pt9X%2B6XWEcTk0xQDK55ZTNpvJHuAry%2FHImbC%2F2vdOQ6IZcbGiHeqrEcOWXoGEmrFZPoT7ioDLSY27FkClT4VopkHnQOz5znHkvpaB7nNhxvxgQy0uEJQUFcuniO2BQa1vJRQwVw3pqVGrsRHz2MIUeJlG8ADMDzRzdUPRJ4UKGGQ%2FoRtKWNpwXE2rRwckaAw%2BeraopHhrAszJ%2Fu5C2EIGrkttKg3VyI9UFu0I3znk7XdKxHVHDekMP%2FSef2%2BO952teyAWliHywjtZf%2FKh7BRLPR8yAtnoJs6RGAHxfnYXMpkJ4Vw9iSOISAJyxV0svM4TCFzKX8%2BBlGLpYTIKbKNm4lhKhYFxceNauNdyigAwiBFDUAiUKMP%2Bw48AGOqUB6XaiCLB9tT04MrfvyD7wuU1zKf3Hf9dABEQQmVDtgSJv7wmJRQ4j2EHlEqXJLcTzO02L8OMEx1XxCn8z1zh3bP50WaKEieOD3vnjY4l42J%2BFfOOasxCtbAnr57ZGewezPqiKHmhdQoheqdNevPvAis9v%2BRFHPVYm3p7T1V9ynrUk7MQcIyBwBONSoupFc8yIWoJP2N7kdkRlPv54lFPeB6wOQqxu&X-Amz-Signature=b6387703bc8b12bf7173cdf4b6c600af0ce8637d77b35a60e8e09e157d59003b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
