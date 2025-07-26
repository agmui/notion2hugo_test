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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOTWEVE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDW0EqadiSCr8DoJv3%2BcQeyOC8EY3gbngtTW0LNV%2Fd6YAiEAm9L3E7yJ3kAK8MU1q2KzFQY97%2FhBNoq3DOPNKYskJacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE%2BebKnanNWDWadA0SrcA0aoepkONBFQQ5n4BQHLG%2FhoXDfxlKCQM7qQkm52oJ6wrYWrkdDtaX1qysbVYdH8lSCJ5gxy8Ko0Xwy4f49FMBa%2B0JjJYgohkuRYsq97GBs8x9h%2B%2BzCcdLMetSae4cOUKVMYa8PgHK6qj20Cr8qQoedlVLnZge0wjfXiFcApKzizpTKbe8hUi0TrQioyZksZiB6WQnFUY%2Brbo%2FwfAFU1PvGgxv1Z38%2B50pZWXtCr8sj4x6eCuLVNRkzL%2BPaJRfk8vC64eUJBIPM9ZXnGYwRR84IOEROmCIu9Qk5yP0ljx7z5XPaX4BZBbsV67CUY93PZBJyUOBBWXNyfG8IEPLctaS2CqqI%2FWfJbVsP4MEPe3OwlU%2F4mq8abvuThreW8asU5lZlwZif9cgBbPPcF3kherZn3wNFWwz9POwQAPmfgIt5LUFnRKqa88hijZBIQNoXzU4TX8EC%2Btfe8xfu3VqAnQ4QBu1s3ruNnIwNnhqm31cjVHaiYuvKTwXsHBfo5bFmW3OYsmXrFbQ00HAqOMYlD7bv4GmnT8apWHl5b767GHgatpiczR5qE9KFhlWyKL2PERFaoAG%2B%2FkbrFp5Jdhvml9kvt5r4MmWK%2FO7Tny1yM9bXNrR7xjVDRgJWPTnINMJzwkMQGOqUB64GXtIV95YK6MqYCLAtg7poEGjljL58xk1x9SH7MKa9gN80A%2BWPmzcMtyDUJo60mb2d%2FXhYMZCzTrbfjgDb7xJ4jnF9uTPfv971pekKoui10C2HwREAaWy3frBV99mDJLQ3iNGpNmhiiOnJcNvBCa7TUpGV5RLB%2B9ak66jBNbZYpAeTswjInVE3R42%2B3Ai0znB9WGodRA9AFauwOIxCc25Y2K7TL&X-Amz-Signature=881fa1555a9c8187e5b66ea27d6abb1e852db8feb5834e0124b2c832de1e2b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOTWEVE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDW0EqadiSCr8DoJv3%2BcQeyOC8EY3gbngtTW0LNV%2Fd6YAiEAm9L3E7yJ3kAK8MU1q2KzFQY97%2FhBNoq3DOPNKYskJacq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDE%2BebKnanNWDWadA0SrcA0aoepkONBFQQ5n4BQHLG%2FhoXDfxlKCQM7qQkm52oJ6wrYWrkdDtaX1qysbVYdH8lSCJ5gxy8Ko0Xwy4f49FMBa%2B0JjJYgohkuRYsq97GBs8x9h%2B%2BzCcdLMetSae4cOUKVMYa8PgHK6qj20Cr8qQoedlVLnZge0wjfXiFcApKzizpTKbe8hUi0TrQioyZksZiB6WQnFUY%2Brbo%2FwfAFU1PvGgxv1Z38%2B50pZWXtCr8sj4x6eCuLVNRkzL%2BPaJRfk8vC64eUJBIPM9ZXnGYwRR84IOEROmCIu9Qk5yP0ljx7z5XPaX4BZBbsV67CUY93PZBJyUOBBWXNyfG8IEPLctaS2CqqI%2FWfJbVsP4MEPe3OwlU%2F4mq8abvuThreW8asU5lZlwZif9cgBbPPcF3kherZn3wNFWwz9POwQAPmfgIt5LUFnRKqa88hijZBIQNoXzU4TX8EC%2Btfe8xfu3VqAnQ4QBu1s3ruNnIwNnhqm31cjVHaiYuvKTwXsHBfo5bFmW3OYsmXrFbQ00HAqOMYlD7bv4GmnT8apWHl5b767GHgatpiczR5qE9KFhlWyKL2PERFaoAG%2B%2FkbrFp5Jdhvml9kvt5r4MmWK%2FO7Tny1yM9bXNrR7xjVDRgJWPTnINMJzwkMQGOqUB64GXtIV95YK6MqYCLAtg7poEGjljL58xk1x9SH7MKa9gN80A%2BWPmzcMtyDUJo60mb2d%2FXhYMZCzTrbfjgDb7xJ4jnF9uTPfv971pekKoui10C2HwREAaWy3frBV99mDJLQ3iNGpNmhiiOnJcNvBCa7TUpGV5RLB%2B9ak66jBNbZYpAeTswjInVE3R42%2B3Ai0znB9WGodRA9AFauwOIxCc25Y2K7TL&X-Amz-Signature=bfba08fccef0e7a6c27762a957e454769d0b43299ea4b145898025ad41e8297a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
