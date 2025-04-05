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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPLVVSE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBdmLMDMjjMq5LIDrSVKSUbpFutUUvYQT9oyE9y4WcjQIgH7HLBt5fI1k4DNc4%2BAFpWE0BhpnqkBeIgCkSdY8AKM4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBoH%2BiDPkij8acfFIircA%2BqlA1K5oTMle%2FNX9R2k85AGdQptiGx14Lcuz8vFVh6F87exhRnwcpCHoejjf7TUNm0OrleeRBvq7VlV5ZOkxGRf7YxWWVgdlxyRViGvTlAuAeSpuwi8%2FZteqHr5UaWvQs6JyG4yJTCqoesIk%2F%2FSuIowKcg8Hv%2Fj7ZXGwFbDUIzhimZ9BkdmxMOXTutNZZOqPL7wmTIkM8XBMKK4IIVP8nAllaPu%2FuP4qgQypf4GOYYqJjhjjEsWoK2w9WKhHx0gBxY9bc5qZB73xtKfyyjDfVHyTqJSdjUh54FjrnpPXPTTh76gB5UwcGo%2FZNQnBAHy%2FqtkkMWWlmSDc8VdVGZ%2BT7qTvkCecRfUGReByvxH9DL3jXSefljXzBNFo4%2FZGBgo1eEhlcIJiZr06NhJ7xpvGtk465faElUkHov0wFrQjHFoL02DYiqmHOsIeQTcVpypvYPNBTdyfFEGkXUHcaqyPfjKPTjJqKW8bD92HylqWzmladIuDxXanRuxPPi3v5kCnfCXVpw4Sxes7VnlRhkGTnK1iQkK3HZrZruOesYbbU5ff2jUAoxvU3G8mKsb1qtNXoCrBMtISW0KT%2BskE8qoFtY%2B5Ggz5Rwd7efk94lg5oZjMB4%2F%2FqGSz774zWSXMNXHxb8GOqUBA4hq8VuEY63KzkE02OD2Rx0kiqdHTR9pVpXO%2FXBifILT1GqaKgkGBYjllrwqVpbxQlYWbya42oa01s3lzUP829Ne1YH8vpXRtoEpy6CGvX4mdcgn6iiLW9LZGNeq0%2Fue6qjuzU2r1jre8jvJ2zPR8IAiYVzMT%2BJXuich9iPGVnGLi7i00D5AVF3CwhEf6PHOMzzImq4suQPg3p3T2axXqHAh%2BGDV&X-Amz-Signature=4081ab85c1ce532e9d94eeba7f4e25a5ce8abc289356625590ebc219d2d9c0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPLVVSE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBdmLMDMjjMq5LIDrSVKSUbpFutUUvYQT9oyE9y4WcjQIgH7HLBt5fI1k4DNc4%2BAFpWE0BhpnqkBeIgCkSdY8AKM4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBoH%2BiDPkij8acfFIircA%2BqlA1K5oTMle%2FNX9R2k85AGdQptiGx14Lcuz8vFVh6F87exhRnwcpCHoejjf7TUNm0OrleeRBvq7VlV5ZOkxGRf7YxWWVgdlxyRViGvTlAuAeSpuwi8%2FZteqHr5UaWvQs6JyG4yJTCqoesIk%2F%2FSuIowKcg8Hv%2Fj7ZXGwFbDUIzhimZ9BkdmxMOXTutNZZOqPL7wmTIkM8XBMKK4IIVP8nAllaPu%2FuP4qgQypf4GOYYqJjhjjEsWoK2w9WKhHx0gBxY9bc5qZB73xtKfyyjDfVHyTqJSdjUh54FjrnpPXPTTh76gB5UwcGo%2FZNQnBAHy%2FqtkkMWWlmSDc8VdVGZ%2BT7qTvkCecRfUGReByvxH9DL3jXSefljXzBNFo4%2FZGBgo1eEhlcIJiZr06NhJ7xpvGtk465faElUkHov0wFrQjHFoL02DYiqmHOsIeQTcVpypvYPNBTdyfFEGkXUHcaqyPfjKPTjJqKW8bD92HylqWzmladIuDxXanRuxPPi3v5kCnfCXVpw4Sxes7VnlRhkGTnK1iQkK3HZrZruOesYbbU5ff2jUAoxvU3G8mKsb1qtNXoCrBMtISW0KT%2BskE8qoFtY%2B5Ggz5Rwd7efk94lg5oZjMB4%2F%2FqGSz774zWSXMNXHxb8GOqUBA4hq8VuEY63KzkE02OD2Rx0kiqdHTR9pVpXO%2FXBifILT1GqaKgkGBYjllrwqVpbxQlYWbya42oa01s3lzUP829Ne1YH8vpXRtoEpy6CGvX4mdcgn6iiLW9LZGNeq0%2Fue6qjuzU2r1jre8jvJ2zPR8IAiYVzMT%2BJXuich9iPGVnGLi7i00D5AVF3CwhEf6PHOMzzImq4suQPg3p3T2axXqHAh%2BGDV&X-Amz-Signature=d8028171ef4137424d9da1da125b9b0d0a9cf6751775760a1e6528269d919602&X-Amz-SignedHeaders=host&x-id=GetObject)

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
