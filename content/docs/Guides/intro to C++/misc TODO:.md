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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZLD74O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1jmygKXP5NEDWvLSFw75k3ktVjSXuzgZtOCyRHygCjgIgb9Y0GTaSJubU9QLJCmXbpX6U8STIEF85dkHe86epRWAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgO2UVLiQaa9LeyGCrcAx2FKJCdcq9NVnmExX6%2BinRKEf%2BEfcfe8o%2BObn%2B9B%2BHdZBKOZL6LfElbO9LnllZFSNae6S1xGos9WMFzUd0nl2crDPyoMrcKCrOdqAmXiVjm8XxfdZ6x22eUcHb6we%2BU0Sip2IIHAwqgIwllf97773fYKfpr%2Fr2GqFYg12JYndXP5VOjLgpz5njZfcpdOFwgLKSc4u6Z7C7OtDYJP%2BuNfOcYVXJ38yRe748tuyHZfZKspVS0hq7cul4jO1waCl2RMQ3mcSO6vTWi4Az73xKGdIRpYnyR9bBdH71AT%2BSDZ%2BojdaNTlXr5f0%2BfikBKUTidJwjaWPFTgXE0KxWN%2F7u4SQdiX0bWZx4G5jQDZX%2FoPPiWQrxuKRooHJGnhbQGACf8lSXYxWYR5XaABv22KhQlS1oVU2JYQsgHmdsvGKj3mIb2R%2B2mnaOA7Di7659WLaiF4kSRkhi5vdX3BvF8ZpW1YTEyBvvwqEpUO7YdFd1c9GxhXZh%2FZ4Auo24bEMy%2FoWiLFqmgkyrtX%2BsAE6mE8SetA8kDfGuiWzoP%2BdK%2F04CX%2BUS%2BhMubmswQV2U13CtqJjrxxo%2BmM%2B1%2BFEgPBiZhRVJd0N6pIewMMk9ERUexJqf4Bvfkj561CmXkW6rwRnHsML6uxMAGOqUBv8wkEF00pgec3MQXh%2Bi7IINcnAv1qpNmz21oJd8SDWjDVwiByzD5jZoBRwCCZsgwZyqtkgyG1Oz5AChjO3XwRVYaRx3348hs3nCCbrwsK3FBvVuL2Y%2FYKJ9x9Avdc%2FMsxjsX02HWSCWk2zWjlxwf01qyCDLHVuIIDrKximXNCFKDFGWziaQS%2FooT0IN%2BfJCrpi605xBhuXS1jCEy855Ch8k1zMP%2B&X-Amz-Signature=aab97694c5b58324b15fa2bb0cd0052f40cba1b5eebed9ab940b49c64703fd13&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZLD74O%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1jmygKXP5NEDWvLSFw75k3ktVjSXuzgZtOCyRHygCjgIgb9Y0GTaSJubU9QLJCmXbpX6U8STIEF85dkHe86epRWAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgO2UVLiQaa9LeyGCrcAx2FKJCdcq9NVnmExX6%2BinRKEf%2BEfcfe8o%2BObn%2B9B%2BHdZBKOZL6LfElbO9LnllZFSNae6S1xGos9WMFzUd0nl2crDPyoMrcKCrOdqAmXiVjm8XxfdZ6x22eUcHb6we%2BU0Sip2IIHAwqgIwllf97773fYKfpr%2Fr2GqFYg12JYndXP5VOjLgpz5njZfcpdOFwgLKSc4u6Z7C7OtDYJP%2BuNfOcYVXJ38yRe748tuyHZfZKspVS0hq7cul4jO1waCl2RMQ3mcSO6vTWi4Az73xKGdIRpYnyR9bBdH71AT%2BSDZ%2BojdaNTlXr5f0%2BfikBKUTidJwjaWPFTgXE0KxWN%2F7u4SQdiX0bWZx4G5jQDZX%2FoPPiWQrxuKRooHJGnhbQGACf8lSXYxWYR5XaABv22KhQlS1oVU2JYQsgHmdsvGKj3mIb2R%2B2mnaOA7Di7659WLaiF4kSRkhi5vdX3BvF8ZpW1YTEyBvvwqEpUO7YdFd1c9GxhXZh%2FZ4Auo24bEMy%2FoWiLFqmgkyrtX%2BsAE6mE8SetA8kDfGuiWzoP%2BdK%2F04CX%2BUS%2BhMubmswQV2U13CtqJjrxxo%2BmM%2B1%2BFEgPBiZhRVJd0N6pIewMMk9ERUexJqf4Bvfkj561CmXkW6rwRnHsML6uxMAGOqUBv8wkEF00pgec3MQXh%2Bi7IINcnAv1qpNmz21oJd8SDWjDVwiByzD5jZoBRwCCZsgwZyqtkgyG1Oz5AChjO3XwRVYaRx3348hs3nCCbrwsK3FBvVuL2Y%2FYKJ9x9Avdc%2FMsxjsX02HWSCWk2zWjlxwf01qyCDLHVuIIDrKximXNCFKDFGWziaQS%2FooT0IN%2BfJCrpi605xBhuXS1jCEy855Ch8k1zMP%2B&X-Amz-Signature=9c01a7a73376172f1915f4d06bbcfdf7fa8ff26fad4d39987f943bdb2a88cb70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
