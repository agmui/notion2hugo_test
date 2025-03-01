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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTLOLJ4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCFmOrvJi%2B8n3Oif38tNRbRwNYVQ3SwspXljolIvfJNwwIgUSysN2o0TUuyWvu0xCPuzUYvO6CGSAOEVXQaH2QNI%2BkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLmQT4ZNYLJtochaCrcAzVeRyLCtmF4WCkYnEnwY1RLoVmdxQq%2FRcOp9e6UgA8PvgdsmTdRpWOi6am4oMDRh0IAJVH6OsmhjPRHecbF6mY9WXg8pNvlXnYuALVKR4mE2QxNcFYL%2FLb%2B766sB6LzcKGFQCZbu7Uun3NhhegEPMi9wF%2B4CnjKK2filk3QnpmdyFOTRgGK%2B62fN2lkoEcXbDpA4BQWN3ifOpEpnrkM0RphsF7V2F1Crf%2FxSkLYG0CTvB2Vy4pKXmw%2B9LHHIWHSFGAbItmyJC5QEAwEiIgvwKSfhY0X6ZAyGZpmoKwqPy4jAflR6pCRfbicviA8Adte7oPaqfw7sylByXKo4BwMZfQ9UUQkes9XUUVcyQxhyzxEG7oQ%2BT7SZGZavzLI20H9IfJfv5RzKi7RD6kKTQzce8xOgTW%2BGNmqhCqOD0t3v%2BZ2zdpGoG3cidR6FG1CTZZYokwGhdBRUxnWMOuVCmJ%2FpSyJSjudtQzek7PQFnGj7v41oZ2h3BHcJ0SUnZOEphXK4ur4gVptx8zaY9P8DE%2FnMomVlmNA5X6J3d2pdukd6Wt7vQosPx6cf74inbui%2BYb8qsUHXRiFH7rFxZs33EP3u4isc%2BNiVzhhHfPyqIc3zolj847eYF7PPLivGUkfML%2BQir4GOqUBenbZkoxeo6diEYRQgTcDYa6pNJ0p%2B9jqK0eTIGsaXHttvVN3aAFXZoX7bXkmeTK7NrJ0ZZLlz6L1BaEJPBcZcaWwaUuW65U4j4k10X%2BbkkQIp7o5UgZyHnU5NOI1tKF4XDnSiyy50lfdJHn%2Fc4b0zR3r1sBv7szl1yGDVlUq5Mx5GSeV2v%2FGJH2KKbNGSvTGVeqJXYePb%2B%2BO4ARqRF7kd554iNFs&X-Amz-Signature=dfe396e9bfa522b4623b59663be0f8dd2511edde64dde2e537d8a3a7ee124244&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTLOLJ4%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCFmOrvJi%2B8n3Oif38tNRbRwNYVQ3SwspXljolIvfJNwwIgUSysN2o0TUuyWvu0xCPuzUYvO6CGSAOEVXQaH2QNI%2BkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLmQT4ZNYLJtochaCrcAzVeRyLCtmF4WCkYnEnwY1RLoVmdxQq%2FRcOp9e6UgA8PvgdsmTdRpWOi6am4oMDRh0IAJVH6OsmhjPRHecbF6mY9WXg8pNvlXnYuALVKR4mE2QxNcFYL%2FLb%2B766sB6LzcKGFQCZbu7Uun3NhhegEPMi9wF%2B4CnjKK2filk3QnpmdyFOTRgGK%2B62fN2lkoEcXbDpA4BQWN3ifOpEpnrkM0RphsF7V2F1Crf%2FxSkLYG0CTvB2Vy4pKXmw%2B9LHHIWHSFGAbItmyJC5QEAwEiIgvwKSfhY0X6ZAyGZpmoKwqPy4jAflR6pCRfbicviA8Adte7oPaqfw7sylByXKo4BwMZfQ9UUQkes9XUUVcyQxhyzxEG7oQ%2BT7SZGZavzLI20H9IfJfv5RzKi7RD6kKTQzce8xOgTW%2BGNmqhCqOD0t3v%2BZ2zdpGoG3cidR6FG1CTZZYokwGhdBRUxnWMOuVCmJ%2FpSyJSjudtQzek7PQFnGj7v41oZ2h3BHcJ0SUnZOEphXK4ur4gVptx8zaY9P8DE%2FnMomVlmNA5X6J3d2pdukd6Wt7vQosPx6cf74inbui%2BYb8qsUHXRiFH7rFxZs33EP3u4isc%2BNiVzhhHfPyqIc3zolj847eYF7PPLivGUkfML%2BQir4GOqUBenbZkoxeo6diEYRQgTcDYa6pNJ0p%2B9jqK0eTIGsaXHttvVN3aAFXZoX7bXkmeTK7NrJ0ZZLlz6L1BaEJPBcZcaWwaUuW65U4j4k10X%2BbkkQIp7o5UgZyHnU5NOI1tKF4XDnSiyy50lfdJHn%2Fc4b0zR3r1sBv7szl1yGDVlUq5Mx5GSeV2v%2FGJH2KKbNGSvTGVeqJXYePb%2B%2BO4ARqRF7kd554iNFs&X-Amz-Signature=1162883d59d8f7351fda763f7709fbae3b31fe47e34874c593eb95e3e251872c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
