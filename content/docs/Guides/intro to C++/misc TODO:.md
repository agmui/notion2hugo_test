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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EED7PEP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn77XWd9Xhtk0tqmw5D%2Bln8Ch3O8gBsl0IvMAKUC6q3AiEA78p5Tgw1LJuYeP%2FEIrZOkdBR9fqqmIOMGfmkihJpqwgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDB5E89%2F8pnWnIkFAySrcAxk8%2BrjgAmf1KU%2Fm%2BpJ0QFhrvNZeN0cihRDZG0tBnjoW%2BRRf7wTl1V%2FbU2Lm1zXwD68pXNtWN%2BY5dxA6rHucrne0I%2FGjJ9vFa0FYZN0a2jWRQ2q%2F99bnf%2BuDr3GF26IaKIZVIA8QDA5F0o4xFJnIyVDjlB4qUUkq0a52P%2F4yISyzzoGG%2FE2T6VBDaI0KFcRuiT8enM4VSISAZMJbEqu5Dhgo9gFekBhM5DP317xj2CMU0VzL%2Fo3NgaARs1ScuwBDdT3NInbYK3vil6zZnPVgpqkL9HrWI0bWlyEAsU6%2F5T80%2B8vX%2B1rdcmscg8IRhJLc7Y%2FF4gmYPvGCt5Pfrrqmy69ur3LS33RjzYtEktLbHwMwq%2F88jqT4NZH3iMSbiEOthfg5YoqradKYHtPbL0GI14cn9VF7Pcw2SHbv555iaUhjZQgvX0mat53m5ORgcIvIT2fV3tdY%2Fhjo7UWkNjAQJGqQz1pM2h3kJwdaSUfzOwCoFIGO%2BycB7OPuDzTaWiWijKg6UapkCd8QEY9QQrLXrgSYG3AFXvcqnOWRoxLkuHasZz8TfaSOU9sJL2D8D8zOfknWgoJnulb8bPmoj7Oo55vKJfRQexBIAwJiMeYlvsipkG7vaUtDacIz7bCXMPDuxMIGOqUBi%2Bj1asRWQPRCgA%2BV8Gug96Omtqf8txCbfEUSbbNcAT4UDLCe2lk5yLcVa2oT7%2FAWIDCBHiS27HTLbPf1I3c2%2B7v4T9ffkYMZIXfav9TRQzDh0vGCOoGPRWGe74G8xWCS1sWLjauNbbbdmlIkHTn45P5F7kByVwLXq8TEvQ5zXuUBvJ3SO6bQPDHAo6gQ93OBasIEv%2BMBS7BQ05erwbgnH8ayU6rV&X-Amz-Signature=0a403c8fc54e6b39d889784d0414e98104bddc920df991c0c0eabb2b7579188a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EED7PEP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDn77XWd9Xhtk0tqmw5D%2Bln8Ch3O8gBsl0IvMAKUC6q3AiEA78p5Tgw1LJuYeP%2FEIrZOkdBR9fqqmIOMGfmkihJpqwgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDB5E89%2F8pnWnIkFAySrcAxk8%2BrjgAmf1KU%2Fm%2BpJ0QFhrvNZeN0cihRDZG0tBnjoW%2BRRf7wTl1V%2FbU2Lm1zXwD68pXNtWN%2BY5dxA6rHucrne0I%2FGjJ9vFa0FYZN0a2jWRQ2q%2F99bnf%2BuDr3GF26IaKIZVIA8QDA5F0o4xFJnIyVDjlB4qUUkq0a52P%2F4yISyzzoGG%2FE2T6VBDaI0KFcRuiT8enM4VSISAZMJbEqu5Dhgo9gFekBhM5DP317xj2CMU0VzL%2Fo3NgaARs1ScuwBDdT3NInbYK3vil6zZnPVgpqkL9HrWI0bWlyEAsU6%2F5T80%2B8vX%2B1rdcmscg8IRhJLc7Y%2FF4gmYPvGCt5Pfrrqmy69ur3LS33RjzYtEktLbHwMwq%2F88jqT4NZH3iMSbiEOthfg5YoqradKYHtPbL0GI14cn9VF7Pcw2SHbv555iaUhjZQgvX0mat53m5ORgcIvIT2fV3tdY%2Fhjo7UWkNjAQJGqQz1pM2h3kJwdaSUfzOwCoFIGO%2BycB7OPuDzTaWiWijKg6UapkCd8QEY9QQrLXrgSYG3AFXvcqnOWRoxLkuHasZz8TfaSOU9sJL2D8D8zOfknWgoJnulb8bPmoj7Oo55vKJfRQexBIAwJiMeYlvsipkG7vaUtDacIz7bCXMPDuxMIGOqUBi%2Bj1asRWQPRCgA%2BV8Gug96Omtqf8txCbfEUSbbNcAT4UDLCe2lk5yLcVa2oT7%2FAWIDCBHiS27HTLbPf1I3c2%2B7v4T9ffkYMZIXfav9TRQzDh0vGCOoGPRWGe74G8xWCS1sWLjauNbbbdmlIkHTn45P5F7kByVwLXq8TEvQ5zXuUBvJ3SO6bQPDHAo6gQ93OBasIEv%2BMBS7BQ05erwbgnH8ayU6rV&X-Amz-Signature=6790c755c40d1a76565cbf3770723ff2a53a11ddb40fdc800d152be24f3e3031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
