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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBO6MIYO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAGjyZSgN9520CwmHIv1lEOqcusAen6xOfoYB8Cf9MTAAiEAlRthNZUtWNFlREQdahKQ1%2BOH9bwI31c6GtWt5JjQfuQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDX7ek9pglt8UGWESrcAxkydlYFQRDTuj88rJmywjXz5zo1c2YA3rFdiWZOZWlALo%2FNmsGYDnNHIJdTAIzSS7nLdCgnRXoek5UeylBDbcucolNSGqpJW1sDbB9bYPaqm%2FRCeBUTPfNrQbYb3TQiolCawElFmIn4fh%2BwY3kiN5opsqSaniTfBbCOGc2g65pJFROkC9PB7Vc87vdSr%2BrUiPR%2F32bUsJcH4VUTx6H7TaixWrP8ZQ20lL6y3RYdZoAm75DnuYjncYFFlNIOqBObeqvwrX9kwpsa7n%2FzfJ562BpQNdPFJ8zg%2FdYgrcJq7PpboROlfYAUMyMNt%2FEmjydANTPfOlunJpt%2BpnJ7KwAde%2Ba3MWSpRlJLaNM%2FypYYCv%2FKRwpJwpGSQRPi6CHRrfelGGQ2mEOXMMGlKDCmPFtq03KrkKsz48JmKaN7qI3B5VNMtttuNUyp2Q2aA3DW3QHh6phbndQtS4T4ZsbB8PRJUUpzXacNsojn2JRDoMo4NdoLahLL1JwMJZZlKL0PfSLLWG7w4mL3Ng7tHDQIGolv%2FtNqOKQ1Ho8bIsbR3sragGNWVhXieUy4UgRV1eIigEmTtuAO%2FSKRUnfoWZktLz6QGmvu9iNwu54KS1EHXXiR%2FN4tiUJjoftE%2BA%2F6AyBIMMrqwMEGOqUBRaMI4p6lZKJcqv6EWzDhiSvplOVFIapgyGOF8f44uDOVkxoxMUIWtBqwToRj79I87JS%2FH1Y5Pyn7oHUZ1uldj%2B8zmARMMUxCMqTV4reF7k%2By3SQck5GQ%2F9ySVjPhnKRLOLsbtSDr4nQp5zmmrZrgrDFVEhE%2BVP1YGuSvXuTctn2woXAPRuGyoIESN3ZxuJ%2BWpRiSNqsDyhCH25WPICfg2c25Rbfx&X-Amz-Signature=fbca3121f3e9a631d970d9a39b79129a08e2c8fc00ffe211c33255f91cca2206&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBO6MIYO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAGjyZSgN9520CwmHIv1lEOqcusAen6xOfoYB8Cf9MTAAiEAlRthNZUtWNFlREQdahKQ1%2BOH9bwI31c6GtWt5JjQfuQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDX7ek9pglt8UGWESrcAxkydlYFQRDTuj88rJmywjXz5zo1c2YA3rFdiWZOZWlALo%2FNmsGYDnNHIJdTAIzSS7nLdCgnRXoek5UeylBDbcucolNSGqpJW1sDbB9bYPaqm%2FRCeBUTPfNrQbYb3TQiolCawElFmIn4fh%2BwY3kiN5opsqSaniTfBbCOGc2g65pJFROkC9PB7Vc87vdSr%2BrUiPR%2F32bUsJcH4VUTx6H7TaixWrP8ZQ20lL6y3RYdZoAm75DnuYjncYFFlNIOqBObeqvwrX9kwpsa7n%2FzfJ562BpQNdPFJ8zg%2FdYgrcJq7PpboROlfYAUMyMNt%2FEmjydANTPfOlunJpt%2BpnJ7KwAde%2Ba3MWSpRlJLaNM%2FypYYCv%2FKRwpJwpGSQRPi6CHRrfelGGQ2mEOXMMGlKDCmPFtq03KrkKsz48JmKaN7qI3B5VNMtttuNUyp2Q2aA3DW3QHh6phbndQtS4T4ZsbB8PRJUUpzXacNsojn2JRDoMo4NdoLahLL1JwMJZZlKL0PfSLLWG7w4mL3Ng7tHDQIGolv%2FtNqOKQ1Ho8bIsbR3sragGNWVhXieUy4UgRV1eIigEmTtuAO%2FSKRUnfoWZktLz6QGmvu9iNwu54KS1EHXXiR%2FN4tiUJjoftE%2BA%2F6AyBIMMrqwMEGOqUBRaMI4p6lZKJcqv6EWzDhiSvplOVFIapgyGOF8f44uDOVkxoxMUIWtBqwToRj79I87JS%2FH1Y5Pyn7oHUZ1uldj%2B8zmARMMUxCMqTV4reF7k%2By3SQck5GQ%2F9ySVjPhnKRLOLsbtSDr4nQp5zmmrZrgrDFVEhE%2BVP1YGuSvXuTctn2woXAPRuGyoIESN3ZxuJ%2BWpRiSNqsDyhCH25WPICfg2c25Rbfx&X-Amz-Signature=bafdfd91006ae60c466f0f14a82da2b4b3594ef6581962b2543a0714775c3667&X-Amz-SignedHeaders=host&x-id=GetObject)

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
