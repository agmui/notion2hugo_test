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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFAIGXLC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAT17M16UB5VqpQ06eMQ2I%2F4yXBuAj%2FO2gGFBvxOrOtwIhANjZ6MMIkbD0ukSLYF20oVJrZjoDFuRtiABy9yZula1VKv8DCE8QABoMNjM3NDIzMTgzODA1IgyD66Klpk5d5u3YJhgq3ANxXHeLzl2nMh%2FYFS6RPovtcfsImQOSVdaQSpRFHmbuji%2BU6EOCxNYeuUAeiDHws%2FvlwIdC9sUBRommm9JokWW1tBYkekVqHoYZJD7LmpZDOCcdmhO54%2BYwdM220TZWh%2BOwk9QLibLsNfhF5sZoKOy7iBeqYeGMH14hssMB5b4y4W1I8yg7KCoMxb3gmCeHDGp3LdtekSJHcIDNCfHhq%2Br%2Fq5lznkVFdbFSLhRcrEteCZbYtyggSJBNcSkVYXvBmn2%2FehDe7VU41NEieeVYu8lI9vF2IjywE54EWKb5eiRTTYXrX3n0B5CVuAH%2FIDCQkulHhqmn9bhTOJC1VVLFRbzHVwrzPPM9sG1GXFJMQBrrlYNF7QQQxUwoQNRc5Xqb1SfJm2zY0Y%2Fo1GXbYm7xqbmiH24CCL8K4%2B7kHSLN9iiX%2B2dk2qIBUFtpbPlo7kJ%2FHwMElbhefUgg%2Foet6JCNUvnJmM2dCYwQ8K37yyQqUgSrfqJO1gt6SQhBG1x22TmILGyAnJqSOtSxmnf8t2tyG5xMhifHxagzQTodmq3gCa7XtiXZg%2Fs0Yz5vJbDunk8c3%2Ba8Az%2F4mepSnINNtTGsPU4sbgaxai%2Flkn8ibCmNYU%2BOUz%2Bh7cNlF6wnabH4qDDTorXABjqkATtEMgT7mNOnT9P8pkS3stZ7nyRTiOb5jNP6SQrTK77IXk8z%2FqfW%2FYC%2BbjasOqwjLxEyzkCp7i8SftQ1nHeaBNn5HFzBDF6JxF%2BFWoFACB6OUt1nGglCgguJI8d9tpzmqj2GW%2B0%2FuII9ArkfEremSYjjgB2EtMQQBca%2BcLEvT68Z6XPprifOQumQAA2s2sFSYxUDJhX%2FUgLvIwzfyLRPK3NvSIlJ&X-Amz-Signature=9e896a75b7da551b595c872a6392f5c7778d7192935b1a6158e7a93b94588740&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFAIGXLC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAT17M16UB5VqpQ06eMQ2I%2F4yXBuAj%2FO2gGFBvxOrOtwIhANjZ6MMIkbD0ukSLYF20oVJrZjoDFuRtiABy9yZula1VKv8DCE8QABoMNjM3NDIzMTgzODA1IgyD66Klpk5d5u3YJhgq3ANxXHeLzl2nMh%2FYFS6RPovtcfsImQOSVdaQSpRFHmbuji%2BU6EOCxNYeuUAeiDHws%2FvlwIdC9sUBRommm9JokWW1tBYkekVqHoYZJD7LmpZDOCcdmhO54%2BYwdM220TZWh%2BOwk9QLibLsNfhF5sZoKOy7iBeqYeGMH14hssMB5b4y4W1I8yg7KCoMxb3gmCeHDGp3LdtekSJHcIDNCfHhq%2Br%2Fq5lznkVFdbFSLhRcrEteCZbYtyggSJBNcSkVYXvBmn2%2FehDe7VU41NEieeVYu8lI9vF2IjywE54EWKb5eiRTTYXrX3n0B5CVuAH%2FIDCQkulHhqmn9bhTOJC1VVLFRbzHVwrzPPM9sG1GXFJMQBrrlYNF7QQQxUwoQNRc5Xqb1SfJm2zY0Y%2Fo1GXbYm7xqbmiH24CCL8K4%2B7kHSLN9iiX%2B2dk2qIBUFtpbPlo7kJ%2FHwMElbhefUgg%2Foet6JCNUvnJmM2dCYwQ8K37yyQqUgSrfqJO1gt6SQhBG1x22TmILGyAnJqSOtSxmnf8t2tyG5xMhifHxagzQTodmq3gCa7XtiXZg%2Fs0Yz5vJbDunk8c3%2Ba8Az%2F4mepSnINNtTGsPU4sbgaxai%2Flkn8ibCmNYU%2BOUz%2Bh7cNlF6wnabH4qDDTorXABjqkATtEMgT7mNOnT9P8pkS3stZ7nyRTiOb5jNP6SQrTK77IXk8z%2FqfW%2FYC%2BbjasOqwjLxEyzkCp7i8SftQ1nHeaBNn5HFzBDF6JxF%2BFWoFACB6OUt1nGglCgguJI8d9tpzmqj2GW%2B0%2FuII9ArkfEremSYjjgB2EtMQQBca%2BcLEvT68Z6XPprifOQumQAA2s2sFSYxUDJhX%2FUgLvIwzfyLRPK3NvSIlJ&X-Amz-Signature=19d602f79f08f2704c1a7328048ca6aecbf8b8a6bcce527b145e42176c4fcd03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
