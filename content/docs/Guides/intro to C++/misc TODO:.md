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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE357GK6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU3MZyrqnZKQjJxcnBn8kPrblg4Qw1wmhKNIJpA6MG7AiEA9igvlWBjqKGFgkF0BbvYGAtHS5L4CMcE%2B1SpWVhYUJEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpfBf1NvvMeP2IhSCrcA%2BLvtDXTULuWozA%2FDutQcSvrczMl%2FOwzsgiT8ASDbvyfuiJPXSYbWqL1RDikierFzO07CkbehN%2BafuwV1BB37%2BFlZPKDks9K9UwUtQQt6ihF2zt1CRyLemCq2Z4oXxEFjwVVT46dskO9ibAPtjDMSxsk0HIGRzBSC3daWtAb40EwWrA62XfoCAKCspuWBGPpTIPqHumggRdokyDdw61W%2Bbimc2QbGNZORGvLEnXRksNFVIMjGrVI2GhdXooiKiRW%2FRMbrE%2F0KOkkD7Xt26zbw8gV8G92lyRKymJlN7az79gNIHdI1MC%2Fm5oSyF5rtBDqXZA4bZSe1SOztgeUZCE11%2BQnA3tetMmxVQ1xFphKQM1ZFfLGL6kJ9fMWcOdEYXSZW%2Ffr3OgCJ8J6Ib4yHTAzQhei%2B3jTgY4%2FvzZA6KsTPRuhcWevq%2BMx%2FYMs7nbaLz3mTZweDH2IAxz2rWwEMEVj18blDYNfYyAaztPvu7ngO58RVfxnoF1q4jsekSCntIGLR4NOG3ofGlT8Vr%2B1QWDhaKcxjdpJbkI8A%2BoivkeLNLKo4%2BEOmc4U9UBfdkJxu6t4Ob1g%2Bd0xboAlAwoh3Q1co5rTxy19ZGFW4jty%2BDQmMbSHzYjhQpMUNIxyLTHSMKLJ87wGOqUBv2mUV96pG0DfrzTuSW1LIfyoeevJiFS%2BZUDD%2BuecOhKRzB54D%2FiHWTXS1DpXzeMYJn9jY9%2FuMrGxK%2B10gQIYXg3L4HU6R%2Bdr17wQrNQsVTDkAMCx51yM0p90eaBxR4FLF1RKFi74y4jndSnNlD7Ebko3B%2FrrOVZDg%2BaKUUbivsqnvdk8153a3cFQGg%2BMjqRZ4rrKywCJ1SgqzwwRZj0rxYiplvIg&X-Amz-Signature=f8d45f8bbf2cab5ea046a6b16159b615555a0d95e0bfff96e32c11bf32159192&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE357GK6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICU3MZyrqnZKQjJxcnBn8kPrblg4Qw1wmhKNIJpA6MG7AiEA9igvlWBjqKGFgkF0BbvYGAtHS5L4CMcE%2B1SpWVhYUJEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpfBf1NvvMeP2IhSCrcA%2BLvtDXTULuWozA%2FDutQcSvrczMl%2FOwzsgiT8ASDbvyfuiJPXSYbWqL1RDikierFzO07CkbehN%2BafuwV1BB37%2BFlZPKDks9K9UwUtQQt6ihF2zt1CRyLemCq2Z4oXxEFjwVVT46dskO9ibAPtjDMSxsk0HIGRzBSC3daWtAb40EwWrA62XfoCAKCspuWBGPpTIPqHumggRdokyDdw61W%2Bbimc2QbGNZORGvLEnXRksNFVIMjGrVI2GhdXooiKiRW%2FRMbrE%2F0KOkkD7Xt26zbw8gV8G92lyRKymJlN7az79gNIHdI1MC%2Fm5oSyF5rtBDqXZA4bZSe1SOztgeUZCE11%2BQnA3tetMmxVQ1xFphKQM1ZFfLGL6kJ9fMWcOdEYXSZW%2Ffr3OgCJ8J6Ib4yHTAzQhei%2B3jTgY4%2FvzZA6KsTPRuhcWevq%2BMx%2FYMs7nbaLz3mTZweDH2IAxz2rWwEMEVj18blDYNfYyAaztPvu7ngO58RVfxnoF1q4jsekSCntIGLR4NOG3ofGlT8Vr%2B1QWDhaKcxjdpJbkI8A%2BoivkeLNLKo4%2BEOmc4U9UBfdkJxu6t4Ob1g%2Bd0xboAlAwoh3Q1co5rTxy19ZGFW4jty%2BDQmMbSHzYjhQpMUNIxyLTHSMKLJ87wGOqUBv2mUV96pG0DfrzTuSW1LIfyoeevJiFS%2BZUDD%2BuecOhKRzB54D%2FiHWTXS1DpXzeMYJn9jY9%2FuMrGxK%2B10gQIYXg3L4HU6R%2Bdr17wQrNQsVTDkAMCx51yM0p90eaBxR4FLF1RKFi74y4jndSnNlD7Ebko3B%2FrrOVZDg%2BaKUUbivsqnvdk8153a3cFQGg%2BMjqRZ4rrKywCJ1SgqzwwRZj0rxYiplvIg&X-Amz-Signature=b67c273680cfb320b1c3bd516db332ca4173c9b42339af936b61850aa60d84b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
