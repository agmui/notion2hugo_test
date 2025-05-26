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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFY7BN2W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEN%2BIaBFQvNm9zDePh33k6IsOW0J3JSZJIcarCCW3LCQAiBFF22GjIOqpjndWwyQ%2BdbF6FFwrncYd3Z%2BZc0diarjkSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMH14ISgzXVWPd8IEnKtwDWQJcYMbd6stu5ektC8%2F998%2FHIcJkO0yh5DORSpi09MngPVfZhZb6vpSnTec2by6WOrQifcmY1YqNjxzFjxdMIdO4w3vkWGJrQf6xRKFq0g4pEVuT5p4sQDCkOFJCErZrTJH0hK1UbRbNzAjpdyc1EzQS9XtggE5YAT7pwFql6qefdFxDbfib1Wq1lJYY%2BSFJn7txBMJF7q8crGWPC7K6rT820o9xBhylCTcWK3Zp9ZgUlQRICjSA404MtlybN5z5m%2B29eUWa8Lc1MSK01C7sYqJM5SoKUKWWUvNRTyuQSXq4KBfJ3RUxGtDibQ6ynBGVBc5ahnaIane%2BArI3xXOZ4I8YLn%2Buo9PnsF6SYsLIWKrlty79XmtxRe0PDgPHwDnFaO7OwIjB5kEVOTcbVEE6Jv0EfZN9qolJnwkqbho4%2BUOAlhRisEi1wLElEX3Dd3ylyshRPUMpBzOREK1pzCraxM0uzTsacKKT3etXGsVBo4XOO%2BwnHzvgckqfA9kQ%2FDCmJXdtGs%2Faj0AWrxxxe5r8jk9dDrmr7TVxQguoFmXX%2BSXBW8hH2G84UKGF2FohEvsTQPfCWXANgEDuihQ2vOgor48tyaJcSRPAfBX4L9dz%2FBA4l68zndO40mf6i7swidfQwQY6pgFaIXzg1zNOAqA%2BgyJLOHrLAwTiNUDbMjwHLlSLz6UlE2KHjK%2FH3NnafkarTpoiXTP1fIpEJfXCLG6rufthglh4tzJz%2FtvJ1ZxLMMsVSxQti5mQqbmn9wu7r6wXFuNSUfoluiXtBBysTeonE9F8FmLEZtu8HC%2FWdWHB3dyP8SghNPbwioap7Z3IU0uU5q5wia90xA9GjkEMbtYpoCSI51KZrGEfsPUP&X-Amz-Signature=e6d3432c6540cc569807ac3edce5f184dbc171ab5b5cf526448a8487c92f0f00&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFY7BN2W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEN%2BIaBFQvNm9zDePh33k6IsOW0J3JSZJIcarCCW3LCQAiBFF22GjIOqpjndWwyQ%2BdbF6FFwrncYd3Z%2BZc0diarjkSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMH14ISgzXVWPd8IEnKtwDWQJcYMbd6stu5ektC8%2F998%2FHIcJkO0yh5DORSpi09MngPVfZhZb6vpSnTec2by6WOrQifcmY1YqNjxzFjxdMIdO4w3vkWGJrQf6xRKFq0g4pEVuT5p4sQDCkOFJCErZrTJH0hK1UbRbNzAjpdyc1EzQS9XtggE5YAT7pwFql6qefdFxDbfib1Wq1lJYY%2BSFJn7txBMJF7q8crGWPC7K6rT820o9xBhylCTcWK3Zp9ZgUlQRICjSA404MtlybN5z5m%2B29eUWa8Lc1MSK01C7sYqJM5SoKUKWWUvNRTyuQSXq4KBfJ3RUxGtDibQ6ynBGVBc5ahnaIane%2BArI3xXOZ4I8YLn%2Buo9PnsF6SYsLIWKrlty79XmtxRe0PDgPHwDnFaO7OwIjB5kEVOTcbVEE6Jv0EfZN9qolJnwkqbho4%2BUOAlhRisEi1wLElEX3Dd3ylyshRPUMpBzOREK1pzCraxM0uzTsacKKT3etXGsVBo4XOO%2BwnHzvgckqfA9kQ%2FDCmJXdtGs%2Faj0AWrxxxe5r8jk9dDrmr7TVxQguoFmXX%2BSXBW8hH2G84UKGF2FohEvsTQPfCWXANgEDuihQ2vOgor48tyaJcSRPAfBX4L9dz%2FBA4l68zndO40mf6i7swidfQwQY6pgFaIXzg1zNOAqA%2BgyJLOHrLAwTiNUDbMjwHLlSLz6UlE2KHjK%2FH3NnafkarTpoiXTP1fIpEJfXCLG6rufthglh4tzJz%2FtvJ1ZxLMMsVSxQti5mQqbmn9wu7r6wXFuNSUfoluiXtBBysTeonE9F8FmLEZtu8HC%2FWdWHB3dyP8SghNPbwioap7Z3IU0uU5q5wia90xA9GjkEMbtYpoCSI51KZrGEfsPUP&X-Amz-Signature=2084251af6815b1cfdcfa520add814e3cbb2b077eb71c33dd31673a1da79b250&X-Amz-SignedHeaders=host&x-id=GetObject)

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
