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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFU6QIP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGYg3wdtaQGzxdtL4xOIi2h8hXOC7QPiHrEgulvgV9GwIgDUGuUIEWexcNA2dL1dVmamBy65qwfpC1r7vJkn1fzwAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxemvAi7OJHZTBKLyrcA4Phf4Li55C8lsTFz0aNBuxCVn36VIWeYOZMA6FJwrglxhCIQy1U4Z2ygd%2FJUqSAaniMTpNzpwz5jJ9hZYy3YycOBMBX28K3xyaZRs2sZvZBuw8tq%2FKWI4wVWDs2L6xmqBYygIBg0t7ZkHsnUw8YYAfiNBim4AMsKSlnHAoL4%2Bg443d7dvlSsFlgy2HdAy2RTz%2FadbHeQg%2FQSHWDT5J0hhOJMDVIxaJDA2WdYP9W%2Fa5SN1T1BzcjbNqqOt7YfO7pupmb3qloolMr%2Blk4qwJdg9ymo6t9qmuNb786%2BixRU9%2FYoRZrKUUSM6%2FT0fPC%2F%2FrrpOKVpxywfSq6TKn9sRdqOpbVamVRJdy8tTnEqjsASXWL2qcVTX9AftONmMIrkwtG9oKiaLsvAH%2BG3DWbR9WpEHpDnkmBvK3orGT1t5OwxQy4zCXoS6%2BvISMQLcKmRxYeQYnox6lwP6iDxDPXs6OrVttUYBVm3NTOSLVASPcGnaceHMMI7pwWCWkCrbyiwbUbrURPhfSsZNjnfaz25KZ%2Fe5%2F4SfzszKXNCAZ5M7URRUkjxOhlYyGE%2FVMUN5j36eQgEIqQxHMeL23acOn9rslbrVt45TzLjlEpXHg35AOW%2FF0DEB4TNVhv0jqB7LnwMO335sQGOqUBtkmU6mfDkpq9csaQTDPNTFI38uNukv3yyvG9pT0BnsrXL2Osna3KGAZhonNlUKKvGJbTq3KGQym8DM6cx82gES3CF0XEY%2BRUN0VXn8ZG3yRGbb%2BVp3rbHJ5IqbITGNkzwiS%2F%2FJcdhm8izPUL%2FJK9h6nEKYNr2O5Hw5GwL8FWZLwJx2unsf%2Ffg1XFlpU0%2BQhqabYZuMAs2XRAik1cCuYjeQK%2BEqFL&X-Amz-Signature=addf77c5429eb1baef82013d48e8cf82418231eb2e1d45634d694115a8bccc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFU6QIP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGYg3wdtaQGzxdtL4xOIi2h8hXOC7QPiHrEgulvgV9GwIgDUGuUIEWexcNA2dL1dVmamBy65qwfpC1r7vJkn1fzwAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxemvAi7OJHZTBKLyrcA4Phf4Li55C8lsTFz0aNBuxCVn36VIWeYOZMA6FJwrglxhCIQy1U4Z2ygd%2FJUqSAaniMTpNzpwz5jJ9hZYy3YycOBMBX28K3xyaZRs2sZvZBuw8tq%2FKWI4wVWDs2L6xmqBYygIBg0t7ZkHsnUw8YYAfiNBim4AMsKSlnHAoL4%2Bg443d7dvlSsFlgy2HdAy2RTz%2FadbHeQg%2FQSHWDT5J0hhOJMDVIxaJDA2WdYP9W%2Fa5SN1T1BzcjbNqqOt7YfO7pupmb3qloolMr%2Blk4qwJdg9ymo6t9qmuNb786%2BixRU9%2FYoRZrKUUSM6%2FT0fPC%2F%2FrrpOKVpxywfSq6TKn9sRdqOpbVamVRJdy8tTnEqjsASXWL2qcVTX9AftONmMIrkwtG9oKiaLsvAH%2BG3DWbR9WpEHpDnkmBvK3orGT1t5OwxQy4zCXoS6%2BvISMQLcKmRxYeQYnox6lwP6iDxDPXs6OrVttUYBVm3NTOSLVASPcGnaceHMMI7pwWCWkCrbyiwbUbrURPhfSsZNjnfaz25KZ%2Fe5%2F4SfzszKXNCAZ5M7URRUkjxOhlYyGE%2FVMUN5j36eQgEIqQxHMeL23acOn9rslbrVt45TzLjlEpXHg35AOW%2FF0DEB4TNVhv0jqB7LnwMO335sQGOqUBtkmU6mfDkpq9csaQTDPNTFI38uNukv3yyvG9pT0BnsrXL2Osna3KGAZhonNlUKKvGJbTq3KGQym8DM6cx82gES3CF0XEY%2BRUN0VXn8ZG3yRGbb%2BVp3rbHJ5IqbITGNkzwiS%2F%2FJcdhm8izPUL%2FJK9h6nEKYNr2O5Hw5GwL8FWZLwJx2unsf%2Ffg1XFlpU0%2BQhqabYZuMAs2XRAik1cCuYjeQK%2BEqFL&X-Amz-Signature=27b73f7e3fdb6f3db33a746b420d334c04a75b5cd1b159613893fc7970d826b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
