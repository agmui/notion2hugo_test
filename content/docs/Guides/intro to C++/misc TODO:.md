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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRBUW26%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGkHpuPxKeDwaWuBvYGzg8rbhYczb60vcVg%2Ft6QyobxxAiEA9yL8B81HHRJTw8AoWkz2SDeCXyNzQSxn1vkCCylC2wcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa%2BiDIX%2Fcs7T%2F5A3yrcA2y5lTVbvwhrNu1dRY%2FVJ25UnYEgc5ItFbdDNnWssTXVFKkTEsnsI8T5%2FLEAMGc4IbblLBueSHBtf8e4Pfix5Apm88mC24X0zhwbn2mtGWSc%2B4pQS43JdfBLJKOypxWKuoe%2FI7OUfVq1M9YfgvSZXk0JDsLMWMJBXO09NdSr4wLKFtMheFgfcKvP3UkBg3mxEH0VKEFRJ89Sc24Do2sdtXbqadTv%2Bg2%2BSjQrkYMJvDqYYbR6PiRhOxfdY%2FaaDuKbvbyV%2Fm8ee%2FkzeA9AD%2BxuCF7W%2FZE%2BOb8uNpIbE6eHgcYoWw4Jmx0GCUEb1a3E0q7pfqgqzINXNAkd%2BMlnIXEafkgVz59%2Fxp8h9HT7nSYqER4m%2BOE5yKaNXAIyRcUcxCAREoltN%2F2gYHKDadwaQ54Bh9pwPCPxk7M9cizJkxpuDTFNzVk9DFsgacFv6LOiOnfZWJjE1rS5agjXoDwiHrAASDZGHVMnBRY%2Feaamjm2V%2BLzJsD%2BuM5l0%2B4NIk3vQCho1%2FeMueHYwzN3wVV54xjOF2xIXfWrXYSYdhA1zu87DAlNA%2FLF15%2FuF5cuPZ4GKReyKyhhrK2tWwy9XaI983tmM0%2BeaaacSxbpbj1GHtVbI%2FEtVtPEQEhylFHYKRmASMOHvuMEGOqUBl3KvqcYyEsem2oLB7wbWA1xI8cYRTCvNjNrqX1PHdh4yA608SIWAjG45CtQ5Nkk8BZ8tANoJ1IiMARkCJT4%2BgyzMPTgkefRk3jYehPDzQbmnTiXcvs0Yc82%2FTTTAMkcT4q0euAHWltTuXZVW9U8tLhDCt0xuq04npdkeVh0xCtiW8tQFbCxX6nDwX2IHIQG6r%2BfKCKMzxsvfDkVnNe%2BJJbokJ2Vn&X-Amz-Signature=6d42034764811144c057e1d42243f4cb2b673b7adef1505318644d1753098a35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKRBUW26%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGkHpuPxKeDwaWuBvYGzg8rbhYczb60vcVg%2Ft6QyobxxAiEA9yL8B81HHRJTw8AoWkz2SDeCXyNzQSxn1vkCCylC2wcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa%2BiDIX%2Fcs7T%2F5A3yrcA2y5lTVbvwhrNu1dRY%2FVJ25UnYEgc5ItFbdDNnWssTXVFKkTEsnsI8T5%2FLEAMGc4IbblLBueSHBtf8e4Pfix5Apm88mC24X0zhwbn2mtGWSc%2B4pQS43JdfBLJKOypxWKuoe%2FI7OUfVq1M9YfgvSZXk0JDsLMWMJBXO09NdSr4wLKFtMheFgfcKvP3UkBg3mxEH0VKEFRJ89Sc24Do2sdtXbqadTv%2Bg2%2BSjQrkYMJvDqYYbR6PiRhOxfdY%2FaaDuKbvbyV%2Fm8ee%2FkzeA9AD%2BxuCF7W%2FZE%2BOb8uNpIbE6eHgcYoWw4Jmx0GCUEb1a3E0q7pfqgqzINXNAkd%2BMlnIXEafkgVz59%2Fxp8h9HT7nSYqER4m%2BOE5yKaNXAIyRcUcxCAREoltN%2F2gYHKDadwaQ54Bh9pwPCPxk7M9cizJkxpuDTFNzVk9DFsgacFv6LOiOnfZWJjE1rS5agjXoDwiHrAASDZGHVMnBRY%2Feaamjm2V%2BLzJsD%2BuM5l0%2B4NIk3vQCho1%2FeMueHYwzN3wVV54xjOF2xIXfWrXYSYdhA1zu87DAlNA%2FLF15%2FuF5cuPZ4GKReyKyhhrK2tWwy9XaI983tmM0%2BeaaacSxbpbj1GHtVbI%2FEtVtPEQEhylFHYKRmASMOHvuMEGOqUBl3KvqcYyEsem2oLB7wbWA1xI8cYRTCvNjNrqX1PHdh4yA608SIWAjG45CtQ5Nkk8BZ8tANoJ1IiMARkCJT4%2BgyzMPTgkefRk3jYehPDzQbmnTiXcvs0Yc82%2FTTTAMkcT4q0euAHWltTuXZVW9U8tLhDCt0xuq04npdkeVh0xCtiW8tQFbCxX6nDwX2IHIQG6r%2BfKCKMzxsvfDkVnNe%2BJJbokJ2Vn&X-Amz-Signature=30a645a0d944d02a5ef256989cea2345098f83a1c48bb70bd6c4ce7ed6a3392e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
