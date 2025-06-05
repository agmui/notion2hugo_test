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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRP4EF2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIB2YfqGi5pX6jdwIysLkVBag3p945gnRQrAT4njbnvPWAiEA0pWzm37%2FUa3mC5SGBD1tjAgrs7NdNcAuzoRYmWDQ26oq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPHv1KPw6ru1WRQTQyrcA4xiW5%2FtjbeD7NVViH0O3K9wKR1NEP2vOEsAXc4wJ7nVjMyhUOqcrTNtn217eWfH0H2qpXz1k7JPPjF3Y6gNt5gaZsQP%2BExwl3zKsyQ8eek2Z2qZb3JapgRPtivN7IB%2F%2BwkOB62R4aJsmsjL0m1YPVJvEFSud5Gk8owPC0LKwyMR3VJmM6tRZ7cvAK8ZDNJoVnDMw%2BTTrb7A8MsHizTd3IkulJ6%2B1%2BvJqJHyIfgKKN175d7pcXMLeBpXbty0zJ5sI%2FZlRRxV89uCb0EpXeq6fXOzRdHFvhpjBVAV54EnN0sqHzJKnptoveDseUeo2gcUuaSz8qL5PeJd8IUtCTRRZoKXygtqtWMQpsA2IEf2V%2FeF%2BIe0h7PI1liqwXI5U0MwHg3lzHyXl6dp4dCAyDe3FwrFUFtocSbNivg6fSOsC8NXOCnaEw08HUrhY3nqXcSjFfKe%2F1ybeHowvKLixpY27j6es%2B7h7Y2BtVkMk0OMnPZG8jSva7oJfwsy2ltsJA8k9AUxixsJwyJIjSDyJLT5FfAWCAJjEyHiNkRmgfUIOcQPLPa2traL7NZl3KEnWTpIkMk6Q5K2pbSg59McOi09oe7SnyVuDsyHTTqCFX6HGhRCBFJtK5IxrHxhRyk%2FMJKph8IGOqUBeFHRB%2F8yJ64E6GrkQmOZPKA3L8bwq9cHwqfKNsj9WSF5KfQ8LOioFAPyLKkt%2Fqnt1N14mdiIfH5HKGMXnnthbhuDmqbA51%2Fsp6pdYzXnYjCgzrZ5Wb1hTAcy5MWwStaNYLlm%2BFpR8ATqQSI4%2FyWDoJQzhdt7eLpD6tlwTlHgneIcBuhielTDdXdnRdKojtUGhsWTLeQrAHdxhnlwMkymdS2LlesA&X-Amz-Signature=78eb520eb63c25780e988591a2c6bf3d37a060f22256f0c400e85b29e8bcb8da&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BRP4EF2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIB2YfqGi5pX6jdwIysLkVBag3p945gnRQrAT4njbnvPWAiEA0pWzm37%2FUa3mC5SGBD1tjAgrs7NdNcAuzoRYmWDQ26oq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPHv1KPw6ru1WRQTQyrcA4xiW5%2FtjbeD7NVViH0O3K9wKR1NEP2vOEsAXc4wJ7nVjMyhUOqcrTNtn217eWfH0H2qpXz1k7JPPjF3Y6gNt5gaZsQP%2BExwl3zKsyQ8eek2Z2qZb3JapgRPtivN7IB%2F%2BwkOB62R4aJsmsjL0m1YPVJvEFSud5Gk8owPC0LKwyMR3VJmM6tRZ7cvAK8ZDNJoVnDMw%2BTTrb7A8MsHizTd3IkulJ6%2B1%2BvJqJHyIfgKKN175d7pcXMLeBpXbty0zJ5sI%2FZlRRxV89uCb0EpXeq6fXOzRdHFvhpjBVAV54EnN0sqHzJKnptoveDseUeo2gcUuaSz8qL5PeJd8IUtCTRRZoKXygtqtWMQpsA2IEf2V%2FeF%2BIe0h7PI1liqwXI5U0MwHg3lzHyXl6dp4dCAyDe3FwrFUFtocSbNivg6fSOsC8NXOCnaEw08HUrhY3nqXcSjFfKe%2F1ybeHowvKLixpY27j6es%2B7h7Y2BtVkMk0OMnPZG8jSva7oJfwsy2ltsJA8k9AUxixsJwyJIjSDyJLT5FfAWCAJjEyHiNkRmgfUIOcQPLPa2traL7NZl3KEnWTpIkMk6Q5K2pbSg59McOi09oe7SnyVuDsyHTTqCFX6HGhRCBFJtK5IxrHxhRyk%2FMJKph8IGOqUBeFHRB%2F8yJ64E6GrkQmOZPKA3L8bwq9cHwqfKNsj9WSF5KfQ8LOioFAPyLKkt%2Fqnt1N14mdiIfH5HKGMXnnthbhuDmqbA51%2Fsp6pdYzXnYjCgzrZ5Wb1hTAcy5MWwStaNYLlm%2BFpR8ATqQSI4%2FyWDoJQzhdt7eLpD6tlwTlHgneIcBuhielTDdXdnRdKojtUGhsWTLeQrAHdxhnlwMkymdS2LlesA&X-Amz-Signature=2557077687cc80c7f158b97593b911fb2d7091d5c35fb0839e8b3827c7a92224&X-Amz-SignedHeaders=host&x-id=GetObject)

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
