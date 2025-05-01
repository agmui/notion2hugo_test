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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOXX7TQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBuvCbAqhlqxCOQ3sB1bee84VMQ1Lpw5d1wCzM6yQWsMAiBIP%2FyNKXF9%2BY5ya2JFbhH8Dyze83r5DJsVQ1nsmsvMgiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxz8PqfGid3IQ3N3fKtwD2PyemMU2YPfM9yhj62kG1dYGd4dROEIVOG%2BclC0EpRZCgOiEBy7JAUhTWiugOaQpYt1iWvD8DqSdxi0ik53ACsMYdiyEqJcFRLRgtY7wKDtmR1tiTfWl%2BqFbvgvsZbLWYkV3adPIOdzXDlc8gcMgiZ%2BeWXlLnZV7Wu8TnnCApnmdsnbB%2FYw0H0%2BVkFVXyt%2BXVr8K5X29Vwzuz%2FFuePFHLk1PuZadlnlRU7k1%2FW3T7ykyo0fmGKOwcIEnFsPkJwdlkV5O4xBlCreBRZYQ6spJeL1jNPLYuGPV1YH4bKlBll4RtUR9YFrPpwaMjGCK9JOIku25Zt%2Fnuxy9NG8t5W36uDJLdQ9iwYxNSsCDIlP8bh%2B3OCWpgzjnLUczUUnt1sgi2K0uXU%2BGbJvqjKyRsv7jesmJoUOBg4GzPNAD5cD%2B%2BU7nU%2B%2BQcK%2FdImtCc5ZDLtamIfxQAMLbjoEF%2BwiFu%2BN%2Fd6vocWACJ45%2BMX1HLru6jlEiZsiT82mrLjIB1zoYMkQSXTYx%2BUOgOBp3Lg%2FfNH%2FiEchdWPpWaguLws60Vz6EOsV2g4TSAqxpOR6i2sYOoFBhhtF0vt9iHf%2F%2ByycMFxsUVWXRgpVX6Dhs6755X9Um5JrqKOL%2BUE9v1kCMTv8w9fPOwAY6pgF%2BrArAvWptqI8mz4pVyt0RluUwbV0T0P1sWHw24JZfUyeeKh0odN7AGgBrrIWDacax%2BSa4h6%2FNTWdXLFskbqErltksVg9ftCXy27LTgU51hJ09sjjqtVzVY39wqECZif7Au%2BAfVM778JEWUoLCbxADOYJ6se0ifp8UKQ%2FlGhQmf69uC1airCVxwASJl6wHof%2FdxV48eSc7WFuY7LXA38GucGVMyBz7&X-Amz-Signature=955f0779d148940e8e8613c8f759417c6ad681dcf4ab51a3966cf92bbb617242&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOXX7TQ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIBuvCbAqhlqxCOQ3sB1bee84VMQ1Lpw5d1wCzM6yQWsMAiBIP%2FyNKXF9%2BY5ya2JFbhH8Dyze83r5DJsVQ1nsmsvMgiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxz8PqfGid3IQ3N3fKtwD2PyemMU2YPfM9yhj62kG1dYGd4dROEIVOG%2BclC0EpRZCgOiEBy7JAUhTWiugOaQpYt1iWvD8DqSdxi0ik53ACsMYdiyEqJcFRLRgtY7wKDtmR1tiTfWl%2BqFbvgvsZbLWYkV3adPIOdzXDlc8gcMgiZ%2BeWXlLnZV7Wu8TnnCApnmdsnbB%2FYw0H0%2BVkFVXyt%2BXVr8K5X29Vwzuz%2FFuePFHLk1PuZadlnlRU7k1%2FW3T7ykyo0fmGKOwcIEnFsPkJwdlkV5O4xBlCreBRZYQ6spJeL1jNPLYuGPV1YH4bKlBll4RtUR9YFrPpwaMjGCK9JOIku25Zt%2Fnuxy9NG8t5W36uDJLdQ9iwYxNSsCDIlP8bh%2B3OCWpgzjnLUczUUnt1sgi2K0uXU%2BGbJvqjKyRsv7jesmJoUOBg4GzPNAD5cD%2B%2BU7nU%2B%2BQcK%2FdImtCc5ZDLtamIfxQAMLbjoEF%2BwiFu%2BN%2Fd6vocWACJ45%2BMX1HLru6jlEiZsiT82mrLjIB1zoYMkQSXTYx%2BUOgOBp3Lg%2FfNH%2FiEchdWPpWaguLws60Vz6EOsV2g4TSAqxpOR6i2sYOoFBhhtF0vt9iHf%2F%2ByycMFxsUVWXRgpVX6Dhs6755X9Um5JrqKOL%2BUE9v1kCMTv8w9fPOwAY6pgF%2BrArAvWptqI8mz4pVyt0RluUwbV0T0P1sWHw24JZfUyeeKh0odN7AGgBrrIWDacax%2BSa4h6%2FNTWdXLFskbqErltksVg9ftCXy27LTgU51hJ09sjjqtVzVY39wqECZif7Au%2BAfVM778JEWUoLCbxADOYJ6se0ifp8UKQ%2FlGhQmf69uC1airCVxwASJl6wHof%2FdxV48eSc7WFuY7LXA38GucGVMyBz7&X-Amz-Signature=48be4a7cb064cca1d2008b95f2a63ead7b39634fd6da338a58de8dd28a7cf4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
