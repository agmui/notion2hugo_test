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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQXXCJFZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC5HSjY%2FPBW%2FklCE5m7JAorg2kJ1k07EhhGTww46bq5%2FAIhALfkB0hXfTGeljeV9%2B%2FTExIZqGB8NXyFlD%2Fgfh6EZ5QkKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUjWJReIjd3ECeIZMq3AMNvCp2mhnFabbwww0AmJDnxLMOjOYtcmeUTYSFS8W1z9wf9apOxGehYpXAMqR8YjiWO6OEZEupKqQDR%2FGpwAVnFv47owlB9jtGuDDvE%2BIlu5j85riM%2FK48k3Fm%2BiXnQCw20mRlaDfva0%2F0xkxV2Ko8b3ZRD%2B2RtxhPm%2FgtSYnkqCjmKZkE0164u8%2Fb1%2Bmpdi8B8Pvfnxc1R2%2BoS4hsDdgm3Z7IP%2BuRKtT5x1DuRSZbq4PAuTUTsjl7a9nRO%2FWwPAqRk5Q5DggV3CJfc7TT%2FOAermpOREnk4qnXAy4JCBZ3qATf6F%2BWJdmopxOg140xB9JgNwOQ8URIp5JpD%2FnEXlfQAyCl5L2ScHCxE%2F2Q%2BUl01FbTKdxucnuwZ5yCahPMEr3JEwMlV9H0v8%2FMQypY49hU1sUkS2tVIcAX6rJBm67A7GlrCYvhsTSCH58vijZSxXwzMFDJTYtuNSYDke2N1UT0%2BOM8zW7nmN3iJsJ0FPj%2Fn%2FhATrsLlykTkUVEprGsDE84PoyhlKAMpR54BKTQiejj2s2A40GQonCJPFP1JMR9b4uX3xob2Te6SGLoezjWaMGkOuHlt%2B0xgCAAxvLlQC4IcXQFb9b3EbFZu3DfHAx%2Ff55zJnGs8GhORkca0jC269vABjqkAbtyr%2B9kUIfdcnhQ3ZKvK4uwIzzVisNKZ%2BG0JkQKp%2FR32Q8JIfeLbj7lf8X8%2Bf5%2FR0CDqaYyjtHIp8vHFjkZf2%2BSkbq3%2BD8Aw%2B3TrKPQYxBcYvQ%2FFdxJ06hqiKeSToAV%2Bp2ZOFGW0xyFdMW%2BXvEqhBNTf6t7hIaVBwxYT%2FoDciB%2FDbxdlry0%2F0CGpVGtLscxMBdKmig0JIObWOdLKvsfSMm2rHDM&X-Amz-Signature=8704982eb250ee266070e1eeff1428daa629b78706198247194cfbc6fb5a9842&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQXXCJFZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC5HSjY%2FPBW%2FklCE5m7JAorg2kJ1k07EhhGTww46bq5%2FAIhALfkB0hXfTGeljeV9%2B%2FTExIZqGB8NXyFlD%2Fgfh6EZ5QkKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUjWJReIjd3ECeIZMq3AMNvCp2mhnFabbwww0AmJDnxLMOjOYtcmeUTYSFS8W1z9wf9apOxGehYpXAMqR8YjiWO6OEZEupKqQDR%2FGpwAVnFv47owlB9jtGuDDvE%2BIlu5j85riM%2FK48k3Fm%2BiXnQCw20mRlaDfva0%2F0xkxV2Ko8b3ZRD%2B2RtxhPm%2FgtSYnkqCjmKZkE0164u8%2Fb1%2Bmpdi8B8Pvfnxc1R2%2BoS4hsDdgm3Z7IP%2BuRKtT5x1DuRSZbq4PAuTUTsjl7a9nRO%2FWwPAqRk5Q5DggV3CJfc7TT%2FOAermpOREnk4qnXAy4JCBZ3qATf6F%2BWJdmopxOg140xB9JgNwOQ8URIp5JpD%2FnEXlfQAyCl5L2ScHCxE%2F2Q%2BUl01FbTKdxucnuwZ5yCahPMEr3JEwMlV9H0v8%2FMQypY49hU1sUkS2tVIcAX6rJBm67A7GlrCYvhsTSCH58vijZSxXwzMFDJTYtuNSYDke2N1UT0%2BOM8zW7nmN3iJsJ0FPj%2Fn%2FhATrsLlykTkUVEprGsDE84PoyhlKAMpR54BKTQiejj2s2A40GQonCJPFP1JMR9b4uX3xob2Te6SGLoezjWaMGkOuHlt%2B0xgCAAxvLlQC4IcXQFb9b3EbFZu3DfHAx%2Ff55zJnGs8GhORkca0jC269vABjqkAbtyr%2B9kUIfdcnhQ3ZKvK4uwIzzVisNKZ%2BG0JkQKp%2FR32Q8JIfeLbj7lf8X8%2Bf5%2FR0CDqaYyjtHIp8vHFjkZf2%2BSkbq3%2BD8Aw%2B3TrKPQYxBcYvQ%2FFdxJ06hqiKeSToAV%2Bp2ZOFGW0xyFdMW%2BXvEqhBNTf6t7hIaVBwxYT%2FoDciB%2FDbxdlry0%2F0CGpVGtLscxMBdKmig0JIObWOdLKvsfSMm2rHDM&X-Amz-Signature=3038df62458b9b0f64a97f758d9e06d61ff78db60e2c3669e7e36d57673268b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
