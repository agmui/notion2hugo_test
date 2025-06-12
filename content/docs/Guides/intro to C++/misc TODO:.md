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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRLE3BJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICtchNS%2FK4T6p2hLNrOHQ7g72jFylLvwRYu1RejGWy4YAiAWPYPjAddTAE%2BhWENlG2vSjFB18MJeB4J64WRXhHqMLiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtRsa8Vx0kYSxJSzKtwDV4rlwBg0AgTrWRHGfsWEB7UoY1PiDq5Vjw56wvZ8eRzaqGDr99I6vhNiy3rMgEu8v95UKMM4hN2acG5Pm3Koaf1J0FyUi5VVbJrIYUHfUJWNXxkv91ceG6pyrhR0XXBpluj9uFgt3nt5rqHc4Tpmp4HiA3e8kiXbik%2BVwuloD6bFO3RyuTYGr3dBRseIHQQHUUIZQMzd2As7IIWOy38rOXe1t3%2FVfi8YzCNmc%2Bdrf%2FCMhS2ogOcSUpc8s7xRz8opnTaBxBAf1XwuychaVgBJtBbFfXzecOuCuqJWPyr30dVgefYKFRBdrDjoc%2FKL8Vtd6rStt%2BgxUNFH%2F2dL0tWRmIhE%2BTAmLzKs%2FPx2vMhdNWcO8%2FG9bVRGKrNTsDK4LaMZIMrUemHNqlDlLoZqWOIwlMII7lagZ%2B1l6kOw2Db9EdOwtkbRL65VT5McJxx6qLoO6yVZjK86%2BaXWfNC7jn3XLoc6tiGhToDzKDMCEqQyuO8Y3n1udM31s3ObYaLrF0mTz8hzskI4HmA37XIPG8exPjJYudcCnpc6jcsf4WiIapfh4Mt3AW7PhD6YqjUtWR7KUIRSMcUWoPzuzw3P7rzBjq1iCB1Axjx5zBv6B%2FWihvK1CTHCzEAFLEtNW%2BgwhomqwgY6pgGBu4dMPg1%2FbSFe6bPQAb%2B4CCyrfcId%2BlcfuoB4ZZJ0nVceTvP4Lf3l33ItIfsdIHwYMFq2FlnenXCC5r%2BlmXj%2FPEGnfkFE%2B47JvW7V0vuz%2Fw%2BhFrfkmJumbKVq7jl6NoSDzb6DRYDiFbCC9G8K5ortdKb45GvNsYzR6YA6kaqgQ6hSNDSFZRo1ChbV60E9S7YkUAec0Tb2j9MfMbyjqfa3S3PnrTwC&X-Amz-Signature=789af230b7d262dcf6ce840641444ba43bd16378a28b4f256ba5fbe8437d8a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRLE3BJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICtchNS%2FK4T6p2hLNrOHQ7g72jFylLvwRYu1RejGWy4YAiAWPYPjAddTAE%2BhWENlG2vSjFB18MJeB4J64WRXhHqMLiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtRsa8Vx0kYSxJSzKtwDV4rlwBg0AgTrWRHGfsWEB7UoY1PiDq5Vjw56wvZ8eRzaqGDr99I6vhNiy3rMgEu8v95UKMM4hN2acG5Pm3Koaf1J0FyUi5VVbJrIYUHfUJWNXxkv91ceG6pyrhR0XXBpluj9uFgt3nt5rqHc4Tpmp4HiA3e8kiXbik%2BVwuloD6bFO3RyuTYGr3dBRseIHQQHUUIZQMzd2As7IIWOy38rOXe1t3%2FVfi8YzCNmc%2Bdrf%2FCMhS2ogOcSUpc8s7xRz8opnTaBxBAf1XwuychaVgBJtBbFfXzecOuCuqJWPyr30dVgefYKFRBdrDjoc%2FKL8Vtd6rStt%2BgxUNFH%2F2dL0tWRmIhE%2BTAmLzKs%2FPx2vMhdNWcO8%2FG9bVRGKrNTsDK4LaMZIMrUemHNqlDlLoZqWOIwlMII7lagZ%2B1l6kOw2Db9EdOwtkbRL65VT5McJxx6qLoO6yVZjK86%2BaXWfNC7jn3XLoc6tiGhToDzKDMCEqQyuO8Y3n1udM31s3ObYaLrF0mTz8hzskI4HmA37XIPG8exPjJYudcCnpc6jcsf4WiIapfh4Mt3AW7PhD6YqjUtWR7KUIRSMcUWoPzuzw3P7rzBjq1iCB1Axjx5zBv6B%2FWihvK1CTHCzEAFLEtNW%2BgwhomqwgY6pgGBu4dMPg1%2FbSFe6bPQAb%2B4CCyrfcId%2BlcfuoB4ZZJ0nVceTvP4Lf3l33ItIfsdIHwYMFq2FlnenXCC5r%2BlmXj%2FPEGnfkFE%2B47JvW7V0vuz%2Fw%2BhFrfkmJumbKVq7jl6NoSDzb6DRYDiFbCC9G8K5ortdKb45GvNsYzR6YA6kaqgQ6hSNDSFZRo1ChbV60E9S7YkUAec0Tb2j9MfMbyjqfa3S3PnrTwC&X-Amz-Signature=c53262285ad882132a94c6dd98f283ae4e35f286dfd1882a8107c74ed6a210ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
