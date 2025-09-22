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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRRIZ2X%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgMaWy1f7Ig4FA3XgyC%2BHmxMhxN3zJWnVTlkZRGWm11AIgPcFTn7qq2VR4XbS3qdfJwMlnW6QBGT3enp5HBGTba%2Bwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP2olzG4cvdQnkcmzCrcAxKudFUTfoIoopCsRS8FIc0X67JQY0nkklohkeqtZzNlKRbP%2FjtxWqtU5hCZESLihNEOpuFnN0YqZdt5LCCb%2Fl7Ipft2Ks%2F6xsGzg9W0b5yutDT%2FeewIx2GUId5TrXzA%2BtcoacSpOuHaPUcQGWrRwf4h6HPQwnF9cxWh%2BfCxgHab4u%2BxrhGuz7qHGBrWvijG%2FIP4l%2BOTO2%2FS1qNFMlsIVOIAu7Ht5mnDN7X6905VEMtSU3nBu%2BOnL3sVshpByIQaGIZ7y2VbT2fkyKNuysKvCQfLYT6ABBDuADz8%2Fk5F4j0Vn1FHWN2DQ%2B6Luh%2FR1%2F6%2BRWHGbD3RRaRXAY0img2gkG%2BF%2BbAO%2FuFUORYVP%2Bbr0gL1gweKvdY3HDy4CtU6IXYMuhW28vazO%2BBReOwPi1U6Oa94R%2BrvvX5p5wuCYV%2FG8eZJKcxfyj0PSZ5i3%2Fj2F%2FB5aHNlL%2ByGPl8LGNXDcNXmtjFaHhDSu7SUjDPorYPq%2FuQt3YJyF3NruZIu57qgPg5fxtyBXzs%2Bnk7sUhHjyhrxsv1ikfCFtxaXLhUcLtMgWr2PALyvSKn3XYxwiaQk1UFmIoG7SEvTNbtVVBtMZQC9o5Nb6QXy4XiPVMffgvHpLRoPwIojB2bqf5y22q1sMILGwsYGOqUB5rr%2BUXQiEJWPveyTKyaUpZUak2g%2F6Y%2BVmVYGzyDAlO70JbUZqbEU0%2BBheeKdPw69TJWH7v2fETZB8782iii%2B4FF3e6iM%2B59s6WxHtI76LQOS9O7BF2zCfjVyz%2BRsrpVHbg9Znec9OflpK%2F6mHxlyJPuFaEEg6Et7T7a396nyKpena8apJ3FbDsQaGSMUsJ8WHMOHXz7OhAisadZdzGOCoqoy%2B3xU&X-Amz-Signature=efd9f3d6d6e802a5b65e08ca6249d48d5faaa33ac1b2ee9ada189e2367316851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRRIZ2X%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgMaWy1f7Ig4FA3XgyC%2BHmxMhxN3zJWnVTlkZRGWm11AIgPcFTn7qq2VR4XbS3qdfJwMlnW6QBGT3enp5HBGTba%2Bwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDP2olzG4cvdQnkcmzCrcAxKudFUTfoIoopCsRS8FIc0X67JQY0nkklohkeqtZzNlKRbP%2FjtxWqtU5hCZESLihNEOpuFnN0YqZdt5LCCb%2Fl7Ipft2Ks%2F6xsGzg9W0b5yutDT%2FeewIx2GUId5TrXzA%2BtcoacSpOuHaPUcQGWrRwf4h6HPQwnF9cxWh%2BfCxgHab4u%2BxrhGuz7qHGBrWvijG%2FIP4l%2BOTO2%2FS1qNFMlsIVOIAu7Ht5mnDN7X6905VEMtSU3nBu%2BOnL3sVshpByIQaGIZ7y2VbT2fkyKNuysKvCQfLYT6ABBDuADz8%2Fk5F4j0Vn1FHWN2DQ%2B6Luh%2FR1%2F6%2BRWHGbD3RRaRXAY0img2gkG%2BF%2BbAO%2FuFUORYVP%2Bbr0gL1gweKvdY3HDy4CtU6IXYMuhW28vazO%2BBReOwPi1U6Oa94R%2BrvvX5p5wuCYV%2FG8eZJKcxfyj0PSZ5i3%2Fj2F%2FB5aHNlL%2ByGPl8LGNXDcNXmtjFaHhDSu7SUjDPorYPq%2FuQt3YJyF3NruZIu57qgPg5fxtyBXzs%2Bnk7sUhHjyhrxsv1ikfCFtxaXLhUcLtMgWr2PALyvSKn3XYxwiaQk1UFmIoG7SEvTNbtVVBtMZQC9o5Nb6QXy4XiPVMffgvHpLRoPwIojB2bqf5y22q1sMILGwsYGOqUB5rr%2BUXQiEJWPveyTKyaUpZUak2g%2F6Y%2BVmVYGzyDAlO70JbUZqbEU0%2BBheeKdPw69TJWH7v2fETZB8782iii%2B4FF3e6iM%2B59s6WxHtI76LQOS9O7BF2zCfjVyz%2BRsrpVHbg9Znec9OflpK%2F6mHxlyJPuFaEEg6Et7T7a396nyKpena8apJ3FbDsQaGSMUsJ8WHMOHXz7OhAisadZdzGOCoqoy%2B3xU&X-Amz-Signature=5562978061681d0c99fbe18ed7382214b979e919a39dfe6e66a705592fc316da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
