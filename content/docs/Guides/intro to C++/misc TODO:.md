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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVEOZSK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNhWRn7ItHCeB6WwEf5o9J10BO6M3xObWDZZYROUGdQIgT6I5hqNgVKE9kbjT9L26z8mqiNmpMrquKZKbCHnLsw4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJWOzY9aMib7OVUd3yrcA9OEmxtIOS1uRdVCTJ5mqPZpkgR%2F5F66J6fFuAt7N6LpqVCyVq5zOwiQZM38OQt%2B6u5ie7AHVhyaLZbiFr53EsFOGvYmFjoflPtlCs8NILdZYX2JtrZZoWxPFT47gQeMUwWOrueye7OcOmnxD%2B4Ma96h0wcKq4%2BLTHD5x0o7lQvzHly574LcVRROMs3NQMQSn26Ch5RM%2F%2FZ71N8mqBfFPJCa62Kuop1frqy33jYosMwGAoXdSlnvewpY7qW27BnTUvPx3vwaNVho2UG8bRZpx%2F5IlVnrJopFnHG7yCuCf6hT%2FNocP2WTxtuozg5N1hdb4Ko7bVYBenUl2iIs4Z8y7cSePHBak2798m0wa5N1U5%2FT%2B%2BA5mYdV4gXlgamfWfL%2FXUXodUy7Y8OyZLLan9ZDXbww8i1dhrSlZhi5en7%2F%2FOKTk5U%2FcFmhkKX1Rh0gwWgCFTxIGZrP0y0bI2Fs5ssZitnRhb206VGkkJ98HQGCCpVq%2BkNoXDMhMwDsBlYj1JtIFG4l%2FLZd4XF62QMechNWkgXG8lNUqQYviQ4wnJk3CF1%2BW5oj4zdvAF7Mr2xJWhIDSM9jhKeRiyCkWY3AFw0HZkPP%2FIU%2F7baq1gYvyP0hNYBozRpZL1gKiRRuDmCiMMrP4cAGOqUBlh%2FUj2J5ZgqdiqaUeAZJ0A%2FuVaiAZOTPoUIaFaFPrzTXoIPT6TSWQxHGWK4pW3kl23HbHuUNElDo6AkPExCLlDRCI0vtHNmw4rshEamZ%2FC0XG5UNeiB2oO6dkloWwJ%2BKt1XRW%2Bc8iNQYcSuPPR%2BmqP999MdokYgyZfxUpbT5IXBWu3YdhaVZs4SvbS3rGTcqwRxACaUhhjvSdU3OI5xpbMvDOp%2BW&X-Amz-Signature=41ac636181b7b3869301105f5b648bad7a3c3a4dd1afd7cb86d51d233618b0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVEOZSK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFNhWRn7ItHCeB6WwEf5o9J10BO6M3xObWDZZYROUGdQIgT6I5hqNgVKE9kbjT9L26z8mqiNmpMrquKZKbCHnLsw4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJWOzY9aMib7OVUd3yrcA9OEmxtIOS1uRdVCTJ5mqPZpkgR%2F5F66J6fFuAt7N6LpqVCyVq5zOwiQZM38OQt%2B6u5ie7AHVhyaLZbiFr53EsFOGvYmFjoflPtlCs8NILdZYX2JtrZZoWxPFT47gQeMUwWOrueye7OcOmnxD%2B4Ma96h0wcKq4%2BLTHD5x0o7lQvzHly574LcVRROMs3NQMQSn26Ch5RM%2F%2FZ71N8mqBfFPJCa62Kuop1frqy33jYosMwGAoXdSlnvewpY7qW27BnTUvPx3vwaNVho2UG8bRZpx%2F5IlVnrJopFnHG7yCuCf6hT%2FNocP2WTxtuozg5N1hdb4Ko7bVYBenUl2iIs4Z8y7cSePHBak2798m0wa5N1U5%2FT%2B%2BA5mYdV4gXlgamfWfL%2FXUXodUy7Y8OyZLLan9ZDXbww8i1dhrSlZhi5en7%2F%2FOKTk5U%2FcFmhkKX1Rh0gwWgCFTxIGZrP0y0bI2Fs5ssZitnRhb206VGkkJ98HQGCCpVq%2BkNoXDMhMwDsBlYj1JtIFG4l%2FLZd4XF62QMechNWkgXG8lNUqQYviQ4wnJk3CF1%2BW5oj4zdvAF7Mr2xJWhIDSM9jhKeRiyCkWY3AFw0HZkPP%2FIU%2F7baq1gYvyP0hNYBozRpZL1gKiRRuDmCiMMrP4cAGOqUBlh%2FUj2J5ZgqdiqaUeAZJ0A%2FuVaiAZOTPoUIaFaFPrzTXoIPT6TSWQxHGWK4pW3kl23HbHuUNElDo6AkPExCLlDRCI0vtHNmw4rshEamZ%2FC0XG5UNeiB2oO6dkloWwJ%2BKt1XRW%2Bc8iNQYcSuPPR%2BmqP999MdokYgyZfxUpbT5IXBWu3YdhaVZs4SvbS3rGTcqwRxACaUhhjvSdU3OI5xpbMvDOp%2BW&X-Amz-Signature=a16af73378fce906a579ab1c0046e88704cee53c60d13aedb33131111e044eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
