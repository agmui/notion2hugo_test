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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YCR6ZB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCFm5floRjvZRArdQkAIGEumZ7AVfBvxiG7cetz5i5piQIhAInIriT7WrlcQ8z4z6l0qtzGA8QOlyR1hbZqQRgCkkT0Kv8DCB0QABoMNjM3NDIzMTgzODA1IgygXtlmNDzhlGo3bakq3ANKcWnydzhMvlbqqRIXCjpATaSBu9%2Bdx0lQXt035JKg8%2B7t76sbdCF5PE0jXbjb8zu5IUSkoMDRXcXL5aZPfNrEjTIign2AZpbErY67QaICxKTOqmtRSd8al9kVlxrzBTrxwhZkeJ6Tvo9H11jMR9QKhI6%2BIMDjtr55UJGQ3IMcxU4c7d6d5eZrb4WCIZV%2F%2BA1VfLaD0GmdwCfUNAix0OqotaV%2B4Jg0QsfFUbaZmQADr%2BPAdWYh8zzfjnfL875drN20luh3tzBBmLI8qdbgV3GwgRVq1PI5ln8bJDTQdvFotGvmcyKhS5QvymN44KMjqZWZ7qUA1ZIhxXKdikmiOOoDGf2RxDl0IHaQadP8h9FVGbi4YylzyFoC2GPDQpw0opNwMWCyBdNGg04I%2BdnBxiXNPvfIFYKq2KYH%2BU9I67BhWydn9Pk6zJueZd%2FUtRHMXXNXOIBZOwN%2Fk457Yk0W6UopfyKL3RMW79HO8DHed%2FcRbeHEZM4IaiwJH7Cy9Pb8fIQO1e%2FuZDzZX7U4nkvWTEK6F4jDJwyeEwuRMLYPEoGM%2BVUsiyrs5gCpZA5C3l2DJyGPSK4O1JvuWsPcUZv4K0%2BygRU0uajfd%2Bkvn%2BIt0sD6BPBv4%2FM3XxcJnFlIDDCLkNDDBjqkAW5CHo%2FE%2BImyXNcJ0BAamFQm3zXZ%2B1J%2B1fbRCCUlLSPsQD9%2FqeGMQqm6Sk968XAx6HsdU2g%2Fuf%2BrRR2QMXtod0XRC84hOUTJ%2FPYG6osZWg3qLJcbk%2Bb77h4LuZ4h0Cow7uwWYS7Dfm9GsKozL9XRIidHREFHfe7Ql%2B8fN8uWpXQFw5NEPd9wvO%2FYv5%2BQW4Dso91gP7JQCmhrwqLf12byWwCj2D6m&X-Amz-Signature=a2ac5e2dded890428c6533f0e5eec7930d5cf88c6c2648627fddb4841384d0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YCR6ZB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCFm5floRjvZRArdQkAIGEumZ7AVfBvxiG7cetz5i5piQIhAInIriT7WrlcQ8z4z6l0qtzGA8QOlyR1hbZqQRgCkkT0Kv8DCB0QABoMNjM3NDIzMTgzODA1IgygXtlmNDzhlGo3bakq3ANKcWnydzhMvlbqqRIXCjpATaSBu9%2Bdx0lQXt035JKg8%2B7t76sbdCF5PE0jXbjb8zu5IUSkoMDRXcXL5aZPfNrEjTIign2AZpbErY67QaICxKTOqmtRSd8al9kVlxrzBTrxwhZkeJ6Tvo9H11jMR9QKhI6%2BIMDjtr55UJGQ3IMcxU4c7d6d5eZrb4WCIZV%2F%2BA1VfLaD0GmdwCfUNAix0OqotaV%2B4Jg0QsfFUbaZmQADr%2BPAdWYh8zzfjnfL875drN20luh3tzBBmLI8qdbgV3GwgRVq1PI5ln8bJDTQdvFotGvmcyKhS5QvymN44KMjqZWZ7qUA1ZIhxXKdikmiOOoDGf2RxDl0IHaQadP8h9FVGbi4YylzyFoC2GPDQpw0opNwMWCyBdNGg04I%2BdnBxiXNPvfIFYKq2KYH%2BU9I67BhWydn9Pk6zJueZd%2FUtRHMXXNXOIBZOwN%2Fk457Yk0W6UopfyKL3RMW79HO8DHed%2FcRbeHEZM4IaiwJH7Cy9Pb8fIQO1e%2FuZDzZX7U4nkvWTEK6F4jDJwyeEwuRMLYPEoGM%2BVUsiyrs5gCpZA5C3l2DJyGPSK4O1JvuWsPcUZv4K0%2BygRU0uajfd%2Bkvn%2BIt0sD6BPBv4%2FM3XxcJnFlIDDCLkNDDBjqkAW5CHo%2FE%2BImyXNcJ0BAamFQm3zXZ%2B1J%2B1fbRCCUlLSPsQD9%2FqeGMQqm6Sk968XAx6HsdU2g%2Fuf%2BrRR2QMXtod0XRC84hOUTJ%2FPYG6osZWg3qLJcbk%2Bb77h4LuZ4h0Cow7uwWYS7Dfm9GsKozL9XRIidHREFHfe7Ql%2B8fN8uWpXQFw5NEPd9wvO%2FYv5%2BQW4Dso91gP7JQCmhrwqLf12byWwCj2D6m&X-Amz-Signature=161437b00e2c3d0c8f91981c8c18e448208c531fc413f3e0cf868839b6788520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
