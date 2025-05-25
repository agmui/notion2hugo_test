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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSP45YJO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDaFqFJ5ekRHNkyHR4flr%2BdaQkUze6x7qkjVTJlfygE0wIhAL788MhuWv%2Bmo6cjs2%2B1J8LrARzWgSSjGaWBdcfHeL2CKv8DCDAQABoMNjM3NDIzMTgzODA1IgytfRkumL4bXQceLwwq3AMXs352qRBp1JdWa4Vo%2FtYS6uS18EU5sLpeJNbfaiN8uYxc2eWR%2B5HbFTL8OMnYEkQCBp56WQezBvInlswAON%2Fl5TqCDFYBVjn%2B7adQJgprjdqSdMaEtgPnXFRfU8%2BKS9l9oRAVYAWgH4Zwwz9NMBQ5YFv2oFiOuVe9t6HcphV1lE7u7ciktF6Ma2tnxIAem0j9d2uoYGw15WJUS7uDIwZ7vh%2Fnal624YlGUOUv1oP0MrLbW6VETg%2B3kiUNBevFWra9S0DIFZPPSYuge3DRtuTo4yUOpIyDOtLKkvsst7%2FU91v0mrgeESz33BXJtgXg67QjX3wrPdzhT%2FgM%2BjlsuVJv%2FLLAs5W%2B8OPZLnEGRnJgncurgadBXEt%2FRhp2Tws63kCvxDPas24ami9yq2C%2FCzSttvLGZoxSB5RYrEac9Znkr%2BNHgVihuyNH5SYK18I1VtnhEL%2FnP91MFxD3qj9668FS5oVfFF3stMdiOBeuQLUUL%2BmqtNM1KB7NR6V43f0WCzF6PjHhafZBJHYnrOpWkIRgnMs3bA8m8FUdDxWAQt4bOTXplmdl52ZeiTZxDMH7OoV4Nyv6mFbKELbK5wlEYiV9an3YGg6Ij6HP78KdXX8C02cgFsQ6cisyR972pTDo3szBBjqkAUVzu3AAI7dgwDJcKXYAPMvurN0858d4Y2zSqnS%2F0J8gLkP7aWTgO8wne4I6VJzWX6Rtl%2FkWeIRO%2BWni%2BIcaQrF5jI%2F7kPiNoyQpCb2wOGZpB1E8t5tV8bB6j%2Flz17crgBLzNDV4PIpWIFEHzP8F%2FH9BAVAdq%2FDhNynTxD7TcpWCL6dE3s8aJHUGwr9KRKK%2BgLQTuePbMwY9bzYzZR8yDkqOlSIb&X-Amz-Signature=62fe68b9884fe2212cb610ba67851cff4c0813bfe29a4dfc8e5efb587688f90f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSP45YJO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDaFqFJ5ekRHNkyHR4flr%2BdaQkUze6x7qkjVTJlfygE0wIhAL788MhuWv%2Bmo6cjs2%2B1J8LrARzWgSSjGaWBdcfHeL2CKv8DCDAQABoMNjM3NDIzMTgzODA1IgytfRkumL4bXQceLwwq3AMXs352qRBp1JdWa4Vo%2FtYS6uS18EU5sLpeJNbfaiN8uYxc2eWR%2B5HbFTL8OMnYEkQCBp56WQezBvInlswAON%2Fl5TqCDFYBVjn%2B7adQJgprjdqSdMaEtgPnXFRfU8%2BKS9l9oRAVYAWgH4Zwwz9NMBQ5YFv2oFiOuVe9t6HcphV1lE7u7ciktF6Ma2tnxIAem0j9d2uoYGw15WJUS7uDIwZ7vh%2Fnal624YlGUOUv1oP0MrLbW6VETg%2B3kiUNBevFWra9S0DIFZPPSYuge3DRtuTo4yUOpIyDOtLKkvsst7%2FU91v0mrgeESz33BXJtgXg67QjX3wrPdzhT%2FgM%2BjlsuVJv%2FLLAs5W%2B8OPZLnEGRnJgncurgadBXEt%2FRhp2Tws63kCvxDPas24ami9yq2C%2FCzSttvLGZoxSB5RYrEac9Znkr%2BNHgVihuyNH5SYK18I1VtnhEL%2FnP91MFxD3qj9668FS5oVfFF3stMdiOBeuQLUUL%2BmqtNM1KB7NR6V43f0WCzF6PjHhafZBJHYnrOpWkIRgnMs3bA8m8FUdDxWAQt4bOTXplmdl52ZeiTZxDMH7OoV4Nyv6mFbKELbK5wlEYiV9an3YGg6Ij6HP78KdXX8C02cgFsQ6cisyR972pTDo3szBBjqkAUVzu3AAI7dgwDJcKXYAPMvurN0858d4Y2zSqnS%2F0J8gLkP7aWTgO8wne4I6VJzWX6Rtl%2FkWeIRO%2BWni%2BIcaQrF5jI%2F7kPiNoyQpCb2wOGZpB1E8t5tV8bB6j%2Flz17crgBLzNDV4PIpWIFEHzP8F%2FH9BAVAdq%2FDhNynTxD7TcpWCL6dE3s8aJHUGwr9KRKK%2BgLQTuePbMwY9bzYzZR8yDkqOlSIb&X-Amz-Signature=add4f0688f4623ffec5ac2518f9d4c3cb2f9f9559875abc5d3f3eec08602cc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
