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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP5LTS4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCeL2K4FBR2DynzKv0gEUqwt1%2ByEKBpGqX2SnWl6%2Fo%2F1AIgFi%2FrBaeUEtZ6VeXFfWyfoqx2j6MYNDVdIY2AigpN1JQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxevYlBrdRtJ5hXSCrcA1diRLK64OnCCpcUhEZ5AAUAYTvSTt%2B3FjASuapx0Jat3eZpHIP2cz4l5NddCdeTP7IgB0zx%2BxmHJdpULGC83LWQl8FHPFFyaN4BKKJ6kyCrLdjuVJumR67H9DiVRKwz2Ew4nt8VVUkzFhvAmzhkk2aoCZWEfBk0kG6rt0lh8RwDoy1bhjMxgMqkQBzczQOJmQSqQlC3gJUMKScm7t3I6aGT6pm42MB3H0QuSfwJgC%2FYoZ%2FcIeV32sq%2BP7BMAlj89RSq%2BhPCbK3hqgVupuW2c0Rf1%2FBdvwjv4j6tqgHRIgyfCEBCdSa1qKqlb8AbVr3BYJ6REyf1uwhR%2BH3VOdY7cJ%2BCJXY5uLEEu3kgbZc%2BDj4WpQeDzoV8Jhd0xfoeZnWTog4N7ZqazA4jMxdQUb7M5E6U88gdB0JpeTr2%2BsbdHLOX565fDpPugXRyb9r5LsLljaSSC%2FnKK%2FhQw8y3PzTELjDQboss2GwQw5%2FKtuXM3F688e9SK%2FCk1q3hNxLBAgA40cBEYcMPkbBWjuAJSco0P5jwz5%2FHdQGLb7tZ8mnmd2NsikTrOrrNC6EQuU77MUUbctSdxJlMvPOXhuZ7Y8urdICYYtkC1ybiuEnoI5aAGjda8NLtQXjpYTO6EU3HMJy6874GOqUBXF2ZEJ4Hu%2Fr%2FIq0BBzrBdfSnO7hV1O0CQ1apQZspU72XYjmOjzAn0%2FeXZ5BuZ8lrMTRaCLGuJI%2F9pQFHnQoABEhDiVSXxd7M%2F%2FYILAjxLpnZyXWHlhm7W2B0QL319%2FhuGfknMm%2BmeRDxT1ByP6ao9Pa%2FZBmv%2BJAzjmnkOxR2EERMfMLAIQQfJAKIfBAhIVsptaDqPbLV9RRpe%2Fk4R%2Bd7Mux3UZJT&X-Amz-Signature=3376e6b6bfc5a56c88aaa8c2fcb141f7bf0fb30bfcc6679ee743730eb55f3f35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAP5LTS4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCeL2K4FBR2DynzKv0gEUqwt1%2ByEKBpGqX2SnWl6%2Fo%2F1AIgFi%2FrBaeUEtZ6VeXFfWyfoqx2j6MYNDVdIY2AigpN1JQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxevYlBrdRtJ5hXSCrcA1diRLK64OnCCpcUhEZ5AAUAYTvSTt%2B3FjASuapx0Jat3eZpHIP2cz4l5NddCdeTP7IgB0zx%2BxmHJdpULGC83LWQl8FHPFFyaN4BKKJ6kyCrLdjuVJumR67H9DiVRKwz2Ew4nt8VVUkzFhvAmzhkk2aoCZWEfBk0kG6rt0lh8RwDoy1bhjMxgMqkQBzczQOJmQSqQlC3gJUMKScm7t3I6aGT6pm42MB3H0QuSfwJgC%2FYoZ%2FcIeV32sq%2BP7BMAlj89RSq%2BhPCbK3hqgVupuW2c0Rf1%2FBdvwjv4j6tqgHRIgyfCEBCdSa1qKqlb8AbVr3BYJ6REyf1uwhR%2BH3VOdY7cJ%2BCJXY5uLEEu3kgbZc%2BDj4WpQeDzoV8Jhd0xfoeZnWTog4N7ZqazA4jMxdQUb7M5E6U88gdB0JpeTr2%2BsbdHLOX565fDpPugXRyb9r5LsLljaSSC%2FnKK%2FhQw8y3PzTELjDQboss2GwQw5%2FKtuXM3F688e9SK%2FCk1q3hNxLBAgA40cBEYcMPkbBWjuAJSco0P5jwz5%2FHdQGLb7tZ8mnmd2NsikTrOrrNC6EQuU77MUUbctSdxJlMvPOXhuZ7Y8urdICYYtkC1ybiuEnoI5aAGjda8NLtQXjpYTO6EU3HMJy6874GOqUBXF2ZEJ4Hu%2Fr%2FIq0BBzrBdfSnO7hV1O0CQ1apQZspU72XYjmOjzAn0%2FeXZ5BuZ8lrMTRaCLGuJI%2F9pQFHnQoABEhDiVSXxd7M%2F%2FYILAjxLpnZyXWHlhm7W2B0QL319%2FhuGfknMm%2BmeRDxT1ByP6ao9Pa%2FZBmv%2BJAzjmnkOxR2EERMfMLAIQQfJAKIfBAhIVsptaDqPbLV9RRpe%2Fk4R%2Bd7Mux3UZJT&X-Amz-Signature=9d1c177a1b1511ad1c7dc3d217d659433313204e3eeaae5321954fbe0ae86ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
