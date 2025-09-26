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

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25S53CG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyKk4CbV5VzjDoPXXEQuMYOnckndzwWbaKGYE9SX3BkAIgbEWNWCzqmEjLaOQ6qo9WTm5J0HyDXLKHaytEz3DxCpMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUZQjBJ1l3yM1w3%2BircA0075mIj4AYKmRefVZWohgRKNmMhJmrAtfNs0x%2BLFQeynVDlG%2FQTLmPVVwwghBnykHPGaRtmhLNEA5pOgkGoAVQ5a%2FOfkV%2F03xZZVZFVdtB7v7a%2BVxgU1U6HkeiRlT3KXZUxFR0A2aTTiXDE2yx09a9FY2x5w7ycjUgUfDiC0opq4SBMjWEEz4%2FftLKjhdxzUlx2iR5EyWJWKc8eEZrERfzXjfyzIuu5Spq52Ak4I3AOrf6uuOB0Gwr9QCe4k7l4QpSpLgsh8br7AH4cyOUAU%2FwZI0erL5q22RmP78uaD5JXpB3NlxxH0IBng2jAvtz8tUKd0ff7kkjhMu5xbUzNrFUG2CCrw%2BQKNrep23Rrh73YqnVvtzcc7FAxphD%2F5TcgmapqDVocMXOUltFKO72l3BqUwdUGJS8331V7uOHWupq6TenD779CIo8hWRUCxuQIXYP2%2BRKkrkB39xze18ODzDR2aK%2BIVvuz0RQKDGAKGvIk4jWIee4MKM4PKzgjqrAFMmv2f8Obw3AFRtIslDg474ta9yTl%2FJFclzgE8bd0Z4HCgZGqbBTDxtfBXkY24prZwi98JTY7fgqHMNM%2BlZ81Mx3WvogOwvTORxC0upKYhbmqiA4hiPQX%2FaHPILlaMLHV18YGOqUB%2FSAYEDfbFnVPDAdtorvZpvBp8eMtFLCD%2BIb2PDrkY33zc5wwdZB3pvdJTmAaTsl1tXMxPxyQq1C6vq5lX2uhlF%2BqOm37jOgCze9bCDdqR3EUQDknYG7pUk6yk7EdC3qBxaB5BruDpQCy10YG3UWVwmf%2FUSYU5CmlS9eeiCGwnyR8otZrF8MM5LMZm8tiXX4DB8a2GDiV4Onc58GAuJezO7K48y3D&X-Amz-Signature=896f7e7ee78a5fc29c4607e6232cd4fe2aa6617781eeef57530262cc822f6977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25S53CG%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyKk4CbV5VzjDoPXXEQuMYOnckndzwWbaKGYE9SX3BkAIgbEWNWCzqmEjLaOQ6qo9WTm5J0HyDXLKHaytEz3DxCpMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUZQjBJ1l3yM1w3%2BircA0075mIj4AYKmRefVZWohgRKNmMhJmrAtfNs0x%2BLFQeynVDlG%2FQTLmPVVwwghBnykHPGaRtmhLNEA5pOgkGoAVQ5a%2FOfkV%2F03xZZVZFVdtB7v7a%2BVxgU1U6HkeiRlT3KXZUxFR0A2aTTiXDE2yx09a9FY2x5w7ycjUgUfDiC0opq4SBMjWEEz4%2FftLKjhdxzUlx2iR5EyWJWKc8eEZrERfzXjfyzIuu5Spq52Ak4I3AOrf6uuOB0Gwr9QCe4k7l4QpSpLgsh8br7AH4cyOUAU%2FwZI0erL5q22RmP78uaD5JXpB3NlxxH0IBng2jAvtz8tUKd0ff7kkjhMu5xbUzNrFUG2CCrw%2BQKNrep23Rrh73YqnVvtzcc7FAxphD%2F5TcgmapqDVocMXOUltFKO72l3BqUwdUGJS8331V7uOHWupq6TenD779CIo8hWRUCxuQIXYP2%2BRKkrkB39xze18ODzDR2aK%2BIVvuz0RQKDGAKGvIk4jWIee4MKM4PKzgjqrAFMmv2f8Obw3AFRtIslDg474ta9yTl%2FJFclzgE8bd0Z4HCgZGqbBTDxtfBXkY24prZwi98JTY7fgqHMNM%2BlZ81Mx3WvogOwvTORxC0upKYhbmqiA4hiPQX%2FaHPILlaMLHV18YGOqUB%2FSAYEDfbFnVPDAdtorvZpvBp8eMtFLCD%2BIb2PDrkY33zc5wwdZB3pvdJTmAaTsl1tXMxPxyQq1C6vq5lX2uhlF%2BqOm37jOgCze9bCDdqR3EUQDknYG7pUk6yk7EdC3qBxaB5BruDpQCy10YG3UWVwmf%2FUSYU5CmlS9eeiCGwnyR8otZrF8MM5LMZm8tiXX4DB8a2GDiV4Onc58GAuJezO7K48y3D&X-Amz-Signature=5040329abbf864e439f4de1915a73033cd84c63bbddf13115aa62a3df2e2e5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
