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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNSE47X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEgeT3crbuzU%2BRxH5xRzY9vzJDY58wFWWIKSZpQeqtcQAiEAtZFp5p8%2FLQhGpZPIR0dlHq6VGw9D1eNxNHaubZWg6p4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAYwzW5fXwOGa2DgUircAwRq%2FErrlRA7brDAaO9J4HgmgXqQKITOr9ZPhD02oe4NgyLTS3BE56k1NJJ0IGMg%2FbO4EVzBBeK6sDjf6id%2BS399aqluHH0ebWU3TX6PfRxR7H45ohome2DMR%2BSkrHnaph2e7iVsoz3JQ4D1mele6tVHoWzk0BehEuenRehTB9dfPDFJTCx1puHZXjMvK8e%2FPY8RRH5RfIRFfh8Le4eOPlyUsPK0PZeG5KaXKlK4LGGCJJop9V12U1xNQ1AwMBNmK2WVTA8AGOiKcY7KLBb%2FKdC2PthYK1gvd2Dp5QGsKkm5t9HmDKOojc%2FCP2LcWsiHIoNmfsdWMHRZJW2zrM8%2BI84Mb9jhJtK7jYHTyhIjszO0uoC2trKPAtLtSY9N4sZyzorE7MkMjb%2FzTUcz3EqMD%2F4U%2FZajqbsLfwilFjqhnCrcmGOFr2L94rAsnGnE%2FLRu%2BPGw6mTAF0Ycr9ychnaEc4K0ORJXVs2LSoSUlWI4tB3cbukhGHJhwV9U6WRdwq4jFGUYULUolV0ACRW8wGlC4ATRJ7%2B4Tfv%2BzVX8%2BLQKxykZAB9W%2BPJJ%2BlXIytaqIswcN6rdHOqFahz3gevYdi5%2FaEUIMQnz4izZYYKBqX5%2FRuBM3DNrn7GQhCq%2FMVdMMIrRj8QGOqUBfzrCQC8t1S3ptfpaWzO58lrr7uOXT30fT8GO3ySCczEAiMyeAy1m0vQmDzHUY%2B1BIBDL89ieSWV9fiR4FQARoM0ZYz1EmX95sqn8%2FXdpmnJUbQt6of%2BX1BvEDMep0YNL%2B1xT%2BqwKHb6sTDlrRoDwDIMEEXiHCS%2FFznakBo80Tt%2FWq%2BMlQlCXkIFgDG1SNWPoEn2Aw0KQW2ik%2Bspxt25PrbCpnwUx&X-Amz-Signature=aafb50071deb1f2979f3b8a864b69dd04fccb1aac6f4977ac13b3e174b7b99f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHNSE47X%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEgeT3crbuzU%2BRxH5xRzY9vzJDY58wFWWIKSZpQeqtcQAiEAtZFp5p8%2FLQhGpZPIR0dlHq6VGw9D1eNxNHaubZWg6p4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAYwzW5fXwOGa2DgUircAwRq%2FErrlRA7brDAaO9J4HgmgXqQKITOr9ZPhD02oe4NgyLTS3BE56k1NJJ0IGMg%2FbO4EVzBBeK6sDjf6id%2BS399aqluHH0ebWU3TX6PfRxR7H45ohome2DMR%2BSkrHnaph2e7iVsoz3JQ4D1mele6tVHoWzk0BehEuenRehTB9dfPDFJTCx1puHZXjMvK8e%2FPY8RRH5RfIRFfh8Le4eOPlyUsPK0PZeG5KaXKlK4LGGCJJop9V12U1xNQ1AwMBNmK2WVTA8AGOiKcY7KLBb%2FKdC2PthYK1gvd2Dp5QGsKkm5t9HmDKOojc%2FCP2LcWsiHIoNmfsdWMHRZJW2zrM8%2BI84Mb9jhJtK7jYHTyhIjszO0uoC2trKPAtLtSY9N4sZyzorE7MkMjb%2FzTUcz3EqMD%2F4U%2FZajqbsLfwilFjqhnCrcmGOFr2L94rAsnGnE%2FLRu%2BPGw6mTAF0Ycr9ychnaEc4K0ORJXVs2LSoSUlWI4tB3cbukhGHJhwV9U6WRdwq4jFGUYULUolV0ACRW8wGlC4ATRJ7%2B4Tfv%2BzVX8%2BLQKxykZAB9W%2BPJJ%2BlXIytaqIswcN6rdHOqFahz3gevYdi5%2FaEUIMQnz4izZYYKBqX5%2FRuBM3DNrn7GQhCq%2FMVdMMIrRj8QGOqUBfzrCQC8t1S3ptfpaWzO58lrr7uOXT30fT8GO3ySCczEAiMyeAy1m0vQmDzHUY%2B1BIBDL89ieSWV9fiR4FQARoM0ZYz1EmX95sqn8%2FXdpmnJUbQt6of%2BX1BvEDMep0YNL%2B1xT%2BqwKHb6sTDlrRoDwDIMEEXiHCS%2FFznakBo80Tt%2FWq%2BMlQlCXkIFgDG1SNWPoEn2Aw0KQW2ik%2Bspxt25PrbCpnwUx&X-Amz-Signature=0050dedc6db7557139803ddc44460ad06ac4d2f5ceabb0e6acac8b790b67bf33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
