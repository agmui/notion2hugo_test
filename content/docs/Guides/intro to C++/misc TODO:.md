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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EXPBX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIGhGSqUoTY8xdOmX0RtNrLoBIBfHJbq%2FNEksUG8VejawAiEAitmAoAqc8W8X9XUEpMZkO15XiR%2FTA0tkxDeXm1IoldEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPBnNojwpyBuFyXrYSrcA0CqscPx8o%2BJzi76RvrxrP9Fmdu7Bx1tiv9QEC9Q8VtbT3ILubaPiB9FHyhxraILA0KgJOIrtnWGtOvuh0cmhHXX0qSphRnHqntD%2FhaYoPtLImMC6TnINfpFR1Zuf8DOtlav%2BXNpi2wKRrc4QwDtwj5sRVmEjT%2FAM6yqvtMj%2B%2BH%2Bdtx4esosOWlI7tyrPRuToBAF5ffxkzA8eHPSBMj5G%2BiST%2BdIHYqYRu2b1BOPWaKVmMjzQ8O3%2Fw7WG5SvwfIdTKhKVE%2FlwlgRTsol3ZedWtG%2B9Dud0WOlPzNXmoxaz1si0BJfpfQhgy7QHroDM2PgJl%2FPvjJlIfDzvtf6MFQ96WVdpVPsjP2%2B3n044RXoIda%2FoWZYPDZM2lSX4FpbtgnTuHi662YCJan8nr5blsWLB7rFImT2wWvT8BpSDgjnE9wia4pNa7aGBaT%2BfsU8b3cvtuO77mpQq4d7HZm42S9vnR%2Bs2gEZHIzVbet0Qc4Y4MR0ABJND05pzGxuWHDOf2n30%2FJZenu7LH6z35dl6nEd%2B3fGmZZMi4FjNidb4bejpytCokiN51Sb%2BJKhvUTnHY4Skp9IV4touHopRDSlcTWNuNhfXIa%2FMR%2F%2FN4w8rz2t4gK6h0%2FlToN2V2Yyt%2FqCMOuuzcQGOqUBvIC2ewdSDlIIzjh9GxnGyUKOzRNI1xbdF5vS0ouM7R79dpu9zZaq1fMPeOHPlndjKJ3I6LHr1rsmsv41dhU%2FWw9mowJJB3xtOC9zEaXWJ3GBtVqtxzXqRP4ltkunL9LzF3uAo49UnCKQRGE2fflW6NFO5FqFvPW%2Fzuc%2FeyrWZ15Q7FUrHwCoTCx%2FUa3nfEBnaTo8hI%2BMqpYBErdKVwHf4ll7X3ag&X-Amz-Signature=88e15103b15fc68e7e8507136a91f125fe6363f43787a0d27c05066bf70880e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EXPBX6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIGhGSqUoTY8xdOmX0RtNrLoBIBfHJbq%2FNEksUG8VejawAiEAitmAoAqc8W8X9XUEpMZkO15XiR%2FTA0tkxDeXm1IoldEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPBnNojwpyBuFyXrYSrcA0CqscPx8o%2BJzi76RvrxrP9Fmdu7Bx1tiv9QEC9Q8VtbT3ILubaPiB9FHyhxraILA0KgJOIrtnWGtOvuh0cmhHXX0qSphRnHqntD%2FhaYoPtLImMC6TnINfpFR1Zuf8DOtlav%2BXNpi2wKRrc4QwDtwj5sRVmEjT%2FAM6yqvtMj%2B%2BH%2Bdtx4esosOWlI7tyrPRuToBAF5ffxkzA8eHPSBMj5G%2BiST%2BdIHYqYRu2b1BOPWaKVmMjzQ8O3%2Fw7WG5SvwfIdTKhKVE%2FlwlgRTsol3ZedWtG%2B9Dud0WOlPzNXmoxaz1si0BJfpfQhgy7QHroDM2PgJl%2FPvjJlIfDzvtf6MFQ96WVdpVPsjP2%2B3n044RXoIda%2FoWZYPDZM2lSX4FpbtgnTuHi662YCJan8nr5blsWLB7rFImT2wWvT8BpSDgjnE9wia4pNa7aGBaT%2BfsU8b3cvtuO77mpQq4d7HZm42S9vnR%2Bs2gEZHIzVbet0Qc4Y4MR0ABJND05pzGxuWHDOf2n30%2FJZenu7LH6z35dl6nEd%2B3fGmZZMi4FjNidb4bejpytCokiN51Sb%2BJKhvUTnHY4Skp9IV4touHopRDSlcTWNuNhfXIa%2FMR%2F%2FN4w8rz2t4gK6h0%2FlToN2V2Yyt%2FqCMOuuzcQGOqUBvIC2ewdSDlIIzjh9GxnGyUKOzRNI1xbdF5vS0ouM7R79dpu9zZaq1fMPeOHPlndjKJ3I6LHr1rsmsv41dhU%2FWw9mowJJB3xtOC9zEaXWJ3GBtVqtxzXqRP4ltkunL9LzF3uAo49UnCKQRGE2fflW6NFO5FqFvPW%2Fzuc%2FeyrWZ15Q7FUrHwCoTCx%2FUa3nfEBnaTo8hI%2BMqpYBErdKVwHf4ll7X3ag&X-Amz-Signature=2800793b3c978a8a3e2774b0bd6284d83c2697e64962bbba44dd54fc6deda942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
