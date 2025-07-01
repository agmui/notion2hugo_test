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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX77NIZD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznBmdYu1CSMVn4X7bfLmqpJe4SfeAfiU6M2azRFYYYgIgM7ZfGw7U1QewAFphEWTaFwNprqQan1TJvH03fUnAhVEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzKFFowb4AHqfrO%2FircA7lippE54RNlwAsP%2Bapo6YnzZdgZDgccoqWWSY8bMzIKZSxNfFe%2BYxzzIsU8DjqbtvZz%2F9SK33cjYqCRIRUU4ZTa2jUp7xLtZW%2BdMuVCxjM9VwczGLGX6BwBKtSXsDjYsqijRAv4UnrI1KCbUXAD2JCvRJ08Kyp31XiMHBea8ZeS2r4oxWZ7Gug2Ya6ofQQBEfoKPrgh%2Fq%2Fblh5SpqBG74NHmXVV8XH6RFR4WznNQFWkMayMydfLIe0j7tA5Ho%2B6vSvVb9pA1Z08uljvZs1V11TrOFEgJriy2IMM0IAw%2FG7VRr3rbw4dWrINhMiInQgJK6WLKP1hy%2FRngHdEMnpvopnUBA09UMc5zT4CJFHjYGs0wRAoh%2BVvsAXd1P0fTTBUTb2xcYhy%2FiqWTG6beGzrfDiTCGPcAHgp%2BQKzJpQh2EEdmr9YlcQamAEZq2ORodF5Sl%2BIwvIy86mxcdRL7zjvsZGNPSI2gGZQqFSLd6aytjcv%2BmsDxdTYl2GM4QyK7IvuyGQeFgMR10uk%2B1RrqyhME7Vj5hBsxc%2B4vEnLZ4ex8lAw1R8gFlZwgQj5GaA9UJaV%2B75MNXXyjfnSEXHVPcevp%2FTfNSP%2B8SyV7DHQ3D9QRmyLiuZ6fBdczKlr%2BULYMO%2Blj8MGOqUBWtgts2TgrV81AXIr7Gui5e%2FmsFeFDOs8iDaV0bj4VKEs3s8g1W2lw4yNdcSBiuB1L%2BO5oKfpEFjuo9tvO1gawJCKpk487wui12lrd3yeE8OWUjiFVymcVQWBX0Ilp%2Fcttvmg%2FwunSdSsYb95sY6%2BxvSSgxBW0PyBfownEeNHYshDbw5lJX2UmHrijYVKakhEnpy41b0Q7oDdbaXm%2FCMtlkblhnVJ&X-Amz-Signature=1820e5934ecb661203dfeba6d28a463b24ce37e5093643e8cb02388b6c640739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX77NIZD%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznBmdYu1CSMVn4X7bfLmqpJe4SfeAfiU6M2azRFYYYgIgM7ZfGw7U1QewAFphEWTaFwNprqQan1TJvH03fUnAhVEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzKFFowb4AHqfrO%2FircA7lippE54RNlwAsP%2Bapo6YnzZdgZDgccoqWWSY8bMzIKZSxNfFe%2BYxzzIsU8DjqbtvZz%2F9SK33cjYqCRIRUU4ZTa2jUp7xLtZW%2BdMuVCxjM9VwczGLGX6BwBKtSXsDjYsqijRAv4UnrI1KCbUXAD2JCvRJ08Kyp31XiMHBea8ZeS2r4oxWZ7Gug2Ya6ofQQBEfoKPrgh%2Fq%2Fblh5SpqBG74NHmXVV8XH6RFR4WznNQFWkMayMydfLIe0j7tA5Ho%2B6vSvVb9pA1Z08uljvZs1V11TrOFEgJriy2IMM0IAw%2FG7VRr3rbw4dWrINhMiInQgJK6WLKP1hy%2FRngHdEMnpvopnUBA09UMc5zT4CJFHjYGs0wRAoh%2BVvsAXd1P0fTTBUTb2xcYhy%2FiqWTG6beGzrfDiTCGPcAHgp%2BQKzJpQh2EEdmr9YlcQamAEZq2ORodF5Sl%2BIwvIy86mxcdRL7zjvsZGNPSI2gGZQqFSLd6aytjcv%2BmsDxdTYl2GM4QyK7IvuyGQeFgMR10uk%2B1RrqyhME7Vj5hBsxc%2B4vEnLZ4ex8lAw1R8gFlZwgQj5GaA9UJaV%2B75MNXXyjfnSEXHVPcevp%2FTfNSP%2B8SyV7DHQ3D9QRmyLiuZ6fBdczKlr%2BULYMO%2Blj8MGOqUBWtgts2TgrV81AXIr7Gui5e%2FmsFeFDOs8iDaV0bj4VKEs3s8g1W2lw4yNdcSBiuB1L%2BO5oKfpEFjuo9tvO1gawJCKpk487wui12lrd3yeE8OWUjiFVymcVQWBX0Ilp%2Fcttvmg%2FwunSdSsYb95sY6%2BxvSSgxBW0PyBfownEeNHYshDbw5lJX2UmHrijYVKakhEnpy41b0Q7oDdbaXm%2FCMtlkblhnVJ&X-Amz-Signature=cced8c226393525dfce33cd099b7a180313cad4936a12421557786df6ff0219f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
