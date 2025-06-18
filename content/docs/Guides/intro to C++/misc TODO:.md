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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ADLKO3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Uw%2FMc50PtgUSzB47JsG%2F8NfOEwFFf32Aa3VLGoAtZAIgESVG9FAZuheYurPM0FMvMvVTMWlPre676sSVAvdDhEAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7kVLBKVrhRa1U%2F2SrcA%2FrQnTqXi4%2BZ8mJAcdRWFJfvMkXW%2Fc%2B%2B4Mr%2FB6J22HmKnEw1otlqh3ks%2Bpm2DpERZC5MQ7L2Yd%2Fo1eDD2u07WNyuJS93p4Z%2B8%2FniQI6Ji7jMcyD4%2FSsNXutp3h6YGvYIoWgvlgGtrDiXR2je8qQZB1lgogpWTaFZlQ1PAxzhne0yytNAzPRx6LK6LkgmaFdlvsDGoht6UbtR2ypeO6s77n304IHSaqmK4yBxBWnoyCGMg9OIzmdpxq6wZx%2B%2BzeL3bTF5ndaAvZ6UG79mgB%2F2%2B7W7xJOZNku9rFxY4Kr%2BeBnf%2BM6jYq%2BpuzeLleoqXFZUmYVzDsBaZBVEURGLl0%2B%2FGnmQS1LnYct%2BWfcAggqnsQjuZiwQ3KhmaHnQxKsjPyEiGyqc4fB%2Fbhx2nkVEKp3BvyeCZssjyhLcJWrB%2FGCkVAJ0hsDhWPFuPMWlcuac6MAYGLkvkB2U9kwQzTe48csp1XkRcXvTcgDa2dJ74PGL4MNgYNXQuO7GJ6PdIPW%2FmreSEi15b5kQDERQy4842CmNG%2Fddi65ht9PEviPHgn2BGUTy2oo8093t5jVRDsk%2ByIW%2FIaDt2wvZQVU99yOChQXERuIclRbDW3JNIFZbBVbYf0xl1%2F3m4%2BcwUX4N7CaTMNj7y8IGOqUBNRShnQb1WhBw3zHGz1HtF2OuOcu3pUyeK0BshcsI1x3JrwHIv9DixHmTQT%2Fajreiy772WsE869ZU14tOjKIN%2BO1YT9vla2gYcEA0ELTXpDHbj23Hqr%2B5fv%2F2PIxdxJFU4wQbgXUe1miuYJboGnlqMptg3W16rDAu9D4RqbGuB3NRBFCBYWOSG9StXHdDSHwI%2Bgfdn424mE232tNrOf3NPj3VoI2k&X-Amz-Signature=275d8f3127c1fbd2cacc3fa4a498f8393ad855c55eb6f361950aca6cc19af833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ADLKO3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Uw%2FMc50PtgUSzB47JsG%2F8NfOEwFFf32Aa3VLGoAtZAIgESVG9FAZuheYurPM0FMvMvVTMWlPre676sSVAvdDhEAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7kVLBKVrhRa1U%2F2SrcA%2FrQnTqXi4%2BZ8mJAcdRWFJfvMkXW%2Fc%2B%2B4Mr%2FB6J22HmKnEw1otlqh3ks%2Bpm2DpERZC5MQ7L2Yd%2Fo1eDD2u07WNyuJS93p4Z%2B8%2FniQI6Ji7jMcyD4%2FSsNXutp3h6YGvYIoWgvlgGtrDiXR2je8qQZB1lgogpWTaFZlQ1PAxzhne0yytNAzPRx6LK6LkgmaFdlvsDGoht6UbtR2ypeO6s77n304IHSaqmK4yBxBWnoyCGMg9OIzmdpxq6wZx%2B%2BzeL3bTF5ndaAvZ6UG79mgB%2F2%2B7W7xJOZNku9rFxY4Kr%2BeBnf%2BM6jYq%2BpuzeLleoqXFZUmYVzDsBaZBVEURGLl0%2B%2FGnmQS1LnYct%2BWfcAggqnsQjuZiwQ3KhmaHnQxKsjPyEiGyqc4fB%2Fbhx2nkVEKp3BvyeCZssjyhLcJWrB%2FGCkVAJ0hsDhWPFuPMWlcuac6MAYGLkvkB2U9kwQzTe48csp1XkRcXvTcgDa2dJ74PGL4MNgYNXQuO7GJ6PdIPW%2FmreSEi15b5kQDERQy4842CmNG%2Fddi65ht9PEviPHgn2BGUTy2oo8093t5jVRDsk%2ByIW%2FIaDt2wvZQVU99yOChQXERuIclRbDW3JNIFZbBVbYf0xl1%2F3m4%2BcwUX4N7CaTMNj7y8IGOqUBNRShnQb1WhBw3zHGz1HtF2OuOcu3pUyeK0BshcsI1x3JrwHIv9DixHmTQT%2Fajreiy772WsE869ZU14tOjKIN%2BO1YT9vla2gYcEA0ELTXpDHbj23Hqr%2B5fv%2F2PIxdxJFU4wQbgXUe1miuYJboGnlqMptg3W16rDAu9D4RqbGuB3NRBFCBYWOSG9StXHdDSHwI%2Bgfdn424mE232tNrOf3NPj3VoI2k&X-Amz-Signature=9d436e0f8d30e9903c9b0a87bdb9d7af93dd32ef3897177e959b7bbeaaa7bba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
