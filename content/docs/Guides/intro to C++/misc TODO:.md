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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFC7LV3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4qwh%2FW9zNyn7MhsHpNGfK7Y199XulDi5i%2BRTgl3llewIgEonYjPtVbtj4XMA04nJhYvlHobD5snupJ610RS3yObUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEliAu8FJ1uExs%2BxPircA2vGfjYfet4T3H6cBCuiQkncf%2B%2BYM8O5JErHxvcpQafQsNCoy3gTHMFjbiNV2XSinW3Pq2Td9IbWhd%2Fi0vmG4rI3d9or%2BFULng8J1eIy8JkjS0%2BCERkP6NJfz5tdiD%2BQpzRe0xsghm7CyeYauqSi8%2BodcJ9Whd8gI1HVADoT9GZgwPSTenmlC0EJQfvhklD995EsDeTy6wNhgwD4PxTs663SZeNsA%2BMC06zU6zoFSxIQJ4OvRULR8jl%2ByJupUQI3XwYYSqz8XVDkr2FXBiJKvjHKEstxpB9E5srbG8e9YTQ5c6cW3RAUWgbAamWgu2c7ozDRXRJHsPOaCfhVpu1NyQle4bEQr4oBBK8G8CvJ4n4RM%2Fl4KMLL5WqKywPhWUpYikko5QhdM30J6BcfId7pq2PKnr2VE3yRNHjMO1b8HFjTr%2Bqx%2FKu3aObYOAMtGa5%2BRFva62GIAkyNo43LhDt6xnSixCxYMKxdIjP6YOxPKX7Z0eQPdtP2efpzsSqLEsG8SvJRWLIy%2BpCZFlVo4QTYui2f%2FoZrVxI96y3vHhLS4m9ihXDM4Z4E16uZPOGQ0IxpSeBRMRvf1KdqBD5RmVo0nR1iwQmW%2F09ON6I5fVOTMxabOizULxst8ZjjD%2FjtMPO37sMGOqUBVfXfwn3yZ85MJj%2FRUYXpjiRHUm54JdfTa0E%2BBWYTq%2BYEsgMO40TeIuAU3vG4aAMAmNFTMW2A92IlzavmLGzSE7Dx%2BGx46Y6njDtMm3bCoTnU0zsaO16ULLYq5O%2B3z3Na4Ar1uW25smMaQSpTesure5MiTTu%2FIVDTPEHfhATiFPxKuj7yK7UhAUuJeNBTI17vzuokq9sXSxnDN6ZAe876qHJovi%2FR&X-Amz-Signature=81d9b8fb8466ce483522661f61b747d8a43d3844e498ea4a06c3a4a115d7f5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFC7LV3%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4qwh%2FW9zNyn7MhsHpNGfK7Y199XulDi5i%2BRTgl3llewIgEonYjPtVbtj4XMA04nJhYvlHobD5snupJ610RS3yObUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEliAu8FJ1uExs%2BxPircA2vGfjYfet4T3H6cBCuiQkncf%2B%2BYM8O5JErHxvcpQafQsNCoy3gTHMFjbiNV2XSinW3Pq2Td9IbWhd%2Fi0vmG4rI3d9or%2BFULng8J1eIy8JkjS0%2BCERkP6NJfz5tdiD%2BQpzRe0xsghm7CyeYauqSi8%2BodcJ9Whd8gI1HVADoT9GZgwPSTenmlC0EJQfvhklD995EsDeTy6wNhgwD4PxTs663SZeNsA%2BMC06zU6zoFSxIQJ4OvRULR8jl%2ByJupUQI3XwYYSqz8XVDkr2FXBiJKvjHKEstxpB9E5srbG8e9YTQ5c6cW3RAUWgbAamWgu2c7ozDRXRJHsPOaCfhVpu1NyQle4bEQr4oBBK8G8CvJ4n4RM%2Fl4KMLL5WqKywPhWUpYikko5QhdM30J6BcfId7pq2PKnr2VE3yRNHjMO1b8HFjTr%2Bqx%2FKu3aObYOAMtGa5%2BRFva62GIAkyNo43LhDt6xnSixCxYMKxdIjP6YOxPKX7Z0eQPdtP2efpzsSqLEsG8SvJRWLIy%2BpCZFlVo4QTYui2f%2FoZrVxI96y3vHhLS4m9ihXDM4Z4E16uZPOGQ0IxpSeBRMRvf1KdqBD5RmVo0nR1iwQmW%2F09ON6I5fVOTMxabOizULxst8ZjjD%2FjtMPO37sMGOqUBVfXfwn3yZ85MJj%2FRUYXpjiRHUm54JdfTa0E%2BBWYTq%2BYEsgMO40TeIuAU3vG4aAMAmNFTMW2A92IlzavmLGzSE7Dx%2BGx46Y6njDtMm3bCoTnU0zsaO16ULLYq5O%2B3z3Na4Ar1uW25smMaQSpTesure5MiTTu%2FIVDTPEHfhATiFPxKuj7yK7UhAUuJeNBTI17vzuokq9sXSxnDN6ZAe876qHJovi%2FR&X-Amz-Signature=477a485365e8ade7bbfacef2b97ff976f658b3ff38b85a4790663887937f731a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
