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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWFJCUA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF6RrdzoiUgv31tm%2FzIefPu2mwbS%2Ff9AVO2Gv%2Fm5UJpHAiEA63L6jYdwRm2e4pcaLQpDCKBjViEMzOvlUe9IxJrBbl8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA%2BHOI7pS%2BqIioma%2FircAy80hKzr%2FdpAihZcoQnFUKFgXeAL6Bm74m8zQGZHJlRzJRYakDWE7YYIi7gsUykoPaLu%2B%2BoCczeudDMvFcagGBryQIJYK4CEqrhFsWvjB7gqCXBaYVPFr4jxZsMcfN1jeqcNZz1foQNhccE%2BQE0PrKHyIDTPI7ybMomDJRXoM%2FmT9m6PTcVGzJlAEF4SrCmaPtsrdPEgXl%2BN3GFz2wIttPjabJm4j2srqnhRt4xv%2FI5aqiyxJMAWexpmdrNL6bMOjcnr4eYY0dvIiL3p4gwgcW%2FusocNRsSsIk8NMzp52xFbIitJ0BTiFvdk6VG6IXuxXj81UVSFX9SD%2Be8RiDWgQB4Jw%2FM%2B4LLoJE6kvxnNHBVlco4mACigzF2QhiofyWnLD7iSkh%2BZjvAIyv4HkF5GOS89MqgaBN1ESVR7dTsceFPqYl25vHM3J7L3szdGX%2BWeHgcMRJMgrZSjnZWje0%2BSjFc6yLAgEFp8ZE8ItTsaP5JzvhjybwBS7WUmN60ZYkn1WxYuk8%2F0YY%2FexZ75tbXFR%2F9Dfbw0m7OecslFKWJCBni23xzofmh5ptTIumWcpBjYb4U5RGNpCNA9G8gQ6lVm0j1Z69zDg%2BTpy221cPRErNpeP7I%2FDqYG7cVvKZOxMJTZ7L4GOqUBIH%2Fk%2Bn9DxSQ9gFtojvjbJxt%2BemENHY4BIEN3oCnQzGXMMcjMkIGN6N9y34R22H7TU7UBvpeHojkGfbjEQe6VffZxdKB%2FuBfEEKsDnsI92qQFlwSaUtUp%2BvOdUWXScpe2db6D6dRWWlGrDuEPuKATWJW%2BZF1RBkjBkyfk0nGtdpMXica3wlinpwOgxeTNMv3XiXheH2kdA9pSI6bcjuP1%2FLSlHVQb&X-Amz-Signature=b41b74e7b657ac3c9f25acace72ccd96bbca04a18f367fe35c94e8bd1d955bad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWFJCUA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF6RrdzoiUgv31tm%2FzIefPu2mwbS%2Ff9AVO2Gv%2Fm5UJpHAiEA63L6jYdwRm2e4pcaLQpDCKBjViEMzOvlUe9IxJrBbl8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDA%2BHOI7pS%2BqIioma%2FircAy80hKzr%2FdpAihZcoQnFUKFgXeAL6Bm74m8zQGZHJlRzJRYakDWE7YYIi7gsUykoPaLu%2B%2BoCczeudDMvFcagGBryQIJYK4CEqrhFsWvjB7gqCXBaYVPFr4jxZsMcfN1jeqcNZz1foQNhccE%2BQE0PrKHyIDTPI7ybMomDJRXoM%2FmT9m6PTcVGzJlAEF4SrCmaPtsrdPEgXl%2BN3GFz2wIttPjabJm4j2srqnhRt4xv%2FI5aqiyxJMAWexpmdrNL6bMOjcnr4eYY0dvIiL3p4gwgcW%2FusocNRsSsIk8NMzp52xFbIitJ0BTiFvdk6VG6IXuxXj81UVSFX9SD%2Be8RiDWgQB4Jw%2FM%2B4LLoJE6kvxnNHBVlco4mACigzF2QhiofyWnLD7iSkh%2BZjvAIyv4HkF5GOS89MqgaBN1ESVR7dTsceFPqYl25vHM3J7L3szdGX%2BWeHgcMRJMgrZSjnZWje0%2BSjFc6yLAgEFp8ZE8ItTsaP5JzvhjybwBS7WUmN60ZYkn1WxYuk8%2F0YY%2FexZ75tbXFR%2F9Dfbw0m7OecslFKWJCBni23xzofmh5ptTIumWcpBjYb4U5RGNpCNA9G8gQ6lVm0j1Z69zDg%2BTpy221cPRErNpeP7I%2FDqYG7cVvKZOxMJTZ7L4GOqUBIH%2Fk%2Bn9DxSQ9gFtojvjbJxt%2BemENHY4BIEN3oCnQzGXMMcjMkIGN6N9y34R22H7TU7UBvpeHojkGfbjEQe6VffZxdKB%2FuBfEEKsDnsI92qQFlwSaUtUp%2BvOdUWXScpe2db6D6dRWWlGrDuEPuKATWJW%2BZF1RBkjBkyfk0nGtdpMXica3wlinpwOgxeTNMv3XiXheH2kdA9pSI6bcjuP1%2FLSlHVQb&X-Amz-Signature=879c89746800d1c68b7da4260e9c647044d3716e43eb1cfde579f8efa55f0a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
