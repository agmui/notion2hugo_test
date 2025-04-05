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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAKWOBG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGARXDCRDhncWiA0l30Wm4sFY%2F2IPwK8BHPc8BX0JEqSAiEA%2BkbAe0Qh9uuEa1GcZQzpeTsEPFZOXvbuAvM89Dtt300q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFUFOP84gwrC3lRTwCrcAzScksIXpqSIJvdfcItnQeOPUpr%2B9QOX4yMsmisXUWTTItG2vstMFzWddQt1FBFVK2Yt0MuJ1XlGue8WKBFsSTQ%2Fol2pF7vGPTua1h40Ww6gUAK0iscMQgjV9izcwj7gKqgYcripKziz6IC9p0Xs8zqu2N6fLeaeaeDYeKacMuOr25Es7AZjlT0m8l%2BYY1B1WA5qmrs%2FRUiCbLruueZvj310QuJcq7hXlGyFoRfO%2BYruj20iOF81gkLZd4RjwC1TWA2R0DqaR4HnbDMJClkOJTqlDj7hfoZFYRzMNPuK0nlG1ZdFHpAOfHlAzYoIIrZg37FJX0gcDGINOriDvDEqg2pYIrUPK7XHct%2BLY2S4z2Kfcp6rehyeZfh7cP2nByStZGeSRVWvfS59sQ6s9Eyv4fSJUOwxs6s8T1%2FGWvJ6JZVf%2B3j7Wva3hZsSWj8ChTteG1fw9rxjwIrh9agIDSrWsdYZxE6IecU%2FqbAQq7wJDL88VcDCn8QcYFdJeTK1RshOnsQ%2Fh%2Ff2R2c6Aq2%2FGX0G46fhCD4HB5%2B8Epp0uE9HF0Uq5btJOXfnc81B6BMA4zVFnpfoho%2B%2FbUyyftpchhglg7BKYB%2BWy4m3gfm%2FqWwnxKklUM22S4lBQSxJfHnnMOqSxr8GOqUBWR8nsQgGf24SwvgjGafHP%2FxsoFV81Rqogj3khGKaEuWV9ZGpQuPtyHI5ScqWGKjxkYjSlSM1fPTD8mEUW0whTxa6PYk6JVeInLHHFvlWuvbrODf%2BczXdXHzkLZJYiIV5HKyz3NaJTLLPYrfe9kJ3eOE0ofimMnIW5zTbbOsSzpLbd87PpRBqlhc5AX2uG%2B%2FWCtWy6rzKFBp1ydr5Qjvm2hsgLWqq&X-Amz-Signature=d50922f0c853b1885378b65320fd3d6e79029b94aa64c6dfee3d2b86b43cf4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OAKWOBG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGARXDCRDhncWiA0l30Wm4sFY%2F2IPwK8BHPc8BX0JEqSAiEA%2BkbAe0Qh9uuEa1GcZQzpeTsEPFZOXvbuAvM89Dtt300q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFUFOP84gwrC3lRTwCrcAzScksIXpqSIJvdfcItnQeOPUpr%2B9QOX4yMsmisXUWTTItG2vstMFzWddQt1FBFVK2Yt0MuJ1XlGue8WKBFsSTQ%2Fol2pF7vGPTua1h40Ww6gUAK0iscMQgjV9izcwj7gKqgYcripKziz6IC9p0Xs8zqu2N6fLeaeaeDYeKacMuOr25Es7AZjlT0m8l%2BYY1B1WA5qmrs%2FRUiCbLruueZvj310QuJcq7hXlGyFoRfO%2BYruj20iOF81gkLZd4RjwC1TWA2R0DqaR4HnbDMJClkOJTqlDj7hfoZFYRzMNPuK0nlG1ZdFHpAOfHlAzYoIIrZg37FJX0gcDGINOriDvDEqg2pYIrUPK7XHct%2BLY2S4z2Kfcp6rehyeZfh7cP2nByStZGeSRVWvfS59sQ6s9Eyv4fSJUOwxs6s8T1%2FGWvJ6JZVf%2B3j7Wva3hZsSWj8ChTteG1fw9rxjwIrh9agIDSrWsdYZxE6IecU%2FqbAQq7wJDL88VcDCn8QcYFdJeTK1RshOnsQ%2Fh%2Ff2R2c6Aq2%2FGX0G46fhCD4HB5%2B8Epp0uE9HF0Uq5btJOXfnc81B6BMA4zVFnpfoho%2B%2FbUyyftpchhglg7BKYB%2BWy4m3gfm%2FqWwnxKklUM22S4lBQSxJfHnnMOqSxr8GOqUBWR8nsQgGf24SwvgjGafHP%2FxsoFV81Rqogj3khGKaEuWV9ZGpQuPtyHI5ScqWGKjxkYjSlSM1fPTD8mEUW0whTxa6PYk6JVeInLHHFvlWuvbrODf%2BczXdXHzkLZJYiIV5HKyz3NaJTLLPYrfe9kJ3eOE0ofimMnIW5zTbbOsSzpLbd87PpRBqlhc5AX2uG%2B%2FWCtWy6rzKFBp1ydr5Qjvm2hsgLWqq&X-Amz-Signature=8d477ccc167d92e5a8d2d57f9cf8f87da77cf60ec474d87ef2d91c7a26b9cb90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
