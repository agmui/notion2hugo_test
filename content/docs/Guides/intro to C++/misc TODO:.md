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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP65UF2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDer%2FqYCMe4Ha6ydH8yPrIPujTF%2F94Zk8cEoynRHv1ARQIgFeeW04O%2B8KgnqZMZjgtjbT2KZu9M2hI9IjFg58GqZJkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYFactiPAebiGxiLyrcA4rOZ3LzpSLr6k3iOZuVC0zHjd25uDHsw0O32UfA4mOfXDRto2PvaHZLYl%2Fipw8ZbMXoIHt7WvySgX1464EYFdfXk8jcd8dfcrMUTJiRImR%2BjaH%2BWSMR4X7wSw0iqxBKmc7mhI7VlEnOWZwdf6Xde7tEPBzhcsReDMsYAESWFkZKnPD9Dx81c18DPOZ6tsQoJ2guc%2BnKpudkiqPUuUBdA0bIkVjHoWLphVqKTTImMhIEMXEdL9TqMIEPURPzCwuwD7dxWVpbTalhsGAqwJdR4alOjtGGDhFLHnmx0IB0uImdqG3Axb1mjWem8e8VOsRwIFcUlH4aadGtwo4s77WjlG8nM9cNXOXis5QLAzzjpOFOhL%2FTwvNJKX%2BvSMwXlXfTbDvc8vljALNgD4aQvk0XqV3j5cETEsLlu1WBoVxR6raGTkAbeFnnpewWJSbLG5DT%2B2gHYg7Qj8iHM83caPwa2MpmaFiWmWnwRHKXmigBYxl8mXddEJY2gFBiIOafC4e4ePjLYw3fnhgAEXIXcFicO84UinAc0V%2Fa9qwUH8pxUWCx31T4t%2FJap%2BRnnK0oumF%2BH%2BOt%2BXwfeXP%2FF73OZX0Ifa%2BFLLHVthkRNMqRxDSOcf7pj0LPdLZgNrFjGBFAMJ3Uw8MGOqUBwkKM03MvhdSbBGTutUQyb8gExmH7PbQCEzXI6lB6KA6vEoffY79vdlEuR5zD2Xx1GfWTNkegUF5ZYg3za5kocdQK7x5OqyN68wY6FHJTCQe4TocWw8k1uFo9VisLnwi4xBxFlLpmgyFthOvMJqjFfPjsJvf1eLJYH38AVlO0D6sFTEyulmRl%2BRuLcRnO2r2xCiW4grjpKcqCnWBnxruQQEa4XAxf&X-Amz-Signature=3fd04de8486eae931397c679c638642fbf6199240e1207b8f6784fe6b26cb5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNP65UF2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDer%2FqYCMe4Ha6ydH8yPrIPujTF%2F94Zk8cEoynRHv1ARQIgFeeW04O%2B8KgnqZMZjgtjbT2KZu9M2hI9IjFg58GqZJkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYFactiPAebiGxiLyrcA4rOZ3LzpSLr6k3iOZuVC0zHjd25uDHsw0O32UfA4mOfXDRto2PvaHZLYl%2Fipw8ZbMXoIHt7WvySgX1464EYFdfXk8jcd8dfcrMUTJiRImR%2BjaH%2BWSMR4X7wSw0iqxBKmc7mhI7VlEnOWZwdf6Xde7tEPBzhcsReDMsYAESWFkZKnPD9Dx81c18DPOZ6tsQoJ2guc%2BnKpudkiqPUuUBdA0bIkVjHoWLphVqKTTImMhIEMXEdL9TqMIEPURPzCwuwD7dxWVpbTalhsGAqwJdR4alOjtGGDhFLHnmx0IB0uImdqG3Axb1mjWem8e8VOsRwIFcUlH4aadGtwo4s77WjlG8nM9cNXOXis5QLAzzjpOFOhL%2FTwvNJKX%2BvSMwXlXfTbDvc8vljALNgD4aQvk0XqV3j5cETEsLlu1WBoVxR6raGTkAbeFnnpewWJSbLG5DT%2B2gHYg7Qj8iHM83caPwa2MpmaFiWmWnwRHKXmigBYxl8mXddEJY2gFBiIOafC4e4ePjLYw3fnhgAEXIXcFicO84UinAc0V%2Fa9qwUH8pxUWCx31T4t%2FJap%2BRnnK0oumF%2BH%2BOt%2BXwfeXP%2FF73OZX0Ifa%2BFLLHVthkRNMqRxDSOcf7pj0LPdLZgNrFjGBFAMJ3Uw8MGOqUBwkKM03MvhdSbBGTutUQyb8gExmH7PbQCEzXI6lB6KA6vEoffY79vdlEuR5zD2Xx1GfWTNkegUF5ZYg3za5kocdQK7x5OqyN68wY6FHJTCQe4TocWw8k1uFo9VisLnwi4xBxFlLpmgyFthOvMJqjFfPjsJvf1eLJYH38AVlO0D6sFTEyulmRl%2BRuLcRnO2r2xCiW4grjpKcqCnWBnxruQQEa4XAxf&X-Amz-Signature=3b3bb008420cd63c54d42fe5cbc1a3862c72bd716dc853312a15998f50cf4f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
